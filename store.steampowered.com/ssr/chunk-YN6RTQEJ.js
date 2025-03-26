const CLSTAMP = 9632766;

import { g as M } from "./chunk-PMTLFF2B.js";
import { H } from "./chunk-AL2ODGUE.js";
import { j as U } from "./chunk-JSQIQJBF.js";
import { H as N, z as k } from "./chunk-5ACHEU46.js";
import { a as se } from "./chunk-RAC3UD3Z.js";
import { b as E } from "./chunk-FXSFSLC6.js";
import { r as D } from "./chunk-H354JS66.js";
import { d as F, l as O, u as G, y as L } from "./chunk-22AQQJVE.js";
import { k as S, l as d, o as g } from "./chunk-VYUEDQJZ.js";
import { a as h } from "./chunk-3I3KBY56.js";
import { d as c } from "./chunk-BDMPFFNE.js";
function T(t) {
  return t === 2;
}
var b = c(h(), 1);
var w = c(g(), 1);
function ie(t, e, a) {
  return (0, b.useMemo)(
    () =>
      e
        ? a
        : async (o) => {
            if (!o.ctrlKey) return o.preventDefault(), D(t);
          },
    [t, e, a],
  );
}
function le(t) {
  let e = "steam://";
  return T(d.EREALM) && (e = "steamchina://"), e + t;
}
var ue = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function ce(t, e) {
  let {
      to: a,
      external: o = !0,
      openInNewWindow: n,
      onClick: r,
      snr: l,
      gamepadFocusable: u,
      ...i
    } = t,
    s = a,
    _ = G();
  l && (typeof l == "boolean" ? (s = L(_, s)) : (s = L({ ..._, ...l }, s)));
  let f = s,
    m = o ?? n ?? !1,
    C = ue.test(f);
  if (!m && C) {
    let x = new URL(location.href),
      y = new URL(a.startsWith("//") ? x.protocol + a : a);
    y.origin === x.origin
      ? ((f = y.pathname + y.search + y.hash), (m = !1))
      : (m = !0);
  }
  n &&
    (d.IN_CLIENT
      ? (f = le(`openurl/${s}`))
      : ((i.target ??= "_blank"), (i.rel ??= "noreferrer noopener")));
  let I = ie(f, m, r),
    A = t.gamepadFocusable ? k : "a";
  return (0, w.jsx)(A, { ref: e, href: s, onClick: I, ...i });
}
var Fe = b.default.memo(b.default.forwardRef(ce));
var z = "/PPCEHXCA.jpg";
var K = "/QLK737BA.jpg";
var W = "/UA7RT5CA.jpg";
function de(t, e) {
  return {
    queryKey: ["ProfileItemsEquipped", e],
    async queryFn() {
      let a = await M.GetProfileItemsEquipped(t, {
        steamid: e,
        language: d.LANGUAGE,
      });
      if (a.GetEResult() != 1)
        throw (
          (a.DEBUG_LogToConsole(),
          new O(a.GetEResult(), "Failed to load equipped profile items"))
        );
      return a.Body().toObject();
    },
  };
}
function Q(t) {
  let e = H();
  return F(de(e, t));
}
var q = c(h()),
  V = c(g());
function X(t) {
  let { rgSources: e, onIncrementalError: a, alt: o, ...n } = t,
    [r, l] = (0, q.useState)(0),
    u = e[r];
  return (0, V.jsx)("img", {
    onError: (i) => {
      l((s) => s + 1), a?.(i, u, r);
    },
    alt: o,
    ...n,
    src: u,
  });
}
var R = c(se()),
  P = c(h());
var j = "t1-DQ4KhiQ0-";
var J = "YbrTGQJwy1w-";
var Y = "_4-VIszWOyjU-";
var Z = "_-2DlbVABlsg-";
var $ = "gRteJ-XhQG8-";
var ee = "X0rP4JDEGys-";
var te = "HM2pmBPb6yk-";
var ae = "DHqf1E6df88-";
var ne = "EeeZUuRovTI-";
var re = "CdtBH5cDo-Q-";
var p = c(g());
function _e(t) {
  let {
      avatarURL: e,
      size: a,
      statusStyle: o,
      statusPosition: n,
      className: r,
      children: l,
      isOnline: u,
      isInGame: i,
      isWatchingBroadcast: s,
      isAwayOrSnooze: _,
      alt: f,
    } = t,
    m = [];
  return (
    e && m.push(e),
    m.push(he(a ?? "Medium")),
    (0, p.jsxs)("div", {
      className: (0, R.default)(
        j,
        { [Y]: !u, [Z]: u, [ee]: i, [ae]: s, [te]: _ },
        r,
      ),
      "data-size": a,
      "data-status-position": n,
      children: [
        (0, p.jsx)("div", { className: $, style: o }),
        (0, p.jsx)(X, {
          className: (0, R.default)(J),
          rgSources: m,
          draggable: !1,
          alt: f,
        }),
        l,
      ],
    })
  );
}
function ge(t) {
  let { profileItem: e, className: a, bDisableAnimation: o, ...n } = t;
  if (!e || !e.image_small || e.image_small.length == 0) return null;
  let r = o ? e.image_large : e.image_small;
  return (
    r || (r = e.image_small),
    r.startsWith("https://") || (r = d.MEDIA_CDN_COMMUNITY_URL + "images/" + r),
    (0, p.jsx)("div", {
      className: (0, R.default)(ne, a),
      ...n,
      children: (0, p.jsx)("img", {
        className: re,
        src: r,
        alt: "",
        role: "presentation",
      }),
    })
  );
}
var Ae = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
function be(t) {
  return [...t].map((e) => e.toString(16).padStart(2, "0")).join("");
}
function Pe(t, e) {
  t === void 0 && (t = new Uint8Array(20));
  let a = be(t),
    o = ".jpg";
  a === "0000000000000000000000000000000000000000" && (a = Ae),
    a.length == 44 && ((o = a.slice(-4)), (a = a.slice(0, 40)));
  let n = d.AVATAR_BASE_URL;
  switch (
    (n ||
      ((n = d.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
      (n += a.slice(0, 2) + "/")),
    (n += a),
    e)
  ) {
    case "X-Small":
    case "Small":
      break;
    case "Medium":
    case "MediumLarge":
      n += "_medium";
      break;
    case "Large":
    case "X-Large":
    case "FillArea":
      n += "_full";
      break;
  }
  return (n += o), n;
}
function ye(t) {
  let {
      playerLinkDetails: e,
      animatedAvatar: a,
      avatarFrame: o,
      size: n,
      ...r
    } = t,
    l = Pe(e.public_data?.sha_digest_avatar, n);
  return (
    a?.image_small?.length &&
      (l = d.MEDIA_CDN_COMMUNITY_URL + "images/" + a.image_small),
    (0, p.jsx)(_e, {
      avatarURL: l,
      size: n,
      isOnline: e.private_data?.persona_state === 1,
      isInGame: e.private_data?.game_id !== void 0,
      isWatchingBroadcast:
        e.private_data?.watching_broadcast_accountid !== void 0,
      isAwayOrSnooze:
        e.private_data?.persona_state === 3 ||
        e.private_data?.persona_state === 4,
      ...r,
    })
  );
}
function Se(t, e) {
  let [a, o] = (0, P.useState)(t !== "None");
  return (
    (0, P.useEffect)(() => {
      if ((o(t !== "None"), t === "None" || t === "Infinite")) return;
      let n;
      switch (t) {
        case "Short":
          n = 2500;
          break;
        case "Medium":
          n = 5e3;
          break;
        case "Long":
          n = 1e4;
          break;
      }
      let r = setTimeout(() => {
        o(e);
      }, n);
      return () => {
        clearTimeout(r);
      };
    }, [t, e]),
    a
  );
}
function Je(t) {
  let {
      loopDuration: e = "Infinite",
      bParentHovered: a,
      bLimitProfileFrameAnimationTime: o,
      className: n,
      ...r
    } = t,
    [l, u] = (0, P.useState)(!1),
    i = Se(e, l),
    s = Q(r.playerLinkDetails.public_data.steamid);
  return (0, p.jsx)("div", {
    className: n,
    onMouseEnter: () => u(!0),
    onMouseLeave: () => u(!1),
    children: (0, p.jsx)(ye, {
      ...r,
      animatedAvatar: i ? s.data?.animated_avatar : void 0,
      children: (0, p.jsx)(ge, {
        profileItem: s.data?.avatar_frame,
        bDisableAnimation: o && !i,
      }),
    }),
  });
}
function he(t) {
  switch (t) {
    case "X-Small":
    case "Small":
      return S(z);
    case "Medium":
    case "MediumLarge":
      return S(W);
    case "Large":
    case "X-Large":
    case "FillArea":
      return S(K);
  }
}
var v = c(h());
var B = c(g()),
  tt = v.default.forwardRef(function (e, a) {
    let {
        onExplicitFocusLevelChanged: o,
        onOKButton: n,
        onCancelButton: r,
        navRef: l,
        focusable: u,
        ...i
      } = e,
      s = v.default.useRef(null),
      { fnOnOKButton: _, fnOnCancelButton: f } = oe({
        navRefPanel: s,
        onOKButton: n,
        onCancelButton: r,
        onExplicitFocusLevelChanged: o,
      }),
      m = E(l, s);
    return (0, B.jsx)(N, {
      ...i,
      onOKButton: _,
      onCancelButton: f,
      navRef: m,
      ref: a,
      focusable: u !== !1,
    });
  });
var at = v.default.forwardRef(function (e, a) {
  let { onOKButton: o, onCancelButton: n, navRef: r, focusable: l, ...u } = e,
    i = v.default.useRef(null),
    s = v.default.useRef(null),
    _ = v.default.useCallback((A, x) => A.FocusVisibleChild(), []),
    { fnOnOKButton: f, fnOnCancelButton: m } = oe({
      navRefPanel: i,
      onOKButton: o,
      onCancelButton: n,
      fnFocusChildren: _,
    }),
    C = E(s, a),
    I = E(r, i);
  return (0, B.jsx)(U, {
    ...u,
    onOKButton: (A) => f?.(A),
    onCancelButton: m,
    navRef: I,
    ref: C,
    focusable: l !== !1,
  });
});
function oe(t) {
  let {
    navRefPanel: e,
    onOKButton: a,
    onCancelButton: o,
    onExplicitFocusLevelChanged: n,
    fnFocusChildren: r,
  } = t;
  r = r ?? Ee;
  let l = v.default.useCallback(
      (i) => {
        let s = e.current;
        return s?.BHasFocus() && r(s, i.detail.button)
          ? (n && n(!0), !0)
          : a
            ? a(i)
            : !1;
      },
      [e, a, n, r],
    ),
    u = v.default.useCallback(
      (i) => {
        let s = e.current;
        return s?.BFocusWithin() &&
          !s.BHasFocus() &&
          s.TakeFocus(i.detail.button)
          ? (n && n(!1), !0)
          : o
            ? o(i)
            : !1;
      },
      [e, o, n],
    );
  return { fnOnOKButton: l, fnOnCancelButton: u };
}
function Ee(t, e) {
  return t.ChildTakeFocus(e);
}
export { T as a, Fe as b, ye as c, Je as d, tt as e };
