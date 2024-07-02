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
      var a = n(85556),
        r = n(54842),
        s = n(35427),
        o = n(64936),
        i = n(82071);
      class c {
        constructor() {
          (this.m_mapBroadcasterSteamIDToEvents = new Map()),
            (this.m_mapBroadcasterSteamIDData = new Map()),
            (0, r.rC)(this);
        }
        static GetBBCodeParam(e, t, n = "") {
          const a = new RegExp(`\\W${t}\\W*=\\W*\\"(.*?)\\"`, "gmi").exec(e);
          return a ? a[1] : n;
        }
        static ParseCalendarEventPresentersFromText(e) {
          const t = /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
            n = new Array();
          for (;;) {
            const a = t.exec(e);
            if (null === a) break;
            const r = a[1],
              o = a[2],
              i = c.GetBBCodeParam(r, "steamid"),
              m = {
                steamID: i ? new s.K(i) : void 0,
                name: c.GetBBCodeParam(r, "name"),
                title: c.GetBBCodeParam(r, "title"),
                company: c.GetBBCodeParam(r, "company"),
                photo: c.GetBBCodeParam(r, "photo"),
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
            const a = t.exec(e);
            if (null === a) break;
            const r = a[1];
            n.add(Number(r));
          }
          return n;
        }
        static ParseEventModelAppReferences(e, t) {
          var n;
          const a = e.GetDescriptionWithFallback(t),
            r = c.ParseEventAppReferencesFromText(a);
          if (
            null === (n = e.jsondata) || void 0 === n
              ? void 0
              : n.referenced_appids
          )
            for (const t of e.jsondata.referenced_appids) r.add(t);
          return r;
        }
        async BuildBroadcasterSteamIDToActiveEventMap(e) {
          const t = o.JW.GetTimeNowWithOverride(),
            n = e.GetCalendarItemsInTimeRange(t - 3600, t);
          for (const e of n.rgCalendarItems)
            i.j1.QueueLoadPartnerEvent(e.clanid, e.unique_id);
          const a = n.rgCalendarItems.map((e) =>
              i.j1.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                s.K.InitFromClanID(e.clanid),
                e.unique_id,
                0,
              ),
            ),
            r = await Promise.all(a),
            c = new Map();
          for (const e of r)
            if (e && !(e.endTime && e.endTime < t))
              for (const t of e.GetBroadcastWhitelistAsSteamIDs())
                c.has(t) ? c.get(t).push(e) : c.set(t, [e]);
          return c;
        }
        IsBroadcasterAlreadyBound(e, t) {
          const n = this.m_mapBroadcasterSteamIDToEvents.get(e),
            a = n ? n.length : 0;
          if ((t ? t.length : 0) != a) return !1;
          for (let e = 0; e < a; e++) if (n[e] != t[e].GID) return !1;
          return !0;
        }
        static BuildSteamIDToPresenterMapFromEventList(e, t) {
          let n = new Map();
          for (const a of e) {
            if (!a) continue;
            const e = c.ParseEventModelPresenters(a, t);
            for (const t of e)
              t.steamID && n.set(t.steamID.ConvertTo64BitString(), t);
          }
          return n;
        }
        RemoveCachedDataIfNotInMap(e) {
          const t = new Array();
          this.m_mapBroadcasterSteamIDToEvents.forEach((n, a) => {
            e.has(a) || t.push(a);
          }),
            t.forEach((e) => {
              this.m_mapBroadcasterSteamIDData.delete(e),
                this.m_mapBroadcasterSteamIDToEvents.delete(e);
            });
        }
        static BuildAppIDRefsForEventList(e, t) {
          const n = new Set();
          for (const a of e) {
            c.ParseEventModelAppReferences(a, t).forEach((e) => n.add(e));
          }
          return Array.from(n);
        }
        UpdateCachedDataFromEvents(e, t) {
          e.forEach((e, n) => {
            if (this.IsBroadcasterAlreadyBound(n, e)) return;
            const a = {
              m_mapPresenters: c.BuildSteamIDToPresenterMapFromEventList(e, t),
              m_rgAppIDs: c.BuildAppIDRefsForEventList(e, t),
            };
            this.m_mapBroadcasterSteamIDData.set(n, a),
              this.m_mapBroadcasterSteamIDToEvents.set(
                n,
                e.map((e) => e.GID),
              );
          });
        }
        async SynchronizeEventsWithBroadcasts(e, t) {
          const n = await this.BuildBroadcasterSteamIDToActiveEventMap(e);
          this.RemoveCachedDataIfNotInMap(n),
            this.UpdateCachedDataFromEvents(n, t);
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
      (0, a.gn)([r.LO], c.prototype, "m_mapBroadcasterSteamIDData", void 0);
      const m = new c();
    },
    208: (e, t, n) => {
      "use strict";
      n.d(t, { M: () => c });
      var a = n(80751),
        r = n.n(a),
        s = n(37563),
        o = n(82071),
        i = n(86878);
      class c extends o.cA {
        async DeleteOldAnnouncement(e, t) {
          let n = new URLSearchParams();
          n.append("sessionid", s.De.SESSIONID);
          let a =
              s.De.COMMUNITY_BASE_URL +
              "/gid/" +
              e.ConvertTo64BitString() +
              "/announcements/ajaxdeleteannouncement/" +
              t,
            o = await r().post(a, n);
          if (1 != o.data.success) throw o.data;
          return this.RemoveGIDFromList(e, i.Vv + t), o.data;
        }
        static Get() {
          return (
            c.sm_Instance || ((c.sm_Instance = new c()), c.sm_Instance.Init()),
            c.sm_Instance
          );
        }
      }
    },
    25386: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => v });
      var a = n(85556),
        r = n(27605),
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
      (0, a.gn)([d.ak], f.prototype, "escFunction", null),
        (0, a.gn)([d.ak], f.prototype, "OnBackgroundClick", null),
        (f = (0, a.gn)([r.Pi], f));
    },
    18919: (e, t, n) => {
      "use strict";
      n.d(t, { I: () => d });
      var a = n(47427),
        r = n(58112),
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
            return a.createElement(r.h, { onEnter: n, onLeave: s });
          }
          return null;
        };
    },
    71472: (e, t, n) => {
      "use strict";
      n.d(t, { Ar: () => c, Wo: () => m, i9: () => i, ks: () => s });
      var a = n(47427),
        r = n(8285);
      function s(e, t) {
        let n;
        "string" == typeof e
          ? (n = e)
          : "location" in e
            ? (n = e.location.search)
            : "search" in e && (n = e.search);
        const a = new URLSearchParams(n.substring(1));
        if (a.has(t)) {
          const e = a.getAll(t);
          return e[e.length - 1];
        }
      }
      const o = (e) => null != e;
      function i(e, t, n, a = !1) {
        const r = new URLSearchParams(e.location.search.substring(1));
        r.delete(t),
          o(n) && r.append(t, n),
          a
            ? e.replace(`?${r.toString()}`, { ...e.location.state })
            : e.push(`?${r.toString()}`);
      }
      function c(e, t) {
        const n = (0, r.k6)(),
          c = (0, r.TH)(),
          m = (0, a.useMemo)(() => {
            const n = s(c.search, e);
            return o(n)
              ? o(t)
                ? "boolean" == typeof t
                  ? t.constructor("false" !== n)
                  : t.constructor(n)
                : n
              : t;
          }, [c.search, e, t]),
          l = (0, a.useCallback)(
            (t) => {
              i(n, e, o(t) ? String(t) : null);
            },
            [n, e],
          );
        return [m, l];
      }
      function m(e, t, n = !1) {
        const a = new URLSearchParams(e.location.search.substring(1));
        for (const e in t)
          if (t.hasOwnProperty(e)) {
            const n = t[e];
            a.delete(e), o(n) && a.append(e, n);
          }
        n
          ? e.replace(`?${a.toString()}`, { ...e.location.state })
          : e.push(`?${a.toString()}`);
      }
    },
    56164: (e, t, n) => {
      "use strict";
      n.d(t, { bC: () => v, fU: () => h, mY: () => u, ug: () => p });
      var a = n(1485),
        r = n(31846),
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
          { ...e, getMinimized: () => t, toggleMinimized: () => n(!t) },
          e.children,
        );
      }
      function h(e) {
        const { bIsMinimized: t, fnToggleMinimize: n } = e,
          i = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return o.createElement(
          a.zx,
          { "data-tooltip-text": (0, r.Xx)(i), onClick: n },
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
