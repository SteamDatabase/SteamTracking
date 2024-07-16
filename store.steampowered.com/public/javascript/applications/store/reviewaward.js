/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7246],
  {
    15799: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        GrantAwardModal: "_2ilpH-HpvuSm6s5MWX5bA-",
        Header: "_2_vbZB-J_M1GH9js-PXnEj",
        Title: "_2yJ4jvaS0kUJdPVIPR_gld",
        Description: "_16dREqlIrGflPfbNtLGdJh",
        ButtonContainer: "JYQgsMzgbFLgarphirEoQ",
        Button: "_3M92hj6aELzceURcKR7WFu",
        Selected: "Efo_8muMPNLjjSbObMuDq",
        Disabled: "_3k_TnD8zygLxN0YOdqn9B1",
        LabelCtn: "_3jka4zmfNL8_t69ZkB-JmU",
        IconCtn: "_1fdGEFL1uEyxjfiarnOXI",
        Label: "_2iEkqauHWZiCAOo0cWqnPP",
        Points: "_3k_jxlKBddOAxgSknpHNTq",
        IconCheckMark: "_38WUBpAcqEe6Neu89Kri9T",
        Footer: "_164mmLkSJ91cXzABhIrlZq",
        Left: "_1v0jLHAK-8P4IONBwuF4kv",
        BalanceIcon: "_3VvvB-r8dZsAaPGZ2nsi1A",
        BalanceDetails: "_209Gyxysjz0vcGVVWuh_Xc",
        BalanceLabel: "_2u9RZJXJSDg3e-J_EX1exE",
        BalanceAmount: "_1O3FSoJxkQYLv1MB6H7QNy",
        Right: "_1hgRCff96-fQY4zKEKUkac",
        Actions: "_1-AT2x5dQpwoR2WGoLgbhi",
        Action: "_1Beae_Paey3Y7zly_GQZpI",
        FooterLink: "KId8dCUFbYh_bz-jozERD",
        Divider: "_105pyOdHwQJP6rdcKymwUq",
        ConfirmContainer: "_3rAoeyoUq23O8OYP09P1oz",
        ConfirmAwardImage: "_1ARgx7wEEFOEolu5lBhrk-",
        ConfirmTextCtn: "j0Jt4NEMft-y_QAF5NFFh",
        ConfirmText: "_1uA9QkRBqGe3Xt5tlGGhlU",
        AwardName: "_25N0xPcslHWWCQovL3Ycpk",
        TimePeriod: "_6mEUOxWKweU9C1C2VmgsZ",
        Visible: "_2QQTWF2AuPKh-8O0fgjl3b",
        LoadingContainer: "_1hKG3O3_MI7rp8_HJ7_0fV",
        SuccessContainer: "Uz_0uByMqbJfo6n5oW71y",
        SuccessText: "_1kQzNssyGs4FwglLbkE3mx",
        InitialLoading: "_1ZKr7z5ZdQghkZZCnjx455",
        ErrorContainer: "_1SebPOeiRaEqfXHg_dsaYQ",
        ErrorText: "ok8moMj5E4XI25uTRhAHN",
        PointsAmount: "_1WCEAVbVX-TuOWAkFll4DS",
        PointsAmountIcon: "_3-jpV0SaW4qH2i8S7BXeAB",
        NotEnoughPoints: "_2VkAejyr5j-VMhlWHIoMvK",
      };
    },
    79365: (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, {
          CheckmarkCircle: () => M,
          LibraryLoyaltyAwardModal: () => k,
          default: () => B,
        });
      var n = a(34629),
        r = a(41735),
        s = a.n(r),
        o = a(75844),
        i = a(90626),
        l = a(71513),
        c = a(32381),
        d = a(92022),
        m = a(72034),
        u = a(38506),
        E = a(14947),
        g = a(56545),
        h = a(78327),
        p = a(83935);
      class _ {
        m_transport;
        m_lPointsAvailable = null;
        m_bPointsBalanceLoadedOrInFlight = !1;
        m_mapReactionConfiguration = new Map();
        m_bReactionConfigurationLoadedOrInFlight = !1;
        m_eTargetType;
        m_targetID;
        m_mapExistingReactions = new Map();
        constructor(e) {
          (0, E.Gn)(this), (this.m_transport = e);
        }
        BIsLoggedIn() {
          return h.iA.logged_in;
        }
        async SetTarget(e, t) {
          return (
            (this.m_targetID = e),
            (this.m_eTargetType = t),
            this.LoadExistingReactions()
          );
        }
        async AddReaction(e) {
          if (!this.BIsLoggedIn())
            return { eResult: 21, strMessage: "Not logged on" };
          let t = g.w.Init(p.RY);
          t.Body().set_target_type(this.m_eTargetType),
            t.Body().set_targetid(this.m_targetID),
            t.Body().set_reactionid(e),
            console.log(" ProtoBuf sending..."),
            console.log(t),
            console.log("Target ID is..." + t.Body().targetid());
          let a = await p.a9.AddReaction(this.m_transport, t);
          return (
            1 == a.GetEResult() && (this.m_bPointsBalanceLoadedOrInFlight = !1),
            { eResult: a.GetEResult(), strMessage: "" }
          );
        }
        GetUserPointBalance() {
          return this.BIsLoggedIn()
            ? (this.m_bPointsBalanceLoadedOrInFlight ||
                this.LoadUserPointBalance(),
              this.m_lPointsAvailable)
            : null;
        }
        async LoadUserPointBalance() {
          if (!this.BIsLoggedIn()) return Promise.resolve(null);
          this.m_bPointsBalanceLoadedOrInFlight = !0;
          const e = g.w.Init(p.pt);
          e.SetBodyFields({ steamid: h.iA.steamid });
          let t = await p.a9.GetSummary(this.m_transport, e);
          1 == t.GetEResult()
            ? (this.m_lPointsAvailable = u.A.fromString(
                t.Body().summary().points(),
              ))
            : console.error(
                `Error when calling LoyaltyRewardsService.GetSummary: EResult=${t.GetEResult()}`,
              );
        }
        GetAwardConfigurations() {
          return (
            this.m_bReactionConfigurationLoadedOrInFlight ||
              this.LoadAwardsConfiguration(),
            this.m_mapReactionConfiguration
          );
        }
        async LoadAwardsConfiguration() {
          this.m_bReactionConfigurationLoadedOrInFlight = !0;
          const e = g.w.Init(p.Sm);
          let t = await p.a9.GetReactionConfig(this.m_transport, e);
          if (1 == t.GetEResult()) {
            let e = t.Body().toObject().reactions;
            for (const t of e)
              this.m_mapReactionConfiguration.set(t.reactionid, t);
          } else
            console.error(
              `Error when calling LoyaltyRewardsService.GetReactionConfig: EResult=${t.GetEResult()}`,
            );
        }
        GetExistingReactions() {
          return this.m_mapExistingReactions;
        }
        async LoadExistingReactions() {
          if (!this.BIsLoggedIn()) return 21;
          this.m_mapExistingReactions.clear();
          const e = g.w.Init(p.bA);
          e.Body().set_target_type(this.m_eTargetType),
            e.Body().set_targetid(this.m_targetID);
          let t = await p.a9.GetReactions(this.m_transport, e);
          return (
            1 == t.GetEResult() &&
              t
                .Body()
                .reactionids()
                .map((e) => this.m_mapExistingReactions.set(e, !0)),
            t.GetEResult()
          );
        }
      }
      (0, n.Cg)([E.sH.ref], _.prototype, "m_lPointsAvailable", void 0),
        (0, n.Cg)(
          [E.sH.deep],
          _.prototype,
          "m_mapReactionConfiguration",
          void 0,
        ),
        (0, n.Cg)([E.sH.deep], _.prototype, "m_mapExistingReactions", void 0);
      var w = a(7068),
        A = a(44325),
        y = a(12155),
        R = a(22797),
        N = a(52038),
        C = a(61859),
        S = a(56093),
        v = a(72061),
        L = a(15799);
      function b(e) {
        return (0, C.we)(`#RewardsReaction_${e}`);
      }
      var G,
        I,
        f,
        T = a(31286);
      !(function (e) {
        (e[(e.LOADING = 0)] = "LOADING"),
          (e[(e.SELECTING = 1)] = "SELECTING"),
          (e[(e.CONFIRM = 2)] = "CONFIRM"),
          (e[(e.SUBMITTING = 3)] = "SUBMITTING"),
          (e[(e.DONE = 4)] = "DONE"),
          (e[(e.ERROR = 5)] = "ERROR"),
          (e[(e.LOADING_ERROR = 6)] = "LOADING_ERROR");
      })(f || (f = {}));
      const M = (e) =>
        i.createElement(
          "svg",
          {
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          i.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM10.9577 17.254L18.8038 10.0384L16.773 7.83022L10.0706 13.9941L7.71092 11.2399L5.43271 13.1918L8.80323 17.1259C9.06802 17.4349 9.44701 17.6231 9.85327 17.6473C10.2595 17.6715 10.6582 17.5295 10.9577 17.254Z",
          }),
        );
      class O extends i.PureComponent {
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
            `${h.TS.STORE_CDN_URL}public/images/loyalty/reactions/${a ? "animated" : "still"}/${t}.png`);
          var t, a;
          return i.createElement("img", {
            className: this.props.className,
            src: e,
            onMouseEnter: this.handleMouseOver,
            onMouseLeave: this.handleMouseOut,
          });
        }
      }
      (0, n.Cg)([S.oI], O.prototype, "handleMouseOver", null),
        (0, n.Cg)([S.oI], O.prototype, "handleMouseOut", null);
      let P = class extends i.Component {
        static {
          G = this;
        }
        static s_LoyaltyAwardModalStore;
        static defaultProps = { targetType: 1 };
        constructor(e) {
          super(e),
            (window.fnLoyalty_ShowAwardModal = (t, a, n, r, s) => {
              s || (s = 0),
                this.Init(e.serviceTransport),
                this.setState({
                  bShowModal: !0,
                  fnSuccessFunc: n,
                  targetid: t,
                  ugcType: r,
                  initialSelectedReaction: s,
                  targetType: a,
                });
            }),
            (this.state = { bLoading: !0 });
        }
        async Init(e) {
          if (G.s_LoyaltyAwardModalStore) return;
          if (e) return void (G.s_LoyaltyAwardModalStore = new _(e));
          const t = {
              ...(0, h.Tc)("loyaltystore", "application_config"),
              ...(await (async function () {
                try {
                  const e = await s().get(
                    `${(0, h.xv)()}pointssummary/ajaxgetasyncconfig`,
                    { withCredentials: !0 },
                  );
                  return 1 === e.data.success
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
              })()),
            },
            a = new m.D(h.TS.WEBAPI_BASE_URL, t.webapi_token);
          (G.s_LoyaltyAwardModalStore = new _(a.GetServiceTransport())),
            this.setState({ bLoading: !1 });
        }
        render() {
          const {
            bLoading: e,
            bShowModal: t,
            targetType: a,
            fnSuccessFunc: n,
            targetid: r,
            ugcType: s,
            initialSelectedReaction: o,
          } = this.state;
          return t
            ? e
              ? i.createElement(
                  A.mt,
                  {
                    className: L.GrantAwardModal,
                    active: !0,
                    onDismiss: () => this.setState({ bShowModal: !1 }),
                  },
                  i.createElement(F, null),
                  i.createElement(H, null),
                  i.createElement(
                    "div",
                    { className: L.InitialLoading },
                    i.createElement(
                      "div",
                      { className: (0, N.A)(L.LoadingContainer, L.Visible) },
                      i.createElement(j, null),
                    ),
                  ),
                )
              : i.createElement(D, {
                  key: r,
                  targetid: r,
                  active: t,
                  targetType: a,
                  ugcType: s,
                  onDismiss: () => this.setState({ bShowModal: !1 }),
                  onSuccess: n,
                  store: G.s_LoyaltyAwardModalStore,
                  initialSelectedReaction: o,
                })
            : null;
        }
      };
      P = G = (0, n.Cg)([o.PA], P);
      const B = P;
      let k = class extends i.Component {
        static {
          I = this;
        }
        static s_LoyaltyAwardModalStore = null;
        static Initialize(e) {
          null === this.s_LoyaltyAwardModalStore &&
            (this.s_LoyaltyAwardModalStore = new _(e.GetServiceTransport()));
        }
        constructor(e) {
          super(e);
        }
        render() {
          const {
            targetType: e,
            targetid: t,
            bShowModal: a,
            ugcType: n,
            initialSelectedReaction: r,
            onDismiss: s,
          } = this.props;
          return i.createElement(D, {
            key: t,
            targetid: t,
            active: a,
            targetType: e,
            ugcType: n,
            onDismiss: s,
            onSuccess: s,
            store: I.s_LoyaltyAwardModalStore,
            initialSelectedReaction: r,
          });
        }
      };
      k = I = (0, n.Cg)([o.PA], k);
      let D = class extends i.Component {
        constructor(e) {
          super(e),
            (this.state = {
              selectedReaction: e.initialSelectedReaction || 0,
              ePhase: f.LOADING,
            });
        }
        async componentDidMount() {
          let e = await this.props.store.SetTarget(
            this.props.targetid,
            this.props.targetType,
          );
          1 == e
            ? this.setState({ ePhase: f.SELECTING })
            : this.setState({ ePhase: f.LOADING_ERROR, eResult: e });
        }
        render() {
          const {
              active: e,
              targetType: t,
              ugcType: a,
              store: n,
              onDismiss: r,
            } = this.props,
            { selectedReaction: s, ePhase: o, celebrate: c } = this.state;
          if (!e) return null;
          const m = n.GetExistingReactions(),
            u = n.GetAwardConfigurations(),
            E = n.GetUserPointBalance(),
            g = (function (e, t, a) {
              let n = [];
              return (
                e.forEach(function (e) {
                  if (e.valid_target_types.includes(t))
                    switch (t) {
                      case 1:
                      case 3:
                      case 4:
                      case 5:
                        n.push(e.reactionid);
                        break;
                      case 2:
                        e.valid_ugc_types.includes(a) && n.push(e.reactionid);
                    }
                }),
                n
              );
            })(u, t, a),
            p = 0 === s ? null : u.get(s),
            _ = p ? p.points_cost : 0,
            y = p ? p.points_transferred : 0;
          let R,
            S = "";
          switch (t) {
            case 1:
              S = (0, C.we)("#GrantAwardDescription_Review");
              break;
            case 2:
              S = (0, C.we)("#GrantAwardDescription_UGC");
              break;
            case 3:
              S = (0, C.we)("#GrantAwardDescription_Profile");
              break;
            case 4:
              S = (0, C.we)("#GrantAwardDescription_ForumTopic");
              break;
            case 5:
              S = (0, C.we)("#GrantAwardDescription_Comment");
          }
          switch (o) {
            case f.LOADING:
            case f.SELECTING:
              {
                const e = 0 === s || m.get(s),
                  t = !E || E.greaterThanOrEqual(_),
                  a = i.createElement(
                    w.jn,
                    {
                      onClick: () => this.setState({ ePhase: f.CONFIRM }),
                      disabled: e,
                      focusable: !e,
                      title: (0, C.we)(
                        e
                          ? "#GrantAward_PromptTooltip"
                          : "#GrantAward_SubmitTooltip",
                      ),
                    },
                    (0, C.we)(
                      e ? "#GrantAward_SelectAward" : "#GrantAward_Next",
                    ),
                  );
                R = i.createElement(
                  i.Fragment,
                  null,
                  i.createElement(F, { description: S }),
                  i.createElement(H, null),
                  0 === g.length &&
                    i.createElement(
                      "div",
                      { className: L.InitialLoading },
                      i.createElement(
                        "div",
                        { className: (0, N.A)(L.LoadingContainer, L.Visible) },
                        i.createElement(j, null),
                      ),
                    ),
                  i.createElement(
                    d.MS,
                    {
                      className: L.ButtonContainer,
                      scrollDirection: "y",
                      "flow-children": "grid",
                    },
                    g.map((e, t) =>
                      i.createElement(U, {
                        autoFocus: 0 == t,
                        key: e,
                        reaction: e,
                        selected: e === s && !m.get(e),
                        cost: u.get(e).points_cost,
                        alreadyAwarded: m.get(e),
                        onClick: () => {
                          m.get(e) ||
                            this.setState({
                              selectedReaction: e === s ? 0 : e,
                            });
                        },
                      }),
                    ),
                  ),
                  i.createElement(H, null),
                  i.createElement(
                    x,
                    { store: n },
                    e || t
                      ? a
                      : [
                          i.createElement(
                            "div",
                            { key: "msg", className: L.NotEnoughPoints },
                            (0, C.we)(
                              "#GrantAward_CantAfford",
                              E.negate().add(_).toNumber().toLocaleString(),
                            ),
                          ),
                          i.createElement(
                            l.Ii,
                            {
                              key: "button",
                              href: `${h.TS.STORE_BASE_URL}points/howitworks`,
                            },
                            i.createElement(
                              w.$n,
                              { key: "button" },
                              (0, C.we)("#GrantAward_HowToGetPoints"),
                            ),
                          ),
                        ],
                  ),
                );
              }
              break;
            case f.CONFIRM:
            case f.SUBMITTING:
            case f.DONE:
              R = i.createElement(
                i.Fragment,
                null,
                i.createElement(F, { description: S }),
                i.createElement(H, null),
                i.createElement(
                  "div",
                  { style: { position: "relative" } },
                  i.createElement(
                    "div",
                    {
                      className: (0, N.A)(
                        L.ConfirmContainer,
                        o === f.CONFIRM && L.Visible,
                      ),
                    },
                    i.createElement(O, {
                      className: L.ConfirmAwardImage,
                      reactionType: s,
                    }),
                    i.createElement(
                      "div",
                      { className: L.ConfirmTextCtn },
                      i.createElement(
                        "div",
                        { className: L.ConfirmText },
                        (0, C.PP)(
                          "#GrantAward_Confirm",
                          i.createElement(W, null, _.toLocaleString()),
                          i.createElement(
                            "span",
                            { className: L.AwardName },
                            b(s),
                          ),
                        ),
                      ),
                      i.createElement(
                        "div",
                        { className: L.ConfirmText },
                        (0, C.PP)(
                          "#GrantAward_Confirm_Details",
                          i.createElement(W, null, y.toLocaleString()),
                          i.createElement(
                            "span",
                            { className: L.TimePeriod },
                            (0, C.we)("#GrantAward_Confirm_DetailsTimePeriod"),
                          ),
                        ),
                      ),
                    ),
                  ),
                  i.createElement(
                    "div",
                    {
                      className: (0, N.A)(
                        L.LoadingContainer,
                        o === f.SUBMITTING && L.Visible,
                      ),
                    },
                    i.createElement(j, null),
                  ),
                  i.createElement(
                    "div",
                    {
                      className: (0, N.A)(
                        L.SuccessContainer,
                        o === f.DONE && L.Visible,
                      ),
                    },
                    i.createElement(O, {
                      className: L.ConfirmAwardImage,
                      reactionType: s,
                    }),
                    i.createElement(
                      "div",
                      { className: L.SuccessText },
                      (0, C.we)("#GrantAward_Success"),
                    ),
                  ),
                ),
                i.createElement(H, null),
                i.createElement(
                  x,
                  { store: n },
                  i.createElement(
                    w.$n,
                    {
                      onClick: () => this.setState({ ePhase: f.SELECTING }),
                      disabled: o !== f.CONFIRM,
                    },
                    (0, C.we)("#GrantAward_Back"),
                  ),
                  i.createElement(
                    w.jn,
                    {
                      onClick: this.GrantAward,
                      title: (0, C.we)("#GrantAward_SubmitTooltip"),
                      disabled: o !== f.CONFIRM,
                    },
                    (0, C.we)("#GrantAwardNowButton"),
                  ),
                ),
              );
              break;
            case f.ERROR:
              {
                let e = "";
                switch (this.state.eResult) {
                  case 10:
                    e = (0, C.we)("#GrantAwardError_Busy");
                    break;
                  case 32:
                    e = (0, C.we)("#GrantAwardError_PersistFailed");
                    break;
                  case 8:
                    e = (0, C.we)("#GrantAwardError_InvalidParam");
                    break;
                  case 42:
                    e = (0, C.we)("#GrantAwardError_NoMatch");
                    break;
                  case 107:
                    e = (0, C.we)("#GrantAwardError_InsufficientFunds");
                    break;
                  case 15:
                    e = (0, C.we)("#GrantAwardError_AccessDenied");
                    break;
                  case 21:
                    e = (0, C.we)("#GrantAwardError_NotLoggedOn");
                    break;
                  case 29:
                    e = (0, C.we)("#GrantAwardError_DuplicateRequest");
                    break;
                  default:
                    e = (0, C.we)("#GrantAwardError_Fail");
                }
                R = i.createElement(
                  i.Fragment,
                  null,
                  i.createElement(F, { description: S }),
                  i.createElement(H, null),
                  i.createElement(
                    "div",
                    { style: { position: "relative" } },
                    i.createElement(
                      "div",
                      { className: L.ErrorContainer },
                      i.createElement("div", { className: L.ErrorText }, e),
                    ),
                  ),
                  i.createElement(H, null),
                  i.createElement(
                    x,
                    { store: n },
                    i.createElement(
                      w.$n,
                      { onClick: () => this.setState({ ePhase: f.SELECTING }) },
                      (0, C.we)("#GrantAward_Back"),
                    ),
                  ),
                );
              }
              break;
            case f.LOADING_ERROR: {
              let e = "";
              switch (this.state.eResult) {
                case 10:
                  e = (0, C.we)("#GrantAwardError_Busy");
                  break;
                case 21:
                  e = (0, C.we)("#GrantAwardError_NotLoggedOn");
                  break;
                default:
                  e = (0, C.we)("#GrantAwardError_LoadExistingReactions");
              }
              R = i.createElement(
                i.Fragment,
                null,
                i.createElement(F, { description: S }),
                i.createElement(H, null),
                i.createElement(
                  "div",
                  { style: { position: "relative" } },
                  i.createElement(
                    "div",
                    { className: L.ErrorContainer },
                    i.createElement("div", { className: L.ErrorText }, e),
                  ),
                ),
                i.createElement(H, null),
              );
            }
          }
          return i.createElement(
            A.mt,
            { className: L.GrantAwardModal, active: e, onDismiss: r },
            i.createElement(
              A.Qs,
              { navID: "GrantAward", closeModal: r },
              c && i.createElement(v.NW, { eType: v.O4.Default }),
              R,
            ),
          );
        }
        GrantAward() {
          const { targetid: e, store: t, onSuccess: a } = this.props,
            { selectedReaction: n } = this.state;
          null !== n &&
            0 != n &&
            (this.setState({ ePhase: f.SUBMITTING }),
            t.AddReaction(n).then(({ eResult: t, strMessage: r }) => {
              1 == t
                ? this.setState({ ePhase: f.DONE, celebrate: !0 }, () =>
                    setTimeout(() => {
                      a && a(e, n);
                    }, 2e3),
                  )
                : this.setState({ ePhase: f.ERROR, eResult: t });
            }));
        }
      };
      (0, n.Cg)([S.oI], D.prototype, "GrantAward", null),
        (D = (0, n.Cg)([o.PA], D));
      const F = ({ description: e }) =>
          i.createElement(
            "div",
            { className: L.Header },
            i.createElement(
              "div",
              { className: L.Title },
              (0, C.we)("#GrantAwardTitle"),
            ),
            i.createElement("div", { className: L.Description }, e),
          ),
        x = (0, o.PA)(({ store: e, children: t }) => {
          const a = e.GetUserPointBalance(),
            n = a && a.toNumber().toLocaleString();
          return i.createElement(
            "div",
            { className: L.Footer },
            i.createElement(
              "div",
              { className: L.Left },
              i.createElement(y.vrn, { className: L.BalanceIcon }),
              i.createElement(
                "div",
                { className: L.BalanceDetails },
                i.createElement(
                  "div",
                  { className: L.BalanceLabel },
                  (0, C.we)("#YourBalance"),
                ),
                i.createElement("div", { className: L.BalanceAmount }, n),
              ),
            ),
            i.createElement(
              "div",
              { className: L.Right },
              i.createElement(
                c.Z,
                { className: L.Actions, "flow-children": "row" },
                i.Children.map(t, (e) =>
                  i.createElement("div", { className: L.Action }, e),
                ),
              ),
              i.createElement(
                "a",
                {
                  className: L.FooterLink,
                  href: `${h.TS.STORE_BASE_URL}points/howitworks`,
                },
                (0, C.we)("#GrantAward_PointsLink"),
              ),
            ),
          );
        }),
        H = () => i.createElement("div", { className: L.Divider });
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
          const {
            reaction: e,
            selected: t,
            alreadyAwarded: a,
            cost: n,
            autoFocus: r,
            ...s
          } = this.props;
          return i.createElement(
            T.N,
            {
              type: "button",
              onMouseEnter: this.handleMouseOver,
              onMouseLeave: this.handleMouseOut,
              className: (0, N.A)(L.Button, t && L.Selected, a && L.Disabled),
              autoFocus: r,
              ...s,
            },
            i.createElement(
              "div",
              { className: L.IconCtn },
              i.createElement(O, {
                reactionType: e,
                bForceAnimated: this.state.bHovered,
                bDisableAnimation: a,
              }),
            ),
            i.createElement(
              "div",
              { className: L.LabelCtn },
              i.createElement("div", { className: L.Label }, b(e)),
              i.createElement(W, { className: L.Points }, n.toLocaleString()),
            ),
            a && i.createElement(M, { className: L.IconCheckMark }),
          );
        }
      }
      (0, n.Cg)([S.oI], U.prototype, "handleMouseOver", null),
        (0, n.Cg)([S.oI], U.prototype, "handleMouseOut", null);
      const j = () =>
          i.createElement(R.t, { size: "large", className: L.Loading }),
        W = (e) => {
          const { children: t, className: a, ...n } = e;
          return i.createElement(
            "span",
            { ...n, className: (0, N.A)(a, L.PointsAmount) },
            i.createElement(y.vrn, { className: L.PointsAmountIcon }),
            t,
          );
        };
    },
  },
]);
