const CLSTAMP = 9580955;

import { a as y } from "./chunk-2M6UGZTQ.js";
import { d as a } from "./chunk-HHQ2KM4L.js";
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
