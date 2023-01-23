const { readFileSync } = require("node:fs");
const { parseArgs } = require("node:util");
const dbusTypeToRust = require("./dbus-type-to-rust");

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

console.log(values, positionals);

let out = "";

const [ inputPath ] = positionals;
const dbusParams = readFileSync(inputPath).toString("utf-8");
out += `struct ${values.name ?? "NoName"} {
    ${structProperties(dbusParams)}
}`;

if (values.implementation) {
    out += `\n\nimpl UnitDto {
    pub fn create_from_proxy(proxy: &impl OrgFreedesktopSystemd1Unit) -> Result<UnitDto, dbus::Error> {
        ${implementation(structProperties(dbusParams))}
    }
}`
}

console.log(out);


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
