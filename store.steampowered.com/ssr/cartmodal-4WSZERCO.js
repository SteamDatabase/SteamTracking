const CLSTAMP = 9404702;

import { a as fe } from "./chunk-6DNTVXAL.js";
import { a as T, c as se } from "./chunk-GWLCY2Y3.js";
import { a as Be, b as De } from "./chunk-2MZWWYWB.js";
import { a as ze, c as Me } from "./chunk-TVY23UQA.js";
import "./chunk-QQE2COPB.js";
import {
  E as R,
  j as ne,
  l as re,
  m as oe,
  n as ue,
  p as ce,
  q as L,
  r as le,
  s as de,
  t as pe,
  u as me,
  v as ge,
  w as _e,
  x as G,
  y as $e,
} from "./chunk-J4NOIRTM.js";
import { b as te, c as ie } from "./chunk-BW4IQSZR.js";
import "./chunk-FGNB7LVI.js";
import "./chunk-JTQ23IVZ.js";
import "./chunk-NWKSOWUG.js";
import {
  b as z,
  d as Ce,
  e as ke,
  h as be,
  j as he,
  k as ye,
  m as Se,
  n as N,
  q as ve,
  s as Ie,
} from "./chunk-A7G6TQMU.js";
import "./chunk-CQUWEG4E.js";
import { G as P, t as f } from "./chunk-IQCMH73P.js";
import "./chunk-NBNPDIGP.js";
import { f as J } from "./chunk-2PP642P2.js";
import { U as ee, V as ae, ba as $ } from "./chunk-5RKSSVBX.js";
import { a as X } from "./chunk-BBX3NATB.js";
import "./chunk-JH4HAEMY.js";
import "./chunk-TUZ5RHCF.js";
import { b as V } from "./chunk-RLLTSIRI.js";
import { b as U, d as K, f as Q, h as Z } from "./chunk-VVTCMENQ.js";
import {
  g as B,
  h as H,
  i as Y,
  j as D,
  l as W,
  m as h,
} from "./chunk-M7JZUOB4.js";
import { d as _ } from "./chunk-GK2ITS7J.js";
var j = _(W());
var Pe = "./shoppingcart_brazilian-NR5R5MAA.json";
var Le = "./shoppingcart_bulgarian-PAF7N7BA.json";
var Ge = "./shoppingcart_czech-ED6ZHEBA.json";
var Ae = "./shoppingcart_danish-RBLT76AA.json";
var Ee = "./shoppingcart_dutch-P6YLZ4DA.json";
var we = "./shoppingcart_english-SSADHMCA.json";
var je = "./shoppingcart_finnish-RMDLPABA.json";
var xe = "./shoppingcart_french-QR75KFBA.json";
var We = "./shoppingcart_german-4ZR5OJCA.json";
var Te = "./shoppingcart_greek-JWJ6KUDA.json";
var Re = "./shoppingcart_hungarian-YKPPK6DA.json";
var Ne = "./shoppingcart_indonesian-3A6RPWDA.json";
var Oe = "./shoppingcart_italian-TDKYUQAA.json";
var Fe = "./shoppingcart_japanese-5PG26UCA.json";
var qe = "./shoppingcart_koreana-5BTRO5AA.json";
var He = "./shoppingcart_latam-T6CABLBA.json";
var Ye = "./shoppingcart_norwegian-JOCQX5CA.json";
var Ve = "./shoppingcart_polish-AZOHYLAA.json";
var Ue = "./shoppingcart_portuguese-V5XF7VBA.json";
var Ke = "./shoppingcart_romanian-OWGHLYDA.json";
var Qe = "./shoppingcart_russian-CMCLUMDA.json";
var Ze = "./shoppingcart_sc_schinese-JENOEMAA.json";
var Je = "./shoppingcart_schinese-E35Z6GAA.json";
var Xe = "./shoppingcart_spanish-LKYEWQBA.json";
var ea = "./shoppingcart_swedish-DCHM3NDA.json";
var aa = "./shoppingcart_tchinese-VSXQTLCA.json";
var ta = "./shoppingcart_thai-CTWBGVAA.json";
var ia = "./shoppingcart_turkish-2642JCBA.json";
var sa = "./shoppingcart_ukrainian-AKHCUBBA.json";
var na = "./shoppingcart_vietnamese-MNTRUADA.json";
var l = {};
l.brazilian = Pe;
l.bulgarian = Le;
l.czech = Ge;
l.danish = Ae;
l.dutch = Ee;
l.english = we;
l.finnish = je;
l.french = xe;
l.german = We;
l.greek = Te;
l.hungarian = Re;
l.indonesian = Ne;
l.italian = Oe;
l.japanese = Fe;
l.koreana = qe;
l.latam = He;
l.norwegian = Ye;
l.polish = Ve;
l.portuguese = Ue;
l.romanian = Ke;
l.russian = Qe;
l.sc_schinese = Ze;
l.schinese = Je;
l.spanish = Xe;
l.swedish = ea;
l.tchinese = aa;
l.thai = ta;
l.turkish = ia;
l.ukrainian = sa;
l.vietnamese = na;
async function O(a) {
  if (l[a]) return (await fetch(new URL(l[a], import.meta.url))).json();
}
var A = _(W(), 1),
  g = V(O);
async function et() {
  return Promise.all([g.Ready()]);
}
function ra() {
  let [a, e] = (0, A.useState)(!1);
  return (
    (0, A.useEffect)(() => {
      et().then(() => e(!0));
    }, []),
    a
  );
}
function oa(a, e) {
  let i = P(),
    n = G(),
    { storeBrowseContext: t, cacheStoreItemData: c } = be();
  return K({
    queryKey: me(n, a),
    queryFn: async () => at(i, n, t, a, e, c),
    staleTime: 1 / 0,
    enabled: H.logged_in || !L(n),
  });
}
async function at(a, e, i, n, t, c) {
  let d = f.Init(ue);
  le(e) || de(e)
    ? (d.Body().set_gidshoppingcart(e.gid),
      n && d.Body().set_gift_info(ne.fromObject(n)))
    : pe(e) && d.Body().set_gidreplayoftransid(e.gid),
    Ce(i, d),
    t && ke(d, t);
  let p = await ce.ValidateCart(a, d);
  if (
    (p.BSuccess() ||
      console.warn(`Failed to validate shopping cart: ${p.GetEResult()}`),
    t && c)
  )
    for (let m of p.Body().cart_items()) c(m.store_item(), t);
  return p.Body().toObject();
}
var I = _(X(), 1);
async function tt(a, e, i) {
  if (L(e)) {
    let n = f.Init(re);
    n.Body().set_line_item_id(i);
    let t = await oe.RemoveItemFromCart(a, n);
    return R(), t.Body().toObject();
  } else {
    let n = f.Init(te);
    n.Body().set_gidlineitems([i]), n.Body().set_gidshoppingcart(e.gid);
    let t = await ie.RemoveLineItems(a, n);
    return R(), t.Body().toObject();
  }
}
function E(a) {
  let e = P(),
    i = U(),
    n = G();
  return Q({
    mutationFn: async () => await tt(e, n, a),
    onSuccess: (t) => {
      "cart" in t ? _e(i, n, t.cart) : ge(i, n);
    },
  });
}
var o = {
  CartCard: "VrgkC3o-37o-",
  LineItemsCtn: "-UEubYvNbjs-",
  StoreSalePriceBox: "VqfPgzKbKo8-",
  StoreSaleDiscountedPriceCtn: "NjVV279yLPo-",
  LineItemWrapper: "YXP1N1r8Yuk-",
  LineItemCapsule: "Ibu28lnlXMg-",
  HeaderImg: "qtoywphCEcY-",
  LineItemPlaceholder: "_2T5opY0yZ4k-",
  AddRemoveLinks: "vAYxA3qzCNI-",
  RemoveLineItem: "hnK4UxcT4b4-",
  AddLineItem: "jdUT7FhX-Gc-",
  LineItemRightCol: "jZ2p41OF6gw-",
  InnerLineItemCtn: "EZOUfdY7phY-",
  LineItemDetailsCtn: "_91QY-wpj0-M-",
  LineItemCol: "F0BHC6-tZX8-",
  LineItemDetailsRow: "_0v52-qZWRZU-",
  LineItemDetailsRowTop: "RIiPxPHZe1c-",
  LineItemSpaceBetween: "jOE56KfWWqY-",
  LineItemTitle: "teMQBj-kyzo-",
  LineItemPricingOptions: "_4-rzwtAgYQE-",
  LineItemDropDown: "-synzJ1Zd2Q-",
  PlatformIcons: "phhNgR2v2Sg-",
  AddLineItemCtn: "PA5STGmwHNM-",
  AddLineItemIcon: "jcz28sPr-jc-",
  PendingLineItem: "PWKZV94Ispo-",
  FlexRow: "H-TCQ8KHyGQ-",
  PriceWidget: "Fay8SiV2bKc-",
  Warning: "P3o2VBbZ-m4-",
  LineItemNoticeAppsCtn: "hIOxCRxNMJ4-",
  LoadingThrobber: "XogolNjZckk-",
  DropDownThin: "z7-qnWICSkI-",
  DropDownOptionsCtnThin: "HS2sVdtSGFk-",
  DropDownOptionItem: "aDMnq8Z6asE-",
  WhiteText: "_6HmnRMrwy-k-",
  ErrorLineItem: "_2WF60OAsaoI-",
  Left: "ufLHW9-dmbs-",
  Error: "XeISZPK9LTA-",
  Muted: "_7XXRjlk2Ftg-",
  GiftForNotice: "_4XNRvhrlaoA-",
  Name: "_8CUOKybGlWw-",
  RemoveButton: "qH7XB3O5uRI-",
};
var F = _(X(), 1);
var y = _(W());
var r = {
  LoadingWrapper: "_4OUX3El-ctM-",
  Static: "S-6ZVNlseRA-",
  bottomCircle: "ytW2ZjHd1W0-",
  noString: "qzZp4zRi0TI-",
  Throbber: "SKGqYgO0Pnw-",
  throbber_small: "tpSzbsPHbkE-",
  throbber_medium: "V1kW7-BE-4M-",
  throbber_large: "hvWBlEgWRXM-",
  throbber_center_wrapper: "_8ZRONRXnjyw-",
  ThrobberText: "JAWUR2YLJRk-",
  blur: "pcgb2bwrvuU-",
  ThrobberRoundLoop: "_0DHNUQDQJ8E-",
  roundOuterOutline: "BVlqlU3-Ipc-",
  roundOuter: "YGYjrKrUpH8-",
  roundFill: "Qweqhy1p3NA-",
  ThrobberFillLoop: "mSFAQbdPBQw-",
  topCircle: "_0pBaAtJ9R60-",
  circlePulse: "q8K5uxuAz20-",
  ThrobberTopCircleLoop: "sGOn6YG082s-",
  ThrobberBottomCircleLoop: "v7P-CuB1Oyc-",
  roundThrobber15: "E31AjDnB9mA-",
  roundThrobber14: "yfJ5g5HLung-",
  roundThrobber13: "p4IXmIBs-5w-",
  roundThrobber12: "weR08ojWBUI-",
  roundThrobber11: "cMeOOkfIIUs-",
  roundThrobber10: "y3nCg-hbk1A-",
  roundThrobber09: "toLjwkno9y4-",
  roundThrobber08: "_6FJiJ99jqrI-",
  roundThrobber07: "_1SJjEo3hqLE-",
  roundThrobber06: "_7t9M1IBCMIU-",
  roundThrobber05: "U7iA6tr3Q-M-",
  roundThrobber04: "qfszxQXK0MU-",
  roundThrobber03: "P576NNLVVrg-",
  roundThrobber02: "bOaiskb7X7U-",
  roundThrobber01: "VjfLmnfhcSo-",
  ThrobberRoundLoopThickness: "aGGryfTim7A-",
  throbber_xlarge: "uy32yrMsSHs-",
  throbber_xxlarge: "bYCfnZCzAh8-",
  ThrobberDelayAppear: "s1nvIjzilU0-",
  Visible: "kFQFeJvpX3c-",
  NewThrobber: "degxgPm6tJc-",
};
var ua = "/UNC3F5BA.png";
function ca() {
  return B.IN_CLIENT && J(B.LAUNCHER_TYPE);
}
var u = _(h()),
  da = y.default.memo(function (e) {
    let {
        className: i,
        size: n,
        string: t,
        position: c,
        static: d,
        msDelayAppear: p,
      } = e,
      m = [r.LoadingWrapper, "SteamLogoThrobber", pa(n)],
      [C, S] = y.default.useState(!p),
      x = !ca();
    return (
      (0, y.useEffect)(() => {
        if (C) return;
        let va = setTimeout(() => S(!0), p);
        return () => clearTimeout(va);
      }, [p, C]),
      t === void 0 && m.push(r.noString),
      i && m.push(i),
      d && m.push(r.Static),
      (0, u.jsxs)("div", {
        className: T(
          c == "center" && r.throbber_center_wrapper,
          !!p && r.ThrobberDelayAppear,
          C && r.Visible,
        ),
        children: [
          C &&
            x &&
            (0, u.jsx)("div", {
              className: m.join(" "),
              children: (0, u.jsx)("div", {
                className: r.NewThrobber,
                children: (0, u.jsx)("img", { src: Y(ua) }),
              }),
            }),
          !!t && (0, u.jsx)("div", { className: r.ThrobberText, children: t }),
        ],
      })
    );
  }),
  cs = y.default.memo(function (e) {
    let {
        className: i,
        size: n,
        string: t,
        position: c,
        static: d,
        msDelayAppear: p,
      } = e,
      m = [r.LoadingWrapper, "SteamLogoThrobber", pa(n)],
      [C, S] = y.default.useState(!p);
    return (
      (0, y.useEffect)(() => {
        if (C) return;
        let x = setTimeout(() => S(!0), p);
        return () => clearTimeout(x);
      }, [p, C]),
      t === void 0 && m.push(r.noString),
      i && m.push(i),
      d && m.push(r.Static),
      (0, u.jsxs)("div", {
        className: T(
          c == "center" && r.throbber_center_wrapper,
          !!p && r.ThrobberDelayAppear,
          C && r.Visible,
        ),
        children: [
          C &&
            (0, u.jsx)("div", {
              className: m.join(" "),
              children: (0, u.jsxs)("div", {
                className: r.Throbber,
                children: [
                  (0, u.jsx)(la, { className: r.base }),
                  (0, u.jsx)(la, { className: r.blur }),
                ],
              }),
            }),
          !!t && (0, u.jsx)("div", { className: r.ThrobberText, children: t }),
        ],
      })
    );
  });
function pa(a) {
  switch (a) {
    case "small":
      return r.throbber_small;
    case "medium":
      return r.throbber_medium;
    case "xlarge":
      return r.throbber_xlarge;
    case "xxlarge":
      return r.throbber_xxlarge;
    default:
      return r.throbber_large;
  }
}
function la(a) {
  let e = "SVGIcon_Button SVGIcon_Throbber ";
  return (
    a.className && (e += a.className),
    (0, u.jsxs)("svg", {
      version: "1.1",
      id: "base",
      xmlns: "http://www.w3.org/2000/svg",
      className: e,
      x: "0px",
      y: "0px",
      width: "256px",
      height: "256px",
      viewBox: "0 0 256 256",
      children: [
        (0, u.jsxs)("g", {
          className: r.partCircle,
          children: [
            (0, u.jsx)("path", {
              className: r.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895",
            }),
            (0, u.jsx)("path", {
              className: r.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M201.432,101.166",
            }),
            (0, u.jsx)("path", {
              className: r.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754",
            }),
          ],
        }),
        (0, u.jsxs)("g", {
          className: r.mainOutline,
          children: [
            (0, u.jsx)("path", {
              className: r.roundFill,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            (0, u.jsx)("path", {
              className: r.roundOuterOutline,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            (0, u.jsx)("path", {
              className: r.roundThrobber01,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            (0, u.jsx)("path", {
              className: r.roundThrobber02,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            (0, u.jsx)("path", {
              className: r.roundThrobber03,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            (0, u.jsx)("path", {
              className: r.roundThrobber04,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            (0, u.jsx)("path", {
              className: r.roundThrobber05,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            (0, u.jsx)("path", {
              className: r.roundThrobber06,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            (0, u.jsx)("path", {
              className: r.roundThrobber07,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            (0, u.jsx)("path", {
              className: r.roundThrobber08,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            (0, u.jsx)("path", {
              className: r.roundThrobber09,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            (0, u.jsx)("path", {
              className: r.roundThrobber10,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            (0, u.jsx)("path", {
              className: r.roundThrobber11,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            (0, u.jsx)("path", {
              className: r.roundThrobber12,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            (0, u.jsx)("path", {
              className: r.roundThrobber13,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            (0, u.jsx)("path", {
              className: r.roundThrobber14,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            (0, u.jsx)("path", {
              className: r.roundThrobber15,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
          ],
        }),
        (0, u.jsx)("g", {
          className: r.bottomCircle,
          children: (0, u.jsx)("path", {
            fill: "#ffffff",
            d: "M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579",
          }),
        }),
        (0, u.jsx)("g", {
          className: r.topCircle,
          children: (0, u.jsx)("circle", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "6",
            strokeMiterlimit: "10",
            cx: "161.731",
            cy: "101.274",
            r: "23.019",
          }),
        }),
      ],
    })
  );
}
var k = _(h(), 1);
function v(a) {
  let { flex: e, children: i, className: n } = a;
  return (0, k.jsx)($, {
    "flow-children": "row",
    className: (0, F.default)(o.LineItemDetailsRow, e && o.FlexRow, n),
    children: i,
  });
}
function M(a) {
  let { placeholder: e, className: i, children: n } = a;
  return (0, k.jsx)($, {
    className: (0, F.default)(o.LineItemWrapper, e && o.LineItemPlaceholder, i),
    children: n,
  });
}
function q() {
  return (0, k.jsx)(M, { placeholder: !0, children: (0, k.jsx)(w, {}) });
}
function w() {
  return (0, k.jsx)("div", {
    className: o.LoadingThrobber,
    children: (0, k.jsx)(da, {
      size: "medium",
      position: "center",
      msDelayAppear: 250,
    }),
  });
}
function ma(a) {
  let { children: e } = a;
  return (0, k.jsx)(v, {
    flex: !0,
    children: (0, k.jsx)("div", { className: o.Warning, children: e }),
  });
}
function ga(a) {
  if (a.coupon_applied) return a.coupon_applied.discount_pct;
  let e = parseInt(a.original_price.amount_in_cents),
    i = parseInt(a.subtotal.amount_in_cents);
  return Math.min(99, Math.floor(((e - i) / e) * 100 + 0.5));
}
var s = _(h(), 1);
function _a(a) {
  let { lineItems: e, cartValidation: i } = a;
  if (!e.length)
    return (0, s.jsx)("div", { children: g.Localize("#Cart_Empty") });
  let n = i?.cart_items
    ? i.cart_items.reduce((t, c) => ((t[c.line_item_id] = c), t), {})
    : {};
  return (0, s.jsx)("div", {
    className: o.LineItemsCtn,
    children:
      e &&
      e.map((t, c) =>
        t
          ? (0, s.jsx)(
              se,
              {
                fallback: (d) => (0, s.jsx)(nt, { item: t, error: d }),
                children: (0, s.jsx)(
                  st,
                  { item: t, validatedItem: n[t.line_item_id] },
                  t.line_item_id,
                ),
              },
              t?.line_item_id || c,
            )
          : (0, s.jsx)(q, {}, c),
      ),
  });
}
function st(a) {
  let { item: e, validatedItem: i } = a,
    n = rt(e);
  if (!n) throw `Unknown line item type (${e.type})`;
  let { data: t } = he(n),
    { data: c } = ye(n),
    { data: d } = Se(n),
    p = c ? z(c) : n;
  return (
    N(p),
    Ie(p),
    t && (!t.visible || d === null)
      ? (0, s.jsx)(ut, {
          lineItemID: e.line_item_id,
          validatedItem: i,
          storeItem: t,
        })
      : !t || !c || !d
        ? (0, s.jsx)(q, {})
        : (0, s.jsx)(ot, {
            lineItem: e,
            validatedItem: i,
            storeItem: t,
            displayItem: c,
            purchaseOption: d,
          })
  );
}
function nt(a) {
  let { item: e, error: i } = a,
    n = E(e.line_item_id);
  return (0, s.jsxs)(M, {
    className: o.ErrorLineItem,
    children: [
      (0, s.jsxs)("div", {
        className: o.Left,
        children: [
          (0, s.jsx)("div", {
            className: o.Error,
            children: g.Localize("#Cart_LineItem_ErrorBoundary"),
          }),
          (0, s.jsx)("div", { className: o.Muted, children: i.message }),
        ],
      }),
      (0, s.jsx)($, {
        onActivate: () => n.mutate(),
        className: o.RemoveButton,
        children: g.Localize("#Cart_Remove"),
      }),
    ],
  });
}
function rt(a) {
  let e = a.type;
  switch (e) {
    case 1:
      return { packageid: a.packageid };
    case 2:
      return { bundleid: a.bundleid };
    case 0:
      return;
    default:
      Z(e, `Unhandled type: ${e}`);
  }
}
function ot(a) {
  let {
      storeItem: e,
      displayItem: i,
      lineItem: n,
      purchaseOption: t,
      validatedItem: c,
    } = a,
    d = n.line_item_id,
    p = E(d),
    m = p.isPending || p.isSuccess,
    S = n.flags?.is_gift ? "gift" : "myself";
  return (
    S === "myself" && (S = "private"),
    (0, s.jsx)($, {
      children: (0, s.jsxs)(M, {
        children: [
          m && (0, s.jsx)(w, {}),
          (0, s.jsxs)("div", {
            className: (0, I.default)(
              o.InnerLineItemCtn,
              m && o.PendingLineItem,
            ),
            children: [
              (0, s.jsx)("div", {
                className: (0, I.default)(o.LineItemColumn, o.LineItemCapsule),
                children: (0, s.jsx)(Ca, {
                  item: i,
                  feature: "cart-items",
                  noImpressionTracking: !0,
                  children: (0, s.jsx)($a, { storeItem: i }),
                }),
              }),
              (0, s.jsxs)("div", {
                className: o.LineItemDetailsCtn,
                children: [
                  (0, s.jsx)(v, {
                    flex: !0,
                    className: o.LineItemDetailsRowTop,
                    children: (0, s.jsx)("div", {
                      className: o.LineItemTitle,
                      children: e.name,
                    }),
                  }),
                  e?.is_coming_soon && (0, s.jsx)(lt, { storeItem: e }),
                  (0, s.jsx)(dt, { storeItem: e }),
                  (0, s.jsx)(v, {
                    className: o.LineItemSpaceBetween,
                    children: (0, s.jsx)("div", {
                      className: (0, I.default)(o.LineItemCol, o.PlatformIcons),
                      children: (0, s.jsx)(ze, { id: z(i) }),
                    }),
                  }),
                  (0, s.jsx)(pt, { purchaseOption: t, validatedItem: c }),
                  (0, s.jsx)(mt, {
                    lineItem: n,
                    storeItem: e,
                    purchaseOption: t,
                    validatedItem: c,
                    initialPurchaseOption: S,
                    fnRemoveLineItem: p.mutate,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    })
  );
}
function ut(a) {
  let { lineItemID: e, validatedItem: i, storeItem: n } = a,
    t = E(e),
    c = t.isPending;
  return (0, s.jsxs)(M, {
    placeholder: !0,
    children: [
      c && (0, s.jsx)(w, {}),
      (0, s.jsxs)("div", {
        className: (0, I.default)(o.InnerLineItemCtn, c && o.PendingLineItem),
        children: [
          (0, s.jsx)("div", {
            className: (0, I.default)(o.LineItemColumn, o.LineItemCapsule),
            children: (0, s.jsx)(Ca, {
              item: n,
              noImpressionTracking: !0,
              children: (0, s.jsx)($a, { storeItem: n }),
            }),
          }),
          (0, s.jsxs)("div", {
            className: o.LineItemDetailsCtn,
            children: [
              (0, s.jsx)(v, {
                flex: !0,
                className: o.LineItemDetailsRowTop,
                children: (0, s.jsx)("div", {
                  className: o.LineItemTitle,
                  children: n?.name,
                }),
              }),
              (0, s.jsx)(ct, { validatedItem: i }),
              (0, s.jsx)(v, {
                className: o.LineItemSpaceBetween,
                children: (0, s.jsx)($, {
                  onActivate: () => t.mutate(),
                  className: o.RemoveLineItem,
                  children: g.Localize("#Cart_Remove"),
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function $a(a) {
  let { storeItem: e } = a,
    { data: i } = N(z(e)),
    t = `${D.STORE_BASE_URL}public/images/checkout/Cart_generic_header_logo.png`;
  return (
    i?.header
      ? (t =
          D.STORE_ITEM_BASE_URL +
          i.asset_url_format.replace("${FILENAME}", i.header))
      : i?.small_capsule &&
        (t =
          D.STORE_ITEM_BASE_URL +
          i.asset_url_format.replace("${FILENAME}", i.small_capsule)),
    (0, s.jsx)("img", { alt: e.name, className: o.HeaderImg, src: t })
  );
}
function ct(a) {
  return null;
}
function Ca(a) {
  return a.children;
}
function lt(a) {
  let { storeItem: e } = a,
    { data: i } = ve(z(e)),
    n = De(i);
  if (!i) return null;
  let t = g.Localize("#Cart_ComingSoon", n);
  return (
    ["text_tba", "text_comingsoon"].includes(i.coming_soon_display) && (t = n),
    (0, s.jsx)(ma, { children: t })
  );
}
function dt(a) {
  return null;
}
function pt(a) {
  let { purchaseOption: e, validatedItem: i } = a,
    n = e?.formatted_original_price,
    t = e?.formatted_final_price,
    c = e?.discount_pct;
  return (
    i &&
      i.original_price &&
      i.subtotal &&
      ((n = i.original_price.formatted_amount),
      (t = i.subtotal.formatted_amount),
      (c = ga(i))),
    (0, s.jsx)("div", {
      className: o.LineItemRightCol,
      children: (0, s.jsx)(Me, {
        transparentBackground: !0,
        purchaseOption: {
          ...e,
          formatted_original_price: n,
          formatted_final_price: t,
          discount_pct: c,
        },
      }),
    })
  );
}
function mt(a) {
  let {
      lineItem: e,
      storeItem: i,
      purchaseOption: n,
      validatedItem: t,
      initialPurchaseOption: c,
      fnRemoveLineItem: d,
    } = a,
    p = !t?.restrict_add_additional_to_cart,
    m = Be(e.packageid, e.bundleid, n.user_can_purchase_as_gift);
  return (0, s.jsxs)(v, {
    className: o.LineItemSpaceBetween,
    children: [
      (0, s.jsx)("div", {
        className: o.LineItemCol,
        children: (0, s.jsx)(gt, {
          lineItem: e,
          storeItem: i,
          initialValue: c,
          purchaseOption: n,
        }),
      }),
      (0, s.jsxs)("div", {
        className: (0, I.default)(o.LineItemRightCol, o.AddRemoveLinks),
        children: [
          p &&
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)($, {
                  onActivate: () => !m.isPending && m.mutate(),
                  className: o.AddLineItem,
                  title: g.Localize("#Cart_LineItem_Add_Tooltip"),
                  children: g.Localize("#Cart_Add"),
                }),
                "|",
              ],
            }),
          (0, s.jsx)($, {
            onActivate: () => d(),
            className: o.RemoveLineItem,
            children: g.Localize("#Cart_Remove"),
          }),
        ],
      }),
    ],
  });
}
function gt(a) {
  return null;
}
var ka = "yGP85AIA0as-";
var ba = "_7wIpefMxm3E-";
var ha = "MAkyj55Q6Lk-";
var ya = "-roEJ2cHLRY-";
var Sa = "-yRJMDYDC5A-";
var b = _(h());
function $t(a) {
  let { closeCart: e, lineItemIDs: i } = a,
    n = ra(),
    { data: t } = $e(),
    { data: c } = oa(),
    d = j.useMemo(
      () =>
        t
          ? i
            ? t.line_items.filter((p) => i.includes(p.line_item_id))
            : t.line_items
          : null,
      [i, t],
    );
  return (
    j.useEffect(() => {
      d !== null && d?.length == 0 && e();
    }, [d, e]),
    d == null || !n
      ? null
      : (0, b.jsx)(fe, {
          className: ba,
          onClose: e,
          navID: "CartModal",
          children: (0, b.jsxs)("div", {
            className: ha,
            children: [
              (0, b.jsx)("div", {
                className: ka,
                children: g.Localize("#Cart_AddedToYourCart"),
              }),
              (0, b.jsx)(_a, { lineItems: d, cartValidation: c }),
              (0, b.jsxs)($, {
                className: ya,
                children: [
                  (0, b.jsx)(ee, {
                    onClick: e,
                    children: g.Localize("#Cart_ContinueShopping"),
                  }),
                  (0, b.jsx)(ae, {
                    autoFocus: !0,
                    className: Sa,
                    href: `${B.STORE_BASE_URL}cart/`,
                    children: g.Localize(
                      "#Cart_ViewMyCart",
                      t.line_items.length,
                    ),
                  }),
                ],
              }),
            ],
          }),
        })
  );
}
export { $t as default };
