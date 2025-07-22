import { a as o } from "./chunk-7HR4H3FY.js";
import { e as r } from "./chunk-6LV3XD5Z.js";
var t = r(o());
function M(n) {
  let a = typeof matchMedia == "function" ? matchMedia : h,
    e = (0, t.useMemo)(() => a(n), [n, a]),
    [s, c] = (0, t.useState)(e ? e.matches : !1);
  return (
    (0, t.useEffect)(() => {
      if (!e) return () => {};
      c(e.matches);
      function i(u) {
        c(u.matches);
      }
      return (
        e.addEventListener("change", i),
        () => e.removeEventListener("change", i)
      );
    }, [e]),
    s
  );
}
function h() {
  return null;
}
export { M as a };
