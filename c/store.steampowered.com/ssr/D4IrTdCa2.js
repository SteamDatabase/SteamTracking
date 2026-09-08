function _(_, _) {
  return _
    ? _
      ? {
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
        }
      : _
    : _;
}
async function _(_, _) {
  let _ = await _,
    _ = await _;
  return _ == 1 ? _ : _;
}
var _ = class _ {
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
      _.sm_instance ||
        ((_.sm_instance = new _()), _(`StoreItemCache`, _.sm_instance)),
      _.sm_instance
    );
  }
  static Initialize(_, _) {
    let _ = _.Get();
    return (
      _(
        !_.m_bInitialized,
        `CStoreItemCache was already initialized; initialize it only once.`,
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
    return this.QueueStoreItemRequest(_, 0, _);
  }
  async QueuePackageRequest(_, _) {
    return this.QueueStoreItemRequest(_, 1, _);
  }
  async QueueBundleRequest(_, _) {
    return this.QueueStoreItemRequest(_, 2, _);
  }
  async QueueTagRequest(_, _) {
    return this.QueueStoreItemRequest(_, 4, _);
  }
  async QueueCreatorRequest(_, _) {
    return this.QueueStoreItemRequest(_, 5, _);
  }
  async QueueHubCategoryRequest(_, _) {
    return this.QueueStoreItemRequest(_, 6, _);
  }
  static ValidateDataRequest(_) {
    let _ = [
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
    for (let _ of _) if (_ !== !0 && _ !== void 0) return !1;
    return !0;
  }
  async QueueMultipleAppRequests(_, _) {
    if (!_ || _.length == 0) return 1;
    let _ = (
      await Promise.all(_.map((_) => this.QueueStoreItemRequest(_, 0, _)))
    ).filter((_) => _ != 1);
    return _.length > 0 ? _[0] : 1;
  }
  async QueueMultiplePackageRequests(_, _) {
    if (!_ || _.length == 0) return 1;
    let _ = (
      await Promise.all(_.map((_) => this.QueueStoreItemRequest(_, 1, _)))
    ).filter((_) => _ != 1);
    return _.length > 0 ? _[0] : 1;
  }
  async QueueMultipleBundleRequests(_, _) {
    if (!_ || _.length == 0) return 1;
    let _ = (
      await Promise.all(_.map((_) => this.QueueStoreItemRequest(_, 2, _)))
    ).filter((_) => _ != 1);
    return _.length > 0 ? _[0] : 1;
  }
  async QueueMultipleTagRequests(_, _) {
    if (!_ || _.length == 0) return 1;
    let _ = (
      await Promise.all(_.map((_) => this.QueueStoreItemRequest(_, 4, _)))
    ).filter((_) => _ != 1);
    return _.length > 0 ? _[0] : 1;
  }
  async QueueMultipleCreatorRequests(_, _) {
    if (!_ || _.length == 0) return 1;
    let _ = (
      await Promise.all(_.map((_) => this.QueueStoreItemRequest(_, 5, _)))
    ).filter((_) => _ != 1);
    return _.length > 0 ? _[0] : 1;
  }
  async QueueMultipleHubCategoryRequests(_, _) {
    if (!_ || _.length == 0) return 1;
    let _ = (
      await Promise.all(_.map((_) => this.QueueStoreItemRequest(_, 6, _)))
    ).filter((_) => _ != 1);
    return _.length > 0 ? _[0] : 1;
  }
  async QueueMultipleStoreItemRequests(_, _, _) {
    if (!_ || _.length == 0) return 1;
    let _ = (
      await Promise.all(_.map((_, _) => this.QueueStoreItemRequest(_, _[_], _)))
    ).filter((_) => _ != 1);
    return _.length > 0 ? _[0] : 1;
  }
  async QueueStoreItemRequest(_, _, _) {
    if (
      (_(
        _.ValidateDataRequest(_),
        `Invalid Data Request: ` + JSON.stringify(_),
      ),
      typeof _ == `string` && (_ = parseInt(_)),
      this.m_bActivelyResettingCache)
    )
      return (
        console.log(
          `Rejecting store item request due to currently clearing the cache`,
        ),
        this.k_AlreadyResolvedBusy
      );
    if (!_)
      return (
        _(!_, `unexpected id ${_} of zero or undefined for type ${_}`),
        this.k_AlreadyResolvedInvalid
      );
    let _ = this.GetPreviousSupersetLoadPromise(_, _, _);
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
      case 0:
        this.m_setPendingAppInfo.add(_);
        break;
      case 2:
        this.m_setPendingBundleInfo.add(_);
        break;
      case 1:
        this.m_setPendingPackageInfo.add(_);
        break;
      case 4:
        this.m_setPendingTagInfo.add(_);
        break;
      case 5:
        this.m_setPendingCreatorInfo.add(_);
        break;
      case 6:
        this.m_setPendingHubCategoryInfo.add(_);
        break;
      default:
        _(!1, `Unexpected Type ${_}`);
    }
    let _ = this.m_PendingInfoPromise;
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
    if (this.m_PendingInfoResolve === void 0) return;
    let _ = this.m_PendingInfoResolve,
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
      case 0:
        _ = this.m_mapAppsInFlight.get(_);
        break;
      case 1:
        _ = this.m_mapPackageInFlight.get(_);
        break;
      case 2:
        _ = this.m_mapBundleInFlight.get(_);
        break;
      case 4:
        _ = this.m_mapTagsInFlight.get(_);
        break;
      case 5:
        _ = this.m_mapCreatorsInFlight.get(_);
        break;
      case 6:
        _ = this.m_mapHubCategoriesInFlight.get(_);
        break;
    }
    return _ && _.BDataRequestContainsOtherDataRequest(_.dataRequest, _)
      ? _.promise
      : null;
  }
  async HintLoadStoreItems(_, _, _, _, _, _, _) {
    let _ = null,
      _ = new Promise((_) => (_ = _)),
      _ = [],
      _ = [];
    (_ || []).forEach((_) => {
      let _ = this.GetPreviousSupersetLoadPromise(_, 0, _);
      if (_) _.push(_);
      else {
        _.push(
          _.fromObject({
            appid: _,
          }),
        );
        let _ = _(this.GetStoreItemDataRequest(_, 0), _),
          _ = this.m_mapAppsInFlight.get(_);
        (_ = _(_?.dataRequest, _)),
          _ && _.push(_.promise),
          this.m_mapAppsInFlight.set(_, {
            promise: _ ? _(_.promise, _) : _,
            dataRequest: _,
          });
      }
    }),
      (_ || []).forEach((_) => {
        let _ = this.GetPreviousSupersetLoadPromise(_, 1, _);
        if (_) _.push(_);
        else {
          _.push(
            _.fromObject({
              packageid: _,
            }),
          );
          let _ = _(this.GetStoreItemDataRequest(_, 1), _),
            _ = this.m_mapPackageInFlight.get(_);
          (_ = _(_?.dataRequest, _)),
            _ && _.push(_.promise),
            this.m_mapPackageInFlight.set(_, {
              promise: _ ? _(_.promise, _) : _,
              dataRequest: _,
            });
        }
      }),
      (_ || []).forEach((_) => {
        let _ = this.GetPreviousSupersetLoadPromise(_, 2, _);
        if (_) _.push(_);
        else {
          _.push(
            _.fromObject({
              bundleid: _,
            }),
          );
          let _ = _(this.GetStoreItemDataRequest(_, 2), _),
            _ = this.m_mapBundleInFlight.get(_);
          (_ = _(_?.dataRequest, _)),
            _ && _.push(_.promise),
            this.m_mapBundleInFlight.set(_, {
              promise: _ ? _(_.promise, _) : _,
              dataRequest: _,
            });
        }
      }),
      (_ || []).forEach((_) => {
        let _ = this.GetPreviousSupersetLoadPromise(_, 4, _);
        if (_) _.push(_);
        else {
          _.push(
            _.fromObject({
              tagid: _,
            }),
          );
          let _ = _(this.GetStoreItemDataRequest(_, 4), _),
            _ = this.m_mapTagsInFlight.get(_);
          (_ = _(_?.dataRequest, _)),
            _ && _.push(_.promise),
            this.m_mapTagsInFlight.set(_, {
              promise: _ ? _(_.promise, _) : _,
              dataRequest: _,
            });
        }
      }),
      (_ || []).forEach((_) => {
        let _ = this.GetPreviousSupersetLoadPromise(_, 5, _);
        if (_) _.push(_);
        else {
          _.push(
            _.fromObject({
              creatorid: _,
            }),
          );
          let _ = _(this.GetStoreItemDataRequest(_, 5), _),
            _ = this.m_mapCreatorsInFlight.get(_);
          (_ = _(_?.dataRequest, _)),
            _ && _.push(_.promise),
            this.m_mapCreatorsInFlight.set(_, {
              promise: _ ? _(_.promise, _) : _,
              dataRequest: _,
            });
        }
      }),
      (_ || []).forEach((_) => {
        let _ = this.GetPreviousSupersetLoadPromise(_, 6, _);
        if (_) _.push(_);
        else {
          _.push(
            _.fromObject({
              hubcategoryid: _,
            }),
          );
          let _ = _(this.GetStoreItemDataRequest(_, 6), _),
            _ = this.m_mapHubCategoriesInFlight.get(_);
          (_ = _(_?.dataRequest, _)),
            _ && _.push(_.promise),
            this.m_mapHubCategoriesInFlight.set(_, {
              promise: _ ? _(_.promise, _) : _,
              dataRequest: _,
            });
        }
      });
    let _ = 1;
    if (
      (_.length > 0 && (_ = await this.InternalHandleLoadStoreItems(_, _)),
      _(_),
      _.length > 0)
    ) {
      let _ = await Promise.all(_);
      for (let _ of _) _ != 1 && _ == 1 && (_ = _);
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
                  (this.m_setUnavailableHubCategories.add(_.hubcategoryid()),
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
        return _ == _ ? 0 : _ - _;
      }),
      _
    );
  }
  GetServiceTransport() {
    return (
      (this.m_serviceTransport ||=
        (console.warn(`Service transport not initialized for StoreItemCache`),
        new _(_.WEBAPI_BASE_URL).GetAnonymousServiceTransport())),
      this.m_serviceTransport
    );
  }
  async InternalHandleLoadStoreItems(_, _) {
    let _ = 1;
    (_ = this.SortStoreItems(_)),
      _.include_included_items &&
        (_ = {
          ..._,
          included_item_data_request: {
            ..._,
            include_included_items: !1,
          },
        });
    let _ = [];
    try {
      let _ = [];
      for (; _.length > 0; ) {
        let _ = _.splice(0, this.k_nMaxBatchSize);
        if ((_.push(_), this.m_bUsePartnerAPI)) {
          let _ = _.Init(_);
          _.Body().set_include_unpublished(!1);
          let _ = _.Body().getitems_request(!0);
          _.set_context(_(this.m_bUsePartnerAPI)),
            _.set_data_request(_.fromObject(_)),
            _.set_ids(_),
            _.push(_.GetItems(this.GetServiceTransport(), _));
        } else {
          let _ = _.Init(_);
          _(_, this.m_bUsePartnerAPI),
            _(_, _),
            _.Body().set_ids(_),
            _.push(_.GetItems(this.GetServiceTransport(), _));
        }
      }
      (await Promise.all(_)).forEach((_, _) => {
        _.GetEResult() == 1
          ? _.Body()
              .store_items()
              .forEach((_) => {
                let _ = _._(),
                  _ = _.item_type(),
                  _ = this.m_bReturnUnavailableItems && _.success() == 15,
                  _ = _.success() == 1 && !this.BIsStoreItemMissing(_, _);
                if (_ || _) this.ReadItem(_, _);
                else {
                  switch (_) {
                    case 0:
                      this.m_setUnavailableApps.add(_),
                        this.m_mapApps.delete(_);
                      break;
                    case 1:
                      this.m_setUnavailablePackages.add(_),
                        this.m_mapPackages.delete(_);
                      break;
                    case 2:
                      this.m_setUnavailableBundles.add(_),
                        this.m_mapBundles.delete(_);
                      break;
                    case 4:
                      this.m_setUnavailableTags.add(_),
                        this.m_mapTags.delete(_);
                      break;
                    case 5:
                      this.m_setUnavailableCreators.add(_),
                        this.m_mapCreators.delete(_);
                      break;
                    case 6:
                      this.m_setUnavailableHubCategories.add(_),
                        this.m_mapHubCategories.delete(_);
                      break;
                    default:
                      console.error(
                        `CStoreItemCache.InternalHandleLoadStoreItems unexpected item_type in response ` +
                          _ +
                          ` ` +
                          _,
                      );
                  }
                  if (_.unvailable_for_country_restriction())
                    switch (_) {
                      case 0:
                        this.m_setUnavailableDueToCountryRestrictionApps.add(_);
                        break;
                      case 1:
                        this.m_setUnavailableDueToCountryRestrictionPackages.add(
                          _,
                        );
                        break;
                      case 2:
                        this.m_setUnavailableDueToCountryRestrictionBundles.add(
                          _,
                        );
                        break;
                      case 4:
                      case 5:
                      case 6:
                        console.error(
                          `CStoreItemCache::InternalHandleLoadStoreItems - tags, creators or categories don't have country restrictions. eResult: ` +
                            _.GetEResult() +
                            ` message: ` +
                            _.Hdr().error_message(),
                          _(_),
                        );
                        break;
                    }
                }
              })
          : (console.warn(
              `CStoreItemCache::InternalHandleLoadStoreItems failed with eResult: ` +
                _.GetEResult() +
                ` message: ` +
                _.Hdr().error_message(),
              _(_),
            ),
            (_.Hdr().transport_error() == 1 || _.FROM_WEB) &&
              this.MarkStoreItemIDUnavailable(_[_]),
            _ == 1 && (_ = _.GetEResult()));
      });
    } catch (_) {
      let _ = _(_);
      return (
        console.error(
          `CStoreItemCache::InternalHandleLoadStoreItems failed: ` +
            _.strErrorMsg,
          _,
        ),
        _.forEach((_) => this.MarkStoreItemIDUnavailable(_)),
        79
      );
    }
    return _;
  }
  GetMapForType(_) {
    let _;
    switch (_) {
      case 0:
        _ = this.m_mapApps;
        break;
      case 2:
        _ = this.m_mapBundles;
        break;
      case 1:
        _ = this.m_mapPackages;
        break;
      case 4:
        _ = this.m_mapTags;
        break;
      case 5:
        _ = this.m_mapCreators;
        break;
      case 6:
        _ = this.m_mapHubCategories;
        break;
      default:
        console.error(`Invalid map type requested`, _);
    }
    return _;
  }
  BHasStoreItem(_, _, _) {
    let _ = this.GetMapForType(_);
    return !!(_ && _.has(_) && (!_ || _.get(_).BContainDataRequest(_)));
  }
  GetStoreItem(_, _) {
    if (!(_ == -1 || _ == 3)) return this.GetMapForType(_)?.get(_);
  }
  GetStoreItemWithLegacyVisibilityCheck(_, _) {
    let _ = this.GetStoreItem(_, _);
    return _ && (this.m_bReturnUnavailableItems || _.BIsVisible()) ? _ : void 0;
  }
  GetStoreItemDataRequest(_, _) {
    return this.GetMapForType(_)?.get(_)?.GetDataRequest() || null;
  }
  BHasApp(_, _) {
    return this.BHasStoreItem(_, 0, _);
  }
  GetApp(_) {
    return this.GetStoreItem(_, 0);
  }
  BHasPackage(_, _) {
    return this.BHasStoreItem(_, 1, _);
  }
  GetPackage(_) {
    return this.GetStoreItem(_, 1);
  }
  BHasBundle(_, _) {
    return this.BHasStoreItem(_, 2, _);
  }
  GetBundle(_) {
    return this.GetStoreItem(_, 2);
  }
  BHasTag(_, _) {
    return this.BHasStoreItem(_, 4, _);
  }
  GetTag(_) {
    return this.GetStoreItem(_, 4);
  }
  BHasCreator(_, _) {
    return this.BHasStoreItem(_, 5, _);
  }
  GetCreator(_) {
    return this.GetStoreItem(_, 5);
  }
  BHasHubCategory(_, _) {
    return this.BHasStoreItem(_, 6, _);
  }
  GetHubCategory(_) {
    return this.GetStoreItem(_, 6);
  }
  BIsStoreItemMissing(_, _) {
    switch (_) {
      case 0:
        return this.BIsAppMissing(_);
      case 1:
        return this.BIsPackageMissing(_);
      case 2:
        return this.BIsBundleMissing(_);
      case 4:
        return this.BIsTagMissing(_);
      case 5:
        return this.BIsCreatorMissing(_);
      case 6:
        return this.BIsHubCategoryMissing(_);
      default:
        return console.error(`BStoreItemMissing invalid type`, _), !0;
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
      case 0:
        return this.BIsAppUnavailableDueToCountryRestriction(_);
      case 1:
        return this.BIsPackageUnavailableDueToCountryRestriction(_);
      case 2:
        return this.BIsBundleUnavailableDueToCountryRestriction(_);
      case 4:
      case 5:
      case 6:
        return (
          console.error(
            `BIsStoreItemUnavailableDueToCountryRestriction - tags, creators or categories don't have country restrictions. type: `,
            _,
          ),
          !0
        );
      default:
        return console.error(`BStoreItemMissing invalid type`, _), !0;
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
    for (let _ of _) _.push(this.ReadItem(_, _));
    return _;
  }
  ReadItem(_, _) {
    let _ = _.item_type(),
      _ = null;
    if (_ === void 0)
      return console.warn(`Failed to load item data: ${_.success()}`), null;
    switch (_) {
      case 0:
        _ = this.m_mapApps;
        break;
      case 1:
        _ = this.m_mapPackages;
        break;
      case 2:
        _ = this.m_mapBundles;
        break;
      case 4:
        _ = this.m_mapTags;
        break;
      case 5:
        _ = this.m_mapCreators;
        break;
      case 6:
        _ = this.m_mapHubCategories;
        break;
      default:
        return console.error(`Invalid item type: ${_}`), null;
    }
    let _ = _.get(_._());
    if (
      (_ ? _.MergeData(_, _) : ((_ = new _(_, _)), _.set(_._(), _)),
      _.include_included_items && _.included_items(!1))
    ) {
      for (let _ of _.included_items().included_apps())
        this.ReadItem(_, _.included_item_data_request);
      for (let _ of _.included_items().included_packages())
        this.ReadItem(_, _.included_item_data_request);
    }
    return _;
  }
};
_([_], _.prototype, `ReadItem`, null);
var _ = _(_());
_();
var _ = class {
  clanid = void 0;
  appid = 0;
  can_edit = !1;
  owns_app = !1;
  follows_app = !1;
  support_user = !1;
  valve_admin = !1;
  limited_user = !1;
  event_ignored = [];
  event_followed = [];
  event_followed_flags = [];
  constructor(_) {
    _(this), (this.clanid = _);
  }
};
_([_], _.prototype, `clanid`, void 0),
  _([_], _.prototype, `appid`, void 0),
  _([_], _.prototype, `can_edit`, void 0),
  _([_], _.prototype, `owns_app`, void 0),
  _([_], _.prototype, `follows_app`, void 0),
  _([_], _.prototype, `support_user`, void 0),
  _([_], _.prototype, `valve_admin`, void 0),
  _([_], _.prototype, `limited_user`, void 0),
  _([_], _.prototype, `event_ignored`, void 0),
  _([_], _.prototype, `event_followed`, void 0),
  _([_], _.prototype, `event_followed_flags`, void 0);
var _ = class _ {
  constructor() {
    _(this);
  }
  m_mapClanToUserPermissions = new Map();
  m_mapAnnounceGIDToVote = new Map();
  m_cm = void 0;
  static s_EventUserStore;
  m_bIsPresentationMode = _();
  static Get() {
    return (
      _(!!_.s_EventUserStore, `Have not yet initialized global EventUserStore`),
      _.s_EventUserStore
    );
  }
  static IsInitialized() {
    return !!_.s_EventUserStore;
  }
  static async InitGlobal(_) {
    if (!_.s_EventUserStore) {
      let _ = new _();
      await _.Init(_), (_.s_EventUserStore = _);
    }
  }
  static BIsInited() {
    return !!_.s_EventUserStore;
  }
  async Init(_) {
    this.m_cm = _;
    let _ = _(`partnereventpermissions`, `application_config`);
    this.ValidateStoreDefault(_) &&
      _(() => {
        _.forEach((_) => {
          let _ = new _(_.clanid),
            _ = {
              result: _,
              promise: _.RemapToPromise(_),
              bLoaded: !0,
            };
          this.CopyFromResponseToTrack(_, _),
            this.m_mapClanToUserPermissions.set(_.clanid, _);
        });
      });
    let _ = _(`uservotes`, `application_config`);
    _ &&
      _(() => {
        _.forEach((_) => {
          let _ = _.voted_up ? !0 : !_.voted_down && void 0;
          this.m_mapAnnounceGIDToVote.set(_.clanAnnouncementGID, _);
        });
      });
  }
  ValidateStoreDefault(_) {
    let _ = _;
    return _ && Array.isArray(_) && _.length > 0 && typeof _[0] == `object`
      ? typeof _[0].clanid == `number` && typeof _[0].appid == `number`
      : !1;
  }
  static async RemapToPromise(_) {
    return _;
  }
  BIsUserLoggedIn() {
    return _.logged_in;
  }
  BIsPartnerEventPermissionsLoaded(_) {
    return (
      this.m_mapClanToUserPermissions.has(_) &&
      this.m_mapClanToUserPermissions.get(_).bLoaded
    );
  }
  GetPartnerEventPermissions(_) {
    if (!_ || !_.BIsValid()) return new _(0);
    let _ = _.GetAccountID();
    return (
      this.m_mapClanToUserPermissions.has(_) ||
        this.LoadSingleAppEventPermissions(_),
      this.m_mapClanToUserPermissions.get(_).result
    );
  }
  async LoadSingleAppEventPermissions(_) {
    let _ = _.GetAccountID(),
      _ = this.m_mapClanToUserPermissions.get(_);
    return (
      _ ||
        ((_ = {
          promise: this.InternalLoadSingleAppEventPermissions(_),
          result: new _(_),
          bLoaded: !1,
        }),
        this.m_mapClanToUserPermissions.set(_, _)),
      _.promise
    );
  }
  CopyFromResponseToTrack(_, _) {
    (_.result.appid = _.appid ?? 0),
      (_.result.can_edit = !!_.can_edit),
      (_.result.clanid = _.appid),
      (_.result.event_followed = _.event_followed ?? []),
      (_.result.event_ignored = _.event_ignored ?? []),
      (_.result.event_followed_flags = _.event_followed_flags ?? []),
      (_.result.follows_app = !!_.follows_app),
      (_.result.owns_app = !!_.owns_app),
      (_.result.limited_user = !!_.limited_user),
      (_.support_user || _.valve_admin) && this.m_bIsPresentationMode
        ? ((_.result.can_edit = !0),
          (_.result.support_user = !1),
          (_.result.valve_admin = !1))
        : ((_.result.support_user = !!_.support_user),
          (_.result.valve_admin = !!_.valve_admin)),
      (_.bLoaded = !0);
  }
  async InternalLoadSingleAppEventPermissions(_) {
    let _ = null,
      _ = _.GetAccountID(),
      _ = !_.logged_in;
    if (!this.m_mapClanToUserPermissions.has(_)) {
      let _ = new _(_.GetAccountID());
      this.m_mapClanToUserPermissions.set(_, {
        result: _,
        promise: _.RemapToPromise(_),
        bLoaded: !1,
      });
    }
    try {
      if (_.logged_in) {
        let _ =
            _.COMMUNITY_BASE_URL +
            `gid/` +
            _.ConvertTo64BitString() +
            `/ajaxgetpartnereventpermissions/`,
          _ = {};
        if (
          (_() == `partnerweb`
            ? ((_ =
                _.PARTNER_BASE_URL +
                `partnerevents/ajaxgetpartnereventpermissions`),
              (_ = {
                clanaccountid: _.GetAccountID(),
              }))
            : _() == `store` &&
              ((_ = _.STORE_BASE_URL + `events/ajaxgetpartnereventpermissions`),
              (_ = {
                clanaccountid: _.GetAccountID(),
              })),
          (_ = await _.default.get(_, {
            params: _,
            withCredentials: !0,
          })),
          !_ || _.data.success != 1)
        )
          console.error(`Partner Events Failed Load:` + _(_?.data).strErrorMsg),
            (_ = !0);
        else {
          let _ = this.m_mapClanToUserPermissions.get(_);
          _ && this.CopyFromResponseToTrack(_, _.data);
        }
      }
    } catch (_) {
      if (
        ((_ = _.response),
        (_ = !0),
        !(
          _ &&
          _.response !== void 0 &&
          _.response.data !== void 0 &&
          _.response.data.success !== void 0 &&
          _.response.data.success == 21
        ))
      ) {
        let _ = _(_);
        console.error(
          `InternalLoadSingleAppEventPermissions account: ` +
            _ +
            `: ` +
            _.strErrorMsg,
          _,
        );
      }
    } finally {
      _ &&
        _(() => {
          let _ = this.m_mapClanToUserPermissions.get(_);
          (_.result.appid = _?.data.appid ?? 0),
            (_.result.can_edit = !1),
            (_.result.clanid = _ && _.data ? _.data.clanid : 0),
            (_.result.event_followed = []),
            (_.result.event_ignored = []),
            (_.result.event_followed_flags = []),
            (_.result.follows_app = !1),
            (_.result.owns_app = !1),
            (_.result.support_user = !1),
            (_.result.valve_admin = !1),
            (_.result.limited_user = !1),
            (_.bLoaded = !0);
        });
    }
    return this.m_mapClanToUserPermissions.get(_).result;
  }
  async Vote(_, _, _) {
    if (!_ || !_.AnnouncementGID) return !1;
    let _ = this.m_mapAnnounceGIDToVote.get(_.AnnouncementGID);
    if (_ === _) return !0;
    if (
      (this.m_mapAnnounceGIDToVote.set(_.AnnouncementGID, _),
      _(() => {
        _ === !0 && _.UpdateVoteCount(`up`, -1),
          _ === !1 && _.UpdateVoteCount(`down`, -1),
          _ === !0 && _.UpdateVoteCount(`up`, 1),
          _ === !1 && _.UpdateVoteCount(`down`, 1);
      }),
      this.m_cm)
    ) {
      let _ = _.Init(_);
      return (
        _.Body().set_announcementid(_.AnnouncementGID),
        _.Body().set_vote_up(!!_),
        _.Body().set_clan_accountid(_.clanSteamID.GetAccountID()),
        (
          await _.RateClanAnnouncement(this.m_cm.GetServiceTransport(), _)
        ).GetEResult() == 1
      );
    } else {
      let _ = _(),
        _ =
          _ == `community` || _ == `steamtv`
            ? _.COMMUNITY_BASE_URL +
              `gid/` +
              _.clanSteamID.ConvertTo64BitString() +
              `/announcements/rate/` +
              _.AnnouncementGID
            : _.STORE_BASE_URL + `updated/ajaxrateupdate/` + _.AnnouncementGID,
        _ = new URLSearchParams();
      _.append(`sessionid`, _()),
        _.append(`voteup`, _ ? `1` : `0`),
        _.append(`clanid`, `` + _.clanSteamID.GetAccountID()),
        _.append(`ajax`, `1`);
      let _ = {
        withCredentials: !0,
        cancelToken: _.token,
      };
      return (await _.default.post(_, _, _)).data.success == 1;
    }
  }
  async LoadMyVote(_, _) {
    if (_?.AnnouncementGID) {
      if (this.m_mapAnnounceGIDToVote.has(_.AnnouncementGID))
        return !!this.m_mapAnnounceGIDToVote.get(_.AnnouncementGID);
      let _;
      if (this.m_cm) {
        let _ = _.Init(_);
        _.Body().set_announcementid(_.AnnouncementGID);
        let _ = await _.GetClanAnnouncementVoteForUser(
          this.m_cm.GetServiceTransport(),
          _,
        );
        _.GetEResult() == 1 &&
          (_ = _.Body().voted_up() ? !0 : !_.Body().voted_down() && void 0);
      } else {
        let _ = _() == `store`,
          _ = _
            ? _.STORE_BASE_URL + `actions/ajaxgetmyannouncementvote`
            : _.COMMUNITY_BASE_URL +
              `gid/` +
              _.clanSteamID.ConvertTo64BitString() +
              `/announcements/ajaxgetmyvote/` +
              _.AnnouncementGID,
          _ = {
            gid: _ ? _.AnnouncementGID : void 0,
          },
          _ = await _.default.get(_, {
            withCredentials: !0,
            cancelToken: _.token,
            params: _,
          });
        _ = _.data.voted_up ? !0 : !_.data.voted_down && void 0;
      }
      return this.m_mapAnnounceGIDToVote.set(_.AnnouncementGID, _), _;
    }
  }
  SetVote(_, _) {
    this.m_mapAnnounceGIDToVote.set(_, _);
  }
  BHasMyVote(_) {
    return _.AnnouncementGID
      ? this.m_mapAnnounceGIDToVote.has(_.AnnouncementGID)
      : !1;
  }
  GetPreviouslyLoadedVote(_) {
    return _.AnnouncementGID
      ? this.m_mapAnnounceGIDToVote.get(_.AnnouncementGID)
      : void 0;
  }
  BShowEmailEditorTab(_) {
    if (_.BHasEmailEnabled() || _.clanSteamID.GetAccountID() == _()) return !0;
    let _ = this.GetPartnerEventPermissions(_.clanSteamID);
    return (_.IS_OGG || _.IS_VALVE_GROUP) && _.valve_admin;
  }
};
_([_], _.prototype, `m_mapClanToUserPermissions`, void 0),
  _([_], _.prototype, `m_mapAnnounceGIDToVote`, void 0),
  _([_], _.prototype, `CopyFromResponseToTrack`, null);
var _ = new WeakSet();
function _(_ = _) {
  if (typeof window > `u` || _.has(_)) return;
  let _ = _(`groupvanityinfo`, `application_config`);
  (_ === void 0 && document.readyState != `complete`) ||
    (_.add(_), _(_) && _(_, _));
}
function _(_) {
  let _ = _;
  return _ && Array.isArray(_) && _.length > 0 && typeof _[0] == `object`
    ? typeof _[0].clanAccountID == `number` &&
        (typeof _[0].appid == `number` || typeof _[0].vanity_url == `string`)
    : !1;
}
function _(_) {
  return typeof _ == `string` ? parseInt(_) : _;
}
function _(_) {
  return typeof _ == `string` ? Number.parseInt(_) : _;
}
var _ = new (class {
  m_queryClient = _;
  m_boxCacheVersion = _.box(0);
  m_bWatchingCache = !1;
  m_bBumpScheduled = !1;
  Init() {
    this.LazyInit();
  }
  LazyInit() {
    _(this.m_queryClient),
      this.m_bWatchingCache ||
        ((this.m_bWatchingCache = !0),
        this.m_queryClient.getQueryCache().subscribe((_) => {
          (_?.type != `added` &&
            _?.type != `updated` &&
            _?.type != `removed`) ||
            (_(_.query?.queryKey) && this.ScheduleCacheVersionBump());
        }));
  }
  ScheduleCacheVersionBump() {
    this.m_bBumpScheduled ||
      ((this.m_bBumpScheduled = !0),
      queueMicrotask(() => {
        (this.m_bBumpScheduled = !1),
          _(() => this.m_boxCacheVersion.set(this.m_boxCacheVersion.get() + 1));
      }));
  }
  ReadCache() {
    return this.LazyInit(), this.m_boxCacheVersion.get(), this.m_queryClient;
  }
  AddGroupVanities(_) {
    this.LazyInit(), _(_) && _(this.m_queryClient, _);
  }
  BHasClanInfoLoaded(_) {
    return (
      _(_.BIsValid(), `Clan SteamID is not valid when ClanInfo`),
      _(
        _.BIsClanAccount(),
        `Clan SteamID is not a clan account id when requesting clan info `,
      ),
      this.BHasClanInfoLoadedByAccountID(_.GetAccountID())
    );
  }
  BHasClanInfoLoadedByAccountID(_) {
    return !!_(_(_), this.ReadCache());
  }
  RegisterClanData(_) {
    this.LazyInit(), _(this.m_queryClient, _);
  }
  async LoadOGGClanInfoForAppID(_) {
    return (
      this.LazyInit(),
      (_ = _(_)),
      _(_ != 0, `LoadOGGClanInfoForAppID called with appid of zero`),
      _ == 0 ? null : _(_, this.m_queryClient).catch(() => null)
    );
  }
  async LoadOGGClanInfoForIdentifier(_) {
    return this.LazyInit(), _(_, this.m_queryClient, `store`);
  }
  async LoadOGGClanInfoForGroupVanity(_) {
    return this.LazyInit(), _(_, this.m_queryClient, `group`);
  }
  async LoadClanInfoForClanSteamID(_) {
    return this.LoadClanInfoForClanAccountID(_.GetAccountID());
  }
  async LoadClanInfoForClanAccountID(_) {
    return this.LazyInit(), _(_(_), this.m_queryClient);
  }
  GetOGGClanInfo(_) {
    let _ = this.ReadCache();
    return typeof _ == `string` ? _(_, _) : _(_, _);
  }
  GetClanSteamIDForAppID(_) {
    let _ = _(_(_), this.ReadCache());
    return _ ? _.InitFromClanID(_.clanAccountID) : void 0;
  }
  GetClanVanityForAppID(_) {
    return _(_(_), this.ReadCache())?.vanity_url;
  }
  GetClanVanityForClanSteamID(_) {
    return _(_.GetAccountID(), this.ReadCache())?.vanity_url;
  }
  HasLoadedClanAccountID(_) {
    return this.BHasClanInfoLoadedByAccountID(_);
  }
  GetClanMemberCount(_) {
    return _(_(_), this.ReadCache())?.member_count ?? 0;
  }
  GetClanInfoByClanAccountID(_) {
    return (
      _(
        !!_,
        `Unepxected clanid when requesting information. GetClanInfoByClanAccountID `,
      ),
      _(_(_), this.ReadCache())
    );
  }
  GetCreatorStoreURL(_) {
    let _ = _.GetCreatorHome(_);
    if (_) return _.GetCreatorHomeURL(`developer`);
    let _ = this.GetClanInfoByClanAccountID(_.GetAccountID());
    return (
      _.COMMUNITY_BASE_URL +
      (_.vanity_url
        ? `groups/` + _.vanity_url
        : `gid/` + _.ConvertTo64BitString())
    );
  }
})();
_(`g_ClanStore`, _);
function _() {
  let _ = _();
  return _(_), _;
}
function _(_) {
  _();
  let { data: _, isPending: _ } = _(_ ? _(_) : void 0);
  return [!!_ && _, _ ?? void 0];
}
export { _, _, _ };
