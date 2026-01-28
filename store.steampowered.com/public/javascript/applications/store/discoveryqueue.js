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
        Qt: () => B,
        lu: () => h,
        ns: () => S,
        os: () => v,
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
      function B(e, t, r) {
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
      function v(e, t, r, a) {
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
      r.r(t), r.d(t, { default: () => Oe });
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
        B = r(25489),
        v = r(44691),
        C = r(78327),
        I = r(39199),
        R = r(40594);
      const M = ({ nPercent: e, size: t = 120, strokeWidth: r = 20 }) => {
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
      var E,
        D = r(22797),
        T = r(10224),
        A = r(60779),
        N = r(92834),
        F = r(26101),
        z = r(3740),
        U = r(44986),
        q = r(32754),
        G = r(61336),
        W = r(20713),
        P = r(40807),
        x = r(20194),
        Q = r(1035),
        O = r(34181),
        k = r(17720),
        L = r(4796),
        j = r(8092),
        H = r(56545),
        V = r(80613),
        K = r.n(V),
        Z = r(89068);
      class $ extends V.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.recommendationid || Z.Sg($.M()),
            V.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  recommendationid: {
                    n: 1,
                    br: Z.qM.readUint64String,
                    bw: Z.gp.writeUint64String,
                  },
                  review_text: {
                    n: 2,
                    br: Z.qM.readString,
                    bw: Z.gp.writeString,
                  },
                  voted_up: { n: 3, br: Z.qM.readBool, bw: Z.gp.writeBool },
                  is_public: { n: 4, br: Z.qM.readBool, bw: Z.gp.writeBool },
                  language: { n: 5, br: Z.qM.readString, bw: Z.gp.writeString },
                  is_in_early_access: {
                    n: 6,
                    br: Z.qM.readBool,
                    bw: Z.gp.writeBool,
                  },
                  received_compensation: {
                    n: 7,
                    br: Z.qM.readBool,
                    bw: Z.gp.writeBool,
                  },
                  comments_disabled: {
                    n: 8,
                    br: Z.qM.readBool,
                    bw: Z.gp.writeBool,
                  },
                  hide_in_steam_china: {
                    n: 9,
                    br: Z.qM.readBool,
                    bw: Z.gp.writeBool,
                  },
                  saved_hardware_id: {
                    n: 10,
                    br: Z.qM.readUint64String,
                    bw: Z.gp.writeUint64String,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = Z.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return Z.BT($.M(), e, t);
        }
        static fromObject(e) {
          return Z.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Z.zj($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Z.i0($.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Update_Request";
        }
      }
      class Y extends V.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), V.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Y();
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Update_Response";
        }
      }
      class X extends V.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.saved_hardware_id || Z.Sg(X.M()),
            V.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  saved_hardware_id: {
                    n: 1,
                    br: Z.qM.readUint64String,
                    bw: Z.gp.writeUint64String,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = Z.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return Z.BT(X.M(), e, t);
        }
        static fromObject(e) {
          return Z.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Z.zj(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Z.i0(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_BackfillSavedHardware_Request";
        }
      }
      class J extends V.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.num_backfilled || Z.Sg(J.M()),
            V.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  num_backfilled: {
                    n: 1,
                    br: Z.qM.readUint32,
                    bw: Z.gp.writeUint32,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = Z.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return Z.BT(J.M(), e, t);
        }
        static fromObject(e) {
          return Z.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Z.zj(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Z.i0(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_BackfillSavedHardware_Response";
        }
      }
      class ee extends V.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.reaction_type || Z.Sg(ee.M()),
            V.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  reaction_type: {
                    n: 1,
                    br: Z.qM.readUint32,
                    bw: Z.gp.writeUint32,
                  },
                  count: { n: 2, br: Z.qM.readUint32, bw: Z.gp.writeUint32 },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = Z.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return Z.BT(ee.M(), e, t);
        }
        static fromObject(e) {
          return Z.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Z.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Z.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_LoyaltyReaction";
        }
      }
      class te extends V.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.id || Z.Sg(te.M()),
            V.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  id: { n: 1, br: Z.qM.readEnum, bw: Z.gp.writeEnum },
                  ranges: { n: 2, c: re, r: !0, q: !0 },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = Z.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return Z.BT(te.M(), e, t);
        }
        static fromObject(e) {
          return Z.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Z.zj(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Z.i0(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_Tag";
        }
      }
      class re extends V.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.start || Z.Sg(re.M()),
            V.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  start: { n: 1, br: Z.qM.readUint32, bw: Z.gp.writeUint32 },
                  end: { n: 2, br: Z.qM.readUint32, bw: Z.gp.writeUint32 },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = Z.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return Z.BT(re.M(), e, t);
        }
        static fromObject(e) {
          return Z.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Z.zj(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Z.i0(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_Tag_Range";
        }
      }
      class ae extends V.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.recommendationid || Z.Sg(ae.M()),
            V.Message.initialize(this, e, 0, -1, [27, 40, 54], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  recommendationid: {
                    n: 1,
                    br: Z.qM.readUint64String,
                    bw: Z.gp.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: Z.qM.readUint64String,
                    bw: Z.gp.writeUint64String,
                  },
                  appid: { n: 3, br: Z.qM.readUint32, bw: Z.gp.writeUint32 },
                  review: { n: 4, br: Z.qM.readString, bw: Z.gp.writeString },
                  time_created: {
                    n: 5,
                    br: Z.qM.readUint32,
                    bw: Z.gp.writeUint32,
                  },
                  time_updated: {
                    n: 6,
                    br: Z.qM.readUint32,
                    bw: Z.gp.writeUint32,
                  },
                  votes_up: { n: 7, br: Z.qM.readUint32, bw: Z.gp.writeUint32 },
                  votes_down: {
                    n: 8,
                    br: Z.qM.readUint32,
                    bw: Z.gp.writeUint32,
                  },
                  vote_score: { n: 9, br: Z.qM.readFloat, bw: Z.gp.writeFloat },
                  language: {
                    n: 10,
                    br: Z.qM.readString,
                    bw: Z.gp.writeString,
                  },
                  comment_count: {
                    n: 11,
                    br: Z.qM.readUint32,
                    bw: Z.gp.writeUint32,
                  },
                  voted_up: { n: 12, br: Z.qM.readBool, bw: Z.gp.writeBool },
                  is_public: { n: 13, br: Z.qM.readBool, bw: Z.gp.writeBool },
                  moderator_hidden: {
                    n: 14,
                    br: Z.qM.readBool,
                    bw: Z.gp.writeBool,
                  },
                  flagged_by_developer: {
                    n: 15,
                    br: Z.qM.readEnum,
                    bw: Z.gp.writeEnum,
                  },
                  report_score: {
                    n: 16,
                    br: Z.qM.readUint32,
                    bw: Z.gp.writeUint32,
                  },
                  steamid_moderator: {
                    n: 17,
                    br: Z.qM.readUint64String,
                    bw: Z.gp.writeUint64String,
                  },
                  steamid_developer: {
                    n: 18,
                    br: Z.qM.readUint64String,
                    bw: Z.gp.writeUint64String,
                  },
                  steamid_dev_responder: {
                    n: 19,
                    br: Z.qM.readUint64String,
                    bw: Z.gp.writeUint64String,
                  },
                  developer_response: {
                    n: 20,
                    br: Z.qM.readString,
                    bw: Z.gp.writeString,
                  },
                  time_developer_responded: {
                    n: 21,
                    br: Z.qM.readUint32,
                    bw: Z.gp.writeUint32,
                  },
                  developer_flag_cleared: {
                    n: 22,
                    br: Z.qM.readBool,
                    bw: Z.gp.writeBool,
                  },
                  written_during_early_access: {
                    n: 23,
                    br: Z.qM.readBool,
                    bw: Z.gp.writeBool,
                  },
                  votes_funny: {
                    n: 24,
                    br: Z.qM.readUint32,
                    bw: Z.gp.writeUint32,
                  },
                  received_compensation: {
                    n: 25,
                    br: Z.qM.readBool,
                    bw: Z.gp.writeBool,
                  },
                  unverified_purchase: {
                    n: 26,
                    br: Z.qM.readBool,
                    bw: Z.gp.writeBool,
                  },
                  review_qualities: {
                    n: 27,
                    r: !0,
                    q: !0,
                    br: Z.qM.readEnum,
                    pbr: Z.qM.readPackedEnum,
                    bw: Z.gp.writeRepeatedEnum,
                  },
                  weighted_vote_score: {
                    n: 28,
                    br: Z.qM.readFloat,
                    bw: Z.gp.writeFloat,
                  },
                  moderation_note: {
                    n: 29,
                    br: Z.qM.readString,
                    bw: Z.gp.writeString,
                  },
                  payment_method: {
                    n: 30,
                    br: Z.qM.readInt32,
                    bw: Z.gp.writeInt32,
                  },
                  playtime_2weeks: {
                    n: 31,
                    br: Z.qM.readInt32,
                    bw: Z.gp.writeInt32,
                  },
                  playtime_forever: {
                    n: 32,
                    br: Z.qM.readInt32,
                    bw: Z.gp.writeInt32,
                  },
                  last_playtime: {
                    n: 33,
                    br: Z.qM.readInt32,
                    bw: Z.gp.writeInt32,
                  },
                  comments_disabled: {
                    n: 34,
                    br: Z.qM.readBool,
                    bw: Z.gp.writeBool,
                  },
                  playtime_at_review: {
                    n: 35,
                    br: Z.qM.readInt32,
                    bw: Z.gp.writeInt32,
                  },
                  approved_for_china: {
                    n: 36,
                    br: Z.qM.readBool,
                    bw: Z.gp.writeBool,
                  },
                  ban_check_result: {
                    n: 37,
                    br: Z.qM.readEnum,
                    bw: Z.gp.writeEnum,
                  },
                  refunded: { n: 38, br: Z.qM.readBool, bw: Z.gp.writeBool },
                  account_score_spend: {
                    n: 39,
                    br: Z.qM.readInt32,
                    bw: Z.gp.writeInt32,
                  },
                  reactions: { n: 40, c: ee, r: !0, q: !0 },
                  ipaddress: {
                    n: 41,
                    br: Z.qM.readString,
                    bw: Z.gp.writeString,
                  },
                  hidden_in_steam_china: {
                    n: 42,
                    br: Z.qM.readBool,
                    bw: Z.gp.writeBool,
                  },
                  steam_china_location: {
                    n: 43,
                    br: Z.qM.readString,
                    bw: Z.gp.writeString,
                  },
                  category_ascii_pct: {
                    n: 44,
                    br: Z.qM.readUint32,
                    bw: Z.gp.writeUint32,
                  },
                  category_meme_pct: {
                    n: 45,
                    br: Z.qM.readUint32,
                    bw: Z.gp.writeUint32,
                  },
                  category_offtopic_pct: {
                    n: 46,
                    br: Z.qM.readUint32,
                    bw: Z.gp.writeUint32,
                  },
                  category_uninformative_pct: {
                    n: 47,
                    br: Z.qM.readUint32,
                    bw: Z.gp.writeUint32,
                  },
                  category_votefarming_pct: {
                    n: 48,
                    br: Z.qM.readUint32,
                    bw: Z.gp.writeUint32,
                  },
                  deck_playtime_at_review: {
                    n: 49,
                    br: Z.qM.readInt32,
                    bw: Z.gp.writeInt32,
                  },
                  is_bot_review_pct: {
                    n: 50,
                    br: Z.qM.readUint32,
                    bw: Z.gp.writeUint32,
                  },
                  positivity_pct: {
                    n: 51,
                    br: Z.qM.readUint32,
                    bw: Z.gp.writeUint32,
                  },
                  tags_with_ranges: { n: 54, c: te, r: !0, q: !0 },
                  saved_hardware_id: {
                    n: 56,
                    br: Z.qM.readUint64String,
                    bw: Z.gp.writeUint64String,
                  },
                  hardware_cluster_id: {
                    n: 57,
                    br: Z.qM.readUint64String,
                    bw: Z.gp.writeUint64String,
                  },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = Z.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return Z.BT(ae.M(), e, t);
        }
        static fromObject(e) {
          return Z.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Z.zj(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Z.i0(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "RecommendationDetails";
        }
      }
      class ie extends V.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.appid || Z.Sg(ie.M()),
            V.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  appid: { n: 1, br: Z.qM.readUint32, bw: Z.gp.writeUint32 },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = Z.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return Z.BT(ie.M(), e, t);
        }
        static fromObject(e) {
          return Z.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Z.zj(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Z.i0(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetFriendsRecommendedApp_Request";
        }
      }
      class ne extends V.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.accountids_recommended || Z.Sg(ne.M()),
            V.Message.initialize(this, e, 0, -1, [1, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  accountids_recommended: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: Z.qM.readUint32,
                    pbr: Z.qM.readPackedUint32,
                    bw: Z.gp.writeRepeatedUint32,
                  },
                  accountids_not_recommended: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: Z.qM.readUint32,
                    pbr: Z.qM.readPackedUint32,
                    bw: Z.gp.writeRepeatedUint32,
                  },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = Z.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return Z.BT(ne.M(), e, t);
        }
        static fromObject(e) {
          return Z.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Z.zj(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Z.i0(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetFriendsRecommendedApp_Response";
        }
      }
      class se extends V.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.requests || Z.Sg(se.M()),
            V.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: { requests: { n: 1, c: oe, r: !0, q: !0 } },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = Z.w0(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return Z.BT(se.M(), e, t);
        }
        static fromObject(e) {
          return Z.Uq(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Z.zj(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Z.i0(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Request";
        }
      }
      class oe extends V.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.steamid || Z.Sg(oe.M()),
            V.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  steamid: {
                    n: 1,
                    br: Z.qM.readUint64String,
                    bw: Z.gp.writeUint64String,
                  },
                  appid: { n: 2, br: Z.qM.readUint32, bw: Z.gp.writeUint32 },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = Z.w0(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return Z.BT(oe.M(), e, t);
        }
        static fromObject(e) {
          return Z.Uq(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Z.zj(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Z.i0(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Request_RecommendationRequest";
        }
      }
      class le extends V.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.recommendations || Z.Sg(le.M()),
            V.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: { recommendations: { n: 1, c: ae, r: !0, q: !0 } },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = Z.w0(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return Z.BT(le.M(), e, t);
        }
        static fromObject(e) {
          return Z.Uq(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Z.zj(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Z.i0(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Response";
        }
      }
      !(function (e) {
        (e.Update = function (e, t) {
          return e.SendMsg("UserReviews.Update#1", (0, H.I8)($, t), Y, {
            ePrivilege: 3,
          });
        }),
          (e.BackfillSavedHardware = function (e, t) {
            return e.SendMsg(
              "UserReviews.BackfillSavedHardware#1",
              (0, H.I8)(X, t),
              J,
              { ePrivilege: 1 },
            );
          }),
          (e.GetFriendsRecommendedApp = function (e, t) {
            return e.SendMsg(
              "UserReviews.GetFriendsRecommendedApp#1",
              (0, H.I8)(ie, t),
              ne,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetIndividualRecommendations = function (e, t) {
            return e.SendMsg(
              "UserReviews.GetIndividualRecommendations#1",
              (0, H.I8)(se, t),
              le,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          });
      })(E || (E = {}));
      var ce = r(41735),
        me = r.n(ce),
        de = r(3734);
      class ue {
        static async LoadFriendsRecommendedApp(e, t) {
          const r = H.w.Init(ie);
          r.Body().set_appid(t);
          const a = await E.GetFriendsRecommendedApp(e, r),
            i = a.GetEResult();
          if (1 == i) return a.Body().toObject();
          throw `Error ${i} failed to call GetFriendsRecommendedApp ${t}`;
        }
        static async LoadStoreRelevanceData(e) {
          let t = { appid: e },
            r = { arrSimilarPlayedApps: [], bRecommendedByIR: !1 };
          const a = (
            await me().get(
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
      var pe = r(57834),
        _e = r.n(pe),
        ge = r(14336),
        we = r(26505),
        ye = r(6083);
      const be = new S.wd("AppRelevance").Debug;
      function fe(e) {
        const {
            appID: t,
            bShowAvatars: r,
            storeItem: a,
            bHideDescription: i,
            bShowCuratorInfo: n,
            bShowCreatorInfo: s,
          } = e,
          l = (0, we.Nd)(t),
          c = (function (e) {
            const t = (0, o.KV)();
            return (0, x.I)({
              queryKey: ["AppRelevanceStore", "FriendsRecommended", e],
              queryFn: () => ue.LoadFriendsRecommendedApp(t, e),
              enabled: C.iA.logged_in,
            });
          })(t),
          d = (function (e) {
            return (0, x.I)({
              queryKey: ["AppRelevanceStore", "StoreRelevance", e],
              queryFn: () => ue.LoadStoreRelevanceData(e),
              enabled: C.iA.logged_in,
            });
          })(t),
          p = (function () {
            const { data: e } = (0, de.PG)("App Relevance Store Top Sellers", {
              sort: 11,
              start: 0,
              count: 100,
            });
            return e;
          })(),
          g = (0, x.I)({
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
            return (0, x.I)({
              queryKey: ["RecommendingCurators", e],
              queryFn: () =>
                Promise.all(
                  r?.map((e) => L.ac.LoadClanInfoForClanAccountID(e)),
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
          b = (0, x.I)({
            queryKey: ["FollowedCreators", t],
            queryFn: () =>
              L.ac
                .LoadClanInfoForClanAccountID(y[0].nAccountID)
                .then((e) => ({ clanInfo: e, type: y[0].type })),
            enabled: !!s && y && y.length > 0,
          }),
          S = (0, x.I)({
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
                const r = k.b.InitFromAccountID(
                  c.data.accountids_recommended[t],
                );
                e.push(r.ConvertTo64BitString());
              }
              for (let e = 0; e < l.data.in_wishlist?.length && e < i; e++) {
                const r = new k.b(l.data.in_wishlist[e].steamid);
                t.push(r.ConvertTo64BitString());
              }
              for (let e = 0; e < l.data.owns?.length && e < i; e++) {
                const t = new k.b(l.data.owns[e].steamid);
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
        let B = [];
        d.isSuccess &&
          d.data.arrSimilarPlayedApps &&
          d.data.arrSimilarPlayedApps.forEach((e) => {
            const r = _.A.Get().GetApp(e.appid);
            r
              ? B.push(
                  m.createElement(Be, {
                    key: e.appid,
                    lifetimePlaytime: e.playtimeForever,
                    storeItem: r,
                  }),
                )
              : console.error("Failed to load store data ", t);
          });
        const v = p.GetItemIDs().findIndex((e) => e.appid === t),
          I = d.data?.bRecommendedByIR,
          R = B.length > 0,
          M = l.data?.owns?.length,
          E = l.data?.in_wishlist?.length,
          T = c.data?.accountids_recommended?.length;
        let A = 0;
        return (
          M > 0 && A++,
          E > 0 && A++,
          T > 0 && A++,
          I && A++,
          v >= 0 && A++,
          B.length > 0 && A++,
          n && w?.data?.length > 0 && A++,
          s && Boolean(b.data) && A++,
          be(
            "FriendsOwned: ",
            M,
            " FriendsWishlisted: ",
            E,
            "cRecommended: ",
            T,
          ),
          m.createElement(
            m.Fragment,
            null,
            A > 0 &&
              m.createElement(
                m.Fragment,
                null,
                m.createElement(
                  "div",
                  { className: _e().WhyRelevant },
                  (0, h.we)("#DiscoveryQueue_WhyRelevant"),
                ),
                m.createElement(
                  "div",
                  { role: "list", className: _e().RelevantCtn },
                  R &&
                    m.createElement(
                      Me,
                      { header: (0, h.we)("#DiscoveryQueue_SimilarGames") },
                      m.createElement(
                        "div",
                        { className: _e().ReleventSimilarAppsCtn },
                        B,
                      ),
                    ),
                  n &&
                    w?.data?.length > 0 &&
                    m.createElement(
                      Me,
                      {
                        header: (0, h.we)(
                          "#ContentHub_Recommendation_Curators",
                        ),
                      },
                      m.createElement(
                        "div",
                        {
                          className: (0, f.A)(
                            _e().ReleventSimilarAppsCtn,
                            _e().RecommendingCuratorsCtn,
                          ),
                        },
                        w.data
                          .filter(Boolean)
                          .map((e) =>
                            m.createElement(Se, {
                              key: "curator_" + e.clanAccountID,
                              curator: e,
                            }),
                          ),
                      ),
                    ),
                  s &&
                    Boolean(b.data) &&
                    m.createElement(he, { creatorInfo: b.data }),
                  v >= 0 &&
                    m.createElement(Me, {
                      header: (0, h.um)(
                        "#DiscoveryQueue_TopSellers",
                        (0, ye.D)(v + 1),
                        m.createElement("span", {
                          className: _e().RelevantTextBold,
                        }),
                      ),
                    }),
                  I &&
                    !R &&
                    m.createElement(Me, {
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
            i && 0 != A
              ? m.createElement("div", {
                  "aria-label": a.GetShortDescription(),
                })
              : m.createElement(
                  "div",
                  {
                    className: (0, f.A)(_e().AppDescription, A && _e().Divider),
                  },
                  a.GetShortDescription(),
                ),
          )
        );
      }
      function he(e) {
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
          ? m.createElement(Me, {
              header: (0, h.PP)(
                r,
                m.createElement(
                  "span",
                  { className: _e().RelevantTextBold },
                  t.clanInfo?.group_name,
                ),
              ),
            })
          : null;
      }
      function Se(e) {
        const { curator: t } = e,
          { creatorHome: r } = (0, j.FV)(t?.clanAccountID);
        return t && r
          ? m.createElement(
              a.Ii,
              { href: r.GetCreatorHomeURL(null) },
              m.createElement("img", { src: t.avatar_medium_url }),
            )
          : null;
      }
      function Be(e) {
        const { lifetimePlaytime: t, storeItem: r } = e;
        return m.createElement(
          "div",
          { className: _e().SimilarAppCtn },
          m.createElement(
            F.Qf,
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
              className: _e().SimilarAppImg,
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
                Me,
                {
                  header: (0, h.um)(
                    a,
                    r,
                    m.createElement("span", {
                      className: _e().RelevantTextBold,
                    }),
                  ),
                },
                i &&
                  t.length > 0 &&
                  m.createElement(
                    "div",
                    { className: _e().FriendAvatarsCtn },
                    1 == r
                      ? m.createElement(Re, { steamid: t[0] })
                      : m.createElement(Ie, { arrSteamIDs: t }),
                  ),
              )
            : m.createElement(Me, {
                header: (0, h.PP)(
                  a + "_Single",
                  m.createElement(Ce, { steamid: t[0] }),
                ),
              })
          : null;
      }
      function Ce(e) {
        const { steamid: t } = e,
          { data: r } = (0, ge.js)(t);
        return r && r.m_bInitialized
          ? m.createElement(
              "span",
              {
                "data-miniprofile": "s" + r.m_steamid.ConvertTo64BitString(),
                className: _e().RelevantTextBold,
              },
              r.m_strPlayerName,
            )
          : null;
      }
      function Ie(e) {
        const { arrSteamIDs: t } = e,
          r = (0, ge.DW)(t);
        return m.createElement(
          m.Fragment,
          null,
          r.map(
            ({ data: e }) =>
              e &&
              m.createElement(Q.i8, {
                key: e.m_steamid.ConvertTo64BitString(),
                "data-miniprofile": "s" + e.m_steamid.ConvertTo64BitString(),
                persona: e,
                size: "Small",
                statusPosition: "right",
              }),
          ),
        );
      }
      function Re(e) {
        const { steamid: t } = e,
          { data: r } = (0, ge.js)(t);
        return r
          ? m.createElement(
              i.Z,
              { className: _e().FriendBlockCtn, "data-miniprofile": "s" + t },
              m.createElement(Q.i8, {
                persona: r,
                size: "Small",
                statusPosition: "right",
              }),
              m.createElement(O.D, {
                className: _e().PersonaStatus,
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
      function Me(e) {
        const { children: t, header: r } = e;
        return m.createElement(
          "div",
          { className: _e().RelevantItem },
          m.createElement(
            "div",
            { className: _e().RelevantCheck },
            m.createElement(w.Jlk, null),
          ),
          m.createElement(
            "div",
            { className: _e().RelevantColumn },
            m.createElement("div", { className: _e().ReleventText }, r),
            t,
          ),
        );
      }
      var Ee = r(60338),
        De = r(35380);
      new S.wd("DiscoveryQueueApp").Debug;
      function Te(e) {
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
          B = Ae(w, o, l, c),
          { bIsIgnored: v, fnUpdateIgnored: I } = (0, Ee.TK)(t),
          { bIsWishlisted: R, fnUpdateWishlist: M } = (0, Ee.u4)(t),
          E = m.useRef(void 0);
        if (
          (m.useEffect(() => {
            n && E.current && E.current.focus({ preventScroll: !0 });
          }, [n]),
          !w)
        )
          return console.warn("Error: missing store item for appid ", t), null;
        const D = { width: a || void 0, height: r || void 0 };
        return m.createElement(
          i.Z,
          {
            "aria-labelledby": (0, N.q)(
              _.nameId,
              _.tagsId,
              _.reviewId,
              _.relevanceId,
              _.buttonsId,
            ),
            ref: E,
            style: D,
            className: (0, f.A)(_e().DiscoveryQueueApp, n && _e().Selected),
            onOptionsActionDescription: R
              ? (0, h.we)("#DiscoveryQueue_RemoveFromWishlist")
              : (0, h.we)("#DiscoveryQueue_AddToWishlist"),
            onOptionsButton: M,
            onOKActionDescription: (0, h.we)("#DiscoveryQueue_ViewStorePage"),
            onOKButton: () => {
              S.location.href = B;
            },
            onSecondaryActionDescription: v
              ? (0, h.we)("#DiscoveryQueue_Undo")
              : (0, h.we)("#DiscoveryQueue_IgnoreLink"),
            onSecondaryButton: I,
            fnScrollIntoViewHandler: () => (s(), !0),
          },
          m.createElement(
            "div",
            { className: (0, f.A)(_e().IgnoredCtn, v && _e().Active) },
            m.createElement(
              "div",
              { className: (0, f.A)(_e().IgnoredInfo, v && _e().Active) },
              m.createElement(
                "div",
                { className: _e().IgnoredTitle },
                (0, h.we)("#DiscoveryQueue_Ignored"),
              ),
              m.createElement(
                "div",
                { className: _e().IgnoredDescription },
                (0, h.we)("#DiscoveryQueue_IgnoredConfirmation"),
              ),
              m.createElement(
                i.Z,
                {
                  className: (0, f.A)(_e().QueueButton, _e().UndoIgnoreButton),
                  onClick: I,
                },
                y &&
                  m.createElement(U.$m, {
                    button: W.g4.X,
                    type: U.wt.Light,
                    size: U.xY.Medium,
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
          return (0, G.NT)(o);
        }, [a, t, i, e, r]);
      }
      function Ne(e) {
        const {
            appID: t,
            bShowMinimizedDisplay: r,
            eStoreDiscoveryQueueType: a,
            storePageFilter: n,
            bPreferDemoStorePage: s,
            appAriaIDs: o,
          } = e,
          [l] = (0, g.t7)(t, Ee.Gy),
          c = (0, De.$5)(t),
          { bIsIgnored: d, fnUpdateIgnored: u } = (0, Ee.TK)(t),
          { bIsWishlisted: p, fnUpdateWishlist: _ } = (0, Ee.u4)(t),
          y = Ae(l, a, n, s),
          b = (0, C.Qn)(),
          S = b;
        if (!l) return;
        const B = l.GetAssets().GetLibraryCapsuleURL(),
          v = l.GetAssets().GetHeaderURL();
        return m.createElement(
          i.Z,
          { className: _e().AppDetailsCtn },
          m.createElement(
            "div",
            { className: _e().AppDetailsCtnTop },
            B &&
              m.createElement(
                "a",
                { className: (0, f.A)(_e().CapsuleLink), href: y },
                m.createElement("img", {
                  className: _e().AppLibraryHero,
                  src: B,
                }),
                v &&
                  m.createElement("img", { className: _e().AppHeader, src: v }),
              ),
            m.createElement(
              "div",
              { id: o.nameId, className: _e().RightColumn },
              m.createElement(
                "a",
                { className: (0, f.A)(_e().AppName), href: y },
                l.GetName(),
              ),
              m.createElement(z.N, { bSingleLineMode: !0, id: c }),
            ),
            m.createElement(Fe, {
              rgTagIDs: l.GetTagIDs(),
              ariaLabelID: o.tagsId,
            }),
            m.createElement(
              "div",
              { className: _e().AppReviews, id: o.reviewId },
              m.createElement(F.Jz, {
                bShowTooltip: !0,
                bTruncateTotalReviews: r,
                id: c,
              }),
            ),
            m.createElement(
              "div",
              { id: o.relevanceId, className: _e().AppRelevanceCtn },
              m.createElement(fe, {
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
              { className: _e().AppActionButtonsCtn },
              m.createElement(
                "div",
                { id: o.buttonsId, className: _e().AppActionJustButtonsCtn },
                m.createElement(
                  "div",
                  { className: _e().ButtonsRowWrap },
                  l.BHasDemo() &&
                    m.createElement(P.j, {
                      id: c,
                      className: (0, f.A)(
                        _e().QueueButton,
                        _e().Primary,
                        _e().Launch,
                      ),
                    }),
                  m.createElement(
                    "a",
                    {
                      className: (0, f.A)(_e().QueueButton, _e().Primary),
                      href: y,
                    },
                    S &&
                      m.createElement(U.$m, {
                        button: W.g4.Y,
                        type: U.wt.Light,
                        size: U.xY.Medium,
                        additionalClassName: _e().YGlyph,
                      }),
                    " ",
                    (0, h.we)("#DiscoveryQueue_ViewStorePage"),
                  ),
                  m.createElement(
                    q.he,
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
                        className: (0, f.A)(_e().QueueButton, p && _e().Active),
                        onClick: _,
                      },
                      S &&
                        m.createElement(U.$m, {
                          button: W.g4.Y,
                          type: U.wt.Light,
                          size: U.xY.Medium,
                          additionalClassName: _e().YGlyph,
                        }),
                      p
                        ? m.createElement(w.qnF, null)
                        : m.createElement(w.T4m, null),
                    ),
                  ),
                  m.createElement(
                    q.he,
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
                        className: (0, f.A)(_e().QueueButton, d && _e().Active),
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
      function Fe(e) {
        const { rgTagIDs: t, ariaLabelID: r } = e,
          a = [...(0, Ee.W3)(t)].slice(0, 8);
        return m.createElement(
          "div",
          { id: r, role: "list", className: _e().AppTagsCtn },
          a.map((e) =>
            m.createElement(A.Fz, {
              key: e,
              className: _e().TagEntry,
              tagID: e,
            }),
          ),
        );
      }
      var ze = r(60884),
        Ue = r(90511),
        qe = r(17376);
      const Ge = new S.wd("DiscoveryQueueWizard").Debug,
        We = 1,
        Pe = 1400,
        xe = "discoveryqueue2022";
      async function Qe(e, t, r, a) {
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
      function Oe(e) {
        const [t, r] = m.useState(!1),
          a = (0, o.KV)();
        return (
          (0, m.useEffect)(() => {
            I.aI.Init(a), r(!0);
          }, [a]),
          t ? m.createElement(ke, { ...e }) : null
        );
      }
      function ke(e) {
        const {
            eStoreDiscoveryQueueType: t,
            fnCloseModal: r,
            includeAppID: n,
            storePageFilter: o,
            bPreferDemoStorePage: p,
            bShowAOAutoPlayWarning: _,
          } = e,
          [g, S] = m.useState(0),
          [R, M] = m.useState(void 0),
          [E, D] = m.useState(0),
          A = (0, d.R7)(),
          N = A?.ownerWindow || window,
          F = (0, c.ru)(xe),
          [z, U] = m.useState(0),
          q = (0, l.b)();
        (0, v.E)("ArrowLeft", () => Q(!1), !0, !0),
          (0, v.E)("Left", () => Q(!1), !0, !0),
          (0, v.E)("ArrowRight", () => Q(!0), !0, !0),
          (0, v.E)("Right", () => Q(!0), !0, !0),
          (0, v.E)("Escape", () => r?.(), !0, !0),
          (0, v.E)("Esc", () => r?.(), !0, !0);
        const W = m.useMemo(() => Boolean(N.innerWidth < Pe), [N]),
          { fnGetDiscoveryQueue: P, rgAppIDs: x } = (function (e, t, r) {
            const [a, i] = m.useState([]),
              n = (0, b.m)("DiscoveryQueueWizard"),
              s = async (s) => {
                let { appids: o } = await Qe(e, !s, s && r, t);
                if (s && !o.length) {
                  let { appids: r } = await Qe(e, !0, void 0, t);
                  o = r;
                }
                if (!n?.token?.reason) {
                  const e = [...(a ?? []), ...o, We];
                  i(e);
                }
                Ge("Loaded new discovery queue apps: ", o);
              };
            return { fnGetDiscoveryQueue: s, rgAppIDs: a };
          })(t, o, n);
        m.useEffect(() => {
          P(!0), u.Fm.Get().HintLoad();
        }, []),
          m.useEffect(() => {
            const e = x[g];
            e != R && (e && e != We && q.AddImpression(e, F), M(e));
          }, [q, g, R, x, F]);
        const Q = (e) => {
          const t = B.OQ(g + (e ? 1 : -1), 0, x.length - 1);
          t != g &&
            (S(t), Ge("New selected index: ", t, " Prev selected index: ", g));
        };
        m.useEffect(() => {
          x?.length &&
            x[g] !== We &&
            (U((e) => e + 1),
            I.aI
              .Get()
              .SkipDiscoveryQueueItem(x[g], t, o)
              .then(() => U((e) => e - 1)));
        }, [t, g, x, o]),
          m.useEffect(() => {
            x.length != E &&
              (D(x.length), x.length > E && x[g] == We && S(g + 1));
          }, [E, g, x]);
        const [O] = m.useState(new Map()),
          k = (0, I.WX)(t, o),
          L = !(0, T.c5)() && g > 0,
          j = !(0, T.c5)() && g < x.length - 1,
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
          J = (e) => B.W(g + e, x) && (B.LA(e, -1, 1) || V),
          ee = (0, c.aL)(C.TS.STORE_BASE_URL + "explore?dq=widget"),
          te = x[g] !== We,
          { nQueueStart: re, nCount: ae } = (function (e, t) {
            let r = 0;
            for (let a = 0; a < e; a++) t[a] == We && (r = a + 1);
            let a = 0;
            for (let r = e; r < t.length; r++) {
              if (t[r] == We) {
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
          { feature: xe },
          m.createElement(
            i.Z,
            {
              role: "dialog",
              focusable: !1,
              "flow-children": "column",
              className: _e().DiscoveryQueueCarouselCtn,
              navEntryPreferPosition: s.iU.LAST,
              onCancelButton: () => r?.(),
              onCancelActionDescription: (0, h.we)("#Button_Close"),
            },
            m.createElement(
              "div",
              {
                className: _e().DiscoveryQueueWrapper,
                onClick: (e) => {
                  e.target == e.currentTarget && (r?.(), e.stopPropagation());
                },
              },
              k.length > 0 &&
                m.createElement(
                  i.Z,
                  {
                    "flow-children": "row",
                    className: _e().DiscoveryQueueName,
                  },
                  k,
                ),
              m.createElement(
                i.Z,
                { "flow-children": "row", className: _e().TopBarCtn },
                m.createElement(
                  i.Z,
                  { className: _e().LearnMore },
                  (0, h.oW)(
                    "#DiscoveryQueue_LearnMore_Default",
                    m.createElement(a.Ii, {
                      className: _e().LearnMoreLink,
                      href: (0, G.NT)(ee),
                    }),
                  ),
                ),
                m.createElement(
                  i.Z,
                  { className: _e().ControlsCtn },
                  m.createElement(
                    i.Z,
                    {
                      focusable: !0,
                      className: _e().QueueButton,
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
                    _e().QueueNavArrow,
                    _e().LeftArrow,
                    L && _e().Enable,
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
                    _e().QueueNavArrow,
                    _e().RightArrow,
                    j && _e().Enable,
                  ),
                },
                m.createElement(w.l8x, { angle: 0 }),
              ),
              m.createElement(
                i.Z,
                {
                  ref: H,
                  className: _e().DiscoveryQueueItemsCtn,
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
                        [_e().DiscoveryQueueItemPositioner]: !0,
                        [_e().Dragging]: V,
                        [_e().InRange]: J(e),
                        [_e().FarLeft]: -2 == e,
                        [_e().Left]: -1 == e,
                        [_e().Current]: 0 == e,
                        [_e().Right]: 1 == e,
                        [_e().FarRight]: 2 == e,
                        [_e().Selected]: e + Z == 0,
                      }),
                      style: { "--dragOffsetX": `${K}px` },
                    },
                    J(e) &&
                      m.createElement(Le, {
                        eStoreDiscoveryQueueType: t,
                        storePageFilter: o,
                        rgAppIDs: x,
                        index: g + e,
                        bShowMinimizedDisplay: W,
                        selectedIndex: g,
                        bPreferDemoStorePage: Boolean(p),
                        mapViewedAppCount: O,
                        fnCloseModal: r,
                        fnLoadNextQueue: () => P(!1),
                        fnAdvance: Q,
                        bSkipAppRequestPending: Boolean(0 != z),
                        showAOAutoPlayWarning: Boolean(_),
                      }),
                  ),
                ),
              ),
              m.createElement(ze.A, {
                className: (0, f.A)(!te && _e().ProgressHidden),
                showPriorAsActive: !0,
                count: ae,
                selectedIndex: g - re,
              }),
            ),
          ),
        );
      }
      function Le(e) {
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
          a[i] == We)
        ) {
          let n = 0;
          for (let e = i - 1; e >= 0; e--) a[e] == We && (n += 1);
          let o = 0;
          for (let e = i - 1; e >= 0 && a[e] !== We; e--) o++;
          return (
            l.has(n) ||
              l.set(n, I.aI.Get().GetTotalSkippedAppsForDiscoveryQueue(t, r)),
            m.createElement(je, {
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
        return m.createElement(Te, {
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
          elDetails: m.createElement(Ne, {
            appID: a[i],
            bShowMinimizedDisplay: n,
            eStoreDiscoveryQueueType: t,
            storePageFilter: r,
            bPreferDemoStorePage: o,
            appAriaIDs: y,
          }),
        });
      }
      function je(e) {
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
          [S, B] = m.useState(!1),
          v = (0, C.Qn)(),
          R = (0, p.Qt)(2, C.TS.LANGUAGE, !1),
          [M, E] = m.useState(0),
          [D, T] = m.useState(0),
          { data: A } = (0, qe.F0)();
        m.useEffect(() => {
          s &&
            !S &&
            A &&
            u.Fm.Get()
              .HintLoad()
              .then(() => {
                I.aI
                  .Get()
                  .LoadSkippedApps(t, l)
                  .then((e) => {
                    E(e.reduce((e, t) => (A.has(t) ? e + 1 : e), 0)),
                      T(
                        e.reduce(
                          (e, t) => (u.Fm.Get().BIsGameIgnored(t) ? e + 1 : e),
                          0,
                        ),
                      ),
                      B(!0);
                  });
              });
        }, [S, t, s, l, A]);
        const [N, F] = m.useState(!1),
          z = (0, I.IH)(t, l),
          U = (0, b.m)("DiscoveryQueueSummary"),
          q = async () => {
            n ? N || (F(!0), await o(), U?.token?.reason || F(!1)) : w();
          };
        return m.createElement(
          He,
          {
            selected: s,
            fnFocused: g,
            fnOnContinue: q,
            fnCloseModal: r,
            bLoaded: S,
          },
          m.createElement(
            "div",
            { className: _e().SummaryContentCtn },
            m.createElement(
              "div",
              { className: _e().SummaryTitle },
              (0, h.we)("#DiscoveryQueue_SummaryTitle"),
            ),
            !z &&
              s &&
              R.data?.definition &&
              m.createElement(Ke, {
                bSkipAppRequestPending: y,
                summaryCardIdx: a,
              }),
            m.createElement(
              "div",
              { className: _e().YourStats },
              (0, h.we)("#DiscoveryQueue_YourStats"),
            ),
            m.createElement(
              i.Z,
              { "flow-children": "row", className: _e().SummaryGrid },
              m.createElement(
                "div",
                { className: _e().GridItem },
                m.createElement(
                  "div",
                  { className: _e().GridTitle },
                  (0, h.we)("#DiscoveryQueue_ViewedCaps"),
                ),
                m.createElement(
                  "div",
                  { className: _e().GridNumber },
                  (0, ye.D)(_),
                ),
                m.createElement(
                  "div",
                  { className: _e().GridSubTitle },
                  (0, h.we)("#DiscoveryQueue_Titles"),
                ),
              ),
              m.createElement(
                "div",
                { className: _e().GridItem },
                m.createElement(
                  "div",
                  { className: _e().GridTitle },
                  (0, h.we)("#DiscoveryQueue_WishlistedCaps"),
                ),
                m.createElement(
                  "div",
                  { className: _e().GridNumber },
                  (0, ye.D)(M),
                ),
                m.createElement(
                  c.Fh,
                  {
                    className: (0, f.A)(_e().GridSubTitle, _e().TextLink),
                    href: (0, G.NT)(C.TS.STORE_BASE_URL + "wishlist"),
                  },
                  (0, h.we)("#DiscoveryQueue_ViewWishlist"),
                ),
              ),
              m.createElement(
                "div",
                { className: _e().GridItem },
                m.createElement(
                  "div",
                  { className: _e().GridTitle },
                  (0, h.we)("#DiscoveryQueue_IgnoredCaps"),
                ),
                m.createElement(
                  "div",
                  { className: _e().GridNumber },
                  (0, ye.D)(D),
                ),
                m.createElement(
                  c.Fh,
                  {
                    className: (0, f.A)(_e().GridSubTitle, _e().TextLink),
                    href: (0, G.NT)(
                      C.TS.STORE_BASE_URL + "account/notinterested",
                    ),
                  },
                  (0, h.we)("#DiscoveryQueue_ViewIgnored"),
                ),
              ),
            ),
            !v &&
              m.createElement(
                i.Z,
                { className: _e().SummaryActionButtonsCtn },
                m.createElement(
                  i.Z,
                  {
                    className: (0, f.A)(_e().QueueButton, _e().Wide),
                    onClick: r,
                  },
                  (0, h.we)("#ActionButtonLabelDone"),
                ),
                !z &&
                  m.createElement(
                    i.Z,
                    {
                      className: (0, f.A)(
                        N && _e().Disabled,
                        _e().QueueButton,
                        _e().Primary,
                        _e().Wide,
                      ),
                      onClick: q,
                    },
                    N ? (0, h.we)("#Loading") : (0, h.we)("#Button_Continue"),
                  ),
              ),
          ),
          Boolean(!z) &&
            m.createElement(m.Fragment, null, Boolean(d) && d(a + 1)),
        );
      }
      function He(e) {
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
                _e().SummaryCtn,
                _e().DiscoveryQueueApp,
                r && _e().Selected,
              ),
              onOptionsActionDescription: (0, h.we)(
                "#DiscoveryQueue_ViewWishlist",
              ),
              onOptionsButton: () => {
                p.location.href = (0, G.NT)(l);
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
                  className: _e().DiscoveryQueueThrobber,
                  msDelayAppear: 200,
                  size: "large",
                  position: "center",
                }),
          )
        );
      }
      function Ve() {
        return m.createElement(
          i.Z,
          { className: _e().SaleRewardsCtn },
          m.createElement(D.t, { size: "large", position: "center" }),
        );
      }
      function Ke(e) {
        const { bSkipAppRequestPending: t, summaryCardIdx: r } = e;
        return t
          ? m.createElement(Ve, null)
          : m.createElement(Ze, { summaryCardIdx: r });
      }
      function Ze(e) {
        const { summaryCardIdx: t } = e,
          r = (0, p.os)(2, C.TS.LANGUAGE, !1, t.toString()),
          [a] = (0, g.t7)(r?.data?.current_def?.appid, {}),
          n = (0, C.Qn)();
        if (!r?.data?.current_def || !a?.GetName().length)
          return m.createElement(Ve, null);
        const s = r.data.num_items_earned,
          o = r.data.current_def.num_items_per_def,
          l = o - s,
          c = (s / o) * 100;
        return m.createElement(
          i.Z,
          { className: _e().SaleRewardsCtn },
          m.createElement(M, { nPercent: c, size: 70, strokeWidth: 12 }),
          m.createElement(
            i.Z,
            { className: _e().RewardStatusCtn },
            m.createElement(
              "div",
              { className: _e().SaleRewardAppTitle },
              (0, h.we)(
                "#DiscoveryQueue_SaleStatus_Title" + (l ? "" : "_Complete"),
                (0, ye.D)(s),
                a.GetName(),
              ),
            ),
            l > 0 &&
              m.createElement(
                "div",
                { className: _e().SaleRewardAppTitle },
                (0, h.we)(
                  "#DiscoveryQueue_SaleStatus_Desc",
                  (0, ye.D)(l),
                  a.GetName(),
                ),
              ),
            !n &&
              m.createElement(
                "a",
                {
                  href: (0, G.NT)(
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
        i = r(75422),
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
          { eStoreDiscoveryQueueType: S, storePageFilter: B } =
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
          { showDiscoveryQueue: v } = (0, g.GV)(S, {
            includeAppID: t,
            storePageFilter: B,
          }),
          C = a.useCallback(() => {
            y(!0);
          }, []),
          I = (0, s.WX)(S, B);
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
                    onOKButton: v,
                    onOKActionDescription: (0, d.we)(
                      "#DiscoveryQueue_ResumeWizard",
                    ),
                    onSecondaryActionDescription: (0, d.we)("#Button_Close"),
                  },
                  a.createElement(
                    "div",
                    { onClick: v, className: p().WidgetText },
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
      var a = r(75422),
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
