const CLSTAMP = 9743610;

import { m as t } from "./chunk-ZKA6WK4Y.js";
function a(e) {
  return `${t.COMMUNITY_BASE_URL}${e.public_data?.profile_url ? "id/" + e.public_data.profile_url : "profiles/" + e.public_data?.steamid}/`;
}
export { a };
