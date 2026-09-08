"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [46366],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
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
        m_setAlreadyAdded = new Set();
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
              if (1 !== _?.GetIncludedAppIDs()?.length) {
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
        const _ = _._.Get();
        if (
          _.only_current_platform &&
          __webpack_require__.BHasPlatformPreferenceSet()
        ) {
          if (
            !(
              (_.GetPlatforms()?.windows &&
                __webpack_require__.BIsPreferredPlatform("win")) ||
              (_.GetPlatforms()?.mac &&
                __webpack_require__.BIsPreferredPlatform("mac")) ||
              (_.GetPlatforms()?.steamos_linux &&
                __webpack_require__.BIsPreferredPlatform("linux"))
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
          : _.GetAllCreatorClanIDs()?.some((_) =>
                __webpack_require__.BIsIgnoringCurator(_),
              )
            ? _._.k_RejectCreatorClan
            : _._.k_NotRejected;
      }
      function _(_, _) {
        if (_.localized) {
          const _ = (0, _.sfN)(_._.LANGUAGE);
          if (!_.GetAllLanguagesWithSomeSupport()?.includes(_))
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
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      var _ = __webpack_require__("chunkid");
      class _ {
        m_HomeView = void 0;
        BHasHomeView() {
          return Boolean(this.m_HomeView);
        }
        GetHomeView() {
          return this.m_HomeView?.home;
        }
        static s_globalSingletonStore;
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
                ..._?.all,
                ..._?.maincap,
              })
            : (this.m_HomeView = {
                home: {
                  ..._?.all,
                  ..._?.maincap,
                },
              });
        }
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
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
        _ = __webpack_require__("chunkid");
      const _ = 1;
      function _(_) {
        _.list_jsondata && "string" == typeof _.list_jsondata
          ? (_.list_jsondata = JSON.parse(_.list_jsondata))
          : ((0, _._)(
              !_.list_jsondata,
              "Found unexpected ListDetails_t.list_jsondata type: " +
                typeof _.list_jsondata,
            ),
            (_.list_jsondata = {}));
      }
      const _ = "0";
      function _(_, _) {
        (_.localized_flat_title = (0, _._)([], _.bP9, null)),
          (_.localized_flat_blurb = (0, _._)([], _.bP9, null)),
          (_.localized_flat_link = (0, _._)([], _.bP9, null)),
          _.title !== _ && (_.localized_flat_title[_] = _.title),
          _.blurb !== _ && (_.localized_flat_blurb[_] = _.blurb),
          _.link !== _ && (_.localized_flat_link[_] = _.link),
          _.title_localization.forEach((_) => {
            _.localized_string?.length > 0 &&
              (_.localized_flat_title[_.language] = _.localized_string);
          }),
          _.blurb_localization.forEach((_) => {
            _.localized_string?.length > 0 &&
              (_.localized_flat_blurb[_.language] = _.localized_string);
          }),
          _.link_localization.forEach((_) => {
            _.localized_string?.length > 0 &&
              (_.localized_flat_link[_.language] = _.localized_string);
          });
      }
      class _ {
        m_mapList = new Map();
        m_mapEventGIDToLists = new Map();
        m_mapListIDToClanAccount = new Map();
        GetListDetails(_) {
          return this.m_mapList.get(_);
        }
        GetAllSaleCurationLists(_) {
          return this.m_mapEventGIDToLists.get(_) || [];
        }
        GetClanAccountFromListID(_) {
          return this.m_mapListIDToClanAccount.get(_);
        }
        async LoadListDetails(_, _, _) {
          if (this.m_mapList.has(_)) return this.m_mapList.get(_);
          const _ =
              _._.STORE_BASE_URL +
              "curator/" +
              _.GetAccountID() +
              "/admin/ajaxgetlistdetails",
            _ = {
              listid: _,
            };
          try {
            const _ = await _().get(_, {
              params: _,
              cancelToken: _?.token,
            });
            if (_?.data?.success == _._) {
              const _ = {
                ..._.data.list_details,
              };
              return (
                (0, _._)(_ == _?.listid, "Wanted" + _ + "but got" + _?.listid),
                _(_),
                _(_.data.curation_language, _),
                this.m_mapList.set(_, _),
                this.m_mapListIDToClanAccount.set(_, _.GetAccountID()),
                _
              );
            }
          } catch (_) {
            const _ = (0, _._)(_);
            console.error(
              "CCuratorListStore.LoadListDetails: error on load: " +
                _.strErrorMsg,
              _,
            );
          }
          return null;
        }
        async LoadMyFollowedSaleCurationLists(_, _, _) {
          if (
            !_._.logged_in ||
            (_._.Get().BIsLoaded() && 0 == _._.Get().GetFollowedCuratorCount())
          )
            return [];
          const _ = _._.STORE_BASE_URL + "curators/ajaxgetmycuratorsalelists",
            _ = {
              clan_account_id: _.GetAccountID(),
              clan_event_gid: _,
              origin: self.origin,
              curator_clan_account_followed: _._.Get().BIsLoaded()
                ? _._.Get().GetFollowedCuratorsAccountID().join(",")
                : void 0,
            };
          return this.InternalLoadSaleCuratorLists(
            _,
            _,
            "CCuratorListStore.LoadMyFollowedSaleCurationLists",
            _,
            _,
            _,
          );
        }
        async LoadAllSaleCurationLists(_, _, _) {
          if (this.m_mapEventGIDToLists.has(_))
            return this.m_mapEventGIDToLists.get(_);
          const _ = _._.STORE_BASE_URL + "curators/ajaxfindcuratorlists",
            _ = {
              clan_account_id: _.GetAccountID(),
              clan_event_gid: _,
              origin: self.origin,
            };
          return this.InternalLoadSaleCuratorLists(
            _,
            _,
            "CCuratorListStore.LoadAllSaleCurationLists",
            _,
            _,
            _,
          );
        }
        async InternalLoadSaleCuratorLists(_, _, _, _, _, _) {
          try {
            const _ = await _().get(_, {
              params: _,
              cancelToken: _?.token,
            });
            if (_?.data?.success == _._) {
              const _ = new Array();
              return (
                (0, _._)(() => {
                  _.data.matches &&
                    _.data.matches.forEach((_) => {
                      _.multi_detail_lists.forEach((_) => {
                        this.m_mapListIDToClanAccount.set(
                          _.listid,
                          _.clan_account_id,
                        ),
                          _(_),
                          _(_.curation_language, _),
                          this.m_mapList.set(_.listid, _),
                          _.push(_);
                      });
                    }),
                    this.m_mapEventGIDToLists.set(_, _);
                }),
                _
              );
            }
          } catch (_) {
            const _ = (0, _._)(_);
            console.error(_ + ": error on load: " + _.strErrorMsg, _);
          }
          return [];
        }
        static s_Singleton;
        static Get() {
          return _.s_Singleton || (_.s_Singleton = new _()), _.s_Singleton;
        }
        constructor() {
          (0, _._)(this);
          let _ = (0, _._)("curatorlistdata", "application_config");
          this.ValidateStoreDefault(_) &&
            (0, _._)(() => {
              _.forEach((_) => {
                _.multi_detail_lists.forEach((_) => {
                  _(_),
                    _(_.curation_language, _),
                    this.m_mapList.set(_.listid, _);
                });
              });
            });
        }
        ValidateStoreDefault(_) {
          const _ = _;
          return _ &&
            Array.isArray(_) &&
            _.length > 0 &&
            "object" == typeof _[0]
            ? "number" == typeof _[0].curation_language &&
                _[0].multi_detail_lists &&
                Array.isArray(_[0].multi_detail_lists) &&
                "string" == typeof _[0].multi_detail_lists[0].listid &&
                "number" == typeof _[0].multi_detail_lists[0].list_type &&
                "number" == typeof _[0].multi_detail_lists[0].list_state
            : _ && Array.isArray(_) && 0 == _.length;
        }
      }
      function _(_, _) {
        const _ = (0, _._)();
        return (
          (0, _.useEffect)(() => {
            if (_.Get().GetListDetails(_) || !_) return;
            const _ = _().CancelToken.source();
            return (
              (async () => {
                const _ = await _.Get().LoadListDetails(_, _);
                if (!_.token.reason)
                  if (_?.apps?.length) {
                    const _ = [];
                    for (const _ of _.apps) {
                      const _ = _?.recommended_app?.appid;
                      _ &&
                        _.push({
                          _: _,
                          type: "game",
                        });
                    }
                    (0, _._)(_, {
                      ..._._,
                      include_assets: !0,
                      include_release: !0,
                    }),
                      __webpack_require__();
                  } else console.error("Found no list data");
              })(),
              () => _.cancel("unmounting CuratorList")
            );
          }, [_, _, _]),
          _.Get().GetListDetails(_)
        );
      }
      function _(_) {
        const _ = _ && _._.GetClanInfoByClanAccountID(_),
          [_, _] = (0, _.useState)(!!_);
        return (
          (0, _.useEffect)(() => {
            if (_ && _) {
              const _ = _._.InitFromClanID(_);
              _._.LoadClanInfoForClanSteamID(_).finally(() => {
                _(!0);
              });
            }
          }, [_, _]),
          _
        );
      }
      function _(_) {
        return Boolean(_?.sale_clan_event_gid) && Boolean(_?.sale_clan_steamid);
      }
      function _(_) {
        const _ = (0, _._)(),
          _ = _(_) ? _.sale_clan_event_gid : null,
          _ = _ && _._.GetClanEventModel(_);
        return (
          (0, _.useEffect)(() => {
            if (_ || !_(_)) return;
            const _ = _().CancelToken.source();
            return (
              (async () => {
                _._.Init(),
                  await _._.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    new _._(_.sale_clan_steamid),
                    _,
                    0,
                  ),
                  _.token.reason || _();
              })(),
              () => _.cancel("unmounting CuratorList")
            );
          }, [_, _, _, _]),
          _
        );
      }
      (0, _._)([_._], _.prototype, "m_mapList", void 0);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
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
          _?.forEach((_) =>
            _.push({
              _: _,
              type: "game",
            }),
          ),
          _?.forEach((_) =>
            _.push({
              _: _,
              type: "sub",
            }),
          ),
          __webpack_require__?.forEach((_) =>
            _.push({
              _: _,
              type: "bundle",
            }),
          ),
          _
        );
      }
      function _(_) {
        const _ = _._.Get().GetStoreItem(_._, (0, _._)(_.type));
        return (_?.GetBestPurchaseOption()?.discount_pct ?? 0) > 0;
      }
      function _(_) {
        if (!_._.Get().GetHomeView()?.localized) return !0;
        const _ = _._.Get().GetStoreItem(_._, (0, _._)(_.type));
        return (
          !_ ||
          _._.Get().BIsAnyLanguageEnabled(_.GetAllLanguagesWithSomeSupport())
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
        _?.forEach((_) => {
          const _ = _._.Get().GetBundle(_);
          _?.GetIncludedAppIDs().forEach((_) => _.add(_));
        }),
          _?.forEach((_) => {
            const _ = _._.Get().GetPackage(_);
            _?.GetIncludedAppIDs().forEach((_) => _.add(_));
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
                _ = _?.GetParentAppID();
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
        if (!_) return !0;
        const _ = _._.Get();
        if (
          ((0, _._)(_.BIsLoaded(), "Dynamic Store not loaded"),
          _.GetStoreItemType() == _._._)
        ) {
          const _ = _.GetParentAppID();
          if (
            _.BIsGameIgnored(_.GetAppID()) ||
            (void 0 !== _ && _.BIsGameIgnored(_))
          )
            return !0;
        }
        if (_.BExcludesContentDescriptor(_.GetContentDescriptorIDs()))
          return !0;
        if (_.BExcludeTagIDs(_.GetTagIDs())) return !0;
        if (_.GetAllCreatorClanIDs().some((_) => _.BIsIgnoringCurator(_)))
          return !0;
        const _ = _._.Get().GetHomeView()?.localized;
        if (_) {
          const _ = _.GetAllLanguagesWithSomeSupport();
          if (
            _.length > 0 &&
            !_.BHasSomeLanguageSupport(_.Bhc) &&
            !_.BIsAnyLanguageEnabled(_)
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
          const _ = _?.GetIncludedAppIDsOrSelf();
          let _ = !1;
          _ && (_ = _ || _.every((_) => _._.Get().BIsGameOwned(_))),
            _ && (_ = _ || _.every((_) => _._.Get().BIsGameWishlisted(_))),
            _ && (_ = _ || _.every((_) => _._.Get().BIsGameIgnored(_))),
            _ ? _ && _.push(_) : _.push(_);
        }
        return _;
      }
    },
  },
]);
