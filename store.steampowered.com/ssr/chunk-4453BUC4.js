import { a as d } from "./chunk-BKGYRNQI.js";
import { c as C, d as m } from "./chunk-XSIUNGIQ.js";
var O = C((f) => {
  "use strict";
  var F = d(),
    W = Symbol.for("react.element"),
    v = Symbol.for("react.fragment"),
    Y = Object.prototype.hasOwnProperty,
    j = F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    K = { key: !0, ref: !0, __self: !0, __source: !0 };
  function L(e, n, r) {
    var t,
      o = {},
      i = null,
      s = null;
    r !== void 0 && (i = "" + r),
      n.key !== void 0 && (i = "" + n.key),
      n.ref !== void 0 && (s = n.ref);
    for (t in n) Y.call(n, t) && !K.hasOwnProperty(t) && (o[t] = n[t]);
    if (e && e.defaultProps)
      for (t in ((n = e.defaultProps), n)) o[t] === void 0 && (o[t] = n[t]);
    return {
      $$typeof: W,
      type: e,
      key: i,
      ref: s,
      props: o,
      _owner: j.current,
    };
  }
  f.Fragment = v;
  f.jsx = L;
  f.jsxs = L;
});
var q = C((Ie, p) => {
  "use strict";
  p.exports = O();
});
function J(e) {
  return "unknown EContentDescriptorID ( " + e + " )";
}
var k = {};
m(k, {
  Clamp: () => c,
  InRangeArray: () => M,
  InRangeInclusive: () => b,
  IsDigits: () => P,
  RandomInt: () => u,
  RemapVal: () => D,
  RemapValClamped: () => B,
  ScalePreserveAspectRatio: () => G,
  isInt64: () => y,
  isNumeric: () => x,
});
function u(e, n) {
  return (
    (e = Math.ceil(e)),
    (n = Math.floor(n)),
    Math.floor(Math.random() * (n - e + 1)) + e
  );
}
function c(e, n, r) {
  return e == null || isNaN(e) ? e : Math.max(n, Math.min(r, e));
}
function b(e, n, r) {
  return e == null || isNaN(e) ? !1 : e >= n && e <= r;
}
function M(e, n) {
  return e == null || isNaN(e) || n == null ? !1 : e >= 0 && e < n.length;
}
function D(e, n, r, t, o) {
  return t + ((o - t) * (e - n)) / (r - n);
}
function B(e, n, r, t, o) {
  return c(t + ((o - t) * (e - n)) / (r - n), Math.min(t, o), Math.max(t, o));
}
function P(e) {
  if (e.length == 0) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] < "0" || e[n] > "9") return !1;
  return !0;
}
function x(e) {
  return typeof e != "string"
    ? !1
    : !Number.isNaN(e) && !Number.isNaN(Number.parseFloat(e));
}
function y(e) {
  if (!/^-?\d+$/.test(e)) return !1;
  let r = BigInt("-9223372036854775808"),
    t = BigInt("9223372036854775807");
  try {
    let o = BigInt(e);
    return o >= r && o <= t;
  } catch {
    return !1;
  }
}
function G(e, n, r, t) {
  let o = r / e,
    i = t / n,
    s = Math.min(o, i);
  return [e * s, n * s];
}
function N(e) {
  if (!E() || !window.document.cookie) return null;
  let n = document.cookie.match("(^|; )" + e + "=([^;]*)");
  return n && n[2] ? decodeURIComponent(n[2]) : null;
}
function A(e, n, r, t) {
  if (!E()) return;
  t || (t = "/");
  let o = "";
  if (typeof r < "u" && r) {
    let i = new Date();
    i.setTime(i.getTime() + 1e3 * 60 * 60 * 24 * r),
      (o = "; expires=" + i.toUTCString());
  }
  document.cookie =
    encodeURIComponent(e) + "=" + encodeURIComponent(n) + o + ";path=" + t;
}
function E() {
  return !!window.document;
}
var l = "webui_config",
  S;
function T() {
  if (!E()) return S || (S = R()), S;
  let e = N("sessionid");
  return e || (e = R()), e;
}
function w() {
  let e = "";
  for (let n = 0; n < 24; n++) e += u(0, 35).toString(36);
  return e;
}
function R() {
  let e = w();
  return A("sessionid", e, 0), e;
}
var h = new Set(),
  V = !1;
function I() {
  return V
    ? Promise.resolve()
    : new Promise((e) => {
        h.add(e);
      });
}
function te(e, n = l) {
  return U(e, n, !0);
}
function oe(e, n = l) {
  return U(e, n, !1);
}
function U(e, n = l, r) {
  let t;
  if ((typeof n == "string" ? (t = document.getElementById(n)) : (t = n), t))
    try {
      return t.hasAttribute("data-" + e)
        ? JSON.parse(t.getAttribute("data-" + e))
        : null;
    } catch (o) {
      console.error(
        "Failed to parse config for " +
          _.steamid +
          " (" +
          window.location.href +
          ")",
        o,
      );
    }
  else r && console.error("Missing config element #", n);
}
var a = {
    EUNIVERSE: 0,
    WEB_UNIVERSE: "",
    LANGUAGE: "english",
    SUPPORTED_LANGUAGES: [],
    COUNTRY: "",
    AVATAR_BASE_URL: "",
    MEDIA_CDN_COMMUNITY_URL: "",
    MEDIA_CDN_URL: "",
    CLAN_CDN_ASSET_URL: "",
    VIDEO_CDN_URL: "",
    COMMUNITY_CDN_URL: "",
    COMMUNITY_CDN_ASSET_URL: "",
    BASE_URL_SHARED_CDN: "",
    STORE_CDN_URL: "",
    PUBLIC_SHARED_URL: "",
    COMMUNITY_BASE_URL: "",
    CHAT_BASE_URL: "",
    STORE_BASE_URL: "",
    STORE_CHECKOUT_BASE_URL: "",
    LOGIN_BASE_URL: "",
    SUPPORT_BASE_URL: "",
    STORE_ICON_BASE_URL: "",
    STORE_ITEM_BASE_URL: "",
    IMG_URL: "",
    STEAMTV_BASE_URL: "",
    HELP_BASE_URL: "",
    PARTNER_BASE_URL: "",
    STATS_BASE_URL: "",
    INTERNAL_STATS_BASE_URL: "",
    BASE_URL_STORE_CDN_ASSETS: "",
    IN_CLIENT: !1,
    USE_POPUPS: !1,
    IN_MOBILE: !1,
    IN_MOBILE_WEBVIEW: !1,
    IN_TENFOOT: !1,
    PLATFORM: "",
    SNR: "",
    LAUNCHER_TYPE: 0,
    EREALM: 0,
    IN_CHROMEOS: !1,
    TESLA: !1,
    LOCAL_HOSTNAME: "",
    WEBAPI_BASE_URL: "",
    TOKEN_URL: "",
    BUILD_TIMESTAMP: 0,
    PAGE_TIMESTAMP: 0,
    FROM_WEB: !1,
    WEBSITE_ID: "Unknown",
    get SESSIONID() {
      return T();
    },
    FRIENDSUI_BETA: !1,
    STEAM_TV: !1,
    DEV_MODE: !1,
    IN_STEAMUI: !1,
    IN_GAMEPADUI: !1,
    IN_STEAMUI_SHARED_CONTEXT: !1,
    DECK_DISPLAY_MODE: !1,
    ON_DECK: !1,
    ON_STEAMOS: !1,
    IN_GAMESCOPE: !1,
    IN_LOGIN: !1,
    IN_LOGIN_REFRESH: !1,
    USE_LONGEST_LOC_STRING: !1,
    SILENT_STARTUP: !1,
    CLIENT_SESSION: 0,
  },
  _ = {
    logged_in: !1,
    steamid: "",
    accountid: 0,
    account_name: "",
    token: void 0,
    token_use_id: void 0,
    webapi_token: "",
    authwgtoken: "",
    is_support: !1,
    is_limited: !1,
    is_partner_member: !1,
    short_url: "",
    country_code: "",
    excluded_content_descriptors: [3, 4, 1],
  };
var g = window.Config ?? a,
  ge = window.UserConfig ?? _,
  Ce = window.Config ? () => Promise.resolve() : I;
window.Config && Object.assign(a, window.Config);
window.UserConfig && Object.assign(_, window.UserConfig);
function H(e) {
  return "PUBLIC_PATH" in g ? g.PUBLIC_PATH + e : e;
}
export {
  u as a,
  c as b,
  D as c,
  B as d,
  k as e,
  N as f,
  te as g,
  oe as h,
  J as i,
  a as j,
  _ as k,
  H as l,
  g as m,
  ge as n,
  Ce as o,
  q as p,
};
/*! Bundled license information:

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
