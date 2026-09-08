/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [86991],
  {
    37882: (e) => {
      e.exports = {
        Ctn: "_3sPRGG8vL4sM6N-8FZo5fT",
        Link: "-YNVdnBAoV2HQCkuR8C1h",
        BackgroundImageCtn: "_31Bm2h6tK_J4K2yYHTtttM",
        BackgroundImageBlurCtn: "_1LzeWsFv8n7BMFyJ1c0bF",
        Headline: "qQs0819GK5nJMJhEfDfqO",
        Verified: "_1DN1jmbJKCQol4bLgow8xK",
        Subtitle: "_2Tf8QYNJrsywiXvKyV2Sm6",
        DeviceFullWidthShadow: "_33ittd22VgVN6fUvIAgkqu",
        VideoDisclaimer: "_2FW4jsZDS7ltbcDrOQStiW",
        DeviceWrapper: "_3DCMQY1PEeYS2E7r8NJXKQ",
        CapsuleWrapper: "_1JhQMb3X6rKYyPqZWOZG5w",
        HardwareBannerCtn: "_2L4eqs1UZ1QEjRC1S8qiJA",
        TrailerCtn: "_3LbKJsBRhn7hEnOSlKZd64",
      };
    },
    91970: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        strMediumWidth: "800px",
        strMaxMobileWidth: "600px",
        MediaContainer: "-ap7mXqcxyhrxn5-5EaM8",
        MediaContainerMM: "_1XVJzaNLt0tgl6Pq5QI2tK",
        ScreenshotThumbnailRow: "COp9MkmgXCc5Y3ytJM70W",
        HilightGrid: "_28DkEkOjvTWfq0sU8m_i32",
        MainMediaCtn: "FATLceF4ncP8L8QnrQTXV",
        VideoThumbnail: "h0pphNa_Fdu4JUevL5V9y",
        ScreenshotDisplayCtn: "_20YpaGv3V_QArQyy15zAJc",
        MainCapsuleWithHover: "_30BxsjSFrUWCBKntWK9hPg",
        MainCapsule: "_2UuNsdHxhT9la27J_j3BFs",
        AppDetails: "ETHkFxrlPF1znTFXFtjtK",
        GameName: "udhKC-bUdlotRKphK3Fn2",
        ShortDesc: "_2e5PhNJqb68XISttHxdVF2",
        ThumbnialClickable: "_3B8X2c5pBF96hapgz03tC4",
        ThumbnailCtn: "rE40TQ86G7cjVETvUYZm3",
        videoPlaying: "_3D99vg3-OLr6XsvxrtzhZa",
        VideoPlayButton: "_2sJlIVAVWZ2I2iA6IO4pOv",
        VideoLargeContainer: "_3mzKCP4FLx7fUVeKrhZ1nn",
        VideoPopupContainers: "_2LqAoKcZgpOtpoj5_URVNJ",
        VideoLarge: "_3zPl6O67BYIiFOlq7FxlJP",
        BackgroundAnimation: "TqTKL7i3GSFlH_ZgPVf1z",
        "ItemFocusAnim-darkerGrey-nocolor": "cm_5koVmrBLuCZgPBCMie",
        "ItemFocusAnim-darkerGrey": "PnVMlqvX5SCAvSN6U3hb9",
        "ItemFocusAnim-darkGreySettings": "_3WN-nRn7q-FIwR4QBoVI_u",
        "ItemFocusAnim-darkGrey": "_3y6HrP9DK-Ttsri2UnKeJ4",
        "ItemFocusAnim-grey": "_3adXp5-v5skt9f-KA1WB_8",
        "ItemFocusAnim-translucent-white-10": "_1981I-jlGsaAi65IqAxEdm",
        "ItemFocusAnim-translucent-white-20": "_1ukTwVbofcJj1v0AVkiuc3",
        "ItemFocusAnimBorder-darkGrey": "_2LVjWAaAuOqf5tKQMJ99XC",
        "ItemFocusAnim-green": "_1VtcP5LWUyNvo0_5bYQYEx",
        focusAnimation: "n40ksCk7VHLZG8f1e517V",
        hoverAnimation: "YiXS6irpqMezE03xkO2Un",
      };
    },
    17041: (e, r, t) => {
      "use strict";
      t.d(r, { u: () => n });
      var s = t(7850),
        a = t(17267),
        i = t(3088);
      function n(e) {
        const { strImageToken: r, language: t, strAltText: n } = e,
          l = (0, a.z5)(r, t);
        return l
          ? "string" == typeof l
            ? (0, s.jsx)("img", { src: l, alt: n })
            : (0, s.jsx)(i.c, { rgSources: l, strAltText: n })
          : null;
      }
    },
    20433: (e, r, t) => {
      "use strict";
      t.d(r, { j: () => m, u: () => g });
      var s = t(7850),
        a = t(90626),
        i = t(45699),
        n = t(55963),
        l = t(60014),
        o = t(49411),
        c = t(61336),
        d = t(52541),
        u = t(66418);
      t(78327);
      function h(e) {
        if (e) {
          if ("appid" in e) return "app";
          if ("bundleid" in e) return "bundle";
          if ("packageid" in e) return "sub";
        }
      }
      function m(e) {
        const {
            id: r,
            hoverClassName: t,
            fnGetIDOverride: i,
            fnHoverState: n,
            disableScreenshots: l,
            children: o,
          } = e,
          c = a.useRef(null),
          u = a.useCallback(
            (e) => {
              const t = h(r);
              t &&
                (n && n(!0),
                window.GameHover &&
                  (c.current &&
                    l &&
                    (c.current.dataset.hoverDisableScreenshots = "true"),
                  window.GameHover(i ? i() : c.current, e, "global_hover", {
                    type: t,
                    id: (0, d.G$)(r).id,
                    v6: 1,
                  })));
            },
            [n, i, l, r],
          ),
          m = a.useCallback(
            (e) => {
              h(r) &&
                (n && e.relatedTarget && n(!1),
                window.HideGameHover &&
                  window.HideGameHover(i ? i() : c.current, e, "global_hover"));
            },
            [r, n, i],
          );
        return (0, s.jsx)("div", {
          ref: c,
          className: t,
          onMouseEnter: u,
          onMouseLeave: m,
          onFocus: u,
          onBlur: m,
          children: o,
        });
      }
      function g(e) {
        const {
            id: r,
            strExtraParams: t,
            fnOnClickOverride: a,
            strOverrideURL: g,
          } = e,
          p = (0, l.n9)(),
          f = (0, o.w)(),
          x = (0, c.NT)(
            g ||
              (r && "creatorid" in r
                ? (0, n.It)(
                    `${u.TS.STORE_BASE_URL}curator/${((0, d.G$))(r).id}${t ? `?${t}` : ""}`,
                    p,
                    f,
                  )
                : (0, n.It)(
                    `${u.TS.STORE_BASE_URL}${h(r)}/${((0, d.G$))(r).id}${t ? `?${t}` : ""}`,
                    p,
                    f,
                  )),
          );
        return (0, s.jsx)(m, {
          ...e,
          children: (0, s.jsx)(i.Ii, {
            className: e.className,
            href: a ? void 0 : x,
            target: u.TS.IN_CLIENT || a ? void 0 : "_blank",
            rel: "noopener noreferrer",
            onClick: a,
            children: e.children,
          }),
        });
      }
    },
    25698: (e, r, t) => {
      "use strict";
      t.d(r, { S: () => d });
      var s = t(7850),
        a = t(3946),
        i = t(90626),
        n = t(91933);
      const l = {
          name: "trailerPrefs",
          options: { path: "/", secure: !0, maxAge: 2592e6 },
          preferenceControls: { isTechnicallyNecessary: !0 },
        },
        o = { flVolume: 0.8, bMuted: !0 };
      function c(e) {
        !(function (e) {
          return e.flVolume === o.flVolume && e.bMuted === o.bMuted;
        })(e) && 0 != Object.keys(e).length
          ? (0, n.eV)(l, JSON.stringify(e))
          : (0, n.Y1)(l);
      }
      function d(e) {
        let { children: r } = e;
        const [t, d] = (0, i.useState)(() =>
          (function () {
            try {
              const e = (0, n.j_)(l);
              if (!e) return o;
              const r = JSON.parse(e);
              return {
                flVolume:
                  "number" == typeof r.flVolume ? r.flVolume : o.flVolume,
                bMuted: "boolean" == typeof r.bMuted ? r.bMuted : o.bMuted,
              };
            } catch (e) {
              return o;
            }
          })(),
        );
        return (
          (0, i.useEffect)(() => {
            c(t);
          }, [t]),
          (0, s.jsx)(a.v, {
            playerVolume: t.flVolume,
            setPlayerVolume: (e) => d((r) => ({ ...r, flVolume: e })),
            audioMuted: t.bMuted,
            setAudioMuted: (e) => d((r) => ({ ...r, bMuted: e })),
            children: r,
          })
        );
      }
    },
    24704: (e, r, t) => {
      "use strict";
      t.d(r, { T: () => O });
      var s = t(7850),
        a = t(95578),
        i = t(71381),
        n = t(20433),
        l = t(94191),
        o = t(78588),
        c = t(94636),
        d = t(90421),
        u = t(24267),
        h = t(12424),
        m = t(96006),
        g = t(8893),
        p = t(78686),
        f = t(5309),
        x = t(39777),
        j = t(14987),
        v = t(60014),
        b = t(75844),
        _ = t(90626),
        S = t(76682),
        C = t(55963),
        A = t(2921),
        T = t(18654),
        N = t.n(T),
        y = t(52541),
        M = t(90740),
        k = t(41399);
      function B(e) {
        const {
            id: r,
            bPurchaseOptionsExpanded: t,
            fnCollapseOptions: a,
            bPreferAssetWithoutOverride: i,
          } = e,
          { data: n } = (0, x.is)(r),
          l = (0, _.useRef)(null);
        if (!n) return null;
        const o = n.purchase_options;
        return o
          ? (0, s.jsx)(M.A, {
              nodeRef: l,
              in: t,
              mountOnEnter: !0,
              unmountOnExit: !0,
              timeout: 2e3,
              classNames: {
                enterActive: N().Expanding,
                enterDone: N().Expanded,
                exit: N().Expanded,
                exitActive: N().Collapsing,
              },
              children: (0, s.jsxs)("div", {
                ref: l,
                className: N().BundleContentsCtnTransition,
                children: [
                  (0, s.jsx)("div", {
                    className: N().BundleContentsCtn,
                    children: o
                      .filter((e) => Boolean(e.packageid))
                      .map((e) =>
                        (0, s.jsx)(
                          "div",
                          {
                            className: N().BundleContentItem,
                            children: (0, s.jsx)(k.p, {
                              id: e.packageid || 0,
                              type: "sub",
                              bForceSmallCapsuleArt: !0,
                              bPreferAssetWithoutOverride: i,
                            }),
                          },
                          "purchaseitem_" + (0, y.ER)(r) + "_" + e.packageid,
                        ),
                      ),
                  }),
                  (0, s.jsx)("div", {
                    onClick: a,
                    className: N().BundleShowButton,
                    children: (0, s.jsx)("button", {
                      className: N().ShowContentsButton,
                      children: p.Z.Localize("#Button_Close"),
                    }),
                  }),
                ],
              }),
            })
          : null;
      }
      var P = t(94095),
        L = t(70300),
        E = t(73371),
        D = t.n(E),
        V = t(54492),
        I = t(52038);
      const O = (0, b.PA)((e) => {
        const { id: r, type: t } = e,
          b = (0, S.zl)(r, t),
          {
            bHidePrice: T,
            bShowDemoButton: y,
            bPreferDemoStorePage: M,
            bShowPurchaseOptionsButton: k,
            bUseSubscriptionLayout: E,
            bPreferAssetWithoutOverride: O,
          } = e,
          [F, w] = _.useState(!1),
          W = () => w(!F),
          { data: R } = (0, x.U2)(b),
          { data: G } = (0, x.wl)(b),
          { data: H } = (0, x.by)(b),
          { data: J } = (0, x.xz)(b),
          U = (0, j._Z)(b),
          $ = (0, v.n9)();
        if (!R || !G)
          return (0, s.jsx)(i.h, {
            capsules_per_row: [1],
            is_expanded_display: !0,
          });
        const z = (0, C.L3)($),
          K = R.item_type == a.c6.qI;
        return (0, s.jsx)("div", {
          className: (0, I.A)(
            N().StoreSaleWidgetContainer,
            N().LibraryAssetExpandedDisplay,
            "LibraryAssetExpandedDisplay",
          ),
          children: (0, s.jsxs)(L.oj, {
            appid: K ? R.appid : void 0,
            children: [
              (0, s.jsxs)("div", {
                className: N().StoreSaleWidgetLibraryAssetExtendedTop,
                children: [
                  (0, s.jsx)("div", {
                    className: (0, I.A)(N().StoreSaleWidgetLeft),
                    children: (0, s.jsx)(n.u, {
                      id: b,
                      bPreferDemoStorePage: M,
                      children: (0, s.jsxs)("div", {
                        className: N().StoreSaleWidgetImage,
                        children: [
                          (0, s.jsx)(l.V, { appids: U }),
                          (0, s.jsx)(o.a, {
                            id: b,
                            imageType: "library",
                            bPreferAssetWithoutOverride: O,
                          }),
                          (0, s.jsx)(V.J, { id: b }),
                        ],
                      }),
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: N().StoreSaleWidgetCrossCenterRight,
                    children: [
                      K &&
                        (0, s.jsx)(c.E, {
                          id: b,
                          classOverride: (0, I.A)(
                            D().WishlistButtonNotTop,
                            "WishlistButton",
                          ),
                          snr: z,
                        }),
                      (0, s.jsxs)("div", {
                        className: N().StoreSaleWidgetContents,
                        children: [
                          (0, s.jsxs)("div", {
                            className: N().StoreSaleWidgetCenter,
                            children: [
                              G.short_description &&
                                G.short_description.length > 0 &&
                                (0, s.jsx)("div", {
                                  className: (0, I.A)(
                                    N().StoreSaleWidgetShortDesc,
                                    "StoreSaleWidgetShortDesc",
                                  ),
                                  children: G.short_description,
                                }),
                              (0, s.jsx)(d.n, {
                                rgTagIDs: J
                                  ? J.slice(0, 10).map((e) => e.tagid || 0)
                                  : [],
                                instanceNum: 0,
                                bNoStoreLinks: !1,
                              }),
                              (0, s.jsxs)("div", {
                                className: N().StoreMetaDataCtn,
                                children: [
                                  (0, s.jsx)("div", {
                                    className: N().StoreSaleItemRelease,
                                    children: p.Z.LocalizeReact(
                                      "#Sale_ReleaseDate",
                                      (0, s.jsx)("span", {
                                        children: (0, f.CC)(H),
                                      }),
                                    ),
                                  }),
                                  G.developers &&
                                    G.developers.length > 0 &&
                                    (0, s.jsxs)("div", {
                                      className: N().StoreSaleItemDev,
                                      children: [
                                        p.Z.Localize(
                                          "#CreatorHome_DevelopedBy",
                                        ),
                                        (0, s.jsx)("span", {
                                          children: G.developers[0].name,
                                        }),
                                      ],
                                    }),
                                  G.publishers &&
                                    G.publishers.length > 0 &&
                                    (0, s.jsxs)("div", {
                                      className: N().StoreSaleItemDev,
                                      children: [
                                        p.Z.Localize(
                                          "#CreatorHome_PublishedBy",
                                        ),
                                        (0, s.jsx)("span", {
                                          children: G.publishers[0].name,
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsx)("div", {
                            className: N().StoreSaleLibraryAssetWidgetRight,
                            children: (0, s.jsx)(A.Yg, {
                              id: b,
                              bPopOutTrailerPlayback: !0,
                            }),
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className: N().StoreSaleItemReview,
                        children: (0, s.jsx)(u.J, { id: b }),
                      }),
                      (0, s.jsx)("div", {
                        className: N().CapsuleBottomBar,
                        children:
                          E && K
                            ? (0, s.jsx)(h.E, { appid: R.appid, bIsMuted: !1 })
                            : (0, s.jsxs)(s.Fragment, {
                                children: [
                                  (0, s.jsx)(m.Q, { id: b }),
                                  (0, s.jsx)(P.w, {
                                    id: b,
                                    bShowDemoButton: y,
                                    bHidePrice: T,
                                    bShowPurchaseOptionsButton: k,
                                    fnOnPurchaseOptionsClick: W,
                                    bHideWishlistButton: R.is_coming_soon,
                                  }),
                                ],
                              }),
                      }),
                      (0, s.jsxs)("div", {
                        className: N().StoreSaleWidgetBgTint,
                        children: [
                          (0, s.jsx)(g.G, {
                            id: b,
                            bPreferAssetWithoutOverride: O,
                          }),
                          (0, s.jsx)(V.J, { id: b }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)(B, {
                id: b,
                bPurchaseOptionsExpanded: F,
                fnCollapseOptions: W,
                bPreferAssetWithoutOverride: O,
              }),
            ],
          }),
        });
      });
    },
    2921: (e, r, t) => {
      "use strict";
      t.d(r, { PE: () => O, qP: () => D, Yg: () => E });
      var s = t(7850),
        a = t(76217),
        i = t(86927),
        n = t(42834),
        l = t(52471),
        o = t(39777),
        c = t(52541),
        d = t(38535),
        u = t(90626),
        h = t(92834),
        m = t(1078),
        g = t(12155),
        p = t(52038),
        f = t(78327),
        x = t(74568),
        j = t(22797),
        v = t(44433),
        b = t(91970),
        _ = t.n(b),
        S = t(18654),
        C = t.n(S),
        A = t(32754),
        T = t(61859),
        N = t(30470),
        y = t(24484);
      function M(e) {
        const { id: r } = e,
          { data: t } = (0, o.J$)(r),
          a = (0, u.useMemo)(() => {
            if (!t) return [];
            const e =
              t.categories?.supported_player_categoryids?.slice(0, 1) || [];
            return (
              t.categories?.feature_categoryids?.forEach((r) => e.push(r)),
              t.categories?.controller_categoryids?.forEach((r) => e.push(r)),
              t.categories?.supported_player_categoryids
                ?.slice(1)
                .forEach((r) => e.push(r)),
              e
            );
          }, [t]);
        return a && 0 != a.length
          ? (0, s.jsx)("div", {
              className: (0, p.A)(C().SaleTagBlockCtn, "SaleTagBlockCtn"),
              children: Boolean(a?.length > 0)
                ? (0, s.jsx)("div", {
                    className: (0, p.A)(C().TagBox, C().Categories),
                    children: a.map((e) =>
                      (0, s.jsx)(B, { categoryID: e }, "cat_" + e),
                    ),
                  })
                : (0, s.jsx)("div", { children: (0, T.we)("#Broadcast_None") }),
            })
          : null;
      }
      class k {
        m_rgCategories;
        constructor() {
          this.m_rgCategories = (0, y.Tc)(
            "feature_categories",
            "application_config",
          );
        }
        static g_Self = null;
        static Get() {
          return k.g_Self || (k.g_Self = new k()), k.g_Self;
        }
      }
      function B(e) {
        const { categoryID: r } = e,
          t = k.Get().m_rgCategories.find((e) => e.categoryid == r);
        return t
          ? (0, s.jsx)("div", {
              className: C().Category,
              children: (0, s.jsx)(A.he, {
                toolTipContent: t.name,
                children: (0, s.jsx)("div", {
                  className: C().CategoryIcon,
                  style: {
                    background: `url(${N.TS.STORE_CDN_URL}/public/images/${t.image_path}) no-repeat center center/cover`,
                  },
                }),
              }),
            })
          : null;
      }
      var P = t(90421),
        L = t(54054);
      function E(e) {
        const { id: r, bPopOutTrailerPlayback: t } = e,
          { data: a } = (0, o.Yo)(r),
          { data: i } = (0, o.j4)(r),
          { data: n } = (0, o.J$)(r),
          [l, c] = (0, u.useState)(!1),
          [h, m] = (0, u.useState)(!1),
          g = (0, d.dy)(),
          f = a?.highlights?.filter((e) => !g || e.all_ages),
          x = f && f?.length > 0 ? f[0] : void 0,
          v = u.useCallback(() => {
            x && (t ? m(!0) : c((e) => !e));
          }, [x, t]);
        if (!n)
          return (0, s.jsx)("div", {
            className: (0, p.A)(_().HilightGrid, _().MediaContainer),
            children: (0, s.jsx)(j.t, { size: "medium" }),
          });
        const b = x
          ? (0, s.jsx)(F, { trailer: x, bPlayVideo: l, fnTogglePlayTrailer: v })
          : null;
        return x ||
          (i && i.all_ages_screenshots && i.all_ages_screenshots.length > 0)
          ? (0, s.jsxs)("div", {
              className: (0, p.A)(_().HilightGrid, _().MediaContainer),
              children: [
                (0, s.jsx)(V, {
                  elFeaturedInCenter: b,
                  storeItemScreenshots: i,
                  trailer: x,
                  id: r,
                  name: n.name || "",
                }),
                Boolean(t)
                  ? (0, s.jsx)(O, {
                      id: r,
                      bShowModal: h,
                      hideModal: () => m(!1),
                    })
                  : (0, s.jsx)(I, {
                      name: n.name || "",
                      trailer: x,
                      bPlayVideo: l,
                      fnTogglePlayTrailer: v,
                      bControls: !0,
                    }),
              ],
            })
          : null;
      }
      function D(e) {
        const {
            id: r,
            fnOnClickButton: t,
            bLowBandwidthMode: a,
            bUseAssetWithoutOverride: i,
          } = e,
          { data: n } = (0, o.j4)(r),
          { data: c } = (0, o.J$)(r),
          { data: d } = (0, o.Yo)(r),
          u = (0, l.kB)(r);
        return void 0 !== !d && n && c
          ? (0, s.jsx)("div", {
              className: (0, p.A)(_().HilightGrid, _().MediaContainerMM),
              children: (0, s.jsx)(V, {
                id: r,
                elFeaturedInCenter: (0, s.jsx)(w, {
                  id: r,
                  bUseAssetWithoutOverride: Boolean(i),
                  fnOnClickButton: t,
                }),
                trailer: u && u.length > 0 ? u[0] : void 0,
                storeItemScreenshots: n,
                featureElementclassName: _().MainImage,
                bUseTrailerAsFirstThumb: !a,
                bNoScreenShotModals: !0,
                name: c.name || "",
              }),
            })
          : (0, s.jsx)("div", {
              className: (0, p.A)(_().HilightGrid, _().MediaContainerMM),
              children: (0, s.jsx)(j.t, { size: "medium" }),
            });
      }
      function V(e) {
        const {
            elFeaturedInCenter: r,
            id: t,
            name: a,
            trailer: i,
            storeItemScreenshots: l,
            featureElementclassName: o,
            bUseTrailerAsFirstThumb: h,
            bNoScreenShotModals: g,
          } = e,
          [f, x] = u.useState(void 0),
          [j, v] = (0, m.XC)(),
          b = (0, d.dy)(),
          S = (0, u.useRef)(null),
          [C, A] = (0, u.useState)(0);
        if (!t) return null;
        const T = r || (void 0 !== f && -1 !== f) ? f : 0,
          N = new Array(),
          y = new Array();
        h &&
          i &&
          (N.push(
            (0, s.jsx)(
              F,
              {
                trailer: i,
                bPlayVideo: !1,
                fnTogglePlayTrailer: () => {},
                onMouseEnter: () => x(0),
                onMouseLeave: () => {
                  const e = S.current;
                  e && A(e.currentTime);
                },
              },
              "trail_thumb_",
            ),
          ),
          y.push(
            (0, s.jsx)(
              I,
              {
                ref: S,
                name: a,
                trailer: i,
                bControls: !1,
                bPlayVideo: !0,
                startTime: C,
                fnTogglePlayTrailer: () => {},
              },
              "trail_inline",
            ),
          ));
        const M = (
          b ? l?.all_ages_screenshots : l?.mature_content_screenshots
        )?.filter(Boolean);
        if (
          (M?.forEach((e, t) => {
            if ((r || t > 0) && N.length < 3) {
              const r = (0, n.bu)(e, "thumb"),
                a = (0, n.bu)(e, "600x338"),
                i = N.length;
              N.push(
                (0, s.jsx)(
                  "div",
                  {
                    className: (0, p.A)({
                      [_().ThumbnailCtn]: !0,
                      [_().ThumbnialClickable]: !g,
                    }),
                    children: (0, s.jsx)("img", {
                      src: r,
                      onClick: g
                        ? void 0
                        : () => {
                            const e = [...(M || [])];
                            if (e.length > 0) {
                              for (let r = 0; r < t; ++r) {
                                const r = e.shift();
                                r && e.push(r);
                              }
                              j(e.map((e) => (0, n.bu)(e, "full")));
                            }
                          },
                      onMouseEnter: () => x(i),
                    }),
                  },
                  t + "_small_" + r,
                ),
              ),
                y.push(
                  (0, s.jsx)(
                    "div",
                    {
                      className: _().ScreenshotDisplayCtn,
                      children: (0, s.jsx)("img", { src: a }),
                    },
                    t + "_big_" + r,
                  ),
                );
            }
          }),
          !(r || (y && 0 != y.length)))
        )
          return null;
        const k = N.slice(0, 3),
          B = Array.from({ length: Math.max(0, 3 - k.length) });
        return (0, s.jsxs)(s.Fragment, {
          children: [
            v,
            (0, s.jsx)("div", {
              className: o || _().MainMediaCtn,
              children: Boolean(r && (-1 === T || void 0 === T))
                ? (0, s.jsx)(s.Fragment, { children: r })
                : (0, s.jsx)(s.Fragment, { children: void 0 !== T && y[T] }),
            }),
            Boolean(k.length > 0) &&
              (0, s.jsxs)("div", {
                className: _().ScreenshotThumbnailRow,
                onMouseLeave: () => x(-1),
                children: [
                  k,
                  B.map((e, r) =>
                    (0, s.jsx)(
                      "div",
                      { className: _().ThumbnailCtn },
                      `app_${(0, c.ER)(t)}_${r}`,
                    ),
                  ),
                ],
              }),
          ],
        });
      }
      function I(e) {
        const {
          ref: r,
          name: t,
          trailer: a,
          bControls: i,
          bPlayVideo: n,
          fnTogglePlayTrailer: o,
          startTime: c,
        } = e;
        if (
          ((0, u.useEffect)(() => {
            const e = r?.current;
            if (null != c && c > 0 && e) {
              const r = () => {
                e.currentTime = c || 0;
              };
              return (
                e.addEventListener("loadedmetadata", r),
                () => {
                  e.removeEventListener("loadedmetadata", r);
                }
              );
            }
          }, [r, c]),
          !a)
        )
          return null;
        let d = (0, p.A)(_().VideoLargeContainer, n && _().videoPlaying);
        return (0, s.jsxs)("div", {
          className: d,
          onClick: o,
          children: [
            (0, s.jsx)(L.hj, {
              name: t,
              trailerCategory: a.trailer_category,
              trailerDisplay: L.g,
              mouseOver: !1,
            }),
            Boolean(n && a.microtrailer) &&
              (0, s.jsx)("video", {
                className: _().VideoLarge,
                ref: r,
                controls: i,
                autoPlay: !0,
                loop: !0,
                muted: !0,
                poster: null != c && c > 0 ? void 0 : a.screenshot_full,
                children: a.microtrailer?.map((e) =>
                  f.TS.IN_CLIENT && "video/mp4" == e.type
                    ? null
                    : (0, s.jsx)(
                        "source",
                        { src: (0, l.M4)(a, e.filename || ""), type: e.type },
                        e.filename,
                      ),
                ),
              }),
            i &&
              (0, s.jsx)("div", {
                onClick: o,
                children: (0, s.jsx)(g.sED, {}),
              }),
          ],
        });
      }
      function O(e) {
        const { id: r, bShowModal: t, trailerBaseID: a, hideModal: i } = e,
          { data: n } = (0, o.J$)(r),
          c = (0, l.kB)(r),
          d = (0, u.useMemo)(() => {
            if (c && 0 != c.length) {
              if (a) {
                const e = c.find((e) => e.trailer_base_id == a);
                if (e) return e;
              }
              return c[0];
            }
          }, [c, a]),
          m = u.useId(),
          g = u.useId(),
          {
            rgDashTrailers: p,
            rgHlsTrailers: f,
            strCaptionManufest: j,
            strScreenshot: b,
          } = (0, u.useMemo)(() => {
            if (!d)
              return {
                rgDashTrailers: [],
                rgHlsTrailers: [],
                strCaptionManufest: "",
                strScreenshot: "",
              };
            const { rgDashTrailers: e, rgHlsTrailers: r } = (0, l.hg)(d);
            return {
              rgDashTrailers: e,
              rgHlsTrailers: r,
              strCaptionManufest: (0, l.Wv)(d),
              strScreenshot: (0, l.hl)(d),
            };
          }, [d]);
        return d && d.adaptive_trailers
          ? 0 == p.length
            ? null
            : (0, s.jsx)(x.EN, {
                active: t,
                children: (0, s.jsxs)(x.eV, {
                  "aria-labelledby": (0, h.q)(m, g),
                  bAllowFullSize: !0,
                  bOKDisabled: !0,
                  closeModal: i,
                  children: [
                    (0, s.jsx)("div", {
                      className: _().VideoPopupContainers,
                      children: (0, s.jsx)(v.P, {
                        dashManifests: p,
                        hlsManifest: f[0] || "",
                        screenshot: b,
                        altText: d.trailer_name,
                        muteWhenAutoplayBlocked: !0,
                        captionManifest: j,
                      }),
                    }),
                    (0, s.jsx)("div", {
                      id: m,
                      style: { display: "none" },
                      children: n?.name || "",
                    }),
                    (0, s.jsx)("div", {
                      id: g,
                      style: { display: "none" },
                      children: d.trailer_name,
                    }),
                  ],
                }),
              })
          : null;
      }
      function F(e) {
        const {
          trailer: r,
          fnTogglePlayTrailer: t,
          bPlayVideo: a,
          onMouseEnter: i,
          onMouseLeave: n,
        } = e;
        return (0, s.jsxs)("div", {
          className: (0, p.A)({
            [_().VideoThumbnail]: !a,
            [_().videoPlaying]: a,
            [_().ThumbnailCtn]: !0,
          }),
          onClick: t,
          onMouseEnter: i,
          onMouseLeave: n,
          children: [
            (0, s.jsx)("img", { src: (0, l.hl)(r) }),
            (0, s.jsx)("div", {
              className: _().VideoPlayButton,
              children: (0, s.jsx)(g.jGG, {}),
            }),
          ],
        });
      }
      function w(e) {
        const { id: r, fnOnClickButton: t, bUseAssetWithoutOverride: l } = e,
          [c, d] = (0, i.OP)(),
          { data: u } = (0, o.lv)(r, l),
          { data: h } = (0, o.J$)(r),
          { data: m } = (0, o.wl)(r),
          { data: g } = (0, o.xz)(r);
        if (!u || !m || !h) return null;
        const f = (0, n.b0)(u, "main_capsule");
        return (0, s.jsxs)(a.Z, {
          focusable: !0,
          noFocusRing: !0,
          className: _().MainCapsuleWithHover,
          ...d,
          onActivate: t,
          children: [
            (0, s.jsx)("img", { className: _().MainCapsule, src: f }),
            (0, s.jsxs)("div", {
              className: _().AppDetails,
              children: [
                (0, s.jsx)("div", {
                  className: (0, p.A)(_().GameName),
                  children: h.name || "",
                }),
                (0, s.jsxs)("div", {
                  className: _().ShortDesc,
                  children: [m.short_description, " "],
                }),
                (0, s.jsx)(P.n, {
                  rgTagIDs: g ? g.slice(0, 10).map((e) => e.tagid || 0) : [],
                  instanceNum: 0,
                  bLargeText: !0,
                  bHideTitle: !0,
                  bNoStoreLinks: !0,
                }),
                (0, s.jsx)(M, { id: r }),
              ],
            }),
          ],
        });
      }
    },
    3088: (e, r, t) => {
      "use strict";
      t.d(r, { c: () => i });
      var s = t(7850),
        a = t(90626);
      function i(e) {
        const {
            rgSources: r,
            onIncrementalError: t,
            onError: i,
            strAltText: n,
            ref: l,
            ...o
          } = e,
          c = a.useRef(null),
          [d, u] = a.useState(0),
          [h, m] = a.useState(0);
        a.useImperativeHandle(
          l,
          () => ({ imgRef: c, nSourceIndex: d, nSourceLength: r.length }),
          [c, d, r],
        );
        const g = a.useMemo(() => JSON.stringify(r), [r]);
        a.useEffect(() => {
          u(0), m((e) => e + 1);
        }, [g]);
        const p = a.useMemo(() => {
            let t = "";
            return (
              r && r.length > d && (t = r[d]),
              t ||
                (console.warn(
                  "MultiSourceImage created with no image src",
                  e,
                  d,
                ),
                (t =
                  "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
              t
            );
          }, [r, d, e]),
          f = a.useCallback(
            (e) => {
              t?.(e, r[d], d);
              const s = d + 1;
              s >= r.length && i && i(e), s < r.length && u(s);
            },
            [d, i, t, r],
          );
        return (0, s.jsx)(
          "img",
          { ref: c, ...o, src: p, onError: f, alt: n },
          h,
        );
      }
    },
    108: (e, r, t) => {
      "use strict";
      t.r(r), t.d(r, { default: () => V });
      var s = t(7850),
        a = t(17041),
        i = t(22837),
        n = t(45699),
        l = t(66418),
        o = t(67936),
        c = t(41399),
        d = t(10224),
        u = t(78327),
        h = t(24704);
      function m(e) {
        return (0, u.Qn)()
          ? (0, s.jsx)(c.p, { ...e })
          : (0, d.c5)()
            ? (0, s.jsx)(c.p, { ...e, bShowReviewSummary: !0 })
            : (0, s.jsx)(h.T, { ...e });
      }
      var g = t(25698),
        p = t(42834),
        f = t(52471),
        x = t(14987),
        j = t(39777),
        v = t(60014),
        b = t(44433),
        _ = t(90626),
        S = t(84811),
        C = t(32630),
        A = t(52038),
        T = t(37882),
        N = t.n(T);
      function y(e) {
        const { appid: r, strUrlOverride: t } = e,
          a = (0, x.$5)(r),
          { data: i } = (0, j.J$)(a);
        return (
          (0, _.useEffect)(() => {
            if (i) {
              const e = `${l.TS.STORE_BASE_URL}${i.store_url_path}`.replace(
                "/app/",
                t ?? "/verified/",
              );
              e != window.location.href &&
                window.history.replaceState({}, "", e);
            }
          }, [i, t]),
          i && a
            ? (0, s.jsx)(C.Ay, {
                method: "verifiedprogram",
                children: (0, s.jsx)(S.tH, {
                  children: (0, s.jsx)(k, { id: a }),
                }),
              })
            : null
        );
      }
      function M(e) {
        const { id: r } = e,
          { data: t } = (0, j.J$)(r),
          a = `${l.TS.CLAN_CDN_ASSET_URL}images/41316928/846f603df6057b070667f2741730c2038648955d.png`;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("div", {
              className: N().Headline,
              children: o.F5.LocalizeReact(
                "#VerifiedProgram_DeckTitle",
                t?.name,
                (0, s.jsxs)("span", {
                  className: N().Verified,
                  children: [
                    (0, s.jsx)("img", {
                      src: a,
                      alt: o.F5.Localize("#VerifiedProgram_DeckAlt"),
                    }),
                    o.F5.Localize("#VerifiedProgram_DeckTitle_Verified"),
                  ],
                }),
              ),
            }),
            (0, s.jsx)("div", {
              className: N().Subtitle,
              children: o.F5.LocalizeReact(
                "#VerifiedProgram_DeckSubTitle",
                (0, s.jsx)(n.Ii, {
                  className: N().Link,
                  href: `${l.TS.STORE_BASE_URL}greatondeck`,
                  children: o.F5.Localize("#VerifiedProgram_GreatOnDeck"),
                }),
              ),
            }),
          ],
        });
      }
      function k(e) {
        const { id: r } = e;
        return (0, s.jsxs)("div", {
          className: N().Ctn,
          children: [
            (0, s.jsx)(B, { id: r }),
            (0, s.jsxs)("div", {
              className: (0, A.A)("page_content"),
              children: [
                (0, s.jsx)(M, { id: r }),
                (0, s.jsx)(E, { id: r }),
                (0, s.jsx)(P, { id: r }),
                (0, s.jsx)(L, {}),
              ],
            }),
          ],
        });
      }
      function B(e) {
        const { id: r } = e,
          { data: t } = (0, j.lv)(r);
        if (!t) return null;
        const a =
          (0, p.b0)(t, "library_hero_2x") ?? (0, p.b0)(t, "library_hero");
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("div", {
              className: N().BackgroundImageCtn,
              children: (0, s.jsx)("img", { src: a, alt: "" }),
            }),
            (0, s.jsx)("div", {
              className: N().BackgroundImageBlurCtn,
              children: (0, s.jsx)("img", { src: a, alt: "" }),
            }),
          ],
        });
      }
      function P(e) {
        const { id: r } = e;
        return (0, s.jsx)("div", {
          className: N().CapsuleWrapper,
          children: (0, s.jsx)(m, {
            id: "appid" in r ? r.appid : 0,
            type: "game",
            bShowDeckCompatibilityDialog: !1,
            bShowDemoButton: !0,
            bAutoFocus: !0,
            bPreferAssetWithoutOverride: !1,
          }),
        });
      }
      function L(e) {
        const r = (0, v.aL)(
          `${l.TS.STORE_BASE_URL}steamdeck?utm_source=verifiedpage`,
          "banner",
        );
        return (0, s.jsx)(n.Ii, {
          href: r,
          className: (0, A.A)(N().HardwareBannerCtn),
          children: (0, s.jsx)(D, {}),
        });
      }
      function E(e) {
        const { id: r } = e,
          { data: t } = (0, j.J$)(r),
          a = (0, f.TH)(r);
        if (!a) return null;
        const i = `${l.TS.CLAN_CDN_ASSET_URL}images/39049601/8f21143ba4f6331e117568740aa286e975a5afb1.png`,
          { rgDashTrailers: n, rgHlsTrailers: c } = (0, f.hg)(a);
        return (0, s.jsxs)("div", {
          className: N().DeviceFullWidthShadow,
          children: [
            (0, s.jsxs)("div", {
              className: (0, A.A)(N().DeviceWrapper),
              children: [
                (0, s.jsx)(g.S, {
                  children: (0, s.jsx)("div", {
                    className: N().TrailerCtn,
                    children: (0, s.jsx)(b.P, {
                      dashManifests: n,
                      hlsManifest: c[0],
                      screenshot:
                        a.screenshot_full ?? a.screenshot_medium ?? "",
                      altText: t?.name ?? "",
                      muteWhenAutoplayBlocked: !0,
                    }),
                  }),
                }),
                (0, s.jsx)("img", {
                  src: i,
                  alt: o.F5.Localize("#VerifiedProgram_DeckDeviceAlt"),
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: N().VideoDisclaimer,
              children: o.F5.Localize("#VerifiedProgram_DeckDisclaimer"),
            }),
          ],
        });
      }
      function D(e) {
        const r = (0, d.zI)(),
          t = (0, i.sfN)(l.TS.LANGUAGE);
        return (0, s.jsx)(a.u, {
          language: t,
          strAltText: o.F5.Localize("#VerifiedProgram_DeckShopBannerAlt"),
          strImageToken: r
            ? "{STEAM_CLAN_LOC_IMAGE}/39049601/6e0ec24257ee5ada6e922c2130eaa75ce83747e8.jpg"
            : "{STEAM_CLAN_LOC_IMAGE}/39049601/c18308dc60fd94678bb348608ddc0d6b8fdb11ab.jpg",
        });
      }
      function V(e) {
        const {
          match: {
            params: { appid: r },
          },
        } = e;
        return (0, s.jsx)(y, { appid: Number.parseInt(r) });
      }
    },
  },
]);
