const CLSTAMP = 9475757;

import { a as M, b as N, f as ae } from "./chunk-WG2GIY3X.js";
import {
  A as F,
  B as A,
  E as $,
  G,
  t as Q,
  w as L,
  y as U,
  z as O,
} from "./chunk-G3YZ7AGB.js";
import { b, d as S, g as w, h as R, n as k } from "./chunk-NVLQQ3QI.js";
import { l as oe, m as q } from "./chunk-STG6GF4O.js";
import { d as K } from "./chunk-3K2YMZDV.js";
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
function ke(e) {
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
var p = K(oe(), 1);
var Y = K(ae(), 1);
function J(e, t) {
  t.Body().set_context(se(e));
}
function se(e) {
  let t = new O();
  return (
    e.bUsePartnerAPI || t.set_country_code(e.country),
    t.set_language(e.language),
    e.realm != 0 && t.set_steam_realm(e.realm),
    t
  );
}
function X(e, t) {
  e.Body().set_data_request(U.fromObject(t));
}
function Z(e, t, r, o) {
  return new Y.default(
    async (a) => {
      let d = new Set(),
        l = new Map(),
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
          let y = l.get(m);
          y || ((y = new Set()), l.set(m, y)), y.add(c);
        }),
        u.include_included_items)
      ) {
        let { include_included_items: n, ...m } = u;
        u.included_item_data_request = m;
      }
      let i = Q.Init(A);
      J(t, i),
        X(i, u),
        d.forEach((n) => {
          let m = H(n);
          m && i.Body().add_ids(F.fromObject(m));
        });
      let g;
      if (t.bUsePartnerAPI) {
        let n = Q.Init(M);
        n.Body().set_request(i.Body()), (g = await N.GetItems(e, n));
      } else g = await $.GetItems(e, i);
      let h = new Map();
      return (
        g
          .Body()
          .store_items()
          .forEach((n) => {
            h.set(W(n.item_type(), n.id()), n);
          }),
        o && ne(h, s, l, o),
        a.map((n) => {
          let [m] = k(n, "|"),
            c = h.get(m);
          return c ? c.toObject() : { ...V(m), success: 2 };
        })
      );
    },
    { maxBatchSize: 500, cache: !1, ...r },
  );
}
function ne(e, t, r, o) {
  e.forEach((a, d) => {
    let l = r.get(d);
    if ((w(l, `Missing request data for ${d}`), !l)) return;
    let s = !1,
      u = {};
    t.forEach((i) => {
      l.has(i) ||
        ((s = !0),
        i == "top_tags"
          ? (u.include_tag_count = 10)
          : i && i != "default_info" && (u[i] = !0));
    }),
      s && o(a, u);
  });
}
function He(e) {
  let t = I();
  return S(T(t, e));
}
function Ve(e) {
  let t = I(),
    r = b(),
    o = "packageid" in e && !!e.packageid,
    a;
  if (o) {
    let s = r.getQueryData(D(e, "default_info"));
    s &&
      s.included_appids?.length == 1 &&
      (a = { appid: s.included_appids[0] });
  }
  let { data: d } = S({
    queryKey: D(e, "include_included_items"),
    queryFn: async () => {
      let s = await P(t, e, "include_included_items");
      return s.included_appids?.length == 1
        ? { appid: s.included_appids[0] }
        : e;
    },
    enabled: o && !a,
  });
  return d && (a = d), S(T(t, o ? a : e));
}
function ze(e) {
  let t = I();
  return S(we(t, e));
}
function Je(e) {
  let t = I();
  return S(Ce(t, e));
}
function Xe(e) {
  let t = I();
  return S(ue(t, e));
}
function Ye(e) {
  let t = I();
  return S(me(t, e));
}
function Ze(e) {
  let t = I();
  return S(pe(t, e));
}
function et(e) {
  let t = I();
  return S(de(t, e));
}
function tt(e) {
  let t = I();
  return S(_e(t, e));
}
function rt(e) {
  let t = I();
  return S(fe(t, e));
}
function ot(e) {
  let t = I();
  return S(he(t, e));
}
function ue(e, t) {
  return f(e, t, "include_assets", "assets");
}
function ie(e, t, r) {
  _(e, t, r, "include_assets", "assets");
}
function me(e, t) {
  return f(e, t, "include_screenshots", "screenshots");
}
function ce(e, t, r) {
  _(e, t, r, "include_screenshots", "screenshots");
}
function Se(e, t, r) {
  _(e, t, r, "include_assets_without_overrides", "assets_without_overrides");
}
function pe(e, t) {
  return f(e, t, "include_reviews", "reviews");
}
function Ie(e, t, r) {
  _(e, t, r, "include_reviews", "reviews");
}
function de(e, t) {
  return f(e, t, "include_release", "release");
}
function le(e, t, r) {
  _(e, t, r, "include_release", "release");
}
function _e(e, t) {
  return f(e, t, "top_tags", "tags");
}
function ye(e, t, r) {
  _(e, t, r, "top_tags", "tags");
}
function fe(e, t) {
  return f(e, t, "include_platforms", "platforms");
}
function ge(e, t, r) {
  _(e, t, r, "include_platforms", "platforms");
}
function he(e, t) {
  return f(e, t, "apply_user_filters", "user_filter_failure");
}
function De(e, t, r) {
  _(e, t, r, "apply_user_filters", "user_filter_failure");
}
function f(e, t, r, o) {
  return {
    queryKey: D(t, r),
    queryFn: async () => (await P(e, t, r))[o] || null,
    staleTime: 6 * 60 * 60 * 1e3,
    enabled: !!t,
  };
}
function _(e, t, r, o, a) {
  e.setQueryData(D(t, o), r[a]);
}
function T(e, t) {
  return {
    queryKey: D(t, "default_info"),
    queryFn: async () => ee(await P(e, t, "default_info")),
    staleTime: 6 * 60 * 60 * 1e3,
    enabled: !!t,
  };
}
function we(e, t) {
  return {
    ...T(e, t),
    select: (r) => r.best_purchase_option || null,
    staleTime: 10 * 60 * 1e3,
  };
}
function Ce(e, t) {
  return {
    ...T(e, t),
    select: (r) => r.self_purchase_option || r.best_purchase_option || null,
    staleTime: 10 * 60 * 1e3,
  };
}
function D(e, t) {
  return ["StoreItem", e && v(e), t];
}
function B(e, t, r) {
  let o = z(t);
  o &&
    (Ke(e, o, t),
    r.include_assets && ie(e, o, t),
    r.include_screenshots && ce(e, o, t),
    r.include_assets_without_overrides && Se(e, o, t),
    r.include_reviews && Ie(e, o, t),
    r.include_release && le(e, o, t),
    r.include_tag_count && r.include_tag_count > 0 && ye(e, o, t),
    r.include_platforms && ge(e, o, t),
    r.apply_user_filters && De(e, o, t),
    r.include_included_items &&
      r.included_item_data_request &&
      (t.included_items?.included_apps?.forEach((a) =>
        B(e, a, r.included_item_data_request),
      ),
      t.included_items?.included_packages?.forEach((a) =>
        B(e, a, r.included_item_data_request),
      )));
}
var xe = [
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
  for (let r of xe) delete t[r];
  return t;
}
function Ke(e, t, r) {
  e.setQueryData(D(t, "default_info"), ee(r));
}
async function P(e, t, r) {
  return await e.load(`${v(t)}|${r}`);
}
var te = K(q(), 1),
  C = p.createContext({});
function I() {
  return p.useContext(C).dataLoader;
}
function mt() {
  return p.useContext(C).storeBrowseContext;
}
function ct() {
  return p.useContext(C).cacheStoreItemData;
}
function St() {
  return p.useContext(C);
}
function pt(e) {
  let {
      context: t,
      msDelayBatch: r,
      serviceTransportOverride: o,
      legacyCacheStoreItemData: a,
      children: d,
    } = e,
    l = G(),
    s = b(),
    u = p.useCallback(
      (x, E) => {
        B(s, x.toObject(), E), a && a(x, E);
      },
      [s, a],
    ),
    i = o || l,
    { country: g, language: h, realm: n, bUsePartnerAPI: m } = t,
    c = p.useMemo(
      () => ({ country: g, language: h, realm: n, bUsePartnerAPI: m }),
      [g, h, n, m],
    ),
    y = p.useMemo(() => {
      let x = r ? be(r) : void 0;
      return Z(i, c, { cache: !1, batchScheduleFn: x }, u);
    }, [i, u, c, r]),
    re = p.useMemo(
      () => ({ dataLoader: y, storeBrowseContext: c, cacheStoreItemData: u }),
      [y, c, u],
    );
  return (0, te.jsx)(C.Provider, { value: re, children: d });
}
function be(e) {
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
  ke as c,
  J as d,
  X as e,
  mt as f,
  ct as g,
  St as h,
  pt as i,
  He as j,
  Ve as k,
  ze as l,
  Je as m,
  Xe as n,
  Ye as o,
  Ze as p,
  et as q,
  tt as r,
  rt as s,
  ot as t,
  ue as u,
  _e as v,
  fe as w,
  T as x,
};
