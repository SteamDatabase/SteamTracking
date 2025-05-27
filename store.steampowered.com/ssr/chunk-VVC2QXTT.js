import { a as M, b as N, h as ae } from "./chunk-U2V7SPU4.js";
import {
  e as L,
  g as E,
  h as O,
  i as F,
  j as A,
  n as $,
} from "./chunk-ODHUYNFW.js";
import { t as k, w as G } from "./chunk-TR2WPP4B.js";
import { b, e as S, h as K, i as R, p as Q } from "./chunk-BWTNRR3X.js";
import { p as q } from "./chunk-ULAVP4UJ.js";
import { a as oe } from "./chunk-ZSSATMFM.js";
import { e as x } from "./chunk-2B3UHFKJ.js";
function P(e) {
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
  K(!1, `Failed to parse StoreItemID ${e}`);
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
function Pe(e) {
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
              : (K(!1, `Invalid itemid: ${JSON.stringify(e.toObject())}`),
                { appid: 0 });
}
var l = x(oe(), 1);
var Y = x(ae(), 1);
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
  e.Body().set_data_request(E.fromObject(t));
}
function Z(e, t, r, o) {
  return new Y.default(
    async (a) => {
      let p = new Set(),
        d = new Map(),
        u = new Set();
      u.add("default_info");
      let n = {};
      if (
        (a.forEach((s) => {
          let [m, c = "default_info"] = Q(s, "|");
          p.add(m),
            u.has(c) ||
              (c == "top_tags"
                ? (n.include_tag_count = 10)
                : c != "default_info" && (n[c] = !0),
              u.add(c));
          let _ = d.get(m);
          _ || ((_ = new Set()), d.set(m, _)), _.add(c);
        }),
        n.include_included_items)
      ) {
        let { include_included_items: s, ...m } = n;
        n.included_item_data_request = m;
      }
      let i = k.Init(A);
      J(t, i),
        X(i, n),
        p.forEach((s) => {
          let m = H(s);
          m && i.Body().add_ids(F.fromObject(m));
        });
      let g;
      if (t.bUsePartnerAPI) {
        let s = k.Init(M);
        s.Body().set_request(i.Body()), (g = await N.GetItems(e, s));
      } else g = await $.GetItems(e, i);
      let h = new Map();
      return (
        g
          .Body()
          .store_items()
          .forEach((s) => {
            h.set(W(s.item_type(), s.id()), s);
          }),
        o && ne(h, u, d, o),
        a.map((s) => {
          let [m] = Q(s, "|"),
            c = h.get(m);
          return c ? c.toObject() : { ...V(m), success: 2 };
        })
      );
    },
    { maxBatchSize: 500, cache: !1, ...r },
  );
}
function ne(e, t, r, o) {
  e.forEach((a, p) => {
    let d = r.get(p);
    if ((K(d, `Missing request data for ${p}`), !d)) return;
    let u = !1,
      n = {};
    t.forEach((i) => {
      d.has(i) ||
        ((u = !0),
        i == "top_tags"
          ? (n.include_tag_count = 10)
          : i && i != "default_info" && (n[i] = !0));
    }),
      u && o(a, n);
  });
}
function Je(e) {
  let t = I();
  return S(T(t, e));
}
function Xe(e) {
  let t = I(),
    r = b(),
    o = e && "packageid" in e && !!e.packageid,
    a;
  if (o) {
    let u = r.getQueryData(D(e, "default_info"));
    u &&
      u.included_appids?.length == 1 &&
      (a = { appid: u.included_appids[0] });
  }
  let { data: p } = S({ ...ue(t, e), enabled: o && !a });
  return p && (a = p), S(T(t, o ? a : e));
}
function ue(e, t) {
  let r = t && "packageid" in t && !!t.packageid;
  return {
    queryKey: D(t, "include_included_items"),
    queryFn: async () => {
      let o = await v(e, t, "include_included_items");
      return o.included_appids?.length == 1
        ? { appid: o.included_appids[0] }
        : t;
    },
    initialData: r ? void 0 : t,
    enabled: r,
  };
}
function Ye(e) {
  let t = I();
  return S(xe(t, e));
}
function Ze(e) {
  let t = I();
  return S(be(t, e));
}
function et(e) {
  let t = I();
  return S(me(t, e));
}
function tt(e) {
  let t = I();
  return S(Se(t, e));
}
function rt(e) {
  let t = I();
  return S(de(t, e));
}
function ot(e) {
  let t = I();
  return S(_e(t, e));
}
function at(e) {
  let t = I();
  return S(ge(t, e));
}
function st(e) {
  let t = I();
  return S(De(t, e));
}
function nt(e) {
  let t = I();
  return S(we(t, e));
}
function ie(e, t, r) {
  y(e, t, r, "include_basic_info", "basic_info");
}
function me(e, t) {
  return f(e, t, "include_assets", "assets");
}
function ce(e, t, r) {
  y(e, t, r, "include_assets", "assets");
}
function Se(e, t) {
  return f(e, t, "include_screenshots", "screenshots");
}
function le(e, t, r) {
  y(e, t, r, "include_screenshots", "screenshots");
}
function Ie(e, t, r) {
  y(e, t, r, "include_trailers", "trailers");
}
function pe(e, t, r) {
  y(e, t, r, "include_assets_without_overrides", "assets_without_overrides");
}
function de(e, t) {
  return f(e, t, "include_reviews", "reviews");
}
function ye(e, t, r) {
  y(e, t, r, "include_reviews", "reviews");
}
function _e(e, t) {
  return f(e, t, "include_release", "release");
}
function fe(e, t, r) {
  y(e, t, r, "include_release", "release");
}
function ge(e, t) {
  return f(e, t, "top_tags", "tags");
}
function he(e, t, r) {
  y(e, t, r, "top_tags", "tags");
}
function De(e, t) {
  return f(e, t, "include_platforms", "platforms");
}
function Ke(e, t, r) {
  y(e, t, r, "include_platforms", "platforms");
}
function we(e, t) {
  return f(e, t, "apply_user_filters", "user_filter_failure");
}
function Ce(e, t, r) {
  y(e, t, r, "apply_user_filters", "user_filter_failure");
}
function f(e, t, r, o) {
  return {
    queryKey: D(t, r),
    queryFn: async () => (await v(e, t, r))[o] || null,
    staleTime: 6 * 60 * 60 * 1e3,
    enabled: !!t,
  };
}
function y(e, t, r, o, a) {
  e.setQueryData(D(t, o), r[a]);
}
function T(e, t) {
  return {
    queryKey: D(t, "default_info"),
    queryFn: async () => ee(await v(e, t, "default_info")),
    staleTime: 6 * 60 * 60 * 1e3,
    enabled: !!t,
  };
}
function xe(e, t) {
  return {
    ...T(e, t),
    select: (r) => r.best_purchase_option || null,
    staleTime: 10 * 60 * 1e3,
  };
}
function be(e, t) {
  return {
    ...T(e, t),
    select: (r) => r.self_purchase_option || r.best_purchase_option || null,
    staleTime: 10 * 60 * 1e3,
  };
}
function D(e, t) {
  return ["StoreItem", e && P(e), t];
}
function B(e, t, r) {
  let o = z(t);
  o &&
    (Be(e, o, t),
    r.include_basic_info && ie(e, o, t),
    r.include_assets && ce(e, o, t),
    r.include_screenshots && le(e, o, t),
    r.include_trailers && Ie(e, o, t),
    r.include_assets_without_overrides && pe(e, o, t),
    r.include_reviews && ye(e, o, t),
    r.include_release && fe(e, o, t),
    r.include_tag_count && r.include_tag_count > 0 && he(e, o, t),
    r.include_platforms && Ke(e, o, t),
    r.apply_user_filters && Ce(e, o, t),
    r.include_included_items &&
      r.included_item_data_request &&
      (t.included_items?.included_apps?.forEach((a) =>
        B(e, a, r.included_item_data_request),
      ),
      t.included_items?.included_packages?.forEach((a) =>
        B(e, a, r.included_item_data_request),
      )));
}
var Re = [
  "assets",
  "tagids",
  "tags",
  "basic_info",
  "reviews",
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
  for (let r of Re) delete t[r];
  return t;
}
function Be(e, t, r) {
  e.setQueryData(D(t, "default_info"), ee(r));
}
async function v(e, t, r) {
  return await e.load(`${P(t)}|${r}`);
}
var te = x(q(), 1),
  w = l.createContext({});
function I() {
  return l.useContext(w).dataLoader;
}
function lt() {
  return l.useContext(w).storeBrowseContext;
}
function It() {
  return l.useContext(w).cacheStoreItemData;
}
function pt() {
  return l.useContext(w);
}
function dt(e) {
  let {
      context: t,
      msDelayBatch: r,
      serviceTransportOverride: o,
      legacyCacheStoreItemData: a,
      children: p,
    } = e,
    d = G(),
    u = b(),
    n = l.useCallback(
      (C, U) => {
        B(u, C.toObject(), U), a && a(C, U);
      },
      [u, a],
    ),
    i = o || d,
    { country: g, language: h, realm: s, bUsePartnerAPI: m } = t,
    c = l.useMemo(
      () => ({ country: g, language: h, realm: s, bUsePartnerAPI: m }),
      [g, h, s, m],
    ),
    _ = l.useMemo(() => {
      let C = r ? Te(r) : void 0;
      return Z(i, c, { cache: !1, batchScheduleFn: C }, n);
    }, [i, n, c, r]),
    re = l.useMemo(
      () => ({ dataLoader: _, storeBrowseContext: c, cacheStoreItemData: n }),
      [_, c, n],
    );
  return (0, te.jsx)(w.Provider, { value: re, children: p });
}
function Te(e) {
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
  P as a,
  z as b,
  Pe as c,
  J as d,
  X as e,
  I as f,
  lt as g,
  It as h,
  pt as i,
  dt as j,
  Je as k,
  Xe as l,
  Ye as m,
  Ze as n,
  et as o,
  tt as p,
  rt as q,
  ot as r,
  at as s,
  st as t,
  nt as u,
  me as v,
  ge as w,
  De as x,
  we as y,
  T as z,
};
