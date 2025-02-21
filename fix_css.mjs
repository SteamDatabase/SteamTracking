import { readFile, writeFile } from "node:fs/promises";
import { createWriteStream } from "node:fs";
import { parse, latestEcmaVersion } from "espree";
import { traverse, Syntax } from "estraverse";
import { GetFilesToParse, GetRecursiveFilesToFix } from "./dump_javascript_paths.mjs";
import { match } from "node:assert";

const classRegex = /(\.[a-zA-Z0-9_-]+)/g;
const files = await GetFilesToParse();

const classNames = {};

for (const file of files) {
    try {

        const code = await readFile(file);
        const ast = parse(code, {
            ecmaVersion: latestEcmaVersion,
            sourceType: "module",
            loc: true,
        });
        
        traverse(ast, {
            enter: (node) => {
                // console.log(node);
                if (
                    node.type === Syntax.AssignmentExpression &&
                    node.left.type === Syntax.MemberExpression &&
                    node.left.property.type === Syntax.Identifier &&
                    node.left.property.name === "exports" &&
                    node.right.type === Syntax.ObjectExpression &&
                    node.right.properties.constructor === Array
                ) {
                    // TODO: store it under a per website value to make sure there's no class colision
                    for (const array_node of node.right.properties) {
                        if (!isNaN(array_node.value.value)) {
                            continue;
                        }
                        if (!classNames.hasOwnProperty(array_node.value.value)) {
                            classNames[array_node.value.value] = [array_node.key.name];
                        } else
                        {
                            if (!classNames[array_node.value.value].includes(array_node.key.name)) {
                                classNames[array_node.value.value].push(array_node.key.name);
                            }
                        }
                    }
                }
            },
        });
    } catch (e) {
        console.error(`Unable to parse "${file}":`, e);
    }
}

for await (const file of GetRecursiveFilesToFix()) {
    try {
        console.log(file);
        let css = (await readFile(file)).toString();
        const matches = [...new Set (css.match(classRegex))];
        if (matches) {
            for (const match of matches) {
                if (classNames.hasOwnProperty(match.slice(1))) {
                    css = css.replaceAll( match, `.${classNames[match.slice(1)].join("|")}`);
                }
            }
        }
        await writeFile(file, css);
    } catch (e) {
        console.error(`Unable to fix "${file}":`, e);
    }
}
