(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [3584],
  {
    chunkid: (module) => {
      module.exports = {
        Main: "_1Zn_5pvuMbqr57ws1eJKe",
      };
    },
    chunkid: (module) => {
      module.exports = {
        SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
        SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
        required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = {
        include_assets: !0,
        include_release: !0,
        include_platforms: !0,
        include_tag_count: 20,
        include_basic_info: !0,
        include_trailers: !0,
        include_reviews: !0,
        include_screenshots: !0,
        include_supported_languages: !0,
      };
      class _ {
        constructor() {
          this.m_setAlreadyAdded = new Set();
        }
        Reset() {
          this.m_setAlreadyAdded = new Set();
        }
        BHasAppID(_) {
          return this.m_setAlreadyAdded.has("a" + _);
        }
        BHasPackageID(_) {
          return this.m_setAlreadyAdded.has("s" + _);
        }
        BHasBundleID(_) {
          return this.m_setAlreadyAdded.has("b" + _);
        }
        BHasStoreItemKey(_) {
          return this.m_setAlreadyAdded.has(
            this.ConvertStoreItemKeyToUniqueKey(_),
          );
        }
        AddStoreItemKey(_) {
          this.m_setAlreadyAdded.add(this.ConvertStoreItemKeyToUniqueKey(_));
        }
        ConvertStoreItemKeyToUniqueKey(_) {
          switch (_.item_type) {
            default:
            case "app":
              return "a" + _._;
            case "sub":
              return "s" + _._;
            case "bundle":
              return "b" + _._;
          }
        }
      }
      const _ = 4;
      function _(_, _, _, _, _, _) {
        var _;
        const _ = new Array(),
          _ = new Array(),
          _ = new Array(),
          _ = new Array();
        if (!_ || 0 == _.length) return _;
        const _ = [
          _._.k_RejectSupportedLanguage,
          _._.k_RejectAlreadyDisplayed,
          _._.k_RejectNoTrailer,
        ];
        for (let _ of _) {
          let _ = _._,
            _ = _._.k_NotRejected;
          switch (_.item_type) {
            case "sub":
              const _ = _._.Get().GetPackage(_);
              if (
                1 !==
                (null === (_ = null == _ ? void 0 : _.GetIncludedAppIDs()) ||
                void 0 === _
                  ? void 0
                  : _.length)
              ) {
                _ = _(_, _, _, !0);
                break;
              }
              _ = _.GetIncludedAppIDs()[0];
            case "app":
              _ = _(_, _, _, _, !0);
              break;
            case "bundle":
              _ = _(_, _, _, !0);
          }
          if (
            (_ == _._.k_NotRejected
              ? ((_.rejected = _._.k_NotRejected),
                _.push({
                  ..._,
                  priority: 1,
                }))
              : _.includes(_)
                ? ((_.rejected = _._.k_NotRejected), _.push(_))
                : ((_.rejected = _),
                  _ == _._.k_RejectIgnoredGame ? _.push(_) : _.push(_)),
            _.length > _)
          )
            break;
        }
        return (
          _.length < _ &&
            (_(_, _, _, 2),
            _.length < _ &&
              _.enforce_minimum &&
              (_(_, _, _, 3), _(_, _, _, _))),
          _
        );
      }
      function _(_, _, _, _) {
        for (let _ = 0; _.length < _ && _ < _.length; ++_)
          _.push({
            ..._[_],
            priority: _,
          });
      }
      function _(_, _) {
        var _, _, _, _;
        const _ = _._.Get();
        if (_.only_current_platform && _.BHasPlatformPreferenceSet()) {
          if (
            !(
              ((null === (_ = _.GetPlatforms()) || void 0 === _
                ? void 0
                : _.windows) &&
                _.BIsPreferredPlatform("win")) ||
              ((null === (_ = _.GetPlatforms()) || void 0 === _
                ? void 0
                : _.mac) &&
                _.BIsPreferredPlatform("mac")) ||
              ((null === (_ = _.GetPlatforms()) || void 0 === _
                ? void 0
                : _.steamos_linux) &&
                _.BIsPreferredPlatform("linux"))
            )
          )
            return _._.k_RejectWrongPlatform;
        }
        if (!_.prepurchase && _.BIsComingSoon())
          return _._.k_RejectNoComingSoon;
        const _ = _.GetPlatforms();
        return !_.virtual_reality &&
          _ &&
          _.vr_support &&
          _.vr_support.vrhmd_only
          ? _._.k_RejectNoVR
          : (
                null === (_ = _.GetAllCreatorClanIDs()) || void 0 === _
                  ? void 0
                  : _.some((_) => _.BIsIgnoringCurator(_))
              )
            ? _._.k_RejectCreatorClan
            : _._.k_NotRejected;
      }
      function _(_, _) {
        var _;
        if (_.localized) {
          const _ = (0, _.sfN)(_._.LANGUAGE);
          if (
            !(null === (_ = _.GetAllLanguagesWithSomeSupport()) || void 0 === _
              ? void 0
              : __webpack_require__.includes(_))
          )
            return _._.k_RejectSupportedLanguage;
        }
        return _._.k_NotRejected;
      }
      function _(_, _, _, _, _) {
        const _ = _._.Get().GetApp(_);
        if (!_) return _._.k_RejectNotLoaded;
        const _ = _(_, _);
        if (_ != _._.k_NotRejected) return _;
        const _ = _._.Get();
        if (_.BIsGameIgnored(_)) return _._.k_RejectIgnoredGame;
        if (_.BExcludeTagIDs(_.GetTagIDs())) return _._.k_RejectIgnoreGameTags;
        if (_.BExcludesContentDescriptor(_.GetContentDescriptorIDs()))
          return _._.k_RejectIgnoreContentDescriptors;
        if (!_.early_access && _.BIsEarlyAccess())
          return _._.k_RejectEarlyAccess;
        const _ = _.GetAppType();
        if (!_.software && _ == _._._) return _._.k_RejectSoftware;
        if (_.games_already_in_library && _.BIsGameOwned(_))
          return _._.k_RejectInLibrary;
        if (_.games_not_in_library && !_.BIsGameOwned(_))
          return _._.k_RejectNotInLibrary;
        if (!_.video && [_._._, _._._, _._._].includes(_))
          return _._.k_RejectVideo;
        if (_.has_discount) {
          const _ = _.GetBestPurchaseOption();
          if (!_ || !_.discount_pct) return _._.k_RejectNoDiscount;
        }
        return "adultonly" != _ &&
          _.no_ao_content &&
          (_.HasContentDescriptorID(_._) || _.HasContentDescriptorID(_._))
          ? _._.k_RejectAO
          : _ == _._._ &&
              _.games_already_in_library &&
              _.BIsGameOwned(_.GetParentAppID() || 0)
            ? _._.k_RejectInLibrary
            : _
              ? (_ == _._._ && _.BHasAppID(_.GetParentAppID() || 0)) ||
                _.BHasAppID(_)
                ? _._.k_RejectAlreadyDisplayed
                : _.has_trailer && !_.BHasTrailers(!1)
                  ? _._.k_RejectNoTrailer
                  : _(_, _)
              : _._.k_NotRejected;
      }
      function _(_, _) {
        const _ = _._.Get();
        let _ = !1;
        for (let _ of _) {
          if (__webpack_require__.BIsGameIgnored(_))
            return _._.k_RejectIgnoredGame;
          __webpack_require__.BIsGameOwned(_) && (_ = !0);
        }
        return _.games_not_in_library && _
          ? _._.k_RejectInLibrary
          : _.games_not_in_library && !_
            ? _._.k_RejectNotInLibrary
            : _._.k_NotRejected;
      }
      function _(_, _, _, _) {
        const _ = _._.Get().GetPackage(_);
        if (!_) return _._.k_RejectNotLoaded;
        const _ = _(_, _);
        if (_ != _._.k_NotRejected) return _;
        const _ = _(_.GetIncludedAppIDs(), _);
        if (_ != _._.k_NotRejected) return _;
        const _ = _._.Get();
        return _.games_already_in_library && _.BOwnsPackage(_)
          ? _._.k_RejectInLibrary
          : _.BIsPackageIgnored(_)
            ? _._.k_RejectIgnoredGame
            : _
              ? __webpack_require__.BHasPackageID(_)
                ? _._.k_RejectAlreadyDisplayed
                : _(_, _)
              : _._.k_NotRejected;
      }
      function _(_, _, _, _) {
        const _ = _._.Get().GetBundle(_);
        if (!_) return _._.k_RejectNotLoaded;
        const _ = _(_, _);
        if (_ != _._.k_NotRejected) return _;
        const _ = _(_.GetIncludedAppIDs(), _);
        return _ != _._.k_NotRejected
          ? _
          : _
            ? __webpack_require__.BHasBundleID(_)
              ? _._.k_RejectAlreadyDisplayed
              : _(_, _)
            : _._.k_NotRejected;
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      !(function (_) {
        (_[(_.k_eLibrary = 1)] = "k_eLibrary"),
          (_[(_.k_eWishlist = 2)] = "k_eWishlist"),
          (_[(_.k_eFollowing = 4)] = "k_eFollowing"),
          (_[(_.k_eRecommended = 8)] = "k_eRecommended"),
          (_[(_.k_eSteam = 16)] = "k_eSteam"),
          (_[(_.k_eRequired = 32)] = "k_eRequired"),
          (_[(_.k_eFeatured = 64)] = "k_eFeatured"),
          (_[(_.k_eCurator = 128)] = "k_eCurator"),
          (_[(_.k_eReposted = 256)] = "k_eReposted");
      })(_ || (_ = {}));
      class _ {
        GetSource() {
          var _, _;
          return this.appInfo
            ? this.appInfo.source
            : null !==
                  (_ =
                    null === (_ = this.clanInfo) || void 0 === _
                      ? void 0
                      : _.source) && void 0 !== _
              ? _
              : 0;
        }
        static GetEntityNameForID(_, _) {
          var _, _;
          if (_)
            return null !==
              (_ =
                null === (_ = _._.Get().GetApp(_)) || void 0 === _
                  ? void 0
                  : __webpack_require__.GetName()) && void 0 !== _
              ? _
              : (0, _._)("#EventCalendar_MuteApp_Unknown");
          if (_) {
            const _ = _._.GetClanInfoByClanAccountID(_);
            if (null == _ ? void 0 : _.group_name) return _.group_name;
          }
          return (0, _._)("#EventCalendar_MuteApp_Unknown");
        }
        static BHasEntityNameForID(_, _) {
          var _, _;
          return _
            ? Boolean(
                null === (_ = _._.Get().GetApp(_)) || void 0 === _
                  ? void 0
                  : __webpack_require__.GetName(),
              )
            : !!_ &&
                !!(null === (_ = _._.GetClanInfoByClanAccountID(_)) ||
                void 0 === _
                  ? void 0
                  : _.group_name);
        }
        GetEntityName() {
          return _.GetEntityNameForID(this.appid, this.clanid);
        }
        GetGameCapsule() {
          var _, _;
          if (this.appInfo)
            return null ===
              (_ =
                null === (_ = _._.Get().GetApp(this.appInfo.appid)) ||
                void 0 === _
                  ? void 0
                  : _.GetAssets()) || void 0 === _
              ? void 0
              : _.GetMainCapsuleURL();
          if (this.clanInfo) {
            let _ = _._.GetClanInfoByClanAccountID(this.clanInfo.clanid);
            if (_) return _.avatar_full_url;
          }
          return (0, _._)("#EventCalendar_MuteApp_Unknown");
        }
        GetGameIcon() {
          var _, _;
          if (this.appInfo)
            return null ===
              (_ =
                null === (_ = _._.Get().GetApp(this.appInfo.appid)) ||
                void 0 === _
                  ? void 0
                  : _.GetAssets()) || void 0 === _
              ? void 0
              : _.GetCommunityIconURL();
          if (this.clanInfo) {
            let _ = _._.GetClanInfoByClanAccountID(this.clanInfo.clanid);
            if (_) return _.avatar_full_url;
          }
          return (0, _._)("#EventCalendar_MuteApp_Unknown");
        }
      }
      class _ {}
      class _ {}
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      var _ = __webpack_require__("chunkid");
      class _ {
        BHasHomeView() {
          return Boolean(this.m_HomeView);
        }
        GetHomeView() {
          var _;
          return null === (_ = this.m_HomeView) || void 0 === _
            ? void 0
            : _.home;
        }
        static Get() {
          var _;
          return (
            _.s_globalSingletonStore ||
              ((_ = "CHomeViewStore.s_globalSingletonStore"),
              (0, _._)(!0, "Unexpected code running in SSR Server: " + _),
              (_.s_globalSingletonStore = new _())),
            _.s_globalSingletonStore
          );
        }
        constructor() {
          this.m_HomeView = void 0;
          const _ = (0, _._)("home_view_setting", "application_config");
          this.ValidateHomeViewData(_) && this.SetHomeViewSetting(_);
          const _ = (0, _._)(
            "home_view_setting_override",
            "application_config",
          );
          this.ValidateHomeViewDataOverride(_) &&
            this.SetHomeViewSettingOverride(_);
        }
        ValidateHomeViewData(_) {
          const _ = _;
          return (
            _ && "object" == typeof _.home && "object" == typeof _.main_cluster
          );
        }
        SetHomeViewSetting(_) {
          this.m_HomeView = _;
        }
        ValidateHomeViewDataOverride(_) {
          const _ = _;
          return (
            _ &&
            (!_.all || "object" == typeof _.all) &&
            (!_.maincap || "object" == typeof _.maincap)
          );
        }
        SetHomeViewSettingOverride(_) {
          this.m_HomeView
            ? (this.m_HomeView.home = {
                ...this.m_HomeView.home,
                ...(null == _ ? void 0 : _.all),
                ...(null == _ ? void 0 : _.maincap),
              })
            : (this.m_HomeView = {
                home: {
                  ...(null == _ ? void 0 : _.all),
                  ...(null == _ ? void 0 : _.maincap),
                },
              });
        }
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      !(function (_) {
        (_.Default = "default"),
          (_.Upcoming = "upcoming"),
          (_.Featured = "featured"),
          (_.Press = "press"),
          (_.Steam = "steam"),
          (_.Halloween = "halloween"),
          (_.Dev_Sales = "sales"),
          (_.Dev_All = "all"),
          (_.Dev_AssociatedPress = "associated_press");
      })(_ || (_ = {}));
      new Map();
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _, _, _) {
        return {
          strId: "section-" + _,
          strSectionLabel: _,
          rtSectionStart: _,
          rtSectionEnd: _,
          bIsFutureSection: _ >= _,
          nRenderedHeight: 2500,
          nTopOffset: 0,
        };
      }
      class _ {
        constructor(_, _) {
          (this.m_nForwardStuckCount = 0),
            (this.m_nBackwardStuckCount = 0),
            (this.m_mapCalendarAppsByID = new Map()),
            (this.m_mapCalendarClansByID = new Map()),
            (this.m_mapCalendarEventsByGid = new Map()),
            (this.m_rgSortedCalendarEvents = new Array()),
            (this.m_currentView = _._.box(void 0)),
            (this.m_bFinishedSearchingForward = !1),
            (this.m_bFinishedSearchingBackward = !1),
            (this.m_rgCalendarSections = []),
            (this.m_rgFutureSections = []),
            (this.m_forwardRequestInFlight = null),
            (this.m_backwardRequestInFlight = null),
            (this.m_collectionMetaData = void 0),
            (0, _._)(this),
            (this.m_key = _),
            (this.m_visibilityStore = new _._(_)),
            _._.Get().HintLoad();
        }
        GetNumEventsLoaded() {
          return this.m_mapCalendarEventsByGid.size;
        }
        BIsGlobalCalendar() {
          return !(
            this.m_key.appids ||
            this.m_key.clanaccountids ||
            this.m_key.collectionid ||
            this.m_key.saleid
          );
        }
        BIsShowingFeaturedFeed() {
          return Boolean(
            this.GetCollectionID() === _.Featured ||
              (this.BIsGlobalCalendar() && !_._.accountid),
          );
        }
        BIsSingleSourceCalendar() {
          return Boolean(
            this.BIsSingleGroupCalendar()
              ? !this.BIsSingleAppCalendar()
              : this.BIsSingleAppCalendar(),
          );
        }
        GetKey() {
          return this.m_key;
        }
        BEventMatchCalendarSingleSource(_) {
          var _, _;
          return (
            (this.BIsSingleAppCalendar() &&
              (null === (_ = this.m_key.appids) || void 0 === _
                ? void 0
                : _[0]) == _.appid) ||
            (this.BIsSingleGroupCalendar() &&
              (null === (_ = this.m_key.clanaccountids) || void 0 === _
                ? void 0
                : _[0]) == _.clanid)
          );
        }
        BIsSingleSourceMuted() {
          if (!this.BIsSingleSourceCalendar()) return !1;
          if (this.BIsSingleAppCalendar()) {
            const _ = this.GetSingleAppID();
            return void 0 !== _ && _._.Get().BIsMutedAppID(_);
          }
          const _ = this.GetSingleGroupID();
          return void 0 !== _ && _._.Get().BIsMutedClanID(_);
        }
        BIsSingleGroupCalendar() {
          return Boolean(
            this.m_key.clanaccountids && 1 == this.m_key.clanaccountids.length,
          );
        }
        GetSingleGroupID() {
          var _;
          return null === (_ = this.m_key.clanaccountids) || void 0 === _
            ? void 0
            : _[0];
        }
        BIsSingleAppCalendar() {
          return Boolean(this.m_key.appids && 1 == this.m_key.appids.length);
        }
        GetSingleAppID() {
          var _;
          return null === (_ = this.m_key.appids) || void 0 === _
            ? void 0
            : _[0];
        }
        BIsCollectionCalendar() {
          return !!this.m_key.collectionid;
        }
        GetCollectionID() {
          return this.m_key.collectionid;
        }
        BIsSaleCalendar() {
          return !!this.m_key.saleid;
        }
        GetSaleID() {
          return this.m_key.saleid;
        }
        BIsCalendarEndTimeSet() {
          return !!this.m_key.rtCalendarEnd;
        }
        GetCalendarEndTime() {
          return this.m_key.rtCalendarEnd;
        }
        SetCollectionMetaData(_) {
          this.m_collectionMetaData = _;
        }
        GetCollectionMetaData() {
          return this.m_collectionMetaData;
        }
        BHasCollectionMetaData() {
          return Boolean(this.m_collectionMetaData);
        }
        ValidateCollectionMetadata(_) {
          const _ = _;
          return Boolean(
            _ &&
              "object" == typeof _ &&
              _.clanid &&
              "number" == typeof _.clanid &&
              _.clan_event_gid &&
              "string" == typeof _.clan_event_gid,
          );
        }
        SetFilteredView(_, _) {
          const _ = this.m_currentView.get();
          _ && __webpack_require__.dispose();
          const _ = this.BIsSingleSourceMuted(),
            _ = new _(
              () => this.m_rgSortedCalendarEvents,
              this.LoadAdditionalEvents,
              this.BHitEventHorizon,
              _,
              Boolean(_),
              _,
            );
          this.m_currentView.set(_);
        }
        BIsFilteredViewEmpty() {
          var _;
          return !!(null === (_ = this.m_currentView.get()) || void 0 === _
            ? void 0
            : _.BIsViewEmpty());
        }
        GetCalendarItemsInTimeRange(_, _) {
          const _ = this.m_currentView.get();
          return _
            ? __webpack_require__.GetCalendarItemsInTimeRange(_, _)
            : (console.error("calendar view not yet initialized"),
              {
                rgCalendarItems: [],
                bIsComplete: !1,
              });
        }
        GetActiveEventsAt(_) {
          const _ = this.m_currentView.get();
          return _
            ? _.GetActiveEventsAt(_)
            : (console.error("calendar view not yet initialized"), []);
        }
        GetCurrentlyLoadedEventCount(_, _) {
          var _, _;
          return null !==
            (_ =
              null === (_ = this.m_currentView.get()) || void 0 === _
                ? void 0
                : __webpack_require__.GetCurrentlyLoadedEventCount(_, _)) &&
            void 0 !== _
            ? _
            : {
                nCount: 0,
                bIsComplete: !1,
              };
        }
        GetCurrentlyLoadedItemsForStats() {
          var _;
          return (
            (null === (_ = this.m_currentView.get()) || void 0 === _
              ? void 0
              : _.GetCurrentlyLoadedEvents()) || []
          );
        }
        GetCalendarSections(_) {
          return _ ? this.m_rgFutureSections : this.m_rgCalendarSections;
        }
        GetStoreInitializationTimestamp() {
          return (
            this.m_dtInitTime ||
              (this.m_dtInitTime = _._.GetTimeNowWithOverrideAsDate()),
            this.m_dtInitTime
          );
        }
        InitCalendarSections() {
          const _ = this.GetStoreInitializationTimestamp(),
            _ = [],
            _ = _.getTime() / 1e3;
          _.push(_(_, (0, _._)("#EventCalendar_FutureEventsHeader"), _));
          const _ = new Date(_);
          _.setHours(0, 0, 0, 1);
          let _ = _.getTime() / 1e3;
          _.push(_(_, (0, _._)("#Time_Today"), _, _)),
            _.setDate(_.getDate() - 1);
          let _ = _;
          (_ = _.getTime() / 1e3),
            _.push(_(_, (0, _._)("#Time_Yesterday"), _, _));
          const _ =
              this.m_rgSortedCalendarEvents[
                this.m_rgSortedCalendarEvents.length - 1
              ],
            _ = _ ? _.start_time : _;
          let _ = _ > _;
          for (let _ = 0; _ < 5 && !_; _++)
            _.setDate(_.getDate() - 1),
              (_ = _),
              (_ = _.getTime() / 1e3),
              _.push(_(_, (0, _._)(_), _, _)),
              (_ = _ > _);
          const _ = new Date(_);
          let _ = _;
          for (; _.getMonth() == _.getMonth() && 1 != _.getDate() && !_; ) {
            _.setDate(_.getDate() - 7);
            const _ = _.getTime() / 1e3;
            _.push(_(_, (0, _._)(_ - 1), _, _)), (_ = _ > _), (_ = _);
          }
          const _ = new Date(_);
          _.setHours(0, 0, 0, 1), _.setDate(1);
          let _ = _;
          for (let _ = 1; !_; _++) {
            const _ = new Date(_);
            _.setMonth(_.getMonth() - _, 1);
            const _ = _.getTime() / 1e3;
            _.push(_(_, (0, _._)(_), _, _)), (_ = _ > _), (_ = _);
          }
          this.m_rgCalendarSections.length > _.length
            ? this.m_rgCalendarSections.splice(
                _.length,
                this.m_rgCalendarSections.length,
              )
            : _.splice(this.m_rgCalendarSections.length, _.length).forEach(
                (_) => this.m_rgCalendarSections.push(_),
              );
        }
        InitFutureCalendarSections() {
          const _ = this.GetStoreInitializationTimestamp(),
            _ = [];
          let _;
          this.m_key.rtCalendarEnd && (_ = this.m_key.rtCalendarEnd);
          const _ = this.m_rgSortedCalendarEvents[0];
          _ && (_ = _.start_time), _ || (_ = _.getTime() / 1e3);
          const _ = _.getTime() / 1e3,
            _ = new Date(_);
          _.setHours(24, 0, 0, 0);
          let _ = _.getTime() / 1e3;
          _.push(
            _(
              _,
              (0, _._)(
                this.m_key.bSectionByDay ? "#Time_UpNext" : "#Time_Today",
              ),
              _,
              _,
            ),
          );
          let _ = _ <= _,
            _ = _;
          _.setDate(_.getDate() + 1),
            (_ = _.getTime() / 1e3),
            _ || _.push(_(_, (0, _._)("#Time_Tomorrow"), _, _)),
            (_ = _ <= _);
          const _ = 6 - _()(_).weekday();
          for (let _ = 2; _ <= _ && !_; _++) {
            _ = _;
            const _ = (0, _._)(_);
            _.setDate(_.getDate() + 1),
              (_ = _.getTime() / 1e3),
              _.push(_(_, _, _, _)),
              (_ = _ <= _);
          }
          if (this.m_key.bSectionByDay)
            for (; !_; ) {
              _ = _;
              const _ = (0, _._)(_);
              _.setDate(_.getDate() + 1),
                (_ = _.getTime() / 1e3),
                _.push(_(_, _, _, _)),
                (_ = _ <= _);
            }
          else {
            const _ = new Date(_);
            let _ = _;
            const _ = _()(_).daysInMonth();
            if (_.getMonth() == _.getMonth() && _.getDate() != _ && !_) {
              _.setDate(_.getDate() + 7);
              const _ = _.getTime() / 1e3;
              _.push(_(_, (0, _._)("#EventCalendar_NextWeek"), _, _)),
                (_ = _ <= _),
                (_ = _);
            }
            const _ = new Date(_);
            let _;
            if (
              (_.setMonth(_.getMonth() + 1),
              _.setDate(1),
              _.setHours(0, 0, 0, 0),
              _ < _ && !_)
            ) {
              const _ = _.getTime() / 1e3;
              _.push(_(_, (0, _._)("#EventCalendar_LaterThisMonth"), _, _)),
                (_ = _ <= _),
                (_ = _);
            } else _ = _;
            for (let _ = 2; !_; _++) {
              const _ = new Date(_);
              _.setMonth(_.getMonth() + _);
              const _ = _.getTime() / 1e3;
              _.push(_(_, (0, _._)(_), _, _)), (_ = _ <= _), (_ = _);
            }
          }
          this.m_rgFutureSections.length > _.length
            ? this.m_rgFutureSections.splice(
                _.length,
                this.m_rgFutureSections.length,
              )
            : _.splice(this.m_rgFutureSections.length, _.length).forEach((_) =>
                this.m_rgFutureSections.push(_),
              );
        }
        async RegisterCalendarEventsAndModels(_) {
          await _._.Get().HintLoad(),
            (0, _._)(() => {
              var _, _, _, _, _, _;
              this.RegisterCalendarApps(
                null !== (_ = _.apps) && void 0 !== _ ? _ : [],
              ),
                this.RegisterCalendarClans(
                  null !== (_ = _.clans) && void 0 !== _ ? _ : [],
                ),
                this.RegisterCalendarEvents(
                  null !== (_ = _.documents) && void 0 !== _ ? _ : [],
                ),
                _._.RegisterClanEvents(
                  null !== (_ = _.events) && void 0 !== _ ? _ : [],
                ),
                this.RegisterReadEvents(
                  null !== (_ = _.events_read) && void 0 !== _ ? _ : [],
                ),
                this.RegisterEventVotes(
                  null !== (_ = _.event_votes) && void 0 !== _ ? _ : [],
                ),
                _.forwardComplete && (this.m_bFinishedSearchingForward = !0),
                _.backwardComplete && (this.m_bFinishedSearchingBackward = !0),
                this.InitCalendarSections(),
                this.InitFutureCalendarSections(),
                this.SetCollectionMetaData(
                  this.ValidateCollectionMetadata(_.metadatainfo)
                    ? _.metadatainfo
                    : void 0,
                );
            });
        }
        RegisterCalendarApps(_) {
          if (_)
            for (const _ of _) {
              if (this.m_mapCalendarAppsByID.has(_.appid)) continue;
              const _ = new _._();
              (_.appid = _.appid),
                (_.source = _.source),
                (_.playtime = _.playtime),
                (_.last_played = _.last_played),
                (_.wishlist_added = _.wishlist_added),
                this.m_mapCalendarAppsByID.set(_.appid, _),
                _.hidden &&
                  this.m_visibilityStore.SetAppVisibility(_.appid, !1);
            }
        }
        RegisterCalendarClans(_) {
          if (_)
            for (const _ of _)
              if (!this.m_mapCalendarClansByID.has(_.clanid)) {
                const _ = new _._();
                (_.clanid = _.clanid),
                  (_.source = _.source),
                  this.m_mapCalendarClansByID.set(_.clanid, _),
                  _.hidden &&
                    this.m_visibilityStore.SetClanVisibility(_.clanid, !1);
              }
        }
        RegisterReadEvents(_) {
          _ && (0, _._)(_);
        }
        RegisterEventVotes(_) {
          _ &&
            (0, _._)(
              _.map((_) => ({
                gidAnnouncement: _._,
                vote: void 0 === _.vote ? null : _.vote ? "up" : "down",
              })),
            );
        }
        RegisterCalendarEvents(_) {
          if (_) {
            let _ = !1;
            for (const _ of _)
              this.BInternalInsertCalendarEventItem(_) && (_ = !0);
            _ && this.RebuildSortedCalendarEventList();
          }
        }
        BHitEventHorizon(_) {
          return "forward" == _
            ? this.m_bFinishedSearchingForward
            : this.m_bFinishedSearchingBackward;
        }
        GetTimeEdgeForDirection(_, _ = void 0) {
          return "forward" === _
            ? this.m_rgSortedCalendarEvents.length > 0
              ? this.m_rgSortedCalendarEvents[0].start_time
              : _
            : this.m_rgSortedCalendarEvents.length > 0
              ? this.m_rgSortedCalendarEvents[
                  this.m_rgSortedCalendarEvents.length - 1
                ].start_time
              : _;
        }
        UpdateStuckCounters(_, _) {
          const _ =
              "forward" === _
                ? this.m_bFinishedSearchingForward
                : this.m_bFinishedSearchingBackward,
            _ = this.GetTimeEdgeForDirection(_, void 0);
          return _ || _ !== _
            ? ("forward" == _
                ? (this.m_nForwardStuckCount = 0)
                : (this.m_nBackwardStuckCount = 0),
              !1)
            : ("forward" == _
                ? this.m_nForwardStuckCount++
                : this.m_nBackwardStuckCount++,
              !0);
        }
        GetRequestInFlight(_) {
          return "forward" === _
            ? this.m_forwardRequestInFlight
            : this.m_backwardRequestInFlight;
        }
        SetRequestInFlight(_, _) {
          (0, _._)(
            !_ || !this.GetRequestInFlight(_),
            "Already have a request in flight for",
            _,
          ),
            "forward" === _
              ? (this.m_forwardRequestInFlight = _)
              : (this.m_backwardRequestInFlight = _);
        }
        async LoadAdditionalEvents(_, _) {
          var _, _, _;
          if (this.BHitEventHorizon(_)) return _._;
          let _ = this.GetRequestInFlight(_);
          if (_) return _;
          const _ =
              _._.STORE_BASE_URL + "events/ajaxgetusereventcalendarrange/",
            _ =
              "forward" === _
                ? this.m_nForwardStuckCount
                : this.m_nBackwardStuckCount,
            _ = _ >= 3 ? 1 : 0,
            _ = 250 + 50 * (_ < 3 ? _ : 0),
            _ = _._.GetTimeNowWithOverride(),
            _ =
              null !== (_ = this.GetTimeEdgeForDirection(_, _)) && void 0 !== _
                ? _
                : _,
            _ = {
              minTime: 0,
              maxTime: 0,
              ascending: !0,
              maxResults: _,
              populateEvents: 15,
              appTypes: this.m_visibilityStore.GetGameSources().join(","),
              eventTypes: Array.from(
                this.m_visibilityStore.enabledEventTypeSet,
              ).join(","),
              appIdFilter: (
                null === (_ = this.m_key.appids) || void 0 === _
                  ? void 0
                  : _.length
              )
                ? this.m_key.appids.sort().join(",")
                : void 0,
              clanIdFilter: (
                null === (_ = this.m_key.clanaccountids) || void 0 === _
                  ? void 0
                  : _.length
              )
                ? this.m_key.clanaccountids.sort().join(",")
                : void 0,
              collectionID: this.m_key.collectionid,
              saleID: this.m_key.saleid,
              hubtype: this.m_key.hubtype,
              category_or_language: this.m_key.category_or_language,
              tag_name: this.m_key.tag_name,
              tags: this.m_key.rgTags
                ? this.m_key.rgTags.slice().sort().join(",")
                : void 0,
            };
          "forward" === _
            ? ((_.minTime = Math.floor(_ + _)), (_.ascending = !0))
            : ((_.maxTime = Math.floor(_ - _)), (_.ascending = !1));
          return (
            (_ = _()
              .get(_, {
                params: _,
                cancelToken: _ ? _.token : void 0,
                withCredentials: !0,
              })
              .then(async (_) => {
                if ((this.SetRequestInFlight(_, null), _.data.success == _._)) {
                  if (
                    (await this.RegisterCalendarEventsAndModels(_.data),
                    this.UpdateStuckCounters(_, _))
                  )
                    return this.LoadAdditionalEvents(_, _);
                } else
                  console.error(
                    "LoadAdditionalEvents was not successful: Msg" + _.data.msg,
                  );
                return _.data.success;
              })
              .catch((_) => {
                this.SetRequestInFlight(_, null);
                let _ = (0, _._)(_);
                return (
                  console.error(
                    "LoadAdditionalEvents hit error " + _.strErrorMsg,
                    _,
                  ),
                  "forward" == _
                    ? (this.m_bFinishedSearchingForward = !0)
                    : (this.m_bFinishedSearchingBackward = !0),
                  _._
                );
              })),
            this.SetRequestInFlight(_, _),
            _
          );
        }
        BInternalInsertCalendarEventItem(_) {
          if (!_.unique_id)
            return (
              (0, _._)(
                !1,
                "Attmpted to register a calendar event item with an invalid unique id!",
              ),
              !1
            );
          if (this.m_mapCalendarEventsByGid.has(_.unique_id)) return !1;
          const _ = this.m_mapCalendarAppsByID.get(_.appid),
            _ = this.m_mapCalendarClansByID.get(_.clanid);
          if (!_ && !_)
            return console.log("No AppInfo or ClanInfo For: ", _), !1;
          const _ = new _._();
          return (
            (_.clanid = _.clanid),
            (_.unique_id = _.unique_id),
            (_.event_type = _.event_type),
            (_.appid = _.appid),
            (_.start_time = _.start_time),
            (_.score = _.score),
            (_.appInfo = _),
            (_.clanInfo = _),
            this.m_rgSortedCalendarEvents.push(_),
            this.m_mapCalendarEventsByGid.set(_.unique_id, _),
            !0
          );
        }
        GetCalendarAppInfoForAppID(_) {
          return this.m_mapCalendarAppsByID.get(_);
        }
        RebuildSortedCalendarEventList() {
          const _ = this.m_rgSortedCalendarEvents.slice();
          this.m_rgSortedCalendarEvents = _.sort(
            (_, _) => _.start_time - _.start_time,
          );
        }
        async UpdateEventBlockFromCalendarEvent(_, _) {
          const _ = _.appInfo ? _.appid : void 0,
            _ = _.clanInfo ? _.clanInfo.clanid : void 0;
          null != _ || null != _
            ? (await _._.Get().UpdateCommunicationSetting(_, _, _),
              (0, _._)(_._.k_eMuted))
            : (0, _._)(
                !1,
                "Both clan id and account id are missing, cannot change communication status",
              );
        }
        GetAllClans() {
          return Array.from(this.m_mapCalendarClansByID.keys());
        }
        GetAllApps() {
          return Array.from(this.m_mapCalendarAppsByID.keys());
        }
      }
      (0, _._)([_._], _.prototype, "m_mapCalendarAppsByID", void 0),
        (0, _._)([_._], _.prototype, "m_mapCalendarClansByID", void 0),
        (0, _._)([_._], _.prototype, "m_mapCalendarEventsByGid", void 0),
        (0, _._)([_._], _.prototype, "m_rgSortedCalendarEvents", void 0),
        (0, _._)([_._], _.prototype, "m_bFinishedSearchingForward", void 0),
        (0, _._)([_._], _.prototype, "m_bFinishedSearchingBackward", void 0),
        (0, _._)([_._], _.prototype, "m_rgCalendarSections", void 0),
        (0, _._)([_._], _.prototype, "m_rgFutureSections", void 0),
        (0, _._)([_._], _.prototype, "m_collectionMetaData", void 0),
        (0, _._)([_._], _.prototype, "InitCalendarSections", null),
        (0, _._)([_._], _.prototype, "InitFutureCalendarSections", null),
        (0, _._)([_._], _.prototype, "RegisterCalendarEventsAndModels", null),
        (0, _._)([_._], _.prototype, "RegisterCalendarApps", null),
        (0, _._)([_._], _.prototype, "RegisterCalendarClans", null),
        (0, _._)([_._], _.prototype, "RegisterCalendarEvents", null),
        (0, _._)([_._], _.prototype, "BHitEventHorizon", null),
        (0, _._)([_._.bound], _.prototype, "LoadAdditionalEvents", null),
        (0, _._)([_._], _.prototype, "UpdateEventBlockFromCalendarEvent", null);
      class _ {
        constructor(_, _, _, _, _, _) {
          (this.m_rgLoadedEventsBox = _._.box([])),
            (this.m_lastLoadLatch = null),
            (0, _._)(this),
            (this.m_fnGetUnfilteredEvents = _),
            (this.m_fnLoadAdditionalEvents = _),
            (this.m_fnBHitEventHorizon = _),
            (this.m_fnBIsEventInView = _),
            (this.m_bSkipStorePreferenceCheck = _),
            (this.m_bAllowMutedAndIgnoredSources = _),
            (this.m_rgAutorunDisposer = (0, _._)(async () => {
              const _ = this.viewFilteredEvents.slice();
              if (!this.m_bSkipStorePreferenceCheck) {
                const _ = Array.from(
                  new Set(_.map((_) => _.appid).filter(Boolean)),
                ).sort();
                if (
                  ((this.m_lastLoadLatch = _),
                  await _._.Get().QueueMultipleAppRequests(_, {
                    ..._._,
                    include_assets: !0,
                  }),
                  this.m_lastLoadLatch != _)
                )
                  return;
                this.m_lastLoadLatch = null;
              }
              this.m_rgLoadedEventsBox.set(_);
            }));
        }
        dispose() {
          this.m_rgAutorunDisposer();
        }
        get viewFilteredEvents() {
          return this.m_fnGetUnfilteredEvents().filter((_) =>
            this.m_fnBIsEventInView(_),
          );
        }
        get filteredAndCheckedEvents() {
          return this.m_rgLoadedEventsBox.get().filter((_) => {
            if (_.appid) {
              if (
                !this.m_bAllowMutedAndIgnoredSources &&
                (_._.Get().BIsMutedAppID(_.appid) ||
                  _._.Get().BIsGameIgnored(_.appid))
              )
                return !1;
              if (
                !this.m_bSkipStorePreferenceCheck &&
                (0, _._)(_._.Get().GetApp(_.appid))
              )
                return !1;
            } else if (
              !this.m_bAllowMutedAndIgnoredSources &&
              (_._.Get().BIsMutedClanID(_.clanid) ||
                _._.Get().BIsIgnoringCurator(_._.InitFromClanID(_.clanid)))
            )
              return !1;
            return !0;
          });
        }
        BIsCompleteThroughTime(_, _) {
          if (this.m_fnBHitEventHorizon(_)) return !0;
          const _ = this.m_fnGetUnfilteredEvents();
          return "forward" === _
            ? !!_ && _.length > 0 && _[0].start_time > _
            : void 0 !== _ && _.length > 0 && _[_.length - 1].start_time < _;
        }
        async EnsureRangeIsLoaded(_, _) {
          for (
            let _ = 0;
            _ < 100 && !this.BIsCompleteThroughTime("forward", _);
            _++
          )
            await this.m_fnLoadAdditionalEvents("forward");
          for (
            let _ = 0;
            _ < 100 && !this.BIsCompleteThroughTime("backward", _);
            _++
          )
            await this.m_fnLoadAdditionalEvents("backward");
        }
        GetCalendarItemsInTimeRange(_, _) {
          this.EnsureRangeIsLoaded(_, _);
          const _ = this.filteredAndCheckedEvents.filter(
              (_) => _.start_time >= _ && (!_ || _.start_time < _),
            ),
            _ = this.BIsCompleteThroughTime("forward", _),
            _ = this.BIsCompleteThroughTime("backward", _);
          return {
            rgCalendarItems: _,
            bIsComplete: _ && _,
          };
        }
        GetCurrentlyLoadedEvents() {
          return this.filteredAndCheckedEvents;
        }
        GetCurrentlyLoadedEventCount(_, _) {
          let _ = 0;
          this.filteredAndCheckedEvents.forEach((_) => {
            _.start_time >= _ && (!_ || _.start_time < _) && _++;
          });
          const _ = this.BIsCompleteThroughTime("forward", _),
            _ = this.BIsCompleteThroughTime("backward", _);
          return {
            nCount: _,
            bIsComplete: _ && _,
          };
        }
        BIsViewEmpty() {
          return this.filteredAndCheckedEvents.length > 0;
        }
        GetActiveEventsAt(_) {
          return this.filteredAndCheckedEvents
            .map((_) => _._.GetClanEventModel(_.unique_id))
            .filter((_) => {
              if (!_ || void 0 === _.startTime) return !1;
              const _ = _.endTime || _.startTime + 3600;
              return _ >= _.startTime && _ < _;
            });
        }
      }
      (0, _._)([_._.struct], _.prototype, "viewFilteredEvents", null),
        (0, _._)([_._.struct], _.prototype, "filteredAndCheckedEvents", null);
      const _ = _._.box(null),
        _ = new Map();
      function _(_, _) {
        let _ = "";
        return (
          _.appids &&
            _.appids.length > 0 &&
            (_ += "appids:" + _.appids.sort().join(",")),
          _.clanaccountids &&
            _.clanaccountids.length > 0 &&
            (_ += "clanids:" + _.clanaccountids.sort().join(",")),
          _.collectionid && (_ += "collection:" + _.collectionid),
          _.saleid && (_ += "sale:" + _.saleid),
          _.bSectionByDay && (_ += "_sectionbyday"),
          _.rtCalendarEnd && (_ += "_end:" + _.rtCalendarEnd),
          _.rgTags &&
            _.rgTags.length > 0 &&
            (_ += "_tags:" + _.rgTags.slice().sort().join(",")),
          _.hubtype &&
            (_ +=
              "_hubtype:" +
              _.hubtype +
              "_" +
              _.category_or_language +
              "_" +
              _.tag_name),
          _.get() !== _ && (_.set(_), _.has(_) || _.set(_, new _(_, _))),
          _
        );
      }
      function _() {
        let _ = _.get();
        return null == _ && (_ = _({})), _.get(_);
      }
      function _() {
        return null !== _.get();
      }
      window.g_EventCalendarMap = _;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      !(function (_) {
        (_.k_ERecent = "recent"),
          (_.k_ELibrary = "library"),
          (_.k_EWishlist = "wishlist"),
          (_.k_EFollowing = "following"),
          (_.k_ERecommended = "recommended"),
          (_.k_ESteam = "steam"),
          (_.k_EFeatured = "featured"),
          (_.k_ECurator = "curator");
      })(_ || (_ = {}));
      const _ = [
          _.k_ELibrary,
          _.k_EWishlist,
          _.k_EFollowing,
          _.k_ERecommended,
          _.k_ESteam,
          _.k_ECurator,
        ],
        _ = [..._, _.k_EFeatured],
        _ = [_.k_EFeatured];
      var _;
      !(function (_) {
        (_.k_ENews = "news"),
          (_.k_EEvents = "events"),
          (_.k_EStreaming = "streaming"),
          (_.k_EUpdates = "updates"),
          (_.k_EReleases = "releases"),
          (_.k_ESales = "sales");
      })(_ || (_ = {}));
      const _ = [
          _.k_ENews,
          _.k_EEvents,
          _.k_EStreaming,
          _.k_EUpdates,
          _.k_EReleases,
          _.k_ESales,
        ],
        _ = new Map([
          [_.k_ENews, [_.uYK]],
          [_.k_EEvents, [_.L0X, _.I5b, _._, _._, _.hGl, _.WNR, _.pIh, _.izQ]],
          [_.k_EStreaming, [_.KDJ]],
          [_.k_EUpdates, [_.Fwr, _._, _.zeJ]],
          [_.k_EReleases, [_.yhO, _.Aqr, _.DEQ, _.f4X, _.zcX]],
          [_.k_ESales, [_.HRy, _.C$4, _.LOv, _.HFK]],
        ]);
      function _(_) {
        return new Map(_.map((_) => [_, !0]));
      }
      class _ {
        constructor(_) {
          (this.m_mapEventTypeGroupsAllowed = new Map()),
            (this.m_mapGameSources = new Map()),
            (this.m_bCuratorUnhideOnFollowDialogDismissed = !1),
            (this.m_mapHiddenApps = new Map()),
            (this.m_mapHiddenClans = new Map()),
            (this.m_bInitializedForUpdatesOnly = !1),
            (this.m_eStorageType = "session"),
            (0, _._)(this),
            (0, _._)(() => {
              (null == _ ? void 0 : _.rgHiddenApps) &&
                _.rgHiddenApps.forEach((_) => this.m_mapHiddenApps.set(_, !0)),
                (null == _ ? void 0 : _.rgHiddenClans) &&
                  _.rgHiddenClans.forEach((_) =>
                    this.m_mapHiddenClans.set(_, !0),
                  );
            });
        }
        GetGameSources() {
          return Array.from(this.m_mapGameSources.keys());
        }
        GetStorageObject() {
          return this.m_strStorageKey
            ? "session" === this.m_eStorageType
              ? window.sessionStorage
              : window.localStorage
            : null;
        }
        GetPreferencesStorageKey() {
          return `${this.m_strStorageKey}-event-calendar-prefs`;
        }
        get enabledEventTypeSet() {
          var _;
          const _ = new Set();
          for (const _ of Array.from(this.m_mapEventTypeGroupsAllowed.keys()))
            null === (_ = _.get(_)) ||
              void 0 === _ ||
              _.forEach((_) => _.add(_));
          return _;
        }
        MapClanEventTypeToGroup(_) {
          let _;
          return (
            _.forEach((_, _) => {
              -1 !== __webpack_require__.indexOf(_) && (_ = _);
            }),
            _ || _.k_EEvents
          );
        }
        InitDefaultCheckboxes(_, _, _) {
          (this.m_bInitializedForUpdatesOnly = _),
            (this.m_mapEventTypeGroupsAllowed = _(_ ? [_.k_EUpdates] : _));
          const _ = (0, _._)() ? _ : _;
          (this.m_mapGameSources = _(_ ? _ : _)),
            _ && this.m_mapGameSources.set(_.k_EFeatured, !0);
        }
        Init(_, _, _, _, _) {
          (this.m_eStorageType = _), (this.m_strStorageKey = _);
          const _ = this.GetStorageObject(),
            _ = _ ? _.getItem(this.GetPreferencesStorageKey()) : null;
          if (_) {
            const _ = JSON.parse(_);
            if (_.rgEventTypeGroupsAllowed && _.rgGameSources) {
              const { rgEventTypeGroupsAllowed: _, rgGameSources: _ } = _;
              return (
                (this.m_mapEventTypeGroupsAllowed = _(_)),
                (this.m_mapGameSources = _(_)),
                void (
                  void 0 !== _.bCuratorUnhideOnFollowDismissed &&
                  (this.m_bCuratorUnhideOnFollowDialogDismissed =
                    _.bCuratorUnhideOnFollowDismissed)
                )
              );
            }
          }
          this.InitDefaultCheckboxes(_, _, _);
        }
        SaveFilterPreferences() {
          const _ = this.GetStorageObject();
          if (!_) return;
          const _ = {
            rgEventTypeGroupsAllowed: Array.from(
              this.m_mapEventTypeGroupsAllowed.keys(),
            ),
            rgGameSources: Array.from(this.m_mapGameSources.keys()),
            bCuratorUnhideOnFollowDismissed:
              this.m_bCuratorUnhideOnFollowDialogDismissed,
          };
          _.setItem(this.GetPreferencesStorageKey(), JSON.stringify(_));
        }
        RecordFilterChange() {
          let _ = 0;
          this.BIsGameSourceAllowed(_.k_ELibrary) && (_ |= 1),
            this.BIsGameSourceAllowed(_.k_EWishlist) && (_ |= 2),
            this.BIsGameSourceAllowed(_.k_EFollowing) && (_ |= 4),
            this.BIsGameSourceAllowed(_.k_ERecommended) && (_ |= 8),
            this.BIsGameSourceAllowed(_.k_ESteam) && (_ |= 16),
            this.BIsGameSourceAllowed(_.k_EFeatured) && (_ |= 32),
            this.BIsGameSourceAllowed(_.k_ERecent) && (_ |= 64),
            this.BIsEventTypeGroupAllowed(_.k_ENews) && (_ |= 1024),
            this.BIsEventTypeGroupAllowed(_.k_EEvents) && (_ |= 2048),
            this.BIsEventTypeGroupAllowed(_.k_EStreaming) && (_ |= 4096),
            this.BIsEventTypeGroupAllowed(_.k_EUpdates) && (_ |= 8192),
            this.BIsEventTypeGroupAllowed(_.k_EReleases) && (_ |= 16384),
            this.BIsEventTypeGroupAllowed(_.k_ESales) && (_ |= 32768),
            (0, _._)(_._, _);
        }
        BCuratorUnhideOnFollowDialogDismissed() {
          return this.m_bCuratorUnhideOnFollowDialogDismissed;
        }
        SetCuratorUnhideOnFollowDialogDismissed(_) {
          (this.m_bCuratorUnhideOnFollowDialogDismissed = _),
            this.SaveFilterPreferences();
        }
        BIsEventTypeGroupAllowed(_) {
          return this.m_mapEventTypeGroupsAllowed.has(_);
        }
        BIsGameSourceAllowed(_) {
          return (
            !(_ === _.k_EFollowing && !(0, _._)()) &&
            !(_ === _.k_ECurator && !(0, _._)()) &&
            this.m_mapGameSources.has(_)
          );
        }
        SetEventTypeGroupAllowed(_, _) {
          _
            ? this.m_mapEventTypeGroupsAllowed.set(_, !0)
            : this.m_mapEventTypeGroupsAllowed.delete(_),
            this.SaveFilterPreferences(),
            this.RecordFilterChange();
        }
        SetGameSourceAllowed(_, _) {
          _
            ? (this.m_mapGameSources.set(_, !0),
              _ == _.k_ERecent
                ? this.m_mapGameSources.delete(_.k_ELibrary)
                : _ == _.k_ELibrary &&
                  ((0, _._)(
                    !this.m_mapGameSources.has(_.k_ERecent),
                    "Setting Library although Recent already set - illusion was broken",
                  ),
                  this.m_mapGameSources.delete(_.k_ERecent)))
            : (this.m_mapGameSources.delete(_),
              _ == _.k_ERecent
                ? this.m_mapGameSources.set(_.k_ELibrary, !0)
                : _ == _.k_ELibrary &&
                  this.m_mapGameSources.delete(_.k_ERecent)),
            this.SaveFilterPreferences(),
            this.RecordFilterChange();
        }
        BShouldDisplayEvent(_) {
          const _ = _.GetSource(),
            _ = Boolean(
              _.appInfo &&
                _.appInfo.last_played &&
                _.appInfo.last_played + 15552e3 >= _._.GetTimeNowWithOverride(),
            );
          return (
            !!(
              this.enabledEventTypeSet.has(_.event_type) ||
              (this.m_bInitializedForUpdatesOnly &&
                this.BIsEventTypeGroupAllowed(_.k_EUpdates) &&
                _.event_type == _.uYK &&
                _.start_time < 1599202800)
            ) &&
            !this.m_mapHiddenApps.has(_.appid) &&
              !this.m_mapHiddenClans.has(_.clanid) &&
            (!!(_ & _._.k_eRequired || _ & _._.k_eReposted) ||
              Boolean(
                (this.BIsGameSourceAllowed(_.k_ERecent) && _) ||
                  (this.BIsGameSourceAllowed(_.k_ELibrary) &&
                    _ & _._.k_eLibrary) ||
                  (this.BIsGameSourceAllowed(_.k_EWishlist) &&
                    _ & _._.k_eWishlist) ||
                  (this.BIsGameSourceAllowed(_.k_EFollowing) &&
                    _ & _._.k_eFollowing) ||
                  (this.BIsGameSourceAllowed(_.k_ERecommended) &&
                    _ & _._.k_eRecommended) ||
                  (this.BIsGameSourceAllowed(_.k_ESteam) && _ & _._.k_eSteam) ||
                  (this.BIsGameSourceAllowed(_.k_EFeatured) &&
                    _ & _._.k_eFeatured) ||
                  (this.BIsGameSourceAllowed(_.k_ECurator) &&
                    _ & _._.k_eCurator),
              ))
          );
        }
        BAreAllEventsHidden() {
          return (
            0 == this.m_mapEventTypeGroupsAllowed.size ||
            0 == this.m_mapGameSources.size
          );
        }
        BAreAnyEventsFiltered(_) {
          const _ = (0, _._)() ? _ : _;
          return (
            (_ ? _ : _).some((_) => !this.BIsGameSourceAllowed(_)) ||
            _.some((_) => !this.BIsEventTypeGroupAllowed(_))
          );
        }
        BIsClanVisible(_) {
          return !this.m_mapHiddenClans.has(_);
        }
        SetClanVisibility(_, _) {
          _
            ? this.m_mapHiddenClans.has(_) && this.m_mapHiddenClans.delete(_)
            : this.m_mapHiddenClans.has(_) || this.m_mapHiddenClans.set(_, !0);
        }
        BIsAppVisible(_) {
          return !this.m_mapHiddenApps.has(_);
        }
        SetAppVisibility(_, _) {
          _
            ? this.m_mapHiddenApps.has(_) && this.m_mapHiddenApps.delete(_)
            : this.m_mapHiddenApps.has(_) || this.m_mapHiddenApps.set(_, !0);
        }
      }
      (0, _._)([_._], _.prototype, "m_mapEventTypeGroupsAllowed", void 0),
        (0, _._)([_._], _.prototype, "m_mapGameSources", void 0),
        (0, _._)(
          [_._],
          _.prototype,
          "m_bCuratorUnhideOnFollowDialogDismissed",
          void 0,
        ),
        (0, _._)([_._], _.prototype, "m_mapHiddenApps", void 0),
        (0, _._)([_._], _.prototype, "m_mapHiddenClans", void 0),
        (0, _._)(
          [
            (0, _._)({
              keepAlive: !0,
              equals: _._.structural,
            }),
          ],
          _.prototype,
          "enabledEventTypeSet",
          null,
        ),
        (0, _._)([_._], _.prototype, "SetEventTypeGroupAllowed", null),
        (0, _._)([_._], _.prototype, "SetGameSourceAllowed", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _._ {
        async DeleteOldAnnouncement(_, _) {
          let _ = new URLSearchParams();
          __webpack_require__.append("sessionid", (0, _._)());
          let _ =
              _._.COMMUNITY_BASE_URL +
              "/gid/" +
              _.ConvertTo64BitString() +
              "/announcements/ajaxdeleteannouncement/" +
              _,
            _ = await _().post(_, _);
          if (_.data.success != _._) throw _.data;
          return this.RemoveGIDFromList(_, _._ + _), _.data;
        }
        static Get() {
          return (
            _.sm_Instance || ((_.sm_Instance = new _()), _.sm_Instance.Init()),
            _.sm_Instance
          );
        }
        static GetSummaryStore() {
          return (
            _.sm_SummaryInstance ||
              ((_.sm_SummaryInstance = new _(!0)), _.sm_SummaryInstance.Init()),
            _.sm_SummaryInstance
          );
        }
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        constructor() {
          (this.m_mapBlockedAppIds = new Map()),
            (this.m_mapBlockedClanIds = new Map()),
            (0, _._)(this);
        }
        static Get() {
          return (
            _.s_globalSingletonStore ||
              ((_.s_globalSingletonStore = new _()),
              _.s_globalSingletonStore.Init()),
            _.s_globalSingletonStore
          );
        }
        GetMutedSourceCount() {
          return this.m_mapBlockedAppIds.size + this.m_mapBlockedClanIds.size;
        }
        Init() {
          const _ = (0, _._)("mutedcomminfo", "application_config");
          this.ValidateStoreDefault(_) &&
            (_.appids &&
              _.appids.forEach((_) => this.m_mapBlockedAppIds.set(_, !0)),
            _.clanids &&
              _.clanids.forEach((_) => this.m_mapBlockedClanIds.set(_, !0)));
        }
        ValidateStoreDefault(_) {
          const _ = _;
          return (
            !(!_ || "object" != typeof _) &&
            ((Array.isArray(_.appids) && _.appids.length > 0) ||
              (Array.isArray(_.clanids) && _.clanids.length > 0))
          );
        }
        BIsEventBlocked(_) {
          return _.appid
            ? this.m_mapBlockedAppIds.has(_.appid)
            : !!_.clanInfo && this.m_mapBlockedClanIds.has(_.clanInfo.clanid);
        }
        BIsMutedAppID(_) {
          return this.m_mapBlockedAppIds.has(_);
        }
        BIsMutedClanID(_) {
          return this.m_mapBlockedClanIds.has(_);
        }
        async UpdateCommunicationSetting(_, _, _) {
          const _ = _._.STORE_BASE_URL + "account/optoutappcommunication/",
            _ = new FormData();
          if (
            (_.append("sessionid", (0, _._)()),
            _.append("allowCommunication", _ ? "1" : "0"),
            _)
          ) {
            if (
              (!_ && this.m_mapBlockedAppIds.has(_)) ||
              (_ && !this.m_mapBlockedAppIds.has(_))
            )
              return !0;
            _
              ? this.m_mapBlockedAppIds.delete(_)
              : this.m_mapBlockedAppIds.set(_, !0),
              _.append("appId", _.toString());
          } else {
            if (!_)
              return (
                (0, _._)(
                  !1,
                  "BlockEventsFromCalenderEvent: Invalid AppID and ClanID",
                ),
                !1
              );
            if (
              (!_ && this.m_mapBlockedClanIds.has(_)) ||
              (_ && !this.m_mapBlockedClanIds.has(_))
            )
              return !0;
            _
              ? this.m_mapBlockedClanIds.delete(_)
              : this.m_mapBlockedClanIds.set(_, !0),
              _.append("clanId", __webpack_require__.toString());
          }
          try {
            return (await _().post(_, _)).data.success == _._;
          } catch (_) {
            return (
              console.error(
                "Blocking app id hit error " + (0, _._)(_).strErrorMsg,
              ),
              !1
            );
          }
        }
      }
      (0, _._)([_._], _.prototype, "m_mapBlockedAppIds", void 0),
        (0, _._)([_._], _.prototype, "m_mapBlockedClanIds", void 0);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { event: _, closeModal: _ } = _,
          _ = (0, _._)();
        return (0, _.jsx)(_._, {
          initialEvent: _,
          bShowOnlyInitialEvent: !0,
          partnerEventStore: _._,
          emoticonStore: _,
          showAppHeader: !0,
          closeModal: _,
        });
      }
      function _(_, _) {
        (0, _._)(
          (0, _.jsx)(_, {
            event: _,
          }),
          _,
        );
      }
      let _ = class extends _.Component {
        constructor() {
          super(...arguments), (this.m_refFocus = _.createRef());
        }
        componentDidMount() {
          this.props.fnClose &&
            (document.addEventListener("keydown", this.escFunction, !1),
            this.m_refFocus.current && this.m_refFocus.current.focus());
        }
        componentWillUnmount() {
          this.props.fnClose &&
            document.removeEventListener("keydown", this.escFunction, !1);
        }
        escFunction(_) {
          const { fnClose: _ } = this.props;
          27 === _.keyCode && _ && _();
        }
        OnBackgroundClick(_) {
          _.currentTarget == _.target && this.props.fnClose();
        }
        render() {
          const { event: _, langOverride: _, isPreview: _ } = this.props;
          return (0, _.jsx)("div", {
            ref: this.m_refFocus,
            className: _.Main,
            onClick: this.OnBackgroundClick,
            children: (0, _.jsx)(_._, {
              children: (_) =>
                (0, _.jsx)(
                  _._,
                  {
                    event: _,
                    emoticonStore: _,
                    partnerEventStore: _._.Get(),
                    langOverride: _,
                    isPreview: _,
                    bDisableBroadcastPlayer: !1,
                  },
                  _.GID,
                ),
            }),
          });
        }
      };
      (0, _._)([_._], _.prototype, "escFunction", null),
        (0, _._)([_._], _.prototype, "OnBackgroundClick", null),
        (_ = (0, _._)([_._], _));
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        constructor() {
          (this.m_bHasBeenTracked = !1), (this.m_fnSubmit = null);
        }
      }
      const _ = new (class {
          constructor() {
            (this.m_nImpressionDelayMS = 500), (this.m_mapEvents = new Map());
          }
          ShouldTrack(_) {
            if (_.bOldAnnouncement) return !1;
            const _ = this.m_mapEvents.get(_.GID);
            return !_ || !_.m_bHasBeenTracked;
          }
          StartTracking(_, _, _) {
            if (_.bOldAnnouncement) return;
            let _ = this.m_mapEvents.get(_.GID);
            _ || ((_ = new _()), this.m_mapEvents.set(_.GID, _)),
              _.m_bHasBeenTracked ||
                _.m_fnSubmit ||
                ((_.m_fnSubmit = new _._()),
                _.m_fnSubmit.Schedule(
                  this.m_nImpressionDelayMS,
                  this.ReportImpression.bind(this, _, _, _),
                ));
          }
          StopTracking(_) {
            const _ = this.m_mapEvents.get(_.GID);
            _ && _.m_fnSubmit && (_.m_fnSubmit.Cancel(), (_.m_fnSubmit = null));
          }
          ReportImpression(_, _, _) {
            if ((__webpack_require__.RecordEventShown(_, _._._), _)) {
              const _ = (0, _._)();
              _.RecordEventViewed(
                _.GID,
                __webpack_require__.GetCurrentlyLoadedItemsForStats(),
                __webpack_require__
                  .GetStoreInitializationTimestamp()
                  .getTime() / 1e3,
              );
            }
            const _ = this.m_mapEvents.get(_.GID);
            _ &&
              ((_.m_bHasBeenTracked = !0),
              _.m_fnSubmit.Cancel(),
              (_.m_fnSubmit = null));
          }
        })(),
        _ = (_) => {
          const { event: _ } = _,
            _ = (0, _._)(),
            _ = (0, _._)();
          if (_.ShouldTrack(_)) {
            const _ = () =>
                _.StartTracking(_, _.recordNewsHubStats ? _ : void 0, _),
              _ = () => _.StopTracking(_);
            return (0, _.jsx)(_._, {
              onEnter: _,
              onLeave: _,
            });
          }
          return null;
        };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = (_) => {
        let { bShowOnlyInitialEvent: _ } = _;
        const _ = (0, _._)(),
          _ = (0, _._)();
        return (0, _.jsx)(_._, {
          children: (0, _.jsx)(_, {
            ..._,
            bShowOnlyInitialEvent: _ || _,
            tracker: _,
          }),
        });
      };
      let _ = class extends _.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              bLoading: !1,
              eventModel: this.props.eventModel,
            }),
            (this.m_refParent = _.createRef()),
            (this.m_cancelSignal = _().CancelToken.source());
        }
        componentDidMount() {
          this.state.eventModel ||
            this.setState(
              {
                bLoading: !0,
              },
              this.LoadEvent,
            );
          let _ = this.GetBodyElement();
          _ &&
            this.props.bPrimaryPageFeature &&
            _.classList.add(_.BodyNoScroll);
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("EventInfiniteScrollModal unmounting");
          let _ = this.GetBodyElement();
          _ &&
            this.props.bPrimaryPageFeature &&
            _.classList.remove(_.BodyNoScroll);
        }
        GetBodyElement() {
          return this.m_refParent.current
            ? this.m_refParent.current.closest("body")
            : null;
        }
        async LoadEvent() {
          const {
            appid: _,
            clanSteamID: _,
            announcementGID: _,
            partnerEventStore: _,
            additionalParams: _,
          } = this.props;
          _.LoadAdjacentPartnerEventsByAnnouncement(
            _,
            _,
            _,
            0,
            3,
            _,
            this.m_cancelSignal,
          )
            .then((_) => {
              _.length > 0
                ? this.setState(
                    {
                      bLoading: !1,
                      eventModel: _[0],
                    },
                    this.HandleReadEvent,
                  )
                : (this.props.onEventNotFound && this.props.onEventNotFound(),
                  this.setState({
                    bLoading: !1,
                  }));
            })
            .catch((_) => {
              let _ = (0, _._)(_);
              console.error(
                "EventInfiniteScrollModal failed " + _.strErrorMsg,
                _,
              ),
                this.setState({
                  bLoading: !1,
                });
            });
        }
        async HandleReadEvent() {
          const { eventModel: _ } = this.state,
            { trackingLocation: _, tracker: _ } = this.props;
          _ &&
            _.BIsPartnerEvent() &&
            (__webpack_require__.RecordEventRead(_, _),
            __webpack_require__.Flush());
        }
        render() {
          const { bShowOnlyInitialEvent: _ } = this.props,
            { bLoading: _, eventModel: _ } = this.state;
          if (_)
            return (0, _.jsx)(_._, {
              active: !0,
              children: (0, _.jsx)("div", {
                className: _().FlexCenter,
                style: {
                  height: "400px",
                },
                children: (0, _.jsx)(_._, {}),
              }),
            });
          const {
            closeModal: _,
            appid: _,
            clanSteamID: _,
            className: _,
            partnerEventStore: _,
            showAppHeader: _,
            bPrimaryPageFeature: _,
            additionalParams: _,
            eventClassName: _,
          } = this.props;
          let _;
          _._.IN_CLIENT &&
            (null == _ ? void 0 : _.appid) &&
            (_._.Get().HintLoad(),
            _._.Get().BOwnsApp(_.appid) &&
              (_ = (_) => (0, _._)(_, "steam://nav/games/details/" + _.appid)));
          const _ = (0, _.jsx)(_._, {
            children: (_) =>
              (0, _.jsx)(_._, {
                initialEvent: _,
                appid: _,
                clanSteamID: _,
                partnerEventStore: _,
                emoticonStore: _,
                closeModal: !_ && _,
                showAppHeader: _,
                bShowOnlyInitialEvent: _,
                additionalParams: _,
                eventClassName: _,
                onAppIconClick: _,
              }),
          });
          return _
            ? _
            : (0, _.jsx)(_._, {
                active: !0,
                children: (0, _.jsx)("div", {
                  className: _,
                  children: _,
                }),
              });
        }
      };
      _ = (0, _._)([_._], _);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        return _._.Get().BIsStoreItemMissing(_._, (0, _._)(_.type));
      }
      function _(_, _, _) {
        const _ = new Array();
        return (
          null == _ ||
            _.forEach((_) =>
              _.push({
                _: _,
                type: "game",
              }),
            ),
          null == _ ||
            _.forEach((_) =>
              _.push({
                _: _,
                type: "sub",
              }),
            ),
          null == _ ||
            __webpack_require__.forEach((_) =>
              _.push({
                _: _,
                type: "bundle",
              }),
            ),
          _
        );
      }
      function _(_) {
        var _, _;
        const _ = _._.Get().GetStoreItem(_._, (0, _._)(_.type));
        return (
          (null !==
            (_ =
              null === (_ = null == _ ? void 0 : _.GetBestPurchaseOption()) ||
              void 0 === _
                ? void 0
                : _.discount_pct) && void 0 !== _
            ? _
            : 0) > 0
        );
      }
      function _(_) {
        var _;
        if (
          !(null === (_ = _._.Get().GetHomeView()) || void 0 === _
            ? void 0
            : _.localized)
        )
          return !0;
        const _ = _._.Get().GetStoreItem(_._, (0, _._)(_.type));
        return (
          !_ ||
          _._.Get().BIsAnyLanguageEnabled(
            __webpack_require__.GetAllLanguagesWithSomeSupport(),
          )
        );
      }
      async function _(_, _, _) {
        if (!_ || 0 == _.length) return [];
        const _ = _.filter((_) => (0, _._)(_.type)).map((_) => _._),
          _ = _.filter((_) => "sub" === _.type).map((_) => _._),
          _ = _.filter((_) => "bundle" === _.type).map((_) => _._);
        {
          const _ = _.filter((_) => !_._.Get().BHasApp(_, _)),
            _ = _.filter((_) => !_._.Get().BHasApp(_, _)),
            _ = _.filter((_) => !_._.Get().BHasApp(_, _));
          (_.length > 0 || _.length > 0 || _.length > 0) &&
            (await Promise.all([
              _._.Get().QueueMultipleAppRequests(_, _),
              _._.Get().QueueMultiplePackageRequests(_, _),
              _._.Get().QueueMultipleBundleRequests(_, _),
            ]));
        }
        const _ = new Set();
        null == _ ||
          _.forEach((_) => {
            const _ = _._.Get().GetBundle(_);
            null == _ || _.GetIncludedAppIDs().forEach((_) => _.add(_));
          }),
          null == _ ||
            _.forEach((_) => {
              const _ = _._.Get().GetPackage(_);
              null == _ || _.GetIncludedAppIDs().forEach((_) => _.add(_));
            });
        const _ = Array.from(_).filter((_) => !_._.Get().BHasApp(_, _));
        if (
          (_.length > 0 && (await _._.Get().QueueMultipleAppRequests(_, _)),
          _.forEach((_) => _.add(_)),
          _)
        ) {
          const _ = Array.from(_)
            .map((_) => {
              const _ = _._.Get().GetApp(_),
                _ = null == _ ? void 0 : _.GetParentAppID();
              return _ ? (_.add(_), _) : null;
            })
            .filter((_) => null !== _)
            .filter((_) => !_._.Get().BHasApp(_, _));
          _.length > 0 && (await _._.Get().QueueMultipleAppRequests(_, _));
        }
        return Array.from(_).filter((_) => {
          const _ = _._.Get().GetApp(_);
          return _ && !_.GetParentAppID();
        });
      }
      const _ = {
        include_tag_count: 20,
        include_basic_info: !0,
        include_supported_languages: !0,
      };
      function _(_) {
        var _;
        if (!_) return !0;
        const _ = _._.Get();
        if (
          ((0, _._)(
            __webpack_require__.BIsLoaded(),
            "Dynamic Store not loaded",
          ),
          _.GetStoreItemType() == _._._)
        ) {
          const _ = _.GetParentAppID();
          if (
            __webpack_require__.BIsGameIgnored(_.GetAppID()) ||
            (void 0 !== _ && __webpack_require__.BIsGameIgnored(_))
          )
            return !0;
        }
        if (
          __webpack_require__.BExcludesContentDescriptor(
            _.GetContentDescriptorIDs(),
          )
        )
          return !0;
        if (__webpack_require__.BExcludeTagIDs(_.GetTagIDs())) return !0;
        if (
          _.GetAllCreatorClanIDs().some((_) =>
            __webpack_require__.BIsIgnoringCurator(_),
          )
        )
          return !0;
        if (
          null === (_ = _._.Get().GetHomeView()) || void 0 === _
            ? void 0
            : _.localized
        ) {
          const _ = _.GetAllLanguagesWithSomeSupport();
          if (
            _.length > 0 &&
            !_.BHasSomeLanguageSupport(_.Bhc) &&
            !__webpack_require__.BIsAnyLanguageEnabled(_)
          )
            return !0;
        }
        return !1;
      }
      async function _(_, _, _, _) {
        const _ = [];
        await _(_, _._, _);
        for (const _ of _) {
          const _ = _._.Get().GetStoreItem(_._, (0, _._)(_.type));
          if (!_) {
            0;
            continue;
          }
          const _ = _.GetIncludedAppIDs()
            .map((_) => _._.Get().GetApp(_))
            .filter((_) => Boolean(_));
          if ((_.push(_), _)) {
            const _ = new Set(
                _.map((_) => _.GetParentAppID()).filter((_) => Boolean(_)),
              ),
              _ = Array.from(_)
                .map((_) => _._.Get().GetApp(_))
                .filter((_) => Boolean(_));
            _ && _.push(..._);
          }
          _.some(_ || _)
            ? _ &&
              (_._.Get().BIsStoreItemOwned(_) || __webpack_require__.push(_))
            : _.push(_);
        }
        return _;
      }
      async function _(_, _, _, _, _, _, _) {
        let _ = await _(
          _,
          _,
          _,
          _
            ? (_) =>
                !_ ||
                _._.Get().BExcludesContentDescriptor(
                  _.GetContentDescriptorIDs(),
                ) ||
                _._.Get().BExcludeTagIDs(_.GetTagIDs())
            : _,
        );
        const _ = [];
        for (const _ of _) {
          const _ = _._.Get().GetStoreItem(_._, (0, _._)(_.type));
          if (!_) continue;
          const _ = null == _ ? void 0 : _.GetIncludedAppIDsOrSelf();
          let _ = !1;
          _ && (_ = _ || _.every((_) => _._.Get().BIsGameOwned(_))),
            _ && (_ = _ || _.every((_) => _._.Get().BIsGameWishlisted(_))),
            _ && (_ = _ || _.every((_) => _._.Get().BIsGameIgnored(_))),
            _ ? _ && _.push(_) : _.push(_);
        }
        return _;
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            title: _,
            tooltip: _,
            getMinimized: _,
            toggleMinimized: _,
            className: _,
            children: _,
            elAdditionalButtons: _,
          } = _,
          _ = (0, _._)(() => _());
        return (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsxs)("div", {
              className: (0, _._)(
                _,
                _.SectionTitleHeader,
                _.required_title,
                "SectionTitleHeader",
              ),
              children: [
                (0, _.jsxs)("div", {
                  className: (0, _._)(
                    _.CollapsableSectionTitle,
                    "EventEditorTextTitle",
                  ),
                  children: [
                    _,
                    Boolean(_) &&
                      (0, _.jsx)(_._, {
                        tooltip: _,
                      }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  className: _.SectionTitleButtons,
                  children: [
                    _,
                    (0, _.jsx)(_, {
                      bIsMinimized: _,
                      fnToggleMinimize: _,
                    }),
                  ],
                }),
              ],
            }),
            !_ &&
              (0, _.jsx)(_._, {
                children: _,
              }),
          ],
        });
      }
      function _(_) {
        const [_, _] = _.useState(Boolean(_.bStartMinimized));
        return (0, _.jsx)(_, {
          ..._,
          getMinimized: () => _,
          toggleMinimized: () => __webpack_require__(!_),
          children: _.children,
        });
      }
      function _(_) {
        const { bIsMinimized: _, fnToggleMinimize: _ } = _,
          _ = _ ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return (0, _.jsx)(_._, {
          "data-tooltip-text": (0, _._)(_),
          onClick: _,
          children: _.bIsMinimized
            ? (0, _.jsx)(_.hz4, {})
            : (0, _.jsx)(_.Xjb, {}),
        });
      }
    },
  },
]);
