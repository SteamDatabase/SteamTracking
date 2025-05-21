const CLSTAMP = 9763432;

import { a as y } from "./chunk-A7PP3V6U.js";
import { e as a } from "./chunk-HLHOAM4O.js";
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
