import { d as c, z as u } from "./chunk-ARXSSSYK.js";
import { a as r } from "./chunk-7HR4H3FY.js";
import { e as t } from "./chunk-6LV3XD5Z.js";
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
