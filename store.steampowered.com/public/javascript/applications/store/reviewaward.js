/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [41],
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
          return h;
        }),
        a.d(t, "LibraryLoyaltyAwardModal", function() {
          return w;
        });
      var s = a("mrSG"),
        S = a("q1tI"),
        n = a("TyAF"),
        T = a("Jqb/"),
        G = a("ARGL"),
        N = a("TLQK"),
        r = a("bxiW"),
        L = a("lkRc"),
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
              return L.i.logged_in;
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
                          [4, u.o.AddReaction(this.m_transport, t)])
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
                            steamid: L.i.steamid
                          }),
                          [4, u.o.GetSummary(this.m_transport, t)])
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
                        [4, u.o.GetReactionConfig(this.m_transport, t)]
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
                        [4, u.o.GetReactions(this.m_transport, t)]
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
        p = a("qbgq"),
        _ = a("0OaU"),
        f = a("6Y59");
      function I(e) {
        return Object(N.f)("#RewardsReaction_" + e);
      }
      var B,
        b,
        M = a("oet2"),
        k = a("Mgs7");
      a("idvb");
      ((b = B = B || {})[(b.SELECTING = 0)] = "SELECTING"),
        (b[(b.CONFIRM = 1)] = "CONFIRM"),
        (b[(b.SUBMITTING = 2)] = "SUBMITTING"),
        (b[(b.DONE = 3)] = "DONE"),
        (b[(b.ERROR = 4)] = "ERROR");
      var h = function(e) {
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
        P = (function(a) {
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
                L.c.STORE_CDN_URL +
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
      var E = (function(t) {
          function e(e) {
            var o = t.call(this, e) || this;
            return (
              (o.state = { targetType: e.targetType }),
              o.Init(e.serviceTransport),
              (window.fnLoyalty_ShowAwardModal = function(e, t, a, n, r) {
                (r = r || 0),
                  o.setState({
                    bShowModal: !0,
                    fnSuccessFunc: a,
                    targetid: e,
                    ugcType: n,
                    initialSelectedReaction: r,
                    targetType: t
                  });
              }),
              (o.state = {}),
              o
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
                  : ((t = Object(L.f)("loyaltystore", "application_config")),
                    (a = new o.a(L.c.WEBAPI_BASE_URL, t.webapi_token)),
                    (l.s_LoyaltyAwardModalStore = new m(
                      a.GetServiceTransport()
                    ))));
            }),
            (e.prototype.render = function() {
              var e = this,
                t = this.state,
                a = t.bShowModal,
                n = t.targetType,
                r = t.fnSuccessFunc,
                o = t.targetid,
                i = t.ugcType,
                s = t.initialSelectedReaction,
                c = l.s_LoyaltyAwardModalStore;
              if (!a) return null;
              c.GetAwardConfigurations();
              return S.createElement(g, {
                key: o,
                targetid: o,
                active: a,
                targetType: n,
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
                f = o.GetAwardConfigurations(),
                b = o.GetUserPointBalance(),
                h = ((u = n),
                (m = r),
                (p = []),
                f.forEach(function(e) {
                  if (e.valid_target_types.includes(u))
                    switch (u) {
                      case 1:
                        p.push(e.reactionid);
                        break;
                      case 2:
                        e.valid_ugc_types.includes(m) && p.push(e.reactionid);
                        break;
                      case 3:
                      case 4:
                      case 5:
                        p.push(e.reactionid);
                    }
                }),
                p),
                E = 0 === c ? null : f.get(c),
                w = E ? E.points_cost : 0,
                g = E ? E.points_transferred : 0,
                y = "";
              switch (n) {
                case 1:
                  y = Object(N.f)("#GrantAwardDescription_Review");
                  break;
                case 2:
                  y = Object(N.f)("#GrantAwardDescription_UGC");
                  break;
                case 3:
                  y = Object(N.f)("#GrantAwardDescription_Profile");
                  break;
                case 4:
                  y = Object(N.f)("#GrantAwardDescription_ForumTopic");
                  break;
                case 5:
                  y = Object(N.f)("#GrantAwardDescription_Comment");
              }
              switch (l) {
                case B.SELECTING:
                  var v = 0 === c || _.get(c),
                    O = !b || b.greaterThanOrEqual(w),
                    A = S.createElement(
                      k.p,
                      {
                        onClick: function() {
                          return t.setState({ ePhase: B.CONFIRM });
                        },
                        disabled: v,
                        title: Object(N.f)(
                          v
                            ? "#GrantAward_PromptTooltip"
                            : "#GrantAward_SubmitTooltip"
                        )
                      },
                      Object(N.f)(
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
                        { className: G.ButtonContainer },
                        h.map(function(e) {
                          return S.createElement(U, {
                            key: e,
                            reaction: e,
                            selected: e === c && !_.get(e),
                            cost: f.get(e).points_cost,
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
                                { key: "msg", className: G.NotEnoughPoints },
                                Object(N.f)(
                                  "#GrantAward_CantAfford",
                                  b
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
                                  href: L.c.STORE_BASE_URL + "points/howitworks"
                                },
                                S.createElement(
                                  k.d,
                                  { key: "button" },
                                  Object(N.f)("#GrantAward_HowToGetPoints")
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
                          className: Object(j.a)(
                            G.ConfirmContainer,
                            l === B.CONFIRM && G.Visible
                          )
                        },
                        S.createElement(P, {
                          className: G.ConfirmAwardImage,
                          reactionType: c
                        }),
                        S.createElement(
                          "div",
                          { className: G.ConfirmText },
                          Object(N.n)(
                            "#GrantAward_Confirm",
                            S.createElement(V, null, w.toLocaleString()),
                            S.createElement(
                              "span",
                              { className: G.AwardName },
                              I(c)
                            )
                          )
                        ),
                        S.createElement(
                          "div",
                          { className: G.ConfirmText },
                          Object(N.n)(
                            "#GrantAward_Confirm_Details",
                            S.createElement(V, null, g.toLocaleString()),
                            S.createElement(
                              "span",
                              { className: G.TimePeriod },
                              Object(N.f)(
                                "#GrantAward_Confirm_DetailsTimePeriod"
                              )
                            )
                          )
                        )
                      ),
                      S.createElement(
                        "div",
                        {
                          className: Object(j.a)(
                            G.LoadingContainer,
                            l === B.SUBMITTING && G.Visible
                          )
                        },
                        S.createElement(H, null)
                      ),
                      S.createElement(
                        "div",
                        {
                          className: Object(j.a)(
                            G.SuccessContainer,
                            l === B.DONE && G.Visible
                          )
                        },
                        S.createElement(P, {
                          className: G.ConfirmAwardImage,
                          reactionType: c
                        }),
                        S.createElement(
                          "div",
                          { className: G.SuccessText },
                          Object(N.f)("#GrantAward_Success")
                        )
                      )
                    ),
                    S.createElement(x, null),
                    S.createElement(
                      F,
                      { store: o },
                      S.createElement(
                        k.d,
                        {
                          onClick: function() {
                            return t.setState({ ePhase: B.SELECTING });
                          },
                          disabled: l !== B.CONFIRM
                        },
                        Object(N.f)("#GrantAward_Back")
                      ),
                      S.createElement(
                        k.p,
                        {
                          onClick: this.GrantAward,
                          title: Object(N.f)("#GrantAward_SubmitTooltip"),
                          disabled: l !== B.CONFIRM
                        },
                        Object(N.f)("#GrantAwardNowButton")
                      )
                    )
                  );
                  break;
                case B.ERROR:
                  var C = "";
                  switch (this.state.eResult) {
                    case 10:
                      C = Object(N.f)("#GrantAwardError_Busy");
                      break;
                    case 32:
                      C = Object(N.f)("#GrantAwardError_PersistFailed");
                      break;
                    case 8:
                      C = Object(N.f)("#GrantAwardError_InvalidParam");
                      break;
                    case 42:
                      C = Object(N.f)("#GrantAwardError_NoMatch");
                      break;
                    case 107:
                      C = Object(N.f)("#GrantAwardError_InsufficientFunds");
                      break;
                    case 15:
                      C = Object(N.f)("#GrantAwardError_AccessDenied");
                      break;
                    case 21:
                      C = Object(N.f)("#GrantAwardError_NotLoggedOn");
                      break;
                    default:
                      C = Object(N.f)("#GrantAwardError_Fail");
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
                        { className: G.ErrorContainer },
                        S.createElement("div", { className: G.ErrorText }, C)
                      )
                    ),
                    S.createElement(x, null),
                    S.createElement(
                      F,
                      { store: o },
                      S.createElement(
                        k.d,
                        {
                          onClick: function() {
                            return t.setState({ ePhase: B.SELECTING });
                          }
                        },
                        Object(N.f)("#GrantAward_Back")
                      )
                    )
                  );
              }
              return S.createElement(
                T.a,
                { className: G.GrantAwardModal, active: a, onDismiss: i },
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
            { className: G.Header },
            S.createElement(
              "div",
              { className: G.Title },
              Object(N.f)("#GrantAwardTitle")
            ),
            S.createElement("div", { className: G.Description }, t)
          );
        },
        F = Object(n.a)(function(e) {
          var t = e.store,
            a = e.children,
            n = t.GetUserPointBalance(),
            r = n && n.toNumber().toLocaleString();
          return S.createElement(
            "div",
            { className: G.Footer },
            S.createElement(
              "div",
              { className: G.Left },
              S.createElement(f.F, { className: G.BalanceIcon }),
              S.createElement(
                "div",
                { className: G.BalanceDetails },
                S.createElement(
                  "div",
                  { className: G.BalanceLabel },
                  Object(N.f)("#YourBalance")
                ),
                S.createElement("div", { className: G.BalanceAmount }, r)
              )
            ),
            S.createElement(
              "div",
              { className: G.Right },
              S.createElement(
                "div",
                { className: G.Actions },
                S.Children.map(a, function(e) {
                  return S.createElement("div", { className: G.Action }, e);
                })
              ),
              S.createElement(
                "a",
                {
                  className: G.FooterLink,
                  href: L.c.STORE_BASE_URL + "points/howitworks"
                },
                Object(N.f)("#GrantAward_PointsLink")
              )
            )
          );
        }),
        x = function() {
          return S.createElement("div", { className: G.Divider });
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
                    className: Object(j.a)(
                      G.Button,
                      a && G.Selected,
                      n && G.Disabled
                    )
                  },
                  o
                ),
                S.createElement(
                  "div",
                  { className: G.IconCtn },
                  S.createElement(P, {
                    reactionType: t,
                    bForceAnimated: this.state.bHovered,
                    bDisableAnimation: n
                  })
                ),
                S.createElement("div", { className: G.Label }, I(t)),
                S.createElement(V, { className: G.Points }, r.toLocaleString()),
                n && S.createElement(h, { className: G.IconCheckMark })
              );
            }),
            Object(s.c)([r.a], e.prototype, "handleMouseOver", null),
            Object(s.c)([r.a], e.prototype, "handleMouseOut", null),
            e
          );
        })(S.PureComponent),
        H = function() {
          return S.createElement(_.a, { size: "large", className: G.Loading });
        },
        V = function(e) {
          var t = e.children,
            a = e.className,
            n = Object(s.f)(e, ["children", "className"]);
          return S.createElement(
            "span",
            Object(s.a)({}, n, { className: Object(j.a)(a, G.PointsAmount) }),
            S.createElement(f.F, { className: G.PointsAmountIcon }),
            t
          );
        };
    }
  }
]);
