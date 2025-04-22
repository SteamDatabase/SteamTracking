const CLSTAMP = 9686915;

import { d as _, l as d } from "./chunk-XRRIX7EV.js";
import { t as f, w as i } from "./chunk-ZAEHAUWC.js";
import { e as a } from "./chunk-VF4UA5GZ.js";
import { e as u } from "./chunk-CG2AVMMX.js";
import { l as p, m as c } from "./chunk-NSLGW32G.js";
function v() {
  let e = i(),
    r = c.accountid;
  return u(g(e, r));
}
function g(e, r) {
  return {
    queryKey: C(r),
    queryFn: async () => {
      if (!r) return m();
      let n = f.Init(_),
        t = await d.GetStorePreferences(e, n);
      if (!t.BSuccess())
        throw `Error loading store preferences: ${t.GetErrorMessage()}`;
      return t.Body().toObject();
    },
    staleTime: 1 * 60 * 60 * 1e3,
  };
}
function T() {
  let e = i(),
    r = c.accountid;
  return u(l(e, r));
}
var S = [4, 3];
function l(e, r) {
  return { ...g(e, r), select: y };
}
function Q(e, r) {
  let n = [r];
  if (e && e.preferences && e.preferences.primary_language !== void 0) {
    let { primary_language: t, secondary_languages: s } = e.preferences;
    if ((t !== r && n.push(t), s))
      for (let o = 0; o < 31; o++)
        (s >> o) & 1 && o != r && o != t && n.push(s);
  }
  return n;
}
function y(e) {
  return e?.content_descriptor_preferences?.content_descriptors_to_exclude
    ? e.content_descriptor_preferences?.content_descriptors_to_exclude?.map(
        (r) => r.content_descriptorid,
      ) || []
    : S;
}
function m() {
  return {
    preferences: { primary_language: a(p.LANGUAGE) },
    content_descriptor_preferences: {
      content_descriptors_to_exclude: S.map((e) => ({
        content_descriptorid: e,
      })),
    },
  };
}
function C(e) {
  return ["StorePreferencesQueryKey", e ?? 0];
}
export { v as a, T as b, Q as c, y as d };
