/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [70677],
  {
    33924: (e) => {
      e.exports = {
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
    91291: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        narrowWidth: "500px",
        TwoWidthCtn: "_49thIpYeG08pUfNc1x_w9",
        TwoWidthCapsule: "_78Qv2C95AM2DNCuLD5o8U",
        TwoWidthSideInfo: "_2qz5D65VkY796Xw-al9f_a",
        Reason: "_2h0GKAYcXRP10ryZHFn79d",
        StoreSaleItemRelease: "wJ7ZiTc09km2kH4mSsZ9j",
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
    20433: (e, t, n) => {
      "use strict";
      n.d(t, { j: () => m, u: () => b });
      var a = n(7850),
        s = n(90626),
        r = n(45699),
        o = n(55963),
        i = n(60014),
        l = n(49411),
        c = n(61336),
        d = n(52541),
        u = n(66418);
      n(78327);
      function p(e) {
        if (e) {
          if ("appid" in e) return "app";
          if ("bundleid" in e) return "bundle";
          if ("packageid" in e) return "sub";
        }
      }
      function m(e) {
        const {
            id: t,
            hoverClassName: n,
            fnGetIDOverride: r,
            fnHoverState: o,
            disableScreenshots: i,
            children: l,
          } = e,
          c = s.useRef(null),
          u = s.useCallback(
            (e) => {
              const n = p(t);
              n &&
                (o && o(!0),
                window.GameHover &&
                  (c.current &&
                    i &&
                    (c.current.dataset.hoverDisableScreenshots = "true"),
                  window.GameHover(r ? r() : c.current, e, "global_hover", {
                    type: n,
                    id: (0, d.G$)(t).id,
                    v6: 1,
                  })));
            },
            [o, r, i, t],
          ),
          m = s.useCallback(
            (e) => {
              p(t) &&
                (o && e.relatedTarget && o(!1),
                window.HideGameHover &&
                  window.HideGameHover(r ? r() : c.current, e, "global_hover"));
            },
            [t, o, r],
          );
        return (0, a.jsx)("div", {
          ref: c,
          className: n,
          onMouseEnter: u,
          onMouseLeave: m,
          onFocus: u,
          onBlur: m,
          children: l,
        });
      }
      function b(e) {
        const {
            id: t,
            strExtraParams: n,
            fnOnClickOverride: s,
            strOverrideURL: b,
          } = e,
          h = (0, i.n9)(),
          _ = (0, l.w)(),
          I = (0, c.NT)(
            b ||
              (t && "creatorid" in t
                ? (0, o.It)(
                    `${u.TS.STORE_BASE_URL}curator/${((0, d.G$))(t).id}${n ? `?${n}` : ""}`,
                    h,
                    _,
                  )
                : (0, o.It)(
                    `${u.TS.STORE_BASE_URL}${p(t)}/${((0, d.G$))(t).id}${n ? `?${n}` : ""}`,
                    h,
                    _,
                  )),
          );
        return (0, a.jsx)(m, {
          ...e,
          children: (0, a.jsx)(r.Ii, {
            className: e.className,
            href: s ? void 0 : I,
            target: u.TS.IN_CLIENT || s ? void 0 : "_blank",
            rel: "noopener noreferrer",
            onClick: s,
            children: e.children,
          }),
        });
      }
    },
    75152: (e, t, n) => {
      "use strict";
      n.d(t, { q: () => h });
      var a = n(7850),
        s = n(99171),
        r = n(95578),
        o = n(39777),
        i = n(90626),
        l = n(43976),
        c = n(18654),
        d = n.n(c),
        u = n(96006),
        p = n(3740),
        m = n(14326),
        b = n(52038);
      function h(e) {
        const {
            id: t,
            bHidePrice: n,
            bShowInLibraryInsteadOfPrice: s,
            bHidePlatforms: c,
            strClassName: h,
            creatorAccountID: v,
            bShowName: f,
            onlyOneDiscountPct: x,
            bShowAddToCart: S,
            bShowWishlistButton: j,
          } = e,
          w = (0, i.useRef)(null),
          [A, g] = (0, i.useState)(!1),
          { data: C } = (0, o.J$)(t);
        if (
          ((0, i.useEffect)(() => {
            w.current && g(w.current.offsetWidth < 370);
          }, [w]),
          !t || !("appid" in t || "bundleid" in t || "packageid" in t))
        )
          return null;
        const P = Boolean(j && C?.item_type == r.c6.qI),
          D = Boolean(!v && !S && !P && c && n);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            !D &&
              (0, a.jsxs)("div", {
                ref: w,
                className: (0, b.A)(
                  d().CapsuleBottomBar,
                  "CapsuleBottomBar",
                  h,
                ),
                children: [
                  v && (0, a.jsx)(I, { creatorAccountID: v, ...e }),
                  S &&
                    (0, a.jsx)(l.h, {
                      id: t,
                      className: (0, b.A)(
                        d().MaxActionButtonWidth,
                        d().AddToCartButton,
                      ),
                    }),
                  P &&
                    "appid" in t &&
                    (0, a.jsx)(m.r, {
                      appid: t.appid,
                      className: (0, b.A)(
                        d().MaxActionButtonWidth,
                        d().AddToWishlistButton,
                      ),
                    }),
                  !c &&
                    (0, a.jsx)(u.Q, {
                      id: t,
                      bMinimizePlatforms: A,
                      bHideWindows: !0,
                    }),
                  !n &&
                    (0, a.jsx)("span", {
                      className: d().BottomBarPriceInfo,
                      children: (0, a.jsx)(p.NF, {
                        id: t,
                        bShowInLibrary: s,
                        onlyOneDiscountPct: x,
                      }),
                    }),
                ],
              }),
            f && (0, a.jsx)(_, { id: t }),
          ],
        });
      }
      function _(e) {
        const { id: t } = e,
          { data: n } = (0, o.J$)(t);
        return n?.name
          ? (0, a.jsx)("div", { className: d().CapsuleName, children: n.name })
          : null;
      }
      function I(e) {
        const { creatorAccountID: t, strClassName: n } = e,
          r = (0, i.useMemo)(() => ({ creatorid: t }), [t]),
          { data: l } = (0, o.J$)(r),
          { data: c } = (0, o.lv)(r);
        if (!l) return null;
        const u = (0, s.t)(c?.clan_avatar, "Medium"),
          p = l.name || "";
        return (0, a.jsxs)("div", {
          className: (0, b.A)(d().BottomCreatorRow, n),
          children: [
            (0, a.jsx)("img", {
              className: (0, b.A)(d().CreatorLogo),
              src: u,
              alt: p,
            }),
            (0, a.jsx)("span", { className: d().CreatorName, children: p }),
          ],
        });
      }
    },
    22687: (e, t, n) => {
      "use strict";
      n.d(t, { W: () => L, J: () => F });
      var a = n(7850),
        s = n(45699),
        r = n(76217),
        o = n(23310),
        i = n(95578),
        l = n(76682),
        c = n(29008),
        d = n(20433);
      var u = n(94191),
        p = n(78588),
        m = n(90421),
        b = n(12424),
        h = n(75152),
        _ = n(42834),
        I = n(80696),
        v = n(39777),
        f = n(14987),
        x = n(60014),
        S = n(58918),
        j = n(90626),
        w = n(55963),
        A = n(33924),
        g = n(18654),
        C = n.n(g),
        P = n(72860),
        D = n(70300),
        y = n(54492),
        E = n(49411),
        N = n(52038),
        T = n(61859),
        H = n(61336),
        B = n(78327),
        k = n(91291),
        O = n.n(k),
        M = n(5309),
        W = n(71420);
      const F = "capsule_index_";
      function L(e) {
        const {
            capsule: t,
            bShowParentApp: n,
            elElementToAppendToHover: s,
            index: i,
            navKey: d,
            bHideStoreHover: u,
            onlyOneDiscountPct: p,
            bPreferDemoStorePage: m,
            bShowEarlyAccessBanner: b,
          } = e,
          h = (0, B.Qn)(),
          [_, I] = j.useState(!1),
          x = (0, l.rt)(t),
          { data: S } = (0, v.J$)(x),
          w = (0, f.$5)(n ? S?.related_items?.parent_appid : void 0),
          { data: A } = (0, v.J$)(w);
        if (!S || !x) return null;
        const g = !!A && !!w,
          P = (0, a.jsx)($, {
            ...e,
            strExtraParams: e.strExtraParams,
            id: x,
            bIsHovered: _,
            bHasParentAppToDisplay: g,
            onlyOneDiscountPct: p,
            bShowEarlyAccessBanner: b,
            bUsePanel: !u && !h,
          });
        return (0, a.jsxs)(r.Z, {
          className: (0, N.A)({
            [C().OuterCapsuleContainer]: !0,
            [F + i]: 0 == i,
          }),
          navEntryPreferPosition: o.iU.PREFERRED_CHILD,
          navKey: d,
          children: [
            (0, a.jsxs)(D.oj, {
              appid: S.appid,
              children: [
                Boolean(u)
                  ? (0, a.jsx)("div", {
                      onMouseEnter: () => I(!0),
                      onMouseLeave: () => I(!1),
                      children: P,
                    })
                  : (0, a.jsx)(c.Q, {
                      className: C().CapsuleContainer,
                      id: x,
                      elElementToAppend: e.elElementToAppendToHover,
                      bShowDemoButton: e.bShowDemoButton,
                      bPreferDemoStorePage: e.bPreferDemoStorePage,
                      bShowDeckCompatibilityDialog:
                        e.bShowDeckCompatibilityDialog,
                      bHidePrice: e.bHidePrice,
                      bUseSubscriptionLayout: e.bUseSubscriptionLayout,
                      strExtraParams: e.strExtraParams,
                      nCreatorAccountID: e.creatorAccountID,
                      nWidthMultiplier: e.nWidthMultiplier,
                      bShowIgnoreButton: e.bShowIgnoreButton,
                      bShowDescription: e.bShowDescriptionInHover,
                      children: P,
                    }),
                Boolean(s) && (0, a.jsx)(a.Fragment, { children: s }),
              ],
            }),
            g &&
              (0, a.jsx)(R, {
                strExtraParams: e.strExtraParams,
                parentID: w,
                parentStoreItemDefaultInfo: A,
                childAppType: S.type,
                bPreferDemoStorePage: Boolean(m),
              }),
          ],
        });
      }
      function R(e) {
        const {
            strExtraParams: t,
            parentID: n,
            parentStoreItemDefaultInfo: r,
            childAppType: o,
            bPreferDemoStorePage: l,
          } = e,
          c = (0, x.n9)(),
          u = (0, B.Qn)(),
          { data: p } = (0, v.lv)(n);
        return p
          ? (0, a.jsx)(s.ml, {
              className: C().CapsuleParentInfo,
              ...(0, P.S)(r, c, u, l, t),
              children: (0, a.jsxs)(D.oj, {
                appid: r.appid,
                children: [
                  (0, a.jsx)("div", {
                    className: C().ParentType,
                    children: (0, T.we)(
                      o == i.uE.Ov
                        ? "#SalePage_ParentApp_SoundTrack"
                        : "#SalePage_ParentApp_DLC",
                    ),
                  }),
                  (0, a.jsx)(d.u, {
                    id: n,
                    strExtraParams: t,
                    children: (0, a.jsx)("img", {
                      loading: "lazy",
                      className: A.AppCapsuleImage,
                      alt: r.name || "",
                      src: (0, _.b0)(p, "small_capsule"),
                      width: 231,
                      height: 87,
                    }),
                  }),
                ],
              }),
            })
          : null;
      }
      function $(e) {
        const {
            id: t,
            bHideStatusBanners: n,
            bUsePanel: o,
            strExtraParams: i,
            index: l,
            imageType: c,
            bHasParentAppToDisplay: d,
            bIsHovered: m,
            strDoubleCapsuleMessage: b,
            bPreferDemoStorePage: h,
            bShowEarlyAccessBanner: _,
            bPreferAssetWithoutOverride: S,
          } = e,
          j = (0, x.n9)(),
          A = (0, E.w)(),
          g = (0, f._Z)(t),
          { data: C } = (0, v.J$)(t);
        if (!C) return null;
        const P = o
            ? void 0
            : (0, H.NT)(
                (0, w.It)(`${(0, W._)(C, h)}${i ? `?${i}` : ""}`, j, A),
              ),
          D = o ? r.Z : s.Ii,
          T = !!b;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              className: (0, N.A)({ [O().TwoWidthCtn]: T }),
              children: [
                (0, a.jsxs)(D, {
                  href: P,
                  style: { display: "block", cursor: "pointer" },
                  className: (0, N.A)({ [O().TwoWidthCapsule]: T }),
                  preferredFocus: d,
                  focusable: !0,
                  children: [
                    (0, a.jsx)(u.V, {
                      appids: g,
                      hide_status_banners: n,
                      show_early_access: _,
                    }),
                    "none" != c &&
                      (0, a.jsx)(p.a, {
                        imageType: c,
                        id: t,
                        bPreferAssetWithoutOverride: S,
                      }),
                    (0, a.jsx)(y.J, { id: t }),
                    (0, a.jsx)(I.mj, { id: t, active: m, bIsHoverMode: !0 }),
                  ],
                }),
                T &&
                  (0, a.jsx)(G, {
                    id: t,
                    strDoubleCapsuleMessage: b,
                    index: l,
                  }),
              ],
            }),
            (0, a.jsx)(J, { ...e }),
          ],
        });
      }
      function G(e) {
        const { id: t, strDoubleCapsuleMessage: n, index: s } = e,
          { data: r } = (0, v.by)(t),
          { data: o } = (0, v.xz)(t);
        return (0, a.jsxs)("div", {
          className: (0, N.A)(O().TwoWidthSideInfo, "TwoWidthSideInfo"),
          children: [
            (0, a.jsx)("div", { className: O().Reason, children: n }),
            (0, a.jsx)("div", {
              className: O().StoreSaleItemRelease,
              children: (0, a.jsx)("span", { children: r ? (0, M.CC)(r) : "" }),
            }),
            (0, a.jsx)(m.n, {
              bHideTitle: !0,
              rgTagIDs: o?.map((e) => e.tagid) || [],
              instanceNum: s,
            }),
          ],
        });
      }
      function J(e) {
        const {
            id: t,
            bHidePriceIfOwned: n,
            bHideStatusBanners: s,
            bUseSubscriptionLayout: r,
            elElementToAppendToHover: o,
            bHidePrice: l,
            bHidePlatforms: c,
            creatorAccountID: d,
            bIsHovered: u,
            onlyOneDiscountPct: p,
            strDoubleCapsuleMessage: m,
          } = e,
          { data: _ } = (0, v.J$)(t),
          { bIsOwned: I } = (0, S.ZJ)(t);
        if (r && _ && _.item_type == i.c6.qI && _.appid)
          return (0, a.jsx)(b.E, { appid: _.appid, bIsMuted: u });
        if (o) return null;
        const f = Boolean(I && n);
        return (0, a.jsx)(h.q, {
          id: t,
          bHidePrice: l,
          bShowInLibraryInsteadOfPrice: f,
          bHidePlatforms: c,
          creatorAccountID: d,
          bShowName: e.bShowName,
          onlyOneDiscountPct: p,
          bShowWishlistButton: Boolean(m),
        });
      }
    },
    14326: (e, t, n) => {
      "use strict";
      n.d(t, { _: () => w, r: () => j });
      var a = n(7850),
        s = n(95578),
        r = n(14987),
        o = n(39777),
        i = n(60014),
        l = n(58918),
        c = n(17376),
        d = n(79969),
        u = n(90626),
        p = n(55963),
        m = n(18654),
        b = n.n(m),
        h = n(39700),
        _ = n(12155),
        I = n(32754),
        v = n(52038),
        f = n(61859),
        x = n(78327),
        S = n(84547);
      function j(e) {
        const { appid: t, className: n, bTextMode: s } = e,
          i = (0, r.$5)(t),
          { data: l } = (0, o.J$)(i),
          { data: c } = (0, o.by)(i);
        return (0, a.jsx)(w, {
          appid: t,
          bIsFree: Boolean(l?.is_free),
          bIsComingSoon: Boolean(c?.is_coming_soon),
          bTextMode: s,
          className: n,
        });
      }
      function w(e) {
        const [t, n] = u.useState(!1),
          s = (0, i.n9)(),
          {
            appid: o,
            bIsFree: m,
            bIsComingSoon: j,
            className: w,
            bTextMode: g,
          } = e,
          C = (0, r.$5)(o),
          { bIsOwned: P } = (0, l.ZJ)(C),
          D = (0, c.bB)(o),
          { mutateAsync: y } = (0, d.s)(o, !D, (0, p.L3)(s)),
          { elDialogElement: E, fnShowLogonDialog: N } = (0, S.l)();
        if (P || (!j && m))
          return m ? (0, a.jsx)(A, { possibleDemoAppID: o }) : null;
        let T = null;
        return (
          t && !g
            ? (T = (0, a.jsx)(h.k, { size: 18 }))
            : D
              ? D && (T = g ? (0, f.we)("#OnWishlist") : (0, a.jsx)(_.qnF, {}))
              : (T = g
                  ? (0, f.we)("#wishlist_add_to_wishlist")
                  : (0, a.jsx)(_.T4m, {})),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(I.he, {
                toolTipContent: (0, f.we)("#AddToWishlist_ttip"),
                children: (0, a.jsx)("div", {
                  className: (0, v.A)(b().WishList, w),
                  onClick: async () => {
                    x.iA.logged_in ? t || (n(!0), await y(), n(!1)) : N();
                  },
                  children: T,
                }),
              }),
              E,
            ],
          })
        );
      }
      function A(e) {
        const { possibleDemoAppID: t, className: n } = e,
          i = (0, r.$5)(t),
          { data: l } = (0, o.J$)(i);
        return l
          ? (l.type != s.uE.ue && l.type != s.uE.Vi) ||
            !l.related_items?.parent_appid
            ? null
            : (0, a.jsx)(g, {
                parentAppID: l.related_items?.parent_appid,
                className: n,
              })
          : null;
      }
      function g(e) {
        const { parentAppID: t, className: n } = e,
          s = (0, r.$5)(t),
          { data: i } = (0, o.J$)(s),
          { data: l } = (0, o.by)(s);
        return i && l
          ? (0, a.jsx)(w, {
              appid: t,
              bIsComingSoon: Boolean(l.is_coming_soon),
              bIsFree: Boolean(i.is_free),
              className: n,
            })
          : null;
      }
    },
  },
]);
