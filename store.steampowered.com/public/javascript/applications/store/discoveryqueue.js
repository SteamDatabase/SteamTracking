/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9672],
  {
    15830: (e) => {
      e.exports = {
        DiscoveryQueueWidgetCtn: "_3PAP1PfUymQrLEveRsxQxP",
        WidgetHeaderCtn: "_3i8xWeKjrdNgEjml1PQRuq",
        AppCarouselPosition: "_1DaxYFphX9KPH-YWeuNTvO",
        Initialized: "gjxSD08f5aogKCSeys9k5",
        Spinner: "_3QqziF_w5iNtHF8dOkfrD0",
        AppCarouselCtn: "_2qPvUCeD7uiBSn261-Gg25",
        FadeIn: "Qc0gimNJ0GLAPE87EH3Gp",
        AppCapsuleCtn: "_3G65z75zOTQeHrXxszHO4b",
        AppName: "r6OCNSBahfTSSDTqXDVqY",
        LibraryImage: "_1QVat7gXKVzPNiStElIJCt",
        CapsuleColumn: "_3OUOaqR0a3uYqsWOZbfSSh",
      };
    },
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
    71477: (e) => {
      e.exports = {
        WidgetHeaderCtn: "_2-tz2hqtOXPPtMnVPHNSdx",
        LaunchAction: "xD8XE561L4OLHkp9K3UIV",
        DiscoveryQueueWidget: "aKZCakHw7WVaUN3j36Nh",
        WidgetHeaderText: "_1mKVZY4-l46AZiZvctCEmx",
        WidgetHeaderSubText: "O2jA-VCFl9bmblncfI4k2",
        LoginButton: "_3u1HeR7JRPiiuKIT78j2Cc",
        Placeholder: "_3qFL88r7vVtG3lg2enLhfi",
        SaleTopSection: "_3Xj9phC0S8zL6qrQ5T1sUJ",
        StickerArrangement: "_1hvmhK7qgdrqLwH_Duphah",
        SaleSticker: "_19psoPSyaHlg76v5Cd9H-n",
        SaleTextCtn: "cwQNGPoPuJS67rykUgZdU",
        BoldText: "_1LS-qczKUuqKzg56ll_C0A",
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
    39199: (e, t, r) => {
      "use strict";
      r.d(t, {
        Bk: () => y,
        IH: () => b,
        Uf: () => w,
        WX: () => v,
        aI: () => f,
        bz: () => h,
      });
      var a = r(34629),
        n = r(90626),
        i = r(14947),
        s = r(56545),
        o = r(75487),
        l = r(6144),
        c = r(84933),
        m = r(41338),
        u = r(78327),
        d = r(64753),
        p = r(83561),
        _ = r(7860);
      function g(e, t) {
        let r = e.toString();
        if (
          "newreleases" != t?.strContentHubType &&
          "upcoming" != t?.strContentHubType
        ) {
          const e = t?.nSaleTagID,
            a = t?.strContentHubType,
            n = t?.strContentHubCategory,
            i = t?.nContentHubTagID,
            s = t?.bDiscountsOnly,
            o = t?.bPrioritizeDiscounts,
            l = t?.strOptInName,
            c = t?.nOptInTagID,
            m = t?.nPruneTagID;
          e
            ? (r += "_" + e)
            : a &&
              ((r += "_" + a),
              "category" === a && n
                ? (r += "_" + n)
                : "tags" === a && i && (r += "_" + i),
              s ? (r += "_d") : o && (r += "_p"),
              l && c && m && (r += "_" + l));
        }
        return r;
      }
      function y(e) {
        return (0, m.bt)(JSON.stringify(e));
      }
      function h(e) {
        return JSON.parse((0, m.he)(e));
      }
      class f {
        m_transport;
        m_mapDiscoveryQueues = new Map();
        m_mapSkippedApps = new Map();
        m_mapSkippedAppCount = new Map();
        m_mapInClientCompleted = new Map();
        m_mapInClientCompletedCallback = new Map();
        m_setExhuasted = new Set();
        m_mapExhuastedCallback = new Map();
        GetTotalSkippedAppsForDiscoveryQueue(e, t) {
          const r = g(e, t);
          return this.m_mapDiscoveryQueues.get(r)?.skipped ?? 0;
        }
        GetNumAppsSeenForDiscoveryQueue(e, t) {
          const r = g(e, t);
          return this.m_mapSkippedAppCount.get(r) || 0;
        }
        GetSkippedAppKey(e, t, r) {
          return `${e}_${g(t, r)}`;
        }
        GetInClientCompletedQueues(e, t) {
          const r = g(e, t);
          return this.m_mapInClientCompleted.get(r) || 0;
        }
        GetInClientCompletedQueuesCallback(e, t) {
          const r = g(e, t);
          return (
            this.m_mapInClientCompletedCallback.has(r) ||
              this.m_mapInClientCompletedCallback.set(r, new l.lu()),
            this.m_mapInClientCompletedCallback.get(r)
          );
        }
        GetExhaustedCallback(e, t) {
          const r = g(e, t);
          return (
            this.m_mapExhuastedCallback.has(r) ||
              this.m_mapExhuastedCallback.set(r, (0, l.Jc)(!1)),
            this.m_mapExhuastedCallback.get(r)
          );
        }
        BIsExhausted(e, t) {
          const r = g(e, t);
          return this.m_setExhuasted.has(r);
        }
        async LoadDiscoveryQueue(e, t, r) {
          const a = g(e, r);
          if (!this.m_transport) return 2;
          try {
            const n = (0, p.cw)(this.m_transport, e, t, r);
            t && (await _.L.invalidateQueries({ queryKey: n.queryKey }));
            const i = await _.L.fetchQuery(n);
            return (
              this.m_mapDiscoveryQueues.set(a, i),
              i.exhausted
                ? (this.m_setExhuasted.add(a),
                  this.GetExhaustedCallback(e, r).Set(!0))
                : (this.m_setExhuasted.delete(a),
                  this.GetExhaustedCallback(e, r).Set(!1)),
              this.m_mapSkippedAppCount.set(a, i.skipped || 0),
              1
            );
          } catch (t) {
            return (
              console.warn(
                "Error",
                t,
                "failed to get discovery queue type",
                e,
                "key",
                a,
              ),
              2
            );
          }
        }
        async GetDiscoveryQueueAppsOfType(e, t, r) {
          const a = g(e, r);
          return (
            (!t && this.m_mapDiscoveryQueues.has(a)) ||
              (await this.LoadDiscoveryQueue(e, t, r)),
            {
              appids: this.m_mapDiscoveryQueues.get(a).appids,
              exhausted: !!this.m_mapDiscoveryQueues.get(a).exhausted,
            }
          );
        }
        async SkipDiscoveryQueueItem(e, t, r) {
          const a = this.GetSkippedAppKey(e, t, r);
          if (!this.m_mapSkippedApps.has(a)) {
            const n = g(t, r),
              i = this.m_mapDiscoveryQueues.get(n)?.appids,
              l = i?.[i.length - 1] == e;
            this.m_mapSkippedApps.set(a, !0),
              this.m_mapSkippedAppCount.set(
                n,
                (this.m_mapSkippedAppCount.get(n) || 0) + 1,
              );
            const c = s.w.Init(o.fe);
            if (
              (c.Body().set_appid(e),
              c.Body().set_queue_type(t),
              (Boolean(r?.nSaleTagID) || Boolean(r?.strContentHubType)) &&
                c.Body().set_store_page_filter((0, p.Jy)(r, !0)),
              !this.m_transport)
            )
              return (
                console.warn(
                  "Error",
                  "no transport",
                  "failed to skip appid ",
                  e,
                ),
                void this.m_mapSkippedApps.delete(a)
              );
            const m = (
              await o.nd.SkipDiscoveryQueueItem(this.m_transport, c)
            ).GetEResult();
            1 != m && 29 != m
              ? (console.warn("Error", m, "failed to skip appid ", e),
                this.m_mapSkippedApps.delete(a))
              : l && this.MarkDiscoveryQueueCompleted(t, r);
          }
        }
        MarkDiscoveryQueueCompleted(e, t) {
          const r = g(e, t);
          if (this.m_mapInClientCompleted.has(r)) {
            const a = this.m_mapInClientCompleted.get(r) + 1;
            this.m_mapInClientCompleted.set(r, a),
              this.GetInClientCompletedQueuesCallback(e, t).Dispatch(a);
          } else
            this.m_mapInClientCompleted.set(r, 0),
              this.GetInClientCompletedQueuesCallback(e, t).Dispatch(0);
        }
        async LoadSkippedApps(e, t) {
          g(e, t);
          const r = s.w.Init(o.pS);
          if (
            (r.Body().set_steamid(u.iA.steamid),
            r.Body().set_queue_type(e),
            (Boolean(t?.nSaleTagID) || Boolean(t?.strContentHubType)) &&
              r.Body().set_store_page_filter((0, p.Jy)(t, !0)),
            !this.m_transport)
          )
            return (
              console.warn(
                "Failed to retrieve skipped apps for discovery queue, no transport.",
                e,
                t,
              ),
              []
            );
          const a = await o.nd.GetDiscoveryQueueSkippedApps(
            this.m_transport,
            r,
          );
          return 1 === a.GetEResult()
            ? a.Body().appids() || []
            : (console.warn(
                "Failed to retrieve skipped apps for discovery queue.",
                e,
                t,
                a.GetEResult(),
              ),
              []);
        }
        static s_DiscoveryQueueStore = null;
        static Init(e) {
          f.Get().m_transport = e;
        }
        static BHasTransport() {
          return Boolean(f.Get().m_transport);
        }
        static Get() {
          return (
            this.s_DiscoveryQueueStore ||
              (this.s_DiscoveryQueueStore = new f()),
            this.s_DiscoveryQueueStore
          );
        }
        constructor() {
          (0, i.Gn)(this);
        }
      }
      function w(e, t) {
        const [r, a] = (0, n.useState)(
          f.Get().GetInClientCompletedQueues(e, t),
        );
        return (
          (0, c.hL)(f.Get().GetInClientCompletedQueuesCallback(e, t), a), r
        );
      }
      function b(e, t) {
        return (0, d.gc)(f.Get().GetExhaustedCallback(e, t));
      }
      function v(e, t) {
        const r = n.useMemo(
          () => (0, u.Tc)("discovery_queue_name", "application_config"),
          [],
        );
        return "string" == typeof r && r.length > 0 ? r : "";
      }
      (0, a.Cg)([i.sH], f.prototype, "m_mapDiscoveryQueues", void 0);
    },
    14336: (e, t, r) => {
      "use strict";
      r.d(t, { mK: () => f, DW: () => g, js: () => _, tb: () => h });
      var a = r(90626),
        n = r(20194),
        i = r(54806),
        s = r(23809),
        o = r(44654),
        l = r(10622),
        c = r(17720),
        m = r(37735),
        u = r(58632),
        d = r.n(u);
      function p(e, t) {
        return new (d())(
          async (t) => {
            const r = [...t],
              a = await m.xt.GetPlayerLinkDetails(e, { steamids: r }),
              n = new Map();
            return (
              a
                .Body()
                .accounts()
                .forEach((e) => {
                  const t = e.toObject();
                  n.set(t.public_data.steamid, t);
                }),
              r.map((e) => n.get(e) ?? null)
            );
          },
          { maxBatchSize: 100, cache: !1, ...t },
        );
      }
      function _(e) {
        const t = (0, s.KV)(),
          r = a.useContext(y);
        return (0, n.I)(f(r, t, e));
      }
      function g(e) {
        const t = (0, s.KV)(),
          r = a.useContext(y);
        return (0, i.E)({ queries: e.map((e) => f(r, t, e)) });
      }
      const y = a.createContext({
        loadPersonaState: async (e, t) => {
          if (null == e) return null;
          const r = await (function (e) {
            return (w ??= p(e));
          })(t).load(c.b.InitFromAccountID(e).ConvertTo64BitString());
          return (function (e, t) {
            let r = new l.Z(e);
            const a = t?.public_data,
              n = t?.private_data;
            (r.m_bInitialized = !!t),
              (r.m_ePersonaState = n?.persona_state ?? 0),
              (r.m_strAvatarHash = a?.sha_digest_avatar
                ? (0, o.Kx)(a.sha_digest_avatar)
                : l.dV),
              (r.m_strPlayerName = a?.persona_name ?? e.ConvertTo64BitString()),
              (r.m_strAccountName = n?.account_name),
              n?.persona_state_flags &&
                (r.m_unPersonaStateFlags = n?.persona_state_flags);
            n?.game_id && (r.m_gameid = n?.game_id);
            n?.game_server_ip_address &&
              (r.m_unGameServerIP = n?.game_server_ip_address);
            n?.lobby_steam_id && (r.m_game_lobby_id = n?.lobby_steam_id);
            n?.game_extra_info && (r.m_strGameExtraInfo = n?.game_extra_info);
            a?.profile_url && (r.m_strProfileURL = a.profile_url);
            return r;
          })(c.b.InitFromAccountID(e), r);
        },
      });
      function h() {
        return a.useContext(y);
      }
      function f(e, t, r) {
        const a = "string" == typeof r ? new c.b(r).GetAccountID() : r;
        return {
          queryKey: ["PlayerSummary", a],
          queryFn: () => e.loadPersonaState(a, t),
          enabled: !!a,
        };
      }
      let w;
    },
    93973: (e, t, r) => {
      "use strict";
      r.d(t, {
        CC: () => w,
        Oz: () => f,
        Qt: () => S,
        lu: () => b,
        ns: () => v,
        os: () => C,
      });
      var a = r(34629),
        n = r(56545),
        i = r(72034),
        s = r(17645),
        o = r(81393),
        l = r(78327),
        c = r(90626),
        m = r(68797),
        u = r(6144),
        d = r(84933),
        p = r(14947),
        _ = r(58222),
        g = r(23809),
        y = r(20194);
      class h {
        m_claimState = { bCanClaimNewItem: !1, bAlreadyClaimedCurrentItem: !1 };
        m_claimedFreeItemDef;
        m_rtNextClaimTime;
        m_claimTimer;
        m_SteamInterface = null;
        m_canClaimPromise = null;
        m_claimPromise = null;
        m_claimStateChangeCallback = new u.lu();
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
                  community_item_class: 11,
                })
              : (this.m_testNextClaimFakeResponse = null),
            (this.m_claimState = e),
            this.GetClaimStateChangeCallback().Dispatch(this.m_claimState);
        }
        async ActivateProfileModifier(e) {
          const t = n.w.Init(_.fp);
          t.Body().set_communityitemid(e.communityitemid),
            t.Body().set_appid(e.appid),
            t.Body().set_activate(!0);
          const r = await _.uy.ActivateProfileModifierItem(
            this.m_SteamInterface.GetServiceTransport(),
            t,
          );
          return (
            1 != r.GetEResult() &&
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
          (0, o.wT)(
            l.iA.logged_in,
            "User must be logged to use CSaleItemClaimableRewardsStore",
          );
          const e = n.w.Init(s.c3);
          e.Body().set_language(l.TS.LANGUAGE);
          let t = null;
          try {
            const r = await s.Qm.CanClaimItem(
              this.m_SteamInterface.GetServiceTransport(),
              e,
            );
            if (1 == r.GetEResult())
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
            t = (0, m.H)(r);
          } catch (e) {
            t = (0, m.H)(e);
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
          (0, o.wT)(
            l.iA.logged_in,
            "User must be logged to use CSaleItemClaimableRewardsStore",
          ),
            (0, o.wT)(
              this.m_claimState.bCanClaimNewItem,
              "Only should be called when we previously verified you can claim something. ",
            );
          const e = n.w.Init(s.wt);
          e.Body().set_language(l.TS.LANGUAGE);
          let t = null;
          try {
            const r = await s.Qm.ClaimItem(
              this.m_SteamInterface.GetServiceTransport(),
              e,
            );
            if (1 == r.GetEResult())
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
            if (29 == r.GetEResult())
              return (
                (this.m_canClaimPromise = this.InternalLoadCanUserClaimItem()),
                this.m_canClaimPromise
              );
            t = (0, m.H)(r);
          } catch (e) {
            t = (0, m.H)(e);
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
            h.s_Singleton ||
              ((h.s_Singleton = new h()),
              h.s_Singleton.Init(),
              "dev" == l.TS.WEB_UNIVERSE &&
                (window.g_SaleItemClaimableRewardsStore = h.s_Singleton)),
            h.s_Singleton
          );
        }
        constructor() {}
        Init() {
          const e = (0, l.Tc)("loyalty_webapi_token", "application_config");
          (0, o.wT)(
            e,
            "CQuestCommunityInventoryStore: missing loyalty_webapi_token oauth permission",
          ),
            (this.m_SteamInterface = new i.D(l.TS.WEBAPI_BASE_URL, e));
        }
      }
      function f() {
        const [e, t] = (0, c.useState)(h.Get().GetClaimItemState()),
          [r, a] = (0, c.useState)(!0);
        return (
          (0, c.useEffect)(() => {
            h.Get()
              .LoadCanUserClaimItem()
              .then(t)
              .finally(() => a(!1));
          }, []),
          (0, d.hL)(h.Get().GetClaimStateChangeCallback(), t),
          { ...e, bLoading: r }
        );
      }
      function w() {
        return { fnClaimItem: h.Get().UserClaimItem };
      }
      function b() {
        return { fnSetClaimState: h.Get().TEST_OverrideClaimState };
      }
      async function v(e) {
        return h.Get().ActivateProfileModifier(e);
      }
      function S(e, t, r) {
        const a = (0, g.KV)();
        return (0, y.I)({
          queryKey: [`SaleRewardsGetDefinition_${e}_${t}_${r}`],
          queryFn: async () =>
            (async function (e, t, r, a) {
              const i = n.w.Init(s.R4);
              return (
                i.Body().set_sale_def_type(t),
                i.Body().set_language(r),
                i.Body().set_include_community_item_def(a),
                (await s.Qm.GetCurrentDefinition(e, i)).Body().toObject()
              );
            })(a, e, t, r),
          staleTime: 1 / 0,
        });
      }
      function C(e, t, r, a) {
        const i = (0, g.KV)();
        return (0, y.I)({
          queryKey: [`GetClaimedSaleRewards_${e}_${t}_${r}_${a}`],
          queryFn: async () =>
            (async function (e, t, r, a) {
              const i = n.w.Init(s.Ju);
              return (
                i.Body().set_sale_def_type(t),
                i.Body().set_language(r),
                i.Body().set_include_community_item_def(a),
                (await s.Qm.GetClaimedSaleRewards(e, i)).Body().toObject()
              );
            })(i, e, t, r),
          staleTime: 1 / 0,
        });
      }
      (0, a.Cg)([d.oI], h.prototype, "TEST_OverrideClaimState", null),
        (0, a.Cg)([d.oI], h.prototype, "UserClaimItem", null);
    },
    3734: (e, t, r) => {
      "use strict";
      r.d(t, { E2: () => p, PG: () => g });
      var a = r(90626),
        n = r(20194),
        i = r(56545),
        s = r(94601),
        o = r(72839),
        l = r(82097),
        c = r(81393),
        m = r(23809);
      const u = a.createContext({}),
        d = () => a.useContext(u);
      function p(e) {
        let { defaultOptions: t, children: r } = e,
          n = a.useMemo(() => ({ defaultOptions: t || {} }), [t]);
        return a.createElement(u.Provider, { value: n }, r);
      }
      const _ = "StoreQueryStore";
      function g(e, t, r, l) {
        let u = d();
        const p = (0, m.KV)();
        u ||
          (0, c.wT)(!1, "useStoreQuery called outside of a <StoreQueryRoot>");
        let g = u.defaultOptions;
        const h = a.useMemo(() => {
          let e = [];
          return (
            l?.content_descriptors_excluded
              ? (e = l.content_descriptors_excluded)
              : g?.content_descriptors_excluded &&
                (e = g.content_descriptors_excluded),
            { ...t, filters: { content_descriptors_excluded: e, ...t.filters } }
          );
        }, [t, l, g]);
        let f;
        void 0 !== l?.override_country_code
          ? (f = l.override_country_code)
          : void 0 !== g?.override_country_code &&
            (f = g.override_country_code);
        let w = { staleTime: 36e5 };
        l?.reactQuery && (w = { ...w, ...l.reactQuery });
        const b = [_, h, r ?? {}, l ?? {}];
        return (0, n.I)({
          queryKey: b,
          queryFn: () =>
            (async function (e, t, r, a, n) {
              const l = i.w.Init(s.iU);
              (0, o.rV)(l), a && (0, o.Bn)(l, a);
              n && l.Body().set_override_country_code(n);
              l.Body().set_query(s.nu.fromObject(r)),
                l.Body().set_query_name(t);
              const c = await s.Fs.Query(e, l);
              if (1 != c.GetEResult())
                throw `Error executing StoreQuery "${t}", EResult: ${c.GetEResult()}`;
              return new y(c, a);
            })(p, e, h, r ?? {}, f),
          ...w,
        });
      }
      class y {
        m_Items = void 0;
        m_rgItemIDs = void 0;
        m_metadata = void 0;
        constructor(e, t) {
          this.ReadResults(e, t);
        }
        GetItems() {
          return this.m_Items;
        }
        GetItemIDs() {
          return this.m_rgItemIDs;
        }
        GetMetadata() {
          return this.m_metadata;
        }
        ReadResults(e, t) {
          this.m_Items ||
            ((0, c.wT)(
              0 == e.Body().metadata().start(),
              "Empty item list - expected to start at 0",
            ),
            (this.m_Items = []));
          const r = e.Body().ids() || [];
          if (
            ((this.m_rgItemIDs = r.map((e) => e.toObject())),
            e.Body().store_items())
          )
            for (const r of e.Body().store_items()) {
              const e = l.A.Get().ReadItem(r, t);
              e && this.m_Items.push(e);
            }
          this.m_metadata = e.Body().metadata().toObject();
        }
      }
    },
    69409: (e, t, r) => {
      "use strict";
      r.d(t, { m: () => d });
      var a = r(90626),
        n = r(22837),
        i = r(38390),
        s = r(52038),
        o = r(61859),
        l = r(61336),
        c = r(78327),
        m = r(15392),
        u = r(27666);
      function d(e) {
        const { gidEvent: t } = e,
          r = (0, i.RR)(t),
          [d, p] = (0, a.useMemo)(() => {
            if (
              r?.jsondata?.localized_sale_product_banner?.length > 0 &&
              r?.jsondata?.localized_sale_product_mobile_banner?.length > 0
            ) {
              const e = (0, n.sf)(c.TS.LANGUAGE),
                t = o.NT.GetWithFallback(
                  r.jsondata.localized_sale_product_banner,
                  e,
                ),
                a = o.NT.GetWithFallback(
                  r.jsondata.localized_sale_product_mobile_banner,
                  e,
                );
              if (t?.length > 0 && a?.length > 0)
                return [
                  u.z.GenerateURLFromHashAndExt(r.clanSteamID, t),
                  u.z.GenerateURLFromHashAndExt(r.clanSteamID, a),
                ];
            }
            return [null, null];
          }, [r]);
        return d?.length > 0 && p?.length > 0
          ? a.createElement(
              "a",
              { href: (0, l.k2)(r.GetSaleURL()), className: m.Link },
              a.createElement("img", {
                src: d,
                className: (0, s.A)(m.Banner, m.Big),
              }),
              a.createElement("img", {
                src: p,
                className: (0, s.A)(m.Banner, m.Mobile),
              }),
            )
          : null;
      }
    },
    96236: (e, t, r) => {
      "use strict";
      r.d(t, { K: () => l });
      var a = r(34629),
        n = r(90626),
        i = r(84933),
        s = r(60383),
        o = r(76217);
      class l extends n.Component {
        state = {
          bRenderChildren: !1,
          nPrevRenderWidth: 0,
          nPrevRenderHeight: 0,
        };
        m_refContainer = n.createRef();
        BLoadAndUnload() {
          return "LoadAndUnload" == (this.props.mode || "JustLoad");
        }
        OnVisibilityChange(e) {
          let t = this.state.bRenderChildren;
          if (t == e) return;
          if (t && !this.BLoadAndUnload()) return;
          let r = 0,
            a = 0;
          if (this.m_refContainer.current) {
            const e = this.m_refContainer.current.GetBoundingClientRect();
            e && ((r = e.width), (a = e.height));
          }
          this.setState({
            bRenderChildren: e,
            nPrevRenderWidth: r,
            nPrevRenderHeight: a,
          }),
            e && this.props.onRender && this.props.onRender();
        }
        render() {
          const {
              placeholderWidth: e,
              placeholderHeight: t,
              holdGampadFocus: r,
              onRender: a,
              style: i,
              mode: l,
              ...c
            } = this.props,
            m = this.state.bRenderChildren;
          let u = i;
          if (!m) {
            const r = this.state.nPrevRenderWidth || e,
              a = this.state.nPrevRenderHeight || t;
            (void 0 === a && void 0 === r) ||
              (u = { ...i, minHeight: a, minWidth: r });
          }
          const d = this.BLoadAndUnload() ? "repeated" : "once";
          let p = n.createElement(
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
            r && (p = n.createElement(o.Z, { focusableIfEmpty: !0 }, p)), p
          );
        }
      }
      (0, a.Cg)([i.oI], l.prototype, "OnVisibilityChange", null);
    },
    38405: (e, t, r) => {
      "use strict";
      r.d(t, { g: () => A });
      var a = r(65946),
        n = r(90626),
        i = r(30894),
        s = r(82097),
        o = r(3734),
        l = r(26749),
        c = r(52038),
        m = r(61859),
        u = r(78327),
        d = r(39199),
        p = r(71477),
        _ = r.n(p),
        g = r(93973),
        y = r(62490),
        h = r(20194),
        f = r(76217),
        w = r(60383),
        b = r(39777),
        v = r(42834),
        S = r(15830);
      function C(e) {
        const {
            arrDiscoveryApps: t,
            onClick: r,
            className: a,
            bDisableAnimation: i = !1,
            children: s,
            ...o
          } = e,
          l = (0, u.Qn)(),
          [d, p] = (0, n.useState)(!l),
          _ = n.useCallback(
            (e) => {
              l || p(e);
            },
            [l],
          );
        return n.createElement(
          w.J,
          { trigger: "repeated", onVisibilityChange: _ },
          n.createElement(
            f.Z,
            {
              focusable: !0,
              onGamepadFocus: () => p(!0),
              onMouseEnter: () => l && p(!0),
              onGamepadBlur: () => p(!1),
              onMouseLeave: () => l && p(!1),
              onActivate: r,
              onOKActionDescription: (0, m.we)("#DiscoveryQueue_OpenWizard"),
              className: (0, c.A)(
                S.DiscoveryQueueWidgetCtn,
                a,
                void 0 !== t && S.Initialized,
              ),
              ...o,
            },
            n.createElement(E, { rgAppIDs: t, bAnimationEnabled: !i && d }),
            s,
          ),
        );
      }
      let I;
      function E(e) {
        const {
            rgAppIDs: t,
            bAnimationEnabled: r = !0,
            nCapsuleWidth: a = 320,
          } = e,
          [i, s] = n.useState(null);
        return (
          n.useEffect(() => {
            if (!r || !i) return;
            let e;
            I || (I = performance.now());
            const t = () => {
              const r =
                (((performance.now() - I) / 40) %
                  (i.offsetWidth - 3 * a - 16)) +
                a;
              (i.style.transform = `translateX( -${r}px )`),
                (e = requestAnimationFrame(t));
            };
            return (
              (e = requestAnimationFrame(t)), () => cancelAnimationFrame(e)
            );
          }, [i, r, a]),
          t && t.length
            ? n.createElement(
                "div",
                {
                  className: S.AppCarouselPosition,
                  style: { "--capsule-width": `${a}px` },
                },
                n.createElement(
                  "div",
                  {
                    ref: s,
                    className: (0, c.A)(S.AppCarouselCtn, "vt-scrollable"),
                    style: { transform: `translateX( -${a}px )` },
                  },
                  t.map((e) =>
                    n.createElement(B, { key: "Capsule_" + e, appID: e }),
                  ),
                  [...t, ...t]
                    .slice(0, 3)
                    .map((e, t) =>
                      n.createElement(B, {
                        key: `Capsule2_${t}_${e}`,
                        appID: e,
                      }),
                    ),
                ),
              )
            : null
        );
      }
      function B(e) {
        const { appID: t } = e,
          r = { appid: t },
          { data: a } = (0, b.J$)(r),
          i = (0, v.pd)(t),
          s = (0, v.DT)(r) || [],
          { data: o } = (0, b.lv)(r);
        if (!i) return null;
        let l = s.length
          ? (0, v.bu)(s[0], "600x338")
          : o && (0, v.b0)(o, "main_capsule");
        const m = {
          backgroundImage:
            "radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgba(0, 0, 0, 1) 92.5%)" +
            (l ? `, url('${l}')` : ""),
        };
        return n.createElement(
          "div",
          { className: S.AppCapsuleCtn, style: m },
          n.createElement(
            "div",
            { className: (0, c.A)(S.CapsuleColumn, S.LibraryImage) },
            n.createElement("img", { src: i, alt: a?.name }),
          ),
          n.createElement(
            "div",
            { className: S.CapsuleColumn },
            n.createElement("div", { className: S.AppName }, a?.name),
          ),
        );
      }
      var D = r(90511);
      function A(e) {
        return (0, l.G)()
          ? n.createElement(
              R,
              null,
              n.createElement(G, null),
              u.iA.logged_in
                ? n.createElement(T, { ...e })
                : n.createElement(N, { ...e }),
            )
          : null;
      }
      function R(e) {
        const [t, r] = (0, i.L2)();
        let s = (0, a.q3)(() => r.ExcludedContentDescriptor),
          l = n.useMemo(() => ({ content_descriptors_excluded: s }), [s]);
        return t
          ? null
          : n.createElement(o.E2, { defaultOptions: l }, e.children);
      }
      function T(e) {
        const {
            eStoreDiscoveryQueueType: t,
            strQueueDescriptionOverride: r,
            ...a
          } = e,
          { showDiscoveryQueue: i, bQueueVisible: o } = (0, D.GV)(t, a),
          [l, c] = (function (e, t) {
            const { data: r } = (0, h.I)({
              queryKey: ["DiscoveryQueueLoader", e, t],
              queryFn: async () => {
                const { appids: r, exhausted: a } = await d.aI
                  .Get()
                  .GetDiscoveryQueueAppsOfType(e, !1, t);
                let n = { ...D.LB, include_screenshots: !0 };
                return (
                  await s.A.Get().QueueMultipleAppRequests(r ?? [], n),
                  { rgDiscoveryApps: r, exhausted: a }
                );
              },
              enabled: u.iA.logged_in,
            });
            return [r?.rgDiscoveryApps, r?.exhausted];
          })(t, a.storePageFilter),
          m = n.useCallback(() => {
            !c && i();
          }, [c, i]),
          p = n.useId();
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            C,
            {
              "aria-labelledby": p,
              onClick: m,
              arrDiscoveryApps: l,
              bDisableAnimation: o,
              className: _().DiscoveryQueueWidget,
            },
            !c && n.createElement(M, { id: p, strQueueDescriptionOverride: r }),
          ),
        );
      }
      function M(e) {
        const { strQueueDescriptionOverride: t, id: r } = e,
          a = t ?? (0, m.we)("#DiscoveryQueue_WidgetHeader");
        return n.createElement(
          "div",
          {
            id: r,
            className: (0, c.A)(_().WidgetHeaderCtn, "WidgetHeaderCtn"),
          },
          n.createElement(
            "div",
            { className: _().WidgetHeaderText },
            (0, m.we)("#DiscoveryQueue_WidgetHeader_Yours"),
          ),
          n.createElement("div", { className: _().WidgetHeaderSubText }, a),
        );
      }
      function N(e) {
        const t = (function (e) {
            let { data: t } = (0, o.PG)(
              "DiscoveryQueueWidget",
              {
                sort: 11,
                start: 0,
                count: 12,
                filters: { type_filters: { include_games: !0 } },
              },
              { ...D.LB, include_screenshots: !0 },
              { reactQuery: { enabled: e, staleTime: 1 / 0 } },
            );
            return (0, n.useMemo)(
              () => t && t.GetItemIDs().map((e) => e.appid),
              [t],
            );
          })(!0),
          r = n.useCallback(() => {
            window.location.href = `${u.TS.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
          }, []);
        return n.createElement(
          C,
          { onClick: r, arrDiscoveryApps: t ? y.Nv(t) : void 0 },
          n.createElement(
            "div",
            { className: (0, c.A)(_().WidgetHeaderCtn, "WidgetHeaderCtn") },
            n.createElement(
              "div",
              { className: _().WidgetHeaderText },
              (0, m.we)("#DiscoveryQueue_WidgetHeader_Yours"),
            ),
            n.createElement(
              "div",
              { className: _().WidgetHeaderSubText },
              (0, m.we)("#DiscoveryQueue_WidgetHeader_LoggedOut"),
            ),
            n.createElement(
              "div",
              { className: _().LoginButton },
              (0, m.we)("#DiscoveryQueue_Error_Login_Title"),
            ),
          ),
        );
      }
      function G() {
        const e = (0, g.Qt)(2, u.TS.LANGUAGE, !0),
          t = (0, u.Qn)();
        if (!e.data?.definition || 0 == (e.data?.reward_items?.length ?? 0))
          return null;
        const r = e?.data.reward_items ?? [];
        (0, y.fW)(r);
        const a = r.slice(0, 3);
        let i = null;
        return (
          u.iA.logged_in &&
            !t &&
            (i = n.createElement(
              n.Fragment,
              null,
              " - ",
              n.createElement(
                "a",
                { href: u.TS.COMMUNITY_BASE_URL + "my/itemcollection" },
                (0, m.we)("#DiscoveryQueue_SaleStatus_Link"),
              ),
            )),
          n.createElement(
            "div",
            { className: _().SaleTopSection },
            n.createElement(Q, { rgRewardItems: a }),
            n.createElement(
              "div",
              { className: _().SaleTextCtn },
              n.createElement(
                "div",
                { className: _().BoldText },
                (0, m.we)("#DiscoveryQueue_Widget_SaleDesc"),
              ),
              n.createElement(
                "div",
                null,
                (0, m.we)(
                  "#DiscoveryQueue_Widget_SaleTitle",
                  (0, m._l)(
                    e.data.definition.rtime_end_time ?? 0,
                    !1,
                    !1,
                    !1,
                    !1,
                  ),
                ),
                i,
              ),
            ),
          )
        );
      }
      function Q(e) {
        const { rgRewardItems: t } = e,
          r = t.map((e) => {
            if (!e.community_definition || !e.community_definition.item_name)
              return null;
            const t = `${u.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${e.appid}/${e.community_definition.item_image_small}`;
            return n.createElement(
              "div",
              {
                key: e.community_definition.item_name.toString(),
                className: _().SaleSticker,
              },
              n.createElement("img", { src: t }),
            );
          });
        return n.createElement(
          "div",
          { className: _().StickerArrangement },
          y.Nv(r),
        );
      }
    },
    5907: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => ke });
      var a = r(45699),
        n = r(76217),
        i = r(37788),
        s = r(23310),
        o = r(23809),
        l = r(62093),
        c = r(60014),
        m = r(90626),
        u = r(13871),
        d = r(30894),
        p = r(93973),
        _ = r(82097),
        g = r(55263),
        y = r(12155),
        h = r(32630),
        f = r(4434),
        w = r(52038),
        b = r(61859),
        v = r(60778),
        S = r(25489),
        C = r(44691),
        I = r(78327),
        E = r(39199),
        B = r(40594);
      const D = ({ nPercent: e, size: t = 120, strokeWidth: r = 20 }) => {
        const a = (t - r) / 2,
          n = 2 * Math.PI * a,
          i = n - (e / 100) * n,
          s = 100 == e;
        return m.createElement(
          "div",
          { className: (0, w.A)({ [B.Circular]: !0, [B.Full]: s }) },
          m.createElement(
            "svg",
            { width: t, height: t, style: { transform: "rotate(-90deg)" } },
            m.createElement("circle", {
              cx: t / 2,
              cy: t / 2,
              r: a,
              stroke: "#0c131d",
              strokeWidth: r,
              fill: "none",
            }),
            m.createElement("circle", {
              cx: t / 2,
              cy: t / 2,
              r: a,
              stroke: "#1a9fff",
              strokeWidth: r,
              fill: "none",
              strokeDasharray: n,
              strokeDashoffset: i,
              style: { transition: "stroke-dashoffset 0.3s ease-in-out" },
            }),
          ),
        );
      };
      var A,
        R = r(22797),
        T = r(10224),
        M = r(20019),
        N = r(62792),
        G = r(26101),
        Q = r(94095),
        F = r(44986),
        x = r(32754),
        k = r(20713),
        q = r(47453),
        U = r(20194),
        P = r(1035),
        W = r(34181),
        L = r(17720),
        z = r(4796),
        O = r(67165),
        j = r(56545),
        H = r(80613),
        K = r.n(H),
        V = r(89068);
      class Z extends H.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.recommendationid || V.Sg(Z.M()),
            H.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  recommendationid: {
                    n: 1,
                    br: V.qM.readUint64String,
                    bw: V.gp.writeUint64String,
                  },
                  review_text: {
                    n: 2,
                    br: V.qM.readString,
                    bw: V.gp.writeString,
                  },
                  voted_up: { n: 3, br: V.qM.readBool, bw: V.gp.writeBool },
                  is_public: { n: 4, br: V.qM.readBool, bw: V.gp.writeBool },
                  language: { n: 5, br: V.qM.readString, bw: V.gp.writeString },
                  is_in_early_access: {
                    n: 6,
                    br: V.qM.readBool,
                    bw: V.gp.writeBool,
                  },
                  received_compensation: {
                    n: 7,
                    br: V.qM.readBool,
                    bw: V.gp.writeBool,
                  },
                  comments_disabled: {
                    n: 8,
                    br: V.qM.readBool,
                    bw: V.gp.writeBool,
                  },
                  hide_in_steam_china: {
                    n: 9,
                    br: V.qM.readBool,
                    bw: V.gp.writeBool,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = V.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return V.BT(Z.M(), e, t);
        }
        static fromObject(e) {
          return V.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return V.zj(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          V.i0(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Update_Request";
        }
      }
      class $ extends H.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), H.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new $();
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Update_Response";
        }
      }
      class Y extends H.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.reaction_type || V.Sg(Y.M()),
            H.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  reaction_type: {
                    n: 1,
                    br: V.qM.readUint32,
                    bw: V.gp.writeUint32,
                  },
                  count: { n: 2, br: V.qM.readUint32, bw: V.gp.writeUint32 },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = V.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return V.BT(Y.M(), e, t);
        }
        static fromObject(e) {
          return V.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return V.zj(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          V.i0(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_LoyaltyReaction";
        }
      }
      class X extends H.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.recommendationid || V.Sg(X.M()),
            H.Message.initialize(this, e, 0, -1, [27, 40, 53], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  recommendationid: {
                    n: 1,
                    br: V.qM.readUint64String,
                    bw: V.gp.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: V.qM.readUint64String,
                    bw: V.gp.writeUint64String,
                  },
                  appid: { n: 3, br: V.qM.readUint32, bw: V.gp.writeUint32 },
                  review: { n: 4, br: V.qM.readString, bw: V.gp.writeString },
                  time_created: {
                    n: 5,
                    br: V.qM.readUint32,
                    bw: V.gp.writeUint32,
                  },
                  time_updated: {
                    n: 6,
                    br: V.qM.readUint32,
                    bw: V.gp.writeUint32,
                  },
                  votes_up: { n: 7, br: V.qM.readUint32, bw: V.gp.writeUint32 },
                  votes_down: {
                    n: 8,
                    br: V.qM.readUint32,
                    bw: V.gp.writeUint32,
                  },
                  vote_score: { n: 9, br: V.qM.readFloat, bw: V.gp.writeFloat },
                  language: {
                    n: 10,
                    br: V.qM.readString,
                    bw: V.gp.writeString,
                  },
                  comment_count: {
                    n: 11,
                    br: V.qM.readUint32,
                    bw: V.gp.writeUint32,
                  },
                  voted_up: { n: 12, br: V.qM.readBool, bw: V.gp.writeBool },
                  is_public: { n: 13, br: V.qM.readBool, bw: V.gp.writeBool },
                  moderator_hidden: {
                    n: 14,
                    br: V.qM.readBool,
                    bw: V.gp.writeBool,
                  },
                  flagged_by_developer: {
                    n: 15,
                    br: V.qM.readEnum,
                    bw: V.gp.writeEnum,
                  },
                  report_score: {
                    n: 16,
                    br: V.qM.readUint32,
                    bw: V.gp.writeUint32,
                  },
                  steamid_moderator: {
                    n: 17,
                    br: V.qM.readUint64String,
                    bw: V.gp.writeUint64String,
                  },
                  steamid_developer: {
                    n: 18,
                    br: V.qM.readUint64String,
                    bw: V.gp.writeUint64String,
                  },
                  steamid_dev_responder: {
                    n: 19,
                    br: V.qM.readUint64String,
                    bw: V.gp.writeUint64String,
                  },
                  developer_response: {
                    n: 20,
                    br: V.qM.readString,
                    bw: V.gp.writeString,
                  },
                  time_developer_responded: {
                    n: 21,
                    br: V.qM.readUint32,
                    bw: V.gp.writeUint32,
                  },
                  developer_flag_cleared: {
                    n: 22,
                    br: V.qM.readBool,
                    bw: V.gp.writeBool,
                  },
                  written_during_early_access: {
                    n: 23,
                    br: V.qM.readBool,
                    bw: V.gp.writeBool,
                  },
                  votes_funny: {
                    n: 24,
                    br: V.qM.readUint32,
                    bw: V.gp.writeUint32,
                  },
                  received_compensation: {
                    n: 25,
                    br: V.qM.readBool,
                    bw: V.gp.writeBool,
                  },
                  unverified_purchase: {
                    n: 26,
                    br: V.qM.readBool,
                    bw: V.gp.writeBool,
                  },
                  review_qualities: {
                    n: 27,
                    r: !0,
                    q: !0,
                    br: V.qM.readEnum,
                    pbr: V.qM.readPackedEnum,
                    bw: V.gp.writeRepeatedEnum,
                  },
                  weighted_vote_score: {
                    n: 28,
                    br: V.qM.readFloat,
                    bw: V.gp.writeFloat,
                  },
                  moderation_note: {
                    n: 29,
                    br: V.qM.readString,
                    bw: V.gp.writeString,
                  },
                  payment_method: {
                    n: 30,
                    br: V.qM.readInt32,
                    bw: V.gp.writeInt32,
                  },
                  playtime_2weeks: {
                    n: 31,
                    br: V.qM.readInt32,
                    bw: V.gp.writeInt32,
                  },
                  playtime_forever: {
                    n: 32,
                    br: V.qM.readInt32,
                    bw: V.gp.writeInt32,
                  },
                  last_playtime: {
                    n: 33,
                    br: V.qM.readInt32,
                    bw: V.gp.writeInt32,
                  },
                  comments_disabled: {
                    n: 34,
                    br: V.qM.readBool,
                    bw: V.gp.writeBool,
                  },
                  playtime_at_review: {
                    n: 35,
                    br: V.qM.readInt32,
                    bw: V.gp.writeInt32,
                  },
                  approved_for_china: {
                    n: 36,
                    br: V.qM.readBool,
                    bw: V.gp.writeBool,
                  },
                  ban_check_result: {
                    n: 37,
                    br: V.qM.readEnum,
                    bw: V.gp.writeEnum,
                  },
                  refunded: { n: 38, br: V.qM.readBool, bw: V.gp.writeBool },
                  account_score_spend: {
                    n: 39,
                    br: V.qM.readInt32,
                    bw: V.gp.writeInt32,
                  },
                  reactions: { n: 40, c: Y, r: !0, q: !0 },
                  ipaddress: {
                    n: 41,
                    br: V.qM.readString,
                    bw: V.gp.writeString,
                  },
                  hidden_in_steam_china: {
                    n: 42,
                    br: V.qM.readBool,
                    bw: V.gp.writeBool,
                  },
                  steam_china_location: {
                    n: 43,
                    br: V.qM.readString,
                    bw: V.gp.writeString,
                  },
                  category_ascii_pct: {
                    n: 44,
                    br: V.qM.readUint32,
                    bw: V.gp.writeUint32,
                  },
                  category_meme_pct: {
                    n: 45,
                    br: V.qM.readUint32,
                    bw: V.gp.writeUint32,
                  },
                  category_offtopic_pct: {
                    n: 46,
                    br: V.qM.readUint32,
                    bw: V.gp.writeUint32,
                  },
                  category_uninformative_pct: {
                    n: 47,
                    br: V.qM.readUint32,
                    bw: V.gp.writeUint32,
                  },
                  category_votefarming_pct: {
                    n: 48,
                    br: V.qM.readUint32,
                    bw: V.gp.writeUint32,
                  },
                  deck_playtime_at_review: {
                    n: 49,
                    br: V.qM.readInt32,
                    bw: V.gp.writeInt32,
                  },
                  is_bot_review_pct: {
                    n: 50,
                    br: V.qM.readUint32,
                    bw: V.gp.writeUint32,
                  },
                  positivity_pct: {
                    n: 51,
                    br: V.qM.readUint32,
                    bw: V.gp.writeUint32,
                  },
                  tags: {
                    n: 53,
                    r: !0,
                    q: !0,
                    br: V.qM.readUint64String,
                    pbr: V.qM.readPackedUint64String,
                    bw: V.gp.writeRepeatedUint64String,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = V.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return V.BT(X.M(), e, t);
        }
        static fromObject(e) {
          return V.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return V.zj(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          V.i0(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "RecommendationDetails";
        }
      }
      class J extends H.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.appid || V.Sg(J.M()),
            H.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  appid: { n: 1, br: V.qM.readUint32, bw: V.gp.writeUint32 },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = V.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return V.BT(J.M(), e, t);
        }
        static fromObject(e) {
          return V.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return V.zj(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          V.i0(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetFriendsRecommendedApp_Request";
        }
      }
      class ee extends H.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.accountids_recommended || V.Sg(ee.M()),
            H.Message.initialize(this, e, 0, -1, [1, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  accountids_recommended: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: V.qM.readUint32,
                    pbr: V.qM.readPackedUint32,
                    bw: V.gp.writeRepeatedUint32,
                  },
                  accountids_not_recommended: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: V.qM.readUint32,
                    pbr: V.qM.readPackedUint32,
                    bw: V.gp.writeRepeatedUint32,
                  },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = V.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return V.BT(ee.M(), e, t);
        }
        static fromObject(e) {
          return V.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return V.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          V.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetFriendsRecommendedApp_Response";
        }
      }
      class te extends H.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.requests || V.Sg(te.M()),
            H.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: { requests: { n: 1, c: re, r: !0, q: !0 } },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = V.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return V.BT(te.M(), e, t);
        }
        static fromObject(e) {
          return V.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return V.zj(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          V.i0(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Request";
        }
      }
      class re extends H.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.steamid || V.Sg(re.M()),
            H.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  steamid: {
                    n: 1,
                    br: V.qM.readUint64String,
                    bw: V.gp.writeUint64String,
                  },
                  appid: { n: 2, br: V.qM.readUint32, bw: V.gp.writeUint32 },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = V.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return V.BT(re.M(), e, t);
        }
        static fromObject(e) {
          return V.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return V.zj(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          V.i0(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Request_RecommendationRequest";
        }
      }
      class ae extends H.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.recommendations || V.Sg(ae.M()),
            H.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: { recommendations: { n: 1, c: X, r: !0, q: !0 } },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = V.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return V.BT(ae.M(), e, t);
        }
        static fromObject(e) {
          return V.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return V.zj(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          V.i0(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Response";
        }
      }
      !(function (e) {
        (e.Update = function (e, t) {
          return e.SendMsg("UserReviews.Update#1", (0, j.I8)(Z, t), $, {
            ePrivilege: 3,
          });
        }),
          (e.GetFriendsRecommendedApp = function (e, t) {
            return e.SendMsg(
              "UserReviews.GetFriendsRecommendedApp#1",
              (0, j.I8)(J, t),
              ee,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetIndividualRecommendations = function (e, t) {
            return e.SendMsg(
              "UserReviews.GetIndividualRecommendations#1",
              (0, j.I8)(te, t),
              ae,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          });
      })(A || (A = {}));
      var ne = r(41735),
        ie = r.n(ne),
        se = r(3734);
      class oe {
        static async LoadFriendsRecommendedApp(e, t) {
          const r = j.w.Init(J);
          r.Body().set_appid(t);
          const a = await A.GetFriendsRecommendedApp(e, r),
            n = a.GetEResult();
          if (1 == n) return a.Body().toObject();
          throw `Error ${n} failed to call GetFriendsRecommendedApp ${t}`;
        }
        static async LoadStoreRelevanceData(e) {
          let t = { appid: e },
            r = { arrSimilarPlayedApps: [], bRecommendedByIR: !1 };
          const a = (
            await ie().get(
              `${I.TS.STORE_BASE_URL}explore/ajaxgetstorerelevancedata`,
              { params: t, withCredentials: !0, timeout: 1e4 },
            )
          ).data;
          return (
            a &&
              1 == a.success &&
              (a.results.similar_played_apps &&
                (r.arrSimilarPlayedApps = a.results.similar_played_apps.map(
                  (e) => ({
                    appid: e.appid,
                    playtimeForever: e.playtime_forever,
                  }),
                )),
              a.results.recommended_by_ir && (r.bRecommendedByIR = !0)),
            r
          );
        }
      }
      var le = r(57834),
        ce = r.n(le),
        me = r(14336),
        ue = r(26505);
      const de = new v.wd("AppRelevance").Debug;
      function pe(e) {
        const {
            appID: t,
            bShowAvatars: r,
            storeItem: a,
            bHideDescription: n,
            bShowCuratorInfo: i,
            bShowCreatorInfo: s,
          } = e,
          l = (0, ue.Nd)(t),
          c = (function (e) {
            const t = (0, o.KV)();
            return (0, U.I)({
              queryKey: ["AppRelevanceStore", "FriendsRecommended", e],
              queryFn: () => oe.LoadFriendsRecommendedApp(t, e),
              enabled: I.iA.logged_in,
            });
          })(t),
          u = (function (e) {
            return (0, U.I)({
              queryKey: ["AppRelevanceStore", "StoreRelevance", e],
              queryFn: () => oe.LoadStoreRelevanceData(e),
              enabled: I.iA.logged_in,
            });
          })(t),
          p = (function () {
            const { data: e } = (0, se.PG)("App Relevance Store Top Sellers", {
              sort: 11,
              start: 0,
              count: 100,
            });
            return e;
          })(),
          g = (0, U.I)({
            queryKey: ["SimilarPlayedAppsLoad", t],
            queryFn: () =>
              _.A.Get().QueueMultipleAppRequests(
                u.data.arrSimilarPlayedApps?.map((e) => e.appid),
                { include_basic_info: !0, include_assets: !0 },
              ),
            enabled: u.isSuccess,
          }),
          y = (function (e, t) {
            const r = (0, m.useMemo)(
              () => d.Fm.Get().GetRecommendingCuratorsForApp(e) || [],
              [e],
            );
            return (0, U.I)({
              queryKey: ["RecommendingCurators", e],
              queryFn: () =>
                Promise.all(
                  r?.map((e) => z.ac.LoadClanInfoForClanAccountID(e)),
                ),
              enabled: !!t && r && r.length > 0,
            });
          })(t, i),
          h = (0, m.useMemo)(() => {
            let e = [];
            return (
              a &&
                ((e = e.concat(
                  a
                    .GetAllFranchiseCreatorClans()
                    .map((e) => ({ nAccountID: e, type: "franchise" })),
                )),
                (e = e.concat(
                  a
                    .GetAllDeveloperCreatorClans()
                    .map((e) => ({ nAccountID: e, type: "developer" })),
                )),
                (e = e.concat(
                  a
                    .GetAllPublisherCreatorClans()
                    .map((e) => ({ nAccountID: e, type: "publisher" })),
                )),
                (e = e.filter((e) =>
                  d.Fm.Get().BIsFollowingCurator(e.nAccountID),
                ))),
              e
            );
          }, [a]),
          f = (0, U.I)({
            queryKey: ["FollowedCreators", t],
            queryFn: () =>
              z.ac
                .LoadClanInfoForClanAccountID(h[0].nAccountID)
                .then((e) => ({ clanInfo: e, type: h[0].type })),
            enabled: !!s && h && h.length > 0,
          }),
          v = (0, U.I)({
            queryKey: ["PlayerSummaries", t, r],
            queryFn: async () => {
              let e = [],
                t = [],
                a = [];
              const n = r ? 10 : 1;
              for (
                let t = 0;
                t < c.data.accountids_recommended?.length && t < n;
                t++
              ) {
                const r = L.b.InitFromAccountID(
                  c.data.accountids_recommended[t],
                );
                e.push(r.ConvertTo64BitString());
              }
              for (let e = 0; e < l.data.in_wishlist?.length && e < n; e++) {
                const r = new L.b(l.data.in_wishlist[e].steamid);
                t.push(r.ConvertTo64BitString());
              }
              for (let e = 0; e < l.data.owns?.length && e < n; e++) {
                const t = new L.b(l.data.owns[e].steamid);
                a.push(t.ConvertTo64BitString());
              }
              return {
                rgRecommendedFriends: e,
                rgWishlistFriends: t,
                rgOwnedFriends: a,
              };
            },
            enabled: c.isSuccess && l.isSuccess,
          });
        if (
          !p ||
          g.isLoading ||
          u.isLoading ||
          c.isLoading ||
          l.isLoading ||
          y.isLoading ||
          f.isLoading ||
          v.isLoading
        )
          return m.createElement(R.t, { size: "medium", position: "center" });
        let S = [];
        u.isSuccess &&
          u.data.arrSimilarPlayedApps &&
          u.data.arrSimilarPlayedApps.forEach((e) => {
            const r = _.A.Get().GetApp(e.appid);
            r
              ? S.push(
                  m.createElement(ye, {
                    key: e.appid,
                    lifetimePlaytime: e.playtimeForever,
                    storeItem: r,
                  }),
                )
              : console.error("Failed to load store data ", t);
          });
        const C = p.GetItemIDs().findIndex((e) => e.appid === t),
          E = u.data?.bRecommendedByIR,
          B = S.length > 0,
          D = l.data?.owns?.length,
          A = l.data?.in_wishlist?.length,
          T = c.data?.accountids_recommended?.length;
        let M = 0;
        return (
          D > 0 && M++,
          A > 0 && M++,
          T > 0 && M++,
          E && M++,
          C >= 0 && M++,
          S.length > 0 && M++,
          i && y?.data?.length > 0 && M++,
          s && Boolean(f.data) && M++,
          de(
            "FriendsOwned: ",
            D,
            " FriendsWishlisted: ",
            A,
            "cRecommended: ",
            T,
          ),
          m.createElement(
            m.Fragment,
            null,
            M > 0 &&
              m.createElement(
                m.Fragment,
                null,
                m.createElement(
                  "div",
                  { className: ce().WhyRelevant },
                  (0, b.we)("#DiscoveryQueue_WhyRelevant"),
                ),
                m.createElement(
                  "div",
                  { role: "list", className: ce().RelevantCtn },
                  B &&
                    m.createElement(
                      ve,
                      { header: (0, b.we)("#DiscoveryQueue_SimilarGames") },
                      m.createElement(
                        "div",
                        { className: ce().ReleventSimilarAppsCtn },
                        S,
                      ),
                    ),
                  i &&
                    y?.data?.length > 0 &&
                    m.createElement(
                      ve,
                      {
                        header: (0, b.we)(
                          "#ContentHub_Recommendation_Curators",
                        ),
                      },
                      m.createElement(
                        "div",
                        {
                          className: (0, w.A)(
                            ce().ReleventSimilarAppsCtn,
                            ce().RecommendingCuratorsCtn,
                          ),
                        },
                        y.data
                          .filter(Boolean)
                          .map((e) =>
                            m.createElement(ge, {
                              key: "curator_" + e.clanAccountID,
                              curator: e,
                            }),
                          ),
                      ),
                    ),
                  s &&
                    Boolean(f.data) &&
                    m.createElement(_e, { creatorInfo: f.data }),
                  C >= 0 &&
                    m.createElement(ve, {
                      header: (0, b.um)(
                        "#DiscoveryQueue_TopSellers",
                        (C + 1).toLocaleString(),
                        m.createElement("span", {
                          className: ce().RelevantTextBold,
                        }),
                      ),
                    }),
                  E &&
                    !B &&
                    m.createElement(ve, {
                      header: (0, b.we)("#DiscoveryQueue_RecommendedByIR"),
                    }),
                  m.createElement(he, {
                    bShowAvatars: r,
                    count: c.data?.accountids_recommended?.length,
                    locToken: "#DiscoveryQueue_FriendsRecommended",
                    arrSteamIDs: v.data?.rgRecommendedFriends,
                  }),
                  m.createElement(he, {
                    bShowAvatars: r,
                    count: l.data?.owns?.length,
                    locToken: "#DiscoveryQueue_FriendsOwned",
                    arrSteamIDs: v.data?.rgOwnedFriends,
                  }),
                  m.createElement(he, {
                    bShowAvatars: r,
                    count: l.data?.in_wishlist?.length,
                    locToken: "#DiscoveryQueue_FriendsWishlisted",
                    arrSteamIDs: v.data?.rgWishlistFriends,
                  }),
                ),
              ),
            n && 0 != M
              ? m.createElement("div", {
                  "aria-label": a.GetShortDescription(),
                })
              : m.createElement(
                  "div",
                  {
                    className: (0, w.A)(ce().AppDescription, M && ce().Divider),
                  },
                  a.GetShortDescription(),
                ),
          )
        );
      }
      function _e(e) {
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
          ? m.createElement(ve, {
              header: (0, b.PP)(
                r,
                m.createElement(
                  "span",
                  { className: ce().RelevantTextBold },
                  t.clanInfo?.group_name,
                ),
              ),
            })
          : null;
      }
      function ge(e) {
        const { curator: t } = e,
          r = (0, O.FV)(t?.clanAccountID);
        return t && r
          ? m.createElement(
              a.Ii,
              { href: r.GetCreatorHomeURL(null) },
              m.createElement("img", { src: t.avatar_medium_url }),
            )
          : null;
      }
      function ye(e) {
        const { lifetimePlaytime: t, storeItem: r } = e;
        return m.createElement(
          "div",
          { className: ce().SimilarAppCtn },
          m.createElement(
            G.Qf,
            {
              item: { type: "game", id: r.GetAppID() },
              bHidePrice: !0,
              hoverProps: {
                direction: "overlay",
                nBodyAlignment: 1,
                style: { minWidth: "320px", zIndex: 5e3 },
              },
            },
            m.createElement("img", {
              className: ce().SimilarAppImg,
              alt: r.GetName(),
              src: r.GetAssets().GetSmallCapsuleURL(),
            }),
          ),
        );
      }
      function he(e) {
        const { arrSteamIDs: t, count: r, locToken: a, bShowAvatars: n } = e;
        return r
          ? 1 != r || n
            ? m.createElement(
                ve,
                {
                  header: (0, b.um)(
                    a,
                    r,
                    m.createElement("span", {
                      className: ce().RelevantTextBold,
                    }),
                  ),
                },
                n &&
                  t.length > 0 &&
                  m.createElement(
                    "div",
                    { className: ce().FriendAvatarsCtn },
                    1 == r
                      ? m.createElement(be, { steamid: t[0] })
                      : m.createElement(we, { arrSteamIDs: t }),
                  ),
              )
            : m.createElement(ve, {
                header: (0, b.PP)(
                  a + "_Single",
                  m.createElement(fe, { steamid: t[0] }),
                ),
              })
          : null;
      }
      function fe(e) {
        const { steamid: t } = e,
          { data: r } = (0, me.js)(t);
        return r && r.m_bInitialized
          ? m.createElement(
              "span",
              {
                "data-miniprofile": "s" + r.m_steamid.ConvertTo64BitString(),
                className: ce().RelevantTextBold,
              },
              r.m_strPlayerName,
            )
          : null;
      }
      function we(e) {
        const { arrSteamIDs: t } = e,
          r = (0, me.DW)(t);
        return m.createElement(
          m.Fragment,
          null,
          r.map(
            ({ data: e }) =>
              e &&
              m.createElement(P.i8, {
                key: e.m_steamid.ConvertTo64BitString(),
                "data-miniprofile": "s" + e.m_steamid.ConvertTo64BitString(),
                persona: e,
                size: "Small",
                statusPosition: "right",
              }),
          ),
        );
      }
      function be(e) {
        const { steamid: t } = e,
          { data: r } = (0, me.js)(t);
        return r
          ? m.createElement(
              n.Z,
              { className: ce().FriendBlockCtn, "data-miniprofile": "s" + t },
              m.createElement(P.i8, {
                persona: r,
                size: "Small",
                statusPosition: "right",
              }),
              m.createElement(W.D, {
                className: ce().PersonaStatus,
                persona: r,
                eFriendRelationship: 3,
                bIsSelf: !1,
                strNickname: null,
                bParenthesizeNicknames: !1,
                bCompactView: !1,
                bNoMask: !0,
              }),
            )
          : null;
      }
      function ve(e) {
        const { children: t, header: r } = e;
        return m.createElement(
          "div",
          { className: ce().RelevantItem },
          m.createElement(
            "div",
            { className: ce().RelevantCheck },
            m.createElement(y.Jlk, null),
          ),
          m.createElement(
            "div",
            { className: ce().RelevantColumn },
            m.createElement("div", { className: ce().ReleventText }, r),
            t,
          ),
        );
      }
      var Se = r(43188),
        Ce = r(60779),
        Ie = r(61336),
        Ee = r(92834);
      new v.wd("DiscoveryQueueApp").Debug;
      function Be(e) {
        const {
            appID: t,
            nItemHeight: r,
            nItemWidth: a,
            selected: i,
            fnFocused: s,
            eStoreDiscoveryQueueType: o,
            storePageFilter: l,
            bPreferDemoStorePage: c,
            elVideo: d,
            elDetails: p,
            appAriaIDs: _,
          } = e,
          [y] = (0, g.t7)(t, Se.Gy),
          h = (0, I.Qn)(),
          f = (0, u.R7)(),
          v = f?.ownerWindow || window,
          S = De(y, o, l, c),
          { bIsIgnored: C, fnUpdateIgnored: E } = (0, Se.TK)(t),
          { bIsWishlisted: B, fnUpdateWishlist: D } = (0, Se.u4)(t),
          A = m.useRef(void 0);
        if (
          (m.useEffect(() => {
            i && A.current && A.current.focus({ preventScroll: !0 });
          }, [i]),
          !y)
        )
          return console.warn("Error: missing store item for appid ", t), null;
        const R = { width: a || void 0, height: r || void 0 };
        return m.createElement(
          n.Z,
          {
            "aria-labelledby": (0, Ee.q)(
              _.nameId,
              _.tagsId,
              _.reviewId,
              _.relevanceId,
              _.buttonsId,
            ),
            ref: A,
            style: R,
            className: (0, w.A)(ce().DiscoveryQueueApp, i && ce().Selected),
            onOptionsActionDescription: B
              ? (0, b.we)("#DiscoveryQueue_RemoveFromWishlist")
              : (0, b.we)("#DiscoveryQueue_AddToWishlist"),
            onOptionsButton: D,
            onOKActionDescription: (0, b.we)("#DiscoveryQueue_ViewStorePage"),
            onOKButton: () => {
              v.location.href = S;
            },
            onSecondaryActionDescription: C
              ? (0, b.we)("#DiscoveryQueue_Undo")
              : (0, b.we)("#DiscoveryQueue_IgnoreLink"),
            onSecondaryButton: E,
            fnScrollIntoViewHandler: () => (s(), !0),
          },
          m.createElement(
            "div",
            { className: (0, w.A)(ce().IgnoredCtn, C && ce().Active) },
            m.createElement(
              "div",
              { className: (0, w.A)(ce().IgnoredInfo, C && ce().Active) },
              m.createElement(
                "div",
                { className: ce().IgnoredTitle },
                (0, b.we)("#DiscoveryQueue_Ignored"),
              ),
              m.createElement(
                "div",
                { className: ce().IgnoredDescription },
                (0, b.we)("#DiscoveryQueue_IgnoredConfirmation"),
              ),
              m.createElement(
                n.Z,
                {
                  className: (0, w.A)(ce().QueueButton, ce().UndoIgnoreButton),
                  onClick: E,
                },
                h &&
                  m.createElement(F.$m, {
                    button: k.g4.X,
                    type: F.wt.Light,
                    size: F.xY.Medium,
                  }),
                (0, b.we)("#DiscoveryQueue_Undo"),
              ),
            ),
          ),
          d,
          p,
        );
      }
      function De(e, t, r, a) {
        const n = (0, c.n9)();
        return m.useMemo(() => {
          if (!e) return;
          const i = (0, E.Bk)(r),
            s = t >= 0 ? "?inqueue=" + t + (r ? "_" + i : "") : "",
            o = (0, c.bV)(n, e.GetStorePageURL(a) + s);
          return (0, Ie.NT)(o);
        }, [a, t, n, e, r]);
      }
      function Ae(e) {
        const {
            appID: t,
            bShowMinimizedDisplay: r,
            eStoreDiscoveryQueueType: a,
            storePageFilter: i,
            bPreferDemoStorePage: s,
            appAriaIDs: o,
          } = e,
          [l] = (0, g.t7)(t, Se.Gy),
          { bIsIgnored: c, fnUpdateIgnored: u } = (0, Se.TK)(t),
          { bIsWishlisted: d, fnUpdateWishlist: p } = (0, Se.u4)(t),
          _ = De(l, a, i, s),
          h = (0, I.Qn)(),
          f = h;
        if (!l) return;
        const v = l.GetAssets().GetLibraryCapsuleURL(),
          S = l.GetAssets().GetHeaderURL();
        return m.createElement(
          n.Z,
          { className: ce().AppDetailsCtn },
          m.createElement(
            "div",
            { className: ce().AppDetailsCtnTop },
            v &&
              m.createElement(
                "a",
                { className: (0, w.A)(ce().CapsuleLink), href: _ },
                m.createElement("img", {
                  className: ce().AppLibraryHero,
                  src: v,
                }),
                S &&
                  m.createElement("img", { className: ce().AppHeader, src: S }),
              ),
            m.createElement(
              "div",
              { id: o.nameId, className: ce().RightColumn },
              m.createElement(
                "a",
                { className: (0, w.A)(ce().AppName), href: _ },
                l.GetName(),
              ),
              m.createElement(Q.wc, {
                bSingleLineMode: !0,
                info: { id: t, type: (0, M.U)(l.GetAppType()) },
              }),
            ),
            m.createElement(Re, {
              rgTagIDs: l.GetTagIDs(),
              ariaLabelID: o.tagsId,
            }),
            m.createElement(
              "div",
              { className: ce().AppReviews, id: o.reviewId },
              m.createElement(G.Jz, {
                bShowTooltip: !0,
                bTruncateTotalReviews: r,
                appInfo: { id: t, type: (0, M.U)(l.GetAppType()) },
              }),
            ),
            m.createElement(
              "div",
              { id: o.relevanceId, className: ce().AppRelevanceCtn },
              m.createElement(pe, {
                bHideDescription: h,
                bShowAvatars: !r,
                storeItem: l,
                appID: t,
              }),
            ),
          ),
          !h &&
            m.createElement(
              "div",
              { className: ce().AppActionButtonsCtn },
              m.createElement(
                "div",
                { id: o.buttonsId, className: ce().AppActionJustButtonsCtn },
                m.createElement(
                  "div",
                  { className: ce().ButtonsRowWrap },
                  l.BHasDemo() &&
                    m.createElement(q.j, {
                      info: {
                        id: l.GetAppID(),
                        type: (0, N._4)(l.GetStoreItemType(), l.GetAppType()),
                      },
                      className: (0, w.A)(
                        ce().QueueButton,
                        ce().Primary,
                        ce().Launch,
                      ),
                    }),
                  m.createElement(
                    "a",
                    {
                      className: (0, w.A)(ce().QueueButton, ce().Primary),
                      href: _,
                    },
                    f &&
                      m.createElement(F.$m, {
                        button: k.g4.Y,
                        type: F.wt.Light,
                        size: F.xY.Medium,
                        additionalClassName: ce().YGlyph,
                      }),
                    " ",
                    (0, b.we)("#DiscoveryQueue_ViewStorePage"),
                  ),
                  m.createElement(
                    x.he,
                    {
                      toolTipContent: d
                        ? (0, b.we)("#RemoveFromWishlist_ttip")
                        : (0, b.we)("#AddToWishlist_ttip"),
                    },
                    m.createElement(
                      n.Z,
                      {
                        "aria-label": d
                          ? (0, b.we)("#Sale_RemoveFromWishlist")
                          : (0, b.we)("#Sale_AddToWishlist"),
                        focusable: !0,
                        className: (0, w.A)(ce().QueueButton, d && ce().Active),
                        onClick: p,
                      },
                      f &&
                        m.createElement(F.$m, {
                          button: k.g4.Y,
                          type: F.wt.Light,
                          size: F.xY.Medium,
                          additionalClassName: ce().YGlyph,
                        }),
                      d
                        ? m.createElement(y.qnF, null)
                        : m.createElement(y.T4m, null),
                    ),
                  ),
                  m.createElement(
                    x.he,
                    {
                      toolTipContent: (0, b.we)(
                        "#SaleTrailerCarousel_IgnoreLink_ttip",
                      ),
                    },
                    m.createElement(
                      n.Z,
                      {
                        "aria-label": (0, b.we)("#DiscoveryQueue_IgnoreLink"),
                        focusable: !0,
                        className: (0, w.A)(ce().QueueButton, c && ce().Active),
                        onClick: u,
                      },
                      m.createElement(y.NtH, null),
                    ),
                  ),
                ),
              ),
            ),
        );
      }
      function Re(e) {
        const { rgTagIDs: t, ariaLabelID: r } = e,
          a = [...(0, Se.W3)(t)].slice(0, 8);
        return m.createElement(
          "div",
          { id: r, role: "list", className: ce().AppTagsCtn },
          a.map((e) =>
            m.createElement(Ce.Fz, {
              key: e,
              className: ce().TagEntry,
              tagID: e,
            }),
          ),
        );
      }
      var Te = r(60884),
        Me = r(90511);
      const Ne = new v.wd("DiscoveryQueueWizard").Debug,
        Ge = 1,
        Qe = 1400,
        Fe = "discoveryqueue2022";
      async function xe(e, t, r, a) {
        let n = [],
          i = !1;
        try {
          const { appids: s, exhausted: o } = await E.aI
            .Get()
            .GetDiscoveryQueueAppsOfType(e, t, a);
          (n = [...s]),
            (i = o),
            r && -1 === n.findIndex((e) => e === r) && n.unshift(r),
            await _.A.Get().QueueMultipleAppRequests(n, { ...Se.Gy, ...Me.LB });
        } catch (e) {
          console.error("Failed getting discovery queue apps", e);
        }
        return { appids: n, exhausted: i };
      }
      function ke(e) {
        const [t, r] = m.useState(!1),
          a = (0, o.KV)();
        return (
          (0, m.useEffect)(() => {
            E.aI.Init(a), r(!0);
          }, [a]),
          t ? m.createElement(qe, { ...e }) : null
        );
      }
      function qe(e) {
        const {
            eStoreDiscoveryQueueType: t,
            fnCloseModal: r,
            includeAppID: i,
            storePageFilter: o,
            bPreferDemoStorePage: p,
            bShowAOAutoPlayWarning: _,
          } = e,
          [g, v] = m.useState(0),
          [B, D] = m.useState(void 0),
          [A, R] = m.useState(0),
          M = (0, u.R7)(),
          N = M?.ownerWindow || window,
          G = (0, c.ru)(Fe),
          [Q, F] = m.useState(0),
          x = (0, l.b)();
        (0, C.E)("ArrowLeft", () => P(!1), !0, !0),
          (0, C.E)("Left", () => P(!1), !0, !0),
          (0, C.E)("ArrowRight", () => P(!0), !0, !0),
          (0, C.E)("Right", () => P(!0), !0, !0),
          (0, C.E)("Escape", () => r?.(), !0, !0),
          (0, C.E)("Esc", () => r?.(), !0, !0);
        const k = m.useMemo(() => Boolean(N.innerWidth < Qe), [N]),
          { fnGetDiscoveryQueue: q, rgAppIDs: U } = (function (e, t, r) {
            const [a, n] = m.useState([]),
              i = (0, f.m)("DiscoveryQueueWizard"),
              s = async (s) => {
                let { appids: o } = await xe(e, !s, s && r, t);
                if (s && !o.length) {
                  let { appids: r } = await xe(e, !0, void 0, t);
                  o = r;
                }
                if (!i?.token?.reason) {
                  const e = [...(a ?? []), ...o, Ge];
                  n(e);
                }
                Ne("Loaded new discovery queue apps: ", o);
              };
            return { fnGetDiscoveryQueue: s, rgAppIDs: a };
          })(t, o, i);
        m.useEffect(() => {
          q(!0), d.Fm.Get().HintLoad();
        }, []),
          m.useEffect(() => {
            const e = U[g];
            e != B && (e && e != Ge && x.AddImpression(e, G), D(e));
          }, [x, g, B, U, G]);
        const P = (e) => {
          const t = S.OQ(g + (e ? 1 : -1), 0, U.length - 1);
          t != g &&
            (v(t), Ne("New selected index: ", t, " Prev selected index: ", g));
        };
        m.useEffect(() => {
          U?.length &&
            U[g] !== Ge &&
            (F((e) => e + 1),
            E.aI
              .Get()
              .SkipDiscoveryQueueItem(U[g], t, o)
              .then(() => F((e) => e - 1)));
        }, [t, g, U, o]),
          m.useEffect(() => {
            U.length != A &&
              (R(U.length), U.length > A && U[g] == Ge && v(g + 1));
          }, [A, g, U]);
        const [W] = m.useState(new Map()),
          L = (0, E.WX)(t, o),
          z = !(0, T.c5)() && g > 0,
          O = !(0, T.c5)() && g < U.length - 1,
          {
            refContainer: j,
            bIsDragging: H,
            nDragOffset: K,
            nDragSelectedOffsetIndex: V,
            handleTouchStart: Z,
            handleTouchMove: $,
            handleTouchEnd: Y,
          } = (function (e, t) {
            const r = m.useRef(null),
              [a, n] = m.useState(0),
              [i, s] = m.useState(!1),
              [o, l] = m.useState(0),
              c = m.useRef(0),
              u = 50,
              d = (e) => {
                s(!0), (c.current = e.touches[0].clientX), n(0), l(0);
              },
              p = (e) => {
                if (!i) return;
                const t = e.touches[0].clientX - c.current;
                n(t), l(a > u ? 1 : a < -u ? -1 : 0);
              },
              _ = () => {
                i &&
                  (s(!1),
                  a > u
                    ? e((e) => Math.max(e - 1, 0))
                    : a < -u && e((e) => Math.min(e + 1, t - 1)),
                  n(0),
                  l(0));
              };
            return {
              refContainer: r,
              bIsDragging: i,
              nDragOffset: a,
              nDragSelectedOffsetIndex: o,
              handleTouchStart: d,
              handleTouchMove: p,
              handleTouchEnd: _,
            };
          })((e) => v(e), U.length),
          X = (e) => S.W(g + e, U) && (S.LA(e, -1, 1) || H),
          J = (0, c.aL)(I.TS.STORE_BASE_URL + "explore?dq=widget"),
          ee = U[g] !== Ge,
          { nQueueStart: te, nCount: re } = (function (e, t) {
            let r = 0;
            for (let a = 0; a < e; a++) t[a] == Ge && (r = a + 1);
            let a = 0;
            for (let r = e; r < t.length; r++) {
              if (t[r] == Ge) {
                a = r;
                break;
              }
              r == t.length - 1 && (a = t.length);
            }
            const n = a - r;
            return { nQueueStart: r, nQueueEnd: a, nCount: n };
          })(g, U);
        return m.createElement(
          h.Ay,
          { feature: Fe },
          m.createElement(
            n.Z,
            {
              role: "dialog",
              focusable: !1,
              "flow-children": "column",
              className: ce().DiscoveryQueueCarouselCtn,
              navEntryPreferPosition: s.iU.LAST,
              onCancelButton: () => r?.(),
              onCancelActionDescription: (0, b.we)("#Button_Close"),
            },
            m.createElement(
              "div",
              {
                className: ce().DiscoveryQueueWrapper,
                onClick: (e) => {
                  e.target == e.currentTarget && (r?.(), e.stopPropagation());
                },
              },
              L.length > 0 &&
                m.createElement(
                  n.Z,
                  {
                    "flow-children": "row",
                    className: ce().DiscoveryQueueName,
                  },
                  L,
                ),
              m.createElement(
                n.Z,
                { "flow-children": "row", className: ce().TopBarCtn },
                m.createElement(
                  n.Z,
                  { className: ce().LearnMore },
                  (0, b.oW)(
                    "#DiscoveryQueue_LearnMore_Default",
                    m.createElement(a.Ii, {
                      className: ce().LearnMoreLink,
                      href: (0, Ie.NT)(J),
                    }),
                  ),
                ),
                m.createElement(
                  n.Z,
                  { className: ce().ControlsCtn },
                  m.createElement(
                    n.Z,
                    {
                      focusable: !0,
                      className: ce().QueueButton,
                      onClick: r,
                      "aria-label": (0, b.we)("#Button_Close"),
                      onActivate: () => r && r(),
                    },
                    m.createElement(y.X, null),
                  ),
                ),
              ),
              m.createElement(
                n.Z,
                {
                  role: "button",
                  "aria-label": (0, b.we)("#Carousel_Next"),
                  onClick: () => P(!1),
                  className: (0, w.A)(
                    ce().QueueNavArrow,
                    ce().LeftArrow,
                    z && ce().Enable,
                  ),
                },
                m.createElement(y.l8x, { angle: 180 }),
              ),
              m.createElement(
                n.Z,
                {
                  role: "button",
                  "aria-label": (0, b.we)("#Carousel_Prev"),
                  onClick: () => P(!0),
                  className: (0, w.A)(
                    ce().QueueNavArrow,
                    ce().RightArrow,
                    O && ce().Enable,
                  ),
                },
                m.createElement(y.l8x, { angle: 0 }),
              ),
              m.createElement(
                n.Z,
                {
                  ref: j,
                  className: ce().DiscoveryQueueItemsCtn,
                  focusable: !1,
                  onTouchStart: Z,
                  onTouchMove: $,
                  onTouchEnd: Y,
                },
                [-2, -1, 0, 1, 2].map((e) =>
                  m.createElement(
                    "div",
                    {
                      key: g + e,
                      className: (0, w.A)({
                        [ce().DiscoveryQueueItemPositioner]: !0,
                        [ce().Dragging]: H,
                        [ce().InRange]: X(e),
                        [ce().FarLeft]: -2 == e,
                        [ce().Left]: -1 == e,
                        [ce().Current]: 0 == e,
                        [ce().Right]: 1 == e,
                        [ce().FarRight]: 2 == e,
                        [ce().Selected]: e + V == 0,
                      }),
                      style: { "--dragOffsetX": `${K}px` },
                    },
                    X(e) &&
                      m.createElement(Ue, {
                        eStoreDiscoveryQueueType: t,
                        storePageFilter: o,
                        rgAppIDs: U,
                        index: g + e,
                        bShowMinimizedDisplay: k,
                        selectedIndex: g,
                        bPreferDemoStorePage: p,
                        mapViewedAppCount: W,
                        fnCloseModal: r,
                        fnLoadNextQueue: () => q(!1),
                        fnAdvance: P,
                        bSkipAppRequestPending: Boolean(0 != Q),
                        showAOAutoPlayWarning: _,
                      }),
                  ),
                ),
              ),
              m.createElement(Te.A, {
                className: (0, w.A)(!ee && ce().ProgressHidden),
                showPriorAsActive: !0,
                count: re,
                selectedIndex: g - te,
              }),
            ),
          ),
        );
      }
      function Ue(e) {
        const {
            eStoreDiscoveryQueueType: t,
            storePageFilter: r,
            rgAppIDs: a,
            index: n,
            bShowMinimizedDisplay: i,
            selectedIndex: s,
            bPreferDemoStorePage: o,
            mapViewedAppCount: l,
            fnCloseModal: c,
            fnLoadNextQueue: u,
            fnAdvance: d,
            bSkipAppRequestPending: p,
            showAOAutoPlayWarning: _,
          } = e,
          [g, y] = m.useState(!1),
          h = {
            nameId: m.useId(),
            tagsId: m.useId(),
            reviewId: m.useId(),
            relevanceId: m.useId(),
            buttonsId: m.useId(),
          },
          f = () => {
            s != n && d(n > s);
          },
          w = s === n,
          b = m.useRef(w);
        if (
          (m.useEffect(() => {
            const e = b.current;
            if (((b.current = w), e && !w)) {
              y(!0);
              const e = setTimeout(() => y(!1), 500);
              return () => {
                clearTimeout(e);
              };
            }
          }, [w]),
          a[n] == Ge)
        ) {
          let i = 0;
          for (let e = n - 1; e >= 0; e--) a[e] == Ge && (i += 1);
          let o = 0;
          for (let e = n - 1; e >= 0 && a[e] !== Ge; e--) o++;
          return (
            l.has(i) ||
              l.set(i, E.aI.Get().GetTotalSkippedAppsForDiscoveryQueue(t, r)),
            m.createElement(Pe, {
              ...e,
              key: s,
              selected: w,
              lastCard: s == a.length - 1,
              fnLoadNextQueue: u,
              fnCloseModal: c,
              summaryCardIndex: i,
              eStoreDiscoveryQueueType: t,
              viewedAppCount: (l.get(i) || 0) + o,
              fnFocused: f,
              fnAdvance: () => d(!0),
              bSkipAppRequestPending: p,
            })
          );
        }
        const v = w || b.current || g;
        return m.createElement(Be, {
          appAriaIDs: h,
          eStoreDiscoveryQueueType: t,
          storePageFilter: r,
          selected: w,
          appID: a[n],
          bPreferDemoStorePage: o,
          fnFocused: f,
          elVideo: m.createElement(Se.y3, {
            appID: a[n],
            focused: v,
            showAOAutoPlayWarning: _,
          }),
          elDetails: m.createElement(Ae, {
            appID: a[n],
            bShowMinimizedDisplay: i,
            eStoreDiscoveryQueueType: t,
            storePageFilter: r,
            bPreferDemoStorePage: o,
            appAriaIDs: h,
          }),
        });
      }
      function Pe(e) {
        const {
            eStoreDiscoveryQueueType: t,
            fnCloseModal: r,
            summaryCardIndex: a,
            lastCard: i,
            selected: s,
            fnLoadNextQueue: o,
            storePageFilter: l,
            fnDisplaySummaryReward: u,
            viewedAppCount: _,
            fnFocused: g,
            fnAdvance: y,
            bSkipAppRequestPending: h,
          } = e,
          [v, S] = m.useState(!1),
          C = (0, I.Qn)(),
          B = (0, p.Qt)(2, I.TS.LANGUAGE, !1),
          [D, A] = m.useState(0),
          [R, T] = m.useState(0);
        m.useEffect(() => {
          s &&
            !v &&
            d.Fm.Get()
              .HintLoad()
              .then(() => {
                E.aI
                  .Get()
                  .LoadSkippedApps(t, l)
                  .then((e) => {
                    A(
                      e.reduce(
                        (e, t) => (d.Fm.Get().BIsGameWishlisted(t) ? e + 1 : e),
                        0,
                      ),
                    ),
                      T(
                        e.reduce(
                          (e, t) => (d.Fm.Get().BIsGameIgnored(t) ? e + 1 : e),
                          0,
                        ),
                      ),
                      S(!0);
                  });
              });
        }, [v, t, s, l]);
        const [M, N] = m.useState(!1),
          G = (0, E.IH)(t, l),
          Q = (0, f.m)("DiscoveryQueueSummary"),
          F = async () => {
            i ? M || (N(!0), await o(), Q?.token?.reason || N(!1)) : y();
          };
        return m.createElement(
          We,
          {
            selected: s,
            fnFocused: g,
            fnOnContinue: F,
            fnCloseModal: r,
            bLoaded: v,
          },
          m.createElement(
            "div",
            { className: ce().SummaryContentCtn },
            m.createElement(
              "div",
              { className: ce().SummaryTitle },
              (0, b.we)("#DiscoveryQueue_SummaryTitle"),
            ),
            !G &&
              s &&
              B.data?.definition &&
              m.createElement(ze, {
                bSkipAppRequestPending: h,
                summaryCardIdx: a,
              }),
            m.createElement(
              "div",
              { className: ce().YourStats },
              (0, b.we)("#DiscoveryQueue_YourStats"),
            ),
            m.createElement(
              n.Z,
              { "flow-children": "row", className: ce().SummaryGrid },
              m.createElement(
                "div",
                { className: ce().GridItem },
                m.createElement(
                  "div",
                  { className: ce().GridTitle },
                  (0, b.we)("#DiscoveryQueue_ViewedCaps"),
                ),
                m.createElement(
                  "div",
                  { className: ce().GridNumber },
                  _.toLocaleString(),
                ),
                m.createElement(
                  "div",
                  { className: ce().GridSubTitle },
                  (0, b.we)("#DiscoveryQueue_Titles"),
                ),
              ),
              m.createElement(
                "div",
                { className: ce().GridItem },
                m.createElement(
                  "div",
                  { className: ce().GridTitle },
                  (0, b.we)("#DiscoveryQueue_WishlistedCaps"),
                ),
                m.createElement(
                  "div",
                  { className: ce().GridNumber },
                  D.toLocaleString(),
                ),
                m.createElement(
                  c.Fh,
                  {
                    className: (0, w.A)(ce().GridSubTitle, ce().TextLink),
                    href: (0, Ie.NT)(I.TS.STORE_BASE_URL + "wishlist"),
                  },
                  (0, b.we)("#DiscoveryQueue_ViewWishlist"),
                ),
              ),
              m.createElement(
                "div",
                { className: ce().GridItem },
                m.createElement(
                  "div",
                  { className: ce().GridTitle },
                  (0, b.we)("#DiscoveryQueue_IgnoredCaps"),
                ),
                m.createElement(
                  "div",
                  { className: ce().GridNumber },
                  R.toLocaleString(),
                ),
                m.createElement(
                  c.Fh,
                  {
                    className: (0, w.A)(ce().GridSubTitle, ce().TextLink),
                    href: (0, Ie.NT)(
                      I.TS.STORE_BASE_URL + "account/notinterested",
                    ),
                  },
                  (0, b.we)("#DiscoveryQueue_ViewIgnored"),
                ),
              ),
            ),
            !C &&
              m.createElement(
                n.Z,
                { className: ce().SummaryActionButtonsCtn },
                m.createElement(
                  n.Z,
                  {
                    className: (0, w.A)(ce().QueueButton, ce().Wide),
                    onClick: r,
                  },
                  (0, b.we)("#ActionButtonLabelDone"),
                ),
                !G &&
                  m.createElement(
                    n.Z,
                    {
                      className: (0, w.A)(
                        M && ce().Disabled,
                        ce().QueueButton,
                        ce().Primary,
                        ce().Wide,
                      ),
                      onClick: F,
                    },
                    M ? (0, b.we)("#Loading") : (0, b.we)("#Button_Continue"),
                  ),
              ),
          ),
          Boolean(!G) &&
            m.createElement(m.Fragment, null, Boolean(u) && u(a + 1)),
        );
      }
      function We(e) {
        const {
            children: t,
            selected: r,
            fnOnContinue: a,
            fnCloseModal: n,
            fnFocused: s,
            bLoaded: o,
          } = e,
          l = (0, c.aL)(I.TS.STORE_BASE_URL + "wishlist"),
          d = (0, u.R7)(),
          p = d?.ownerWindow || window,
          _ = m.useRef(void 0);
        return (
          m.useEffect(() => {
            r && _.current && _.current.focus({ preventScroll: !0 });
          }, [r]),
          m.createElement(
            i.YZ,
            {
              ref: _,
              "aria-live": "polite",
              className: (0, w.A)(
                ce().SummaryCtn,
                ce().DiscoveryQueueApp,
                r && ce().Selected,
              ),
              onOptionsActionDescription: (0, b.we)(
                "#DiscoveryQueue_ViewWishlist",
              ),
              onOptionsButton: () => {
                p.location.href = (0, Ie.NT)(l);
              },
              onOKActionDescription: (0, b.we)("#Button_Continue"),
              onOKButton: () => {
                a();
              },
              onCancelActionDescription: (0, b.we)("#ActionButtonLabelDone"),
              onCancelButton: () => n && n(),
              fnScrollIntoViewHandler: () => (s(), !0),
            },
            o
              ? t
              : m.createElement(R.t, {
                  className: ce().DiscoveryQueueThrobber,
                  msDelayAppear: 200,
                  size: "large",
                  position: "center",
                }),
          )
        );
      }
      function Le() {
        return m.createElement(
          n.Z,
          { className: ce().SaleRewardsCtn },
          m.createElement(R.t, { size: "large", position: "center" }),
        );
      }
      function ze(e) {
        const { bSkipAppRequestPending: t, summaryCardIdx: r } = e;
        return t
          ? m.createElement(Le, null)
          : m.createElement(Oe, { summaryCardIdx: r });
      }
      function Oe(e) {
        const { summaryCardIdx: t } = e,
          r = (0, p.os)(2, I.TS.LANGUAGE, !1, t.toString()),
          [a] = (0, g.t7)(r?.data?.current_def?.appid, {}),
          i = (0, I.Qn)();
        if (!r?.data?.current_def || !a?.GetName().length)
          return m.createElement(Le, null);
        const s = r.data.num_items_earned,
          o = r.data.current_def.num_items_per_def,
          l = o - s,
          c = (s / o) * 100;
        return m.createElement(
          n.Z,
          { className: ce().SaleRewardsCtn },
          m.createElement(D, { nPercent: c, size: 70, strokeWidth: 12 }),
          m.createElement(
            n.Z,
            { className: ce().RewardStatusCtn },
            m.createElement(
              "div",
              { className: ce().SaleRewardAppTitle },
              (0, b.we)(
                "#DiscoveryQueue_SaleStatus_Title" + (l ? "" : "_Complete"),
                s.toLocaleString(),
                a.GetName(),
              ),
            ),
            l > 0 &&
              m.createElement(
                "div",
                { className: ce().SaleRewardAppTitle },
                (0, b.we)(
                  "#DiscoveryQueue_SaleStatus_Desc",
                  l.toLocaleString(),
                  a.GetName(),
                ),
              ),
            !i &&
              m.createElement(
                "a",
                {
                  href: (0, Ie.NT)(
                    I.TS.COMMUNITY_BASE_URL + "my/itemcollection",
                  ),
                },
                (0, b.we)("#DiscoveryQueue_SaleStatus_Link"),
              ),
          ),
        );
      }
    },
    26749: (e, t, r) => {
      "use strict";
      r.d(t, { G: () => l });
      var a = r(90626),
        n = r(23809),
        i = r(39199),
        s = r(30894),
        o = r(30470);
      function l() {
        const [e, t] = (0, a.useState)(!o.iA.logged_in),
          [r] = (0, s.L2)(),
          l = (0, n.KV)();
        return (
          (0, a.useEffect)(() => {
            e || (i.aI.Init(l), t(!0));
          }, [e, l]),
          e && !r
        );
      }
    },
    47554: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => y });
      var a = r(90626),
        n = r(12447),
        i = r(76217),
        s = r(39199),
        o = r(55263),
        l = r(95034),
        c = r(12155),
        m = r(26749),
        u = r(61859),
        d = r(71109),
        p = r.n(d),
        _ = r(78327),
        g = r(90511);
      function y(e) {
        const { appID: t } = e,
          r = (0, m.G)(),
          [d] = (0, l.QD)("inqueue", "0"),
          [y, h] = (0, a.useState)(!1),
          [f] = (0, o.t7)(t, { include_assets: !0 }),
          w = a.useRef(void 0);
        a.useEffect(() => w.current?.Activate(!0), []);
        const b = (0, _.Qn)(),
          { eStoreDiscoveryQueueType: v, storePageFilter: S } =
            a.useMemo(() => {
              if (d?.length > 0) {
                const e = d.split("_"),
                  t = Number(e[0]);
                let r;
                return (
                  e.length > 1 && (r = (0, s.bz)(e[1])),
                  { eStoreDiscoveryQueueType: t, storePageFilter: r }
                );
              }
              return { eStoreDiscoveryQueueType: 0, storePageFilter: void 0 };
            }, [d]),
          { showDiscoveryQueue: C } = (0, g.GV)(v, {
            includeAppID: t,
            storePageFilter: S,
          }),
          I = a.useCallback(() => {
            h(!0);
          }, []),
          E = (0, s.WX)(v, S);
        return r && f
          ? y
            ? null
            : a.createElement(
                n.u,
                { navTreeRef: w, navID: "DiscoveryQueueAppWidget" },
                a.createElement(
                  i.Z,
                  {
                    focusable: !0,
                    className: p().DiscoveryQueueWidgetCtn,
                    onSecondaryButton: I,
                    onOKButton: C,
                    onOKActionDescription: (0, u.we)(
                      "#DiscoveryQueue_ResumeWizard",
                    ),
                    onSecondaryActionDescription: (0, u.we)("#Button_Close"),
                  },
                  a.createElement(
                    "div",
                    { onClick: C, className: p().WidgetText },
                    a.createElement(c.mcU, null),
                    (0, u.we)("#DiscoveryQueue_ResumeWizard"),
                    E?.length > 0 && ": " + E,
                  ),
                  !b &&
                    a.createElement(
                      "div",
                      { className: p().CloseButton, onClick: I },
                      a.createElement(c.X, null),
                    ),
                ),
              )
          : null;
      }
    },
    6804: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => o });
      var a = r(12447),
        n = r(90626),
        i = r(96236),
        s = r(38405);
      function o() {
        return n.createElement(
          i.K,
          { placeholderHeight: "200px", rootMargin: "0px 0px 100% 0px" },
          n.createElement(
            a.u,
            { navID: "DiscoveryQueueWidget" },
            n.createElement(s.g, { eStoreDiscoveryQueueType: 0 }),
          ),
        );
      }
    },
    25054: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => u });
      var a = r(90626),
        n = r(61859),
        i = r(26749),
        s = r(76217),
        o = r(78327),
        l = r(51706),
        c = r(738),
        m = r(90511);
      function u(e) {
        const t = (0, i.G)(),
          { showDiscoveryQueue: r } = (0, m.GV)(0),
          u = a.useCallback(() => {
            o.iA.logged_in
              ? r()
              : (0, c.pg)(
                  a.createElement(l.KG, {
                    onOK: () => {
                      window.location.href = `${o.TS.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
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
          ? a.createElement(
              s.Z,
              null,
              a.createElement(
                "a",
                { onClick: u, className: "experiment-button" },
                (0, n.we)("#DiscoveryQueue_OpenWizard"),
              ),
            )
          : a.createElement(
              "div",
              { className: "experiment-button-placeholder" },
              " ",
            );
      }
    },
  },
]);
