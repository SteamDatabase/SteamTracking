const CLSTAMP = 9745740;

import { b as B, m as N } from "./chunk-73VN5AXJ.js";
import { t as C, y as G, z } from "./chunk-ZP4CEC7G.js";
import { a as te } from "./chunk-7XGZVIB6.js";
import { b as $ } from "./chunk-DOJLR3KC.js";
import { b as w, y as O } from "./chunk-5G734IZP.js";
import { e as k, p as S, z as A } from "./chunk-K5ZUJZBX.js";
import { p as H } from "./chunk-J54OJ3XM.js";
import { a as x } from "./chunk-U3KEEKNR.js";
import { e as T } from "./chunk-34BLD55L.js";
function re(i) {
  let o = z(),
    a = G();
  return k(oe(o.GetAnonymousServiceTransport(), a, i));
}
function oe(i, o, a) {
  return {
    queryKey: ["LocalizedTagNames", a],
    queryFn: async () => {
      let g = `LocalizedTagNames2_${a}`,
        c = await o.GetObject(g),
        p = C.Init(B);
      p.Body().set_language(a),
        c?.version_hash && p.Body().set_have_version_hash(c.version_hash);
      let e = await N.GetTagList(i, p),
        n;
      if (e.GetEResult() == 1)
        (n = e.Body().toObject()), o && o.StoreObject(g, n);
      else if (e.GetEResult() == 29) n = c || void 0;
      else if (c)
        console.warn(
          "Couldn't load updated tag localization, will continue with what we have from storage.",
        ),
          (n = c);
      else throw e.GetErrorMessage();
      let l = {};
      return (n?.tags || []).forEach(({ tagid: s, name: u }) => (l[s] = u)), l;
    },
    staleTime: 60 * 60 * 1e3,
  };
}
function fe(i, o) {
  let { data: a } = re(o);
  return a && a[i];
}
var R = T(x(), 1),
  F = T(H(), 1),
  K = R.createContext({
    AddImpression: () => {
      console.log("Impression Tracking not enabled");
    },
    BIsValid: () => !1,
  });
function V() {
  return R.useContext(K);
}
function ye(i) {
  return (0, F.jsx)(K.Provider, {
    value: i.ImpressionTracker,
    children: i.children,
  });
}
var U = T(te(), 1),
  r = T(x(), 1);
var q = "F0YMvqVKHkY-";
function se() {
  return !(
    typeof HTMLElement < "u" &&
    typeof HTMLElement.prototype == "object" &&
    "popover" in HTMLElement.prototype
  );
}
async function Q() {
  se() && (await import("./popover-fn-5WW2YUVQ.js")).apply();
}
var P = T(H(), 1);
Q();
function ie(i) {
  let [o, a] = S(i, "-");
  return o === "left" || o === "right" ? [void 0, o] : [o, a];
}
function ae(i) {
  let {
      direction: o,
      ignoreHorizontal: a,
      ignoreVertical: g,
      dismissOnClick: c,
      interactionMode: p = 0,
    } = i,
    e = (0, r.useRef)(null),
    n = (0, r.useRef)(!1),
    l = (0, r.useRef)(!1),
    d = (0, r.useRef)(null),
    [s, u] = (0, r.useState)(!1),
    [y, M] = (0, r.useMemo)(() => ie(o), [o]),
    m = (0, r.useCallback)(() => {
      if (!d.current || !e.current) return;
      let t = d.current.getBoundingClientRect();
      e.current.style.setProperty("--parentWidth", `${t.width}px`),
        e.current.style.setProperty("--parentHeight", `${t.height}px`),
        a ||
          (M === "left"
            ? y
              ? ((e.current.style.left = "unset"),
                (e.current.style.right = `${document.documentElement.clientWidth - t.right}px`))
              : ((e.current.style.left = "unset"),
                (e.current.style.right = `${document.documentElement.clientWidth - t.left}px`))
            : M === "right"
              ? y
                ? ((e.current.style.left = `${t.left}px`),
                  (e.current.style.right = "unset"))
                : ((e.current.style.left = `${t.right}px`),
                  (e.current.style.right = "unset"))
              : M === void 0 &&
                ((e.current.style.left = `${t.left}px`),
                (e.current.style.right = "unset"))),
        g ||
          (y === "down"
            ? ((e.current.style.top = `${t.bottom}px`),
              (e.current.style.bottom = "unset"),
              e.current.style.setProperty(
                "--availableHeight",
                `${document.documentElement.clientHeight - t.bottom}px`,
              ))
            : y === "up"
              ? ((e.current.style.top = "unset"),
                (e.current.style.bottom = `${document.documentElement.clientHeight - t.top}px`),
                e.current.style.setProperty("--availableHeight", `${t.top}px`))
              : y === void 0 &&
                ((e.current.style.top = `${t.top}px`),
                (e.current.style.bottom = "unset"),
                e.current.style.setProperty(
                  "--availableHeight",
                  `${document.documentElement.clientHeight - t.top}px`,
                )));
    }, [M, a, g, y]),
    _ = (0, r.useMemo)(() => {
      if (d.current) return O(d.current);
    }, [d.current]);
  (0, r.useEffect)(() => {
    if (s)
      return (
        e.current?.showPopover(),
        _?.addEventListener("scroll", m),
        () => _?.removeEventListener("scroll", m)
      );
    window.sessionStorage.getItem("DEBUG_StickyContextMenus") != "true" &&
      e.current?.hidePopover();
  }, [s, m, _]);
  let f = (0, r.useCallback)(() => {
      m(), u(!0), (l.current = !0);
    }, [m]),
    v = (0, r.useCallback)(() => {
      (l.current = !1), n.current || u(!1);
    }, []),
    D = (0, r.useCallback)(() => {
      (n.current = !0), u(!0);
    }, []),
    E = (0, r.useCallback)(() => {
      (n.current = !1), l.current || u(!1);
    }, []),
    h = (0, r.useCallback)(() => {
      E(), v();
    }, [E, v]),
    j = (0, r.useCallback)(
      (t) => {
        t.key === "Enter" && (t.preventDefault(), s ? v() : f());
      },
      [v, f, s],
    ),
    Y = (0, r.useCallback)(
      (t) => {
        !t.currentTarget.contains(t.relatedTarget) &&
          !e.current?.contains(t.relatedTarget) &&
          v();
      },
      [v],
    ),
    W = (0, r.useCallback)(
      (t) => {
        let Z = t.relatedTarget && !t.currentTarget.contains(t.relatedTarget),
          ee = !t.relatedTarget && !n.current;
        (Z || ee) && (E(), u(!1));
      },
      [E],
    ),
    J = (0, r.useCallback)(() => {
      s && c ? h() : f();
    }, [h, c, s, f]),
    X = (0, r.useCallback)(
      (t) => {
        t.key === "Enter" && s && c ? h() : f(),
          t.key === "Escape" && s && (h(), t.stopPropagation());
      },
      [h, c, s, f],
    ),
    I = p === 0,
    L;
  return (
    I && !s
      ? (L = (t) => {
          t.preventDefault(), f();
        })
      : I || (L = s ? v : f),
    {
      isShowingMenu: s,
      triggerProps: {
        "aria-expanded": s,
        role: "button",
        onMouseEnter: I ? f : void 0,
        onMouseLeave: I ? v : void 0,
        onClick: L,
        ref: d,
        onKeyDown: j,
        onBlur: Y,
      },
      menuProps: {
        popover: "manual",
        role: "region",
        ref: e,
        onMouseEnter: D,
        onMouseLeave: E,
        onFocus: D,
        onBlur: W,
        onClick: J,
        onKeyDown: X,
        className: q,
      },
      closeMenu: h,
    }
  );
}
function be(i) {
  let {
      direction: o,
      interactionMode: a = 0,
      ignoreHorizontal: g,
      ignoreVertical: c,
      dismissOnClick: p,
      menuTarget: e,
      className: n,
      children: l,
      ...d
    } = i,
    { triggerProps: s, menuProps: u } = ae(i);
  return !l || r.Children.toArray(l).length === 0
    ? e
    : (0, P.jsxs)(P.Fragment, {
        children: [
          (0, r.cloneElement)(e, s),
          (0, P.jsx)("div", {
            ...u,
            className: (0, U.default)(u.className, n),
            ...d,
            children: l,
          }),
        ],
      });
}
var b = T(x());
function Le(i) {
  let { appID: o, feature: a, depth: g, children: c } = i,
    p = A(a, g),
    e = V(),
    [n, l] = b.default.useState(void 0),
    d = b.default.useCallback(
      (M) => {
        M.isIntersecting &&
          l((m) => (m?.appID == o && m.snr == p ? m : { appID: o, snr: p }));
      },
      [o, p],
    );
  (0, b.useEffect)(() => {
    n && e.AddImpression(n.appID, n.snr);
  }, [e, n]);
  let s = $(d),
    u = o && (!n || (n.appID != o && n.snr != p)),
    y = w(c.ref, u ? s : void 0);
  return b.default.cloneElement(c, { ref: y });
}
export { ae as a, be as b, re as c, oe as d, fe as e, ye as f, Le as g };
