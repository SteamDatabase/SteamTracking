const CLSTAMP = 9436633;

import { j as t } from "./chunk-6MX6RJBJ.js";
function a(e) {
  return `${t.COMMUNITY_BASE_URL}${e.public_data?.profile_url ? "id/" + e.public_data.profile_url : "profiles/" + e.public_data?.steamid}/`;
}
export { a };
