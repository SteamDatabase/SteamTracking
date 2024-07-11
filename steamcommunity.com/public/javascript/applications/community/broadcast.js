/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [8396],
  {
    60727: (e, t, a) => {
      a.d(t, { l: () => c, m: () => i });
      var r = a(34629),
        s = a(14947),
        n = a(17720),
        o = a(44165),
        m = a(91254);
      class i {
        constructor() {
          (this.m_mapBroadcasterSteamIDToEvents = new Map()),
            (this.m_mapBroadcasterSteamIDData = new Map()),
            (0, s.Gn)(this);
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
              m = i.GetBBCodeParam(s, "steamid"),
              c = {
                steamID: m ? new n.b(m) : void 0,
                name: i.GetBBCodeParam(s, "name"),
                title: i.GetBBCodeParam(s, "title"),
                company: i.GetBBCodeParam(s, "company"),
                photo: i.GetBBCodeParam(s, "photo"),
                bio: o,
              };
            a.push(c);
          }
          return a;
        }
        static ParseEventModelPresenters(e, t) {
          const a = e.GetDescriptionWithFallback(t);
          return i.ParseCalendarEventPresentersFromText(a);
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
            s = i.ParseEventAppReferencesFromText(r);
          if (
            null === (a = e.jsondata) || void 0 === a
              ? void 0
              : a.referenced_appids
          )
            for (const t of e.jsondata.referenced_appids) s.add(t);
          return s;
        }
        async BuildBroadcasterSteamIDToActiveEventMap(e) {
          const t = o.HD.GetTimeNowWithOverride(),
            a = e.GetCalendarItemsInTimeRange(t - 3600, t);
          for (const e of a.rgCalendarItems)
            m.O3.QueueLoadPartnerEvent(e.clanid, e.unique_id);
          const r = a.rgCalendarItems.map((e) =>
              m.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                n.b.InitFromClanID(e.clanid),
                e.unique_id,
                0,
              ),
            ),
            s = await Promise.all(r),
            i = new Map();
          for (const e of s)
            if (e && !(e.endTime && e.endTime < t))
              for (const t of e.GetBroadcastWhitelistAsSteamIDs())
                i.has(t) ? i.get(t).push(e) : i.set(t, [e]);
          return i;
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
            const e = i.ParseEventModelPresenters(r, t);
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
            i.ParseEventModelAppReferences(r, t).forEach((e) => a.add(e));
          }
          return Array.from(a);
        }
        UpdateCachedDataFromEvents(e, t) {
          e.forEach((e, a) => {
            if (this.IsBroadcasterAlreadyBound(a, e)) return;
            const r = {
              m_mapPresenters: i.BuildSteamIDToPresenterMapFromEventList(e, t),
              m_rgAppIDs: i.BuildAppIDRefsForEventList(e, t),
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
      (0, r.Cg)([s.sH], i.prototype, "m_mapBroadcasterSteamIDData", void 0);
      const c = new i();
    },
  },
]);
