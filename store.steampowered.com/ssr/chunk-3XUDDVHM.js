const CLSTAMP = 9564007;

import { a as m } from "./chunk-YWB64WUS.js";
import { b as l } from "./chunk-EBDYFHBQ.js";
var L = l((f) => {
  "use strict";
  var B = m(),
    P = Symbol.for("react.element"),
    G = Symbol.for("react.fragment"),
    y = Object.prototype.hasOwnProperty,
    x = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function U(e, n, r) {
    var o,
      t = {},
      i = null,
      u = null;
    r !== void 0 && (i = "" + r),
      n.key !== void 0 && (i = "" + n.key),
      n.ref !== void 0 && (u = n.ref);
    for (o in n) y.call(n, o) && !w.hasOwnProperty(o) && (t[o] = n[o]);
    if (e && e.defaultProps)
      for (o in ((n = e.defaultProps), n)) t[o] === void 0 && (t[o] = n[o]);
    return {
      $$typeof: P,
      type: e,
      key: i,
      ref: u,
      props: t,
      _owner: x.current,
    };
  }
  f.Fragment = G;
  f.jsx = U;
  f.jsxs = U;
});
var h = l((Ee, O) => {
  "use strict";
  O.exports = L();
});
function C(e, n) {
  return (
    (e = Math.ceil(e)),
    (n = Math.floor(n)),
    Math.floor(Math.random() * (n - e + 1)) + e
  );
}
function p(e, n, r) {
  return e == null || isNaN(e) ? e : Math.max(n, Math.min(r, e));
}
function V(e, n, r, o, t) {
  return o + ((t - o) * (e - n)) / (r - n);
}
function H(e, n, r, o, t) {
  return p(o + ((t - o) * (e - n)) / (r - n), Math.min(o, t), Math.max(o, t));
}
function N(e) {
  if (!_() || !window.document.cookie) return null;
  let n = document.cookie.match("(^|; )" + e + "=([^;]*)");
  return n && n[2] ? decodeURIComponent(n[2]) : null;
}
function A(e, n, r, o) {
  if (!_()) return;
  o || (o = "/");
  let t = "";
  if (typeof r < "u" && r) {
    let i = new Date();
    i.setTime(i.getTime() + 1e3 * 60 * 60 * 24 * r),
      (t = "; expires=" + i.toUTCString());
  }
  document.cookie =
    encodeURIComponent(e) + "=" + encodeURIComponent(n) + t + ";path=" + o;
}
function _() {
  return !!window.document;
}
var S = "webui_config",
  a;
function T() {
  if (!_()) return a || (a = I()), a;
  let e = N("sessionid");
  return e || (e = I()), e;
}
function b() {
  let e = "";
  for (let n = 0; n < 24; n++) e += C(0, 35).toString(36);
  return e;
}
function I() {
  let e = b();
  return A("sessionid", e, 0), e;
}
var d = new Set(),
  M = !1;
function R() {
  return M
    ? Promise.resolve()
    : new Promise((e) => {
        d.add(e);
      });
}
function j(e, n = S) {
  return c(e, n, !0);
}
function K(e, n = S) {
  return c(e, n, !1);
}
function c(e, n = S, r) {
  let o;
  if ((typeof n == "string" ? (o = document.getElementById(n)) : (o = n), o))
    try {
      return o.hasAttribute("data-" + e)
        ? JSON.parse(o.getAttribute("data-" + e))
        : null;
    } catch (t) {
      console.error(
        "Failed to parse config for " +
          s.steamid +
          " (" +
          window.location.href +
          ")",
        t,
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
  };
function D(e) {
  return "PUBLIC_PATH" in g ? g.PUBLIC_PATH + e : e;
}
var g = window.Config ?? E,
  te = window.UserConfig ?? s,
  re = window.Config ? () => Promise.resolve() : R;
window.Config && Object.assign(E, window.Config);
window.UserConfig && Object.assign(s, window.UserConfig);
export {
  p as a,
  V as b,
  H as c,
  N as d,
  j as e,
  K as f,
  E as g,
  s as h,
  D as i,
  g as j,
  te as k,
  re as l,
  h as m,
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
