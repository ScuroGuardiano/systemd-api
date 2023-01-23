const { readFileSync, writeFileSync } = require("node:fs");
const { parseArgs } = require("node:util");
const dbusTypeToRust = require("./dbus-type-to-rust");

const disallowedNames = [ "type" ]

function printUsageAndExit() {
    console.log("=== DBus Properties to Rust converter. ===")
    console.log("This little script will convert properties from DBus interface to Rust struct.")
    console.log("It can also provide implementation to convert from")
    console.log("implementation of proxy generated with dbus-codegen-rust to struct.");
    console.log("If output parameter is not provided it will print output on stdout.");
    console.log();
    console.log("Usage:");
    console.log("node dbus-properties-to-rust.js input_file_with_properties_only -o output.rs -n struct_name -i");
    console.log();
    process.exit();
}

const {
    values,
    positionals
} = parseArgs({
    options: {
        output: {
            type: "string",
            short: "o"
        },
        name: {
            type: "string",
            short: "n"
        },
        implementation: {
            type: "boolean",
            short: "i"
        }
    },
    allowPositionals: true
});

if (positionals.length === 0) {
    printUsageAndExit();
}

let out = "";

const [ inputPath ] = positionals;
const dbusParams = readFileSync(inputPath).toString("utf-8");

const structName = values.name ?? "NoName";
out += `pub struct ${structName} {
${structProperties(dbusParams).split("\n").map(l => `  ${l}`).join("\n")}
}`;

if (values.implementation) {
    out += `\n\nimpl ${structName} {
  pub fn create_from_proxy(proxy: &impl <Insert your implementation here>) -> Result<${structName}, dbus::Error> {
    Ok(${structName} {
${implementation(structProperties(dbusParams)).split("\n").map(l => `      ${l}`).join("\n")}
    })
  }
}`
}

if (values.output) {
    writeFileSync(values.output, out);
}

function structProperties(structParams) {
    return structParams.replace(/@.*\n/g, "")
    .split('\n')
    .map(line => line.replace(/readonly\s/g, ""))
    .map(line => line.replace(/=.*/g, "").trim())
    .filter(line => line != '')
    .map(line => {
        let [type, name] = line.split(" ");
        // I copied this shit from here -> https://stackoverflow.com/a/30521308
        // It works ^_^
        name = name.replace(/(?:^|\.?)([A-Z]+)/g, function (x,y){return "_" + y.toLowerCase()}).replace(/^_/, "")
        if (disallowedNames.includes(name)) {
            name = `${name}_`
        }
        return `${name}: ${dbusTypeToRust(type)}`
    })
    .map(line => `pub ${line}`)
    .join(',\n')
}

function implementation(dbusParams) {
    return dbusParams.replace(/pub\s/gm, "")
    .replace(/\:.*/gm, "")
    .split("\n")
    .filter(line => line != "")
    .map(line => `${line}: proxy.${line}()?`)
    .join(",\n") 
}
