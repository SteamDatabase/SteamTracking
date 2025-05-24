import { b as $, m as B } from "./chunk-GYYGHVLV.js";
import { t as w, y as G, z } from "./chunk-TV34NB6C.js";
import { a as ne } from "./chunk-RVJDMBPW.js";
import { b as N } from "./chunk-WSP4MQFE.js";
import { b as O, y as W } from "./chunk-GCKFZ7O7.js";
import { e as S, p as k, z as A } from "./chunk-3LPBMLIJ.js";
import { p as M } from "./chunk-RUYVYIOK.js";
import { a as E } from "./chunk-WJKEW7TD.js";
import { e as d } from "./chunk-RVRE4EKH.js";
var _ = d(E());
var V = d(M()),
  K = _.createContext({ ePreferredHWCompat: 0 });
function ge(n) {
  let { ePreferredHWCompat: o } = n;
  return (0, V.jsx)(K.Provider, {
    value: { ePreferredHWCompat: o },
    children: n.children,
  });
}
function ye() {
  return _.useContext(K).ePreferredHWCompat;
}
function se(n) {
  let o = z(),
    a = G();
  return S(ie(o.GetAnonymousServiceTransport(), a, n));
}
function ie(n, o, a) {
  return {
    queryKey: ["LocalizedTagNames", a],
    queryFn: async () => {
      let y = `LocalizedTagNames2_${a}`,
        c = await o.GetObject(y),
        u = w.Init($);
      u.Body().set_language(a),
        c?.version_hash && u.Body().set_have_version_hash(c.version_hash);
      let e = await B.GetTagList(n, u),
        s;
      if (e.GetEResult() == 1)
        (s = e.Body().toObject()), o && o.StoreObject(y, s);
      else if (e.GetEResult() == 29) s = c || void 0;
      else if (c)
        console.warn(
          "Couldn't load updated tag localization, will continue with what we have from storage.",
        ),
          (s = c);
      else throw e.GetErrorMessage();
      let l = {};
      return (s?.tags || []).forEach(({ tagid: i, name: p }) => (l[i] = p)), l;
    },
    staleTime: 60 * 60 * 1e3,
  };
}
function He(n, o) {
  let { data: a } = se(o);
  return a && a[n];
}
var x = d(E(), 1),
  Q = d(M(), 1),
  F = x.createContext({
    AddImpression: () => {
      console.log("Impression Tracking not enabled");
    },
    BIsValid: () => !1,
  });
function q() {
  return x.useContext(F);
}
function be(n) {
  return (0, Q.jsx)(F.Provider, {
    value: n.ImpressionTracker,
    children: n.children,
  });
}
var j = d(ne(), 1),
  r = d(E(), 1);
var U = "F0YMvqVKHkY-";
function ce() {
  return !(
    typeof HTMLElement < "u" &&
    typeof HTMLElement.prototype == "object" &&
    "popover" in HTMLElement.prototype
  );
}
async function Y() {
  ce() && (await import("./popover-fn-66EJHKRH.js")).apply();
}
var H = d(M(), 1);
Y();
function le(n) {
  let [o, a] = k(n, "-");
  return o === "left" || o === "right" ? [void 0, o] : [o, a];
}
function pe(n) {
  let {
      direction: o,
      ignoreHorizontal: a,
      ignoreVertical: y,
      dismissOnClick: c,
      interactionMode: u = 0,
    } = n,
    e = (0, r.useRef)(null),
    s = (0, r.useRef)(!1),
    l = (0, r.useRef)(!1),
    m = (0, r.useRef)(null),
    [i, p] = (0, r.useState)(!1),
    [v, P] = (0, r.useMemo)(() => le(o), [o]),
    f = (0, r.useCallback)(() => {
      if (!m.current || !e.current) return;
      let t = m.current.getBoundingClientRect();
      e.current.style.setProperty("--parentWidth", `${t.width}px`),
        e.current.style.setProperty("--parentHeight", `${t.height}px`),
        a ||
          (P === "left"
            ? v
              ? ((e.current.style.left = "unset"),
                (e.current.style.right = `${document.documentElement.clientWidth - t.right}px`))
              : ((e.current.style.left = "unset"),
                (e.current.style.right = `${document.documentElement.clientWidth - t.left}px`))
            : P === "right"
              ? v
                ? ((e.current.style.left = `${t.left}px`),
                  (e.current.style.right = "unset"))
                : ((e.current.style.left = `${t.right}px`),
                  (e.current.style.right = "unset"))
              : P === void 0 &&
                ((e.current.style.left = `${t.left}px`),
                (e.current.style.right = "unset"))),
        y ||
          (v === "down"
            ? ((e.current.style.top = `${t.bottom}px`),
              (e.current.style.bottom = "unset"),
              e.current.style.setProperty(
                "--availableHeight",
                `${document.documentElement.clientHeight - t.bottom}px`,
              ))
            : v === "up"
              ? ((e.current.style.top = "unset"),
                (e.current.style.bottom = `${document.documentElement.clientHeight - t.top}px`),
                e.current.style.setProperty("--availableHeight", `${t.top}px`))
              : v === void 0 &&
                ((e.current.style.top = `${t.top}px`),
                (e.current.style.bottom = "unset"),
                e.current.style.setProperty(
                  "--availableHeight",
                  `${document.documentElement.clientHeight - t.top}px`,
                )));
    }, [P, a, y, v]),
    I = (0, r.useMemo)(() => {
      if (m.current) return W(m.current);
    }, [m.current]);
  (0, r.useEffect)(() => {
    if (i)
      return (
        e.current?.showPopover(),
        I?.addEventListener("scroll", f),
        () => I?.removeEventListener("scroll", f)
      );
    window.sessionStorage.getItem("DEBUG_StickyContextMenus") != "true" &&
      e.current?.hidePopover();
  }, [i, f, I]);
  let g = (0, r.useCallback)(() => {
      f(), p(!0), (l.current = !0);
    }, [f]),
    T = (0, r.useCallback)(() => {
      (l.current = !1), s.current || p(!1);
    }, []),
    D = (0, r.useCallback)(() => {
      (s.current = !0), p(!0);
    }, []),
    b = (0, r.useCallback)(() => {
      (s.current = !1), l.current || p(!1);
    }, []),
    h = (0, r.useCallback)(() => {
      b(), T();
    }, [b, T]),
    J = (0, r.useCallback)(
      (t) => {
        t.key === "Enter" && (t.preventDefault(), i ? T() : g());
      },
      [T, g, i],
    ),
    X = (0, r.useCallback)(
      (t) => {
        !t.currentTarget.contains(t.relatedTarget) &&
          !e.current?.contains(t.relatedTarget) &&
          T();
      },
      [T],
    ),
    Z = (0, r.useCallback)(
      (t) => {
        let re = t.relatedTarget && !t.currentTarget.contains(t.relatedTarget),
          oe = !t.relatedTarget && !s.current;
        (re || oe) && (b(), p(!1));
      },
      [b],
    ),
    ee = (0, r.useCallback)(() => {
      i && c ? h() : g();
    }, [h, c, i, g]),
    te = (0, r.useCallback)(
      (t) => {
        t.key === "Enter" && i && c ? h() : g(),
          t.key === "Escape" && i && (h(), t.stopPropagation());
      },
      [h, c, i, g],
    ),
    R = u === 0,
    L;
  return (
    R && !i
      ? (L = (t) => {
          t.preventDefault(), g();
        })
      : R || (L = i ? T : g),
    {
      isShowingMenu: i,
      triggerProps: {
        "aria-expanded": i,
        role: "button",
        onMouseEnter: R ? g : void 0,
        onMouseLeave: R ? T : void 0,
        onClick: L,
        ref: m,
        onKeyDown: J,
        onBlur: X,
      },
      menuProps: {
        popover: "manual",
        role: "region",
        ref: e,
        onMouseEnter: D,
        onMouseLeave: b,
        onFocus: D,
        onBlur: Z,
        onClick: ee,
        onKeyDown: te,
        className: U,
      },
      closeMenu: h,
    }
  );
}
function Le(n) {
  let {
      direction: o,
      interactionMode: a = 0,
      ignoreHorizontal: y,
      ignoreVertical: c,
      dismissOnClick: u,
      menuTarget: e,
      className: s,
      children: l,
      ...m
    } = n,
    { triggerProps: i, menuProps: p } = pe(n);
  return !l || r.Children.toArray(l).length === 0
    ? e
    : (0, H.jsxs)(H.Fragment, {
        children: [
          (0, r.cloneElement)(e, i),
          (0, H.jsx)("div", {
            ...p,
            className: (0, j.default)(p.className, s),
            ...m,
            children: l,
          }),
        ],
      });
}
var C = d(E());
function Oe(n) {
  let { appID: o, feature: a, depth: y, children: c } = n,
    u = A(a, y),
    e = q(),
    [s, l] = C.default.useState(void 0),
    m = C.default.useCallback(
      (P) => {
        P.isIntersecting &&
          l((f) => (f?.appID == o && f.snr == u ? f : { appID: o, snr: u }));
      },
      [o, u],
    );
  (0, C.useEffect)(() => {
    s && e.AddImpression(s.appID, s.snr);
  }, [e, s]);
  let i = N(m),
    p = o && (!s || (s.appID != o && s.snr != u)),
    v = O(c.ref, p ? i : void 0);
  return C.default.cloneElement(c, { ref: v });
}
export {
  pe as a,
  Le as b,
  se as c,
  ie as d,
  He as e,
  be as f,
  Oe as g,
  ge as h,
  ye as i,
};
