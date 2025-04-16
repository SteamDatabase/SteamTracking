const CLSTAMP = 9672883;

import { d as f, l } from "./chunk-6EKJZOFJ.js";
import { H as p, t as _ } from "./chunk-FFGZQQOY.js";
import { e as a } from "./chunk-7XBVXPOP.js";
import { e as i } from "./chunk-VZFCKFVL.js";
import { l as s, m as u } from "./chunk-Q4RM7AIX.js";
function C(e, t) {
  if (!e[t]) return;
  let r = e.asset_url_format.replace("${FILENAME}", e[t]);
  return `${s.STORE_ITEM_BASE_URL}${r}`;
}
function v() {
  let e = p(),
    t = u.accountid;
  return i(d(e, t));
}
function d(e, t) {
  return {
    queryKey: E(t),
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
function Q() {
  let e = p(),
    t = u.accountid;
  return i(S(e, t));
}
var m = [4, 3];
function S(e, t) {
  return { ...d(e, t), select: g };
}
function k(e, t) {
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
    : m;
}
function y() {
  return {
    preferences: { primary_language: a(s.LANGUAGE) },
    content_descriptor_preferences: {
      content_descriptors_to_exclude: m.map((e) => ({
        content_descriptorid: e,
      })),
    },
  };
}
function E(e) {
  return ["StorePreferencesQueryKey", e ?? 0];
}
export { v as a, Q as b, k as c, g as d, C as e };
