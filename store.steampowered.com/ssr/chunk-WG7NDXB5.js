const CLSTAMP = 9764165;

import { a as y } from "./chunk-DDVB5BOE.js";
import { e as a } from "./chunk-TZIVDIHU.js";
var e = a(y());
function f(t) {
  let [r, o] = (0, e.useState)(t.IsReady());
  return (
    (0, e.useEffect)(() => {
      r || t.Ready().then(() => o(!0));
    }, [t, r]),
    r
  );
}
export { f as a };
