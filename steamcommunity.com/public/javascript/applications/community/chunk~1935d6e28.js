/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5119],
  {
    81503: (e, t, a) => {
      a.d(t, { C: () => c, R: () => d });
      var n = a(70655),
        r = a(22188),
        o = (a(26149), a(49186), a(92398), a(3389)),
        s = (a(55546), a(5525)),
        i = a(7200);
      class d {
        constructor() {
          (this.m_mapBroadcasterSteamIDToEvents = new Map()),
            (this.m_mapBroadcasterSteamIDData = new Map());
        }
        static GetBBCodeParam(e, t, a = "") {
          const n = new RegExp(`\\W${t}\\W*=\\W*\\"(.*?)\\"`, "gmi").exec(e);
          return n ? n[1] : a;
        }
        static ParseCalendarEventPresentersFromText(e) {
          const t = /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
            a = new Array();
          for (;;) {
            const n = t.exec(e);
            if (null === n) break;
            const r = n[1],
              s = n[2],
              i = d.GetBBCodeParam(r, "steamid"),
              c = {
                steamID: i ? new o.K(i) : void 0,
                name: d.GetBBCodeParam(r, "name"),
                title: d.GetBBCodeParam(r, "title"),
                company: d.GetBBCodeParam(r, "company"),
                photo: d.GetBBCodeParam(r, "photo"),
                bio: s,
              };
            a.push(c);
          }
          return a;
        }
        static ParseEventModelPresenters(e, t) {
          const a = e.GetDescriptionWithFallback(t);
          return d.ParseCalendarEventPresentersFromText(a);
        }
        static ParseEventAppReferencesFromText(e) {
          const t = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
            a = new Set();
          for (;;) {
            const n = t.exec(e);
            if (null === n) break;
            const r = n[1];
            a.add(Number(r));
          }
          return a;
        }
        static ParseEventModelAppReferences(e, t) {
          var a;
          const n = e.GetDescriptionWithFallback(t),
            r = d.ParseEventAppReferencesFromText(n);
          if (
            null === (a = e.jsondata) || void 0 === a
              ? void 0
              : a.referenced_appids
          )
            for (const t of e.jsondata.referenced_appids) r.add(t);
          return r;
        }
        BuildBroadcasterSteamIDToActiveEventMap(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const t = s.JW.GetTimeNowWithOverride(),
              a = e.GetCalendarItemsInTimeRange(t - 3600, t);
            for (const e of a.rgCalendarItems)
              i.j1.QueueLoadPartnerEvent(e.clanid, e.unique_id);
            const n = a.rgCalendarItems.map((e) =>
                i.j1.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  o.K.InitFromClanID(e.clanid),
                  e.unique_id,
                  0
                )
              ),
              r = yield Promise.all(n),
              d = new Map();
            for (const e of r)
              if (e && !(e.endTime && e.endTime < t))
                for (const t of e.GetBroadcastWhitelistAsSteamIDs())
                  d.has(t) ? d.get(t).push(e) : d.set(t, [e]);
            return d;
          });
        }
        IsBroadcasterAlreadyBound(e, t) {
          const a = this.m_mapBroadcasterSteamIDToEvents.get(e),
            n = a ? a.length : 0;
          if ((t ? t.length : 0) != n) return !1;
          for (let e = 0; e < n; e++) if (a[e] != t[e].GID) return !1;
          return !0;
        }
        static BuildSteamIDToPresenterMapFromEventList(e, t) {
          let a = new Map();
          for (const n of e) {
            if (!n) continue;
            const e = d.ParseEventModelPresenters(n, t);
            for (const t of e)
              t.steamID && a.set(t.steamID.ConvertTo64BitString(), t);
          }
          return a;
        }
        RemoveCachedDataIfNotInMap(e) {
          const t = new Array();
          this.m_mapBroadcasterSteamIDToEvents.forEach((a, n) => {
            e.has(n) || t.push(n);
          }),
            t.forEach((e) => {
              this.m_mapBroadcasterSteamIDData.delete(e),
                this.m_mapBroadcasterSteamIDToEvents.delete(e);
            });
        }
        static BuildAppIDRefsForEventList(e, t) {
          const a = new Set();
          for (const n of e) {
            d.ParseEventModelAppReferences(n, t).forEach((e) => a.add(e));
          }
          return Array.from(a);
        }
        UpdateCachedDataFromEvents(e, t) {
          e.forEach((e, a) => {
            if (this.IsBroadcasterAlreadyBound(a, e)) return;
            const n = {
              m_mapPresenters: d.BuildSteamIDToPresenterMapFromEventList(e, t),
              m_rgAppIDs: d.BuildAppIDRefsForEventList(e, t),
            };
            this.m_mapBroadcasterSteamIDData.set(a, n),
              this.m_mapBroadcasterSteamIDToEvents.set(
                a,
                e.map((e) => e.GID)
              );
          });
        }
        SynchronizeEventsWithBroadcasts(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const a = yield this.BuildBroadcasterSteamIDToActiveEventMap(e);
            this.RemoveCachedDataIfNotInMap(a),
              this.UpdateCachedDataFromEvents(a, t);
          });
        }
        GetPresenterMapForBroadcasterSteamID(e) {
          var t;
          return null === (t = this.m_mapBroadcasterSteamIDData.get(e)) ||
            void 0 === t
            ? void 0
            : t.m_mapPresenters;
        }
        GetAppIDListForBroadcasterSteamID(e) {
          var t;
          return null === (t = this.m_mapBroadcasterSteamIDData.get(e)) ||
            void 0 === t
            ? void 0
            : t.m_rgAppIDs;
        }
      }
      (0, n.gn)([r.LO], d.prototype, "m_mapBroadcasterSteamIDData", void 0);
      const c = new d();
    },
    54798: (e, t, a) => {
      a.d(t, { J: () => I });
      var n = a(70655),
        r = a(9669),
        o = a.n(r),
        s = a(22188),
        i = a(13271),
        d = a(67294),
        c = (a(92398), a(82946), a(81130)),
        m = a(99533),
        l = a(64839),
        _ = a(90666);
      class u {
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
          const e = new u();
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
      (0, n.gn)([s.LO], u.prototype, "giveaway_id", void 0),
        (0, n.gn)([s.LO], u.prototype, "seconds_until_drawing", void 0),
        (0, n.gn)([s.LO], u.prototype, "rtime_start", void 0),
        (0, n.gn)([s.LO], u.prototype, "rtime_end", void 0),
        (0, n.gn)([s.LO], u.prototype, "closed", void 0),
        (0, n.gn)([s.LO], u.prototype, "winner_count", void 0);
      class p {
        constructor() {
          (this.m_mapGiveawayIDToNextDrawInfo = new Map()),
            (this.m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map()),
            (this.m_bLoadedFromConfig = !1),
            (this.m_mapNextDrawChangeCallback = new Map());
        }
        GetKey(e, t) {
          return e + "_" + t;
        }
        GetInfoByInstance(e, t) {
          return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
            this.GetKey(e, t)
          );
        }
        GetNextDrawChangeCallback(e) {
          return (
            this.m_mapNextDrawChangeCallback.has(e) ||
              this.m_mapNextDrawChangeCallback.set(e, new m.pB()),
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
        ReloadGiveaway(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (!e) return null;
            let a = _.De.STORE_BASE_URL + "prizes/nextdraw/" + e,
              n = null,
              r = { origin: self.origin };
            return (
              (n = yield o().get(a, { params: r })),
              (0, s.z)(() => {
                if (
                  (this.m_mapGiveawayIDToNextDrawInfo.has(e) ||
                    this.m_mapGiveawayIDToNextDrawInfo.set(e, new u()),
                  this.CopyToGiveaway(
                    n.data,
                    this.m_mapGiveawayIDToNextDrawInfo.get(e)
                  ),
                  void 0 !== t)
                ) {
                  const a = this.GetKey(e, t);
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(a) ||
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(
                      a,
                      new u()
                    ),
                    this.CopyToGiveaway(
                      n.data,
                      this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(a)
                    );
                }
              }),
              this.GetNextDrawChangeCallback(e).Dispatch(
                this.m_mapGiveawayIDToNextDrawInfo.get(e)
              ),
              this.m_mapGiveawayIDToNextDrawInfo.get(e)
            );
          });
        }
        static Get() {
          return (
            p.s_Singleton ||
              ((p.s_Singleton = new p()),
              p.s_Singleton.Init(),
              "dev" == _.De.WEB_UNIVERSE &&
                (window.g_GiveawayStore = p.s_Singleton)),
            p.s_Singleton
          );
        }
        Init() {
          if (!this.m_bLoadedFromConfig) {
            let e = (0, _.kQ)("giveawaynextdraw", "application_config");
            if (e && e.giveaway_id) {
              let t = new u();
              this.CopyToGiveaway(e, t),
                this.m_mapGiveawayIDToNextDrawInfo.set(e.giveaway_id, t);
            }
            this.m_bLoadedFromConfig = !0;
          }
        }
      }
      (0, n.gn)([s.LO], p.prototype, "m_mapGiveawayIDToNextDrawInfo", void 0),
        (0, n.gn)([s.aD], p.prototype, "CopyToGiveaway", null);
      class w {
        constructor() {
          (this.m_myInstanceNumber = 0),
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
            let a =
              e.seconds_until_drawing <= 0 && 0 == e.winner_count ? 6e4 : 5e3;
            this.m_intervalID = window.setInterval(t, a);
          }
        }
        SetupCountDown(e, t) {
          e > 0 && (this.m_intervalCountDownID = window.setInterval(t, 1e3));
        }
      }
      function v(e, t) {
        const a = p.Get().GetInfoByInstance(e, t.m_myInstanceNumber);
        (a.seconds_until_drawing -= 1),
          0 == a.seconds_until_drawing && t.ClearCountDown();
      }
      function I(e) {
        const [t] = (0, d.useState)(new w()),
          a = (0, l.NW)();
        (0, d.useEffect)(
          () => (
            p
              .Get()
              .ReloadGiveaway(e, t.m_myInstanceNumber)
              .then((n) => {
                t.SetupRefreshDataInterval(n, () =>
                  (function (e, t) {
                    const a = p
                      .Get()
                      .GetInfoByInstance(e, t.m_myInstanceNumber);
                    a &&
                      a.BIsValid() &&
                      a.seconds_until_drawing <= 0 &&
                      !a.closed &&
                      (t.ClearCountDown(),
                      p
                        .Get()
                        .ReloadGiveaway(e, t.m_myInstanceNumber)
                        .then((a) => {
                          t.SetupCountDown(a.seconds_until_drawing, () =>
                            v(e, t)
                          );
                        }));
                  })(e, t)
                ),
                  t.SetupCountDown(n.seconds_until_drawing, () => v(e, t)),
                  a();
              }),
            () => {
              t.ClearRefreshInterval(), t.ClearCountDown();
            }
          ),
          [t, e, a]
        );
        const n = p.Get().GetInfoByInstance(e, t.m_myInstanceNumber),
          [r, o, s] = (0, i.SZ)(() => [
            null == n ? void 0 : n.winner_count,
            null == n ? void 0 : n.closed,
            null == n ? void 0 : n.seconds_until_drawing,
          ]);
        return {
          bLoadingGiveawayInfo:
            !n || null == n.giveaway_id || !n.BStarted() || void 0 === r,
          winner_count: r,
          closed: o,
          seconds_until_drawing: s,
        };
      }
      (w.s_GlobalInstance = 0),
        (0, n.gn)([c.a], w.prototype, "ClearRefreshInterval", null),
        (0, n.gn)([c.a], w.prototype, "ClearCountDown", null),
        (0, n.gn)([c.a], w.prototype, "SetupRefreshDataInterval", null),
        (0, n.gn)([c.a], w.prototype, "SetupCountDown", null);
    },
  },
]);
