import { m as t } from "./chunk-4453BUC4.js";
function a(e) {
  return `${t.COMMUNITY_BASE_URL}${e.public_data?.profile_url ? "id/" + e.public_data.profile_url : "profiles/" + e.public_data?.steamid}/`;
}
export { a };
