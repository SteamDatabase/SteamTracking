/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  Bt as t,
  U as n,
  gt as r,
  it as i,
  qt as a,
} from "./mobx.esm.js?contenthash=CuqnC1HA";
import {
  Ht as o,
  Jo as s,
  Yo as c,
  dn as l,
  s as u,
  sa as d,
  so as f,
  uo as p,
} from "./dialogs.js?contenthash=Ef6x5QZW";
import { n as ee } from "./long.js?contenthash=BCeVig72";
import {
  D as m,
  a as te,
  k as ne,
  r as h,
} from "./react-router.js?contenthash=BY_BIsGq";
import { t as g } from "./currencyformat.js?contenthash=lqE5xB1s";
import {
  i as _,
  n as v,
  r as re,
  t as y,
} from "./pricingguidelineobject.js?contenthash=zLI3iiBM";
import { r as b } from "./modals.js?contenthash=BkJN1F7L";
import { n as x, r as S } from "./render.js?contenthash=DtkfYyDz";
import { n as C } from "./text.js?contenthash=Cyl0Hm-O";
import { n as ie, t as ae } from "./button.js?contenthash=DOIwfHfd";
import { t as w } from "./heading.js?contenthash=BTG9Wh20";
import { t as T } from "./textlink.js?contenthash=6V1PXkY-";
import {
  B as E,
  K as oe,
  O as se,
  R as D,
  V as ce,
  _ as le,
  a as O,
  d as k,
  g as A,
  m as ue,
  p as j,
  v as M,
  w as de,
  y as N,
} from "./tabulatorutils.js?contenthash=DjJCijIL";
import { t as P } from "./throbber.js?contenthash=DT0j8i1L";
import {
  c as F,
  i as I,
  o as L,
  r as R,
  s as z,
} from "./currencyutils.js?contenthash=DLilGjyJ";
import {
  d as B,
  f as V,
  l as H,
  r as fe,
} from "./pricinggridcell.js?contenthash=DiY9Ygmu";
import { t as pe } from "./phpintegration.js?contenthash=CHDQW7hW";
import { t as me } from "./unknownroute.js?contenthash=BBdYiwN1";
import { n as he, t as U } from "./fancytable.js?contenthash=BrwA4o0C";
import { a as ge, f as _e } from "./profilestore.js?contenthash=_1Ae-7Wi";
import { t as W } from "./localization2.js?contenthash=DWWvuCzj";
import {
  a as ve,
  c as ye,
  d as be,
  i as xe,
  l as Se,
  n as Ce,
  o as we,
  p as Te,
  r as Ee,
  s as De,
  u as Oe,
  y as ke,
} from "./saveprices.js?contenthash=Dv7n3JSX";
import { n as G, t as Ae } from "./localization3.js?contenthash=B0mVjA4G";
var K = {};
(K.arabic = () =>
  c(
    () => import(`./currency_arabic.js?contenthash=gFBHoyni`),
    [],
    import.meta.url,
  )),
  (K.brazilian = () =>
    c(
      () => import(`./currency_brazilian.js?contenthash=KjHxyFBf`),
      [],
      import.meta.url,
    )),
  (K.bulgarian = () =>
    c(
      () => import(`./currency_bulgarian.js?contenthash=CmZniUHH`),
      [],
      import.meta.url,
    )),
  (K.czech = () =>
    c(
      () => import(`./currency_czech.js?contenthash=Brld-NkF`),
      [],
      import.meta.url,
    )),
  (K.danish = () =>
    c(
      () => import(`./currency_danish.js?contenthash=Dyd8FMZa`),
      [],
      import.meta.url,
    )),
  (K.dutch = () =>
    c(
      () => import(`./currency_dutch.js?contenthash=jt7JKRbR`),
      [],
      import.meta.url,
    )),
  (K.english = () =>
    c(
      () => import(`./currency_english.js?contenthash=DcNS618d`),
      [],
      import.meta.url,
    )),
  (K.finnish = () =>
    c(
      () => import(`./currency_finnish.js?contenthash=BOsgMjY5`),
      [],
      import.meta.url,
    )),
  (K.french = () =>
    c(
      () => import(`./currency_french.js?contenthash=CWYifI2w`),
      [],
      import.meta.url,
    )),
  (K.german = () =>
    c(
      () => import(`./currency_german.js?contenthash=D8O0Qd5l`),
      [],
      import.meta.url,
    )),
  (K.greek = () =>
    c(
      () => import(`./currency_greek.js?contenthash=C_30d4Wv`),
      [],
      import.meta.url,
    )),
  (K.hungarian = () =>
    c(
      () => import(`./currency_hungarian.js?contenthash=KrE9bPHA`),
      [],
      import.meta.url,
    )),
  (K.indonesian = () =>
    c(
      () => import(`./currency_indonesian.js?contenthash=GLv7lpUi`),
      [],
      import.meta.url,
    )),
  (K.italian = () =>
    c(
      () => import(`./currency_italian.js?contenthash=2ZJWmGPn`),
      [],
      import.meta.url,
    )),
  (K.japanese = () =>
    c(
      () => import(`./currency_japanese.js?contenthash=DVpUjcez`),
      [],
      import.meta.url,
    )),
  (K.koreana = () =>
    c(
      () => import(`./currency_koreana.js?contenthash=CWk_iEjY`),
      [],
      import.meta.url,
    )),
  (K.latam = () =>
    c(
      () => import(`./currency_latam.js?contenthash=Q9Q8vP40`),
      [],
      import.meta.url,
    )),
  (K.malay = () =>
    c(
      () => import(`./currency_malay.js?contenthash=fhaBO-Xv`),
      [],
      import.meta.url,
    )),
  (K.norwegian = () =>
    c(
      () => import(`./currency_norwegian.js?contenthash=Bc0SPDDJ`),
      [],
      import.meta.url,
    )),
  (K.polish = () =>
    c(
      () => import(`./currency_polish.js?contenthash=BOF_IGdx`),
      [],
      import.meta.url,
    )),
  (K.portuguese = () =>
    c(
      () => import(`./currency_portuguese.js?contenthash=DEBVwj_9`),
      [],
      import.meta.url,
    )),
  (K.romanian = () =>
    c(
      () => import(`./currency_romanian.js?contenthash=1c0yX7xS`),
      [],
      import.meta.url,
    )),
  (K.russian = () =>
    c(
      () => import(`./currency_russian.js?contenthash=DcouFg8i`),
      [],
      import.meta.url,
    )),
  (K.sc_schinese = () =>
    c(
      () => import(`./currency_sc_schinese.js?contenthash=-HVyXZH3`),
      [],
      import.meta.url,
    )),
  (K.schinese = () =>
    c(
      () => import(`./currency_schinese.js?contenthash=B6q7gqNk`),
      [],
      import.meta.url,
    )),
  (K.spanish = () =>
    c(
      () => import(`./currency_spanish.js?contenthash=Dg5T0oJY`),
      [],
      import.meta.url,
    )),
  (K.swedish = () =>
    c(
      () => import(`./currency_swedish.js?contenthash=D9qGtxR2`),
      [],
      import.meta.url,
    )),
  (K.tchinese = () =>
    c(
      () => import(`./currency_tchinese.js?contenthash=CqKmq7sE`),
      [],
      import.meta.url,
    )),
  (K.thai = () =>
    c(
      () => import(`./currency_thai.js?contenthash=3CA5Hupg`),
      [],
      import.meta.url,
    )),
  (K.turkish = () =>
    c(
      () => import(`./currency_turkish.js?contenthash=BsgHcKs7`),
      [],
      import.meta.url,
    )),
  (K.ukrainian = () =>
    c(
      () => import(`./currency_ukrainian.js?contenthash=C7AI--qO`),
      [],
      import.meta.url,
    )),
  (K.vietnamese = () =>
    c(
      () => import(`./currency_vietnamese.js?contenthash=CKVM5eDv`),
      [],
      import.meta.url,
    ));
async function je(e) {
  if (K[e]) return await K[e]();
}
var q = m(je);
function Me(e) {
  return q.Localize(`#CurrencyCodeDescription_${I(e)}`);
}
var J = a(r(), 1),
  Y = i();
function X(e) {
  return Me(e.getValue());
}
function Ne(e) {
  let t = e.getValue(),
    n = z(t),
    r = q.Localize(`#Region_Pricing_Tooltip_${n}`);
  return (0, Y.jsxs)(`span`, {
    children: [n, ` `, (0, Y.jsx)(l, { tooltip: r })],
  });
}
var Pe = { PriceEdit: (e) => `/packages/pricing/${e}` },
  Z = a(s());
function Fe(e, n, r) {
  let i = _(),
    a = V();
  return (0, J.useMemo)(() => {
    let o = [],
      s = [],
      c = [];
    if (e) {
      let l = L(1).toUpperCase(),
        u = j(n, l) || A(n, l) || M(n, l);
      for (let t = 1; t < 48; ++t) {
        if (!e.BIsSupportCurrencyAndOrRegion(t)) continue;
        let s = L(t).toUpperCase(),
          c = M(n, s),
          l = A(n, s),
          d = j(n, s),
          f = e.GetScaledRecommendedPrice(u, t, void 0, i).price;
        o.push({
          packageID: n,
          strPriceKey: s,
          eCurrencyCode: t,
          eRegionCode: void 0,
          strCountryOverride: void 0,
          nPublishedPrice: c,
          nProposedPrice: l,
          nLocalPrice: d,
          nSuggestedPrice: f,
          bCanSetToFree: !!a,
          appids: r,
        });
      }
      for (let t = 1; t < 5; ++t) {
        if (!e.BIsSupportCurrencyAndOrRegion(1, t)) continue;
        let a = L(1, t).toUpperCase(),
          o = M(n, a),
          c = A(n, a),
          l = j(n, a),
          d = e.GetScaledRecommendedPrice(u, 1, t, i).price;
        s.push({
          packageID: n,
          strPriceKey: a,
          eCurrencyCode: 1,
          eRegionCode: t,
          strCountryOverride: void 0,
          nPublishedPrice: o,
          nProposedPrice: c,
          nLocalPrice: l,
          nSuggestedPrice: d,
          bCanSetToFree: !1,
          appids: r,
        });
      }
      let d = le(n);
      d.length > 0 &&
        d.forEach((e) => {
          let { eCurrencyCode: i, strCountryCode: a } = F(e),
            o = R(a);
          t(
            i == o,
            `Unexpected currency ${i} for country ${a} when expecting ${o} `,
          );
          let s = A(n, e);
          c.push({
            packageID: n,
            strPriceKey: e,
            eCurrencyCode: i,
            eRegionCode: void 0,
            strCountryOverride: a,
            nPublishedPrice: N(n, e),
            nProposedPrice: s,
            nLocalPrice: j(n, e),
            nSuggestedPrice: void 0,
            bCanSetToFree: !1,
            appids: r,
          });
        });
    }
    return { rgCurrencyRows: o, rgRegionRows: s, rgCountryOverrideRows: c };
  }, [e, n, a, i, r]);
}
function Ie(e) {
  let t = `${n.PARTNER_BASE_URL}doc/finance/taxfaq`;
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsxs)(S, {
        paddingBottom: `4`,
        children: [
          (0, Y.jsx)(C, {
            as: `p`,
            size: `4`,
            color: `text-body`,
            contrast: `subtitle`,
            children: W.Localize(`#SinglePricingPackage_Intro_1`),
          }),
          (0, Y.jsx)(C, {
            as: `p`,
            size: `4`,
            color: `text-body`,
            contrast: `subtitle`,
            children: W.Localize(`#SinglePricingPackage_Intro_2`),
          }),
          (0, Y.jsx)(C, {
            size: `4`,
            color: `text-body`,
            contrast: `subtitle`,
            children: (0, Y.jsxs)(`ol`, {
              children: [
                (0, Y.jsx)(`li`, {
                  children: W.Localize(`#SinglePricingPackage_Intro_2a`),
                }),
                (0, Y.jsx)(`li`, {
                  children: W.Localize(`#SinglePricingPackage_Intro_2b`),
                }),
              ],
            }),
          }),
        ],
      }),
      (0, Y.jsx)(S, {
        paddingBottom: `4`,
        children: (0, Y.jsx)(C, {
          children: W.LocalizeReact(
            `#SinglePricingPackage_Desc_2`,
            (0, Y.jsx)(T, {
              href: t,
              children: W.LocalizeReact(`#SinglePricingPackage_Desc_2_Link`),
            }),
          ),
        }),
      }),
      (0, Y.jsx)(S, {
        children: (0, Y.jsx)(C, {
          children: W.Localize(`#SinglePricingPackage_Desc_3`),
        }),
      }),
    ],
  });
}
var Le = `wo2GzPtQoTA-`,
  Re = `Pa6ALJGOpwk-`,
  ze = `A9X1dzkhLiA-`,
  Be = `TSvnB8--gSk-`,
  Ve = `G35ZSKlRwJg-`,
  He = `vp56-md-DzE-`;
function Q(e) {
  return e.getValue() == -1 || !e.getValue()
    ? `--`
    : g(e.getValue(), e.row.original.eCurrencyCode);
}
function Ue(t) {
  let n = t.row.original;
  if (n.nProposedPrice == -1 || !n.nProposedPrice) return `--`;
  let r = !n.nPublishedPrice;
  return (0, Y.jsx)(`span`, {
    className: e({
      [Le]: r,
      [Re]: !r && n.nProposedPrice > n.nPublishedPrice,
      [ze]: !r && n.nProposedPrice < n.nPublishedPrice,
    }),
    children: g(n.nProposedPrice, n.eCurrencyCode),
  });
}
function We(e) {
  return Ae(e.row.original.strCountryOverride);
}
function Ge(t) {
  let {
      packageID: n,
      strPriceKey: r,
      eRegionCode: i,
      eCurrencyCode: a,
    } = t.row.original,
    { nPriceInCents: o, nProposedPriceInCents: s } = E(n, r),
    c = _(),
    l = v(),
    u = L(1).toUpperCase(),
    d = j(n, u) || A(n, u) || M(n, u),
    { nGuidelinesLevel: f } = ce(l, c, d, a, i),
    p = ue(r, o ?? s, f, !0);
  return p == -1 || !p
    ? `--`
    : (0, Y.jsxs)(`span`, { className: e({}), children: [p, ` %`] });
}
function Ke(e) {
  let { nPackageID: t } = e;
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsxs)(x, {
        direction: `column`,
        align: `start`,
        paddingBottom: `4`,
        children: [
          (0, Y.jsx)(ie, {
            href: `${n.PARTNER_BASE_URL}pricing/dashboard/?pn=${t}`,
            children: W.Localize(`#SinglePackagePricing_Right_Edit`),
          }),
          (0, Y.jsx)(C, {
            children: W.Localize(`#SinglePackagePricing_Right_Edit_desc`),
          }),
        ],
      }),
      (0, Y.jsxs)(x, {
        direction: `column`,
        paddingBottom: `4`,
        children: [
          (0, Y.jsx)(w, {
            size: `7`,
            children: W.Localize(`#SinglePackagePricing_Right_Help_Title`),
          }),
          (0, Y.jsx)(C, {
            children: W.Localize(`#SinglePackagePricing_Right_Help_Desc`),
          }),
          (0, Y.jsx)(T, {
            href: `${n.PARTNER_BASE_URL}doc/store/pricing`,
            children: W.Localize(`#SinglePackagePricing_Right_Link`),
          }),
        ],
      }),
      (0, Y.jsxs)(x, {
        direction: `column`,
        children: [
          (0, Y.jsx)(w, {
            size: `7`,
            children: W.Localize(`#SinglePackagePricing_Right_FAQ`),
          }),
          (0, Y.jsxs)(S, {
            children: [
              (0, Y.jsx)(C, {
                size: `4`,
                weight: `medium`,
                children: W.Localize(
                  `#SinglePackagePricing_Right_FAQ_switching`,
                ),
              }),
              (0, Y.jsx)(`br`, {}),
              (0, Y.jsx)(C, {
                children: W.LocalizeReact(
                  `#SinglePackagePricing_Right_FAQ_switching_answer`,
                  (0, Y.jsx)(T, {
                    href: `${n.PARTNER_BASE_URL}wizard/HelpWithPublishing?issueid=915`,
                    children: W.Localize(
                      `#SinglePackagePricing_Right_FAQ_switching_answer_link`,
                    ),
                  }),
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function qe(t) {
  let { nPackageID: n } = t,
    r = D(n),
    [i, a, s] = p(),
    c = de(n),
    [l, f] = (0, J.useState)(!1);
  return r
    ? (0, Y.jsxs)(`div`, {
        className: e(Oe, be),
        children: [
          (0, Y.jsx)(`div`, {
            className: Se,
            children: (0, Y.jsx)(ve, { packageID: n }),
          }),
          (0, Y.jsxs)(`div`, {
            className: ye,
            children: [
              (0, Y.jsx)(xe, { packageID: n, bShowCancel: !1 }),
              (0, Y.jsx)(o, {
                onClick: a,
                className: e(De),
                children: d(`#PricingDashboard_CancelPriceProposal`),
              }),
              (0, Y.jsx)(b, {
                active: i,
                children: (0, Y.jsx)(u, {
                  strTitle: d(`#PricingDashboard_CancelPriceProposal`),
                  strDescription: d(`#Dialog_AreYouSure`),
                  closeModal: s,
                  onOK: async () => {
                    f(!0), await c(), f(!1), window.location.reload();
                  },
                  children:
                    l &&
                    (0, Y.jsx)(P, { string: d(`#ImageUpload_Processing`) }),
                }),
              }),
            ],
          }),
        ],
      })
    : null;
}
var $ = he();
function Je(e) {
  let { nPackageID: t, appids: n } = e,
    r = se();
  _e(r);
  let i = Ee(),
    a = Number.parseInt(t);
  return (
    v(),
    (0, Y.jsx)(ee, {
      children: (0, Y.jsxs)(ge, {
        fnBLocalChangesExist: r,
        fnWarnUser: i,
        children: [
          (0, Y.jsxs)(`div`, {
            className: `adminTwoColCtn`,
            children: [
              (0, Y.jsx)(`div`, {
                className: `adminLeftCol`,
                children: (0, Y.jsx)(`div`, {
                  className: `colSection`,
                  children: (0, Y.jsx)(Ie, {}),
                }),
              }),
              (0, Y.jsx)(`div`, {
                className: `adminRightCol`,
                children: (0, Y.jsx)(`div`, {
                  className: `panel`,
                  children: (0, Y.jsx)(Ke, { nPackageID: a }),
                }),
              }),
            ],
          }),
          (0, Y.jsx)(`div`, {
            className: ``,
            children: (0, Y.jsx)(Ye, {
              nPackageID: a,
              appids: n.map(Number.parseInt),
            }),
          }),
        ],
      }),
    })
  );
}
function Ye(e) {
  let { nPackageID: t, appids: n } = e,
    r = v(),
    {
      rgCurrencyRows: i,
      rgRegionRows: a,
      rgCountryOverrideRows: o,
    } = Fe(r, t, n),
    s = D(t),
    c = !!s,
    u = s?.eState == 4,
    { fnApplyGuidelines: f } = y(O());
  (0, J.useEffect)(() => {
    oe([t]);
  }, [t]);
  let p = [
    $.accessor(`nPublishedPrice`, {
      header: d(`#PackagePricing_Col_CurPrice`),
      meta: { cellClassname: (0, Z.default)(Be) },
      size: 120,
      cell: Q,
    }),
    $.accessor(c ? `nProposedPrice` : `strPriceKey`, {
      header: d(
        u ? `#PackagePricing_Col_Approved` : `#PackagePricing_Col_Proposal`,
      ),
      meta: { cellClassname: (0, Z.default)(Ve) },
      size: 280,
      cell: c ? Ue : fe,
    }),
    $.accessor(c ? `nProposedPrice` : `strPriceKey`, {
      id: `nMaxDiscount`,
      header: d(`#PackagePricing_Col_MaxDiscount`),
      meta: {
        cellClassname: (0, Z.default)(He),
        strHeaderTooltip: d(`#PackagePricing_Col_MaxDiscount_ttip`),
      },
      size: 150,
      cell: Ge,
    }),
  ];
  return i.length == 0 || a.length == 0
    ? null
    : (0, Y.jsxs)(Y.Fragment, {
        children: [
          c
            ? (0, Y.jsx)(Y.Fragment, {
                children: (0, Y.jsx)(`div`, {
                  className: `colSection`,
                  children: (0, Y.jsx)(we, { packageID: t }),
                }),
              })
            : (0, Y.jsx)(Y.Fragment, {
                children: (0, Y.jsx)(`div`, {
                  className: `colSection`,
                  children: (0, Y.jsxs)(x, {
                    direction: `row`,
                    gap: `5`,
                    children: [
                      (0, Y.jsx)(ke, {
                        fnConversionMethodSelected: (e) => {
                          f(t, k(t, `USD`), e);
                        },
                      }),
                      (0, Y.jsxs)(x, {
                        direction: `column`,
                        children: [
                          (0, Y.jsx)(C, {
                            size: `3`,
                            children: W.Localize(
                              `#PricingDashboard_Select_Price`,
                            ),
                          }),
                          (0, Y.jsx)(Xe, { usdRow: i[1] }),
                        ],
                      }),
                      (0, Y.jsxs)(x, {
                        direction: `column`,
                        align: `start`,
                        children: [
                          (0, Y.jsxs)(C, {
                            size: `3`,
                            children: [
                              d(
                                `#PricingDashboard_ApplyGuidelinesDialog_Context_Short`,
                              ),
                              (0, Y.jsx)(l, {
                                tooltip: d(
                                  `#PricingDashboard_ApplyGuidelinesDialog_Context`,
                                ),
                              }),
                            ],
                          }),
                          (0, Y.jsx)(Ze, {
                            nPackageID: t,
                            oPricingGuideline: r,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
          (0, Y.jsxs)(`div`, {
            className: `colSection`,
            children: [
              (0, Y.jsx)(U, {
                data: i,
                className: (0, Z.default)(
                  G.DefaultFancyTable,
                  G.NoColumnBorders,
                  H,
                ),
                columns: [
                  $.accessor(`eCurrencyCode`, {
                    header: d(`#PackagePricing_Col_Currency`),
                    size: 200,
                    cell: X,
                  }),
                  ...p,
                ],
                getRowKey: (e, t) => `${t.eCurrencyCode}`,
                nItemHeight: 20,
                stickyHeader: !0,
              }),
              (0, Y.jsx)(U, {
                data: a,
                className: (0, Z.default)(
                  G.DefaultFancyTable,
                  G.NoColumnBorders,
                  H,
                ),
                columns: [
                  $.accessor(`eRegionCode`, {
                    header: d(`#PackagePricing_Col_Region`),
                    size: 200,
                    cell: Ne,
                  }),
                  $.accessor(`eCurrencyCode`, {
                    header: d(`#PackagePricing_Col_Currency`),
                    size: 100,
                    cell: X,
                  }),
                  ...p,
                ],
                getRowKey: (e, t) => `${t.eRegionCode}`,
                nItemHeight: 20,
                stickyHeader: !0,
              }),
              o.length > 0 &&
                (0, Y.jsx)(U, {
                  data: o,
                  className: (0, Z.default)(
                    G.DefaultFancyTable,
                    G.NoColumnBorders,
                    `XslZzcoK48s-`,
                  ),
                  columns: [
                    $.accessor(`strCountryOverride`, {
                      header: d(`#PackagePricing_Col_Country`),
                      size: 200,
                      cell: We,
                    }),
                    $.accessor(`eCurrencyCode`, {
                      header: d(`#PackagePricing_Col_Currency`),
                      size: 100,
                      cell: X,
                    }),
                    ...p,
                  ],
                  getRowKey: (e, t) => `${t.strCountryOverride}`,
                  nItemHeight: 20,
                  stickyHeader: !0,
                }),
              (0, Y.jsx)(Ce, { bReloadPageOnSave: !0 }),
              (0, Y.jsx)(qe, { nPackageID: t }),
            ],
          }),
        ],
      });
}
function Xe(e) {
  let { usdRow: t } = e,
    { fnApplyGuidelines: n } = y(O());
  return (0, Y.jsx)(B, {
    strButton: W.Localize(`#PricingDashboard_Select_Price_button`),
    strTooltip: W.Localize(`#PricingDashboard_Select_Price_button_ttip`),
    fnGetUSDPriceInCents: () => k(t.packageID, `USD`),
    fnOnUpdate: (e) => n(t.packageID, e),
    strDescription: W.Localize(
      `#PricingDashboard_GuidelinesPickerDescription_New`,
    ),
    appids: t.appids,
    nPackageID: t.packageID,
    bCanSetToFree: t.bCanSetToFree,
  });
}
function Ze(e) {
  let { nPackageID: t, oPricingGuideline: n } = e,
    [r, i, a] = p(),
    o = f();
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(ae, {
        onClick: i,
        children: d(`#PricingDashboard_ApplyGuidelinesDialog_Button`),
      }),
      (0, Y.jsx)(b, {
        active: r,
        children: (0, Y.jsx)(Te, {
          closeModal: a,
          fnOnApply: o,
          singlePackage: !0,
        }),
      }),
    ],
  });
}
function Qe(e) {
  return (
    J.use(ne()),
    (0, Y.jsx)(te, {
      children: (0, Y.jsxs)(re, {
        children: [
          (0, Y.jsx)(h, {
            path: Pe.PriceEdit(`:packageid`),
            children: (0, Y.jsx)(pe, {
              config: {
                "packageadmin-price-editor": (e) => (0, Y.jsx)(Je, { ...e }),
              },
            }),
          }),
          (0, Y.jsx)(h, { component: me }),
        ],
      }),
    })
  );
}
export { Qe as default };
