const basicTypeMapping = {
    y: "u8",
    b: "bool",
    n: "i16",
    q: "u16",
    i: "i32",
    u: "u32",
    x: "i64",
    t: "u64",
    d: "f64",
    h: "u32",
    s: "String",
    o: "String",
    g: "String"
}

/**
 * @param {string} dbust 
 */
module.exports = function dbusTypeToRust(dbust) {
    const ast = dbusTypeToAST(dbust);
    return traverseAST(ast)[0];
}

function dbusTypeToAST(dbust) {
    let ast = { type: "root", children: [] };

    let nodes = [ast];

    const symbols = dbust.split("");
    for (const symbol of symbols) {
        if (symbol === "(") {
            const struct = { type: "struct", children: [] };
            last(nodes).children.push(struct);
            nodes.push(struct);
            continue;
        }
        if (symbol === ")") {
            nodes.pop();
            while (last(nodes).type === "array") {
                nodes.pop();
            }
            continue;
        }
        if (symbol === "a") {
            const arr = { type: "array", children: [] };
            last(nodes).children.push(arr);
            nodes.push(arr);
            continue;
        }
        last(nodes).children.push({ type: "basic", value: basicTypeMapping[symbol] ?? "invalid_type" });
        while (last(nodes).type === "array") {
            nodes.pop();
        }

    }
    return ast;
}

function traverseAST(ast) {
    if (ast.children?.length === 0) {
        return "";
    }
    return ast.children.map(child => {
        if (child.type === "basic") {
            return child.value;
        }
        if (child.type === "struct") {
            return `(${traverseAST(child).join(", ")})`;
        }
        if (child.type === "array") {
            return `Vec<${traverseAST(child)}>`
        }
    });
}

function last(arr) {
    return arr[arr.length - 1];
}
