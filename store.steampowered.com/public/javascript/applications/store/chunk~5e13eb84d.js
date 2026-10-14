/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [54409],
    {
      92025: (O, y, a) => {
        "use strict";
        a.d(y, { fp: () => s, vm: () => R });
        var e = a(48156);
        const E = null;
        function o(t) {
          return E.includes(t);
        }
        function A(t) {
          return o(t) ? t : void 0;
        }
        function s(t) {
          return t
            ? t === "game" ||
                t === "dlc" ||
                t === "software" ||
                t === "music" ||
                t === "application" ||
                t === "demo" ||
                t === "hardware" ||
                t === "mod" ||
                t == "video" ||
                t === "beta" ||
                t === "advertising"
            : !1;
        }
        function R(t) {
          return t == null
            ? !1
            : t == e.uE.HT ||
                t == e.uE._i ||
                t == e.uE.Sv ||
                t == e.uE.Ov ||
                t == e.uE.ue ||
                t == e.uE.Hk ||
                t == e.uE.RA ||
                t == e.uE.Wz ||
                t == e.uE.Vi ||
                t == e.uE.pl;
        }
        function h(t) {
          return t === "music" || t === "dlc";
        }
      },
      4705: (O, y, a) => {
        "use strict";
        a.d(y, { w: () => K });
        var e = a(7850),
          E = a(92025),
          o = a(48156),
          A = a(40358),
          s = a(24179),
          R = a(41944),
          h = a(63803),
          t = a(76532),
          u = a.n(t),
          v = a(11243),
          L = a(36707),
          I = a(18210),
          H = a(92264),
          B = a(27284),
          C = a(48357),
          b = a(6698);
        function K(_) {
          const {
              id: P,
              bShowDemoButton: T,
              bShowPurchaseOptionsButton: S,
              fnOnPurchaseOptionsClick: w,
              bHidePrice: U,
              bShowDeckCompatibilityDialog: V,
              eHardwareCompatibilityDisplay: Y,
              className: G,
              bShowCartButton: J,
            } = _,
            { data: f } = (0, A.J$)(P),
            { data: $ } = (0, A.by)(P),
            { data: F } = (0, A.Q_)(P),
            { bIsOwned: k } = (0, s.ZJ)(P),
            [q, ee] = (0, b.zG)(V, Y);
          if (!f) return null;
          const se =
              (f.type === o.uE.ue && !$?.is_coming_soon) ||
              (f.related_items?.demo_appid &&
                f.related_items?.demo_appid.length > 0),
            ae = (0, E.vm)(f.type),
            te = T && ae && se;
          let Q = null;
          if (!k && F?.is_free_to_keep && F?.free_to_keep_ends) {
            const X = F.free_to_keep_ends,
              le = (0, I.we)(
                "#Sale_default_label_Free_Promo_Description_Short",
                (0, I.$z)(X) + " @ " + (0, H.KC)(X, { bForce24HourClock: !1 }),
              );
            Q = (0, e.jsxs)("div", {
              className: u().PurchaseOptionDetails,
              children: [
                le,
                (0, e.jsx)(v.o, {
                  tooltip: (0, I.we)(
                    "#Sale_default_Tooltip_Free_Promo_Limitation",
                  ),
                }),
              ],
            });
          }
          return (0, e.jsxs)("div", {
            className: (0, L.A)(u().StoreActionWidgetContainer, G),
            children: [
              Q,
              (0, e.jsxs)("div", {
                className: u().StoreSalePriceActionWidgetContainer,
                children: [
                  !!te && (0, e.jsx)(B.j, { id: P, className: u().Action }),
                  !U &&
                    f.type !== o.uE.ue &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        !!(S && !f.is_free) &&
                          (0, e.jsx)(l, { fnOnPurchaseOptionsClick: w }),
                        !!(J && !f.is_free) &&
                          (0, e.jsx)(h.h, { id: P, className: "CartBtn" }),
                      ],
                    }),
                  !U && (0, e.jsx)(C.NF, { id: P }),
                  q && (0, e.jsx)(R.Pj, { id: P, compatibility: ee }),
                ],
              }),
            ],
          });
        }
        function l(_) {
          return (0, e.jsx)("div", {
            className: u().Action,
            onClick: _.fnOnPurchaseOptionsClick,
            children: (0, e.jsx)("span", {
              children: (0, I.we)(
                "#EventDisplay_CallToAction_ShowPurchaseOptions_Button",
              ),
            }),
          });
        }
      },
      61431: (O, y, a) => {
        "use strict";
        a.d(y, { p: () => Oe });
        var e = a(7850),
          E = a(24660),
          o = a(19298),
          A = a(20169),
          s = a(48156),
          R = a(87249),
          h = a(83784),
          t = a(3348),
          u = a(81055),
          v = a(40358),
          L = a(29522),
          I = a(68094),
          H = a(72865),
          B = a(24179),
          C = a(90626),
          b = a(21690),
          K = a(76532),
          l = a.n(K),
          _ = a(38081),
          P = a.n(_),
          T = a(96155),
          S = a(36707),
          w = a(18210),
          U = a(3166),
          V = a(80104),
          Y = a(44267),
          G = a(80702),
          J = a(88743),
          f = a(39905),
          $ = a(21721);
        const F = 6;
        function k(m) {
          const { id: d, bHideInLibraryApps: r } = m,
            { data: i } = (0, v.J$)(d),
            p = i?.item_type == s.c6.xO,
            { data: N } = (0, B.$Y)(),
            g = C.useMemo(() => {
              if (i)
                return i.item_type === s.c6.RD || i.item_type === s.c6.xO
                  ? (i.included_appids || [])
                      .filter((c) => !p || !r || !N?.has(c))
                      .map((c) => ({ appid: c }))
                  : (console.error(
                      "ContentsPreviewList unexpected store item type:",
                      i.item_type,
                    ),
                    null);
            }, [i, r, p, N]);
          if (!g || g.length == 0) return null;
          const j = g.length;
          let D = f.Z.LocalizePlural("#Sale_ContentPreview", j);
          if (p && i) {
            const c = i.included_appids?.length || 0;
            c != j &&
              (D = f.Z.Localize("#Sale_Bundle_CompletePartialSet", c - j, c));
          }
          return (0, e.jsxs)("div", {
            className: l().BundleContentPreview,
            children: [
              (0, e.jsxs)("div", {
                className: l().ContentsCount,
                children: [
                  p &&
                    (0, e.jsx)("span", {
                      className: l().BundleTag,
                      children: f.Z.Localize("#AppType_bundle"),
                    }),
                  D,
                ],
              }),
              (0, e.jsx)("div", {
                className: l().PreviewCtn,
                children: g
                  .slice(0, F)
                  .map((c) =>
                    (0, e.jsx)(q, { id: c }, `preview${(0, I.ER)(c)}`),
                  ),
              }),
            ],
          });
        }
        function q(m) {
          const { id: d } = m,
            { data: r } = (0, v.f2)(d),
            { data: i } = (0, v.U2)(d);
          if (!r || !i) return null;
          const p = (0, $.b0)(r, "small_capsule");
          return (0, e.jsx)(G.Q, {
            id: d,
            className: l().PreviewItem,
            hoverProps: { direction: "right", style: { minWidth: "350px" } },
            children: (0, e.jsx)("img", {
              src: p,
              className: l().PreviewImg,
              loading: "lazy",
              alt: i.name || "",
            }),
          });
        }
        var ee = a(29245),
          se = a(48357),
          ae = a(46727),
          te = a(96378),
          Q = a(5827),
          X = a(75233),
          le = a(41188);
        function Ne(m) {
          const [d, r] = (0, C.useState)(void 0),
            { data: i } = (0, v.J$)(m),
            { data: p } = (0, v.xz)(m),
            N = (0, X.jE)(),
            g = (0, Q.eG)();
          return (
            (0, C.useEffect)(() => {
              if (i) {
                if (p && p.length > 0) r(p);
                else if (i.related_items?.parent_appid) {
                  const j = { appid: i.related_items?.parent_appid };
                  (async () => {
                    const c = await N.fetchQuery((0, v.Ec)(g, j));
                    c && c.length > 0 && r(c);
                  })();
                }
              }
            }, [g, N, i, p]),
            d
          );
        }
        function Ie(m) {
          const { id: d } = m;
          return d ? (0, e.jsx)(Se, { id: d }) : null;
        }
        function Se(m) {
          const { id: d } = m,
            r = Ne(d);
          return r
            ? (0, e.jsx)("div", {
                className: l().StoreSaleWidgetTags,
                children: r
                  .slice(0, 10)
                  .map((i) =>
                    (0, e.jsx)(
                      le.p,
                      { tagid: i.tagid, className: l().AppTag },
                      "tag_" + i.tagid,
                    ),
                  ),
              })
            : null;
        }
        var De = a(77459),
          Ee = a(16179),
          de = a(84607),
          Ae = a(4705),
          Re = a(86298),
          ce = a(6698);
        function Oe(m) {
          const {
              id: d,
              type: r,
              bShowDemoButton: i,
              bPreferDemoStorePage: p,
              bHidePrice: N,
              bUseSubscriptionLayout: g,
              bHidePlatforms: j,
              bHideContainedApps: D,
              bAllowTwoLinesForHeader: c,
              bShowReviewSummary: oe,
              bShowDeckCompatibilityDialog: ie,
              eHardwareCompatibilityDisplay: ne,
              bAutoFocus: Te,
              fnOnClickOverride: M,
              bIsMarketingMessage: me,
              bPreferAssetWithoutOverride: he,
            } = m,
            n = (0, J.zl)(d, r),
            [pe, Ve] = (0, C.useState)(!1),
            we = (0, H.n9)(),
            { data: x, isPending: Me } = (0, v.U2)(n),
            { data: ve } = (0, v.Q_)(n),
            { data: ue } = (0, v.by)(n),
            { data: We } = (0, B.$Y)(),
            Le = (0, L._Z)(n),
            Z = (0, C.useRef)(null),
            [xe, He] = (0, C.useState)(!1),
            Pe = (0, U.Qn)();
          (0, C.useEffect)(() => {
            Z.current && He(Z.current.offsetWidth < 370);
          }, [Z]);
          const be = (0, C.useMemo)(
              () => (p && x && (0, h.J)(x) ? { appid: (0, h.S)(x)[0] } : n),
              [p, n, x],
            ),
            { strStoreURL: je, snr: Ke } = (0, Ee.x)(x, p);
          if (!x)
            return Me
              ? (0, e.jsx)(te.h, { capsules_per_row: [1], is_item_browser: !0 })
              : null;
          const re = x.included_appids?.length || 0,
            Ue = x.included_appids?.filter((Ze) => We?.has(Ze))?.length || 0,
            Fe = x.item_type == s.c6.xO && !!ve?.must_purchase_as_set,
            W = !D && re > 1,
            Ce = x.item_type == s.c6.RD && re == 1,
            z = x.item_type == s.c6.qI || Ce,
            fe = Ce && x.appid,
            ze = x.name || "",
            Ge = (0, u.Nq)(ue, ve),
            Qe = Pe || !ue?.is_coming_soon || Ge,
            [Xe, ge] = (0, ce.zG)(ie, ne);
          return (0, e.jsxs)(o.Z, {
            className: (0, S.A)({
              [l().StoreSaleWidgetOuterContainer]: !0,
              [l().AllowTwoLineHeader]: c,
              StoreSaleWidgetOuterContainer: !0,
            }),
            "flow-children": "grid",
            navEntryPreferPosition: A.iU.PREFERRED_CHILD,
            autoFocus: Te,
            navKey: "preview_widget_" + (0, I.ER)(n),
            children: [
              (0, e.jsx)(ce.oj, {
                appid: z && "appid" in n ? n.appid : void 0,
                children: (0, e.jsxs)(E.ml, {
                  onClick: me ? M : void 0,
                  className: (0, S.A)({
                    [l().StoreSaleWidgetContainer]: !0,
                    [l().SaleItemDefaultCapsuleDisplay]: !0,
                    [l().MarketingMessage]: me,
                  }),
                  ...(0, Re.S)(x, we, Pe, !!p, void 0, M),
                  preferredFocus: W,
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, S.A)(l().StoreSaleWidgetHalfLeft),
                      children: (0, e.jsx)(ye, {
                        id: be,
                        strURL: je,
                        children: (0, e.jsxs)("div", {
                          className: l().StoreSaleWidgetImage,
                          children: [
                            (0, e.jsx)(ae.V, { appids: Le }),
                            (0, e.jsx)(de.a, {
                              id: n,
                              imageType: "header",
                              bPreferAssetWithoutOverride: he,
                            }),
                            (0, e.jsx)(T.J, { id: n }),
                            (0, e.jsx)(R.mj, {
                              id: n,
                              active: n && pe,
                              bIsHoverMode: !0,
                              eGrowOnActivate: R.C0.k_ETrailerGrowAmount_Medium,
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, e.jsxs)("div", {
                      className: (0, S.A)({
                        [l().StoreSaleWidgetRight]: !0,
                        [l().Bundle]: W,
                      }),
                      children: [
                        !!(z && !M) &&
                          (0, e.jsx)(Y.E, {
                            id: n,
                            classOverride: (0, S.A)(
                              P().WishlistButtonNotTop,
                              "WishlistButton",
                            ),
                            snr: Ke,
                          }),
                        (0, e.jsx)("div", {
                          className: l().TitleCtn,
                          children: (0, e.jsx)("a", {
                            href: M ? void 0 : je,
                            target: U.TS.IN_CLIENT ? void 0 : "_blank",
                            onClick: M,
                            children: (0, e.jsx)("div", {
                              className: (0, S.A)(
                                l().StoreSaleWidgetTitle,
                                "StoreSaleWidgetTitle",
                              ),
                              children: ze,
                            }),
                          }),
                        }),
                        !W && (0, e.jsx)(Ie, { id: n }),
                        (0, e.jsxs)("div", {
                          className: l().WidgetReleaseDateAndPlatformCtn,
                          ref: Z,
                          children: [
                            z && (0, e.jsx)(Be, { id: n }),
                            !W &&
                              !j &&
                              n &&
                              (0, e.jsxs)(e.Fragment, {
                                children: [
                                  (0, e.jsx)(ee.Q, {
                                    id: n,
                                    bMinimizePlatforms: xe,
                                    bHideWindows: xe,
                                  }),
                                  !!(Xe && x.item_type == s.c6.qI) &&
                                    (0, e.jsx)(b.oc, {
                                      eHWCompat: ge,
                                      className: l().DeckCompatIcon,
                                      id: n,
                                    }),
                                ],
                              }),
                          ],
                        }),
                        !W &&
                          oe &&
                          n &&
                          (0, e.jsx)("div", {
                            className: l().ReviewScores,
                            children: (0, e.jsx)(V.J, { id: n }),
                          }),
                        W &&
                          n &&
                          (0, e.jsx)(k, {
                            id: n,
                            bHideInLibraryApps:
                              !Fe && x.item_type == s.c6.xO && Ue < re,
                          }),
                        !!z && (0, e.jsx)(_e, { id: n }),
                        M
                          ? (0, e.jsx)("div", {
                              className: l().StoreActionWidgetContainer,
                              children: (0, e.jsx)("div", {
                                className:
                                  l().StoreSalePriceActionWidgetContainer,
                                children: (0, e.jsx)(se.NF, { id: n }),
                              }),
                            })
                          : (0, e.jsx)(e.Fragment, {
                              children:
                                g && z && fe
                                  ? (0, e.jsx)(De.E, {
                                      appid: fe,
                                      bIsMuted: !!pe,
                                    })
                                  : (0, e.jsx)(Ae.w, {
                                      id: n,
                                      bShowDemoButton: i,
                                      bHidePrice: N,
                                      bHideWishlistButton: Qe,
                                      eHardwareCompatibilityDisplay: ge,
                                    }),
                            }),
                        (0, e.jsx)("div", {
                          className: l().StoreSaleWidgetBgTint,
                          children: (0, e.jsx)(de.a, {
                            id: n,
                            bPreferAssetWithoutOverride: he,
                            imageType: "header",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              !!(m.strReason && m.strReason.length > 0) &&
                (0, e.jsx)("div", {
                  className: l().RecommendationReason,
                  children: m.strReason,
                }),
            ],
          });
        }
        function ye(m) {
          const { id: d, strURL: r, children: i } = m;
          return "appid" in d
            ? (0, e.jsxs)(G.Q, { id: d, children: [i, " "] })
            : (0, e.jsx)("a", { href: r, children: i });
        }
        function Be(m) {
          const { id: d } = m,
            { data: r } = (0, v.by)(d);
          return r
            ? (0, e.jsx)("div", {
                className: l().StoreSaleWidgetRelease,
                children: (0, t.CC)(r),
              })
            : null;
        }
        function _e(m) {
          const { id: d } = m,
            { data: r } = (0, v.U2)(d),
            { data: i } = (0, v.Q_)(d),
            { data: p } = (0, v.wl)(d),
            { data: N } = (0, B.$Y)();
          if (!r || !p || !p.short_description || !N) return null;
          const g = i?.discount_pct || 0,
            j = r.included_appids?.length || 0,
            D = r.included_appids?.filter((ne) => N?.has(ne))?.length || 0;
          let c = p.short_description;
          const oe = r.item_type == s.c6.RD && j == 1,
            ie = r.item_type == s.c6.xO && !!i?.must_purchase_as_set;
          return (
            (r.item_type == s.c6.xO || (r.item_type == s.c6.RD && !oe)) &&
              (!ie && D > 0 && D < j
                ? (c = (0, w.we)("#Sale_Bundle_CompletePartialSet", D, j))
                : (c =
                    g > 0
                      ? (0, w.we)("#Sale_BundleSave_WithDiscount", g, j)
                      : (0, w.we)("#Sale_BundleSave", j))),
            (0, e.jsx)("div", {
              className: (0, S.A)(
                l().StoreSaleWidgetShortDesc,
                "StoreSaleWidgetShortDesc",
              ),
              children:
                c.startsWith("#") && c.indexOf(" ") == -1
                  ? (0, e.jsx)("span", {
                      className: l().LocalizationSpan,
                      children: (0, w.oW)(
                        c,
                        (0, e.jsx)("i", {}),
                        (0, e.jsx)("i", {}),
                        (0, e.jsx)("i", {}),
                        (0, e.jsx)("i", {}),
                      ),
                    })
                  : c,
            })
          );
        }
      },
      96378: (O, y, a) => {
        "use strict";
        a.d(y, { h: () => R });
        var e = a(7850),
          E = a(19298),
          o = a(36707),
          A = a(66532),
          s = a.n(A);
        function R(t) {
          const {
            capsules_per_row: u,
            is_generic: v,
            is_generic_trailer: L,
            is_event_dash_row: I,
            is_trailer_carousel: H,
            is_spotlights: B,
            is_item_browser: C,
            is_maincap: b,
            is_expanded_maincap: K,
            is_expanded_display: l,
            show_auto_advance_bar: _,
          } = t;
          if (!u) return null;
          if (v)
            return (0, e.jsx)(h, {
              children: (0, e.jsx)("div", {
                className: s().PlaceholderBox,
                children: (0, e.jsx)("div", { className: s().ShineCtn }),
              }),
            });
          if (L)
            return (0, e.jsx)(h, {
              children: (0, e.jsx)("div", {
                className: s().PlaceholderVideo,
                children: (0, e.jsx)("div", { className: s().ShineCtn }),
              }),
            });
          if (H)
            return (0, e.jsxs)(h, {
              children: [
                (0, e.jsxs)("div", {
                  className: s().TrailerCarouselRow,
                  children: [
                    (0, e.jsx)("div", {
                      className: s().VideoPlaceholder,
                      children: (0, e.jsx)("div", { className: s().ShineCtn }),
                    }),
                    (0, e.jsx)("div", {
                      className: s().ItemDescPlaceholer,
                      children: (0, e.jsx)("div", { className: s().ShineCtn }),
                    }),
                  ],
                }),
                _ &&
                  (0, e.jsx)("div", {
                    className: s().AutoAdvanceBar,
                    children: (0, e.jsx)("div", { className: s().ShineCtn }),
                  }),
              ],
            });
          if (I)
            return (0, e.jsx)(h, {
              children: (0, e.jsxs)("div", {
                className: s().EventRow,
                children: [
                  (0, e.jsx)("div", {
                    className: (0, o.A)(
                      s().PlaceholderGroupImage,
                      s().PlaceholderCap,
                    ),
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, o.A)(s().DetailsPlaceholder),
                    children: [
                      (0, e.jsx)("div", {
                        className: (0, o.A)(
                          s().PlaceholderTitle,
                          s().PlaceholderCap,
                        ),
                      }),
                      (0, e.jsx)("div", {
                        className: (0, o.A)(
                          s().PlaceholderSubtitle,
                          s().PlaceholderCap,
                        ),
                      }),
                      (0, e.jsx)("div", {
                        className: (0, o.A)(
                          s().PlaceholderButtons,
                          s().PlaceholderCap,
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            });
          if (B)
            return (0, e.jsx)(h, {
              children: (0, e.jsxs)("div", {
                className: s().SpotlightsRow,
                children: [
                  (0, e.jsx)("div", { className: s().PlaceholderCap }),
                  (0, e.jsx)("div", { className: s().PlaceholderCap }),
                  (0, e.jsxs)("div", {
                    className: s().DailyDealsColumn,
                    children: [
                      (0, e.jsx)("div", { className: s().PlaceholderCap }),
                      (0, e.jsx)("div", { className: s().PlaceholderCap }),
                    ],
                  }),
                ],
              }),
            });
          if (b)
            return (0, e.jsx)(h, {
              children: (0, e.jsxs)("div", {
                className: (0, o.A)({
                  [s().MainCapRow]: !0,
                  [s().MainCapRowExpanded]: K,
                }),
                children: [
                  (0, e.jsx)("div", { className: s().PlaceholderCap }),
                  (0, e.jsxs)("div", {
                    className: (0, o.A)(s().DetailsPlaceholder),
                    children: [
                      (0, e.jsx)("div", {
                        className: (0, o.A)(
                          s().PlaceholderTitle,
                          s().PlaceholderCap,
                        ),
                      }),
                      (0, e.jsx)("div", {
                        className: (0, o.A)(
                          s().PlaceholderSubtitle,
                          s().PlaceholderCap,
                        ),
                      }),
                      (0, e.jsx)("div", {
                        className: (0, o.A)(
                          s().PlaceholderRelease,
                          s().PlaceholderCap,
                        ),
                      }),
                      (0, e.jsx)("div", {
                        className: (0, o.A)(
                          s().PlaceholderReviews,
                          s().PlaceholderCap,
                        ),
                      }),
                      (0, e.jsx)("div", {
                        className: (0, o.A)(
                          s().PlaceholderTags,
                          s().PlaceholderCap,
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            });
          if (l)
            return (0, e.jsx)(h, {
              children: (0, e.jsxs)("div", {
                className: s().ExpandedItemRow,
                children: [
                  (0, e.jsx)("div", {
                    className: (0, o.A)(
                      s().CapsulePlaceholder,
                      s().PlaceholderCap,
                    ),
                  }),
                  (0, e.jsx)("div", {
                    className: (0, o.A)(
                      s().ItemDefPlaceholder,
                      s().PlaceholderCap,
                    ),
                  }),
                ],
              }),
            });
          if (C) {
            const P = [];
            for (let T = 0; T < u[0]; T++)
              P.push(
                (0, e.jsx)(
                  E.Z,
                  {
                    className: s().ItemBrowserCapsule,
                    focusable: !0,
                    children: (0, e.jsx)("div", {
                      className: s().PlaceholderCap,
                    }),
                  },
                  "item_browse_ghost_" + T,
                ),
              );
            return (0, e.jsx)(h, { children: P });
          }
          return u?.length == 1
            ? u[0] == 1
              ? (0, e.jsx)(h, {
                  children: (0, e.jsx)("div", {
                    className: s().CapsuleRowSuperCapsule,
                    children: (0, e.jsx)("div", {
                      className: s().PlaceholderCap,
                    }),
                  }),
                })
              : u[0] == 4
                ? (0, e.jsx)(h, {
                    children: (0, e.jsxs)("div", {
                      className: s().CapsuleRow4,
                      children: [
                        (0, e.jsx)("div", { className: s().PlaceholderCap }),
                        (0, e.jsx)("div", { className: s().PlaceholderCap }),
                        (0, e.jsx)("div", { className: s().PlaceholderCap }),
                        (0, e.jsx)("div", { className: s().PlaceholderCap }),
                      ],
                    }),
                  })
                : (0, e.jsx)(h, {
                    children: (0, e.jsxs)("div", {
                      className: s().CapsuleRow3,
                      children: [
                        (0, e.jsx)("div", { className: s().PlaceholderCap }),
                        (0, e.jsx)("div", { className: s().PlaceholderCap }),
                        (0, e.jsx)("div", { className: s().PlaceholderCap }),
                      ],
                    }),
                  })
            : u?.length == 2
              ? u[0] == 3 && u[1] == 3
                ? (0, e.jsx)(h, {
                    children: (0, e.jsxs)("div", {
                      className: s().CapsuleRow23,
                      children: [
                        (0, e.jsxs)("div", {
                          className: (0, o.A)(s().CapRow, s().Caps3),
                          children: [
                            (0, e.jsx)("div", {
                              className: s().PlaceholderCap,
                            }),
                            (0, e.jsx)("div", {
                              className: s().PlaceholderCap,
                            }),
                            (0, e.jsx)("div", {
                              className: s().PlaceholderCap,
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: (0, o.A)(s().CapRow, s().Caps3),
                          children: [
                            (0, e.jsx)("div", {
                              className: s().PlaceholderCap,
                            }),
                            (0, e.jsx)("div", {
                              className: s().PlaceholderCap,
                            }),
                            (0, e.jsx)("div", {
                              className: s().PlaceholderCap,
                            }),
                          ],
                        }),
                      ],
                    }),
                  })
                : (0, e.jsx)(h, {
                    children: (0, e.jsxs)("div", {
                      className: s().CapsuleRow23,
                      children: [
                        (0, e.jsxs)("div", {
                          className: (0, o.A)(s().CapRow, s().Caps2),
                          children: [
                            (0, e.jsx)("div", {
                              className: s().PlaceholderCap,
                            }),
                            (0, e.jsx)("div", {
                              className: s().PlaceholderCap,
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: (0, o.A)(s().CapRow, s().Caps3),
                          children: [
                            (0, e.jsx)("div", {
                              className: s().PlaceholderCap,
                            }),
                            (0, e.jsx)("div", {
                              className: s().PlaceholderCap,
                            }),
                            (0, e.jsx)("div", {
                              className: s().PlaceholderCap,
                            }),
                          ],
                        }),
                      ],
                    }),
                  })
              : (0, e.jsx)(h, {
                  children: (0, e.jsxs)("div", {
                    className: s().CapsuleRow234,
                    children: [
                      (0, e.jsxs)("div", {
                        className: (0, o.A)(s().CapRow, s().Caps2),
                        children: [
                          (0, e.jsx)("div", { className: s().PlaceholderCap }),
                          (0, e.jsx)("div", { className: s().PlaceholderCap }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: (0, o.A)(s().CapRow, s().Caps3),
                        children: [
                          (0, e.jsx)("div", { className: s().PlaceholderCap }),
                          (0, e.jsx)("div", { className: s().PlaceholderCap }),
                          (0, e.jsx)("div", { className: s().PlaceholderCap }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: (0, o.A)(s().CapRow, s().Caps4),
                        children: [
                          (0, e.jsx)("div", { className: s().PlaceholderCap }),
                          (0, e.jsx)("div", { className: s().PlaceholderCap }),
                          (0, e.jsx)("div", { className: s().PlaceholderCap }),
                          (0, e.jsx)("div", { className: s().PlaceholderCap }),
                        ],
                      }),
                    ],
                  }),
                });
        }
        function h(t) {
          return (0, e.jsx)(E.Z, {
            className: s().GhostCtn,
            focusableIfEmpty: !0,
            children: t.children,
          });
        }
      },
      38081: (O) => {
        O.exports = {
          WishlistButtonNotTop: "_1l9DUAcf-usX0U1ouPwOjD",
          FollowGameButtonNotTop: "_2b03GmrQ6fQLOqbsKO2GA7",
        };
      },
      66532: (O) => {
        O.exports = {
          GhostCtn: "_1ubg0tXv_umwQZUB_0jDRE",
          PlaceholderCap: "_27gySE3vmqZlMXfuF632TP",
          GhostShine: "_2l86dzSdcXulUY9WKa1Tbu",
          PlaceholderBox: "_1XmpFdzcYugE4Z9e7kEWU0",
          ShineCtn: "_2u3dr06IR8IZdxdklGi4vo",
          PlaceholderVideo: "R5EqV-ifmaPOB3fyPBfhh",
          CapsuleRow3: "_3kupXecbdHHKoQG8YCt4dL",
          CapsuleRow4: "_33YZ_jDH_m_qIiXgOfMT76",
          CapsuleRowSuperCapsule: "_3TP7KmXA-L05uPNVUFbGFa",
          ItemBrowserCapsule: "_2RfEi9dkz-umKdhACj0xcl",
          CapsuleRow23: "_3OEHujsE68pdk2YnrZVRMp",
          CapRow: "_1R1HR9bMl_hU40P6h6Y51n",
          Caps2: "_3NP9CpCeX-sy6hyPmlh2M5",
          Caps3: "ch0xp_kjApA24ePv-4mUf",
          CapsuleRow234: "_30kicHKjKoSXe0rh5mMDIU",
          Caps4: "_3F43q6uNP6clXtkdnaOhn4",
          SpotlightsRow: "_2qbLh__etckJ_mcn5XLyzG",
          DailyDealsColumn: "_6o5HjMAgOX8KNp4cVQ33l",
          EventRow: "_1_ztuzDN3PaSMNH4DQqoFS",
          PlaceholderGroupImage: "ntVbFRmkoOazIFG2xnLEL",
          DetailsPlaceholder: "lvNWfRKbNHxMhmhmkTxSa",
          PlaceholderTitle: "_2KAn_rPFaW6MLKtxBBFrgi",
          PlaceholderSubtitle: "_2PqXIU5kSbk1S4OHMrtpEG",
          PlaceholderButtons: "_2Svpv7NgQYtnnih1Al0nKv",
          TrailerCarouselRow: "_3aEDS0V4oHI2X845GlY4AQ",
          VideoPlaceholder: "_1J4w1c1LMOidazCqHBu9c2",
          ItemDescPlaceholer: "_1chbn_ZYr2_kVufM3llMqe",
          AutoAdvanceBar: "XWmc4IL9WuoHRfkxKtkwf",
          ExpandedItemRow: "_3QSW80jNmiGxWlCRe8GPvp",
          CapsulePlaceholder: "woZ8x3k0HeLNHeEH2wYmd",
          ItemDefPlaceholder: "_25qfK6y2ESK-sTYHvmIyiC",
          MainCapRow: "_3uwmHkHfnqzkO3kjD2dsfX",
          PlaceholderRelease: "lZpOQjeL8nSaqqVQSej0d",
          PlaceholderReviews: "_1wTzeBKjOcMG6cUtzXqF3D",
          PlaceholderTags: "_3pJA7V23G6n6uIbJSzFLFO",
        };
      },
    },
  ]);
})();
