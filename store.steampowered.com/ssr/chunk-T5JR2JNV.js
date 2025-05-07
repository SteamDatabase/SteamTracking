const CLSTAMP = 9721150;

import { a as y } from "./chunk-GO5F37EK.js";
import { e as a } from "./chunk-GCN6TXSS.js";
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
