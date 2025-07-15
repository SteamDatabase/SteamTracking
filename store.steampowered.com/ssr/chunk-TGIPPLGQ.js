import { a as o } from "./chunk-3GMFNQR5.js";
import { e as r } from "./chunk-VTJ2AC5Q.js";
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
