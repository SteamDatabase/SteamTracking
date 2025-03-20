const CLSTAMP = 9621725;

import { a as y } from "./chunk-LTXTEHOA.js";
import { d as a } from "./chunk-GT4J6GNR.js";
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
