const CLSTAMP = 9747952;

import { a as y } from "./chunk-6EKZGJX7.js";
import { e as a } from "./chunk-F346NYSN.js";
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
