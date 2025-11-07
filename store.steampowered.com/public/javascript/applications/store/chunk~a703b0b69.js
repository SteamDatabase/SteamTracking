/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2062],
  {
    10026: (e) => {
      e.exports = { BBCodeFollowButton: "NVuxjpTCUClP-4RsNDDvk" };
    },
    18657: (e) => {
      e.exports = { BBCodeFollowButton: "BwHJdoHlv8wy5OypqL_b7" };
    },
    29868: (e) => {
      e.exports = {
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
    9202: (e) => {
      e.exports = { BBCodeWishlistButton: "_1dm-6uzq_x5Gqo421G3a1r" };
    },
    94057: (e, t, n) => {
      "use strict";
      n.d(t, { w: () => p });
      var o = n(34629),
        a = n(41735),
        r = n.n(a),
        s = n(14947),
        l = n(65946),
        i = n(90626),
        c = n(6419),
        u = n(6144),
        d = n(84933),
        m = n(78327);
      class _ {
        constructor() {
          (0, s.Gn)(this);
        }
        giveaway_id = void 0;
        seconds_until_drawing = void 0;
        rtime_start = void 0;
        rtime_end = void 0;
        closed = void 0;
        winner_count = void 0;
        BIsValid() {
          return void 0 !== this.giveaway_id && null !== this.giveaway_id;
        }
        BStarted() {
          return (
            this.BIsValid() &&
            (this.seconds_until_drawing >= 0 || this.winner_count > 0)
          );
        }
        clone() {
          const e = new _();
          return (
            (e.giveaway_id = this.giveaway_id),
            (e.seconds_until_drawing = this.seconds_until_drawing),
            (e.rtime_start = this.rtime_start),
            (e.rtime_end = this.rtime_end),
            (e.closed = this.closed),
            (e.winner_count = this.winner_count),
            e
          );
        }
      }
      (0, o.Cg)([s.sH], _.prototype, "giveaway_id", void 0),
        (0, o.Cg)([s.sH], _.prototype, "seconds_until_drawing", void 0),
        (0, o.Cg)([s.sH], _.prototype, "rtime_start", void 0),
        (0, o.Cg)([s.sH], _.prototype, "rtime_end", void 0),
        (0, o.Cg)([s.sH], _.prototype, "closed", void 0),
        (0, o.Cg)([s.sH], _.prototype, "winner_count", void 0);
      class g {
        constructor() {
          (0, s.Gn)(this);
        }
        m_mapGiveawayIDToNextDrawInfo = new Map();
        m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
        m_bLoadedFromConfig = !1;
        m_mapNextDrawChangeCallback = new Map();
        GetKey(e, t) {
          return e + "_" + t;
        }
        GetInfoByInstance(e, t) {
          return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
            this.GetKey(e, t),
          );
        }
        GetNextDrawChangeCallback(e) {
          return (
            this.m_mapNextDrawChangeCallback.has(e) ||
              this.m_mapNextDrawChangeCallback.set(e, new u.lu()),
            this.m_mapNextDrawChangeCallback.get(e)
          );
        }
        CopyToGiveaway(e, t) {
          t.closed != e.closed && (t.closed = e.closed),
            t.giveaway_id != e.giveaway_id && (t.giveaway_id = e.giveaway_id),
            t.rtime_start != e.rtime_start && (t.rtime_start = e.rtime_start),
            t.rtime_end != e.rtime_end && (t.rtime_end = e.rtime_end),
            t.winner_count != e.winner_count &&
              (t.winner_count = e.winner_count),
            t.seconds_until_drawing != e.seconds_until_drawing &&
              (t.seconds_until_drawing = e.seconds_until_drawing);
        }
        async ReloadGiveaway(e, t) {
          if (!e) return null;
          let n = m.TS.STORE_BASE_URL + "prizes/nextdraw/" + e,
            o = null,
            a = { origin: self.origin };
          return (
            (o = await r().get(n, { params: a })),
            (0, s.h5)(() => {
              if (
                (this.m_mapGiveawayIDToNextDrawInfo.has(e) ||
                  this.m_mapGiveawayIDToNextDrawInfo.set(e, new _()),
                this.CopyToGiveaway(
                  o.data,
                  this.m_mapGiveawayIDToNextDrawInfo.get(e),
                ),
                void 0 !== t)
              ) {
                const n = this.GetKey(e, t);
                this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(n) ||
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(n, new _()),
                  this.CopyToGiveaway(
                    o.data,
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(n),
                  );
              }
            }),
            this.GetNextDrawChangeCallback(e).Dispatch(
              this.m_mapGiveawayIDToNextDrawInfo.get(e),
            ),
            this.m_mapGiveawayIDToNextDrawInfo.get(e)
          );
        }
        static s_Singleton;
        static Get() {
          return (
            g.s_Singleton ||
              ((g.s_Singleton = new g()),
              g.s_Singleton.Init(),
              "dev" == m.TS.WEB_UNIVERSE &&
                (window.g_GiveawayStore = g.s_Singleton)),
            g.s_Singleton
          );
        }
        Init() {
          if (!this.m_bLoadedFromConfig) {
            let e = (0, m.Tc)("giveawaynextdraw", "application_config");
            if (e && e.giveaway_id) {
              let t = new _();
              this.CopyToGiveaway(e, t),
                this.m_mapGiveawayIDToNextDrawInfo.set(e.giveaway_id, t);
            }
            this.m_bLoadedFromConfig = !0;
          }
        }
      }
      (0, o.Cg)([s.sH], g.prototype, "m_mapGiveawayIDToNextDrawInfo", void 0),
        (0, o.Cg)([s.XI], g.prototype, "CopyToGiveaway", null);
      class w {
        m_intervalID;
        m_intervalCountDownID;
        static s_GlobalInstance = 0;
        m_myInstanceNumber = 0;
        constructor() {
          (this.m_myInstanceNumber = w.s_GlobalInstance),
            (w.s_GlobalInstance += 1);
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
        SetupRefreshDataInterval(e, t) {
          if ((this.ClearRefreshInterval(), !e.closed)) {
            let n =
              e.seconds_until_drawing <= 0 && 0 == e.winner_count ? 6e4 : 5e3;
            this.m_intervalID = window.setInterval(t, n);
          }
        }
        SetupCountDown(e, t) {
          e > 0 && (this.m_intervalCountDownID = window.setInterval(t, 1e3));
        }
      }
      function v(e, t) {
        const n = g.Get().GetInfoByInstance(e, t.m_myInstanceNumber);
        (n.seconds_until_drawing -= 1),
          0 == n.seconds_until_drawing && t.ClearCountDown();
      }
      function p(e) {
        const [t] = (0, i.useState)(new w()),
          n = (0, d.CH)();
        (0, i.useEffect)(
          () => (
            g
              .Get()
              .ReloadGiveaway(e, t.m_myInstanceNumber)
              .then((o) => {
                t.SetupRefreshDataInterval(o, () =>
                  (function (e, t) {
                    const n = g
                      .Get()
                      .GetInfoByInstance(e, t.m_myInstanceNumber);
                    n &&
                      n.BIsValid() &&
                      n.seconds_until_drawing <= 0 &&
                      !n.closed &&
                      (t.ClearCountDown(),
                      g
                        .Get()
                        .ReloadGiveaway(e, t.m_myInstanceNumber)
                        .then((n) => {
                          t.SetupCountDown(n.seconds_until_drawing, () =>
                            v(e, t),
                          );
                        }));
                  })(e, t),
                ),
                  t.SetupCountDown(o.seconds_until_drawing, () => v(e, t)),
                  n();
              }),
            () => {
              t.ClearRefreshInterval(), t.ClearCountDown();
            }
          ),
          [t, e, n],
        );
        const o = g.Get().GetInfoByInstance(e, t.m_myInstanceNumber),
          [a, r, s] = (0, l.q3)(() => [
            o?.winner_count,
            o?.closed,
            o?.seconds_until_drawing,
          ]);
        return {
          bLoadingGiveawayInfo:
            !o || null == o.giveaway_id || !o.BStarted() || void 0 === a,
          winner_count: a,
          closed: r,
          seconds_until_drawing: s,
        };
      }
      (0, o.Cg)([c.o], w.prototype, "ClearRefreshInterval", null),
        (0, o.Cg)([c.o], w.prototype, "ClearCountDown", null),
        (0, o.Cg)([c.o], w.prototype, "SetupRefreshDataInterval", null),
        (0, o.Cg)([c.o], w.prototype, "SetupCountDown", null);
    },
    63486: (e, t, n) => {
      "use strict";
      n.d(t, { d: () => xe });
      var o = n(19367),
        a = n(90626),
        r = n(72034),
        s = n(51006),
        l = n(60746),
        i = n(6379),
        c = n(61859),
        u = n(78327),
        d = n(59952),
        m = n(41735),
        _ = n.n(m),
        g = n(68797);
      class w {
        m_counts = null;
        m_promise;
        GetCounts() {
          return this.m_counts;
        }
        async LoadCounts() {
          return Boolean(this.m_counts)
            ? this.m_counts
            : (this.m_promise || (this.m_promise = this.LoadInternalCount()),
              this.m_promise);
        }
        async LoadInternalCount() {
          let e = null;
          try {
            const t =
                u.TS.STORE_BASE_URL + "saleaction/ajaxgetuserdeckcompatcounts",
              n = await _().get(t, {});
            if (200 == n?.status && 1 == n.data?.success && n.data?.counts)
              return (this.m_counts = n.data.counts), this.m_counts;
            e = (0, g.H)(n);
          } catch (t) {
            e = (0, g.H)(t);
          }
          return (
            console.error(
              "CDeckCompCountStore.LoadInternalCount failed: " + e?.strErrorMsg,
              e,
            ),
            null
          );
        }
        static s_globalSingletonStore;
        static Get() {
          return (
            w.s_globalSingletonStore ||
              ((w.s_globalSingletonStore = new w()),
              ("dev" != u.TS.WEB_UNIVERSE && "beta" != u.TS.WEB_UNIVERSE) ||
                (window.g_DeckCompatCountStores = w.s_globalSingletonStore)),
            w.s_globalSingletonStore
          );
        }
        constructor() {
          if (document.getElementById("application_config")) {
            let e = (0, u.Tc)("deckcompatcount", "application_config");
            w.ValidateListCompat(e) && (this.m_counts = e);
          }
        }
        static ValidateListCompat(e) {
          const t = e;
          return (
            t &&
            "number" == typeof t.verified &&
            "number" == typeof t.unsupported &&
            "number" == typeof t.playable
          );
        }
      }
      var v = n(85320),
        p = n(56631),
        I = n(35400),
        f = n(6878),
        y = n(84811),
        h = n(22797),
        C = n(77291),
        D = n(19267),
        b = n(8527),
        E = n(62490);
      const N = a.Fragment;
      function S(e) {
        const {
            reservationPackageID: t,
            event: n,
            depositPackageID: o,
            bIsPreview: r,
            psuLessPackageID: s,
            strOutOfStockOverride: l,
            strDeliveryOverride: i,
            bDeliveryOverrideOnlyIfOutOfStock: u,
          } = e,
          d = (0, D.DR)(t),
          m = (0, D.DR)(s),
          _ = (0, a.useMemo)(
            () => [
              {
                unique_id: "reservation_bbcode_" + t,
                reservation_package: t,
                deposit_package: o,
                localized_reservation_desc: (0, E.$Y)([], 31, null),
                localized_out_of_stock_override: (0, E.$Y)(
                  [l || null],
                  31,
                  null,
                ),
                localized_delivery_override_desc: (0, E.$Y)(
                  [i || null],
                  31,
                  null,
                ),
                override_delivery_only_out_of_stock: Boolean(u),
                psu_less_package: s,
              },
            ],
            [t, o, l, i, u, s],
          );
        if (!d || (s && !m))
          return a.createElement(h.t, {
            string: (0, c.we)("#Loading"),
            size: "small",
            position: "center",
          });
        const g = !b.iA.logged_in || !d.account_restricted_from_purchasing;
        return a.createElement(
          y.tH,
          null,
          a.createElement(
            a.Suspense,
            { fallback: null },
            a.createElement(N, { bIsPreview: r, rgReservationDef: _ }),
          ),
          Boolean(d.allow_purchase_in_country) &&
            a.createElement(
              "div",
              { className: _[0].unique_id },
              a.createElement(C.bk, {
                reservationDef: _[0],
                hardwareDetail: d,
                bPSULessModel: !1,
              }),
              g &&
                a.createElement(C.pc, {
                  event: n,
                  reservationDef: _[0],
                  hardwareDetail: d,
                }),
              Boolean(m?.allow_purchase_in_country) &&
                a.createElement(C.bk, {
                  reservationDef: _[0],
                  hardwareDetail: m,
                  bPSULessModel: !0,
                }),
            ),
        );
      }
      var G = n(28188),
        k = n(60014),
        B = n(55963),
        x = n(83284),
        T = n.n(x),
        L = n(52038),
        O = n(26101),
        A = n(20446),
        j = n(9202),
        M = n.n(j);
      function R(e) {
        const { appid: t, color: n, bgcolor: o } = e,
          r = (0, k.n9)(),
          s = (0, B.L3)(r);
        return a.createElement(O.EP, {
          snr: s,
          appID: t,
          classOverride: (0, L.A)(
            T().WishlistButtonNotTop,
            M().BBCodeWishlistButton,
            "WishlistButton",
          ),
          styleOverride: { color: n, backgroundColor: o },
        });
      }
      function F(e) {
        const t = Number(e.args.appid);
        if (!t) return null;
        const n = (0, A.O)(e.args.color, "black"),
          o = (0, A.O)(e.args.bgcolor, "white");
        return a.createElement(R, { appid: t, color: n, bgcolor: o });
      }
      var P = n(10026),
        $ = n.n(P);
      function W(e) {
        const { appid: t, color: n, bgcolor: o } = e;
        (0, k.n9)();
        return a.createElement(O.gi, {
          appID: t,
          classOverride: (0, L.A)(
            T().FollowGameButtonNotTop,
            $().BBCodeFollowButton,
          ),
          styleOverride: { color: n, backgroundColor: o },
        });
      }
      function H(e) {
        const t = Number(e.args.appid);
        if (!t) return null;
        const n = (0, A.O)(e.args.color, "black"),
          o = (0, A.O)(e.args.bgcolor, "white");
        return a.createElement(W, { appid: t, color: n, bgcolor: o });
      }
      var q = n(94057),
        z = n(29868);
      function U(e) {
        return e < 10 ? "0" + e : e;
      }
      function V(e) {
        const { giveawayid: t } = e,
          n = (0, q.w)(t),
          {
            bLoadingGiveawayInfo: o,
            winner_count: r,
            closed: s,
            seconds_until_drawing: l,
          } = n;
        return o
          ? null
          : a.createElement(
              "div",
              { className: z.countdownCtn },
              Boolean(s) &&
                a.createElement(
                  "div",
                  { className: z.Closed },
                  r > 0
                    ? (0, c.we)("#Giveaway_Closed", r.toLocaleString())
                    : (0, c.we)("#Giveaway_Closed_NoWinnerInfo"),
                ),
              Boolean(!s) &&
                a.createElement(
                  a.Fragment,
                  null,
                  Boolean(l <= 0)
                    ? a.createElement(
                        "div",
                        { className: z.Throbber },
                        a.createElement(h.t, { size: "small" }),
                        a.createElement(
                          "div",
                          null,
                          (0, c.we)("#Giveaway_RandomDraw"),
                        ),
                      )
                    : a.createElement(
                        "div",
                        { className: z.CountDownCtn },
                        a.createElement(
                          "div",
                          { className: z.CountDownTime },
                          U(Math.floor(l / 60)) + ":" + U(l % 60),
                        ),
                        a.createElement(
                          "div",
                          { className: z.CountDownText },
                          (0, c.we)("#Giveaway_CountDown2"),
                          " ",
                          (0, c.we)("#Giveaway_KeepWatching"),
                        ),
                      ),
                  Boolean(r > 0) &&
                    a.createElement(
                      "div",
                      { className: z.WinnerInfo },
                      a.createElement(
                        "div",
                        { className: z.WinnerCount },
                        r.toLocaleString(),
                      ),
                      a.createElement(
                        "div",
                        { className: z.WinnerText },
                        (0, c.we)("#Giveaway_Congratulation"),
                      ),
                    ),
                ),
            );
      }
      var Q = n(10962),
        K = n(39733),
        X = n(53835),
        Y = n(12155),
        Z = n(82477),
        J = n(92757),
        ee = n(39256),
        te = n(99487),
        ne = n(7193),
        oe = n(39199),
        ae = n(96971),
        re = n(11632),
        se = n(40353);
      function le(e) {
        const { eventModel: t, nEventBadgeID: n } = e,
          o = (0, K.fy)(n);
        if (o?.level > 0) {
          let e = o.level;
          if (t?.BHasSaleEnabled()) {
            const o = t.GetSaleSectionsByType("badge_progress");
            if (1 == o?.length) {
              const r = o[0].badge_progress;
              if (r?.event_badgeid == n && r?.granted_by_discovery_queue) {
                const n = r.levels[r.levels.length - 1].level;
                return a.createElement(ie, {
                  eventModel: t,
                  nBadgeLevel: e,
                  nMaxLevel: n,
                });
              }
            }
          }
          return a.createElement(
            "span",
            { className: "DisplayBadgeProgress" },
            e.toLocaleString(),
          );
        }
        return null;
      }
      function ie(e) {
        const { eventModel: t, nBadgeLevel: n, nMaxLevel: o } = e,
          r = a.useMemo(() => {
            const e = t
              .GetSaleSections()
              .filter((e) => "discoveryqueue" == e.section_type);
            return e?.length > 0 ? e[0] : null;
          }, [t]),
          { storePageFilter: s, eStoreDiscoveryQueueType: l } = a.useMemo(
            () => (0, ne.lx)(t, r),
            [t, r],
          ),
          i = (0, oe.Uf)(l, s),
          c = Math.min(n + i, o);
        return a.createElement(
          "span",
          { className: "DisplayBadgeProgress" },
          c.toLocaleString(),
        );
      }
      function ce(e) {
        const { event: t } = e.context,
          n = Number.parseInt((0, d.j$)(e.args, "eventid"));
        return u.iA.logged_in && n
          ? a.createElement(le, { nEventBadgeID: n, eventModel: t })
          : null;
      }
      function ue(e) {
        const { nDoorIndex: t, children: n } = e,
          o = (0, I.OM)(t),
          { fnOpenDoor: r } = (0, I.OC)(),
          [s, l] = a.useState(!1),
          [i, d] = a.useState(!1);
        return a.createElement(
          X.$n,
          {
            disabled: o,
            onClick: (e) => {
              s ||
                (u.iA.logged_in
                  ? (l(!0),
                    r(t, !0, null, !1)
                      .then((e) => {
                        e || d(!0), l(!1);
                      })
                      .catch(() => {
                        d(!0), l(!1);
                      }))
                  : (0, Z.vg)());
            },
          },
          Boolean(i)
            ? a.createElement("div", null, (0, c.we)("#GrantAwardError_Busy"))
            : a.createElement(
                a.Fragment,
                null,
                Boolean(s) && a.createElement(h.t, { size: "small" }),
                Boolean(o) && a.createElement(Y.Jlk, null),
                n,
              ),
        );
      }
      function de(e) {
        const t = Number.parseInt((0, d.j$)(e.args)) || 0;
        return t >= 0 && t < 32
          ? a.createElement(ue, { nDoorIndex: t }, e.children)
          : null;
      }
      const me = (0, J.y)(re.H);
      function _e(e) {
        const t = Number.parseInt((0, d.j$)(e.args)),
          { event: n, showErrorInfo: o } = e.context;
        if (t) {
          const r = n?.jsondata?.sale_sections?.findIndex(
            (e) => e.unique_id == t,
          );
          if (r >= 0) {
            const t = n.GetDayIndexFromEventStart();
            return a.createElement(
              ae.Cs,
              { location: o ? 2 : 0 },
              a.createElement(me, {
                event: n,
                section: n.jsondata.sale_sections[r],
                activeTab: new te.y(null, t),
                language: e.language,
                nSaleDayIndex: t,
                promotionName: "",
                appVisibilityTracker: null,
                ePreviewMode: o
                  ? se.S.EPreviewMode_Enabled
                  : se.S.EPreviewMode_Disabled,
              }),
            );
          }
          if (o)
            return a.createElement(
              "div",
              { className: ee.ErrorDiv },
              "Error could not find sale section ",
              t,
            );
        }
        return null;
      }
      var ge = n(30894),
        we = n(18657),
        ve = n.n(we);
      function pe(e) {
        const { clanAccountID: t, color: n, bgcolor: o } = e;
        return (
          (0, ge.L2)(),
          a.createElement(O.Q3, {
            nCreatorAccountID: t,
            classOverride: (0, L.A)(
              T().FollowGameButtonNotTop,
              ve().BBCodeFollowButton,
            ),
            styleOverride: { color: n, backgroundColor: o },
          })
        );
      }
      function Ie(e) {
        const { event: t } = e.context,
          n = Number(e.args.groupid) || t.clanSteamID.GetAccountID();
        if (!n) return null;
        const o = (0, A.O)(e.args.color, "black"),
          r = (0, A.O)(e.args.bgcolor, "white");
        return a.createElement(pe, { clanAccountID: n, color: o, bgcolor: r });
      }
      let fe = null;
      function ye(e) {
        const { event: t } = e.context,
          n = Number.parseInt((0, d.j$)(e.args, "appid")),
          o = Number.parseInt((0, d.j$)(e.args, "itemdefid")),
          r = Number.parseInt((0, d.j$)(e.args, "maxquantity")),
          s = (0, d.j$)(e.args, "calltoaction");
        return (0, p.gS)(n, o)
          ? a.createElement(G.f, {
              language: e.language,
              clanAccountID: t.clanSteamID.GetAccountID(),
              itemDefSetting: { nAppID: n, nItemDefID: o, max_quantity: r },
              strCallToAction: s,
            })
          : a.createElement(h.t, {
              size: "small",
              position: "center",
              string: (0, c.we)("#Loading"),
            });
      }
      function he(e) {
        const t = (function () {
          const [e, t] = a.useState(w.Get().GetCounts());
          return (
            a.useEffect(() => {
              e || w.Get().LoadCounts().then(t);
            }, []),
            e
          );
        })();
        if (!t) return a.createElement(h.t, { size: "small" });
        const n = Number.parseInt((0, d.j$)(e.args));
        let o = t.verified;
        switch (n) {
          case 2:
            o = t.playable;
            break;
          case 1:
            o = t.unsupported;
        }
        return a.createElement("span", null, Number(o).toLocaleString());
      }
      function Ce(e) {
        const t = (0, v.j)("library");
        if (!t) return a.createElement(h.t, { size: "small" });
        const n = Number.parseInt((0, d.j$)(e.args));
        let o = t.verifiedList?.length || 0;
        switch (n) {
          case 2:
            o = t.playableList?.length || 0;
            break;
          case 1:
            o = t.unsupportedList?.length || 0;
            break;
          case 0:
            o = t.unknownList?.length || 0;
        }
        return a.createElement("span", null, Number(o).toLocaleString());
      }
      function De(e) {
        const t = Number.parseInt((0, d.j$)(e.args)),
          n =
            "hide" in e.args &&
            Boolean(Number.parseInt((0, d.j$)(e.args, "hide")));
        return t >= 0
          ? a.createElement(be, { nDoorIndex: t, bHide: n }, e.children)
          : null;
      }
      function be(e) {
        const { nDoorIndex: t, bHide: n, children: o } = e,
          r = (0, I.OM)(t);
        return null == r
          ? null
          : (r && !n) || (!r && n)
            ? a.createElement(a.Fragment, null, e.children)
            : null;
      }
      function Ee(e) {
        if (u.iA.logged_in) {
          const t = Number.parseInt((0, d.j$)(e.args)),
            n = Number.parseInt((0, d.j$)(e.args, "mod"));
          if (n > 0 && t < n && u.iA.accountid % n == t) return e.children;
        }
        return null;
      }
      function Ne(e) {
        const t = (0, d.j$)(e.args);
        return t?.trim().length > 0
          ? a.createElement("div", { className: t.trim() }, e.children)
          : a.createElement(a.Fragment, null, e.children);
      }
      function Se(e) {
        return a.createElement(
          "span",
          { className: f.LocalizeBlock },
          (0, c.oW)(
            e.children,
            a.createElement("b", null),
            a.createElement("b", null),
            a.createElement("b", null),
            a.createElement("b", null),
          ),
        );
      }
      function Ge(e) {
        let t = (0, d.j$)(e.args);
        return t
          ? a.createElement(V, { giveawayid: t })
          : a.createElement(a.Fragment, null);
      }
      function ke(e) {
        const { event: t, showErrorInfo: n } = e.context,
          o = Number.parseInt((0, d.j$)(e.args));
        if (o) {
          const n = Number.parseInt((0, d.j$)(e.args, "depositpackageid")),
            r = Number.parseInt((0, d.j$)(e.args, "psulesspackageid")),
            s = (0, d.j$)(e.args, "out_of_stock_override"),
            l = (0, d.j$)(e.args, "delivery_override"),
            i = (0, d.j$)(e.args, "delivery_override_out_of_stock");
          return a.createElement(S, {
            reservationPackageID: o,
            event: t,
            depositPackageID: n,
            psuLessPackageID: r,
            strOutOfStockOverride: s,
            strDeliveryOverride: i || l,
            bDeliveryOverrideOnlyIfOutOfStock: Boolean(i),
          });
        }
        return a.createElement(a.Fragment, null);
      }
      var Be = n(89104);
      function xe(e) {
        const { bSalePage: t } = e,
          [n, d] = a.useState(l.KN.IsInitialized());
        return (
          a.useEffect(() => {
            s.Vw.Init(new r.D(u.TS.WEBAPI_BASE_URL)),
              i.O3.Init(),
              t &&
                Be.us.AddDictionary(
                  (null == fe &&
                    (fe = new Map([
                      [
                        "itemdef",
                        {
                          Constructor: ye,
                          autocloses: !1,
                          skipInternalNewline: !0,
                          allowWrapTextForCopying: !0,
                        },
                      ],
                      ["wishlist", { Constructor: F, autocloses: !1 }],
                      ["followgame", { Constructor: H, autocloses: !1 }],
                      ["followgroup", { Constructor: Ie, autocloses: !1 }],
                      ["deckcompatcount", { Constructor: he, autocloses: !1 }],
                      [
                        "deckcompatuserlibrarycount",
                        { Constructor: Ce, autocloses: !1 },
                      ],
                      ["giveawayinfo", { Constructor: Ge, autocloses: !1 }],
                      ["price", { Constructor: Q.zD, autocloses: !1 }],
                      ["pricesavings", { Constructor: Q.y7, autocloses: !1 }],
                      [
                        "eventdoorvisibility",
                        { Constructor: De, autocloses: !1 },
                      ],
                      ["chooseaccount", { Constructor: Ee, autocloses: !1 }],
                      [
                        "badgecurrentlevel",
                        { Constructor: ce, autocloses: !1 },
                      ],
                      ["optindoorquest", { Constructor: de, autocloses: !1 }],
                      ["classname", { Constructor: Ne, autocloses: !1 }],
                      ["localize", { Constructor: Se, autocloses: !1 }],
                      ["salesection", { Constructor: _e, autocloses: !1 }],
                      [
                        "reservationbutton",
                        { Constructor: ke, autocloses: !1 },
                      ],
                    ])),
                  fe),
                ),
              l.KN.InitGlobal().then(() => d(!0));
          }, [t]),
          a.useEffect(() => {
            const e = (0, c.l4)();
            e && o.locale(e);
          }, []),
          n ? e.children : null
        );
      }
    },
  },
]);
