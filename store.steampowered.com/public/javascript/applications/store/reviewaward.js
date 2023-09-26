/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [988],
  {
    55201: (e) => {
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
          LibraryLoyaltyAwardModal: () => D,
          default: () => P,
        });
      var r = a(33940),
        n = a(52868),
        o = a.n(n),
        s = a(88464),
        i = a(89526),
        l = a(42735),
        c = a(44026),
        d = a(51438),
        m = a(34329),
        u = a(19094),
        _ = a(38139),
        E = a(38072),
        g = a.n(E),
        p = a(50265),
        w = a(67328),
        h = a(32765);
      class y {
        constructor(e) {
          (this.m_lPointsAvailable = null),
            (this.m_bPointsBalanceLoadedOrInFlight = !1),
            (this.m_mapReactionConfiguration = new Map()),
            (this.m_bReactionConfigurationLoadedOrInFlight = !1),
            (this.m_mapExistingReactions = new Map()),
            (this.m_transport = e);
        }
        BIsLoggedIn() {
          return h.L7.logged_in;
        }
        SetTarget(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            return (
              (this.m_targetID = e),
              (this.m_eTargetType = t),
              this.LoadExistingReactions()
            );
          });
        }
        AddReaction(e) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (!this.BIsLoggedIn())
              return {
                eResult: l.s.k_EResultNotLoggedOn,
                strMessage: "Not logged on",
              };
            let t = w.gA.Init(_.HW);
            t.Body().set_target_type(this.m_eTargetType),
              t.Body().set_targetid(this.m_targetID),
              t.Body().set_reactionid(e),
              console.log(" ProtoBuf sending..."),
              console.log(t),
              console.log("Target ID is..." + t.Body().targetid());
            let a = yield _.pQ.AddReaction(this.m_transport, t);
            return (
              a.GetEResult() == l.s.k_EResultOK &&
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
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (!this.BIsLoggedIn()) return Promise.resolve(null);
            this.m_bPointsBalanceLoadedOrInFlight = !0;
            const e = w.gA.Init(_.aO);
            e.SetBodyFields({ steamid: h.L7.steamid });
            let t = yield _.pQ.GetSummary(this.m_transport, e);
            t.GetEResult() == l.s.k_EResultOK
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
          return (0, r.mG)(this, void 0, void 0, function* () {
            this.m_bReactionConfigurationLoadedOrInFlight = !0;
            const e = w.gA.Init(_.f_);
            let t = yield _.pQ.GetReactionConfig(this.m_transport, e);
            if (t.GetEResult() == l.s.k_EResultOK) {
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
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (!this.BIsLoggedIn()) return l.s.k_EResultNotLoggedOn;
            this.m_mapExistingReactions.clear();
            const e = w.gA.Init(_.Yl);
            e.Body().set_target_type(this.m_eTargetType),
              e.Body().set_targetid(this.m_targetID);
            let t = yield _.pQ.GetReactions(this.m_transport, e);
            return (
              t.GetEResult() == l.s.k_EResultOK &&
                t
                  .Body()
                  .reactionids()
                  .map((e) => this.m_mapExistingReactions.set(e, !0)),
              t.GetEResult()
            );
          });
        }
      }
      (0, r.gn)([p.LO.ref], y.prototype, "m_lPointsAvailable", void 0),
        (0, r.gn)(
          [p.LO.deep],
          y.prototype,
          "m_mapReactionConfiguration",
          void 0,
        ),
        (0, r.gn)([p.LO.deep], y.prototype, "m_mapExistingReactions", void 0);
      var R = a(57605),
        L = a(99307),
        v = a(701),
        A = a(3301),
        T = a(19304),
        C = a(14826),
        N = a(4306),
        f = a(28133),
        k = a(55201);
      function b(e) {
        return (0, C.Xx)(`#RewardsReaction_${e}`);
      }
      var G,
        S,
        I,
        O = a(93718);
      !(function (e) {
        (e[(e.LOADING = 0)] = "LOADING"),
          (e[(e.SELECTING = 1)] = "SELECTING"),
          (e[(e.CONFIRM = 2)] = "CONFIRM"),
          (e[(e.SUBMITTING = 3)] = "SUBMITTING"),
          (e[(e.DONE = 4)] = "DONE"),
          (e[(e.ERROR = 5)] = "ERROR"),
          (e[(e.LOADING_ERROR = 6)] = "LOADING_ERROR");
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
            e,
          ),
          i.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM10.9577 17.254L18.8038 10.0384L16.773 7.83022L10.0706 13.9941L7.71092 11.2399L5.43271 13.1918L8.80323 17.1259C9.06802 17.4349 9.44701 17.6231 9.85327 17.6473C10.2595 17.6715 10.6582 17.5295 10.9577 17.254Z",
          }),
        );
      class M extends i.PureComponent {
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
            `${h.De.STORE_CDN_URL}public/images/loyalty/reactions/${
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
      (0, r.gn)([N.ak], M.prototype, "handleMouseOver", null),
        (0, r.gn)([N.ak], M.prototype, "handleMouseOut", null);
      let B = (G = class extends i.Component {
        constructor(e) {
          super(e),
            (window.fnLoyalty_ShowAwardModal = (t, a, r, n, o) => {
              o || (o = _.ms.k_ELoyaltyRewardReactionType_Invalid),
                this.Init(e.serviceTransport),
                this.setState({
                  bShowModal: !0,
                  fnSuccessFunc: r,
                  targetid: t,
                  ugcType: n,
                  initialSelectedReaction: o,
                  targetType: a,
                });
            }),
            (this.state = { bLoading: !0 });
        }
        Init(e) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (G.s_LoyaltyAwardModalStore) return;
            if (e) return void (G.s_LoyaltyAwardModalStore = new y(e));
            const t = (0, h.kQ)("loyaltystore", "application_config"),
              a = yield (function () {
                return (0, r.mG)(this, void 0, void 0, function* () {
                  try {
                    const e = yield o().get(
                      `${(0, h.Kc)()}pointssummary/ajaxgetasyncconfig`,
                      { withCredentials: !0 },
                    );
                    return e.data.success === l.s.k_EResultOK
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
              n = Object.assign(Object.assign({}, t), a),
              s = new u.J(h.De.WEBAPI_BASE_URL, n.webapi_token);
            (G.s_LoyaltyAwardModalStore = new y(s.GetServiceTransport())),
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
              ugcType: o,
              initialSelectedReaction: s,
            } = this.state,
            l = G.s_LoyaltyAwardModalStore;
          if (!t) return null;
          if (e)
            return i.createElement(
              L.On,
              {
                className: k.GrantAwardModal,
                active: !0,
                onDismiss: () => this.setState({ bShowModal: !1 }),
              },
              i.createElement(X, null),
              i.createElement(H, null),
              i.createElement(
                "div",
                { className: k.InitialLoading },
                i.createElement(
                  "div",
                  { className: (0, T.Z)(k.LoadingContainer, k.Visible) },
                  i.createElement(j, null),
                ),
              ),
            );
          l.GetAwardConfigurations();
          return i.createElement(F, {
            key: n,
            targetid: n,
            active: t,
            targetType: a,
            ugcType: o,
            onDismiss: () => this.setState({ bShowModal: !1 }),
            onSuccess: r,
            store: G.s_LoyaltyAwardModalStore,
            initialSelectedReaction: s,
          });
        }
      });
      (B.defaultProps = {
        targetType: _.Lp.k_ELoyaltyRewardReactionTargetType_UserReview,
      }),
        (B = G = (0, r.gn)([s.Pi], B));
      const P = B;
      let D = (S = class extends i.Component {
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
              ugcType: r,
              initialSelectedReaction: n,
              onDismiss: o,
            } = this.props,
            s = S.s_LoyaltyAwardModalStore;
          if (null === s)
            return console.log("Store not initialized yet."), null;
          s.GetAwardConfigurations();
          return i.createElement(F, {
            key: t,
            targetid: t,
            active: a,
            targetType: e,
            ugcType: r,
            onDismiss: o,
            onSuccess: o,
            store: S.s_LoyaltyAwardModalStore,
            initialSelectedReaction: n,
          });
        }
      });
      (D.s_LoyaltyAwardModalStore = null), (D = S = (0, r.gn)([s.Pi], D));
      let F = class extends i.Component {
        constructor(e) {
          super(e),
            (this.state = {
              selectedReaction:
                e.initialSelectedReaction ||
                _.ms.k_ELoyaltyRewardReactionType_Invalid,
              ePhase: I.LOADING,
            });
        }
        componentDidMount() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            let e = yield this.props.store.SetTarget(
              this.props.targetid,
              this.props.targetType,
            );
            e == l.s.k_EResultOK
              ? this.setState({ ePhase: I.SELECTING })
              : this.setState({ ePhase: I.LOADING_ERROR, eResult: e });
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
            { selectedReaction: o, ePhase: s, celebrate: d } = this.state;
          if (!e) return null;
          const u = r.GetExistingReactions(),
            E = r.GetAwardConfigurations(),
            g = r.GetUserPointBalance(),
            p = (function (e, t, a) {
              let r = [];
              return (
                e.forEach(function (e) {
                  if (e.valid_target_types.includes(t))
                    switch (t) {
                      case _.Lp.k_ELoyaltyRewardReactionTargetType_UserReview:
                        r.push(e.reactionid);
                        break;
                      case _.Lp.k_ELoyaltyRewardReactionTargetType_UGC:
                        e.valid_ugc_types.includes(a) && r.push(e.reactionid);
                        break;
                      case _.Lp.k_ELoyaltyRewardReactionTargetType_Profile:
                      case _.Lp.k_ELoyaltyRewardReactionTargetType_ForumTopic:
                      case _.Lp.k_ELoyaltyRewardReactionTargetType_Comment:
                        r.push(e.reactionid);
                    }
                }),
                r
              );
            })(E, t, a),
            w =
              o === _.ms.k_ELoyaltyRewardReactionType_Invalid ? null : E.get(o),
            y = w ? w.points_cost : 0,
            v = w ? w.points_transferred : 0;
          let A,
            N = "";
          switch (t) {
            case _.Lp.k_ELoyaltyRewardReactionTargetType_UserReview:
              N = (0, C.Xx)("#GrantAwardDescription_Review");
              break;
            case _.Lp.k_ELoyaltyRewardReactionTargetType_UGC:
              N = (0, C.Xx)("#GrantAwardDescription_UGC");
              break;
            case _.Lp.k_ELoyaltyRewardReactionTargetType_Profile:
              N = (0, C.Xx)("#GrantAwardDescription_Profile");
              break;
            case _.Lp.k_ELoyaltyRewardReactionTargetType_ForumTopic:
              N = (0, C.Xx)("#GrantAwardDescription_ForumTopic");
              break;
            case _.Lp.k_ELoyaltyRewardReactionTargetType_Comment:
              N = (0, C.Xx)("#GrantAwardDescription_Comment");
          }
          switch (s) {
            case I.SELECTING:
              {
                const e =
                    o === _.ms.k_ELoyaltyRewardReactionType_Invalid || u.get(o),
                  t = !g || g.greaterThanOrEqual(y),
                  a = i.createElement(
                    R.KM,
                    {
                      onClick: () => this.setState({ ePhase: I.CONFIRM }),
                      disabled: e,
                      focusable: !e,
                      title: (0, C.Xx)(
                        e
                          ? "#GrantAward_PromptTooltip"
                          : "#GrantAward_SubmitTooltip",
                      ),
                    },
                    (0, C.Xx)(
                      e ? "#GrantAward_SelectAward" : "#GrantAward_Next",
                    ),
                  );
                A = i.createElement(
                  i.Fragment,
                  null,
                  i.createElement(X, { description: N }),
                  i.createElement(H, null),
                  0 === p.length &&
                    i.createElement(
                      "div",
                      { className: k.InitialLoading },
                      i.createElement(
                        "div",
                        { className: (0, T.Z)(k.LoadingContainer, k.Visible) },
                        i.createElement(j, null),
                      ),
                    ),
                  i.createElement(
                    m.P8,
                    {
                      className: k.ButtonContainer,
                      scrollDirection: "y",
                      "flow-children": "grid",
                    },
                    p.map((e, t) =>
                      i.createElement(Z, {
                        autoFocus: 0 == t,
                        key: e,
                        reaction: e,
                        selected: e === o && !u.get(e),
                        cost: E.get(e).points_cost,
                        alreadyAwarded: u.get(e),
                        onClick: () => {
                          u.get(e) ||
                            this.setState({
                              selectedReaction:
                                e === o
                                  ? _.ms.k_ELoyaltyRewardReactionType_Invalid
                                  : e,
                            });
                        },
                      }),
                    ),
                  ),
                  i.createElement(H, null),
                  i.createElement(
                    U,
                    { store: r },
                    e || t
                      ? a
                      : [
                          i.createElement(
                            "div",
                            { key: "msg", className: k.NotEnoughPoints },
                            (0, C.Xx)(
                              "#GrantAward_CantAfford",
                              g.negate().add(y).toNumber().toLocaleString(),
                            ),
                          ),
                          i.createElement(
                            c.IS,
                            {
                              key: "button",
                              href: `${h.De.STORE_BASE_URL}points/howitworks`,
                            },
                            i.createElement(
                              R.zx,
                              { key: "button" },
                              (0, C.Xx)("#GrantAward_HowToGetPoints"),
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
              A = i.createElement(
                i.Fragment,
                null,
                i.createElement(X, { description: N }),
                i.createElement(H, null),
                i.createElement(
                  "div",
                  { style: { position: "relative" } },
                  i.createElement(
                    "div",
                    {
                      className: (0, T.Z)(
                        k.ConfirmContainer,
                        s === I.CONFIRM && k.Visible,
                      ),
                    },
                    i.createElement(M, {
                      className: k.ConfirmAwardImage,
                      reactionType: o,
                    }),
                    i.createElement(
                      "div",
                      { className: k.ConfirmTextCtn },
                      i.createElement(
                        "div",
                        { className: k.ConfirmText },
                        (0, C.kQ)(
                          "#GrantAward_Confirm",
                          i.createElement(K, null, y.toLocaleString()),
                          i.createElement(
                            "span",
                            { className: k.AwardName },
                            b(o),
                          ),
                        ),
                      ),
                      i.createElement(
                        "div",
                        { className: k.ConfirmText },
                        (0, C.kQ)(
                          "#GrantAward_Confirm_Details",
                          i.createElement(K, null, v.toLocaleString()),
                          i.createElement(
                            "span",
                            { className: k.TimePeriod },
                            (0, C.Xx)("#GrantAward_Confirm_DetailsTimePeriod"),
                          ),
                        ),
                      ),
                    ),
                  ),
                  i.createElement(
                    "div",
                    {
                      className: (0, T.Z)(
                        k.LoadingContainer,
                        s === I.SUBMITTING && k.Visible,
                      ),
                    },
                    i.createElement(j, null),
                  ),
                  i.createElement(
                    "div",
                    {
                      className: (0, T.Z)(
                        k.SuccessContainer,
                        s === I.DONE && k.Visible,
                      ),
                    },
                    i.createElement(M, {
                      className: k.ConfirmAwardImage,
                      reactionType: o,
                    }),
                    i.createElement(
                      "div",
                      { className: k.SuccessText },
                      (0, C.Xx)("#GrantAward_Success"),
                    ),
                  ),
                ),
                i.createElement(H, null),
                i.createElement(
                  U,
                  { store: r },
                  i.createElement(
                    R.zx,
                    {
                      onClick: () => this.setState({ ePhase: I.SELECTING }),
                      disabled: s !== I.CONFIRM,
                    },
                    (0, C.Xx)("#GrantAward_Back"),
                  ),
                  i.createElement(
                    R.KM,
                    {
                      onClick: this.GrantAward,
                      title: (0, C.Xx)("#GrantAward_SubmitTooltip"),
                      disabled: s !== I.CONFIRM,
                    },
                    (0, C.Xx)("#GrantAwardNowButton"),
                  ),
                ),
              );
              break;
            case I.ERROR:
              {
                let e = "";
                switch (this.state.eResult) {
                  case l.s.k_EResultBusy:
                    e = (0, C.Xx)("#GrantAwardError_Busy");
                    break;
                  case l.s.k_EResultPersistFailed:
                    e = (0, C.Xx)("#GrantAwardError_PersistFailed");
                    break;
                  case l.s.k_EResultInvalidParam:
                    e = (0, C.Xx)("#GrantAwardError_InvalidParam");
                    break;
                  case l.s.k_EResultNoMatch:
                    e = (0, C.Xx)("#GrantAwardError_NoMatch");
                    break;
                  case l.s.k_EResultInsufficientFunds:
                    e = (0, C.Xx)("#GrantAwardError_InsufficientFunds");
                    break;
                  case l.s.k_EResultAccessDenied:
                    e = (0, C.Xx)("#GrantAwardError_AccessDenied");
                    break;
                  case l.s.k_EResultNotLoggedOn:
                    e = (0, C.Xx)("#GrantAwardError_NotLoggedOn");
                    break;
                  case l.s.k_EResultDuplicateRequest:
                    e = (0, C.Xx)("#GrantAwardError_DuplicateRequest");
                    break;
                  default:
                    e = (0, C.Xx)("#GrantAwardError_Fail");
                }
                A = i.createElement(
                  i.Fragment,
                  null,
                  i.createElement(X, { description: N }),
                  i.createElement(H, null),
                  i.createElement(
                    "div",
                    { style: { position: "relative" } },
                    i.createElement(
                      "div",
                      { className: k.ErrorContainer },
                      i.createElement("div", { className: k.ErrorText }, e),
                    ),
                  ),
                  i.createElement(H, null),
                  i.createElement(
                    U,
                    { store: r },
                    i.createElement(
                      R.zx,
                      { onClick: () => this.setState({ ePhase: I.SELECTING }) },
                      (0, C.Xx)("#GrantAward_Back"),
                    ),
                  ),
                );
              }
              break;
            case I.LOADING_ERROR: {
              let e = "";
              switch (this.state.eResult) {
                case l.s.k_EResultBusy:
                  e = (0, C.Xx)("#GrantAwardError_Busy");
                  break;
                case l.s.k_EResultNotLoggedOn:
                  e = (0, C.Xx)("#GrantAwardError_NotLoggedOn");
                  break;
                default:
                  e = (0, C.Xx)("#GrantAwardError_LoadExistingReactions");
              }
              A = i.createElement(
                i.Fragment,
                null,
                i.createElement(X, { description: N }),
                i.createElement(H, null),
                i.createElement(
                  "div",
                  { style: { position: "relative" } },
                  i.createElement(
                    "div",
                    { className: k.ErrorContainer },
                    i.createElement("div", { className: k.ErrorText }, e),
                  ),
                ),
                i.createElement(H, null),
              );
            }
          }
          return i.createElement(
            L.On,
            { className: k.GrantAwardModal, active: e, onDismiss: n },
            i.createElement(
              L.Pv,
              { navID: "GrantAward", closeModal: n },
              d && i.createElement(f.DI, { eType: f.sS.Default }),
              A,
            ),
          );
        }
        GrantAward() {
          const { targetid: e, store: t, onSuccess: a } = this.props,
            { selectedReaction: r } = this.state;
          null !== r &&
            r != _.ms.k_ELoyaltyRewardReactionType_Invalid &&
            (this.setState({ ePhase: I.SUBMITTING }),
            t.AddReaction(r).then(({ eResult: t, strMessage: n }) => {
              t == l.s.k_EResultOK
                ? this.setState({ ePhase: I.DONE, celebrate: !0 }, () =>
                    setTimeout(() => {
                      a && a(e, r);
                    }, 2e3),
                  )
                : this.setState({ ePhase: I.ERROR, eResult: t });
            }));
        }
      };
      (0, r.gn)([N.ak], F.prototype, "GrantAward", null),
        (F = (0, r.gn)([s.Pi], F));
      const X = ({ description: e }) =>
          i.createElement(
            "div",
            { className: k.Header },
            i.createElement(
              "div",
              { className: k.Title },
              (0, C.Xx)("#GrantAwardTitle"),
            ),
            i.createElement("div", { className: k.Description }, e),
          ),
        U = (0, s.Pi)(({ store: e, children: t }) => {
          const a = e.GetUserPointBalance(),
            r = a && a.toNumber().toLocaleString();
          return i.createElement(
            "div",
            { className: k.Footer },
            i.createElement(
              "div",
              { className: k.Left },
              i.createElement(v.doA, { className: k.BalanceIcon }),
              i.createElement(
                "div",
                { className: k.BalanceDetails },
                i.createElement(
                  "div",
                  { className: k.BalanceLabel },
                  (0, C.Xx)("#YourBalance"),
                ),
                i.createElement("div", { className: k.BalanceAmount }, r),
              ),
            ),
            i.createElement(
              "div",
              { className: k.Right },
              i.createElement(
                d.s,
                { className: k.Actions, "flow-children": "row" },
                i.Children.map(t, (e) =>
                  i.createElement("div", { className: k.Action }, e),
                ),
              ),
              i.createElement(
                "a",
                {
                  className: k.FooterLink,
                  href: `${h.De.STORE_BASE_URL}points/howitworks`,
                },
                (0, C.Xx)("#GrantAward_PointsLink"),
              ),
            ),
          );
        }),
        H = () => i.createElement("div", { className: k.Divider });
      class Z extends i.PureComponent {
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
              cost: o,
              autoFocus: s,
            } = e,
            l = (0, r._T)(e, [
              "reaction",
              "selected",
              "alreadyAwarded",
              "cost",
              "autoFocus",
            ]);
          return i.createElement(
            O.k,
            Object.assign(
              {
                type: "button",
                onMouseEnter: this.handleMouseOver,
                onMouseLeave: this.handleMouseOut,
                className: (0, T.Z)(k.Button, a && k.Selected, n && k.Disabled),
                autoFocus: s,
              },
              l,
            ),
            i.createElement(
              "div",
              { className: k.IconCtn },
              i.createElement(M, {
                reactionType: t,
                bForceAnimated: this.state.bHovered,
                bDisableAnimation: n,
              }),
            ),
            i.createElement(
              "div",
              { className: k.LabelCtn },
              i.createElement("div", { className: k.Label }, b(t)),
              i.createElement(K, { className: k.Points }, o.toLocaleString()),
            ),
            n && i.createElement(x, { className: k.IconCheckMark }),
          );
        }
      }
      (0, r.gn)([N.ak], Z.prototype, "handleMouseOver", null),
        (0, r.gn)([N.ak], Z.prototype, "handleMouseOut", null);
      const j = () =>
          i.createElement(A.V, { size: "large", className: k.Loading }),
        K = (e) => {
          const { children: t, className: a } = e,
            n = (0, r._T)(e, ["children", "className"]);
          return i.createElement(
            "span",
            Object.assign({}, n, { className: (0, T.Z)(a, k.PointsAmount) }),
            i.createElement(v.doA, { className: k.PointsAmountIcon }),
            t,
          );
        };
    },
  },
]);
