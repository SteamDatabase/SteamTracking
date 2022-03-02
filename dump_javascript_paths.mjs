import { join as pathJoin, resolve as pathResolve } from "path";
import { readdir as readDir } from "fs/promises";

// Should this just be a recursive search for all webpack files?
const paths = [
	"./Scripts/WebUI/",
	"./ClientExtracted/clientui/",
	"./ClientExtracted/steamui/",
	"./help.steampowered.com/public/javascript/applications/help/",
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

	return files.filter((fileName) => fileName.endsWith(".js")).map((fileName) => pathJoin(dirName, fileName));
}

export async function GetFilesToParse() {
	const promises = await Promise.all(paths.map(GetJavascriptFiles));
	return [].concat(...promises).sort();
}
