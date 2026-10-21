(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [20976],
    {
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
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        async function _(_) {
          const _ = `${_._.COMMUNITY_BASE_URL}ogg/${_}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return _(_);
        }
        async function _(_) {
          const _ = _._.InitFromClanID(_),
            _ = `${_._.COMMUNITY_BASE_URL}gid/${_.ConvertTo64BitString()}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return _(_);
        }
        async function _(_) {
          const _ = `${_._.COMMUNITY_BASE_URL}groups/${_}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return _(_);
        }
        async function _(_) {
          const _ = `${_._.COMMUNITY_BASE_URL}games/${_}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return _(_);
        }
        async function _(_) {
          const _ = await fetch(_, {
            method: "GET",
          });
          if (_.status == 404) return null;
          if (!_._) throw new Error(`Server returned ${_.status}`);
          const _ = await _.json();
          return _.success != _._ ? null : _;
        }
        function _(_) {
          return ["clantoclaninfo", _];
        }
        function _(_) {
          return ["apptoclanid", _];
        }
        function _(_, _ = "group") {
          return ["vanitytoclanid", _, _?.toLocaleLowerCase()];
        }
        function _(_) {
          const _ = _?.[0];
          return (
            _ == "clantoclaninfo" || _ == "apptoclanid" || _ == "vanitytoclanid"
          );
        }
        const _ = new WeakSet();
        function _(_) {
          if (!_.has(_)) {
            _.add(_);
            for (const _ of [
              ["clantoclaninfo"],
              ["apptoclanid"],
              ["vanitytoclanid"],
            ])
              _.setQueryDefaults(_, {
                staleTime: 1 / 0,
                gcTime: 1 / 0,
                retry: !1,
              });
          }
        }
        const _ = new WeakMap();
        function _(_) {
          if (!_) return null;
          let _ = _.get(_);
          return (
            _ ||
              ((_ = {
                ..._,
                clanSteamID: _.clanSteamIDString
                  ? new _._(_.clanSteamIDString)
                  : _._.InitFromClanID(_.clanAccountID),
              }),
              _.set(_, _)),
            _
          );
        }
        function _(_) {
          const { msg: _, success: _, ..._ } = _;
          return {
            ..._,
            rss_language: _.rss_language ? _.rss_language : _.Bhc,
          };
        }
        function _(_, _) {
          if (!_) return null;
          _(_);
          const _ = _(_);
          return (
            _.setQueryData(_(_.clanAccountID), _),
            _.appid && _.setQueryData(_(_.appid), _.clanAccountID),
            _.vanity_url &&
              _.setQueryData(_(_.vanity_url, "group"), _.clanAccountID),
            _
          );
        }
        function _(_, _) {
          for (const _ of _) _(_, _);
        }
        function _(_) {
          const _ = (0, _._)();
          return (0, _._)(_(_, _));
        }
        function _(_, _) {
          return (
            _(_),
            {
              queryKey: _(_ ?? null),
              queryFn: async () => (_ ? _(_, await _(_)) : null),
              enabled: _ !== void 0,
              select: _,
            }
          );
        }
        function _(_, _) {
          return (
            _(_),
            {
              queryKey: _(_),
              queryFn: async () => _(_, await _(_))?.clanAccountID ?? null,
              enabled: !!_,
            }
          );
        }
        function _(_, _, _ = "group") {
          return (
            _(_),
            {
              queryKey: _(_, _),
              queryFn: async () => {
                if (_ == "store") {
                  const _ = _.getQueryData(_(_, "group"));
                  if (_) return _;
                }
                const _ = _ == "store" ? await _(_) : await _(_);
                return _(_, _)?.clanAccountID ?? null;
              },
              enabled: !!_,
            }
          );
        }
        function _(_) {
          return _.isPending ? void 0 : (_.data ?? null);
        }
        function _(_) {
          return _(_.BIsClanAccount() ? _.GetAccountID() : void 0);
        }
        function _(_) {
          const _ = useQueryClient(),
            _ = useQuery(_(_, _));
          return _(_ ? _(_) : void 0);
        }
        function _(_, _ = "group") {
          const _ = (0, _._)(),
            _ = (0, _._)(_(_, _, _));
          return _(_ ? _(_) : void 0);
        }
        function _(_, _) {
          if (_) return _(_.getQueryData(_(_))) ?? void 0;
        }
        function _(_, _) {
          if (_) return _(_.getQueryData(_(_)), _);
        }
        function _(_, _, _) {
          if (!_) return;
          const _ = _ ? [_] : ["store", "group"];
          for (const _ of _) {
            const _ = _(_.getQueryData(_(_, _)), _);
            if (_) return _;
          }
        }
        async function _(_, _) {
          return _ ? _(await _.fetchQuery(_(_, _))) : null;
        }
        async function _(_, _) {
          return _ ? _(await _.fetchQuery(_(_, _)), _) : null;
        }
        async function _(_, _, _ = "group") {
          return _ ? _(await _.fetchQuery(_(_, _, _)), _) : null;
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
          _ = __webpack_require__._(_);
        function _(_, _) {
          return new (_())(
            async (_) => {
              const _ = [..._],
                _ = await _.xtC.GetPlayerLinkDetails(_, {
                  steamids: _,
                }),
                _ = new Map();
              return (
                _.Body()
                  .accounts()
                  .forEach((_) => {
                    const _ = _.toObject();
                    _.set(_.public_data.steamid, _);
                  }),
                _.map((_) => _.get(_) ?? null)
              );
            },
            {
              maxBatchSize: 100,
              cache: !1,
              ..._,
            },
          );
        }
        function _(_) {
          return (0, _._)("PlayerLinkDetails", () => _(_));
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
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 4,
          _ = 8,
          _ = 16,
          _ = 32,
          _ = 64,
          _ = 128,
          _ = 256,
          _ = 512,
          _ = 1024,
          _ = 2048,
          _ = 4096,
          _ = 8192,
          _ = 16384,
          _ = 32768,
          _ = 65536,
          _ = 1073741824,
          _ = null;
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        function _(_) {
          return Object.prototype.toString.call(_) === "[object Object]";
        }
        function _(_) {
          if (!_(_)) return !1;
          const _ = _.constructor;
          if (typeof _ > "u") return !0;
          const _ = _.prototype;
          return !(
            !_(_) || !Object.prototype.hasOwnProperty.call(_, "isPrototypeOf")
          );
        }
        function _(..._) {
          return JSON.stringify(_, (_, _) => {
            if (_(_)) {
              const _ = {};
              return (
                Object.keys(_)
                  .sort()
                  .forEach((_) => {
                    _[_] = _[_];
                  }),
                _
              );
            }
            return _;
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = (0, _.createContext)({
          instances: {},
          factories: {},
        });
        function _(_) {
          const { name: _, fnFactory: _, children: _ } = _,
            _ = React.useContext(_),
            [_] = useState({}),
            _ = useMemo(
              () => ({
                instances: _,
                factories: {
                  ..._.factories,
                  [_]: _,
                },
                parent: _,
              }),
              [_, _, _],
            );
          return jsx(_.Provider, {
            value: _,
            children: _,
          });
        }
        function _(_, _) {
          const _ = (0, _.useContext)(_),
            _ = typeof _ == "string" ? _ : _(..._);
          let _ = _;
          for (; _; ) {
            if (_ in _.instances) return _.instances[_];
            if (_ in _.factories) break;
            _ = _.parent;
          }
          const _ = (_?.factories[_] ?? _)();
          return ((_ ?? _).instances[_] = _), _;
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
          _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = "061818254b2c99ac49e6626adb128ed1282a392f",
          _ = "338200c5d6c4d9bdcf6632642a2aeb591fb8a5c2.gif",
          _ = "338200c5d6c4d9bdcf6632642a2aeb591fb8a5c2.gif",
          _ = 120;
        class _ {
          m_unAppID;
          m_bInitialized = !1;
          m_strName;
          m_strIconURL;
          m_dtUpdatedFromServer;
          m_eAppType;
          constructor(_) {
            this.m_unAppID = _;
          }
          get appid() {
            return this.m_unAppID;
          }
          get is_initialized() {
            return this.m_bInitialized;
          }
          get is_valid() {
            return this.m_bInitialized && !!this.m_strName;
          }
          get name() {
            return this.m_strName;
          }
          get icon_url_no_default() {
            return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, _);
          }
          get icon_url() {
            return this.BuildAppURL(this.m_strIconURL, _);
          }
          get time_updated_from_server() {
            return this.m_dtUpdatedFromServer;
          }
          get apptype() {
            return this.m_eAppType;
          }
          BIsApplicationOrTool() {
            return this.apptype == _._ || this.apptype == _._;
          }
          BuildAppURL(_, _) {
            return _
              ? _._.MEDIA_CDN_COMMUNITY_URL +
                  "images/apps/" +
                  this.appid +
                  "/" +
                  _ +
                  ".jpg"
              : (0, _._)(_);
          }
          DeserializeFromMessage(_) {
            (this.m_bInitialized = !0),
              (this.m_strName = _.name()),
              (this.m_strIconURL = _.icon()),
              (this.m_dtUpdatedFromServer = new Date()),
              (this.m_eAppType = _.app_type());
          }
          DeserializeFromAppOverview(_) {
            _.icon_hash() && _.app_type() != _._
              ? ((this.m_bInitialized = !0),
                (this.m_strName = _.display_name()),
                (this.m_strIconURL = _.icon_hash()),
                (this.m_dtUpdatedFromServer = new Date()),
                (this.m_eAppType = _.app_type()))
              : (this.m_bInitialized = !1);
          }
          DeserializeFromCacheObject(_) {
            try {
              (this.m_strName = _.strName),
                (this.m_strIconURL = _.strIconURL),
                (this.m_dtUpdatedFromServer = new Date(_.strUpdatedFromServer)),
                (this.m_eAppType = _.eAppType),
                (this.m_bInitialized = !0);
            } catch {}
          }
          SerializeToCacheObject() {
            return (
              (0, _._)(
                this.m_bInitialized,
                "Attempting to serialize an uninitialized AppInfo object for caching!",
              ),
              this.m_bInitialized
                ? {
                    strName: this.m_strName,
                    strIconURL: this.m_strIconURL,
                    strUpdatedFromServer: this.m_dtUpdatedFromServer.toJSON(),
                    eAppType: this.m_eAppType,
                  }
                : null
            );
          }
        }
        class _ {}
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        const _ = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
        function _(_, _) {
          let _ = ".jpg";
          (!_ || _ === "0000000000000000000000000000000000000000") && (_ = _),
            _.length == 44 && ((_ = _.substr(-4)), (_ = _.substr(0, 40)));
          let _ = _._.AVATAR_BASE_URL;
          return (
            _ ||
              ((_ = _._.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
              (_ += _.substr(0, 2) + "/")),
            (_ += _),
            _ && _ != "small" && (_ += "_" + _),
            (_ += _),
            _
          );
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
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            GreenEnvelope: () => _,
            default: () => _,
            useSteamNotifications: () => _,
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          if (!_) return;
          const _ = typeof _ == "string" ? _ : _.locString,
            _ = typeof _ == "string" ? [] : _.params || [];
          if (_) return _[0] !== "#" ? _ : (0, _._)(_, ..._);
        }
        function _(_, _) {
          return _.useMemo(() => {
            if (_ === void 0) return null;
            let _ = (0, _._)(_);
            const _ = (0, _._)(_);
            if (!_ || !_) return null;
            const _ =
                typeof _.displayNameLoc != "function"
                  ? {
                      locString: _.displayNameLoc,
                    }
                  : _.displayNameLoc(_),
              _ =
                typeof _.titleLoc != "function"
                  ? {
                      locString: _.titleLoc,
                    }
                  : _.titleLoc(_),
              _ =
                typeof _.bodyLoc != "function"
                  ? {
                      locString: _.bodyLoc,
                    }
                  : _.bodyLoc(_),
              _ = typeof _.image != "function" ? _.image : _.image(_),
              _ = typeof _.link != "function" ? _.link : _.link(_);
            return {
              display_name: _(_),
              title: _(_),
              body: _(_),
              image: _,
              link: _,
            };
          }, [_, _]);
        }
        function _(_, _) {
          return _.useMemo(() => {
            const _ = _,
              _ = (0, _._)(_),
              _ = (0, _._)(_);
            if (!_) return null;
            const _ =
                typeof _.titleLoc == "string" ? _.titleLoc : _.titleLoc(_),
              _ = typeof _.bodyLoc == "string" ? _.bodyLoc : _.bodyLoc(_),
              _ = typeof _.url == "string" ? _.url : _.url(_),
              _ =
                typeof _.steamidAttribute == "string"
                  ? _.steamidAttribute
                  : _.steamidAttribute(_),
              _ = _ && _[_];
            return {
              strTitleLoc: _,
              strBodyLoc: _,
              strUrl: _,
              steamid: _,
            };
          }, [_, _]);
        }
        function _(_) {
          return _.useMemo(() => ((0, _._)(_.type) ? (0, _._)(_) : null), [_]);
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = !0;
        function _(_) {
          let {
              onActivate: _,
              icon: _,
              body: _,
              eUIMode: _,
              classNames: _,
            } = _,
            _ = _,
            _ = _().PinnedTemplate;
          return (
            _ == _.ogI
              ? (_ = _().PinnedTemplateDesktop)
              : _ == _.yrU && (_ = _().PinnedTemplateWeb),
            (_ = (0, _._)(_, _)),
            (0, _.jsx)(_._, {
              className: _,
              onActivate: _,
              children: (0, _.jsx)("div", {
                className: _().Content,
                children: (0, _.jsxs)("div", {
                  className: _().PinnedBody,
                  children: [
                    (0, _.jsx)("span", {
                      className: _().Icon,
                      children: _,
                    }),
                    _,
                  ],
                }),
              }),
            })
          );
        }
        function _(_) {
          const {
            count: _,
            icon: _,
            onActivate: _,
            strBody: _,
            bAlwaysShow: _,
            eUIMode: _,
            classNames: _,
            visible: _,
          } = _;
          return !_ && !_
            ? null
            : (0, _.jsx)(_, {
                icon: _,
                body: _,
                onActivate: _,
                eUIMode: _,
                classNames: _,
                visible: _,
              });
        }
        var _ = ((_) => (
          (_[(_.none = 0)] = "none"),
          (_[(_.loadingActive = 1)] = "loadingActive"),
          (_[(_.loadingComplete = 2)] = "loadingComplete"),
          _
        ))(_ || {});
        function _(_) {
          let {
            nUnread: _,
            location: _,
            eUIMode: _,
            bLoading: _,
            footer: _,
            bNewIndicator: _,
          } = _;
          const [_, _] = _.useState(_ ? 1 : 0),
            [_, _] = _.useState(void 0);
          _.useEffect(() => {
            _ == 1 && !_ ? _(2) : _ == 2 && _ && _(1);
          }, [_, _]),
            _.useEffect(() => {
              let _ =
                parseInt(_().loadinganimationiterationcount) *
                parseInt(_().loadinganimationduration) *
                1e3;
              const _ = window.setTimeout(() => _(0), _);
              return () => window.clearTimeout(_);
            }, []),
            _.useEffect(() => {
              _ && _ > 0 && _ !== _().Unread && _ != _.miK && _ != _.PN1
                ? _(_().Unread)
                : !_ && _ == _().Unread && _(_().MarkedRead);
            }, [_, _, _]);
          let _ = _.onActivate;
          _ || (_ = () => console.log("Missing activate function")),
            _ == 1 && (_ = void 0);
          let _ = _().StandardTemplate;
          _ == _.oYe
            ? (_ = _().AllNotificationsTemplate)
            : _ == _.miK
              ? (_ = _().DesktopToastTemplate)
              : (_ == _.ogI || _ == _.yrU) && (_ = _().StandardTemplateDesktop);
          let _ = null;
          if (_ != 0 && _ != _.miK && _ != _.PN1) {
            let _ = _ == 2 ? _().Hide : null;
            _ = (0, _.jsxs)("div", {
              className: (0, _._)(_().LoadingTemplate, _),
              children: [
                (0, _.jsx)("div", {
                  className: (0, _._)(
                    _().StandardLogoDimensions,
                    _().ShimmerLogo,
                  ),
                }),
                (0, _.jsxs)("div", {
                  className: _().Content,
                  children: [
                    (0, _.jsx)("div", {
                      className: (0, _._)(_().Header, _().ShimmerHeader),
                    }),
                    (0, _.jsx)("div", {
                      className: (0, _._)(_().Body, _().ShimmerBody),
                    }),
                  ],
                }),
              ],
            });
          }
          return (0, _.jsxs)(_._, {
            onActivate: _,
            className: _().StandardTemplateContainer,
            onOptionsButton: _.onOptionsButton,
            onOptionsActionDescription: _.onOptionsButtonDesc,
            children: [
              (0, _.jsxs)("div", {
                className: (0, _._)(_, _),
                children: [
                  (0, _.jsx)("div", {
                    className: _().StandardLogoDimensions,
                    children: _.logo,
                  }),
                  _.personaStatus &&
                    (0, _.jsx)("div", {
                      className: (0, _._)(_().AvatarStatus, _.personaStatus),
                    }),
                  (0, _.jsx)("div", {
                    className: _().Content,
                    children: _.children,
                  }),
                  _,
                  _ &&
                    (0, _.jsx)(_, {
                      location: _,
                    }),
                ],
              }),
              _ || null,
            ],
          });
        }
        function _(_) {
          const { location: _ } = _;
          return !_ || _ != _.B3I
            ? null
            : (0, _.jsx)("div", {
                className: _().NewIndicator,
                children: (0, _.jsx)(_.jlt, {}),
              });
        }
        function _(_) {
          let {
            icon: _,
            title: _,
            timestamp: _,
            location: _,
            fnRenderTimestamp: _,
          } = _;
          const _ = !!_ && (_ == _.B3I || _ == _.oYe);
          let _;
          return (
            _ == _.oYe ? (_ = _) : (_ = _ ?? _),
            (0, _.jsxs)("div", {
              className: _().Header,
              children: [
                (0, _.jsx)(_, {
                  icon: _,
                }),
                !!_ &&
                  (0, _.jsx)(_, {
                    title: _,
                  }),
                _ &&
                  _({
                    timestamp: _,
                  }),
              ],
            })
          );
        }
        function _(_) {
          return (0, _.jsxs)(_.Fragment, {
            children: [
              !!_.icon &&
                (0, _.jsx)("div", {
                  className: _().Icon,
                  children: _.icon,
                }),
              " ",
            ],
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _().Title,
            children: _.title,
          });
        }
        function _(_) {
          let _ = (0, _._)(
            _().StandardNotificationDescription,
            _.multiline && _().Multiline,
          );
          return (0, _.jsx)("div", {
            className: _,
            children: _.children,
          });
        }
        function _(_) {
          let _ = (0, _._)(
            _().StandardNotificationSubText,
            _.multiline && _().Multiline,
          );
          return (0, _.jsx)("div", {
            className: _,
            children: _.children,
          });
        }
        function _(_) {
          if (_.timestamp === void 0) return null;
          let _ = new Date(),
            _ = new Date(_.timestamp * 1e3),
            _ = (0, _._)(_.timestamp);
          return (
            (0, _._)(_, _) || (_ = (0, _._)(_.timestamp, !1, !1, !1) + " " + _),
            (0, _.jsx)("div", {
              className: _().Timestamp,
              children: _,
            })
          );
        }
        function _(_) {
          if (_.timestamp === void 0) return null;
          let _ = new Date(),
            _ = new Date(_.timestamp * 1e3),
            _ = (0, _._)(_, _)
              ? (0, _._)(_.timestamp)
              : (0, _._)(_.timestamp, !1, !1, !1);
          return (0, _.jsx)("div", {
            className: _().Timestamp,
            children: _,
          });
        }
        function _(_) {
          const { text: _ } = _;
          return jsx("div", {
            className: styles.BottomBar,
            children: _,
          });
        }
        function _(_) {
          let {
              playerName: _,
              nickName: _,
              parenthesizeNickNames: _,
              state: _,
            } = _,
            _ = !!_,
            _ = _ && !_,
            _ = _ ? _ : _,
            _ = _ == "ingame" ? styles.IngameTitle : styles.OnlineTitle;
          return jsxs(Fragment, {
            children: [
              jsx("span", {
                className: classnames(_),
                children: _,
              }),
              _ &&
                _ &&
                jsxs("span", {
                  className: classnames(styles.PlayerNickName, styles.FullName),
                  children: ["(", _, ")"],
                }),
              _ &&
                jsx("span", {
                  className: styles.PlayerNickName,
                  children: " *",
                }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return _ == _.PN1;
        }
        function _(_, _) {
          return _.useCallback(
            (_) => {
              _ && _(_), _ && _();
            },
            [_, _],
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          let {
              onActivate: _,
              onDismiss: _,
              logo: _,
              icon: _,
              title: _,
              body: _,
              personaStatus: _,
              className: _,
              singleLineOnly: _,
              fullWidth: _,
            } = _,
            _ = _(_, _),
            _ = (_) => {
              _.button == 1 && _ && _();
            };
          return (0, _.jsxs)(_._, {
            className: (0, _._)(_().ShortTemplate, !_ && _().TwoLine, _),
            onActivate: _,
            onMouseDown: _,
            children: [
              (0, _.jsx)("div", {
                className: _().ShortLogoDimensions,
                children: _,
              }),
              _.personaStatus &&
                (0, _.jsx)("div", {
                  className: (0, _._)(_().AvatarStatus, _),
                }),
              (0, _.jsxs)("div", {
                className: (0, _._)(_().Content, _ && _().FullWidth),
                children: [
                  (0, _.jsxs)("div", {
                    className: _().Header,
                    children: [
                      !!_ &&
                        (0, _.jsx)("div", {
                          className: _().Icon,
                          children: _,
                        }),
                      (0, _.jsx)("div", {
                        className: _().Title,
                        children: _,
                      }),
                    ],
                  }),
                  (0, _.jsx)("div", {
                    className: _().Body,
                    children: _,
                  }),
                ],
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          switch (_) {
            case _._._:
              return (0, _.jsx)(_.ilR, {});
            case _._._:
              return (0, _.jsx)(_.Cv4, {});
            default:
              return (0, _.jsx)(_.Qte, {});
          }
        }
        function _(_) {
          let {
            fallbackLogo: _,
            data: _,
            location: _,
            icon: _,
            timestamp: _,
            fnRenderTimestamp: _,
            onHide: _,
          } = _;
          const _ = typeof _?.image == "number",
            _ = _
              ? {
                  appid: _.image,
                }
              : void 0,
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            _ = _?.display_name ?? "",
            _ = _?.title ?? _?.body,
            _ = _?.title ? _.body : null,
            _ = _(_),
            _ = _ && (!_ || !_),
            [_, _] = _.useState(!1),
            _ = () => _(!0);
          let _ = null;
          if (_) _ = _(_, _, _);
          else {
            const _ = _ ? _().ShortLogoDimensions : _().StandardLogoDimensions;
            _ =
              _?.image && !_
                ? (0, _.jsx)("img", {
                    className: _,
                    src: _.image,
                    onError: _,
                  })
                : _;
          }
          return _
            ? (0, _.jsx)(_, {
                ..._,
                logo: _,
                icon: _,
                title: _,
                body: _,
              })
            : (0, _.jsx)(_, {
                children: (0, _.jsxs)(_, {
                  logo: _,
                  bLoading: _,
                  ..._,
                  children: [
                    (0, _.jsx)(_, {
                      icon: _,
                      title: _,
                      timestamp: _,
                      location: _,
                      fnRenderTimestamp: _,
                    }),
                    (0, _.jsx)(_, {
                      multiline: !_,
                      children: _,
                    }),
                    !!_ &&
                      (0, _.jsx)(_, {
                        children: _,
                      }),
                    _
                      ? (0, _.jsx)(_, {
                          onHide: _,
                        })
                      : null,
                  ],
                }),
              });
        }
        function _(_) {
          let {
            displayName: _,
            location: _,
            icon: _,
            timestamp: _,
            fnRenderTimestamp: _,
            onHide: _,
          } = _;
          const _ = _(_),
            _ = (0, _._)("#SteamNotifications_TradeOffer_Title"),
            _ = _
              ? (0, _._)("#SteamNotifications_TradeOffer_Body_Short", _ ?? "")
              : (0, _._)("#SteamNotifications_TradeOffer_Body"),
            _ = (0, _._)("#SteamNotifications_TradeOffer_Description", _ ?? ""),
            _ = !_;
          return _
            ? (0, _.jsx)(_, {
                ..._,
                logo: _.logo,
                icon: _.icon,
                title: _,
                body: _,
              })
            : (0, _.jsx)(_, {
                children: (0, _.jsxs)(_, {
                  bLoading: _,
                  ..._,
                  children: [
                    (0, _.jsx)(_, {
                      icon: _,
                      title: _,
                      timestamp: _,
                      location: _,
                      fnRenderTimestamp: _,
                    }),
                    (0, _.jsx)(_, {
                      children: _,
                    }),
                    (0, _.jsx)(_, {
                      children: _,
                    }),
                    _
                      ? (0, _.jsx)(_, {
                          onHide: _,
                        })
                      : null,
                  ],
                }),
              });
        }
        const _ = (_) => {
          let {
            location: _,
            icon: _,
            timestamp: _,
            fnRenderTimestamp: _,
            onHide: _,
          } = _;
          const _ = _(_),
            _ = (0, _._)("#SteamNotifications_TradeReversal_Title"),
            _ = _
              ? (0, _._)("#SteamNotifications_TradeReversal_Body_Short")
              : (0, _._)("#SteamNotifications_TradeReversal_Body"),
            _ = (0, _._)("#SteamNotifications_TradeReversal_Description");
          return _
            ? (0, _.jsx)(_, {
                ..._,
                logo: _.logo,
                icon: _.icon,
                title: _,
                body: _,
              })
            : (0, _.jsx)(_, {
                children: (0, _.jsxs)(_, {
                  ..._,
                  children: [
                    (0, _.jsx)(_, {
                      icon: _,
                      title: _,
                      timestamp: _,
                      location: _,
                      fnRenderTimestamp: _,
                    }),
                    (0, _.jsx)(_, {
                      children: _,
                    }),
                    (0, _.jsx)(_, {
                      children: _,
                    }),
                    _
                      ? (0, _.jsx)(_, {
                          onHide: _,
                        })
                      : null,
                  ],
                }),
              });
        };
        function _(_) {
          let {
            senderName: _,
            location: _,
            icon: _,
            timestamp: _,
            fnRenderTimestamp: _,
            onHide: _,
          } = _;
          const _ = _(_),
            _ = _
              ? (0, _._)("#Notification_GiftReceived_Body_Short", _ ?? "")
              : (0, _._)("#Notification_GiftReceived_Body"),
            _ = _
              ? (0, _._)("#Notification_GiftReceived_Description", _)
              : null,
            _ = (0, _._)("#Notification_GiftReceived_Title"),
            _ = !_;
          return _
            ? (0, _.jsx)(_, {
                ..._,
                logo: _.logo,
                icon: _.icon,
                title: _,
                body: _,
              })
            : (0, _.jsx)(_, {
                children: (0, _.jsxs)(_, {
                  bLoading: _,
                  ..._,
                  children: [
                    (0, _.jsx)(_, {
                      icon: _,
                      title: _,
                      timestamp: _,
                      location: _,
                      fnRenderTimestamp: _,
                    }),
                    (0, _.jsx)(_, {
                      multiline: !_,
                      children: _,
                    }),
                    !!_ &&
                      (0, _.jsx)(_, {
                        children: _,
                      }),
                    _
                      ? (0, _.jsx)(_, {
                          onHide: _,
                        })
                      : null,
                  ],
                }),
              });
        }
        function _(_) {
          let {
            requestorName: _,
            requestorAvatarURL: _,
            fallbackLogo: _,
            data: _,
            location: _,
            icon: _,
            timestamp: _,
            fnRenderTimestamp: _,
            onHide: _,
          } = _;
          const _ = _(_);
          let _ = "";
          _ && _.state == _.UXi
            ? (_ = (0, _._)(
                "#SteamNotifications_FriendInvite_Description_AwaitingResponse",
              ))
            : _ && _.state == _._UC
              ? (_ = (0, _._)(
                  "#SteamNotifications_FriendInvite_Description_Friends",
                ))
              : _ &&
                (_ = (0, _._)("#SteamNotifications_FriendInvite_Description"));
          const [_, _] = _.useState(!1),
            _ = () => _(!0);
          let _ = _;
          if (_ && !_) {
            const _ = _.state == _._UC && _ != _.PN1,
              _ = _ ? _().ShortLogoDimensions : _().StandardLogoDimensions;
            _ = (0, _.jsxs)(_._, {
              style: {
                position: "relative",
              },
              children: [
                _ &&
                  (0, _.jsx)(_.GSe, {
                    className: _().FriendIndicator,
                  }),
                (0, _.jsx)("img", {
                  className: _,
                  src: _,
                  onError: _,
                }),
              ],
            });
          }
          const _ =
              _ || (0, _._)("#SteamNotifications_FriendInvite_Body_Generic"),
            _ = !_;
          return _
            ? (0, _.jsx)(_, {
                ..._,
                logo: _,
                icon: _.icon,
                title: (0, _._)("#Notification_FriendInvite_Title"),
                body: _,
              })
            : (0, _.jsx)(_, {
                children: (0, _.jsxs)(_, {
                  logo: _,
                  bLoading: _,
                  ..._,
                  children: [
                    (0, _.jsx)(_, {
                      icon: _,
                      title: (0, _._)("#Notification_FriendInvite_Title"),
                      timestamp: _,
                      location: _,
                      fnRenderTimestamp: _,
                    }),
                    (0, _.jsx)(_, {
                      multiline: !_,
                      children: _,
                    }),
                    !!_ &&
                      (0, _.jsx)(_, {
                        children: _,
                      }),
                    _
                      ? (0, _.jsx)(_, {
                          onHide: _,
                        })
                      : null,
                  ],
                }),
              });
        }
        function _(_) {
          let {
            itemState: _,
            fallbackLogo: _,
            data: _,
            location: _,
            icon: _,
            timestamp: _,
            appName: _,
            fnRenderTimestamp: _,
            nUnread: _,
            onHide: _,
          } = _;
          const [_, _] = _.useState(!1),
            _ = () => _(!0),
            _ = _(_);
          let _ = _;
          if (_?.icon_url && !_) {
            let _ = `${_._.COMMUNITY_CDN_URL}economy/image/${_.icon_url}`,
              _ = _.background_color ? "#" + _.background_color : null;
            const _ = _ ? _().ShortLogoDimensions : _().StandardLogoDimensions;
            _ = (0, _.jsx)(_._, {
              style: {
                position: "relative",
              },
              children: (0, _.jsx)("img", {
                className: _,
                style: {
                  backgroundColor: _ ?? void 0,
                  justifyContent: "center",
                },
                src: _,
                onError: _,
              }),
            });
          }
          const _ = _.appid == 753;
          let _ = null;
          if (_ !== void 0 && _ > 1) {
            const _ = _ - 1;
            _
              ? (_ = (0, _._)("#Notification_Item_RollupMore_Steam", _))
              : _
                ? (_ = (0, _._)("#Notification_Item_RollupMore_GameName", _, _))
                : (_ = (0, _._)("#Notification_Item_RollupMore", _));
          } else
            _ &&
              (_ = _ ? _ : (0, _._)("#Notification_Item_Single_GameName", _));
          const _ = _?.name
              ? _.name
              : (0, _._)("#Notification_Item_Body_Generic"),
            _ = !_;
          if (_) {
            let _ = "";
            return (
              _
                ? (_ =
                    _ > 1
                      ? (0, _._)("#Notification_Item_Body_Short_Plural", _)
                      : (0, _._)("#Notification_Item_Body_Short", _))
                : (_ = (0, _._)("#Notification_Item_Body_Generic")),
              (0, _.jsx)(_, {
                ..._,
                logo: _,
                icon: _.icon,
                title: (0, _._)("#Notification_ItemAnnouncement_Body"),
                body: _,
              })
            );
          }
          return (0, _.jsx)(_, {
            children: (0, _.jsxs)(_, {
              logo: _,
              bLoading: _,
              ..._,
              children: [
                (0, _.jsx)(_, {
                  icon: _,
                  title: (0, _._)("#Notification_ItemAnnouncement_TitleLong"),
                  timestamp: _,
                  location: _,
                  fnRenderTimestamp: _,
                }),
                (0, _.jsx)(_, {
                  multiline: !_,
                  children: _,
                }),
                !!_ &&
                  (0, _.jsx)(_, {
                    children: _,
                  }),
                _
                  ? (0, _.jsx)(_, {
                      onHide: _,
                    })
                  : null,
              ],
            }),
          });
        }
        function _(_) {
          let {
            fallbackLogo: _,
            data: _,
            location: _,
            icon: _,
            timestamp: _,
            fnRenderTimestamp: _,
            onHide: _,
          } = _;
          const _ = _(_),
            _ = _.appid
              ? {
                  appid: _.appid,
                }
              : void 0,
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            _ = _(_, _, _),
            _ = _ && (!_ || !_);
          let _ = "";
          return (
            _.state == _._
              ? (_ =
                  _ && _?.name
                    ? (0, _._)(
                        "#SteamNotification_AsyncGame_Action_Short",
                        _.name,
                      )
                    : (0, _._)("#SteamNotification_AsyncGame_Action"))
              : _.state == _._ &&
                (_ =
                  _ && _?.name
                    ? (0, _._)(
                        "#SteamNotification_AsyncGame_Done_Short",
                        _.name,
                      )
                    : (0, _._)("#SteamNotification_AsyncGame_Done")),
            _
              ? (0, _.jsx)(_, {
                  ..._,
                  logo: _,
                  icon: _.icon,
                  title: (0, _._)("#SteamNotification_AsyncGame_Title"),
                  body: _,
                })
              : (0, _.jsx)(_, {
                  children: (0, _.jsxs)(_, {
                    logo: _,
                    bLoading: _,
                    ..._,
                    children: [
                      (0, _.jsx)(_, {
                        icon: _,
                        title: (0, _._)("#SteamNotification_AsyncGame_Title"),
                        timestamp: _,
                        location: _,
                        fnRenderTimestamp: _,
                      }),
                      (0, _.jsx)(_, {
                        children: _,
                      }),
                      (0, _.jsx)(_, {
                        children: _?.name,
                      }),
                      _
                        ? (0, _.jsx)(_, {
                            onHide: _,
                          })
                        : null,
                    ],
                  }),
                })
          );
        }
        function _(_) {
          const {
              title: _,
              body: _,
              logoUrl: _,
              bDataLoading: _,
              icon: _,
              onHide: _,
              location: _,
              timestamp: _,
              fnRenderTimestamp: _,
              onActivate: _,
              personaStatus: _,
            } = _,
            _ = _(_),
            _ = _ ? _().ShortLogoDimensions : _().StandardLogoDimensions,
            _ = (0, _.jsx)(_._, {
              style: {
                position: "relative",
              },
              children: (0, _.jsx)("img", {
                className: _,
                style: {
                  justifyContent: "center",
                },
                src: _,
              }),
            });
          return _
            ? (0, _.jsx)(_, {
                logo: _,
                icon: _.icon,
                title: _,
                body: _,
                onActivate: _,
                personaStatus: _,
              })
            : (0, _.jsx)(_, {
                children: (0, _.jsxs)(_, {
                  logo: _,
                  bLoading: _,
                  onActivate: _,
                  personaStatus: _,
                  ..._,
                  children: [
                    (0, _.jsx)(_, {
                      icon: _,
                      title: _,
                      timestamp: _,
                      location: _,
                      fnRenderTimestamp: _,
                    }),
                    (0, _.jsx)(_, {
                      multiline: !0,
                      children: _,
                    }),
                    _
                      ? (0, _.jsx)(_, {
                          onHide: _,
                        })
                      : null,
                  ],
                }),
              });
        }
        function _(_) {
          let {
              currentUserSteamID: _,
              fallbackLogo: _,
              postedByDisplayName: _,
              postedByAvatarURL: _,
              ownerDisplayName: _,
              data: _,
              location: _,
              icon: _,
              timestamp: _,
              fnRenderTimestamp: _,
              nUnread: _,
              appName: _,
              onHide: _,
              commentTitle: _,
              commentBody: _,
            } = _,
            _ = _;
          const _ = _(_),
            [_, _] = _.useState(!1),
            _ = () => _(!0),
            [_, _] = (0, _._)(
              _.bclan_account ? _.owner_steam_id?.GetAccountID() : void 0,
            ),
            _ = (0, _._)(_) ? _ : null,
            _ = (0, _._)(_) ? _ : null;
          _.comment_type == _._
            ? _.owner_steam_id?.ConvertTo64BitString() == _
              ? _ == _.oYe && _
                ? (_ = (0, _._)(
                    "#SteamNotifications_Comment_Your_Profile_By",
                    _,
                  ))
                : (_ = (0, _._)("#SteamNotifications_Comment_Your_Profile"))
              : _
                ? _ == _.oYe && _
                  ? (_ = (0, _._)(
                      "#SteamNotifications_Comment_Player_Profile_By",
                      _,
                      _,
                    ))
                  : (_ = (0, _._)(
                      "#SteamNotifications_Comment_Player_Profile",
                      _,
                    ))
                : (_ = (0, _._)("#SteamNotifications_Comment_Profile"))
            : _.comment_type == _._ && _.json_data?.file_type == _.pmA
              ? _.owner_steam_id?.ConvertTo64BitString() == _
                ? _
                  ? (_ = (0, _._)(
                      "#SteamNotifications_Comment_Your_Screenshot_Game",
                      _,
                    ))
                  : (_ = (0, _._)(
                      "#SteamNotifications_Comment_Your_Screenshot",
                    ))
                : _
                  ? (_ = (0, _._)(
                      "#SteamNotifications_Comment_Screenshot_Game",
                      _,
                    ))
                  : (_ = (0, _._)("#SteamNotifications_Comment_Screenshot"))
              : !_ && _.json_data?.title && (_ = _.json_data.title);
          let _ = null;
          _.brate_limited
            ? _.comment_type == _._ && _.bis_forum && _
              ? (_ = (0, _._)(
                  "#SteamNotifications_Comment_RateLimited_Forum",
                  _,
                ))
              : (_ = (0, _._)("#SteamNotifications_Comment_RateLimited"))
            : _.comment_type == _._ && _.bis_forum && _
              ? (_ = (0, _.jsx)(_, {
                  children: (0, _._)(
                    "#SteamNotifications_Comment_NewDiscussion",
                    _,
                  ),
                }))
              : (_ = (0, _.jsxs)(_, {
                  children: ['"', _, '"'],
                }));
          let _ = (0, _._)("#SteamNotifications_Comment"),
            _ = null;
          if (_ !== void 0 && _ > 1) {
            const _ = "+" + (_ - 1);
            _ == _.oYe
              ? (_ = (0, _.jsx)("div", {
                  className: _().AllNotificationsCommentPlus,
                  children: _,
                }))
              : (_ = _ + " " + _);
          }
          let _ = _;
          if (!_) {
            const _ = _ ? _().ShortLogoDimensions : _().StandardLogoDimensions;
            if (_ && (0, _._)(_)) {
              const _ = _.bhas_friend && _ != _.PN1;
              _ = (0, _.jsxs)("div", {
                style: {
                  position: "relative",
                },
                children: [
                  _ &&
                    (0, _.jsx)(_.GSe, {
                      className: _().FriendIndicator,
                    }),
                  (0, _.jsx)("img", {
                    className: _,
                    src: _,
                    onError: _,
                  }),
                ],
              });
            } else
              _?.avatar_medium_url &&
                (_ = (0, _.jsx)("img", {
                  className: _,
                  src: _.avatar_medium_url,
                  onError: _,
                }));
          }
          return _
            ? (0, _.jsx)(_, {
                ..._,
                logo: _,
                icon: _.icon,
                title: _,
                body: _,
              })
            : (0, _.jsx)(_, {
                children: (0, _.jsxs)(_, {
                  logo: _,
                  ..._,
                  children: [
                    (0, _.jsx)(_, {
                      icon: _,
                      title: _,
                      timestamp: _,
                      location: _,
                      fnRenderTimestamp: _,
                    }),
                    (0, _.jsx)(_, {
                      children: _,
                    }),
                    _,
                    _,
                    _
                      ? (0, _.jsx)(_, {
                          onHide: _,
                        })
                      : null,
                  ],
                }),
              });
        }
        function _(_) {
          let {
            fallbackLogo: _,
            data: _,
            location: _,
            icon: _,
            timestamp: _,
            fnRenderTimestamp: _,
            onHide: _,
          } = _;
          const _ = _(_),
            _ = _.appid
              ? {
                  appid: _.appid,
                }
              : void 0,
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            _ = _(_, _, _),
            _ = _ && (!_ || !_ || !_);
          let _ = "",
            _ = null;
          if (_) {
            const _ = _.name ?? "";
            (_ = _),
              _.count == 1
                ? _
                  ? (_ = (0, _._)(
                      "#SteamNotifications_Wishlist_OnSale_Single_Short",
                      (0, _.jsx)("span", {
                        children: _,
                      }),
                      (0, _.jsx)("span", {
                        style: {
                          color: "#FFFFFF",
                        },
                        children: _?.formatted_final_price,
                      }),
                    ))
                  : (_ = (0, _._)(
                      "#SteamNotifications_Wishlist_OnSale_Single",
                      (0, _.jsx)("span", {
                        style: {
                          color: "#FFFFFF",
                        },
                        children: _?.formatted_final_price,
                      }),
                    ))
                : _.count == 2
                  ? _
                    ? (_ = (0, _._)(
                        "#SteamNotifications_Wishlist_OnSale_PlusOne_Short",
                        _,
                      ))
                    : (_ = (0, _._)(
                        "#SteamNotifications_Wishlist_OnSale_PlusOne",
                      ))
                  : _
                    ? (_ = (0, _._)(
                        "#SteamNotifications_Wishlist_OnSale_PlusMany_Short",
                        _,
                        _.count - 1,
                      ))
                    : (_ = (0, _._)(
                        "#SteamNotifications_Wishlist_OnSale_PlusMany",
                        _.count - 1,
                      ));
          } else _ = (0, _._)("#SteamNotifications_Wishlist_Generic");
          return _
            ? (0, _.jsx)(_, {
                ..._,
                logo: _,
                icon: _.icon,
                title: (0, _._)("#SteamNotifications_Wishlist"),
                body: _,
              })
            : (0, _.jsx)(_, {
                children: (0, _.jsxs)(_, {
                  logo: _,
                  bLoading: _,
                  ..._,
                  children: [
                    (0, _.jsx)(_, {
                      icon: _,
                      title: (0, _._)("#SteamNotifications_Wishlist"),
                      timestamp: _,
                      location: _,
                      fnRenderTimestamp: _,
                    }),
                    (0, _.jsx)(_, {
                      multiline: !_,
                      children: _,
                    }),
                    !!_ &&
                      (0, _.jsx)(_, {
                        children: _,
                      }),
                    _
                      ? (0, _.jsx)(_, {
                          onHide: _,
                        })
                      : null,
                  ],
                }),
              });
        }
        function _(_, _, _ = !1) {
          const [_, _] = _.useState(!1),
            _ = () => _(!0);
          if (!_ || _)
            return (0, _.jsx)(_._, {
              style: {
                position: "relative",
              },
              children: _,
            });
          const _ = (0, _._)(_, "community_icon");
          return _
            ? (0, _.jsx)(_._, {
                style: {
                  position: "relative",
                },
                children: (0, _.jsx)("img", {
                  src: _,
                  className: _().ShortLogoDimensions,
                  onError: _,
                }),
              })
            : (0, _.jsxs)(_._, {
                style: {
                  position: "relative",
                },
                children: [
                  (0, _.jsx)("img", {
                    className: (0, _._)(_().WishlistBlurImage),
                    src: _,
                    onError: _,
                  }),
                  (0, _.jsx)("img", {
                    src: _,
                    onError: _,
                    style: {
                      position: "absolute",
                      left: 7,
                      top: 7,
                      height: 32,
                      width: 32,
                    },
                  }),
                ],
              });
        }
        function _(_) {
          const _ = (_) => {
              _.stopPropagation(), _.preventDefault();
            },
            _ = (_) => {
              _.onHide(), _.stopPropagation(), _.preventDefault();
            };
          return (0, _.jsx)("div", {
            className: _().HideButton,
            onClick: _,
            onMouseDown: _,
            children: (0, _.jsx)(_.zHo, {}),
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _().SteamNotificationWrapper,
            children: _.children,
          });
        }
        var _ = __webpack_require__("chunkid");
        let _ = null,
          _ = !1;
        function _() {
          return (
            _ ||
              (_ = new _._({
                BIsFriend: (0, _._)(),
              })),
            _
          );
        }
        function _() {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(() => _().m_bInitialized);
          return (
            !_ &&
              !_ &&
              ((_ = !0), _.Init(_._.accountid, _, _).finally(() => (_ = !1))),
            [_, _]
          );
        }
        function _(_) {
          let _ = null;
          return (
            (0, _._)(_) ? (_ = _) : (0, _._)(_) ? (_ = _) : _[_] && (_ = _[_]),
            _
          );
        }
        function _(_) {
          const { rollup: _, uimode: _, location: _ } = _,
            _ = _(_.type);
          return _
            ? (0, _.jsx)(_._, {
                controller: "notification",
                method: (0, _.fLp)(_),
                submethod: (0, _.ey3)(_),
                children: (0, _.jsx)(_, {
                  ..._,
                }),
              })
            : null;
        }
        function _(_) {
          const {
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            _ = _(_.item.notification_type, _.item.body_data),
            _ = (0, _._)(_.type)
              .replace("k_ESteamNotificationType_", "")
              ?.toLowerCase(),
            _ = (0, _._)(_?.link ?? "#", _),
            _ = () =>
              _(() => {
                _?.link && _ && window.location.assign(_);
              }, _.item),
            _ = (_) => _(() => {}, _.item, _);
          return (0, _.jsx)("a", {
            href: _?.link ? _ : "#",
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              icon: _(_.type),
              onActivate: _,
              fallbackLogo: (0, _.jsx)(_.Qte, {}),
              location: _,
              eUIMode: _,
              data: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              bNewIndicator: (0, _._)(_.item),
              onHide: _,
            }),
          });
        }
        function _(_) {
          const {
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            _ = `${_._.COMMUNITY_BASE_URL}my/gamenotifications/`,
            _ = () => _(() => window.location.assign(_), _.item),
            _ = (_) => _(() => {}, _.item, _),
            _ = _(_);
          return (0, _.jsx)("a", {
            href: _,
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              icon: (0, _.jsx)(_.Qte, {}),
              fallbackLogo: (0, _.jsx)(_.wC1, {}),
              onActivate: _,
              location: _,
              eUIMode: _,
              data: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              bNewIndicator: (0, _._)(_.item),
              onHide: _,
            }),
          });
        }
        function _(_) {
          const {
              steamid: _,
              url: _,
              strTitleLoc: _,
              strBodyLoc: _,
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            { data: _ } = (0, _._)(_),
            _ = (_) => _(() => {}, _.item, _),
            _ = () => _(() => window.location.assign(_), _.item);
          if (!_) return null;
          const _ = !_,
            _ = (0, _._)(_, _?.m_strPlayerName ?? ""),
            _ = (0, _._)(_, _?.m_strPlayerName ?? "");
          return (0, _.jsx)("a", {
            href: _,
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              title: _,
              body: _,
              bDataLoading: _,
              logoUrl: _?.avatar_url_medium,
              icon: (0, _.jsx)(_.Qte, {}),
              onActivate: _,
              location: _,
              eUIMode: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              bNewIndicator: (0, _._)(_.item),
              onHide: _,
            }),
          });
        }
        function _(_) {
          const _ = _(_.rollup.type, _.rollup.item.body_data);
          if (!_) return null;
          const { strTitleLoc: _, strBodyLoc: _, strUrl: _, steamid: _ } = _;
          return !_ || !_ || !_
            ? null
            : (0, _.jsx)(_, {
                steamid: _,
                url: _,
                strTitleLoc: _,
                strBodyLoc: _,
                ..._,
              });
        }
        function _(_) {
          const {
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            _ = (0, _._)(),
            _ = _(_),
            _ = `${_._.COMMUNITY_BASE_URL}profiles/${_}/tradeoffers`,
            _ = () => _(() => window.location.assign(_), _.item),
            _ = (_) => _(() => {}, _.item, _),
            _ = _._.InitFromAccountID(_),
            { data: _ } = (0, _._)(_.GetAccountID());
          return (0, _.jsx)("a", {
            href: _,
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              logo: (0, _.jsx)(_.Qte, {}),
              icon: (0, _.jsx)(_.h20, {}),
              onActivate: _,
              location: _,
              eUIMode: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              displayName: _?.m_strPlayerName,
              bNewIndicator: (0, _._)(_.item),
              onHide: _,
            }),
          });
        }
        const _ = (_) => {
          const {
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            _ = `${_._.COMMUNITY_BASE_URL}my/tradehistory`,
            _ = () => _(() => window.location.assign(_), _.item),
            _ = (_) => _(() => {}, _.item, _);
          return (0, _.jsx)("a", {
            href: _,
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              logo: (0, _.jsx)(_.Qte, {}),
              icon: (0, _.jsx)(_.h20, {}),
              onActivate: _,
              location: _,
              eUIMode: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              bNewIndicator: (0, _._)(_.item),
              onHide: _,
            }),
          });
        };
        function _(_) {
          const {
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            _ = (0, _._)(),
            _ = `${_._.COMMUNITY_BASE_URL}profiles/${_}/inventory/#pending_gifts`,
            _ = () => _(() => window.location.assign(_), _.item),
            _ = (_) => _(() => {}, _.item, _),
            _ = _(_),
            _ = _._.InitFromAccountID(_),
            { data: _ } = (0, _._)(_.GetAccountID());
          return (0, _.jsx)("a", {
            href: _,
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              logo: (0, _.jsx)(_.Qte, {}),
              icon: (0, _.jsx)(_._, {}),
              onActivate: _,
              location: _,
              eUIMode: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              senderName: _?.m_strPlayerName,
              bNewIndicator: (0, _._)(_.item),
              onHide: _,
            }),
          });
        }
        function _(_) {
          const {
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            _ = _(_),
            { data: _ } = (0, _._)(_.responder_steamid),
            _ =
              _.package_id > 0
                ? {
                    packageid: _.package_id,
                  }
                : {
                    bundleid: _.bundle_id,
                  },
            { data: _ } = (0, _._)(_),
            _ = _ ? `app/${_.appid}` : "",
            _ = `${_._.STORE_BASE_URL}${_}`,
            _ = () => _(() => window.location.assign(_), _.item),
            _ = (_) => _(() => {}, _.item, _),
            _ = !_ || !_,
            _ = (0, _._)("#SteamNotifications_RequestedGameAddedTitle"),
            _ = _
              ? (0, _._)(
                  "#SteamNotifications_RequestedGameAddedBody",
                  _.name ?? "",
                )
              : "";
          return (0, _.jsx)("a", {
            href: _,
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              title: _,
              body: _,
              bDataLoading: _,
              logoUrl: _?.avatar_url_medium,
              icon: (0, _.jsx)(_.Qte, {}),
              onActivate: _,
              location: _,
              eUIMode: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              bNewIndicator: (0, _._)(_.item),
              onHide: _,
            }),
          });
        }
        function _(_) {
          const {
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(_.item, _, _),
            _ = _(_),
            { data: _ } = (0, _._)(
              _?.appid
                ? {
                    appid: _.appid,
                  }
                : void 0,
            ),
            _ = `${_._.COMMUNITY_BASE_URL}profiles/${_}/inventory`,
            _ = () => _(() => window.location.assign(_), _.item),
            _ = (_) => _(() => {}, _.item, _);
          return (0, _.jsx)("a", {
            href: _,
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              appName: _?.name,
              icon: (0, _.jsx)(_.rI_, {}),
              fallbackLogo: (0, _.jsx)(_.Qte, {}),
              onActivate: _,
              location: _,
              eUIMode: _,
              data: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              itemState: _,
              bNewIndicator: (0, _._)(_.item),
              onHide: _,
            }),
          });
        }
        function _(_) {
          const {
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            _ = (0, _._)(),
            _ = `${_._.COMMUNITY_BASE_URL}profiles/${_}/friends/pending`,
            _ = () => _(() => window.location.assign(_), _.item),
            _ = (_) => _(() => {}, _.item, _),
            _ = _(_),
            { data: _ } = (0, _._)(_.requestorID);
          return (0, _.jsx)("a", {
            href: _,
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              fallbackLogo: (0, _.jsx)(_.Gv$, {}),
              icon: (0, _.jsx)(_.sdo, {}),
              onActivate: _,
              location: _,
              eUIMode: _,
              data: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              requestorAvatarURL: _?.avatar_url_medium,
              requestorName: _?.m_strPlayerName,
              bNewIndicator: (0, _._)(_.item),
              onHide: _,
            }),
          });
        }
        function _(_) {
          const {
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            _ = _(_),
            _ = (0, _._)(),
            _ = _._.COMMUNITY_BASE_URL + _.url,
            _ = () => _(() => window.location.assign(_), _.item),
            _ = (_) => {
              _(() => {}, _.item, _);
            },
            _ = (0, _._)(_) ? _?.account_steam_id?.GetAccountID() : null,
            { data: _ } = (0, _._)(_),
            _ = (0, _._)(_) ? _?.owner_steam_id?.GetAccountID() : null,
            { data: _ } = (0, _._)(_),
            _ = _.json_data?.app_id
              ? {
                  appid: _.json_data?.app_id,
                }
              : void 0,
            { data: _ } = (0, _._)(_),
            [_, _] = _(),
            _ = _
              ? _.FilterText(_.account_steam_id.GetAccountID(), _.title)
              : "",
            _ = _
              ? _.FilterText(_.account_steam_id.GetAccountID(), _.comment)
              : "";
          return (0, _.jsx)("a", {
            href: _,
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              fallbackLogo: (0, _.jsx)(_.Qte, {}),
              icon: (0, _.jsx)(_.MwB, {}),
              onActivate: _,
              location: _,
              currentUserSteamID: _,
              eUIMode: _,
              data: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              postedByAvatarURL: _?.avatar_url_medium,
              postedByDisplayName: _?.m_strPlayerName,
              ownerDisplayName: _?.m_strPlayerName,
              bNewIndicator: (0, _._)(_.item),
              appName: _?.name,
              onHide: _,
              commentTitle: _,
              commentBody: _,
              bLoading: !_,
            }),
          });
        }
        function _(_) {
          const {
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            _ = _(_),
            { data: _ } = (0, _._)({
              appid: _.appid,
            }),
            [_, _] = (0, _.useState)(""),
            _ = (0, _._)();
          (0, _.useEffect)(() => {
            if (_.count > 1 && _.appids?.length)
              return _(
                _._.STORE_BASE_URL +
                  `wishlist/profiles/${_}/?wng=${_.appids.toString()}#sort=discount`,
              );
            if (_) return _(_._.STORE_BASE_URL + _.store_url_path);
            const _ = _.appid ? `?appid=${_.appid}` : "";
            _(_._.STORE_BASE_URL + `wishlist/profiles/${_}/${_}#sort=discount`);
          }, [_, _, _]);
          const _ = () => _(() => window.location.assign(_), _.item),
            _ = (_) => _(() => {}, _.item, _);
          return (0, _.jsx)("a", {
            href: _,
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              fallbackLogo: (0, _.jsx)(_.Qte, {}),
              icon: (0, _.jsx)(_.ilR, {}),
              onActivate: _,
              location: _,
              data: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              eUIMode: _,
              bNewIndicator: (0, _._)(_.item),
              onHide: _,
            }),
          });
        }
        function _(_) {
          const { url: _, count: _, icon: _, strBody: _, eFeature: _ } = _,
            _ = (0, _._)(_);
          return !_ || _
            ? null
            : (0, _.jsx)("a", {
                href: _,
                className: _().WebPinnedNotification,
                children: (0, _.jsx)(_, {
                  icon: (0, _.jsx)(_, {}),
                  count: _,
                  onActivate: () => window.location.assign(_),
                  strBody: _,
                  eUIMode: _.yrU,
                  visible: !0,
                }),
              });
        }
        const _ = {
          [_._._]: _,
          [_._._]: _,
          [_._._]: _,
          [_._._]: _,
          [_._._]: _,
          [_._._]: _,
          [_._._]: _,
          [_._._]: _,
          [_._._]: _,
        };
        var _ = __webpack_require__("chunkid");
        const _ = new _._(),
          _ = (0, _._)(function (_) {
            const { bResponsiveHeader: _, notifications: _ } = _;
            _.useEffect(() => {
              _ && !_.m_bLoaded && _.ProcessNewNotificationPayload(_);
            }, [_]);
            const _ = (0, _._)();
            (0, _.useEffect)(() => {
              _.setTransport(_),
                (window.RefreshSteamNotifications = () => _(_));
            }, [_]);
            const _ = _();
            return _
              ? (0, _.jsxs)(_.Fragment, {
                  children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
                })
              : (0, _.jsx)(_, {
                  nTotalUnviewed: _.nUnviewed,
                });
          });
        function _() {
          return (0, _._)(() => ({
            notifications: _.m_rgNotificationRollups,
            summary: _.m_summary,
            loaded: _.m_bLoaded,
            nUnviewed: _.m_nUnviewed,
          }));
        }
        function _() {
          const _ = _(),
            _ = (0, _._)(),
            { data: _ } = (0, _._)(_),
            _ = (0, _._)(),
            _ = _?.settings;
          return _.notifications.filter(
            (_) => !(0, _._)(_.type, _, _) && !(0, _._)(_.item),
          );
        }
        function _(_) {
          const { nTotalUnviewed: _ } = _,
            _ = _.useRef(null),
            _ = _(),
            [_, _] = _.useState(_().AnimateBell);
          _.useEffect(() => {
            _.current ||
              ((_.current = (0, _._)(
                (0, _.jsx)(_, {
                  popupRef: _,
                }),
                document.getElementById("green_envelope_menu_root"),
                {
                  bPreferPopLeft: !0,
                  bOverlapHorizontal: !0,
                  strClassName: "GreenEnvelopeMenu",
                },
              )),
              _.current.Hide());
            const _ = document.getElementById("header_notification_link");
            _ && (_.style.cssText = "background-color: rgba(0,0,0,0)"),
              window.setTimeout(() => _(null), 2e3);
          }, []);
          const _ = () => {
              _.current?.visible ||
                (_.current?.Show(),
                _.findIndex((_) => !_.item.viewed) != -1 &&
                  _.MarkAllItemsViewed());
            },
            _ = _.useCallback(
              (_) => {
                !_ && _.current?.visible && _.current.Hide();
              },
              [_],
            );
          return (0, _.jsx)(_._, {
            trigger: "repeated",
            onVisibilityChange: _,
            children: (0, _.jsx)("button", {
              onClick: _,
              _: "green_envelope_menu_root",
              className: (0, _._)(
                _().NotificationsButton,
                _ ? _().Green : _().Grey,
                _,
              ),
              children: (0, _.jsx)(_.$0s, {
                className: _().SVGNotifications,
                "aria-label": (0, _._)("#NotificationsMenu_Title"),
              }),
            }),
          });
        }
        const _ = (_) => {
            const { popupRef: _ } = _,
              _ = _.useRef(null),
              [_, _] = _.useState(!1);
            _.useEffect(() => {
              _(
                _.current != null &&
                  _.current?.scrollHeight > _.current?.clientHeight,
              );
            }, [_.current?.scrollHeight, _]);
            const _ = _ ? void 0 : _().MenuScrollbarHidden;
            return (0, _.jsxs)("div", {
              className: _().NotificationsMenu,
              onClick: () => _?.current?.Hide(),
              children: [
                (0, _.jsx)(_, {}),
                (0, _.jsxs)("div", {
                  className: (0, _._)(_().NotificationsMenuScrollable, _),
                  ref: _,
                  children: [
                    (0, _.jsx)(_, {}),
                    (0, _.jsx)(_, {}),
                    (0, _.jsx)(_, {}),
                  ],
                }),
              ],
            });
          },
          _ = () => {
            const _ = `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/notifications`;
            return (0, _.jsxs)("div", {
              className: (0, _._)(_().NotificationHeader),
              children: [
                (0, _.jsx)("div", {
                  className: _().AllNotificationsTitle,
                  children: (0, _._)("#NotificationsMenu_Title"),
                }),
                (0, _.jsx)("a", {
                  href: _,
                  children: (0, _.jsx)("div", {
                    className: _().AllNotificationsButton,
                    children: (0, _._)("#NotificationsMenu_ViewAll"),
                  }),
                }),
              ],
            });
          },
          _ = () => {
            const _ = `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/notifications`;
            return (0, _.jsx)("div", {
              className: (0, _._)(
                _().NotificationHeader,
                _().ResponsiveViewAll,
              ),
              children: (0, _.jsx)("a", {
                href: _,
                children: (0, _.jsx)("div", {
                  className: _().AllNotificationsButton,
                  children: (0, _._)("#NotificationsMenu_ViewAll"),
                }),
              }),
            });
          };
        function _(_, _, _) {
          !_.read &&
            (!_ || _.button == 0 || _.button == 1) &&
            _.notification_id &&
            _.MarkItemRead(_.notification_id),
            _();
        }
        function _() {
          const _ = _();
          return _.length == 0
            ? null
            : (0, _.jsx)("div", {
                className: _().NotificationsMenuEntriesContainer,
                children: _.map((_, _) =>
                  (0, _.jsx)(
                    _,
                    {
                      rollup: _,
                      onNotificationClick: _,
                      uimode: _.yrU,
                      location: _.B3I,
                    },
                    _,
                  ),
                ),
              });
        }
        const _ = [
          {
            fnUrl: () =>
              `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/inventory/#pending_gifts`,
            countItem: "pending_gifts",
            icon: _._,
            fnLocalizeBody: (_) =>
              (0, _._)("#Notification_NewGiftsPinned_Body", _),
            feature: _._,
          },
          {
            fnUrl: () =>
              `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/home/invites`,
            countItem: "pending_invites",
            icon: _.sdo,
            fnLocalizeBody: (_) =>
              (0, _._)("#Notification_FriendInvitePinned_Body", _),
            feature: _._,
          },
          {
            fnUrl: () =>
              `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/notifications#comments`,
            countItem: "comments",
            icon: _.MwB,
            fnLocalizeBody: (_) =>
              (0, _._)("#Notification_NewCommentPinned_Body", _),
            feature: _._,
          },
          {
            fnUrl: () =>
              `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/inventory`,
            countItem: "inventory_items",
            icon: _.rI_,
            fnLocalizeBody: (_) =>
              (0, _._)("#Notification_NewItemAnnouncementPinned_Body", _),
            feature: _._,
          },
          {
            fnUrl: () =>
              `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/tradeoffers`,
            countItem: "trade_offers",
            icon: _.h20,
            fnLocalizeBody: (_) =>
              (0, _._)("#Notification_NewTradeOffersPinned_Body", _),
            feature: _._,
          },
          {
            fnUrl: () =>
              `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/gamenotifications`,
            countItem: "async_game_updates",
            icon: _.wC1,
            fnLocalizeBody: (_) =>
              (0, _._)("#Notification_NewAsyncGamePinned_Body", _),
          },
          {
            fnUrl: () => `${_._.COMMUNITY_BASE_URL}my/moderatormessages`,
            countItem: "moderator_messages",
            icon: _.hJ4,
            fnLocalizeBody: (_) =>
              (0, _._)("#Notification_NewModeratorMessagePinned_Body", _),
            feature: _._,
          },
          {
            fnUrl: () => `${_._.HELP_BASE_URL}wizard/HelpRequests`,
            countItem: "help_request_replies",
            icon: _.Cv4,
            fnLocalizeBody: (_) =>
              (0, _._)("#Notification_NewHelpRequestRepliesPinned_Body", _),
          },
          {
            fnUrl: () =>
              `${_._.STORE_BASE_URL}account/familymanagement/join?ft=${_._.steamid}`,
            countItem: "family_invites",
            icon: _.Qte,
            fnLocalizeBody: (_) =>
              (0, _._)("#Notification_FamilyInvitePinned_Body", _),
          },
        ];
        function _() {
          const _ = _();
          return (0, _.jsx)(_.Fragment, {
            children: _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  url: _.fnUrl(),
                  count: _.summary[_.countItem],
                  icon: _.icon,
                  strBody: _.fnLocalizeBody(_.summary[_.countItem]),
                  eFeature: _.feature,
                },
                _.countItem,
              ),
            ),
          });
        }
        function _() {
          return (0, _.jsxs)("div", {
            className: _().EmptyNotificationsCtn,
            children: [
              (0, _.jsx)("div", {
                className: _().EmptyNotificationsTitle,
                children: (0, _._)("#NotificationsList_EmptyTitle_New"),
              }),
              (0, _.jsx)("div", {
                className: _().EmptyNotificationsBody,
                children: (0, _._)("#NotificationsList_EmptyBody"),
              }),
            ],
          });
        }
        const _ = _;
        async function _(_) {
          let _ = null;
          try {
            _ = await (0, _._)(
              _,
              _._.steamid,
              (0, _.sfN)(_._.LANGUAGE),
              void 0,
              !1,
              !1,
            );
          } catch {}
          _ && _.ProcessNewNotificationPayload(_);
        }
      },
      chunkid: (module) => {
        module.exports = {
          NotificationsMenu: "_3EPagkYPxulGbe-5invUhK",
          NotificationsMenuEntriesContainer: "m0H4PhlsBcw0NzlQje7q",
          NotificationsMenuScrollable: "_2hgxpK_sWS7mDF66uPetpF",
          MenuScrollbarHidden: "_2Qeur5RWXHnW-xneBJUfH-",
          NotificationHeader: "_1Uh_y1atXoMOUxGyUQK8vC",
          ResponsiveViewAll: "_2q-LyEsEZpxFZBbqO07xgp",
          AllNotificationsTitle: "-Dpw5WXg2gjckpFAkP_lg",
          AllNotificationsButton: "_1OH7OiFxIJo5Y7Z4Z6U6iO",
          NotificationsButton: "_1jW5_Ycv6jGKu28A1OSIQK",
          SVGNotifications: "_13fwmIK8Ajo0qndUS5zb7E",
          Grey: "_34A9kjlnmgfUWSmr16VjXE",
          Disabled: "_3h1sV2qrp20U37VwC47pM2",
          Green: "_2Hpe0_DGY0TBz45Lg0zUr9",
          AnimateBell: "_34o7mvTYzowbNAllqYUQuJ",
          NotificationBellAnimation: "_3W6ngOzFfcJJpftaQ5t9bk",
          NotificationBellUvula: "xpAr9gP3YAkKomrGUivf8",
          EmptyNotificationsCtn: "_2a4xLIvDI3rmLxVfLMQFTz",
          EmptyNotificationsTitle: "_2SIA4NMfduV_HWDptv6cAK",
          EmptyNotificationsBody: "EpEznkfiKxcqI9p52OmRx",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          loadinganimationiterationcount: "20",
          loadinganimationduration: "1s",
          StandardTemplateContainer: "_2yhmcyeUOyM8lt__Skbk9O",
          "ItemFocusAnim-darkerGrey": "_3mfiE_PUWOPy8UTDJlYI0u",
          Timestamp: "_26rvbcKFCQjLKx-pD7BhvY",
          StandardTemplate: "_3-H47wPl1Ng3lh7xGZOPIg",
          PinnedTemplate: "_3V6804k2yutEiF6IWg8axH",
          StandardLogoDimensions: "_1KIwOtwkYQUtRoPyxlh3G-",
          Content: "_2axKS7MCnzMBRXRcYLn2Is",
          Header: "_1WuK_iZ6ARkIiptCX5qd7G",
          Icon: "_2F0wqsu2mqsHxBSJcu1sPJ",
          Title: "_18PwvOcpWfW3M8j2-bEPPJ",
          StandardNotificationDescription: "_3fUrGm-WHq3qxIpSqRZDgc",
          StandardNotificationSubText: "_2yUEtF_eCucoxdu85zlOCp",
          Multiline: "_2sQoMK-0onl8u8WHHUnDdw",
          Count: "_2zZKXEnYcEZsL5OGHzkKv2",
          PinnedBody: "_1nziGc41LlyGfDufK0iQos",
          AllNotificationsTemplate: "_1xvIUtLkTrdEk2Ob1MqFcQ",
          StandardTemplateDesktop: "_1GcAugE5c4nbBUwrA4_xwS",
          DesktopToastTemplate: "_3ENh9LzRnZgfTyfxp_J2rr",
          PinnedTemplateWeb: "_2Mo87NUHyjLkjvKcPQxPRu",
          PinnedTemplateDesktop: "j9jQA6QaLJ23lyfuo9nY6",
          AppLogo: "_3mWpfn1_PDwd1gOm26RhMl",
          AppLogoBackgroundImage: "_2FcBwxd4lGOEMTXCnmxczK",
          MarkedRead: "_15_E6efeCt2NTqCgUKav1W",
          markReadBackground: "_1paPuAH6aCXNKdXvf5jv1d",
          Unread: "_1YAQHDHv4hsPaauccvAFtn",
          PlayerNickName: "_2n0ipWJFroZdQVwkXHqdJL",
          FullName: "_2EWNcLrlrl9Gx-yZH039tH",
          IngameTitle: "_3uSbhtY3vHtdj-3tpua_Pb",
          OnlineTitle: "_3bqD-bBMgrGwLsBY2L1gSL",
          GroupMessageTitle: "_3C8GdaaS-zmchnCHHiHG6n",
          GroupMessageUserName: "_2hs2ZR_wYkRHWdtlr681Z6",
          GroupMessageBody: "_3AbCrY-d5NpL5E5DUfgdQ8",
          GroupMessageIcon: "_3vDmqJBvNPH1D_p-Da_djj",
          Body: "_2jpxEWvo06efD6-NR1cplA",
          FriendInGameAppColor: "_2XSwzNWGiJvW0zTgqT0DUI",
          WishlistBlurImage: "_2HBcq6niThHlNihI9xiBSm",
          AvatarStatus: "_1mMC7Hv71CzO0jfm_66W4K",
          IncomingCallToast: "_3wNcsYlo3lQ-yamJPMco8F",
          ShortLogoDimensions: "_1-CP3jNFd252Y0uV_Ua0VE",
          LoadingTemplate: "_2mFLv5Puw95n9oUFp9OMAs",
          Hide: "_1W2rIElq16YPQi4DqoqPLM",
          ShimmerLogo: "_3QrlTtpidzjKPhrvgxFXbI",
          ShimmerBody: "_1ugrCy0x7fRJ7TyoURzzTa",
          ShimmerHeader: "_1Tp3oOeqWARWDsQDI3owRD",
          loading: "_3CI8AFu67GMoINumH6Yvax",
          BottomBar: "_2FMNpalUV1wDdi-cywGIMN",
          NewIndicator: "-B93GaGXJf0lPTNh66m4i",
          ShortTemplate: "fntOoeLPSTpmyXGGmgf99",
          TwoLine: "P1FhGdWv2NCXZXWsaKqqY",
          FullWidth: "_6EcDVXFHtdirTkETQjKOK",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          loadinganimationiterationcount: "20",
          loadinganimationduration: "1s",
          StandardTemplateContainer: "_30fVm4Rsel-4nUKEiPJgz9",
          "ItemFocusAnim-darkerGrey": "_3z4hV832fi8W9gRRPhmC1V",
          Timestamp: "_7XKFnSNjW_tHfyxaezoD3",
          StandardTemplate: "_2h6KD6p6y4vIgO2Toxx-_K",
          PinnedTemplate: "_3oKFhPrh1lbp-WtA72Q2Yi",
          StandardLogoDimensions: "_1VRx9qVxigUC4qeM0NWNMR",
          Content: "_1SQjN025UZ0z_8AkWHCsGd",
          Header: "_3u0Sb5gUTscs0TQlKpA7WZ",
          Icon: "_2auM-VHPU-KKomAWyuWrSV",
          Title: "_2MGSmn9lIFnmLVIX49POSx",
          StandardNotificationDescription: "_26v9mHAi56x63OwY-jxett",
          StandardNotificationSubText: "_3hEeummFKRey8l5VXxZwxz",
          Multiline: "_21DVSDVmPUgGXuTkI2HqbO",
          Count: "CRYjulQaQOjokS7b_8cOH",
          PinnedBody: "h-lNlCUnCRbIcn38-Oqaw",
          AllNotificationsTemplate: "QFW0BtI4l77AFmv1xLAkx",
          StandardTemplateDesktop: "_3B8wRA4H7e_oSksYNqpSPv",
          DesktopToastTemplate: "_2NdiftmP-B3C4LPWnNGTCB",
          PinnedTemplateWeb: "_25gii5r23MmAqXvLZj24tK",
          PinnedTemplateDesktop: "_3k90ug209sE23xAMqcM74s",
          AppLogo: "_3p74fAyjLzNltNbJUf55kk",
          AppLogoBackgroundImage: "_2qpzt_PffGJwN3Vm2bkKQI",
          MarkedRead: "FMwg5OFGT6NP3h3EW89IP",
          markReadBackground: "_3eZECZ7BxfGeq4yfoKHDal",
          Unread: "_1B1XTNsfuwOaDPAkkr8M42",
          PlayerNickName: "_1YqYJ2yaHfODWbIB0abgzQ",
          FullName: "fozLrCNjCbPGiVKYi2L_M",
          IngameTitle: "rN6p14MiFEoCZvdjnfpgQ",
          OnlineTitle: "_35uWYHT2zJoSv9PE_euqxo",
          GroupMessageTitle: "_33qpBDHTkkQ4TCFB4gPGk_",
          GroupMessageUserName: "_3m94SADycX0JIk8urdZQ2X",
          GroupMessageBody: "_1XTFkmspXcukxWSFz5Fn61",
          GroupMessageIcon: "brsvX3XkZwkemQ_HM3JOP",
          Body: "_3JT9UI68R_-oZc63_NRIcA",
          FriendInGameAppColor: "_10165iFPxrqzt0kfV00tbu",
          WishlistBlurImage: "_3QLXE6SzCKiwEgK5iORZPA",
          AvatarStatus: "_1iutOH026zK2dbpsMFDmMm",
          IncomingCallToast: "j2oDsM6xV2rFx-UrisfYh",
          ShortLogoDimensions: "BNKAIWal-7E00ymauRaHg",
          LoadingTemplate: "Lakql1yamweHbP1OPuahF",
          Hide: "WnLkF0HwOQr2BIjlAlrjF",
          ShimmerLogo: "_2macs5lWMPN5NfDpGE3Iyh",
          ShimmerBody: "_3Ivl8dbxH6D6LwaSLTNTLe",
          ShimmerHeader: "_2a2loheX4ZKGZCGNEdAT3h",
          loading: "_2PdZZCNo176UV7FcPPdqTt",
          BottomBar: "_3yiWpBXwEmDLlaIupVXjUt",
          NewIndicator: "_1pIhbqWsrCVPaGGYc6fT-H",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          loadinganimationiterationcount: "20",
          loadinganimationduration: "1s",
          StandardTemplateContainer: "_1lqXpJpRlYvyM2fBx6beHd",
          "ItemFocusAnim-darkerGrey": "_3WRewosNPP9V6g7O3hWH5k",
          Timestamp: "w1Bf_xO8scHETzsfr2HtM",
          StandardTemplate: "_1k275cE1gk-jpZE5r-37zl",
          PinnedTemplate: "_4egmnB1wTrDll5Mc_eal8",
          StandardLogoDimensions: "_3n8vALReUk851YHiEiWEfQ",
          Content: "_3c_vhR2WnZLHuyVP2m4UO2",
          Header: "_1186NyOXeTBoB-vvWlJq1I",
          Icon: "_1piyUE09t3QXktcD3FrCwJ",
          Title: "_2x6qMHeQndH78e6sL2XHk_",
          StandardNotificationDescription: "Wh50moO-nKvfE3l4Buav",
          StandardNotificationSubText: "_2T5BxMT87QHfYWXDHFzpT1",
          Multiline: "_2fLmG6Oxk7tiZGLfH8dwXG",
          Count: "sdjVIgKSOKqyi7O2VDy70",
          PinnedBody: "_3OCMnBpXVpdYv5isBLVdJK",
          AllNotificationsTemplate: "d9RJTj9G8qU-U9-he2cQx",
          StandardTemplateDesktop: "_2uW9K6fqc6jZX1XBjnLjw",
          DesktopToastTemplate: "QbSr4hMpMfp0Qtsg4qOh5",
          PinnedTemplateWeb: "_3BvcYKoq-n7GgNwbfFgRAc",
          PinnedTemplateDesktop: "alS2LW_qAwNkYk_GPUC_3",
          AppLogo: "CA_EGBMvnnGy5ib6McPk1",
          AppLogoBackgroundImage: "_1WuzAPck-kGxa4mMIJvAzm",
          MarkedRead: "Wu9rtfDDzG6xfABpqX6oN",
          markReadBackground: "ULHzVL1tuahqUcVisVW-P",
          Unread: "_2kLHZTRgRl0POZfXPcfxks",
          PlayerNickName: "_2YpLUGZ7uC8ZZn67r0WFW_",
          FullName: "_31kBipdYxJf7OOfdvXt0_h",
          IngameTitle: "uoMiFtc9c1Qj-4N-yFmVY",
          OnlineTitle: "_1HmXUbyHRzGqMtpIXrI9-T",
          GroupMessageTitle: "_2sd1s2w2m26_3gQi1EUTR_",
          GroupMessageUserName: "gAoOCl1gHHigL5slBv_yA",
          GroupMessageBody: "_8o4Xz7dGPPQqf36w2HN--",
          GroupMessageIcon: "_15V41jl8st_uQsDMGCqnBx",
          Body: "_1bPTPIVs6QoX2gWvrhM6J-",
          FriendInGameAppColor: "_3xh1N-yvA3u7rLrq-DYZ1U",
          WishlistBlurImage: "_1GTWEgiW95vRIhUWfk6omo",
          AvatarStatus: "_2wKwJWdgy12ZO1tSjI9lXY",
          IncomingCallToast: "YukY0Anz5NHyFELGf9mPn",
          ShortLogoDimensions: "_1DaCc7OUCLHfc6VrQ3OIne",
          LoadingTemplate: "_5iNL0HazAvED5sWE9InJy",
          Hide: "_40XuJsiNG2Ls-sTWqrXG8",
          ShimmerLogo: "_1vzYeDqT7Eiy-LKfLm42sI",
          ShimmerBody: "_12dqPPvVDehwCa8i2oM-eA",
          ShimmerHeader: "_2ZzsgKvsaWmnKQRz0W83GA",
          loading: "_2qr7PO4jvslSCsJbTRFpwd",
          BottomBar: "IUPLZJhHdBex9tQTgC6Ug",
          NewIndicator: "_38yM72K6RxKmOhKZtInP2x",
          AllNotificationsCommentPlus: "WbA7y77Ujam9JOnYuGsMj",
          FriendIndicator: "_2Hphxk564S5yQHog-MFXfN",
          HideButton: "_3M-7E5Nj8iNX_jL5pAQDy_",
          SteamNotificationWrapper: "UmtNgXD92RoDeYjxKEskk",
        };
      },
      chunkid: (module) => {
        module.exports = {
          WebPinnedNotification: "_34nLZDNirxRHssbsjB_dJf",
        };
      },
    },
  ]);
})();
