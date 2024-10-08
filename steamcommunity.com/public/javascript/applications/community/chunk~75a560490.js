/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2959],
  {
    19332: (e) => {
      e.exports = { Main: "_1Zn_5pvuMbqr57ws1eJKe" };
    },
    64734: (e) => {
      e.exports = {
        SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
        required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
      };
    },
    60727: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => m, m: () => c });
      var a = n(34629),
        r = n(14947),
        s = n(17720),
        o = n(44165),
        i = n(91254);
      class c {
        constructor() {
          (this.m_mapBroadcasterSteamIDToEvents = new Map()),
            (this.m_mapBroadcasterSteamIDData = new Map()),
            (0, r.Gn)(this);
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
                steamID: i ? new s.b(i) : void 0,
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
          const t = o.HD.GetTimeNowWithOverride(),
            n = e.GetCalendarItemsInTimeRange(t - 3600, t);
          for (const e of n.rgCalendarItems)
            i.O3.QueueLoadPartnerEvent(e.clanid, e.unique_id);
          const a = n.rgCalendarItems.map((e) =>
              i.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                s.b.InitFromClanID(e.clanid),
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
      (0, a.Cg)([r.sH], c.prototype, "m_mapBroadcasterSteamIDData", void 0);
      const m = new c();
    },
    73964: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => c });
      var a = n(41735),
        r = n.n(a),
        s = n(78327),
        o = n(91254),
        i = n(70078);
      class c extends o.ZQ {
        async DeleteOldAnnouncement(e, t) {
          let n = new URLSearchParams();
          n.append("sessionid", s.TS.SESSIONID);
          let a =
              s.TS.COMMUNITY_BASE_URL +
              "/gid/" +
              e.ConvertTo64BitString() +
              "/announcements/ajaxdeleteannouncement/" +
              t,
            o = await r().post(a, n);
          if (1 != o.data.success) throw o.data;
          return this.RemoveGIDFromList(e, i.cB + t), o.data;
        }
        static Get() {
          return (
            c.sm_Instance || ((c.sm_Instance = new c()), c.sm_Instance.Init()),
            c.sm_Instance
          );
        }
      }
    },
    81301: (e, t, n) => {
      "use strict";
      n.d(t, { Y: () => h });
      var a = n(34629),
        r = n(75844),
        s = n(90626),
        o = n(73964),
        i = n(91254),
        c = n(68033),
        m = n(27658),
        l = n(738),
        d = n(73745),
        u = n(19332),
        p = n(21273);
      function v(e) {
        const { event: t, closeModal: n } = e;
        return s.createElement(
          p.Qs,
          { navID: "SinglePartnerEventRoot", closeModal: n },
          s.createElement(m.AD, {
            initialEvent: t,
            bShowOnlyInitialEvent: !0,
            partnerEventStore: i.O3,
            emoticonStore: c.A,
            showAppHeader: !0,
            closeModal: n,
          }),
        );
      }
      function h(e, t) {
        (0, l.pg)(s.createElement(v, { event: e }), t);
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
            s.createElement(m.He, {
              key: e.GID,
              event: e,
              emoticonStore: c.A,
              partnerEventStore: o.$.Get(),
              langOverride: t,
              isPreview: n,
              bDisableBroadcastPlayer: !1,
            }),
          );
        }
      };
      (0, a.Cg)([d.oI], f.prototype, "escFunction", null),
        (0, a.Cg)([d.oI], f.prototype, "OnBackgroundClick", null),
        (f = (0, a.Cg)([r.PA], f));
    },
    74976: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => d });
      var a = n(90626),
        r = n(94607),
        s = n(6144),
        o = n(60746),
        i = n(46067),
        c = n(81477);
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
                ((n.m_fnSubmit = new s.LU()),
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
            o.KN.Get().RecordEventShown(e, 8),
              t && c.V.RecordViewedEvent((0, i.v0)(), e.GID);
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
            return a.createElement(r.Y, { onEnter: n, onLeave: s });
          }
          return null;
        };
    },
    48479: (e, t, n) => {
      "use strict";
      n.d(t, { AQ: () => p, pn: () => h, qx: () => v });
      var a = n(33737),
        r = n(61859),
        s = n(12155),
        o = n(90626),
        i = n(52038),
        c = n(95695),
        m = n(84811),
        l = n(64734),
        d = n(65946),
        u = n(26408);
      function p(e) {
        const {
            title: t,
            tooltip: n,
            getMinimized: a,
            toggleMinimized: r,
            className: s,
            children: p,
          } = e,
          v = (0, d.q3)(() => a());
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            "div",
            {
              className: (0, i.A)(
                s,
                l.SectionTitleHeader,
                l.required_title,
                "SectionTitleHeader",
              ),
            },
            o.createElement(
              "div",
              {
                className: (0, i.A)(
                  c.CollapsableSectionTitle,
                  "EventEditorTextTitle",
                ),
              },
              t,
              Boolean(n) && o.createElement(u.o, { tooltip: n }),
            ),
            o.createElement(h, { bIsMinimized: v, fnToggleMinimize: r }),
          ),
          !v && o.createElement(m.tH, null, p),
        );
      }
      function v(e) {
        const [t, n] = o.useState(Boolean(e.bStartMinimized));
        return o.createElement(
          p,
          { ...e, getMinimized: () => t, toggleMinimized: () => n(!t) },
          e.children,
        );
      }
      function h(e) {
        const { bIsMinimized: t, fnToggleMinimize: n } = e,
          i = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return o.createElement(
          a.$n,
          { "data-tooltip-text": (0, r.we)(i), onClick: n },
          e.bIsMinimized
            ? o.createElement(s.hz4, null)
            : o.createElement(s.Xjb, null),
        );
      }
    },
  },
]);
