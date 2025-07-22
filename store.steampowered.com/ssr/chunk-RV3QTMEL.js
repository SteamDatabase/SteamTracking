import { g as I } from "./chunk-NEMRKCD7.js";
import { w as P } from "./chunk-OGKXAN6X.js";
import { a as z } from "./chunk-RZSNYZTD.js";
import { e as S, n as y } from "./chunk-XAVWBSYL.js";
import { l as d, m as c, p as A } from "./chunk-2JQZQ44F.js";
import { a as _ } from "./chunk-7HR4H3FY.js";
import { e as l } from "./chunk-6LV3XD5Z.js";
var b = "/PPCEHXCA.jpg";
var L = "/QLK737BA.jpg";
var E = "/UA7RT5CA.jpg";
function X(t, e) {
  return {
    queryKey: ["ProfileItemsEquipped", e],
    async queryFn() {
      let a = await I.GetProfileItemsEquipped(t, {
        steamid: e,
        language: c.LANGUAGE,
      });
      if (a.GetEResult() != 1)
        throw (
          (a.DEBUG_LogToConsole(),
          new y(a.GetEResult(), "Failed to load equipped profile items"))
        );
      return a.Body().toObject();
    },
  };
}
function D(t) {
  let e = P();
  return S(X(e, t));
}
var h = l(_()),
  U = l(A());
function M(t) {
  let { rgSources: e, onIncrementalError: a, alt: i, ...r } = t,
    [s, n] = (0, h.useState)(0),
    m = e[s];
  return (0, U.jsx)("img", {
    onError: (p) => {
      n((u) => u + 1), a?.(p, m, s);
    },
    alt: i,
    ...r,
    src: m,
  });
}
var v = l(z()),
  f = l(_());
var R = "t1-DQ4KhiQ0-";
var x = "YbrTGQJwy1w-";
var O = "_4-VIszWOyjU-";
var T = "_-2DlbVABlsg-";
var G = "gRteJ-XhQG8-";
var C = "X0rP4JDEGys-";
var w = "HM2pmBPb6yk-";
var F = "DHqf1E6df88-";
var H = "EeeZUuRovTI-";
var N = "CdtBH5cDo-Q-";
var o = l(A());
function J(t) {
  let {
      avatarURL: e,
      size: a,
      statusStyle: i,
      statusPosition: r,
      className: s,
      children: n,
      isOnline: m,
      isInGame: p,
      isWatchingBroadcast: u,
      isAwayOrSnooze: B,
      alt: k,
    } = t,
    g = [];
  return (
    e && g.push(e),
    g.push(te(a ?? "Medium")),
    (0, o.jsxs)("div", {
      className: (0, v.default)(
        R,
        { [O]: !m, [T]: m, [C]: p, [F]: u, [w]: B },
        s,
      ),
      "data-size": a,
      "data-status-position": r,
      children: [
        (0, o.jsx)("div", { className: G, style: i }),
        (0, o.jsx)(M, {
          className: (0, v.default)(x),
          rgSources: g,
          draggable: !1,
          alt: k,
        }),
        n,
      ],
    })
  );
}
function V(t) {
  let { profileItem: e, className: a, bDisableAnimation: i, ...r } = t;
  if (!e || !e.image_small || e.image_small.length == 0) return null;
  let s = i ? e.image_large : e.image_small;
  return (
    s || (s = e.image_small),
    s.startsWith("https://") || (s = c.MEDIA_CDN_COMMUNITY_URL + "images/" + s),
    (0, o.jsx)("div", {
      className: (0, v.default)(H, a),
      ...r,
      children: (0, o.jsx)("img", {
        className: N,
        src: s,
        alt: "",
        role: "presentation",
      }),
    })
  );
}
var K = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
function Y(t) {
  return [...t].map((e) => e.toString(16).padStart(2, "0")).join("");
}
function Z(t, e) {
  t === void 0 && (t = new Uint8Array(20));
  let a = Y(t),
    i = ".jpg";
  a === "0000000000000000000000000000000000000000" && (a = K),
    a.length == 44 && ((i = a.slice(-4)), (a = a.slice(0, 40)));
  let r = c.AVATAR_BASE_URL;
  switch (
    (r ||
      ((r = c.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
      (r += a.slice(0, 2) + "/")),
    (r += a),
    e)
  ) {
    case "X-Small":
    case "Small":
      break;
    case "Medium":
    case "MediumLarge":
      r += "_medium";
      break;
    case "Large":
    case "X-Large":
    case "FillArea":
      r += "_full";
      break;
  }
  return (r += i), r;
}
function $(t) {
  let {
      playerLinkDetails: e,
      animatedAvatar: a,
      avatarFrame: i,
      size: r,
      ...s
    } = t,
    n = Z(e.public_data?.sha_digest_avatar, r);
  return (
    a?.image_small?.length &&
      (n = c.MEDIA_CDN_COMMUNITY_URL + "images/" + a.image_small),
    (0, o.jsx)(J, {
      avatarURL: n,
      size: r,
      isOnline: e.private_data?.persona_state === 1,
      isInGame: e.private_data?.game_id !== void 0,
      isWatchingBroadcast:
        e.private_data?.watching_broadcast_accountid !== void 0,
      isAwayOrSnooze:
        e.private_data?.persona_state === 3 ||
        e.private_data?.persona_state === 4,
      ...s,
    })
  );
}
function ee(t, e) {
  let [a, i] = (0, f.useState)(t !== "None");
  return (
    (0, f.useEffect)(() => {
      if ((i(t !== "None"), t === "None" || t === "Infinite")) return;
      let r;
      switch (t) {
        case "Short":
          r = 2500;
          break;
        case "Medium":
          r = 5e3;
          break;
        case "Long":
          r = 1e4;
          break;
      }
      let s = setTimeout(() => {
        i(e);
      }, r);
      return () => {
        clearTimeout(s);
      };
    }, [t, e]),
    a
  );
}
function Se(t) {
  let {
      loopDuration: e = "Infinite",
      bParentHovered: a,
      bLimitProfileFrameAnimationTime: i,
      className: r,
      ...s
    } = t,
    [n, m] = (0, f.useState)(!1),
    p = ee(e, n),
    u = D(s.playerLinkDetails.public_data.steamid);
  return (0, o.jsx)("div", {
    className: r,
    onMouseEnter: () => m(!0),
    onMouseLeave: () => m(!1),
    children: (0, o.jsx)($, {
      ...s,
      animatedAvatar: p ? u.data?.animated_avatar : void 0,
      children: (0, o.jsx)(V, {
        profileItem: u.data?.avatar_frame,
        bDisableAnimation: i && !p,
      }),
    }),
  });
}
function te(t) {
  switch (t) {
    case "X-Small":
    case "Small":
      return d(b);
    case "Medium":
    case "MediumLarge":
      return d(E);
    case "Large":
    case "X-Large":
    case "FillArea":
      return d(L);
  }
}
export { $ as a, Se as b };
