import { a as D, c as K } from "./chunk-JP6EDRKU.js";
import { c as h, d as Q, e as B } from "./chunk-UXBW4NV3.js";
import { c as I, f as _, g as C } from "./chunk-ZXQ74PP4.js";
import { t as l, w as d } from "./chunk-4TTEH3VB.js";
import { d as S, i as g, k as f } from "./chunk-I2IQXERY.js";
import { a as m } from "./chunk-KETQW37N.js";
import { e as c } from "./chunk-22ZGTD3T.js";
var R = c(m(), 1);
function H(t, o) {
  return { ...t, filters: { ...(o ?? {}), ...(t.filters ?? {}) } };
}
function M(t, o = 5, n) {
  let s = d(),
    { storeBrowseContext: e, dataPreload: a } = D(t);
  return R.useCallback((r) => P(s, e, r, a, o, n), [s, e, a, o, n]);
}
function P(t, o, n, s, e = 5, a) {
  return {
    queryKey: ["SearchSuggestions", a, n, e],
    queryFn: () => A(t, o, n, s, e, a),
    staleTime: 5 * 60 * 1e3,
    enabled: !!n,
  };
}
function j(t) {
  let o = [],
    n = [],
    s = [];
  return (
    t.forEach((e) => {
      "appid" in e || "packageid" in e || "bundleid" in e
        ? o.push(e)
        : "tagid" in e || "hubcategoryid" in e
          ? n.push(e)
          : "creatorid" in e
            ? s.push(e)
            : g(e, `unexepected id type: ${JSON.stringify(e)}`);
    }),
    [o, n, s]
  );
}
async function A(t, o, n, s, e, a = {}) {
  let { filters: r, include_tags: i = !1, include_creators: b = !1 } = a,
    u = l.Init(_);
  Q(o, u),
    s && B(u, s.data_request),
    u.Body().set_search_term(n),
    u.Body().set_use_spellcheck(!0),
    u.Body().set_max_results(e),
    r && u.Body().set_filters(I.fromObject(r)),
    u.Body().set_search_tags(i),
    u.Body().set_search_creators(b);
  let y = await C.SearchSuggestions(t, u);
  if (!y.BSuccess())
    throw `Error loading search suggestions: ${y.GetErrorMessage()}`;
  return (
    s &&
      y
        .Body()
        .store_items()
        .forEach((w) => s.cacheStoreItemData(w, s.data_request)),
    {
      rgItemIDs: y.Body().ids().map(h),
      metadata: y.Body().metadata().toObject(),
    }
  );
}
var x = c(m(), 1);
function z() {
  let { data: t } = K();
  return x.useMemo(() => {
    if (t !== void 0) return q(t);
  }, [t]);
}
function q(t) {
  return { content_descriptors_excluded: t };
}
var F = c(m());
var p = c(m());
function Y(t, ...o) {
  let [n, s] = F.useState([]);
  (0, p.useEffect)(() => {
    s((r) =>
      r.length > 0 && f.ArrayEquals(r[r.length - 1].args, o)
        ? r
        : [...r, { args: o, query: t(...o) }],
    );
  }, [o]);
  let [e, a] = S({
    queries: n.map(({ query: r }) => r),
    combine: (r) => {
      for (let i = r.length - 1; i >= 0; i--)
        if (!r[i].isLoading) return [i, r[i]];
      return [void 0, void 0];
    },
  });
  return (
    (0, p.useEffect)(() => {
      e && e > 0 && s((r) => r.slice(e));
    }, [e]),
    a
  );
}
export { H as a, M as b, j as c, z as d, Y as e };
