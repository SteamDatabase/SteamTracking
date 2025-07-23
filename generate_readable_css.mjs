import { readFile, writeFile, readdir as readDir, rm, mkdir } from "node:fs/promises";
import { parse, latestEcmaVersion } from "espree";
import { traverse, Syntax } from "estraverse";
import { resolve as pathResolve, basename, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const CLASS_SELECTOR_REGEX = /(\.[a-zA-Z0-9_-]+)/g;

const __dirname = dirname(fileURLToPath(import.meta.url));


async function ParseJsFile(file, classNames) {
	//TODO remove /c. once it's not needed
	if (file.endsWith("licenses.js") || file.includes("/c.")) {
		return;
	}

	try {
		const code = await readFile(file);
		const ast = parse(code, {
			ecmaVersion: latestEcmaVersion,
			sourceType: "module",
			loc: true,
		});

		traverse(ast, {
			enter: (node) => {
				if (
					node.type === Syntax.AssignmentExpression &&
					node.left.type === Syntax.MemberExpression &&
					node.left.property.type === Syntax.Identifier &&
					node.left.property.name === "exports" &&
					node.right.type === Syntax.ObjectExpression &&
					node.right.properties.constructor === Array
				) {
					for (const array_node of node.right.properties) {
						if (array_node.value.type !== Syntax.Literal || isProbablyNumeric(String(array_node.value.value))) {
							continue;
						}
						const value = array_node.key.name ?? array_node.key.value;
						if (!Object.hasOwn(classNames, array_node.value.value)) {
							classNames[array_node.value.value] = value;
						} else {
							if (!classNames[array_node.value.value]?.includes(value)) {
								// this makes invalid css but we don't have to care
								classNames[array_node.value.value] = `${classNames[array_node.value.value]}|${value}`;
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

async function FixCssFile(path, classNames) {
	try {
		const css = (await readFile(path)).toString();
		let output = css;
		const matches = [...new Set(css.match(CLASS_SELECTOR_REGEX))];
		if (matches) {
			for (const match of matches) {
				if (Object.hasOwn(classNames, match.slice(1))) {
					output = output.replaceAll(match, `.${classNames[match.slice(1)]}`);
				}
			}
		}
		const outputPath = path.includes("/ClientExtracted/") ? join(dirname(path), "/c.", basename(path)) : join(__dirname, "/c/", path.replace(__dirname, ""));
		if (output !== css) {
			await mkdir(dirname(outputPath), { recursive: true });
			await writeFile(outputPath, output);
		}
	} catch (e) {
		console.error(`Unable to fix "${path}":`, e);
	}
}

async function* GetRecursiveFiles(dir, ext) {
	const dirents = await readDir(dir, { withFileTypes: true });
	for (const dirent of dirents) {
		const res = pathResolve(dir, dirent.name);
		if (dirent.isDirectory()) {
			yield* GetRecursiveFiles(res, ext);
		} else if (dirent.isFile() && dirent.name.endsWith(ext)) {
			yield res;
		}
	}
}

function isProbablyNumeric(string, nbrRecursiceSlice) {
	if (!Number.isNaN(Number(string))) {
		return true;
	}
	let testStr = string;
	for (let i = 0; i < 2 && testStr.length > 0; i++) {
		testStr = testStr.slice(0, -1);
		if (!Number.isNaN(Number(testStr))) {
			return true;
		}
	}
	return false;
}

async function cleanPreviousRun(cssPath) {
	try {
		const rmPath = join(__dirname, "/c/", cssPath, "/**.css");
		await rm(rmPath, { force: true });
	} catch (e) {
		if (e.code !== 'ENOENT') {
			console.error(`Unable to clean "${cssPath}":`, e);
		}
	}
}

let paths;
if (process.argv.length > 2) {
	paths = [process.argv[2]];
}
else {
	paths = [
		"./Scripts/WebUI/",
		"./ClientExtracted/",
		"./help.steampowered.com/",
		"./partner.steamgames.com/",
		"./steamcommunity.com/",
		"./store.steampowered.com/",
		"./www.dota2.com/",
		"./www.underlords.com/",
		"./www.counter-strike.net/",
	];
}


for (const path of paths) {
	const classNames = {};

	cleanPreviousRun(path);

	for await (const file of GetRecursiveFiles(path, ".js")) {
		await ParseJsFile(file, classNames);
	}

	for await (const file of GetRecursiveFiles(path, ".css")) {
		await FixCssFile(file, classNames);
	}
}
