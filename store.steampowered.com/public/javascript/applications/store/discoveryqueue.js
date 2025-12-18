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
      r.d(t, { mK: () => b, DW: () => g, js: () => _, tb: () => w });
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
          r = a.useContext(y);
        return (0, i.I)(b(r, t, e));
      }
      function g(e) {
        const t = (0, s.KV)(),
          r = a.useContext(y);
        return (0, n.E)({ queries: e.map((e) => b(r, t, e)) });
      }
      const y = a.createContext({
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
      function w() {
        return a.useContext(y);
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
        y = r(20194);
      class w {
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
            w.s_Singleton ||
              ((w.s_Singleton = new w()),
              w.s_Singleton.Init(),
              "dev" == l.TS.WEB_UNIVERSE &&
                (window.g_SaleItemClaimableRewardsStore = w.s_Singleton)),
            w.s_Singleton
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
        const [e, t] = (0, c.useState)(w.Get().GetClaimItemState()),
          [r, a] = (0, c.useState)(!0);
        return (
          (0, c.useEffect)(() => {
            w.Get()
              .LoadCanUserClaimItem()
              .then(t)
              .finally(() => a(!1));
          }, []),
          (0, u.hL)(w.Get().GetClaimStateChangeCallback(), t),
          { ...e, bLoading: r }
        );
      }
      function f() {
        return { fnClaimItem: w.Get().UserClaimItem };
      }
      function h() {
        return { fnSetClaimState: w.Get().TEST_OverrideClaimState };
      }
      async function S(e) {
        return w.Get().ActivateProfileModifier(e);
      }
      function v(e, t, r) {
        const a = (0, g.KV)();
        return (0, y.I)({
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
        return (0, y.I)({
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
      (0, a.Cg)([u.oI], w.prototype, "TEST_OverrideClaimState", null),
        (0, a.Cg)([u.oI], w.prototype, "UserClaimItem", null);
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
      r.r(t), r.d(t, { default: () => xe });
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
        _ = r(82097),
        g = r(55263),
        y = r(12155),
        w = r(32630),
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
        A = r(22797),
        D = r(10224),
        T = r(20019),
        N = r(62792),
        F = r(26101),
        U = r(94095),
        z = r(44986),
        G = r(32754),
        q = r(20713),
        W = r(47453),
        P = r(20194),
        x = r(1035),
        Q = r(34181),
        L = r(17720),
        k = r(4796),
        O = r(8092),
        j = r(56545),
        H = r(80613),
        V = r.n(H),
        K = r(89068);
      class Z extends H.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.recommendationid || K.Sg(Z.M()),
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
                    br: K.qM.readUint64String,
                    bw: K.gp.writeUint64String,
                  },
                  review_text: {
                    n: 2,
                    br: K.qM.readString,
                    bw: K.gp.writeString,
                  },
                  voted_up: { n: 3, br: K.qM.readBool, bw: K.gp.writeBool },
                  is_public: { n: 4, br: K.qM.readBool, bw: K.gp.writeBool },
                  language: { n: 5, br: K.qM.readString, bw: K.gp.writeString },
                  is_in_early_access: {
                    n: 6,
                    br: K.qM.readBool,
                    bw: K.gp.writeBool,
                  },
                  received_compensation: {
                    n: 7,
                    br: K.qM.readBool,
                    bw: K.gp.writeBool,
                  },
                  comments_disabled: {
                    n: 8,
                    br: K.qM.readBool,
                    bw: K.gp.writeBool,
                  },
                  hide_in_steam_china: {
                    n: 9,
                    br: K.qM.readBool,
                    bw: K.gp.writeBool,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = K.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return K.BT(Z.M(), e, t);
        }
        static fromObject(e) {
          return K.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (V().BinaryReader)(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return K.zj(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (V().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          K.i0(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (V().BinaryWriter)();
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
          let t = new (V().BinaryReader)(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (V().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (V().BinaryWriter)();
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
            Y.prototype.reaction_type || K.Sg(Y.M()),
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
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  count: { n: 2, br: K.qM.readUint32, bw: K.gp.writeUint32 },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = K.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return K.BT(Y.M(), e, t);
        }
        static fromObject(e) {
          return K.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (V().BinaryReader)(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return K.zj(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (V().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          K.i0(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (V().BinaryWriter)();
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
            X.prototype.id || K.Sg(X.M()),
            H.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  id: { n: 1, br: K.qM.readEnum, bw: K.gp.writeEnum },
                  ranges: { n: 2, c: J, r: !0, q: !0 },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = K.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return K.BT(X.M(), e, t);
        }
        static fromObject(e) {
          return K.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (V().BinaryReader)(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return K.zj(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (V().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          K.i0(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new (V().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_Tag";
        }
      }
      class J extends H.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.start || K.Sg(J.M()),
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
                  start: { n: 1, br: K.qM.readUint32, bw: K.gp.writeUint32 },
                  end: { n: 2, br: K.qM.readUint32, bw: K.gp.writeUint32 },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = K.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return K.BT(J.M(), e, t);
        }
        static fromObject(e) {
          return K.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (V().BinaryReader)(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return K.zj(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (V().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          K.i0(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new (V().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_Tag_Range";
        }
      }
      class ee extends H.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.recommendationid || K.Sg(ee.M()),
            H.Message.initialize(this, e, 0, -1, [27, 40, 54], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  recommendationid: {
                    n: 1,
                    br: K.qM.readUint64String,
                    bw: K.gp.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: K.qM.readUint64String,
                    bw: K.gp.writeUint64String,
                  },
                  appid: { n: 3, br: K.qM.readUint32, bw: K.gp.writeUint32 },
                  review: { n: 4, br: K.qM.readString, bw: K.gp.writeString },
                  time_created: {
                    n: 5,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  time_updated: {
                    n: 6,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  votes_up: { n: 7, br: K.qM.readUint32, bw: K.gp.writeUint32 },
                  votes_down: {
                    n: 8,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  vote_score: { n: 9, br: K.qM.readFloat, bw: K.gp.writeFloat },
                  language: {
                    n: 10,
                    br: K.qM.readString,
                    bw: K.gp.writeString,
                  },
                  comment_count: {
                    n: 11,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  voted_up: { n: 12, br: K.qM.readBool, bw: K.gp.writeBool },
                  is_public: { n: 13, br: K.qM.readBool, bw: K.gp.writeBool },
                  moderator_hidden: {
                    n: 14,
                    br: K.qM.readBool,
                    bw: K.gp.writeBool,
                  },
                  flagged_by_developer: {
                    n: 15,
                    br: K.qM.readEnum,
                    bw: K.gp.writeEnum,
                  },
                  report_score: {
                    n: 16,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  steamid_moderator: {
                    n: 17,
                    br: K.qM.readUint64String,
                    bw: K.gp.writeUint64String,
                  },
                  steamid_developer: {
                    n: 18,
                    br: K.qM.readUint64String,
                    bw: K.gp.writeUint64String,
                  },
                  steamid_dev_responder: {
                    n: 19,
                    br: K.qM.readUint64String,
                    bw: K.gp.writeUint64String,
                  },
                  developer_response: {
                    n: 20,
                    br: K.qM.readString,
                    bw: K.gp.writeString,
                  },
                  time_developer_responded: {
                    n: 21,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  developer_flag_cleared: {
                    n: 22,
                    br: K.qM.readBool,
                    bw: K.gp.writeBool,
                  },
                  written_during_early_access: {
                    n: 23,
                    br: K.qM.readBool,
                    bw: K.gp.writeBool,
                  },
                  votes_funny: {
                    n: 24,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  received_compensation: {
                    n: 25,
                    br: K.qM.readBool,
                    bw: K.gp.writeBool,
                  },
                  unverified_purchase: {
                    n: 26,
                    br: K.qM.readBool,
                    bw: K.gp.writeBool,
                  },
                  review_qualities: {
                    n: 27,
                    r: !0,
                    q: !0,
                    br: K.qM.readEnum,
                    pbr: K.qM.readPackedEnum,
                    bw: K.gp.writeRepeatedEnum,
                  },
                  weighted_vote_score: {
                    n: 28,
                    br: K.qM.readFloat,
                    bw: K.gp.writeFloat,
                  },
                  moderation_note: {
                    n: 29,
                    br: K.qM.readString,
                    bw: K.gp.writeString,
                  },
                  payment_method: {
                    n: 30,
                    br: K.qM.readInt32,
                    bw: K.gp.writeInt32,
                  },
                  playtime_2weeks: {
                    n: 31,
                    br: K.qM.readInt32,
                    bw: K.gp.writeInt32,
                  },
                  playtime_forever: {
                    n: 32,
                    br: K.qM.readInt32,
                    bw: K.gp.writeInt32,
                  },
                  last_playtime: {
                    n: 33,
                    br: K.qM.readInt32,
                    bw: K.gp.writeInt32,
                  },
                  comments_disabled: {
                    n: 34,
                    br: K.qM.readBool,
                    bw: K.gp.writeBool,
                  },
                  playtime_at_review: {
                    n: 35,
                    br: K.qM.readInt32,
                    bw: K.gp.writeInt32,
                  },
                  approved_for_china: {
                    n: 36,
                    br: K.qM.readBool,
                    bw: K.gp.writeBool,
                  },
                  ban_check_result: {
                    n: 37,
                    br: K.qM.readEnum,
                    bw: K.gp.writeEnum,
                  },
                  refunded: { n: 38, br: K.qM.readBool, bw: K.gp.writeBool },
                  account_score_spend: {
                    n: 39,
                    br: K.qM.readInt32,
                    bw: K.gp.writeInt32,
                  },
                  reactions: { n: 40, c: Y, r: !0, q: !0 },
                  ipaddress: {
                    n: 41,
                    br: K.qM.readString,
                    bw: K.gp.writeString,
                  },
                  hidden_in_steam_china: {
                    n: 42,
                    br: K.qM.readBool,
                    bw: K.gp.writeBool,
                  },
                  steam_china_location: {
                    n: 43,
                    br: K.qM.readString,
                    bw: K.gp.writeString,
                  },
                  category_ascii_pct: {
                    n: 44,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  category_meme_pct: {
                    n: 45,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  category_offtopic_pct: {
                    n: 46,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  category_uninformative_pct: {
                    n: 47,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  category_votefarming_pct: {
                    n: 48,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  deck_playtime_at_review: {
                    n: 49,
                    br: K.qM.readInt32,
                    bw: K.gp.writeInt32,
                  },
                  is_bot_review_pct: {
                    n: 50,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  positivity_pct: {
                    n: 51,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  tags_with_ranges: { n: 54, c: X, r: !0, q: !0 },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = K.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return K.BT(ee.M(), e, t);
        }
        static fromObject(e) {
          return K.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (V().BinaryReader)(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return K.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (V().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          K.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (V().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "RecommendationDetails";
        }
      }
      class te extends H.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.appid || K.Sg(te.M()),
            H.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  appid: { n: 1, br: K.qM.readUint32, bw: K.gp.writeUint32 },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = K.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return K.BT(te.M(), e, t);
        }
        static fromObject(e) {
          return K.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (V().BinaryReader)(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return K.zj(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (V().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          K.i0(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (V().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetFriendsRecommendedApp_Request";
        }
      }
      class re extends H.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.accountids_recommended || K.Sg(re.M()),
            H.Message.initialize(this, e, 0, -1, [1, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  accountids_recommended: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: K.qM.readUint32,
                    pbr: K.qM.readPackedUint32,
                    bw: K.gp.writeRepeatedUint32,
                  },
                  accountids_not_recommended: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: K.qM.readUint32,
                    pbr: K.qM.readPackedUint32,
                    bw: K.gp.writeRepeatedUint32,
                  },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = K.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return K.BT(re.M(), e, t);
        }
        static fromObject(e) {
          return K.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (V().BinaryReader)(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return K.zj(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (V().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          K.i0(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (V().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetFriendsRecommendedApp_Response";
        }
      }
      class ae extends H.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.requests || K.Sg(ae.M()),
            H.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: { requests: { n: 1, c: ie, r: !0, q: !0 } },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = K.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return K.BT(ae.M(), e, t);
        }
        static fromObject(e) {
          return K.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (V().BinaryReader)(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return K.zj(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (V().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          K.i0(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new (V().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Request";
        }
      }
      class ie extends H.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.steamid || K.Sg(ie.M()),
            H.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  steamid: {
                    n: 1,
                    br: K.qM.readUint64String,
                    bw: K.gp.writeUint64String,
                  },
                  appid: { n: 2, br: K.qM.readUint32, bw: K.gp.writeUint32 },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = K.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return K.BT(ie.M(), e, t);
        }
        static fromObject(e) {
          return K.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (V().BinaryReader)(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return K.zj(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (V().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          K.i0(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (V().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Request_RecommendationRequest";
        }
      }
      class ne extends H.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.recommendations || K.Sg(ne.M()),
            H.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: { recommendations: { n: 1, c: ee, r: !0, q: !0 } },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = K.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return K.BT(ne.M(), e, t);
        }
        static fromObject(e) {
          return K.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (V().BinaryReader)(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return K.zj(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (V().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          K.i0(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (V().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
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
              (0, j.I8)(te, t),
              re,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetIndividualRecommendations = function (e, t) {
            return e.SendMsg(
              "UserReviews.GetIndividualRecommendations#1",
              (0, j.I8)(ae, t),
              ne,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          });
      })(M || (M = {}));
      var se = r(41735),
        oe = r.n(se),
        le = r(3734);
      class ce {
        static async LoadFriendsRecommendedApp(e, t) {
          const r = j.w.Init(te);
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
            await oe().get(
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
      var me = r(57834),
        de = r.n(me),
        ue = r(14336),
        pe = r(26505),
        _e = r(6083);
      const ge = new S.wd("AppRelevance").Debug;
      function ye(e) {
        const {
            appID: t,
            bShowAvatars: r,
            storeItem: a,
            bHideDescription: i,
            bShowCuratorInfo: n,
            bShowCreatorInfo: s,
          } = e,
          l = (0, pe.Nd)(t),
          c = (function (e) {
            const t = (0, o.KV)();
            return (0, P.I)({
              queryKey: ["AppRelevanceStore", "FriendsRecommended", e],
              queryFn: () => ce.LoadFriendsRecommendedApp(t, e),
              enabled: C.iA.logged_in,
            });
          })(t),
          d = (function (e) {
            return (0, P.I)({
              queryKey: ["AppRelevanceStore", "StoreRelevance", e],
              queryFn: () => ce.LoadStoreRelevanceData(e),
              enabled: C.iA.logged_in,
            });
          })(t),
          p = (function () {
            const { data: e } = (0, le.PG)("App Relevance Store Top Sellers", {
              sort: 11,
              start: 0,
              count: 100,
            });
            return e;
          })(),
          g = (0, P.I)({
            queryKey: ["SimilarPlayedAppsLoad", t],
            queryFn: () =>
              _.A.Get().QueueMultipleAppRequests(
                d.data.arrSimilarPlayedApps?.map((e) => e.appid),
                { include_basic_info: !0, include_assets: !0 },
              ),
            enabled: d.isSuccess,
          }),
          y = (function (e, t) {
            const r = (0, m.useMemo)(
              () => u.Fm.Get().GetRecommendingCuratorsForApp(e) || [],
              [e],
            );
            return (0, P.I)({
              queryKey: ["RecommendingCurators", e],
              queryFn: () =>
                Promise.all(
                  r?.map((e) => k.ac.LoadClanInfoForClanAccountID(e)),
                ),
              enabled: !!t && r && r.length > 0,
            });
          })(t, n),
          w = (0, m.useMemo)(() => {
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
          b = (0, P.I)({
            queryKey: ["FollowedCreators", t],
            queryFn: () =>
              k.ac
                .LoadClanInfoForClanAccountID(w[0].nAccountID)
                .then((e) => ({ clanInfo: e, type: w[0].type })),
            enabled: !!s && w && w.length > 0,
          }),
          S = (0, P.I)({
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
                const r = L.b.InitFromAccountID(
                  c.data.accountids_recommended[t],
                );
                e.push(r.ConvertTo64BitString());
              }
              for (let e = 0; e < l.data.in_wishlist?.length && e < i; e++) {
                const r = new L.b(l.data.in_wishlist[e].steamid);
                t.push(r.ConvertTo64BitString());
              }
              for (let e = 0; e < l.data.owns?.length && e < i; e++) {
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
          d.isLoading ||
          c.isLoading ||
          l.isLoading ||
          y.isLoading ||
          b.isLoading ||
          S.isLoading
        )
          return m.createElement(A.t, { size: "medium", position: "center" });
        let v = [];
        d.isSuccess &&
          d.data.arrSimilarPlayedApps &&
          d.data.arrSimilarPlayedApps.forEach((e) => {
            const r = _.A.Get().GetApp(e.appid);
            r
              ? v.push(
                  m.createElement(fe, {
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
          D = c.data?.accountids_recommended?.length;
        let T = 0;
        return (
          E > 0 && T++,
          M > 0 && T++,
          D > 0 && T++,
          I && T++,
          B >= 0 && T++,
          v.length > 0 && T++,
          n && y?.data?.length > 0 && T++,
          s && Boolean(b.data) && T++,
          ge(
            "FriendsOwned: ",
            E,
            " FriendsWishlisted: ",
            M,
            "cRecommended: ",
            D,
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
                  { className: de().WhyRelevant },
                  (0, h.we)("#DiscoveryQueue_WhyRelevant"),
                ),
                m.createElement(
                  "div",
                  { role: "list", className: de().RelevantCtn },
                  R &&
                    m.createElement(
                      Ce,
                      { header: (0, h.we)("#DiscoveryQueue_SimilarGames") },
                      m.createElement(
                        "div",
                        { className: de().ReleventSimilarAppsCtn },
                        v,
                      ),
                    ),
                  n &&
                    y?.data?.length > 0 &&
                    m.createElement(
                      Ce,
                      {
                        header: (0, h.we)(
                          "#ContentHub_Recommendation_Curators",
                        ),
                      },
                      m.createElement(
                        "div",
                        {
                          className: (0, f.A)(
                            de().ReleventSimilarAppsCtn,
                            de().RecommendingCuratorsCtn,
                          ),
                        },
                        y.data
                          .filter(Boolean)
                          .map((e) =>
                            m.createElement(be, {
                              key: "curator_" + e.clanAccountID,
                              curator: e,
                            }),
                          ),
                      ),
                    ),
                  s &&
                    Boolean(b.data) &&
                    m.createElement(we, { creatorInfo: b.data }),
                  B >= 0 &&
                    m.createElement(Ce, {
                      header: (0, h.um)(
                        "#DiscoveryQueue_TopSellers",
                        (0, _e.D)(B + 1),
                        m.createElement("span", {
                          className: de().RelevantTextBold,
                        }),
                      ),
                    }),
                  I &&
                    !R &&
                    m.createElement(Ce, {
                      header: (0, h.we)("#DiscoveryQueue_RecommendedByIR"),
                    }),
                  m.createElement(he, {
                    bShowAvatars: r,
                    count: c.data?.accountids_recommended?.length,
                    locToken: "#DiscoveryQueue_FriendsRecommended",
                    arrSteamIDs: S.data?.rgRecommendedFriends,
                  }),
                  m.createElement(he, {
                    bShowAvatars: r,
                    count: l.data?.owns?.length,
                    locToken: "#DiscoveryQueue_FriendsOwned",
                    arrSteamIDs: S.data?.rgOwnedFriends,
                  }),
                  m.createElement(he, {
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
                    className: (0, f.A)(de().AppDescription, T && de().Divider),
                  },
                  a.GetShortDescription(),
                ),
          )
        );
      }
      function we(e) {
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
          ? m.createElement(Ce, {
              header: (0, h.PP)(
                r,
                m.createElement(
                  "span",
                  { className: de().RelevantTextBold },
                  t.clanInfo?.group_name,
                ),
              ),
            })
          : null;
      }
      function be(e) {
        const { curator: t } = e,
          { creatorHome: r } = (0, O.FV)(t?.clanAccountID);
        return t && r
          ? m.createElement(
              a.Ii,
              { href: r.GetCreatorHomeURL(null) },
              m.createElement("img", { src: t.avatar_medium_url }),
            )
          : null;
      }
      function fe(e) {
        const { lifetimePlaytime: t, storeItem: r } = e;
        return m.createElement(
          "div",
          { className: de().SimilarAppCtn },
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
              className: de().SimilarAppImg,
              alt: r.GetName(),
              src: r.GetAssets().GetSmallCapsuleURL(),
            }),
          ),
        );
      }
      function he(e) {
        const { arrSteamIDs: t, count: r, locToken: a, bShowAvatars: i } = e;
        return r
          ? 1 != r || i
            ? m.createElement(
                Ce,
                {
                  header: (0, h.um)(
                    a,
                    r,
                    m.createElement("span", {
                      className: de().RelevantTextBold,
                    }),
                  ),
                },
                i &&
                  t.length > 0 &&
                  m.createElement(
                    "div",
                    { className: de().FriendAvatarsCtn },
                    1 == r
                      ? m.createElement(Be, { steamid: t[0] })
                      : m.createElement(ve, { arrSteamIDs: t }),
                  ),
              )
            : m.createElement(Ce, {
                header: (0, h.PP)(
                  a + "_Single",
                  m.createElement(Se, { steamid: t[0] }),
                ),
              })
          : null;
      }
      function Se(e) {
        const { steamid: t } = e,
          { data: r } = (0, ue.js)(t);
        return r && r.m_bInitialized
          ? m.createElement(
              "span",
              {
                "data-miniprofile": "s" + r.m_steamid.ConvertTo64BitString(),
                className: de().RelevantTextBold,
              },
              r.m_strPlayerName,
            )
          : null;
      }
      function ve(e) {
        const { arrSteamIDs: t } = e,
          r = (0, ue.DW)(t);
        return m.createElement(
          m.Fragment,
          null,
          r.map(
            ({ data: e }) =>
              e &&
              m.createElement(x.i8, {
                key: e.m_steamid.ConvertTo64BitString(),
                "data-miniprofile": "s" + e.m_steamid.ConvertTo64BitString(),
                persona: e,
                size: "Small",
                statusPosition: "right",
              }),
          ),
        );
      }
      function Be(e) {
        const { steamid: t } = e,
          { data: r } = (0, ue.js)(t);
        return r
          ? m.createElement(
              i.Z,
              { className: de().FriendBlockCtn, "data-miniprofile": "s" + t },
              m.createElement(x.i8, {
                persona: r,
                size: "Small",
                statusPosition: "right",
              }),
              m.createElement(Q.D, {
                className: de().PersonaStatus,
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
      function Ce(e) {
        const { children: t, header: r } = e;
        return m.createElement(
          "div",
          { className: de().RelevantItem },
          m.createElement(
            "div",
            { className: de().RelevantCheck },
            m.createElement(y.Jlk, null),
          ),
          m.createElement(
            "div",
            { className: de().RelevantColumn },
            m.createElement("div", { className: de().ReleventText }, r),
            t,
          ),
        );
      }
      var Ie = r(60338),
        Re = r(60779),
        Ee = r(61336),
        Me = r(92834);
      new S.wd("DiscoveryQueueApp").Debug;
      function Ae(e) {
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
          [y] = (0, g.t7)(t, Ie.Gy),
          w = (0, C.Qn)(),
          b = (0, d.R7)(),
          S = b?.ownerWindow || window,
          v = De(y, o, l, c),
          { bIsIgnored: B, fnUpdateIgnored: I } = (0, Ie.TK)(t),
          { bIsWishlisted: R, fnUpdateWishlist: E } = (0, Ie.u4)(t),
          M = m.useRef(void 0);
        if (
          (m.useEffect(() => {
            n && M.current && M.current.focus({ preventScroll: !0 });
          }, [n]),
          !y)
        )
          return console.warn("Error: missing store item for appid ", t), null;
        const A = { width: a || void 0, height: r || void 0 };
        return m.createElement(
          i.Z,
          {
            "aria-labelledby": (0, Me.q)(
              _.nameId,
              _.tagsId,
              _.reviewId,
              _.relevanceId,
              _.buttonsId,
            ),
            ref: M,
            style: A,
            className: (0, f.A)(de().DiscoveryQueueApp, n && de().Selected),
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
            { className: (0, f.A)(de().IgnoredCtn, B && de().Active) },
            m.createElement(
              "div",
              { className: (0, f.A)(de().IgnoredInfo, B && de().Active) },
              m.createElement(
                "div",
                { className: de().IgnoredTitle },
                (0, h.we)("#DiscoveryQueue_Ignored"),
              ),
              m.createElement(
                "div",
                { className: de().IgnoredDescription },
                (0, h.we)("#DiscoveryQueue_IgnoredConfirmation"),
              ),
              m.createElement(
                i.Z,
                {
                  className: (0, f.A)(de().QueueButton, de().UndoIgnoreButton),
                  onClick: I,
                },
                w &&
                  m.createElement(z.$m, {
                    button: q.g4.X,
                    type: z.wt.Light,
                    size: z.xY.Medium,
                  }),
                (0, h.we)("#DiscoveryQueue_Undo"),
              ),
            ),
          ),
          u,
          p,
        );
      }
      function De(e, t, r, a) {
        const i = (0, c.n9)();
        return m.useMemo(() => {
          if (!e) return;
          const n = (0, I.Bk)(r),
            s = t >= 0 ? "?inqueue=" + t + (r ? "_" + n : "") : "",
            o = (0, c.bV)(i, e.GetStorePageURL(a) + s);
          return (0, Ee.NT)(o);
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
          [l] = (0, g.t7)(t, Ie.Gy),
          { bIsIgnored: c, fnUpdateIgnored: d } = (0, Ie.TK)(t),
          { bIsWishlisted: u, fnUpdateWishlist: p } = (0, Ie.u4)(t),
          _ = De(l, a, n, s),
          w = (0, C.Qn)(),
          b = w;
        if (!l) return;
        const S = l.GetAssets().GetLibraryCapsuleURL(),
          v = l.GetAssets().GetHeaderURL();
        return m.createElement(
          i.Z,
          { className: de().AppDetailsCtn },
          m.createElement(
            "div",
            { className: de().AppDetailsCtnTop },
            S &&
              m.createElement(
                "a",
                { className: (0, f.A)(de().CapsuleLink), href: _ },
                m.createElement("img", {
                  className: de().AppLibraryHero,
                  src: S,
                }),
                v &&
                  m.createElement("img", { className: de().AppHeader, src: v }),
              ),
            m.createElement(
              "div",
              { id: o.nameId, className: de().RightColumn },
              m.createElement(
                "a",
                { className: (0, f.A)(de().AppName), href: _ },
                l.GetName(),
              ),
              m.createElement(U.wc, {
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
              { className: de().AppReviews, id: o.reviewId },
              m.createElement(F.Jz, {
                bShowTooltip: !0,
                bTruncateTotalReviews: r,
                appInfo: { id: t, type: (0, T.U)(l.GetAppType()) },
              }),
            ),
            m.createElement(
              "div",
              { id: o.relevanceId, className: de().AppRelevanceCtn },
              m.createElement(ye, {
                bHideDescription: w,
                bShowAvatars: !r,
                storeItem: l,
                appID: t,
              }),
            ),
          ),
          !w &&
            m.createElement(
              "div",
              { className: de().AppActionButtonsCtn },
              m.createElement(
                "div",
                { id: o.buttonsId, className: de().AppActionJustButtonsCtn },
                m.createElement(
                  "div",
                  { className: de().ButtonsRowWrap },
                  l.BHasDemo() &&
                    m.createElement(W.j, {
                      info: {
                        id: l.GetAppID(),
                        type: (0, N._4)(l.GetStoreItemType(), l.GetAppType()),
                      },
                      className: (0, f.A)(
                        de().QueueButton,
                        de().Primary,
                        de().Launch,
                      ),
                    }),
                  m.createElement(
                    "a",
                    {
                      className: (0, f.A)(de().QueueButton, de().Primary),
                      href: _,
                    },
                    b &&
                      m.createElement(z.$m, {
                        button: q.g4.Y,
                        type: z.wt.Light,
                        size: z.xY.Medium,
                        additionalClassName: de().YGlyph,
                      }),
                    " ",
                    (0, h.we)("#DiscoveryQueue_ViewStorePage"),
                  ),
                  m.createElement(
                    G.he,
                    {
                      toolTipContent: u
                        ? (0, h.we)("#RemoveFromWishlist_ttip")
                        : (0, h.we)("#AddToWishlist_ttip"),
                    },
                    m.createElement(
                      i.Z,
                      {
                        "aria-label": u
                          ? (0, h.we)("#Sale_RemoveFromWishlist")
                          : (0, h.we)("#Sale_AddToWishlist"),
                        focusable: !0,
                        className: (0, f.A)(de().QueueButton, u && de().Active),
                        onClick: p,
                      },
                      b &&
                        m.createElement(z.$m, {
                          button: q.g4.Y,
                          type: z.wt.Light,
                          size: z.xY.Medium,
                          additionalClassName: de().YGlyph,
                        }),
                      u
                        ? m.createElement(y.qnF, null)
                        : m.createElement(y.T4m, null),
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
                        className: (0, f.A)(de().QueueButton, c && de().Active),
                        onClick: d,
                      },
                      m.createElement(y.NtH, null),
                    ),
                  ),
                ),
              ),
            ),
        );
      }
      function Ne(e) {
        const { rgTagIDs: t, ariaLabelID: r } = e,
          a = [...(0, Ie.W3)(t)].slice(0, 8);
        return m.createElement(
          "div",
          { id: r, role: "list", className: de().AppTagsCtn },
          a.map((e) =>
            m.createElement(Re.Fz, {
              key: e,
              className: de().TagEntry,
              tagID: e,
            }),
          ),
        );
      }
      var Fe = r(60884),
        Ue = r(90511);
      const ze = new S.wd("DiscoveryQueueWizard").Debug,
        Ge = 1,
        qe = 1400,
        We = "discoveryqueue2022";
      async function Pe(e, t, r, a) {
        let i = [],
          n = !1;
        try {
          const { appids: s, exhausted: o } = await I.aI
            .Get()
            .GetDiscoveryQueueAppsOfType(e, t, a);
          (i = [...s]),
            (n = o),
            r && -1 === i.findIndex((e) => e === r) && i.unshift(r),
            await _.A.Get().QueueMultipleAppRequests(i, { ...Ie.Gy, ...Ue.LB });
        } catch (e) {
          console.error("Failed getting discovery queue apps", e);
        }
        return { appids: i, exhausted: n };
      }
      function xe(e) {
        const [t, r] = m.useState(!1),
          a = (0, o.KV)();
        return (
          (0, m.useEffect)(() => {
            I.aI.Init(a), r(!0);
          }, [a]),
          t ? m.createElement(Qe, { ...e }) : null
        );
      }
      function Qe(e) {
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
          [M, A] = m.useState(0),
          T = (0, d.R7)(),
          N = T?.ownerWindow || window,
          F = (0, c.ru)(We),
          [U, z] = m.useState(0),
          G = (0, l.b)();
        (0, B.E)("ArrowLeft", () => x(!1), !0, !0),
          (0, B.E)("Left", () => x(!1), !0, !0),
          (0, B.E)("ArrowRight", () => x(!0), !0, !0),
          (0, B.E)("Right", () => x(!0), !0, !0),
          (0, B.E)("Escape", () => r?.(), !0, !0),
          (0, B.E)("Esc", () => r?.(), !0, !0);
        const q = m.useMemo(() => Boolean(N.innerWidth < qe), [N]),
          { fnGetDiscoveryQueue: W, rgAppIDs: P } = (function (e, t, r) {
            const [a, i] = m.useState([]),
              n = (0, b.m)("DiscoveryQueueWizard"),
              s = async (s) => {
                let { appids: o } = await Pe(e, !s, s && r, t);
                if (s && !o.length) {
                  let { appids: r } = await Pe(e, !0, void 0, t);
                  o = r;
                }
                if (!n?.token?.reason) {
                  const e = [...(a ?? []), ...o, Ge];
                  i(e);
                }
                ze("Loaded new discovery queue apps: ", o);
              };
            return { fnGetDiscoveryQueue: s, rgAppIDs: a };
          })(t, o, n);
        m.useEffect(() => {
          W(!0), u.Fm.Get().HintLoad();
        }, []),
          m.useEffect(() => {
            const e = P[g];
            e != R && (e && e != Ge && G.AddImpression(e, F), E(e));
          }, [G, g, R, P, F]);
        const x = (e) => {
          const t = v.OQ(g + (e ? 1 : -1), 0, P.length - 1);
          t != g &&
            (S(t), ze("New selected index: ", t, " Prev selected index: ", g));
        };
        m.useEffect(() => {
          P?.length &&
            P[g] !== Ge &&
            (z((e) => e + 1),
            I.aI
              .Get()
              .SkipDiscoveryQueueItem(P[g], t, o)
              .then(() => z((e) => e - 1)));
        }, [t, g, P, o]),
          m.useEffect(() => {
            P.length != M &&
              (A(P.length), P.length > M && P[g] == Ge && S(g + 1));
          }, [M, g, P]);
        const [Q] = m.useState(new Map()),
          L = (0, I.WX)(t, o),
          k = !(0, D.c5)() && g > 0,
          O = !(0, D.c5)() && g < P.length - 1,
          {
            refContainer: j,
            bIsDragging: H,
            nDragOffset: V,
            nDragSelectedOffsetIndex: K,
            handleTouchStart: Z,
            handleTouchMove: $,
            handleTouchEnd: Y,
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
          })((e) => S(e), P.length),
          X = (e) => v.W(g + e, P) && (v.LA(e, -1, 1) || H),
          J = (0, c.aL)(C.TS.STORE_BASE_URL + "explore?dq=widget"),
          ee = P[g] !== Ge,
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
            const i = a - r;
            return { nQueueStart: r, nQueueEnd: a, nCount: i };
          })(g, P);
        return m.createElement(
          w.Ay,
          { feature: We },
          m.createElement(
            i.Z,
            {
              role: "dialog",
              focusable: !1,
              "flow-children": "column",
              className: de().DiscoveryQueueCarouselCtn,
              navEntryPreferPosition: s.iU.LAST,
              onCancelButton: () => r?.(),
              onCancelActionDescription: (0, h.we)("#Button_Close"),
            },
            m.createElement(
              "div",
              {
                className: de().DiscoveryQueueWrapper,
                onClick: (e) => {
                  e.target == e.currentTarget && (r?.(), e.stopPropagation());
                },
              },
              L.length > 0 &&
                m.createElement(
                  i.Z,
                  {
                    "flow-children": "row",
                    className: de().DiscoveryQueueName,
                  },
                  L,
                ),
              m.createElement(
                i.Z,
                { "flow-children": "row", className: de().TopBarCtn },
                m.createElement(
                  i.Z,
                  { className: de().LearnMore },
                  (0, h.oW)(
                    "#DiscoveryQueue_LearnMore_Default",
                    m.createElement(a.Ii, {
                      className: de().LearnMoreLink,
                      href: (0, Ee.NT)(J),
                    }),
                  ),
                ),
                m.createElement(
                  i.Z,
                  { className: de().ControlsCtn },
                  m.createElement(
                    i.Z,
                    {
                      focusable: !0,
                      className: de().QueueButton,
                      onClick: r,
                      "aria-label": (0, h.we)("#Button_Close"),
                      onActivate: () => r && r(),
                    },
                    m.createElement(y.X, null),
                  ),
                ),
              ),
              m.createElement(
                i.Z,
                {
                  role: "button",
                  "aria-label": (0, h.we)("#Carousel_Next"),
                  onClick: () => x(!1),
                  className: (0, f.A)(
                    de().QueueNavArrow,
                    de().LeftArrow,
                    k && de().Enable,
                  ),
                },
                m.createElement(y.l8x, { angle: 180 }),
              ),
              m.createElement(
                i.Z,
                {
                  role: "button",
                  "aria-label": (0, h.we)("#Carousel_Prev"),
                  onClick: () => x(!0),
                  className: (0, f.A)(
                    de().QueueNavArrow,
                    de().RightArrow,
                    O && de().Enable,
                  ),
                },
                m.createElement(y.l8x, { angle: 0 }),
              ),
              m.createElement(
                i.Z,
                {
                  ref: j,
                  className: de().DiscoveryQueueItemsCtn,
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
                      className: (0, f.A)({
                        [de().DiscoveryQueueItemPositioner]: !0,
                        [de().Dragging]: H,
                        [de().InRange]: X(e),
                        [de().FarLeft]: -2 == e,
                        [de().Left]: -1 == e,
                        [de().Current]: 0 == e,
                        [de().Right]: 1 == e,
                        [de().FarRight]: 2 == e,
                        [de().Selected]: e + K == 0,
                      }),
                      style: { "--dragOffsetX": `${V}px` },
                    },
                    X(e) &&
                      m.createElement(Le, {
                        eStoreDiscoveryQueueType: t,
                        storePageFilter: o,
                        rgAppIDs: P,
                        index: g + e,
                        bShowMinimizedDisplay: q,
                        selectedIndex: g,
                        bPreferDemoStorePage: p,
                        mapViewedAppCount: Q,
                        fnCloseModal: r,
                        fnLoadNextQueue: () => W(!1),
                        fnAdvance: x,
                        bSkipAppRequestPending: Boolean(0 != U),
                        showAOAutoPlayWarning: _,
                      }),
                  ),
                ),
              ),
              m.createElement(Fe.A, {
                className: (0, f.A)(!ee && de().ProgressHidden),
                showPriorAsActive: !0,
                count: re,
                selectedIndex: g - te,
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
          [g, y] = m.useState(!1),
          w = {
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
              y(!0);
              const e = setTimeout(() => y(!1), 500);
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
            m.createElement(ke, {
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
        return m.createElement(Ae, {
          appAriaIDs: w,
          eStoreDiscoveryQueueType: t,
          storePageFilter: r,
          selected: f,
          appID: a[i],
          bPreferDemoStorePage: o,
          fnFocused: b,
          elVideo: m.createElement(Ie.y3, {
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
            appAriaIDs: w,
          }),
        });
      }
      function ke(e) {
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
            fnAdvance: y,
            bSkipAppRequestPending: w,
          } = e,
          [S, v] = m.useState(!1),
          B = (0, C.Qn)(),
          R = (0, p.Qt)(2, C.TS.LANGUAGE, !1),
          [E, M] = m.useState(0),
          [A, D] = m.useState(0);
        m.useEffect(() => {
          s &&
            !S &&
            u.Fm.Get()
              .HintLoad()
              .then(() => {
                I.aI
                  .Get()
                  .LoadSkippedApps(t, l)
                  .then((e) => {
                    M(
                      e.reduce(
                        (e, t) => (u.Fm.Get().BIsGameWishlisted(t) ? e + 1 : e),
                        0,
                      ),
                    ),
                      D(
                        e.reduce(
                          (e, t) => (u.Fm.Get().BIsGameIgnored(t) ? e + 1 : e),
                          0,
                        ),
                      ),
                      v(!0);
                  });
              });
        }, [S, t, s, l]);
        const [T, N] = m.useState(!1),
          F = (0, I.IH)(t, l),
          U = (0, b.m)("DiscoveryQueueSummary"),
          z = async () => {
            n ? T || (N(!0), await o(), U?.token?.reason || N(!1)) : y();
          };
        return m.createElement(
          Oe,
          {
            selected: s,
            fnFocused: g,
            fnOnContinue: z,
            fnCloseModal: r,
            bLoaded: S,
          },
          m.createElement(
            "div",
            { className: de().SummaryContentCtn },
            m.createElement(
              "div",
              { className: de().SummaryTitle },
              (0, h.we)("#DiscoveryQueue_SummaryTitle"),
            ),
            !F &&
              s &&
              R.data?.definition &&
              m.createElement(He, {
                bSkipAppRequestPending: w,
                summaryCardIdx: a,
              }),
            m.createElement(
              "div",
              { className: de().YourStats },
              (0, h.we)("#DiscoveryQueue_YourStats"),
            ),
            m.createElement(
              i.Z,
              { "flow-children": "row", className: de().SummaryGrid },
              m.createElement(
                "div",
                { className: de().GridItem },
                m.createElement(
                  "div",
                  { className: de().GridTitle },
                  (0, h.we)("#DiscoveryQueue_ViewedCaps"),
                ),
                m.createElement(
                  "div",
                  { className: de().GridNumber },
                  (0, _e.D)(_),
                ),
                m.createElement(
                  "div",
                  { className: de().GridSubTitle },
                  (0, h.we)("#DiscoveryQueue_Titles"),
                ),
              ),
              m.createElement(
                "div",
                { className: de().GridItem },
                m.createElement(
                  "div",
                  { className: de().GridTitle },
                  (0, h.we)("#DiscoveryQueue_WishlistedCaps"),
                ),
                m.createElement(
                  "div",
                  { className: de().GridNumber },
                  (0, _e.D)(E),
                ),
                m.createElement(
                  c.Fh,
                  {
                    className: (0, f.A)(de().GridSubTitle, de().TextLink),
                    href: (0, Ee.NT)(C.TS.STORE_BASE_URL + "wishlist"),
                  },
                  (0, h.we)("#DiscoveryQueue_ViewWishlist"),
                ),
              ),
              m.createElement(
                "div",
                { className: de().GridItem },
                m.createElement(
                  "div",
                  { className: de().GridTitle },
                  (0, h.we)("#DiscoveryQueue_IgnoredCaps"),
                ),
                m.createElement(
                  "div",
                  { className: de().GridNumber },
                  (0, _e.D)(A),
                ),
                m.createElement(
                  c.Fh,
                  {
                    className: (0, f.A)(de().GridSubTitle, de().TextLink),
                    href: (0, Ee.NT)(
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
                { className: de().SummaryActionButtonsCtn },
                m.createElement(
                  i.Z,
                  {
                    className: (0, f.A)(de().QueueButton, de().Wide),
                    onClick: r,
                  },
                  (0, h.we)("#ActionButtonLabelDone"),
                ),
                !F &&
                  m.createElement(
                    i.Z,
                    {
                      className: (0, f.A)(
                        T && de().Disabled,
                        de().QueueButton,
                        de().Primary,
                        de().Wide,
                      ),
                      onClick: z,
                    },
                    T ? (0, h.we)("#Loading") : (0, h.we)("#Button_Continue"),
                  ),
              ),
          ),
          Boolean(!F) &&
            m.createElement(m.Fragment, null, Boolean(d) && d(a + 1)),
        );
      }
      function Oe(e) {
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
                de().SummaryCtn,
                de().DiscoveryQueueApp,
                r && de().Selected,
              ),
              onOptionsActionDescription: (0, h.we)(
                "#DiscoveryQueue_ViewWishlist",
              ),
              onOptionsButton: () => {
                p.location.href = (0, Ee.NT)(l);
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
              : m.createElement(A.t, {
                  className: de().DiscoveryQueueThrobber,
                  msDelayAppear: 200,
                  size: "large",
                  position: "center",
                }),
          )
        );
      }
      function je() {
        return m.createElement(
          i.Z,
          { className: de().SaleRewardsCtn },
          m.createElement(A.t, { size: "large", position: "center" }),
        );
      }
      function He(e) {
        const { bSkipAppRequestPending: t, summaryCardIdx: r } = e;
        return t
          ? m.createElement(je, null)
          : m.createElement(Ve, { summaryCardIdx: r });
      }
      function Ve(e) {
        const { summaryCardIdx: t } = e,
          r = (0, p.os)(2, C.TS.LANGUAGE, !1, t.toString()),
          [a] = (0, g.t7)(r?.data?.current_def?.appid, {}),
          n = (0, C.Qn)();
        if (!r?.data?.current_def || !a?.GetName().length)
          return m.createElement(je, null);
        const s = r.data.num_items_earned,
          o = r.data.current_def.num_items_per_def,
          l = o - s,
          c = (s / o) * 100;
        return m.createElement(
          i.Z,
          { className: de().SaleRewardsCtn },
          m.createElement(E, { nPercent: c, size: 70, strokeWidth: 12 }),
          m.createElement(
            i.Z,
            { className: de().RewardStatusCtn },
            m.createElement(
              "div",
              { className: de().SaleRewardAppTitle },
              (0, h.we)(
                "#DiscoveryQueue_SaleStatus_Title" + (l ? "" : "_Complete"),
                (0, _e.D)(s),
                a.GetName(),
              ),
            ),
            l > 0 &&
              m.createElement(
                "div",
                { className: de().SaleRewardAppTitle },
                (0, h.we)(
                  "#DiscoveryQueue_SaleStatus_Desc",
                  (0, _e.D)(l),
                  a.GetName(),
                ),
              ),
            !n &&
              m.createElement(
                "a",
                {
                  href: (0, Ee.NT)(
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
      r.r(t), r.d(t, { default: () => y });
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
      function y(e) {
        const { appID: t } = e,
          r = (0, m.G)(),
          [u] = (0, l.QD)("inqueue", "0"),
          [y, w] = (0, a.useState)(!1),
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
            w(!0);
          }, []),
          I = (0, s.WX)(S, v);
        return r && b
          ? y
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
