/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    RNU2: function (e, t, a) {
      e.exports = {
        FeatureCtn: "maincapsule_FeatureCtn_IIjzc",
        SuperCapsuleCtn: "maincapsule_SuperCapsuleCtn_3LMaD",
        BGVideo: "maincapsule_BGVideo_2gJmj",
        BGImage: "maincapsule_BGImage_1Wb3-",
        BGGradient: "maincapsule_BGGradient_2enDy",
        BGGradientTwo: "maincapsule_BGGradientTwo_2vfd-",
        CapsuleDecorators: "maincapsule_CapsuleDecorators_2SkJz",
        Artwork: "maincapsule_Artwork_1BjaZ",
        Info: "maincapsule_Info_30Ff-",
        Title: "maincapsule_Title_5_Erf",
        Reason: "maincapsule_Reason_1jQcK",
        InfoSlideRight: "maincapsule_InfoSlideRight_3u_to",
        ArtworkSlideRight: "maincapsule_ArtworkSlideRight_1MfhA",
        InfoSlideLeft: "maincapsule_InfoSlideLeft_iyafk",
        ArtworkSlideleft: "maincapsule_ArtworkSlideleft_3U7W7",
        BgImageFade: "maincapsule_BgImageFade_2_cnF",
        BgVidShow: "maincapsule_BgVidShow_1M19z",
        ArtworkSlideLeft: "maincapsule_ArtworkSlideLeft_1t4C4",
      };
    },
    j6A3: function (e, t, a) {
      "use strict";
      a.r(t);
      var r,
        n = a("mrSG"),
        i = a("kyHq"),
        o = a("5eAM"),
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
      function d(e, t, a, i, o) {
        var s,
          l = new Array(),
          u = new Array(),
          p = new Array(),
          d = new Array();
        if (!e || 0 == e.length) return l;
        for (
          var g = [r.k_RejectSupportedLanguage, r.k_RejectAlreadyDisplayed],
            _ = 0,
            h = e;
          _ < h.length;
          _++
        ) {
          var v = h[_],
            T = v.id,
            S = r.k_NotRejected;
          switch (v.item_type) {
            case "sub":
              var C = c.b.GetPackageInfo(T);
              if (
                1 !==
                (null === (s = null == C ? void 0 : C.appids) || void 0 === s
                  ? void 0
                  : s.length)
              ) {
                S = b(T, t, a, !0);
                break;
              }
              T = C.appids[0];
            case "app":
              S = f(T, t, a, !0);
              break;
            case "bundle":
              S = y(T, t, a, !0);
          }
          if (
            (S == r.k_NotRejected
              ? ((v.rejected = r.k_NotRejected),
                l.push(Object(n.a)(Object(n.a)({}, v), { priority: 1 })))
              : g.includes(S)
              ? ((v.rejected = r.k_NotRejected), u.push(v))
              : ((v.rejected = S),
                S == r.k_RejectIgnoredGame ? p.push(v) : d.push(v)),
            l.length > i)
          )
            break;
        }
        return (
          l.length < i &&
            (m(l, u, o, 2),
            l.length < o &&
              t.enforce_minimum &&
              (m(l, p, o, 3), m(l, d, o, 4))),
          l
        );
      }
      function m(e, t, a, r) {
        for (var i = 0; e.length < a && i < t.length; ++i)
          e.push(Object(n.a)(Object(n.a)({}, t[i]), { priority: r }));
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
          var n = Object(i.i)(u.d.LANGUAGE);
          if (
            !(null === (a = e.localized_langs) || void 0 === a
              ? void 0
              : a.includes(n))
          )
            return r.k_RejectSupportedLanguage;
        }
        return r.k_NotRejected;
      }
      function f(e, t, a, n) {
        var i = o.a.GetAppLinkInfo(e);
        if (!i) return r.k_RejectNotLoaded;
        var s = g(i, t);
        if (s != r.k_NotRejected) return s;
        var c = l.a.Get();
        return c.BIsGameIgnored(e)
          ? r.k_RejectIgnoredGame
          : c.BExcludesTag(i.tags)
          ? r.k_RejectIgnoreGameTags
          : c.BExcludesContentDescriptor(i.content_descriptors)
          ? r.k_RejectIgnoreContentDescriptors
          : !1 === t.early_access && i.early_access
          ? r.k_RejectEarlyAccess
          : !1 === t.software && "software" == i.type
          ? r.k_RejectSoftware
          : "dlc" != i.type ||
            (!1 !== t.dlc &&
              !1 !== t.dlc_for_you &&
              c.BIsGameOwned(i.full_game_appid))
          ? !1 === t.games_already_in_library && c.BIsGameOwned(e)
            ? r.k_RejectInLibrary
            : !1 !== t.games_not_in_library || c.BIsGameOwned(e)
            ? !1 === t.video && ["video", "series", "episode"].includes(i.type)
              ? r.k_RejectVideo
              : t.has_discount && !i.discount_percent
              ? r.k_RejectNoDiscount
              : "demo" == i.type &&
                !1 === t.games_already_in_library &&
                c.BIsGameOwned(i.full_game_appid)
              ? r.k_RejectInLibrary
              : n
              ? ("demo" == i.type && a.BHasAppID(i.full_game_appid)) ||
                a.BHasAppID(e)
                ? r.k_RejectAlreadyDisplayed
                : _(i, t)
              : r.k_NotRejected
            : r.k_RejectNotInLibrary
          : r.k_RejectDLC;
      }
      function h(e, t) {
        for (var a = l.a.Get(), n = !1, i = 0, o = e; i < o.length; i++) {
          var s = o[i];
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
        var i = c.b.GetPackageInfo(e);
        if (!i) return r.k_RejectNotLoaded;
        var o = g(i, t);
        if (o != r.k_NotRejected) return o;
        var s = h(i.appids, t);
        if (s != r.k_NotRejected) return s;
        var u = l.a.Get();
        return !1 === t.games_already_in_library && u.BOwnsPackage(e)
          ? r.k_RejectInLibrary
          : u.BIsPackageIgnored(e)
          ? r.k_RejectIgnoredGame
          : n
          ? a.BHasPackageID(e)
            ? r.k_RejectAlreadyDisplayed
            : _(i, t)
          : r.k_NotRejected;
      }
      function y(e, t, a, n) {
        var i = s.a.GetBundleInfo(e);
        if (!i) return r.k_RejectNotLoaded;
        var o = g(i, t);
        if (o != r.k_NotRejected) return o;
        var c = h(i.appids, t);
        return c != r.k_NotRejected
          ? c
          : n
          ? a.BHasBundleID(e)
            ? r.k_RejectAlreadyDisplayed
            : _(i, t)
          : r.k_NotRejected;
      }
      var v = (function () {
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
        T = (function () {
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
                t = Object(n.a)(Object(n.a)({}, v.Get().GetHomeView()), {
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
                    i = a.m_mapAppLists.get(r.id);
                  (null === (n = null == i ? void 0 : i.apps) || void 0 === n
                    ? void 0
                    : n.length) > 0 &&
                    a.m_mapOtherCarousels.set(r.id, d(i.apps, t, e, 40, 4));
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
                for (var i = !1, o = 0; o < a.length; ++o) {
                  var s = a[o],
                    c = r[o];
                  if (c < s.length && s[c].priority <= n) {
                    (i = !0), (r[o] += 1);
                    var l = s[c];
                    if (
                      (e.BHasStoreItemKey(l) ||
                        (this.m_rgMainCapsule.push(l), e.AddStoreItemKey(l)),
                      this.m_rgMainCapsule.length >= 12)
                    )
                      break;
                  }
                }
                i || (n += 1);
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
        F = a("VQ2A"),
        k = a("IjL/"),
        j = a("0OaU"),
        E = a("TLQK"),
        I = a("exH9"),
        A = a("xVl9"),
        P = a("5L1o"),
        O = a("MnIK"),
        w = a("dfs5");
      function G(e, t) {
        var a = new Array();
        return (
          e.forEach(function (e) {
            if (!t || a.length < t)
              if (e.appid) {
                var r = o.a.GetAppLinkInfo(e.appid);
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
      var N = a("pXEO"),
        R = function (e) {
          var t = e.section,
            a = T.Get().GetAppListForSection(t.id);
          if (!a || 0 == a.length) return null;
          var r = null;
          switch (t.type) {
            case "4wide":
              r = C.a.createElement(D, { capsuleList: a });
              break;
            case "creator4wide":
              r = C.a.createElement(B, { capsuleList: a });
              break;
            default:
              r = C.a.createElement("div", null, "Unknown: ", t.type);
          }
          return C.a.createElement(
            w.b,
            { feature: t.id },
            C.a.createElement(
              O.a,
              { placeholderHeight: 250, rootMargin: "0px 0px 100% 0px" },
              C.a.createElement(L, {
                title: t.title,
                description: t.description,
              }),
              r
            )
          );
        },
        L = function (e) {
          var t = e.title,
            a = e.description;
          return C.a.createElement(
            "div",
            { className: Object(I.a)(N.StoreSection, N.SectionTitleCtn) },
            C.a.createElement("span", { className: N.SectionTitle }, t),
            Boolean(a) &&
              C.a.createElement("span", { className: N.SectionDescription }, a)
          );
        },
        D = function (e) {
          var t = G(e.capsuleList, 40);
          return C.a.createElement(
            A.a,
            {
              visibleElements: 4,
              className: Object(I.a)(
                N.StoreSection,
                N.StoreSection,
                "SaleSectionCarouselPadding"
              ),
            },
            t.map(function (e) {
              return C.a.createElement(P.l, {
                key: e.type + "_" + e.id,
                capsule: e,
                imageType: "header",
              });
            })
          );
        },
        B = function (e) {
          var t = e.capsuleList,
            a = Object(l.b)(),
            r = a[0];
          a[1];
          if (r)
            return C.a.createElement(j.a, {
              string: Object(E.f)("#Loading"),
              size: "medium",
              position: "center",
            });
          var n = G(t, 40);
          return C.a.createElement(
            A.a,
            { visibleElements: 4 },
            n.map(function (e) {
              return C.a.createElement(P.l, {
                key: e.type + "_" + e.id,
                capsule: e,
                imageType: "header",
              });
            })
          );
        },
        V = a("vDqi"),
        M = a.n(V),
        H = a("2vnA"),
        U = a("bDQf"),
        z = a("3+zv"),
        x = a("dpTt"),
        K = a("mgoM"),
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
                i = this.ComputeAtomicTagToTagsMap();
              return this.ComputeFacets(n, i, e, t);
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
                var n = 0, i = Object.keys(e.rgTagNames);
                n < i.length;
                n++
              ) {
                r = i[n];
                this.m_rgTagNameForTagID.set(Number(r), e.rgTagNames[r]);
              }
              for (
                var o = 0, s = Object.keys(e.rgTagBreakdown);
                o < s.length;
                o++
              ) {
                r = s[o];
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
                          M.a.get(
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
                            Object(U.a)(a).strErrorMsg
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
                  i = Object.keys(e.rgCategoriesByTag),
                  o = 0,
                  s = r;
                o < s.length;
                o++
              )
                for (
                  var c = s[o], l = 0, u = e.rgTagBreakdown[c].flat();
                  l < u.length;
                  l++
                ) {
                  var p = u[l];
                  n.includes(p.toString()) || t.add(p),
                    (i.includes(p.toString()) &&
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
                      var i = n[r];
                      e.has(i) || e.set(i, new Array()), e.get(i).push(a);
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
                  n = function (n, i) {
                    for (var o = 0, s = e.get(i); o < s.length; o++) {
                      var c = s[o];
                      a.has(c) || t.has(c) || (a.add(c), r.get(n).push(c));
                    }
                  },
                  i = 0,
                  o = [
                    "supergenre",
                    "genre",
                    "subgenre",
                    "visuals",
                    "theme_mood",
                    "feature",
                    "players",
                  ];
                i < o.length;
                i++
              ) {
                var s = o[i];
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
                    i = new Array(30);
                  i.fill(""),
                    e.m_rgLanguages.forEach(function (e, t) {
                      var a = Object(K.g)(e, -1);
                      -1 === a
                        ? console.warn("Unrecognized language: " + e)
                        : 0 <= a && a < 30 && (i[a] = n[t]);
                    }),
                    t.set(r, i);
                }),
                t
              );
            }),
            (e.prototype.ComputeAtomicTagToTagsMap = function () {
              var e = new Map();
              return (
                this.m_rgAtomicTagIDsForTagID.forEach(function (t, a) {
                  for (var r = 0, n = t; r < n.length; r++) {
                    var i = n[r],
                      o = Number(i);
                    e.has(o) || e.set(o, new Array()), e.get(o).push(a);
                  }
                }),
                e
              );
            }),
            (e.prototype.ComputeFacets = function (e, t, a, r) {
              var n = new Array();
              return (
                e.forEach(function (e, i) {
                  for (
                    var o = { name: a.get(i), facetValues: new Array() },
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
                      o.facetValues.push(p);
                    } else s.push(u);
                  }
                  s.length > 0 &&
                    console.warn(
                      "No name information found for tag count " +
                        s.length +
                        ", skipping.",
                      s
                    ),
                    n.push(o);
                }),
                n
              );
            }),
            e
          );
        })(),
        W =
          (new Q(),
          (function () {
            function e() {
              var t = this;
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
              var a = Object(u.h)("ch_tab_data", "application_config");
              this.ValidateTabData(a) &&
                ((this.m_rgTabs = a.filter(function (e) {
                  return e.tab_capsules.length > 0;
                })),
                this.m_rgTabs.length > 0 &&
                  (this.m_SelectedTab = this.m_rgTabs[0]),
                this.m_rgTabs.forEach(function (e) {
                  var a = new Array();
                  a.push(e.tab_capsules),
                    t.m_mapTabToPageList.set(e.name, a),
                    t.m_mapTabToPageListPromises.set(e.name, new Array()),
                    t.m_mapTabToFacetCounts.set(e.name, e.rgSolrFacetCounts);
                }));
              var r = Object(u.h)("ch_tab_paging", "application_config");
              this.ValidatePagingData(r) &&
                r.forEach(function (e) {
                  return t.m_mapTabToPagingData.set(e.prefix, e);
                });
              var n = Object(u.h)("ch_facets", "application_config"),
                o = new Q(n);
              (this.m_facets = o.AutoGenerateFacets()),
                e.AddAppTypeFacet(this.m_facets),
                e.AddPlatformFacet(this.m_facets),
                e.AddPriceFacet(this.m_facets),
                e.AddLanguageFacet(this.m_facets),
                e.AddContentDescriptorFacet(this.m_facets),
                e.AddUserPreferencesFacet(this.m_facets),
                (this.m_facetFilterState = new x.b(
                  this.m_facets,
                  !1,
                  1,
                  z.k.k_ESortFacetsByMatchCount,
                  Object(i.i)(u.d.LANGUAGE)
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
                var r = this.m_mapTabToPageList.get(this.GetPageKey(e, t));
                return Boolean(r && a < r.length && r[a]);
              }),
              (e.prototype.GetTabPageApps = function (e, t, a) {
                return this.m_curCapsules;
              }),
              (e.prototype.HintLoadTabPage = function (e, t, a) {
                return Object(n.b)(this, void 0, void 0, function () {
                  var r, i;
                  return Object(n.e)(this, function (n) {
                    return this.BHasTabPageLoaded(e, t, a)
                      ? (this.UpdateResults(),
                        [2, this.GetTabPageApps(e, t, a)])
                      : ((r = this.GetPageKey(e, t)),
                        this.m_mapTabToPageListPromises.has(r) ||
                          this.m_mapTabToPageListPromises.set(r, []),
                        (i = this.m_mapTabToPageListPromises.get(r)),
                        (a >= i.length || !i[a]) &&
                          (i[a] = this.InternalLoadTabPage(e, t, a)),
                        [2, i[a]]);
                  });
                });
              }),
              (e.prototype.InternalLoadTabPage = function (e, t, a) {
                var r, i, l;
                return Object(n.b)(this, void 0, void 0, function () {
                  var p, d, m, g, _, f, h;
                  return Object(n.e)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        (p = this.GetPageKey(e, t)),
                          (d =
                            this.m_mapTabToPagingData.get(p) ||
                            this.ClonePagingDataForFaceting(e, t)),
                          (n.label = 1);
                      case 1:
                        return (
                          n.trys.push([1, 3, , 4]),
                          (m = {
                            query: "",
                            start: d.pagesize * a,
                            count: d.pagesize,
                            cc: u.d.COUNTRY,
                            l: u.d.LANGUAGE,
                            v: 1,
                            tag: T.Get().GetDefinition().strTag,
                            tagid:
                              null === (r = d.params) || void 0 === r
                                ? void 0
                                : r.tagid,
                            category:
                              null === (i = d.params) || void 0 === i
                                ? void 0
                                : i.category,
                            facetQuery: t,
                            send_app_data: 1,
                          }),
                          [
                            4,
                            M.a.get(d.url, { params: m, withCredentials: !1 }),
                          ]
                        );
                      case 2:
                        return (
                          (g = n.sent()),
                          1 ==
                          (null === (l = null == g ? void 0 : g.data) ||
                          void 0 === l
                            ? void 0
                            : l.success)
                            ? ((d.total_count = g.data.total_count),
                              ((_ = this.m_mapTabToPageList.get(p) || [])[a] =
                                g.data.tab_capsules),
                              o.a.AddAppLinks(g.data.applinkinfo),
                              c.b.AddPackages(g.data.packages),
                              s.a.AddBundles(g.data.bundles),
                              this.m_mapTabToPagingData.set(p, d),
                              this.m_mapTabToPageList.set(p, _),
                              this.m_mapTabToFacetCounts.set(
                                p,
                                g.data.rgSolrFacetCounts
                              ),
                              this.UpdateResults(),
                              [2, _[a]])
                            : [3, 4]
                        );
                      case 3:
                        return (
                          (f = n.sent()),
                          (h = Object(U.a)(f)),
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
                return Object(n.a)(
                  {
                    total_count: 0,
                    params: Object(n.a)({ facet: t }, a.params),
                  },
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
                    name: [
                      "#Sale_BrowserSortOption_PopularPurchasedDiscounted",
                    ],
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
                    name: ["#language_selection_" + Object(i.e)(a)],
                    type: z.l.k_ELanguage,
                    language: a,
                    rgStoreTagFilter: {
                      type: z.n.k_EStoreFilterClauseTypeLanguage,
                      value: Object(i.e)(a),
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
                if (!o.a.GetAppLinkInfo(e)) return !1;
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
              Object(n.c)([H.C], e.prototype, "m_SelectedTab", void 0),
              Object(n.c)([H.C], e.prototype, "m_nCurrentPage", void 0),
              Object(n.c)([H.C], e.prototype, "m_curPagingData", void 0),
              Object(n.c)([H.C], e.prototype, "m_curCapsules", void 0),
              Object(n.c)([H.C], e.prototype, "m_curFacetCounts", void 0),
              Object(n.c)([H.k], e.prototype, "SetSelectedTab", null),
              Object(n.c)([H.k], e.prototype, "SetSelectedPage", null),
              Object(n.c)([H.n], e.prototype, "nRowsPerPage", null),
              Object(n.c)([H.n], e.prototype, "nTotalMatchingResults", null),
              Object(n.c)([H.n], e.prototype, "nPages", null),
              Object(n.c)([H.k], e.prototype, "UpdateResults", null),
              e
            );
          })()),
        q = a("TyAF"),
        J = a("7G5R"),
        X = a("NKJh"),
        Z = a.n(X),
        Y = a("lhLD"),
        $ = a("5E+2"),
        ee = a("Ty5D"),
        te = a("GiuM"),
        ae = Object(ee.i)(
          Object(q.a)(function (e) {
            var t = W.Get(),
              a = t.GetVisibleTabs(),
              r = Object(te.a)(e.history, "tab"),
              n = Boolean(r)
                ? a.find(function (e) {
                    return e.name === r;
                  })
                : a[0],
              i = Object(te.a)(e.history, "facets"),
              o = Number(Object(te.a)(e.history, "page")) || 0;
            return (
              Object(S.useEffect)(
                function () {
                  t.SetSelectedTab(n),
                    null != i
                      ? t.GetFacetFilter().SetFromURLParam(i)
                      : t.GetFacetFilter().Reset(),
                    t.SetSelectedPage(o),
                    t.HintLoadTabPage(n, t.GetFacetFilter().GetQuery(), o);
                },
                [t, n, i, o]
              ),
              a && 0 != a.length
                ? C.a.createElement(
                    "div",
                    { className: Object(I.a)(Y.TabCtn) },
                    C.a.createElement(se, null),
                    C.a.createElement(
                      "div",
                      { className: Y.FacetAndPageCtn },
                      C.a.createElement(oe, null),
                      C.a.createElement(
                        "div",
                        { className: Y.PagedItemsCtn },
                        C.a.createElement(re, null),
                        C.a.createElement(ie, null)
                      )
                    )
                  )
                : null
            );
          })
        ),
        re = Object(q.a)(function (e) {
          var t = W.Get().GetSelectedTab();
          return C.a.createElement(
            w.b,
            { feature: "tab-" + t.name },
            C.a.createElement(ne, null)
          );
        }),
        ne = Object(q.a)(function (e) {
          var t = W.Get().GetSelectedTab(),
            a = W.Get().GetFacetFilter().strQuery,
            r = W.Get().GetSelectedPage(),
            n = W.Get().BHasTabPageLoaded(t, a, r),
            i = Object(S.useState)(!n),
            s = i[0],
            c = i[1];
          if (
            (Object(S.useEffect)(
              function () {
                var e = M.a.CancelToken.source();
                return (
                  s == n && c(!n),
                  n ||
                    W.Get()
                      .HintLoadTabPage(t, a, r)
                      .then(function () {
                        s && !e.token.reason && c(!1);
                      }),
                  function () {
                    return e.cancel("unmounting TabDisplayPage");
                  }
                );
              },
              [t, r, n, s, a]
            ),
            !n)
          )
            return C.a.createElement(j.a, {
              string: Object(E.f)("#Loading"),
              size: "medium",
              position: "center",
            });
          var l = W.Get().GetTabPageApps(t, a, r);
          W.Get().GetFacetFilter().BIsAnyUserPreferenceEnabled() &&
            (l = W.Get().FilterStoreItemsForFaceting(l));
          var m = d(l, v.Get().GetHomeView(), new p(), l.length, l.length),
            g = l.length - m.length;
          return C.a.createElement(
            C.a.Fragment,
            null,
            Boolean(g > 0) &&
              C.a.createElement(
                "a",
                {
                  href: u.d.STORE_BASE_URL + "account/preferences/",
                  "data-tooltip-text": Object(E.f)(
                    "#ContentHub_TabFiltered_ttip"
                  ),
                },
                C.a.createElement(
                  $.a,
                  {
                    toolTipContent: Object(E.f)("#ContentHub_TabFiltered_ttip"),
                  },
                  Object(E.l)("#ContentHub_TabFitlered", g)
                )
              ),
            C.a.createElement(
              "div",
              { className: Y.ContentsList },
              m.map(function (e) {
                var t,
                  a = void 0;
                return (
                  (a =
                    "bundle" == e.item_type || "sub" == e.item_type
                      ? e.item_type
                      : (null === (t = o.a.GetAppLinkInfo(e.id)) || void 0 === t
                          ? void 0
                          : t.type) || "game"),
                  C.a.createElement(
                    "div",
                    {
                      key: "" + e.item_type + e.id,
                      className: Z.a.SaleItemBrowserRow,
                    },
                    C.a.createElement(P.n, {
                      id: e.id,
                      type: a,
                      bShowDemoButton: !1,
                      bLoadShortDescription: !1,
                    })
                  )
                );
              })
            )
          );
        }),
        ie = Object(ee.i)(
          Object(q.a)(function (e) {
            var t,
              a = W.Get(),
              r =
                (a.GetSelectedTab(),
                a.GetFacetFilter().strQuery,
                a.GetSelectedPage()),
              n = a.nRowsPerPage,
              i = a.nTotalMatchingResults,
              o = n * r + 1,
              s = Math.min(n * (r + 1), i),
              c = a.nPages;
            if (c > 1) {
              var l = new Set();
              l.add(1), l.add(c);
              for (var u = 0; l.size < 7 && u < 7; ++u)
                r + 1 - u > 0 && l.add(r + 1 - u),
                  l.size < 7 && r + 1 + u < c && l.add(r + 1 + u);
              t = Array.from(l).sort(function (e, t) {
                return e - t;
              });
            }
            var p = function (t) {
              Object(te.c)(e.history, { page: t.toString() });
            };
            return C.a.createElement(
              "div",
              { className: Object(I.a)(Y.PagingCtn) },
              C.a.createElement(
                "div",
                { className: Y.ItemCount },
                Object(E.f)("#ContentHub_Paging", o, s, i)
              ),
              Boolean(c > 1) &&
                C.a.createElement(
                  "div",
                  { className: Object(I.a)(Y.PagingNumCtn) },
                  Boolean(r >= 0) &&
                    C.a.createElement(
                      "div",
                      {
                        className: Y.PagingButton,
                        onClick: function () {
                          return p(r - 1);
                        },
                      },
                      "<"
                    ),
                  t.map(function (e, t) {
                    var a;
                    return C.a.createElement(
                      "div",
                      { className: Y.PageNumCtn, key: "" + e },
                      Boolean(1 === t && 2 !== e) &&
                        C.a.createElement("span", null, "..."),
                      C.a.createElement(
                        "div",
                        {
                          onClick: function () {
                            return p(e - 1);
                          },
                          className: Object(I.a)(
                            ((a = {}),
                            (a[Y.PageNumber] = !0),
                            (a[Y.PageSelectedNumber] = e === r + 1),
                            a)
                          ),
                        },
                        e
                      ),
                      Boolean(5 === t && e !== c - 1) &&
                        C.a.createElement("span", null, "...")
                    );
                  }),
                  Boolean(r + 1 < c) &&
                    C.a.createElement(
                      "div",
                      {
                        className: Y.PagingButton,
                        onClick: function () {
                          return p(r + 1);
                        },
                      },
                      ">"
                    )
                )
            );
          })
        ),
        oe = Object(ee.i)(
          Object(q.a)(function (e) {
            var t = W.Get().GetFacetFilter();
            return C.a.createElement(
              "div",
              { className: Y.FacetMenuCtn },
              C.a.createElement(x.c, {
                facetFilterState: t,
                language: Object(i.i)(u.d.LANGUAGE),
                nMaxFacetValues: 5,
                fnOnUpdateFilter: function () {
                  Object(te.c)(e.history, {
                    facets: t.GetURLParam(),
                    page: void 0,
                  });
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
        se = Object(ee.i)(
          Object(q.a)(function (e) {
            var t = W.Get().GetVisibleTabs(),
              a = W.Get().GetSelectedTab();
            return C.a.createElement(
              J.a,
              { className: Y.TabHeaderCtn },
              t.map(function (t) {
                var r;
                return C.a.createElement(
                  "div",
                  {
                    key: t.displaylistname,
                    className: Object(I.a)(
                      ((r = {}),
                      (r[Y.TabHeader] = !0),
                      (r[Y.TabHeaderSelected] =
                        (null == t ? void 0 : t.name) ==
                        (null == a ? void 0 : a.name)),
                      r)
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
        ue = a("b3LC"),
        pe = a("QXuq"),
        de =
          (Object(q.a)(function (e) {
            var t = e.capsule,
              a = t.appid,
              r = "game";
            return (
              t.bundleid
                ? ((r = "bundle"), (a = t.bundleid))
                : t.packageid
                ? ((r = "sub"), (a = t.packageid))
                : (r = o.a.GetAppLinkInfo(a).type),
              C.a.createElement(
                "div",
                null,
                C.a.createElement(P.k, { id: a, type: r })
              )
            );
          }),
          function (e) {
            var t = T.Get().GetMainCapsuleList();
            return C.a.createElement(
              A.a,
              { visibleElements: 1, className: N.MainCarousel },
              t.map(function (e) {
                return C.a.createElement(me, {
                  key: e.item_type + " " + e.id,
                  item: e,
                  strReason:
                    e.status_string || "Test Reason: Because its selling well",
                });
              })
            );
          }),
        me = function (e) {
          var t,
            a = e.item,
            r = e.strReason,
            n = Object(ue.a)(a.id, Object(pe.e)(a.item_type), {
              include_assets: !0,
            })[0],
            i = o.a.GetAppLinkInfo(a.id);
          if (!i || !n) return null;
          var s =
              "https://cdn.cloudflare.steamstatic.com/steam/apps/" +
              n.GetAppID() +
              "/library_hero.jpg",
            c = Object(ce.f)(i.capsule_link);
          return (
            (t = i.microtrailer_mp4),
            C.a.createElement(
              P.e,
              { appid: n.GetAppID() },
              C.a.createElement(
                "div",
                { className: le.SuperCapsuleCtn },
                C.a.createElement(
                  "div",
                  { className: Object(I.a)(le.BGGradient) },
                  " "
                ),
                C.a.createElement(
                  "div",
                  { className: Object(I.a)(le.BGGradientTwo) },
                  " "
                ),
                C.a.createElement(
                  "div",
                  {
                    className: Object(I.a)(le.BGImage),
                    style: { backgroundImage: 'url("' + s + '")' },
                  },
                  " "
                ),
                C.a.createElement("video", {
                  className: Object(I.a)(le.BGVideo),
                  playsInline: !0,
                  autoPlay: !0,
                  muted: !0,
                  src: t,
                  loop: !0,
                }),
                C.a.createElement(
                  "div",
                  { className: Object(I.a)(le.FeatureCtn, N.FeatureCtn) },
                  C.a.createElement(
                    "a",
                    { href: c, className: Object(I.a)(le.Artwork) },
                    Object(P.b)(n.GetAppID(), n.GetAppIDToRun()) &&
                      C.a.createElement(
                        "div",
                        { className: le.CapsuleDecorators },
                        C.a.createElement(P.h, null)
                      ),
                    C.a.createElement(P.f, { info: i, appInfo: i }),
                    C.a.createElement(P.c, { info: i })
                  ),
                  C.a.createElement(
                    "div",
                    { className: Object(I.a)(le.Info) },
                    C.a.createElement(
                      "a",
                      { className: le.Title, href: c },
                      i.title
                    ),
                    C.a.createElement("div", { className: le.Reason }, r),
                    C.a.createElement(P.m, { appInfo: i, instanceNum: a.id })
                  )
                )
              )
            )
          );
        };
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
                T.Get().ApplyUserAndHomeViewFilters(), r(!1);
              });
          }, []),
          a)
        )
          return C.a.createElement(j.a, {
            string: Object(E.f)("#Loading"),
            size: "medium",
            position: "center",
          });
        var n = T.Get()
          .GetSections()
          .map(function (e) {
            return C.a.createElement(R, { section: e, key: e.id });
          });
        return C.a.createElement(
          "div",
          null,
          C.a.createElement(k.a, null, C.a.createElement(de, null)),
          C.a.createElement(k.a, null, n),
          C.a.createElement(k.a, null, C.a.createElement(ae, null)),
          C.a.createElement(
            "a",
            {
              href: Object(F.a)(
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
