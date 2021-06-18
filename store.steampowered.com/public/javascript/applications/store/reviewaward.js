/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [101],
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
          return L;
        }),
        a.d(t, "LibraryLoyaltyAwardModal", function () {
          return T;
        });
      var n = a("mrSG"),
        r = a("q1tI"),
        o = a("TyAF"),
        i = a("vDqi"),
        s = a.n(i),
        c = a("Jqb/"),
        l = a("ARGL"),
        d = a("TLQK"),
        u = a("bxiW"),
        m = a("lkRc"),
        b = a("WBba"),
        p = a("2lpH"),
        _ = a.n(p),
        f = a("2vnA"),
        h = a("bxBv"),
        E = a("OU48"),
        g = (function () {
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
              return m.k.logged_in;
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
                        ? ((t = h.b.Init(E.a))
                            .Body()
                            .set_target_type(this.m_eTargetType),
                          t.Body().set_targetid(this.m_targetID),
                          t.Body().set_reactionid(e),
                          console.log(" ProtoBuf sending..."),
                          console.log(t),
                          console.log("Target ID is..." + t.Body().targetid()),
                          [4, E.o.AddReaction(this.m_transport, t)])
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
                          (e = h.b.Init(E.g)).SetBodyFields({
                            steamid: m.k.steamid,
                          }),
                          [4, E.o.GetSummary(this.m_transport, e)])
                        : [2, Promise.resolve(null)];
                    case 1:
                      return (
                        1 == (t = a.sent()).GetEResult()
                          ? (this.m_lPointsAvailable = _.a.fromString(
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
                        (e = h.b.Init(E.e)),
                        [4, E.o.GetReactionConfig(this.m_transport, e)]
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
                        (e = h.b.Init(E.f))
                          .Body()
                          .set_target_type(this.m_eTargetType),
                        e.Body().set_targetid(this.m_targetID),
                        [4, E.o.GetReactions(this.m_transport, e)]
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
            Object(n.c)([f.C.ref], e.prototype, "m_lPointsAvailable", void 0),
            Object(n.c)(
              [f.C.deep],
              e.prototype,
              "m_mapReactionConfiguration",
              void 0
            ),
            Object(n.c)(
              [f.C.deep],
              e.prototype,
              "m_mapExistingReactions",
              void 0
            ),
            e
          );
        })(),
        w = a("exH9"),
        v = a("qbgq"),
        y = a("0OaU"),
        O = a("6Y59");
      function A(e) {
        return Object(d.f)("#RewardsReaction_" + e);
      }
      var R,
        C = a("oet2"),
        S = a("Mgs7");
      a("idvb");
      !(function (e) {
        (e[(e.SELECTING = 0)] = "SELECTING"),
          (e[(e.CONFIRM = 1)] = "CONFIRM"),
          (e[(e.SUBMITTING = 2)] = "SUBMITTING"),
          (e[(e.DONE = 3)] = "DONE"),
          (e[(e.ERROR = 4)] = "ERROR");
      })(R || (R = {}));
      var L = function (e) {
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
        N = (function (e) {
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
                  m.d.STORE_CDN_URL +
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
            Object(n.c)([u.a], t.prototype, "handleMouseOver", null),
            Object(n.c)([u.a], t.prototype, "handleMouseOut", null),
            t
          );
        })(r.PureComponent);
      function G() {
        return Object(n.b)(this, void 0, void 0, function () {
          var e, t;
          return Object(n.e)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  a.trys.push([0, 2, , 3]),
                  [
                    4,
                    s.a.get(
                      Object(m.f)() + "pointssummary/ajaxgetasyncconfig",
                      { withCredentials: !0 }
                    ),
                  ]
                );
              case 1:
                return 1 === (e = a.sent()).data.success
                  ? [2, e.data.data]
                  : (console.error(
                      "Failed to load async config: " + e.data.success
                    ),
                    [2, {}]);
              case 2:
                return (
                  (t = a.sent()),
                  console.error(
                    "Unexpected failure while loading async config: " + t
                  ),
                  [2, {}]
                );
              case 3:
                return [2];
            }
          });
        });
      }
      var j = (function (e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (
              (window.fnLoyalty_ShowAwardModal = function (e, n, r, o, i) {
                i || (i = 0),
                  a.Init(t.serviceTransport),
                  a.setState({
                    bShowModal: !0,
                    fnSuccessFunc: r,
                    targetid: e,
                    ugcType: o,
                    initialSelectedReaction: i,
                    targetType: n,
                  });
              }),
              (a.state = { bLoading: !0 }),
              a
            );
          }
          var a;
          return (
            Object(n.d)(t, e),
            (a = t),
            (t.prototype.Init = function (e) {
              return Object(n.b)(this, void 0, void 0, function () {
                var t, r, o, i;
                return Object(n.e)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return a.s_LoyaltyAwardModalStore
                        ? [2]
                        : e
                        ? ((a.s_LoyaltyAwardModalStore = new g(e)), [2])
                        : ((t = Object(m.h)(
                            "loyaltystore",
                            "application_config"
                          )),
                          [4, G()]);
                    case 1:
                      return (
                        (r = s.sent()),
                        (o = Object(n.a)(Object(n.a)({}, t), r)),
                        (i = new b.a(m.d.WEBAPI_BASE_URL, o.webapi_token)),
                        (a.s_LoyaltyAwardModalStore = new g(
                          i.GetServiceTransport()
                        )),
                        this.setState({ bLoading: !1 }),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.state,
                n = t.bLoading,
                o = t.bShowModal,
                i = t.targetType,
                s = t.fnSuccessFunc,
                d = t.targetid,
                u = t.ugcType,
                m = t.initialSelectedReaction,
                b = a.s_LoyaltyAwardModalStore;
              if (!o) return null;
              if (n)
                return r.createElement(
                  c.b,
                  {
                    className: l.GrantAwardModal,
                    active: !0,
                    onDismiss: function () {
                      return e.setState({ bShowModal: !1 });
                    },
                  },
                  r.createElement(B, null),
                  r.createElement(k, null),
                  r.createElement(
                    "div",
                    { className: l.InitialLoading },
                    r.createElement(
                      "div",
                      { className: Object(w.a)(l.LoadingContainer, l.Visible) },
                      r.createElement(D, null)
                    )
                  )
                );
              b.GetAwardConfigurations();
              return r.createElement(I, {
                key: d,
                targetid: d,
                active: o,
                targetType: i,
                ugcType: u,
                onDismiss: function () {
                  return e.setState({ bShowModal: !1 });
                },
                onSuccess: s,
                store: a.s_LoyaltyAwardModalStore,
                initialSelectedReaction: m,
              });
            }),
            (t.defaultProps = { targetType: 1 }),
            (t = a = Object(n.c)([o.a], t))
          );
        })(r.Component),
        T =
          ((t.default = j),
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
                  (this.s_LoyaltyAwardModalStore = new g(
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
                return r.createElement(I, {
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
        I = (function (e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (
              t.store.SetTarget(t.targetid, t.targetType),
              (a.state = {
                selectedReaction: t.initialSelectedReaction || 0,
                ePhase: R.SELECTING,
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
                i = t.store,
                s = t.onDismiss,
                u = this.state,
                b = u.selectedReaction,
                p = u.ePhase,
                _ = u.celebrate;
              if (!a) return null;
              var f,
                h = i.GetExistingReactions(),
                E = i.GetAwardConfigurations(),
                g = i.GetUserPointBalance(),
                v = (function (e, t, a) {
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
                })(E, n, o),
                y = 0 === b ? null : E.get(b),
                O = y ? y.points_cost : 0,
                L = y ? y.points_transferred : 0,
                G = "";
              switch (n) {
                case 1:
                  G = Object(d.f)("#GrantAwardDescription_Review");
                  break;
                case 2:
                  G = Object(d.f)("#GrantAwardDescription_UGC");
                  break;
                case 3:
                  G = Object(d.f)("#GrantAwardDescription_Profile");
                  break;
                case 4:
                  G = Object(d.f)("#GrantAwardDescription_ForumTopic");
                  break;
                case 5:
                  G = Object(d.f)("#GrantAwardDescription_Comment");
              }
              switch (p) {
                case R.SELECTING:
                  var j = 0 === b || h.get(b),
                    T = !g || g.greaterThanOrEqual(O),
                    I = r.createElement(
                      S.q,
                      {
                        onClick: function () {
                          return e.setState({ ePhase: R.CONFIRM });
                        },
                        disabled: j,
                        title: Object(d.f)(
                          j
                            ? "#GrantAward_PromptTooltip"
                            : "#GrantAward_SubmitTooltip"
                        ),
                      },
                      Object(d.f)(
                        j ? "#GrantAward_SelectAward" : "#GrantAward_Next"
                      )
                    );
                  f = r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(B, { description: G }),
                    r.createElement(k, null),
                    0 === v.length &&
                      r.createElement(
                        "div",
                        { className: l.InitialLoading },
                        r.createElement(
                          "div",
                          {
                            className: Object(w.a)(
                              l.LoadingContainer,
                              l.Visible
                            ),
                          },
                          r.createElement(D, null)
                        )
                      ),
                    r.createElement(
                      "div",
                      { className: l.ButtonContainer },
                      v.map(function (t) {
                        return r.createElement(P, {
                          key: t,
                          reaction: t,
                          selected: t === b && !h.get(t),
                          cost: E.get(t).points_cost,
                          alreadyAwarded: h.get(t),
                          onClick: function () {
                            h.get(t) ||
                              e.setState({ selectedReaction: t === b ? 0 : t });
                          },
                        });
                      })
                    ),
                    r.createElement(k, null),
                    r.createElement(
                      M,
                      { store: i },
                      j || T
                        ? I
                        : [
                            r.createElement(
                              "div",
                              { key: "msg", className: l.NotEnoughPoints },
                              Object(d.f)(
                                "#GrantAward_CantAfford",
                                g.negate().add(O).toNumber().toLocaleString()
                              )
                            ),
                            r.createElement(
                              "a",
                              {
                                key: "button",
                                href: m.d.STORE_BASE_URL + "points/howitworks",
                              },
                              r.createElement(
                                S.d,
                                { key: "button" },
                                Object(d.f)("#GrantAward_HowToGetPoints")
                              )
                            ),
                          ]
                    )
                  );
                  break;
                case R.CONFIRM:
                case R.SUBMITTING:
                case R.DONE:
                  f = r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(B, { description: G }),
                    r.createElement(k, null),
                    r.createElement(
                      "div",
                      { style: { position: "relative" } },
                      r.createElement(
                        "div",
                        {
                          className: Object(w.a)(
                            l.ConfirmContainer,
                            p === R.CONFIRM && l.Visible
                          ),
                        },
                        r.createElement(N, {
                          className: l.ConfirmAwardImage,
                          reactionType: b,
                        }),
                        r.createElement(
                          "div",
                          { className: l.ConfirmText },
                          Object(d.n)(
                            "#GrantAward_Confirm",
                            r.createElement(F, null, O.toLocaleString()),
                            r.createElement(
                              "span",
                              { className: l.AwardName },
                              A(b)
                            )
                          )
                        ),
                        r.createElement(
                          "div",
                          { className: l.ConfirmText },
                          Object(d.n)(
                            "#GrantAward_Confirm_Details",
                            r.createElement(F, null, L.toLocaleString()),
                            r.createElement(
                              "span",
                              { className: l.TimePeriod },
                              Object(d.f)(
                                "#GrantAward_Confirm_DetailsTimePeriod"
                              )
                            )
                          )
                        )
                      ),
                      r.createElement(
                        "div",
                        {
                          className: Object(w.a)(
                            l.LoadingContainer,
                            p === R.SUBMITTING && l.Visible
                          ),
                        },
                        r.createElement(D, null)
                      ),
                      r.createElement(
                        "div",
                        {
                          className: Object(w.a)(
                            l.SuccessContainer,
                            p === R.DONE && l.Visible
                          ),
                        },
                        r.createElement(N, {
                          className: l.ConfirmAwardImage,
                          reactionType: b,
                        }),
                        r.createElement(
                          "div",
                          { className: l.SuccessText },
                          Object(d.f)("#GrantAward_Success")
                        )
                      )
                    ),
                    r.createElement(k, null),
                    r.createElement(
                      M,
                      { store: i },
                      r.createElement(
                        S.d,
                        {
                          onClick: function () {
                            return e.setState({ ePhase: R.SELECTING });
                          },
                          disabled: p !== R.CONFIRM,
                        },
                        Object(d.f)("#GrantAward_Back")
                      ),
                      r.createElement(
                        S.q,
                        {
                          onClick: this.GrantAward,
                          title: Object(d.f)("#GrantAward_SubmitTooltip"),
                          disabled: p !== R.CONFIRM,
                        },
                        Object(d.f)("#GrantAwardNowButton")
                      )
                    )
                  );
                  break;
                case R.ERROR:
                  var x = "";
                  switch (this.state.eResult) {
                    case 10:
                      x = Object(d.f)("#GrantAwardError_Busy");
                      break;
                    case 32:
                      x = Object(d.f)("#GrantAwardError_PersistFailed");
                      break;
                    case 8:
                      x = Object(d.f)("#GrantAwardError_InvalidParam");
                      break;
                    case 42:
                      x = Object(d.f)("#GrantAwardError_NoMatch");
                      break;
                    case 107:
                      x = Object(d.f)("#GrantAwardError_InsufficientFunds");
                      break;
                    case 15:
                      x = Object(d.f)("#GrantAwardError_AccessDenied");
                      break;
                    case 21:
                      x = Object(d.f)("#GrantAwardError_NotLoggedOn");
                      break;
                    default:
                      x = Object(d.f)("#GrantAwardError_Fail");
                  }
                  f = r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(B, { description: G }),
                    r.createElement(k, null),
                    r.createElement(
                      "div",
                      { style: { position: "relative" } },
                      r.createElement(
                        "div",
                        { className: l.ErrorContainer },
                        r.createElement("div", { className: l.ErrorText }, x)
                      )
                    ),
                    r.createElement(k, null),
                    r.createElement(
                      M,
                      { store: i },
                      r.createElement(
                        S.d,
                        {
                          onClick: function () {
                            return e.setState({ ePhase: R.SELECTING });
                          },
                        },
                        Object(d.f)("#GrantAward_Back")
                      )
                    )
                  );
              }
              return r.createElement(
                c.b,
                { className: l.GrantAwardModal, active: a, onDismiss: s },
                _ && r.createElement(C.a, { eType: C.b.Default }),
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
                (this.setState({ ePhase: R.SUBMITTING }),
                n.AddReaction(o).then(function (t) {
                  var n = t.eResult;
                  t.strMessage;
                  1 == n
                    ? e.setState(
                        { ePhase: R.DONE, celebrate: !0 },
                        function () {
                          return setTimeout(function () {
                            r && r(a, o);
                          }, 2e3);
                        }
                      )
                    : e.setState({ ePhase: R.ERROR, eResult: n });
                }));
            }),
            Object(n.c)([u.a], t.prototype, "GrantAward", null),
            (t = Object(n.c)([o.a], t))
          );
        })(r.Component),
        B = function (e) {
          var t = e.description;
          return r.createElement(
            "div",
            { className: l.Header },
            r.createElement(
              "div",
              { className: l.Title },
              Object(d.f)("#GrantAwardTitle")
            ),
            r.createElement("div", { className: l.Description }, t)
          );
        },
        M = Object(o.a)(function (e) {
          var t = e.store,
            a = e.children,
            n = t.GetUserPointBalance(),
            o = n && n.toNumber().toLocaleString();
          return r.createElement(
            "div",
            { className: l.Footer },
            r.createElement(
              "div",
              { className: l.Left },
              r.createElement(O.H, { className: l.BalanceIcon }),
              r.createElement(
                "div",
                { className: l.BalanceDetails },
                r.createElement(
                  "div",
                  { className: l.BalanceLabel },
                  Object(d.f)("#YourBalance")
                ),
                r.createElement("div", { className: l.BalanceAmount }, o)
              )
            ),
            r.createElement(
              "div",
              { className: l.Right },
              r.createElement(
                "div",
                { className: l.Actions },
                r.Children.map(a, function (e) {
                  return r.createElement("div", { className: l.Action }, e);
                })
              ),
              r.createElement(
                "a",
                {
                  className: l.FooterLink,
                  href: m.d.STORE_BASE_URL + "points/howitworks",
                },
                Object(d.f)("#GrantAward_PointsLink")
              )
            )
          );
        }),
        k = function () {
          return r.createElement("div", { className: l.Divider });
        },
        P = (function (e) {
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
                s = Object(n.f)(e, [
                  "reaction",
                  "selected",
                  "alreadyAwarded",
                  "cost",
                ]);
              return r.createElement(
                v.a,
                Object(n.a)(
                  {
                    type: "button",
                    onMouseEnter: this.handleMouseOver,
                    onMouseLeave: this.handleMouseOut,
                    className: Object(w.a)(
                      l.Button,
                      a && l.Selected,
                      o && l.Disabled
                    ),
                  },
                  s
                ),
                r.createElement(
                  "div",
                  { className: l.IconCtn },
                  r.createElement(N, {
                    reactionType: t,
                    bForceAnimated: this.state.bHovered,
                    bDisableAnimation: o,
                  })
                ),
                r.createElement("div", { className: l.Label }, A(t)),
                r.createElement(F, { className: l.Points }, i.toLocaleString()),
                o && r.createElement(L, { className: l.IconCheckMark })
              );
            }),
            Object(n.c)([u.a], t.prototype, "handleMouseOver", null),
            Object(n.c)([u.a], t.prototype, "handleMouseOut", null),
            t
          );
        })(r.PureComponent),
        D = function () {
          return r.createElement(y.a, { size: "large", className: l.Loading });
        },
        F = function (e) {
          var t = e.children,
            a = e.className,
            o = Object(n.f)(e, ["children", "className"]);
          return r.createElement(
            "span",
            Object(n.a)({}, o, { className: Object(w.a)(a, l.PointsAmount) }),
            r.createElement(O.H, { className: l.PointsAmountIcon }),
            t
          );
        };
    },
  },
]);
