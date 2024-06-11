/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [4601],
  {
    87699: (e, t, a) => {
      a.d(t, { C: () => d, R: () => m });
      var r = a(85556),
        s = a(54842),
        n = a(35427),
        o = a(64936),
        i = a(82071);
      class m {
        constructor() {
          (this.m_mapBroadcasterSteamIDToEvents = new Map()),
            (this.m_mapBroadcasterSteamIDData = new Map()),
            (0, s.rC)(this);
        }
        static GetBBCodeParam(e, t, a = "") {
          const r = new RegExp(`\\W${t}\\W*=\\W*\\"(.*?)\\"`, "gmi").exec(e);
          return r ? r[1] : a;
        }
        static ParseCalendarEventPresentersFromText(e) {
          const t = /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
            a = new Array();
          for (;;) {
            const r = t.exec(e);
            if (null === r) break;
            const s = r[1],
              o = r[2],
              i = m.GetBBCodeParam(s, "steamid"),
              d = {
                steamID: i ? new n.K(i) : void 0,
                name: m.GetBBCodeParam(s, "name"),
                title: m.GetBBCodeParam(s, "title"),
                company: m.GetBBCodeParam(s, "company"),
                photo: m.GetBBCodeParam(s, "photo"),
                bio: o,
              };
            a.push(d);
          }
          return a;
        }
        static ParseEventModelPresenters(e, t) {
          const a = e.GetDescriptionWithFallback(t);
          return m.ParseCalendarEventPresentersFromText(a);
        }
        static ParseEventAppReferencesFromText(e) {
          const t = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
            a = new Set();
          for (;;) {
            const r = t.exec(e);
            if (null === r) break;
            const s = r[1];
            a.add(Number(s));
          }
          return a;
        }
        static ParseEventModelAppReferences(e, t) {
          var a;
          const r = e.GetDescriptionWithFallback(t),
            s = m.ParseEventAppReferencesFromText(r);
          if (
            null === (a = e.jsondata) || void 0 === a
              ? void 0
              : a.referenced_appids
          )
            for (const t of e.jsondata.referenced_appids) s.add(t);
          return s;
        }
        BuildBroadcasterSteamIDToActiveEventMap(e) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            const t = o.JW.GetTimeNowWithOverride(),
              a = e.GetCalendarItemsInTimeRange(t - 3600, t);
            for (const e of a.rgCalendarItems)
              i.j1.QueueLoadPartnerEvent(e.clanid, e.unique_id);
            const r = a.rgCalendarItems.map((e) =>
                i.j1.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  n.K.InitFromClanID(e.clanid),
                  e.unique_id,
                  0,
                ),
              ),
              s = yield Promise.all(r),
              m = new Map();
            for (const e of s)
              if (e && !(e.endTime && e.endTime < t))
                for (const t of e.GetBroadcastWhitelistAsSteamIDs())
                  m.has(t) ? m.get(t).push(e) : m.set(t, [e]);
            return m;
          });
        }
        IsBroadcasterAlreadyBound(e, t) {
          const a = this.m_mapBroadcasterSteamIDToEvents.get(e),
            r = a ? a.length : 0;
          if ((t ? t.length : 0) != r) return !1;
          for (let e = 0; e < r; e++) if (a[e] != t[e].GID) return !1;
          return !0;
        }
        static BuildSteamIDToPresenterMapFromEventList(e, t) {
          let a = new Map();
          for (const r of e) {
            if (!r) continue;
            const e = m.ParseEventModelPresenters(r, t);
            for (const t of e)
              t.steamID && a.set(t.steamID.ConvertTo64BitString(), t);
          }
          return a;
        }
        RemoveCachedDataIfNotInMap(e) {
          const t = new Array();
          this.m_mapBroadcasterSteamIDToEvents.forEach((a, r) => {
            e.has(r) || t.push(r);
          }),
            t.forEach((e) => {
              this.m_mapBroadcasterSteamIDData.delete(e),
                this.m_mapBroadcasterSteamIDToEvents.delete(e);
            });
        }
        static BuildAppIDRefsForEventList(e, t) {
          const a = new Set();
          for (const r of e) {
            m.ParseEventModelAppReferences(r, t).forEach((e) => a.add(e));
          }
          return Array.from(a);
        }
        UpdateCachedDataFromEvents(e, t) {
          e.forEach((e, a) => {
            if (this.IsBroadcasterAlreadyBound(a, e)) return;
            const r = {
              m_mapPresenters: m.BuildSteamIDToPresenterMapFromEventList(e, t),
              m_rgAppIDs: m.BuildAppIDRefsForEventList(e, t),
            };
            this.m_mapBroadcasterSteamIDData.set(a, r),
              this.m_mapBroadcasterSteamIDToEvents.set(
                a,
                e.map((e) => e.GID),
              );
          });
        }
        SynchronizeEventsWithBroadcasts(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
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
      (0, r.gn)([s.LO], m.prototype, "m_mapBroadcasterSteamIDData", void 0);
      const d = new m();
    },
  },
]);
