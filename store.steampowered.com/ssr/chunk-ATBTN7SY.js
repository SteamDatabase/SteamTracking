const CLSTAMP = 9721150;

import { g as C } from "./chunk-DXUB73KF.js";
import { w as F } from "./chunk-FCADORJ6.js";
import { j as L } from "./chunk-S4EIYI6Y.js";
import { a as I } from "./chunk-VPH2CLPF.js";
import { a as Y } from "./chunk-N4GKKG77.js";
import { b as g } from "./chunk-MD45BR6K.js";
import { e as h, n as B } from "./chunk-F6YY564A.js";
import { l as S, m as d, p as v } from "./chunk-NWZKTGYW.js";
import { a as E } from "./chunk-GO5F37EK.js";
import { e as m } from "./chunk-GCN6TXSS.js";
var O = "/PPCEHXCA.jpg";
var G = "/QLK737BA.jpg";
var x = "/UA7RT5CA.jpg";
function te(a, e) {
  return {
    queryKey: ["ProfileItemsEquipped", e],
    async queryFn() {
      let n = await C.GetProfileItemsEquipped(a, {
        steamid: e,
        language: d.LANGUAGE,
      });
      if (n.GetEResult() != 1)
        throw (
          (n.DEBUG_LogToConsole(),
          new B(n.GetEResult(), "Failed to load equipped profile items"))
        );
      return n.Body().toObject();
    },
  };
}
function M(a) {
  let e = F();
  return h(te(e, a));
}
var D = m(E()),
  N = m(v());
function H(a) {
  let { rgSources: e, onIncrementalError: n, alt: o, ...t } = a,
    [r, l] = (0, D.useState)(0),
    c = e[r];
  return (0, N.jsx)("img", {
    onError: (i) => {
      l((s) => s + 1), n?.(i, c, r);
    },
    alt: o,
    ...t,
    src: c,
  });
}
var y = m(Y()),
  P = m(E());
var U = "t1-DQ4KhiQ0-";
var T = "YbrTGQJwy1w-";
var k = "_4-VIszWOyjU-";
var w = "_-2DlbVABlsg-";
var z = "gRteJ-XhQG8-";
var K = "X0rP4JDEGys-";
var W = "HM2pmBPb6yk-";
var Q = "DHqf1E6df88-";
var q = "EeeZUuRovTI-";
var X = "CdtBH5cDo-Q-";
var u = m(v());
function ne(a) {
  let {
      avatarURL: e,
      size: n,
      statusStyle: o,
      statusPosition: t,
      className: r,
      children: l,
      isOnline: c,
      isInGame: i,
      isWatchingBroadcast: s,
      isAwayOrSnooze: A,
      alt: _,
    } = a,
    f = [];
  return (
    e && f.push(e),
    f.push(ue(n ?? "Medium")),
    (0, u.jsxs)("div", {
      className: (0, y.default)(
        U,
        { [k]: !c, [w]: c, [K]: i, [Q]: s, [W]: A },
        r,
      ),
      "data-size": n,
      "data-status-position": t,
      children: [
        (0, u.jsx)("div", { className: z, style: o }),
        (0, u.jsx)(H, {
          className: (0, y.default)(T),
          rgSources: f,
          draggable: !1,
          alt: _,
        }),
        l,
      ],
    })
  );
}
function re(a) {
  let { profileItem: e, className: n, bDisableAnimation: o, ...t } = a;
  if (!e || !e.image_small || e.image_small.length == 0) return null;
  let r = o ? e.image_large : e.image_small;
  return (
    r || (r = e.image_small),
    r.startsWith("https://") || (r = d.MEDIA_CDN_COMMUNITY_URL + "images/" + r),
    (0, u.jsx)("div", {
      className: (0, y.default)(q, n),
      ...t,
      children: (0, u.jsx)("img", {
        className: X,
        src: r,
        alt: "",
        role: "presentation",
      }),
    })
  );
}
var oe = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
function se(a) {
  return [...a].map((e) => e.toString(16).padStart(2, "0")).join("");
}
function ie(a, e) {
  a === void 0 && (a = new Uint8Array(20));
  let n = se(a),
    o = ".jpg";
  n === "0000000000000000000000000000000000000000" && (n = oe),
    n.length == 44 && ((o = n.slice(-4)), (n = n.slice(0, 40)));
  let t = d.AVATAR_BASE_URL;
  switch (
    (t ||
      ((t = d.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
      (t += n.slice(0, 2) + "/")),
    (t += n),
    e)
  ) {
    case "X-Small":
    case "Small":
      break;
    case "Medium":
    case "MediumLarge":
      t += "_medium";
      break;
    case "Large":
    case "X-Large":
    case "FillArea":
      t += "_full";
      break;
  }
  return (t += o), t;
}
function le(a) {
  let {
      playerLinkDetails: e,
      animatedAvatar: n,
      avatarFrame: o,
      size: t,
      ...r
    } = a,
    l = ie(e.public_data?.sha_digest_avatar, t);
  return (
    n?.image_small?.length &&
      (l = d.MEDIA_CDN_COMMUNITY_URL + "images/" + n.image_small),
    (0, u.jsx)(ne, {
      avatarURL: l,
      size: t,
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
function ce(a, e) {
  let [n, o] = (0, P.useState)(a !== "None");
  return (
    (0, P.useEffect)(() => {
      if ((o(a !== "None"), a === "None" || a === "Infinite")) return;
      let t;
      switch (a) {
        case "Short":
          t = 2500;
          break;
        case "Medium":
          t = 5e3;
          break;
        case "Long":
          t = 1e4;
          break;
      }
      let r = setTimeout(() => {
        o(e);
      }, t);
      return () => {
        clearTimeout(r);
      };
    }, [a, e]),
    n
  );
}
function Le(a) {
  let {
      loopDuration: e = "Infinite",
      bParentHovered: n,
      bLimitProfileFrameAnimationTime: o,
      className: t,
      ...r
    } = a,
    [l, c] = (0, P.useState)(!1),
    i = ce(e, l),
    s = M(r.playerLinkDetails.public_data.steamid);
  return (0, u.jsx)("div", {
    className: t,
    onMouseEnter: () => c(!0),
    onMouseLeave: () => c(!1),
    children: (0, u.jsx)(le, {
      ...r,
      animatedAvatar: i ? s.data?.animated_avatar : void 0,
      children: (0, u.jsx)(re, {
        profileItem: s.data?.avatar_frame,
        bDisableAnimation: o && !i,
      }),
    }),
  });
}
function ue(a) {
  switch (a) {
    case "X-Small":
    case "Small":
      return S(O);
    case "Medium":
    case "MediumLarge":
      return S(x);
    case "Large":
    case "X-Large":
    case "FillArea":
      return S(G);
  }
}
var p = m(E());
var R = m(v()),
  De = p.default.forwardRef(function (e, n) {
    let {
        onExplicitFocusLevelChanged: o,
        onOKButton: t,
        onCancelButton: r,
        navRef: l,
        focusable: c,
        ...i
      } = e,
      s = p.default.useRef(null),
      { fnOnOKButton: A, fnOnCancelButton: _ } = V({
        navRefPanel: s,
        onOKButton: t,
        onCancelButton: r,
        onExplicitFocusLevelChanged: o,
      }),
      f = g(l, s);
    return (0, R.jsx)(I, {
      ...i,
      onOKButton: A,
      onCancelButton: _,
      navRef: f,
      ref: n,
      focusable: c !== !1,
    });
  });
var He = p.default.forwardRef(function (e, n) {
  let { onOKButton: o, onCancelButton: t, navRef: r, focusable: l, ...c } = e,
    i = p.default.useRef(null),
    s = p.default.useRef(null),
    A = p.default.useCallback((b, pe) => b.FocusVisibleChild(), []),
    { fnOnOKButton: _, fnOnCancelButton: f } = V({
      navRefPanel: i,
      onOKButton: o,
      onCancelButton: t,
      fnFocusChildren: A,
    }),
    j = g(s, n),
    J = g(r, i);
  return (0, R.jsx)(L, {
    ...c,
    onOKButton: (b) => _?.(b),
    onCancelButton: f,
    navRef: J,
    ref: j,
    focusable: l !== !1,
  });
});
function V(a) {
  let {
    navRefPanel: e,
    onOKButton: n,
    onCancelButton: o,
    onExplicitFocusLevelChanged: t,
    fnFocusChildren: r,
  } = a;
  r = r ?? me;
  let l = p.default.useCallback(
      (i) => {
        let s = e.current;
        return s?.BHasFocus() && r(s, i.detail.button)
          ? (t && t(!0), !0)
          : n
            ? n(i)
            : !1;
      },
      [e, n, t, r],
    ),
    c = p.default.useCallback(
      (i) => {
        let s = e.current;
        return s?.BFocusWithin() &&
          !s.BHasFocus() &&
          s.TakeFocus(i.detail.button)
          ? (t && t(!1), !0)
          : o
            ? o(i)
            : !1;
      },
      [e, o, t],
    );
  return { fnOnOKButton: l, fnOnCancelButton: c };
}
function me(a, e) {
  return a.ChildTakeFocus(e);
}
export { le as a, Le as b, De as c };
