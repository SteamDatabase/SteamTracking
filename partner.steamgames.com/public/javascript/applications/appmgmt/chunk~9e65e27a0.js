/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7352],
  {
    4940: (e) => {
      e.exports = {
        TitleHR: "_1rdzNwXOoo1-LmnB-gVa8L",
        ActionButtonCtn: "_7a7-wklt6L9bHpSe8uw95",
        CategoriesList: "YMtVaSAftRDKdmUzno1V-",
        CategoryCtn: "_1vjux5UePGI2QR8pgGS5s9",
        Category: "_12BB3TMamY8yT5zyDnNr5Y",
        CategoryType: "_2rg93RSnGgt35AemsbS3XN",
        ExcludedFromSearch: "_1qSt9f_EVF7MmpIxINFOnq",
        ReplacesTags: "_2VMbzBly9fJ6k58VPyo5Dw",
        CategoryEditor: "hDZX9jvA2yVDsxIl25krT",
        TagOrCategoryList: "_33SvLrTusAraXr9O6rG1RK",
        IDSelector: "_1COCuEUNPkqoSthDBf5dKb",
        CategorySummary: "_1h-LQnwvNcayOGn1YjEAw8",
        Clause: "_17Lm214eZBjzdDsBlWCP0y",
        Item: "uZOnNO-9GSMjuZg73yUDz",
        UnpublishedChangesNotice: "_3IZil2pI21oJCdU0WQn6Z3",
      };
    },
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
    1814: (e, t, a) => {
      "use strict";
      a.d(t, { Q: () => i });
      var s = a(41735),
        n = a.n(s),
        r = a(68797),
        o = a(6144),
        l = a(30470);
      class i {
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
            a.append("sessionid", l.TS.SESSIONID),
              a.append("rgAppIDs", e.join(",")),
              a.append("rtimeStart", "" + this.m_rtStartTime),
              a.append("rtimeEnd", "" + this.m_rtEndTime);
            const s = `${l.TS.PARTNER_BASE_URL}promotion/planning/ajaxgetappsalesummaries`,
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
          "dev" == l.TS.WEB_UNIVERSE &&
            console.log(
              `CAppSaleSummary initializing to ${this.m_rtStartTime} to ${this.m_rtEndTime}`,
            );
        }
      }
    },
    562: (e, t, a) => {
      "use strict";
      a.d(t, {
        DT: () => b,
        GX: () => d,
        LD: () => S,
        XL: () => E,
        fT: () => _,
        fs: () => p,
        k: () => T,
        lY: () => h,
        tV: () => A,
        vv: () => C,
      });
      var s = a(34629),
        n = a(41735),
        r = a.n(n),
        o = a(90626),
        l = a(68797),
        i = a(78327),
        m = a(14947),
        u = a(65946),
        c = a(6419);
      class p {
        m_mapCategories;
        m_promise;
        static s_singleton;
        constructor() {
          "dev" === i.TS.WEB_UNIVERSE &&
            (window.g_ContentHubCategoriesStore = this);
        }
        BIsLoaded() {
          return Boolean(this.m_mapCategories);
        }
        GetCategories() {
          return this.m_mapCategories;
        }
        async HintLoad() {
          return (
            this.m_promise || (this.m_promise = this.Load()), this.m_promise
          );
        }
        async Load() {
          const e =
              i.TS.PARTNER_BASE_URL +
              "admin/store/contenthub/ajaxgetcontenthubcategories",
            t = { origin: self.origin, sessionid: i.TS.SESSIONID };
          let a = null;
          try {
            const s = await r().get(e, { params: t });
            if (200 === s.status && 1 === s.data?.success)
              return void (this.m_mapCategories = this.ParseResponse(s.data));
            (this.m_promise = null), (a = (0, l.H)(s));
          } catch (e) {
            (this.m_promise = null), (a = (0, l.H)(e));
          }
          console.error(
            "CContentHubCategoriesStore.Load failed: " + a.strErrorMsg,
            a,
          );
        }
        ParseResponse(e) {
          const t = new Map(),
            a = e.categories;
          for (const e of Object.keys(a)) {
            const s = a[e],
              n = {
                handle: s.handle,
                loc_token: s.loc_token,
                type: s.type,
                heading: s.heading,
                id: s.id || void 0,
                exclude_from_search: s.exclude_from_search,
                search_alias: s.search_alias,
              };
            s.must &&
              (Array.isArray(s.must)
                ? (n.must = s.must.map((e) => ({ id: e })))
                : (n.must = [{ id: s.must }])),
              s.any &&
                (Array.isArray(s.any)
                  ? (n.any = s.any.map((e) => ({ id: e })))
                  : (n.any = [{ id: s.any }])),
              s.mustnot &&
                (Array.isArray(s.mustnot)
                  ? (n.mustnot = s.mustnot.map((e) => ({ id: e })))
                  : (n.mustnot = [{ id: s.mustnot }])),
              s.replaces_tags &&
                (Array.isArray(s.replaces_tags)
                  ? (n.replaces_tags = s.replaces_tags.map((e) => ({ id: e })))
                  : (n.replaces_tags = [{ id: s.replaces_tags }])),
              t.set(e, n);
          }
          return t;
        }
        static Get() {
          return p.s_singleton || (p.s_singleton = new p()), p.s_singleton;
        }
      }
      async function d() {
        const e =
            i.TS.PARTNER_BASE_URL +
            "admin/store/contenthub/ajaxgetcontenthubcategorieskv",
          t = { origin: self.origin, sessionid: i.TS.SESSIONID };
        let a = null;
        try {
          const s = await r().get(e, { params: t, withCredentials: !0 });
          if (200 === s.status && 1 === s.data?.success) {
            const e = { rgCategories: [], bHasUnpublishedChanges: !1 };
            return (
              s.data.in_progress
                ? ((e.rgCategories = g(
                    JSON.parse(s.data.in_progress).categories,
                  )),
                  (e.bHasUnpublishedChanges = !0))
                : s.data.active &&
                  (e.rgCategories = g(JSON.parse(s.data.active).categories)),
              e
            );
          }
          a = (0, l.H)(s);
        } catch (e) {
          a = (0, l.H)(e);
        }
        return (
          console.error("GetCategoriesKV failed: " + a.strErrorMsg, a),
          { rgCategories: [] }
        );
      }
      function g(e) {
        const t = [];
        for (const a of Object.keys(e)) {
          const s = e[a],
            n = {
              handle: s.handle,
              type: s.type,
              loc_token: s.loc_token,
              heading: s.heading,
              id: s.id || void 0,
              exclude_from_search: Boolean(s.exclude_from_search),
              search_alias: s.search_alias,
            };
          s.must &&
            (Array.isArray(s.must)
              ? (n.must = s.must.map((e) => ({ id: Number(e) })))
              : (n.must = [{ id: Number(s.must) }])),
            s.any &&
              (Array.isArray(s.any)
                ? (n.any = s.any.map((e) => ({ id: Number(e) })))
                : (n.any = [{ id: Number(s.any) }])),
            s.mustnot &&
              (Array.isArray(s.mustnot)
                ? (n.mustnot = s.mustnot.map((e) => ({ id: Number(e) })))
                : (n.mustnot = [{ id: Number(s.mustnot) }])),
            s.replaces_tags &&
              (Array.isArray(s.replaces_tags)
                ? (n.replaces_tags = s.replaces_tags.map((e) => ({
                    id: Number(e),
                  })))
                : (n.replaces_tags = [{ id: Number(s.replaces_tags) }])),
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
      async function _(e) {
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
          }),
            1 === t[a.handle].must?.length &&
              (t[a.handle].must = t[a.handle].must[0]),
            1 === t[a.handle].mustnot?.length &&
              (t[a.handle].mustnot = t[a.handle].mustnot[0]),
            1 === t[a.handle].replaces_tags?.length &&
              (t[a.handle].replaces_tags = t[a.handle].replaces_tags[0]);
        const a =
            i.TS.PARTNER_BASE_URL +
            "admin/store/contenthub/ajaxsavecontenthubcategorieskv",
          s = new FormData();
        s.append("sessionid", i.TS.SESSIONID),
          s.append("origin", self.origin),
          s.append("json", JSON.stringify(t));
        let n = null;
        try {
          const e = await r().post(a, s, { withCredentials: !0 });
          if (200 === e.status && 1 === e.data?.success)
            return y.Get().ClearDirty(), null;
          n = (0, l.H)(e);
        } catch (e) {
          n = (0, l.H)(e);
        }
        return console.error("SaveCategoriesKV failed: " + n.strErrorMsg, n), n;
      }
      async function S() {
        const e =
            i.TS.PARTNER_BASE_URL +
            "admin/store/contenthub/ajaxpublishcontenthubcategorieskv",
          t = { origin: self.origin, sessionid: i.TS.SESSIONID };
        try {
          const a = await r().get(e, { params: t, withCredentials: !0 });
          if (200 !== a.status || 1 !== a.data?.success) return (0, l.H)(a);
        } catch (e) {
          return (0, l.H)(e);
        }
        return null;
      }
      class y {
        constructor() {
          (0, m.Gn)(this),
            "dev" === i.TS.WEB_UNIVERSE && (window.g_StoreTagStore = this);
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
              i.TS.PARTNER_BASE_URL +
              "admin/store/contenthub/ajaxgetstoretagsandcategories",
            t = {
              origin: self.origin,
              sessionid: i.TS.SESSIONID,
              l: i.TS.LANGUAGE,
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
                  "dev" === i.TS.WEB_UNIVERSE &&
                  console.log(
                    "tags " +
                      this.m_rgTags.length +
                      ", categories " +
                      this.m_rgCategories.length,
                  )
                )
              );
            (this.m_promise = null), (a = (0, l.H)(s));
          } catch (e) {
            (this.m_promise = null), (a = (0, l.H)(e));
          }
          console.error(
            "CStoreTagsAndCategoriesStore.Load failed: " + a.strErrorMsg,
            a,
          );
        }
        static Get() {
          return y.s_singleton || (y.s_singleton = new y()), y.s_singleton;
        }
      }
      function E() {
        return (0, u.q3)(() => y.Get().BIsDirty());
      }
      function C() {
        return { fnSetDirty: y.Get().SetDirty };
      }
      function A() {
        return y.Get().BIsDirty();
      }
      function b() {
        const [e, t] = o.useState(y.Get().GetTags()),
          [a, s] = o.useState(y.Get().GetCategories());
        return (
          o.useEffect(() => {
            (void 0 !== e && void 0 !== a) ||
              y
                .Get()
                .HintLoad()
                .then(() => {
                  t(y.Get().GetTags()), s(y.Get().GetCategories());
                });
          }, [a, e]),
          { rgTags: e, rgCategories: a }
        );
      }
      function T() {
        const [e, t] = o.useState(y.Get().GetStoreTagMap()),
          [a, s] = o.useState(y.Get().GetStoreCategoryMap());
        return (
          o.useEffect(() => {
            (void 0 !== e && void 0 !== a) ||
              y
                .Get()
                .HintLoad()
                .then(() => {
                  t(y.Get().GetStoreTagMap()), s(y.Get().GetStoreCategoryMap());
                });
          }, [a, e]),
          { mapStoreTags: e, mapStoreCategories: a }
        );
      }
      (0, s.Cg)([m.sH], y.prototype, "m_bDirty", void 0),
        (0, s.Cg)([c.o], y.prototype, "SetDirty", null);
    },
    31376: (e, t, a) => {
      "use strict";
      a.d(t, {
        AY: () => v,
        CU: () => _,
        Iw: () => T,
        Th: () => b,
        _E: () => g,
        eX: () => C,
        hl: () => f,
        mg: () => A,
        p$: () => E,
        tt: () => d,
      });
      var s = a(34629),
        n = a(41735),
        r = a.n(n),
        o = a(1814),
        l = a(14947),
        i = a(90626),
        m = a(20194),
        u = a(6144),
        c = a(73745),
        p = a(30470);
      const d = 120,
        g = 10;
      class h {
        m_appAndPackagesSummuries = new o.Q(d);
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
            n.slice(0, g).forEach((e) => {
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
            this.SaveToCacheSaleSummary(e, s, r, n.slice(0, g), n.length),
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
              sessionid: p.TS.SESSIONID,
            },
            t = `${p.TS.PARTNER_BASE_URL}promotion/planning/ajaxgetcontenthubstats`,
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
            hub_units_per_day: Math.floor(a.gross_units_sold / d),
            hub_sales_usd_per_day: Math.floor(a.gross_sales_usd / (100 * d)),
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
            i = new FormData();
          i.append("sessionid", p.TS.SESSIONID),
            i.append(
              "rtStartTime",
              "" + this.m_appAndPackagesSummuries.GetRTStartTime(),
            ),
            i.append(
              "rtEndTime",
              "" + this.m_appAndPackagesSummuries.GetRTEndTime(),
            ),
            i.append("bClear", "false"),
            i.append("key", this.GetKey(e)),
            i.append("rgStats", JSON.stringify(o));
          const m = `${p.TS.PARTNER_BASE_URL}promotion/planning/ajaxpostcontenthubstats`,
            u = await r().post(m, i, { withCredentials: !0 });
          200 != u.status &&
            console.error("SaveToCacheSaleSummary failed to save " + l.HP, u);
        }
        static s_Singleton;
        static Get() {
          return (
            h.s_Singleton ||
              ((h.s_Singleton = new h()),
              "dev" == p.TS.WEB_UNIVERSE &&
                (window.g_ThemeEventStore = h.s_Singleton)),
            h.s_Singleton
          );
        }
      }
      function _(e) {
        const {
          data: t,
          isLoading: a,
          isError: s,
        } = (0, m.I)({
          queryKey: ["contenthubsummary", e.type, e.handle],
          queryFn: async () => {
            const t = {
                contenthubcategorytype: e.type,
                handle: e.handle,
                sessionid: p.TS.SESSIONID,
              },
              a = `${p.TS.PARTNER_BASE_URL}promotion/planning/ajaxgetcontenthubsummary`,
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
      (0, s.Cg)([c.oI], h.prototype, "LoadCachedSaleSummaries", null);
      const y = { total_games: 0, all_appid: [], top_games: [] };
      function E(e, t, a) {
        const {
            musthaveall: s,
            musthaveany: n,
            mustnothaveany: o,
          } = S(e, t, a),
          {
            data: l,
            isLoading: i,
            isError: u,
          } = (0, m.I)({
            queryKey: ["useContentHubCategoryEditorFullAppList", s, n, o],
            queryFn: async () => {
              const e = {
                  musthaveall: s,
                  musthaveany: n,
                  mustnothaveany: o,
                  sessionid: p.TS.SESSIONID,
                },
                t = `${p.TS.PARTNER_BASE_URL}promotion/planning/ajaxgetcategoryeditorapplist`,
                a = await r().get(t, { params: e });
              return 200 == a.status && a.data?.top_games?.length > 0
                ? a.data
                : null;
            },
            enabled: 0 != s.length || 0 != n.length || 0 != o.length,
          });
        return 0 == s.length && 0 == n.length && 0 == o.length ? y : l || null;
      }
      function C(e, t, a) {
        const s = E(e, t, a),
          n = (0, i.useMemo)(() => {
            const {
              musthaveall: s,
              musthaveany: n,
              mustnothaveany: r,
            } = S(e, t, a);
            return { type: "category_editor", handle: s + "_" + n + "_" + r };
          }, [e, t, a]),
          [r, o] = (0, i.useState)(h.Get().GetContentHubSaleSummary(n));
        return (
          (0, i.useEffect)(() => {
            s?.all_appid?.length &&
              !r &&
              h.Get().LoadContentHubSaleSummary(n, s.all_appid);
          }, [n, s, r]),
          (0, c.hL)(h.Get().GetContentHubSummaryChangeCallback(n), o),
          r
        );
      }
      function A(e, t, a) {
        const s = (0, i.useMemo)(() => {
            const {
              musthaveall: s,
              musthaveany: n,
              mustnothaveany: r,
            } = S(e, t, a);
            return { type: "category_editor", handle: s + "_" + n + "_" + r };
          }, [e, t, a]),
          [n, r] = (0, i.useState)(h.Get().GetTopAppSummary(s));
        return (
          (0, c.hL)(h.Get().GetContentHubTopAppSaleSummaryChangeCallback(s), r),
          n
        );
      }
      function b(e) {
        const t = (function (e) {
            const {
              data: t,
              isLoading: a,
              isError: s,
            } = (0, m.I)({
              queryKey: ["contenthubapplist", e.type, e.handle],
              queryFn: async () => {
                const t = {
                    contenthubcategorytype: e.type,
                    handle: e.handle,
                    sessionid: p.TS.SESSIONID,
                  },
                  a = `${p.TS.PARTNER_BASE_URL}promotion/planning/ajaxgetcontenthubapplist`,
                  s = await r().get(a, { params: t });
                return 200 == s.status && s.data?.apps?.length > 0
                  ? s.data
                  : null;
              },
            });
            return t?.apps || null;
          })(e),
          [a, s] = (0, i.useState)(h.Get().GetContentHubSaleSummary(e));
        return (
          (0, i.useEffect)(() => {
            t?.length && !a && h.Get().LoadContentHubSaleSummary(e, t);
          }, [e, e.type, e.handle, t, a]),
          (0, c.hL)(h.Get().GetContentHubSummaryChangeCallback(e), s),
          a
        );
      }
      function T(e) {
        const [t, a] = (0, i.useState)(
          h.Get().GetAppSummaryObject().GetAppSaleSummary(e),
        );
        return (
          (0, c.hL)(
            h.Get().GetAppSummaryObject().GetAppSaleSummaryChangeCallback(e),
            a,
          ),
          t
        );
      }
      function f(e) {
        const [t, a] = (0, i.useState)(h.Get().GetTopAppSummary(e));
        return (
          (0, c.hL)(h.Get().GetContentHubTopAppSaleSummaryChangeCallback(e), a),
          t
        );
      }
      function v() {
        const [e, t] = (0, i.useState)(h.Get().GetSummaryAnalysis());
        return (
          (0, i.useEffect)(() => {
            h.Get().LoadCachedSaleSummaries();
          }, []),
          (0, c.hL)(h.Get().GetSummaryAnalysisChange(), t),
          e
        );
      }
    },
    65213: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => f });
      var s = a(562),
        n = a(31376),
        r = a(90626),
        o = a(82359),
        l = a(45737),
        i = a.n(l),
        m = a(16676),
        u = a(9154),
        c = a(738),
        p = a(56654),
        d = a(12155),
        g = a(22797),
        h = a(9161),
        _ = a(61859),
        S = a(73745),
        y = a(30470),
        E = a(74810),
        C = a(92237),
        A = a(4940),
        b = a.n(A),
        T = a(95034);
      function f() {
        const [e, t] = r.useState(),
          [a, n] = r.useState(!1),
          o = (0, s.XL)(),
          { fnSetDirty: l } = (0, s.vv)(),
          [u, p] = r.useState(!1),
          [h, _] = r.useState(!1);
        return (
          r.useEffect(() => {
            (0, s.GX)().then((e) => {
              t(e.rgCategories), _(e.bHasUnpublishedChanges), n(!0);
            });
          }, []),
          a
            ? r.createElement(
                "div",
                { className: i().AdminPageCtn },
                r.createElement(
                  "div",
                  { className: i().PageTitle },
                  "Content Hub Categories",
                ),
                r.createElement("hr", { className: b().TitleHR }),
                r.createElement(
                  "p",
                  null,
                  "This page lets you review and edit existing categories. Click on their titles.  At the bottom there is controls to create a new category. To see the hubs performance related to making a theme sale ",
                  r.createElement(
                    "a",
                    {
                      href: `${y.TS.PARTNER_BASE_URL}promotion/planning/themes`,
                    },
                    "here.",
                  ),
                ),
                r.createElement(
                  "a",
                  {
                    href: "https://grafana.valve.org/steam/d/RoUHA6bWk/tag-hubs?orgId=2&refresh=5m",
                    target: "_blank",
                  },
                  "Content Hub Graphana Stats Page",
                ),
                r.createElement(
                  "div",
                  { className: i().PageSubTitle },
                  "Categories",
                ),
                h &&
                  r.createElement(
                    "div",
                    { className: b().UnpublishedChangesNotice },
                    "You have unpublished changes. Click Publish below to publish and make them available to users.",
                  ),
                r.createElement(v, { categories: e, onUpdate: l }),
                r.createElement(
                  "div",
                  { className: b().ActionButtonCtn },
                  r.createElement(
                    m.$n,
                    {
                      onClick: () =>
                        (0, c.pg)(
                          r.createElement(H, {
                            onImport: (e) => {
                              t(e), p(!0);
                            },
                          }),
                          window,
                        ),
                    },
                    "Import From PHP",
                  ),
                  r.createElement(
                    m.jn,
                    {
                      onClick: () =>
                        (0, c.pg)(
                          r.createElement(L, {
                            categories: e,
                            onSave: () => {
                              p(!1), _(!0);
                            },
                          }),
                          window,
                        ),
                    },
                    o
                      ? r.createElement(r.Fragment, null, "Save")
                      : r.createElement(
                          r.Fragment,
                          null,
                          r.createElement(d.Jlk, null),
                          "Saved",
                        ),
                  ),
                  r.createElement(
                    m.$n,
                    {
                      onClick: () =>
                        (0, c.pg)(
                          r.createElement(I, { onPublish: () => _(!1) }),
                          window,
                        ),
                    },
                    "Publish",
                  ),
                ),
              )
            : r.createElement(g.t, { size: "medium", position: "center" })
        );
      }
      function v(e) {
        const { categories: t, onUpdate: a } = e,
          { rgTags: n, rgCategories: o } = (0, s.DT)(),
          [l] = (0, T.QD)("edit");
        if (!t) return r.createElement("div", null, "No categories defined.");
        return r.createElement(
          "div",
          { className: b().CategoriesList },
          r.createElement(p.A, {
            bDisabled: !0,
            items: t,
            onDelete: (e) => {
              t.splice(e, 1), a();
            },
            render: (e) =>
              r.createElement(w, {
                key: e.id,
                item: e,
                rgTags: n,
                onUpdate: a,
                bOpenEditor: l?.toLowerCase() == e.handle,
              }),
          }),
          r.createElement(
            m.$n,
            {
              onClick: () => {
                let e = 0;
                for (const a of t)
                  a.id && Number(a.id) > e && (e = Number(a.id));
                t.push({ handle: "new_category_" + t.length, id: ++e }), a();
              },
            },
            "Add Category",
          ),
        );
      }
      function G(e) {
        const { rgTags: t, replacesTags: a } = e,
          s = (0, r.useMemo)(
            () =>
              a
                ?.map((e) => {
                  const a = t?.find((t) => t.tagid === e.id);
                  return (a?.name || "Unknown tag") + " (" + String(e.id) + ")";
                })
                .join(", "),
            [a, t],
          );
        return s
          ? r.createElement("span", null, "Replaces tags: " + s)
          : r.createElement("span", null);
      }
      function w(e) {
        const { item: t, rgTags: a, onUpdate: s, bOpenEditor: n } = e,
          [o, l, i] = (0, S.uD)(n);
        return r.createElement(
          "div",
          { className: b().CategoryCtn },
          r.createElement(
            "div",
            { className: b().Category },
            r.createElement(
              "a",
              {
                onClick: (e) =>
                  ((e, t) => {
                    e.preventDefault(), e.stopPropagation(), l();
                  })(e),
              },
              r.createElement(
                "b",
                null,
                t.loc_token ? (0, _.we)(t.loc_token) : "",
              ),
              t.loc_token ? " (" + t.handle + ")" : t.handle,
            ),
            r.createElement(
              "div",
              { className: b().CategoryType },
              "tagids" === t.type
                ? "Tags"
                : "category" === t.type
                  ? "Category"
                  : "contenthub" === t.type
                    ? "Hardcoded Filter"
                    : "Special",
            ),
            r.createElement(
              "div",
              { className: b().ExcludedFromSearch },
              !0 === t.exclude_from_search ? "Excluded from search" : "",
            ),
            r.createElement(
              "div",
              { className: b().ReplacesTags },
              r.createElement(G, { rgTags: a, replacesTags: t.replaces_tags }),
            ),
            r.createElement(
              u.EN,
              { active: o },
              r.createElement(N, { category: t, onUpdate: s, closeModal: i }),
            ),
          ),
        );
      }
      function N(e) {
        const { category: t, onUpdate: a, closeModal: s } = e,
          n = (0, S.CH)();
        return r.createElement(
          u.eV,
          { bAllowFullSize: !0, onCancel: s, closeModal: s },
          r.createElement(m.Y9, null, "Edit Category (ID ", t.id, ")"),
          r.createElement(
            m.nB,
            null,
            r.createElement(
              "div",
              { className: b().CategoryEditor },
              r.createElement(m.pd, {
                label: "Handle",
                tooltip: "This forms the end of the URL. It must be unique",
                value: t.handle,
                onChange: (e) => {
                  (t.handle = e.target.value), n();
                },
              }),
              r.createElement(
                "div",
                { className: b().CategoryCtn },
                r.createElement(m.pd, {
                  label: "Loc Token",
                  tooltip:
                    "Token only needed if we wish to expose this hub to customers",
                  value: t.loc_token,
                  onChange: (e) => {
                    (t.loc_token = e.target.value), n();
                  },
                }),
                t.loc_token ? (0, _.we)(t.loc_token) : "",
              ),
              r.createElement(m.Yh, {
                label: "Use As A Heading ",
                tooltip:
                  "Only used for establishing headings used on the main store drop-down menu",
                checked: t.heading,
                onChange: (e) => {
                  (t.heading = e), n();
                },
              }),
              r.createElement(m.Yh, {
                label: "Exclude from search ",
                tooltip: "Do not show this category in store search",
                checked: t.exclude_from_search,
                onChange: (e) => {
                  (t.exclude_from_search = e), n();
                },
              }),
              r.createElement(m.pd, {
                label: "Search aliases",
                tooltip: "Comma separated search aliases",
                value: t.search_alias,
                onChange: (e) => {
                  (t.search_alias = e.target.value), n();
                },
              }),
              r.createElement(m.m, {
                label: "Type",
                rgOptions: [
                  { data: "tagids", label: "Tag Hub" },
                  { data: "category", label: "Categories" },
                  { data: "contenthub", label: "Hardcoded Filter Hub" },
                ],
                selectedOption: t.type,
                onChange: (e) => {
                  (t.type = e.data), n();
                },
              }),
              ("tagids" === t.type ||
                "category" === t.type ||
                "contenthub" == t.type) &&
                r.createElement(D, { category: t }),
            ),
          ),
          r.createElement(
            m.wi,
            null,
            r.createElement(
              m.jn,
              {
                onClick: () => {
                  a && a(), s && s();
                },
              },
              "Close",
            ),
          ),
        );
      }
      function D(e) {
        const { category: t } = e,
          [a, s] = (0, r.useState)(!1),
          [n, o] = (0, r.useState)(0);
        return r.createElement(
          r.Fragment,
          null,
          ("tagids" == t.type || "category" == t.type) &&
            r.createElement(
              "div",
              { className: b().CategoryCtn },
              r.createElement(
                "div",
                { className: b().Category },
                r.createElement(B, {
                  category: t,
                  list: "must",
                  title: "Must have all of these tags",
                }),
                r.createElement(B, {
                  category: t,
                  list: "any",
                  title: "Must have one of these tags",
                }),
                r.createElement(B, {
                  category: t,
                  list: "mustnot",
                  title: "Must not have any of these tags",
                }),
              ),
            ),
          ("tagids" == t.type ||
            "category" == t.type ||
            "contenthub" == t.type) &&
            r.createElement(
              "div",
              { className: b().CategoryCtn },
              r.createElement(B, {
                category: t,
                list: "replaces_tags",
                title:
                  "The following Tags should redirect to this category page",
              }),
              r.createElement(
                "p",
                null,
                'This is only needed if this category is similar in name to an existing tag, such as "Sports" where the category is better than the individual tag.',
              ),
            ),
          Boolean(a)
            ? r.createElement(
                r.Fragment,
                null,
                r.createElement(
                  m.$n,
                  { onClick: () => o(n + 1) },
                  "Refresh Stats",
                ),
                r.createElement(k, { category: t }),
              )
            : r.createElement(m.Yh, {
                checked: a,
                onChange: (e) => s(e),
                label: "Show Category Sale Stats",
                key: "info" + n,
              }),
        );
      }
      function k(e) {
        const { category: t } = e,
          a = (0, n.p$)(t.must, t.any, t.mustnot);
        if (!a)
          return r.createElement(g.t, {
            string: (0, _.we)("#Loading"),
            position: "center",
            size: "medium",
          });
        const s = a.total_games > E.iT && a.total_games <= E.hp;
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            m.$n,
            {
              onClick: () => {
                const e = [];
                e.push(["AppID", "Sale Rank"]),
                  a.top_games.forEach((t) => {
                    e.push(["" + t.appid, "" + t.long_term_sale_rank]);
                  });
                const s = (t.handle || "top100").replace(" ", "_") + ".csv";
                h.g.WriteCSVToFile(e, s);
              },
            },
            "Download Top 100 Games",
          ),
          r.createElement(
            m.$n,
            {
              onClick: () => {
                const e = [];
                e.push(["AppID"]),
                  a.all_appid.forEach((t) => {
                    e.push(["" + t]);
                  });
                const s = (t.handle || "allgames").replace(" ", "_") + ".csv";
                h.g.WriteCSVToFile(e, s);
              },
            },
            "Download All Games",
          ),
          r.createElement(
            "div",
            { className: C.ThemeRow },
            r.createElement(
              "div",
              { className: C.ThemeDefinitionCtn },
              "Summary: ",
              r.createElement(E.KU, { nTotalGames: a.total_games }),
              Boolean(s) && r.createElement(R, { category: t }),
            ),
            r.createElement(
              "div",
              { className: C.TopGamesCtn },
              r.createElement("div", null, "Top 10 Games non-F2P:"),
              r.createElement(
                "div",
                { className: C.GamesColumn },
                a.top_games
                  ?.slice(0, 10)
                  .map((e) =>
                    r.createElement(E.W7, {
                      key: e.appid,
                      info: e,
                      category: t,
                      bSaleSummary: s,
                    }),
                  ),
              ),
            ),
          ),
        );
      }
      function R(e) {
        const { category: t } = e,
          a = (0, n.eX)(t.must, t.any, t.mustnot),
          s = (0, n.mg)(t.must, t.any, t.mustnot);
        return r.createElement(E.ny, { saleSummary: a, topAppSummary: s });
      }
      function B(e) {
        const { category: t, list: a, title: n } = e,
          { rgTags: l, rgCategories: i } = (0, s.DT)(),
          u = (0, S.CH)(),
          c =
            l?.map((e) => ({
              value: e.tagid,
              label: `${e.name} (${e.tagid})`,
            })) || [],
          d =
            i?.map((e) => ({
              value: e.categoryid,
              label: `${e.name} (${e.categoryid})`,
            })) || [];
        return r.createElement(
          "div",
          { className: b().TagOrCategoryList },
          r.createElement(m.JU, null, n),
          r.createElement(p.A, {
            bDisabled: !0,
            items: t[a] || [],
            onDelete: (e) => {
              t[a].splice(e, 1), u();
            },
            render: (e) =>
              "tagids" === t.type || "replaces_tags" === a
                ? r.createElement(
                    "div",
                    { className: b().IDSelector },
                    r.createElement(m.pd, {
                      value: e.id,
                      onChange: (t) => {
                        (e.id = Number(t.target.value)), u();
                      },
                    }),
                    r.createElement(o.Ay, {
                      className: "react-select-container",
                      classNamePrefix: "react-select",
                      isSearchable: !0,
                      options: c,
                      value: c.find((t) => t.value === e.id),
                      onChange: (t) => {
                        (e.id = t.value), u();
                      },
                    }),
                  )
                : "category" === t.type
                  ? r.createElement(
                      "div",
                      { className: b().IDSelector },
                      r.createElement(o.Ay, {
                        className: "react-select-container",
                        classNamePrefix: "react-select",
                        isSearchable: !0,
                        options: d,
                        value: d.find((t) => t.value === e.id),
                        onChange: (t) => {
                          (e.id = t.value), u();
                        },
                      }),
                    )
                  : null,
          }),
          r.createElement(
            m.$n,
            {
              onClick: () => {
                t[a] || (t[a] = []), t[a].push({ id: 0 }), u();
              },
            },
            "Add",
          ),
        );
      }
      function H(e) {
        const { onImport: t, closeModal: a } = e;
        return (
          r.useEffect(() => {
            s.fs
              .Get()
              .HintLoad()
              .then(() => {
                t(Array.from(s.fs.Get().GetCategories().values())), a && a();
              });
          }, [a, t]),
          r.createElement(
            u.o0,
            {
              strTitle: "Importing",
              bAlertDialog: !0,
              bDisableBackgroundDismiss: !0,
              bHideCloseIcon: !0,
            },
            r.createElement(g.t, { size: "medium", position: "center" }),
          )
        );
      }
      function L(e) {
        const { categories: t, onSave: a, closeModal: n } = e,
          [o, l] = r.useState();
        return (
          r.useEffect(() => {
            (0, s.fT)(t).then((e) => {
              e ? l(e.strErrorMsg) : (a(), n && n());
            });
          }, [t, n, a]),
          r.createElement(
            u.o0,
            {
              strTitle: "Saving",
              bAlertDialog: !0,
              bDisableBackgroundDismiss: !0,
              bHideCloseIcon: !0,
              closeModal: n,
            },
            Boolean(o)
              ? r.createElement("div", null, "Error: ", o)
              : r.createElement(g.t, { size: "medium", position: "center" }),
          )
        );
      }
      function I(e) {
        const { onPublish: t, closeModal: a } = e,
          [n, o] = r.useState(!1),
          [l, i] = r.useState();
        return (
          r.useEffect(() => {
            n &&
              (0, s.LD)().then((e) => {
                e ? i(e.strErrorMsg) : (t(), o(!1), a && a());
              });
          }, [n, a, t]),
          r.createElement(
            u.o0,
            {
              strTitle: n ? "Publishing" : "Really Publish?",
              strDescription:
                !n &&
                "Publishing will make your changes immediately visible to users.",
              bAlertDialog: n,
              bDisableBackgroundDismiss: n,
              bHideCloseIcon: n,
              onOK: () => {
                n ? a && a() : o(!0);
              },
              onCancel: () => {
                a && a();
              },
            },
            n &&
              r.createElement(
                r.Fragment,
                null,
                Boolean(l)
                  ? r.createElement("div", null, "Error: ", l)
                  : r.createElement(g.t, {
                      size: "medium",
                      position: "center",
                    }),
              ),
          )
        );
      }
    },
    74810: (e, t, a) => {
      "use strict";
      a.d(t, {
        KU: () => T,
        Ke: () => A,
        W7: () => v,
        hp: () => E,
        iT: () => C,
        ny: () => D,
      });
      var s = a(562),
        n = a(31376),
        r = a(40323),
        o = a.n(r),
        l = a(90626),
        i = a(55263),
        m = a(16676),
        u = a(29863),
        c = a(96236),
        p = a(22797),
        d = a(52038),
        g = a(61859),
        h = a(82227),
        _ = a(30470),
        S = (a(65213), a(92237));
      const y = "0px 0px 100% 0px",
        E = 5e3,
        C = 500;
      function A(e) {
        const [t, a] = (0, l.useState)(!0),
          r = (0, s.lY)(),
          o = (0, l.useMemo)(
            () => (r?.length > 0 ? r.filter((e) => Boolean(e.type)) : null),
            [r],
          );
        return o && 0 != o.length
          ? l.createElement(
              "div",
              null,
              l.createElement(
                "div",
                null,
                l.createElement(
                  "div",
                  { className: S.DashTitleBar },
                  l.createElement("h1", null, "Theme Sale Planning Dashboard"),
                  l.createElement(
                    "div",
                    { className: S.ButtonGroup },
                    Boolean(!t) &&
                      l.createElement(
                        m.$n,
                        { onClick: () => a(!0) },
                        "Load ",
                        n.tt,
                        " Days of Sale Summaries",
                      ),
                    l.createElement(R, null),
                  ),
                ),
                l.createElement(
                  "div",
                  { className: S.DashDescription },
                  l.createElement(
                    "ul",
                    null,
                    l.createElement(
                      "li",
                      null,
                      "Themes are currently make from all of the categories that are defined on this",
                      " ",
                      l.createElement(
                        "a",
                        {
                          href: `${_.TS.PARTNER_BASE_URL}admin/store/contenthub/categories`,
                        },
                        "categories editor page.",
                      ),
                    ),
                    l.createElement(
                      "li",
                      null,
                      "Hubs with more than ",
                      E,
                      " games are called out as 'too big'.",
                    ),
                    l.createElement(
                      "li",
                      null,
                      "Sales rank shown for individual games is long-term and includes all sources of revenue.",
                    ),
                    l.createElement(
                      "li",
                      null,
                      "Revenue shown is computed over the past 45 days and only using base games package revenue (a technical limitation for now) ",
                    ),
                  ),
                ),
              ),
              o.map((e, a) =>
                l.createElement(b, { key: a, category: e, bSaleSummary: t }),
              ),
            )
          : l.createElement(p.t, { string: (0, g.we)("#Loading") });
      }
      function b(e) {
        const { category: t, bSaleSummary: a } = e;
        return l.createElement(
          c.K,
          { placeholderHeight: 250, rootMargin: y },
          l.createElement(f, { category: t, bSaleSummary: a }),
        );
      }
      function T(e) {
        const { nTotalGames: t } = e;
        let a, s;
        return (
          t > C && t <= E
            ? ((a = S.SizeColorSweet), (s = "Good size!"))
            : t > E
              ? ((a = S.SizeColorBig), (s = "Too big"))
              : ((a = S.SizeColorSmall), (s = "Too small")),
          l.createElement(
            "div",
            { className: (0, d.A)(S.ThemeSize, a) },
            (0, h.Dq)(t),
            " games ( ",
            s,
            ")",
          )
        );
      }
      function f(e) {
        const { category: t, bSaleSummary: a } = e,
          { rgTopApps: s, nTotalGames: r } = (0, n.CU)(t),
          o = r > 500 && r <= E;
        return l.createElement(
          "div",
          { className: S.ThemeRow },
          l.createElement(
            "div",
            { className: S.ThemeDefinitionCtn },
            l.createElement(
              "a",
              {
                href: `${_.TS.STORE_BASE_URL}category/${t.handle}`,
                className: S.ThemeTitle,
              },
              t.loc_token ? (0, g.we)(t.loc_token) : t.handle,
            ),
            l.createElement(T, { nTotalGames: r }),
            l.createElement(
              "div",
              { className: S.SaleStats },
              Boolean(a && o) && l.createElement(k, { category: t }),
            ),
          ),
          l.createElement(
            "div",
            { className: S.TopGamesCtn },
            l.createElement("div", null, "Top 10 Games non-F2P:"),
            l.createElement(
              "div",
              { className: S.GamesRow },
              s
                ?.slice(0, 10)
                .map((e) =>
                  l.createElement(v, {
                    key: e.appid,
                    info: e,
                    category: t,
                    bSaleSummary: a && o,
                  }),
                ),
            ),
          ),
          l.createElement(
            "div",
            { className: S.ThemeDetails },
            "handle: ",
            t.handle,
            l.createElement(w, { category: t }),
          ),
        );
      }
      function v(e) {
        const { info: t, bSaleSummary: a } = e,
          [s] = (0, i.t7)(t.appid, { include_assets: !0 });
        return s
          ? l.createElement(
              "div",
              { className: S.GameItem },
              l.createElement(
                u.Qf,
                {
                  item: { type: "game", id: t.appid },
                  hoverProps: {
                    direction: "overlay",
                    style: { minWidth: "320px", maxWidth: "320px" },
                  },
                  className: S.GameImage,
                },
                l.createElement(
                  "a",
                  { href: s.GetStorePageURL() },
                  l.createElement("img", { src: s.GetAssets().GetHeaderURL() }),
                ),
              ),
              l.createElement("div", null, " Rank: ", t.long_term_sale_rank),
              Boolean(a) && l.createElement(G, { ...e }),
            )
          : l.createElement(
              "div",
              null,
              "Loading appid: ",
              t.appid,
              " with rank: ",
              t.long_term_sale_rank,
            );
      }
      function G(e) {
        const { info: t, category: a } = e,
          s = (0, n.Iw)(t.appid),
          r = (0, n.Th)(a);
        return l.createElement(
          l.Fragment,
          null,
          Boolean(s) &&
            l.createElement(
              "div",
              null,
              " ",
              "$",
              Math.floor(s.gross_sales_usd / 100).toLocaleString(),
            ),
          Boolean(s && r?.gross_sales_usd) &&
            l.createElement(
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
          ? l.createElement(
              "div",
              { className: S.ThemeTags },
              Boolean(n.must) &&
                l.createElement(
                  "div",
                  null,
                  l.createElement(
                    "span",
                    { className: S.TagsMustTitle },
                    "Must:",
                  ),
                  " ",
                  n.must?.map((e) =>
                    l.createElement(N, {
                      key: n.type + "_" + e.id + "_" + n.handle,
                      type: n.type,
                      id: e.id,
                    }),
                  ),
                ),
              Boolean(n.any) &&
                l.createElement(
                  "div",
                  null,
                  l.createElement("span", { className: S.TagsOrTitle }, "Any:"),
                  " ",
                  n.any?.map((e) =>
                    l.createElement(N, {
                      key: n.type + "_" + e.id + "_" + n.handle,
                      type: n.type,
                      id: e.id,
                    }),
                  ),
                ),
              Boolean(n.mustnot) &&
                l.createElement(
                  "div",
                  null,
                  l.createElement(
                    "span",
                    { className: S.TagsNotTitle },
                    "Must Not:",
                  ),
                  " ",
                  n.mustnot?.map((e) =>
                    l.createElement(N, {
                      key: n.type + "_" + e.id + "_" + n.handle,
                      type: n.type,
                      id: e.id,
                    }),
                  ),
                ),
            )
          : null;
      }
      function N(e) {
        const { mapStoreTags: t, mapStoreCategories: a } = (0, s.k)(),
          { type: n, id: r } = e;
        return "tagids" == n
          ? l.createElement(
              "span",
              null,
              t.has(r) ? t.get(r).name : "tagid: " + r,
              ", ",
            )
          : l.createElement(
              "span",
              null,
              a.has(r) ? a.get(r).name : "category id: " + r,
              ", ",
            );
      }
      function D(e) {
        const { saleSummary: t, topAppSummary: a } = e;
        return t
          ? l.createElement(
              "div",
              { className: S.ThemeRevenueCtn },
              l.createElement(
                "table",
                null,
                l.createElement(
                  "tbody",
                  null,
                  l.createElement(
                    "tr",
                    null,
                    l.createElement(
                      "td",
                      null,
                      "Total: ",
                      l.createElement("br", null),
                      "$",
                      Math.floor(t.gross_sales_usd / 100).toLocaleString(),
                    ),
                    l.createElement(
                      "td",
                      null,
                      "Per Day: ",
                      l.createElement("br", null),
                      "$",
                      Math.floor(
                        t.gross_sales_usd / (100 * n.tt),
                      ).toLocaleString(),
                    ),
                    l.createElement(
                      "td",
                      null,
                      "Total Units: ",
                      l.createElement("br", null),
                      t.gross_units_sold.toLocaleString(),
                    ),
                    l.createElement(
                      "td",
                      null,
                      "Units Per Day: ",
                      l.createElement("br", null),
                      Math.floor(t.gross_units_sold / n.tt).toLocaleString(),
                    ),
                    Boolean(t.gross_sales_usd > 0) &&
                      l.createElement(
                        l.Fragment,
                        null,
                        l.createElement(
                          "td",
                          null,
                          "Top ",
                          n._E,
                          " Apps: ",
                          l.createElement("br", null),
                          l.createElement(
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
          : l.createElement(p.t, {
              position: "center",
              string: "Loading Sale Info",
            });
      }
      function k(e) {
        const { category: t } = e,
          a = (0, n.Th)(t),
          s = (0, n.hl)(t);
        return l.createElement(D, { saleSummary: a, topAppSummary: s });
      }
      function R(e) {
        const t = (0, n.AY)();
        return l.createElement(
          "a",
          {
            href: `data:application/octet-stream,${encodeURIComponent(o().unparse({ data: t, fields: Object.keys(t ? t[0] : {}) }))}`,
            download: "theme_sale_stats.csv",
          },
          "Export CSV",
        );
      }
    },
    56654: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => S });
      var s = a(90626),
        n = a(73745);
      const r =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEEFRg0nBijuQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAw0lEQVRIx+2WMQqDMBSG/xedEnCp3kFzh56gN+iN7SrFLsEDmElwDHGyFNEYlQyF/FPgvXx5fMsL3R9P+CRJEgsAxhjy6We+UClLSFl+H7gMnqGcC3AuvOHMFzrHF86OQI/A062CMYaa5o2zYQiUNMsyGwRcVWWQicOpaNsPooqoIqqIKvYmrusX/dXE4VS4lqkQwnl5HMfND4xzmRbFzeZ5sVrXuscwDHRKhVIdad2vQpXq6JLjJdwH6lSxhAOwP+fdTHcfVDuVWnTzAAAAAElFTkSuQmCC";
      var o = a(44894),
        l = a(62490),
        i = a(41609),
        m = a.n(i),
        u = a(64641),
        c = a.n(u),
        p = a(12155),
        d = a(41735),
        g = a.n(d),
        h = a(61732),
        _ = a(52038);
      function S(e) {
        const {
            items: t,
            render: a,
            onDelete: i,
            onEdit: u,
            onReorder: d,
            onMove: S,
            bDisabled: E,
            rowClassName: C,
          } = e,
          [A, b] = s.useState(!1),
          [T, f] = s.useState(void 0),
          [v, G] = s.useState(void 0),
          [w, N] = s.useState(-1),
          [D, k] = s.useState(void 0),
          [R, B] = s.useState(0),
          [H, L] = s.useState(0),
          [I, M] = s.useState(void 0),
          [P, U] = s.useState(""),
          x = s.useRef(),
          j = s.useMemo(() => new Array(), []),
          O = s.useMemo(() => new Array(), []),
          W = s.useMemo(() => g().CancelToken.source(), []),
          F = () => {
            x.current?.firstElementChild &&
              (B(x.current.firstElementChild.getBoundingClientRect().height),
              L(x.current.firstElementChild.getBoundingClientRect().width));
          };
        s.useEffect(() => {
          F();
        }, []),
          s.useEffect(() => () => W.cancel("ReorderableList unmounting"), [W]);
        const Y = (e, t) => {
            W.token.reason ||
              (x.current.firstElementChild?.getBoundingClientRect().height >
                0 &&
                R !=
                  x.current.firstElementChild.getBoundingClientRect().height &&
                F(),
              ((e, t) => {
                const a = j[e]?.current;
                if (!a)
                  return void console.error(
                    "start element grab missing element at index " + e,
                  );
                b(!0), N(e), M(void 0), k(e);
                const s = t.clientX - a.getBoundingClientRect().left;
                f(s);
                const n = t.clientY - a.getBoundingClientRect().top;
                G(n),
                  (a.style.position = "fixed"),
                  (a.style.left = t.clientX - s + "px"),
                  (a.style.top = t.clientY - n + "px"),
                  (a.style.zIndex = "1");
              })(t, e));
          },
          z = (e, a) => {
            const s = h.OQ(a > e ? a - 1 : a, 0, t.length - 1);
            e != s && (S ? S(e, s) : (0, l.yY)(t, e, s), J(s), d && d(t));
          },
          V = (e) => {
            A &&
              !W.token.reason &&
              ((() => {
                const e = j[w]?.current;
                e
                  ? ((e.style.position = ""), (e.style.zIndex = ""))
                  : console.error("end element drag missing element"),
                  b(!1),
                  N(-1),
                  M(void 0),
                  k(void 0);
              })(),
              z(w, D));
          },
          K = (e) => {
            if (!A || W.token.reason) return;
            const a = e.clientY;
            let s;
            for (let e = 0; e < t.length; e++) {
              if (
                a <
                (O[e].current.getBoundingClientRect().top +
                  2 * O[e].current.getBoundingClientRect().bottom) /
                  3
              ) {
                s = e;
                break;
              }
            }
            k(s ?? t.length),
              ((e) => {
                const t = j[w]?.current;
                t
                  ? ((t.style.left = e.clientX - T + "px"),
                    (t.style.top = e.clientY - v + "px"))
                  : console.error("update grab element missing element");
              })(e);
          };
        (0, n.l6)(window, "mousemove", (e) => K(e)),
          (0, n.l6)(window, "mouseup", (e) => V()),
          s.useEffect(() => {
            for (let e = j.length; e < t.length; e++)
              j.push(s.createRef()), O.push(s.createRef());
          }, [t.length, j, O]);
        const X = (e) => {
            M(void 0);
            const t = P?.trim(),
              a = Number.parseInt(t);
            if (0 == t.length || isNaN(a)) return;
            const s = a - 1;
            e != s && z(e, s);
          },
          [Q, J] = s.useState(void 0);
        return s.createElement(
          "div",
          { className: m().WhitelistCtn, ref: x },
          t.map((e, n) =>
            s.createElement(
              "div",
              { key: n, ref: O[n] },
              n == D && s.createElement(y, { width: H }),
              s.createElement(
                "div",
                { ref: j[n], className: m().DragGhost },
                n == w &&
                  s.createElement(
                    "div",
                    { className: (0, _.A)(m().WhitelistRow, C) },
                    s.createElement("img", {
                      className: (0, _.A)(m().WhitelistAvatar, m().Grabbing),
                      src: r,
                    }),
                    s.createElement("input", {
                      className: (0, _.A)(
                        m().WhitelistNumber,
                        m().Disabled,
                        m().Grabbing,
                      ),
                      type: "text",
                      value: (D > n ? D - 1 : D) + 1,
                      disabled: !0,
                    }),
                    a(e, n),
                  ),
              ),
              s.createElement(
                "div",
                {
                  className: (0, _.A)(
                    m().WhitelistRow,
                    C,
                    A && m().DragActive,
                    n == w && m().BeingDragged,
                    Q == n && m().Dropped,
                  ),
                  onAnimationEnd: () => J(void 0),
                },
                s.createElement("img", {
                  className: (0, _.A)(
                    m().WhitelistAvatar,
                    m().Grabbable,
                    E && m().DisabledGrab,
                  ),
                  src: r,
                  onMouseDown: Boolean(E) ? void 0 : (e) => Y(e, n),
                }),
                s.createElement("input", {
                  className: (0, _.A)(m().WhitelistNumber, E && m().Disabled),
                  type: "text",
                  value: I == n ? P : n + 1,
                  disabled: E || n == w,
                  onChange: (e) => U(e.target.value),
                  onKeyDown: (e) =>
                    ((e, t) => {
                      "Enter" === e.key && (X(t), e.currentTarget.blur());
                    })(e, n),
                  onFocus: (e) => {
                    M(n), U(e.target.value);
                  },
                  onBlur: () => X(n),
                }),
                a(e, n),
                Boolean(n != w) &&
                  Boolean(u || i) &&
                  s.createElement(
                    "div",
                    { className: m().ButtonCtn },
                    Boolean(u) &&
                      s.createElement(
                        "div",
                        { className: c().RemoveIcon, onClick: (e) => u(n, e) },
                        s.createElement(p.ffu, null),
                      ),
                    Boolean(i) &&
                      s.createElement("img", {
                        className: c().RemoveIcon,
                        src: o.A,
                        onClick: (e) => i(n, e),
                      }),
                  ),
              ),
              D == t.length &&
                n == t.length - 1 &&
                s.createElement(y, { width: H }),
            ),
          ),
        );
      }
      function y(e) {
        const { width: t } = e;
        return s.createElement(
          "div",
          { className: m().DragHighlightContainer },
          s.createElement("div", {
            className: m().DragHighlight,
            style: { width: t },
          }),
        );
      }
    },
    44894: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => s });
      const s =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
    },
  },
]);
