/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [4040],
  {
    80998: (e, t, s) => {
      s.d(t, { De: () => l, Fq: () => o, pA: () => n });
      var r = s(80002),
        i = s(37563),
        a = s(38071);
      s(44922);
      function n(e, t) {
        e.Body().set_context(o(t));
      }
      function o(e) {
        let t = new r.WJ();
        return (
          e || t.set_country_code(i.De.COUNTRY),
          t.set_language(i.De.LANGUAGE),
          i.De.EREALM != a.IN.k_ESteamRealmUnknown &&
            t.set_steam_realm(i.De.EREALM),
          t
        );
      }
      function l(e, t) {
        e.Body().set_data_request(r.Qn.fromObject(t));
      }
    },
    34310: (e, t, s) => {
      s.d(t, { Z: () => B });
      var r = s(85556),
        i = s(54842),
        a = s(79545),
        n = s(77581),
        o = s(23309),
        l = s(80002),
        u = s(62210),
        c = s(16649),
        d = s(37563),
        _ = s(80998),
        h = s(86437),
        m = s(31846),
        p = s(12251);
      function g(e) {
        return (function (e, t, s) {
          switch (e) {
            case "date_full":
              return (0, m.vX)(t);
            case "date_month":
              return (0, p.LO)(new Date(1e3 * t));
            case "date_quarter":
              return (0, p.Kb)(new Date(1e3 * t));
            case "date_year":
              return (0, p.Np)(new Date(1e3 * t));
            case "text_comingsoon":
              return s || (0, m.Xx)("#Store_ComingSoon_ComingSoon");
            case "text_tba":
              return s || (0, m.Xx)("#Store_ComingSoon_TBA");
            default:
              return "";
          }
        })(
          e.coming_soon_display,
          e.steam_release_date,
          e.custom_release_date_message,
        );
      }
      class I {
        constructor(e, t) {
          var s, r, i;
          (this.m_bVisible = !1),
            (this.m_rgStoreTags = []),
            (this.m_rgStoreTagIDs = []),
            (this.m_DataRequested = { include_tag_count: 0 }),
            (this.k_regexSalePage =
              /^https?:\/\/[^\/]*(?:valvesoftware|steampowered).com\/(?:(curator|dev|developer|pub|publisher|franchise)\/[0-9a-zA-Z\-_]+\/)?sale\//),
            (this.m_eItemType = e.item_type()),
            (this.m_unID = e.id()),
            (this.m_bVisible = !!e.visible()),
            (this.m_strName = e.name()),
            (this.m_strStoreURLPath = e.store_url_path()),
            (this.m_unAppID = e.appid()),
            (this.m_eAppType = e.type()),
            (this.m_rgIncludedAppTypes = e.included_types()),
            (this.m_rgIncludedAppIDs = e.included_appids()),
            (this.m_bIsFree = e.is_free()),
            (this.m_bIsFreeTemporary = e.is_free_temporarily()),
            (this.m_bIsEarlyAccess = e.is_early_access()),
            (this.m_RelatedItems =
              null === (s = e.related_items()) || void 0 === s
                ? void 0
                : s.toObject()),
            (this.m_ContentDescriptorIDs = e.content_descriptorids()),
            (this.m_StoreCategories = e.categories().toObject()),
            (this.m_BestPurchaseOption =
              null === (r = e.best_purchase_option()) || void 0 === r
                ? void 0
                : r.toObject()),
            (this.m_strStoreURLPathOverride = e.store_url_path_override()),
            (this.m_freeWeekend =
              null === (i = e.free_weekend()) || void 0 === i
                ? void 0
                : i.toObject()),
            (this.m_strInternalName = e.internal_name()),
            (1 != this.m_eItemType && 2 != this.m_eItemType) ||
              (this.m_SelfPurchaseOption = e.self_purchase_option(!1)
                ? e.self_purchase_option().toObject()
                : this.m_BestPurchaseOption),
            this.MergeData(e, t);
        }
        MergeData(e, t) {
          t.include_assets &&
            !this.m_Assets &&
            ((this.m_Assets = new v(e.assets(), e.id())),
            (this.m_DataRequested.include_assets = !0)),
            t.include_assets_without_overrides &&
              !this.m_AssetsWithoutOverrides &&
              ((this.m_AssetsWithoutOverrides = new v(
                e.assets_without_overrides(),
                e.id(),
              )),
              (this.m_DataRequested.include_assets_without_overrides = !0)),
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
              ((this.m_Screenshots = new C(e.screenshots())),
              (this.m_DataRequested.include_screenshots = !0)),
            t.include_trailers &&
              !this.m_Trailers &&
              ((this.m_Trailers = new R(e.trailers())),
              (this.m_DataRequested.include_trailers = !0)),
            t.include_tag_count &&
              t.include_tag_count > this.m_rgStoreTags.length &&
              this.m_DataRequested.include_tag_count < t.include_tag_count &&
              ((this.m_rgStoreTags = e.tags().map((e) => e.toObject())),
              (this.m_rgStoreTagIDs = this.m_rgStoreTags.map((e) => e.tagid)),
              (this.m_DataRequested.include_tag_count = Math.max(
                t.include_tag_count,
                this.m_rgStoreTags.length || 0,
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
              (!t.include_supported_languages || e.include_supported_languages),
          );
        }
        BContainDataRequest(e) {
          return I.BDataRequestContainsOtherDataRequest(
            this.m_DataRequested,
            e,
          );
        }
        BCheckDataRequestIncluded(e) {
          ("dev" != d.De.WEB_UNIVERSE && "beta" != d.De.WEB_UNIVERSE) ||
            (0, u.X)(
              this.BContainDataRequest(e),
              `Requested data without for ${(0, h.qE)(this.m_eItemType)} @ ${this.m_unID}`,
              (0, i.ZN)(e),
              (0, i.ZN)(this.m_DataRequested),
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
          return d.De.STORE_BASE_URL + this.m_strStoreURLPath;
        }
        GetStorePageURLWithOverride() {
          return this.m_strStoreURLPathOverride &&
            this.m_strStoreURLPathOverride.length > 0
            ? this.GetStorePageURLOverride()
            : this.GetStorePageURL();
        }
        GetStorePageURLOverride() {
          return this.m_strStoreURLPathOverride;
        }
        GetCommunityPageURL() {
          return this.GetAppID()
            ? d.De.COMMUNITY_BASE_URL + "app/" + this.GetAppID()
            : null;
        }
        GetCommunityDiscussionForumsURL() {
          return this.GetAppID()
            ? d.De.COMMUNITY_BASE_URL +
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
                "",
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
        BIsFreeTemporary() {
          return this.m_bIsFreeTemporary;
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
              this.GetStoreCategories_Controller().find((t) => e === t),
          );
        }
        GetFilteredReviewSummary() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_reviews: !0 }),
            null === (e = this.m_ReviewInfo) || void 0 === e
              ? void 0
              : e.summary_filtered
          );
        }
        GetUnfilteredReviewSummary() {
          var e, t;
          return (
            this.BCheckDataRequestIncluded({ include_reviews: !0 }),
            (null === (e = this.m_ReviewInfo) || void 0 === e
              ? void 0
              : e.summary_unfiltered) ||
              (null === (t = this.m_ReviewInfo) || void 0 === t
                ? void 0
                : t.summary_filtered)
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
          var e, t, s, r;
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            null !==
              (r =
                null ===
                  (s =
                    null ===
                      (t =
                        null === (e = this.m_BasicInfo) || void 0 === e
                          ? void 0
                          : e.developers) || void 0 === t
                      ? void 0
                      : t.map((e) => e.name.trim())) || void 0 === s
                  ? void 0
                  : s.filter((e) => (null == e ? void 0 : e.length) > 0)) &&
            void 0 !== r
              ? r
              : []
          );
        }
        GetFranchiseNames() {
          var e, t, s, r;
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            null !==
              (r =
                null ===
                  (s =
                    null ===
                      (t =
                        null === (e = this.m_BasicInfo) || void 0 === e
                          ? void 0
                          : e.franchises) || void 0 === t
                      ? void 0
                      : t.map((e) => e.name.trim())) || void 0 === s
                  ? void 0
                  : s.filter((e) => (null == e ? void 0 : e.length) > 0)) &&
            void 0 !== r
              ? r
              : []
          );
        }
        GetPublisherNames() {
          var e, t, s, r;
          this.BCheckDataRequestIncluded({ include_basic_info: !0 });
          const i =
            null !==
              (r =
                null ===
                  (s =
                    null ===
                      (t =
                        null === (e = this.m_BasicInfo) || void 0 === e
                          ? void 0
                          : e.publishers) || void 0 === t
                      ? void 0
                      : t.map((e) => e.name.trim())) || void 0 === s
                  ? void 0
                  : s.filter((e) => (null == e ? void 0 : e.length) > 0)) &&
            void 0 !== r
              ? r
              : [];
          return (null == i ? void 0 : i.length) > 0
            ? i
            : this.GetDeveloperNames();
        }
        GetAllCreatorClanIDs() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo
              ? f([
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
            this.m_BasicInfo ? f(this.m_BasicInfo.publishers) : []
          );
        }
        GetAllDeveloperCreatorClans() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo ? f(this.m_BasicInfo.developers) : []
          );
        }
        GetAllFranchiseCreatorClans() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo ? f(this.m_BasicInfo.franchises) : []
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
        GetAssetsWithoutOverrides() {
          return (
            this.BCheckDataRequestIncluded({
              include_assets_without_overrides: !0,
            }),
            this.m_AssetsWithoutOverrides
          );
        }
        GetOriginalReleaseDateRTime() {
          var e;
          this.BCheckDataRequestIncluded({ include_release: !0 });
          let t =
            null === (e = this.m_ReleaseInfo) || void 0 === e
              ? void 0
              : e.original_steam_release_date;
          return t || (t = this.GetReleaseDateRTime()), t;
        }
        GetReleaseDateRTime() {
          var e, t, s;
          if (
            (this.BCheckDataRequestIncluded({ include_release: !0 }),
            null === (e = this.m_ReleaseInfo) || void 0 === e
              ? void 0
              : e.is_coming_soon)
          )
            return 0;
          let r =
            null === (t = this.m_ReleaseInfo) || void 0 === t
              ? void 0
              : t.steam_release_date;
          return (
            r ||
              (r =
                null === (s = this.m_ReleaseInfo) || void 0 === s
                  ? void 0
                  : s.original_release_date),
            r
          );
        }
        GetFormattedSteamReleaseDate() {
          var e, t, s, r, i;
          if (
            (this.BCheckDataRequestIncluded({ include_release: !0 }),
            null === (e = this.m_ReleaseInfo) || void 0 === e
              ? void 0
              : e.is_coming_soon)
          ) {
            if (
              null === (t = this.m_ReleaseInfo) || void 0 === t
                ? void 0
                : t.coming_soon_display
            )
              return g(this.m_ReleaseInfo);
            if (
              null === (s = this.m_ReleaseInfo) || void 0 === s
                ? void 0
                : s.custom_release_date_message
            )
              return this.m_ReleaseInfo.custom_release_date_message;
            const e =
              null === (r = this.m_ReleaseInfo) || void 0 === r
                ? void 0
                : r.steam_release_date;
            return e
              ? (
                  null === (i = this.m_ReleaseInfo) || void 0 === i
                    ? void 0
                    : i.is_abridged_release_date
                )
                ? (0, p.LO)(new Date(1e3 * e))
                : (0, m.vX)(e)
              : "";
          }
          const a = this.GetReleaseDateRTime();
          return a ? (0, m.vX)(a) : "";
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
        BIsCustomComingSoonDisplay() {
          var e, t;
          return (
            !!this.BIsComingSoon() &&
            ((
              null === (e = this.m_ReleaseInfo) || void 0 === e
                ? void 0
                : e.coming_soon_display
            )
              ? ["text_tba", "text_comingsoon"].includes(
                  this.m_ReleaseInfo.coming_soon_display,
                )
              : !!(null === (t = this.m_ReleaseInfo) || void 0 === t
                  ? void 0
                  : t.custom_release_date_message))
          );
        }
        BIsPrePurchase() {
          var e;
          return (
            this.BIsComingSoon() &&
            Boolean(
              null === (e = this.GetBestPurchaseOption()) || void 0 === e
                ? void 0
                : e.packageid,
            )
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
              this.m_BestPurchaseOption.final_price_in_cents,
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
          var e, t, s;
          return null !==
            (t =
              null === (e = this.m_BestPurchaseOption) || void 0 === e
                ? void 0
                : e.formatted_original_price) && void 0 !== t
            ? t
            : null === (s = this.m_BestPurchaseOption) || void 0 === s
              ? void 0
              : s.formatted_final_price;
        }
        GetAllPurchaseOptions() {
          return (
            this.BCheckDataRequestIncluded({
              include_all_purchase_options: !0,
            }),
            this.m_rgPurchaseOptions
          );
        }
        GetSelfPurchaseOption() {
          return this.m_SelfPurchaseOption;
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
          var e, t, s;
          return (
            this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            (null !==
              (s =
                null ===
                  (t =
                    null === (e = this.m_Trailers) || void 0 === e
                      ? void 0
                      : e.GetHighlightTrailers()) || void 0 === t
                  ? void 0
                  : t.length) && void 0 !== s
              ? s
              : 0) > 0
          );
        }
        GetAllTrailers() {
          return (
            this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            this.m_Trailers
          );
        }
        BHasSomeLanguageSupport(e) {
          var t;
          return (
            this.BCheckDataRequestIncluded({ include_supported_languages: !0 }),
            (null === (t = this.m_rgSupportedLanguages) || void 0 === t
              ? void 0
              : t.some(
                  (t) =>
                    t.elanguage == e &&
                    (t.supported || t.subtitles || t.full_audio),
                )) || !1
          );
        }
        GetAllLanguagesWithSomeSupport() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_supported_languages: !0 }),
            (null === (e = this.m_rgSupportedLanguages) || void 0 === e
              ? void 0
              : e
                  .filter((e) => e.supported || e.subtitles || e.full_audio)
                  .map((e) => e.elanguage)) || []
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
        GetInternalName() {
          return this.m_strInternalName;
        }
      }
      function f(e) {
        if (!(null == e ? void 0 : e.length)) return [];
        const t = e.map((e) => e.creator_clan_account_id).filter((e) => !!e);
        return Array.from(new Set(t));
      }
      class v {
        constructor(e, t) {
          const s = e.asset_url_format();
          s &&
            (e.main_capsule() &&
              (this.m_strMainCapsuleURL = this.ConstructAssetURL(
                s,
                e.main_capsule(),
              )),
            e.small_capsule() &&
              (this.m_strSmallCapsuleURL = this.ConstructAssetURL(
                s,
                e.small_capsule(),
              )),
            e.header() &&
              (this.m_strHeaderURL = this.ConstructAssetURL(s, e.header())),
            e.package_header() &&
              (this.m_strPackageHeaderURL = this.ConstructAssetURL(
                s,
                e.package_header(),
              )),
            e.page_background() &&
              (this.m_strPageBackgroundURL = this.ConstructAssetURL(
                s,
                e.page_background(),
              )),
            e.hero_capsule() &&
              (this.m_strHeroCapsuleURL = this.ConstructAssetURL(
                s,
                e.hero_capsule(),
              )),
            e.hero_capsule_2x() &&
              (this.m_strHeroCapsuleURL_2x = this.ConstructAssetURL(
                s,
                e.hero_capsule_2x(),
              )),
            e.library_capsule() &&
              (this.m_strLibraryCapsuleURL = this.ConstructAssetURL(
                s,
                e.library_capsule(),
              )),
            e.library_capsule_2x() &&
              (this.m_strLibraryCapsuleURL_2x = this.ConstructAssetURL(
                s,
                e.library_capsule_2x(),
              )),
            e.library_hero() &&
              (this.m_strLibraryHeroURL = this.ConstructAssetURL(
                s,
                e.library_hero(),
              )),
            e.library_hero_2x() &&
              (this.m_strLibraryHeroURL_2x = this.ConstructAssetURL(
                s,
                e.library_hero_2x(),
              ))),
            e.community_icon() &&
              (this.m_strCommunityIcon = `${d.De.MEDIA_CDN_COMMUNITY_URL}images/apps/${t}/${e.community_icon()}.jpg`);
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
          return d.De.MEDIA_CDN_URL + e.replace("${FILENAME}", t);
        }
        GetCommunityIconURL() {
          return this.m_strCommunityIcon;
        }
      }
      class R {
        constructor(e) {
          (this.m_mapTrailer = new Map()),
            (this.m_higherTrailers = new Array()),
            (this.m_otherTrailers = new Array()),
            e.highlights() &&
              e.highlights().forEach((e) => {
                let t = new b(e);
                this.m_mapTrailer.set(t.GetTrailerID(), t),
                  this.m_higherTrailers.push(t);
              }),
            e.other_trailers() &&
              e.other_trailers().forEach((e) => {
                let t = new b(e);
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
      class b {
        constructor(e) {
          (this.m_strTrailerName = e.trailer_name()),
            (this.m_nBaseID = e.trailer_base_id());
          const t = e.trailer_url_format();
          t &&
            (e.trailer_480p() &&
              (this.m_Trailer480p = this.ExtractTrailerFormats(
                t,
                e.trailer_480p(),
              )),
            e.trailer_max() &&
              (this.m_TrailerMax = this.ExtractTrailerFormats(
                t,
                e.trailer_max(),
              )),
            e.microtrailer() &&
              (this.m_MicroTrailer = this.ExtractTrailerFormats(
                t,
                e.microtrailer(),
              )),
            e.screenshot_medium() &&
              (this.m_strScreenshotMedium = this.ConstructAssetURL(
                t,
                e.screenshot_medium(),
              )),
            e.screenshot_full() &&
              (this.m_strScreenshotFull = this.ConstructAssetURL(
                t,
                e.screenshot_full(),
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
          let s = {};
          return (
            t.forEach((t) => {
              "video/mp4" == t.type()
                ? (s.strMP4URL = this.ConstructAssetURL(e, t.filename()))
                : "video/webm" == t.type() &&
                  (s.strWebMURL = this.ConstructAssetURL(e, t.filename()));
            }),
            s
          );
        }
        ConstructAssetURL(e, t) {
          return d.De.MEDIA_CDN_URL + e.replace("${FILENAME}", t);
        }
      }
      class C {
        constructor(e) {
          (this.m_rgAllScreenshots = new Array()),
            (this.m_rgOnlyAllAgesScreenshots = new Array());
          let t = 0,
            s = 0;
          const r = e.all_ages_screenshots() || [],
            i = e.mature_content_screenshots() || [];
          for (; t < r.length || s < i.length; ) {
            let e = t < r.length;
            if (t < r.length && s < i.length) {
              e = r[t].ordinal() < i[s].ordinal();
            }
            if (e) {
              const e = d.De.MEDIA_CDN_URL + r[t].filename();
              this.m_rgAllScreenshots.push(e),
                this.m_rgOnlyAllAgesScreenshots.push(e),
                (t += 1);
            } else {
              const e = d.De.MEDIA_CDN_URL + i[s].filename();
              this.m_rgAllScreenshots.push(e), (s += 1);
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
      function S(e, t) {
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
          include_tag_count:
            Math.max(e.include_tag_count || 0, t.include_tag_count || 0) ||
            void 0,
          include_reviews: e.include_reviews || t.include_reviews,
          include_basic_info: e.include_basic_info || t.include_basic_info,
          include_supported_languages:
            e.include_supported_languages || t.include_supported_languages,
          include_full_description:
            e.include_full_description || t.include_full_description,
          include_included_items:
            e.include_included_items || t.include_included_items,
          include_assets_without_overrides:
            e.include_assets_without_overrides ||
            t.include_assets_without_overrides,
          apply_user_filters: e.apply_user_filters || t.apply_user_filters,
        };
      }
      function y(e, t) {
        return (0, r.mG)(this, void 0, void 0, function* () {
          const s = yield e,
            r = yield t;
          return 1 != s ? s : r;
        });
      }
      class G {
        constructor() {
          (this.k_QueueWaitUntilRequestMS = 5),
            (this.k_nMaxBatchSize = 250),
            (this.m_bReturnUnavailableItems = !1),
            (this.m_mapApps = new Map()),
            (this.m_mapPackages = new Map()),
            (this.m_mapBundles = new Map()),
            (this.m_mapTags = new Map()),
            (this.m_mapCreators = new Map()),
            (this.m_mapHubCategories = new Map()),
            (this.m_setUnavailableApps = new Set()),
            (this.m_setUnavailablePackages = new Set()),
            (this.m_setUnavailableBundles = new Set()),
            (this.m_setUnavailableTags = new Set()),
            (this.m_setUnavailableCreators = new Set()),
            (this.m_setUnavailableHubCategories = new Set()),
            (this.m_setUnavailableDueToCountryRestrictionApps = new Set()),
            (this.m_setUnavailableDueToCountryRestrictionPackages = new Set()),
            (this.m_setUnavailableDueToCountryRestrictionBundles = new Set()),
            (this.m_mapAppsInFlight = new Map()),
            (this.m_mapPackageInFlight = new Map()),
            (this.m_mapBundleInFlight = new Map()),
            (this.m_mapTagsInFlight = new Map()),
            (this.m_mapCreatorsInFlight = new Map()),
            (this.m_mapHubCategoriesInFlight = new Map()),
            (this.m_SteamInterface = null),
            (this.m_bUsePartnerAPI = !1),
            (this.m_bInitialized = !1),
            (this.m_bActivelyResettingCache = !1),
            (this.m_setPendingAppInfo = new Set()),
            (this.m_setPendingBundleInfo = new Set()),
            (this.m_setPendingPackageInfo = new Set()),
            (this.m_setPendingTagInfo = new Set()),
            (this.m_setPendingCreatorInfo = new Set()),
            (this.m_setPendingHubCategoryInfo = new Set()),
            (this.m_setPendingDataRequest = {}),
            (this.m_PendingInfoResolve = void 0),
            (this.m_PendingTimer = void 0),
            (this.k_AlreadyResolvedOK = Promise.resolve(1)),
            (this.k_AlreadyResolvedInvalid = Promise.resolve(8)),
            (this.k_AlreadyResolvedBusy = Promise.resolve(10));
        }
        static Get() {
          return (
            G.sm_instance ||
              ((G.sm_instance = new G()),
              (window.StoreItemCache = G.sm_instance)),
            G.sm_instance
          );
        }
        static Initialize(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            (0, u.X)(
              !G.Get().m_bInitialized,
              "CStoreItemCache was already initialized; initialize it only once.",
            ),
              (G.Get().m_SteamInterface = e),
              (G.Get().m_bUsePartnerAPI = !!t),
              (G.Get().m_bInitialized = !0);
          });
        }
        GetSteamInterface() {
          return this.m_SteamInterface;
        }
        SetSteamInterface(e) {
          this.m_SteamInterface = e;
        }
        SetReturnUnavailableItems(e) {
          this.m_bReturnUnavailableItems = e;
        }
        GetReturnUnavailableItems() {
          return this.m_bReturnUnavailableItems;
        }
        ResetCache() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            (this.m_bActivelyResettingCache = !0), this.FlushPendingInfo();
            let e = [];
            this.m_mapAppsInFlight.forEach((t) => {
              e.push(t.promise);
            }),
              this.m_mapBundleInFlight.forEach((t) => {
                e.push(t.promise);
              }),
              this.m_mapPackageInFlight.forEach((t) => {
                e.push(t.promise);
              }),
              this.m_mapTagsInFlight.forEach((t) => {
                e.push(t.promise);
              }),
              this.m_mapCreatorsInFlight.forEach((t) => {
                e.push(t.promise);
              }),
              this.m_mapHubCategoriesInFlight.forEach((t) => {
                e.push(t.promise);
              }),
              yield Promise.all(e),
              this.m_mapApps.clear(),
              this.m_mapBundles.clear(),
              this.m_mapPackages.clear(),
              this.m_mapTagsInFlight.clear(),
              this.m_mapCreatorsInFlight.clear(),
              this.m_mapHubCategoriesInFlight.clear(),
              (this.m_bActivelyResettingCache = !1);
          });
        }
        static BIsInitialized() {
          return G.Get().m_bInitialized;
        }
        QueueAppRequest(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            return this.QueueStoreItemRequest(e, 0, t);
          });
        }
        QueuePackageRequest(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            return this.QueueStoreItemRequest(e, 1, t);
          });
        }
        QueueBundleRequest(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            return this.QueueStoreItemRequest(e, 2, t);
          });
        }
        QueueTagRequest(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            return this.QueueStoreItemRequest(e, 4, t);
          });
        }
        QueueCreatorRequest(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            return this.QueueStoreItemRequest(e, 5, t);
          });
        }
        QueueHubCategoryRequest(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            return this.QueueStoreItemRequest(e, 6, t);
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
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return 1;
            const s = (yield Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, 0, t)),
            )).filter((e) => 1 != e);
            return s.length > 0 ? s[0] : 1;
          });
        }
        QueueMultiplePackageRequests(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return 1;
            const s = (yield Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, 1, t)),
            )).filter((e) => 1 != e);
            return s.length > 0 ? s[0] : 1;
          });
        }
        QueueMultipleBundleRequests(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return 1;
            const s = (yield Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, 2, t)),
            )).filter((e) => 1 != e);
            return s.length > 0 ? s[0] : 1;
          });
        }
        QueueMultipleTagRequests(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return 1;
            const s = (yield Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, 4, t)),
            )).filter((e) => 1 != e);
            return s.length > 0 ? s[0] : 1;
          });
        }
        QueueMultipleCreatorRequests(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return 1;
            const s = (yield Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, 5, t)),
            )).filter((e) => 1 != e);
            return s.length > 0 ? s[0] : 1;
          });
        }
        QueueMultipleHubCategoryRequests(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return 1;
            const s = (yield Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, 6, t)),
            )).filter((e) => 1 != e);
            return s.length > 0 ? s[0] : 1;
          });
        }
        QueueMultipleStoreItemRequests(e, t, s) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return 1;
            const r = (yield Promise.all(
              e.map((e, r) => this.QueueStoreItemRequest(e, t[r], s)),
            )).filter((e) => 1 != e);
            return r.length > 0 ? r[0] : 1;
          });
        }
        QueueStoreItemRequest(e, t, s) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (
              ((0, u.X)(
                G.ValidateDataRequest(s),
                "Invalid Data Request: " + JSON.stringify(s),
              ),
              "string" == typeof e && (e = parseInt(e)),
              this.m_bActivelyResettingCache)
            )
              return (
                console.log(
                  "Rejecting store item request due to currently clearing the cache",
                ),
                this.k_AlreadyResolvedBusy
              );
            if (!e)
              return (
                (0, u.X)(
                  !e,
                  `unexpected id ${e} of zero or undefined for type ${t}`,
                ),
                this.k_AlreadyResolvedInvalid
              );
            const r = this.GetPreviousSupersetLoadPromise(e, t, s);
            if (r) return r;
            switch (
              (this.m_PendingInfoPromise ||
                ((this.m_PendingInfoPromise = new Promise(
                  (e) => (this.m_PendingInfoResolve = e),
                )),
                (this.m_PendingTimer = window.setTimeout(
                  () => this.FlushPendingInfo(),
                  this.k_QueueWaitUntilRequestMS,
                ))),
              (this.m_setPendingDataRequest = S(
                this.m_setPendingDataRequest,
                s,
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
              case 4:
                this.m_setPendingTagInfo.add(e);
                break;
              case 5:
                this.m_setPendingCreatorInfo.add(e);
                break;
              case 6:
                this.m_setPendingHubCategoryInfo.add(e);
                break;
              default:
                (0, u.X)(!1, `Unexpected Type ${t}`);
            }
            const i = this.m_PendingInfoPromise;
            return (
              this.m_setPendingAppInfo.size +
                this.m_setPendingPackageInfo.size +
                this.m_setPendingBundleInfo.size >=
                this.k_nMaxBatchSize &&
                (this.m_PendingTimer &&
                  window.clearTimeout(this.m_PendingTimer),
                this.FlushPendingInfo()),
              i
            );
          });
        }
        FlushPendingInfo() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (void 0 === this.m_PendingInfoResolve) return;
            const e = this.m_PendingInfoResolve,
              t = Array.from(this.m_setPendingAppInfo),
              s = Array.from(this.m_setPendingPackageInfo),
              r = Array.from(this.m_setPendingBundleInfo),
              i = Array.from(this.m_setPendingTagInfo),
              a = Array.from(this.m_setPendingCreatorInfo),
              n = Array.from(this.m_setPendingHubCategoryInfo),
              o = this.m_setPendingDataRequest;
            (this.m_PendingInfoPromise = void 0),
              (this.m_PendingInfoResolve = void 0),
              this.m_setPendingAppInfo.clear(),
              this.m_setPendingBundleInfo.clear(),
              this.m_setPendingPackageInfo.clear(),
              this.m_setPendingTagInfo.clear(),
              this.m_setPendingCreatorInfo.clear(),
              this.m_setPendingHubCategoryInfo.clear(),
              (this.m_setPendingDataRequest = {}),
              (this.m_PendingTimer = void 0),
              this.HintLoadStoreItems(void 0, t, s, r, i, a, n, o).then((t) =>
                e(t),
              );
          });
        }
        HintLoadStoreApps(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            return this.HintLoadStoreItems(
              null,
              e,
              null,
              null,
              null,
              null,
              null,
              t,
            );
          });
        }
        HintLoadStorePackages(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            return this.HintLoadStoreItems(
              null,
              null,
              e,
              null,
              null,
              null,
              null,
              t,
            );
          });
        }
        HintLoadStoreBundles(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            return this.HintLoadStoreItems(
              null,
              null,
              null,
              e,
              null,
              null,
              null,
              t,
            );
          });
        }
        GetPreviousSupersetLoadPromise(e, t, s) {
          if (this.BHasStoreItem(e, t, s) || this.BIsStoreItemMissing(e, t))
            return this.k_AlreadyResolvedOK;
          let r = null;
          switch (t) {
            case 0:
              r = this.m_mapAppsInFlight.get(e);
              break;
            case 1:
              r = this.m_mapPackageInFlight.get(e);
              break;
            case 2:
              r = this.m_mapBundleInFlight.get(e);
              break;
            case 4:
              r = this.m_mapTagsInFlight.get(e);
              break;
            case 5:
              r = this.m_mapCreatorsInFlight.get(e);
              break;
            case 6:
              r = this.m_mapHubCategoriesInFlight.get(e);
          }
          return r && I.BDataRequestContainsOtherDataRequest(r.dataRequest, s)
            ? r.promise
            : null;
        }
        HintLoadStoreItems(e, t, s, i, a, n, o, u) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            let r = null;
            const c = new Promise((e) => (r = e));
            let d = [],
              _ = [];
            (t || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(e, 0, u);
              if (t) _.push(t);
              else {
                d.push(l.oY.fromObject({ appid: e }));
                let t = S(this.GetStoreItemDataRequest(e, 0), u);
                const s = this.m_mapAppsInFlight.get(e);
                (t = S(null == s ? void 0 : s.dataRequest, t)),
                  s && _.push(s.promise),
                  this.m_mapAppsInFlight.set(e, {
                    promise: s ? y(s.promise, c) : c,
                    dataRequest: t,
                  });
              }
            }),
              (s || []).forEach((e) => {
                const t = this.GetPreviousSupersetLoadPromise(e, 1, u);
                if (t) _.push(t);
                else {
                  d.push(l.oY.fromObject({ packageid: e }));
                  let t = S(this.GetStoreItemDataRequest(e, 1), u);
                  const s = this.m_mapPackageInFlight.get(e);
                  (t = S(null == s ? void 0 : s.dataRequest, t)),
                    s && _.push(s.promise),
                    this.m_mapPackageInFlight.set(e, {
                      promise: s ? y(s.promise, c) : c,
                      dataRequest: t,
                    });
                }
              }),
              (i || []).forEach((e) => {
                const t = this.GetPreviousSupersetLoadPromise(e, 2, u);
                if (t) _.push(t);
                else {
                  d.push(l.oY.fromObject({ bundleid: e }));
                  let t = S(this.GetStoreItemDataRequest(e, 2), u);
                  const s = this.m_mapBundleInFlight.get(e);
                  (t = S(null == s ? void 0 : s.dataRequest, t)),
                    s && _.push(s.promise),
                    this.m_mapBundleInFlight.set(e, {
                      promise: s ? y(s.promise, c) : c,
                      dataRequest: t,
                    });
                }
              }),
              (a || []).forEach((e) => {
                const t = this.GetPreviousSupersetLoadPromise(e, 4, u);
                if (t) _.push(t);
                else {
                  d.push(l.oY.fromObject({ tagid: e }));
                  let t = S(this.GetStoreItemDataRequest(e, 4), u);
                  const s = this.m_mapTagsInFlight.get(e);
                  (t = S(null == s ? void 0 : s.dataRequest, t)),
                    s && _.push(s.promise),
                    this.m_mapTagsInFlight.set(e, {
                      promise: s ? y(s.promise, c) : c,
                      dataRequest: t,
                    });
                }
              }),
              (n || []).forEach((e) => {
                const t = this.GetPreviousSupersetLoadPromise(e, 5, u);
                if (t) _.push(t);
                else {
                  d.push(l.oY.fromObject({ creatorid: e }));
                  let t = S(this.GetStoreItemDataRequest(e, 5), u);
                  const s = this.m_mapCreatorsInFlight.get(e);
                  (t = S(null == s ? void 0 : s.dataRequest, t)),
                    s && _.push(s.promise),
                    this.m_mapCreatorsInFlight.set(e, {
                      promise: s ? y(s.promise, c) : c,
                      dataRequest: t,
                    });
                }
              }),
              (o || []).forEach((e) => {
                const t = this.GetPreviousSupersetLoadPromise(e, 6, u);
                if (t) _.push(t);
                else {
                  d.push(l.oY.fromObject({ hubcategoryid: e }));
                  let t = S(this.GetStoreItemDataRequest(e, 6), u);
                  const s = this.m_mapHubCategoriesInFlight.get(e);
                  (t = S(null == s ? void 0 : s.dataRequest, t)),
                    s && _.push(s.promise),
                    this.m_mapHubCategoriesInFlight.set(e, {
                      promise: s ? y(s.promise, c) : c,
                      dataRequest: t,
                    });
                }
              });
            let h = 1;
            if (
              (d.length > 0 &&
                (h = yield this.InternalHandleLoadStoreItems(e, d, u)),
              r(h),
              _.length > 0)
            ) {
              const e = yield Promise.all(_);
              for (const t of e) 1 != t && 1 == h && (h = t);
            }
            return (
              (t || []).forEach((e) => this.m_mapAppsInFlight.delete(e)),
              (s || []).forEach((e) => this.m_mapPackageInFlight.delete(e)),
              (i || []).forEach((e) => this.m_mapBundleInFlight.delete(e)),
              (a || []).forEach((e) => this.m_mapTagsInFlight.delete(e)),
              (n || []).forEach((e) => this.m_mapCreatorsInFlight.delete(e)),
              (o || []).forEach((e) =>
                this.m_mapHubCategoriesInFlight.delete(e),
              ),
              h
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
                : e.bundleid()
                  ? (this.m_setUnavailableBundles.add(e.bundleid()),
                    this.m_mapBundles.delete(e.bundleid()))
                  : e.tagid()
                    ? (this.m_setUnavailableTags.add(e.tagid()),
                      this.m_mapTags.delete(e.tagid()))
                    : e.creatorid()
                      ? (this.m_setUnavailableCreators.add(e.creatorid()),
                        this.m_mapCreators.delete(e.creatorid()))
                      : e.hubcategoryid() &&
                        (this.m_setUnavailableHubCategories.add(
                          e.hubcategoryid(),
                        ),
                        this.m_mapHubCategories.delete(e.hubcategoryid()));
          });
        }
        SortStoreItems(e) {
          let t = e.slice();
          return (
            t.sort((e, t) => {
              var s, r, i, a, n, o, l, u, c, d, _, h;
              let m = null !== (s = e.appid()) && void 0 !== s ? s : 0,
                p = null !== (r = t.appid()) && void 0 !== r ? r : 0;
              if (m != p) return m - p;
              let g = null !== (i = e.packageid()) && void 0 !== i ? i : 0,
                I = null !== (a = t.packageid()) && void 0 !== a ? a : 0;
              if (g != I) return g - I;
              let f = null !== (n = e.bundleid()) && void 0 !== n ? n : 0,
                v = null !== (o = t.bundleid()) && void 0 !== o ? o : 0;
              if (f != v) return f - v;
              let R = null !== (l = e.tagid()) && void 0 !== l ? l : 0,
                b = null !== (u = t.tagid()) && void 0 !== u ? u : 0;
              if (R != b) return R - b;
              let C = null !== (c = e.creatorid()) && void 0 !== c ? c : 0,
                S = null !== (d = t.creatorid()) && void 0 !== d ? d : 0;
              if (C != S) return C - S;
              let y = null !== (_ = e.hubcategoryid()) && void 0 !== _ ? _ : 0,
                G = null !== (h = t.hubcategoryid()) && void 0 !== h ? h : 0;
              return y != G ? y - G : 0;
            }),
            t
          );
        }
        InternalHandleLoadStoreItems(e, t, s) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            let r = 1;
            e ||
              (this.GetSteamInterface() ||
                this.SetSteamInterface(new n.J(d.De.WEBAPI_BASE_URL)),
              (e = this.GetSteamInterface())),
              (t = this.SortStoreItems(t)),
              s.include_included_items &&
                (s = Object.assign(Object.assign({}, s), {
                  included_item_data_request: Object.assign(
                    Object.assign({}, s),
                    { include_included_items: !1 },
                  ),
                }));
            const u = new Array();
            try {
              const n = [];
              for (; t.length > 0; ) {
                const r = t.splice(0, this.k_nMaxBatchSize);
                if ((u.push(r), this.m_bUsePartnerAPI)) {
                  const t = a.gA.Init(o.z4);
                  t.Body().set_include_unpublished(!1);
                  const i = t.Body().request(!0);
                  i.set_context((0, _.Fq)(this.m_bUsePartnerAPI)),
                    i.set_data_request(l.Qn.fromObject(s)),
                    i.set_ids(r),
                    n.push(o.n7.GetItems(e.GetServiceTransport(), t));
                } else {
                  const t = a.gA.Init(l.eK);
                  (0, _.pA)(t, this.m_bUsePartnerAPI),
                    (0, _.De)(t, s),
                    t.Body().set_ids(r),
                    n.push(l.VJ.GetItems(e.GetAnonymousServiceTransport(), t));
                }
              }
              (yield Promise.all(n)).forEach((e, a) => {
                1 == e.GetEResult()
                  ? e
                      .Body()
                      .store_items()
                      .forEach((r) => {
                        const a = r.id(),
                          n = r.item_type();
                        let o =
                            this.m_bReturnUnavailableItems && 15 == r.success(),
                          l =
                            1 == r.success() && !this.BIsStoreItemMissing(a, n);
                        if (o || l) this.ReadItem(r, s);
                        else {
                          switch (
                            ("dev" == d.De.WEB_UNIVERSE &&
                              console.warn(
                                `Failed to load ${a} type ${n} with error ${r.success()}`,
                                r,
                              ),
                            n)
                          ) {
                            case 0:
                              this.m_setUnavailableApps.add(a),
                                this.m_mapApps.delete(a);
                              break;
                            case 1:
                              this.m_setUnavailablePackages.add(a),
                                this.m_mapPackages.delete(a);
                              break;
                            case 2:
                              this.m_setUnavailableBundles.add(a),
                                this.m_mapBundles.delete(a);
                              break;
                            case 4:
                              this.m_setUnavailableTags.add(a),
                                this.m_mapTags.delete(a);
                              break;
                            case 5:
                              this.m_setUnavailableCreators.add(a),
                                this.m_mapCreators.delete(a);
                              break;
                            case 6:
                              this.m_setUnavailableHubCategories.add(a),
                                this.m_mapHubCategories.delete(a);
                              break;
                            default:
                              console.error(
                                "CStoreItemCache.InternalHandleLoadStoreItems unexpected item_type in response " +
                                  n +
                                  " " +
                                  a,
                              );
                          }
                          if (r.unvailable_for_country_restriction())
                            switch (n) {
                              case 0:
                                this.m_setUnavailableDueToCountryRestrictionApps.add(
                                  a,
                                );
                                break;
                              case 1:
                                this.m_setUnavailableDueToCountryRestrictionPackages.add(
                                  a,
                                );
                                break;
                              case 2:
                                this.m_setUnavailableDueToCountryRestrictionBundles.add(
                                  a,
                                );
                                break;
                              case 4:
                              case 5:
                              case 6:
                                console.error(
                                  "CStoreItemCache::InternalHandleLoadStoreItems - tags, creators or categories don't have country restrictions. eResult: " +
                                    e.GetEResult() +
                                    " message: " +
                                    e.Hdr().error_message(),
                                  (0, i.ZN)(t),
                                );
                            }
                        }
                      })
                  : (console.warn(
                      "CStoreItemCache::InternalHandleLoadStoreItems failed with eResult: " +
                        e.GetEResult() +
                        " message: " +
                        e.Hdr().error_message(),
                      (0, i.ZN)(t),
                    ),
                    (1 == e.Hdr().transport_error() || d.De.FROM_WEB) &&
                      this.MarkStoreItemIDUnavailable(u[a]),
                    1 == r && (r = e.GetEResult()));
              });
            } catch (e) {
              const t = (0, c.l)(e);
              return (
                console.error(
                  "CStoreItemCache::InternalHandleLoadStoreItems failed: " +
                    t.strErrorMsg,
                  t,
                ),
                u.forEach((e) => this.MarkStoreItemIDUnavailable(e)),
                79
              );
            }
            return r;
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
            case 4:
              t = this.m_mapTags;
              break;
            case 5:
              t = this.m_mapCreators;
              break;
            case 6:
              t = this.m_mapHubCategories;
              break;
            default:
              console.error("Invalid map type requested", e);
          }
          return t;
        }
        BHasStoreItem(e, t, s) {
          let r = this.GetMapForType(t);
          return Boolean(
            r && r.has(e) && (!s || r.get(e).BContainDataRequest(s)),
          );
        }
        GetStoreItem(e, t) {
          if (-1 == t || 3 == t) return;
          const s = this.GetMapForType(t);
          return null == s ? void 0 : s.get(e);
        }
        GetStoreItemWithLegacyVisibilityCheck(e, t) {
          const s = this.GetStoreItem(e, t);
          return s && (this.m_bReturnUnavailableItems || s.BIsVisible())
            ? s
            : void 0;
        }
        GetStoreItemDataRequest(e, t) {
          var s, r;
          return (
            (null ===
              (r =
                null === (s = this.GetMapForType(t)) || void 0 === s
                  ? void 0
                  : s.get(e)) || void 0 === r
              ? void 0
              : r.GetDataRequest()) || null
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
        BHasTag(e, t) {
          return this.BHasStoreItem(e, 4, t);
        }
        GetTag(e) {
          return this.GetStoreItem(e, 4);
        }
        BHasCreator(e, t) {
          return this.BHasStoreItem(e, 5, t);
        }
        GetCreator(e) {
          return this.GetStoreItem(e, 5);
        }
        BHasHubCategory(e, t) {
          return this.BHasStoreItem(e, 6, t);
        }
        GetHubCategory(e) {
          return this.GetStoreItem(e, 6);
        }
        BIsStoreItemMissing(e, t) {
          switch (t) {
            case 0:
              return this.BIsAppMissing(e);
            case 1:
              return this.BIsPackageMissing(e);
            case 2:
              return this.BIsBundleMissing(e);
            case 4:
              return this.BIsTagMissing(e);
            case 5:
              return this.BIsCreatorMissing(e);
            case 6:
              return this.BIsHubCategoryMissing(e);
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
        BIsTagMissing(e) {
          return this.m_setUnavailableTags.has(e);
        }
        BIsCreatorMissing(e) {
          return this.m_setUnavailableCreators.has(e);
        }
        BIsHubCategoryMissing(e) {
          return this.m_setUnavailableHubCategories.has(e);
        }
        BIsStoreItemUnavailableDueToCountryRestriction(e, t) {
          switch (t) {
            case 0:
              return this.BIsAppUnavailableDueToCountryRestriction(e);
            case 1:
              return this.BIsPackageUnavailableDueToCountryRestriction(e);
            case 2:
              return this.BIsBundleUnavailableDueToCountryRestriction(e);
            case 4:
            case 5:
            case 6:
              return (
                console.error(
                  "BIsStoreItemUnavailableDueToCountryRestriction - tags, creators or categories don't have country restrictions. type: ",
                  t,
                ),
                !0
              );
            default:
              return console.error("BStoreItemMissing invalid type", t), !0;
          }
        }
        BIsAppUnavailableDueToCountryRestriction(e) {
          return this.m_setUnavailableDueToCountryRestrictionApps.has(e);
        }
        BIsPackageUnavailableDueToCountryRestriction(e) {
          return this.m_setUnavailableDueToCountryRestrictionPackages.has(e);
        }
        BIsBundleUnavailableDueToCountryRestriction(e) {
          return this.m_setUnavailableDueToCountryRestrictionBundles.has(e);
        }
        ReadResults(e, t) {
          let s = [];
          for (const r of e) s.push(this.ReadItem(r, t));
          return s;
        }
        ReadItem(e, t) {
          const s = e.item_type();
          let r = null;
          switch (s) {
            case 0:
              r = this.m_mapApps;
              break;
            case 1:
              r = this.m_mapPackages;
              break;
            case 2:
              r = this.m_mapBundles;
              break;
            case 4:
              r = this.m_mapTags;
              break;
            case 5:
              r = this.m_mapCreators;
              break;
            case 6:
              r = this.m_mapHubCategories;
              break;
            default:
              return console.error(`Invalid item type: ${s}`), null;
          }
          let i = r.get(e.id());
          if (
            (i ? i.MergeData(e, t) : ((i = new I(e, t)), r.set(e.id(), i)),
            t.include_included_items && e.included_items(!1))
          ) {
            for (const s of e.included_items().included_apps())
              this.ReadItem(s, t.included_item_data_request);
            for (const s of e.included_items().included_packages())
              this.ReadItem(s, t.included_item_data_request);
          }
          return i;
        }
      }
      (G.k_DataRequest_CommonOnly = {}),
        (G.k_DataRequest_BasicInfo = { include_basic_info: !0 }),
        (G.k_DataRequest_Assets = { include_assets: !0 }),
        (G.k_DataRequest_IncludeAll = {
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
      const B = G;
    },
    86437: (e, t, s) => {
      var r;
      function i(e) {
        return "app" == e ? 0 : "sub" == e ? 1 : 2;
      }
      function a(e) {
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
      function n(e) {
        switch (e) {
          case "sub":
            return 1;
          case "bundle":
            return 2;
          default:
            return 0;
        }
      }
      function o(e, t) {
        switch (e) {
          case 2:
            return "bundle";
          case 1:
            return "sub";
          default:
            switch (t) {
              case 0:
              default:
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
            }
        }
      }
      function l(e) {
        switch (e) {
          case 2:
            return "bundle";
          case 1:
            return "sub";
          default:
            return "app";
        }
      }
      s.d(t, {
        $k: () => r,
        Ds: () => o,
        GV: () => i,
        Hy: () => l,
        TM: () => n,
        qE: () => a,
      }),
        (function (e) {
          (e[(e.k_NotRejected = -1)] = "k_NotRejected"),
            (e[(e.k_RejectNoMainCap = 0)] = "k_RejectNoMainCap"),
            (e[(e.k_RejectWrongPlatform = 1)] = "k_RejectWrongPlatform"),
            (e[(e.k_RejectNoComingSoon = 2)] = "k_RejectNoComingSoon"),
            (e[(e.k_RejectNoVR = 3)] = "k_RejectNoVR"),
            (e[(e.k_RejectCreatorClan = 4)] = "k_RejectCreatorClan"),
            (e[(e.k_RejectIgnoredGame = 5)] = "k_RejectIgnoredGame"),
            (e[(e.k_RejectSupportedLanguage = 6)] =
              "k_RejectSupportedLanguage"),
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
    },
    80886: (e, t, s) => {
      s.d(t, {
        Vm: () => d,
        ie: () => c,
        jk: () => l,
        vs: () => u,
        wZ: () => h,
      });
      var r = s(80751),
        i = s.n(r),
        a = s(47427),
        n = s(20417),
        o = s(34310);
      function l(e, t, s, r) {
        const l = (0, a.useRef)(),
          u = (0, a.useRef)(void 0),
          c = (0, n.NW)();
        l.current = e;
        const [d, _] = (0, a.useState)(void 0),
          {
            include_assets: h,
            include_release: m,
            include_platforms: p,
            include_all_purchase_options: g,
            include_screenshots: I,
            include_trailers: f,
            include_ratings: v,
            include_tag_count: R,
            include_reviews: b,
            include_basic_info: C,
            include_supported_languages: S,
            include_full_description: y,
            include_included_items: G,
            include_assets_without_overrides: B,
            apply_user_filters: P,
          } = s;
        if (
          ((0, a.useEffect)(() => {
            const s = {
              include_assets: h,
              include_release: m,
              include_platforms: p,
              include_all_purchase_options: g,
              include_screenshots: I,
              include_trailers: f,
              include_ratings: v,
              include_tag_count: R,
              include_reviews: b,
              include_basic_info: C,
              include_supported_languages: S,
              include_full_description: y,
              include_included_items: G,
              include_assets_without_overrides: B,
              apply_user_filters: P,
            };
            let a = null;
            return (
              !e ||
                o.Z.Get().BHasStoreItem(e, t, s) ||
                (void 0 !== d && r && r == u.current) ||
                (r !== u.current && (_(void 0), (u.current = r)),
                (a = i().CancelToken.source()),
                o.Z.Get()
                  .QueueStoreItemRequest(e, t, s)
                  .then((t) => {
                    (null == a ? void 0 : a.token.reason) ||
                      l.current !== e ||
                      _(1 == t),
                      c();
                  })),
              () =>
                null == a ? void 0 : a.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, r, d, h, m, p, g, I, f, v, R, b, C, S, y, G, B, P, c]),
          !e)
        )
          return [null, 2];
        if (!1 === d) return [void 0, 2];
        if (o.Z.Get().BIsStoreItemMissing(e, t)) return [void 0, 2];
        if (!o.Z.Get().BHasStoreItem(e, t, s)) return [void 0, 1];
        const k = o.Z.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return k ? [k, 3] : [null, 2];
      }
      function u(e, t, s) {
        return l(e, 0, t, s);
      }
      function c(e, t, s) {
        return l(e, 1, t, s);
      }
      function d(e, t, s) {
        const [r, i] = l(e, t, s),
          [n, o] = (0, a.useState)(null),
          [c, d] = u(n, s);
        return (
          (0, a.useEffect)(() => {
            var e;
            if (
              1 == (null == r ? void 0 : r.GetStoreItemType()) &&
              !(null === (e = r.GetAssets()) || void 0 === e
                ? void 0
                : e.GetHeaderURL()) &&
              1 == (null == r ? void 0 : r.GetIncludedAppIDs().length)
            ) {
              const e = r.GetIncludedAppIDs()[0];
              o(e);
            }
          }, [r]),
          n && (null == c ? void 0 : c.BIsVisible()) ? [c, d] : [r, i]
        );
      }
      function _(e, t, s, r) {
        const l = (0, n.NW)(),
          {
            include_assets: u,
            include_release: c,
            include_platforms: d,
            include_all_purchase_options: _,
            include_screenshots: h,
            include_trailers: m,
            include_ratings: p,
            include_tag_count: g,
            include_reviews: I,
            include_basic_info: f,
            include_supported_languages: v,
            include_full_description: R,
            include_included_items: b,
            include_assets_without_overrides: C,
            apply_user_filters: S,
          } = s;
        if (
          ((0, a.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const s = {
                include_assets: u,
                include_release: c,
                include_platforms: d,
                include_all_purchase_options: _,
                include_screenshots: h,
                include_trailers: m,
                include_ratings: p,
                include_tag_count: g,
                include_reviews: I,
                include_basic_info: f,
                include_supported_languages: v,
                include_full_description: R,
                include_included_items: b,
                include_assets_without_overrides: C,
                apply_user_filters: S,
              },
              r = e.filter(
                (e) =>
                  !(
                    o.Z.Get().BHasStoreItem(e, t, s) ||
                    o.Z.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == r.length) return;
            const a = i().CancelToken.source(),
              n = r.map((e) => o.Z.Get().QueueStoreItemRequest(e, t, s));
            return (
              Promise.all(n).then(() => {
                a.token.reason || l();
              }),
              () => a.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, r, l, u, c, d, _, h, m, p, g, I, f, v, R, b, C, S]),
          !e)
        )
          return 2;
        if (
          !e.every(
            (e) =>
              o.Z.Get().BHasStoreItem(e, t, s) ||
              o.Z.Get().BIsStoreItemMissing(e, t),
          )
        )
          return 1;
        return e.every((e) =>
          o.Z.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? 3
          : 2;
      }
      function h(e, t, s) {
        return _(e, 0, t, s);
      }
    },
    16649: (e, t, s) => {
      s.d(t, { l: () => n });
      var r = s(80751),
        i = s.n(r),
        a = s(79545);
      function n(e) {
        if (i().isCancel(e))
          return { strErrorMsg: "Action Cancelled:" + e, errorCode: 52 };
        if (
          void 0 !== e.response &&
          e.response.data &&
          "object" == typeof e.response.data
        ) {
          if ("msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.msg,
              errorCode: e.response.data.success,
            };
          if ("err_msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.err_msg,
              errorCode: e.response.data.success,
            };
          if ("message" in e.response.data)
            return {
              strErrorMsg: e.response.data.message,
              errorCode: e.response.data.success,
            };
          if ("success" in e.response.data)
            return {
              strErrorMsg: "error code: " + e.response.data.success,
              errorCode: e.response.data.success,
            };
        } else if ("object" == typeof e.data) {
          if ("msg" in e.data)
            return { strErrorMsg: e.data.msg, errorCode: e.data.success };
          if ("err_msg" in e.data)
            return { strErrorMsg: e.data.err_msg, errorCode: e.data.success };
          if ("message" in e.data)
            return { strErrorMsg: e.data.message, errorCode: e.data.success };
          if ("success" in e.data)
            return {
              strErrorMsg: "error code: " + e.data.success,
              errorCode: e.data.success,
            };
        } else {
          if (void 0 !== e.success && void 0 !== e.msg)
            return { strErrorMsg: e.msg, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.message)
            return { strErrorMsg: e.message, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.err_msg)
            return { strErrorMsg: e.err_msg, errorCode: e.success };
          if ("string" == typeof e && e.length > 1024)
            console.groupCollapsed(
              "GetMsgAndErrorCodeFromResponse cannot parse: ",
            ),
              console.warn(e),
              console.groupEnd();
          else {
            if ("object" == typeof e && e instanceof a.gA)
              return {
                strErrorMsg: "" + e.GetErrorMessage(),
                errorCode: e.GetEResult(),
              };
            console.warn("GetMsgAndErrorCodeFromResponse cannot parse: ", e);
          }
        }
        return "object" == typeof e && "status" in e
          ? {
              strErrorMsg: "Unknown Error: " + e + "\nStatus Code:" + e.status,
              errorCode: 2,
            }
          : { strErrorMsg: "Unknown Error: " + e, errorCode: 2 };
      }
    },
  },
]);
