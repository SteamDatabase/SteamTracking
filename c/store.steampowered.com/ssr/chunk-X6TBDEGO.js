import { _ } from "./chunk-XXXXXXXX.js";
function _(_) {
  return `${_.COMMUNITY_BASE_URL}${_.public_data?.profile_url ? "id/" + _.public_data.profile_url : "profiles/" + _.public_data?.steamid}/`;
}
export { _ };
