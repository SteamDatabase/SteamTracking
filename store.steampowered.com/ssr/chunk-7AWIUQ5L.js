const CLSTAMP = 9643551;

import { a as H, b as U, f as Qe } from "./chunk-ZNOWL6P7.js";
import {
  A as z,
  B as V,
  F as j,
  H as x,
  t as L,
  w as B,
  y as E,
  z as K,
} from "./chunk-HGJJYMFS.js";
import { d as G } from "./chunk-5B3GZGH4.js";
import { b as w, d as l, g as C, h as f, n as b } from "./chunk-RSFMXIKC.js";
import { o as O } from "./chunk-5DRJZ3VL.js";
import { a as Fe } from "./chunk-65YUODX3.js";
import { d as h } from "./chunk-6W5PXMM2.js";
function N(e) {
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
              : (f(e, "Unknown store item id type"), "");
}
function W(e, o) {
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
      return f(e, `Unknown EStoreItemType ${e} ${B(e)} `), "";
  }
}
var Y = /^(app|package|bundle|mtx|tag|creator|hubcategory)_(\d*)$/;
function q(e) {
  let o = e.match(Y);
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
  C(!1, `Failed to parse StoreItemID ${e}`);
}
function J(e) {
  let o = e.match(Y);
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
      f(o, `Unknown EStoreItemType ${o} ${B(o)} `);
      return;
  }
}
function Ko(e) {
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
              : (C(!1, `Invalid itemid: ${JSON.stringify(e.toObject())}`),
                { appid: 0 });
}
var d = h(Fe(), 1);
var oe = h(Qe(), 1);
function X(e, o) {
  o.Body().set_context(Ge(e));
}
function Ge(e) {
  let o = new K();
  return (
    e.bUsePartnerAPI || o.set_country_code(e.country),
    o.set_language(e.language),
    e.realm != 0 && o.set_steam_realm(e.realm),
    o
  );
}
function ee(e, o) {
  e.Body().set_data_request(E.fromObject(o));
}
function te(e, o, t, r) {
  return new oe.default(
    async (a) => {
      let S = new Set(),
        M = new Map(),
        i = new Set();
      i.add("default_info");
      let _ = {};
      if (
        (a.forEach((s) => {
          let [c, m = "default_info"] = b(s, "|");
          S.add(c),
            i.has(m) ||
              (m == "top_tags"
                ? (_.include_tag_count = 10)
                : m != "default_info" && (_[m] = !0),
              i.add(m));
          let P = M.get(c);
          P || ((P = new Set()), M.set(c, P)), P.add(m);
        }),
        _.include_included_items)
      ) {
        let { include_included_items: s, ...c } = _;
        _.included_item_data_request = c;
      }
      let u = L.Init(V);
      X(o, u),
        ee(u, _),
        S.forEach((s) => {
          let c = q(s);
          c && u.Body().add_ids(z.fromObject(c));
        });
      let g;
      if (o.bUsePartnerAPI) {
        let s = L.Init(H);
        s.Body().set_request(u.Body()), (g = await U.GetItems(e, s));
      } else g = await j.GetItems(e, u);
      let R = new Map();
      return (
        g
          .Body()
          .store_items()
          .forEach((s) => {
            R.set(W(s.item_type(), s.id()), s);
          }),
        r && Oe(R, i, M, r),
        a.map((s) => {
          let [c] = b(s, "|"),
            m = R.get(c);
          return m ? m.toObject() : { ...J(c), success: 2 };
        })
      );
    },
    { maxBatchSize: 500, cache: !1, ...t },
  );
}
function Oe(e, o, t, r) {
  e.forEach((a, S) => {
    let M = t.get(S);
    if ((C(M, `Missing request data for ${S}`), !M)) return;
    let i = !1,
      _ = {};
    o.forEach((u) => {
      M.has(u) ||
        ((i = !0),
        u == "top_tags"
          ? (_.include_tag_count = 10)
          : u && u != "default_info" && (_[u] = !0));
    }),
      i && r(a, _);
  });
}
function rt(e) {
  let o = p();
  return l(k(o, e));
}
function at(e) {
  let o = p(),
    t = w(),
    r = "packageid" in e && !!e.packageid,
    a;
  if (r) {
    let i = t.getQueryData(I(e, "default_info"));
    i &&
      i.included_appids?.length == 1 &&
      (a = { appid: i.included_appids[0] });
  }
  let { data: S } = l({
    queryKey: I(e, "include_included_items"),
    queryFn: async () => {
      let i = await $(o, e, "include_included_items");
      return i.included_appids?.length == 1
        ? { appid: i.included_appids[0] }
        : e;
    },
    enabled: r && !a,
  });
  return S && (a = S), l(k(o, r ? a : e));
}
function it(e) {
  let o = p();
  return l(oo(o, e));
}
function st(e) {
  let o = p();
  return l(to(o, e));
}
function _t(e) {
  let o = p();
  return l(Ee(o, e));
}
function ut(e) {
  let o = p();
  return l(ze(o, e));
}
function ct(e) {
  let o = p();
  return l(xe(o, e));
}
function mt(e) {
  let o = p();
  return l(Ue(o, e));
}
function lt(e) {
  let o = p();
  return l(Ye(o, e));
}
function dt(e) {
  let o = p();
  return l(Je(o, e));
}
function pt(e) {
  let o = p();
  return l(Xe(o, e));
}
function Ee(e, o) {
  return v(e, o, "include_assets", "assets");
}
function Ke(e, o, t) {
  y(e, o, t, "include_assets", "assets");
}
function ze(e, o) {
  return v(e, o, "include_screenshots", "screenshots");
}
function Ve(e, o, t) {
  y(e, o, t, "include_screenshots", "screenshots");
}
function je(e, o, t) {
  y(e, o, t, "include_assets_without_overrides", "assets_without_overrides");
}
function xe(e, o) {
  return v(e, o, "include_reviews", "reviews");
}
function He(e, o, t) {
  y(e, o, t, "include_reviews", "reviews");
}
function Ue(e, o) {
  return v(e, o, "include_release", "release");
}
function We(e, o, t) {
  y(e, o, t, "include_release", "release");
}
function Ye(e, o) {
  return v(e, o, "top_tags", "tags");
}
function qe(e, o, t) {
  y(e, o, t, "top_tags", "tags");
}
function Je(e, o) {
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
function v(e, o, t, r) {
  return {
    queryKey: I(o, t),
    queryFn: async () => (await $(e, o, t))[r] || null,
    staleTime: 6 * 60 * 60 * 1e3,
    enabled: !!o,
  };
}
function y(e, o, t, r, a) {
  e.setQueryData(I(o, r), t[a]);
}
function k(e, o) {
  return {
    queryKey: I(o, "default_info"),
    queryFn: async () => ne(await $(e, o, "default_info")),
    staleTime: 6 * 60 * 60 * 1e3,
    enabled: !!o,
  };
}
function oo(e, o) {
  return {
    ...k(e, o),
    select: (t) => t.best_purchase_option || null,
    staleTime: 10 * 60 * 1e3,
  };
}
function to(e, o) {
  return {
    ...k(e, o),
    select: (t) => t.self_purchase_option || t.best_purchase_option || null,
    staleTime: 10 * 60 * 1e3,
  };
}
function I(e, o) {
  return ["StoreItem", e && N(e), o];
}
function D(e, o, t) {
  let r = Z(o);
  r &&
    (ro(e, r, o),
    t.include_assets && Ke(e, r, o),
    t.include_screenshots && Ve(e, r, o),
    t.include_assets_without_overrides && je(e, r, o),
    t.include_reviews && He(e, r, o),
    t.include_release && We(e, r, o),
    t.include_tag_count && t.include_tag_count > 0 && qe(e, r, o),
    t.include_platforms && Ze(e, r, o),
    t.apply_user_filters && eo(e, r, o),
    t.include_included_items &&
      t.included_item_data_request &&
      (o.included_items?.included_apps?.forEach((a) =>
        D(e, a, t.included_item_data_request),
      ),
      o.included_items?.included_packages?.forEach((a) =>
        D(e, a, t.included_item_data_request),
      )));
}
var no = [
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
function ne(e) {
  let o = { ...e };
  for (let t of no) delete o[t];
  return o;
}
function ro(e, o, t) {
  e.setQueryData(I(o, "default_info"), ne(t));
}
async function $(e, o, t) {
  return await e.load(`${N(o)}|${t}`);
}
var re = h(O(), 1),
  A = d.createContext({});
function p() {
  return d.useContext(A).dataLoader;
}
function gt() {
  return d.useContext(A).storeBrowseContext;
}
function Rt() {
  return d.useContext(A).cacheStoreItemData;
}
function It() {
  return d.useContext(A);
}
function Ct(e) {
  let {
      context: o,
      msDelayBatch: t,
      serviceTransportOverride: r,
      legacyCacheStoreItemData: a,
      children: S,
    } = e,
    M = x(),
    i = w(),
    _ = d.useCallback(
      (T, Q) => {
        D(i, T.toObject(), Q), a && a(T, Q);
      },
      [i, a],
    ),
    u = r || M,
    { country: g, language: R, realm: s, bUsePartnerAPI: c } = o,
    m = d.useMemo(
      () => ({ country: g, language: R, realm: s, bUsePartnerAPI: c }),
      [g, R, s, c],
    ),
    P = d.useMemo(() => {
      let T = t ? ao(t) : void 0;
      return te(u, m, { cache: !1, batchScheduleFn: T }, _);
    }, [u, _, m, t]),
    $e = d.useMemo(
      () => ({ dataLoader: P, storeBrowseContext: m, cacheStoreItemData: _ }),
      [P, m, _],
    );
  return (0, re.jsx)(A.Provider, { value: $e, children: S });
}
function ao(e) {
  let o = 0;
  return (t) => {
    let r,
      a = performance.now() - o;
    a < e && (r = e - a),
      setTimeout(() => {
        (o = performance.now()), t();
      }, r);
  };
}
var ae = "./store_ui_brazilian-65IF46BA.json";
var ie = "./store_ui_bulgarian-IZNKKLCA.json";
var se = "./store_ui_czech-K64M7FAA.json";
var _e = "./store_ui_danish-AVVXESDA.json";
var ue = "./store_ui_dutch-L7VO5WDA.json";
var ce = "./store_ui_english-5IPHFJCA.json";
var me = "./store_ui_finnish-DFAOJWAA.json";
var le = "./store_ui_french-DAWEAXDA.json";
var de = "./store_ui_german-O4PY74AA.json";
var pe = "./store_ui_greek-SIKM4UDA.json";
var Se = "./store_ui_hungarian-EM24PTDA.json";
var Me = "./store_ui_indonesian-UTY2W3AA.json";
var ye = "./store_ui_italian-QSEXLJDA.json";
var Pe = "./store_ui_japanese-DJ2UB5DA.json";
var ve = "./store_ui_koreana-XOEYFVDA.json";
var ge = "./store_ui_latam-TVLWOKAA.json";
var Re = "./store_ui_norwegian-4F57KMCA.json";
var Ie = "./store_ui_polish-4H2PB4AA.json";
var Ce = "./store_ui_portuguese-JXXKK2BA.json";
var Ae = "./store_ui_romanian-WHMD77AA.json";
var Te = "./store_ui_russian-SJFNHRBA.json";
var he = "./store_ui_sc_schinese-JENOEMAA.json";
var we = "./store_ui_schinese-ORYIKWBA.json";
var fe = "./store_ui_spanish-QMAP2EDA.json";
var De = "./store_ui_swedish-RJE2XIAA.json";
var ke = "./store_ui_tchinese-VDLO7YAA.json";
var be = "./store_ui_thai-GI7JYCDA.json";
var Le = "./store_ui_turkish-IH7U47AA.json";
var Be = "./store_ui_ukrainian-PIFQGBBA.json";
var Ne = "./store_ui_vietnamese-OTTQA2BA.json";
var n = {};
n.brazilian = ae;
n.bulgarian = ie;
n.czech = se;
n.danish = _e;
n.dutch = ue;
n.english = ce;
n.finnish = me;
n.french = le;
n.german = de;
n.greek = pe;
n.hungarian = Se;
n.indonesian = Me;
n.italian = ye;
n.japanese = Pe;
n.koreana = ve;
n.latam = ge;
n.norwegian = Re;
n.polish = Ie;
n.portuguese = Ce;
n.romanian = Ae;
n.russian = Te;
n.sc_schinese = he;
n.schinese = we;
n.spanish = fe;
n.swedish = De;
n.tchinese = ke;
n.thai = be;
n.turkish = Le;
n.ukrainian = Be;
n.vietnamese = Ne;
async function F(e) {
  if (n[e]) return (await fetch(new URL(n[e], import.meta.url))).json();
}
var Qo = G(F),
  $n = Qo.Localize;
export {
  N as a,
  Z as b,
  Ko as c,
  X as d,
  ee as e,
  p as f,
  gt as g,
  Rt as h,
  It as i,
  Ct as j,
  rt as k,
  at as l,
  it as m,
  st as n,
  _t as o,
  ut as p,
  ct as q,
  mt as r,
  lt as s,
  dt as t,
  pt as u,
  Ee as v,
  Ye as w,
  Je as x,
  Xe as y,
  k as z,
  Qo as A,
  $n as B,
};
