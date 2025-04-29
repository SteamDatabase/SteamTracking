/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6956],
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
    32541: (e, t, a) => {
      "use strict";
      a.d(t, { LG: () => D, hA: () => S });
      var r = a(90626),
        n = a(76217),
        l = a(67165),
        o = a(30894),
        s = a(55263),
        c = a(17289),
        i = a(52038),
        m = a(61859),
        p = a(82227),
        u = a(61336),
        d = a(78327),
        E = a(84811),
        C = a(32630),
        b = a(22797),
        v = a(56524),
        _ = a(48838),
        h = a(95695);
      function S(e) {
        const {
            creatorID: t,
            bShowTagline: a,
            bHideCreatorType: s,
            bSmallFormat: S,
            bHideFollowButton: D,
            bAddLinkToMemberList: A,
            bVerticalDisplay: f,
          } = e,
          g = (0, l.FV)(t.clan_account_id),
          [y] = (0, o.L2)();
        if (y || !g)
          return r.createElement(
            "div",
            { className: v.DevSummaryWidgetCtn },
            r.createElement(b.t, {
              string: (0, m.we)("#Loading"),
              size: "medium",
              position: "center",
            }),
          );
        const I = t.type,
          P =
            "developer" == t.type
              ? (0, m.we)("#CreatorHome_DevelopedBy")
              : "publisher" == t.type
                ? (0, m.we)("#CreatorHome_PublishedBy")
                : (0, m.we)("#CreatorHome_InFranchise"),
          w = g.GetCreatorHomeURL(I),
          N = g.GetNumFollowers();
        return r.createElement(
          E.tH,
          null,
          r.createElement(
            C.Ay,
            { feature: "salecreatorhome" },
            r.createElement(
              n.Z,
              {
                className: (0, i.A)(
                  v.DevSummaryCtn,
                  S ? v.SmallFormat : v.LargeFormat,
                ),
                "flow-children": "row",
              },
              !s && r.createElement("span", { className: v.Title }, P),
              r.createElement(
                "div",
                { className: v.DevSummaryWidgetCtn },
                r.createElement("div", {
                  className: v.DevSummaryBackground,
                  style: {
                    backgroundImage: `url(${g.GetAvatarURLFullSize()} )`,
                  },
                }),
                r.createElement(
                  "div",
                  { className: (0, i.A)(v.DevSummaryContent) },
                  r.createElement(
                    "div",
                    { className: h.FlexRowContainer },
                    r.createElement(
                      c.m,
                      {
                        href: (0, u.k2)(w),
                        className: v.AvatarLink,
                        bAllowFocuseableAnchor: !0,
                      },
                      r.createElement("img", {
                        className: (0, i.A)(v.Avatar, "Avatar_Trgt"),
                        src: g.GetAvatarURLFullSize(),
                      }),
                    ),
                    r.createElement(
                      "div",
                      {
                        className: (0, i.A)(
                          h.FlexColumnContainer,
                          v.CreatorDescCtn,
                        ),
                      },
                      r.createElement(
                        "div",
                        {
                          className: (0, i.A)(
                            v.CreatorTitleCtn,
                            h.FlexColumnContainer,
                          ),
                        },
                        r.createElement(
                          c.m,
                          { href: (0, u.k2)(w), className: v.CreatorNameName },
                          g.GetName(),
                        ),
                        Boolean(a) &&
                          r.createElement(
                            "div",
                            {
                              className: (0, i.A)(
                                h.FlexColumnContainer,
                                v.CreatorTagline,
                              ),
                            },
                            g.GetTagLine(),
                          ),
                      ),
                      r.createElement(
                        "div",
                        {
                          className: (0, i.A)({
                            [h.FlexColumnContainer]: S,
                            [h.FlexRowContainer]: !S,
                            [v.SocialFollowersCtn]: !0,
                          }),
                        },
                        r.createElement(
                          "div",
                          { className: (0, i.A)(v.FollowBtnCtn) },
                          Boolean(!D) &&
                            r.createElement(_.of, {
                              clanAccountID: t.clan_account_id,
                              creatorID: t,
                            }),
                          r.createElement(
                            "div",
                            { className: (0, i.A)({ [v.Followers]: !0 }) },
                            r.createElement("span", null, (0, p.Dq)(N)),
                            r.createElement("br", null),
                            (0, m.we)("#CreatorHome_JustFollowers"),
                          ),
                        ),
                      ),
                    ),
                  ),
                  Boolean(A) &&
                    r.createElement(
                      "a",
                      {
                        href:
                          d.TS.COMMUNITY_BASE_URL +
                          "gid/" +
                          g.GetClanSteamID().ConvertTo64BitString() +
                          "/members/",
                        target: "_blank",
                        className: v.MembersListLink,
                      },
                      (0, m.we)("#ClanMembershipList"),
                    ),
                ),
              ),
            ),
          ),
        );
      }
      function D(e) {
        const { appid: t, bSmallFormat: a } = e,
          [n] = (0, s.t7)(t, { include_basic_info: !0 });
        if (!t) return null;
        if (!n)
          return r.createElement(
            "div",
            { className: v.DevSummaryWidgetCtn },
            r.createElement(b.t, null),
          );
        let l;
        const o = n.GetAllDeveloperCreatorClans();
        if (o?.length > 0)
          l = { appid: t, name: "", clan_account_id: o[0], type: "developer" };
        else {
          const e = n.GetAllPublisherCreatorClans();
          if (e?.length > 0)
            l = {
              appid: t,
              name: "",
              clan_account_id: e[0],
              type: "publisher",
            };
          else {
            const e = n.GetAllFranchiseCreatorClans();
            e?.length > 0 &&
              (l = {
                appid: t,
                name: "",
                clan_account_id: e[0],
                type: "franchise",
              });
          }
        }
        return l
          ? r.createElement(
              E.tH,
              null,
              r.createElement(S, { creatorID: l, bSmallFormat: a }),
            )
          : null;
      }
    },
    46416: (e, t, a) => {
      "use strict";
      a.d(t, { J: () => G, W: () => k });
      var r = a(90626),
        n = a(57876),
        l = a(45699),
        o = a(76217),
        s = a(23310),
        c = a(55963),
        i = a(30894),
        m = a(62792),
        p = a(55263),
        u = a(33924),
        d = a(26101),
        E = a(45359),
        C = a(18654),
        b = a.n(C),
        v = a(3661),
        _ = a(89274),
        h = a(72860),
        S = a(70300),
        D = a(47235),
        A = a(37076),
        f = a(54492),
        g = a(60014),
        y = a(52038),
        I = a(61859),
        P = a(61336),
        w = a(78327),
        N = a(91291),
        T = a.n(N),
        H = a(99956),
        F = a(49411);
      const G = "capsule_index_";
      function k(e) {
        const {
            capsule: t,
            bShowParentApp: a,
            elElementToAppendToHover: l,
            index: c,
            navKey: i,
            bHideStoreHover: u,
            onlyOneDiscountPct: E,
            bPreferDemoStorePage: C,
          } = e,
          [v, _] = r.useState(!1),
          [h] = (0, p.G6)(t.id, (0, m.SW)(t.type), n.Xh),
          [D] = (0, p.t7)(a && h?.GetParentAppID(), n.Xh);
        if (!h) return null;
        const A = Boolean(D),
          f = r.createElement(L, {
            ...e,
            strExtraParams: e.strExtraParams,
            info: t,
            bIsHovered: v,
            bHasParentAppToDisplay: A,
            onlyOneDiscountPct: E,
          });
        return r.createElement(
          o.Z,
          {
            className: (0, y.A)({
              [b().OuterCapsuleContainer]: !0,
              [G + c]: 0 == c,
            }),
            navEntryPreferPosition: s.iU.PREFERRED_CHILD,
            navKey: i,
          },
          r.createElement(
            S.oj,
            { appid: h.GetAppID() },
            Boolean(u)
              ? r.createElement(
                  "div",
                  { onMouseEnter: () => _(!0), onMouseLeave: () => _(!1) },
                  f,
                )
              : r.createElement(
                  d.Qf,
                  {
                    className: b().CapsuleContainer,
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
                  f,
                ),
            Boolean(l) && r.createElement(r.Fragment, null, l),
          ),
          A &&
            r.createElement(x, {
              strExtraParams: e.strExtraParams,
              parentStoreItem: D,
              childAppType: h.GetAppType(),
              bPreferDemoStorePage: C,
            }),
        );
      }
      function x(e) {
        const {
            strExtraParams: t,
            parentStoreItem: a,
            childAppType: o,
            bPreferDemoStorePage: s,
          } = e,
          c = (0, g.n9)(),
          i = (0, w.Qn)();
        return r.createElement(
          l.ml,
          { className: b().CapsuleParentInfo, ...(0, h.S)(a, c, i, s, t) },
          r.createElement(
            S.oj,
            { appid: a.GetAppID() },
            r.createElement(
              "div",
              { className: b().ParentType },
              (0, I.we)(
                11 == o
                  ? "#SalePage_ParentApp_SoundTrack"
                  : "#SalePage_ParentApp_DLC",
              ),
            ),
            r.createElement(
              A.u,
              { type: "app", id: a.GetAppID(), strExtraParams: t },
              r.createElement("img", {
                loading: "lazy",
                className: u.AppCapsuleImage,
                alt: a.GetName(),
                src: a.GetAssets().GetSmallCapsuleURL(),
                ...(0, n.Jw)(),
              }),
            ),
          ),
        );
      }
      function L(e) {
        const {
            info: t,
            bHideStatusBanners: a,
            strExtraParams: o,
            index: s,
            imageType: i,
            bHasParentAppToDisplay: u,
            bIsHovered: d,
            strDoubleCapsuleMessage: C,
            bPreferDemoStorePage: h,
          } = e,
          [S] = (0, p.G6)(t.id, (0, m.SW)(t.type), n.Xh),
          D = (0, g.n9)(),
          A = (0, F.w)(),
          I = (0, r.useMemo)(() => S?.GetIncludedAppIDsOrSelf(), [S]);
        if (!S) return null;
        const w = (0, P.NT)(
          (0, c.It)(`${S.GetStorePageURL(h)}${o ? `?${o}` : ""}`, D, A),
        );
        let N;
        "overrideNavigation" in t &&
          (N = (e) => (
            t.overrideNavigation(e), e.preventDefault(), e.stopPropagation(), !1
          ));
        const G = Boolean(C);
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            l.Ii,
            {
              href: N ? null : w,
              style: { display: "block", cursor: "pointer" },
              className: b().CapsuleFocusCtn,
              preferredFocus: u,
              onClick: N,
            },
            r.createElement(
              "div",
              { className: (0, y.A)({ [T().TwoWidthCtn]: G }) },
              r.createElement(
                "div",
                { className: (0, y.A)({ [T().TwoWidthCapsule]: G }) },
                r.createElement(_.V, { appids: I, hide_status_banners: a }),
                r.createElement(E.aU, { imageType: i, info: t }),
                r.createElement(f.S, {
                  eDeckCompatibilityCategory:
                    S?.GetPlatforms()?.steam_deck_compat_category,
                }),
                Boolean(d) && r.createElement(v.m, { appInfo: t }),
              ),
              G &&
                r.createElement(
                  "div",
                  { className: T().TwoWidthSideInfo },
                  r.createElement("div", { className: T().Reason }, C),
                  r.createElement(
                    "div",
                    { className: T().StoreSaleItemRelease },
                    r.createElement(
                      "span",
                      null,
                      S.GetFormattedSteamReleaseDate(),
                    ),
                  ),
                  r.createElement(H.n, {
                    bHideTitle: !0,
                    rgTagIDs: S.GetTagIDs(),
                    instanceNum: s,
                  }),
                ),
            ),
          ),
          r.createElement(W, { ...e }),
        );
      }
      function W(e) {
        const {
            info: t,
            bHidePriceIfOwned: a,
            bHideStatusBanners: l,
            bUseSubscriptionLayout: o,
            elElementToAppendToHover: s,
            bHidePrice: c,
            bHidePlatforms: u,
            creatorAccountID: d,
            bIsHovered: C,
            onlyOneDiscountPct: b,
            strDoubleCapsuleMessage: v,
          } = e,
          [_] = (0, p.G6)(t.id, (0, m.SW)(t.type), n.Xh),
          h =
            _ &&
            _?.GetIncludedAppIDsOrSelf().every((e) => i.Fm.Get().BOwnsApp(e)),
          S = h && !l;
        if (o && 0 == _?.GetStoreItemType())
          return r.createElement(D.E, { appid: _.GetAppID(), bIsMuted: C });
        if (s) return null;
        const A = h && a,
          f = S;
        return r.createElement(E.qn, {
          info: t,
          bShowAsMuted: f,
          bHidePrice: c,
          bShowInLibraryInsteadOfPrice: A,
          bHidePlatforms: u,
          creatorAccountID: d,
          bShowName: e.bShowName,
          onlyOneDiscountPct: b,
          bShowWishlistButton: Boolean(v),
        });
      }
    },
    17289: (e, t, a) => {
      "use strict";
      a.d(t, { m: () => o });
      var r = a(45699),
        n = a(90626),
        l = a(78327);
      function o(e) {
        const { href: t, children: a, bAllowFocuseableAnchor: o, ...s } = e;
        return (0, l.Y2)()
          ? n.createElement("div", { ...s }, a)
          : o
            ? n.createElement(r.Ii, { href: t, ...s }, a)
            : n.createElement("a", { href: t, ...s }, a);
      }
    },
  },
]);
