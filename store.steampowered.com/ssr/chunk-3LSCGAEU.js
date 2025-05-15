const CLSTAMP = 9747952;

import { b as R } from "./chunk-Y3H3S55W.js";
import { c as C, d as D, e as B, i as Q } from "./chunk-T5DOYV6L.js";
import { c as I, f as _, g as h } from "./chunk-G4UZEZVK.js";
import { t as l, w as d } from "./chunk-OYWEUV4J.js";
import { d as p, i as f, k as g } from "./chunk-4TZCLWZQ.js";
import { a as m } from "./chunk-6EKZGJX7.js";
import { e as y } from "./chunk-F346NYSN.js";
var x = y(m(), 1);
function H(t, o) {
  return { ...t, filters: { ...(o ?? {}), ...(t.filters ?? {}) } };
}
function M(t, o = 5, a) {
  let s = d(),
    { storeBrowseContext: e, cacheStoreItemData: n } = Q();
  return x.useCallback(
    (r) =>
      b(s, e, r, t ? { cacheStoreItemData: n, data_request: t } : void 0, o, a),
    [s, e, n, t, o, a],
  );
}
function b(t, o, a, s, e = 5, n) {
  return {
    queryKey: ["SearchSuggestions", n, a, e],
    queryFn: () => A(t, o, a, s, e, n),
    staleTime: 5 * 60 * 1e3,
    enabled: !!a,
  };
}
function j(t) {
  let o = [],
    a = [],
    s = [];
  return (
    t.forEach((e) => {
      "appid" in e || "packageid" in e || "bundleid" in e
        ? o.push(e)
        : "tagid" in e || "hubcategoryid" in e
          ? a.push(e)
          : "creatorid" in e
            ? s.push(e)
            : f(e, `unexepected id type: ${JSON.stringify(e)}`);
    }),
    [o, a, s]
  );
}
async function A(t, o, a, s, e, n = {}) {
  let { filters: r, include_tags: u = !1, include_creators: w = !1 } = n,
    i = l.Init(_);
  D(o, i),
    s && B(i, s.data_request),
    i.Body().set_search_term(a),
    i.Body().set_use_spellcheck(!0),
    i.Body().set_max_results(e),
    r && i.Body().set_filters(I.fromObject(r)),
    i.Body().set_search_tags(u),
    i.Body().set_search_creators(w);
  let c = await h.SearchSuggestions(t, i);
  if (!c.BSuccess())
    throw `Error loading search suggestions: ${c.GetErrorMessage()}`;
  return (
    s &&
      c
        .Body()
        .store_items()
        .forEach((P) => s.cacheStoreItemData(P, s.data_request)),
    {
      rgItemIDs: c.Body().ids().map(C),
      metadata: c.Body().metadata().toObject(),
    }
  );
}
var K = y(m(), 1);
function z() {
  let { data: t } = R();
  return K.useMemo(() => {
    if (t !== void 0) return q(t);
  }, [t]);
}
function q(t) {
  return { content_descriptors_excluded: t };
}
var F = y(m());
var S = y(m());
function Y(t, ...o) {
  let [a, s] = F.useState([]);
  (0, S.useEffect)(() => {
    s((r) =>
      r.length > 0 && g.ArrayEquals(r[r.length - 1].args, o)
        ? r
        : [...r, { args: o, query: t(...o) }],
    );
  }, [o]);
  let [e, n] = p({
    queries: a.map(({ query: r }) => r),
    combine: (r) => {
      for (let u = r.length - 1; u >= 0; u--)
        if (!r[u].isLoading) return [u, r[u]];
      return [void 0, void 0];
    },
  });
  return (
    (0, S.useEffect)(() => {
      e && e > 0 && s((r) => r.slice(e));
    }, [e]),
    n
  );
}
export { H as a, M as b, j as c, z as d, Y as e };
