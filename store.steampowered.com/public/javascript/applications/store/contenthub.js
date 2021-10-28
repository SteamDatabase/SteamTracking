/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    j6A3: function (e, t, a) {
      "use strict";
      a.r(t);
      var r,
        n = a("q1tI"),
        o = a.n(n),
        s = a("VQ2A"),
        i = a("ee7K"),
        c = a("IjL/"),
        l = a("0OaU"),
        u = a("TLQK"),
        g = a("lkRc"),
        m = a("b3P5"),
        p = a("vDqi"),
        d = a.n(p),
        h = a("BBEf"),
        b = a("mrSG"),
        _ = a("2vnA"),
        f = a("kyHq"),
        T = a("3+zv"),
        y = a("5eAM"),
        v = a("R+8l"),
        F = a("oVVc"),
        S = a("mgoM"),
        C = a("OS6B"),
        P = (function () {
          function e(e) {
            void 0 === e && (e = null),
              (this.m_rgCategoriesForTagID = null),
              (this.m_rgTagNameForTagID = null),
              (this.m_rgAtomicTagIDsForTagID = null),
              (this.m_rgLocalizedCategoryNames = null),
              (this.m_rgLocalizedTagNames = null),
              (this.m_rgLanguages = null),
              e && this.ParseResponse(e);
          }
          return (
            (e.prototype.GetCategoriesForTagID = function () {
              return this.m_rgCategoriesForTagID;
            }),
            (e.prototype.GetTagNameForTagID = function () {
              return this.m_rgTagNameForTagID;
            }),
            (e.prototype.GetAtomicTagIDsForTagID = function () {
              return this.m_rgAtomicTagIDsForTagID;
            }),
            (e.prototype.GetLocalizedCategoryNames = function () {
              return this.m_rgLocalizedCategoryNames;
            }),
            (e.prototype.GetLocalizedTagNames = function () {
              return this.m_rgLocalizedTagNames;
            }),
            (e.prototype.GetLanguages = function () {
              return this.m_rgLanguages;
            }),
            (e.prototype.AutoGenerateFacets = function () {
              var e = this.ComputeLocalizedCategoryNames(),
                t = this.ComputeLocalizedTagNames(),
                a = this.ComputeCategoryToTagMap(),
                r = this.FindNonAtomicTags(),
                n = this.ComputeFacetCategoryToTagMap(a, r),
                o = this.ComputeAtomicTagToTagsMap();
              return this.ComputeFacets(n, o, e, t);
            }),
            (e.prototype.AutoGenerateFacetsAsync = function () {
              return Object(b.b)(this, void 0, void 0, function () {
                return Object(b.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, this.EnsureLoaded()];
                    case 1:
                      return e.sent(), [2, this.AutoGenerateFacets()];
                  }
                });
              });
            }),
            (e.prototype.BIsTagAtomic = function (e) {
              return (
                this.m_rgAtomicTagIDsForTagID.has(e) &&
                this.m_rgAtomicTagIDsForTagID.get(e).includes(e)
              );
            }),
            (e.prototype.ParseResponse = function (e) {
              (this.m_rgCategoriesForTagID = new Map()),
                (this.m_rgTagNameForTagID = new Map()),
                (this.m_rgAtomicTagIDsForTagID = new Map()),
                (this.m_rgLocalizedCategoryNames = new Map()),
                (this.m_rgLocalizedTagNames = new Map()),
                (this.m_rgLanguages = new Array());
              for (
                var t = 0, a = Object.keys(e.rgCategoriesByTag);
                t < a.length;
                t++
              ) {
                var r = a[t];
                this.m_rgCategoriesForTagID.set(
                  Number(r),
                  Array.from(e.rgCategoriesByTag[r])
                );
              }
              for (
                var n = 0, o = Object.keys(e.rgTagNames);
                n < o.length;
                n++
              ) {
                r = o[n];
                this.m_rgTagNameForTagID.set(Number(r), e.rgTagNames[r]);
              }
              for (
                var s = 0, i = Object.keys(e.rgTagBreakdown);
                s < i.length;
                s++
              ) {
                r = i[s];
                this.m_rgAtomicTagIDsForTagID.set(
                  Number(r),
                  Array.from(e.rgTagBreakdown[r]).map(function (e) {
                    return Number(e);
                  })
                );
              }
              for (
                var c = 0, l = Object.keys(e.rgLocalizedCategoryNames);
                c < l.length;
                c++
              ) {
                var u = l[c];
                this.m_rgLocalizedCategoryNames.set(
                  u,
                  Array.from(e.rgLocalizedCategoryNames[u])
                );
              }
              for (
                var g = 0, m = Object.keys(e.rgLocalizedTagNames);
                g < m.length;
                g++
              ) {
                r = m[g];
                this.m_rgLocalizedTagNames.set(
                  Number(r),
                  Array.from(e.rgLocalizedTagNames[r])
                );
              }
              this.m_rgLanguages = Array.from(e.rgLanguages);
            }),
            (e.prototype.EnsureLoaded = function () {
              return Object(b.b)(this, void 0, void 0, function () {
                var e;
                return Object(b.e)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return this.m_rgCategoriesForTagID
                        ? [2]
                        : [4, this.Load()];
                    case 1:
                      return (e = t.sent()), this.ParseResponse(e), [2];
                  }
                });
              });
            }),
            (e.prototype.Load = function () {
              return Object(b.b)(this, void 0, void 0, function () {
                var e, t, a;
                return Object(b.e)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      (e = null), (r.label = 1);
                    case 1:
                      return (
                        r.trys.push([1, 3, , 4]),
                        [
                          4,
                          d.a.get(
                            g.d.COMMUNITY_BASE_URL +
                              "sale/ajaxgetcategoriesbytag"
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (t = r.sent()),
                        1 !== (null == (e = t.data) ? void 0 : e.success)
                          ? (console.error(
                              "Unable to load tag category data: " +
                                (null == e ? void 0 : e.success)
                            ),
                            [2, null])
                          : [3, 4]
                      );
                    case 3:
                      return (
                        (a = r.sent()),
                        console.error(
                          "Unable to load tag category data: " +
                            Object(C.a)(a).strErrorMsg
                        ),
                        [2, null]
                      );
                    case 4:
                      return [2, e];
                  }
                });
              });
            }),
            (e.prototype.Verify = function (e) {
              for (
                var t = new Set(),
                  a = new Set(),
                  r = Object.keys(e.rgTagBreakdown),
                  n = Object.keys(e.rgTagNames),
                  o = Object.keys(e.rgCategoriesByTag),
                  s = 0,
                  i = r;
                s < i.length;
                s++
              )
                for (
                  var c = i[s], l = 0, u = e.rgTagBreakdown[c].flat();
                  l < u.length;
                  l++
                ) {
                  var g = u[l];
                  n.includes(g.toString()) || t.add(g),
                    (o.includes(g.toString()) &&
                      e.rgCategoriesByTag[g] &&
                      0 !== e.rgCategoriesByTag[g].length) ||
                      a.add(g);
                }
              console.log(t.size + " un-named tags."),
                t.size > 0 && console.log(t),
                console.log(a.size + " un-categorized tags."),
                a.size > 0 && console.log(a);
            }),
            (e.prototype.ComputeCategoryToTagMap = function () {
              var e = new Map();
              return (
                this.m_rgCategoriesForTagID.forEach(function (t, a) {
                  if (t)
                    for (var r = 0, n = t; r < n.length; r++) {
                      var o = n[r];
                      e.has(o) || e.set(o, new Array()), e.get(o).push(a);
                    }
                }),
                e
              );
            }),
            (e.prototype.FindNonAtomicTags = function () {
              var e = new Set();
              return (
                this.m_rgAtomicTagIDsForTagID.forEach(function (t, a) {
                  1 !== t.length && e.add(a);
                }),
                e
              );
            }),
            (e.prototype.ComputeFacetCategoryToTagMap = function (e, t) {
              for (
                var a = new Set(),
                  r = new Map(),
                  n = function (n, o) {
                    for (var s = 0, i = e.get(o); s < i.length; s++) {
                      var c = i[s];
                      a.has(c) || t.has(c) || (a.add(c), r.get(n).push(c));
                    }
                  },
                  o = 0,
                  s = [
                    "supergenre",
                    "genre",
                    "subgenre",
                    "visuals",
                    "theme_mood",
                    "feature",
                    "players",
                  ];
                o < s.length;
                o++
              ) {
                var i = s[o];
                r.set(i, new Array()),
                  "theme_mood" === i ? (n(i, "theme"), n(i, "mood")) : n(i, i);
              }
              return r;
            }),
            (e.prototype.ComputeLocalizedCategoryNames = function () {
              var e = new Map();
              e.set("supergenre", "#App_Taxonomy_Survey_QSuperGenreTitle"),
                e.set("genre", "#App_Taxonomy_Survey_QGenreTitle"),
                e.set("subgenre", "#App_Taxonomy_Survey_QSubGenreTitle"),
                e.set("visuals", "#App_Taxonomy_Survey_QVisualsTitle"),
                e.set("theme_mood", "#App_Taxonomy_Survey_QThemeMoodTitle"),
                e.set("feature", "#App_Taxonomy_Survey_QFeaturesTitle"),
                e.set("players", "#App_Taxonomy_Survey_QPlayersTitle");
              var t = new Map();
              return (
                this.m_rgLocalizedCategoryNames.forEach(function (a, r) {
                  var n = new Array(30);
                  (n[0] = e.get(r)), t.set(r, n);
                }),
                t
              );
            }),
            (e.prototype.ComputeLocalizedTagNames = function () {
              var e = this,
                t = new Map();
              return (
                this.m_rgLocalizedTagNames.forEach(function (a, r) {
                  var n = a,
                    o = new Array(30);
                  o.fill(""),
                    e.m_rgLanguages.forEach(function (e, t) {
                      var a = Object(S.e)(e, -1);
                      -1 === a
                        ? console.warn("Unrecognized language: " + e)
                        : 0 <= a && a < 30 && (o[a] = n[t]);
                    }),
                    t.set(r, o);
                }),
                t
              );
            }),
            (e.prototype.ComputeAtomicTagToTagsMap = function () {
              var e = new Map();
              return (
                this.m_rgAtomicTagIDsForTagID.forEach(function (t, a) {
                  for (var r = 0, n = t; r < n.length; r++) {
                    var o = n[r],
                      s = Number(o);
                    e.has(s) || e.set(s, new Array()), e.get(s).push(a);
                  }
                }),
                e
              );
            }),
            (e.prototype.ComputeFacets = function (e, t, a, r) {
              var n = new Array();
              return (
                e.forEach(function (e, o) {
                  for (
                    var s = { name: a.get(o), facetValues: new Array() },
                      i = Array(),
                      c = 0,
                      l = e;
                    c < l.length;
                    c++
                  ) {
                    var u = l[c];
                    if (r.get(u)) {
                      var g = {
                        name: r.get(u),
                        subtitle: new Array(),
                        rgStoreTagFilter: {
                          type: T.o.k_EStoreFilterClauseTypeAnd,
                          rgSubexpressions: [
                            {
                              type: T.o.k_EStoreFilterClauseTypeOr,
                              rgSubexpressions: t.has(u)
                                ? t.get(u).map(function (e) {
                                    return {
                                      type:
                                        T.o.k_EStoreFilterClauseTypeStoreTag,
                                      value: e,
                                    };
                                  })
                                : [
                                    {
                                      type:
                                        T.o.k_EStoreFilterClauseTypeStoreTag,
                                      value: u,
                                    },
                                  ],
                            },
                          ],
                        },
                        nAtomicStoreTagID: u,
                        filter: null,
                        matchingCapsules: [],
                      };
                      s.facetValues.push(g);
                    } else i.push(u);
                  }
                  i.length > 0 &&
                    console.warn(
                      "No name information found for tag count " +
                        i.length +
                        ", skipping.",
                      i
                    ),
                    n.push(s);
                }),
                n
              );
            }),
            e
          );
        })(),
        O = (new P(), a("dpTt")),
        w = a("8KAw");
      !(function (e) {
        (e[(e.k_EList = 0)] = "k_EList"), (e[(e.k_EGrid = 1)] = "k_EGrid");
      })(r || (r = {}));
      var E = (function () {
          function e() {
            var t = this;
            (this.m_rgTabs = new Array()),
              (this.m_mapTabToPagingData = new Map()),
              (this.m_facets = []),
              (this.m_facetFilterState = null),
              (this.m_mapTabToPage = new Map()),
              (this.m_mapTabToPagePromises = new Map()),
              (this.m_mapTabToFacetCounts = new Map()),
              (this.m_nItemsToShow = 0),
              (this.m_viewType = r.k_EList),
              (this.m_strSearch = ""),
              "dev" === g.d.WEB_UNIVERSE &&
                (window.g_ContentHubTabStore = this);
            var a = Object(g.h)("ch_tab_data", "application_config");
            this.ValidateTabData(a) &&
              ((this.m_rgTabs = a.filter(function (e) {
                return e.tab_capsules.length > 0;
              })),
              this.m_rgTabs.length > 0 &&
                (this.m_SelectedTab = this.m_rgTabs[0]),
              this.m_rgTabs.forEach(function (e) {
                var a = { items: e.tab_capsules, nPagesLoaded: 0 };
                t.m_mapTabToPage.set(e.name, a),
                  t.m_mapTabToFacetCounts.set(e.name, e.rgSolrFacetCounts);
              }));
            var n = Object(g.h)("ch_tab_paging", "application_config");
            this.ValidatePagingData(n) &&
              n.forEach(function (e) {
                return t.m_mapTabToPagingData.set(e.prefix, e);
              });
            var o = Object(g.h)("ch_facets", "application_config"),
              s = new P(o);
            (this.m_facets = s.AutoGenerateFacets()),
              e.AddAppTypeFacet(this.m_facets),
              e.AddPlatformFacet(this.m_facets),
              e.AddPriceFacet(this.m_facets),
              e.AddLanguageFacet(this.m_facets),
              e.AddContentDescriptorFacet(this.m_facets),
              e.AddUserPreferencesFacet(this.m_facets),
              (this.m_facetFilterState = new O.b(
                this.m_facets,
                !1,
                1,
                T.k.k_ESortFacetsByMatchCount,
                Object(f.i)(g.d.LANGUAGE)
              )),
              (this.m_prevTabFacetKey = this.GetPageKey(
                this.m_SelectedTab,
                this.m_facetFilterState.GetQuery(),
                this.m_strSearch
              )),
              this.UpdateResults(),
              this.ResetItemsToShow();
          }
          return (
            (e.prototype.GetVisibleTabs = function () {
              return this.m_rgTabs;
            }),
            (e.prototype.GetSelectedTab = function () {
              return this.m_SelectedTab;
            }),
            (e.prototype.SetSelectedTab = function (e) {
              this.m_SelectedTab = e;
            }),
            Object.defineProperty(e.prototype, "cTotalRows", {
              get: function () {
                var e;
                return (
                  (null === (e = this.m_curPagingData) || void 0 === e
                    ? void 0
                    : e.total_count) || 0
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "nRowsPerPage", {
              get: function () {
                var e;
                return (
                  (null === (e = this.m_curPagingData) || void 0 === e
                    ? void 0
                    : e.pagesize) || 1
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "cTotalPages", {
              get: function () {
                return Math.ceil(this.cTotalRows / this.nRowsPerPage);
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.GetFacetFilter = function () {
              return this.m_facetFilterState;
            }),
            (e.prototype.ResetItemsToShow = function () {
              this.m_nItemsToShow = this.nRowsPerPage;
            }),
            Object.defineProperty(e.prototype, "bHasMoreItemsToShow", {
              get: function () {
                return (
                  this.m_curCapsules.nPagesLoaded < this.cTotalPages ||
                  this.m_nItemsToShow < this.m_curCapsules.items.length
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.AddMoreItemsToShow = function () {
              this.m_nItemsToShow += this.nRowsPerPage;
            }),
            (e.prototype.GetNumItemsToShow = function () {
              return this.m_nItemsToShow;
            }),
            (e.prototype.GetViewType = function () {
              return this.m_viewType;
            }),
            (e.prototype.SetViewType = function (e) {
              this.m_viewType = e;
            }),
            (e.prototype.GetSearch = function () {
              return this.m_strSearch;
            }),
            (e.prototype.SetSearch = function (e) {
              this.m_strSearch = e;
            }),
            (e.prototype.UpdateResults = function () {
              var e = this.GetPageKey(
                this.m_SelectedTab,
                this.m_facetFilterState.GetQuery(),
                this.m_strSearch
              );
              (this.m_curPagingData = this.m_mapTabToPagingData.get(e)),
                (this.m_curFacetCounts = this.m_mapTabToFacetCounts.get(e)),
                (this.m_curCapsules = this.m_mapTabToPage.get(e)),
                e !== this.m_prevTabFacetKey &&
                  (this.m_facetFilterState.SetFacetCounts(
                    this.m_mapTabToFacetCounts.get(e)
                  ),
                  (this.m_prevTabFacetKey = e));
            }),
            (e.prototype.BHasTabPageLoaded = function (e, t, a, r) {
              var n = this.GetPageKey(e, t, r),
                o = this.m_mapTabToPage.get(n);
              return Boolean(
                o &&
                  (a <= o.items.length || o.nPagesLoaded === this.cTotalPages)
              );
            }),
            (e.prototype.GetTabPageApps = function (e, t, a) {
              return this.m_curCapsules;
            }),
            (e.prototype.HintLoadTabPage = function (e, t, a, r) {
              return Object(b.b)(this, void 0, void 0, function () {
                var n;
                return Object(b.e)(this, function (o) {
                  return this.BHasTabPageLoaded(e, t, a, r)
                    ? (this.UpdateResults(), [2, this.GetTabPageApps(e, t, a)])
                    : ((n = this.GetPageKey(e, t, r)),
                      this.m_mapTabToPagePromises.has(n) ||
                        this.m_mapTabToPagePromises.set(
                          n,
                          this.InternalLoadTabPage(e, t, a, r)
                        ),
                      [2, this.m_mapTabToPagePromises.get(n)]);
                });
              });
            }),
            (e.prototype.InternalLoadTabPage = function (e, t, a, r) {
              var n, o, s;
              return Object(b.b)(this, void 0, void 0, function () {
                var i, c, l, u, m, p, h, _, f;
                return Object(b.e)(this, function (b) {
                  switch (b.label) {
                    case 0:
                      (i = this.GetPageKey(e, t, r)),
                        (c =
                          this.m_mapTabToPagingData.get(i) ||
                          this.ClonePagingDataForFaceting(e, t)),
                        this.m_mapTabToPage.has(i) ||
                          this.m_mapTabToPage.set(i, {
                            items: [],
                            nPagesLoaded: 0,
                          }),
                        (l = this.m_mapTabToPage.get(i)),
                        (b.label = 1);
                    case 1:
                      if (
                        !(
                          l.nPagesLoaded < this.cTotalPages &&
                          l.items.length < a
                        )
                      )
                        return [3, 6];
                      (u = l.nPagesLoaded), (b.label = 2);
                    case 2:
                      return (
                        b.trys.push([2, 4, , 5]),
                        (m = {
                          query: "",
                          start: c.pagesize * u,
                          count: c.pagesize,
                          cc: g.d.COUNTRY,
                          l: g.d.LANGUAGE,
                          v: 1,
                          tag: w.a.Get().GetDefinition().strTag,
                          tagid:
                            null === (n = c.params) || void 0 === n
                              ? void 0
                              : n.tagid,
                          category:
                            null === (o = c.params) || void 0 === o
                              ? void 0
                              : o.category,
                          facetQuery: t,
                          searchQuery: r,
                          send_app_data: 1,
                        }),
                        [4, d.a.get(c.url, { params: m, withCredentials: !1 })]
                      );
                    case 3:
                      return (
                        (p = b.sent()),
                        1 ==
                          (null === (s = null == p ? void 0 : p.data) ||
                          void 0 === s
                            ? void 0
                            : s.success) &&
                          ((c.total_count = p.data.total_count),
                          (h = this.FilterStoreItemsForFaceting(
                            p.data.tab_capsules
                          )),
                          (l.items = l.items.concat(h)),
                          ++l.nPagesLoaded,
                          y.a.AddAppLinks(p.data.applinkinfo),
                          F.b.AddPackages(p.data.packages),
                          v.a.AddBundles(p.data.bundles),
                          this.m_mapTabToPagingData.set(i, c),
                          this.m_mapTabToFacetCounts.set(
                            i,
                            p.data.rgSolrFacetCounts
                          ),
                          this.UpdateResults()),
                        [3, 5]
                      );
                    case 4:
                      return (
                        (_ = b.sent()),
                        (f = Object(C.a)(_)),
                        console.error(
                          "CContentHubTabStore.InternalLoadTabPage: failed with " +
                            f.strErrorMsg,
                          f,
                          this.m_facetFilterState
                        ),
                        [3, 5]
                      );
                    case 5:
                      return [3, 1];
                    case 6:
                      return [2, l];
                  }
                });
              });
            }),
            (e.Get = function () {
              return (
                e.s_globalSingletonStore ||
                  (e.s_globalSingletonStore = new e()),
                e.s_globalSingletonStore
              );
            }),
            (e.prototype.ValidateTabData = function (e) {
              var t = e;
              return (
                !!(
                  t &&
                  Array.isArray(t) &&
                  t.length > 0 &&
                  "object" == typeof t[0]
                ) &&
                "string" == typeof t[0].title &&
                "string" == typeof t[0].displaylistname &&
                Array.isArray(t[0].tab_capsules)
              );
            }),
            (e.prototype.ValidatePagingData = function (e) {
              var t = e;
              return (
                !!(
                  t &&
                  Array.isArray(t) &&
                  t.length > 0 &&
                  "object" == typeof t[0]
                ) &&
                "string" == typeof t[0].url &&
                "string" == typeof t[0].prefix &&
                "number" == typeof t[0].total_count
              );
            }),
            (e.prototype.GetPageKey = function (e, t, a) {
              return e.name + encodeURIComponent(t) + (a || "");
            }),
            (e.prototype.ClonePagingDataForFaceting = function (e, t) {
              var a = this.m_mapTabToPagingData.get(e.name);
              return Object(b.a)(
                { total_count: 0, params: Object(b.a)({ facet: t }, a.params) },
                a
              );
            }),
            (e.AddAppTypeFacet = function (e) {
              for (
                var t = { name: ["#AppTypeLabelTitle"], facetValues: [] },
                  a = 0,
                  r = [
                    "game",
                    "software",
                    "dlc",
                    "demo",
                    "music",
                    "video",
                    "hardware",
                  ];
                a < r.length;
                a++
              ) {
                var n = r[a];
                t.facetValues.push({
                  name: ["#AppTypeLabel_" + n],
                  type: T.l.k_EAppType,
                  appType: n,
                  rgStoreTagFilter: {
                    type: T.o.k_EStoreFilterClauseTypeAppType,
                    value: n,
                  },
                  filter: null,
                  matchingCapsules: [],
                });
              }
              e.push(t);
            }),
            (e.AddPlatformFacet = function (e) {
              var t = { name: ["#Platform"], facetValues: [] };
              t.facetValues.push({
                name: ["#Platform_Windows"],
                type: T.l.k_ESaleTagFilter,
                rgStoreTagFilter: {
                  type: T.o.k_EStoreFilterClauseTypeFeatureTag,
                  value: "windows",
                },
                filter: null,
                matchingCapsules: [],
              }),
                t.facetValues.push({
                  name: ["#Platform_Linux"],
                  type: T.l.k_ESaleTagFilter,
                  rgStoreTagFilter: {
                    type: T.o.k_EStoreFilterClauseTypeFeatureTag,
                    value: "linux",
                  },
                  filter: null,
                  matchingCapsules: [],
                }),
                t.facetValues.push({
                  name: ["#Platform_Mac"],
                  type: T.l.k_ESaleTagFilter,
                  rgStoreTagFilter: {
                    type: T.o.k_EStoreFilterClauseTypeFeatureTag,
                    value: "mac",
                  },
                  filter: null,
                  matchingCapsules: [],
                }),
                e.push(t);
            }),
            (e.AddPriceFacet = function (e) {
              var t = {
                name: ["#Sale_BrowserSortOption_Price"],
                facetValues: [],
              };
              t.facetValues.push({
                name: ["#Sale_BrowserSortOption_Price"],
                type: T.l.k_EPrice,
                rgStoreTagFilter: { type: T.o.k_EStoreFilterClauseTypePrice },
                filter: null,
                matchingCapsules: [],
              }),
                t.facetValues.push({
                  name: ["#Sale_BrowserSortOption_PopularPurchasedDiscounted"],
                  type: T.l.k_ESaleTagFilter,
                  rgStoreTagFilter: {
                    type: T.o.k_EStoreFilterClauseTypeFeatureTag,
                    value: "discounted",
                  },
                  filter: null,
                  matchingCapsules: [],
                }),
                e.push(t);
            }),
            (e.AddLanguageFacet = function (e) {
              for (
                var t = { name: ["#LanguageTitle"], facetValues: [] }, a = 0;
                a < 30;
                ++a
              )
                t.facetValues.push({
                  name: ["#language_selection_" + Object(f.e)(a)],
                  type: T.l.k_ELanguage,
                  language: a,
                  rgStoreTagFilter: {
                    type: T.o.k_EStoreFilterClauseTypeLanguage,
                    value: Object(f.e)(a),
                  },
                  filter: null,
                  matchingCapsules: [],
                });
              e.push(t);
            }),
            (e.AddContentDescriptorFacet = function (e) {
              var t = { name: ["#ContentDescriptor"], facetValues: [] };
              t.facetValues.push({
                name: ["#ContentDescriptor_GeneralMatureContent"],
                type: T.l.k_EContentDescriptor,
                contentDescriptor: 5,
                rgStoreTagFilter: {
                  type: T.o.k_EStoreFilterClauseTypeContentDescriptor,
                  value: 5,
                },
                filter: null,
                matchingCapsules: [],
              }),
                t.facetValues.push({
                  name: ["#ContentDescriptor_FrequentViolenceOrGore"],
                  type: T.l.k_EContentDescriptor,
                  contentDescriptor: 2,
                  rgStoreTagFilter: {
                    type: T.o.k_EStoreFilterClauseTypeContentDescriptor,
                    value: 2,
                  },
                  filter: null,
                  matchingCapsules: [],
                }),
                t.facetValues.push({
                  name: ["#ContentDescriptor_NudityOrSexualContent"],
                  type: T.l.k_EContentDescriptor,
                  contentDescriptor: 1,
                  rgStoreTagFilter: {
                    type: T.o.k_EStoreFilterClauseTypeContentDescriptor,
                    value: 1,
                  },
                  filter: null,
                  matchingCapsules: [],
                }),
                t.facetValues.push({
                  name: ["#ContentDescriptor_AdultOnlySexualContent"],
                  type: T.l.k_EContentDescriptor,
                  contentDescriptor: 3,
                  rgStoreTagFilter: {
                    type: T.o.k_EStoreFilterClauseTypeContentDescriptor,
                    value: 3,
                  },
                  filter: null,
                  matchingCapsules: [],
                }),
                e.push(t);
            }),
            (e.AddUserPreferencesFacet = function (e) {
              var t = { name: ["#Sale_Preferences"], facetValues: [] };
              t.facetValues.push({
                name: ["#UserPreference_HideOwnedItems"],
                type: T.l.k_EUserPreference,
                userPreference: T.m.k_EHideOwnedItems,
                filter: null,
                matchingCapsules: [],
                rgStoreTagFilter: null,
              }),
                t.facetValues.push({
                  name: ["#UserPreference_HideWishlistedItems"],
                  type: T.l.k_EUserPreference,
                  userPreference: T.m.k_EHideWishlistedItems,
                  filter: null,
                  matchingCapsules: [],
                  rgStoreTagFilter: null,
                }),
                t.facetValues.push({
                  name: ["#UserPreference_HideIgnoredItems"],
                  type: T.l.k_EUserPreference,
                  userPreference: T.m.k_EHideIgnoredItems,
                  bEnabledByDefault: !0,
                  filter: null,
                  matchingCapsules: [],
                  rgStoreTagFilter: null,
                }),
                e.push(t);
            }),
            (e.prototype.BAppPassesFilters = function (e) {
              if (!y.a.GetAppLinkInfo(e)) return !1;
              var t = i.a.Get();
              return (
                (!this.m_facetFilterState.BIsUserPreferenceEnabled(
                  T.m.k_EHideOwnedItems
                ) ||
                  !t.BIsGameOwned(e)) &&
                (!this.m_facetFilterState.BIsUserPreferenceEnabled(
                  T.m.k_EHideWishlistedItems
                ) ||
                  !t.BIsGameWishlisted(e)) &&
                (!this.m_facetFilterState.BIsUserPreferenceEnabled(
                  T.m.k_EHideIgnoredItems
                ) ||
                  !t.BIsGameIgnored(e))
              );
            }),
            (e.prototype.BAppSetPassesFilters = function (e) {
              var t = i.a.Get();
              return (
                (!this.m_facetFilterState.BIsUserPreferenceEnabled(
                  T.m.k_EHideOwnedItems
                ) ||
                  !e.some(function (e) {
                    return t.BIsGameOwned(e);
                  })) &&
                (!this.m_facetFilterState.BIsUserPreferenceEnabled(
                  T.m.k_EHideWishlistedItems
                ) ||
                  !e.some(function (e) {
                    return t.BIsGameWishlisted(e);
                  })) &&
                (!this.m_facetFilterState.BIsUserPreferenceEnabled(
                  T.m.k_EHideIgnoredItems
                ) ||
                  !e.some(function (e) {
                    return t.BIsGameIgnored(e);
                  }))
              );
            }),
            (e.prototype.BSubPassesFilters = function (e) {
              var t = F.b.GetPackageInfo(e);
              if (!t) return !1;
              if (!this.BAppSetPassesFilters(t.appids)) return !1;
              var a = i.a.Get();
              return (
                (!this.m_facetFilterState.BIsUserPreferenceEnabled(
                  T.m.k_EHideOwnedItems
                ) ||
                  !a.BOwnsPackage(e)) &&
                (!this.m_facetFilterState.BIsUserPreferenceEnabled(
                  T.m.k_EHideIgnoredItems
                ) ||
                  !a.BIsPackageIgnored(e))
              );
            }),
            (e.prototype.BBundlePassesFilters = function (e) {
              var t = v.a.GetBundleInfo(e);
              return !!t && !!this.BAppSetPassesFilters(t.appids);
            }),
            (e.prototype.FilterStoreItemsForFaceting = function (e) {
              var t = this;
              return e && 0 !== e.length
                ? e.filter(function (e) {
                    var a,
                      r = e.id;
                    switch (e.item_type.toLowerCase()) {
                      case "sub":
                        var n = F.b.GetPackageInfo(r);
                        if (
                          1 !==
                          (null === (a = null == n ? void 0 : n.appids) ||
                          void 0 === a
                            ? void 0
                            : a.length)
                        )
                          return t.BSubPassesFilters(r);
                        r = n.appids[0];
                      case "app":
                        return t.BAppPassesFilters(r);
                      case "bundle":
                        return t.BBundlePassesFilters(r);
                      default:
                        return !1;
                    }
                  })
                : [];
            }),
            Object(b.c)([_.C], e.prototype, "m_SelectedTab", void 0),
            Object(b.c)([_.C], e.prototype, "m_nItemsToShow", void 0),
            Object(b.c)([_.C], e.prototype, "m_curPagingData", void 0),
            Object(b.c)([_.C], e.prototype, "m_curCapsules", void 0),
            Object(b.c)([_.C], e.prototype, "m_curFacetCounts", void 0),
            Object(b.c)([_.C], e.prototype, "m_viewType", void 0),
            Object(b.c)([_.C], e.prototype, "m_strSearch", void 0),
            Object(b.c)([_.k], e.prototype, "SetSelectedTab", null),
            Object(b.c)([_.n], e.prototype, "cTotalRows", null),
            Object(b.c)([_.n], e.prototype, "nRowsPerPage", null),
            Object(b.c)([_.n], e.prototype, "cTotalPages", null),
            Object(b.c)([_.k], e.prototype, "ResetItemsToShow", null),
            Object(b.c)([_.n], e.prototype, "bHasMoreItemsToShow", null),
            Object(b.c)([_.k], e.prototype, "AddMoreItemsToShow", null),
            Object(b.c)([_.k], e.prototype, "UpdateResults", null),
            e
          );
        })(),
        I = a("WKKl"),
        A = a("TyAF"),
        k = a("EC67"),
        L = a("Mgs7"),
        G = a("GiuM"),
        j = a("7G5R"),
        D = a("U9Ih"),
        N = a("5L1o"),
        M = a("NKJh"),
        V = a.n(M),
        B = a("6Y59"),
        H = a("dfs5"),
        U = a("5E+2"),
        R = a("qiKp"),
        z = a("exH9"),
        x = a("lhLD"),
        Q = Object(k.i)(
          Object(A.a)(function (e) {
            var t = E.Get(),
              a = t.GetVisibleTabs(),
              r = Object(G.a)(e.history, "tab"),
              s = Boolean(r)
                ? a.find(function (e) {
                    return e.name === r;
                  })
                : a[0],
              i = Object(G.a)(e.history, "facets"),
              c = t.GetNumItemsToShow(),
              l = Object(G.a)(e.history, "search");
            return (
              Object(n.useEffect)(
                function () {
                  t.SetSelectedTab(s),
                    null != i
                      ? t.GetFacetFilter().SetFromURLParam(i)
                      : t.GetFacetFilter().Reset(),
                    t.SetSearch(l),
                    t.HintLoadTabPage(s, t.GetFacetFilter().GetQuery(), c, l);
                },
                [t, s, i, c, l]
              ),
              a && 0 != a.length
                ? o.a.createElement(
                    "div",
                    { className: Object(z.a)(x.TabCtn) },
                    o.a.createElement(q, null),
                    o.a.createElement(
                      "div",
                      { className: x.FacetAndPageCtn },
                      o.a.createElement(J, null),
                      o.a.createElement(
                        "div",
                        { className: x.PagedItemsCtn },
                        o.a.createElement(K, null)
                      )
                    )
                  )
                : null
            );
          })
        ),
        K = Object(A.a)(function (e) {
          var t = E.Get().GetSelectedTab();
          return o.a.createElement(
            H.b,
            { feature: "tab-" + t.name },
            o.a.createElement(W, null)
          );
        }),
        W = Object(A.a)(function (e) {
          var t,
            a,
            s = E.Get(),
            i = s.GetSelectedTab(),
            c = s.GetFacetFilter().strQuery,
            m = s.GetNumItemsToShow(),
            p = s.GetSearch(),
            b = s.BHasTabPageLoaded(i, c, m, p),
            _ = Object(n.useState)(!b),
            f = _[0],
            T = _[1];
          Object(n.useEffect)(
            function () {
              var e = d.a.CancelToken.source();
              return (
                f == b && T(!b),
                b ||
                  s.HintLoadTabPage(i, c, m, p).then(function () {
                    f && !e.token.reason && T(!1);
                  }),
                function () {
                  return e.cancel("unmounting TabDisplayPage");
                }
              );
            },
            [i, b, f, c, s, m, p]
          );
          var v =
              (null ===
                (a =
                  null === (t = s.GetTabPageApps(i, c, m)) || void 0 === t
                    ? void 0
                    : t.items) || void 0 === a
                ? void 0
                : a.slice(0, m)) || [],
            F = Object(h.b)(
              v,
              I.a.Get().GetHomeView(),
              new h.a(),
              v.length,
              v.length
            ),
            S = v.length - F.length,
            C = s.GetViewType() === r.k_EList ? x.ContentsList : x.GridView,
            P = s.GetViewType() === r.k_EList && V.a.SaleItemBrowserRow;
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              "div",
              { className: x.ContentHubStorePrefsLink },
              Boolean(S > 0) &&
                o.a.createElement(
                  "div",
                  { className: x.ContentHubStorePrefsLinkInner },
                  o.a.createElement(
                    "a",
                    {
                      href: g.d.STORE_BASE_URL + "account/preferences/",
                      "data-tooltip-text": Object(u.f)(
                        "#ContentHub_TabFiltered_ttip"
                      ),
                    },
                    o.a.createElement(
                      U.a,
                      {
                        toolTipContent: Object(u.f)(
                          "#ContentHub_TabFiltered_ttip"
                        ),
                      },
                      Object(u.l)("#ContentHub_TabFitlered", S)
                    )
                  )
                )
            ),
            o.a.createElement(
              "div",
              { className: C },
              F.map(function (e) {
                var t,
                  a = void 0;
                return (
                  (a =
                    "bundle" == e.item_type || "sub" == e.item_type
                      ? e.item_type
                      : (null === (t = y.a.GetAppLinkInfo(e.id)) || void 0 === t
                          ? void 0
                          : t.type) || "game"),
                  o.a.createElement(
                    "div",
                    { key: "" + e.item_type + e.id, className: P },
                    s.GetViewType() === r.k_EList
                      ? o.a.createElement(N.n, {
                          id: e.id,
                          type: a,
                          bShowDemoButton: !1,
                          bLoadShortDescription: !1,
                        })
                      : o.a.createElement(N.l, {
                          capsule: { id: e.id, type: a },
                          imageType: "header",
                        })
                  )
                );
              })
            ),
            !b &&
              o.a.createElement(
                "div",
                { className: x.ShowMoreCtn },
                o.a.createElement(l.a, {
                  string: Object(u.f)("#Loading"),
                  size: "medium",
                  position: "center",
                })
              ),
            b &&
              s.bHasMoreItemsToShow &&
              o.a.createElement(
                "div",
                { className: x.ShowMoreCtn },
                o.a.createElement(
                  "button",
                  {
                    className: x.ShowMore,
                    onClick: function () {
                      return s.AddMoreItemsToShow();
                    },
                  },
                  Object(u.f)("#Sale_ShowMore")
                )
              )
          );
        }),
        J = Object(k.i)(
          Object(A.a)(function (e) {
            var t = E.Get(),
              a = t.GetFacetFilter();
            return o.a.createElement(
              "div",
              { className: x.FacetMenuCtn },
              o.a.createElement(O.c, {
                facetFilterState: a,
                language: Object(f.i)(g.d.LANGUAGE),
                nMaxFacetValues: 5,
                fnOnUpdateFilter: function () {
                  return (
                    Object(G.c)(e.history, { facets: a.GetURLParam() }),
                    void t.ResetItemsToShow()
                  );
                },
                styleOverrides: {
                  menu: x.FacetMenuOverride,
                  menuTitle: x.FacetMenuTitleOverride,
                  matchCount: x.FacetMenuMatchCountOverride,
                  reset: x.FacetMenuResetOverride,
                  facetName: x.FacetNameOverride,
                  facetValue: x.FacetValueOverride,
                  facetValueEnabled: x.FacetValueEnabledOverride,
                  facetValueDeactivated: x.FacetValueDeactivatedOverride,
                  facetValueName: x.FacetValueNameOverride,
                  facetValueDesc: x.FacetValueDescOverride,
                  showMore: x.FacetShowMoreOverride,
                },
              })
            );
          })
        ),
        q = Object(k.i)(
          Object(A.a)(function (e) {
            var t = E.Get(),
              a = t.GetVisibleTabs(),
              s = t.GetSelectedTab(),
              i = Object(n.useState)(Object(G.a)(e.history, "search")),
              c = i[0],
              l = i[1],
              g = Object(n.useState)(new R.b())[0],
              m = function (a) {
                Object(G.b)(e.history, "search", a.length > 0 ? a : void 0),
                  t.ResetItemsToShow();
              },
              p = [
                {
                  label: Object(u.f)("#FacetedBrowsing_ViewAsList"),
                  data: r.k_EList,
                },
                {
                  label: Object(u.f)("#FacetedBrowsing_ViewAsGrid"),
                  data: r.k_EGrid,
                },
              ];
            return o.a.createElement(
              j.a,
              { className: x.TabHeaderCtn },
              o.a.createElement(
                "div",
                { className: x.TabHeaderInner },
                a.map(function (a) {
                  var r;
                  return o.a.createElement(
                    "div",
                    {
                      key: a.displaylistname,
                      className: Object(z.a)(
                        ((r = {}),
                        (r[x.TabHeader] = !0),
                        (r[x.TabHeaderSelected] =
                          (null == a ? void 0 : a.name) ==
                          (null == s ? void 0 : s.name)),
                        r)
                      ),
                      onClick: function () {
                        return (function (a) {
                          g.Cancel(),
                            Object(G.c)(e.history, {
                              tab: a.name,
                              facets: void 0,
                            }),
                            t.ResetItemsToShow();
                        })(a);
                      },
                    },
                    a.title
                  );
                })
              ),
              o.a.createElement(
                "div",
                { className: x.HeaderOptionsCtn },
                o.a.createElement(
                  "div",
                  { className: D.SuggestContainer },
                  o.a.createElement(L.k, {
                    type: "text",
                    value: c,
                    onChange: function (e) {
                      var t = e.target.value;
                      l(t);
                      var a = t && t.trim().toLocaleLowerCase();
                      g.Schedule(200, function () {
                        return m(a);
                      });
                    },
                  }),
                  o.a.createElement(B.F, null)
                ),
                o.a.createElement(L.h, {
                  rgOptions: p,
                  selectedOption: t.GetViewType(),
                  onChange: function (e) {
                    return t.SetViewType(e.data);
                  },
                })
              )
            );
          })
        ),
        X = a("94lP");
      t.default = function (e) {
        var t = o.a.useState(!0),
          a = t[0],
          r = t[1];
        return (
          o.a.useEffect(function () {
            i.a
              .Get()
              .HintLoad()
              .then(function () {
                r(!1);
              });
          }, []),
          a
            ? o.a.createElement(l.a, {
                string: Object(u.f)("#Loading"),
                size: "medium",
                position: "center",
              })
            : o.a.createElement(
                "div",
                null,
                o.a.createElement(c.a, null, o.a.createElement(X.a, null)),
                o.a.createElement(c.a, null, o.a.createElement(m.a, null)),
                o.a.createElement(c.a, null, o.a.createElement(Q, null)),
                o.a.createElement(
                  "a",
                  {
                    href: Object(s.a)(
                      g.d.STORE_BASE_URL + "labs/contenthub?optout=1"
                    ),
                  },
                  Object(u.f)("#ContentHub_OptOut")
                )
              )
        );
      };
    },
    lhLD: function (e, t, a) {
      e.exports = {
        TabCtn: "contenthubtabs_TabCtn_2oMA1",
        TabHeaderCtn: "contenthubtabs_TabHeaderCtn_2hDgH",
        TabHeader: "contenthubtabs_TabHeader_uLDXr",
        TabHeaderSelected: "contenthubtabs_TabHeaderSelected_2lb5o",
        TabHeaderSearchCtn: "contenthubtabs_TabHeaderSearchCtn_eovFw",
        FacetAndPageCtn: "contenthubtabs_FacetAndPageCtn_iq9QM",
        PagedItemsCtn: "contenthubtabs_PagedItemsCtn_36zXT",
        PagingCtn: "contenthubtabs_PagingCtn_1z4pT",
        ItemCount: "contenthubtabs_ItemCount_1Sw9L",
        PagingNumCtn: "contenthubtabs_PagingNumCtn_2JUQr",
        PageNumCtn: "contenthubtabs_PageNumCtn_sJmNK",
        PageNumber: "contenthubtabs_PageNumber_1QUSX",
        PageSelectedNumber: "contenthubtabs_PageSelectedNumber_tJc_C",
        PagingButton: "contenthubtabs_PagingButton_J9G7z",
        ContentsList: "contenthubtabs_ContentsList_2ZnWm",
        FacetMenuCtn: "contenthubtabs_FacetMenuCtn_1VFNX",
        FacetMenuOverride: "contenthubtabs_FacetMenuOverride_1fzSH",
        FacetMenuTitleOverride: "contenthubtabs_FacetMenuTitleOverride_3hiwJ",
        FacetMenuMatchCountOverride:
          "contenthubtabs_FacetMenuMatchCountOverride_2cn7_",
        FacetMenuResetOverride: "contenthubtabs_FacetMenuResetOverride_2McdS",
        FacetNameOverride: "contenthubtabs_FacetNameOverride_3yyr5",
        FacetValueOverride: "contenthubtabs_FacetValueOverride_2Uefd",
        FacetValueEnabledOverride:
          "contenthubtabs_FacetValueEnabledOverride_u_BCM",
        FacetValueDeactivatedOverride:
          "contenthubtabs_FacetValueDeactivatedOverride_zqVFw",
        FacetValueNameOverride: "contenthubtabs_FacetValueNameOverride_Jj0--",
        FacetValueDescOverride: "contenthubtabs_FacetValueDescOverride_3yyFl",
        FacetShowMoreOverride: "contenthubtabs_FacetShowMoreOverride_3IIhW",
        ShowMoreCtn: "contenthubtabs_ShowMoreCtn_3W8BZ",
        ShowMore: "contenthubtabs_ShowMore_1DQA2",
        TabHeaderInner: "contenthubtabs_TabHeaderInner_2j9tS",
        HeaderOptionsCtn: "contenthubtabs_HeaderOptionsCtn_3kOam",
        GridView: "contenthubtabs_GridView_3wfiX",
        ContentHubStorePrefsLink:
          "contenthubtabs_ContentHubStorePrefsLink_1VER3",
        ContentHubStorePrefsLinkInner:
          "contenthubtabs_ContentHubStorePrefsLinkInner_tBsV4",
      };
    },
  },
]);
