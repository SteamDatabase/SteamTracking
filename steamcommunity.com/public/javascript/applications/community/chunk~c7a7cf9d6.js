/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [3584],
  {
    19332: (e) => {
      e.exports = { Main: "_1Zn_5pvuMbqr57ws1eJKe" };
    },
    64734: (e) => {
      e.exports = {
        SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
        SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
        required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
      };
    },
    57876: (e, t, n) => {
      "use strict";
      n.d(t, { Xh: () => c, cU: () => u, tf: () => p, wl: () => m });
      var s = n(22837),
        i = n(71150),
        r = n(30570),
        a = n(30894),
        o = n(16021),
        l = n(97471),
        d = n(78327);
      const c = {
        include_assets: !0,
        include_release: !0,
        include_platforms: !0,
        include_tag_count: 20,
        include_basic_info: !0,
        include_trailers: !0,
        include_reviews: !0,
        include_screenshots: !0,
        include_supported_languages: !0,
      };
      class u {
        constructor() {
          this.m_setAlreadyAdded = new Set();
        }
        Reset() {
          this.m_setAlreadyAdded = new Set();
        }
        BHasAppID(e) {
          return this.m_setAlreadyAdded.has("a" + e);
        }
        BHasPackageID(e) {
          return this.m_setAlreadyAdded.has("s" + e);
        }
        BHasBundleID(e) {
          return this.m_setAlreadyAdded.has("b" + e);
        }
        BHasStoreItemKey(e) {
          return this.m_setAlreadyAdded.has(
            this.ConvertStoreItemKeyToUniqueKey(e),
          );
        }
        AddStoreItemKey(e) {
          this.m_setAlreadyAdded.add(this.ConvertStoreItemKeyToUniqueKey(e));
        }
        ConvertStoreItemKeyToUniqueKey(e) {
          switch (e.item_type) {
            default:
            case "app":
              return "a" + e.id;
            case "sub":
              return "s" + e.id;
            case "bundle":
              return "b" + e.id;
          }
        }
      }
      const m = 4;
      function p(e, t, n, s, i, r) {
        var a;
        const d = new Array(),
          c = new Array(),
          u = new Array(),
          p = new Array();
        if (!e || 0 == e.length) return d;
        const _ = [
          l.by.k_RejectSupportedLanguage,
          l.by.k_RejectAlreadyDisplayed,
          l.by.k_RejectNoTrailer,
        ];
        for (let r of e) {
          let e = r.id,
            m = l.by.k_NotRejected;
          switch (r.item_type) {
            case "sub":
              const i = o.A.Get().GetPackage(e);
              if (
                1 !==
                (null === (a = null == i ? void 0 : i.GetIncludedAppIDs()) ||
                void 0 === a
                  ? void 0
                  : a.length)
              ) {
                m = I(e, t, s, !0);
                break;
              }
              e = i.GetIncludedAppIDs()[0];
            case "app":
              m = v(e, t, n, s, !0);
              break;
            case "bundle":
              m = S(e, t, s, !0);
          }
          if (
            (m == l.by.k_NotRejected
              ? ((r.rejected = l.by.k_NotRejected),
                d.push({ ...r, priority: 1 }))
              : _.includes(m)
                ? ((r.rejected = l.by.k_NotRejected), c.push(r))
                : ((r.rejected = m),
                  m == l.by.k_RejectIgnoredGame ? u.push(r) : p.push(r)),
            d.length > i)
          )
            break;
        }
        return (
          d.length < i &&
            (h(d, c, r, 2),
            d.length < r &&
              t.enforce_minimum &&
              (h(d, u, r, 3), h(d, p, r, m))),
          d
        );
      }
      function h(e, t, n, s) {
        for (let i = 0; e.length < n && i < t.length; ++i)
          e.push({ ...t[i], priority: s });
      }
      function _(e, t) {
        var n, s, i, r;
        const o = a.Fm.Get();
        if (t.only_current_platform && o.BHasPlatformPreferenceSet()) {
          if (
            !(
              ((null === (n = e.GetPlatforms()) || void 0 === n
                ? void 0
                : n.windows) &&
                o.BIsPreferredPlatform("win")) ||
              ((null === (s = e.GetPlatforms()) || void 0 === s
                ? void 0
                : s.mac) &&
                o.BIsPreferredPlatform("mac")) ||
              ((null === (i = e.GetPlatforms()) || void 0 === i
                ? void 0
                : i.steamos_linux) &&
                o.BIsPreferredPlatform("linux"))
            )
          )
            return l.by.k_RejectWrongPlatform;
        }
        if (!t.prepurchase && e.BIsComingSoon())
          return l.by.k_RejectNoComingSoon;
        const d = e.GetPlatforms();
        return !t.virtual_reality &&
          d &&
          d.vr_support &&
          d.vr_support.vrhmd_only
          ? l.by.k_RejectNoVR
          : (
                null === (r = e.GetAllCreatorClanIDs()) || void 0 === r
                  ? void 0
                  : r.some((e) => o.BIsIgnoringCurator(e))
              )
            ? l.by.k_RejectCreatorClan
            : l.by.k_NotRejected;
      }
      function g(e, t) {
        var n;
        if (t.localized) {
          const t = (0, s.sfN)(d.TS.LANGUAGE);
          if (
            !(null === (n = e.GetAllLanguagesWithSomeSupport()) || void 0 === n
              ? void 0
              : n.includes(t))
          )
            return l.by.k_RejectSupportedLanguage;
        }
        return l.by.k_NotRejected;
      }
      function v(e, t, n, s, d) {
        const c = o.A.Get().GetApp(e);
        if (!c) return l.by.k_RejectNotLoaded;
        const u = _(c, t);
        if (u != l.by.k_NotRejected) return u;
        const m = a.Fm.Get();
        if (m.BIsGameIgnored(e)) return l.by.k_RejectIgnoredGame;
        if (m.BExcludeTagIDs(c.GetTagIDs())) return l.by.k_RejectIgnoreGameTags;
        if (m.BExcludesContentDescriptor(c.GetContentDescriptorIDs()))
          return l.by.k_RejectIgnoreContentDescriptors;
        if (!t.early_access && c.BIsEarlyAccess())
          return l.by.k_RejectEarlyAccess;
        const p = c.GetAppType();
        if (!t.software && p == r.uE.Sv) return l.by.k_RejectSoftware;
        if (t.games_already_in_library && m.BIsGameOwned(e))
          return l.by.k_RejectInLibrary;
        if (t.games_not_in_library && !m.BIsGameOwned(e))
          return l.by.k_RejectNotInLibrary;
        if (!t.video && [r.uE.Wz, r.uE.gQ, r.uE.ID].includes(p))
          return l.by.k_RejectVideo;
        if (t.has_discount) {
          const e = c.GetBestPurchaseOption();
          if (!e || !e.discount_pct) return l.by.k_RejectNoDiscount;
        }
        return "adultonly" != n &&
          t.no_ao_content &&
          (c.HasContentDescriptorID(i.u7) || c.HasContentDescriptorID(i.T4))
          ? l.by.k_RejectAO
          : p == r.uE.ue &&
              t.games_already_in_library &&
              m.BIsGameOwned(c.GetParentAppID() || 0)
            ? l.by.k_RejectInLibrary
            : d
              ? (p == r.uE.ue && s.BHasAppID(c.GetParentAppID() || 0)) ||
                s.BHasAppID(e)
                ? l.by.k_RejectAlreadyDisplayed
                : t.has_trailer && !c.BHasTrailers(!1)
                  ? l.by.k_RejectNoTrailer
                  : g(c, t)
              : l.by.k_NotRejected;
      }
      function y(e, t) {
        const n = a.Fm.Get();
        let s = !1;
        for (let t of e) {
          if (n.BIsGameIgnored(t)) return l.by.k_RejectIgnoredGame;
          n.BIsGameOwned(t) && (s = !0);
        }
        return t.games_not_in_library && s
          ? l.by.k_RejectInLibrary
          : t.games_not_in_library && !s
            ? l.by.k_RejectNotInLibrary
            : l.by.k_NotRejected;
      }
      function I(e, t, n, s) {
        const i = o.A.Get().GetPackage(e);
        if (!i) return l.by.k_RejectNotLoaded;
        const r = _(i, t);
        if (r != l.by.k_NotRejected) return r;
        const d = y(i.GetIncludedAppIDs(), t);
        if (d != l.by.k_NotRejected) return d;
        const c = a.Fm.Get();
        return t.games_already_in_library && c.BOwnsPackage(e)
          ? l.by.k_RejectInLibrary
          : c.BIsPackageIgnored(e)
            ? l.by.k_RejectIgnoredGame
            : s
              ? n.BHasPackageID(e)
                ? l.by.k_RejectAlreadyDisplayed
                : g(i, t)
              : l.by.k_NotRejected;
      }
      function S(e, t, n, s) {
        const i = o.A.Get().GetBundle(e);
        if (!i) return l.by.k_RejectNotLoaded;
        const r = _(i, t);
        if (r != l.by.k_NotRejected) return r;
        const a = y(i.GetIncludedAppIDs(), t);
        return a != l.by.k_NotRejected
          ? a
          : s
            ? n.BHasBundleID(e)
              ? l.by.k_RejectAlreadyDisplayed
              : g(i, t)
            : l.by.k_NotRejected;
      }
    },
    47822: (e, t, n) => {
      "use strict";
      n.d(t, { NK: () => o, bK: () => s, dF: () => l, w2: () => d });
      var s,
        i = n(16021),
        r = n(4796),
        a = n(61859);
      !(function (e) {
        (e[(e.k_eLibrary = 1)] = "k_eLibrary"),
          (e[(e.k_eWishlist = 2)] = "k_eWishlist"),
          (e[(e.k_eFollowing = 4)] = "k_eFollowing"),
          (e[(e.k_eRecommended = 8)] = "k_eRecommended"),
          (e[(e.k_eSteam = 16)] = "k_eSteam"),
          (e[(e.k_eRequired = 32)] = "k_eRequired"),
          (e[(e.k_eFeatured = 64)] = "k_eFeatured"),
          (e[(e.k_eCurator = 128)] = "k_eCurator"),
          (e[(e.k_eReposted = 256)] = "k_eReposted");
      })(s || (s = {}));
      class o {
        GetSource() {
          var e, t;
          return this.appInfo
            ? this.appInfo.source
            : null !==
                  (t =
                    null === (e = this.clanInfo) || void 0 === e
                      ? void 0
                      : e.source) && void 0 !== t
              ? t
              : 0;
        }
        static GetEntityNameForID(e, t) {
          var n, s;
          if (e)
            return null !==
              (s =
                null === (n = i.A.Get().GetApp(e)) || void 0 === n
                  ? void 0
                  : n.GetName()) && void 0 !== s
              ? s
              : (0, a.we)("#EventCalendar_MuteApp_Unknown");
          if (t) {
            const e = r.ac.GetClanInfoByClanAccountID(t);
            if (null == e ? void 0 : e.group_name) return e.group_name;
          }
          return (0, a.we)("#EventCalendar_MuteApp_Unknown");
        }
        static BHasEntityNameForID(e, t) {
          var n, s;
          return e
            ? Boolean(
                null === (n = i.A.Get().GetApp(e)) || void 0 === n
                  ? void 0
                  : n.GetName(),
              )
            : !!t &&
                !!(null === (s = r.ac.GetClanInfoByClanAccountID(t)) ||
                void 0 === s
                  ? void 0
                  : s.group_name);
        }
        GetEntityName() {
          return o.GetEntityNameForID(this.appid, this.clanid);
        }
        GetGameCapsule() {
          var e, t;
          if (this.appInfo)
            return null ===
              (t =
                null === (e = i.A.Get().GetApp(this.appInfo.appid)) ||
                void 0 === e
                  ? void 0
                  : e.GetAssets()) || void 0 === t
              ? void 0
              : t.GetMainCapsuleURL();
          if (this.clanInfo) {
            let e = r.ac.GetClanInfoByClanAccountID(this.clanInfo.clanid);
            if (e) return e.avatar_full_url;
          }
          return (0, a.we)("#EventCalendar_MuteApp_Unknown");
        }
        GetGameIcon() {
          var e, t;
          if (this.appInfo)
            return null ===
              (t =
                null === (e = i.A.Get().GetApp(this.appInfo.appid)) ||
                void 0 === e
                  ? void 0
                  : e.GetAssets()) || void 0 === t
              ? void 0
              : t.GetCommunityIconURL();
          if (this.clanInfo) {
            let e = r.ac.GetClanInfoByClanAccountID(this.clanInfo.clanid);
            if (e) return e.avatar_full_url;
          }
          return (0, a.we)("#EventCalendar_MuteApp_Unknown");
        }
      }
      class l {}
      class d {}
    },
    62734: (e, t, n) => {
      "use strict";
      n.d(t, { f: () => r });
      var s = n(81393);
      var i = n(78327);
      class r {
        BHasHomeView() {
          return Boolean(this.m_HomeView);
        }
        GetHomeView() {
          var e;
          return null === (e = this.m_HomeView) || void 0 === e
            ? void 0
            : e.home;
        }
        static Get() {
          var e;
          return (
            r.s_globalSingletonStore ||
              ((e = "CHomeViewStore.s_globalSingletonStore"),
              (0, s.wT)(!0, "Unexpected code running in SSR Server: " + e),
              (r.s_globalSingletonStore = new r())),
            r.s_globalSingletonStore
          );
        }
        constructor() {
          this.m_HomeView = void 0;
          const e = (0, i.Tc)("home_view_setting", "application_config");
          this.ValidateHomeViewData(e) && this.SetHomeViewSetting(e);
          const t = (0, i.Tc)(
            "home_view_setting_override",
            "application_config",
          );
          this.ValidateHomeViewDataOverride(t) &&
            this.SetHomeViewSettingOverride(t);
        }
        ValidateHomeViewData(e) {
          const t = e;
          return (
            t && "object" == typeof t.home && "object" == typeof t.main_cluster
          );
        }
        SetHomeViewSetting(e) {
          this.m_HomeView = e;
        }
        ValidateHomeViewDataOverride(e) {
          const t = e;
          return (
            t &&
            (!t.all || "object" == typeof t.all) &&
            (!t.maincap || "object" == typeof t.maincap)
          );
        }
        SetHomeViewSettingOverride(e) {
          this.m_HomeView
            ? (this.m_HomeView.home = {
                ...this.m_HomeView.home,
                ...(null == e ? void 0 : e.all),
                ...(null == e ? void 0 : e.maincap),
              })
            : (this.m_HomeView = {
                home: {
                  ...(null == e ? void 0 : e.all),
                  ...(null == e ? void 0 : e.maincap),
                },
              });
        }
      }
    },
    46067: (e, t, n) => {
      "use strict";
      n.d(t, { dP: () => M, v0: () => H, Zr: () => R });
      var s,
        i = n(34629),
        r = n(41735),
        a = n.n(r),
        o = n(14947),
        l = n(19367),
        d = n.n(l),
        c = n(37085),
        u = n(47822),
        m = n(91397),
        p = n(41838),
        h = n(49783),
        _ = n(17720),
        g = n(91254),
        v = n(16021),
        y = n(99032),
        I = n(81393),
        S = n(68797),
        f = n(6419),
        C = n(61859),
        E = n(78327),
        w = n(30894),
        k = n(46910);
      !(function (e) {
        (e.Default = "default"),
          (e.Upcoming = "upcoming"),
          (e.Featured = "featured"),
          (e.Press = "press"),
          (e.Steam = "steam"),
          (e.Halloween = "halloween"),
          (e.Dev_Sales = "sales"),
          (e.Dev_All = "all"),
          (e.Dev_AssociatedPress = "associated_press");
      })(s || (s = {}));
      new Map();
      var G = n(44165),
        A = n(1059);
      function B(e, t, n, s) {
        return {
          strId: "section-" + t,
          strSectionLabel: t,
          rtSectionStart: n,
          rtSectionEnd: s,
          bIsFutureSection: n >= e,
          nRenderedHeight: 2500,
          nTopOffset: 0,
        };
      }
      class b {
        constructor(e, t) {
          (this.m_nForwardStuckCount = 0),
            (this.m_nBackwardStuckCount = 0),
            (this.m_mapCalendarAppsByID = new Map()),
            (this.m_mapCalendarClansByID = new Map()),
            (this.m_mapCalendarEventsByGid = new Map()),
            (this.m_rgSortedCalendarEvents = new Array()),
            (this.m_currentView = o.sH.box(void 0)),
            (this.m_bFinishedSearchingForward = !1),
            (this.m_bFinishedSearchingBackward = !1),
            (this.m_rgCalendarSections = []),
            (this.m_rgFutureSections = []),
            (this.m_forwardRequestInFlight = null),
            (this.m_backwardRequestInFlight = null),
            (this.m_collectionMetaData = void 0),
            (0, o.Gn)(this),
            (this.m_key = e),
            (this.m_visibilityStore = new k.vJ(t)),
            w.Fm.Get().HintLoad();
        }
        GetNumEventsLoaded() {
          return this.m_mapCalendarEventsByGid.size;
        }
        BIsGlobalCalendar() {
          return !(
            this.m_key.appids ||
            this.m_key.clanaccountids ||
            this.m_key.collectionid ||
            this.m_key.saleid
          );
        }
        BIsShowingFeaturedFeed() {
          return Boolean(
            this.GetCollectionID() === s.Featured ||
              (this.BIsGlobalCalendar() && !E.iA.accountid),
          );
        }
        BIsSingleSourceCalendar() {
          return Boolean(
            this.BIsSingleGroupCalendar()
              ? !this.BIsSingleAppCalendar()
              : this.BIsSingleAppCalendar(),
          );
        }
        GetKey() {
          return this.m_key;
        }
        BEventMatchCalendarSingleSource(e) {
          var t, n;
          return (
            (this.BIsSingleAppCalendar() &&
              (null === (t = this.m_key.appids) || void 0 === t
                ? void 0
                : t[0]) == e.appid) ||
            (this.BIsSingleGroupCalendar() &&
              (null === (n = this.m_key.clanaccountids) || void 0 === n
                ? void 0
                : n[0]) == e.clanid)
          );
        }
        BIsSingleSourceMuted() {
          if (!this.BIsSingleSourceCalendar()) return !1;
          if (this.BIsSingleAppCalendar()) {
            const e = this.GetSingleAppID();
            return void 0 !== e && A.S.Get().BIsMutedAppID(e);
          }
          const e = this.GetSingleGroupID();
          return void 0 !== e && A.S.Get().BIsMutedClanID(e);
        }
        BIsSingleGroupCalendar() {
          return Boolean(
            this.m_key.clanaccountids && 1 == this.m_key.clanaccountids.length,
          );
        }
        GetSingleGroupID() {
          var e;
          return null === (e = this.m_key.clanaccountids) || void 0 === e
            ? void 0
            : e[0];
        }
        BIsSingleAppCalendar() {
          return Boolean(this.m_key.appids && 1 == this.m_key.appids.length);
        }
        GetSingleAppID() {
          var e;
          return null === (e = this.m_key.appids) || void 0 === e
            ? void 0
            : e[0];
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
          return Boolean(this.m_collectionMetaData);
        }
        ValidateCollectionMetadata(e) {
          const t = e;
          return Boolean(
            t &&
              "object" == typeof t &&
              t.clanid &&
              "number" == typeof t.clanid &&
              t.clan_event_gid &&
              "string" == typeof t.clan_event_gid,
          );
        }
        SetFilteredView(e, t) {
          const n = this.m_currentView.get();
          n && n.dispose();
          const s = this.BIsSingleSourceMuted(),
            i = new D(
              () => this.m_rgSortedCalendarEvents,
              this.LoadAdditionalEvents,
              this.BHitEventHorizon,
              e,
              Boolean(t),
              s,
            );
          this.m_currentView.set(i);
        }
        BIsFilteredViewEmpty() {
          var e;
          return !!(null === (e = this.m_currentView.get()) || void 0 === e
            ? void 0
            : e.BIsViewEmpty());
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
          var n, s;
          return null !==
            (s =
              null === (n = this.m_currentView.get()) || void 0 === n
                ? void 0
                : n.GetCurrentlyLoadedEventCount(e, t)) && void 0 !== s
            ? s
            : { nCount: 0, bIsComplete: !1 };
        }
        GetCurrentlyLoadedItemsForStats() {
          var e;
          return (
            (null === (e = this.m_currentView.get()) || void 0 === e
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
              (this.m_dtInitTime = G.HD.GetTimeNowWithOverrideAsDate()),
            this.m_dtInitTime
          );
        }
        InitCalendarSections() {
          const e = this.GetStoreInitializationTimestamp(),
            t = [],
            n = e.getTime() / 1e3;
          t.push(B(n, (0, C.we)("#EventCalendar_FutureEventsHeader"), n));
          const s = new Date(e);
          s.setHours(0, 0, 0, 1);
          let i = s.getTime() / 1e3;
          t.push(B(n, (0, C.we)("#Time_Today"), i, n)),
            s.setDate(s.getDate() - 1);
          let r = i;
          (i = s.getTime() / 1e3),
            t.push(B(n, (0, C.we)("#Time_Yesterday"), i, r));
          const a =
              this.m_rgSortedCalendarEvents[
                this.m_rgSortedCalendarEvents.length - 1
              ],
            o = a ? a.start_time : n;
          let l = o > i;
          for (let e = 0; e < 5 && !l; e++)
            s.setDate(s.getDate() - 1),
              (r = i),
              (i = s.getTime() / 1e3),
              t.push(B(n, (0, C.cc)(s), i, r)),
              (l = o > i);
          const d = new Date(s);
          let c = i;
          for (; d.getMonth() == e.getMonth() && 1 != d.getDate() && !l; ) {
            d.setDate(d.getDate() - 7);
            const e = d.getTime() / 1e3;
            t.push(B(n, (0, C.lQ)(c - 1), e, c)), (l = o > e), (c = e);
          }
          const u = new Date(e);
          u.setHours(0, 0, 0, 1), u.setDate(1);
          let m = c;
          for (let s = 1; !l; s++) {
            const i = new Date(u);
            i.setMonth(e.getMonth() - s, 1);
            const r = i.getTime() / 1e3;
            t.push(B(n, (0, C.lQ)(r), r, m)), (l = o > r), (m = r);
          }
          this.m_rgCalendarSections.length > t.length
            ? this.m_rgCalendarSections.splice(
                t.length,
                this.m_rgCalendarSections.length,
              )
            : t
                .splice(this.m_rgCalendarSections.length, t.length)
                .forEach((e) => this.m_rgCalendarSections.push(e));
        }
        InitFutureCalendarSections() {
          const e = this.GetStoreInitializationTimestamp(),
            t = [];
          let n;
          this.m_key.rtCalendarEnd && (n = this.m_key.rtCalendarEnd);
          const s = this.m_rgSortedCalendarEvents[0];
          s && (n = s.start_time), n || (n = e.getTime() / 1e3);
          const i = e.getTime() / 1e3,
            r = new Date(e);
          r.setHours(24, 0, 0, 0);
          let a = r.getTime() / 1e3;
          t.push(
            B(
              i,
              (0, C.we)(
                this.m_key.bSectionByDay ? "#Time_UpNext" : "#Time_Today",
              ),
              i,
              a,
            ),
          );
          let o = n <= a,
            l = a;
          r.setDate(r.getDate() + 1),
            (a = r.getTime() / 1e3),
            o || t.push(B(i, (0, C.we)("#Time_Tomorrow"), l, a)),
            (o = n <= a);
          const c = 6 - d()(e).weekday();
          for (let e = 2; e <= c && !o; e++) {
            l = a;
            const e = (0, C.cc)(r);
            r.setDate(r.getDate() + 1),
              (a = r.getTime() / 1e3),
              t.push(B(i, e, l, a)),
              (o = n <= a);
          }
          if (this.m_key.bSectionByDay)
            for (; !o; ) {
              l = a;
              const e = (0, C.$w)(r);
              r.setDate(r.getDate() + 1),
                (a = r.getTime() / 1e3),
                t.push(B(i, e, l, a)),
                (o = n <= a);
            }
          else {
            const s = new Date(r);
            let l = a;
            const c = d()(e).daysInMonth();
            if (s.getMonth() == e.getMonth() && s.getDate() != c && !o) {
              s.setDate(s.getDate() + 7);
              const e = s.getTime() / 1e3;
              t.push(B(i, (0, C.we)("#EventCalendar_NextWeek"), l, e)),
                (o = n <= e),
                (l = e);
            }
            const u = new Date(e);
            let m;
            if (
              (u.setMonth(u.getMonth() + 1),
              u.setDate(1),
              u.setHours(0, 0, 0, 0),
              s < u && !o)
            ) {
              const e = u.getTime() / 1e3;
              t.push(B(i, (0, C.we)("#EventCalendar_LaterThisMonth"), l, e)),
                (o = n <= e),
                (m = e);
            } else m = l;
            for (let s = 2; !o; s++) {
              const r = new Date(u);
              r.setMonth(e.getMonth() + s);
              const a = r.getTime() / 1e3;
              t.push(B(i, (0, C.lQ)(m), m, a)), (o = n <= a), (m = a);
            }
          }
          this.m_rgFutureSections.length > t.length
            ? this.m_rgFutureSections.splice(
                t.length,
                this.m_rgFutureSections.length,
              )
            : t
                .splice(this.m_rgFutureSections.length, t.length)
                .forEach((e) => this.m_rgFutureSections.push(e));
        }
        async RegisterCalendarEventsAndModels(e) {
          await w.Fm.Get().HintLoad(),
            (0, o.h5)(() => {
              var t, n, s, i, r, a;
              this.RegisterCalendarApps(
                null !== (t = e.apps) && void 0 !== t ? t : [],
              ),
                this.RegisterCalendarClans(
                  null !== (n = e.clans) && void 0 !== n ? n : [],
                ),
                this.RegisterCalendarEvents(
                  null !== (s = e.documents) && void 0 !== s ? s : [],
                ),
                g.O3.RegisterClanEvents(
                  null !== (i = e.events) && void 0 !== i ? i : [],
                ),
                this.RegisterReadEvents(
                  null !== (r = e.events_read) && void 0 !== r ? r : [],
                ),
                this.RegisterEventVotes(
                  null !== (a = e.event_votes) && void 0 !== a ? a : [],
                ),
                e.forwardComplete && (this.m_bFinishedSearchingForward = !0),
                e.backwardComplete && (this.m_bFinishedSearchingBackward = !0),
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
              const e = new u.dF();
              (e.appid = t.appid),
                (e.source = t.source),
                (e.playtime = t.playtime),
                (e.last_played = t.last_played),
                (e.wishlist_added = t.wishlist_added),
                this.m_mapCalendarAppsByID.set(t.appid, e),
                t.hidden &&
                  this.m_visibilityStore.SetAppVisibility(t.appid, !1);
            }
        }
        RegisterCalendarClans(e) {
          if (e)
            for (const t of e)
              if (!this.m_mapCalendarClansByID.has(t.clanid)) {
                const e = new u.w2();
                (e.clanid = t.clanid),
                  (e.source = t.source),
                  this.m_mapCalendarClansByID.set(t.clanid, e),
                  t.hidden &&
                    this.m_visibilityStore.SetClanVisibility(t.clanid, !1);
              }
        }
        RegisterReadEvents(e) {
          e && (0, m.No)(e);
        }
        RegisterEventVotes(e) {
          e &&
            (0, p.mc)(
              e.map((e) => ({
                gidAnnouncement: e.id,
                vote: void 0 === e.vote ? null : e.vote ? "up" : "down",
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
          return "forward" == e
            ? this.m_bFinishedSearchingForward
            : this.m_bFinishedSearchingBackward;
        }
        GetTimeEdgeForDirection(e, t = void 0) {
          return "forward" === e
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
              "forward" === e
                ? this.m_bFinishedSearchingForward
                : this.m_bFinishedSearchingBackward,
            s = this.GetTimeEdgeForDirection(e, void 0);
          return n || s !== t
            ? ("forward" == e
                ? (this.m_nForwardStuckCount = 0)
                : (this.m_nBackwardStuckCount = 0),
              !1)
            : ("forward" == e
                ? this.m_nForwardStuckCount++
                : this.m_nBackwardStuckCount++,
              !0);
        }
        GetRequestInFlight(e) {
          return "forward" === e
            ? this.m_forwardRequestInFlight
            : this.m_backwardRequestInFlight;
        }
        SetRequestInFlight(e, t) {
          (0, I.wT)(
            !t || !this.GetRequestInFlight(e),
            "Already have a request in flight for",
            e,
          ),
            "forward" === e
              ? (this.m_forwardRequestInFlight = t)
              : (this.m_backwardRequestInFlight = t);
        }
        async LoadAdditionalEvents(e, t) {
          var n, s, i;
          if (this.BHitEventHorizon(e)) return c.R;
          let r = this.GetRequestInFlight(e);
          if (r) return r;
          const o =
              E.TS.STORE_BASE_URL + "events/ajaxgetusereventcalendarrange/",
            l =
              "forward" === e
                ? this.m_nForwardStuckCount
                : this.m_nBackwardStuckCount,
            d = l >= 3 ? 1 : 0,
            u = 250 + 50 * (l < 3 ? l : 0),
            m = G.HD.GetTimeNowWithOverride(),
            p =
              null !== (n = this.GetTimeEdgeForDirection(e, m)) && void 0 !== n
                ? n
                : m,
            h = {
              minTime: 0,
              maxTime: 0,
              ascending: !0,
              maxResults: u,
              populateEvents: 15,
              appTypes: this.m_visibilityStore.GetGameSources().join(","),
              eventTypes: Array.from(
                this.m_visibilityStore.enabledEventTypeSet,
              ).join(","),
              appIdFilter: (
                null === (s = this.m_key.appids) || void 0 === s
                  ? void 0
                  : s.length
              )
                ? this.m_key.appids.sort().join(",")
                : void 0,
              clanIdFilter: (
                null === (i = this.m_key.clanaccountids) || void 0 === i
                  ? void 0
                  : i.length
              )
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
          "forward" === e
            ? ((h.minTime = Math.floor(p + d)), (h.ascending = !0))
            : ((h.maxTime = Math.floor(p - d)), (h.ascending = !1));
          return (
            (r = a()
              .get(o, {
                params: h,
                cancelToken: t ? t.token : void 0,
                withCredentials: !0,
              })
              .then(async (n) => {
                if ((this.SetRequestInFlight(e, null), n.data.success == c.R)) {
                  if (
                    (await this.RegisterCalendarEventsAndModels(n.data),
                    this.UpdateStuckCounters(e, p))
                  )
                    return this.LoadAdditionalEvents(e, t);
                } else
                  console.error(
                    "LoadAdditionalEvents was not successful: Msg" + n.data.msg,
                  );
                return n.data.success;
              })
              .catch((t) => {
                this.SetRequestInFlight(e, null);
                let n = (0, S.H)(t);
                return (
                  console.error(
                    "LoadAdditionalEvents hit error " + n.strErrorMsg,
                    n,
                  ),
                  "forward" == e
                    ? (this.m_bFinishedSearchingForward = !0)
                    : (this.m_bFinishedSearchingBackward = !0),
                  c.zi
                );
              })),
            this.SetRequestInFlight(e, r),
            r
          );
        }
        BInternalInsertCalendarEventItem(e) {
          if (!e.unique_id)
            return (
              (0, I.wT)(
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
          const s = new u.NK();
          return (
            (s.clanid = e.clanid),
            (s.unique_id = e.unique_id),
            (s.event_type = e.event_type),
            (s.appid = e.appid),
            (s.start_time = e.start_time),
            (s.score = e.score),
            (s.appInfo = t),
            (s.clanInfo = n),
            this.m_rgSortedCalendarEvents.push(s),
            this.m_mapCalendarEventsByGid.set(s.unique_id, s),
            !0
          );
        }
        GetCalendarAppInfoForAppID(e) {
          return this.m_mapCalendarAppsByID.get(e);
        }
        RebuildSortedCalendarEventList() {
          const e = this.m_rgSortedCalendarEvents.slice();
          this.m_rgSortedCalendarEvents = e.sort(
            (e, t) => t.start_time - e.start_time,
          );
        }
        async UpdateEventBlockFromCalendarEvent(e, t) {
          const n = e.appInfo ? e.appid : void 0,
            s = e.clanInfo ? e.clanInfo.clanid : void 0;
          null != n || null != s
            ? (await A.S.Get().UpdateCommunicationSetting(t, n, s),
              (0, h.EG)(h.Eg.k_eMuted))
            : (0, I.wT)(
                !1,
                "Both clan id and account id are missing, cannot change communication status",
              );
        }
        GetAllClans() {
          return Array.from(this.m_mapCalendarClansByID.keys());
        }
        GetAllApps() {
          return Array.from(this.m_mapCalendarAppsByID.keys());
        }
      }
      (0, i.Cg)([o.sH], b.prototype, "m_mapCalendarAppsByID", void 0),
        (0, i.Cg)([o.sH], b.prototype, "m_mapCalendarClansByID", void 0),
        (0, i.Cg)([o.sH], b.prototype, "m_mapCalendarEventsByGid", void 0),
        (0, i.Cg)([o.sH], b.prototype, "m_rgSortedCalendarEvents", void 0),
        (0, i.Cg)([o.sH], b.prototype, "m_bFinishedSearchingForward", void 0),
        (0, i.Cg)([o.sH], b.prototype, "m_bFinishedSearchingBackward", void 0),
        (0, i.Cg)([o.sH], b.prototype, "m_rgCalendarSections", void 0),
        (0, i.Cg)([o.sH], b.prototype, "m_rgFutureSections", void 0),
        (0, i.Cg)([o.sH], b.prototype, "m_collectionMetaData", void 0),
        (0, i.Cg)([o.XI], b.prototype, "InitCalendarSections", null),
        (0, i.Cg)([o.XI], b.prototype, "InitFutureCalendarSections", null),
        (0, i.Cg)([o.XI], b.prototype, "RegisterCalendarEventsAndModels", null),
        (0, i.Cg)([o.XI], b.prototype, "RegisterCalendarApps", null),
        (0, i.Cg)([o.XI], b.prototype, "RegisterCalendarClans", null),
        (0, i.Cg)([o.XI], b.prototype, "RegisterCalendarEvents", null),
        (0, i.Cg)([f.o], b.prototype, "BHitEventHorizon", null),
        (0, i.Cg)([o.XI.bound], b.prototype, "LoadAdditionalEvents", null),
        (0, i.Cg)(
          [o.XI],
          b.prototype,
          "UpdateEventBlockFromCalendarEvent",
          null,
        );
      class D {
        constructor(e, t, n, s, i, r) {
          (this.m_rgLoadedEventsBox = o.sH.box([])),
            (this.m_lastLoadLatch = null),
            (0, o.Gn)(this),
            (this.m_fnGetUnfilteredEvents = e),
            (this.m_fnLoadAdditionalEvents = t),
            (this.m_fnBHitEventHorizon = n),
            (this.m_fnBIsEventInView = s),
            (this.m_bSkipStorePreferenceCheck = i),
            (this.m_bAllowMutedAndIgnoredSources = r),
            (this.m_rgAutorunDisposer = (0, o.fm)(async () => {
              const e = this.viewFilteredEvents.slice();
              if (!this.m_bSkipStorePreferenceCheck) {
                const t = Array.from(
                  new Set(e.map((e) => e.appid).filter(Boolean)),
                ).sort();
                if (
                  ((this.m_lastLoadLatch = e),
                  await v.A.Get().QueueMultipleAppRequests(t, {
                    ...y.jy,
                    include_assets: !0,
                  }),
                  this.m_lastLoadLatch != e)
                )
                  return;
                this.m_lastLoadLatch = null;
              }
              this.m_rgLoadedEventsBox.set(e);
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
          return this.m_rgLoadedEventsBox.get().filter((e) => {
            if (e.appid) {
              if (
                !this.m_bAllowMutedAndIgnoredSources &&
                (A.S.Get().BIsMutedAppID(e.appid) ||
                  w.Fm.Get().BIsGameIgnored(e.appid))
              )
                return !1;
              if (
                !this.m_bSkipStorePreferenceCheck &&
                (0, y.Li)(v.A.Get().GetApp(e.appid))
              )
                return !1;
            } else if (
              !this.m_bAllowMutedAndIgnoredSources &&
              (A.S.Get().BIsMutedClanID(e.clanid) ||
                w.Fm.Get().BIsIgnoringCurator(_.b.InitFromClanID(e.clanid)))
            )
              return !1;
            return !0;
          });
        }
        BIsCompleteThroughTime(e, t) {
          if (this.m_fnBHitEventHorizon(e)) return !0;
          const n = this.m_fnGetUnfilteredEvents();
          return "forward" === e
            ? !!t && n.length > 0 && n[0].start_time > t
            : void 0 !== t && n.length > 0 && n[n.length - 1].start_time < t;
        }
        async EnsureRangeIsLoaded(e, t) {
          for (
            let e = 0;
            e < 100 && !this.BIsCompleteThroughTime("forward", t);
            e++
          )
            await this.m_fnLoadAdditionalEvents("forward");
          for (
            let t = 0;
            t < 100 && !this.BIsCompleteThroughTime("backward", e);
            t++
          )
            await this.m_fnLoadAdditionalEvents("backward");
        }
        GetCalendarItemsInTimeRange(e, t) {
          this.EnsureRangeIsLoaded(e, t);
          const n = this.filteredAndCheckedEvents.filter(
              (n) => n.start_time >= e && (!t || n.start_time < t),
            ),
            s = this.BIsCompleteThroughTime("forward", t),
            i = this.BIsCompleteThroughTime("backward", e);
          return { rgCalendarItems: n, bIsComplete: s && i };
        }
        GetCurrentlyLoadedEvents() {
          return this.filteredAndCheckedEvents;
        }
        GetCurrentlyLoadedEventCount(e, t) {
          let n = 0;
          this.filteredAndCheckedEvents.forEach((s) => {
            s.start_time >= e && (!t || s.start_time < t) && n++;
          });
          const s = this.BIsCompleteThroughTime("forward", t),
            i = this.BIsCompleteThroughTime("backward", e);
          return { nCount: n, bIsComplete: s && i };
        }
        BIsViewEmpty() {
          return this.filteredAndCheckedEvents.length > 0;
        }
        GetActiveEventsAt(e) {
          return this.filteredAndCheckedEvents
            .map((e) => g.O3.GetClanEventModel(e.unique_id))
            .filter((t) => {
              if (!t || void 0 === t.startTime) return !1;
              const n = t.endTime || t.startTime + 3600;
              return e >= t.startTime && e < n;
            });
        }
      }
      (0, i.Cg)([o.EW.struct], D.prototype, "viewFilteredEvents", null),
        (0, i.Cg)([o.EW.struct], D.prototype, "filteredAndCheckedEvents", null);
      const T = o.sH.box(null),
        F = new Map();
      function R(e, t) {
        let n = "";
        return (
          e.appids &&
            e.appids.length > 0 &&
            (n += "appids:" + e.appids.sort().join(",")),
          e.clanaccountids &&
            e.clanaccountids.length > 0 &&
            (n += "clanids:" + e.clanaccountids.sort().join(",")),
          e.collectionid && (n += "collection:" + e.collectionid),
          e.saleid && (n += "sale:" + e.saleid),
          e.bSectionByDay && (n += "_sectionbyday"),
          e.rtCalendarEnd && (n += "_end:" + e.rtCalendarEnd),
          e.rgTags &&
            e.rgTags.length > 0 &&
            (n += "_tags:" + e.rgTags.slice().sort().join(",")),
          e.hubtype &&
            (n +=
              "_hubtype:" +
              e.hubtype +
              "_" +
              e.category_or_language +
              "_" +
              e.tag_name),
          T.get() !== n && (T.set(n), F.has(n) || F.set(n, new b(e, t))),
          n
        );
      }
      function H() {
        let e = T.get();
        return null == e && (e = R({})), F.get(e);
      }
      function M() {
        return null !== T.get();
      }
      window.g_EventCalendarMap = F;
    },
    46910: (e, t, n) => {
      "use strict";
      n.d(t, { FD: () => s, vJ: () => f });
      var s,
        i = n(34629),
        r = n(14947),
        a = n(22837),
        o = n(47822),
        l = n(81393),
        d = n(78327),
        c = n(49783),
        u = n(7860),
        m = n(44165),
        p = n(50140);
      !(function (e) {
        (e.k_ERecent = "recent"),
          (e.k_ELibrary = "library"),
          (e.k_EWishlist = "wishlist"),
          (e.k_EFollowing = "following"),
          (e.k_ERecommended = "recommended"),
          (e.k_ESteam = "steam"),
          (e.k_EFeatured = "featured"),
          (e.k_ECurator = "curator");
      })(s || (s = {}));
      const h = [
          s.k_ELibrary,
          s.k_EWishlist,
          s.k_EFollowing,
          s.k_ERecommended,
          s.k_ESteam,
          s.k_ECurator,
        ],
        _ = [...h, s.k_EFeatured],
        g = [s.k_EFeatured];
      var v;
      !(function (e) {
        (e.k_ENews = "news"),
          (e.k_EEvents = "events"),
          (e.k_EStreaming = "streaming"),
          (e.k_EUpdates = "updates"),
          (e.k_EReleases = "releases"),
          (e.k_ESales = "sales");
      })(v || (v = {}));
      const y = [
          v.k_ENews,
          v.k_EEvents,
          v.k_EStreaming,
          v.k_EUpdates,
          v.k_EReleases,
          v.k_ESales,
        ],
        I = new Map([
          [v.k_ENews, [a.uYK]],
          [v.k_EEvents, [a.L0X, a.I5b, a.zA, a.y6, a.hGl, a.WNR, a.pIh, a.izQ]],
          [v.k_EStreaming, [a.KDJ]],
          [v.k_EUpdates, [a.Fwr, a.u0, a.zeJ]],
          [v.k_EReleases, [a.yhO, a.Aqr, a.DEQ, a.f4X, a.zcX]],
          [v.k_ESales, [a.HRy, a.C$4, a.LOv, a.HFK]],
        ]);
      function S(e) {
        return new Map(e.map((e) => [e, !0]));
      }
      class f {
        constructor(e) {
          (this.m_mapEventTypeGroupsAllowed = new Map()),
            (this.m_mapGameSources = new Map()),
            (this.m_bCuratorUnhideOnFollowDialogDismissed = !1),
            (this.m_mapHiddenApps = new Map()),
            (this.m_mapHiddenClans = new Map()),
            (this.m_bInitializedForUpdatesOnly = !1),
            (this.m_eStorageType = "session"),
            (0, r.Gn)(this),
            (0, r.h5)(() => {
              (null == e ? void 0 : e.rgHiddenApps) &&
                e.rgHiddenApps.forEach((e) => this.m_mapHiddenApps.set(e, !0)),
                (null == e ? void 0 : e.rgHiddenClans) &&
                  e.rgHiddenClans.forEach((e) =>
                    this.m_mapHiddenClans.set(e, !0),
                  );
            });
        }
        GetGameSources() {
          return Array.from(this.m_mapGameSources.keys());
        }
        GetStorageObject() {
          return this.m_strStorageKey
            ? "session" === this.m_eStorageType
              ? window.sessionStorage
              : window.localStorage
            : null;
        }
        GetPreferencesStorageKey() {
          return `${this.m_strStorageKey}-event-calendar-prefs`;
        }
        get enabledEventTypeSet() {
          var e;
          const t = new Set();
          for (const n of Array.from(this.m_mapEventTypeGroupsAllowed.keys()))
            null === (e = I.get(n)) ||
              void 0 === e ||
              e.forEach((e) => t.add(e));
          return t;
        }
        MapClanEventTypeToGroup(e) {
          let t;
          return (
            I.forEach((n, s) => {
              -1 !== n.indexOf(e) && (t = s);
            }),
            t || v.k_EEvents
          );
        }
        InitDefaultCheckboxes(e, t, n) {
          (this.m_bInitializedForUpdatesOnly = t),
            (this.m_mapEventTypeGroupsAllowed = S(t ? [v.k_EUpdates] : y));
          const i = (0, d.Y2)() ? _ : h;
          (this.m_mapGameSources = S(e ? i : g)),
            n && this.m_mapGameSources.set(s.k_EFeatured, !0);
        }
        Init(e, t, n, s, i) {
          (this.m_eStorageType = i), (this.m_strStorageKey = s);
          const r = this.GetStorageObject(),
            a = r ? r.getItem(this.GetPreferencesStorageKey()) : null;
          if (a) {
            const e = JSON.parse(a);
            if (e.rgEventTypeGroupsAllowed && e.rgGameSources) {
              const { rgEventTypeGroupsAllowed: t, rgGameSources: n } = e;
              return (
                (this.m_mapEventTypeGroupsAllowed = S(t)),
                (this.m_mapGameSources = S(n)),
                void (
                  void 0 !== e.bCuratorUnhideOnFollowDismissed &&
                  (this.m_bCuratorUnhideOnFollowDialogDismissed =
                    e.bCuratorUnhideOnFollowDismissed)
                )
              );
            }
          }
          this.InitDefaultCheckboxes(e, t, n);
        }
        SaveFilterPreferences() {
          const e = this.GetStorageObject();
          if (!e) return;
          const t = {
            rgEventTypeGroupsAllowed: Array.from(
              this.m_mapEventTypeGroupsAllowed.keys(),
            ),
            rgGameSources: Array.from(this.m_mapGameSources.keys()),
            bCuratorUnhideOnFollowDismissed:
              this.m_bCuratorUnhideOnFollowDialogDismissed,
          };
          e.setItem(this.GetPreferencesStorageKey(), JSON.stringify(t));
        }
        RecordFilterChange() {
          let e = 0;
          this.BIsGameSourceAllowed(s.k_ELibrary) && (e |= 1),
            this.BIsGameSourceAllowed(s.k_EWishlist) && (e |= 2),
            this.BIsGameSourceAllowed(s.k_EFollowing) && (e |= 4),
            this.BIsGameSourceAllowed(s.k_ERecommended) && (e |= 8),
            this.BIsGameSourceAllowed(s.k_ESteam) && (e |= 16),
            this.BIsGameSourceAllowed(s.k_EFeatured) && (e |= 32),
            this.BIsGameSourceAllowed(s.k_ERecent) && (e |= 64),
            this.BIsEventTypeGroupAllowed(v.k_ENews) && (e |= 1024),
            this.BIsEventTypeGroupAllowed(v.k_EEvents) && (e |= 2048),
            this.BIsEventTypeGroupAllowed(v.k_EStreaming) && (e |= 4096),
            this.BIsEventTypeGroupAllowed(v.k_EUpdates) && (e |= 8192),
            this.BIsEventTypeGroupAllowed(v.k_EReleases) && (e |= 16384),
            this.BIsEventTypeGroupAllowed(v.k_ESales) && (e |= 32768),
            (0, c.m4)(u.L, e);
        }
        BCuratorUnhideOnFollowDialogDismissed() {
          return this.m_bCuratorUnhideOnFollowDialogDismissed;
        }
        SetCuratorUnhideOnFollowDialogDismissed(e) {
          (this.m_bCuratorUnhideOnFollowDialogDismissed = e),
            this.SaveFilterPreferences();
        }
        BIsEventTypeGroupAllowed(e) {
          return this.m_mapEventTypeGroupsAllowed.has(e);
        }
        BIsGameSourceAllowed(e) {
          return (
            !(e === s.k_EFollowing && !(0, p.xU)()) &&
            !(e === s.k_ECurator && !(0, p.Us)()) &&
            this.m_mapGameSources.has(e)
          );
        }
        SetEventTypeGroupAllowed(e, t) {
          t
            ? this.m_mapEventTypeGroupsAllowed.set(e, !0)
            : this.m_mapEventTypeGroupsAllowed.delete(e),
            this.SaveFilterPreferences(),
            this.RecordFilterChange();
        }
        SetGameSourceAllowed(e, t) {
          t
            ? (this.m_mapGameSources.set(e, !0),
              e == s.k_ERecent
                ? this.m_mapGameSources.delete(s.k_ELibrary)
                : e == s.k_ELibrary &&
                  ((0, l.wT)(
                    !this.m_mapGameSources.has(s.k_ERecent),
                    "Setting Library although Recent already set - illusion was broken",
                  ),
                  this.m_mapGameSources.delete(s.k_ERecent)))
            : (this.m_mapGameSources.delete(e),
              e == s.k_ERecent
                ? this.m_mapGameSources.set(s.k_ELibrary, !0)
                : e == s.k_ELibrary &&
                  this.m_mapGameSources.delete(s.k_ERecent)),
            this.SaveFilterPreferences(),
            this.RecordFilterChange();
        }
        BShouldDisplayEvent(e) {
          const t = e.GetSource(),
            n = Boolean(
              e.appInfo &&
                e.appInfo.last_played &&
                e.appInfo.last_played + 15552e3 >=
                  m.HD.GetTimeNowWithOverride(),
            );
          return (
            !!(
              this.enabledEventTypeSet.has(e.event_type) ||
              (this.m_bInitializedForUpdatesOnly &&
                this.BIsEventTypeGroupAllowed(v.k_EUpdates) &&
                e.event_type == a.uYK &&
                e.start_time < 1599202800)
            ) &&
            !this.m_mapHiddenApps.has(e.appid) &&
              !this.m_mapHiddenClans.has(e.clanid) &&
            (!!(t & o.bK.k_eRequired || t & o.bK.k_eReposted) ||
              Boolean(
                (this.BIsGameSourceAllowed(s.k_ERecent) && n) ||
                  (this.BIsGameSourceAllowed(s.k_ELibrary) &&
                    t & o.bK.k_eLibrary) ||
                  (this.BIsGameSourceAllowed(s.k_EWishlist) &&
                    t & o.bK.k_eWishlist) ||
                  (this.BIsGameSourceAllowed(s.k_EFollowing) &&
                    t & o.bK.k_eFollowing) ||
                  (this.BIsGameSourceAllowed(s.k_ERecommended) &&
                    t & o.bK.k_eRecommended) ||
                  (this.BIsGameSourceAllowed(s.k_ESteam) &&
                    t & o.bK.k_eSteam) ||
                  (this.BIsGameSourceAllowed(s.k_EFeatured) &&
                    t & o.bK.k_eFeatured) ||
                  (this.BIsGameSourceAllowed(s.k_ECurator) &&
                    t & o.bK.k_eCurator),
              ))
          );
        }
        BAreAllEventsHidden() {
          return (
            0 == this.m_mapEventTypeGroupsAllowed.size ||
            0 == this.m_mapGameSources.size
          );
        }
        BAreAnyEventsFiltered(e) {
          const t = (0, d.Y2)() ? _ : h;
          return (
            (e ? t : g).some((e) => !this.BIsGameSourceAllowed(e)) ||
            y.some((e) => !this.BIsEventTypeGroupAllowed(e))
          );
        }
        BIsClanVisible(e) {
          return !this.m_mapHiddenClans.has(e);
        }
        SetClanVisibility(e, t) {
          t
            ? this.m_mapHiddenClans.has(e) && this.m_mapHiddenClans.delete(e)
            : this.m_mapHiddenClans.has(e) || this.m_mapHiddenClans.set(e, !0);
        }
        BIsAppVisible(e) {
          return !this.m_mapHiddenApps.has(e);
        }
        SetAppVisibility(e, t) {
          t
            ? this.m_mapHiddenApps.has(e) && this.m_mapHiddenApps.delete(e)
            : this.m_mapHiddenApps.has(e) || this.m_mapHiddenApps.set(e, !0);
        }
      }
      (0, i.Cg)([r.sH], f.prototype, "m_mapEventTypeGroupsAllowed", void 0),
        (0, i.Cg)([r.sH], f.prototype, "m_mapGameSources", void 0),
        (0, i.Cg)(
          [r.sH],
          f.prototype,
          "m_bCuratorUnhideOnFollowDialogDismissed",
          void 0,
        ),
        (0, i.Cg)([r.sH], f.prototype, "m_mapHiddenApps", void 0),
        (0, i.Cg)([r.sH], f.prototype, "m_mapHiddenClans", void 0),
        (0, i.Cg)(
          [(0, r.EW)({ keepAlive: !0, equals: r.m3.structural })],
          f.prototype,
          "enabledEventTypeSet",
          null,
        ),
        (0, i.Cg)([r.XI], f.prototype, "SetEventTypeGroupAllowed", null),
        (0, i.Cg)([r.XI], f.prototype, "SetGameSourceAllowed", null);
    },
    73964: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => d });
      var s = n(41735),
        i = n.n(s),
        r = n(78327),
        a = n(91254),
        o = n(70078),
        l = n(37085);
      class d extends a.ZQ {
        async DeleteOldAnnouncement(e, t) {
          let n = new URLSearchParams();
          n.append("sessionid", (0, r.KC)());
          let s =
              r.TS.COMMUNITY_BASE_URL +
              "/gid/" +
              e.ConvertTo64BitString() +
              "/announcements/ajaxdeleteannouncement/" +
              t,
            a = await i().post(s, n);
          if (a.data.success != l.R) throw a.data;
          return this.RemoveGIDFromList(e, o.cB + t), a.data;
        }
        static Get() {
          return (
            d.sm_Instance || ((d.sm_Instance = new d()), d.sm_Instance.Init()),
            d.sm_Instance
          );
        }
        static GetSummaryStore() {
          return (
            d.sm_SummaryInstance ||
              ((d.sm_SummaryInstance = new d(!0)), d.sm_SummaryInstance.Init()),
            d.sm_SummaryInstance
          );
        }
      }
    },
    1059: (e, t, n) => {
      "use strict";
      n.d(t, { S: () => u });
      var s = n(34629),
        i = n(41735),
        r = n.n(i),
        a = n(14947),
        o = n(37085),
        l = n(81393),
        d = n(68797),
        c = n(78327);
      class u {
        constructor() {
          (this.m_mapBlockedAppIds = new Map()),
            (this.m_mapBlockedClanIds = new Map()),
            (0, a.Gn)(this);
        }
        static Get() {
          return (
            u.s_globalSingletonStore ||
              ((u.s_globalSingletonStore = new u()),
              u.s_globalSingletonStore.Init()),
            u.s_globalSingletonStore
          );
        }
        GetMutedSourceCount() {
          return this.m_mapBlockedAppIds.size + this.m_mapBlockedClanIds.size;
        }
        Init() {
          const e = (0, c.Tc)("mutedcomminfo", "application_config");
          this.ValidateStoreDefault(e) &&
            (e.appids &&
              e.appids.forEach((e) => this.m_mapBlockedAppIds.set(e, !0)),
            e.clanids &&
              e.clanids.forEach((e) => this.m_mapBlockedClanIds.set(e, !0)));
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !(!t || "object" != typeof t) &&
            ((Array.isArray(t.appids) && t.appids.length > 0) ||
              (Array.isArray(t.clanids) && t.clanids.length > 0))
          );
        }
        BIsEventBlocked(e) {
          return e.appid
            ? this.m_mapBlockedAppIds.has(e.appid)
            : !!e.clanInfo && this.m_mapBlockedClanIds.has(e.clanInfo.clanid);
        }
        BIsMutedAppID(e) {
          return this.m_mapBlockedAppIds.has(e);
        }
        BIsMutedClanID(e) {
          return this.m_mapBlockedClanIds.has(e);
        }
        async UpdateCommunicationSetting(e, t, n) {
          const s = c.TS.STORE_BASE_URL + "account/optoutappcommunication/",
            i = new FormData();
          if (
            (i.append("sessionid", (0, c.KC)()),
            i.append("allowCommunication", e ? "1" : "0"),
            t)
          ) {
            if (
              (!e && this.m_mapBlockedAppIds.has(t)) ||
              (e && !this.m_mapBlockedAppIds.has(t))
            )
              return !0;
            e
              ? this.m_mapBlockedAppIds.delete(t)
              : this.m_mapBlockedAppIds.set(t, !0),
              i.append("appId", t.toString());
          } else {
            if (!n)
              return (
                (0, l.wT)(
                  !1,
                  "BlockEventsFromCalenderEvent: Invalid AppID and ClanID",
                ),
                !1
              );
            if (
              (!e && this.m_mapBlockedClanIds.has(n)) ||
              (e && !this.m_mapBlockedClanIds.has(n))
            )
              return !0;
            e
              ? this.m_mapBlockedClanIds.delete(n)
              : this.m_mapBlockedClanIds.set(n, !0),
              i.append("clanId", n.toString());
          }
          try {
            return (await r().post(s, i)).data.success == o.R;
          } catch (e) {
            return (
              console.error(
                "Blocking app id hit error " + (0, d.H)(e).strErrorMsg,
              ),
              !1
            );
          }
        }
      }
      (0, s.Cg)([a.sH], u.prototype, "m_mapBlockedAppIds", void 0),
        (0, s.Cg)([a.sH], u.prototype, "m_mapBlockedClanIds", void 0);
    },
    81301: (e, t, n) => {
      "use strict";
      n.d(t, { Y: () => _ });
      var s = n(34629),
        i = n(7850),
        r = n(75844),
        a = n(90626),
        o = n(73964),
        l = n(91254),
        d = n(65606),
        c = n(55294),
        u = n(738),
        m = n(73745),
        p = n(19332);
      function h(e) {
        const { event: t, closeModal: n } = e,
          s = (0, d.LJ)();
        return (0, i.jsx)(c.AD, {
          initialEvent: t,
          bShowOnlyInitialEvent: !0,
          partnerEventStore: l.O3,
          emoticonStore: s,
          showAppHeader: !0,
          closeModal: n,
        });
      }
      function _(e, t) {
        (0, u.pg)((0, i.jsx)(h, { event: e }), t);
      }
      let g = class extends a.Component {
        constructor() {
          super(...arguments), (this.m_refFocus = a.createRef());
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
          return (0, i.jsx)("div", {
            ref: this.m_refFocus,
            className: p.Main,
            onClick: this.OnBackgroundClick,
            children: (0, i.jsx)(d.sU, {
              children: (s) =>
                (0, i.jsx)(
                  c.He,
                  {
                    event: e,
                    emoticonStore: s,
                    partnerEventStore: o.$.Get(),
                    langOverride: t,
                    isPreview: n,
                    bDisableBroadcastPlayer: !1,
                  },
                  e.GID,
                ),
            }),
          });
        }
      };
      (0, s.Cg)([m.oI], g.prototype, "escFunction", null),
        (0, s.Cg)([m.oI], g.prototype, "OnBackgroundClick", null),
        (g = (0, s.Cg)([r.PA], g));
    },
    74976: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => m });
      var s = n(7850),
        i = n(6144),
        r = n(87652),
        a = n(49783),
        o = n(43261),
        l = n(46067),
        d = n(23338);
      class c {
        constructor() {
          (this.m_bHasBeenTracked = !1), (this.m_fnSubmit = null);
        }
      }
      const u = new (class {
          constructor() {
            (this.m_nImpressionDelayMS = 500), (this.m_mapEvents = new Map());
          }
          ShouldTrack(e) {
            if (e.bOldAnnouncement) return !1;
            const t = this.m_mapEvents.get(e.GID);
            return !t || !t.m_bHasBeenTracked;
          }
          StartTracking(e, t, n) {
            if (e.bOldAnnouncement) return;
            let s = this.m_mapEvents.get(e.GID);
            s || ((s = new c()), this.m_mapEvents.set(e.GID, s)),
              s.m_bHasBeenTracked ||
                s.m_fnSubmit ||
                ((s.m_fnSubmit = new i.LU()),
                s.m_fnSubmit.Schedule(
                  this.m_nImpressionDelayMS,
                  this.ReportImpression.bind(this, e, t, n),
                ));
          }
          StopTracking(e) {
            const t = this.m_mapEvents.get(e.GID);
            t && t.m_fnSubmit && (t.m_fnSubmit.Cancel(), (t.m_fnSubmit = null));
          }
          ReportImpression(e, t, n) {
            if ((n.RecordEventShown(e, o.Tc.qC), t)) {
              const n = (0, l.v0)();
              t.RecordEventViewed(
                e.GID,
                n.GetCurrentlyLoadedItemsForStats(),
                n.GetStoreInitializationTimestamp().getTime() / 1e3,
              );
            }
            const s = this.m_mapEvents.get(e.GID);
            s &&
              ((s.m_bHasBeenTracked = !0),
              s.m_fnSubmit.Cancel(),
              (s.m_fnSubmit = null));
          }
        })(),
        m = (e) => {
          const { event: t } = e,
            n = (0, r.Y)(),
            i = (0, a.fm)();
          if (u.ShouldTrack(t)) {
            const r = () =>
                u.StartTracking(t, e.recordNewsHubStats ? i : void 0, n),
              a = () => u.StopTracking(t);
            return (0, s.jsx)(d.Y, { onEnter: r, onLeave: a });
          }
          return null;
        };
    },
    8107: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => E });
      var s = n(34629),
        i = n(7850),
        r = n(41735),
        a = n.n(r),
        o = n(75844),
        l = n(90626),
        d = n(87652),
        c = n(65606),
        u = n(55294),
        m = n(9154),
        p = n(88843),
        h = n(64641),
        _ = n.n(h),
        g = n(22797),
        v = n(68797),
        y = n(78327),
        I = n(66418),
        S = n(30894),
        f = n(51272),
        C = n(84811);
      const E = (e) => {
        let { bShowOnlyInitialEvent: t } = e;
        const n = (0, y.Qn)(),
          s = (0, d.Y)();
        return (0, i.jsx)(C.tH, {
          children: (0, i.jsx)(w, {
            ...e,
            bShowOnlyInitialEvent: t || n,
            tracker: s,
          }),
        });
      };
      let w = class extends l.Component {
        constructor() {
          super(...arguments),
            (this.state = { bLoading: !1, eventModel: this.props.eventModel }),
            (this.m_refParent = l.createRef()),
            (this.m_cancelSignal = a().CancelToken.source());
        }
        componentDidMount() {
          this.state.eventModel ||
            this.setState({ bLoading: !0 }, this.LoadEvent);
          let e = this.GetBodyElement();
          e &&
            this.props.bPrimaryPageFeature &&
            e.classList.add(p.BodyNoScroll);
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("EventInfiniteScrollModal unmounting");
          let e = this.GetBodyElement();
          e &&
            this.props.bPrimaryPageFeature &&
            e.classList.remove(p.BodyNoScroll);
        }
        GetBodyElement() {
          return this.m_refParent.current
            ? this.m_refParent.current.closest("body")
            : null;
        }
        async LoadEvent() {
          const {
            appid: e,
            clanSteamID: t,
            announcementGID: n,
            partnerEventStore: s,
            additionalParams: i,
          } = this.props;
          s.LoadAdjacentPartnerEventsByAnnouncement(
            n,
            t,
            e,
            0,
            3,
            i,
            this.m_cancelSignal,
          )
            .then((e) => {
              e.length > 0
                ? this.setState(
                    { bLoading: !1, eventModel: e[0] },
                    this.HandleReadEvent,
                  )
                : (this.props.onEventNotFound && this.props.onEventNotFound(),
                  this.setState({ bLoading: !1 }));
            })
            .catch((e) => {
              let t = (0, v.H)(e);
              console.error(
                "EventInfiniteScrollModal failed " + t.strErrorMsg,
                t,
              ),
                this.setState({ bLoading: !1 });
            });
        }
        async HandleReadEvent() {
          const { eventModel: e } = this.state,
            { trackingLocation: t, tracker: n } = this.props;
          e && e.BIsPartnerEvent() && (n.RecordEventRead(e, t), n.Flush());
        }
        render() {
          const { bShowOnlyInitialEvent: e } = this.props,
            { bLoading: t, eventModel: n } = this.state;
          if (t)
            return (0, i.jsx)(m.EN, {
              active: !0,
              children: (0, i.jsx)("div", {
                className: _().FlexCenter,
                style: { height: "400px" },
                children: (0, i.jsx)(g.t, {}),
              }),
            });
          const {
            closeModal: s,
            appid: r,
            clanSteamID: a,
            className: o,
            partnerEventStore: l,
            showAppHeader: d,
            bPrimaryPageFeature: p,
            additionalParams: h,
            eventClassName: v,
          } = this.props;
          let y;
          I.TS.IN_CLIENT &&
            (null == n ? void 0 : n.appid) &&
            (S.Fm.Get().HintLoad(),
            S.Fm.Get().BOwnsApp(n.appid) &&
              (y = (e) =>
                (0, f.EP)(e, "steam://nav/games/details/" + n.appid)));
          const C = (0, i.jsx)(c.sU, {
            children: (t) =>
              (0, i.jsx)(u.AD, {
                initialEvent: n,
                appid: r,
                clanSteamID: a,
                partnerEventStore: l,
                emoticonStore: t,
                closeModal: !p && s,
                showAppHeader: d,
                bShowOnlyInitialEvent: e,
                additionalParams: h,
                eventClassName: v,
                onAppIconClick: y,
              }),
          });
          return p
            ? C
            : (0, i.jsx)(m.EN, {
                active: !0,
                children: (0, i.jsx)("div", { className: o, children: C }),
              });
        }
      };
      w = (0, s.Cg)([o.PA], w);
    },
    99032: (e, t, n) => {
      "use strict";
      n.d(t, {
        AX: () => I,
        H2: () => g,
        Li: () => y,
        S7: () => p,
        a9: () => S,
        jy: () => v,
        nt: () => _,
        sd: () => m,
        tJ: () => h,
      });
      var s = n(57876),
        i = n(97471),
        r = n(81886),
        a = n(22837),
        o = n(30570),
        l = n(30894),
        d = n(16021),
        c = n(62734),
        u = n(81393);
      function m(e) {
        return d.A.Get().BIsStoreItemMissing(e.id, (0, i.SW)(e.type));
      }
      function p(e, t, n) {
        const s = new Array();
        return (
          null == e || e.forEach((e) => s.push({ id: e, type: "game" })),
          null == t || t.forEach((e) => s.push({ id: e, type: "sub" })),
          null == n || n.forEach((e) => s.push({ id: e, type: "bundle" })),
          s
        );
      }
      function h(e) {
        var t, n;
        const s = d.A.Get().GetStoreItem(e.id, (0, i.SW)(e.type));
        return (
          (null !==
            (n =
              null === (t = null == s ? void 0 : s.GetBestPurchaseOption()) ||
              void 0 === t
                ? void 0
                : t.discount_pct) && void 0 !== n
            ? n
            : 0) > 0
        );
      }
      function _(e) {
        var t;
        if (
          !(null === (t = c.f.Get().GetHomeView()) || void 0 === t
            ? void 0
            : t.localized)
        )
          return !0;
        const n = d.A.Get().GetStoreItem(e.id, (0, i.SW)(e.type));
        return (
          !n ||
          l.Fm.Get().BIsAnyLanguageEnabled(n.GetAllLanguagesWithSomeSupport())
        );
      }
      async function g(e, t, n) {
        if (!e || 0 == e.length) return [];
        const s = e.filter((e) => (0, r.fp)(e.type)).map((e) => e.id),
          i = e.filter((e) => "sub" === e.type).map((e) => e.id),
          a = e.filter((e) => "bundle" === e.type).map((e) => e.id);
        {
          const e = s.filter((e) => !d.A.Get().BHasApp(e, t)),
            n = i.filter((e) => !d.A.Get().BHasApp(e, t)),
            r = a.filter((e) => !d.A.Get().BHasApp(e, t));
          (e.length > 0 || n.length > 0 || r.length > 0) &&
            (await Promise.all([
              d.A.Get().QueueMultipleAppRequests(e, t),
              d.A.Get().QueueMultiplePackageRequests(n, t),
              d.A.Get().QueueMultipleBundleRequests(r, t),
            ]));
        }
        const o = new Set();
        null == a ||
          a.forEach((e) => {
            const t = d.A.Get().GetBundle(e);
            null == t || t.GetIncludedAppIDs().forEach((e) => o.add(e));
          }),
          null == i ||
            i.forEach((e) => {
              const t = d.A.Get().GetPackage(e);
              null == t || t.GetIncludedAppIDs().forEach((e) => o.add(e));
            });
        const l = Array.from(o).filter((e) => !d.A.Get().BHasApp(e, t));
        if (
          (l.length > 0 && (await d.A.Get().QueueMultipleAppRequests(l, t)),
          s.forEach((e) => o.add(e)),
          n)
        ) {
          const e = Array.from(o)
            .map((e) => {
              const t = d.A.Get().GetApp(e),
                n = null == t ? void 0 : t.GetParentAppID();
              return n ? (o.add(n), n) : null;
            })
            .filter((e) => null !== e)
            .filter((e) => !d.A.Get().BHasApp(e, t));
          e.length > 0 && (await d.A.Get().QueueMultipleAppRequests(e, t));
        }
        return Array.from(o).filter((e) => {
          const t = d.A.Get().GetApp(e);
          return t && !t.GetParentAppID();
        });
      }
      const v = {
        include_tag_count: 20,
        include_basic_info: !0,
        include_supported_languages: !0,
      };
      function y(e) {
        var t;
        if (!e) return !0;
        const n = l.Fm.Get();
        if (
          ((0, u.wT)(n.BIsLoaded(), "Dynamic Store not loaded"),
          e.GetStoreItemType() == o.c6.qI)
        ) {
          const t = e.GetParentAppID();
          if (
            n.BIsGameIgnored(e.GetAppID()) ||
            (void 0 !== t && n.BIsGameIgnored(t))
          )
            return !0;
        }
        if (n.BExcludesContentDescriptor(e.GetContentDescriptorIDs()))
          return !0;
        if (n.BExcludeTagIDs(e.GetTagIDs())) return !0;
        if (e.GetAllCreatorClanIDs().some((e) => n.BIsIgnoringCurator(e)))
          return !0;
        if (
          null === (t = c.f.Get().GetHomeView()) || void 0 === t
            ? void 0
            : t.localized
        ) {
          const t = e.GetAllLanguagesWithSomeSupport();
          if (
            t.length > 0 &&
            !e.BHasSomeLanguageSupport(a.Bhc) &&
            !n.BIsAnyLanguageEnabled(t)
          )
            return !0;
        }
        return !1;
      }
      async function I(e, t, n, r) {
        const a = [];
        await g(e, s.Xh, t);
        for (const s of e) {
          const e = d.A.Get().GetStoreItem(s.id, (0, i.SW)(s.type));
          if (!e) {
            0;
            continue;
          }
          const o = e
            .GetIncludedAppIDs()
            .map((e) => d.A.Get().GetApp(e))
            .filter((e) => Boolean(e));
          if ((o.push(e), t)) {
            const e = new Set(
                o.map((e) => e.GetParentAppID()).filter((e) => Boolean(e)),
              ),
              t = Array.from(e)
                .map((e) => d.A.Get().GetApp(e))
                .filter((e) => Boolean(e));
            t && o.push(...t);
          }
          o.some(r || y)
            ? n && (l.Fm.Get().BIsStoreItemOwned(e) || n.push(s))
            : a.push(s);
        }
        return a;
      }
      async function S(e, t, n, s, r, a, o) {
        let c = await I(
          e,
          t,
          o,
          r
            ? (e) =>
                !e ||
                l.Fm.Get().BExcludesContentDescriptor(
                  e.GetContentDescriptorIDs(),
                ) ||
                l.Fm.Get().BExcludeTagIDs(e.GetTagIDs())
            : y,
        );
        const u = [];
        for (const e of c) {
          const t = d.A.Get().GetStoreItem(e.id, (0, i.SW)(e.type));
          if (!t) continue;
          const r = null == t ? void 0 : t.GetIncludedAppIDsOrSelf();
          let c = !1;
          n && (c = c || r.every((e) => l.Fm.Get().BIsGameOwned(e))),
            s && (c = c || r.every((e) => l.Fm.Get().BIsGameWishlisted(e))),
            a && (c = c || r.every((e) => l.Fm.Get().BIsGameIgnored(e))),
            c ? o && o.push(e) : u.push(e);
        }
        return u;
      }
    },
    48479: (e, t, n) => {
      "use strict";
      n.d(t, { AQ: () => h, pn: () => g, qx: () => _ });
      var s = n(7850),
        i = n(68255),
        r = n(61859),
        a = n(12155),
        o = n(90626),
        l = n(52038),
        d = n(95695),
        c = n(84811),
        u = n(64734),
        m = n(65946),
        p = n(26408);
      function h(e) {
        const {
            title: t,
            tooltip: n,
            getMinimized: i,
            toggleMinimized: r,
            className: a,
            children: o,
            elAdditionalButtons: h,
          } = e,
          _ = (0, m.q3)(() => i());
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("div", {
              className: (0, l.A)(
                a,
                u.SectionTitleHeader,
                u.required_title,
                "SectionTitleHeader",
              ),
              children: [
                (0, s.jsxs)("div", {
                  className: (0, l.A)(
                    d.CollapsableSectionTitle,
                    "EventEditorTextTitle",
                  ),
                  children: [t, Boolean(n) && (0, s.jsx)(p.o, { tooltip: n })],
                }),
                (0, s.jsxs)("div", {
                  className: u.SectionTitleButtons,
                  children: [
                    h,
                    (0, s.jsx)(g, { bIsMinimized: _, fnToggleMinimize: r }),
                  ],
                }),
              ],
            }),
            !_ && (0, s.jsx)(c.tH, { children: o }),
          ],
        });
      }
      function _(e) {
        const [t, n] = o.useState(Boolean(e.bStartMinimized));
        return (0, s.jsx)(h, {
          ...e,
          getMinimized: () => t,
          toggleMinimized: () => n(!t),
          children: e.children,
        });
      }
      function g(e) {
        const { bIsMinimized: t, fnToggleMinimize: n } = e,
          o = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return (0, s.jsx)(i.$n, {
          "data-tooltip-text": (0, r.we)(o),
          onClick: n,
          children: e.bIsMinimized
            ? (0, s.jsx)(a.hz4, {})
            : (0, s.jsx)(a.Xjb, {}),
        });
      }
    },
  },
]);
