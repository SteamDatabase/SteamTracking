/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [988],
  {
    65440: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        GrantAwardModal: "_2vlF5KjDw2loCDFMY4RvKe",
        Header: "_2p7RUrL961pRVHeiTG_wiA",
        Title: "_2Rty4c0XdtmcGewRXipBgf",
        Description: "j46gbjgwR947a_ZyFUQav",
        ButtonContainer: "_1SCKZZ5fqovpMl_44ARbEB",
        Button: "zGUr97_6Q5b0k1Pp3e1jQ",
        Selected: "_29Zn-nx-7e1-ciy2sfBkIp",
        Disabled: "_18eTZ7rFRTUPxzZ7mFk4bH",
        LabelCtn: "in9vJBQdfhgAhZ4d2inCG",
        IconCtn: "_3N4SIAN7yrs3QndaJehQRu",
        Label: "V7W5cNHTPUuSS-4yBUDaN",
        Points: "Mh1VB1HCCrGW-2BfgYWXg",
        IconCheckMark: "_2cjo-dR1ohAJuZM1U2gRLE",
        Footer: "_3uhviLjoM6XjmJUZIwgo-c",
        Left: "po3ze72SNwOh1x9LAEYKN",
        BalanceIcon: "R3RrvBz4Rr7TC1huLCb6e",
        BalanceDetails: "_2R8EcI3ydGYPJkKASHBT0K",
        BalanceLabel: "_26lUCOjXyPSIUFyyIijjTT",
        BalanceAmount: "_1A7rmh4_mON2kpeGMsua5O",
        Right: "_9EVpkelJSeusMu6m0MqPM",
        Actions: "_3grEeBuLnzDrqQrdbG1fOO",
        Action: "m5O_IYBcsIQ-sGkle4Bgp",
        FooterLink: "LnM57J5-ZUcH1tTk6ONqn",
        Divider: "_3-_vdCKgx7wK6wgTX4rzg3",
        ConfirmContainer: "_2SlCzX-yTNghN7FJiIQoEa",
        ConfirmAwardImage: "_1jCgmVQPC_V2uHJ94pPV7h",
        ConfirmTextCtn: "_2vpMpZ_a8Bt5ZOn5jbT08T",
        ConfirmText: "_1VsBl871mqrFfWHytV9s8D",
        AwardName: "_18XKP-ecJpchP0bUuTziDD",
        TimePeriod: "_2dsFeJ40GYxbqyJLtADizM",
        Visible: "_99awBDzFZnhej-JK7Uv95",
        LoadingContainer: "_1Ojo0o1Xp7_6g_2_hBfreS",
        SuccessContainer: "mT3ZsVgDQkjVid2Y4DWot",
        SuccessText: "_1cegPTzgau7vg8QHByOx83",
        InitialLoading: "_2tQ62dyi5Ugd7IzoviQkUI",
        ErrorContainer: "_3mAxwkNuZvBlVLYG65hwAk",
        ErrorText: "_2tq6FmsfvzoytU0D8ZjlCu",
        PointsAmount: "-p4kkS_JTNG4ci2km2o8",
        PointsAmountIcon: "_18AsbWzLSoG8RMlW7hlMSi",
        NotEnoughPoints: "_140WjbEl3fAmLpQSoqE67r",
      };
    },
    42705: (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, {
          CheckmarkCircle: () => M,
          LibraryLoyaltyAwardModal: () => O,
          default: () => B,
        });
      var n = a(85556),
        r = a(80751),
        s = a.n(r),
        o = a(27605),
        i = a(47427),
        l = a(82493),
        c = a(91618),
        d = a(47144),
        m = a(22791),
        u = a(7587),
        g = a(54842),
        E = a(79545),
        p = a(37563),
        h = a(88016);
      class _ {
        m_transport;
        m_lPointsAvailable = null;
        m_bPointsBalanceLoadedOrInFlight = !1;
        m_mapReactionConfiguration = new Map();
        m_bReactionConfigurationLoadedOrInFlight = !1;
        m_eTargetType;
        m_targetID;
        m_mapExistingReactions = new Map();
        constructor(e) {
          (0, g.rC)(this), (this.m_transport = e);
        }
        BIsLoggedIn() {
          return p.L7.logged_in;
        }
        async SetTarget(e, t) {
          return (
            (this.m_targetID = e),
            (this.m_eTargetType = t),
            this.LoadExistingReactions()
          );
        }
        async AddReaction(e) {
          if (!this.BIsLoggedIn())
            return { eResult: 21, strMessage: "Not logged on" };
          let t = E.gA.Init(h.HW);
          t.Body().set_target_type(this.m_eTargetType),
            t.Body().set_targetid(this.m_targetID),
            t.Body().set_reactionid(e),
            console.log(" ProtoBuf sending..."),
            console.log(t),
            console.log("Target ID is..." + t.Body().targetid());
          let a = await h.pQ.AddReaction(this.m_transport, t);
          return (
            1 == a.GetEResult() && (this.m_bPointsBalanceLoadedOrInFlight = !1),
            { eResult: a.GetEResult(), strMessage: "" }
          );
        }
        GetUserPointBalance() {
          return this.BIsLoggedIn()
            ? (this.m_bPointsBalanceLoadedOrInFlight ||
                this.LoadUserPointBalance(),
              this.m_lPointsAvailable)
            : null;
        }
        async LoadUserPointBalance() {
          if (!this.BIsLoggedIn()) return Promise.resolve(null);
          this.m_bPointsBalanceLoadedOrInFlight = !0;
          const e = E.gA.Init(h.aO);
          e.SetBodyFields({ steamid: p.L7.steamid });
          let t = await h.pQ.GetSummary(this.m_transport, e);
          1 == t.GetEResult()
            ? (this.m_lPointsAvailable = u.Z.fromString(
                t.Body().summary().points(),
              ))
            : console.error(
                `Error when calling LoyaltyRewardsService.GetSummary: EResult=${t.GetEResult()}`,
              );
        }
        GetAwardConfigurations() {
          return (
            this.m_bReactionConfigurationLoadedOrInFlight ||
              this.LoadAwardsConfiguration(),
            this.m_mapReactionConfiguration
          );
        }
        async LoadAwardsConfiguration() {
          this.m_bReactionConfigurationLoadedOrInFlight = !0;
          const e = E.gA.Init(h.f_);
          let t = await h.pQ.GetReactionConfig(this.m_transport, e);
          if (1 == t.GetEResult()) {
            let e = t.Body().toObject().reactions;
            for (const t of e)
              this.m_mapReactionConfiguration.set(t.reactionid, t);
          } else
            console.error(
              `Error when calling LoyaltyRewardsService.GetReactionConfig: EResult=${t.GetEResult()}`,
            );
        }
        GetExistingReactions() {
          return this.m_mapExistingReactions;
        }
        async LoadExistingReactions() {
          if (!this.BIsLoggedIn()) return 21;
          this.m_mapExistingReactions.clear();
          const e = E.gA.Init(h.Yl);
          e.Body().set_target_type(this.m_eTargetType),
            e.Body().set_targetid(this.m_targetID);
          let t = await h.pQ.GetReactions(this.m_transport, e);
          return (
            1 == t.GetEResult() &&
              t
                .Body()
                .reactionids()
                .map((e) => this.m_mapExistingReactions.set(e, !0)),
            t.GetEResult()
          );
        }
      }
      (0, n.gn)([g.LO.ref], _.prototype, "m_lPointsAvailable", void 0),
        (0, n.gn)(
          [g.LO.deep],
          _.prototype,
          "m_mapReactionConfiguration",
          void 0,
        ),
        (0, n.gn)([g.LO.deep], _.prototype, "m_mapExistingReactions", void 0);
      var w = a(1485),
        y = a(27438),
        A = a(62613),
        R = a(46882),
        L = a(13129),
        N = a(31846),
        S = a(20417),
        C = a(277),
        v = a(65440);
      function G(e) {
        return (0, N.Xx)(`#RewardsReaction_${e}`);
      }
      var b,
        f,
        T,
        I = a(47978);
      !(function (e) {
        (e[(e.LOADING = 0)] = "LOADING"),
          (e[(e.SELECTING = 1)] = "SELECTING"),
          (e[(e.CONFIRM = 2)] = "CONFIRM"),
          (e[(e.SUBMITTING = 3)] = "SUBMITTING"),
          (e[(e.DONE = 4)] = "DONE"),
          (e[(e.ERROR = 5)] = "ERROR"),
          (e[(e.LOADING_ERROR = 6)] = "LOADING_ERROR");
      })(T || (T = {}));
      const M = (e) =>
        i.createElement(
          "svg",
          {
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          i.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM10.9577 17.254L18.8038 10.0384L16.773 7.83022L10.0706 13.9941L7.71092 11.2399L5.43271 13.1918L8.80323 17.1259C9.06802 17.4349 9.44701 17.6231 9.85327 17.6473C10.2595 17.6715 10.6582 17.5295 10.9577 17.254Z",
          }),
        );
      class x extends i.PureComponent {
        constructor(e) {
          super(e), (this.state = { bHovered: !1 });
        }
        handleMouseOver(e) {
          this.setState({ bHovered: !0 });
        }
        handleMouseOut() {
          this.setState({ bHovered: !1 });
        }
        render() {
          const e =
            ((t = this.props.reactionType),
            (a =
              !this.props.bDisableAnimation &&
              (this.state.bHovered || this.props.bForceAnimated)),
            `${p.De.STORE_CDN_URL}public/images/loyalty/reactions/${a ? "animated" : "still"}/${t}.png`);
          var t, a;
          return i.createElement("img", {
            className: this.props.className,
            src: e,
            onMouseEnter: this.handleMouseOver,
            onMouseLeave: this.handleMouseOut,
          });
        }
      }
      (0, n.gn)([S.ak], x.prototype, "handleMouseOver", null),
        (0, n.gn)([S.ak], x.prototype, "handleMouseOut", null);
      let k = class extends i.Component {
        static {
          b = this;
        }
        static s_LoyaltyAwardModalStore;
        static defaultProps = { targetType: 1 };
        constructor(e) {
          super(e),
            (window.fnLoyalty_ShowAwardModal = (t, a, n, r, s) => {
              s || (s = 0),
                this.Init(e.serviceTransport),
                this.setState({
                  bShowModal: !0,
                  fnSuccessFunc: n,
                  targetid: t,
                  ugcType: r,
                  initialSelectedReaction: s,
                  targetType: a,
                });
            }),
            (this.state = { bLoading: !0 });
        }
        async Init(e) {
          if (b.s_LoyaltyAwardModalStore) return;
          if (e) return void (b.s_LoyaltyAwardModalStore = new _(e));
          const t = {
              ...(0, p.kQ)("loyaltystore", "application_config"),
              ...(await (async function () {
                try {
                  const e = await s().get(
                    `${(0, p.Kc)()}pointssummary/ajaxgetasyncconfig`,
                    { withCredentials: !0 },
                  );
                  return 1 === e.data.success
                    ? e.data.data
                    : (console.error(
                        `Failed to load async config: ${e.data.success}`,
                      ),
                      {});
                } catch (e) {
                  return (
                    console.error(
                      `Unexpected failure while loading async config: ${e}`,
                    ),
                    {}
                  );
                }
              })()),
            },
            a = new m.J(p.De.WEBAPI_BASE_URL, t.webapi_token);
          (b.s_LoyaltyAwardModalStore = new _(a.GetServiceTransport())),
            this.setState({ bLoading: !1 });
        }
        render() {
          const {
              bLoading: e,
              bShowModal: t,
              targetType: a,
              fnSuccessFunc: n,
              targetid: r,
              ugcType: s,
              initialSelectedReaction: o,
            } = this.state,
            l = b.s_LoyaltyAwardModalStore;
          if (!t) return null;
          if (e)
            return i.createElement(
              y.On,
              {
                className: v.GrantAwardModal,
                active: !0,
                onDismiss: () => this.setState({ bShowModal: !1 }),
              },
              i.createElement(P, null),
              i.createElement(X, null),
              i.createElement(
                "div",
                { className: v.InitialLoading },
                i.createElement(
                  "div",
                  { className: (0, L.Z)(v.LoadingContainer, v.Visible) },
                  i.createElement(Z, null),
                ),
              ),
            );
          l.GetAwardConfigurations();
          return i.createElement(D, {
            key: r,
            targetid: r,
            active: t,
            targetType: a,
            ugcType: s,
            onDismiss: () => this.setState({ bShowModal: !1 }),
            onSuccess: n,
            store: b.s_LoyaltyAwardModalStore,
            initialSelectedReaction: o,
          });
        }
      };
      k = b = (0, n.gn)([o.Pi], k);
      const B = k;
      let O = class extends i.Component {
        static {
          f = this;
        }
        static s_LoyaltyAwardModalStore = null;
        static Initialize(e) {
          null === this.s_LoyaltyAwardModalStore &&
            (this.s_LoyaltyAwardModalStore = new _(e.GetServiceTransport()));
        }
        constructor(e) {
          super(e);
        }
        render() {
          const {
              targetType: e,
              targetid: t,
              bShowModal: a,
              ugcType: n,
              initialSelectedReaction: r,
              onDismiss: s,
            } = this.props,
            o = f.s_LoyaltyAwardModalStore;
          if (null === o)
            return console.log("Store not initialized yet."), null;
          o.GetAwardConfigurations();
          return i.createElement(D, {
            key: t,
            targetid: t,
            active: a,
            targetType: e,
            ugcType: n,
            onDismiss: s,
            onSuccess: s,
            store: f.s_LoyaltyAwardModalStore,
            initialSelectedReaction: r,
          });
        }
      };
      O = f = (0, n.gn)([o.Pi], O);
      let D = class extends i.Component {
        constructor(e) {
          super(e),
            (this.state = {
              selectedReaction: e.initialSelectedReaction || 0,
              ePhase: T.LOADING,
            });
        }
        async componentDidMount() {
          let e = await this.props.store.SetTarget(
            this.props.targetid,
            this.props.targetType,
          );
          1 == e
            ? this.setState({ ePhase: T.SELECTING })
            : this.setState({ ePhase: T.LOADING_ERROR, eResult: e });
        }
        render() {
          const {
              active: e,
              targetType: t,
              ugcType: a,
              store: n,
              onDismiss: r,
            } = this.props,
            { selectedReaction: s, ePhase: o, celebrate: c } = this.state;
          if (!e) return null;
          const m = n.GetExistingReactions(),
            u = n.GetAwardConfigurations(),
            g = n.GetUserPointBalance(),
            E = (function (e, t, a) {
              let n = [];
              return (
                e.forEach(function (e) {
                  if (e.valid_target_types.includes(t))
                    switch (t) {
                      case 1:
                      case 3:
                      case 4:
                      case 5:
                        n.push(e.reactionid);
                        break;
                      case 2:
                        e.valid_ugc_types.includes(a) && n.push(e.reactionid);
                    }
                }),
                n
              );
            })(u, t, a),
            h = 0 === s ? null : u.get(s),
            _ = h ? h.points_cost : 0,
            A = h ? h.points_transferred : 0;
          let R,
            S = "";
          switch (t) {
            case 1:
              S = (0, N.Xx)("#GrantAwardDescription_Review");
              break;
            case 2:
              S = (0, N.Xx)("#GrantAwardDescription_UGC");
              break;
            case 3:
              S = (0, N.Xx)("#GrantAwardDescription_Profile");
              break;
            case 4:
              S = (0, N.Xx)("#GrantAwardDescription_ForumTopic");
              break;
            case 5:
              S = (0, N.Xx)("#GrantAwardDescription_Comment");
          }
          switch (o) {
            case T.SELECTING:
              {
                const e = 0 === s || m.get(s),
                  t = !g || g.greaterThanOrEqual(_),
                  a = i.createElement(
                    w.KM,
                    {
                      onClick: () => this.setState({ ePhase: T.CONFIRM }),
                      disabled: e,
                      focusable: !e,
                      title: (0, N.Xx)(
                        e
                          ? "#GrantAward_PromptTooltip"
                          : "#GrantAward_SubmitTooltip",
                      ),
                    },
                    (0, N.Xx)(
                      e ? "#GrantAward_SelectAward" : "#GrantAward_Next",
                    ),
                  );
                R = i.createElement(
                  i.Fragment,
                  null,
                  i.createElement(P, { description: S }),
                  i.createElement(X, null),
                  0 === E.length &&
                    i.createElement(
                      "div",
                      { className: v.InitialLoading },
                      i.createElement(
                        "div",
                        { className: (0, L.Z)(v.LoadingContainer, v.Visible) },
                        i.createElement(Z, null),
                      ),
                    ),
                  i.createElement(
                    d.P8,
                    {
                      className: v.ButtonContainer,
                      scrollDirection: "y",
                      "flow-children": "grid",
                    },
                    E.map((e, t) =>
                      i.createElement(U, {
                        autoFocus: 0 == t,
                        key: e,
                        reaction: e,
                        selected: e === s && !m.get(e),
                        cost: u.get(e).points_cost,
                        alreadyAwarded: m.get(e),
                        onClick: () => {
                          m.get(e) ||
                            this.setState({
                              selectedReaction: e === s ? 0 : e,
                            });
                        },
                      }),
                    ),
                  ),
                  i.createElement(X, null),
                  i.createElement(
                    F,
                    { store: n },
                    e || t
                      ? a
                      : [
                          i.createElement(
                            "div",
                            { key: "msg", className: v.NotEnoughPoints },
                            (0, N.Xx)(
                              "#GrantAward_CantAfford",
                              g.negate().add(_).toNumber().toLocaleString(),
                            ),
                          ),
                          i.createElement(
                            l.IS,
                            {
                              key: "button",
                              href: `${p.De.STORE_BASE_URL}points/howitworks`,
                            },
                            i.createElement(
                              w.zx,
                              { key: "button" },
                              (0, N.Xx)("#GrantAward_HowToGetPoints"),
                            ),
                          ),
                        ],
                  ),
                );
              }
              break;
            case T.CONFIRM:
            case T.SUBMITTING:
            case T.DONE:
              R = i.createElement(
                i.Fragment,
                null,
                i.createElement(P, { description: S }),
                i.createElement(X, null),
                i.createElement(
                  "div",
                  { style: { position: "relative" } },
                  i.createElement(
                    "div",
                    {
                      className: (0, L.Z)(
                        v.ConfirmContainer,
                        o === T.CONFIRM && v.Visible,
                      ),
                    },
                    i.createElement(x, {
                      className: v.ConfirmAwardImage,
                      reactionType: s,
                    }),
                    i.createElement(
                      "div",
                      { className: v.ConfirmTextCtn },
                      i.createElement(
                        "div",
                        { className: v.ConfirmText },
                        (0, N.kQ)(
                          "#GrantAward_Confirm",
                          i.createElement(Q, null, _.toLocaleString()),
                          i.createElement(
                            "span",
                            { className: v.AwardName },
                            G(s),
                          ),
                        ),
                      ),
                      i.createElement(
                        "div",
                        { className: v.ConfirmText },
                        (0, N.kQ)(
                          "#GrantAward_Confirm_Details",
                          i.createElement(Q, null, A.toLocaleString()),
                          i.createElement(
                            "span",
                            { className: v.TimePeriod },
                            (0, N.Xx)("#GrantAward_Confirm_DetailsTimePeriod"),
                          ),
                        ),
                      ),
                    ),
                  ),
                  i.createElement(
                    "div",
                    {
                      className: (0, L.Z)(
                        v.LoadingContainer,
                        o === T.SUBMITTING && v.Visible,
                      ),
                    },
                    i.createElement(Z, null),
                  ),
                  i.createElement(
                    "div",
                    {
                      className: (0, L.Z)(
                        v.SuccessContainer,
                        o === T.DONE && v.Visible,
                      ),
                    },
                    i.createElement(x, {
                      className: v.ConfirmAwardImage,
                      reactionType: s,
                    }),
                    i.createElement(
                      "div",
                      { className: v.SuccessText },
                      (0, N.Xx)("#GrantAward_Success"),
                    ),
                  ),
                ),
                i.createElement(X, null),
                i.createElement(
                  F,
                  { store: n },
                  i.createElement(
                    w.zx,
                    {
                      onClick: () => this.setState({ ePhase: T.SELECTING }),
                      disabled: o !== T.CONFIRM,
                    },
                    (0, N.Xx)("#GrantAward_Back"),
                  ),
                  i.createElement(
                    w.KM,
                    {
                      onClick: this.GrantAward,
                      title: (0, N.Xx)("#GrantAward_SubmitTooltip"),
                      disabled: o !== T.CONFIRM,
                    },
                    (0, N.Xx)("#GrantAwardNowButton"),
                  ),
                ),
              );
              break;
            case T.ERROR:
              {
                let e = "";
                switch (this.state.eResult) {
                  case 10:
                    e = (0, N.Xx)("#GrantAwardError_Busy");
                    break;
                  case 32:
                    e = (0, N.Xx)("#GrantAwardError_PersistFailed");
                    break;
                  case 8:
                    e = (0, N.Xx)("#GrantAwardError_InvalidParam");
                    break;
                  case 42:
                    e = (0, N.Xx)("#GrantAwardError_NoMatch");
                    break;
                  case 107:
                    e = (0, N.Xx)("#GrantAwardError_InsufficientFunds");
                    break;
                  case 15:
                    e = (0, N.Xx)("#GrantAwardError_AccessDenied");
                    break;
                  case 21:
                    e = (0, N.Xx)("#GrantAwardError_NotLoggedOn");
                    break;
                  case 29:
                    e = (0, N.Xx)("#GrantAwardError_DuplicateRequest");
                    break;
                  default:
                    e = (0, N.Xx)("#GrantAwardError_Fail");
                }
                R = i.createElement(
                  i.Fragment,
                  null,
                  i.createElement(P, { description: S }),
                  i.createElement(X, null),
                  i.createElement(
                    "div",
                    { style: { position: "relative" } },
                    i.createElement(
                      "div",
                      { className: v.ErrorContainer },
                      i.createElement("div", { className: v.ErrorText }, e),
                    ),
                  ),
                  i.createElement(X, null),
                  i.createElement(
                    F,
                    { store: n },
                    i.createElement(
                      w.zx,
                      { onClick: () => this.setState({ ePhase: T.SELECTING }) },
                      (0, N.Xx)("#GrantAward_Back"),
                    ),
                  ),
                );
              }
              break;
            case T.LOADING_ERROR: {
              let e = "";
              switch (this.state.eResult) {
                case 10:
                  e = (0, N.Xx)("#GrantAwardError_Busy");
                  break;
                case 21:
                  e = (0, N.Xx)("#GrantAwardError_NotLoggedOn");
                  break;
                default:
                  e = (0, N.Xx)("#GrantAwardError_LoadExistingReactions");
              }
              R = i.createElement(
                i.Fragment,
                null,
                i.createElement(P, { description: S }),
                i.createElement(X, null),
                i.createElement(
                  "div",
                  { style: { position: "relative" } },
                  i.createElement(
                    "div",
                    { className: v.ErrorContainer },
                    i.createElement("div", { className: v.ErrorText }, e),
                  ),
                ),
                i.createElement(X, null),
              );
            }
          }
          return i.createElement(
            y.On,
            { className: v.GrantAwardModal, active: e, onDismiss: r },
            i.createElement(
              y.Pv,
              { navID: "GrantAward", closeModal: r },
              c && i.createElement(C.DI, { eType: C.sS.Default }),
              R,
            ),
          );
        }
        GrantAward() {
          const { targetid: e, store: t, onSuccess: a } = this.props,
            { selectedReaction: n } = this.state;
          null !== n &&
            0 != n &&
            (this.setState({ ePhase: T.SUBMITTING }),
            t.AddReaction(n).then(({ eResult: t, strMessage: r }) => {
              1 == t
                ? this.setState({ ePhase: T.DONE, celebrate: !0 }, () =>
                    setTimeout(() => {
                      a && a(e, n);
                    }, 2e3),
                  )
                : this.setState({ ePhase: T.ERROR, eResult: t });
            }));
        }
      };
      (0, n.gn)([S.ak], D.prototype, "GrantAward", null),
        (D = (0, n.gn)([o.Pi], D));
      const P = ({ description: e }) =>
          i.createElement(
            "div",
            { className: v.Header },
            i.createElement(
              "div",
              { className: v.Title },
              (0, N.Xx)("#GrantAwardTitle"),
            ),
            i.createElement("div", { className: v.Description }, e),
          ),
        F = (0, o.Pi)(({ store: e, children: t }) => {
          const a = e.GetUserPointBalance(),
            n = a && a.toNumber().toLocaleString();
          return i.createElement(
            "div",
            { className: v.Footer },
            i.createElement(
              "div",
              { className: v.Left },
              i.createElement(A.doA, { className: v.BalanceIcon }),
              i.createElement(
                "div",
                { className: v.BalanceDetails },
                i.createElement(
                  "div",
                  { className: v.BalanceLabel },
                  (0, N.Xx)("#YourBalance"),
                ),
                i.createElement("div", { className: v.BalanceAmount }, n),
              ),
            ),
            i.createElement(
              "div",
              { className: v.Right },
              i.createElement(
                c.s,
                { className: v.Actions, "flow-children": "row" },
                i.Children.map(t, (e) =>
                  i.createElement("div", { className: v.Action }, e),
                ),
              ),
              i.createElement(
                "a",
                {
                  className: v.FooterLink,
                  href: `${p.De.STORE_BASE_URL}points/howitworks`,
                },
                (0, N.Xx)("#GrantAward_PointsLink"),
              ),
            ),
          );
        }),
        X = () => i.createElement("div", { className: v.Divider });
      class U extends i.PureComponent {
        constructor(e) {
          super(e), (this.state = { bHovered: !1 });
        }
        handleMouseOver(e) {
          this.setState({ bHovered: !0 });
        }
        handleMouseOut() {
          this.setState({ bHovered: !1 });
        }
        render() {
          const {
            reaction: e,
            selected: t,
            alreadyAwarded: a,
            cost: n,
            autoFocus: r,
            ...s
          } = this.props;
          return i.createElement(
            I.k,
            {
              type: "button",
              onMouseEnter: this.handleMouseOver,
              onMouseLeave: this.handleMouseOut,
              className: (0, L.Z)(v.Button, t && v.Selected, a && v.Disabled),
              autoFocus: r,
              ...s,
            },
            i.createElement(
              "div",
              { className: v.IconCtn },
              i.createElement(x, {
                reactionType: e,
                bForceAnimated: this.state.bHovered,
                bDisableAnimation: a,
              }),
            ),
            i.createElement(
              "div",
              { className: v.LabelCtn },
              i.createElement("div", { className: v.Label }, G(e)),
              i.createElement(Q, { className: v.Points }, n.toLocaleString()),
            ),
            a && i.createElement(M, { className: v.IconCheckMark }),
          );
        }
      }
      (0, n.gn)([S.ak], U.prototype, "handleMouseOver", null),
        (0, n.gn)([S.ak], U.prototype, "handleMouseOut", null);
      const Z = () =>
          i.createElement(R.V, { size: "large", className: v.Loading }),
        Q = (e) => {
          const { children: t, className: a, ...n } = e;
          return i.createElement(
            "span",
            { ...n, className: (0, L.Z)(a, v.PointsAmount) },
            i.createElement(A.doA, { className: v.PointsAmountIcon }),
            t,
          );
        };
    },
  },
]);
