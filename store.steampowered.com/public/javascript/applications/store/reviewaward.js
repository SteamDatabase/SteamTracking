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
          LibraryLoyaltyAwardModal: () => B,
          default: () => k,
        });
      var n = a(85556),
        r = a(80751),
        s = a.n(r),
        i = a(27605),
        o = a(47427),
        l = a(82493),
        c = a(91618),
        d = a(47144),
        m = a(22791),
        u = a(7587),
        g = a(54842),
        h = a(79545),
        E = a(37563),
        p = a(88016);
      class _ {
        constructor(e) {
          (this.m_lPointsAvailable = null),
            (this.m_bPointsBalanceLoadedOrInFlight = !1),
            (this.m_mapReactionConfiguration = new Map()),
            (this.m_bReactionConfigurationLoadedOrInFlight = !1),
            (this.m_mapExistingReactions = new Map()),
            (0, g.rC)(this),
            (this.m_transport = e);
        }
        BIsLoggedIn() {
          return E.L7.logged_in;
        }
        SetTarget(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return (
              (this.m_targetID = e),
              (this.m_eTargetType = t),
              this.LoadExistingReactions()
            );
          });
        }
        AddReaction(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (!this.BIsLoggedIn())
              return { eResult: 21, strMessage: "Not logged on" };
            let t = h.gA.Init(p.HW);
            t.Body().set_target_type(this.m_eTargetType),
              t.Body().set_targetid(this.m_targetID),
              t.Body().set_reactionid(e),
              console.log(" ProtoBuf sending..."),
              console.log(t),
              console.log("Target ID is..." + t.Body().targetid());
            let a = yield p.pQ.AddReaction(this.m_transport, t);
            return (
              1 == a.GetEResult() &&
                (this.m_bPointsBalanceLoadedOrInFlight = !1),
              { eResult: a.GetEResult(), strMessage: "" }
            );
          });
        }
        GetUserPointBalance() {
          return this.BIsLoggedIn()
            ? (this.m_bPointsBalanceLoadedOrInFlight ||
                this.LoadUserPointBalance(),
              this.m_lPointsAvailable)
            : null;
        }
        LoadUserPointBalance() {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (!this.BIsLoggedIn()) return Promise.resolve(null);
            this.m_bPointsBalanceLoadedOrInFlight = !0;
            const e = h.gA.Init(p.aO);
            e.SetBodyFields({ steamid: E.L7.steamid });
            let t = yield p.pQ.GetSummary(this.m_transport, e);
            1 == t.GetEResult()
              ? (this.m_lPointsAvailable = u.Z.fromString(
                  t.Body().summary().points(),
                ))
              : console.error(
                  `Error when calling LoyaltyRewardsService.GetSummary: EResult=${t.GetEResult()}`,
                );
          });
        }
        GetAwardConfigurations() {
          return (
            this.m_bReactionConfigurationLoadedOrInFlight ||
              this.LoadAwardsConfiguration(),
            this.m_mapReactionConfiguration
          );
        }
        LoadAwardsConfiguration() {
          return (0, n.mG)(this, void 0, void 0, function* () {
            this.m_bReactionConfigurationLoadedOrInFlight = !0;
            const e = h.gA.Init(p.f_);
            let t = yield p.pQ.GetReactionConfig(this.m_transport, e);
            if (1 == t.GetEResult()) {
              let e = t.Body().toObject().reactions;
              for (const t of e)
                this.m_mapReactionConfiguration.set(t.reactionid, t);
            } else
              console.error(
                `Error when calling LoyaltyRewardsService.GetReactionConfig: EResult=${t.GetEResult()}`,
              );
          });
        }
        GetExistingReactions() {
          return this.m_mapExistingReactions;
        }
        LoadExistingReactions() {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (!this.BIsLoggedIn()) return 21;
            this.m_mapExistingReactions.clear();
            const e = h.gA.Init(p.Yl);
            e.Body().set_target_type(this.m_eTargetType),
              e.Body().set_targetid(this.m_targetID);
            let t = yield p.pQ.GetReactions(this.m_transport, e);
            return (
              1 == t.GetEResult() &&
                t
                  .Body()
                  .reactionids()
                  .map((e) => this.m_mapExistingReactions.set(e, !0)),
              t.GetEResult()
            );
          });
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
      var y = a(1485),
        w = a(27438),
        A = a(62613),
        v = a(46882),
        R = a(13129),
        G = a(31846),
        N = a(20417),
        L = a(277),
        C = a(65440);
      function S(e) {
        return (0, G.Xx)(`#RewardsReaction_${e}`);
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
        o.createElement(
          "svg",
          Object.assign(
            {
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e,
          ),
          o.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM10.9577 17.254L18.8038 10.0384L16.773 7.83022L10.0706 13.9941L7.71092 11.2399L5.43271 13.1918L8.80323 17.1259C9.06802 17.4349 9.44701 17.6231 9.85327 17.6473C10.2595 17.6715 10.6582 17.5295 10.9577 17.254Z",
          }),
        );
      class O extends o.PureComponent {
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
            `${E.De.STORE_CDN_URL}public/images/loyalty/reactions/${a ? "animated" : "still"}/${t}.png`);
          var t, a;
          return o.createElement("img", {
            className: this.props.className,
            src: e,
            onMouseEnter: this.handleMouseOver,
            onMouseLeave: this.handleMouseOut,
          });
        }
      }
      (0, n.gn)([N.ak], O.prototype, "handleMouseOver", null),
        (0, n.gn)([N.ak], O.prototype, "handleMouseOut", null);
      let x = (b = class extends o.Component {
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
        Init(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (b.s_LoyaltyAwardModalStore) return;
            if (e) return void (b.s_LoyaltyAwardModalStore = new _(e));
            const t = (0, E.kQ)("loyaltystore", "application_config"),
              a = yield (function () {
                return (0, n.mG)(this, void 0, void 0, function* () {
                  try {
                    const e = yield s().get(
                      `${(0, E.Kc)()}pointssummary/ajaxgetasyncconfig`,
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
                });
              })(),
              r = Object.assign(Object.assign({}, t), a),
              i = new m.J(E.De.WEBAPI_BASE_URL, r.webapi_token);
            (b.s_LoyaltyAwardModalStore = new _(i.GetServiceTransport())),
              this.setState({ bLoading: !1 });
          });
        }
        render() {
          const {
              bLoading: e,
              bShowModal: t,
              targetType: a,
              fnSuccessFunc: n,
              targetid: r,
              ugcType: s,
              initialSelectedReaction: i,
            } = this.state,
            l = b.s_LoyaltyAwardModalStore;
          if (!t) return null;
          if (e)
            return o.createElement(
              w.On,
              {
                className: C.GrantAwardModal,
                active: !0,
                onDismiss: () => this.setState({ bShowModal: !1 }),
              },
              o.createElement(P, null),
              o.createElement(X, null),
              o.createElement(
                "div",
                { className: C.InitialLoading },
                o.createElement(
                  "div",
                  { className: (0, R.Z)(C.LoadingContainer, C.Visible) },
                  o.createElement(Z, null),
                ),
              ),
            );
          l.GetAwardConfigurations();
          return o.createElement(D, {
            key: r,
            targetid: r,
            active: t,
            targetType: a,
            ugcType: s,
            onDismiss: () => this.setState({ bShowModal: !1 }),
            onSuccess: n,
            store: b.s_LoyaltyAwardModalStore,
            initialSelectedReaction: i,
          });
        }
      });
      (x.defaultProps = { targetType: 1 }), (x = b = (0, n.gn)([i.Pi], x));
      const k = x;
      let B = (f = class extends o.Component {
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
            i = f.s_LoyaltyAwardModalStore;
          if (null === i)
            return console.log("Store not initialized yet."), null;
          i.GetAwardConfigurations();
          return o.createElement(D, {
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
      });
      (B.s_LoyaltyAwardModalStore = null), (B = f = (0, n.gn)([i.Pi], B));
      let D = class extends o.Component {
        constructor(e) {
          super(e),
            (this.state = {
              selectedReaction: e.initialSelectedReaction || 0,
              ePhase: T.LOADING,
            });
        }
        componentDidMount() {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let e = yield this.props.store.SetTarget(
              this.props.targetid,
              this.props.targetType,
            );
            1 == e
              ? this.setState({ ePhase: T.SELECTING })
              : this.setState({ ePhase: T.LOADING_ERROR, eResult: e });
          });
        }
        render() {
          const {
              active: e,
              targetType: t,
              ugcType: a,
              store: n,
              onDismiss: r,
            } = this.props,
            { selectedReaction: s, ePhase: i, celebrate: c } = this.state;
          if (!e) return null;
          const m = n.GetExistingReactions(),
            u = n.GetAwardConfigurations(),
            g = n.GetUserPointBalance(),
            h = (function (e, t, a) {
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
            p = 0 === s ? null : u.get(s),
            _ = p ? p.points_cost : 0,
            A = p ? p.points_transferred : 0;
          let v,
            N = "";
          switch (t) {
            case 1:
              N = (0, G.Xx)("#GrantAwardDescription_Review");
              break;
            case 2:
              N = (0, G.Xx)("#GrantAwardDescription_UGC");
              break;
            case 3:
              N = (0, G.Xx)("#GrantAwardDescription_Profile");
              break;
            case 4:
              N = (0, G.Xx)("#GrantAwardDescription_ForumTopic");
              break;
            case 5:
              N = (0, G.Xx)("#GrantAwardDescription_Comment");
          }
          switch (i) {
            case T.SELECTING:
              {
                const e = 0 === s || m.get(s),
                  t = !g || g.greaterThanOrEqual(_),
                  a = o.createElement(
                    y.KM,
                    {
                      onClick: () => this.setState({ ePhase: T.CONFIRM }),
                      disabled: e,
                      focusable: !e,
                      title: (0, G.Xx)(
                        e
                          ? "#GrantAward_PromptTooltip"
                          : "#GrantAward_SubmitTooltip",
                      ),
                    },
                    (0, G.Xx)(
                      e ? "#GrantAward_SelectAward" : "#GrantAward_Next",
                    ),
                  );
                v = o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(P, { description: N }),
                  o.createElement(X, null),
                  0 === h.length &&
                    o.createElement(
                      "div",
                      { className: C.InitialLoading },
                      o.createElement(
                        "div",
                        { className: (0, R.Z)(C.LoadingContainer, C.Visible) },
                        o.createElement(Z, null),
                      ),
                    ),
                  o.createElement(
                    d.P8,
                    {
                      className: C.ButtonContainer,
                      scrollDirection: "y",
                      "flow-children": "grid",
                    },
                    h.map((e, t) =>
                      o.createElement(U, {
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
                  o.createElement(X, null),
                  o.createElement(
                    F,
                    { store: n },
                    e || t
                      ? a
                      : [
                          o.createElement(
                            "div",
                            { key: "msg", className: C.NotEnoughPoints },
                            (0, G.Xx)(
                              "#GrantAward_CantAfford",
                              g.negate().add(_).toNumber().toLocaleString(),
                            ),
                          ),
                          o.createElement(
                            l.IS,
                            {
                              key: "button",
                              href: `${E.De.STORE_BASE_URL}points/howitworks`,
                            },
                            o.createElement(
                              y.zx,
                              { key: "button" },
                              (0, G.Xx)("#GrantAward_HowToGetPoints"),
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
              v = o.createElement(
                o.Fragment,
                null,
                o.createElement(P, { description: N }),
                o.createElement(X, null),
                o.createElement(
                  "div",
                  { style: { position: "relative" } },
                  o.createElement(
                    "div",
                    {
                      className: (0, R.Z)(
                        C.ConfirmContainer,
                        i === T.CONFIRM && C.Visible,
                      ),
                    },
                    o.createElement(O, {
                      className: C.ConfirmAwardImage,
                      reactionType: s,
                    }),
                    o.createElement(
                      "div",
                      { className: C.ConfirmTextCtn },
                      o.createElement(
                        "div",
                        { className: C.ConfirmText },
                        (0, G.kQ)(
                          "#GrantAward_Confirm",
                          o.createElement(j, null, _.toLocaleString()),
                          o.createElement(
                            "span",
                            { className: C.AwardName },
                            S(s),
                          ),
                        ),
                      ),
                      o.createElement(
                        "div",
                        { className: C.ConfirmText },
                        (0, G.kQ)(
                          "#GrantAward_Confirm_Details",
                          o.createElement(j, null, A.toLocaleString()),
                          o.createElement(
                            "span",
                            { className: C.TimePeriod },
                            (0, G.Xx)("#GrantAward_Confirm_DetailsTimePeriod"),
                          ),
                        ),
                      ),
                    ),
                  ),
                  o.createElement(
                    "div",
                    {
                      className: (0, R.Z)(
                        C.LoadingContainer,
                        i === T.SUBMITTING && C.Visible,
                      ),
                    },
                    o.createElement(Z, null),
                  ),
                  o.createElement(
                    "div",
                    {
                      className: (0, R.Z)(
                        C.SuccessContainer,
                        i === T.DONE && C.Visible,
                      ),
                    },
                    o.createElement(O, {
                      className: C.ConfirmAwardImage,
                      reactionType: s,
                    }),
                    o.createElement(
                      "div",
                      { className: C.SuccessText },
                      (0, G.Xx)("#GrantAward_Success"),
                    ),
                  ),
                ),
                o.createElement(X, null),
                o.createElement(
                  F,
                  { store: n },
                  o.createElement(
                    y.zx,
                    {
                      onClick: () => this.setState({ ePhase: T.SELECTING }),
                      disabled: i !== T.CONFIRM,
                    },
                    (0, G.Xx)("#GrantAward_Back"),
                  ),
                  o.createElement(
                    y.KM,
                    {
                      onClick: this.GrantAward,
                      title: (0, G.Xx)("#GrantAward_SubmitTooltip"),
                      disabled: i !== T.CONFIRM,
                    },
                    (0, G.Xx)("#GrantAwardNowButton"),
                  ),
                ),
              );
              break;
            case T.ERROR:
              {
                let e = "";
                switch (this.state.eResult) {
                  case 10:
                    e = (0, G.Xx)("#GrantAwardError_Busy");
                    break;
                  case 32:
                    e = (0, G.Xx)("#GrantAwardError_PersistFailed");
                    break;
                  case 8:
                    e = (0, G.Xx)("#GrantAwardError_InvalidParam");
                    break;
                  case 42:
                    e = (0, G.Xx)("#GrantAwardError_NoMatch");
                    break;
                  case 107:
                    e = (0, G.Xx)("#GrantAwardError_InsufficientFunds");
                    break;
                  case 15:
                    e = (0, G.Xx)("#GrantAwardError_AccessDenied");
                    break;
                  case 21:
                    e = (0, G.Xx)("#GrantAwardError_NotLoggedOn");
                    break;
                  case 29:
                    e = (0, G.Xx)("#GrantAwardError_DuplicateRequest");
                    break;
                  default:
                    e = (0, G.Xx)("#GrantAwardError_Fail");
                }
                v = o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(P, { description: N }),
                  o.createElement(X, null),
                  o.createElement(
                    "div",
                    { style: { position: "relative" } },
                    o.createElement(
                      "div",
                      { className: C.ErrorContainer },
                      o.createElement("div", { className: C.ErrorText }, e),
                    ),
                  ),
                  o.createElement(X, null),
                  o.createElement(
                    F,
                    { store: n },
                    o.createElement(
                      y.zx,
                      { onClick: () => this.setState({ ePhase: T.SELECTING }) },
                      (0, G.Xx)("#GrantAward_Back"),
                    ),
                  ),
                );
              }
              break;
            case T.LOADING_ERROR: {
              let e = "";
              switch (this.state.eResult) {
                case 10:
                  e = (0, G.Xx)("#GrantAwardError_Busy");
                  break;
                case 21:
                  e = (0, G.Xx)("#GrantAwardError_NotLoggedOn");
                  break;
                default:
                  e = (0, G.Xx)("#GrantAwardError_LoadExistingReactions");
              }
              v = o.createElement(
                o.Fragment,
                null,
                o.createElement(P, { description: N }),
                o.createElement(X, null),
                o.createElement(
                  "div",
                  { style: { position: "relative" } },
                  o.createElement(
                    "div",
                    { className: C.ErrorContainer },
                    o.createElement("div", { className: C.ErrorText }, e),
                  ),
                ),
                o.createElement(X, null),
              );
            }
          }
          return o.createElement(
            w.On,
            { className: C.GrantAwardModal, active: e, onDismiss: r },
            o.createElement(
              w.Pv,
              { navID: "GrantAward", closeModal: r },
              c && o.createElement(L.DI, { eType: L.sS.Default }),
              v,
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
      (0, n.gn)([N.ak], D.prototype, "GrantAward", null),
        (D = (0, n.gn)([i.Pi], D));
      const P = ({ description: e }) =>
          o.createElement(
            "div",
            { className: C.Header },
            o.createElement(
              "div",
              { className: C.Title },
              (0, G.Xx)("#GrantAwardTitle"),
            ),
            o.createElement("div", { className: C.Description }, e),
          ),
        F = (0, i.Pi)(({ store: e, children: t }) => {
          const a = e.GetUserPointBalance(),
            n = a && a.toNumber().toLocaleString();
          return o.createElement(
            "div",
            { className: C.Footer },
            o.createElement(
              "div",
              { className: C.Left },
              o.createElement(A.doA, { className: C.BalanceIcon }),
              o.createElement(
                "div",
                { className: C.BalanceDetails },
                o.createElement(
                  "div",
                  { className: C.BalanceLabel },
                  (0, G.Xx)("#YourBalance"),
                ),
                o.createElement("div", { className: C.BalanceAmount }, n),
              ),
            ),
            o.createElement(
              "div",
              { className: C.Right },
              o.createElement(
                c.s,
                { className: C.Actions, "flow-children": "row" },
                o.Children.map(t, (e) =>
                  o.createElement("div", { className: C.Action }, e),
                ),
              ),
              o.createElement(
                "a",
                {
                  className: C.FooterLink,
                  href: `${E.De.STORE_BASE_URL}points/howitworks`,
                },
                (0, G.Xx)("#GrantAward_PointsLink"),
              ),
            ),
          );
        }),
        X = () => o.createElement("div", { className: C.Divider });
      class U extends o.PureComponent {
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
          const e = this.props,
            {
              reaction: t,
              selected: a,
              alreadyAwarded: r,
              cost: s,
              autoFocus: i,
            } = e,
            l = (0, n._T)(e, [
              "reaction",
              "selected",
              "alreadyAwarded",
              "cost",
              "autoFocus",
            ]);
          return o.createElement(
            I.k,
            Object.assign(
              {
                type: "button",
                onMouseEnter: this.handleMouseOver,
                onMouseLeave: this.handleMouseOut,
                className: (0, R.Z)(C.Button, a && C.Selected, r && C.Disabled),
                autoFocus: i,
              },
              l,
            ),
            o.createElement(
              "div",
              { className: C.IconCtn },
              o.createElement(O, {
                reactionType: t,
                bForceAnimated: this.state.bHovered,
                bDisableAnimation: r,
              }),
            ),
            o.createElement(
              "div",
              { className: C.LabelCtn },
              o.createElement("div", { className: C.Label }, S(t)),
              o.createElement(j, { className: C.Points }, s.toLocaleString()),
            ),
            r && o.createElement(M, { className: C.IconCheckMark }),
          );
        }
      }
      (0, n.gn)([N.ak], U.prototype, "handleMouseOver", null),
        (0, n.gn)([N.ak], U.prototype, "handleMouseOut", null);
      const Z = () =>
          o.createElement(v.V, { size: "large", className: C.Loading }),
        j = (e) => {
          const { children: t, className: a } = e,
            r = (0, n._T)(e, ["children", "className"]);
          return o.createElement(
            "span",
            Object.assign({}, r, { className: (0, R.Z)(a, C.PointsAmount) }),
            o.createElement(A.doA, { className: C.PointsAmountIcon }),
            t,
          );
        };
    },
  },
]);
