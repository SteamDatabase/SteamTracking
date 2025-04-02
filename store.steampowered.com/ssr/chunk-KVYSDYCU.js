const CLSTAMP = 9650136;

import { a as y } from "./chunk-4HQPZ5LY.js";
import { d as a } from "./chunk-HHDRG5ZJ.js";
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
