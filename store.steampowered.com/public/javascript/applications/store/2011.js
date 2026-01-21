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
    14336: (e, t, a) => {
      "use strict";
      a.d(t, { mK: () => v, DW: () => b, js: () => _, tb: () => h });
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
          a = n.useContext(E);
        return (0, r.I)(v(a, t, e));
      }
      function b(e) {
        const t = (0, l.KV)(),
          a = n.useContext(E);
        return (0, o.E)({ queries: e.map((e) => v(a, t, e)) });
      }
      const E = n.createContext({
        loadPersonaState: async (e, t) => {
          if (null == e) return null;
          const a = await (function (e) {
            return (C ??= d(e));
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
      function h() {
        return n.useContext(E);
      }
      function v(e, t, a) {
        const n = "string" == typeof a ? new c.b(a).GetAccountID() : a;
        return {
          queryKey: ["PlayerSummary", n],
          queryFn: () => e.loadPersonaState(n, t),
          enabled: !!n,
        };
      }
      let C;
    },
    32541: (e, t, a) => {
      "use strict";
      a.d(t, { LG: () => f, hA: () => S });
      var n = a(90626),
        r = a(76217),
        o = a(8092),
        l = a(30894),
        s = a(55263),
        i = a(17289),
        c = a(52038),
        m = a(61859),
        u = a(82227),
        p = a(61336),
        d = a(78327),
        _ = a(84811),
        b = a(32630),
        E = a(22797),
        h = a(56524),
        v = a(48838),
        C = a(95695);
      function S(e) {
        const {
            creatorID: t,
            bShowTagline: a,
            bHideCreatorType: s,
            bSmallFormat: S,
            bHideFollowButton: f,
            bAddLinkToMemberList: g,
            bMinimalDisplay: w,
          } = e,
          { creatorHome: y } = (0, o.FV)(t.clan_account_id),
          [A] = (0, l.L2)();
        if (A || !y)
          return n.createElement(
            "div",
            { className: h.DevSummaryWidgetCtn },
            n.createElement(E.t, {
              string: (0, m.we)("#Loading"),
              size: "medium",
              position: "center",
            }),
          );
        const D = t.type,
          P =
            "developer" == t.type
              ? (0, m.we)("#CreatorHome_DevelopedBy")
              : "publisher" == t.type
                ? (0, m.we)("#CreatorHome_PublishedBy")
                : (0, m.we)("#CreatorHome_InFranchise"),
          I = y.GetCreatorHomeURL(D),
          N = y.GetNumFollowers();
        return n.createElement(
          _.tH,
          null,
          n.createElement(
            b.Ay,
            { feature: "salecreatorhome" },
            n.createElement(
              r.Z,
              {
                className: (0, c.A)(
                  h.DevSummaryCtn,
                  S ? h.SmallFormat : h.LargeFormat,
                  w ? h.MinimalDisplay : "",
                ),
                "flow-children": "row",
              },
              !s && n.createElement("span", { className: h.Title }, P),
              n.createElement(
                "div",
                { className: h.DevSummaryWidgetCtn },
                n.createElement("div", {
                  className: h.DevSummaryBackground,
                  style: {
                    backgroundImage: `url(${y.GetAvatarURLFullSize()} )`,
                  },
                }),
                n.createElement(
                  "div",
                  { className: (0, c.A)(h.DevSummaryContent) },
                  n.createElement(
                    "div",
                    { className: C.FlexRowContainer },
                    n.createElement(
                      i.m,
                      {
                        href: (0, p.k2)(I),
                        className: h.AvatarLink,
                        bAllowFocuseableAnchor: !0,
                      },
                      n.createElement("img", {
                        className: (0, c.A)(h.Avatar, "Avatar_Trgt"),
                        src: y.GetAvatarURLFullSize(),
                      }),
                    ),
                    n.createElement(
                      "div",
                      {
                        className: (0, c.A)(
                          C.FlexColumnContainer,
                          h.CreatorDescCtn,
                        ),
                      },
                      n.createElement(
                        "div",
                        {
                          className: (0, c.A)(
                            h.CreatorTitleCtn,
                            C.FlexColumnContainer,
                          ),
                        },
                        n.createElement(
                          i.m,
                          { href: (0, p.k2)(I), className: h.CreatorNameName },
                          y.GetName(),
                        ),
                        Boolean(a) &&
                          n.createElement(
                            "div",
                            {
                              className: (0, c.A)(
                                C.FlexColumnContainer,
                                h.CreatorTagline,
                              ),
                            },
                            y.GetTagLine(),
                          ),
                      ),
                      n.createElement(
                        "div",
                        {
                          className: (0, c.A)({
                            [C.FlexColumnContainer]: S,
                            [C.FlexRowContainer]: !S,
                            [h.SocialFollowersCtn]: !0,
                          }),
                        },
                        n.createElement(
                          "div",
                          { className: (0, c.A)(h.FollowBtnCtn) },
                          Boolean(!f) &&
                            n.createElement(v.of, {
                              clanAccountID: t.clan_account_id,
                              creatorID: t,
                            }),
                          n.createElement(
                            "div",
                            { className: (0, c.A)({ [h.Followers]: !0 }) },
                            n.createElement(
                              "span",
                              null,
                              (0, m.we)("#CreatorHome_JustFollowers"),
                            ),
                            n.createElement(
                              "span",
                              { className: h.FollowerCount },
                              (0, u.Dq)(N),
                            ),
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
                        className: h.MembersListLink,
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
            { className: h.DevSummaryWidgetCtn },
            n.createElement(E.t, null),
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
      a.d(t, { J: () => L, W: () => k });
      var n = a(45699),
        r = a(76217),
        o = a(23310),
        l = a(14987),
        s = a(39777),
        i = a(60014),
        c = a(58918),
        m = a(90626),
        u = a(57876),
        p = a(35380),
        d = a(55963),
        _ = a(62792),
        b = a(55263),
        E = a(33924),
        h = a(26101),
        v = a(45359),
        C = a(18654),
        S = a.n(C),
        f = a(3661),
        g = a(37346),
        w = a(72860),
        y = a(70300),
        A = a(47235),
        D = a(37076),
        P = a(54492),
        I = a(49411),
        N = a(52038),
        T = a(61859),
        H = a(61336),
        F = a(78327),
        x = a(62822),
        B = a(91291),
        G = a.n(B),
        W = a(99956);
      const L = "capsule_index_";
      function k(e) {
        const {
            capsule: t,
            bShowParentApp: a,
            elElementToAppendToHover: n,
            index: l,
            navKey: s,
            bHideStoreHover: i,
            onlyOneDiscountPct: c,
            bPreferDemoStorePage: p,
            bShowEarlyAccessBanner: d,
          } = e,
          [E, v] = m.useState(!1),
          [C] = (0, b.G6)(t.id, (0, _.SW)(t.type), u.Xh),
          [f] = (0, b.t7)(a ? C?.GetParentAppID() : void 0, u.Xh);
        if (!C) return null;
        const g = Boolean(f),
          w = m.createElement(O, {
            ...e,
            strExtraParams: e.strExtraParams,
            info: t,
            bIsHovered: E,
            bHasParentAppToDisplay: g,
            onlyOneDiscountPct: c,
            bShowEarlyAccessBanner: d,
          });
        return m.createElement(
          r.Z,
          {
            className: (0, N.A)({
              [S().OuterCapsuleContainer]: !0,
              [L + l]: 0 == l,
            }),
            navEntryPreferPosition: o.iU.PREFERRED_CHILD,
            navKey: s,
          },
          m.createElement(
            y.oj,
            { appid: C.GetAppID() },
            Boolean(i)
              ? m.createElement(
                  "div",
                  { onMouseEnter: () => v(!0), onMouseLeave: () => v(!1) },
                  w,
                )
              : m.createElement(
                  h.Qf,
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
                    nWidthMultiplier: e.nWidthMultiplier,
                    bShowIgnoreButton: e.bShowIgnoreButton,
                    bShowDescription: e.bShowDescriptionInHover,
                  },
                  w,
                ),
            Boolean(n) && m.createElement(m.Fragment, null, n),
          ),
          g &&
            m.createElement(M, {
              strExtraParams: e.strExtraParams,
              parentStoreItem: f,
              childAppType: C.GetAppType(),
              bPreferDemoStorePage: p,
            }),
        );
      }
      function M(e) {
        const {
            strExtraParams: t,
            parentStoreItem: a,
            childAppType: r,
            bPreferDemoStorePage: o,
          } = e,
          l = (0, i.n9)(),
          s = (0, F.Qn)();
        return m.createElement(
          n.ml,
          { className: S().CapsuleParentInfo, ...(0, w.S)(a, l, s, o, t) },
          m.createElement(
            y.oj,
            { appid: a.GetAppID() },
            m.createElement(
              "div",
              { className: S().ParentType },
              (0, T.we)(
                11 == r
                  ? "#SalePage_ParentApp_SoundTrack"
                  : "#SalePage_ParentApp_DLC",
              ),
            ),
            m.createElement(
              D.u,
              { type: "app", id: a.GetAppID(), strExtraParams: t },
              m.createElement("img", {
                loading: "lazy",
                className: E.AppCapsuleImage,
                alt: a.GetName(),
                src: a.GetAssets().GetSmallCapsuleURL(),
                ...(0, u.Jw)(),
              }),
            ),
          ),
        );
      }
      function O(e) {
        const {
            info: t,
            bHideStatusBanners: a,
            strExtraParams: r,
            index: o,
            imageType: s,
            bHasParentAppToDisplay: c,
            bIsHovered: E,
            strDoubleCapsuleMessage: h,
            bPreferDemoStorePage: v,
            bShowEarlyAccessBanner: C,
            bPreferAssetWithoutOverride: S,
          } = e,
          [w] = (0, b.G6)(t.id, (0, _.SW)(t.type), u.Xh),
          y = (0, p.rt)(t),
          A = (0, i.n9)(),
          D = (0, I.w)(),
          T = (0, l._)(y);
        if (!w) return null;
        const F = (0, H.NT)(
          (0, d.It)(`${w.GetStorePageURL(v)}${r ? `?${r}` : ""}`, A, D),
        );
        let B;
        "overrideNavigation" in t &&
          (B = (e) => (
            t.overrideNavigation(e), e.preventDefault(), e.stopPropagation(), !1
          ));
        const L = Boolean(h);
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(
            "div",
            { className: (0, N.A)({ [G().TwoWidthCtn]: L }) },
            m.createElement(
              n.Ii,
              {
                href: B ? void 0 : F,
                style: { display: "block", cursor: "pointer" },
                className: (0, N.A)({ [G().TwoWidthCapsule]: L }),
                preferredFocus: c,
                onClick: B,
              },
              m.createElement(g.V, {
                appids: T,
                hide_status_banners: a,
                show_early_access: e.bShowEarlyAccessBanner,
              }),
              "none" != s &&
                m.createElement(x.a, {
                  imageType: s,
                  id: y,
                  bPreferAssetWithoutOverride: S,
                }),
              m.createElement(P.J, { id: y }),
              Boolean(E) && m.createElement(f.m, { id: y, bIsHoverMode: !0 }),
            ),
            L &&
              m.createElement(
                "div",
                {
                  className: (0, N.A)(G().TwoWidthSideInfo, "TwoWidthSideInfo"),
                },
                m.createElement("div", { className: G().Reason }, h),
                m.createElement(
                  "div",
                  { className: G().StoreSaleItemRelease },
                  m.createElement(
                    "span",
                    null,
                    w.GetFormattedSteamReleaseDate(),
                  ),
                ),
                m.createElement(W.n, {
                  bHideTitle: !0,
                  rgTagIDs: w.GetTagIDs(),
                  instanceNum: o,
                }),
              ),
          ),
          m.createElement(R, { ...e }),
        );
      }
      function R(e) {
        const {
            info: t,
            bHidePriceIfOwned: a,
            bHideStatusBanners: n,
            bUseSubscriptionLayout: r,
            elElementToAppendToHover: o,
            bHidePrice: l,
            bHidePlatforms: i,
            creatorAccountID: u,
            bIsHovered: d,
            onlyOneDiscountPct: _,
            strDoubleCapsuleMessage: b,
          } = e,
          E = (0, p.rt)(t),
          { data: h } = (0, s.J$)(E),
          { bIsOwned: C } = (0, c.ZJ)(E),
          S = C && !n;
        if (r && h && 0 == h.item_type && h.appid)
          return m.createElement(A.E, { appid: h.appid, bIsMuted: d });
        if (o) return null;
        const f = Boolean(C && a),
          g = Boolean(S);
        return m.createElement(v.qn, {
          info: t,
          bShowAsMuted: g,
          bHidePrice: l,
          bShowInLibraryInsteadOfPrice: f,
          bHidePlatforms: i,
          creatorAccountID: u,
          bShowName: e.bShowName,
          onlyOneDiscountPct: _,
          bShowWishlistButton: Boolean(b),
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
