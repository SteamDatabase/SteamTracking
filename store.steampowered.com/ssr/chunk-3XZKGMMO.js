import { e as D, m as I } from "./chunk-NY7ZQJ6V.js";
import { i as y, p as A, q as h } from "./chunk-7EVTPCQK.js";
import { t as g, w as p } from "./chunk-46J3XY4H.js";
import { a as x } from "./chunk-SCEIGPAX.js";
import { e as C } from "./chunk-AFJ7U5HD.js";
import { e as c, i as S } from "./chunk-R2DII6BZ.js";
import { f as u, j as _, k as l, m as s, n as d } from "./chunk-IWW7GU2Z.js";
import { a as m } from "./chunk-HFH74SGA.js";
import { e as f } from "./chunk-DGTYJ2T6.js";
var E = f(m(), 1);
function Q(e) {
  let { storeBrowseContext: t, cacheStoreItemData: r } = y();
  return E.useMemo(
    () => ({
      storeBrowseContext: t,
      dataPreload: e ? { cacheStoreItemData: r, data_request: e } : void 0,
    }),
    [t, r, e],
  );
}
var n = f(m(), 1);
var P = n.createContext({ eAdultOnlyMediaBehavior: "masked" });
function v() {
  return n.useMemo(() => {
    let e = u("forceallages");
    return !!(
      (e && e !== "0") ||
      (_.IN_MOBILE_WEBVIEW && navigator.userAgent.match(/Android/))
    );
  }, []);
}
function M() {
  let { eAdultOnlyMediaBehavior: e } = n.useContext(P),
    t = L();
  return v() ||
    (e == "masked" &&
      (l.excluded_content_descriptors.includes(4) ||
        l.excluded_content_descriptors.includes(3)))
    ? "blocked"
    : e == "masked" && t
      ? "allowed"
      : e;
}
function k() {
  return M() != "allowed";
}
var G = "bDisableAOWarning",
  Y = 2 * x.PerDay;
function R() {
  let e = u(G),
    t = e ? parseInt(e) : 0;
  return t != 0 ? t : null;
}
function L() {
  let { data: e } = c({
    queryKey: ["AOWarningCookie"],
    queryFn: () => R(),
    placeholderData: () => R(),
    staleTime: 0,
  });
  return e && e > Date.now() / 1e3;
}
function ie() {
  let e = p(),
    t = d.accountid;
  return c(B(e, t));
}
function B(e, t) {
  return {
    queryKey: U(t),
    queryFn: async () => {
      if (!t) return W();
      let r = g.Init(D),
        o = await I.GetStorePreferences(e, r);
      if (!o.BSuccess())
        throw `Error loading store preferences: ${o.GetErrorMessage()}`;
      return o.Body().toObject();
    },
    staleTime: 1 * 60 * 60 * 1e3,
  };
}
function ce() {
  let e = p(),
    t = d.accountid;
  return c(T(e, t));
}
var O = [4, 3];
function T(e, t) {
  return { ...B(e, t), select: q };
}
function ue(e, t) {
  let r = [t];
  if (e && e.preferences && e.preferences.primary_language !== void 0) {
    let { primary_language: o, secondary_languages: a } = e.preferences;
    if ((o !== t && r.push(o), a))
      for (let i = 0; i < 31; i++)
        (a >> i) & 1 && i != t && i != o && r.push(a);
  }
  return r;
}
function q(e) {
  return e?.content_descriptor_preferences?.content_descriptors_to_exclude
    ? e.content_descriptor_preferences?.content_descriptors_to_exclude?.map(
        (t) => t.content_descriptorid,
      ) || []
    : O;
}
function W() {
  return {
    preferences: { primary_language: C(s.LANGUAGE) },
    content_descriptor_preferences: {
      content_descriptors_to_exclude: O.map((e) => ({
        content_descriptorid: e,
      })),
    },
  };
}
function U(e) {
  return ["StorePreferencesQueryKey", e ?? 0];
}
function b(e, t) {
  if (!e[t]) return;
  let r = e.asset_url_format.replace("${FILENAME}", e[t]);
  return `${s.STORE_ITEM_BASE_URL}${r}`;
}
function me(e, t = "full") {
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
      S(t, `Invalid size: ${t}`);
      break;
  }
  return s.STORE_ITEM_BASE_URL + e.filename.replace(/\.[^.*]$/, `${r}$&`);
}
function Se(e) {
  let { data: t } = h(e),
    r = k();
  if (t)
    return [
      ...(t.all_ages_screenshots || []),
      ...(!r && t.mature_content_screenshots
        ? t.mature_content_screenshots
        : []),
    ].sort((o, a) => o.ordinal - a.ordinal);
}
function Ce(e, t = !1) {
  let { data: r } = A({ appid: e });
  if (r !== void 0)
    return r === null
      ? null
      : t && r.library_capsule_2x
        ? b(r, "library_capsule_2x")
        : r.library_capsule
          ? b(r, "library_capsule")
          : `${s.STORE_ITEM_BASE_URL}steam/apps/${e}/portrait.png`;
}
export {
  Q as a,
  ie as b,
  ce as c,
  ue as d,
  q as e,
  b as f,
  me as g,
  Se as h,
  Ce as i,
};
