const CLSTAMP = 9686915;

import { a as y } from "./chunk-ASFGMT32.js";
import { d as a } from "./chunk-BWYQWJMA.js";
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
