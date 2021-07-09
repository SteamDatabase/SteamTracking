/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    j6A3: function (e, t, a) {
      "use strict";
      a.r(t);
      var r,
        n = a("mrSG"),
        o = a("kyHq"),
        i = a("5eAM"),
        s = a("R+8l"),
        c = a("oVVc"),
        l = a("ee7K"),
        u = a("lkRc");
      !(function (e) {
        (e[(e.k_NotRejected = -1)] = "k_NotRejected"),
          (e[(e.k_RejectNoMainCap = 0)] = "k_RejectNoMainCap"),
          (e[(e.k_RejectWrongPlatform = 1)] = "k_RejectWrongPlatform"),
          (e[(e.k_RejectNoComingSoon = 2)] = "k_RejectNoComingSoon"),
          (e[(e.k_RejectNoVR = 3)] = "k_RejectNoVR"),
          (e[(e.k_RejectCreatorClan = 4)] = "k_RejectCreatorClan"),
          (e[(e.k_RejectIgnoredGame = 5)] = "k_RejectIgnoredGame"),
          (e[(e.k_RejectSupportedLanguage = 6)] = "k_RejectSupportedLanguage"),
          (e[(e.k_RejectNotLoaded = 7)] = "k_RejectNotLoaded"),
          (e[(e.k_RejectIgnoreGameTags = 8)] = "k_RejectIgnoreGameTags"),
          (e[(e.k_RejectIgnoreContentDescriptors = 9)] =
            "k_RejectIgnoreContentDescriptors"),
          (e[(e.k_RejectEarlyAccess = 10)] = "k_RejectEarlyAccess"),
          (e[(e.k_RejectSoftware = 11)] = "k_RejectSoftware"),
          (e[(e.k_RejectDLC = 12)] = "k_RejectDLC"),
          (e[(e.k_RejectInLibrary = 13)] = "k_RejectInLibrary"),
          (e[(e.k_RejectNotInLibrary = 14)] = "k_RejectNotInLibrary"),
          (e[(e.k_RejectVideo = 15)] = "k_RejectVideo"),
          (e[(e.k_RejectNoDiscount = 16)] = "k_RejectNoDiscount"),
          (e[(e.k_RejectAlreadyDisplayed = 17)] = "k_RejectAlreadyDisplayed");
      })(r || (r = {}));
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
      function d(e, t, a, o, i) {
        var s,
          l = new Array(),
          u = new Array(),
          p = new Array(),
          d = new Array();
        if (!e || 0 == e.length) return l;
        for (
          var g = [r.k_RejectSupportedLanguage, r.k_RejectAlreadyDisplayed],
            _ = 0,
            f = e;
          _ < f.length;
          _++
        ) {
          var T = f[_],
            v = T.id,
            S = r.k_NotRejected;
          switch (T.item_type) {
            case "sub":
              var C = c.b.GetPackageInfo(v);
              if (
                1 !==
                (null === (s = null == C ? void 0 : C.appids) || void 0 === s
                  ? void 0
                  : s.length)
              ) {
                S = b(v, t, a, !0);
                break;
              }
              v = C.appids[0];
            case "app":
              S = h(v, t, a, !0);
              break;
            case "bundle":
              S = y(v, t, a, !0);
          }
          if (
            (S == r.k_NotRejected
              ? ((T.rejected = r.k_NotRejected),
                l.push(Object(n.a)(Object(n.a)({}, T), { priority: 1 })))
              : g.includes(S)
              ? ((T.rejected = r.k_NotRejected), u.push(T))
              : ((T.rejected = S),
                S == r.k_RejectIgnoredGame ? p.push(T) : d.push(T)),
            l.length > o)
          )
            break;
        }
        return (
          l.length < o &&
            (m(l, u, i, 2),
            l.length < i &&
              t.enforce_minimum &&
              (m(l, p, i, 3), m(l, d, i, 4))),
          l
        );
      }
      function m(e, t, a, r) {
        for (var o = 0; e.length < a && o < t.length; ++o)
          e.push(Object(n.a)(Object(n.a)({}, t[o]), { priority: r }));
      }
      function g(e, t) {
        if (e.no_main_cap) return r.k_RejectNoMainCap;
        var a = l.a.Get();
        if (
          t.only_current_platform &&
          a.BHasPlatformPreferenceSet() &&
          !(
            (e.available_windows && a.BIsPreferredPlatform("win")) ||
            (e.available_mac && a.BIsPreferredPlatform("mac")) ||
            (e.available_linux && a.BIsPreferredPlatform("linux"))
          )
        )
          return r.k_RejectWrongPlatform;
        return !1 === t.prepurchase && e.coming_soon
          ? r.k_RejectNoComingSoon
          : !1 === t.virtual_reality && e.support_vrhmd_only
          ? r.k_RejectNoVR
          : e.creator_clan_ids.some(function (e) {
              return a.BIsIgnoringCurator(e);
            })
          ? r.k_RejectCreatorClan
          : r.k_NotRejected;
      }
      function _(e, t) {
        var a;
        if (t.localized) {
          var n = Object(o.i)(u.d.LANGUAGE);
          if (
            !(null === (a = e.localized_langs) || void 0 === a
              ? void 0
              : a.includes(n))
          )
            return r.k_RejectSupportedLanguage;
        }
        return r.k_NotRejected;
      }
      function h(e, t, a, n) {
        var o = i.a.GetAppLinkInfo(e);
        if (!o) return r.k_RejectNotLoaded;
        var s = g(o, t);
        if (s != r.k_NotRejected) return s;
        var c = l.a.Get();
        return c.BIsGameIgnored(e)
          ? r.k_RejectIgnoredGame
          : c.BExcludesTag(o.tags)
          ? r.k_RejectIgnoreGameTags
          : c.BExcludesContentDescriptor(o.content_descriptors)
          ? r.k_RejectIgnoreContentDescriptors
          : !1 === t.early_access && o.early_access
          ? r.k_RejectEarlyAccess
          : !1 === t.software && "software" == o.type
          ? r.k_RejectSoftware
          : "dlc" != o.type ||
            (!1 !== t.dlc &&
              !1 !== t.dlc_for_you &&
              c.BIsGameOwned(o.full_game_appid))
          ? !1 === t.games_already_in_library && c.BIsGameOwned(e)
            ? r.k_RejectInLibrary
            : !1 !== t.games_not_in_library || c.BIsGameOwned(e)
            ? !1 === t.video && ["video", "series", "episode"].includes(o.type)
              ? r.k_RejectVideo
              : t.has_discount && !o.discount_percent
              ? r.k_RejectNoDiscount
              : "demo" == o.type &&
                !1 === t.games_already_in_library &&
                c.BIsGameOwned(o.full_game_appid)
              ? r.k_RejectInLibrary
              : n
              ? ("demo" == o.type && a.BHasAppID(o.full_game_appid)) ||
                a.BHasAppID(e)
                ? r.k_RejectAlreadyDisplayed
                : _(o, t)
              : r.k_NotRejected
            : r.k_RejectNotInLibrary
          : r.k_RejectDLC;
      }
      function f(e, t) {
        for (var a = l.a.Get(), n = !1, o = 0, i = e; o < i.length; o++) {
          var s = i[o];
          if (a.BIsGameIgnored(s)) return r.k_RejectIgnoredGame;
          a.BIsGameOwned(s) && (n = !0);
        }
        return !1 === t.games_not_in_library && n
          ? r.k_RejectInLibrary
          : !1 !== t.games_not_in_library || n
          ? r.k_NotRejected
          : r.k_RejectNotInLibrary;
      }
      function b(e, t, a, n) {
        var o = c.b.GetPackageInfo(e);
        if (!o) return r.k_RejectNotLoaded;
        var i = g(o, t);
        if (i != r.k_NotRejected) return i;
        var s = f(o.appids, t);
        if (s != r.k_NotRejected) return s;
        var u = l.a.Get();
        return !1 === t.games_already_in_library && u.BOwnsPackage(e)
          ? r.k_RejectInLibrary
          : u.BIsPackageIgnored(e)
          ? r.k_RejectIgnoredGame
          : n
          ? a.BHasPackageID(e)
            ? r.k_RejectAlreadyDisplayed
            : _(o, t)
          : r.k_NotRejected;
      }
      function y(e, t, a, n) {
        var o = s.a.GetBundleInfo(e);
        if (!o) return r.k_RejectNotLoaded;
        var i = g(o, t);
        if (i != r.k_NotRejected) return i;
        var c = f(o.appids, t);
        return c != r.k_NotRejected
          ? c
          : n
          ? a.BHasBundleID(e)
            ? r.k_RejectAlreadyDisplayed
            : _(o, t)
          : r.k_NotRejected;
      }
      var T = (function () {
          function e() {
            (this.m_HomeView = {}),
              "dev" === u.d.WEB_UNIVERSE && (window.g_HomeViewStore = this);
            var e = Object(u.h)("home_view_setting", "application_config");
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
                  "dev" == u.d.WEB_UNIVERSE &&
                    (window.g_HomeViewSetting = e.s_globalSingletonStore)),
                e.s_globalSingletonStore
              );
            }),
            (e.prototype.ValidateHomeViewData = function (e) {
              var t = e;
              return (
                "object" == typeof t.home && "object" == typeof t.main_cluster
              );
            }),
            e
          );
        })(),
        v = (function () {
          function e() {
            var e = this;
            (this.m_mapAppLists = new Map()),
              (this.m_rgSections = new Array()),
              (this.m_mapSectionsID = new Map()),
              (this.m_definition = {}),
              (this.m_rgMainCapsule = []),
              (this.m_mapOtherCarousels = new Map()),
              "dev" === u.d.WEB_UNIVERSE && (window.g_ContentHubStore = this);
            var t = Object(u.h)("ch_section_data", "application_config");
            this.ValidateSectionData(t) &&
              ((this.m_rgSections = t),
              this.m_rgSections.forEach(function (t) {
                return e.m_mapSectionsID.set(t.id, t);
              }));
            var a = Object(u.h)("ch_list_data", "application_config");
            this.ValidateAppListData(a) &&
              a.forEach(function (t) {
                t.apps.forEach(function (e) {
                  e.appid
                    ? ((e.id = e.appid), (e.item_type = "app"))
                    : e.packageid
                    ? ((e.id = e.packageid), (e.item_type = "sub"))
                    : e.bundleid &&
                      ((e.id = e.bundleid), (e.item_type = "bundle"));
                }),
                  e.m_mapAppLists.set(t.id, t);
              }),
              (this.m_definition = Object(u.h)(
                "ch_static_data",
                "application_config"
              ));
          }
          return (
            (e.prototype.GetMainCapsuleList = function () {
              return this.m_rgMainCapsule;
            }),
            (e.prototype.InternalGetMainCapsuleLists = function () {
              var e = this;
              return [
                "featured",
                "specials",
                "featured_recommended",
                2 == u.d.EUNIVERSE ? "popular_new_releases" : "",
              ].map(function (t) {
                return e.m_mapAppLists.get(t);
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
                t = Object(n.a)(Object(n.a)({}, T.Get().GetHomeView()), {
                  enforce_minimum: !0,
                });
              this.BuildFeaturedCarouselContent(e, t),
                this.BuildAllOtherCarouselContent(e, t);
            }),
            (e.prototype.BuildAllOtherCarouselContent = function (e, t) {
              var a = this;
              (this.m_mapOtherCarousels = new Map()),
                this.m_rgSections.forEach(function (r) {
                  var n,
                    o = a.m_mapAppLists.get(r.id);
                  (null === (n = null == o ? void 0 : o.apps) || void 0 === n
                    ? void 0
                    : n.length) > 0 &&
                    a.m_mapOtherCarousels.set(r.id, d(o.apps, t, e, 40, 4));
                });
            }),
            (e.prototype.BuildFeaturedCarouselContent = function (e, t) {
              var a = new Array(),
                r = new Array();
              this.InternalGetMainCapsuleLists().forEach(function (n) {
                a.push(d((null == n ? void 0 : n.apps) || [], t, e, 12, 4)),
                  r.push(0);
              }),
                (this.m_rgMainCapsule = []);
              for (var n = 1; this.m_rgMainCapsule.length < 12 && n <= 4; ) {
                for (var o = !1, i = 0; i < a.length; ++i) {
                  var s = a[i],
                    c = r[i];
                  if (c < s.length && s[c].priority <= n) {
                    (o = !0), (r[i] += 1);
                    var l = s[c];
                    if (
                      (e.BHasStoreItemKey(l) ||
                        (this.m_rgMainCapsule.push(l), e.AddStoreItemKey(l)),
                      this.m_rgMainCapsule.length >= 12)
                    )
                      break;
                  }
                }
                o || (n += 1);
              }
            }),
            (e.Get = function () {
              return (
                e.s_globalSingletonStore ||
                  ((e.s_globalSingletonStore = new e()),
                  "dev" == u.d.WEB_UNIVERSE &&
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
                  t.length > 0 &&
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
                  t.length > 0 &&
                  "object" == typeof t[0]
                ) &&
                "string" == typeof t[0].id &&
                Array.isArray(t[0].apps)
              );
            }),
            e
          );
        })(),
        S = a("q1tI"),
        C = a.n(S),
        k = a("VQ2A"),
        F = a("IjL/"),
        w = a("0OaU"),
        j = a("TLQK"),
        I = a("exH9"),
        E = a("xVl9"),
        O = a("5L1o"),
        P = a("MnIK"),
        A = a("dfs5");
      function L(e, t) {
        var a = new Array();
        return (
          e.forEach(function (e) {
            if (!t || a.length < t)
              if (e.appid) {
                var r = i.a.GetAppLinkInfo(e.appid);
                r && a.push({ id: e.appid, type: r.type });
              } else
                e.bundleid && s.a.BHasBundleInfoLoaded(e.bundleid)
                  ? a.push({ id: e.bundleid, type: "bundle" })
                  : e.packageid &&
                    c.b.BHasPackageInfoLoaded(e.packageid) &&
                    a.push({ id: e.packageid, type: "sub" });
          }),
          a
        );
      }
      var G,
        R = a("pXEO"),
        N = function (e) {
          var t = e.section,
            a = v.Get().GetAppListForSection(t.id);
          if (!a || 0 == a.length) return null;
          var r = null;
          switch (t.type) {
            case "4wide":
              r = C.a.createElement(B, { capsuleList: a });
              break;
            case "creator4wide":
              r = C.a.createElement(V, { capsuleList: a });
              break;
            default:
              r = C.a.createElement("div", null, "Unknown: ", t.type);
          }
          return C.a.createElement(
            A.b,
            { feature: t.id },
            C.a.createElement(
              P.a,
              { placeholderHeight: 250, rootMargin: "0px 0px 100% 0px" },
              C.a.createElement(D, {
                title: t.title,
                description: t.description,
              }),
              r
            )
          );
        },
        D = function (e) {
          var t = e.title,
            a = e.description;
          return C.a.createElement(
            "div",
            { className: Object(I.a)(R.StoreSection, R.SectionTitleCtn) },
            C.a.createElement("span", { className: R.SectionTitle }, t),
            Boolean(a) &&
              C.a.createElement("span", { className: R.SectionDescription }, a)
          );
        },
        B = function (e) {
          var t = L(e.capsuleList, 40);
          return C.a.createElement(
            E.a,
            {
              visibleElements: 4,
              className: Object(I.a)(
                R.StoreSection,
                R.StoreSection,
                "SaleSectionCarouselPadding"
              ),
            },
            t.map(function (e) {
              return C.a.createElement(O.m, {
                key: e.type + "_" + e.id,
                capsule: e,
                imageType: "header",
              });
            })
          );
        },
        V = function (e) {
          var t = e.capsuleList,
            a = Object(l.b)(),
            r = a[0];
          a[1];
          if (r)
            return C.a.createElement(w.a, {
              string: Object(j.f)("#Loading"),
              size: "medium",
              position: "center",
            });
          var n = L(t, 40);
          return C.a.createElement(
            E.a,
            { visibleElements: 4 },
            n.map(function (e) {
              return C.a.createElement(O.m, {
                key: e.type + "_" + e.id,
                capsule: e,
                imageType: "header",
              });
            })
          );
        },
        M = a("vDqi"),
        H = a.n(M),
        U = a("2vnA"),
        z = a("3+zv"),
        x = a("mgoM"),
        K = a("bDQf"),
        Q = (function () {
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
              return Object(n.b)(this, void 0, void 0, function () {
                return Object(n.e)(this, function (e) {
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
                var i = 0, s = Object.keys(e.rgTagBreakdown);
                i < s.length;
                i++
              ) {
                r = s[i];
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
                var p = 0, d = Object.keys(e.rgLocalizedTagNames);
                p < d.length;
                p++
              ) {
                r = d[p];
                this.m_rgLocalizedTagNames.set(
                  Number(r),
                  Array.from(e.rgLocalizedTagNames[r])
                );
              }
              this.m_rgLanguages = Array.from(e.rgLanguages);
            }),
            (e.prototype.EnsureLoaded = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e;
                return Object(n.e)(this, function (t) {
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
              return Object(n.b)(this, void 0, void 0, function () {
                var e, t, a;
                return Object(n.e)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      (e = null), (r.label = 1);
                    case 1:
                      return (
                        r.trys.push([1, 3, , 4]),
                        [
                          4,
                          H.a.get(
                            u.d.COMMUNITY_BASE_URL +
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
                            Object(K.c)(a).strErrorMsg
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
                  i = 0,
                  s = r;
                i < s.length;
                i++
              )
                for (
                  var c = s[i], l = 0, u = e.rgTagBreakdown[c].flat();
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
                    for (var i = 0, s = e.get(o); i < s.length; i++) {
                      var c = s[i];
                      a.has(c) || t.has(c) || (a.add(c), r.get(n).push(c));
                    }
                  },
                  o = 0,
                  i = [
                    "supergenre",
                    "genre",
                    "subgenre",
                    "visuals",
                    "theme_mood",
                    "feature",
                    "players",
                  ];
                o < i.length;
                o++
              ) {
                var s = i[o];
                r.set(s, new Array()),
                  "theme_mood" === s ? (n(s, "theme"), n(s, "mood")) : n(s, s);
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
                      var a = Object(x.g)(e, -1);
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
                      i = Number(o);
                    e.has(i) || e.set(i, new Array()), e.get(i).push(a);
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
                    var i = { name: a.get(o), facetValues: new Array() },
                      s = Array(),
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
                          type: z.n.k_EStoreFilterClauseTypeAnd,
                          rgSubexpressions: [
                            {
                              type: z.n.k_EStoreFilterClauseTypeOr,
                              rgSubexpressions: t.has(u)
                                ? t.get(u).map(function (e) {
                                    return {
                                      type:
                                        z.n.k_EStoreFilterClauseTypeStoreTag,
                                      value: e,
                                    };
                                  })
                                : [
                                    {
                                      type:
                                        z.n.k_EStoreFilterClauseTypeStoreTag,
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
                      i.facetValues.push(p);
                    } else s.push(u);
                  }
                  s.length > 0 &&
                    console.warn(
                      "No name information found for tag count " +
                        s.length +
                        ", skipping.",
                      s
                    ),
                    n.push(i);
                }),
                n
              );
            }),
            e
          );
        })(),
        W = (new Q(), a("dpTt"));
      !(function (e) {
        (e[(e.k_EList = 0)] = "k_EList"), (e[(e.k_EGrid = 1)] = "k_EGrid");
      })(G || (G = {}));
      var q = (function () {
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
              (this.m_viewType = G.k_EList),
              (this.m_strSearch = ""),
              "dev" === u.d.WEB_UNIVERSE &&
                (window.g_ContentHubTabStore = this);
            var a = Object(u.h)("ch_tab_data", "application_config");
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
            var r = Object(u.h)("ch_tab_paging", "application_config");
            this.ValidatePagingData(r) &&
              r.forEach(function (e) {
                return t.m_mapTabToPagingData.set(e.prefix, e);
              });
            var n = Object(u.h)("ch_facets", "application_config"),
              i = new Q(n);
            (this.m_facets = i.AutoGenerateFacets()),
              e.AddAppTypeFacet(this.m_facets),
              e.AddPlatformFacet(this.m_facets),
              e.AddPriceFacet(this.m_facets),
              e.AddLanguageFacet(this.m_facets),
              e.AddContentDescriptorFacet(this.m_facets),
              e.AddUserPreferencesFacet(this.m_facets),
              (this.m_facetFilterState = new W.b(
                this.m_facets,
                !1,
                1,
                z.k.k_ESortFacetsByMatchCount,
                Object(o.i)(u.d.LANGUAGE)
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
              return Object(n.b)(this, void 0, void 0, function () {
                var o;
                return Object(n.e)(this, function (n) {
                  return this.BHasTabPageLoaded(e, t, a, r)
                    ? (this.UpdateResults(), [2, this.GetTabPageApps(e, t, a)])
                    : ((o = this.GetPageKey(e, t, r)),
                      this.m_mapTabToPagePromises.has(o) ||
                        this.m_mapTabToPagePromises.set(
                          o,
                          this.InternalLoadTabPage(e, t, a, r)
                        ),
                      [2, this.m_mapTabToPagePromises.get(o)]);
                });
              });
            }),
            (e.prototype.InternalLoadTabPage = function (e, t, a, r) {
              var o, l, p;
              return Object(n.b)(this, void 0, void 0, function () {
                var d, m, g, _, h, f, b, y, T;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      (d = this.GetPageKey(e, t, r)),
                        (m =
                          this.m_mapTabToPagingData.get(d) ||
                          this.ClonePagingDataForFaceting(e, t)),
                        this.m_mapTabToPage.has(d) ||
                          this.m_mapTabToPage.set(d, {
                            items: [],
                            nPagesLoaded: 0,
                          }),
                        (g = this.m_mapTabToPage.get(d)),
                        (n.label = 1);
                    case 1:
                      if (
                        !(
                          g.nPagesLoaded < this.cTotalPages &&
                          g.items.length < a
                        )
                      )
                        return [3, 6];
                      (_ = g.nPagesLoaded), (n.label = 2);
                    case 2:
                      return (
                        n.trys.push([2, 4, , 5]),
                        (h = {
                          query: "",
                          start: m.pagesize * _,
                          count: m.pagesize,
                          cc: u.d.COUNTRY,
                          l: u.d.LANGUAGE,
                          v: 1,
                          tag: v.Get().GetDefinition().strTag,
                          tagid:
                            null === (o = m.params) || void 0 === o
                              ? void 0
                              : o.tagid,
                          category:
                            null === (l = m.params) || void 0 === l
                              ? void 0
                              : l.category,
                          facetQuery: t,
                          searchQuery: r,
                          send_app_data: 1,
                        }),
                        [4, H.a.get(m.url, { params: h, withCredentials: !1 })]
                      );
                    case 3:
                      return (
                        (f = n.sent()),
                        1 ==
                          (null === (p = null == f ? void 0 : f.data) ||
                          void 0 === p
                            ? void 0
                            : p.success) &&
                          ((m.total_count = f.data.total_count),
                          (b = this.FilterStoreItemsForFaceting(
                            f.data.tab_capsules
                          )),
                          (g.items = g.items.concat(b)),
                          ++g.nPagesLoaded,
                          i.a.AddAppLinks(f.data.applinkinfo),
                          c.b.AddPackages(f.data.packages),
                          s.a.AddBundles(f.data.bundles),
                          this.m_mapTabToPagingData.set(d, m),
                          this.m_mapTabToFacetCounts.set(
                            d,
                            f.data.rgSolrFacetCounts
                          ),
                          this.UpdateResults()),
                        [3, 5]
                      );
                    case 4:
                      return (
                        (y = n.sent()),
                        (T = Object(K.c)(y)),
                        console.error(
                          "CContentHubTabStore.InternalLoadTabPage: failed with " +
                            T.strErrorMsg,
                          T,
                          this.m_facetFilterState
                        ),
                        [3, 5]
                      );
                    case 5:
                      return [3, 1];
                    case 6:
                      return [2, g];
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
              return Object(n.a)(
                { total_count: 0, params: Object(n.a)({ facet: t }, a.params) },
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
                  type: z.l.k_EAppType,
                  appType: n,
                  rgStoreTagFilter: {
                    type: z.n.k_EStoreFilterClauseTypeAppType,
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
                type: z.l.k_ESaleTagFilter,
                rgStoreTagFilter: {
                  type: z.n.k_EStoreFilterClauseTypeFeatureTag,
                  value: "windows",
                },
                filter: null,
                matchingCapsules: [],
              }),
                t.facetValues.push({
                  name: ["#Platform_Linux"],
                  type: z.l.k_ESaleTagFilter,
                  rgStoreTagFilter: {
                    type: z.n.k_EStoreFilterClauseTypeFeatureTag,
                    value: "linux",
                  },
                  filter: null,
                  matchingCapsules: [],
                }),
                t.facetValues.push({
                  name: ["#Platform_Mac"],
                  type: z.l.k_ESaleTagFilter,
                  rgStoreTagFilter: {
                    type: z.n.k_EStoreFilterClauseTypeFeatureTag,
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
                type: z.l.k_EPrice,
                rgStoreTagFilter: { type: z.n.k_EStoreFilterClauseTypePrice },
                filter: null,
                matchingCapsules: [],
              }),
                t.facetValues.push({
                  name: ["#Sale_BrowserSortOption_PopularPurchasedDiscounted"],
                  type: z.l.k_ESaleTagFilter,
                  rgStoreTagFilter: {
                    type: z.n.k_EStoreFilterClauseTypeFeatureTag,
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
                  name: ["#language_selection_" + Object(o.e)(a)],
                  type: z.l.k_ELanguage,
                  language: a,
                  rgStoreTagFilter: {
                    type: z.n.k_EStoreFilterClauseTypeLanguage,
                    value: Object(o.e)(a),
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
                type: z.l.k_EContentDescriptor,
                contentDescriptor: 5,
                rgStoreTagFilter: {
                  type: z.n.k_EStoreFilterClauseTypeContentDescriptor,
                  value: 5,
                },
                filter: null,
                matchingCapsules: [],
              }),
                t.facetValues.push({
                  name: ["#ContentDescriptor_FrequentViolenceOrGore"],
                  type: z.l.k_EContentDescriptor,
                  contentDescriptor: 2,
                  rgStoreTagFilter: {
                    type: z.n.k_EStoreFilterClauseTypeContentDescriptor,
                    value: 2,
                  },
                  filter: null,
                  matchingCapsules: [],
                }),
                t.facetValues.push({
                  name: ["#ContentDescriptor_NudityOrSexualContent"],
                  type: z.l.k_EContentDescriptor,
                  contentDescriptor: 1,
                  rgStoreTagFilter: {
                    type: z.n.k_EStoreFilterClauseTypeContentDescriptor,
                    value: 1,
                  },
                  filter: null,
                  matchingCapsules: [],
                }),
                t.facetValues.push({
                  name: ["#ContentDescriptor_AdultOnlySexualContent"],
                  type: z.l.k_EContentDescriptor,
                  contentDescriptor: 3,
                  rgStoreTagFilter: {
                    type: z.n.k_EStoreFilterClauseTypeContentDescriptor,
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
                type: z.l.k_EUserPreference,
                userPreference: z.m.k_EHideOwnedItems,
                filter: null,
                matchingCapsules: [],
                rgStoreTagFilter: null,
              }),
                t.facetValues.push({
                  name: ["#UserPreference_HideWishlistedItems"],
                  type: z.l.k_EUserPreference,
                  userPreference: z.m.k_EHideWishlistedItems,
                  filter: null,
                  matchingCapsules: [],
                  rgStoreTagFilter: null,
                }),
                t.facetValues.push({
                  name: ["#UserPreference_HideIgnoredItems"],
                  type: z.l.k_EUserPreference,
                  userPreference: z.m.k_EHideIgnoredItems,
                  bEnabledByDefault: !0,
                  filter: null,
                  matchingCapsules: [],
                  rgStoreTagFilter: null,
                }),
                e.push(t);
            }),
            (e.prototype.BAppPassesFilters = function (e) {
              if (!i.a.GetAppLinkInfo(e)) return !1;
              var t = l.a.Get();
              return (
                (!this.m_facetFilterState.BIsUserPreferenceEnabled(
                  z.m.k_EHideOwnedItems
                ) ||
                  !t.BIsGameOwned(e)) &&
                (!this.m_facetFilterState.BIsUserPreferenceEnabled(
                  z.m.k_EHideWishlistedItems
                ) ||
                  !t.BIsGameWishlisted(e)) &&
                (!this.m_facetFilterState.BIsUserPreferenceEnabled(
                  z.m.k_EHideIgnoredItems
                ) ||
                  !t.BIsGameIgnored(e))
              );
            }),
            (e.prototype.BAppSetPassesFilters = function (e) {
              var t = l.a.Get();
              return (
                (!this.m_facetFilterState.BIsUserPreferenceEnabled(
                  z.m.k_EHideOwnedItems
                ) ||
                  !e.some(function (e) {
                    return t.BIsGameOwned(e);
                  })) &&
                (!this.m_facetFilterState.BIsUserPreferenceEnabled(
                  z.m.k_EHideWishlistedItems
                ) ||
                  !e.some(function (e) {
                    return t.BIsGameWishlisted(e);
                  })) &&
                (!this.m_facetFilterState.BIsUserPreferenceEnabled(
                  z.m.k_EHideIgnoredItems
                ) ||
                  !e.some(function (e) {
                    return t.BIsGameIgnored(e);
                  }))
              );
            }),
            (e.prototype.BSubPassesFilters = function (e) {
              var t = c.b.GetPackageInfo(e);
              if (!t) return !1;
              if (!this.BAppSetPassesFilters(t.appids)) return !1;
              var a = l.a.Get();
              return (
                (!this.m_facetFilterState.BIsUserPreferenceEnabled(
                  z.m.k_EHideOwnedItems
                ) ||
                  !a.BOwnsPackage(e)) &&
                (!this.m_facetFilterState.BIsUserPreferenceEnabled(
                  z.m.k_EHideIgnoredItems
                ) ||
                  !a.BIsPackageIgnored(e))
              );
            }),
            (e.prototype.BBundlePassesFilters = function (e) {
              var t = s.a.GetBundleInfo(e);
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
                        var n = c.b.GetPackageInfo(r);
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
            Object(n.c)([U.C], e.prototype, "m_SelectedTab", void 0),
            Object(n.c)([U.C], e.prototype, "m_nItemsToShow", void 0),
            Object(n.c)([U.C], e.prototype, "m_curPagingData", void 0),
            Object(n.c)([U.C], e.prototype, "m_curCapsules", void 0),
            Object(n.c)([U.C], e.prototype, "m_curFacetCounts", void 0),
            Object(n.c)([U.C], e.prototype, "m_viewType", void 0),
            Object(n.c)([U.C], e.prototype, "m_strSearch", void 0),
            Object(n.c)([U.k], e.prototype, "SetSelectedTab", null),
            Object(n.c)([U.n], e.prototype, "cTotalRows", null),
            Object(n.c)([U.n], e.prototype, "nRowsPerPage", null),
            Object(n.c)([U.n], e.prototype, "cTotalPages", null),
            Object(n.c)([U.k], e.prototype, "ResetItemsToShow", null),
            Object(n.c)([U.n], e.prototype, "bHasMoreItemsToShow", null),
            Object(n.c)([U.k], e.prototype, "AddMoreItemsToShow", null),
            Object(n.c)([U.k], e.prototype, "UpdateResults", null),
            e
          );
        })(),
        J = a("TyAF"),
        X = a("Ty5D"),
        Z = a("Mgs7"),
        Y = a("GiuM"),
        $ = a("7G5R"),
        ee = a("U9Ih"),
        te = a("NKJh"),
        ae = a.n(te),
        re = a("6Y59"),
        ne = a("5E+2"),
        oe = a("qiKp"),
        ie = a("lhLD"),
        se = Object(X.i)(
          Object(J.a)(function (e) {
            var t = q.Get(),
              a = t.GetVisibleTabs(),
              r = Object(Y.a)(e.history, "tab"),
              n = Boolean(r)
                ? a.find(function (e) {
                    return e.name === r;
                  })
                : a[0],
              o = Object(Y.a)(e.history, "facets"),
              i = t.GetNumItemsToShow(),
              s = Object(Y.a)(e.history, "search");
            return (
              Object(S.useEffect)(
                function () {
                  t.SetSelectedTab(n),
                    null != o
                      ? t.GetFacetFilter().SetFromURLParam(o)
                      : t.GetFacetFilter().Reset(),
                    t.SetSearch(s),
                    t.HintLoadTabPage(n, t.GetFacetFilter().GetQuery(), i, s);
                },
                [t, n, o, i, s]
              ),
              a && 0 != a.length
                ? C.a.createElement(
                    "div",
                    { className: Object(I.a)(ie.TabCtn) },
                    C.a.createElement(pe, null),
                    C.a.createElement(
                      "div",
                      { className: ie.FacetAndPageCtn },
                      C.a.createElement(ue, null),
                      C.a.createElement(
                        "div",
                        { className: ie.PagedItemsCtn },
                        C.a.createElement(ce, null)
                      )
                    )
                  )
                : null
            );
          })
        ),
        ce = Object(J.a)(function (e) {
          var t = q.Get().GetSelectedTab();
          return C.a.createElement(
            A.b,
            { feature: "tab-" + t.name },
            C.a.createElement(le, null)
          );
        }),
        le = Object(J.a)(function (e) {
          var t = q.Get(),
            a = t.GetSelectedTab(),
            r = t.GetFacetFilter().strQuery,
            n = t.GetNumItemsToShow(),
            o = t.GetSearch(),
            s = t.BHasTabPageLoaded(a, r, n, o),
            c = Object(S.useState)(!s),
            l = c[0],
            m = c[1];
          Object(S.useEffect)(
            function () {
              var e = H.a.CancelToken.source();
              return (
                l == s && m(!s),
                s ||
                  t.HintLoadTabPage(a, r, n, o).then(function () {
                    l && !e.token.reason && m(!1);
                  }),
                function () {
                  return e.cancel("unmounting TabDisplayPage");
                }
              );
            },
            [a, s, l, r, t, n, o]
          );
          var g = t.GetTabPageApps(a, r, n).items.slice(0, n),
            _ = d(g, T.Get().GetHomeView(), new p(), g.length, g.length),
            h = g.length - _.length,
            f = t.GetViewType() === G.k_EList ? ie.ContentsList : ie.GridView,
            b = t.GetViewType() === G.k_EList && ae.a.SaleItemBrowserRow;
          return C.a.createElement(
            C.a.Fragment,
            null,
            C.a.createElement(
              "div",
              { className: ie.ContentHubStorePrefsLink },
              Boolean(h > 0) &&
                C.a.createElement(
                  "div",
                  { className: ie.ContentHubStorePrefsLinkInner },
                  C.a.createElement(
                    "a",
                    {
                      href: u.d.STORE_BASE_URL + "account/preferences/",
                      "data-tooltip-text": Object(j.f)(
                        "#ContentHub_TabFiltered_ttip"
                      ),
                    },
                    C.a.createElement(
                      ne.a,
                      {
                        toolTipContent: Object(j.f)(
                          "#ContentHub_TabFiltered_ttip"
                        ),
                      },
                      Object(j.l)("#ContentHub_TabFitlered", h)
                    )
                  )
                )
            ),
            C.a.createElement(
              "div",
              { className: f },
              _.map(function (e) {
                var a,
                  r = void 0;
                return (
                  (r =
                    "bundle" == e.item_type || "sub" == e.item_type
                      ? e.item_type
                      : (null === (a = i.a.GetAppLinkInfo(e.id)) || void 0 === a
                          ? void 0
                          : a.type) || "game"),
                  C.a.createElement(
                    "div",
                    { key: "" + e.item_type + e.id, className: b },
                    t.GetViewType() === G.k_EList
                      ? C.a.createElement(O.o, {
                          id: e.id,
                          type: r,
                          bShowDemoButton: !1,
                          bLoadShortDescription: !1,
                        })
                      : C.a.createElement(O.m, {
                          capsule: { id: e.id, type: r },
                          imageType: "header",
                        })
                  )
                );
              })
            ),
            !s &&
              C.a.createElement(
                "div",
                { className: ie.ShowMoreCtn },
                C.a.createElement(w.a, {
                  string: Object(j.f)("#Loading"),
                  size: "medium",
                  position: "center",
                })
              ),
            s &&
              t.bHasMoreItemsToShow &&
              C.a.createElement(
                "div",
                { className: ie.ShowMoreCtn },
                C.a.createElement(
                  "button",
                  {
                    className: ie.ShowMore,
                    onClick: function () {
                      return t.AddMoreItemsToShow();
                    },
                  },
                  Object(j.f)("#Sale_ShowMore")
                )
              )
          );
        }),
        ue = Object(X.i)(
          Object(J.a)(function (e) {
            var t = q.Get(),
              a = t.GetFacetFilter();
            return C.a.createElement(
              "div",
              { className: ie.FacetMenuCtn },
              C.a.createElement(W.c, {
                facetFilterState: a,
                language: Object(o.i)(u.d.LANGUAGE),
                nMaxFacetValues: 5,
                fnOnUpdateFilter: function () {
                  return (
                    Object(Y.c)(e.history, { facets: a.GetURLParam() }),
                    void t.ResetItemsToShow()
                  );
                },
                styleOverrides: {
                  menu: ie.FacetMenuOverride,
                  menuTitle: ie.FacetMenuTitleOverride,
                  matchCount: ie.FacetMenuMatchCountOverride,
                  reset: ie.FacetMenuResetOverride,
                  facetName: ie.FacetNameOverride,
                  facetValue: ie.FacetValueOverride,
                  facetValueEnabled: ie.FacetValueEnabledOverride,
                  facetValueDeactivated: ie.FacetValueDeactivatedOverride,
                  facetValueName: ie.FacetValueNameOverride,
                  facetValueDesc: ie.FacetValueDescOverride,
                  showMore: ie.FacetShowMoreOverride,
                },
              })
            );
          })
        ),
        pe = Object(X.i)(
          Object(J.a)(function (e) {
            var t = q.Get(),
              a = t.GetVisibleTabs(),
              r = t.GetSelectedTab(),
              n = Object(S.useState)(Object(Y.a)(e.history, "search")),
              o = n[0],
              i = n[1],
              s = Object(S.useState)(new oe.b())[0],
              c = function (a) {
                Object(Y.b)(e.history, "search", a.length > 0 ? a : void 0),
                  t.ResetItemsToShow();
              },
              l = [
                {
                  label: Object(j.f)("#FacetedBrowsing_ViewAsList"),
                  data: G.k_EList,
                },
                {
                  label: Object(j.f)("#FacetedBrowsing_ViewAsGrid"),
                  data: G.k_EGrid,
                },
              ];
            return C.a.createElement(
              $.a,
              { className: ie.TabHeaderCtn },
              C.a.createElement(
                "div",
                { className: ie.TabHeaderInner },
                a.map(function (a) {
                  var n;
                  return C.a.createElement(
                    "div",
                    {
                      key: a.displaylistname,
                      className: Object(I.a)(
                        ((n = {}),
                        (n[ie.TabHeader] = !0),
                        (n[ie.TabHeaderSelected] =
                          (null == a ? void 0 : a.name) ==
                          (null == r ? void 0 : r.name)),
                        n)
                      ),
                      onClick: function () {
                        return (function (a) {
                          s.Cancel(),
                            Object(Y.c)(e.history, {
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
              C.a.createElement(
                "div",
                { className: ie.HeaderOptionsCtn },
                C.a.createElement(
                  "div",
                  { className: ee.SuggestContainer },
                  C.a.createElement(Z.l, {
                    type: "text",
                    value: o,
                    onChange: function (e) {
                      var t = e.target.value;
                      i(t);
                      var a = t && t.trim().toLocaleLowerCase();
                      s.Schedule(200, function () {
                        return c(a);
                      });
                    },
                  }),
                  C.a.createElement(re.J, null)
                ),
                C.a.createElement(Z.i, {
                  rgOptions: l,
                  selectedOption: t.GetViewType(),
                  onChange: function (e) {
                    return t.SetViewType(e.data);
                  },
                })
              )
            );
          })
        ),
        de = a("4ZFL"),
        me =
          (Object(J.a)(function (e) {
            var t = e.capsule,
              a = t.appid,
              r = "game";
            return (
              t.bundleid
                ? ((r = "bundle"), (a = t.bundleid))
                : t.packageid
                ? ((r = "sub"), (a = t.packageid))
                : (r = i.a.GetAppLinkInfo(a).type),
              C.a.createElement(
                "div",
                null,
                C.a.createElement(O.l, { id: a, type: r })
              )
            );
          }),
          function (e) {
            var t = v.Get().GetMainCapsuleList();
            return C.a.createElement(
              E.a,
              { visibleElements: 1, className: R.MainCarousel },
              t.map(function (e) {
                return C.a.createElement(de.a, {
                  key: e.item_type + " " + e.id,
                  id: e.id,
                  type: e.item_type,
                  strReason:
                    e.status_string || "Test Reason: Because its selling well",
                });
              })
            );
          });
      t.default = function (e) {
        var t = C.a.useState(!0),
          a = t[0],
          r = t[1];
        if (
          (C.a.useEffect(function () {
            l.a
              .Get()
              .HintLoad()
              .then(function () {
                v.Get().ApplyUserAndHomeViewFilters(), r(!1);
              });
          }, []),
          a)
        )
          return C.a.createElement(w.a, {
            string: Object(j.f)("#Loading"),
            size: "medium",
            position: "center",
          });
        var n = v
          .Get()
          .GetSections()
          .map(function (e) {
            return C.a.createElement(N, { section: e, key: e.id });
          });
        return C.a.createElement(
          "div",
          null,
          C.a.createElement(F.a, null, C.a.createElement(me, null)),
          C.a.createElement(F.a, null, n),
          C.a.createElement(F.a, null, C.a.createElement(se, null)),
          C.a.createElement(
            "a",
            {
              href: Object(k.a)(
                u.d.STORE_BASE_URL + "labs/contenthub?optout=1"
              ),
            },
            Object(j.f)("#ContentHub_OptOut")
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
    pXEO: function (e, t, a) {
      e.exports = {
        MainCarousel: "contenthubshared_MainCarousel_KAdot",
        arrowSlide: "contenthubshared_arrowSlide_1c--i",
        FeatureCtn: "contenthubshared_FeatureCtn_3zFZ-",
        StoreSection: "contenthubshared_StoreSection_112Fx",
        SectionTitle: "contenthubshared_SectionTitle_tL3rp",
        SectionDescription: "contenthubshared_SectionDescription_1Mq8O",
        SectionTitleCtn: "contenthubshared_SectionTitleCtn_3XTET",
      };
    },
  },
]);
