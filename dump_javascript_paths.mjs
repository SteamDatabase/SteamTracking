import { join as pathJoin, resolve as pathResolve } from "node:path";
import { readdir as readDir } from "node:fs/promises";
import { Syntax, VisitorKeys } from "estraverse";

// https://github.com/estools/estraverse/pull/120
Syntax.StaticBlock = "StaticBlock";
VisitorKeys.StaticBlock = ["body"];

const pathsToRecurse = [
	"./ClientExtracted/",
	"./help.steampowered.com/",
	"./partner.steamgames.com/",
	"./steamcommunity.com/",
	"./store.steampowered.com/",
	"./checkout.steampowered.com/",
	"./www.dota2.com/",
	"./www.underlords.com/",
	"./www.counter-strike.net/",
];

// Should this just be a recursive search for all webpack files?
const paths = [
	"./ClientExtracted/clientui/",
	"./ClientExtracted/steamui/",
	"./help.steampowered.com/public/javascript/applications/help/",
	"./partner.steamgames.com/public/javascript/applications/appmgmt/",
	"./steamcommunity.com/public/javascript/applications/community/",
	"./steamcommunity.com/public/javascript/webui/",
	"./store.steampowered.com/public/javascript/applications/interactive_recommender/",
	"./store.steampowered.com/public/javascript/applications/store/",
	"./store.steampowered.com/public/shared/javascript/legacy_web/",
	"./www.dota2.com/public/javascript/applications/dpc/",
	"./www.dota2.com/public/javascript/dota_react/",
	"./www.underlords.com/public/javascript/",
	"./www.counter-strike.net/public/javascript/csgo_react/",
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
