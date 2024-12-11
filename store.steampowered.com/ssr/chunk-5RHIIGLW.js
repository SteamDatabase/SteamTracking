const CLSTAMP = 9404702;

import { t as R } from "./chunk-5RKSSVBX.js";
import { a as O } from "./chunk-BBX3NATB.js";
import { n as A } from "./chunk-VVTCMENQ.js";
import { l as k, m as h } from "./chunk-M7JZUOB4.js";
import { d as u } from "./chunk-GK2ITS7J.js";
var H = u(k(), 1),
  C = u(h(), 1),
  I = H.createContext({
    AddImpression: () => {
      console.log("Impression Tracking not enabled");
    },
    BIsValid: () => !1,
  });
function Q() {
  return H.useContext(I);
}
function X(n) {
  return (0, C.jsx)(I.Provider, {
    value: n.ImpressionTracker,
    children: n.children,
  });
}
var $ = u(O(), 1),
  r = u(k(), 1);
var w = "F0YMvqVKHkY-";
function U() {
  return !(
    typeof HTMLElement < "u" &&
    typeof HTMLElement.prototype == "object" &&
    "popover" in HTMLElement.prototype
  );
}
async function _() {
  U() && (await import("./popover-fn-J76L42KP.js")).apply();
}
var m = u(h(), 1);
_();
function W(n) {
  let [i, v] = A(n, "-");
  return i === "left" || i === "right" ? [void 0, i] : [i, v];
}
function q(n) {
  let {
      direction: i,
      ignoreHorizontal: v,
      ignoreVertical: x,
      dismissOnClick: y,
      interactionMode: L = 0,
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
    D = (0, r.useCallback)(() => {
      (p.current = !0), c(!0);
    }, []),
    g = (0, r.useCallback)(() => {
      (p.current = !1), d.current || c(!1);
    }, []),
    M = (0, r.useCallback)(() => {
      g(), a();
    }, [g, a]),
    B = (0, r.useCallback)(
      (t) => {
        t.key === "Enter" && (t.preventDefault(), o ? a() : l());
      },
      [a, l, o],
    ),
    V = (0, r.useCallback)(
      (t) => {
        !t.currentTarget.contains(t.relatedTarget) &&
          !e.current?.contains(t.relatedTarget) &&
          a();
      },
      [a],
    ),
    z = (0, r.useCallback)(
      (t) => {
        let K = t.relatedTarget && !t.currentTarget.contains(t.relatedTarget),
          S = !t.relatedTarget && !p.current;
        (K || S) && (g(), c(!1));
      },
      [g],
    ),
    N = (0, r.useCallback)(() => {
      o && y ? M() : l();
    }, [M, y, o, l]),
    F = (0, r.useCallback)(
      (t) => {
        t.key === "Enter" && o && y ? M() : l();
      },
      [M, y, o, l],
    ),
    E = L === 0;
  return {
    isShowingMenu: o,
    triggerProps: {
      "aria-expanded": o,
      onMouseEnter: E ? l : void 0,
      onMouseLeave: E ? a : void 0,
      onClick: E ? void 0 : o ? a : l,
      ref: s,
      onKeyDown: B,
      onBlur: V,
    },
    menuProps: {
      popover: "manual",
      role: "region",
      ref: e,
      onMouseEnter: D,
      onMouseLeave: g,
      onFocus: D,
      onBlur: z,
      onClick: N,
      onKeyDown: F,
      className: w,
    },
    closeMenu: M,
  };
}
function oe(n) {
  let {
      direction: i,
      interactionMode: v = 0,
      ignoreHorizontal: x,
      ignoreVertical: y,
      dismissOnClick: L,
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
export { q as a, oe as b, Q as c, X as d };
