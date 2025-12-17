import { _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
function _(_) {
  return (..._) => {
    let _ = new URL(location.href),
      _ = _.pathname + _.search + _.hash;
    return _(_, {
      action: _,
      data: _,
    });
  };
}
function _(_) {
  if (
    (window.SSR?.reactRoot ||
      _({
        assetData: _,
        metadata: _(),
        loaderData: window.SSR?.loaderData ?? [],
        _: 0,
        renderContext: window.SSR?.renderContext ?? {},
        scrollPosition: {
          _: 0,
          _: 0,
        },
      }),
    0)
  )
    var _;
}
if (!window.SSR?.reactRoot) {
  if (!window.SSR?.clientAssets) throw "Missing SSR clientAssets";
  _(window.SSR?.clientAssets);
}
export { _, _ };
