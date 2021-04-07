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
      var h,
        r,
        b = a("mrSG"),
        i = a("kyHq"),
        y = a("5eAM"),
        T = a("R+8l"),
        v = a("oVVc"),
        j = a("ee7K"),
        _ = a("lkRc");
      ((r = h = h || {})[(r.k_NotRejected = -1)] = "k_NotRejected"),
        (r[(r.k_RejectNoMainCap = 0)] = "k_RejectNoMainCap"),
        (r[(r.k_RejectWrongPlatform = 1)] = "k_RejectWrongPlatform"),
        (r[(r.k_RejectNoComingSoon = 2)] = "k_RejectNoComingSoon"),
        (r[(r.k_RejectNoVR = 3)] = "k_RejectNoVR"),
        (r[(r.k_RejectCreatorClan = 4)] = "k_RejectCreatorClan"),
        (r[(r.k_RejectIgnoredGame = 5)] = "k_RejectIgnoredGame"),
        (r[(r.k_RejectSupportedLanguage = 6)] = "k_RejectSupportedLanguage"),
        (r[(r.k_RejectNotLoaded = 7)] = "k_RejectNotLoaded"),
        (r[(r.k_RejectIgnoreGameTags = 8)] = "k_RejectIgnoreGameTags"),
        (r[(r.k_RejectIgnoreContentDescriptors = 9)] =
          "k_RejectIgnoreContentDescriptors"),
        (r[(r.k_RejectEarlyAccess = 10)] = "k_RejectEarlyAccess"),
        (r[(r.k_RejectSoftware = 11)] = "k_RejectSoftware"),
        (r[(r.k_RejectDLC = 12)] = "k_RejectDLC"),
        (r[(r.k_RejectInLibrary = 13)] = "k_RejectInLibrary"),
        (r[(r.k_RejectNotInLibrary = 14)] = "k_RejectNotInLibrary"),
        (r[(r.k_RejectVideo = 15)] = "k_RejectVideo"),
        (r[(r.k_RejectNoDiscount = 16)] = "k_RejectNoDiscount"),
        (r[(r.k_RejectAlreadyDisplayed = 17)] = "k_RejectAlreadyDisplayed");
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
      function g(e, t, a, r, n) {
        var o,
          i = new Array(),
          s = new Array(),
          c = new Array(),
          l = new Array();
        if (!e || 0 == e.length) return i;
        for (
          var u = [h.k_RejectSupportedLanguage, h.k_RejectAlreadyDisplayed],
            p = 0,
            g = e;
          p < g.length;
          p++
        ) {
          var d = g[p],
            m = d.id,
            _ = h.k_NotRejected;
          switch (d.item_type) {
            case "sub":
              var f = v.b.GetPackageInfo(m);
              if (
                1 !==
                (null === (o = null == f ? void 0 : f.appids) || void 0 === o
                  ? void 0
                  : o.length)
              ) {
                _ = (function (e, t, a, r) {
                  var n = v.b.GetPackageInfo(e);
                  if (!n) return h.k_RejectNotLoaded;
                  var o = k(n, t);
                  if (o != h.k_NotRejected) return o;
                  var i = A(n.appids, t);
                  if (i != h.k_NotRejected) return i;
                  var s = j.a.Get();
                  if (!t.games_already_in_library && s.BOwnsPackage(e))
                    return h.k_RejectInLibrary;
                  if (s.BIsPackageIgnored(e)) return h.k_RejectIgnoredGame;
                  return r
                    ? a.BHasPackageID(e)
                      ? h.k_RejectAlreadyDisplayed
                      : C(n, t)
                    : h.k_NotRejected;
                })(m, t, a, !0);
                break;
              }
              m = f.appids[0];
            case "app":
              _ = (function (e, t, a, r) {
                var n = y.a.GetAppLinkInfo(e);
                if (!n) return h.k_RejectNotLoaded;
                var o = k(n, t);
                if (o != h.k_NotRejected) return o;
                var i = j.a.Get();
                if (i.BIsGameIgnored(e)) return h.k_RejectIgnoredGame;
                if (i.BExcludesTag(n.tags)) return h.k_RejectIgnoreGameTags;
                if (i.BExcludesContentDescriptor(n.content_descriptors))
                  return h.k_RejectIgnoreContentDescriptors;
                if (!t.early_access && n.early_access)
                  return h.k_RejectEarlyAccess;
                if (!t.software && "software" == n.type)
                  return h.k_RejectSoftware;
                if (
                  !(
                    "dlc" != n.type ||
                    (t.dlc &&
                      t.dlc_for_you &&
                      i.BIsGameOwned(n.full_game_appid))
                  )
                )
                  return h.k_RejectDLC;
                if (!t.games_already_in_library && i.BIsGameOwned(e))
                  return h.k_RejectInLibrary;
                if (!t.games_not_in_library && !i.BIsGameOwned(e))
                  return h.k_RejectNotInLibrary;
                if (!t.video && ["video", "series", "episode"].includes(n.type))
                  return h.k_RejectVideo;
                if (t.has_discount && !n.discount_percent)
                  return h.k_RejectNoDiscount;
                if (
                  "demo" == n.type &&
                  !t.games_already_in_library &&
                  i.BIsGameOwned(n.full_game_appid)
                )
                  return h.k_RejectInLibrary;
                return r
                  ? ("demo" == n.type && a.BHasAppID(n.full_game_appid)) ||
                    a.BHasAppID(e)
                    ? h.k_RejectAlreadyDisplayed
                    : C(n, t)
                  : h.k_NotRejected;
              })(m, t, a, !0);
              break;
            case "bundle":
              _ = (function (e, t, a, r) {
                var n = T.a.GetBundleInfo(e);
                if (!n) return h.k_RejectNotLoaded;
                var o = k(n, t);
                if (o != h.k_NotRejected) return o;
                var i = A(n.appids, t);
                if (i != h.k_NotRejected) return i;
                return r
                  ? a.BHasBundleID(e)
                    ? h.k_RejectAlreadyDisplayed
                    : C(n, t)
                  : h.k_NotRejected;
              })(m, t, a, !0);
          }
          if (
            (_ == h.k_NotRejected
              ? ((d.rejected = h.k_NotRejected),
                i.push(Object(b.a)(Object(b.a)({}, d), { priority: 1 })))
              : u.includes(_)
              ? ((d.rejected = h.k_NotRejected), s.push(d))
              : (d.rejected = _) == h.k_RejectIgnoredGame
              ? c.push(d)
              : l.push(d),
            i.length > r)
          )
            break;
        }
        return (
          i.length < r &&
            (S(i, s, n, 2),
            i.length < n &&
              t.enforce_minimum &&
              (S(i, c, n, 3), S(i, l, n, 4))),
          i
        );
      }
      function S(e, t, a, r) {
        for (var n = 0; e.length < a && n < t.length; ++n)
          e.push(Object(b.a)(Object(b.a)({}, t[n]), { priority: r }));
      }
      function k(e, t) {
        if (e.no_main_cap) return h.k_RejectNoMainCap;
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
          return h.k_RejectWrongPlatform;
        return !t.prepurchase && e.coming_soon
          ? h.k_RejectNoComingSoon
          : !t.virtual_reality && e.support_vrhmd_only
          ? h.k_RejectNoVR
          : e.creator_clan_ids.some(function (e) {
              return a.BIsIgnoringCurator(e);
            })
          ? h.k_RejectCreatorClan
          : h.k_NotRejected;
      }
      function C(e, t) {
        var a;
        if (t.localized) {
          var r = Object(i.f)(_.d.LANGUAGE);
          if (
            null === (a = e.localized_langs) ||
            void 0 === a ||
            !a.includes(r)
          )
            return h.k_RejectSupportedLanguage;
        }
        return h.k_NotRejected;
      }
      function A(e, t) {
        for (var a = j.a.Get(), r = !1, n = 0, o = e; n < o.length; n++) {
          var i = o[n];
          if (a.BIsGameIgnored(i)) return h.k_RejectIgnoredGame;
          a.BIsGameOwned(i) && (r = !0);
        }
        return !t.games_not_in_library && r
          ? h.k_RejectInLibrary
          : t.games_not_in_library || r
          ? h.k_NotRejected
          : h.k_RejectNotInLibrary;
      }
      var d = (function () {
          function e() {
            (this.m_HomeView = {}),
              "dev" === _.d.WEB_UNIVERSE && (window.g_HomeViewStore = this);
            var e = Object(_.h)("home_view_setting", "application_config");
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
                  "dev" == _.d.WEB_UNIVERSE &&
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
        f = (function () {
          function e() {
            var t = this;
            (this.m_mapAppLists = new Map()),
              (this.m_rgSections = new Array()),
              (this.m_mapSectionsID = new Map()),
              (this.m_definition = {}),
              (this.m_rgMainCapsule = []),
              (this.m_mapOtherCarousels = new Map()),
              "dev" === _.d.WEB_UNIVERSE && (window.g_ContentHubStore = this);
            var e = Object(_.h)("ch_section_data", "application_config");
            this.ValidateSectionData(e) &&
              ((this.m_rgSections = e),
              this.m_rgSections.forEach(function (e) {
                return t.m_mapSectionsID.set(e.id, e);
              }));
            var a = Object(_.h)("ch_list_data", "application_config");
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
              (this.m_definition = Object(_.h)(
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
                2 == _.d.EUNIVERSE ? "popular_new_releases" : "",
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
                t = Object(b.a)(Object(b.a)({}, d.Get().GetHomeView()), {
                  enforce_minimum: !0,
                });
              this.BuildFeaturedCarouselContent(e, t),
                this.BuildAllOtherCarouselContent(e, t);
            }),
            (e.prototype.BuildAllOtherCarouselContent = function (r, n) {
              var o = this;
              (this.m_mapOtherCarousels = new Map()),
                this.m_rgSections.forEach(function (e) {
                  var t,
                    a = o.m_mapAppLists.get(e.id);
                  0 <
                    (null === (t = null == a ? void 0 : a.apps) || void 0 === t
                      ? void 0
                      : t.length) &&
                    o.m_mapOtherCarousels.set(e.id, g(a.apps, n, r, 40, 4));
                });
            }),
            (e.prototype.BuildFeaturedCarouselContent = function (t, a) {
              var r = new Array(),
                n = new Array();
              this.InternalGetMainCapsuleLists().forEach(function (e) {
                r.push(g((null == e ? void 0 : e.apps) || [], a, t, 12, 4)),
                  n.push(0);
              }),
                (this.m_rgMainCapsule = []);
              for (var e = 1; this.m_rgMainCapsule.length < 12 && e <= 4; ) {
                for (var o = !1, i = 0; i < r.length; ++i) {
                  var s = r[i],
                    c = n[i];
                  if (c < s.length && s[c].priority <= e) {
                    (o = !0), (n[i] += 1);
                    var l = s[c];
                    if (
                      (t.BHasStoreItemKey(l) ||
                        (this.m_rgMainCapsule.push(l), t.AddStoreItemKey(l)),
                      12 <= this.m_rgMainCapsule.length)
                    )
                      break;
                  }
                }
                o || (e += 1);
              }
            }),
            (e.Get = function () {
              return (
                e.s_globalSingletonStore ||
                  ((e.s_globalSingletonStore = new e()),
                  "dev" == _.d.WEB_UNIVERSE &&
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
        m = a("q1tI"),
        I = a.n(m),
        o = a("VQ2A"),
        s = a("IjL/"),
        G = a("0OaU"),
        E = a("TLQK"),
        c = a("xVl9"),
        w = a("5L1o"),
        n = a("MnIK"),
        l = a("dfs5");
      function u(e, a) {
        var r = new Array();
        return (
          e.forEach(function (e) {
            var t;
            (!a || r.length < a) &&
              (e.appid
                ? (t = y.a.GetAppLinkInfo(e.appid)) &&
                  r.push({ id: e.appid, type: t.type })
                : e.bundleid && T.a.BHasBundleInfoLoaded(e.bundleid)
                ? r.push({ id: e.bundleid, type: "bundle" })
                : e.packageid &&
                  v.b.BHasPackageInfoLoaded(e.packageid) &&
                  r.push({ id: e.packageid, type: "sub" }));
          }),
          r
        );
      }
      function L(e) {
        var t = e.section,
          a = f.Get().GetAppListForSection(t.id);
        if (!a || 0 == a.length) return null;
        var r = null;
        switch (t.type) {
          case "4wide":
            r = I.a.createElement(P, { capsuleList: a });
            break;
          case "creator4wide":
            r = I.a.createElement(F, { capsuleList: a });
            break;
          default:
            r = I.a.createElement("div", null, "Unknown: ", t.type);
        }
        return I.a.createElement(
          l.b,
          { feature: t.id },
          I.a.createElement(
            n.a,
            { placeholderHeight: 250, rootMargin: "0px 0px 100% 0px" },
            I.a.createElement(R, {
              title: t.title,
              description: t.description,
            }),
            r
          )
        );
      }
      function N(e) {
        var t = f.Get().GetMainCapsuleList();
        return I.a.createElement(
          c.a,
          { visibleElements: 1 },
          t.map(function (e) {
            return I.a.createElement(oe, {
              key: e.item_type + " " + e.id,
              item: e,
              strReason:
                e.status_string || "Test Reason: Because its selling well",
            });
          })
        );
      }
      var R = function (e) {
          var t = e.title,
            a = e.description;
          return I.a.createElement(
            "div",
            null,
            I.a.createElement("span", null, t),
            Boolean(a) && I.a.createElement("span", null, a)
          );
        },
        P = function (e) {
          var t = u(e.capsuleList, 40);
          return I.a.createElement(
            c.a,
            { visibleElements: 4 },
            t.map(function (e) {
              return I.a.createElement(w.l, {
                key: e.type + "_" + e.id,
                capsule: e,
                imageType: "header",
              });
            })
          );
        },
        F = function (e) {
          var t = e.capsuleList,
            a = Object(j.b)(),
            r = a[0];
          a[1];
          if (r)
            return I.a.createElement(G.a, {
              string: Object(E.f)("#Loading"),
              size: "medium",
              position: "center",
            });
          var n = u(t, 40);
          return I.a.createElement(
            c.a,
            { visibleElements: 4 },
            n.map(function (e) {
              return I.a.createElement(w.l, {
                key: e.type + "_" + e.id,
                capsule: e,
                imageType: "header",
              });
            })
          );
        },
        O = a("vDqi"),
        D = a.n(O),
        B = a("2vnA"),
        M = a("bDQf"),
        H = a("3+zv"),
        V = a("dpTt"),
        z = a("mgoM"),
        U = (function () {
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
                var p = 0, g = Object.keys(e.rgLocalizedTagNames);
                p < g.length;
                p++
              ) {
                r = g[p];
                this.m_rgLocalizedTagNames.set(
                  Number(r),
                  Array.from(e.rgLocalizedTagNames[r])
                );
              }
              this.m_rgLanguages = Array.from(e.rgLanguages);
            }),
            (e.prototype.EnsureLoaded = function () {
              return Object(b.b)(this, void 0, void 0, function () {
                var t;
                return Object(b.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgCategoriesForTagID
                        ? [2]
                        : [4, this.Load()];
                    case 1:
                      return (t = e.sent()), this.ParseResponse(t), [2];
                  }
                });
              });
            }),
            (e.prototype.Load = function () {
              return Object(b.b)(this, void 0, void 0, function () {
                var t, a, r;
                return Object(b.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      (t = null), (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          D.a.get(
                            _.d.COMMUNITY_BASE_URL +
                              "sale/ajaxgetcategoriesbytag"
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (a = e.sent()),
                        1 !== (null == (t = a.data) ? void 0 : t.success)
                          ? (console.error(
                              "Unable to load tag category data: " +
                                (null == t ? void 0 : t.success)
                            ),
                            [2, null])
                          : [3, 4]
                      );
                    case 3:
                      return (
                        (r = e.sent()),
                        console.error(
                          "Unable to load tag category data: " +
                            Object(M.a)(r).strErrorMsg
                        ),
                        [2, null]
                      );
                    case 4:
                      return [2, t];
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
                0 < t.size && console.log(t),
                console.log(a.size + " un-categorized tags."),
                0 < a.size && console.log(a);
            }),
            (e.prototype.ComputeCategoryToTagMap = function () {
              var o = new Map();
              return (
                this.m_rgCategoriesForTagID.forEach(function (e, t) {
                  if (e)
                    for (var a = 0, r = e; a < r.length; a++) {
                      var n = r[a];
                      o.has(n) || o.set(n, new Array()), o.get(n).push(t);
                    }
                }),
                o
              );
            }),
            (e.prototype.FindNonAtomicTags = function () {
              var a = new Set();
              return (
                this.m_rgAtomicTagIDsForTagID.forEach(function (e, t) {
                  1 !== e.length && a.add(t);
                }),
                a
              );
            }),
            (e.prototype.ComputeFacetCategoryToTagMap = function (o, i) {
              for (
                var s = new Set(),
                  c = new Map(),
                  e = function (e, t) {
                    for (var a = 0, r = o.get(t); a < r.length; a++) {
                      var n = r[a];
                      s.has(n) || i.has(n) || (s.add(n), c.get(e).push(n));
                    }
                  },
                  t = 0,
                  a = [
                    "supergenre",
                    "genre",
                    "subgenre",
                    "visuals",
                    "theme_mood",
                    "feature",
                    "players",
                  ];
                t < a.length;
                t++
              ) {
                var r = a[t];
                c.set(r, new Array()),
                  "theme_mood" === r ? (e(r, "theme"), e(r, "mood")) : e(r, r);
              }
              return c;
            }),
            (e.prototype.ComputeLocalizedCategoryNames = function () {
              var r = new Map();
              r.set("supergenre", "#App_Taxonomy_Survey_QSuperGenreTitle"),
                r.set("genre", "#App_Taxonomy_Survey_QGenreTitle"),
                r.set("subgenre", "#App_Taxonomy_Survey_QSubGenreTitle"),
                r.set("visuals", "#App_Taxonomy_Survey_QVisualsTitle"),
                r.set("theme_mood", "#App_Taxonomy_Survey_QThemeMoodTitle"),
                r.set("feature", "#App_Taxonomy_Survey_QFeaturesTitle"),
                r.set("players", "#App_Taxonomy_Survey_QPlayersTitle");
              var n = new Map();
              return (
                this.m_rgLocalizedCategoryNames.forEach(function (e, t) {
                  var a = new Array(30);
                  (a[0] = r.get(t)), n.set(t, a);
                }),
                n
              );
            }),
            (e.prototype.ComputeLocalizedTagNames = function () {
              var a = this,
                o = new Map();
              return (
                this.m_rgLocalizedTagNames.forEach(function (e, t) {
                  var r = e,
                    n = new Array(30);
                  n.fill(""),
                    a.m_rgLanguages.forEach(function (e, t) {
                      var a = Object(z.g)(e, -1);
                      -1 === a
                        ? console.warn("Unrecognized language: " + e)
                        : 0 <= a && a < 30 && (n[a] = r[t]);
                    }),
                    o.set(t, n);
                }),
                o
              );
            }),
            (e.prototype.ComputeAtomicTagToTagsMap = function () {
              var i = new Map();
              return (
                this.m_rgAtomicTagIDsForTagID.forEach(function (e, t) {
                  for (var a = 0, r = e; a < r.length; a++) {
                    var n = r[a],
                      o = Number(n);
                    i.has(o) || i.set(o, new Array()), i.get(o).push(t);
                  }
                }),
                i
              );
            }),
            (e.prototype.ComputeFacets = function (e, s, c, l) {
              var u = new Array();
              return (
                e.forEach(function (e, t) {
                  for (
                    var a = { name: c.get(t), facetValues: new Array() },
                      r = 0,
                      n = e;
                    r < n.length;
                    r++
                  ) {
                    var o,
                      i = n[r];
                    l.get(i)
                      ? ((o = {
                          name: l.get(i),
                          subtitle: new Array(),
                          rgStoreTagFilter: {
                            type: H.l.k_EStoreFilterClauseTypeAnd,
                            rgSubexpressions: [
                              {
                                type: H.l.k_EStoreFilterClauseTypeOr,
                                rgSubexpressions: s.has(i)
                                  ? s.get(i).map(function (e) {
                                      return {
                                        type:
                                          H.l.k_EStoreFilterClauseTypeStoreTag,
                                        value: e,
                                      };
                                    })
                                  : [
                                      {
                                        type:
                                          H.l.k_EStoreFilterClauseTypeStoreTag,
                                        value: i,
                                      },
                                    ],
                              },
                            ],
                          },
                          nAtomicStoreTagID: i,
                          filter: null,
                          matchingCapsules: [],
                        }),
                        a.facetValues.push(o))
                      : console.warn(
                          "No name information found for tag ID " +
                            i +
                            ", skipping."
                        );
                  }
                  u.push(a);
                }),
                u
              );
            }),
            e
          );
        })(),
        x =
          (new U(),
          (function () {
            function e() {
              var a = this;
              (this.m_rgTabs = new Array()),
                (this.m_mapTabToPagingData = new Map()),
                (this.m_facets = []),
                (this.m_facetFilterState = null),
                (this.m_mapTabToPageList = new Map()),
                (this.m_mapTabToPageListPromises = new Map()),
                (this.m_mapTabToFacetCounts = new Map()),
                (this.m_nCurrentPage = 0),
                "dev" === _.d.WEB_UNIVERSE &&
                  (window.g_ContentHubTabStore = this);
              var e = Object(_.h)("ch_tab_data", "application_config");
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
              var t = Object(_.h)("ch_tab_paging", "application_config");
              this.ValidatePagingData(t) &&
                t.forEach(function (e) {
                  return a.m_mapTabToPagingData.set(e.prefix, e);
                });
              var r = Object(_.h)("ch_facets", "application_config"),
                n = new U(r);
              (this.m_facets = n.AutoGenerateFacets()),
                (this.m_facetFilterState = new V.b(
                  this.m_facets,
                  !1,
                  1,
                  H.k.k_ESortFacetsByMatchCount,
                  Object(i.f)(_.d.LANGUAGE)
                )),
                this.m_facetFilterState.SetFacetCounts(
                  this.m_mapTabToFacetCounts.get(this.m_SelectedTab.name)
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
                  this.m_facetFilterState.Reset(),
                  this.m_facetFilterState.SetFacetCounts(
                    this.m_mapTabToFacetCounts.get(this.m_SelectedTab.name)
                  ),
                  (this.m_nCurrentPage = 0);
              }),
              (e.prototype.GetSelectedPage = function () {
                return this.m_nCurrentPage;
              }),
              (e.prototype.SetSelectedPage = function (e) {
                this.m_nCurrentPage !== e &&
                  ((this.m_nCurrentPage = e),
                  this.HintLoadTabPage(
                    this.m_SelectedTab,
                    this.m_facetFilterState.GetQuery(),
                    e
                  ));
              }),
              (e.prototype.GetRowsPerPage = function (e, t) {
                var a;
                return (
                  (null ===
                    (a = this.m_mapTabToPagingData.get(
                      this.GetPageKey(e, t)
                    )) || void 0 === a
                    ? void 0
                    : a.pagesize) || 1
                );
              }),
              (e.prototype.GetTotalMatchingResults = function (e, t) {
                var a;
                return (
                  (null ===
                    (a = this.m_mapTabToPagingData.get(
                      this.GetPageKey(e, t)
                    )) || void 0 === a
                    ? void 0
                    : a.total_count) || 1
                );
              }),
              (e.prototype.GetNumPages = function (e, t) {
                var a = this.m_mapTabToPagingData.get(this.GetPageKey(e, t));
                return Math.ceil(a.total_count / a.pagesize);
              }),
              (e.prototype.GetFacetFilter = function () {
                return this.m_facetFilterState;
              }),
              (e.prototype.GetFacetQuery = function () {
                return this.m_facetFilterState.strQuery;
              }),
              (e.prototype.UpdateFacetQuery = function () {
                (this.m_nCurrentPage = 0),
                  this.HintLoadTabPage(
                    this.m_SelectedTab,
                    this.m_facetFilterState.GetQuery(),
                    this.m_nCurrentPage
                  );
              }),
              (e.prototype.BHasTabPageLoaded = function (e, t, a) {
                var r,
                  n = this.m_mapTabToPageList.get(this.GetPageKey(e, t));
                return Boolean(
                  n &&
                    a < n.length &&
                    (null === (r = n[a]) || void 0 === r ? void 0 : r.bLoaded)
                );
              }),
              (e.prototype.GetTabPageApps = function (e, t, a) {
                var r = this.m_mapTabToPageList.get(this.GetPageKey(e, t));
                return Boolean(r) ? r[a] : null;
              }),
              (e.prototype.HintLoadTabPage = function (r, n, o) {
                return Object(b.b)(this, void 0, void 0, function () {
                  var t, a;
                  return Object(b.e)(this, function (e) {
                    return this.BHasTabPageLoaded(r, n, o)
                      ? (this.m_facetFilterState.SetFacetCounts(
                          this.m_mapTabToFacetCounts.get(this.GetPageKey(r, n))
                        ),
                        [2, this.GetTabPageApps(r, n, o)])
                      : ((t = this.GetPageKey(r, n)),
                        this.m_mapTabToPageListPromises.has(t) ||
                          this.m_mapTabToPageListPromises.set(t, []),
                        (a = this.m_mapTabToPageListPromises.get(t)),
                        (o >= a.length || !a[o]) &&
                          (a[o] = this.InternalLoadTabPage(r, n, o)),
                        [2, a[o]]);
                  });
                });
              }),
              (e.prototype.InternalLoadTabPage = function (l, u, p) {
                var g, d, m;
                return Object(b.b)(this, void 0, void 0, function () {
                  var t,
                    a,
                    r,
                    n,
                    o,
                    i,
                    s,
                    c = this;
                  return Object(b.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        (t = this.GetPageKey(l, u)),
                          (a =
                            this.m_mapTabToPagingData.get(t) ||
                            this.ClonePagingDataForFaceting(l, u)),
                          (e.label = 1);
                      case 1:
                        return (
                          e.trys.push([1, 3, , 4]),
                          (r = {
                            query: "",
                            start: a.pagesize * p,
                            count: a.pagesize,
                            cc: _.d.COUNTRY,
                            l: _.d.LANGUAGE,
                            v: 1,
                            tag: f.Get().GetDefinition().strTag,
                            tagid:
                              null === (g = a.params) || void 0 === g
                                ? void 0
                                : g.tagid,
                            category:
                              null === (d = a.params) || void 0 === d
                                ? void 0
                                : d.category,
                            facet: u,
                            send_app_data: 1,
                          }),
                          [
                            4,
                            D.a.get(a.url, { params: r, withCredentials: !1 }),
                          ]
                        );
                      case 2:
                        return (
                          (n = e.sent()),
                          1 ==
                          (null === (m = null == n ? void 0 : n.data) ||
                          void 0 === m
                            ? void 0
                            : m.success)
                            ? ((a.total_count = n.data.total_count),
                              (a.pagesize = n.data.pagesize),
                              ((o = this.m_mapTabToPageList.get(t) || [])[p] = {
                                capsules: n.data.tab_capsules,
                                bLoaded: !0,
                              }),
                              y.a.AddAppLinks(n.data.applinkinfo),
                              v.b.AddPackages(n.data.packages),
                              T.a.AddBundles(n.data.bundles),
                              Object(B.G)(function () {
                                c.m_mapTabToPagingData.set(t, a),
                                  c.m_mapTabToPageList.set(t, o),
                                  c.m_mapTabToFacetCounts.set(
                                    t,
                                    n.data.rgSolrFacetCounts
                                  ),
                                  c.m_facetFilterState.SetFacetCounts(
                                    n.data.rgSolrFacetCounts
                                  );
                              }),
                              [2, o[p]])
                            : [3, 4]
                        );
                      case 3:
                        return (
                          (i = e.sent()),
                          (s = Object(M.a)(i)),
                          console.error(
                            "CContentHubTabStore.InternalLoadTabPage: failed with " +
                              s.strErrorMsg,
                            s,
                            this.m_facetFilterState
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
                return Object(b.a)(
                  {
                    total_count: 0,
                    params: Object(b.a)({ facet: t }, a.params),
                  },
                  a
                );
              }),
              Object(b.c)([B.C], e.prototype, "m_SelectedTab", void 0),
              Object(b.c)([B.C], e.prototype, "m_nCurrentPage", void 0),
              Object(b.c)([B.k], e.prototype, "SetSelectedTab", null),
              Object(b.c)([B.k], e.prototype, "UpdateFacetQuery", null),
              e
            );
          })()),
        K = a("TyAF"),
        Q = a("Mgs7"),
        W = a("7G5R"),
        J = a("NKJh"),
        q = a.n(J),
        X = a("exH9"),
        Y = a("lhLD"),
        Z = a("5E+2"),
        $ = Object(K.a)(function (e) {
          var t = x.Get().GetVisibleTabs(),
            a = x.Get().GetSelectedTab(),
            r = x.Get().GetFacetFilter(),
            n = x.Get().GetFacetQuery();
          if (!t || 0 == t.length) return null;
          var o = x.Get().GetSelectedPage();
          return I.a.createElement(
            "div",
            { className: Object(X.a)(Y.TabCtn) },
            I.a.createElement(ae, null),
            I.a.createElement(te, null),
            I.a.createElement(V.c, {
              facetFilterState: r,
              language: Object(i.f)(_.d.LANGUAGE),
              nMaxFacetValues: 5,
              fnOnUpdateFilter: function () {
                return x.Get().UpdateFacetQuery();
              },
            }),
            I.a.createElement(
              l.b,
              { feature: "tab-" + a.name },
              I.a.createElement(ee, {
                selectedTab: a,
                facetQuery: n,
                nCurPage: o,
              })
            ),
            I.a.createElement(te, null)
          );
        }),
        ee = Object(K.a)(function (e) {
          var t = e.selectedTab,
            a = e.facetQuery,
            r = e.nCurPage,
            n = x.Get().BHasTabPageLoaded(t, a, r),
            o = Object(m.useState)(!n),
            i = o[0],
            s = o[1];
          if (
            (Object(m.useEffect)(
              function () {
                var e = D.a.CancelToken.source();
                return (
                  i == n && s(!n),
                  n ||
                    x
                      .Get()
                      .HintLoadTabPage(t, a, r)
                      .then(function () {
                        i && !e.token.reason && s(!1);
                      }),
                  function () {
                    return e.cancel("unmounting TabDisplayPage");
                  }
                );
              },
              [t, r, n, i, a]
            ),
            !n)
          )
            return I.a.createElement(G.a, {
              string: Object(E.f)("#Loading"),
              size: "medium",
              position: "center",
            });
          var c = x.Get().GetTabPageApps(t, a, r).capsules,
            l = g(c, d.Get().GetHomeView(), new p(), c.length, c.length),
            u = c.length - l.length;
          return I.a.createElement(
            I.a.Fragment,
            null,
            Boolean(0 < u) &&
              I.a.createElement(
                "a",
                {
                  href: _.d.STORE_BASE_URL + "account/preferences/",
                  "data-tooltip-text": Object(E.f)(
                    "#ContentHub_TabFiltered_ttip"
                  ),
                },
                I.a.createElement(
                  Z.a,
                  {
                    toolTipContent: Object(E.f)("#ContentHub_TabFiltered_ttip"),
                  },
                  Object(E.l)("#ContentHub_TabFitlered", u)
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
              return I.a.createElement(
                "div",
                {
                  key: "" + e.item_type + e.id,
                  className: q.a.SaleItemBrowserRow,
                },
                I.a.createElement(w.n, {
                  id: e.id,
                  type: a,
                  bShowDemoButton: !1,
                  bLoadShortDescription: !1,
                })
              );
            })
          );
        }),
        te = Object(K.a)(function (e) {
          var t,
            r = x.Get(),
            a = r.GetSelectedTab(),
            n = r.GetFacetQuery(),
            o = r.GetSelectedPage(),
            i = r.GetRowsPerPage(a, n),
            s = r.GetTotalMatchingResults(a, n),
            c = i * o + 1,
            l = Math.min(i * (o + 1), s),
            u = Math.ceil(s / i);
          if (1 < u) {
            var p = new Set();
            p.add(1), p.add(u);
            for (var g = 0; p.size < 7 && g < 7; ++g)
              0 < o + 1 - g && p.add(o + 1 - g),
                p.size < 7 && o + 1 + g < u && p.add(o + 1 + g);
            t = Array.from(p).sort(function (e, t) {
              return e - t;
            });
          }
          return I.a.createElement(
            "div",
            { className: Object(X.a)(Y.PagingCtn) },
            I.a.createElement(
              "div",
              null,
              Object(E.f)("#ContentHub_Paging", c, l, s)
            ),
            Boolean(1 < u) &&
              I.a.createElement(
                "div",
                { className: Object(X.a)(Y.PagingNumCtn) },
                Boolean(0 < o) &&
                  I.a.createElement(
                    Q.d,
                    {
                      onClick: function () {
                        return r.SetSelectedPage(o - 1);
                      },
                    },
                    "<"
                  ),
                t.map(function (e, t) {
                  var a;
                  return I.a.createElement(
                    "div",
                    { className: Y.PageNumCtn, key: "" + e },
                    Boolean(1 === t && 2 !== e) &&
                      I.a.createElement("span", null, "..."),
                    I.a.createElement(
                      "div",
                      {
                        onClick: function () {
                          return r.SetSelectedPage(e - 1);
                        },
                        className: Object(X.a)(
                          (((a = {})[Y.PageNumber] = !0),
                          (a[Y.PageSelectedNumber] = e === o + 1),
                          a)
                        ),
                      },
                      e
                    ),
                    Boolean(5 === t && e !== u - 1) &&
                      I.a.createElement("span", null, "...")
                  );
                }),
                Boolean(o + 1 < u) &&
                  I.a.createElement(
                    Q.d,
                    {
                      onClick: function () {
                        return r.SetSelectedPage(o + 1);
                      },
                    },
                    ">"
                  )
              )
          );
        }),
        ae = Object(K.a)(function (e) {
          var t = x.Get().GetVisibleTabs(),
            a = x.Get().GetSelectedTab();
          return I.a.createElement(
            W.a,
            { className: Y.TabHeaderCtn },
            t.map(function (e) {
              var t;
              return I.a.createElement(
                "div",
                {
                  key: e.displaylistname,
                  className: Object(X.a)(
                    (((t = {})[Y.TabHeader] = !0),
                    (t[Y.TabHeaderSelected] =
                      (null == e ? void 0 : e.name) ==
                      (null == a ? void 0 : a.name)),
                    t)
                  ),
                  onClick: function () {
                    return x.Get().SetSelectedTab(e);
                  },
                },
                e.title
              );
            })
          );
        }),
        re = a("IzPI"),
        ne = a("RNU2"),
        oe =
          (Object(K.a)(function (e) {
            var t = e.capsule,
              a = t.appid,
              r = "game";
            return (
              t.bundleid
                ? ((r = "bundle"), (a = t.bundleid))
                : t.packageid
                ? ((r = "sub"), (a = t.packageid))
                : (r = y.a.GetAppLinkInfo(a).type),
              I.a.createElement(
                "div",
                null,
                I.a.createElement(w.k, { id: a, type: r })
              )
            );
          }),
          function (e) {
            var t = e.item,
              a = e.strReason,
              r = y.a.GetAppLinkInfo(t.id);
            if (!r) return null;
            var n =
                0 < r.screenshot_list.length
                  ? r.screenshot_list[0]
                  : r.header_image_url,
              o = Object(re.f)(r.capsule_link);
            return I.a.createElement(
              w.e,
              { appInfo: r },
              I.a.createElement(
                "div",
                {
                  className: Object(X.a)(ne.BGImage),
                  style: { backgroundImage: 'url("' + n + '")' },
                },
                I.a.createElement(
                  "div",
                  { className: Object(X.a)(ne.FeatureCtn) },
                  I.a.createElement(
                    "a",
                    { href: o, className: Object(X.a)(ne.Artwork) },
                    Object(w.b)(r) &&
                      I.a.createElement(
                        "div",
                        { className: ne.CapsuleDecorators },
                        I.a.createElement(w.h, null)
                      ),
                    I.a.createElement(w.f, { info: r, appInfo: r }),
                    I.a.createElement(w.c, { info: r })
                  ),
                  I.a.createElement(
                    "div",
                    { className: Object(X.a)(ne.Info) },
                    I.a.createElement(
                      "a",
                      { className: ne.Title, href: o },
                      r.title
                    ),
                    I.a.createElement("div", null, a),
                    I.a.createElement(w.m, { appInfo: r, instanceNum: t.id })
                  )
                )
              )
            );
          });
      t.default = function (e) {
        var t = I.a.useState(!0),
          a = t[0],
          r = t[1];
        if (
          (I.a.useEffect(function () {
            j.a
              .Get()
              .HintLoad()
              .then(function () {
                f.Get().ApplyUserAndHomeViewFilters(), r(!1);
              });
          }, []),
          a)
        )
          return I.a.createElement(G.a, {
            string: Object(E.f)("#Loading"),
            size: "medium",
            position: "center",
          });
        var n = f
          .Get()
          .GetSections()
          .map(function (e) {
            return I.a.createElement(L, { section: e, key: e.id });
          });
        return I.a.createElement(
          "div",
          null,
          I.a.createElement(s.a, null, I.a.createElement(N, null)),
          I.a.createElement(s.a, null, n),
          I.a.createElement(s.a, null, I.a.createElement($, null)),
          I.a.createElement(
            "a",
            {
              href: Object(o.a)(
                _.d.STORE_BASE_URL + "labs/contenthub?optout=1"
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
