/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [74],
  {
    ARGL: function (e, t, a) {
      e.exports = {
        GrantAwardModal: "awardmodal_GrantAwardModal_2ilpH",
        Header: "awardmodal_Header_2_vbZ",
        Title: "awardmodal_Title_2yJ4j",
        Description: "awardmodal_Description_16dRE",
        ButtonContainer: "awardmodal_ButtonContainer_JYQgs",
        Button: "awardmodal_Button_3M92h",
        Selected: "awardmodal_Selected_Efo_8",
        Disabled: "awardmodal_Disabled_3k_Tn",
        IconCtn: "awardmodal_IconCtn_1fdGE",
        Label: "awardmodal_Label_2iEkq",
        Points: "awardmodal_Points_3k_jx",
        IconCheckMark: "awardmodal_IconCheckMark_38WUB",
        Footer: "awardmodal_Footer_164mm",
        Left: "awardmodal_Left_1v0jL",
        BalanceIcon: "awardmodal_BalanceIcon_3VvvB",
        BalanceDetails: "awardmodal_BalanceDetails_209Gy",
        BalanceLabel: "awardmodal_BalanceLabel_2u9RZ",
        BalanceAmount: "awardmodal_BalanceAmount_1O3FS",
        Right: "awardmodal_Right_1hgRC",
        Actions: "awardmodal_Actions_1-AT2",
        Action: "awardmodal_Action_1Beae",
        FooterLink: "awardmodal_FooterLink_KId8d",
        Divider: "awardmodal_Divider_105py",
        ConfirmContainer: "awardmodal_ConfirmContainer_3rAoe",
        ConfirmAwardImage: "awardmodal_ConfirmAwardImage_1ARgx",
        ConfirmText: "awardmodal_ConfirmText_1uA9Q",
        AwardName: "awardmodal_AwardName_25N0x",
        TimePeriod: "awardmodal_TimePeriod_6mEUO",
        Visible: "awardmodal_Visible_2QQTW",
        LoadingContainer: "awardmodal_LoadingContainer_1hKG3",
        SuccessContainer: "awardmodal_SuccessContainer_Uz_0u",
        SuccessText: "awardmodal_SuccessText_1kQzN",
        InitialLoading: "awardmodal_InitialLoading_1ZKr7",
        ErrorContainer: "awardmodal_ErrorContainer_1SebP",
        ErrorText: "awardmodal_ErrorText_ok8mo",
        PointsAmount: "awardmodal_PointsAmount_1WCEA",
        PointsAmountIcon: "awardmodal_PointsAmountIcon_3-jpV",
        NotEnoughPoints: "awardmodal_NotEnoughPoints_2VkAe",
      };
    },
    tPo2: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "CheckmarkCircle", function () {
          return G;
        }),
        a.d(t, "LibraryLoyaltyAwardModal", function () {
          return j;
        });
      var n = a("mrSG"),
        r = a("q1tI"),
        o = a("TyAF"),
        s = a("vDqi"),
        i = a.n(s),
        l = a("Jqb/"),
        c = a("ARGL"),
        d = a("bxBv"),
        m = (a("TX96"), a("TLQK")),
        u = a("opsS"),
        _ = a("lkRc"),
        b = a("WBba"),
        g = a("2lpH"),
        E = a.n(g),
        h = a("2vnA"),
        w = (a("kyHq"), a("OU48"));
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
          return _.k.logged_in;
        }
        SetTarget(e, t) {
          (this.m_targetID = e),
            (this.m_eTargetType = t),
            this.LoadExistingReactions();
        }
        AddReaction(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            if (!this.BIsLoggedIn())
              return { eResult: 21, strMessage: "Not logged on" };
            let t = d.b.Init(w.a);
            t.Body().set_target_type(this.m_eTargetType),
              t.Body().set_targetid(this.m_targetID),
              t.Body().set_reactionid(e),
              console.log(" ProtoBuf sending..."),
              console.log(t),
              console.log("Target ID is..." + t.Body().targetid());
            let a = yield w.o.AddReaction(this.m_transport, t);
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
          return Object(n.a)(this, void 0, void 0, function* () {
            if (!this.BIsLoggedIn()) return Promise.resolve(null);
            this.m_bPointsBalanceLoadedOrInFlight = !0;
            const e = d.b.Init(w.g);
            e.SetBodyFields({ steamid: _.k.steamid });
            let t = yield w.o.GetSummary(this.m_transport, e);
            1 == t.GetEResult()
              ? (this.m_lPointsAvailable = E.a.fromString(
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
          return Object(n.a)(this, void 0, void 0, function* () {
            this.m_bReactionConfigurationLoadedOrInFlight = !0;
            const e = d.b.Init(w.e);
            let t = yield w.o.GetReactionConfig(this.m_transport, e);
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
          return Object(n.a)(this, void 0, void 0, function* () {
            this.m_mapExistingReactions.clear();
            const e = d.b.Init(w.f);
            e.Body().set_target_type(this.m_eTargetType),
              e.Body().set_targetid(this.m_targetID);
            let t = yield w.o.GetReactions(this.m_transport, e);
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
      Object(n.b)([h.C.ref], p.prototype, "m_lPointsAvailable", void 0),
        Object(n.b)(
          [h.C.deep],
          p.prototype,
          "m_mapReactionConfiguration",
          void 0
        ),
        Object(n.b)([h.C.deep], p.prototype, "m_mapExistingReactions", void 0);
      var f = a("exH9"),
        y = a("qbgq"),
        O = a("0OaU"),
        A = a("6Y59");
      a("mgoM");
      function v(e) {
        return Object(m.f)(`#RewardsReaction_${e}`);
      }
      var R,
        C,
        S,
        L = a("oet2"),
        N = a("Mgs7");
      a("idvb");
      !(function (e) {
        (e[(e.SELECTING = 0)] = "SELECTING"),
          (e[(e.CONFIRM = 1)] = "CONFIRM"),
          (e[(e.SUBMITTING = 2)] = "SUBMITTING"),
          (e[(e.DONE = 3)] = "DONE"),
          (e[(e.ERROR = 4)] = "ERROR");
      })(S || (S = {}));
      const G = (e) =>
        r.createElement(
          "svg",
          Object.assign(
            {
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          r.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM10.9577 17.254L18.8038 10.0384L16.773 7.83022L10.0706 13.9941L7.71092 11.2399L5.43271 13.1918L8.80323 17.1259C9.06802 17.4349 9.44701 17.6231 9.85327 17.6473C10.2595 17.6715 10.6582 17.5295 10.9577 17.254Z",
          })
        );
      class T extends r.PureComponent {
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
            `${_.d.STORE_CDN_URL}public/images/loyalty/reactions/${
              a ? "animated" : "still"
            }/${t}.png`);
          var t, a;
          return r.createElement("img", {
            className: this.props.className,
            src: e,
            onMouseEnter: this.handleMouseOver,
            onMouseLeave: this.handleMouseOut,
          });
        }
      }
      Object(n.b)([u.a], T.prototype, "handleMouseOver", null),
        Object(n.b)([u.a], T.prototype, "handleMouseOut", null);
      let I = (R = class extends r.Component {
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
          return Object(n.a)(this, void 0, void 0, function* () {
            if (R.s_LoyaltyAwardModalStore) return;
            if (e) return void (R.s_LoyaltyAwardModalStore = new p(e));
            const t = Object(_.h)("loyaltystore", "application_config"),
              a = yield (function () {
                return Object(n.a)(this, void 0, void 0, function* () {
                  try {
                    const e = yield i.a.get(
                      `${Object(_.f)()}pointssummary/ajaxgetasyncconfig`,
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
              o = new b.a(_.d.WEBAPI_BASE_URL, r.webapi_token);
            (R.s_LoyaltyAwardModalStore = new p(o.GetServiceTransport())),
              this.setState({ bLoading: !1 });
          });
        }
        render() {
          const {
              bLoading: e,
              bShowModal: t,
              targetType: a,
              fnSuccessFunc: n,
              targetid: o,
              ugcType: s,
              initialSelectedReaction: i,
            } = this.state,
            d = R.s_LoyaltyAwardModalStore;
          if (!t) return null;
          if (e)
            return r.createElement(
              l.b,
              {
                className: c.GrantAwardModal,
                active: !0,
                onDismiss: () => this.setState({ bShowModal: !1 }),
              },
              r.createElement(B, null),
              r.createElement(P, null),
              r.createElement(
                "div",
                { className: c.InitialLoading },
                r.createElement(
                  "div",
                  { className: Object(f.a)(c.LoadingContainer, c.Visible) },
                  r.createElement(x, null)
                )
              )
            );
          d.GetAwardConfigurations();
          return r.createElement(M, {
            key: o,
            targetid: o,
            active: t,
            targetType: a,
            ugcType: s,
            onDismiss: () => this.setState({ bShowModal: !1 }),
            onSuccess: n,
            store: R.s_LoyaltyAwardModalStore,
            initialSelectedReaction: i,
          });
        }
      });
      (I.defaultProps = { targetType: 1 }), (I = R = Object(n.b)([o.a], I));
      t.default = I;
      let j = (C = class extends r.Component {
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
              initialSelectedReaction: o,
              onDismiss: s,
            } = this.props,
            i = C.s_LoyaltyAwardModalStore;
          if (null === i)
            return console.log("Store not initialized yet."), null;
          i.GetAwardConfigurations();
          return r.createElement(M, {
            key: t,
            targetid: t,
            active: a,
            targetType: e,
            ugcType: n,
            onDismiss: s,
            onSuccess: s,
            store: C.s_LoyaltyAwardModalStore,
            initialSelectedReaction: o,
          });
        }
      });
      (j.s_LoyaltyAwardModalStore = null), (j = C = Object(n.b)([o.a], j));
      let M = class extends r.Component {
        constructor(e) {
          super(e),
            e.store.SetTarget(e.targetid, e.targetType),
            (this.state = {
              selectedReaction: e.initialSelectedReaction || 0,
              ePhase: S.SELECTING,
            });
        }
        render() {
          const {
              active: e,
              targetType: t,
              ugcType: a,
              store: n,
              onDismiss: o,
            } = this.props,
            { selectedReaction: s, ePhase: i, celebrate: d } = this.state;
          if (!e) return null;
          const u = n.GetExistingReactions(),
            b = n.GetAwardConfigurations(),
            g = n.GetUserPointBalance(),
            E = (function (e, t, a) {
              let n = [];
              return (
                e.forEach(function (e) {
                  if (e.valid_target_types.includes(t))
                    switch (t) {
                      case 1:
                        n.push(e.reactionid);
                        break;
                      case 2:
                        e.valid_ugc_types.includes(a) && n.push(e.reactionid);
                        break;
                      case 3:
                      case 4:
                      case 5:
                        n.push(e.reactionid);
                    }
                }),
                n
              );
            })(b, t, a),
            h = 0 === s ? null : b.get(s),
            w = h ? h.points_cost : 0,
            p = h ? h.points_transferred : 0;
          let y,
            O = "";
          switch (t) {
            case 1:
              O = Object(m.f)("#GrantAwardDescription_Review");
              break;
            case 2:
              O = Object(m.f)("#GrantAwardDescription_UGC");
              break;
            case 3:
              O = Object(m.f)("#GrantAwardDescription_Profile");
              break;
            case 4:
              O = Object(m.f)("#GrantAwardDescription_ForumTopic");
              break;
            case 5:
              O = Object(m.f)("#GrantAwardDescription_Comment");
          }
          switch (i) {
            case S.SELECTING:
              {
                const e = 0 === s || u.get(s),
                  t = !g || g.greaterThanOrEqual(w),
                  a = r.createElement(
                    N.q,
                    {
                      onClick: () => this.setState({ ePhase: S.CONFIRM }),
                      disabled: e,
                      title: Object(m.f)(
                        e
                          ? "#GrantAward_PromptTooltip"
                          : "#GrantAward_SubmitTooltip"
                      ),
                    },
                    Object(m.f)(
                      e ? "#GrantAward_SelectAward" : "#GrantAward_Next"
                    )
                  );
                y = r.createElement(
                  r.Fragment,
                  null,
                  r.createElement(B, { description: O }),
                  r.createElement(P, null),
                  0 === E.length &&
                    r.createElement(
                      "div",
                      { className: c.InitialLoading },
                      r.createElement(
                        "div",
                        {
                          className: Object(f.a)(c.LoadingContainer, c.Visible),
                        },
                        r.createElement(x, null)
                      )
                    ),
                  r.createElement(
                    "div",
                    { className: c.ButtonContainer },
                    E.map((e) =>
                      r.createElement(D, {
                        key: e,
                        reaction: e,
                        selected: e === s && !u.get(e),
                        cost: b.get(e).points_cost,
                        alreadyAwarded: u.get(e),
                        onClick: () => {
                          u.get(e) ||
                            this.setState({
                              selectedReaction: e === s ? 0 : e,
                            });
                        },
                      })
                    )
                  ),
                  r.createElement(P, null),
                  r.createElement(
                    k,
                    { store: n },
                    e || t
                      ? a
                      : [
                          r.createElement(
                            "div",
                            { key: "msg", className: c.NotEnoughPoints },
                            Object(m.f)(
                              "#GrantAward_CantAfford",
                              g.negate().add(w).toNumber().toLocaleString()
                            )
                          ),
                          r.createElement(
                            "a",
                            {
                              key: "button",
                              href: `${_.d.STORE_BASE_URL}points/howitworks`,
                            },
                            r.createElement(
                              N.d,
                              { key: "button" },
                              Object(m.f)("#GrantAward_HowToGetPoints")
                            )
                          ),
                        ]
                  )
                );
              }
              break;
            case S.CONFIRM:
            case S.SUBMITTING:
            case S.DONE:
              y = r.createElement(
                r.Fragment,
                null,
                r.createElement(B, { description: O }),
                r.createElement(P, null),
                r.createElement(
                  "div",
                  { style: { position: "relative" } },
                  r.createElement(
                    "div",
                    {
                      className: Object(f.a)(
                        c.ConfirmContainer,
                        i === S.CONFIRM && c.Visible
                      ),
                    },
                    r.createElement(T, {
                      className: c.ConfirmAwardImage,
                      reactionType: s,
                    }),
                    r.createElement(
                      "div",
                      { className: c.ConfirmText },
                      Object(m.m)(
                        "#GrantAward_Confirm",
                        r.createElement(F, null, w.toLocaleString()),
                        r.createElement(
                          "span",
                          { className: c.AwardName },
                          v(s)
                        )
                      )
                    ),
                    r.createElement(
                      "div",
                      { className: c.ConfirmText },
                      Object(m.m)(
                        "#GrantAward_Confirm_Details",
                        r.createElement(F, null, p.toLocaleString()),
                        r.createElement(
                          "span",
                          { className: c.TimePeriod },
                          Object(m.f)("#GrantAward_Confirm_DetailsTimePeriod")
                        )
                      )
                    )
                  ),
                  r.createElement(
                    "div",
                    {
                      className: Object(f.a)(
                        c.LoadingContainer,
                        i === S.SUBMITTING && c.Visible
                      ),
                    },
                    r.createElement(x, null)
                  ),
                  r.createElement(
                    "div",
                    {
                      className: Object(f.a)(
                        c.SuccessContainer,
                        i === S.DONE && c.Visible
                      ),
                    },
                    r.createElement(T, {
                      className: c.ConfirmAwardImage,
                      reactionType: s,
                    }),
                    r.createElement(
                      "div",
                      { className: c.SuccessText },
                      Object(m.f)("#GrantAward_Success")
                    )
                  )
                ),
                r.createElement(P, null),
                r.createElement(
                  k,
                  { store: n },
                  r.createElement(
                    N.d,
                    {
                      onClick: () => this.setState({ ePhase: S.SELECTING }),
                      disabled: i !== S.CONFIRM,
                    },
                    Object(m.f)("#GrantAward_Back")
                  ),
                  r.createElement(
                    N.q,
                    {
                      onClick: this.GrantAward,
                      title: Object(m.f)("#GrantAward_SubmitTooltip"),
                      disabled: i !== S.CONFIRM,
                    },
                    Object(m.f)("#GrantAwardNowButton")
                  )
                )
              );
              break;
            case S.ERROR: {
              let e = "";
              switch (this.state.eResult) {
                case 10:
                  e = Object(m.f)("#GrantAwardError_Busy");
                  break;
                case 32:
                  e = Object(m.f)("#GrantAwardError_PersistFailed");
                  break;
                case 8:
                  e = Object(m.f)("#GrantAwardError_InvalidParam");
                  break;
                case 42:
                  e = Object(m.f)("#GrantAwardError_NoMatch");
                  break;
                case 107:
                  e = Object(m.f)("#GrantAwardError_InsufficientFunds");
                  break;
                case 15:
                  e = Object(m.f)("#GrantAwardError_AccessDenied");
                  break;
                case 21:
                  e = Object(m.f)("#GrantAwardError_NotLoggedOn");
                  break;
                default:
                  e = Object(m.f)("#GrantAwardError_Fail");
              }
              y = r.createElement(
                r.Fragment,
                null,
                r.createElement(B, { description: O }),
                r.createElement(P, null),
                r.createElement(
                  "div",
                  { style: { position: "relative" } },
                  r.createElement(
                    "div",
                    { className: c.ErrorContainer },
                    r.createElement("div", { className: c.ErrorText }, e)
                  )
                ),
                r.createElement(P, null),
                r.createElement(
                  k,
                  { store: n },
                  r.createElement(
                    N.d,
                    { onClick: () => this.setState({ ePhase: S.SELECTING }) },
                    Object(m.f)("#GrantAward_Back")
                  )
                )
              );
            }
          }
          return r.createElement(
            l.b,
            { className: c.GrantAwardModal, active: e, onDismiss: o },
            r.createElement(
              l.d,
              { navID: "GrantAward", closeModal: o },
              d && r.createElement(L.a, { eType: L.b.Default }),
              y
            )
          );
        }
        GrantAward() {
          const { targetid: e, store: t, onSuccess: a } = this.props,
            { selectedReaction: n } = this.state;
          null !== n &&
            0 != n &&
            (this.setState({ ePhase: S.SUBMITTING }),
            t.AddReaction(n).then(({ eResult: t, strMessage: r }) => {
              1 == t
                ? this.setState({ ePhase: S.DONE, celebrate: !0 }, () =>
                    setTimeout(() => {
                      a && a(e, n);
                    }, 2e3)
                  )
                : this.setState({ ePhase: S.ERROR, eResult: t });
            }));
        }
      };
      Object(n.b)([u.a], M.prototype, "GrantAward", null),
        (M = Object(n.b)([o.a], M));
      const B = ({ description: e }) =>
          r.createElement(
            "div",
            { className: c.Header },
            r.createElement(
              "div",
              { className: c.Title },
              Object(m.f)("#GrantAwardTitle")
            ),
            r.createElement("div", { className: c.Description }, e)
          ),
        k = Object(o.a)(({ store: e, children: t }) => {
          const a = e.GetUserPointBalance(),
            n = a && a.toNumber().toLocaleString();
          return r.createElement(
            "div",
            { className: c.Footer },
            r.createElement(
              "div",
              { className: c.Left },
              r.createElement(A.O, { className: c.BalanceIcon }),
              r.createElement(
                "div",
                { className: c.BalanceDetails },
                r.createElement(
                  "div",
                  { className: c.BalanceLabel },
                  Object(m.f)("#YourBalance")
                ),
                r.createElement("div", { className: c.BalanceAmount }, n)
              )
            ),
            r.createElement(
              "div",
              { className: c.Right },
              r.createElement(
                "div",
                { className: c.Actions },
                r.Children.map(t, (e) =>
                  r.createElement("div", { className: c.Action }, e)
                )
              ),
              r.createElement(
                "a",
                {
                  className: c.FooterLink,
                  href: `${_.d.STORE_BASE_URL}points/howitworks`,
                },
                Object(m.f)("#GrantAward_PointsLink")
              )
            )
          );
        }),
        P = () => r.createElement("div", { className: c.Divider });
      class D extends r.PureComponent {
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
            { reaction: t, selected: a, alreadyAwarded: o, cost: s } = e,
            i = Object(n.c)(e, [
              "reaction",
              "selected",
              "alreadyAwarded",
              "cost",
            ]);
          return r.createElement(
            y.a,
            Object.assign(
              {
                type: "button",
                onMouseEnter: this.handleMouseOver,
                onMouseLeave: this.handleMouseOut,
                className: Object(f.a)(
                  c.Button,
                  a && c.Selected,
                  o && c.Disabled
                ),
              },
              i
            ),
            r.createElement(
              "div",
              { className: c.IconCtn },
              r.createElement(T, {
                reactionType: t,
                bForceAnimated: this.state.bHovered,
                bDisableAnimation: o,
              })
            ),
            r.createElement("div", { className: c.Label }, v(t)),
            r.createElement(F, { className: c.Points }, s.toLocaleString()),
            o && r.createElement(G, { className: c.IconCheckMark })
          );
        }
      }
      Object(n.b)([u.a], D.prototype, "handleMouseOver", null),
        Object(n.b)([u.a], D.prototype, "handleMouseOut", null);
      const x = () =>
          r.createElement(O.a, { size: "large", className: c.Loading }),
        F = (e) => {
          const { children: t, className: a } = e,
            o = Object(n.c)(e, ["children", "className"]);
          return r.createElement(
            "span",
            Object.assign({}, o, { className: Object(f.a)(a, c.PointsAmount) }),
            r.createElement(A.O, { className: c.PointsAmountIcon }),
            t
          );
        };
    },
  },
]);
