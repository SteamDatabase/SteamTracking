/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6896],
  {
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
    12037: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        Container: "_2Jd3MGaOu0C9Ydswf8Q4Tn",
        StoreHeaderAdjust: "_3YyCpH32HRhZtt4BOM5wM5",
        SectionButtonCtn: "_1HP0yfVUrZ-TPBYhiQkye2",
        SectionButton: "_3n8swQFM3I_ARVM_5bPhAs",
        EventsSummariesCtn: "_1snIw0RvJduvDtqpmwtKJ9",
        LatestUpdateButtonCtn: "_2vEwZPNBe2qcTuxZf5cpiD",
        LatestUpdateIcon: "mq3ROvmcn5_HdCKG6JXDa",
        LatestUpdateButton: "_1TRFtE8IfXpDQ_loHnB_bU",
      };
    },
    94057: (e, t, n) => {
      "use strict";
      n.d(t, { w: () => p });
      var a = n(34629),
        o = n(41735),
        r = n.n(o),
        s = n(14947),
        i = n(65946),
        l = n(90626),
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
      (0, a.Cg)([s.sH], _.prototype, "giveaway_id", void 0),
        (0, a.Cg)([s.sH], _.prototype, "seconds_until_drawing", void 0),
        (0, a.Cg)([s.sH], _.prototype, "rtime_start", void 0),
        (0, a.Cg)([s.sH], _.prototype, "rtime_end", void 0),
        (0, a.Cg)([s.sH], _.prototype, "closed", void 0),
        (0, a.Cg)([s.sH], _.prototype, "winner_count", void 0);
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
            a = null,
            o = { origin: self.origin };
          return (
            (a = await r().get(n, { params: o })),
            (0, s.h5)(() => {
              if (
                (this.m_mapGiveawayIDToNextDrawInfo.has(e) ||
                  this.m_mapGiveawayIDToNextDrawInfo.set(e, new _()),
                this.CopyToGiveaway(
                  a.data,
                  this.m_mapGiveawayIDToNextDrawInfo.get(e),
                ),
                void 0 !== t)
              ) {
                const n = this.GetKey(e, t);
                this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(n) ||
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(n, new _()),
                  this.CopyToGiveaway(
                    a.data,
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
      (0, a.Cg)([s.sH], g.prototype, "m_mapGiveawayIDToNextDrawInfo", void 0),
        (0, a.Cg)([s.XI], g.prototype, "CopyToGiveaway", null);
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
        const [t] = (0, l.useState)(new w()),
          n = (0, d.CH)();
        (0, l.useEffect)(
          () => (
            g
              .Get()
              .ReloadGiveaway(e, t.m_myInstanceNumber)
              .then((a) => {
                t.SetupRefreshDataInterval(a, () =>
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
                  t.SetupCountDown(a.seconds_until_drawing, () => v(e, t)),
                  n();
              }),
            () => {
              t.ClearRefreshInterval(), t.ClearCountDown();
            }
          ),
          [t, e, n],
        );
        const a = g.Get().GetInfoByInstance(e, t.m_myInstanceNumber),
          [o, r, s] = (0, i.q3)(() => [
            a?.winner_count,
            a?.closed,
            a?.seconds_until_drawing,
          ]);
        return {
          bLoadingGiveawayInfo:
            !a || null == a.giveaway_id || !a.BStarted() || void 0 === o,
          winner_count: o,
          closed: r,
          seconds_until_drawing: s,
        };
      }
      (0, a.Cg)([c.o], w.prototype, "ClearRefreshInterval", null),
        (0, a.Cg)([c.o], w.prototype, "ClearCountDown", null),
        (0, a.Cg)([c.o], w.prototype, "SetupRefreshDataInterval", null),
        (0, a.Cg)([c.o], w.prototype, "SetupCountDown", null);
    },
    81881: (e, t, n) => {
      "use strict";
      n.d(t, { d: () => fe });
      var a = n(19367),
        o = n(90626),
        r = n(72034),
        s = n(51006),
        i = n(60746),
        l = n(6379),
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
        f = n(28188),
        y = n(22797),
        h = n(6878),
        D = n(94057),
        C = n(29868);
      function b(e) {
        return e < 10 ? "0" + e : e;
      }
      function E(e) {
        const { giveawayid: t } = e,
          n = (0, D.w)(t),
          {
            bLoadingGiveawayInfo: a,
            winner_count: r,
            closed: s,
            seconds_until_drawing: i,
          } = n;
        return a
          ? null
          : o.createElement(
              "div",
              { className: C.countdownCtn },
              Boolean(s) &&
                o.createElement(
                  "div",
                  { className: C.Closed },
                  r > 0
                    ? (0, c.we)("#Giveaway_Closed", r.toLocaleString())
                    : (0, c.we)("#Giveaway_Closed_NoWinnerInfo"),
                ),
              Boolean(!s) &&
                o.createElement(
                  o.Fragment,
                  null,
                  Boolean(i <= 0)
                    ? o.createElement(
                        "div",
                        { className: C.Throbber },
                        o.createElement(y.t, { size: "small" }),
                        o.createElement(
                          "div",
                          null,
                          (0, c.we)("#Giveaway_RandomDraw"),
                        ),
                      )
                    : o.createElement(
                        "div",
                        { className: C.CountDownCtn },
                        o.createElement(
                          "div",
                          { className: C.CountDownTime },
                          b(Math.floor(i / 60)) + ":" + b(i % 60),
                        ),
                        o.createElement(
                          "div",
                          { className: C.CountDownText },
                          (0, c.we)("#Giveaway_CountDown2"),
                          " ",
                          (0, c.we)("#Giveaway_KeepWatching"),
                        ),
                      ),
                  Boolean(r > 0) &&
                    o.createElement(
                      "div",
                      { className: C.WinnerInfo },
                      o.createElement(
                        "div",
                        { className: C.WinnerCount },
                        r.toLocaleString(),
                      ),
                      o.createElement(
                        "div",
                        { className: C.WinnerText },
                        (0, c.we)("#Giveaway_Congratulation"),
                      ),
                    ),
                ),
            );
      }
      var S = n(10962),
        N = n(39733),
        G = n(10981),
        k = n(12155),
        x = n(82477),
        B = n(92757),
        T = n(39256),
        L = n(99487),
        M = n(7193),
        O = n(39199),
        R = n(96971),
        j = n(53677),
        A = n(40353);
      function P(e) {
        const { eventModel: t, nEventBadgeID: n } = e,
          a = (0, N.fy)(n);
        if (a?.level > 0) {
          let e = a.level;
          if (t?.BHasSaleEnabled()) {
            const a = t.GetSaleSectionsByType("badge_progress");
            if (1 == a?.length) {
              const r = a[0].badge_progress;
              if (r?.event_badgeid == n && r?.granted_by_discovery_queue) {
                const n = r.levels[r.levels.length - 1].level;
                return o.createElement($, {
                  eventModel: t,
                  nBadgeLevel: e,
                  nMaxLevel: n,
                });
              }
            }
          }
          return o.createElement(
            "span",
            { className: "DisplayBadgeProgress" },
            e.toLocaleString(),
          );
        }
        return null;
      }
      function $(e) {
        const { eventModel: t, nBadgeLevel: n, nMaxLevel: a } = e,
          r = o.useMemo(() => {
            const e = t
              .GetSaleSections()
              .filter((e) => "discoveryqueue" == e.section_type);
            return e?.length > 0 ? e[0] : null;
          }, [t]),
          { storePageFilter: s, eStoreDiscoveryQueueType: i } = o.useMemo(
            () => (0, M.lx)(t, r),
            [t, r],
          ),
          l = (0, O.Uf)(i, s),
          c = Math.min(n + l, a);
        return o.createElement(
          "span",
          { className: "DisplayBadgeProgress" },
          c.toLocaleString(),
        );
      }
      function H(e) {
        const { event: t } = e.context,
          n = Number.parseInt((0, d.j$)(e.args, "eventid"));
        return u.iA.logged_in && n
          ? o.createElement(P, { nEventBadgeID: n, eventModel: t })
          : null;
      }
      function F(e) {
        const { nDoorIndex: t, children: n } = e,
          a = (0, I.OM)(t),
          { fnOpenDoor: r } = (0, I.OC)(),
          [s, i] = o.useState(!1),
          [l, d] = o.useState(!1);
        return o.createElement(
          G.$n,
          {
            disabled: a,
            onClick: (e) => {
              s ||
                (u.iA.logged_in
                  ? (i(!0),
                    r(t, !0, null, !1)
                      .then((e) => {
                        e || d(!0), i(!1);
                      })
                      .catch(() => {
                        d(!0), i(!1);
                      }))
                  : (0, x.vg)());
            },
          },
          Boolean(l)
            ? o.createElement("div", null, (0, c.we)("#GrantAwardError_Busy"))
            : o.createElement(
                o.Fragment,
                null,
                Boolean(s) && o.createElement(y.t, { size: "small" }),
                Boolean(a) && o.createElement(k.Jlk, null),
                n,
              ),
        );
      }
      function W(e) {
        const t = Number.parseInt((0, d.j$)(e.args)) || 0;
        return t >= 0 && t < 32
          ? o.createElement(F, { nDoorIndex: t }, e.children)
          : null;
      }
      const U = (0, B.y)(j.H);
      function q(e) {
        const t = Number.parseInt((0, d.j$)(e.args)),
          { event: n, showErrorInfo: a } = e.context;
        if (t) {
          const r = n?.jsondata?.sale_sections?.findIndex(
            (e) => e.unique_id == t,
          );
          if (r >= 0) {
            const t = n.GetDayIndexFromEventStart();
            return o.createElement(
              R.Cs,
              { location: a ? 2 : 0 },
              o.createElement(U, {
                event: n,
                section: n.jsondata.sale_sections[r],
                activeTab: new L.y(null, t),
                language: e.language,
                nSaleDayIndex: t,
                promotionName: "",
                appVisibilityTracker: null,
                ePreviewMode: a
                  ? A.S.EPreviewMode_Enabled
                  : A.S.EPreviewMode_Disabled,
              }),
            );
          }
          if (a)
            return o.createElement(
              "div",
              { className: T.ErrorDiv },
              "Error could not find sale section ",
              t,
            );
        }
        return null;
      }
      var z = n(84811),
        V = n(77291),
        Q = n(19267),
        K = n(8527),
        Z = n(62490);
      const X = o.Fragment;
      function Y(e) {
        const {
            reservationPackageID: t,
            event: n,
            depositPackageID: a,
            bIsPreview: r,
            psuLessPackageID: s,
            strOutOfStockOverride: i,
            strDeliveryOverride: l,
            bDeliveryOverrideOnlyIfOutOfStock: u,
          } = e,
          d = (0, Q.DR)(t),
          m = (0, Q.DR)(s),
          _ = (0, o.useMemo)(
            () => [
              {
                unique_id: "reservation_bbcode_" + t,
                reservation_package: t,
                deposit_package: a,
                localized_reservation_desc: (0, Z.$Y)([], 31, null),
                localized_out_of_stock_override: (0, Z.$Y)(
                  [i || null],
                  31,
                  null,
                ),
                localized_delivery_override_desc: (0, Z.$Y)(
                  [l || null],
                  31,
                  null,
                ),
                override_delivery_only_out_of_stock: Boolean(u),
                psu_less_package: s,
              },
            ],
            [t, a, i, l, u, s],
          );
        if (!d || (s && !m))
          return o.createElement(y.t, {
            string: (0, c.we)("#Loading"),
            size: "small",
            position: "center",
          });
        const g = !K.iA.logged_in || !d.account_restricted_from_purchasing;
        return o.createElement(
          z.tH,
          null,
          o.createElement(
            o.Suspense,
            { fallback: null },
            o.createElement(X, { bIsPreview: r, rgReservationDef: _ }),
          ),
          Boolean(d.allow_purchase_in_country) &&
            o.createElement(
              "div",
              { className: _[0].unique_id },
              o.createElement(V.bk, {
                reservationDef: _[0],
                hardwareDetail: d,
                bPSULessModel: !1,
              }),
              g &&
                o.createElement(V.pc, {
                  event: n,
                  reservationDef: _[0],
                  hardwareDetail: d,
                }),
              Boolean(m?.allow_purchase_in_country) &&
                o.createElement(V.bk, {
                  reservationDef: _[0],
                  hardwareDetail: m,
                  bPSULessModel: !0,
                }),
            ),
        );
      }
      var J = n(60014),
        ee = n(55963),
        te = n(83284),
        ne = n.n(te),
        ae = n(52038),
        oe = n(26101);
      function re(e) {
        const t = (0, J.n9)(),
          n = (0, ee.L3)(t);
        return o.createElement(oe.EP, {
          snr: n,
          appID: e.appid,
          classOverride: (0, ae.A)(ne().WishlistButtonNotTop, "WishlistButton"),
        });
      }
      function se(e) {
        const t = Number(e.args.appid);
        return t ? o.createElement(re, { appid: t }) : null;
      }
      let ie = null;
      function le(e) {
        const { event: t } = e.context,
          n = Number.parseInt((0, d.j$)(e.args, "appid")),
          a = Number.parseInt((0, d.j$)(e.args, "itemdefid")),
          r = Number.parseInt((0, d.j$)(e.args, "maxquantity")),
          s = (0, d.j$)(e.args, "calltoaction");
        return (0, p.gS)(n, a)
          ? o.createElement(f.f, {
              language: e.language,
              clanAccountID: t.clanSteamID.GetAccountID(),
              itemDefSetting: { nAppID: n, nItemDefID: a, max_quantity: r },
              strCallToAction: s,
            })
          : o.createElement(y.t, {
              size: "small",
              position: "center",
              string: (0, c.we)("#Loading"),
            });
      }
      function ce(e) {
        const t = (function () {
          const [e, t] = o.useState(w.Get().GetCounts());
          return (
            o.useEffect(() => {
              e || w.Get().LoadCounts().then(t);
            }, []),
            e
          );
        })();
        if (!t) return o.createElement(y.t, { size: "small" });
        const n = Number.parseInt((0, d.j$)(e.args));
        let a = t.verified;
        switch (n) {
          case 2:
            a = t.playable;
            break;
          case 1:
            a = t.unsupported;
        }
        return o.createElement("span", null, Number(a).toLocaleString());
      }
      function ue(e) {
        const t = (0, v.j)("library");
        if (!t) return o.createElement(y.t, { size: "small" });
        const n = Number.parseInt((0, d.j$)(e.args));
        let a = t.verifiedList?.length || 0;
        switch (n) {
          case 2:
            a = t.playableList?.length || 0;
            break;
          case 1:
            a = t.unsupportedList?.length || 0;
            break;
          case 0:
            a = t.unknownList?.length || 0;
        }
        return o.createElement("span", null, Number(a).toLocaleString());
      }
      function de(e) {
        const t = Number.parseInt((0, d.j$)(e.args)),
          n =
            "hide" in e.args &&
            Boolean(Number.parseInt((0, d.j$)(e.args, "hide")));
        return t >= 0
          ? o.createElement(me, { nDoorIndex: t, bHide: n }, e.children)
          : null;
      }
      function me(e) {
        const { nDoorIndex: t, bHide: n, children: a } = e,
          r = (0, I.OM)(t);
        return null == r
          ? null
          : (r && !n) || (!r && n)
            ? o.createElement(o.Fragment, null, e.children)
            : null;
      }
      function _e(e) {
        if (u.iA.logged_in) {
          const t = Number.parseInt((0, d.j$)(e.args)),
            n = Number.parseInt((0, d.j$)(e.args, "mod"));
          if (n > 0 && t < n && u.iA.accountid % n == t) return e.children;
        }
        return null;
      }
      function ge(e) {
        const t = (0, d.j$)(e.args);
        return t?.trim().length > 0
          ? o.createElement("div", { className: t.trim() }, e.children)
          : o.createElement(o.Fragment, null, e.children);
      }
      function we(e) {
        return o.createElement(
          "span",
          { className: h.LocalizeBlock },
          (0, c.oW)(
            e.children,
            o.createElement("b", null),
            o.createElement("b", null),
            o.createElement("b", null),
            o.createElement("b", null),
          ),
        );
      }
      function ve(e) {
        let t = (0, d.j$)(e.args);
        return t
          ? o.createElement(E, { giveawayid: t })
          : o.createElement(o.Fragment, null);
      }
      function pe(e) {
        const { event: t, showErrorInfo: n } = e.context,
          a = Number.parseInt((0, d.j$)(e.args));
        if (a) {
          const n = Number.parseInt((0, d.j$)(e.args, "depositpackageid")),
            r = Number.parseInt((0, d.j$)(e.args, "psulesspackageid")),
            s = (0, d.j$)(e.args, "out_of_stock_override"),
            i = (0, d.j$)(e.args, "delivery_override"),
            l = (0, d.j$)(e.args, "delivery_override_out_of_stock");
          return o.createElement(Y, {
            reservationPackageID: a,
            event: t,
            depositPackageID: n,
            psuLessPackageID: r,
            strOutOfStockOverride: s,
            strDeliveryOverride: l || i,
            bDeliveryOverrideOnlyIfOutOfStock: Boolean(l),
          });
        }
        return o.createElement(o.Fragment, null);
      }
      var Ie = n(43616);
      function fe(e) {
        const { bSalePage: t } = e,
          [n, d] = o.useState(i.KN.IsInitialized());
        return (
          o.useEffect(() => {
            s.Vw.Init(new r.D(u.TS.WEBAPI_BASE_URL)),
              l.O3.Init(),
              t &&
                Ie.f.AddDictionary(
                  (null == ie &&
                    (ie = new Map([
                      [
                        "itemdef",
                        {
                          Constructor: le,
                          autocloses: !1,
                          skipInternalNewline: !0,
                          allowWrapTextForCopying: !0,
                        },
                      ],
                      ["wishlist", { Constructor: se, autocloses: !1 }],
                      ["deckcompatcount", { Constructor: ce, autocloses: !1 }],
                      [
                        "deckcompatuserlibrarycount",
                        { Constructor: ue, autocloses: !1 },
                      ],
                      ["giveawayinfo", { Constructor: ve, autocloses: !1 }],
                      ["price", { Constructor: S.zD, autocloses: !1 }],
                      ["pricesavings", { Constructor: S.y7, autocloses: !1 }],
                      [
                        "eventdoorvisibility",
                        { Constructor: de, autocloses: !1 },
                      ],
                      ["chooseaccount", { Constructor: _e, autocloses: !1 }],
                      ["badgecurrentlevel", { Constructor: H, autocloses: !1 }],
                      ["optindoorquest", { Constructor: W, autocloses: !1 }],
                      ["classname", { Constructor: ge, autocloses: !1 }],
                      ["localize", { Constructor: we, autocloses: !1 }],
                      ["salesection", { Constructor: q, autocloses: !1 }],
                      [
                        "reservationbutton",
                        { Constructor: pe, autocloses: !1 },
                      ],
                    ])),
                  ie),
                ),
              i.KN.InitGlobal().then(() => d(!0));
          }, [t]),
          o.useEffect(() => {
            const e = (0, c.l4)();
            e && a.locale(e);
          }, []),
          n ? e.children : null
        );
      }
    },
  },
]);
