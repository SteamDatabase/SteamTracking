const CLSTAMP = 9743610;

import { a as y } from "./chunk-G4PN4QF7.js";
import { e as a } from "./chunk-WWI2VL5L.js";
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
