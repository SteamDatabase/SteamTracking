/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5667],
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
        l = a(23310),
        i = a(55963),
        c = a(30894),
        m = a(62792),
        p = a(55263),
        u = a(33924),
        d = a(26101),
        E = a(45359),
        b = a(18654),
        S = a.n(b),
        v = a(3661),
        h = a(89274),
        P = a(72860),
        _ = a(70300),
        f = a(47235),
        C = a(37076),
        D = a(54492),
        I = a(60014),
        g = a(52038),
        A = a(61859),
        T = a(61336),
        w = a(78327),
        y = a(91291),
        H = a.n(y),
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
          [v, h] = n.useState(!1),
          [P] = (0, p.G6)(t.id, (0, m.SW)(t.type), r.Xh),
          [f] = (0, p.t7)(a && P?.GetParentAppID(), r.Xh);
        if (!P) return null;
        const C = Boolean(f),
          D = n.createElement(k, {
            ...e,
            info: t,
            bIsHovered: v,
            bHasParentAppToDisplay: C,
            onlyOneDiscountPct: E,
          });
        return n.createElement(
          s.Z,
          {
            className: (0, g.A)({
              [S().OuterCapsuleContainer]: !0,
              [N + i]: 0 == i,
            }),
            navEntryPreferPosition: l.iU.PREFERRED_CHILD,
            navKey: c,
          },
          n.createElement(
            _.oj,
            { appid: P.GetAppID() },
            Boolean(u)
              ? n.createElement(
                  "div",
                  { onMouseEnter: () => h(!0), onMouseLeave: () => h(!1) },
                  D,
                )
              : n.createElement(
                  d.Qf,
                  {
                    className: S().CapsuleContainer,
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
                  D,
                ),
            Boolean(o) && n.createElement(n.Fragment, null, o),
          ),
          C &&
            n.createElement(W, {
              strExtraParams: e.strExtraParams,
              parentStoreItem: f,
              childAppType: P.GetAppType(),
              bPreferDemoStorePage: b,
            }),
        );
      }
      function W(e) {
        const {
            strExtraParams: t,
            parentStoreItem: a,
            childAppType: s,
            bPreferDemoStorePage: l,
          } = e,
          i = (0, I.n9)(),
          c = (0, w.Qn)();
        return n.createElement(
          o.ml,
          { className: S().CapsuleParentInfo, ...(0, P.S)(a, i, c, l, t) },
          n.createElement(
            _.oj,
            { appid: a.GetAppID() },
            n.createElement(
              "div",
              { className: S().ParentType },
              (0, A.we)(
                11 == s
                  ? "#SalePage_ParentApp_SoundTrack"
                  : "#SalePage_ParentApp_DLC",
              ),
            ),
            n.createElement(
              C.u,
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
      function k(e) {
        const {
            info: t,
            bHideStatusBanners: a,
            strExtraParams: s,
            index: l,
            imageType: c,
            bHasParentAppToDisplay: u,
            bIsHovered: d,
            strDoubleCapsuleMessage: b,
            bPreferDemoStorePage: P,
          } = e,
          [_] = (0, p.G6)(t.id, (0, m.SW)(t.type), r.Xh),
          f = (0, I.n9)(),
          C = (0, n.useMemo)(() => _?.GetIncludedAppIDsOrSelf(), [_]);
        if (!_) return null;
        const A = (0, T.NT)(
          (0, i.wJ)(`${_.GetStorePageURL(P)}${s ? `?${s}` : ""}`, f),
        );
        let w;
        "overrideNavigation" in t &&
          (w = (e) => (
            t.overrideNavigation(e), e.preventDefault(), e.stopPropagation(), !1
          ));
        const y = Boolean(b);
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            o.Ii,
            {
              href: w ? null : A,
              style: { display: "block", cursor: "pointer" },
              className: S().CapsuleFocusCtn,
              preferredFocus: u,
              onClick: w,
            },
            n.createElement(
              "div",
              { className: (0, g.A)({ [H().TwoWidthCtn]: y }) },
              n.createElement(
                "div",
                { className: (0, g.A)({ [H().TwoWidthCapsule]: y }) },
                n.createElement(h.V, { appids: C, hide_status_banners: a }),
                n.createElement(E.aU, { imageType: c, info: t }),
                n.createElement(D.S, {
                  eDeckCompatibilityCategory:
                    _?.GetPlatforms()?.steam_deck_compat_category,
                }),
                Boolean(d) && n.createElement(v.m, { appInfo: t }),
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
                      _.GetFormattedSteamReleaseDate(),
                    ),
                  ),
                  n.createElement(G.n, {
                    bHideTitle: !0,
                    rgTagIDs: _.GetTagIDs(),
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
            onlyOneDiscountPct: S,
            strDoubleCapsuleMessage: v,
          } = e,
          [h] = (0, p.G6)(t.id, (0, m.SW)(t.type), r.Xh),
          P =
            h &&
            h?.GetIncludedAppIDsOrSelf().every((e) => c.Fm.Get().BOwnsApp(e)),
          _ = P && !o;
        if (s && 0 == h?.GetStoreItemType())
          return n.createElement(f.E, { appid: h.GetAppID(), bIsMuted: b });
        if (l) return null;
        const C = P && a,
          D = _;
        return n.createElement(E.qn, {
          info: t,
          bShowAsMuted: D,
          bHidePrice: i,
          bShowInLibraryInsteadOfPrice: C,
          bHidePlatforms: u,
          creatorAccountID: d,
          bShowName: e.bShowName,
          onlyOneDiscountPct: S,
          bShowWishlistButton: Boolean(v),
        });
      }
    },
    51219: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => S });
      var n = a(82715),
        r = a(22837),
        o = a(2160),
        s = a(8527),
        l = a(90626),
        i = a(92757),
        c = a(60746),
        m = a(6379),
        p = a(30756),
        u = a(77156),
        d = a(22797),
        E = a(61859),
        b = a(43068);
      function S(e) {
        const { gid: t } = (0, i.g)(),
          [a, S] = (0, l.useState)(!0);
        if (
          (l.useEffect(() => {
            a &&
              (m.O3.Init(), Promise.all([c.KN.InitGlobal()]).then(() => S(!1)));
          }, [a]),
          a)
        )
          return l.createElement(d.t, {
            string: (0, E.we)("#Loading"),
            position: "center",
          });
        const v = m.O3.GetClanEventModel(t);
        return l.createElement(
          n.tH,
          null,
          !v.BIsUnlistedEvent() &&
            l.createElement(
              "div",
              null,
              "NOTE: Event needs to be published in unlisted mode for Steam partners to see it. Admin account bypass this check",
            ),
          l.createElement(u.jA, {
            lang: (0, r.sf)(s.TS.LANGUAGE),
            event: v,
            adminPanel:
              s.TS.EREALM === o.TU.k_ESteamRealmChina
                ? l.createElement(b.P, { eventModel: v })
                : l.createElement(p.g, { eventModel: v }),
          }),
        );
      }
    },
  },
]);
