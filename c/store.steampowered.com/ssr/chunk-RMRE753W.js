import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = _(_());
function _(_) {
  let _ = typeof matchMedia == "function" ? matchMedia : _,
    _ = (0, _.useMemo)(() => _(_), [_, _]),
    [_, _] = (0, _.useState)(_ ? _.matches : !1);
  return (
    (0, _.useEffect)(() => {
      if (!_) return () => {};
      _(_.matches);
      function _(_) {
        _(_.matches);
      }
      return (
        _.addEventListener("change", _),
        () => _.removeEventListener("change", _)
      );
    }, [_]),
    _
  );
}
function _() {
  return null;
}
export { _ };
