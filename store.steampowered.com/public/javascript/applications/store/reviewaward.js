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
          CheckmarkCircle: () => O,
          LibraryLoyaltyAwardModal: () => D,
          default: () => B,
        });
      var n = a(85556),
        r = a(80751),
        s = a.n(r),
        i = a(27605),
        o = a(47427),
        l = a(82493),
        c = a(91618),
        d = a(47144),
        m = a(77581),
        u = a(94947),
        g = a.n(u),
        h = a(54842),
        E = a(79545),
        p = a(37563),
        _ = a(88016);
      class y {
        constructor(e) {
          (this.m_lPointsAvailable = null),
            (this.m_bPointsBalanceLoadedOrInFlight = !1),
            (this.m_mapReactionConfiguration = new Map()),
            (this.m_bReactionConfigurationLoadedOrInFlight = !1),
            (this.m_mapExistingReactions = new Map()),
            (0, h.rC)(this),
            (this.m_transport = e);
        }
        BIsLoggedIn() {
          return p.L7.logged_in;
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
            let t = E.gA.Init(_.HW);
            t.Body().set_target_type(this.m_eTargetType),
              t.Body().set_targetid(this.m_targetID),
              t.Body().set_reactionid(e),
              console.log(" ProtoBuf sending..."),
              console.log(t),
              console.log("Target ID is..." + t.Body().targetid());
            let a = yield _.pQ.AddReaction(this.m_transport, t);
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
            const e = E.gA.Init(_.aO);
            e.SetBodyFields({ steamid: p.L7.steamid });
            let t = yield _.pQ.GetSummary(this.m_transport, e);
            1 == t.GetEResult()
              ? (this.m_lPointsAvailable = g().fromString(
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
            const e = E.gA.Init(_.f_);
            let t = yield _.pQ.GetReactionConfig(this.m_transport, e);
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
            const e = E.gA.Init(_.Yl);
            e.Body().set_target_type(this.m_eTargetType),
              e.Body().set_targetid(this.m_targetID);
            let t = yield _.pQ.GetReactions(this.m_transport, e);
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
      (0, n.gn)([h.LO.ref], y.prototype, "m_lPointsAvailable", void 0),
        (0, n.gn)(
          [h.LO.deep],
          y.prototype,
          "m_mapReactionConfiguration",
          void 0,
        ),
        (0, n.gn)([h.LO.deep], y.prototype, "m_mapExistingReactions", void 0);
      var w = a(1485),
        A = a(27438),
        v = a(62613),
        R = a(46882),
        G = a(13129),
        N = a(31846),
        L = a(20417),
        C = a(277),
        S = a(65440);
      function b(e) {
        return (0, N.Xx)(`#RewardsReaction_${e}`);
      }
      var f,
        T,
        I,
        M = a(47978);
      !(function (e) {
        (e[(e.LOADING = 0)] = "LOADING"),
          (e[(e.SELECTING = 1)] = "SELECTING"),
          (e[(e.CONFIRM = 2)] = "CONFIRM"),
          (e[(e.SUBMITTING = 3)] = "SUBMITTING"),
          (e[(e.DONE = 4)] = "DONE"),
          (e[(e.ERROR = 5)] = "ERROR"),
          (e[(e.LOADING_ERROR = 6)] = "LOADING_ERROR");
      })(I || (I = {}));
      const O = (e) =>
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
      class x extends o.PureComponent {
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
          return o.createElement("img", {
            className: this.props.className,
            src: e,
            onMouseEnter: this.handleMouseOver,
            onMouseLeave: this.handleMouseOut,
          });
        }
      }
      (0, n.gn)([L.ak], x.prototype, "handleMouseOver", null),
        (0, n.gn)([L.ak], x.prototype, "handleMouseOut", null);
      let k = (f = class extends o.Component {
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
            if (f.s_LoyaltyAwardModalStore) return;
            if (e) return void (f.s_LoyaltyAwardModalStore = new y(e));
            const t = (0, p.kQ)("loyaltystore", "application_config"),
              a = yield (function () {
                return (0, n.mG)(this, void 0, void 0, function* () {
                  try {
                    const e = yield s().get(
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
                });
              })(),
              r = Object.assign(Object.assign({}, t), a),
              i = new m.J(p.De.WEBAPI_BASE_URL, r.webapi_token);
            (f.s_LoyaltyAwardModalStore = new y(i.GetServiceTransport())),
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
            l = f.s_LoyaltyAwardModalStore;
          if (!t) return null;
          if (e)
            return o.createElement(
              A.On,
              {
                className: S.GrantAwardModal,
                active: !0,
                onDismiss: () => this.setState({ bShowModal: !1 }),
              },
              o.createElement(F, null),
              o.createElement(U, null),
              o.createElement(
                "div",
                { className: S.InitialLoading },
                o.createElement(
                  "div",
                  { className: (0, G.Z)(S.LoadingContainer, S.Visible) },
                  o.createElement(j, null),
                ),
              ),
            );
          l.GetAwardConfigurations();
          return o.createElement(P, {
            key: r,
            targetid: r,
            active: t,
            targetType: a,
            ugcType: s,
            onDismiss: () => this.setState({ bShowModal: !1 }),
            onSuccess: n,
            store: f.s_LoyaltyAwardModalStore,
            initialSelectedReaction: i,
          });
        }
      });
      (k.defaultProps = { targetType: 1 }), (k = f = (0, n.gn)([i.Pi], k));
      const B = k;
      let D = (T = class extends o.Component {
        static Initialize(e) {
          null === this.s_LoyaltyAwardModalStore &&
            (this.s_LoyaltyAwardModalStore = new y(e.GetServiceTransport()));
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
            i = T.s_LoyaltyAwardModalStore;
          if (null === i)
            return console.log("Store not initialized yet."), null;
          i.GetAwardConfigurations();
          return o.createElement(P, {
            key: t,
            targetid: t,
            active: a,
            targetType: e,
            ugcType: n,
            onDismiss: s,
            onSuccess: s,
            store: T.s_LoyaltyAwardModalStore,
            initialSelectedReaction: r,
          });
        }
      });
      (D.s_LoyaltyAwardModalStore = null), (D = T = (0, n.gn)([i.Pi], D));
      let P = class extends o.Component {
        constructor(e) {
          super(e),
            (this.state = {
              selectedReaction: e.initialSelectedReaction || 0,
              ePhase: I.LOADING,
            });
        }
        componentDidMount() {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let e = yield this.props.store.SetTarget(
              this.props.targetid,
              this.props.targetType,
            );
            1 == e
              ? this.setState({ ePhase: I.SELECTING })
              : this.setState({ ePhase: I.LOADING_ERROR, eResult: e });
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
            E = 0 === s ? null : u.get(s),
            _ = E ? E.points_cost : 0,
            y = E ? E.points_transferred : 0;
          let v,
            R = "";
          switch (t) {
            case 1:
              R = (0, N.Xx)("#GrantAwardDescription_Review");
              break;
            case 2:
              R = (0, N.Xx)("#GrantAwardDescription_UGC");
              break;
            case 3:
              R = (0, N.Xx)("#GrantAwardDescription_Profile");
              break;
            case 4:
              R = (0, N.Xx)("#GrantAwardDescription_ForumTopic");
              break;
            case 5:
              R = (0, N.Xx)("#GrantAwardDescription_Comment");
          }
          switch (i) {
            case I.SELECTING:
              {
                const e = 0 === s || m.get(s),
                  t = !g || g.greaterThanOrEqual(_),
                  a = o.createElement(
                    w.KM,
                    {
                      onClick: () => this.setState({ ePhase: I.CONFIRM }),
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
                v = o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(F, { description: R }),
                  o.createElement(U, null),
                  0 === h.length &&
                    o.createElement(
                      "div",
                      { className: S.InitialLoading },
                      o.createElement(
                        "div",
                        { className: (0, G.Z)(S.LoadingContainer, S.Visible) },
                        o.createElement(j, null),
                      ),
                    ),
                  o.createElement(
                    d.P8,
                    {
                      className: S.ButtonContainer,
                      scrollDirection: "y",
                      "flow-children": "grid",
                    },
                    h.map((e, t) =>
                      o.createElement(Z, {
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
                  o.createElement(U, null),
                  o.createElement(
                    X,
                    { store: n },
                    e || t
                      ? a
                      : [
                          o.createElement(
                            "div",
                            { key: "msg", className: S.NotEnoughPoints },
                            (0, N.Xx)(
                              "#GrantAward_CantAfford",
                              g.negate().add(_).toNumber().toLocaleString(),
                            ),
                          ),
                          o.createElement(
                            l.IS,
                            {
                              key: "button",
                              href: `${p.De.STORE_BASE_URL}points/howitworks`,
                            },
                            o.createElement(
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
            case I.CONFIRM:
            case I.SUBMITTING:
            case I.DONE:
              v = o.createElement(
                o.Fragment,
                null,
                o.createElement(F, { description: R }),
                o.createElement(U, null),
                o.createElement(
                  "div",
                  { style: { position: "relative" } },
                  o.createElement(
                    "div",
                    {
                      className: (0, G.Z)(
                        S.ConfirmContainer,
                        i === I.CONFIRM && S.Visible,
                      ),
                    },
                    o.createElement(x, {
                      className: S.ConfirmAwardImage,
                      reactionType: s,
                    }),
                    o.createElement(
                      "div",
                      { className: S.ConfirmTextCtn },
                      o.createElement(
                        "div",
                        { className: S.ConfirmText },
                        (0, N.kQ)(
                          "#GrantAward_Confirm",
                          o.createElement(Q, null, _.toLocaleString()),
                          o.createElement(
                            "span",
                            { className: S.AwardName },
                            b(s),
                          ),
                        ),
                      ),
                      o.createElement(
                        "div",
                        { className: S.ConfirmText },
                        (0, N.kQ)(
                          "#GrantAward_Confirm_Details",
                          o.createElement(Q, null, y.toLocaleString()),
                          o.createElement(
                            "span",
                            { className: S.TimePeriod },
                            (0, N.Xx)("#GrantAward_Confirm_DetailsTimePeriod"),
                          ),
                        ),
                      ),
                    ),
                  ),
                  o.createElement(
                    "div",
                    {
                      className: (0, G.Z)(
                        S.LoadingContainer,
                        i === I.SUBMITTING && S.Visible,
                      ),
                    },
                    o.createElement(j, null),
                  ),
                  o.createElement(
                    "div",
                    {
                      className: (0, G.Z)(
                        S.SuccessContainer,
                        i === I.DONE && S.Visible,
                      ),
                    },
                    o.createElement(x, {
                      className: S.ConfirmAwardImage,
                      reactionType: s,
                    }),
                    o.createElement(
                      "div",
                      { className: S.SuccessText },
                      (0, N.Xx)("#GrantAward_Success"),
                    ),
                  ),
                ),
                o.createElement(U, null),
                o.createElement(
                  X,
                  { store: n },
                  o.createElement(
                    w.zx,
                    {
                      onClick: () => this.setState({ ePhase: I.SELECTING }),
                      disabled: i !== I.CONFIRM,
                    },
                    (0, N.Xx)("#GrantAward_Back"),
                  ),
                  o.createElement(
                    w.KM,
                    {
                      onClick: this.GrantAward,
                      title: (0, N.Xx)("#GrantAward_SubmitTooltip"),
                      disabled: i !== I.CONFIRM,
                    },
                    (0, N.Xx)("#GrantAwardNowButton"),
                  ),
                ),
              );
              break;
            case I.ERROR:
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
                v = o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(F, { description: R }),
                  o.createElement(U, null),
                  o.createElement(
                    "div",
                    { style: { position: "relative" } },
                    o.createElement(
                      "div",
                      { className: S.ErrorContainer },
                      o.createElement("div", { className: S.ErrorText }, e),
                    ),
                  ),
                  o.createElement(U, null),
                  o.createElement(
                    X,
                    { store: n },
                    o.createElement(
                      w.zx,
                      { onClick: () => this.setState({ ePhase: I.SELECTING }) },
                      (0, N.Xx)("#GrantAward_Back"),
                    ),
                  ),
                );
              }
              break;
            case I.LOADING_ERROR: {
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
              v = o.createElement(
                o.Fragment,
                null,
                o.createElement(F, { description: R }),
                o.createElement(U, null),
                o.createElement(
                  "div",
                  { style: { position: "relative" } },
                  o.createElement(
                    "div",
                    { className: S.ErrorContainer },
                    o.createElement("div", { className: S.ErrorText }, e),
                  ),
                ),
                o.createElement(U, null),
              );
            }
          }
          return o.createElement(
            A.On,
            { className: S.GrantAwardModal, active: e, onDismiss: r },
            o.createElement(
              A.Pv,
              { navID: "GrantAward", closeModal: r },
              c && o.createElement(C.DI, { eType: C.sS.Default }),
              v,
            ),
          );
        }
        GrantAward() {
          const { targetid: e, store: t, onSuccess: a } = this.props,
            { selectedReaction: n } = this.state;
          null !== n &&
            0 != n &&
            (this.setState({ ePhase: I.SUBMITTING }),
            t.AddReaction(n).then(({ eResult: t, strMessage: r }) => {
              1 == t
                ? this.setState({ ePhase: I.DONE, celebrate: !0 }, () =>
                    setTimeout(() => {
                      a && a(e, n);
                    }, 2e3),
                  )
                : this.setState({ ePhase: I.ERROR, eResult: t });
            }));
        }
      };
      (0, n.gn)([L.ak], P.prototype, "GrantAward", null),
        (P = (0, n.gn)([i.Pi], P));
      const F = ({ description: e }) =>
          o.createElement(
            "div",
            { className: S.Header },
            o.createElement(
              "div",
              { className: S.Title },
              (0, N.Xx)("#GrantAwardTitle"),
            ),
            o.createElement("div", { className: S.Description }, e),
          ),
        X = (0, i.Pi)(({ store: e, children: t }) => {
          const a = e.GetUserPointBalance(),
            n = a && a.toNumber().toLocaleString();
          return o.createElement(
            "div",
            { className: S.Footer },
            o.createElement(
              "div",
              { className: S.Left },
              o.createElement(v.doA, { className: S.BalanceIcon }),
              o.createElement(
                "div",
                { className: S.BalanceDetails },
                o.createElement(
                  "div",
                  { className: S.BalanceLabel },
                  (0, N.Xx)("#YourBalance"),
                ),
                o.createElement("div", { className: S.BalanceAmount }, n),
              ),
            ),
            o.createElement(
              "div",
              { className: S.Right },
              o.createElement(
                c.s,
                { className: S.Actions, "flow-children": "row" },
                o.Children.map(t, (e) =>
                  o.createElement("div", { className: S.Action }, e),
                ),
              ),
              o.createElement(
                "a",
                {
                  className: S.FooterLink,
                  href: `${p.De.STORE_BASE_URL}points/howitworks`,
                },
                (0, N.Xx)("#GrantAward_PointsLink"),
              ),
            ),
          );
        }),
        U = () => o.createElement("div", { className: S.Divider });
      class Z extends o.PureComponent {
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
            M.k,
            Object.assign(
              {
                type: "button",
                onMouseEnter: this.handleMouseOver,
                onMouseLeave: this.handleMouseOut,
                className: (0, G.Z)(S.Button, a && S.Selected, r && S.Disabled),
                autoFocus: i,
              },
              l,
            ),
            o.createElement(
              "div",
              { className: S.IconCtn },
              o.createElement(x, {
                reactionType: t,
                bForceAnimated: this.state.bHovered,
                bDisableAnimation: r,
              }),
            ),
            o.createElement(
              "div",
              { className: S.LabelCtn },
              o.createElement("div", { className: S.Label }, b(t)),
              o.createElement(Q, { className: S.Points }, s.toLocaleString()),
            ),
            r && o.createElement(O, { className: S.IconCheckMark }),
          );
        }
      }
      (0, n.gn)([L.ak], Z.prototype, "handleMouseOver", null),
        (0, n.gn)([L.ak], Z.prototype, "handleMouseOut", null);
      const j = () =>
          o.createElement(R.V, { size: "large", className: S.Loading }),
        Q = (e) => {
          const { children: t, className: a } = e,
            r = (0, n._T)(e, ["children", "className"]);
          return o.createElement(
            "span",
            Object.assign({}, r, { className: (0, G.Z)(a, S.PointsAmount) }),
            o.createElement(v.doA, { className: S.PointsAmountIcon }),
            t,
          );
        };
    },
  },
]);
