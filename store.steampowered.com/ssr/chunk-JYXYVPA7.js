import { e as f, m as l } from "./chunk-BHMDPY3G.js";
import { t as _, w as a } from "./chunk-THO5GDMO.js";
import { e as p } from "./chunk-DFTIAWDH.js";
import { e as i } from "./chunk-L6RGR3N5.js";
import { m as s, n as u } from "./chunk-JDBBCCT6.js";
function L() {
  let e = a(),
    t = u.accountid;
  return i(m(e, t));
}
function m(e, t) {
  return {
    queryKey: A(t),
    queryFn: async () => {
      if (!t) return y();
      let r = _.Init(f),
        n = await l.GetStorePreferences(e, r);
      if (!n.BSuccess())
        throw `Error loading store preferences: ${n.GetErrorMessage()}`;
      return n.Body().toObject();
    },
    staleTime: 1 * 60 * 60 * 1e3,
  };
}
function G() {
  let e = a(),
    t = u.accountid;
  return i(d(e, t));
}
var S = [4, 3];
function d(e, t) {
  return { ...m(e, t), select: g };
}
function T(e, t) {
  let r = [t];
  if (e && e.preferences && e.preferences.primary_language !== void 0) {
    let { primary_language: n, secondary_languages: c } = e.preferences;
    if ((n !== t && r.push(n), c))
      for (let o = 0; o < 31; o++)
        (c >> o) & 1 && o != t && o != n && r.push(c);
  }
  return r;
}
function g(e) {
  return e?.content_descriptor_preferences?.content_descriptors_to_exclude
    ? e.content_descriptor_preferences?.content_descriptors_to_exclude?.map(
        (t) => t.content_descriptorid,
      ) || []
    : S;
}
function y() {
  return {
    preferences: { primary_language: p(s.LANGUAGE) },
    content_descriptor_preferences: {
      content_descriptors_to_exclude: S.map((e) => ({
        content_descriptorid: e,
      })),
    },
  };
}
function A(e) {
  return ["StorePreferencesQueryKey", e ?? 0];
}
function v(e, t) {
  if (!e[t]) return;
  let r = e.asset_url_format.replace("${FILENAME}", e[t]);
  return `${s.STORE_ITEM_BASE_URL}${r}`;
}
export { L as a, G as b, T as c, g as d, v as e };
