const CLSTAMP = 9754532;

import { a as y } from "./chunk-DQ6P3SYT.js";
import { e as a } from "./chunk-XI7ETPFA.js";
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
