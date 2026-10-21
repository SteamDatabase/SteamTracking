/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [61975],
    {
      71698: (E, K, e) => {
        "use strict";
        e.d(K, { H: () => W, s: () => N });
        var n = e(90626),
          H = e(41623);
        let c = 0;
        function W(x, h) {
          (0, n.useEffect)(() => {
            if (!(x || h))
              return (
                c++,
                () => {
                  --c == 0 && (0, H.s)();
                }
              );
          }, [x, h]);
        }
        function N(x) {
          const [h, S] = (0, n.useState)(!1);
          (0, n.useEffect)(() => {
            const P = window.setTimeout(() => S(!0), x);
            return () => window.clearTimeout(P);
          }, [x]),
            W(h);
        }
      },
      37656: (E, K, e) => {
        "use strict";
        e.d(K, { w: () => X });
        var n = e(41735),
          H = e.n(n),
          c = e(14947),
          W = e(65946),
          N = e(90626),
          x = e(27066),
          h = e(8323),
          S = e(30096),
          P = e(3166),
          J = Object.defineProperty,
          $ = Object.getOwnPropertyDescriptor,
          w = (C, s, a, g) => {
            for (
              var y = g > 1 ? void 0 : g ? $(s, a) : s, d = C.length - 1, f;
              d >= 0;
              d--
            )
              (f = C[d]) && (y = (g ? f(s, a, y) : f(y)) || y);
            return g && y && J(s, a, y), y;
          };
        const M = class Ce {
          constructor() {
            (0, c.Gn)(this);
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
            return this.BIsValid()
              ? this.seconds_until_drawing !== void 0 &&
                this.seconds_until_drawing >= 0
                ? !0
                : this.winner_count !== void 0 && this.winner_count > 0
              : !1;
          }
          clone() {
            const s = new Ce();
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
        w([c.sH], M.prototype, "giveaway_id", 2),
          w([c.sH], M.prototype, "seconds_until_drawing", 2),
          w([c.sH], M.prototype, "rtime_start", 2),
          w([c.sH], M.prototype, "rtime_end", 2),
          w([c.sH], M.prototype, "closed", 2),
          w([c.sH], M.prototype, "winner_count", 2);
        let z = M;
        const Q = class q {
          constructor() {
            (0, c.Gn)(this);
          }
          m_mapGiveawayIDToNextDrawInfo = new Map();
          m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
          m_bLoadedFromConfig = !1;
          m_mapNextDrawChangeCallback = new Map();
          GetKey(s, a) {
            return s + "_" + a;
          }
          GetInfoByInstance(s, a) {
            return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
              this.GetKey(s, a),
            );
          }
          GetNextDrawChangeCallback(s) {
            let a = this.m_mapNextDrawChangeCallback.get(s);
            return (
              a ||
                ((a = new h.lu()), this.m_mapNextDrawChangeCallback.set(s, a)),
              a
            );
          }
          CopyToGiveaway(s, a) {
            a.closed != s.closed && (a.closed = s.closed),
              a.giveaway_id != s.giveaway_id && (a.giveaway_id = s.giveaway_id),
              a.rtime_start != s.rtime_start && (a.rtime_start = s.rtime_start),
              a.rtime_end != s.rtime_end && (a.rtime_end = s.rtime_end),
              a.winner_count != s.winner_count &&
                (a.winner_count = s.winner_count),
              a.seconds_until_drawing != s.seconds_until_drawing &&
                (a.seconds_until_drawing = s.seconds_until_drawing);
          }
          async ReloadGiveaway(s, a) {
            if (!s) return null;
            let g = P.TS.STORE_BASE_URL + "prizes/nextdraw/" + s,
              y = { origin: self.origin };
            const d = await H().get(g, { params: y }),
              f = (0, c.h5)(() => {
                let v = this.m_mapGiveawayIDToNextDrawInfo.get(s);
                if (
                  (v ||
                    ((v = new z()),
                    this.m_mapGiveawayIDToNextDrawInfo.set(s, v)),
                  this.CopyToGiveaway(d.data, v),
                  a !== void 0)
                ) {
                  const p = this.GetKey(s, a);
                  let I = this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(p);
                  I ||
                    ((I = new z()),
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(p, I)),
                    this.CopyToGiveaway(d.data, I);
                }
                return v;
              });
            return this.GetNextDrawChangeCallback(s).Dispatch(f), f;
          }
          static s_Singleton;
          static Get() {
            return (
              q.s_Singleton ||
                ((q.s_Singleton = new q()), q.s_Singleton.Init()),
              q.s_Singleton
            );
          }
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let s = (0, P.Tc)("giveawaynextdraw", "application_config");
              if (s && s.giveaway_id) {
                let a = new z();
                this.CopyToGiveaway(s, a),
                  this.m_mapGiveawayIDToNextDrawInfo.set(s.giveaway_id, a);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        w([c.sH], Q.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          w([c.XI], Q.prototype, "CopyToGiveaway", 1);
        let G = Q;
        const A = class ve {
          m_intervalID;
          m_intervalCountDownID;
          static s_GlobalInstance = 0;
          m_myInstanceNumber = 0;
          constructor() {
            (this.m_myInstanceNumber = ve.s_GlobalInstance),
              (ve.s_GlobalInstance += 1);
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
          SetupRefreshDataInterval(s, a) {
            if ((this.ClearRefreshInterval(), !s.closed)) {
              let y =
                s.seconds_until_drawing !== void 0 &&
                s.seconds_until_drawing <= 0 &&
                s.winner_count == 0
                  ? 60 * 1e3
                  : 5 * 1e3;
              this.m_intervalID = window.setInterval(a, y);
            }
          }
          SetupCountDown(s, a) {
            s !== void 0 &&
              s > 0 &&
              (this.m_intervalCountDownID = window.setInterval(a, 1e3));
          }
        };
        w([x.o], A.prototype, "ClearRefreshInterval", 1),
          w([x.o], A.prototype, "ClearCountDown", 1),
          w([x.o], A.prototype, "SetupRefreshDataInterval", 1),
          w([x.o], A.prototype, "SetupCountDown", 1);
        let D = A;
        function V(C, s) {
          const a = G.Get().GetInfoByInstance(C, s.m_myInstanceNumber);
          !a ||
            a.seconds_until_drawing === void 0 ||
            ((a.seconds_until_drawing -= 1),
            a.seconds_until_drawing == 0 && s.ClearCountDown());
        }
        function Y(C, s) {
          const a = G.Get().GetInfoByInstance(C, s.m_myInstanceNumber);
          a &&
            a.BIsValid() &&
            a.seconds_until_drawing !== void 0 &&
            a.seconds_until_drawing <= 0 &&
            !a.closed &&
            (s.ClearCountDown(),
            G.Get()
              .ReloadGiveaway(C, s.m_myInstanceNumber)
              .then((g) => {
                g && s.SetupCountDown(g.seconds_until_drawing, () => V(C, s));
              }));
        }
        function X(C) {
          const [s] = (0, N.useState)(new D()),
            a = (0, S.CH)();
          (0, N.useEffect)(
            () => (
              G.Get()
                .ReloadGiveaway(C, s.m_myInstanceNumber)
                .then((v) => {
                  v &&
                    (s.SetupRefreshDataInterval(v, () => Y(C, s)),
                    s.SetupCountDown(v.seconds_until_drawing, () => V(C, s)),
                    a());
                }),
              () => {
                s.ClearRefreshInterval(), s.ClearCountDown();
              }
            ),
            [s, C, a],
          );
          const g = G.Get().GetInfoByInstance(C, s.m_myInstanceNumber),
            [y, d, f] = (0, W.q3)(() => [
              g?.winner_count,
              g?.closed,
              g?.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !g || g.giveaway_id == null || !g.BStarted() || y === void 0,
            winner_count: y,
            closed: d,
            seconds_until_drawing: f,
          };
        }
      },
      19188: (E, K, e) => {
        "use strict";
        e.d(K, { N: () => g });
        var n = e(7850),
          H = e(41735),
          c = e.n(H),
          W = e(75844),
          N = e(90626),
          x = e(72849),
          h = e(90537),
          S = e(58483),
          P = e(82385),
          J = e(96538),
          $ = e(88843),
          w = e.n($),
          M = e(64641),
          z = e.n(M),
          Q = e(85599),
          G = e(34592),
          A = e(3166),
          D = e(72609),
          V = e(6469),
          Y = e(53107),
          X = e(25792),
          C = Object.defineProperty,
          s = Object.getOwnPropertyDescriptor,
          a = (d, f, v, p) => {
            for (
              var I = p > 1 ? void 0 : p ? s(f, v) : f, j = d.length - 1, _;
              j >= 0;
              j--
            )
              (_ = d[j]) && (I = (p ? _(f, v, I) : _(I)) || I);
            return p && I && C(f, v, I), I;
          };
        const g = (d) => {
          let { bShowOnlyInitialEvent: f } = d;
          const v = (0, A.Qn)(),
            p = (0, h.Y)();
          return (0, n.jsx)(X.tH, {
            children: (0, n.jsx)(y, {
              ...d,
              bShowOnlyInitialEvent: f || v,
              tracker: p,
            }),
          });
        };
        let y = class extends N.Component {
          state = { bLoading: !1, eventModel: this.props.eventModel };
          m_refParent = N.createRef();
          m_cancelSignal = c().CancelToken.source();
          componentDidMount() {
            this.state.eventModel ||
              this.setState({ bLoading: !0 }, this.LoadEvent);
            let d = this.GetBodyElement();
            d &&
              this.props.bPrimaryPageFeature &&
              d.classList.add($.BodyNoScroll);
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel("EventInfiniteScrollModal unmounting");
            let d = this.GetBodyElement();
            d &&
              this.props.bPrimaryPageFeature &&
              d.classList.remove($.BodyNoScroll);
          }
          GetBodyElement() {
            return this.m_refParent.current
              ? this.m_refParent.current.closest("body")
              : null;
          }
          async LoadEvent() {
            const {
              appid: d,
              clanSteamID: f,
              announcementGID: v,
              partnerEventStore: p,
              additionalParams: I,
            } = this.props;
            p.LoadAdjacentPartnerEventsByAnnouncement(
              v,
              f,
              d,
              0,
              3,
              I,
              this.m_cancelSignal,
            )
              .then((j) => {
                j.length > 0
                  ? this.setState(
                      { bLoading: !1, eventModel: j[0] },
                      this.HandleReadEvent,
                    )
                  : (this.props.onEventNotFound && this.props.onEventNotFound(),
                    this.setState({ bLoading: !1 }));
              })
              .catch((j) => {
                let _ = (0, G.H)(j);
                console.error(
                  "EventInfiniteScrollModal failed " + _.strErrorMsg,
                  _,
                ),
                  this.setState({ bLoading: !1 });
              });
          }
          async HandleReadEvent() {
            const { eventModel: d } = this.state,
              { trackingLocation: f, tracker: v } = this.props;
            d &&
              d.BIsPartnerEvent() &&
              (v.RecordEventRead(d, f ?? x.Tc.br), v.Flush());
          }
          render() {
            const { bShowOnlyInitialEvent: d } = this.props,
              { bLoading: f, eventModel: v } = this.state;
            if (f)
              return (0, n.jsx)(J.EN, {
                active: !0,
                children: (0, n.jsx)("div", {
                  className: z().FlexCenter,
                  style: { height: "400px" },
                  children: (0, n.jsx)(Q.t, {}),
                }),
              });
            const {
              closeModal: p,
              appid: I,
              clanSteamID: j,
              className: _,
              partnerEventStore: se,
              showAppHeader: ee,
              bPrimaryPageFeature: F,
              additionalParams: U,
              eventClassName: ae,
            } = this.props;
            let ne;
            D.TS.IN_CLIENT &&
              v?.appid &&
              (V.Fm.Get().HintLoad(),
              V.Fm.Get().BOwnsApp(v.appid) &&
                (ne = (te) =>
                  (0, Y.EP)(te, "steam://nav/games/details/" + v.appid)));
            const oe = (0, n.jsx)(S.sU, {
              children: (te) =>
                (0, n.jsx)(P.AD, {
                  initialEvent: v,
                  appid: I,
                  clanSteamID: j,
                  partnerEventStore: se,
                  emoticonStore: te,
                  closeModal: F ? void 0 : p,
                  showAppHeader: ee,
                  bShowOnlyInitialEvent: d,
                  additionalParams: U,
                  eventClassName: ae,
                  onAppIconClick: ne,
                }),
            });
            return F
              ? oe
              : (0, n.jsx)(J.EN, {
                  active: !0,
                  children: (0, n.jsx)("div", { className: _, children: oe }),
                });
          }
        };
        y = a([W.PA], y);
      },
      59970: (E, K, e) => {
        "use strict";
        e.d(K, { d: () => Dt });
        var n = e(7850),
          H = e(19367),
          c = e(90626),
          W = e(3685),
          N = e(85528),
          x = e(77495),
          h = e(18210),
          S = e(3166),
          P = e(75779),
          J = e(80902),
          $ = e(30454);
        async function w() {
          const t = await (0, $.d)(
            "ajaxgetuserdeckcompatcounts",
            new URLSearchParams(),
          );
          if (!t.counts)
            throw new Error(
              "ajaxgetuserdeckcompatcounts answered without counts",
            );
          return t.counts;
        }
        const M = 300 * 1e3;
        function z() {
          return ["DeckCompatCounts"];
        }
        function Q() {
          return { queryKey: z(), queryFn: () => w(), staleTime: M, retry: !1 };
        }
        function G() {
          const { data: t } = (0, J.I)(Q());
          return t;
        }
        function A(t, o) {
          switch (o) {
            case P.sd:
              return t?.playable;
            case P.V8:
              return t?.unsupported;
            default:
              return t?.verified;
          }
        }
        var D = e(70187),
          V = e(36549),
          Y = e(39153),
          X = e(99412),
          C = e(72609),
          s = e(25792),
          a = e(85599),
          g = e(41635),
          y = e(47610),
          d = e(18860),
          f = e(87805);
        function v(t) {
          const { event: o } = t.context,
            r = Number.parseInt((0, D.j$)(t.args)),
            l = c.useMemo(() => {
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
          if (r && l) {
            const i = Number.parseInt((0, D.j$)(t.args, "depositpackageid")),
              u = Number.parseInt((0, D.j$)(t.args, "psulesspackageid")),
              m = (0, D.j$)(t.args, "out_of_stock_override"),
              O = (0, D.j$)(t.args, "delivery_override"),
              b = (0, D.j$)(t.args, "delivery_override_out_of_stock");
            return (0, n.jsx)(p, {
              section: l,
              reservationPackageID: r,
              depositPackageID: i,
              psuLessPackageID: u,
              strOutOfStockOverride: m,
              strDeliveryOverride: b || O,
              bDeliveryOverrideOnlyIfOutOfStock: !!b,
              PreviewActions: t.PreviewActions,
            });
          }
          return (0, n.jsx)(n.Fragment, {});
        }
        function p(t) {
          const {
              reservationPackageID: o,
              depositPackageID: r,
              bIsPreview: l,
              psuLessPackageID: i,
              strOutOfStockOverride: u,
              strDeliveryOverride: m,
              bDeliveryOverrideOnlyIfOutOfStock: O,
              section: b,
              PreviewActions: T,
            } = t,
            { data: B } = (0, y.DR)(o),
            { data: Z } = (0, y.DR)(i),
            L = (0, c.useMemo)(
              () => [
                {
                  unique_id: "reservation_bbcode_" + o,
                  reservation_package: o,
                  deposit_package: r,
                  localized_reservation_desc: (0, g.$Y)([], X.bP9, null),
                  localized_out_of_stock_override: (0, g.$Y)(
                    [u || null],
                    X.bP9,
                    null,
                  ),
                  localized_delivery_override_desc: (0, g.$Y)(
                    [m || null],
                    X.bP9,
                    null,
                  ),
                  override_delivery_only_out_of_stock: !!O,
                  psu_less_package: i,
                },
              ],
              [o, r, u, m, O, i],
            );
          if (!B || (i && !Z))
            return (0, n.jsx)(a.t, {
              string: (0, h.we)("#Loading"),
              size: "small",
              position: "center",
            });
          const ht = !C.iA.logged_in || !B.account_restricted_from_purchasing,
            ye =
              B.reservation_state == d.G.k_EPurchaseReservationState_Reserved
                ? B
                : void 0;
          return (0, n.jsxs)(s.tH, {
            children: [
              T &&
                (0, n.jsx)(c.Suspense, {
                  fallback: null,
                  children: (0, n.jsx)(T, {
                    bIsPreview: !!l,
                    rgReservationDef: L,
                  }),
                }),
              !!B.allow_purchase_in_country &&
                (0, n.jsxs)("div", {
                  className: L[0].unique_id,
                  children: [
                    (0, n.jsx)(f.b, {
                      reservationDef: L[0],
                      hardwareDetail: B,
                      bPSULessModel: !1,
                      reservedHardwareDetail: ye,
                    }),
                    ht &&
                      (0, n.jsx)(f.p, {
                        section: b,
                        reservationDef: L[0],
                        hardwareDetail: B,
                        reservedHardwareDetail: ye,
                      }),
                    Z &&
                      Z?.allow_purchase_in_country &&
                      (0, n.jsx)(f.b, {
                        reservationDef: L[0],
                        hardwareDetail: Z,
                        bPSULessModel: !0,
                        reservedHardwareDetail: void 0,
                      }),
                  ],
                }),
            ],
          });
        }
        var I = e(6878),
          j = e(21035),
          _ = e(72865),
          se = e(38081),
          ee = e.n(se),
          F = e(36707),
          U = e(69596),
          ae = e(10026),
          ne = e.n(ae),
          oe = e(19298),
          te = e(11996),
          Ie = e(19047),
          re = e(36118),
          we = e(47689),
          fe = e(89926),
          pe = e(32545),
          ie = e.n(pe);
        function xe(t) {
          const { appID: o, classOverride: r, styleOverride: l } = t,
            [i, u] = (0, c.useState)(!1),
            m = (0, we.m)("GameHoverFollowButton"),
            { elDialogElement: O, fnShowLogonDialog: b } = (0, fe.l)(),
            T = (0, te.Fh)(o),
            { mutateAsync: B } = (0, Ie.L)(o, !T, void 0),
            Z = async (L) => {
              L.preventDefault(),
                L.stopPropagation(),
                S.iA.logged_in
                  ? (u(!0), await B(), m.token.reason || u(!1))
                  : b();
            };
          return (0, n.jsxs)(oe.Z, {
            className: (0, F.A)(ie().FollowButton, r),
            onClick: Z,
            style: l,
            children: [
              T ? (0, n.jsx)(re.pPV, {}) : (0, n.jsx)(re.c9e, {}),
              (0, n.jsx)("div", {
                className: (0, F.A)(
                  ie().FollowButtonText,
                  i && ie().FollowLoadingText,
                  "FollowGameButton",
                ),
                children: (0, h.we)(
                  T ? "#Sale_StopFollowingGame" : "#Sale_FollowGame",
                ),
              }),
              O,
            ],
          });
        }
        function Ee(t) {
          const { appid: o, color: r, bgcolor: l } = t,
            i = (0, _.n9)();
          return (0, n.jsx)(xe, {
            appID: o,
            classOverride: (0, F.A)(
              ee().FollowGameButtonNotTop,
              ne().BBCodeFollowButton,
            ),
            styleOverride: { color: r, backgroundColor: l },
          });
        }
        function Be(t) {
          const o = Number(t.args.appid);
          if (!o) return null;
          const r = (0, U.O)(t.args.color, "black"),
            l = (0, U.O)(t.args.bgcolor, "white");
          return (0, n.jsx)(Ee, { appid: o, color: r, bgcolor: l });
        }
        var le = e(57646);
        function Pe(t) {
          const o = Number(t.args.packageid);
          return o
            ? (0, n.jsx)(le.eF, {
                packageID: o,
                display_style: (0, le._w)(t.args.display),
              })
            : null;
        }
        function je(t) {
          const o = Number(t.args.packageid),
            r = Number(t.args.compareid);
          return !o || !r
            ? null
            : (0, n.jsx)(le.hJ, { packageID: o, compareID: r });
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
          const { clanAccountID: o, color: r, bgcolor: l } = t,
            [i, u] = c.useState(!1);
          return (0, n.jsx)("div", {
            className: (0, F.A)(me().BBCodeFollowButton, i && me().isHovered),
            onMouseEnter: () => u(!0),
            onMouseLeave: () => u(!1),
            children: (0, n.jsx)(Me.Q, {
              nCreatorAccountID: o,
              classOverride: ee().FollowGameButtonNotTop,
              styleOverride: { color: r, backgroundColor: l },
              followType: "group",
            }),
          });
        }
        function be(t) {
          const { event: o } = t.context,
            r = Number(t.args.groupid) || o?.clanSteamID.GetAccountID();
          if (!r) return null;
          const l = (0, U.O)(t.args.color, "black"),
            i = (0, U.O)(t.args.bgcolor, "white");
          return (0, n.jsx)(_e, { clanAccountID: r, color: l, bgcolor: i });
        }
        var Te = e(83482),
          Le = e(44267),
          Ne = e(9202),
          ge = e.n(Ne),
          Ge = e(29522);
        function Ae(t) {
          const { appid: o, color: r, bgcolor: l } = t,
            i = (0, _.n9)(),
            u = (0, Ge.$5)(o),
            m = (0, Te.L3)(i);
          return (0, n.jsx)("div", {
            className: ge().WishlistHoverCtn,
            children: (0, n.jsx)(Le.E, {
              snr: m,
              id: u,
              classOverride: (0, F.A)(
                ee().WishlistButtonNotTop,
                ge().BBCodeWishlistButton,
                "WishlistButton",
              ),
              styleOverride: { color: r, backgroundColor: l },
              bShowInGamepadUI: !0,
            }),
          });
        }
        function Re(t) {
          const o = Number(t.args.appid);
          if (!o) return null;
          const r = (0, U.O)(t.args.color, "black"),
            l = (0, U.O)(t.args.bgcolor, "white");
          return (0, n.jsx)(Ae, { appid: o, color: r, bgcolor: l });
        }
        let ce = null;
        function We() {
          return (
            ce == null &&
              (ce = new Map([
                ["wishlist", { Constructor: Re, autocloses: !1 }],
                ["followgroup", { Constructor: be, autocloses: !1 }],
                ["classname", { Constructor: Oe, autocloses: !1 }],
                ["price", { Constructor: Pe, autocloses: !1 }],
                ["pricesavings", { Constructor: je, autocloses: !1 }],
                ["reservationbutton", { Constructor: v, autocloses: !1 }],
              ])),
            ce
          );
        }
        var Fe = e(37656),
          R = e(29868),
          k = e(24642);
        function De(t) {
          return t < 10 ? "0" + t : t;
        }
        function Ue(t) {
          const { giveawayid: o } = t,
            r = (0, Fe.w)(o),
            {
              bLoadingGiveawayInfo: l,
              winner_count: i,
              closed: u,
              seconds_until_drawing: m,
            } = r;
          return l
            ? null
            : (0, n.jsxs)("div", {
                className: R.countdownCtn,
                children: [
                  !!u &&
                    (0, n.jsx)("div", {
                      className: R.Closed,
                      children:
                        i > 0
                          ? (0, h.we)("#Giveaway_Closed", (0, k.D)(i))
                          : (0, h.we)("#Giveaway_Closed_NoWinnerInfo"),
                    }),
                  !u &&
                    (0, n.jsxs)(c.Fragment, {
                      children: [
                        m <= 0
                          ? (0, n.jsxs)("div", {
                              className: R.Throbber,
                              children: [
                                (0, n.jsx)(a.t, { size: "small" }),
                                (0, n.jsx)("div", {
                                  children: (0, h.we)("#Giveaway_RandomDraw"),
                                }),
                              ],
                            })
                          : (0, n.jsxs)("div", {
                              className: R.CountDownCtn,
                              children: [
                                (0, n.jsx)("div", {
                                  className: R.CountDownTime,
                                  children:
                                    De(Math.floor(m / 60)) + ":" + De(m % 60),
                                }),
                                (0, n.jsxs)("div", {
                                  className: R.CountDownText,
                                  children: [
                                    (0, h.we)("#Giveaway_CountDown2"),
                                    " ",
                                    (0, h.we)("#Giveaway_KeepWatching"),
                                  ],
                                }),
                              ],
                            }),
                        i > 0 &&
                          (0, n.jsxs)("div", {
                            className: R.WinnerInfo,
                            children: [
                              (0, n.jsx)("div", {
                                className: R.WinnerCount,
                                children: (0, k.D)(i),
                              }),
                              (0, n.jsx)("div", {
                                className: R.WinnerText,
                                children: (0, h.we)("#Giveaway_Congratulation"),
                              }),
                            ],
                          }),
                      ],
                    }),
                ],
              });
        }
        var Ke = e(88245),
          He = e(35702),
          $e = e(16412),
          ze = e(92757),
          Qe = e(39256),
          Ve = e(4720),
          Ye = e(75110),
          Xe = e(57810),
          de = e(36631),
          Ze = e(76281),
          he = e(81416);
        function Je(t) {
          const { eventModel: o, nEventBadgeID: r } = t,
            l = (0, He.fy)(r);
          if (l?.level > 0) {
            let i = l.level;
            if (o?.BHasSaleEnabled()) {
              const u = o.GetSaleSectionsByType("badge_progress");
              if (u?.length == 1) {
                const m = u[0].badge_progress;
                if (m?.event_badgeid == r && m?.granted_by_discovery_queue) {
                  const O = m.levels[m.levels.length - 1].level;
                  return (0, n.jsx)(ke, {
                    eventModel: o,
                    nBadgeLevel: i,
                    nMaxLevel: O,
                  });
                }
              }
            }
            return (0, n.jsx)("span", {
              className: "DisplayBadgeProgress",
              children: (0, k.D)(i),
            });
          }
          return null;
        }
        function ke(t) {
          const { eventModel: o, nBadgeLevel: r, nMaxLevel: l } = t,
            i = c.useMemo(() => {
              const T = o
                .GetSaleSections()
                .filter((B) => B.section_type == "discoveryqueue");
              return T?.length > 0 ? T[0] : null;
            }, [o]),
            { storePageFilter: u, eStoreDiscoveryQueueType: m } = c.useMemo(
              () => (0, Ye.lx)(o, i),
              [o, i],
            ),
            O = (0, Xe.Uf)(m, u),
            b = Math.min(r + O, l);
          return (0, n.jsx)("span", {
            className: "DisplayBadgeProgress",
            children: (0, k.D)(b),
          });
        }
        function qe(t) {
          const { event: o } = t.context,
            r = Number.parseInt((0, D.j$)(t.args, "eventid"));
          return S.iA.logged_in && r
            ? (0, n.jsx)(Je, { nEventBadgeID: r, eventModel: o })
            : null;
        }
        function et(t) {
          const { nDoorIndex: o, children: r } = t,
            l = (0, Y.OM)(o),
            i = (0, Y.gP)(),
            [u, m] = c.useState(!1),
            [O, b] = c.useState(!1),
            { elDialogElement: T, fnShowLogonDialog: B } = (0, fe.l)();
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)($e.$n, {
                disabled: l,
                onClick: (Z) => {
                  u ||
                    (S.iA.logged_in
                      ? (m(!0),
                        i({ iDoorIndex: o })
                          .then((L) => {
                            L || b(!0), m(!1);
                          })
                          .catch(() => {
                            b(!0), m(!1);
                          }))
                      : B());
                },
                children: O
                  ? (0, n.jsx)("div", {
                      children: (0, h.we)("#GrantAwardError_Busy"),
                    })
                  : (0, n.jsxs)(n.Fragment, {
                      children: [
                        !!u && (0, n.jsx)(a.t, { size: "small" }),
                        !!l && (0, n.jsx)(re.Jlk, {}),
                        r,
                      ],
                    }),
              }),
              T,
            ],
          });
        }
        function tt(t) {
          const o = Number.parseInt((0, D.j$)(t.args)) || 0;
          return o >= 0 && o < 32
            ? (0, n.jsx)(et, { nDoorIndex: o, children: t.children })
            : null;
        }
        const nt = (0, ze.y)(Ze.H);
        function ot(t) {
          const o = Number.parseInt((0, D.j$)(t.args)),
            { event: r, showErrorInfo: l } = t.context;
          if (o) {
            const i = r?.jsondata?.sale_sections?.findIndex(
              (u) => u.unique_id == o,
            );
            if (i >= 0) {
              const u = r.GetDayIndexFromEventStart();
              return (0, n.jsx)(de.Cs, {
                location: l ? de.HY : de.bs,
                children: (0, n.jsx)(nt, {
                  event: r,
                  section: r.jsondata.sale_sections[i],
                  activeTab: new Ve.y(null, u),
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
                className: Qe.ErrorDiv,
                children: ["Error could not find sale section ", o],
              });
          }
          return null;
        }
        let ue = null;
        function st() {
          return (
            ue == null &&
              (ue = new Map([
                ...Array.from(We().entries()),
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
                ["reservationbutton", { Constructor: ft, autocloses: !1 }],
              ])),
            ue
          );
        }
        function at(t) {
          const { event: o } = t.context,
            r = Number.parseInt((0, D.j$)(t.args, "appid")),
            l = Number.parseInt((0, D.j$)(t.args, "itemdefid")),
            i = Number.parseInt((0, D.j$)(t.args, "maxquantity")),
            u = (0, D.j$)(t.args, "calltoaction");
          return !(0, Ke.gS)(r, l, !1) || !o
            ? (0, n.jsx)(a.t, {
                size: "small",
                position: "center",
                string: (0, h.we)("#Loading"),
              })
            : (0, n.jsx)(j.f, {
                language: t.language,
                clanAccountID: o.clanSteamID.GetAccountID(),
                itemDefSetting: { nAppID: r, nItemDefID: l, max_quantity: i },
                strCallToAction: u,
              });
        }
        function rt(t) {
          const o = G();
          if (!o) return (0, n.jsx)(a.t, { size: "small" });
          const r = Number.parseInt((0, D.j$)(t.args));
          return (0, n.jsx)("span", { children: (0, k.D)(Number(A(o, r))) });
        }
        function it(t) {
          const o = (0, V.jR)(S.iA.accountid, "library");
          if (!o) return (0, n.jsx)(a.t, { size: "small" });
          const r = Number.parseInt((0, D.j$)(t.args));
          let l = o.verifiedList?.length || 0;
          switch (r) {
            case P.sd:
              l = o.playableList?.length || 0;
              break;
            case P.V8:
              l = o.unsupportedList?.length || 0;
              break;
            case P.YX:
              l = o.unknownList?.length || 0;
              break;
          }
          return (0, n.jsx)("span", { children: (0, k.D)(Number(l)) });
        }
        function lt(t) {
          const o = Number.parseInt((0, D.j$)(t.args)),
            r =
              "hide" in t.args && !!Number.parseInt((0, D.j$)(t.args, "hide"));
          return o >= 0
            ? (0, n.jsx)(ct, { nDoorIndex: o, bHide: r, children: t.children })
            : null;
        }
        function ct(t) {
          const { nDoorIndex: o, bHide: r, children: l } = t,
            i = (0, Y.OM)(o);
          return i == null
            ? null
            : (i && !r) || (!i && r)
              ? (0, n.jsx)(n.Fragment, { children: t.children })
              : null;
        }
        function dt(t) {
          return (0, n.jsx)("span", {
            className: I.LocalizeBlock,
            children: (0, h.oW)(
              t.children,
              (0, n.jsx)("b", {}),
              (0, n.jsx)("b", {}),
              (0, n.jsx)("b", {}),
              (0, n.jsx)("b", {}),
            ),
          });
        }
        function ut(t) {
          let o = (0, D.j$)(t.args);
          return o
            ? (0, n.jsx)(Ue, { giveawayid: o })
            : (0, n.jsx)(c.Fragment, {});
        }
        const vt = void 0;
        function ft(t) {
          return (0, n.jsx)(v, { ...t, PreviewActions: vt });
        }
        var mt = e(71698),
          gt = e(94520);
        function Dt(t) {
          const { bSalePage: o } = t,
            [r, l] = c.useState(!1);
          return (
            (0, mt.H)(r, o),
            c.useEffect(() => {
              N.Vw.Init(new W.D(S.TS.WEBAPI_BASE_URL)), x.O3.Init(), l(!0);
            }, []),
            c.useEffect(() => {
              const i = (0, h.l4)();
              i && H.locale(i);
            }, []),
            r
              ? o
                ? (0, n.jsx)(gt.d3, { dictionary: st(), children: t.children })
                : t.children
              : null
          );
        }
      },
      32545: (E) => {
        E.exports = {
          "duration-app-launch": "800ms",
          FollowButton: "c-TDTqD2D5mBLfTqn3fSV",
          FollowButtonText: "_2PmgMkPwEgmuCJVZLTGSPi",
          FollowLoadingText: "_2XN3sBlgsLE3n5WrKOkWxi",
        };
      },
      10026: (E) => {
        E.exports = { BBCodeFollowButton: "NVuxjpTCUClP-4RsNDDvk" };
      },
      18657: (E) => {
        E.exports = {
          BBCodeFollowButton: "BwHJdoHlv8wy5OypqL_b7",
          isHovered: "_2EcgCb9lHfl7I_MlirYLZL",
        };
      },
      29868: (E) => {
        E.exports = {
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
      9202: (E) => {
        E.exports = {
          "duration-app-launch": "800ms",
          storeMenuResponsiveModeWidth: "730px",
          SuppressScrollOnBody: "_1FFwlWIoDrtb0qdN9YUwHs",
          WishlistHoverCtn: "GXjJQihysg6S5INBKClED",
          BBCodeWishlistButton: "_1dm-6uzq_x5Gqo421G3a1r",
        };
      },
    },
  ]);
})();
