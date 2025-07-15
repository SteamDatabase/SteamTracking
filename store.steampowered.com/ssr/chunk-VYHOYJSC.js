import { j as b } from "./chunk-FO6E325R.js";
import { a as F } from "./chunk-RTOCT7NB.js";
import { b as i } from "./chunk-ZAV64SLM.js";
import { p as m } from "./chunk-ZZOBHWVT.js";
import { a as O } from "./chunk-3GMFNQR5.js";
import { e as v } from "./chunk-VTJ2AC5Q.js";
var a = v(O());
var C = v(m()),
  y = a.default.forwardRef(function (e, u) {
    let {
        onExplicitFocusLevelChanged: c,
        onOKButton: o,
        onCancelButton: l,
        navRef: s,
        focusable: p,
        ...t
      } = e,
      n = a.default.useRef(null),
      { fnOnOKButton: f, fnOnCancelButton: d } = R({
        navRefPanel: n,
        onOKButton: o,
        onCancelButton: l,
        onExplicitFocusLevelChanged: c,
      }),
      P = i(s, n);
    return (0, C.jsx)(F, {
      ...t,
      onOKButton: f,
      onCancelButton: d,
      navRef: P,
      ref: u,
      focusable: p !== !1,
    });
  });
var H = a.default.forwardRef(function (e, u) {
  let { onOKButton: c, onCancelButton: o, navRef: l, focusable: s, ...p } = e,
    t = a.default.useRef(null),
    n = a.default.useRef(null),
    f = a.default.useCallback((B, _) => B.FocusVisibleChild(), []),
    { fnOnOKButton: d, fnOnCancelButton: P } = R({
      navRefPanel: t,
      onOKButton: c,
      onCancelButton: o,
      fnFocusChildren: f,
    }),
    h = i(n, u),
    G = i(l, t);
  return (0, C.jsx)(b, {
    ...p,
    onOKButton: (B) => d?.(B),
    onCancelButton: P,
    navRef: G,
    ref: h,
    focusable: s !== !1,
  });
});
function R(r) {
  let {
    navRefPanel: e,
    onOKButton: u,
    onCancelButton: c,
    onExplicitFocusLevelChanged: o,
    fnFocusChildren: l,
  } = r;
  l = l ?? E;
  let s = a.default.useCallback(
      (t) => {
        let n = e.current;
        return n?.BHasFocus() && l(n, t.detail.button)
          ? (o && o(!0), !0)
          : u
            ? u(t)
            : !1;
      },
      [e, u, o, l],
    ),
    p = a.default.useCallback(
      (t) => {
        let n = e.current;
        return n?.BFocusWithin() &&
          !n.BHasFocus() &&
          n.TakeFocus(t.detail.button)
          ? (o && o(!1), !0)
          : c
            ? c(t)
            : !1;
      },
      [e, c, o],
    );
  return { fnOnOKButton: s, fnOnCancelButton: p };
}
function E(r, e) {
  return r.ChildTakeFocus(e);
}
export { y as a };
