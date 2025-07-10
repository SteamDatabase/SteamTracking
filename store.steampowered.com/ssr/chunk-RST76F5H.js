import { I as y } from "./chunk-P65DKTFC.js";
import { s as x } from "./chunk-BVSI52WD.js";
import { A as f, w as h } from "./chunk-I2IQXERY.js";
import { m, p as d } from "./chunk-W7XNMZDG.js";
import { a as L } from "./chunk-KETQW37N.js";
import { e as c } from "./chunk-22ZGTD3T.js";
function k(e) {
  return e === 2;
}
var o = c(L(), 1);
var C = c(d(), 1);
function P(e, t, r) {
  return (0, o.useMemo)(
    () =>
      t
        ? r
        : async (a) => {
            if (!a.ctrlKey) return a.preventDefault(), x(e);
          },
    [e, t, r],
  );
}
function D(e) {
  let t = "steam://";
  return k(m.EREALM) && (t = "steamchina://"), t + e;
}
var H = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function A(e, t) {
  let {
      to: r,
      external: a = !0,
      openInNewWindow: b,
      onClick: I,
      snr: p,
      gamepadFocusable: N,
      ...u
    } = e,
    n = r,
    _ = h();
  p && (typeof p == "boolean" ? (n = f(_, n)) : (n = f({ ..._, ...p }, n)));
  let s = n,
    i = a ?? b ?? !1,
    R = H.test(s);
  if (!i && R) {
    let g = new URL(location.href),
      l = new URL(r.startsWith("//") ? g.protocol + r : r);
    l.origin === g.origin
      ? ((s = l.pathname + l.search + l.hash), (i = !1))
      : (i = !0);
  }
  b &&
    (m.IN_CLIENT
      ? (s = D(`openurl/${n}`))
      : ((u.target ??= "_blank"), (u.rel ??= "noreferrer noopener")));
  let v = P(s, i, I),
    E = e.gamepadFocusable ? y : "a";
  return (0, C.jsx)(E, { ref: t, href: n, onClick: v, ...u });
}
var B = o.default.memo(o.default.forwardRef(A));
export { k as a, B as b };
