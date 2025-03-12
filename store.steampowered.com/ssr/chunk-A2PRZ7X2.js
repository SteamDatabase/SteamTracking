const CLSTAMP = 9598355;

import { a as O } from "./chunk-667HSWGZ.js";
import { y as R } from "./chunk-GW7ACP5Y.js";
import { o as _ } from "./chunk-A7W4HGSY.js";
import { m as h } from "./chunk-DNKCKFVA.js";
import { a as D } from "./chunk-OZ6CSMNN.js";
import { d as u } from "./chunk-XL5OQFLS.js";
function Q() {
  return !1;
}
var H = u(D(), 1),
  C = u(h(), 1),
  A = H.createContext({
    AddImpression: () => {
      console.log("Impression Tracking not enabled");
    },
    BIsValid: () => !1,
  });
function Z() {
  return H.useContext(A);
}
function j(n) {
  return (0, C.jsx)(A.Provider, {
    value: n.ImpressionTracker,
    children: n.children,
  });
}
var $ = u(O(), 1),
  r = u(D(), 1);
var I = "F0YMvqVKHkY-";
function Y() {
  return !(
    typeof HTMLElement < "u" &&
    typeof HTMLElement.prototype == "object" &&
    "popover" in HTMLElement.prototype
  );
}
async function w() {
  Y() && (await import("./popover-fn-DYCVOGWV.js")).apply();
}
var m = u(h(), 1);
w();
function W(n) {
  let [i, v] = _(n, "-");
  return i === "left" || i === "right" ? [void 0, i] : [i, v];
}
function q(n) {
  let {
      direction: i,
      ignoreHorizontal: v,
      ignoreVertical: x,
      dismissOnClick: y,
      interactionMode: k = 0,
    } = n,
    e = (0, r.useRef)(null),
    p = (0, r.useRef)(!1),
    d = (0, r.useRef)(!1),
    s = (0, r.useRef)(null),
    [o, c] = (0, r.useState)(!1),
    [f, T] = (0, r.useMemo)(() => W(i), [i]),
    P = (0, r.useCallback)(() => {
      if (!s.current || !e.current) return;
      let t = s.current.getBoundingClientRect();
      e.current.style.setProperty("--parentWidth", `${t.width}px`),
        e.current.style.setProperty("--parentHeight", `${t.height}px`),
        v ||
          (T === "left"
            ? f
              ? ((e.current.style.left = "unset"),
                (e.current.style.right = `${document.documentElement.clientWidth - t.right}px`))
              : ((e.current.style.left = "unset"),
                (e.current.style.right = `${document.documentElement.clientWidth - t.left}px`))
            : T === "right"
              ? f
                ? ((e.current.style.left = `${t.left}px`),
                  (e.current.style.right = "unset"))
                : ((e.current.style.left = `${t.right}px`),
                  (e.current.style.right = "unset"))
              : T === void 0 &&
                ((e.current.style.left = `${t.left}px`),
                (e.current.style.right = "unset"))),
        x ||
          (f === "down"
            ? ((e.current.style.top = `${t.bottom}px`),
              (e.current.style.bottom = "unset"),
              e.current.style.setProperty(
                "--availableHeight",
                `${document.documentElement.clientHeight - t.bottom}px`,
              ))
            : f === "up"
              ? ((e.current.style.top = "unset"),
                (e.current.style.bottom = `${document.documentElement.clientHeight - t.top}px`),
                e.current.style.setProperty("--availableHeight", `${t.top}px`))
              : f === void 0 &&
                ((e.current.style.top = `${t.top}px`),
                (e.current.style.bottom = "unset"),
                e.current.style.setProperty(
                  "--availableHeight",
                  `${document.documentElement.clientHeight - t.top}px`,
                )));
    }, [T, v, x, f]),
    b = (0, r.useMemo)(() => {
      if (s.current) return R(s.current);
    }, [s.current]);
  (0, r.useEffect)(() => {
    if (o)
      return (
        e.current?.showPopover(),
        b?.addEventListener("scroll", P),
        () => b?.removeEventListener("scroll", P)
      );
    window.sessionStorage.getItem("DEBUG_StickyContextMenus") != "true" &&
      e.current?.hidePopover();
  }, [o, P, b]);
  let l = (0, r.useCallback)(() => {
      P(), c(!0), (d.current = !0);
    }, [P]),
    a = (0, r.useCallback)(() => {
      (d.current = !1), p.current || c(!1);
    }, []),
    L = (0, r.useCallback)(() => {
      (p.current = !0), c(!0);
    }, []),
    M = (0, r.useCallback)(() => {
      (p.current = !1), d.current || c(!1);
    }, []),
    g = (0, r.useCallback)(() => {
      M(), a();
    }, [M, a]),
    V = (0, r.useCallback)(
      (t) => {
        t.key === "Enter" && (t.preventDefault(), o ? a() : l());
      },
      [a, l, o],
    ),
    B = (0, r.useCallback)(
      (t) => {
        !t.currentTarget.contains(t.relatedTarget) &&
          !e.current?.contains(t.relatedTarget) &&
          a();
      },
      [a],
    ),
    N = (0, r.useCallback)(
      (t) => {
        let F = t.relatedTarget && !t.currentTarget.contains(t.relatedTarget),
          K = !t.relatedTarget && !p.current;
        (F || K) && (M(), c(!1));
      },
      [M],
    ),
    z = (0, r.useCallback)(() => {
      o && y ? g() : l();
    }, [g, y, o, l]),
    S = (0, r.useCallback)(
      (t) => {
        t.key === "Enter" && o && y ? g() : l();
      },
      [g, y, o, l],
    ),
    E = k === 0;
  return {
    isShowingMenu: o,
    triggerProps: {
      "aria-expanded": o,
      onMouseEnter: E ? l : void 0,
      onMouseLeave: E ? a : void 0,
      onClick: E ? void 0 : o ? a : l,
      ref: s,
      onKeyDown: V,
      onBlur: B,
    },
    menuProps: {
      popover: "manual",
      role: "region",
      ref: e,
      onMouseEnter: L,
      onMouseLeave: M,
      onFocus: L,
      onBlur: N,
      onClick: z,
      onKeyDown: S,
      className: I,
    },
    closeMenu: g,
  };
}
function ie(n) {
  let {
      direction: i,
      interactionMode: v = 0,
      ignoreHorizontal: x,
      ignoreVertical: y,
      dismissOnClick: k,
      menuTarget: e,
      className: p,
      children: d,
      ...s
    } = n,
    { triggerProps: o, menuProps: c } = q(n);
  return d
    ? (0, m.jsxs)(m.Fragment, {
        children: [
          (0, r.cloneElement)(e, o),
          (0, m.jsx)("div", {
            ...c,
            className: (0, $.default)(c.className, p),
            ...s,
            children: d,
          }),
        ],
      })
    : e;
}
export { q as a, ie as b, Z as c, j as d, Q as e };
