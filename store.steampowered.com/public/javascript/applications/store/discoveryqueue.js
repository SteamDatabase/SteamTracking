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
    14336: (e, t, i) => {
      "use strict";
      i.d(t, { mK: () => g, DW: () => h, js: () => C, tb: () => p });
      var a = i(90626),
        n = i(20194),
        r = i(54806),
        m = i(23809),
        l = i(44654),
        s = i(10622),
        o = i(17720),
        c = i(37735),
        u = i(58632),
        d = i.n(u);
      function _(e, t) {
        return new (d())(
          async (t) => {
            const i = [...t],
              a = await c.xt.GetPlayerLinkDetails(e, { steamids: i }),
              n = new Map();
            return (
              a
                .Body()
                .accounts()
                .forEach((e) => {
                  const t = e.toObject();
                  n.set(t.public_data.steamid, t);
                }),
              i.map((e) => n.get(e) ?? null)
            );
          },
          { maxBatchSize: 100, cache: !1, ...t },
        );
      }
      function C(e) {
        const t = (0, m.KV)(),
          i = a.useContext(y);
        return (0, n.I)(g(i, t, e));
      }
      function h(e) {
        const t = (0, m.KV)(),
          i = a.useContext(y);
        return (0, r.E)({ queries: e.map((e) => g(i, t, e)) });
      }
      const y = a.createContext({
        loadPersonaState: async (e, t) => {
          if (null == e) return null;
          const i = await (function (e) {
            return (f ??= _(e));
          })(t).load(o.b.InitFromAccountID(e).ConvertTo64BitString());
          return (function (e, t) {
            let i = new s.Z(e);
            const a = t?.public_data,
              n = t?.private_data;
            (i.m_bInitialized = !!t),
              (i.m_ePersonaState = n?.persona_state ?? 0),
              (i.m_strAvatarHash = a?.sha_digest_avatar
                ? (0, l.Kx)(a.sha_digest_avatar)
                : s.dV),
              (i.m_strPlayerName = a?.persona_name ?? e.ConvertTo64BitString()),
              (i.m_strAccountName = n?.account_name),
              n?.persona_state_flags &&
                (i.m_unPersonaStateFlags = n?.persona_state_flags);
            n?.game_id && (i.m_gameid = n?.game_id);
            n?.game_server_ip_address &&
              (i.m_unGameServerIP = n?.game_server_ip_address);
            n?.lobby_steam_id && (i.m_game_lobby_id = n?.lobby_steam_id);
            n?.game_extra_info && (i.m_strGameExtraInfo = n?.game_extra_info);
            a?.profile_url && (i.m_strProfileURL = a.profile_url);
            return i;
          })(o.b.InitFromAccountID(e), i);
        },
      });
      function p() {
        return a.useContext(y);
      }
      function g(e, t, i) {
        const a = "string" == typeof i ? new o.b(i).GetAccountID() : i;
        return {
          queryKey: ["PlayerSummary", a],
          queryFn: () => e.loadPersonaState(a, t),
          enabled: !!a,
        };
      }
      let f;
    },
    93973: (e, t, i) => {
      "use strict";
      i.d(t, {
        CC: () => f,
        Oz: () => g,
        Qt: () => b,
        lu: () => S,
        ns: () => I,
        os: () => w,
      });
      var a = i(34629),
        n = i(56545),
        r = i(72034),
        m = i(17645),
        l = i(81393),
        s = i(78327),
        o = i(90626),
        c = i(68797),
        u = i(6144),
        d = i(84933),
        _ = i(14947),
        C = i(58222),
        h = i(23809),
        y = i(20194);
      class p {
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
          const t = n.w.Init(C.fp);
          t.Body().set_communityitemid(e.communityitemid),
            t.Body().set_appid(e.appid),
            t.Body().set_activate(!0);
          const i = await C.uy.ActivateProfileModifierItem(
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
            s.iA.logged_in,
            "User must be logged to use CSaleItemClaimableRewardsStore",
          );
          const e = n.w.Init(m.c3);
          e.Body().set_language(s.TS.LANGUAGE);
          let t = null;
          try {
            const i = await m.Qm.CanClaimItem(
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
                (0, _.HO)(this.m_testNextClaimFakeResponse),
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
            s.iA.logged_in,
            "User must be logged to use CSaleItemClaimableRewardsStore",
          ),
            (0, l.wT)(
              this.m_claimState.bCanClaimNewItem,
              "Only should be called when we previously verified you can claim something. ",
            );
          const e = n.w.Init(m.wt);
          e.Body().set_language(s.TS.LANGUAGE);
          let t = null;
          try {
            const i = await m.Qm.ClaimItem(
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
            p.s_Singleton ||
              ((p.s_Singleton = new p()),
              p.s_Singleton.Init(),
              "dev" == s.TS.WEB_UNIVERSE &&
                (window.g_SaleItemClaimableRewardsStore = p.s_Singleton)),
            p.s_Singleton
          );
        }
        constructor() {}
        Init() {
          const e = (0, s.Tc)("loyalty_webapi_token", "application_config");
          (0, l.wT)(
            e,
            "CQuestCommunityInventoryStore: missing loyalty_webapi_token oauth permission",
          ),
            (this.m_SteamInterface = new r.D(s.TS.WEBAPI_BASE_URL, e));
        }
      }
      function g() {
        const [e, t] = (0, o.useState)(p.Get().GetClaimItemState()),
          [i, a] = (0, o.useState)(!0);
        return (
          (0, o.useEffect)(() => {
            p.Get()
              .LoadCanUserClaimItem()
              .then(t)
              .finally(() => a(!1));
          }, []),
          (0, d.hL)(p.Get().GetClaimStateChangeCallback(), t),
          { ...e, bLoading: i }
        );
      }
      function f() {
        return { fnClaimItem: p.Get().UserClaimItem };
      }
      function S() {
        return { fnSetClaimState: p.Get().TEST_OverrideClaimState };
      }
      async function I(e) {
        return p.Get().ActivateProfileModifier(e);
      }
      function b(e, t, i) {
        const a = (0, h.KV)();
        return (0, y.I)({
          queryKey: [`SaleRewardsGetDefinition_${e}_${t}_${i}`],
          queryFn: async () =>
            (async function (e, t, i, a) {
              const r = n.w.Init(m.R4);
              return (
                r.Body().set_sale_def_type(t),
                r.Body().set_language(i),
                r.Body().set_include_community_item_def(a),
                (await m.Qm.GetCurrentDefinition(e, r)).Body().toObject()
              );
            })(a, e, t, i),
          staleTime: 1 / 0,
        });
      }
      function w(e, t, i, a) {
        const r = (0, h.KV)();
        return (0, y.I)({
          queryKey: [`GetClaimedSaleRewards_${e}_${t}_${i}_${a}`],
          queryFn: async () =>
            (async function (e, t, i, a) {
              const r = n.w.Init(m.Ju);
              return (
                r.Body().set_sale_def_type(t),
                r.Body().set_language(i),
                r.Body().set_include_community_item_def(a),
                (await m.Qm.GetClaimedSaleRewards(e, r)).Body().toObject()
              );
            })(r, e, t, i),
          staleTime: 1 / 0,
        });
      }
      (0, a.Cg)([d.oI], p.prototype, "TEST_OverrideClaimState", null),
        (0, a.Cg)([d.oI], p.prototype, "UserClaimItem", null);
    },
    69409: (e, t, i) => {
      "use strict";
      i.d(t, { m: () => d });
      var a = i(90626),
        n = i(22837),
        r = i(38390),
        m = i(52038),
        l = i(61859),
        s = i(61336),
        o = i(78327),
        c = i(15392),
        u = i(27666);
      function d(e) {
        const { gidEvent: t } = e,
          i = (0, r.RR)(t),
          [d, _] = (0, a.useMemo)(() => {
            if (
              i?.jsondata?.localized_sale_product_banner?.length > 0 &&
              i?.jsondata?.localized_sale_product_mobile_banner?.length > 0
            ) {
              const e = (0, n.sf)(o.TS.LANGUAGE),
                t = l.NT.GetWithFallback(
                  i.jsondata.localized_sale_product_banner,
                  e,
                ),
                a = l.NT.GetWithFallback(
                  i.jsondata.localized_sale_product_mobile_banner,
                  e,
                );
              if (t?.length > 0 && a?.length > 0)
                return [
                  u.z.GenerateURLFromHashAndExt(i.clanSteamID, t),
                  u.z.GenerateURLFromHashAndExt(i.clanSteamID, a),
                ];
            }
            return [null, null];
          }, [i]);
        return d?.length > 0 && _?.length > 0
          ? a.createElement(
              "a",
              { href: (0, s.k2)(i.GetSaleURL()), className: c.Link },
              a.createElement("img", {
                src: d,
                className: (0, m.A)(c.Banner, c.Big),
              }),
              a.createElement("img", {
                src: _,
                className: (0, m.A)(c.Banner, c.Mobile),
              }),
            )
          : null;
      }
    },
    96236: (e, t, i) => {
      "use strict";
      i.d(t, { K: () => s });
      var a = i(34629),
        n = i(90626),
        r = i(84933),
        m = i(60383),
        l = i(76217);
      class s extends n.Component {
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
          let i = 0,
            a = 0;
          if (this.m_refContainer.current) {
            const e = this.m_refContainer.current.GetBoundingClientRect();
            e && ((i = e.width), (a = e.height));
          }
          this.setState({
            bRenderChildren: e,
            nPrevRenderWidth: i,
            nPrevRenderHeight: a,
          }),
            e && this.props.onRender && this.props.onRender();
        }
        render() {
          const {
              placeholderWidth: e,
              placeholderHeight: t,
              holdGampadFocus: i,
              onRender: a,
              style: r,
              mode: s,
              ...o
            } = this.props,
            c = this.state.bRenderChildren;
          let u = r;
          if (!c) {
            const i = this.state.nPrevRenderWidth || e,
              a = this.state.nPrevRenderHeight || t;
            (void 0 === a && void 0 === i) ||
              (u = { ...r, minHeight: a, minWidth: i });
          }
          const d = this.BLoadAndUnload() ? "repeated" : "once";
          let _ = n.createElement(
            m.J,
            {
              ref: this.m_refContainer,
              style: u,
              ...o,
              onVisibilityChange: this.OnVisibilityChange,
              trigger: d,
            },
            c && this.props.children,
          );
          return (
            i && (_ = n.createElement(l.Z, { focusableIfEmpty: !0 }, _)), _
          );
        }
      }
      (0, a.Cg)([r.oI], s.prototype, "OnVisibilityChange", null);
    },
    47554: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => y });
      var a = i(90626),
        n = i(12447),
        r = i(76217),
        m = i(39199),
        l = i(55263),
        s = i(95034),
        o = i(12155),
        c = i(5907),
        u = i(26749),
        d = i(61859),
        _ = i(71109),
        C = i.n(_),
        h = i(78327);
      function y(e) {
        const { appID: t } = e,
          i = (0, u.G)(),
          [_] = (0, s.QD)("inqueue", "0"),
          [y, p] = (0, a.useState)(!1),
          [g, f] = (0, a.useState)(!1),
          [S] = (0, l.t7)(t, { include_assets: !0 }),
          I = a.useRef(void 0);
        a.useEffect(() => I.current?.Activate(!0), []);
        const b = (0, h.Qn)(),
          { eStoreDiscoveryQueueType: w, storePageFilter: T } =
            a.useMemo(() => {
              if (_?.length > 0) {
                const e = _.split("_"),
                  t = Number(e[0]);
                let i;
                return (
                  e.length > 1 && (i = (0, m.bz)(e[1])),
                  { eStoreDiscoveryQueueType: t, storePageFilter: i }
                );
              }
              return { eStoreDiscoveryQueueType: 0, storePageFilter: void 0 };
            }, [_]),
          v = a.useCallback(() => {
            f(!0);
          }, []),
          D = a.useCallback(() => {
            p(!0);
          }, []),
          R = (0, m.WX)(w, T);
        return i && S
          ? g
            ? null
            : a.createElement(
                n.u,
                { navTreeRef: I, navID: "DiscoveryQueueAppWidget" },
                a.createElement(
                  r.Z,
                  {
                    focusable: !0,
                    className: C().DiscoveryQueueWidgetCtn,
                    onSecondaryButton: v,
                    onOKButton: D,
                    onOKActionDescription: (0, d.we)(
                      "#DiscoveryQueue_ResumeWizard",
                    ),
                    onSecondaryActionDescription: (0, d.we)("#Button_Close"),
                  },
                  a.createElement(
                    "div",
                    { onClick: D, className: C().WidgetText },
                    a.createElement(o.mcU, null),
                    (0, d.we)("#DiscoveryQueue_ResumeWizard"),
                    R?.length > 0 && ": " + R,
                  ),
                  !b &&
                    a.createElement(
                      "div",
                      { className: C().CloseButton, onClick: v },
                      a.createElement(o.X, null),
                    ),
                  y &&
                    a.createElement(c.jM, {
                      includeAppID: t,
                      bWizardVisible: y,
                      fnCloseModal: () => p(!1),
                      eStoreDiscoveryQueueType: w,
                      storePageFilter: T,
                    }),
                ),
              )
          : null;
      }
    },
    6804: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => l });
      var a = i(12447),
        n = i(90626),
        r = i(96236),
        m = i(38405);
      function l() {
        return n.createElement(
          r.K,
          { placeholderHeight: "200px", rootMargin: "0px 0px 100% 0px" },
          n.createElement(
            a.u,
            { navID: "DiscoveryQueueWidget" },
            n.createElement(m.g, { eStoreDiscoveryQueueType: 0 }),
          ),
        );
      }
    },
    25054: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => u });
      var a = i(90626),
        n = i(61859),
        r = i(5907),
        m = i(26749),
        l = i(76217),
        s = i(78327),
        o = i(51706),
        c = i(738);
      function u(e) {
        const t = (0, m.G)(),
          [i, u] = (0, a.useState)(!1),
          d = a.useCallback(() => {
            s.iA.logged_in
              ? u(!0)
              : (0, c.pg)(
                  a.createElement(o.KG, {
                    onOK: () => {
                      window.location.href = `${s.TS.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
                    },
                    strOKButtonText: (0, n.we)(
                      "#DiscoveryQueue_Error_Login_Title",
                    ),
                    strDescription: (0, n.we)("#DiscoveryQueue_Error_Login"),
                    strTitle: (0, n.we)("#DiscoveryQueue_Error_Login_Title"),
                  }),
                  window,
                );
          }, []);
        return t
          ? a.createElement(
              l.Z,
              null,
              a.createElement(
                "a",
                { onClick: d, className: "experiment-button" },
                (0, n.we)("#DiscoveryQueue_OpenWizard"),
              ),
              i &&
                a.createElement(r.jM, {
                  bWizardVisible: i,
                  fnCloseModal: () => u(!1),
                  eStoreDiscoveryQueueType: 0,
                }),
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
