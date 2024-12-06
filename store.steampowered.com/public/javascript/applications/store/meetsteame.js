/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5667],
  {
    33924: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        OtherEventsCtn: "_9H6b5yfaxlmcnHvkqtwDK",
        OtherEvents_MainImageCtn: "_2qyLPxO8_nkczRvFiaju8N",
        OtherEvents: "_16DzRvjcqFcYr0NYcWmTrg",
        OtherEvents_EventCtn: "_1MwNf8slOG9lOvAeOshmuu",
        OtherEvents_MainImage: "_3_wKbXvT7_y5YkrtadL0I6",
        OtherEvents_BGImage: "_2pPj9UWoWM6h318uBN0-8X",
        OtherEvents_ContentCtn: "_22jEpNTfml-w_aRJV-fKDm",
        OtherEvents_TextCtn: "_3-EtNa1Nr_737K0kglkT9C",
        OtherEvents_TextTitle: "_2jc1DpJ_WzFtigRh5qDWce",
        UpcomingCtn: "_2CXrGPtlQh-j3aSa6XsQDI",
        OtherEvents_SubTitle: "_1Swox5XYdeesack-J7fNLH",
        HoversEnabled: "_3o6M87A6T172WsUE6MNvdW",
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
        AppCapsuleCtn: "_16au-uWHggl6G731aw_eHt",
        AppCapsuleImageHover: "IeC3X0McKdGC79BsC3VvM",
        AppCapsulePrice: "_2-l2M5GPuxKFwV8h1tc_fH",
      };
    },
    91291: (e) => {
      e.exports = {
        TwoWidthCtn: "_49thIpYeG08pUfNc1x_w9",
        TwoWidthCapsule: "_78Qv2C95AM2DNCuLD5o8U",
        TwoWidthSideInfo: "_2qz5D65VkY796Xw-al9f_a",
        Reason: "_2h0GKAYcXRP10ryZHFn79d",
        StoreSaleItemRelease: "wJ7ZiTc09km2kH4mSsZ9j",
      };
    },
    20019: (e, t, a) => {
      "use strict";
      function n(e) {
        switch (e) {
          case 0:
            return "game";
          case 6:
            return "software";
          case 1:
            return "demo";
          case 4:
            return "dlc";
          case 7:
          case 3:
            return "video";
          case 11:
            return "music";
          case 12:
            return "beta";
          case 2:
            return "mod";
        }
        return "invalid";
      }
      a.d(t, { U: () => n });
    },
    46416: (e, t, a) => {
      "use strict";
      a.d(t, { J: () => N, W: () => O });
      var n = a(90626),
        r = a(57876),
        o = a(45699),
        s = a(76217),
        l = a(97907),
        i = a(55963),
        c = a(30894),
        m = a(62792),
        p = a(55263),
        u = a(33924),
        d = a(26101),
        E = a(45359),
        b = a(18654),
        v = a.n(b),
        S = a(3661),
        P = a(89274),
        h = a(72860),
        _ = a(70300),
        f = a(47235),
        D = a(37076),
        I = a(54492),
        C = a(60014),
        g = a(52038),
        A = a(61859),
        T = a(61336),
        y = a(78327),
        w = a(91291),
        H = a.n(w),
        G = a(99956);
      const N = "capsule_index_";
      function O(e) {
        const {
            capsule: t,
            bShowParentApp: a,
            elElementToAppendToHover: o,
            index: i,
            navKey: c,
            bHideStoreHover: u,
            onlyOneDiscountPct: E,
            bPreferDemoStorePage: b,
          } = e,
          [S, P] = n.useState(!1),
          [h] = (0, p.G6)(t.id, (0, m.SW)(t.type), r.Xh),
          [f] = (0, p.t7)(a && h?.GetParentAppID(), r.Xh);
        if (!h) return null;
        const D = Boolean(f),
          I = n.createElement(W, {
            ...e,
            info: t,
            bIsHovered: S,
            bHasParentAppToDisplay: D,
            onlyOneDiscountPct: E,
          });
        return n.createElement(
          s.Z,
          {
            className: (0, g.A)({
              [v().OuterCapsuleContainer]: !0,
              [N + i]: 0 == i,
            }),
            navEntryPreferPosition: l.iU.PREFERRED_CHILD,
            navKey: c,
          },
          n.createElement(
            _.oj,
            { appid: h.GetAppID() },
            Boolean(u)
              ? n.createElement(
                  "div",
                  { onMouseEnter: () => P(!0), onMouseLeave: () => P(!1) },
                  I,
                )
              : n.createElement(
                  d.Qf,
                  {
                    className: v().CapsuleContainer,
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
                  },
                  I,
                ),
            Boolean(o) && n.createElement("div", null, o),
          ),
          D &&
            n.createElement(k, {
              strExtraParams: e.strExtraParams,
              parentStoreItem: f,
              childAppType: h.GetAppType(),
              bPreferDemoStorePage: b,
            }),
        );
      }
      function k(e) {
        const {
            strExtraParams: t,
            parentStoreItem: a,
            childAppType: s,
            bPreferDemoStorePage: l,
          } = e,
          i = (0, C.n9)(),
          c = (0, y.Qn)();
        return n.createElement(
          o.ml,
          { className: v().CapsuleParentInfo, ...(0, h.S)(a, i, c, l, t) },
          n.createElement(
            _.oj,
            { appid: a.GetAppID() },
            n.createElement(
              "div",
              { className: v().ParentType },
              (0, A.we)(
                11 == s
                  ? "#SalePage_ParentApp_SoundTrack"
                  : "#SalePage_ParentApp_DLC",
              ),
            ),
            n.createElement(
              D.u,
              { type: "app", id: a.GetAppID(), strExtraParams: t },
              n.createElement("img", {
                loading: "lazy",
                className: u.AppCapsuleImage,
                alt: a.GetName(),
                src: a.GetAssets().GetSmallCapsuleURL(),
                ...(0, r.Jw)(),
              }),
            ),
          ),
        );
      }
      function W(e) {
        const {
            info: t,
            bHideStatusBanners: a,
            strExtraParams: s,
            index: l,
            imageType: c,
            bHasParentAppToDisplay: u,
            bIsHovered: d,
            strDoubleCapsuleMessage: b,
            bPreferDemoStorePage: v,
          } = e,
          [h] = (0, p.G6)(t.id, (0, m.SW)(t.type), r.Xh),
          _ = (0, C.n9)(),
          f = (0, n.useMemo)(() => h?.GetIncludedAppIDsOrSelf(), [h]);
        if (!h) return null;
        const D = (0, T.NT)(
          (0, i.wJ)(`${h.GetStorePageURL(v)}${s ? `?${s}` : ""}`, _),
        );
        let A;
        "overrideNavigation" in t &&
          (A = (e) => (
            t.overrideNavigation(e), e.preventDefault(), e.stopPropagation(), !1
          ));
        const y = Boolean(b);
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            o.Ii,
            {
              href: A ? null : D,
              style: { display: "block", cursor: "pointer" },
              preferredFocus: u,
              onClick: A,
            },
            n.createElement(
              "div",
              { className: (0, g.A)({ [H().TwoWidthCtn]: y }) },
              n.createElement(
                "div",
                { className: (0, g.A)({ [H().TwoWidthCapsule]: y }) },
                n.createElement(P.V, { appids: f, hide_status_banners: a }),
                n.createElement(E.aU, { imageType: c, info: t }),
                n.createElement(I.S, {
                  eDeckCompatibilityCategory:
                    h?.GetPlatforms()?.steam_deck_compat_category,
                }),
                Boolean(d) && n.createElement(S.m, { appInfo: t }),
              ),
              y &&
                n.createElement(
                  "div",
                  { className: H().TwoWidthSideInfo },
                  n.createElement("div", { className: H().Reason }, b),
                  n.createElement(
                    "div",
                    { className: H().StoreSaleItemRelease },
                    n.createElement(
                      "span",
                      null,
                      h.GetFormattedSteamReleaseDate(),
                    ),
                  ),
                  n.createElement(G.n, {
                    bHideTitle: !0,
                    rgTagIDs: h.GetTagIDs(),
                    instanceNum: l,
                  }),
                ),
            ),
          ),
          n.createElement(x, { ...e }),
        );
      }
      function x(e) {
        const {
            info: t,
            bHidePriceIfOwned: a,
            bHideStatusBanners: o,
            bUseSubscriptionLayout: s,
            elElementToAppendToHover: l,
            bHidePrice: i,
            bHidePlatforms: u,
            creatorAccountID: d,
            bIsHovered: b,
            onlyOneDiscountPct: v,
            strDoubleCapsuleMessage: S,
          } = e,
          [P] = (0, p.G6)(t.id, (0, m.SW)(t.type), r.Xh),
          h =
            P &&
            P?.GetIncludedAppIDsOrSelf().every((e) => c.Fm.Get().BOwnsApp(e)),
          _ = h && !o;
        if (s && 0 == P?.GetStoreItemType())
          return n.createElement(f.E, { appid: P.GetAppID(), bIsMuted: b });
        if (l) return null;
        const D = h && a,
          I = _;
        return n.createElement(E.qn, {
          info: t,
          bShowAsMuted: I,
          bHidePrice: i,
          bShowInLibraryInsteadOfPrice: D,
          bHidePlatforms: u,
          creatorAccountID: d,
          bShowName: e.bShowName,
          onlyOneDiscountPct: v,
          bShowWishlistButton: Boolean(S),
        });
      }
    },
    51219: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => v });
      var n = a(82715),
        r = a(22837),
        o = a(2160),
        s = a(8527),
        l = a(90626),
        i = a(92757),
        c = a(60746),
        m = a(91254),
        p = a(30756),
        u = a(77156),
        d = a(22797),
        E = a(61859),
        b = a(43068);
      function v(e) {
        const { gid: t } = (0, i.g)(),
          [a, v] = (0, l.useState)(!0);
        if (
          (l.useEffect(() => {
            a &&
              (m.O3.Init(), Promise.all([c.KN.InitGlobal()]).then(() => v(!1)));
          }, [a]),
          a)
        )
          return l.createElement(d.t, {
            string: (0, E.we)("#Loading"),
            position: "center",
          });
        const S = m.O3.GetClanEventModel(t);
        return l.createElement(
          n.tH,
          null,
          !S.BIsUnlistedEvent() &&
            l.createElement(
              "div",
              null,
              "NOTE: Event needs to be published in unlisted mode for Steam partners to see it. Admin account bypass this check",
            ),
          l.createElement(u.jA, {
            lang: (0, r.sf)(s.TS.LANGUAGE),
            event: S,
            adminPanel:
              s.TS.EREALM === o.TU.k_ESteamRealmChina
                ? l.createElement(b.P, { eventModel: S })
                : l.createElement(p.g, { eventModel: S }),
          }),
        );
      }
    },
  },
]);
