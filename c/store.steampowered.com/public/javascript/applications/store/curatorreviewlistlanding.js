(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [20716],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        const _ = null;
        function _(_) {
          return _.includes(_);
        }
        function _(_) {
          return _(_) ? _ : void 0;
        }
        function _(_) {
          return _
            ? _ === "game" ||
                _ === "dlc" ||
                _ === "software" ||
                _ === "music" ||
                _ === "application" ||
                _ === "demo" ||
                _ === "hardware" ||
                _ === "mod" ||
                _ == "video" ||
                _ === "beta" ||
                _ === "advertising"
            : !1;
        }
        function _(_) {
          return _ == null
            ? !1
            : _ == _._._ ||
                _ == _._._ ||
                _ == _._._ ||
                _ == _._._ ||
                _ == _._._ ||
                _ == _._._ ||
                _ == _._._ ||
                _ == _._._ ||
                _ == _._._ ||
                _ == _._._;
        }
        function _(_) {
          return _ === "music" || _ === "dlc";
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _() {
          const _ = useStoreBrowseContext(),
            _ = useActiveAnonymousServiceTransport();
          return useQuery(_(_, _));
        }
        function _(_) {
          return ["StoreBrowsePriceStops", _];
        }
        function _(_, _) {
          const { country: _ } = _;
          return {
            queryKey: _(_),
            queryFn: async () => _(_, _),
            staleTime: 1440 * 60 * 1e3,
          };
        }
        async function _(_, _) {
          const _ = _._.Init(_._);
          _.Body().set_country_code(_);
          const _ = await _._.GetPriceStops(_, _);
          if (!_.BSuccess())
            throw `Error loading price stops: ${_.GetErrorMessage()}`;
          return _.Body().toObject().price_stops || [];
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return _?.length
            ? [
                {
                  price: 0,
                  label: (0, _._)("#FacetedBrowse_Price_Free"),
                },
                ..._.map((_) => ({
                  price: Number(_.amount_in_cents ?? 0) / 100,
                  label: (0, _._)(
                    "#FacetedBrowse_Price_Under",
                    _.formatted_amount ?? "",
                  ),
                })),
                {
                  price: void 0,
                  label: (0, _._)("#FacetedBrowse_Price_Any"),
                },
              ]
            : [];
        }
        function _() {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            { data: _ } = (0, _._)({
              ..._(_, _),
              select: _,
            });
          return _ ?? [];
        }
        function _(_, _) {
          return _(_.getQueryData(_(_)));
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
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _, _) {
          const _ = _.name;
          if (_?.length > 0 && _[0]?.startsWith("#tagid_")) {
            const _ = parseInt(_[0].substring(7));
            if (_ > 0) return _ && _[_];
          }
          return (0, _._)((_._.GetWithFallback(_, _) || "").trim());
        }
        function _(_) {
          return String(_.type) + _._;
        }
        function _(_, _) {
          return (
            _.jsondata.item_source_type != null &&
            _.jsondata.item_source_type !== _._.k_ETaggedItems
          );
        }
        function _(_) {
          for (const _ of _.facetValues)
            if (_.filter != null) {
              for (const _ of _.filter.clauses)
                for (const _ of _.or_tags) if (_.startsWith("[Opt]")) return !0;
            }
          return !1;
        }
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
          _ = __webpack_require__._(_);
        function _(_) {
          const { crumbs: _, className: _, bHideLastArrow: _ } = _;
          return !_ || _.length == 0
            ? null
            : (0, _.jsxs)("div", {
                className: (0, _._)(_.BreadContainer, _),
                children: [
                  (0, _.jsx)(_._, {
                    className: "blockbg",
                    "flow-children": "row",
                    children: _.map((_, _) => {
                      const _ = new Array();
                      return (
                        _.url.startsWith("http")
                          ? _.push(
                              (0, _.jsx)(
                                _._,
                                {
                                  href: _.url,
                                  children: _.name,
                                },
                                "anchor_" + _.name,
                              ),
                            )
                          : _.push(
                              (0, _.jsx)(
                                _._,
                                {
                                  _: _.url,
                                  children: _.name,
                                },
                                "link_" + _.name,
                              ),
                            ),
                        (!_ || _ < _.length - 1) &&
                          _.push(
                            (0, _.jsx)(
                              "span",
                              {
                                children: "\xA0> ",
                              },
                              _.name + "span",
                            ),
                          ),
                        _
                      );
                    }),
                  }),
                  (0, _.jsx)("div", {
                    style: {
                      clear: "left",
                    },
                  }),
                ],
              });
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
          include_optin_registration_tags: !0,
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
          if (!_ || _.length == 0) return _;
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
                if (_?.GetIncludedAppIDs()?.length !== 1) {
                  _ = _(_, _, _, !0);
                  break;
                }
                _ = _.GetIncludedAppIDs()[0];
              case "app":
                _ = _(_, _, _, _, !0);
                break;
              case "bundle":
                _ = _(_, _, _, !0);
                break;
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
            _.BHasPlatformPreferenceSet() &&
            !(
              (_.GetPlatforms()?.windows && _.BIsPreferredPlatform("win")) ||
              (_.GetPlatforms()?.mac && _.BIsPreferredPlatform("mac")) ||
              (_.GetPlatforms()?.steamos_linux &&
                _.BIsPreferredPlatform("linux"))
            )
          )
            return _._.k_RejectWrongPlatform;
          if (!_.prepurchase && _.BIsComingSoon())
            return _._.k_RejectNoComingSoon;
          const _ = _.GetPlatforms();
          return !_.virtual_reality &&
            _ &&
            _.vr_support &&
            _.vr_support.vrhmd_only
            ? _._.k_RejectNoVR
            : _.GetAllCreatorClanIDs()?.some((_) => _.BIsIgnoringCurator(_))
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
          if (_.BExcludeTagIDs(_.GetTagIDs()))
            return _._.k_RejectIgnoreGameTags;
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
          return _ != "adultonly" &&
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
            if (_.BIsGameIgnored(_)) return _._.k_RejectIgnoredGame;
            _.BIsGameOwned(_) && (_ = !0);
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
                ? _.BHasPackageID(_)
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
              ? _.BHasBundleID(_)
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
        const _ = new WeakSet();
        function _(_ = _._) {
          if (typeof window > "u" || typeof document > "u" || _.has(_)) return;
          const _ = (0, _._)("groupvanityinfo", "application_config");
          (_ === void 0 && document.readyState != "complete") ||
            (_.add(_), _(_) && (0, _._)(_, _));
        }
        function _(_) {
          const _ = _;
          return _ &&
            Array.isArray(_) &&
            _.length > 0 &&
            typeof _[0] == "object"
            ? typeof _[0].clanAccountID == "number" &&
                (typeof _[0].appid == "number" ||
                  typeof _[0].vanity_url == "string")
            : !1;
        }
        function _(_) {
          return typeof _ == "string" ? parseInt(_) : _;
        }
        function _(_) {
          return typeof _ == "string" ? Number.parseInt(_) : _;
        }
        class _ {
          m_queryClient = _._;
          m_boxCacheVersion = _._.box(0);
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
                  (_?.type != "added" &&
                    _?.type != "updated" &&
                    _?.type != "removed") ||
                    ((0, _._)(_.query?.queryKey) &&
                      this.ScheduleCacheVersionBump());
                }));
          }
          ScheduleCacheVersionBump() {
            this.m_bBumpScheduled ||
              ((this.m_bBumpScheduled = !0),
              queueMicrotask(() => {
                (this.m_bBumpScheduled = !1),
                  (0, _._)(() =>
                    this.m_boxCacheVersion.set(
                      this.m_boxCacheVersion.get() + 1,
                    ),
                  );
              }));
          }
          ReadCache() {
            return (
              this.LazyInit(), this.m_boxCacheVersion.get(), this.m_queryClient
            );
          }
          AddGroupVanities(_) {
            this.LazyInit(), _(_) && (0, _._)(this.m_queryClient, _);
          }
          BHasClanInfoLoaded(_) {
            return (
              (0, _._)(_.BIsValid(), "Clan SteamID is not valid when ClanInfo"),
              (0, _._)(
                _.BIsClanAccount(),
                "Clan SteamID is not a clan account id when requesting clan info ",
              ),
              this.BHasClanInfoLoadedByAccountID(_.GetAccountID())
            );
          }
          BHasClanInfoLoadedByAccountID(_) {
            return !!(0, _._)(_(_), this.ReadCache());
          }
          RegisterClanData(_) {
            this.LazyInit(), (0, _._)(this.m_queryClient, _);
          }
          async LoadOGGClanInfoForAppID(_) {
            return (
              this.LazyInit(),
              (_ = _(_)),
              (0, _._)(
                _ != 0,
                "LoadOGGClanInfoForAppID called with appid of zero",
              ),
              _ == 0 ? null : (0, _._)(_, this.m_queryClient).catch(() => null)
            );
          }
          async LoadOGGClanInfoForIdentifier(_) {
            return this.LazyInit(), (0, _._)(_, this.m_queryClient, "store");
          }
          async LoadOGGClanInfoForGroupVanity(_) {
            return this.LazyInit(), (0, _._)(_, this.m_queryClient, "group");
          }
          async LoadClanInfoForClanSteamID(_) {
            return this.LoadClanInfoForClanAccountID(_.GetAccountID());
          }
          async LoadClanInfoForClanAccountID(_) {
            return this.LazyInit(), (0, _._)(_(_), this.m_queryClient);
          }
          GetOGGClanInfo(_) {
            const _ = this.ReadCache();
            return typeof _ == "string" ? (0, _._)(_, _) : (0, _._)(_, _);
          }
          GetClanSteamIDForAppID(_) {
            const _ = (0, _._)(_(_), this.ReadCache());
            return _ ? _._.InitFromClanID(_.clanAccountID) : void 0;
          }
          GetClanVanityForAppID(_) {
            return (0, _._)(_(_), this.ReadCache())?.vanity_url;
          }
          GetClanVanityForClanSteamID(_) {
            return (0, _._)(_.GetAccountID(), this.ReadCache())?.vanity_url;
          }
          HasLoadedClanAccountID(_) {
            return this.BHasClanInfoLoadedByAccountID(_);
          }
          GetClanMemberCount(_) {
            return (0, _._)(_(_), this.ReadCache())?.member_count ?? 0;
          }
          GetClanInfoByClanAccountID(_) {
            return (
              (0, _._)(
                !!_,
                "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
              ),
              (0, _._)(_(_), this.ReadCache())
            );
          }
          GetCreatorStoreURL(_) {
            let _ = _._.GetCreatorHome(_);
            if (_) return _.GetCreatorHomeURL("developer");
            let _ = this.GetClanInfoByClanAccountID(_.GetAccountID());
            return (
              _._.COMMUNITY_BASE_URL +
              (_.vanity_url
                ? "groups/" + _.vanity_url
                : "gid/" + _.ConvertTo64BitString())
            );
          }
        }
        const _ = new _();
        (0, _._)("g_ClanStore", _);
        function _() {
          const _ = (0, _._)();
          return _(_), _;
        }
        function _(_) {
          _();
          const { data: _, isPending: _ } = (0, _._)(_ ? _(_) : void 0);
          return [!!_ && _, _ ?? void 0];
        }
        function _(_) {
          const _ = _();
          (0, _.useEffect)(() => {
            _ &&
              (0, _._)(_(_), _).catch((_) =>
                console.error(`Failed to hint load clan info ${_}`, _),
              );
          }, [_, _]);
        }
        function _(_) {
          return _(), useClanInfoByVanityQuery(_).data ?? null;
        }
        function _(_) {
          _();
          const _ = _ ? _(_) : void 0,
            { data: _, isPending: _ } = useClanInfoByAppIDQuery(_);
          return {
            bLoadingClanInfo: !!_ && _,
            clanInfo: _ ?? null,
          };
        }
        function _(_, _) {
          if (_.BIsOGGEvent())
            return {
              bVisible: !1,
            };
          if (_.GetEventType() == k_EClanEventType_CreatorHome)
            return {
              bVisible: !1,
            };
          if (_.BHasSaleEnabled())
            return {
              bVisible: !0,
            };
          if (
            _.jsondata.clone_from_event_gid &&
            _.jsondata.clone_from_sale_enabled
          )
            return {
              bVisible: !0,
            };
          if (_.clanSteamID.GetAccountID() == getMeetSteamClanID())
            return {
              bVisible: !1,
            };
          const _ = g_CreatorHomeStore.GetCreatorHome(_.clanSteamID);
          return _ &&
            _.BHasClanAccountFlagSet(
              EClanAccountFlags.k_EClanAccountFlag_AllowSalePageEditing,
            )
            ? {
                bVisible: !0,
              }
            : _
              ? {
                  bVisible: !0,
                  bValveOnly: !0,
                }
              : {
                  bVisible: !1,
                };
        }
        function _(_, _) {
          return _.BIsOGGEvent()
            ? _.BHasSaleEnabled()
              ? {
                  bVisible: !0,
                }
              : Config.EUNIVERSE == k_EUniversePublic
                ? {
                    bVisible: !1,
                  }
                : _
                  ? _.GetEventType() == k_EClanEventType_MajorUpdateEvent
                    ? {
                        bVisible: !0,
                        bValveOnly: !0,
                      }
                    : {
                        bVisible: !1,
                      }
                  : {
                      bVisible: !1,
                    }
            : {
                bVisible: !1,
              };
        }
        function _(_) {
          return _.BIsOGGEvent()
            ? {
                bVisible: !1,
              }
            : _.GetEventType() != k_EClanEventType_CreatorHome
              ? {
                  bVisible: !1,
                }
              : _.BHasSaleEnabled()
                ? {
                    bVisible: !0,
                  }
                : _.clanSteamID.GetAccountID() == getMeetSteamClanID()
                  ? {
                      bVisible: !1,
                    }
                  : {
                      bVisible: !1,
                    };
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        function _(_) {
          (0, _._)(!0, "Unexpected code running in SSR Server: " + _);
        }
        var _ = __webpack_require__("chunkid");
        class _ {
          m_HomeView = void 0;
          BHasHomeView() {
            return !!this.m_HomeView;
          }
          GetHomeView() {
            return this.m_HomeView?.home;
          }
          static s_globalSingletonStore;
          static Get() {
            return (
              _.s_globalSingletonStore ||
                (_("CHomeViewStore.s_globalSingletonStore"),
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
              _ &&
              typeof _.home == "object" &&
              typeof _.main_cluster == "object"
            );
          }
          SetHomeViewSetting(_) {
            this.m_HomeView = _;
          }
          ValidateHomeViewDataOverride(_) {
            const _ = _;
            return (
              _ &&
              (!_.all || typeof _.all == "object") &&
              (!_.maincap || typeof _.maincap == "object")
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
        "use strict";
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
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4;
        function _(_) {
          _.list_jsondata && typeof _.list_jsondata == "string"
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
        const _ = class _ {
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
                  (0, _._)(
                    _ == _?.listid,
                    "Wanted" + _ + "but got" + _?.listid,
                  ),
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
              (_._.Get().BIsLoaded() &&
                _._.Get().GetFollowedCuratorCount() == 0)
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
              typeof _[0] == "object"
              ? typeof _[0].curation_language == "number" &&
                  _[0].multi_detail_lists &&
                  Array.isArray(_[0].multi_detail_lists) &&
                  typeof _[0].multi_detail_lists[0].listid == "string" &&
                  typeof _[0].multi_detail_lists[0].list_type == "number" &&
                  typeof _[0].multi_detail_lists[0].list_state == "number"
              : _ && Array.isArray(_) && _.length == 0;
          }
        };
        _([_._], _.prototype, "m_mapList", 2);
        let _ = _;
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
                        _();
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
          return !!_?.sale_clan_event_gid && !!_?.sale_clan_steamid;
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
                (async () => (
                  _._.Init(),
                  await _._.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    new _._(_.sale_clan_steamid),
                    _,
                    0,
                  ),
                  !_.token.reason && _()
                ))(),
                () => _.cancel("unmounting CuratorList")
              );
            }, [_, _, _, _]),
            _
          );
        }
        function _(_) {
          const [_, _] = useState(null),
            _ = _(_);
          return useEffect(() => _(_?.GetSaleFeaturedApps()), [_]), _;
        }
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
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _, _ = !0) {
          const _ = _
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            _ = _ || CStoreItemCache.Get().BHasStoreItem(_, _, _) ? _ : null,
            [_, _] = _(_, _, _),
            [_, _] = useState(null),
            [_, _] = _(_, _, _);
          useEffect(() => {
            _?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              _(_.GetParentAppID());
          }, [_]);
          let _ = _?.GetShortDescription()
            ? StripBBCodeTags(_.GetShortDescription())
            : "";
          (!_ || _.length === 0) &&
            _ &&
            (_ = _?.GetShortDescription()
              ? StripBBCodeTags(_.GetShortDescription())
              : "");
          const _ = _ == _ && (!_ || _ == _);
          return [_, _];
        }
        const _ = 1,
          _ = 2,
          _ = 3;
        function _(_, _, _, _) {
          const _ = (0, _.useRef)(void 0),
            _ = (0, _.useRef)(void 0),
            _ = (0, _._)();
          _.current = _;
          const [_, _] = (0, _.useState)(void 0),
            {
              include_assets: _,
              include_release: _,
              include_platforms: _,
              include_all_purchase_options: _,
              include_screenshots: _,
              include_trailers: _,
              include_ratings: _,
              include_tag_count: _,
              include_reviews: _,
              include_basic_info: _,
              include_supported_languages: _,
              include_full_description: _,
              include_included_items: _,
              include_assets_without_overrides: _,
              apply_user_filters: _,
              include_links: _,
              include_extra_details: _,
              include_optin_registration_tags: _,
            } = _;
          if (
            ((0, _.useEffect)(() => {
              const _ = {
                include_assets: _,
                include_release: _,
                include_platforms: _,
                include_all_purchase_options: _,
                include_screenshots: _,
                include_trailers: _,
                include_ratings: _,
                include_tag_count: _,
                include_reviews: _,
                include_basic_info: _,
                include_supported_languages: _,
                include_full_description: _,
                include_included_items: _,
                include_assets_without_overrides: _,
                apply_user_filters: _,
                include_links: _,
                include_extra_details: _,
                include_optin_registration_tags: _,
              };
              let _ = null;
              return (
                !_ ||
                  _ < 0 ||
                  _._.Get().BHasStoreItem(_, _, _) ||
                  (_ !== void 0 && _ && _ == _.current) ||
                  (_ !== _.current && (_(void 0), (_.current = _)),
                  (_ = _().CancelToken.source()),
                  _._.Get()
                    .QueueStoreItemRequest(_, _, _)
                    .then((_) => {
                      !_?.token.reason && _.current === _ && _(_ == _._), _();
                    })),
                () => _?.cancel("useStoreItemCache: unmounting")
              );
            }, [
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
            ]),
            !_)
          )
            return [null, _];
          if (_ === !1) return [void 0, _];
          if (_._.Get().BIsStoreItemMissing(_, _)) return [void 0, _];
          if (!_._.Get().BHasStoreItem(_, _, _)) return [void 0, _];
          const _ = _._.Get().GetStoreItemWithLegacyVisibilityCheck(_, _);
          return _ ? [_, _] : [null, _];
        }
        function _(_, _, _) {
          return _(_, _._._, _, _);
        }
        function _(_, _, _) {
          return _(_, _._._, _, _);
        }
        function _(_, _, _) {
          return _(_, _._._, _, _);
        }
        function _(_, _, _) {
          const [_, _] = _(_, _, _);
          let _;
          _?.GetStoreItemType() == _._._ &&
            !_.GetAssets()?.GetHeaderURL() &&
            _?.GetIncludedAppIDs().length == 1 &&
            (_ = _.GetIncludedAppIDs()[0]);
          const [_, _] = _(_, _);
          return _ && _?.BIsVisible() ? [_, _] : [_, _];
        }
        function _(_, _, _, _) {
          const _ = (0, _._)(),
            {
              include_assets: _,
              include_release: _,
              include_platforms: _,
              include_all_purchase_options: _,
              include_screenshots: _,
              include_trailers: _,
              include_ratings: _,
              include_tag_count: _,
              include_reviews: _,
              include_basic_info: _,
              include_supported_languages: _,
              include_full_description: _,
              include_included_items: _,
              include_assets_without_overrides: _,
              apply_user_filters: _,
              include_links: _,
              include_extra_details: _,
              include_optin_registration_tags: _,
            } = _;
          return (
            (0, _.useEffect)(() => {
              if (!_ || _.length == 0) return;
              const _ = {
                  include_assets: _,
                  include_release: _,
                  include_platforms: _,
                  include_all_purchase_options: _,
                  include_screenshots: _,
                  include_trailers: _,
                  include_ratings: _,
                  include_tag_count: _,
                  include_reviews: _,
                  include_basic_info: _,
                  include_supported_languages: _,
                  include_full_description: _,
                  include_included_items: _,
                  include_assets_without_overrides: _,
                  apply_user_filters: _,
                  include_links: _,
                  include_extra_details: _,
                  include_optin_registration_tags: _,
                },
                _ = _.filter(
                  (_) =>
                    !(
                      _._.Get().BHasStoreItem(_, _, _) ||
                      _._.Get().BIsStoreItemMissing(_, _)
                    ),
                );
              if (_.length == 0) return;
              const _ = _().CancelToken.source(),
                _ = _.map((_) => _._.Get().QueueStoreItemRequest(_, _, _));
              return (
                Promise.all(_).then(() => {
                  _.token.reason || _();
                }),
                () => _.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
            ]),
            _
              ? _.every(
                  (_) =>
                    _._.Get().BHasStoreItem(_, _, _) ||
                    _._.Get().BIsStoreItemMissing(_, _),
                )
                ? _.every((_) =>
                    _._.Get().GetStoreItemWithLegacyVisibilityCheck(_, _),
                  )
                  ? _
                  : _
                : _
              : _
          );
        }
        function _(_, _, _) {
          return _(_, _._._, _, _);
        }
        function _(_, _, _) {
          return _(_, EStoreItemType.k_EStoreItemType_Bundle, _, _);
        }
        function _(_, _, _) {
          return _(_, EStoreItemType.k_EStoreItemType_Package, _, _);
        }
        function _() {
          _.useEffect(
            () => (
              _._.Get().SetReturnUnavailableItems(!0),
              () => _._.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
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
            _?.forEach((_) =>
              _.push({
                _: _,
                type: "bundle",
              }),
            ),
            _
          );
        }
        function _(_) {
          return (
            (_._.Get()
              .GetStoreItem(_._, (0, _._)(_.type))
              ?.GetBestPurchaseOption()?.discount_pct ?? 0) > 0
          );
        }
        function _(_) {
          if (!_._.Get().GetHomeView()?.localized) return !0;
          const _ = _._.Get().GetStoreItem(_._, (0, _._)(_.type));
          return _
            ? _._.Get().BIsAnyLanguageEnabled(
                _.GetAllLanguagesWithSomeSupport(),
              )
            : !0;
        }
        async function _(_, _, _) {
          if (!_ || _.length == 0) return [];
          const _ = _.filter((_) => (0, _._)(_.type)).map((_) => _._),
            _ = _.filter((_) => _.type === "sub").map((_) => _._),
            _ = _.filter((_) => _.type === "bundle").map((_) => _._);
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
            _._.Get()
              .GetBundle(_)
              ?.GetIncludedAppIDs()
              .forEach((_) => _.add(_));
          }),
            _?.forEach((_) => {
              _._.Get()
                .GetPackage(_)
                ?.GetIncludedAppIDs()
                .forEach((_) => _.add(_));
            });
          const _ = Array.from(_).filter((_) => !_._.Get().BHasApp(_, _));
          if (
            (_.length > 0 && (await _._.Get().QueueMultipleAppRequests(_, _)),
            _.forEach((_) => _.add(_)),
            _)
          ) {
            const _ = Array.from(_)
              .map((_) => {
                const _ = _._.Get().GetApp(_)?.GetParentAppID();
                return _ ? (_.add(_), _) : null;
              })
              .filter((_) => _ !== null)
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
        function _(_, _ = !1) {
          if (!_) return !0;
          const _ = _._.Get();
          if (
            ((0, _._)(_.BIsLoaded(), "Dynamic Store not loaded"),
            !_ && _.GetStoreItemType() == _._._)
          ) {
            const _ = _.GetParentAppID();
            if (
              _.BIsGameIgnored(_.GetAppID()) ||
              (_ !== void 0 && _.BIsGameIgnored(_))
            )
              return !0;
          }
          if (
            _.BExcludesContentDescriptor(_.GetContentDescriptorIDs()) ||
            _.BExcludeTagIDs(_.GetTagIDs()) ||
            _.GetAllCreatorClanIDs().some((_) => _.BIsIgnoringCurator(_))
          )
            return !0;
          if (_._.Get().GetHomeView()?.localized) {
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
          let _ = 0,
            _ = 0;
          const _ = [];
          await _(_, _._, _);
          for (const _ of _) {
            const _ = _._.Get().GetStoreItem(_._, (0, _._)(_.type));
            if (!_) {
              _++;
              continue;
            }
            const _ = _.GetIncludedAppIDs()
              .map((_) => _._.Get().GetApp(_))
              .filter((_) => !!_);
            if ((_.push(_), _)) {
              const _ = new Set(
                  _.map((_) => _.GetParentAppID()).filter((_) => !!_),
                ),
                _ = Array.from(_)
                  .map((_) => _._.Get().GetApp(_))
                  .filter((_) => !!_);
              _ && _.push(..._);
            }
            _.some((_) => (_ || _)(_))
              ? (_++, _ && (_._.Get().BIsStoreItemOwned(_) || _.push(_)))
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
        function _() {
          const _ = _._.Get();
          if (_.BIsLoaded())
            return {
              bSignedIn: !!_._.logged_in,
              ePrimaryLanguage: _.GetPrimaryLanguage(),
              setSecondaryLanguages: _.GetSecondaryLanguages(),
              setExcludedContentDescriptors: new Set(
                _.ExcludedContentDescriptor,
              ),
            };
        }
        function _() {
          return (0, _._)(_._, _._.COUNTRY);
        }
        function _(_) {
          return !!(
            _?.BHasHideIgnoredItemsFacetValue() &&
            !_.BIsUserPreferenceEnabled(_._.k_EHideIgnoredItems)
          );
        }
        async function _(_, _, _, _) {
          const _ = _.BHasHideIgnoredItemsFacetValue(),
            _ = _.BIsUserPreferenceEnabled(_._.k_EHideOwnedItems),
            _ = _.BIsUserPreferenceEnabled(_._.k_EHideWishlistedItems),
            _ = _.BIsUserPreferenceEnabled(_._.k_EHideIgnoredItems),
            _ = [],
            _ = await _(_, _, _, _, _, _, _);
          return (
            (0, _._)(() => {
              _.SetCapsulesRemovedByUserPreferenceFilters(new Set(_.map(_._)));
            }),
            _?.push(..._),
            _
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        const _ = (_) => {
            const _ = ["maxresdefault", "mqdefault", "default"],
              [_, _] = _.useState(0);
            _.useEffect(() => _(0), [_.video]);
            const _ = _.useRef(void 0);
            if (_.altImgWithFallback && _.altImgWithFallback.length > 0)
              return (0, _.jsx)(_._, {
                className: _.className,
                srcs: _.altImgWithFallback,
              });
            if (_.altImg)
              return (0, _.jsx)("img", {
                src: _.altImg,
                className: _.className,
              });
            {
              const _ =
                  "https://img.youtube.com/vi/" + _.video + "/" + _[_] + ".jpg",
                _ = () => {
                  _ + 1 < _.length && _(_ + 1);
                },
                _ = () => {
                  _.current && _.current.naturalHeight < 91 && _();
                };
              return (0, _.jsx)("img", {
                ref: _,
                onLoad: _,
                onError: _,
                src: _,
                className: (0, _._)(_().YoutubePreviewImage, _.className),
              });
            }
          },
          _ = (_) => {
            const [_, _] = _.useState(!1);
            (0, _._)(!!_.preloadYoutubeScripts);
            const _ = (0, _._)("youtube");
            if (!_ || !_) {
              const _ = (_) => {
                _.onPlayerActivated && _.onPlayerActivated(),
                  _(!0),
                  _.stopPropagation(),
                  _.preventDefault();
              };
              return (0, _.jsxs)("div", {
                className: (0, _._)(
                  "YoutubePreviewContainer",
                  _().YoutubePreviewImage,
                  _.imageClassnames,
                ),
                onClick: _ ? _ : void 0,
                children: [
                  (0, _.jsx)(_, {
                    className: "YoutubePreviewImage",
                    altImgWithFallback: _.altImgWithFallback,
                    altImg: _.altImg,
                    video: _.video,
                  }),
                  _ &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)("div", {
                          className: "YoutubePreviewPlay",
                          children: (0, _.jsx)(_.IOc, {}),
                        }),
                        (0, _.jsx)("div", {
                          className: "VideoHintText",
                          children: (0, _._)(
                            "#EventCalendar_WatchYouTubeVideo",
                          ),
                        }),
                      ],
                    }),
                ],
              });
            } else
              return (0, _.jsx)(_._, {
                ..._,
                classnames: (0, _._)(_().YoutubePlayer, _.classnames),
              });
          };
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            CuratorReviewListContainer: () => _,
            default: () => _,
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        async function _(_, _) {
          const _ =
              _._.STORE_BASE_URL + "contenthub/ajaxfilterappsbycontenthub",
            _ = {
              hubtype: _.GetContentHubType(),
              category: _.GetContentHubCategory(),
              tagid: _.GetContentHubTag(),
              prune_list_optin_name: _.jsondata.prune_list_optin_name,
              optin_tagid: _.jsondata.optin_tagid,
              optin_prune_tagid: _.jsondata.optin_prune_tagid,
              optin_only: _.jsondata.optin_only,
              applist: _.sort().join(","),
            };
          let _ = null;
          const _ = new Set();
          try {
            const _ = await _().get(_, {
              params: _,
            });
            if (_?.data?.success == _._)
              return _.data.appids.forEach((_) => _.add(_)), _;
            _ = (0, _._)(_);
          } catch (_) {
            _ = (0, _._)(_);
          }
          return (
            console.error(
              "LoadContentHubFilteredApps failed: " + _?.strErrorMsg,
              _,
            ),
            _
          );
        }
        function _(_, _) {
          const [_, _] = (0, _.useState)(
              _?.BUsesContentHubForItemSource() ? new Set() : null,
            ),
            _ = (0, _._)("useFilteredAppViaContentHub");
          return (
            (0, _.useEffect)(() => {
              _?.BUsesContentHubForItemSource() &&
                !_ &&
                _(_, _).then((_) => {
                  _.token.reason || _(_);
                });
            }, [_, _.token.reason, _, _]),
            _
          );
        }
        var _ = __webpack_require__("chunkid"),
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
          _ = __webpack_require__("chunkid");
        const _ = "(?:https?://)?(?:www.)?twitch.tv/videos/([0-9]+)S*",
          _ = new RegExp(_);
        function _(_) {
          const _ = _.exec(_);
          return _ && _.length > 1 ? _[1] : null;
        }
        function _(_) {
          const {
              posterURL: _,
              videoid: _,
              muted: _,
              autoplay: _,
              bIsClipID: _,
              time: _,
              width: _,
              height: _,
            } = _,
            [_, _] = _.useState(!!_),
            _ = _ == null || _ == null ? !1 : _;
          if (_)
            return (0, _.jsxs)("div", {
              className: (0, _._)(
                "YoutubePreviewContainer",
                _.YoutubePreviewImage,
                _.imageClassnames,
              ),
              onClick: () => _(!1),
              children: [
                (0, _.jsx)("img", {
                  className: (0, _._)(
                    "YoutubePreviewImage",
                    _.YoutubePreviewImage,
                  ),
                  src:
                    _ ||
                    _._.COMMUNITY_CDN_URL +
                      "public/shared/images/responsive/youtube_16x9_placeholder.gif",
                }),
                (0, _.jsx)("div", {
                  className: "YoutubePreviewPlay",
                  children: (0, _.jsx)(_.IOc, {}),
                }),
              ],
            });
          let _ = (0, _._)().replace("https://", "");
          const _ = _.indexOf("/");
          _ >= 0 && (_ = _.substring(0, _));
          let _ = _
            ? `https://clips.twitch.tv/embed?clip=${_}`
            : `https://player.twitch.tv/?video=${_}`;
          return (
            (_ += `&parent=${_}&autoplay=${_}&muted=${!!_}`),
            _ && (_ += `&time=${_(_)}`),
            (0, _.jsxs)("div", {
              className: (0, _._)("YoutubePlayer", _().TwitchPlayer),
              children: [
                (0, _.jsx)("img", {
                  className: (0, _._)(
                    "YoutubePreviewContainer",
                    _.YoutubePreviewImage,
                    _.imageClassnames,
                  ),
                  src:
                    _._.COMMUNITY_CDN_URL +
                    "public/shared/images/responsive/youtube_16x9_placeholder.gif",
                }),
                (0, _.jsx)("iframe", {
                  src: _,
                  allowFullScreen: !0,
                  frameBorder: 0,
                  width: _ || 460,
                  height: _ || 300,
                }),
              ],
            })
          );
        }
        function _(_) {
          const _ = Math.floor(_ / 3600);
          _ -= _ * 60 * 60;
          const _ = Math.floor(_ / 60);
          return (_ -= _ * _), `${_}h${_}m${_}s`;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { clanInfo: _ } = _,
            { curator_link: _, curator_medium_avatar: _ } = (0, _._)(
              "curator_header",
              "application_config",
            );
          return (0, _.jsx)(_._, {
            className: "page_content_ctn",
            "flow-children": "column",
            autoFocus: !0,
            children: (0, _.jsxs)("div", {
              className: "page_content " + _.HeaderContent,
              children: [
                (0, _.jsx)(_._, {
                  className: _.BreadContainer,
                  crumbs: (0, _._)("breadcrumbs", "application_config"),
                }),
                (0, _.jsxs)(_._, {
                  className: "list_header_area",
                  "flow-children": "row",
                  children: [
                    (0, _.jsx)("div", {
                      className: "curator_avatar_image",
                      children: (0, _.jsx)(_._, {
                        href: _,
                        children: (0, _.jsx)("img", {
                          className: "curator_avatar",
                          src: _,
                        }),
                      }),
                    }),
                    (0, _.jsx)("div", {
                      className: "curator_details",
                      children: (0, _.jsx)(_._, {
                        className: "pageheader curator_name",
                        href: _,
                        children: (0, _._)(
                          "#SteamCurator_List_Header_List",
                          _.group_name,
                        ),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return (0, _.jsx)(_, {
            listid: _.listid,
          });
        }
        const _ = _;
        function _(_) {
          const _ = parseInt(
              (0, _._)("curator_account_id", "application_config"),
            ),
            _ = (0, _._)(_),
            _ = (0, _._)(_?.clanSteamID, _.listid);
          if (((0, _._)(_._.LANGUAGE), !_)) return null;
          const _ = _.is_ogg,
            _ = _.is_creator_home && !_.is_ogg,
            _ = _
              ? "#SteamCurator_MoreDLC"
              : _
                ? "#SteamCurator_MoreProducts"
                : "#SteamCurator_MoreReviews";
          return (0, _.jsxs)(_._, {
            feature: "curatorlistcapsule",
            children: [
              (0, _.jsx)(_, {
                clanInfo: _,
              }),
              (0, _.jsx)("div", {
                className: "page_content_ctn grayscale",
                children: (0, _.jsx)("div", {
                  className: "page_content",
                  children: (0, _.jsxs)("div", {
                    className: _().CuratorListCtn,
                    children: [
                      (0, _.jsx)(_, {
                        listDetails: _,
                      }),
                      (0, _._)(_)
                        ? (0, _.jsx)(_, {
                            listDetails: _,
                          })
                        : (0, _.jsx)(_, {
                            listDetails: _,
                            rgListItems: _.apps,
                          }),
                      (0, _.jsxs)("div", {
                        className: _().CuratorMoreCtn,
                        children: [
                          (0, _.jsx)("h2", {
                            children: (0, _._)(
                              "#SteamCurator_ExploreMoreTitle",
                            ),
                          }),
                          (0, _.jsx)(_._, {
                            href: _.vanity_url,
                            children: (0, _._)(_, _.group_name),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        }
        function _(_) {
          const { listDetails: _ } = _,
            [_, _] = (0, _.useState)(null),
            _ = new _._(_.sale_clan_steamid),
            { eventModel: _ } = (0, _._)(
              _.GetAccountID(),
              _.sale_clan_event_gid,
            ),
            _ = (0, _.useMemo)(
              () => (_.apps || []).map((_) => _.recommended_app.appid),
              [_],
            ),
            _ = _(_, _);
          return (
            (0, _.useEffect)(() => {
              if (_)
                if (_.BUsesContentHubForItemSource())
                  _ &&
                    _(_.apps?.filter((_) => _.has(_.recommended_app?.appid)));
                else {
                  const _ = _.GetSaleFeaturedApps();
                  _(_.apps?.filter((_) => _.has(_.recommended_app?.appid)));
                }
            }, [_, _, _]),
            (0, _.jsx)(_, {
              listDetails: _,
              rgListItems: _,
            })
          );
        }
        function _(_) {
          const { listDetails: _, rgListItems: _ } = _,
            [_, _] = (0, _.useState)(0),
            [_, _] = (0, _.useState)(null),
            _ = (0, _._)("CuratorAppListDisplay");
          if (
            (_.useEffect(() => {
              _ &&
                (_(_?.length || 0),
                _._.Get()
                  .HintLoad()
                  .then(() => {
                    const _ = _.map((_) => _.recommended_app.appid);
                    _._.Get()
                      .QueueMultipleAppRequests(_, _._)
                      .then(() => {
                        _.token.reason ||
                          _(
                            _.filter(
                              (_) =>
                                !(0, _._)(
                                  _._.Get().GetApp(_.recommended_app.appid),
                                ),
                            ),
                          );
                      })
                      .catch(() => {
                        _.token.reason || _([]);
                      });
                  }));
            }, [_, _]),
            _ == null)
          )
            return (0, _.jsx)(_._, {
              string: (0, _._)("#Loading"),
              position: "center",
              size: "medium",
            });
          const _ = _.list_type == _._;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_._, {
                className: (0, _._)(_().CuratorList, _ && _().CuratorListGrid),
                "flow-children": "grid",
                children: _.map((_, _) =>
                  (0, _.jsx)(
                    _,
                    {
                      item: _,
                      listDetails: _,
                      bAutoFocus: _ == 0,
                    },
                    "rec_" + _.recommended_app.appid,
                  ),
                ),
              }),
              100 > _.length &&
                (0, _.jsxs)("div", {
                  children: [
                    (0, _.jsxs)("span", {
                      children: [
                        (0, _._)("#SteamCurator_Hidden", _ - _.length),
                        " ",
                      ],
                    }),
                    (0, _.jsx)(_._, {
                      href: _._.STORE_BASE_URL + "account/preferences/",
                      children: (0, _._)("#SteamCurator_Setting"),
                    }),
                  ],
                }),
            ],
          });
        }
        function _(_) {
          const { listDetails: _ } = _,
            _ = (0, _._)(_),
            _ = (0, _._)("showlisttitle", "application_config"),
            _ = (0, _._)("titleareaheight", "application_config"),
            _ =
              _.list_jsondata.youtube_link &&
              (0, _._)(_.list_jsondata.youtube_link),
            _ = _.list_jsondata.youtube_link && _(_.list_jsondata.youtube_link),
            _ = (0, _.sfN)(_._.LANGUAGE),
            _ = _._.GetWithFallback(_.localized_flat_title, _),
            _ = _._.GetWithFallback(_.localized_flat_blurb, _),
            _ = _._.GetWithFallback(_.localized_flat_link, _),
            _ =
              _ &&
              _.GetImageURL(
                (0, _._)() ? "product_mobile_banner" : "product_banner",
                _,
              );
          return (0, _.jsxs)("div", {
            className: _().TopReviewInfo,
            children: [
              !!_ &&
                (0, _.jsx)(_._, {
                  href: (0, _._)(_),
                  children: (0, _.jsx)("img", {
                    className: _().SaleBanner,
                    src: _,
                  }),
                }),
              _ &&
                _ &&
                (0, _.jsx)("div", {
                  className: _().Title,
                  children: _,
                }),
              _ &&
                _ &&
                (0, _.jsx)("div", {
                  className: _().Blurb,
                  children: _,
                }),
              _ > 0 &&
                (0, _.jsx)("div", {
                  style: {
                    height: _,
                  },
                }),
              _ &&
                (0, _.jsx)("div", {
                  className: _().VideoReviewCtn,
                  children: (0, _.jsx)(_._, {
                    video: _.strVideoID,
                    startSeconds: _.nStartSeconds,
                    autoplay: !0,
                    autopause: !0,
                    showFullscreenBtn: !0,
                    controls: !0,
                    preloadYoutubeScripts: !0,
                    playsInline: !0,
                    imageClassnames: _().YouTubePreviewImage,
                  }),
                }),
              !!_ &&
                (0, _.jsx)("div", {
                  className: _().VideoReviewCtn,
                  children: (0, _.jsx)(_, {
                    videoid: _,
                    posterURL: "",
                    imageClassnames: _().YouTubePreviewImage,
                  }),
                }),
              _ &&
                (0, _.jsx)(_, {
                  url: _,
                }),
            ],
          });
        }
        const _ = (0, _._)((_) => {
          const { item: _, listDetails: _, bAutoFocus: _ } = _,
            _ = parseInt((0, _._)("curator_account_id", "application_config")),
            _ = (0, _._)(_),
            [_] = (0, _._)(_?.recommended_app?.appid, {
              include_assets: !0,
              include_release: !0,
            }),
            _ = (0, _.useMemo)(
              () => ({
                _: _?.GetID(),
                type: (0, _._)(_?.GetStoreItemType(), _?.GetAppType()),
              }),
              [_],
            ),
            _ = (0, _._)(_);
          if (!_ || !_) return null;
          const {
              appid: _,
              link_url: _,
              blurb: _,
              time_recommended: _,
              recommendation_state: _,
            } = _.recommended_app,
            _ = _.is_creator_home && !_.is_ogg,
            _ = _.list_jsondata.app_data?.[_],
            _ = _ && (0, _._)(_),
            _ = _ && _(_),
            _ = _ != _._ && _,
            _ = _.BHasDemo(),
            _ = _?.img_url,
            _ = `curator_clanid=${_.clanAccountID}&curator_listid=${_.listid}`,
            _ = _.GetStorePageURL() + "/?curator_clanid=" + _.clanAccountID;
          return (0, _.jsxs)(_._, {
            className: _().CuratorReview,
            autoFocus: _,
            children: [
              (0, _.jsx)("div", {
                className: _().CapsuleCtn,
                children:
                  _ || _
                    ? (0, _.jsx)(_, {
                        strVideoID: _?.strVideoID || _,
                        nStartSeconds: _?.nStartSeconds,
                        _: _,
                        strImgOverrideUrl: _,
                        bShowDemoButton: _,
                        strExtraParams: _,
                        bTwitchVideo: !!_,
                      })
                    : (0, _.jsx)(_._, {
                        imageType: "header",
                        capsule: _,
                        bShowDemoButton: _,
                        strExtraParams: _,
                        bPreferAssetWithoutOverride: !1,
                      }),
              }),
              (0, _.jsxs)("div", {
                className: _().ReviewTextSection,
                children: [
                  (0, _.jsx)("a", {
                    className: _().GameTitle,
                    href: _,
                    children: _.GetName(),
                  }),
                  (0, _.jsxs)("div", {
                    className: _().RecommendationTypeAndDate,
                    children: [
                      (0, _.jsx)(_, {
                        type: _,
                      }),
                      (0, _.jsx)("div", {
                        className: _().ReviewDate,
                        children:
                          _ || !_
                            ? (0, _._)(
                                "#EventModTile_ReleaseDate",
                                _.GetFormattedSteamReleaseDate(),
                              )
                            : (0, _._)(_),
                      }),
                    ],
                  }),
                  !!_ &&
                    (0, _.jsx)("div", {
                      className: _().ReviewBlurb,
                      children: (0, _._)("#SteamCurator_ReviewTextQuoted", _),
                    }),
                  !!_ &&
                    (0, _.jsx)(_, {
                      url: _,
                    }),
                ],
              }),
            ],
          });
        });
        function _(_) {
          const {
              strVideoID: _,
              nStartSeconds: _,
              _: _,
              strImgOverrideUrl: _,
              bShowDemoButton: _,
              strExtraParams: _,
              bTwitchVideo: _,
            } = _,
            _ = 300,
            { data: _ } = (0, _._)(_);
          return (0, _.jsxs)("div", {
            className: _().YouTubeCapsule,
            children: [
              (0, _.jsx)("div", {
                className: _().YouTubeCtn,
                children: _
                  ? (0, _.jsx)(_, {
                      videoid: _,
                      posterURL: _ ? (0, _._)(_, "header") : void 0,
                      imageClassnames: _().YouTubePreviewImage,
                      autoplay: !0,
                    })
                  : (0, _.jsx)(_._, {
                      video: _,
                      startSeconds: _,
                      autoplay: !0,
                      autopause: !0,
                      showFullscreenBtn: !0,
                      controls: !0,
                      preloadYoutubeScripts: !0,
                      playsInline: !0,
                      imageClassnames: _().YouTubePreviewImage,
                      altImg: _,
                    }),
              }),
              (0, _.jsxs)("div", {
                className: _().YouTubeCapsuleBottomBar,
                children: [
                  (0, _.jsx)("div", {
                    className: _().GameImageCtn,
                    children: (0, _.jsx)(_._, {
                      _: _,
                      bShowDemoButton: _,
                      nDelayShowMs: _,
                      strExtraParams: _,
                      hoverProps: {
                        direction: "overlay-center",
                        style: {
                          minWidth: "300px",
                        },
                      },
                      children: (0, _.jsx)("img", {
                        className: _().GameImage,
                        src: _ ? (0, _._)(_, "library_capsule") : void 0,
                      }),
                    }),
                  }),
                  (0, _.jsx)(_._, {
                    _: _,
                    strClassName: _().FullWidth,
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          switch (_.type) {
            case _._._:
              return (0, _.jsx)("div", {
                className: _().Recommended,
                children: (0, _._)("#SteamCurator_Recommended"),
              });
            case _._._:
              return (0, _.jsx)("div", {
                className: _().NotRecommended,
                children: (0, _._)("#SteamCurator_NotRecommended"),
              });
            case _._._:
              return (0, _.jsx)("div", {
                className: _().Informational,
                children: (0, _._)("#SteamCurator_Informational"),
              });
            default:
              return null;
          }
        }
        function _(_) {
          let _ = (0, _._)(_.url);
          (0, _._)(_) &&
            (_ =
              (_._.IN_CLIENT ? "steam://openurl_external/" : "") +
              _._.COMMUNITY_BASE_URL +
              "linkfilter/?url=" +
              _);
          const _ = (0, _._)(_.url),
            _ = (0, _._)(_.url);
          return (0, _.jsxs)("div", {
            className: _().FullReviewLink,
            children: [
              (0, _.jsx)(_._, {
                className: _().FullReviewAnchor,
                href: _,
                rel: "noopener nofollow",
                preferredFocus: !1,
                autoFocus: !1,
                children: (0, _._)(
                  _
                    ? "#SteamCurator_WatchFullReview"
                    : "#SteamCurator_ReadFullReview",
                ),
              }),
              (0, _.jsx)("div", {
                className: _().FullReviewDomain,
                children: (0, _._)(
                  "#SteamCurator_ReviewLinkHostnameBracketed",
                  _,
                ),
              }),
            ],
          });
        }
      },
      chunkid: (module) => {
        module.exports = {
          BreadContainer: "YaL4BAoqywnKnb5jbU_il",
        };
      },
      chunkid: (module) => {
        module.exports = {
          VideoReviewCtn: "V6zz2NPPxfnGjAchCe56r",
          YouTubePreviewImage: "_3joL1ZVcmC-6lCOLfjuIq7",
          TwitchPlayer: "_1Q0Ym9jG7UCFeD3c9LbOSy",
        };
      },
      chunkid: (module) => {
        module.exports = {
          YoutubePreviewImage: "_3bVwKmAuh70AH8XVDnyf5z",
          YoutubePlayer: "_3oXEPQSJY3yN1IVhfxeSy0",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          CuratorListCtn: "_2gWFdH7drZgtMXI_JjbaEe",
          CuratorMoreCtn: "_16t3PcvDZGiwAgEfjIWfND",
          TopReviewInfo: "_3SZBzK03VjBtPI7wx3Z1Pt",
          SaleBanner: "_1wbf-cPcI2i7efNOekBbhu",
          Title: "_1MhFdjaeyR9X7HgdfjSXqG",
          Blurb: "rrcHStOnbRfOfaohgKQ55",
          VideoReviewCtn: "RojwrkrnYMOZ6Ab8k-v1r",
          YouTubePreviewImage: "eObSf_yyzMWHlRgVTfVWa",
          CuratorList: "_1VI6Grz2uioikkf0a6Tw0k",
          CuratorListGrid: "qJM6j2qrVRIXCMuuxmhQA",
          CuratorReview: "_31hoQDSYDcWbwweAx-nymb",
          CapsuleCtn: "MY9Lke1NKqCw4L796pl4u",
          YouTubeCapsule: "_1siEspisMPcFe74Nhb8Y1h",
          YouTubeCtn: "_1uz1Wrv0OB4A4PzZFy-7ze",
          YouTubeCapsuleBottomBar: "_1d9MpJzvsoRCYuymkRgyB7",
          GameImageCtn: "_220F7CEs1Z6JO8qX1VpEin",
          GameImage: "_7gTF4ahFWgDDx5lj6B81t",
          FullWidth: "_3ditFur3nylrloT3tIcfyH",
          ReviewTextSection: "_1597WAIOnVRCDEZFRnmiOg",
          GameTitle: "nl2T_2iAiLU-LBJ0Vlt1g",
          RecommendationTypeAndDate: "_2lz6uYceCiIZbZ9gceZI-p",
          Recommended: "_3v9QioBsRmE5yW7CqZmejk",
          NotRecommended: "_3iOGokAKIIBxl8O2K4ReUO",
          Informational: "_261FhJXj3ppl0_SvJBDLeL",
          ReviewDate: "HCiYl0KEiRyfIc-3K7r51",
          ReviewBlurb: "_1y_bxMLn9yOlKneJzFSPkc",
          FullReviewLink: "_3_8G-9J9Ck495Bbx1AtzXb",
          FullReviewAnchor: "_3pWCNXNZaWp_KqFU6n38sy",
          FullReviewDomain: "_2R37NZqjmxkImiPnoElHtm",
        };
      },
      chunkid: (module) => {
        module.exports = {
          BreadContainer: "GkVFIKIAijTGzfSc4BEQl",
          HeaderContent: "_2nPcyDvQVywsCXSLbgnUQp",
        };
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
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
          _ = (function (_) {
            (0, _._)(_, _);
            function _() {
              for (
                var _, _ = arguments.length, _ = new Array(_), _ = 0;
                _ < _;
                _++
              )
                _[_] = arguments[_];
              return (
                (_ = _.call.apply(_, [this].concat(_)) || this),
                (_.history = (0, _._)(_.props)),
                _
              );
            }
            var _ = _.prototype;
            return (
              (_.render = function () {
                return _.createElement(_._, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              _
            );
          })(_.Component),
          _ = (function (_) {
            (0, _._)(_, _);
            function _() {
              for (
                var _, _ = arguments.length, _ = new Array(_), _ = 0;
                _ < _;
                _++
              )
                _[_] = arguments[_];
              return (
                (_ = _.call.apply(_, [this].concat(_)) || this),
                (_.history = (0, _._)(_.props)),
                _
              );
            }
            var _ = _.prototype;
            return (
              (_.render = function () {
                return _.createElement(_._, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              _
            );
          })(_.Component),
          _ = function (_, _) {
            return typeof _ == "function" ? _(_) : _;
          },
          _ = function (_, _) {
            return typeof _ == "string" ? (0, _._)(_, null, null, _) : _;
          },
          _ = function (_) {
            return _;
          },
          _ = _.forwardRef;
        typeof _ > "u" && (_ = _);
        function _(_) {
          return !!(_.metaKey || _.altKey || _.ctrlKey || _.shiftKey);
        }
        var _ = _(function (_, _) {
            var _ = _.innerRef,
              _ = _.navigate,
              _ = _.onClick,
              _ = (0, _._)(_, ["innerRef", "navigate", "onClick"]),
              _ = _.target,
              _ = (0, _._)({}, _, {
                onClick: function (_) {
                  try {
                    _ && _(_);
                  } catch (_) {
                    throw (_.preventDefault(), _);
                  }
                  !_.defaultPrevented &&
                    _.button === 0 &&
                    (!_ || _ === "_self") &&
                    !_(_) &&
                    (_.preventDefault(), _());
                },
              });
            return (
              _ !== _ ? (_.ref = _ || _) : (_.ref = _), _.createElement("a", _)
            );
          }),
          _ = _(function (_, _) {
            var _ = _.component,
              _ = _ === void 0 ? _ : _,
              _ = _.replace,
              _ = _._,
              _ = _.innerRef,
              _ = (0, _._)(_, ["component", "replace", "to", "innerRef"]);
            return _.createElement(_._.Consumer, null, function (_) {
              _ || (0, _._)(!1);
              var _ = _.history,
                _ = _(_(_, _.location), _.location),
                _ = _ ? _.createHref(_) : "",
                _ = (0, _._)({}, _, {
                  href: _,
                  navigate: function () {
                    var _ = _(_, _.location),
                      _ = (0, _._)(_.location) === (0, _._)(_(_)),
                      _ = _ || _ ? _.replace : _.push;
                    _(_);
                  },
                });
              return (
                _ !== _ ? (_.ref = _ || _) : (_.innerRef = _),
                _.createElement(_, _)
              );
            });
          });
        if (0) var _, _;
        var _ = function (_) {
            return _;
          },
          _ = _.forwardRef;
        typeof _ > "u" && (_ = _);
        function _() {
          for (var _ = arguments.length, _ = new Array(_), _ = 0; _ < _; _++)
            _[_] = arguments[_];
          return _.filter(function (_) {
            return _;
          }).join(" ");
        }
        var _ = _(function (_, _) {
          var _ = _["aria-current"],
            _ = _ === void 0 ? "page" : _,
            _ = _.activeClassName,
            _ = _ === void 0 ? "active" : _,
            _ = _.activeStyle,
            _ = _.className,
            _ = _.exact,
            _ = _.isActive,
            _ = _.location,
            _ = _.sensitive,
            _ = _.strict,
            _ = _.style,
            _ = _._,
            _ = _.innerRef,
            _ = (0, _._)(_, [
              "aria-current",
              "activeClassName",
              "activeStyle",
              "className",
              "exact",
              "isActive",
              "location",
              "sensitive",
              "strict",
              "style",
              "to",
              "innerRef",
            ]);
          return _.createElement(_._.Consumer, null, function (_) {
            _ || (0, _._)(!1);
            var _ = _ || _.location,
              _ = _(_(_, _), _),
              _ = _.pathname,
              _ = _ && _.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
              _ = _
                ? (0, _._)(_.pathname, {
                    path: _,
                    exact: _,
                    sensitive: _,
                    strict: _,
                  })
                : null,
              _ = !!(_ ? _(_, _) : _),
              _ = typeof _ == "function" ? _(_) : _,
              _ = typeof _ == "function" ? _(_) : _;
            _ && ((_ = _(_, _)), (_ = (0, _._)({}, _, _)));
            var _ = (0, _._)(
              {
                "aria-current": (_ && _) || null,
                className: _,
                style: _,
                _: _,
              },
              _,
            );
            return (
              _ !== _ ? (_.ref = _ || _) : (_.innerRef = _),
              _.createElement(_, _)
            );
          });
        });
        if (0) var _;
      },
    },
  ]);
})();
