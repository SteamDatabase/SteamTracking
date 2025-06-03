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
    12447: (e, t, i) => {
      "use strict";
      i.d(t, { u: () => m });
      var s = i(8871),
        r = i(90626),
        n = i(78327),
        a = i(85585),
        l = i(7445);
      function m(e) {
        const { children: t, navTreeRef: i, NavigationManager: m, ...o } = e,
          c = r.useRef(),
          u = (0, s.Ue)(c, i);
        if ((0, n.Qn)()) {
          const e = window.__nav_tree_root;
          return r.createElement(
            a.B2,
            { ...o, navTreeRef: u, parentEmbeddedNavTree: e },
            r.createElement(l.q, null, t),
          );
        }
        return r.createElement(r.Fragment, null, t);
      }
    },
    93973: (e, t, i) => {
      "use strict";
      i.d(t, {
        CC: () => b,
        Oz: () => f,
        Qt: () => I,
        lu: () => g,
        ns: () => S,
        os: () => v,
      });
      var s = i(34629),
        r = i(56545),
        n = i(72034),
        a = i(17645),
        l = i(44332),
        m = i(78327),
        o = i(90626),
        c = i(68797),
        u = i(6144),
        d = i(73745),
        h = i(14947),
        _ = i(58222),
        C = i(23809),
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
          const t = r.w.Init(_.fp);
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
          (0, l.w)(
            m.iA.logged_in,
            "User must be logged to use CSaleItemClaimableRewardsStore",
          );
          const e = r.w.Init(a.c3);
          e.Body().set_language(m.TS.LANGUAGE);
          let t = null;
          try {
            const i = await a.Qm.CanClaimItem(
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
          (0, l.w)(
            m.iA.logged_in,
            "User must be logged to use CSaleItemClaimableRewardsStore",
          ),
            (0, l.w)(
              this.m_claimState.bCanClaimNewItem,
              "Only should be called when we previously verified you can claim something. ",
            );
          const e = r.w.Init(a.wt);
          e.Body().set_language(m.TS.LANGUAGE);
          let t = null;
          try {
            const i = await a.Qm.ClaimItem(
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
              "dev" == m.TS.WEB_UNIVERSE &&
                (window.g_SaleItemClaimableRewardsStore = p.s_Singleton)),
            p.s_Singleton
          );
        }
        constructor() {}
        Init() {
          const e = (0, m.Tc)("loyalty_webapi_token", "application_config");
          (0, l.w)(
            e,
            "CQuestCommunityInventoryStore: missing loyalty_webapi_token oauth permission",
          ),
            (this.m_SteamInterface = new n.D(m.TS.WEBAPI_BASE_URL, e));
        }
      }
      function f() {
        const [e, t] = (0, o.useState)(p.Get().GetClaimItemState()),
          [i, s] = (0, o.useState)(!0);
        return (
          (0, o.useEffect)(() => {
            p.Get()
              .LoadCanUserClaimItem()
              .then(t)
              .finally(() => s(!1));
          }, []),
          (0, d.hL)(p.Get().GetClaimStateChangeCallback(), t),
          { ...e, bLoading: i }
        );
      }
      function b() {
        return { fnClaimItem: p.Get().UserClaimItem };
      }
      function g() {
        return { fnSetClaimState: p.Get().TEST_OverrideClaimState };
      }
      async function S(e) {
        return p.Get().ActivateProfileModifier(e);
      }
      function I(e, t, i) {
        const s = (0, C.KV)();
        return (0, y.I)({
          queryKey: [`SaleRewardsGetDefinition_${e}_${t}_${i}`],
          queryFn: async () =>
            (async function (e, t, i, s) {
              const n = r.w.Init(a.R4);
              return (
                n.Body().set_sale_def_type(t),
                n.Body().set_language(i),
                n.Body().set_include_community_item_def(s),
                (await a.Qm.GetCurrentDefinition(e, n)).Body().toObject()
              );
            })(s, e, t, i),
          staleTime: 1 / 0,
        });
      }
      function v(e, t, i, s) {
        const n = (0, C.KV)();
        return (0, y.I)({
          queryKey: [`GetClaimedSaleRewards_${e}_${t}_${i}_${s}`],
          queryFn: async () =>
            (async function (e, t, i, s) {
              const n = r.w.Init(a.Ju);
              return (
                n.Body().set_sale_def_type(t),
                n.Body().set_language(i),
                n.Body().set_include_community_item_def(s),
                (await a.Qm.GetClaimedSaleRewards(e, n)).Body().toObject()
              );
            })(n, e, t, i),
          staleTime: 1 / 0,
        });
      }
      (0, s.Cg)([d.oI], p.prototype, "TEST_OverrideClaimState", null),
        (0, s.Cg)([d.oI], p.prototype, "UserClaimItem", null);
    },
    69409: (e, t, i) => {
      "use strict";
      i.d(t, { m: () => d });
      var s = i(90626),
        r = i(22837),
        n = i(38390),
        a = i(27666),
        l = i(52038),
        m = i(61859),
        o = i(61336),
        c = i(78327),
        u = i(15392);
      function d(e) {
        const { gidEvent: t } = e,
          i = (0, n.RR)(t),
          [d, h] = (0, s.useMemo)(() => {
            if (
              i?.jsondata?.localized_sale_product_banner?.length > 0 &&
              i?.jsondata?.localized_sale_product_mobile_banner?.length > 0
            ) {
              const e = (0, r.sf)(c.TS.LANGUAGE),
                t = m.NT.GetWithFallback(
                  i.jsondata.localized_sale_product_banner,
                  e,
                ),
                s = m.NT.GetWithFallback(
                  i.jsondata.localized_sale_product_mobile_banner,
                  e,
                );
              if (t?.length > 0 && s?.length > 0) {
                const e = i.clanSteamID.GetAccountID();
                return [`${(0, a.mJ)()}${e}/${t}`, `${(0, a.mJ)()}${e}/${s}`];
              }
            }
            return [null, null];
          }, [i]);
        return d?.length > 0 && h?.length > 0
          ? s.createElement(
              "a",
              { href: (0, o.k2)(i.GetSaleURL()), className: u.Link },
              s.createElement("img", {
                src: d,
                className: (0, l.A)(u.Banner, u.Big),
              }),
              s.createElement("img", {
                src: h,
                className: (0, l.A)(u.Banner, u.Mobile),
              }),
            )
          : null;
      }
    },
    96236: (e, t, i) => {
      "use strict";
      i.d(t, { K: () => l });
      var s = i(34629),
        r = i(90626),
        n = i(73745),
        a = i(60383);
      class l extends r.Component {
        state = {
          bRenderChildren: !1,
          nPrevRenderWidth: 0,
          nPrevRenderHeight: 0,
        };
        m_refContainer = r.createRef();
        BLoadAndUnload() {
          return "LoadAndUnload" == (this.props.mode || "JustLoad");
        }
        OnVisibilityChange(e) {
          let t = this.state.bRenderChildren;
          if (t == e) return;
          if (t && !this.BLoadAndUnload()) return;
          let i = 0,
            s = 0;
          if (this.m_refContainer.current) {
            const e = this.m_refContainer.current.GetBoundingClientRect();
            e && ((i = e.width), (s = e.height));
          }
          this.setState({
            bRenderChildren: e,
            nPrevRenderWidth: i,
            nPrevRenderHeight: s,
          }),
            e && this.props.onRender && this.props.onRender();
        }
        render() {
          const {
              placeholderWidth: e,
              placeholderHeight: t,
              onRender: i,
              style: s,
              mode: n,
              ...l
            } = this.props,
            m = this.state.bRenderChildren;
          let o = s;
          if (!m) {
            const i = this.state.nPrevRenderWidth || e,
              r = this.state.nPrevRenderHeight || t;
            (void 0 === r && void 0 === i) ||
              (o = { ...s, minHeight: r, minWidth: i });
          }
          const c = this.BLoadAndUnload() ? "repeated" : "once";
          return r.createElement(
            a.J,
            {
              ref: this.m_refContainer,
              style: o,
              ...l,
              onVisibilityChange: this.OnVisibilityChange,
              trigger: c,
            },
            m && this.props.children,
          );
        }
      }
      (0, s.Cg)([n.oI], l.prototype, "OnVisibilityChange", null);
    },
    47554: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => p });
      var s = i(90626),
        r = i(12447),
        n = i(76217),
        a = i(91336),
        l = i(39199),
        m = i(55263),
        o = i(95034),
        c = i(12155),
        u = i(5907),
        d = i(26749),
        h = i(61859),
        _ = i(71109),
        C = i.n(_),
        y = i(78327);
      function p(e) {
        const { appID: t } = e,
          i = (0, d.G)(),
          [_] = (0, o.QD)("inqueue", "0"),
          [p, f] = (0, s.useState)(!1),
          [b, g] = (0, s.useState)(!1),
          [S] = (0, m.t7)(t, { include_assets: !0 }),
          I = (0, a.A)(),
          v = s.useRef(void 0);
        s.useEffect(() => v.current?.Activate(!0), []);
        const R = (0, y.Qn)(),
          { eStoreDiscoveryQueueType: w, storePageFilter: E } =
            s.useMemo(() => {
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
          T = s.useCallback(() => {
            g(!0);
          }, []),
          D = s.useCallback(() => {
            f(!0);
          }, []),
          B = (0, l.WX)(w, E);
        return i && S
          ? b
            ? null
            : s.createElement(
                r.u,
                {
                  NavigationManager: I,
                  navTreeRef: v,
                  navID: "DiscoveryQueueAppWidget",
                },
                s.createElement(
                  n.Z,
                  {
                    focusable: !0,
                    className: C().DiscoveryQueueWidgetCtn,
                    onSecondaryButton: T,
                    onOKButton: D,
                    onOKActionDescription: (0, h.we)(
                      "#DiscoveryQueue_ResumeWizard",
                    ),
                    onSecondaryActionDescription: (0, h.we)("#Button_Close"),
                  },
                  s.createElement(
                    "div",
                    { onClick: D, className: C().WidgetText },
                    s.createElement(c.mcU, null),
                    (0, h.we)("#DiscoveryQueue_ResumeWizard"),
                    B?.length > 0 && ": " + B,
                  ),
                  !R &&
                    s.createElement(
                      "div",
                      { className: C().CloseButton, onClick: T },
                      s.createElement(c.X, null),
                    ),
                  p &&
                    s.createElement(u.jM, {
                      includeAppID: t,
                      bWizardVisible: p,
                      fnCloseModal: () => f(!1),
                      eStoreDiscoveryQueueType: w,
                      storePageFilter: E,
                    }),
                ),
              )
          : null;
      }
    },
    6804: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => m });
      var s = i(12447),
        r = i(90626),
        n = i(91336),
        a = i(96236),
        l = i(38405);
      function m() {
        const e = (0, n.A)();
        return r.createElement(
          a.K,
          { placeholderHeight: "200px", rootMargin: "0px 0px 100% 0px" },
          r.createElement(
            s.u,
            { navID: "DiscoveryQueueWidget", NavigationManager: e },
            r.createElement(l.g, { eStoreDiscoveryQueueType: 0 }),
          ),
        );
      }
    },
    25054: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => u });
      var s = i(90626),
        r = i(61859),
        n = i(5907),
        a = i(26749),
        l = i(76217),
        m = i(78327),
        o = i(51706),
        c = i(738);
      function u(e) {
        const t = (0, a.G)(),
          [i, u] = (0, s.useState)(!1),
          d = s.useCallback(() => {
            m.iA.logged_in
              ? u(!0)
              : (0, c.pg)(
                  s.createElement(o.KG, {
                    onOK: () => {
                      window.location.href = `${m.TS.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
                    },
                    strOKButtonText: (0, r.we)(
                      "#DiscoveryQueue_Error_Login_Title",
                    ),
                    strDescription: (0, r.we)("#DiscoveryQueue_Error_Login"),
                    strTitle: (0, r.we)("#DiscoveryQueue_Error_Login_Title"),
                  }),
                  window,
                );
          }, []);
        return t
          ? s.createElement(
              l.Z,
              null,
              s.createElement(
                "a",
                { onClick: d, className: "experiment-button" },
                (0, r.we)("#DiscoveryQueue_OpenWizard"),
              ),
              i &&
                s.createElement(n.jM, {
                  bWizardVisible: i,
                  fnCloseModal: () => u(!1),
                  eStoreDiscoveryQueueType: 0,
                }),
            )
          : s.createElement(
              "div",
              { className: "experiment-button-placeholder" },
              " ",
            );
      }
    },
    54806: (e, t, i) => {
      "use strict";
      i.d(t, { E: () => y });
      var s = i(90626),
        r = i(86709),
        n = i(45747),
        a = i(74500),
        l = i(57168);
      function m(e, t) {
        return e.filter((e) => !t.includes(e));
      }
      var o = class extends a.Q {
          #e;
          #t;
          #i;
          #s;
          #r;
          #n;
          #a;
          #l;
          constructor(e, t, i) {
            super(),
              (this.#e = e),
              (this.#s = i),
              (this.#i = []),
              (this.#r = []),
              (this.#t = []),
              this.setQueries(t);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#r.forEach((e) => {
                e.subscribe((t) => {
                  this.#m(e, t);
                });
              });
          }
          onUnsubscribe() {
            this.listeners.size || this.destroy();
          }
          destroy() {
            (this.listeners = new Set()),
              this.#r.forEach((e) => {
                e.destroy();
              });
          }
          setQueries(e, t, i) {
            (this.#i = e),
              (this.#s = t),
              r.j.batch(() => {
                const e = this.#r,
                  t = this.#o(this.#i);
                t.forEach((e) =>
                  e.observer.setOptions(e.defaultedQueryOptions, i),
                );
                const s = t.map((e) => e.observer),
                  r = s.map((e) => e.getCurrentResult()),
                  n = s.some((t, i) => t !== e[i]);
                (e.length !== s.length || n) &&
                  ((this.#r = s),
                  (this.#t = r),
                  this.hasListeners() &&
                    (m(e, s).forEach((e) => {
                      e.destroy();
                    }),
                    m(s, e).forEach((e) => {
                      e.subscribe((t) => {
                        this.#m(e, t);
                      });
                    }),
                    this.#c()));
              });
          }
          getCurrentResult() {
            return this.#t;
          }
          getQueries() {
            return this.#r.map((e) => e.getCurrentQuery());
          }
          getObservers() {
            return this.#r;
          }
          getOptimisticResult(e, t) {
            const i = this.#o(e).map((e) =>
              e.observer.getOptimisticResult(e.defaultedQueryOptions),
            );
            return [i, (e) => this.#u(e ?? i, t), () => this.#d(i, e)];
          }
          #d(e, t) {
            const i = this.#o(t);
            return i.map((t, s) => {
              const r = e[s];
              return t.defaultedQueryOptions.notifyOnChangeProps
                ? r
                : t.observer.trackResult(r, (e) => {
                    i.forEach((t) => {
                      t.observer.trackProp(e);
                    });
                  });
            });
          }
          #u(e, t) {
            return t
              ? ((this.#n && this.#t === this.#l && t === this.#a) ||
                  ((this.#a = t),
                  (this.#l = this.#t),
                  (this.#n = (0, l.BH)(this.#n, t(e)))),
                this.#n)
              : e;
          }
          #o(e) {
            const t = new Map(this.#r.map((e) => [e.options.queryHash, e])),
              i = [];
            return (
              e.forEach((e) => {
                const s = this.#e.defaultQueryOptions(e),
                  r = t.get(s.queryHash);
                if (r) i.push({ defaultedQueryOptions: s, observer: r });
                else {
                  const e = this.#r.find(
                    (e) => e.options.queryHash === s.queryHash,
                  );
                  i.push({
                    defaultedQueryOptions: s,
                    observer: e ?? new n.$(this.#e, s),
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
          #m(e, t) {
            const i = this.#r.indexOf(e);
            -1 !== i &&
              ((this.#t = (function (e, t, i) {
                const s = e.slice(0);
                return (s[t] = i), s;
              })(this.#t, i, t)),
              this.#c());
          }
          #c() {
            if (this.hasListeners()) {
              this.#n !==
                this.#u(this.#d(this.#t, this.#i), this.#s?.combine) &&
                r.j.batch(() => {
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
        const a = (0, c.jE)(i),
          l = (0, u.w)(),
          m = (0, d.h)(),
          y = s.useMemo(
            () =>
              e.map((e) => {
                const t = a.defaultQueryOptions(e);
                return (
                  (t._optimisticResults = l ? "isRestoring" : "optimistic"), t
                );
              }),
            [e, a, l],
          );
        y.forEach((e) => {
          (0, _.jv)(e), (0, h.LJ)(e, m);
        }),
          (0, h.wZ)(m);
        const [p] = s.useState(() => new o(a, y, t)),
          [f, b, g] = p.getOptimisticResult(y, t.combine);
        s.useSyncExternalStore(
          s.useCallback(
            (e) => (l ? C.l : p.subscribe(r.j.batchCalls(e))),
            [p, l],
          ),
          () => p.getCurrentResult(),
          () => p.getCurrentResult(),
        ),
          s.useEffect(() => {
            p.setQueries(y, t, { listeners: !1 });
          }, [y, t, p]);
        const S = f.some((e, t) => (0, _.EU)(y[t], e))
          ? f.flatMap((e, t) => {
              const i = y[t];
              if (i) {
                const t = new n.$(a, i);
                if ((0, _.EU)(i, e)) return (0, _.iL)(i, t, m);
                (0, _.nE)(e, l) && (0, _.iL)(i, t, m);
              }
              return [];
            })
          : [];
        if (S.length > 0) throw Promise.all(S);
        const I = f.find((e, t) => {
          const i = y[t];
          return (
            i &&
            (0, h.$1)({
              result: e,
              errorResetBoundary: m,
              throwOnError: i.throwOnError,
              query: a.getQueryCache().get(i.queryHash),
            })
          );
        });
        if (I?.error) throw I.error;
        return b(g());
      }
    },
  },
]);
