/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [988],
  {
    26189: (e) => {
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
    16390: (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, {
          CheckmarkCircle: () => M,
          LibraryLoyaltyAwardModal: () => O,
          default: () => P,
        });
      var r = a(70655),
        n = a(9669),
        s = a.n(n),
        o = a(29323),
        i = a(67294),
        l = (a(26149), a(58114)),
        c = a(7707),
        d = a(35921),
        m = a(88272),
        u = a(65902),
        h = a(14974),
        _ = a(43720),
        p = a.n(_),
        g = a(22188),
        E = a(90666);
      a(54698);
      class w {
        constructor(e) {
          (this.m_lPointsAvailable = null),
            (this.m_bPointsBalanceLoadedOrInFlight = !1),
            (this.m_mapReactionConfiguration = new Map()),
            (this.m_bReactionConfigurationLoadedOrInFlight = !1),
            (this.m_mapExistingReactions = new Map()),
            (this.m_transport = e);
        }
        BIsLoggedIn() {
          return E.L7.logged_in;
        }
        SetTarget(e, t) {
          (this.m_targetID = e),
            (this.m_eTargetType = t),
            this.LoadExistingReactions();
        }
        AddReaction(e) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (!this.BIsLoggedIn())
              return { eResult: 21, strMessage: "Not logged on" };
            let t = l.gA.Init(h.HW);
            t.Body().set_target_type(this.m_eTargetType),
              t.Body().set_targetid(this.m_targetID),
              t.Body().set_reactionid(e),
              console.log(" ProtoBuf sending..."),
              console.log(t),
              console.log("Target ID is..." + t.Body().targetid());
            let a = yield h.pQ.AddReaction(this.m_transport, t);
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
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (!this.BIsLoggedIn()) return Promise.resolve(null);
            this.m_bPointsBalanceLoadedOrInFlight = !0;
            const e = l.gA.Init(h.aO);
            e.SetBodyFields({ steamid: E.L7.steamid });
            let t = yield h.pQ.GetSummary(this.m_transport, e);
            1 == t.GetEResult()
              ? (this.m_lPointsAvailable = p().fromString(
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
          return (0, r.mG)(this, void 0, void 0, function* () {
            this.m_bReactionConfigurationLoadedOrInFlight = !0;
            const e = l.gA.Init(h.f_);
            let t = yield h.pQ.GetReactionConfig(this.m_transport, e);
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
          return (0, r.mG)(this, void 0, void 0, function* () {
            this.m_mapExistingReactions.clear();
            const e = l.gA.Init(h.Yl);
            e.Body().set_target_type(this.m_eTargetType),
              e.Body().set_targetid(this.m_targetID);
            let t = yield h.pQ.GetReactions(this.m_transport, e);
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
      (0, r.gn)([g.LO.ref], w.prototype, "m_lPointsAvailable", void 0),
        (0, r.gn)(
          [g.LO.deep],
          w.prototype,
          "m_mapReactionConfiguration",
          void 0
        ),
        (0, r.gn)([g.LO.deep], w.prototype, "m_mapExistingReactions", void 0);
      var b = a(48341),
        v = a(84351),
        y = a(95598),
        A = a(13596),
        C = a(7573),
        S = a(41311),
        L = a(22975),
        R = a(74767),
        N = a(26189);
      function f(e) {
        return (0, S.Xx)(`#RewardsReaction_${e}`);
      }
      var T,
        G,
        I,
        x = a(65437);
      !(function (e) {
        (e[(e.SELECTING = 0)] = "SELECTING"),
          (e[(e.CONFIRM = 1)] = "CONFIRM"),
          (e[(e.SUBMITTING = 2)] = "SUBMITTING"),
          (e[(e.DONE = 3)] = "DONE"),
          (e[(e.ERROR = 4)] = "ERROR");
      })(I || (I = {}));
      const M = (e) =>
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
            `${E.De.STORE_CDN_URL}public/images/loyalty/reactions/${
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
      (0, r.gn)([L.ak], B.prototype, "handleMouseOver", null),
        (0, r.gn)([L.ak], B.prototype, "handleMouseOut", null);
      let k = (T = class extends i.Component {
        constructor(e) {
          super(e),
            (window.fnLoyalty_ShowAwardModal = (t, a, r, n, s) => {
              s || (s = 0),
                this.Init(e.serviceTransport),
                this.setState({
                  bShowModal: !0,
                  fnSuccessFunc: r,
                  targetid: t,
                  ugcType: n,
                  initialSelectedReaction: s,
                  targetType: a,
                });
            }),
            (this.state = { bLoading: !0 });
        }
        Init(e) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (T.s_LoyaltyAwardModalStore) return;
            if (e) return void (T.s_LoyaltyAwardModalStore = new w(e));
            const t = (0, E.kQ)("loyaltystore", "application_config"),
              a = yield (function () {
                return (0, r.mG)(this, void 0, void 0, function* () {
                  try {
                    const e = yield s().get(
                      `${(0, E.Kc)()}pointssummary/ajaxgetasyncconfig`,
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
              n = Object.assign(Object.assign({}, t), a),
              o = new u.J(E.De.WEBAPI_BASE_URL, n.webapi_token);
            (T.s_LoyaltyAwardModalStore = new w(o.GetServiceTransport())),
              this.setState({ bLoading: !1 });
          });
        }
        render() {
          const {
              bLoading: e,
              bShowModal: t,
              targetType: a,
              fnSuccessFunc: r,
              targetid: n,
              ugcType: s,
              initialSelectedReaction: o,
            } = this.state,
            l = T.s_LoyaltyAwardModalStore;
          if (!t) return null;
          if (e)
            return i.createElement(
              v.On,
              {
                className: N.GrantAwardModal,
                active: !0,
                onDismiss: () => this.setState({ bShowModal: !1 }),
              },
              i.createElement(F, null),
              i.createElement(U, null),
              i.createElement(
                "div",
                { className: N.InitialLoading },
                i.createElement(
                  "div",
                  { className: (0, C.Z)(N.LoadingContainer, N.Visible) },
                  i.createElement(j, null)
                )
              )
            );
          l.GetAwardConfigurations();
          return i.createElement(D, {
            key: n,
            targetid: n,
            active: t,
            targetType: a,
            ugcType: s,
            onDismiss: () => this.setState({ bShowModal: !1 }),
            onSuccess: r,
            store: T.s_LoyaltyAwardModalStore,
            initialSelectedReaction: o,
          });
        }
      });
      (k.defaultProps = { targetType: 1 }), (k = T = (0, r.gn)([o.Pi], k));
      const P = k;
      let O = (G = class extends i.Component {
        constructor(e) {
          super(e);
        }
        static Initialize(e) {
          null === this.s_LoyaltyAwardModalStore &&
            (this.s_LoyaltyAwardModalStore = new w(e.GetServiceTransport()));
        }
        render() {
          const {
              targetType: e,
              targetid: t,
              bShowModal: a,
              ugcType: r,
              initialSelectedReaction: n,
              onDismiss: s,
            } = this.props,
            o = G.s_LoyaltyAwardModalStore;
          if (null === o)
            return console.log("Store not initialized yet."), null;
          o.GetAwardConfigurations();
          return i.createElement(D, {
            key: t,
            targetid: t,
            active: a,
            targetType: e,
            ugcType: r,
            onDismiss: s,
            onSuccess: s,
            store: G.s_LoyaltyAwardModalStore,
            initialSelectedReaction: n,
          });
        }
      });
      (O.s_LoyaltyAwardModalStore = null), (O = G = (0, r.gn)([o.Pi], O));
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
              store: r,
              onDismiss: n,
            } = this.props,
            { selectedReaction: s, ePhase: o, celebrate: l } = this.state;
          if (!e) return null;
          const d = r.GetExistingReactions(),
            u = r.GetAwardConfigurations(),
            h = r.GetUserPointBalance(),
            _ = (function (e, t, a) {
              let r = [];
              return (
                e.forEach(function (e) {
                  if (e.valid_target_types.includes(t))
                    switch (t) {
                      case 1:
                      case 3:
                      case 4:
                      case 5:
                        r.push(e.reactionid);
                        break;
                      case 2:
                        e.valid_ugc_types.includes(a) && r.push(e.reactionid);
                    }
                }),
                r
              );
            })(u, t, a),
            p = 0 === s ? null : u.get(s),
            g = p ? p.points_cost : 0,
            w = p ? p.points_transferred : 0;
          let y,
            A = "";
          switch (t) {
            case 1:
              A = (0, S.Xx)("#GrantAwardDescription_Review");
              break;
            case 2:
              A = (0, S.Xx)("#GrantAwardDescription_UGC");
              break;
            case 3:
              A = (0, S.Xx)("#GrantAwardDescription_Profile");
              break;
            case 4:
              A = (0, S.Xx)("#GrantAwardDescription_ForumTopic");
              break;
            case 5:
              A = (0, S.Xx)("#GrantAwardDescription_Comment");
          }
          switch (o) {
            case I.SELECTING:
              {
                const e = 0 === s || d.get(s),
                  t = !h || h.greaterThanOrEqual(g),
                  a = i.createElement(
                    b.KM,
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
                y = i.createElement(
                  i.Fragment,
                  null,
                  i.createElement(F, { description: A }),
                  i.createElement(U, null),
                  0 === _.length &&
                    i.createElement(
                      "div",
                      { className: N.InitialLoading },
                      i.createElement(
                        "div",
                        { className: (0, C.Z)(N.LoadingContainer, N.Visible) },
                        i.createElement(j, null)
                      )
                    ),
                  i.createElement(
                    m.P8,
                    {
                      className: N.ButtonContainer,
                      scrollDirection: "y",
                      "flow-children": "grid",
                    },
                    _.map((e, t) =>
                      i.createElement(z, {
                        autoFocus: 0 == t,
                        key: e,
                        reaction: e,
                        selected: e === s && !d.get(e),
                        cost: u.get(e).points_cost,
                        alreadyAwarded: d.get(e),
                        onClick: () => {
                          d.get(e) ||
                            this.setState({
                              selectedReaction: e === s ? 0 : e,
                            });
                        },
                      })
                    )
                  ),
                  i.createElement(U, null),
                  i.createElement(
                    X,
                    { store: r },
                    e || t
                      ? a
                      : [
                          i.createElement(
                            "div",
                            { key: "msg", className: N.NotEnoughPoints },
                            (0, S.Xx)(
                              "#GrantAward_CantAfford",
                              h.negate().add(g).toNumber().toLocaleString()
                            )
                          ),
                          i.createElement(
                            c.IS,
                            {
                              key: "button",
                              href: `${E.De.STORE_BASE_URL}points/howitworks`,
                            },
                            i.createElement(
                              b.zx,
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
              y = i.createElement(
                i.Fragment,
                null,
                i.createElement(F, { description: A }),
                i.createElement(U, null),
                i.createElement(
                  "div",
                  { style: { position: "relative" } },
                  i.createElement(
                    "div",
                    {
                      className: (0, C.Z)(
                        N.ConfirmContainer,
                        o === I.CONFIRM && N.Visible
                      ),
                    },
                    i.createElement(B, {
                      className: N.ConfirmAwardImage,
                      reactionType: s,
                    }),
                    i.createElement(
                      "div",
                      { className: N.ConfirmTextCtn },
                      i.createElement(
                        "div",
                        { className: N.ConfirmText },
                        (0, S.kQ)(
                          "#GrantAward_Confirm",
                          i.createElement(H, null, g.toLocaleString()),
                          i.createElement(
                            "span",
                            { className: N.AwardName },
                            f(s)
                          )
                        )
                      ),
                      i.createElement(
                        "div",
                        { className: N.ConfirmText },
                        (0, S.kQ)(
                          "#GrantAward_Confirm_Details",
                          i.createElement(H, null, w.toLocaleString()),
                          i.createElement(
                            "span",
                            { className: N.TimePeriod },
                            (0, S.Xx)("#GrantAward_Confirm_DetailsTimePeriod")
                          )
                        )
                      )
                    )
                  ),
                  i.createElement(
                    "div",
                    {
                      className: (0, C.Z)(
                        N.LoadingContainer,
                        o === I.SUBMITTING && N.Visible
                      ),
                    },
                    i.createElement(j, null)
                  ),
                  i.createElement(
                    "div",
                    {
                      className: (0, C.Z)(
                        N.SuccessContainer,
                        o === I.DONE && N.Visible
                      ),
                    },
                    i.createElement(B, {
                      className: N.ConfirmAwardImage,
                      reactionType: s,
                    }),
                    i.createElement(
                      "div",
                      { className: N.SuccessText },
                      (0, S.Xx)("#GrantAward_Success")
                    )
                  )
                ),
                i.createElement(U, null),
                i.createElement(
                  X,
                  { store: r },
                  i.createElement(
                    b.zx,
                    {
                      onClick: () => this.setState({ ePhase: I.SELECTING }),
                      disabled: o !== I.CONFIRM,
                    },
                    (0, S.Xx)("#GrantAward_Back")
                  ),
                  i.createElement(
                    b.KM,
                    {
                      onClick: this.GrantAward,
                      title: (0, S.Xx)("#GrantAward_SubmitTooltip"),
                      disabled: o !== I.CONFIRM,
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
              y = i.createElement(
                i.Fragment,
                null,
                i.createElement(F, { description: A }),
                i.createElement(U, null),
                i.createElement(
                  "div",
                  { style: { position: "relative" } },
                  i.createElement(
                    "div",
                    { className: N.ErrorContainer },
                    i.createElement("div", { className: N.ErrorText }, e)
                  )
                ),
                i.createElement(U, null),
                i.createElement(
                  X,
                  { store: r },
                  i.createElement(
                    b.zx,
                    { onClick: () => this.setState({ ePhase: I.SELECTING }) },
                    (0, S.Xx)("#GrantAward_Back")
                  )
                )
              );
            }
          }
          return i.createElement(
            v.On,
            { className: N.GrantAwardModal, active: e, onDismiss: n },
            i.createElement(
              v.Pv,
              { navID: "GrantAward", closeModal: n },
              l && i.createElement(R.DI, { eType: R.sS.Default }),
              y
            )
          );
        }
        GrantAward() {
          const { targetid: e, store: t, onSuccess: a } = this.props,
            { selectedReaction: r } = this.state;
          null !== r &&
            0 != r &&
            (this.setState({ ePhase: I.SUBMITTING }),
            t.AddReaction(r).then(({ eResult: t, strMessage: n }) => {
              1 == t
                ? this.setState({ ePhase: I.DONE, celebrate: !0 }, () =>
                    setTimeout(() => {
                      a && a(e, r);
                    }, 2e3)
                  )
                : this.setState({ ePhase: I.ERROR, eResult: t });
            }));
        }
      };
      (0, r.gn)([L.ak], D.prototype, "GrantAward", null),
        (D = (0, r.gn)([o.Pi], D));
      const F = ({ description: e }) =>
          i.createElement(
            "div",
            { className: N.Header },
            i.createElement(
              "div",
              { className: N.Title },
              (0, S.Xx)("#GrantAwardTitle")
            ),
            i.createElement("div", { className: N.Description }, e)
          ),
        X = (0, o.Pi)(({ store: e, children: t }) => {
          const a = e.GetUserPointBalance(),
            r = a && a.toNumber().toLocaleString();
          return i.createElement(
            "div",
            { className: N.Footer },
            i.createElement(
              "div",
              { className: N.Left },
              i.createElement(y.doA, { className: N.BalanceIcon }),
              i.createElement(
                "div",
                { className: N.BalanceDetails },
                i.createElement(
                  "div",
                  { className: N.BalanceLabel },
                  (0, S.Xx)("#YourBalance")
                ),
                i.createElement("div", { className: N.BalanceAmount }, r)
              )
            ),
            i.createElement(
              "div",
              { className: N.Right },
              i.createElement(
                d.s,
                { className: N.Actions, "flow-children": "row" },
                i.Children.map(t, (e) =>
                  i.createElement("div", { className: N.Action }, e)
                )
              ),
              i.createElement(
                "a",
                {
                  className: N.FooterLink,
                  href: `${E.De.STORE_BASE_URL}points/howitworks`,
                },
                (0, S.Xx)("#GrantAward_PointsLink")
              )
            )
          );
        }),
        U = () => i.createElement("div", { className: N.Divider });
      class z extends i.PureComponent {
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
              alreadyAwarded: n,
              cost: s,
              autoFocus: o,
            } = e,
            l = (0, r._T)(e, [
              "reaction",
              "selected",
              "alreadyAwarded",
              "cost",
              "autoFocus",
            ]);
          return i.createElement(
            x.k,
            Object.assign(
              {
                type: "button",
                onMouseEnter: this.handleMouseOver,
                onMouseLeave: this.handleMouseOut,
                className: (0, C.Z)(N.Button, a && N.Selected, n && N.Disabled),
                autoFocus: o,
              },
              l
            ),
            i.createElement(
              "div",
              { className: N.IconCtn },
              i.createElement(B, {
                reactionType: t,
                bForceAnimated: this.state.bHovered,
                bDisableAnimation: n,
              })
            ),
            i.createElement(
              "div",
              { className: N.LabelCtn },
              i.createElement("div", { className: N.Label }, f(t)),
              i.createElement(H, { className: N.Points }, s.toLocaleString())
            ),
            n && i.createElement(M, { className: N.IconCheckMark })
          );
        }
      }
      (0, r.gn)([L.ak], z.prototype, "handleMouseOver", null),
        (0, r.gn)([L.ak], z.prototype, "handleMouseOut", null);
      const j = () =>
          i.createElement(A.V, { size: "large", className: N.Loading }),
        H = (e) => {
          const { children: t, className: a } = e,
            n = (0, r._T)(e, ["children", "className"]);
          return i.createElement(
            "span",
            Object.assign({}, n, { className: (0, C.Z)(a, N.PointsAmount) }),
            i.createElement(y.doA, { className: N.PointsAmountIcon }),
            t
          );
        };
    },
    13596: (e, t, a) => {
      "use strict";
      a.d(t, { V: () => i });
      var r = a(67294),
        n = a(95598),
        s = a(50732),
        o = a.n(s);
      class i extends r.PureComponent {
        constructor(e) {
          super(e);
        }
        AddSizeClass(e) {
          "small" == this.props.size
            ? e.push(o().throbber_small)
            : "medium" == this.props.size
            ? e.push(o().throbber_medium)
            : "xlarge" == this.props.size
            ? e.push(o().throbber_xlarge)
            : "xxlarge" == this.props.size
            ? e.push(o().throbber_xxlarge)
            : e.push(o().throbber_large);
        }
        render() {
          let e = [o().LoadingWrapper, "SteamLogoThrobber"];
          this.AddSizeClass(e),
            void 0 === this.props.string && e.push(o().noString),
            this.props.className && e.push(this.props.className),
            this.props.static && e.push(o().Static);
          let t = r.createElement(
            "div",
            { className: e.join(" ") },
            r.createElement(
              "div",
              { className: o().Throbber },
              r.createElement(n.wUs, { className: o().base }),
              r.createElement(n.wUs, { className: o().blur })
            )
          );
          return r.createElement(
            "div",
            {
              className:
                "center" == this.props.position
                  ? o().throbber_center_wrapper
                  : "",
            },
            t,
            Boolean(this.props.string) &&
              r.createElement(
                "div",
                { className: o().ThrobberText },
                this.props.string
              )
          );
        }
      }
    },
  },
]);
