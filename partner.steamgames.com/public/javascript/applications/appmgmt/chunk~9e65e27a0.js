/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7352],
  {
    92237: (e) => {
      e.exports = {
        Dummy: "wW1AV4_YscO4bfrtkjtze",
        ThemeRow: "_1iI4q9Lh3S4b7MvHV8-9FH",
        ThemeSize: "w1hcRNJLqJaIKpJvsg7Ry",
        SizeColorSweet: "_1hc3z1Nc69lLtW0CcBDuKw",
        SizeColorBig: "_2wjO9uz2L07SVsQytkYTK4",
        SizeColorSmall: "_2if7kNiDu3IhmR0s4wtbL",
        ThemeDefinitionCtn: "NH6z72lFUwnDiY97gSiGV",
        ThemeRevenueCtn: "isMdaGLB3GPUYQ3vT6NhF",
        TopGamesCtn: "_1Ta3Hfqsq1RBzrU1mcMgML",
        ThemeDetails: "_2KbZZ6bPBB-Bk4MTv5bxF2",
        GamesRow: "_1uO2EvuPAL3GIaEHpPWmOA",
        GamesColumn: "_1Pdhl5fZ9jbDwMpDg_IxT4",
        GameItem: "_3Kk39B7jUhr6BVRn9v4WNF",
        GameImage: "_1KDJ1W0K9UA9kAgQCL5jfP",
        ThemeTitle: "_2iHxOX8wNwHbuhDCSU2Sfd",
        ThemeTags: "_2PNltetEpoiiz7epQREfdS",
        TagsMustTitle: "_3TtwdJ1FSNAJ0zZMo6okKJ",
        TagsOrTitle: "_2QGX0lv5drCYBScHjSBfhm",
        TagsNotTitle: "_18G4mH1Yb9Sjc8DbqBwTjj",
        ShowStatsBtn: "_3Ep6vWtYwtiBwQ3kOcZR1a",
        DashTitleBar: "_11xa2NywK-XoPRPzAprmhr",
        ButtonGroup: "_31Lp_UMwj_nvMZg4wGKeqr",
        DashDescription: "_16bPPRfJgTdFDNoMeEHx96",
      };
    },
    1814: (e, t, a) => {
      "use strict";
      a.d(t, { Q: () => l });
      var s = a(41735),
        n = a.n(s),
        r = a(68797),
        o = a(6144),
        m = a(30470);
      class l {
        m_rtStartTime;
        m_rtEndTime;
        m_totalSummary;
        m_mapPackageSummary = new Map();
        m_mapAppPackageList = new Map();
        m_mapAppSaleSummary = new Map();
        m_mapAppSaleSummaryChange = new Map();
        m_mapAppToLoadPromises = new Map();
        GetRTStartTime() {
          return this.m_rtStartTime;
        }
        GetRTEndTime() {
          return this.m_rtEndTime;
        }
        GetAppSaleSummary(e) {
          return this.m_mapAppSaleSummary.get(e);
        }
        GetAppSaleSummaryChangeCallback(e) {
          return (
            this.m_mapAppSaleSummaryChange.has(e) ||
              this.m_mapAppSaleSummaryChange.set(e, new o.lu()),
            this.m_mapAppSaleSummaryChange.get(e)
          );
        }
        BHasAppSaleSummaryChangeCallback(e) {
          return this.m_mapAppSaleSummaryChange.has(e);
        }
        GetTotalSummary() {
          return (
            this.m_totalSummary ||
              ((this.m_totalSummary = {
                net_sales_usd: 0,
                net_units_sold: 0,
                gross_sales_usd: 0,
                gross_units_sold: 0,
              }),
              this.m_mapAppSaleSummary.forEach((e) => {
                (this.m_totalSummary.net_sales_usd += e.net_sales_usd),
                  (this.m_totalSummary.net_units_sold += e.net_units_sold),
                  (this.m_totalSummary.gross_sales_usd += e.gross_sales_usd),
                  (this.m_totalSummary.gross_units_sold += e.gross_units_sold);
              })),
            this.m_totalSummary
          );
        }
        SetAppSaleSummary(e) {
          this.m_mapAppSaleSummary.set(e.appid, e),
            this.m_mapAppSaleSummaryChange.has(e.appid) &&
              this.m_mapAppSaleSummaryChange.get(e.appid).Dispatch(e);
        }
        GetTopNApps(e) {
          const t = Array.from(this.m_mapAppSaleSummary.values());
          return (
            t.sort((e, t) => (t.gross_sales_usd || 0) - e.gross_sales_usd),
            t.slice(0, e)
          );
        }
        async LoadApps(e) {
          let t = [...e];
          const a = new Array();
          let s = new Array();
          for (; t.length > 0; ) {
            t = t.filter(
              (e) =>
                !this.m_mapAppToLoadPromises.has(e) ||
                (a.push(this.m_mapAppToLoadPromises.get(e)), !1),
            );
            const e = t.splice(0, 5e3),
              n = this.InternalLoadAppBatch(e);
            a.push(n),
              s.push(n),
              s.length > 0 && (await Promise.all(s), (s = new Array()));
          }
          await Promise.all(a);
        }
        async InternalLoadAppBatch(e) {
          let t;
          try {
            const a = new FormData();
            a.append("sessionid", m.TS.SESSIONID),
              a.append("rgAppIDs", e.join(",")),
              a.append("rtimeStart", "" + this.m_rtStartTime),
              a.append("rtimeEnd", "" + this.m_rtEndTime);
            const s = `${m.TS.PARTNER_BASE_URL}promotion/planning/ajaxgetappsalesummaries`,
              o = await n().post(s, a, { withCredentials: !0 });
            if (200 == o.status && o.data?.apps_to_packages?.length > 0)
              return (
                o.data.package_summaries.forEach((e) => {
                  this.m_mapPackageSummary.set(e.packageid, e);
                }),
                o.data.apps_to_packages.forEach((e) => {
                  const t = e.subs || [];
                  this.m_mapAppPackageList.set(e.appid, t);
                  const a = {
                    appid: e.appid,
                    gross_sales_usd: 0,
                    gross_units_sold: 0,
                    net_sales_usd: 0,
                    net_units_sold: 0,
                  };
                  t.forEach((e) => {
                    const t = this.m_mapPackageSummary.get(e);
                    t &&
                      ((a.gross_sales_usd += t.gross_sales_usd),
                      (a.gross_units_sold += t.gross_units_sold),
                      (a.net_sales_usd += t.net_sales_usd),
                      (a.net_units_sold += t.net_units_sold));
                  }),
                    this.m_mapAppSaleSummary.set(e.appid, a),
                    this.BHasAppSaleSummaryChangeCallback(e.appid) &&
                      this.GetAppSaleSummaryChangeCallback(e.appid).Dispatch(a);
                }),
                !0
              );
            t = (0, r.H)(o);
          } catch (e) {
            t = (0, r.H)(e);
          }
          return (
            console.error(
              "CSaleRankStore::InternalLoadAppBatch failed with " +
                t.strErrorMsg,
              t,
            ),
            !1
          );
        }
        constructor(e, t) {
          if (t) (this.m_rtStartTime = e), (this.m_rtEndTime = t);
          else {
            const t = new Date();
            t.setUTCHours(0),
              t.setUTCMinutes(0),
              t.setUTCSeconds(0),
              t.setUTCMilliseconds(0);
            const a = Math.floor(t.getTime() / 1e3);
            (this.m_rtEndTime = a - 86400),
              (this.m_rtStartTime = a - 24 * (e + 1) * 60 * 60);
          }
          "dev" == m.TS.WEB_UNIVERSE &&
            console.log(
              `CAppSaleSummary initializing to ${this.m_rtStartTime} to ${this.m_rtEndTime}`,
            );
        }
      }
    },
    562: (e, t, a) => {
      "use strict";
      a.d(t, {
        DT: () => y,
        GX: () => p,
        LD: () => d,
        fT: () => h,
        k: () => C,
        lY: () => _,
        tV: () => S,
      });
      var s = a(34629),
        n = a(41735),
        r = a.n(n),
        o = a(90626),
        m = a(68797),
        l = a(78327),
        i = a(14947),
        u = a(6419);
      async function p() {
        const e =
            l.TS.PARTNER_BASE_URL +
            "admin/store/contenthub/ajaxgetcontenthubcategorieskv",
          t = { origin: self.origin, sessionid: l.TS.SESSIONID };
        let a = null;
        try {
          const s = await r().get(e, { params: t, withCredentials: !0 });
          if (200 === s.status && 1 === s.data?.success) {
            const e = { rgCategories: [], bHasUnpublishedChanges: !1 };
            return (
              s.data.in_progress
                ? ((e.rgCategories = c(
                    JSON.parse(s.data.in_progress).categories,
                  )),
                  (e.bHasUnpublishedChanges = !0))
                : s.data.active &&
                  (e.rgCategories = c(JSON.parse(s.data.active).categories)),
              e
            );
          }
          a = (0, m.H)(s);
        } catch (e) {
          a = (0, m.H)(e);
        }
        return (
          console.error("GetCategoriesKV failed: " + a.strErrorMsg, a),
          { rgCategories: [] }
        );
      }
      function c(e) {
        const t = [];
        for (const a of Object.keys(e)) {
          const s = e[a],
            n = {
              handle: s.handle,
              type: s.type,
              loc_token: s.loc_token,
              description_loc_token: s.description_loc_token,
              heading: s.heading,
              id: s.id || void 0,
              exclude_from_search: Boolean(s.exclude_from_search),
              search_alias: s.search_alias,
            },
            {
              must: r,
              any: o,
              mustnot: m,
              replaces_tags: l,
              content_descriptors: i,
            } = s;
          r &&
            (Array.isArray(r)
              ? (n.must = r.map((e) => ({ id: Number(e) })))
              : (n.must = [{ id: Number(r) }])),
            o &&
              (Array.isArray(o)
                ? (n.any = o.map((e) => ({ id: Number(e) })))
                : (n.any = [{ id: Number(o) }])),
            m &&
              (Array.isArray(m)
                ? (n.mustnot = m.map((e) => ({ id: Number(e) })))
                : (n.mustnot = [{ id: Number(m) }])),
            l &&
              (Array.isArray(l)
                ? (n.replaces_tags = l.map((e) => ({ id: Number(e) })))
                : (n.replaces_tags = [{ id: Number(l) }])),
            i &&
              "string" == typeof i &&
              (n.content_descriptors = i.split(",").map((e) => parseInt(e))),
            t.push(n);
        }
        return t;
      }
      function _() {
        const [e, t] = (0, o.useState)(null);
        return (
          (0, o.useEffect)(() => {
            p().then((e) => {
              t(e.rgCategories);
            });
          }, []),
          e
        );
      }
      async function h(e) {
        const t = {};
        for (const a of e)
          (t[a.handle] = {
            handle: a.handle,
            type: a.type,
            loc_token: a.loc_token,
            must: a.must?.map((e) => e.id) || void 0,
            any: a.any?.map((e) => e.id) || void 0,
            mustnot: a.mustnot?.map((e) => e.id) || void 0,
            replaces_tags: a.replaces_tags?.map((e) => e.id) || void 0,
            heading: a.heading || void 0,
            id: a.id,
            exclude_from_search: a.exclude_from_search,
            search_alias: a.search_alias,
            content_descriptors: a.content_descriptors?.length
              ? a.content_descriptors.join(",")
              : void 0,
          }),
            1 === t[a.handle].must?.length &&
              (t[a.handle].must = t[a.handle].must[0]),
            1 === t[a.handle].mustnot?.length &&
              (t[a.handle].mustnot = t[a.handle].mustnot[0]),
            1 === t[a.handle].replaces_tags?.length &&
              (t[a.handle].replaces_tags = t[a.handle].replaces_tags[0]);
        const a =
            l.TS.PARTNER_BASE_URL +
            "admin/store/contenthub/ajaxsavecontenthubcategorieskv",
          s = new FormData();
        s.append("sessionid", l.TS.SESSIONID),
          s.append("origin", self.origin),
          s.append("json", JSON.stringify(t));
        let n = null;
        try {
          const e = await r().post(a, s, { withCredentials: !0 });
          if (200 === e.status && 1 === e.data?.success)
            return g.Get().ClearDirty(), null;
          n = (0, m.H)(e);
        } catch (e) {
          n = (0, m.H)(e);
        }
        return console.error("SaveCategoriesKV failed: " + n.strErrorMsg, n), n;
      }
      async function d() {
        const e =
            l.TS.PARTNER_BASE_URL +
            "admin/store/contenthub/ajaxpublishcontenthubcategorieskv",
          t = { origin: self.origin, sessionid: l.TS.SESSIONID };
        try {
          const a = await r().get(e, { params: t, withCredentials: !0 });
          if (200 !== a.status || 1 !== a.data?.success) return (0, m.H)(a);
        } catch (e) {
          return (0, m.H)(e);
        }
        return null;
      }
      class g {
        constructor() {
          (0, i.Gn)(this),
            "dev" === l.TS.WEB_UNIVERSE && (window.g_StoreTagStore = this);
        }
        m_rgTags;
        m_rgCategories;
        m_mapStoreTags;
        m_mapStoreCategories;
        m_promise;
        m_bDirty = !1;
        static s_singleton;
        BIsLoaded() {
          return Boolean(this.m_rgTags) && Boolean(this.m_rgCategories);
        }
        BIsDirty() {
          return this.m_bDirty;
        }
        ClearDirty() {
          this.m_bDirty = !1;
        }
        SetDirty() {
          this.m_bDirty = !0;
        }
        GetTags() {
          return this.m_rgTags;
        }
        GetCategories() {
          return this.m_rgCategories;
        }
        GetStoreTagMap() {
          return this.m_mapStoreTags;
        }
        GetStoreCategoryMap() {
          return this.m_mapStoreCategories;
        }
        async HintLoad() {
          return (
            this.m_promise || (this.m_promise = this.Load()), this.m_promise
          );
        }
        async Load() {
          const e =
              l.TS.PARTNER_BASE_URL +
              "admin/store/contenthub/ajaxgetstoretagsandcategories",
            t = {
              origin: self.origin,
              sessionid: l.TS.SESSIONID,
              l: l.TS.LANGUAGE,
            };
          let a = null;
          try {
            const s = await r().get(e, { params: t });
            if (200 === s.status && 1 === s.data?.success)
              return (
                (this.m_rgTags = s.data.tags),
                (this.m_rgCategories = s.data.categories),
                (this.m_mapStoreTags = new Map()),
                this.m_rgTags.forEach((e) =>
                  this.m_mapStoreTags.set(e.tagid, e),
                ),
                (this.m_mapStoreCategories = new Map()),
                this.m_rgCategories.forEach((e) =>
                  this.m_mapStoreCategories.set(e.categoryid, e),
                ),
                void (
                  "dev" === l.TS.WEB_UNIVERSE &&
                  console.log(
                    "tags " +
                      this.m_rgTags.length +
                      ", categories " +
                      this.m_rgCategories.length,
                  )
                )
              );
            (this.m_promise = null), (a = (0, m.H)(s));
          } catch (e) {
            (this.m_promise = null), (a = (0, m.H)(e));
          }
          console.error(
            "CStoreTagsAndCategoriesStore.Load failed: " + a.strErrorMsg,
            a,
          );
        }
        static Get() {
          return g.s_singleton || (g.s_singleton = new g()), g.s_singleton;
        }
      }
      function S() {
        return g.Get().BIsDirty();
      }
      function y() {
        const [e, t] = o.useState(g.Get().GetTags()),
          [a, s] = o.useState(g.Get().GetCategories());
        return (
          o.useEffect(() => {
            (void 0 !== e && void 0 !== a) ||
              g
                .Get()
                .HintLoad()
                .then(() => {
                  t(g.Get().GetTags()), s(g.Get().GetCategories());
                });
          }, [a, e]),
          { rgTags: e, rgCategories: a }
        );
      }
      function C() {
        const [e, t] = o.useState(g.Get().GetStoreTagMap()),
          [a, s] = o.useState(g.Get().GetStoreCategoryMap());
        return (
          o.useEffect(() => {
            (void 0 !== e && void 0 !== a) ||
              g
                .Get()
                .HintLoad()
                .then(() => {
                  t(g.Get().GetStoreTagMap()), s(g.Get().GetStoreCategoryMap());
                });
          }, [a, e]),
          { mapStoreTags: e, mapStoreCategories: a }
        );
      }
      (0, s.Cg)([i.sH], g.prototype, "m_bDirty", void 0),
        (0, s.Cg)([u.o], g.prototype, "SetDirty", null);
    },
    31376: (e, t, a) => {
      "use strict";
      a.d(t, {
        AY: () => G,
        CU: () => g,
        Iw: () => b,
        Th: () => A,
        _E: () => h,
        eX: () => T,
        hl: () => f,
        mg: () => E,
        p$: () => C,
        tt: () => _,
      });
      var s = a(34629),
        n = a(41735),
        r = a.n(n),
        o = a(1814),
        m = a(14947),
        l = a(90626),
        i = a(20194),
        u = a(6144),
        p = a(73745),
        c = a(30470);
      const _ = 120,
        h = 10;
      class d {
        m_appAndPackagesSummuries = new o.Q(_);
        m_mapContentHubSummary = new Map();
        m_mapContentHubToAppCount = new Map();
        m_mapContentHubSummaryPromises = new Map();
        m_mapContentHubSummaryChange = new Map();
        m_mapContentHubTopAppSaleSummaryChange = new Map();
        m_mapContentHubTopAppSaleSummary = new Map();
        m_rgSummaries = null;
        m_summaryAnalysisChange = new u.lu();
        m_loadSummaryCache;
        GetSummaryAnalysis() {
          return this.m_rgSummaries;
        }
        GetSummaryAnalysisChange() {
          return this.m_summaryAnalysisChange;
        }
        GetKey(e) {
          return e.type + "_" + e.handle;
        }
        GetContentHubTopAppSaleSummaryChangeCallback(e) {
          const t = this.GetKey(e);
          return (
            this.m_mapContentHubTopAppSaleSummaryChange.has(t) ||
              this.m_mapContentHubTopAppSaleSummaryChange.set(t, new u.lu()),
            this.m_mapContentHubTopAppSaleSummaryChange.get(t)
          );
        }
        GetContentHubSaleSummary(e) {
          const t = this.GetKey(e);
          return this.m_mapContentHubSummary.get(t);
        }
        GetContentHubSummaryChangeCallback(e) {
          const t = this.GetKey(e);
          return (
            this.m_mapContentHubSummaryChange.has(t) ||
              this.m_mapContentHubSummaryChange.set(t, new u.lu()),
            this.m_mapContentHubSummaryChange.get(t)
          );
        }
        GetTopAppSummary(e) {
          const t = this.GetKey(e);
          return this.m_mapContentHubTopAppSaleSummary.get(t);
        }
        GetAppSummaryObject() {
          return this.m_appAndPackagesSummuries;
        }
        async LoadContentHubSaleSummary(e, t) {
          if (!t) return null;
          const a = this.GetKey(e);
          return (
            this.m_mapContentHubSummaryPromises.has(a) ||
              this.m_mapContentHubSummaryPromises.set(
                a,
                this.InternalLoadContentHubSaleSummary(e, t),
              ),
            this.m_mapContentHubSummaryPromises.get(a)
          );
        }
        async InternalLoadContentHubSaleSummary(e, t) {
          const a = this.GetKey(e);
          await this.m_appAndPackagesSummuries.LoadApps(t);
          const s = {
              gross_sales_usd: 0,
              gross_units_sold: 0,
              net_sales_usd: 0,
              net_units_sold: 0,
            },
            n = new Array();
          t.forEach((e) => {
            const t = this.m_appAndPackagesSummuries.GetAppSaleSummary(e);
            t &&
              ((s.gross_sales_usd += t.gross_sales_usd),
              (s.gross_units_sold += t.gross_units_sold),
              (s.net_sales_usd += t.net_sales_usd),
              (s.net_units_sold += t.net_units_sold)),
              n.push(t);
          }),
            n.sort((e, t) => t.gross_sales_usd - e.gross_sales_usd);
          const r = {
            gross_sales_usd: 0,
            gross_units_sold: 0,
            net_sales_usd: 0,
            net_units_sold: 0,
          };
          return (
            n.slice(0, h).forEach((e) => {
              (r.gross_sales_usd += e.gross_sales_usd),
                (r.gross_units_sold += e.gross_units_sold),
                (r.net_sales_usd += e.net_sales_usd),
                (r.net_units_sold += e.net_units_sold);
            }),
            this.m_mapContentHubTopAppSaleSummary.set(a, r),
            this.m_mapContentHubSummary.set(a, s),
            this.m_mapContentHubToAppCount.set(a, n.length),
            this.GetContentHubTopAppSaleSummaryChangeCallback(e).Dispatch(r),
            this.GetContentHubSummaryChangeCallback(e).Dispatch(s),
            (this.m_rgSummaries = [
              ...(this.m_rgSummaries ?? []),
              this.BuildAnalysis(e),
            ]),
            this.m_summaryAnalysisChange.Dispatch(this.m_rgSummaries),
            this.SaveToCacheSaleSummary(e, s, r, n.slice(0, h), n.length),
            s
          );
        }
        async LoadCachedSaleSummaries() {
          return (
            this.m_loadSummaryCache ||
              (this.m_loadSummaryCache =
                this.InternalLoadCachedSaleSummaries()),
            this.m_loadSummaryCache
          );
        }
        async InternalLoadCachedSaleSummaries() {
          const e = {
              rtStartTime: this.m_appAndPackagesSummuries.GetRTStartTime(),
              rtEndTime: this.m_appAndPackagesSummuries.GetRTEndTime(),
              sessionid: c.TS.SESSIONID,
            },
            t = `${c.TS.PARTNER_BASE_URL}promotion/planning/ajaxgetcontenthubstats`,
            a = await r().get(t, { params: e });
          if (200 == a.status && a.data?.cache?.length > 0) {
            const e = new Array();
            a.data.cache.forEach((t) => {
              const a = JSON.parse(t),
                s = { handle: a.handle, type: a.type },
                n = this.GetKey(s);
              this.m_mapContentHubTopAppSaleSummary.set(n, a.topAppSummary),
                this.m_mapContentHubSummary.set(n, a.hubSummary),
                this.m_mapContentHubToAppCount.set(n, a.appCount),
                a.topApps.forEach((e) =>
                  this.m_appAndPackagesSummuries.SetAppSaleSummary(e),
                ),
                this.m_mapContentHubSummaryChange.has(n) &&
                  this.m_mapContentHubSummaryChange
                    .get(n)
                    .Dispatch(a.hubSummary),
                this.m_mapContentHubTopAppSaleSummaryChange.has(n) &&
                  this.m_mapContentHubTopAppSaleSummaryChange
                    .get(n)
                    .Dispatch(a.topAppSummary),
                e.push(this.BuildAnalysis(s));
            }),
              (this.m_rgSummaries = e),
              this.m_summaryAnalysisChange.Dispatch(e);
          }
          return null;
        }
        BuildAnalysis(e) {
          const t = this.GetKey(e),
            a = this.m_mapContentHubSummary.get(t),
            s = this.m_mapContentHubTopAppSaleSummary.get(t),
            n = this.m_mapContentHubToAppCount.get(t);
          return {
            handle: e.handle,
            total_games: n,
            hub_gross_units_sold: a.gross_units_sold,
            hub_gross_sales_usd: Math.floor(a.gross_sales_usd / 100),
            hub_units_per_day: Math.floor(a.gross_units_sold / _),
            hub_sales_usd_per_day: Math.floor(a.gross_sales_usd / (100 * _)),
            top_apps_percent:
              a.gross_sales_usd > 0
                ? ((s.gross_sales_usd / a.gross_sales_usd) * 100).toFixed(2)
                : "NA",
          };
        }
        async SaveToCacheSaleSummary(e, t, a, s, n) {
          if ("category_editor" === e.type) return;
          const o = {
              type: e.type,
              handle: e.handle,
              topAppSummary: a,
              hubSummary: t,
              topApps: s,
              appCount: n,
            },
            l = new FormData();
          l.append("sessionid", c.TS.SESSIONID),
            l.append(
              "rtStartTime",
              "" + this.m_appAndPackagesSummuries.GetRTStartTime(),
            ),
            l.append(
              "rtEndTime",
              "" + this.m_appAndPackagesSummuries.GetRTEndTime(),
            ),
            l.append("bClear", "false"),
            l.append("key", this.GetKey(e)),
            l.append("rgStats", JSON.stringify(o));
          const i = `${c.TS.PARTNER_BASE_URL}promotion/planning/ajaxpostcontenthubstats`,
            u = await r().post(i, l, { withCredentials: !0 });
          200 != u.status &&
            console.error("SaveToCacheSaleSummary failed to save " + m.HP, u);
        }
        static s_Singleton;
        static Get() {
          return (
            d.s_Singleton ||
              ((d.s_Singleton = new d()),
              "dev" == c.TS.WEB_UNIVERSE &&
                (window.g_ThemeEventStore = d.s_Singleton)),
            d.s_Singleton
          );
        }
      }
      function g(e) {
        const {
          data: t,
          isLoading: a,
          isError: s,
        } = (0, i.I)({
          queryKey: ["contenthubsummary", e.type, e.handle],
          queryFn: async () => {
            const t = {
                contenthubcategorytype: e.type,
                handle: e.handle,
                sessionid: c.TS.SESSIONID,
              },
              a = `${c.TS.PARTNER_BASE_URL}promotion/planning/ajaxgetcontenthubsummary`,
              s = await r().get(a, { params: t });
            return 200 == s.status && s.data?.top_apps?.length > 0
              ? s.data
              : null;
          },
        });
        return {
          rgTopApps: a || s || !t ? null : t?.top_apps,
          nTotalGames: a || s || !t ? null : t?.total_games,
          isError: s,
        };
      }
      function S(e, t, a) {
        return {
          musthaveall: (e || [])
            .filter(Boolean)
            .map((e) => e.id)
            .sort()
            .join(","),
          musthaveany: (t || [])
            .filter(Boolean)
            .map((e) => e.id)
            .sort()
            .join(","),
          mustnothaveany: (a || [])
            .filter(Boolean)
            .map((e) => e.id)
            .sort()
            .join(","),
        };
      }
      (0, s.Cg)([p.oI], d.prototype, "LoadCachedSaleSummaries", null);
      const y = { total_games: 0, all_appid: [], top_games: [] };
      function C(e, t, a) {
        const {
            musthaveall: s,
            musthaveany: n,
            mustnothaveany: o,
          } = S(e, t, a),
          {
            data: m,
            isLoading: l,
            isError: u,
          } = (0, i.I)({
            queryKey: ["useContentHubCategoryEditorFullAppList", s, n, o],
            queryFn: async () => {
              const e = {
                  musthaveall: s,
                  musthaveany: n,
                  mustnothaveany: o,
                  sessionid: c.TS.SESSIONID,
                },
                t = `${c.TS.PARTNER_BASE_URL}promotion/planning/ajaxgetcategoryeditorapplist`,
                a = await r().get(t, { params: e });
              return 200 == a.status && a.data?.top_games?.length > 0
                ? a.data
                : null;
            },
            enabled: 0 != s.length || 0 != n.length || 0 != o.length,
          });
        return 0 == s.length && 0 == n.length && 0 == o.length ? y : m || null;
      }
      function T(e, t, a) {
        const s = C(e, t, a),
          n = (0, l.useMemo)(() => {
            const {
              musthaveall: s,
              musthaveany: n,
              mustnothaveany: r,
            } = S(e, t, a);
            return { type: "category_editor", handle: s + "_" + n + "_" + r };
          }, [e, t, a]),
          [r, o] = (0, l.useState)(d.Get().GetContentHubSaleSummary(n));
        return (
          (0, l.useEffect)(() => {
            s?.all_appid?.length &&
              !r &&
              d.Get().LoadContentHubSaleSummary(n, s.all_appid);
          }, [n, s, r]),
          (0, p.hL)(d.Get().GetContentHubSummaryChangeCallback(n), o),
          r
        );
      }
      function E(e, t, a) {
        const s = (0, l.useMemo)(() => {
            const {
              musthaveall: s,
              musthaveany: n,
              mustnothaveany: r,
            } = S(e, t, a);
            return { type: "category_editor", handle: s + "_" + n + "_" + r };
          }, [e, t, a]),
          [n, r] = (0, l.useState)(d.Get().GetTopAppSummary(s));
        return (
          (0, p.hL)(d.Get().GetContentHubTopAppSaleSummaryChangeCallback(s), r),
          n
        );
      }
      function A(e) {
        const t = (function (e) {
            const {
              data: t,
              isLoading: a,
              isError: s,
            } = (0, i.I)({
              queryKey: ["contenthubapplist", e.type, e.handle],
              queryFn: async () => {
                const t = {
                    contenthubcategorytype: e.type,
                    handle: e.handle,
                    sessionid: c.TS.SESSIONID,
                  },
                  a = `${c.TS.PARTNER_BASE_URL}promotion/planning/ajaxgetcontenthubapplist`,
                  s = await r().get(a, { params: t });
                return 200 == s.status && s.data?.apps?.length > 0
                  ? s.data
                  : null;
              },
            });
            return t?.apps || null;
          })(e),
          [a, s] = (0, l.useState)(d.Get().GetContentHubSaleSummary(e));
        return (
          (0, l.useEffect)(() => {
            t?.length && !a && d.Get().LoadContentHubSaleSummary(e, t);
          }, [e, e.type, e.handle, t, a]),
          (0, p.hL)(d.Get().GetContentHubSummaryChangeCallback(e), s),
          a
        );
      }
      function b(e) {
        const [t, a] = (0, l.useState)(
          d.Get().GetAppSummaryObject().GetAppSaleSummary(e),
        );
        return (
          (0, p.hL)(
            d.Get().GetAppSummaryObject().GetAppSaleSummaryChangeCallback(e),
            a,
          ),
          t
        );
      }
      function f(e) {
        const [t, a] = (0, l.useState)(d.Get().GetTopAppSummary(e));
        return (
          (0, p.hL)(d.Get().GetContentHubTopAppSaleSummaryChangeCallback(e), a),
          t
        );
      }
      function G() {
        const [e, t] = (0, l.useState)(d.Get().GetSummaryAnalysis());
        return (
          (0, l.useEffect)(() => {
            d.Get().LoadCachedSaleSummaries();
          }, []),
          (0, p.hL)(d.Get().GetSummaryAnalysisChange(), t),
          e
        );
      }
    },
    74810: (e, t, a) => {
      "use strict";
      a.d(t, {
        KU: () => b,
        Ke: () => E,
        W7: () => G,
        hp: () => C,
        iT: () => T,
        ny: () => k,
      });
      var s = a(562),
        n = a(31376),
        r = a(40323),
        o = a.n(r),
        m = a(90626),
        l = a(55263),
        i = a(16676),
        u = a(29863),
        p = a(96236),
        c = a(22797),
        _ = a(52038),
        h = a(61859),
        d = a(82227),
        g = a(30470),
        S = a(92237);
      const y = "0px 0px 100% 0px",
        C = 5e3,
        T = 500;
      function E(e) {
        const [t, a] = (0, m.useState)(!0),
          r = (0, s.lY)(),
          o = (0, m.useMemo)(
            () => (r?.length > 0 ? r.filter((e) => Boolean(e.type)) : null),
            [r],
          );
        return o && 0 != o.length
          ? m.createElement(
              "div",
              null,
              m.createElement(
                "div",
                null,
                m.createElement(
                  "div",
                  { className: S.DashTitleBar },
                  m.createElement("h1", null, "Theme Sale Planning Dashboard"),
                  m.createElement(
                    "div",
                    { className: S.ButtonGroup },
                    Boolean(!t) &&
                      m.createElement(
                        i.$n,
                        { onClick: () => a(!0) },
                        "Load ",
                        n.tt,
                        " Days of Sale Summaries",
                      ),
                    m.createElement(L, null),
                  ),
                ),
                m.createElement(
                  "div",
                  { className: S.DashDescription },
                  m.createElement(
                    "ul",
                    null,
                    m.createElement(
                      "li",
                      null,
                      "Themes are currently make from all of the categories that are defined on this",
                      " ",
                      m.createElement(
                        "a",
                        {
                          href: `${g.TS.PARTNER_BASE_URL}admin/store/contenthub/categories`,
                        },
                        "categories editor page.",
                      ),
                    ),
                    m.createElement(
                      "li",
                      null,
                      "Hubs with more than ",
                      C,
                      " games are called out as 'too big'.",
                    ),
                    m.createElement(
                      "li",
                      null,
                      "Sales rank shown for individual games is long-term and includes all sources of revenue.",
                    ),
                    m.createElement(
                      "li",
                      null,
                      "Revenue shown is computed over the past 45 days and only using base games package revenue (a technical limitation for now) ",
                    ),
                  ),
                ),
              ),
              o.map((e, a) =>
                m.createElement(A, { key: a, category: e, bSaleSummary: t }),
              ),
            )
          : m.createElement(c.t, { string: (0, h.we)("#Loading") });
      }
      function A(e) {
        const { category: t, bSaleSummary: a } = e;
        return m.createElement(
          p.K,
          { placeholderHeight: 250, rootMargin: y },
          m.createElement(f, { category: t, bSaleSummary: a }),
        );
      }
      function b(e) {
        const { nTotalGames: t } = e;
        let a, s;
        return (
          t > T && t <= C
            ? ((a = S.SizeColorSweet), (s = "Good size!"))
            : t > C
              ? ((a = S.SizeColorBig), (s = "Too big"))
              : ((a = S.SizeColorSmall), (s = "Too small")),
          m.createElement(
            "div",
            { className: (0, _.A)(S.ThemeSize, a) },
            (0, d.Dq)(t),
            " games ( ",
            s,
            ")",
          )
        );
      }
      function f(e) {
        const { category: t, bSaleSummary: a } = e,
          { rgTopApps: s, nTotalGames: r } = (0, n.CU)(t),
          o = r > 500 && r <= C;
        return m.createElement(
          "div",
          { className: S.ThemeRow },
          m.createElement(
            "div",
            { className: S.ThemeDefinitionCtn },
            m.createElement(
              "a",
              {
                href: `${g.TS.STORE_BASE_URL}category/${t.handle}`,
                className: S.ThemeTitle,
              },
              t.loc_token ? (0, h.we)(t.loc_token) : t.handle,
            ),
            m.createElement(b, { nTotalGames: r }),
            m.createElement(
              "div",
              { className: S.SaleStats },
              Boolean(a && o) && m.createElement(N, { category: t }),
            ),
          ),
          m.createElement(
            "div",
            { className: S.TopGamesCtn },
            m.createElement("div", null, "Top 10 Games non-F2P:"),
            m.createElement(
              "div",
              { className: S.GamesRow },
              s
                ?.slice(0, 10)
                .map((e) =>
                  m.createElement(G, {
                    key: e.appid,
                    info: e,
                    category: t,
                    bSaleSummary: a && o,
                  }),
                ),
            ),
          ),
          m.createElement(
            "div",
            { className: S.ThemeDetails },
            "handle: ",
            t.handle,
            m.createElement(w, { category: t }),
          ),
        );
      }
      function G(e) {
        const { info: t, bSaleSummary: a } = e,
          [s] = (0, l.t7)(t.appid, { include_assets: !0 });
        return s
          ? m.createElement(
              "div",
              { className: S.GameItem },
              m.createElement(
                u.Qf,
                {
                  item: { type: "game", id: t.appid },
                  hoverProps: {
                    direction: "overlay",
                    style: { minWidth: "320px", maxWidth: "320px" },
                  },
                  className: S.GameImage,
                },
                m.createElement(
                  "a",
                  { href: s.GetStorePageURL() },
                  m.createElement("img", { src: s.GetAssets().GetHeaderURL() }),
                ),
              ),
              m.createElement("div", null, " Rank: ", t.long_term_sale_rank),
              Boolean(a) && m.createElement(v, { ...e }),
            )
          : m.createElement(
              "div",
              null,
              "Loading appid: ",
              t.appid,
              " with rank: ",
              t.long_term_sale_rank,
            );
      }
      function v(e) {
        const { info: t, category: a } = e,
          s = (0, n.Iw)(t.appid),
          r = (0, n.Th)(a);
        return m.createElement(
          m.Fragment,
          null,
          Boolean(s) &&
            m.createElement(
              "div",
              null,
              " ",
              "$",
              (0, d.Dq)(Math.floor(s.gross_sales_usd / 100)),
            ),
          Boolean(s && r?.gross_sales_usd) &&
            m.createElement(
              "div",
              null,
              "( ",
              ((s.gross_sales_usd / r.gross_sales_usd) * 100).toFixed(2),
              "% of hub )",
            ),
        );
      }
      function w(e) {
        const { mapStoreTags: t, mapStoreCategories: a } = (0, s.k)(),
          { category: n } = e;
        return t && a && (n.any || n.must || n.mustnot)
          ? m.createElement(
              "div",
              { className: S.ThemeTags },
              Boolean(n.must) &&
                m.createElement(
                  "div",
                  null,
                  m.createElement(
                    "span",
                    { className: S.TagsMustTitle },
                    "Must:",
                  ),
                  " ",
                  n.must?.map((e) =>
                    m.createElement(H, {
                      key: n.type + "_" + e.id + "_" + n.handle,
                      type: n.type,
                      id: e.id,
                    }),
                  ),
                ),
              Boolean(n.any) &&
                m.createElement(
                  "div",
                  null,
                  m.createElement("span", { className: S.TagsOrTitle }, "Any:"),
                  " ",
                  n.any?.map((e) =>
                    m.createElement(H, {
                      key: n.type + "_" + e.id + "_" + n.handle,
                      type: n.type,
                      id: e.id,
                    }),
                  ),
                ),
              Boolean(n.mustnot) &&
                m.createElement(
                  "div",
                  null,
                  m.createElement(
                    "span",
                    { className: S.TagsNotTitle },
                    "Must Not:",
                  ),
                  " ",
                  n.mustnot?.map((e) =>
                    m.createElement(H, {
                      key: n.type + "_" + e.id + "_" + n.handle,
                      type: n.type,
                      id: e.id,
                    }),
                  ),
                ),
            )
          : null;
      }
      function H(e) {
        const { mapStoreTags: t, mapStoreCategories: a } = (0, s.k)(),
          { type: n, id: r } = e;
        return "tagids" == n
          ? m.createElement(
              "span",
              null,
              t.has(r) ? t.get(r).name : "tagid: " + r,
              ", ",
            )
          : m.createElement(
              "span",
              null,
              a.has(r) ? a.get(r).name : "category id: " + r,
              ", ",
            );
      }
      function k(e) {
        const { saleSummary: t, topAppSummary: a } = e;
        return t
          ? m.createElement(
              "div",
              { className: S.ThemeRevenueCtn },
              m.createElement(
                "table",
                null,
                m.createElement(
                  "tbody",
                  null,
                  m.createElement(
                    "tr",
                    null,
                    m.createElement(
                      "td",
                      null,
                      "Total: ",
                      m.createElement("br", null),
                      "$",
                      (0, d.Dq)(Math.floor(t.gross_sales_usd / 100)),
                    ),
                    m.createElement(
                      "td",
                      null,
                      "Per Day: ",
                      m.createElement("br", null),
                      "$",
                      (0, d.Dq)(Math.floor(t.gross_sales_usd / (100 * n.tt))),
                    ),
                    m.createElement(
                      "td",
                      null,
                      "Total Units: ",
                      m.createElement("br", null),
                      (0, d.Dq)(t.gross_units_sold),
                    ),
                    m.createElement(
                      "td",
                      null,
                      "Units Per Day: ",
                      m.createElement("br", null),
                      (0, d.Dq)(Math.floor(t.gross_units_sold / n.tt)),
                    ),
                    Boolean(t.gross_sales_usd > 0) &&
                      m.createElement(
                        m.Fragment,
                        null,
                        m.createElement(
                          "td",
                          null,
                          "Top ",
                          n._E,
                          " Apps: ",
                          m.createElement("br", null),
                          m.createElement(
                            "span",
                            {
                              className:
                                (a.gross_sales_usd / t.gross_sales_usd) * 100 >
                                90
                                  ? S.SizeColorBig
                                  : S.SizeColorSweet,
                            },
                            (
                              (a.gross_sales_usd / t.gross_sales_usd) *
                              100
                            ).toFixed(2),
                            "%",
                          ),
                          " of revenue",
                        ),
                      ),
                  ),
                ),
              ),
            )
          : m.createElement(c.t, {
              position: "center",
              string: "Loading Sale Info",
            });
      }
      function N(e) {
        const { category: t } = e,
          a = (0, n.Th)(t),
          s = (0, n.hl)(t);
        return m.createElement(k, { saleSummary: a, topAppSummary: s });
      }
      function L(e) {
        const t = (0, n.AY)();
        return m.createElement(
          "a",
          {
            href: `data:application/octet-stream,${encodeURIComponent(o().unparse({ data: t, fields: Object.keys(t ? t[0] : {}) }))}`,
            download: "theme_sale_stats.csv",
          },
          "Export CSV",
        );
      }
    },
  },
]);
