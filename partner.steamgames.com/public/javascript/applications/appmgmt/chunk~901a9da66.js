/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [5467],
  {
    72839: (e, t, s) => {
      s.d(t, { Bn: () => l, hS: () => u, rV: () => n });
      var r = s(15161),
        a = s(78327),
        i = s(2160);
      s(94601);
      function n(e, t) {
        e.Body().set_context(u(t));
      }
      function u(e) {
        let t = new r.TS();
        return (
          e || t.set_country_code(a.TS.COUNTRY),
          t.set_language(a.TS.LANGUAGE),
          a.TS.EREALM != i.TU.k_ESteamRealmUnknown &&
            t.set_steam_realm(a.TS.EREALM),
          t
        );
      }
      function l(e, t) {
        e.Body().set_data_request(r.gn.fromObject(t));
      }
    },
    75279: (e, t, s) => {
      s.d(t, { A: () => o });
      var r = s(62792),
        a = s(44332),
        i = s(61859),
        n = s(91675),
        u = s(78327),
        l = s(63369);
      class o {
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
            (this.m_bIsFree = e.is_free()),
            (this.m_bIsFreeTemporary = e.is_free_temporarily()),
            (this.m_bIsEarlyAccess = e.is_early_access()),
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
            ((this.m_Assets = new c(e.assets(), e.id())),
            (this.m_DataRequested.include_assets = !0)),
            t.include_assets_without_overrides &&
              !this.m_AssetsWithoutOverrides &&
              ((this.m_AssetsWithoutOverrides = new c(
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
              ((this.m_Screenshots = new d(e.screenshots())),
              (this.m_DataRequested.include_screenshots = !0)),
            t.include_trailers &&
              !this.m_Trailers &&
              ((this.m_Trailers = new m(e.trailers())),
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
              (this.m_DataRequested.include_links = !0));
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
          return o.BDataRequestContainsOtherDataRequest(
            this.m_DataRequested,
            e,
          );
        }
        BCheckDataRequestIncluded(e) {
          ("dev" != u.TS.WEB_UNIVERSE && "beta" != u.TS.WEB_UNIVERSE) ||
            (0, a.w)(
              this.BContainDataRequest(e),
              `Requested data without for ${(0, r.Rz)(this.m_eItemType)} @ ${this.m_unID}`,
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
              ? _([
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
            this.m_BasicInfo ? _(this.m_BasicInfo.publishers) : []
          );
        }
        GetAllDeveloperCreatorClans() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo ? _(this.m_BasicInfo.developers) : []
          );
        }
        GetAllFranchiseCreatorClans() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo ? _(this.m_BasicInfo.franchises) : []
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
                ? (0, n.sq)(new Date(1e3 * e))
                : (0, i.$z)(e)
              : "";
          }
          const e = this.GetReleaseDateRTime();
          return e ? (0, i.$z)(e) : "";
        }
        BIsComingSoon() {
          return (
            this.BCheckDataRequestIncluded({ include_release: !0 }),
            this.m_ReleaseInfo?.is_coming_soon
          );
        }
        BIsCustomComingSoonDisplay() {
          return (
            !!this.BIsComingSoon() &&
            (this.m_ReleaseInfo?.coming_soon_display
              ? ["text_tba", "text_comingsoon"].includes(
                  this.m_ReleaseInfo.coming_soon_display,
                )
              : !!this.m_ReleaseInfo?.custom_release_date_message)
          );
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
          return this.GetOnlyAllAgesSafeScreenshots().length > 0;
        }
        GetOnlyAllAgesSafeScreenshots() {
          return (
            this.BCheckDataRequestIncluded({ include_screenshots: !0 }),
            this.m_Screenshots?.GetOnlyAllAgesScreenshots() || []
          );
        }
        GetBothAllAgesSafeAndMatureScreenshots() {
          return (
            this.BCheckDataRequestIncluded({ include_screenshots: !0 }),
            this.m_Screenshots?.GetAllAgesAndMatureScreenshots() || []
          );
        }
        BHasTrailers() {
          return (
            this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            this.m_Trailers?.BHasTrailers()
          );
        }
        BHasHighlightTrailers() {
          return (
            this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            (this.m_Trailers?.GetHighlightTrailers()?.length ?? 0) > 0
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
        GetLinks() {
          return (
            this.BCheckDataRequestIncluded({ include_links: !0 }),
            this.m_rgLinks
          );
        }
        ReplaceBestPurchaseOption(e) {
          this.m_BestPurchaseOption = e;
        }
        GetInternalName() {
          return this.m_strInternalName;
        }
      }
      function _(e) {
        if (!e?.length) return [];
        const t = e.map((e) => e.creator_clan_account_id).filter((e) => !!e);
        return Array.from(new Set(t));
      }
      class c {
        m_strMainCapsuleURL;
        m_strSmallCapsuleURL;
        m_strHeaderURL;
        m_strPackageHeaderURL;
        m_strPageBackgroundURL;
        m_strHeroCapsuleURL;
        m_strHeroCapsuleURL_2x;
        m_strLibraryCapsuleURL;
        m_strLibraryCapsuleURL_2x;
        m_strLibraryHeroURL;
        m_strLibraryHeroURL_2x;
        m_strCommunityIcon;
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
              (this.m_strCommunityIcon = `${u.TS.MEDIA_CDN_COMMUNITY_URL}images/apps/${t}/${e.community_icon()}.jpg`);
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
          return (
            u.TS.BASE_URL_SHARED_CDN +
            "/store_item_assets/" +
            e.replace("${FILENAME}", t)
          );
        }
        GetCommunityIconURL() {
          return this.m_strCommunityIcon;
        }
      }
      class m {
        m_mapTrailer = new Map();
        m_higherTrailers = new Array();
        m_otherTrailers = new Array();
        constructor(e) {
          e.highlights() &&
            e.highlights().forEach((e) => {
              let t = new h(e);
              this.m_mapTrailer.set(t.GetTrailerID(), t),
                this.m_higherTrailers.push(t);
            }),
            e.other_trailers() &&
              e.other_trailers().forEach((e) => {
                let t = new h(e);
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
      class h {
        m_strTrailerName;
        m_nBaseID;
        m_Trailer480p;
        m_TrailerMax;
        m_MicroTrailer;
        m_strScreenshotMedium;
        m_strScreenshotFull;
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
              (this.m_strScreenshotMedium = this.ConstructScreenshotURL(
                t,
                e.screenshot_medium(),
              )),
            e.screenshot_full() &&
              (this.m_strScreenshotFull = this.ConstructScreenshotURL(
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
      class d {
        m_rgAllScreenshots = new Array();
        m_rgOnlyAllAgesScreenshots = new Array();
        constructor(e) {
          let t = 0,
            s = 0;
          const r = e.all_ages_screenshots() || [],
            a = e.mature_content_screenshots() || [];
          for (; t < r.length || s < a.length; ) {
            let e = t < r.length;
            if (t < r.length && s < a.length) {
              e = r[t].ordinal() < a[s].ordinal();
            }
            if (e) {
              const e =
                u.TS.BASE_URL_SHARED_CDN +
                "/store_item_assets/" +
                r[t].filename();
              this.m_rgAllScreenshots.push(e),
                this.m_rgOnlyAllAgesScreenshots.push(e),
                (t += 1);
            } else {
              const e =
                u.TS.BASE_URL_SHARED_CDN +
                "/store_item_assets/" +
                a[s].filename();
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
    },
    16021: (e, t, s) => {
      s.d(t, { A: () => I });
      var r = s(34629),
        a = s(14947),
        i = s(56545),
        n = s(96059),
        u = s(59411),
        l = s(15161),
        o = s(44332),
        _ = s(68797),
        c = s(78327),
        m = s(72839),
        h = s(75279),
        d = s(6419);
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
        m_SteamInterface = null;
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
        static async Initialize(e, t) {
          (0, o.w)(
            !I.Get().m_bInitialized,
            "CStoreItemCache was already initialized; initialize it only once.",
          ),
            (I.Get().m_SteamInterface = e),
            (I.Get().m_bUsePartnerAPI = !!t),
            (I.Get().m_bInitialized = !0);
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
            ((0, o.w)(
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
              (0, o.w)(
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
              (0, o.w)(!1, `Unexpected Type ${t}`);
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
            u = this.m_setPendingDataRequest;
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
            this.HintLoadStoreItems(void 0, t, s, r, a, i, n, u).then((t) =>
              e(t),
            );
        }
        async HintLoadStoreApps(e, t) {
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
        }
        async HintLoadStorePackages(e, t) {
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
        }
        async HintLoadStoreBundles(e, t) {
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
          return r && h.A.BDataRequestContainsOtherDataRequest(r.dataRequest, s)
            ? r.promise
            : null;
        }
        async HintLoadStoreItems(e, t, s, r, a, i, n, u) {
          let o = null;
          const _ = new Promise((e) => (o = e));
          let c = [],
            m = [];
          (t || []).forEach((e) => {
            const t = this.GetPreviousSupersetLoadPromise(e, 0, u);
            if (t) m.push(t);
            else {
              c.push(l.O4.fromObject({ appid: e }));
              let t = p(this.GetStoreItemDataRequest(e, 0), u);
              const s = this.m_mapAppsInFlight.get(e);
              (t = p(s?.dataRequest, t)),
                s && m.push(s.promise),
                this.m_mapAppsInFlight.set(e, {
                  promise: s ? g(s.promise, _) : _,
                  dataRequest: t,
                });
            }
          }),
            (s || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(e, 1, u);
              if (t) m.push(t);
              else {
                c.push(l.O4.fromObject({ packageid: e }));
                let t = p(this.GetStoreItemDataRequest(e, 1), u);
                const s = this.m_mapPackageInFlight.get(e);
                (t = p(s?.dataRequest, t)),
                  s && m.push(s.promise),
                  this.m_mapPackageInFlight.set(e, {
                    promise: s ? g(s.promise, _) : _,
                    dataRequest: t,
                  });
              }
            }),
            (r || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(e, 2, u);
              if (t) m.push(t);
              else {
                c.push(l.O4.fromObject({ bundleid: e }));
                let t = p(this.GetStoreItemDataRequest(e, 2), u);
                const s = this.m_mapBundleInFlight.get(e);
                (t = p(s?.dataRequest, t)),
                  s && m.push(s.promise),
                  this.m_mapBundleInFlight.set(e, {
                    promise: s ? g(s.promise, _) : _,
                    dataRequest: t,
                  });
              }
            }),
            (a || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(e, 4, u);
              if (t) m.push(t);
              else {
                c.push(l.O4.fromObject({ tagid: e }));
                let t = p(this.GetStoreItemDataRequest(e, 4), u);
                const s = this.m_mapTagsInFlight.get(e);
                (t = p(s?.dataRequest, t)),
                  s && m.push(s.promise),
                  this.m_mapTagsInFlight.set(e, {
                    promise: s ? g(s.promise, _) : _,
                    dataRequest: t,
                  });
              }
            }),
            (i || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(e, 5, u);
              if (t) m.push(t);
              else {
                c.push(l.O4.fromObject({ creatorid: e }));
                let t = p(this.GetStoreItemDataRequest(e, 5), u);
                const s = this.m_mapCreatorsInFlight.get(e);
                (t = p(s?.dataRequest, t)),
                  s && m.push(s.promise),
                  this.m_mapCreatorsInFlight.set(e, {
                    promise: s ? g(s.promise, _) : _,
                    dataRequest: t,
                  });
              }
            }),
            (n || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(e, 6, u);
              if (t) m.push(t);
              else {
                c.push(l.O4.fromObject({ hubcategoryid: e }));
                let t = p(this.GetStoreItemDataRequest(e, 6), u);
                const s = this.m_mapHubCategoriesInFlight.get(e);
                (t = p(s?.dataRequest, t)),
                  s && m.push(s.promise),
                  this.m_mapHubCategoriesInFlight.set(e, {
                    promise: s ? g(s.promise, _) : _,
                    dataRequest: t,
                  });
              }
            });
          let h = 1;
          if (
            (c.length > 0 &&
              (h = await this.InternalHandleLoadStoreItems(e, c, u)),
            o(h),
            m.length > 0)
          ) {
            const e = await Promise.all(m);
            for (const t of e) 1 != t && 1 == h && (h = t);
          }
          return (
            (t || []).forEach((e) => this.m_mapAppsInFlight.delete(e)),
            (s || []).forEach((e) => this.m_mapPackageInFlight.delete(e)),
            (r || []).forEach((e) => this.m_mapBundleInFlight.delete(e)),
            (a || []).forEach((e) => this.m_mapTagsInFlight.delete(e)),
            (i || []).forEach((e) => this.m_mapCreatorsInFlight.delete(e)),
            (n || []).forEach((e) => this.m_mapHubCategoriesInFlight.delete(e)),
            h
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
                u = t.bundleid() ?? 0;
              if (n != u) return n - u;
              let l = e.tagid() ?? 0,
                o = t.tagid() ?? 0;
              if (l != o) return l - o;
              let _ = e.creatorid() ?? 0,
                c = t.creatorid() ?? 0;
              if (_ != c) return _ - c;
              let m = e.hubcategoryid() ?? 0,
                h = t.hubcategoryid() ?? 0;
              return m != h ? m - h : 0;
            }),
            t
          );
        }
        async InternalHandleLoadStoreItems(e, t, s) {
          let r = 1;
          e ||
            (this.GetSteamInterface() ||
              this.SetSteamInterface(new n.D(c.TS.WEBAPI_BASE_URL)),
            (e = this.GetSteamInterface())),
            (t = this.SortStoreItems(t)),
            s.include_included_items &&
              (s = {
                ...s,
                included_item_data_request: {
                  ...s,
                  include_included_items: !1,
                },
              });
          const o = new Array();
          try {
            const n = [];
            for (; t.length > 0; ) {
              const r = t.splice(0, this.k_nMaxBatchSize);
              if ((o.push(r), this.m_bUsePartnerAPI)) {
                const t = i.w.Init(u.St);
                t.Body().set_include_unpublished(!1);
                const a = t.Body().request(!0);
                a.set_context((0, m.hS)(this.m_bUsePartnerAPI)),
                  a.set_data_request(l.gn.fromObject(s)),
                  a.set_ids(r),
                  n.push(u.BT.GetItems(e.GetServiceTransport(), t));
              } else {
                const t = i.w.Init(l.eE);
                (0, m.rV)(t, this.m_bUsePartnerAPI),
                  (0, m.Bn)(t, s),
                  t.Body().set_ids(r),
                  n.push(l.$4.GetItems(e.GetAnonymousServiceTransport(), t));
              }
            }
            (await Promise.all(n)).forEach((e, i) => {
              1 == e.GetEResult()
                ? e
                    .Body()
                    .store_items()
                    .forEach((r) => {
                      const i = r.id(),
                        n = r.item_type();
                      let u =
                          this.m_bReturnUnavailableItems && 15 == r.success(),
                        l = 1 == r.success() && !this.BIsStoreItemMissing(i, n);
                      if (u || l) this.ReadItem(r, s);
                      else {
                        switch (
                          ("dev" == c.TS.WEB_UNIVERSE &&
                            console.warn(
                              `Failed to load ${i} type ${n} with error ${r.success()}`,
                              r,
                            ),
                          n)
                        ) {
                          case 0:
                            this.m_setUnavailableApps.add(i),
                              this.m_mapApps.delete(i);
                            break;
                          case 1:
                            this.m_setUnavailablePackages.add(i),
                              this.m_mapPackages.delete(i);
                            break;
                          case 2:
                            this.m_setUnavailableBundles.add(i),
                              this.m_mapBundles.delete(i);
                            break;
                          case 4:
                            this.m_setUnavailableTags.add(i),
                              this.m_mapTags.delete(i);
                            break;
                          case 5:
                            this.m_setUnavailableCreators.add(i),
                              this.m_mapCreators.delete(i);
                            break;
                          case 6:
                            this.m_setUnavailableHubCategories.add(i),
                              this.m_mapHubCategories.delete(i);
                            break;
                          default:
                            console.error(
                              "CStoreItemCache.InternalHandleLoadStoreItems unexpected item_type in response " +
                                n +
                                " " +
                                i,
                            );
                        }
                        if (r.unvailable_for_country_restriction())
                          switch (n) {
                            case 0:
                              this.m_setUnavailableDueToCountryRestrictionApps.add(
                                i,
                              );
                              break;
                            case 1:
                              this.m_setUnavailableDueToCountryRestrictionPackages.add(
                                i,
                              );
                              break;
                            case 2:
                              this.m_setUnavailableDueToCountryRestrictionBundles.add(
                                i,
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
                                (0, a.HO)(t),
                              );
                          }
                      }
                    })
                : (console.warn(
                    "CStoreItemCache::InternalHandleLoadStoreItems failed with eResult: " +
                      e.GetEResult() +
                      " message: " +
                      e.Hdr().error_message(),
                    (0, a.HO)(t),
                  ),
                  (1 == e.Hdr().transport_error() || c.TS.FROM_WEB) &&
                    this.MarkStoreItemIDUnavailable(o[i]),
                  1 == r && (r = e.GetEResult()));
            });
          } catch (e) {
            const t = (0, _.H)(e);
            return (
              console.error(
                "CStoreItemCache::InternalHandleLoadStoreItems failed: " +
                  t.strErrorMsg,
                t,
              ),
              o.forEach((e) => this.MarkStoreItemIDUnavailable(e)),
              79
            );
          }
          return r;
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
            (a ? a.MergeData(e, t) : ((a = new h.A(e, t)), r.set(e.id(), a)),
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
      (0, r.Cg)([d.o], I.prototype, "ReadItem", null);
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
      function u(e) {
        switch (e) {
          case "sub":
            return 1;
          case "bundle":
            return 2;
          default:
            return 0;
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
      function o(e, t, s) {
        return e
          ? { id: e, item_type: "app" }
          : t
            ? { id: t, item_type: "sub" }
            : { id: s, item_type: "bundle" };
      }
      function _(e) {
        return "app" == e?.item_type
          ? { appid: e.id }
          : "sub" == e?.item_type
            ? { packageid: e.id }
            : "bundle" == e?.item_type
              ? { bundleid: e.id }
              : null;
      }
      function c(e) {
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
      function h(e, t) {
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
      function d(e) {
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
      function S(e) {
        return "application" == e
          ? 0
          : "bundle" == e
            ? 2
            : "package" == e
              ? 1
              : -1;
      }
      function b(e) {
        return 0 == e
          ? "application"
          : 1 == e
            ? "package"
            : 2 == e
              ? "bundle"
              : null;
      }
      function y(e) {
        return 1 == e ? 0 : 5 == e ? 2 : 2 == e ? 1 : -1;
      }
      function C(e) {
        return 0 == e ? 1 : 1 == e ? 2 : 2 == e ? 5 : null;
      }
      s.d(t, {
        Di: () => _,
        FT: () => p,
        JK: () => a,
        Je: () => h,
        M9: () => g,
        Rz: () => n,
        SW: () => u,
        Si: () => C,
        TM: () => l,
        TV: () => S,
        _P: () => I,
        cW: () => f,
        gy: () => R,
        hh: () => c,
        lY: () => b,
        pk: () => i,
        s9: () => y,
        vo: () => m,
        wD: () => d,
        wR: () => o,
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
      function n(e, t, s) {
        switch (e) {
          case "date_full":
            return (0, r.$z)(t);
          case "date_month":
            return (0, a.sq)(new Date(1e3 * t));
          case "date_quarter":
            return (0, a.u6)(new Date(1e3 * t));
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
  },
]);
