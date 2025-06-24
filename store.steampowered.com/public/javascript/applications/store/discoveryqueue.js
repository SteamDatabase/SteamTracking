/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9672],
  {
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
    12447: (e, t, i) => {
      "use strict";
      i.d(t, { u: () => o });
      var r = i(8871),
        s = i(90626),
        a = i(78327),
        n = i(85585),
        l = i(7445);
      function o(e) {
        const { children: t, navTreeRef: i, NavigationManager: o, ...m } = e,
          c = s.useRef(),
          u = (0, r.Ue)(c, i);
        if ((0, a.Qn)()) {
          const e = window.__nav_tree_root;
          return s.createElement(
            n.B2,
            { ...m, navTreeRef: u, parentEmbeddedNavTree: e },
            s.createElement(l.q, null, t),
          );
        }
        return s.createElement(s.Fragment, null, t);
      }
    },
    14336: (e, t, i) => {
      "use strict";
      i.d(t, { mK: () => p, DW: () => C, js: () => _, tb: () => f });
      var r = i(90626),
        s = i(20194),
        a = i(54806),
        n = i(23809),
        l = i(44654),
        o = i(10622),
        m = i(17720),
        c = i(37735),
        u = i(58632),
        d = i.n(u);
      function h(e, t) {
        return new (d())(
          async (t) => {
            const i = [...t],
              r = await c.xt.GetPlayerLinkDetails(e, { steamids: i }),
              s = new Map();
            return (
              r
                .Body()
                .accounts()
                .forEach((e) => {
                  const t = e.toObject();
                  s.set(t.public_data.steamid, t);
                }),
              i.map((e) => s.get(e) ?? null)
            );
          },
          { maxBatchSize: 100, cache: !1, ...t },
        );
      }
      function _(e) {
        const t = (0, n.KV)(),
          i = r.useContext(y);
        return (0, s.I)(p(i, t, e));
      }
      function C(e) {
        const t = (0, n.KV)(),
          i = r.useContext(y);
        return (0, a.E)({ queries: e.map((e) => p(i, t, e)) });
      }
      const y = r.createContext({
        loadPersonaState: async (e, t) => {
          if (null == e) return null;
          const i = await (function (e) {
            return (b ??= h(e));
          })(t).load(m.b.InitFromAccountID(e).ConvertTo64BitString());
          return (function (e, t) {
            let i = new o.Z(e);
            const r = t?.public_data,
              s = t?.private_data;
            (i.m_bInitialized = !!t),
              (i.m_ePersonaState = s?.persona_state ?? 0),
              (i.m_strAvatarHash = r?.sha_digest_avatar
                ? (0, l.Kx)(r.sha_digest_avatar)
                : o.dV),
              (i.m_strPlayerName = r?.persona_name ?? e.ConvertTo64BitString()),
              (i.m_strAccountName = s?.account_name),
              s?.persona_state_flags &&
                (i.m_unPersonaStateFlags = s?.persona_state_flags);
            s?.game_id && (i.m_gameid = s?.game_id);
            s?.game_server_ip_address &&
              (i.m_unGameServerIP = s?.game_server_ip_address);
            s?.lobby_steam_id && (i.m_game_lobby_id = s?.lobby_steam_id);
            s?.game_extra_info && (i.m_strGameExtraInfo = s?.game_extra_info);
            r?.profile_url && (i.m_strProfileURL = r.profile_url);
            return i;
          })(m.b.InitFromAccountID(e), i);
        },
      });
      function f() {
        return r.useContext(y);
      }
      function p(e, t, i) {
        const r = "string" == typeof i ? new m.b(i).GetAccountID() : i;
        return {
          queryKey: ["PlayerSummary", r],
          queryFn: () => e.loadPersonaState(r, t),
          enabled: !!r,
        };
      }
      let b;
    },
    93973: (e, t, i) => {
      "use strict";
      i.d(t, {
        CC: () => b,
        Oz: () => p,
        Qt: () => I,
        lu: () => g,
        ns: () => S,
        os: () => v,
      });
      var r = i(34629),
        s = i(56545),
        a = i(72034),
        n = i(17645),
        l = i(81393),
        o = i(78327),
        m = i(90626),
        c = i(68797),
        u = i(6144),
        d = i(84933),
        h = i(14947),
        _ = i(58222),
        C = i(23809),
        y = i(20194);
      class f {
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
          const t = s.w.Init(_.fp);
          t.Body().set_communityitemid(e.communityitemid),
            t.Body().set_appid(e.appid),
            t.Body().set_activate(!0);
          const i = await _.uy.ActivateProfileModifierItem(
            this.m_SteamInterface.GetServiceTransport(),
            t,
          );
          return (
            1 != i.GetEResult() &&
              console.error(
                `Error when calling QuestService.ActivateProfileModifierItem: EResult=${i.GetEResult()}`,
              ),
            i.GetEResult()
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
            o.iA.logged_in,
            "User must be logged to use CSaleItemClaimableRewardsStore",
          );
          const e = s.w.Init(n.c3);
          e.Body().set_language(o.TS.LANGUAGE);
          let t = null;
          try {
            const i = await n.Qm.CanClaimItem(
              this.m_SteamInterface.GetServiceTransport(),
              e,
            );
            if (1 == i.GetEResult())
              return (
                (this.m_claimedFreeItemDef = Boolean(
                  i.Body().reward_item()?.defid(),
                )
                  ? i.Body().reward_item().toObject()
                  : null),
                (this.m_claimState = {
                  bCanClaimNewItem: i.Body().can_claim(),
                  bAlreadyClaimedCurrentItem: Boolean(
                    this.m_claimedFreeItemDef,
                  ),
                  appid: this.m_claimedFreeItemDef?.appid,
                  community_item_type:
                    this.m_claimedFreeItemDef?.community_item_type,
                  community_item_class:
                    this.m_claimedFreeItemDef?.community_item_class,
                  rtNextClaimTime:
                    i.Body().next_claim_time() > 0
                      ? i.Body().next_claim_time()
                      : void 0,
                }),
                (this.m_rtNextClaimTime = i.Body().next_claim_time()),
                this.SetClaimTimer(),
                this.GetClaimStateChangeCallback().Dispatch(this.m_claimState),
                this.m_claimState
              );
            t = (0, c.H)(i);
          } catch (e) {
            t = (0, c.H)(e);
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
                (0, h.HO)(this.m_testNextClaimFakeResponse),
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
            o.iA.logged_in,
            "User must be logged to use CSaleItemClaimableRewardsStore",
          ),
            (0, l.wT)(
              this.m_claimState.bCanClaimNewItem,
              "Only should be called when we previously verified you can claim something. ",
            );
          const e = s.w.Init(n.wt);
          e.Body().set_language(o.TS.LANGUAGE);
          let t = null;
          try {
            const i = await n.Qm.ClaimItem(
              this.m_SteamInterface.GetServiceTransport(),
              e,
            );
            if (1 == i.GetEResult())
              return (
                (this.m_claimedFreeItemDef = i.Body().reward_item().toObject()),
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
                    i.Body().next_claim_time() > 0
                      ? i.Body().next_claim_time()
                      : void 0,
                }),
                this.GetClaimStateChangeCallback().Dispatch(this.m_claimState),
                (this.m_rtNextClaimTime = i.Body().next_claim_time()),
                this.SetClaimTimer(),
                this.m_claimState
              );
            if (29 == i.GetEResult())
              return (
                (this.m_canClaimPromise = this.InternalLoadCanUserClaimItem()),
                this.m_canClaimPromise
              );
            t = (0, c.H)(i);
          } catch (e) {
            t = (0, c.H)(e);
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
          const i = Math.max(0, Math.min(1, t.getTime() - e));
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
            i > 3e5 ? i / 2 : i,
          );
        }
        static s_Singleton;
        static Get() {
          return (
            f.s_Singleton ||
              ((f.s_Singleton = new f()),
              f.s_Singleton.Init(),
              "dev" == o.TS.WEB_UNIVERSE &&
                (window.g_SaleItemClaimableRewardsStore = f.s_Singleton)),
            f.s_Singleton
          );
        }
        constructor() {}
        Init() {
          const e = (0, o.Tc)("loyalty_webapi_token", "application_config");
          (0, l.wT)(
            e,
            "CQuestCommunityInventoryStore: missing loyalty_webapi_token oauth permission",
          ),
            (this.m_SteamInterface = new a.D(o.TS.WEBAPI_BASE_URL, e));
        }
      }
      function p() {
        const [e, t] = (0, m.useState)(f.Get().GetClaimItemState()),
          [i, r] = (0, m.useState)(!0);
        return (
          (0, m.useEffect)(() => {
            f.Get()
              .LoadCanUserClaimItem()
              .then(t)
              .finally(() => r(!1));
          }, []),
          (0, d.hL)(f.Get().GetClaimStateChangeCallback(), t),
          { ...e, bLoading: i }
        );
      }
      function b() {
        return { fnClaimItem: f.Get().UserClaimItem };
      }
      function g() {
        return { fnSetClaimState: f.Get().TEST_OverrideClaimState };
      }
      async function S(e) {
        return f.Get().ActivateProfileModifier(e);
      }
      function I(e, t, i) {
        const r = (0, C.KV)();
        return (0, y.I)({
          queryKey: [`SaleRewardsGetDefinition_${e}_${t}_${i}`],
          queryFn: async () =>
            (async function (e, t, i, r) {
              const a = s.w.Init(n.R4);
              return (
                a.Body().set_sale_def_type(t),
                a.Body().set_language(i),
                a.Body().set_include_community_item_def(r),
                (await n.Qm.GetCurrentDefinition(e, a)).Body().toObject()
              );
            })(r, e, t, i),
          staleTime: 1 / 0,
        });
      }
      function v(e, t, i, r) {
        const a = (0, C.KV)();
        return (0, y.I)({
          queryKey: [`GetClaimedSaleRewards_${e}_${t}_${i}_${r}`],
          queryFn: async () =>
            (async function (e, t, i, r) {
              const a = s.w.Init(n.Ju);
              return (
                a.Body().set_sale_def_type(t),
                a.Body().set_language(i),
                a.Body().set_include_community_item_def(r),
                (await n.Qm.GetClaimedSaleRewards(e, a)).Body().toObject()
              );
            })(a, e, t, i),
          staleTime: 1 / 0,
        });
      }
      (0, r.Cg)([d.oI], f.prototype, "TEST_OverrideClaimState", null),
        (0, r.Cg)([d.oI], f.prototype, "UserClaimItem", null);
    },
    96236: (e, t, i) => {
      "use strict";
      i.d(t, { K: () => l });
      var r = i(34629),
        s = i(90626),
        a = i(84933),
        n = i(60383);
      class l extends s.Component {
        state = {
          bRenderChildren: !1,
          nPrevRenderWidth: 0,
          nPrevRenderHeight: 0,
        };
        m_refContainer = s.createRef();
        BLoadAndUnload() {
          return "LoadAndUnload" == (this.props.mode || "JustLoad");
        }
        OnVisibilityChange(e) {
          let t = this.state.bRenderChildren;
          if (t == e) return;
          if (t && !this.BLoadAndUnload()) return;
          let i = 0,
            r = 0;
          if (this.m_refContainer.current) {
            const e = this.m_refContainer.current.GetBoundingClientRect();
            e && ((i = e.width), (r = e.height));
          }
          this.setState({
            bRenderChildren: e,
            nPrevRenderWidth: i,
            nPrevRenderHeight: r,
          }),
            e && this.props.onRender && this.props.onRender();
        }
        render() {
          const {
              placeholderWidth: e,
              placeholderHeight: t,
              onRender: i,
              style: r,
              mode: a,
              ...l
            } = this.props,
            o = this.state.bRenderChildren;
          let m = r;
          if (!o) {
            const i = this.state.nPrevRenderWidth || e,
              s = this.state.nPrevRenderHeight || t;
            (void 0 === s && void 0 === i) ||
              (m = { ...r, minHeight: s, minWidth: i });
          }
          const c = this.BLoadAndUnload() ? "repeated" : "once";
          return s.createElement(
            n.J,
            {
              ref: this.m_refContainer,
              style: m,
              ...l,
              onVisibilityChange: this.OnVisibilityChange,
              trigger: c,
            },
            o && this.props.children,
          );
        }
      }
      (0, r.Cg)([a.oI], l.prototype, "OnVisibilityChange", null);
    },
    47554: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => f });
      var r = i(90626),
        s = i(12447),
        a = i(76217),
        n = i(91336),
        l = i(39199),
        o = i(55263),
        m = i(95034),
        c = i(12155),
        u = i(5907),
        d = i(26749),
        h = i(61859),
        _ = i(71109),
        C = i.n(_),
        y = i(78327);
      function f(e) {
        const { appID: t } = e,
          i = (0, d.G)(),
          [_] = (0, m.QD)("inqueue", "0"),
          [f, p] = (0, r.useState)(!1),
          [b, g] = (0, r.useState)(!1),
          [S] = (0, o.t7)(t, { include_assets: !0 }),
          I = (0, n.A)(),
          v = r.useRef(void 0);
        r.useEffect(() => v.current?.Activate(!0), []);
        const w = (0, y.Qn)(),
          { eStoreDiscoveryQueueType: R, storePageFilter: T } =
            r.useMemo(() => {
              if (_?.length > 0) {
                const e = _.split("_"),
                  t = Number(e[0]);
                let i;
                return (
                  e.length > 1 && (i = (0, l.bz)(e[1])),
                  { eStoreDiscoveryQueueType: t, storePageFilter: i }
                );
              }
              return { eStoreDiscoveryQueueType: 0, storePageFilter: void 0 };
            }, [_]),
          E = r.useCallback(() => {
            g(!0);
          }, []),
          D = r.useCallback(() => {
            p(!0);
          }, []),
          x = (0, l.WX)(R, T);
        return i && S
          ? b
            ? null
            : r.createElement(
                s.u,
                {
                  NavigationManager: I,
                  navTreeRef: v,
                  navID: "DiscoveryQueueAppWidget",
                },
                r.createElement(
                  a.Z,
                  {
                    focusable: !0,
                    className: C().DiscoveryQueueWidgetCtn,
                    onSecondaryButton: E,
                    onOKButton: D,
                    onOKActionDescription: (0, h.we)(
                      "#DiscoveryQueue_ResumeWizard",
                    ),
                    onSecondaryActionDescription: (0, h.we)("#Button_Close"),
                  },
                  r.createElement(
                    "div",
                    { onClick: D, className: C().WidgetText },
                    r.createElement(c.mcU, null),
                    (0, h.we)("#DiscoveryQueue_ResumeWizard"),
                    x?.length > 0 && ": " + x,
                  ),
                  !w &&
                    r.createElement(
                      "div",
                      { className: C().CloseButton, onClick: E },
                      r.createElement(c.X, null),
                    ),
                  f &&
                    r.createElement(u.jM, {
                      includeAppID: t,
                      bWizardVisible: f,
                      fnCloseModal: () => p(!1),
                      eStoreDiscoveryQueueType: R,
                      storePageFilter: T,
                    }),
                ),
              )
          : null;
      }
    },
    6804: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => o });
      var r = i(12447),
        s = i(90626),
        a = i(91336),
        n = i(96236),
        l = i(71922);
      function o() {
        const e = (0, a.A)();
        return s.createElement(
          n.K,
          { placeholderHeight: "200px", rootMargin: "0px 0px 100% 0px" },
          s.createElement(
            r.u,
            { navID: "DiscoveryQueueWidget", NavigationManager: e },
            s.createElement(l.g, { eStoreDiscoveryQueueType: 0 }),
          ),
        );
      }
    },
    25054: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => u });
      var r = i(90626),
        s = i(61859),
        a = i(5907),
        n = i(26749),
        l = i(76217),
        o = i(78327),
        m = i(51706),
        c = i(738);
      function u(e) {
        const t = (0, n.G)(),
          [i, u] = (0, r.useState)(!1),
          d = r.useCallback(() => {
            o.iA.logged_in
              ? u(!0)
              : (0, c.pg)(
                  r.createElement(m.KG, {
                    onOK: () => {
                      window.location.href = `${o.TS.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
                    },
                    strOKButtonText: (0, s.we)(
                      "#DiscoveryQueue_Error_Login_Title",
                    ),
                    strDescription: (0, s.we)("#DiscoveryQueue_Error_Login"),
                    strTitle: (0, s.we)("#DiscoveryQueue_Error_Login_Title"),
                  }),
                  window,
                );
          }, []);
        return t
          ? r.createElement(
              l.Z,
              null,
              r.createElement(
                "a",
                { onClick: d, className: "experiment-button" },
                (0, s.we)("#DiscoveryQueue_OpenWizard"),
              ),
              i &&
                r.createElement(a.jM, {
                  bWizardVisible: i,
                  fnCloseModal: () => u(!1),
                  eStoreDiscoveryQueueType: 0,
                }),
            )
          : r.createElement(
              "div",
              { className: "experiment-button-placeholder" },
              " ",
            );
      }
    },
    54806: (e, t, i) => {
      "use strict";
      i.d(t, { E: () => y });
      var r = i(90626),
        s = i(86709),
        a = i(45747),
        n = i(74500),
        l = i(57168);
      function o(e, t) {
        return e.filter((e) => !t.includes(e));
      }
      var m = class extends n.Q {
          #e;
          #t;
          #i;
          #r;
          #s;
          #a;
          #n;
          #l;
          constructor(e, t, i) {
            super(),
              (this.#e = e),
              (this.#r = i),
              (this.#i = []),
              (this.#s = []),
              (this.#t = []),
              this.setQueries(t);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#s.forEach((e) => {
                e.subscribe((t) => {
                  this.#o(e, t);
                });
              });
          }
          onUnsubscribe() {
            this.listeners.size || this.destroy();
          }
          destroy() {
            (this.listeners = new Set()),
              this.#s.forEach((e) => {
                e.destroy();
              });
          }
          setQueries(e, t, i) {
            (this.#i = e),
              (this.#r = t),
              s.j.batch(() => {
                const e = this.#s,
                  t = this.#m(this.#i);
                t.forEach((e) =>
                  e.observer.setOptions(e.defaultedQueryOptions, i),
                );
                const r = t.map((e) => e.observer),
                  s = r.map((e) => e.getCurrentResult()),
                  a = r.some((t, i) => t !== e[i]);
                (e.length !== r.length || a) &&
                  ((this.#s = r),
                  (this.#t = s),
                  this.hasListeners() &&
                    (o(e, r).forEach((e) => {
                      e.destroy();
                    }),
                    o(r, e).forEach((e) => {
                      e.subscribe((t) => {
                        this.#o(e, t);
                      });
                    }),
                    this.#c()));
              });
          }
          getCurrentResult() {
            return this.#t;
          }
          getQueries() {
            return this.#s.map((e) => e.getCurrentQuery());
          }
          getObservers() {
            return this.#s;
          }
          getOptimisticResult(e, t) {
            const i = this.#m(e).map((e) =>
              e.observer.getOptimisticResult(e.defaultedQueryOptions),
            );
            return [i, (e) => this.#u(e ?? i, t), () => this.#d(i, e)];
          }
          #d(e, t) {
            const i = this.#m(t);
            return i.map((t, r) => {
              const s = e[r];
              return t.defaultedQueryOptions.notifyOnChangeProps
                ? s
                : t.observer.trackResult(s, (e) => {
                    i.forEach((t) => {
                      t.observer.trackProp(e);
                    });
                  });
            });
          }
          #u(e, t) {
            return t
              ? ((this.#a && this.#t === this.#l && t === this.#n) ||
                  ((this.#n = t),
                  (this.#l = this.#t),
                  (this.#a = (0, l.BH)(this.#a, t(e)))),
                this.#a)
              : e;
          }
          #m(e) {
            const t = new Map(this.#s.map((e) => [e.options.queryHash, e])),
              i = [];
            return (
              e.forEach((e) => {
                const r = this.#e.defaultQueryOptions(e),
                  s = t.get(r.queryHash);
                if (s) i.push({ defaultedQueryOptions: r, observer: s });
                else {
                  const e = this.#s.find(
                    (e) => e.options.queryHash === r.queryHash,
                  );
                  i.push({
                    defaultedQueryOptions: r,
                    observer: e ?? new a.$(this.#e, r),
                  });
                }
              }),
              i.sort(
                (t, i) =>
                  e.findIndex(
                    (e) => e.queryHash === t.defaultedQueryOptions.queryHash,
                  ) -
                  e.findIndex(
                    (e) => e.queryHash === i.defaultedQueryOptions.queryHash,
                  ),
              )
            );
          }
          #o(e, t) {
            const i = this.#s.indexOf(e);
            -1 !== i &&
              ((this.#t = (function (e, t, i) {
                const r = e.slice(0);
                return (r[t] = i), r;
              })(this.#t, i, t)),
              this.#c());
          }
          #c() {
            if (this.hasListeners()) {
              this.#a !==
                this.#u(this.#d(this.#t, this.#i), this.#r?.combine) &&
                s.j.batch(() => {
                  this.listeners.forEach((e) => {
                    e(this.#t);
                  });
                });
            }
          }
        },
        c = i(75233),
        u = i(22730),
        d = i(43424),
        h = i(19086),
        _ = i(44407),
        C = i(19866);
      function y({ queries: e, ...t }, i) {
        const n = (0, c.jE)(i),
          l = (0, u.w)(),
          o = (0, d.h)(),
          y = r.useMemo(
            () =>
              e.map((e) => {
                const t = n.defaultQueryOptions(e);
                return (
                  (t._optimisticResults = l ? "isRestoring" : "optimistic"), t
                );
              }),
            [e, n, l],
          );
        y.forEach((e) => {
          (0, _.jv)(e), (0, h.LJ)(e, o);
        }),
          (0, h.wZ)(o);
        const [f] = r.useState(() => new m(n, y, t)),
          [p, b, g] = f.getOptimisticResult(y, t.combine);
        r.useSyncExternalStore(
          r.useCallback(
            (e) => (l ? C.l : f.subscribe(s.j.batchCalls(e))),
            [f, l],
          ),
          () => f.getCurrentResult(),
          () => f.getCurrentResult(),
        ),
          r.useEffect(() => {
            f.setQueries(y, t, { listeners: !1 });
          }, [y, t, f]);
        const S = p.some((e, t) => (0, _.EU)(y[t], e))
          ? p.flatMap((e, t) => {
              const i = y[t];
              if (i) {
                const t = new a.$(n, i);
                if ((0, _.EU)(i, e)) return (0, _.iL)(i, t, o);
                (0, _.nE)(e, l) && (0, _.iL)(i, t, o);
              }
              return [];
            })
          : [];
        if (S.length > 0) throw Promise.all(S);
        const I = p.find((e, t) => {
          const i = y[t];
          return (
            i &&
            (0, h.$1)({
              result: e,
              errorResetBoundary: o,
              throwOnError: i.throwOnError,
              query: n.getQueryCache().get(i.queryHash),
            })
          );
        });
        if (I?.error) throw I.error;
        return b(g());
      }
    },
  },
]);
