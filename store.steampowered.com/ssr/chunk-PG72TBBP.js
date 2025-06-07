import { a as M, b as N, h as se } from "./chunk-YPUWAJII.js";
import {
  e as P,
  g as O,
  h as E,
  i as A,
  j as F,
  n as $,
} from "./chunk-QHRJIE2V.js";
import { t as L, w as G } from "./chunk-HLIFFZDE.js";
import { b, e as S, h as K, i as R, p as k } from "./chunk-VQUKEJ3T.js";
import { p as q } from "./chunk-JDZRYYPH.js";
import { a as ne } from "./chunk-BGXQT2NR.js";
import { e as x } from "./chunk-DWMTCHDI.js";
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
      R(t, `Unknown EStoreItemType ${t} ${P(t)} `);
      return;
  }
}
function ve(e) {
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
var I = x(ne(), 1);
var Y = x(se(), 1);
function J(e, t) {
  t.Body().set_context(ue(e));
}
function ue(e) {
  let t = new E();
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
      let p = new Set(),
        i = new Map(),
        d = new Set();
      d.add("default_info");
      let s = {};
      if (
        (a.forEach((u) => {
          let [m, c = "default_info"] = k(u, "|");
          p.add(m),
            d.has(c) ||
              (c == "top_tags"
                ? (s.include_tag_count = 10)
                : c != "default_info" && (s[c] = !0),
              d.add(c));
          let _ = i.get(m);
          _ || ((_ = new Set()), i.set(m, _)), _.add(c);
        }),
        s.include_included_items)
      ) {
        let { include_included_items: u, ...m } = s;
        s.included_item_data_request = m;
      }
      let n = L.Init(F);
      J(t, n),
        X(n, s),
        p.forEach((u) => {
          let m = H(u);
          m && n.Body().add_ids(A.fromObject(m));
        });
      let g;
      if (t.bUsePartnerAPI) {
        let u = L.Init(M);
        u.Body().set_request(n.Body()), (g = await N.GetItems(e, u));
      } else g = await $.GetItems(e, n);
      let h = new Map();
      return (
        g
          .Body()
          .store_items()
          .forEach((u) => {
            h.set(W(u.item_type(), u.id()), u);
          }),
        o && ie(h, d, i, o),
        a.map((u) => {
          let [m] = k(u, "|"),
            c = h.get(m);
          return c ? c.toObject() : { ...V(m), success: 2 };
        })
      );
    },
    { maxBatchSize: 500, cache: !1, ...r },
  );
}
function ie(e, t, r, o) {
  e.forEach((a, p) => {
    let i = r.get(p);
    if ((K(i, `Missing request data for ${p}`), !i)) return;
    let d = !1,
      s = {};
    t.forEach((n) => {
      i.has(n) ||
        ((d = !0),
        n == "top_tags"
          ? (s.include_tag_count = 10)
          : n && n != "default_info" && (s[n] = !0));
    }),
      d && o(a, s);
  });
}
function Xe(e) {
  let t = l();
  return S(T(t, e));
}
function Ye(e) {
  return ee(e, T);
}
function Ze(e) {
  return ee(e, te, "include_assets");
}
function ee(e, t, r) {
  let o = l(),
    a = b(),
    p = e && "packageid" in e && !!e.packageid,
    i;
  if (p) {
    let n = a.getQueryData(D(e, "default_info"));
    n &&
      n.included_appids?.length == 1 &&
      (i = { appid: n.included_appids[0] });
  }
  let { data: d } = S({ ...me(o, e, r), enabled: p && !i });
  return d && (i = d), S(t(o, p ? i : e));
}
function me(e, t, r) {
  let o = t && "packageid" in t && !!t.packageid;
  return {
    queryKey: D(t, "include_included_items"),
    queryFn: async () => {
      r && Q(e, t, r);
      let a = await Q(e, t, "include_included_items");
      return a.included_appids?.length == 1
        ? { appid: a.included_appids[0] }
        : t;
    },
    initialData: o ? void 0 : t,
    enabled: o,
  };
}
function et(e) {
  let t = l();
  return S(be(t, e));
}
function tt(e) {
  let t = l();
  return S(Re(t, e));
}
function rt(e) {
  let t = l();
  return S(te(t, e));
}
function ot(e) {
  let t = l();
  return S(Se(t, e));
}
function at(e) {
  let t = l();
  return S(ye(t, e));
}
function nt(e) {
  let t = l();
  return S(fe(t, e));
}
function st(e) {
  let t = l();
  return S(he(t, e));
}
function ut(e) {
  let t = l();
  return S(Ke(t, e));
}
function it(e) {
  let t = l();
  return S(Ce(t, e));
}
function ce(e, t, r) {
  y(e, t, r, "include_basic_info", "basic_info");
}
function te(e, t) {
  return f(e, t, "include_assets", "assets");
}
function de(e, t, r) {
  y(e, t, r, "include_assets", "assets");
}
function Se(e, t) {
  return f(e, t, "include_screenshots", "screenshots");
}
function Ie(e, t, r) {
  y(e, t, r, "include_screenshots", "screenshots");
}
function le(e, t, r) {
  y(e, t, r, "include_trailers", "trailers");
}
function pe(e, t, r) {
  y(e, t, r, "include_assets_without_overrides", "assets_without_overrides");
}
function ye(e, t) {
  return f(e, t, "include_reviews", "reviews");
}
function _e(e, t, r) {
  y(e, t, r, "include_reviews", "reviews");
}
function fe(e, t) {
  return f(e, t, "include_release", "release");
}
function ge(e, t, r) {
  y(e, t, r, "include_release", "release");
}
function he(e, t) {
  return f(e, t, "top_tags", "tags");
}
function De(e, t, r) {
  y(e, t, r, "top_tags", "tags");
}
function Ke(e, t) {
  return f(e, t, "include_platforms", "platforms");
}
function we(e, t, r) {
  y(e, t, r, "include_platforms", "platforms");
}
function Ce(e, t) {
  return f(e, t, "apply_user_filters", "user_filter_failure");
}
function xe(e, t, r) {
  y(e, t, r, "apply_user_filters", "user_filter_failure");
}
function f(e, t, r, o) {
  return {
    queryKey: D(t, r),
    queryFn: async () => (await Q(e, t, r))[o] || null,
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
    queryFn: async () => re(await Q(e, t, "default_info")),
    staleTime: 6 * 60 * 60 * 1e3,
    enabled: !!t,
  };
}
function be(e, t) {
  return {
    ...T(e, t),
    select: (r) => r.best_purchase_option || null,
    staleTime: 10 * 60 * 1e3,
  };
}
function Re(e, t) {
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
    (Qe(e, o, t),
    r.include_basic_info && ce(e, o, t),
    r.include_assets && de(e, o, t),
    r.include_screenshots && Ie(e, o, t),
    r.include_trailers && le(e, o, t),
    r.include_assets_without_overrides && pe(e, o, t),
    r.include_reviews && _e(e, o, t),
    r.include_release && ge(e, o, t),
    r.include_tag_count && r.include_tag_count > 0 && De(e, o, t),
    r.include_platforms && we(e, o, t),
    r.apply_user_filters && xe(e, o, t),
    r.include_included_items &&
      r.included_item_data_request &&
      (t.included_items?.included_apps?.forEach((a) =>
        B(e, a, r.included_item_data_request),
      ),
      t.included_items?.included_packages?.forEach((a) =>
        B(e, a, r.included_item_data_request),
      )));
}
var Be = [
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
function re(e) {
  let t = { ...e };
  for (let r of Be) delete t[r];
  return t;
}
function Qe(e, t, r) {
  e.setQueryData(D(t, "default_info"), re(r));
}
async function Q(e, t, r) {
  return await e.load(`${v(t)}|${r}`);
}
var oe = x(q(), 1),
  w = I.createContext({});
function l() {
  return I.useContext(w).dataLoader;
}
function lt() {
  return I.useContext(w).storeBrowseContext;
}
function pt() {
  return I.useContext(w).cacheStoreItemData;
}
function yt() {
  return I.useContext(w);
}
function _t(e) {
  let {
      context: t,
      msDelayBatch: r,
      serviceTransportOverride: o,
      legacyCacheStoreItemData: a,
      children: p,
    } = e,
    i = G(),
    d = b(),
    s = I.useCallback(
      (C, U) => {
        B(d, C.toObject(), U), a && a(C, U);
      },
      [d, a],
    ),
    n = o || i,
    { country: g, language: h, realm: u, bUsePartnerAPI: m } = t,
    c = I.useMemo(
      () => ({ country: g, language: h, realm: u, bUsePartnerAPI: m }),
      [g, h, u, m],
    ),
    _ = I.useMemo(() => {
      let C = r ? Te(r) : void 0;
      return Z(n, c, { cache: !1, batchScheduleFn: C }, s);
    }, [n, s, c, r]),
    ae = I.useMemo(
      () => ({ dataLoader: _, storeBrowseContext: c, cacheStoreItemData: s }),
      [_, c, s],
    );
  return (0, oe.jsx)(w.Provider, { value: ae, children: p });
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
  v as a,
  z as b,
  ve as c,
  J as d,
  X as e,
  l as f,
  lt as g,
  pt as h,
  yt as i,
  _t as j,
  Xe as k,
  Ye as l,
  Ze as m,
  et as n,
  tt as o,
  rt as p,
  ot as q,
  at as r,
  nt as s,
  st as t,
  ut as u,
  it as v,
  te as w,
  he as x,
  Ke as y,
  Ce as z,
  T as A,
};
