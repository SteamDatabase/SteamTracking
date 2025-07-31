import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = _({
  Methods: ["POST"],
});
async function _(_) {
  return _("/wishlist/action/reorder", {
    method: "POST",
    body: JSON.stringify({
      rgApps: _,
    }),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}
function _(_, _, _) {
  _(_ >= 0 && _ < _.length, `Invalid source index: ${_} items: ${_.length}`),
    _(_ >= 0 && _ < _.length, `Invalid target index: ${_} items: ${_.length}`);
  let _ = _.slice(),
    _ = _.splice(_, 1);
  _.splice(_, 0, ..._);
  let _ = [];
  return (
    _.forEach((_, _) => {
      let _ = _ + 1;
      _.priority != _ && ((_.priority = _), _.push(_));
    }),
    {
      rgNewItems: _,
      rgChangedIndicies: _,
    }
  );
}
export { _, _, _ };
