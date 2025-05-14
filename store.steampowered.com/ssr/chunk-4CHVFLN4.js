const CLSTAMP = 9747147;

import { a as y } from "./chunk-G6S37JGU.js";
import { e as a } from "./chunk-QC3S7CJP.js";
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
