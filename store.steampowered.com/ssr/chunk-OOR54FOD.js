const CLSTAMP = 9650136;

import { d as f, l } from "./chunk-ASHNC7S3.js";
import { H as p, t as _ } from "./chunk-UKYUA5SV.js";
import { e as a } from "./chunk-D3UH7XG2.js";
import { e as i } from "./chunk-6XJQQZ7Z.js";
import { l as s, m as u } from "./chunk-C37XGPEG.js";
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
export { C as a, v as b, Q as c, k as d, g as e };
