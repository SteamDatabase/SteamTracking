/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [4601],
  {
    87699: (e, t, a) => {
      a.d(t, { C: () => i, R: () => c });
      var r = a(85556),
        s = a(54842),
        n = a(35427),
        o = a(64936),
        m = a(82071);
      class c {
        constructor() {
          (0, s.rC)(this);
        }
        m_mapBroadcasterSteamIDToEvents = new Map();
        m_mapBroadcasterSteamIDData = new Map();
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
              m = c.GetBBCodeParam(s, "steamid"),
              i = {
                steamID: m ? new n.K(m) : void 0,
                name: c.GetBBCodeParam(s, "name"),
                title: c.GetBBCodeParam(s, "title"),
                company: c.GetBBCodeParam(s, "company"),
                photo: c.GetBBCodeParam(s, "photo"),
                bio: o,
              };
            a.push(i);
          }
          return a;
        }
        static ParseEventModelPresenters(e, t) {
          const a = e.GetDescriptionWithFallback(t);
          return c.ParseCalendarEventPresentersFromText(a);
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
          const a = e.GetDescriptionWithFallback(t),
            r = c.ParseEventAppReferencesFromText(a);
          if (e.jsondata?.referenced_appids)
            for (const t of e.jsondata.referenced_appids) r.add(t);
          return r;
        }
        async BuildBroadcasterSteamIDToActiveEventMap(e) {
          const t = o.JW.GetTimeNowWithOverride(),
            a = e.GetCalendarItemsInTimeRange(t - 3600, t);
          for (const e of a.rgCalendarItems)
            m.j1.QueueLoadPartnerEvent(e.clanid, e.unique_id);
          const r = a.rgCalendarItems.map((e) =>
              m.j1.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                n.K.InitFromClanID(e.clanid),
                e.unique_id,
                0,
              ),
            ),
            s = await Promise.all(r),
            c = new Map();
          for (const e of s)
            if (e && !(e.endTime && e.endTime < t))
              for (const t of e.GetBroadcastWhitelistAsSteamIDs())
                c.has(t) ? c.get(t).push(e) : c.set(t, [e]);
          return c;
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
            const e = c.ParseEventModelPresenters(r, t);
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
            c.ParseEventModelAppReferences(r, t).forEach((e) => a.add(e));
          }
          return Array.from(a);
        }
        UpdateCachedDataFromEvents(e, t) {
          e.forEach((e, a) => {
            if (this.IsBroadcasterAlreadyBound(a, e)) return;
            const r = {
              m_mapPresenters: c.BuildSteamIDToPresenterMapFromEventList(e, t),
              m_rgAppIDs: c.BuildAppIDRefsForEventList(e, t),
            };
            this.m_mapBroadcasterSteamIDData.set(a, r),
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
      (0, r.gn)([s.LO], c.prototype, "m_mapBroadcasterSteamIDData", void 0);
      const i = new c();
    },
  },
]);
