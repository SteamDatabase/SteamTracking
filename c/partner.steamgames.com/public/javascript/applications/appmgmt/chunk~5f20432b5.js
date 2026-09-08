"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6129],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      __webpack_require__("chunkid");
      function _(_, _) {
        _.Body().set_context(_(_));
      }
      function _(_) {
        let _ = new _._();
        return (
          _ || _.set_country_code(_._.COUNTRY), _.set_language(_._.LANGUAGE), _
        );
      }
      function _(_, _) {
        _.Body().set_data_request(_._.fromObject(_));
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _) {
        if (!_) return _;
        if (!_) return _;
        return {
          include_assets: _.include_assets || _.include_assets,
          include_release: _.include_release || _.include_release,
          include_platforms: _.include_platforms || _.include_platforms,
          include_all_purchase_options:
            _.include_all_purchase_options || _.include_all_purchase_options,
          include_screenshots: _.include_screenshots || _.include_screenshots,
          include_trailers: _.include_trailers || _.include_trailers,
          include_ratings: _.include_ratings || _.include_ratings,
          include_tag_count:
            Math.max(_.include_tag_count || 0, _.include_tag_count || 0) ||
            void 0,
          include_reviews: _.include_reviews || _.include_reviews,
          include_basic_info: _.include_basic_info || _.include_basic_info,
          include_supported_languages:
            _.include_supported_languages || _.include_supported_languages,
          include_full_description:
            _.include_full_description || _.include_full_description,
          include_included_items:
            _.include_included_items || _.include_included_items,
          include_assets_without_overrides:
            _.include_assets_without_overrides ||
            _.include_assets_without_overrides,
          apply_user_filters: _.apply_user_filters || _.apply_user_filters,
          include_links: _.include_links || _.include_links,
          include_extra_details:
            _.include_extra_details || _.include_extra_details,
        };
      }
      async function _(_, _) {
        const _ = await _,
          _ = await _;
        return _ != _._ ? _ : _;
      }
      class _ {
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
        k_AlreadyResolvedOK = Promise.resolve(_._);
        k_AlreadyResolvedInvalid = Promise.resolve(_._);
        k_AlreadyResolvedBusy = Promise.resolve(_._);
        static sm_instance;
        static Get() {
          return (
            _.sm_instance ||
              ((_.sm_instance = new _()),
              (0, _._)("StoreItemCache", _.sm_instance)),
            _.sm_instance
          );
        }
        static Initialize(_, _) {
          const _ = _.Get();
          return (
            (0, _._)(
              !_.m_bInitialized,
              "CStoreItemCache was already initialized; initialize it only once.",
            ),
            (_.m_serviceTransport = _),
            (_.m_bUsePartnerAPI = !!_),
            (_.m_bInitialized = !0),
            () => {
              (_.m_serviceTransport = void 0),
                (_.m_bUsePartnerAPI = !1),
                (_.m_bInitialized = !1);
            }
          );
        }
        SetSteamInterface(_) {
          this.SetServiceTransport(_.GetServiceTransport());
        }
        SetServiceTransport(_) {
          this.m_serviceTransport = _;
        }
        SetReturnUnavailableItems(_) {
          this.m_bReturnUnavailableItems = _;
        }
        GetReturnUnavailableItems() {
          return this.m_bReturnUnavailableItems;
        }
        async ResetCache() {
          (this.m_bActivelyResettingCache = !0), this.FlushPendingInfo();
          let _ = [];
          this.m_mapAppsInFlight.forEach((_) => {
            _.push(_.promise);
          }),
            this.m_mapBundleInFlight.forEach((_) => {
              _.push(_.promise);
            }),
            this.m_mapPackageInFlight.forEach((_) => {
              _.push(_.promise);
            }),
            this.m_mapTagsInFlight.forEach((_) => {
              _.push(_.promise);
            }),
            this.m_mapCreatorsInFlight.forEach((_) => {
              _.push(_.promise);
            }),
            this.m_mapHubCategoriesInFlight.forEach((_) => {
              _.push(_.promise);
            }),
            await Promise.all(_),
            this.m_mapApps.clear(),
            this.m_mapBundles.clear(),
            this.m_mapPackages.clear(),
            this.m_mapTagsInFlight.clear(),
            this.m_mapCreatorsInFlight.clear(),
            this.m_mapHubCategoriesInFlight.clear(),
            (this.m_bActivelyResettingCache = !1);
        }
        static BIsInitialized() {
          return _.Get().m_bInitialized;
        }
        static k_DataRequest_CommonOnly = {};
        static k_DataRequest_BasicInfo = {
          include_basic_info: !0,
        };
        static k_DataRequest_Assets = {
          include_assets: !0,
        };
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
          include_full_description: !0,
          include_links: !0,
        };
        async QueueAppRequest(_, _) {
          return this.QueueStoreItemRequest(_, _._._, _);
        }
        async QueuePackageRequest(_, _) {
          return this.QueueStoreItemRequest(_, _._._, _);
        }
        async QueueBundleRequest(_, _) {
          return this.QueueStoreItemRequest(_, _._._, _);
        }
        async QueueTagRequest(_, _) {
          return this.QueueStoreItemRequest(_, _._._, _);
        }
        async QueueCreatorRequest(_, _) {
          return this.QueueStoreItemRequest(_, _._._, _);
        }
        async QueueHubCategoryRequest(_, _) {
          return this.QueueStoreItemRequest(_, _._._, _);
        }
        static ValidateDataRequest(_) {
          const _ = [
            _.include_assets,
            _.include_release,
            _.include_platforms,
            _.include_all_purchase_options,
            _.include_screenshots,
            _.include_trailers,
            _.include_ratings,
            _.include_reviews,
            _.include_basic_info,
            _.include_supported_languages,
            _.include_full_description,
            _.include_links,
          ];
          for (const _ of _) if (!0 !== _ && void 0 !== _) return !1;
          return !0;
        }
        async QueueMultipleAppRequests(_, _) {
          if (!_ || 0 == _.length) return _._;
          const _ = (
            await Promise.all(
              _.map((_) => this.QueueStoreItemRequest(_, _._._, _)),
            )
          ).filter((_) => _ != _._);
          return _.length > 0 ? _[0] : _._;
        }
        async QueueMultiplePackageRequests(_, _) {
          if (!_ || 0 == _.length) return _._;
          const _ = (
            await Promise.all(
              _.map((_) => this.QueueStoreItemRequest(_, _._._, _)),
            )
          ).filter((_) => _ != _._);
          return _.length > 0 ? _[0] : _._;
        }
        async QueueMultipleBundleRequests(_, _) {
          if (!_ || 0 == _.length) return _._;
          const _ = (
            await Promise.all(
              _.map((_) => this.QueueStoreItemRequest(_, _._._, _)),
            )
          ).filter((_) => _ != _._);
          return _.length > 0 ? _[0] : _._;
        }
        async QueueMultipleTagRequests(_, _) {
          if (!_ || 0 == _.length) return _._;
          const _ = (
            await Promise.all(
              _.map((_) => this.QueueStoreItemRequest(_, _._._, _)),
            )
          ).filter((_) => _ != _._);
          return _.length > 0 ? _[0] : _._;
        }
        async QueueMultipleCreatorRequests(_, _) {
          if (!_ || 0 == _.length) return _._;
          const _ = (
            await Promise.all(
              _.map((_) => this.QueueStoreItemRequest(_, _._._, _)),
            )
          ).filter((_) => _ != _._);
          return _.length > 0 ? _[0] : _._;
        }
        async QueueMultipleHubCategoryRequests(_, _) {
          if (!_ || 0 == _.length) return _._;
          const _ = (
            await Promise.all(
              _.map((_) => this.QueueStoreItemRequest(_, _._._, _)),
            )
          ).filter((_) => _ != _._);
          return _.length > 0 ? _[0] : _._;
        }
        async QueueMultipleStoreItemRequests(_, _, _) {
          if (!_ || 0 == _.length) return _._;
          const _ = (
            await Promise.all(
              _.map((_, _) => this.QueueStoreItemRequest(_, _[_], _)),
            )
          ).filter((_) => _ != _._);
          return _.length > 0 ? _[0] : _._;
        }
        async QueueStoreItemRequest(_, _, _) {
          if (
            ((0, _._)(
              _.ValidateDataRequest(_),
              "Invalid Data Request: " + JSON.stringify(_),
            ),
            "string" == typeof _ && (_ = parseInt(_)),
            this.m_bActivelyResettingCache)
          )
            return (
              console.log(
                "Rejecting store item request due to currently clearing the cache",
              ),
              this.k_AlreadyResolvedBusy
            );
          if (!_)
            return (
              (0, _._)(
                !_,
                `unexpected id ${_} of zero or undefined for type ${_}`,
              ),
              this.k_AlreadyResolvedInvalid
            );
          const _ = this.GetPreviousSupersetLoadPromise(_, _, _);
          if (_) return _;
          switch (
            (this.m_PendingInfoPromise ||
              ((this.m_PendingInfoPromise = new Promise(
                (_) => (this.m_PendingInfoResolve = _),
              )),
              (this.m_PendingTimer = window.setTimeout(
                () => this.FlushPendingInfo(),
                this.k_QueueWaitUntilRequestMS,
              ))),
            (this.m_setPendingDataRequest = _(this.m_setPendingDataRequest, _)),
            _)
          ) {
            case _._._:
              this.m_setPendingAppInfo.add(_);
              break;
            case _._._:
              this.m_setPendingBundleInfo.add(_);
              break;
            case _._._:
              this.m_setPendingPackageInfo.add(_);
              break;
            case _._._:
              this.m_setPendingTagInfo.add(_);
              break;
            case _._._:
              this.m_setPendingCreatorInfo.add(_);
              break;
            case _._._:
              this.m_setPendingHubCategoryInfo.add(_);
              break;
            default:
              (0, _._)(!1, `Unexpected Type ${_}`);
          }
          const _ = this.m_PendingInfoPromise;
          return (
            this.m_setPendingAppInfo.size +
              this.m_setPendingPackageInfo.size +
              this.m_setPendingBundleInfo.size >=
              this.k_nMaxBatchSize &&
              (this.m_PendingTimer && window.clearTimeout(this.m_PendingTimer),
              this.FlushPendingInfo()),
            _
          );
        }
        async FlushPendingInfo() {
          if (void 0 === this.m_PendingInfoResolve) return;
          const _ = this.m_PendingInfoResolve,
            _ = Array.from(this.m_setPendingAppInfo),
            _ = Array.from(this.m_setPendingPackageInfo),
            _ = Array.from(this.m_setPendingBundleInfo),
            _ = Array.from(this.m_setPendingTagInfo),
            _ = Array.from(this.m_setPendingCreatorInfo),
            _ = Array.from(this.m_setPendingHubCategoryInfo),
            _ = this.m_setPendingDataRequest;
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
            this.HintLoadStoreItems(_, _, _, _, _, _, _).then((_) => _(_));
        }
        async HintLoadStoreApps(_, _) {
          return this.HintLoadStoreItems(_, null, null, null, null, null, _);
        }
        async HintLoadStorePackages(_, _) {
          return this.HintLoadStoreItems(null, _, null, null, null, null, _);
        }
        async HintLoadStoreBundles(_, _) {
          return this.HintLoadStoreItems(null, null, _, null, null, null, _);
        }
        GetPreviousSupersetLoadPromise(_, _, _) {
          if (this.BHasStoreItem(_, _, _) || this.BIsStoreItemMissing(_, _))
            return this.k_AlreadyResolvedOK;
          let _ = null;
          switch (_) {
            case _._._:
              _ = this.m_mapAppsInFlight.get(_);
              break;
            case _._._:
              _ = this.m_mapPackageInFlight.get(_);
              break;
            case _._._:
              _ = this.m_mapBundleInFlight.get(_);
              break;
            case _._._:
              _ = this.m_mapTagsInFlight.get(_);
              break;
            case _._._:
              _ = this.m_mapCreatorsInFlight.get(_);
              break;
            case _._._:
              _ = this.m_mapHubCategoriesInFlight.get(_);
          }
          return _ && _._.BDataRequestContainsOtherDataRequest(_.dataRequest, _)
            ? _.promise
            : null;
        }
        async HintLoadStoreItems(_, _, _, _, _, _, _) {
          let _ = null;
          const _ = new Promise((_) => (_ = _));
          let _ = [],
            _ = [];
          (_ || []).forEach((_) => {
            const _ = this.GetPreviousSupersetLoadPromise(_, _._._, _);
            if (_) _.push(_);
            else {
              _.push(
                _._.fromObject({
                  appid: _,
                }),
              );
              let _ = _(this.GetStoreItemDataRequest(_, _._._), _);
              const _ = this.m_mapAppsInFlight.get(_);
              (_ = _(_?.dataRequest, _)),
                _ && _.push(_.promise),
                this.m_mapAppsInFlight.set(_, {
                  promise: _ ? _(_.promise, _) : _,
                  dataRequest: _,
                });
            }
          }),
            (_ || []).forEach((_) => {
              const _ = this.GetPreviousSupersetLoadPromise(_, _._._, _);
              if (_) _.push(_);
              else {
                _.push(
                  _._.fromObject({
                    packageid: _,
                  }),
                );
                let _ = _(this.GetStoreItemDataRequest(_, _._._), _);
                const _ = this.m_mapPackageInFlight.get(_);
                (_ = _(_?.dataRequest, _)),
                  _ && _.push(_.promise),
                  this.m_mapPackageInFlight.set(_, {
                    promise: _ ? _(_.promise, _) : _,
                    dataRequest: _,
                  });
              }
            }),
            (_ || []).forEach((_) => {
              const _ = this.GetPreviousSupersetLoadPromise(_, _._._, _);
              if (_) _.push(_);
              else {
                _.push(
                  _._.fromObject({
                    bundleid: _,
                  }),
                );
                let _ = _(this.GetStoreItemDataRequest(_, _._._), _);
                const _ = this.m_mapBundleInFlight.get(_);
                (_ = _(_?.dataRequest, _)),
                  _ && _.push(_.promise),
                  this.m_mapBundleInFlight.set(_, {
                    promise: _ ? _(_.promise, _) : _,
                    dataRequest: _,
                  });
              }
            }),
            (_ || []).forEach((_) => {
              const _ = this.GetPreviousSupersetLoadPromise(_, _._._, _);
              if (_) _.push(_);
              else {
                _.push(
                  _._.fromObject({
                    tagid: _,
                  }),
                );
                let _ = _(this.GetStoreItemDataRequest(_, _._._), _);
                const _ = this.m_mapTagsInFlight.get(_);
                (_ = _(_?.dataRequest, _)),
                  _ && _.push(_.promise),
                  this.m_mapTagsInFlight.set(_, {
                    promise: _ ? _(_.promise, _) : _,
                    dataRequest: _,
                  });
              }
            }),
            (_ || []).forEach((_) => {
              const _ = this.GetPreviousSupersetLoadPromise(_, _._._, _);
              if (_) _.push(_);
              else {
                _.push(
                  _._.fromObject({
                    creatorid: _,
                  }),
                );
                let _ = _(this.GetStoreItemDataRequest(_, _._._), _);
                const _ = this.m_mapCreatorsInFlight.get(_);
                (_ = _(_?.dataRequest, _)),
                  _ && _.push(_.promise),
                  this.m_mapCreatorsInFlight.set(_, {
                    promise: _ ? _(_.promise, _) : _,
                    dataRequest: _,
                  });
              }
            }),
            (_ || []).forEach((_) => {
              const _ = this.GetPreviousSupersetLoadPromise(_, _._._, _);
              if (_) _.push(_);
              else {
                _.push(
                  _._.fromObject({
                    hubcategoryid: _,
                  }),
                );
                let _ = _(this.GetStoreItemDataRequest(_, _._._), _);
                const _ = this.m_mapHubCategoriesInFlight.get(_);
                (_ = _(_?.dataRequest, _)),
                  _ && _.push(_.promise),
                  this.m_mapHubCategoriesInFlight.set(_, {
                    promise: _ ? _(_.promise, _) : _,
                    dataRequest: _,
                  });
              }
            });
          let _ = _._;
          if (
            (_.length > 0 &&
              (_ = await this.InternalHandleLoadStoreItems(_, _)),
            _(_),
            _.length > 0)
          ) {
            const _ = await Promise.all(_);
            for (const _ of _) _ != _._ && _ == _._ && (_ = _);
          }
          return (
            (_ || []).forEach((_) => this.m_mapAppsInFlight.delete(_)),
            (_ || []).forEach((_) => this.m_mapPackageInFlight.delete(_)),
            (_ || []).forEach((_) => this.m_mapBundleInFlight.delete(_)),
            (_ || []).forEach((_) => this.m_mapTagsInFlight.delete(_)),
            (_ || []).forEach((_) => this.m_mapCreatorsInFlight.delete(_)),
            (_ || []).forEach((_) => this.m_mapHubCategoriesInFlight.delete(_)),
            _
          );
        }
        MarkStoreItemIDUnavailable(_) {
          (_ || []).forEach((_) => {
            _.appid()
              ? (this.m_setUnavailableApps.add(_.appid()),
                this.m_mapApps.delete(_.appid()))
              : _.packageid()
                ? (this.m_setUnavailablePackages.add(_.packageid()),
                  this.m_mapPackages.delete(_.packageid()))
                : _.bundleid()
                  ? (this.m_setUnavailableBundles.add(_.bundleid()),
                    this.m_mapBundles.delete(_.bundleid()))
                  : _.tagid()
                    ? (this.m_setUnavailableTags.add(_.tagid()),
                      this.m_mapTags.delete(_.tagid()))
                    : _.creatorid()
                      ? (this.m_setUnavailableCreators.add(_.creatorid()),
                        this.m_mapCreators.delete(_.creatorid()))
                      : _.hubcategoryid() &&
                        (this.m_setUnavailableHubCategories.add(
                          _.hubcategoryid(),
                        ),
                        this.m_mapHubCategories.delete(_.hubcategoryid()));
          });
        }
        SortStoreItems(_) {
          let _ = _.slice();
          return (
            _.sort((_, _) => {
              let _ = _.appid() ?? 0,
                _ = _.appid() ?? 0;
              if (_ != _) return _ - _;
              let _ = _.packageid() ?? 0,
                _ = _.packageid() ?? 0;
              if (_ != _) return _ - _;
              let _ = _.bundleid() ?? 0,
                _ = _.bundleid() ?? 0;
              if (_ != _) return _ - _;
              let _ = _.tagid() ?? 0,
                _ = _.tagid() ?? 0;
              if (_ != _) return _ - _;
              let _ = _.creatorid() ?? 0,
                _ = _.creatorid() ?? 0;
              if (_ != _) return _ - _;
              let _ = _.hubcategoryid() ?? 0,
                _ = _.hubcategoryid() ?? 0;
              return _ != _ ? _ - _ : 0;
            }),
            _
          );
        }
        GetServiceTransport() {
          return (
            this.m_serviceTransport ||
              (console.warn(
                "Service transport not initialized for StoreItemCache",
              ),
              (this.m_serviceTransport = new _._(
                _._.WEBAPI_BASE_URL,
              ).GetAnonymousServiceTransport())),
            this.m_serviceTransport
          );
        }
        async InternalHandleLoadStoreItems(_, _) {
          let _ = _._;
          (_ = this.SortStoreItems(_)),
            _.include_included_items &&
              (_ = {
                ..._,
                included_item_data_request: {
                  ..._,
                  include_included_items: !1,
                },
              });
          const _ = new Array();
          try {
            const _ = [];
            for (; _.length > 0; ) {
              const _ = _.splice(0, this.k_nMaxBatchSize);
              if ((_.push(_), this.m_bUsePartnerAPI)) {
                const _ = _._.Init(_._);
                _.Body().set_include_unpublished(!1);
                const _ = _.Body().getitems_request(!0);
                _.set_context((0, _._)(this.m_bUsePartnerAPI)),
                  _.set_data_request(_._.fromObject(_)),
                  _.set_ids(_),
                  _.push(_._.GetItems(this.GetServiceTransport(), _));
              } else {
                const _ = _._.Init(_._);
                (0, _._)(_, this.m_bUsePartnerAPI),
                  (0, _._)(_, _),
                  _.Body().set_ids(_),
                  _.push(_._.GetItems(this.GetServiceTransport(), _));
              }
            }
            (await Promise.all(_)).forEach((_, _) => {
              _.GetEResult() == _._
                ? _.Body()
                    .store_items()
                    .forEach((_) => {
                      const _ = __webpack_require__._(),
                        _ = __webpack_require__.item_type();
                      let _ =
                          this.m_bReturnUnavailableItems &&
                          __webpack_require__.success() == _._,
                        _ =
                          __webpack_require__.success() == _._ &&
                          !this.BIsStoreItemMissing(_, _);
                      if (_ || _) this.ReadItem(_, _);
                      else {
                        switch (_) {
                          case _._._:
                            this.m_setUnavailableApps.add(_),
                              this.m_mapApps.delete(_);
                            break;
                          case _._._:
                            this.m_setUnavailablePackages.add(_),
                              this.m_mapPackages.delete(_);
                            break;
                          case _._._:
                            this.m_setUnavailableBundles.add(_),
                              this.m_mapBundles.delete(_);
                            break;
                          case _._._:
                            this.m_setUnavailableTags.add(_),
                              this.m_mapTags.delete(_);
                            break;
                          case _._._:
                            this.m_setUnavailableCreators.add(_),
                              this.m_mapCreators.delete(_);
                            break;
                          case _._._:
                            this.m_setUnavailableHubCategories.add(_),
                              this.m_mapHubCategories.delete(_);
                            break;
                          default:
                            console.error(
                              "CStoreItemCache.InternalHandleLoadStoreItems unexpected item_type in response " +
                                _ +
                                " " +
                                _,
                            );
                        }
                        if (
                          __webpack_require__.unvailable_for_country_restriction()
                        )
                          switch (_) {
                            case _._._:
                              this.m_setUnavailableDueToCountryRestrictionApps.add(
                                _,
                              );
                              break;
                            case _._._:
                              this.m_setUnavailableDueToCountryRestrictionPackages.add(
                                _,
                              );
                              break;
                            case _._._:
                              this.m_setUnavailableDueToCountryRestrictionBundles.add(
                                _,
                              );
                              break;
                            case _._._:
                            case _._._:
                            case _._._:
                              console.error(
                                "CStoreItemCache::InternalHandleLoadStoreItems - tags, creators or categories don't have country restrictions. eResult: " +
                                  _.GetEResult() +
                                  " message: " +
                                  _.Hdr().error_message(),
                                (0, _._)(_),
                              );
                          }
                      }
                    })
                : (console.warn(
                    "CStoreItemCache::InternalHandleLoadStoreItems failed with eResult: " +
                      _.GetEResult() +
                      " message: " +
                      _.Hdr().error_message(),
                    (0, _._)(_),
                  ),
                  (_.Hdr().transport_error() == _._ || _._.FROM_WEB) &&
                    this.MarkStoreItemIDUnavailable(_[_]),
                  _ == _._ && (_ = _.GetEResult()));
            });
          } catch (_) {
            const _ = (0, _._)(_);
            return (
              console.error(
                "CStoreItemCache::InternalHandleLoadStoreItems failed: " +
                  _.strErrorMsg,
                _,
              ),
              _.forEach((_) => this.MarkStoreItemIDUnavailable(_)),
              _._
            );
          }
          return _;
        }
        GetMapForType(_) {
          let _;
          switch (_) {
            case _._._:
              _ = this.m_mapApps;
              break;
            case _._._:
              _ = this.m_mapBundles;
              break;
            case _._._:
              _ = this.m_mapPackages;
              break;
            case _._._:
              _ = this.m_mapTags;
              break;
            case _._._:
              _ = this.m_mapCreators;
              break;
            case _._._:
              _ = this.m_mapHubCategories;
              break;
            default:
              console.error("Invalid map type requested", _);
          }
          return _;
        }
        BHasStoreItem(_, _, _) {
          let _ = this.GetMapForType(_);
          return Boolean(
            _ && _.has(_) && (!_ || _.get(_).BContainDataRequest(_)),
          );
        }
        GetStoreItem(_, _) {
          if (_ == _._._ || _ == _._._) return;
          const _ = this.GetMapForType(_);
          return __webpack_require__?.get(_);
        }
        GetStoreItemWithLegacyVisibilityCheck(_, _) {
          const _ = this.GetStoreItem(_, _);
          return _ &&
            (this.m_bReturnUnavailableItems || __webpack_require__.BIsVisible())
            ? _
            : void 0;
        }
        GetStoreItemDataRequest(_, _) {
          return this.GetMapForType(_)?.get(_)?.GetDataRequest() || null;
        }
        BHasApp(_, _) {
          return this.BHasStoreItem(_, _._._, _);
        }
        GetApp(_) {
          return this.GetStoreItem(_, _._._);
        }
        BHasPackage(_, _) {
          return this.BHasStoreItem(_, _._._, _);
        }
        GetPackage(_) {
          return this.GetStoreItem(_, _._._);
        }
        BHasBundle(_, _) {
          return this.BHasStoreItem(_, _._._, _);
        }
        GetBundle(_) {
          return this.GetStoreItem(_, _._._);
        }
        BHasTag(_, _) {
          return this.BHasStoreItem(_, _._._, _);
        }
        GetTag(_) {
          return this.GetStoreItem(_, _._._);
        }
        BHasCreator(_, _) {
          return this.BHasStoreItem(_, _._._, _);
        }
        GetCreator(_) {
          return this.GetStoreItem(_, _._._);
        }
        BHasHubCategory(_, _) {
          return this.BHasStoreItem(_, _._._, _);
        }
        GetHubCategory(_) {
          return this.GetStoreItem(_, _._._);
        }
        BIsStoreItemMissing(_, _) {
          switch (_) {
            case _._._:
              return this.BIsAppMissing(_);
            case _._._:
              return this.BIsPackageMissing(_);
            case _._._:
              return this.BIsBundleMissing(_);
            case _._._:
              return this.BIsTagMissing(_);
            case _._._:
              return this.BIsCreatorMissing(_);
            case _._._:
              return this.BIsHubCategoryMissing(_);
            default:
              return console.error("BStoreItemMissing invalid type", _), !0;
          }
        }
        BIsAppMissing(_) {
          return this.m_setUnavailableApps.has(_);
        }
        BIsPackageMissing(_) {
          return this.m_setUnavailablePackages.has(_);
        }
        BIsBundleMissing(_) {
          return this.m_setUnavailableBundles.has(_);
        }
        BIsTagMissing(_) {
          return this.m_setUnavailableTags.has(_);
        }
        BIsCreatorMissing(_) {
          return this.m_setUnavailableCreators.has(_);
        }
        BIsHubCategoryMissing(_) {
          return this.m_setUnavailableHubCategories.has(_);
        }
        BIsStoreItemUnavailableDueToCountryRestriction(_, _) {
          switch (_) {
            case _._._:
              return this.BIsAppUnavailableDueToCountryRestriction(_);
            case _._._:
              return this.BIsPackageUnavailableDueToCountryRestriction(_);
            case _._._:
              return this.BIsBundleUnavailableDueToCountryRestriction(_);
            case _._._:
            case _._._:
            case _._._:
              return (
                console.error(
                  "BIsStoreItemUnavailableDueToCountryRestriction - tags, creators or categories don't have country restrictions. type: ",
                  _,
                ),
                !0
              );
            default:
              return console.error("BStoreItemMissing invalid type", _), !0;
          }
        }
        BIsAppUnavailableDueToCountryRestriction(_) {
          return this.m_setUnavailableDueToCountryRestrictionApps.has(_);
        }
        BIsPackageUnavailableDueToCountryRestriction(_) {
          return this.m_setUnavailableDueToCountryRestrictionPackages.has(_);
        }
        BIsBundleUnavailableDueToCountryRestriction(_) {
          return this.m_setUnavailableDueToCountryRestrictionBundles.has(_);
        }
        ReadResults(_, _) {
          let _ = [];
          for (const _ of _) __webpack_require__.push(this.ReadItem(_, _));
          return _;
        }
        ReadItem(_, _) {
          const _ = _.item_type();
          let _ = null;
          if (void 0 === _)
            return (
              console.warn(`Failed to load item data: ${_.success()}`), null
            );
          switch (_) {
            case _._._:
              _ = this.m_mapApps;
              break;
            case _._._:
              _ = this.m_mapPackages;
              break;
            case _._._:
              _ = this.m_mapBundles;
              break;
            case _._._:
              _ = this.m_mapTags;
              break;
            case _._._:
              _ = this.m_mapCreators;
              break;
            case _._._:
              _ = this.m_mapHubCategories;
              break;
            default:
              return console.error(`Invalid item type: ${_}`), null;
          }
          let _ = _.get(_._());
          if (
            (_ ? _.MergeData(_, _) : ((_ = new _._(_, _)), _.set(_._(), _)),
            _.include_included_items && _.included_items(!1))
          ) {
            for (const _ of _.included_items().included_apps())
              this.ReadItem(_, _.included_item_data_request);
            for (const _ of _.included_items().included_packages())
              this.ReadItem(_, _.included_item_data_request);
          }
          return _;
        }
      }
      (0, _._)([_._], _.prototype, "ReadItem", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      function _(_, _) {
        "undefined" != typeof window && (window[_] = _);
      }
      __webpack_require__._(module_exports, {
        _: () => _,
      });
    },
  },
]);
