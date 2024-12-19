const CLSTAMP = 9426784;

import { a as M, b as N, f as ae } from "./chunk-3NZ3E2BW.js";
import {
  A,
  B as F,
  E as $,
  G,
  t as Q,
  w as L,
  y as O,
  z as U,
} from "./chunk-VWTOWOUM.js";
import { b as K, d as p, g as w, h as R, n as k } from "./chunk-2VL5IIJI.js";
import { l as oe, m as E } from "./chunk-7TMFNHZK.js";
import { d as b } from "./chunk-KV5NJC5W.js";
function v(e) {
  return "appid" in e
    ? `app_${e.appid}`
    : "packageid" in e
      ? `package_${e.packageid}`
      : "bundleid" in e
        ? `bundle_${e.bundleid}`
        : "tagid" in e
          ? `tag_${e.tagid}`
          : "creatorid" in e
            ? `creator_${e.creatorid}`
            : "hubcategoryid" in e
              ? `hubcategory_${e.hubcategoryid}`
              : (R(e, "Unknown store item id type"), "");
}
function W(e, t) {
  switch (e) {
    case 0:
      return `app_${t}`;
    case 1:
      return `package_${t}`;
    case 2:
      return `bundle_${t}`;
    case 4:
      return `tag_${t}`;
    case 5:
      return `creator_${t}`;
    case 6:
      return `hubcategory_${t}`;
    case 3:
    case -1:
      return "";
    default:
      return R(e, `Unknown EStoreItemType ${e} ${L(e)} `), "";
  }
}
var j = /^(app|package|bundle|mtx|tag|creator|hubcategory)_(\d*)$/;
function H(e) {
  let t = e.match(j);
  if (t)
    switch (t[1]) {
      case "app":
        return { appid: parseInt(t[2]) };
      case "package":
        return { packageid: parseInt(t[2]) };
      case "bundle":
        return { bundleid: parseInt(t[2]) };
      case "tag":
        return { tagid: parseInt(t[2]) };
      case "creator":
        return { creatorid: parseInt(t[2]) };
      case "hubcategory":
        return { hubcategoryid: parseInt(t[2]) };
    }
  w(!1, `Failed to parse StoreItemID ${e}`);
}
function V(e) {
  let t = e.match(j);
  if (t)
    switch (t[1]) {
      case "app":
        return { item_type: 0, id: parseInt(t[2]) };
      case "package":
        return { item_type: 1, id: parseInt(t[2]) };
      case "bundle":
        return { item_type: 2, id: parseInt(t[2]) };
      case "tag":
        return { item_type: 4, id: parseInt(t[2]) };
      case "creator":
        return { item_type: 5, id: parseInt(t[2]) };
      case "hubcategory":
        return { item_type: 6, id: parseInt(t[2]) };
    }
  return { item_type: -1, id: t ? parseInt(t[2]) : 0 };
}
function z(e) {
  let t = e.item_type ?? -1,
    r = e.id || 0;
  switch (t) {
    case 0:
      return { appid: r };
    case 1:
      return { packageid: r };
    case 2:
      return { bundleid: r };
    case 4:
      return { tagid: r };
    case 5:
      return { creatorid: r };
    case 6:
      return { hubcategoryid: r };
    case 3:
    case -1:
      return;
    default:
      R(t, `Unknown EStoreItemType ${t} ${L(t)} `);
      return;
  }
}
function Be(e) {
  return e.appid()
    ? { appid: e.appid() }
    : e.packageid() !== void 0
      ? { packageid: e.packageid() }
      : e.bundleid()
        ? { bundleid: e.bundleid() }
        : e.tagid()
          ? { tagid: e.tagid() }
          : e.creatorid()
            ? { creatorid: e.creatorid() }
            : e.hubcategoryid()
              ? { hubcategoryid: e.hubcategoryid() }
              : (w(!1, `Invalid itemid: ${JSON.stringify(e.toObject())}`),
                { appid: 0 });
}
var S = b(oe(), 1);
var Y = b(ae(), 1);
function J(e, t) {
  t.Body().set_context(se(e));
}
function se(e) {
  let t = new U();
  return (
    e.bUsePartnerAPI || t.set_country_code(e.country),
    t.set_language(e.language),
    e.realm != 0 && t.set_steam_realm(e.realm),
    t
  );
}
function X(e, t) {
  e.Body().set_data_request(O.fromObject(t));
}
function Z(e, t, r, o) {
  return new Y.default(
    async (a) => {
      let d = new Set(),
        y = new Map(),
        s = new Set();
      s.add("default_info");
      let u = {};
      if (
        (a.forEach((n) => {
          let [m, c = "default_info"] = k(n, "|");
          d.add(m),
            s.has(c) ||
              (c == "top_tags"
                ? (u.include_tag_count = 10)
                : c != "default_info" && (u[c] = !0),
              s.add(c));
          let _ = y.get(m);
          _ || ((_ = new Set()), y.set(m, _)), _.add(c);
        }),
        u.include_included_items)
      ) {
        let { include_included_items: n, ...m } = u;
        u.included_item_data_request = m;
      }
      let i = Q.Init(F);
      J(t, i),
        X(i, u),
        d.forEach((n) => {
          let m = H(n);
          m && i.Body().add_ids(A.fromObject(m));
        });
      let f;
      if (t.bUsePartnerAPI) {
        let n = Q.Init(M);
        n.Body().set_request(i.Body()), (f = await N.GetItems(e, n));
      } else f = await $.GetItems(e, i);
      let g = new Map();
      return (
        f
          .Body()
          .store_items()
          .forEach((n) => {
            g.set(W(n.item_type(), n.id()), n);
          }),
        o && ne(g, s, y, o),
        a.map((n) => {
          let [m] = k(n, "|"),
            c = g.get(m);
          return c ? c.toObject() : { ...V(m), success: 2 };
        })
      );
    },
    { maxBatchSize: 500, cache: !1, ...r },
  );
}
function ne(e, t, r, o) {
  e.forEach((a, d) => {
    let y = r.get(d);
    if ((w(y, `Missing request data for ${d}`), !y)) return;
    let s = !1,
      u = {};
    t.forEach((i) => {
      y.has(i) ||
        ((s = !0),
        i == "top_tags"
          ? (u.include_tag_count = 10)
          : i && i != "default_info" && (u[i] = !0));
    }),
      s && o(a, u);
  });
}
function We(e) {
  let t = I();
  return p(T(t, e));
}
function je(e) {
  let t = I(),
    r = K(),
    o = "packageid" in e && !!e.packageid,
    a;
  if (o) {
    let s = r.getQueryData(h(e, "default_info"));
    s &&
      s.included_appids?.length == 1 &&
      (a = { appid: s.included_appids[0] });
  }
  let { data: d } = p({
    queryKey: h(e, "include_included_items"),
    queryFn: async () => {
      let s = await P(t, e, "include_included_items");
      return s.included_appids?.length == 1
        ? { appid: s.included_appids[0] }
        : e;
    },
    enabled: o && !a,
  });
  return d && (a = d), p(T(t, o ? a : e));
}
function He(e) {
  let t = I();
  return p(he(t, e));
}
function Ve(e) {
  let t = I();
  return p(De(t, e));
}
function ze(e) {
  let t = I();
  return p(ue(t, e));
}
function Je(e) {
  let t = I();
  return p(me(t, e));
}
function Xe(e) {
  let t = I();
  return p(pe(t, e));
}
function Ye(e) {
  let t = I();
  return p(de(t, e));
}
function Ze(e) {
  let t = I();
  return p(_e(t, e));
}
function et(e) {
  let t = I();
  return p(fe(t, e));
}
function ue(e, t) {
  return D(e, t, "include_assets", "assets");
}
function ie(e, t, r) {
  l(e, t, r, "include_assets", "assets");
}
function me(e, t) {
  return D(e, t, "include_screenshots", "screenshots");
}
function ce(e, t, r) {
  l(e, t, r, "include_screenshots", "screenshots");
}
function Se(e, t, r) {
  l(e, t, r, "include_assets_without_overrides", "assets_without_overrides");
}
function pe(e, t) {
  return D(e, t, "include_reviews", "reviews");
}
function Ie(e, t, r) {
  l(e, t, r, "include_reviews", "reviews");
}
function de(e, t) {
  return D(e, t, "include_release", "release");
}
function ye(e, t, r) {
  l(e, t, r, "include_release", "release");
}
function _e(e, t) {
  return D(e, t, "top_tags", "tags");
}
function le(e, t, r) {
  l(e, t, r, "top_tags", "tags");
}
function fe(e, t) {
  return D(e, t, "include_platforms", "platforms");
}
function ge(e, t, r) {
  l(e, t, r, "include_platforms", "platforms");
}
function D(e, t, r, o) {
  return {
    queryKey: h(t, r),
    queryFn: async () => (await P(e, t, r))[o] || null,
    staleTime: 6 * 60 * 60 * 1e3,
    enabled: !!t,
  };
}
function l(e, t, r, o, a) {
  e.setQueryData(h(t, o), r[a]);
}
function T(e, t) {
  return {
    queryKey: h(t, "default_info"),
    queryFn: async () => ee(await P(e, t, "default_info")),
    staleTime: 6 * 60 * 60 * 1e3,
    enabled: !!t,
  };
}
function he(e, t) {
  return {
    ...T(e, t),
    select: (r) => r.best_purchase_option || null,
    staleTime: 10 * 60 * 1e3,
  };
}
function De(e, t) {
  return {
    ...T(e, t),
    select: (r) => r.self_purchase_option || r.best_purchase_option || null,
    staleTime: 10 * 60 * 1e3,
  };
}
function h(e, t) {
  return ["StoreItem", e && v(e), t];
}
function B(e, t, r) {
  let o = z(t);
  o &&
    (Ce(e, o, t),
    r.include_assets && ie(e, o, t),
    r.include_screenshots && ce(e, o, t),
    r.include_assets_without_overrides && Se(e, o, t),
    r.include_reviews && Ie(e, o, t),
    r.include_release && ye(e, o, t),
    r.include_tag_count && r.include_tag_count > 0 && le(e, o, t),
    r.include_platforms && ge(e, o, t),
    r.include_included_items &&
      r.included_item_data_request &&
      (t.included_items?.included_apps?.forEach((a) =>
        B(e, a, r.included_item_data_request),
      ),
      t.included_items?.included_packages?.forEach((a) =>
        B(e, a, r.included_item_data_request),
      )));
}
var we = [
  "assets",
  "tagids",
  "tags",
  "basic_info",
  "reviews",
  "categories",
  "game_rating",
  "purchase_options",
  "accessories",
  "screenshots",
  "trailers",
  "supported_languages",
  "assets_without_overrides",
  "user_filter_failure",
  "links",
  "platforms",
  "release",
];
function ee(e) {
  let t = { ...e };
  for (let r of we) delete t[r];
  return t;
}
function Ce(e, t, r) {
  e.setQueryData(h(t, "default_info"), ee(r));
}
async function P(e, t, r) {
  return await e.load(`${v(t)}|${r}`);
}
var te = b(E(), 1),
  C = S.createContext({});
function I() {
  return S.useContext(C).dataLoader;
}
function nt() {
  return S.useContext(C).storeBrowseContext;
}
function ut() {
  return S.useContext(C).cacheStoreItemData;
}
function it() {
  return S.useContext(C);
}
function mt(e) {
  let {
      context: t,
      msDelayBatch: r,
      serviceTransportOverride: o,
      legacyCacheStoreItemData: a,
      children: d,
    } = e,
    y = G(),
    s = K(),
    u = S.useCallback(
      (x, q) => {
        B(s, x.toObject(), q), a && a(x, q);
      },
      [s, a],
    ),
    i = o || y,
    { country: f, language: g, realm: n, bUsePartnerAPI: m } = t,
    c = S.useMemo(
      () => ({ country: f, language: g, realm: n, bUsePartnerAPI: m }),
      [f, g, n, m],
    ),
    _ = S.useMemo(() => {
      let x = r ? xe(r) : void 0;
      return Z(i, c, { cache: !1, batchScheduleFn: x }, u);
    }, [i, u, c, r]),
    re = S.useMemo(
      () => ({ dataLoader: _, storeBrowseContext: c, cacheStoreItemData: u }),
      [_, c, u],
    );
  return (0, te.jsx)(C.Provider, { value: re, children: d });
}
function xe(e) {
  let t = 0;
  return (r) => {
    let o,
      a = performance.now() - t;
    a < e && (o = e - a),
      setTimeout(() => {
        (t = performance.now()), r();
      }, o);
  };
}
export {
  v as a,
  z as b,
  Be as c,
  J as d,
  X as e,
  nt as f,
  ut as g,
  it as h,
  mt as i,
  We as j,
  je as k,
  He as l,
  Ve as m,
  ze as n,
  Je as o,
  Xe as p,
  Ye as q,
  Ze as r,
  et as s,
  ue as t,
  _e as u,
  fe as v,
  T as w,
};
