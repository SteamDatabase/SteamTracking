import { a as M, b as N, h as ne } from "./chunk-RQKDO56E.js";
import {
  e as P,
  g as E,
  h as O,
  i as F,
  j as A,
  n as $,
} from "./chunk-B5ZXSVB3.js";
import { t as L, w as G } from "./chunk-4FTNGOE5.js";
import { b as K, e as d, h as w, i as R, p as k } from "./chunk-R6GEVKLE.js";
import { p as q } from "./chunk-TSBVJ6DK.js";
import { a as ae } from "./chunk-GI6JRRGT.js";
import { e as b } from "./chunk-QYDZXQ52.js";
function B(e) {
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
      return R(e, `Unknown EStoreItemType ${e} ${P(e)} `), "";
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
      R(t, `Unknown EStoreItemType ${t} ${P(t)} `);
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
              : (w(!1, `Invalid itemid: ${JSON.stringify(e.toObject())}`),
                { appid: 0 });
}
var l = b(ae(), 1);
var Y = b(ne(), 1);
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
      let I = new Set(),
        p = new Map(),
        u = new Set();
      u.add("default_info");
      let s = {};
      if (
        (a.forEach((n) => {
          let [m, c = "default_info"] = k(n, "|");
          I.add(m),
            u.has(c) ||
              (c == "top_tags"
                ? (s.include_tag_count = 10)
                : c != "default_info" && (s[c] = !0),
              u.add(c));
          let _ = p.get(m);
          _ || ((_ = new Set()), p.set(m, _)), _.add(c);
        }),
        s.include_included_items)
      ) {
        let { include_included_items: n, ...m } = s;
        s.included_item_data_request = m;
      }
      let i = L.Init(A);
      J(t, i),
        X(i, s),
        I.forEach((n) => {
          let m = H(n);
          m && i.Body().add_ids(F.fromObject(m));
        });
      let g;
      if (t.bUsePartnerAPI) {
        let n = L.Init(M);
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
        o && ue(h, u, p, o),
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
function ue(e, t, r, o) {
  e.forEach((a, I) => {
    let p = r.get(I);
    if ((w(p, `Missing request data for ${I}`), !p)) return;
    let u = !1,
      s = {};
    t.forEach((i) => {
      p.has(i) ||
        ((u = !0),
        i == "top_tags"
          ? (s.include_tag_count = 10)
          : i && i != "default_info" && (s[i] = !0));
    }),
      u && o(a, s);
  });
}
function Je(e) {
  let t = S();
  return d(Q(t, e));
}
function Xe(e) {
  let t = S(),
    r = K(),
    o = e && "packageid" in e && !!e.packageid,
    a;
  if (o) {
    let u = r.getQueryData(D(e, "default_info"));
    u &&
      u.included_appids?.length == 1 &&
      (a = { appid: u.included_appids[0] });
  }
  let { data: I } = d({ ...ee(t, e), enabled: o && !a });
  return I && (a = I), d(Q(t, o ? a : e));
}
function Ye(e) {
  let t = S(),
    r = K();
  return d({
    queryKey: ["resolvedSingleAppPackageIDs", e?.map(B)],
    queryFn: async () =>
      await Promise.all(
        e.map((o) =>
          "packageid" in o ? r.fetchQuery(ee(t, o)) : Promise.resolve(o),
        ),
      ),
    enabled: !!e,
    staleTime: 1 / 0,
  });
}
function ee(e, t) {
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
function Ze(e) {
  let t = S();
  return d(xe(t, e));
}
function et(e) {
  let t = S();
  return d(be(t, e));
}
function tt(e) {
  let t = S();
  return d(me(t, e));
}
function rt(e) {
  let t = S();
  return d(de(t, e));
}
function ot(e) {
  let t = S();
  return d(pe(t, e));
}
function at(e) {
  let t = S();
  return d(_e(t, e));
}
function nt(e) {
  let t = S();
  return d(ge(t, e));
}
function st(e) {
  let t = S();
  return d(De(t, e));
}
function ut(e) {
  let t = S();
  return d(we(t, e));
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
function de(e, t) {
  return f(e, t, "include_screenshots", "screenshots");
}
function Se(e, t, r) {
  y(e, t, r, "include_screenshots", "screenshots");
}
function le(e, t, r) {
  y(e, t, r, "include_trailers", "trailers");
}
function Ie(e, t, r) {
  y(e, t, r, "include_assets_without_overrides", "assets_without_overrides");
}
function pe(e, t) {
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
function Q(e, t) {
  return {
    queryKey: D(t, "default_info"),
    queryFn: async () => te(await v(e, t, "default_info")),
    staleTime: 6 * 60 * 60 * 1e3,
    enabled: !!t,
  };
}
function xe(e, t) {
  return {
    ...Q(e, t),
    select: (r) => r.best_purchase_option || null,
    staleTime: 10 * 60 * 1e3,
  };
}
function be(e, t) {
  return {
    ...Q(e, t),
    select: (r) => r.self_purchase_option || r.best_purchase_option || null,
    staleTime: 10 * 60 * 1e3,
  };
}
function D(e, t) {
  return ["StoreItem", e && B(e), t];
}
function T(e, t, r) {
  let o = z(t);
  o &&
    (Be(e, o, t),
    r.include_basic_info && ie(e, o, t),
    r.include_assets && ce(e, o, t),
    r.include_screenshots && Se(e, o, t),
    r.include_trailers && le(e, o, t),
    r.include_assets_without_overrides && Ie(e, o, t),
    r.include_reviews && ye(e, o, t),
    r.include_release && fe(e, o, t),
    r.include_tag_count && r.include_tag_count > 0 && he(e, o, t),
    r.include_platforms && Ke(e, o, t),
    r.apply_user_filters && Ce(e, o, t),
    r.include_included_items &&
      r.included_item_data_request &&
      (t.included_items?.included_apps?.forEach((a) =>
        T(e, a, r.included_item_data_request),
      ),
      t.included_items?.included_packages?.forEach((a) =>
        T(e, a, r.included_item_data_request),
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
function te(e) {
  let t = { ...e };
  for (let r of Re) delete t[r];
  return t;
}
function Be(e, t, r) {
  e.setQueryData(D(t, "default_info"), te(r));
}
async function v(e, t, r) {
  return await e.load(`${B(t)}|${r}`);
}
var re = b(q(), 1),
  C = l.createContext({});
function S() {
  return l.useContext(C).dataLoader;
}
function lt() {
  return l.useContext(C).storeBrowseContext;
}
function It() {
  return l.useContext(C).cacheStoreItemData;
}
function pt() {
  return l.useContext(C);
}
function yt(e) {
  let {
      context: t,
      msDelayBatch: r,
      serviceTransportOverride: o,
      legacyCacheStoreItemData: a,
      children: I,
    } = e,
    p = G(),
    u = K(),
    s = l.useCallback(
      (x, U) => {
        T(u, x.toObject(), U), a && a(x, U);
      },
      [u, a],
    ),
    i = o || p,
    { country: g, language: h, realm: n, bUsePartnerAPI: m } = t,
    c = l.useMemo(
      () => ({ country: g, language: h, realm: n, bUsePartnerAPI: m }),
      [g, h, n, m],
    ),
    _ = l.useMemo(() => {
      let x = r ? Te(r) : void 0;
      return Z(i, c, { cache: !1, batchScheduleFn: x }, s);
    }, [i, s, c, r]),
    oe = l.useMemo(
      () => ({ dataLoader: _, storeBrowseContext: c, cacheStoreItemData: s }),
      [_, c, s],
    );
  return (0, re.jsx)(C.Provider, { value: oe, children: I });
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
  B as a,
  z as b,
  Pe as c,
  J as d,
  X as e,
  S as f,
  lt as g,
  It as h,
  pt as i,
  yt as j,
  Je as k,
  Xe as l,
  Ye as m,
  Ze as n,
  et as o,
  tt as p,
  rt as q,
  ot as r,
  at as s,
  nt as t,
  st as u,
  ut as v,
  me as w,
  ge as x,
  De as y,
  we as z,
  Q as A,
};
