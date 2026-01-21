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
      r.d(t, { mK: () => b, DW: () => g, js: () => _, tb: () => y });
      var a = r(90626),
        i = r(20194),
        n = r(54806),
        s = r(23809),
        o = r(44654),
        l = r(10622),
        c = r(17720),
        m = r(37735),
        d = r(58632),
        u = r.n(d);
      function p(e, t) {
        return new (u())(
          async (t) => {
            const r = [...t],
              a = await m.xt.GetPlayerLinkDetails(e, { steamids: r }),
              i = new Map();
            return (
              a
                .Body()
                .accounts()
                .forEach((e) => {
                  const t = e.toObject();
                  i.set(t.public_data.steamid, t);
                }),
              r.map((e) => i.get(e) ?? null)
            );
          },
          { maxBatchSize: 100, cache: !1, ...t },
        );
      }
      function _(e) {
        const t = (0, s.KV)(),
          r = a.useContext(w);
        return (0, i.I)(b(r, t, e));
      }
      function g(e) {
        const t = (0, s.KV)(),
          r = a.useContext(w);
        return (0, n.E)({ queries: e.map((e) => b(r, t, e)) });
      }
      const w = a.createContext({
        loadPersonaState: async (e, t) => {
          if (null == e) return null;
          const r = await (function (e) {
            return (f ??= p(e));
          })(t).load(c.b.InitFromAccountID(e).ConvertTo64BitString());
          return (function (e, t) {
            let r = new l.Z(e);
            const a = t?.public_data,
              i = t?.private_data;
            (r.m_bInitialized = !!t),
              (r.m_ePersonaState = i?.persona_state ?? 0),
              (r.m_strAvatarHash = a?.sha_digest_avatar
                ? (0, o.Kx)(a.sha_digest_avatar)
                : l.dV),
              (r.m_strPlayerName = a?.persona_name ?? e.ConvertTo64BitString()),
              (r.m_strAccountName = i?.account_name),
              i?.persona_state_flags &&
                (r.m_unPersonaStateFlags = i?.persona_state_flags);
            i?.game_id && (r.m_gameid = i?.game_id);
            i?.game_server_ip_address &&
              (r.m_unGameServerIP = i?.game_server_ip_address);
            i?.lobby_steam_id && (r.m_game_lobby_id = i?.lobby_steam_id);
            i?.game_extra_info && (r.m_strGameExtraInfo = i?.game_extra_info);
            a?.profile_url && (r.m_strProfileURL = a.profile_url);
            return r;
          })(c.b.InitFromAccountID(e), r);
        },
      });
      function y() {
        return a.useContext(w);
      }
      function b(e, t, r) {
        const a = "string" == typeof r ? new c.b(r).GetAccountID() : r;
        return {
          queryKey: ["PlayerSummary", a],
          queryFn: () => e.loadPersonaState(a, t),
          enabled: !!a,
        };
      }
      let f;
    },
    93973: (e, t, r) => {
      "use strict";
      r.d(t, {
        CC: () => f,
        Oz: () => b,
        Qt: () => v,
        lu: () => h,
        ns: () => S,
        os: () => B,
      });
      var a = r(34629),
        i = r(56545),
        n = r(72034),
        s = r(17645),
        o = r(81393),
        l = r(78327),
        c = r(90626),
        m = r(68797),
        d = r(6144),
        u = r(84933),
        p = r(14947),
        _ = r(58222),
        g = r(23809),
        w = r(20194);
      class y {
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
                  community_item_class: 11,
                })
              : (this.m_testNextClaimFakeResponse = null),
            (this.m_claimState = e),
            this.GetClaimStateChangeCallback().Dispatch(this.m_claimState);
        }
        async ActivateProfileModifier(e) {
          const t = i.w.Init(_.fp);
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
          const e = i.w.Init(s.c3);
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
          const e = i.w.Init(s.wt);
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
            y.s_Singleton ||
              ((y.s_Singleton = new y()),
              y.s_Singleton.Init(),
              "dev" == l.TS.WEB_UNIVERSE &&
                (window.g_SaleItemClaimableRewardsStore = y.s_Singleton)),
            y.s_Singleton
          );
        }
        constructor() {}
        Init() {
          const e = (0, l.Tc)("loyalty_webapi_token", "application_config");
          (0, o.wT)(
            e,
            "CQuestCommunityInventoryStore: missing loyalty_webapi_token oauth permission",
          ),
            (this.m_SteamInterface = new n.D(l.TS.WEBAPI_BASE_URL, e));
        }
      }
      function b() {
        const [e, t] = (0, c.useState)(y.Get().GetClaimItemState()),
          [r, a] = (0, c.useState)(!0);
        return (
          (0, c.useEffect)(() => {
            y.Get()
              .LoadCanUserClaimItem()
              .then(t)
              .finally(() => a(!1));
          }, []),
          (0, u.hL)(y.Get().GetClaimStateChangeCallback(), t),
          { ...e, bLoading: r }
        );
      }
      function f() {
        return { fnClaimItem: y.Get().UserClaimItem };
      }
      function h() {
        return { fnSetClaimState: y.Get().TEST_OverrideClaimState };
      }
      async function S(e) {
        return y.Get().ActivateProfileModifier(e);
      }
      function v(e, t, r) {
        const a = (0, g.KV)();
        return (0, w.I)({
          queryKey: [`SaleRewardsGetDefinition_${e}_${t}_${r}`],
          queryFn: async () =>
            (async function (e, t, r, a) {
              const n = i.w.Init(s.R4);
              return (
                n.Body().set_sale_def_type(t),
                n.Body().set_language(r),
                n.Body().set_include_community_item_def(a),
                (await s.Qm.GetCurrentDefinition(e, n)).Body().toObject()
              );
            })(a, e, t, r),
          staleTime: 1 / 0,
        });
      }
      function B(e, t, r, a) {
        const n = (0, g.KV)();
        return (0, w.I)({
          queryKey: [`GetClaimedSaleRewards_${e}_${t}_${r}_${a}`],
          queryFn: async () =>
            (async function (e, t, r, a) {
              const n = i.w.Init(s.Ju);
              return (
                n.Body().set_sale_def_type(t),
                n.Body().set_language(r),
                n.Body().set_include_community_item_def(a),
                (await s.Qm.GetClaimedSaleRewards(e, n)).Body().toObject()
              );
            })(n, e, t, r),
          staleTime: 1 / 0,
        });
      }
      (0, a.Cg)([u.oI], y.prototype, "TEST_OverrideClaimState", null),
        (0, a.Cg)([u.oI], y.prototype, "UserClaimItem", null);
    },
    69409: (e, t, r) => {
      "use strict";
      r.d(t, { m: () => u });
      var a = r(90626),
        i = r(22837),
        n = r(38390),
        s = r(52038),
        o = r(61859),
        l = r(61336),
        c = r(78327),
        m = r(15392),
        d = r(27666);
      function u(e) {
        const { gidEvent: t } = e,
          r = (0, n.RR)(t),
          [u, p] = (0, a.useMemo)(() => {
            if (
              r?.jsondata?.localized_sale_product_banner?.length > 0 &&
              r?.jsondata?.localized_sale_product_mobile_banner?.length > 0
            ) {
              const e = (0, i.sf)(c.TS.LANGUAGE),
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
                  d.z.GenerateURLFromHashAndExt(r.clanSteamID, t),
                  d.z.GenerateURLFromHashAndExt(r.clanSteamID, a),
                ];
            }
            return [null, null];
          }, [r]);
        return u?.length > 0 && p?.length > 0
          ? a.createElement(
              "a",
              { href: (0, l.k2)(r.GetSaleURL()), className: m.Link },
              a.createElement("img", {
                src: u,
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
        i = r(90626),
        n = r(84933),
        s = r(60383),
        o = r(76217);
      class l extends i.Component {
        state = {
          bRenderChildren: !1,
          nPrevRenderWidth: 0,
          nPrevRenderHeight: 0,
        };
        m_refContainer = i.createRef();
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
              style: n,
              mode: l,
              ...c
            } = this.props,
            m = this.state.bRenderChildren;
          let d = n;
          if (!m) {
            const r = this.state.nPrevRenderWidth || e,
              a = this.state.nPrevRenderHeight || t;
            (void 0 === a && void 0 === r) ||
              (d = { ...n, minHeight: a, minWidth: r });
          }
          const u = this.BLoadAndUnload() ? "repeated" : "once";
          let p = i.createElement(
            s.J,
            {
              ref: this.m_refContainer,
              style: d,
              ...c,
              onVisibilityChange: this.OnVisibilityChange,
              trigger: u,
            },
            m && this.props.children,
          );
          return (
            r && (p = i.createElement(o.Z, { focusableIfEmpty: !0 }, p)), p
          );
        }
      }
      (0, a.Cg)([n.oI], l.prototype, "OnVisibilityChange", null);
    },
    5907: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => Qe });
      var a = r(45699),
        i = r(76217),
        n = r(37788),
        s = r(23310),
        o = r(23809),
        l = r(62093),
        c = r(60014),
        m = r(90626),
        d = r(13871),
        u = r(30894),
        p = r(93973),
        _ = r(16021),
        g = r(55263),
        w = r(12155),
        y = r(32630),
        b = r(4434),
        f = r(52038),
        h = r(61859),
        S = r(60778),
        v = r(25489),
        B = r(44691),
        C = r(78327),
        I = r(39199),
        R = r(40594);
      const E = ({ nPercent: e, size: t = 120, strokeWidth: r = 20 }) => {
        const a = (t - r) / 2,
          i = 2 * Math.PI * a,
          n = i - (e / 100) * i,
          s = 100 == e;
        return m.createElement(
          "div",
          { className: (0, f.A)({ [R.Circular]: !0, [R.Full]: s }) },
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
              strokeDasharray: i,
              strokeDashoffset: n,
              style: { transition: "stroke-dashoffset 0.3s ease-in-out" },
            }),
          ),
        );
      };
      var M,
        D = r(22797),
        A = r(10224),
        T = r(20019),
        N = r(60779),
        F = r(92834),
        U = r(26101),
        z = r(92398),
        q = r(44986),
        G = r(32754),
        W = r(61336),
        P = r(20713),
        x = r(63977),
        Q = r(20194),
        L = r(1035),
        k = r(34181),
        O = r(17720),
        j = r(4796),
        H = r(8092),
        V = r(56545),
        K = r(80613),
        Z = r.n(K),
        $ = r(89068);
      class Y extends K.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.recommendationid || $.Sg(Y.M()),
            K.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  recommendationid: {
                    n: 1,
                    br: $.qM.readUint64String,
                    bw: $.gp.writeUint64String,
                  },
                  review_text: {
                    n: 2,
                    br: $.qM.readString,
                    bw: $.gp.writeString,
                  },
                  voted_up: { n: 3, br: $.qM.readBool, bw: $.gp.writeBool },
                  is_public: { n: 4, br: $.qM.readBool, bw: $.gp.writeBool },
                  language: { n: 5, br: $.qM.readString, bw: $.gp.writeString },
                  is_in_early_access: {
                    n: 6,
                    br: $.qM.readBool,
                    bw: $.gp.writeBool,
                  },
                  received_compensation: {
                    n: 7,
                    br: $.qM.readBool,
                    bw: $.gp.writeBool,
                  },
                  comments_disabled: {
                    n: 8,
                    br: $.qM.readBool,
                    bw: $.gp.writeBool,
                  },
                  hide_in_steam_china: {
                    n: 9,
                    br: $.qM.readBool,
                    bw: $.gp.writeBool,
                  },
                  saved_hardware_id: {
                    n: 10,
                    br: $.qM.readUint64String,
                    bw: $.gp.writeUint64String,
                  },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = $.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return $.BT(Y.M(), e, t);
        }
        static fromObject(e) {
          return $.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Z().BinaryReader)(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return $.zj(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Z().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          $.i0(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Z().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Update_Request";
        }
      }
      class X extends K.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), K.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new X();
        }
        static deserializeBinary(e) {
          let t = new (Z().BinaryReader)(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (Z().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (Z().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Update_Response";
        }
      }
      class J extends K.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.reaction_type || $.Sg(J.M()),
            K.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  reaction_type: {
                    n: 1,
                    br: $.qM.readUint32,
                    bw: $.gp.writeUint32,
                  },
                  count: { n: 2, br: $.qM.readUint32, bw: $.gp.writeUint32 },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = $.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return $.BT(J.M(), e, t);
        }
        static fromObject(e) {
          return $.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Z().BinaryReader)(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return $.zj(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Z().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          $.i0(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Z().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_LoyaltyReaction";
        }
      }
      class ee extends K.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.id || $.Sg(ee.M()),
            K.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  id: { n: 1, br: $.qM.readEnum, bw: $.gp.writeEnum },
                  ranges: { n: 2, c: te, r: !0, q: !0 },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = $.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return $.BT(ee.M(), e, t);
        }
        static fromObject(e) {
          return $.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Z().BinaryReader)(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return $.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Z().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          $.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Z().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_Tag";
        }
      }
      class te extends K.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.start || $.Sg(te.M()),
            K.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  start: { n: 1, br: $.qM.readUint32, bw: $.gp.writeUint32 },
                  end: { n: 2, br: $.qM.readUint32, bw: $.gp.writeUint32 },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = $.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return $.BT(te.M(), e, t);
        }
        static fromObject(e) {
          return $.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Z().BinaryReader)(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return $.zj(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Z().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          $.i0(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Z().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_Tag_Range";
        }
      }
      class re extends K.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.recommendationid || $.Sg(re.M()),
            K.Message.initialize(this, e, 0, -1, [27, 40, 54], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  recommendationid: {
                    n: 1,
                    br: $.qM.readUint64String,
                    bw: $.gp.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: $.qM.readUint64String,
                    bw: $.gp.writeUint64String,
                  },
                  appid: { n: 3, br: $.qM.readUint32, bw: $.gp.writeUint32 },
                  review: { n: 4, br: $.qM.readString, bw: $.gp.writeString },
                  time_created: {
                    n: 5,
                    br: $.qM.readUint32,
                    bw: $.gp.writeUint32,
                  },
                  time_updated: {
                    n: 6,
                    br: $.qM.readUint32,
                    bw: $.gp.writeUint32,
                  },
                  votes_up: { n: 7, br: $.qM.readUint32, bw: $.gp.writeUint32 },
                  votes_down: {
                    n: 8,
                    br: $.qM.readUint32,
                    bw: $.gp.writeUint32,
                  },
                  vote_score: { n: 9, br: $.qM.readFloat, bw: $.gp.writeFloat },
                  language: {
                    n: 10,
                    br: $.qM.readString,
                    bw: $.gp.writeString,
                  },
                  comment_count: {
                    n: 11,
                    br: $.qM.readUint32,
                    bw: $.gp.writeUint32,
                  },
                  voted_up: { n: 12, br: $.qM.readBool, bw: $.gp.writeBool },
                  is_public: { n: 13, br: $.qM.readBool, bw: $.gp.writeBool },
                  moderator_hidden: {
                    n: 14,
                    br: $.qM.readBool,
                    bw: $.gp.writeBool,
                  },
                  flagged_by_developer: {
                    n: 15,
                    br: $.qM.readEnum,
                    bw: $.gp.writeEnum,
                  },
                  report_score: {
                    n: 16,
                    br: $.qM.readUint32,
                    bw: $.gp.writeUint32,
                  },
                  steamid_moderator: {
                    n: 17,
                    br: $.qM.readUint64String,
                    bw: $.gp.writeUint64String,
                  },
                  steamid_developer: {
                    n: 18,
                    br: $.qM.readUint64String,
                    bw: $.gp.writeUint64String,
                  },
                  steamid_dev_responder: {
                    n: 19,
                    br: $.qM.readUint64String,
                    bw: $.gp.writeUint64String,
                  },
                  developer_response: {
                    n: 20,
                    br: $.qM.readString,
                    bw: $.gp.writeString,
                  },
                  time_developer_responded: {
                    n: 21,
                    br: $.qM.readUint32,
                    bw: $.gp.writeUint32,
                  },
                  developer_flag_cleared: {
                    n: 22,
                    br: $.qM.readBool,
                    bw: $.gp.writeBool,
                  },
                  written_during_early_access: {
                    n: 23,
                    br: $.qM.readBool,
                    bw: $.gp.writeBool,
                  },
                  votes_funny: {
                    n: 24,
                    br: $.qM.readUint32,
                    bw: $.gp.writeUint32,
                  },
                  received_compensation: {
                    n: 25,
                    br: $.qM.readBool,
                    bw: $.gp.writeBool,
                  },
                  unverified_purchase: {
                    n: 26,
                    br: $.qM.readBool,
                    bw: $.gp.writeBool,
                  },
                  review_qualities: {
                    n: 27,
                    r: !0,
                    q: !0,
                    br: $.qM.readEnum,
                    pbr: $.qM.readPackedEnum,
                    bw: $.gp.writeRepeatedEnum,
                  },
                  weighted_vote_score: {
                    n: 28,
                    br: $.qM.readFloat,
                    bw: $.gp.writeFloat,
                  },
                  moderation_note: {
                    n: 29,
                    br: $.qM.readString,
                    bw: $.gp.writeString,
                  },
                  payment_method: {
                    n: 30,
                    br: $.qM.readInt32,
                    bw: $.gp.writeInt32,
                  },
                  playtime_2weeks: {
                    n: 31,
                    br: $.qM.readInt32,
                    bw: $.gp.writeInt32,
                  },
                  playtime_forever: {
                    n: 32,
                    br: $.qM.readInt32,
                    bw: $.gp.writeInt32,
                  },
                  last_playtime: {
                    n: 33,
                    br: $.qM.readInt32,
                    bw: $.gp.writeInt32,
                  },
                  comments_disabled: {
                    n: 34,
                    br: $.qM.readBool,
                    bw: $.gp.writeBool,
                  },
                  playtime_at_review: {
                    n: 35,
                    br: $.qM.readInt32,
                    bw: $.gp.writeInt32,
                  },
                  approved_for_china: {
                    n: 36,
                    br: $.qM.readBool,
                    bw: $.gp.writeBool,
                  },
                  ban_check_result: {
                    n: 37,
                    br: $.qM.readEnum,
                    bw: $.gp.writeEnum,
                  },
                  refunded: { n: 38, br: $.qM.readBool, bw: $.gp.writeBool },
                  account_score_spend: {
                    n: 39,
                    br: $.qM.readInt32,
                    bw: $.gp.writeInt32,
                  },
                  reactions: { n: 40, c: J, r: !0, q: !0 },
                  ipaddress: {
                    n: 41,
                    br: $.qM.readString,
                    bw: $.gp.writeString,
                  },
                  hidden_in_steam_china: {
                    n: 42,
                    br: $.qM.readBool,
                    bw: $.gp.writeBool,
                  },
                  steam_china_location: {
                    n: 43,
                    br: $.qM.readString,
                    bw: $.gp.writeString,
                  },
                  category_ascii_pct: {
                    n: 44,
                    br: $.qM.readUint32,
                    bw: $.gp.writeUint32,
                  },
                  category_meme_pct: {
                    n: 45,
                    br: $.qM.readUint32,
                    bw: $.gp.writeUint32,
                  },
                  category_offtopic_pct: {
                    n: 46,
                    br: $.qM.readUint32,
                    bw: $.gp.writeUint32,
                  },
                  category_uninformative_pct: {
                    n: 47,
                    br: $.qM.readUint32,
                    bw: $.gp.writeUint32,
                  },
                  category_votefarming_pct: {
                    n: 48,
                    br: $.qM.readUint32,
                    bw: $.gp.writeUint32,
                  },
                  deck_playtime_at_review: {
                    n: 49,
                    br: $.qM.readInt32,
                    bw: $.gp.writeInt32,
                  },
                  is_bot_review_pct: {
                    n: 50,
                    br: $.qM.readUint32,
                    bw: $.gp.writeUint32,
                  },
                  positivity_pct: {
                    n: 51,
                    br: $.qM.readUint32,
                    bw: $.gp.writeUint32,
                  },
                  tags_with_ranges: { n: 54, c: ee, r: !0, q: !0 },
                  saved_hardware_id: {
                    n: 56,
                    br: $.qM.readUint64String,
                    bw: $.gp.writeUint64String,
                  },
                  hardware_cluster_id: {
                    n: 57,
                    br: $.qM.readUint64String,
                    bw: $.gp.writeUint64String,
                  },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = $.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return $.BT(re.M(), e, t);
        }
        static fromObject(e) {
          return $.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Z().BinaryReader)(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return $.zj(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Z().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          $.i0(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Z().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "RecommendationDetails";
        }
      }
      class ae extends K.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.appid || $.Sg(ae.M()),
            K.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  appid: { n: 1, br: $.qM.readUint32, bw: $.gp.writeUint32 },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = $.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return $.BT(ae.M(), e, t);
        }
        static fromObject(e) {
          return $.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Z().BinaryReader)(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return $.zj(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Z().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          $.i0(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Z().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetFriendsRecommendedApp_Request";
        }
      }
      class ie extends K.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.accountids_recommended || $.Sg(ie.M()),
            K.Message.initialize(this, e, 0, -1, [1, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  accountids_recommended: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: $.qM.readUint32,
                    pbr: $.qM.readPackedUint32,
                    bw: $.gp.writeRepeatedUint32,
                  },
                  accountids_not_recommended: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: $.qM.readUint32,
                    pbr: $.qM.readPackedUint32,
                    bw: $.gp.writeRepeatedUint32,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = $.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return $.BT(ie.M(), e, t);
        }
        static fromObject(e) {
          return $.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Z().BinaryReader)(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return $.zj(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Z().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          $.i0(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Z().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetFriendsRecommendedApp_Response";
        }
      }
      class ne extends K.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.requests || $.Sg(ne.M()),
            K.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: { requests: { n: 1, c: se, r: !0, q: !0 } },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = $.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return $.BT(ne.M(), e, t);
        }
        static fromObject(e) {
          return $.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Z().BinaryReader)(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return $.zj(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Z().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          $.i0(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Z().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Request";
        }
      }
      class se extends K.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.steamid || $.Sg(se.M()),
            K.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  steamid: {
                    n: 1,
                    br: $.qM.readUint64String,
                    bw: $.gp.writeUint64String,
                  },
                  appid: { n: 2, br: $.qM.readUint32, bw: $.gp.writeUint32 },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = $.w0(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return $.BT(se.M(), e, t);
        }
        static fromObject(e) {
          return $.Uq(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Z().BinaryReader)(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return $.zj(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Z().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          $.i0(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Z().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Request_RecommendationRequest";
        }
      }
      class oe extends K.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.recommendations || $.Sg(oe.M()),
            K.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: { recommendations: { n: 1, c: re, r: !0, q: !0 } },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = $.w0(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return $.BT(oe.M(), e, t);
        }
        static fromObject(e) {
          return $.Uq(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Z().BinaryReader)(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return $.zj(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Z().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          $.i0(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Z().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Response";
        }
      }
      !(function (e) {
        (e.Update = function (e, t) {
          return e.SendMsg("UserReviews.Update#1", (0, V.I8)(Y, t), X, {
            ePrivilege: 3,
          });
        }),
          (e.GetFriendsRecommendedApp = function (e, t) {
            return e.SendMsg(
              "UserReviews.GetFriendsRecommendedApp#1",
              (0, V.I8)(ae, t),
              ie,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetIndividualRecommendations = function (e, t) {
            return e.SendMsg(
              "UserReviews.GetIndividualRecommendations#1",
              (0, V.I8)(ne, t),
              oe,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          });
      })(M || (M = {}));
      var le = r(41735),
        ce = r.n(le),
        me = r(3734);
      class de {
        static async LoadFriendsRecommendedApp(e, t) {
          const r = V.w.Init(ae);
          r.Body().set_appid(t);
          const a = await M.GetFriendsRecommendedApp(e, r),
            i = a.GetEResult();
          if (1 == i) return a.Body().toObject();
          throw `Error ${i} failed to call GetFriendsRecommendedApp ${t}`;
        }
        static async LoadStoreRelevanceData(e) {
          let t = { appid: e },
            r = { arrSimilarPlayedApps: [], bRecommendedByIR: !1 };
          const a = (
            await ce().get(
              `${C.TS.STORE_BASE_URL}explore/ajaxgetstorerelevancedata`,
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
      var ue = r(57834),
        pe = r.n(ue),
        _e = r(14336),
        ge = r(26505),
        we = r(6083);
      const ye = new S.wd("AppRelevance").Debug;
      function be(e) {
        const {
            appID: t,
            bShowAvatars: r,
            storeItem: a,
            bHideDescription: i,
            bShowCuratorInfo: n,
            bShowCreatorInfo: s,
          } = e,
          l = (0, ge.Nd)(t),
          c = (function (e) {
            const t = (0, o.KV)();
            return (0, Q.I)({
              queryKey: ["AppRelevanceStore", "FriendsRecommended", e],
              queryFn: () => de.LoadFriendsRecommendedApp(t, e),
              enabled: C.iA.logged_in,
            });
          })(t),
          d = (function (e) {
            return (0, Q.I)({
              queryKey: ["AppRelevanceStore", "StoreRelevance", e],
              queryFn: () => de.LoadStoreRelevanceData(e),
              enabled: C.iA.logged_in,
            });
          })(t),
          p = (function () {
            const { data: e } = (0, me.PG)("App Relevance Store Top Sellers", {
              sort: 11,
              start: 0,
              count: 100,
            });
            return e;
          })(),
          g = (0, Q.I)({
            queryKey: ["SimilarPlayedAppsLoad", t],
            queryFn: () =>
              _.A.Get().QueueMultipleAppRequests(
                d.data.arrSimilarPlayedApps?.map((e) => e.appid),
                { include_basic_info: !0, include_assets: !0 },
              ),
            enabled: d.isSuccess,
          }),
          w = (function (e, t) {
            const r = (0, m.useMemo)(
              () => u.Fm.Get().GetRecommendingCuratorsForApp(e) || [],
              [e],
            );
            return (0, Q.I)({
              queryKey: ["RecommendingCurators", e],
              queryFn: () =>
                Promise.all(
                  r?.map((e) => j.ac.LoadClanInfoForClanAccountID(e)),
                ),
              enabled: !!t && r && r.length > 0,
            });
          })(t, n),
          y = (0, m.useMemo)(() => {
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
                  u.Fm.Get().BIsFollowingCurator(e.nAccountID),
                ))),
              e
            );
          }, [a]),
          b = (0, Q.I)({
            queryKey: ["FollowedCreators", t],
            queryFn: () =>
              j.ac
                .LoadClanInfoForClanAccountID(y[0].nAccountID)
                .then((e) => ({ clanInfo: e, type: y[0].type })),
            enabled: !!s && y && y.length > 0,
          }),
          S = (0, Q.I)({
            queryKey: ["PlayerSummaries", t, r],
            queryFn: async () => {
              let e = [],
                t = [],
                a = [];
              const i = r ? 10 : 1;
              for (
                let t = 0;
                t < c.data.accountids_recommended?.length && t < i;
                t++
              ) {
                const r = O.b.InitFromAccountID(
                  c.data.accountids_recommended[t],
                );
                e.push(r.ConvertTo64BitString());
              }
              for (let e = 0; e < l.data.in_wishlist?.length && e < i; e++) {
                const r = new O.b(l.data.in_wishlist[e].steamid);
                t.push(r.ConvertTo64BitString());
              }
              for (let e = 0; e < l.data.owns?.length && e < i; e++) {
                const t = new O.b(l.data.owns[e].steamid);
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
          d.isLoading ||
          c.isLoading ||
          l.isLoading ||
          w.isLoading ||
          b.isLoading ||
          S.isLoading
        )
          return m.createElement(D.t, { size: "medium", position: "center" });
        let v = [];
        d.isSuccess &&
          d.data.arrSimilarPlayedApps &&
          d.data.arrSimilarPlayedApps.forEach((e) => {
            const r = _.A.Get().GetApp(e.appid);
            r
              ? v.push(
                  m.createElement(Se, {
                    key: e.appid,
                    lifetimePlaytime: e.playtimeForever,
                    storeItem: r,
                  }),
                )
              : console.error("Failed to load store data ", t);
          });
        const B = p.GetItemIDs().findIndex((e) => e.appid === t),
          I = d.data?.bRecommendedByIR,
          R = v.length > 0,
          E = l.data?.owns?.length,
          M = l.data?.in_wishlist?.length,
          A = c.data?.accountids_recommended?.length;
        let T = 0;
        return (
          E > 0 && T++,
          M > 0 && T++,
          A > 0 && T++,
          I && T++,
          B >= 0 && T++,
          v.length > 0 && T++,
          n && w?.data?.length > 0 && T++,
          s && Boolean(b.data) && T++,
          ye(
            "FriendsOwned: ",
            E,
            " FriendsWishlisted: ",
            M,
            "cRecommended: ",
            A,
          ),
          m.createElement(
            m.Fragment,
            null,
            T > 0 &&
              m.createElement(
                m.Fragment,
                null,
                m.createElement(
                  "div",
                  { className: pe().WhyRelevant },
                  (0, h.we)("#DiscoveryQueue_WhyRelevant"),
                ),
                m.createElement(
                  "div",
                  { role: "list", className: pe().RelevantCtn },
                  R &&
                    m.createElement(
                      Re,
                      { header: (0, h.we)("#DiscoveryQueue_SimilarGames") },
                      m.createElement(
                        "div",
                        { className: pe().ReleventSimilarAppsCtn },
                        v,
                      ),
                    ),
                  n &&
                    w?.data?.length > 0 &&
                    m.createElement(
                      Re,
                      {
                        header: (0, h.we)(
                          "#ContentHub_Recommendation_Curators",
                        ),
                      },
                      m.createElement(
                        "div",
                        {
                          className: (0, f.A)(
                            pe().ReleventSimilarAppsCtn,
                            pe().RecommendingCuratorsCtn,
                          ),
                        },
                        w.data
                          .filter(Boolean)
                          .map((e) =>
                            m.createElement(he, {
                              key: "curator_" + e.clanAccountID,
                              curator: e,
                            }),
                          ),
                      ),
                    ),
                  s &&
                    Boolean(b.data) &&
                    m.createElement(fe, { creatorInfo: b.data }),
                  B >= 0 &&
                    m.createElement(Re, {
                      header: (0, h.um)(
                        "#DiscoveryQueue_TopSellers",
                        (0, we.D)(B + 1),
                        m.createElement("span", {
                          className: pe().RelevantTextBold,
                        }),
                      ),
                    }),
                  I &&
                    !R &&
                    m.createElement(Re, {
                      header: (0, h.we)("#DiscoveryQueue_RecommendedByIR"),
                    }),
                  m.createElement(ve, {
                    bShowAvatars: r,
                    count: c.data?.accountids_recommended?.length,
                    locToken: "#DiscoveryQueue_FriendsRecommended",
                    arrSteamIDs: S.data?.rgRecommendedFriends,
                  }),
                  m.createElement(ve, {
                    bShowAvatars: r,
                    count: l.data?.owns?.length,
                    locToken: "#DiscoveryQueue_FriendsOwned",
                    arrSteamIDs: S.data?.rgOwnedFriends,
                  }),
                  m.createElement(ve, {
                    bShowAvatars: r,
                    count: l.data?.in_wishlist?.length,
                    locToken: "#DiscoveryQueue_FriendsWishlisted",
                    arrSteamIDs: S.data?.rgWishlistFriends,
                  }),
                ),
              ),
            i && 0 != T
              ? m.createElement("div", {
                  "aria-label": a.GetShortDescription(),
                })
              : m.createElement(
                  "div",
                  {
                    className: (0, f.A)(pe().AppDescription, T && pe().Divider),
                  },
                  a.GetShortDescription(),
                ),
          )
        );
      }
      function fe(e) {
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
          ? m.createElement(Re, {
              header: (0, h.PP)(
                r,
                m.createElement(
                  "span",
                  { className: pe().RelevantTextBold },
                  t.clanInfo?.group_name,
                ),
              ),
            })
          : null;
      }
      function he(e) {
        const { curator: t } = e,
          { creatorHome: r } = (0, H.FV)(t?.clanAccountID);
        return t && r
          ? m.createElement(
              a.Ii,
              { href: r.GetCreatorHomeURL(null) },
              m.createElement("img", { src: t.avatar_medium_url }),
            )
          : null;
      }
      function Se(e) {
        const { lifetimePlaytime: t, storeItem: r } = e;
        return m.createElement(
          "div",
          { className: pe().SimilarAppCtn },
          m.createElement(
            U.Qf,
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
              className: pe().SimilarAppImg,
              alt: r.GetName(),
              src: r.GetAssets().GetSmallCapsuleURL(),
            }),
          ),
        );
      }
      function ve(e) {
        const { arrSteamIDs: t, count: r, locToken: a, bShowAvatars: i } = e;
        return r
          ? 1 != r || i
            ? m.createElement(
                Re,
                {
                  header: (0, h.um)(
                    a,
                    r,
                    m.createElement("span", {
                      className: pe().RelevantTextBold,
                    }),
                  ),
                },
                i &&
                  t.length > 0 &&
                  m.createElement(
                    "div",
                    { className: pe().FriendAvatarsCtn },
                    1 == r
                      ? m.createElement(Ie, { steamid: t[0] })
                      : m.createElement(Ce, { arrSteamIDs: t }),
                  ),
              )
            : m.createElement(Re, {
                header: (0, h.PP)(
                  a + "_Single",
                  m.createElement(Be, { steamid: t[0] }),
                ),
              })
          : null;
      }
      function Be(e) {
        const { steamid: t } = e,
          { data: r } = (0, _e.js)(t);
        return r && r.m_bInitialized
          ? m.createElement(
              "span",
              {
                "data-miniprofile": "s" + r.m_steamid.ConvertTo64BitString(),
                className: pe().RelevantTextBold,
              },
              r.m_strPlayerName,
            )
          : null;
      }
      function Ce(e) {
        const { arrSteamIDs: t } = e,
          r = (0, _e.DW)(t);
        return m.createElement(
          m.Fragment,
          null,
          r.map(
            ({ data: e }) =>
              e &&
              m.createElement(L.i8, {
                key: e.m_steamid.ConvertTo64BitString(),
                "data-miniprofile": "s" + e.m_steamid.ConvertTo64BitString(),
                persona: e,
                size: "Small",
                statusPosition: "right",
              }),
          ),
        );
      }
      function Ie(e) {
        const { steamid: t } = e,
          { data: r } = (0, _e.js)(t);
        return r
          ? m.createElement(
              i.Z,
              { className: pe().FriendBlockCtn, "data-miniprofile": "s" + t },
              m.createElement(L.i8, {
                persona: r,
                size: "Small",
                statusPosition: "right",
              }),
              m.createElement(k.D, {
                className: pe().PersonaStatus,
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
      function Re(e) {
        const { children: t, header: r } = e;
        return m.createElement(
          "div",
          { className: pe().RelevantItem },
          m.createElement(
            "div",
            { className: pe().RelevantCheck },
            m.createElement(w.Jlk, null),
          ),
          m.createElement(
            "div",
            { className: pe().RelevantColumn },
            m.createElement("div", { className: pe().ReleventText }, r),
            t,
          ),
        );
      }
      var Ee = r(60338),
        Me = r(35380);
      new S.wd("DiscoveryQueueApp").Debug;
      function De(e) {
        const {
            appID: t,
            nItemHeight: r,
            nItemWidth: a,
            selected: n,
            fnFocused: s,
            eStoreDiscoveryQueueType: o,
            storePageFilter: l,
            bPreferDemoStorePage: c,
            elVideo: u,
            elDetails: p,
            appAriaIDs: _,
          } = e,
          [w] = (0, g.t7)(t, Ee.Gy),
          y = (0, C.Qn)(),
          b = (0, d.R7)(),
          S = b?.ownerWindow || window,
          v = Ae(w, o, l, c),
          { bIsIgnored: B, fnUpdateIgnored: I } = (0, Ee.TK)(t),
          { bIsWishlisted: R, fnUpdateWishlist: E } = (0, Ee.u4)(t),
          M = m.useRef(void 0);
        if (
          (m.useEffect(() => {
            n && M.current && M.current.focus({ preventScroll: !0 });
          }, [n]),
          !w)
        )
          return console.warn("Error: missing store item for appid ", t), null;
        const D = { width: a || void 0, height: r || void 0 };
        return m.createElement(
          i.Z,
          {
            "aria-labelledby": (0, F.q)(
              _.nameId,
              _.tagsId,
              _.reviewId,
              _.relevanceId,
              _.buttonsId,
            ),
            ref: M,
            style: D,
            className: (0, f.A)(pe().DiscoveryQueueApp, n && pe().Selected),
            onOptionsActionDescription: R
              ? (0, h.we)("#DiscoveryQueue_RemoveFromWishlist")
              : (0, h.we)("#DiscoveryQueue_AddToWishlist"),
            onOptionsButton: E,
            onOKActionDescription: (0, h.we)("#DiscoveryQueue_ViewStorePage"),
            onOKButton: () => {
              S.location.href = v;
            },
            onSecondaryActionDescription: B
              ? (0, h.we)("#DiscoveryQueue_Undo")
              : (0, h.we)("#DiscoveryQueue_IgnoreLink"),
            onSecondaryButton: I,
            fnScrollIntoViewHandler: () => (s(), !0),
          },
          m.createElement(
            "div",
            { className: (0, f.A)(pe().IgnoredCtn, B && pe().Active) },
            m.createElement(
              "div",
              { className: (0, f.A)(pe().IgnoredInfo, B && pe().Active) },
              m.createElement(
                "div",
                { className: pe().IgnoredTitle },
                (0, h.we)("#DiscoveryQueue_Ignored"),
              ),
              m.createElement(
                "div",
                { className: pe().IgnoredDescription },
                (0, h.we)("#DiscoveryQueue_IgnoredConfirmation"),
              ),
              m.createElement(
                i.Z,
                {
                  className: (0, f.A)(pe().QueueButton, pe().UndoIgnoreButton),
                  onClick: I,
                },
                y &&
                  m.createElement(q.$m, {
                    button: P.g4.X,
                    type: q.wt.Light,
                    size: q.xY.Medium,
                  }),
                (0, h.we)("#DiscoveryQueue_Undo"),
              ),
            ),
          ),
          u,
          p,
        );
      }
      function Ae(e, t, r, a) {
        const i = (0, c.n9)();
        return m.useMemo(() => {
          if (!e) return;
          const n = (0, I.Bk)(r),
            s = t >= 0 ? "?inqueue=" + t + (r ? "_" + n : "") : "",
            o = (0, c.bV)(i, e.GetStorePageURL(a) + s);
          return (0, W.NT)(o);
        }, [a, t, i, e, r]);
      }
      function Te(e) {
        const {
            appID: t,
            bShowMinimizedDisplay: r,
            eStoreDiscoveryQueueType: a,
            storePageFilter: n,
            bPreferDemoStorePage: s,
            appAriaIDs: o,
          } = e,
          [l] = (0, g.t7)(t, Ee.Gy),
          c = (0, Me.$5)(t),
          { bIsIgnored: d, fnUpdateIgnored: u } = (0, Ee.TK)(t),
          { bIsWishlisted: p, fnUpdateWishlist: _ } = (0, Ee.u4)(t),
          y = Ae(l, a, n, s),
          b = (0, C.Qn)(),
          S = b;
        if (!l) return;
        const v = l.GetAssets().GetLibraryCapsuleURL(),
          B = l.GetAssets().GetHeaderURL();
        return m.createElement(
          i.Z,
          { className: pe().AppDetailsCtn },
          m.createElement(
            "div",
            { className: pe().AppDetailsCtnTop },
            v &&
              m.createElement(
                "a",
                { className: (0, f.A)(pe().CapsuleLink), href: y },
                m.createElement("img", {
                  className: pe().AppLibraryHero,
                  src: v,
                }),
                B &&
                  m.createElement("img", { className: pe().AppHeader, src: B }),
              ),
            m.createElement(
              "div",
              { id: o.nameId, className: pe().RightColumn },
              m.createElement(
                "a",
                { className: (0, f.A)(pe().AppName), href: y },
                l.GetName(),
              ),
              m.createElement(z.n2, {
                bSingleLineMode: !0,
                info: { id: t, type: (0, T.U)(l.GetAppType()) },
              }),
            ),
            m.createElement(Ne, {
              rgTagIDs: l.GetTagIDs(),
              ariaLabelID: o.tagsId,
            }),
            m.createElement(
              "div",
              { className: pe().AppReviews, id: o.reviewId },
              m.createElement(U.Jz, {
                bShowTooltip: !0,
                bTruncateTotalReviews: r,
                appInfo: { id: t, type: (0, T.U)(l.GetAppType()) },
              }),
            ),
            m.createElement(
              "div",
              { id: o.relevanceId, className: pe().AppRelevanceCtn },
              m.createElement(be, {
                bHideDescription: b,
                bShowAvatars: !r,
                storeItem: l,
                appID: t,
              }),
            ),
          ),
          !b &&
            m.createElement(
              "div",
              { className: pe().AppActionButtonsCtn },
              m.createElement(
                "div",
                { id: o.buttonsId, className: pe().AppActionJustButtonsCtn },
                m.createElement(
                  "div",
                  { className: pe().ButtonsRowWrap },
                  l.BHasDemo() &&
                    m.createElement(x.j, {
                      id: c,
                      className: (0, f.A)(
                        pe().QueueButton,
                        pe().Primary,
                        pe().Launch,
                      ),
                    }),
                  m.createElement(
                    "a",
                    {
                      className: (0, f.A)(pe().QueueButton, pe().Primary),
                      href: y,
                    },
                    S &&
                      m.createElement(q.$m, {
                        button: P.g4.Y,
                        type: q.wt.Light,
                        size: q.xY.Medium,
                        additionalClassName: pe().YGlyph,
                      }),
                    " ",
                    (0, h.we)("#DiscoveryQueue_ViewStorePage"),
                  ),
                  m.createElement(
                    G.he,
                    {
                      toolTipContent: p
                        ? (0, h.we)("#RemoveFromWishlist_ttip")
                        : (0, h.we)("#AddToWishlist_ttip"),
                    },
                    m.createElement(
                      i.Z,
                      {
                        "aria-label": p
                          ? (0, h.we)("#Sale_RemoveFromWishlist")
                          : (0, h.we)("#Sale_AddToWishlist"),
                        focusable: !0,
                        className: (0, f.A)(pe().QueueButton, p && pe().Active),
                        onClick: _,
                      },
                      S &&
                        m.createElement(q.$m, {
                          button: P.g4.Y,
                          type: q.wt.Light,
                          size: q.xY.Medium,
                          additionalClassName: pe().YGlyph,
                        }),
                      p
                        ? m.createElement(w.qnF, null)
                        : m.createElement(w.T4m, null),
                    ),
                  ),
                  m.createElement(
                    G.he,
                    {
                      toolTipContent: (0, h.we)(
                        "#SaleTrailerCarousel_IgnoreLink_ttip",
                      ),
                    },
                    m.createElement(
                      i.Z,
                      {
                        "aria-label": (0, h.we)("#DiscoveryQueue_IgnoreLink"),
                        focusable: !0,
                        className: (0, f.A)(pe().QueueButton, d && pe().Active),
                        onClick: u,
                      },
                      m.createElement(w.NtH, null),
                    ),
                  ),
                ),
              ),
            ),
        );
      }
      function Ne(e) {
        const { rgTagIDs: t, ariaLabelID: r } = e,
          a = [...(0, Ee.W3)(t)].slice(0, 8);
        return m.createElement(
          "div",
          { id: r, role: "list", className: pe().AppTagsCtn },
          a.map((e) =>
            m.createElement(N.Fz, {
              key: e,
              className: pe().TagEntry,
              tagID: e,
            }),
          ),
        );
      }
      var Fe = r(60884),
        Ue = r(90511),
        ze = r(17376);
      const qe = new S.wd("DiscoveryQueueWizard").Debug,
        Ge = 1,
        We = 1400,
        Pe = "discoveryqueue2022";
      async function xe(e, t, r, a) {
        let i = [],
          n = !1;
        try {
          const { appids: s, exhausted: o } = await I.aI
            .Get()
            .GetDiscoveryQueueAppsOfType(e, t, a);
          (i = [...s]),
            (n = o),
            r && -1 === i.findIndex((e) => e === r) && i.unshift(r),
            await _.A.Get().QueueMultipleAppRequests(i, { ...Ee.Gy, ...Ue.LB });
        } catch (e) {
          console.error("Failed getting discovery queue apps", e);
        }
        return { appids: i, exhausted: n };
      }
      function Qe(e) {
        const [t, r] = m.useState(!1),
          a = (0, o.KV)();
        return (
          (0, m.useEffect)(() => {
            I.aI.Init(a), r(!0);
          }, [a]),
          t ? m.createElement(Le, { ...e }) : null
        );
      }
      function Le(e) {
        const {
            eStoreDiscoveryQueueType: t,
            fnCloseModal: r,
            includeAppID: n,
            storePageFilter: o,
            bPreferDemoStorePage: p,
            bShowAOAutoPlayWarning: _,
          } = e,
          [g, S] = m.useState(0),
          [R, E] = m.useState(void 0),
          [M, D] = m.useState(0),
          T = (0, d.R7)(),
          N = T?.ownerWindow || window,
          F = (0, c.ru)(Pe),
          [U, z] = m.useState(0),
          q = (0, l.b)();
        (0, B.E)("ArrowLeft", () => Q(!1), !0, !0),
          (0, B.E)("Left", () => Q(!1), !0, !0),
          (0, B.E)("ArrowRight", () => Q(!0), !0, !0),
          (0, B.E)("Right", () => Q(!0), !0, !0),
          (0, B.E)("Escape", () => r?.(), !0, !0),
          (0, B.E)("Esc", () => r?.(), !0, !0);
        const G = m.useMemo(() => Boolean(N.innerWidth < We), [N]),
          { fnGetDiscoveryQueue: P, rgAppIDs: x } = (function (e, t, r) {
            const [a, i] = m.useState([]),
              n = (0, b.m)("DiscoveryQueueWizard"),
              s = async (s) => {
                let { appids: o } = await xe(e, !s, s && r, t);
                if (s && !o.length) {
                  let { appids: r } = await xe(e, !0, void 0, t);
                  o = r;
                }
                if (!n?.token?.reason) {
                  const e = [...(a ?? []), ...o, Ge];
                  i(e);
                }
                qe("Loaded new discovery queue apps: ", o);
              };
            return { fnGetDiscoveryQueue: s, rgAppIDs: a };
          })(t, o, n);
        m.useEffect(() => {
          P(!0), u.Fm.Get().HintLoad();
        }, []),
          m.useEffect(() => {
            const e = x[g];
            e != R && (e && e != Ge && q.AddImpression(e, F), E(e));
          }, [q, g, R, x, F]);
        const Q = (e) => {
          const t = v.OQ(g + (e ? 1 : -1), 0, x.length - 1);
          t != g &&
            (S(t), qe("New selected index: ", t, " Prev selected index: ", g));
        };
        m.useEffect(() => {
          x?.length &&
            x[g] !== Ge &&
            (z((e) => e + 1),
            I.aI
              .Get()
              .SkipDiscoveryQueueItem(x[g], t, o)
              .then(() => z((e) => e - 1)));
        }, [t, g, x, o]),
          m.useEffect(() => {
            x.length != M &&
              (D(x.length), x.length > M && x[g] == Ge && S(g + 1));
          }, [M, g, x]);
        const [L] = m.useState(new Map()),
          k = (0, I.WX)(t, o),
          O = !(0, A.c5)() && g > 0,
          j = !(0, A.c5)() && g < x.length - 1,
          {
            refContainer: H,
            bIsDragging: V,
            nDragOffset: K,
            nDragSelectedOffsetIndex: Z,
            handleTouchStart: $,
            handleTouchMove: Y,
            handleTouchEnd: X,
          } = (function (e, t) {
            const r = m.useRef(null),
              [a, i] = m.useState(0),
              [n, s] = m.useState(!1),
              [o, l] = m.useState(0),
              c = m.useRef(0),
              d = 50,
              u = (e) => {
                s(!0), (c.current = e.touches[0].clientX), i(0), l(0);
              },
              p = (e) => {
                if (!n) return;
                const t = e.touches[0].clientX - c.current;
                i(t), l(a > d ? 1 : a < -d ? -1 : 0);
              },
              _ = () => {
                n &&
                  (s(!1),
                  a > d
                    ? e((e) => Math.max(e - 1, 0))
                    : a < -d && e((e) => Math.min(e + 1, t - 1)),
                  i(0),
                  l(0));
              };
            return {
              refContainer: r,
              bIsDragging: n,
              nDragOffset: a,
              nDragSelectedOffsetIndex: o,
              handleTouchStart: u,
              handleTouchMove: p,
              handleTouchEnd: _,
            };
          })((e) => S(e), x.length),
          J = (e) => v.W(g + e, x) && (v.LA(e, -1, 1) || V),
          ee = (0, c.aL)(C.TS.STORE_BASE_URL + "explore?dq=widget"),
          te = x[g] !== Ge,
          { nQueueStart: re, nCount: ae } = (function (e, t) {
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
            const i = a - r;
            return { nQueueStart: r, nQueueEnd: a, nCount: i };
          })(g, x);
        return m.createElement(
          y.Ay,
          { feature: Pe },
          m.createElement(
            i.Z,
            {
              role: "dialog",
              focusable: !1,
              "flow-children": "column",
              className: pe().DiscoveryQueueCarouselCtn,
              navEntryPreferPosition: s.iU.LAST,
              onCancelButton: () => r?.(),
              onCancelActionDescription: (0, h.we)("#Button_Close"),
            },
            m.createElement(
              "div",
              {
                className: pe().DiscoveryQueueWrapper,
                onClick: (e) => {
                  e.target == e.currentTarget && (r?.(), e.stopPropagation());
                },
              },
              k.length > 0 &&
                m.createElement(
                  i.Z,
                  {
                    "flow-children": "row",
                    className: pe().DiscoveryQueueName,
                  },
                  k,
                ),
              m.createElement(
                i.Z,
                { "flow-children": "row", className: pe().TopBarCtn },
                m.createElement(
                  i.Z,
                  { className: pe().LearnMore },
                  (0, h.oW)(
                    "#DiscoveryQueue_LearnMore_Default",
                    m.createElement(a.Ii, {
                      className: pe().LearnMoreLink,
                      href: (0, W.NT)(ee),
                    }),
                  ),
                ),
                m.createElement(
                  i.Z,
                  { className: pe().ControlsCtn },
                  m.createElement(
                    i.Z,
                    {
                      focusable: !0,
                      className: pe().QueueButton,
                      onClick: r,
                      "aria-label": (0, h.we)("#Button_Close"),
                      onActivate: () => r && r(),
                    },
                    m.createElement(w.X, null),
                  ),
                ),
              ),
              m.createElement(
                i.Z,
                {
                  role: "button",
                  "aria-label": (0, h.we)("#Carousel_Next"),
                  onClick: () => Q(!1),
                  className: (0, f.A)(
                    pe().QueueNavArrow,
                    pe().LeftArrow,
                    O && pe().Enable,
                  ),
                },
                m.createElement(w.l8x, { angle: 180 }),
              ),
              m.createElement(
                i.Z,
                {
                  role: "button",
                  "aria-label": (0, h.we)("#Carousel_Prev"),
                  onClick: () => Q(!0),
                  className: (0, f.A)(
                    pe().QueueNavArrow,
                    pe().RightArrow,
                    j && pe().Enable,
                  ),
                },
                m.createElement(w.l8x, { angle: 0 }),
              ),
              m.createElement(
                i.Z,
                {
                  ref: H,
                  className: pe().DiscoveryQueueItemsCtn,
                  focusable: !1,
                  onTouchStart: $,
                  onTouchMove: Y,
                  onTouchEnd: X,
                },
                [-2, -1, 0, 1, 2].map((e) =>
                  m.createElement(
                    "div",
                    {
                      key: g + e,
                      className: (0, f.A)({
                        [pe().DiscoveryQueueItemPositioner]: !0,
                        [pe().Dragging]: V,
                        [pe().InRange]: J(e),
                        [pe().FarLeft]: -2 == e,
                        [pe().Left]: -1 == e,
                        [pe().Current]: 0 == e,
                        [pe().Right]: 1 == e,
                        [pe().FarRight]: 2 == e,
                        [pe().Selected]: e + Z == 0,
                      }),
                      style: { "--dragOffsetX": `${K}px` },
                    },
                    J(e) &&
                      m.createElement(ke, {
                        eStoreDiscoveryQueueType: t,
                        storePageFilter: o,
                        rgAppIDs: x,
                        index: g + e,
                        bShowMinimizedDisplay: G,
                        selectedIndex: g,
                        bPreferDemoStorePage: Boolean(p),
                        mapViewedAppCount: L,
                        fnCloseModal: r,
                        fnLoadNextQueue: () => P(!1),
                        fnAdvance: Q,
                        bSkipAppRequestPending: Boolean(0 != U),
                        showAOAutoPlayWarning: Boolean(_),
                      }),
                  ),
                ),
              ),
              m.createElement(Fe.A, {
                className: (0, f.A)(!te && pe().ProgressHidden),
                showPriorAsActive: !0,
                count: ae,
                selectedIndex: g - re,
              }),
            ),
          ),
        );
      }
      function ke(e) {
        const {
            eStoreDiscoveryQueueType: t,
            storePageFilter: r,
            rgAppIDs: a,
            index: i,
            bShowMinimizedDisplay: n,
            selectedIndex: s,
            bPreferDemoStorePage: o,
            mapViewedAppCount: l,
            fnCloseModal: c,
            fnLoadNextQueue: d,
            fnAdvance: u,
            bSkipAppRequestPending: p,
            showAOAutoPlayWarning: _,
          } = e,
          [g, w] = m.useState(!1),
          y = {
            nameId: m.useId(),
            tagsId: m.useId(),
            reviewId: m.useId(),
            relevanceId: m.useId(),
            buttonsId: m.useId(),
          },
          b = () => {
            s != i && u(i > s);
          },
          f = s === i,
          h = m.useRef(f);
        if (
          (m.useEffect(() => {
            const e = h.current;
            if (((h.current = f), e && !f)) {
              w(!0);
              const e = setTimeout(() => w(!1), 500);
              return () => {
                clearTimeout(e);
              };
            }
          }, [f]),
          a[i] == Ge)
        ) {
          let n = 0;
          for (let e = i - 1; e >= 0; e--) a[e] == Ge && (n += 1);
          let o = 0;
          for (let e = i - 1; e >= 0 && a[e] !== Ge; e--) o++;
          return (
            l.has(n) ||
              l.set(n, I.aI.Get().GetTotalSkippedAppsForDiscoveryQueue(t, r)),
            m.createElement(Oe, {
              ...e,
              key: s,
              selected: f,
              lastCard: s == a.length - 1,
              fnLoadNextQueue: d,
              fnCloseModal: c,
              summaryCardIndex: n,
              eStoreDiscoveryQueueType: t,
              viewedAppCount: (l.get(n) || 0) + o,
              fnFocused: b,
              fnAdvance: () => u(!0),
              bSkipAppRequestPending: p,
            })
          );
        }
        const S = f || h.current || g;
        return m.createElement(De, {
          appAriaIDs: y,
          eStoreDiscoveryQueueType: t,
          storePageFilter: r,
          selected: f,
          appID: a[i],
          bPreferDemoStorePage: o,
          fnFocused: b,
          elVideo: m.createElement(Ee.y3, {
            appID: a[i],
            focused: S,
            showAOAutoPlayWarning: _,
          }),
          elDetails: m.createElement(Te, {
            appID: a[i],
            bShowMinimizedDisplay: n,
            eStoreDiscoveryQueueType: t,
            storePageFilter: r,
            bPreferDemoStorePage: o,
            appAriaIDs: y,
          }),
        });
      }
      function Oe(e) {
        const {
            eStoreDiscoveryQueueType: t,
            fnCloseModal: r,
            summaryCardIndex: a,
            lastCard: n,
            selected: s,
            fnLoadNextQueue: o,
            storePageFilter: l,
            fnDisplaySummaryReward: d,
            viewedAppCount: _,
            fnFocused: g,
            fnAdvance: w,
            bSkipAppRequestPending: y,
          } = e,
          [S, v] = m.useState(!1),
          B = (0, C.Qn)(),
          R = (0, p.Qt)(2, C.TS.LANGUAGE, !1),
          [E, M] = m.useState(0),
          [D, A] = m.useState(0),
          { data: T } = (0, ze.F0)();
        m.useEffect(() => {
          s &&
            !S &&
            T &&
            u.Fm.Get()
              .HintLoad()
              .then(() => {
                I.aI
                  .Get()
                  .LoadSkippedApps(t, l)
                  .then((e) => {
                    M(e.reduce((e, t) => (T.has(t) ? e + 1 : e), 0)),
                      A(
                        e.reduce(
                          (e, t) => (u.Fm.Get().BIsGameIgnored(t) ? e + 1 : e),
                          0,
                        ),
                      ),
                      v(!0);
                  });
              });
        }, [S, t, s, l, T]);
        const [N, F] = m.useState(!1),
          U = (0, I.IH)(t, l),
          z = (0, b.m)("DiscoveryQueueSummary"),
          q = async () => {
            n ? N || (F(!0), await o(), z?.token?.reason || F(!1)) : w();
          };
        return m.createElement(
          je,
          {
            selected: s,
            fnFocused: g,
            fnOnContinue: q,
            fnCloseModal: r,
            bLoaded: S,
          },
          m.createElement(
            "div",
            { className: pe().SummaryContentCtn },
            m.createElement(
              "div",
              { className: pe().SummaryTitle },
              (0, h.we)("#DiscoveryQueue_SummaryTitle"),
            ),
            !U &&
              s &&
              R.data?.definition &&
              m.createElement(Ve, {
                bSkipAppRequestPending: y,
                summaryCardIdx: a,
              }),
            m.createElement(
              "div",
              { className: pe().YourStats },
              (0, h.we)("#DiscoveryQueue_YourStats"),
            ),
            m.createElement(
              i.Z,
              { "flow-children": "row", className: pe().SummaryGrid },
              m.createElement(
                "div",
                { className: pe().GridItem },
                m.createElement(
                  "div",
                  { className: pe().GridTitle },
                  (0, h.we)("#DiscoveryQueue_ViewedCaps"),
                ),
                m.createElement(
                  "div",
                  { className: pe().GridNumber },
                  (0, we.D)(_),
                ),
                m.createElement(
                  "div",
                  { className: pe().GridSubTitle },
                  (0, h.we)("#DiscoveryQueue_Titles"),
                ),
              ),
              m.createElement(
                "div",
                { className: pe().GridItem },
                m.createElement(
                  "div",
                  { className: pe().GridTitle },
                  (0, h.we)("#DiscoveryQueue_WishlistedCaps"),
                ),
                m.createElement(
                  "div",
                  { className: pe().GridNumber },
                  (0, we.D)(E),
                ),
                m.createElement(
                  c.Fh,
                  {
                    className: (0, f.A)(pe().GridSubTitle, pe().TextLink),
                    href: (0, W.NT)(C.TS.STORE_BASE_URL + "wishlist"),
                  },
                  (0, h.we)("#DiscoveryQueue_ViewWishlist"),
                ),
              ),
              m.createElement(
                "div",
                { className: pe().GridItem },
                m.createElement(
                  "div",
                  { className: pe().GridTitle },
                  (0, h.we)("#DiscoveryQueue_IgnoredCaps"),
                ),
                m.createElement(
                  "div",
                  { className: pe().GridNumber },
                  (0, we.D)(D),
                ),
                m.createElement(
                  c.Fh,
                  {
                    className: (0, f.A)(pe().GridSubTitle, pe().TextLink),
                    href: (0, W.NT)(
                      C.TS.STORE_BASE_URL + "account/notinterested",
                    ),
                  },
                  (0, h.we)("#DiscoveryQueue_ViewIgnored"),
                ),
              ),
            ),
            !B &&
              m.createElement(
                i.Z,
                { className: pe().SummaryActionButtonsCtn },
                m.createElement(
                  i.Z,
                  {
                    className: (0, f.A)(pe().QueueButton, pe().Wide),
                    onClick: r,
                  },
                  (0, h.we)("#ActionButtonLabelDone"),
                ),
                !U &&
                  m.createElement(
                    i.Z,
                    {
                      className: (0, f.A)(
                        N && pe().Disabled,
                        pe().QueueButton,
                        pe().Primary,
                        pe().Wide,
                      ),
                      onClick: q,
                    },
                    N ? (0, h.we)("#Loading") : (0, h.we)("#Button_Continue"),
                  ),
              ),
          ),
          Boolean(!U) &&
            m.createElement(m.Fragment, null, Boolean(d) && d(a + 1)),
        );
      }
      function je(e) {
        const {
            children: t,
            selected: r,
            fnOnContinue: a,
            fnCloseModal: i,
            fnFocused: s,
            bLoaded: o,
          } = e,
          l = (0, c.aL)(C.TS.STORE_BASE_URL + "wishlist"),
          u = (0, d.R7)(),
          p = u?.ownerWindow || window,
          _ = m.useRef(void 0);
        return (
          m.useEffect(() => {
            r && _.current && _.current.focus({ preventScroll: !0 });
          }, [r]),
          m.createElement(
            n.YZ,
            {
              ref: _,
              "aria-live": "polite",
              className: (0, f.A)(
                pe().SummaryCtn,
                pe().DiscoveryQueueApp,
                r && pe().Selected,
              ),
              onOptionsActionDescription: (0, h.we)(
                "#DiscoveryQueue_ViewWishlist",
              ),
              onOptionsButton: () => {
                p.location.href = (0, W.NT)(l);
              },
              onOKActionDescription: (0, h.we)("#Button_Continue"),
              onOKButton: () => {
                a();
              },
              onCancelActionDescription: (0, h.we)("#ActionButtonLabelDone"),
              onCancelButton: () => i && i(),
              fnScrollIntoViewHandler: () => (s(), !0),
            },
            o
              ? t
              : m.createElement(D.t, {
                  className: pe().DiscoveryQueueThrobber,
                  msDelayAppear: 200,
                  size: "large",
                  position: "center",
                }),
          )
        );
      }
      function He() {
        return m.createElement(
          i.Z,
          { className: pe().SaleRewardsCtn },
          m.createElement(D.t, { size: "large", position: "center" }),
        );
      }
      function Ve(e) {
        const { bSkipAppRequestPending: t, summaryCardIdx: r } = e;
        return t
          ? m.createElement(He, null)
          : m.createElement(Ke, { summaryCardIdx: r });
      }
      function Ke(e) {
        const { summaryCardIdx: t } = e,
          r = (0, p.os)(2, C.TS.LANGUAGE, !1, t.toString()),
          [a] = (0, g.t7)(r?.data?.current_def?.appid, {}),
          n = (0, C.Qn)();
        if (!r?.data?.current_def || !a?.GetName().length)
          return m.createElement(He, null);
        const s = r.data.num_items_earned,
          o = r.data.current_def.num_items_per_def,
          l = o - s,
          c = (s / o) * 100;
        return m.createElement(
          i.Z,
          { className: pe().SaleRewardsCtn },
          m.createElement(E, { nPercent: c, size: 70, strokeWidth: 12 }),
          m.createElement(
            i.Z,
            { className: pe().RewardStatusCtn },
            m.createElement(
              "div",
              { className: pe().SaleRewardAppTitle },
              (0, h.we)(
                "#DiscoveryQueue_SaleStatus_Title" + (l ? "" : "_Complete"),
                (0, we.D)(s),
                a.GetName(),
              ),
            ),
            l > 0 &&
              m.createElement(
                "div",
                { className: pe().SaleRewardAppTitle },
                (0, h.we)(
                  "#DiscoveryQueue_SaleStatus_Desc",
                  (0, we.D)(l),
                  a.GetName(),
                ),
              ),
            !n &&
              m.createElement(
                "a",
                {
                  href: (0, W.NT)(
                    C.TS.COMMUNITY_BASE_URL + "my/itemcollection",
                  ),
                },
                (0, h.we)("#DiscoveryQueue_SaleStatus_Link"),
              ),
          ),
        );
      }
    },
    47554: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => w });
      var a = r(90626),
        i = r(12447),
        n = r(76217),
        s = r(39199),
        o = r(55263),
        l = r(95034),
        c = r(12155),
        m = r(26749),
        d = r(61859),
        u = r(71109),
        p = r.n(u),
        _ = r(78327),
        g = r(90511);
      function w(e) {
        const { appID: t } = e,
          r = (0, m.G)(),
          [u] = (0, l.QD)("inqueue", "0"),
          [w, y] = (0, a.useState)(!1),
          [b] = (0, o.t7)(t, { include_assets: !0 }),
          f = a.useRef(void 0);
        a.useEffect(() => f.current?.Activate(!0), []);
        const h = (0, _.Qn)(),
          { eStoreDiscoveryQueueType: S, storePageFilter: v } =
            a.useMemo(() => {
              if (u?.length > 0) {
                const e = u.split("_"),
                  t = Number(e[0]);
                let r;
                return (
                  e.length > 1 && (r = (0, s.bz)(e[1])),
                  { eStoreDiscoveryQueueType: t, storePageFilter: r }
                );
              }
              return { eStoreDiscoveryQueueType: 0, storePageFilter: void 0 };
            }, [u]),
          { showDiscoveryQueue: B } = (0, g.GV)(S, {
            includeAppID: t,
            storePageFilter: v,
          }),
          C = a.useCallback(() => {
            y(!0);
          }, []),
          I = (0, s.WX)(S, v);
        return r && b
          ? w
            ? null
            : a.createElement(
                i.u,
                { navTreeRef: f, navID: "DiscoveryQueueAppWidget" },
                a.createElement(
                  n.Z,
                  {
                    focusable: !0,
                    className: p().DiscoveryQueueWidgetCtn,
                    onSecondaryButton: C,
                    onOKButton: B,
                    onOKActionDescription: (0, d.we)(
                      "#DiscoveryQueue_ResumeWizard",
                    ),
                    onSecondaryActionDescription: (0, d.we)("#Button_Close"),
                  },
                  a.createElement(
                    "div",
                    { onClick: B, className: p().WidgetText },
                    a.createElement(c.mcU, null),
                    (0, d.we)("#DiscoveryQueue_ResumeWizard"),
                    I?.length > 0 && ": " + I,
                  ),
                  !h &&
                    a.createElement(
                      "div",
                      { className: p().CloseButton, onClick: C },
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
        i = r(90626),
        n = r(96236),
        s = r(38405);
      function o() {
        return i.createElement(
          n.K,
          { placeholderHeight: "200px", rootMargin: "0px 0px 100% 0px" },
          i.createElement(
            a.u,
            { navID: "DiscoveryQueueWidget" },
            i.createElement(s.g, { eStoreDiscoveryQueueType: 0 }),
          ),
        );
      }
    },
    25054: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => d });
      var a = r(90626),
        i = r(61859),
        n = r(26749),
        s = r(76217),
        o = r(78327),
        l = r(51706),
        c = r(738),
        m = r(90511);
      function d(e) {
        const t = (0, n.G)(),
          { showDiscoveryQueue: r } = (0, m.GV)(0),
          d = a.useCallback(() => {
            o.iA.logged_in
              ? r()
              : (0, c.pg)(
                  a.createElement(l.KG, {
                    onOK: () => {
                      window.location.href = `${o.TS.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
                    },
                    strOKButtonText: (0, i.we)(
                      "#DiscoveryQueue_Error_Login_Title",
                    ),
                    strDescription: (0, i.we)("#DiscoveryQueue_Error_Login"),
                    strTitle: (0, i.we)("#DiscoveryQueue_Error_Login_Title"),
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
                { onClick: d, className: "experiment-button" },
                (0, i.we)("#DiscoveryQueue_OpenWizard"),
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
