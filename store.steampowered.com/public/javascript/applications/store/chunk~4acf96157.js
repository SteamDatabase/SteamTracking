/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2828],
  {
    60727: (e, t, a) => {
      a.d(t, { l: () => c, m: () => d });
      var n = a(34629),
        r = a(14947),
        o = a(17720),
        s = a(44165),
        i = a(91254);
      class d {
        constructor() {
          (0, r.Gn)(this);
        }
        m_mapBroadcasterSteamIDToEvents = new Map();
        m_mapBroadcasterSteamIDData = new Map();
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
                steamID: i ? new o.b(i) : void 0,
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
          const a = e.GetDescriptionWithFallback(t),
            n = d.ParseEventAppReferencesFromText(a);
          if (e.jsondata?.referenced_appids)
            for (const t of e.jsondata.referenced_appids) n.add(t);
          return n;
        }
        async BuildBroadcasterSteamIDToActiveEventMap(e) {
          const t = s.HD.GetTimeNowWithOverride(),
            a = e.GetCalendarItemsInTimeRange(t - 3600, t);
          for (const e of a.rgCalendarItems)
            i.O3.QueueLoadPartnerEvent(e.clanid, e.unique_id);
          const n = a.rgCalendarItems.map((e) =>
              i.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                o.b.InitFromClanID(e.clanid),
                e.unique_id,
                0,
              ),
            ),
            r = await Promise.all(n),
            d = new Map();
          for (const e of r)
            if (e && !(e.endTime && e.endTime < t))
              for (const t of e.GetBroadcastWhitelistAsSteamIDs())
                d.has(t) ? d.get(t).push(e) : d.set(t, [e]);
          return d;
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
                e.map((e) => e.GID),
              );
          });
        }
        async SynchronizeEventsWithBroadcasts(e, t) {
          const a = await this.BuildBroadcasterSteamIDToActiveEventMap(e);
          this.RemoveCachedDataIfNotInMap(a),
            this.UpdateCachedDataFromEvents(a, t);
        }
        GetPresenterMapForBroadcasterSteamID(e) {
          return this.m_mapBroadcasterSteamIDData.get(e)?.m_mapPresenters;
        }
        GetAppIDListForBroadcasterSteamID(e) {
          return this.m_mapBroadcasterSteamIDData.get(e)?.m_rgAppIDs;
        }
      }
      (0, n.Cg)([r.sH], d.prototype, "m_mapBroadcasterSteamIDData", void 0);
      const c = new d();
    },
    94057: (e, t, a) => {
      a.d(t, { w: () => v });
      var n = a(34629),
        r = a(41735),
        o = a.n(r),
        s = a(14947),
        i = a(65946),
        d = a(90626),
        c = a(6419),
        m = a(6144),
        l = a(73745),
        _ = a(78327);
      class w {
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
          const e = new w();
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
      (0, n.Cg)([s.sH], w.prototype, "giveaway_id", void 0),
        (0, n.Cg)([s.sH], w.prototype, "seconds_until_drawing", void 0),
        (0, n.Cg)([s.sH], w.prototype, "rtime_start", void 0),
        (0, n.Cg)([s.sH], w.prototype, "rtime_end", void 0),
        (0, n.Cg)([s.sH], w.prototype, "closed", void 0),
        (0, n.Cg)([s.sH], w.prototype, "winner_count", void 0);
      class p {
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
              this.m_mapNextDrawChangeCallback.set(e, new m.lu()),
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
          let a = _.TS.STORE_BASE_URL + "prizes/nextdraw/" + e,
            n = null,
            r = { origin: self.origin };
          return (
            (n = await o().get(a, { params: r })),
            (0, s.h5)(() => {
              if (
                (this.m_mapGiveawayIDToNextDrawInfo.has(e) ||
                  this.m_mapGiveawayIDToNextDrawInfo.set(e, new w()),
                this.CopyToGiveaway(
                  n.data,
                  this.m_mapGiveawayIDToNextDrawInfo.get(e),
                ),
                void 0 !== t)
              ) {
                const a = this.GetKey(e, t);
                this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(a) ||
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(a, new w()),
                  this.CopyToGiveaway(
                    n.data,
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(a),
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
            p.s_Singleton ||
              ((p.s_Singleton = new p()),
              p.s_Singleton.Init(),
              "dev" == _.TS.WEB_UNIVERSE &&
                (window.g_GiveawayStore = p.s_Singleton)),
            p.s_Singleton
          );
        }
        Init() {
          if (!this.m_bLoadedFromConfig) {
            let e = (0, _.Tc)("giveawaynextdraw", "application_config");
            if (e && e.giveaway_id) {
              let t = new w();
              this.CopyToGiveaway(e, t),
                this.m_mapGiveawayIDToNextDrawInfo.set(e.giveaway_id, t);
            }
            this.m_bLoadedFromConfig = !0;
          }
        }
      }
      (0, n.Cg)([s.sH], p.prototype, "m_mapGiveawayIDToNextDrawInfo", void 0),
        (0, n.Cg)([s.XI], p.prototype, "CopyToGiveaway", null);
      class u {
        m_intervalID;
        m_intervalCountDownID;
        static s_GlobalInstance = 0;
        m_myInstanceNumber = 0;
        constructor() {
          (this.m_myInstanceNumber = u.s_GlobalInstance),
            (u.s_GlobalInstance += 1);
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
      function I(e, t) {
        const a = p.Get().GetInfoByInstance(e, t.m_myInstanceNumber);
        (a.seconds_until_drawing -= 1),
          0 == a.seconds_until_drawing && t.ClearCountDown();
      }
      function v(e) {
        const [t] = (0, d.useState)(new u()),
          a = (0, l.CH)();
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
                            I(e, t),
                          );
                        }));
                  })(e, t),
                ),
                  t.SetupCountDown(n.seconds_until_drawing, () => I(e, t)),
                  a();
              }),
            () => {
              t.ClearRefreshInterval(), t.ClearCountDown();
            }
          ),
          [t, e, a],
        );
        const n = p.Get().GetInfoByInstance(e, t.m_myInstanceNumber),
          [r, o, s] = (0, i.q3)(() => [
            n?.winner_count,
            n?.closed,
            n?.seconds_until_drawing,
          ]);
        return {
          bLoadingGiveawayInfo:
            !n || null == n.giveaway_id || !n.BStarted() || void 0 === r,
          winner_count: r,
          closed: o,
          seconds_until_drawing: s,
        };
      }
      (0, n.Cg)([c.o], u.prototype, "ClearRefreshInterval", null),
        (0, n.Cg)([c.o], u.prototype, "ClearCountDown", null),
        (0, n.Cg)([c.o], u.prototype, "SetupRefreshDataInterval", null),
        (0, n.Cg)([c.o], u.prototype, "SetupCountDown", null);
    },
  },
]);
