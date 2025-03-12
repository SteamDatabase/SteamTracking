const CLSTAMP = 9598355;

import { a as Q, b as E, f as Fe } from "./chunk-CLJLRWDQ.js";
import {
  A as H,
  B as j,
  E as U,
  G as W,
  t as L,
  w as $,
  y as G,
  z,
} from "./chunk-RG74SZKD.js";
import { c as O } from "./chunk-NCBAOU5T.js";
import { b as w, d, g as h, h as b, o as R } from "./chunk-A7W4HGSY.js";
import { m as x } from "./chunk-DNKCKFVA.js";
import { a as Ke } from "./chunk-OZ6CSMNN.js";
import { d as C } from "./chunk-XL5OQFLS.js";
function D(e) {
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
              : (b(e, "Unknown store item id type"), "");
}
function V(e, o) {
  switch (e) {
    case 0:
      return `app_${o}`;
    case 1:
      return `package_${o}`;
    case 2:
      return `bundle_${o}`;
    case 4:
      return `tag_${o}`;
    case 5:
      return `creator_${o}`;
    case 6:
      return `hubcategory_${o}`;
    case 3:
    case -1:
      return "";
    default:
      return b(e, `Unknown EStoreItemType ${e} ${$(e)} `), "";
  }
}
var q = /^(app|package|bundle|mtx|tag|creator|hubcategory)_(\d*)$/;
function J(e) {
  let o = e.match(q);
  if (o)
    switch (o[1]) {
      case "app":
        return { appid: parseInt(o[2]) };
      case "package":
        return { packageid: parseInt(o[2]) };
      case "bundle":
        return { bundleid: parseInt(o[2]) };
      case "tag":
        return { tagid: parseInt(o[2]) };
      case "creator":
        return { creatorid: parseInt(o[2]) };
      case "hubcategory":
        return { hubcategoryid: parseInt(o[2]) };
    }
  h(!1, `Failed to parse StoreItemID ${e}`);
}
function Y(e) {
  let o = e.match(q);
  if (o)
    switch (o[1]) {
      case "app":
        return { item_type: 0, id: parseInt(o[2]) };
      case "package":
        return { item_type: 1, id: parseInt(o[2]) };
      case "bundle":
        return { item_type: 2, id: parseInt(o[2]) };
      case "tag":
        return { item_type: 4, id: parseInt(o[2]) };
      case "creator":
        return { item_type: 5, id: parseInt(o[2]) };
      case "hubcategory":
        return { item_type: 6, id: parseInt(o[2]) };
    }
  return { item_type: -1, id: o ? parseInt(o[2]) : 0 };
}
function Z(e) {
  let o = e.item_type ?? -1,
    t = e.id || 0;
  switch (o) {
    case 0:
      return { appid: t };
    case 1:
      return { packageid: t };
    case 2:
      return { bundleid: t };
    case 4:
      return { tagid: t };
    case 5:
      return { creatorid: t };
    case 6:
      return { hubcategoryid: t };
    case 3:
    case -1:
      return;
    default:
      b(o, `Unknown EStoreItemType ${o} ${$(o)} `);
      return;
  }
}
function zo(e) {
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
              : (h(!1, `Invalid itemid: ${JSON.stringify(e.toObject())}`),
                { appid: 0 });
}
var c = C(Ke(), 1);
var oe = C(Fe(), 1);
function X(e, o) {
  o.Body().set_context(Oe(e));
}
function Oe(e) {
  let o = new z();
  return (
    e.bUsePartnerAPI || o.set_country_code(e.country),
    o.set_language(e.language),
    e.realm != 0 && o.set_steam_realm(e.realm),
    o
  );
}
function ee(e, o) {
  e.Body().set_data_request(G.fromObject(o));
}
function te(e, o, t, a) {
  return new oe.default(
    async (n) => {
      let S = new Set(),
        P = new Map(),
        s = new Set();
      s.add("default_info");
      let u = {};
      if (
        (n.forEach((i) => {
          let [l, p = "default_info"] = R(i, "|");
          S.add(l),
            s.has(p) ||
              (p == "top_tags"
                ? (u.include_tag_count = 10)
                : p != "default_info" && (u[p] = !0),
              s.add(p));
          let M = P.get(l);
          M || ((M = new Set()), P.set(l, M)), M.add(p);
        }),
        u.include_included_items)
      ) {
        let { include_included_items: i, ...l } = u;
        u.included_item_data_request = l;
      }
      let _ = L.Init(j);
      X(o, _),
        ee(_, u),
        S.forEach((i) => {
          let l = J(i);
          l && _.Body().add_ids(H.fromObject(l));
        });
      let g;
      if (o.bUsePartnerAPI) {
        let i = L.Init(Q);
        i.Body().set_request(_.Body()), (g = await E.GetItems(e, i));
      } else g = await U.GetItems(e, _);
      let I = new Map();
      return (
        g
          .Body()
          .store_items()
          .forEach((i) => {
            I.set(V(i.item_type(), i.id()), i);
          }),
        a && xe(I, s, P, a),
        n.map((i) => {
          let [l] = R(i, "|"),
            p = I.get(l);
          return p ? p.toObject() : { ...Y(l), success: 2 };
        })
      );
    },
    { maxBatchSize: 500, cache: !1, ...t },
  );
}
function xe(e, o, t, a) {
  e.forEach((n, S) => {
    let P = t.get(S);
    if ((h(P, `Missing request data for ${S}`), !P)) return;
    let s = !1,
      u = {};
    o.forEach((_) => {
      P.has(_) ||
        ((s = !0),
        _ == "top_tags"
          ? (u.include_tag_count = 10)
          : _ && _ != "default_info" && (u[_] = !0));
    }),
      s && a(n, u);
  });
}
function at(e) {
  let o = m();
  return d(B(o, e));
}
function nt(e) {
  let o = m(),
    t = w(),
    a = "packageid" in e && !!e.packageid,
    n;
  if (a) {
    let s = t.getQueryData(f(e, "default_info"));
    s &&
      s.included_appids?.length == 1 &&
      (n = { appid: s.included_appids[0] });
  }
  let { data: S } = d({
    queryKey: f(e, "include_included_items"),
    queryFn: async () => {
      let s = await N(o, e, "include_included_items");
      return s.included_appids?.length == 1
        ? { appid: s.included_appids[0] }
        : e;
    },
    enabled: a && !n,
  });
  return S && (n = S), d(B(o, a ? n : e));
}
function st(e) {
  let o = m();
  return d(oo(o, e));
}
function it(e) {
  let o = m();
  return d(to(o, e));
}
function ut(e) {
  let o = m();
  return d(Ge(o, e));
}
function _t(e) {
  let o = m();
  return d(He(o, e));
}
function lt(e) {
  let o = m();
  return d(We(o, e));
}
function pt(e) {
  let o = m();
  return d(Ee(o, e));
}
function dt(e) {
  let o = m();
  return d(qe(o, e));
}
function ct(e) {
  let o = m();
  return d(Ye(o, e));
}
function mt(e) {
  let o = m();
  return d(Xe(o, e));
}
function Ge(e, o) {
  return v(e, o, "include_assets", "assets");
}
function ze(e, o, t) {
  y(e, o, t, "include_assets", "assets");
}
function He(e, o) {
  return v(e, o, "include_screenshots", "screenshots");
}
function je(e, o, t) {
  y(e, o, t, "include_screenshots", "screenshots");
}
function Ue(e, o, t) {
  y(e, o, t, "include_assets_without_overrides", "assets_without_overrides");
}
function We(e, o) {
  return v(e, o, "include_reviews", "reviews");
}
function Qe(e, o, t) {
  y(e, o, t, "include_reviews", "reviews");
}
function Ee(e, o) {
  return v(e, o, "include_release", "release");
}
function Ve(e, o, t) {
  y(e, o, t, "include_release", "release");
}
function qe(e, o) {
  return v(e, o, "top_tags", "tags");
}
function Je(e, o, t) {
  y(e, o, t, "top_tags", "tags");
}
function Ye(e, o) {
  return v(e, o, "include_platforms", "platforms");
}
function Ze(e, o, t) {
  y(e, o, t, "include_platforms", "platforms");
}
function Xe(e, o) {
  return v(e, o, "apply_user_filters", "user_filter_failure");
}
function eo(e, o, t) {
  y(e, o, t, "apply_user_filters", "user_filter_failure");
}
function v(e, o, t, a) {
  return {
    queryKey: f(o, t),
    queryFn: async () => (await N(e, o, t))[a] || null,
    staleTime: 6 * 60 * 60 * 1e3,
    enabled: !!o,
  };
}
function y(e, o, t, a, n) {
  e.setQueryData(f(o, a), t[n]);
}
function B(e, o) {
  return {
    queryKey: f(o, "default_info"),
    queryFn: async () => re(await N(e, o, "default_info")),
    staleTime: 6 * 60 * 60 * 1e3,
    enabled: !!o,
  };
}
function oo(e, o) {
  return {
    ...B(e, o),
    select: (t) => t.best_purchase_option || null,
    staleTime: 10 * 60 * 1e3,
  };
}
function to(e, o) {
  return {
    ...B(e, o),
    select: (t) => t.self_purchase_option || t.best_purchase_option || null,
    staleTime: 10 * 60 * 1e3,
  };
}
function f(e, o) {
  return ["StoreItem", e && D(e), o];
}
function k(e, o, t) {
  let a = Z(o);
  a &&
    (ao(e, a, o),
    t.include_assets && ze(e, a, o),
    t.include_screenshots && je(e, a, o),
    t.include_assets_without_overrides && Ue(e, a, o),
    t.include_reviews && Qe(e, a, o),
    t.include_release && Ve(e, a, o),
    t.include_tag_count && t.include_tag_count > 0 && Je(e, a, o),
    t.include_platforms && Ze(e, a, o),
    t.apply_user_filters && eo(e, a, o),
    t.include_included_items &&
      t.included_item_data_request &&
      (o.included_items?.included_apps?.forEach((n) =>
        k(e, n, t.included_item_data_request),
      ),
      o.included_items?.included_packages?.forEach((n) =>
        k(e, n, t.included_item_data_request),
      )));
}
var ro = [
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
function re(e) {
  let o = { ...e };
  for (let t of ro) delete o[t];
  return o;
}
function ao(e, o, t) {
  e.setQueryData(f(o, "default_info"), re(t));
}
async function N(e, o, t) {
  return await e.load(`${D(o)}|${t}`);
}
var ae = C(x(), 1),
  T = c.createContext({});
function m() {
  return c.useContext(T).dataLoader;
}
function gt() {
  return c.useContext(T).storeBrowseContext;
}
function It() {
  return c.useContext(T).cacheStoreItemData;
}
function ft() {
  return c.useContext(T);
}
function ht(e) {
  let {
      context: o,
      msDelayBatch: t,
      serviceTransportOverride: a,
      legacyCacheStoreItemData: n,
      children: S,
    } = e,
    P = W(),
    s = w(),
    u = c.useCallback(
      (A, F) => {
        k(s, A.toObject(), F), n && n(A, F);
      },
      [s, n],
    ),
    _ = a || P,
    { country: g, language: I, realm: i, bUsePartnerAPI: l } = o,
    p = c.useMemo(
      () => ({ country: g, language: I, realm: i, bUsePartnerAPI: l }),
      [g, I, i, l],
    ),
    M = c.useMemo(() => {
      let A = t ? no(t) : void 0;
      return te(_, p, { cache: !1, batchScheduleFn: A }, u);
    }, [_, u, p, t]),
    Ne = c.useMemo(
      () => ({ dataLoader: M, storeBrowseContext: p, cacheStoreItemData: u }),
      [M, p, u],
    );
  return (0, ae.jsx)(T.Provider, { value: Ne, children: S });
}
function no(e) {
  let o = 0;
  return (t) => {
    let a,
      n = performance.now() - o;
    n < e && (a = e - n),
      setTimeout(() => {
        (o = performance.now()), t();
      }, a);
  };
}
var ne = "./store_ui_brazilian-VA3UKVDA.json";
var se = "./store_ui_bulgarian-MYUGUWAA.json";
var ie = "./store_ui_czech-ST7OGUBA.json";
var ue = "./store_ui_danish-6JO5GUAA.json";
var _e = "./store_ui_dutch-CSV5WVBA.json";
var le = "./store_ui_english-SPJ6HRAA.json";
var pe = "./store_ui_finnish-ZS5XVFDA.json";
var de = "./store_ui_french-PU7MAXBA.json";
var ce = "./store_ui_german-3YR5M4AA.json";
var me = "./store_ui_greek-IBGSGQCA.json";
var Se = "./store_ui_hungarian-ZWWGHIBA.json";
var Pe = "./store_ui_indonesian-E3VM36BA.json";
var ye = "./store_ui_italian-HDFJI7DA.json";
var Me = "./store_ui_japanese-2OYKL3AA.json";
var ve = "./store_ui_koreana-LS5CEVAA.json";
var ge = "./store_ui_latam-PWA3Y4CA.json";
var Ie = "./store_ui_norwegian-ZT6PFUCA.json";
var fe = "./store_ui_polish-TCTEHWBA.json";
var he = "./store_ui_portuguese-7EVZOKCA.json";
var Te = "./store_ui_romanian-YHYJD6AA.json";
var Ae = "./store_ui_russian-36HY4ABA.json";
var Ce = "./store_ui_sc_schinese-JENOEMAA.json";
var we = "./store_ui_schinese-525P3RDA.json";
var be = "./store_ui_spanish-6SVF3XCA.json";
var ke = "./store_ui_swedish-VIFMVXBA.json";
var Be = "./store_ui_tchinese-YZQGN2DA.json";
var Re = "./store_ui_thai-JTNTOYCA.json";
var Le = "./store_ui_turkish-7UZNSCAA.json";
var $e = "./store_ui_ukrainian-NZZGIWAA.json";
var De = "./store_ui_vietnamese-MLBCBRBA.json";
var r = {};
r.brazilian = ne;
r.bulgarian = se;
r.czech = ie;
r.danish = ue;
r.dutch = _e;
r.english = le;
r.finnish = pe;
r.french = de;
r.german = ce;
r.greek = me;
r.hungarian = Se;
r.indonesian = Pe;
r.italian = ye;
r.japanese = Me;
r.koreana = ve;
r.latam = ge;
r.norwegian = Ie;
r.polish = fe;
r.portuguese = he;
r.romanian = Te;
r.russian = Ae;
r.sc_schinese = Ce;
r.schinese = we;
r.spanish = be;
r.swedish = ke;
r.tchinese = Be;
r.thai = Re;
r.turkish = Le;
r.ukrainian = $e;
r.vietnamese = De;
async function K(e) {
  if (r[e]) return (await fetch(new URL(r[e], import.meta.url))).json();
}
var Fo = O(K),
  Dr = Fo.Localize;
export {
  D as a,
  Z as b,
  zo as c,
  X as d,
  ee as e,
  m as f,
  gt as g,
  It as h,
  ft as i,
  ht as j,
  at as k,
  nt as l,
  st as m,
  it as n,
  ut as o,
  _t as p,
  lt as q,
  pt as r,
  dt as s,
  ct as t,
  mt as u,
  Ge as v,
  qe as w,
  Ye as x,
  Xe as y,
  B as z,
  Fo as A,
  Dr as B,
};
