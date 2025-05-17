const CLSTAMP = 9754532;

import { a as d } from "./chunk-DQ6P3SYT.js";
import { c as C, d as m } from "./chunk-XI7ETPFA.js";
var O = C((f) => {
  "use strict";
  var H = d(),
    F = Symbol.for("react.element"),
    W = Symbol.for("react.fragment"),
    v = Object.prototype.hasOwnProperty,
    Y = H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    j = { key: !0, ref: !0, __self: !0, __source: !0 };
  function L(e, n, r) {
    var t,
      o = {},
      i = null,
      g = null;
    r !== void 0 && (i = "" + r),
      n.key !== void 0 && (i = "" + n.key),
      n.ref !== void 0 && (g = n.ref);
    for (t in n) v.call(n, t) && !j.hasOwnProperty(t) && (o[t] = n[t]);
    if (e && e.defaultProps)
      for (t in ((n = e.defaultProps), n)) o[t] === void 0 && (o[t] = n[t]);
    return {
      $$typeof: F,
      type: e,
      key: i,
      ref: g,
      props: o,
      _owner: Y.current,
    };
  }
  f.Fragment = W;
  f.jsx = L;
  f.jsxs = L;
});
var K = C((Ie, p) => {
  "use strict";
  p.exports = O();
});
function q(e) {
  return "unknown EContentDescriptorID ( " + e + " )";
}
var G = {};
m(G, {
  Clamp: () => N,
  InRangeArray: () => M,
  InRangeInclusive: () => b,
  IsDigits: () => P,
  RandomInt: () => a,
  RemapVal: () => D,
  RemapValClamped: () => B,
  isInt64: () => x,
  isNumeric: () => y,
});
function a(e, n) {
  return (
    (e = Math.ceil(e)),
    (n = Math.floor(n)),
    Math.floor(Math.random() * (n - e + 1)) + e
  );
}
function N(e, n, r) {
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
  return N(t + ((o - t) * (e - n)) / (r - n), Math.min(t, o), Math.max(t, o));
}
function P(e) {
  if (e.length == 0) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] < "0" || e[n] > "9") return !1;
  return !0;
}
function y(e) {
  return typeof e != "string"
    ? !1
    : !Number.isNaN(e) && !Number.isNaN(Number.parseFloat(e));
}
function x(e) {
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
function c(e) {
  if (!_() || !window.document.cookie) return null;
  let n = document.cookie.match("(^|; )" + e + "=([^;]*)");
  return n && n[2] ? decodeURIComponent(n[2]) : null;
}
function A(e, n, r, t) {
  if (!_()) return;
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
function _() {
  return !!window.document;
}
var S = "webui_config",
  u;
function I() {
  if (!_()) return u || (u = T()), u;
  let e = c("sessionid");
  return e || (e = T()), e;
}
function k() {
  let e = "";
  for (let n = 0; n < 24; n++) e += a(0, 35).toString(36);
  return e;
}
function T() {
  let e = k();
  return A("sessionid", e, 0), e;
}
var w = new Set(),
  h = !1;
function R() {
  return h
    ? Promise.resolve()
    : new Promise((e) => {
        w.add(e);
      });
}
function ne(e, n = S) {
  return U(e, n, !0);
}
function te(e, n = S) {
  return U(e, n, !1);
}
function U(e, n = S, r) {
  let t;
  if ((typeof n == "string" ? (t = document.getElementById(n)) : (t = n), t))
    try {
      return t.hasAttribute("data-" + e)
        ? JSON.parse(t.getAttribute("data-" + e))
        : null;
    } catch (o) {
      console.error(
        "Failed to parse config for " +
          s.steamid +
          " (" +
          window.location.href +
          ")",
        o,
      );
    }
  else r && console.error("Missing config element #", n);
}
var E = {
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
      return I();
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
  s = {
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
var l = window.Config ?? E,
  le = window.UserConfig ?? s,
  ge = window.Config ? () => Promise.resolve() : R;
window.Config && Object.assign(E, window.Config);
window.UserConfig && Object.assign(s, window.UserConfig);
function V(e) {
  return "PUBLIC_PATH" in l ? l.PUBLIC_PATH + e : e;
}
export {
  a,
  N as b,
  D as c,
  B as d,
  G as e,
  c as f,
  ne as g,
  te as h,
  q as i,
  E as j,
  s as k,
  V as l,
  l as m,
  le as n,
  ge as o,
  K as p,
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
