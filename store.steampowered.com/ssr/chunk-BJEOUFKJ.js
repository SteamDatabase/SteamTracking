const CLSTAMP = 9686915;

import { l as r } from "./chunk-NSLGW32G.js";
function n(e, t) {
  if (!e[t]) return;
  let s = e.asset_url_format.replace("${FILENAME}", e[t]);
  return `${r.STORE_ITEM_BASE_URL}${s}`;
}
export { n as a };
