/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [74],
  {
    ARGL: function (e, t, a) {
      e.exports = {
        "duration-app-launch": "800ms",
        GrantAwardModal: "awardmodal_GrantAwardModal_2ilpH",
        Header: "awardmodal_Header_2_vbZ",
        Title: "awardmodal_Title_2yJ4j",
        Description: "awardmodal_Description_16dRE",
        ButtonContainer: "awardmodal_ButtonContainer_JYQgs",
        Button: "awardmodal_Button_3M92h",
        Selected: "awardmodal_Selected_Efo_8",
        Disabled: "awardmodal_Disabled_3k_Tn",
        LabelCtn: "awardmodal_LabelCtn_3jka4",
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
        ConfirmTextCtn: "awardmodal_ConfirmTextCtn_j0Jt4",
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
          return j;
        }),
        a.d(t, "LibraryLoyaltyAwardModal", function () {
          return k;
        });
      var n = a("mrSG"),
        r = a("vDqi"),
        o = a.n(r),
        s = a("TyAF"),
        i = a("q1tI"),
        l = (a("mgoM"), a("bxBv")),
        c = a("qDk6"),
        d = a("WBba"),
        m = (a("TX96"), a("OU48")),
        u = a("2lpH"),
        _ = a.n(u),
        b = a("2vnA"),
        E = a("lkRc");
      a("kyHq");
      class g {
        constructor(e) {
          (this.m_lPointsAvailable = null),
            (this.m_bPointsBalanceLoadedOrInFlight = !1),
            (this.m_mapReactionConfiguration = new Map()),
            (this.m_bReactionConfigurationLoadedOrInFlight = !1),
            (this.m_mapExistingReactions = new Map()),
            (this.m_transport = e);
        }
        BIsLoggedIn() {
          return E.k.logged_in;
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
            let t = l.b.Init(m.a);
            t.Body().set_target_type(this.m_eTargetType),
              t.Body().set_targetid(this.m_targetID),
              t.Body().set_reactionid(e),
              console.log(" ProtoBuf sending..."),
              console.log(t),
              console.log("Target ID is..." + t.Body().targetid());
            let a = yield m.o.AddReaction(this.m_transport, t);
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
            const e = l.b.Init(m.g);
            e.SetBodyFields({ steamid: E.k.steamid });
            let t = yield m.o.GetSummary(this.m_transport, e);
            1 == t.GetEResult()
              ? (this.m_lPointsAvailable = _.a.fromString(
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
            const e = l.b.Init(m.e);
            let t = yield m.o.GetReactionConfig(this.m_transport, e);
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
            const e = l.b.Init(m.f);
            e.Body().set_target_type(this.m_eTargetType),
              e.Body().set_targetid(this.m_targetID);
            let t = yield m.o.GetReactions(this.m_transport, e);
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
      Object(n.b)([b.C.ref], g.prototype, "m_lPointsAvailable", void 0),
        Object(n.b)(
          [b.C.deep],
          g.prototype,
          "m_mapReactionConfiguration",
          void 0
        ),
        Object(n.b)([b.C.deep], g.prototype, "m_mapExistingReactions", void 0);
      var h = a("Mgs7"),
        w = a("Jqb/"),
        p = (a("idvb"), a("6Y59")),
        f = a("0OaU"),
        y = a("exH9"),
        A = a("TLQK"),
        O = a("opsS"),
        v = a("oet2"),
        C = a("ARGL");
      function R(e) {
        return Object(A.f)(`#RewardsReaction_${e}`);
      }
      var S,
        L,
        N,
        T = a("qbgq"),
        G = a("Jz9t"),
        I = a("av+R");
      a("NxAk");
      !(function (e) {
        (e[(e.SELECTING = 0)] = "SELECTING"),
          (e[(e.CONFIRM = 1)] = "CONFIRM"),
          (e[(e.SUBMITTING = 2)] = "SUBMITTING"),
          (e[(e.DONE = 3)] = "DONE"),
          (e[(e.ERROR = 4)] = "ERROR");
      })(N || (N = {}));
      const j = (e) =>
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
            d:
              "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM10.9577 17.254L18.8038 10.0384L16.773 7.83022L10.0706 13.9941L7.71092 11.2399L5.43271 13.1918L8.80323 17.1259C9.06802 17.4349 9.44701 17.6231 9.85327 17.6473C10.2595 17.6715 10.6582 17.5295 10.9577 17.254Z",
          })
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
            `${E.d.STORE_CDN_URL}public/images/loyalty/reactions/${
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
      Object(n.b)([O.b], M.prototype, "handleMouseOver", null),
        Object(n.b)([O.b], M.prototype, "handleMouseOut", null);
      let B = (S = class extends i.Component {
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
            if (S.s_LoyaltyAwardModalStore) return;
            if (e) return void (S.s_LoyaltyAwardModalStore = new g(e));
            const t = Object(E.h)("loyaltystore", "application_config"),
              a = yield (function () {
                return Object(n.a)(this, void 0, void 0, function* () {
                  try {
                    const e = yield o.a.get(
                      `${Object(E.f)()}pointssummary/ajaxgetasyncconfig`,
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
              s = new d.a(E.d.WEBAPI_BASE_URL, r.webapi_token);
            (S.s_LoyaltyAwardModalStore = new g(s.GetServiceTransport())),
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
            l = S.s_LoyaltyAwardModalStore;
          if (!t) return null;
          if (e)
            return i.createElement(
              w.b,
              {
                className: C.GrantAwardModal,
                active: !0,
                onDismiss: () => this.setState({ bShowModal: !1 }),
              },
              i.createElement(D, null),
              i.createElement(x, null),
              i.createElement(
                "div",
                { className: C.InitialLoading },
                i.createElement(
                  "div",
                  { className: Object(y.a)(C.LoadingContainer, C.Visible) },
                  i.createElement(H, null)
                )
              )
            );
          l.GetAwardConfigurations();
          return i.createElement(P, {
            key: r,
            targetid: r,
            active: t,
            targetType: a,
            ugcType: o,
            onDismiss: () => this.setState({ bShowModal: !1 }),
            onSuccess: n,
            store: S.s_LoyaltyAwardModalStore,
            initialSelectedReaction: s,
          });
        }
      });
      (B.defaultProps = { targetType: 1 }), (B = S = Object(n.b)([s.a], B));
      t.default = B;
      let k = (L = class extends i.Component {
        constructor(e) {
          super(e);
        }
        static Initialize(e) {
          null === this.s_LoyaltyAwardModalStore &&
            (this.s_LoyaltyAwardModalStore = new g(e.GetServiceTransport()));
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
            s = L.s_LoyaltyAwardModalStore;
          if (null === s)
            return console.log("Store not initialized yet."), null;
          s.GetAwardConfigurations();
          return i.createElement(P, {
            key: t,
            targetid: t,
            active: a,
            targetType: e,
            ugcType: n,
            onDismiss: o,
            onSuccess: o,
            store: L.s_LoyaltyAwardModalStore,
            initialSelectedReaction: r,
          });
        }
      });
      (k.s_LoyaltyAwardModalStore = null), (k = L = Object(n.b)([s.a], k));
      let P = class extends i.Component {
        constructor(e) {
          super(e),
            e.store.SetTarget(e.targetid, e.targetType),
            (this.state = {
              selectedReaction: e.initialSelectedReaction || 0,
              ePhase: N.SELECTING,
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
          const c = n.GetExistingReactions(),
            d = n.GetAwardConfigurations(),
            m = n.GetUserPointBalance(),
            u = (function (e, t, a) {
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
            })(d, t, a),
            _ = 0 === o ? null : d.get(o),
            b = _ ? _.points_cost : 0,
            g = _ ? _.points_transferred : 0;
          let p,
            f = "";
          switch (t) {
            case 1:
              f = Object(A.f)("#GrantAwardDescription_Review");
              break;
            case 2:
              f = Object(A.f)("#GrantAwardDescription_UGC");
              break;
            case 3:
              f = Object(A.f)("#GrantAwardDescription_Profile");
              break;
            case 4:
              f = Object(A.f)("#GrantAwardDescription_ForumTopic");
              break;
            case 5:
              f = Object(A.f)("#GrantAwardDescription_Comment");
          }
          switch (s) {
            case N.SELECTING:
              {
                const e = 0 === o || c.get(o),
                  t = !m || m.greaterThanOrEqual(b),
                  a = i.createElement(
                    h.F,
                    {
                      onClick: () => this.setState({ ePhase: N.CONFIRM }),
                      disabled: e,
                      focusable: !e,
                      title: Object(A.f)(
                        e
                          ? "#GrantAward_PromptTooltip"
                          : "#GrantAward_SubmitTooltip"
                      ),
                    },
                    Object(A.f)(
                      e ? "#GrantAward_SelectAward" : "#GrantAward_Next"
                    )
                  );
                p = i.createElement(
                  i.Fragment,
                  null,
                  i.createElement(D, { description: f }),
                  i.createElement(x, null),
                  0 === u.length &&
                    i.createElement(
                      "div",
                      { className: C.InitialLoading },
                      i.createElement(
                        "div",
                        {
                          className: Object(y.a)(C.LoadingContainer, C.Visible),
                        },
                        i.createElement(H, null)
                      )
                    ),
                  i.createElement(
                    G.a,
                    {
                      className: C.ButtonContainer,
                      scrollDirection: "y",
                      "flow-children": "grid",
                    },
                    u.map((e, t) =>
                      i.createElement(U, {
                        autoFocus: 0 == t,
                        key: e,
                        reaction: e,
                        selected: e === o && !c.get(e),
                        cost: d.get(e).points_cost,
                        alreadyAwarded: c.get(e),
                        onClick: () => {
                          c.get(e) ||
                            this.setState({
                              selectedReaction: e === o ? 0 : e,
                            });
                        },
                      })
                    )
                  ),
                  i.createElement(x, null),
                  i.createElement(
                    F,
                    { store: n },
                    e || t
                      ? a
                      : [
                          i.createElement(
                            "div",
                            { key: "msg", className: C.NotEnoughPoints },
                            Object(A.f)(
                              "#GrantAward_CantAfford",
                              m.negate().add(b).toNumber().toLocaleString()
                            )
                          ),
                          i.createElement(
                            I.c,
                            {
                              key: "button",
                              href: `${E.d.STORE_BASE_URL}points/howitworks`,
                            },
                            i.createElement(
                              h.j,
                              { key: "button" },
                              Object(A.f)("#GrantAward_HowToGetPoints")
                            )
                          ),
                        ]
                  )
                );
              }
              break;
            case N.CONFIRM:
            case N.SUBMITTING:
            case N.DONE:
              p = i.createElement(
                i.Fragment,
                null,
                i.createElement(D, { description: f }),
                i.createElement(x, null),
                i.createElement(
                  "div",
                  { style: { position: "relative" } },
                  i.createElement(
                    "div",
                    {
                      className: Object(y.a)(
                        C.ConfirmContainer,
                        s === N.CONFIRM && C.Visible
                      ),
                    },
                    i.createElement(M, {
                      className: C.ConfirmAwardImage,
                      reactionType: o,
                    }),
                    i.createElement(
                      "div",
                      { className: C.ConfirmTextCtn },
                      i.createElement(
                        "div",
                        { className: C.ConfirmText },
                        Object(A.m)(
                          "#GrantAward_Confirm",
                          i.createElement($, null, b.toLocaleString()),
                          i.createElement(
                            "span",
                            { className: C.AwardName },
                            R(o)
                          )
                        )
                      ),
                      i.createElement(
                        "div",
                        { className: C.ConfirmText },
                        Object(A.m)(
                          "#GrantAward_Confirm_Details",
                          i.createElement($, null, g.toLocaleString()),
                          i.createElement(
                            "span",
                            { className: C.TimePeriod },
                            Object(A.f)("#GrantAward_Confirm_DetailsTimePeriod")
                          )
                        )
                      )
                    )
                  ),
                  i.createElement(
                    "div",
                    {
                      className: Object(y.a)(
                        C.LoadingContainer,
                        s === N.SUBMITTING && C.Visible
                      ),
                    },
                    i.createElement(H, null)
                  ),
                  i.createElement(
                    "div",
                    {
                      className: Object(y.a)(
                        C.SuccessContainer,
                        s === N.DONE && C.Visible
                      ),
                    },
                    i.createElement(M, {
                      className: C.ConfirmAwardImage,
                      reactionType: o,
                    }),
                    i.createElement(
                      "div",
                      { className: C.SuccessText },
                      Object(A.f)("#GrantAward_Success")
                    )
                  )
                ),
                i.createElement(x, null),
                i.createElement(
                  F,
                  { store: n },
                  i.createElement(
                    h.j,
                    {
                      onClick: () => this.setState({ ePhase: N.SELECTING }),
                      disabled: s !== N.CONFIRM,
                    },
                    Object(A.f)("#GrantAward_Back")
                  ),
                  i.createElement(
                    h.F,
                    {
                      onClick: this.GrantAward,
                      title: Object(A.f)("#GrantAward_SubmitTooltip"),
                      disabled: s !== N.CONFIRM,
                    },
                    Object(A.f)("#GrantAwardNowButton")
                  )
                )
              );
              break;
            case N.ERROR: {
              let e = "";
              switch (this.state.eResult) {
                case 10:
                  e = Object(A.f)("#GrantAwardError_Busy");
                  break;
                case 32:
                  e = Object(A.f)("#GrantAwardError_PersistFailed");
                  break;
                case 8:
                  e = Object(A.f)("#GrantAwardError_InvalidParam");
                  break;
                case 42:
                  e = Object(A.f)("#GrantAwardError_NoMatch");
                  break;
                case 107:
                  e = Object(A.f)("#GrantAwardError_InsufficientFunds");
                  break;
                case 15:
                  e = Object(A.f)("#GrantAwardError_AccessDenied");
                  break;
                case 21:
                  e = Object(A.f)("#GrantAwardError_NotLoggedOn");
                  break;
                default:
                  e = Object(A.f)("#GrantAwardError_Fail");
              }
              p = i.createElement(
                i.Fragment,
                null,
                i.createElement(D, { description: f }),
                i.createElement(x, null),
                i.createElement(
                  "div",
                  { style: { position: "relative" } },
                  i.createElement(
                    "div",
                    { className: C.ErrorContainer },
                    i.createElement("div", { className: C.ErrorText }, e)
                  )
                ),
                i.createElement(x, null),
                i.createElement(
                  F,
                  { store: n },
                  i.createElement(
                    h.j,
                    { onClick: () => this.setState({ ePhase: N.SELECTING }) },
                    Object(A.f)("#GrantAward_Back")
                  )
                )
              );
            }
          }
          return i.createElement(
            w.b,
            { className: C.GrantAwardModal, active: e, onDismiss: r },
            i.createElement(
              w.d,
              { navID: "GrantAward", closeModal: r },
              l && i.createElement(v.a, { eType: v.b.Default }),
              p
            )
          );
        }
        GrantAward() {
          const { targetid: e, store: t, onSuccess: a } = this.props,
            { selectedReaction: n } = this.state;
          null !== n &&
            0 != n &&
            (this.setState({ ePhase: N.SUBMITTING }),
            t.AddReaction(n).then(({ eResult: t, strMessage: r }) => {
              1 == t
                ? this.setState({ ePhase: N.DONE, celebrate: !0 }, () =>
                    setTimeout(() => {
                      a && a(e, n);
                    }, 2e3)
                  )
                : this.setState({ ePhase: N.ERROR, eResult: t });
            }));
        }
      };
      Object(n.b)([O.b], P.prototype, "GrantAward", null),
        (P = Object(n.b)([s.a], P));
      const D = ({ description: e }) =>
          i.createElement(
            "div",
            { className: C.Header },
            i.createElement(
              "div",
              { className: C.Title },
              Object(A.f)("#GrantAwardTitle")
            ),
            i.createElement("div", { className: C.Description }, e)
          ),
        F = Object(s.a)(({ store: e, children: t }) => {
          const a = e.GetUserPointBalance(),
            n = a && a.toNumber().toLocaleString();
          return i.createElement(
            "div",
            { className: C.Footer },
            i.createElement(
              "div",
              { className: C.Left },
              i.createElement(p.O, { className: C.BalanceIcon }),
              i.createElement(
                "div",
                { className: C.BalanceDetails },
                i.createElement(
                  "div",
                  { className: C.BalanceLabel },
                  Object(A.f)("#YourBalance")
                ),
                i.createElement("div", { className: C.BalanceAmount }, n)
              )
            ),
            i.createElement(
              "div",
              { className: C.Right },
              i.createElement(
                c.a,
                { className: C.Actions, "flow-children": "row" },
                i.Children.map(t, (e) =>
                  i.createElement("div", { className: C.Action }, e)
                )
              ),
              i.createElement(
                "a",
                {
                  className: C.FooterLink,
                  href: `${E.d.STORE_BASE_URL}points/howitworks`,
                },
                Object(A.f)("#GrantAward_PointsLink")
              )
            )
          );
        }),
        x = () => i.createElement("div", { className: C.Divider });
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
          const e = this.props,
            {
              reaction: t,
              selected: a,
              alreadyAwarded: r,
              cost: o,
              autoFocus: s,
            } = e,
            l = Object(n.c)(e, [
              "reaction",
              "selected",
              "alreadyAwarded",
              "cost",
              "autoFocus",
            ]);
          return i.createElement(
            T.a,
            Object.assign(
              {
                type: "button",
                onMouseEnter: this.handleMouseOver,
                onMouseLeave: this.handleMouseOut,
                className: Object(y.a)(
                  C.Button,
                  a && C.Selected,
                  r && C.Disabled
                ),
                autoFocus: s,
              },
              l
            ),
            i.createElement(
              "div",
              { className: C.IconCtn },
              i.createElement(M, {
                reactionType: t,
                bForceAnimated: this.state.bHovered,
                bDisableAnimation: r,
              })
            ),
            i.createElement(
              "div",
              { className: C.LabelCtn },
              i.createElement("div", { className: C.Label }, R(t)),
              i.createElement($, { className: C.Points }, o.toLocaleString())
            ),
            r && i.createElement(j, { className: C.IconCheckMark })
          );
        }
      }
      Object(n.b)([O.b], U.prototype, "handleMouseOver", null),
        Object(n.b)([O.b], U.prototype, "handleMouseOut", null);
      const H = () =>
          i.createElement(f.a, { size: "large", className: C.Loading }),
        $ = (e) => {
          const { children: t, className: a } = e,
            r = Object(n.c)(e, ["children", "className"]);
          return i.createElement(
            "span",
            Object.assign({}, r, { className: Object(y.a)(a, C.PointsAmount) }),
            i.createElement(p.O, { className: C.PointsAmountIcon }),
            t
          );
        };
    },
  },
]);
