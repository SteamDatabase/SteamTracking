/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [5859],
  {
    72839: (e, t, s) => {
      s.d(t, { Bn: () => u, hS: () => o, rV: () => n });
      var r = s(15161),
        a = s(78327),
        i = s(2160);
      s(94601);
      function n(e, t) {
        e.Body().set_context(o(t));
      }
      function o(e) {
        let t = new r.TS();
        return (
          e || t.set_country_code(a.TS.COUNTRY),
          t.set_language(a.TS.LANGUAGE),
          a.TS.EREALM != i.TU.k_ESteamRealmUnknown &&
            t.set_steam_realm(a.TS.EREALM),
          t
        );
      }
      function u(e, t) {
        e.Body().set_data_request(r.gn.fromObject(t));
      }
    },
    75279: (e, t, s) => {
      s.d(t, { Ay: () => _, DJ: () => I });
      var r = s(15161),
        a = s(62792),
        i = s(81393),
        n = s(61859),
        o = s(91675),
        u = s(78327),
        l = s(63369),
        c = s(62490);
      class _ {
        m_eItemType;
        m_unID;
        m_bVisible = !1;
        m_strName;
        m_strStoreURLPath;
        m_unAppID;
        m_eAppType;
        m_rgIncludedAppTypes;
        m_rgIncludedAppIDs;
        m_bIsFree;
        m_bIsFreeTemporary;
        m_bIsComingSoon;
        m_bIsEarlyAccess;
        m_RelatedItems;
        m_ContentDescriptorIDs;
        m_StoreCategories;
        m_ReviewInfo;
        m_BasicInfo;
        m_rgStoreTags = [];
        m_rgStoreTagIDs = [];
        m_Assets;
        m_AssetsWithoutOverrides;
        m_ReleaseInfo;
        m_Platforms;
        m_BestPurchaseOption;
        m_SelfPurchaseOption;
        m_rgPurchaseOptions;
        m_Screenshots;
        m_Trailers;
        m_rgSupportedLanguages;
        m_strStoreURLPathOverride;
        m_freeWeekend;
        m_DataRequested = { include_tag_count: 0 };
        m_strInternalName;
        m_rgLinks;
        m_userFilterFailure;
        constructor(e, t) {
          (this.m_eItemType = e.item_type()),
            (this.m_unID = e.id()),
            (this.m_bVisible = !!e.visible()),
            (this.m_strName = e.name()),
            (this.m_strStoreURLPath = e.store_url_path()),
            (this.m_unAppID = e.appid()),
            (this.m_eAppType = e.type()),
            (this.m_rgIncludedAppTypes = e.included_types()),
            (this.m_rgIncludedAppIDs = e.included_appids()),
            (this.m_bIsFree = !!e.is_free()),
            (this.m_bIsFreeTemporary = !!e.is_free_temporarily()),
            (this.m_bIsComingSoon =
              !!e.is_coming_soon() || !!e.release()?.is_coming_soon()),
            (this.m_bIsEarlyAccess = !!e.is_early_access()),
            (this.m_RelatedItems = e.related_items()?.toObject()),
            (this.m_ContentDescriptorIDs = e.content_descriptorids()),
            (this.m_StoreCategories = e.categories().toObject()),
            (this.m_BestPurchaseOption = e.best_purchase_option()?.toObject()),
            (this.m_strStoreURLPathOverride = e.store_url_path_override()),
            (this.m_freeWeekend = e.free_weekend()?.toObject()),
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
            ((this.m_Assets = new d(e.assets(), e.id())),
            (this.m_DataRequested.include_assets = !0)),
            t.include_assets_without_overrides &&
              !this.m_AssetsWithoutOverrides &&
              ((this.m_AssetsWithoutOverrides = new d(
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
              ((this.m_Screenshots = new g(e.screenshots())),
              (this.m_DataRequested.include_screenshots = !0)),
            t.include_trailers &&
              !this.m_Trailers &&
              ((this.m_Trailers = new h(e.trailers())),
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
              (this.m_DataRequested.include_supported_languages = !0)),
            t.include_links &&
              !this.m_rgLinks &&
              ((this.m_rgLinks = e.links().map((e) => e.toObject())),
              (this.m_DataRequested.include_links = !0)),
            t.apply_user_filters &&
              !this.m_userFilterFailure &&
              ((this.m_userFilterFailure = e.user_filter_failure()?.toObject()),
              (this.m_DataRequested.apply_user_filters = !0));
        }
        static BDataRequestContainsOtherDataRequest(e, t) {
          return Boolean(
            (!t.include_assets || e.include_assets) &&
              (!t.include_assets_without_overrides ||
                e.include_assets_without_overrides) &&
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
              (!t.include_supported_languages ||
                e.include_supported_languages) &&
              (!t.include_links || e.include_links),
          );
        }
        BContainDataRequest(e) {
          return _.BDataRequestContainsOtherDataRequest(
            this.m_DataRequested,
            e,
          );
        }
        BCheckDataRequestIncluded(e) {
          ("dev" != u.TS.WEB_UNIVERSE && "beta" != u.TS.WEB_UNIVERSE) ||
            (0, i.wT)(
              this.BContainDataRequest(e),
              `Requested data without for ${(0, a.Rz)(this.m_eItemType)} @ ${this.m_unID}`,
              e,
              this.m_DataRequested,
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
        GetStorePageURL(e = !1) {
          return e && this.HasDemoStandaloneStorePage()
            ? u.TS.STORE_BASE_URL +
                "app/" +
                this.GetDemoStandaloneStorePageAppIDs()[0]
            : u.TS.STORE_BASE_URL + this.m_strStoreURLPath;
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
            ? u.TS.COMMUNITY_BASE_URL + "app/" + this.GetAppID()
            : null;
        }
        GetCommunityDiscussionForumsURL() {
          return this.GetAppID()
            ? u.TS.COMMUNITY_BASE_URL +
                "app/" +
                this.GetAppID() +
                "/discussions/"
            : null;
        }
        GetAppID() {
          return this.m_unAppID;
        }
        GetAppType() {
          return this.m_eAppType;
        }
        BIsApplicationOrTool() {
          return 6 == this.GetAppType() || 13 == this.GetAppType();
        }
        k_regexSalePage =
          /^https?:\/\/[^\/]*(?:valvesoftware|steampowered).com\/(?:(curator|dev|developer|pub|publisher|franchise)\/[0-9a-zA-Z\-_]+\/)?sale\//;
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
          return this.m_freeWeekend?.end_time;
        }
        GetFreeWeekendPlayTextOverride() {
          return this.m_freeWeekend?.text;
        }
        BIsEarlyAccess() {
          return this.m_bIsEarlyAccess;
        }
        GetParentAppID() {
          return this.m_RelatedItems?.parent_appid;
        }
        BHasDemo() {
          return (this.m_RelatedItems?.demo_appid?.length ?? 0) > 0;
        }
        GetDemoAppIDs() {
          return this.m_RelatedItems?.demo_appid ?? [];
        }
        HasDemoStandaloneStorePage() {
          return (this.m_RelatedItems?.standalone_demo_appid?.length ?? 0) > 0;
        }
        GetDemoStandaloneStorePageAppIDs() {
          return this.m_RelatedItems?.standalone_demo_appid ?? [];
        }
        GetContentDescriptorIDs() {
          return this.m_ContentDescriptorIDs;
        }
        HasContentDescriptorID(e) {
          return this.m_ContentDescriptorIDs?.includes(e);
        }
        GetStoreCategories_SupportedPlayers() {
          return this.m_StoreCategories?.supported_player_categoryids || [];
        }
        GetStoreCategories_Features() {
          return this.m_StoreCategories?.feature_categoryids || [];
        }
        GetStoreCategories_Controller() {
          return this.m_StoreCategories?.controller_categoryids || [];
        }
        BHasStoreCategory(e) {
          return Boolean(
            this.GetStoreCategories_SupportedPlayers().find((t) => e === t) ||
              this.GetStoreCategories_Features().find((t) => e === t) ||
              this.GetStoreCategories_Controller().find((t) => e === t),
          );
        }
        GetFilteredReviewSummary() {
          return (
            this.BCheckDataRequestIncluded({ include_reviews: !0 }),
            this.m_ReviewInfo?.summary_filtered
          );
        }
        GetUnfilteredReviewSummary() {
          return (
            this.BCheckDataRequestIncluded({ include_reviews: !0 }),
            this.m_ReviewInfo?.summary_unfiltered ||
              this.m_ReviewInfo?.summary_filtered
          );
        }
        GetFilteredReviewSummaryLanguage() {
          return (
            this.BCheckDataRequestIncluded({ include_reviews: !0 }),
            this.m_ReviewInfo?.summary_language_specific
          );
        }
        GetShortDescription() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo?.short_description ?? ""
          );
        }
        GetDeveloperNames() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo?.developers
              ?.map((e) => e.name.trim())
              ?.filter((e) => e?.length > 0) ?? []
          );
        }
        GetFranchiseNames() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo?.franchises
              ?.map((e) => e.name.trim())
              ?.filter((e) => e?.length > 0) ?? []
          );
        }
        GetPublisherNames() {
          this.BCheckDataRequestIncluded({ include_basic_info: !0 });
          const e =
            this.m_BasicInfo?.publishers
              ?.map((e) => e.name.trim())
              ?.filter((e) => e?.length > 0) ?? [];
          return e?.length > 0 ? e : this.GetDeveloperNames();
        }
        GetAllCreatorClanIDs() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo
              ? m([
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
            this.m_BasicInfo ? m(this.m_BasicInfo.publishers) : []
          );
        }
        GetAllDeveloperCreatorClans() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo ? m(this.m_BasicInfo.developers) : []
          );
        }
        GetAllFranchiseCreatorClans() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo ? m(this.m_BasicInfo.franchises) : []
          );
        }
        GetCapsuleHeadline() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo?.capsule_headline
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
          return (
            this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
            this.m_rgStoreTagIDs?.length > 0
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
          this.BCheckDataRequestIncluded({ include_release: !0 });
          let e = this.m_ReleaseInfo?.original_steam_release_date;
          return e || (e = this.GetReleaseDateRTime()), e;
        }
        GetReleaseDateRTime(e = !1) {
          if (
            (this.BCheckDataRequestIncluded({ include_release: !0 }),
            this.m_ReleaseInfo?.is_coming_soon && !e)
          )
            return 0;
          let t = this.m_ReleaseInfo?.steam_release_date;
          return t || (t = this.m_ReleaseInfo?.original_release_date), t;
        }
        GetFormattedSteamReleaseDate() {
          if (
            (this.BCheckDataRequestIncluded({ include_release: !0 }),
            this.m_ReleaseInfo?.is_coming_soon)
          ) {
            if (this.m_ReleaseInfo?.coming_soon_display)
              return (0, l.d)(this.m_ReleaseInfo);
            if (this.m_ReleaseInfo?.custom_release_date_message)
              return this.m_ReleaseInfo.custom_release_date_message;
            const e = this.m_ReleaseInfo?.steam_release_date;
            return e
              ? this.m_ReleaseInfo?.is_abridged_release_date
                ? (0, o.sq)(new Date(1e3 * e))
                : (0, n.$z)(e)
              : "";
          }
          const e = this.GetReleaseDateRTime();
          return e ? (0, n.$z)(e) : "";
        }
        BIsComingSoon() {
          return this.m_bIsComingSoon;
        }
        BIsCustomComingSoonDisplay() {
          return (
            this.BCheckDataRequestIncluded({ include_release: !0 }),
            !!this.BIsComingSoon() &&
              (this.m_ReleaseInfo?.coming_soon_display
                ? ["text_tba", "text_comingsoon"].includes(
                    this.m_ReleaseInfo.coming_soon_display,
                  )
                : !!this.m_ReleaseInfo?.custom_release_date_message)
          );
        }
        BLimitedLaunchActive() {
          return this.m_ReleaseInfo?.limited_launch_active;
        }
        BIsPrePurchase() {
          return (
            this.BIsComingSoon() &&
            Boolean(this.GetBestPurchaseOption()?.packageid)
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
          if (this.m_BestPurchaseOption?.final_price_in_cents)
            return Number.parseInt(
              this.m_BestPurchaseOption.final_price_in_cents,
            );
        }
        GetBestPurchasePriceFormatted() {
          return this.m_BestPurchaseOption?.formatted_final_price;
        }
        GetBestPurchaseOriginalPriceInCents() {
          return this.m_BestPurchaseOption?.original_price_in_cents
            ? Number.parseInt(this.m_BestPurchaseOption.final_price_in_cents)
            : this.GetBestPurchasePriceInCents();
        }
        GetBestPurchaseOriginalPriceFormatted() {
          return (
            this.m_BestPurchaseOption?.formatted_original_price ??
            this.m_BestPurchaseOption?.formatted_final_price
          );
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
          return this.GetScreenshots(!0).length > 0;
        }
        GetScreenshots(e) {
          return (
            this.BCheckDataRequestIncluded({ include_screenshots: !0 }),
            this.m_Screenshots
              ? e
                ? this.m_Screenshots.GetOnlyAllAgesScreenshots()
                : this.m_Screenshots.GetAllAgesAndMatureScreenshots()
              : []
          );
        }
        BIsAgeSafeScreenshot(e) {
          return this.m_Screenshots.GetOnlyAllAgesScreenshots().includes(e);
        }
        BHasTrailers(e) {
          return (
            this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            this.m_Trailers?.BHasTrailers(e)
          );
        }
        BHasHighlightTrailers(e) {
          return (
            this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            (this.m_Trailers?.GetHighlightTrailers(e)?.length ?? 0) > 0
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
            this.m_rgSupportedLanguages?.some(
              (t) =>
                t.elanguage == e &&
                (t.supported || t.subtitles || t.full_audio),
            ) || !1
          );
        }
        GetAllLanguagesWithSomeSupport() {
          return (
            this.BCheckDataRequestIncluded({ include_supported_languages: !0 }),
            this.m_rgSupportedLanguages
              ?.filter((e) => e.supported || e.subtitles || e.full_audio)
              .map((e) => e.elanguage) || []
          );
        }
        GetDataRequest() {
          return this.m_DataRequested;
        }
        GetMicroTrailer(e) {
          if (
            (this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            this.m_Trailers)
          ) {
            const t = this.m_Trailers
              .GetAllTrailers(e)
              .find((e) => !!e.GetMicroTrailer());
            if (t) return t.GetMicroTrailer();
          }
          return null;
        }
        GetLinks() {
          return (
            this.BCheckDataRequestIncluded({ include_links: !0 }),
            this.m_rgLinks
          );
        }
        GetUserFilterFailure() {
          return (
            this.BCheckDataRequestIncluded({ apply_user_filters: !0 }),
            this.m_userFilterFailure
          );
        }
        ReplaceBestPurchaseOption(e) {
          this.m_BestPurchaseOption = e;
        }
        GetInternalName() {
          return this.m_strInternalName;
        }
      }
      function m(e) {
        if (!e?.length) return [];
        const t = e.map((e) => e.creator_clan_account_id).filter((e) => !!e);
        return Array.from(new Set(t));
      }
      class d {
        m_strMainCapsuleURL;
        m_strSmallCapsuleURL;
        m_strHeaderURL;
        m_strPackageHeaderURL;
        m_strPageBackgroundURL;
        m_strRawPageBackgroundURL;
        m_strHeroCapsuleURL;
        m_strHeroCapsuleURL_2x;
        m_strLibraryCapsuleURL;
        m_strLibraryCapsuleURL_2x;
        m_strLibraryHeroURL;
        m_strLibraryHeroURL_2x;
        m_strCommunityIcon;
        m_strCommunityIcon_Full;
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
            e.raw_page_background() &&
              (this.m_strRawPageBackgroundURL = this.ConstructAssetURL(
                s,
                e.raw_page_background(),
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
              ((this.m_strCommunityIcon = `${u.TS.MEDIA_CDN_COMMUNITY_URL}images/apps/${t}/${e.community_icon()}.jpg`),
              (this.m_strCommunityIcon_Full = `${u.TS.MEDIA_CDN_COMMUNITY_URL}images/apps/${t}/${e.community_icon()}_full.jpg`)),
            e.page_background_path() &&
              (this.m_strPageBackgroundURL = `${u.TS.STORE_CDN_URL}images/storepagebackground/${e.page_background_path()}`);
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
        GetRawPageBackgroundURL() {
          return this.m_strRawPageBackgroundURL;
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
          return (
            u.TS.BASE_URL_SHARED_CDN +
            "/store_item_assets/" +
            e.replace("${FILENAME}", t)
          );
        }
        GetCommunityIconURL() {
          return this.m_strCommunityIcon;
        }
        GetCommunityIconURL_Full() {
          return this.m_strCommunityIcon_Full;
        }
      }
      class h {
        m_mapTrailer;
        m_highlightTrailers;
        m_highlightTrailersAllAges;
        m_otherTrailers;
        m_otherTrailersAllAges;
        constructor(e) {
          (this.m_highlightTrailers =
            e.highlights()?.map((e) => new p(e)) ?? []),
            (this.m_highlightTrailersAllAges = this.m_highlightTrailers.filter(
              (e) => e.BIsAllAges(),
            )),
            (this.m_otherTrailers =
              e.other_trailers()?.map((e) => new p(e)) ?? []),
            (this.m_otherTrailersAllAges = this.m_otherTrailers.filter((e) =>
              e.BIsAllAges(),
            )),
            (this.m_mapTrailer = new Map(
              [...this.m_highlightTrailers, ...this.m_otherTrailers].map(
                (e) => [e.GetTrailerID(), e],
              ),
            ));
        }
        BHasTrailers(e) {
          return e
            ? this.m_highlightTrailersAllAges.length > 0 ||
                this.m_otherTrailersAllAges.length > 0
            : this.m_highlightTrailers.length > 0 ||
                this.m_otherTrailers.length > 0;
        }
        GetHighlightTrailers(e) {
          return e ? this.m_highlightTrailersAllAges : this.m_highlightTrailers;
        }
        GetOtherTrailers(e) {
          return e ? this.m_otherTrailersAllAges : this.m_otherTrailers;
        }
        GetAllTrailers(e) {
          return [...this.GetHighlightTrailers(e), ...this.GetOtherTrailers(e)];
        }
        GetTrailerByID(e) {
          return this.m_mapTrailer.get(e);
        }
      }
      class p {
        m_strTrailerName;
        m_eTrailerCategory;
        m_nBaseID;
        m_MicroTrailer;
        m_rgDashTrailers;
        m_rgHlsTrailer;
        m_strScreenshotMedium;
        m_strScreenshotFull;
        m_bIsAllAges;
        constructor(e) {
          (this.m_strTrailerName = e.trailer_name()),
            (this.m_nBaseID = e.trailer_base_id()),
            (this.m_eTrailerCategory = e.trailer_category());
          const t = e.trailer_url_format();
          if (
            (t &&
              (e.microtrailer() &&
                (this.m_MicroTrailer = this.ExtractTrailerFormats(
                  t,
                  e.microtrailer(),
                )),
              e.screenshot_medium() &&
                (this.m_strScreenshotMedium = this.ConstructScreenshotURL(
                  t,
                  e.screenshot_medium(),
                )),
              e.screenshot_full() &&
                (this.m_strScreenshotFull = this.ConstructScreenshotURL(
                  t,
                  e.screenshot_full(),
                ))),
            e.adaptive_trailers())
          ) {
            this.m_rgDashTrailers = this.ExtractAdaptiveTrailers(
              e.adaptive_trailers(),
              "dash",
            );
            let t = this.ExtractAdaptiveTrailers(e.adaptive_trailers(), "hls");
            t.length > 0 && (this.m_rgHlsTrailer = t[0]);
          }
          this.m_bIsAllAges = e.all_ages() ?? !0;
        }
        GetName() {
          return this.m_strTrailerName;
        }
        GetTrailerID() {
          return this.m_nBaseID;
        }
        GetTrailerCategory() {
          return this.m_eTrailerCategory;
        }
        GetTrailersDash() {
          return this.m_rgDashTrailers;
        }
        GetTrailerHls() {
          return this.m_rgHlsTrailer;
        }
        GetMicroTrailer() {
          return this.m_MicroTrailer;
        }
        GetScreenshot() {
          return this.m_strScreenshotFull
            ? this.m_strScreenshotFull
            : this.m_strScreenshotMedium;
        }
        BIsAllAges() {
          return this.m_bIsAllAges;
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
        ExtractAdaptiveTrailers(e, t) {
          let s = `${t}_`,
            r = e.filter(
              (e) => e.encoding() && e.cdn_path() && e.encoding().startsWith(s),
            ),
            a = r.findIndex((e) => e.encoding().endsWith("_av1"));
          return (
            a > 0 && c.yY(r, a, 0),
            r.map((e) => this.ConstructAssetURL(e.cdn_path(), ""))
          );
        }
        ConstructScreenshotURL(e, t) {
          return (
            u.TS.BASE_URL_SHARED_CDN +
            "/store_item_assets/" +
            e.replace("${FILENAME}", t)
          );
        }
        ConstructAssetURL(e, t) {
          return (
            u.TS.VIDEO_CDN_URL +
            "/store_trailers/" +
            e.replace("${FILENAME}", t)
          );
        }
      }
      class g {
        m_rgAllScreenshots;
        m_rgOnlyAllAgesScreenshots;
        constructor(e) {
          const t = e.all_ages_screenshots() || [],
            s = e.mature_content_screenshots() || [],
            r = (e) =>
              u.TS.BASE_URL_SHARED_CDN + "/store_item_assets/" + e.filename();
          (this.m_rgOnlyAllAgesScreenshots = t.map(r)),
            (this.m_rgAllScreenshots = [...t, ...s]
              .sort((e, t) => e.ordinal() - t.ordinal())
              .map(r));
        }
        GetAllAgesAndMatureScreenshots() {
          return this.m_rgAllScreenshots;
        }
        GetOnlyAllAgesScreenshots() {
          return this.m_rgOnlyAllAgesScreenshots;
        }
      }
      function I(e) {
        if (e)
          switch (e.GetStoreItemType()) {
            case 0:
              return { appid: e.GetAppID() };
            case 1:
              return { packageid: e.GetID() };
            case 2:
              return { bundleid: e.GetID() };
            case 4:
              return { tagid: e.GetID() };
            case 5:
              return { creatorid: e.GetID() };
            case 6:
              return { hubcategoryid: e.GetID() };
            case 3:
            case -1:
              return;
            default:
              return void (0, i.z_)(
                e.GetStoreItemType(),
                `Unknown EStoreItemType ${e.GetStoreItemType()} ${(0, r.md)(e.GetStoreItemType())} `,
              );
          }
      }
    },
    16021: (e, t, s) => {
      s.d(t, { A: () => I });
      var r = s(34629),
        a = s(14947),
        i = s(56545),
        n = s(96059),
        o = s(59411),
        u = s(15161),
        l = s(81393),
        c = s(68797),
        _ = s(78327),
        m = s(72839),
        d = s(75279),
        h = s(6419);
      function p(e, t) {
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
          include_links: e.include_links || t.include_links,
        };
      }
      async function g(e, t) {
        const s = await e,
          r = await t;
        return 1 != s ? s : r;
      }
      class I {
        k_QueueWaitUntilRequestMS = 5;
        k_nMaxBatchSize = 250;
        m_bReturnUnavailableItems = !1;
        m_mapApps = new Map();
        m_mapPackages = new Map();
        m_mapBundles = new Map();
        m_mapTags = new Map();
        m_mapCreators = new Map();
        m_mapHubCategories = new Map();
        m_setUnavailableApps = new Set();
        m_setUnavailablePackages = new Set();
        m_setUnavailableBundles = new Set();
        m_setUnavailableTags = new Set();
        m_setUnavailableCreators = new Set();
        m_setUnavailableHubCategories = new Set();
        m_setUnavailableDueToCountryRestrictionApps = new Set();
        m_setUnavailableDueToCountryRestrictionPackages = new Set();
        m_setUnavailableDueToCountryRestrictionBundles = new Set();
        m_mapAppsInFlight = new Map();
        m_mapPackageInFlight = new Map();
        m_mapBundleInFlight = new Map();
        m_mapTagsInFlight = new Map();
        m_mapCreatorsInFlight = new Map();
        m_mapHubCategoriesInFlight = new Map();
        m_serviceTransport;
        m_bUsePartnerAPI = !1;
        m_bInitialized = !1;
        m_bActivelyResettingCache = !1;
        m_setPendingAppInfo = new Set();
        m_setPendingBundleInfo = new Set();
        m_setPendingPackageInfo = new Set();
        m_setPendingTagInfo = new Set();
        m_setPendingCreatorInfo = new Set();
        m_setPendingHubCategoryInfo = new Set();
        m_setPendingDataRequest = {};
        m_PendingInfoPromise;
        m_PendingInfoResolve = void 0;
        m_PendingTimer = void 0;
        k_AlreadyResolvedOK = Promise.resolve(1);
        k_AlreadyResolvedInvalid = Promise.resolve(8);
        k_AlreadyResolvedBusy = Promise.resolve(10);
        static sm_instance;
        static Get() {
          return (
            I.sm_instance ||
              ((I.sm_instance = new I()),
              (window.StoreItemCache = I.sm_instance)),
            I.sm_instance
          );
        }
        static Initialize(e, t) {
          const s = I.Get();
          return (
            (0, l.wT)(
              !s.m_bInitialized,
              "CStoreItemCache was already initialized; initialize it only once.",
            ),
            (s.m_serviceTransport = e),
            (s.m_bUsePartnerAPI = !!t),
            (s.m_bInitialized = !0),
            () => {
              (s.m_serviceTransport = void 0),
                (s.m_bUsePartnerAPI = !1),
                (s.m_bInitialized = !1);
            }
          );
        }
        SetSteamInterface(e) {
          this.SetServiceTransport(e.GetServiceTransport());
        }
        SetServiceTransport(e) {
          this.m_serviceTransport = e;
        }
        SetReturnUnavailableItems(e) {
          this.m_bReturnUnavailableItems = e;
        }
        GetReturnUnavailableItems() {
          return this.m_bReturnUnavailableItems;
        }
        async ResetCache() {
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
            await Promise.all(e),
            this.m_mapApps.clear(),
            this.m_mapBundles.clear(),
            this.m_mapPackages.clear(),
            this.m_mapTagsInFlight.clear(),
            this.m_mapCreatorsInFlight.clear(),
            this.m_mapHubCategoriesInFlight.clear(),
            (this.m_bActivelyResettingCache = !1);
        }
        static BIsInitialized() {
          return I.Get().m_bInitialized;
        }
        static k_DataRequest_CommonOnly = {};
        static k_DataRequest_BasicInfo = { include_basic_info: !0 };
        static k_DataRequest_Assets = { include_assets: !0 };
        static k_DataRequest_IncludeAll = {
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
          include_links: !0,
        };
        async QueueAppRequest(e, t) {
          return this.QueueStoreItemRequest(e, 0, t);
        }
        async QueuePackageRequest(e, t) {
          return this.QueueStoreItemRequest(e, 1, t);
        }
        async QueueBundleRequest(e, t) {
          return this.QueueStoreItemRequest(e, 2, t);
        }
        async QueueTagRequest(e, t) {
          return this.QueueStoreItemRequest(e, 4, t);
        }
        async QueueCreatorRequest(e, t) {
          return this.QueueStoreItemRequest(e, 5, t);
        }
        async QueueHubCategoryRequest(e, t) {
          return this.QueueStoreItemRequest(e, 6, t);
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
            e.include_links,
          ];
          for (const e of t) if (!0 !== e && void 0 !== e) return !1;
          return !0;
        }
        async QueueMultipleAppRequests(e, t) {
          if (!e || 0 == e.length) return 1;
          const s = (
            await Promise.all(e.map((e) => this.QueueStoreItemRequest(e, 0, t)))
          ).filter((e) => 1 != e);
          return s.length > 0 ? s[0] : 1;
        }
        async QueueMultiplePackageRequests(e, t) {
          if (!e || 0 == e.length) return 1;
          const s = (
            await Promise.all(e.map((e) => this.QueueStoreItemRequest(e, 1, t)))
          ).filter((e) => 1 != e);
          return s.length > 0 ? s[0] : 1;
        }
        async QueueMultipleBundleRequests(e, t) {
          if (!e || 0 == e.length) return 1;
          const s = (
            await Promise.all(e.map((e) => this.QueueStoreItemRequest(e, 2, t)))
          ).filter((e) => 1 != e);
          return s.length > 0 ? s[0] : 1;
        }
        async QueueMultipleTagRequests(e, t) {
          if (!e || 0 == e.length) return 1;
          const s = (
            await Promise.all(e.map((e) => this.QueueStoreItemRequest(e, 4, t)))
          ).filter((e) => 1 != e);
          return s.length > 0 ? s[0] : 1;
        }
        async QueueMultipleCreatorRequests(e, t) {
          if (!e || 0 == e.length) return 1;
          const s = (
            await Promise.all(e.map((e) => this.QueueStoreItemRequest(e, 5, t)))
          ).filter((e) => 1 != e);
          return s.length > 0 ? s[0] : 1;
        }
        async QueueMultipleHubCategoryRequests(e, t) {
          if (!e || 0 == e.length) return 1;
          const s = (
            await Promise.all(e.map((e) => this.QueueStoreItemRequest(e, 6, t)))
          ).filter((e) => 1 != e);
          return s.length > 0 ? s[0] : 1;
        }
        async QueueMultipleStoreItemRequests(e, t, s) {
          if (!e || 0 == e.length) return 1;
          const r = (
            await Promise.all(
              e.map((e, r) => this.QueueStoreItemRequest(e, t[r], s)),
            )
          ).filter((e) => 1 != e);
          return r.length > 0 ? r[0] : 1;
        }
        async QueueStoreItemRequest(e, t, s) {
          if (
            ((0, l.wT)(
              I.ValidateDataRequest(s),
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
              (0, l.wT)(
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
            (this.m_setPendingDataRequest = p(this.m_setPendingDataRequest, s)),
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
              (0, l.wT)(!1, `Unexpected Type ${t}`);
          }
          const a = this.m_PendingInfoPromise;
          return (
            this.m_setPendingAppInfo.size +
              this.m_setPendingPackageInfo.size +
              this.m_setPendingBundleInfo.size >=
              this.k_nMaxBatchSize &&
              (this.m_PendingTimer && window.clearTimeout(this.m_PendingTimer),
              this.FlushPendingInfo()),
            a
          );
        }
        async FlushPendingInfo() {
          if (void 0 === this.m_PendingInfoResolve) return;
          const e = this.m_PendingInfoResolve,
            t = Array.from(this.m_setPendingAppInfo),
            s = Array.from(this.m_setPendingPackageInfo),
            r = Array.from(this.m_setPendingBundleInfo),
            a = Array.from(this.m_setPendingTagInfo),
            i = Array.from(this.m_setPendingCreatorInfo),
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
            this.HintLoadStoreItems(t, s, r, a, i, n, o).then((t) => e(t));
        }
        async HintLoadStoreApps(e, t) {
          return this.HintLoadStoreItems(e, null, null, null, null, null, t);
        }
        async HintLoadStorePackages(e, t) {
          return this.HintLoadStoreItems(null, e, null, null, null, null, t);
        }
        async HintLoadStoreBundles(e, t) {
          return this.HintLoadStoreItems(null, null, e, null, null, null, t);
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
          return r &&
            d.Ay.BDataRequestContainsOtherDataRequest(r.dataRequest, s)
            ? r.promise
            : null;
        }
        async HintLoadStoreItems(e, t, s, r, a, i, n) {
          let o = null;
          const l = new Promise((e) => (o = e));
          let c = [],
            _ = [];
          (e || []).forEach((e) => {
            const t = this.GetPreviousSupersetLoadPromise(e, 0, n);
            if (t) _.push(t);
            else {
              c.push(u.O4.fromObject({ appid: e }));
              let t = p(this.GetStoreItemDataRequest(e, 0), n);
              const s = this.m_mapAppsInFlight.get(e);
              (t = p(s?.dataRequest, t)),
                s && _.push(s.promise),
                this.m_mapAppsInFlight.set(e, {
                  promise: s ? g(s.promise, l) : l,
                  dataRequest: t,
                });
            }
          }),
            (t || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(e, 1, n);
              if (t) _.push(t);
              else {
                c.push(u.O4.fromObject({ packageid: e }));
                let t = p(this.GetStoreItemDataRequest(e, 1), n);
                const s = this.m_mapPackageInFlight.get(e);
                (t = p(s?.dataRequest, t)),
                  s && _.push(s.promise),
                  this.m_mapPackageInFlight.set(e, {
                    promise: s ? g(s.promise, l) : l,
                    dataRequest: t,
                  });
              }
            }),
            (s || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(e, 2, n);
              if (t) _.push(t);
              else {
                c.push(u.O4.fromObject({ bundleid: e }));
                let t = p(this.GetStoreItemDataRequest(e, 2), n);
                const s = this.m_mapBundleInFlight.get(e);
                (t = p(s?.dataRequest, t)),
                  s && _.push(s.promise),
                  this.m_mapBundleInFlight.set(e, {
                    promise: s ? g(s.promise, l) : l,
                    dataRequest: t,
                  });
              }
            }),
            (r || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(e, 4, n);
              if (t) _.push(t);
              else {
                c.push(u.O4.fromObject({ tagid: e }));
                let t = p(this.GetStoreItemDataRequest(e, 4), n);
                const s = this.m_mapTagsInFlight.get(e);
                (t = p(s?.dataRequest, t)),
                  s && _.push(s.promise),
                  this.m_mapTagsInFlight.set(e, {
                    promise: s ? g(s.promise, l) : l,
                    dataRequest: t,
                  });
              }
            }),
            (a || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(e, 5, n);
              if (t) _.push(t);
              else {
                c.push(u.O4.fromObject({ creatorid: e }));
                let t = p(this.GetStoreItemDataRequest(e, 5), n);
                const s = this.m_mapCreatorsInFlight.get(e);
                (t = p(s?.dataRequest, t)),
                  s && _.push(s.promise),
                  this.m_mapCreatorsInFlight.set(e, {
                    promise: s ? g(s.promise, l) : l,
                    dataRequest: t,
                  });
              }
            }),
            (i || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(e, 6, n);
              if (t) _.push(t);
              else {
                c.push(u.O4.fromObject({ hubcategoryid: e }));
                let t = p(this.GetStoreItemDataRequest(e, 6), n);
                const s = this.m_mapHubCategoriesInFlight.get(e);
                (t = p(s?.dataRequest, t)),
                  s && _.push(s.promise),
                  this.m_mapHubCategoriesInFlight.set(e, {
                    promise: s ? g(s.promise, l) : l,
                    dataRequest: t,
                  });
              }
            });
          let m = 1;
          if (
            (c.length > 0 &&
              (m = await this.InternalHandleLoadStoreItems(c, n)),
            o(m),
            _.length > 0)
          ) {
            const e = await Promise.all(_);
            for (const t of e) 1 != t && 1 == m && (m = t);
          }
          return (
            (e || []).forEach((e) => this.m_mapAppsInFlight.delete(e)),
            (t || []).forEach((e) => this.m_mapPackageInFlight.delete(e)),
            (s || []).forEach((e) => this.m_mapBundleInFlight.delete(e)),
            (r || []).forEach((e) => this.m_mapTagsInFlight.delete(e)),
            (a || []).forEach((e) => this.m_mapCreatorsInFlight.delete(e)),
            (i || []).forEach((e) => this.m_mapHubCategoriesInFlight.delete(e)),
            m
          );
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
              let s = e.appid() ?? 0,
                r = t.appid() ?? 0;
              if (s != r) return s - r;
              let a = e.packageid() ?? 0,
                i = t.packageid() ?? 0;
              if (a != i) return a - i;
              let n = e.bundleid() ?? 0,
                o = t.bundleid() ?? 0;
              if (n != o) return n - o;
              let u = e.tagid() ?? 0,
                l = t.tagid() ?? 0;
              if (u != l) return u - l;
              let c = e.creatorid() ?? 0,
                _ = t.creatorid() ?? 0;
              if (c != _) return c - _;
              let m = e.hubcategoryid() ?? 0,
                d = t.hubcategoryid() ?? 0;
              return m != d ? m - d : 0;
            }),
            t
          );
        }
        GetServiceTransport() {
          return (
            this.m_serviceTransport ||
              (console.warn(
                "Service transport not initialized for StoreItemCache",
              ),
              (this.m_serviceTransport = new n.D(
                _.TS.WEBAPI_BASE_URL,
              ).GetAnonymousServiceTransport())),
            this.m_serviceTransport
          );
        }
        async InternalHandleLoadStoreItems(e, t) {
          let s = 1;
          (e = this.SortStoreItems(e)),
            t.include_included_items &&
              (t = {
                ...t,
                included_item_data_request: {
                  ...t,
                  include_included_items: !1,
                },
              });
          const r = new Array();
          try {
            const n = [];
            for (; e.length > 0; ) {
              const s = e.splice(0, this.k_nMaxBatchSize);
              if ((r.push(s), this.m_bUsePartnerAPI)) {
                const e = i.w.Init(o.St);
                e.Body().set_include_unpublished(!1);
                const r = e.Body().getitems_request(!0);
                r.set_context((0, m.hS)(this.m_bUsePartnerAPI)),
                  r.set_data_request(u.gn.fromObject(t)),
                  r.set_ids(s),
                  n.push(o.BT.GetItems(this.GetServiceTransport(), e));
              } else {
                const e = i.w.Init(u.eE);
                (0, m.rV)(e, this.m_bUsePartnerAPI),
                  (0, m.Bn)(e, t),
                  e.Body().set_ids(s),
                  n.push(u.$4.GetItems(this.GetServiceTransport(), e));
              }
            }
            (await Promise.all(n)).forEach((i, n) => {
              1 == i.GetEResult()
                ? i
                    .Body()
                    .store_items()
                    .forEach((s) => {
                      const r = s.id(),
                        n = s.item_type();
                      let o =
                          this.m_bReturnUnavailableItems && 15 == s.success(),
                        u = 1 == s.success() && !this.BIsStoreItemMissing(r, n);
                      if (o || u) this.ReadItem(s, t);
                      else {
                        switch (
                          ("dev" == _.TS.WEB_UNIVERSE &&
                            console.warn(
                              `Failed to load ${r} type ${n} with error ${s.success()}`,
                              s,
                            ),
                          n)
                        ) {
                          case 0:
                            this.m_setUnavailableApps.add(r),
                              this.m_mapApps.delete(r);
                            break;
                          case 1:
                            this.m_setUnavailablePackages.add(r),
                              this.m_mapPackages.delete(r);
                            break;
                          case 2:
                            this.m_setUnavailableBundles.add(r),
                              this.m_mapBundles.delete(r);
                            break;
                          case 4:
                            this.m_setUnavailableTags.add(r),
                              this.m_mapTags.delete(r);
                            break;
                          case 5:
                            this.m_setUnavailableCreators.add(r),
                              this.m_mapCreators.delete(r);
                            break;
                          case 6:
                            this.m_setUnavailableHubCategories.add(r),
                              this.m_mapHubCategories.delete(r);
                            break;
                          default:
                            console.error(
                              "CStoreItemCache.InternalHandleLoadStoreItems unexpected item_type in response " +
                                n +
                                " " +
                                r,
                            );
                        }
                        if (s.unvailable_for_country_restriction())
                          switch (n) {
                            case 0:
                              this.m_setUnavailableDueToCountryRestrictionApps.add(
                                r,
                              );
                              break;
                            case 1:
                              this.m_setUnavailableDueToCountryRestrictionPackages.add(
                                r,
                              );
                              break;
                            case 2:
                              this.m_setUnavailableDueToCountryRestrictionBundles.add(
                                r,
                              );
                              break;
                            case 4:
                            case 5:
                            case 6:
                              console.error(
                                "CStoreItemCache::InternalHandleLoadStoreItems - tags, creators or categories don't have country restrictions. eResult: " +
                                  i.GetEResult() +
                                  " message: " +
                                  i.Hdr().error_message(),
                                (0, a.HO)(e),
                              );
                          }
                      }
                    })
                : (console.warn(
                    "CStoreItemCache::InternalHandleLoadStoreItems failed with eResult: " +
                      i.GetEResult() +
                      " message: " +
                      i.Hdr().error_message(),
                    (0, a.HO)(e),
                  ),
                  (1 == i.Hdr().transport_error() || _.TS.FROM_WEB) &&
                    this.MarkStoreItemIDUnavailable(r[n]),
                  1 == s && (s = i.GetEResult()));
            });
          } catch (e) {
            const t = (0, c.H)(e);
            return (
              console.error(
                "CStoreItemCache::InternalHandleLoadStoreItems failed: " +
                  t.strErrorMsg,
                t,
              ),
              r.forEach((e) => this.MarkStoreItemIDUnavailable(e)),
              79
            );
          }
          return s;
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
          return s?.get(e);
        }
        GetStoreItemWithLegacyVisibilityCheck(e, t) {
          const s = this.GetStoreItem(e, t);
          return s && (this.m_bReturnUnavailableItems || s.BIsVisible())
            ? s
            : void 0;
        }
        GetStoreItemDataRequest(e, t) {
          return this.GetMapForType(t)?.get(e)?.GetDataRequest() || null;
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
          if (void 0 === s)
            return (
              console.warn(`Failed to load item data: ${e.success()}`), null
            );
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
          let a = r.get(e.id());
          if (
            (a ? a.MergeData(e, t) : ((a = new d.Ay(e, t)), r.set(e.id(), a)),
            t.include_included_items && e.included_items(!1))
          ) {
            for (const s of e.included_items().included_apps())
              this.ReadItem(s, t.included_item_data_request);
            for (const s of e.included_items().included_packages())
              this.ReadItem(s, t.included_item_data_request);
          }
          return a;
        }
      }
      (0, r.Cg)([h.o], I.prototype, "ReadItem", null);
    },
    62792: (e, t, s) => {
      var r;
      function a(e) {
        return "app" == e ? 0 : "sub" == e ? 1 : 2;
      }
      function i(e, t = -1) {
        return e?.appid
          ? 0
          : e?.packageid
            ? 1
            : e?.bundleid
              ? 2
              : e?.creatorid
                ? 5
                : e?.hubcategoryid
                  ? 6
                  : e?.tagid
                    ? 4
                    : t;
      }
      function n(e) {
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
      function o(e) {
        switch (e) {
          case "sub":
            return 1;
          case "bundle":
            return 2;
          default:
            return 0;
        }
      }
      function u(e) {
        switch (e) {
          case 2:
            return "bundle";
          case 1:
            return "sub";
          default:
            return "app";
        }
      }
      function l(e, t, s) {
        return e
          ? { id: e, item_type: "app" }
          : t
            ? { id: t, item_type: "sub" }
            : { id: s, item_type: "bundle" };
      }
      function c(e) {
        return "app" == e?.item_type
          ? { appid: e.id }
          : "sub" == e?.item_type
            ? { packageid: e.id }
            : "bundle" == e?.item_type
              ? { bundleid: e.id }
              : null;
      }
      function _(e) {
        return e?.appid
          ? { item_type: "app", id: e.appid }
          : e?.packageid
            ? { item_type: "sub", id: e.packageid }
            : e?.bundleid
              ? { item_type: "bundle", id: e.bundleid }
              : null;
      }
      function m(e, t) {
        return 0 == t
          ? { id: e, item_type: "app" }
          : 1 == t
            ? { id: e, item_type: "sub" }
            : 2 == t
              ? { id: e, item_type: "bundle" }
              : (console.error(
                  "ConvertEStoreItemTypeToStoreItemKey unexpected item type: ",
                  t,
                ),
                { id: 0, item_type: "app" });
      }
      function d(e, t) {
        return 0 == t
          ? { appid: e }
          : 1 == t
            ? { packageid: e }
            : 2 == t
              ? { bundleid: e }
              : 4 == t
                ? { tagid: e }
                : 5 == t
                  ? { creatorid: e }
                  : 6 == t
                    ? { hubcategoryid: e }
                    : null;
      }
      function h(e) {
        return e?.appid
          ? "a" + e.appid
          : e?.packageid
            ? "p" + e.packageid
            : e?.bundleid
              ? "b" + e.bundleid
              : e?.creatorid
                ? "c" + e.creatorid
                : e?.hubcategoryid
                  ? "h" + e.hubcategoryid
                  : e?.tagid
                    ? "t" + e.tagid
                    : "unknown0";
      }
      function p(e, t) {
        switch (t) {
          case 0:
            return "a" + e;
          case 1:
            return "p" + e;
          case 2:
            return "b" + e;
        }
        return "unknown0";
      }
      function g(e) {
        return e?.appid
          ? e.appid
          : e?.packageid
            ? e.packageid
            : e?.bundleid
              ? e.bundleid
              : e?.hubcategoryid
                ? e.hubcategoryid
                : e?.creatorid
                  ? e.creatorid
                  : e?.tagid
                    ? e.tagid
                    : 0;
      }
      function I(e) {
        return e?.appid
          ? 0
          : e?.packageid
            ? 1
            : e?.bundleid
              ? 2
              : e?.hubcategoryid
                ? 6
                : e?.creatorid
                  ? 5
                  : e?.tagid
                    ? 4
                    : 0;
      }
      function R(e) {
        return "app" == e?.item_type
          ? 0
          : "sub" == e?.item_type
            ? 1
            : "bundle" == e?.item_type
              ? 2
              : -1;
      }
      function f(e) {
        const t = Number.parseInt(e.substring(1));
        switch (e.charAt(0)) {
          case "a":
            return { appid: t };
          case "p":
            return { packageid: t };
          default:
            return { bundleid: t };
        }
      }
      function b(e) {
        return "application" == e
          ? 0
          : "bundle" == e
            ? 2
            : "package" == e
              ? 1
              : -1;
      }
      function S(e) {
        return 0 == e
          ? "application"
          : 1 == e
            ? "package"
            : 2 == e
              ? "bundle"
              : null;
      }
      function C(e) {
        return 1 == e ? 0 : 5 == e ? 2 : 2 == e ? 1 : -1;
      }
      function y(e) {
        return 0 == e ? 1 : 1 == e ? 2 : 2 == e ? 5 : null;
      }
      s.d(t, {
        Di: () => c,
        FT: () => p,
        JK: () => a,
        Je: () => d,
        M9: () => g,
        Rz: () => n,
        SW: () => o,
        Si: () => y,
        TM: () => u,
        TV: () => b,
        _P: () => I,
        cW: () => f,
        gy: () => R,
        hh: () => _,
        lY: () => S,
        pk: () => i,
        s9: () => C,
        vo: () => m,
        wD: () => h,
        wR: () => l,
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
            (e[(e.k_RejectAlreadyDisplayed = 17)] = "k_RejectAlreadyDisplayed"),
            (e[(e.k_RejectNoTrailer = 18)] = "k_RejectNoTrailer"),
            (e[(e.k_RejectAO = 19)] = "k_RejectAO");
        })(r || (r = {}));
    },
    63369: (e, t, s) => {
      s.d(t, { M: () => n, d: () => i });
      var r = s(61859),
        a = s(91675);
      function i(e) {
        return n(
          e.coming_soon_display,
          e.steam_release_date,
          e.custom_release_date_message,
        );
      }
      function n(e, t, s, i) {
        switch (e) {
          case "date_full":
            return (0, r.$z)(t);
          case "date_month":
            return (0, a.sq)(new Date(1e3 * t));
          case "date_quarter":
            return (0, a.u6)(new Date(1e3 * t), i);
          case "date_year":
            return (0, a.vl)(new Date(1e3 * t));
          case "text_comingsoon":
            return s || (0, r.we)("#Store_ComingSoon_ComingSoon");
          case "text_tba":
            return s || (0, r.we)("#Store_ComingSoon_TBA");
          default:
            return "";
        }
      }
    },
    68797: (e, t, s) => {
      s.d(t, { H: () => n });
      var r = s(41735),
        a = s.n(r),
        i = s(56545);
      function n(e) {
        if (a().isCancel(e))
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
            if ("object" == typeof e && e instanceof i.w)
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
