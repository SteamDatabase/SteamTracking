/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [90],
  {
    "0OaU": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return l;
      });
      var r = a("q1tI"),
        n = a.n(r),
        o = a("6Y59"),
        s = a("2i24"),
        i = a.n(s);
      class l extends n.a.PureComponent {
        constructor(e) {
          super(e);
        }
        AddSizeClass(e) {
          "small" == this.props.size
            ? e.push(i.a.throbber_small)
            : "medium" == this.props.size
            ? e.push(i.a.throbber_medium)
            : "xlarge" == this.props.size
            ? e.push(i.a.throbber_xlarge)
            : "xxlarge" == this.props.size
            ? e.push(i.a.throbber_xxlarge)
            : e.push(i.a.throbber_large);
        }
        render() {
          let e = [i.a.LoadingWrapper, "SteamLogoThrobber"];
          this.AddSizeClass(e),
            void 0 === this.props.string && e.push(i.a.noString),
            this.props.className && e.push(this.props.className),
            this.props.static && e.push(i.a.Static);
          let t = n.a.createElement(
            "div",
            { className: e.join(" ") },
            n.a.createElement(
              "div",
              { className: i.a.Throbber },
              n.a.createElement(o.qb, { className: i.a.base }),
              n.a.createElement(o.qb, { className: i.a.blur })
            )
          );
          return n.a.createElement(
            "div",
            {
              className:
                "center" == this.props.position
                  ? i.a.throbber_center_wrapper
                  : "",
            },
            t,
            Boolean(this.props.string) &&
              n.a.createElement(
                "div",
                { className: i.a.ThrobberText },
                this.props.string
              )
          );
        }
      }
    },
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
      var r = a("mrSG"),
        n = (a("E4Op"), a("vDqi")),
        o = a.n(n),
        s = a("TyAF"),
        i = a("q1tI"),
        l = (a("mgoM"), a("bxBv")),
        c = a("av+R"),
        d = a("qDk6"),
        m = a("Jz9t"),
        u = a("WBba"),
        b = a("OU48"),
        h = a("2lpH"),
        _ = a.n(h),
        p = a("2vnA"),
        g = a("lkRc");
      a("65aj");
      class E {
        constructor(e) {
          (this.m_lPointsAvailable = null),
            (this.m_bPointsBalanceLoadedOrInFlight = !1),
            (this.m_mapReactionConfiguration = new Map()),
            (this.m_bReactionConfigurationLoadedOrInFlight = !1),
            (this.m_mapExistingReactions = new Map()),
            (this.m_transport = e);
        }
        BIsLoggedIn() {
          return g.k.logged_in;
        }
        SetTarget(e, t) {
          (this.m_targetID = e),
            (this.m_eTargetType = t),
            this.LoadExistingReactions();
        }
        AddReaction(e) {
          return Object(r.a)(this, void 0, void 0, function* () {
            if (!this.BIsLoggedIn())
              return { eResult: 21, strMessage: "Not logged on" };
            let t = l.b.Init(b.a);
            t.Body().set_target_type(this.m_eTargetType),
              t.Body().set_targetid(this.m_targetID),
              t.Body().set_reactionid(e),
              console.log(" ProtoBuf sending..."),
              console.log(t),
              console.log("Target ID is..." + t.Body().targetid());
            let a = yield b.o.AddReaction(this.m_transport, t);
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
          return Object(r.a)(this, void 0, void 0, function* () {
            if (!this.BIsLoggedIn()) return Promise.resolve(null);
            this.m_bPointsBalanceLoadedOrInFlight = !0;
            const e = l.b.Init(b.g);
            e.SetBodyFields({ steamid: g.k.steamid });
            let t = yield b.o.GetSummary(this.m_transport, e);
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
          return Object(r.a)(this, void 0, void 0, function* () {
            this.m_bReactionConfigurationLoadedOrInFlight = !0;
            const e = l.b.Init(b.e);
            let t = yield b.o.GetReactionConfig(this.m_transport, e);
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
          return Object(r.a)(this, void 0, void 0, function* () {
            this.m_mapExistingReactions.clear();
            const e = l.b.Init(b.f);
            e.Body().set_target_type(this.m_eTargetType),
              e.Body().set_targetid(this.m_targetID);
            let t = yield b.o.GetReactions(this.m_transport, e);
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
      Object(r.b)([p.C.ref], E.prototype, "m_lPointsAvailable", void 0),
        Object(r.b)(
          [p.C.deep],
          E.prototype,
          "m_mapReactionConfiguration",
          void 0
        ),
        Object(r.b)([p.C.deep], E.prototype, "m_mapExistingReactions", void 0);
      var w = a("Mgs7"),
        f = a("Jqb/"),
        y = (a("idvb"), a("6Y59")),
        v = a("0OaU"),
        O = a("exH9"),
        A = a("TLQK"),
        C = a("opsS"),
        S = a("oet2"),
        R = a("ARGL");
      function N(e) {
        return Object(A.f)(`#RewardsReaction_${e}`);
      }
      var L,
        T,
        G,
        I = a("qbgq");
      !(function (e) {
        (e[(e.SELECTING = 0)] = "SELECTING"),
          (e[(e.CONFIRM = 1)] = "CONFIRM"),
          (e[(e.SUBMITTING = 2)] = "SUBMITTING"),
          (e[(e.DONE = 3)] = "DONE"),
          (e[(e.ERROR = 4)] = "ERROR");
      })(G || (G = {}));
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
            `${g.d.STORE_CDN_URL}public/images/loyalty/reactions/${
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
      Object(r.b)([C.b], M.prototype, "handleMouseOver", null),
        Object(r.b)([C.b], M.prototype, "handleMouseOut", null);
      let B = (L = class extends i.Component {
        constructor(e) {
          super(e),
            (window.fnLoyalty_ShowAwardModal = (t, a, r, n, o) => {
              o || (o = 0),
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
          return Object(r.a)(this, void 0, void 0, function* () {
            if (L.s_LoyaltyAwardModalStore) return;
            if (e) return void (L.s_LoyaltyAwardModalStore = new E(e));
            const t = Object(g.h)("loyaltystore", "application_config"),
              a = yield (function () {
                return Object(r.a)(this, void 0, void 0, function* () {
                  try {
                    const e = yield o.a.get(
                      `${Object(g.f)()}pointssummary/ajaxgetasyncconfig`,
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
              s = new u.a(g.d.WEBAPI_BASE_URL, n.webapi_token);
            (L.s_LoyaltyAwardModalStore = new E(s.GetServiceTransport())),
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
            l = L.s_LoyaltyAwardModalStore;
          if (!t) return null;
          if (e)
            return i.createElement(
              f.b,
              {
                className: R.GrantAwardModal,
                active: !0,
                onDismiss: () => this.setState({ bShowModal: !1 }),
              },
              i.createElement(x, null),
              i.createElement(F, null),
              i.createElement(
                "div",
                { className: R.InitialLoading },
                i.createElement(
                  "div",
                  { className: Object(O.a)(R.LoadingContainer, R.Visible) },
                  i.createElement(H, null)
                )
              )
            );
          l.GetAwardConfigurations();
          return i.createElement(P, {
            key: n,
            targetid: n,
            active: t,
            targetType: a,
            ugcType: o,
            onDismiss: () => this.setState({ bShowModal: !1 }),
            onSuccess: r,
            store: L.s_LoyaltyAwardModalStore,
            initialSelectedReaction: s,
          });
        }
      });
      (B.defaultProps = { targetType: 1 }), (B = L = Object(r.b)([s.a], B));
      t.default = B;
      let k = (T = class extends i.Component {
        constructor(e) {
          super(e);
        }
        static Initialize(e) {
          null === this.s_LoyaltyAwardModalStore &&
            (this.s_LoyaltyAwardModalStore = new E(e.GetServiceTransport()));
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
            s = T.s_LoyaltyAwardModalStore;
          if (null === s)
            return console.log("Store not initialized yet."), null;
          s.GetAwardConfigurations();
          return i.createElement(P, {
            key: t,
            targetid: t,
            active: a,
            targetType: e,
            ugcType: r,
            onDismiss: o,
            onSuccess: o,
            store: T.s_LoyaltyAwardModalStore,
            initialSelectedReaction: n,
          });
        }
      });
      (k.s_LoyaltyAwardModalStore = null), (k = T = Object(r.b)([s.a], k));
      let P = class extends i.Component {
        constructor(e) {
          super(e),
            e.store.SetTarget(e.targetid, e.targetType),
            (this.state = {
              selectedReaction: e.initialSelectedReaction || 0,
              ePhase: G.SELECTING,
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
            { selectedReaction: o, ePhase: s, celebrate: l } = this.state;
          if (!e) return null;
          const d = r.GetExistingReactions(),
            u = r.GetAwardConfigurations(),
            b = r.GetUserPointBalance(),
            h = (function (e, t, a) {
              let r = [];
              return (
                e.forEach(function (e) {
                  if (e.valid_target_types.includes(t))
                    switch (t) {
                      case 1:
                        r.push(e.reactionid);
                        break;
                      case 2:
                        e.valid_ugc_types.includes(a) && r.push(e.reactionid);
                        break;
                      case 3:
                      case 4:
                      case 5:
                        r.push(e.reactionid);
                    }
                }),
                r
              );
            })(u, t, a),
            _ = 0 === o ? null : u.get(o),
            p = _ ? _.points_cost : 0,
            E = _ ? _.points_transferred : 0;
          let y,
            v = "";
          switch (t) {
            case 1:
              v = Object(A.f)("#GrantAwardDescription_Review");
              break;
            case 2:
              v = Object(A.f)("#GrantAwardDescription_UGC");
              break;
            case 3:
              v = Object(A.f)("#GrantAwardDescription_Profile");
              break;
            case 4:
              v = Object(A.f)("#GrantAwardDescription_ForumTopic");
              break;
            case 5:
              v = Object(A.f)("#GrantAwardDescription_Comment");
          }
          switch (s) {
            case G.SELECTING:
              {
                const e = 0 === o || d.get(o),
                  t = !b || b.greaterThanOrEqual(p),
                  a = i.createElement(
                    w.F,
                    {
                      onClick: () => this.setState({ ePhase: G.CONFIRM }),
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
                y = i.createElement(
                  i.Fragment,
                  null,
                  i.createElement(x, { description: v }),
                  i.createElement(F, null),
                  0 === h.length &&
                    i.createElement(
                      "div",
                      { className: R.InitialLoading },
                      i.createElement(
                        "div",
                        {
                          className: Object(O.a)(R.LoadingContainer, R.Visible),
                        },
                        i.createElement(H, null)
                      )
                    ),
                  i.createElement(
                    m.a,
                    {
                      className: R.ButtonContainer,
                      scrollDirection: "y",
                      "flow-children": "grid",
                    },
                    h.map((e, t) =>
                      i.createElement(U, {
                        autoFocus: 0 == t,
                        key: e,
                        reaction: e,
                        selected: e === o && !d.get(e),
                        cost: u.get(e).points_cost,
                        alreadyAwarded: d.get(e),
                        onClick: () => {
                          d.get(e) ||
                            this.setState({
                              selectedReaction: e === o ? 0 : e,
                            });
                        },
                      })
                    )
                  ),
                  i.createElement(F, null),
                  i.createElement(
                    D,
                    { store: r },
                    e || t
                      ? a
                      : [
                          i.createElement(
                            "div",
                            { key: "msg", className: R.NotEnoughPoints },
                            Object(A.f)(
                              "#GrantAward_CantAfford",
                              b.negate().add(p).toNumber().toLocaleString()
                            )
                          ),
                          i.createElement(
                            c.c,
                            {
                              key: "button",
                              href: `${g.d.STORE_BASE_URL}points/howitworks`,
                            },
                            i.createElement(
                              w.f,
                              { key: "button" },
                              Object(A.f)("#GrantAward_HowToGetPoints")
                            )
                          ),
                        ]
                  )
                );
              }
              break;
            case G.CONFIRM:
            case G.SUBMITTING:
            case G.DONE:
              y = i.createElement(
                i.Fragment,
                null,
                i.createElement(x, { description: v }),
                i.createElement(F, null),
                i.createElement(
                  "div",
                  { style: { position: "relative" } },
                  i.createElement(
                    "div",
                    {
                      className: Object(O.a)(
                        R.ConfirmContainer,
                        s === G.CONFIRM && R.Visible
                      ),
                    },
                    i.createElement(M, {
                      className: R.ConfirmAwardImage,
                      reactionType: o,
                    }),
                    i.createElement(
                      "div",
                      { className: R.ConfirmTextCtn },
                      i.createElement(
                        "div",
                        { className: R.ConfirmText },
                        Object(A.m)(
                          "#GrantAward_Confirm",
                          i.createElement($, null, p.toLocaleString()),
                          i.createElement(
                            "span",
                            { className: R.AwardName },
                            N(o)
                          )
                        )
                      ),
                      i.createElement(
                        "div",
                        { className: R.ConfirmText },
                        Object(A.m)(
                          "#GrantAward_Confirm_Details",
                          i.createElement($, null, E.toLocaleString()),
                          i.createElement(
                            "span",
                            { className: R.TimePeriod },
                            Object(A.f)("#GrantAward_Confirm_DetailsTimePeriod")
                          )
                        )
                      )
                    )
                  ),
                  i.createElement(
                    "div",
                    {
                      className: Object(O.a)(
                        R.LoadingContainer,
                        s === G.SUBMITTING && R.Visible
                      ),
                    },
                    i.createElement(H, null)
                  ),
                  i.createElement(
                    "div",
                    {
                      className: Object(O.a)(
                        R.SuccessContainer,
                        s === G.DONE && R.Visible
                      ),
                    },
                    i.createElement(M, {
                      className: R.ConfirmAwardImage,
                      reactionType: o,
                    }),
                    i.createElement(
                      "div",
                      { className: R.SuccessText },
                      Object(A.f)("#GrantAward_Success")
                    )
                  )
                ),
                i.createElement(F, null),
                i.createElement(
                  D,
                  { store: r },
                  i.createElement(
                    w.f,
                    {
                      onClick: () => this.setState({ ePhase: G.SELECTING }),
                      disabled: s !== G.CONFIRM,
                    },
                    Object(A.f)("#GrantAward_Back")
                  ),
                  i.createElement(
                    w.F,
                    {
                      onClick: this.GrantAward,
                      title: Object(A.f)("#GrantAward_SubmitTooltip"),
                      disabled: s !== G.CONFIRM,
                    },
                    Object(A.f)("#GrantAwardNowButton")
                  )
                )
              );
              break;
            case G.ERROR: {
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
              y = i.createElement(
                i.Fragment,
                null,
                i.createElement(x, { description: v }),
                i.createElement(F, null),
                i.createElement(
                  "div",
                  { style: { position: "relative" } },
                  i.createElement(
                    "div",
                    { className: R.ErrorContainer },
                    i.createElement("div", { className: R.ErrorText }, e)
                  )
                ),
                i.createElement(F, null),
                i.createElement(
                  D,
                  { store: r },
                  i.createElement(
                    w.f,
                    { onClick: () => this.setState({ ePhase: G.SELECTING }) },
                    Object(A.f)("#GrantAward_Back")
                  )
                )
              );
            }
          }
          return i.createElement(
            f.b,
            { className: R.GrantAwardModal, active: e, onDismiss: n },
            i.createElement(
              f.d,
              { navID: "GrantAward", closeModal: n },
              l && i.createElement(S.a, { eType: S.b.Default }),
              y
            )
          );
        }
        GrantAward() {
          const { targetid: e, store: t, onSuccess: a } = this.props,
            { selectedReaction: r } = this.state;
          null !== r &&
            0 != r &&
            (this.setState({ ePhase: G.SUBMITTING }),
            t.AddReaction(r).then(({ eResult: t, strMessage: n }) => {
              1 == t
                ? this.setState({ ePhase: G.DONE, celebrate: !0 }, () =>
                    setTimeout(() => {
                      a && a(e, r);
                    }, 2e3)
                  )
                : this.setState({ ePhase: G.ERROR, eResult: t });
            }));
        }
      };
      Object(r.b)([C.b], P.prototype, "GrantAward", null),
        (P = Object(r.b)([s.a], P));
      const x = ({ description: e }) =>
          i.createElement(
            "div",
            { className: R.Header },
            i.createElement(
              "div",
              { className: R.Title },
              Object(A.f)("#GrantAwardTitle")
            ),
            i.createElement("div", { className: R.Description }, e)
          ),
        D = Object(s.a)(({ store: e, children: t }) => {
          const a = e.GetUserPointBalance(),
            r = a && a.toNumber().toLocaleString();
          return i.createElement(
            "div",
            { className: R.Footer },
            i.createElement(
              "div",
              { className: R.Left },
              i.createElement(y.O, { className: R.BalanceIcon }),
              i.createElement(
                "div",
                { className: R.BalanceDetails },
                i.createElement(
                  "div",
                  { className: R.BalanceLabel },
                  Object(A.f)("#YourBalance")
                ),
                i.createElement("div", { className: R.BalanceAmount }, r)
              )
            ),
            i.createElement(
              "div",
              { className: R.Right },
              i.createElement(
                d.a,
                { className: R.Actions, "flow-children": "row" },
                i.Children.map(t, (e) =>
                  i.createElement("div", { className: R.Action }, e)
                )
              ),
              i.createElement(
                "a",
                {
                  className: R.FooterLink,
                  href: `${g.d.STORE_BASE_URL}points/howitworks`,
                },
                Object(A.f)("#GrantAward_PointsLink")
              )
            )
          );
        }),
        F = () => i.createElement("div", { className: R.Divider });
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
              alreadyAwarded: n,
              cost: o,
              autoFocus: s,
            } = e,
            l = Object(r.c)(e, [
              "reaction",
              "selected",
              "alreadyAwarded",
              "cost",
              "autoFocus",
            ]);
          return i.createElement(
            I.a,
            Object.assign(
              {
                type: "button",
                onMouseEnter: this.handleMouseOver,
                onMouseLeave: this.handleMouseOut,
                className: Object(O.a)(
                  R.Button,
                  a && R.Selected,
                  n && R.Disabled
                ),
                autoFocus: s,
              },
              l
            ),
            i.createElement(
              "div",
              { className: R.IconCtn },
              i.createElement(M, {
                reactionType: t,
                bForceAnimated: this.state.bHovered,
                bDisableAnimation: n,
              })
            ),
            i.createElement(
              "div",
              { className: R.LabelCtn },
              i.createElement("div", { className: R.Label }, N(t)),
              i.createElement($, { className: R.Points }, o.toLocaleString())
            ),
            n && i.createElement(j, { className: R.IconCheckMark })
          );
        }
      }
      Object(r.b)([C.b], U.prototype, "handleMouseOver", null),
        Object(r.b)([C.b], U.prototype, "handleMouseOut", null);
      const H = () =>
          i.createElement(v.a, { size: "large", className: R.Loading }),
        $ = (e) => {
          const { children: t, className: a } = e,
            n = Object(r.c)(e, ["children", "className"]);
          return i.createElement(
            "span",
            Object.assign({}, n, { className: Object(O.a)(a, R.PointsAmount) }),
            i.createElement(y.O, { className: R.PointsAmountIcon }),
            t
          );
        };
    },
  },
]);
