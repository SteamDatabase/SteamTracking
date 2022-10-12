import { join as pathJoin, resolve as pathResolve } from "path";
import { readdir as readDir } from "fs/promises";

const pathsToRecurse = [
	"./Scripts/",
	"./ClientExtracted/",
	"./help.steampowered.com/",
	"./partner.steamgames.com/",
	"./steamcommunity.com/",
	"./store.steampowered.com",
	"./www.dota2.com",
	"./www.underlords.com",
];

// Should this just be a recursive search for all webpack files?
const paths = [
	"./Scripts/WebUI/",
	"./ClientExtracted/clientui/",
	"./ClientExtracted/steamui/",
	"./ClientDeckExtracted/clientui/",
	"./ClientDeckExtracted/steamui/",
	"./help.steampowered.com/public/javascript/applications/help/",
	"./partner.steamgames.com/public/javascript/applications/appmgmt/",
	"./partner.steamgames.com/public/javascript/webui/storeadmin/",
	"./steamcommunity.com/public/javascript/applications/community/",
	"./steamcommunity.com/public/javascript/webui/",
	"./store.steampowered.com/public/javascript/applications/interactive_recommender/",
	"./store.steampowered.com/public/javascript/applications/store/",
	"./store.steampowered.com/public/shared/javascript/legacy_web/",
	"./www.dota2.com/public/javascript/applications/dpc/",
	"./www.dota2.com/public/javascript/dota_react/",
	"./www.underlords.com/public/javascript/",
];

async function GetJavascriptFiles(dirName) {
	dirName = pathResolve(dirName);

	const files = await readDir(dirName);

	return files
		.filter((fileName) => {
			if (fileName == "licenses.js") {
				return false;
			}

			return fileName.endsWith(".js");
		})
		.map((fileName) => pathJoin(dirName, fileName));
}

export async function GetFilesToParse() {
	const promises = await Promise.all(paths.map(GetJavascriptFiles));
	return [].concat(...promises).sort();
}

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

export async function* GetRecursiveFilesToParse() {
	for (const path of pathsToRecurse) {
		yield* GetRecursiveJavascriptFiles(path);
	}
}
