import { a as Q, b as g, d as R, e as B } from "./chunk-EF7ATX2J.js";
import { c as l, d, e as w } from "./chunk-PKKCIMDE.js";
import { d as S, e as f, g as _ } from "./chunk-PRW27R5S.js";
import { t as y, w as c } from "./chunk-UEJUJHOQ.js";
import { e as p } from "./chunk-U6QSXUSI.js";
import { e as i } from "./chunk-AGB23OGL.js";
import { m } from "./chunk-AOJZQCTP.js";
function E(r, s, a, o, e) {
  return {
    queryKey: ["StoreQuery", o],
    queryFn: () => P(r, s, a, o, e),
    staleTime: 10 * 60 * 1e3,
  };
}
async function P(r, s, a, o, e) {
  let t = y.Init(f);
  d(a, t),
    e && w(t, e.data_request),
    t.Body().set_query(S.fromObject(o)),
    t.Body().set_query_name(r);
  let u = await _.Query(s, t);
  if (u.GetEResult() != 1)
    throw `Error executing StoreQuery "${r}": ${u.GetErrorMessage()}`;
  return (
    e &&
      u
        .Body()
        .store_items()
        .forEach((n) => e.cacheStoreItemData(n, e.data_request)),
    {
      rgItemIDs: u.Body().ids().map(l),
      metadata: u.Body().metadata().toObject(),
    }
  );
}
function C(r, s, a, o, e, t) {
  let { count: u = 40, name: n = "PopularNewReleases" } = t ?? {};
  return E(
    n,
    r,
    s,
    {
      sort: 40,
      start: 0,
      count: u,
      filters: {
        released_only: !0,
        exclude_from: [3, 2],
        predefined_filter: { filter_type: 1, language_preferences: o },
        content_descriptors_excluded: e,
      },
    },
    a,
  );
}
function M(r, s) {
  let a = c(),
    { storeBrowseContext: o, dataPreload: e } = Q(s),
    { data: t } = g();
  return i({
    ...C(a, o, e, R(t, p(m.LANGUAGE)), B(t), r),
    enabled: t !== void 0,
  });
}
export { E as a, M as b };
