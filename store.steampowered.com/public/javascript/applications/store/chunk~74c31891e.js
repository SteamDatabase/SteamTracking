/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [12287],
  {
    32545: (e) => {
      e.exports = {
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
    10026: (e) => {
      e.exports = { BBCodeFollowButton: "NVuxjpTCUClP-4RsNDDvk" };
    },
    18657: (e) => {
      e.exports = {
        BBCodeFollowButton: "BwHJdoHlv8wy5OypqL_b7",
        isHovered: "_2EcgCb9lHfl7I_MlirYLZL",
      };
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
      e.exports = {
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
    5729: (e, n, t) => {
      "use strict";
      t.d(n, { H: () => a, s: () => i });
      var o = t(90626),
        r = t(11158);
      let s = 0;
      function a(e, n) {
        (0, o.useEffect)(() => {
          if (!e && !n)
            return (
              s++,
              () => {
                0 == --s && (0, r.s)();
              }
            );
        }, [e, n]);
      }
      function i(e) {
        const [n, t] = (0, o.useState)(!1);
        (0, o.useEffect)(() => {
          const n = window.setTimeout(() => t(!0), e);
          return () => window.clearTimeout(n);
        }, [e]),
          a(n);
      }
    },
    94057: (e, n, t) => {
      "use strict";
      t.d(n, { w: () => p });
      var o = t(34629),
        r = t(41735),
        s = t.n(r),
        a = t(14947),
        i = t(65946),
        l = t(90626),
        c = t(6419),
        u = t(6144),
        d = t(84933),
        m = t(78327);
      class _ {
        constructor() {
          (0, a.Gn)(this);
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
      (0, o.Cg)([a.sH], _.prototype, "giveaway_id", void 0),
        (0, o.Cg)([a.sH], _.prototype, "seconds_until_drawing", void 0),
        (0, o.Cg)([a.sH], _.prototype, "rtime_start", void 0),
        (0, o.Cg)([a.sH], _.prototype, "rtime_end", void 0),
        (0, o.Cg)([a.sH], _.prototype, "closed", void 0),
        (0, o.Cg)([a.sH], _.prototype, "winner_count", void 0);
      class w {
        constructor() {
          (0, a.Gn)(this);
        }
        m_mapGiveawayIDToNextDrawInfo = new Map();
        m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
        m_bLoadedFromConfig = !1;
        m_mapNextDrawChangeCallback = new Map();
        GetKey(e, n) {
          return e + "_" + n;
        }
        GetInfoByInstance(e, n) {
          return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
            this.GetKey(e, n),
          );
        }
        GetNextDrawChangeCallback(e) {
          return (
            this.m_mapNextDrawChangeCallback.has(e) ||
              this.m_mapNextDrawChangeCallback.set(e, new u.lu()),
            this.m_mapNextDrawChangeCallback.get(e)
          );
        }
        CopyToGiveaway(e, n) {
          n.closed != e.closed && (n.closed = e.closed),
            n.giveaway_id != e.giveaway_id && (n.giveaway_id = e.giveaway_id),
            n.rtime_start != e.rtime_start && (n.rtime_start = e.rtime_start),
            n.rtime_end != e.rtime_end && (n.rtime_end = e.rtime_end),
            n.winner_count != e.winner_count &&
              (n.winner_count = e.winner_count),
            n.seconds_until_drawing != e.seconds_until_drawing &&
              (n.seconds_until_drawing = e.seconds_until_drawing);
        }
        async ReloadGiveaway(e, n) {
          if (!e) return null;
          let t = m.TS.STORE_BASE_URL + "prizes/nextdraw/" + e,
            o = null,
            r = { origin: self.origin };
          return (
            (o = await s().get(t, { params: r })),
            (0, a.h5)(() => {
              if (
                (this.m_mapGiveawayIDToNextDrawInfo.has(e) ||
                  this.m_mapGiveawayIDToNextDrawInfo.set(e, new _()),
                this.CopyToGiveaway(
                  o.data,
                  this.m_mapGiveawayIDToNextDrawInfo.get(e),
                ),
                void 0 !== n)
              ) {
                const t = this.GetKey(e, n);
                this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(t) ||
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(t, new _()),
                  this.CopyToGiveaway(
                    o.data,
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(t),
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
            w.s_Singleton || ((w.s_Singleton = new w()), w.s_Singleton.Init()),
            w.s_Singleton
          );
        }
        Init() {
          if (!this.m_bLoadedFromConfig) {
            let e = (0, m.Tc)("giveawaynextdraw", "application_config");
            if (e && e.giveaway_id) {
              let n = new _();
              this.CopyToGiveaway(e, n),
                this.m_mapGiveawayIDToNextDrawInfo.set(e.giveaway_id, n);
            }
            this.m_bLoadedFromConfig = !0;
          }
        }
      }
      (0, o.Cg)([a.sH], w.prototype, "m_mapGiveawayIDToNextDrawInfo", void 0),
        (0, o.Cg)([a.XI], w.prototype, "CopyToGiveaway", null);
      class g {
        m_intervalID;
        m_intervalCountDownID;
        static s_GlobalInstance = 0;
        m_myInstanceNumber = 0;
        constructor() {
          (this.m_myInstanceNumber = g.s_GlobalInstance),
            (g.s_GlobalInstance += 1);
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
        SetupRefreshDataInterval(e, n) {
          if ((this.ClearRefreshInterval(), !e.closed)) {
            let t =
              e.seconds_until_drawing <= 0 && 0 == e.winner_count ? 6e4 : 5e3;
            this.m_intervalID = window.setInterval(n, t);
          }
        }
        SetupCountDown(e, n) {
          e > 0 && (this.m_intervalCountDownID = window.setInterval(n, 1e3));
        }
      }
      function v(e, n) {
        const t = w.Get().GetInfoByInstance(e, n.m_myInstanceNumber);
        (t.seconds_until_drawing -= 1),
          0 == t.seconds_until_drawing && n.ClearCountDown();
      }
      function p(e) {
        const [n] = (0, l.useState)(new g()),
          t = (0, d.CH)();
        (0, l.useEffect)(
          () => (
            w
              .Get()
              .ReloadGiveaway(e, n.m_myInstanceNumber)
              .then((o) => {
                n.SetupRefreshDataInterval(o, () =>
                  (function (e, n) {
                    const t = w
                      .Get()
                      .GetInfoByInstance(e, n.m_myInstanceNumber);
                    t &&
                      t.BIsValid() &&
                      t.seconds_until_drawing <= 0 &&
                      !t.closed &&
                      (n.ClearCountDown(),
                      w
                        .Get()
                        .ReloadGiveaway(e, n.m_myInstanceNumber)
                        .then((t) => {
                          n.SetupCountDown(t.seconds_until_drawing, () =>
                            v(e, n),
                          );
                        }));
                  })(e, n),
                ),
                  n.SetupCountDown(o.seconds_until_drawing, () => v(e, n)),
                  t();
              }),
            () => {
              n.ClearRefreshInterval(), n.ClearCountDown();
            }
          ),
          [n, e, t],
        );
        const o = w.Get().GetInfoByInstance(e, n.m_myInstanceNumber),
          [r, s, a] = (0, i.q3)(() => [
            o?.winner_count,
            o?.closed,
            o?.seconds_until_drawing,
          ]);
        return {
          bLoadingGiveawayInfo:
            !o || null == o.giveaway_id || !o.BStarted() || void 0 === r,
          winner_count: r,
          closed: s,
          seconds_until_drawing: a,
        };
      }
      (0, o.Cg)([c.o], g.prototype, "ClearRefreshInterval", null),
        (0, o.Cg)([c.o], g.prototype, "ClearCountDown", null),
        (0, o.Cg)([c.o], g.prototype, "SetupRefreshDataInterval", null),
        (0, o.Cg)([c.o], g.prototype, "SetupCountDown", null);
    },
    84173: (e, n, t) => {
      "use strict";
      t.d(n, { d: () => Ve });
      var o = t(7850),
        r = t(19367),
        s = t(90626),
        a = t(72034),
        i = t(51006),
        l = t(6379),
        c = t(61859),
        u = t(78327),
        d = t(34104),
        m = t(80902),
        _ = t(37085),
        w = t(66418);
      async function g() {
        const e = new URLSearchParams(),
          n = "undefined" != typeof self ? self.origin : "store";
        n && e.set("origin", n);
        const t = `${w.TS.STORE_BASE_URL}saleaction/ajaxgetuserdeckcompatcounts?${e}`,
          o = await fetch(t);
        if (!o.ok) throw new Error(`${t} answered ${o.status}`);
        const r = await o.json();
        if (r?.success != _.R || !r.counts)
          throw new Error(`${t} answered EResult ${r?.success}`);
        return r.counts;
      }
      const v = 3e5;
      function p() {
        const { data: e } = (0, m.I)({
          queryKey: ["DeckCompatCounts"],
          queryFn: () => g(),
          staleTime: v,
          retry: !1,
        });
        return e;
      }
      function h(e, n) {
        switch (n) {
          case d.sd:
            return e?.playable;
          case d.V8:
            return e?.unsupported;
          default:
            return e?.verified;
        }
      }
      var f = t(59952),
        I = t(85320),
        y = t(35400),
        D = t(6878),
        x = t(22837),
        b = t(1090),
        C = t(53807),
        j = t(62490),
        k = t(84811),
        N = t(22797),
        B = t(70189);
      const G = s.Fragment;
      function S(e) {
        const {
            reservationPackageID: n,
            depositPackageID: t,
            bIsPreview: r,
            psuLessPackageID: a,
            strOutOfStockOverride: i,
            strDeliveryOverride: l,
            bDeliveryOverrideOnlyIfOutOfStock: u,
            section: d,
          } = e,
          { data: m } = (0, b.DR)(n),
          { data: _ } = (0, b.DR)(a),
          g = (0, s.useMemo)(
            () => [
              {
                unique_id: "reservation_bbcode_" + n,
                reservation_package: n,
                deposit_package: t,
                localized_reservation_desc: (0, j.$Y)([], x.bP9, null),
                localized_out_of_stock_override: (0, j.$Y)(
                  [i || null],
                  x.bP9,
                  null,
                ),
                localized_delivery_override_desc: (0, j.$Y)(
                  [l || null],
                  x.bP9,
                  null,
                ),
                override_delivery_only_out_of_stock: Boolean(u),
                psu_less_package: a,
              },
            ],
            [n, t, i, l, u, a],
          );
        if (!m || (a && !_))
          return (0, o.jsx)(N.t, {
            string: (0, c.we)("#Loading"),
            size: "small",
            position: "center",
          });
        const v = !w.iA.logged_in || !m.account_restricted_from_purchasing,
          p =
            m.reservation_state == C.G.k_EPurchaseReservationState_Reserved
              ? m
              : void 0;
        return (0, o.jsxs)(k.tH, {
          children: [
            (0, o.jsx)(s.Suspense, {
              fallback: null,
              children: (0, o.jsx)(G, { bIsPreview: !!r, rgReservationDef: g }),
            }),
            Boolean(m.allow_purchase_in_country) &&
              (0, o.jsxs)("div", {
                className: g[0].unique_id,
                children: [
                  (0, o.jsx)(B.bk, {
                    reservationDef: g[0],
                    hardwareDetail: m,
                    bPSULessModel: !1,
                    reservedHardwareDetail: p,
                  }),
                  v &&
                    (0, o.jsx)(B.pc, {
                      section: d,
                      reservationDef: g[0],
                      hardwareDetail: m,
                      reservedHardwareDetail: p,
                    }),
                  _ &&
                    _?.allow_purchase_in_country &&
                    (0, o.jsx)(B.bk, {
                      reservationDef: g[0],
                      hardwareDetail: _,
                      bPSULessModel: !0,
                      reservedHardwareDetail: void 0,
                    }),
                ],
              }),
          ],
        });
      }
      var A = t(28188),
        F = t(60014),
        T = t(73371),
        E = t.n(T),
        O = t(52038),
        L = t(20446),
        P = t(10026),
        M = t.n(P),
        H = t(76217),
        R = t(68009),
        W = t(1062),
        $ = t(12155),
        q = t(4434),
        U = t(84547),
        Q = t(32545),
        z = t.n(Q);
      function Z(e) {
        const { appID: n, classOverride: t, styleOverride: r } = e,
          [a, i] = (0, s.useState)(!1),
          l = (0, q.m)("GameHoverFollowButton"),
          { elDialogElement: d, fnShowLogonDialog: m } = (0, U.l)(),
          _ = (0, R.Fh)(n),
          { mutateAsync: w } = (0, W.L)(n, !_, void 0);
        return (0, o.jsxs)(H.Z, {
          className: (0, O.A)(z().FollowButton, t),
          onClick: async (e) => {
            e.preventDefault(),
              e.stopPropagation(),
              u.iA.logged_in
                ? (i(!0), await w(), l.token.reason || i(!1))
                : m();
          },
          style: r,
          children: [
            _ ? (0, o.jsx)($.pPV, {}) : (0, o.jsx)($.c9e, {}),
            (0, o.jsx)("div", {
              className: (0, O.A)(
                z().FollowButtonText,
                a && z().FollowLoadingText,
                "FollowGameButton",
              ),
              children: (0, c.we)(
                _ ? "#Sale_StopFollowingGame" : "#Sale_FollowGame",
              ),
            }),
            d,
          ],
        });
      }
      function X(e) {
        const { appid: n, color: t, bgcolor: r } = e;
        (0, F.n9)();
        return (0, o.jsx)(Z, {
          appID: n,
          classOverride: (0, O.A)(
            E().FollowGameButtonNotTop,
            M().BBCodeFollowButton,
          ),
          styleOverride: { color: t, backgroundColor: r },
        });
      }
      function V(e) {
        const n = Number(e.args.appid);
        if (!n) return null;
        const t = (0, L.O)(e.args.color, "black"),
          r = (0, L.O)(e.args.bgcolor, "white");
        return (0, o.jsx)(X, { appid: n, color: t, bgcolor: r });
      }
      var Y = t(37744),
        J = t(18657),
        K = t.n(J),
        ee = t(10705);
      function ne(e) {
        const { clanAccountID: n, color: t, bgcolor: r } = e;
        (0, Y.mx)();
        const [a, i] = s.useState(!1);
        return (0, o.jsx)("div", {
          className: (0, O.A)(K().BBCodeFollowButton, a && K().isHovered),
          onMouseEnter: () => i(!0),
          onMouseLeave: () => i(!1),
          children: (0, o.jsx)(ee.Q, {
            nCreatorAccountID: n,
            classOverride: E().FollowGameButtonNotTop,
            styleOverride: { color: t, backgroundColor: r },
            followType: "group",
          }),
        });
      }
      function te(e) {
        const { event: n } = e.context,
          t = Number(e.args.groupid) || n?.clanSteamID.GetAccountID();
        if (!t) return null;
        const r = (0, L.O)(e.args.color, "black"),
          s = (0, L.O)(e.args.bgcolor, "white");
        return (0, o.jsx)(ne, { clanAccountID: t, color: r, bgcolor: s });
      }
      var oe = t(55963),
        re = t(94636),
        se = t(9202),
        ae = t.n(se),
        ie = t(14987);
      function le(e) {
        const { appid: n, color: t, bgcolor: r } = e,
          s = (0, F.n9)(),
          a = (0, ie.$5)(n),
          i = (0, oe.L3)(s);
        return (0, o.jsx)("div", {
          className: ae().WishlistHoverCtn,
          children: (0, o.jsx)(re.E, {
            snr: i,
            id: a,
            classOverride: (0, O.A)(
              E().WishlistButtonNotTop,
              ae().BBCodeWishlistButton,
              "WishlistButton",
            ),
            styleOverride: { color: t, backgroundColor: r },
            bShowInGamepadUI: !0,
          }),
        });
      }
      function ce(e) {
        const n = Number(e.args.appid);
        if (!n) return null;
        const t = (0, L.O)(e.args.color, "black"),
          r = (0, L.O)(e.args.bgcolor, "white");
        return (0, o.jsx)(le, { appid: n, color: t, bgcolor: r });
      }
      let ue = null;
      var de = t(94057),
        me = t(29868),
        _e = t(6083);
      function we(e) {
        return e < 10 ? "0" + e : e;
      }
      function ge(e) {
        const { giveawayid: n } = e,
          t = (0, de.w)(n),
          {
            bLoadingGiveawayInfo: r,
            winner_count: a,
            closed: i,
            seconds_until_drawing: l,
          } = t;
        return r
          ? null
          : (0, o.jsxs)("div", {
              className: me.countdownCtn,
              children: [
                Boolean(i) &&
                  (0, o.jsx)("div", {
                    className: me.Closed,
                    children:
                      a > 0
                        ? (0, c.we)("#Giveaway_Closed", (0, _e.D)(a))
                        : (0, c.we)("#Giveaway_Closed_NoWinnerInfo"),
                  }),
                Boolean(!i) &&
                  (0, o.jsxs)(s.Fragment, {
                    children: [
                      Boolean(l <= 0)
                        ? (0, o.jsxs)("div", {
                            className: me.Throbber,
                            children: [
                              (0, o.jsx)(N.t, { size: "small" }),
                              (0, o.jsx)("div", {
                                children: (0, c.we)("#Giveaway_RandomDraw"),
                              }),
                            ],
                          })
                        : (0, o.jsxs)("div", {
                            className: me.CountDownCtn,
                            children: [
                              (0, o.jsx)("div", {
                                className: me.CountDownTime,
                                children:
                                  we(Math.floor(l / 60)) + ":" + we(l % 60),
                              }),
                              (0, o.jsxs)("div", {
                                className: me.CountDownText,
                                children: [
                                  (0, c.we)("#Giveaway_CountDown2"),
                                  " ",
                                  (0, c.we)("#Giveaway_KeepWatching"),
                                ],
                              }),
                            ],
                          }),
                      Boolean(a > 0) &&
                        (0, o.jsxs)("div", {
                          className: me.WinnerInfo,
                          children: [
                            (0, o.jsx)("div", {
                              className: me.WinnerCount,
                              children: (0, _e.D)(a),
                            }),
                            (0, o.jsx)("div", {
                              className: me.WinnerText,
                              children: (0, c.we)("#Giveaway_Congratulation"),
                            }),
                          ],
                        }),
                    ],
                  }),
              ],
            });
      }
      var ve = t(40895);
      function pe(e) {
        const n = Number(e.args.packageid);
        return n
          ? (0, o.jsx)(ve.eF, {
              packageID: n,
              display_style: (0, ve._w)(e.args.display),
            })
          : null;
      }
      function he(e) {
        const n = Number(e.args.packageid),
          t = Number(e.args.compareid);
        return n && t
          ? (0, o.jsx)(ve.hJ, { packageID: n, compareID: t })
          : null;
      }
      var fe = t(97670),
        Ie = t(39733),
        ye = t(56283),
        De = t(92757),
        xe = t(39256),
        be = t(99487),
        Ce = t(7193),
        je = t(39199),
        ke = t(60860),
        Ne = t(48636),
        Be = t(40353);
      function Ge(e) {
        const { eventModel: n, nEventBadgeID: t } = e,
          r = (0, Ie.fy)(t);
        if (r?.level > 0) {
          let e = r.level;
          if (n?.BHasSaleEnabled()) {
            const r = n.GetSaleSectionsByType("badge_progress");
            if (1 == r?.length) {
              const s = r[0].badge_progress;
              if (s?.event_badgeid == t && s?.granted_by_discovery_queue) {
                const t = s.levels[s.levels.length - 1].level;
                return (0, o.jsx)(Se, {
                  eventModel: n,
                  nBadgeLevel: e,
                  nMaxLevel: t,
                });
              }
            }
          }
          return (0, o.jsx)("span", {
            className: "DisplayBadgeProgress",
            children: (0, _e.D)(e),
          });
        }
        return null;
      }
      function Se(e) {
        const { eventModel: n, nBadgeLevel: t, nMaxLevel: r } = e,
          a = s.useMemo(() => {
            const e = n
              .GetSaleSections()
              .filter((e) => "discoveryqueue" == e.section_type);
            return e?.length > 0 ? e[0] : null;
          }, [n]),
          { storePageFilter: i, eStoreDiscoveryQueueType: l } = s.useMemo(
            () => (0, Ce.lx)(n, a),
            [n, a],
          ),
          c = (0, je.Uf)(l, i),
          u = Math.min(t + c, r);
        return (0, o.jsx)("span", {
          className: "DisplayBadgeProgress",
          children: (0, _e.D)(u),
        });
      }
      function Ae(e) {
        const { event: n } = e.context,
          t = Number.parseInt((0, f.j$)(e.args, "eventid"));
        return u.iA.logged_in && t
          ? (0, o.jsx)(Ge, { nEventBadgeID: t, eventModel: n })
          : null;
      }
      function Fe(e) {
        const { nDoorIndex: n, children: t } = e,
          r = (0, y.OM)(n),
          { fnOpenDoor: a } = (0, y.OC)(),
          [i, l] = s.useState(!1),
          [d, m] = s.useState(!1),
          { elDialogElement: _, fnShowLogonDialog: w } = (0, U.l)();
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(ye.$n, {
              disabled: r,
              onClick: (e) => {
                i ||
                  (u.iA.logged_in
                    ? (l(!0),
                      a(n, !0, null, !1)
                        .then((e) => {
                          e || m(!0), l(!1);
                        })
                        .catch(() => {
                          m(!0), l(!1);
                        }))
                    : w());
              },
              children: Boolean(d)
                ? (0, o.jsx)("div", {
                    children: (0, c.we)("#GrantAwardError_Busy"),
                  })
                : (0, o.jsxs)(o.Fragment, {
                    children: [
                      Boolean(i) && (0, o.jsx)(N.t, { size: "small" }),
                      Boolean(r) && (0, o.jsx)($.Jlk, {}),
                      t,
                    ],
                  }),
            }),
            _,
          ],
        });
      }
      function Te(e) {
        const n = Number.parseInt((0, f.j$)(e.args)) || 0;
        return n >= 0 && n < 32
          ? (0, o.jsx)(Fe, { nDoorIndex: n, children: e.children })
          : null;
      }
      const Ee = (0, De.y)(Ne.H);
      function Oe(e) {
        const n = Number.parseInt((0, f.j$)(e.args)),
          { event: t, showErrorInfo: r } = e.context;
        if (n) {
          const s = t?.jsondata?.sale_sections?.findIndex(
            (e) => e.unique_id == n,
          );
          if (s >= 0) {
            const n = t.GetDayIndexFromEventStart();
            return (0, o.jsx)(ke.Cs, {
              location: r ? ke.HY : ke.bs,
              children: (0, o.jsx)(Ee, {
                event: t,
                section: t.jsondata.sale_sections[s],
                activeTab: new be.y(null, n),
                language: e.language,
                nSaleDayIndex: n,
                promotionName: "",
                appVisibilityTracker: null,
                ePreviewMode: r
                  ? Be.S.EPreviewMode_Enabled
                  : Be.S.EPreviewMode_Disabled,
              }),
            });
          }
          if (r)
            return (0, o.jsxs)("div", {
              className: xe.ErrorDiv,
              children: ["Error could not find sale section ", n],
            });
        }
        return null;
      }
      let Le = null;
      function Pe(e) {
        const { event: n } = e.context,
          t = Number.parseInt((0, f.j$)(e.args, "appid")),
          r = Number.parseInt((0, f.j$)(e.args, "itemdefid")),
          s = Number.parseInt((0, f.j$)(e.args, "maxquantity")),
          a = (0, f.j$)(e.args, "calltoaction");
        return (0, fe.gS)(t, r, !1) && n
          ? (0, o.jsx)(A.f, {
              language: e.language,
              clanAccountID: n.clanSteamID.GetAccountID(),
              itemDefSetting: { nAppID: t, nItemDefID: r, max_quantity: s },
              strCallToAction: a,
            })
          : (0, o.jsx)(N.t, {
              size: "small",
              position: "center",
              string: (0, c.we)("#Loading"),
            });
      }
      function Me(e) {
        const n = p();
        if (!n) return (0, o.jsx)(N.t, { size: "small" });
        const t = Number.parseInt((0, f.j$)(e.args));
        return (0, o.jsx)("span", { children: (0, _e.D)(Number(h(n, t))) });
      }
      function He(e) {
        const n = (0, I.j)(u.iA.accountid, "library");
        if (!n) return (0, o.jsx)(N.t, { size: "small" });
        const t = Number.parseInt((0, f.j$)(e.args));
        let r = n.verifiedList?.length || 0;
        switch (t) {
          case d.sd:
            r = n.playableList?.length || 0;
            break;
          case d.V8:
            r = n.unsupportedList?.length || 0;
            break;
          case d.YX:
            r = n.unknownList?.length || 0;
        }
        return (0, o.jsx)("span", { children: (0, _e.D)(Number(r)) });
      }
      function Re(e) {
        const n = Number.parseInt((0, f.j$)(e.args)),
          t =
            "hide" in e.args &&
            Boolean(Number.parseInt((0, f.j$)(e.args, "hide")));
        return n >= 0
          ? (0, o.jsx)(We, { nDoorIndex: n, bHide: t, children: e.children })
          : null;
      }
      function We(e) {
        const { nDoorIndex: n, bHide: t, children: r } = e,
          s = (0, y.OM)(n);
        return null == s
          ? null
          : (s && !t) || (!s && t)
            ? (0, o.jsx)(o.Fragment, { children: e.children })
            : null;
      }
      function $e(e) {
        if (u.iA.logged_in) {
          const n = Number.parseInt((0, f.j$)(e.args)),
            t = Number.parseInt((0, f.j$)(e.args, "mod"));
          if (t > 0 && n < t && u.iA.accountid % t == n) return e.children;
        }
        return null;
      }
      function qe(e) {
        const n = (0, f.j$)(e.args);
        return n?.trim().length > 0
          ? (0, o.jsx)("div", { className: n.trim(), children: e.children })
          : (0, o.jsx)(o.Fragment, { children: e.children });
      }
      function Ue(e) {
        return (0, o.jsx)("span", {
          className: D.LocalizeBlock,
          children: (0, c.oW)(
            e.children,
            (0, o.jsx)("b", {}),
            (0, o.jsx)("b", {}),
            (0, o.jsx)("b", {}),
            (0, o.jsx)("b", {}),
          ),
        });
      }
      function Qe(e) {
        let n = (0, f.j$)(e.args);
        return n
          ? (0, o.jsx)(ge, { giveawayid: n })
          : (0, o.jsx)(s.Fragment, {});
      }
      function ze(e) {
        const { showErrorInfo: n, event: t } = e.context,
          r = Number.parseInt((0, f.j$)(e.args)),
          a = s.useMemo(() => {
            if (t)
              return t.jsondata.sale_sections?.find(
                (e) =>
                  "vo_internal" == e.section_type &&
                  ("reservation_widget" ==
                    e.internal_section_data?.internal_type ||
                    "while_supplies_last" ==
                      e.internal_section_data?.internal_type),
              );
          }, [t]);
        if (r && a) {
          const n = Number.parseInt((0, f.j$)(e.args, "depositpackageid")),
            t = Number.parseInt((0, f.j$)(e.args, "psulesspackageid")),
            s = (0, f.j$)(e.args, "out_of_stock_override"),
            i = (0, f.j$)(e.args, "delivery_override"),
            l = (0, f.j$)(e.args, "delivery_override_out_of_stock");
          return (0, o.jsx)(S, {
            section: a,
            reservationPackageID: r,
            depositPackageID: n,
            psuLessPackageID: t,
            strOutOfStockOverride: s,
            strDeliveryOverride: l || i,
            bDeliveryOverrideOnlyIfOutOfStock: Boolean(l),
          });
        }
        return (0, o.jsx)(o.Fragment, {});
      }
      var Ze = t(5729),
        Xe = t(67680);
      function Ve(e) {
        const { bSalePage: n } = e,
          [t, d] = s.useState(!1);
        return (
          (0, Ze.H)(t, n),
          s.useEffect(() => {
            i.Vw.Init(new a.D(u.TS.WEBAPI_BASE_URL)), l.O3.Init(), d(!0);
          }, []),
          s.useEffect(() => {
            const e = (0, c.l4)();
            e && r.locale(e);
          }, []),
          t
            ? n
              ? (0, o.jsx)(Xe.d3, {
                  dictionary:
                    (null == Le &&
                      (Le = new Map([
                        ...Array.from(
                          (null == ue &&
                            (ue = new Map([
                              ["wishlist", { Constructor: ce, autocloses: !1 }],
                              [
                                "followgroup",
                                { Constructor: te, autocloses: !1 },
                              ],
                            ])),
                          ue).entries(),
                        ),
                        [
                          "itemdef",
                          {
                            Constructor: Pe,
                            autocloses: !1,
                            skipInternalNewline: !0,
                            allowWrapTextForCopying: !0,
                          },
                        ],
                        ["followgame", { Constructor: V, autocloses: !1 }],
                        [
                          "deckcompatcount",
                          { Constructor: Me, autocloses: !1 },
                        ],
                        [
                          "deckcompatuserlibrarycount",
                          { Constructor: He, autocloses: !1 },
                        ],
                        ["giveawayinfo", { Constructor: Qe, autocloses: !1 }],
                        ["price", { Constructor: pe, autocloses: !1 }],
                        ["pricesavings", { Constructor: he, autocloses: !1 }],
                        [
                          "eventdoorvisibility",
                          { Constructor: Re, autocloses: !1 },
                        ],
                        ["chooseaccount", { Constructor: $e, autocloses: !1 }],
                        [
                          "badgecurrentlevel",
                          { Constructor: Ae, autocloses: !1 },
                        ],
                        ["optindoorquest", { Constructor: Te, autocloses: !1 }],
                        ["classname", { Constructor: qe, autocloses: !1 }],
                        ["localize", { Constructor: Ue, autocloses: !1 }],
                        ["salesection", { Constructor: Oe, autocloses: !1 }],
                        [
                          "reservationbutton",
                          { Constructor: ze, autocloses: !1 },
                        ],
                      ])),
                    Le),
                  children: e.children,
                })
              : e.children
            : null
        );
      }
    },
  },
]);
