import { e as l, m } from "./chunk-DW6MAVZP.js";
import { i as f } from "./chunk-VWUZUMIL.js";
import { t as _, w as i } from "./chunk-OGKXAN6X.js";
import { e as p } from "./chunk-EVBGKVO4.js";
import { e as u } from "./chunk-XAVWBSYL.js";
import { m as s, n as c } from "./chunk-2JQZQ44F.js";
import { a as x } from "./chunk-7HR4H3FY.js";
import { e as g } from "./chunk-6LV3XD5Z.js";
var d = g(x(), 1);
function E(e) {
  let { storeBrowseContext: t, cacheStoreItemData: r } = f();
  return d.useMemo(
    () => ({
      storeBrowseContext: t,
      dataPreload: e ? { cacheStoreItemData: r, data_request: e } : void 0,
    }),
    [t, r, e],
  );
}
function U() {
  let e = i(),
    t = c.accountid;
  return u(S(e, t));
}
function S(e, t) {
  return {
    queryKey: D(t),
    queryFn: async () => {
      if (!t) return P();
      let r = _.Init(l),
        o = await m.GetStorePreferences(e, r);
      if (!o.BSuccess())
        throw `Error loading store preferences: ${o.GetErrorMessage()}`;
      return o.Body().toObject();
    },
    staleTime: 1 * 60 * 60 * 1e3,
  };
}
function v() {
  let e = i(),
    t = c.accountid;
  return u(I(e, t));
}
var y = [4, 3];
function I(e, t) {
  return { ...S(e, t), select: C };
}
function q(e, t) {
  let r = [t];
  if (e && e.preferences && e.preferences.primary_language !== void 0) {
    let { primary_language: o, secondary_languages: a } = e.preferences;
    if ((o !== t && r.push(o), a))
      for (let n = 0; n < 31; n++)
        (a >> n) & 1 && n != t && n != o && r.push(a);
  }
  return r;
}
function C(e) {
  return e?.content_descriptor_preferences?.content_descriptors_to_exclude
    ? e.content_descriptor_preferences?.content_descriptors_to_exclude?.map(
        (t) => t.content_descriptorid,
      ) || []
    : y;
}
function P() {
  return {
    preferences: { primary_language: p(s.LANGUAGE) },
    content_descriptor_preferences: {
      content_descriptors_to_exclude: y.map((e) => ({
        content_descriptorid: e,
      })),
    },
  };
}
function D(e) {
  return ["StorePreferencesQueryKey", e ?? 0];
}
function Q(e, t) {
  if (!e[t]) return;
  let r = e.asset_url_format.replace("${FILENAME}", e[t]);
  return `${s.STORE_ITEM_BASE_URL}${r}`;
}
export { E as a, U as b, v as c, q as d, C as e, Q as f };
