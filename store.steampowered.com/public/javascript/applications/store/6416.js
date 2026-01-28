/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6416],
  {
    33924: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        narrowWidth: "500px",
        OtherEventsCtn: "_9H6b5yfaxlmcnHvkqtwDK",
        OtherEvents_MainImageCtn: "_2qyLPxO8_nkczRvFiaju8N",
        OtherEvents: "_16DzRvjcqFcYr0NYcWmTrg",
        OtherEvents_EventCtn: "_1MwNf8slOG9lOvAeOshmuu",
        OtherEvents_MainImage: "_3_wKbXvT7_y5YkrtadL0I6",
        OtherEvents_BGImage: "_2pPj9UWoWM6h318uBN0-8X",
        OtherEvents_ContentCtn: "_22jEpNTfml-w_aRJV-fKDm",
        MaskImages: "_1kFdtNfhXozP4yI_qOv2H-",
        HoversEnabled: "_3o6M87A6T172WsUE6MNvdW",
        OtherEvents_TextCtn: "_3-EtNa1Nr_737K0kglkT9C",
        OtherEvents_TextTitle: "_2jc1DpJ_WzFtigRh5qDWce",
        UpcomingCtn: "_2CXrGPtlQh-j3aSa6XsQDI",
        OtherEvents_SubTitle: "_1Swox5XYdeesack-J7fNLH",
        PartnerEventRowCapsule_MainImage: "bC2Zkx7FlANno4SW8FwB-",
        EventSummaryContainer: "_2GYp44BuZLfKRQdeILTDC3",
        EventSummaryText: "ENbI1gFgvIca6HSKAbfiJ",
        EventSummaryType: "_11JXznGoylLSEmZXZbgcsq",
        HorizontalEvent: "_1ruRSreC31IK4kUGUcSRDK",
        HorizontalSummary: "_2bTWamVtbFnHovwqhlrxiV",
        HorizontalTitle: "B9-wlbaW3NhZ3FQPArnkW",
        HorizontalDescriptionCtn: "_3CQtWw7qMAWImOwd8J5xHi",
        HorizontalDescription: "_2hPZwxDYhaY3SllhjeFqb_",
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
      };
    },
    75152: (e, t, n) => {
      "use strict";
      n.d(t, { q: () => p });
      var a = n(99171),
        r = n(39777),
        o = n(90626),
        i = n(43976),
        s = n(18654),
        l = n.n(s),
        c = n(72237),
        d = n(3740),
        m = n(64300),
        u = n(52038);
      function p(e) {
        const {
            id: t,
            bShowAsMuted: n,
            bHidePrice: a,
            bShowInLibraryInsteadOfPrice: s,
            bHidePlatforms: p,
            strClassName: E,
            creatorAccountID: _,
            bShowName: S,
            onlyOneDiscountPct: f,
            bShowAddToCart: w,
            bShowWishlistButton: g,
          } = e,
          D = (0, o.useRef)(null),
          [v, I] = (0, o.useState)(!1),
          { data: A } = (0, r.J$)(t);
        if (
          ((0, o.useEffect)(() => {
            D.current && I(D.current.offsetWidth < 370);
          }, [D]),
          !t || !("appid" in t || "bundleid" in t || "packageid" in t))
        )
          return null;
        const P = Boolean(g && 0 == A?.item_type),
          C = Boolean(!_ && !w && !P && p && a);
        return o.createElement(
          o.Fragment,
          null,
          !C &&
            o.createElement(
              "div",
              {
                ref: D,
                className: (0, u.A)(
                  l().CapsuleBottomBar,
                  "CapsuleBottomBar",
                  n && l().Muted,
                  E,
                ),
              },
              _ && o.createElement(b, { creatorAccountID: _, ...e }),
              w &&
                o.createElement(i.h, {
                  id: t,
                  className: (0, u.A)(
                    l().MaxActionButtonWidth,
                    l().AddToCartButton,
                  ),
                }),
              P &&
                "appid" in t &&
                o.createElement(m.r, {
                  appid: t.appid,
                  className: (0, u.A)(
                    l().MaxActionButtonWidth,
                    l().AddToWishlistButton,
                  ),
                }),
              !p && o.createElement(c.Q, { id: t, bMinimizePlatforms: v }),
              !a &&
                o.createElement(
                  "span",
                  { className: l().BottomBarPriceInfo },
                  o.createElement(d.N, {
                    id: t,
                    bShowInLibrary: s,
                    onlyOneDiscountPct: f,
                  }),
                ),
            ),
          S && o.createElement(h, { id: t }),
        );
      }
      function h(e) {
        const { id: t } = e,
          { data: n } = (0, r.J$)(t);
        return n?.name
          ? o.createElement("div", { className: l().CapsuleName }, n.name)
          : null;
      }
      function b(e) {
        const { creatorAccountID: t, bShowAsMuted: n, strClassName: i } = e,
          s = (0, o.useMemo)(() => ({ creatorid: t }), [t]),
          { data: c } = (0, r.J$)(s),
          { data: d } = (0, r.lv)(s);
        if (!c) return null;
        const m = (0, a.t)(d?.clan_avatar, "Medium"),
          p = c.name || "";
        return o.createElement(
          "div",
          { className: (0, u.A)(l().BottomCreatorRow, n && l().Muted, i) },
          o.createElement("img", {
            className: (0, u.A)(l().CreatorLogo),
            src: m,
            alt: p,
          }),
          o.createElement("span", { className: l().CreatorName }, p),
        );
      }
    },
    46416: (e, t, n) => {
      "use strict";
      n.d(t, { J: () => L, W: () => R });
      var a = n(45699),
        r = n(76217),
        o = n(23310),
        i = n(78588),
        s = n(39777),
        l = n(14987),
        c = n(60014),
        d = n(58918),
        m = n(90626),
        u = n(57876),
        p = n(35380),
        h = n(55963),
        b = n(62792),
        E = n(55263),
        _ = n(33924),
        S = n(26101),
        f = n(75152),
        w = n(18654),
        g = n.n(w),
        D = n(3661),
        v = n(88961),
        I = n(72860),
        A = n(70300),
        P = n(47235),
        C = n(20433),
        T = n(54492),
        y = n(49411),
        N = n(52038),
        B = n(61859),
        H = n(61336),
        W = n(78327),
        M = n(91291),
        O = n.n(M),
        x = n(99956),
        k = n(75279);
      const L = "capsule_index_";
      function R(e) {
        const {
            capsule: t,
            bShowParentApp: n,
            elElementToAppendToHover: a,
            index: i,
            navKey: s,
            bHideStoreHover: l,
            onlyOneDiscountPct: c,
            bPreferDemoStorePage: d,
            bShowEarlyAccessBanner: p,
          } = e,
          [h, _] = m.useState(!1),
          [f] = (0, E.G6)(t.id, (0, b.SW)(t.type), u.Xh),
          [w] = (0, E.t7)(n ? f?.GetParentAppID() : void 0, u.Xh);
        if (!f) return null;
        const D = Boolean(w),
          v = m.createElement(F, {
            ...e,
            strExtraParams: e.strExtraParams,
            info: t,
            bIsHovered: h,
            bHasParentAppToDisplay: D,
            onlyOneDiscountPct: c,
            bShowEarlyAccessBanner: p,
          });
        return m.createElement(
          r.Z,
          {
            className: (0, N.A)({
              [g().OuterCapsuleContainer]: !0,
              [L + i]: 0 == i,
            }),
            navEntryPreferPosition: o.iU.PREFERRED_CHILD,
            navKey: s,
          },
          m.createElement(
            A.oj,
            { appid: f.GetAppID() },
            Boolean(l)
              ? m.createElement(
                  "div",
                  { onMouseEnter: () => _(!0), onMouseLeave: () => _(!1) },
                  v,
                )
              : m.createElement(
                  S.Qf,
                  {
                    className: g().CapsuleContainer,
                    item: t,
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
                  },
                  v,
                ),
            Boolean(a) && m.createElement(m.Fragment, null, a),
          ),
          D &&
            m.createElement(G, {
              strExtraParams: e.strExtraParams,
              parentStoreItem: w,
              childAppType: f.GetAppType(),
              bPreferDemoStorePage: d,
            }),
        );
      }
      function G(e) {
        const {
            strExtraParams: t,
            parentStoreItem: n,
            childAppType: r,
            bPreferDemoStorePage: o,
          } = e,
          i = (0, k.DJ)(n),
          { data: l } = (0, s.J$)(i),
          d = (0, c.n9)(),
          p = (0, W.Qn)();
        return l
          ? m.createElement(
              a.ml,
              { className: g().CapsuleParentInfo, ...(0, I.S)(l, d, p, o, t) },
              m.createElement(
                A.oj,
                { appid: n.GetAppID() },
                m.createElement(
                  "div",
                  { className: g().ParentType },
                  (0, B.we)(
                    11 == r
                      ? "#SalePage_ParentApp_SoundTrack"
                      : "#SalePage_ParentApp_DLC",
                  ),
                ),
                m.createElement(
                  C.u,
                  { id: i, strExtraParams: t },
                  m.createElement("img", {
                    loading: "lazy",
                    className: _.AppCapsuleImage,
                    alt: n.GetName(),
                    src: n.GetAssets().GetSmallCapsuleURL(),
                    ...(0, u.Jw)(),
                  }),
                ),
              ),
            )
          : null;
      }
      function F(e) {
        const {
            info: t,
            bHideStatusBanners: n,
            strExtraParams: r,
            index: o,
            imageType: s,
            bHasParentAppToDisplay: d,
            bIsHovered: _,
            strDoubleCapsuleMessage: S,
            bPreferDemoStorePage: f,
            bShowEarlyAccessBanner: w,
            bPreferAssetWithoutOverride: g,
          } = e,
          [I] = (0, E.G6)(t.id, (0, b.SW)(t.type), u.Xh),
          A = (0, p.rt)(t),
          P = (0, c.n9)(),
          C = (0, y.w)(),
          B = (0, l._)(A);
        if (!I) return null;
        const W = (0, H.NT)(
          (0, h.It)(`${I.GetStorePageURL(f)}${r ? `?${r}` : ""}`, P, C),
        );
        let M;
        "overrideNavigation" in t &&
          (M = (e) => (
            t.overrideNavigation(e), e.preventDefault(), e.stopPropagation(), !1
          ));
        const k = Boolean(S);
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(
            "div",
            { className: (0, N.A)({ [O().TwoWidthCtn]: k }) },
            m.createElement(
              a.Ii,
              {
                href: M ? void 0 : W,
                style: { display: "block", cursor: "pointer" },
                className: (0, N.A)({ [O().TwoWidthCapsule]: k }),
                preferredFocus: d,
                onClick: M,
              },
              m.createElement(v.V, {
                appids: B,
                hide_status_banners: n,
                show_early_access: e.bShowEarlyAccessBanner,
              }),
              "none" != s &&
                m.createElement(i.a, {
                  imageType: s,
                  id: A,
                  bPreferAssetWithoutOverride: g,
                }),
              m.createElement(T.J, { id: A }),
              Boolean(_) && m.createElement(D.m, { id: A, bIsHoverMode: !0 }),
            ),
            k &&
              m.createElement(
                "div",
                {
                  className: (0, N.A)(O().TwoWidthSideInfo, "TwoWidthSideInfo"),
                },
                m.createElement("div", { className: O().Reason }, S),
                m.createElement(
                  "div",
                  { className: O().StoreSaleItemRelease },
                  m.createElement(
                    "span",
                    null,
                    I.GetFormattedSteamReleaseDate(),
                  ),
                ),
                m.createElement(x.n, {
                  bHideTitle: !0,
                  rgTagIDs: I.GetTagIDs(),
                  instanceNum: o,
                }),
              ),
          ),
          m.createElement(J, { ...e }),
        );
      }
      function J(e) {
        const {
            info: t,
            bHidePriceIfOwned: n,
            bHideStatusBanners: a,
            bUseSubscriptionLayout: r,
            elElementToAppendToHover: o,
            bHidePrice: i,
            bHidePlatforms: l,
            creatorAccountID: c,
            bIsHovered: u,
            onlyOneDiscountPct: h,
            strDoubleCapsuleMessage: b,
          } = e,
          E = (0, p.rt)(t),
          { data: _ } = (0, s.J$)(E),
          { bIsOwned: S } = (0, d.ZJ)(E),
          w = S && !a;
        if (r && _ && 0 == _.item_type && _.appid)
          return m.createElement(P.E, { appid: _.appid, bIsMuted: u });
        if (o) return null;
        const g = Boolean(S && n),
          D = Boolean(w);
        return m.createElement(f.q, {
          id: E,
          bShowAsMuted: D,
          bHidePrice: i,
          bShowInLibraryInsteadOfPrice: g,
          bHidePlatforms: l,
          creatorAccountID: c,
          bShowName: e.bShowName,
          onlyOneDiscountPct: h,
          bShowWishlistButton: Boolean(b),
        });
      }
    },
    64300: (e, t, n) => {
      "use strict";
      n.d(t, { _: () => T, r: () => C });
      var a = n(39777),
        r = n(60014),
        o = n(58918),
        i = n(17376),
        s = n(79969),
        l = n(90626),
        c = n(35380),
        d = n(55963),
        m = n(18654),
        u = n.n(m),
        p = n(39700),
        h = n(12155),
        b = n(32754),
        E = n(52038),
        _ = n(61859),
        S = n(78327),
        f = n(78395),
        w = n(42475);
      const g = {};
      (g.arabic = () => n.e(902).then(n.t.bind(n, 90902, 19))),
        (g.brazilian = () => n.e(5136).then(n.t.bind(n, 65136, 19))),
        (g.bulgarian = () => n.e(3199).then(n.t.bind(n, 13199, 19))),
        (g.czech = () => n.e(9925).then(n.t.bind(n, 99925, 19))),
        (g.danish = () => n.e(8311).then(n.t.bind(n, 68311, 19))),
        (g.dutch = () => n.e(496).then(n.t.bind(n, 496, 19))),
        (g.english = () => n.e(1990).then(n.t.bind(n, 51990, 19))),
        (g.finnish = () => n.e(7637).then(n.t.bind(n, 27637, 19))),
        (g.french = () => n.e(1158).then(n.t.bind(n, 21158, 19))),
        (g.german = () => n.e(1144).then(n.t.bind(n, 21144, 19))),
        (g.greek = () => n.e(9930).then(n.t.bind(n, 19930, 19))),
        (g.hungarian = () => n.e(3307).then(n.t.bind(n, 33307, 19))),
        (g.indonesian = () => n.e(2506).then(n.t.bind(n, 92506, 19))),
        (g.italian = () => n.e(3382).then(n.t.bind(n, 23382, 19))),
        (g.japanese = () => n.e(3577).then(n.t.bind(n, 83577, 19))),
        (g.koreana = () => n.e(6305).then(n.t.bind(n, 26305, 19))),
        (g.latam = () => n.e(1849).then(n.t.bind(n, 1849, 19))),
        (g.norwegian = () => n.e(3202).then(n.t.bind(n, 63202, 19))),
        (g.polish = () => n.e(1639).then(n.t.bind(n, 41639, 19))),
        (g.portuguese = () => n.e(6059).then(n.t.bind(n, 46059, 19))),
        (g.romanian = () => n.e(2177).then(n.t.bind(n, 82177, 19))),
        (g.russian = () => n.e(4227).then(n.t.bind(n, 84227, 19))),
        (g.schinese = () => n.e(3898).then(n.t.bind(n, 3898, 19))),
        (g.spanish = () => n.e(5094).then(n.t.bind(n, 45094, 19))),
        (g.swedish = () => n.e(975).then(n.t.bind(n, 50975, 19))),
        (g.tchinese = () => n.e(4777).then(n.t.bind(n, 44777, 19))),
        (g.thai = () => n.e(2116).then(n.t.bind(n, 22116, 19))),
        (g.turkish = () => n.e(8822).then(n.t.bind(n, 48822, 19))),
        (g.ukrainian = () => n.e(8016).then(n.t.bind(n, 38016, 19))),
        (g.vietnamese = () => n.e(2281).then(n.t.bind(n, 72281, 19)));
      const D = (0, w.l)(async function (e) {
        if (g[e]) return g[e]();
      });
      var v = n(8527),
        I = n(64753),
        A = n(21869);
      function P(e) {
        const { closeModal: t } = e;
        return l.createElement(f.o0, {
          strTitle: D.Localize("#LoginRedirect_Dialog_Title"),
          strDescription: D.Localize("#LoginRedirect_Dialog_Description"),
          closeModal: t,
          onOK: () => {
            window.location.href = `${v.TS.STORE_BASE_URL}login/?redir=${encodeURIComponent(window.location.href)}`;
          },
        });
      }
      function C(e) {
        const { appid: t, className: n, bTextMode: r } = e,
          o = (0, c.$5)(t),
          { data: i } = (0, a.J$)(o),
          { data: s } = (0, a.by)(o);
        return l.createElement(T, {
          appid: t,
          bIsFree: Boolean(i?.is_free),
          bIsComingSoon: Boolean(s?.is_coming_soon),
          bTextMode: r,
          className: n,
        });
      }
      function T(e) {
        const [t, n] = l.useState(!1),
          a = (0, r.n9)(),
          {
            appid: m,
            bIsFree: f,
            bIsComingSoon: w,
            className: g,
            bTextMode: D,
          } = e,
          v = (0, c.$5)(m),
          { bIsOwned: C } = (0, o.ZJ)(v),
          T = (0, i.bB)(m),
          { mutateAsync: N } = (0, s.s)(m, !T, (0, d.L3)(a)),
          { elDialogElement: B, fnShowLogonDialog: H } = (function () {
            const [e, t, n] = (0, I.uD)();
            return {
              elDialogElement: l.createElement(
                A.E,
                { active: e },
                l.createElement(P, { closeModal: n }),
              ),
              fnShowLogonDialog: t,
            };
          })();
        if (C || (!w && f))
          return f ? l.createElement(y, { possibleDemoAppID: m }) : null;
        let W = null;
        return (
          t && !D
            ? (W = l.createElement(p.k, { size: 18 }))
            : T
              ? T &&
                (W = D
                  ? (0, _.we)("#OnWishlist")
                  : l.createElement(h.qnF, null))
              : (W = D
                  ? (0, _.we)("#wishlist_add_to_wishlist")
                  : l.createElement(h.T4m, null)),
          l.createElement(
            l.Fragment,
            null,
            l.createElement(
              b.he,
              { toolTipContent: (0, _.we)("#AddToWishlist_ttip") },
              l.createElement(
                "div",
                {
                  className: (0, E.A)(u().WishList, g),
                  onClick: async () => {
                    S.iA.logged_in ? t || (n(!0), await N(), n(!1)) : H();
                  },
                },
                W,
              ),
            ),
            B,
          )
        );
      }
      function y(e) {
        const { possibleDemoAppID: t, className: n } = e,
          r = (0, c.$5)(t),
          { data: o } = (0, a.J$)(r);
        return o
          ? (1 != o.type && 12 != o.type) || !o.related_items?.parent_appid
            ? null
            : l.createElement(N, {
                parentAppID: o.related_items?.parent_appid,
                className: n,
              })
          : null;
      }
      function N(e) {
        const { parentAppID: t, className: n } = e,
          r = (0, c.$5)(t),
          { data: o } = (0, a.J$)(r),
          { data: i } = (0, a.by)(r);
        return o && i
          ? l.createElement(T, {
              appid: t,
              bIsComingSoon: Boolean(i.is_coming_soon),
              bIsFree: Boolean(o.is_free),
              className: n,
            })
          : null;
      }
    },
  },
]);
