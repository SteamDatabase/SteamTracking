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
      n.d(t, { w: () => v });
      var a = n(34629),
        o = n(41735),
        r = n.n(o),
        s = n(14947),
        i = n(65946),
        l = n(90626),
        c = n(6419),
        u = n(6144),
        d = n(73745),
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
      class w {
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
            w.s_Singleton ||
              ((w.s_Singleton = new w()),
              w.s_Singleton.Init(),
              "dev" == m.TS.WEB_UNIVERSE &&
                (window.g_GiveawayStore = w.s_Singleton)),
            w.s_Singleton
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
      (0, a.Cg)([s.sH], w.prototype, "m_mapGiveawayIDToNextDrawInfo", void 0),
        (0, a.Cg)([s.XI], w.prototype, "CopyToGiveaway", null);
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
      function p(e, t) {
        const n = w.Get().GetInfoByInstance(e, t.m_myInstanceNumber);
        (n.seconds_until_drawing -= 1),
          0 == n.seconds_until_drawing && t.ClearCountDown();
      }
      function v(e) {
        const [t] = (0, l.useState)(new g()),
          n = (0, d.CH)();
        (0, l.useEffect)(
          () => (
            w
              .Get()
              .ReloadGiveaway(e, t.m_myInstanceNumber)
              .then((a) => {
                t.SetupRefreshDataInterval(a, () =>
                  (function (e, t) {
                    const n = w
                      .Get()
                      .GetInfoByInstance(e, t.m_myInstanceNumber);
                    n &&
                      n.BIsValid() &&
                      n.seconds_until_drawing <= 0 &&
                      !n.closed &&
                      (t.ClearCountDown(),
                      w
                        .Get()
                        .ReloadGiveaway(e, t.m_myInstanceNumber)
                        .then((n) => {
                          t.SetupCountDown(n.seconds_until_drawing, () =>
                            p(e, t),
                          );
                        }));
                  })(e, t),
                ),
                  t.SetupCountDown(a.seconds_until_drawing, () => p(e, t)),
                  n();
              }),
            () => {
              t.ClearRefreshInterval(), t.ClearCountDown();
            }
          ),
          [t, e, n],
        );
        const a = w.Get().GetInfoByInstance(e, t.m_myInstanceNumber),
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
      (0, a.Cg)([c.o], g.prototype, "ClearRefreshInterval", null),
        (0, a.Cg)([c.o], g.prototype, "ClearCountDown", null),
        (0, a.Cg)([c.o], g.prototype, "SetupRefreshDataInterval", null),
        (0, a.Cg)([c.o], g.prototype, "SetupCountDown", null);
    },
    81881: (e, t, n) => {
      "use strict";
      n.d(t, { d: () => Ie });
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
        w = n(68797);
      class g {
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
            e = (0, w.H)(n);
          } catch (t) {
            e = (0, w.H)(t);
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
            g.s_globalSingletonStore ||
              ((g.s_globalSingletonStore = new g()),
              ("dev" != u.TS.WEB_UNIVERSE && "beta" != u.TS.WEB_UNIVERSE) ||
                (window.g_DeckCompatCountStores = g.s_globalSingletonStore)),
            g.s_globalSingletonStore
          );
        }
        constructor() {
          if (document.getElementById("application_config")) {
            let e = (0, u.Tc)("deckcompatcount", "application_config");
            g.ValidateListCompat(e) && (this.m_counts = e);
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
      var p = n(85320),
        v = n(56631),
        I = n(35400),
        h = n(28188),
        f = n(22797),
        y = n(6878),
        C = n(94057),
        D = n(29868);
      function b(e) {
        return e < 10 ? "0" + e : e;
      }
      function E(e) {
        const { giveawayid: t } = e,
          n = (0, C.w)(t),
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
              { className: D.countdownCtn },
              Boolean(s) &&
                o.createElement(
                  "div",
                  { className: D.Closed },
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
                        { className: D.Throbber },
                        o.createElement(f.t, { size: "small" }),
                        o.createElement(
                          "div",
                          null,
                          (0, c.we)("#Giveaway_RandomDraw"),
                        ),
                      )
                    : o.createElement(
                        "div",
                        { className: D.CountDownCtn },
                        o.createElement(
                          "div",
                          { className: D.CountDownTime },
                          b(Math.floor(i / 60)) + ":" + b(i % 60),
                        ),
                        o.createElement(
                          "div",
                          { className: D.CountDownText },
                          (0, c.we)("#Giveaway_CountDown2"),
                          " ",
                          (0, c.we)("#Giveaway_KeepWatching"),
                        ),
                      ),
                  Boolean(r > 0) &&
                    o.createElement(
                      "div",
                      { className: D.WinnerInfo },
                      o.createElement(
                        "div",
                        { className: D.WinnerCount },
                        r.toLocaleString(),
                      ),
                      o.createElement(
                        "div",
                        { className: D.WinnerText },
                        (0, c.we)("#Giveaway_Congratulation"),
                      ),
                    ),
                ),
            );
      }
      var S = n(10962),
        N = n(39733),
        G = n(10981),
        x = n(12155),
        k = n(82477),
        T = n(92757),
        B = n(39256),
        L = n(99487),
        M = n(7193),
        R = n(39199),
        A = n(96971),
        P = n(53677),
        j = n(40353);
      function H(e) {
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
                return o.createElement(F, {
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
      function F(e) {
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
          l = (0, R.Uf)(i, s),
          c = Math.min(n + l, a);
        return o.createElement(
          "span",
          { className: "DisplayBadgeProgress" },
          c.toLocaleString(),
        );
      }
      function W(e) {
        const { event: t } = e.context,
          n = Number.parseInt((0, d.j$)(e.args, "eventid"));
        return u.iA.logged_in && n
          ? o.createElement(H, { nEventBadgeID: n, eventModel: t })
          : null;
      }
      function U(e) {
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
                  : (0, k.vg)());
            },
          },
          Boolean(l)
            ? o.createElement("div", null, (0, c.we)("#GrantAwardError_Busy"))
            : o.createElement(
                o.Fragment,
                null,
                Boolean(s) && o.createElement(f.t, { size: "small" }),
                Boolean(a) && o.createElement(x.Jlk, null),
                n,
              ),
        );
      }
      function $(e) {
        const t = Number.parseInt((0, d.j$)(e.args)) || 0;
        return t >= 0 && t < 32
          ? o.createElement(U, { nDoorIndex: t }, e.children)
          : null;
      }
      const q = (0, T.y)(P.H);
      function O(e) {
        const t = Number.parseInt((0, d.j$)(e.args)),
          { event: n, showErrorInfo: a } = e.context;
        if (t) {
          const r = n?.jsondata?.sale_sections?.findIndex(
            (e) => e.unique_id == t,
          );
          if (r >= 0) {
            const t = n.GetDayIndexFromEventStart();
            return o.createElement(
              A.Cs,
              { location: a ? 2 : 0 },
              o.createElement(q, {
                event: n,
                section: n.jsondata.sale_sections[r],
                activeTab: new L.y(null, t),
                language: e.language,
                nSaleDayIndex: t,
                promotionName: "",
                appVisibilityTracker: null,
                ePreviewMode: a
                  ? j.S.EPreviewMode_Enabled
                  : j.S.EPreviewMode_Disabled,
              }),
            );
          }
          if (a)
            return o.createElement(
              "div",
              { className: B.ErrorDiv },
              "Error could not find sale section ",
              t,
            );
        }
        return null;
      }
      var V = n(84811),
        z = n(77291),
        Q = n(19267),
        K = n(8527);
      const Z = o.Fragment;
      function X(e) {
        const {
            reservationPackageID: t,
            event: n,
            depositPackageID: a,
            bIsPreview: r,
            psuLessPackageID: s,
          } = e,
          i = (0, Q.DR)(t),
          l = (0, Q.DR)(s),
          u = (0, o.useMemo)(
            () => [
              {
                unique_id: "reservation_bbcode_" + t,
                reservation_package: t,
                deposit_package: a,
                localized_reservation_desc: new Array(),
                localized_out_of_stock_override: new Array(),
                psu_less_package: s,
              },
            ],
            [a, t, s],
          );
        if (!i || (s && !l))
          return o.createElement(f.t, {
            string: (0, c.we)("#Loading"),
            size: "small",
            position: "center",
          });
        const d = !K.iA.logged_in || !i.account_restricted_from_purchasing;
        return o.createElement(
          V.tH,
          null,
          o.createElement(
            o.Suspense,
            { fallback: null },
            o.createElement(Z, { bIsPreview: r, rgReservationDef: u }),
          ),
          Boolean(i.allow_purchase_in_country) &&
            o.createElement(
              "div",
              { className: u[0].unique_id },
              o.createElement(z.bk, {
                reservationDef: u[0],
                hardwareDetail: i,
                bPSULessModel: !1,
              }),
              d &&
                o.createElement(z.pc, {
                  event: n,
                  reservationDef: u[0],
                  hardwareDetail: i,
                }),
              Boolean(l?.allow_purchase_in_country) &&
                o.createElement(z.bk, {
                  reservationDef: u[0],
                  hardwareDetail: l,
                  bPSULessModel: !0,
                }),
            ),
        );
      }
      var J = n(60014),
        Y = n(55963),
        ee = n(83284),
        te = n.n(ee),
        ne = n(52038),
        ae = n(26101);
      function oe(e) {
        const t = (0, J.n9)(),
          n = (0, Y.L3)(t);
        return o.createElement(ae.EP, {
          snr: n,
          appID: e.appid,
          classOverride: (0, ne.A)(te().WishlistButtonNotTop, "WishlistButton"),
        });
      }
      function re(e) {
        const t = Number(e.args.appid);
        return t ? o.createElement(oe, { appid: t }) : null;
      }
      let se = null;
      function ie(e) {
        const { event: t } = e.context,
          n = Number.parseInt((0, d.j$)(e.args, "appid")),
          a = Number.parseInt((0, d.j$)(e.args, "itemdefid")),
          r = Number.parseInt((0, d.j$)(e.args, "maxquantity")),
          s = (0, d.j$)(e.args, "calltoaction");
        return (0, v.gS)(n, a)
          ? o.createElement(h.f, {
              language: e.language,
              clanAccountID: t.clanSteamID.GetAccountID(),
              itemDefSetting: { nAppID: n, nItemDefID: a, max_quantity: r },
              strCallToAction: s,
            })
          : o.createElement(f.t, {
              size: "small",
              position: "center",
              string: (0, c.we)("#Loading"),
            });
      }
      function le(e) {
        const t = (function () {
          const [e, t] = o.useState(g.Get().GetCounts());
          return (
            o.useEffect(() => {
              e || g.Get().LoadCounts().then(t);
            }, []),
            e
          );
        })();
        if (!t) return o.createElement(f.t, { size: "small" });
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
      function ce(e) {
        const t = (0, p.j)("library");
        if (!t) return o.createElement(f.t, { size: "small" });
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
      function ue(e) {
        const t = Number.parseInt((0, d.j$)(e.args)),
          n =
            "hide" in e.args &&
            Boolean(Number.parseInt((0, d.j$)(e.args, "hide")));
        return t >= 0
          ? o.createElement(de, { nDoorIndex: t, bHide: n }, e.children)
          : null;
      }
      function de(e) {
        const { nDoorIndex: t, bHide: n, children: a } = e,
          r = (0, I.OM)(t);
        return null == r
          ? null
          : (r && !n) || (!r && n)
            ? o.createElement(o.Fragment, null, e.children)
            : null;
      }
      function me(e) {
        if (u.iA.logged_in) {
          const t = Number.parseInt((0, d.j$)(e.args)),
            n = Number.parseInt((0, d.j$)(e.args, "mod"));
          if (n > 0 && t < n && u.iA.accountid % n == t) return e.children;
        }
        return null;
      }
      function _e(e) {
        const t = (0, d.j$)(e.args);
        return t?.trim().length > 0
          ? o.createElement("div", { className: t.trim() }, e.children)
          : o.createElement(o.Fragment, null, e.children);
      }
      function we(e) {
        return o.createElement(
          "span",
          { className: y.LocalizeBlock },
          (0, c.oW)(
            e.children,
            o.createElement("b", null),
            o.createElement("b", null),
            o.createElement("b", null),
            o.createElement("b", null),
          ),
        );
      }
      function ge(e) {
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
            r = Number.parseInt((0, d.j$)(e.args, "psulesspackageid"));
          return o.createElement(X, {
            reservationPackageID: a,
            event: t,
            depositPackageID: n,
            psuLessPackageID: r,
          });
        }
        return o.createElement(o.Fragment, null);
      }
      var ve = n(43616);
      function Ie(e) {
        const { bSalePage: t } = e,
          [n, d] = o.useState(i.KN.IsInitialized());
        return (
          o.useEffect(() => {
            s.Vw.Init(new r.D(u.TS.WEBAPI_BASE_URL)),
              l.O3.Init(),
              t &&
                ve.f.AddDictionary(
                  (null == se &&
                    (se = new Map([
                      [
                        "itemdef",
                        {
                          Constructor: ie,
                          autocloses: !1,
                          skipInternalNewline: !0,
                          allowWrapTextForCopying: !0,
                        },
                      ],
                      ["wishlist", { Constructor: re, autocloses: !1 }],
                      ["deckcompatcount", { Constructor: le, autocloses: !1 }],
                      [
                        "deckcompatuserlibrarycount",
                        { Constructor: ce, autocloses: !1 },
                      ],
                      ["giveawayinfo", { Constructor: ge, autocloses: !1 }],
                      ["price", { Constructor: S.zD, autocloses: !1 }],
                      ["pricesavings", { Constructor: S.y7, autocloses: !1 }],
                      [
                        "eventdoorvisibility",
                        { Constructor: ue, autocloses: !1 },
                      ],
                      ["chooseaccount", { Constructor: me, autocloses: !1 }],
                      ["badgecurrentlevel", { Constructor: W, autocloses: !1 }],
                      ["optindoorquest", { Constructor: $, autocloses: !1 }],
                      ["classname", { Constructor: _e, autocloses: !1 }],
                      ["localize", { Constructor: we, autocloses: !1 }],
                      ["salesection", { Constructor: O, autocloses: !1 }],
                      [
                        "reservationbutton",
                        { Constructor: pe, autocloses: !1 },
                      ],
                    ])),
                  se),
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
