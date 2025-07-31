import { _ } from "./chunk-XXXXXXXX.js";
var _ = _((_, _) => {
  "use strict";
  (function () {
    "use strict";
    var _ = {}.hasOwnProperty;
    function _() {
      for (var _ = "", _ = 0; _ < arguments.length; _++) {
        var _ = arguments[_];
        _ && (_ = _(_, _(_)));
      }
      return _;
    }
    function _(_) {
      if (typeof _ == "string" || typeof _ == "number") return _;
      if (typeof _ != "object") return "";
      if (Array.isArray(_)) return _.apply(null, _);
      if (
        _.toString !== Object.prototype.toString &&
        !_.toString.toString().includes("[native code]")
      )
        return _.toString();
      var _ = "";
      for (var _ in _) _.call(_, _) && _[_] && (_ = _(_, _));
      return _;
    }
    function _(_, _) {
      return _ ? (_ ? _ + " " + _ : _ + _) : _;
    }
    typeof _ < "u" && _.exports
      ? ((_.default = _), (_.exports = _))
      : typeof define == "function" &&
          typeof define.amd == "object" &&
          define.amd
        ? define("classnames", [], function () {
            return _;
          })
        : (window.classNames = _);
  })();
});
export { _ };
