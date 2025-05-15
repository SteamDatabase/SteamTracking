const CLSTAMP = 9749541;

import { a as y } from "./chunk-RVWZRRQ2.js";
import { e as a } from "./chunk-RY4G6IZ4.js";
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
