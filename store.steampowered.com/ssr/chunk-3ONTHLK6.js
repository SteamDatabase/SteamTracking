const CLSTAMP = 9437282;

import { l } from "./chunk-W7CVIMSP.js";
import { b as c } from "./chunk-P65GOMA6.js";
var d = c((f) => {
  "use strict";
  var u = l();
  function p(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var v = typeof Object.is == "function" ? Object.is : p,
    y = u.useState,
    S = u.useEffect,
    E = u.useLayoutEffect,
    m = u.useDebugValue;
  function h(e, t) {
    var r = t(),
      o = y({ inst: { value: r, getSnapshot: t } }),
      n = o[0].inst,
      s = o[1];
    return (
      E(
        function () {
          (n.value = r), (n.getSnapshot = t), i(n) && s({ inst: n });
        },
        [e, r, t],
      ),
      S(
        function () {
          return (
            i(n) && s({ inst: n }),
            e(function () {
              i(n) && s({ inst: n });
            })
          );
        },
        [e],
      ),
      m(r),
      r
    );
  }
  function i(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !v(e, r);
    } catch {
      return !0;
    }
  }
  function w(e, t) {
    return t();
  }
  var x =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? w
      : h;
  f.useSyncExternalStore =
    u.useSyncExternalStore !== void 0 ? u.useSyncExternalStore : x;
});
var g = c((q, a) => {
  "use strict";
  a.exports = d();
});
export { g as a };
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js:
  (**
   * @license React
   * use-sync-external-store-shim.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
