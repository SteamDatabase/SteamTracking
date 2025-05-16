const CLSTAMP = 9751509;

import { a as y } from "./chunk-GX7N3KBC.js";
import { e as a } from "./chunk-QAUDHXYH.js";
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
