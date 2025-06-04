import {
  A as R,
  B as h,
  d as C,
  l as P,
  s as N,
  w as E,
  y as _,
} from "./chunk-WYWXFVIA.js";
import { a as D } from "./chunk-U44D7H2A.js";
import { b as d } from "./chunk-OB6MJRZZ.js";
import { p as f } from "./chunk-UPXXNQVZ.js";
import { a as L } from "./chunk-WMRGUS7I.js";
import { e as s } from "./chunk-QQZEZALK.js";
var r = s(D()),
  a = s(L());
var l = s(f()),
  B = a.default.createContext({ Component: h });
var W = a.default.forwardRef(function (M, b) {
  let {
      "flow-children": x,
      onActivate: i,
      onCancel: p,
      focusClassName: y,
      focusWithinClassName: O,
      ...T
    } = M,
    { elemProps: e, navOptions: t, gamepadEvents: o } = R(T),
    c = {},
    m = P(x);
  m != 0 && (c.layout = m),
    i && ((e.onClick = e.onClick || i), (o.onOKButton = o.onOKButton || i)),
    o.onOKButton &&
      t.focusable === void 0 &&
      t.focusableIfNoChildren === void 0 &&
      (t.focusable = !0),
    p && (o.onCancelButton = o.onCancelButton || p);
  let { ref: u, node: n } = _({ ...c, ...t }),
    g = N();
  (e.className = (0, r.default)(e.className, "Panel", g && "Focusable")),
    C(o, u);
  let v = d(u, b);
  (t.focusable || t.focusableIfNoChildren) &&
    (!n || !n.Tree.BUseVirtualFocus()) &&
    (e.tabIndex = e.tabIndex || 0),
    t.focusable && (i || o.onOKButton) && (e.role ??= "button");
  let F = (0, a.useContext)(B).Component;
  return (0, l.jsx)(E.Provider, {
    value: n,
    children: n
      ? (0, l.jsx)(F, {
          ...e,
          divRef: v,
          node: n,
          focusClassName: (0, r.default)(y, "gpfocus"),
          focusWithinClassName: (0, r.default)(O, "gpfocuswithin"),
        })
      : (0, l.jsx)("div", { ...e, ref: v }),
  });
});
export { W as a };
