const CLSTAMP = 9632766;

import { a as y } from "./chunk-3I3KBY56.js";
import { d as a } from "./chunk-BDMPFFNE.js";
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
