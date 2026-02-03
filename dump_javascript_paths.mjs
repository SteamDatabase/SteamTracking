import { readdir as readDir } from "node:fs/promises";
import { join as pathJoin, resolve as pathResolve } from "node:path";
import { Syntax, VisitorKeys } from "estraverse";

const __dirname = import.meta.dirname;

// https://github.com/estools/estraverse/pull/120
Syntax.StaticBlock = "StaticBlock";
VisitorKeys.StaticBlock = ["body"];

const pathsToRecurse = [
	pathResolve(__dirname, "ClientExtracted/"),
	pathResolve(__dirname, "help.steampowered.com/"),
	pathResolve(__dirname, "partner.steamgames.com/"),
	pathResolve(__dirname, "steamcommunity.com/"),
	pathResolve(__dirname, "store.steampowered.com/"),
	pathResolve(__dirname, "checkout.steampowered.com/"),
	pathResolve(__dirname, "www.dota2.com/"),
	pathResolve(__dirname, "www.counter-strike.net/"),
	pathResolve(__dirname, "www.playdeadlock.com/"),
];

// Should this just be a recursive search for all webpack files?
const paths = [
	pathResolve(__dirname, "ClientExtracted/clientui/"),
	pathResolve(__dirname, "ClientExtracted/steamui/"),
	pathResolve(__dirname, "help.steampowered.com/public/javascript/applications/help/"),
	pathResolve(__dirname, "partner.steamgames.com/public/javascript/applications/appmgmt/"),
	pathResolve(__dirname, "steamcommunity.com/public/javascript/applications/community/"),
	pathResolve(__dirname, "steamcommunity.com/public/javascript/webui/"),
	pathResolve(__dirname, "store.steampowered.com/public/javascript/applications/interactive_recommender/"),
	pathResolve(__dirname, "store.steampowered.com/public/javascript/applications/store/"),
	pathResolve(__dirname, "store.steampowered.com/public/shared/javascript/legacy_web/"),
	pathResolve(__dirname, "www.dota2.com/public/javascript/applications/dpc/"),
	pathResolve(__dirname, "www.dota2.com/public/javascript/dota_react/"),
	pathResolve(__dirname, "www.counter-strike.net/public/javascript/csgo_react/"),
	pathResolve(__dirname, "www.playdeadlock.com/public/javascript/react/"),
];

/**
 * @param {string} dirName
 */
async function GetJavascriptFiles(dirName) {
	dirName = pathResolve(dirName);

	const files = await readDir(dirName);

	return files
		.filter((fileName) => {
			if (fileName === "licenses.js") {
				return false;
			}

			return fileName.endsWith(".js");
		})
		.map((fileName) => pathJoin(dirName, fileName));
}

/**
 * @returns {Promise<string[]>}
 */
export async function GetFilesToParse() {
	const promises = await Promise.all(paths.map(GetJavascriptFiles));
	return [].concat(...promises).sort();
}

/**
 * @param {string} dir
 * @yields {string}
 */
async function* GetRecursiveJavascriptFiles(dir) {
	const dirents = await readDir(dir, { withFileTypes: true });
	for (const dirent of dirents) {
		const res = pathResolve(dir, dirent.name);
		if (dirent.isDirectory()) {
			yield* GetRecursiveJavascriptFiles(res);
		} else if (dirent.isFile() && dirent.name.endsWith(".js")) {
			yield res;
		}
	}
}

/**
 * @yields {string}
 * @returns {AsyncGenerator<string>}
 */
export async function* GetRecursiveFilesToParse() {
	for (const path of pathsToRecurse) {
		yield* GetRecursiveJavascriptFiles(path);
	}
}
