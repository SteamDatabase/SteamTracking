import { A as u, d as c } from "./chunk-SNM2TLOL.js";
import { a as r } from "./chunk-RWKINES4.js";
import { e as t } from "./chunk-V2BZN6OU.js";
var s = t(r());
var a = t(r());
var f = t(r()),
  n = t(r());
function L(e) {
  return c(
    (i) => {
      if (!i || !e) return;
      let o = u(i);
      return (
        o.forEach((l) => l.addEventListener("scroll", e)),
        () => o.forEach((l) => l.removeEventListener("scroll", e))
      );
    },
    [e],
  );
}
export { L as a };
