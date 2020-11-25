/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [69],
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
          return h;
        }),
        a.d(t, "LibraryLoyaltyAwardModal", function() {
          return w;
        });
      var s = a("mrSG"),
        C = a("q1tI"),
        n = a("TyAF"),
        N = a("Jqb/"),
        L = a("ARGL"),
        T = a("TLQK"),
        r = a("bxiW"),
        G = a("lkRc"),
        o = a("WBba"),
        i = a("2lpH"),
        c = a.n(i),
        l = a("2vnA"),
        d = a("bxBv"),
        u = a("OU48"),
        m = (function() {
          function e(e) {
            (this.m_lPointsAvailable = null),
              (this.m_bPointsBalanceLoadedOrInFlight = !1),
              (this.m_mapReactionConfiguration = new Map()),
              (this.m_bReactionConfigurationLoadedOrInFlight = !1),
              (this.m_mapExistingReactions = new Map()),
              (this.m_transport = e);
          }
          return (
            (e.prototype.BIsLoggedIn = function() {
              return G.i.logged_in;
            }),
            (e.prototype.SetTarget = function(e, t) {
              (this.m_targetID = e),
                (this.m_eTargetType = t),
                this.LoadExistingReactions();
            }),
            (e.prototype.AddReaction = function(n) {
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
                          t.Body().set_reactionid(n),
                          console.log(" ProtoBuf sending..."),
                          console.log(t),
                          console.log("Target ID is..." + t.Body().targetid()),
                          [4, u.m.AddReaction(this.m_transport, t)])
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
                  this.m_lPointsAvailable)
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
                            steamid: G.i.steamid
                          }),
                          [4, u.m.GetSummary(this.m_transport, t)])
                        : [2, Promise.resolve(null)];
                    case 1:
                      return (
                        1 == (a = e.sent()).GetEResult()
                          ? (this.m_lPointsAvailable = c.a.fromString(
                              a
                                .Body()
                                .summary()
                                .points()
                            ))
                          : console.error(
                              "Error when calling LoyaltyRewardsService.GetSummary: EResult=" +
                                a.GetEResult()
                            ),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.GetAwardConfigurations = function() {
              return (
                this.m_bReactionConfigurationLoadedOrInFlight ||
                  this.LoadAwardsConfiguration(),
                this.m_mapReactionConfiguration
              );
            }),
            (e.prototype.LoadAwardsConfiguration = function() {
              return Object(s.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i;
                return Object(s.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (this.m_bReactionConfigurationLoadedOrInFlight = !0),
                        (t = d.a.Init(u.e)),
                        [4, u.m.GetReactionConfig(this.m_transport, t)]
                      );
                    case 1:
                      if (1 == (a = e.sent()).GetEResult())
                        for (
                          n = a.Body().toObject().reactions, r = 0, o = n;
                          r < o.length;
                          r++
                        )
                          (i = o[r]),
                            this.m_mapReactionConfiguration.set(
                              i.reactionid,
                              i
                            );
                      else
                        console.error(
                          "Error when calling LoyaltyRewardsService.GetReactionConfig: EResult=" +
                            a.GetEResult()
                        );
                      return [2];
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
                  n = this;
                return Object(s.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        this.m_mapExistingReactions.clear(),
                        (t = d.a.Init(u.f))
                          .Body()
                          .set_target_type(this.m_eTargetType),
                        t.Body().set_targetid(this.m_targetID),
                        [4, u.m.GetReactions(this.m_transport, t)]
                      );
                    case 1:
                      return (
                        1 == (a = e.sent()).GetEResult()
                          ? a
                              .Body()
                              .reactionids()
                              .map(function(e) {
                                return n.m_mapExistingReactions.set(e, !0);
                              })
                          : console.error(
                              "Error when calling LoyaltyRewardsService.GetReactions: EResult=" +
                                a.GetEResult()
                            ),
                        [2]
                      );
                  }
                });
              });
            }),
            Object(s.c)([l.C.ref], e.prototype, "m_lPointsAvailable", void 0),
            Object(s.c)(
              [l.C.deep],
              e.prototype,
              "m_mapReactionConfiguration",
              void 0
            ),
            Object(s.c)(
              [l.C.deep],
              e.prototype,
              "m_mapExistingReactions",
              void 0
            ),
            e
          );
        })(),
        j = a("exH9"),
        _ = a("qbgq"),
        p = a("0OaU"),
        b = a("6Y59");
      function B(e) {
        return Object(T.f)("#RewardsReaction_" + e);
      }
      var I,
        f,
        M = a("oet2");
      ((f = I = I || {})[(f.SELECTING = 0)] = "SELECTING"),
        (f[(f.CONFIRM = 1)] = "CONFIRM"),
        (f[(f.SUBMITTING = 2)] = "SUBMITTING"),
        (f[(f.DONE = 3)] = "DONE"),
        (f[(f.ERROR = 4)] = "ERROR");
      var h = function(e) {
          return C.createElement(
            "svg",
            Object(s.a)(
              {
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              },
              e
            ),
            C.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              clipRule: "evenodd",
              d:
                "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM10.9577 17.254L18.8038 10.0384L16.773 7.83022L10.0706 13.9941L7.71092 11.2399L5.43271 13.1918L8.80323 17.1259C9.06802 17.4349 9.44701 17.6231 9.85327 17.6473C10.2595 17.6715 10.6582 17.5295 10.9577 17.254Z"
            })
          );
        },
        k = (function(a) {
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
                G.c.STORE_CDN_URL +
                  "public/images/loyalty/reactions/" +
                  (t ? "animated" : "still") +
                  "/" +
                  e +
                  ".png");
              return C.createElement("img", {
                className: this.props.className,
                src: a,
                onMouseEnter: this.handleMouseOver,
                onMouseLeave: this.handleMouseOut
              });
            }),
            Object(s.c)([r.a], e.prototype, "handleMouseOver", null),
            Object(s.c)([r.a], e.prototype, "handleMouseOut", null),
            e
          );
        })(C.PureComponent);
      var E = (function(t) {
          function e(e) {
            var r = t.call(this, e) || this;
            return (
              r.Init(e.serviceTransport),
              (window.fnLoyalty_ShowAwardModal = function(e, t, a, n) {
                (n = n || 0),
                  r.setState({
                    bShowModal: !0,
                    fnSuccessFunc: t,
                    targetid: e,
                    ugcType: a,
                    initialSelectedReaction: n
                  });
              }),
              (r.state = {}),
              r
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
                  : ((t = Object(G.f)("loyaltystore", "application_config")),
                    (a = new o.a(G.c.WEBAPI_BASE_URL, t.webapi_token)),
                    (l.s_LoyaltyAwardModalStore = new m(
                      a.GetServiceTransport()
                    ))));
            }),
            (e.prototype.render = function() {
              var e = this,
                t = this.props.targetType,
                a = this.state,
                n = a.bShowModal,
                r = a.fnSuccessFunc,
                o = a.targetid,
                i = a.ugcType,
                s = a.initialSelectedReaction,
                c = l.s_LoyaltyAwardModalStore;
              if (!n) return null;
              c.GetAwardConfigurations();
              return C.createElement(g, {
                key: o,
                targetid: o,
                active: n,
                targetType: t,
                ugcType: i,
                onDismiss: function() {
                  return e.setState({ bShowModal: !1 });
                },
                onSuccess: r,
                store: l.s_LoyaltyAwardModalStore,
                initialSelectedReaction: s
              });
            }),
            (e.defaultProps = { targetType: 1 }),
            (e = l = Object(s.c)([n.a], e))
          );
        })(C.Component),
        w = ((t.default = E),
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
                n = e.bShowModal,
                r = e.ugcType,
                o = e.initialSelectedReaction,
                i = e.onDismiss,
                s = c.s_LoyaltyAwardModalStore;
              if (null === s)
                return console.log("Store not initialized yet."), null;
              s.GetAwardConfigurations();
              return C.createElement(g, {
                key: a,
                targetid: a,
                active: n,
                targetType: t,
                ugcType: r,
                onDismiss: i,
                onSuccess: i,
                store: c.s_LoyaltyAwardModalStore,
                initialSelectedReaction: o
              });
            }),
            (e.s_LoyaltyAwardModalStore = null),
            (e = c = Object(s.c)([n.a], e))
          );
        })(C.Component)),
        g = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (
              e.store.SetTarget(e.targetid, e.targetType),
              (t.state = {
                selectedReaction: e.initialSelectedReaction || 0,
                ePhase: I.SELECTING
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
                n = e.targetType,
                r = e.ugcType,
                o = e.store,
                i = e.onDismiss,
                s = this.state,
                c = s.selectedReaction,
                l = s.ePhase,
                d = s.celebrate;
              if (!a) return null;
              var u,
                m,
                _,
                p = o.GetExistingReactions(),
                b = o.GetAwardConfigurations(),
                f = o.GetUserPointBalance(),
                h = ((u = n),
                (m = r),
                (_ = []),
                b.forEach(function(e) {
                  if (e.valid_target_types.includes(u))
                    switch (u) {
                      case 1:
                        _.push(e.reactionid);
                        break;
                      case 2:
                        e.valid_ugc_types.includes(m) && _.push(e.reactionid);
                        break;
                      case 3:
                        _.push(e.reactionid);
                    }
                }),
                _),
                E = 0 === c ? null : b.get(c),
                w = E ? E.points_cost : 0,
                g = E ? E.points_transferred : 0,
                y = "";
              switch (n) {
                case 1:
                  y = Object(T.f)("#GrantAwardDescription_Review");
                  break;
                case 2:
                  y = Object(T.f)("#GrantAwardDescription_UGC");
                  break;
                case 3:
                  y = Object(T.f)("#GrantAwardDescription_Profile");
              }
              switch (l) {
                case I.SELECTING:
                  var v = 0 === c || p.get(c),
                    O = !f || f.greaterThanOrEqual(w),
                    A = C.createElement(
                      F,
                      {
                        onClick: function() {
                          return t.setState({ ePhase: I.CONFIRM });
                        },
                        disabled: v,
                        title: Object(T.f)(
                          v
                            ? "#GrantAward_PromptTooltip"
                            : "#GrantAward_SubmitTooltip"
                        )
                      },
                      Object(T.f)(
                        v ? "#GrantAward_SelectAward" : "#GrantAward_Next"
                      )
                    ),
                    R = C.createElement(
                      C.Fragment,
                      null,
                      C.createElement(P, { description: y }),
                      C.createElement(U, null),
                      C.createElement(
                        "div",
                        { className: L.ButtonContainer },
                        h.map(function(e) {
                          return C.createElement(H, {
                            key: e,
                            reaction: e,
                            selected: e === c && !p.get(e),
                            cost: b.get(e).points_cost,
                            alreadyAwarded: p.get(e),
                            onClick: function() {
                              p.get(e) ||
                                t.setState({
                                  selectedReaction: e === c ? 0 : e
                                });
                            }
                          });
                        })
                      ),
                      C.createElement(U, null),
                      C.createElement(
                        D,
                        { store: o },
                        v || O
                          ? A
                          : [
                              C.createElement(
                                "div",
                                { key: "msg", className: L.NotEnoughPoints },
                                Object(T.f)(
                                  "#GrantAward_CantAfford",
                                  f
                                    .negate()
                                    .add(w)
                                    .toNumber()
                                    .toLocaleString()
                                )
                              ),
                              C.createElement(
                                "a",
                                {
                                  key: "button",
                                  href: G.c.STORE_BASE_URL + "points/howitworks"
                                },
                                C.createElement(
                                  x,
                                  { key: "button" },
                                  Object(T.f)("#GrantAward_HowToGetPoints")
                                )
                              )
                            ]
                      )
                    );
                  break;
                case I.CONFIRM:
                case I.SUBMITTING:
                case I.DONE:
                  R = C.createElement(
                    C.Fragment,
                    null,
                    C.createElement(P, { description: y }),
                    C.createElement(U, null),
                    C.createElement(
                      "div",
                      { style: { position: "relative" } },
                      C.createElement(
                        "div",
                        {
                          className: Object(j.a)(
                            L.ConfirmContainer,
                            l === I.CONFIRM && L.Visible
                          )
                        },
                        C.createElement(k, {
                          className: L.ConfirmAwardImage,
                          reactionType: c
                        }),
                        C.createElement(
                          "div",
                          { className: L.ConfirmText },
                          Object(T.n)(
                            "#GrantAward_Confirm",
                            C.createElement(q, null, w.toLocaleString()),
                            C.createElement(
                              "span",
                              { className: L.AwardName },
                              B(c)
                            )
                          )
                        ),
                        C.createElement(
                          "div",
                          { className: L.ConfirmText },
                          Object(T.n)(
                            "#GrantAward_Confirm_Details",
                            C.createElement(q, null, g.toLocaleString()),
                            C.createElement(
                              "span",
                              { className: L.TimePeriod },
                              Object(T.f)(
                                "#GrantAward_Confirm_DetailsTimePeriod"
                              )
                            )
                          )
                        )
                      ),
                      C.createElement(
                        "div",
                        {
                          className: Object(j.a)(
                            L.LoadingContainer,
                            l === I.SUBMITTING && L.Visible
                          )
                        },
                        C.createElement(V, null)
                      ),
                      C.createElement(
                        "div",
                        {
                          className: Object(j.a)(
                            L.SuccessContainer,
                            l === I.DONE && L.Visible
                          )
                        },
                        C.createElement(k, {
                          className: L.ConfirmAwardImage,
                          reactionType: c
                        }),
                        C.createElement(
                          "div",
                          { className: L.SuccessText },
                          Object(T.f)("#GrantAward_Success")
                        )
                      )
                    ),
                    C.createElement(U, null),
                    C.createElement(
                      D,
                      { store: o },
                      C.createElement(
                        x,
                        {
                          onClick: function() {
                            return t.setState({ ePhase: I.SELECTING });
                          },
                          disabled: l !== I.CONFIRM
                        },
                        Object(T.f)("#GrantAward_Back")
                      ),
                      C.createElement(
                        F,
                        {
                          onClick: this.GrantAward,
                          title: Object(T.f)("#GrantAward_SubmitTooltip"),
                          disabled: l !== I.CONFIRM
                        },
                        Object(T.f)("#GrantAwardNowButton")
                      )
                    )
                  );
                  break;
                case I.ERROR:
                  var S = "";
                  switch (this.state.eResult) {
                    case 10:
                      S = Object(T.f)("#GrantAwardError_Busy");
                      break;
                    case 32:
                      S = Object(T.f)("#GrantAwardError_PersistFailed");
                      break;
                    case 8:
                      S = Object(T.f)("#GrantAwardError_InvalidParam");
                      break;
                    case 42:
                      S = Object(T.f)("#GrantAwardError_NoMatch");
                      break;
                    case 107:
                      S = Object(T.f)("#GrantAwardError_InsufficientFunds");
                      break;
                    case 15:
                      S = Object(T.f)("#GrantAwardError_AccessDenied");
                      break;
                    default:
                      S = Object(T.f)("#GrantAwardError_Fail");
                  }
                  R = C.createElement(
                    C.Fragment,
                    null,
                    C.createElement(P, { description: y }),
                    C.createElement(U, null),
                    C.createElement(
                      "div",
                      { style: { position: "relative" } },
                      C.createElement(
                        "div",
                        { className: L.ErrorContainer },
                        C.createElement("div", { className: L.ErrorText }, S)
                      )
                    ),
                    C.createElement(U, null),
                    C.createElement(
                      D,
                      { store: o },
                      C.createElement(
                        x,
                        {
                          onClick: function() {
                            return t.setState({ ePhase: I.SELECTING });
                          }
                        },
                        Object(T.f)("#GrantAward_Back")
                      )
                    )
                  );
              }
              return C.createElement(
                N.a,
                { className: L.GrantAwardModal, active: a, onDismiss: i },
                d && C.createElement(M.a, { eType: M.b.Default }),
                R
              );
            }),
            (e.prototype.GrantAward = function() {
              var a = this,
                e = this.props,
                n = e.targetid,
                t = e.store,
                r = e.onSuccess,
                o = this.state.selectedReaction;
              null !== o &&
                0 != o &&
                (this.setState({ ePhase: I.SUBMITTING }),
                t.AddReaction(o).then(function(e) {
                  var t = e.eResult;
                  e.strMessage;
                  1 == t
                    ? a.setState({ ePhase: I.DONE, celebrate: !0 }, function() {
                        return setTimeout(function() {
                          r && r(n, o);
                        }, 2e3);
                      })
                    : a.setState({ ePhase: I.ERROR, eResult: t });
                }));
            }),
            Object(s.c)([r.a], e.prototype, "GrantAward", null),
            (e = Object(s.c)([n.a], e))
          );
        })(C.Component),
        P = function(e) {
          var t = e.description;
          return C.createElement(
            "div",
            { className: L.Header },
            C.createElement(
              "div",
              { className: L.Title },
              Object(T.f)("#GrantAwardTitle")
            ),
            C.createElement("div", { className: L.Description }, t)
          );
        },
        D = Object(n.a)(function(e) {
          var t = e.store,
            a = e.children,
            n = t.GetUserPointBalance(),
            r = n && n.toNumber().toLocaleString();
          return C.createElement(
            "div",
            { className: L.Footer },
            C.createElement(
              "div",
              { className: L.Left },
              C.createElement(b.E, { className: L.BalanceIcon }),
              C.createElement(
                "div",
                { className: L.BalanceDetails },
                C.createElement(
                  "div",
                  { className: L.BalanceLabel },
                  Object(T.f)("#YourBalance")
                ),
                C.createElement("div", { className: L.BalanceAmount }, r)
              )
            ),
            C.createElement(
              "div",
              { className: L.Right },
              C.createElement(
                "div",
                { className: L.Actions },
                C.Children.map(a, function(e) {
                  return C.createElement("div", { className: L.Action }, e);
                })
              ),
              C.createElement(
                "a",
                {
                  className: L.FooterLink,
                  href: G.c.STORE_BASE_URL + "points/howitworks"
                },
                Object(T.f)("#GrantAward_PointsLink")
              )
            )
          );
        }),
        F = function(e) {
          var t = e.className,
            a = Object(s.f)(e, ["className"]);
          return C.createElement(
            _.a,
            Object(s.a)({}, a, { className: Object(j.a)(t, L.SubmitButton) })
          );
        },
        x = function(e) {
          var t = e.className,
            a = Object(s.f)(e, ["className"]);
          return C.createElement(
            _.a,
            Object(s.a)({}, a, { className: Object(j.a)(t, L.BackButton) })
          );
        },
        U = function() {
          return C.createElement("div", { className: L.Divider });
        },
        H = (function(a) {
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
                n = e.alreadyAwarded,
                r = e.cost,
                o = Object(s.f)(e, [
                  "reaction",
                  "selected",
                  "alreadyAwarded",
                  "cost"
                ]);
              return C.createElement(
                _.a,
                Object(s.a)(
                  {
                    type: "button",
                    onMouseEnter: this.handleMouseOver,
                    onMouseLeave: this.handleMouseOut,
                    className: Object(j.a)(
                      L.Button,
                      a && L.Selected,
                      n && L.Disabled
                    )
                  },
                  o
                ),
                C.createElement(
                  "div",
                  { className: L.IconCtn },
                  C.createElement(k, {
                    reactionType: t,
                    bForceAnimated: this.state.bHovered,
                    bDisableAnimation: n
                  })
                ),
                C.createElement("div", { className: L.Label }, B(t)),
                C.createElement(q, { className: L.Points }, r.toLocaleString()),
                n && C.createElement(h, { className: L.IconCheckMark })
              );
            }),
            Object(s.c)([r.a], e.prototype, "handleMouseOver", null),
            Object(s.c)([r.a], e.prototype, "handleMouseOut", null),
            e
          );
        })(C.PureComponent),
        V = function() {
          return C.createElement(p.a, { size: "large", className: L.Loading });
        },
        q = function(e) {
          var t = e.children,
            a = e.className,
            n = Object(s.f)(e, ["children", "className"]);
          return C.createElement(
            "span",
            Object(s.a)({}, n, { className: Object(j.a)(a, L.PointsAmount) }),
            C.createElement(b.E, { className: L.PointsAmountIcon }),
            t
          );
        };
    }
  }
]);
