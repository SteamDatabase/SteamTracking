/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [43],
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
          return C;
        }),
        a.d(t, "LibraryLoyaltyAwardModal", function () {
          return G;
        });
      var n = a("mrSG"),
        r = a("q1tI"),
        o = a("TyAF"),
        i = a("Jqb/"),
        s = a("ARGL"),
        c = a("TLQK"),
        l = a("bxiW"),
        d = a("lkRc"),
        u = a("WBba"),
        m = a("2lpH"),
        p = a.n(m),
        _ = a("2vnA"),
        b = a("bxBv"),
        f = a("OU48"),
        h = (function () {
          function e(e) {
            (this.m_lPointsAvailable = null),
              (this.m_bPointsBalanceLoadedOrInFlight = !1),
              (this.m_mapReactionConfiguration = new Map()),
              (this.m_bReactionConfigurationLoadedOrInFlight = !1),
              (this.m_mapExistingReactions = new Map()),
              (this.m_transport = e);
          }
          return (
            (e.prototype.BIsLoggedIn = function () {
              return d.k.logged_in;
            }),
            (e.prototype.SetTarget = function (e, t) {
              (this.m_targetID = e),
                (this.m_eTargetType = t),
                this.LoadExistingReactions();
            }),
            (e.prototype.AddReaction = function (e) {
              return Object(n.b)(this, void 0, void 0, function () {
                var t, a;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return this.BIsLoggedIn()
                        ? ((t = b.b.Init(f.a))
                            .Body()
                            .set_target_type(this.m_eTargetType),
                          t.Body().set_targetid(this.m_targetID),
                          t.Body().set_reactionid(e),
                          console.log(" ProtoBuf sending..."),
                          console.log(t),
                          console.log("Target ID is..." + t.Body().targetid()),
                          [4, f.o.AddReaction(this.m_transport, t)])
                        : [2, { eResult: 21, strMessage: "Not logged on" }];
                    case 1:
                      return (
                        1 != (a = n.sent()).GetEResult()
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
            (e.prototype.GetUserPointBalance = function () {
              return this.BIsLoggedIn()
                ? (this.m_bPointsBalanceLoadedOrInFlight ||
                    this.LoadUserPointBalance(),
                  this.m_lPointsAvailable)
                : null;
            }),
            (e.prototype.LoadUserPointBalance = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e, t;
                return Object(n.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return this.BIsLoggedIn()
                        ? ((this.m_bPointsBalanceLoadedOrInFlight = !0),
                          (e = b.b.Init(f.g)).SetBodyFields({
                            steamid: d.k.steamid,
                          }),
                          [4, f.o.GetSummary(this.m_transport, e)])
                        : [2, Promise.resolve(null)];
                    case 1:
                      return (
                        1 == (t = a.sent()).GetEResult()
                          ? (this.m_lPointsAvailable = p.a.fromString(
                              t.Body().summary().points()
                            ))
                          : console.error(
                              "Error when calling LoyaltyRewardsService.GetSummary: EResult=" +
                                t.GetEResult()
                            ),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.GetAwardConfigurations = function () {
              return (
                this.m_bReactionConfigurationLoadedOrInFlight ||
                  this.LoadAwardsConfiguration(),
                this.m_mapReactionConfiguration
              );
            }),
            (e.prototype.LoadAwardsConfiguration = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e, t, a, r, o, i;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (this.m_bReactionConfigurationLoadedOrInFlight = !0),
                        (e = b.b.Init(f.e)),
                        [4, f.o.GetReactionConfig(this.m_transport, e)]
                      );
                    case 1:
                      if (1 == (t = n.sent()).GetEResult())
                        for (
                          a = t.Body().toObject().reactions, r = 0, o = a;
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
                            t.GetEResult()
                        );
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.GetExistingReactions = function () {
              return this.m_mapExistingReactions;
            }),
            (e.prototype.LoadExistingReactions = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e,
                  t,
                  a = this;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        this.m_mapExistingReactions.clear(),
                        (e = b.b.Init(f.f))
                          .Body()
                          .set_target_type(this.m_eTargetType),
                        e.Body().set_targetid(this.m_targetID),
                        [4, f.o.GetReactions(this.m_transport, e)]
                      );
                    case 1:
                      return (
                        1 == (t = n.sent()).GetEResult()
                          ? t
                              .Body()
                              .reactionids()
                              .map(function (e) {
                                return a.m_mapExistingReactions.set(e, !0);
                              })
                          : console.error(
                              "Error when calling LoyaltyRewardsService.GetReactions: EResult=" +
                                t.GetEResult()
                            ),
                        [2]
                      );
                  }
                });
              });
            }),
            Object(n.c)([_.C.ref], e.prototype, "m_lPointsAvailable", void 0),
            Object(n.c)(
              [_.C.deep],
              e.prototype,
              "m_mapReactionConfiguration",
              void 0
            ),
            Object(n.c)(
              [_.C.deep],
              e.prototype,
              "m_mapExistingReactions",
              void 0
            ),
            e
          );
        })(),
        E = a("exH9"),
        w = a("qbgq"),
        g = a("0OaU"),
        y = a("6Y59");
      function v(e) {
        return Object(c.f)("#RewardsReaction_" + e);
      }
      var O,
        A = a("oet2"),
        R = a("Mgs7");
      a("idvb");
      !(function (e) {
        (e[(e.SELECTING = 0)] = "SELECTING"),
          (e[(e.CONFIRM = 1)] = "CONFIRM"),
          (e[(e.SUBMITTING = 2)] = "SUBMITTING"),
          (e[(e.DONE = 3)] = "DONE"),
          (e[(e.ERROR = 4)] = "ERROR");
      })(O || (O = {}));
      var C = function (e) {
          return r.createElement(
            "svg",
            Object(n.a)(
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
        },
        S = (function (e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (a.state = { bHovered: !1 }), a;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.handleMouseOver = function (e) {
              this.setState({ bHovered: !0 });
            }),
            (t.prototype.handleMouseOut = function () {
              this.setState({ bHovered: !1 });
            }),
            (t.prototype.render = function () {
              var e,
                t,
                a =
                  ((e = this.props.reactionType),
                  (t =
                    !this.props.bDisableAnimation &&
                    (this.state.bHovered || this.props.bForceAnimated)),
                  d.d.STORE_CDN_URL +
                    "public/images/loyalty/reactions/" +
                    (t ? "animated" : "still") +
                    "/" +
                    e +
                    ".png");
              return r.createElement("img", {
                className: this.props.className,
                src: a,
                onMouseEnter: this.handleMouseOver,
                onMouseLeave: this.handleMouseOut,
              });
            }),
            Object(n.c)([l.a], t.prototype, "handleMouseOver", null),
            Object(n.c)([l.a], t.prototype, "handleMouseOut", null),
            t
          );
        })(r.PureComponent);
      var T = (function (e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (
              (a.state = { targetType: t.targetType }),
              a.Init(t.serviceTransport),
              (window.fnLoyalty_ShowAwardModal = function (e, t, n, r, o) {
                o || (o = 0),
                  a.setState({
                    bShowModal: !0,
                    fnSuccessFunc: n,
                    targetid: e,
                    ugcType: r,
                    initialSelectedReaction: o,
                    targetType: t,
                  });
              }),
              (a.state = {}),
              a
            );
          }
          var a;
          return (
            Object(n.d)(t, e),
            (a = t),
            (t.prototype.Init = function (e) {
              if (!a.s_LoyaltyAwardModalStore)
                if (e) a.s_LoyaltyAwardModalStore = new h(e);
                else {
                  var t = Object(d.h)("loyaltystore", "application_config"),
                    n = new u.a(d.d.WEBAPI_BASE_URL, t.webapi_token);
                  a.s_LoyaltyAwardModalStore = new h(n.GetServiceTransport());
                }
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.state,
                n = t.bShowModal,
                o = t.targetType,
                i = t.fnSuccessFunc,
                s = t.targetid,
                c = t.ugcType,
                l = t.initialSelectedReaction,
                d = a.s_LoyaltyAwardModalStore;
              if (!n) return null;
              d.GetAwardConfigurations();
              return r.createElement(N, {
                key: s,
                targetid: s,
                active: n,
                targetType: o,
                ugcType: c,
                onDismiss: function () {
                  return e.setState({ bShowModal: !1 });
                },
                onSuccess: i,
                store: a.s_LoyaltyAwardModalStore,
                initialSelectedReaction: l,
              });
            }),
            (t.defaultProps = { targetType: 1 }),
            (t = a = Object(n.c)([o.a], t))
          );
        })(r.Component),
        G =
          ((t.default = T),
          (function (e) {
            function t(t) {
              return e.call(this, t) || this;
            }
            var a;
            return (
              Object(n.d)(t, e),
              (a = t),
              (t.Initialize = function (e) {
                null === this.s_LoyaltyAwardModalStore &&
                  (this.s_LoyaltyAwardModalStore = new h(
                    e.GetServiceTransport()
                  ));
              }),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.targetType,
                  n = e.targetid,
                  o = e.bShowModal,
                  i = e.ugcType,
                  s = e.initialSelectedReaction,
                  c = e.onDismiss,
                  l = a.s_LoyaltyAwardModalStore;
                if (null === l)
                  return console.log("Store not initialized yet."), null;
                l.GetAwardConfigurations();
                return r.createElement(N, {
                  key: n,
                  targetid: n,
                  active: o,
                  targetType: t,
                  ugcType: i,
                  onDismiss: c,
                  onSuccess: c,
                  store: a.s_LoyaltyAwardModalStore,
                  initialSelectedReaction: s,
                });
              }),
              (t.s_LoyaltyAwardModalStore = null),
              (t = a = Object(n.c)([o.a], t))
            );
          })(r.Component)),
        N = (function (e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (
              t.store.SetTarget(t.targetid, t.targetType),
              (a.state = {
                selectedReaction: t.initialSelectedReaction || 0,
                ePhase: O.SELECTING,
              }),
              a
            );
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                a = t.active,
                n = t.targetType,
                o = t.ugcType,
                l = t.store,
                u = t.onDismiss,
                m = this.state,
                p = m.selectedReaction,
                _ = m.ePhase,
                b = m.celebrate;
              if (!a) return null;
              var f,
                h = l.GetExistingReactions(),
                w = l.GetAwardConfigurations(),
                g = l.GetUserPointBalance(),
                y = (function (e, t, a) {
                  var n = [];
                  return (
                    e.forEach(function (e) {
                      if (e.valid_target_types.includes(t))
                        switch (t) {
                          case 1:
                            n.push(e.reactionid);
                            break;
                          case 2:
                            e.valid_ugc_types.includes(a) &&
                              n.push(e.reactionid);
                            break;
                          case 3:
                          case 4:
                          case 5:
                            n.push(e.reactionid);
                        }
                    }),
                    n
                  );
                })(w, n, o),
                C = 0 === p ? null : w.get(p),
                T = C ? C.points_cost : 0,
                G = C ? C.points_transferred : 0,
                N = "";
              switch (n) {
                case 1:
                  N = Object(c.f)("#GrantAwardDescription_Review");
                  break;
                case 2:
                  N = Object(c.f)("#GrantAwardDescription_UGC");
                  break;
                case 3:
                  N = Object(c.f)("#GrantAwardDescription_Profile");
                  break;
                case 4:
                  N = Object(c.f)("#GrantAwardDescription_ForumTopic");
                  break;
                case 5:
                  N = Object(c.f)("#GrantAwardDescription_Comment");
              }
              switch (_) {
                case O.SELECTING:
                  var P = 0 === p || h.get(p),
                    D = !g || g.greaterThanOrEqual(T),
                    F = r.createElement(
                      R.q,
                      {
                        onClick: function () {
                          return e.setState({ ePhase: O.CONFIRM });
                        },
                        disabled: P,
                        title: Object(c.f)(
                          P
                            ? "#GrantAward_PromptTooltip"
                            : "#GrantAward_SubmitTooltip"
                        ),
                      },
                      Object(c.f)(
                        P ? "#GrantAward_SelectAward" : "#GrantAward_Next"
                      )
                    );
                  f = r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(L, { description: N }),
                    r.createElement(I, null),
                    r.createElement(
                      "div",
                      { className: s.ButtonContainer },
                      y.map(function (t) {
                        return r.createElement(B, {
                          key: t,
                          reaction: t,
                          selected: t === p && !h.get(t),
                          cost: w.get(t).points_cost,
                          alreadyAwarded: h.get(t),
                          onClick: function () {
                            h.get(t) ||
                              e.setState({ selectedReaction: t === p ? 0 : t });
                          },
                        });
                      })
                    ),
                    r.createElement(I, null),
                    r.createElement(
                      j,
                      { store: l },
                      P || D
                        ? F
                        : [
                            r.createElement(
                              "div",
                              { key: "msg", className: s.NotEnoughPoints },
                              Object(c.f)(
                                "#GrantAward_CantAfford",
                                g.negate().add(T).toNumber().toLocaleString()
                              )
                            ),
                            r.createElement(
                              "a",
                              {
                                key: "button",
                                href: d.d.STORE_BASE_URL + "points/howitworks",
                              },
                              r.createElement(
                                R.d,
                                { key: "button" },
                                Object(c.f)("#GrantAward_HowToGetPoints")
                              )
                            ),
                          ]
                    )
                  );
                  break;
                case O.CONFIRM:
                case O.SUBMITTING:
                case O.DONE:
                  f = r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(L, { description: N }),
                    r.createElement(I, null),
                    r.createElement(
                      "div",
                      { style: { position: "relative" } },
                      r.createElement(
                        "div",
                        {
                          className: Object(E.a)(
                            s.ConfirmContainer,
                            _ === O.CONFIRM && s.Visible
                          ),
                        },
                        r.createElement(S, {
                          className: s.ConfirmAwardImage,
                          reactionType: p,
                        }),
                        r.createElement(
                          "div",
                          { className: s.ConfirmText },
                          Object(c.n)(
                            "#GrantAward_Confirm",
                            r.createElement(k, null, T.toLocaleString()),
                            r.createElement(
                              "span",
                              { className: s.AwardName },
                              v(p)
                            )
                          )
                        ),
                        r.createElement(
                          "div",
                          { className: s.ConfirmText },
                          Object(c.n)(
                            "#GrantAward_Confirm_Details",
                            r.createElement(k, null, G.toLocaleString()),
                            r.createElement(
                              "span",
                              { className: s.TimePeriod },
                              Object(c.f)(
                                "#GrantAward_Confirm_DetailsTimePeriod"
                              )
                            )
                          )
                        )
                      ),
                      r.createElement(
                        "div",
                        {
                          className: Object(E.a)(
                            s.LoadingContainer,
                            _ === O.SUBMITTING && s.Visible
                          ),
                        },
                        r.createElement(M, null)
                      ),
                      r.createElement(
                        "div",
                        {
                          className: Object(E.a)(
                            s.SuccessContainer,
                            _ === O.DONE && s.Visible
                          ),
                        },
                        r.createElement(S, {
                          className: s.ConfirmAwardImage,
                          reactionType: p,
                        }),
                        r.createElement(
                          "div",
                          { className: s.SuccessText },
                          Object(c.f)("#GrantAward_Success")
                        )
                      )
                    ),
                    r.createElement(I, null),
                    r.createElement(
                      j,
                      { store: l },
                      r.createElement(
                        R.d,
                        {
                          onClick: function () {
                            return e.setState({ ePhase: O.SELECTING });
                          },
                          disabled: _ !== O.CONFIRM,
                        },
                        Object(c.f)("#GrantAward_Back")
                      ),
                      r.createElement(
                        R.q,
                        {
                          onClick: this.GrantAward,
                          title: Object(c.f)("#GrantAward_SubmitTooltip"),
                          disabled: _ !== O.CONFIRM,
                        },
                        Object(c.f)("#GrantAwardNowButton")
                      )
                    )
                  );
                  break;
                case O.ERROR:
                  var x = "";
                  switch (this.state.eResult) {
                    case 10:
                      x = Object(c.f)("#GrantAwardError_Busy");
                      break;
                    case 32:
                      x = Object(c.f)("#GrantAwardError_PersistFailed");
                      break;
                    case 8:
                      x = Object(c.f)("#GrantAwardError_InvalidParam");
                      break;
                    case 42:
                      x = Object(c.f)("#GrantAwardError_NoMatch");
                      break;
                    case 107:
                      x = Object(c.f)("#GrantAwardError_InsufficientFunds");
                      break;
                    case 15:
                      x = Object(c.f)("#GrantAwardError_AccessDenied");
                      break;
                    case 21:
                      x = Object(c.f)("#GrantAwardError_NotLoggedOn");
                      break;
                    default:
                      x = Object(c.f)("#GrantAwardError_Fail");
                  }
                  f = r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(L, { description: N }),
                    r.createElement(I, null),
                    r.createElement(
                      "div",
                      { style: { position: "relative" } },
                      r.createElement(
                        "div",
                        { className: s.ErrorContainer },
                        r.createElement("div", { className: s.ErrorText }, x)
                      )
                    ),
                    r.createElement(I, null),
                    r.createElement(
                      j,
                      { store: l },
                      r.createElement(
                        R.d,
                        {
                          onClick: function () {
                            return e.setState({ ePhase: O.SELECTING });
                          },
                        },
                        Object(c.f)("#GrantAward_Back")
                      )
                    )
                  );
              }
              return r.createElement(
                i.b,
                { className: s.GrantAwardModal, active: a, onDismiss: u },
                b && r.createElement(A.a, { eType: A.b.Default }),
                f
              );
            }),
            (t.prototype.GrantAward = function () {
              var e = this,
                t = this.props,
                a = t.targetid,
                n = t.store,
                r = t.onSuccess,
                o = this.state.selectedReaction;
              null !== o &&
                0 != o &&
                (this.setState({ ePhase: O.SUBMITTING }),
                n.AddReaction(o).then(function (t) {
                  var n = t.eResult;
                  t.strMessage;
                  1 == n
                    ? e.setState(
                        { ePhase: O.DONE, celebrate: !0 },
                        function () {
                          return setTimeout(function () {
                            r && r(a, o);
                          }, 2e3);
                        }
                      )
                    : e.setState({ ePhase: O.ERROR, eResult: n });
                }));
            }),
            Object(n.c)([l.a], t.prototype, "GrantAward", null),
            (t = Object(n.c)([o.a], t))
          );
        })(r.Component),
        L = function (e) {
          var t = e.description;
          return r.createElement(
            "div",
            { className: s.Header },
            r.createElement(
              "div",
              { className: s.Title },
              Object(c.f)("#GrantAwardTitle")
            ),
            r.createElement("div", { className: s.Description }, t)
          );
        },
        j = Object(o.a)(function (e) {
          var t = e.store,
            a = e.children,
            n = t.GetUserPointBalance(),
            o = n && n.toNumber().toLocaleString();
          return r.createElement(
            "div",
            { className: s.Footer },
            r.createElement(
              "div",
              { className: s.Left },
              r.createElement(y.H, { className: s.BalanceIcon }),
              r.createElement(
                "div",
                { className: s.BalanceDetails },
                r.createElement(
                  "div",
                  { className: s.BalanceLabel },
                  Object(c.f)("#YourBalance")
                ),
                r.createElement("div", { className: s.BalanceAmount }, o)
              )
            ),
            r.createElement(
              "div",
              { className: s.Right },
              r.createElement(
                "div",
                { className: s.Actions },
                r.Children.map(a, function (e) {
                  return r.createElement("div", { className: s.Action }, e);
                })
              ),
              r.createElement(
                "a",
                {
                  className: s.FooterLink,
                  href: d.d.STORE_BASE_URL + "points/howitworks",
                },
                Object(c.f)("#GrantAward_PointsLink")
              )
            )
          );
        }),
        I = function () {
          return r.createElement("div", { className: s.Divider });
        },
        B = (function (e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (a.state = { bHovered: !1 }), a;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.handleMouseOver = function (e) {
              this.setState({ bHovered: !0 });
            }),
            (t.prototype.handleMouseOut = function () {
              this.setState({ bHovered: !1 });
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.reaction,
                a = e.selected,
                o = e.alreadyAwarded,
                i = e.cost,
                c = Object(n.f)(e, [
                  "reaction",
                  "selected",
                  "alreadyAwarded",
                  "cost",
                ]);
              return r.createElement(
                w.a,
                Object(n.a)(
                  {
                    type: "button",
                    onMouseEnter: this.handleMouseOver,
                    onMouseLeave: this.handleMouseOut,
                    className: Object(E.a)(
                      s.Button,
                      a && s.Selected,
                      o && s.Disabled
                    ),
                  },
                  c
                ),
                r.createElement(
                  "div",
                  { className: s.IconCtn },
                  r.createElement(S, {
                    reactionType: t,
                    bForceAnimated: this.state.bHovered,
                    bDisableAnimation: o,
                  })
                ),
                r.createElement("div", { className: s.Label }, v(t)),
                r.createElement(k, { className: s.Points }, i.toLocaleString()),
                o && r.createElement(C, { className: s.IconCheckMark })
              );
            }),
            Object(n.c)([l.a], t.prototype, "handleMouseOver", null),
            Object(n.c)([l.a], t.prototype, "handleMouseOut", null),
            t
          );
        })(r.PureComponent),
        M = function () {
          return r.createElement(g.a, { size: "large", className: s.Loading });
        },
        k = function (e) {
          var t = e.children,
            a = e.className,
            o = Object(n.f)(e, ["children", "className"]);
          return r.createElement(
            "span",
            Object(n.a)({}, o, { className: Object(E.a)(a, s.PointsAmount) }),
            r.createElement(y.H, { className: s.PointsAmountIcon }),
            t
          );
        };
    },
  },
]);
