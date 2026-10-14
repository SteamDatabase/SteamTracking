/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [61975],
    {
      71698: (p, W, e) => {
        "use strict";
        e.d(W, { H: () => F, s: () => b });
        var n = e(90626),
          U = e(41623);
        let d = 0;
        function F(w, D) {
          (0, n.useEffect)(() => {
            if (!(w || D))
              return (
                d++,
                () => {
                  --d == 0 && (0, U.s)();
                }
              );
          }, [w, D]);
        }
        function b(w) {
          const [D, O] = (0, n.useState)(!1);
          (0, n.useEffect)(() => {
            const x = window.setTimeout(() => O(!0), w);
            return () => window.clearTimeout(x);
          }, [w]),
            F(D);
        }
      },
      37656: (p, W, e) => {
        "use strict";
        e.d(W, { w: () => $ });
        var n = e(41735),
          U = e.n(n),
          d = e(14947),
          F = e(65946),
          b = e(90626),
          w = e(27066),
          D = e(8323),
          O = e(30096),
          x = e(3166),
          H = Object.defineProperty,
          ee = Object.getOwnPropertyDescriptor,
          I = (y, s, r, m) => {
            for (
              var c = m > 1 ? void 0 : m ? ee(s, r) : s, h = y.length - 1, v;
              h >= 0;
              h--
            )
              (v = y[h]) && (c = (m ? v(s, r, c) : v(c)) || c);
            return m && c && H(s, r, c), c;
          };
        const S = class ye {
          constructor() {
            (0, d.Gn)(this);
          }
          giveaway_id = void 0;
          seconds_until_drawing = void 0;
          rtime_start = void 0;
          rtime_end = void 0;
          closed = void 0;
          winner_count = void 0;
          BIsValid() {
            return this.giveaway_id !== void 0 && this.giveaway_id !== null;
          }
          BStarted() {
            return (
              this.BIsValid() &&
              (this.seconds_until_drawing >= 0 || this.winner_count > 0)
            );
          }
          clone() {
            const s = new ye();
            return (
              (s.giveaway_id = this.giveaway_id),
              (s.seconds_until_drawing = this.seconds_until_drawing),
              (s.rtime_start = this.rtime_start),
              (s.rtime_end = this.rtime_end),
              (s.closed = this.closed),
              (s.winner_count = this.winner_count),
              s
            );
          }
        };
        I([d.sH], S.prototype, "giveaway_id", 2),
          I([d.sH], S.prototype, "seconds_until_drawing", 2),
          I([d.sH], S.prototype, "rtime_start", 2),
          I([d.sH], S.prototype, "rtime_end", 2),
          I([d.sH], S.prototype, "closed", 2),
          I([d.sH], S.prototype, "winner_count", 2);
        let K = S;
        const Q = class J {
          constructor() {
            (0, d.Gn)(this);
          }
          m_mapGiveawayIDToNextDrawInfo = new Map();
          m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
          m_bLoadedFromConfig = !1;
          m_mapNextDrawChangeCallback = new Map();
          GetKey(s, r) {
            return s + "_" + r;
          }
          GetInfoByInstance(s, r) {
            return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
              this.GetKey(s, r),
            );
          }
          GetNextDrawChangeCallback(s) {
            return (
              this.m_mapNextDrawChangeCallback.has(s) ||
                this.m_mapNextDrawChangeCallback.set(s, new D.lu()),
              this.m_mapNextDrawChangeCallback.get(s)
            );
          }
          CopyToGiveaway(s, r) {
            r.closed != s.closed && (r.closed = s.closed),
              r.giveaway_id != s.giveaway_id && (r.giveaway_id = s.giveaway_id),
              r.rtime_start != s.rtime_start && (r.rtime_start = s.rtime_start),
              r.rtime_end != s.rtime_end && (r.rtime_end = s.rtime_end),
              r.winner_count != s.winner_count &&
                (r.winner_count = s.winner_count),
              r.seconds_until_drawing != s.seconds_until_drawing &&
                (r.seconds_until_drawing = s.seconds_until_drawing);
          }
          async ReloadGiveaway(s, r) {
            if (!s) return null;
            let m = x.TS.STORE_BASE_URL + "prizes/nextdraw/" + s,
              c = null,
              h = { origin: self.origin };
            return (
              (c = await U().get(m, { params: h })),
              (0, d.h5)(() => {
                if (
                  (this.m_mapGiveawayIDToNextDrawInfo.has(s) ||
                    this.m_mapGiveawayIDToNextDrawInfo.set(s, new K()),
                  this.CopyToGiveaway(
                    c.data,
                    this.m_mapGiveawayIDToNextDrawInfo.get(s),
                  ),
                  r !== void 0)
                ) {
                  const v = this.GetKey(s, r);
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(v) ||
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(
                      v,
                      new K(),
                    ),
                    this.CopyToGiveaway(
                      c.data,
                      this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(v),
                    );
                }
              }),
              this.GetNextDrawChangeCallback(s).Dispatch(
                this.m_mapGiveawayIDToNextDrawInfo.get(s),
              ),
              this.m_mapGiveawayIDToNextDrawInfo.get(s)
            );
          }
          static s_Singleton;
          static Get() {
            return (
              J.s_Singleton ||
                ((J.s_Singleton = new J()), J.s_Singleton.Init()),
              J.s_Singleton
            );
          }
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let s = (0, x.Tc)("giveawaynextdraw", "application_config");
              if (s && s.giveaway_id) {
                let r = new K();
                this.CopyToGiveaway(s, r),
                  this.m_mapGiveawayIDToNextDrawInfo.set(s.giveaway_id, r);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        I([d.sH], Q.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          I([d.XI], Q.prototype, "CopyToGiveaway", 1);
        let N = Q;
        const G = class ue {
          m_intervalID;
          m_intervalCountDownID;
          static s_GlobalInstance = 0;
          m_myInstanceNumber = 0;
          constructor() {
            (this.m_myInstanceNumber = ue.s_GlobalInstance),
              (ue.s_GlobalInstance += 1);
          }
          ClearRefreshInterval() {
            this.m_intervalID &&
              (window.clearInterval(this.m_intervalID),
              (this.m_intervalID = void 0));
          }
          ClearCountDown() {
            this.m_intervalCountDownID &&
              (window.clearInterval(this.m_intervalCountDownID),
              (this.m_intervalCountDownID = void 0));
          }
          SetupRefreshDataInterval(s, r) {
            if ((this.ClearRefreshInterval(), !s.closed)) {
              let m =
                s.seconds_until_drawing <= 0 && s.winner_count == 0 ? 6e4 : 5e3;
              this.m_intervalID = window.setInterval(r, m);
            }
          }
          SetupCountDown(s, r) {
            s > 0 && (this.m_intervalCountDownID = window.setInterval(r, 1e3));
          }
        };
        I([w.o], G.prototype, "ClearRefreshInterval", 1),
          I([w.o], G.prototype, "ClearCountDown", 1),
          I([w.o], G.prototype, "SetupRefreshDataInterval", 1),
          I([w.o], G.prototype, "SetupCountDown", 1);
        let g = G;
        function X(y, s) {
          const r = N.Get().GetInfoByInstance(y, s.m_myInstanceNumber);
          (r.seconds_until_drawing -= 1),
            r.seconds_until_drawing == 0 && s.ClearCountDown();
        }
        function z(y, s) {
          const r = N.Get().GetInfoByInstance(y, s.m_myInstanceNumber);
          r &&
            r.BIsValid() &&
            r.seconds_until_drawing <= 0 &&
            !r.closed &&
            (s.ClearCountDown(),
            N.Get()
              .ReloadGiveaway(y, s.m_myInstanceNumber)
              .then((m) => {
                s.SetupCountDown(m.seconds_until_drawing, () => X(y, s));
              }));
        }
        function $(y) {
          const [s] = (0, b.useState)(new g()),
            r = (0, O.CH)();
          (0, b.useEffect)(
            () => (
              N.Get()
                .ReloadGiveaway(y, s.m_myInstanceNumber)
                .then((C) => {
                  s.SetupRefreshDataInterval(C, () => z(y, s)),
                    s.SetupCountDown(C.seconds_until_drawing, () => X(y, s)),
                    r();
                }),
              () => {
                s.ClearRefreshInterval(), s.ClearCountDown();
              }
            ),
            [s, y, r],
          );
          const m = N.Get().GetInfoByInstance(y, s.m_myInstanceNumber),
            [c, h, v] = (0, F.q3)(() => [
              m?.winner_count,
              m?.closed,
              m?.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !m || m.giveaway_id == null || !m.BStarted() || c === void 0,
            winner_count: c,
            closed: h,
            seconds_until_drawing: v,
          };
        }
      },
      19188: (p, W, e) => {
        "use strict";
        e.d(W, { N: () => r });
        var n = e(7850),
          U = e(41735),
          d = e.n(U),
          F = e(75844),
          b = e(90626),
          w = e(90537),
          D = e(58483),
          O = e(82385),
          x = e(96538),
          H = e(88843),
          ee = e.n(H),
          I = e(64641),
          S = e.n(I),
          K = e(85599),
          Q = e(34592),
          N = e(3166),
          G = e(72609),
          g = e(6469),
          X = e(53107),
          z = e(25792),
          $ = Object.defineProperty,
          y = Object.getOwnPropertyDescriptor,
          s = (c, h, v, C) => {
            for (
              var E = C > 1 ? void 0 : C ? y(h, v) : h, P = c.length - 1, T;
              P >= 0;
              P--
            )
              (T = c[P]) && (E = (C ? T(h, v, E) : T(E)) || E);
            return C && E && $(h, v, E), E;
          };
        const r = (c) => {
          let { bShowOnlyInitialEvent: h } = c;
          const v = (0, N.Qn)(),
            C = (0, w.Y)();
          return (0, n.jsx)(z.tH, {
            children: (0, n.jsx)(m, {
              ...c,
              bShowOnlyInitialEvent: h || v,
              tracker: C,
            }),
          });
        };
        let m = class extends b.Component {
          state = { bLoading: !1, eventModel: this.props.eventModel };
          m_refParent = b.createRef();
          m_cancelSignal = d().CancelToken.source();
          componentDidMount() {
            this.state.eventModel ||
              this.setState({ bLoading: !0 }, this.LoadEvent);
            let c = this.GetBodyElement();
            c &&
              this.props.bPrimaryPageFeature &&
              c.classList.add(H.BodyNoScroll);
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel("EventInfiniteScrollModal unmounting");
            let c = this.GetBodyElement();
            c &&
              this.props.bPrimaryPageFeature &&
              c.classList.remove(H.BodyNoScroll);
          }
          GetBodyElement() {
            return this.m_refParent.current
              ? this.m_refParent.current.closest("body")
              : null;
          }
          async LoadEvent() {
            const {
              appid: c,
              clanSteamID: h,
              announcementGID: v,
              partnerEventStore: C,
              additionalParams: E,
            } = this.props;
            C.LoadAdjacentPartnerEventsByAnnouncement(
              v,
              h,
              c,
              0,
              3,
              E,
              this.m_cancelSignal,
            )
              .then((P) => {
                P.length > 0
                  ? this.setState(
                      { bLoading: !1, eventModel: P[0] },
                      this.HandleReadEvent,
                    )
                  : (this.props.onEventNotFound && this.props.onEventNotFound(),
                    this.setState({ bLoading: !1 }));
              })
              .catch((P) => {
                let T = (0, Q.H)(P);
                console.error(
                  "EventInfiniteScrollModal failed " + T.strErrorMsg,
                  T,
                ),
                  this.setState({ bLoading: !1 });
              });
          }
          async HandleReadEvent() {
            const { eventModel: c } = this.state,
              { trackingLocation: h, tracker: v } = this.props;
            c && c.BIsPartnerEvent() && (v.RecordEventRead(c, h), v.Flush());
          }
          render() {
            const { bShowOnlyInitialEvent: c } = this.props,
              { bLoading: h, eventModel: v } = this.state;
            if (h)
              return (0, n.jsx)(x.EN, {
                active: !0,
                children: (0, n.jsx)("div", {
                  className: S().FlexCenter,
                  style: { height: "400px" },
                  children: (0, n.jsx)(K.t, {}),
                }),
              });
            const {
              closeModal: C,
              appid: E,
              clanSteamID: P,
              className: T,
              partnerEventStore: te,
              showAppHeader: se,
              bPrimaryPageFeature: V,
              additionalParams: k,
              eventClassName: R,
            } = this.props;
            let ne;
            G.TS.IN_CLIENT &&
              v?.appid &&
              (g.Fm.Get().HintLoad(),
              g.Fm.Get().BOwnsApp(v.appid) &&
                (ne = (q) =>
                  (0, X.EP)(q, "steam://nav/games/details/" + v.appid)));
            const oe = (0, n.jsx)(D.sU, {
              children: (q) =>
                (0, n.jsx)(O.AD, {
                  initialEvent: v,
                  appid: E,
                  clanSteamID: P,
                  partnerEventStore: te,
                  emoticonStore: q,
                  closeModal: !V && C,
                  showAppHeader: se,
                  bShowOnlyInitialEvent: c,
                  additionalParams: k,
                  eventClassName: R,
                  onAppIconClick: ne,
                }),
            });
            return V
              ? oe
              : (0, n.jsx)(x.EN, {
                  active: !0,
                  children: (0, n.jsx)("div", { className: T, children: oe }),
                });
          }
        };
        m = s([F.PA], m);
      },
      59970: (p, W, e) => {
        "use strict";
        e.d(W, { d: () => ht });
        var n = e(7850),
          U = e(19367),
          d = e(90626),
          F = e(3685),
          b = e(85528),
          w = e(77495),
          D = e(18210),
          O = e(3166),
          x = e(75779),
          H = e(80902),
          ee = e(30454);
        async function I() {
          const t = await (0, ee.d)(
            "ajaxgetuserdeckcompatcounts",
            new URLSearchParams(),
          );
          if (!t.counts)
            throw new Error(
              "ajaxgetuserdeckcompatcounts answered without counts",
            );
          return t.counts;
        }
        const S = 300 * 1e3;
        function K() {
          return ["DeckCompatCounts"];
        }
        function Q() {
          return { queryKey: K(), queryFn: () => I(), staleTime: S, retry: !1 };
        }
        function N() {
          const { data: t } = (0, H.I)(Q());
          return t;
        }
        function G(t, o) {
          switch (o) {
            case x.sd:
              return t?.playable;
            case x.V8:
              return t?.unsupported;
            default:
              return t?.verified;
          }
        }
        var g = e(70187),
          X = e(36549),
          z = e(39153),
          $ = e(99412),
          y = e(72609),
          s = e(25792),
          r = e(85599),
          m = e(41635),
          c = e(47610),
          h = e(18860),
          v = e(87805);
        function C(t) {
          const { event: o } = t.context,
            a = Number.parseInt((0, g.j$)(t.args)),
            l = d.useMemo(() => {
              if (o)
                return o.jsondata.sale_sections?.find(
                  (i) =>
                    i.section_type == "vo_internal" &&
                    (i.internal_section_data?.internal_type ==
                      "reservation_widget" ||
                      i.internal_section_data?.internal_type ==
                        "while_supplies_last"),
                );
            }, [o]);
          if (a && l) {
            const i = Number.parseInt((0, g.j$)(t.args, "depositpackageid")),
              u = Number.parseInt((0, g.j$)(t.args, "psulesspackageid")),
              f = (0, g.j$)(t.args, "out_of_stock_override"),
              j = (0, g.j$)(t.args, "delivery_override"),
              M = (0, g.j$)(t.args, "delivery_override_out_of_stock");
            return (0, n.jsx)(E, {
              section: l,
              reservationPackageID: a,
              depositPackageID: i,
              psuLessPackageID: u,
              strOutOfStockOverride: f,
              strDeliveryOverride: M || j,
              bDeliveryOverrideOnlyIfOutOfStock: !!M,
              PreviewActions: t.PreviewActions,
            });
          }
          return (0, n.jsx)(n.Fragment, {});
        }
        function E(t) {
          const {
              reservationPackageID: o,
              depositPackageID: a,
              bIsPreview: l,
              psuLessPackageID: i,
              strOutOfStockOverride: u,
              strDeliveryOverride: f,
              bDeliveryOverrideOnlyIfOutOfStock: j,
              section: M,
              PreviewActions: _,
            } = t,
            { data: B } = (0, c.DR)(o),
            { data: Z } = (0, c.DR)(i),
            A = (0, d.useMemo)(
              () => [
                {
                  unique_id: "reservation_bbcode_" + o,
                  reservation_package: o,
                  deposit_package: a,
                  localized_reservation_desc: (0, m.$Y)([], $.bP9, null),
                  localized_out_of_stock_override: (0, m.$Y)(
                    [u || null],
                    $.bP9,
                    null,
                  ),
                  localized_delivery_override_desc: (0, m.$Y)(
                    [f || null],
                    $.bP9,
                    null,
                  ),
                  override_delivery_only_out_of_stock: !!j,
                  psu_less_package: i,
                },
              ],
              [o, a, u, f, j, i],
            );
          if (!B || (i && !Z))
            return (0, n.jsx)(r.t, {
              string: (0, D.we)("#Loading"),
              size: "small",
              position: "center",
            });
          const Dt = !y.iA.logged_in || !B.account_restricted_from_purchasing,
            De =
              B.reservation_state == h.G.k_EPurchaseReservationState_Reserved
                ? B
                : void 0;
          return (0, n.jsxs)(s.tH, {
            children: [
              _ &&
                (0, n.jsx)(d.Suspense, {
                  fallback: null,
                  children: (0, n.jsx)(_, {
                    bIsPreview: !!l,
                    rgReservationDef: A,
                  }),
                }),
              !!B.allow_purchase_in_country &&
                (0, n.jsxs)("div", {
                  className: A[0].unique_id,
                  children: [
                    (0, n.jsx)(v.b, {
                      reservationDef: A[0],
                      hardwareDetail: B,
                      bPSULessModel: !1,
                      reservedHardwareDetail: De,
                    }),
                    Dt &&
                      (0, n.jsx)(v.p, {
                        section: M,
                        reservationDef: A[0],
                        hardwareDetail: B,
                        reservedHardwareDetail: De,
                      }),
                    Z &&
                      Z?.allow_purchase_in_country &&
                      (0, n.jsx)(v.b, {
                        reservationDef: A[0],
                        hardwareDetail: Z,
                        bPSULessModel: !0,
                        reservedHardwareDetail: void 0,
                      }),
                  ],
                }),
            ],
          });
        }
        var P = e(6878),
          T = e(21035),
          te = e(72865),
          se = e(38081),
          V = e.n(se),
          k = e(36707),
          R = e(69596),
          ne = e(10026),
          oe = e.n(ne),
          q = e(19298),
          Ie = e(11996),
          Ce = e(19047),
          ae = e(36118),
          we = e(47689),
          ve = e(89926),
          pe = e(32545),
          re = e.n(pe);
        function xe(t) {
          const { appID: o, classOverride: a, styleOverride: l } = t,
            [i, u] = (0, d.useState)(!1),
            f = (0, we.m)("GameHoverFollowButton"),
            { elDialogElement: j, fnShowLogonDialog: M } = (0, ve.l)(),
            _ = (0, Ie.Fh)(o),
            { mutateAsync: B } = (0, Ce.L)(o, !_, void 0),
            Z = async (A) => {
              A.preventDefault(),
                A.stopPropagation(),
                O.iA.logged_in
                  ? (u(!0), await B(), f.token.reason || u(!1))
                  : M();
            };
          return (0, n.jsxs)(q.Z, {
            className: (0, k.A)(re().FollowButton, a),
            onClick: Z,
            style: l,
            children: [
              _ ? (0, n.jsx)(ae.pPV, {}) : (0, n.jsx)(ae.c9e, {}),
              (0, n.jsx)("div", {
                className: (0, k.A)(
                  re().FollowButtonText,
                  i && re().FollowLoadingText,
                  "FollowGameButton",
                ),
                children: (0, D.we)(
                  _ ? "#Sale_StopFollowingGame" : "#Sale_FollowGame",
                ),
              }),
              j,
            ],
          });
        }
        function Ee(t) {
          const { appid: o, color: a, bgcolor: l } = t,
            i = (0, te.n9)();
          return (0, n.jsx)(xe, {
            appID: o,
            classOverride: (0, k.A)(
              V().FollowGameButtonNotTop,
              oe().BBCodeFollowButton,
            ),
            styleOverride: { color: a, backgroundColor: l },
          });
        }
        function Be(t) {
          const o = Number(t.args.appid);
          if (!o) return null;
          const a = (0, R.O)(t.args.color, "black"),
            l = (0, R.O)(t.args.bgcolor, "white");
          return (0, n.jsx)(Ee, { appid: o, color: a, bgcolor: l });
        }
        var ie = e(57646);
        function Pe(t) {
          const o = Number(t.args.packageid);
          return o
            ? (0, n.jsx)(ie.eF, {
                packageID: o,
                display_style: (0, ie._w)(t.args.display),
              })
            : null;
        }
        function je(t) {
          const o = Number(t.args.packageid),
            a = Number(t.args.compareid);
          return !o || !a
            ? null
            : (0, n.jsx)(ie.hJ, { packageID: o, compareID: a });
        }
        function Oe(t) {
          const o = t.args[""]?.trim();
          return o
            ? (0, n.jsx)("div", { className: o, children: t.children })
            : (0, n.jsx)(n.Fragment, { children: t.children });
        }
        var Se = e(18657),
          me = e.n(Se),
          Me = e(63026);
        function _e(t) {
          const { clanAccountID: o, color: a, bgcolor: l } = t,
            [i, u] = d.useState(!1);
          return (0, n.jsx)("div", {
            className: (0, k.A)(me().BBCodeFollowButton, i && me().isHovered),
            onMouseEnter: () => u(!0),
            onMouseLeave: () => u(!1),
            children: (0, n.jsx)(Me.Q, {
              nCreatorAccountID: o,
              classOverride: V().FollowGameButtonNotTop,
              styleOverride: { color: a, backgroundColor: l },
              followType: "group",
            }),
          });
        }
        function Te(t) {
          const { event: o } = t.context,
            a = Number(t.args.groupid) || o?.clanSteamID.GetAccountID();
          if (!a) return null;
          const l = (0, R.O)(t.args.color, "black"),
            i = (0, R.O)(t.args.bgcolor, "white");
          return (0, n.jsx)(_e, { clanAccountID: a, color: l, bgcolor: i });
        }
        var Ae = e(83482),
          be = e(44267),
          Ne = e(9202),
          fe = e.n(Ne),
          Ge = e(29522);
        function Le(t) {
          const { appid: o, color: a, bgcolor: l } = t,
            i = (0, te.n9)(),
            u = (0, Ge.$5)(o),
            f = (0, Ae.L3)(i);
          return (0, n.jsx)("div", {
            className: fe().WishlistHoverCtn,
            children: (0, n.jsx)(be.E, {
              snr: f,
              id: u,
              classOverride: (0, k.A)(
                V().WishlistButtonNotTop,
                fe().BBCodeWishlistButton,
                "WishlistButton",
              ),
              styleOverride: { color: a, backgroundColor: l },
              bShowInGamepadUI: !0,
            }),
          });
        }
        function Fe(t) {
          const o = Number(t.args.appid);
          if (!o) return null;
          const a = (0, R.O)(t.args.color, "black"),
            l = (0, R.O)(t.args.bgcolor, "white");
          return (0, n.jsx)(Le, { appid: o, color: a, bgcolor: l });
        }
        let le = null;
        function Re() {
          return (
            le == null &&
              (le = new Map([
                ["wishlist", { Constructor: Fe, autocloses: !1 }],
                ["followgroup", { Constructor: Te, autocloses: !1 }],
                ["classname", { Constructor: Oe, autocloses: !1 }],
                ["price", { Constructor: Pe, autocloses: !1 }],
                ["pricesavings", { Constructor: je, autocloses: !1 }],
                ["reservationbutton", { Constructor: C, autocloses: !1 }],
              ])),
            le
          );
        }
        var We = e(37656),
          L = e(29868),
          Y = e(24642);
        function ge(t) {
          return t < 10 ? "0" + t : t;
        }
        function Ue(t) {
          const { giveawayid: o } = t,
            a = (0, We.w)(o),
            {
              bLoadingGiveawayInfo: l,
              winner_count: i,
              closed: u,
              seconds_until_drawing: f,
            } = a;
          return l
            ? null
            : (0, n.jsxs)("div", {
                className: L.countdownCtn,
                children: [
                  !!u &&
                    (0, n.jsx)("div", {
                      className: L.Closed,
                      children:
                        i > 0
                          ? (0, D.we)("#Giveaway_Closed", (0, Y.D)(i))
                          : (0, D.we)("#Giveaway_Closed_NoWinnerInfo"),
                    }),
                  !u &&
                    (0, n.jsxs)(d.Fragment, {
                      children: [
                        f <= 0
                          ? (0, n.jsxs)("div", {
                              className: L.Throbber,
                              children: [
                                (0, n.jsx)(r.t, { size: "small" }),
                                (0, n.jsx)("div", {
                                  children: (0, D.we)("#Giveaway_RandomDraw"),
                                }),
                              ],
                            })
                          : (0, n.jsxs)("div", {
                              className: L.CountDownCtn,
                              children: [
                                (0, n.jsx)("div", {
                                  className: L.CountDownTime,
                                  children:
                                    ge(Math.floor(f / 60)) + ":" + ge(f % 60),
                                }),
                                (0, n.jsxs)("div", {
                                  className: L.CountDownText,
                                  children: [
                                    (0, D.we)("#Giveaway_CountDown2"),
                                    " ",
                                    (0, D.we)("#Giveaway_KeepWatching"),
                                  ],
                                }),
                              ],
                            }),
                        i > 0 &&
                          (0, n.jsxs)("div", {
                            className: L.WinnerInfo,
                            children: [
                              (0, n.jsx)("div", {
                                className: L.WinnerCount,
                                children: (0, Y.D)(i),
                              }),
                              (0, n.jsx)("div", {
                                className: L.WinnerText,
                                children: (0, D.we)("#Giveaway_Congratulation"),
                              }),
                            ],
                          }),
                      ],
                    }),
                ],
              });
        }
        var He = e(88245),
          Ke = e(35702),
          Qe = e(16412),
          ze = e(92757),
          $e = e(39256),
          ke = e(4720),
          Ze = e(37375),
          Xe = e(57810),
          ce = e(36631),
          Ve = e(76281),
          he = e(81416);
        function Ye(t) {
          const { eventModel: o, nEventBadgeID: a } = t,
            l = (0, Ke.fy)(a);
          if (l?.level > 0) {
            let i = l.level;
            if (o?.BHasSaleEnabled()) {
              const u = o.GetSaleSectionsByType("badge_progress");
              if (u?.length == 1) {
                const f = u[0].badge_progress;
                if (f?.event_badgeid == a && f?.granted_by_discovery_queue) {
                  const j = f.levels[f.levels.length - 1].level;
                  return (0, n.jsx)(Je, {
                    eventModel: o,
                    nBadgeLevel: i,
                    nMaxLevel: j,
                  });
                }
              }
            }
            return (0, n.jsx)("span", {
              className: "DisplayBadgeProgress",
              children: (0, Y.D)(i),
            });
          }
          return null;
        }
        function Je(t) {
          const { eventModel: o, nBadgeLevel: a, nMaxLevel: l } = t,
            i = d.useMemo(() => {
              const _ = o
                .GetSaleSections()
                .filter((B) => B.section_type == "discoveryqueue");
              return _?.length > 0 ? _[0] : null;
            }, [o]),
            { storePageFilter: u, eStoreDiscoveryQueueType: f } = d.useMemo(
              () => (0, Ze.lx)(o, i),
              [o, i],
            ),
            j = (0, Xe.Uf)(f, u),
            M = Math.min(a + j, l);
          return (0, n.jsx)("span", {
            className: "DisplayBadgeProgress",
            children: (0, Y.D)(M),
          });
        }
        function qe(t) {
          const { event: o } = t.context,
            a = Number.parseInt((0, g.j$)(t.args, "eventid"));
          return O.iA.logged_in && a
            ? (0, n.jsx)(Ye, { nEventBadgeID: a, eventModel: o })
            : null;
        }
        function et(t) {
          const { nDoorIndex: o, children: a } = t,
            l = (0, z.OM)(o),
            i = (0, z.gP)(),
            [u, f] = d.useState(!1),
            [j, M] = d.useState(!1),
            { elDialogElement: _, fnShowLogonDialog: B } = (0, ve.l)();
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(Qe.$n, {
                disabled: l,
                onClick: (Z) => {
                  u ||
                    (O.iA.logged_in
                      ? (f(!0),
                        i({ iDoorIndex: o })
                          .then((A) => {
                            A || M(!0), f(!1);
                          })
                          .catch(() => {
                            M(!0), f(!1);
                          }))
                      : B());
                },
                children: j
                  ? (0, n.jsx)("div", {
                      children: (0, D.we)("#GrantAwardError_Busy"),
                    })
                  : (0, n.jsxs)(n.Fragment, {
                      children: [
                        !!u && (0, n.jsx)(r.t, { size: "small" }),
                        !!l && (0, n.jsx)(ae.Jlk, {}),
                        a,
                      ],
                    }),
              }),
              _,
            ],
          });
        }
        function tt(t) {
          const o = Number.parseInt((0, g.j$)(t.args)) || 0;
          return o >= 0 && o < 32
            ? (0, n.jsx)(et, { nDoorIndex: o, children: t.children })
            : null;
        }
        const nt = (0, ze.y)(Ve.H);
        function ot(t) {
          const o = Number.parseInt((0, g.j$)(t.args)),
            { event: a, showErrorInfo: l } = t.context;
          if (o) {
            const i = a?.jsondata?.sale_sections?.findIndex(
              (u) => u.unique_id == o,
            );
            if (i >= 0) {
              const u = a.GetDayIndexFromEventStart();
              return (0, n.jsx)(ce.Cs, {
                location: l ? ce.HY : ce.bs,
                children: (0, n.jsx)(nt, {
                  event: a,
                  section: a.jsondata.sale_sections[i],
                  activeTab: new ke.y(null, u),
                  language: t.language,
                  nSaleDayIndex: u,
                  promotionName: "",
                  appVisibilityTracker: null,
                  ePreviewMode: l
                    ? he.S.EPreviewMode_Enabled
                    : he.S.EPreviewMode_Disabled,
                }),
              });
            } else if (l)
              return (0, n.jsxs)("div", {
                className: $e.ErrorDiv,
                children: ["Error could not find sale section ", o],
              });
          }
          return null;
        }
        let de = null;
        function st() {
          return (
            de == null &&
              (de = new Map([
                ...Array.from(Re().entries()),
                [
                  "itemdef",
                  {
                    Constructor: at,
                    autocloses: !1,
                    skipInternalNewline: !0,
                    allowWrapTextForCopying: !0,
                  },
                ],
                ["followgame", { Constructor: Be, autocloses: !1 }],
                ["deckcompatcount", { Constructor: rt, autocloses: !1 }],
                [
                  "deckcompatuserlibrarycount",
                  { Constructor: it, autocloses: !1 },
                ],
                ["giveawayinfo", { Constructor: ut, autocloses: !1 }],
                ["eventdoorvisibility", { Constructor: lt, autocloses: !1 }],
                ["badgecurrentlevel", { Constructor: qe, autocloses: !1 }],
                ["optindoorquest", { Constructor: tt, autocloses: !1 }],
                ["localize", { Constructor: dt, autocloses: !1 }],
                ["salesection", { Constructor: ot, autocloses: !1 }],
                ["reservationbutton", { Constructor: mt, autocloses: !1 }],
              ])),
            de
          );
        }
        function at(t) {
          const { event: o } = t.context,
            a = Number.parseInt((0, g.j$)(t.args, "appid")),
            l = Number.parseInt((0, g.j$)(t.args, "itemdefid")),
            i = Number.parseInt((0, g.j$)(t.args, "maxquantity")),
            u = (0, g.j$)(t.args, "calltoaction");
          return !(0, He.gS)(a, l, !1) || !o
            ? (0, n.jsx)(r.t, {
                size: "small",
                position: "center",
                string: (0, D.we)("#Loading"),
              })
            : (0, n.jsx)(T.f, {
                language: t.language,
                clanAccountID: o.clanSteamID.GetAccountID(),
                itemDefSetting: { nAppID: a, nItemDefID: l, max_quantity: i },
                strCallToAction: u,
              });
        }
        function rt(t) {
          const o = N();
          if (!o) return (0, n.jsx)(r.t, { size: "small" });
          const a = Number.parseInt((0, g.j$)(t.args));
          return (0, n.jsx)("span", { children: (0, Y.D)(Number(G(o, a))) });
        }
        function it(t) {
          const o = (0, X.jR)(O.iA.accountid, "library");
          if (!o) return (0, n.jsx)(r.t, { size: "small" });
          const a = Number.parseInt((0, g.j$)(t.args));
          let l = o.verifiedList?.length || 0;
          switch (a) {
            case x.sd:
              l = o.playableList?.length || 0;
              break;
            case x.V8:
              l = o.unsupportedList?.length || 0;
              break;
            case x.YX:
              l = o.unknownList?.length || 0;
              break;
          }
          return (0, n.jsx)("span", { children: (0, Y.D)(Number(l)) });
        }
        function lt(t) {
          const o = Number.parseInt((0, g.j$)(t.args)),
            a =
              "hide" in t.args && !!Number.parseInt((0, g.j$)(t.args, "hide"));
          return o >= 0
            ? (0, n.jsx)(ct, { nDoorIndex: o, bHide: a, children: t.children })
            : null;
        }
        function ct(t) {
          const { nDoorIndex: o, bHide: a, children: l } = t,
            i = (0, z.OM)(o);
          return i == null
            ? null
            : (i && !a) || (!i && a)
              ? (0, n.jsx)(n.Fragment, { children: t.children })
              : null;
        }
        function dt(t) {
          return (0, n.jsx)("span", {
            className: P.LocalizeBlock,
            children: (0, D.oW)(
              t.children,
              (0, n.jsx)("b", {}),
              (0, n.jsx)("b", {}),
              (0, n.jsx)("b", {}),
              (0, n.jsx)("b", {}),
            ),
          });
        }
        function ut(t) {
          let o = (0, g.j$)(t.args);
          return o
            ? (0, n.jsx)(Ue, { giveawayid: o })
            : (0, n.jsx)(d.Fragment, {});
        }
        const vt = void 0;
        function mt(t) {
          return (0, n.jsx)(C, { ...t, PreviewActions: vt });
        }
        var ft = e(71698),
          gt = e(94520);
        function ht(t) {
          const { bSalePage: o } = t,
            [a, l] = d.useState(!1);
          return (
            (0, ft.H)(a, o),
            d.useEffect(() => {
              b.Vw.Init(new F.D(O.TS.WEBAPI_BASE_URL)), w.O3.Init(), l(!0);
            }, []),
            d.useEffect(() => {
              const i = (0, D.l4)();
              i && U.locale(i);
            }, []),
            a
              ? o
                ? (0, n.jsx)(gt.d3, { dictionary: st(), children: t.children })
                : t.children
              : null
          );
        }
      },
      32545: (p) => {
        p.exports = {
          "duration-app-launch": "800ms",
          FollowButton: "c-TDTqD2D5mBLfTqn3fSV",
          FollowButtonText: "_2PmgMkPwEgmuCJVZLTGSPi",
          FollowLoadingText: "_2XN3sBlgsLE3n5WrKOkWxi",
          BackgroundAnimation: "uyy8KyiiqaQ8u9bMDwblz",
          "ItemFocusAnim-darkerGrey-nocolor": "_1ZwgsD1DzopaHZlXaaWS7B",
          "ItemFocusAnim-darkerGrey": "_1sm-Ag9q7YyfjTirEAUKbD",
          "ItemFocusAnim-darkGreySettings": "Y4bvEiSraTDYjd2Nd9Mwc",
          "ItemFocusAnim-darkGrey": "J6U-QgbF3DbDkS-3DeQdU",
          "ItemFocusAnim-grey": "_377hQ8s9afH681BN_ZEsfJ",
          "ItemFocusAnim-translucent-white-10": "_3ztC4gHbTuhtfBA2YmQnsW",
          "ItemFocusAnim-translucent-white-20": "pjQnWETBI391eZg-gLCoU",
          "ItemFocusAnimBorder-darkGrey": "_35tkELTOnZffhYZXF6IM5p",
          "ItemFocusAnim-green": "ubgODmIok4_aHDeaT6Dpl",
          focusAnimation: "_3hPkc-RJEDgRJ0ItWpPsP9",
          hoverAnimation: "_3cu-nLm0UDnrFRy4HkVrO8",
        };
      },
      10026: (p) => {
        p.exports = { BBCodeFollowButton: "NVuxjpTCUClP-4RsNDDvk" };
      },
      18657: (p) => {
        p.exports = {
          BBCodeFollowButton: "BwHJdoHlv8wy5OypqL_b7",
          isHovered: "_2EcgCb9lHfl7I_MlirYLZL",
        };
      },
      29868: (p) => {
        p.exports = {
          countdownCtn: "GWWacIf04lQysYMFJma0A",
          Closed: "ATX_xEE69rX8wVxQvONEx",
          CountDownCtn: "_11RwPICMOmmvNXkOq9bjPc",
          CountDownTime: "eh0pMnSr-nk203Ealq_Rq",
          CountDownText: "_3VKQ3h7Z4wO_U-Z_vXUZkk",
          LearnMore: "_1q98mjxkCUwQuFALsiNtD7",
          Throbber: "bEkRtFmRUW_smWksM-k9g",
          WinnerInfo: "_2LTFl4ZFuL1BeNbqYPExWv",
          WinnerCount: "Z7ScP-i1XHPQn4eeFdJ3g",
          WinnerText: "chkuqox_QD6U5ID_AHTLk",
        };
      },
      9202: (p) => {
        p.exports = {
          "duration-app-launch": "800ms",
          storeMenuResponsiveModeWidth: "730px",
          SuppressScrollOnBody: "_1FFwlWIoDrtb0qdN9YUwHs",
          WishlistHoverCtn: "GXjJQihysg6S5INBKClED",
          BBCodeWishlistButton: "_1dm-6uzq_x5Gqo421G3a1r",
          BackgroundAnimation: "Auhol3RHXIE3fQUoyOoWR",
          "ItemFocusAnim-darkerGrey-nocolor": "_2b6SJAbnZzhfHFRjTpAhNy",
          "ItemFocusAnim-darkerGrey": "XywxBIK9eHokhhsZGNBan",
          "ItemFocusAnim-darkGreySettings": "_2kXRPMPgy0P9b0CoapcXw7",
          "ItemFocusAnim-darkGrey": "_3eSI5prhRv2g28mH4BvfI1",
          "ItemFocusAnim-grey": "SwPqPFwuEkTnSchUdaYfU",
          "ItemFocusAnim-translucent-white-10": "oXUFMy_wfkldK82-xV12m",
          "ItemFocusAnim-translucent-white-20": "_3s81IjXe5IWP8-T018RCQq",
          "ItemFocusAnimBorder-darkGrey": "_1Zq30UmvKFxqjOzEaqp0l",
          "ItemFocusAnim-green": "_3G3OfrZkx3Nt3Q_A9oFTkP",
          focusAnimation: "N5bN0xQL6oj7EZSzAeJ-B",
          hoverAnimation: "_2MUmffXlPUO3g7xxum02Qa",
        };
      },
    },
  ]);
})();
