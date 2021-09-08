/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    j6A3: function (e, t, a) {
      "use strict";
      a.r(t);
      var r = a("8KAw"),
        n = a("q1tI"),
        o = a.n(n),
        s = a("VQ2A"),
        i = a("ee7K"),
        c = a("IjL/"),
        l = a("0OaU"),
        u = a("TLQK"),
        p = a("lkRc"),
        m = a("exH9"),
        g = a("xVl9"),
        d = a("5L1o"),
        h = a("MnIK"),
        b = a("dfs5"),
        f = a("5eAM"),
        _ = a("R+8l"),
        T = a("oVVc");
      function y(e, t) {
        var a = new Array();
        return (
          e.forEach(function (e) {
            if (!t || a.length < t)
              if (e.appid) {
                var r = f.a.GetAppLinkInfo(e.appid);
                r && a.push({ id: e.appid, type: r.type });
              } else
                e.bundleid && _.a.BHasBundleInfoLoaded(e.bundleid)
                  ? a.push({ id: e.bundleid, type: "bundle" })
                  : e.packageid &&
                    T.b.BHasPackageInfoLoaded(e.packageid) &&
                    a.push({ id: e.packageid, type: "sub" });
          }),
          a
        );
      }
      var v,
        S = a("O59X"),
        F = function (e) {
          var t = e.section,
            a = r.a.Get().GetAppListForSection(t.id);
          if (!a || 0 == a.length) return null;
          var n = null;
          switch (t.type) {
            case "4wide":
              n = o.a.createElement(P, { capsuleList: a });
              break;
            case "creator4wide":
              n = o.a.createElement(E, { capsuleList: a });
              break;
            default:
              n = o.a.createElement("div", null, "Unknown: ", t.type);
          }
          return o.a.createElement(
            b.b,
            { feature: t.id },
            o.a.createElement(
              h.a,
              { placeholderHeight: 250, rootMargin: "0px 0px 100% 0px" },
              o.a.createElement(C, {
                title: t.title,
                description: t.description,
              }),
              n
            )
          );
        },
        C = function (e) {
          var t = e.title,
            a = e.description;
          return o.a.createElement(
            "div",
            { className: Object(m.a)(S.StoreSection, S.SectionTitleCtn) },
            o.a.createElement("span", { className: S.SectionTitle }, t),
            Boolean(a) &&
              o.a.createElement("span", { className: S.SectionDescription }, a)
          );
        },
        P = function (e) {
          var t = y(e.capsuleList, 40);
          return o.a.createElement(
            g.a,
            {
              visibleElements: 4,
              className: Object(m.a)(
                S.StoreSection,
                S.StoreSection,
                "SaleSectionCarouselPadding"
              ),
            },
            t.map(function (e) {
              return o.a.createElement(d.m, {
                key: e.type + "_" + e.id,
                capsule: e,
                imageType: "header",
              });
            })
          );
        },
        E = function (e) {
          var t = e.capsuleList,
            a = Object(i.b)(),
            r = a[0];
          a[1];
          if (r)
            return o.a.createElement(l.a, {
              string: Object(u.f)("#Loading"),
              size: "medium",
              position: "center",
            });
          var n = y(t, 40);
          return o.a.createElement(
            g.a,
            { visibleElements: 4 },
            n.map(function (e) {
              return o.a.createElement(d.m, {
                key: e.type + "_" + e.id,
                capsule: e,
                imageType: "header",
              });
            })
          );
        },
        O = a("vDqi"),
        w = a.n(O),
        I = a("BBEf"),
        A = a("mrSG"),
        k = a("2vnA"),
        L = a("kyHq"),
        G = a("3+zv"),
        j = a("mgoM"),
        D = a("OS6B"),
        N = (function () {
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
              return Object(A.b)(this, void 0, void 0, function () {
                return Object(A.e)(this, function (e) {
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
                var p = 0, m = Object.keys(e.rgLocalizedTagNames);
                p < m.length;
                p++
              ) {
                r = m[p];
                this.m_rgLocalizedTagNames.set(
                  Number(r),
                  Array.from(e.rgLocalizedTagNames[r])
                );
              }
              this.m_rgLanguages = Array.from(e.rgLanguages);
            }),
            (e.prototype.EnsureLoaded = function () {
              return Object(A.b)(this, void 0, void 0, function () {
                var e;
                return Object(A.e)(this, function (t) {
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
              return Object(A.b)(this, void 0, void 0, function () {
                var e, t, a;
                return Object(A.e)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      (e = null), (r.label = 1);
                    case 1:
                      return (
                        r.trys.push([1, 3, , 4]),
                        [
                          4,
                          w.a.get(
                            p.d.COMMUNITY_BASE_URL +
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
                            Object(D.a)(a).strErrorMsg
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
                  var p = u[l];
                  n.includes(p.toString()) || t.add(p),
                    (o.includes(p.toString()) &&
                      e.rgCategoriesByTag[p] &&
                      0 !== e.rgCategoriesByTag[p].length) ||
                      a.add(p);
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
                      var a = Object(j.g)(e, -1);
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
                      var p = {
                        name: r.get(u),
                        subtitle: new Array(),
                        rgStoreTagFilter: {
                          type: G.n.k_EStoreFilterClauseTypeAnd,
                          rgSubexpressions: [
                            {
                              type: G.n.k_EStoreFilterClauseTypeOr,
                              rgSubexpressions: t.has(u)
                                ? t.get(u).map(function (e) {
                                    return {
                                      type:
                                        G.n.k_EStoreFilterClauseTypeStoreTag,
                                      value: e,
                                    };
                                  })
                                : [
                                    {
                                      type:
                                        G.n.k_EStoreFilterClauseTypeStoreTag,
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
                      s.facetValues.push(p);
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
        M = (new N(), a("dpTt"));
      !(function (e) {
        (e[(e.k_EList = 0)] = "k_EList"), (e[(e.k_EGrid = 1)] = "k_EGrid");
      })(v || (v = {}));
      var V = (function () {
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
              (this.m_viewType = v.k_EList),
              (this.m_strSearch = ""),
              "dev" === p.d.WEB_UNIVERSE &&
                (window.g_ContentHubTabStore = this);
            var a = Object(p.h)("ch_tab_data", "application_config");
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
            var r = Object(p.h)("ch_tab_paging", "application_config");
            this.ValidatePagingData(r) &&
              r.forEach(function (e) {
                return t.m_mapTabToPagingData.set(e.prefix, e);
              });
            var n = Object(p.h)("ch_facets", "application_config"),
              o = new N(n);
            (this.m_facets = o.AutoGenerateFacets()),
              e.AddAppTypeFacet(this.m_facets),
              e.AddPlatformFacet(this.m_facets),
              e.AddPriceFacet(this.m_facets),
              e.AddLanguageFacet(this.m_facets),
              e.AddContentDescriptorFacet(this.m_facets),
              e.AddUserPreferencesFacet(this.m_facets),
              (this.m_facetFilterState = new M.b(
                this.m_facets,
                !1,
                1,
                G.k.k_ESortFacetsByMatchCount,
                Object(L.i)(p.d.LANGUAGE)
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
              return Object(A.b)(this, void 0, void 0, function () {
                var n;
                return Object(A.e)(this, function (o) {
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
            (e.prototype.InternalLoadTabPage = function (e, t, a, n) {
              var o, s, i;
              return Object(A.b)(this, void 0, void 0, function () {
                var c, l, u, m, g, d, h, b, y;
                return Object(A.e)(this, function (v) {
                  switch (v.label) {
                    case 0:
                      (c = this.GetPageKey(e, t, n)),
                        (l =
                          this.m_mapTabToPagingData.get(c) ||
                          this.ClonePagingDataForFaceting(e, t)),
                        this.m_mapTabToPage.has(c) ||
                          this.m_mapTabToPage.set(c, {
                            items: [],
                            nPagesLoaded: 0,
                          }),
                        (u = this.m_mapTabToPage.get(c)),
                        (v.label = 1);
                    case 1:
                      if (
                        !(
                          u.nPagesLoaded < this.cTotalPages &&
                          u.items.length < a
                        )
                      )
                        return [3, 6];
                      (m = u.nPagesLoaded), (v.label = 2);
                    case 2:
                      return (
                        v.trys.push([2, 4, , 5]),
                        (g = {
                          query: "",
                          start: l.pagesize * m,
                          count: l.pagesize,
                          cc: p.d.COUNTRY,
                          l: p.d.LANGUAGE,
                          v: 1,
                          tag: r.a.Get().GetDefinition().strTag,
                          tagid:
                            null === (o = l.params) || void 0 === o
                              ? void 0
                              : o.tagid,
                          category:
                            null === (s = l.params) || void 0 === s
                              ? void 0
                              : s.category,
                          facetQuery: t,
                          searchQuery: n,
                          send_app_data: 1,
                        }),
                        [4, w.a.get(l.url, { params: g, withCredentials: !1 })]
                      );
                    case 3:
                      return (
                        (d = v.sent()),
                        1 ==
                          (null === (i = null == d ? void 0 : d.data) ||
                          void 0 === i
                            ? void 0
                            : i.success) &&
                          ((l.total_count = d.data.total_count),
                          (h = this.FilterStoreItemsForFaceting(
                            d.data.tab_capsules
                          )),
                          (u.items = u.items.concat(h)),
                          ++u.nPagesLoaded,
                          f.a.AddAppLinks(d.data.applinkinfo),
                          T.b.AddPackages(d.data.packages),
                          _.a.AddBundles(d.data.bundles),
                          this.m_mapTabToPagingData.set(c, l),
                          this.m_mapTabToFacetCounts.set(
                            c,
                            d.data.rgSolrFacetCounts
                          ),
                          this.UpdateResults()),
                        [3, 5]
                      );
                    case 4:
                      return (
                        (b = v.sent()),
                        (y = Object(D.a)(b)),
                        console.error(
                          "CContentHubTabStore.InternalLoadTabPage: failed with " +
                            y.strErrorMsg,
                          y,
                          this.m_facetFilterState
                        ),
                        [3, 5]
                      );
                    case 5:
                      return [3, 1];
                    case 6:
                      return [2, u];
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
              return Object(A.a)(
                { total_count: 0, params: Object(A.a)({ facet: t }, a.params) },
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
                  type: G.l.k_EAppType,
                  appType: n,
                  rgStoreTagFilter: {
                    type: G.n.k_EStoreFilterClauseTypeAppType,
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
                type: G.l.k_ESaleTagFilter,
                rgStoreTagFilter: {
                  type: G.n.k_EStoreFilterClauseTypeFeatureTag,
                  value: "windows",
                },
                filter: null,
                matchingCapsules: [],
              }),
                t.facetValues.push({
                  name: ["#Platform_Linux"],
                  type: G.l.k_ESaleTagFilter,
                  rgStoreTagFilter: {
                    type: G.n.k_EStoreFilterClauseTypeFeatureTag,
                    value: "linux",
                  },
                  filter: null,
                  matchingCapsules: [],
                }),
                t.facetValues.push({
                  name: ["#Platform_Mac"],
                  type: G.l.k_ESaleTagFilter,
                  rgStoreTagFilter: {
                    type: G.n.k_EStoreFilterClauseTypeFeatureTag,
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
                type: G.l.k_EPrice,
                rgStoreTagFilter: { type: G.n.k_EStoreFilterClauseTypePrice },
                filter: null,
                matchingCapsules: [],
              }),
                t.facetValues.push({
                  name: ["#Sale_BrowserSortOption_PopularPurchasedDiscounted"],
                  type: G.l.k_ESaleTagFilter,
                  rgStoreTagFilter: {
                    type: G.n.k_EStoreFilterClauseTypeFeatureTag,
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
                  name: ["#language_selection_" + Object(L.e)(a)],
                  type: G.l.k_ELanguage,
                  language: a,
                  rgStoreTagFilter: {
                    type: G.n.k_EStoreFilterClauseTypeLanguage,
                    value: Object(L.e)(a),
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
                type: G.l.k_EContentDescriptor,
                contentDescriptor: 5,
                rgStoreTagFilter: {
                  type: G.n.k_EStoreFilterClauseTypeContentDescriptor,
                  value: 5,
                },
                filter: null,
                matchingCapsules: [],
              }),
                t.facetValues.push({
                  name: ["#ContentDescriptor_FrequentViolenceOrGore"],
                  type: G.l.k_EContentDescriptor,
                  contentDescriptor: 2,
                  rgStoreTagFilter: {
                    type: G.n.k_EStoreFilterClauseTypeContentDescriptor,
                    value: 2,
                  },
                  filter: null,
                  matchingCapsules: [],
                }),
                t.facetValues.push({
                  name: ["#ContentDescriptor_NudityOrSexualContent"],
                  type: G.l.k_EContentDescriptor,
                  contentDescriptor: 1,
                  rgStoreTagFilter: {
                    type: G.n.k_EStoreFilterClauseTypeContentDescriptor,
                    value: 1,
                  },
                  filter: null,
                  matchingCapsules: [],
                }),
                t.facetValues.push({
                  name: ["#ContentDescriptor_AdultOnlySexualContent"],
                  type: G.l.k_EContentDescriptor,
                  contentDescriptor: 3,
                  rgStoreTagFilter: {
                    type: G.n.k_EStoreFilterClauseTypeContentDescriptor,
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
                type: G.l.k_EUserPreference,
                userPreference: G.m.k_EHideOwnedItems,
                filter: null,
                matchingCapsules: [],
                rgStoreTagFilter: null,
              }),
                t.facetValues.push({
                  name: ["#UserPreference_HideWishlistedItems"],
                  type: G.l.k_EUserPreference,
                  userPreference: G.m.k_EHideWishlistedItems,
                  filter: null,
                  matchingCapsules: [],
                  rgStoreTagFilter: null,
                }),
                t.facetValues.push({
                  name: ["#UserPreference_HideIgnoredItems"],
                  type: G.l.k_EUserPreference,
                  userPreference: G.m.k_EHideIgnoredItems,
                  bEnabledByDefault: !0,
                  filter: null,
                  matchingCapsules: [],
                  rgStoreTagFilter: null,
                }),
                e.push(t);
            }),
            (e.prototype.BAppPassesFilters = function (e) {
              if (!f.a.GetAppLinkInfo(e)) return !1;
              var t = i.a.Get();
              return (
                (!this.m_facetFilterState.BIsUserPreferenceEnabled(
                  G.m.k_EHideOwnedItems
                ) ||
                  !t.BIsGameOwned(e)) &&
                (!this.m_facetFilterState.BIsUserPreferenceEnabled(
                  G.m.k_EHideWishlistedItems
                ) ||
                  !t.BIsGameWishlisted(e)) &&
                (!this.m_facetFilterState.BIsUserPreferenceEnabled(
                  G.m.k_EHideIgnoredItems
                ) ||
                  !t.BIsGameIgnored(e))
              );
            }),
            (e.prototype.BAppSetPassesFilters = function (e) {
              var t = i.a.Get();
              return (
                (!this.m_facetFilterState.BIsUserPreferenceEnabled(
                  G.m.k_EHideOwnedItems
                ) ||
                  !e.some(function (e) {
                    return t.BIsGameOwned(e);
                  })) &&
                (!this.m_facetFilterState.BIsUserPreferenceEnabled(
                  G.m.k_EHideWishlistedItems
                ) ||
                  !e.some(function (e) {
                    return t.BIsGameWishlisted(e);
                  })) &&
                (!this.m_facetFilterState.BIsUserPreferenceEnabled(
                  G.m.k_EHideIgnoredItems
                ) ||
                  !e.some(function (e) {
                    return t.BIsGameIgnored(e);
                  }))
              );
            }),
            (e.prototype.BSubPassesFilters = function (e) {
              var t = T.b.GetPackageInfo(e);
              if (!t) return !1;
              if (!this.BAppSetPassesFilters(t.appids)) return !1;
              var a = i.a.Get();
              return (
                (!this.m_facetFilterState.BIsUserPreferenceEnabled(
                  G.m.k_EHideOwnedItems
                ) ||
                  !a.BOwnsPackage(e)) &&
                (!this.m_facetFilterState.BIsUserPreferenceEnabled(
                  G.m.k_EHideIgnoredItems
                ) ||
                  !a.BIsPackageIgnored(e))
              );
            }),
            (e.prototype.BBundlePassesFilters = function (e) {
              var t = _.a.GetBundleInfo(e);
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
                        var n = T.b.GetPackageInfo(r);
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
            Object(A.c)([k.C], e.prototype, "m_SelectedTab", void 0),
            Object(A.c)([k.C], e.prototype, "m_nItemsToShow", void 0),
            Object(A.c)([k.C], e.prototype, "m_curPagingData", void 0),
            Object(A.c)([k.C], e.prototype, "m_curCapsules", void 0),
            Object(A.c)([k.C], e.prototype, "m_curFacetCounts", void 0),
            Object(A.c)([k.C], e.prototype, "m_viewType", void 0),
            Object(A.c)([k.C], e.prototype, "m_strSearch", void 0),
            Object(A.c)([k.k], e.prototype, "SetSelectedTab", null),
            Object(A.c)([k.n], e.prototype, "cTotalRows", null),
            Object(A.c)([k.n], e.prototype, "nRowsPerPage", null),
            Object(A.c)([k.n], e.prototype, "cTotalPages", null),
            Object(A.c)([k.k], e.prototype, "ResetItemsToShow", null),
            Object(A.c)([k.n], e.prototype, "bHasMoreItemsToShow", null),
            Object(A.c)([k.k], e.prototype, "AddMoreItemsToShow", null),
            Object(A.c)([k.k], e.prototype, "UpdateResults", null),
            e
          );
        })(),
        B = a("WKKl"),
        H = a("TyAF"),
        U = a("EC67"),
        R = a("Mgs7"),
        z = a("GiuM"),
        x = a("7G5R"),
        Q = a("U9Ih"),
        K = a("NKJh"),
        W = a.n(K),
        J = a("6Y59"),
        q = a("5E+2"),
        X = a("qiKp"),
        Y = a("lhLD"),
        Z = Object(U.i)(
          Object(H.a)(function (e) {
            var t = V.Get(),
              a = t.GetVisibleTabs(),
              r = Object(z.a)(e.history, "tab"),
              s = Boolean(r)
                ? a.find(function (e) {
                    return e.name === r;
                  })
                : a[0],
              i = Object(z.a)(e.history, "facets"),
              c = t.GetNumItemsToShow(),
              l = Object(z.a)(e.history, "search");
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
                    { className: Object(m.a)(Y.TabCtn) },
                    o.a.createElement(ae, null),
                    o.a.createElement(
                      "div",
                      { className: Y.FacetAndPageCtn },
                      o.a.createElement(te, null),
                      o.a.createElement(
                        "div",
                        { className: Y.PagedItemsCtn },
                        o.a.createElement($, null)
                      )
                    )
                  )
                : null
            );
          })
        ),
        $ = Object(H.a)(function (e) {
          var t = V.Get().GetSelectedTab();
          return o.a.createElement(
            b.b,
            { feature: "tab-" + t.name },
            o.a.createElement(ee, null)
          );
        }),
        ee = Object(H.a)(function (e) {
          var t = V.Get(),
            a = t.GetSelectedTab(),
            r = t.GetFacetFilter().strQuery,
            s = t.GetNumItemsToShow(),
            i = t.GetSearch(),
            c = t.BHasTabPageLoaded(a, r, s, i),
            m = Object(n.useState)(!c),
            g = m[0],
            h = m[1];
          Object(n.useEffect)(
            function () {
              var e = w.a.CancelToken.source();
              return (
                g == c && h(!c),
                c ||
                  t.HintLoadTabPage(a, r, s, i).then(function () {
                    g && !e.token.reason && h(!1);
                  }),
                function () {
                  return e.cancel("unmounting TabDisplayPage");
                }
              );
            },
            [a, c, g, r, t, s, i]
          );
          var b = t.GetTabPageApps(a, r, s).items.slice(0, s),
            _ = Object(I.b)(
              b,
              B.a.Get().GetHomeView(),
              new I.a(),
              b.length,
              b.length
            ),
            T = b.length - _.length,
            y = t.GetViewType() === v.k_EList ? Y.ContentsList : Y.GridView,
            S = t.GetViewType() === v.k_EList && W.a.SaleItemBrowserRow;
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              "div",
              { className: Y.ContentHubStorePrefsLink },
              Boolean(T > 0) &&
                o.a.createElement(
                  "div",
                  { className: Y.ContentHubStorePrefsLinkInner },
                  o.a.createElement(
                    "a",
                    {
                      href: p.d.STORE_BASE_URL + "account/preferences/",
                      "data-tooltip-text": Object(u.f)(
                        "#ContentHub_TabFiltered_ttip"
                      ),
                    },
                    o.a.createElement(
                      q.a,
                      {
                        toolTipContent: Object(u.f)(
                          "#ContentHub_TabFiltered_ttip"
                        ),
                      },
                      Object(u.l)("#ContentHub_TabFitlered", T)
                    )
                  )
                )
            ),
            o.a.createElement(
              "div",
              { className: y },
              _.map(function (e) {
                var a,
                  r = void 0;
                return (
                  (r =
                    "bundle" == e.item_type || "sub" == e.item_type
                      ? e.item_type
                      : (null === (a = f.a.GetAppLinkInfo(e.id)) || void 0 === a
                          ? void 0
                          : a.type) || "game"),
                  o.a.createElement(
                    "div",
                    { key: "" + e.item_type + e.id, className: S },
                    t.GetViewType() === v.k_EList
                      ? o.a.createElement(d.o, {
                          id: e.id,
                          type: r,
                          bShowDemoButton: !1,
                          bLoadShortDescription: !1,
                        })
                      : o.a.createElement(d.m, {
                          capsule: { id: e.id, type: r },
                          imageType: "header",
                        })
                  )
                );
              })
            ),
            !c &&
              o.a.createElement(
                "div",
                { className: Y.ShowMoreCtn },
                o.a.createElement(l.a, {
                  string: Object(u.f)("#Loading"),
                  size: "medium",
                  position: "center",
                })
              ),
            c &&
              t.bHasMoreItemsToShow &&
              o.a.createElement(
                "div",
                { className: Y.ShowMoreCtn },
                o.a.createElement(
                  "button",
                  {
                    className: Y.ShowMore,
                    onClick: function () {
                      return t.AddMoreItemsToShow();
                    },
                  },
                  Object(u.f)("#Sale_ShowMore")
                )
              )
          );
        }),
        te = Object(U.i)(
          Object(H.a)(function (e) {
            var t = V.Get(),
              a = t.GetFacetFilter();
            return o.a.createElement(
              "div",
              { className: Y.FacetMenuCtn },
              o.a.createElement(M.c, {
                facetFilterState: a,
                language: Object(L.i)(p.d.LANGUAGE),
                nMaxFacetValues: 5,
                fnOnUpdateFilter: function () {
                  return (
                    Object(z.c)(e.history, { facets: a.GetURLParam() }),
                    void t.ResetItemsToShow()
                  );
                },
                styleOverrides: {
                  menu: Y.FacetMenuOverride,
                  menuTitle: Y.FacetMenuTitleOverride,
                  matchCount: Y.FacetMenuMatchCountOverride,
                  reset: Y.FacetMenuResetOverride,
                  facetName: Y.FacetNameOverride,
                  facetValue: Y.FacetValueOverride,
                  facetValueEnabled: Y.FacetValueEnabledOverride,
                  facetValueDeactivated: Y.FacetValueDeactivatedOverride,
                  facetValueName: Y.FacetValueNameOverride,
                  facetValueDesc: Y.FacetValueDescOverride,
                  showMore: Y.FacetShowMoreOverride,
                },
              })
            );
          })
        ),
        ae = Object(U.i)(
          Object(H.a)(function (e) {
            var t = V.Get(),
              a = t.GetVisibleTabs(),
              r = t.GetSelectedTab(),
              s = Object(n.useState)(Object(z.a)(e.history, "search")),
              i = s[0],
              c = s[1],
              l = Object(n.useState)(new X.b())[0],
              p = function (a) {
                Object(z.b)(e.history, "search", a.length > 0 ? a : void 0),
                  t.ResetItemsToShow();
              },
              g = [
                {
                  label: Object(u.f)("#FacetedBrowsing_ViewAsList"),
                  data: v.k_EList,
                },
                {
                  label: Object(u.f)("#FacetedBrowsing_ViewAsGrid"),
                  data: v.k_EGrid,
                },
              ];
            return o.a.createElement(
              x.a,
              { className: Y.TabHeaderCtn },
              o.a.createElement(
                "div",
                { className: Y.TabHeaderInner },
                a.map(function (a) {
                  var n;
                  return o.a.createElement(
                    "div",
                    {
                      key: a.displaylistname,
                      className: Object(m.a)(
                        ((n = {}),
                        (n[Y.TabHeader] = !0),
                        (n[Y.TabHeaderSelected] =
                          (null == a ? void 0 : a.name) ==
                          (null == r ? void 0 : r.name)),
                        n)
                      ),
                      onClick: function () {
                        return (function (a) {
                          l.Cancel(),
                            Object(z.c)(e.history, {
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
                { className: Y.HeaderOptionsCtn },
                o.a.createElement(
                  "div",
                  { className: Q.SuggestContainer },
                  o.a.createElement(R.l, {
                    type: "text",
                    value: i,
                    onChange: function (e) {
                      var t = e.target.value;
                      c(t);
                      var a = t && t.trim().toLocaleLowerCase();
                      l.Schedule(200, function () {
                        return p(a);
                      });
                    },
                  }),
                  o.a.createElement(J.I, null)
                ),
                o.a.createElement(R.i, {
                  rgOptions: g,
                  selectedOption: t.GetViewType(),
                  onChange: function (e) {
                    return t.SetViewType(e.data);
                  },
                })
              )
            );
          })
        ),
        re = a("94lP");
      t.default = function (e) {
        var t = o.a.useState(!0),
          a = t[0],
          n = t[1];
        if (
          (o.a.useEffect(function () {
            i.a
              .Get()
              .HintLoad()
              .then(function () {
                r.a.Get().ApplyUserAndHomeViewFilters(), n(!1);
              });
          }, []),
          a)
        )
          return o.a.createElement(l.a, {
            string: Object(u.f)("#Loading"),
            size: "medium",
            position: "center",
          });
        var m = r.a
          .Get()
          .GetSections()
          .map(function (e) {
            return o.a.createElement(F, { section: e, key: e.id });
          });
        return o.a.createElement(
          "div",
          null,
          o.a.createElement(c.a, null, o.a.createElement(re.a, null)),
          o.a.createElement(c.a, null, m),
          o.a.createElement(c.a, null, o.a.createElement(Z, null)),
          o.a.createElement(
            "a",
            {
              href: Object(s.a)(
                p.d.STORE_BASE_URL + "labs/contenthub?optout=1"
              ),
            },
            Object(u.f)("#ContentHub_OptOut")
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
