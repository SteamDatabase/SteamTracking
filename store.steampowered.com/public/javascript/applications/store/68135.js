/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [68135],
    {
      95414: (w, G, e) => {
        "use strict";
        e.d(G, { j: () => T, u: () => $ });
        var t = e(7850),
          A = e(90626),
          O = e(24660),
          I = e(83482),
          M = e(72865),
          F = e(77200),
          L = e(53113),
          l = e(68094),
          j = e(72609),
          Q = e(3166);
        function U(d) {
          if (d) {
            if ("appid" in d) return "app";
            if ("bundleid" in d) return "bundle";
            if ("packageid" in d) return "sub";
          }
        }
        function T(d) {
          const {
              id: m,
              hoverClassName: u,
              fnGetIDOverride: s,
              fnHoverState: o,
              disableScreenshots: D,
              children: f,
            } = d,
            n = A.useRef(null),
            P = A.useCallback(
              (v) => {
                const i = U(m);
                i &&
                  (o && o(!0),
                  window.GameHover &&
                    (n.current &&
                      D &&
                      (n.current.dataset.hoverDisableScreenshots = "true"),
                    window.GameHover(s ? s() : n.current, v, "global_hover", {
                      type: i,
                      id: (0, l.G$)(m).id,
                      v6: 1,
                    })));
              },
              [o, s, D, m],
            ),
            p = A.useCallback(
              (v) => {
                U(m) &&
                  (o && v.relatedTarget && o(!1),
                  window.HideGameHover &&
                    window.HideGameHover(
                      s ? s() : n.current,
                      v,
                      "global_hover",
                    ));
              },
              [m, o, s],
            );
          return (0, t.jsx)("div", {
            ref: n,
            className: u,
            onMouseEnter: P,
            onMouseLeave: p,
            onFocus: P,
            onBlur: p,
            children: f,
          });
        }
        function $(d) {
          const {
              id: m,
              strExtraParams: u,
              fnOnClickOverride: s,
              strOverrideURL: o,
            } = d,
            D = (0, M.n9)(),
            f = (0, F.w)(),
            n = (0, L.NT)(
              o ||
                (m && "creatorid" in m
                  ? (0, I.It)(
                      `${j.TS.STORE_BASE_URL}curator/${((0, l.G$))(m).id}${u ? `?${u}` : ""}`,
                      D,
                      f,
                    )
                  : (0, I.It)(
                      `${j.TS.STORE_BASE_URL}${U(m)}/${((0, l.G$))(m).id}${u ? `?${u}` : ""}`,
                      D,
                      f,
                    )),
            );
          return (0, t.jsx)(T, {
            ...d,
            children: (0, t.jsx)(O.Ii, {
              className: d.className,
              href: s ? void 0 : n,
              target: j.TS.IN_CLIENT || s ? void 0 : "_blank",
              rel: "noopener noreferrer",
              onClick: s,
              children: d.children,
            }),
          });
        }
      },
      63063: (w, G, e) => {
        "use strict";
        e.d(G, { q: () => $ });
        var t = e(7850),
          A = e(76105),
          O = e(48156),
          I = e(40358),
          M = e(90626),
          F = e(63803),
          L = e(76532),
          l = e.n(L),
          j = e(29245),
          Q = e(48357),
          U = e(64774),
          T = e(36707);
        function $(u) {
          const {
              id: s,
              bHidePrice: o,
              bShowInLibraryInsteadOfPrice: D,
              bHidePlatforms: f,
              strClassName: n,
              creatorAccountID: P,
              bShowName: p,
              onlyOneDiscountPct: v,
              bShowAddToCart: i,
              bShowWishlistButton: E,
            } = u,
            h = (0, M.useRef)(null),
            [r, g] = (0, M.useState)(!1),
            { data: x } = (0, I.J$)(s);
          if (
            ((0, M.useEffect)(() => {
              h.current && g(h.current.offsetWidth < 370);
            }, [h]),
            !s || !("appid" in s || "bundleid" in s || "packageid" in s))
          )
            return null;
          const Y = !!(E && x?.item_type == O.c6.qI),
            J = !!(!P && !i && !Y && f && o);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              !J &&
                (0, t.jsxs)("div", {
                  ref: h,
                  className: (0, T.A)(
                    l().CapsuleBottomBar,
                    "CapsuleBottomBar",
                    n,
                  ),
                  children: [
                    P && (0, t.jsx)(m, { creatorAccountID: P, ...u }),
                    i &&
                      (0, t.jsx)(F.h, {
                        id: s,
                        className: (0, T.A)(
                          l().MaxActionButtonWidth,
                          l().AddToCartButton,
                        ),
                      }),
                    Y &&
                      "appid" in s &&
                      (0, t.jsx)(U.r, {
                        appid: s.appid,
                        className: (0, T.A)(
                          l().MaxActionButtonWidth,
                          l().AddToWishlistButton,
                        ),
                      }),
                    !f &&
                      (0, t.jsx)(j.Q, {
                        id: s,
                        bMinimizePlatforms: r,
                        bHideWindows: !0,
                      }),
                    !o &&
                      (0, t.jsx)("span", {
                        className: l().BottomBarPriceInfo,
                        children: (0, t.jsx)(Q.NF, {
                          id: s,
                          bShowInLibrary: D,
                          onlyOneDiscountPct: v,
                        }),
                      }),
                  ],
                }),
              p && (0, t.jsx)(d, { id: s }),
            ],
          });
        }
        function d(u) {
          const { id: s } = u,
            { data: o } = (0, I.J$)(s);
          return o?.name
            ? (0, t.jsx)("div", {
                className: l().CapsuleName,
                children: o.name,
              })
            : null;
        }
        function m(u) {
          const { creatorAccountID: s, strClassName: o } = u,
            D = (0, M.useMemo)(() => ({ creatorid: s }), [s]),
            { data: f } = (0, I.J$)(D),
            { data: n } = (0, I.lv)(D);
          if (!f) return null;
          const P = (0, A.t)(n?.clan_avatar, "Medium"),
            p = f.name || "";
          return (0, t.jsxs)("div", {
            className: (0, T.A)(l().BottomCreatorRow, o),
            children: [
              (0, t.jsx)("img", {
                className: (0, T.A)(l().CreatorLogo),
                src: P,
                alt: p,
              }),
              (0, t.jsx)("span", { className: l().CreatorName, children: p }),
            ],
          });
        }
      },
      64774: (w, G, e) => {
        "use strict";
        e.d(G, { _: () => n, r: () => f });
        var t = e(7850),
          A = e(48156),
          O = e(29522),
          I = e(40358),
          M = e(72865),
          F = e(24179),
          L = e(54528),
          l = e(96362),
          j = e(90626),
          Q = e(83482),
          U = e(76532),
          T = e.n(U),
          $ = e(85705),
          d = e(36118),
          m = e(71421),
          u = e(36707),
          s = e(18210),
          o = e(3166),
          D = e(89926);
        function f(v) {
          const { appid: i, className: E, bTextMode: h } = v,
            r = (0, O.$5)(i),
            { data: g } = (0, I.J$)(r),
            { data: x } = (0, I.by)(r);
          return (0, t.jsx)(n, {
            appid: i,
            bIsFree: !!g?.is_free,
            bIsComingSoon: !!x?.is_coming_soon,
            bTextMode: h,
            className: E,
          });
        }
        function n(v) {
          const [i, E] = j.useState(!1),
            h = (0, M.n9)(),
            {
              appid: r,
              bIsFree: g,
              bIsComingSoon: x,
              className: Y,
              bTextMode: J,
            } = v,
            z = (0, O.$5)(r),
            { bIsOwned: ie } = (0, F.ZJ)(z),
            te = (0, L.bB)(r),
            { mutateAsync: se } = (0, l.s)(r, !te, (0, Q.L3)(h)),
            { elDialogElement: le, fnShowLogonDialog: H } = (0, D.l)(),
            de = async () => {
              if (!o.iA.logged_in) {
                H();
                return;
              }
              i || (E(!0), await se(), E(!1));
            };
          if (ie || (!x && g))
            return g ? (0, t.jsx)(P, { possibleDemoAppID: r }) : null;
          let V = null;
          return (
            i && !J
              ? (V = (0, t.jsx)($.k, { size: 18 }))
              : te
                ? te &&
                  (V = J ? (0, s.we)("#OnWishlist") : (0, t.jsx)(d.qnF, {}))
                : (V = J
                    ? (0, s.we)("#wishlist_add_to_wishlist")
                    : (0, t.jsx)(d.T4m, {})),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(m.he, {
                  toolTipContent: (0, s.we)("#AddToWishlist_ttip"),
                  children: (0, t.jsx)("div", {
                    className: (0, u.A)(T().WishList, Y),
                    onClick: de,
                    children: V,
                  }),
                }),
                le,
              ],
            })
          );
        }
        function P(v) {
          const { possibleDemoAppID: i, className: E } = v,
            h = (0, O.$5)(i),
            { data: r } = (0, I.J$)(h);
          return r &&
            (r.type == A.uE.ue || r.type == A.uE.Vi) &&
            r.related_items?.parent_appid
            ? (0, t.jsx)(p, {
                parentAppID: r.related_items?.parent_appid,
                className: E,
              })
            : null;
        }
        function p(v) {
          const { parentAppID: i, className: E } = v,
            h = (0, O.$5)(i),
            { data: r } = (0, I.J$)(h),
            { data: g } = (0, I.by)(h);
          return !r || !g
            ? null
            : (0, t.jsx)(n, {
                appid: i,
                bIsComingSoon: !!g.is_coming_soon,
                bIsFree: !!r.is_free,
                className: E,
              });
        }
      },
      96117: (w, G, e) => {
        "use strict";
        e.d(G, { W: () => fe, J: () => ue });
        var t = e(7850),
          A = e(24660),
          O = e(19298),
          I = e(20169),
          M = e(48156),
          F = e(88743),
          L = e(6698),
          l = e(80702),
          j = e(86298),
          Q = e(95414);
        function U() {
          return { width: 460, height: 215 };
        }
        function T() {
          return { width: 616, height: 353 };
        }
        function $() {
          return { width: 231, height: 87 };
        }
        var d = e(46727),
          m = e(84607),
          u = e(41188),
          s = e(77459),
          o = e(63063),
          D = e(21721),
          f = e(87249),
          n = e(40358),
          P = e(29522),
          p = e(72865),
          v = e(24179),
          i = e(32994),
          E = e(90626),
          h = e(83482),
          r = e(33924),
          g = e(76532),
          x = e.n(g),
          Y = e(96155),
          J = e(77200),
          z = e(36707),
          ie = e(18210),
          te = e(53113),
          se = e(3166),
          le = e(91291),
          H = e.n(le),
          de = e(3348),
          V = e(47875);
        const ue = "capsule_index_";
        function fe(a) {
          const {
              capsule: c,
              bShowParentApp: B,
              elElementToAppendToHover: _,
              index: C,
              navKey: W,
              bHideStoreHover: S,
              onlyOneDiscountPct: Z,
              bPreferDemoStorePage: b,
              bShowEarlyAccessBanner: k,
            } = a,
            q = (0, se.Qn)(),
            [ee, y] = E.useState(!1),
            [N, ne] = E.useState(!1),
            [X, oe] = E.useState(!1),
            ae = E.useRef(!1);
          E.useEffect(() => {
            if (N && !ae.current) {
              const pe = window.setTimeout(() => {
                (ae.current = !0), oe(!0);
              }, 500);
              return () => window.clearTimeout(pe);
            }
            return oe(N || ee), () => {};
          }, [N, ee]);
          const { data: ce } = (0, i.lI)(),
            re = !!ce?.preferences?.disable_microtrailers,
            R = (0, F.rt)(c),
            { data: K } = (0, n.J$)(R),
            me = (0, P.$5)(B ? K?.related_items?.parent_appid : void 0),
            { data: ve } = (0, n.J$)(me);
          if (!K || !R) return null;
          const Ee = !!ve && !!me,
            Ie = (0, t.jsx)(De, {
              ...a,
              strExtraParams: a.strExtraParams,
              id: R,
              bIsHovered: X && !re,
              bHasParentAppToDisplay: Ee,
              onlyOneDiscountPct: Z,
              bShowEarlyAccessBanner: k,
              bUsePanel: !S && !q,
            });
          return (0, t.jsxs)(O.Z, {
            className: (0, z.A)({
              [x().OuterCapsuleContainer]: !0,
              [x().TrailerActive]: X && !re && q,
              [ue + C]: C == 0,
            }),
            navEntryPreferPosition: I.iU.PREFERRED_CHILD,
            navKey: W,
            onFocusWithin: a.imageType != "library" ? ne : void 0,
            children: [
              (0, t.jsxs)(L.oj, {
                appid: K.appid,
                children: [
                  S
                    ? (0, t.jsx)("div", {
                        onMouseEnter: () => y(!0),
                        onMouseLeave: () => y(!1),
                        children: Ie,
                      })
                    : (0, t.jsx)(l.Q, {
                        className: x().CapsuleContainer,
                        id: R,
                        elElementToAppend: a.elElementToAppendToHover,
                        bShowDemoButton: a.bShowDemoButton,
                        bPreferDemoStorePage: a.bPreferDemoStorePage,
                        bShowDeckCompatibilityDialog:
                          a.bShowDeckCompatibilityDialog,
                        eHardwareCompatibilityDisplay:
                          a.eHardwareCompatibilityDisplay,
                        bHidePrice: a.bHidePrice,
                        bUseSubscriptionLayout: a.bUseSubscriptionLayout,
                        strExtraParams: a.strExtraParams,
                        nCreatorAccountID: a.creatorAccountID,
                        nWidthMultiplier: a.nWidthMultiplier,
                        bShowIgnoreButton: a.bShowIgnoreButton,
                        bShowDescription: a.bShowDescriptionInHover,
                        children: Ie,
                      }),
                  !!_ && (0, t.jsx)(t.Fragment, { children: _ }),
                ],
              }),
              Ee &&
                (0, t.jsx)(he, {
                  strExtraParams: a.strExtraParams,
                  parentID: me,
                  parentStoreItemDefaultInfo: ve,
                  childAppType: K.type,
                  bPreferDemoStorePage: !!b,
                }),
            ],
          });
        }
        function he(a) {
          const {
              strExtraParams: c,
              parentID: B,
              parentStoreItemDefaultInfo: _,
              childAppType: C,
              bPreferDemoStorePage: W,
            } = a,
            S = (0, p.n9)(),
            Z = (0, se.Qn)(),
            { data: b } = (0, n.lv)(B);
          return b
            ? (0, t.jsx)(A.ml, {
                className: x().CapsuleParentInfo,
                ...(0, j.S)(_, S, Z, W, c),
                children: (0, t.jsxs)(L.oj, {
                  appid: _.appid,
                  children: [
                    (0, t.jsx)("div", {
                      className: x().ParentType,
                      children: (0, ie.we)(
                        C == M.uE.Ov
                          ? "#SalePage_ParentApp_SoundTrack"
                          : "#SalePage_ParentApp_DLC",
                      ),
                    }),
                    (0, t.jsx)(Q.u, {
                      id: B,
                      strExtraParams: c,
                      children: (0, t.jsx)("img", {
                        loading: "lazy",
                        className: r.AppCapsuleImage,
                        alt: _.name || "",
                        src: (0, D.b0)(b, "small_capsule"),
                        ...$(),
                      }),
                    }),
                  ],
                }),
              })
            : null;
        }
        function De(a) {
          const {
              id: c,
              bHideStatusBanners: B,
              bUsePanel: _,
              strExtraParams: C,
              index: W,
              imageType: S,
              bHasParentAppToDisplay: Z,
              bIsHovered: b,
              strDoubleCapsuleMessage: k,
              bPreferDemoStorePage: q,
              bShowEarlyAccessBanner: ee,
              bPreferAssetWithoutOverride: y,
            } = a,
            N = (0, p.n9)(),
            ne = (0, J.w)(),
            X = (0, se.Qn)(),
            oe = (0, P._Z)(c),
            { data: ae } = (0, n.J$)(c);
          if (!ae) return null;
          const ce = _
              ? void 0
              : (0, te.NT)(
                  (0, h.It)(`${(0, V._)(ae, q)}${C ? `?${C}` : ""}`, N, ne),
                ),
            re = _ ? O.Z : A.Ii,
            R = b && X,
            K = !!k;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("div", {
                className: (0, z.A)({ [H().TwoWidthCtn]: K }),
                children: [
                  (0, t.jsxs)(re, {
                    href: ce,
                    style: {
                      display: "block",
                      cursor: "pointer",
                      position: X ? "relative" : void 0,
                      zIndex: R ? 4 : void 0,
                    },
                    className: (0, z.A)({ [H().TwoWidthCapsule]: K }),
                    preferredFocus: Z,
                    focusable: !0,
                    noFocusRing: R,
                    children: [
                      (0, t.jsx)(d.V, {
                        appids: oe,
                        hide_status_banners: B,
                        show_early_access: ee,
                      }),
                      S != "none" &&
                        (0, t.jsx)(m.a, {
                          imageType: S,
                          id: c,
                          bPreferAssetWithoutOverride: y,
                        }),
                      (0, t.jsx)(Y.J, { id: c }),
                      (0, t.jsx)("div", {
                        className: (0, z.A)({ [H().FadeIn]: R }),
                        children: (0, t.jsx)(f.mj, {
                          id: c,
                          active: b,
                          bIsHoverMode: !0,
                          eGrowOnActivate: R
                            ? f.C0.k_ETrailerGrowAmount_Implicit
                            : void 0,
                        }),
                      }),
                    ],
                  }),
                  K &&
                    (0, t.jsx)(Pe, {
                      id: c,
                      strDoubleCapsuleMessage: k,
                      index: W,
                    }),
                ],
              }),
              (0, t.jsx)(_e, { ...a }),
            ],
          });
        }
        function Pe(a) {
          const { id: c, strDoubleCapsuleMessage: B, index: _ } = a,
            { data: C } = (0, n.by)(c),
            { data: W } = (0, n.xz)(c);
          return (0, t.jsxs)("div", {
            className: (0, z.A)(H().TwoWidthSideInfo, "TwoWidthSideInfo"),
            children: [
              (0, t.jsx)("div", { className: H().Reason, children: B }),
              (0, t.jsx)("div", {
                className: H().StoreSaleItemRelease,
                children: (0, t.jsx)("span", {
                  children: C ? (0, de.CC)(C) : "",
                }),
              }),
              (0, t.jsx)(u.n, {
                bHideTitle: !0,
                rgTagIDs: W?.map((S) => S.tagid) || [],
                instanceNum: _,
              }),
            ],
          });
        }
        function _e(a) {
          const {
              id: c,
              bHidePriceIfOwned: B,
              bHideStatusBanners: _,
              bUseSubscriptionLayout: C,
              elElementToAppendToHover: W,
              bHidePrice: S,
              bHidePlatforms: Z,
              creatorAccountID: b,
              bIsHovered: k,
              onlyOneDiscountPct: q,
              strDoubleCapsuleMessage: ee,
            } = a,
            { data: y } = (0, n.J$)(c),
            { bIsOwned: N } = (0, v.ZJ)(c),
            ne = N && !_;
          if (C && y && y.item_type == M.c6.qI && y.appid)
            return (0, t.jsx)(s.E, { appid: y.appid, bIsMuted: k });
          if (W) return null;
          const X = !!(N && B);
          return (0, t.jsx)(o.q, {
            id: c,
            bHidePrice: S,
            bShowInLibraryInsteadOfPrice: X,
            bHidePlatforms: Z,
            creatorAccountID: b,
            bShowName: a.bShowName,
            onlyOneDiscountPct: q,
            bShowWishlistButton: !!ee,
          });
        }
      },
      33924: (w) => {
        w.exports = {
          OtherEventsCtn: "_9H6b5yfaxlmcnHvkqtwDK",
          OtherEvents_MainImageCtn: "_2qyLPxO8_nkczRvFiaju8N",
          OtherEvents: "_16DzRvjcqFcYr0NYcWmTrg",
          EventSizer: "_2JC5DEuXUeE50kjpb7Eeau",
          OtherEvents_EventCtn: "_1MwNf8slOG9lOvAeOshmuu",
          EventSummaryText: "ENbI1gFgvIca6HSKAbfiJ",
          ShowInWideMode: "RLbLb742gN095uDUITtIB",
          EventSummaryContainer: "_2GYp44BuZLfKRQdeILTDC3",
          HideInWideMode: "_3itHivPkrgI7TWENi1yxjI",
          OtherEvents_ContentCtn: "_22jEpNTfml-w_aRJV-fKDm",
          HoversEnabled: "_3o6M87A6T172WsUE6MNvdW",
          OtherEvents_TextTitle: "_2jc1DpJ_WzFtigRh5qDWce",
          OtherEvents_MainImage: "_3_wKbXvT7_y5YkrtadL0I6",
          PartnerEventRowCapsule_MainImage: "bC2Zkx7FlANno4SW8FwB-",
          EventSummaryType: "_11JXznGoylLSEmZXZbgcsq",
          OtherEvents_BGImage: "_2pPj9UWoWM6h318uBN0-8X",
          MaskImages: "_1kFdtNfhXozP4yI_qOv2H-",
          OtherEvents_TextCtn: "_3-EtNa1Nr_737K0kglkT9C",
          UpcomingCtn: "_2CXrGPtlQh-j3aSa6XsQDI",
          OtherEvents_SubTitle: "_1Swox5XYdeesack-J7fNLH",
          EventType: "_2BWwVF5N-3fDuJRblB6gHb",
          AppCapsuleImage: "_3OzV3h4jW1bkLmB6TqbYmo",
          CapsuleShadow: "_2rjkJQtvus70aLmbfGoneD",
          AppCapsuleCtn: "_16au-uWHggl6G731aw_eHt",
          AppCapsuleImageHover: "IeC3X0McKdGC79BsC3VvM",
          AppCapsulePrice: "_2-l2M5GPuxKFwV8h1tc_fH",
        };
      },
      91291: (w) => {
        w.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          TwoWidthCtn: "_49thIpYeG08pUfNc1x_w9",
          TwoWidthCapsule: "_78Qv2C95AM2DNCuLD5o8U",
          TwoWidthSideInfo: "_2qz5D65VkY796Xw-al9f_a",
          Reason: "_2h0GKAYcXRP10ryZHFn79d",
          StoreSaleItemRelease: "wJ7ZiTc09km2kH4mSsZ9j",
          FadeIn: "_1xh0S-u1cc7_ADm8OLsN-i",
          fadeIn: "cEYXuP-T4izqJqayIpH0D",
          BackgroundAnimation: "_2_vb1-Pr1-2Gblfyxj023k",
          "ItemFocusAnim-darkerGrey-nocolor": "op3gqmHyESfHpHgPheRVq",
          "ItemFocusAnim-darkerGrey": "_12l58v9-cJk-169Qesl-e5",
          "ItemFocusAnim-darkGreySettings": "_2cAK7l3w0qC8uv5uzKjusc",
          "ItemFocusAnim-darkGrey": "_2uLjKVdzQQCodi_XH5ZPfi",
          "ItemFocusAnim-grey": "_3Za5duiaOuAcNrQJeEpjxD",
          "ItemFocusAnim-translucent-white-10": "_3wyVPtc4dD1Msi7wqRvJq3",
          "ItemFocusAnim-translucent-white-20": "_2v6guEab39IMo3I1kfiwXc",
          "ItemFocusAnimBorder-darkGrey": "_3SS0MMDROpRbR_hYLVjAcl",
          "ItemFocusAnim-green": "_3qjU-9ZS6bDpjjMAOYUhGm",
          focusAnimation: "_3-bYSIZZNIWgiOR__mB2jd",
          hoverAnimation: "_39oPHCcA4NgTm53rnykAtP",
        };
      },
    },
  ]);
})();
