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
    41609: (e) => {
      e.exports = {
        WhitelistCtn: "_1UhmxrINvvaNnHzhCPoill",
        WhitelistRow: "_28TC1EYm0jlWPjyk89xXCL",
        WhitelistNumber: "IY3dF3eWXX1OmE8oYcQKp",
        Disabled: "_2VzE-3UQEHXyAext8t7gLW",
        Grabbing: "_1vSZ5gJndAOamRhVGni8HG",
        DragActive: "_31uDZXKZQlYMd8FK9xdaJb",
        Dropped: "_3bfDVSvzMDkk4s1j0Vw8jI",
        JumpToSection: "oABTo2lkoYYI5YMYaeq_Q",
        BeingDragged: "_3y7I4DL9Hua5OhZ4HgcBB5",
        DragGhost: "_61nYWo98IhSjR8PWtQX9O",
        Grabbable: "riuelIz655g_IBddWfLQ-",
        DisabledGrab: "_2K0C_m1AZvB6yeNaEXXjDD",
        WhitelistAvatar: "_3DGjmH9KW9BAXsEYwH1WpE",
        ButtonCtn: "_1hSqlvDTyj9P6eWTHXutUt",
        DragHighlightContainer: "_2jRMC5JVSK6dsktYus9Gjf",
        DragHighlight: "Y9ryg1Npznt3dpkr7BGp1",
      };
    },
    1814: (e, t, s) => {
      "use strict";
      s.d(t, { Q: () => m });
      var a = s(41735),
        n = s.n(a),
        r = s(68797),
        o = s(6144),
        i = s(30470),
        l = s(78327);
      class m {
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
          const s = new Array();
          let a = new Array();
          for (; t.length > 0; ) {
            t = t.filter(
              (e) =>
                !this.m_mapAppToLoadPromises.has(e) ||
                (s.push(this.m_mapAppToLoadPromises.get(e)), !1),
            );
            const e = t.splice(0, 5e3),
              n = this.InternalLoadAppBatch(e);
            s.push(n),
              a.push(n),
              a.length > 0 && (await Promise.all(a), (a = new Array()));
          }
          await Promise.all(s);
        }
        async InternalLoadAppBatch(e) {
          let t;
          try {
            const s = new FormData();
            s.append("sessionid", (0, l.KC)()),
              s.append("rgAppIDs", e.join(",")),
              s.append("rtimeStart", "" + this.m_rtStartTime),
              s.append("rtimeEnd", "" + this.m_rtEndTime);
            const a = `${i.TS.PARTNER_BASE_URL}promotion/planning/ajaxgetappsalesummaries`,
              o = await n().post(a, s, { withCredentials: !0 });
            if (200 == o.status && o.data?.apps_to_packages?.length > 0)
              return (
                o.data.package_summaries.forEach((e) => {
                  this.m_mapPackageSummary.set(e.packageid, e);
                }),
                o.data.apps_to_packages.forEach((e) => {
                  const t = e.subs || [];
                  this.m_mapAppPackageList.set(e.appid, t);
                  const s = {
                    appid: e.appid,
                    gross_sales_usd: 0,
                    gross_units_sold: 0,
                    net_sales_usd: 0,
                    net_units_sold: 0,
                  };
                  t.forEach((e) => {
                    const t = this.m_mapPackageSummary.get(e);
                    t &&
                      ((s.gross_sales_usd += t.gross_sales_usd),
                      (s.gross_units_sold += t.gross_units_sold),
                      (s.net_sales_usd += t.net_sales_usd),
                      (s.net_units_sold += t.net_units_sold));
                  }),
                    this.m_mapAppSaleSummary.set(e.appid, s),
                    this.BHasAppSaleSummaryChangeCallback(e.appid) &&
                      this.GetAppSaleSummaryChangeCallback(e.appid).Dispatch(s);
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
            const s = Math.floor(t.getTime() / 1e3);
            (this.m_rtEndTime = s - 86400),
              (this.m_rtStartTime = s - 24 * (e + 1) * 60 * 60);
          }
        }
      }
    },
    562: (e, t, s) => {
      "use strict";
      s.d(t, {
        DT: () => C,
        GX: () => d,
        LD: () => _,
        fT: () => g,
        k: () => A,
        lY: () => h,
        tV: () => y,
      });
      var a = s(34629),
        n = s(41735),
        r = s.n(n),
        o = s(90626),
        i = s(37085),
        l = s(68797),
        m = s(78327),
        u = s(14947),
        p = s(6419);
      async function d() {
        const e =
            m.TS.PARTNER_BASE_URL +
            "admin/store/contenthub/ajaxgetcontenthubcategorieskv",
          t = { origin: self.origin, sessionid: (0, m.KC)() };
        let s = null;
        try {
          const a = await r().get(e, { params: t, withCredentials: !0 });
          if (200 === a.status && a.data?.success === i.R) {
            const e = { rgCategories: [], bHasUnpublishedChanges: !1 };
            return (
              a.data.in_progress
                ? ((e.rgCategories = c(
                    JSON.parse(a.data.in_progress).categories,
                  )),
                  (e.bHasUnpublishedChanges = !0))
                : a.data.active &&
                  (e.rgCategories = c(JSON.parse(a.data.active).categories)),
              e
            );
          }
          s = (0, l.H)(a);
        } catch (e) {
          s = (0, l.H)(e);
        }
        return (
          console.error("GetCategoriesKV failed: " + s.strErrorMsg, s),
          { rgCategories: [] }
        );
      }
      function c(e) {
        const t = [];
        for (const s of Object.keys(e)) {
          const a = e[s],
            n = {
              handle: a.handle,
              type: a.type,
              loc_token: a.loc_token,
              description_loc_token: a.description_loc_token,
              heading: a.heading,
              id: a.id || void 0,
              exclude_from_search: Boolean(a.exclude_from_search),
              search_alias: a.search_alias,
            },
            {
              must: r,
              any: o,
              mustnot: i,
              replaces_tags: l,
              content_descriptors: m,
            } = a;
          r &&
            (Array.isArray(r)
              ? (n.must = r.map((e) => ({ id: Number(e) })))
              : (n.must = [{ id: Number(r) }])),
            o &&
              (Array.isArray(o)
                ? (n.any = o.map((e) => ({ id: Number(e) })))
                : (n.any = [{ id: Number(o) }])),
            i &&
              (Array.isArray(i)
                ? (n.mustnot = i.map((e) => ({ id: Number(e) })))
                : (n.mustnot = [{ id: Number(i) }])),
            l &&
              (Array.isArray(l)
                ? (n.replaces_tags = l.map((e) => ({ id: Number(e) })))
                : (n.replaces_tags = [{ id: Number(l) }])),
            m &&
              "string" == typeof m &&
              (n.content_descriptors = m.split(",").map((e) => parseInt(e))),
            t.push(n);
        }
        return t;
      }
      function h() {
        const [e, t] = (0, o.useState)(null);
        return (
          (0, o.useEffect)(() => {
            d().then((e) => {
              t(e.rgCategories);
            });
          }, []),
          e
        );
      }
      async function g(e) {
        const t = {};
        for (const s of e)
          (t[s.handle] = {
            handle: s.handle,
            type: s.type,
            loc_token: s.loc_token,
            description_loc_token: s.description_loc_token,
            must: s.must?.map((e) => e.id) || void 0,
            any: s.any?.map((e) => e.id) || void 0,
            mustnot: s.mustnot?.map((e) => e.id) || void 0,
            replaces_tags: s.replaces_tags?.map((e) => e.id) || void 0,
            heading: s.heading || void 0,
            id: s.id,
            exclude_from_search: s.exclude_from_search,
            search_alias: s.search_alias,
            content_descriptors: s.content_descriptors?.length
              ? s.content_descriptors.join(",")
              : void 0,
          }),
            1 === t[s.handle].must?.length &&
              (t[s.handle].must = t[s.handle].must[0]),
            1 === t[s.handle].mustnot?.length &&
              (t[s.handle].mustnot = t[s.handle].mustnot[0]),
            1 === t[s.handle].replaces_tags?.length &&
              (t[s.handle].replaces_tags = t[s.handle].replaces_tags[0]);
        const s =
            m.TS.PARTNER_BASE_URL +
            "admin/store/contenthub/ajaxsavecontenthubcategorieskv",
          a = new FormData();
        a.append("sessionid", (0, m.KC)()),
          a.append("origin", self.origin),
          a.append("json", JSON.stringify(t));
        let n = null;
        try {
          const e = await r().post(s, a, { withCredentials: !0 });
          if (200 === e.status && e.data?.success === i.R)
            return S.Get().ClearDirty(), null;
          n = (0, l.H)(e);
        } catch (e) {
          n = (0, l.H)(e);
        }
        return console.error("SaveCategoriesKV failed: " + n.strErrorMsg, n), n;
      }
      async function _() {
        const e =
            m.TS.PARTNER_BASE_URL +
            "admin/store/contenthub/ajaxpublishcontenthubcategorieskv",
          t = { origin: self.origin, sessionid: (0, m.KC)() };
        try {
          const s = await r().get(e, { params: t, withCredentials: !0 });
          if (200 !== s.status || s.data?.success !== i.R) return (0, l.H)(s);
        } catch (e) {
          return (0, l.H)(e);
        }
        return null;
      }
      class S {
        constructor() {
          (0, u.Gn)(this);
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
              m.TS.PARTNER_BASE_URL +
              "admin/store/contenthub/ajaxgetstoretagsandcategories",
            t = {
              origin: self.origin,
              sessionid: (0, m.KC)(),
              l: m.TS.LANGUAGE,
            };
          let s = null;
          try {
            const a = await r().get(e, { params: t });
            if (200 === a.status && a.data?.success === i.R)
              return (
                (this.m_rgTags = a.data.tags),
                (this.m_rgCategories = a.data.categories),
                (this.m_mapStoreTags = new Map()),
                this.m_rgTags.forEach((e) =>
                  this.m_mapStoreTags.set(e.tagid, e),
                ),
                (this.m_mapStoreCategories = new Map()),
                void this.m_rgCategories.forEach((e) =>
                  this.m_mapStoreCategories.set(e.categoryid, e),
                )
              );
            (this.m_promise = null), (s = (0, l.H)(a));
          } catch (e) {
            (this.m_promise = null), (s = (0, l.H)(e));
          }
          console.error(
            "CStoreTagsAndCategoriesStore.Load failed: " + s.strErrorMsg,
            s,
          );
        }
        static Get() {
          return S.s_singleton || (S.s_singleton = new S()), S.s_singleton;
        }
      }
      function y() {
        return S.Get().BIsDirty();
      }
      function C() {
        const [e, t] = o.useState(S.Get().GetTags()),
          [s, a] = o.useState(S.Get().GetCategories());
        return (
          o.useEffect(() => {
            (void 0 !== e && void 0 !== s) ||
              S.Get()
                .HintLoad()
                .then(() => {
                  t(S.Get().GetTags()), a(S.Get().GetCategories());
                });
          }, [s, e]),
          { rgTags: e, rgCategories: s }
        );
      }
      function A() {
        const [e, t] = o.useState(S.Get().GetStoreTagMap()),
          [s, a] = o.useState(S.Get().GetStoreCategoryMap());
        return (
          o.useEffect(() => {
            (void 0 !== e && void 0 !== s) ||
              S.Get()
                .HintLoad()
                .then(() => {
                  t(S.Get().GetStoreTagMap()), a(S.Get().GetStoreCategoryMap());
                });
          }, [s, e]),
          { mapStoreTags: e, mapStoreCategories: s }
        );
      }
      (0, a.Cg)([u.sH], S.prototype, "m_bDirty", void 0),
        (0, a.Cg)([p.o], S.prototype, "SetDirty", null);
    },
    31376: (e, t, s) => {
      "use strict";
      s.d(t, {
        AY: () => G,
        CU: () => S,
        Iw: () => x,
        Th: () => f,
        _E: () => g,
        eX: () => b,
        hl: () => v,
        mg: () => T,
        p$: () => A,
        tt: () => h,
      });
      var a = s(34629),
        n = s(41735),
        r = s.n(n),
        o = s(1814),
        i = s(14947),
        l = s(90626),
        m = s(20194),
        u = s(6144),
        p = s(73745),
        d = s(30470),
        c = s(78327);
      const h = 120,
        g = 10;
      class _ {
        m_appAndPackagesSummuries = new o.Q(h);
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
          const s = this.GetKey(e);
          return (
            this.m_mapContentHubSummaryPromises.has(s) ||
              this.m_mapContentHubSummaryPromises.set(
                s,
                this.InternalLoadContentHubSaleSummary(e, t),
              ),
            this.m_mapContentHubSummaryPromises.get(s)
          );
        }
        async InternalLoadContentHubSaleSummary(e, t) {
          const s = this.GetKey(e);
          await this.m_appAndPackagesSummuries.LoadApps(t);
          const a = {
              gross_sales_usd: 0,
              gross_units_sold: 0,
              net_sales_usd: 0,
              net_units_sold: 0,
            },
            n = new Array();
          t.forEach((e) => {
            const t = this.m_appAndPackagesSummuries.GetAppSaleSummary(e);
            t &&
              ((a.gross_sales_usd += t.gross_sales_usd),
              (a.gross_units_sold += t.gross_units_sold),
              (a.net_sales_usd += t.net_sales_usd),
              (a.net_units_sold += t.net_units_sold)),
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
            n.slice(0, g).forEach((e) => {
              (r.gross_sales_usd += e.gross_sales_usd),
                (r.gross_units_sold += e.gross_units_sold),
                (r.net_sales_usd += e.net_sales_usd),
                (r.net_units_sold += e.net_units_sold);
            }),
            this.m_mapContentHubTopAppSaleSummary.set(s, r),
            this.m_mapContentHubSummary.set(s, a),
            this.m_mapContentHubToAppCount.set(s, n.length),
            this.GetContentHubTopAppSaleSummaryChangeCallback(e).Dispatch(r),
            this.GetContentHubSummaryChangeCallback(e).Dispatch(a),
            (this.m_rgSummaries = [
              ...(this.m_rgSummaries ?? []),
              this.BuildAnalysis(e),
            ]),
            this.m_summaryAnalysisChange.Dispatch(this.m_rgSummaries),
            this.SaveToCacheSaleSummary(e, a, r, n.slice(0, g), n.length),
            a
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
              sessionid: (0, c.KC)(),
            },
            t = `${d.TS.PARTNER_BASE_URL}promotion/planning/ajaxgetcontenthubstats`,
            s = await r().get(t, { params: e });
          if (200 == s.status && s.data?.cache?.length > 0) {
            const e = new Array();
            s.data.cache.forEach((t) => {
              const s = JSON.parse(t),
                a = { handle: s.handle, type: s.type },
                n = this.GetKey(a);
              this.m_mapContentHubTopAppSaleSummary.set(n, s.topAppSummary),
                this.m_mapContentHubSummary.set(n, s.hubSummary),
                this.m_mapContentHubToAppCount.set(n, s.appCount),
                s.topApps.forEach((e) =>
                  this.m_appAndPackagesSummuries.SetAppSaleSummary(e),
                ),
                this.m_mapContentHubSummaryChange.has(n) &&
                  this.m_mapContentHubSummaryChange
                    .get(n)
                    .Dispatch(s.hubSummary),
                this.m_mapContentHubTopAppSaleSummaryChange.has(n) &&
                  this.m_mapContentHubTopAppSaleSummaryChange
                    .get(n)
                    .Dispatch(s.topAppSummary),
                e.push(this.BuildAnalysis(a));
            }),
              (this.m_rgSummaries = e),
              this.m_summaryAnalysisChange.Dispatch(e);
          }
          return null;
        }
        BuildAnalysis(e) {
          const t = this.GetKey(e),
            s = this.m_mapContentHubSummary.get(t),
            a = this.m_mapContentHubTopAppSaleSummary.get(t),
            n = this.m_mapContentHubToAppCount.get(t);
          return {
            handle: e.handle,
            total_games: n,
            hub_gross_units_sold: s.gross_units_sold,
            hub_gross_sales_usd: Math.floor(s.gross_sales_usd / 100),
            hub_units_per_day: Math.floor(s.gross_units_sold / h),
            hub_sales_usd_per_day: Math.floor(s.gross_sales_usd / (100 * h)),
            top_apps_percent:
              s.gross_sales_usd > 0
                ? ((a.gross_sales_usd / s.gross_sales_usd) * 100).toFixed(2)
                : "NA",
          };
        }
        async SaveToCacheSaleSummary(e, t, s, a, n) {
          if ("category_editor" === e.type) return;
          const o = {
              type: e.type,
              handle: e.handle,
              topAppSummary: s,
              hubSummary: t,
              topApps: a,
              appCount: n,
            },
            l = new FormData();
          l.append("sessionid", (0, c.KC)()),
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
          const m = `${d.TS.PARTNER_BASE_URL}promotion/planning/ajaxpostcontenthubstats`,
            u = await r().post(m, l, { withCredentials: !0 });
          200 != u.status &&
            console.error("SaveToCacheSaleSummary failed to save " + i.HP, u);
        }
        static s_Singleton;
        static Get() {
          return _.s_Singleton || (_.s_Singleton = new _()), _.s_Singleton;
        }
      }
      function S(e) {
        const {
          data: t,
          isLoading: s,
          isError: a,
        } = (0, m.I)({
          queryKey: ["contenthubsummary", e.type, e.handle],
          queryFn: async () => {
            const t = {
                contenthubcategorytype: e.type,
                handle: e.handle,
                sessionid: (0, c.KC)(),
              },
              s = `${d.TS.PARTNER_BASE_URL}promotion/planning/ajaxgetcontenthubsummary`,
              a = await r().get(s, { params: t });
            return 200 == a.status && a.data?.top_apps?.length > 0
              ? a.data
              : null;
          },
        });
        return {
          rgTopApps: s || a || !t ? null : t?.top_apps,
          nTotalGames: s || a || !t ? null : t?.total_games,
          isError: a,
        };
      }
      function y(e, t, s) {
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
          mustnothaveany: (s || [])
            .filter(Boolean)
            .map((e) => e.id)
            .sort()
            .join(","),
        };
      }
      (0, a.Cg)([p.oI], _.prototype, "LoadCachedSaleSummaries", null);
      const C = { total_games: 0, all_appid: [], top_games: [] };
      function A(e, t, s) {
        const {
            musthaveall: a,
            musthaveany: n,
            mustnothaveany: o,
          } = y(e, t, s),
          {
            data: i,
            isLoading: l,
            isError: u,
          } = (0, m.I)({
            queryKey: ["useContentHubCategoryEditorFullAppList", a, n, o],
            queryFn: async () => {
              const e = {
                  musthaveall: a,
                  musthaveany: n,
                  mustnothaveany: o,
                  sessionid: (0, c.KC)(),
                },
                t = `${d.TS.PARTNER_BASE_URL}promotion/planning/ajaxgetcategoryeditorapplist`,
                s = await r().get(t, { params: e });
              return 200 == s.status && s.data?.top_games?.length > 0
                ? s.data
                : null;
            },
            enabled: 0 != a.length || 0 != n.length || 0 != o.length,
          });
        return 0 == a.length && 0 == n.length && 0 == o.length ? C : i || null;
      }
      function b(e, t, s) {
        const a = A(e, t, s),
          n = (0, l.useMemo)(() => {
            const {
              musthaveall: a,
              musthaveany: n,
              mustnothaveany: r,
            } = y(e, t, s);
            return { type: "category_editor", handle: a + "_" + n + "_" + r };
          }, [e, t, s]),
          [r, o] = (0, l.useState)(_.Get().GetContentHubSaleSummary(n));
        return (
          (0, l.useEffect)(() => {
            a?.all_appid?.length &&
              !r &&
              _.Get().LoadContentHubSaleSummary(n, a.all_appid);
          }, [n, a, r]),
          (0, p.hL)(_.Get().GetContentHubSummaryChangeCallback(n), o),
          r
        );
      }
      function T(e, t, s) {
        const a = (0, l.useMemo)(() => {
            const {
              musthaveall: a,
              musthaveany: n,
              mustnothaveany: r,
            } = y(e, t, s);
            return { type: "category_editor", handle: a + "_" + n + "_" + r };
          }, [e, t, s]),
          [n, r] = (0, l.useState)(_.Get().GetTopAppSummary(a));
        return (
          (0, p.hL)(_.Get().GetContentHubTopAppSaleSummaryChangeCallback(a), r),
          n
        );
      }
      function f(e) {
        const t = (function (e) {
            const {
              data: t,
              isLoading: s,
              isError: a,
            } = (0, m.I)({
              queryKey: ["contenthubapplist", e.type, e.handle],
              queryFn: async () => {
                const t = {
                    contenthubcategorytype: e.type,
                    handle: e.handle,
                    sessionid: (0, c.KC)(),
                  },
                  s = `${d.TS.PARTNER_BASE_URL}promotion/planning/ajaxgetcontenthubapplist`,
                  a = await r().get(s, { params: t });
                return 200 == a.status && a.data?.apps?.length > 0
                  ? a.data
                  : null;
              },
            });
            return t?.apps || null;
          })(e),
          [s, a] = (0, l.useState)(_.Get().GetContentHubSaleSummary(e));
        return (
          (0, l.useEffect)(() => {
            t?.length && !s && _.Get().LoadContentHubSaleSummary(e, t);
          }, [e, e.type, e.handle, t, s]),
          (0, p.hL)(_.Get().GetContentHubSummaryChangeCallback(e), a),
          s
        );
      }
      function x(e) {
        const [t, s] = (0, l.useState)(
          _.Get().GetAppSummaryObject().GetAppSaleSummary(e),
        );
        return (
          (0, p.hL)(
            _.Get().GetAppSummaryObject().GetAppSaleSummaryChangeCallback(e),
            s,
          ),
          t
        );
      }
      function v(e) {
        const [t, s] = (0, l.useState)(_.Get().GetTopAppSummary(e));
        return (
          (0, p.hL)(_.Get().GetContentHubTopAppSaleSummaryChangeCallback(e), s),
          t
        );
      }
      function G() {
        const [e, t] = (0, l.useState)(_.Get().GetSummaryAnalysis());
        return (
          (0, l.useEffect)(() => {
            _.Get().LoadCachedSaleSummaries();
          }, []),
          (0, p.hL)(_.Get().GetSummaryAnalysisChange(), t),
          e
        );
      }
    },
    74810: (e, t, s) => {
      "use strict";
      s.d(t, {
        KU: () => j,
        Ke: () => v,
        W7: () => E,
        hp: () => f,
        iT: () => x,
        ny: () => D,
      });
      var a = s(7850),
        n = s(562),
        r = s(31376),
        o = s(40323),
        i = s.n(o),
        l = s(90626),
        m = s(16676),
        u = s(65522),
        p = s(96236),
        d = s(22797),
        c = s(52038),
        h = s(61859),
        g = s(82227),
        _ = s(30470),
        S = s(92237),
        y = s(14987),
        C = s(39777),
        A = s(71420),
        b = s(42834);
      const T = "0px 0px 100% 0px",
        f = 5e3,
        x = 500;
      function v(e) {
        const [t, s] = (0, l.useState)(!0),
          o = (0, n.lY)(),
          i = (0, l.useMemo)(
            () => (o?.length > 0 ? o.filter((e) => Boolean(e.type)) : null),
            [o],
          );
        return i && 0 != i.length
          ? (0, a.jsxs)("div", {
              children: [
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsxs)("div", {
                      className: S.DashTitleBar,
                      children: [
                        (0, a.jsx)("h1", {
                          children: "Theme Sale Planning Dashboard",
                        }),
                        (0, a.jsxs)("div", {
                          className: S.ButtonGroup,
                          children: [
                            Boolean(!t) &&
                              (0, a.jsxs)(m.$n, {
                                onClick: () => s(!0),
                                children: [
                                  "Load ",
                                  r.tt,
                                  " Days of Sale Summaries",
                                ],
                              }),
                            (0, a.jsx)(N, {}),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: S.DashDescription,
                      children: (0, a.jsxs)("ul", {
                        children: [
                          (0, a.jsxs)("li", {
                            children: [
                              "Themes are currently make from all of the categories that are defined on this",
                              " ",
                              (0, a.jsx)("a", {
                                href: `${_.TS.PARTNER_BASE_URL}admin/store/contenthub/categories`,
                                children: "categories editor page.",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("li", {
                            children: [
                              "Hubs with more than ",
                              f,
                              " games are called out as 'too big'.",
                            ],
                          }),
                          (0, a.jsx)("li", {
                            children:
                              "Sales rank shown for individual games is long-term and includes all sources of revenue.",
                          }),
                          (0, a.jsx)("li", {
                            children:
                              "Revenue shown is computed over the past 45 days and only using base games package revenue (a technical limitation for now) ",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                i.map((e, s) =>
                  (0, a.jsx)(G, { category: e, bSaleSummary: t }, s),
                ),
              ],
            })
          : (0, a.jsx)(d.t, { string: (0, h.we)("#Loading") });
      }
      function G(e) {
        const { category: t, bSaleSummary: s } = e;
        return (0, a.jsx)(p.K, {
          placeholderHeight: 250,
          rootMargin: T,
          children: (0, a.jsx)(w, { category: t, bSaleSummary: s }),
        });
      }
      function j(e) {
        const { nTotalGames: t } = e;
        let s, n;
        return (
          t > x && t <= f
            ? ((s = S.SizeColorSweet), (n = "Good size!"))
            : t > f
              ? ((s = S.SizeColorBig), (n = "Too big"))
              : ((s = S.SizeColorSmall), (n = "Too small")),
          (0, a.jsxs)("div", {
            className: (0, c.A)(S.ThemeSize, s),
            children: [(0, g.Dq)(t), " games ( ", n, ")"],
          })
        );
      }
      function w(e) {
        const { category: t, bSaleSummary: s } = e,
          { rgTopApps: n, nTotalGames: o } = (0, r.CU)(t),
          i = o > 500 && o <= f;
        return (0, a.jsxs)("div", {
          className: S.ThemeRow,
          children: [
            (0, a.jsxs)("div", {
              className: S.ThemeDefinitionCtn,
              children: [
                (0, a.jsx)("a", {
                  href: `${_.TS.STORE_BASE_URL}category/${t.handle}`,
                  className: S.ThemeTitle,
                  children: t.loc_token ? (0, h.we)(t.loc_token) : t.handle,
                }),
                (0, a.jsx)(j, { nTotalGames: o }),
                (0, a.jsx)("div", {
                  className: S.SaleStats,
                  children: Boolean(s && i) && (0, a.jsx)(k, { category: t }),
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: S.TopGamesCtn,
              children: [
                (0, a.jsx)("div", { children: "Top 10 Games non-F2P:" }),
                (0, a.jsx)("div", {
                  className: S.GamesRow,
                  children: n
                    ?.slice(0, 10)
                    .map((e) =>
                      (0, a.jsx)(
                        E,
                        { info: e, category: t, bSaleSummary: s && i },
                        e.appid,
                      ),
                    ),
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: S.ThemeDetails,
              children: ["handle: ", t.handle, (0, a.jsx)(R, { category: t })],
            }),
          ],
        });
      }
      function E(e) {
        const { info: t, bSaleSummary: s } = e,
          n = (0, y.$5)(t.appid),
          { data: r } = (0, C.lv)(n),
          { data: o } = (0, C.J$)(n);
        return o && r
          ? (0, a.jsxs)("div", {
              className: S.GameItem,
              children: [
                (0, a.jsx)(u.Q, {
                  id: n,
                  hoverProps: {
                    direction: "overlay",
                    style: { minWidth: "320px", maxWidth: "320px" },
                  },
                  className: S.GameImage,
                  children: (0, a.jsx)("a", {
                    href: (0, A._)(o),
                    children: (0, a.jsx)("img", {
                      src: (0, b.b0)(r, "header"),
                      alt: o.name,
                    }),
                  }),
                }),
                (0, a.jsxs)("div", {
                  children: [" Rank: ", t.long_term_sale_rank],
                }),
                Boolean(s) && (0, a.jsx)(H, { ...e }),
              ],
            })
          : (0, a.jsxs)("div", {
              children: [
                "Loading appid: ",
                t.appid,
                " with rank: ",
                t.long_term_sale_rank,
              ],
            });
      }
      function H(e) {
        const { info: t, category: s } = e,
          n = (0, r.Iw)(t.appid),
          o = (0, r.Th)(s);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            Boolean(n) &&
              (0, a.jsxs)("div", {
                children: [
                  " ",
                  "$",
                  (0, g.Dq)(Math.floor(n.gross_sales_usd / 100)),
                ],
              }),
            Boolean(n && o?.gross_sales_usd) &&
              (0, a.jsxs)("div", {
                children: [
                  "( ",
                  ((n.gross_sales_usd / o.gross_sales_usd) * 100).toFixed(2),
                  "% of hub )",
                ],
              }),
          ],
        });
      }
      function R(e) {
        const { mapStoreTags: t, mapStoreCategories: s } = (0, n.k)(),
          { category: r } = e;
        return t && s && (r.any || r.must || r.mustnot)
          ? (0, a.jsxs)("div", {
              className: S.ThemeTags,
              children: [
                Boolean(r.must) &&
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("span", {
                        className: S.TagsMustTitle,
                        children: "Must:",
                      }),
                      " ",
                      r.must?.map((e) =>
                        (0, a.jsx)(
                          B,
                          { type: r.type, id: e.id },
                          r.type + "_" + e.id + "_" + r.handle,
                        ),
                      ),
                    ],
                  }),
                Boolean(r.any) &&
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("span", {
                        className: S.TagsOrTitle,
                        children: "Any:",
                      }),
                      " ",
                      r.any?.map((e) =>
                        (0, a.jsx)(
                          B,
                          { type: r.type, id: e.id },
                          r.type + "_" + e.id + "_" + r.handle,
                        ),
                      ),
                    ],
                  }),
                Boolean(r.mustnot) &&
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("span", {
                        className: S.TagsNotTitle,
                        children: "Must Not:",
                      }),
                      " ",
                      r.mustnot?.map((e) =>
                        (0, a.jsx)(
                          B,
                          { type: r.type, id: e.id },
                          r.type + "_" + e.id + "_" + r.handle,
                        ),
                      ),
                    ],
                  }),
              ],
            })
          : null;
      }
      function B(e) {
        const { mapStoreTags: t, mapStoreCategories: s } = (0, n.k)(),
          { type: r, id: o } = e;
        return "tagids" == r
          ? (0, a.jsxs)("span", {
              children: [t.has(o) ? t.get(o).name : "tagid: " + o, ", "],
            })
          : (0, a.jsxs)("span", {
              children: [s.has(o) ? s.get(o).name : "category id: " + o, ", "],
            });
      }
      function D(e) {
        const { saleSummary: t, topAppSummary: s } = e;
        return t
          ? (0, a.jsx)("div", {
              className: S.ThemeRevenueCtn,
              children: (0, a.jsx)("table", {
                children: (0, a.jsx)("tbody", {
                  children: (0, a.jsxs)("tr", {
                    children: [
                      (0, a.jsxs)("td", {
                        children: [
                          "Total: ",
                          (0, a.jsx)("br", {}),
                          "$",
                          (0, g.Dq)(Math.floor(t.gross_sales_usd / 100)),
                        ],
                      }),
                      (0, a.jsxs)("td", {
                        children: [
                          "Per Day: ",
                          (0, a.jsx)("br", {}),
                          "$",
                          (0, g.Dq)(
                            Math.floor(t.gross_sales_usd / (100 * r.tt)),
                          ),
                        ],
                      }),
                      (0, a.jsxs)("td", {
                        children: [
                          "Total Units: ",
                          (0, a.jsx)("br", {}),
                          (0, g.Dq)(t.gross_units_sold),
                        ],
                      }),
                      (0, a.jsxs)("td", {
                        children: [
                          "Units Per Day: ",
                          (0, a.jsx)("br", {}),
                          (0, g.Dq)(Math.floor(t.gross_units_sold / r.tt)),
                        ],
                      }),
                      Boolean(t.gross_sales_usd > 0) &&
                        (0, a.jsx)(a.Fragment, {
                          children: (0, a.jsxs)("td", {
                            children: [
                              "Top ",
                              r._E,
                              " Apps: ",
                              (0, a.jsx)("br", {}),
                              (0, a.jsxs)("span", {
                                className:
                                  (s.gross_sales_usd / t.gross_sales_usd) *
                                    100 >
                                  90
                                    ? S.SizeColorBig
                                    : S.SizeColorSweet,
                                children: [
                                  (
                                    (s.gross_sales_usd / t.gross_sales_usd) *
                                    100
                                  ).toFixed(2),
                                  "%",
                                ],
                              }),
                              " of revenue",
                            ],
                          }),
                        }),
                    ],
                  }),
                }),
              }),
            })
          : (0, a.jsx)(d.t, {
              position: "center",
              string: "Loading Sale Info",
            });
      }
      function k(e) {
        const { category: t } = e,
          s = (0, r.Th)(t),
          n = (0, r.hl)(t);
        return (0, a.jsx)(D, { saleSummary: s, topAppSummary: n });
      }
      function N(e) {
        const t = (0, r.AY)();
        return (0, a.jsx)("a", {
          href: `data:application/octet-stream,${encodeURIComponent(i().unparse({ data: t, fields: Object.keys(t ? t[0] : {}) }))}`,
          download: "theme_sale_stats.csv",
          children: "Export CSV",
        });
      }
    },
    56654: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => y });
      var a = s(7850),
        n = s(90626),
        r = s(73745);
      const o =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEEFRg0nBijuQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAw0lEQVRIx+2WMQqDMBSG/xedEnCp3kFzh56gN+iN7SrFLsEDmElwDHGyFNEYlQyF/FPgvXx5fMsL3R9P+CRJEgsAxhjy6We+UClLSFl+H7gMnqGcC3AuvOHMFzrHF86OQI/A062CMYaa5o2zYQiUNMsyGwRcVWWQicOpaNsPooqoIqqIKvYmrusX/dXE4VS4lqkQwnl5HMfND4xzmRbFzeZ5sVrXuscwDHRKhVIdad2vQpXq6JLjJdwH6lSxhAOwP+fdTHcfVDuVWnTzAAAAAElFTkSuQmCC";
      var i = s(44894),
        l = s(62490),
        m = s(41609),
        u = s.n(m),
        p = s(64641),
        d = s.n(p),
        c = s(12155),
        h = s(41735),
        g = s.n(h),
        _ = s(25489),
        S = s(52038);
      function y(e) {
        const {
            items: t,
            render: s,
            onDelete: m,
            onEdit: p,
            onReorder: h,
            onMove: y,
            bDisabled: A,
            rowClassName: b,
          } = e,
          [T, f] = n.useState(!1),
          [x, v] = n.useState(void 0),
          [G, j] = n.useState(void 0),
          [w, E] = n.useState(-1),
          [H, R] = n.useState(void 0),
          [B, D] = n.useState(0),
          [k, N] = n.useState(0),
          [L, M] = n.useState(void 0),
          [P, I] = n.useState(""),
          K = n.useRef(void 0),
          U = n.useRef([]),
          W = n.useRef([]),
          Y = n.useMemo(() => g().CancelToken.source(), []),
          F = () => {
            K.current?.firstElementChild &&
              (D(K.current.firstElementChild.getBoundingClientRect().height),
              N(K.current.firstElementChild.getBoundingClientRect().width));
          };
        n.useEffect(() => {
          F();
        }, []),
          n.useEffect(() => () => Y.cancel("ReorderableList unmounting"), [Y]);
        const z = n.useCallback(
            (e) => {
              const t = U.current[w]?.current;
              t
                ? ((t.style.left = e.clientX - x + "px"),
                  (t.style.top = e.clientY - G + "px"))
                : console.error("update grab element missing element");
            },
            [w, x, G],
          ),
          O = n.useCallback(() => {
            const e = U.current[w]?.current;
            e
              ? ((e.style.position = ""), (e.style.zIndex = ""))
              : console.error("end element drag missing element"),
              f(!1),
              E(-1),
              M(void 0),
              R(void 0);
          }, [w]),
          Q = (e, t) => {
            Y.token.reason ||
              (K.current.firstElementChild?.getBoundingClientRect().height >
                0 &&
                B !=
                  K.current.firstElementChild.getBoundingClientRect().height &&
                F(),
              ((e, t) => {
                const s = U.current[e]?.current;
                if (!s)
                  return void console.error(
                    "start element grab missing element at index " + e,
                  );
                f(!0), E(e), M(void 0), R(e);
                const a = t.clientX - s.getBoundingClientRect().left;
                v(a);
                const n = t.clientY - s.getBoundingClientRect().top;
                j(n),
                  (s.style.position = "fixed"),
                  (s.style.left = t.clientX - a + "px"),
                  (s.style.top = t.clientY - n + "px"),
                  (s.style.zIndex = "1");
              })(t, e),
              e.preventDefault());
          },
          q = (e, s) => {
            const a = _.OQ(s > e ? s - 1 : s, 0, t.length - 1);
            e != a && (y ? y(e, a) : (0, l.yY)(t, e, a), $(a), h && h(t));
          },
          X = n.useCallback(
            (e) => {
              if (!T || Y.token.reason) return;
              const t = e.clientY;
              let s;
              for (let e = 0; e < W.current.length; e++) {
                if (
                  t <
                  (W.current[e].current.getBoundingClientRect().top +
                    2 * W.current[e].current.getBoundingClientRect().bottom) /
                    3
                ) {
                  s = e;
                  break;
                }
              }
              R(s ?? W.current.length), z(e);
            },
            [T, Y, z],
          );
        (0, r.l6)(window, "mousemove", T ? X : void 0),
          (0, r.l6)(
            window,
            "mouseup",
            T
              ? (e) => {
                  T && !Y.token.reason && (O(), q(w, H));
                }
              : void 0,
          ),
          n.useEffect(() => {
            for (let e = U.current.length; e < t.length; e++)
              U.current.push(n.createRef()), W.current.push(n.createRef());
          }, [t.length]);
        const J = (e) => {
            M(void 0);
            const t = P?.trim(),
              s = Number.parseInt(t);
            if (0 == t.length || isNaN(s)) return;
            const a = s - 1;
            e != a && q(e, a);
          },
          [V, $] = n.useState(void 0);
        return (0, a.jsx)("div", {
          className: u().WhitelistCtn,
          ref: K,
          children: t.map((e, n) =>
            (0, a.jsxs)(
              "div",
              {
                ref: W.current[n],
                children: [
                  n == H && (0, a.jsx)(C, { width: k }),
                  (0, a.jsx)("div", {
                    ref: U.current[n],
                    className: u().DragGhost,
                    children:
                      n == w &&
                      (0, a.jsxs)("div", {
                        className: (0, S.A)(u().WhitelistRow, b),
                        children: [
                          (0, a.jsx)("img", {
                            className: (0, S.A)(
                              u().WhitelistAvatar,
                              u().Grabbing,
                            ),
                            src: o,
                          }),
                          (0, a.jsx)("input", {
                            className: (0, S.A)(
                              u().WhitelistNumber,
                              u().Disabled,
                              u().Grabbing,
                            ),
                            type: "text",
                            value: (H > n ? H - 1 : H) + 1,
                            disabled: !0,
                          }),
                          s(e, n),
                        ],
                      }),
                  }),
                  (0, a.jsxs)("div", {
                    className: (0, S.A)(
                      u().WhitelistRow,
                      b,
                      T && u().DragActive,
                      n == w && u().BeingDragged,
                      V == n && u().Dropped,
                    ),
                    onAnimationEnd: () => $(void 0),
                    children: [
                      (0, a.jsx)("img", {
                        className: (0, S.A)(
                          u().WhitelistAvatar,
                          u().Grabbable,
                          A && u().DisabledGrab,
                        ),
                        src: o,
                        onMouseDown: Boolean(A) ? void 0 : (e) => Q(e, n),
                      }),
                      (0, a.jsx)("input", {
                        className: (0, S.A)(
                          u().WhitelistNumber,
                          A && u().Disabled,
                        ),
                        type: "text",
                        value: L == n ? P : n + 1,
                        disabled: A || n == w,
                        onChange: (e) => I(e.target.value),
                        onKeyDown: (e) =>
                          ((e, t) => {
                            "Enter" === e.key && (J(t), e.currentTarget.blur());
                          })(e, n),
                        onFocus: (e) => {
                          M(n), I(e.target.value);
                        },
                        onBlur: () => J(n),
                      }),
                      s(e, n),
                      Boolean(n != w) &&
                        Boolean(p || m) &&
                        (0, a.jsxs)("div", {
                          className: u().ButtonCtn,
                          children: [
                            Boolean(p) &&
                              (0, a.jsx)("div", {
                                className: d().RemoveIcon,
                                onClick: (e) => p(n, e),
                                children: (0, a.jsx)(c.ffu, {}),
                              }),
                            Boolean(m) &&
                              (0, a.jsx)("img", {
                                className: d().RemoveIcon,
                                src: i.A,
                                onClick: (e) => m(n, e),
                              }),
                          ],
                        }),
                    ],
                  }),
                  H == t.length &&
                    n == t.length - 1 &&
                    (0, a.jsx)(C, { width: k }),
                ],
              },
              n,
            ),
          ),
        });
      }
      function C(e) {
        const { width: t } = e;
        return (0, a.jsx)("div", {
          className: u().DragHighlightContainer,
          children: (0, a.jsx)("div", {
            className: u().DragHighlight,
            style: { width: t },
          }),
        });
      }
    },
  },
]);
