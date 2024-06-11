/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [648],
  {
    22723: (e) => {
      e.exports = { Main: "_2U6-VQ5Huj7x9B-s4v5iea" };
    },
    11209: (e) => {
      e.exports = {
        SectionTitleHeader: "_1K5gAgxxFp6Fb_mLLeHwQi",
        required_title: "_29VCzH1j-cbaFKeMAv4xX_",
      };
    },
    87699: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => m, R: () => c });
      var r = n(85556),
        a = n(54842),
        s = n(35427),
        o = n(64936),
        i = n(82071);
      class c {
        constructor() {
          (this.m_mapBroadcasterSteamIDToEvents = new Map()),
            (this.m_mapBroadcasterSteamIDData = new Map()),
            (0, a.rC)(this);
        }
        static GetBBCodeParam(e, t, n = "") {
          const r = new RegExp(`\\W${t}\\W*=\\W*\\"(.*?)\\"`, "gmi").exec(e);
          return r ? r[1] : n;
        }
        static ParseCalendarEventPresentersFromText(e) {
          const t = /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
            n = new Array();
          for (;;) {
            const r = t.exec(e);
            if (null === r) break;
            const a = r[1],
              o = r[2],
              i = c.GetBBCodeParam(a, "steamid"),
              m = {
                steamID: i ? new s.K(i) : void 0,
                name: c.GetBBCodeParam(a, "name"),
                title: c.GetBBCodeParam(a, "title"),
                company: c.GetBBCodeParam(a, "company"),
                photo: c.GetBBCodeParam(a, "photo"),
                bio: o,
              };
            n.push(m);
          }
          return n;
        }
        static ParseEventModelPresenters(e, t) {
          const n = e.GetDescriptionWithFallback(t);
          return c.ParseCalendarEventPresentersFromText(n);
        }
        static ParseEventAppReferencesFromText(e) {
          const t = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
            n = new Set();
          for (;;) {
            const r = t.exec(e);
            if (null === r) break;
            const a = r[1];
            n.add(Number(a));
          }
          return n;
        }
        static ParseEventModelAppReferences(e, t) {
          var n;
          const r = e.GetDescriptionWithFallback(t),
            a = c.ParseEventAppReferencesFromText(r);
          if (
            null === (n = e.jsondata) || void 0 === n
              ? void 0
              : n.referenced_appids
          )
            for (const t of e.jsondata.referenced_appids) a.add(t);
          return a;
        }
        BuildBroadcasterSteamIDToActiveEventMap(e) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            const t = o.JW.GetTimeNowWithOverride(),
              n = e.GetCalendarItemsInTimeRange(t - 3600, t);
            for (const e of n.rgCalendarItems)
              i.j1.QueueLoadPartnerEvent(e.clanid, e.unique_id);
            const r = n.rgCalendarItems.map((e) =>
                i.j1.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  s.K.InitFromClanID(e.clanid),
                  e.unique_id,
                  0,
                ),
              ),
              a = yield Promise.all(r),
              c = new Map();
            for (const e of a)
              if (e && !(e.endTime && e.endTime < t))
                for (const t of e.GetBroadcastWhitelistAsSteamIDs())
                  c.has(t) ? c.get(t).push(e) : c.set(t, [e]);
            return c;
          });
        }
        IsBroadcasterAlreadyBound(e, t) {
          const n = this.m_mapBroadcasterSteamIDToEvents.get(e),
            r = n ? n.length : 0;
          if ((t ? t.length : 0) != r) return !1;
          for (let e = 0; e < r; e++) if (n[e] != t[e].GID) return !1;
          return !0;
        }
        static BuildSteamIDToPresenterMapFromEventList(e, t) {
          let n = new Map();
          for (const r of e) {
            if (!r) continue;
            const e = c.ParseEventModelPresenters(r, t);
            for (const t of e)
              t.steamID && n.set(t.steamID.ConvertTo64BitString(), t);
          }
          return n;
        }
        RemoveCachedDataIfNotInMap(e) {
          const t = new Array();
          this.m_mapBroadcasterSteamIDToEvents.forEach((n, r) => {
            e.has(r) || t.push(r);
          }),
            t.forEach((e) => {
              this.m_mapBroadcasterSteamIDData.delete(e),
                this.m_mapBroadcasterSteamIDToEvents.delete(e);
            });
        }
        static BuildAppIDRefsForEventList(e, t) {
          const n = new Set();
          for (const r of e) {
            c.ParseEventModelAppReferences(r, t).forEach((e) => n.add(e));
          }
          return Array.from(n);
        }
        UpdateCachedDataFromEvents(e, t) {
          e.forEach((e, n) => {
            if (this.IsBroadcasterAlreadyBound(n, e)) return;
            const r = {
              m_mapPresenters: c.BuildSteamIDToPresenterMapFromEventList(e, t),
              m_rgAppIDs: c.BuildAppIDRefsForEventList(e, t),
            };
            this.m_mapBroadcasterSteamIDData.set(n, r),
              this.m_mapBroadcasterSteamIDToEvents.set(
                n,
                e.map((e) => e.GID),
              );
          });
        }
        SynchronizeEventsWithBroadcasts(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            const n = yield this.BuildBroadcasterSteamIDToActiveEventMap(e);
            this.RemoveCachedDataIfNotInMap(n),
              this.UpdateCachedDataFromEvents(n, t);
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
      (0, r.gn)([a.LO], c.prototype, "m_mapBroadcasterSteamIDData", void 0);
      const m = new c();
    },
    208: (e, t, n) => {
      "use strict";
      n.d(t, { M: () => m });
      var r = n(85556),
        a = n(80751),
        s = n.n(a),
        o = n(37563),
        i = n(82071),
        c = n(86878);
      class m extends i.cA {
        DeleteOldAnnouncement(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            let n = new URLSearchParams();
            n.append("sessionid", o.De.SESSIONID);
            let r =
                o.De.COMMUNITY_BASE_URL +
                "/gid/" +
                e.ConvertTo64BitString() +
                "/announcements/ajaxdeleteannouncement/" +
                t,
              a = yield s().post(r, n);
            if (1 != a.data.success) throw a.data;
            return this.RemoveGIDFromList(e, c.Vv + t), a.data;
          });
        }
        static Get() {
          return (
            m.sm_Instance || ((m.sm_Instance = new m()), m.sm_Instance.Init()),
            m.sm_Instance
          );
        }
      }
    },
    25386: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => v });
      var r = n(85556),
        a = n(27605),
        s = n(47427),
        o = n(208),
        i = n(82071),
        c = n(45167),
        m = n(54384),
        l = n(90069),
        d = n(20417),
        u = n(22723),
        p = n(50898);
      function h(e) {
        const { event: t, closeModal: n } = e;
        return s.createElement(
          p.Pv,
          { navID: "SinglePartnerEventRoot", closeModal: n },
          s.createElement(m.m$, {
            initialEvent: t,
            bShowOnlyInitialEvent: !0,
            partnerEventStore: i.j1,
            emoticonStore: c.F,
            showAppHeader: !0,
            closeModal: n,
          }),
        );
      }
      function v(e, t) {
        (0, l.AM)(s.createElement(h, { event: e }), t);
      }
      let f = class extends s.Component {
        constructor() {
          super(...arguments), (this.m_refFocus = s.createRef());
        }
        componentDidMount() {
          this.props.fnClose &&
            (document.addEventListener("keydown", this.escFunction, !1),
            this.m_refFocus.current && this.m_refFocus.current.focus());
        }
        componentWillUnmount() {
          this.props.fnClose &&
            document.removeEventListener("keydown", this.escFunction, !1);
        }
        escFunction(e) {
          const { fnClose: t } = this.props;
          27 === e.keyCode && t && t();
        }
        OnBackgroundClick(e) {
          e.currentTarget == e.target && this.props.fnClose();
        }
        render() {
          const { event: e, langOverride: t, isPreview: n } = this.props;
          return s.createElement(
            "div",
            {
              ref: this.m_refFocus,
              className: u.Main,
              onClick: this.OnBackgroundClick,
            },
            s.createElement(m.Xy, {
              key: e.GID,
              event: e,
              emoticonStore: c.F,
              partnerEventStore: o.M.Get(),
              langOverride: t,
              isPreview: n,
              bDisableBroadcastPlayer: !1,
            }),
          );
        }
      };
      (0, r.gn)([d.ak], f.prototype, "escFunction", null),
        (0, r.gn)([d.ak], f.prototype, "OnBackgroundClick", null),
        (f = (0, r.gn)([a.Pi], f));
    },
    18919: (e, t, n) => {
      "use strict";
      n.d(t, { I: () => d });
      var r = n(47427),
        a = n(58112),
        s = n(45492),
        o = n(42855),
        i = n(30851),
        c = n(73229);
      class m {
        constructor() {
          (this.m_bHasBeenTracked = !1), (this.m_fnSubmit = null);
        }
      }
      const l = new (class {
          constructor() {
            (this.m_nImpressionDelayMS = 500), (this.m_mapEvents = new Map());
          }
          ShouldTrack(e) {
            if (e.bOldAnnouncement) return !1;
            const t = this.m_mapEvents.get(e.GID);
            return !t || !t.m_bHasBeenTracked;
          }
          StartTracking(e, t) {
            if (e.bOldAnnouncement) return;
            let n = this.m_mapEvents.get(e.GID);
            n || ((n = new m()), this.m_mapEvents.set(e.GID, n)),
              n.m_bHasBeenTracked ||
                n.m_fnSubmit ||
                ((n.m_fnSubmit = new s.Ar()),
                n.m_fnSubmit.Schedule(
                  this.m_nImpressionDelayMS,
                  this.ReportImpression.bind(this, e, t),
                ));
          }
          StopTracking(e) {
            const t = this.m_mapEvents.get(e.GID);
            t && t.m_fnSubmit && (t.m_fnSubmit.Cancel(), (t.m_fnSubmit = null));
          }
          ReportImpression(e, t) {
            o.cb.Get().RecordEventShown(e, 8),
              t && c.Y.RecordViewedEvent((0, i.vY)(), e.GID);
            const n = this.m_mapEvents.get(e.GID);
            n &&
              ((n.m_bHasBeenTracked = !0),
              n.m_fnSubmit.Cancel(),
              (n.m_fnSubmit = null));
          }
        })(),
        d = (e) => {
          const { event: t } = e;
          if (l.ShouldTrack(t)) {
            const n = () => l.StartTracking(t, e.recordNewsHubStats || !1),
              s = () => l.StopTracking(t);
            return r.createElement(a.h, { onEnter: n, onLeave: s });
          }
          return null;
        };
    },
    71472: (e, t, n) => {
      "use strict";
      n.d(t, { Ar: () => c, Wo: () => m, i9: () => i, ks: () => s });
      var r = n(47427),
        a = n(8285);
      function s(e, t) {
        let n;
        "string" == typeof e
          ? (n = e)
          : "location" in e
            ? (n = e.location.search)
            : "search" in e && (n = e.search);
        const r = new URLSearchParams(n.substring(1));
        if (r.has(t)) {
          const e = r.getAll(t);
          return e[e.length - 1];
        }
      }
      const o = (e) => null != e;
      function i(e, t, n, r = !1) {
        const a = new URLSearchParams(e.location.search.substring(1));
        a.delete(t),
          o(n) && a.append(t, n),
          r
            ? e.replace(`?${a.toString()}`, Object.assign({}, e.location.state))
            : e.push(`?${a.toString()}`);
      }
      function c(e, t) {
        const n = (0, a.k6)(),
          c = (0, a.TH)(),
          m = (0, r.useMemo)(() => {
            const n = s(c.search, e);
            return o(n)
              ? o(t)
                ? "boolean" == typeof t
                  ? t.constructor("false" !== n)
                  : t.constructor(n)
                : n
              : t;
          }, [c.search, e, t]),
          l = (0, r.useCallback)(
            (t) => {
              i(n, e, o(t) ? String(t) : null);
            },
            [n, e],
          );
        return [m, l];
      }
      function m(e, t, n = !1) {
        const r = new URLSearchParams(e.location.search.substring(1));
        for (const e in t)
          if (t.hasOwnProperty(e)) {
            const n = t[e];
            r.delete(e), o(n) && r.append(e, n);
          }
        n
          ? e.replace(`?${r.toString()}`, Object.assign({}, e.location.state))
          : e.push(`?${r.toString()}`);
      }
    },
    56164: (e, t, n) => {
      "use strict";
      n.d(t, { bC: () => v, fU: () => h, mY: () => u, ug: () => p });
      var r = n(1485),
        a = n(31846),
        s = n(62613),
        o = n(47427),
        i = n(13129),
        c = n(71741),
        m = n(10162),
        l = n(27605),
        d = n(11209);
      const u = (0, l.Pi)((e) =>
        o.createElement(
          o.Fragment,
          null,
          o.createElement(
            "div",
            {
              className: (0, i.Z)(
                e.className ? e.className : "",
                d.SectionTitleHeader,
                d.required_title,
                "SectionTitleHeader",
              ),
            },
            o.createElement(
              "div",
              {
                className: (0, i.Z)(
                  c.CollapsableSectionTitle,
                  "EventEditorTextTitle",
                ),
              },
              e.title,
              Boolean(e.tooltip) && o.createElement(v, { tooltip: e.tooltip }),
            ),
            o.createElement(h, {
              bIsMinimized: e.getMinimized(),
              fnToggleMinimize: e.toggleMinimized,
            }),
          ),
          !e.getMinimized() && o.createElement(m.SV, null, e.children),
        ),
      );
      function p(e) {
        const [t, n] = o.useState(Boolean(e.bStartMinimized));
        return o.createElement(
          u,
          Object.assign({}, e, {
            getMinimized: () => t,
            toggleMinimized: () => n(!t),
          }),
          e.children,
        );
      }
      function h(e) {
        const { bIsMinimized: t, fnToggleMinimize: n } = e,
          i = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return o.createElement(
          r.zx,
          { "data-tooltip-text": (0, a.Xx)(i), onClick: n },
          e.bIsMinimized
            ? o.createElement(s.YqJ, null)
            : o.createElement(s.gR, null),
        );
      }
      function v(e) {
        return o.createElement(
          "span",
          {
            "data-tooltip-text": e.tooltip,
            className: (0, i.Z)(c.HelperTooltip, "HelperTooltip"),
          },
          " ",
          o.createElement(s.WWB, null),
        );
      }
    },
  },
]);
