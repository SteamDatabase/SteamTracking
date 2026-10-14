/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [2959],
    {
      49789: (Z, W, r) => {
        "use strict";
        r.d(W, { NK: () => V, bK: () => U, dF: () => x, w2: () => H });
        var E = r(10142),
          f = r(813),
          m = r(18210),
          j = Object.defineProperty,
          J = (_, g, c) =>
            g in _
              ? j(_, g, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: c,
                })
              : (_[g] = c),
          D = (_, g, c) => J(_, typeof g != "symbol" ? g + "" : g, c),
          U = ((_) => (
            (_[(_.k_eLibrary = 1)] = "k_eLibrary"),
            (_[(_.k_eWishlist = 2)] = "k_eWishlist"),
            (_[(_.k_eFollowing = 4)] = "k_eFollowing"),
            (_[(_.k_eRecommended = 8)] = "k_eRecommended"),
            (_[(_.k_eSteam = 16)] = "k_eSteam"),
            (_[(_.k_eRequired = 32)] = "k_eRequired"),
            (_[(_.k_eFeatured = 64)] = "k_eFeatured"),
            (_[(_.k_eCurator = 128)] = "k_eCurator"),
            (_[(_.k_eReposted = 256)] = "k_eReposted"),
            _
          ))(U || {});
        class V {
          constructor() {
            D(this, "clanid"),
              D(this, "unique_id"),
              D(this, "event_type"),
              D(this, "appid"),
              D(this, "start_time"),
              D(this, "appInfo"),
              D(this, "clanInfo"),
              D(this, "score");
          }
          GetSource() {
            var g, c;
            return this.appInfo
              ? this.appInfo.source
              : (c = (g = this.clanInfo) == null ? void 0 : g.source) != null
                ? c
                : 0;
          }
          static GetEntityNameForID(g, c) {
            var w, v;
            if (g)
              return (v =
                (w = E.A.Get().GetApp(g)) == null ? void 0 : w.GetName()) !=
                null
                ? v
                : (0, m.we)("#EventCalendar_MuteApp_Unknown");
            if (c) {
              const a = f.ac.GetClanInfoByClanAccountID(c);
              if (a != null && a.group_name) return a.group_name;
            }
            return (0, m.we)("#EventCalendar_MuteApp_Unknown");
          }
          static BHasEntityNameForID(g, c) {
            var w, v;
            return g
              ? !!((w = E.A.Get().GetApp(g)) != null && w.GetName())
              : c
                ? !!(
                    (v = f.ac.GetClanInfoByClanAccountID(c)) != null &&
                    v.group_name
                  )
                : !1;
          }
          GetEntityName() {
            return V.GetEntityNameForID(this.appid, this.clanid);
          }
          GetGameCapsule() {
            var g, c;
            if (this.appInfo)
              return (c =
                (g = E.A.Get().GetApp(this.appInfo.appid)) == null
                  ? void 0
                  : g.GetAssets()) == null
                ? void 0
                : c.GetMainCapsuleURL();
            if (this.clanInfo) {
              let w = f.ac.GetClanInfoByClanAccountID(this.clanInfo.clanid);
              if (w) return w.avatar_full_url;
            }
            return (0, m.we)("#EventCalendar_MuteApp_Unknown");
          }
          GetGameIcon() {
            var g, c;
            if (this.appInfo)
              return (c =
                (g = E.A.Get().GetApp(this.appInfo.appid)) == null
                  ? void 0
                  : g.GetAssets()) == null
                ? void 0
                : c.GetCommunityIconURL();
            if (this.clanInfo) {
              let w = f.ac.GetClanInfoByClanAccountID(this.clanInfo.clanid);
              if (w) return w.avatar_full_url;
            }
            return (0, m.we)("#EventCalendar_MuteApp_Unknown");
          }
        }
        class x {
          constructor() {
            D(this, "appid"),
              D(this, "source"),
              D(this, "playtime"),
              D(this, "last_played"),
              D(this, "wishlist_added");
          }
        }
        class H {
          constructor() {
            D(this, "clanid"), D(this, "source");
          }
        }
      },
      98241: (Z, W, r) => {
        "use strict";
        r.d(W, { dP: () => ue, v0: () => me, Zr: () => le });
        var E = r(41735),
          f = r.n(E),
          m = r(14947),
          j = r(19367),
          J = r.n(j),
          D = r(72604),
          U = r(49789),
          V = r(53876),
          x = r(42277),
          H = r(90533),
          _ = r(76559),
          g = r(77495),
          c = r(10142),
          w = r(15901),
          v = r(71742),
          a = r(34592),
          l = r(27066),
          A = r(18210),
          I = r(3166),
          u = r(19619),
          S = r(81673),
          K = ((o) => (
            (o.Default = "default"),
            (o.Upcoming = "upcoming"),
            (o.Featured = "featured"),
            (o.Press = "press"),
            (o.Steam = "steam"),
            (o.Halloween = "halloween"),
            (o.Dev_Sales = "sales"),
            (o.Dev_All = "all"),
            (o.Dev_AssociatedPress = "associated_press"),
            o
          ))(K || {});
        const G = new Map();
        function R(o) {
          return G.size == 0 && C(), G.get(o);
        }
        function C() {
          const o = GetNewsHubBasePath();
          G.set("default", {
            id: "default",
            strUrl: `${o}/`,
            strName: Localize("#EventCalendar_NewsChannel_YourNews"),
            strSubtitle: Localize("#EventCalendar_NewsChannel_Personalized"),
            strHeaderTitle: Localize(
              "#EventCalendar_NewsChannel_YourNews_HeaderTitle",
            ),
          }),
            G.set("upcoming", {
              id: "upcoming",
              strUrl: `${o}/?upcoming=1`,
              strName: Localize("#EventCalendar_NewsChannel_Upcoming"),
              strShortName: Localize(
                "#EventCalendar_NewsChannel_UpcomingShort",
              ),
              strSubtitle: Localize("#EventCalendar_NewsChannel_Personalized"),
            }),
            G.set("featured", {
              id: "featured",
              strUrl: `${o}/collection/featured/`,
              strName: Localize("#EventCalendar_NewsChannel_Featured"),
              strSubtitle: Localize("#EventCalendar_NewsChannel_TopSellers"),
              strHeaderTitle: Localize(
                "#EventCalendar_NewsChannel_Featured_HeaderTitle",
              ),
            }),
            G.set("press", {
              id: "press",
              strUrl: `${o}/collection/press/`,
              strName: Localize("#EventCalendar_NewsChannel_Press"),
              strHeaderTitle: Localize("#EventCalendar_Collection_News_Title"),
              strHeaderSubtitle: Localize(
                "#EventCalendar_Collection_News_Subtitle",
              ),
            }),
            G.set("steam", {
              id: "steam",
              strUrl: `${o}/collection/steam/`,
              strName: Localize("#EventCalendar_NewsChannel_Steam"),
              strSubtitle: Localize("#EventCalendar_NewsChannel_SteamSubtitle"),
              strHeaderTitle: Localize(
                "#EventCalendar_NewsChannel_Steam_HeaderTitle",
              ),
            }),
            G.set("halloween", {
              id: "halloween",
              strUrl: `${o}/collection/halloween/`,
              strName: Localize("#EventCalendar_NewsChannel_Halloween"),
              strSubtitle: Localize(
                "#EventCalendar_NewsChannel_HalloweenSubtitle",
              ),
              strHeaderTitle: Localize(
                "#EventCalendar_Collection_Halloween_Title",
              ),
              strHeaderSubtitle: Localize(
                "#EventCalendar_Collection_Halloween_Subtitle",
              ),
            }),
            G.set("sales", {
              id: "sales",
              strUrl: `${o}/collection/sales/`,
              strName: Localize("#EventCalendar_NewsChannel_AllSales"),
            }),
            UserConfig.is_support &&
              (G.set("all", {
                id: "all",
                strUrl: `${o}/collection/all/`,
                strName: Localize("#EventCalendar_NewsChannel_All"),
                bIsValveOnly: !0,
              }),
              G.set("associated_press", {
                id: "associated_press",
                strUrl: `${o}/collection/associated_press/`,
                strName: Localize("#EventCalendar_NewsChannel_AssociatedPress"),
                bIsValveOnly: !0,
              }));
        }
        var s = r(7582),
          d = r(74618),
          k = Object.defineProperty,
          M = Object.getOwnPropertyDescriptor,
          q = (o, e, t) =>
            e in o
              ? k(o, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (o[e] = t),
          T = (o, e, t, n) => {
            for (
              var i = n > 1 ? void 0 : n ? M(e, t) : e, p = o.length - 1, h;
              p >= 0;
              p--
            )
              (h = o[p]) && (i = (n ? h(e, t, i) : h(i)) || i);
            return n && i && k(e, t, i), i;
          },
          B = (o, e, t) => q(o, typeof e != "symbol" ? e + "" : e, t);
        const ee = 2500;
        function z(o, e, t, n) {
          const i = "section-" + e,
            p = t >= o;
          return {
            strId: i,
            strSectionLabel: e,
            rtSectionStart: t,
            rtSectionEnd: n,
            bIsFutureSection: p,
            nRenderedHeight: ee,
            nTopOffset: 0,
          };
        }
        class F {
          constructor(e, t) {
            B(this, "m_nForwardStuckCount", 0),
              B(this, "m_nBackwardStuckCount", 0),
              B(this, "m_mapCalendarAppsByID", new Map()),
              B(this, "m_mapCalendarClansByID", new Map()),
              B(this, "m_mapCalendarEventsByGid", new Map()),
              B(this, "m_rgSortedCalendarEvents", new Array()),
              B(this, "m_visibilityStore"),
              B(this, "m_currentView", m.sH.box(void 0)),
              B(this, "m_bFinishedSearchingForward", !1),
              B(this, "m_bFinishedSearchingBackward", !1),
              B(this, "m_rgCalendarSections", []),
              B(this, "m_rgFutureSections", []),
              B(this, "m_dtInitTime"),
              B(this, "m_forwardRequestInFlight", null),
              B(this, "m_backwardRequestInFlight", null),
              B(this, "m_key"),
              B(this, "m_collectionMetaData"),
              (0, m.Gn)(this),
              (this.m_key = e),
              (this.m_visibilityStore = new S.vJ(t)),
              u.Fm.Get().HintLoad();
          }
          GetNumEventsLoaded() {
            return this.m_mapCalendarEventsByGid.size;
          }
          BIsGlobalCalendar() {
            return (
              !this.m_key.appids &&
              !this.m_key.clanaccountids &&
              !this.m_key.collectionid &&
              !this.m_key.saleid
            );
          }
          BIsShowingFeaturedFeed() {
            return !!(
              this.GetCollectionID() === K.Featured ||
              (this.BIsGlobalCalendar() && !I.iA.accountid)
            );
          }
          BIsSingleSourceCalendar() {
            return !!(this.BIsSingleGroupCalendar()
              ? !this.BIsSingleAppCalendar()
              : this.BIsSingleAppCalendar());
          }
          GetKey() {
            return this.m_key;
          }
          BEventMatchCalendarSingleSource(e) {
            var t, n;
            return (
              (this.BIsSingleAppCalendar() &&
                ((t = this.m_key.appids) == null ? void 0 : t[0]) == e.appid) ||
              (this.BIsSingleGroupCalendar() &&
                ((n = this.m_key.clanaccountids) == null ? void 0 : n[0]) ==
                  e.clanid)
            );
          }
          BIsSingleSourceMuted() {
            if (!this.BIsSingleSourceCalendar()) return !1;
            if (this.BIsSingleAppCalendar()) {
              const t = this.GetSingleAppID();
              return t !== void 0 && d.S.Get().BIsMutedAppID(t);
            }
            const e = this.GetSingleGroupID();
            return e !== void 0 && d.S.Get().BIsMutedClanID(e);
          }
          BIsSingleGroupCalendar() {
            return !!(
              this.m_key.clanaccountids && this.m_key.clanaccountids.length == 1
            );
          }
          GetSingleGroupID() {
            var e;
            return (e = this.m_key.clanaccountids) == null ? void 0 : e[0];
          }
          BIsSingleAppCalendar() {
            return !!(this.m_key.appids && this.m_key.appids.length == 1);
          }
          GetSingleAppID() {
            var e;
            return (e = this.m_key.appids) == null ? void 0 : e[0];
          }
          BIsCollectionCalendar() {
            return !!this.m_key.collectionid;
          }
          GetCollectionID() {
            return this.m_key.collectionid;
          }
          BIsSaleCalendar() {
            return !!this.m_key.saleid;
          }
          GetSaleID() {
            return this.m_key.saleid;
          }
          BIsCalendarEndTimeSet() {
            return !!this.m_key.rtCalendarEnd;
          }
          GetCalendarEndTime() {
            return this.m_key.rtCalendarEnd;
          }
          SetCollectionMetaData(e) {
            this.m_collectionMetaData = e;
          }
          GetCollectionMetaData() {
            return this.m_collectionMetaData;
          }
          BHasCollectionMetaData() {
            return !!this.m_collectionMetaData;
          }
          ValidateCollectionMetadata(e) {
            const t = e;
            return !!(
              t &&
              typeof t == "object" &&
              t.clanid &&
              typeof t.clanid == "number" &&
              t.clan_event_gid &&
              typeof t.clan_event_gid == "string"
            );
          }
          SetFilteredView(e, t) {
            const n = this.m_currentView.get();
            n && n.dispose();
            const i = () => this.m_rgSortedCalendarEvents,
              p = this.BIsSingleSourceMuted(),
              h = new oe(
                i,
                this.LoadAdditionalEvents,
                this.BHitEventHorizon,
                e,
                !!t,
                p,
              );
            this.m_currentView.set(h);
          }
          BIsFilteredViewEmpty() {
            var e;
            return !!(
              (e = this.m_currentView.get()) != null && e.BIsViewEmpty()
            );
          }
          GetCalendarItemsInTimeRange(e, t) {
            const n = this.m_currentView.get();
            return n
              ? n.GetCalendarItemsInTimeRange(e, t)
              : (console.error("calendar view not yet initialized"),
                { rgCalendarItems: [], bIsComplete: !1 });
          }
          GetActiveEventsAt(e) {
            const t = this.m_currentView.get();
            return t
              ? t.GetActiveEventsAt(e)
              : (console.error("calendar view not yet initialized"), []);
          }
          GetCurrentlyLoadedEventCount(e, t) {
            var n, i;
            return (i =
              (n = this.m_currentView.get()) == null
                ? void 0
                : n.GetCurrentlyLoadedEventCount(e, t)) != null
              ? i
              : { nCount: 0, bIsComplete: !1 };
          }
          GetCurrentlyLoadedItemsForStats() {
            var e;
            return (
              ((e = this.m_currentView.get()) == null
                ? void 0
                : e.GetCurrentlyLoadedEvents()) || []
            );
          }
          GetCalendarSections(e) {
            return e ? this.m_rgFutureSections : this.m_rgCalendarSections;
          }
          GetStoreInitializationTimestamp() {
            return (
              this.m_dtInitTime ||
                (this.m_dtInitTime = s.HD.GetTimeNowWithOverrideAsDate()),
              this.m_dtInitTime
            );
          }
          InitCalendarSections() {
            const e = this.GetStoreInitializationTimestamp(),
              t = [],
              n = e.getTime() / 1e3;
            t.push(z(n, (0, A.we)("#EventCalendar_FutureEventsHeader"), n));
            const i = new Date(e);
            i.setHours(0, 0, 0, 1);
            let p = i.getTime() / 1e3;
            t.push(z(n, (0, A.we)("#Time_Today"), p, n)),
              i.setDate(i.getDate() - 1);
            let h = p;
            (p = i.getTime() / 1e3),
              t.push(z(n, (0, A.we)("#Time_Yesterday"), p, h));
            const y =
                this.m_rgSortedCalendarEvents[
                  this.m_rgSortedCalendarEvents.length - 1
                ],
              O = y ? y.start_time : n;
            let N = O > p;
            for (let b = 0; b < 5 && !N; b++)
              i.setDate(i.getDate() - 1),
                (h = p),
                (p = i.getTime() / 1e3),
                t.push(z(n, (0, A.cc)(i), p, h)),
                (N = O > p);
            const Q = new Date(i);
            let P = p;
            for (; Q.getMonth() == e.getMonth() && Q.getDate() != 1 && !N; ) {
              Q.setDate(Q.getDate() - 7);
              const b = Q.getTime() / 1e3;
              t.push(z(n, (0, A.lQ)(P - 1), b, P)), (N = O > b), (P = b);
            }
            const X = new Date(e);
            X.setHours(0, 0, 0, 1), X.setDate(1);
            let te = P;
            for (let b = 1; !N; b++) {
              const Y = new Date(X);
              Y.setMonth(e.getMonth() - b, 1);
              const L = Y.getTime() / 1e3;
              t.push(z(n, (0, A.lQ)(L), L, te)), (N = O > L), (te = L);
            }
            this.m_rgCalendarSections.length > t.length
              ? this.m_rgCalendarSections.splice(
                  t.length,
                  this.m_rgCalendarSections.length,
                )
              : t
                  .splice(this.m_rgCalendarSections.length, t.length)
                  .forEach((b) => this.m_rgCalendarSections.push(b));
          }
          InitFutureCalendarSections() {
            const e = this.GetStoreInitializationTimestamp(),
              t = [];
            let n;
            this.m_key.rtCalendarEnd && (n = this.m_key.rtCalendarEnd);
            const i = this.m_rgSortedCalendarEvents[0];
            i && (n = i.start_time), n || (n = e.getTime() / 1e3);
            const p = e.getTime() / 1e3,
              h = new Date(e);
            h.setHours(24, 0, 0, 0);
            let y = h.getTime() / 1e3;
            t.push(
              z(
                p,
                (0, A.we)(
                  this.m_key.bSectionByDay ? "#Time_UpNext" : "#Time_Today",
                ),
                p,
                y,
              ),
            );
            let O = n <= y,
              N = y;
            h.setDate(h.getDate() + 1),
              (y = h.getTime() / 1e3),
              O || t.push(z(p, (0, A.we)("#Time_Tomorrow"), N, y)),
              (O = n <= y);
            const Q = 6 - J()(e).weekday();
            for (let P = 2; P <= Q && !O; P++) {
              N = y;
              const X = (0, A.cc)(h);
              h.setDate(h.getDate() + 1),
                (y = h.getTime() / 1e3),
                t.push(z(p, X, N, y)),
                (O = n <= y);
            }
            if (this.m_key.bSectionByDay)
              for (; !O; ) {
                N = y;
                const P = (0, A.$w)(h);
                h.setDate(h.getDate() + 1),
                  (y = h.getTime() / 1e3),
                  t.push(z(p, P, N, y)),
                  (O = n <= y);
              }
            else {
              const P = new Date(h);
              let X = y;
              const te = J()(e).daysInMonth();
              if (P.getMonth() == e.getMonth() && P.getDate() != te && !O) {
                P.setDate(P.getDate() + 7);
                const L = P.getTime() / 1e3;
                t.push(z(p, (0, A.we)("#EventCalendar_NextWeek"), X, L)),
                  (O = n <= L),
                  (X = L);
              }
              const b = new Date(e);
              b.setMonth(b.getMonth() + 1),
                b.setDate(1),
                b.setHours(0, 0, 0, 0);
              let Y;
              if (P < b && !O) {
                const L = b.getTime() / 1e3;
                t.push(z(p, (0, A.we)("#EventCalendar_LaterThisMonth"), X, L)),
                  (O = n <= L),
                  (Y = L);
              } else Y = X;
              for (let L = 2; !O; L++) {
                const $ = new Date(b);
                $.setMonth(e.getMonth() + L);
                const ie = $.getTime() / 1e3;
                t.push(z(p, (0, A.lQ)(Y), Y, ie)), (O = n <= ie), (Y = ie);
              }
            }
            this.m_rgFutureSections.length > t.length
              ? this.m_rgFutureSections.splice(
                  t.length,
                  this.m_rgFutureSections.length,
                )
              : t
                  .splice(this.m_rgFutureSections.length, t.length)
                  .forEach((P) => this.m_rgFutureSections.push(P));
          }
          async RegisterCalendarEventsAndModels(e) {
            await u.Fm.Get().HintLoad(),
              (0, m.h5)(() => {
                var t, n, i, p, h, y;
                this.RegisterCalendarApps((t = e.apps) != null ? t : []),
                  this.RegisterCalendarClans((n = e.clans) != null ? n : []),
                  this.RegisterCalendarEvents(
                    (i = e.documents) != null ? i : [],
                  ),
                  g.O3.RegisterClanEvents((p = e.events) != null ? p : []),
                  this.RegisterReadEvents((h = e.events_read) != null ? h : []),
                  this.RegisterEventVotes((y = e.event_votes) != null ? y : []),
                  e.forwardComplete && (this.m_bFinishedSearchingForward = !0),
                  e.backwardComplete &&
                    (this.m_bFinishedSearchingBackward = !0),
                  this.InitCalendarSections(),
                  this.InitFutureCalendarSections(),
                  this.SetCollectionMetaData(
                    this.ValidateCollectionMetadata(e.metadatainfo)
                      ? e.metadatainfo
                      : void 0,
                  );
              });
          }
          RegisterCalendarApps(e) {
            if (e)
              for (const t of e) {
                if (this.m_mapCalendarAppsByID.has(t.appid)) continue;
                const n = new U.dF();
                (n.appid = t.appid),
                  (n.source = t.source),
                  (n.playtime = t.playtime),
                  (n.last_played = t.last_played),
                  (n.wishlist_added = t.wishlist_added),
                  this.m_mapCalendarAppsByID.set(t.appid, n),
                  t.hidden &&
                    this.m_visibilityStore.SetAppVisibility(t.appid, !1);
              }
          }
          RegisterCalendarClans(e) {
            if (e) {
              for (const t of e)
                if (!this.m_mapCalendarClansByID.has(t.clanid)) {
                  const n = new U.w2();
                  (n.clanid = t.clanid),
                    (n.source = t.source),
                    this.m_mapCalendarClansByID.set(t.clanid, n),
                    t.hidden &&
                      this.m_visibilityStore.SetClanVisibility(t.clanid, !1);
                }
            }
          }
          RegisterReadEvents(e) {
            e && (0, V.No)(e);
          }
          RegisterEventVotes(e) {
            e &&
              (0, x.mc)(
                e.map((t) => ({
                  gidAnnouncement: t.id,
                  vote: t.vote === void 0 ? null : t.vote ? "up" : "down",
                })),
              );
          }
          RegisterCalendarEvents(e) {
            if (e) {
              let t = !1;
              for (const n of e)
                this.BInternalInsertCalendarEventItem(n) && (t = !0);
              t && this.RebuildSortedCalendarEventList();
            }
          }
          BHitEventHorizon(e) {
            return e == "forward"
              ? this.m_bFinishedSearchingForward
              : this.m_bFinishedSearchingBackward;
          }
          GetTimeEdgeForDirection(e, t = void 0) {
            return e === "forward"
              ? this.m_rgSortedCalendarEvents.length > 0
                ? this.m_rgSortedCalendarEvents[0].start_time
                : t
              : this.m_rgSortedCalendarEvents.length > 0
                ? this.m_rgSortedCalendarEvents[
                    this.m_rgSortedCalendarEvents.length - 1
                  ].start_time
                : t;
          }
          UpdateStuckCounters(e, t) {
            const n =
                e === "forward"
                  ? this.m_bFinishedSearchingForward
                  : this.m_bFinishedSearchingBackward,
              i = this.GetTimeEdgeForDirection(e, void 0);
            return !n && i === t
              ? (e == "forward"
                  ? this.m_nForwardStuckCount++
                  : this.m_nBackwardStuckCount++,
                !0)
              : (e == "forward"
                  ? (this.m_nForwardStuckCount = 0)
                  : (this.m_nBackwardStuckCount = 0),
                !1);
          }
          GetRequestInFlight(e) {
            return e === "forward"
              ? this.m_forwardRequestInFlight
              : this.m_backwardRequestInFlight;
          }
          SetRequestInFlight(e, t) {
            (0, v.wT)(
              !t || !this.GetRequestInFlight(e),
              "Already have a request in flight for",
              e,
            ),
              e === "forward"
                ? (this.m_forwardRequestInFlight = t)
                : (this.m_backwardRequestInFlight = t);
          }
          async LoadAdditionalEvents(e, t) {
            var n, i, p;
            if (this.BHitEventHorizon(e)) return D.R;
            let h = this.GetRequestInFlight(e);
            if (h) return h;
            const y =
                I.TS.STORE_BASE_URL + "events/ajaxgetusereventcalendarrange/",
              O =
                e === "forward"
                  ? this.m_nForwardStuckCount
                  : this.m_nBackwardStuckCount,
              N = O < 3 ? O : 0,
              Q = O >= 3 ? 1 : 0,
              te = 250 + 50 * N,
              b = 15,
              Y = s.HD.GetTimeNowWithOverride(),
              L = (n = this.GetTimeEdgeForDirection(e, Y)) != null ? n : Y,
              $ = {
                minTime: 0,
                maxTime: 0,
                ascending: !0,
                maxResults: te,
                populateEvents: b,
                appTypes: this.m_visibilityStore.GetGameSources().join(","),
                eventTypes: Array.from(
                  this.m_visibilityStore.enabledEventTypeSet,
                ).join(","),
                appIdFilter:
                  (i = this.m_key.appids) != null && i.length
                    ? this.m_key.appids.sort().join(",")
                    : void 0,
                clanIdFilter:
                  (p = this.m_key.clanaccountids) != null && p.length
                    ? this.m_key.clanaccountids.sort().join(",")
                    : void 0,
                collectionID: this.m_key.collectionid,
                saleID: this.m_key.saleid,
                hubtype: this.m_key.hubtype,
                category_or_language: this.m_key.category_or_language,
                tag_name: this.m_key.tag_name,
                tags: this.m_key.rgTags
                  ? this.m_key.rgTags.slice().sort().join(",")
                  : void 0,
              };
            return (
              e === "forward"
                ? (($.minTime = Math.floor(L + Q)), ($.ascending = !0))
                : (($.maxTime = Math.floor(L - Q)), ($.ascending = !1)),
              (h = f()
                .get(y, {
                  params: $,
                  cancelToken: t ? t.token : void 0,
                  withCredentials: !0,
                })
                .then(async (se) => {
                  if (
                    (this.SetRequestInFlight(e, null), se.data.success == D.R)
                  ) {
                    if (
                      (await this.RegisterCalendarEventsAndModels(se.data),
                      this.UpdateStuckCounters(e, L))
                    )
                      return this.LoadAdditionalEvents(e, t);
                  } else
                    console.error(
                      "LoadAdditionalEvents was not successful: Msg" +
                        se.data.msg,
                    );
                  return se.data.success;
                })
                .catch((se) => {
                  this.SetRequestInFlight(e, null);
                  let de = (0, a.H)(se);
                  return (
                    console.error(
                      "LoadAdditionalEvents hit error " + de.strErrorMsg,
                      de,
                    ),
                    e == "forward"
                      ? (this.m_bFinishedSearchingForward = !0)
                      : (this.m_bFinishedSearchingBackward = !0),
                    D.zi
                  );
                })),
              this.SetRequestInFlight(e, h),
              h
            );
          }
          BInternalInsertCalendarEventItem(e) {
            if (!e.unique_id)
              return (
                (0, v.wT)(
                  !1,
                  "Attmpted to register a calendar event item with an invalid unique id!",
                ),
                !1
              );
            if (this.m_mapCalendarEventsByGid.has(e.unique_id)) return !1;
            const t = this.m_mapCalendarAppsByID.get(e.appid),
              n = this.m_mapCalendarClansByID.get(e.clanid);
            if (!t && !n)
              return console.log("No AppInfo or ClanInfo For: ", e), !1;
            const i = new U.NK();
            return (
              (i.clanid = e.clanid),
              (i.unique_id = e.unique_id),
              (i.event_type = e.event_type),
              (i.appid = e.appid),
              (i.start_time = e.start_time),
              (i.score = e.score),
              (i.appInfo = t),
              (i.clanInfo = n),
              this.m_rgSortedCalendarEvents.push(i),
              this.m_mapCalendarEventsByGid.set(i.unique_id, i),
              !0
            );
          }
          GetCalendarAppInfoForAppID(e) {
            return this.m_mapCalendarAppsByID.get(e);
          }
          RebuildSortedCalendarEventList() {
            const e = this.m_rgSortedCalendarEvents.slice();
            this.m_rgSortedCalendarEvents = e.sort(
              (t, n) => n.start_time - t.start_time,
            );
          }
          async UpdateEventBlockFromCalendarEvent(e, t) {
            const n = e.appid || void 0,
              i = e.clanInfo ? e.clanInfo.clanid : void 0;
            if (n == null && i == null) {
              (0, v.wT)(
                !1,
                "Both clan id and account id are missing, cannot change communication status",
              );
              return;
            }
            await d.S.Get().UpdateCommunicationSetting(t, n, i),
              (0, H.EG)(H.Eg.k_eMuted);
          }
          GetAllClans() {
            return Array.from(this.m_mapCalendarClansByID.keys());
          }
          GetAllApps() {
            return Array.from(this.m_mapCalendarAppsByID.keys());
          }
        }
        T([m.sH], F.prototype, "m_mapCalendarAppsByID", 2),
          T([m.sH], F.prototype, "m_mapCalendarClansByID", 2),
          T([m.sH], F.prototype, "m_mapCalendarEventsByGid", 2),
          T([m.sH], F.prototype, "m_rgSortedCalendarEvents", 2),
          T([m.sH], F.prototype, "m_bFinishedSearchingForward", 2),
          T([m.sH], F.prototype, "m_bFinishedSearchingBackward", 2),
          T([m.sH], F.prototype, "m_rgCalendarSections", 2),
          T([m.sH], F.prototype, "m_rgFutureSections", 2),
          T([m.sH], F.prototype, "m_collectionMetaData", 2),
          T([m.XI], F.prototype, "InitCalendarSections", 1),
          T([m.XI], F.prototype, "InitFutureCalendarSections", 1),
          T([m.XI], F.prototype, "RegisterCalendarEventsAndModels", 1),
          T([m.XI], F.prototype, "RegisterCalendarApps", 1),
          T([m.XI], F.prototype, "RegisterCalendarClans", 1),
          T([m.XI], F.prototype, "RegisterCalendarEvents", 1),
          T([l.o], F.prototype, "BHitEventHorizon", 1),
          T([m.XI.bound], F.prototype, "LoadAdditionalEvents", 1),
          T([m.XI], F.prototype, "UpdateEventBlockFromCalendarEvent", 1);
        class oe {
          constructor(e, t, n, i, p, h) {
            B(this, "m_rgLoadedEventsBox", m.sH.box([])),
              B(this, "m_lastLoadLatch", null),
              B(this, "m_fnGetUnfilteredEvents"),
              B(this, "m_fnLoadAdditionalEvents"),
              B(this, "m_fnBHitEventHorizon"),
              B(this, "m_fnBIsEventInView"),
              B(this, "m_bSkipStorePreferenceCheck"),
              B(this, "m_bAllowMutedAndIgnoredSources"),
              B(this, "m_rgAutorunDisposer"),
              (0, m.Gn)(this),
              (this.m_fnGetUnfilteredEvents = e),
              (this.m_fnLoadAdditionalEvents = t),
              (this.m_fnBHitEventHorizon = n),
              (this.m_fnBIsEventInView = i),
              (this.m_bSkipStorePreferenceCheck = p),
              (this.m_bAllowMutedAndIgnoredSources = h),
              (this.m_rgAutorunDisposer = (0, m.fm)(async () => {
                const y = this.viewFilteredEvents.slice();
                if (!this.m_bSkipStorePreferenceCheck) {
                  const O = Array.from(
                    new Set(y.map((N) => N.appid).filter(Boolean)),
                  ).sort();
                  if (
                    ((this.m_lastLoadLatch = y),
                    await c.A.Get().QueueMultipleAppRequests(O, {
                      ...w.jy,
                      include_assets: !0,
                    }),
                    this.m_lastLoadLatch != y)
                  )
                    return;
                  this.m_lastLoadLatch = null;
                }
                this.m_rgLoadedEventsBox.set(y);
              }));
          }
          dispose() {
            this.m_rgAutorunDisposer();
          }
          get viewFilteredEvents() {
            return this.m_fnGetUnfilteredEvents().filter((e) =>
              this.m_fnBIsEventInView(e),
            );
          }
          get filteredAndCheckedEvents() {
            return this.m_rgLoadedEventsBox.get().filter((t) => {
              if (t.appid) {
                if (
                  (!this.m_bAllowMutedAndIgnoredSources &&
                    (d.S.Get().BIsMutedAppID(t.appid) ||
                      u.Fm.Get().BIsGameIgnored(t.appid))) ||
                  (!this.m_bSkipStorePreferenceCheck &&
                    (0, w.Li)(c.A.Get().GetApp(t.appid)))
                )
                  return !1;
              } else if (
                !this.m_bAllowMutedAndIgnoredSources &&
                (d.S.Get().BIsMutedClanID(t.clanid) ||
                  u.Fm.Get().BIsIgnoringCurator(_.b.InitFromClanID(t.clanid)))
              )
                return !1;
              return !0;
            });
          }
          BIsCompleteThroughTime(e, t) {
            if (this.m_fnBHitEventHorizon(e)) return !0;
            const n = this.m_fnGetUnfilteredEvents();
            return e === "forward"
              ? !!t && n.length > 0 && n[0].start_time > t
              : t !== void 0 && n.length > 0 && n[n.length - 1].start_time < t;
          }
          async EnsureRangeIsLoaded(e, t) {
            for (
              let i = 0;
              i < 100 && !this.BIsCompleteThroughTime("forward", t);
              i++
            )
              await this.m_fnLoadAdditionalEvents("forward");
            for (
              let i = 0;
              i < 100 && !this.BIsCompleteThroughTime("backward", e);
              i++
            )
              await this.m_fnLoadAdditionalEvents("backward");
          }
          GetCalendarItemsInTimeRange(e, t) {
            this.EnsureRangeIsLoaded(e, t);
            const n = this.filteredAndCheckedEvents.filter(
                (h) => h.start_time >= e && (!t || h.start_time < t),
              ),
              i = this.BIsCompleteThroughTime("forward", t),
              p = this.BIsCompleteThroughTime("backward", e);
            return { rgCalendarItems: n, bIsComplete: i && p };
          }
          GetCurrentlyLoadedEvents() {
            return this.filteredAndCheckedEvents;
          }
          GetCurrentlyLoadedEventCount(e, t) {
            let n = 0;
            this.filteredAndCheckedEvents.forEach((h) => {
              h.start_time >= e && (!t || h.start_time < t) && n++;
            });
            const i = this.BIsCompleteThroughTime("forward", t),
              p = this.BIsCompleteThroughTime("backward", e);
            return { nCount: n, bIsComplete: i && p };
          }
          BIsViewEmpty() {
            return this.filteredAndCheckedEvents.length > 0;
          }
          GetActiveEventsAt(e) {
            return this.filteredAndCheckedEvents
              .map((t) => g.O3.GetClanEventModel(t.unique_id))
              .filter((t) => {
                if (!t || t.startTime === void 0) return !1;
                const n = t.endTime || t.startTime + 3600;
                return e >= t.startTime && e < n;
              });
          }
        }
        T([m.EW.struct], oe.prototype, "viewFilteredEvents", 1),
          T([m.EW.struct], oe.prototype, "filteredAndCheckedEvents", 1);
        const re = m.sH.box(null),
          ae = new Map();
        window.g_EventCalendarMap = ae;
        function le(o, e) {
          let t = "";
          return (
            o.appids &&
              o.appids.length > 0 &&
              (t += "appids:" + o.appids.sort().join(",")),
            o.clanaccountids &&
              o.clanaccountids.length > 0 &&
              (t += "clanids:" + o.clanaccountids.sort().join(",")),
            o.collectionid && (t += "collection:" + o.collectionid),
            o.saleid && (t += "sale:" + o.saleid),
            o.bSectionByDay && (t += "_sectionbyday"),
            o.rtCalendarEnd && (t += "_end:" + o.rtCalendarEnd),
            o.rgTags &&
              o.rgTags.length > 0 &&
              (t += "_tags:" + o.rgTags.slice().sort().join(",")),
            o.hubtype &&
              (t +=
                "_hubtype:" +
                o.hubtype +
                "_" +
                o.category_or_language +
                "_" +
                o.tag_name),
            re.get() !== t && (re.set(t), ae.has(t) || ae.set(t, new F(o, e))),
            t
          );
        }
        function me() {
          let o = re.get();
          return o == null && (o = le({})), ae.get(o);
        }
        function ue() {
          return re.get() !== null;
        }
      },
      81673: (Z, W, r) => {
        "use strict";
        r.d(W, { FD: () => v, vJ: () => R });
        var E = r(14947),
          f = r(99412),
          m = r(49789),
          j = r(71742),
          J = r(3166),
          D = r(90533),
          U = r(40497),
          V = r(7582),
          x = r(35675),
          H = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          g = (C, s, d) =>
            s in C
              ? H(C, s, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: d,
                })
              : (C[s] = d),
          c = (C, s, d, k) => {
            for (
              var M = k > 1 ? void 0 : k ? _(s, d) : s, q = C.length - 1, T;
              q >= 0;
              q--
            )
              (T = C[q]) && (M = (k ? T(s, d, M) : T(M)) || M);
            return k && M && H(s, d, M), M;
          },
          w = (C, s, d) => g(C, typeof s != "symbol" ? s + "" : s, d),
          v = ((C) => (
            (C.k_ERecent = "recent"),
            (C.k_ELibrary = "library"),
            (C.k_EWishlist = "wishlist"),
            (C.k_EFollowing = "following"),
            (C.k_ERecommended = "recommended"),
            (C.k_ESteam = "steam"),
            (C.k_EFeatured = "featured"),
            (C.k_ECurator = "curator"),
            C
          ))(v || {});
        const a = [
            "library",
            "wishlist",
            "following",
            "recommended",
            "steam",
            "curator",
          ],
          l = [...a, "featured"],
          A = ["featured"];
        var I = ((C) => (
          (C.k_ENews = "news"),
          (C.k_EEvents = "events"),
          (C.k_EStreaming = "streaming"),
          (C.k_EUpdates = "updates"),
          (C.k_EReleases = "releases"),
          (C.k_ESales = "sales"),
          C
        ))(I || {});
        const u = [
            "news",
            "events",
            "streaming",
            "updates",
            "releases",
            "sales",
          ],
          S = new Map([
            ["news", [f.uYK]],
            ["events", [f.L0X, f.I5b, f.zA, f.y6, f.hGl, f.WNR, f.pIh, f.izQ]],
            ["streaming", [f.KDJ]],
            ["updates", [f.Fwr, f.u0, f.zeJ]],
            ["releases", [f.yhO, f.Aqr, f.DEQ, f.f4X, f.zcX]],
            ["sales", [f.HRy, f.C$4, f.LOv, f.HFK]],
          ]),
          K = 1599202800;
        function G(C) {
          return new Map(C.map((s) => [s, !0]));
        }
        class R {
          constructor(s) {
            w(this, "m_mapEventTypeGroupsAllowed", new Map()),
              w(this, "m_mapGameSources", new Map()),
              w(this, "m_bCuratorUnhideOnFollowDialogDismissed", !1),
              w(this, "m_mapHiddenApps", new Map()),
              w(this, "m_mapHiddenClans", new Map()),
              w(this, "m_bInitializedForUpdatesOnly", !1),
              w(this, "m_eStorageType", "session"),
              w(this, "m_strStorageKey"),
              (0, E.Gn)(this),
              (0, E.h5)(() => {
                s != null &&
                  s.rgHiddenApps &&
                  s.rgHiddenApps.forEach((d) =>
                    this.m_mapHiddenApps.set(d, !0),
                  ),
                  s != null &&
                    s.rgHiddenClans &&
                    s.rgHiddenClans.forEach((d) =>
                      this.m_mapHiddenClans.set(d, !0),
                    );
              });
          }
          GetGameSources() {
            return Array.from(this.m_mapGameSources.keys());
          }
          GetStorageObject() {
            return this.m_strStorageKey
              ? this.m_eStorageType === "session"
                ? window.sessionStorage
                : window.localStorage
              : null;
          }
          GetPreferencesStorageKey() {
            return `${this.m_strStorageKey}-event-calendar-prefs`;
          }
          get enabledEventTypeSet() {
            var s;
            const d = new Set();
            for (const k of Array.from(this.m_mapEventTypeGroupsAllowed.keys()))
              (s = S.get(k)) == null || s.forEach((M) => d.add(M));
            return d;
          }
          MapClanEventTypeToGroup(s) {
            let d;
            return (
              S.forEach((k, M) => {
                k.indexOf(s) !== -1 && (d = M);
              }),
              d || "events"
            );
          }
          InitDefaultCheckboxes(s, d, k) {
            (this.m_bInitializedForUpdatesOnly = d),
              (this.m_mapEventTypeGroupsAllowed = G(d ? ["updates"] : u));
            const M = (0, J.Y2)() ? l : a;
            (this.m_mapGameSources = G(s ? M : A)),
              k && this.m_mapGameSources.set("featured", !0);
          }
          Init(s, d, k, M, q) {
            (this.m_eStorageType = q), (this.m_strStorageKey = M);
            const T = this.GetStorageObject(),
              B = T ? T.getItem(this.GetPreferencesStorageKey()) : null;
            if (B) {
              const ee = JSON.parse(B);
              if (ee.rgEventTypeGroupsAllowed && ee.rgGameSources) {
                const { rgEventTypeGroupsAllowed: z, rgGameSources: F } = ee;
                (this.m_mapEventTypeGroupsAllowed = G(z)),
                  (this.m_mapGameSources = G(F)),
                  ee.bCuratorUnhideOnFollowDismissed !== void 0 &&
                    (this.m_bCuratorUnhideOnFollowDialogDismissed =
                      ee.bCuratorUnhideOnFollowDismissed);
                return;
              }
            }
            this.InitDefaultCheckboxes(s, d, k);
          }
          SaveFilterPreferences() {
            const s = this.GetStorageObject();
            if (!s) return;
            const d = {
              rgEventTypeGroupsAllowed: Array.from(
                this.m_mapEventTypeGroupsAllowed.keys(),
              ),
              rgGameSources: Array.from(this.m_mapGameSources.keys()),
              bCuratorUnhideOnFollowDismissed:
                this.m_bCuratorUnhideOnFollowDialogDismissed,
            };
            s.setItem(this.GetPreferencesStorageKey(), JSON.stringify(d));
          }
          RecordFilterChange() {
            let s = 0;
            this.BIsGameSourceAllowed("library") && (s |= 1),
              this.BIsGameSourceAllowed("wishlist") && (s |= 2),
              this.BIsGameSourceAllowed("following") && (s |= 4),
              this.BIsGameSourceAllowed("recommended") && (s |= 8),
              this.BIsGameSourceAllowed("steam") && (s |= 16),
              this.BIsGameSourceAllowed("featured") && (s |= 32),
              this.BIsGameSourceAllowed("recent") && (s |= 64),
              this.BIsEventTypeGroupAllowed("news") && (s |= 1024),
              this.BIsEventTypeGroupAllowed("events") && (s |= 2048),
              this.BIsEventTypeGroupAllowed("streaming") && (s |= 4096),
              this.BIsEventTypeGroupAllowed("updates") && (s |= 8192),
              this.BIsEventTypeGroupAllowed("releases") && (s |= 16384),
              this.BIsEventTypeGroupAllowed("sales") && (s |= 32768),
              (0, D.m4)(U.L, s);
          }
          BCuratorUnhideOnFollowDialogDismissed() {
            return this.m_bCuratorUnhideOnFollowDialogDismissed;
          }
          SetCuratorUnhideOnFollowDialogDismissed(s) {
            (this.m_bCuratorUnhideOnFollowDialogDismissed = s),
              this.SaveFilterPreferences();
          }
          BIsEventTypeGroupAllowed(s) {
            return this.m_mapEventTypeGroupsAllowed.has(s);
          }
          BIsGameSourceAllowed(s) {
            return (s === "following" && !(0, x.xU)()) ||
              (s === "curator" && !(0, x.Us)())
              ? !1
              : this.m_mapGameSources.has(s);
          }
          SetEventTypeGroupAllowed(s, d) {
            d
              ? this.m_mapEventTypeGroupsAllowed.set(s, !0)
              : this.m_mapEventTypeGroupsAllowed.delete(s),
              this.SaveFilterPreferences(),
              this.RecordFilterChange();
          }
          SetGameSourceAllowed(s, d) {
            d
              ? (this.m_mapGameSources.set(s, !0),
                s == "recent"
                  ? this.m_mapGameSources.delete("library")
                  : s == "library" &&
                    ((0, j.wT)(
                      !this.m_mapGameSources.has("recent"),
                      "Setting Library although Recent already set - illusion was broken",
                    ),
                    this.m_mapGameSources.delete("recent")))
              : (this.m_mapGameSources.delete(s),
                s == "recent"
                  ? this.m_mapGameSources.set("library", !0)
                  : s == "library" && this.m_mapGameSources.delete("recent")),
              this.SaveFilterPreferences(),
              this.RecordFilterChange();
          }
          BShouldDisplayEvent(s) {
            const d = s.GetSource(),
              k = 4320 * 3600,
              M = !!(
                s.appInfo &&
                s.appInfo.last_played &&
                s.appInfo.last_played + k >= V.HD.GetTimeNowWithOverride()
              );
            return (!this.enabledEventTypeSet.has(s.event_type) &&
              !(
                this.m_bInitializedForUpdatesOnly &&
                this.BIsEventTypeGroupAllowed("updates") &&
                s.event_type == f.uYK &&
                s.start_time < K
              )) ||
              this.m_mapHiddenApps.has(s.appid) ||
              this.m_mapHiddenClans.has(s.clanid)
              ? !1
              : d & m.bK.k_eRequired || d & m.bK.k_eReposted
                ? !0
                : !!(
                    (this.BIsGameSourceAllowed("recent") && M) ||
                    (this.BIsGameSourceAllowed("library") &&
                      d & m.bK.k_eLibrary) ||
                    (this.BIsGameSourceAllowed("wishlist") &&
                      d & m.bK.k_eWishlist) ||
                    (this.BIsGameSourceAllowed("following") &&
                      d & m.bK.k_eFollowing) ||
                    (this.BIsGameSourceAllowed("recommended") &&
                      d & m.bK.k_eRecommended) ||
                    (this.BIsGameSourceAllowed("steam") && d & m.bK.k_eSteam) ||
                    (this.BIsGameSourceAllowed("featured") &&
                      d & m.bK.k_eFeatured) ||
                    (this.BIsGameSourceAllowed("curator") &&
                      d & m.bK.k_eCurator)
                  );
          }
          BAreAllEventsHidden() {
            return (
              this.m_mapEventTypeGroupsAllowed.size == 0 ||
              this.m_mapGameSources.size == 0
            );
          }
          BAreAnyEventsFiltered(s) {
            const d = (0, J.Y2)() ? l : a;
            return (
              (s ? d : A).some((M) => !this.BIsGameSourceAllowed(M)) ||
              u.some((M) => !this.BIsEventTypeGroupAllowed(M))
            );
          }
          BIsClanVisible(s) {
            return !this.m_mapHiddenClans.has(s);
          }
          SetClanVisibility(s, d) {
            d
              ? this.m_mapHiddenClans.has(s) && this.m_mapHiddenClans.delete(s)
              : this.m_mapHiddenClans.has(s) ||
                this.m_mapHiddenClans.set(s, !0);
          }
          BIsAppVisible(s) {
            return !this.m_mapHiddenApps.has(s);
          }
          SetAppVisibility(s, d) {
            d
              ? this.m_mapHiddenApps.has(s) && this.m_mapHiddenApps.delete(s)
              : this.m_mapHiddenApps.has(s) || this.m_mapHiddenApps.set(s, !0);
          }
        }
        c([E.sH], R.prototype, "m_mapEventTypeGroupsAllowed", 2),
          c([E.sH], R.prototype, "m_mapGameSources", 2),
          c([E.sH], R.prototype, "m_bCuratorUnhideOnFollowDialogDismissed", 2),
          c([E.sH], R.prototype, "m_mapHiddenApps", 2),
          c([E.sH], R.prototype, "m_mapHiddenClans", 2),
          c(
            [(0, E.EW)({ keepAlive: !0, equals: E.m3.structural })],
            R.prototype,
            "enabledEventTypeSet",
            1,
          ),
          c([E.XI], R.prototype, "SetEventTypeGroupAllowed", 1),
          c([E.XI], R.prototype, "SetGameSourceAllowed", 1);
      },
      74618: (Z, W, r) => {
        "use strict";
        r.d(W, { S: () => w });
        var E = r(41735),
          f = r.n(E),
          m = r(14947),
          j = r(72604),
          J = r(71742),
          D = r(34592),
          U = r(3166),
          V = Object.defineProperty,
          x = Object.getOwnPropertyDescriptor,
          H = (v, a, l) =>
            a in v
              ? V(v, a, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: l,
                })
              : (v[a] = l),
          _ = (v, a, l, A) => {
            for (
              var I = A > 1 ? void 0 : A ? x(a, l) : a, u = v.length - 1, S;
              u >= 0;
              u--
            )
              (S = v[u]) && (I = (A ? S(a, l, I) : S(I)) || I);
            return A && I && V(a, l, I), I;
          },
          g = (v, a, l) => H(v, typeof a != "symbol" ? a + "" : a, l);
        const c = class ne {
          constructor() {
            g(this, "m_mapBlockedAppIds", new Map()),
              g(this, "m_mapBlockedClanIds", new Map()),
              (0, m.Gn)(this);
          }
          static Get() {
            return (
              ne.s_globalSingletonStore ||
                ((ne.s_globalSingletonStore = new ne()),
                ne.s_globalSingletonStore.Init()),
              ne.s_globalSingletonStore
            );
          }
          GetMutedSourceCount() {
            return this.m_mapBlockedAppIds.size + this.m_mapBlockedClanIds.size;
          }
          Init() {
            const a = (0, U.Tc)("mutedcomminfo", "application_config");
            this.ValidateStoreDefault(a) &&
              (a.appids &&
                a.appids.forEach((l) => this.m_mapBlockedAppIds.set(l, !0)),
              a.clanids &&
                a.clanids.forEach((l) => this.m_mapBlockedClanIds.set(l, !0)));
          }
          ValidateStoreDefault(a) {
            const l = a;
            return l && typeof l == "object"
              ? (Array.isArray(l.appids) && l.appids.length > 0) ||
                  (Array.isArray(l.clanids) && l.clanids.length > 0)
              : !1;
          }
          BIsEventBlocked(a) {
            return a.appid
              ? this.m_mapBlockedAppIds.has(a.appid)
              : a.clanInfo
                ? this.m_mapBlockedClanIds.has(a.clanInfo.clanid)
                : !1;
          }
          BIsMutedAppID(a) {
            return this.m_mapBlockedAppIds.has(a);
          }
          BIsMutedClanID(a) {
            return this.m_mapBlockedClanIds.has(a);
          }
          async UpdateCommunicationSetting(a, l, A) {
            const I = U.TS.STORE_BASE_URL + "account/optoutappcommunication/",
              u = new FormData();
            if (
              (u.append("sessionid", (0, U.KC)()),
              u.append("allowCommunication", a ? "1" : "0"),
              l)
            ) {
              if (
                (!a && this.m_mapBlockedAppIds.has(l)) ||
                (a && !this.m_mapBlockedAppIds.has(l))
              )
                return !0;
              a
                ? this.m_mapBlockedAppIds.delete(l)
                : this.m_mapBlockedAppIds.set(l, !0),
                u.append("appId", l.toString());
            } else if (A) {
              if (
                (!a && this.m_mapBlockedClanIds.has(A)) ||
                (a && !this.m_mapBlockedClanIds.has(A))
              )
                return !0;
              a
                ? this.m_mapBlockedClanIds.delete(A)
                : this.m_mapBlockedClanIds.set(A, !0),
                u.append("clanId", A.toString());
            } else
              return (
                (0, J.wT)(
                  !1,
                  "BlockEventsFromCalenderEvent: Invalid AppID and ClanID",
                ),
                !1
              );
            try {
              return (await f().post(I, u)).data.success == j.R;
            } catch (S) {
              return (
                console.error(
                  "Blocking app id hit error " + (0, D.H)(S).strErrorMsg,
                ),
                !1
              );
            }
          }
        };
        g(c, "s_globalSingletonStore"),
          _([m.sH], c.prototype, "m_mapBlockedAppIds", 2),
          _([m.sH], c.prototype, "m_mapBlockedClanIds", 2);
        let w = c;
      },
      91424: (Z, W, r) => {
        "use strict";
        r.d(W, { Y: () => A });
        var E = r(7850),
          f = r(75844),
          m = r(90626),
          j = r(53025),
          J = r(77495),
          D = r(58483),
          U = r(73085),
          V = r(88003),
          x = r(54963),
          H = r(19332),
          _ = r.n(H),
          g = Object.defineProperty,
          c = Object.getOwnPropertyDescriptor,
          w = (u, S, K) =>
            S in u
              ? g(u, S, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: K,
                })
              : (u[S] = K),
          v = (u, S, K, G) => {
            for (
              var R = G > 1 ? void 0 : G ? c(S, K) : S, C = u.length - 1, s;
              C >= 0;
              C--
            )
              (s = u[C]) && (R = (G ? s(S, K, R) : s(R)) || R);
            return G && R && g(S, K, R), R;
          },
          a = (u, S, K) => w(u, typeof S != "symbol" ? S + "" : S, K);
        function l(u) {
          const { event: S, closeModal: K } = u,
            G = (0, D.LJ)();
          return (0, E.jsx)(U.AD, {
            initialEvent: S,
            bShowOnlyInitialEvent: !0,
            partnerEventStore: J.O3,
            emoticonStore: G,
            showAppHeader: !0,
            closeModal: K,
          });
        }
        function A(u, S) {
          (0, V.pg)((0, E.jsx)(l, { event: u }), S);
        }
        let I = class extends m.Component {
          constructor() {
            super(...arguments), a(this, "m_refFocus", m.createRef());
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
          escFunction(u) {
            const { fnClose: S } = this.props;
            u.keyCode === 27 && S && S();
          }
          OnBackgroundClick(u) {
            u.currentTarget == u.target && this.props.fnClose();
          }
          render() {
            const { event: u, langOverride: S, isPreview: K } = this.props;
            return (0, E.jsx)("div", {
              ref: this.m_refFocus,
              className: H.Main,
              onClick: this.OnBackgroundClick,
              children: (0, E.jsx)(D.sU, {
                children: (G) =>
                  (0, E.jsx)(
                    U.He,
                    {
                      event: u,
                      emoticonStore: G,
                      partnerEventStore: j.$.Get(),
                      langOverride: S,
                      isPreview: K,
                      bDisableBroadcastPlayer: !1,
                    },
                    u.GID,
                  ),
              }),
            });
          }
        };
        v([x.oI], I.prototype, "escFunction", 1),
          v([x.oI], I.prototype, "OnBackgroundClick", 1),
          (I = v([f.PA], I));
      },
      20035: (Z, W, r) => {
        "use strict";
        r.d(W, { C: () => w });
        var E = r(7850),
          f = r(8323),
          m = r(90537),
          j = r(90533),
          J = r(98112),
          D = r(98241),
          U = r(37589),
          V = Object.defineProperty,
          x = (v, a, l) =>
            a in v
              ? V(v, a, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: l,
                })
              : (v[a] = l),
          H = (v, a, l) => x(v, typeof a != "symbol" ? a + "" : a, l);
        class _ {
          constructor() {
            H(this, "m_bHasBeenTracked", !1), H(this, "m_fnSubmit", null);
          }
        }
        class g {
          constructor() {
            H(this, "m_nImpressionDelayMS", 500),
              H(this, "m_mapEvents", new Map());
          }
          ShouldTrack(a) {
            if (a.bOldAnnouncement) return !1;
            const l = this.m_mapEvents.get(a.GID);
            return !l || !l.m_bHasBeenTracked;
          }
          StartTracking(a, l, A) {
            if (a.bOldAnnouncement) return;
            let I = this.m_mapEvents.get(a.GID);
            I || ((I = new _()), this.m_mapEvents.set(a.GID, I)),
              !I.m_bHasBeenTracked &&
                (I.m_fnSubmit ||
                  ((I.m_fnSubmit = new f.LU()),
                  I.m_fnSubmit.Schedule(
                    this.m_nImpressionDelayMS,
                    this.ReportImpression.bind(this, a, l, A),
                  )));
          }
          StopTracking(a) {
            const l = this.m_mapEvents.get(a.GID);
            l && l.m_fnSubmit && (l.m_fnSubmit.Cancel(), (l.m_fnSubmit = null));
          }
          ReportImpression(a, l, A) {
            if ((A.RecordEventShown(a, J.Tc.qC), l)) {
              const u = (0, D.v0)();
              l.RecordEventViewed(
                a.GID,
                u.GetCurrentlyLoadedItemsForStats(),
                u.GetStoreInitializationTimestamp().getTime() / 1e3,
              );
            }
            const I = this.m_mapEvents.get(a.GID);
            I &&
              ((I.m_bHasBeenTracked = !0),
              I.m_fnSubmit.Cancel(),
              (I.m_fnSubmit = null));
          }
        }
        const c = new g(),
          w = (v) => {
            const { event: a } = v,
              l = (0, m.Y)(),
              A = (0, j.fm)();
            if (c.ShouldTrack(a)) {
              const I = () =>
                  c.StartTracking(a, v.recordNewsHubStats ? A : void 0, l),
                u = () => c.StopTracking(a);
              return (0, E.jsx)(U.Y, { onEnter: I, onLeave: u });
            } else return null;
          };
      },
      19332: (Z) => {
        Z.exports = { Main: "_1Zn_5pvuMbqr57ws1eJKe" };
      },
      10886: (Z, W, r) => {
        "use strict";
        r.d(W, { A: () => E });
        const E =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
      },
      3209: (Z, W, r) => {
        "use strict";
        r.d(W, { A: () => E });
        const E =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
      },
    },
  ]);
})();
