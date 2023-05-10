/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [988],
  {
    83965: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        GrantAwardModal: "awardmodal_GrantAwardModal_2vlF5",
        Header: "awardmodal_Header_2p7RU",
        Title: "awardmodal_Title_2Rty4",
        Description: "awardmodal_Description_j46gb",
        ButtonContainer: "awardmodal_ButtonContainer_1SCKZ",
        Button: "awardmodal_Button_zGUr9",
        Selected: "awardmodal_Selected_29Zn-",
        Disabled: "awardmodal_Disabled_18eTZ",
        LabelCtn: "awardmodal_LabelCtn_in9vJ",
        IconCtn: "awardmodal_IconCtn_3N4SI",
        Label: "awardmodal_Label_V7W5c",
        Points: "awardmodal_Points_Mh1VB",
        IconCheckMark: "awardmodal_IconCheckMark_2cjo-",
        Footer: "awardmodal_Footer_3uhvi",
        Left: "awardmodal_Left_po3ze",
        BalanceIcon: "awardmodal_BalanceIcon_R3Rrv",
        BalanceDetails: "awardmodal_BalanceDetails_2R8Ec",
        BalanceLabel: "awardmodal_BalanceLabel_26lUC",
        BalanceAmount: "awardmodal_BalanceAmount_1A7rm",
        Right: "awardmodal_Right_9EVpk",
        Actions: "awardmodal_Actions_3grEe",
        Action: "awardmodal_Action_m5O_I",
        FooterLink: "awardmodal_FooterLink_LnM57",
        Divider: "awardmodal_Divider_3-_vd",
        ConfirmContainer: "awardmodal_ConfirmContainer_2SlCz",
        ConfirmAwardImage: "awardmodal_ConfirmAwardImage_1jCgm",
        ConfirmTextCtn: "awardmodal_ConfirmTextCtn_2vpMp",
        ConfirmText: "awardmodal_ConfirmText_1VsBl",
        AwardName: "awardmodal_AwardName_18XKP",
        TimePeriod: "awardmodal_TimePeriod_2dsFe",
        Visible: "awardmodal_Visible_99awB",
        LoadingContainer: "awardmodal_LoadingContainer_1Ojo0",
        SuccessContainer: "awardmodal_SuccessContainer_mT3Zs",
        SuccessText: "awardmodal_SuccessText_1cegP",
        InitialLoading: "awardmodal_InitialLoading_2tQ62",
        ErrorContainer: "awardmodal_ErrorContainer_3mAxw",
        ErrorText: "awardmodal_ErrorText_2tq6F",
        PointsAmount: "awardmodal_PointsAmount_-p4kk",
        PointsAmountIcon: "awardmodal_PointsAmountIcon_18Asb",
        NotEnoughPoints: "awardmodal_NotEnoughPoints_140Wj",
      };
    },
    30361: (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, {
          CheckmarkCircle: () => x,
          LibraryLoyaltyAwardModal: () => O,
          default: () => P,
        });
      var n = a(33940),
        r = (a(3641), a(52868)),
        o = a.n(r),
        s = a(88464),
        i = a(89526),
        l = (a(46132), a(54856)),
        c = a(44026),
        d = a(31782),
        m = a(34329),
        u = a(36597),
        _ = a(16899),
        g = a(38072),
        E = a.n(g),
        h = a(50265),
        w = a(32765);
      a(51637);
      class p {
        constructor(e) {
          (this.m_lPointsAvailable = null),
            (this.m_bPointsBalanceLoadedOrInFlight = !1),
            (this.m_mapReactionConfiguration = new Map()),
            (this.m_bReactionConfigurationLoadedOrInFlight = !1),
            (this.m_mapExistingReactions = new Map()),
            (this.m_transport = e);
        }
        BIsLoggedIn() {
          return w.L7.logged_in;
        }
        SetTarget(e, t) {
          (this.m_targetID = e),
            (this.m_eTargetType = t),
            this.LoadExistingReactions();
        }
        AddReaction(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (!this.BIsLoggedIn())
              return { eResult: 21, strMessage: "Not logged on" };
            let t = l.gA.Init(_.HW);
            t.Body().set_target_type(this.m_eTargetType),
              t.Body().set_targetid(this.m_targetID),
              t.Body().set_reactionid(e),
              console.log(" ProtoBuf sending..."),
              console.log(t),
              console.log("Target ID is..." + t.Body().targetid());
            let a = yield _.pQ.AddReaction(this.m_transport, t);
            return (
              1 != a.GetEResult()
                ? console.error(
                    `Error when calling LoyaltyRewardsService.AddReaction: EResult=${a.GetEResult()}`
                  )
                : (this.m_bPointsBalanceLoadedOrInFlight = !1),
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
            const e = l.gA.Init(_.aO);
            e.SetBodyFields({ steamid: w.L7.steamid });
            let t = yield _.pQ.GetSummary(this.m_transport, e);
            1 == t.GetEResult()
              ? (this.m_lPointsAvailable = E().fromString(
                  t.Body().summary().points()
                ))
              : console.error(
                  `Error when calling LoyaltyRewardsService.GetSummary: EResult=${t.GetEResult()}`
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
            const e = l.gA.Init(_.f_);
            let t = yield _.pQ.GetReactionConfig(this.m_transport, e);
            if (1 == t.GetEResult()) {
              let e = t.Body().toObject().reactions;
              for (const t of e)
                this.m_mapReactionConfiguration.set(t.reactionid, t);
            } else console.error(`Error when calling LoyaltyRewardsService.GetReactionConfig: EResult=${t.GetEResult()}`);
          });
        }
        GetExistingReactions() {
          return this.m_mapExistingReactions;
        }
        LoadExistingReactions() {
          return (0, n.mG)(this, void 0, void 0, function* () {
            this.m_mapExistingReactions.clear();
            const e = l.gA.Init(_.Yl);
            e.Body().set_target_type(this.m_eTargetType),
              e.Body().set_targetid(this.m_targetID);
            let t = yield _.pQ.GetReactions(this.m_transport, e);
            1 == t.GetEResult()
              ? t
                  .Body()
                  .reactionids()
                  .map((e) => this.m_mapExistingReactions.set(e, !0))
              : console.error(
                  `Error when calling LoyaltyRewardsService.GetReactions: EResult=${t.GetEResult()}`
                );
          });
        }
      }
      (0, n.gn)([h.LO.ref], p.prototype, "m_lPointsAvailable", void 0),
        (0, n.gn)(
          [h.LO.deep],
          p.prototype,
          "m_mapReactionConfiguration",
          void 0
        ),
        (0, n.gn)([h.LO.deep], p.prototype, "m_mapExistingReactions", void 0);
      var y = a(57605),
        A = a(99307),
        v = a(701),
        C = a(69338),
        R = a(19304),
        S = a(14826),
        L = a(4306),
        b = a(28133),
        f = a(83965);
      function N(e) {
        return (0, S.Xx)(`#RewardsReaction_${e}`);
      }
      var G,
        T,
        I,
        M = a(93718);
      !(function (e) {
        (e[(e.SELECTING = 0)] = "SELECTING"),
          (e[(e.CONFIRM = 1)] = "CONFIRM"),
          (e[(e.SUBMITTING = 2)] = "SUBMITTING"),
          (e[(e.DONE = 3)] = "DONE"),
          (e[(e.ERROR = 4)] = "ERROR");
      })(I || (I = {}));
      const x = (e) =>
        i.createElement(
          "svg",
          Object.assign(
            {
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          i.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM10.9577 17.254L18.8038 10.0384L16.773 7.83022L10.0706 13.9941L7.71092 11.2399L5.43271 13.1918L8.80323 17.1259C9.06802 17.4349 9.44701 17.6231 9.85327 17.6473C10.2595 17.6715 10.6582 17.5295 10.9577 17.254Z",
          })
        );
      class B extends i.PureComponent {
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
            `${w.De.STORE_CDN_URL}public/images/loyalty/reactions/${
              a ? "animated" : "still"
            }/${t}.png`);
          var t, a;
          return i.createElement("img", {
            className: this.props.className,
            src: e,
            onMouseEnter: this.handleMouseOver,
            onMouseLeave: this.handleMouseOut,
          });
        }
      }
      (0, n.gn)([L.ak], B.prototype, "handleMouseOver", null),
        (0, n.gn)([L.ak], B.prototype, "handleMouseOut", null);
      let k = (G = class extends i.Component {
        constructor(e) {
          super(e),
            (window.fnLoyalty_ShowAwardModal = (t, a, n, r, o) => {
              o || (o = 0),
                this.Init(e.serviceTransport),
                this.setState({
                  bShowModal: !0,
                  fnSuccessFunc: n,
                  targetid: t,
                  ugcType: r,
                  initialSelectedReaction: o,
                  targetType: a,
                });
            }),
            (this.state = { bLoading: !0 });
        }
        Init(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (G.s_LoyaltyAwardModalStore) return;
            if (e) return void (G.s_LoyaltyAwardModalStore = new p(e));
            const t = (0, w.kQ)("loyaltystore", "application_config"),
              a = yield (function () {
                return (0, n.mG)(this, void 0, void 0, function* () {
                  try {
                    const e = yield o().get(
                      `${(0, w.Kc)()}pointssummary/ajaxgetasyncconfig`,
                      { withCredentials: !0 }
                    );
                    return 1 === e.data.success
                      ? e.data.data
                      : (console.error(
                          `Failed to load async config: ${e.data.success}`
                        ),
                        {});
                  } catch (e) {
                    return (
                      console.error(
                        `Unexpected failure while loading async config: ${e}`
                      ),
                      {}
                    );
                  }
                });
              })(),
              r = Object.assign(Object.assign({}, t), a),
              s = new u.J(w.De.WEBAPI_BASE_URL, r.webapi_token);
            (G.s_LoyaltyAwardModalStore = new p(s.GetServiceTransport())),
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
              ugcType: o,
              initialSelectedReaction: s,
            } = this.state,
            l = G.s_LoyaltyAwardModalStore;
          if (!t) return null;
          if (e)
            return i.createElement(
              A.On,
              {
                className: f.GrantAwardModal,
                active: !0,
                onDismiss: () => this.setState({ bShowModal: !1 }),
              },
              i.createElement(F, null),
              i.createElement(U, null),
              i.createElement(
                "div",
                { className: f.InitialLoading },
                i.createElement(
                  "div",
                  { className: (0, R.Z)(f.LoadingContainer, f.Visible) },
                  i.createElement(Z, null)
                )
              )
            );
          l.GetAwardConfigurations();
          return i.createElement(D, {
            key: r,
            targetid: r,
            active: t,
            targetType: a,
            ugcType: o,
            onDismiss: () => this.setState({ bShowModal: !1 }),
            onSuccess: n,
            store: G.s_LoyaltyAwardModalStore,
            initialSelectedReaction: s,
          });
        }
      });
      (k.defaultProps = { targetType: 1 }), (k = G = (0, n.gn)([s.Pi], k));
      const P = k;
      let O = (T = class extends i.Component {
        constructor(e) {
          super(e);
        }
        static Initialize(e) {
          null === this.s_LoyaltyAwardModalStore &&
            (this.s_LoyaltyAwardModalStore = new p(e.GetServiceTransport()));
        }
        render() {
          const {
              targetType: e,
              targetid: t,
              bShowModal: a,
              ugcType: n,
              initialSelectedReaction: r,
              onDismiss: o,
            } = this.props,
            s = T.s_LoyaltyAwardModalStore;
          if (null === s)
            return console.log("Store not initialized yet."), null;
          s.GetAwardConfigurations();
          return i.createElement(D, {
            key: t,
            targetid: t,
            active: a,
            targetType: e,
            ugcType: n,
            onDismiss: o,
            onSuccess: o,
            store: T.s_LoyaltyAwardModalStore,
            initialSelectedReaction: r,
          });
        }
      });
      (O.s_LoyaltyAwardModalStore = null), (O = T = (0, n.gn)([s.Pi], O));
      let D = class extends i.Component {
        constructor(e) {
          super(e),
            e.store.SetTarget(e.targetid, e.targetType),
            (this.state = {
              selectedReaction: e.initialSelectedReaction || 0,
              ePhase: I.SELECTING,
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
            { selectedReaction: o, ePhase: s, celebrate: l } = this.state;
          if (!e) return null;
          const d = n.GetExistingReactions(),
            u = n.GetAwardConfigurations(),
            _ = n.GetUserPointBalance(),
            g = (function (e, t, a) {
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
            E = 0 === o ? null : u.get(o),
            h = E ? E.points_cost : 0,
            p = E ? E.points_transferred : 0;
          let v,
            C = "";
          switch (t) {
            case 1:
              C = (0, S.Xx)("#GrantAwardDescription_Review");
              break;
            case 2:
              C = (0, S.Xx)("#GrantAwardDescription_UGC");
              break;
            case 3:
              C = (0, S.Xx)("#GrantAwardDescription_Profile");
              break;
            case 4:
              C = (0, S.Xx)("#GrantAwardDescription_ForumTopic");
              break;
            case 5:
              C = (0, S.Xx)("#GrantAwardDescription_Comment");
          }
          switch (s) {
            case I.SELECTING:
              {
                const e = 0 === o || d.get(o),
                  t = !_ || _.greaterThanOrEqual(h),
                  a = i.createElement(
                    y.KM,
                    {
                      onClick: () => this.setState({ ePhase: I.CONFIRM }),
                      disabled: e,
                      focusable: !e,
                      title: (0, S.Xx)(
                        e
                          ? "#GrantAward_PromptTooltip"
                          : "#GrantAward_SubmitTooltip"
                      ),
                    },
                    (0, S.Xx)(
                      e ? "#GrantAward_SelectAward" : "#GrantAward_Next"
                    )
                  );
                v = i.createElement(
                  i.Fragment,
                  null,
                  i.createElement(F, { description: C }),
                  i.createElement(U, null),
                  0 === g.length &&
                    i.createElement(
                      "div",
                      { className: f.InitialLoading },
                      i.createElement(
                        "div",
                        { className: (0, R.Z)(f.LoadingContainer, f.Visible) },
                        i.createElement(Z, null)
                      )
                    ),
                  i.createElement(
                    m.P8,
                    {
                      className: f.ButtonContainer,
                      scrollDirection: "y",
                      "flow-children": "grid",
                    },
                    g.map((e, t) =>
                      i.createElement(H, {
                        autoFocus: 0 == t,
                        key: e,
                        reaction: e,
                        selected: e === o && !d.get(e),
                        cost: u.get(e).points_cost,
                        alreadyAwarded: d.get(e),
                        onClick: () => {
                          d.get(e) ||
                            this.setState({
                              selectedReaction: e === o ? 0 : e,
                            });
                        },
                      })
                    )
                  ),
                  i.createElement(U, null),
                  i.createElement(
                    X,
                    { store: n },
                    e || t
                      ? a
                      : [
                          i.createElement(
                            "div",
                            { key: "msg", className: f.NotEnoughPoints },
                            (0, S.Xx)(
                              "#GrantAward_CantAfford",
                              _.negate().add(h).toNumber().toLocaleString()
                            )
                          ),
                          i.createElement(
                            c.IS,
                            {
                              key: "button",
                              href: `${w.De.STORE_BASE_URL}points/howitworks`,
                            },
                            i.createElement(
                              y.zx,
                              { key: "button" },
                              (0, S.Xx)("#GrantAward_HowToGetPoints")
                            )
                          ),
                        ]
                  )
                );
              }
              break;
            case I.CONFIRM:
            case I.SUBMITTING:
            case I.DONE:
              v = i.createElement(
                i.Fragment,
                null,
                i.createElement(F, { description: C }),
                i.createElement(U, null),
                i.createElement(
                  "div",
                  { style: { position: "relative" } },
                  i.createElement(
                    "div",
                    {
                      className: (0, R.Z)(
                        f.ConfirmContainer,
                        s === I.CONFIRM && f.Visible
                      ),
                    },
                    i.createElement(B, {
                      className: f.ConfirmAwardImage,
                      reactionType: o,
                    }),
                    i.createElement(
                      "div",
                      { className: f.ConfirmTextCtn },
                      i.createElement(
                        "div",
                        { className: f.ConfirmText },
                        (0, S.kQ)(
                          "#GrantAward_Confirm",
                          i.createElement($, null, h.toLocaleString()),
                          i.createElement(
                            "span",
                            { className: f.AwardName },
                            N(o)
                          )
                        )
                      ),
                      i.createElement(
                        "div",
                        { className: f.ConfirmText },
                        (0, S.kQ)(
                          "#GrantAward_Confirm_Details",
                          i.createElement($, null, p.toLocaleString()),
                          i.createElement(
                            "span",
                            { className: f.TimePeriod },
                            (0, S.Xx)("#GrantAward_Confirm_DetailsTimePeriod")
                          )
                        )
                      )
                    )
                  ),
                  i.createElement(
                    "div",
                    {
                      className: (0, R.Z)(
                        f.LoadingContainer,
                        s === I.SUBMITTING && f.Visible
                      ),
                    },
                    i.createElement(Z, null)
                  ),
                  i.createElement(
                    "div",
                    {
                      className: (0, R.Z)(
                        f.SuccessContainer,
                        s === I.DONE && f.Visible
                      ),
                    },
                    i.createElement(B, {
                      className: f.ConfirmAwardImage,
                      reactionType: o,
                    }),
                    i.createElement(
                      "div",
                      { className: f.SuccessText },
                      (0, S.Xx)("#GrantAward_Success")
                    )
                  )
                ),
                i.createElement(U, null),
                i.createElement(
                  X,
                  { store: n },
                  i.createElement(
                    y.zx,
                    {
                      onClick: () => this.setState({ ePhase: I.SELECTING }),
                      disabled: s !== I.CONFIRM,
                    },
                    (0, S.Xx)("#GrantAward_Back")
                  ),
                  i.createElement(
                    y.KM,
                    {
                      onClick: this.GrantAward,
                      title: (0, S.Xx)("#GrantAward_SubmitTooltip"),
                      disabled: s !== I.CONFIRM,
                    },
                    (0, S.Xx)("#GrantAwardNowButton")
                  )
                )
              );
              break;
            case I.ERROR: {
              let e = "";
              switch (this.state.eResult) {
                case 10:
                  e = (0, S.Xx)("#GrantAwardError_Busy");
                  break;
                case 32:
                  e = (0, S.Xx)("#GrantAwardError_PersistFailed");
                  break;
                case 8:
                  e = (0, S.Xx)("#GrantAwardError_InvalidParam");
                  break;
                case 42:
                  e = (0, S.Xx)("#GrantAwardError_NoMatch");
                  break;
                case 107:
                  e = (0, S.Xx)("#GrantAwardError_InsufficientFunds");
                  break;
                case 15:
                  e = (0, S.Xx)("#GrantAwardError_AccessDenied");
                  break;
                case 21:
                  e = (0, S.Xx)("#GrantAwardError_NotLoggedOn");
                  break;
                default:
                  e = (0, S.Xx)("#GrantAwardError_Fail");
              }
              v = i.createElement(
                i.Fragment,
                null,
                i.createElement(F, { description: C }),
                i.createElement(U, null),
                i.createElement(
                  "div",
                  { style: { position: "relative" } },
                  i.createElement(
                    "div",
                    { className: f.ErrorContainer },
                    i.createElement("div", { className: f.ErrorText }, e)
                  )
                ),
                i.createElement(U, null),
                i.createElement(
                  X,
                  { store: n },
                  i.createElement(
                    y.zx,
                    { onClick: () => this.setState({ ePhase: I.SELECTING }) },
                    (0, S.Xx)("#GrantAward_Back")
                  )
                )
              );
            }
          }
          return i.createElement(
            A.On,
            { className: f.GrantAwardModal, active: e, onDismiss: r },
            i.createElement(
              A.Pv,
              { navID: "GrantAward", closeModal: r },
              l && i.createElement(b.DI, { eType: b.sS.Default }),
              v
            )
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
                    }, 2e3)
                  )
                : this.setState({ ePhase: I.ERROR, eResult: t });
            }));
        }
      };
      (0, n.gn)([L.ak], D.prototype, "GrantAward", null),
        (D = (0, n.gn)([s.Pi], D));
      const F = ({ description: e }) =>
          i.createElement(
            "div",
            { className: f.Header },
            i.createElement(
              "div",
              { className: f.Title },
              (0, S.Xx)("#GrantAwardTitle")
            ),
            i.createElement("div", { className: f.Description }, e)
          ),
        X = (0, s.Pi)(({ store: e, children: t }) => {
          const a = e.GetUserPointBalance(),
            n = a && a.toNumber().toLocaleString();
          return i.createElement(
            "div",
            { className: f.Footer },
            i.createElement(
              "div",
              { className: f.Left },
              i.createElement(v.doA, { className: f.BalanceIcon }),
              i.createElement(
                "div",
                { className: f.BalanceDetails },
                i.createElement(
                  "div",
                  { className: f.BalanceLabel },
                  (0, S.Xx)("#YourBalance")
                ),
                i.createElement("div", { className: f.BalanceAmount }, n)
              )
            ),
            i.createElement(
              "div",
              { className: f.Right },
              i.createElement(
                d.s,
                { className: f.Actions, "flow-children": "row" },
                i.Children.map(t, (e) =>
                  i.createElement("div", { className: f.Action }, e)
                )
              ),
              i.createElement(
                "a",
                {
                  className: f.FooterLink,
                  href: `${w.De.STORE_BASE_URL}points/howitworks`,
                },
                (0, S.Xx)("#GrantAward_PointsLink")
              )
            )
          );
        }),
        U = () => i.createElement("div", { className: f.Divider });
      class H extends i.PureComponent {
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
              cost: o,
              autoFocus: s,
            } = e,
            l = (0, n._T)(e, [
              "reaction",
              "selected",
              "alreadyAwarded",
              "cost",
              "autoFocus",
            ]);
          return i.createElement(
            M.k,
            Object.assign(
              {
                type: "button",
                onMouseEnter: this.handleMouseOver,
                onMouseLeave: this.handleMouseOut,
                className: (0, R.Z)(f.Button, a && f.Selected, r && f.Disabled),
                autoFocus: s,
              },
              l
            ),
            i.createElement(
              "div",
              { className: f.IconCtn },
              i.createElement(B, {
                reactionType: t,
                bForceAnimated: this.state.bHovered,
                bDisableAnimation: r,
              })
            ),
            i.createElement(
              "div",
              { className: f.LabelCtn },
              i.createElement("div", { className: f.Label }, N(t)),
              i.createElement($, { className: f.Points }, o.toLocaleString())
            ),
            r && i.createElement(x, { className: f.IconCheckMark })
          );
        }
      }
      (0, n.gn)([L.ak], H.prototype, "handleMouseOver", null),
        (0, n.gn)([L.ak], H.prototype, "handleMouseOut", null);
      const Z = () =>
          i.createElement(C.V, { size: "large", className: f.Loading }),
        $ = (e) => {
          const { children: t, className: a } = e,
            r = (0, n._T)(e, ["children", "className"]);
          return i.createElement(
            "span",
            Object.assign({}, r, { className: (0, R.Z)(a, f.PointsAmount) }),
            i.createElement(v.doA, { className: f.PointsAmountIcon }),
            t
          );
        };
    },
  },
]);
