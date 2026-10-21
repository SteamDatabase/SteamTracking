/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [52959],
    {
      49789: (j, b, r) => {
        "use strict";
        r.d(b, { NK: () => R, bK: () => J, dF: () => N, w2: () => L });
        var g = r(10142),
          h = r(813),
          l = r(18210),
          J = ((A) => (
            (A[(A.k_eLibrary = 1)] = "k_eLibrary"),
            (A[(A.k_eWishlist = 2)] = "k_eWishlist"),
            (A[(A.k_eFollowing = 4)] = "k_eFollowing"),
            (A[(A.k_eRecommended = 8)] = "k_eRecommended"),
            (A[(A.k_eSteam = 16)] = "k_eSteam"),
            (A[(A.k_eRequired = 32)] = "k_eRequired"),
            (A[(A.k_eFeatured = 64)] = "k_eFeatured"),
            (A[(A.k_eCurator = 128)] = "k_eCurator"),
            (A[(A.k_eReposted = 256)] = "k_eReposted"),
            A
          ))(J || {});
        class R {
          clanid;
          unique_id;
          event_type;
          appid;
          start_time;
          appInfo;
          clanInfo;
          score;
          GetSource() {
            return this.appInfo
              ? this.appInfo.source
              : (this.clanInfo?.source ?? 0);
          }
          static GetEntityNameForID(w, G) {
            if (w)
              return (
                g.A.Get().GetApp(w)?.GetName() ??
                (0, l.we)("#EventCalendar_MuteApp_Unknown")
              );
            if (G) {
              const z = h.ac.GetClanInfoByClanAccountID(G);
              if (z?.group_name) return z.group_name;
            }
            return (0, l.we)("#EventCalendar_MuteApp_Unknown");
          }
          static BHasEntityNameForID(w, G) {
            return w
              ? !!g.A.Get().GetApp(w)?.GetName()
              : G
                ? !!h.ac.GetClanInfoByClanAccountID(G)?.group_name
                : !1;
          }
          GetEntityName() {
            return R.GetEntityNameForID(this.appid, this.clanid);
          }
          GetGameCapsule() {
            if (this.appInfo)
              return g.A.Get()
                .GetApp(this.appInfo.appid)
                ?.GetAssets()
                ?.GetMainCapsuleURL();
            if (this.clanInfo) {
              let w = h.ac.GetClanInfoByClanAccountID(this.clanInfo.clanid);
              if (w) return w.avatar_full_url;
            }
            return (0, l.we)("#EventCalendar_MuteApp_Unknown");
          }
          GetGameIcon() {
            if (this.appInfo)
              return g.A.Get()
                .GetApp(this.appInfo.appid)
                ?.GetAssets()
                ?.GetCommunityIconURL();
            if (this.clanInfo) {
              let w = h.ac.GetClanInfoByClanAccountID(this.clanInfo.clanid);
              if (w) return w.avatar_full_url;
            }
            return (0, l.we)("#EventCalendar_MuteApp_Unknown");
          }
        }
        class N {
          appid;
          source;
          playtime;
          last_played;
          wishlist_added;
        }
        class L {
          clanid;
          source;
        }
      },
      98241: (j, b, r) => {
        "use strict";
        r.d(b, { dP: () => oe, v0: () => ie, Zr: () => ae });
        var g = r(41735),
          h = r.n(g),
          l = r(14947),
          J = r(19367),
          R = r.n(J),
          N = r(72604),
          L = r(49789),
          A = r(53876),
          w = r(42277),
          G = r(90533),
          z = r(76559),
          M = r(77495),
          C = r(10142),
          i = r(15901),
          p = r(71742),
          f = r(34592),
          y = r(27066),
          m = r(18210),
          I = r(3166),
          W = r(19619),
          U = r(81673),
          O = ((o) => (
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
          ))(O || {});
        const c = new Map();
        function s(o) {
          return c.size == 0 && d(), c.get(o);
        }
        function d() {
          const o = GetNewsHubBasePath();
          c.set("default", {
            id: "default",
            strUrl: `${o}/`,
            strName: Localize("#EventCalendar_NewsChannel_YourNews"),
            strSubtitle: Localize("#EventCalendar_NewsChannel_Personalized"),
            strHeaderTitle: Localize(
              "#EventCalendar_NewsChannel_YourNews_HeaderTitle",
            ),
          }),
            c.set("upcoming", {
              id: "upcoming",
              strUrl: `${o}/?upcoming=1`,
              strName: Localize("#EventCalendar_NewsChannel_Upcoming"),
              strShortName: Localize(
                "#EventCalendar_NewsChannel_UpcomingShort",
              ),
              strSubtitle: Localize("#EventCalendar_NewsChannel_Personalized"),
            }),
            c.set("featured", {
              id: "featured",
              strUrl: `${o}/collection/featured/`,
              strName: Localize("#EventCalendar_NewsChannel_Featured"),
              strSubtitle: Localize("#EventCalendar_NewsChannel_TopSellers"),
              strHeaderTitle: Localize(
                "#EventCalendar_NewsChannel_Featured_HeaderTitle",
              ),
            }),
            c.set("press", {
              id: "press",
              strUrl: `${o}/collection/press/`,
              strName: Localize("#EventCalendar_NewsChannel_Press"),
              strHeaderTitle: Localize("#EventCalendar_Collection_News_Title"),
              strHeaderSubtitle: Localize(
                "#EventCalendar_Collection_News_Subtitle",
              ),
            }),
            c.set("steam", {
              id: "steam",
              strUrl: `${o}/collection/steam/`,
              strName: Localize("#EventCalendar_NewsChannel_Steam"),
              strSubtitle: Localize("#EventCalendar_NewsChannel_SteamSubtitle"),
              strHeaderTitle: Localize(
                "#EventCalendar_NewsChannel_Steam_HeaderTitle",
              ),
            }),
            c.set("halloween", {
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
            c.set("sales", {
              id: "sales",
              strUrl: `${o}/collection/sales/`,
              strName: Localize("#EventCalendar_NewsChannel_AllSales"),
            }),
            UserConfig.is_support &&
              (c.set("all", {
                id: "all",
                strUrl: `${o}/collection/all/`,
                strName: Localize("#EventCalendar_NewsChannel_All"),
                bIsValveOnly: !0,
              }),
              c.set("associated_press", {
                id: "associated_press",
                strUrl: `${o}/collection/associated_press/`,
                strName: Localize("#EventCalendar_NewsChannel_AssociatedPress"),
                bIsValveOnly: !0,
              }));
        }
        var P = r(7582),
          S = r(74618),
          Z = Object.defineProperty,
          Y = Object.getOwnPropertyDescriptor,
          B = (o, t, e, n) => {
            for (
              var a = n > 1 ? void 0 : n ? Y(t, e) : t, u = o.length - 1, _;
              u >= 0;
              u--
            )
              (_ = o[u]) && (a = (n ? _(t, e, a) : _(a)) || a);
            return n && a && Z(t, e, a), a;
          };
        const $ = 2500;
        function H(o, t, e, n) {
          const a = "section-" + t,
            u = e >= o;
          return {
            strId: a,
            strSectionLabel: t,
            rtSectionStart: e,
            rtSectionEnd: n,
            bIsFutureSection: u,
            nRenderedHeight: $,
            nTopOffset: 0,
          };
        }
        class T {
          m_nForwardStuckCount = 0;
          m_nBackwardStuckCount = 0;
          m_mapCalendarAppsByID = new Map();
          m_mapCalendarClansByID = new Map();
          m_mapCalendarEventsByGid = new Map();
          m_rgSortedCalendarEvents = new Array();
          m_visibilityStore;
          m_currentView = l.sH.box(void 0);
          m_bFinishedSearchingForward = !1;
          m_bFinishedSearchingBackward = !1;
          m_rgCalendarSections = [];
          m_rgFutureSections = [];
          m_dtInitTime;
          m_forwardRequestInFlight = null;
          m_backwardRequestInFlight = null;
          m_key;
          m_collectionMetaData = void 0;
          constructor(t, e) {
            (0, l.Gn)(this),
              (this.m_key = t),
              (this.m_visibilityStore = new U.vJ(e)),
              W.Fm.Get().HintLoad();
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
              this.GetCollectionID() === O.Featured ||
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
          BEventMatchCalendarSingleSource(t) {
            return (
              (this.BIsSingleAppCalendar() &&
                this.m_key.appids?.[0] == t.appid) ||
              (this.BIsSingleGroupCalendar() &&
                this.m_key.clanaccountids?.[0] == t.clanid)
            );
          }
          BIsSingleSourceMuted() {
            if (!this.BIsSingleSourceCalendar()) return !1;
            if (this.BIsSingleAppCalendar()) {
              const e = this.GetSingleAppID();
              return e !== void 0 && S.S.Get().BIsMutedAppID(e);
            }
            const t = this.GetSingleGroupID();
            return t !== void 0 && S.S.Get().BIsMutedClanID(t);
          }
          BIsSingleGroupCalendar() {
            return !!(
              this.m_key.clanaccountids && this.m_key.clanaccountids.length == 1
            );
          }
          GetSingleGroupID() {
            return this.m_key.clanaccountids?.[0];
          }
          BIsSingleAppCalendar() {
            return !!(this.m_key.appids && this.m_key.appids.length == 1);
          }
          GetSingleAppID() {
            return this.m_key.appids?.[0];
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
          SetCollectionMetaData(t) {
            this.m_collectionMetaData = t;
          }
          GetCollectionMetaData() {
            return this.m_collectionMetaData;
          }
          BHasCollectionMetaData() {
            return !!this.m_collectionMetaData;
          }
          ValidateCollectionMetadata(t) {
            const e = t;
            return !!(
              e &&
              typeof e == "object" &&
              e.clanid &&
              typeof e.clanid == "number" &&
              e.clan_event_gid &&
              typeof e.clan_event_gid == "string"
            );
          }
          SetFilteredView(t, e) {
            const n = this.m_currentView.get();
            n && n.dispose();
            const a = () => this.m_rgSortedCalendarEvents,
              u = this.BIsSingleSourceMuted(),
              _ = new ne(
                a,
                this.LoadAdditionalEvents,
                this.BHitEventHorizon,
                t,
                !!e,
                u,
              );
            this.m_currentView.set(_);
          }
          BIsFilteredViewEmpty() {
            return !!this.m_currentView.get()?.BIsViewEmpty();
          }
          GetCalendarItemsInTimeRange(t, e) {
            const n = this.m_currentView.get();
            return n
              ? n.GetCalendarItemsInTimeRange(t, e)
              : (console.error("calendar view not yet initialized"),
                { rgCalendarItems: [], bIsComplete: !1 });
          }
          GetActiveEventsAt(t) {
            const e = this.m_currentView.get();
            return e
              ? e.GetActiveEventsAt(t)
              : (console.error("calendar view not yet initialized"), []);
          }
          GetCurrentlyLoadedEventCount(t, e) {
            return (
              this.m_currentView.get()?.GetCurrentlyLoadedEventCount(t, e) ?? {
                nCount: 0,
                bIsComplete: !1,
              }
            );
          }
          GetCurrentlyLoadedItemsForStats() {
            return this.m_currentView.get()?.GetCurrentlyLoadedEvents() || [];
          }
          GetCalendarSections(t) {
            return t ? this.m_rgFutureSections : this.m_rgCalendarSections;
          }
          GetStoreInitializationTimestamp() {
            return (
              this.m_dtInitTime ||
                (this.m_dtInitTime = P.HD.GetTimeNowWithOverrideAsDate()),
              this.m_dtInitTime
            );
          }
          InitCalendarSections() {
            const t = this.GetStoreInitializationTimestamp(),
              e = [],
              n = t.getTime() / 1e3;
            e.push(H(n, (0, m.we)("#EventCalendar_FutureEventsHeader"), n));
            const a = new Date(t);
            a.setHours(0, 0, 0, 1);
            let u = a.getTime() / 1e3;
            e.push(H(n, (0, m.we)("#Time_Today"), u, n)),
              a.setDate(a.getDate() - 1);
            let _ = u;
            (u = a.getTime() / 1e3),
              e.push(H(n, (0, m.we)("#Time_Yesterday"), u, _));
            const v =
                this.m_rgSortedCalendarEvents[
                  this.m_rgSortedCalendarEvents.length - 1
                ],
              F = v ? v.start_time : n;
            let K = F > u;
            for (let E = 0; E < 5 && !K; E++)
              a.setDate(a.getDate() - 1),
                (_ = u),
                (u = a.getTime() / 1e3),
                e.push(H(n, (0, m.cc)(a), u, _)),
                (K = F > u);
            const x = new Date(a);
            let k = u;
            for (; x.getMonth() == t.getMonth() && x.getDate() != 1 && !K; ) {
              x.setDate(x.getDate() - 7);
              const E = x.getTime() / 1e3;
              e.push(H(n, (0, m.lQ)(k - 1), E, k)), (K = F > E), (k = E);
            }
            const V = new Date(t);
            V.setHours(0, 0, 0, 1), V.setDate(1);
            let Q = k;
            for (let E = 1; !K; E++) {
              const X = new Date(V);
              X.setMonth(t.getMonth() - E, 1);
              const D = X.getTime() / 1e3;
              e.push(H(n, (0, m.lQ)(D), D, Q)), (K = F > D), (Q = D);
            }
            this.m_rgCalendarSections.length > e.length
              ? this.m_rgCalendarSections.splice(
                  e.length,
                  this.m_rgCalendarSections.length,
                )
              : e
                  .splice(this.m_rgCalendarSections.length, e.length)
                  .forEach((E) => this.m_rgCalendarSections.push(E));
          }
          InitFutureCalendarSections() {
            const t = this.GetStoreInitializationTimestamp(),
              e = [];
            let n;
            this.m_key.rtCalendarEnd && (n = this.m_key.rtCalendarEnd);
            const a = this.m_rgSortedCalendarEvents[0];
            a && (n = a.start_time), n || (n = t.getTime() / 1e3);
            const u = t.getTime() / 1e3,
              _ = new Date(t);
            _.setHours(24, 0, 0, 0);
            let v = _.getTime() / 1e3;
            e.push(
              H(
                u,
                (0, m.we)(
                  this.m_key.bSectionByDay ? "#Time_UpNext" : "#Time_Today",
                ),
                u,
                v,
              ),
            );
            let F = n <= v,
              K = v;
            _.setDate(_.getDate() + 1),
              (v = _.getTime() / 1e3),
              F || e.push(H(u, (0, m.we)("#Time_Tomorrow"), K, v)),
              (F = n <= v);
            const x = 6 - R()(t).weekday();
            for (let k = 2; k <= x && !F; k++) {
              K = v;
              const V = (0, m.cc)(_);
              _.setDate(_.getDate() + 1),
                (v = _.getTime() / 1e3),
                e.push(H(u, V, K, v)),
                (F = n <= v);
            }
            if (this.m_key.bSectionByDay)
              for (; !F; ) {
                K = v;
                const k = (0, m.$w)(_);
                _.setDate(_.getDate() + 1),
                  (v = _.getTime() / 1e3),
                  e.push(H(u, k, K, v)),
                  (F = n <= v);
              }
            else {
              const k = new Date(_);
              let V = v;
              const Q = R()(t).daysInMonth();
              if (k.getMonth() == t.getMonth() && k.getDate() != Q && !F) {
                k.setDate(k.getDate() + 7);
                const D = k.getTime() / 1e3;
                e.push(H(u, (0, m.we)("#EventCalendar_NextWeek"), V, D)),
                  (F = n <= D),
                  (V = D);
              }
              const E = new Date(t);
              E.setMonth(E.getMonth() + 1),
                E.setDate(1),
                E.setHours(0, 0, 0, 0);
              let X;
              if (k < E && !F) {
                const D = E.getTime() / 1e3;
                e.push(H(u, (0, m.we)("#EventCalendar_LaterThisMonth"), V, D)),
                  (F = n <= D),
                  (X = D);
              } else X = V;
              for (let D = 2; !F; D++) {
                const ee = new Date(E);
                ee.setMonth(t.getMonth() + D);
                const re = ee.getTime() / 1e3;
                e.push(H(u, (0, m.lQ)(X), X, re)), (F = n <= re), (X = re);
              }
            }
            this.m_rgFutureSections.length > e.length
              ? this.m_rgFutureSections.splice(
                  e.length,
                  this.m_rgFutureSections.length,
                )
              : e
                  .splice(this.m_rgFutureSections.length, e.length)
                  .forEach((k) => this.m_rgFutureSections.push(k));
          }
          async RegisterCalendarEventsAndModels(t) {
            await W.Fm.Get().HintLoad(),
              (0, l.h5)(() => {
                this.RegisterCalendarApps(t.apps ?? []),
                  this.RegisterCalendarClans(t.clans ?? []),
                  this.RegisterCalendarEvents(t.documents ?? []),
                  M.O3.RegisterClanEvents(t.events ?? []),
                  this.RegisterReadEvents(t.events_read ?? []),
                  this.RegisterEventVotes(t.event_votes ?? []),
                  t.forwardComplete && (this.m_bFinishedSearchingForward = !0),
                  t.backwardComplete &&
                    (this.m_bFinishedSearchingBackward = !0),
                  this.InitCalendarSections(),
                  this.InitFutureCalendarSections(),
                  this.SetCollectionMetaData(
                    this.ValidateCollectionMetadata(t.metadatainfo)
                      ? t.metadatainfo
                      : void 0,
                  );
              });
          }
          RegisterCalendarApps(t) {
            if (t)
              for (const e of t) {
                if (this.m_mapCalendarAppsByID.has(e.appid)) continue;
                const n = new L.dF();
                (n.appid = e.appid),
                  (n.source = e.source),
                  (n.playtime = e.playtime),
                  (n.last_played = e.last_played),
                  (n.wishlist_added = e.wishlist_added),
                  this.m_mapCalendarAppsByID.set(e.appid, n),
                  e.hidden &&
                    this.m_visibilityStore.SetAppVisibility(e.appid, !1);
              }
          }
          RegisterCalendarClans(t) {
            if (t) {
              for (const e of t)
                if (!this.m_mapCalendarClansByID.has(e.clanid)) {
                  const n = new L.w2();
                  (n.clanid = e.clanid),
                    (n.source = e.source),
                    this.m_mapCalendarClansByID.set(e.clanid, n),
                    e.hidden &&
                      this.m_visibilityStore.SetClanVisibility(e.clanid, !1);
                }
            }
          }
          RegisterReadEvents(t) {
            t && (0, A.No)(t);
          }
          RegisterEventVotes(t) {
            t &&
              (0, w.mc)(
                t.map((e) => ({
                  gidAnnouncement: e.id,
                  vote: e.vote === void 0 ? null : e.vote ? "up" : "down",
                })),
              );
          }
          RegisterCalendarEvents(t) {
            if (t) {
              let e = !1;
              for (const n of t)
                this.BInternalInsertCalendarEventItem(n) && (e = !0);
              e && this.RebuildSortedCalendarEventList();
            }
          }
          BHitEventHorizon(t) {
            return t == "forward"
              ? this.m_bFinishedSearchingForward
              : this.m_bFinishedSearchingBackward;
          }
          GetTimeEdgeForDirection(t, e = void 0) {
            return t === "forward"
              ? this.m_rgSortedCalendarEvents.length > 0
                ? this.m_rgSortedCalendarEvents[0].start_time
                : e
              : this.m_rgSortedCalendarEvents.length > 0
                ? this.m_rgSortedCalendarEvents[
                    this.m_rgSortedCalendarEvents.length - 1
                  ].start_time
                : e;
          }
          UpdateStuckCounters(t, e) {
            const n =
                t === "forward"
                  ? this.m_bFinishedSearchingForward
                  : this.m_bFinishedSearchingBackward,
              a = this.GetTimeEdgeForDirection(t, void 0);
            return !n && a === e
              ? (t == "forward"
                  ? this.m_nForwardStuckCount++
                  : this.m_nBackwardStuckCount++,
                !0)
              : (t == "forward"
                  ? (this.m_nForwardStuckCount = 0)
                  : (this.m_nBackwardStuckCount = 0),
                !1);
          }
          GetRequestInFlight(t) {
            return t === "forward"
              ? this.m_forwardRequestInFlight
              : this.m_backwardRequestInFlight;
          }
          SetRequestInFlight(t, e) {
            (0, p.wT)(
              !e || !this.GetRequestInFlight(t),
              "Already have a request in flight for",
              t,
            ),
              t === "forward"
                ? (this.m_forwardRequestInFlight = e)
                : (this.m_backwardRequestInFlight = e);
          }
          async LoadAdditionalEvents(t, e) {
            if (this.BHitEventHorizon(t)) return N.R;
            let n = this.GetRequestInFlight(t);
            if (n) return n;
            const a =
                I.TS.STORE_BASE_URL + "events/ajaxgetusereventcalendarrange/",
              u =
                t === "forward"
                  ? this.m_nForwardStuckCount
                  : this.m_nBackwardStuckCount,
              _ = u < 3 ? u : 0,
              v = u >= 3 ? 1 : 0,
              x = 250 + 50 * _,
              k = 15,
              V = P.HD.GetTimeNowWithOverride(),
              Q = this.GetTimeEdgeForDirection(t, V) ?? V,
              E = {
                minTime: 0,
                maxTime: 0,
                ascending: !0,
                maxResults: x,
                populateEvents: k,
                appTypes: this.m_visibilityStore.GetGameSources().join(","),
                eventTypes: Array.from(
                  this.m_visibilityStore.enabledEventTypeSet,
                ).join(","),
                appIdFilter: this.m_key.appids?.length
                  ? this.m_key.appids.sort().join(",")
                  : void 0,
                clanIdFilter: this.m_key.clanaccountids?.length
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
              t === "forward"
                ? ((E.minTime = Math.floor(Q + v)), (E.ascending = !0))
                : ((E.maxTime = Math.floor(Q - v)), (E.ascending = !1)),
              (n = h()
                .get(a, {
                  params: E,
                  cancelToken: e ? e.token : void 0,
                  withCredentials: !0,
                })
                .then(async (D) => {
                  if (
                    (this.SetRequestInFlight(t, null), D.data.success == N.R)
                  ) {
                    if (
                      (await this.RegisterCalendarEventsAndModels(D.data),
                      this.UpdateStuckCounters(t, Q))
                    )
                      return this.LoadAdditionalEvents(t, e);
                  } else
                    console.error(
                      "LoadAdditionalEvents was not successful: Msg" +
                        D.data.msg,
                    );
                  return D.data.success;
                })
                .catch((D) => {
                  this.SetRequestInFlight(t, null);
                  let ee = (0, f.H)(D);
                  return (
                    console.error(
                      "LoadAdditionalEvents hit error " + ee.strErrorMsg,
                      ee,
                    ),
                    t == "forward"
                      ? (this.m_bFinishedSearchingForward = !0)
                      : (this.m_bFinishedSearchingBackward = !0),
                    N.zi
                  );
                })),
              this.SetRequestInFlight(t, n),
              n
            );
          }
          BInternalInsertCalendarEventItem(t) {
            if (!t.unique_id)
              return (
                (0, p.wT)(
                  !1,
                  "Attmpted to register a calendar event item with an invalid unique id!",
                ),
                !1
              );
            if (this.m_mapCalendarEventsByGid.has(t.unique_id)) return !1;
            const e = this.m_mapCalendarAppsByID.get(t.appid),
              n = this.m_mapCalendarClansByID.get(t.clanid);
            if (!e && !n)
              return console.log("No AppInfo or ClanInfo For: ", t), !1;
            const a = new L.NK();
            return (
              (a.clanid = t.clanid),
              (a.unique_id = t.unique_id),
              (a.event_type = t.event_type),
              (a.appid = t.appid),
              (a.start_time = t.start_time),
              (a.score = t.score),
              (a.appInfo = e),
              (a.clanInfo = n),
              this.m_rgSortedCalendarEvents.push(a),
              this.m_mapCalendarEventsByGid.set(a.unique_id, a),
              !0
            );
          }
          GetCalendarAppInfoForAppID(t) {
            return this.m_mapCalendarAppsByID.get(t);
          }
          RebuildSortedCalendarEventList() {
            const t = this.m_rgSortedCalendarEvents.slice();
            this.m_rgSortedCalendarEvents = t.sort(
              (e, n) => n.start_time - e.start_time,
            );
          }
          async UpdateEventBlockFromCalendarEvent(t, e) {
            const n = t.appid || void 0,
              a = t.clanInfo ? t.clanInfo.clanid : void 0;
            if (n == null && a == null) {
              (0, p.wT)(
                !1,
                "Both clan id and account id are missing, cannot change communication status",
              );
              return;
            }
            await S.S.Get().UpdateCommunicationSetting(e, n, a),
              (0, G.EG)(G.Eg.k_eMuted);
          }
          GetAllClans() {
            return Array.from(this.m_mapCalendarClansByID.keys());
          }
          GetAllApps() {
            return Array.from(this.m_mapCalendarAppsByID.keys());
          }
        }
        B([l.sH], T.prototype, "m_mapCalendarAppsByID", 2),
          B([l.sH], T.prototype, "m_mapCalendarClansByID", 2),
          B([l.sH], T.prototype, "m_mapCalendarEventsByGid", 2),
          B([l.sH], T.prototype, "m_rgSortedCalendarEvents", 2),
          B([l.sH], T.prototype, "m_bFinishedSearchingForward", 2),
          B([l.sH], T.prototype, "m_bFinishedSearchingBackward", 2),
          B([l.sH], T.prototype, "m_rgCalendarSections", 2),
          B([l.sH], T.prototype, "m_rgFutureSections", 2),
          B([l.sH], T.prototype, "m_collectionMetaData", 2),
          B([l.XI], T.prototype, "InitCalendarSections", 1),
          B([l.XI], T.prototype, "InitFutureCalendarSections", 1),
          B([l.XI], T.prototype, "RegisterCalendarEventsAndModels", 1),
          B([l.XI], T.prototype, "RegisterCalendarApps", 1),
          B([l.XI], T.prototype, "RegisterCalendarClans", 1),
          B([l.XI], T.prototype, "RegisterCalendarEvents", 1),
          B([y.o], T.prototype, "BHitEventHorizon", 1),
          B([l.XI.bound], T.prototype, "LoadAdditionalEvents", 1),
          B([l.XI], T.prototype, "UpdateEventBlockFromCalendarEvent", 1);
        class ne {
          m_rgLoadedEventsBox = l.sH.box([]);
          m_lastLoadLatch = null;
          m_fnGetUnfilteredEvents;
          m_fnLoadAdditionalEvents;
          m_fnBHitEventHorizon;
          m_fnBIsEventInView;
          m_bSkipStorePreferenceCheck;
          m_bAllowMutedAndIgnoredSources;
          m_rgAutorunDisposer;
          constructor(t, e, n, a, u, _) {
            (0, l.Gn)(this),
              (this.m_fnGetUnfilteredEvents = t),
              (this.m_fnLoadAdditionalEvents = e),
              (this.m_fnBHitEventHorizon = n),
              (this.m_fnBIsEventInView = a),
              (this.m_bSkipStorePreferenceCheck = u),
              (this.m_bAllowMutedAndIgnoredSources = _),
              (this.m_rgAutorunDisposer = (0, l.fm)(async () => {
                const v = this.viewFilteredEvents.slice();
                if (!this.m_bSkipStorePreferenceCheck) {
                  const F = Array.from(
                    new Set(v.map((K) => K.appid).filter(Boolean)),
                  ).sort();
                  if (
                    ((this.m_lastLoadLatch = v),
                    await C.A.Get().QueueMultipleAppRequests(F, {
                      ...i.jy,
                      include_assets: !0,
                    }),
                    this.m_lastLoadLatch != v)
                  )
                    return;
                  this.m_lastLoadLatch = null;
                }
                this.m_rgLoadedEventsBox.set(v);
              }));
          }
          dispose() {
            this.m_rgAutorunDisposer();
          }
          get viewFilteredEvents() {
            return this.m_fnGetUnfilteredEvents().filter((t) =>
              this.m_fnBIsEventInView(t),
            );
          }
          get filteredAndCheckedEvents() {
            return this.m_rgLoadedEventsBox.get().filter((e) => {
              if (e.appid) {
                if (
                  (!this.m_bAllowMutedAndIgnoredSources &&
                    (S.S.Get().BIsMutedAppID(e.appid) ||
                      W.Fm.Get().BIsGameIgnored(e.appid))) ||
                  (!this.m_bSkipStorePreferenceCheck &&
                    (0, i.Li)(C.A.Get().GetApp(e.appid)))
                )
                  return !1;
              } else if (
                !this.m_bAllowMutedAndIgnoredSources &&
                (S.S.Get().BIsMutedClanID(e.clanid) ||
                  W.Fm.Get().BIsIgnoringCurator(z.b.InitFromClanID(e.clanid)))
              )
                return !1;
              return !0;
            });
          }
          BIsCompleteThroughTime(t, e) {
            if (this.m_fnBHitEventHorizon(t)) return !0;
            const n = this.m_fnGetUnfilteredEvents();
            return t === "forward"
              ? !!e && n.length > 0 && n[0].start_time > e
              : e !== void 0 && n.length > 0 && n[n.length - 1].start_time < e;
          }
          async EnsureRangeIsLoaded(t, e) {
            for (
              let a = 0;
              a < 100 && !this.BIsCompleteThroughTime("forward", e);
              a++
            )
              await this.m_fnLoadAdditionalEvents("forward");
            for (
              let a = 0;
              a < 100 && !this.BIsCompleteThroughTime("backward", t);
              a++
            )
              await this.m_fnLoadAdditionalEvents("backward");
          }
          GetCalendarItemsInTimeRange(t, e) {
            this.EnsureRangeIsLoaded(t, e);
            const n = this.filteredAndCheckedEvents.filter(
                (_) => _.start_time >= t && (!e || _.start_time < e),
              ),
              a = this.BIsCompleteThroughTime("forward", e),
              u = this.BIsCompleteThroughTime("backward", t);
            return { rgCalendarItems: n, bIsComplete: a && u };
          }
          GetCurrentlyLoadedEvents() {
            return this.filteredAndCheckedEvents;
          }
          GetCurrentlyLoadedEventCount(t, e) {
            let n = 0;
            this.filteredAndCheckedEvents.forEach((_) => {
              _.start_time >= t && (!e || _.start_time < e) && n++;
            });
            const a = this.BIsCompleteThroughTime("forward", e),
              u = this.BIsCompleteThroughTime("backward", t);
            return { nCount: n, bIsComplete: a && u };
          }
          BIsViewEmpty() {
            return this.filteredAndCheckedEvents.length > 0;
          }
          GetActiveEventsAt(t) {
            return this.filteredAndCheckedEvents
              .map((e) => M.O3.GetClanEventModel(e.unique_id))
              .filter((e) => {
                if (!e || e.startTime === void 0) return !1;
                const n = e.endTime || e.startTime + 3600;
                return t >= e.startTime && t < n;
              });
          }
        }
        B([l.EW.struct], ne.prototype, "viewFilteredEvents", 1),
          B([l.EW.struct], ne.prototype, "filteredAndCheckedEvents", 1);
        const te = l.sH.box(null),
          se = new Map();
        window.g_EventCalendarMap = se;
        function ae(o, t) {
          let e = "";
          return (
            o.appids &&
              o.appids.length > 0 &&
              (e += "appids:" + o.appids.sort().join(",")),
            o.clanaccountids &&
              o.clanaccountids.length > 0 &&
              (e += "clanids:" + o.clanaccountids.sort().join(",")),
            o.collectionid && (e += "collection:" + o.collectionid),
            o.saleid && (e += "sale:" + o.saleid),
            o.bSectionByDay && (e += "_sectionbyday"),
            o.rtCalendarEnd && (e += "_end:" + o.rtCalendarEnd),
            o.rgTags &&
              o.rgTags.length > 0 &&
              (e += "_tags:" + o.rgTags.slice().sort().join(",")),
            o.hubtype &&
              (e +=
                "_hubtype:" +
                o.hubtype +
                "_" +
                o.category_or_language +
                "_" +
                o.tag_name),
            te.get() !== e && (te.set(e), se.has(e) || se.set(e, new T(o, t))),
            e
          );
        }
        function ie() {
          let o = te.get();
          return o == null && (o = ae({})), se.get(o);
        }
        function oe() {
          return te.get() !== null;
        }
      },
      81673: (j, b, r) => {
        "use strict";
        r.d(b, { FD: () => C, vJ: () => O });
        var g = r(14947),
          h = r(99412),
          l = r(49789),
          J = r(71742),
          R = r(3166),
          N = r(90533),
          L = r(40497),
          A = r(7582),
          w = r(35675),
          G = Object.defineProperty,
          z = Object.getOwnPropertyDescriptor,
          M = (c, s, d, P) => {
            for (
              var S = P > 1 ? void 0 : P ? z(s, d) : s, Z = c.length - 1, Y;
              Z >= 0;
              Z--
            )
              (Y = c[Z]) && (S = (P ? Y(s, d, S) : Y(S)) || S);
            return P && S && G(s, d, S), S;
          },
          C = ((c) => (
            (c.k_ERecent = "recent"),
            (c.k_ELibrary = "library"),
            (c.k_EWishlist = "wishlist"),
            (c.k_EFollowing = "following"),
            (c.k_ERecommended = "recommended"),
            (c.k_ESteam = "steam"),
            (c.k_EFeatured = "featured"),
            (c.k_ECurator = "curator"),
            c
          ))(C || {});
        const i = [
            "library",
            "wishlist",
            "following",
            "recommended",
            "steam",
            "curator",
          ],
          p = [...i, "featured"],
          f = ["featured"];
        var y = ((c) => (
          (c.k_ENews = "news"),
          (c.k_EEvents = "events"),
          (c.k_EStreaming = "streaming"),
          (c.k_EUpdates = "updates"),
          (c.k_EReleases = "releases"),
          (c.k_ESales = "sales"),
          c
        ))(y || {});
        const m = [
            "news",
            "events",
            "streaming",
            "updates",
            "releases",
            "sales",
          ],
          I = new Map([
            ["news", [h.uYK]],
            ["events", [h.L0X, h.I5b, h.zA, h.y6, h.hGl, h.WNR, h.pIh, h.izQ]],
            ["streaming", [h.KDJ]],
            ["updates", [h.Fwr, h.u0, h.zeJ]],
            ["releases", [h.yhO, h.Aqr, h.DEQ, h.f4X, h.zcX]],
            ["sales", [h.HRy, h.C$4, h.LOv, h.HFK]],
          ]),
          W = 1599202800;
        function U(c) {
          return new Map(c.map((s) => [s, !0]));
        }
        class O {
          m_mapEventTypeGroupsAllowed = new Map();
          m_mapGameSources = new Map();
          m_bCuratorUnhideOnFollowDialogDismissed = !1;
          m_mapHiddenApps = new Map();
          m_mapHiddenClans = new Map();
          m_bInitializedForUpdatesOnly = !1;
          m_eStorageType = "session";
          m_strStorageKey;
          constructor(s) {
            (0, g.Gn)(this),
              (0, g.h5)(() => {
                s?.rgHiddenApps &&
                  s.rgHiddenApps.forEach((d) =>
                    this.m_mapHiddenApps.set(d, !0),
                  ),
                  s?.rgHiddenClans &&
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
            const s = new Set();
            for (const d of Array.from(this.m_mapEventTypeGroupsAllowed.keys()))
              I.get(d)?.forEach((P) => s.add(P));
            return s;
          }
          MapClanEventTypeToGroup(s) {
            let d;
            return (
              I.forEach((P, S) => {
                P.indexOf(s) !== -1 && (d = S);
              }),
              d || "events"
            );
          }
          InitDefaultCheckboxes(s, d, P) {
            (this.m_bInitializedForUpdatesOnly = d),
              (this.m_mapEventTypeGroupsAllowed = U(d ? ["updates"] : m));
            const S = (0, R.Y2)() ? p : i;
            (this.m_mapGameSources = U(s ? S : f)),
              P && this.m_mapGameSources.set("featured", !0);
          }
          Init(s, d, P, S, Z) {
            (this.m_eStorageType = Z), (this.m_strStorageKey = S);
            const Y = this.GetStorageObject(),
              B = Y ? Y.getItem(this.GetPreferencesStorageKey()) : null;
            if (B) {
              const $ = JSON.parse(B);
              if ($.rgEventTypeGroupsAllowed && $.rgGameSources) {
                const { rgEventTypeGroupsAllowed: H, rgGameSources: T } = $;
                (this.m_mapEventTypeGroupsAllowed = U(H)),
                  (this.m_mapGameSources = U(T)),
                  $.bCuratorUnhideOnFollowDismissed !== void 0 &&
                    (this.m_bCuratorUnhideOnFollowDialogDismissed =
                      $.bCuratorUnhideOnFollowDismissed);
                return;
              }
            }
            this.InitDefaultCheckboxes(s, d, P);
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
              (0, N.m4)(L.L, s);
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
            return (s === "following" && !(0, w.xU)()) ||
              (s === "curator" && !(0, w.Us)())
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
                    ((0, J.wT)(
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
              P = 4320 * 3600,
              S = !!(
                s.appInfo &&
                s.appInfo.last_played &&
                s.appInfo.last_played + P >= A.HD.GetTimeNowWithOverride()
              );
            return (!this.enabledEventTypeSet.has(s.event_type) &&
              !(
                this.m_bInitializedForUpdatesOnly &&
                this.BIsEventTypeGroupAllowed("updates") &&
                s.event_type == h.uYK &&
                s.start_time < W
              )) ||
              this.m_mapHiddenApps.has(s.appid) ||
              this.m_mapHiddenClans.has(s.clanid)
              ? !1
              : d & l.bK.k_eRequired || d & l.bK.k_eReposted
                ? !0
                : !!(
                    (this.BIsGameSourceAllowed("recent") && S) ||
                    (this.BIsGameSourceAllowed("library") &&
                      d & l.bK.k_eLibrary) ||
                    (this.BIsGameSourceAllowed("wishlist") &&
                      d & l.bK.k_eWishlist) ||
                    (this.BIsGameSourceAllowed("following") &&
                      d & l.bK.k_eFollowing) ||
                    (this.BIsGameSourceAllowed("recommended") &&
                      d & l.bK.k_eRecommended) ||
                    (this.BIsGameSourceAllowed("steam") && d & l.bK.k_eSteam) ||
                    (this.BIsGameSourceAllowed("featured") &&
                      d & l.bK.k_eFeatured) ||
                    (this.BIsGameSourceAllowed("curator") &&
                      d & l.bK.k_eCurator)
                  );
          }
          BAreAllEventsHidden() {
            return (
              this.m_mapEventTypeGroupsAllowed.size == 0 ||
              this.m_mapGameSources.size == 0
            );
          }
          BAreAnyEventsFiltered(s) {
            const d = (0, R.Y2)() ? p : i;
            return (
              (s ? d : f).some((S) => !this.BIsGameSourceAllowed(S)) ||
              m.some((S) => !this.BIsEventTypeGroupAllowed(S))
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
        M([g.sH], O.prototype, "m_mapEventTypeGroupsAllowed", 2),
          M([g.sH], O.prototype, "m_mapGameSources", 2),
          M([g.sH], O.prototype, "m_bCuratorUnhideOnFollowDialogDismissed", 2),
          M([g.sH], O.prototype, "m_mapHiddenApps", 2),
          M([g.sH], O.prototype, "m_mapHiddenClans", 2),
          M(
            [(0, g.EW)({ keepAlive: !0, equals: g.m3.structural })],
            O.prototype,
            "enabledEventTypeSet",
            1,
          ),
          M([g.XI], O.prototype, "SetEventTypeGroupAllowed", 1),
          M([g.XI], O.prototype, "SetGameSourceAllowed", 1);
      },
      74618: (j, b, r) => {
        "use strict";
        r.d(b, { S: () => M });
        var g = r(41735),
          h = r.n(g),
          l = r(14947),
          J = r(72604),
          R = r(71742),
          N = r(34592),
          L = r(3166),
          A = Object.defineProperty,
          w = Object.getOwnPropertyDescriptor,
          G = (C, i, p, f) => {
            for (
              var y = f > 1 ? void 0 : f ? w(i, p) : i, m = C.length - 1, I;
              m >= 0;
              m--
            )
              (I = C[m]) && (y = (f ? I(i, p, y) : I(y)) || y);
            return f && y && A(i, p, y), y;
          };
        const z = class q {
          constructor() {
            (0, l.Gn)(this);
          }
          m_mapBlockedAppIds = new Map();
          m_mapBlockedClanIds = new Map();
          static s_globalSingletonStore;
          static Get() {
            return (
              q.s_globalSingletonStore ||
                ((q.s_globalSingletonStore = new q()),
                q.s_globalSingletonStore.Init()),
              q.s_globalSingletonStore
            );
          }
          GetMutedSourceCount() {
            return this.m_mapBlockedAppIds.size + this.m_mapBlockedClanIds.size;
          }
          Init() {
            const i = (0, L.Tc)("mutedcomminfo", "application_config");
            this.ValidateStoreDefault(i) &&
              (i.appids &&
                i.appids.forEach((p) => this.m_mapBlockedAppIds.set(p, !0)),
              i.clanids &&
                i.clanids.forEach((p) => this.m_mapBlockedClanIds.set(p, !0)));
          }
          ValidateStoreDefault(i) {
            const p = i;
            return p && typeof p == "object"
              ? (Array.isArray(p.appids) && p.appids.length > 0) ||
                  (Array.isArray(p.clanids) && p.clanids.length > 0)
              : !1;
          }
          BIsEventBlocked(i) {
            return i.appid
              ? this.m_mapBlockedAppIds.has(i.appid)
              : i.clanInfo
                ? this.m_mapBlockedClanIds.has(i.clanInfo.clanid)
                : !1;
          }
          BIsMutedAppID(i) {
            return this.m_mapBlockedAppIds.has(i);
          }
          BIsMutedClanID(i) {
            return this.m_mapBlockedClanIds.has(i);
          }
          async UpdateCommunicationSetting(i, p, f) {
            const y = L.TS.STORE_BASE_URL + "account/optoutappcommunication/",
              m = new FormData();
            if (
              (m.append("sessionid", (0, L.KC)()),
              m.append("allowCommunication", i ? "1" : "0"),
              p)
            ) {
              if (
                (!i && this.m_mapBlockedAppIds.has(p)) ||
                (i && !this.m_mapBlockedAppIds.has(p))
              )
                return !0;
              i
                ? this.m_mapBlockedAppIds.delete(p)
                : this.m_mapBlockedAppIds.set(p, !0),
                m.append("appId", p.toString());
            } else if (f) {
              if (
                (!i && this.m_mapBlockedClanIds.has(f)) ||
                (i && !this.m_mapBlockedClanIds.has(f))
              )
                return !0;
              i
                ? this.m_mapBlockedClanIds.delete(f)
                : this.m_mapBlockedClanIds.set(f, !0),
                m.append("clanId", f.toString());
            } else
              return (
                (0, R.wT)(
                  !1,
                  "BlockEventsFromCalenderEvent: Invalid AppID and ClanID",
                ),
                !1
              );
            try {
              return (await h().post(y, m)).data.success == J.R;
            } catch (I) {
              return (
                console.error(
                  "Blocking app id hit error " + (0, N.H)(I).strErrorMsg,
                ),
                !1
              );
            }
          }
        };
        G([l.sH], z.prototype, "m_mapBlockedAppIds", 2),
          G([l.sH], z.prototype, "m_mapBlockedClanIds", 2);
        let M = z;
      },
      91424: (j, b, r) => {
        "use strict";
        r.d(b, { Y: () => f });
        var g = r(7850),
          h = r(75844),
          l = r(90626),
          J = r(53025),
          R = r(77495),
          N = r(58483),
          L = r(73085),
          A = r(88003),
          w = r(54963),
          G = r(19332),
          z = r.n(G),
          M = Object.defineProperty,
          C = Object.getOwnPropertyDescriptor,
          i = (m, I, W, U) => {
            for (
              var O = U > 1 ? void 0 : U ? C(I, W) : I, c = m.length - 1, s;
              c >= 0;
              c--
            )
              (s = m[c]) && (O = (U ? s(I, W, O) : s(O)) || O);
            return U && O && M(I, W, O), O;
          };
        function p(m) {
          const { event: I, closeModal: W } = m,
            U = (0, N.LJ)();
          return (0, g.jsx)(L.AD, {
            initialEvent: I,
            bShowOnlyInitialEvent: !0,
            partnerEventStore: R.O3,
            emoticonStore: U,
            showAppHeader: !0,
            closeModal: W,
          });
        }
        function f(m, I) {
          (0, A.pg)((0, g.jsx)(p, { event: m }), I);
        }
        let y = class extends l.Component {
          m_refFocus = l.createRef();
          componentDidMount() {
            this.props.fnClose &&
              (document.addEventListener("keydown", this.escFunction, !1),
              this.m_refFocus.current && this.m_refFocus.current.focus());
          }
          componentWillUnmount() {
            this.props.fnClose &&
              document.removeEventListener("keydown", this.escFunction, !1);
          }
          escFunction(m) {
            const { fnClose: I } = this.props;
            m.keyCode === 27 && I && I();
          }
          OnBackgroundClick(m) {
            m.currentTarget == m.target && this.props.fnClose();
          }
          render() {
            const { event: m, langOverride: I, isPreview: W } = this.props;
            return (0, g.jsx)("div", {
              ref: this.m_refFocus,
              className: G.Main,
              onClick: this.OnBackgroundClick,
              children: (0, g.jsx)(N.sU, {
                children: (U) =>
                  (0, g.jsx)(
                    L.He,
                    {
                      event: m,
                      emoticonStore: U,
                      partnerEventStore: J.$.Get(),
                      langOverride: I,
                      isPreview: W,
                      bDisableBroadcastPlayer: !1,
                    },
                    m.GID,
                  ),
              }),
            });
          }
        };
        i([w.oI], y.prototype, "escFunction", 1),
          i([w.oI], y.prototype, "OnBackgroundClick", 1),
          (y = i([h.PA], y));
      },
      20035: (j, b, r) => {
        "use strict";
        r.d(b, { C: () => z });
        var g = r(7850),
          h = r(8323),
          l = r(90537),
          J = r(90533),
          R = r(98112),
          N = r(98241),
          L = r(37589);
        class A {
          m_bHasBeenTracked = !1;
          m_fnSubmit = null;
        }
        class w {
          ShouldTrack(C) {
            if (C.bOldAnnouncement) return !1;
            const i = this.m_mapEvents.get(C.GID);
            return !i || !i.m_bHasBeenTracked;
          }
          StartTracking(C, i, p) {
            if (C.bOldAnnouncement) return;
            let f = this.m_mapEvents.get(C.GID);
            f || ((f = new A()), this.m_mapEvents.set(C.GID, f)),
              !f.m_bHasBeenTracked &&
                (f.m_fnSubmit ||
                  ((f.m_fnSubmit = new h.LU()),
                  f.m_fnSubmit.Schedule(
                    this.m_nImpressionDelayMS,
                    this.ReportImpression.bind(this, C, i, p),
                  )));
          }
          StopTracking(C) {
            const i = this.m_mapEvents.get(C.GID);
            i && i.m_fnSubmit && (i.m_fnSubmit.Cancel(), (i.m_fnSubmit = null));
          }
          ReportImpression(C, i, p) {
            if ((p.RecordEventShown(C, R.Tc.qC), i)) {
              const y = (0, N.v0)();
              i.RecordEventViewed(
                C.GID,
                y.GetCurrentlyLoadedItemsForStats(),
                y.GetStoreInitializationTimestamp().getTime() / 1e3,
              );
            }
            const f = this.m_mapEvents.get(C.GID);
            f &&
              ((f.m_bHasBeenTracked = !0),
              f.m_fnSubmit.Cancel(),
              (f.m_fnSubmit = null));
          }
          m_nImpressionDelayMS = 500;
          m_mapEvents = new Map();
        }
        const G = new w(),
          z = (M) => {
            const { event: C } = M,
              i = (0, l.Y)(),
              p = (0, J.fm)();
            if (G.ShouldTrack(C)) {
              const f = () =>
                  G.StartTracking(C, M.recordNewsHubStats ? p : void 0, i),
                y = () => G.StopTracking(C);
              return (0, g.jsx)(L.Y, { onEnter: f, onLeave: y });
            } else return null;
          };
      },
      19332: (j) => {
        j.exports = { Main: "_1Zn_5pvuMbqr57ws1eJKe" };
      },
      10886: (j, b, r) => {
        "use strict";
        r.d(b, { A: () => g });
        const g =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
      },
      3209: (j, b, r) => {
        "use strict";
        r.d(b, { A: () => g });
        const g =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
      },
    },
  ]);
})();
