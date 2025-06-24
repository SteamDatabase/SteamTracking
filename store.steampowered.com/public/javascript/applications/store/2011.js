/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2011],
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
        "duration-app-launch": "800ms",
        narrowWidth: "500px",
        TwoWidthCtn: "_49thIpYeG08pUfNc1x_w9",
        TwoWidthCapsule: "_78Qv2C95AM2DNCuLD5o8U",
        TwoWidthSideInfo: "_2qz5D65VkY796Xw-al9f_a",
        Reason: "_2h0GKAYcXRP10ryZHFn79d",
        StoreSaleItemRelease: "wJ7ZiTc09km2kH4mSsZ9j",
      };
    },
    14336: (e, t, a) => {
      "use strict";
      a.d(t, { mK: () => C, DW: () => E, js: () => _, tb: () => v });
      var n = a(90626),
        r = a(20194),
        o = a(54806),
        l = a(23809),
        s = a(44654),
        i = a(10622),
        c = a(17720),
        m = a(37735),
        u = a(58632),
        p = a.n(u);
      function d(e, t) {
        return new (p())(
          async (t) => {
            const a = [...t],
              n = await m.xt.GetPlayerLinkDetails(e, { steamids: a }),
              r = new Map();
            return (
              n
                .Body()
                .accounts()
                .forEach((e) => {
                  const t = e.toObject();
                  r.set(t.public_data.steamid, t);
                }),
              a.map((e) => r.get(e) ?? null)
            );
          },
          { maxBatchSize: 100, cache: !1, ...t },
        );
      }
      function _(e) {
        const t = (0, l.KV)(),
          a = n.useContext(b);
        return (0, r.I)(C(a, t, e));
      }
      function E(e) {
        const t = (0, l.KV)(),
          a = n.useContext(b);
        return (0, o.E)({ queries: e.map((e) => C(a, t, e)) });
      }
      const b = n.createContext({
        loadPersonaState: async (e, t) => {
          if (null == e) return null;
          const a = await (function (e) {
            return (h ??= d(e));
          })(t).load(c.b.InitFromAccountID(e).ConvertTo64BitString());
          return (function (e, t) {
            let a = new i.Z(e);
            const n = t?.public_data,
              r = t?.private_data;
            (a.m_bInitialized = !!t),
              (a.m_ePersonaState = r?.persona_state ?? 0),
              (a.m_strAvatarHash = n?.sha_digest_avatar
                ? (0, s.Kx)(n.sha_digest_avatar)
                : i.dV),
              (a.m_strPlayerName = n?.persona_name ?? e.ConvertTo64BitString()),
              (a.m_strAccountName = r?.account_name),
              r?.persona_state_flags &&
                (a.m_unPersonaStateFlags = r?.persona_state_flags);
            r?.game_id && (a.m_gameid = r?.game_id);
            r?.game_server_ip_address &&
              (a.m_unGameServerIP = r?.game_server_ip_address);
            r?.lobby_steam_id && (a.m_game_lobby_id = r?.lobby_steam_id);
            r?.game_extra_info && (a.m_strGameExtraInfo = r?.game_extra_info);
            n?.profile_url && (a.m_strProfileURL = n.profile_url);
            return a;
          })(c.b.InitFromAccountID(e), a);
        },
      });
      function v() {
        return n.useContext(b);
      }
      function C(e, t, a) {
        const n = "string" == typeof a ? new c.b(a).GetAccountID() : a;
        return {
          queryKey: ["PlayerSummary", n],
          queryFn: () => e.loadPersonaState(n, t),
          enabled: !!n,
        };
      }
      let h;
    },
    32541: (e, t, a) => {
      "use strict";
      a.d(t, { LG: () => f, hA: () => S });
      var n = a(90626),
        r = a(76217),
        o = a(67165),
        l = a(30894),
        s = a(55263),
        i = a(17289),
        c = a(52038),
        m = a(61859),
        u = a(82227),
        p = a(61336),
        d = a(78327),
        _ = a(84811),
        E = a(32630),
        b = a(22797),
        v = a(56524),
        C = a(48838),
        h = a(95695);
      function S(e) {
        const {
            creatorID: t,
            bShowTagline: a,
            bHideCreatorType: s,
            bSmallFormat: S,
            bHideFollowButton: f,
            bAddLinkToMemberList: g,
            bMinimalDisplay: D,
          } = e,
          y = (0, o.FV)(t.clan_account_id),
          [A] = (0, l.L2)();
        if (A || !y)
          return n.createElement(
            "div",
            { className: v.DevSummaryWidgetCtn },
            n.createElement(b.t, {
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
          w = y.GetCreatorHomeURL(I),
          N = y.GetNumFollowers();
        return n.createElement(
          _.tH,
          null,
          n.createElement(
            E.Ay,
            { feature: "salecreatorhome" },
            n.createElement(
              r.Z,
              {
                className: (0, c.A)(
                  v.DevSummaryCtn,
                  S ? v.SmallFormat : v.LargeFormat,
                  D ? v.MinimalDisplay : "",
                ),
                "flow-children": "row",
              },
              !s && n.createElement("span", { className: v.Title }, P),
              n.createElement(
                "div",
                { className: v.DevSummaryWidgetCtn },
                n.createElement("div", {
                  className: v.DevSummaryBackground,
                  style: {
                    backgroundImage: `url(${y.GetAvatarURLFullSize()} )`,
                  },
                }),
                n.createElement(
                  "div",
                  { className: (0, c.A)(v.DevSummaryContent) },
                  n.createElement(
                    "div",
                    { className: h.FlexRowContainer },
                    n.createElement(
                      i.m,
                      {
                        href: (0, p.k2)(w),
                        className: v.AvatarLink,
                        bAllowFocuseableAnchor: !0,
                      },
                      n.createElement("img", {
                        className: (0, c.A)(v.Avatar, "Avatar_Trgt"),
                        src: y.GetAvatarURLFullSize(),
                      }),
                    ),
                    n.createElement(
                      "div",
                      {
                        className: (0, c.A)(
                          h.FlexColumnContainer,
                          v.CreatorDescCtn,
                        ),
                      },
                      n.createElement(
                        "div",
                        {
                          className: (0, c.A)(
                            v.CreatorTitleCtn,
                            h.FlexColumnContainer,
                          ),
                        },
                        n.createElement(
                          i.m,
                          { href: (0, p.k2)(w), className: v.CreatorNameName },
                          y.GetName(),
                        ),
                        Boolean(a) &&
                          n.createElement(
                            "div",
                            {
                              className: (0, c.A)(
                                h.FlexColumnContainer,
                                v.CreatorTagline,
                              ),
                            },
                            y.GetTagLine(),
                          ),
                      ),
                      n.createElement(
                        "div",
                        {
                          className: (0, c.A)({
                            [h.FlexColumnContainer]: S,
                            [h.FlexRowContainer]: !S,
                            [v.SocialFollowersCtn]: !0,
                          }),
                        },
                        n.createElement(
                          "div",
                          { className: (0, c.A)(v.FollowBtnCtn) },
                          Boolean(!f) &&
                            n.createElement(C.of, {
                              clanAccountID: t.clan_account_id,
                              creatorID: t,
                            }),
                          n.createElement(
                            "div",
                            { className: (0, c.A)({ [v.Followers]: !0 }) },
                            n.createElement("span", null, (0, u.Dq)(N)),
                            n.createElement("br", null),
                            (0, m.we)("#CreatorHome_JustFollowers"),
                          ),
                        ),
                      ),
                    ),
                  ),
                  Boolean(g) &&
                    n.createElement(
                      "a",
                      {
                        href:
                          d.TS.COMMUNITY_BASE_URL +
                          "gid/" +
                          y.GetClanSteamID().ConvertTo64BitString() +
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
      function f(e) {
        const { appid: t, bSmallFormat: a } = e,
          [r] = (0, s.t7)(t, { include_basic_info: !0 });
        if (!t) return null;
        if (!r)
          return n.createElement(
            "div",
            { className: v.DevSummaryWidgetCtn },
            n.createElement(b.t, null),
          );
        let o;
        const l = r.GetAllDeveloperCreatorClans();
        if (l?.length > 0)
          o = { appid: t, name: "", clan_account_id: l[0], type: "developer" };
        else {
          const e = r.GetAllPublisherCreatorClans();
          if (e?.length > 0)
            o = {
              appid: t,
              name: "",
              clan_account_id: e[0],
              type: "publisher",
            };
          else {
            const e = r.GetAllFranchiseCreatorClans();
            e?.length > 0 &&
              (o = {
                appid: t,
                name: "",
                clan_account_id: e[0],
                type: "franchise",
              });
          }
        }
        return o
          ? n.createElement(
              _.tH,
              null,
              n.createElement(S, { creatorID: o, bSmallFormat: a }),
            )
          : null;
      }
    },
    46416: (e, t, a) => {
      "use strict";
      a.d(t, { J: () => G, W: () => x });
      var n = a(90626),
        r = a(57876),
        o = a(45699),
        l = a(76217),
        s = a(23310),
        i = a(55963),
        c = a(30894),
        m = a(62792),
        u = a(55263),
        p = a(33924),
        d = a(26101),
        _ = a(45359),
        E = a(18654),
        b = a.n(E),
        v = a(3661),
        C = a(89274),
        h = a(72860),
        S = a(70300),
        f = a(47235),
        g = a(37076),
        D = a(54492),
        y = a(60014),
        A = a(52038),
        I = a(61859),
        P = a(61336),
        w = a(78327),
        N = a(91291),
        T = a.n(N),
        H = a(99956),
        F = a(49411);
      const G = "capsule_index_";
      function x(e) {
        const {
            capsule: t,
            bShowParentApp: a,
            elElementToAppendToHover: o,
            index: i,
            navKey: c,
            bHideStoreHover: p,
            onlyOneDiscountPct: _,
            bPreferDemoStorePage: E,
          } = e,
          [v, C] = n.useState(!1),
          [h] = (0, u.G6)(t.id, (0, m.SW)(t.type), r.Xh),
          [f] = (0, u.t7)(a && h?.GetParentAppID(), r.Xh);
        if (!h) return null;
        const g = Boolean(f),
          D = n.createElement(k, {
            ...e,
            strExtraParams: e.strExtraParams,
            info: t,
            bIsHovered: v,
            bHasParentAppToDisplay: g,
            onlyOneDiscountPct: _,
          });
        return n.createElement(
          l.Z,
          {
            className: (0, A.A)({
              [b().OuterCapsuleContainer]: !0,
              [G + i]: 0 == i,
            }),
            navEntryPreferPosition: s.iU.PREFERRED_CHILD,
            navKey: c,
          },
          n.createElement(
            S.oj,
            { appid: h.GetAppID() },
            Boolean(p)
              ? n.createElement(
                  "div",
                  { onMouseEnter: () => C(!0), onMouseLeave: () => C(!1) },
                  D,
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
                  D,
                ),
            Boolean(o) && n.createElement(n.Fragment, null, o),
          ),
          g &&
            n.createElement(L, {
              strExtraParams: e.strExtraParams,
              parentStoreItem: f,
              childAppType: h.GetAppType(),
              bPreferDemoStorePage: E,
            }),
        );
      }
      function L(e) {
        const {
            strExtraParams: t,
            parentStoreItem: a,
            childAppType: l,
            bPreferDemoStorePage: s,
          } = e,
          i = (0, y.n9)(),
          c = (0, w.Qn)();
        return n.createElement(
          o.ml,
          { className: b().CapsuleParentInfo, ...(0, h.S)(a, i, c, s, t) },
          n.createElement(
            S.oj,
            { appid: a.GetAppID() },
            n.createElement(
              "div",
              { className: b().ParentType },
              (0, I.we)(
                11 == l
                  ? "#SalePage_ParentApp_SoundTrack"
                  : "#SalePage_ParentApp_DLC",
              ),
            ),
            n.createElement(
              g.u,
              { type: "app", id: a.GetAppID(), strExtraParams: t },
              n.createElement("img", {
                loading: "lazy",
                className: p.AppCapsuleImage,
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
            strExtraParams: l,
            index: s,
            imageType: c,
            bHasParentAppToDisplay: p,
            bIsHovered: d,
            strDoubleCapsuleMessage: E,
            bPreferDemoStorePage: h,
          } = e,
          [S] = (0, u.G6)(t.id, (0, m.SW)(t.type), r.Xh),
          f = (0, y.n9)(),
          g = (0, F.w)(),
          I = (0, n.useMemo)(() => S?.GetIncludedAppIDsOrSelf(), [S]);
        if (!S) return null;
        const w = (0, P.NT)(
          (0, i.It)(`${S.GetStorePageURL(h)}${l ? `?${l}` : ""}`, f, g),
        );
        let N;
        "overrideNavigation" in t &&
          (N = (e) => (
            t.overrideNavigation(e), e.preventDefault(), e.stopPropagation(), !1
          ));
        const G = Boolean(E);
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            "div",
            { className: b().CapsuleFocusCtn },
            n.createElement(
              "div",
              { className: (0, A.A)({ [T().TwoWidthCtn]: G }) },
              n.createElement(
                o.Ii,
                {
                  href: N ? null : w,
                  style: { display: "block", cursor: "pointer" },
                  className: (0, A.A)({ [T().TwoWidthCapsule]: G }),
                  preferredFocus: p,
                  onClick: N,
                },
                n.createElement(C.V, { appids: I, hide_status_banners: a }),
                n.createElement(_.aU, { imageType: c, info: t }),
                n.createElement(D.J, { storeItem: S }),
                Boolean(d) && n.createElement(v.m, { appInfo: t }),
              ),
              G &&
                n.createElement(
                  "div",
                  { className: T().TwoWidthSideInfo },
                  n.createElement("div", { className: T().Reason }, E),
                  n.createElement(
                    "div",
                    { className: T().StoreSaleItemRelease },
                    n.createElement(
                      "span",
                      null,
                      S.GetFormattedSteamReleaseDate(),
                    ),
                  ),
                  n.createElement(H.n, {
                    bHideTitle: !0,
                    rgTagIDs: S.GetTagIDs(),
                    instanceNum: s,
                  }),
                ),
            ),
          ),
          n.createElement(B, { ...e }),
        );
      }
      function B(e) {
        const {
            info: t,
            bHidePriceIfOwned: a,
            bHideStatusBanners: o,
            bUseSubscriptionLayout: l,
            elElementToAppendToHover: s,
            bHidePrice: i,
            bHidePlatforms: p,
            creatorAccountID: d,
            bIsHovered: E,
            onlyOneDiscountPct: b,
            strDoubleCapsuleMessage: v,
          } = e,
          [C] = (0, u.G6)(t.id, (0, m.SW)(t.type), r.Xh),
          h =
            C &&
            C?.GetIncludedAppIDsOrSelf().length > 0 &&
            C?.GetIncludedAppIDsOrSelf().every((e) => c.Fm.Get().BOwnsApp(e)),
          S = h && !o;
        if (l && 0 == C?.GetStoreItemType())
          return n.createElement(f.E, { appid: C.GetAppID(), bIsMuted: E });
        if (s) return null;
        const g = h && a,
          D = S;
        return n.createElement(_.qn, {
          info: t,
          bShowAsMuted: D,
          bHidePrice: i,
          bShowInLibraryInsteadOfPrice: g,
          bHidePlatforms: p,
          creatorAccountID: d,
          bShowName: e.bShowName,
          onlyOneDiscountPct: b,
          bShowWishlistButton: Boolean(v),
        });
      }
    },
    17289: (e, t, a) => {
      "use strict";
      a.d(t, { m: () => l });
      var n = a(45699),
        r = a(90626),
        o = a(78327);
      function l(e) {
        const { href: t, children: a, bAllowFocuseableAnchor: l, ...s } = e;
        return (0, o.Y2)()
          ? r.createElement("div", { ...s }, a)
          : l
            ? r.createElement(n.Ii, { href: t, ...s }, a)
            : r.createElement("a", { href: t, ...s }, a);
      }
    },
  },
]);
