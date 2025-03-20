const CLSTAMP = 9621725;

import { a as U, b as W, f as Fe } from "./chunk-KHREW4X3.js";
import {
  A as x,
  B as E,
  E as G,
  G as H,
  t as L,
  w as B,
  y as j,
  z as O,
} from "./chunk-FLM2RWKS.js";
import { c as K } from "./chunk-MBG223ZF.js";
import { b as f, d, g as C, h as w, n as k } from "./chunk-V6NE4MIP.js";
import { o as z } from "./chunk-K34HL7TB.js";
import { a as Qe } from "./chunk-LTXTEHOA.js";
import { d as T } from "./chunk-GT4J6GNR.js";
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
              : (w(e, "Unknown store item id type"), "");
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
      return w(e, `Unknown EStoreItemType ${e} ${B(e)} `), "";
  }
}
var q = /^(app|package|bundle|mtx|tag|creator|hubcategory)_(\d*)$/;
function Y(e) {
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
  C(!1, `Failed to parse StoreItemID ${e}`);
}
function J(e) {
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
      w(o, `Unknown EStoreItemType ${o} ${B(o)} `);
      return;
  }
}
function Oo(e) {
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
var l = T(Qe(), 1);
var oe = T(Fe(), 1);
function X(e, o) {
  o.Body().set_context(Ke(e));
}
function Ke(e) {
  let o = new O();
  return (
    e.bUsePartnerAPI || o.set_country_code(e.country),
    o.set_language(e.language),
    e.realm != 0 && o.set_steam_realm(e.realm),
    o
  );
}
function ee(e, o) {
  e.Body().set_data_request(j.fromObject(o));
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
          let [c, m = "default_info"] = k(s, "|");
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
      let u = L.Init(E);
      X(o, u),
        ee(u, _),
        S.forEach((s) => {
          let c = Y(s);
          c && u.Body().add_ids(x.fromObject(c));
        });
      let R;
      if (o.bUsePartnerAPI) {
        let s = L.Init(U);
        s.Body().set_request(u.Body()), (R = await W.GetItems(e, s));
      } else R = await G.GetItems(e, u);
      let g = new Map();
      return (
        R.Body()
          .store_items()
          .forEach((s) => {
            g.set(V(s.item_type(), s.id()), s);
          }),
        r && ze(g, i, M, r),
        a.map((s) => {
          let [c] = k(s, "|"),
            m = g.get(c);
          return m ? m.toObject() : { ...J(c), success: 2 };
        })
      );
    },
    { maxBatchSize: 500, cache: !1, ...t },
  );
}
function ze(e, o, t, r) {
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
  return d(b(o, e));
}
function at(e) {
  let o = p(),
    t = f(),
    r = "packageid" in e && !!e.packageid,
    a;
  if (r) {
    let i = t.getQueryData(I(e, "default_info"));
    i &&
      i.included_appids?.length == 1 &&
      (a = { appid: i.included_appids[0] });
  }
  let { data: S } = d({
    queryKey: I(e, "include_included_items"),
    queryFn: async () => {
      let i = await $(o, e, "include_included_items");
      return i.included_appids?.length == 1
        ? { appid: i.included_appids[0] }
        : e;
    },
    enabled: r && !a,
  });
  return S && (a = S), d(b(o, r ? a : e));
}
function it(e) {
  let o = p();
  return d(oo(o, e));
}
function st(e) {
  let o = p();
  return d(to(o, e));
}
function _t(e) {
  let o = p();
  return d(je(o, e));
}
function ut(e) {
  let o = p();
  return d(xe(o, e));
}
function ct(e) {
  let o = p();
  return d(He(o, e));
}
function mt(e) {
  let o = p();
  return d(We(o, e));
}
function dt(e) {
  let o = p();
  return d(qe(o, e));
}
function lt(e) {
  let o = p();
  return d(Je(o, e));
}
function pt(e) {
  let o = p();
  return d(Xe(o, e));
}
function je(e, o) {
  return v(e, o, "include_assets", "assets");
}
function Oe(e, o, t) {
  y(e, o, t, "include_assets", "assets");
}
function xe(e, o) {
  return v(e, o, "include_screenshots", "screenshots");
}
function Ee(e, o, t) {
  y(e, o, t, "include_screenshots", "screenshots");
}
function Ge(e, o, t) {
  y(e, o, t, "include_assets_without_overrides", "assets_without_overrides");
}
function He(e, o) {
  return v(e, o, "include_reviews", "reviews");
}
function Ue(e, o, t) {
  y(e, o, t, "include_reviews", "reviews");
}
function We(e, o) {
  return v(e, o, "include_release", "release");
}
function Ve(e, o, t) {
  y(e, o, t, "include_release", "release");
}
function qe(e, o) {
  return v(e, o, "top_tags", "tags");
}
function Ye(e, o, t) {
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
function b(e, o) {
  return {
    queryKey: I(o, "default_info"),
    queryFn: async () => ne(await $(e, o, "default_info")),
    staleTime: 6 * 60 * 60 * 1e3,
    enabled: !!o,
  };
}
function oo(e, o) {
  return {
    ...b(e, o),
    select: (t) => t.best_purchase_option || null,
    staleTime: 10 * 60 * 1e3,
  };
}
function to(e, o) {
  return {
    ...b(e, o),
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
    t.include_assets && Oe(e, r, o),
    t.include_screenshots && Ee(e, r, o),
    t.include_assets_without_overrides && Ge(e, r, o),
    t.include_reviews && Ue(e, r, o),
    t.include_release && Ve(e, r, o),
    t.include_tag_count && t.include_tag_count > 0 && Ye(e, r, o),
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
var re = T(z(), 1),
  A = l.createContext({});
function p() {
  return l.useContext(A).dataLoader;
}
function Rt() {
  return l.useContext(A).storeBrowseContext;
}
function gt() {
  return l.useContext(A).cacheStoreItemData;
}
function It() {
  return l.useContext(A);
}
function Ct(e) {
  let {
      context: o,
      msDelayBatch: t,
      serviceTransportOverride: r,
      legacyCacheStoreItemData: a,
      children: S,
    } = e,
    M = H(),
    i = f(),
    _ = l.useCallback(
      (h, F) => {
        D(i, h.toObject(), F), a && a(h, F);
      },
      [i, a],
    ),
    u = r || M,
    { country: R, language: g, realm: s, bUsePartnerAPI: c } = o,
    m = l.useMemo(
      () => ({ country: R, language: g, realm: s, bUsePartnerAPI: c }),
      [R, g, s, c],
    ),
    P = l.useMemo(() => {
      let h = t ? ao(t) : void 0;
      return te(u, m, { cache: !1, batchScheduleFn: h }, _);
    }, [u, _, m, t]),
    $e = l.useMemo(
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
var ae = "./store_ui_brazilian-TDE7JUBA.json";
var ie = "./store_ui_bulgarian-X7U64GBA.json";
var se = "./store_ui_czech-O2THWQDA.json";
var _e = "./store_ui_danish-3PJW2LBA.json";
var ue = "./store_ui_dutch-5UBS4ODA.json";
var ce = "./store_ui_english-SPJ6HRAA.json";
var me = "./store_ui_finnish-XVGFAIBA.json";
var de = "./store_ui_french-7MWY3FBA.json";
var le = "./store_ui_german-FGF5EWAA.json";
var pe = "./store_ui_greek-3NTX6QAA.json";
var Se = "./store_ui_hungarian-KOESEQBA.json";
var Me = "./store_ui_indonesian-HFF2NECA.json";
var ye = "./store_ui_italian-TFRFNADA.json";
var Pe = "./store_ui_japanese-5MMIB5BA.json";
var ve = "./store_ui_koreana-F2OTUEAA.json";
var Re = "./store_ui_latam-BW63X7CA.json";
var ge = "./store_ui_norwegian-WAEV4ICA.json";
var Ie = "./store_ui_polish-SE3IFMBA.json";
var Ce = "./store_ui_portuguese-X43NJ7AA.json";
var Ae = "./store_ui_romanian-4K5PIXAA.json";
var he = "./store_ui_russian-LIU6G7DA.json";
var Te = "./store_ui_sc_schinese-JENOEMAA.json";
var fe = "./store_ui_schinese-GS2DD4CA.json";
var we = "./store_ui_spanish-PD363SDA.json";
var De = "./store_ui_swedish-4ME6XMBA.json";
var be = "./store_ui_tchinese-T7463PBA.json";
var ke = "./store_ui_thai-5A4E5IDA.json";
var Le = "./store_ui_turkish-R2HXUMDA.json";
var Be = "./store_ui_ukrainian-X4LKRPBA.json";
var Ne = "./store_ui_vietnamese-YTUBZ7AA.json";
var n = {};
n.brazilian = ae;
n.bulgarian = ie;
n.czech = se;
n.danish = _e;
n.dutch = ue;
n.english = ce;
n.finnish = me;
n.french = de;
n.german = le;
n.greek = pe;
n.hungarian = Se;
n.indonesian = Me;
n.italian = ye;
n.japanese = Pe;
n.koreana = ve;
n.latam = Re;
n.norwegian = ge;
n.polish = Ie;
n.portuguese = Ce;
n.romanian = Ae;
n.russian = he;
n.sc_schinese = Te;
n.schinese = fe;
n.spanish = we;
n.swedish = De;
n.tchinese = be;
n.thai = ke;
n.turkish = Le;
n.ukrainian = Be;
n.vietnamese = Ne;
async function Q(e) {
  if (n[e]) return (await fetch(new URL(n[e], import.meta.url))).json();
}
var Fo = K(Q),
  $n = Fo.Localize;
export {
  N as a,
  Z as b,
  Oo as c,
  X as d,
  ee as e,
  p as f,
  Rt as g,
  gt as h,
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
  dt as s,
  lt as t,
  pt as u,
  je as v,
  qe as w,
  Je as x,
  Xe as y,
  b as z,
  Fo as A,
  $n as B,
};
