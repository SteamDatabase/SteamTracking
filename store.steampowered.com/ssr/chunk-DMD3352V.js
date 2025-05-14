const CLSTAMP = 9745740;

import { a as y } from "./chunk-U3KEEKNR.js";
import { e as a } from "./chunk-34BLD55L.js";
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
