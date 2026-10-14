/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [8590],
    {
      89830: (D, A, n) => {
        "use strict";
        n.r(A), n.d(A, { default: () => Vn });
        var t = n(7850),
          i = n(90626),
          M = n(92757);
        let H = { PriceEdit: (s) => `/packages/pricing/${s}` };
        var O = n(90783),
          R = n(96135),
          u = n(68031),
          v = n(15252),
          F = n(75083),
          G = n(16666),
          I = n(32),
          m = n(34104),
          z = n(93357),
          B = n(61075),
          U = n(20929),
          l = n(58033),
          L = n(37901);
        const e = {};
        (e.arabic = () => n.e(33347).then(n.t.bind(n, 33347, 19))),
          (e.brazilian = () => n.e(13183).then(n.t.bind(n, 13183, 19))),
          (e.bulgarian = () => n.e(55400).then(n.t.bind(n, 55400, 19))),
          (e.czech = () => n.e(48942).then(n.t.bind(n, 48942, 19))),
          (e.danish = () => n.e(16306).then(n.t.bind(n, 16306, 19))),
          (e.dutch = () => n.e(22199).then(n.t.bind(n, 22199, 19))),
          (e.english = () => n.e(52781).then(n.t.bind(n, 52781, 19))),
          (e.finnish = () => n.e(72746).then(n.t.bind(n, 72746, 19))),
          (e.french = () => n.e(59427).then(n.t.bind(n, 59427, 19))),
          (e.german = () => n.e(35585).then(n.t.bind(n, 35585, 19))),
          (e.greek = () => n.e(68157).then(n.t.bind(n, 68157, 19))),
          (e.hungarian = () => n.e(36204).then(n.t.bind(n, 36204, 19))),
          (e.indonesian = () => n.e(90367).then(n.t.bind(n, 90367, 19))),
          (e.italian = () => n.e(2061).then(n.t.bind(n, 2061, 19))),
          (e.japanese = () => n.e(64124).then(n.t.bind(n, 64124, 19))),
          (e.koreana = () => n.e(76614).then(n.t.bind(n, 76614, 19))),
          (e.latam = () => n.e(98542).then(n.t.bind(n, 98542, 19))),
          (e.malay = () => n.e(64797).then(n.t.bind(n, 64797, 19))),
          (e.norwegian = () => n.e(27841).then(n.t.bind(n, 27841, 19))),
          (e.polish = () => n.e(19894).then(n.t.bind(n, 19894, 19))),
          (e.portuguese = () => n.e(97806).then(n.t.bind(n, 97806, 19))),
          (e.romanian = () => n.e(22224).then(n.t.bind(n, 22224, 19))),
          (e.russian = () => n.e(35544).then(n.t.bind(n, 35544, 19))),
          (e.sc_schinese = () => n.e(57906).then(n.t.bind(n, 57906, 19))),
          (e.schinese = () => n.e(58875).then(n.t.bind(n, 58875, 19))),
          (e.spanish = () => n.e(91661).then(n.t.bind(n, 91661, 19))),
          (e.swedish = () => n.e(4140).then(n.t.bind(n, 4140, 19))),
          (e.tchinese = () => n.e(87208).then(n.t.bind(n, 87208, 19))),
          (e.thai = () => n.e(54925).then(n.t.bind(n, 54925, 19))),
          (e.turkish = () => n.e(64885).then(n.t.bind(n, 64885, 19))),
          (e.ukrainian = () => n.e(89271).then(n.t.bind(n, 89271, 19))),
          (e.vietnamese = () => n.e(35404).then(n.t.bind(n, 35404, 19)));
        async function V(s) {
          if (e[s]) return e[s]();
        }
        var E = n(33220);
        const J = (0, L.l)(V);
        function rn(s) {
          return J.Localize(`#CurrencyCodeDescription_${(0, E.M1)(s)}`);
        }
        var en = n(11243);
        function k(s) {
          return rn(s.getValue());
        }
        function gn(s) {
          const o = s.getValue(),
            a = (0, E.mG)(o),
            h = J.Localize(`#Region_Pricing_Tooltip_${a}`);
          return (0, t.jsxs)("span", {
            children: [a, " ", (0, t.jsx)(en.o, { tooltip: h })],
          });
        }
        var hn = n(83465),
          Pn = n(32232),
          Y = n.n(Pn),
          w = n(64868),
          Cn = n(64238),
          K = n.n(Cn),
          vn = n(31886),
          ln = n(90247),
          q = n(13401),
          mn = n(93621),
          c = n(37424),
          xn = n(71742);
        function yn(s, o, a) {
          const h = (0, q.Bb)(),
            P = (0, mn.T)();
          return (0, i.useMemo)(() => {
            let C = new Array(),
              r = new Array(),
              x = new Array();
            if (s) {
              const y = (0, E.pd)(m.CS).toUpperCase(),
                j = (0, c.Dl)(o, y) || (0, c.Oc)(o, y) || (0, c.mv)(o, y);
              for (let d = m.CS; d < m.mh; ++d) {
                if (!s.BIsSupportCurrencyAndOrRegion(d)) continue;
                const g = (0, E.pd)(d).toUpperCase(),
                  f = (0, c.mv)(o, g),
                  $ = (0, c.Oc)(o, g),
                  X = (0, c.Dl)(o, g),
                  sn = s.GetScaledRecommendedPrice(j, d, void 0, h).price;
                C.push({
                  packageID: o,
                  strPriceKey: g,
                  eCurrencyCode: d,
                  eRegionCode: void 0,
                  strCountryOverride: void 0,
                  nPublishedPrice: f,
                  nProposedPrice: $,
                  nLocalPrice: X,
                  nSuggestedPrice: sn,
                  bCanSetToFree: !!P,
                  appids: a,
                });
              }
              for (let d = ln._S; d < ln.Hc; ++d) {
                if (!s.BIsSupportCurrencyAndOrRegion(m.CS, d)) continue;
                const g = (0, E.pd)(m.CS, d).toUpperCase(),
                  f = (0, c.mv)(o, g),
                  $ = (0, c.Oc)(o, g),
                  X = (0, c.Dl)(o, g),
                  sn = s.GetScaledRecommendedPrice(j, m.CS, d, h).price;
                r.push({
                  packageID: o,
                  strPriceKey: g,
                  eCurrencyCode: m.CS,
                  eRegionCode: d,
                  strCountryOverride: void 0,
                  nPublishedPrice: f,
                  nProposedPrice: $,
                  nLocalPrice: X,
                  nSuggestedPrice: sn,
                  bCanSetToFree: !1,
                  appids: a,
                });
              }
              const T = (0, c.Y2)(o);
              T.length > 0 &&
                T.forEach((d) => {
                  const { eCurrencyCode: g, strCountryCode: f } = (0, E.gM)(d),
                    $ = (0, E.rt)(f);
                  (0, xn.wT)(
                    g == $,
                    `Unexpected currency ${g} for country ${f} when expecting ${$} `,
                  );
                  const X = (0, c.Oc)(o, d);
                  x.push({
                    packageID: o,
                    strPriceKey: d,
                    eCurrencyCode: g,
                    eRegionCode: void 0,
                    strCountryOverride: f,
                    nPublishedPrice: (0, c.oL)(o, d),
                    nProposedPrice: X,
                    nLocalPrice: (0, c.Dl)(o, d),
                    nSuggestedPrice: void 0,
                    bCanSetToFree: !1,
                    appids: a,
                  });
                });
            }
            return {
              rgCurrencyRows: C,
              rgRegionRows: r,
              rgCountryOverrideRows: x,
            };
          }, [s, o, P, h, a]);
        }
        function Qn(s, o) {
          const a = useActiveConversionMethod(),
            h =
              ECurrencyCodeToProposedCurrencyCode(
                k_ECurrencyCodeUSD,
              ).toUpperCase(),
            P = usePriceInCurrency(o, h).nPriceInCents;
          let C = !1;
          if (s && P > 0) {
            for (let r = k_ECurrencyCodeGBP; r < k_ECurrencyCodeMax; ++r) {
              if (!s.BIsSupportCurrencyAndOrRegion(r)) continue;
              const x = ECurrencyCodeToProposedCurrencyCode(r).toUpperCase(),
                y = PricingStore_GetPublishedPrice(o, x),
                j = PricingStore_GetProposedPrice(o, x),
                T = PricingStore_GetLocalOverridePrice(o, x),
                d = s.GetScaledRecommendedPrice(P, r, void 0, a).price;
              C ||= d != (T ?? j ?? y);
            }
            for (let r = k_ERegionCodeCIS; r < k_ERegionCodeMax; ++r) {
              if (!s.BIsSupportCurrencyAndOrRegion(k_ECurrencyCodeUSD, r))
                continue;
              const x = ECurrencyCodeToProposedCurrencyCode(
                  k_ECurrencyCodeUSD,
                  r,
                ).toUpperCase(),
                y = PricingStore_GetPublishedPrice(o, x),
                j = PricingStore_GetProposedPrice(o, x),
                T = PricingStore_GetLocalOverridePrice(o, x),
                d = s.GetScaledRecommendedPrice(
                  P,
                  k_ECurrencyCodeUSD,
                  r,
                  a,
                ).price;
              C ||= d != (T ?? j ?? y);
            }
          }
          return C;
        }
        var Sn = n(25792),
          _ = n(2801),
          S = n(18210),
          fn = n(95146),
          jn = n(40396),
          Dn = n(67829),
          Rn = n(31069),
          zn = n(96434),
          nn = n.n(zn),
          tn = n(81246),
          dn = n(78779),
          Z = n(60351),
          on = n(86336),
          p = n(72609);
        function Ln(s) {
          const o = `${p.TS.PARTNER_BASE_URL}doc/finance/taxfaq`;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)(Z.az, {
                paddingBottom: "4",
                children: [
                  (0, t.jsx)(v.EY, {
                    as: "p",
                    size: "4",
                    color: "text-body",
                    contrast: "subtitle",
                    children: l.g.Localize("#SinglePricingPackage_Intro_1"),
                  }),
                  (0, t.jsx)(v.EY, {
                    as: "p",
                    size: "4",
                    color: "text-body",
                    contrast: "subtitle",
                    children: l.g.Localize("#SinglePricingPackage_Intro_2"),
                  }),
                  (0, t.jsx)(v.EY, {
                    size: "4",
                    color: "text-body",
                    contrast: "subtitle",
                    children: (0, t.jsxs)("ol", {
                      children: [
                        (0, t.jsx)("li", {
                          children: l.g.Localize(
                            "#SinglePricingPackage_Intro_2a",
                          ),
                        }),
                        (0, t.jsx)("li", {
                          children: l.g.Localize(
                            "#SinglePricingPackage_Intro_2b",
                          ),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, t.jsx)(Z.az, {
                paddingBottom: "4",
                children: (0, t.jsx)(v.EY, {
                  children: l.g.LocalizeReact(
                    "#SinglePricingPackage_Desc_2",
                    (0, t.jsx)(on.Y, {
                      href: o,
                      children: l.g.LocalizeReact(
                        "#SinglePricingPackage_Desc_2_Link",
                      ),
                    }),
                  ),
                }),
              }),
              (0, t.jsx)(Z.az, {
                children: (0, t.jsx)(v.EY, {
                  children: l.g.Localize("#SinglePricingPackage_Desc_3"),
                }),
              }),
            ],
          });
        }
        var En = n(74310),
          cn = n(1706),
          b = n(36707),
          Tn = n(88152),
          W = n.n(Tn),
          un = n(7608);
        function Un(s) {
          return s.getValue() == -1 || !s.getValue()
            ? "--"
            : (0, cn.x)(s.getValue(), s.row.original.eCurrencyCode);
        }
        function An(s) {
          const o = s.row.original;
          if (o.nProposedPrice == -1 || !o.nProposedPrice) return "--";
          const a = !o.nPublishedPrice;
          return (0, t.jsx)("span", {
            className: (0, b.A)({
              [W().NewPrice]: a,
              [W().HigherPrice]: !a && o.nProposedPrice > o.nPublishedPrice,
              [W().LowerPrice]: !a && o.nProposedPrice < o.nPublishedPrice,
            }),
            children: (0, cn.x)(o.nProposedPrice, o.eCurrencyCode),
          });
        }
        function Mn(s) {
          return (0, En.F)(s.row.original.strCountryOverride);
        }
        function On(s) {
          const {
              packageID: o,
              strPriceKey: a,
              eRegionCode: h,
              eCurrencyCode: P,
            } = s.row.original,
            { nPriceInCents: C, nProposedPriceInCents: r } = (0, c.xQ)(o, a),
            x = (0, q.Bb)(),
            y = (0, z.cT)(),
            j = (0, E.pd)(m.CS).toUpperCase(),
            T = (0, c.Dl)(o, j) || (0, c.Oc)(o, j) || (0, c.mv)(o, j),
            { nGuidelinesLevel: d } = (0, un.$)(y, x, T, P, h),
            g = (0, c.Ao)(a, C ?? r, d, !0);
          return g == -1 || !g
            ? "--"
            : (0, t.jsxs)("span", {
                className: (0, b.A)({}),
                children: [g, " %"],
              });
        }
        var an = n(57152);
        function Nn(s) {
          const { nPackageID: o } = s;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)(u.s, {
                direction: "column",
                align: "start",
                paddingBottom: "4",
                children: [
                  (0, t.jsx)(F.v, {
                    href: `${p.TS.PARTNER_BASE_URL}pricing/dashboard/?pn=${o}`,
                    children: l.g.Localize("#SinglePackagePricing_Right_Edit"),
                  }),
                  (0, t.jsx)(v.EY, {
                    children: l.g.Localize(
                      "#SinglePackagePricing_Right_Edit_desc",
                    ),
                  }),
                ],
              }),
              (0, t.jsxs)(u.s, {
                direction: "column",
                paddingBottom: "4",
                children: [
                  (0, t.jsx)(an.D, {
                    size: "7",
                    children: l.g.Localize(
                      "#SinglePackagePricing_Right_Help_Title",
                    ),
                  }),
                  (0, t.jsx)(v.EY, {
                    children: l.g.Localize(
                      "#SinglePackagePricing_Right_Help_Desc",
                    ),
                  }),
                  (0, t.jsx)(on.Y, {
                    href: `${p.TS.PARTNER_BASE_URL}doc/store/pricing`,
                    children: l.g.Localize("#SinglePackagePricing_Right_Link"),
                  }),
                ],
              }),
              (0, t.jsxs)(u.s, {
                direction: "column",
                children: [
                  (0, t.jsx)(an.D, {
                    size: "7",
                    children: l.g.Localize("#SinglePackagePricing_Right_FAQ"),
                  }),
                  (0, t.jsxs)(Z.az, {
                    children: [
                      (0, t.jsx)(v.EY, {
                        size: "4",
                        weight: "medium",
                        children: l.g.Localize(
                          "#SinglePackagePricing_Right_FAQ_switching",
                        ),
                      }),
                      (0, t.jsx)("br", {}),
                      (0, t.jsx)(v.EY, {
                        children: l.g.LocalizeReact(
                          "#SinglePackagePricing_Right_FAQ_switching_answer",
                          (0, t.jsx)(on.Y, {
                            href: `${p.TS.PARTNER_BASE_URL}wizard/HelpWithPublishing?issueid=915`,
                            children: l.g.Localize(
                              "#SinglePackagePricing_Right_FAQ_switching_answer_link",
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
        var Hn = n(18715),
          Q = n.n(Hn),
          In = n(58534),
          Bn = n(85599);
        function Fn(s) {
          const { nPackageID: o } = s,
            a = (0, c.d$)(o),
            [h, P, C] = (0, w.uD)(),
            r = (0, c.fr)(o),
            [x, y] = (0, i.useState)(!1);
          return a
            ? (0, t.jsxs)("div", {
                className: (0, b.A)(Q().ToolbarInfo, Q().Visible),
                children: [
                  (0, t.jsx)("div", {
                    className: Q().ProposalStatus,
                    children: (0, t.jsx)(tn.QD, { packageID: o }),
                  }),
                  (0, t.jsxs)("div", {
                    className: Q().Buttons,
                    children: [
                      (0, t.jsx)(tn.m2, { packageID: o, bShowCancel: !1 }),
                      (0, t.jsx)(In.$n, {
                        onClick: P,
                        className: (0, b.A)(Q().Button),
                        children: (0, S.we)(
                          "#PricingDashboard_CancelPriceProposal",
                        ),
                      }),
                      (0, t.jsx)(_.EN, {
                        active: h,
                        children: (0, t.jsx)(_.o0, {
                          strTitle: (0, S.we)(
                            "#PricingDashboard_CancelPriceProposal",
                          ),
                          strDescription: (0, S.we)("#Dialog_AreYouSure"),
                          closeModal: C,
                          onOK: async () => {
                            y(!0), await r(), y(!1), window.location.reload();
                          },
                          children:
                            x &&
                            (0, t.jsx)(Bn.t, {
                              string: (0, S.we)("#ImageUpload_Processing"),
                            }),
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : null;
        }
        const N = (0, G.FB)();
        function Gn(s) {
          const { nPackageID: o, appids: a } = s,
            h = (0, c.Zz)();
          (0, jn.h)(h);
          const P = (0, dn.cK)(),
            C = Number.parseInt(o),
            r = (0, z.cT)();
          return (0, t.jsx)(Sn.tH, {
            children: (0, t.jsxs)(fn.rK, {
              fnBLocalChangesExist: h,
              fnWarnUser: P,
              children: [
                (0, t.jsxs)("div", {
                  className: "adminTwoColCtn",
                  children: [
                    (0, t.jsx)("div", {
                      className: "adminLeftCol",
                      children: (0, t.jsx)("div", {
                        className: "colSection",
                        children: (0, t.jsx)(Ln, {}),
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: "adminRightCol",
                      children: (0, t.jsx)("div", {
                        className: "panel",
                        children: (0, t.jsx)(Nn, { nPackageID: C }),
                      }),
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "",
                  children: (0, t.jsx)(Yn, {
                    nPackageID: C,
                    appids: a.map(Number.parseInt),
                  }),
                }),
              ],
            }),
          });
        }
        function Yn(s) {
          const { nPackageID: o, appids: a } = s,
            h = (0, z.cT)(),
            {
              rgCurrencyRows: P,
              rgRegionRows: C,
              rgCountryOverrideRows: r,
            } = yn(h, o, a),
            x = (0, c.d$)(o),
            y = !!x,
            j = x?.eState == B.Zo,
            { fnApplyGuidelines: T } = (0, z.gC)((0, c.$i)());
          (0, i.useEffect)(() => {
            (0, vn.Sm)([o]);
          }, [o]);
          const d = [
            N.accessor("nPublishedPrice", {
              header: (0, S.we)("#PackagePricing_Col_CurPrice"),
              meta: { cellClassname: K()(W().CurrentPrice) },
              size: 120,
              cell: Un,
            }),
            N.accessor(y ? "nProposedPrice" : "strPriceKey", {
              header: (0, S.we)(
                j
                  ? "#PackagePricing_Col_Approved"
                  : "#PackagePricing_Col_Proposal",
              ),
              meta: { cellClassname: K()(W().ProposedPrice) },
              size: 280,
              cell: y ? An : Rn.sh,
            }),
            N.accessor(y ? "nProposedPrice" : "strPriceKey", {
              id: "nMaxDiscount",
              header: (0, S.we)("#PackagePricing_Col_MaxDiscount"),
              meta: {
                cellClassname: K()(W().MaxDiscount),
                strHeaderTooltip: (0, S.we)(
                  "#PackagePricing_Col_MaxDiscount_ttip",
                ),
              },
              size: 150,
              cell: On,
            }),
          ];
          return P.length == 0 || C.length == 0
            ? null
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  y
                    ? (0, t.jsx)(t.Fragment, {
                        children: (0, t.jsx)("div", {
                          className: "colSection",
                          children: (0, t.jsx)(tn.RW, { packageID: o }),
                        }),
                      })
                    : (0, t.jsx)(t.Fragment, {
                        children: (0, t.jsx)("div", {
                          className: "colSection",
                          children: (0, t.jsxs)(u.s, {
                            direction: "row",
                            gap: "5",
                            children: [
                              (0, t.jsx)(U.J, {
                                fnConversionMethodSelected: (g) => {
                                  T(o, (0, c.FR)(o, "USD"), g);
                                },
                              }),
                              (0, t.jsxs)(u.s, {
                                direction: "column",
                                children: [
                                  (0, t.jsx)(v.EY, {
                                    size: "3",
                                    children: l.g.Localize(
                                      "#PricingDashboard_Select_Price",
                                    ),
                                  }),
                                  (0, t.jsx)(Kn, { usdRow: P[m.CS] }),
                                ],
                              }),
                              (0, t.jsxs)(u.s, {
                                direction: "column",
                                align: "start",
                                children: [
                                  (0, t.jsxs)(v.EY, {
                                    size: "3",
                                    children: [
                                      (0, S.we)(
                                        "#PricingDashboard_ApplyGuidelinesDialog_Context_Short",
                                      ),
                                      (0, t.jsx)(en.o, {
                                        tooltip: (0, S.we)(
                                          "#PricingDashboard_ApplyGuidelinesDialog_Context",
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, t.jsx)(Wn, {
                                    nPackageID: o,
                                    oPricingGuideline: h,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                  (0, t.jsxs)("div", {
                    className: "colSection",
                    children: [
                      (0, t.jsx)(I.k, {
                        data: P,
                        className: K()(
                          Y().DefaultFancyTable,
                          Y().NoColumnBorders,
                          nn().PackagePricingContext,
                        ),
                        columns: [
                          N.accessor("eCurrencyCode", {
                            header: (0, S.we)("#PackagePricing_Col_Currency"),
                            size: 200,
                            cell: k,
                          }),
                          ...d,
                        ],
                        getRowKey: (g, f) => `${f.eCurrencyCode}`,
                        nItemHeight: 20,
                        stickyHeader: !0,
                      }),
                      (0, t.jsx)(I.k, {
                        data: C,
                        className: K()(
                          Y().DefaultFancyTable,
                          Y().NoColumnBorders,
                          nn().PackagePricingContext,
                        ),
                        columns: [
                          N.accessor("eRegionCode", {
                            header: (0, S.we)("#PackagePricing_Col_Region"),
                            size: 200,
                            cell: gn,
                          }),
                          N.accessor("eCurrencyCode", {
                            header: (0, S.we)("#PackagePricing_Col_Currency"),
                            size: 100,
                            cell: k,
                          }),
                          ...d,
                        ],
                        getRowKey: (g, f) => `${f.eRegionCode}`,
                        nItemHeight: 20,
                        stickyHeader: !0,
                      }),
                      r.length > 0 &&
                        (0, t.jsx)(I.k, {
                          data: r,
                          className: K()(
                            Y().DefaultFancyTable,
                            Y().NoColumnBorders,
                            nn().PackagePricingContext,
                          ),
                          columns: [
                            N.accessor("strCountryOverride", {
                              header: (0, S.we)("#PackagePricing_Col_Country"),
                              size: 200,
                              cell: Mn,
                            }),
                            N.accessor("eCurrencyCode", {
                              header: (0, S.we)("#PackagePricing_Col_Currency"),
                              size: 100,
                              cell: k,
                            }),
                            ...d,
                          ],
                          getRowKey: (g, f) => `${f.strCountryOverride}`,
                          nItemHeight: 20,
                          stickyHeader: !0,
                        }),
                      (0, t.jsx)(dn.BL, { bReloadPageOnSave: !0 }),
                      (0, t.jsx)(Fn, { nPackageID: o }),
                    ],
                  }),
                ],
              });
        }
        function Kn(s) {
          const { usdRow: o } = s,
            { fnApplyGuidelines: a } = (0, z.gC)((0, c.$i)());
          return (0, t.jsx)(hn.e, {
            strButton: l.g.Localize("#PricingDashboard_Select_Price_button"),
            strTooltip: l.g.Localize(
              "#PricingDashboard_Select_Price_button_ttip",
            ),
            fnGetUSDPriceInCents: () => (0, c.FR)(o.packageID, "USD"),
            fnOnUpdate: (h) => a(o.packageID, h),
            strDescription: l.g.Localize(
              "#PricingDashboard_GuidelinesPickerDescription_New",
            ),
            appids: o.appids,
            nPackageID: o.packageID,
            bCanSetToFree: o.bCanSetToFree,
          });
        }
        function Wn(s) {
          const { nPackageID: o, oPricingGuideline: a } = s,
            [h, P, C] = (0, w.uD)(),
            r = (0, w.CH)();
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(F.$, {
                onClick: P,
                children: (0, S.we)(
                  "#PricingDashboard_ApplyGuidelinesDialog_Button",
                ),
              }),
              (0, t.jsx)(_.EN, {
                active: h,
                children: (0, t.jsx)(Dn.i, {
                  closeModal: C,
                  fnOnApply: r,
                  singlePackage: !0,
                }),
              }),
            ],
          });
        }
        var $n = n(30985);
        function Vn(s) {
          return (
            i.use((0, $n.u)()),
            (0, t.jsx)(M.dO, {
              children: (0, t.jsxs)(q.jY, {
                children: [
                  (0, t.jsx)(M.qh, {
                    path: H.PriceEdit(":packageid"),
                    children: (0, t.jsx)(R.X, {
                      config: {
                        "packageadmin-price-editor": (o) =>
                          (0, t.jsx)(Gn, { ...o }),
                      },
                    }),
                  }),
                  (0, t.jsx)(M.qh, { component: O.a }),
                ],
              }),
            })
          );
        }
      },
      57152: (D, A, n) => {
        "use strict";
        n.d(A, { D: () => z });
        var t = n(7850),
          i = n(39049),
          M = n(8928),
          H = n(15252),
          O = n(69289),
          R = n(90626);
        function u(l) {
          const { depth: L } = useContext(v);
          return jsx(v.Provider, {
            value: { depth: L + 1 },
            children: jsx(Box, { ...l }),
          });
        }
        const v = R.createContext({ depth: 0 });
        function F() {
          return (0, R.useContext)(v).depth;
        }
        var G = n(3877),
          I = n(64238),
          m = n.n(I);
        function z(l) {
          const { level: L = "auto", className: e, color: V } = l,
            E = F(),
            J = U(L, E);
          return (0, t.jsx)(J, {
            ...(0, O.mz)({ ...l, className: m()((0, G.T)(), i.Heading, e) }, B),
          });
        }
        const B = [
          ...H.U6,
          ...M.L,
          {
            prop: "size",
            responsive: !0,
            className: (l) => i[`HeadingSize-${l}`],
          },
        ];
        function U(l, L) {
          if (l === "auto" && L === 0) return "h1";
          const e = l === "auto" ? L.toString() : l;
          return /^[1-6]$/.test(e)
            ? "h" + e
            : l === "auto"
              ? (console.error(
                  '<Section> nesting has exceeded "h6" for headings.',
                ),
                "h6")
              : (console.error(
                  `Attempt to render invalid heading level, "${e}".`,
                ),
                "h1");
        }
      },
      86336: (D, A, n) => {
        "use strict";
        n.d(A, { W: () => I, Y: () => F });
        var t = n(7850),
          i = n(50122),
          M = n.n(i),
          H = n(15252),
          O = n(69289),
          R = n(70182),
          u = n(3166),
          v = n(2333);
        function F(m) {
          const { underline: z = "auto", ...B } = m,
            U = (0, O.mz)({ ...B, underline: z, className: i.TextLink }, G);
          return (0, t.jsx)(v.o, { ...U });
        }
        const G = [
          ...H.Ae,
          { prop: "underline", className: (m) => i[`Underline-${m}`] },
        ];
        function I(m) {
          const { underline: z = "auto", focusable: B, navProps: U, ...l } = m,
            L = (0, u.Qn)(),
            e = B ?? U?.focusable ?? !!l.onClick,
            V = (0, t.jsx)("span", {
              role: "button",
              ...(0, O.mz)(
                { ...l, underline: z, className: i.TextLinkButton },
                G,
              ),
            });
          return L && (e || U)
            ? (0, t.jsx)(R.J, { ...(U || {}), focusable: e, children: V })
            : V;
        }
      },
      74310: (D, A, n) => {
        "use strict";
        n.d(A, { F: () => O });
        var t = n(37901);
        const i = {};
        (i.arabic = () => n.e(67062).then(n.t.bind(n, 67062, 19))),
          (i.brazilian = () => n.e(56144).then(n.t.bind(n, 56144, 19))),
          (i.bulgarian = () => n.e(79311).then(n.t.bind(n, 79311, 19))),
          (i.czech = () => n.e(20949).then(n.t.bind(n, 20949, 19))),
          (i.danish = () => n.e(98935).then(n.t.bind(n, 98935, 19))),
          (i.dutch = () => n.e(78064).then(n.t.bind(n, 78064, 19))),
          (i.english = () => n.e(17110).then(n.t.bind(n, 17110, 19))),
          (i.finnish = () => n.e(2581).then(n.t.bind(n, 2581, 19))),
          (i.french = () => n.e(39078).then(n.t.bind(n, 39078, 19))),
          (i.german = () => n.e(6840).then(n.t.bind(n, 6840, 19))),
          (i.greek = () => n.e(69242).then(n.t.bind(n, 69242, 19))),
          (i.hungarian = () => n.e(13595).then(n.t.bind(n, 13595, 19))),
          (i.indonesian = () => n.e(52666).then(n.t.bind(n, 52666, 19))),
          (i.italian = () => n.e(69814).then(n.t.bind(n, 69814, 19))),
          (i.japanese = () => n.e(22329).then(n.t.bind(n, 22329, 19))),
          (i.koreana = () => n.e(60033).then(n.t.bind(n, 60033, 19))),
          (i.latam = () => n.e(32313).then(n.t.bind(n, 32313, 19))),
          (i.malay = () => n.e(35186).then(n.t.bind(n, 35186, 19))),
          (i.norwegian = () => n.e(86498).then(n.t.bind(n, 86498, 19))),
          (i.polish = () => n.e(5383).then(n.t.bind(n, 5383, 19))),
          (i.portuguese = () => n.e(93451).then(n.t.bind(n, 93451, 19))),
          (i.romanian = () => n.e(47265).then(n.t.bind(n, 47265, 19))),
          (i.russian = () => n.e(22115).then(n.t.bind(n, 22115, 19))),
          (i.sc_schinese = () => n.e(3913).then(n.t.bind(n, 3913, 19))),
          (i.schinese = () => n.e(64698).then(n.t.bind(n, 64698, 19))),
          (i.spanish = () => n.e(64230).then(n.t.bind(n, 64230, 19))),
          (i.swedish = () => n.e(83999).then(n.t.bind(n, 83999, 19))),
          (i.tchinese = () => n.e(23465).then(n.t.bind(n, 23465, 19))),
          (i.thai = () => n.e(74692).then(n.t.bind(n, 74692, 19))),
          (i.turkish = () => n.e(89430).then(n.t.bind(n, 89430, 19))),
          (i.ukrainian = () => n.e(73792).then(n.t.bind(n, 73792, 19))),
          (i.vietnamese = () => n.e(21305).then(n.t.bind(n, 21305, 19)));
        async function M(R) {
          if (i[R]) return i[R]();
        }
        const H = (0, t.l)(M);
        function O(R) {
          return H.Localize(`#Steam_Country_${R}`);
        }
      },
      88152: (D) => {
        D.exports = {
          NewPrice: "_3xrKIJ4u3oGwIbDNHLiE3U",
          HigherPrice: "rdMe4z7G3RiS3aOmPBXjp",
          LowerPrice: "HFkBG6GEWlzLQZ3MWCZfy",
          FlexColGroup: "_98APa3FIHhT6HoHQPTdP-",
          CurrentPrice: "_2GBqA5FVPnXDKN337UQTQF",
          ProposedPrice: "_1lW7HuIHz1dVNCRWv6gDDu",
          MaxDiscount: "x7PYG4YYyYUVdJCTlosQh",
          PriceUpdateOptionsGroup: "_29xcvKUrOD3qIkctp2Fo_N",
          FreeSettingCtn: "_1kDnDjWEynufWnYI9AFl3l",
        };
      },
      39049: (D) => {
        D.exports = {
          Heading: "_12ldq1_X5RuLWAAs_ODwt7",
          "HeadingSize-1": "-YHuRmP6nUp0IqPQ4F3wk",
          "HeadingSize-2": "_20m6yPkrPwQ8XwlhPdMtqu",
          "HeadingSize-3": "_2jvih9p3Mc3zUn2nnxzDv7",
          "HeadingSize-4": "_1zvMJY9dUjwMSI0j5QoEdq",
          "HeadingSize-5": "_1196Oisy8jDA4szPu-KrKP",
          "HeadingSize-6": "R1W-zMFN4WGw9JK48Yqez",
          "HeadingSize-7": "Ena8Nl7MJg7YAYsWql_jo",
          "HeadingSize-8": "jyf9-rlT4iFrHQOAVn298",
          "HeadingSize-9": "_3L0vs4_Y96AtsR3P5GUkUa",
        };
      },
      50122: (D) => {
        D.exports = {
          TextLink: "_1DLGHwAfYnbFVIwbZjO2cn",
          TextLinkButton: "_30P9kUCljAZzX5fl1DHGJe",
          Truncate: "_1FVRWG5uD8VhzoEiOZWrEo",
          "Underline-always": "_3ASRyX4FTT_eMM5S5yrkwK",
          "Underline-never": "_1gsOIvG4APXjSra-_55rdz",
          "Underline-auto": "_2OgYmw12nDHXtyT9za9yzL",
          "Underline-hover": "_3RITvcDUZq-hpnXRpiayfs",
        };
      },
      32232: (D) => {
        D.exports = {
          DefaultFancyTable: "_3OVilOdb2tSBtG90cwqGUo",
          NoColumnBorders: "_3C2djc2HxWtHJaUqVq-cKt",
        };
      },
    },
  ]);
})();
