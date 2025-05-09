const CLSTAMP = 9728496;

import { a as g } from "./chunk-YDQSTAP4.js";
import { e as C, m as x } from "./chunk-2FV6UQPP.js";
import { o as y, p as A } from "./chunk-DR6AZEX6.js";
import { t as S, w as d } from "./chunk-CVUMGOQH.js";
import { e as m } from "./chunk-2ETSR7OK.js";
import { e as a, i as _ } from "./chunk-YRUH6LBC.js";
import { f as u, j as f, k as l, m as s, n as p } from "./chunk-4PA5Y6JZ.js";
import { a as b } from "./chunk-NLJB2KUH.js";
import { e as R } from "./chunk-CKLXZZTE.js";
var o = R(b(), 1);
var O = o.createContext({ eAdultOnlyMediaBehavior: "masked" });
function M() {
  return o.useMemo(() => {
    let e = u("forceallages");
    return !!(
      (e && e !== "0") ||
      (f.IN_MOBILE_WEBVIEW && navigator.userAgent.match(/Android/))
    );
  }, []);
}
function P() {
  let { eAdultOnlyMediaBehavior: e } = o.useContext(O),
    t = L();
  return M() ||
    (e == "masked" &&
      (l.excluded_content_descriptors.includes(4) ||
        l.excluded_content_descriptors.includes(3)))
    ? "blocked"
    : e == "masked" && t
      ? "allowed"
      : e;
}
function E() {
  return P() != "allowed";
}
var G = "bDisableAOWarning",
  j = 2 * g.PerDay;
function h() {
  let e = u(G),
    t = e ? parseInt(e) : 0;
  return t != 0 ? t : null;
}
function L() {
  let { data: e } = a({
    queryKey: ["AOWarningCookie"],
    queryFn: () => h(),
    placeholderData: () => h(),
    staleTime: 0,
  });
  return e && e > Date.now() / 1e3;
}
function re() {
  let e = d(),
    t = p.accountid;
  return a(k(e, t));
}
function k(e, t) {
  return {
    queryKey: U(t),
    queryFn: async () => {
      if (!t) return W();
      let r = S.Init(C),
        n = await x.GetStorePreferences(e, r);
      if (!n.BSuccess())
        throw `Error loading store preferences: ${n.GetErrorMessage()}`;
      return n.Body().toObject();
    },
    staleTime: 1 * 60 * 60 * 1e3,
  };
}
function ne() {
  let e = d(),
    t = p.accountid;
  return a(B(e, t));
}
var D = [4, 3];
function B(e, t) {
  return { ...k(e, t), select: T };
}
function oe(e, t) {
  let r = [t];
  if (e && e.preferences && e.preferences.primary_language !== void 0) {
    let { primary_language: n, secondary_languages: i } = e.preferences;
    if ((n !== t && r.push(n), i))
      for (let c = 0; c < 31; c++)
        (i >> c) & 1 && c != t && c != n && r.push(i);
  }
  return r;
}
function T(e) {
  return e?.content_descriptor_preferences?.content_descriptors_to_exclude
    ? e.content_descriptor_preferences?.content_descriptors_to_exclude?.map(
        (t) => t.content_descriptorid,
      ) || []
    : D;
}
function W() {
  return {
    preferences: { primary_language: m(s.LANGUAGE) },
    content_descriptor_preferences: {
      content_descriptors_to_exclude: D.map((e) => ({
        content_descriptorid: e,
      })),
    },
  };
}
function U(e) {
  return ["StorePreferencesQueryKey", e ?? 0];
}
function I(e, t) {
  if (!e[t]) return;
  let r = e.asset_url_format.replace("${FILENAME}", e[t]);
  return `${s.STORE_ITEM_BASE_URL}${r}`;
}
function le(e, t = "full") {
  let r = "";
  switch (t) {
    case "thumb":
      r = ".116x65";
      break;
    case "600x338":
      r = ".600x338";
      break;
    case "1920x1080":
      r = ".1920x1080";
      break;
    case "full":
      r = "";
      break;
    default:
      _(t, `Invalid size: ${t}`);
      break;
  }
  return s.STORE_ITEM_BASE_URL + e.filename.replace(/\.[^.*]$/, `${r}$&`);
}
function pe(e) {
  let { data: t } = A(e),
    r = E();
  if (t)
    return [
      ...(t.all_ages_screenshots || []),
      ...(!r && t.mature_content_screenshots
        ? t.mature_content_screenshots
        : []),
    ].sort((n, i) => n.ordinal - i.ordinal);
}
function de(e, t = !1) {
  let { data: r } = y({ appid: e });
  if (r !== void 0)
    return r === null
      ? null
      : t && r.library_capsule_2x
        ? I(r, "library_capsule_2x")
        : r.library_capsule
          ? I(r, "library_capsule")
          : `${s.STORE_ITEM_BASE_URL}steam/apps/${e}/portrait.png`;
}
export { re as a, ne as b, oe as c, T as d, I as e, le as f, pe as g, de as h };
