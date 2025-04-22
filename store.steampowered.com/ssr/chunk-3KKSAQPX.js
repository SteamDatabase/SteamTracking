const CLSTAMP = 9686915;

import { a as M, b as N, h as ae } from "./chunk-JSQE5DBY.js";
import {
  b as L,
  d as q,
  e as O,
  f as F,
  g as A,
  k as $,
} from "./chunk-LQVY2IH3.js";
import { t as k, w as G } from "./chunk-ZAEHAUWC.js";
import { b as x, e as S, h as w, i as R, o as T } from "./chunk-CG2AVMMX.js";
import { o as U } from "./chunk-NSLGW32G.js";
import { a as oe } from "./chunk-ASFGMT32.js";
import { d as K } from "./chunk-BWYQWJMA.js";
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
function Le(e) {
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
var I = K(oe(), 1);
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
  e.Body().set_data_request(q.fromObject(t));
}
function Z(e, t, r, o) {
  return new Y.default(
    async (a) => {
      let l = new Set(),
        d = new Map(),
        u = new Set();
      u.add("default_info");
      let n = {};
      if (
        (a.forEach((s) => {
          let [m, c = "default_info"] = T(s, "|");
          l.add(m),
            u.has(c) ||
              (c == "top_tags"
                ? (n.include_tag_count = 10)
                : c != "default_info" && (n[c] = !0),
              u.add(c));
          let y = d.get(m);
          y || ((y = new Set()), d.set(m, y)), y.add(c);
        }),
        n.include_included_items)
      ) {
        let { include_included_items: s, ...m } = n;
        n.included_item_data_request = m;
      }
      let i = k.Init(A);
      J(t, i),
        X(i, n),
        l.forEach((s) => {
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
          let [m] = T(s, "|"),
            c = h.get(m);
          return c ? c.toObject() : { ...V(m), success: 2 };
        })
      );
    },
    { maxBatchSize: 500, cache: !1, ...r },
  );
}
function ne(e, t, r, o) {
  e.forEach((a, l) => {
    let d = r.get(l);
    if ((w(d, `Missing request data for ${l}`), !d)) return;
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
function ze(e) {
  let t = p();
  return S(Q(t, e));
}
function Je(e) {
  let t = p(),
    r = x(),
    o = e && "packageid" in e && !!e.packageid,
    a;
  if (o) {
    let u = r.getQueryData(D(e, "default_info"));
    u &&
      u.included_appids?.length == 1 &&
      (a = { appid: u.included_appids[0] });
  }
  let { data: l } = S({ ...ue(t, e), enabled: o && !a });
  return l && (a = l), S(Q(t, o ? a : e));
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
function Xe(e) {
  let t = p();
  return S(be(t, e));
}
function Ye(e) {
  let t = p();
  return S(Ke(t, e));
}
function Ze(e) {
  let t = p();
  return S(me(t, e));
}
function et(e) {
  let t = p();
  return S(Se(t, e));
}
function tt(e) {
  let t = p();
  return S(le(t, e));
}
function rt(e) {
  let t = p();
  return S(_e(t, e));
}
function ot(e) {
  let t = p();
  return S(fe(t, e));
}
function at(e) {
  let t = p();
  return S(he(t, e));
}
function st(e) {
  let t = p();
  return S(we(t, e));
}
function ie(e, t, r) {
  _(e, t, r, "include_basic_info", "basic_info");
}
function me(e, t) {
  return f(e, t, "include_assets", "assets");
}
function ce(e, t, r) {
  _(e, t, r, "include_assets", "assets");
}
function Se(e, t) {
  return f(e, t, "include_screenshots", "screenshots");
}
function Ie(e, t, r) {
  _(e, t, r, "include_screenshots", "screenshots");
}
function pe(e, t, r) {
  _(e, t, r, "include_assets_without_overrides", "assets_without_overrides");
}
function le(e, t) {
  return f(e, t, "include_reviews", "reviews");
}
function de(e, t, r) {
  _(e, t, r, "include_reviews", "reviews");
}
function _e(e, t) {
  return f(e, t, "include_release", "release");
}
function ye(e, t, r) {
  _(e, t, r, "include_release", "release");
}
function fe(e, t) {
  return f(e, t, "top_tags", "tags");
}
function ge(e, t, r) {
  _(e, t, r, "top_tags", "tags");
}
function he(e, t) {
  return f(e, t, "include_platforms", "platforms");
}
function De(e, t, r) {
  _(e, t, r, "include_platforms", "platforms");
}
function we(e, t) {
  return f(e, t, "apply_user_filters", "user_filter_failure");
}
function Ce(e, t, r) {
  _(e, t, r, "apply_user_filters", "user_filter_failure");
}
function f(e, t, r, o) {
  return {
    queryKey: D(t, r),
    queryFn: async () => (await v(e, t, r))[o] || null,
    staleTime: 6 * 60 * 60 * 1e3,
    enabled: !!t,
  };
}
function _(e, t, r, o, a) {
  e.setQueryData(D(t, o), r[a]);
}
function Q(e, t) {
  return {
    queryKey: D(t, "default_info"),
    queryFn: async () => ee(await v(e, t, "default_info")),
    staleTime: 6 * 60 * 60 * 1e3,
    enabled: !!t,
  };
}
function be(e, t) {
  return {
    ...Q(e, t),
    select: (r) => r.best_purchase_option || null,
    staleTime: 10 * 60 * 1e3,
  };
}
function Ke(e, t) {
  return {
    ...Q(e, t),
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
    (Re(e, o, t),
    r.include_basic_info && ie(e, o, t),
    r.include_assets && ce(e, o, t),
    r.include_screenshots && Ie(e, o, t),
    r.include_assets_without_overrides && pe(e, o, t),
    r.include_reviews && de(e, o, t),
    r.include_release && ye(e, o, t),
    r.include_tag_count && r.include_tag_count > 0 && ge(e, o, t),
    r.include_platforms && De(e, o, t),
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
function Re(e, t, r) {
  e.setQueryData(D(t, "default_info"), ee(r));
}
async function v(e, t, r) {
  return await e.load(`${P(t)}|${r}`);
}
var te = K(U(), 1),
  C = I.createContext({});
function p() {
  return I.useContext(C).dataLoader;
}
function St() {
  return I.useContext(C).storeBrowseContext;
}
function It() {
  return I.useContext(C).cacheStoreItemData;
}
function pt() {
  return I.useContext(C);
}
function lt(e) {
  let {
      context: t,
      msDelayBatch: r,
      serviceTransportOverride: o,
      legacyCacheStoreItemData: a,
      children: l,
    } = e,
    d = G(),
    u = x(),
    n = I.useCallback(
      (b, E) => {
        B(u, b.toObject(), E), a && a(b, E);
      },
      [u, a],
    ),
    i = o || d,
    { country: g, language: h, realm: s, bUsePartnerAPI: m } = t,
    c = I.useMemo(
      () => ({ country: g, language: h, realm: s, bUsePartnerAPI: m }),
      [g, h, s, m],
    ),
    y = I.useMemo(() => {
      let b = r ? Be(r) : void 0;
      return Z(i, c, { cache: !1, batchScheduleFn: b }, n);
    }, [i, n, c, r]),
    re = I.useMemo(
      () => ({ dataLoader: y, storeBrowseContext: c, cacheStoreItemData: n }),
      [y, c, n],
    );
  return (0, te.jsx)(C.Provider, { value: re, children: l });
}
function Be(e) {
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
  Le as c,
  J as d,
  X as e,
  p as f,
  St as g,
  It as h,
  pt as i,
  lt as j,
  ze as k,
  Je as l,
  Xe as m,
  Ye as n,
  Ze as o,
  et as p,
  tt as q,
  rt as r,
  ot as s,
  at as t,
  st as u,
  me as v,
  fe as w,
  he as x,
  we as y,
  Q as z,
};
