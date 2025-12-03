/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9672],
  {
    15392: (e) => {
      e.exports = {
        Link: "-HlDBB290kjpl61uUmRed",
        Banner: "_2bT8irkKNnA5sxFG3MUXzH",
        Big: "sGy-bB7uqEt4Hoe7U5iA1",
        Mobile: "mhii5hgMCQvO2tXOUdWPQ",
      };
    },
    40594: (e) => {
      e.exports = {
        ProgressBar: "_3szjUMH5QeRwtXAsLRcWt9",
        AnimateProgress: "_3DjdoQj5NoknowwV5t5JPN",
        loadingBarAnim: "_2SA1xV5w3BGirkDWosGYoX",
        Indeterminate: "_3G7KLhFOuTiHW-fGxtWtRs",
        Circular: "_3wMS41OoTPnZyEddTVwzy_",
        Full: "_3t_UEZDy1QxxcYfn3TTvD2",
      };
    },
    71109: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        DiscoveryQueueWidgetCtn: "_1LXqxVtAL8Lmy7J7rLSVit",
        WidgetText: "co4IP1iV1813n9UgG3h5f",
        WidgetCapsule: "ZyOLslFdmnVjR1OGpRaue",
        CloseButton: "bfN8kdqVDI58Ly1qiSuT_",
        Y: "_1FD7rgQVEqkzjDjzYa-1BC",
      };
    },
    14336: (e, t, r) => {
      "use strict";
      r.d(t, { mK: () => b, DW: () => y, js: () => g, tb: () => v });
      var i = r(90626),
        a = r(20194),
        n = r(54806),
        s = r(22837),
        o = r(23809),
        l = r(44654),
        c = r(10622),
        m = r(17720),
        u = r(37735),
        d = r(58632),
        _ = r.n(d);
      function p(e, t) {
        return new (_())(
          async (t) => {
            const r = [...t],
              i = await u.xt.GetPlayerLinkDetails(e, { steamids: r }),
              a = new Map();
            return (
              i
                .Body()
                .accounts()
                .forEach((e) => {
                  const t = e.toObject();
                  a.set(t.public_data.steamid, t);
                }),
              r.map((e) => a.get(e) ?? null)
            );
          },
          { maxBatchSize: 100, cache: !1, ...t },
        );
      }
      function g(e) {
        const t = (0, o.KV)(),
          r = i.useContext(w);
        return (0, a.I)(b(r, t, e));
      }
      function y(e) {
        const t = (0, o.KV)(),
          r = i.useContext(w);
        return (0, n.E)({ queries: e.map((e) => b(r, t, e)) });
      }
      const w = i.createContext({
        loadPersonaState: async (e, t) => {
          if (null == e) return null;
          const r = await (function (e) {
            return (f ??= p(e));
          })(t).load(m.b.InitFromAccountID(e).ConvertTo64BitString());
          return (function (e, t) {
            let r = new c.Z(e);
            const i = t?.public_data,
              a = t?.private_data;
            (r.m_bInitialized = !!t),
              (r.m_ePersonaState =
                a?.persona_state ?? s.p2.k_EPersonaStateOffline),
              (r.m_strAvatarHash = i?.sha_digest_avatar
                ? (0, l.Kx)(i.sha_digest_avatar)
                : c.dV),
              (r.m_strPlayerName = i?.persona_name ?? e.ConvertTo64BitString()),
              (r.m_strAccountName = a?.account_name),
              a?.persona_state_flags &&
                (r.m_unPersonaStateFlags = a?.persona_state_flags);
            a?.game_id && (r.m_gameid = a?.game_id);
            a?.game_server_ip_address &&
              (r.m_unGameServerIP = a?.game_server_ip_address);
            a?.lobby_steam_id && (r.m_game_lobby_id = a?.lobby_steam_id);
            a?.game_extra_info && (r.m_strGameExtraInfo = a?.game_extra_info);
            i?.profile_url && (r.m_strProfileURL = i.profile_url);
            return r;
          })(m.b.InitFromAccountID(e), r);
        },
      });
      function v() {
        return i.useContext(w);
      }
      function b(e, t, r) {
        const i = "string" == typeof r ? new m.b(r).GetAccountID() : r;
        return {
          queryKey: ["PlayerSummary", i],
          queryFn: () => e.loadPersonaState(i, t),
          enabled: !!i,
        };
      }
      let f;
    },
    93973: (e, t, r) => {
      "use strict";
      r.d(t, {
        CC: () => T,
        Oz: () => f,
        Qt: () => E,
        lu: () => h,
        ns: () => R,
        os: () => S,
      });
      var i = r(34629),
        a = r(37085),
        n = r(56545),
        s = r(72034),
        o = r(17645),
        l = r(81393),
        c = r(78327),
        m = r(90626),
        u = r(68797),
        d = r(6144),
        _ = r(84933),
        p = r(14947),
        g = r(58222),
        y = r(95679),
        w = r(23809),
        v = r(20194);
      class b {
        m_claimState = { bCanClaimNewItem: !1, bAlreadyClaimedCurrentItem: !1 };
        m_claimedFreeItemDef;
        m_rtNextClaimTime;
        m_claimTimer;
        m_SteamInterface = null;
        m_canClaimPromise = null;
        m_claimPromise = null;
        m_claimStateChangeCallback = new d.lu();
        m_testNextClaimFakeResponse = null;
        m_bInTestMode = !1;
        GetClaimItemState() {
          return this.m_claimState;
        }
        GetClaimStateChangeCallback() {
          return this.m_claimStateChangeCallback;
        }
        GetClaimedSaleRewardItemDef() {
          return this.m_claimedFreeItemDef;
        }
        GetNextClaimTime() {
          if (!this.m_rtNextClaimTime) return null;
          return new Date(1e3 * this.m_rtNextClaimTime);
        }
        TEST_OverrideClaimState(e) {
          (this.m_bInTestMode = !0),
            (this.m_canClaimPromise = null),
            (this.m_claimPromise = null),
            e.bCanClaimNewItem
              ? (this.m_testNextClaimFakeResponse = {
                  bAlreadyClaimedCurrentItem: !0,
                  bCanClaimNewItem: !1,
                  rtNextClaimTime: Math.floor(Date.now() / 1e3) + 3600,
                  appid: 2243810,
                  community_item_type: 2,
                  community_item_class: y.WB.k_ECommunityItemClass_Sticker,
                })
              : (this.m_testNextClaimFakeResponse = null),
            (this.m_claimState = e),
            this.GetClaimStateChangeCallback().Dispatch(this.m_claimState);
        }
        async ActivateProfileModifier(e) {
          const t = n.w.Init(g.fp);
          t.Body().set_communityitemid(e.communityitemid),
            t.Body().set_appid(e.appid),
            t.Body().set_activate(!0);
          const r = await g.uy.ActivateProfileModifierItem(
            this.m_SteamInterface.GetServiceTransport(),
            t,
          );
          return (
            r.GetEResult() != a.d.k_EResultOK &&
              console.error(
                `Error when calling QuestService.ActivateProfileModifierItem: EResult=${r.GetEResult()}`,
              ),
            r.GetEResult()
          );
        }
        async LoadCanUserClaimItem() {
          return this.m_bInTestMode
            ? this.m_claimState
            : (this.m_canClaimPromise ||
                (this.m_canClaimPromise = this.InternalLoadCanUserClaimItem()),
              this.m_canClaimPromise);
        }
        async InternalLoadCanUserClaimItem() {
          (0, l.wT)(
            c.iA.logged_in,
            "User must be logged to use CSaleItemClaimableRewardsStore",
          );
          const e = n.w.Init(o.c3);
          e.Body().set_language(c.TS.LANGUAGE);
          let t = null;
          try {
            const r = await o.Qm.CanClaimItem(
              this.m_SteamInterface.GetServiceTransport(),
              e,
            );
            if (r.GetEResult() == a.d.k_EResultOK)
              return (
                (this.m_claimedFreeItemDef = Boolean(
                  r.Body().reward_item()?.defid(),
                )
                  ? r.Body().reward_item()?.toObject()
                  : null),
                (this.m_claimState = {
                  bCanClaimNewItem: !!r.Body().can_claim(),
                  bAlreadyClaimedCurrentItem: Boolean(
                    this.m_claimedFreeItemDef,
                  ),
                  appid: this.m_claimedFreeItemDef?.appid,
                  community_item_type:
                    this.m_claimedFreeItemDef?.community_item_type,
                  community_item_class:
                    this.m_claimedFreeItemDef?.community_item_class,
                  rtNextClaimTime:
                    (r.Body().next_claim_time() ?? 0) > 0
                      ? r.Body().next_claim_time()
                      : void 0,
                }),
                (this.m_rtNextClaimTime = r.Body().next_claim_time()),
                this.SetClaimTimer(),
                this.GetClaimStateChangeCallback().Dispatch(this.m_claimState),
                this.m_claimState
              );
            t = (0, u.H)(r);
          } catch (e) {
            t = (0, u.H)(e);
          }
          return (
            console.error(
              "CSaleItemClaimableRewardsStore.InternalLoadCanUserClaimItem failed: error: " +
                t?.strErrorMsg,
              t,
            ),
            { bCanClaimNewItem: !1, bAlreadyClaimedCurrentItem: !1 }
          );
        }
        async UserClaimItem() {
          return (
            this.m_testNextClaimFakeResponse &&
              (console.log(
                "CSaleItemClaimableRewardsStore - testing, pretending claim action succeeded",
                (0, p.HO)(this.m_testNextClaimFakeResponse),
              ),
              (this.m_claimState = this.m_testNextClaimFakeResponse),
              this.GetClaimStateChangeCallback().Dispatch(this.m_claimState),
              (this.m_rtNextClaimTime = this.m_claimState.rtNextClaimTime),
              this.SetClaimTimer(),
              (this.m_testNextClaimFakeResponse = null)),
            this.m_bInTestMode
              ? this.m_claimState
              : (this.m_claimPromise ||
                  (this.m_claimPromise = this.InternalUserClaimItem()),
                this.m_claimPromise)
          );
        }
        async InternalUserClaimItem() {
          (0, l.wT)(
            c.iA.logged_in,
            "User must be logged to use CSaleItemClaimableRewardsStore",
          ),
            (0, l.wT)(
              this.m_claimState.bCanClaimNewItem,
              "Only should be called when we previously verified you can claim something. ",
            );
          const e = n.w.Init(o.wt);
          e.Body().set_language(c.TS.LANGUAGE);
          let t = null;
          try {
            const r = await o.Qm.ClaimItem(
              this.m_SteamInterface.GetServiceTransport(),
              e,
            );
            if (r.GetEResult() == a.d.k_EResultOK)
              return (
                (this.m_claimedFreeItemDef =
                  r.Body().reward_item()?.toObject() ?? {}),
                (this.m_claimState = {
                  bCanClaimNewItem: !1,
                  bAlreadyClaimedCurrentItem: Boolean(
                    this.m_claimedFreeItemDef,
                  ),
                  appid: this.m_claimedFreeItemDef.appid,
                  community_item_type:
                    this.m_claimedFreeItemDef.community_item_type,
                  community_item_class:
                    this.m_claimedFreeItemDef.community_item_class,
                  rtNextClaimTime:
                    (r.Body().next_claim_time() ?? 0) > 0
                      ? r.Body().next_claim_time()
                      : void 0,
                }),
                this.GetClaimStateChangeCallback().Dispatch(this.m_claimState),
                (this.m_rtNextClaimTime = r.Body().next_claim_time()),
                this.SetClaimTimer(),
                this.m_claimState
              );
            if (r.GetEResult() == a.d.k_EResultDuplicateRequest)
              return (
                (this.m_canClaimPromise = this.InternalLoadCanUserClaimItem()),
                this.m_canClaimPromise
              );
            t = (0, u.H)(r);
          } catch (e) {
            t = (0, u.H)(e);
          }
          return (
            console.error(
              "CSaleItemClaimableRewardsStore.InternalUserClaimItem failed: error: " +
                t?.strErrorMsg,
              t,
            ),
            { bCanClaimNewItem: !1, bAlreadyClaimedCurrentItem: !1 }
          );
        }
        SetClaimTimer() {
          if (this.m_claimTimer) return;
          if (!this.m_rtNextClaimTime) return;
          const e = Date.now();
          let t = new Date(1e3 * this.m_rtNextClaimTime);
          const r = Math.max(0, Math.min(1, t.getTime() - e));
          this.m_claimTimer = window.setTimeout(
            () => {
              (this.m_claimTimer = void 0),
                Date.now() > t.getTime()
                  ? ((this.m_canClaimPromise = null),
                    (this.m_claimPromise = null),
                    (this.m_claimedFreeItemDef = null),
                    (this.m_claimState = {
                      bCanClaimNewItem: !0,
                      bAlreadyClaimedCurrentItem: !1,
                      rtNextClaimTime: void 0,
                    }),
                    this.GetClaimStateChangeCallback().Dispatch(
                      this.m_claimState,
                    ))
                  : this.SetClaimTimer();
            },
            r > 3e5 ? r / 2 : r,
          );
        }
        static s_Singleton;
        static Get() {
          return (
            b.s_Singleton ||
              ((b.s_Singleton = new b()),
              b.s_Singleton.Init(),
              "dev" == c.TS.WEB_UNIVERSE &&
                (window.g_SaleItemClaimableRewardsStore = b.s_Singleton)),
            b.s_Singleton
          );
        }
        constructor() {}
        Init() {
          const e = (0, c.Tc)("loyalty_webapi_token", "application_config");
          (0, l.wT)(
            e,
            "CQuestCommunityInventoryStore: missing loyalty_webapi_token oauth permission",
          ),
            (this.m_SteamInterface = new s.D(c.TS.WEBAPI_BASE_URL, e));
        }
      }
      function f() {
        const [e, t] = (0, m.useState)(b.Get().GetClaimItemState()),
          [r, i] = (0, m.useState)(!0);
        return (
          (0, m.useEffect)(() => {
            b.Get()
              .LoadCanUserClaimItem()
              .then(t)
              .finally(() => i(!1));
          }, []),
          (0, _.hL)(b.Get().GetClaimStateChangeCallback(), t),
          { ...e, bLoading: r }
        );
      }
      function T() {
        return { fnClaimItem: b.Get().UserClaimItem };
      }
      function h() {
        return { fnSetClaimState: b.Get().TEST_OverrideClaimState };
      }
      async function R(e) {
        return b.Get().ActivateProfileModifier(e);
      }
      function E(e, t, r) {
        const i = (0, w.KV)();
        return (0, v.I)({
          queryKey: [`SaleRewardsGetDefinition_${e}_${t}_${r}`],
          queryFn: async () =>
            (async function (e, t, r, i) {
              const a = n.w.Init(o.R4);
              return (
                a.Body().set_sale_def_type(t),
                a.Body().set_language(r),
                a.Body().set_include_community_item_def(i),
                (await o.Qm.GetCurrentDefinition(e, a)).Body().toObject()
              );
            })(i, e, t, r),
          staleTime: 1 / 0,
        });
      }
      function S(e, t, r, i) {
        const a = (0, w.KV)();
        return (0, v.I)({
          queryKey: [`GetClaimedSaleRewards_${e}_${t}_${r}_${i}`],
          queryFn: async () =>
            (async function (e, t, r, i) {
              const a = n.w.Init(o.Ju);
              return (
                a.Body().set_sale_def_type(t),
                a.Body().set_language(r),
                a.Body().set_include_community_item_def(i),
                (await o.Qm.GetClaimedSaleRewards(e, a)).Body().toObject()
              );
            })(a, e, t, r),
          staleTime: 1 / 0,
        });
      }
      (0, i.Cg)([_.oI], b.prototype, "TEST_OverrideClaimState", null),
        (0, i.Cg)([_.oI], b.prototype, "UserClaimItem", null);
    },
    69409: (e, t, r) => {
      "use strict";
      r.d(t, { m: () => d });
      var i = r(90626),
        a = r(22837),
        n = r(38390),
        s = r(52038),
        o = r(61859),
        l = r(61336),
        c = r(78327),
        m = r(15392),
        u = r(27666);
      function d(e) {
        const { gidEvent: t } = e,
          r = (0, n.RR)(t),
          [d, _] = (0, i.useMemo)(() => {
            if (
              r?.jsondata?.localized_sale_product_banner?.length > 0 &&
              r?.jsondata?.localized_sale_product_mobile_banner?.length > 0
            ) {
              const e = (0, a.sf)(c.TS.LANGUAGE),
                t = o.NT.GetWithFallback(
                  r.jsondata.localized_sale_product_banner,
                  e,
                ),
                i = o.NT.GetWithFallback(
                  r.jsondata.localized_sale_product_mobile_banner,
                  e,
                );
              if (t?.length > 0 && i?.length > 0)
                return [
                  u.z.GenerateURLFromHashAndExt(r.clanSteamID, t),
                  u.z.GenerateURLFromHashAndExt(r.clanSteamID, i),
                ];
            }
            return [null, null];
          }, [r]);
        return d?.length > 0 && _?.length > 0
          ? i.createElement(
              "a",
              { href: (0, l.k2)(r.GetSaleURL()), className: m.Link },
              i.createElement("img", {
                src: d,
                className: (0, s.A)(m.Banner, m.Big),
              }),
              i.createElement("img", {
                src: _,
                className: (0, s.A)(m.Banner, m.Mobile),
              }),
            )
          : null;
      }
    },
    96236: (e, t, r) => {
      "use strict";
      r.d(t, { K: () => l });
      var i = r(34629),
        a = r(90626),
        n = r(84933),
        s = r(60383),
        o = r(76217);
      class l extends a.Component {
        state = {
          bRenderChildren: !1,
          nPrevRenderWidth: 0,
          nPrevRenderHeight: 0,
        };
        m_refContainer = a.createRef();
        BLoadAndUnload() {
          return "LoadAndUnload" == (this.props.mode || "JustLoad");
        }
        OnVisibilityChange(e) {
          let t = this.state.bRenderChildren;
          if (t == e) return;
          if (t && !this.BLoadAndUnload()) return;
          let r = 0,
            i = 0;
          if (this.m_refContainer.current) {
            const e = this.m_refContainer.current.GetBoundingClientRect();
            e && ((r = e.width), (i = e.height));
          }
          this.setState({
            bRenderChildren: e,
            nPrevRenderWidth: r,
            nPrevRenderHeight: i,
          }),
            e && this.props.onRender && this.props.onRender();
        }
        render() {
          const {
              placeholderWidth: e,
              placeholderHeight: t,
              holdGampadFocus: r,
              onRender: i,
              style: n,
              mode: l,
              ...c
            } = this.props,
            m = this.state.bRenderChildren;
          let u = n;
          if (!m) {
            const r = this.state.nPrevRenderWidth || e,
              i = this.state.nPrevRenderHeight || t;
            (void 0 === i && void 0 === r) ||
              (u = { ...n, minHeight: i, minWidth: r });
          }
          const d = this.BLoadAndUnload() ? "repeated" : "once";
          let _ = a.createElement(
            s.J,
            {
              ref: this.m_refContainer,
              style: u,
              ...c,
              onVisibilityChange: this.OnVisibilityChange,
              trigger: d,
            },
            m && this.props.children,
          );
          return (
            r && (_ = a.createElement(o.Z, { focusableIfEmpty: !0 }, _)), _
          );
        }
      }
      (0, i.Cg)([n.oI], l.prototype, "OnVisibilityChange", null);
    },
    5907: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => $e });
      var i = r(45699),
        a = r(76217),
        n = r(37788),
        s = r(23310),
        o = r(17645),
        l = r(23809),
        c = r(62093),
        m = r(60014),
        u = r(90626),
        d = r(13871),
        _ = r(30894),
        p = r(93973),
        g = r(82097),
        y = r(55263),
        w = r(12155),
        v = r(32630),
        b = r(4434),
        f = r(52038),
        T = r(61859),
        h = r(60778),
        R = r(25489),
        E = r(44691),
        S = r(78327),
        C = r(39199),
        B = r(40594);
      const I = ({ nPercent: e, size: t = 120, strokeWidth: r = 20 }) => {
        const i = (t - r) / 2,
          a = 2 * Math.PI * i,
          n = a - (e / 100) * a,
          s = 100 == e;
        return u.createElement(
          "div",
          { className: (0, f.A)({ [B.Circular]: !0, [B.Full]: s }) },
          u.createElement(
            "svg",
            { width: t, height: t, style: { transform: "rotate(-90deg)" } },
            u.createElement("circle", {
              cx: t / 2,
              cy: t / 2,
              r: i,
              stroke: "#0c131d",
              strokeWidth: r,
              fill: "none",
            }),
            u.createElement("circle", {
              cx: t / 2,
              cy: t / 2,
              r: i,
              stroke: "#1a9fff",
              strokeWidth: r,
              fill: "none",
              strokeDasharray: a,
              strokeDashoffset: n,
              style: { transition: "stroke-dashoffset 0.3s ease-in-out" },
            }),
          ),
        );
      };
      var A,
        k,
        D,
        M,
        U,
        N,
        F,
        z = r(22797),
        G = r(10224),
        Q = r(20019),
        q = r(75487),
        P = r(62792),
        W = r(26101),
        L = r(94095),
        x = r(44986),
        O = r(32754),
        j = r(20713),
        V = r(47453),
        H = r(20194),
        K = r(22837),
        Z = r(1035),
        $ = r(34181),
        Y = r(17720),
        X = r(4796),
        J = r(67165),
        ee = r(37085),
        te = r(56545),
        re = r(94601),
        ie = r(80613),
        ae = r.n(ie),
        ne = r(89068);
      !(function (e) {
        (e[(e.k_EUserReviewFlaggedByDeveloperType_None = 0)] =
          "k_EUserReviewFlaggedByDeveloperType_None"),
          (e[(e.k_EUserReviewFlaggedByDeveloperType_Abusive = 1)] =
            "k_EUserReviewFlaggedByDeveloperType_Abusive"),
          (e[(e.k_EUserReviewFlaggedByDeveloperType_OffTopic = 2)] =
            "k_EUserReviewFlaggedByDeveloperType_OffTopic"),
          (e[
            (e.k_EUserReviewFlaggedByDeveloperType_ViolatesCommunityGuidelines = 3)
          ] =
            "k_EUserReviewFlaggedByDeveloperType_ViolatesCommunityGuidelines");
      })(A || (A = {})),
        (function (e) {
          (e[(e.k_EUserReviewQuality_Uninformative = 0)] =
            "k_EUserReviewQuality_Uninformative"),
            (e[(e.k_EUserReviewQuality_Meme = 1)] =
              "k_EUserReviewQuality_Meme"),
            (e[(e.k_EUserReviewQuality_ASCII = 2)] =
              "k_EUserReviewQuality_ASCII"),
            (e[(e.k_EUserReviewQuality_OffTopic = 3)] =
              "k_EUserReviewQuality_OffTopic"),
            (e[(e.k_EUserReviewQuality_VoteOrAwardFarming = 4)] =
              "k_EUserReviewQuality_VoteOrAwardFarming"),
            (e[(e.k_EUserReviewQuality_None = 5)] =
              "k_EUserReviewQuality_None");
        })(k || (k = {})),
        (function (e) {
          (e[(e.k_EUserReviewVoteTag_None = 0)] = "k_EUserReviewVoteTag_None"),
            (e[(e.k_EUserReviewVoteTag_Funny = 1)] =
              "k_EUserReviewVoteTag_Funny");
        })(D || (D = {})),
        (function (e) {
          (e[(e.k_EUserReviewAuditAction_Invalid = 0)] =
            "k_EUserReviewAuditAction_Invalid"),
            (e[(e.k_EUserReviewAuditAction_Banned = 1)] =
              "k_EUserReviewAuditAction_Banned"),
            (e[(e.k_EUserReviewAuditAction_Unbanned = 2)] =
              "k_EUserReviewAuditAction_Unbanned"),
            (e[(e.k_EUserReviewAuditAction_FlaggedByDeveloper = 3)] =
              "k_EUserReviewAuditAction_FlaggedByDeveloper"),
            (e[(e.k_EUserReviewAuditAction_ClearedFlaggedByDeveloper = 4)] =
              "k_EUserReviewAuditAction_ClearedFlaggedByDeveloper"),
            (e[(e.k_EUserReviewAuditAction_VoteBanUsers = 5)] =
              "k_EUserReviewAuditAction_VoteBanUsers"),
            (e[(e.k_EUserReviewAuditAction_ClearVoteBanUsers = 6)] =
              "k_EUserReviewAuditAction_ClearVoteBanUsers"),
            (e[(e.k_EUserReviewAuditAction_ClearReports = 7)] =
              "k_EUserReviewAuditAction_ClearReports"),
            (e[(e.k_EUserReviewAuditAction_ClearedContentCheck = 8)] =
              "k_EUserReviewAuditAction_ClearedContentCheck"),
            (e[(e.k_EUserReviewAuditAction_MarkedAsSuspicious = 9)] =
              "k_EUserReviewAuditAction_MarkedAsSuspicious"),
            (e[(e.k_EUserReviewAuditAction_SetQuality = 10)] =
              "k_EUserReviewAuditAction_SetQuality");
        })(M || (M = {})),
        (function (e) {
          (e[(e.k_EReviewTagType_Graphics = 1)] = "k_EReviewTagType_Graphics"),
            (e[(e.k_EReviewTagType_Gameplay = 2)] =
              "k_EReviewTagType_Gameplay"),
            (e[(e.k_EReviewTagType_Story = 3)] = "k_EReviewTagType_Story"),
            (e[(e.k_EReviewTagType_Audio = 4)] = "k_EReviewTagType_Audio"),
            (e[(e.k_EReviewTagType_Controls = 5)] =
              "k_EReviewTagType_Controls"),
            (e[(e.k_EReviewTagType_Performance = 6)] =
              "k_EReviewTagType_Performance"),
            (e[(e.k_EReviewTagType_Multiplayer = 7)] =
              "k_EReviewTagType_Multiplayer"),
            (e[(e.k_EReviewTagType_Replayability = 8)] =
              "k_EReviewTagType_Replayability"),
            (e[(e.k_EReviewTagType_Difficulty = 9)] =
              "k_EReviewTagType_Difficulty"),
            (e[(e.k_EReviewTagType_Customization = 10)] =
              "k_EReviewTagType_Customization"),
            (e[(e.k_EReviewTagType_LevelDesign = 11)] =
              "k_EReviewTagType_LevelDesign"),
            (e[(e.k_EReviewTagType_AI = 12)] = "k_EReviewTagType_AI"),
            (e[(e.k_EReviewTagType_Exploration = 13)] =
              "k_EReviewTagType_Exploration"),
            (e[(e.k_EReviewTagType_Characters = 14)] =
              "k_EReviewTagType_Characters"),
            (e[(e.k_EReviewTagType_Content = 15)] = "k_EReviewTagType_Content"),
            (e[(e.k_EReviewTagType_Immersion = 16)] =
              "k_EReviewTagType_Immersion"),
            (e[(e.k_EReviewTagType_UI = 17)] = "k_EReviewTagType_UI"),
            (e[(e.k_EReviewTagType_Community = 18)] =
              "k_EReviewTagType_Community"),
            (e[(e.k_EReviewTagType_Innovation = 19)] =
              "k_EReviewTagType_Innovation"),
            (e[(e.k_EReviewTagType_Tutorials = 20)] =
              "k_EReviewTagType_Tutorials"),
            (e[(e.k_EReviewTagType_Loading = 21)] = "k_EReviewTagType_Loading"),
            (e[(e.k_EReviewTagType_Monetization = 22)] =
              "k_EReviewTagType_Monetization"),
            (e[(e.k_EReviewTagType_DeveloperSupport = 23)] =
              "k_EReviewTagType_DeveloperSupport"),
            (e[(e.k_EReviewTagType_Achievements = 24)] =
              "k_EReviewTagType_Achievements"),
            (e[(e.k_EReviewTagType_Accessibility = 25)] =
              "k_EReviewTagType_Accessibility"),
            (e[(e.k_EReviewTagType_Setting = 26)] = "k_EReviewTagType_Setting"),
            (e[(e.k_EReviewTagType_Combat = 27)] = "k_EReviewTagType_Combat"),
            (e[(e.k_EReviewTagType_VoiceOver = 28)] =
              "k_EReviewTagType_VoiceOver"),
            (e[(e.k_EReviewTagType_Physics = 29)] = "k_EReviewTagType_Physics"),
            (e[(e.k_EReviewTagType_Stability = 30)] =
              "k_EReviewTagType_Stability"),
            (e[(e.k_EReviewTagType_Lore = 31)] = "k_EReviewTagType_Lore"),
            (e[(e.k_EReviewTagType_Companions = 32)] =
              "k_EReviewTagType_Companions"),
            (e[(e.k_EReviewTagType_Cutscenes = 33)] =
              "k_EReviewTagType_Cutscenes"),
            (e[(e.k_EReviewTagType_Dialogue = 34)] =
              "k_EReviewTagType_Dialogue"),
            (e[(e.k_EReviewTagType_Balance = 35)] = "k_EReviewTagType_Balance"),
            (e[(e.k_EReviewTagType_Inventory = 36)] =
              "k_EReviewTagType_Inventory"),
            (e[(e.k_EReviewTagType_Platforming = 37)] =
              "k_EReviewTagType_Platforming"),
            (e[(e.k_EReviewTagType_Strategy = 38)] =
              "k_EReviewTagType_Strategy"),
            (e[(e.k_EReviewTagType_Atmosphere = 39)] =
              "k_EReviewTagType_Atmosphere"),
            (e[(e.k_EReviewTagType_Quests = 40)] = "k_EReviewTagType_Quests"),
            (e[(e.k_EReviewTagType_Minigames = 41)] =
              "k_EReviewTagType_Minigames"),
            (e[(e.k_EReviewTagType_Humor = 42)] = "k_EReviewTagType_Humor"),
            (e[(e.k_EReviewTagType_Cheating = 43)] =
              "k_EReviewTagType_Cheating"),
            (e[(e.k_EReviewTagType_Disabled_Test = 44)] =
              "k_EReviewTagType_Disabled_Test"),
            (e[(e.k_EReviewTagType_Matchmaking = 45)] =
              "k_EReviewTagType_Matchmaking"),
            (e[(e.k_EReviewTagType_SteamDeck = 46)] =
              "k_EReviewTagType_SteamDeck"),
            (e[(e.k_EReviewTagType_Progression = 47)] =
              "k_EReviewTagType_Progression"),
            (e[(e.k_EReviewTagType_Singleplayer = 48)] =
              "k_EReviewTagType_Singleplayer"),
            (e[(e.k_EReviewTagType_VoiceChat = 49)] =
              "k_EReviewTagType_VoiceChat");
        })(U || (U = {})),
        (function (e) {
          (e[(e.k_EUserReviewBombPeriodType_OffTopic = 0)] =
            "k_EUserReviewBombPeriodType_OffTopic"),
            (e[(e.k_EUserReviewBombPeriodType_PendingReview = 1)] =
              "k_EUserReviewBombPeriodType_PendingReview"),
            (e[(e.k_EUserReviewBombPeriodType_Testing = 2)] =
              "k_EUserReviewBombPeriodType_Testing");
        })(N || (N = {}));
      class se extends ie.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.recommendationid || ne.Sg(se.M()),
            ie.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  recommendationid: {
                    n: 1,
                    br: ne.qM.readUint64String,
                    bw: ne.gp.writeUint64String,
                  },
                  review_text: {
                    n: 2,
                    br: ne.qM.readString,
                    bw: ne.gp.writeString,
                  },
                  voted_up: { n: 3, br: ne.qM.readBool, bw: ne.gp.writeBool },
                  is_public: { n: 4, br: ne.qM.readBool, bw: ne.gp.writeBool },
                  language: {
                    n: 5,
                    br: ne.qM.readString,
                    bw: ne.gp.writeString,
                  },
                  is_in_early_access: {
                    n: 6,
                    br: ne.qM.readBool,
                    bw: ne.gp.writeBool,
                  },
                  received_compensation: {
                    n: 7,
                    br: ne.qM.readBool,
                    bw: ne.gp.writeBool,
                  },
                  comments_disabled: {
                    n: 8,
                    br: ne.qM.readBool,
                    bw: ne.gp.writeBool,
                  },
                  hide_in_steam_china: {
                    n: 9,
                    br: ne.qM.readBool,
                    bw: ne.gp.writeBool,
                  },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = ne.w0(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return ne.BT(se.M(), e, t);
        }
        static fromObject(e) {
          return ne.Uq(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (ae().BinaryReader)(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ne.zj(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (ae().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ne.i0(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (ae().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Update_Request";
        }
      }
      class oe extends ie.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), ie.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new oe();
        }
        static deserializeBinary(e) {
          let t = new (ae().BinaryReader)(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (ae().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (ae().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Update_Response";
        }
      }
      class le extends ie.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.reaction_type || ne.Sg(le.M()),
            ie.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  reaction_type: {
                    n: 1,
                    br: ne.qM.readUint32,
                    bw: ne.gp.writeUint32,
                  },
                  count: { n: 2, br: ne.qM.readUint32, bw: ne.gp.writeUint32 },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = ne.w0(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return ne.BT(le.M(), e, t);
        }
        static fromObject(e) {
          return ne.Uq(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (ae().BinaryReader)(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ne.zj(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (ae().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ne.i0(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new (ae().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_LoyaltyReaction";
        }
      }
      class ce extends ie.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.id || ne.Sg(ce.M()),
            ie.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  id: { n: 1, br: ne.qM.readEnum, bw: ne.gp.writeEnum },
                  ranges: { n: 2, c: me, r: !0, q: !0 },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = ne.w0(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return ne.BT(ce.M(), e, t);
        }
        static fromObject(e) {
          return ne.Uq(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (ae().BinaryReader)(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ne.zj(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (ae().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ne.i0(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new (ae().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_Tag";
        }
      }
      class me extends ie.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.start || ne.Sg(me.M()),
            ie.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  start: { n: 1, br: ne.qM.readUint32, bw: ne.gp.writeUint32 },
                  end: { n: 2, br: ne.qM.readUint32, bw: ne.gp.writeUint32 },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = ne.w0(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return ne.BT(me.M(), e, t);
        }
        static fromObject(e) {
          return ne.Uq(me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (ae().BinaryReader)(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ne.zj(me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (ae().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ne.i0(me.M(), e, t);
        }
        serializeBase64String() {
          var e = new (ae().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_Tag_Range";
        }
      }
      class ue extends ie.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.recommendationid || ne.Sg(ue.M()),
            ie.Message.initialize(this, e, 0, -1, [27, 40, 54], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  recommendationid: {
                    n: 1,
                    br: ne.qM.readUint64String,
                    bw: ne.gp.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: ne.qM.readUint64String,
                    bw: ne.gp.writeUint64String,
                  },
                  appid: { n: 3, br: ne.qM.readUint32, bw: ne.gp.writeUint32 },
                  review: { n: 4, br: ne.qM.readString, bw: ne.gp.writeString },
                  time_created: {
                    n: 5,
                    br: ne.qM.readUint32,
                    bw: ne.gp.writeUint32,
                  },
                  time_updated: {
                    n: 6,
                    br: ne.qM.readUint32,
                    bw: ne.gp.writeUint32,
                  },
                  votes_up: {
                    n: 7,
                    br: ne.qM.readUint32,
                    bw: ne.gp.writeUint32,
                  },
                  votes_down: {
                    n: 8,
                    br: ne.qM.readUint32,
                    bw: ne.gp.writeUint32,
                  },
                  vote_score: {
                    n: 9,
                    br: ne.qM.readFloat,
                    bw: ne.gp.writeFloat,
                  },
                  language: {
                    n: 10,
                    br: ne.qM.readString,
                    bw: ne.gp.writeString,
                  },
                  comment_count: {
                    n: 11,
                    br: ne.qM.readUint32,
                    bw: ne.gp.writeUint32,
                  },
                  voted_up: { n: 12, br: ne.qM.readBool, bw: ne.gp.writeBool },
                  is_public: { n: 13, br: ne.qM.readBool, bw: ne.gp.writeBool },
                  moderator_hidden: {
                    n: 14,
                    br: ne.qM.readBool,
                    bw: ne.gp.writeBool,
                  },
                  flagged_by_developer: {
                    n: 15,
                    br: ne.qM.readEnum,
                    bw: ne.gp.writeEnum,
                  },
                  report_score: {
                    n: 16,
                    br: ne.qM.readUint32,
                    bw: ne.gp.writeUint32,
                  },
                  steamid_moderator: {
                    n: 17,
                    br: ne.qM.readUint64String,
                    bw: ne.gp.writeUint64String,
                  },
                  steamid_developer: {
                    n: 18,
                    br: ne.qM.readUint64String,
                    bw: ne.gp.writeUint64String,
                  },
                  steamid_dev_responder: {
                    n: 19,
                    br: ne.qM.readUint64String,
                    bw: ne.gp.writeUint64String,
                  },
                  developer_response: {
                    n: 20,
                    br: ne.qM.readString,
                    bw: ne.gp.writeString,
                  },
                  time_developer_responded: {
                    n: 21,
                    br: ne.qM.readUint32,
                    bw: ne.gp.writeUint32,
                  },
                  developer_flag_cleared: {
                    n: 22,
                    br: ne.qM.readBool,
                    bw: ne.gp.writeBool,
                  },
                  written_during_early_access: {
                    n: 23,
                    br: ne.qM.readBool,
                    bw: ne.gp.writeBool,
                  },
                  votes_funny: {
                    n: 24,
                    br: ne.qM.readUint32,
                    bw: ne.gp.writeUint32,
                  },
                  received_compensation: {
                    n: 25,
                    br: ne.qM.readBool,
                    bw: ne.gp.writeBool,
                  },
                  unverified_purchase: {
                    n: 26,
                    br: ne.qM.readBool,
                    bw: ne.gp.writeBool,
                  },
                  review_qualities: {
                    n: 27,
                    r: !0,
                    q: !0,
                    br: ne.qM.readEnum,
                    pbr: ne.qM.readPackedEnum,
                    bw: ne.gp.writeRepeatedEnum,
                  },
                  weighted_vote_score: {
                    n: 28,
                    br: ne.qM.readFloat,
                    bw: ne.gp.writeFloat,
                  },
                  moderation_note: {
                    n: 29,
                    br: ne.qM.readString,
                    bw: ne.gp.writeString,
                  },
                  payment_method: {
                    n: 30,
                    br: ne.qM.readInt32,
                    bw: ne.gp.writeInt32,
                  },
                  playtime_2weeks: {
                    n: 31,
                    br: ne.qM.readInt32,
                    bw: ne.gp.writeInt32,
                  },
                  playtime_forever: {
                    n: 32,
                    br: ne.qM.readInt32,
                    bw: ne.gp.writeInt32,
                  },
                  last_playtime: {
                    n: 33,
                    br: ne.qM.readInt32,
                    bw: ne.gp.writeInt32,
                  },
                  comments_disabled: {
                    n: 34,
                    br: ne.qM.readBool,
                    bw: ne.gp.writeBool,
                  },
                  playtime_at_review: {
                    n: 35,
                    br: ne.qM.readInt32,
                    bw: ne.gp.writeInt32,
                  },
                  approved_for_china: {
                    n: 36,
                    br: ne.qM.readBool,
                    bw: ne.gp.writeBool,
                  },
                  ban_check_result: {
                    n: 37,
                    br: ne.qM.readEnum,
                    bw: ne.gp.writeEnum,
                  },
                  refunded: { n: 38, br: ne.qM.readBool, bw: ne.gp.writeBool },
                  account_score_spend: {
                    n: 39,
                    br: ne.qM.readInt32,
                    bw: ne.gp.writeInt32,
                  },
                  reactions: { n: 40, c: le, r: !0, q: !0 },
                  ipaddress: {
                    n: 41,
                    br: ne.qM.readString,
                    bw: ne.gp.writeString,
                  },
                  hidden_in_steam_china: {
                    n: 42,
                    br: ne.qM.readBool,
                    bw: ne.gp.writeBool,
                  },
                  steam_china_location: {
                    n: 43,
                    br: ne.qM.readString,
                    bw: ne.gp.writeString,
                  },
                  category_ascii_pct: {
                    n: 44,
                    br: ne.qM.readUint32,
                    bw: ne.gp.writeUint32,
                  },
                  category_meme_pct: {
                    n: 45,
                    br: ne.qM.readUint32,
                    bw: ne.gp.writeUint32,
                  },
                  category_offtopic_pct: {
                    n: 46,
                    br: ne.qM.readUint32,
                    bw: ne.gp.writeUint32,
                  },
                  category_uninformative_pct: {
                    n: 47,
                    br: ne.qM.readUint32,
                    bw: ne.gp.writeUint32,
                  },
                  category_votefarming_pct: {
                    n: 48,
                    br: ne.qM.readUint32,
                    bw: ne.gp.writeUint32,
                  },
                  deck_playtime_at_review: {
                    n: 49,
                    br: ne.qM.readInt32,
                    bw: ne.gp.writeInt32,
                  },
                  is_bot_review_pct: {
                    n: 50,
                    br: ne.qM.readUint32,
                    bw: ne.gp.writeUint32,
                  },
                  positivity_pct: {
                    n: 51,
                    br: ne.qM.readUint32,
                    bw: ne.gp.writeUint32,
                  },
                  tags_with_ranges: { n: 54, c: ce, r: !0, q: !0 },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = ne.w0(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return ne.BT(ue.M(), e, t);
        }
        static fromObject(e) {
          return ne.Uq(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (ae().BinaryReader)(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ne.zj(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (ae().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ne.i0(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new (ae().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "RecommendationDetails";
        }
      }
      class de extends ie.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.appid || ne.Sg(de.M()),
            ie.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  appid: { n: 1, br: ne.qM.readUint32, bw: ne.gp.writeUint32 },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = ne.w0(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return ne.BT(de.M(), e, t);
        }
        static fromObject(e) {
          return ne.Uq(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (ae().BinaryReader)(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ne.zj(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (ae().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ne.i0(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new (ae().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetFriendsRecommendedApp_Request";
        }
      }
      class _e extends ie.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.accountids_recommended || ne.Sg(_e.M()),
            ie.Message.initialize(this, e, 0, -1, [1, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  accountids_recommended: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: ne.qM.readUint32,
                    pbr: ne.qM.readPackedUint32,
                    bw: ne.gp.writeRepeatedUint32,
                  },
                  accountids_not_recommended: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: ne.qM.readUint32,
                    pbr: ne.qM.readPackedUint32,
                    bw: ne.gp.writeRepeatedUint32,
                  },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = ne.w0(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, t) {
          return ne.BT(_e.M(), e, t);
        }
        static fromObject(e) {
          return ne.Uq(_e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (ae().BinaryReader)(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ne.zj(_e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (ae().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ne.i0(_e.M(), e, t);
        }
        serializeBase64String() {
          var e = new (ae().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetFriendsRecommendedApp_Response";
        }
      }
      class pe extends ie.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pe.prototype.requests || ne.Sg(pe.M()),
            ie.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: { requests: { n: 1, c: ge, r: !0, q: !0 } },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = ne.w0(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, t) {
          return ne.BT(pe.M(), e, t);
        }
        static fromObject(e) {
          return ne.Uq(pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (ae().BinaryReader)(e),
            r = new pe();
          return pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ne.zj(pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (ae().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ne.i0(pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (ae().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Request";
        }
      }
      class ge extends ie.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.steamid || ne.Sg(ge.M()),
            ie.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: {
                  steamid: {
                    n: 1,
                    br: ne.qM.readUint64String,
                    bw: ne.gp.writeUint64String,
                  },
                  appid: { n: 2, br: ne.qM.readUint32, bw: ne.gp.writeUint32 },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = ne.w0(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, t) {
          return ne.BT(ge.M(), e, t);
        }
        static fromObject(e) {
          return ne.Uq(ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (ae().BinaryReader)(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ne.zj(ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (ae().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ne.i0(ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new (ae().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Request_RecommendationRequest";
        }
      }
      class ye extends ie.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.recommendations || ne.Sg(ye.M()),
            ie.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: { recommendations: { n: 1, c: ue, r: !0, q: !0 } },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = ne.w0(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, t) {
          return ne.BT(ye.M(), e, t);
        }
        static fromObject(e) {
          return ne.Uq(ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (ae().BinaryReader)(e),
            r = new ye();
          return ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ne.zj(ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (ae().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ne.i0(ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new (ae().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Response";
        }
      }
      !(function (e) {
        (e.Update = function (e, t) {
          return e.SendMsg("UserReviews.Update#1", (0, te.I8)(se, t), oe, {
            ePrivilege: 3,
          });
        }),
          (e.GetFriendsRecommendedApp = function (e, t) {
            return e.SendMsg(
              "UserReviews.GetFriendsRecommendedApp#1",
              (0, te.I8)(de, t),
              _e,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetIndividualRecommendations = function (e, t) {
            return e.SendMsg(
              "UserReviews.GetIndividualRecommendations#1",
              (0, te.I8)(pe, t),
              ye,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          });
      })(F || (F = {}));
      var we = r(41735),
        ve = r.n(we),
        be = r(3734);
      class fe {
        static async LoadFriendsRecommendedApp(e, t) {
          const r = te.w.Init(de);
          r.Body().set_appid(t);
          const i = await F.GetFriendsRecommendedApp(e, r),
            a = i.GetEResult();
          if (a == ee.d.k_EResultOK) return i.Body().toObject();
          throw `Error ${a} failed to call GetFriendsRecommendedApp ${t}`;
        }
        static async LoadStoreRelevanceData(e) {
          let t = { appid: e },
            r = { arrSimilarPlayedApps: [], bRecommendedByIR: !1 };
          const i = (
            await ve().get(
              `${S.TS.STORE_BASE_URL}explore/ajaxgetstorerelevancedata`,
              { params: t, withCredentials: !0, timeout: 1e4 },
            )
          ).data;
          return (
            i &&
              i.success == ee.d.k_EResultOK &&
              (i.results.similar_played_apps &&
                (r.arrSimilarPlayedApps = i.results.similar_played_apps.map(
                  (e) => ({
                    appid: e.appid,
                    playtimeForever: e.playtime_forever,
                  }),
                )),
              i.results.recommended_by_ir && (r.bRecommendedByIR = !0)),
            r
          );
        }
      }
      var Te = r(57834),
        he = r.n(Te),
        Re = r(14336),
        Ee = r(26505);
      const Se = new h.wd("AppRelevance").Debug;
      function Ce(e) {
        const {
            appID: t,
            bShowAvatars: r,
            storeItem: i,
            bHideDescription: a,
            bShowCuratorInfo: n,
            bShowCreatorInfo: s,
          } = e,
          o = (0, Ee.Nd)(t),
          c = (function (e) {
            const t = (0, l.KV)();
            return (0, H.I)({
              queryKey: ["AppRelevanceStore", "FriendsRecommended", e],
              queryFn: () => fe.LoadFriendsRecommendedApp(t, e),
              enabled: S.iA.logged_in,
            });
          })(t),
          m = (function (e) {
            return (0, H.I)({
              queryKey: ["AppRelevanceStore", "StoreRelevance", e],
              queryFn: () => fe.LoadStoreRelevanceData(e),
              enabled: S.iA.logged_in,
            });
          })(t),
          d = (function () {
            const { data: e } = (0, be.PG)("App Relevance Store Top Sellers", {
              sort: re.Dq.k_EStoreQuerySort_Global24hSalesRank,
              start: 0,
              count: 100,
            });
            return e;
          })(),
          p = (0, H.I)({
            queryKey: ["SimilarPlayedAppsLoad", t],
            queryFn: () =>
              g.A.Get().QueueMultipleAppRequests(
                m.data.arrSimilarPlayedApps?.map((e) => e.appid),
                { include_basic_info: !0, include_assets: !0 },
              ),
            enabled: m.isSuccess,
          }),
          y = (function (e, t) {
            const r = (0, u.useMemo)(
              () => _.Fm.Get().GetRecommendingCuratorsForApp(e) || [],
              [e],
            );
            return (0, H.I)({
              queryKey: ["RecommendingCurators", e],
              queryFn: () =>
                Promise.all(
                  r?.map((e) => X.ac.LoadClanInfoForClanAccountID(e)),
                ),
              enabled: !!t && r && r.length > 0,
            });
          })(t, n),
          w = (0, u.useMemo)(() => {
            let e = [];
            return (
              i &&
                ((e = e.concat(
                  i
                    .GetAllFranchiseCreatorClans()
                    .map((e) => ({ nAccountID: e, type: "franchise" })),
                )),
                (e = e.concat(
                  i
                    .GetAllDeveloperCreatorClans()
                    .map((e) => ({ nAccountID: e, type: "developer" })),
                )),
                (e = e.concat(
                  i
                    .GetAllPublisherCreatorClans()
                    .map((e) => ({ nAccountID: e, type: "publisher" })),
                )),
                (e = e.filter((e) =>
                  _.Fm.Get().BIsFollowingCurator(e.nAccountID),
                ))),
              e
            );
          }, [i]),
          v = (0, H.I)({
            queryKey: ["FollowedCreators", t],
            queryFn: () =>
              X.ac
                .LoadClanInfoForClanAccountID(w[0].nAccountID)
                .then((e) => ({ clanInfo: e, type: w[0].type })),
            enabled: !!s && w && w.length > 0,
          }),
          b = (0, H.I)({
            queryKey: ["PlayerSummaries", t, r],
            queryFn: async () => {
              let e = [],
                t = [],
                i = [];
              const a = r ? 10 : 1;
              for (
                let t = 0;
                t < c.data.accountids_recommended?.length && t < a;
                t++
              ) {
                const r = Y.b.InitFromAccountID(
                  c.data.accountids_recommended[t],
                );
                e.push(r.ConvertTo64BitString());
              }
              for (let e = 0; e < o.data.in_wishlist?.length && e < a; e++) {
                const r = new Y.b(o.data.in_wishlist[e].steamid);
                t.push(r.ConvertTo64BitString());
              }
              for (let e = 0; e < o.data.owns?.length && e < a; e++) {
                const t = new Y.b(o.data.owns[e].steamid);
                i.push(t.ConvertTo64BitString());
              }
              return {
                rgRecommendedFriends: e,
                rgWishlistFriends: t,
                rgOwnedFriends: i,
              };
            },
            enabled: c.isSuccess && o.isSuccess,
          });
        if (
          !d ||
          p.isLoading ||
          m.isLoading ||
          c.isLoading ||
          o.isLoading ||
          y.isLoading ||
          v.isLoading ||
          b.isLoading
        )
          return u.createElement(z.t, { size: "medium", position: "center" });
        let h = [];
        m.isSuccess &&
          m.data.arrSimilarPlayedApps &&
          m.data.arrSimilarPlayedApps.forEach((e) => {
            const r = g.A.Get().GetApp(e.appid);
            r
              ? h.push(
                  u.createElement(Ae, {
                    key: e.appid,
                    lifetimePlaytime: e.playtimeForever,
                    storeItem: r,
                  }),
                )
              : console.error("Failed to load store data ", t);
          });
        const R = d.GetItemIDs().findIndex((e) => e.appid === t),
          E = m.data?.bRecommendedByIR,
          C = h.length > 0,
          B = o.data?.owns?.length,
          I = o.data?.in_wishlist?.length,
          A = c.data?.accountids_recommended?.length;
        let k = 0;
        return (
          B > 0 && k++,
          I > 0 && k++,
          A > 0 && k++,
          E && k++,
          R >= 0 && k++,
          h.length > 0 && k++,
          n && y?.data?.length > 0 && k++,
          s && Boolean(v.data) && k++,
          Se(
            "FriendsOwned: ",
            B,
            " FriendsWishlisted: ",
            I,
            "cRecommended: ",
            A,
          ),
          u.createElement(
            u.Fragment,
            null,
            k > 0 &&
              u.createElement(
                u.Fragment,
                null,
                u.createElement(
                  "div",
                  { className: he().WhyRelevant },
                  (0, T.we)("#DiscoveryQueue_WhyRelevant"),
                ),
                u.createElement(
                  "div",
                  { role: "list", className: he().RelevantCtn },
                  C &&
                    u.createElement(
                      Ne,
                      { header: (0, T.we)("#DiscoveryQueue_SimilarGames") },
                      u.createElement(
                        "div",
                        { className: he().ReleventSimilarAppsCtn },
                        h,
                      ),
                    ),
                  n &&
                    y?.data?.length > 0 &&
                    u.createElement(
                      Ne,
                      {
                        header: (0, T.we)(
                          "#ContentHub_Recommendation_Curators",
                        ),
                      },
                      u.createElement(
                        "div",
                        {
                          className: (0, f.A)(
                            he().ReleventSimilarAppsCtn,
                            he().RecommendingCuratorsCtn,
                          ),
                        },
                        y.data
                          .filter(Boolean)
                          .map((e) =>
                            u.createElement(Ie, {
                              key: "curator_" + e.clanAccountID,
                              curator: e,
                            }),
                          ),
                      ),
                    ),
                  s &&
                    Boolean(v.data) &&
                    u.createElement(Be, { creatorInfo: v.data }),
                  R >= 0 &&
                    u.createElement(Ne, {
                      header: (0, T.um)(
                        "#DiscoveryQueue_TopSellers",
                        (R + 1).toLocaleString(),
                        u.createElement("span", {
                          className: he().RelevantTextBold,
                        }),
                      ),
                    }),
                  E &&
                    !C &&
                    u.createElement(Ne, {
                      header: (0, T.we)("#DiscoveryQueue_RecommendedByIR"),
                    }),
                  u.createElement(ke, {
                    bShowAvatars: r,
                    count: c.data?.accountids_recommended?.length,
                    locToken: "#DiscoveryQueue_FriendsRecommended",
                    arrSteamIDs: b.data?.rgRecommendedFriends,
                  }),
                  u.createElement(ke, {
                    bShowAvatars: r,
                    count: o.data?.owns?.length,
                    locToken: "#DiscoveryQueue_FriendsOwned",
                    arrSteamIDs: b.data?.rgOwnedFriends,
                  }),
                  u.createElement(ke, {
                    bShowAvatars: r,
                    count: o.data?.in_wishlist?.length,
                    locToken: "#DiscoveryQueue_FriendsWishlisted",
                    arrSteamIDs: b.data?.rgWishlistFriends,
                  }),
                ),
              ),
            a && 0 != k
              ? u.createElement("div", {
                  "aria-label": i.GetShortDescription(),
                })
              : u.createElement(
                  "div",
                  {
                    className: (0, f.A)(he().AppDescription, k && he().Divider),
                  },
                  i.GetShortDescription(),
                ),
          )
        );
      }
      function Be(e) {
        const { creatorInfo: t } = e;
        if (!t) return null;
        let r;
        switch (t.type) {
          case "publisher":
            r = "#ContentHub_Recommendation_FollowedPublisher";
            break;
          case "developer":
            r = "#ContentHub_Recommendation_FollowedDeveloper";
            break;
          case "franchise":
            r = "#ContentHub_Recommendation_FollowedFranchise";
        }
        return r
          ? u.createElement(Ne, {
              header: (0, T.PP)(
                r,
                u.createElement(
                  "span",
                  { className: he().RelevantTextBold },
                  t.clanInfo?.group_name,
                ),
              ),
            })
          : null;
      }
      function Ie(e) {
        const { curator: t } = e,
          { creatorHome: r } = (0, J.FV)(t?.clanAccountID);
        return t && r
          ? u.createElement(
              i.Ii,
              { href: r.GetCreatorHomeURL(null) },
              u.createElement("img", { src: t.avatar_medium_url }),
            )
          : null;
      }
      function Ae(e) {
        const { lifetimePlaytime: t, storeItem: r } = e;
        return u.createElement(
          "div",
          { className: he().SimilarAppCtn },
          u.createElement(
            W.Qf,
            {
              item: { type: "game", id: r.GetAppID() },
              bHidePrice: !0,
              hoverProps: {
                direction: "overlay",
                nBodyAlignment: 1,
                style: { minWidth: "320px", zIndex: 5e3 },
              },
            },
            u.createElement("img", {
              className: he().SimilarAppImg,
              alt: r.GetName(),
              src: r.GetAssets().GetSmallCapsuleURL(),
            }),
          ),
        );
      }
      function ke(e) {
        const { arrSteamIDs: t, count: r, locToken: i, bShowAvatars: a } = e;
        return r
          ? 1 != r || a
            ? u.createElement(
                Ne,
                {
                  header: (0, T.um)(
                    i,
                    r,
                    u.createElement("span", {
                      className: he().RelevantTextBold,
                    }),
                  ),
                },
                a &&
                  t.length > 0 &&
                  u.createElement(
                    "div",
                    { className: he().FriendAvatarsCtn },
                    1 == r
                      ? u.createElement(Ue, { steamid: t[0] })
                      : u.createElement(Me, { arrSteamIDs: t }),
                  ),
              )
            : u.createElement(Ne, {
                header: (0, T.PP)(
                  i + "_Single",
                  u.createElement(De, { steamid: t[0] }),
                ),
              })
          : null;
      }
      function De(e) {
        const { steamid: t } = e,
          { data: r } = (0, Re.js)(t);
        return r && r.m_bInitialized
          ? u.createElement(
              "span",
              {
                "data-miniprofile": "s" + r.m_steamid.ConvertTo64BitString(),
                className: he().RelevantTextBold,
              },
              r.m_strPlayerName,
            )
          : null;
      }
      function Me(e) {
        const { arrSteamIDs: t } = e,
          r = (0, Re.DW)(t);
        return u.createElement(
          u.Fragment,
          null,
          r.map(
            ({ data: e }) =>
              e &&
              u.createElement(Z.i8, {
                key: e.m_steamid.ConvertTo64BitString(),
                "data-miniprofile": "s" + e.m_steamid.ConvertTo64BitString(),
                persona: e,
                size: "Small",
                statusPosition: "right",
              }),
          ),
        );
      }
      function Ue(e) {
        const { steamid: t } = e,
          { data: r } = (0, Re.js)(t);
        return r
          ? u.createElement(
              a.Z,
              { className: he().FriendBlockCtn, "data-miniprofile": "s" + t },
              u.createElement(Z.i8, {
                persona: r,
                size: "Small",
                statusPosition: "right",
              }),
              u.createElement($.D, {
                className: he().PersonaStatus,
                persona: r,
                eFriendRelationship: K.SX.k_EFriendRelationshipFriend,
                bIsSelf: !1,
                strNickname: null,
                bParenthesizeNicknames: !1,
                bCompactView: !1,
                bNoMask: !0,
              }),
            )
          : null;
      }
      function Ne(e) {
        const { children: t, header: r } = e;
        return u.createElement(
          "div",
          { className: he().RelevantItem },
          u.createElement(
            "div",
            { className: he().RelevantCheck },
            u.createElement(w.Jlk, null),
          ),
          u.createElement(
            "div",
            { className: he().RelevantColumn },
            u.createElement("div", { className: he().ReleventText }, r),
            t,
          ),
        );
      }
      var Fe = r(60338),
        ze = r(60779),
        Ge = r(61336),
        Qe = r(92834);
      new h.wd("DiscoveryQueueApp").Debug;
      function qe(e) {
        const {
            appID: t,
            nItemHeight: r,
            nItemWidth: i,
            selected: n,
            fnFocused: s,
            eStoreDiscoveryQueueType: o,
            storePageFilter: l,
            bPreferDemoStorePage: c,
            elVideo: m,
            elDetails: _,
            appAriaIDs: p,
          } = e,
          [g] = (0, y.t7)(t, Fe.Gy),
          w = (0, S.Qn)(),
          v = (0, d.R7)(),
          b = v?.ownerWindow || window,
          h = Pe(g, o, l, c),
          { bIsIgnored: R, fnUpdateIgnored: E } = (0, Fe.TK)(t),
          { bIsWishlisted: C, fnUpdateWishlist: B } = (0, Fe.u4)(t),
          I = u.useRef(void 0);
        if (
          (u.useEffect(() => {
            n && I.current && I.current.focus({ preventScroll: !0 });
          }, [n]),
          !g)
        )
          return console.warn("Error: missing store item for appid ", t), null;
        const A = { width: i || void 0, height: r || void 0 };
        return u.createElement(
          a.Z,
          {
            "aria-labelledby": (0, Qe.q)(
              p.nameId,
              p.tagsId,
              p.reviewId,
              p.relevanceId,
              p.buttonsId,
            ),
            ref: I,
            style: A,
            className: (0, f.A)(he().DiscoveryQueueApp, n && he().Selected),
            onOptionsActionDescription: C
              ? (0, T.we)("#DiscoveryQueue_RemoveFromWishlist")
              : (0, T.we)("#DiscoveryQueue_AddToWishlist"),
            onOptionsButton: B,
            onOKActionDescription: (0, T.we)("#DiscoveryQueue_ViewStorePage"),
            onOKButton: () => {
              b.location.href = h;
            },
            onSecondaryActionDescription: R
              ? (0, T.we)("#DiscoveryQueue_Undo")
              : (0, T.we)("#DiscoveryQueue_IgnoreLink"),
            onSecondaryButton: E,
            fnScrollIntoViewHandler: () => (s(), !0),
          },
          u.createElement(
            "div",
            { className: (0, f.A)(he().IgnoredCtn, R && he().Active) },
            u.createElement(
              "div",
              { className: (0, f.A)(he().IgnoredInfo, R && he().Active) },
              u.createElement(
                "div",
                { className: he().IgnoredTitle },
                (0, T.we)("#DiscoveryQueue_Ignored"),
              ),
              u.createElement(
                "div",
                { className: he().IgnoredDescription },
                (0, T.we)("#DiscoveryQueue_IgnoredConfirmation"),
              ),
              u.createElement(
                a.Z,
                {
                  className: (0, f.A)(he().QueueButton, he().UndoIgnoreButton),
                  onClick: E,
                },
                w &&
                  u.createElement(x.$m, {
                    button: j.g4.X,
                    type: x.wt.Light,
                    size: x.xY.Medium,
                  }),
                (0, T.we)("#DiscoveryQueue_Undo"),
              ),
            ),
          ),
          m,
          _,
        );
      }
      function Pe(e, t, r, i) {
        const a = (0, m.n9)();
        return u.useMemo(() => {
          if (!e) return;
          const n = (0, C.Bk)(r),
            s =
              t >= q.QV.k_EStoreDiscoveryQueueTypeNew
                ? "?inqueue=" + t + (r ? "_" + n : "")
                : "",
            o = (0, m.bV)(a, e.GetStorePageURL(i) + s);
          return (0, Ge.NT)(o);
        }, [i, t, a, e, r]);
      }
      function We(e) {
        const {
            appID: t,
            bShowMinimizedDisplay: r,
            eStoreDiscoveryQueueType: i,
            storePageFilter: n,
            bPreferDemoStorePage: s,
            appAriaIDs: o,
          } = e,
          [l] = (0, y.t7)(t, Fe.Gy),
          { bIsIgnored: c, fnUpdateIgnored: m } = (0, Fe.TK)(t),
          { bIsWishlisted: d, fnUpdateWishlist: _ } = (0, Fe.u4)(t),
          p = Pe(l, i, n, s),
          g = (0, S.Qn)(),
          v = g;
        if (!l) return;
        const b = l.GetAssets().GetLibraryCapsuleURL(),
          h = l.GetAssets().GetHeaderURL();
        return u.createElement(
          a.Z,
          { className: he().AppDetailsCtn },
          u.createElement(
            "div",
            { className: he().AppDetailsCtnTop },
            b &&
              u.createElement(
                "a",
                { className: (0, f.A)(he().CapsuleLink), href: p },
                u.createElement("img", {
                  className: he().AppLibraryHero,
                  src: b,
                }),
                h &&
                  u.createElement("img", { className: he().AppHeader, src: h }),
              ),
            u.createElement(
              "div",
              { id: o.nameId, className: he().RightColumn },
              u.createElement(
                "a",
                { className: (0, f.A)(he().AppName), href: p },
                l.GetName(),
              ),
              u.createElement(L.wc, {
                bSingleLineMode: !0,
                info: { id: t, type: (0, Q.U)(l.GetAppType()) },
              }),
            ),
            u.createElement(Le, {
              rgTagIDs: l.GetTagIDs(),
              ariaLabelID: o.tagsId,
            }),
            u.createElement(
              "div",
              { className: he().AppReviews, id: o.reviewId },
              u.createElement(W.Jz, {
                bShowTooltip: !0,
                bTruncateTotalReviews: r,
                appInfo: { id: t, type: (0, Q.U)(l.GetAppType()) },
              }),
            ),
            u.createElement(
              "div",
              { id: o.relevanceId, className: he().AppRelevanceCtn },
              u.createElement(Ce, {
                bHideDescription: g,
                bShowAvatars: !r,
                storeItem: l,
                appID: t,
              }),
            ),
          ),
          !g &&
            u.createElement(
              "div",
              { className: he().AppActionButtonsCtn },
              u.createElement(
                "div",
                { id: o.buttonsId, className: he().AppActionJustButtonsCtn },
                u.createElement(
                  "div",
                  { className: he().ButtonsRowWrap },
                  l.BHasDemo() &&
                    u.createElement(V.j, {
                      info: {
                        id: l.GetAppID(),
                        type: (0, P._4)(l.GetStoreItemType(), l.GetAppType()),
                      },
                      className: (0, f.A)(
                        he().QueueButton,
                        he().Primary,
                        he().Launch,
                      ),
                    }),
                  u.createElement(
                    "a",
                    {
                      className: (0, f.A)(he().QueueButton, he().Primary),
                      href: p,
                    },
                    v &&
                      u.createElement(x.$m, {
                        button: j.g4.Y,
                        type: x.wt.Light,
                        size: x.xY.Medium,
                        additionalClassName: he().YGlyph,
                      }),
                    " ",
                    (0, T.we)("#DiscoveryQueue_ViewStorePage"),
                  ),
                  u.createElement(
                    O.he,
                    {
                      toolTipContent: d
                        ? (0, T.we)("#RemoveFromWishlist_ttip")
                        : (0, T.we)("#AddToWishlist_ttip"),
                    },
                    u.createElement(
                      a.Z,
                      {
                        "aria-label": d
                          ? (0, T.we)("#Sale_RemoveFromWishlist")
                          : (0, T.we)("#Sale_AddToWishlist"),
                        focusable: !0,
                        className: (0, f.A)(he().QueueButton, d && he().Active),
                        onClick: _,
                      },
                      v &&
                        u.createElement(x.$m, {
                          button: j.g4.Y,
                          type: x.wt.Light,
                          size: x.xY.Medium,
                          additionalClassName: he().YGlyph,
                        }),
                      d
                        ? u.createElement(w.qnF, null)
                        : u.createElement(w.T4m, null),
                    ),
                  ),
                  u.createElement(
                    O.he,
                    {
                      toolTipContent: (0, T.we)(
                        "#SaleTrailerCarousel_IgnoreLink_ttip",
                      ),
                    },
                    u.createElement(
                      a.Z,
                      {
                        "aria-label": (0, T.we)("#DiscoveryQueue_IgnoreLink"),
                        focusable: !0,
                        className: (0, f.A)(he().QueueButton, c && he().Active),
                        onClick: m,
                      },
                      u.createElement(w.NtH, null),
                    ),
                  ),
                ),
              ),
            ),
        );
      }
      function Le(e) {
        const { rgTagIDs: t, ariaLabelID: r } = e,
          i = [...(0, Fe.W3)(t)].slice(0, 8);
        return u.createElement(
          "div",
          { id: r, role: "list", className: he().AppTagsCtn },
          i.map((e) =>
            u.createElement(ze.Fz, {
              key: e,
              className: he().TagEntry,
              tagID: e,
            }),
          ),
        );
      }
      var xe = r(60884),
        Oe = r(90511);
      const je = new h.wd("DiscoveryQueueWizard").Debug,
        Ve = 1,
        He = 1400,
        Ke = "discoveryqueue2022";
      async function Ze(e, t, r, i) {
        let a = [],
          n = !1;
        try {
          const { appids: s, exhausted: o } = await C.aI
            .Get()
            .GetDiscoveryQueueAppsOfType(e, t, i);
          (a = [...s]),
            (n = o),
            r && -1 === a.findIndex((e) => e === r) && a.unshift(r),
            await g.A.Get().QueueMultipleAppRequests(a, { ...Fe.Gy, ...Oe.LB });
        } catch (e) {
          console.error("Failed getting discovery queue apps", e);
        }
        return { appids: a, exhausted: n };
      }
      function $e(e) {
        const [t, r] = u.useState(!1),
          i = (0, l.KV)();
        return (
          (0, u.useEffect)(() => {
            C.aI.Init(i), r(!0);
          }, [i]),
          t ? u.createElement(Ye, { ...e }) : null
        );
      }
      function Ye(e) {
        const {
            eStoreDiscoveryQueueType: t,
            fnCloseModal: r,
            includeAppID: n,
            storePageFilter: o,
            bPreferDemoStorePage: l,
            bShowAOAutoPlayWarning: p,
          } = e,
          [g, y] = u.useState(0),
          [h, B] = u.useState(void 0),
          [I, A] = u.useState(0),
          k = (0, d.R7)(),
          D = k?.ownerWindow || window,
          M = (0, m.ru)(Ke),
          [U, N] = u.useState(0),
          F = (0, c.b)();
        (0, E.E)("ArrowLeft", () => P(!1), !0, !0),
          (0, E.E)("Left", () => P(!1), !0, !0),
          (0, E.E)("ArrowRight", () => P(!0), !0, !0),
          (0, E.E)("Right", () => P(!0), !0, !0),
          (0, E.E)("Escape", () => r?.(), !0, !0),
          (0, E.E)("Esc", () => r?.(), !0, !0);
        const z = u.useMemo(() => Boolean(D.innerWidth < He), [D]),
          { fnGetDiscoveryQueue: Q, rgAppIDs: q } = (function (e, t, r) {
            const [i, a] = u.useState([]),
              n = (0, b.m)("DiscoveryQueueWizard"),
              s = async (s) => {
                let { appids: o } = await Ze(e, !s, s && r, t);
                if (s && !o.length) {
                  let { appids: r } = await Ze(e, !0, void 0, t);
                  o = r;
                }
                if (!n?.token?.reason) {
                  const e = [...(i ?? []), ...o, Ve];
                  a(e);
                }
                je("Loaded new discovery queue apps: ", o);
              };
            return { fnGetDiscoveryQueue: s, rgAppIDs: i };
          })(t, o, n);
        u.useEffect(() => {
          Q(!0), _.Fm.Get().HintLoad();
        }, []),
          u.useEffect(() => {
            const e = q[g];
            e != h && (e && e != Ve && F.AddImpression(e, M), B(e));
          }, [F, g, h, q, M]);
        const P = (e) => {
          const t = R.OQ(g + (e ? 1 : -1), 0, q.length - 1);
          t != g &&
            (y(t), je("New selected index: ", t, " Prev selected index: ", g));
        };
        u.useEffect(() => {
          q?.length &&
            q[g] !== Ve &&
            (N((e) => e + 1),
            C.aI
              .Get()
              .SkipDiscoveryQueueItem(q[g], t, o)
              .then(() => N((e) => e - 1)));
        }, [t, g, q, o]),
          u.useEffect(() => {
            q.length != I &&
              (A(q.length), q.length > I && q[g] == Ve && y(g + 1));
          }, [I, g, q]);
        const [W] = u.useState(new Map()),
          L = (0, C.WX)(t, o),
          x = !(0, G.c5)() && g > 0,
          O = !(0, G.c5)() && g < q.length - 1,
          {
            refContainer: j,
            bIsDragging: V,
            nDragOffset: H,
            nDragSelectedOffsetIndex: K,
            handleTouchStart: Z,
            handleTouchMove: $,
            handleTouchEnd: Y,
          } = (function (e, t) {
            const r = u.useRef(null),
              [i, a] = u.useState(0),
              [n, s] = u.useState(!1),
              [o, l] = u.useState(0),
              c = u.useRef(0),
              m = 50,
              d = (e) => {
                s(!0), (c.current = e.touches[0].clientX), a(0), l(0);
              },
              _ = (e) => {
                if (!n) return;
                const t = e.touches[0].clientX - c.current;
                a(t), l(i > m ? 1 : i < -m ? -1 : 0);
              },
              p = () => {
                n &&
                  (s(!1),
                  i > m
                    ? e((e) => Math.max(e - 1, 0))
                    : i < -m && e((e) => Math.min(e + 1, t - 1)),
                  a(0),
                  l(0));
              };
            return {
              refContainer: r,
              bIsDragging: n,
              nDragOffset: i,
              nDragSelectedOffsetIndex: o,
              handleTouchStart: d,
              handleTouchMove: _,
              handleTouchEnd: p,
            };
          })((e) => y(e), q.length),
          X = (e) => R.W(g + e, q) && (R.LA(e, -1, 1) || V),
          J = (0, m.aL)(S.TS.STORE_BASE_URL + "explore?dq=widget"),
          ee = q[g] !== Ve,
          { nQueueStart: te, nCount: re } = (function (e, t) {
            let r = 0;
            for (let i = 0; i < e; i++) t[i] == Ve && (r = i + 1);
            let i = 0;
            for (let r = e; r < t.length; r++) {
              if (t[r] == Ve) {
                i = r;
                break;
              }
              r == t.length - 1 && (i = t.length);
            }
            const a = i - r;
            return { nQueueStart: r, nQueueEnd: i, nCount: a };
          })(g, q);
        return u.createElement(
          v.Ay,
          { feature: Ke },
          u.createElement(
            a.Z,
            {
              role: "dialog",
              focusable: !1,
              "flow-children": "column",
              className: he().DiscoveryQueueCarouselCtn,
              navEntryPreferPosition: s.iU.LAST,
              onCancelButton: () => r?.(),
              onCancelActionDescription: (0, T.we)("#Button_Close"),
            },
            u.createElement(
              "div",
              {
                className: he().DiscoveryQueueWrapper,
                onClick: (e) => {
                  e.target == e.currentTarget && (r?.(), e.stopPropagation());
                },
              },
              L.length > 0 &&
                u.createElement(
                  a.Z,
                  {
                    "flow-children": "row",
                    className: he().DiscoveryQueueName,
                  },
                  L,
                ),
              u.createElement(
                a.Z,
                { "flow-children": "row", className: he().TopBarCtn },
                u.createElement(
                  a.Z,
                  { className: he().LearnMore },
                  (0, T.oW)(
                    "#DiscoveryQueue_LearnMore_Default",
                    u.createElement(i.Ii, {
                      className: he().LearnMoreLink,
                      href: (0, Ge.NT)(J),
                    }),
                  ),
                ),
                u.createElement(
                  a.Z,
                  { className: he().ControlsCtn },
                  u.createElement(
                    a.Z,
                    {
                      focusable: !0,
                      className: he().QueueButton,
                      onClick: r,
                      "aria-label": (0, T.we)("#Button_Close"),
                      onActivate: () => r && r(),
                    },
                    u.createElement(w.X, null),
                  ),
                ),
              ),
              u.createElement(
                a.Z,
                {
                  role: "button",
                  "aria-label": (0, T.we)("#Carousel_Next"),
                  onClick: () => P(!1),
                  className: (0, f.A)(
                    he().QueueNavArrow,
                    he().LeftArrow,
                    x && he().Enable,
                  ),
                },
                u.createElement(w.l8x, { angle: 180 }),
              ),
              u.createElement(
                a.Z,
                {
                  role: "button",
                  "aria-label": (0, T.we)("#Carousel_Prev"),
                  onClick: () => P(!0),
                  className: (0, f.A)(
                    he().QueueNavArrow,
                    he().RightArrow,
                    O && he().Enable,
                  ),
                },
                u.createElement(w.l8x, { angle: 0 }),
              ),
              u.createElement(
                a.Z,
                {
                  ref: j,
                  className: he().DiscoveryQueueItemsCtn,
                  focusable: !1,
                  onTouchStart: Z,
                  onTouchMove: $,
                  onTouchEnd: Y,
                },
                [-2, -1, 0, 1, 2].map((e) =>
                  u.createElement(
                    "div",
                    {
                      key: g + e,
                      className: (0, f.A)({
                        [he().DiscoveryQueueItemPositioner]: !0,
                        [he().Dragging]: V,
                        [he().InRange]: X(e),
                        [he().FarLeft]: -2 == e,
                        [he().Left]: -1 == e,
                        [he().Current]: 0 == e,
                        [he().Right]: 1 == e,
                        [he().FarRight]: 2 == e,
                        [he().Selected]: e + K == 0,
                      }),
                      style: { "--dragOffsetX": `${H}px` },
                    },
                    X(e) &&
                      u.createElement(Xe, {
                        eStoreDiscoveryQueueType: t,
                        storePageFilter: o,
                        rgAppIDs: q,
                        index: g + e,
                        bShowMinimizedDisplay: z,
                        selectedIndex: g,
                        bPreferDemoStorePage: l,
                        mapViewedAppCount: W,
                        fnCloseModal: r,
                        fnLoadNextQueue: () => Q(!1),
                        fnAdvance: P,
                        bSkipAppRequestPending: Boolean(0 != U),
                        showAOAutoPlayWarning: p,
                      }),
                  ),
                ),
              ),
              u.createElement(xe.A, {
                className: (0, f.A)(!ee && he().ProgressHidden),
                showPriorAsActive: !0,
                count: re,
                selectedIndex: g - te,
              }),
            ),
          ),
        );
      }
      function Xe(e) {
        const {
            eStoreDiscoveryQueueType: t,
            storePageFilter: r,
            rgAppIDs: i,
            index: a,
            bShowMinimizedDisplay: n,
            selectedIndex: s,
            bPreferDemoStorePage: o,
            mapViewedAppCount: l,
            fnCloseModal: c,
            fnLoadNextQueue: m,
            fnAdvance: d,
            bSkipAppRequestPending: _,
            showAOAutoPlayWarning: p,
          } = e,
          [g, y] = u.useState(!1),
          w = {
            nameId: u.useId(),
            tagsId: u.useId(),
            reviewId: u.useId(),
            relevanceId: u.useId(),
            buttonsId: u.useId(),
          },
          v = () => {
            s != a && d(a > s);
          },
          b = s === a,
          f = u.useRef(b);
        if (
          (u.useEffect(() => {
            const e = f.current;
            if (((f.current = b), e && !b)) {
              y(!0);
              const e = setTimeout(() => y(!1), 500);
              return () => {
                clearTimeout(e);
              };
            }
          }, [b]),
          i[a] == Ve)
        ) {
          let n = 0;
          for (let e = a - 1; e >= 0; e--) i[e] == Ve && (n += 1);
          let o = 0;
          for (let e = a - 1; e >= 0 && i[e] !== Ve; e--) o++;
          return (
            l.has(n) ||
              l.set(n, C.aI.Get().GetTotalSkippedAppsForDiscoveryQueue(t, r)),
            u.createElement(Je, {
              ...e,
              key: s,
              selected: b,
              lastCard: s == i.length - 1,
              fnLoadNextQueue: m,
              fnCloseModal: c,
              summaryCardIndex: n,
              eStoreDiscoveryQueueType: t,
              viewedAppCount: (l.get(n) || 0) + o,
              fnFocused: v,
              fnAdvance: () => d(!0),
              bSkipAppRequestPending: _,
            })
          );
        }
        const T = b || f.current || g;
        return u.createElement(qe, {
          appAriaIDs: w,
          eStoreDiscoveryQueueType: t,
          storePageFilter: r,
          selected: b,
          appID: i[a],
          bPreferDemoStorePage: o,
          fnFocused: v,
          elVideo: u.createElement(Fe.y3, {
            appID: i[a],
            focused: T,
            showAOAutoPlayWarning: p,
          }),
          elDetails: u.createElement(We, {
            appID: i[a],
            bShowMinimizedDisplay: n,
            eStoreDiscoveryQueueType: t,
            storePageFilter: r,
            bPreferDemoStorePage: o,
            appAriaIDs: w,
          }),
        });
      }
      function Je(e) {
        const {
            eStoreDiscoveryQueueType: t,
            fnCloseModal: r,
            summaryCardIndex: i,
            lastCard: n,
            selected: s,
            fnLoadNextQueue: l,
            storePageFilter: c,
            fnDisplaySummaryReward: d,
            viewedAppCount: g,
            fnFocused: y,
            fnAdvance: w,
            bSkipAppRequestPending: v,
          } = e,
          [h, R] = u.useState(!1),
          E = (0, S.Qn)(),
          B = (0, p.Qt)(
            o.L6.k_ESaleRewardDefType_DiscoveryQueue,
            S.TS.LANGUAGE,
            !1,
          ),
          [I, A] = u.useState(0),
          [k, D] = u.useState(0);
        u.useEffect(() => {
          s &&
            !h &&
            _.Fm.Get()
              .HintLoad()
              .then(() => {
                C.aI
                  .Get()
                  .LoadSkippedApps(t, c)
                  .then((e) => {
                    A(
                      e.reduce(
                        (e, t) => (_.Fm.Get().BIsGameWishlisted(t) ? e + 1 : e),
                        0,
                      ),
                    ),
                      D(
                        e.reduce(
                          (e, t) => (_.Fm.Get().BIsGameIgnored(t) ? e + 1 : e),
                          0,
                        ),
                      ),
                      R(!0);
                  });
              });
        }, [h, t, s, c]);
        const [M, U] = u.useState(!1),
          N = (0, C.IH)(t, c),
          F = (0, b.m)("DiscoveryQueueSummary"),
          z = async () => {
            n ? M || (U(!0), await l(), F?.token?.reason || U(!1)) : w();
          };
        return u.createElement(
          et,
          {
            selected: s,
            fnFocused: y,
            fnOnContinue: z,
            fnCloseModal: r,
            bLoaded: h,
          },
          u.createElement(
            "div",
            { className: he().SummaryContentCtn },
            u.createElement(
              "div",
              { className: he().SummaryTitle },
              (0, T.we)("#DiscoveryQueue_SummaryTitle"),
            ),
            !N &&
              s &&
              B.data?.definition &&
              u.createElement(rt, {
                bSkipAppRequestPending: v,
                summaryCardIdx: i,
              }),
            u.createElement(
              "div",
              { className: he().YourStats },
              (0, T.we)("#DiscoveryQueue_YourStats"),
            ),
            u.createElement(
              a.Z,
              { "flow-children": "row", className: he().SummaryGrid },
              u.createElement(
                "div",
                { className: he().GridItem },
                u.createElement(
                  "div",
                  { className: he().GridTitle },
                  (0, T.we)("#DiscoveryQueue_ViewedCaps"),
                ),
                u.createElement(
                  "div",
                  { className: he().GridNumber },
                  g.toLocaleString(),
                ),
                u.createElement(
                  "div",
                  { className: he().GridSubTitle },
                  (0, T.we)("#DiscoveryQueue_Titles"),
                ),
              ),
              u.createElement(
                "div",
                { className: he().GridItem },
                u.createElement(
                  "div",
                  { className: he().GridTitle },
                  (0, T.we)("#DiscoveryQueue_WishlistedCaps"),
                ),
                u.createElement(
                  "div",
                  { className: he().GridNumber },
                  I.toLocaleString(),
                ),
                u.createElement(
                  m.Fh,
                  {
                    className: (0, f.A)(he().GridSubTitle, he().TextLink),
                    href: (0, Ge.NT)(S.TS.STORE_BASE_URL + "wishlist"),
                  },
                  (0, T.we)("#DiscoveryQueue_ViewWishlist"),
                ),
              ),
              u.createElement(
                "div",
                { className: he().GridItem },
                u.createElement(
                  "div",
                  { className: he().GridTitle },
                  (0, T.we)("#DiscoveryQueue_IgnoredCaps"),
                ),
                u.createElement(
                  "div",
                  { className: he().GridNumber },
                  k.toLocaleString(),
                ),
                u.createElement(
                  m.Fh,
                  {
                    className: (0, f.A)(he().GridSubTitle, he().TextLink),
                    href: (0, Ge.NT)(
                      S.TS.STORE_BASE_URL + "account/notinterested",
                    ),
                  },
                  (0, T.we)("#DiscoveryQueue_ViewIgnored"),
                ),
              ),
            ),
            !E &&
              u.createElement(
                a.Z,
                { className: he().SummaryActionButtonsCtn },
                u.createElement(
                  a.Z,
                  {
                    className: (0, f.A)(he().QueueButton, he().Wide),
                    onClick: r,
                  },
                  (0, T.we)("#ActionButtonLabelDone"),
                ),
                !N &&
                  u.createElement(
                    a.Z,
                    {
                      className: (0, f.A)(
                        M && he().Disabled,
                        he().QueueButton,
                        he().Primary,
                        he().Wide,
                      ),
                      onClick: z,
                    },
                    M ? (0, T.we)("#Loading") : (0, T.we)("#Button_Continue"),
                  ),
              ),
          ),
          Boolean(!N) &&
            u.createElement(u.Fragment, null, Boolean(d) && d(i + 1)),
        );
      }
      function et(e) {
        const {
            children: t,
            selected: r,
            fnOnContinue: i,
            fnCloseModal: a,
            fnFocused: s,
            bLoaded: o,
          } = e,
          l = (0, m.aL)(S.TS.STORE_BASE_URL + "wishlist"),
          c = (0, d.R7)(),
          _ = c?.ownerWindow || window,
          p = u.useRef(void 0);
        return (
          u.useEffect(() => {
            r && p.current && p.current.focus({ preventScroll: !0 });
          }, [r]),
          u.createElement(
            n.YZ,
            {
              ref: p,
              "aria-live": "polite",
              className: (0, f.A)(
                he().SummaryCtn,
                he().DiscoveryQueueApp,
                r && he().Selected,
              ),
              onOptionsActionDescription: (0, T.we)(
                "#DiscoveryQueue_ViewWishlist",
              ),
              onOptionsButton: () => {
                _.location.href = (0, Ge.NT)(l);
              },
              onOKActionDescription: (0, T.we)("#Button_Continue"),
              onOKButton: () => {
                i();
              },
              onCancelActionDescription: (0, T.we)("#ActionButtonLabelDone"),
              onCancelButton: () => a && a(),
              fnScrollIntoViewHandler: () => (s(), !0),
            },
            o
              ? t
              : u.createElement(z.t, {
                  className: he().DiscoveryQueueThrobber,
                  msDelayAppear: 200,
                  size: "large",
                  position: "center",
                }),
          )
        );
      }
      function tt() {
        return u.createElement(
          a.Z,
          { className: he().SaleRewardsCtn },
          u.createElement(z.t, { size: "large", position: "center" }),
        );
      }
      function rt(e) {
        const { bSkipAppRequestPending: t, summaryCardIdx: r } = e;
        return t
          ? u.createElement(tt, null)
          : u.createElement(it, { summaryCardIdx: r });
      }
      function it(e) {
        const { summaryCardIdx: t } = e,
          r = (0, p.os)(
            o.L6.k_ESaleRewardDefType_DiscoveryQueue,
            S.TS.LANGUAGE,
            !1,
            t.toString(),
          ),
          [i] = (0, y.t7)(r?.data?.current_def?.appid, {}),
          n = (0, S.Qn)();
        if (!r?.data?.current_def || !i?.GetName().length)
          return u.createElement(tt, null);
        const s = r.data.num_items_earned,
          l = r.data.current_def.num_items_per_def,
          c = l - s,
          m = (s / l) * 100;
        return u.createElement(
          a.Z,
          { className: he().SaleRewardsCtn },
          u.createElement(I, { nPercent: m, size: 70, strokeWidth: 12 }),
          u.createElement(
            a.Z,
            { className: he().RewardStatusCtn },
            u.createElement(
              "div",
              { className: he().SaleRewardAppTitle },
              (0, T.we)(
                "#DiscoveryQueue_SaleStatus_Title" + (c ? "" : "_Complete"),
                s.toLocaleString(),
                i.GetName(),
              ),
            ),
            c > 0 &&
              u.createElement(
                "div",
                { className: he().SaleRewardAppTitle },
                (0, T.we)(
                  "#DiscoveryQueue_SaleStatus_Desc",
                  c.toLocaleString(),
                  i.GetName(),
                ),
              ),
            !n &&
              u.createElement(
                "a",
                {
                  href: (0, Ge.NT)(
                    S.TS.COMMUNITY_BASE_URL + "my/itemcollection",
                  ),
                },
                (0, T.we)("#DiscoveryQueue_SaleStatus_Link"),
              ),
          ),
        );
      }
    },
    47554: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => w });
      var i = r(90626),
        a = r(12447),
        n = r(76217),
        s = r(75487),
        o = r(39199),
        l = r(55263),
        c = r(95034),
        m = r(12155),
        u = r(26749),
        d = r(61859),
        _ = r(71109),
        p = r.n(_),
        g = r(78327),
        y = r(90511);
      function w(e) {
        const { appID: t } = e,
          r = (0, u.G)(),
          [_] = (0, c.QD)("inqueue", "" + s.QV.k_EStoreDiscoveryQueueTypeNew),
          [w, v] = (0, i.useState)(!1),
          [b] = (0, l.t7)(t, { include_assets: !0 }),
          f = i.useRef(void 0);
        i.useEffect(() => f.current?.Activate(!0), []);
        const T = (0, g.Qn)(),
          { eStoreDiscoveryQueueType: h, storePageFilter: R } =
            i.useMemo(() => {
              if (_?.length > 0) {
                const e = _.split("_"),
                  t = Number(e[0]);
                let r;
                return (
                  e.length > 1 && (r = (0, o.bz)(e[1])),
                  { eStoreDiscoveryQueueType: t, storePageFilter: r }
                );
              }
              return {
                eStoreDiscoveryQueueType: s.QV.k_EStoreDiscoveryQueueTypeNew,
                storePageFilter: void 0,
              };
            }, [_]),
          { showDiscoveryQueue: E } = (0, y.GV)(h, {
            includeAppID: t,
            storePageFilter: R,
          }),
          S = i.useCallback(() => {
            v(!0);
          }, []),
          C = (0, o.WX)(h, R);
        return r && b
          ? w
            ? null
            : i.createElement(
                a.u,
                { navTreeRef: f, navID: "DiscoveryQueueAppWidget" },
                i.createElement(
                  n.Z,
                  {
                    focusable: !0,
                    className: p().DiscoveryQueueWidgetCtn,
                    onSecondaryButton: S,
                    onOKButton: E,
                    onOKActionDescription: (0, d.we)(
                      "#DiscoveryQueue_ResumeWizard",
                    ),
                    onSecondaryActionDescription: (0, d.we)("#Button_Close"),
                  },
                  i.createElement(
                    "div",
                    { onClick: E, className: p().WidgetText },
                    i.createElement(m.mcU, null),
                    (0, d.we)("#DiscoveryQueue_ResumeWizard"),
                    C?.length > 0 && ": " + C,
                  ),
                  !T &&
                    i.createElement(
                      "div",
                      { className: p().CloseButton, onClick: S },
                      i.createElement(m.X, null),
                    ),
                ),
              )
          : null;
      }
    },
    6804: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => l });
      var i = r(12447),
        a = r(75487),
        n = r(90626),
        s = r(96236),
        o = r(38405);
      function l() {
        return n.createElement(
          s.K,
          { placeholderHeight: "200px", rootMargin: "0px 0px 100% 0px" },
          n.createElement(
            i.u,
            { navID: "DiscoveryQueueWidget" },
            n.createElement(o.g, {
              eStoreDiscoveryQueueType: a.QV.k_EStoreDiscoveryQueueTypeNew,
            }),
          ),
        );
      }
    },
    25054: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => d });
      var i = r(90626),
        a = r(75487),
        n = r(61859),
        s = r(26749),
        o = r(76217),
        l = r(78327),
        c = r(51706),
        m = r(738),
        u = r(90511);
      function d(e) {
        const t = (0, s.G)(),
          { showDiscoveryQueue: r } = (0, u.GV)(
            a.QV.k_EStoreDiscoveryQueueTypeNew,
          ),
          d = i.useCallback(() => {
            l.iA.logged_in
              ? r()
              : (0, m.pg)(
                  i.createElement(c.KG, {
                    onOK: () => {
                      window.location.href = `${l.TS.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
                    },
                    strOKButtonText: (0, n.we)(
                      "#DiscoveryQueue_Error_Login_Title",
                    ),
                    strDescription: (0, n.we)("#DiscoveryQueue_Error_Login"),
                    strTitle: (0, n.we)("#DiscoveryQueue_Error_Login_Title"),
                  }),
                  window,
                );
          }, [r]);
        return t
          ? i.createElement(
              o.Z,
              null,
              i.createElement(
                "a",
                { onClick: d, className: "experiment-button" },
                (0, n.we)("#DiscoveryQueue_OpenWizard"),
              ),
            )
          : i.createElement(
              "div",
              { className: "experiment-button-placeholder" },
              " ",
            );
      }
    },
  },
]);
