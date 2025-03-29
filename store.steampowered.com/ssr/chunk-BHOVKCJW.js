const CLSTAMP = 9643551;

import { a as y } from "./chunk-65YUODX3.js";
import { d as a } from "./chunk-6W5PXMM2.js";
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
