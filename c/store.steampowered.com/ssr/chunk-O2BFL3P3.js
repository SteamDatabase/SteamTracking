import { _ } from "./chunk-XXXXXXXX.js";
function _(_, _) {
  return _?.public_data?.profile_url
    ? `${_.COMMUNITY_BASE_URL}id/${_.public_data.profile_url}`
    : _(_?.public_data?.steamid || _);
}
function _(_) {
  return _ ? `${_.COMMUNITY_BASE_URL}profiles/${_}` : "";
}
export { _ };
