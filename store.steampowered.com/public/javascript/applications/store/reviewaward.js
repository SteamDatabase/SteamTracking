/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [67],
  {
    ARGL: function(e, t, a) {
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
        SubmitButton: "awardmodal_SubmitButton_2FENd",
        BackButton: "awardmodal_BackButton_32qks",
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
        ErrorContainer: "awardmodal_ErrorContainer_1SebP",
        ErrorText: "awardmodal_ErrorText_ok8mo",
        PointsAmount: "awardmodal_PointsAmount_1WCEA",
        PointsAmountIcon: "awardmodal_PointsAmountIcon_3-jpV",
        NotEnoughPoints: "awardmodal_NotEnoughPoints_2VkAe"
      };
    },
    tPo2: function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "CheckmarkCircle", function() {
          return b;
        }),
        a.d(t, "LibraryLoyaltyAwardModal", function() {
          return f;
        });
      var s = a("mrSG"),
        v = a("q1tI"),
        r = a("TyAF"),
        A = a("Jqb/"),
        O = a("ARGL"),
        R = a("TLQK"),
        n = a("bxiW"),
        S = a("lkRc"),
        o = a("WBba"),
        i = a("2lpH"),
        c = a.n(i),
        l = a("2vnA"),
        d = a("bxBv"),
        u = a("OU48"),
        m = (function() {
          function e(e) {
            (this.m_ulPointsAvailable = null),
              (this.m_bPointsBalanceLoadedOrInFlight = !1),
              (this.m_unAwardCost = 0),
              (this.m_unAwardPointsTransferred = 0),
              (this.m_bAwardCostLoadedOrInFlight = !1),
              (this.m_mapExistingReactions = new Map()),
              (this.m_transport = e);
          }
          return (
            (e.prototype.BIsLoggedIn = function() {
              return S.i.logged_in;
            }),
            (e.prototype.SetTarget = function(e, t) {
              (this.m_targetID = e),
                (this.m_eTargetType = t),
                this.LoadExistingReactions();
            }),
            (e.prototype.AddReaction = function(r) {
              return Object(s.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(s.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.BIsLoggedIn()
                        ? ((t = d.a.Init(u.a))
                            .Body()
                            .set_target_type(this.m_eTargetType),
                          t.Body().set_targetid(this.m_targetID),
                          t.Body().set_reactionid(r),
                          console.log(" ProtoBuf sending..."),
                          console.log(t),
                          console.log("Target ID is..." + t.Body().targetid()),
                          [4, u.k.AddReaction(this.m_transport, t)])
                        : [2, { eResult: 21, strMessage: "Not logged on" }];
                    case 1:
                      return (
                        1 != (a = e.sent()).GetEResult()
                          ? console.error(
                              "Error when calling LoyaltyRewardsService.AddReaction: EResult=" +
                                a.GetEResult()
                            )
                          : (this.m_bPointsBalanceLoadedOrInFlight = !1),
                        [2, { eResult: a.GetEResult(), strMessage: "" }]
                      );
                  }
                });
              });
            }),
            (e.prototype.GetUserPointBalance = function() {
              return this.BIsLoggedIn()
                ? (this.m_bPointsBalanceLoadedOrInFlight ||
                    this.LoadUserPointBalance(),
                  this.m_ulPointsAvailable)
                : null;
            }),
            (e.prototype.LoadUserPointBalance = function() {
              return Object(s.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(s.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.BIsLoggedIn()
                        ? ((this.m_bPointsBalanceLoadedOrInFlight = !0),
                          (t = d.a.Init(u.g)).SetBodyFields({
                            steamid: S.i.steamid
                          }),
                          [4, u.k.GetSummary(this.m_transport, t)])
                        : [2, Promise.resolve(null)];
                    case 1:
                      return (
                        1 == (a = e.sent()).GetEResult()
                          ? (this.m_ulPointsAvailable = c.a.fromString(
                              a
                                .Body()
                                .summary()
                                .points(),
                              !0
                            ))
                          : console.error(
                              "Error when calling LoyaltyRewardsService.GetSummary: EResult=${msgResponse.GetEResult()}"
                            ),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.GetAwardCost = function() {
              return (
                this.m_bAwardCostLoadedOrInFlight || this.LoadAwardCost(),
                this.m_unAwardCost
              );
            }),
            (e.prototype.GetAwardPointsTransferred = function() {
              return (
                this.m_bAwardCostLoadedOrInFlight || this.LoadAwardCost(),
                this.m_unAwardPointsTransferred
              );
            }),
            (e.prototype.LoadAwardCost = function() {
              return Object(s.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(s.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (this.m_bAwardCostLoadedOrInFlight = !0),
                        (t = d.a.Init(u.e)),
                        [4, u.k.GetReactionConfig(this.m_transport, t)]
                      );
                    case 1:
                      return (
                        1 == (a = e.sent()).GetEResult()
                          ? ((this.m_unAwardCost = a.Body().points_cost()),
                            (this.m_unAwardPointsTransferred = a
                              .Body()
                              .points_transferred()))
                          : console.error(
                              "Error when calling LoyaltyRewardsService.GetReactionConfig: EResult=${msgResponse.GetEResult()}"
                            ),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.GetExistingReactions = function() {
              return this.m_mapExistingReactions;
            }),
            (e.prototype.LoadExistingReactions = function() {
              return Object(s.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  r = this;
                return Object(s.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        this.m_mapExistingReactions.clear(),
                        (t = d.a.Init(u.f))
                          .Body()
                          .set_target_type(this.m_eTargetType),
                        t.Body().set_targetid(this.m_targetID),
                        [4, u.k.GetReactions(this.m_transport, t)]
                      );
                    case 1:
                      return (
                        1 == (a = e.sent()).GetEResult()
                          ? a
                              .Body()
                              .reactionids()
                              .map(function(e) {
                                return r.m_mapExistingReactions.set(e, !0);
                              })
                          : console.error(
                              "Error when calling LoyaltyRewardsService.GetReactions: EResult=${msgResponse.GetEResult()}"
                            ),
                        [2]
                      );
                  }
                });
              });
            }),
            Object(s.c)([l.y.ref], e.prototype, "m_ulPointsAvailable", void 0),
            Object(s.c)([l.y], e.prototype, "m_unAwardCost", void 0),
            Object(s.c)(
              [l.y],
              e.prototype,
              "m_unAwardPointsTransferred",
              void 0
            ),
            Object(s.c)(
              [l.y.deep],
              e.prototype,
              "m_mapExistingReactions",
              void 0
            ),
            e
          );
        })(),
        C = a("exH9"),
        _ = a("qbgq"),
        p = a("0OaU"),
        w = a("6Y59");
      function N(e) {
        return Object(R.d)("#RewardsReaction_" + e);
      }
      var T,
        h,
        L = a("oet2"),
        G = [1, 2, 3, 4, 5, 6],
        j = [7, 3, 4, 8, 6],
        B = [7, 3, 4, 8, 6],
        I = [7, 3, 4, 8, 6],
        M = [2, 3, 4, 5],
        P = [1, 5, 6],
        k = [1, 2, 3, 4, 8];
      ((h = T = T || {})[(h.SELECTING = 0)] = "SELECTING"),
        (h[(h.CONFIRM = 1)] = "CONFIRM"),
        (h[(h.SUBMITTING = 2)] = "SUBMITTING"),
        (h[(h.DONE = 3)] = "DONE"),
        (h[(h.ERROR = 4)] = "ERROR");
      var b = function(e) {
          return v.createElement(
            "svg",
            Object(s.a)(
              {
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              },
              e
            ),
            v.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              clipRule: "evenodd",
              d:
                "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM10.9577 17.254L18.8038 10.0384L16.773 7.83022L10.0706 13.9941L7.71092 11.2399L5.43271 13.1918L8.80323 17.1259C9.06802 17.4349 9.44701 17.6231 9.85327 17.6473C10.2595 17.6715 10.6582 17.5295 10.9577 17.254Z"
            })
          );
        },
        D = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (t.state = { bHovered: !1 }), t;
          }
          return (
            Object(s.d)(e, a),
            (e.prototype.handleMouseOver = function(e) {
              this.setState({ bHovered: !0 });
            }),
            (e.prototype.handleMouseOut = function() {
              this.setState({ bHovered: !1 });
            }),
            (e.prototype.render = function() {
              var e,
                t,
                a = ((e = this.props.reactionType),
                (t =
                  !this.props.bDisableAnimation &&
                  (this.state.bHovered || this.props.bForceAnimated)),
                S.c.STORE_CDN_URL +
                  "public/images/loyalty/reactions/" +
                  (t ? "animated" : "still") +
                  "/" +
                  e +
                  ".png");
              return v.createElement("img", {
                className: this.props.className,
                src: a,
                onMouseEnter: this.handleMouseOver,
                onMouseLeave: this.handleMouseOut
              });
            }),
            Object(s.c)([n.a], e.prototype, "handleMouseOver", null),
            Object(s.c)([n.a], e.prototype, "handleMouseOut", null),
            e
          );
        })(v.PureComponent);
      var E = (function(t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (
              n.Init(e.serviceTransport),
              (window.fnLoyalty_ShowAwardModal = function(e, t, a, r) {
                (r = r || 0),
                  n.setState({
                    bShowModal: !0,
                    fnSuccessFunc: t,
                    targetid: e,
                    ugcType: a,
                    initialSelectedReaction: r
                  });
              }),
              (n.state = {}),
              n
            );
          }
          var l;
          return (
            Object(s.d)(e, t),
            ((l = e).prototype.Init = function(e) {
              var t, a;
              l.s_LoyaltyAwardModalStore ||
                (e
                  ? (l.s_LoyaltyAwardModalStore = new m(e))
                  : ((t = Object(S.f)("loyaltystore", "application_config")),
                    (a = new o.a(S.c.WEBAPI_BASE_URL, t.webapi_token)),
                    (l.s_LoyaltyAwardModalStore = new m(
                      a.GetServiceTransport()
                    ))));
            }),
            (e.prototype.render = function() {
              var e = this,
                t = this.props.targetType,
                a = this.state,
                r = a.bShowModal,
                n = a.fnSuccessFunc,
                o = a.targetid,
                s = a.ugcType,
                i = a.initialSelectedReaction,
                c = l.s_LoyaltyAwardModalStore;
              if (!r) return null;
              c.GetAwardPointsTransferred();
              return v.createElement(y, {
                key: o,
                targetid: o,
                active: r,
                targetType: t,
                ugcType: s,
                onDismiss: function() {
                  return e.setState({ bShowModal: !1 });
                },
                onSuccess: n,
                store: l.s_LoyaltyAwardModalStore,
                initialSelectedReaction: i
              });
            }),
            (e.defaultProps = { targetType: 1 }),
            (e = l = Object(s.c)([r.a], e))
          );
        })(v.Component),
        f = ((t.default = E),
        (function(t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          var c;
          return (
            Object(s.d)(e, t),
            ((c = e).Initialize = function(e) {
              null === this.s_LoyaltyAwardModalStore &&
                (this.s_LoyaltyAwardModalStore = new m(
                  e.GetServiceTransport()
                ));
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = e.targetType,
                a = e.targetid,
                r = e.bShowModal,
                n = e.ugcType,
                o = e.initialSelectedReaction,
                s = e.onDismiss,
                i = c.s_LoyaltyAwardModalStore;
              if (null === i)
                return console.log("Store not initialized yet."), null;
              i.GetAwardPointsTransferred();
              return v.createElement(y, {
                key: a,
                targetid: a,
                active: r,
                targetType: t,
                ugcType: n,
                onDismiss: s,
                onSuccess: s,
                store: c.s_LoyaltyAwardModalStore,
                initialSelectedReaction: o
              });
            }),
            (e.s_LoyaltyAwardModalStore = null),
            (e = c = Object(s.c)([r.a], e))
          );
        })(v.Component)),
        y = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (
              e.store.SetTarget(e.targetid, e.targetType),
              (t.state = {
                selectedReaction: e.initialSelectedReaction || 0,
                ePhase: T.SELECTING
              }),
              t
            );
          }
          return (
            Object(s.d)(e, a),
            (e.prototype.render = function() {
              var t = this,
                e = this.props,
                a = e.active,
                r = e.targetType,
                n = e.ugcType,
                o = e.store,
                s = e.onDismiss,
                i = this.state,
                c = i.selectedReaction,
                l = i.ePhase,
                d = i.celebrate,
                u = (function(e, t) {
                  if (1 == e) return G;
                  switch (t) {
                    case 0:
                      return j;
                    case 1:
                      return B;
                    case 2:
                      return I;
                    case 11:
                      return M;
                    case 9:
                    case 10:
                      return P;
                    case 5:
                    case 4:
                    case 3:
                      return k;
                  }
                  return [];
                })(r, n);
              if (!a) return null;
              var m = o.GetExistingReactions(),
                _ = o.GetAwardCost(),
                p = o.GetAwardPointsTransferred(),
                w = o.GetUserPointBalance(),
                h =
                  2 == r
                    ? Object(R.d)("#GrantAwardDescription_UGC", p)
                    : Object(R.d)("#GrantAwardDescription_Review", p);
              switch (l) {
                case T.SELECTING:
                  var b = 0 === c || m.get(c),
                    E = !w || w.greaterThanOrEqual(_),
                    f = v.createElement(
                      U,
                      {
                        onClick: function() {
                          return t.setState({ ePhase: T.CONFIRM });
                        },
                        disabled: b,
                        title: Object(R.d)(
                          b
                            ? "#GrantAward_PromptTooltip"
                            : "#GrantAward_SubmitTooltip"
                        )
                      },
                      Object(R.d)(
                        b ? "#GrantAward_SelectAward" : "#GrantAward_Next"
                      )
                    ),
                    y = v.createElement(
                      v.Fragment,
                      null,
                      v.createElement(F, { description: h }),
                      v.createElement(V, null),
                      v.createElement(
                        "div",
                        { className: O.ButtonContainer },
                        u.map(function(e) {
                          return v.createElement(q, {
                            key: e,
                            reaction: e,
                            selected: e === c && !m.get(e),
                            cost: _,
                            alreadyAwarded: m.get(e),
                            onClick: function() {
                              m.get(e) ||
                                t.setState({
                                  selectedReaction: e === c ? 0 : e
                                });
                            }
                          });
                        })
                      ),
                      v.createElement(V, null),
                      v.createElement(
                        x,
                        { store: o },
                        b || E
                          ? f
                          : [
                              v.createElement(
                                "div",
                                { key: "msg", className: O.NotEnoughPoints },
                                Object(R.d)(
                                  "#GrantAward_CantAfford",
                                  w
                                    .negate()
                                    .add(_)
                                    .toNumber()
                                    .toLocaleString()
                                )
                              ),
                              v.createElement(
                                "a",
                                {
                                  key: "button",
                                  href: S.c.STORE_BASE_URL + "points/howitworks"
                                },
                                v.createElement(
                                  H,
                                  { key: "button" },
                                  Object(R.d)("#GrantAward_HowToGetPoints")
                                )
                              )
                            ]
                      )
                    );
                  break;
                case T.CONFIRM:
                case T.SUBMITTING:
                case T.DONE:
                  y = v.createElement(
                    v.Fragment,
                    null,
                    v.createElement(F, { description: h }),
                    v.createElement(V, null),
                    v.createElement(
                      "div",
                      { style: { position: "relative" } },
                      v.createElement(
                        "div",
                        {
                          className: Object(C.a)(
                            O.ConfirmContainer,
                            l === T.CONFIRM && O.Visible
                          )
                        },
                        v.createElement(D, {
                          className: O.ConfirmAwardImage,
                          reactionType: c
                        }),
                        v.createElement(
                          "div",
                          { className: O.ConfirmText },
                          Object(R.l)(
                            "#GrantAward_Confirm",
                            v.createElement(Q, null, _.toLocaleString()),
                            v.createElement(
                              "span",
                              { className: O.AwardName },
                              N(c)
                            )
                          )
                        ),
                        v.createElement(
                          "div",
                          { className: O.ConfirmText },
                          Object(R.l)(
                            "#GrantAward_Confirm_Details",
                            v.createElement(Q, null, p.toLocaleString()),
                            v.createElement(
                              "span",
                              { className: O.TimePeriod },
                              Object(R.d)(
                                "#GrantAward_Confirm_DetailsTimePeriod"
                              )
                            )
                          )
                        )
                      ),
                      v.createElement(
                        "div",
                        {
                          className: Object(C.a)(
                            O.LoadingContainer,
                            l === T.SUBMITTING && O.Visible
                          )
                        },
                        v.createElement(z, null)
                      ),
                      v.createElement(
                        "div",
                        {
                          className: Object(C.a)(
                            O.SuccessContainer,
                            l === T.DONE && O.Visible
                          )
                        },
                        v.createElement(D, {
                          className: O.ConfirmAwardImage,
                          reactionType: c
                        }),
                        v.createElement(
                          "div",
                          { className: O.SuccessText },
                          Object(R.d)("#GrantAward_Success")
                        )
                      )
                    ),
                    v.createElement(V, null),
                    v.createElement(
                      x,
                      { store: o },
                      v.createElement(
                        H,
                        {
                          onClick: function() {
                            return t.setState({ ePhase: T.SELECTING });
                          },
                          disabled: l !== T.CONFIRM
                        },
                        Object(R.d)("#GrantAward_Back")
                      ),
                      v.createElement(
                        U,
                        {
                          onClick: this.GrantAward,
                          title: Object(R.d)("#GrantAward_SubmitTooltip"),
                          disabled: l !== T.CONFIRM
                        },
                        Object(R.d)("#GrantAwardNowButton")
                      )
                    )
                  );
                  break;
                case T.ERROR:
                  var g = "";
                  switch (this.state.eResult) {
                    case 10:
                      g = Object(R.d)("#GrantAwardError_Busy");
                      break;
                    case 32:
                      g = Object(R.d)("#GrantAwardError_PersistFailed");
                      break;
                    case 8:
                      g = Object(R.d)("#GrantAwardError_InvalidParam");
                      break;
                    case 42:
                      g = Object(R.d)("#GrantAwardError_NoMatch");
                      break;
                    case 107:
                      g = Object(R.d)("#GrantAwardError_InsufficientFunds");
                      break;
                    case 15:
                      g = Object(R.d)("#GrantAwardError_AccessDenied");
                      break;
                    default:
                      g = Object(R.d)("#GrantAwardError_Fail");
                  }
                  y = v.createElement(
                    v.Fragment,
                    null,
                    v.createElement(F, { description: h }),
                    v.createElement(V, null),
                    v.createElement(
                      "div",
                      { style: { position: "relative" } },
                      v.createElement(
                        "div",
                        { className: O.ErrorContainer },
                        v.createElement("div", { className: O.ErrorText }, g)
                      )
                    ),
                    v.createElement(V, null),
                    v.createElement(
                      x,
                      { store: o },
                      v.createElement(
                        H,
                        {
                          onClick: function() {
                            return t.setState({ ePhase: T.SELECTING });
                          }
                        },
                        Object(R.d)("#GrantAward_Back")
                      )
                    )
                  );
              }
              return v.createElement(
                A.a,
                { className: O.GrantAwardModal, active: a, onDismiss: s },
                d && v.createElement(L.a, { eType: L.b.Default }),
                y
              );
            }),
            (e.prototype.GrantAward = function() {
              var a = this,
                e = this.props,
                r = e.targetid,
                t = e.store,
                n = e.onSuccess,
                o = this.state.selectedReaction;
              null !== o &&
                0 != o &&
                (this.setState({ ePhase: T.SUBMITTING }),
                t.AddReaction(o).then(function(e) {
                  var t = e.eResult;
                  e.strMessage;
                  1 == t
                    ? a.setState({ ePhase: T.DONE, celebrate: !0 }, function() {
                        return setTimeout(function() {
                          n && n(r, o);
                        }, 2e3);
                      })
                    : a.setState({ ePhase: T.ERROR, eResult: t });
                }));
            }),
            Object(s.c)([n.a], e.prototype, "GrantAward", null),
            (e = Object(s.c)([r.a], e))
          );
        })(v.Component),
        F = function(e) {
          var t = e.description;
          return v.createElement(
            "div",
            { className: O.Header },
            v.createElement(
              "div",
              { className: O.Title },
              Object(R.d)("#GrantAwardTitle")
            ),
            v.createElement("div", { className: O.Description }, t)
          );
        },
        x = Object(r.a)(function(e) {
          var t = e.store,
            a = e.children,
            r = t.GetUserPointBalance(),
            n = r && r.toNumber().toLocaleString();
          return v.createElement(
            "div",
            { className: O.Footer },
            v.createElement(
              "div",
              { className: O.Left },
              v.createElement(w.z, { className: O.BalanceIcon }),
              v.createElement(
                "div",
                { className: O.BalanceDetails },
                v.createElement(
                  "div",
                  { className: O.BalanceLabel },
                  Object(R.d)("#YourBalance")
                ),
                v.createElement("div", { className: O.BalanceAmount }, n)
              )
            ),
            v.createElement(
              "div",
              { className: O.Right },
              v.createElement(
                "div",
                { className: O.Actions },
                v.Children.map(a, function(e) {
                  return v.createElement("div", { className: O.Action }, e);
                })
              ),
              v.createElement(
                "a",
                {
                  className: O.FooterLink,
                  href: S.c.STORE_BASE_URL + "points/howitworks"
                },
                Object(R.d)("#GrantAward_PointsLink")
              )
            )
          );
        }),
        U = function(e) {
          var t = e.className,
            a = Object(s.f)(e, ["className"]);
          return v.createElement(
            _.a,
            Object(s.a)({}, a, { className: Object(C.a)(t, O.SubmitButton) })
          );
        },
        H = function(e) {
          var t = e.className,
            a = Object(s.f)(e, ["className"]);
          return v.createElement(
            _.a,
            Object(s.a)({}, a, { className: Object(C.a)(t, O.BackButton) })
          );
        },
        V = function() {
          return v.createElement("div", { className: O.Divider });
        },
        q = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (t.state = { bHovered: !1 }), t;
          }
          return (
            Object(s.d)(e, a),
            (e.prototype.handleMouseOver = function(e) {
              this.setState({ bHovered: !0 });
            }),
            (e.prototype.handleMouseOut = function() {
              this.setState({ bHovered: !1 });
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = e.reaction,
                a = e.selected,
                r = e.alreadyAwarded,
                n = e.cost,
                o = Object(s.f)(e, [
                  "reaction",
                  "selected",
                  "alreadyAwarded",
                  "cost"
                ]);
              return v.createElement(
                _.a,
                Object(s.a)(
                  {
                    type: "button",
                    onMouseEnter: this.handleMouseOver,
                    onMouseLeave: this.handleMouseOut,
                    className: Object(C.a)(
                      O.Button,
                      a && O.Selected,
                      r && O.Disabled
                    )
                  },
                  o
                ),
                v.createElement(
                  "div",
                  { className: O.IconCtn },
                  v.createElement(D, {
                    reactionType: t,
                    bForceAnimated: this.state.bHovered,
                    bDisableAnimation: r
                  })
                ),
                v.createElement("div", { className: O.Label }, N(t)),
                v.createElement(Q, { className: O.Points }, n.toLocaleString()),
                r && v.createElement(b, { className: O.IconCheckMark })
              );
            }),
            Object(s.c)([n.a], e.prototype, "handleMouseOver", null),
            Object(s.c)([n.a], e.prototype, "handleMouseOut", null),
            e
          );
        })(v.PureComponent),
        z = function() {
          return v.createElement(p.a, { size: "large", className: O.Loading });
        },
        Q = function(e) {
          var t = e.children,
            a = e.className,
            r = Object(s.f)(e, ["children", "className"]);
          return v.createElement(
            "span",
            Object(s.a)({}, r, { className: Object(C.a)(a, O.PointsAmount) }),
            v.createElement(w.z, { className: O.PointsAmountIcon }),
            t
          );
        };
    }
  }
]);
