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
      a.d(t, { LG: () => D, hA: () => _ });
      var n = a(90626),
        r = a(76217),
        l = a(67165),
        o = a(30894),
        s = a(55263),
        i = a(17289),
        c = a(52038),
        m = a(61859),
        p = a(82227),
        u = a(61336),
        d = a(78327),
        E = a(84811),
        C = a(32630),
        b = a(22797),
        v = a(56524),
        h = a(48838),
        S = a(95695);
      function _(e) {
        const {
            creatorID: t,
            bShowTagline: a,
            bHideCreatorType: s,
            bSmallFormat: _,
            bHideFollowButton: D,
            bAddLinkToMemberList: A,
            bMinimalDisplay: f,
          } = e,
          g = (0, l.FV)(t.clan_account_id),
          [I] = (0, o.L2)();
        if (I || !g)
          return n.createElement(
            "div",
            { className: v.DevSummaryWidgetCtn },
            n.createElement(b.t, {
              string: (0, m.we)("#Loading"),
              size: "medium",
              position: "center",
            }),
          );
        const w = t.type,
          y =
            "developer" == t.type
              ? (0, m.we)("#CreatorHome_DevelopedBy")
              : "publisher" == t.type
                ? (0, m.we)("#CreatorHome_PublishedBy")
                : (0, m.we)("#CreatorHome_InFranchise"),
          P = g.GetCreatorHomeURL(w),
          N = g.GetNumFollowers();
        return n.createElement(
          E.tH,
          null,
          n.createElement(
            C.Ay,
            { feature: "salecreatorhome" },
            n.createElement(
              r.Z,
              {
                className: (0, c.A)(
                  v.DevSummaryCtn,
                  _ ? v.SmallFormat : v.LargeFormat,
                  f ? v.MinimalDisplay : "",
                ),
                "flow-children": "row",
              },
              !s && n.createElement("span", { className: v.Title }, y),
              n.createElement(
                "div",
                { className: v.DevSummaryWidgetCtn },
                n.createElement("div", {
                  className: v.DevSummaryBackground,
                  style: {
                    backgroundImage: `url(${g.GetAvatarURLFullSize()} )`,
                  },
                }),
                n.createElement(
                  "div",
                  { className: (0, c.A)(v.DevSummaryContent) },
                  n.createElement(
                    "div",
                    { className: S.FlexRowContainer },
                    n.createElement(
                      i.m,
                      {
                        href: (0, u.k2)(P),
                        className: v.AvatarLink,
                        bAllowFocuseableAnchor: !0,
                      },
                      n.createElement("img", {
                        className: (0, c.A)(v.Avatar, "Avatar_Trgt"),
                        src: g.GetAvatarURLFullSize(),
                      }),
                    ),
                    n.createElement(
                      "div",
                      {
                        className: (0, c.A)(
                          S.FlexColumnContainer,
                          v.CreatorDescCtn,
                        ),
                      },
                      n.createElement(
                        "div",
                        {
                          className: (0, c.A)(
                            v.CreatorTitleCtn,
                            S.FlexColumnContainer,
                          ),
                        },
                        n.createElement(
                          i.m,
                          { href: (0, u.k2)(P), className: v.CreatorNameName },
                          g.GetName(),
                        ),
                        Boolean(a) &&
                          n.createElement(
                            "div",
                            {
                              className: (0, c.A)(
                                S.FlexColumnContainer,
                                v.CreatorTagline,
                              ),
                            },
                            g.GetTagLine(),
                          ),
                      ),
                      n.createElement(
                        "div",
                        {
                          className: (0, c.A)({
                            [S.FlexColumnContainer]: _,
                            [S.FlexRowContainer]: !_,
                            [v.SocialFollowersCtn]: !0,
                          }),
                        },
                        n.createElement(
                          "div",
                          { className: (0, c.A)(v.FollowBtnCtn) },
                          Boolean(!D) &&
                            n.createElement(h.of, {
                              clanAccountID: t.clan_account_id,
                              creatorID: t,
                            }),
                          n.createElement(
                            "div",
                            { className: (0, c.A)({ [v.Followers]: !0 }) },
                            n.createElement("span", null, (0, p.Dq)(N)),
                            n.createElement("br", null),
                            (0, m.we)("#CreatorHome_JustFollowers"),
                          ),
                        ),
                      ),
                    ),
                  ),
                  Boolean(A) &&
                    n.createElement(
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
          [r] = (0, s.t7)(t, { include_basic_info: !0 });
        if (!t) return null;
        if (!r)
          return n.createElement(
            "div",
            { className: v.DevSummaryWidgetCtn },
            n.createElement(b.t, null),
          );
        let l;
        const o = r.GetAllDeveloperCreatorClans();
        if (o?.length > 0)
          l = { appid: t, name: "", clan_account_id: o[0], type: "developer" };
        else {
          const e = r.GetAllPublisherCreatorClans();
          if (e?.length > 0)
            l = {
              appid: t,
              name: "",
              clan_account_id: e[0],
              type: "publisher",
            };
          else {
            const e = r.GetAllFranchiseCreatorClans();
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
          ? n.createElement(
              E.tH,
              null,
              n.createElement(_, { creatorID: l, bSmallFormat: a }),
            )
          : null;
      }
    },
    46416: (e, t, a) => {
      "use strict";
      a.d(t, { J: () => G, W: () => x });
      var n = a(90626),
        r = a(57876),
        l = a(45699),
        o = a(76217),
        s = a(23310),
        i = a(55963),
        c = a(30894),
        m = a(62792),
        p = a(55263),
        u = a(33924),
        d = a(26101),
        E = a(45359),
        C = a(18654),
        b = a.n(C),
        v = a(3661),
        h = a(89274),
        S = a(72860),
        _ = a(70300),
        D = a(47235),
        A = a(37076),
        f = a(54492),
        g = a(60014),
        I = a(52038),
        w = a(61859),
        y = a(61336),
        P = a(78327),
        N = a(91291),
        T = a.n(N),
        H = a(99956),
        F = a(49411);
      const G = "capsule_index_";
      function x(e) {
        const {
            capsule: t,
            bShowParentApp: a,
            elElementToAppendToHover: l,
            index: i,
            navKey: c,
            bHideStoreHover: u,
            onlyOneDiscountPct: E,
            bPreferDemoStorePage: C,
          } = e,
          [v, h] = n.useState(!1),
          [S] = (0, p.G6)(t.id, (0, m.SW)(t.type), r.Xh),
          [D] = (0, p.t7)(a && S?.GetParentAppID(), r.Xh);
        if (!S) return null;
        const A = Boolean(D),
          f = n.createElement(L, {
            ...e,
            strExtraParams: e.strExtraParams,
            info: t,
            bIsHovered: v,
            bHasParentAppToDisplay: A,
            onlyOneDiscountPct: E,
          });
        return n.createElement(
          o.Z,
          {
            className: (0, I.A)({
              [b().OuterCapsuleContainer]: !0,
              [G + i]: 0 == i,
            }),
            navEntryPreferPosition: s.iU.PREFERRED_CHILD,
            navKey: c,
          },
          n.createElement(
            _.oj,
            { appid: S.GetAppID() },
            Boolean(u)
              ? n.createElement(
                  "div",
                  { onMouseEnter: () => h(!0), onMouseLeave: () => h(!1) },
                  f,
                )
              : n.createElement(
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
            Boolean(l) && n.createElement(n.Fragment, null, l),
          ),
          A &&
            n.createElement(k, {
              strExtraParams: e.strExtraParams,
              parentStoreItem: D,
              childAppType: S.GetAppType(),
              bPreferDemoStorePage: C,
            }),
        );
      }
      function k(e) {
        const {
            strExtraParams: t,
            parentStoreItem: a,
            childAppType: o,
            bPreferDemoStorePage: s,
          } = e,
          i = (0, g.n9)(),
          c = (0, P.Qn)();
        return n.createElement(
          l.ml,
          { className: b().CapsuleParentInfo, ...(0, S.S)(a, i, c, s, t) },
          n.createElement(
            _.oj,
            { appid: a.GetAppID() },
            n.createElement(
              "div",
              { className: b().ParentType },
              (0, w.we)(
                11 == o
                  ? "#SalePage_ParentApp_SoundTrack"
                  : "#SalePage_ParentApp_DLC",
              ),
            ),
            n.createElement(
              A.u,
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
      function L(e) {
        const {
            info: t,
            bHideStatusBanners: a,
            strExtraParams: o,
            index: s,
            imageType: c,
            bHasParentAppToDisplay: u,
            bIsHovered: d,
            strDoubleCapsuleMessage: C,
            bPreferDemoStorePage: S,
          } = e,
          [_] = (0, p.G6)(t.id, (0, m.SW)(t.type), r.Xh),
          D = (0, g.n9)(),
          A = (0, F.w)(),
          w = (0, n.useMemo)(() => _?.GetIncludedAppIDsOrSelf(), [_]);
        if (!_) return null;
        const P = (0, y.NT)(
          (0, i.It)(`${_.GetStorePageURL(S)}${o ? `?${o}` : ""}`, D, A),
        );
        let N;
        "overrideNavigation" in t &&
          (N = (e) => (
            t.overrideNavigation(e), e.preventDefault(), e.stopPropagation(), !1
          ));
        const G = Boolean(C);
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            "div",
            { className: b().CapsuleFocusCtn },
            n.createElement(
              "div",
              { className: (0, I.A)({ [T().TwoWidthCtn]: G }) },
              n.createElement(
                l.Ii,
                {
                  href: N ? null : P,
                  style: { display: "block", cursor: "pointer" },
                  className: (0, I.A)({ [T().TwoWidthCapsule]: G }),
                  preferredFocus: u,
                  onClick: N,
                },
                n.createElement(h.V, { appids: w, hide_status_banners: a }),
                n.createElement(E.aU, { imageType: c, info: t }),
                n.createElement(f.J, { storeItem: _ }),
                Boolean(d) && n.createElement(v.m, { appInfo: t }),
              ),
              G &&
                n.createElement(
                  "div",
                  { className: T().TwoWidthSideInfo },
                  n.createElement("div", { className: T().Reason }, C),
                  n.createElement(
                    "div",
                    { className: T().StoreSaleItemRelease },
                    n.createElement(
                      "span",
                      null,
                      _.GetFormattedSteamReleaseDate(),
                    ),
                  ),
                  n.createElement(H.n, {
                    bHideTitle: !0,
                    rgTagIDs: _.GetTagIDs(),
                    instanceNum: s,
                  }),
                ),
            ),
          ),
          n.createElement(W, { ...e }),
        );
      }
      function W(e) {
        const {
            info: t,
            bHidePriceIfOwned: a,
            bHideStatusBanners: l,
            bUseSubscriptionLayout: o,
            elElementToAppendToHover: s,
            bHidePrice: i,
            bHidePlatforms: u,
            creatorAccountID: d,
            bIsHovered: C,
            onlyOneDiscountPct: b,
            strDoubleCapsuleMessage: v,
          } = e,
          [h] = (0, p.G6)(t.id, (0, m.SW)(t.type), r.Xh),
          S =
            h &&
            h?.GetIncludedAppIDsOrSelf().every((e) => c.Fm.Get().BOwnsApp(e)),
          _ = S && !l;
        if (o && 0 == h?.GetStoreItemType())
          return n.createElement(D.E, { appid: h.GetAppID(), bIsMuted: C });
        if (s) return null;
        const A = S && a,
          f = _;
        return n.createElement(E.qn, {
          info: t,
          bShowAsMuted: f,
          bHidePrice: i,
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
      var n = a(45699),
        r = a(90626),
        l = a(78327);
      function o(e) {
        const { href: t, children: a, bAllowFocuseableAnchor: o, ...s } = e;
        return (0, l.Y2)()
          ? r.createElement("div", { ...s }, a)
          : o
            ? r.createElement(n.Ii, { href: t, ...s }, a)
            : r.createElement("a", { href: t, ...s }, a);
      }
    },
  },
]);
