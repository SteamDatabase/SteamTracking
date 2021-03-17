/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    RNU2: function (e, t, a) {
      e.exports = {
        FeatureCtn: "maincapsule_FeatureCtn_IIjzc",
        BGImage: "maincapsule_BGImage_1Wb3-",
        CapsuleDecorators: "maincapsule_CapsuleDecorators_2SkJz",
        Artwork: "maincapsule_Artwork_1BjaZ",
        Info: "maincapsule_Info_30Ff-",
        Title: "maincapsule_Title_5_Erf",
      };
    },
    j6A3: function (e, t, a) {
      "use strict";
      a.r(t);
      var b,
        n,
        h = a("mrSG"),
        g = a("kyHq"),
        y = a("5eAM"),
        v = a("R+8l"),
        T = a("oVVc"),
        j = a("ee7K"),
        f = a("lkRc");
      ((n = b = b || {})[(n.k_NotRejected = -1)] = "k_NotRejected"),
        (n[(n.k_RejectNoMainCap = 0)] = "k_RejectNoMainCap"),
        (n[(n.k_RejectWrongPlatform = 1)] = "k_RejectWrongPlatform"),
        (n[(n.k_RejectNoComingSoon = 2)] = "k_RejectNoComingSoon"),
        (n[(n.k_RejectNoVR = 3)] = "k_RejectNoVR"),
        (n[(n.k_RejectCreatorClan = 4)] = "k_RejectCreatorClan"),
        (n[(n.k_RejectIgnoredGame = 5)] = "k_RejectIgnoredGame"),
        (n[(n.k_RejectSupportedLanguage = 6)] = "k_RejectSupportedLanguage"),
        (n[(n.k_RejectNotLoaded = 7)] = "k_RejectNotLoaded"),
        (n[(n.k_RejectIgnoreGameTags = 8)] = "k_RejectIgnoreGameTags"),
        (n[(n.k_RejectIgnoreContentDescriptors = 9)] =
          "k_RejectIgnoreContentDescriptors"),
        (n[(n.k_RejectEarlyAccess = 10)] = "k_RejectEarlyAccess"),
        (n[(n.k_RejectSoftware = 11)] = "k_RejectSoftware"),
        (n[(n.k_RejectDLC = 12)] = "k_RejectDLC"),
        (n[(n.k_RejectInLibrary = 13)] = "k_RejectInLibrary"),
        (n[(n.k_RejectNotInLibrary = 14)] = "k_RejectNotInLibrary"),
        (n[(n.k_RejectVideo = 15)] = "k_RejectVideo"),
        (n[(n.k_RejectNoDiscount = 16)] = "k_RejectNoDiscount"),
        (n[(n.k_RejectAlreadyDisplayed = 17)] = "k_RejectAlreadyDisplayed");
      var p = (function () {
        function e() {
          this.m_setAlreadyAdded = new Set();
        }
        return (
          (e.prototype.Reset = function () {
            this.m_setAlreadyAdded = new Set();
          }),
          (e.prototype.BHasAppID = function (e) {
            return this.m_setAlreadyAdded.has("a" + e);
          }),
          (e.prototype.BHasPackageID = function (e) {
            return this.m_setAlreadyAdded.has("s" + e);
          }),
          (e.prototype.BHasBundleID = function (e) {
            return this.m_setAlreadyAdded.has("b" + e);
          }),
          (e.prototype.BHasStoreItemKey = function (e) {
            return this.m_setAlreadyAdded.has(
              this.ConvertStoreItemKeyToUniqueKey(e)
            );
          }),
          (e.prototype.AddStoreItemKey = function (e) {
            this.m_setAlreadyAdded.add(this.ConvertStoreItemKeyToUniqueKey(e));
          }),
          (e.prototype.ConvertStoreItemKeyToUniqueKey = function (e) {
            switch (e.item_type) {
              default:
              case "app":
                return "a" + e.id;
              case "sub":
                return "s" + e.id;
              case "bundle":
                return "b" + e.id;
            }
          }),
          e
        );
      })();
      function d(e, t, a, n, r) {
        var i,
          o = new Array(),
          c = new Array(),
          s = new Array(),
          l = new Array();
        if (!e || 0 == e.length) return o;
        for (
          var u = [b.k_RejectSupportedLanguage, b.k_RejectAlreadyDisplayed],
            p = 0,
            d = e;
          p < d.length;
          p++
        ) {
          var m = d[p],
            _ = m.id,
            g = b.k_NotRejected;
          switch (m.item_type) {
            case "sub":
              var f = T.b.GetPackageInfo(_);
              if (
                1 !==
                (null === (i = null == f ? void 0 : f.appids) || void 0 === i
                  ? void 0
                  : i.length)
              ) {
                g = (function (e, t, a, n) {
                  var r = T.b.GetPackageInfo(e);
                  if (!r) return b.k_RejectNotLoaded;
                  var i = k(r, t);
                  if (i != b.k_NotRejected) return i;
                  var o = E(r.appids, t);
                  if (o != b.k_NotRejected) return o;
                  var c = j.a.Get();
                  if (!t.games_already_in_library && c.BOwnsPackage(e))
                    return b.k_RejectInLibrary;
                  if (c.BIsPackageIgnored(e)) return b.k_RejectIgnoredGame;
                  return n
                    ? a.BHasPackageID(e)
                      ? b.k_RejectAlreadyDisplayed
                      : C(r, t)
                    : b.k_NotRejected;
                })(_, t, a, !0);
                break;
              }
              _ = f.appids[0];
            case "app":
              g = (function (e, t, a, n) {
                var r = y.a.GetAppLinkInfo(e);
                if (!r) return b.k_RejectNotLoaded;
                var i = k(r, t);
                if (i != b.k_NotRejected) return i;
                var o = j.a.Get();
                if (o.BIsGameIgnored(e)) return b.k_RejectIgnoredGame;
                if (o.BExcludesTag(r.tags)) return b.k_RejectIgnoreGameTags;
                if (o.BExcludesContentDescriptor(r.content_descriptors))
                  return b.k_RejectIgnoreContentDescriptors;
                if (!t.early_access && r.early_access)
                  return b.k_RejectEarlyAccess;
                if (!t.software && "software" == r.type)
                  return b.k_RejectSoftware;
                if (
                  !(
                    "dlc" != r.type ||
                    (t.dlc &&
                      t.dlc_for_you &&
                      o.BIsGameOwned(r.full_game_appid))
                  )
                )
                  return b.k_RejectDLC;
                if (!t.games_already_in_library && o.BIsGameOwned(e))
                  return b.k_RejectInLibrary;
                if (!t.games_not_in_library && !o.BIsGameOwned(e))
                  return b.k_RejectNotInLibrary;
                if (!t.video && ["video", "series", "episode"].includes(r.type))
                  return b.k_RejectVideo;
                if (t.has_discount && !r.discount_percent)
                  return b.k_RejectNoDiscount;
                if (
                  "demo" == r.type &&
                  !t.games_already_in_library &&
                  o.BIsGameOwned(r.full_game_appid)
                )
                  return b.k_RejectInLibrary;
                return n
                  ? ("demo" == r.type && a.BHasAppID(r.full_game_appid)) ||
                    a.BHasAppID(e)
                    ? b.k_RejectAlreadyDisplayed
                    : C(r, t)
                  : b.k_NotRejected;
              })(_, t, a, !0);
              break;
            case "bundle":
              g = (function (e, t, a, n) {
                var r = v.a.GetBundleInfo(e);
                if (!r) return b.k_RejectNotLoaded;
                var i = k(r, t);
                if (i != b.k_NotRejected) return i;
                var o = E(r.appids, t);
                if (o != b.k_NotRejected) return o;
                return n
                  ? a.BHasBundleID(e)
                    ? b.k_RejectAlreadyDisplayed
                    : C(r, t)
                  : b.k_NotRejected;
              })(_, t, a, !0);
          }
          if (
            (g == b.k_NotRejected
              ? ((m.rejected = b.k_NotRejected),
                o.push(Object(h.a)(Object(h.a)({}, m), { priority: 1 })))
              : u.includes(g)
              ? ((m.rejected = b.k_NotRejected), c.push(m))
              : (m.rejected = g) == b.k_RejectIgnoredGame
              ? s.push(m)
              : l.push(m),
            o.length > n)
          )
            break;
        }
        return (
          o.length < n &&
            (S(o, c, r, 2),
            o.length < r &&
              t.enforce_minimum &&
              (S(o, s, r, 3), S(o, l, r, 4))),
          o
        );
      }
      function S(e, t, a, n) {
        for (var r = 0; e.length < a && r < t.length; ++r)
          e.push(Object(h.a)(Object(h.a)({}, t[r]), { priority: n }));
      }
      function k(e, t) {
        if (e.no_main_cap) return b.k_RejectNoMainCap;
        var a = j.a.Get();
        if (
          t.only_current_platform &&
          a.BHasPlatformPreferenceSet() &&
          !(
            (e.available_windows && a.BIsPreferredPlatform("win")) ||
            (e.available_mac && a.BIsPreferredPlatform("mac")) ||
            (e.available_linux && a.BIsPreferredPlatform("linux"))
          )
        )
          return b.k_RejectWrongPlatform;
        return !t.prepurchase && e.coming_soon
          ? b.k_RejectNoComingSoon
          : !t.virtual_reality && e.support_vrhmd_only
          ? b.k_RejectNoVR
          : e.creator_clan_ids.some(function (e) {
              return a.BIsIgnoringCurator(e);
            })
          ? b.k_RejectCreatorClan
          : b.k_NotRejected;
      }
      function C(e, t) {
        var a;
        if (t.localized) {
          var n = Object(g.f)(f.d.LANGUAGE);
          if (
            null === (a = e.localized_langs) ||
            void 0 === a ||
            !a.includes(n)
          )
            return b.k_RejectSupportedLanguage;
        }
        return b.k_NotRejected;
      }
      function E(e, t) {
        for (var a = j.a.Get(), n = !1, r = 0, i = e; r < i.length; r++) {
          var o = i[r];
          if (a.BIsGameIgnored(o)) return b.k_RejectIgnoredGame;
          a.BIsGameOwned(o) && (n = !0);
        }
        return !t.games_not_in_library && n
          ? b.k_RejectInLibrary
          : t.games_not_in_library || n
          ? b.k_NotRejected
          : b.k_RejectNotInLibrary;
      }
      var m = (function () {
          function e() {
            (this.m_HomeView = {}),
              "dev" === f.d.WEB_UNIVERSE && (window.g_HomeViewStore = this);
            var e = Object(f.h)("home_view_setting", "application_config");
            this.ValidateHomeViewData(e) && (this.m_HomeView = e);
          }
          return (
            (e.prototype.GetHomeView = function () {
              return this.m_HomeView.home;
            }),
            (e.Get = function () {
              return (
                e.s_globalSingletonStore ||
                  ((e.s_globalSingletonStore = new e()),
                  "dev" == f.d.WEB_UNIVERSE &&
                    (window.g_HomeViewSetting = e.s_globalSingletonStore)),
                e.s_globalSingletonStore
              );
            }),
            (e.prototype.ValidateHomeViewData = function (e) {
              return (
                "object" == typeof e.home && "object" == typeof e.main_cluster
              );
            }),
            e
          );
        })(),
        P = (function () {
          function e() {
            var t = this;
            (this.m_mapAppLists = new Map()),
              (this.m_rgSections = new Array()),
              (this.m_mapSectionsID = new Map()),
              (this.m_definition = {}),
              (this.m_rgMainCapsule = []),
              (this.m_mapOtherCarousels = new Map()),
              "dev" === f.d.WEB_UNIVERSE && (window.g_ContentHubStore = this);
            var e = Object(f.h)("ch_section_data", "application_config");
            this.ValidateSectionData(e) &&
              ((this.m_rgSections = e),
              this.m_rgSections.forEach(function (e) {
                return t.m_mapSectionsID.set(e.id, e);
              }));
            var a = Object(f.h)("ch_list_data", "application_config");
            this.ValidateAppListData(a) &&
              a.forEach(function (e) {
                e.apps.forEach(function (e) {
                  e.appid
                    ? ((e.id = e.appid), (e.item_type = "app"))
                    : e.packageid
                    ? ((e.id = e.packageid), (e.item_type = "sub"))
                    : e.bundleid &&
                      ((e.id = e.bundleid), (e.item_type = "bundle"));
                }),
                  t.m_mapAppLists.set(e.id, e);
              }),
              (this.m_definition = Object(f.h)(
                "ch_static_data",
                "application_config"
              ));
          }
          return (
            (e.prototype.GetMainCapsuleList = function () {
              return this.m_rgMainCapsule;
            }),
            (e.prototype.InternalGetMainCapsuleLists = function () {
              var t = this;
              return [
                "featured",
                "specials",
                "featured_recommended",
                2 == f.d.EUNIVERSE ? "popular_new_releases" : "",
              ].map(function (e) {
                return t.m_mapAppLists.get(e);
              });
            }),
            (e.prototype.GetSections = function () {
              return this.m_rgSections;
            }),
            (e.prototype.GetAppListForSection = function (e) {
              return this.m_mapOtherCarousels.get(e);
            }),
            (e.prototype.GetDefinition = function () {
              return this.m_definition;
            }),
            (e.prototype.ApplyUserAndHomeViewFilters = function () {
              var e = new p(),
                t = Object(h.a)(Object(h.a)({}, m.Get().GetHomeView()), {
                  enforce_minimum: !0,
                });
              this.BuildFeaturedCarouselContent(e, t),
                this.BuildAllOtherCarouselContent(e, t);
            }),
            (e.prototype.BuildAllOtherCarouselContent = function (n, r) {
              var i = this;
              (this.m_mapOtherCarousels = new Map()),
                this.m_rgSections.forEach(function (e) {
                  var t,
                    a = i.m_mapAppLists.get(e.id);
                  0 <
                    (null === (t = null == a ? void 0 : a.apps) || void 0 === t
                      ? void 0
                      : t.length) &&
                    i.m_mapOtherCarousels.set(e.id, d(a.apps, r, n, 40, 4));
                });
            }),
            (e.prototype.BuildFeaturedCarouselContent = function (t, a) {
              var n = new Array(),
                r = new Array();
              this.InternalGetMainCapsuleLists().forEach(function (e) {
                n.push(d((null == e ? void 0 : e.apps) || [], a, t, 12, 4)),
                  r.push(0);
              }),
                (this.m_rgMainCapsule = []);
              for (var e = 1; this.m_rgMainCapsule.length < 12 && e <= 4; ) {
                for (var i = !1, o = 0; o < n.length; ++o) {
                  var c = n[o],
                    s = r[o];
                  if (s < c.length && c[s].priority <= e) {
                    (i = !0), (r[o] += 1);
                    var l = c[s];
                    if (
                      (t.BHasStoreItemKey(l) ||
                        (this.m_rgMainCapsule.push(l), t.AddStoreItemKey(l)),
                      12 <= this.m_rgMainCapsule.length)
                    )
                      break;
                  }
                }
                i || (e += 1);
              }
            }),
            (e.Get = function () {
              return (
                e.s_globalSingletonStore ||
                  ((e.s_globalSingletonStore = new e()),
                  "dev" == f.d.WEB_UNIVERSE &&
                    (window.g_ContentHubStore = e.s_globalSingletonStore)),
                e.s_globalSingletonStore
              );
            }),
            (e.prototype.ValidateSectionData = function (e) {
              var t = e;
              return (
                !!(
                  t &&
                  Array.isArray(t) &&
                  0 < t.length &&
                  "object" == typeof t[0]
                ) &&
                "string" == typeof t[0].title &&
                "string" == typeof t[0].id &&
                "string" == typeof t[0].type
              );
            }),
            (e.prototype.ValidateAppListData = function (e) {
              var t = e;
              return (
                !!(
                  t &&
                  Array.isArray(t) &&
                  0 < t.length &&
                  "object" == typeof t[0]
                ) &&
                "string" == typeof t[0].id &&
                Array.isArray(t[0].apps)
              );
            }),
            e
          );
        })(),
        _ = a("q1tI"),
        G = a.n(_),
        i = a("VQ2A"),
        o = a("IjL/"),
        R = a("0OaU"),
        A = a("TLQK"),
        c = a("xVl9"),
        I = a("5L1o"),
        r = a("MnIK"),
        s = a("dfs5");
      function l(e, a) {
        var n = new Array();
        return (
          e.forEach(function (e) {
            var t;
            (!a || n.length < a) &&
              (e.appid
                ? (t = y.a.GetAppLinkInfo(e.appid)) &&
                  n.push({ id: e.appid, type: t.type })
                : e.bundleid && v.a.BHasBundleInfoLoaded(e.bundleid)
                ? n.push({ id: e.bundleid, type: "bundle" })
                : e.packageid &&
                  T.b.BHasPackageInfoLoaded(e.packageid) &&
                  n.push({ id: e.packageid, type: "sub" }));
          }),
          n
        );
      }
      function u(e) {
        var t = e.section,
          a = P.Get().GetAppListForSection(t.id);
        if (!a || 0 == a.length) return null;
        var n = null;
        switch (t.type) {
          case "4wide":
            n = G.a.createElement(F, { capsuleList: a });
            break;
          case "creator4wide":
            n = G.a.createElement(N, { capsuleList: a });
            break;
          default:
            n = G.a.createElement("div", null, "Unknown: ", t.type);
        }
        return G.a.createElement(
          s.b,
          { feature: t.id },
          G.a.createElement(
            r.a,
            { placeholderHeight: 250, rootMargin: "0px 0px 100% 0px" },
            G.a.createElement(L, {
              title: t.title,
              description: t.description,
            }),
            n
          )
        );
      }
      function w(e) {
        var t = P.Get().GetMainCapsuleList();
        return G.a.createElement(
          c.a,
          { visibleElements: 1 },
          t.map(function (e) {
            return G.a.createElement(ne, {
              key: e.item_type + " " + e.id,
              item: e,
              strReason:
                e.status_string || "Test Reason: Because its selling well",
            });
          })
        );
      }
      var L = function (e) {
          var t = e.title,
            a = e.description;
          return G.a.createElement(
            "div",
            null,
            G.a.createElement("span", null, t),
            Boolean(a) && G.a.createElement("span", null, a)
          );
        },
        F = function (e) {
          var t = l(e.capsuleList, 40);
          return G.a.createElement(
            c.a,
            { visibleElements: 4 },
            t.map(function (e) {
              return G.a.createElement(I.l, {
                key: e.type + "_" + e.id,
                capsule: e,
                imageType: "header",
              });
            })
          );
        },
        N = function (e) {
          var t = e.capsuleList,
            a = Object(j.b)(),
            n = a[0];
          a[1];
          if (n)
            return G.a.createElement(R.a, {
              string: Object(A.f)("#Loading"),
              size: "medium",
              position: "center",
            });
          var r = l(t, 40);
          return G.a.createElement(
            c.a,
            { visibleElements: 4 },
            r.map(function (e) {
              return G.a.createElement(I.l, {
                key: e.type + "_" + e.id,
                capsule: e,
                imageType: "header",
              });
            })
          );
        },
        O = a("vDqi"),
        B = a.n(O),
        D = a("2vnA"),
        V = a("bDQf"),
        H = a("3+zv"),
        M = a("dpTt"),
        U = (function () {
          function e() {
            var a = this;
            (this.m_rgTabs = new Array()),
              (this.m_mapTabToPagingData = new Map()),
              (this.m_facets = []),
              (this.m_facetFilter = null),
              (this.m_mapTabToPageList = new Map()),
              (this.m_mapTabToPageListPromises = new Map()),
              (this.m_mapTabToFacetCounts = new Map()),
              (this.m_nCurrentPage = 0),
              (this.m_facetQuery = ""),
              "dev" === f.d.WEB_UNIVERSE &&
                (window.g_ContentHubTabStore = this);
            var e = Object(f.h)("ch_tab_data", "application_config");
            this.ValidateTabData(e) &&
              ((this.m_rgTabs = e.filter(function (e) {
                return 0 < e.tab_capsules.length;
              })),
              0 < this.m_rgTabs.length &&
                (this.m_SelectedTab = this.m_rgTabs[0]),
              this.m_rgTabs.forEach(function (e) {
                var t = new Array();
                t.push({ capsules: e.tab_capsules, bLoaded: !0 }),
                  a.m_mapTabToPageList.set(e.name, t),
                  a.m_mapTabToPageListPromises.set(e.name, new Array()),
                  a.m_mapTabToFacetCounts.set(e.name, e.rgSolrFacetCounts);
              }));
            var t = Object(f.h)("ch_tab_paging", "application_config");
            this.ValidatePagingData(t) &&
              t.forEach(function (e) {
                return a.m_mapTabToPagingData.set(e.prefix, e);
              }),
              this.m_facets.push({ name: ["Genre"], facetValues: [] }),
              this.m_facets[0].facetValues.push({
                name: ["Action"],
                filter: null,
                rgStoreTagFilter: {
                  type: H.p.k_EStoreFilterClauseTypeStoreTag,
                  value: 19,
                },
                nAtomicStoreTagID: 19,
                matchingCapsules: [],
              }),
              this.m_facets[0].facetValues.push({
                name: ["RPG"],
                filter: null,
                rgStoreTagFilter: {
                  type: H.p.k_EStoreFilterClauseTypeStoreTag,
                  value: 122,
                },
                nAtomicStoreTagID: 122,
                matchingCapsules: [],
              }),
              this.m_facets[0].facetValues.push({
                name: ["Adventure"],
                filter: null,
                rgStoreTagFilter: {
                  type: H.p.k_EStoreFilterClauseTypeStoreTag,
                  value: 21,
                },
                nAtomicStoreTagID: 21,
                matchingCapsules: [],
              }),
              this.m_facets.push({ name: ["OS"], facetValues: [] }),
              this.m_facets[1].facetValues.push({
                name: ["macOS"],
                filter: null,
                rgStoreTagFilter: {
                  type: H.p.k_EStoreFilterClauseTypeFeatureTag,
                  value: "mac",
                },
                matchingCapsules: [],
              }),
              this.m_facets[1].facetValues.push({
                name: ["Linux"],
                filter: null,
                rgStoreTagFilter: {
                  type: H.p.k_EStoreFilterClauseTypeFeatureTag,
                  value: "linux",
                },
                matchingCapsules: [],
              });
            (this.m_facetFilter = new M.b()),
              this.m_facetFilter.SetFacets(this.m_facets),
              this.m_facetFilter.SetParams({ bSaleScope: !1 }),
              this.m_facetFilter.PruneFacets([], 0),
              this.m_facetFilter.SetSolrFacetCounts(
                this.m_mapTabToFacetCounts.get(this.m_SelectedTab.name)
              ),
              this.m_facetFilter.DeactivateFacetValues(),
              this.m_facetFilter.SortFacetValues(
                [],
                Object(g.f)(f.d.LANGUAGE),
                H.o.k_ESortFacetsByMatchCount,
                5
              );
          }
          return (
            (e.prototype.GetVisibleTabs = function () {
              return this.m_rgTabs;
            }),
            (e.prototype.GetSelectedTab = function () {
              return this.m_SelectedTab;
            }),
            (e.prototype.SetSelectedTab = function (e) {
              (this.m_SelectedTab = e),
                (this.m_facetQuery = ""),
                this.m_facetFilter.ResetSelections(),
                this.m_facetFilter.SetSolrFacetCounts(
                  this.m_mapTabToFacetCounts.get(this.m_SelectedTab.name)
                ),
                this.m_facetFilter.DeactivateFacetValues(),
                this.m_facetFilter.SortFacetValues(
                  [],
                  Object(g.f)(f.d.LANGUAGE),
                  H.o.k_ESortFacetsByMatchCount,
                  5
                ),
                (this.m_nCurrentPage = 0);
            }),
            (e.prototype.GetSelectedPage = function () {
              return this.m_nCurrentPage;
            }),
            (e.prototype.SetSelectedPage = function (e) {
              this.m_nCurrentPage !== e &&
                ((this.m_nCurrentPage = e),
                this.HintLoadTabPage(this.m_SelectedTab, this.m_facetQuery, e));
            }),
            (e.prototype.GetRowsPerPage = function (e, t) {
              return this.m_mapTabToPagingData.get(this.GetPageKey(e, t))
                .pagesize;
            }),
            (e.prototype.GetTotalMatchingResults = function (e, t) {
              return this.m_mapTabToPagingData.get(this.GetPageKey(e, t))
                .total_count;
            }),
            (e.prototype.GetNumPages = function (e, t) {
              var a = this.m_mapTabToPagingData.get(this.GetPageKey(e, t));
              return Math.floor(a.total_count / a.pagesize) + 1;
            }),
            (e.prototype.GetFacetFilter = function () {
              return this.m_facetFilter;
            }),
            (e.prototype.GetFacetQuery = function () {
              return this.m_facetQuery;
            }),
            (e.prototype.UpdateFacetQuery = function () {
              (this.m_facetQuery = this.m_facetFilter.strQuery),
                (this.m_nCurrentPage = 0),
                this.HintLoadTabPage(
                  this.m_SelectedTab,
                  this.m_facetQuery,
                  this.m_nCurrentPage
                );
            }),
            (e.prototype.BHasTabPageLoaded = function (e, t, a) {
              var n,
                r = this.m_mapTabToPageList.get(this.GetPageKey(e, t));
              return Boolean(
                r &&
                  a < r.length &&
                  (null === (n = r[a]) || void 0 === n ? void 0 : n.bLoaded)
              );
            }),
            (e.prototype.GetTabPageApps = function (e, t, a) {
              var n = this.m_mapTabToPageList.get(this.GetPageKey(e, t));
              return Boolean(n) ? n[a] : null;
            }),
            (e.prototype.HintLoadTabPage = function (n, r, i) {
              return Object(h.b)(this, void 0, void 0, function () {
                var t, a;
                return Object(h.e)(this, function (e) {
                  return this.BHasTabPageLoaded(n, r, i)
                    ? [2, this.GetTabPageApps(n, r, i)]
                    : ((t = this.GetPageKey(n, r)),
                      this.m_mapTabToPageListPromises.has(t) ||
                        this.m_mapTabToPageListPromises.set(t, []),
                      (a = this.m_mapTabToPageListPromises.get(t)),
                      (i >= a.length || !a[i]) &&
                        (a[i] = this.InternalLoadTabPage(n, r, i)),
                      [2, a[i]]);
                });
              });
            }),
            (e.prototype.InternalLoadTabPage = function (l, u, p) {
              var d, m, _;
              return Object(h.b)(this, void 0, void 0, function () {
                var t, a, n, r, i, o, c, s;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      (t = this.GetPageKey(l, u)),
                        this.m_mapTabToPagingData.has(t) ||
                          this.m_mapTabToPagingData.set(
                            t,
                            this.ClonePagingDataForFaceting(l, u)
                          ),
                        (a = this.m_mapTabToPagingData.get(t)),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        (n = {
                          query: "",
                          start: a.pagesize * p,
                          count: a.pagesize,
                          cc: f.d.COUNTRY,
                          l: f.d.LANGUAGE,
                          v: 1,
                          tag: P.Get().GetDefinition().strTag,
                          tagid:
                            null === (d = a.params) || void 0 === d
                              ? void 0
                              : d.tagid,
                          category:
                            null === (m = a.params) || void 0 === m
                              ? void 0
                              : m.category,
                          facet: u,
                          send_app_data: 1,
                        }),
                        [4, B.a.get(a.url, { params: n, withCredentials: !1 })]
                      );
                    case 2:
                      return (
                        (r = e.sent()),
                        1 ==
                        (null === (_ = null == r ? void 0 : r.data) ||
                        void 0 === _
                          ? void 0
                          : _.success)
                          ? ((a.total_count = r.data.total_count),
                            (a.pagesize = r.data.pagesize),
                            (i = this.GetPageKey(l, u)),
                            this.m_mapTabToPageList.has(i) ||
                              this.m_mapTabToPageList.set(i, []),
                            ((o = this.m_mapTabToPageList.get(i))[p] = {
                              capsules: r.data.tab_capsules,
                              bLoaded: !0,
                            }),
                            y.a.AddAppLinks(r.data.applinkinfo),
                            T.b.AddPackages(r.data.packages),
                            v.a.AddBundles(r.data.bundles),
                            this.m_facetFilter.SetSolrFacetCounts(
                              r.data.rgSolrFacetCounts
                            ),
                            this.m_facetFilter.DeactivateFacetValues(),
                            this.m_facetFilter.SortFacetValues(
                              [],
                              Object(g.f)(f.d.LANGUAGE),
                              H.o.k_ESortFacetsByMatchCount,
                              5
                            ),
                            [2, o[p]])
                          : [3, 4]
                      );
                    case 3:
                      return (
                        (c = e.sent()),
                        (s = Object(V.a)(c)),
                        console.error(
                          "CContentHubTabStore.InternalLoadTabPage: failed with " +
                            s.strErrorMsg,
                          s,
                          this.m_facetFilter
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, { capsules: [], bLoaded: !0 }];
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
                  0 < t.length &&
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
                  0 < t.length &&
                  "object" == typeof t[0]
                ) &&
                "string" == typeof t[0].url &&
                "string" == typeof t[0].prefix &&
                "number" == typeof t[0].total_count
              );
            }),
            (e.prototype.GetPageKey = function (e, t) {
              return e.name + encodeURIComponent(t);
            }),
            (e.prototype.ClonePagingDataForFaceting = function (e, t) {
              var a = this.m_mapTabToPagingData.get(e.name);
              return Object(h.a)(
                { total_count: 0, params: Object(h.a)({ facet: t }, a.params) },
                a
              );
            }),
            Object(h.c)([D.C], e.prototype, "m_mapTabToPagingData", void 0),
            Object(h.c)([D.C], e.prototype, "m_mapTabToPageList", void 0),
            Object(h.c)([D.C], e.prototype, "m_mapTabToFacetCounts", void 0),
            Object(h.c)([D.C], e.prototype, "m_SelectedTab", void 0),
            Object(h.c)([D.C], e.prototype, "m_nCurrentPage", void 0),
            Object(h.c)([D.C], e.prototype, "m_facetQuery", void 0),
            Object(h.c)([D.k], e.prototype, "SetSelectedTab", null),
            Object(h.c)([D.k], e.prototype, "UpdateFacetQuery", null),
            e
          );
        })(),
        K = a("TyAF"),
        Q = a("Mgs7"),
        z = a("7G5R"),
        x = a("NKJh"),
        W = a.n(x),
        J = a("exH9"),
        q = a("lhLD"),
        X = a("5E+2"),
        Y = Object(K.a)(function (e) {
          var t = U.Get().GetVisibleTabs(),
            a = U.Get().GetSelectedTab(),
            n = U.Get().GetFacetFilter(),
            r = U.Get().GetFacetQuery();
          if (!t || 0 == t.length) return null;
          var i = U.Get().GetSelectedPage();
          return G.a.createElement(
            "div",
            { className: Object(J.a)(q.TabCtn) },
            G.a.createElement(ee, null),
            G.a.createElement($, null),
            G.a.createElement(M.c, {
              language: 0,
              rgFacets: n.GetPrunedFacets(),
              nMatchingCapsules: 0,
              nMaxFacetValues: 5,
              bShowFacetControls: !0,
              bApplyingFilter: !1,
              bShowMatchingCapsules: n.BSomeFacetValueEnabled(),
              background: null,
              fnOnToggleControls: null,
              fnOnUpdateFilter: function () {
                return U.Get().UpdateFacetQuery();
              },
            }),
            G.a.createElement(
              s.b,
              { feature: "tab-" + a.name },
              G.a.createElement(Z, {
                selectedTab: a,
                facetQuery: r,
                nCurPage: i,
              })
            ),
            G.a.createElement($, null)
          );
        }),
        Z = Object(K.a)(function (e) {
          var t = e.selectedTab,
            a = e.facetQuery,
            n = e.nCurPage,
            r = U.Get().BHasTabPageLoaded(t, a, n),
            i = Object(_.useState)(!r),
            o = i[0],
            c = i[1];
          if (
            (Object(_.useEffect)(
              function () {
                var e = B.a.CancelToken.source();
                return (
                  o == r && c(!r),
                  r ||
                    U.Get()
                      .HintLoadTabPage(t, a, n)
                      .then(function () {
                        o && !e.token.reason && c(!1);
                      }),
                  function () {
                    return e.cancel("unmounting TabDisplayPage");
                  }
                );
              },
              [t, n, r, o, a]
            ),
            !r)
          )
            return G.a.createElement(R.a, {
              string: Object(A.f)("#Loading"),
              size: "medium",
              position: "center",
            });
          var s = U.Get().GetTabPageApps(t, a, n).capsules,
            l = d(s, m.Get().GetHomeView(), new p(), s.length, s.length),
            u = s.length - l.length;
          return G.a.createElement(
            G.a.Fragment,
            null,
            Boolean(0 < u) &&
              G.a.createElement(
                "a",
                {
                  href: f.d.STORE_BASE_URL + "account/preferences/",
                  "data-tooltip-text": Object(A.f)(
                    "#ContentHub_TabFiltered_ttip"
                  ),
                },
                G.a.createElement(
                  X.a,
                  {
                    toolTipContent: Object(A.f)("#ContentHub_TabFiltered_ttip"),
                  },
                  Object(A.l)("#ContentHub_TabFitlered", u)
                )
              ),
            l.map(function (e) {
              var t,
                a = void 0,
                a =
                  "bundle" == e.item_type || "sub" == e.item_type
                    ? e.item_type
                    : (null === (t = y.a.GetAppLinkInfo(e.id)) || void 0 === t
                        ? void 0
                        : t.type) || "game";
              return G.a.createElement(
                "div",
                {
                  key: "" + e.item_type + e.id,
                  className: W.a.SaleItemBrowserRow,
                },
                G.a.createElement(I.n, {
                  id: e.id,
                  type: a,
                  bShowDemoButton: !1,
                  bLoadShortDescription: !1,
                })
              );
            })
          );
        }),
        $ = Object(K.a)(function (e) {
          var t,
            n = U.Get(),
            a = n.GetSelectedTab(),
            r = n.GetFacetQuery(),
            i = n.GetSelectedPage(),
            o = n.GetRowsPerPage(a, r),
            c = n.GetTotalMatchingResults(a, r),
            s = o * i + 1,
            l = Math.min(o * (i + 1), c),
            u = Math.ceil(c / o);
          if (1 < u) {
            var p = new Set();
            p.add(1), p.add(u);
            for (var d = 0; p.size < 7 && d < 7; ++d)
              0 < i + 1 - d && p.add(i + 1 - d),
                p.size < 7 && i + 1 + d < u && p.add(i + 1 + d);
            t = Array.from(p).sort(function (e, t) {
              return e - t;
            });
          }
          return G.a.createElement(
            "div",
            { className: Object(J.a)(q.PagingCtn) },
            G.a.createElement(
              "div",
              null,
              Object(A.f)("#ContentHub_Paging", s, l, c)
            ),
            Boolean(1 < u) &&
              G.a.createElement(
                "div",
                { className: Object(J.a)(q.PagingNumCtn) },
                Boolean(0 < i) &&
                  G.a.createElement(
                    Q.d,
                    {
                      onClick: function () {
                        return n.SetSelectedPage(i - 1);
                      },
                    },
                    "<"
                  ),
                t.map(function (e, t) {
                  var a;
                  return G.a.createElement(
                    "div",
                    { className: q.PageNumCtn, key: "" + e },
                    Boolean(1 === t && 2 !== e) &&
                      G.a.createElement("span", null, "..."),
                    G.a.createElement(
                      "div",
                      {
                        onClick: function () {
                          return n.SetSelectedPage(e - 1);
                        },
                        className: Object(J.a)(
                          (((a = {})[q.PageNumber] = !0),
                          (a[q.PageSelectedNumber] = e === i + 1),
                          a)
                        ),
                      },
                      e
                    ),
                    Boolean(5 === t && e !== u - 1) &&
                      G.a.createElement("span", null, "...")
                  );
                }),
                Boolean(i + 1 < u) &&
                  G.a.createElement(
                    Q.d,
                    {
                      onClick: function () {
                        return n.SetSelectedPage(i + 1);
                      },
                    },
                    ">"
                  )
              )
          );
        }),
        ee = Object(K.a)(function (e) {
          var t = U.Get().GetVisibleTabs(),
            a = U.Get().GetSelectedTab();
          return G.a.createElement(
            z.a,
            { className: q.TabHeaderCtn },
            t.map(function (e) {
              var t;
              return G.a.createElement(
                "div",
                {
                  key: e.displaylistname,
                  className: Object(J.a)(
                    (((t = {})[q.TabHeader] = !0),
                    (t[q.TabHeaderSelected] =
                      (null == e ? void 0 : e.name) ==
                      (null == a ? void 0 : a.name)),
                    t)
                  ),
                  onClick: function () {
                    return U.Get().SetSelectedTab(e);
                  },
                },
                e.title
              );
            })
          );
        }),
        te = a("IzPI"),
        ae = a("RNU2"),
        ne =
          (Object(K.a)(function (e) {
            var t = e.capsule,
              a = t.appid,
              n = "game";
            return (
              t.bundleid
                ? ((n = "bundle"), (a = t.bundleid))
                : t.packageid
                ? ((n = "sub"), (a = t.packageid))
                : (n = y.a.GetAppLinkInfo(a).type),
              G.a.createElement(
                "div",
                null,
                G.a.createElement(I.k, { id: a, type: n })
              )
            );
          }),
          function (e) {
            var t = e.item,
              a = e.strReason,
              n = y.a.GetAppLinkInfo(t.id);
            if (!n) return null;
            var r =
                0 < n.screenshot_list.length
                  ? n.screenshot_list[0]
                  : n.header_image_url,
              i = Object(te.f)(n.capsule_link);
            return G.a.createElement(
              I.e,
              { appInfo: n },
              G.a.createElement(
                "div",
                {
                  className: Object(J.a)(ae.BGImage),
                  style: { backgroundImage: 'url("' + r + '")' },
                },
                G.a.createElement(
                  "div",
                  { className: Object(J.a)(ae.FeatureCtn) },
                  G.a.createElement(
                    "a",
                    { href: i, className: Object(J.a)(ae.Artwork) },
                    Object(I.b)(n) &&
                      G.a.createElement(
                        "div",
                        { className: ae.CapsuleDecorators },
                        G.a.createElement(I.h, null)
                      ),
                    G.a.createElement(I.f, { info: n, appInfo: n }),
                    G.a.createElement(I.c, { info: n })
                  ),
                  G.a.createElement(
                    "div",
                    { className: Object(J.a)(ae.Info) },
                    G.a.createElement(
                      "a",
                      { className: ae.Title, href: i },
                      n.title
                    ),
                    G.a.createElement("div", null, a),
                    G.a.createElement(I.m, { appInfo: n, instanceNum: t.id })
                  )
                )
              )
            );
          });
      t.default = function (e) {
        var t = G.a.useState(!0),
          a = t[0],
          n = t[1];
        if (
          (G.a.useEffect(function () {
            j.a
              .Get()
              .HintLoad()
              .then(function () {
                P.Get().ApplyUserAndHomeViewFilters(), n(!1);
              });
          }, []),
          a)
        )
          return G.a.createElement(R.a, {
            string: Object(A.f)("#Loading"),
            size: "medium",
            position: "center",
          });
        var r = P.Get()
          .GetSections()
          .map(function (e) {
            return G.a.createElement(u, { section: e, key: e.id });
          });
        return G.a.createElement(
          "div",
          null,
          G.a.createElement(o.a, null, G.a.createElement(w, null)),
          G.a.createElement(o.a, null, r),
          G.a.createElement(o.a, null, G.a.createElement(Y, null)),
          G.a.createElement(
            "a",
            {
              href: Object(i.a)(
                f.d.STORE_BASE_URL + "labs/contenthub?optout=1"
              ),
            },
            Object(A.f)("#ContentHub_OptOut")
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
        PagingCtn: "contenthubtabs_PagingCtn_1z4pT",
        PagingNumCtn: "contenthubtabs_PagingNumCtn_2JUQr",
        PageNumCtn: "contenthubtabs_PageNumCtn_sJmNK",
        PageNumber: "contenthubtabs_PageNumber_1QUSX",
        PageSelectedNumber: "contenthubtabs_PageSelectedNumber_tJc_C",
        PagingButton: "contenthubtabs_PagingButton_J9G7z",
      };
    },
  },
]);
