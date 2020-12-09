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
          return E;
        }),
        a.d(t, "LibraryLoyaltyAwardModal", function() {
          return w;
        });
      var s = a("mrSG"),
        S = a("q1tI"),
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
        I = a("exH9"),
        p = a("qbgq"),
        _ = a("0OaU"),
        h = a("6Y59");
      function j(e) {
        return Object(T.f)("#RewardsReaction_" + e);
      }
      var B,
        f,
        M = a("oet2"),
        P = a("Mgs7");
      a("idvb");
      ((f = B = B || {})[(f.SELECTING = 0)] = "SELECTING"),
        (f[(f.CONFIRM = 1)] = "CONFIRM"),
        (f[(f.SUBMITTING = 2)] = "SUBMITTING"),
        (f[(f.DONE = 3)] = "DONE"),
        (f[(f.ERROR = 4)] = "ERROR");
      var E = function(e) {
          return S.createElement(
            "svg",
            Object(s.a)(
              {
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              },
              e
            ),
            S.createElement("path", {
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
              return S.createElement("img", {
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
        })(S.PureComponent);
      var b = (function(t) {
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
              return S.createElement(g, {
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
        })(S.Component),
        w = ((t.default = b),
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
              return S.createElement(g, {
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
        })(S.Component)),
        g = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (
              e.store.SetTarget(e.targetid, e.targetType),
              (t.state = {
                selectedReaction: e.initialSelectedReaction || 0,
                ePhase: B.SELECTING
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
                p,
                _ = o.GetExistingReactions(),
                h = o.GetAwardConfigurations(),
                f = o.GetUserPointBalance(),
                E = ((u = n),
                (m = r),
                (p = []),
                h.forEach(function(e) {
                  if (e.valid_target_types.includes(u))
                    switch (u) {
                      case 1:
                        p.push(e.reactionid);
                        break;
                      case 2:
                        e.valid_ugc_types.includes(m) && p.push(e.reactionid);
                        break;
                      case 3:
                        p.push(e.reactionid);
                    }
                }),
                p),
                b = 0 === c ? null : h.get(c),
                w = b ? b.points_cost : 0,
                g = b ? b.points_transferred : 0,
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
                case B.SELECTING:
                  var v = 0 === c || _.get(c),
                    O = !f || f.greaterThanOrEqual(w),
                    A = S.createElement(
                      P.p,
                      {
                        onClick: function() {
                          return t.setState({ ePhase: B.CONFIRM });
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
                    R = S.createElement(
                      S.Fragment,
                      null,
                      S.createElement(D, { description: y }),
                      S.createElement(x, null),
                      S.createElement(
                        "div",
                        { className: L.ButtonContainer },
                        E.map(function(e) {
                          return S.createElement(U, {
                            key: e,
                            reaction: e,
                            selected: e === c && !_.get(e),
                            cost: h.get(e).points_cost,
                            alreadyAwarded: _.get(e),
                            onClick: function() {
                              _.get(e) ||
                                t.setState({
                                  selectedReaction: e === c ? 0 : e
                                });
                            }
                          });
                        })
                      ),
                      S.createElement(x, null),
                      S.createElement(
                        F,
                        { store: o },
                        v || O
                          ? A
                          : [
                              S.createElement(
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
                              S.createElement(
                                "a",
                                {
                                  key: "button",
                                  href: G.c.STORE_BASE_URL + "points/howitworks"
                                },
                                S.createElement(
                                  P.d,
                                  { key: "button" },
                                  Object(T.f)("#GrantAward_HowToGetPoints")
                                )
                              )
                            ]
                      )
                    );
                  break;
                case B.CONFIRM:
                case B.SUBMITTING:
                case B.DONE:
                  R = S.createElement(
                    S.Fragment,
                    null,
                    S.createElement(D, { description: y }),
                    S.createElement(x, null),
                    S.createElement(
                      "div",
                      { style: { position: "relative" } },
                      S.createElement(
                        "div",
                        {
                          className: Object(I.a)(
                            L.ConfirmContainer,
                            l === B.CONFIRM && L.Visible
                          )
                        },
                        S.createElement(k, {
                          className: L.ConfirmAwardImage,
                          reactionType: c
                        }),
                        S.createElement(
                          "div",
                          { className: L.ConfirmText },
                          Object(T.n)(
                            "#GrantAward_Confirm",
                            S.createElement(V, null, w.toLocaleString()),
                            S.createElement(
                              "span",
                              { className: L.AwardName },
                              j(c)
                            )
                          )
                        ),
                        S.createElement(
                          "div",
                          { className: L.ConfirmText },
                          Object(T.n)(
                            "#GrantAward_Confirm_Details",
                            S.createElement(V, null, g.toLocaleString()),
                            S.createElement(
                              "span",
                              { className: L.TimePeriod },
                              Object(T.f)(
                                "#GrantAward_Confirm_DetailsTimePeriod"
                              )
                            )
                          )
                        )
                      ),
                      S.createElement(
                        "div",
                        {
                          className: Object(I.a)(
                            L.LoadingContainer,
                            l === B.SUBMITTING && L.Visible
                          )
                        },
                        S.createElement(H, null)
                      ),
                      S.createElement(
                        "div",
                        {
                          className: Object(I.a)(
                            L.SuccessContainer,
                            l === B.DONE && L.Visible
                          )
                        },
                        S.createElement(k, {
                          className: L.ConfirmAwardImage,
                          reactionType: c
                        }),
                        S.createElement(
                          "div",
                          { className: L.SuccessText },
                          Object(T.f)("#GrantAward_Success")
                        )
                      )
                    ),
                    S.createElement(x, null),
                    S.createElement(
                      F,
                      { store: o },
                      S.createElement(
                        P.d,
                        {
                          onClick: function() {
                            return t.setState({ ePhase: B.SELECTING });
                          },
                          disabled: l !== B.CONFIRM
                        },
                        Object(T.f)("#GrantAward_Back")
                      ),
                      S.createElement(
                        P.p,
                        {
                          onClick: this.GrantAward,
                          title: Object(T.f)("#GrantAward_SubmitTooltip"),
                          disabled: l !== B.CONFIRM
                        },
                        Object(T.f)("#GrantAwardNowButton")
                      )
                    )
                  );
                  break;
                case B.ERROR:
                  var C = "";
                  switch (this.state.eResult) {
                    case 10:
                      C = Object(T.f)("#GrantAwardError_Busy");
                      break;
                    case 32:
                      C = Object(T.f)("#GrantAwardError_PersistFailed");
                      break;
                    case 8:
                      C = Object(T.f)("#GrantAwardError_InvalidParam");
                      break;
                    case 42:
                      C = Object(T.f)("#GrantAwardError_NoMatch");
                      break;
                    case 107:
                      C = Object(T.f)("#GrantAwardError_InsufficientFunds");
                      break;
                    case 15:
                      C = Object(T.f)("#GrantAwardError_AccessDenied");
                      break;
                    default:
                      C = Object(T.f)("#GrantAwardError_Fail");
                  }
                  R = S.createElement(
                    S.Fragment,
                    null,
                    S.createElement(D, { description: y }),
                    S.createElement(x, null),
                    S.createElement(
                      "div",
                      { style: { position: "relative" } },
                      S.createElement(
                        "div",
                        { className: L.ErrorContainer },
                        S.createElement("div", { className: L.ErrorText }, C)
                      )
                    ),
                    S.createElement(x, null),
                    S.createElement(
                      F,
                      { store: o },
                      S.createElement(
                        P.d,
                        {
                          onClick: function() {
                            return t.setState({ ePhase: B.SELECTING });
                          }
                        },
                        Object(T.f)("#GrantAward_Back")
                      )
                    )
                  );
              }
              return S.createElement(
                N.a,
                { className: L.GrantAwardModal, active: a, onDismiss: i },
                d && S.createElement(M.a, { eType: M.b.Default }),
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
                (this.setState({ ePhase: B.SUBMITTING }),
                t.AddReaction(o).then(function(e) {
                  var t = e.eResult;
                  e.strMessage;
                  1 == t
                    ? a.setState({ ePhase: B.DONE, celebrate: !0 }, function() {
                        return setTimeout(function() {
                          r && r(n, o);
                        }, 2e3);
                      })
                    : a.setState({ ePhase: B.ERROR, eResult: t });
                }));
            }),
            Object(s.c)([r.a], e.prototype, "GrantAward", null),
            (e = Object(s.c)([n.a], e))
          );
        })(S.Component),
        D = function(e) {
          var t = e.description;
          return S.createElement(
            "div",
            { className: L.Header },
            S.createElement(
              "div",
              { className: L.Title },
              Object(T.f)("#GrantAwardTitle")
            ),
            S.createElement("div", { className: L.Description }, t)
          );
        },
        F = Object(n.a)(function(e) {
          var t = e.store,
            a = e.children,
            n = t.GetUserPointBalance(),
            r = n && n.toNumber().toLocaleString();
          return S.createElement(
            "div",
            { className: L.Footer },
            S.createElement(
              "div",
              { className: L.Left },
              S.createElement(h.E, { className: L.BalanceIcon }),
              S.createElement(
                "div",
                { className: L.BalanceDetails },
                S.createElement(
                  "div",
                  { className: L.BalanceLabel },
                  Object(T.f)("#YourBalance")
                ),
                S.createElement("div", { className: L.BalanceAmount }, r)
              )
            ),
            S.createElement(
              "div",
              { className: L.Right },
              S.createElement(
                "div",
                { className: L.Actions },
                S.Children.map(a, function(e) {
                  return S.createElement("div", { className: L.Action }, e);
                })
              ),
              S.createElement(
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
        x = function() {
          return S.createElement("div", { className: L.Divider });
        },
        U = (function(a) {
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
              return S.createElement(
                p.a,
                Object(s.a)(
                  {
                    type: "button",
                    onMouseEnter: this.handleMouseOver,
                    onMouseLeave: this.handleMouseOut,
                    className: Object(I.a)(
                      L.Button,
                      a && L.Selected,
                      n && L.Disabled
                    )
                  },
                  o
                ),
                S.createElement(
                  "div",
                  { className: L.IconCtn },
                  S.createElement(k, {
                    reactionType: t,
                    bForceAnimated: this.state.bHovered,
                    bDisableAnimation: n
                  })
                ),
                S.createElement("div", { className: L.Label }, j(t)),
                S.createElement(V, { className: L.Points }, r.toLocaleString()),
                n && S.createElement(E, { className: L.IconCheckMark })
              );
            }),
            Object(s.c)([r.a], e.prototype, "handleMouseOver", null),
            Object(s.c)([r.a], e.prototype, "handleMouseOut", null),
            e
          );
        })(S.PureComponent),
        H = function() {
          return S.createElement(_.a, { size: "large", className: L.Loading });
        },
        V = function(e) {
          var t = e.children,
            a = e.className,
            n = Object(s.f)(e, ["children", "className"]);
          return S.createElement(
            "span",
            Object(s.a)({}, n, { className: Object(I.a)(a, L.PointsAmount) }),
            S.createElement(h.E, { className: L.PointsAmountIcon }),
            t
          );
        };
    }
  }
]);
