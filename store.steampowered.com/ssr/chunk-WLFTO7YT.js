const CLSTAMP = 9672883;

import { l as t } from "./chunk-Q4RM7AIX.js";
function a(e) {
  return `${t.COMMUNITY_BASE_URL}${e.public_data?.profile_url ? "id/" + e.public_data.profile_url : "profiles/" + e.public_data?.steamid}/`;
}
export { a };
