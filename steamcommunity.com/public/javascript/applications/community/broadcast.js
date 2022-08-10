/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [4601],
  {
    77723: (e) => {
      e.exports = {
        Link: "salebanner_Link_26cHo",
        Banner: "salebanner_Banner_2df4N",
        Big: "salebanner_Big_1m7WT",
        Mobile: "salebanner_Mobile_2w3oX",
      };
    },
    81503: (e, t, r) => {
      "use strict";
      r.d(t, { C: () => c, R: () => l });
      var n = r(70655),
        s = r(22188),
        a = (r(26149), r(49186), r(92398), r(3389)),
        o = (r(35118), r(5525)),
        i = r(7200);
      class l {
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
              o = n[2],
              i = l.GetBBCodeParam(s, "steamid"),
              c = {
                steamID: i ? new a.K(i) : void 0,
                name: l.GetBBCodeParam(s, "name"),
                title: l.GetBBCodeParam(s, "title"),
                company: l.GetBBCodeParam(s, "company"),
                photo: l.GetBBCodeParam(s, "photo"),
                bio: o,
              };
            r.push(c);
          }
          return r;
        }
        static ParseEventModelPresenters(e, t) {
          const r = e.GetDescriptionWithFallback(t);
          return l.ParseCalendarEventPresentersFromText(r);
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
            s = l.ParseEventAppReferencesFromText(n);
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
            const t = o.JW.GetTimeNowWithOverride(),
              r = e.GetCalendarItemsInTimeRange(t - 3600, t);
            for (const e of r.rgCalendarItems)
              i.j1.QueueLoadPartnerEvent(e.clanid, e.unique_id);
            const n = r.rgCalendarItems.map((e) =>
                i.j1.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  a.K.InitFromClanID(e.clanid),
                  e.unique_id,
                  0
                )
              ),
              s = yield Promise.all(n),
              l = new Map();
            for (const e of s)
              if (e && !(e.endTime && e.endTime < t))
                for (const t of e.GetBroadcastWhitelistAsSteamIDs())
                  l.has(t) ? l.get(t).push(e) : l.set(t, [e]);
            return l;
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
            const e = l.ParseEventModelPresenters(n, t);
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
            l.ParseEventModelAppReferences(n, t).forEach((e) => r.add(e));
          }
          return Array.from(r);
        }
        UpdateCachedDataFromEvents(e, t) {
          e.forEach((e, r) => {
            if (this.IsBroadcasterAlreadyBound(r, e)) return;
            const n = {
              m_mapPresenters: l.BuildSteamIDToPresenterMapFromEventList(e, t),
              m_rgAppIDs: l.BuildAppIDRefsForEventList(e, t),
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
      (0, n.gn)([s.LO], l.prototype, "m_mapBroadcasterSteamIDData", void 0);
      const c = new l();
    },
    93612: (e, t, r) => {
      "use strict";
      r.d(t, { i: () => m });
      var n = r(67294),
        s = r(26149),
        a = r(50153),
        o = r(7573),
        i = r(41311),
        l = r(35092),
        c = r(90666),
        d = r(77723);
      function m(e) {
        const { gidEvent: t } = e,
          r = (0, a.XC)(t),
          [m, h] = (0, n.useMemo)(() => {
            var e, t, n, a;
            if (
              (null ===
                (t =
                  null === (e = null == r ? void 0 : r.jsondata) || void 0 === e
                    ? void 0
                    : e.localized_sale_product_banner) || void 0 === t
                ? void 0
                : t.length) > 0 &&
              (null ===
                (a =
                  null === (n = null == r ? void 0 : r.jsondata) || void 0 === n
                    ? void 0
                    : n.localized_sale_product_mobile_banner) || void 0 === a
                ? void 0
                : a.length) > 0
            ) {
              const e = (0, s.jM)(c.De.LANGUAGE),
                t = i.LZ.GetWithFallback(
                  r.jsondata.localized_sale_product_banner,
                  e
                ),
                n = i.LZ.GetWithFallback(
                  r.jsondata.localized_sale_product_mobile_banner,
                  e
                ),
                a = r.clanSteamID.GetAccountID();
              return [
                c.De.MEDIA_CDN_COMMUNITY_URL + `images/clans/${a}/${t}`,
                c.De.MEDIA_CDN_COMMUNITY_URL + `images/clans/${a}/${n}`,
              ];
            }
            return [null, null];
          }, [r]);
        return m && h
          ? n.createElement(
              "a",
              { href: (0, l.OL)(r.GetSaleURL()), className: d.Link },
              n.createElement("img", {
                src: m,
                className: (0, o.Z)(d.Banner, d.Big),
              }),
              n.createElement("img", {
                src: h,
                className: (0, o.Z)(d.Banner, d.Mobile),
              })
            )
          : null;
      }
    },
    15396: (e, t, r) => {
      "use strict";
      r.d(t, { Y: () => i });
      var n = r(70655),
        s = r(67294),
        a = r(22975),
        o = r(54452);
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
              onRender: a,
              style: i,
              mode: l,
            } = e,
            c = (0, n._T)(e, [
              "placeholderWidth",
              "placeholderHeight",
              "onRender",
              "style",
              "mode",
            ]),
            d = this.state.bRenderChildren;
          let m = i;
          if (!d) {
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
            o.U,
            Object.assign({ ref: this.m_refContainer, style: m }, c, {
              onVisibilityChange: this.OnVisibilityChange,
              trigger: h,
            }),
            d && this.props.children
          );
        }
      }
      (0, n.gn)([a.ak], i.prototype, "OnVisibilityChange", null);
    },
    54452: (e, t, r) => {
      "use strict";
      r.d(t, { U: () => i });
      var n = r(70655),
        s = r(67294),
        a = r(53622),
        o = r(22975);
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
              (this.m_observer = new IntersectionObserver(
                this.OnIntersection,
                e
              ));
          }
          this.m_observer &&
            t &&
            t != this.m_elTracked &&
            (this.m_observer.observe(t), (this.m_elTracked = t));
        }
        FindScrollableAncestor(e) {
          return a.Jk(e, (e) => {
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
              trigger: a,
              bHorizontal: o,
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
      (0, n.gn)([o.ak], i.prototype, "OnIntersection", null);
    },
    11539: (e, t, r) => {
      "use strict";
      r.d(t, { h: () => a });
      var n = r(67294),
        s = r(80533);
      const a = (e) => {
        const { onPositionChange: t, onLeave: r } = e,
          a = n.useCallback(
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
          Object.assign({}, e, { onPositionChange: a })
        );
      };
    },
  },
]);
