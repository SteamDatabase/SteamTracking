import { d as c, z as u } from "./chunk-A4T2HHP7.js";
import { a as r } from "./chunk-QTDHWPQ4.js";
import { e as t } from "./chunk-O6MHZU76.js";
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
