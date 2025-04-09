const CLSTAMP = 9664229;

import { a as y } from "./chunk-RWJNX7LU.js";
import { d as a } from "./chunk-5MMJIUFA.js";
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
