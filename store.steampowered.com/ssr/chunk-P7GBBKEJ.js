const CLSTAMP = 9650136;

import { l as t } from "./chunk-C37XGPEG.js";
function a(e) {
  return `${t.COMMUNITY_BASE_URL}${e.public_data?.profile_url ? "id/" + e.public_data.profile_url : "profiles/" + e.public_data?.steamid}/`;
}
export { a };
