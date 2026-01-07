import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = _(_(), 1);
function _(_) {
  let { storeBrowseContext: _, cacheStoreItemData: _ } = _();
  return _.useMemo(
    () => ({
      storeBrowseContext: _,
      dataPreload: _
        ? {
            cacheStoreItemData: _,
            data_request: _,
          }
        : void 0,
    }),
    [_, _, _],
  );
}
function _(_, _) {
  if (_[_])
    if (_ == "community_icon") {
      let _ = _.asset_url_format
        .replace(/^steam\//, "images/")
        .replace("${FILENAME}", `${_[_]}.jpg`)
        .replace(/\?.*$/, "");
      return `${_.MEDIA_CDN_COMMUNITY_URL}${_}`;
    } else {
      let _ = _.asset_url_format.replace("${FILENAME}", _[_]);
      return `${_.STORE_ITEM_BASE_URL}${_}`;
    }
}
export { _, _ };
