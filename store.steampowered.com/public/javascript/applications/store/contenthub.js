/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
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
      var n,
        r = a("mrSG"),
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
      })(n || (n = {}));
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
      function g(e, t, a, o, i) {
        var s,
          l = new Array(),
          u = new Array(),
          p = new Array(),
          g = new Array();
        if (!e || 0 == e.length) return l;
        for (
          var d = [n.k_RejectSupportedLanguage, n.k_RejectAlreadyDisplayed],
            _ = 0,
            h = e;
          _ < h.length;
          _++
        ) {
          var T = h[_],
            v = T.id,
            j = n.k_NotRejected;
          switch (T.item_type) {
            case "sub":
              var k = c.b.GetPackageInfo(v);
              if (
                1 !==
                (null === (s = null == k ? void 0 : k.appids) || void 0 === s
                  ? void 0
                  : s.length)
              ) {
                j = b(v, t, a, !0);
                break;
              }
              v = k.appids[0];
            case "app":
              j = f(v, t, a, !0);
              break;
            case "bundle":
              j = y(v, t, a, !0);
          }
          if (
            (j == n.k_NotRejected
              ? ((T.rejected = n.k_NotRejected),
                l.push(Object(r.a)(Object(r.a)({}, T), { priority: 1 })))
              : d.includes(j)
              ? ((T.rejected = n.k_NotRejected), u.push(T))
              : ((T.rejected = j),
                j == n.k_RejectIgnoredGame ? p.push(T) : g.push(T)),
            l.length > o)
          )
            break;
        }
        return (
          l.length < o &&
            (m(l, u, i, 2),
            l.length < i &&
              t.enforce_minimum &&
              (m(l, p, i, 3), m(l, g, i, 4))),
          l
        );
      }
      function m(e, t, a, n) {
        for (var o = 0; e.length < a && o < t.length; ++o)
          e.push(Object(r.a)(Object(r.a)({}, t[o]), { priority: n }));
      }
      function d(e, t) {
        if (e.no_main_cap) return n.k_RejectNoMainCap;
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
          return n.k_RejectWrongPlatform;
        return !1 === t.prepurchase && e.coming_soon
          ? n.k_RejectNoComingSoon
          : !1 === t.virtual_reality && e.support_vrhmd_only
          ? n.k_RejectNoVR
          : e.creator_clan_ids.some(function (e) {
              return a.BIsIgnoringCurator(e);
            })
          ? n.k_RejectCreatorClan
          : n.k_NotRejected;
      }
      function _(e, t) {
        var a;
        if (t.localized) {
          var r = Object(o.f)(u.d.LANGUAGE);
          if (
            !(null === (a = e.localized_langs) || void 0 === a
              ? void 0
              : a.includes(r))
          )
            return n.k_RejectSupportedLanguage;
        }
        return n.k_NotRejected;
      }
      function f(e, t, a, r) {
        var o = i.a.GetAppLinkInfo(e);
        if (!o) return n.k_RejectNotLoaded;
        var s = d(o, t);
        if (s != n.k_NotRejected) return s;
        var c = l.a.Get();
        return c.BIsGameIgnored(e)
          ? n.k_RejectIgnoredGame
          : c.BExcludesTag(o.tags)
          ? n.k_RejectIgnoreGameTags
          : c.BExcludesContentDescriptor(o.content_descriptors)
          ? n.k_RejectIgnoreContentDescriptors
          : !1 === t.early_access && o.early_access
          ? n.k_RejectEarlyAccess
          : !1 === t.software && "software" == o.type
          ? n.k_RejectSoftware
          : "dlc" != o.type ||
            (!1 !== t.dlc &&
              !1 !== t.dlc_for_you &&
              c.BIsGameOwned(o.full_game_appid))
          ? !1 === t.games_already_in_library && c.BIsGameOwned(e)
            ? n.k_RejectInLibrary
            : !1 !== t.games_not_in_library || c.BIsGameOwned(e)
            ? !1 === t.video && ["video", "series", "episode"].includes(o.type)
              ? n.k_RejectVideo
              : t.has_discount && !o.discount_percent
              ? n.k_RejectNoDiscount
              : "demo" == o.type &&
                !1 === t.games_already_in_library &&
                c.BIsGameOwned(o.full_game_appid)
              ? n.k_RejectInLibrary
              : r
              ? ("demo" == o.type && a.BHasAppID(o.full_game_appid)) ||
                a.BHasAppID(e)
                ? n.k_RejectAlreadyDisplayed
                : _(o, t)
              : n.k_NotRejected
            : n.k_RejectNotInLibrary
          : n.k_RejectDLC;
      }
      function h(e, t) {
        for (var a = l.a.Get(), r = !1, o = 0, i = e; o < i.length; o++) {
          var s = i[o];
          if (a.BIsGameIgnored(s)) return n.k_RejectIgnoredGame;
          a.BIsGameOwned(s) && (r = !0);
        }
        return !1 === t.games_not_in_library && r
          ? n.k_RejectInLibrary
          : !1 !== t.games_not_in_library || r
          ? n.k_NotRejected
          : n.k_RejectNotInLibrary;
      }
      function b(e, t, a, r) {
        var o = c.b.GetPackageInfo(e);
        if (!o) return n.k_RejectNotLoaded;
        var i = d(o, t);
        if (i != n.k_NotRejected) return i;
        var s = h(o.appids, t);
        if (s != n.k_NotRejected) return s;
        var u = l.a.Get();
        return !1 === t.games_already_in_library && u.BOwnsPackage(e)
          ? n.k_RejectInLibrary
          : u.BIsPackageIgnored(e)
          ? n.k_RejectIgnoredGame
          : r
          ? a.BHasPackageID(e)
            ? n.k_RejectAlreadyDisplayed
            : _(o, t)
          : n.k_NotRejected;
      }
      function y(e, t, a, r) {
        var o = s.a.GetBundleInfo(e);
        if (!o) return n.k_RejectNotLoaded;
        var i = d(o, t);
        if (i != n.k_NotRejected) return i;
        var c = h(o.appids, t);
        return c != n.k_NotRejected
          ? c
          : r
          ? a.BHasBundleID(e)
            ? n.k_RejectAlreadyDisplayed
            : _(o, t)
          : n.k_NotRejected;
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
                t = Object(r.a)(Object(r.a)({}, T.Get().GetHomeView()), {
                  enforce_minimum: !0,
                });
              this.BuildFeaturedCarouselContent(e, t),
                this.BuildAllOtherCarouselContent(e, t);
            }),
            (e.prototype.BuildAllOtherCarouselContent = function (e, t) {
              var a = this;
              (this.m_mapOtherCarousels = new Map()),
                this.m_rgSections.forEach(function (n) {
                  var r,
                    o = a.m_mapAppLists.get(n.id);
                  (null === (r = null == o ? void 0 : o.apps) || void 0 === r
                    ? void 0
                    : r.length) > 0 &&
                    a.m_mapOtherCarousels.set(n.id, g(o.apps, t, e, 40, 4));
                });
            }),
            (e.prototype.BuildFeaturedCarouselContent = function (e, t) {
              var a = new Array(),
                n = new Array();
              this.InternalGetMainCapsuleLists().forEach(function (r) {
                a.push(g((null == r ? void 0 : r.apps) || [], t, e, 12, 4)),
                  n.push(0);
              }),
                (this.m_rgMainCapsule = []);
              for (var r = 1; this.m_rgMainCapsule.length < 12 && r <= 4; ) {
                for (var o = !1, i = 0; i < a.length; ++i) {
                  var s = a[i],
                    c = n[i];
                  if (c < s.length && s[c].priority <= r) {
                    (o = !0), (n[i] += 1);
                    var l = s[c];
                    if (
                      (e.BHasStoreItemKey(l) ||
                        (this.m_rgMainCapsule.push(l), e.AddStoreItemKey(l)),
                      this.m_rgMainCapsule.length >= 12)
                    )
                      break;
                  }
                }
                o || (r += 1);
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
        j = a("q1tI"),
        k = a.n(j),
        C = a("VQ2A"),
        S = a("IjL/"),
        A = a("0OaU"),
        E = a("TLQK"),
        R = a("xVl9"),
        I = a("5L1o"),
        w = a("MnIK"),
        G = a("dfs5");
      function P(e, t) {
        var a = new Array();
        return (
          e.forEach(function (e) {
            if (!t || a.length < t)
              if (e.appid) {
                var n = i.a.GetAppLinkInfo(e.appid);
                n && a.push({ id: e.appid, type: n.type });
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
      var N = function (e) {
          var t = e.section,
            a = v.Get().GetAppListForSection(t.id);
          if (!a || 0 == a.length) return null;
          var n = null;
          switch (t.type) {
            case "4wide":
              n = k.a.createElement(O, { capsuleList: a });
              break;
            case "creator4wide":
              n = k.a.createElement(D, { capsuleList: a });
              break;
            default:
              n = k.a.createElement("div", null, "Unknown: ", t.type);
          }
          return k.a.createElement(
            G.b,
            { feature: t.id },
            k.a.createElement(
              w.a,
              { placeholderHeight: 250, rootMargin: "0px 0px 100% 0px" },
              k.a.createElement(L, {
                title: t.title,
                description: t.description,
              }),
              n
            )
          );
        },
        L = function (e) {
          var t = e.title,
            a = e.description;
          return k.a.createElement(
            "div",
            null,
            k.a.createElement("span", null, t),
            Boolean(a) && k.a.createElement("span", null, a)
          );
        },
        O = function (e) {
          var t = P(e.capsuleList, 40);
          return k.a.createElement(
            R.a,
            { visibleElements: 4 },
            t.map(function (e) {
              return k.a.createElement(I.l, {
                key: e.type + "_" + e.id,
                capsule: e,
                imageType: "header",
              });
            })
          );
        },
        D = function (e) {
          var t = e.capsuleList,
            a = Object(l.b)(),
            n = a[0];
          a[1];
          if (n)
            return k.a.createElement(A.a, {
              string: Object(E.f)("#Loading"),
              size: "medium",
              position: "center",
            });
          var r = P(t, 40);
          return k.a.createElement(
            R.a,
            { visibleElements: 4 },
            r.map(function (e) {
              return k.a.createElement(I.l, {
                key: e.type + "_" + e.id,
                capsule: e,
                imageType: "header",
              });
            })
          );
        },
        F = a("vDqi"),
        B = a.n(F),
        M = a("2vnA"),
        H = a("bDQf"),
        V = a("3+zv"),
        z = a("dpTt"),
        U = a("mgoM"),
        x = (function () {
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
                n = this.FindNonAtomicTags(),
                r = this.ComputeFacetCategoryToTagMap(a, n),
                o = this.ComputeAtomicTagToTagsMap();
              return this.ComputeFacets(r, o, e, t);
            }),
            (e.prototype.AutoGenerateFacetsAsync = function () {
              return Object(r.b)(this, void 0, void 0, function () {
                return Object(r.e)(this, function (e) {
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
                var n = a[t];
                this.m_rgCategoriesForTagID.set(
                  Number(n),
                  Array.from(e.rgCategoriesByTag[n])
                );
              }
              for (
                var r = 0, o = Object.keys(e.rgTagNames);
                r < o.length;
                r++
              ) {
                n = o[r];
                this.m_rgTagNameForTagID.set(Number(n), e.rgTagNames[n]);
              }
              for (
                var i = 0, s = Object.keys(e.rgTagBreakdown);
                i < s.length;
                i++
              ) {
                n = s[i];
                this.m_rgAtomicTagIDsForTagID.set(
                  Number(n),
                  Array.from(e.rgTagBreakdown[n]).map(function (e) {
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
                var p = 0, g = Object.keys(e.rgLocalizedTagNames);
                p < g.length;
                p++
              ) {
                n = g[p];
                this.m_rgLocalizedTagNames.set(
                  Number(n),
                  Array.from(e.rgLocalizedTagNames[n])
                );
              }
              this.m_rgLanguages = Array.from(e.rgLanguages);
            }),
            (e.prototype.EnsureLoaded = function () {
              return Object(r.b)(this, void 0, void 0, function () {
                var e;
                return Object(r.e)(this, function (t) {
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
              return Object(r.b)(this, void 0, void 0, function () {
                var e, t, a;
                return Object(r.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      (e = null), (n.label = 1);
                    case 1:
                      return (
                        n.trys.push([1, 3, , 4]),
                        [
                          4,
                          B.a.get(
                            u.d.COMMUNITY_BASE_URL +
                              "sale/ajaxgetcategoriesbytag"
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (t = n.sent()),
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
                        (a = n.sent()),
                        console.error(
                          "Unable to load tag category data: " +
                            Object(H.a)(a).strErrorMsg
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
                  n = Object.keys(e.rgTagBreakdown),
                  r = Object.keys(e.rgTagNames),
                  o = Object.keys(e.rgCategoriesByTag),
                  i = 0,
                  s = n;
                i < s.length;
                i++
              )
                for (
                  var c = s[i], l = 0, u = e.rgTagBreakdown[c].flat();
                  l < u.length;
                  l++
                ) {
                  var p = u[l];
                  r.includes(p.toString()) || t.add(p),
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
                    for (var n = 0, r = t; n < r.length; n++) {
                      var o = r[n];
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
                  n = new Map(),
                  r = function (r, o) {
                    for (var i = 0, s = e.get(o); i < s.length; i++) {
                      var c = s[i];
                      a.has(c) || t.has(c) || (a.add(c), n.get(r).push(c));
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
                n.set(s, new Array()),
                  "theme_mood" === s ? (r(s, "theme"), r(s, "mood")) : r(s, s);
              }
              return n;
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
                this.m_rgLocalizedCategoryNames.forEach(function (a, n) {
                  var r = new Array(30);
                  (r[0] = e.get(n)), t.set(n, r);
                }),
                t
              );
            }),
            (e.prototype.ComputeLocalizedTagNames = function () {
              var e = this,
                t = new Map();
              return (
                this.m_rgLocalizedTagNames.forEach(function (a, n) {
                  var r = a,
                    o = new Array(30);
                  o.fill(""),
                    e.m_rgLanguages.forEach(function (e, t) {
                      var a = Object(U.g)(e, -1);
                      -1 === a
                        ? console.warn("Unrecognized language: " + e)
                        : 0 <= a && a < 30 && (o[a] = r[t]);
                    }),
                    t.set(n, o);
                }),
                t
              );
            }),
            (e.prototype.ComputeAtomicTagToTagsMap = function () {
              var e = new Map();
              return (
                this.m_rgAtomicTagIDsForTagID.forEach(function (t, a) {
                  for (var n = 0, r = t; n < r.length; n++) {
                    var o = r[n],
                      i = Number(o);
                    e.has(i) || e.set(i, new Array()), e.get(i).push(a);
                  }
                }),
                e
              );
            }),
            (e.prototype.ComputeFacets = function (e, t, a, n) {
              var r = new Array();
              return (
                e.forEach(function (e, o) {
                  for (
                    var i = { name: a.get(o), facetValues: new Array() },
                      s = 0,
                      c = e;
                    s < c.length;
                    s++
                  ) {
                    var l = c[s];
                    if (n.get(l)) {
                      var u = {
                        name: n.get(l),
                        subtitle: new Array(),
                        rgStoreTagFilter: {
                          type: V.n.k_EStoreFilterClauseTypeAnd,
                          rgSubexpressions: [
                            {
                              type: V.n.k_EStoreFilterClauseTypeOr,
                              rgSubexpressions: t.has(l)
                                ? t.get(l).map(function (e) {
                                    return {
                                      type:
                                        V.n.k_EStoreFilterClauseTypeStoreTag,
                                      value: e,
                                    };
                                  })
                                : [
                                    {
                                      type:
                                        V.n.k_EStoreFilterClauseTypeStoreTag,
                                      value: l,
                                    },
                                  ],
                            },
                          ],
                        },
                        nAtomicStoreTagID: l,
                        filter: null,
                        matchingCapsules: [],
                      };
                      i.facetValues.push(u);
                    } else
                      console.warn(
                        "No name information found for tag ID " +
                          l +
                          ", skipping."
                      );
                  }
                  r.push(i);
                }),
                r
              );
            }),
            e
          );
        })(),
        K =
          (new x(),
          (function () {
            function e() {
              var e = this;
              (this.m_rgTabs = new Array()),
                (this.m_mapTabToPagingData = new Map()),
                (this.m_facets = []),
                (this.m_facetFilterState = null),
                (this.m_mapTabToPageList = new Map()),
                (this.m_mapTabToPageListPromises = new Map()),
                (this.m_mapTabToFacetCounts = new Map()),
                (this.m_nCurrentPage = 0),
                "dev" === u.d.WEB_UNIVERSE &&
                  (window.g_ContentHubTabStore = this);
              var t = Object(u.h)("ch_tab_data", "application_config");
              this.ValidateTabData(t) &&
                ((this.m_rgTabs = t.filter(function (e) {
                  return e.tab_capsules.length > 0;
                })),
                this.m_rgTabs.length > 0 &&
                  (this.m_SelectedTab = this.m_rgTabs[0]),
                this.m_rgTabs.forEach(function (t) {
                  var a = new Array();
                  a.push(t.tab_capsules),
                    e.m_mapTabToPageList.set(t.name, a),
                    e.m_mapTabToPageListPromises.set(t.name, new Array()),
                    e.m_mapTabToFacetCounts.set(t.name, t.rgSolrFacetCounts);
                }));
              var a = Object(u.h)("ch_tab_paging", "application_config");
              this.ValidatePagingData(a) &&
                a.forEach(function (t) {
                  return e.m_mapTabToPagingData.set(t.prefix, t);
                });
              var n = Object(u.h)("ch_facets", "application_config"),
                r = new x(n);
              (this.m_facets = r.AutoGenerateFacets()),
                (this.m_facetFilterState = new z.b(
                  this.m_facets,
                  !1,
                  1,
                  V.k.k_ESortFacetsByMatchCount,
                  Object(o.f)(u.d.LANGUAGE)
                )),
                (this.m_prevTabFacetKey = this.GetPageKey(
                  this.m_SelectedTab,
                  this.m_facetFilterState.GetQuery()
                )),
                this.UpdateResults();
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
              (e.prototype.GetSelectedPage = function () {
                return this.m_nCurrentPage;
              }),
              (e.prototype.SetSelectedPage = function (e) {
                this.m_nCurrentPage !== e && (this.m_nCurrentPage = e);
              }),
              Object.defineProperty(e.prototype, "nRowsPerPage", {
                get: function () {
                  var e;
                  return null === (e = this.m_curPagingData) || void 0 === e
                    ? void 0
                    : e.pagesize;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "nTotalMatchingResults", {
                get: function () {
                  var e;
                  return null === (e = this.m_curPagingData) || void 0 === e
                    ? void 0
                    : e.total_count;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "nPages", {
                get: function () {
                  return Boolean(this.m_curPagingData)
                    ? Math.ceil(this.nTotalMatchingResults / this.nRowsPerPage)
                    : 0;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.GetFacetFilter = function () {
                return this.m_facetFilterState;
              }),
              (e.prototype.UpdateResults = function () {
                var e = this.GetPageKey(
                  this.m_SelectedTab,
                  this.m_facetFilterState.GetQuery()
                );
                (this.m_curPagingData = this.m_mapTabToPagingData.get(e)),
                  (this.m_curFacetCounts = this.m_mapTabToFacetCounts.get(e)),
                  (this.m_curCapsules =
                    this.m_mapTabToPageList.get(e) &&
                    this.m_mapTabToPageList.get(e)[this.m_nCurrentPage]),
                  e !== this.m_prevTabFacetKey &&
                    (this.m_facetFilterState.SetFacetCounts(
                      this.m_mapTabToFacetCounts.get(e)
                    ),
                    (this.m_prevTabFacetKey = e));
              }),
              (e.prototype.BHasTabPageLoaded = function (e, t, a) {
                var n = this.m_mapTabToPageList.get(this.GetPageKey(e, t));
                return Boolean(n && a < n.length && n[a]);
              }),
              (e.prototype.GetTabPageApps = function (e, t, a) {
                return this.m_curCapsules;
              }),
              (e.prototype.HintLoadTabPage = function (e, t, a) {
                return Object(r.b)(this, void 0, void 0, function () {
                  var n, o;
                  return Object(r.e)(this, function (r) {
                    return this.BHasTabPageLoaded(e, t, a)
                      ? (this.UpdateResults(),
                        [2, this.GetTabPageApps(e, t, a)])
                      : ((n = this.GetPageKey(e, t)),
                        this.m_mapTabToPageListPromises.has(n) ||
                          this.m_mapTabToPageListPromises.set(n, []),
                        (o = this.m_mapTabToPageListPromises.get(n)),
                        (a >= o.length || !o[a]) &&
                          (o[a] = this.InternalLoadTabPage(e, t, a)),
                        [2, o[a]]);
                  });
                });
              }),
              (e.prototype.InternalLoadTabPage = function (e, t, a) {
                var n, o, l;
                return Object(r.b)(this, void 0, void 0, function () {
                  var p, g, m, d, _, f, h;
                  return Object(r.e)(this, function (r) {
                    switch (r.label) {
                      case 0:
                        (p = this.GetPageKey(e, t)),
                          (g =
                            this.m_mapTabToPagingData.get(p) ||
                            this.ClonePagingDataForFaceting(e, t)),
                          (r.label = 1);
                      case 1:
                        return (
                          r.trys.push([1, 3, , 4]),
                          (m = {
                            query: "",
                            start: g.pagesize * a,
                            count: g.pagesize,
                            cc: u.d.COUNTRY,
                            l: u.d.LANGUAGE,
                            v: 1,
                            tag: v.Get().GetDefinition().strTag,
                            tagid:
                              null === (n = g.params) || void 0 === n
                                ? void 0
                                : n.tagid,
                            category:
                              null === (o = g.params) || void 0 === o
                                ? void 0
                                : o.category,
                            facet: t,
                            send_app_data: 1,
                          }),
                          [
                            4,
                            B.a.get(g.url, { params: m, withCredentials: !1 }),
                          ]
                        );
                      case 2:
                        return (
                          (d = r.sent()),
                          1 ==
                          (null === (l = null == d ? void 0 : d.data) ||
                          void 0 === l
                            ? void 0
                            : l.success)
                            ? ((g.total_count = d.data.total_count),
                              ((_ = this.m_mapTabToPageList.get(p) || [])[a] =
                                d.data.tab_capsules),
                              i.a.AddAppLinks(d.data.applinkinfo),
                              c.b.AddPackages(d.data.packages),
                              s.a.AddBundles(d.data.bundles),
                              this.m_mapTabToPagingData.set(p, g),
                              this.m_mapTabToPageList.set(p, _),
                              this.m_mapTabToFacetCounts.set(
                                p,
                                d.data.rgSolrFacetCounts
                              ),
                              this.UpdateResults(),
                              [2, _[a]])
                            : [3, 4]
                        );
                      case 3:
                        return (
                          (f = r.sent()),
                          (h = Object(H.a)(f)),
                          console.error(
                            "CContentHubTabStore.InternalLoadTabPage: failed with " +
                              h.strErrorMsg,
                            h,
                            this.m_facetFilterState
                          ),
                          [3, 4]
                        );
                      case 4:
                        return [2, []];
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
              (e.prototype.GetPageKey = function (e, t) {
                return e.name + encodeURIComponent(t);
              }),
              (e.prototype.ClonePagingDataForFaceting = function (e, t) {
                var a = this.m_mapTabToPagingData.get(e.name);
                return Object(r.a)(
                  {
                    total_count: 0,
                    params: Object(r.a)({ facet: t }, a.params),
                  },
                  a
                );
              }),
              Object(r.c)([M.C], e.prototype, "m_SelectedTab", void 0),
              Object(r.c)([M.C], e.prototype, "m_nCurrentPage", void 0),
              Object(r.c)([M.C], e.prototype, "m_curPagingData", void 0),
              Object(r.c)([M.C], e.prototype, "m_curCapsules", void 0),
              Object(r.c)([M.C], e.prototype, "m_curFacetCounts", void 0),
              Object(r.c)([M.k], e.prototype, "SetSelectedTab", null),
              Object(r.c)([M.k], e.prototype, "SetSelectedPage", null),
              Object(r.c)([M.n], e.prototype, "nRowsPerPage", null),
              Object(r.c)([M.n], e.prototype, "nTotalMatchingResults", null),
              Object(r.c)([M.n], e.prototype, "nPages", null),
              Object(r.c)([M.k], e.prototype, "UpdateResults", null),
              e
            );
          })()),
        Q = a("TyAF"),
        W = a("Mgs7"),
        J = a("7G5R"),
        q = a("NKJh"),
        X = a.n(q),
        Y = a("exH9"),
        Z = a("lhLD"),
        $ = a("5E+2"),
        ee = a("Ty5D"),
        te = a("GiuM"),
        ae = Object(ee.i)(
          Object(Q.a)(function (e) {
            var t = K.Get(),
              a = t.GetVisibleTabs(),
              n = Object(te.a)(e.history, "tab"),
              r = Boolean(n)
                ? a.find(function (e) {
                    return e.name === n;
                  })
                : a[0],
              o = Object(te.a)(e.history, "facets"),
              i = Number(Object(te.a)(e.history, "page")) || 0;
            return (
              Object(j.useEffect)(
                function () {
                  t.SetSelectedTab(r),
                    null != o
                      ? t.GetFacetFilter().SetFromURLParam(o)
                      : t.GetFacetFilter().Reset(),
                    t.SetSelectedPage(i),
                    t.HintLoadTabPage(r, o, i);
                },
                [t, r, o, i]
              ),
              a && 0 != a.length
                ? k.a.createElement(
                    "div",
                    { className: Object(Y.a)(Z.TabCtn) },
                    k.a.createElement(se, null),
                    k.a.createElement(oe, null),
                    k.a.createElement(ie, null),
                    k.a.createElement(ne, null),
                    k.a.createElement(oe, null)
                  )
                : null
            );
          })
        ),
        ne = Object(Q.a)(function (e) {
          var t = K.Get().GetSelectedTab();
          return k.a.createElement(
            G.b,
            { feature: "tab-" + t.name },
            k.a.createElement(re, null)
          );
        }),
        re = Object(Q.a)(function (e) {
          var t = K.Get().GetSelectedTab(),
            a = K.Get().GetFacetFilter().strQuery,
            n = K.Get().GetSelectedPage(),
            r = K.Get().BHasTabPageLoaded(t, a, n),
            o = Object(j.useState)(!r),
            s = o[0],
            c = o[1];
          if (
            (Object(j.useEffect)(
              function () {
                var e = B.a.CancelToken.source();
                return (
                  s == r && c(!r),
                  r ||
                    K.Get()
                      .HintLoadTabPage(t, a, n)
                      .then(function () {
                        s && !e.token.reason && c(!1);
                      }),
                  function () {
                    return e.cancel("unmounting TabDisplayPage");
                  }
                );
              },
              [t, n, r, s, a]
            ),
            !r)
          )
            return k.a.createElement(A.a, {
              string: Object(E.f)("#Loading"),
              size: "medium",
              position: "center",
            });
          var l = K.Get().GetTabPageApps(t, a, n),
            m = g(l, T.Get().GetHomeView(), new p(), l.length, l.length),
            d = l.length - m.length;
          return k.a.createElement(
            k.a.Fragment,
            null,
            Boolean(d > 0) &&
              k.a.createElement(
                "a",
                {
                  href: u.d.STORE_BASE_URL + "account/preferences/",
                  "data-tooltip-text": Object(E.f)(
                    "#ContentHub_TabFiltered_ttip"
                  ),
                },
                k.a.createElement(
                  $.a,
                  {
                    toolTipContent: Object(E.f)("#ContentHub_TabFiltered_ttip"),
                  },
                  Object(E.l)("#ContentHub_TabFitlered", d)
                )
              ),
            m.map(function (e) {
              var t,
                a = void 0;
              return (
                (a =
                  "bundle" == e.item_type || "sub" == e.item_type
                    ? e.item_type
                    : (null === (t = i.a.GetAppLinkInfo(e.id)) || void 0 === t
                        ? void 0
                        : t.type) || "game"),
                k.a.createElement(
                  "div",
                  {
                    key: "" + e.item_type + e.id,
                    className: X.a.SaleItemBrowserRow,
                  },
                  k.a.createElement(I.n, {
                    id: e.id,
                    type: a,
                    bShowDemoButton: !1,
                    bLoadShortDescription: !1,
                  })
                )
              );
            })
          );
        }),
        oe = Object(ee.i)(
          Object(Q.a)(function (e) {
            var t,
              a = K.Get(),
              n =
                (a.GetSelectedTab(),
                a.GetFacetFilter().strQuery,
                a.GetSelectedPage()),
              r = a.nRowsPerPage,
              o = a.nTotalMatchingResults,
              i = r * n + 1,
              s = Math.min(r * (n + 1), o),
              c = a.nPages;
            if (c > 1) {
              var l = new Set();
              l.add(1), l.add(c);
              for (var u = 0; l.size < 7 && u < 7; ++u)
                n + 1 - u > 0 && l.add(n + 1 - u),
                  l.size < 7 && n + 1 + u < c && l.add(n + 1 + u);
              t = Array.from(l).sort(function (e, t) {
                return e - t;
              });
            }
            var p = function (t) {
              Object(te.c)(e.history, { page: t.toString() });
            };
            return k.a.createElement(
              "div",
              { className: Object(Y.a)(Z.PagingCtn) },
              k.a.createElement(
                "div",
                null,
                Object(E.f)("#ContentHub_Paging", i, s, o)
              ),
              Boolean(c > 1) &&
                k.a.createElement(
                  "div",
                  { className: Object(Y.a)(Z.PagingNumCtn) },
                  Boolean(n > 0) &&
                    k.a.createElement(
                      W.d,
                      {
                        onClick: function () {
                          return p(n - 1);
                        },
                      },
                      "<"
                    ),
                  t.map(function (e, t) {
                    var a;
                    return k.a.createElement(
                      "div",
                      { className: Z.PageNumCtn, key: "" + e },
                      Boolean(1 === t && 2 !== e) &&
                        k.a.createElement("span", null, "..."),
                      k.a.createElement(
                        "div",
                        {
                          onClick: function () {
                            return p(e - 1);
                          },
                          className: Object(Y.a)(
                            ((a = {}),
                            (a[Z.PageNumber] = !0),
                            (a[Z.PageSelectedNumber] = e === n + 1),
                            a)
                          ),
                        },
                        e
                      ),
                      Boolean(5 === t && e !== c - 1) &&
                        k.a.createElement("span", null, "...")
                    );
                  }),
                  Boolean(n + 1 < c) &&
                    k.a.createElement(
                      W.d,
                      {
                        onClick: function () {
                          return p(n + 1);
                        },
                      },
                      ">"
                    )
                )
            );
          })
        ),
        ie = Object(ee.i)(
          Object(Q.a)(function (e) {
            var t = K.Get().GetFacetFilter();
            return k.a.createElement(z.c, {
              facetFilterState: t,
              language: Object(o.f)(u.d.LANGUAGE),
              nMaxFacetValues: 5,
              fnOnUpdateFilter: function () {
                Object(te.c)(e.history, {
                  facets: t.GetURLParam(),
                  page: void 0,
                });
              },
            });
          })
        ),
        se = Object(ee.i)(
          Object(Q.a)(function (e) {
            var t = K.Get().GetVisibleTabs(),
              a = K.Get().GetSelectedTab();
            return k.a.createElement(
              J.a,
              { className: Z.TabHeaderCtn },
              t.map(function (t) {
                var n;
                return k.a.createElement(
                  "div",
                  {
                    key: t.displaylistname,
                    className: Object(Y.a)(
                      ((n = {}),
                      (n[Z.TabHeader] = !0),
                      (n[Z.TabHeaderSelected] =
                        (null == t ? void 0 : t.name) ==
                        (null == a ? void 0 : a.name)),
                      n)
                    ),
                    onClick: function () {
                      return (function (t) {
                        Object(te.c)(e.history, {
                          tab: t.name,
                          facets: void 0,
                          page: void 0,
                        });
                      })(t);
                    },
                  },
                  t.title
                );
              })
            );
          })
        ),
        ce = a("IzPI"),
        le = a("RNU2"),
        ue =
          (Object(Q.a)(function (e) {
            var t = e.capsule,
              a = t.appid,
              n = "game";
            return (
              t.bundleid
                ? ((n = "bundle"), (a = t.bundleid))
                : t.packageid
                ? ((n = "sub"), (a = t.packageid))
                : (n = i.a.GetAppLinkInfo(a).type),
              k.a.createElement(
                "div",
                null,
                k.a.createElement(I.k, { id: a, type: n })
              )
            );
          }),
          function (e) {
            var t = v.Get().GetMainCapsuleList();
            return k.a.createElement(
              R.a,
              { visibleElements: 1 },
              t.map(function (e) {
                return k.a.createElement(pe, {
                  key: e.item_type + " " + e.id,
                  item: e,
                  strReason:
                    e.status_string || "Test Reason: Because its selling well",
                });
              })
            );
          }),
        pe = function (e) {
          var t = e.item,
            a = e.strReason,
            n = i.a.GetAppLinkInfo(t.id);
          if (!n) return null;
          var r =
              n.screenshot_list.length > 0
                ? n.screenshot_list[0]
                : n.header_image_url,
            o = Object(ce.f)(n.capsule_link);
          return k.a.createElement(
            I.e,
            { appInfo: n },
            k.a.createElement(
              "div",
              {
                className: Object(Y.a)(le.BGImage),
                style: { backgroundImage: 'url("' + r + '")' },
              },
              k.a.createElement(
                "div",
                { className: Object(Y.a)(le.FeatureCtn) },
                k.a.createElement(
                  "a",
                  { href: o, className: Object(Y.a)(le.Artwork) },
                  Object(I.b)(n) &&
                    k.a.createElement(
                      "div",
                      { className: le.CapsuleDecorators },
                      k.a.createElement(I.h, null)
                    ),
                  k.a.createElement(I.f, { info: n, appInfo: n }),
                  k.a.createElement(I.c, { info: n })
                ),
                k.a.createElement(
                  "div",
                  { className: Object(Y.a)(le.Info) },
                  k.a.createElement(
                    "a",
                    { className: le.Title, href: o },
                    n.title
                  ),
                  k.a.createElement("div", null, a),
                  k.a.createElement(I.m, { appInfo: n, instanceNum: t.id })
                )
              )
            )
          );
        };
      t.default = function (e) {
        var t = k.a.useState(!0),
          a = t[0],
          n = t[1];
        if (
          (k.a.useEffect(function () {
            l.a
              .Get()
              .HintLoad()
              .then(function () {
                v.Get().ApplyUserAndHomeViewFilters(), n(!1);
              });
          }, []),
          a)
        )
          return k.a.createElement(A.a, {
            string: Object(E.f)("#Loading"),
            size: "medium",
            position: "center",
          });
        var r = v
          .Get()
          .GetSections()
          .map(function (e) {
            return k.a.createElement(N, { section: e, key: e.id });
          });
        return k.a.createElement(
          "div",
          null,
          k.a.createElement(S.a, null, k.a.createElement(ue, null)),
          k.a.createElement(S.a, null, r),
          k.a.createElement(S.a, null, k.a.createElement(ae, null)),
          k.a.createElement(
            "a",
            {
              href: Object(C.a)(
                u.d.STORE_BASE_URL + "labs/contenthub?optout=1"
              ),
            },
            Object(E.f)("#ContentHub_OptOut")
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
