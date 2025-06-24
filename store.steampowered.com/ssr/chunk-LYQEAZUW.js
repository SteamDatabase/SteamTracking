import { h as u } from "./chunk-PSCCDOEL.js";
import { j as e } from "./chunk-2D3WJG7W.js";
import { a as I } from "./chunk-LVUPLWFD.js";
import { e as m } from "./chunk-KSKAYT7Z.js";
var r = m(I());
function c() {
  if (!navigator?.userAgent) return;
  let t = navigator.userAgent.match(/Valve Steam ([^\/]*)\//);
  if (t && t.length == 2) return t[1];
}
var _ = r.default.createContext({}),
  l = (t) => {
    let o = r.default.useContext(_);
    return (
      u(
        t?.bSuppressAssert || o.IN_GAMEPADUI !== void 0,
        "Trying to use ConfigContext without a provider!  Add ConfigContextRoot to application.",
      ),
      o
    );
  };
function d(t) {
  let { IN_GAMEPADUI: o, IN_DESKTOPUI: a, IN_VR: s, children: S } = t,
    i = l({ bSuppressAssert: !0 }),
    f = c()?.startsWith("Gamepad VR"),
    p = r.default.useMemo(
      () => ({
        IN_GAMEPADUI: o ?? i?.IN_GAMEPADUI ?? e.IN_GAMEPADUI,
        IN_DESKTOPUI: a ?? i?.IN_DESKTOPUI ?? !1,
        IN_VR: s ?? i?.IN_VR ?? f,
      }),
      [i, o, a, s, f],
    );
  return r.default.createElement(_.Provider, { value: p }, S);
}
function x(t) {
  return l(t)?.IN_GAMEPADUI;
}
function T() {
  return e.EREALM === 2;
}
function b() {
  return e.PLATFORM == "windows";
}
function B() {
  return e.PLATFORM == "macos";
}
function n(t, o) {
  return o.length != 0 && t.startsWith(o);
}
var A = "unknown";
function O() {
  if (!window || !window.location || !window.location.href)
    return console.warn("Unable to determine base url!"), A;
  let t = window.location.href;
  return n(t, e.STORE_BASE_URL)
    ? e.STORE_BASE_URL
    : n(t, e.COMMUNITY_BASE_URL)
      ? e.COMMUNITY_BASE_URL
      : n(t, e.CHAT_BASE_URL)
        ? e.CHAT_BASE_URL
        : n(t, e.PARTNER_BASE_URL)
          ? e.PARTNER_BASE_URL
          : n(t, e.HELP_BASE_URL)
            ? e.HELP_BASE_URL
            : n(t, e.STEAMTV_BASE_URL)
              ? e.STEAMTV_BASE_URL
              : n(t, e.STATS_BASE_URL)
                ? e.STATS_BASE_URL
                : n(t, e.INTERNAL_STATS_BASE_URL)
                  ? e.INTERNAL_STATS_BASE_URL
                  : n(t, e.STORE_CHECKOUT_BASE_URL)
                    ? e.STORE_CHECKOUT_BASE_URL
                    : n(t, "https://steamloopback.host")
                      ? "https://steamloopback.host"
                      : "";
}
export { l as a, d as b, x as c, T as d, b as e, B as f, A as g, O as h };
