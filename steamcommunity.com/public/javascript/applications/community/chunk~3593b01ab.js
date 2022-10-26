/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2677],
  {
    81503: (e, t, r) => {
      r.d(t, { C: () => c, R: () => d });
      var n = r(70655),
        s = r(22188),
        o = (r(26149), r(49186), r(54698), r(3389)),
        a = (r(55546), r(5525)),
        i = r(7200);
      class d {
        constructor() {
          (this.m_mapBroadcasterSteamIDToEvents = new Map()),
            (this.m_mapBroadcasterSteamIDData = new Map());
        }
        static GetBBCodeParam(e, t, r = "") {
          const n = new RegExp(`\\W${t}\\W*=\\W*\\"(.*?)\\"`, "gmi").exec(e);
          return n ? n[1] : r;
        }
        static ParseCalendarEventPresentersFromText(e) {
          const t = /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
            r = new Array();
          for (;;) {
            const n = t.exec(e);
            if (null === n) break;
            const s = n[1],
              a = n[2],
              i = d.GetBBCodeParam(s, "steamid"),
              c = {
                steamID: i ? new o.K(i) : void 0,
                name: d.GetBBCodeParam(s, "name"),
                title: d.GetBBCodeParam(s, "title"),
                company: d.GetBBCodeParam(s, "company"),
                photo: d.GetBBCodeParam(s, "photo"),
                bio: a,
              };
            r.push(c);
          }
          return r;
        }
        static ParseEventModelPresenters(e, t) {
          const r = e.GetDescriptionWithFallback(t);
          return d.ParseCalendarEventPresentersFromText(r);
        }
        static ParseEventAppReferencesFromText(e) {
          const t = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
            r = new Set();
          for (;;) {
            const n = t.exec(e);
            if (null === n) break;
            const s = n[1];
            r.add(Number(s));
          }
          return r;
        }
        static ParseEventModelAppReferences(e, t) {
          var r;
          const n = e.GetDescriptionWithFallback(t),
            s = d.ParseEventAppReferencesFromText(n);
          if (
            null === (r = e.jsondata) || void 0 === r
              ? void 0
              : r.referenced_appids
          )
            for (const t of e.jsondata.referenced_appids) s.add(t);
          return s;
        }
        BuildBroadcasterSteamIDToActiveEventMap(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const t = a.JW.GetTimeNowWithOverride(),
              r = e.GetCalendarItemsInTimeRange(t - 3600, t);
            for (const e of r.rgCalendarItems)
              i.j1.QueueLoadPartnerEvent(e.clanid, e.unique_id);
            const n = r.rgCalendarItems.map((e) =>
                i.j1.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  o.K.InitFromClanID(e.clanid),
                  e.unique_id,
                  0
                )
              ),
              s = yield Promise.all(n),
              d = new Map();
            for (const e of s)
              if (e && !(e.endTime && e.endTime < t))
                for (const t of e.GetBroadcastWhitelistAsSteamIDs())
                  d.has(t) ? d.get(t).push(e) : d.set(t, [e]);
            return d;
          });
        }
        IsBroadcasterAlreadyBound(e, t) {
          const r = this.m_mapBroadcasterSteamIDToEvents.get(e),
            n = r ? r.length : 0;
          if ((t ? t.length : 0) != n) return !1;
          for (let e = 0; e < n; e++) if (r[e] != t[e].GID) return !1;
          return !0;
        }
        static BuildSteamIDToPresenterMapFromEventList(e, t) {
          let r = new Map();
          for (const n of e) {
            if (!n) continue;
            const e = d.ParseEventModelPresenters(n, t);
            for (const t of e)
              t.steamID && r.set(t.steamID.ConvertTo64BitString(), t);
          }
          return r;
        }
        RemoveCachedDataIfNotInMap(e) {
          const t = new Array();
          this.m_mapBroadcasterSteamIDToEvents.forEach((r, n) => {
            e.has(n) || t.push(n);
          }),
            t.forEach((e) => {
              this.m_mapBroadcasterSteamIDData.delete(e),
                this.m_mapBroadcasterSteamIDToEvents.delete(e);
            });
        }
        static BuildAppIDRefsForEventList(e, t) {
          const r = new Set();
          for (const n of e) {
            d.ParseEventModelAppReferences(n, t).forEach((e) => r.add(e));
          }
          return Array.from(r);
        }
        UpdateCachedDataFromEvents(e, t) {
          e.forEach((e, r) => {
            if (this.IsBroadcasterAlreadyBound(r, e)) return;
            const n = {
              m_mapPresenters: d.BuildSteamIDToPresenterMapFromEventList(e, t),
              m_rgAppIDs: d.BuildAppIDRefsForEventList(e, t),
            };
            this.m_mapBroadcasterSteamIDData.set(r, n),
              this.m_mapBroadcasterSteamIDToEvents.set(
                r,
                e.map((e) => e.GID)
              );
          });
        }
        SynchronizeEventsWithBroadcasts(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const r = yield this.BuildBroadcasterSteamIDToActiveEventMap(e);
            this.RemoveCachedDataIfNotInMap(r),
              this.UpdateCachedDataFromEvents(r, t);
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
      (0, n.gn)([s.LO], d.prototype, "m_mapBroadcasterSteamIDData", void 0);
      const c = new d();
    },
    15396: (e, t, r) => {
      r.d(t, { Y: () => i });
      var n = r(70655),
        s = r(67294),
        o = r(64839),
        a = r(54452);
      class i extends s.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              bRenderChildren: !1,
              nPrevRenderWidth: 0,
              nPrevRenderHeight: 0,
            }),
            (this.m_refContainer = s.createRef());
        }
        BLoadAndUnload() {
          return "LoadAndUnload" == (this.props.mode || "JustLoad");
        }
        OnVisibilityChange(e) {
          let t = this.state.bRenderChildren;
          if (t == e) return;
          if (t && !this.BLoadAndUnload()) return;
          let r = 0,
            n = 0;
          if (this.m_refContainer.current) {
            const e = this.m_refContainer.current.GetBoundingClientRect();
            e && ((r = e.width), (n = e.height));
          }
          this.setState({
            bRenderChildren: e,
            nPrevRenderWidth: r,
            nPrevRenderHeight: n,
          }),
            e && this.props.onRender && this.props.onRender();
        }
        render() {
          const e = this.props,
            {
              placeholderWidth: t,
              placeholderHeight: r,
              onRender: o,
              style: i,
              mode: d,
            } = e,
            c = (0, n._T)(e, [
              "placeholderWidth",
              "placeholderHeight",
              "onRender",
              "style",
              "mode",
            ]),
            l = this.state.bRenderChildren;
          let m = i;
          if (!l) {
            const e = this.state.nPrevRenderWidth || t,
              n = this.state.nPrevRenderHeight || r;
            (void 0 === n && void 0 === e) ||
              (m = Object.assign(Object.assign({}, i), {
                minHeight: n,
                minWidth: e,
              }));
          }
          const h = this.BLoadAndUnload() ? "repeated" : "once";
          return s.createElement(
            a.U,
            Object.assign({ ref: this.m_refContainer, style: m }, c, {
              onVisibilityChange: this.OnVisibilityChange,
              trigger: h,
            }),
            l && this.props.children
          );
        }
      }
      (0, n.gn)([o.ak], i.prototype, "OnVisibilityChange", null);
    },
    54452: (e, t, r) => {
      r.d(t, { U: () => i });
      var n = r(70655),
        s = r(67294),
        o = r(53622),
        a = r(64839);
      class i extends s.Component {
        constructor() {
          super(...arguments),
            (this.m_observer = null),
            (this.m_refElement = s.createRef()),
            (this.m_elTracked = null),
            (this.m_bPreviouslyIntersecting = !1);
        }
        static GetScrollableClassname() {
          return "vt-scrollable";
        }
        BTriggerOnce() {
          return "once" == (this.props.trigger || "once");
        }
        GetBoundingClientRect() {
          return this.m_refElement.current
            ? this.m_refElement.current.getBoundingClientRect()
            : null;
        }
        DestroyObserver() {
          this.m_observer &&
            (this.m_observer.disconnect(),
            (this.m_observer = null),
            (this.m_elTracked = null));
        }
        componentWillUnmount() {
          this.DestroyObserver();
        }
        componentDidMount() {
          this.UpdateObserver(null);
        }
        componentDidUpdate(e) {
          this.UpdateObserver(e);
        }
        UpdateObserver(e) {
          if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
          this.m_observer &&
            e &&
            e.rootMargin != this.m_observer.rootMargin &&
            this.DestroyObserver();
          let t = this.m_refElement.current;
          if (
            (this.m_observer &&
              t != this.m_elTracked &&
              (this.m_observer.unobserve(this.m_elTracked),
              (this.m_elTracked = null)),
            !this.m_observer && t)
          ) {
            let e = { root: this.FindScrollableAncestor(t) };
            this.props.rootMargin && (e.rootMargin = this.props.rootMargin),
              (this.m_observer = (0, a.Gt)(t, this.OnIntersection, e));
          }
          this.m_observer &&
            t &&
            t != this.m_elTracked &&
            (this.m_observer.observe(t), (this.m_elTracked = t));
        }
        FindScrollableAncestor(e) {
          return o.Jk(e, (e) => {
            const t = this.props.bHorizontal
              ? window.getComputedStyle(e).overflowX
              : window.getComputedStyle(e).overflowY;
            return (
              "scroll" == t ||
              "auto" == t ||
              !!e.classList.contains(i.GetScrollableClassname())
            );
          });
        }
        OnIntersection(e, t) {
          let r = !1;
          for (const t of e)
            if (t.isIntersecting) {
              r = !0;
              break;
            }
          this.m_bPreviouslyIntersecting != r &&
            ((this.m_bPreviouslyIntersecting = r),
            this.props.onVisibilityChange && this.props.onVisibilityChange(r),
            r && this.BTriggerOnce() && this.DestroyObserver());
        }
        render() {
          let e = this.props,
            {
              onVisibilityChange: t,
              rootMargin: r,
              trigger: o,
              bHorizontal: a,
            } = e,
            i = (0, n._T)(e, [
              "onVisibilityChange",
              "rootMargin",
              "trigger",
              "bHorizontal",
            ]);
          return s.createElement(
            "div",
            Object.assign({ ref: this.m_refElement }, i),
            this.props.children
          );
        }
      }
      (0, n.gn)([a.ak], i.prototype, "OnIntersection", null);
    },
    11539: (e, t, r) => {
      r.d(t, { h: () => o });
      var n = r(67294),
        s = r(80533);
      const o = (e) => {
        const { onPositionChange: t, onLeave: r } = e,
          o = n.useCallback(
            (e) => (
              void 0 === e.previousPosition &&
                e.currentPosition === s.h.above &&
                r &&
                r(e),
              t && t(e)
            ),
            [t, r]
          );
        return n.createElement(
          s.h,
          Object.assign({}, e, { onPositionChange: o })
        );
      };
    },
  },
]);
