const CLSTAMP = 9580955;

import { a as W, b as q, f as Oe } from "./chunk-GC7PWKLS.js";
import {
  A as j,
  B as Q,
  E as U,
  G as E,
  t as k,
  w as R,
  y as G,
  z,
} from "./chunk-YRV5L4Y2.js";
import { c as x } from "./chunk-HL5J6CF5.js";
import { b as v, d as c, g as P, h as w, o as $ } from "./chunk-FB3EMUNJ.js";
import { m as F } from "./chunk-P7UTOOWD.js";
import { a as Ke } from "./chunk-2M6UGZTQ.js";
import { d as b } from "./chunk-HHQ2KM4L.js";
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
              : (w(e, "Unknown store item id type"), "");
}
function H(e, t) {
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
      return w(e, `Unknown EStoreItemType ${e} ${R(e)} `), "";
  }
}
var V = /^(app|package|bundle|mtx|tag|creator|hubcategory)_(\d*)$/;
function J(e) {
  let t = e.match(V);
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
  P(!1, `Failed to parse StoreItemID ${e}`);
}
function Z(e) {
  let t = e.match(V);
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
function Y(e) {
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
      w(t, `Unknown EStoreItemType ${t} ${R(t)} `);
      return;
  }
}
function Gt(e) {
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
              : (P(!1, `Invalid itemid: ${JSON.stringify(e.toObject())}`),
                { appid: 0 });
}
var p = b(Ke(), 1);
var te = b(Oe(), 1);
function X(e, t) {
  t.Body().set_context(xe(e));
}
function xe(e) {
  let t = new z();
  return (
    e.bUsePartnerAPI || t.set_country_code(e.country),
    t.set_language(e.language),
    e.realm != 0 && t.set_steam_realm(e.realm),
    t
  );
}
function ee(e, t) {
  e.Body().set_data_request(G.fromObject(t));
}
function re(e, t, r, a) {
  return new te.default(
    async (n) => {
      let S = new Set(),
        y = new Map(),
        s = new Set();
      s.add("default_info");
      let u = {};
      if (
        (n.forEach((i) => {
          let [_, d = "default_info"] = $(i, "|");
          S.add(_),
            s.has(d) ||
              (d == "top_tags"
                ? (u.include_tag_count = 10)
                : d != "default_info" && (u[d] = !0),
              s.add(d));
          let g = y.get(_);
          g || ((g = new Set()), y.set(_, g)), g.add(d);
        }),
        u.include_included_items)
      ) {
        let { include_included_items: i, ..._ } = u;
        u.included_item_data_request = _;
      }
      let l = k.Init(Q);
      X(t, l),
        ee(l, u),
        S.forEach((i) => {
          let _ = J(i);
          _ && l.Body().add_ids(j.fromObject(_));
        });
      let h;
      if (t.bUsePartnerAPI) {
        let i = k.Init(W);
        i.Body().set_request(l.Body()), (h = await q.GetItems(e, i));
      } else h = await U.GetItems(e, l);
      let A = new Map();
      return (
        h
          .Body()
          .store_items()
          .forEach((i) => {
            A.set(H(i.item_type(), i.id()), i);
          }),
        a && Fe(A, s, y, a),
        n.map((i) => {
          let [_] = $(i, "|"),
            d = A.get(_);
          return d ? d.toObject() : { ...Z(_), success: 2 };
        })
      );
    },
    { maxBatchSize: 500, cache: !1, ...r },
  );
}
function Fe(e, t, r, a) {
  e.forEach((n, S) => {
    let y = r.get(S);
    if ((P(y, `Missing request data for ${S}`), !y)) return;
    let s = !1,
      u = {};
    t.forEach((l) => {
      y.has(l) ||
        ((s = !0),
        l == "top_tags"
          ? (u.include_tag_count = 10)
          : l && l != "default_info" && (u[l] = !0));
    }),
      s && a(n, u);
  });
}
function or(e) {
  let t = m();
  return c(L(t, e));
}
function ar(e) {
  let t = m(),
    r = v(),
    a = "packageid" in e && !!e.packageid,
    n;
  if (a) {
    let s = r.getQueryData(M(e, "default_info"));
    s &&
      s.included_appids?.length == 1 &&
      (n = { appid: s.included_appids[0] });
  }
  let { data: S } = c({
    queryKey: M(e, "include_included_items"),
    queryFn: async () => {
      let s = await N(t, e, "include_included_items");
      return s.included_appids?.length == 1
        ? { appid: s.included_appids[0] }
        : e;
    },
    enabled: a && !n,
  });
  return S && (n = S), c(L(t, a ? n : e));
}
function nr(e) {
  let t = m();
  return c(tt(t, e));
}
function sr(e) {
  let t = m();
  return c(rt(t, e));
}
function ir(e) {
  let t = m();
  return c(Ge(t, e));
}
function ur(e) {
  let t = m();
  return c(je(t, e));
}
function lr(e) {
  let t = m();
  return c(Ee(t, e));
}
function _r(e) {
  let t = m();
  return c(qe(t, e));
}
function dr(e) {
  let t = m();
  return c(Ve(t, e));
}
function cr(e) {
  let t = m();
  return c(Ze(t, e));
}
function pr(e) {
  let t = m();
  return c(Xe(t, e));
}
function Ge(e, t) {
  return f(e, t, "include_assets", "assets");
}
function ze(e, t, r) {
  I(e, t, r, "include_assets", "assets");
}
function je(e, t) {
  return f(e, t, "include_screenshots", "screenshots");
}
function Qe(e, t, r) {
  I(e, t, r, "include_screenshots", "screenshots");
}
function Ue(e, t, r) {
  I(e, t, r, "include_assets_without_overrides", "assets_without_overrides");
}
function Ee(e, t) {
  return f(e, t, "include_reviews", "reviews");
}
function We(e, t, r) {
  I(e, t, r, "include_reviews", "reviews");
}
function qe(e, t) {
  return f(e, t, "include_release", "release");
}
function He(e, t, r) {
  I(e, t, r, "include_release", "release");
}
function Ve(e, t) {
  return f(e, t, "top_tags", "tags");
}
function Je(e, t, r) {
  I(e, t, r, "top_tags", "tags");
}
function Ze(e, t) {
  return f(e, t, "include_platforms", "platforms");
}
function Ye(e, t, r) {
  I(e, t, r, "include_platforms", "platforms");
}
function Xe(e, t) {
  return f(e, t, "apply_user_filters", "user_filter_failure");
}
function et(e, t, r) {
  I(e, t, r, "apply_user_filters", "user_filter_failure");
}
function f(e, t, r, a) {
  return {
    queryKey: M(t, r),
    queryFn: async () => (await N(e, t, r))[a] || null,
    staleTime: 6 * 60 * 60 * 1e3,
    enabled: !!t,
  };
}
function I(e, t, r, a, n) {
  e.setQueryData(M(t, a), r[n]);
}
function L(e, t) {
  return {
    queryKey: M(t, "default_info"),
    queryFn: async () => oe(await N(e, t, "default_info")),
    staleTime: 6 * 60 * 60 * 1e3,
    enabled: !!t,
  };
}
function tt(e, t) {
  return {
    ...L(e, t),
    select: (r) => r.best_purchase_option || null,
    staleTime: 10 * 60 * 1e3,
  };
}
function rt(e, t) {
  return {
    ...L(e, t),
    select: (r) => r.self_purchase_option || r.best_purchase_option || null,
    staleTime: 10 * 60 * 1e3,
  };
}
function M(e, t) {
  return ["StoreItem", e && D(e), t];
}
function B(e, t, r) {
  let a = Y(t);
  a &&
    (at(e, a, t),
    r.include_assets && ze(e, a, t),
    r.include_screenshots && Qe(e, a, t),
    r.include_assets_without_overrides && Ue(e, a, t),
    r.include_reviews && We(e, a, t),
    r.include_release && He(e, a, t),
    r.include_tag_count && r.include_tag_count > 0 && Je(e, a, t),
    r.include_platforms && Ye(e, a, t),
    r.apply_user_filters && et(e, a, t),
    r.include_included_items &&
      r.included_item_data_request &&
      (t.included_items?.included_apps?.forEach((n) =>
        B(e, n, r.included_item_data_request),
      ),
      t.included_items?.included_packages?.forEach((n) =>
        B(e, n, r.included_item_data_request),
      )));
}
var ot = [
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
function oe(e) {
  let t = { ...e };
  for (let r of ot) delete t[r];
  return t;
}
function at(e, t, r) {
  e.setQueryData(M(t, "default_info"), oe(r));
}
async function N(e, t, r) {
  return await e.load(`${D(t)}|${r}`);
}
var ae = b(F(), 1),
  T = p.createContext({});
function m() {
  return p.useContext(T).dataLoader;
}
function fr() {
  return p.useContext(T).storeBrowseContext;
}
function hr() {
  return p.useContext(T).cacheStoreItemData;
}
function Ar() {
  return p.useContext(T);
}
function Mr(e) {
  let {
      context: t,
      msDelayBatch: r,
      serviceTransportOverride: a,
      legacyCacheStoreItemData: n,
      children: S,
    } = e,
    y = E(),
    s = v(),
    u = p.useCallback(
      (C, O) => {
        B(s, C.toObject(), O), n && n(C, O);
      },
      [s, n],
    ),
    l = a || y,
    { country: h, language: A, realm: i, bUsePartnerAPI: _ } = t,
    d = p.useMemo(
      () => ({ country: h, language: A, realm: i, bUsePartnerAPI: _ }),
      [h, A, i, _],
    ),
    g = p.useMemo(() => {
      let C = r ? nt(r) : void 0;
      return re(l, d, { cache: !1, batchScheduleFn: C }, u);
    }, [l, u, d, r]),
    Ne = p.useMemo(
      () => ({ dataLoader: g, storeBrowseContext: d, cacheStoreItemData: u }),
      [g, d, u],
    );
  return (0, ae.jsx)(T.Provider, { value: Ne, children: S });
}
function nt(e) {
  let t = 0;
  return (r) => {
    let a,
      n = performance.now() - t;
    n < e && (a = e - n),
      setTimeout(() => {
        (t = performance.now()), r();
      }, a);
  };
}
var ne = "./store_ui_brazilian-RQXYWPCA.json";
var se = "./store_ui_bulgarian-COJ3BKCA.json";
var ie = "./store_ui_czech-3WTCLXCA.json";
var ue = "./store_ui_danish-CTFGMJBA.json";
var le = "./store_ui_dutch-QW5KL3CA.json";
var _e = "./store_ui_english-5TFUR7DA.json";
var de = "./store_ui_finnish-AVNPQ4CA.json";
var ce = "./store_ui_french-T5KB3OBA.json";
var pe = "./store_ui_german-FIBJ5DCA.json";
var me = "./store_ui_greek-4R6WXAAA.json";
var Se = "./store_ui_hungarian-CHIH2ZAA.json";
var ye = "./store_ui_indonesian-GAYJANAA.json";
var Ie = "./store_ui_italian-F2X2HNBA.json";
var ge = "./store_ui_japanese-TWOXJICA.json";
var fe = "./store_ui_koreana-7XA4W4BA.json";
var he = "./store_ui_latam-YLOKRACA.json";
var Ae = "./store_ui_norwegian-PUFYZGBA.json";
var Me = "./store_ui_polish-3SJF5RCA.json";
var Pe = "./store_ui_portuguese-23R6IYDA.json";
var Te = "./store_ui_romanian-YN5VPWBA.json";
var Ce = "./store_ui_russian-SNYLK4BA.json";
var be = "./store_ui_sc_schinese-JENOEMAA.json";
var ve = "./store_ui_schinese-YC6UXWBA.json";
var we = "./store_ui_spanish-TXQGEWCA.json";
var Be = "./store_ui_swedish-7O723MBA.json";
var Le = "./store_ui_tchinese-DZWVSXAA.json";
var $e = "./store_ui_thai-JQE3WRCA.json";
var ke = "./store_ui_turkish-5X5YEXAA.json";
var Re = "./store_ui_ukrainian-46APJPDA.json";
var De = "./store_ui_vietnamese-5BII3YCA.json";
var o = {};
o.brazilian = ne;
o.bulgarian = se;
o.czech = ie;
o.danish = ue;
o.dutch = le;
o.english = _e;
o.finnish = de;
o.french = ce;
o.german = pe;
o.greek = me;
o.hungarian = Se;
o.indonesian = ye;
o.italian = Ie;
o.japanese = ge;
o.koreana = fe;
o.latam = he;
o.norwegian = Ae;
o.polish = Me;
o.portuguese = Pe;
o.romanian = Te;
o.russian = Ce;
o.sc_schinese = be;
o.schinese = ve;
o.spanish = we;
o.swedish = Be;
o.tchinese = Le;
o.thai = $e;
o.turkish = ke;
o.ukrainian = Re;
o.vietnamese = De;
async function K(e) {
  if (o[e]) return (await fetch(new URL(o[e], import.meta.url))).json();
}
var Kt = x(K),
  Do = Kt.Localize;
export {
  D as a,
  Y as b,
  Gt as c,
  X as d,
  ee as e,
  m as f,
  fr as g,
  hr as h,
  Ar as i,
  Mr as j,
  or as k,
  ar as l,
  nr as m,
  sr as n,
  ir as o,
  ur as p,
  lr as q,
  _r as r,
  dr as s,
  cr as t,
  pr as u,
  Ge as v,
  Ve as w,
  Ze as x,
  Xe as y,
  L as z,
  Kt as A,
  Do as B,
};
