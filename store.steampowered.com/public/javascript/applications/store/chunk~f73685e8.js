/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    FQoL: function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return a;
      }),
        r.d(t, "a", function () {
          return o;
        }),
        r.d(t, "c", function () {
          return l;
        });
      var i = r("yfxr"),
        s = r("/Q1a"),
        n = (r("hRO2"), r("9XWO"), r("Zdsb"));
      r("qisX");
      function a(e, t) {
        e.Body().set_context(o(t));
      }
      function o(e) {
        let t = new i.c();
        return (
          e || t.set_country_code(s.d.COUNTRY),
          t.set_language(s.d.LANGUAGE),
          s.d.EREALM != n.h.k_ESteamRealmUnknown &&
            t.set_steam_realm(s.d.EREALM),
          t
        );
      }
      function l(e, t) {
        e.Body().set_data_request(i.d.fromObject(t));
      }
    },
    RrtU: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return l;
      }),
        r.d(t, "b", function () {
          return u;
        }),
        r.d(t, "d", function () {
          return c;
        }),
        r.d(t, "c", function () {
          return d;
        }),
        r.d(t, "e", function () {
          return m;
        });
      var i = r("vDqi"),
        s = r.n(i),
        n = r("q1tI"),
        a = (r("pY4P"), r("Zdsb"), r("yfxr"), r("hCpY")),
        o = (r("X/lQ"), r("Ys0h"));
      function l(e, t, r, i) {
        const a = Object(n.useRef)(),
          l = Object(n.useRef)(void 0);
        a.current = e;
        const [u, c] = Object(n.useState)(void 0),
          {
            include_assets: d,
            include_release: _,
            include_platforms: m,
            include_all_purchase_options: h,
            include_screenshots: p,
            include_trailers: g,
            include_ratings: f,
            include_tag_count: b,
            include_reviews: B,
            include_basic_info: y,
            include_supported_languages: R,
          } = r;
        if (
          (Object(n.useEffect)(() => {
            const r = {
              include_assets: d,
              include_release: _,
              include_platforms: m,
              include_all_purchase_options: h,
              include_screenshots: p,
              include_trailers: g,
              include_ratings: f,
              include_tag_count: b,
              include_reviews: B,
              include_basic_info: y,
              include_supported_languages: R,
            };
            if (
              !e ||
              o.a.Get().BHasStoreItem(e, t, r) ||
              (void 0 !== u && i == l.current)
            )
              return;
            l.current = i;
            const n = s.a.CancelToken.source();
            return (
              o.a
                .Get()
                .QueueStoreItemRequest(e, t, r)
                .then((t) => {
                  n.token.reason || a.current !== e || c(1 == t);
                }),
              () => n.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, i, u, d, _, m, h, p, g, f, b, B, y, R]),
          !e)
        )
          return [null, 2];
        if (!1 === u) return [void 0, 2];
        if (o.a.Get().BIsStoreItemMissing(e, t)) return [void 0, 2];
        if (!o.a.Get().BHasStoreItem(e, t, r)) return [void 0, 1];
        const v = o.a.Get().GetStoreItem(e, t);
        return (null == v ? void 0 : v.BIsVisible()) ? [v, 3] : [null, 2];
      }
      function u(e, t, r) {
        return l(e, 0, t, r);
      }
      function c(e, t, r) {
        return l(e, 1, t, r);
      }
      function d(e, t, r) {
        const [i, a] = l(e, t, r),
          [o, c] = Object(n.useState)(null),
          [d, _] = u(o, r);
        return (
          Object(n.useEffect)(() => {
            var e;
            const t = s.a.CancelToken.source();
            if (
              1 == (null == i ? void 0 : i.GetStoreItemType()) &&
              1 == (null == i ? void 0 : i.GetIncludedAppIDs().length)
            ) {
              const r = i.GetIncludedAppIDs()[0];
              o != r &&
                ((null === (e = null == t ? void 0 : t.token) || void 0 === e
                  ? void 0
                  : e.reason) ||
                  c(r));
            }
            return () =>
              t.cancel("useStoreItemCacheOrPackageSingleApp: unmounting");
          }, [o, i]),
          o ? [d, _] : [i, a]
        );
      }
      function _(e, t, r, i) {
        const l = Object(a.f)(),
          {
            include_assets: u,
            include_release: c,
            include_platforms: d,
            include_all_purchase_options: _,
            include_screenshots: m,
            include_trailers: h,
            include_ratings: p,
            include_tag_count: g,
            include_reviews: f,
            include_basic_info: b,
            include_supported_languages: B,
          } = r;
        if (
          (Object(n.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const r = {
                include_assets: u,
                include_release: c,
                include_platforms: d,
                include_all_purchase_options: _,
                include_screenshots: m,
                include_trailers: h,
                include_ratings: p,
                include_tag_count: g,
                include_reviews: f,
                include_basic_info: b,
                include_supported_languages: B,
              },
              i = e.filter((e) => !o.a.Get().BHasStoreItem(e, t));
            if (0 == i.length) return;
            const n = s.a.CancelToken.source(),
              a = i.map((e) => o.a.Get().QueueStoreItemRequest(e, t, r));
            return (
              Promise.all(a).then(() => {
                n.token.reason || l();
              }),
              () => n.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, i, l, u, c, d, _, m, h, p, g, f, b, B]),
          !e)
        )
          return 2;
        if (
          !e.every(
            (e) =>
              o.a.Get().BHasStoreItem(e, t, r) ||
              o.a.Get().BIsStoreItemMissing(e, t)
          )
        )
          return 1;
        return e.every((e) => {
          var r;
          return null === (r = o.a.Get().GetStoreItem(e, t)) || void 0 === r
            ? void 0
            : r.BIsVisible();
        })
          ? 3
          : 2;
      }
      function m(e, t, r) {
        return _(e, 0, t, r);
      }
    },
    "X/lQ": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return u;
      });
      var i = r("2vnA"),
        s = (r("msu0"), r("Zdsb"), r("Qhkv"), r("yfxr"), r("hAgw")),
        n = r("f5iL"),
        a = r("GXif"),
        o = r("gwss"),
        l = r("/Q1a");
      class u {
        constructor(e, t) {
          var r, i, s;
          (this.m_bVisible = !1),
            (this.m_rgStoreTags = []),
            (this.m_rgStoreTagIDs = []),
            (this.m_DataRequested = { include_tag_count: 0 }),
            (this.k_regexSalePage =
              /^https?:\/\/[^\/]*(?:valvesoftware|steampowered).com\/(?:(curator|dev|developer|pub|publisher|franchise)\/[0-9a-zA-Z\-_]+\/)?sale\//),
            (this.m_eItemType = e.item_type()),
            (this.m_unID = e.id()),
            (this.m_bVisible = e.visible()),
            (this.m_strName = e.name()),
            (this.m_strStoreURLPath = e.store_url_path()),
            (this.m_unAppID = e.appid()),
            (this.m_eAppType = e.type()),
            (this.m_rgIncludedAppTypes = e.included_types()),
            (this.m_rgIncludedAppIDs = e.included_appids()),
            (this.m_bIsFree = e.is_free()),
            (this.m_bIsEarlyAccess = e.is_early_access()),
            (this.m_RelatedItems =
              null === (r = e.related_items()) || void 0 === r
                ? void 0
                : r.toObject()),
            (this.m_ContentDescriptorIDs = e.content_descriptorids()),
            (this.m_StoreCategories = e.categories().toObject()),
            (this.m_BestPurchaseOption =
              null === (i = e.best_purchase_option()) || void 0 === i
                ? void 0
                : i.toObject()),
            (this.m_strStoreURLPathOverride = e.store_url_path_override()),
            (this.m_freeWeekend =
              null === (s = e.free_weekend()) || void 0 === s
                ? void 0
                : s.toObject()),
            this.MergeData(e, t);
        }
        MergeData(e, t) {
          t.include_assets &&
            !this.m_Assets &&
            ((this.m_Assets = new d(e.assets(), e.id())),
            (this.m_DataRequested.include_assets = !0)),
            t.include_release &&
              !this.m_ReleaseInfo &&
              ((this.m_ReleaseInfo = e.release().toObject()),
              (this.m_DataRequested.include_release = !0)),
            t.include_platforms &&
              !this.m_Platforms &&
              ((this.m_Platforms = e.platforms().toObject()),
              (this.m_DataRequested.include_platforms = !0)),
            t.include_all_purchase_options &&
              !this.m_rgPurchaseOptions &&
              ((this.m_rgPurchaseOptions = e
                .purchase_options()
                .map((e) => e.toObject())),
              (this.m_DataRequested.include_all_purchase_options = !0)),
            t.include_screenshots &&
              !this.m_Screenshots &&
              ((this.m_Screenshots = new h(e.screenshots())),
              (this.m_DataRequested.include_screenshots = !0)),
            t.include_trailers &&
              !this.m_Trailers &&
              ((this.m_Trailers = new _(e.trailers())),
              (this.m_DataRequested.include_trailers = !0)),
            t.include_tag_count > this.m_rgStoreTags.length &&
              this.m_DataRequested.include_tag_count < t.include_tag_count &&
              ((this.m_rgStoreTags = e.tags().map((e) => e.toObject())),
              (this.m_rgStoreTagIDs = this.m_rgStoreTags.map((e) => e.tagid)),
              (this.m_DataRequested.include_tag_count = Math.max(
                t.include_tag_count,
                this.m_rgStoreTags.length || 0
              ))),
            t.include_reviews &&
              !this.m_ReviewInfo &&
              ((this.m_ReviewInfo = e.reviews().toObject()),
              (this.m_DataRequested.include_reviews = !0)),
            t.include_basic_info &&
              !this.m_BasicInfo &&
              ((this.m_BasicInfo = e.basic_info().toObject()),
              (this.m_DataRequested.include_basic_info = !0)),
            t.include_supported_languages &&
              !this.m_rgSupportedLanguages &&
              ((this.m_rgSupportedLanguages = e
                .supported_languages()
                .map((e) => e.toObject())),
              (this.m_DataRequested.include_supported_languages = !0));
        }
        static BDataRequestContainsOtherDataRequest(e, t) {
          return Boolean(
            (!t.include_assets || e.include_assets) &&
              (!t.include_release || e.include_release) &&
              (!t.include_platforms || e.include_platforms) &&
              (!t.include_all_purchase_options ||
                e.include_all_purchase_options) &&
              (!t.include_screenshots || e.include_screenshots) &&
              (!t.include_trailers || e.include_trailers) &&
              (!t.include_ratings || e.include_ratings) &&
              (!t.include_tag_count ||
                (e.include_tag_count || 0) >= t.include_tag_count) &&
              (!t.include_reviews || e.include_reviews) &&
              (!t.include_basic_info || e.include_basic_info) &&
              (!t.include_supported_languages || e.include_supported_languages)
          );
        }
        BContainDataRequest(e) {
          return u.BDataRequestContainsOtherDataRequest(
            this.m_DataRequested,
            e
          );
        }
        BCheckDataRequestIncluded(e) {
          ("dev" != l.d.WEB_UNIVERSE && "beta" != l.d.WEB_UNIVERSE) ||
            Object(n.a)(
              this.BContainDataRequest(e),
              `Requested data without for ${Object(s.c)(this.m_eItemType)} @ ${
                this.m_unID
              }`,
              Object(i.I)(e),
              Object(i.I)(this.m_DataRequested)
            );
        }
        GetStoreItemType() {
          return this.m_eItemType;
        }
        GetID() {
          return this.m_unID;
        }
        GetUniqueID() {
          return this.m_eItemType + "_" + this.m_unID;
        }
        BIsVisible() {
          return this.m_bVisible;
        }
        GetName() {
          return this.m_strName;
        }
        GetStorePageURL() {
          return l.d.STORE_BASE_URL + this.m_strStoreURLPath;
        }
        GetStorePageURLWithOverride() {
          var e;
          return (null === (e = this.m_strStoreURLPathOverride) || void 0 === e
            ? void 0
            : e.length) > 0
            ? this.GetStorePageURLOverride()
            : this.GetStorePageURL();
        }
        GetStorePageURLOverride() {
          return this.m_strStoreURLPathOverride;
        }
        GetCommunityPageURL() {
          return this.GetAppID()
            ? l.d.COMMUNITY_BASE_URL + "app/" + this.GetAppID()
            : null;
        }
        GetCommunityDiscussionForumsURL() {
          return this.GetAppID()
            ? l.d.COMMUNITY_BASE_URL +
                "app/" +
                this.GetAppID() +
                "/discussions/"
            : null;
        }
        GetAppID() {
          return this.m_unAppID;
        }
        GetAppIDToRun() {
          const e = this.GetParentAppID();
          return e && 11 != this.m_eAppType ? e : this.GetAppID();
        }
        GetAppType() {
          return this.m_eAppType;
        }
        BIsApplicationOrTool() {
          return 6 == this.GetAppType() || 13 == this.GetAppType();
        }
        BIsSalePage() {
          return (
            0 === this.GetStoreItemType() &&
            this.k_regexSalePage.test(this.GetStorePageURLWithOverride())
          );
        }
        GetSalePageVanityURL() {
          let e = this.GetStorePageURLWithOverride();
          return (
            0 === this.GetStoreItemType() &&
              ((e = this.GetStorePageURLWithOverride().replace(
                this.k_regexSalePage,
                ""
              )),
              e.endsWith("/") && (e = e.replace("/", ""))),
            e
          );
        }
        GetIncludedAppTypes() {
          return this.m_rgIncludedAppTypes;
        }
        GetIncludedAppIDs() {
          return this.m_rgIncludedAppIDs;
        }
        GetIncludedAppIDsOrSelf() {
          return 0 == this.GetStoreItemType()
            ? [this.GetID()]
            : this.GetIncludedAppIDs();
        }
        BIsFree() {
          return this.m_bIsFree;
        }
        BIsFreeWeekend() {
          const e = Date.now() / 1e3;
          return (
            Boolean(this.m_freeWeekend) &&
            this.m_freeWeekend.start_time <= e &&
            e <= this.m_freeWeekend.end_time
          );
        }
        GetFreeWeekendEnd() {
          var e;
          return null === (e = this.m_freeWeekend) || void 0 === e
            ? void 0
            : e.end_time;
        }
        GetFreeWeekendPlayTextOverride() {
          var e;
          return null === (e = this.m_freeWeekend) || void 0 === e
            ? void 0
            : e.text;
        }
        BIsEarlyAccess() {
          return this.m_bIsEarlyAccess;
        }
        GetParentAppID() {
          var e;
          return null === (e = this.m_RelatedItems) || void 0 === e
            ? void 0
            : e.parent_appid;
        }
        GetContentDescriptorIDs() {
          return this.m_ContentDescriptorIDs;
        }
        HasContentDescriptorID(e) {
          var t;
          return null === (t = this.m_ContentDescriptorIDs) || void 0 === t
            ? void 0
            : t.includes(e);
        }
        GetStoreCategories_SupportedPlayers() {
          var e;
          return (
            (null === (e = this.m_StoreCategories) || void 0 === e
              ? void 0
              : e.supported_player_categoryids) || []
          );
        }
        GetStoreCategories_Features() {
          var e;
          return (
            (null === (e = this.m_StoreCategories) || void 0 === e
              ? void 0
              : e.feature_categoryids) || []
          );
        }
        GetStoreCategories_Controller() {
          var e;
          return (
            (null === (e = this.m_StoreCategories) || void 0 === e
              ? void 0
              : e.controller_categoryids) || []
          );
        }
        BHasStoreCategory(e) {
          return Boolean(
            this.GetStoreCategories_SupportedPlayers().find((t) => e === t) ||
              this.GetStoreCategories_Features().find((t) => e === t) ||
              this.GetStoreCategories_Controller().find((t) => e === t)
          );
        }
        GetFilteredReviewSummary() {
          return (
            this.BCheckDataRequestIncluded({ include_reviews: !0 }),
            this.m_ReviewInfo.summary_filtered
          );
        }
        GetUnfilteredReviewSummary() {
          return (
            this.BCheckDataRequestIncluded({ include_reviews: !0 }),
            this.m_ReviewInfo.summary_unfiltered ||
              this.m_ReviewInfo.summary_filtered
          );
        }
        GetShortDescription() {
          var e, t;
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            null !==
              (t =
                null === (e = this.m_BasicInfo) || void 0 === e
                  ? void 0
                  : e.short_description) && void 0 !== t
              ? t
              : ""
          );
        }
        GetDeveloperNames() {
          var e, t, r, i;
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            null !==
              (i =
                null ===
                  (r =
                    null ===
                      (t =
                        null === (e = this.m_BasicInfo) || void 0 === e
                          ? void 0
                          : e.developers) || void 0 === t
                      ? void 0
                      : t.map((e) => e.name.trim())) || void 0 === r
                  ? void 0
                  : r.filter((e) => (null == e ? void 0 : e.length) > 0)) &&
            void 0 !== i
              ? i
              : []
          );
        }
        GetFranchiseNames() {
          var e, t, r, i;
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            null !==
              (i =
                null ===
                  (r =
                    null ===
                      (t =
                        null === (e = this.m_BasicInfo) || void 0 === e
                          ? void 0
                          : e.franchises) || void 0 === t
                      ? void 0
                      : t.map((e) => e.name.trim())) || void 0 === r
                  ? void 0
                  : r.filter((e) => (null == e ? void 0 : e.length) > 0)) &&
            void 0 !== i
              ? i
              : []
          );
        }
        GetPublisherNames() {
          var e, t, r, i;
          this.BCheckDataRequestIncluded({ include_basic_info: !0 });
          const s =
            null !==
              (i =
                null ===
                  (r =
                    null ===
                      (t =
                        null === (e = this.m_BasicInfo) || void 0 === e
                          ? void 0
                          : e.publishers) || void 0 === t
                      ? void 0
                      : t.map((e) => e.name.trim())) || void 0 === r
                  ? void 0
                  : r.filter((e) => (null == e ? void 0 : e.length) > 0)) &&
            void 0 !== i
              ? i
              : [];
          return (null == s ? void 0 : s.length) > 0
            ? s
            : this.GetDeveloperNames();
        }
        GetAllCreatorClanIDs() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo
              ? c([
                  ...this.m_BasicInfo.developers,
                  ...this.m_BasicInfo.publishers,
                  ...this.m_BasicInfo.franchises,
                ])
              : []
          );
        }
        GetAllPublisherCreatorClans() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo ? c(this.m_BasicInfo.publishers) : []
          );
        }
        GetAllDeveloperCreatorClans() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo ? c(this.m_BasicInfo.developers) : []
          );
        }
        GetAllFranchiseCreatorClans() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo ? c(this.m_BasicInfo.franchises) : []
          );
        }
        GetCapsuleHeadline() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            null === (e = this.m_BasicInfo) || void 0 === e
              ? void 0
              : e.capsule_headline
          );
        }
        GetTags() {
          return (
            this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
            this.m_rgStoreTags
          );
        }
        GetTagIDs() {
          return (
            this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
            this.m_rgStoreTagIDs
          );
        }
        BHasTags() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
            (null === (e = this.m_rgStoreTagIDs) || void 0 === e
              ? void 0
              : e.length) > 0
          );
        }
        GetAssets() {
          return (
            this.BCheckDataRequestIncluded({ include_assets: !0 }),
            this.m_Assets
          );
        }
        GetReleaseDateRTime() {
          var e, t, r;
          if (
            (this.BCheckDataRequestIncluded({ include_release: !0 }),
            null === (e = this.m_ReleaseInfo) || void 0 === e
              ? void 0
              : e.is_coming_soon)
          )
            return 0;
          let i =
            null === (t = this.m_ReleaseInfo) || void 0 === t
              ? void 0
              : t.steam_release_date;
          return (
            i ||
              (i =
                null === (r = this.m_ReleaseInfo) || void 0 === r
                  ? void 0
                  : r.original_release_date),
            i
          );
        }
        GetFormattedSteamReleaseDate() {
          var e;
          this.BCheckDataRequestIncluded({ include_release: !0 });
          const t = this.GetReleaseDateRTime();
          return (
            null === (e = this.m_ReleaseInfo) || void 0 === e
              ? void 0
              : e.is_abridged_release_date
          )
            ? t
              ? Object(o.a)(new Date(1e3 * t))
              : ""
            : t
            ? Object(a.q)(t)
            : "";
        }
        BIsComingSoon() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_release: !0 }),
            null === (e = this.m_ReleaseInfo) || void 0 === e
              ? void 0
              : e.is_coming_soon
          );
        }
        BIsReleased() {
          return !this.BIsComingSoon();
        }
        GetPlatforms() {
          return (
            this.BCheckDataRequestIncluded({ include_platforms: !0 }),
            this.m_Platforms
          );
        }
        GetBestPurchaseOption() {
          return this.m_BestPurchaseOption;
        }
        GetBestPurchasePriceInCents() {
          var e;
          if (
            null === (e = this.m_BestPurchaseOption) || void 0 === e
              ? void 0
              : e.final_price_in_cents
          )
            return Number.parseInt(
              this.m_BestPurchaseOption.final_price_in_cents
            );
        }
        GetBestPurchasePriceFormatted() {
          var e;
          return null === (e = this.m_BestPurchaseOption) || void 0 === e
            ? void 0
            : e.formatted_final_price;
        }
        GetBestPurchaseOriginalPriceInCents() {
          var e;
          return (
            null === (e = this.m_BestPurchaseOption) || void 0 === e
              ? void 0
              : e.original_price_in_cents
          )
            ? Number.parseInt(this.m_BestPurchaseOption.final_price_in_cents)
            : this.GetBestPurchasePriceInCents();
        }
        GetBestPurchaseOriginalPriceFormatted() {
          var e, t, r;
          return null !==
            (t =
              null === (e = this.m_BestPurchaseOption) || void 0 === e
                ? void 0
                : e.formatted_original_price) && void 0 !== t
            ? t
            : null === (r = this.m_BestPurchaseOption) || void 0 === r
            ? void 0
            : r.formatted_final_price;
        }
        GetAllPurchaseOptions() {
          return (
            this.BCheckDataRequestIncluded({
              include_all_purchase_options: !0,
            }),
            this.m_rgPurchaseOptions
          );
        }
        BHasAgeSafeScreenshots() {
          return this.GetOnlyAllAgesSafeScreenshots().length > 0;
        }
        GetOnlyAllAgesSafeScreenshots() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_screenshots: !0 }),
            (null === (e = this.m_Screenshots) || void 0 === e
              ? void 0
              : e.GetOnlyAllAgesScreenshots()) || []
          );
        }
        GetBothAllAgesSafeAndMatureScreenshots() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_screenshots: !0 }),
            (null === (e = this.m_Screenshots) || void 0 === e
              ? void 0
              : e.GetAllAgesAndMatureScreenshots()) || []
          );
        }
        BHasTrailers() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            null === (e = this.m_Trailers) || void 0 === e
              ? void 0
              : e.BHasTrailers()
          );
        }
        BHasHighlightTrailers() {
          var e, t;
          return (
            this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            (null ===
              (t =
                null === (e = this.m_Trailers) || void 0 === e
                  ? void 0
                  : e.GetHighlightTrailers()) || void 0 === t
              ? void 0
              : t.length) > 0
          );
        }
        GetAllTrailers() {
          return (
            this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            this.m_Trailers
          );
        }
        BHasSomeLanguageSupport(e) {
          return (
            this.BCheckDataRequestIncluded({ include_supported_languages: !0 }),
            this.m_rgSupportedLanguages.some(
              (t) =>
                t.elanguage == e && (t.supported || t.subtitles || t.full_audio)
            )
          );
        }
        GetAllLanguagesWithSomeSupport() {
          return (
            this.BCheckDataRequestIncluded({ include_supported_languages: !0 }),
            this.m_rgSupportedLanguages
              .filter((e) => e.supported || e.subtitles || e.full_audio)
              .map((e) => e.elanguage)
          );
        }
        GetDataRequest() {
          return this.m_DataRequested;
        }
        GetMicroTrailer() {
          this.BCheckDataRequestIncluded({ include_trailers: !0 });
          let e = null;
          return (
            this.m_Trailers &&
              (this.m_Trailers.GetHighlightTrailers().forEach((t) => {
                !e && t.GetMicroTrailer() && (e = t.GetMicroTrailer());
              }),
              e ||
                this.m_Trailers.GetOtherTrailers().forEach((t) => {
                  !e && t.GetMicroTrailer() && (e = t.GetMicroTrailer());
                })),
            e
          );
        }
        ReplaceBestPurchaseOption(e) {
          this.m_BestPurchaseOption = e;
        }
      }
      function c(e) {
        if (!(null == e ? void 0 : e.length)) return [];
        const t = e.map((e) => e.creator_clan_account_id).filter((e) => !!e);
        return Array.from(new Set(t));
      }
      class d {
        constructor(e, t) {
          const r = e.asset_url_format();
          r &&
            (e.main_capsule() &&
              (this.m_strMainCapsuleURL = this.ConstructAssetURL(
                r,
                e.main_capsule()
              )),
            e.small_capsule() &&
              (this.m_strSmallCapsuleURL = this.ConstructAssetURL(
                r,
                e.small_capsule()
              )),
            e.header() &&
              (this.m_strHeaderURL = this.ConstructAssetURL(r, e.header())),
            e.package_header() &&
              (this.m_strPackageHeaderURL = this.ConstructAssetURL(
                r,
                e.package_header()
              )),
            e.page_background() &&
              (this.m_strPageBackgroundURL = this.ConstructAssetURL(
                r,
                e.page_background()
              )),
            e.hero_capsule() &&
              (this.m_strHeroCapsuleURL = this.ConstructAssetURL(
                r,
                e.hero_capsule()
              )),
            e.hero_capsule_2x() &&
              (this.m_strHeroCapsuleURL_2x = this.ConstructAssetURL(
                r,
                e.hero_capsule_2x()
              )),
            e.library_capsule() &&
              (this.m_strLibraryCapsuleURL = this.ConstructAssetURL(
                r,
                e.library_capsule()
              )),
            e.library_capsule_2x() &&
              (this.m_strLibraryCapsuleURL_2x = this.ConstructAssetURL(
                r,
                e.library_capsule_2x()
              )),
            e.library_hero() &&
              (this.m_strLibraryHeroURL = this.ConstructAssetURL(
                r,
                e.library_hero()
              )),
            e.library_hero_2x() &&
              (this.m_strLibraryHeroURL_2x = this.ConstructAssetURL(
                r,
                e.library_hero_2x()
              ))),
            e.community_icon() &&
              (this.m_strCommunityIcon = `${
                l.d.MEDIA_CDN_COMMUNITY_URL
              }images/apps/${t}/${e.community_icon()}.jpg`);
        }
        GetMainCapsuleURL() {
          return this.m_strMainCapsuleURL;
        }
        GetSmallCapsuleURL() {
          return this.m_strSmallCapsuleURL;
        }
        GetHeaderURL() {
          return this.m_strHeaderURL;
        }
        GetPackageHeaderURL() {
          return this.m_strPackageHeaderURL;
        }
        GetPageBackgroundURL() {
          return this.m_strPageBackgroundURL;
        }
        GetHeroCapsuleURL() {
          return this.m_strHeroCapsuleURL;
        }
        GetHeroCapsuleURL_2x() {
          return this.m_strHeroCapsuleURL_2x;
        }
        GetLibraryCapsuleURL() {
          return this.m_strLibraryCapsuleURL;
        }
        GetLibraryCapsuleURL_2x() {
          return this.m_strLibraryCapsuleURL_2x;
        }
        GetLibraryHeroURL() {
          return this.m_strLibraryHeroURL;
        }
        GetLibraryHeroURL_2x() {
          return this.m_strLibraryHeroURL_2x;
        }
        ConstructAssetURL(e, t) {
          return l.d.MEDIA_CDN_URL + e.replace("${FILENAME}", t);
        }
        GetCommunityIconURL() {
          return this.m_strCommunityIcon;
        }
      }
      class _ {
        constructor(e) {
          (this.m_mapTrailer = new Map()),
            (this.m_higherTrailers = new Array()),
            (this.m_otherTrailers = new Array()),
            e.highlights() &&
              e.highlights().forEach((e) => {
                let t = new m(e);
                this.m_mapTrailer.set(t.GetTrailerID(), t),
                  this.m_higherTrailers.push(t);
              }),
            e.other_trailers() &&
              e.other_trailers().forEach((e) => {
                let t = new m(e);
                this.m_mapTrailer.set(t.GetTrailerID(), t),
                  this.m_otherTrailers.push(t);
              });
        }
        BHasTrailers() {
          return (
            this.m_higherTrailers.length > 0 || this.m_otherTrailers.length > 0
          );
        }
        GetHighlightTrailers() {
          return this.m_higherTrailers;
        }
        GetOtherTrailers() {
          return this.m_otherTrailers;
        }
        GetTrailerByID(e) {
          return this.m_mapTrailer.get(e);
        }
      }
      class m {
        constructor(e) {
          (this.m_strTrailerName = e.trailer_name()),
            (this.m_nBaseID = e.trailer_base_id());
          const t = e.trailer_url_format();
          t &&
            (e.trailer_480p() &&
              (this.m_Trailer480p = this.ExtractTrailerFormats(
                t,
                e.trailer_480p()
              )),
            e.trailer_max() &&
              (this.m_TrailerMax = this.ExtractTrailerFormats(
                t,
                e.trailer_max()
              )),
            e.microtrailer() &&
              (this.m_MicroTrailer = this.ExtractTrailerFormats(
                t,
                e.microtrailer()
              )),
            e.screenshot_medium() &&
              (this.m_strScreenshotMedium = this.ConstructAssetURL(
                t,
                e.screenshot_medium()
              )),
            e.screenshot_full() &&
              (this.m_strScreenshotFull = this.ConstructAssetURL(
                t,
                e.screenshot_full()
              )));
        }
        GetName() {
          return this.m_strTrailerName;
        }
        GetTrailerID() {
          return this.m_nBaseID;
        }
        GetTrailer480p() {
          return this.m_Trailer480p;
        }
        GetTrailerMax() {
          return this.m_TrailerMax;
        }
        GetMicroTrailer() {
          return this.m_MicroTrailer;
        }
        GetScreenshot() {
          return this.m_strScreenshotFull
            ? this.m_strScreenshotFull
            : this.m_strScreenshotMedium;
        }
        ExtractTrailerFormats(e, t) {
          let r = {};
          return (
            t.forEach((t) => {
              "video/mp4" == t.type()
                ? (r.strMP4URL = this.ConstructAssetURL(e, t.filename()))
                : "video/webm" == t.type() &&
                  (r.strWebMURL = this.ConstructAssetURL(e, t.filename()));
            }),
            r
          );
        }
        ConstructAssetURL(e, t) {
          return l.d.MEDIA_CDN_URL + e.replace("${FILENAME}", t);
        }
      }
      class h {
        constructor(e) {
          (this.m_rgAllScreenshots = new Array()),
            (this.m_rgOnlyAllAgesScreenshots = new Array());
          let t = 0,
            r = 0;
          const i = e.all_ages_screenshots() || [],
            s = e.mature_content_screenshots() || [];
          for (; t < i.length || r < s.length; ) {
            let e = t < i.length;
            if (t < i.length && r < s.length) {
              e = i[t].ordinal() < s[r].ordinal();
            }
            if (e) {
              const e = l.d.MEDIA_CDN_URL + i[t].filename();
              this.m_rgAllScreenshots.push(e),
                this.m_rgOnlyAllAgesScreenshots.push(e),
                (t += 1);
            } else {
              const e = l.d.MEDIA_CDN_URL + s[r].filename();
              this.m_rgAllScreenshots.push(e), (r += 1);
            }
          }
        }
        GetAllAgesAndMatureScreenshots() {
          return this.m_rgAllScreenshots;
        }
        GetOnlyAllAgesScreenshots() {
          return this.m_rgOnlyAllAgesScreenshots;
        }
      }
    },
    Ys0h: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return y;
      });
      var i = r("mrSG"),
        s = r("2vnA"),
        n = (r("msu0"), r("Zdsb"), r("9XWO")),
        a = r("rmVU"),
        o = (r("XThB"), r("hRO2")),
        l = r("3dpo"),
        u = r("yfxr");
      const c = o.Message;
      class d extends c {
        constructor(e = null) {
          super(),
            d.prototype.request || l.a(d.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  request: { n: 1, c: u.a },
                  include_unpublished: {
                    n: 2,
                    br: l.d.readBool,
                    bw: l.h.writeBool,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = l.e(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return l.g(d.M(), e, t);
        }
        static fromObject(e) {
          return l.c(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new o.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.b(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.f(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerStoreBrowse_GetItems_Request";
        }
      }
      var _;
      (_ || (_ = {})).GetItems = function (e, t) {
        return e.SendMsg("PartnerStoreBrowse.GetItems#1", t, u.b, {
          bConstMethod: !0,
          ePrivilege: 1,
        });
      };
      var m = r("f5iL"),
        h = r("TqgT"),
        p = r("/Q1a"),
        g = r("FQoL"),
        f = r("X/lQ");
      function b(e, t) {
        if (!e) return t;
        if (!t) return e;
        return {
          include_assets: e.include_assets || t.include_assets,
          include_release: e.include_release || t.include_release,
          include_platforms: e.include_platforms || t.include_platforms,
          include_all_purchase_options:
            e.include_all_purchase_options || t.include_all_purchase_options,
          include_screenshots: e.include_screenshots || t.include_screenshots,
          include_trailers: e.include_trailers || t.include_trailers,
          include_ratings: e.include_ratings || t.include_ratings,
          include_tag_count: Math.max(
            e.include_tag_count || 0,
            t.include_tag_count || 0
          ),
          include_reviews: e.include_reviews || t.include_reviews,
          include_basic_info: e.include_basic_info || t.include_basic_info,
          include_supported_languages:
            e.include_supported_languages || t.include_supported_languages,
        };
      }
      function B(e, t) {
        return Object(i.a)(this, void 0, void 0, function* () {
          const r = yield e,
            i = yield t;
          return 1 != r ? r : i;
        });
      }
      class y {
        constructor() {
          (this.k_QueueWaitUntilRequestMS = 5),
            (this.k_nMaxBatchSize = 250),
            (this.m_mapApps = new Map()),
            (this.m_mapPackages = new Map()),
            (this.m_mapBundles = new Map()),
            (this.m_setUnavailableApps = new Set()),
            (this.m_setUnavailablePackages = new Set()),
            (this.m_setUnavailableBundles = new Set()),
            (this.m_mapAppsInFlight = new Map()),
            (this.m_mapPackageInFlight = new Map()),
            (this.m_mapBundleInFlight = new Map()),
            (this.m_SteamInterface = null),
            (this.m_bUsePartnerAPI = !1),
            (this.m_bInitialized = !1),
            (this.m_setPendingAppInfo = new Set()),
            (this.m_setPendingBundleInfo = new Set()),
            (this.m_setPendingPackageInfo = new Set()),
            (this.m_setPendingDataRequest = {}),
            (this.m_PendingTimer = void 0),
            (this.k_AlreadyResolvedOK = Promise.resolve(1)),
            (this.k_AlreadyResolvedInvalid = Promise.resolve(8));
        }
        static Get() {
          return (
            y.sm_instance ||
              ((y.sm_instance = new y()),
              (window.StoreItemCache = y.sm_instance)),
            y.sm_instance
          );
        }
        static Initialize(e, t) {
          return Object(i.a)(this, void 0, void 0, function* () {
            Object(m.a)(
              !y.Get().m_bInitialized,
              "CStoreItemCache was already initialized; initialize it only once."
            ),
              (y.Get().m_SteamInterface = e),
              (y.Get().m_bUsePartnerAPI = !!t),
              (y.Get().m_bInitialized = !0);
          });
        }
        static BIsInitialized() {
          return y.Get().m_bInitialized;
        }
        QueueAppRequest(e, t) {
          return Object(i.a)(this, void 0, void 0, function* () {
            return this.QueueStoreItemRequest(e, 0, t);
          });
        }
        QueuePackageRequest(e, t) {
          return Object(i.a)(this, void 0, void 0, function* () {
            return this.QueueStoreItemRequest(e, 1, t);
          });
        }
        QueueBundleRequest(e, t) {
          return Object(i.a)(this, void 0, void 0, function* () {
            return this.QueueStoreItemRequest(e, 2, t);
          });
        }
        static ValidateDataRequest(e) {
          const t = [
            e.include_assets,
            e.include_release,
            e.include_platforms,
            e.include_all_purchase_options,
            e.include_screenshots,
            e.include_trailers,
            e.include_ratings,
            e.include_reviews,
            e.include_basic_info,
            e.include_supported_languages,
          ];
          for (const e of t) if (!0 !== e && void 0 !== e) return !1;
          return !0;
        }
        QueueMultipleAppRequests(e, t) {
          return Object(i.a)(this, void 0, void 0, function* () {
            const r = (yield Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, 0, t))
            )).filter((e) => 1 != e);
            return r.length > 0 ? r[0] : 1;
          });
        }
        QueueMultiplePackageRequests(e, t) {
          return Object(i.a)(this, void 0, void 0, function* () {
            const r = (yield Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, 1, t))
            )).filter((e) => 1 != e);
            return r.length > 0 ? r[0] : 1;
          });
        }
        QueueMultipleBundleRequests(e, t) {
          return Object(i.a)(this, void 0, void 0, function* () {
            const r = (yield Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, 2, t))
            )).filter((e) => 1 != e);
            return r.length > 0 ? r[0] : 1;
          });
        }
        QueueMultipleStoreItemRequests(e, t, r) {
          return Object(i.a)(this, void 0, void 0, function* () {
            const i = (yield Promise.all(
              e.map((e, i) => this.QueueStoreItemRequest(e, t[i], r))
            )).filter((e) => 1 != e);
            return i.length > 0 ? i[0] : 1;
          });
        }
        QueueStoreItemRequest(e, t, r) {
          return Object(i.a)(this, void 0, void 0, function* () {
            if (
              (Object(m.a)(
                y.ValidateDataRequest(r),
                "Invalid Data Request: " + JSON.stringify(r)
              ),
              !e)
            )
              return (
                Object(m.a)(
                  !e,
                  `unexpected id ${e} of zero or undefined for type ${t}`
                ),
                this.k_AlreadyResolvedInvalid
              );
            const i = this.GetPreviousSupersetLoadPromise(e, t, r);
            if (i) return i;
            switch (
              (this.m_PendingInfoPromise ||
                ((this.m_PendingInfoPromise = new Promise(
                  (e) => (this.m_PendingInfoResolve = e)
                )),
                (this.m_PendingTimer = window.setTimeout(
                  () => this.FlushPendingInfo(),
                  this.k_QueueWaitUntilRequestMS
                ))),
              (this.m_setPendingDataRequest = b(
                this.m_setPendingDataRequest,
                r
              )),
              t)
            ) {
              case 0:
                this.m_setPendingAppInfo.add(e);
                break;
              case 2:
                this.m_setPendingBundleInfo.add(e);
                break;
              case 1:
                this.m_setPendingPackageInfo.add(e);
                break;
              default:
                Object(m.a)(!1, `Unexpected Type ${t}`);
            }
            const s = this.m_PendingInfoPromise;
            return (
              this.m_setPendingAppInfo.size +
                this.m_setPendingPackageInfo.size +
                this.m_setPendingBundleInfo.size >=
                this.k_nMaxBatchSize &&
                (this.m_PendingTimer &&
                  window.clearTimeout(this.m_PendingTimer),
                this.FlushPendingInfo()),
              s
            );
          });
        }
        FlushPendingInfo() {
          return Object(i.a)(this, void 0, void 0, function* () {
            const e = this.m_PendingInfoResolve,
              t = Array.from(this.m_setPendingAppInfo),
              r = Array.from(this.m_setPendingPackageInfo),
              i = Array.from(this.m_setPendingBundleInfo),
              s = this.m_setPendingDataRequest;
            (this.m_PendingInfoPromise = void 0),
              (this.m_PendingInfoResolve = void 0),
              this.m_setPendingAppInfo.clear(),
              this.m_setPendingBundleInfo.clear(),
              this.m_setPendingPackageInfo.clear(),
              (this.m_setPendingDataRequest = {}),
              (this.m_PendingTimer = void 0),
              this.HintLoadStoreItems(void 0, t, r, i, s).then((t) => e(t));
          });
        }
        HintLoadStoreApps(e, t) {
          return Object(i.a)(this, void 0, void 0, function* () {
            return this.HintLoadStoreItems(null, e, null, null, t);
          });
        }
        HintLoadStorePackages(e, t) {
          return Object(i.a)(this, void 0, void 0, function* () {
            return this.HintLoadStoreItems(null, null, e, null, t);
          });
        }
        HintLoadStoreBundles(e, t) {
          return Object(i.a)(this, void 0, void 0, function* () {
            return this.HintLoadStoreItems(null, null, null, e, t);
          });
        }
        GetPreviousSupersetLoadPromise(e, t, r) {
          if (this.BHasStoreItem(e, t, r) || this.BIsStoreItemMissing(e, t))
            return this.k_AlreadyResolvedOK;
          let i = null;
          switch (t) {
            case 0:
              i = this.m_mapAppsInFlight.get(e);
              break;
            case 1:
              i = this.m_mapPackageInFlight.get(e);
              break;
            case 2:
              i = this.m_mapBundleInFlight.get(e);
          }
          return i && f.a.BDataRequestContainsOtherDataRequest(i.dataRequest, r)
            ? i.promise
            : null;
        }
        HintLoadStoreItems(e, t, r, s, n) {
          return Object(i.a)(this, void 0, void 0, function* () {
            let i = null;
            const a = new Promise((e) => (i = e));
            let o = [],
              l = [];
            (t || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(e, 0, n);
              if (t) l.push(t);
              else {
                o.push(u.g.fromObject({ appid: e }));
                let t = b(this.GetStoreItemDataRequest(e, 0), n);
                const r = this.m_mapAppsInFlight.get(e);
                (t = b(null == r ? void 0 : r.dataRequest, t)),
                  r && l.push(r.promise),
                  this.m_mapAppsInFlight.set(e, {
                    promise: r ? B(r.promise, a) : a,
                    dataRequest: t,
                  });
              }
            }),
              (r || []).forEach((e) => {
                const t = this.GetPreviousSupersetLoadPromise(e, 1, n);
                if (t) l.push(t);
                else {
                  o.push(u.g.fromObject({ packageid: e }));
                  let t = b(this.GetStoreItemDataRequest(e, 1), n);
                  const r = this.m_mapPackageInFlight.get(e);
                  (t = b(null == r ? void 0 : r.dataRequest, t)),
                    r && l.push(r.promise),
                    this.m_mapPackageInFlight.set(e, {
                      promise: r ? B(r.promise, a) : a,
                      dataRequest: t,
                    });
                }
              }),
              (s || []).forEach((e) => {
                const t = this.GetPreviousSupersetLoadPromise(e, 2, n);
                if (t) l.push(t);
                else {
                  o.push(u.g.fromObject({ bundleid: e }));
                  let t = b(this.GetStoreItemDataRequest(e, 2), n);
                  const r = this.m_mapBundleInFlight.get(e);
                  (t = b(null == r ? void 0 : r.dataRequest, t)),
                    r && l.push(r.promise),
                    this.m_mapBundleInFlight.set(e, {
                      promise: r ? B(r.promise, a) : a,
                      dataRequest: t,
                    });
                }
              });
            let c = 1;
            if (
              (o.length > 0 &&
                (c = yield this.InternalHandleLoadStoreItems(e, o, n)),
              i(c),
              l.length > 0)
            ) {
              const e = yield Promise.all(l);
              for (const t of e) 1 != t && 1 == c && (c = t);
            }
            return (
              (t || []).forEach((e) => this.m_mapAppsInFlight.delete(e)),
              (r || []).forEach((e) => this.m_mapPackageInFlight.delete(e)),
              (s || []).forEach((e) => this.m_mapBundleInFlight.delete(e)),
              c
            );
          });
        }
        MarkStoreItemIDUnavailable(e) {
          (e || []).forEach((e) => {
            e.appid()
              ? (this.m_setUnavailableApps.add(e.appid()),
                this.m_mapApps.delete(e.appid()))
              : e.packageid()
              ? (this.m_setUnavailablePackages.add(e.packageid()),
                this.m_mapPackages.delete(e.packageid()))
              : e.bundleid() &&
                (this.m_setUnavailableBundles.add(e.bundleid()),
                this.m_mapBundles.delete(e.bundleid()));
          });
        }
        SortStoreItems(e) {
          let t = e.slice();
          return (
            t.sort((e, t) => {
              var r, i, s, n, a, o;
              let l = null !== (r = e.appid()) && void 0 !== r ? r : 0,
                u = null !== (i = t.appid()) && void 0 !== i ? i : 0;
              if (l != u) return l - u;
              let c = null !== (s = e.packageid()) && void 0 !== s ? s : 0,
                d = null !== (n = t.packageid()) && void 0 !== n ? n : 0;
              if (c != d) return c - d;
              let _ = null !== (a = e.bundleid()) && void 0 !== a ? a : 0,
                m = null !== (o = t.bundleid()) && void 0 !== o ? o : 0;
              return _ != m ? _ - m : 0;
            }),
            t
          );
        }
        InternalHandleLoadStoreItems(e, t, r) {
          return Object(i.a)(this, void 0, void 0, function* () {
            let i = 1;
            e ||
              (this.m_SteamInterface ||
                (this.m_SteamInterface = new a.a(p.d.WEBAPI_BASE_URL)),
              (e = this.m_SteamInterface)),
              (t = this.SortStoreItems(t));
            const o = new Array();
            try {
              const a = [];
              for (; t.length > 0; ) {
                const i = t.splice(0, this.k_nMaxBatchSize);
                if ((o.push(i), this.m_bUsePartnerAPI)) {
                  const t = n.b.Init(d);
                  t.Body().set_include_unpublished(!1);
                  const s = t.Body().request(!0);
                  s.set_context(Object(g.a)(this.m_bUsePartnerAPI)),
                    s.set_data_request(u.d.fromObject(r)),
                    s.set_ids(i),
                    a.push(_.GetItems(e.GetServiceTransport(), t));
                } else {
                  const t = n.b.Init(u.a);
                  Object(g.b)(t, this.m_bUsePartnerAPI),
                    Object(g.c)(t, r),
                    t.Body().set_ids(i),
                    a.push(u.e.GetItems(e.GetAnonymousServiceTransport(), t));
                }
              }
              (yield Promise.all(a)).forEach((e, n) => {
                1 == e.GetEResult()
                  ? e
                      .Body()
                      .store_items()
                      .forEach((e) => {
                        const t = e.id(),
                          i = e.item_type();
                        if (1 != e.success() || this.BIsStoreItemMissing(t, i))
                          switch (
                            ("dev" == p.d.WEB_UNIVERSE &&
                              console.warn(
                                `Failed to load ${t} type ${i} with error ${e.success()}`,
                                e
                              ),
                            i)
                          ) {
                            case 0:
                              this.m_setUnavailableApps.add(t),
                                this.m_mapApps.delete(t);
                              break;
                            case 1:
                              this.m_setUnavailablePackages.add(t),
                                this.m_mapPackages.delete(t);
                              break;
                            case 2:
                              this.m_setUnavailableBundles.add(t),
                                this.m_mapBundles.delete(t);
                              break;
                            default:
                              console.error(
                                "CStoreItemCache.InternalHandleLoadStoreItems unexpected item_type in response " +
                                  i +
                                  " " +
                                  t
                              );
                          }
                        else this.ReadItem(e, r);
                      })
                  : (console.error(
                      "CStoreItemCache::InternalHandleLoadStoreItems failed with eResult: " +
                        e.GetEResult() +
                        " message: " +
                        e.Hdr().error_message(),
                      Object(s.I)(t)
                    ),
                    (1 == e.Hdr().transport_error() || p.d.FROM_WEB) &&
                      this.MarkStoreItemIDUnavailable(o[n]),
                    1 == i && (i = e.GetEResult()));
              });
            } catch (e) {
              const t = Object(h.a)(e);
              return (
                console.error(
                  "CStoreItemCache::InternalHandleLoadStoreItems failed: " +
                    t.strErrorMsg,
                  t
                ),
                o.forEach((e) => this.MarkStoreItemIDUnavailable(e)),
                79
              );
            }
            return i;
          });
        }
        GetMapForType(e) {
          let t;
          switch (e) {
            case 0:
              t = this.m_mapApps;
              break;
            case 2:
              t = this.m_mapBundles;
              break;
            case 1:
              t = this.m_mapPackages;
              break;
            default:
              console.error("Invalid map type requested", e);
          }
          return t;
        }
        BHasStoreItem(e, t, r) {
          let i = this.GetMapForType(t);
          return Boolean(
            i && i.has(e) && (!r || i.get(e).BContainDataRequest(r))
          );
        }
        GetStoreItem(e, t) {
          if (-1 == t || 3 == t) return;
          const r = this.GetMapForType(t);
          return null == r ? void 0 : r.get(e);
        }
        GetStoreItemDataRequest(e, t) {
          var r, i;
          return (
            (null ===
              (i =
                null === (r = this.GetMapForType(t)) || void 0 === r
                  ? void 0
                  : r.get(e)) || void 0 === i
              ? void 0
              : i.GetDataRequest()) || null
          );
        }
        BHasApp(e, t) {
          return this.BHasStoreItem(e, 0, t);
        }
        GetApp(e) {
          return this.GetStoreItem(e, 0);
        }
        BHasPackage(e, t) {
          return this.BHasStoreItem(e, 1, t);
        }
        GetPackage(e) {
          return this.GetStoreItem(e, 1);
        }
        BHasBundle(e, t) {
          return this.BHasStoreItem(e, 2, t);
        }
        GetBundle(e) {
          return this.GetStoreItem(e, 2);
        }
        BIsStoreItemMissing(e, t) {
          switch (t) {
            case 0:
              return this.BIsAppMissing(e);
            case 1:
              return this.BIsPackageMissing(e);
            case 2:
              return this.BIsBundleMissing(e);
            default:
              return console.error("BStoreItemMissing invalid type", t), !0;
          }
        }
        BIsAppMissing(e) {
          return this.m_setUnavailableApps.has(e);
        }
        BIsPackageMissing(e) {
          return this.m_setUnavailablePackages.has(e);
        }
        BIsBundleMissing(e) {
          return this.m_setUnavailableBundles.has(e);
        }
        ReadResults(e, t) {
          let r = [];
          for (const i of e) r.push(this.ReadItem(i, t));
          return r;
        }
        ReadItem(e, t) {
          const r = e.item_type();
          let i = null;
          switch (r) {
            case 0:
              i = this.m_mapApps;
              break;
            case 1:
              i = this.m_mapPackages;
              break;
            case 2:
              i = this.m_mapBundles;
              break;
            default:
              return console.error(`Invalid item type: ${r}`), null;
          }
          let s = i.get(e.id());
          return (
            s ? s.MergeData(e, t) : ((s = new f.a(e, t)), i.set(e.id(), s)), s
          );
        }
      }
      (y.k_DataRequest_CommonOnly = {}),
        (y.k_DataRequest_BasicInfo = { include_basic_info: !0 }),
        (y.k_DataRequest_Assets = { include_assets: !0 }),
        (y.k_DataRequest_IncludeAll = {
          include_assets: !0,
          include_release: !0,
          include_platforms: !0,
          include_all_purchase_options: !0,
          include_screenshots: !0,
          include_trailers: !0,
          include_ratings: !0,
          include_tag_count: 20,
          include_reviews: !0,
          include_basic_info: !0,
          include_supported_languages: !0,
        });
    },
    hAgw: function (e, t, r) {
      "use strict";
      r.d(t, "e", function () {
        return h;
      }),
        r.d(t, "c", function () {
          return p;
        }),
        r.d(t, "d", function () {
          return g;
        }),
        r.d(t, "a", function () {
          return f;
        }),
        r.d(t, "b", function () {
          return b;
        });
      r("Zdsb");
      var i = r("hRO2"),
        s = r("3dpo");
      const n = i.Message;
      class a extends n {
        constructor(e = null) {
          super(),
            a.prototype.gid || s.a(a.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            a.sm_m ||
              (a.sm_m = {
                proto: a,
                fields: {
                  gid: {
                    n: 1,
                    br: s.d.readFixed64String,
                    bw: s.h.writeFixed64String,
                  },
                  title: { n: 2, br: s.d.readString, bw: s.h.writeString },
                  type: { n: 3, br: s.d.readEnum, bw: s.h.writeEnum },
                  visibility: { n: 4, br: s.d.readEnum, bw: s.h.writeEnum },
                  priority: { n: 5, br: s.d.readUint32, bw: s.h.writeUint32 },
                  association_type: {
                    n: 6,
                    br: s.d.readEnum,
                    bw: s.h.writeEnum,
                  },
                  associated_id: {
                    n: 7,
                    br: s.d.readUint32,
                    bw: s.h.writeUint32,
                  },
                  associated_name: {
                    n: 8,
                    br: s.d.readString,
                    bw: s.h.writeString,
                  },
                  start_date: { n: 9, br: s.d.readUint32, bw: s.h.writeUint32 },
                  end_date: { n: 10, br: s.d.readUint32, bw: s.h.writeUint32 },
                  country_allow: {
                    n: 11,
                    br: s.d.readString,
                    bw: s.h.writeString,
                  },
                  country_deny: {
                    n: 12,
                    br: s.d.readString,
                    bw: s.h.writeString,
                  },
                  ownership_restrictions_overridden: {
                    n: 13,
                    br: s.d.readBool,
                    bw: s.h.writeBool,
                  },
                  must_own_appid: {
                    n: 14,
                    br: s.d.readUint32,
                    bw: s.h.writeUint32,
                  },
                  must_not_own_appid: {
                    n: 15,
                    br: s.d.readUint32,
                    bw: s.h.writeUint32,
                  },
                  must_own_packageid: {
                    n: 16,
                    br: s.d.readUint32,
                    bw: s.h.writeUint32,
                  },
                  must_not_own_packageid: {
                    n: 17,
                    br: s.d.readUint32,
                    bw: s.h.writeUint32,
                  },
                  must_have_launched_appid: {
                    n: 18,
                    br: s.d.readUint32,
                    bw: s.h.writeUint32,
                  },
                  additional_restrictions: {
                    n: 19,
                    br: s.d.readString,
                    bw: s.h.writeString,
                  },
                  template_type: {
                    n: 20,
                    br: s.d.readString,
                    bw: s.h.writeString,
                  },
                  template_vars: {
                    n: 21,
                    br: s.d.readString,
                    bw: s.h.writeString,
                  },
                  flags: { n: 22, br: s.d.readUint32, bw: s.h.writeUint32 },
                  creator_name: {
                    n: 23,
                    br: s.d.readString,
                    bw: s.h.writeString,
                  },
                },
              }),
            a.sm_m
          );
        }
        static MBF() {
          return a.sm_mbf || (a.sm_mbf = s.e(a.M())), a.sm_mbf;
        }
        toObject(e = !1) {
          return a.toObject(e, this);
        }
        static toObject(e, t) {
          return s.g(a.M(), e, t);
        }
        static fromObject(e) {
          return s.c(a.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new a();
          return a.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.b(a.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.f(a.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessageProto";
        }
      }
      class o extends n {
        constructor(e = null) {
          super(),
            o.prototype.messages || s.a(o.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  messages: { n: 1, c: a, r: !0, q: !0 },
                  time_next_message_age: {
                    n: 2,
                    br: s.d.readUint32,
                    bw: s.h.writeUint32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = s.e(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return s.g(o.M(), e, t);
        }
        static fromObject(e) {
          return s.c(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.b(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.f(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetActiveMarketingMessages_Response";
        }
      }
      class l extends n {
        constructor(e = null) {
          super(),
            l.prototype.message || s.a(l.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = { proto: l, fields: { message: { n: 1, c: a } } }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = s.e(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return s.g(l.M(), e, t);
        }
        static fromObject(e) {
          return s.c(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.b(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.f(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessage_Response";
        }
      }
      class u extends n {
        constructor(e = null) {
          super(),
            u.prototype.messages || s.a(u.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: { messages: { n: 1, c: a, r: !0, q: !0 } },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = s.e(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return s.g(u.M(), e, t);
        }
        static fromObject(e) {
          return s.c(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.b(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.f(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_FindMarketingMessages_Response";
        }
      }
      class c extends n {
        constructor(e = null) {
          super(),
            c.prototype.gid || s.a(c.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  gid: {
                    n: 1,
                    br: s.d.readFixed64String,
                    bw: s.h.writeFixed64String,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = s.e(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return s.g(c.M(), e, t);
        }
        static fromObject(e) {
          return s.c(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.b(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.f(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_CreateMarketingMessage_Response";
        }
      }
      class d extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new d();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_UpdateMarketingMessage_Response";
        }
      }
      class _ extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new _();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_DeleteMarketingMessage_Response";
        }
      }
      var m;
      !(function (e) {
        (e.GetActiveMarketingMessages = function (e, t) {
          return e.SendMsg(
            "MarketingMessages.GetActiveMarketingMessages#1",
            t,
            o,
            { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 }
          );
        }),
          (e.GetMarketingMessage = function (e, t) {
            return e.SendMsg("MarketingMessages.GetMarketingMessage#1", t, l, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.CreateMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.CreateMarketingMessage#1",
              t,
              c,
              { ePrivilege: 4 }
            );
          }),
          (e.UpdateMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.UpdateMarketingMessage#1",
              t,
              d,
              { ePrivilege: 4 }
            );
          }),
          (e.DeleteMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.DeleteMarketingMessage#1",
              t,
              _,
              { ePrivilege: 4 }
            );
          }),
          (e.FindMarketingMessages = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.FindMarketingMessages#1",
              t,
              u,
              { ePrivilege: 4 }
            );
          });
      })(m || (m = {}));
      var h;
      r("yfxr");
      function p(e) {
        switch (e) {
          case 0:
            return "app";
          case 2:
            return "bundle";
          case 1:
            return "package";
          case 3:
            return "mtx";
        }
        return "invalid";
      }
      function g(e) {
        switch (e) {
          case "sub":
            return 1;
          case "bundle":
            return 2;
          default:
            return 0;
        }
      }
      function f(e, t) {
        switch (e) {
          case 2:
            return "bundle";
          case 1:
            return "sub";
          default:
            switch (t) {
              case 0:
                return "game";
              case 12:
                return "beta";
              case 4:
                return "dlc";
              case 1:
                return "demo";
              case 6:
                return "software";
              case 7:
              case 3:
                return "video";
              case 10:
                return "hardware";
              case 11:
                return "music";
              case 13:
                return "tool";
              case 2:
                return "mod";
              case 9:
                return "episode";
              case 8:
                return "series";
              default:
                return "game";
            }
        }
      }
      function b(e) {
        switch (e) {
          case 2:
            return "bundle";
          case 1:
            return "sub";
          default:
            return "app";
        }
      }
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
      })(h || (h = {}));
    },
    pY4P: function (e, t, r) {
      "use strict";
      r.d(t, "f", function () {
        return o;
      }),
        r.d(t, "g", function () {
          return l;
        }),
        r.d(t, "e", function () {
          return c;
        }),
        r.d(t, "d", function () {
          return d;
        }),
        r.d(t, "b", function () {
          return _;
        }),
        r.d(t, "c", function () {
          return m;
        }),
        r.d(t, "a", function () {
          return p;
        });
      var i = r("q1tI"),
        s = r("msu0"),
        n = r("/Q1a"),
        a = r("t3nn");
      const o = [
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "smalltext",
          "b",
          "u",
          "hr",
          "i",
          "img",
          "strike",
          "spoiler",
          "noparse",
          "url",
          "list",
          "olist",
          "quote",
          "pullquote",
          "code",
          "table",
          "tr",
          "td",
          "th",
          "previewyoutube",
          "looping_media",
          "roomeffect",
          "sticker",
          "price",
          "pricesavings",
          "trailer",
          "speaker",
          "doclink",
        ],
        l = [
          "h1",
          "h2",
          "h3",
          "b",
          "u",
          "i",
          "strike",
          "spoiler",
          "noparse",
          "url",
        ],
        u = ["img", "previewyoutube", "looping_media", "roomeffect"],
        c = (o.filter((e) => -1 == u.indexOf(e)), "{STEAM_CLAN_IMAGE}"),
        d = "{STEAM_CLAN_LOC_IMAGE}";
      function _(e, t = null, r = " ") {
        let i = null == t ? void 0 : t.join("|");
        i || (i = o.join("|") + "|\\*");
        let s = new RegExp("\\[(" + i + ")\\b[^\\]]*\\].*?\\[/\\1\\]", "gi");
        return e.replace(s, r);
      }
      function m(e, t = null, r = "") {
        let i = null == t ? void 0 : t.join("|");
        i || (i = o.join("|") + "|\\*");
        let s = "\\[\\/?(?:" + i + "){1,}.*?]";
        return e.replace(new RegExp(s, "gi"), r);
      }
      function h(e, t, r = 0) {
        if (2 == t.type) {
          let e = t.text.indexOf("="),
            r = t.text.indexOf(" ");
          if ((-1 != r && (-1 == e || r < e) && (e = r), e > 0)) {
            t.tag = t.text.substr(0, e).toLocaleLowerCase();
            let r = t.text.substr(e);
            t.args = (function (e) {
              if (!e || e.length < 1) return {};
              let t = {},
                r = "",
                i = "",
                s = 0,
                n = 0;
              "=" == e[0] && (s = 2);
              let a = !1;
              for (n++; n < e.length; n++) {
                let o = e[n],
                  l = !0,
                  u = !1;
                switch (s) {
                  case 0:
                    if ("=" == o) return {};
                    if (" " == o) continue;
                    s = 1;
                    break;
                  case 1:
                    ("=" != o && " " != o) ||
                      a ||
                      (" " == o ? ((s = 0), (u = !0)) : (s = 2), (l = !1));
                    break;
                  case 2:
                    " " == o
                      ? ((s = 0), (l = !1), (u = !0))
                      : '"' == o
                      ? ((s = 4), (l = !1))
                      : (s = 3);
                    break;
                  case 3:
                  case 4:
                    ((" " == o && 4 != s && !a) ||
                      ('"' == o && 4 == s && !a)) &&
                      ((s = 0), (l = !1), (u = !0));
                }
                if (l)
                  if ("\\" != o || a)
                    if (((a = !1), 1 == s)) r += o;
                    else {
                      if (3 != s && 4 != s)
                        throw new Error(
                          "Not expecting to accumulate buffer in state " + s
                        );
                      i += o;
                    }
                  else a = !0;
                u && ((t[r] = i), (r = ""), (i = ""));
              }
              0 != s && (t[r] = i);
              return t;
            })(r);
          } else (t.args = {}), (t.tag = t.text.toLocaleLowerCase());
        }
        e.push(t);
        let i = new g();
        return (i.type = r), i;
      }
      class p {
        constructor(e, t = () => new a.b(), r) {
          (this.m_dictComponents = void 0),
            (this.m_dictComponents = e),
            (this.m_fnAccumulatorFactory = t),
            (this.m_renderingLanguage = r || Object(s.g)(n.d.LANGUAGE));
        }
        UpdateOverrideLanguage(e) {
          this.m_renderingLanguage = e || Object(s.g)(n.d.LANGUAGE);
        }
        ParseBBCode(e, t, r = !1) {
          const i = (function (e, t) {
            const r = [];
            let i = new g(),
              s = !1,
              n = !1,
              a = !1;
            for (let o = 0; o < e.length; o++) {
              let l = e[o];
              switch (i.type) {
                case 0:
                  "[" == l
                    ? ((i.type = 2), (n = !0))
                    : ((i.type = 1), "\\" == l && t ? (s = !s) : (i.text += l));
                  break;
                case 2:
                case 3:
                  if ("/" == l && n) (i.type = 3), (i.text = ""), (n = !1);
                  else if ("[" != l || s)
                    if ("]" != l || s)
                      "\\" == l && t
                        ? ((i.text += l), (s = !s), (n = !1))
                        : ((i.text += l), (s = !1), (n = !1));
                    else {
                      const e =
                          2 == i.type &&
                          "noparse" == i.text.toLocaleLowerCase(),
                        t =
                          3 == i.type &&
                          "noparse" == i.text.toLocaleLowerCase();
                      n || (a && !t)
                        ? (i.ConvertMalformedNodeToText(), (i.text += l))
                        : e
                        ? (a = !0)
                        : t && (a = !1),
                        (i = h(r, i)),
                        (n = !1);
                    }
                  else
                    i.ConvertMalformedNodeToText(), (i = h(r, i, 2)), (n = !0);
                  break;
                case 1:
                  "[" != l || s
                    ? "\\" == l && t
                      ? (s && (i.text += l), (s = !s))
                      : (s && ((i.text += "\\"), (s = !1)), (i.text += l))
                    : ((i = h(r, i, 2)), (n = !0));
              }
            }
            return (
              0 != i.type &&
                ((2 != i.type && 3 != i.type) || i.ConvertMalformedNodeToText(),
                r.push(i)),
              r
            );
          })(e, r);
          return this.Parse_BuildReactComponents(i, t);
        }
        Parse_BuildReactComponents(e, t) {
          let r = this.m_fnAccumulatorFactory(void 0),
            s = [],
            n = function () {
              return s.length < 1 ? void 0 : s[s.length - 1];
            },
            a = this.m_dictComponents,
            o = this.m_renderingLanguage,
            l = !1,
            u = !0,
            c = function (e, n, c) {
              if (e && e.node.tag === n.text && a.get(e.node.tag)) {
                const n = a.get(e.node.tag),
                  d = s.map((e) => e.node.tag),
                  _ = {
                    context: t,
                    parentTags: d,
                    tagname: e.node.tag,
                    args: e.node.args,
                    language: o,
                    key: `${e.node.tag}_${c}`,
                  },
                  m = i.createElement(n.Constructor, _, ...r.GetElements());
                (r = e.accumulator),
                  r.AppendNode(m),
                  (l = n.skipFollowingNewline),
                  (u = e.bWrapTextForCopying);
              } else if (e) {
                let t = e.accumulator;
                t.AppendText("[" + e.node.text + "]", !1),
                  r.GetElements().forEach((e) => t.AppendNode(e)),
                  t.AppendText("[/" + n.text + "]", !1),
                  (r = t),
                  (u = e.bWrapTextForCopying);
              }
            };
          for (
            e.forEach((e, t) => {
              var i, o;
              if (1 == e.type) {
                const t = l ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                r.AppendText(t, u), (l = !1);
              } else if (2 == e.type) {
                const o = a.get(e.tag);
                if (o) {
                  const d = n();
                  if (void 0 !== d) {
                    const r = a.get(d.node.tag);
                    r &&
                      r.autocloses &&
                      e.tag === d.node.tag &&
                      c(s.pop(), d.node, t);
                  }
                  s.push({ accumulator: r, node: e, bWrapTextForCopying: u }),
                    (r = this.m_fnAccumulatorFactory(e)),
                    (l = o.skipInternalNewline),
                    (u =
                      null !== (i = o.allowWrapTextForCopying) &&
                      void 0 !== i &&
                      i);
                } else r.AppendText("[" + e.text + "]", 0 == s.length);
              } else if (3 == e.type) {
                for (
                  ;
                  n() &&
                  n().node.tag !== e.text &&
                  a.get(n().node.tag) &&
                  a.get(n().node.tag).autocloses;

                ) {
                  const e = s.pop();
                  c(e, e.node, t);
                }
                if (
                  (null === (o = n()) || void 0 === o ? void 0 : o.node.tag) ==
                  e.text
                ) {
                  const r = s.pop();
                  c(r, e, t);
                } else r.AppendText("[/" + e.text + "]", 0 == s.length);
              }
            });
            s.length > 0;

          ) {
            let e = s.pop(),
              t = e.accumulator;
            t.AppendText("[" + e.node.text + "]", !1),
              r.GetElements().forEach((e) => t.AppendNode(e)),
              (r = t);
          }
          let d = r.GetElements();
          return d.length > 1
            ? i.createElement(i.Fragment, null, ...d)
            : 1 == d.length
            ? d[0]
            : null;
        }
      }
      class g {
        constructor() {
          (this.type = 0), (this.text = "");
        }
        ConvertMalformedNodeToText() {
          3 == this.type
            ? (this.text = "[/" + this.text)
            : 2 == this.type && (this.text = "[" + this.text),
            (this.type = 1);
        }
      }
    },
    qisX: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return o;
      }),
        r.d(t, "b", function () {
          return c;
        }),
        r.d(t, "c", function () {
          return m;
        }),
        r.d(t, "d", function () {
          return g;
        });
      var i = r("hRO2"),
        s = r("3dpo"),
        n = (r("Qhkv"), r("yfxr"));
      const a = i.Message;
      class o extends a {
        constructor(e = null) {
          super(),
            o.prototype.released_only || s.a(o.M()),
            a.initialize(this, e, 0, -1, [10, 11, 15, 16], null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  released_only: { n: 1, br: s.d.readBool, bw: s.h.writeBool },
                  coming_soon_only: {
                    n: 2,
                    br: s.d.readBool,
                    bw: s.h.writeBool,
                  },
                  type_filters: { n: 3, c: l },
                  tagids_must_match: { n: 10, c: u, r: !0, q: !0 },
                  tagids_exclude: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: s.d.readInt32,
                    bw: s.h.writeRepeatedInt32,
                  },
                  content_descriptors_must_match: {
                    n: 15,
                    r: !0,
                    q: !0,
                    br: s.d.readEnum,
                    bw: s.h.writeRepeatedEnum,
                  },
                  content_descriptors_excluded: {
                    n: 16,
                    r: !0,
                    q: !0,
                    br: s.d.readEnum,
                    bw: s.h.writeRepeatedEnum,
                  },
                  regional_top_n_sellers: {
                    n: 40,
                    br: s.d.readInt32,
                    bw: s.h.writeInt32,
                  },
                  global_top_n_sellers: {
                    n: 41,
                    br: s.d.readInt32,
                    bw: s.h.writeInt32,
                  },
                  regional_long_term_top_n_sellers: {
                    n: 42,
                    br: s.d.readInt32,
                    bw: s.h.writeInt32,
                  },
                  global_long_term_top_n_sellers: {
                    n: 43,
                    br: s.d.readInt32,
                    bw: s.h.writeInt32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = s.e(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return s.g(o.M(), e, t);
        }
        static fromObject(e) {
          return s.c(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.b(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.f(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryFilters";
        }
      }
      class l extends a {
        constructor(e = null) {
          super(),
            l.prototype.include_apps || s.a(l.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  include_apps: { n: 1, br: s.d.readBool, bw: s.h.writeBool },
                  include_packages: {
                    n: 2,
                    br: s.d.readBool,
                    bw: s.h.writeBool,
                  },
                  include_bundles: {
                    n: 3,
                    br: s.d.readBool,
                    bw: s.h.writeBool,
                  },
                  include_games: { n: 10, br: s.d.readBool, bw: s.h.writeBool },
                  include_demos: { n: 11, br: s.d.readBool, bw: s.h.writeBool },
                  include_mods: { n: 12, br: s.d.readBool, bw: s.h.writeBool },
                  include_dlc: { n: 13, br: s.d.readBool, bw: s.h.writeBool },
                  include_software: {
                    n: 14,
                    br: s.d.readBool,
                    bw: s.h.writeBool,
                  },
                  include_video: { n: 15, br: s.d.readBool, bw: s.h.writeBool },
                  include_hardware: {
                    n: 16,
                    br: s.d.readBool,
                    bw: s.h.writeBool,
                  },
                  include_series: {
                    n: 17,
                    br: s.d.readBool,
                    bw: s.h.writeBool,
                  },
                  include_music: { n: 18, br: s.d.readBool, bw: s.h.writeBool },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = s.e(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return s.g(l.M(), e, t);
        }
        static fromObject(e) {
          return s.c(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.b(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.f(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryFilters_TypeFilters";
        }
      }
      class u extends a {
        constructor(e = null) {
          super(),
            u.prototype.tagids || s.a(u.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  tagids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: s.d.readInt32,
                    bw: s.h.writeRepeatedInt32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = s.e(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return s.g(u.M(), e, t);
        }
        static fromObject(e) {
          return s.c(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.b(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.f(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryFilters_TagFilter";
        }
      }
      class c extends a {
        constructor(e = null) {
          super(),
            c.prototype.start || s.a(c.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  start: { n: 1, d: 0, br: s.d.readInt32, bw: s.h.writeInt32 },
                  count: { n: 2, d: 10, br: s.d.readInt32, bw: s.h.writeInt32 },
                  sort: { n: 10, d: 0, br: s.d.readEnum, bw: s.h.writeEnum },
                  filters: { n: 20, c: o },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = s.e(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return s.g(c.M(), e, t);
        }
        static fromObject(e) {
          return s.c(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.b(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.f(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryParams";
        }
      }
      class d extends a {
        constructor(e = null) {
          super(),
            d.prototype.id || s.a(d.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  id: { n: 1, c: n.g },
                  score: { n: 2, br: s.d.readDouble, bw: s.h.writeDouble },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = s.e(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return s.g(d.M(), e, t);
        }
        static fromObject(e) {
          return s.c(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.b(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.f(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryPerResultMetadata";
        }
      }
      class _ extends a {
        constructor(e = null) {
          super(),
            _.prototype.total_matching_records || s.a(_.M()),
            a.initialize(this, e, 0, -1, [4], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  total_matching_records: {
                    n: 1,
                    br: s.d.readInt32,
                    bw: s.h.writeInt32,
                  },
                  start: { n: 2, br: s.d.readInt32, bw: s.h.writeInt32 },
                  count: { n: 3, br: s.d.readInt32, bw: s.h.writeInt32 },
                  per_result_metadata: { n: 4, c: d, r: !0, q: !0 },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = s.e(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return s.g(_.M(), e, t);
        }
        static fromObject(e) {
          return s.c(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.b(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.f(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryResultMetadata";
        }
      }
      class m extends a {
        constructor(e = null) {
          super(),
            m.prototype.query_name || s.a(m.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  query_name: { n: 1, br: s.d.readString, bw: s.h.writeString },
                  query: { n: 2, c: c },
                  context: { n: 3, c: n.c },
                  data_request: { n: 4, c: n.d },
                  override_country_code: {
                    n: 5,
                    br: s.d.readString,
                    bw: s.h.writeString,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = s.e(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return s.g(m.M(), e, t);
        }
        static fromObject(e) {
          return s.c(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.b(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.f(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_Query_Request";
        }
      }
      class h extends a {
        constructor(e = null) {
          super(),
            h.prototype.metadata || s.a(h.M()),
            a.initialize(this, e, 0, -1, [2, 3], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  metadata: { n: 1, c: _ },
                  ids: { n: 2, c: n.g, r: !0, q: !0 },
                  store_items: { n: 3, c: n.f, r: !0, q: !0 },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = s.e(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return s.g(h.M(), e, t);
        }
        static fromObject(e) {
          return s.c(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.b(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.f(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_Query_Response";
        }
      }
      class p extends a {
        constructor(e = null) {
          super(),
            p.prototype.metadata || s.a(p.M()),
            a.initialize(this, e, 0, -1, [2, 3], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  metadata: { n: 1, c: _ },
                  ids: { n: 2, c: n.g, r: !0, q: !0 },
                  store_items: { n: 3, c: n.f, r: !0, q: !0 },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = s.e(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return s.g(p.M(), e, t);
        }
        static fromObject(e) {
          return s.c(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.b(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.f(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_SearchSuggestions_Response";
        }
      }
      var g;
      !(function (e) {
        (e.Query = function (e, t) {
          return e.SendMsg("StoreQuery.Query#1", t, h, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.SearchSuggestions = function (e, t) {
            return e.SendMsg("StoreQuery.SearchSuggestions#1", t, p, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(g || (g = {}));
    },
    t3nn: function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return n;
      }),
        r.d(t, "a", function () {
          return a;
        }),
        r.d(t, "c", function () {
          return o;
        });
      var i = r("q1tI"),
        s = r("f5iL");
      r("pY4P");
      class n {
        constructor() {
          this.reactNodes = [];
        }
        AppendText(e, t = !1) {
          e.length &&
            (t
              ? this.reactNodes.push(
                  i.createElement(
                    "span",
                    {
                      "data-copytext": "",
                      "data-copystyle": "merge-adjacent",
                      "bbcode-text": e,
                    },
                    e
                  )
                )
              : this.reactNodes.push(e));
        }
        AppendNode(e) {
          this.reactNodes.push(e);
        }
        GetElements() {
          return this.reactNodes;
        }
      }
      class a {
        constructor(e) {
          Object(s.a)(e, "decorated accumulator cannot be null"),
            (this.m_decoratedAccumulator = e);
        }
        AppendText(e, t = !1) {
          this.m_decoratedAccumulator.AppendText(e, t);
        }
        AppendNode(e) {
          this.m_decoratedAccumulator.AppendNode(e);
        }
        GetElements() {
          return this.m_decoratedAccumulator.GetElements();
        }
      }
      class o extends a {
        constructor(e, t, r) {
          super(e),
            (this.m_nStartCursor = 1),
            (this.m_nStartCursor = void 0 !== t ? t : 1);
        }
        AppendText(e) {
          let t = e,
            r = [];
          for (
            let e = t.indexOf("\n", this.m_nStartCursor);
            -1 !== e;
            e = t.indexOf("\n")
          )
            r.push(t.substr(0, e)),
              r.push(i.createElement("br")),
              (t = t.substr(e + 1));
          t.length && r.push(t),
            r.forEach((e) => {
              super.AppendNode(e);
            });
        }
      }
    },
  },
]);
