(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [9236],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        let _ = 0;
        function _(_, _) {
          (0, _.useEffect)(() => {
            if (!(_ || _))
              return (
                _++,
                () => {
                  --_ == 0 && (0, _._)();
                }
              );
          }, [_, _]);
        }
        function _(_) {
          const [_, _] = (0, _.useState)(!1);
          (0, _.useEffect)(() => {
            const _ = window.setTimeout(() => _(!0), _);
            return () => window.clearTimeout(_);
          }, [_]),
            _(_);
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
          _ = __webpack_require__("chunkid");
        class _ {
          m_nLastUpdated = 0;
          m_mapLanguages = _._.map();
          m_appid;
          m_fetching = null;
          constructor(_) {
            this.m_appid = _;
          }
          GetAppID() {
            return this.m_appid;
          }
          GetTokenList(_) {
            return this.m_mapLanguages.has(_)
              ? this.m_mapLanguages.get(_)
              : null;
          }
          Localize(_, _) {
            let _ = _._.LANGUAGE,
              _ = this.GetTokenList(_),
              _ = _ != "english" ? this.GetTokenList("english") : null;
            return _(_, _, _, this.m_appid, _);
          }
          SubstituteParams(_, _) {
            let _ = _._.LANGUAGE,
              _ = this.GetTokenList(_),
              _ = _ != "english" ? this.GetTokenList("english") : null;
            return _(_, _, _, this.m_appid, _);
          }
        }
        function _(_, _, _, _, _) {
          if (!_.startsWith("#"))
            return (
              console.log(
                "Token doesn't start with #:",
                _,
                "appid",
                _,
                "tokens",
                _,
              ),
              ""
            );
          let _ = _;
          _ = _.toLowerCase();
          let _ = "";
          if (
            (_ && _.has(_) && (_ = _.get(_)),
            !_ && _ && _.has(_) && (_ = _.get(_)),
            _)
          )
            _ = _(_, _, _, _, _);
          else if (
            ((_ || _) &&
              console.log(
                "No loc found for appid",
                _,
                _,
                "Tokens:",
                _,
                "Fallback:",
                _,
              ),
            _ && _._.EUNIVERSE != _.wLO)
          )
            return _;
          return _;
        }
        function _(_, _, _, _, _) {
          let _ = /{[A-za-z0-9_%#:]+}/g,
            _ = _.match(_);
          if (_)
            for (let _ of _) {
              let _ = _.slice(1, -1),
                _ = _(_, _),
                _ = _(_, _, _, _, _);
              if (!_) return "";
              _ = _.replace(_, _);
            }
          return (_ = _(_, _)), _;
        }
        function _(_, _) {
          let _ = /%[A-Za-z0-9_:]+%/g,
            _ = _.match(_);
          if (_)
            for (let _ of _) {
              let _ = _.slice(1, -1).toLowerCase(),
                _ = _.get(_);
              _ == null
                ? console.log("No rich presence found for", _)
                : (_ = _.replace(_, _));
            }
          return _;
        }
        var _ = __webpack_require__("chunkid"),
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
        function _(_) {
          return useObserver(() => _.GetAppInfo(_));
        }
        function _(_) {
          return useObserver(() => _.map((_) => _.GetAppInfo(_)));
        }
        const _ = 3600 * 24 * 7 * 2;
        class _ {
          m_CMInterface;
          m_mapAppInfo = _._.map();
          m_mapRichPresenceLoc = _._.map();
          m_cAppInfoRequestsInFlight = 0;
          m_setPendingAppInfo = new Set();
          m_PendingAppInfoPromise;
          m_PendingAppInfoResolve;
          m_CacheStorage = null;
          m_fnCallbackOnAppInfoLoaded = new _._();
          constructor() {
            (0, _._)(this);
          }
          Init(_) {
            this.m_CMInterface = _;
          }
          BHavePendingAppInfoRequests() {
            return (
              this.m_setPendingAppInfo.size > 0 ||
              this.m_cAppInfoRequestsInFlight > 0
            );
          }
          get CMInterface() {
            return this.m_CMInterface;
          }
          RegisterCallbackOnLoad(_) {
            if (!this.BHavePendingAppInfoRequests()) {
              (0, _._)(
                !1,
                "Registering for callback on appinfo load, but nothing queued",
              ),
                _();
              return;
            }
            this.m_fnCallbackOnAppInfoLoaded.Register(_);
          }
          IsLoadingAppID(_) {
            return this.m_setPendingAppInfo.has(_);
          }
          GetAppInfo(_) {
            if (
              ((0, _._)(
                this.m_CMInterface,
                "CAppInfoStore.GetAppInfo called before Init",
              ),
              !this.m_mapAppInfo.has(_))
            ) {
              let _ = new _._(_);
              this.m_mapAppInfo.set(_, _), this.QueueAppInfoRequest(_);
            }
            return this.m_mapAppInfo.get(_);
          }
          QueueAppInfoRequest(_) {
            return _
              ? (this.m_setPendingAppInfo.size ||
                  ((this.m_PendingAppInfoPromise = new Promise(
                    (_) => (this.m_PendingAppInfoResolve = _),
                  )),
                  window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
                this.m_setPendingAppInfo.add(_),
                this.m_PendingAppInfoPromise)
              : Promise.resolve();
          }
          async FlushPendingAppInfo() {
            const _ = this.m_PendingAppInfoResolve,
              _ = Array.from(this.m_setPendingAppInfo);
            (this.m_PendingAppInfoPromise = void 0),
              (this.m_PendingAppInfoResolve = void 0),
              this.m_setPendingAppInfo.clear(),
              await this.LoadAppInfoBatch(_),
              _?.();
          }
          async LoadAppInfoBatch(_) {
            this.m_cAppInfoRequestsInFlight++;
            let _ = await this.LoadAppInfoBatchFromLocalCache(_);
            if (_.length) {
              console.log("Loading batch of App Info from Steam: ", _),
                await this.m_CMInterface?.WaitUntilLoggedOn();
              let _ = _._.Init(_._);
              _.Body().set_language((0, _.sfN)(_._.LANGUAGE));
              const _ = 50;
              for (; _.length > 0; ) {
                const _ = Math.min(_, _.length),
                  _ = _.slice(0, _);
                (_ = _.slice(_)), _.Body().set_appids(_);
                const _ = await _._.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  _,
                );
                _.GetEResult() == _._
                  ? this.OnGetAppsResponse(_)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${_.GetEResult()}, AppIDs:`,
                      _,
                    );
              }
            }
            --this.m_cAppInfoRequestsInFlight == 0 &&
              this.m_setPendingAppInfo.size == 0 &&
              (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
              this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
          }
          OnGetAppsResponse(_) {
            let _ = [];
            for (let _ of _.Body().apps()) {
              let _ = this.m_mapAppInfo.get(_.appid());
              (0, _._)(
                _,
                `Got AppInfo response for unrequested AppID: ${_.appid()}`,
              ),
                _ &&
                  ((_ = new _._(_.appid())),
                  _.DeserializeFromMessage(_),
                  this.m_mapAppInfo.set(_.appid(), _),
                  _.push(_));
            }
            this.SaveAppInfoBatchToLocalCache(_);
          }
          OnAppOverviewChange(_) {
            for (let _ of _) {
              const _ = new _._(_.appid());
              _.DeserializeFromAppOverview(_),
                _.is_initialized && this.m_mapAppInfo.set(_.appid(), _);
            }
          }
          async EnsureAppInfoForAppIDs(_) {
            let _ = !1;
            return (
              _.forEach((_) => {
                let _ = this.m_mapAppInfo.get(_);
                if (_) {
                  _.is_valid || (_ = !0);
                  return;
                }
                (_ = new _._(_)),
                  this.m_mapAppInfo.set(_, _),
                  this.QueueAppInfoRequest(_),
                  (_ = !0);
              }),
              _ && this.m_PendingAppInfoPromise !== void 0
                ? this.m_PendingAppInfoPromise
                : Promise.resolve()
            );
          }
          SetCacheStorage(_) {
            this.m_CacheStorage = _;
          }
          GetCacheKeyForAppID(_) {
            return "APPINFO_" + _;
          }
          async LoadAppInfoBatchFromLocalCache(_) {
            if (!this.m_CacheStorage) return _;
            console.log("Loading batch of App Info from Local Cache: ", _);
            const _ = new Date(new Date().getTime() - _ * 1e3),
              _ = async (_) => {
                const _ = await this.m_CacheStorage?.GetObject(
                  this.GetCacheKeyForAppID(_),
                );
                if (!_) return _;
                let _ = this.m_mapAppInfo.get(_);
                return (
                  (0, _._)(
                    _,
                    "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                  ),
                  _
                    ? ((_ = new _._(_)),
                      _.DeserializeFromCacheObject(_),
                      _.is_initialized
                        ? (this.m_mapAppInfo.set(_, _),
                          _.time_updated_from_server < _ ? _ : null)
                        : (console.warn(
                            "Failed to deserialize cached App Info: ",
                            _,
                            _,
                          ),
                          _))
                    : _
                );
              };
            let _ = _.map((_) => _(_));
            return (await Promise.all(_)).filter((_) => _ !== null);
          }
          async SaveAppInfoBatchToLocalCache(_) {
            if (this.m_CacheStorage) {
              console.log(
                "Saving batch of App Info to Local Cache: ",
                _.map((_) => _.appid),
              );
              for (const _ of _) {
                const _ = _.SerializeToCacheObject();
                _ &&
                  this.m_CacheStorage.StoreObject(
                    this.GetCacheKeyForAppID(_.appid),
                    _,
                  );
              }
            }
          }
          Localize(_, _, _) {
            const _ = this.GetRichPresenceLoc(_);
            return _
              ? _.Localize(_, _)
              : _._.EUNIVERSE != _.wLO
                ? (console.log(
                    `Unable to find app localization information for app ${_} token ${_}, this may not have had a chance to load yet`,
                  ),
                  _)
                : "";
          }
          GetRichPresenceLoc(_) {
            if (this.m_mapRichPresenceLoc.has(_.toString())) {
              let _ = this.m_mapRichPresenceLoc.get(_.toString());
              return (
                _.m_nLastUpdated + 1e3 * 60 * _._ < Date.now() &&
                  this.QueueRichPresenceLocRequest(_),
                _
              );
            }
            let _ = new _(_);
            return (
              this.m_mapRichPresenceLoc.set(_.toString(), _),
              this.QueueRichPresenceLocRequest(_),
              _
            );
          }
          GetRichPresenceLocAsync(_) {
            let _ = this.GetRichPresenceLoc(_);
            return _.m_nLastUpdated ? Promise.resolve(_) : _.m_fetching;
          }
          OnRichPresenceLocUpdate(_, _) {
            _.m_nLastUpdated = Date.now();
            for (let _ of _) {
              let _ = _.language(),
                _ = _.m_mapLanguages.get(_);
              _
                ? _.clear()
                : (_.m_mapLanguages.set(_, new Map()),
                  (_ = _.m_mapLanguages.get(_)));
              for (let _ of _.tokens())
                _?.set(_.name().toLowerCase(), _.value());
            }
          }
          QueueRichPresenceLocRequest(_) {
            return (
              _.m_fetching ||
                ((_.m_fetching = this.m_CMInterface
                  .WaitUntilLoggedOn()
                  .then(() => {
                    let _ = _._.Init(_._);
                    return (
                      _.Body().set_appid(_.GetAppID()),
                      _.Body().set_language(_._.LANGUAGE),
                      _._.GetAppRichPresenceLocalization(
                        this.m_CMInterface.GetServiceTransport(),
                        _,
                      )
                    );
                  })
                  .then(
                    (_) => (
                      (_.m_fetching = null),
                      _.GetEResult() != _._
                        ? Promise.reject()
                        : (this.OnRichPresenceLocUpdate(
                            _,
                            _.Body().token_lists(),
                          ),
                          Promise.resolve(_))
                    ),
                  )),
                _.m_fetching.catch(() => {
                  _.m_fetching = null;
                })),
              _.m_fetching
            );
          }
        }
        _([_._], _.prototype, "OnGetAppsResponse", 1),
          _([_._], _.prototype, "OnRichPresenceLocUpdate", 1);
        const _ = new _();
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
        const _ = class _ {
          m_eCurLang = (0, _.sfN)(_._.LANGUAGE);
          m_rgHasData = (0, _._)([], _.bP9, !1);
          m_bHasLocalizationContext = !1;
          m_callback = new _._();
          GetCallback() {
            return this.m_callback;
          }
          GetCurEditLanguage() {
            return this.m_eCurLang;
          }
          SetCurEditLanguage(_) {
            return this.m_eCurLang != _
              ? ((this.m_eCurLang = _), this.GetCallback().Dispatch(_), !0)
              : !1;
          }
          SetHasLanguage(_) {
            _.forEach((_, _) => {
              this.m_rgHasData[_] != _ && (this.m_rgHasData[_] = _);
            });
          }
          BHasLanguageData(_) {
            return this.m_rgHasData[_];
          }
          GetHasLocalizationContext() {
            return this.m_bHasLocalizationContext;
          }
          SetHasLocalizationContext(_) {
            _ != this.m_bHasLocalizationContext &&
              (this.m_bHasLocalizationContext = _);
          }
          static s_globalSingletonStore;
          static Get() {
            return (
              _.s_globalSingletonStore || (_.s_globalSingletonStore = new _()),
              _.s_globalSingletonStore
            );
          }
          constructor() {
            (0, _._)(this);
          }
        };
        _([_._], _.prototype, "m_eCurLang", 2),
          _([_._], _.prototype, "m_rgHasData", 2),
          _([_._], _.prototype, "m_bHasLocalizationContext", 2),
          _([_._], _.prototype, "GetCurEditLanguage", 1),
          _([_._], _.prototype, "SetCurEditLanguage", 1),
          _([_._.bound], _.prototype, "SetHasLanguage", 1),
          _([_._], _.prototype, "BHasLanguageData", 1);
        let _ = _;
        function _() {
          return (0, _._)(() => _.Get().GetCurEditLanguage());
        }
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
        const _ = class _ {
          constructor() {
            (0, _._)(this);
          }
          giveaway_id = void 0;
          seconds_until_drawing = void 0;
          rtime_start = void 0;
          rtime_end = void 0;
          closed = void 0;
          winner_count = void 0;
          BIsValid() {
            return this.giveaway_id !== void 0 && this.giveaway_id !== null;
          }
          BStarted() {
            return this.BIsValid()
              ? this.seconds_until_drawing !== void 0 &&
                this.seconds_until_drawing >= 0
                ? !0
                : this.winner_count !== void 0 && this.winner_count > 0
              : !1;
          }
          clone() {
            const _ = new _();
            return (
              (_.giveaway_id = this.giveaway_id),
              (_.seconds_until_drawing = this.seconds_until_drawing),
              (_.rtime_start = this.rtime_start),
              (_.rtime_end = this.rtime_end),
              (_.closed = this.closed),
              (_.winner_count = this.winner_count),
              _
            );
          }
        };
        _([_._], _.prototype, "giveaway_id", 2),
          _([_._], _.prototype, "seconds_until_drawing", 2),
          _([_._], _.prototype, "rtime_start", 2),
          _([_._], _.prototype, "rtime_end", 2),
          _([_._], _.prototype, "closed", 2),
          _([_._], _.prototype, "winner_count", 2);
        let _ = _;
        const _ = class _ {
          constructor() {
            (0, _._)(this);
          }
          m_mapGiveawayIDToNextDrawInfo = new Map();
          m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
          m_bLoadedFromConfig = !1;
          m_mapNextDrawChangeCallback = new Map();
          GetKey(_, _) {
            return _ + "_" + _;
          }
          GetInfoByInstance(_, _) {
            return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
              this.GetKey(_, _),
            );
          }
          GetNextDrawChangeCallback(_) {
            let _ = this.m_mapNextDrawChangeCallback.get(_);
            return (
              _ ||
                ((_ = new _._()), this.m_mapNextDrawChangeCallback.set(_, _)),
              _
            );
          }
          CopyToGiveaway(_, _) {
            _.closed != _.closed && (_.closed = _.closed),
              _.giveaway_id != _.giveaway_id && (_.giveaway_id = _.giveaway_id),
              _.rtime_start != _.rtime_start && (_.rtime_start = _.rtime_start),
              _.rtime_end != _.rtime_end && (_.rtime_end = _.rtime_end),
              _.winner_count != _.winner_count &&
                (_.winner_count = _.winner_count),
              _.seconds_until_drawing != _.seconds_until_drawing &&
                (_.seconds_until_drawing = _.seconds_until_drawing);
          }
          async ReloadGiveaway(_, _) {
            if (!_) return null;
            let _ = _._.STORE_BASE_URL + "prizes/nextdraw/" + _,
              _ = {
                origin: self.origin,
              };
            const _ = await _().get(_, {
                params: _,
              }),
              _ = (0, _._)(() => {
                let _ = this.m_mapGiveawayIDToNextDrawInfo.get(_);
                if (
                  (_ ||
                    ((_ = new _()),
                    this.m_mapGiveawayIDToNextDrawInfo.set(_, _)),
                  this.CopyToGiveaway(_.data, _),
                  _ !== void 0)
                ) {
                  const _ = this.GetKey(_, _);
                  let _ = this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(_);
                  _ ||
                    ((_ = new _()),
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(_, _)),
                    this.CopyToGiveaway(_.data, _);
                }
                return _;
              });
            return this.GetNextDrawChangeCallback(_).Dispatch(_), _;
          }
          static s_Singleton;
          static Get() {
            return (
              _.s_Singleton ||
                ((_.s_Singleton = new _()), _.s_Singleton.Init()),
              _.s_Singleton
            );
          }
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let _ = (0, _._)("giveawaynextdraw", "application_config");
              if (_ && _.giveaway_id) {
                let _ = new _();
                this.CopyToGiveaway(_, _),
                  this.m_mapGiveawayIDToNextDrawInfo.set(_.giveaway_id, _);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        _([_._], _.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          _([_._], _.prototype, "CopyToGiveaway", 1);
        let _ = _;
        const _ = class _ {
          m_intervalID;
          m_intervalCountDownID;
          static s_GlobalInstance = 0;
          m_myInstanceNumber = 0;
          constructor() {
            (this.m_myInstanceNumber = _.s_GlobalInstance),
              (_.s_GlobalInstance += 1);
          }
          ClearRefreshInterval() {
            this.m_intervalID &&
              (window.clearInterval(this.m_intervalID),
              (this.m_intervalID = void 0));
          }
          ClearCountDown() {
            this.m_intervalCountDownID &&
              (window.clearInterval(this.m_intervalCountDownID),
              (this.m_intervalCountDownID = void 0));
          }
          SetupRefreshDataInterval(_, _) {
            if ((this.ClearRefreshInterval(), !_.closed)) {
              let _ =
                _.seconds_until_drawing !== void 0 &&
                _.seconds_until_drawing <= 0 &&
                _.winner_count == 0
                  ? 60 * 1e3
                  : 5 * 1e3;
              this.m_intervalID = window.setInterval(_, _);
            }
          }
          SetupCountDown(_, _) {
            _ !== void 0 &&
              _ > 0 &&
              (this.m_intervalCountDownID = window.setInterval(_, 1e3));
          }
        };
        _([_._], _.prototype, "ClearRefreshInterval", 1),
          _([_._], _.prototype, "ClearCountDown", 1),
          _([_._], _.prototype, "SetupRefreshDataInterval", 1),
          _([_._], _.prototype, "SetupCountDown", 1);
        let _ = _;
        function _(_, _) {
          const _ = _.Get().GetInfoByInstance(_, _.m_myInstanceNumber);
          !_ ||
            _.seconds_until_drawing === void 0 ||
            ((_.seconds_until_drawing -= 1),
            _.seconds_until_drawing == 0 && _.ClearCountDown());
        }
        function _(_, _) {
          const _ = _.Get().GetInfoByInstance(_, _.m_myInstanceNumber);
          _ &&
            _.BIsValid() &&
            _.seconds_until_drawing !== void 0 &&
            _.seconds_until_drawing <= 0 &&
            !_.closed &&
            (_.ClearCountDown(),
            _.Get()
              .ReloadGiveaway(_, _.m_myInstanceNumber)
              .then((_) => {
                _ && _.SetupCountDown(_.seconds_until_drawing, () => _(_, _));
              }));
        }
        function _(_) {
          const [_] = (0, _.useState)(new _()),
            _ = (0, _._)();
          (0, _.useEffect)(
            () => (
              _.Get()
                .ReloadGiveaway(_, _.m_myInstanceNumber)
                .then((_) => {
                  _ &&
                    (_.SetupRefreshDataInterval(_, () => _(_, _)),
                    _.SetupCountDown(_.seconds_until_drawing, () => _(_, _)),
                    _());
                }),
              () => {
                _.ClearRefreshInterval(), _.ClearCountDown();
              }
            ),
            [_, _, _],
          );
          const _ = _.Get().GetInfoByInstance(_, _.m_myInstanceNumber),
            [_, _, _] = (0, _._)(() => [
              _?.winner_count,
              _?.closed,
              _?.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !_ || _.giveaway_id == null || !_.BStarted() || _ === void 0,
            winner_count: _,
            closed: _,
            seconds_until_drawing: _,
          };
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
            const { clanSteamID: _, fnImageSelectCallBack: _ } = _,
              [_, _] = (0, _.useState)(""),
              _ = (0, _._)(_.clanSteamID.GetAccountID()),
              _ = () => _.closeModal && _.closeModal(),
              _ = _._.GetFilteredClanImages(_, _),
              _ = (_) => {
                _(_), _();
              };
            return (0, _.jsx)(_._, {
              children: (0, _.jsx)(_._, {
                onEscKeypress: _,
                children: (0, _.jsxs)(_._, {
                  children: [
                    (0, _.jsx)(_._, {
                      children: (0, _._)("#ClanImageChooser_Title"),
                    }),
                    (0, _.jsx)(_._, {
                      children: (0, _.jsxs)(_._, {
                        children: [
                          (0, _.jsx)("p", {
                            children: (0, _._)("#ClanImageChooser_Desc"),
                          }),
                          (0, _.jsx)(_._, {
                            placeholder: (0, _._)("#ClanImageChooser_Search"),
                            value: _,
                            onChange: (_) => _(_.currentTarget.value),
                          }),
                          (0, _.jsx)("div", {
                            className: _.ImagesOuterContainer,
                            children: _
                              ? (0, _.jsx)(_._, {
                                  size: "medium",
                                  string: (0, _._)("#Loading"),
                                })
                              : _.length > 0
                                ? _.map((_) =>
                                    (0, _.jsx)(
                                      _,
                                      {
                                        clanImage: _,
                                        searchStringHilight: _,
                                        fnImageClick: _,
                                      },
                                      "ci" + _.image_hash,
                                    ),
                                  )
                                : _.trim().length == 0
                                  ? (0, _.jsx)("div", {
                                      children: (0, _._)(
                                        "#ClanImageChooser_None",
                                      ),
                                    })
                                  : (0, _.jsx)("div", {
                                      children: (0, _._)(
                                        "#EventCalendar_GameSearch_NoneFound",
                                      ),
                                    }),
                          }),
                        ],
                      }),
                    }),
                    (0, _.jsx)(_._, {
                      children: (0, _.jsx)(_._, {
                        onClick: _,
                        children: (0, _._)("#Button_Cancel"),
                      }),
                    }),
                  ],
                }),
              }),
            });
          },
          _ = (_) => {
            const { clanImage: _, searchStringHilight: _, fnImageClick: _ } = _;
            let _ = _.file_name ? _.file_name : "",
              _ = _(_, _, String(_.imageid), _.Hilight);
            return (0, _.jsxs)("div", {
              className: _.ImageContainer,
              children: [
                (0, _.jsx)("div", {
                  className: _.Image,
                  style: {
                    backgroundImage: `url( '${_.thumb_url}' )`,
                  },
                  onDoubleClick: () => _(_),
                }),
                (0, _.jsx)("div", {
                  className: _.ImageFilename,
                  title: _,
                  children: _,
                }),
              ],
            });
          };
        function _(_, _, _, _) {
          let _ = [];
          if (_.length > 0) {
            let _ = _.toLocaleLowerCase();
            for (let _ = 0; _ < _.length; ) {
              let _ = _.indexOf(_, _);
              if (_ < 0) {
                _.push(
                  (0, _.jsx)(
                    "span",
                    {
                      children: _.substring(_),
                    },
                    _ + "_" + String(_),
                  ),
                );
                break;
              } else
                _ < _ &&
                  _.push(
                    (0, _.jsx)(
                      "span",
                      {
                        children: _.substring(_, _),
                      },
                      _ + "_" + String(_),
                    ),
                  ),
                  _.push(
                    (0, _.jsx)(
                      "span",
                      {
                        className: _,
                        children: _.substr(_, _.length),
                      },
                      _ + "_" + String(_),
                    ),
                  ),
                  (_ = _ + _.length);
            }
          } else
            _.push(
              (0, _.jsx)(
                "span",
                {
                  children: _,
                },
                _ + "_null",
              ),
            );
          return _;
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
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
        let _ = class extends _.Component {
          GenerateLanguageOptions() {
            let _ = [];
            const {
              fnFilterLanguage: _,
              fnLangHasData: _,
              fnLastUpdateRTime: _,
              fnIsLangSupported: _,
            } = this.props;
            this.props.bAllowUnsetOption &&
              _.push(
                (0, _.jsx)(
                  "option",
                  {
                    value: _.xPp,
                    children: (0, _._)("#language_selection_none"),
                  },
                  "langpicker_unset",
                ),
              );
            let _ = new Array();
            const _ = this.props.realms || [_._.k_ESteamRealmGlobal];
            for (const _ of _._.GetLanguageListForRealms(_)) {
              if (_ && !_(_)) continue;
              const _ = (0, _.LgB)(_),
                _ = (0, _._)("#Language_" + _),
                _ = !!(_ && _(_));
              _.push({
                eLang: _,
                sLocName: _,
                bSupported: _,
              });
            }
            _.sort((_, _) =>
              _.bSupported != _.bSupported
                ? _.bSupported
                  ? -1
                  : 1
                : _.sLocName.localeCompare(_.sLocName),
            );
            let _ = !1;
            for (const _ of _) {
              _.bSupported != _ &&
                (_.push(
                  (0, _.jsx)(
                    "option",
                    {
                      className: _().SupportedGroupLabel,
                      disabled: !0,
                      children: (0, _._)(
                        _.bSupported
                          ? "#LanguageGroup_Supported"
                          : "#LanguageGroup_Unsupported",
                      ),
                    },
                    _.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                  ),
                ),
                (_ = _.bSupported));
              const _ = _ && _(_.eLang),
                _ = _ && _(_.eLang);
              let _ = _.sLocName;
              _ &&
                _ !== 0 &&
                ((_ += " "),
                (_ += (0, _._)(
                  "#Language_Last_Update",
                  (0, _._)(_) +
                    " @ " +
                    (0, _._)(_, {
                      bForce24HourClock: !1,
                    }),
                ))),
                _.push(
                  (0, _.jsx)(
                    "option",
                    {
                      value: _.eLang,
                      className: (0, _._)(
                        {
                          [_().LanguageWithContent]: _,
                        },
                        _.bSupported
                          ? _().SupportedLanguage
                          : _().UnsupportedLanguage,
                      ),
                      children: _,
                    },
                    "langpicker" + _.eLang + (_ ? "_hasdata" : ""),
                  ),
                );
            }
            return _;
          }
          OnLanguageChange(_) {
            const { fnOnLanguageChanged: _, selectedLang: _ } = this.props;
            let _ = Number.parseInt(_.currentTarget.value);
            _ != _ && _ && _(_);
          }
          render() {
            const { selectedLang: _, bDisabled: _, strTooltip: _ } = this.props;
            let _ = this.GenerateLanguageOptions();
            return (0, _.jsx)(_._, {
              toolTipContent: _,
              children: (0, _.jsx)("select", {
                value: _,
                onChange: this.OnLanguageChange,
                disabled: _,
                children: _,
              }),
            });
          }
        };
        _([_._], _.prototype, "OnLanguageChange", 1), (_ = _([_._], _));
        function _(_) {
          const [_, _] = useObserver(() => [
            CEditorLocStore.Get().GetHasLocalizationContext(),
            CEditorLocStore.Get().GetCurEditLanguage(),
          ]);
          return jsx(_, {
            selectedLang: _,
            fnLangHasData: CEditorLocStore.Get().BHasLanguageData,
            fnOnLanguageChanged: CEditorLocStore.Get().SetCurEditLanguage,
            bDisabled: !_,
            strTooltip: _ ? void 0 : Localize("#Localization_EditorNotInFocus"),
          });
        }
        function _(_) {
          const { fnLangHasData: _ } = _;
          React.useEffect(
            () => (
              CEditorLocStore.Get().SetHasLocalizationContext(!0),
              () => CEditorLocStore.Get().SetHasLocalizationContext(!1)
            ),
            [],
          );
          const _ = useObserver(() => {
            const _ = [];
            for (let _ = k_ELanguage_English; _ < k_ELanguage_MAX; ++_)
              _[_] = !!(_ && _(_));
            return _;
          });
          return (
            React.useEffect(() => CEditorLocStore.Get().SetHasLanguage(_), [_]),
            jsx(Fragment, {})
          );
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return _.jsondata.sale_logo_cross_promo_only
            ? !1
            : (_.jsondata.localized_sale_logo?.filter(Boolean).length ?? 0) > 0;
        }
        function _(_) {
          const { eventModel: _, language: _ } = _,
            [_, _] = (0, _._)(() => [
              _.jsondata.sale_logo_url,
              _._.GetWithFallback(_.jsondata.localized_sale_logo, _),
            ]);
          return _ && _?.length > 0
            ? _
              ? (0, _.jsx)("a", {
                  className: _().SalePageLogoCtn,
                  href: _._.STORE_BASE_URL + _,
                  children: (0, _.jsx)(_, {
                    ..._,
                  }),
                })
              : (0, _.jsx)("div", {
                  className: (0, _._)(_().SalePageLogoCtn, "SalePageLogoCtn"),
                  children: (0, _.jsx)(_, {
                    ..._,
                  }),
                })
            : null;
        }
        function _(_) {
          const { eventModel: _, language: _ } = _,
            _ = (0, _._)(_, "sale_logo", _);
          return (0, _.jsx)("img", {
            src: _,
            alt: "logo",
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { strURL: _ } = _;
          return _
            ? (0, _.jsx)("div", {
                className: _.MenuBackgroundReflection,
                children: (0, _.jsx)("img", {
                  alt: "",
                  src: _,
                }),
              })
            : null;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { event: _, bIsPreview: _ } = _;
          let _ = _.jsondata.sale_background_video_webm,
            _ = _.jsondata.sale_background_video_mp4;
          return _ || _
            ? (0, _.jsx)(_._, {
                children: (0, _.jsxs)("video", {
                  loop: !0,
                  muted: !0,
                  autoPlay: !0,
                  playsInline: !0,
                  className: (0, _._)(
                    _().SaleBackground,
                    _()[`CustomStyle_${_.jsondata.sale_vanity_id}`],
                    "SaleBackground",
                    _().fullscreen_bg_video,
                  ),
                  style: {
                    backgroundColor: _
                      ? _.jsondata.sale_background_color
                      : void 0,
                  },
                  children: [
                    _ &&
                      (0, _.jsx)("source", {
                        src: _,
                        type: "video/webm",
                      }),
                    _ &&
                      !_._.IN_CLIENT &&
                      (0, _.jsx)("source", {
                        src: _,
                        type: "video/mp4",
                      }),
                  ],
                }),
              })
            : null;
        }
        function _(_) {
          const {
              event: _,
              language: _,
              children: _,
              bIsPreview: _,
              personalizedCarousels: _,
            } = _,
            _ = _.useRef(null),
            _ = (0, _._)(_, "sale_header", _),
            [_] = (0, _._)(() => [_.jsondata.sale_sub_menu]);
          _.useEffect(() => {
            if (!_) return;
            const _ = new Image();
            (_.onload = () => {
              const _ = (100 * _.width) / 950 + "%";
              _.current && _.current.style.setProperty("--background-scale", _);
            }),
              (_.src = _);
          }, [_]);
          const _ = _.jsondata.sale_sections?.some(
              (_) => _.section_type === "contenthubmaincarousel",
            ),
            _ =
              _.jsondata.item_source_type === _._.k_EContentHub &&
              ((_.jsondata.sale_vanity_id &&
                _.jsondata.sale_vanity_id.includes("contenthubsalepage_")) ||
                _),
            _ = _ ? `url(${_})` : "none";
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _
                ? (0, _.jsx)(_._, {
                    event: _,
                    language: _,
                    bIsPreview: _,
                    subMenu: _,
                    styleVariation: _._.k_SubMenu,
                    personalizedCarousels: _,
                  })
                : (0, _.jsx)(_, {
                    strURL: _,
                  }),
              (0, _.jsx)("div", {
                className: (0, _._)({
                  SaleBackgroundCtn: !0,
                  ContentHubSalePage: _,
                }),
                children: (0, _.jsxs)("div", {
                  className: (0, _._)(
                    _()[`CustomStyle_${_.jsondata.sale_vanity_id}`],
                    "SaleCustomCSS",
                    _().SaleBackground,
                    "SaleBackground",
                  ),
                  style: {
                    display: "flex",
                    position: "relative",
                    flexDirection: "column",
                    backgroundColor: _.jsondata.sale_background_color,
                  },
                  ref: _,
                  children: [
                    _ && _.jsondata.sale_background_repeat == "coverBlur"
                      ? (0, _.jsx)("img", {
                          className: (0, _._)(
                            _().SalePageBackground,
                            _().BackgroundImage,
                            _().Blur,
                          ),
                          src: _,
                          alt: "Header",
                        })
                      : (0, _.jsx)("div", {
                          className: (0, _._)(
                            _().SalePageBackground,
                            _().BackgroundImage,
                          ),
                          style: {
                            backgroundImage: _,
                            backgroundRepeat: _.jsondata.sale_background_repeat,
                          },
                        }),
                    (0, _.jsx)(_, {
                      event: _,
                      bIsPreview: _,
                    }),
                    (0, _.jsx)(_.Fragment, {
                      children: _,
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { eventModel: _ } = _,
            { data: _ } = (0, _._)(_.clanSteamID.GetAccountID());
          if (
            !_ ||
            (!_.can_edit && !_.support_user) ||
            (0, _._)() == "community"
          )
            return;
          const _ = _.GetAllTags(),
            _ = [];
          if (
            (_.includes("hide_store") &&
              _.push(
                _._.Localize("#Sale_SaleEventIsHidden_Reason_ProductHide"),
              ),
            _.includes("mod_hide_store") &&
              _.support_user &&
              _.push(_._.Localize("#Sale_SaleEventIsHidden_Reason_Mod")),
            !_.BIsVisibleEvent() &&
              _.includes("contenthub") &&
              _.push(
                _._.Localize("#Sale_SaleEventIsHidden_ContentHub_Preview"),
              ),
            !(_.BIsVisibleEvent() && _.length == 0))
          )
            return (0, _.jsx)("div", {
              className: _().SalePageHiddenWarning,
              children: (0, _.jsxs)("div", {
                children: [
                  !_.BIsVisibleEvent() &&
                    (0, _.jsx)("div", {
                      className: _().WarningText,
                      children: _._.Localize("#Sale_SaleEventIsHidden"),
                    }),
                  _.length > 0 &&
                    (0, _.jsxs)("div", {
                      className: _().WarningText,
                      children: [
                        _._.LocalizePlural(
                          "#Sale_SaleEventIsHidden_Reason",
                          _.length,
                        ),
                        (0, _.jsx)("ul", {
                          children: _.map((_) =>
                            (0, _.jsx)(
                              "li",
                              {
                                children: _,
                              },
                              _,
                            ),
                          ),
                        }),
                      ],
                    }),
                ],
              }),
            });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { rgPresenters: _ } = _;
          if (!_ || _.length == 0) return null;
          const _ = (0, _.sfN)(_._.LANGUAGE);
          return _.length == 1
            ? (0, _.jsx)("div", {
                className: (0, _._)(
                  _().PresenterDisclaimer,
                  "PresenterDisclaimer",
                ),
                children: _._.LocalizeReact(
                  "#SalePresented_By",
                  (0, _.jsx)(_, {
                    presentor: _[0],
                    lang: _,
                  }),
                ),
              })
            : (0, _.jsx)("div", {
                className: (0, _._)(
                  _().PresenterDisclaimer,
                  "PresenterDisclaimer",
                ),
                children: _._.LocalizeReact(
                  "#SalePresented_By_Multi",
                  _.slice(0, _.length - 1).map((_, _) =>
                    (0, _.jsxs)(
                      _.Fragment,
                      {
                        children: [
                          (0, _.jsx)(_, {
                            presentor: _,
                            lang: _,
                          }),
                          _.length > 2 && ", ",
                        ],
                      },
                      _.url,
                    ),
                  ),
                  (0, _.jsx)(_, {
                    presentor: _[_.length - 1],
                    lang: _,
                  }),
                ),
              });
        }
        function _(_) {
          const { presentor: _, lang: _ } = _,
            _ = (0, _._)(_.url);
          return (0, _.jsx)(_._, {
            href: _,
            bUseLinkFilter: !0,
            className: _().PresenterLabel,
            children: _._.GetWithFallback(_.localized_presenter_name, _),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { event: _, broadcastEmbedContext: _ } = _,
            _ = !!_?.jsondata?.broadcast_display_wide_player,
            _ = !!_?.jsondata?.broadcast_dispaly_wide_player_allow_chat;
          return (0, _.jsx)(_.Fragment, {
            children:
              !!(
                _.BEventCanShowBroadcastWidget() &&
                _.BSaleShowBroadcastAtTopOfPage()
              ) &&
              (0, _.jsx)(_._, {
                event: _,
                broadcastEmbedContext: _,
                bWideBroadcastDisplay: _,
                bWideBroadcastPermitChat: _,
              }),
          });
        }
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
          _ = __webpack_require__._(_);
        function _(_, _) {
          return _
            ? _
              ? !!_.valve_admin
              : !!(_.valve_admin || _.support_user)
            : !1;
        }
        function _(_, _) {
          const _ = !!(_ && _.BIsClanAccount()),
            { data: _ } = (0, _._)(_ ? _.GetAccountID() : 0);
          return _ && _(_, _);
        }
        function _(_) {
          const { clanSteamID: _, _: _ } = _;
          return _(_, _.requireAdmin)
            ? (0, _.jsx)("div", {
                _: _,
                className: (0, _._)(
                  _.className,
                  _.requireAdmin
                    ? _.ValveOnlyAdminBackground
                    : _.ValveOnlyBackground,
                ),
                children: _.children,
              })
            : null;
        }
        var _ = __webpack_require__("chunkid");
        const _ = 12,
          _ = 240;
        function _(_) {
          const { event: _ } = _,
            [_] = (0, _._)(_._, void 0),
            [_, _] = _.useState(!1),
            _ = (0, _._)("rgMLRecommenderWishlist", "application_config"),
            _ = Array.isArray(_) && _.length > 0 && Number.isInteger(_[0]);
          return !_.BIsNextFest() || !_ || _ == _._.Random || (0, _._)(_) > 0
            ? null
            : (0, _.jsxs)(_, {
                clanSteamID: _.clanSteamID,
                className: _().Ctn,
                children: [
                  (0, _.jsxs)(_._, {
                    className: _().Header,
                    onClick: () => _(!_),
                    children: [
                      _ ? "\u25BC" : "\u25B6",
                      " Next Fest personalized order (VO)",
                    ],
                  }),
                  _ &&
                    (0, _.jsx)(_, {
                      event: _,
                      rgRecommendedAppIDs: _,
                    }),
                ],
              });
        }
        function _(_) {
          const { event: _, rgRecommendedAppIDs: _ } = _,
            [_, _] = _.useState(void 0);
          (0, _._)(_, _._);
          const [_, _] = _.useState(void 0),
            [_, _] = _.useState(""),
            _ = _.jsondata.sale_ml_recommender_weight_exponent || _._,
            _ = parseFloat(_),
            _ = _ ?? (0, _._)(_),
            _ = _ || _,
            _ = _.useMemo(() => (0, _._)(_, _, (_) => _, _, _), [_, _, _]),
            _ = _.useMemo(() => new Map(_.map((_, _) => [_, _])), [_]),
            _ = _.useMemo(() => new Map(_.map((_, _) => [_, _])), [_]),
            _ = _.length,
            _ = (_) => _._.Get().GetApp(_)?.GetName() ?? `App ${_}`,
            _ = (_) => `hsl(${Math.round((240 * _.get(_)) / _)}, 80%, 65%)`,
            _ = (_, _) =>
              (0, _.jsx)(
                "div",
                {
                  className: (0, _._)(_().Row, _ == _ && _().Highlighted),
                  style: {
                    height: _,
                    color: _(_),
                  },
                  title: `${_(_)} (${_}): recommended #${_.get(_) + 1}, shuffled to #${_.get(_) + 1}`,
                  onMouseEnter: () => _(_),
                  children: _,
                },
                _,
              ),
            _ = (_, _) =>
              (0, _.jsx)(
                "line",
                {
                  _: 0,
                  _: (_.get(_) + 0.5) * _,
                  _: _,
                  _: (_.get(_) + 0.5) * _,
                  stroke: _ ? "white" : _(_),
                  strokeWidth: _ ? 2 : 1,
                  strokeOpacity: _ ? 1 : _ === void 0 ? 0.6 : 0.15,
                },
                _,
              );
          return (0, _.jsxs)("div", {
            className: _().Body,
            children: [
              (0, _.jsxs)("div", {
                className: _().Summary,
                children: [
                  _,
                  " recommendations, exponent ",
                  _,
                  _ < 0 && " (shuffle disabled)",
                  ", seed ",
                  _,
                  ". Apps that aren't recommended are placed after these in a uniform random order. Each section shows the apps it contains in this same relative order. Hover a row to highlight it.",
                ],
              }),
              (0, _.jsxs)("div", {
                className: _().Controls,
                children: [
                  (0, _.jsx)(_._, {
                    className: _().ControlButton,
                    onClick: () => _(_._()),
                    children: "Reshuffle",
                  }),
                  (0, _.jsxs)("label", {
                    children: [
                      "Exponent",
                      " ",
                      (0, _.jsx)("input", {
                        type: "number",
                        min: -1,
                        step: 0.1,
                        className: _().ExponentInput,
                        placeholder: String(_),
                        value: _,
                        onChange: (_) => _(_.target.value),
                      }),
                    ],
                  }),
                  (_ !== void 0 || _ != "") &&
                    (0, _.jsx)(_._, {
                      className: _().ControlButton,
                      onClick: () => {
                        _(void 0), _("");
                      },
                      children: "Reset to page's order",
                    }),
                  (0, _.jsx)("span", {
                    children: "Only affects this chart, not the page",
                  }),
                ],
              }),
              (0, _.jsxs)("div", {
                className: _().Chart,
                onMouseLeave: () => _(void 0),
                children: [
                  (0, _.jsxs)("div", {
                    className: _().Column,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().ColumnTitle,
                        children: "Recommended order",
                      }),
                      _.map((_, _) => _(_, `#${_ + 1} ${_(_)}`)),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: _().Column,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().ColumnTitle,
                        children: "\xA0",
                      }),
                      (0, _.jsxs)("svg", {
                        width: _,
                        height: _ * _,
                        children: [
                          _.filter((_) => _ != _).map((_) => _(_, !1)),
                          _ !== void 0 && _.has(_) && _(_, !0),
                        ],
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: _().Column,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().ColumnTitle,
                        children: "Shuffled order",
                      }),
                      _.map((_) => _(_, `#${_.get(_) + 1} ${_(_)}`)),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const {
            event: _,
            fnOnChangeDayIndex: _,
            addtionalAdminButtons: _,
          } = _;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                event: _,
              }),
              (0, _.jsx)(_._, {
                eventModel: _,
                fnOnUpdateSaleDayIndex: _,
                addtionalAdminButtons: _,
                bSupportsSticky: !0,
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = new Map();
        function _(_, _) {
          const _ = _.findIndex((_) => _.section_type === "tabs");
          if (_ >= 0 && _ !== void 0) {
            const _ = _[_],
              _ = _.tabs?.findIndex((_) => _.unique_id === _);
            if (_ !== void 0 && _ >= 0 && _.tabs)
              return {
                selectedTabBackgroundDef: _.tabs[_].tab_background_img_groups,
                nTabSaleSectionIndex: _,
              };
          }
          return {
            selectedTabBackgroundDef: void 0,
            nTabSaleSectionIndex: void 0,
          };
        }
        function _(_, _, _) {
          const _ = new Map(),
            _ = new Map(),
            _ = new Map();
          let _,
            _,
            _ = 0;
          const { selectedTabBackgroundDef: _, nTabSaleSectionIndex: _ } = _(
            _,
            _,
          );
          if (_?.enabled) {
            const _ = _.groups?.length;
            if (
              (_.groups?.forEach((_, _) => {
                if (_ >= _.length || _[_].section_type == "tabs") return;
                const _ = new Array();
                for (
                  let _ = 0;
                  _ < (_?.num_sections || 0) &&
                  _ < _.length &&
                  _[_].section_type != "tabs";
                  ++_, ++_
                ) {
                  const _ = _[_].unique_id;
                  _.push(_),
                    _.set(_, _.background_id),
                    _ === 0 && _.set(_, _.background_id);
                }
                if (
                  (_.set(_.background_id, {
                    nBackgroundGroupID: _.background_id,
                    sectionUniqueIDs: _,
                    nSaleSectionLastIndex: _ - 1,
                    nUniqueIDNextSaleSection:
                      _ < _.length && (_ === void 0 || _ < _)
                        ? _[_].unique_id
                        : void 0,
                  }),
                  _ + 1 == _ && _.last_group_until_cover_section_until_end)
                )
                  for (
                    let _ = _;
                    _ < _.length &&
                    (!_ || !_.enabled || _ < _) &&
                    !(_[_].section_type == "tabs" && _?.enabled);
                    ++_
                  ) {
                    const _ = _[_].unique_id;
                    _.set(_, _.background_id);
                  }
              }),
              _ < _.length && (_ === void 0 || _ < _) && (_ = _[_].unique_id),
              _?.enabled && _ !== void 0)
            ) {
              let _ = _;
              const _ = _.groups.length;
              for (
                _.groups.forEach((_, _) => {
                  if (_ >= _.length) return;
                  const _ = new Array();
                  for (
                    let _ = 0;
                    _ < _.num_sections && _ < _.length;
                    ++_, ++_
                  ) {
                    const _ = _[_],
                      _ = _.unique_id;
                    (0, _._)(_, _)
                      ? (_.push(_),
                        _.set(_, _.background_id),
                        _ === 0 && _.set(_, _.background_id))
                      : --_;
                  }
                  let _ = _;
                  for (; _ < _.length && !(0, _._)(_, _[_]); ) _ += 1;
                  if (
                    (_.set(_.background_id, {
                      nBackgroundGroupID: _.background_id,
                      sectionUniqueIDs: _,
                      nSaleSectionLastIndex: _ - 1,
                      nUniqueIDNextSaleSection:
                        _ < _.length ? _[_].unique_id : void 0,
                    }),
                    _ + 1 == _ && _.last_group_until_cover_section_until_end)
                  )
                    for (let _ = _; _ < _.length; ++_) {
                      const _ = _[_];
                      if (_.section_type == "tabs" && _?.enabled) break;
                      (0, _._)(_, _) && _.set(_.unique_id, _.background_id);
                    }
                });
                _ < _.length && !(0, _._)(_, _[_]);
              )
                _++;
              _ < _.length && (_ = _[_].unique_id);
            }
          } else _?.length > 0 && (_ = _[0].unique_id);
          return {
            mapGroupToSections: _,
            nFirstSaleSectionIDWithoutGroup: _,
            mapSectionToGroup: _,
            mapFirstSectionToGroup: _,
            selectedTabBackgroundDef: _,
            nTabSaleSectionIndex: _,
            nFirstTabSectionIDWithoutGroup: _,
          };
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _, _, _) {
          let _ = _.jsondata.sale_background_img_groups.groups.find(
            (_) => _.background_id === _.groupID,
          );
          return (
            !_ &&
              _ >= 0 &&
              (_ = _.GetSaleSectionFirstMatchByType("tabs")
                ?.tabs?.find((_) => _.unique_id == _)
                ?.tab_background_img_groups?.groups?.find(
                  (_) => _.background_id == _.groupID,
                )),
            (0, _.jsx)(
              _,
              {
                eventModel: _,
                displayDef: _,
                derivedGroupInfo: _.derivedGroupInfo,
                children:
                  _ &&
                  _.randomize_section_order &&
                  _ !== _._.EPreviewMode_EditBackground
                    ? (0, _.jsx)(_, {
                        clanEventGID: _.GID,
                        elSaleSections: _.elSaleSections,
                      })
                    : _.elSaleSections,
              },
              "background_group_" + _.groupID,
            )
          );
        }
        function _(_) {
          const { clanEventGID: _, elSaleSections: _ } = _,
            [_, _] = (0, _._)(`sale_section_seed_${_}`, (0, _._)());
          if (!_ || _.length === 0) return null;
          if (_.length > 1 && _ !== void 0) {
            const _ = (0, _._)(_);
            return (0, _.jsx)(_.Fragment, {
              children: _._(_, 0, _),
            });
          }
          return (0, _.jsx)(_.Fragment, {
            children: _,
          });
        }
        function _(_) {
          const {
              displayDef: _,
              children: _,
              eventModel: _,
              derivedGroupInfo: _,
            } = _,
            _ = (0, _._)(),
            _ = _.useCallback(
              (_, _) => {
                _.set(_.nBackgroundGroupID, _);
              },
              [_],
            ),
            _ = (0, _._)(_);
          if (!_ || (Array.isArray(_) && _.length == 0)) return null;
          if (!_)
            return (0, _.jsx)(_.Fragment, {
              children: _,
            });
          let _;
          if (_.localized_background_art) {
            const _ = (0, _.LgB)(_),
              _ =
                _ in _.localized_background_art
                  ? _
                  : _._.GetLanguageFallback(_._.LANGUAGE),
              _ = _.localized_background_art[_];
            _ && (_ = _._.GenerateURLFromHashAndExt(_.clanSteamID, _));
          }
          let _ = "linear-gradient(";
          switch (_.gradient_setting) {
            case "top-to-bottom":
              _ += "to bottom,";
              break;
            case "left-to-right":
              _ += "to right,";
              break;
            case "top-left-to-bottom-right":
              _ += "to bottom right,";
              break;
            case "single-color":
              _ = void 0;
              break;
          }
          _.background_color1 &&
          _.background_color2 &&
          _.background_color1 != _.background_color2
            ? ((_ += " " + _.background_color1),
              (_ += ", " + _.background_color2),
              (_ += ")"))
            : (_ = null);
          const _ =
              _.background_color1 &&
              (!_.background_color2 ||
                _.gradient_setting == "single-color" ||
                _.background_color1 == _.background_color2),
            _ = _.scaling_setting !== "cover" && _.position_setting !== "unset",
            _ = {
              backgroundImage: _ ? `url(${_}), ${_}` : `url(${_})`,
              backgroundSize: _.scaling_setting,
              backgroundRepeat: _.repeat_setting,
              backgroundPosition: _ ? _.position_setting : void 0,
              backgroundColor: _ ? _.background_color1 : void 0,
              overflowY: "hidden",
            };
          return (0, _.jsx)("div", {
            ref: _,
            style: _,
            _: "background_group_" + _.background_id,
            children: _,
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return typeof _ == "string" || typeof _ == "number"
            ? _
            : JSON.stringify(_);
        }
        class _ {
          Keyify = (_) => _(_);
          m_mapVisible = new Map();
          m_mapOwners = new Map();
          IsAlreadyVisible(_) {
            return this.m_mapVisible.has(this.Keyify(_));
          }
          SortKey(_, _) {
            const _ = this.m_mapVisible.get(this.Keyify(_)) || 0,
              _ = this.m_mapVisible.get(this.Keyify(_)) || 0;
            return _ - _;
          }
          BMarkAppVisibile(_, _) {
            const _ = this.EnsureOwnerSetExists(_),
              _ = this.Keyify(_);
            return (
              _.add(_),
              this.IsAlreadyVisible(_)
                ? (this.m_mapVisible.set(
                    _,
                    (this.m_mapVisible.get(_) ?? 0) + 1,
                  ),
                  !1)
                : (this.m_mapVisible.set(_, 1), !0)
            );
          }
          BMarkAppNotVisible(_, _) {
            if (!this.IsAlreadyVisible(_)) return !1;
            const _ = this.EnsureOwnerSetExists(_),
              _ = this.Keyify(_);
            return _.has(_) ? (this.DecrementAppVisibility(_), !0) : !1;
          }
          MarkAllAppsNotVisible(_) {
            this.m_mapOwners.has(_) &&
              (this.m_mapOwners
                .get(_)
                .forEach(this.DecrementAppVisibility.bind(this)),
              this.m_mapOwners.delete(_));
          }
          EnsureOwnerSetExists(_) {
            let _ = this.m_mapOwners.get(_);
            return (
              _ ||
                (this.m_mapOwners.set(_, new Set()),
                (_ = this.m_mapOwners.get(_))),
              _
            );
          }
          DecrementAppVisibility(_) {
            const _ = (this.m_mapVisible.get(_) ?? 0) - 1;
            _ > 0 ? this.m_mapVisible.set(_, _) : this.m_mapVisible.delete(_);
          }
        }
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
          _ = __webpack_require__._(_);
        function _(_) {
          return `rgba(${_.rgb._}, ${_.rgb._}, ${_.rgb._}, ${_.rgb._})`;
        }
        function _(_) {
          const _ = parseInt(_.slice(1), 16),
            _ = (_ >> 16) & 255,
            _ = (_ >> 8) & 255,
            _ = _ & 255;
          return `rgba(${_}, ${_}, ${_}, 1)`;
        }
        function _(_) {
          const { color: _, onChange: _, strTitle: _, disableAlpha: _ } = _,
            [_, _] = (0, _.useState)(() => _ || "rgba(255, 255, 255, 1)"),
            _ = (0, _.useCallback)(async () => {
              if (!("EyeDropper" in window)) {
                alert(_._.Localize("#Sale_EyeDropperError"));
                return;
              }
              try {
                const _ = (await new window.EyeDropper().open()).sRGBHex,
                  _ = _(_);
                _(_), _(_);
              } catch (_) {
                console.warn(_._.Localize("#Sale_EyeDropperFailed"), _);
              }
            }, [_]);
          return (0, _.jsxs)("div", {
            className: _().ColorPickerDialog,
            children: [
              !!_ &&
                (0, _.jsx)(_._, {
                  children: _,
                }),
              (0, _.jsx)(_._, {
                onChange: (_) => {
                  const _ = _(_);
                  _(_), _(_);
                },
                color: _,
                disableAlpha: _,
                className: _().ColorPickerCtn,
              }),
              (0, _.jsx)("div", {
                className: _().EyeDropperCtn,
                children: (0, _.jsx)(_._, {
                  toolTipContent: _._.Localize("#Sale_BackgroundColorPicker"),
                  children: (0, _.jsx)(_._, {
                    className: _().EyeDropperBtn,
                    onClick: _,
                    children: (0, _.jsx)(_.O7b, {}),
                  }),
                }),
              }),
            ],
          });
        }
        function _(_) {
          const {
              color: _,
              onChange: _,
              onRequestClose: _,
              disableAlpha: _,
              strTitle: _,
            } = _,
            _ = (0, _.useRef)(null);
          return (
            (0, _.useEffect)(() => {
              const _ = _.current?.ownerDocument ?? document,
                _ = (_) => {
                  _.current && !_.current.contains(_.target) && _();
                },
                _ = (_) => {
                  _.key === "Escape" && _();
                };
              return (
                _.addEventListener("pointerdown", _, !0),
                _.addEventListener("keydown", _, !0),
                () => {
                  _.removeEventListener("pointerdown", _, !0),
                    _.removeEventListener("keydown", _, !0);
                }
              );
            }, [_]),
            (0, _.jsx)("div", {
              ref: _,
              children: (0, _.jsx)(_, {
                color: _,
                disableAlpha: _,
                strTitle: _ ?? _._.Localize("#Button_Color"),
                onChange: _,
              }),
            })
          );
        }
        function _() {
          return {
            openColorPicker: (0, _.useCallback)((_, _) => {
              let _ = null;
              const _ = () => _?.Hide();
              _ = (0, _._)(
                (0, _.jsx)(_, {
                  color: _.color,
                  disableAlpha: _.disableAlpha,
                  strTitle: _.strTitle,
                  onChange: _.onChange,
                  onRequestClose: _,
                }),
                _,
                {
                  bDisablePopTop: !0,
                },
              );
            }, []),
          };
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
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
        const _ = class _ {
          m_curLocImageGroup = null;
          m_curLocImageGroupType = null;
          constructor() {
            (0, _._)(this);
          }
          static async BDoesClanImageFileExistsOnCDNOrOrigin(_, _, _, _) {
            let _ =
                _._.COMMUNITY_BASE_URL +
                "gid/" +
                _.ConvertTo64BitString() +
                "/hasclanimagefile",
              _ = {
                image_hash_and_ext: _,
                lang: "" + _,
              };
            return (
              (
                await _().get(_, {
                  params: _,
                  cancelToken: _ && _.token,
                })
              ).data.success == _._
            );
          }
          SetPrimaryImageForImageGroup(_, _) {
            (!this.m_curLocImageGroup ||
              this.m_curLocImageGroup.primaryImage.imageid != _.imageid ||
              _ != this.m_curLocImageGroupType) &&
              ((this.m_curLocImageGroup = {
                primaryImage: _,
                localized_images: [],
              }),
              (this.m_curLocImageGroupType = _),
              (this.m_curLocImageGroup.localized_images = (0, _._)(
                this.m_curLocImageGroup.localized_images,
                _.bP9,
                null,
              )));
          }
          GetPrimaryImageForImageGroup() {
            return this.m_curLocImageGroup?.primaryImage;
          }
          ClearImageGroup() {
            (this.m_curLocImageGroup = null),
              (this.m_curLocImageGroupType = null);
          }
          GetLocalizedImageGroupForEdit() {
            return this.m_curLocImageGroup;
          }
          GetLocalizedImageGroupForEditAsURL(_, _) {
            if (this.m_curLocImageGroup) {
              let _ = this.m_curLocImageGroup.primaryImage;
              return this.m_curLocImageGroup.localized_images[_]
                ? this.m_curLocImageGroup.localized_images[_]
                : _._.GenerateURLFromHashAndExt(_, _._.GetHashAndExt(_) ?? "");
            }
            return null;
          }
          async DetermineAvailableLocalizationForGroup(_) {
            if (!this.m_curLocImageGroup) return;
            const _ = this.m_curLocImageGroup.primaryImage,
              _ = _._.InitFromClanID(_.clanAccountID),
              _ = _._.GetHashAndExt(_) ?? "",
              _ = [];
            for (let _ = _.Bhc; _ < _.bP9; ++_)
              _.push(_.BDoesClanImageFileExistsOnCDNOrOrigin(_, _, _, _));
            const _ = await Promise.all(_);
            (0, _._)(() => {
              for (let _ = _.Bhc; _ < _.bP9; ++_)
                _[_] &&
                  (this.m_curLocImageGroup.localized_images[_] =
                    _._.GenerateURLFromHashAndExtAndLang(
                      _,
                      _,
                      _._.full,
                      _,
                      this.m_curLocImageGroupType ?? void 0,
                    ));
            });
          }
          SetLocalizedImageGroupAtLang(_, _, _) {
            this.m_curLocImageGroup &&
              (this.m_curLocImageGroup.localized_images[_] = _
                ? _._.GenerateURLFromHashAndExtAndLang(
                    _,
                    _,
                    _._.full,
                    _,
                    this.m_curLocImageGroupType ?? void 0,
                  )
                : null);
          }
          AddLocalizeImageUploaded(_, _) {
            if (!this.m_curLocImageGroup) return;
            let _ = this.m_curLocImageGroup.primaryImage;
            if (_?.image_hash == _) {
              const _ = _._.InitFromClanID(_.clanAccountID),
                _ = _._.GetHashAndExt(_);
              _ &&
                (this.m_curLocImageGroup.localized_images[_] =
                  _._.GenerateURLFromHashAndExtAndLang(
                    _,
                    _,
                    _._.full,
                    _,
                    this.m_curLocImageGroupType ?? void 0,
                  ));
            }
          }
          GetAllLocalizedGroupImages() {
            return (
              (this.m_curLocImageGroup &&
                this.m_curLocImageGroup.localized_images) ||
              []
            );
          }
          GetAllLocalizedGroupImageHashAndExts() {
            return this.GetAllLocalizedGroupImages()
              .filter(Boolean)
              .map((_) => _._.GetHashAndExtFromURL(_));
          }
        };
        _([_._], _.prototype, "m_curLocImageGroup", 2);
        let _ = _;
        const _ = new _();
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          const _ = _.useRef(void 0),
            _ = _.useCallback(
              (_) => {
                _.currentTarget.files.length > 0 &&
                  (_(_.currentTarget.files), (_.currentTarget.value = ""));
              },
              [_],
            ),
            _ = _.useCallback(() => _.current.click(), []);
          return [
            _.createPortal(
              (0, _.jsx)("form", {
                onSubmit: _,
                style: {
                  display: "none",
                },
                children: (0, _.jsx)("input", {
                  ..._,
                  type: "file",
                  ref: _,
                  onChange: _,
                }),
              }),
              window.document.body,
            ),
            _,
          ];
        }
        function _(_) {
          const [_, _] = _.useState(!1),
            _ = _.useCallback((_) => {
              ((_.dataTransfer.files && _.dataTransfer.files[0]) ||
                (_.dataTransfer.types && _.dataTransfer.types[0] == "Files")) &&
                _(!0);
            }, []),
            _ = _.useCallback((_) => {
              _._(_) && _(!1);
            }, []),
            _ = _.useCallback(() => _(!1), []),
            _ = _ ? _ : void 0,
            _ = _.useCallback(
              (_) => {
                _.dataTransfer.files?.length &&
                  (_(_.dataTransfer.files, _),
                  _.preventDefault(),
                  _.stopPropagation()),
                  _(!1);
              },
              [_],
            );
          return [
            {
              onDragEnter: _,
              onDragLeave: _,
              onDragEnd: _,
              onDragOver: _,
              onDrop: _,
            },
            _,
          ];
        }
        async function _(_, _ = 1e3) {
          return await new Promise((_, _) => {
            const _ = new Image();
            (_.src = _),
              (_.onload = () => _("success")),
              (_.onerror = () => _("error")),
              _ > 0 && window.setTimeout(() => _("timeout"), _);
          });
        }
        function _(_) {
          _.preventDefault();
        }
        function _(_) {
          switch (_.type) {
            case "image/jpeg":
              return "jpg";
            case "image/png":
              return "png";
            case "image/gif":
              return "gif";
            default:
              const _ = _.name.match(/(?<=\.)[^.]+$/);
              return _ ? _[0] : void 0;
          }
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const {
              onDropFiles: _,
              renderDesciption: _,
              elAdditonalButtons: _,
              elOverrideDragAndDropText: _,
            } = _,
            [_, _] = _(_),
            [_, _] = _(_, {
              accept: "image/png, image/jpeg, image/gif, image/webp",
              multiple: !0,
            });
          return (0, _.jsxs)("div", {
            ..._,
            className: (0, _._)(
              _ ? _().DragAndDropContainerDragging : _().DragAndDropContainer,
              "DragAndDropContainer",
            ),
            children: [
              !!_ && _(),
              (0, _.jsx)("div", {
                children: _ || (0, _._)("#ImagePicker_DragAndDrop"),
              }),
              (0, _.jsxs)("div", {
                className: _().ImageUploadBar,
                children: [
                  _,
                  (0, _.jsxs)("label", {
                    onClick: _,
                    children: [
                      (0, _.jsxs)("span", {
                        children: [(0, _._)("#ImagePicker_OrBrowse"), " "],
                      }),
                      (0, _.jsx)("span", {
                        className: _().SelectImageButton,
                        children: (0, _._)("#selectimage_select_file"),
                      }),
                    ],
                  }),
                ],
              }),
              _,
              _.children,
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              imageUploader: _,
              fnUploadComplete: _,
              elOverrideDragAndDropText: _,
              forceResolution: _,
              elAdditonalButtons: _,
              rgRealmList: _,
            } = _,
            [_, _] = (0, _._)(() => [
              _.GetUploadImages(),
              _._.Get().GetCurEditLanguage(),
            ]),
            _ = _.useCallback(
              async (_) => {
                let _ = Array.from(_),
                  _ = !0;
                for (let _ = 0; _ < _.length; _++) {
                  const _ = _[_],
                    { language: _ } = (0, _._)(_?.name, _);
                  try {
                    const _ = (0, _._)(_, _, _);
                    (_ = await _.AddImageForLanguage(_, _)),
                      _ ||
                        (console.error(
                          "ImageUploaderPanel.OnDropFiles: failed on i=" +
                            _ +
                            " file=" +
                            _.name,
                        ),
                        (0, _._)(
                          (0, _.jsx)(_._, {
                            strDescription: (0, _._)(
                              "#ImagePicker_Error",
                              _.name,
                            ),
                          }),
                          window,
                        ));
                  } catch (_) {
                    let _ = (0, _._)(_);
                    console.error(
                      "ImageUploaderPanel.OnDropFiles: " + _.strErrorMsg,
                      _,
                    ),
                      (0, _._)(
                        (0, _.jsx)(_._, {
                          strDescription: (0, _._)(
                            "#EventError_Code",
                            _.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                }
                return _;
              },
              [_, _, _],
            ),
            _ = _.useMemo(
              () =>
                _ instanceof Array
                  ? _
                  : [
                      (0, _.jsx)(
                        _.Fragment,
                        {
                          children: _,
                        },
                        "elAdditonalButtons",
                      ),
                    ],
              [_],
            );
          (0, _._)(() =>
            _.map((_) => ({
              _: _.GetCurrentImageOption(),
              _: _.language,
            })),
          );
          const _ = async () => {
            const _ = await _.UploadAllImages(_);
            _?.(_);
          };
          return (0, _.jsxs)(_, {
            onDropFiles: _,
            elAdditonalButtons: _,
            elOverrideDragAndDropText: _,
            children: [
              (0, _.jsx)(_.Fragment, {
                children: (0, _.jsx)("div", {
                  className: _().UploadPreviewCtn,
                  children: _.map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        asset: _,
                        forceResolution: _,
                        fnOnRemove: () => _.DeleteUploadImage(_),
                        languageRealms: _,
                      },
                      "arttabupload_" + _.filename + "_" + _.uploadTime,
                    ),
                  ),
                }),
              }),
              (0, _.jsx)(_, {
                imageUploader: _,
                fnOnUploadImageRequested: _,
              }),
            ],
          });
        }
        function _(_) {
          const { imageUploader: _, fnOnUploadImageRequested: _ } = _,
            [_] = (0, _._)(() => [_.GetUploadImages()]),
            _ = _.some((_) => _.status == "pending"),
            _ = _.some(
              (_) =>
                _.status == "waiting" ||
                _.status == "uploading" ||
                _.status == "processing",
            );
          return (0, _.jsxs)("div", {
            style: {
              display: "flex",
            },
            className: _().UploadPreviewButtonsCtn,
            children: [
              !!_.length &&
                (0, _.jsx)(_._, {
                  style: {
                    margin: "8px",
                  },
                  onClick: _,
                  disabled: !_,
                  children: (0, _._)("#ImageUpload_Upload"),
                }),
              !!_.length &&
                (0, _.jsx)(_._, {
                  style: {
                    margin: "8px",
                  },
                  onClick: _.ClearImages,
                  disabled: _,
                  children: (0, _._)("#ImageUpload_Clear"),
                }),
            ],
          });
        }
        function _(_, _, _, _, _) {
          let _ = new Array();
          return (
            _.GetUploadImages().forEach((_) => {
              _.push(
                jsx(
                  _,
                  {
                    asset: _,
                    forceResolution: _,
                    forceFileType: _,
                    fnOnRemove: () => _.DeleteUploadImage(_),
                    languageRealms: _,
                  },
                  _ + _.file + "_" + _.uploadTime,
                ),
              );
            }),
            _
          );
        }
        const _ = (0, _._)(_);
        function _(_) {
          const _ = (_) => {
              if (_ instanceof _._) {
                _.ResetImage();
                const _ = window,
                  _ = (0, _.jsx)(_._, {
                    ownerWin: _,
                    uploadFile: _,
                    forceResolution: _.forceResolution,
                    fileType: _.forceFileType || _._._,
                  });
                (0, _._)(_, _, "CropModal", {
                  strTitle: (0, _._)("#ImageUpload_CropModalTitle"),
                });
              } else
                console.log(
                  "ImageUploadEmbeddedDialog trying to crop non image",
                  _.fileType,
                  JSON.stringify(_.GetCurrentImageOption()),
                );
            },
            { asset: _, fnOnRemove: _, languageRealms: _ } = _,
            _ = _.ImageOptions?.map((_) => {
              let _ = _?.fnGetLabelText(),
                _;
              _.bEnforceDimensions && (_ += ` - ${_.width}x${_.height}`),
                _.bDeprecated &&
                  ((_ += ` ${(0, _._)("#ImageUpload_Deprecated")}`),
                  (_ = (0, _._)("#ImageUpload_Deprecated_ttip")));
              let _;
              return (
                (_.BIsOriginalMinimumDimensions(_) &&
                  _.FileTypeMatchesImageTypes(_)) ||
                  (_ = _().ImageDimensionTooSmall),
                {
                  label: _,
                  data: _,
                  strOptionClass: _,
                  tooltip: _,
                }
              );
            }).filter((_) => !_.data.bHiddenFromDropdown),
            _ = {
              pending: (0, _._)("#ImageUpload_Pending"),
              waiting: (0, _._)("#ImageUpload_Waiting"),
              uploading: (0, _._)("#ImageUpload_Uploading"),
              processing: (0, _._)("#ImageUpload_Processing"),
              success: (0, _._)("#ImageUpload_SuccessCard"),
              failed: (0, _._)("#ImageUpload_Failed"),
            },
            _ = _.BSupportsLanguages()
              ? _(_._.GetLanguageListForRealms(_ ?? [_._.k_ESteamRealmGlobal]))
              : null,
            _ = _.IsValidAssetType(_.forceResolution, _.forceFileType),
            _ = _.status == "pending";
          let _ = _[_.status];
          _.status == "pending" &&
            (_.needsCrop
              ? (_ = (0, _._)("#ImageUpload_NeedsCrop"))
              : _.error && (_ = (0, _._)("#ImageUpload_Invalid")));
          let _;
          const _ = _.GetCurrentImageOption();
          return (
            _ && (_ = _?.find((_) => _.data.sKey == _.sKey)?.data),
            _ || (_ = _?.[0]?.data),
            (0, _.jsxs)("div", {
              className: _().UploadPreview,
              children: [
                (0, _.jsx)("div", {
                  className: _().UploadPreviewDelete,
                  onClick: () => _(_),
                  children: (0, _.jsx)(_.sED, {}),
                }),
                (0, _.jsx)(_, {
                  asset: _,
                }),
                _ &&
                  (0, _.jsx)(_._, {
                    strDropDownClassName: _().DropDownScroll,
                    rgOptions: _,
                    selectedOption: _.language,
                    onChange: (_) => (_.language = _.data),
                    disabled: !_,
                  }),
                _ &&
                  _?.length > 1 &&
                  (0, _.jsx)(_._, {
                    label: _.GetImageOptionLabel(),
                    rgOptions: _,
                    selectedOption: _,
                    onChange: (_) => _.SetCurrentImageOption(_.data),
                    disabled: !_,
                  }),
                _ &&
                  _.warnings?.map((_, _) =>
                    (0, _.jsx)(
                      "div",
                      {
                        className: _().UploadPreviewWarning,
                        children: _,
                      },
                      `warning${_}`,
                    ),
                  ),
                _ &&
                  _.messages?.map((_, _) =>
                    (0, _.jsx)(
                      "div",
                      {
                        className: _().UploadPreviewMessage,
                        children: _,
                      },
                      `message${_}`,
                    ),
                  ),
                (0, _.jsxs)("div", {
                  className: (0, _._)({
                    [_().FlexColumnContainer]: !0,
                    [_().UploadPreviewError]: _.status == "failed",
                  }),
                  children: [
                    _,
                    (0, _._)(_.status) &&
                      (0, _.jsx)("div", {
                        className: _().FlexCenter,
                        children: (0, _.jsx)(_._, {
                          size: "small",
                        }),
                      }),
                  ],
                }),
                (0, _.jsx)("div", {
                  className: _().UploadPreviewError,
                  children: _.message,
                }),
                _ &&
                  _.error &&
                  (0, _.jsx)("div", {
                    className: _().UploadPreviewError,
                    children: _.error,
                  }),
                _ &&
                  _.needsCrop &&
                  (0, _.jsx)(_._, {
                    onClick: () => _(_),
                    children: (0, _._)("#ImageUpload_OpenEditor"),
                  }),
              ],
            })
          );
        }
        function _(_) {
          const { asset: _ } = _;
          return _.BIsVideo()
            ? (0, _.jsxs)("div", {
                className: _().PreviewImgCtn,
                onClick: (_) =>
                  (0, _._)(
                    (0, _.jsx)(_, {
                      asset: _,
                    }),
                    (0, _._)(_),
                  ),
                children: [
                  (0, _.jsxs)("span", {
                    className: _().PreviewImgInfo,
                    children: [_.width, " x ", _.height],
                  }),
                  (0, _.jsx)("video", {
                    height: 120,
                    controls: !1,
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    children: (0, _.jsx)("source", {
                      src: _.dataUrl,
                    }),
                  }),
                ],
              })
            : (0, _.jsx)("div", {
                className: _().PreviewImgCtn,
                style: {
                  backgroundImage: `url(${_.dataUrl})`,
                },
                children: (0, _.jsxs)("span", {
                  className: _().PreviewImgInfo,
                  children: [_.width, " x ", _.height],
                }),
              });
        }
        function _(_) {
          const { asset: _, closeModal: _ } = _;
          return (0, _.jsx)(_._, {
            bAlertDialog: !0,
            closeModal: _,
            bAllowFullSize: !0,
            children: (0, _.jsx)("video", {
              controls: !0,
              autoPlay: !0,
              loop: !0,
              muted: !0,
              children: (0, _.jsx)("source", {
                src: _.dataUrl,
              }),
            }),
          });
        }
        function _(_) {
          const _ = [],
            _ = new Array();
          for (const _ of _) {
            if (_ == _.X51) continue;
            const _ = (0, _._)("#Language_" + (0, _.LgB)(_));
            _.push({
              label: _,
              data: _,
            });
          }
          return (
            _.sort((_, _) => _.label.localeCompare(_.label)),
            _.forEach((_) =>
              _.push({
                label: _.label,
                data: _.data,
              }),
            ),
            _
          );
        }
        var _ = ((_) => (
          (_[(_.k_eInsertThumbnail = 1)] = "k_eInsertThumbnail"),
          (_[(_.k_eInsertFullImage = 2)] = "k_eInsertFullImage"),
          (_[(_.k_eShowImageGroup = 3)] = "k_eShowImageGroup"),
          (_[(_.k_eInsertVideo = 4)] = "k_eInsertVideo"),
          _
        ))(_ || {});
        function _(_, _ = !1) {
          return _
            ? `${k_ClanImageReplacementToken}/${_.clanAccountID}/${ClanImageUtils.GetThumbHashAndExt(_)}`
            : `${k_ClanImageReplacementToken}/${_.clanAccountID}/${ClanImageUtils.GetHashAndExt(_)}`;
        }
        function _(_, _, _) {
          let _ = "";
          const _ = _(_);
          if (_ == 4)
            (_ = "[video webm="),
              _.file_type == EClanImageFileType.k_EClanImageFileType_WEBM &&
                (_ += _),
              (_ += " mp4="),
              _.file_type == EClanImageFileType.k_EClanImageFileType_MP4 &&
                (_ += _),
              (_ += " autoplay=true controls=false][/video]");
          else if (_ == 2) _ = "[img]" + _ + "[/img]";
          else {
            const _ = _(_, !0);
            _ = "[url=" + _ + "][img]" + _ + "[/img][/url]";
          }
          _.InsertText(_);
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { fnSetImageSearch: _ } = _,
            _ = (0, _.useRef)(null);
          return (0, _.jsx)("div", {
            className: _.PickerTitle,
            children: (0, _.jsx)("input", {
              ref: _,
              className: _.SearchInput,
              type: "text",
              placeholder: (0, _._)("#ImagePicker_Search"),
              onChange: (_) => _(_.currentTarget.value),
              onKeyDown: (_) => {
                _.key == "Escape" &&
                  (_(""), _.current && (_.current.value = ""));
              },
            }),
          });
        }
        const _ = _.memo(function (_) {
          const {
            fileNameSearch: _,
            clanAccountID: _,
            imageInsertCallBack: _,
            fnOnExpandImage: _,
            showImageActions: _ = !0,
            InternalOpenLocalizeImageGroup: _,
          } = _;
          return (0, _.jsx)(_, {
            clanAccountID: _,
            fileNameSearch: _,
            children: (_, _) =>
              _.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    clanImage: _,
                    searchStringHilight: _,
                    imageInsertCallBack: _,
                    showImageActions: _,
                    fnOnOpenLocalizedImageGroup: _,
                    OnImageClick: _,
                  },
                  _.imageid,
                ),
              ),
          });
        });
        function _(_) {
          const { clanAccountID: _, fileNameSearch: _, children: _ } = _,
            _ = (0, _._)(_),
            _ = _.trim().toLowerCase() || "",
            _ = _._.GetFilteredClanImagesList(_, _);
          if (_.length == 0) {
            const _ = _._.InitFromClanID(_);
            let _ = _._.GetLoadState(_);
            return _ && _.loaded
              ? (0, _.jsx)(
                  "div",
                  {
                    className: _().ResultNotification,
                    children:
                      _.length > 0
                        ? (0, _._)("#ImagePicker_EmptySearch")
                        : (0, _._)("#ImagePicker_Empty"),
                  },
                  "ImagePicker_Result",
                )
              : _ && _.errMsg
                ? (0, _.jsx)(
                    "div",
                    {
                      className: _().ErrorCode,
                      children: (0, _._)("#ImagePicker_Error", _.errMsg),
                    },
                    "ImagePicker_Result",
                  )
                : (0, _.jsx)(
                    "div",
                    {
                      className: _().ResultNotification,
                      children: (0, _._)("#Loading"),
                    },
                    "ImagePicker_Result",
                  );
          } else return _(_, _);
        }
        function _(_) {
          const {
            clanAccountID: _,
            fileNameSearch: _,
            onImageSelected: _,
            selectedItem: _,
          } = _;
          return jsx(_, {
            clanAccountID: _,
            fileNameSearch: _,
            children: (_) =>
              jsx("div", {
                className: styles.ClanImageGrid,
                children: _.map((_) =>
                  jsx(
                    _,
                    {
                      clanImage: _,
                      selected: _ == _,
                      onImageSelected: _,
                    },
                    _.imageid,
                  ),
                ),
              }),
          });
        }
        function _(_) {
          const {
              clanImage: _,
              searchStringHilight: _,
              imageInsertCallBack: _,
              OnImageClick: _,
              showImageActions: _,
              fnOnOpenLocalizedImageGroup: _,
            } = _,
            [_, _] = _.useState(!1),
            _ = () => _(_, _.k_eInsertFullImage),
            _ = () => _(_, _.k_eInsertVideo),
            _ = () => _(_, _.k_eInsertThumbnail),
            _ = (_) => {
              _.url &&
                (_.dataTransfer.setData("text", _.url),
                _._.GetClanImageDragListener().forEach((_) => {
                  let _ = _._.InitFromClanID(_.clanAccountID);
                  _(_, !0);
                }));
            },
            _ = (_) => {
              _.url &&
                _._.GetClanImageDragListener().forEach((_) => {
                  let _ = _._.InitFromClanID(_.clanAccountID);
                  _(_, !1);
                });
            },
            _ = (_) => {
              (0, _._)(
                (0, _.jsx)(_._, {
                  strTitle: (0, _._)("#ImagePicker_DeleteImageTitle"),
                  strDescription: "",
                  onOK: _,
                  onCancel: _,
                  closeModal: _,
                  children: (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)("div", {
                        children: (0, _._)(
                          "#ImagePicker_DeleteAreYouSure",
                          _.file_name ?? "",
                        ),
                      }),
                      (0, _.jsx)("br", {}),
                      (0, _.jsx)("br", {}),
                      (0, _.jsx)("div", {
                        children: (0, _._)("#ImagePicker_DeleteWarning"),
                      }),
                    ],
                  }),
                }),
                (0, _._)(_) ?? window,
              );
            },
            _ = (_) => {
              console.log("ClanImageWrapper on delete error: " + _),
                (0, _._)(
                  (0, _.jsx)(_._, {
                    strTitle: (0, _._)("#Error_FailureNotice"),
                    strDescription: (0, _._)("#EventDisplay_DeleteEvent_Error"),
                    children: (0, _.jsx)("p", {
                      children: _,
                    }),
                  }),
                  window,
                );
            },
            _ = () => {
              _(!0);
              let _ = _._.InitFromClanID(_.clanAccountID);
              _._.DeleteClanImage(_, _)
                .then((_) => {
                  _.success != _._ && _((0, _._)(_).strErrorMsg), _(!1);
                })
                .catch((_) => {
                  _((0, _._)(_).strErrorMsg), _(!1);
                }),
                _();
            },
            _ = () => {},
            _ = () => {
              _ && _(_);
            },
            _ = _.file_name ? _.file_name : "",
            _ = (0, _._)(_, _, String(_.imageid), _().Hilight),
            _ = _._.BIsClanImageVideo(_),
            _ = _ && !_ && !_,
            _ = _ && !_ && !_,
            _ = _ && !_ && _,
            _ = _ && !_ && !_;
          return (0, _.jsx)(_._, {
            placeholderHeight: "100vh",
            className: _().ImageWrapperContainer,
            rootMargin: "0px 0px 100% 0px",
            children: (0, _.jsxs)("div", {
              className: _().ImageButton,
              children: [
                (0, _.jsx)("div", {
                  className: _().ImageWrapper,
                  style: {
                    backgroundImage: _ ? "" : `url( '${_.thumb_url}' )`,
                  },
                  draggable: !0,
                  onDragStart: _,
                  onDragEnd: _,
                  onDoubleClick: _,
                  onClick: _,
                  children: (0, _.jsx)(_, {
                    clanImage: _,
                    className: _().VideoBackground,
                  }),
                }),
                _ &&
                  (0, _.jsx)("span", {
                    className: _().Full,
                    onClick: _,
                    children: (0, _._)("#ImagePicker_FullSize"),
                  }),
                _ &&
                  (0, _.jsx)(_._, {
                    size: "medium",
                    className: _().FloatingThrobber,
                  }),
                _ &&
                  (0, _.jsx)("span", {
                    className: _().Thumb,
                    onClick: _,
                    children: (0, _._)("#ImagePicker_Thumbnail"),
                  }),
                _ &&
                  _ &&
                  (0, _.jsx)(_, {
                    bDeleting: _,
                    clanImage: _,
                    fnOnOpenLocalizedImageGroup: _,
                  }),
                _ &&
                  (0, _.jsx)("span", {
                    className: _().Full,
                    onClick: _,
                    children: (0, _._)("#ImagePicker_Video"),
                  }),
                !_ &&
                  (0, _.jsx)("span", {
                    className: _().Delete,
                    onClick: _,
                    children: (0, _.jsx)("img", {}),
                  }),
                (0, _.jsx)("div", {
                  className: _().ImageWrapperFilename,
                  title: _,
                  children: _,
                }),
              ],
            }),
          });
        }
        function _(_) {
          const {
              clanImage: _,
              fnOnOpenLocalizedImageGroup: _,
              bDeleting: _,
            } = _,
            { data: _ } = (0, _._)(_.clanAccountID);
          return _ || !_?.valve_admin
            ? null
            : (0, _.jsx)("span", {
                className: (0, _._)(_().Localized, _().ValveOnlyBackground),
                onClick: () => _?.(_),
                children: "(VO) " + (0, _._)("#ImagePicker_Localized"),
              });
        }
        function _(_) {
          const { clanImage: _, className: _ } = _;
          return _._.BIsClanImageVideo(_)
            ? (0, _.jsx)("video", {
                autoPlay: !0,
                loop: !0,
                muted: !0,
                className: _,
                children: (0, _.jsx)("source", {
                  src: _.url,
                  type: "video/" + (_.file_type == _._._ ? "mp4" : "webm"),
                }),
              })
            : null;
        }
        function _(_) {
          const { clanImage: _, onImageSelected: _, selected: _ } = _;
          return jsxs("div", {
            className: classnames(
              styles.ClanImageGridItem,
              _ && styles.Selected,
            ),
            onClick: () => _(_, !1),
            onDoubleClick: () => _(_, !0),
            title: _.file_name,
            children: [
              jsx("div", {
                className: styles.ImgCtn,
                children: ClanImageUtils.BIsClanImageVideo(_)
                  ? jsx(_, {
                      clanImage: _,
                    })
                  : jsx("img", {
                      src: _.url,
                      loading: "lazy",
                    }),
              }),
              jsx("div", {
                className: styles.Name,
                children: _.file_name,
              }),
            ],
          });
        }
        function _(_) {
          const { clanSteamID: _, closeModal: _, OnClanImageSelected: _ } = _,
            _ = _.useCallback(
              (_, _) => {
                _?.(_, _), _?.();
              },
              [_, _],
            ),
            [_, _] = _.useState("");
          return (0, _.jsxs)(_._, {
            strTitle: (0, _._)("#ImagePicker_Images"),
            strDescription: (0, _._)("#ImagePicker_DoubleClickToSelect"),
            bAlertDialog: !0,
            onOK: _,
            onCancel: _,
            children: [
              (0, _.jsx)(_, {
                fnSetImageSearch: _,
              }),
              (0, _.jsx)(_, {
                clanAccountID: _.GetAccountID(),
                fileNameSearch: _,
                imageInsertCallBack: _,
                showImageActions: !1,
              }),
            ],
          });
        }
        function _(_) {
          const { clanSteamID: _, OnClanImageSelected: _ } = _;
          return (0, _.jsxs)("div", {
            className: _().ImageUploadBar,
            children: [
              (0, _.jsxs)("label", {
                htmlFor: "clanimagedialog",
                children: [
                  (0, _.jsxs)("span", {
                    children: [(0, _._)("#ImagePicker_PreviousImages"), " "],
                  }),
                  (0, _.jsx)("span", {
                    className: _().SelectImageButton,
                    children: (0, _._)("#ImagePicker_PreviousImages2"),
                  }),
                ],
              }),
              (0, _.jsx)("input", {
                style: {
                  display: "none",
                },
                _: "clanimagedialog",
                type: "button",
                onClick: (_) => {
                  (0, _._)(
                    (0, _.jsx)(_, {
                      clanSteamID: _,
                      OnClanImageSelected: _,
                    }),
                    (0, _._)(_) ?? window,
                  );
                },
              }),
            ],
          });
        }
        function _(_) {
          const {
              clanSteamID: _,
              rgSupportArtwork: _,
              localizedPrimaryImage: _,
              bAllowPreviousClanImageSelection: _,
              fnSetImageURL: _,
              rgRealmList: _,
            } = _,
            [_] = (0, _._)(() => [_._.Get().GetCurEditLanguage()]),
            _ = (0, _._)(_, _, _),
            _ = _.uploaderOverride || _,
            [_, _] = _.useState(!1),
            _ = _.useCallback(
              async (_, _) => {
                if (!_) {
                  _(!0);
                  try {
                    const { language: _ } = (0, _._)(_.file_name ?? "", _),
                      _ = (0, _._)(_, _, _);
                    await _.AddExistingClanImage(_, _);
                  } catch (_) {
                    let _ = (0, _._)(_);
                    console.error("AddExistingClanImage: " + _.strErrorMsg, _),
                      (0, _._)(
                        (0, _.jsx)(_._, {
                          strDescription: (0, _._)(
                            "#EventError_Code",
                            _.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                  _(!1);
                }
              },
              [_, _, _, _],
            ),
            _ = _.useMemo(
              () =>
                _
                  ? [
                      [
                        (0, _.jsx)(
                          _,
                          {
                            clanSteamID: _,
                            OnClanImageSelected: _,
                          },
                          "clanartworkpicker",
                        ),
                      ],
                    ]
                  : null,
              [_, _, _],
            ),
            _ = (_) => {
              for (const _ of _) {
                const _ = _.uploadResult;
                if (_?.origimagehash) {
                  const _ = (0, _._)(_.language, _, _);
                  _.AddLocalizeImageUploaded(_.origimagehash, _);
                } else {
                  const _ = _._.GetClanImageByImageHash(_, _?.image_hash ?? ""),
                    _ = _.image.GetCurrentImageOption();
                  if (_ && _) {
                    const _ = (0, _._)(_.image.language, _, _);
                    _(_.artworkType, _, _);
                  }
                }
              }
            };
          return (0, _.jsx)(_, {
            ..._,
            imageUploader: _,
            rgRealmList: _,
            elAdditonalButtons: _
              ? [
                  (0, _.jsx)(
                    _._,
                    {
                      position: "center",
                      size: "medium",
                      string: (0, _._)("#Loading"),
                    },
                    "throbbing",
                  ),
                ]
              : _,
            fnUploadComplete: _,
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              clanImage: _,
              closeModal: _,
              lang: _,
              fnOnArtworkLangChange: _,
              realms: _,
              fnLangHasData: _,
            } = _,
            [_, _] = (0, _.useState)(_),
            _ = _._.InitFromClanID(_.clanAccountID),
            _ = (0, _._)(() =>
              _._.GenerateURLFromHashAndExt(_, _._.GetHashAndExt(_) ?? ""),
            );
          return (0, _.jsx)(_._, {
            strTitle: (0, _._)("#selectimage_change_artwork_lang_title"),
            strDescription: (0, _._)("#selectimage_change_artworl_lang_desc"),
            onOK: () => _?.(_, _, _),
            onCancel: _,
            closeModal: _,
            children: (0, _.jsxs)("div", {
              className: (0, _._)(_().FlexColumnContainer, _().ReassignCtn),
              children: [
                (0, _.jsx)("div", {
                  className: _().ImagePreviewContainer,
                  children: (0, _.jsx)("img", {
                    className: _().ArtworkPreview,
                    src: _,
                  }),
                }),
                (0, _.jsx)(_._, {
                  selectedLang: _,
                  fnLangHasData: _,
                  fnOnLanguageChanged: _,
                  realms: _,
                }),
              ],
            }),
          });
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          if (!_) return _;
          const _ = _.lastIndexOf(".");
          return _ === -1 ? _ : _.substring(0, _);
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const {
            clanSteamID: _,
            fnGetImageHash: _,
            fnLangHasData: _,
            fnOnRemoveImage: _,
          } = _;
          (0, _._)(_.GetAccountID());
          const _ = _.useMemo(() => {
              let _ = new Array();
              const _ = _._.GetLanguageListForRealms([
                _._.k_ESteamRealmGlobal,
                _._.k_ESteamRealmChina,
              ]);
              for (const _ of _) {
                const _ = _(_);
                if (_) {
                  const _ = (0, _.LgB)(_),
                    _ = (0, _._)("#Language_" + _);
                  _.push({
                    lang: _,
                    strLang: _,
                    locLang: _,
                    imgHash: _,
                  });
                }
              }
              return (
                (_ = _.sort((_, _) =>
                  _.locLang > _.locLang ? 1 : _.locLang < _.locLang ? -1 : 0,
                )),
                _
              );
            }, [_]),
            [_, _, _] = (0, _._)();
          return (0, _.jsxs)("div", {
            className: _().SelectImageLanguagesCtn,
            children: [
              (0, _.jsx)("div", {
                className: _().SelectImageTitle,
                children: (0, _._)("#selectimage_uploaded_languages"),
              }),
              (0, _.jsx)("div", {
                className: _().LanguageListContainer,
                children: _.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      langData: _,
                      ..._,
                    },
                    "lang_select_" + _.GetAccountID() + " " + _.strLang,
                  ),
                ),
              }),
              !!_ &&
                (0, _.jsxs)(_._, {
                  onClick: _,
                  children: [
                    (0, _._)("#Sale_RemoveAll"),
                    (0, _.jsx)(_._, {
                      tooltip: (0, _._)("#Sale_RemoveAll_Tooltip"),
                    }),
                  ],
                }),
              (0, _.jsx)(_._, {
                active: _,
                children: (0, _.jsx)(_._, {
                  strTitle: (0, _._)("#Dialog_AreYouSure"),
                  strDescription: (0, _._)("#ImageUpload_DeleteAll_Confirm"),
                  closeModal: _,
                  onOK: () => {
                    for (let _ = 0; _ < _.bP9; _++) _ && _ && _(_) && _(_);
                  },
                }),
              }),
            ],
          });
        }
        function _(_) {
          const {
              clanSteamID: _,
              langData: _,
              langOverride: _,
              fnOnLanguagePreviewChange: _,
              fnOnArtworkLangChange: _,
              fnOnRemoveImage: _,
            } = _,
            [_, _] = (0, _._)(() => {
              const _ = _._.GetClanImageByImageHash(_, _.imgHash);
              let _ = "";
              _ &&
                (_ = _._.GenerateURLFromHashAndExtAndLang(
                  _,
                  _._.GetHashAndExt(_),
                  _._.full,
                  _.lang,
                ));
              let _ = _().LanguageSelectorSelected;
              return (
                _ != _.lang &&
                  (_ = _.imgHash
                    ? _().LanguageSelector
                    : _().LanguageSelectorNoData),
                [_, _]
              );
            });
          return (0, _.jsxs)("div", {
            _: _.strLang,
            className: _().LanguageContainer,
            onClick: (_) => {
              let _ = (0, _.sfN)(_.currentTarget._);
              _(_);
            },
            children: [
              (0, _.jsx)("div", {
                className: _,
                children: _.locLang,
              }),
              (0, _.jsxs)("span", {
                className: _().LanguageOptions,
                children: [
                  !!_ &&
                    (0, _.jsx)("a", {
                      href: _,
                      target: "_blank",
                      children: (0, _.jsx)(_._, {
                        toolTipContent: (0, _._)("#selectimage_viewimage_ttip"),
                        children: _.YNO(),
                      }),
                    }),
                  !!_ &&
                    (0, _.jsx)(_, {
                      ..._,
                    }),
                  !!_ &&
                    (0, _.jsx)(_, {
                      fnOnRemoveImage: _,
                      langData: _,
                    }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const {
              clanSteamID: _,
              langData: _,
              fnOnArtworkLangChange: _,
              fnGetImageHash: _,
              fnLangHasData: _,
              realms: _,
            } = _,
            [_, _, _] = (0, _._)(),
            _ = (0, _._)(() => {
              const _ = _(_.lang);
              return (
                (0, _._)(
                  !_ || !_.includes("."),
                  "ChangeLanguageButton: Unexpected File Extension: " + _,
                ),
                _._.GetClanImageByImageHash(_, _)
              );
            });
          if (!_) {
            console.error("image does not exists on server");
            return;
          }
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_._, {
                toolTipContent: (0, _._)("#selectimage_reassign_image_ttip"),
                children: (0, _.jsx)("img", {
                  "data-lang": _.lang,
                  src: _,
                  onClick: () => _(),
                }),
              }),
              (0, _.jsx)(_._, {
                children: (0, _.jsx)(_._, {
                  active: _,
                  children: (0, _.jsx)(_, {
                    clanImage: _,
                    lang: _.lang,
                    fnOnArtworkLangChange: _,
                    fnLangHasData: _,
                    realms: _,
                    closeModal: _,
                  }),
                }),
              }),
            ],
          });
        }
        function _(_) {
          const { fnOnRemoveImage: _, langData: _ } = _,
            [_, _, _] = (0, _._)();
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_._, {
                toolTipContent: (0, _._)("#selectimage_delete_image_ttip"),
                children: (0, _.jsx)("img", {
                  "data-lang": _.lang,
                  src: _._,
                  onClick: _,
                }),
              }),
              (0, _.jsx)(_._, {
                children: (0, _.jsx)(_._, {
                  active: _,
                  children: (0, _.jsx)(_._, {
                    strTitle: (0, _._)("#selectimage_remove_image"),
                    strDescription: (0, _._)(
                      "#selectimage_remove_details",
                      (0, _._)("#Language_" + (0, _.LgB)(_.lang)),
                    ),
                    onOK: () => {
                      _(_.lang);
                    },
                    closeModal: _,
                  }),
                }),
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              event: _,
              spotlightURLOverride: _,
              fnHandleOpenEvent: _,
              fnImageFailureCallback: _,
              fnFilterImageURLsForKnownFailures: _,
              langOverride: _,
            } = _,
            _ = (0, _._)(),
            _ = _.useCallback(
              (_) => {
                _.preventDefault(), _ && _(_);
              },
              [_, _],
            ),
            _ = _ || (0, _.sfN)(_._.LANGUAGE),
            [_, _, _] = (0, _._)(() => [
              _.GetSummaryWithFallback(_),
              _.GetNameWithFallback(_),
              _.BShowLibrarySpotlightText(),
            ]);
          let _ = "spotlight",
            _ = _._.spotlight_main;
          (_.appid == 2434320 || _._.EUNIVERSE == _._) &&
            ((_ = _
              ? "localized_store_app_spotlight_mobile"
              : "localized_store_app_spotlight"),
            (_ = _._.full));
          let _ =
            (0, _._)(_ !== void 0 ? void 0 : _, _, _, _) ??
            (_ !== void 0 ? [_] : []);
          _ && _ && (_ = _(_));
          const _ = _.replace(/https:\/\/[^ ]*/gi, "").trimLeft();
          return (0, _.jsx)(_.Fragment, {
            children: (0, _.jsx)("div", {
              className: _().MajorEvent_Ctn,
              ref: _.containerRef,
              children: (0, _.jsxs)(_._, {
                className: (0, _._)(
                  _().AppDetailsSpotlightContainer,
                  _().MajorEventContainer,
                ),
                onActivate: _,
                focusable: !0,
                children: [
                  (0, _.jsx)("div", {
                    className: _().MajorEventBackground,
                    children: (0, _.jsx)(_._, {
                      className: _().MajorEventImageBackgroundBlur,
                      rgSources: _,
                      onIncrementalError: (_, _, _) => _ && _(_),
                    }),
                  }),
                  (0, _.jsxs)("div", {
                    className: _().MajorEventImageContainer,
                    children: [
                      (0, _.jsx)(_._, {
                        className: _().MajorEventImage,
                        rgSources: _,
                        onIncrementalError: (_, _, _) => _ && _(_),
                      }),
                      (0, _.jsx)("div", {
                        className: _().MajorEventImageTemplate,
                      }),
                      (0, _.jsx)("div", {
                        className: _().MajoreEventImageContentContainer,
                        children:
                          _ &&
                          (0, _.jsxs)("div", {
                            className: _().MajorEventContent,
                            children: [
                              (0, _.jsx)(_._, {
                                className: _().MajorEventSpotlightBackground,
                                rgSources: _,
                                onIncrementalError: (_, _, _) => _ && _(_),
                              }),
                              (0, _.jsxs)("div", {
                                className: _().MajorEventTextCtn,
                                children: [
                                  (0, _.jsx)("div", {
                                    className: _().MajorEventTitle,
                                    children: _,
                                  }),
                                  (0, _.jsx)("div", {
                                    className: _().MajorEventSummary,
                                    children: _,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
                  (0, _.jsx)("div", {
                    className: _().BottomShadow,
                  }),
                ],
              }),
            }),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const {
              langOverride: _,
              artworkType: _,
              fnOnLanguagePreviewChange: _,
              clanSteamID: _,
              eventModel: _,
              partnerEventStore: _,
              fnOnRemoveImage: _,
              fnOnArtworkLangChange: _,
              realms: _,
              fnLangHasData: _,
              fnGetImageHashAndExt: _,
            } = _,
            _ = _(_, _),
            _ = _
              ? _._.GenerateURLFromHashAndExtAndLang(_, _, _._.full, _)
              : "",
            [_] = (0, _._)(() => [_(_, _)]);
          return _ == 0
            ? (0, _.jsxs)("div", {
                className: _().ImagePreviewContainer,
                children: [
                  _ === "capsule" &&
                    (0, _.jsx)(_, {
                      imgURL:
                        _._.IMG_URL + "events/defaults/default_img_cover.jpg",
                      eventModel: _,
                    }),
                  _ === "background" &&
                    (0, _.jsx)(_, {
                      imgURL:
                        _._.IMG_URL + "events/defaults/default_img_header.jpg",
                      lang: _,
                      eventModel: _,
                      partnerEventStore: _,
                    }),
                  !![
                    "spotlight",
                    "localized_store_app_spotlight",
                    "localized_store_app_spotlight_mobile",
                  ].includes(_) &&
                    (0, _.jsx)(_, {
                      langOverride: _,
                      artworkType: _,
                      eventModel: _,
                    }),
                  (0, _.jsx)("div", {
                    children: (0, _._)("#EventEditor_ArtworkMissing"),
                  }),
                ],
              })
            : (0, _.jsxs)("div", {
                className: _().ImagePreviewContainer,
                children: [
                  _ === "capsule" &&
                    (0, _.jsx)(_, {
                      imgURL: _,
                      eventModel: _,
                      langOverride: _,
                    }),
                  _ === "background" &&
                    (0, _.jsx)(_, {
                      imgURL: _,
                      lang: _,
                      eventModel: _,
                      partnerEventStore: _,
                    }),
                  _ === "spotlight" &&
                    (0, _.jsx)(_, {
                      imgURL: _,
                      event: _,
                      lang: _,
                    }),
                  _ === "localized_store_app_spotlight" &&
                    (0, _.jsx)(_, {
                      imgURL: _,
                      event: _,
                      lang: _,
                    }),
                  _ === "localized_store_app_spotlight_mobile" &&
                    (0, _.jsx)(_, {
                      imgURL: _,
                      event: _,
                      lang: _,
                    }),
                  (_ === "broadcast_left" || _ === "broadcast_right") &&
                    (0, _.jsx)(_, {
                      imgURL: _,
                      side: _ === "broadcast_right" ? "right" : "left",
                    }),
                  _ === "sale_header" &&
                    (0, _.jsx)(_, {
                      imgURL: _,
                    }),
                  _ === "sale_overlay" &&
                    (0, _.jsx)(_, {
                      imgURL: _,
                    }),
                  _._.includes(_) &&
                    (0, _.jsx)("img", {
                      className: _.PreviewImg,
                      src: _.GetLocalizedImageGroupForEditAsURL(_, _) ?? void 0,
                    }),
                  _ === "product_banner" &&
                    (0, _.jsx)(_, {
                      imgURL: _,
                    }),
                  _ === "product_mobile_banner" &&
                    (0, _.jsx)(_, {
                      imgURL: _,
                    }),
                  _ === "sale_logo" &&
                    (0, _.jsx)(_, {
                      imgURL: _,
                    }),
                  _ === "bestofyear_banner" &&
                    (0, _.jsx)(_, {
                      imgURL: _,
                    }),
                  _ === "bestofyear_banner_mobile" &&
                    (0, _.jsx)(_, {
                      imgURL: _,
                    }),
                  (0, _.jsx)(_, {
                    langOverride: _,
                    clanSteamID: _,
                    fnOnLanguagePreviewChange: _,
                    fnOnRemoveImage: _,
                    fnOnArtworkLangChange: _,
                    realms: _,
                    fnLangHasData: _,
                    fnGetImageHash: (_) => _(_(_, _) ?? ""),
                  }),
                ],
              });
        }
        function _(_) {
          const { artworkType: _ } = _,
            _ = ArtworkTypeMap[_];
          return jsxs("div", {
            className: previewstyles.SpotlightImage,
            children: [
              jsx("h1", {
                className: previewstyles.SpotImgTitle,
                children: Localize("#EventEditor_ArtworkType_" + _),
              }),
              jsxs("p", {
                className: previewstyles.SpotImgSubtitle,
                children: [_.width, " X ", _.height],
              }),
            ],
          });
        }
        function _(_) {
          const { artworkType: _, langOverride: _, eventModel: _ } = _,
            _ = _._[_],
            _ = _.useMemo(
              () =>
                _(
                  (0, _._)("#EventEditor_ArtworkType_" + _),
                  `${_.width} X ${_.height}`,
                ),
              [_.height, _.width, _],
            );
          return (0, _.jsx)(_, {
            lang: _,
            imgURL: _,
            event: _,
          });
        }
        function _(_, _) {
          const _ = document.createElement("canvas");
          (_.width = 780), (_.height = 200);
          const _ = _.getContext("2d"),
            _ = 20;
          for (let _ = 0; _ < 200; _ += _)
            for (let _ = 0; _ < 780; _ += _)
              (_.fillStyle =
                (_ / _ + _ / _) % 2 === 0 ? "#a405e3ff" : "#000000"),
                _.fillRect(_, _, _, _);
          const _ = _.createLinearGradient(0, 0, 780, 0);
          _.addColorStop(0, "rgba(32,32,32,0.8)"),
            _.addColorStop(1, "rgba(60,60,60,0.8)"),
            (_.fillStyle = _),
            _.fillRect(0, 0, 780, 200);
          const _ = _.createRadialGradient(
            780 / 2,
            200 / 2,
            0,
            780 / 2,
            200 / 2,
            Math.max(780, 200) / 1.2,
          );
          return (
            _.addColorStop(0, "rgba(0,0,0,0)"),
            _.addColorStop(1, "rgba(0,0,0,0.6)"),
            (_.fillStyle = _),
            _.fillRect(0, 0, 780, 200),
            (_.fillStyle = "#fff"),
            (_.font = "32px Arial"),
            (_.textAlign = "center"),
            (_.textBaseline = "middle"),
            _.fillText(_, 780 / 2, 200 / 2 - 20),
            _ &&
              ((_.font = "18px Arial"), _.fillText(_, 780 / 2, 200 / 2 + 25)),
            _.toDataURL("image/png")
          );
        }
        function _(_) {
          const { imgURL: _, eventModel: _, langOverride: _ } = _,
            _ = (0, _._)();
          return (0, _.jsx)("div", {
            style: {
              display: "flex",
              width: "304px",
            },
            children: (0, _.jsx)(_._, {
              event: _,
              imageURLOverride: _,
              langOverride: _ ?? _,
            }),
          });
        }
        function _(_) {
          const { lang: _, eventModel: _, partnerEventStore: _ } = _,
            _ = (0, _._)(),
            [_, _, _, _, _] = (0, _._)(() => [
              _.GetNameWithFallback(_),
              _.GetDescriptionWithFallback(_),
              _.GetSubTitleWithLanguageFallback(_),
              _.type,
              _.AnnouncementGID,
            ]);
          let _ = _
            ? (0, _.jsx)(_._, {
                text: _ || "",
                showErrorInfo: !1,
                event: _,
                languageOverride: _._.Get().GetCurEditLanguage(),
              })
            : (0, _._)("#selectimage_display_event_body");
          return (0, _.jsxs)("div", {
            className: _().MultipleExampleContainer,
            children: [
              (0, _.jsx)("div", {
                className: _().ExampleSectionTitle,
                children: (0, _._)("#selectimage_preview_title_1"),
              }),
              (0, _.jsx)("div", {
                className: (0, _._)(_().DetailPageExample, "DetailPageExample"),
                children: (0, _.jsxs)("div", {
                  className: _().DetailExample,
                  children: [
                    (0, _.jsx)("div", {
                      className: _().MainImageCtn,
                      children: (0, _.jsx)("img", {
                        src: _.imgURL,
                      }),
                    }),
                    (0, _.jsx)("div", {
                      className: _().ExampleBodyPosition,
                      children: (0, _.jsxs)("div", {
                        className: _().ExampleContentCtn,
                        children: [
                          (0, _.jsx)("div", {
                            className: _().TextTitle,
                            children:
                              _ || (0, _._)("#selectimage_display_event_title"),
                          }),
                          (0, _.jsx)("div", {
                            className: _().TextSubTitle,
                            children:
                              _ ||
                              (0, _._)("#selectimage_display_event_subtitle"),
                          }),
                          (0, _.jsx)("div", {
                            className: _().TextBody,
                            children: _,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              _ != _.Fwr &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)("div", {
                      className: _().ExampleSpacer,
                    }),
                    (0, _.jsx)("div", {
                      className: _().ExampleSectionTitle,
                      children: (0, _._)("#selectimage_preview_title_2"),
                    }),
                    (0, _.jsx)("div", {
                      className: (0, _._)(
                        _().DetailPageExample,
                        "DetailPageExample",
                      ),
                      children: (0, _.jsx)("div", {
                        className: _().DetailExample2,
                        children: (0, _.jsx)(
                          _._,
                          {
                            event: _,
                            emoticonStore: _,
                            partnerEventStore: _,
                            headerClassnames: "editor",
                            langOverride: _,
                            bDisableBroadcastPlayer: !0,
                          },
                          _,
                        ),
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        const _ = (_) => {
            const [_] = (0, _._)(_.event.appid, {
              include_assets: !0,
            });
            if (!_) return null;
            const _ = _.GetName(),
              _ = _.GetAssets()?.GetCommunityIconURL();
            return (0, _.jsx)("div", {
              className: _().SpotlightExample,
              children: (0, _.jsx)(_, {
                event: _.event,
                strDisplayName: _ ?? "",
                gameIconUrl: _,
                spotlightURLOverride: _.imgURL,
                langOverride: _.lang,
              }),
            });
          },
          _ = (_) => {
            const _ = [
              (0, _.jsx)(
                "img",
                {
                  src: _.imgURL,
                },
                "img",
              ),
              (0, _.jsx)(
                "div",
                {
                  className: _().BroadcastPreview,
                },
                "video",
              ),
            ];
            return (
              _.side === "right" && _.reverse(),
              (0, _.jsx)("div", {
                className: _().BroadcastPreviewContainer,
                children: _,
              })
            );
          },
          _ = (_) =>
            (0, _.jsx)("div", {
              className: _().SaleHeaderPreviewContainer,
              children: (0, _.jsx)("img", {
                style: {
                  width: "100%",
                },
                src: _.imgURL,
              }),
            }),
          _ = (_) =>
            (0, _.jsx)("div", {
              className: _().SaleHeaderPreviewContainer,
              children: (0, _.jsx)("img", {
                style: {
                  width: "100%",
                },
                src: _.imgURL,
              }),
            }),
          _ = (_) =>
            (0, _.jsx)("div", {
              className: _().SaleHeaderPreviewContainer,
              children: (0, _.jsx)("img", {
                style: {
                  width: "100%",
                },
                src: _.imgURL,
              }),
            });
        function _(_, _) {
          let _ = 0;
          for (let _ = _.Bhc; _ < _.bP9; ++_)
            (_(_, _)?.length ?? 0) > 0 && (_ += 1);
          return _;
        }
        var _ = Object.defineProperty,
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
        const _ =
          "https://partner.steamgames.com/doc/store/localization#supported_languages";
        var _ = ((_) => (
          (_[(_.k_None = 0)] = "k_None"),
          (_[(_.k_Suggested = 1)] = "k_Suggested"),
          (_[(_.k_Required = 2)] = "k_Required"),
          (_[(_.k_Requested = 3)] = "k_Requested"),
          _
        ))(_ || {});
        function _(_) {
          const {
              artworkType: _,
              headerHint: _,
              appid: _,
              fnToggleMinimize: _,
              realms: _,
              eventModel: _,
              fnLangHasData: _,
              fnGetImageHashAndExt: _,
              fnSetImageURL: _,
              partnerEventStore: _,
            } = _,
            [_] = (0, _._)(_, {
              include_assets: !0,
            }),
            [_, _] = (0, _._)(() => [
              _?.GetEventType(),
              _?.BHasTag("vo_marketing_message"),
            ]),
            _ = _ == _.ajI;
          let _ = null;
          _ === 2
            ? (_ = (0, _.jsx)("span", {
                style: {
                  color: "#C6512B",
                },
                children: (0, _._)("#EventEditor_Required"),
              }))
            : _ === 1
              ? (_ = (0, _.jsx)("span", {
                  style: {
                    color: "#D7BC86",
                  },
                  children: (0, _._)("#EventEditor_Suggested"),
                }))
              : _ === 3 &&
                (_ = (0, _.jsx)("span", {
                  style: {
                    color: "#D7BC86",
                  },
                  children: (0, _._)("#EventEditor_Requested"),
                }));
          let _ = null;
          _ === "capsule"
            ? _
              ? (_ = (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsxs)("p", {
                      children: [
                        (0, _.jsx)("strong", {
                          children: (0, _._)("#selectimage_tip_design_title"),
                        }),
                        ": ",
                        (0, _._)("#selectimage_tip_capsule_creatorhome_1"),
                      ],
                    }),
                    (0, _.jsxs)("p", {
                      children: [
                        (0, _.jsx)("strong", {
                          children: (0, _._)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, _._)("#selectimage_tip_capsule_creatorhome_2"),
                      ],
                    }),
                  ],
                }))
              : (_ = (0, _.jsxs)(_.Fragment, {
                  children: [
                    !!_ &&
                      (0, _.jsxs)("div", {
                        className: _().HighlightBox,
                        children: [
                          (0, _.jsx)("p", {
                            children: (0, _._)("#PartnerEvent_MM_ArtworkTip"),
                          }),
                          (0, _.jsx)("p", {
                            children: (0, _.jsx)("a", {
                              href: `${_._.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
                              children: (0, _._)("#PartnerEvent_MM_LearnMore"),
                            }),
                          }),
                        ],
                      }),
                    (0, _.jsxs)("p", {
                      children: [
                        (0, _.jsx)("strong", {
                          children: (0, _._)("#selectimage_tip_design_title"),
                        }),
                        ": ",
                        (0, _._)("#selectimage_tip_capsule_1"),
                      ],
                    }),
                    (0, _.jsxs)("p", {
                      children: [
                        (0, _.jsx)("strong", {
                          children: (0, _._)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, _._)("#selectimage_tip_capsule_2"),
                      ],
                    }),
                  ],
                }))
            : _ === "background"
              ? (_ = (0, _.jsx)(_.Fragment, {
                  children: (0, _.jsxs)("p", {
                    children: [
                      (0, _.jsx)("strong", {
                        children: (0, _._)("#selectimage_tip_design_title"),
                      }),
                      ": ",
                      (0, _._)("#selectimage_tip_background_1"),
                    ],
                  }),
                }))
              : _ === "spotlight" || _ === "localized_store_app_spotlight"
                ? (_ = (0, _.jsx)(_.Fragment, {
                    children: (0, _.jsxs)("p", {
                      children: [
                        (0, _.jsx)("strong", {
                          children: (0, _._)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, _._)("#selectimage_tip_store_spotlight_1"),
                      ],
                    }),
                  }))
                : _ === "localized_store_app_spotlight_mobile"
                  ? (_ = (0, _.jsx)(_.Fragment, {
                      children: (0, _.jsxs)("p", {
                        children: [
                          (0, _.jsx)("strong", {
                            children: (0, _._)("#selectimage_tip_usage_title"),
                          }),
                          ": ",
                          (0, _._)("#selectimage_tip_store_mobile_spotlight"),
                        ],
                      }),
                    }))
                  : _ === "broadcast_left" || _ === "broadcast_right"
                    ? (_ = (0, _.jsx)(_.Fragment, {
                        children: (0, _.jsx)("p", {
                          children: (0, _._)("#selectimage_tip_broadcast_1"),
                        }),
                      }))
                    : _ === "sale_header"
                      ? (_ = (0, _.jsxs)(_.Fragment, {
                          children: [
                            (0, _.jsx)("div", {
                              className: _().EventElementRequired,
                              children: (0, _._)(
                                "#selectimage_tip_required_title",
                              ),
                            }),
                            (0, _.jsxs)("p", {
                              children: [
                                (0, _.jsx)("b", {
                                  children: (0, _._)(
                                    "#selectimage_tip_usage_title",
                                  ),
                                }),
                                ": ",
                                (0, _._)("#selectimage_tip_sale_header_1"),
                              ],
                            }),
                            (0, _.jsxs)("p", {
                              children: [
                                (0, _.jsx)("b", {
                                  children: (0, _._)(
                                    "#selectimage_tip_design_title",
                                  ),
                                }),
                                ": ",
                                (0, _._)("#selectimage_tip_sale_header_2"),
                              ],
                            }),
                            (0, _.jsx)("p", {
                              children: (0, _._)(
                                "#selectimage_tip_sale_header_4",
                              ),
                            }),
                            (0, _.jsxs)("p", {
                              children: [
                                (0, _.jsx)("b", {
                                  children: (0, _._)(
                                    "#selectimage_tip_template_title",
                                  ),
                                }),
                                ": ",
                                (0, _.jsx)("a", {
                                  href: "https://www.dropbox.com/scl/fo/mhf604o6bdbcfr1scq7bx/h?rlkey=9bk0ggiwuvs4o1jdnej4xsy0c&dl=0",
                                  children: (0, _._)(
                                    "#selectimage_tip_sale_header_3",
                                  ),
                                }),
                              ],
                            }),
                            (0, _.jsx)("br", {}),
                          ],
                        }))
                      : _ === "hero"
                        ? _ &&
                          (_ = (0, _.jsxs)(_.Fragment, {
                            children: [
                              (0, _.jsx)("p", {
                                children: (0, _._)("#selectimage_tip_hero_1"),
                              }),
                              !_.GetAssets()?.GetLibraryHeroURL() &&
                                (0, _.jsx)("p", {
                                  className: _.ErrorStylesBackground,
                                  children: (0, _._)(
                                    "#EventEdtior_ArtworkType_hero_warning",
                                  ),
                                }),
                            ],
                          }))
                        : _ === "localized_image_group" ||
                            _ === "link_capsule" ||
                            _ === "sale_section_title" ||
                            _ === "schedule_track_art" ||
                            _ === "localized_background_art"
                          ? (_ = (0, _.jsxs)(_.Fragment, {
                              children: [
                                (0, _.jsx)("p", {
                                  children: (0, _._)("#ImagePickerLoc_Desc"),
                                }),
                                (0, _.jsx)("p", {
                                  children: (0, _._)(
                                    "#ImagePickerLoc_Files",
                                    (0, _.jsx)("a", {
                                      href: _,
                                      target: _._.IN_CLIENT ? void 0 : "_blank",
                                      children: (0, _._)("#ImagePickerLoc_URL"),
                                    }),
                                  ),
                                }),
                              ],
                            }))
                          : _ === "product_banner"
                            ? (_ = (0, _.jsxs)(_.Fragment, {
                                children: [
                                  (0, _.jsx)("div", {
                                    className: _().EventElementOptional,
                                    children: (0, _._)(
                                      "#selectimage_tip_optional_title",
                                    ),
                                  }),
                                  (0, _.jsxs)("p", {
                                    children: [
                                      (0, _.jsx)("b", {
                                        children: (0, _._)(
                                          "#selectimage_tip_usage_title",
                                        ),
                                      }),
                                      ": ",
                                      (0, _._)(
                                        "#selectimage_tip_sale_product_banner",
                                      ),
                                    ],
                                  }),
                                ],
                              }))
                            : _ === "product_mobile_banner" ||
                                _ === "product_banner_override" ||
                                _ === "product_mobile_banner_override"
                              ? (_ = (0, _.jsxs)(_.Fragment, {
                                  children: [
                                    (0, _.jsx)("div", {
                                      className: _().EventElementOptional,
                                      children: (0, _._)(
                                        "#selectimage_tip_optional_title",
                                      ),
                                    }),
                                    (0, _.jsxs)("p", {
                                      children: [
                                        (0, _.jsx)("b", {
                                          children: (0, _._)(
                                            "#selectimage_tip_usage_title",
                                          ),
                                        }),
                                        ": ",
                                        (0, _._)(
                                          "#selectimage_tip_sale_product_banner",
                                        ),
                                        _ === "product_mobile_banner" &&
                                          (0, _.jsxs)("span", {
                                            children: [
                                              "  ",
                                              (0, _._)(
                                                "#selectimage_tip_sale_product_banner_mobile",
                                              ),
                                            ],
                                          }),
                                      ],
                                    }),
                                  ],
                                }))
                              : _ === "tab_bar_background"
                                ? (_ = (0, _.jsxs)(_.Fragment, {
                                    children: [
                                      (0, _.jsxs)("p", {
                                        children: [
                                          (0, _.jsx)("strong", {
                                            children: (0, _._)(
                                              "#selectimage_tip_design_title",
                                            ),
                                          }),
                                          ":",
                                          (0, _._)(
                                            "#Sale_Tabs_Background_Design",
                                          ),
                                        ],
                                      }),
                                      (0, _.jsxs)("p", {
                                        children: [
                                          (0, _.jsx)("strong", {
                                            children: (0, _._)(
                                              "#selectimage_tip_usage_title",
                                            ),
                                          }),
                                          ":",
                                          (0, _._)(
                                            "#Sale_Tabs_Background_Usage",
                                          ),
                                        ],
                                      }),
                                    ],
                                  }))
                                : _ === "sale_logo"
                                  ? (_ = (0, _.jsxs)(_.Fragment, {
                                      children: [
                                        (0, _.jsx)("div", {
                                          className: _().EventElementOptional,
                                          children: (0, _._)(
                                            "#selectimage_tip_optional_title",
                                          ),
                                        }),
                                        (0, _.jsxs)("p", {
                                          children: [
                                            (0, _.jsx)("b", {
                                              children: (0, _._)(
                                                "#selectimage_tip_usage_title",
                                              ),
                                            }),
                                            ": ",
                                            (0, _._)(
                                              "#selectimage_tip_pageLogo",
                                            ),
                                          ],
                                        }),
                                      ],
                                    }))
                                  : (_ = (0, _.jsxs)(_.Fragment, {
                                      children: [
                                        (0, _.jsx)("div", {
                                          className: _().EventElementRequired,
                                          children: (0, _._)(
                                            "#selectimage_tip_required_title",
                                          ),
                                        }),
                                        (0, _.jsxs)("p", {
                                          children: [
                                            (0, _.jsx)("b", {
                                              children: (0, _._)(
                                                "#selectimage_tip_usage_title",
                                              ),
                                            }),
                                            ": ",
                                            (0, _._)(
                                              "#selectimage_tip_bestofyear",
                                            ),
                                          ],
                                        }),
                                      ],
                                    }));
          const _ = _._[_.artworkType].width,
            _ = _._[_.artworkType].height;
          return (0, _.jsxs)("div", {
            _: _._,
            className: _().ArtworkSelectorContainer,
            children: [
              !!_.title &&
                (0, _.jsxs)("div", {
                  className: _().Title,
                  onDoubleClick: _,
                  children: [
                    _.title,
                    (0, _.jsx)("span", {
                      children: "\xA0",
                    }),
                    _,
                    _ &&
                      (0, _.jsx)(_._, {
                        onClick: _,
                        children: (0, _.jsx)(_._, {
                          toolTipContent: (0, _._)(
                            _.bIsMinimized
                              ? "#Sale_Section_Maximize_Tooltip"
                              : "#Sale_Section_Minimize_Tooltip",
                          ),
                          children: _.bIsMinimized
                            ? (0, _.jsx)(_.hz4, {})
                            : (0, _.jsx)(_.Xjb, {}),
                        }),
                      }),
                  ],
                }),
              !_.bIsMinimized &&
                (0, _.jsxs)("div", {
                  className: (0, _._)(_().SelectImageBlock, _().Tips),
                  children: [
                    _,
                    !!(_ && _) &&
                      (0, _.jsxs)("p", {
                        children: [
                          (0, _.jsx)("b", {
                            children: (0, _._)(
                              "#selectimage_tip_dimensions_title",
                            ),
                          }),
                          ":\xA0",
                          (0, _._)(
                            "#selectimage_tip1",
                            (0, _._)(_),
                            (0, _._)(_),
                          ),
                        ],
                      }),
                    !!_.strWarning &&
                      (0, _.jsx)("div", {
                        children: (0, _.jsx)("p", {
                          className: _.WarningStylesWithIcon,
                          children: _.strWarning,
                        }),
                      }),
                    _.elEventArtworkExample,
                    "\xA0",
                    (0, _.jsx)("br", {}),
                    _.elAdditionalControls,
                    !!_.fnRemoveAllArtwork &&
                      (0, _.jsx)(_._, {
                        onClick: (_) => {
                          (0, _._)(
                            (0, _.jsx)(_, {
                              fnRemoveAllArtwork: _.fnRemoveAllArtwork,
                            }),
                            (0, _._)(_) ?? window,
                          );
                        },
                        children: (0, _._)("#Sale_RemoveAll"),
                      }),
                  ],
                }),
              !_.bIsMinimized &&
                (0, _.jsx)(_, {
                  clanSteamID: _.clanSteamID,
                  title: _.title ?? "",
                  eventModel: _,
                  artworkType: _.artworkType,
                  realms: _,
                  appid: _,
                  fnGetImageHashAndExt: _,
                  fnSetImageURL: _,
                  fnLangHasData: _,
                  partnerEventStore: _,
                }),
            ],
          });
        }
        function _(_) {
          const { fnRemoveAllArtwork: _, closeModal: _ } = _;
          return (0, _.jsx)(_._, {
            strTitle: (0, _._)("#Sale_RemoveAll"),
            strDescription: (0, _._)("#ImageUpload_DeleteAll_Confirm"),
            onOK: () => {
              _?.(), _?.();
            },
            onCancel: _,
          });
        }
        function _(_) {
          const {
              artworkType: _,
              realms: _,
              clanSteamID: _,
              fnLangHasData: _,
              fnGetImageHashAndExt: _,
              fnSetImageURL: _,
              eventModel: _,
              appid: _,
              partnerEventStore: _,
            } = _,
            _ = _ === "localized_image_group",
            [_, _] = _.useState((0, _._)()),
            [_, _] = _.useState(new Array()),
            _ = _.useCallback(
              (_, _, _) => {
                let _ = [];
                _.find((_) => _.clanImage.imageid == _.imageid)
                  ? (_ = _.map((_) =>
                      _.clanImage.imageid == _.imageid
                        ? {
                            clanImage: _,
                            lang: _,
                          }
                        : _,
                    ))
                  : _ &&
                    (_ = _.concat({
                      clanImage: _,
                      lang: _,
                    })),
                  _(_);
              },
              [_],
            ),
            _ = _.useCallback(
              (_, _, _) => {
                (0, _._)(() => {
                  _(_(_, _) ?? "") == _.image_hash && _(_, null, _),
                    _(_, _, _),
                    _(_, _, !1);
                });
              },
              [_, _, _, _],
            );
          return _ === "hero"
            ? (0, _.jsx)("div", {
                style: {
                  padding: "16px",
                },
                children: (0, _.jsx)(_._, {
                  style: {
                    textTransform: "uppercase",
                    width: "200px",
                  },
                  onClick: () =>
                    window.open(
                      `${_._.PARTNER_BASE_URL}admin/game/editbyappid/${_}?activetab=tab_graphicalassets`,
                    ),
                  children: (0, _._)("#ImageUpload_EditHeroImage"),
                }),
              })
            : (0, _.jsxs)("div", {
                children: [
                  (0, _.jsx)(_, {
                    list: _,
                    fnOnArtworkLanguageChange: _,
                    realms: _,
                    fnLangHasData: _,
                  }),
                  (0, _.jsx)("div", {
                    children: (0, _.jsx)("div", {
                      className: (0, _._)(
                        _().SelectImageBlock,
                        _().MainPreviewBlock,
                      ),
                      children: (0, _.jsx)(_, {
                        eventModel: _,
                        clanSteamID: _,
                        fnOnLanguagePreviewChange: (_) => {
                          _ != _ && _(_);
                        },
                        langOverride: _,
                        fnOnArtworkLangChange: _ ? null : _,
                        artworkType: _,
                        fnOnRemoveImage: _ ? null : (_) => _(_, null, _),
                        realms: _,
                        fnLangHasData: _,
                        fnGetImageHashAndExt: _,
                        partnerEventStore: _,
                      }),
                    }),
                  }),
                ],
              });
        }
        let _ = class extends _.Component {
          ShowLangChangeDialog(_, _) {
            const {
              fnOnArtworkLanguageChange: _,
              realms: _,
              fnLangHasData: _,
            } = this.props;
            (0, _._)(
              (0, _.jsx)(_, {
                clanImage: _,
                lang: _,
                fnOnArtworkLangChange: _,
                fnLangHasData: _,
                realms: _,
              }),
              window,
            );
          }
          GenerateImageMappings() {
            let _ = new Array();
            const { list: _ } = this.props;
            return (
              _.forEach((_) => {
                const { clanImage: _, lang: _ } = _;
                let _ = (0, _._)("#Language_" + (0, _.LgB)(_));
                _.push(
                  (0, _.jsxs)(
                    "div",
                    {
                      className: _().FlexRowContainer,
                      children: [
                        (0, _.jsx)("span", {
                          children: (0, _._)(
                            "#ImageUpload_Success_Mapping",
                            _.file_name ?? "",
                            _,
                          ),
                        }),
                        (0, _.jsx)("a", {
                          onClick: () => this.ShowLangChangeDialog(_, _),
                          children: (0, _._)(
                            "#ImageUpload_Success_Mapping_Change",
                          ),
                        }),
                      ],
                    },
                    "img_lang_" + _.clanImage.imageid + "_" + _,
                  ),
                );
              }),
              _
            );
          }
          render() {
            const { list: _ } = this.props;
            if (!_ || _.length == 0) return (0, _.jsx)("div", {});
            let _ = this.GenerateImageMappings();
            return (0, _.jsx)("div", {
              className: _().UploadSuccess,
              children: _,
            });
          }
        };
        _([_._], _.prototype, "ShowLangChangeDialog", 1), (_ = _([_._], _));
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              clanSteamID: _,
              appid: _,
              eventModel: _,
              realms: _,
              loc_images: _,
              artworkType: _,
              fnLangHasData: _,
              closeModal: _,
              fnSetImageURL: _,
              partnerEventStore: _,
            } = _,
            [_, _] = (0, _.useState)(!1),
            _ = (0, _._)(_, _),
            _ = _.GetAccountID(),
            [_] = (0, _._)(() => [
              _.GetFilesToUpload().length - _.GetCompletedFiles(),
            ]);
          (0, _.useEffect)(() => {
            _(!1),
              _.ClearImageGroup(),
              _?.forEach((_, _) => {
                const _ = _._.InitFromClanID(_);
                if (_.GetAllLocalizedGroupImages().length == 0) {
                  const _ = _ && _._.GetHashFromHashAndExt(_),
                    _ = _ && _._.GetClanImageByImageHash(_, _);
                  _ && _.SetPrimaryImageForImageGroup(_, _);
                }
                _.SetLocalizedImageGroupAtLang(_, _, _ ?? null);
              }),
              _(!0);
          }, [_, _, _]);
          const _ = (0, _.useCallback)(
              (_, _, _ = _.Bhc) => {
                const _ = _._.InitFromClanID(_),
                  _ = _._.GetHashAndExt(_ ?? null);
                if (_.GetAllLocalizedGroupImages().length == 0) {
                  const _ = _ && _._.GetHashFromHashAndExt(_),
                    _ = _ && _._.GetClanImageByImageHash(_, _);
                  _ && _.SetPrimaryImageForImageGroup(_, _);
                }
                _.SetLocalizedImageGroupAtLang(_, _, _);
              },
              [_],
            ),
            _ = (0, _.useCallback)((_, _) => {
              const _ = _.GetLocalizedImageGroupForEdit()?.localized_images[_];
              return _ && _.split("/").pop();
            }, []),
            _ = () => {
              const _ = _.GetLocalizedImageGroupForEdit();
              for (let _ = _.Bhc; _ < _.bP9; ++_) {
                const _ = _?.localized_images[_];
                if (_) {
                  const _ = _.split("/").pop() || "";
                  _(
                    _,
                    {
                      image_hash: _(_),
                      clanAccountID: _,
                      file_type: (0, _._)(_) ?? _._._,
                      imageid: 0,
                    },
                    _,
                  );
                } else _(_, null, _);
              }
              _.ClearImageGroup(), _.onOK ? _.onOK() : _?.();
            };
          return (0, _.jsxs)(_._, {
            onCancel: _,
            closeModal: _,
            bDisableBackgroundDismiss: !0,
            bAllowFullSize: !0,
            className: (0, _._)(_.NotTooWideModal, _.ImageManageDialog),
            strTitle: _.strLocalizedTitle || (0, _._)("#ImagePickerLoc_Title"),
            strDescription: _.strLocalizedDescription,
            bOKDisabled: _ > 0,
            onOK: _,
            strOKButtonText:
              _ > 0 ? (0, _._)("#ImagePickerLoc_DismissWarning") : void 0,
            children: [
              _
                ? (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)(_, {
                        clanSteamID: _,
                        rgSupportArtwork: [_],
                        fnSetImageURL: _,
                        bAllowPreviousClanImageSelection: !1,
                        rgRealmList: _ ?? [],
                        uploaderOverride: _,
                      }),
                      (0, _.jsx)(_, {
                        clanSteamID: _,
                        eventModel: _,
                        artworkType: _,
                        title: null,
                        appid: _,
                        realms: _,
                        fnRemoveAllArtwork: () => _.ClearImageGroup(),
                        fnSetImageURL: _,
                        fnGetImageHashAndExt: _,
                        fnLangHasData: _,
                        partnerEventStore: _,
                      }),
                    ],
                  })
                : (0, _.jsx)(_._, {
                    size: "medium",
                    position: "center",
                    string: (0, _._)("#Loading"),
                  }),
              _.children,
            ],
          });
        }
        function _(_) {
          const { setting: _, fnUpdateSetting: _, label: _ } = _,
            _ = _.useMemo(() => {
              const _ = [];
              return (
                _.push({
                  label: (0, _._)("#EventEditor_Tile_NoRepeat"),
                  data: "no-repeat",
                }),
                _.push({
                  label: (0, _._)("#EventEditor_Tile_RepeatX"),
                  data: "repeat-x",
                }),
                _.push({
                  label: (0, _._)("#EventEditor_Tile_RepeatY"),
                  data: "repeat-y",
                }),
                _.push({
                  label: (0, _._)("#EventEditor_Tile_Repeat"),
                  data: "repeat",
                }),
                _.push({
                  label: (0, _._)("#EventEditor_Tile_NoRepeatAndBlur"),
                  data: "coverBlur",
                }),
                _
              );
            }, []);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_._, {
                children: _ || (0, _._)("#EventEditor_Tile_Title"),
              }),
              (0, _.jsx)(_._, {
                strDropDownClassName: _.DropDownScroll,
                rgOptions: _,
                selectedOption: _ || "no-repeat",
                onChange: (_) => _(_.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: {
                  bDisableMouseOverlay: !0,
                },
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              closeModal: _,
              imgGroup: _,
              fnUpdateImageGroup: _,
              eventModel: _,
            } = _,
            { openColorPicker: _ } = _(),
            [_, _] = (0, _.useState)(() => _),
            [_, _, _, _, _, _, _, _] = (0, _._)(() => [
              _.repeat_setting,
              _.scaling_setting,
              _.background_color1,
              _.background_color2,
              _.gradient_setting,
              _.position_setting,
              _.GetIncludedRealmList(),
              _.randomize_section_order,
            ]),
            [_] = (0, _.useState)(() => _(_.localized_background_art ?? {}));
          return (0, _.jsxs)(_, {
            strLocalizedTitle: (0, _._)("#BackgroundGroups_Configure"),
            strLocalizedDescription: (0, _._)("#BackgroundGroups_DialogDesc"),
            appid: _.appid,
            eventModel: _,
            clanSteamID: _.clanSteamID,
            closeModal: _,
            partnerEventStore: _._,
            artworkType: "localized_background_art",
            realms: _,
            loc_images: _,
            fnLangHasData: (_) => !!_[_],
            fnGetImageHash: (_, _) => _[_],
            fnSetImageURL: async (_, _, _) => {
              _((_) => {
                const _ = {
                    ..._.localized_background_art,
                  },
                  _ = _._.GetHashAndExt(_);
                return (
                  _ ? (_[(0, _.LgB)(_)] = _) : delete _[(0, _.LgB)(_)],
                  {
                    ..._,
                    localized_background_art: _,
                  }
                );
              });
            },
            onOK: () => {
              _(
                (_) => (
                  _(_),
                  _ && setTimeout(_, 1),
                  {
                    ..._,
                  }
                ),
              );
            },
            children: [
              (0, _.jsxs)("div", {
                className: _().ConfDialogOptions,
                children: [
                  (0, _.jsxs)("div", {
                    className: _().ImageOptions,
                    children: [
                      (0, _.jsx)(_, {
                        setting: _,
                        fnUpdateSetting: (_) => {
                          _(
                            _ !== "no-repeat"
                              ? {
                                  ..._,
                                  repeat_setting: _,
                                  scaling_setting: "auto",
                                }
                              : {
                                  ..._,
                                  repeat_setting: _,
                                },
                          );
                        },
                        label: (0, _._)("#BackgroundGroups_Repeating"),
                      }),
                      (0, _.jsx)(_, {
                        scaling_setting: _ ?? "contain",
                        disable: _ !== "no-repeat",
                        fnUpdateSetting: (_) =>
                          _({
                            ..._,
                            scaling_setting: _,
                          }),
                      }),
                      _ != "cover" &&
                        (0, _.jsx)(_, {
                          position_settings: _,
                          fnUpdateSetting: (_) =>
                            _({
                              ..._,
                              position_setting: _,
                            }),
                        }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: _().ColorOptions,
                    children: [
                      (0, _.jsx)(_._, {
                        children: (0, _._)("#BackgroundGroups_Color"),
                      }),
                      (0, _.jsxs)("div", {
                        className: _().ColorCtn,
                        children: [
                          (0, _.jsx)(_._, {
                            style: {
                              backgroundColor: _,
                            },
                            onClick: (_) =>
                              _(_, {
                                color: _ ?? "",
                                onChange: (_) =>
                                  _({
                                    ..._,
                                    background_color1: _,
                                  }),
                              }),
                            children: (0, _._)(
                              _ === void 0
                                ? "#BackgroundGroups_ColorNum_unset"
                                : "#BackgroundGroups_ColorNum",
                              1,
                            ),
                          }),
                          "\xA0",
                          (0, _.jsx)(_._, {
                            onClick: () =>
                              _({
                                ..._,
                                background_color1: void 0,
                              }),
                            children: (0, _._)("#BackgroundGroups_Color_Clear"),
                          }),
                        ],
                      }),
                      (0, _.jsx)("div", {
                        className: _().SwapColorsCtn,
                        children: (0, _.jsx)(_._, {
                          onClick: () =>
                            _({
                              ..._,
                              background_color1: _,
                              background_color2: _,
                            }),
                          children: (0, _._)("#BackgroundGroups_Color_Swap"),
                        }),
                      }),
                      _ !== "single-color" &&
                        (0, _.jsxs)("div", {
                          className: _().ColorCtn,
                          children: [
                            (0, _.jsx)(_._, {
                              style: {
                                backgroundColor: _,
                              },
                              onClick: (_) =>
                                _(_, {
                                  color: _ ?? "",
                                  onChange: (_) =>
                                    _({
                                      ..._,
                                      background_color2: _,
                                    }),
                                }),
                              children: (0, _._)(
                                _ === void 0
                                  ? "#BackgroundGroups_ColorNum_unset"
                                  : "#BackgroundGroups_ColorNum",
                                2,
                              ),
                            }),
                            "\xA0",
                            (0, _.jsx)(_._, {
                              onClick: () =>
                                _({
                                  ..._,
                                  background_color2: void 0,
                                }),
                              children: (0, _._)(
                                "#BackgroundGroups_Color_Clear",
                              ),
                            }),
                          ],
                        }),
                      (0, _.jsx)(_, {
                        gradient: _ ?? "top-to-bottom",
                        fnUpdateSetting: (_) =>
                          _({
                            ..._,
                            gradient_setting: _,
                          }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, _.jsx)(_, {
                clanSteamID: _.clanSteamID,
                children: (0, _.jsx)(_._, {
                  checked: !!_,
                  onChange: (_) => {
                    _.randomize_section_order = _;
                  },
                  children: (0, _._)("#BackgroundGroups_RandomizeSectionOrder"),
                }),
              }),
            ],
          });
        }
        function _(_) {
          const _ = _._([], _.bP9, null);
          for (const _ in _) {
            const _ = (0, _.sfN)(_);
            _ != _.xPp && (_[_] = _[_]);
          }
          return _;
        }
        function _(_) {
          const {
              scaling_setting: _,
              fnUpdateSetting: _,
              label: _,
              disable: _,
            } = _,
            _ = _.useMemo(() => {
              const _ = [];
              return (
                _.push({
                  label: (0, _._)("#BackgroundGroups_Scaling_cover"),
                  data: "cover",
                }),
                _.push({
                  label: (0, _._)("#BackgroundGroups_Scaling_contain"),
                  data: "contain",
                }),
                _.push({
                  label: (0, _._)("#BackgroundGroups_Scaling_fixed"),
                  data: "auto",
                }),
                _
              );
            }, []);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_._, {
                children: _ || (0, _._)("#BackgroundGroups_Scaling"),
              }),
              (0, _.jsx)(_._, {
                strDropDownClassName: _.DropDownScroll,
                disabled: _,
                rgOptions: _,
                selectedOption: _ || "cover",
                onChange: (_) => _(_.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: {
                  bDisableMouseOverlay: !0,
                },
              }),
            ],
          });
        }
        function _(_) {
          const { gradient: _, fnUpdateSetting: _, label: _ } = _,
            _ = _.useMemo(() => {
              const _ = [];
              return (
                _.push({
                  label: (0, _._)("#BackgroundGroups_Gradient_Top"),
                  data: "top-to-bottom",
                }),
                _.push({
                  label: (0, _._)("#BackgroundGroups_Gradient_Left"),
                  data: "left-to-right",
                }),
                _.push({
                  label: (0, _._)("#BackgroundGroups_Gradient_TopLeft"),
                  data: "top-left-to-bottom-right",
                }),
                _
              );
            }, []);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_._, {
                children: _ || (0, _._)("#EventEditor_ColorSetting_Title"),
              }),
              (0, _.jsx)(_._, {
                strDropDownClassName: _.DropDownScroll,
                rgOptions: _,
                selectedOption: _ || "top-to-bottom",
                onChange: (_) => _(_.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: {
                  bDisableMouseOverlay: !0,
                },
              }),
            ],
          });
        }
        function _(_) {
          const { position_settings: _, fnUpdateSetting: _, label: _ } = _,
            _ = _.useMemo(() => {
              const _ = [];
              return (
                _.push({
                  label: (0, _._)("#BackgroundGroups_Position_Unset"),
                  data: "unset",
                }),
                _.push({
                  label: (0, _._)("#BackgroundGroups_Position_Centered"),
                  data: "center",
                }),
                _.push({
                  label: (0, _._)("#BackgroundGroups_Position_CenteredTop"),
                  data: "top center",
                }),
                _.push({
                  label: (0, _._)("#BackgroundGroups_Position_TopLeft"),
                  data: "top left",
                }),
                _.push({
                  label: (0, _._)("#BackgroundGroups_Position_BottomRight"),
                  data: "bottom right",
                }),
                _
              );
            }, []);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_._, {
                children: _ || (0, _._)("#BackgroundGroups_Position"),
              }),
              (0, _.jsx)(_._, {
                strDropDownClassName: _.DropDownScroll,
                rgOptions: _,
                selectedOption: _ || "unset",
                onChange: (_) => _(_.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: {
                  bDisableMouseOverlay: !0,
                },
              }),
            ],
          });
        }
        function _(_) {
          const {
              backgroundImageEditModel: _,
              bBackgroundImgGroupEditMode: _,
              fnSetBackgroundImgGroupEditMode: _,
              bShowAsValveOnly: _,
            } = _,
            [_, _] = (0, _.useState)(_.BIsBackgroundImageEnabled()),
            [_, _, _] = (0, _._)(),
            _ = (0, _._)(() => _.GetSalePageLastCoverSectionUntilEnd());
          return (0, _.jsx)("div", {
            className: (0, _._)(_().Ctn, _ && _.ValveOnlyBackground),
            children: (0, _.jsxs)(_._, {
              children: [
                (0, _.jsx)(_._, {
                  label: (0, _._)("#BackgroundGroups_Setting"),
                  checked: _,
                  onChange: (_) => {
                    _(_), _.SetBackgroundImageEnabled(_);
                  },
                }),
                _
                  ? (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)(_._, {
                          label: (0, _._)("#BackgroundGroups_EditMode"),
                          tooltip: (0, _._)("#BackgroundGroups_EditMode_ttip"),
                          checked: _,
                          onChange: _,
                        }),
                        (0, _.jsx)(_._, {
                          label: (0, _._)("#BackgroundGroups_ExtendToEnd"),
                          tooltip: (0, _._)(
                            "#BackgroundGroups_ExtendToEnd_ttip",
                          ),
                          checked: _,
                          onChange: (_) =>
                            _.SetSalePageLastCoverSectionUntilEnd(_),
                        }),
                        (0, _.jsx)("hr", {}),
                        (0, _.jsx)(_._, {
                          onClick: _,
                          children: (0, _._)(
                            "#BackgroundGroups_ClearAllSettings",
                          ),
                        }),
                        (0, _.jsx)(_._, {
                          active: _,
                          children: (0, _.jsx)(_._, {
                            strTitle: (0, _._)(
                              "#EventEditor_GenericAreYouSure",
                            ),
                            strDescription: (0, _._)(
                              "#BackgroundGroups_ClearAllSettings_Desc",
                            ),
                            bDestructiveWarning: !0,
                            onOK: () => {
                              _.ClearAllBackgroundImageGroupSettings(), _(!1);
                            },
                            closeModal: _,
                          }),
                        }),
                      ],
                    })
                  : (0, _.jsx)("p", {
                      children: (0, _._)("#BackgroundGroups_Desc"),
                    }),
                (0, _.jsx)("br", {}),
                (0, _.jsx)("a", {
                  href: `${_._.PARTNER_BASE_URL}doc/marketing/event_tools/sales/groups`,
                  target: "_blank",
                  children: (0, _._)("#EventGeneric_SeeDocs"),
                }),
              ],
            }),
          });
        }
        const _ = _.forwardRef(function (_, _) {
          const {
              imgGroupDerivedMapping: _,
              backgroundImageEditModel: _,
              groupIndex: _,
              imgGroup: _,
              eventModel: _,
              nTabIndex: _,
            } = _,
            _ = (0, _._)(),
            [_, _, _, _] = (0, _._)(() => [
              _ && _.mapGroupToSections.get(_.background_id),
              (_ &&
                _.mapGroupToSections.get(_.background_id)?.sectionUniqueIDs) ??
                [],
              _ != null
                ? _?.GetTabLastCoverSectionUntilEnd(_)
                : _?.GetSalePageLastCoverSectionUntilEnd(),
              _ != null ? _?.GetTabGroupCount(_) : _?.GetSalePageGroupCount(),
            ]),
            _ = _ && _ + 1 === _,
            [_, _, _] = (0, _._)(),
            [_, _, _] = (0, _._)();
          let _;
          _?.nUniqueIDNextSaleSection &&
            (_ = (0, _._)(
              _._,
              _.GetSaleSectionByID(_?.nUniqueIDNextSaleSection),
              _,
              _,
              _.nSaleSectionLastIndex + 1,
            ));
          let _;
          if (_ && _?.length > 1) {
            const _ = _[_.length - 1];
            _ = (0, _._)(
              _._,
              _?.GetSaleSectionByID(_),
              _,
              _,
              _.nSaleSectionLastIndex,
            );
          }
          return (0, _.jsx)(_._, {
            bStartMinimized: !1,
            title: (0, _._)(
              _ != null
                ? "#BackgroundGroups_Sale_Tab_GroupNum"
                : "#BackgroundGroups_Sale_GroupNum",
              _ + 1,
            ),
            className: _.classNameHeader,
            children: (0, _.jsxs)("div", {
              ref: _,
              children: [
                (0, _.jsx)(_._, {
                  onClick: _,
                  children: (0, _._)("#BackgroundGroups_Configure"),
                }),
                (0, _.jsx)(_._, {
                  active: _,
                  children: (0, _.jsx)(_, {
                    imgGroup: _,
                    closeModal: _,
                    eventModel: _,
                    fnUpdateImageGroup: (_) =>
                      _ != null
                        ? _.SetTabBackgroundGroup(_, _, _)
                        : _.SetSalePageBackgroundGroup(_, _),
                  }),
                }),
                (0, _.jsx)("br", {}),
                (0, _.jsx)("div", {
                  className: _().EditorTitle,
                  children: (0, _._)("#BackgroundGroups_ContentTitle"),
                }),
                (0, _.jsxs)("ul", {
                  children: [
                    _.map((_) =>
                      (0, _.jsx)(
                        "li",
                        {
                          children: (0, _._)(
                            _._,
                            _.GetSaleSectionByID(_),
                            _,
                            _,
                            _.GetSaleSectionIndexByID(_, !0),
                          ),
                        },
                        "li_" + _,
                      ),
                    ),
                    !!_ &&
                      (0, _.jsx)("li", {
                        children: (0, _._)("#BackgroundGroups_EndOfList"),
                      }),
                  ],
                }),
                !!_ &&
                  (0, _.jsx)(_._, {
                    onClick: () =>
                      _ != null
                        ? _.SetTabBackgroundGroup(_, _, {
                            ..._,
                            num_sections: _.num_sections - 1,
                          })
                        : _.SetSalePageBackgroundGroup(_, {
                            ..._,
                            num_sections: _.num_sections - 1,
                          }),
                    children: (0, _._)("#BackgroundGroups_Reduce", _),
                  }),
                !!_ &&
                  (0, _.jsx)(_._, {
                    onClick: () =>
                      _ != null
                        ? _.SetTabBackgroundGroup(_, _, {
                            ..._,
                            num_sections: _.num_sections + 1,
                          })
                        : _.SetSalePageBackgroundGroup(_, {
                            ..._,
                            num_sections: _.num_sections + 1,
                          }),
                    children: (0, _._)("#BackgroundGroups_Extend", _),
                  }),
                _ > 0 &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)("hr", {}),
                      (0, _.jsx)(_._, {
                        onClick: _,
                        children: (0, _._)("#BackgroundGroups_RemoveThisGroup"),
                      }),
                      (0, _.jsx)(_._, {
                        active: _,
                        children: (0, _.jsx)(_._, {
                          strTitle: (0, _._)("#Dialog_AreYouSure"),
                          bDestructiveWarning: !0,
                          strDescription: (0, _._)(
                            "#BackgroundGroups_RemoveThisGroup_Desc",
                          ),
                          onOK: () =>
                            _ != null
                              ? _.RemoveTabBackgroundGroup(_, _)
                              : _.RemoveSalePageBackgroundGroup(_),
                          closeModal: _,
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          });
        });
        function _(_) {
          const { backgroundImageEditModel: _, nTabID: _ } = _;
          return (0, _.jsx)("div", {
            className: _().CtnEditor,
            children: (0, _.jsx)(_._, {
              onClick: (_) =>
                _ !== void 0 && _ >= 0
                  ? _?.AddTabBackgroundGroup(_)
                  : _?.AddSalePageBackgroundGroup(),
              children: (0, _._)(
                _ !== void 0 && _ >= 0
                  ? "#BackgroundGroups_AddNewGroupTab"
                  : "#BackgroundGroups_AddNewGroup",
              ),
            }),
          });
        }
        function _(_) {
          const {
              nTabID: _,
              nSectionUniqueID: _,
              salePageBackgroundDerivedConfig: _,
              backgroundImageEditModel: _,
            } = _,
            _ = _.mapFirstSectionToGroup.get(_);
          return _ == _.nFirstSaleSectionIDWithoutGroup ||
            _ == _.nFirstTabSectionIDWithoutGroup
            ? (0, _.jsx)(_, {
                backgroundImageEditModel: _,
                nTabID: _,
              })
            : _
              ? (0, _.jsx)(_, {
                  ..._,
                  groupID: _,
                })
              : null;
        }
        function _(_) {
          const {
              groupID: _,
              nTabID: _,
              salePageBackgroundDerivedConfig: _,
              backgroundImageEditModel: _,
            } = _,
            _ =
              _ && _ >= 0
                ? _.selectedTabBackgroundDef.groups
                : _.GetSalePageGroupDefinition().groups,
            _ = _.findIndex((_) => _.background_id === _),
            _ = _[_],
            [_, _] = (0, _.useState)(!1);
          (0, _.useEffect)(() => {
            if (!_) return;
            const _ = (0, _._)(
              (0, _.jsx)(_._, {
                bAlertDialog: !0,
                closeModal: () => _(!1),
                children: (0, _.jsx)(_, {
                  backgroundImageEditModel: _,
                  groupIndex: _,
                  imgGroup: _,
                  imgGroupDerivedMapping: _,
                  eventModel: _.GetEventModel(),
                  nTabIndex: _,
                }),
              }),
              window,
            );
            return () => {
              _.then((_) => _.Close());
            };
          }, [_, _, _, _, _, _]);
          const _ = (0, _._)(() => _.get(_)),
            [_, _] = (0, _.useState)(null),
            _ = _.useCallback((_, _) => {
              _(_);
            }, []),
            _ = (0, _._)(_);
          return (0, _.jsxs)("div", {
            className: _().CtnEditor,
            ref: _,
            children: [
              !!(_ && _ && _ > _) &&
                (0, _.jsx)(_._, {
                  onClick: (_) => _(!0),
                  children: (0, _._)("#BackgroundGroups_EditBackgroundGroup"),
                }),
              (0, _.jsx)(_, {
                backgroundImageEditModel: _,
                groupIndex: _,
                imgGroup: _,
                imgGroupDerivedMapping: _,
                eventModel: _.GetEventModel(),
                nTabIndex: _,
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { imgGroupDerivedMapping: _ } = _,
            [_, _] = (0, _.useState)(!1);
          (0, _.useEffect)(() => {
            if (!_) return;
            const _ = (0, _._)(
              (0, _.jsx)(_._, {
                bAlertDialog: !0,
                closeModal: () => _(!1),
                children: (0, _.jsx)(_, {
                  ..._,
                }),
              }),
              window,
            );
            return () => {
              _.then((_) => _.Close());
            };
          }, [_, _]);
          const _ = (0, _._)(() => {
              const _ = _.selectedTabBackgroundDef?.groups?.[0].background_id;
              if (_) {
                const _ = _.mapGroupToSections.get(_);
                if (_) return _.get(_?.nBackgroundGroupID) ?? 0;
              }
              return 0;
            }),
            [_, _] = (0, _.useState)(null),
            _ = _.useCallback((_, _) => {
              _(_);
            }, []),
            _ = (0, _._)(_),
            _ = !!(_ >= 0 && _ && _ > _);
          return (0, _.jsxs)("div", {
            className: (0, _._)(_().CtnEditor, _().TabCtn),
            ref: _,
            children: [
              _ &&
                (0, _.jsx)(_._, {
                  onClick: (_) => _(!0),
                  children: (0, _._)("#BackgroundGroups_EditBackgroundGroup"),
                }),
              (0, _.jsx)(_, {
                ..._,
              }),
            ],
          });
        }
        function _(_) {
          const {
              backgroundImageEditModel: _,
              imgGroupDerivedMapping: _,
              nTabID: _,
            } = _,
            [_, _] = (0, _.useState)(null),
            [_, _, _, _] = (0, _._)(() => [
              _?.GetTabLastCoverSectionUntilEnd(_),
              _?.BIsTabEnabled(_),
              _.selectedTabBackgroundDef,
              _?.GetEventModel(),
            ]);
          return (0, _.jsxs)(_._, {
            children: [
              (0, _.jsx)(_._, {
                label: (0, _._)("#BackgroundGroups_TaSetting"),
                checked: _,
                onChange: (_) => {
                  if (
                    ((0, _._)(_, "edit model mising"),
                    (0, _._)(_ !== void 0, "tab setting missing"),
                    _ !== void 0 && _)
                  ) {
                    const _ = _.SetTabEnabled(_, _);
                    (0, _._)(
                      !!_,
                      `Failed to create model TabID ${_}backgroundModel`,
                    ),
                      _(_);
                  } else
                    console.error(
                      `Failed to enable table group, edit mode: ${!!_}, TabID: ${_}.`,
                    );
                },
              }),
              !!_ &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(_._, {
                      label: (0, _._)("#BackgroundGroups_ExtendToEnd"),
                      tooltip: (0, _._)(
                        "#BackgroundGroups_ExtendToEnd_Tab_ttip",
                      ),
                      checked: _,
                      onChange: (_) => _.SetTabLastCoverSectionUntilEnd(_, _),
                    }),
                    (0, _.jsx)(_, {
                      backgroundImageEditModel: _,
                      groupIndex: 0,
                      imgGroup: (_ || _)?.groups[0],
                      imgGroupDerivedMapping: _,
                      eventModel: _,
                      nTabIndex: _,
                      classNameHeader: _().TabHeader,
                    }),
                  ],
                }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const { nSectionID: _, children: _ } = _,
            [_, _] = _.useState(!1),
            [_, _] = _.useState(!1);
          _.useEffect(() => {
            _._.Get().SetMouseOverSection(_, _);
          }, [_, _]);
          const _ = (0, _._)(() => _._.Get().GetMouseOverSectionID()),
            _ = _ && _ == _,
            _ = () => _._.Get().JumpToSection(_),
            _ = _.useRef(null);
          return (
            (0, _._)((_) =>
              _ != _ ? !1 : (_.current?.scrollIntoView(), _(!0), !0),
            ),
            (0, _.jsxs)("div", {
              ref: _,
              className: (0, _._)({
                [_().SaleSectionLivePreview]: !0,
                [_().Hover]: !!_,
                [_().JumpedTo]: !!_,
              }),
              onAnimationEnd: () => _(!1),
              onMouseEnter: () => _(!0),
              onMouseLeave: () => _(!1),
              children: [
                _ &&
                  (0, _.jsx)(_._, {
                    toolTipContent: (0, _._)("#Sale_SaleEditor_JumpTo_ttip"),
                    direction: "top",
                    children: (0, _.jsx)("button", {
                      className: _().JumpToButton,
                      onClick: _,
                      children: (0, _.jsx)(_.ffu, {}),
                    }),
                  }),
                _,
              ],
            })
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              promotionName: _,
              eventModel: _,
              bIsPreview: _,
              language: _,
              backgroundImageEditModel: _,
              addtionalAdminButtons: _,
              bDynamicallyCreatedSale: _,
            } = _,
            [_, _] = _.useState(_?.GetDayIndexFromEventStart()),
            [_, _] = _.useState(null),
            _ = (0, _._)(() => _.jsondata.sale_header_disable_top_margin),
            _ = (0, _._)(_, !!(0, _._)(_)),
            _ = _(_, _, (0, _._)(!!_)),
            [_, _] = (0, _.useState)(!1);
          _.useEffect(() => {
            if (
              _.jsondata.sale_custom_css &&
              !_ &&
              _ &&
              _.jsondata.sale_vanity_id_valve_approved_for_sale_subpath &&
              (0, _._)() == "community"
            ) {
              const _ = document.getElementsByTagName("HEAD")[0],
                _ = document.createElement("style");
              (_.innerText = (0, _._)(_.jsondata.sale_custom_css)),
                _(_),
                _.appendChild(_);
            }
            const _ = document.getElementsByClassName(
              "react_landing_background",
            );
            return (
              (0, _._)(
                _.length <= 1,
                "Must have at most one react_landing_background",
              ),
              _.length >= 1 && (_[0].style.backgroundImage = ""),
              () => {
                _ && (_.remove(), _(null));
              }
            );
          }, [_, _, _]);
          const _ = _?.jsondata,
            _ = _.useMemo(
              () => ({
                promotionName: _,
                clanid: Number(_._.CLANACCOUNTID),
                nAppIDVOD: Number(_?.broadcast_preroll_vod_appid),
                event: _,
                bIsPreview: _,
                language: _,
                accountIDs: _ ? _?.broadcast_whitelist : void 0,
                chat_announcement_giveaway:
                  _?.broadcast_chat_announcement_giveaway,
              }),
              [_, _, _, _, _],
            ),
            _ = (0, _._)(() => _?.BIsBackgroundImageEnabled() ?? !1),
            _ = _(_?.clanSteamID);
          if (!_ || _ === void 0)
            return (0, _.jsx)("div", {
              className: _().FlexCenter,
              style: {
                height: "500px",
              },
              children: (0, _.jsx)(_._, {
                size: "medium",
                string: (0, _._)("#Loading"),
              }),
            });
          {
            const _ = _(_),
              _ = _.BUsesContentHubForItemSource(),
              _ = _.GetSaleSections().some(
                (_) => _.section_type === "contenthubtitle",
              ),
              _ = _ && _;
            let _,
              _ = !0;
            _
              ? (_ = 0)
              : _.BUsesContentHubForItemSource()
                ? (_ = 20)
                : _.GetEventType() == _.ajI
                  ? ((_ = 0), (_ = !1))
                  : (_ = _.jsondata.sale_header_offset || 0);
            const _ = _ && _.jsondata.sale_header_offset === 530,
              _ = !_._.Get().BIsPartnerTakeoverActive(
                _.GetContentHubType(),
                _.GetContentHubCategory(),
                _.GetContentHubTag(),
              ),
              _ = _
                ? !_ && _?.BIsBackgroundImageEnabled()
                  ? _._.EPreviewMode_EditBackground
                  : _._.EPreviewMode_Enabled
                : _._.EPreviewMode_Disabled,
              _ = _ || _.GetEventType() != _.ajI,
              _ = _ ? _._.NoTransform : _._.NoTransformSparseContent,
              _ = (0, _._)(
                _().SaleOuterContainer,
                _ && _().SaleOuterTopMargin,
                _ && _().SaleNewSizing,
                _()[`CustomStyle_${_.jsondata.sale_vanity_id}`],
                "SaleOuterContainer",
                _ && _().SalePageLogoSet,
                _ && _().ContentHub,
              );
            return (0, _.jsx)(_._, {
              children: (0, _.jsx)(_._, {
                eventModel: _,
                language: _,
                children: (0, _.jsx)(_._, {
                  location: _ ? _._ : _._,
                  children: (0, _.jsxs)(_, {
                    event: _,
                    language: _,
                    bIsPreview: !!_,
                    personalizedCarousels: _,
                    children: [
                      _ && (0, _.jsx)(_._, {}),
                      (0, _.jsx)(_, {
                        eventModel: _,
                      }),
                      !!_ &&
                        (_ || _) &&
                        (0, _.jsx)(_, {
                          backgroundImageEditModel: _,
                          bBackgroundImgGroupEditMode: _,
                          fnSetBackgroundImgGroupEditMode: _,
                          bShowAsValveOnly: !_,
                        }),
                      (0, _.jsxs)(_._, {
                        style: _
                          ? void 0
                          : {
                              marginTop: `${_ || 0}px`,
                            },
                        className: _,
                        scrollIntoViewType: _,
                        children: [
                          _ &&
                            (0, _.jsx)(_, {
                              eventModel: _,
                              language: _,
                            }),
                          (0, _.jsx)(_, {
                            rgPresenters: _.jsondata.sale_presenters,
                          }),
                          (0, _.jsx)(_, {
                            event: _,
                            broadcastEmbedContext: _,
                          }),
                          (0, _.jsx)(_, {
                            ePreviewMode: _,
                            event: _,
                            backgroundImageEditModel: _,
                            language: _,
                            promotionName: _,
                            nSaleDayIndex: _,
                            broadcastEmbedContext: _,
                            selectedTab: _,
                            tagSelection: _?.GetTagSelection(),
                          }),
                          !_ &&
                            (0, _.jsx)(_, {
                              event: _,
                              addtionalAdminButtons: _,
                              fnOnChangeDayIndex: (_) => {
                                _ != _ && ((_.m_overrideCurrentDay = _), _(_));
                              },
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            });
          }
        }
        function _(_, _, _) {
          const [_] = (0, _._)(_._, void 0),
            [_] = (0, _._)(_._, void 0),
            [_] = (0, _._)(_._, void 0),
            _ = _.useMemo(() => {
              const _ = _.GetSaleSectionFirstMatchByType("tabs")?.tabs?.filter(
                (_) => !_.hide,
              );
              if (_ && _.length > 0) {
                let _ = _ > 0 ? _.find((_) => _.unique_id == _) : void 0;
                _ || (_ = _[0]);
                const _ = _ === _[0];
                return {
                  selTab: _,
                  bIsDefaultTab: _,
                };
              }
            }, [_, _]),
            _ = (0, _._)((0, _._)(_, _), _?.selTab.tab_tag_filter, _),
            _ = _?.strParentKey,
            _ = _?.strChildKey;
          return _.useMemo(() => {
            if (!_) return;
            let _;
            _ &&
              (_ = {
                strParentKey: _,
                strChildKey: _,
              });
            const _ =
              _.jsondata.sale_opt_in_page_name ||
              _.jsondata.prune_list_optin_name;
            return new _._(_.selTab, _, _.bIsDefaultTab, _, _);
          }, [_, _, _, _, _]);
        }
        function _() {
          if (window?.location?.hash)
            return decodeURIComponent(
              window.location.hash.substring(1).toLowerCase(),
            );
        }
        function _(_) {
          const {
              event: _,
              language: _,
              nSaleDayIndex: _,
              ePreviewMode: _,
              selectedTab: _,
              backgroundImageEditModel: _,
            } = _,
            [_, _] = _.useState((0, _._)()),
            _ = _.useMemo(() => new _(), []),
            _ = _.useCallback(() => _((0, _._)()), []);
          _.useEffect(
            () => (
              window.addEventListener("resize", _),
              () => window.removeEventListener("resize", _)
            ),
            [_],
          ),
            _.useEffect(() => {
              let _ = "";
              const _ = () => {
                  const _ = _();
                  if (_ && _ != _) {
                    const _ = document.getElementById(_);
                    _ &&
                      ((_ = _),
                      _.scrollIntoView({
                        block: "start",
                      }));
                  }
                },
                _ = setTimeout(() => _(), 150);
              return (
                window.addEventListener("hashchange", _),
                () => {
                  clearTimeout(_), window.removeEventListener("hashchange", _);
                }
              );
            }, []);
          const _ = (0, _._)(),
            _ = (_, _) => {
              (0, _._)(_, {
                ...(_ || {}),
                [_._]: _.toString(),
              });
            },
            [_, _] = (0, _._)("controller"),
            [_, _] = (0, _._)(() => {
              const _ =
                  _._.GetCreatorHome(_.clanSteamID)?.GetAppIDList().length ?? 0,
                _ = _.GetSaleSectionIncludingFooterSections(_);
              return [
                _(
                  _.jsondata.sale_background_img_groups,
                  _,
                  _ && _.GetActiveTabUniqueID(),
                ),
                _,
              ];
            });
          let _ = !1;
          const _ = new _._(void 0, _),
            _ = [
              {
                elements: [],
                activeTab: _,
              },
            ];
          let _ = null;
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(_),
            _ = _.useMemo(() => {
              const _ = _();
              if (!_) return;
              const _ = _.findIndex((_) => _.section_anchor === _);
              return _ > -1 ? _ : void 0;
            }, [_]);
          _.forEach((_, _) => {
            const _ = _[_.length - 1].activeTab;
            if (_ && !_.ShouldShowSection(_)) return;
            const _ = _._.Get().BIsPartnerTakeoverActive(
                _.GetContentHubType(),
                _.GetContentHubCategory(),
                _.GetContentHubTag(),
              ),
              _ = _ && !_ && !_.jsondata.content_hub_restricted_width;
            let _ = (0, _._)(_, _, _, _, _, _);
            if (_ === void 0) return;
            if (!_)
              if ((0, _._)(_) && !_._.logged_in)
                _ ||
                  ((_ = (0, _.jsx)(_._, {
                    section: _,
                    event: _,
                    language: _,
                  })),
                  (_ = !0));
              else {
                const _ = _.diable_tab_id_filtering
                  ? new _._(void 0, _ && _.GetSaleDay())
                  : _;
                _.section_type == "tabs" &&
                  _.tabs?.some(
                    (_) => _.unique_id == _?.GetActiveTabUniqueID(),
                  ) &&
                  _.push({
                    activeTab: _,
                    elements: [],
                  }),
                  (_ = (0, _.jsx)(_._, {
                    ..._,
                    section: _,
                    activeTab: _,
                    appVisibilityTracker: _,
                    selectedTab: _,
                    setTabUniqueIDQueryParam: _,
                    expanded: _,
                    controllerCategory: _,
                    setControllerCategory: _,
                  }));
              }
            _ &&
              (_ = (0, _.jsx)(_, {
                nSectionID: _.unique_id,
                children: _,
              }));
            const _ = _ && _.length && _[_.length - 1];
            let _ = (0, _.jsx)(
              _,
              {
                section: _,
                nActiveTabID:
                  _ && _.activeTab && _.activeTab.GetActiveTabUniqueID(),
                saleSectionIndex: _,
                ePreviewMode: _,
                salePageBackgroundDerivedConfig: _,
                backgroundImageEditModel: _,
                bExpanded: _,
                children: (0, _.jsx)(_._, {
                  enabled: !_ || _ > _,
                  children: _,
                }),
              },
              "SaleSectionIndex_" + _.unique_id + "_" + _,
            );
            const _ = _.mapSectionToGroup.get(_.unique_id);
            _ &&
              _.groupID != _ &&
              (_[_.length - 1].elements.push(
                _(_, _, _, _ && _?.GetActiveTabUniqueID()),
              ),
              (_ = null)),
              _
                ? (_ ||
                    (_ = {
                      groupID: _,
                      elSaleSections: [],
                      derivedGroupInfo: _.mapGroupToSections.get(_),
                    }),
                  _.elSaleSections.push(_))
                : _[_.length - 1].elements.push(_);
          }),
            _ &&
              (_[_.length - 1].elements.push(
                _(_, _, _, _ && _?.GetActiveTabUniqueID()),
              ),
              (_ = null));
          const _ = _.map((_, _) =>
            (0, _.jsx)(
              "div",
              {
                className: (0, _._)(
                  _().SaleSectionTabListContainer,
                  "SaleSectionTabListContainer",
                ),
                children: _.elements,
              },
              "TabSection_" + _,
            ),
          );
          return (0, _.jsx)(_._, {
            focusable: !1,
            focusableIfEmpty: !0,
            navKey: "SaleSectionListContainer",
            children: _,
          });
        }
        const _ = (0, _._)(_);
        function _(_) {
          const {
            visibility_by_door_index_state: _,
            door_index_visibility: _,
            children: _,
          } = _;
          return _ && _ != null
            ? (0, _.jsx)(_, {
                visibility_by_door_index_state: _,
                door_index_visibility: _,
                children: _,
              })
            : (0, _.jsx)(_.Fragment, {
                children: _,
              });
        }
        function _(_) {
          const {
              visibility_by_door_index_state: _,
              door_index_visibility: _,
              children: _,
            } = _,
            _ = (0, _._)(_);
          return (_ == "hide_when_open_door_index" && _) ||
            (_ == "show_when_open_door_index" && !_)
            ? null
            : (0, _.jsx)(_.Fragment, {
                children: _,
              });
        }
        function _({ children: _, onChange: _ }) {
          const _ = _.useRef(null);
          return (
            (0, _.useEffect)(() => {
              _(!!_.Children.toArray(_).filter(Boolean).length);
            }, [_, _]),
            _
          );
        }
        function _(_) {
          const {
              section: _,
              saleSectionIndex: _,
              nActiveTabID: _,
              ePreviewMode: _,
              salePageBackgroundDerivedConfig: _,
              backgroundImageEditModel: _,
              bExpanded: _,
              children: _,
            } = _,
            _ = _.section_anchor ? _.section_anchor : _._ + (_.unique_id || _),
            _ = _.section_type != "tabs",
            [_, _] = (0, _.useState)(!0);
          return _
            ? (0, _.jsx)(_._, {
                children: (0, _.jsx)(_, {
                  visibility_by_door_index_state:
                    _.visibility_by_door_index_state,
                  door_index_visibility: _.door_index_visibility,
                  children: _
                    ? (0, _.jsx)(_._, {
                        navKey: _,
                        _: _,
                        className: (0, _._)({
                          [_().SaleSectionCtn]: !0,
                          SaleSectionCtn: !0,
                          [_.section_type]: !0,
                          [_.internal_section_data?.internal_type || ""]: !0,
                          expanded: _,
                          [_.single_item_style || ""]: !0,
                          [_().SaleSectionBackgroundImageGroupEdit]:
                            _ == _._.EPreviewMode_EditBackground,
                          [_().NoTopPadding]: _.collapse_header_space,
                        }),
                        children:
                          _ === _._.EPreviewMode_EditBackground
                            ? (0, _.jsxs)(_.Fragment, {
                                children: [
                                  _,
                                  (0, _.jsx)(_, {
                                    nSectionUniqueID: _.unique_id || _,
                                    nTabID: _,
                                    salePageBackgroundDerivedConfig: _,
                                    backgroundImageEditModel: _,
                                  }),
                                ],
                              })
                            : (0, _.jsx)(_, {
                                onChange: _,
                                children: _,
                              }),
                      })
                    : (0, _.jsx)(_.Fragment, {
                        children:
                          _ === _._.EPreviewMode_EditBackground
                            ? (0, _.jsxs)("div", {
                                _: _,
                                className: (0, _._)({
                                  [_().SaleSectionCtn]: !0,
                                  [_().SaleSectionBackgroundImageGroupEdit]: !0,
                                  [_().NoTopPadding]: _.collapse_header_space,
                                }),
                                children: [
                                  _,
                                  (0, _.jsx)(_, {
                                    backgroundImageEditModel: _,
                                    nTabID: _,
                                    imgGroupDerivedMapping: _,
                                  }),
                                ],
                              })
                            : (0, _.jsx)(_, {
                                onChange: _,
                                children: _,
                              }),
                      }),
                }),
              })
            : null;
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
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
                      !!_ &&
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
          const [_, _] = _.useState(!!_.bStartMinimized);
          return (0, _.jsx)(_, {
            ..._,
            getMinimized: () => _,
            toggleMinimized: () => _(!_),
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
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
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
          _ = __webpack_require__("chunkid");
        class _ {
          m_rgSections;
          GetSections() {
            return this.m_rgSections;
          }
          static s_singleton;
          static Get() {
            return _.s_singleton || (_.s_singleton = new _()), _.s_singleton;
          }
          constructor() {
            this.m_rgSections = (0, _._)("categories", "application_config");
          }
        }
        function _() {
          const _ = _.Get(),
            [_, _] = (0, _.useState)(_.GetSections());
          return {
            sections: _,
          };
        }
        function _() {
          const { sections: _ } = _(),
            _ = _.useRef(null);
          return (
            _.useEffect(() => {
              _.current && _.current.NavTree()?.Activate(!0);
            }, []),
            (0, _.jsx)(_._, {
              className: _.CategorySectionsCtn,
              navRef: _,
              children: _.map((_, _) =>
                (0, _.jsx)(
                  _,
                  {
                    section: _,
                    autoFocus: _ == 0,
                  },
                  "section" + _.name,
                ),
              ),
            })
          );
        }
        function _(_) {
          const { section: _, autoFocus: _ } = _,
            _ = (0, _._)(),
            _ = (0, _.jsxs)("div", {
              className: _.CategorySection,
              children: [
                (0, _.jsx)("span", {
                  className: _.CategorySectionName,
                  children: _.name,
                }),
                (0, _.jsx)(_._, {
                  className: _.CategoriesCtn,
                  scrollDirection: "x",
                  navEntryPreferPosition: _._.MAINTAIN_X,
                  navKey: "cat_section" + _.name,
                  children: _.categories.map((_, _) =>
                    (0, _.jsx)(
                      _,
                      {
                        category: _,
                        autoFocus: _ && _ === 0,
                      },
                      "category" + _.name,
                    ),
                  ),
                }),
              ],
            });
          return _
            ? _
            : (0, _.jsx)(_._, {
                placeholderHeight: "150px",
                children: _,
              });
        }
        function _(_) {
          const { category: _, autoFocus: _ } = _;
          return (0, _.jsx)(_._, {
            focusableIfEmpty: !0,
            autoFocus: _,
            navKey: "cat_panel" + _.name,
            children: (0, _.jsxs)(_._, {
              href: _._.STORE_BASE_URL + _.url,
              className: (0, _._)({
                [_.Category]: !0,
                [_.TopLevelCategory]: _.is_toplevel_genre,
              }),
              children: [
                (0, _.jsx)(_, {
                  ..._,
                }),
                (0, _.jsx)("div", {
                  className: _.CategoryGradient,
                }),
                (0, _.jsx)("span", {
                  className: _.CategoryName,
                  children: (0, _.jsx)("span", {
                    children: _.name,
                  }),
                }),
              ],
            }),
          });
        }
        function _(_) {
          let { category: _ } = _;
          return (0, _.jsx)("div", {
            className: _.GridOuter,
            children: (0, _.jsx)("div", {
              className: _.Grid,
              children: (0, _.jsx)("img", {
                src: _._.STORE_BASE_URL + _.image_url,
              }),
            }),
          });
        }
        const _ = _;
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
        async function _() {
          const _ = await (0, _._)(
            "ajaxgetuserdeckcompatcounts",
            new URLSearchParams(),
          );
          if (!_.counts)
            throw new Error(
              "ajaxgetuserdeckcompatcounts answered without counts",
            );
          return _.counts;
        }
        const _ = 300 * 1e3;
        function _() {
          return ["DeckCompatCounts"];
        }
        function _() {
          return {
            queryKey: _(),
            queryFn: () => _(),
            staleTime: _,
            retry: !1,
          };
        }
        function _() {
          const { data: _ } = (0, _._)(_());
          return _;
        }
        function _(_, _) {
          switch (_) {
            case _._:
              return _?.playable;
            case _._:
              return _?.unsupported;
            default:
              return _?.verified;
          }
        }
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
          const { event: _ } = _.context,
            _ = Number.parseInt((0, _._)(_.args)),
            _ = _.useMemo(() => {
              if (_)
                return _.jsondata.sale_sections?.find(
                  (_) =>
                    _.section_type == "vo_internal" &&
                    (_.internal_section_data?.internal_type ==
                      "reservation_widget" ||
                      _.internal_section_data?.internal_type ==
                        "while_supplies_last"),
                );
            }, [_]);
          if (_ && _) {
            const _ = Number.parseInt((0, _._)(_.args, "depositpackageid")),
              _ = Number.parseInt((0, _._)(_.args, "psulesspackageid")),
              _ = (0, _._)(_.args, "out_of_stock_override"),
              _ = (0, _._)(_.args, "delivery_override"),
              _ = (0, _._)(_.args, "delivery_override_out_of_stock");
            return (0, _.jsx)(_, {
              section: _,
              reservationPackageID: _,
              depositPackageID: _,
              psuLessPackageID: _,
              strOutOfStockOverride: _,
              strDeliveryOverride: _ || _,
              bDeliveryOverrideOnlyIfOutOfStock: !!_,
              PreviewActions: _.PreviewActions,
            });
          }
          return (0, _.jsx)(_.Fragment, {});
        }
        function _(_) {
          const {
              reservationPackageID: _,
              depositPackageID: _,
              bIsPreview: _,
              psuLessPackageID: _,
              strOutOfStockOverride: _,
              strDeliveryOverride: _,
              bDeliveryOverrideOnlyIfOutOfStock: _,
              section: _,
              PreviewActions: _,
            } = _,
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            _ = (0, _.useMemo)(
              () => [
                {
                  unique_id: "reservation_bbcode_" + _,
                  reservation_package: _,
                  deposit_package: _,
                  localized_reservation_desc: (0, _._)([], _.bP9, null),
                  localized_out_of_stock_override: (0, _._)(
                    [_ || null],
                    _.bP9,
                    null,
                  ),
                  localized_delivery_override_desc: (0, _._)(
                    [_ || null],
                    _.bP9,
                    null,
                  ),
                  override_delivery_only_out_of_stock: !!_,
                  psu_less_package: _,
                },
              ],
              [_, _, _, _, _, _],
            );
          if (!_ || (_ && !_))
            return (0, _.jsx)(_._, {
              string: (0, _._)("#Loading"),
              size: "small",
              position: "center",
            });
          const _ = !_._.logged_in || !_.account_restricted_from_purchasing,
            _ =
              _.reservation_state == _._.k_EPurchaseReservationState_Reserved
                ? _
                : void 0;
          return (0, _.jsxs)(_._, {
            children: [
              _ &&
                (0, _.jsx)(_.Suspense, {
                  fallback: null,
                  children: (0, _.jsx)(_, {
                    bIsPreview: !!_,
                    rgReservationDef: _,
                  }),
                }),
              !!_.allow_purchase_in_country &&
                (0, _.jsxs)("div", {
                  className: _[0].unique_id,
                  children: [
                    (0, _.jsx)(_._, {
                      reservationDef: _[0],
                      hardwareDetail: _,
                      bPSULessModel: !1,
                      reservedHardwareDetail: _,
                    }),
                    _ &&
                      (0, _.jsx)(_._, {
                        section: _,
                        reservationDef: _[0],
                        hardwareDetail: _,
                        reservedHardwareDetail: _,
                      }),
                    _ &&
                      _?.allow_purchase_in_country &&
                      (0, _.jsx)(_._, {
                        reservationDef: _[0],
                        hardwareDetail: _,
                        bPSULessModel: !0,
                        reservedHardwareDetail: void 0,
                      }),
                  ],
                }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { appID: _, classOverride: _, styleOverride: _ } = _,
            [_, _] = (0, _.useState)(!1),
            _ = (0, _._)("GameHoverFollowButton"),
            { elDialogElement: _, fnShowLogonDialog: _ } = (0, _._)(),
            _ = (0, _._)(_),
            { mutateAsync: _ } = (0, _._)(_, !_, void 0),
            _ = async (_) => {
              _.preventDefault(),
                _.stopPropagation(),
                _._.logged_in
                  ? (_(!0), await _(), _.token.reason || _(!1))
                  : _();
            };
          return (0, _.jsxs)(_._, {
            className: (0, _._)(_().FollowButton, _),
            onClick: _,
            style: _,
            children: [
              _ ? (0, _.jsx)(_.pPV, {}) : (0, _.jsx)(_.c9e, {}),
              (0, _.jsx)("div", {
                className: (0, _._)(
                  _().FollowButtonText,
                  _ && _().FollowLoadingText,
                  "FollowGameButton",
                ),
                children: (0, _._)(
                  _ ? "#Sale_StopFollowingGame" : "#Sale_FollowGame",
                ),
              }),
              _,
            ],
          });
        }
        function _(_) {
          const { appid: _, color: _, bgcolor: _ } = _,
            _ = (0, _._)();
          return (0, _.jsx)(_, {
            appID: _,
            classOverride: (0, _._)(
              _().FollowGameButtonNotTop,
              _().BBCodeFollowButton,
            ),
            styleOverride: {
              color: _,
              backgroundColor: _,
            },
          });
        }
        function _(_) {
          const _ = Number(_.args.appid);
          if (!_) return null;
          const _ = (0, _._)(_.args.color, "black"),
            _ = (0, _._)(_.args.bgcolor, "white");
          return (0, _.jsx)(_, {
            appid: _,
            color: _,
            bgcolor: _,
          });
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = Number(_.args.packageid);
          return _
            ? (0, _.jsx)(_._, {
                packageID: _,
                display_style: (0, _._)(_.args.display),
              })
            : null;
        }
        function _(_) {
          const _ = Number(_.args.packageid),
            _ = Number(_.args.compareid);
          return !_ || !_
            ? null
            : (0, _.jsx)(_._, {
                packageID: _,
                compareID: _,
              });
        }
        function _(_) {
          const _ = _.args[""]?.trim();
          return _
            ? (0, _.jsx)("div", {
                className: _,
                children: _.children,
              })
            : (0, _.jsx)(_.Fragment, {
                children: _.children,
              });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { clanAccountID: _, color: _, bgcolor: _ } = _,
            [_, _] = _.useState(!1);
          return (0, _.jsx)("div", {
            className: (0, _._)(_().BBCodeFollowButton, _ && _().isHovered),
            onMouseEnter: () => _(!0),
            onMouseLeave: () => _(!1),
            children: (0, _.jsx)(_._, {
              nCreatorAccountID: _,
              classOverride: _().FollowGameButtonNotTop,
              styleOverride: {
                color: _,
                backgroundColor: _,
              },
              followType: "group",
            }),
          });
        }
        function _(_) {
          const { event: _ } = _.context,
            _ = Number(_.args.groupid) || _?.clanSteamID.GetAccountID();
          if (!_) return null;
          const _ = (0, _._)(_.args.color, "black"),
            _ = (0, _._)(_.args.bgcolor, "white");
          return (0, _.jsx)(_, {
            clanAccountID: _,
            color: _,
            bgcolor: _,
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { appid: _, color: _, bgcolor: _ } = _,
            _ = (0, _._)(),
            _ = (0, _._)(_),
            _ = (0, _._)(_);
          return (0, _.jsx)("div", {
            className: _().WishlistHoverCtn,
            children: (0, _.jsx)(_._, {
              snr: _,
              _: _,
              classOverride: (0, _._)(
                _().WishlistButtonNotTop,
                _().BBCodeWishlistButton,
                "WishlistButton",
              ),
              styleOverride: {
                color: _,
                backgroundColor: _,
              },
              bShowInGamepadUI: !0,
            }),
          });
        }
        function _(_) {
          const _ = Number(_.args.appid);
          if (!_) return null;
          const _ = (0, _._)(_.args.color, "black"),
            _ = (0, _._)(_.args.bgcolor, "white");
          return (0, _.jsx)(_, {
            appid: _,
            color: _,
            bgcolor: _,
          });
        }
        let _ = null;
        function _() {
          return (
            _ == null &&
              (_ = new Map([
                [
                  "wishlist",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "followgroup",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "classname",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "price",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "pricesavings",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "reservationbutton",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
              ])),
            _
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return _ < 10 ? "0" + _ : _;
        }
        function _(_) {
          const { giveawayid: _ } = _,
            _ = (0, _._)(_),
            {
              bLoadingGiveawayInfo: _,
              winner_count: _,
              closed: _,
              seconds_until_drawing: _,
            } = _;
          return _
            ? null
            : (0, _.jsxs)("div", {
                className: _.countdownCtn,
                children: [
                  !!_ &&
                    (0, _.jsx)("div", {
                      className: _.Closed,
                      children:
                        _ > 0
                          ? (0, _._)("#Giveaway_Closed", (0, _._)(_))
                          : (0, _._)("#Giveaway_Closed_NoWinnerInfo"),
                    }),
                  !_ &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        _ <= 0
                          ? (0, _.jsxs)("div", {
                              className: _.Throbber,
                              children: [
                                (0, _.jsx)(_._, {
                                  size: "small",
                                }),
                                (0, _.jsx)("div", {
                                  children: (0, _._)("#Giveaway_RandomDraw"),
                                }),
                              ],
                            })
                          : (0, _.jsxs)("div", {
                              className: _.CountDownCtn,
                              children: [
                                (0, _.jsx)("div", {
                                  className: _.CountDownTime,
                                  children:
                                    _(Math.floor(_ / 60)) + ":" + _(_ % 60),
                                }),
                                (0, _.jsxs)("div", {
                                  className: _.CountDownText,
                                  children: [
                                    (0, _._)("#Giveaway_CountDown2"),
                                    " ",
                                    (0, _._)("#Giveaway_KeepWatching"),
                                  ],
                                }),
                              ],
                            }),
                        _ > 0 &&
                          (0, _.jsxs)("div", {
                            className: _.WinnerInfo,
                            children: [
                              (0, _.jsx)("div", {
                                className: _.WinnerCount,
                                children: (0, _._)(_),
                              }),
                              (0, _.jsx)("div", {
                                className: _.WinnerText,
                                children: (0, _._)("#Giveaway_Congratulation"),
                              }),
                            ],
                          }),
                      ],
                    }),
                ],
              });
        }
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
          const { eventModel: _, nEventBadgeID: _ } = _,
            _ = (0, _._)(_);
          if (_?.level > 0) {
            let _ = _.level;
            if (_?.BHasSaleEnabled()) {
              const _ = _.GetSaleSectionsByType("badge_progress");
              if (_?.length == 1) {
                const _ = _[0].badge_progress;
                if (_?.event_badgeid == _ && _?.granted_by_discovery_queue) {
                  const _ = _.levels[_.levels.length - 1].level;
                  return (0, _.jsx)(_, {
                    eventModel: _,
                    nBadgeLevel: _,
                    nMaxLevel: _,
                  });
                }
              }
            }
            return (0, _.jsx)("span", {
              className: "DisplayBadgeProgress",
              children: (0, _._)(_),
            });
          }
          return null;
        }
        function _(_) {
          const { eventModel: _, nBadgeLevel: _, nMaxLevel: _ } = _,
            _ = _.useMemo(() => {
              const _ = _.GetSaleSections().filter(
                (_) => _.section_type == "discoveryqueue",
              );
              return _?.length > 0 ? _[0] : null;
            }, [_]),
            { storePageFilter: _, eStoreDiscoveryQueueType: _ } = _.useMemo(
              () => (0, _._)(_, _),
              [_, _],
            ),
            _ = (0, _._)(_, _),
            _ = Math.min(_ + _, _);
          return (0, _.jsx)("span", {
            className: "DisplayBadgeProgress",
            children: (0, _._)(_),
          });
        }
        function _(_) {
          const { event: _ } = _.context,
            _ = Number.parseInt((0, _._)(_.args, "eventid"));
          return _._.logged_in && _
            ? (0, _.jsx)(_, {
                nEventBadgeID: _,
                eventModel: _,
              })
            : null;
        }
        function _(_) {
          const { nDoorIndex: _, children: _ } = _,
            _ = (0, _._)(_),
            _ = (0, _._)(),
            [_, _] = _.useState(!1),
            [_, _] = _.useState(!1),
            { elDialogElement: _, fnShowLogonDialog: _ } = (0, _._)();
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_._, {
                disabled: _,
                onClick: (_) => {
                  _ ||
                    (_._.logged_in
                      ? (_(!0),
                        _({
                          iDoorIndex: _,
                        })
                          .then((_) => {
                            _ || _(!0), _(!1);
                          })
                          .catch(() => {
                            _(!0), _(!1);
                          }))
                      : _());
                },
                children: _
                  ? (0, _.jsx)("div", {
                      children: (0, _._)("#GrantAwardError_Busy"),
                    })
                  : (0, _.jsxs)(_.Fragment, {
                      children: [
                        !!_ &&
                          (0, _.jsx)(_._, {
                            size: "small",
                          }),
                        !!_ && (0, _.jsx)(_.Jlk, {}),
                        _,
                      ],
                    }),
              }),
              _,
            ],
          });
        }
        function _(_) {
          const _ = Number.parseInt((0, _._)(_.args)) || 0;
          return _ >= 0 && _ < 32
            ? (0, _.jsx)(_, {
                nDoorIndex: _,
                children: _.children,
              })
            : null;
        }
        const _ = (0, _._)(_._);
        function _(_) {
          const _ = Number.parseInt((0, _._)(_.args)),
            { event: _, showErrorInfo: _ } = _.context;
          if (_) {
            const _ = _?.jsondata?.sale_sections?.findIndex(
              (_) => _.unique_id == _,
            );
            if (_ >= 0) {
              const _ = _.GetDayIndexFromEventStart();
              return (0, _.jsx)(_._, {
                location: _ ? _._ : _._,
                children: (0, _.jsx)(_, {
                  event: _,
                  section: _.jsondata.sale_sections[_],
                  activeTab: new _._(null, _),
                  language: _.language,
                  nSaleDayIndex: _,
                  promotionName: "",
                  appVisibilityTracker: null,
                  ePreviewMode: _
                    ? _._.EPreviewMode_Enabled
                    : _._.EPreviewMode_Disabled,
                }),
              });
            } else if (_)
              return (0, _.jsxs)("div", {
                className: _.ErrorDiv,
                children: ["Error could not find sale section ", _],
              });
          }
          return null;
        }
        let _ = null;
        function _() {
          return (
            _ == null &&
              (_ = new Map([
                ...Array.from(_().entries()),
                [
                  "itemdef",
                  {
                    Constructor: _,
                    autocloses: !1,
                    skipInternalNewline: !0,
                    allowWrapTextForCopying: !0,
                  },
                ],
                [
                  "followgame",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "deckcompatcount",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "deckcompatuserlibrarycount",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "giveawayinfo",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "eventdoorvisibility",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "badgecurrentlevel",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "optindoorquest",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "localize",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "salesection",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "reservationbutton",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
              ])),
            _
          );
        }
        function _(_) {
          const { event: _ } = _.context,
            _ = Number.parseInt((0, _._)(_.args, "appid")),
            _ = Number.parseInt((0, _._)(_.args, "itemdefid")),
            _ = Number.parseInt((0, _._)(_.args, "maxquantity")),
            _ = (0, _._)(_.args, "calltoaction");
          return !(0, _._)(_, _, !1) || !_
            ? (0, _.jsx)(_._, {
                size: "small",
                position: "center",
                string: (0, _._)("#Loading"),
              })
            : (0, _.jsx)(_._, {
                language: _.language,
                clanAccountID: _.clanSteamID.GetAccountID(),
                itemDefSetting: {
                  nAppID: _,
                  nItemDefID: _,
                  max_quantity: _,
                },
                strCallToAction: _,
              });
        }
        function _(_) {
          const _ = _();
          if (!_)
            return (0, _.jsx)(_._, {
              size: "small",
            });
          const _ = Number.parseInt((0, _._)(_.args));
          return (0, _.jsx)("span", {
            children: (0, _._)(Number(_(_, _))),
          });
        }
        function _(_) {
          const _ = (0, _._)(_._.accountid, "library");
          if (!_)
            return (0, _.jsx)(_._, {
              size: "small",
            });
          const _ = Number.parseInt((0, _._)(_.args));
          let _ = _.verifiedList?.length || 0;
          switch (_) {
            case _._:
              _ = _.playableList?.length || 0;
              break;
            case _._:
              _ = _.unsupportedList?.length || 0;
              break;
            case _._:
              _ = _.unknownList?.length || 0;
              break;
          }
          return (0, _.jsx)("span", {
            children: (0, _._)(Number(_)),
          });
        }
        function _(_) {
          const _ = Number.parseInt((0, _._)(_.args)),
            _ = "hide" in _.args && !!Number.parseInt((0, _._)(_.args, "hide"));
          return _ >= 0
            ? (0, _.jsx)(_, {
                nDoorIndex: _,
                bHide: _,
                children: _.children,
              })
            : null;
        }
        function _(_) {
          const { nDoorIndex: _, bHide: _, children: _ } = _,
            _ = (0, _._)(_);
          return _ == null
            ? null
            : (_ && !_) || (!_ && _)
              ? (0, _.jsx)(_.Fragment, {
                  children: _.children,
                })
              : null;
        }
        function _(_) {
          return (0, _.jsx)("span", {
            className: _.LocalizeBlock,
            children: (0, _._)(
              _.children,
              (0, _.jsx)("b", {}),
              (0, _.jsx)("b", {}),
              (0, _.jsx)("b", {}),
              (0, _.jsx)("b", {}),
            ),
          });
        }
        function _(_) {
          let _ = (0, _._)(_.args);
          return _
            ? (0, _.jsx)(_, {
                giveawayid: _,
              })
            : (0, _.jsx)(_.Fragment, {});
        }
        const _ = void 0;
        function _(_) {
          return (0, _.jsx)(_, {
            ..._,
            PreviewActions: _,
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { bSalePage: _ } = _,
            [_, _] = _.useState(!1);
          return (
            (0, _._)(_, _),
            _.useEffect(() => {
              _._.Init(new _._(_._.WEBAPI_BASE_URL)), _._.Init(), _(!0);
            }, []),
            _.useEffect(() => {
              const _ = (0, _._)();
              _ && _.locale(_);
            }, []),
            _
              ? _
                ? (0, _.jsx)(_._, {
                    dictionary: _(),
                    children: _.children,
                  })
                : _.children
              : null
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { eventModel: _ } = _;
          return (0, _.jsx)(_._, {
            bSalePage: !0,
            children: (0, _.jsx)(_, {
              ..._,
              overrideEventModel: _,
            }),
          });
        }
        function _(_) {
          const { promotionName: _, language: _, overrideEventModel: _ } = _,
            [_, _] = _.useState(
              _ ?? _._.GetClanEventFromAnnouncementGID(_._.ANNOUNCEMENT_GID),
            );
          _.useEffect(() => {
            if (!_ && _?.AnnouncementGID != _._.ANNOUNCEMENT_GID) {
              const _ = new _._(_._.CLANSTEAMID);
              _._.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                _,
                _._.ANNOUNCEMENT_GID,
                null,
              ).then(_);
            }
          }, [_, _]);
          const _ = (0, _._)() ?? _,
            _ = (0, _._)();
          if (((0, _._)(1500), !_))
            return (0, _.jsx)("div", {
              className: _().FlexCenter,
              style: {
                height: "500px",
              },
              children: (0, _.jsx)(_._, {
                size: "medium",
                string: (0, _._)("#Loading"),
              }),
            });
          const _ =
            (_.visibility_state !== _._.k_EEventStateVisible &&
              _.visibility_state !== _._.k_EEventStateUnlisted) ||
            _;
          return (0, _.jsx)(_, {
            eventModel: _,
            children: (0, _.jsx)(_._, {
              children: (0, _.jsx)(_._, {
                curator_clanid: _?.clanSteamID?.GetAccountID(),
                children: (0, _.jsx)(_._, {
                  promotionName: _,
                  language: _,
                  eventModel: _,
                  bIsPreview: _,
                }),
              }),
            }),
          });
        }
        function _(_) {
          const { eventModel: _, children: _ } = _,
            _ = _.GetContentHubType() == "adultonly";
          return (0, _.jsx)(_._, {
            eAdultOnlyMediaBehavior: _ ? "allowed" : "masked",
            children: _,
          });
        }
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          FollowButton: "c-TDTqD2D5mBLfTqn3fSV",
          FollowButtonText: "_2PmgMkPwEgmuCJVZLTGSPi",
          FollowLoadingText: "_2XN3sBlgsLE3n5WrKOkWxi",
        };
      },
      chunkid: (module) => {
        module.exports = {
          SalePageHiddenWarning: "_2h9U3L_8MxvbQ6TGGaeBYa",
          WarningText: "_2iB5yR1rkdynH8-UFCwUty",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          SalePageLogoCtn: "_3Rukhd1HqXzPiBrK5hwPT-",
        };
      },
      chunkid: (module) => {
        module.exports = {
          PresenterDisclaimer: "_3t5Ysy42auAhLs-ZV5jwdF",
          PresenterLabel: "_2FnM_Y63_Jnu_t6cnt-4se",
        };
      },
      chunkid: (module) => {
        module.exports = {
          EyeDropperCtn: "_5jKe2NV9CM3JA3hcMALLw",
          EyeDropperBtn: "_3afPQT_fEWmhHhFHS-WIk7",
          ColorPickerCtn: "Nn2-w0eqLuugAR-Udm--3",
          ColorPickerDialog: "_32PwNSgquR6tGAPIBcWgVq",
        };
      },
      chunkid: (module) => {
        module.exports = {
          MenuBackgroundReflection: "_1vclHrINn0CO_nGkxoDkKy",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ImagesOuterContainer: "_3A8RGZO2pwg1yKDAdFqp9r",
          Hilight: "_1v_zQLXgFsvon1SwxrWjE-",
          ImageContainer: "_2ti3yMwzfkGoiW68FuNjTG",
          Image: "y902_9A0Wj5bTshbt4xRb",
          ImageFilename: "_2jzLZXXxgDMMcA9X0QDSdg",
        };
      },
      chunkid: (module) => {
        module.exports = {
          BBCodeFollowButton: "NVuxjpTCUClP-4RsNDDvk",
        };
      },
      chunkid: (module) => {
        module.exports = {
          BBCodeFollowButton: "BwHJdoHlv8wy5OypqL_b7",
          isHovered: "_2EcgCb9lHfl7I_MlirYLZL",
        };
      },
      chunkid: (module) => {
        module.exports = {
          countdownCtn: "GWWacIf04lQysYMFJma0A",
          Closed: "ATX_xEE69rX8wVxQvONEx",
          CountDownCtn: "_11RwPICMOmmvNXkOq9bjPc",
          CountDownTime: "eh0pMnSr-nk203Ealq_Rq",
          CountDownText: "_3VKQ3h7Z4wO_U-Z_vXUZkk",
          LearnMore: "_1q98mjxkCUwQuFALsiNtD7",
          Throbber: "bEkRtFmRUW_smWksM-k9g",
          WinnerInfo: "_2LTFl4ZFuL1BeNbqYPExWv",
          WinnerCount: "Z7ScP-i1XHPQn4eeFdJ3g",
          WinnerText: "chkuqox_QD6U5ID_AHTLk",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ColorCtn: "Sf6uEgb-RsQVL8-DaDtRl",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Ctn: "_2Un11RfkRCG1ypLwtwMzrI",
          CtnEditor: "_1_IJ41Ffm67VU1UXLllw1C",
          SwapColorsCtn: "_2n77ZzDS9tVkdreDY75XWS",
          EditorTitle: "SxztzVEl1Jvth4-DhCzea",
          ConfDialogOptions: "_1SQN7pP2X-HClw-EOdtut1",
          ImageOptions: "_3pRF8ln193eBQJlbd8WJih",
          ColorOptions: "_2zPsCFzA78zGnQWaKhLIr9",
        };
      },
      chunkid: (module) => {
        module.exports = {
          TabCtn: "d43sj0ExWatSivXsOo2Qx",
          TabHeader: "_2CnSAWQAuZ56_k9CtX6wvO",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ImageWrapperContainer: "_2or51Nzh1oEwvdNjKQ1XsS",
          ImageWrapper: "_34WcpEIVKr8Z72GaesGoR4",
          VideoBackground: "_3IizOeZqT1lZaoPEmdVxG",
          ImageWrapperFilename: "_3_vYFjDjTuDvhsL10XO9BU",
          ResultNotification: "_1X95b1CVvEsEa5dfoR5Pfv",
          ErrorCode: "_-7Alg3skQ6oFTYIpKTHsI",
          Hilight: "_3lBJMYeg4_hihNl0QTX1Qi",
          ImageButton: "_2MUWDtjaZWaMDdJaQr4o5a",
          Thumb: "_3M02zvAfoMwX5XlzlvFkc3",
          Full: "_1RN-YKVciU9zYHOYX6OV0",
          Delete: "_1X87fLS_CT0g2Vu5-fClUZ",
          FloatingThrobber: "_2EHZ15YQSAK_T5SCxVobtG",
          Localized: "_3FFrtt5Of4jP9unTFjYiHs",
          ClanImageGrid: "_3J5Yc20Wkz7gjSxxWcHst",
          ClanImageGridItem: "_1vXdD6QZTKcjYoRTOAuOeX",
          Selected: "_3JVN2Ta1MlQnuMnqPo0XR8",
          ImgCtn: "_248ADrw9QzPyhcxjqlaykT",
          Name: "TzsVI0_4scOG258SCeyqz",
        };
      },
      chunkid: (module) => {
        module.exports = {
          TitleImg: "_3E4IFPQP4lnTaJ8fo462Br",
          PreviewImg: "_2COOlV_DzUDN3N0P3ToybN",
          ArtworkBar: "_3OWH-tupjKqql_tcQsLYIp",
        };
      },
      chunkid: (module) => {
        module.exports = {
          DragAndDropContainer: "_2RL1a79W53-tCW7090DcUp",
          DragAndDropContainerDragging: "wn604fTvW5SH1o852jAnI",
          ImageUploadBar: "_2Zk7b2c_FLMvZPqYvzTzt5",
          SelectImageButton: "_3Cd9cpywFS-01PilCrgOQo",
        };
      },
      chunkid: (module) => {
        module.exports = {
          SearchInput: "z7qI4Gjuleb-g6osRQpw2",
          PickerTitle: "_1yPqhNpX8e1HgnrarYmsZg",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ImageDimensionTooSmall: "_1A6oRywbsuzGxawqTexX6G",
          UploadPreviewCtn: "_1x7wvgGW08t0c2auyfWyAs",
          UploadPreviewButtonsCtn: "_2Vsz0Teq375iSLvbdoaCw0",
          UploadPreviewDelete: "_1898rmbQKDsZukkFbEda-H",
          UploadPreviewButton: "wUyDKp6qikfxWISsHWYI5",
          UploadPreviewError: "_2sh7mSiQmyBdLyJPYPva2L",
          UploadPreviewWarning: "-khhIHR9pWYus_nTScWdO",
          UploadPreviewMessage: "_3kt_NxdtRh4OR_iFeApvM9",
          UploadPreview: "_3dSNtZdgIHIa6P9ZODRBJs",
          PreviewImgCtn: "a4db1xuziijkLJ6HQXeEs",
          PreviewImgInfo: "ddYEDOKiU6ZFhNI4sb_eQ",
        };
      },
      chunkid: (module) => {
        module.exports = {
          EventEditorArtworkCtn: "_3etoSeNgIJIJoQjVvKBkdK",
          ArtworkPreview: "_1fBG8S7L5v1-Ll8UMASqW5",
          EventEditorArtworkBarContainer: "TLT1tvLtG6-1EdFGwToo1",
          EventEditorButton: "_2EbfH5kGhG6VdMYM0aSFsw",
          EventEditorInputPaneTopRow: "_3loSsH7QVVzJW4dbA_k8pH",
          EventCoverImageCtn: "vcULy1uwr1V-xetzQ3t5_",
          DragTarget: "_2qaqHaHt0FsJ5g6E50Rpbn",
          DragOnTopOfMe: "_1-0mEm0at-4Czr10kmQ82K",
          EventEditorArtworkTextCtn: "wbzVx6PSPvY3jxjmybwT7",
          EventEditorDragTargetArea: "_352Z7ynHHExwu7pbLG0mi3",
          EventEditorArtworkTitle: "_1BtkzIs3COLhdqubhPqTJa",
          EventEditorArtworkSubTitle: "_3NsjbDpfSxc8ZHhYE5TuTv",
          EventEditorArtworkResolution: "pScoegXLiCfPTrVdDHgRc",
          ReassignCtn: "_2kzxUHYwRnfLZc2qUJp54m",
          ImagePreviewContainer: "_4M__i4jyU9-VJE6K30Rat",
          NoneSet: "csDC3rD7ooQ8gGXZhh594",
          TitleSafePreview: "_2Gel5eBC4smzhCMPJN4poX",
          TitleSafeCaption: "_2oU3ulhvWy8BrTtr-wLTHL",
          LanguageSelector: "_33sdnBObDSgcIemY_8d188",
          LanguageSelectorSelected: "_35iac6gVYl3NbfLM5oGhAp",
          LanguageSelectorNoData: "_2MrExNFgrVVmzV4_XxWk7m",
          LanguageContainer: "_1GqYxNpFolOmvCXZZ5SqS9",
          LanguageOptions: "_1OF4inXEccSHpEi-94BNyB",
          LanguageListContainer: "_2NKwVWWJzUopyzUpm5K8PU",
          SelectImageContainerTopRow: "_33RDQ6gt9hW0N3baDbAfnl",
          SelectImageContainerBottomRow: "_3Mstp8zLfqhPc0yqJGve2N",
          TextTitle: "_1b_OxtjP85MZc-IlQfnnHR",
          TextSubTitle: "EqzVNygGbzsiBalSQOtWy",
          SelectImageEqualColumns: "Qz0mmjcnBMcs99N6fgVCv",
          SelectImageBlock: "X_wtWeV0nNEF-9Rz0wZRL",
          MainPreviewBlock: "_3kAV8hXf4G70C4tDE8HDjI",
          Tips: "_2jAkKq9D5KKOH2cgMu59yN",
          ExamplesCtn: "WiG3FOkzY58mDmTzVy40z",
          SelectImageExampleImg: "_3Lcquzc_EacniSS2QxdUHx",
          SelectImageLanguagesCtn: "_27huHYrHSwivfUIglfRube",
          SelectImageTitle: "lJEQ6yKHtjwXClD4NVqUY",
          ArtworkSelectorContainer: "_2dxWXru9IFUHuJgzC9_WwQ",
          Title: "_2HiqsrLG8k4zf4raXVygUP",
          SaleHeaderExampleCtn: "_2Nwi2WWTWdc4JkMEiHDFFK",
          SaleHeaderExampleCol: "_2s4zAjRHJabF47kK9uxCY6",
          BroadcastPreview: "_3NxzN3dNq98rjVdkyQ9QIH",
          AssetExampleSpotlightCtn: "_29B1UOzVRMVZSd22IyP43x",
          BackgroundConfigCtn: "_3SVRvFP-sXikNXmksKkDQ7",
          OptionCtn: "_2XnObldRTEs5T4Sswyv5Fo",
          ButtonRow: "_2W9rAanKV4V6A7Exx4sWGF",
          BackgroundColorBtn: "_2YD-avez2pqO4MJHAO5_v0",
          BackgroundColorResetBtn: "baRhk4ouyxcNfo_um5C76",
          UploadSuccess: "inXVzuN-asDe-A5jnsvvV",
          HighlightBox: "_3qTodEPOW76BNBFtgX0AUa",
        };
      },
      chunkid: (module) => {
        module.exports = {
          MultipleExampleContainer: "_3HrpHSdcqC7wp8s07bOS2l",
          ExampleSectionTitle: "MxxIR01BbdH_tAWmTbjoz",
          DetailPageExample: "_3Mi3a8sT7hZn6-L_TPm3gr",
          DetailExample: "TYQJH_hhcEuSRvl75g6GA",
          DetailExample2: "HQAziOChjZK2M_cKTNA8",
          MainImageCtn: "_1mRJSs13tWFRJ55fG6WrK8",
          ExampleBodyPosition: "_2wNW_eWECTcvaYU7AYXXY2",
          ExampleContentCtn: "_2bAs9Bkh1K8PYVhcLLerfA",
          TextTitle: "_3fulSVNkgCeQyqxT0FjHOp",
          TextSubTitle: "_3ThX6fPp7MJY_TrTP_RCRY",
          TextBody: "_2nG13rbAd05OnozWt7nQWL",
          SpotlightExample: "_3KsBV1q-e0ZnxgK9GdUiON",
          ExampleSpacer: "oAEZygc5smKi6PjD-981",
          BroadcastPreviewContainer: "_3aLcrZxS4I4KVtUF0BdHds",
          SaleHeaderPreviewContainer: "GORXZE3lrdjE-QiVxXceW",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Ctn: "_1fmjHmozlsZ8ZXlDnql4Pe",
          Header: "_1gKvHUxWanEHu-0GbjB4KV",
          Body: "_3tPVeOGZDIVgS7KGdpTsXB",
          Summary: "_3hyLqEQDWP9Sck6GY2mO9_",
          Controls: "_2GkioR72RQBbHku00uxt47",
          ControlButton: "_3ObP_u1dEak3ra2LLM7GVb",
          ExponentInput: "_3a0Hx5NOSuPBHi9gp7kT2I",
          Chart: "_2F7VrAMPKV6N4hhdOm4v6B",
          Column: "FhDnO3NBSjZkWQv3No3N3",
          ColumnTitle: "_2SG3j7hLVHdpo3WooeBJiv",
          Row: "_2-m8vjFf_-iwN09EHqQm7c",
          Highlighted: "kWJDRycQPH53McjlfFjQ-",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          "duration-app-launch": "800ms",
          ReadMoreLink: "_2mvgc6dpEDHRJlTWhGDz7h",
          MajorEventContainer: "dVJB2r43CGIAgr-Xtt4P3",
          MajorEventImageContainer: "_1PkTBeZJVs3WI8US0zffEx",
          MajorEventImage: "_25fL1JQcG1kh_9L5danMxc",
          BottomShadow: "_1ueE9cjv0hzERo311Gr6qL",
          MajoreEventImageContentContainer: "_3mREW5LJ_7jyeol7BtXcym",
          MajorEventImageTemplate: "lQR9_4nAXfydIY7zwOzSF",
          MajorEventBackground: "_388IuJImOHcpIL9kvqJdet",
          MajorEventImageBackgroundBlur: "_3sVs6YBElnuTON_cY_6ne5",
          MajorEventHeader: "_1HL2nt3zhHJo3RkMzmD-Gb",
          PartnerEventLargeImage_Title: "bYwbk-ycz_n2JnQgyrgDx",
          EventType: "_3zVyXPaFJl95Q5qnxtDpuB",
          GameIconAndName: "IltgR1LrH0neRnKq0TLxy",
          GameIcon: "_3Dkj3XaiQV2I1d2m-RRA_L",
          MajorEventSpotlightBackground: "_1ahePoGx6gPXhapzZw2L21",
          MajorEventContent: "_2nr7NuawYs9NhC8OUkY0fK",
          MajorEventTextCtn: "Ojdg2vBD3O1oroxYVU2zB",
          MajorEventTitle: "nEBZT02OOnxIbyIl9Dk44",
          MajorEventSummary: "HPngOFPPykmeXFSxcC1Zv",
          MajorEvent_Ctn: "_2_kU7nUB6wwDu-LsbQZmNc",
          AppDetailsSpotlightContainer: "_1zDJ1bfFg-UkuAluUAoGKj",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          storeMenuResponsiveModeWidth: "730px",
          SuppressScrollOnBody: "_1FFwlWIoDrtb0qdN9YUwHs",
          WishlistHoverCtn: "GXjJQihysg6S5INBKClED",
          BBCodeWishlistButton: "_1dm-6uzq_x5Gqo421G3a1r",
        };
      },
      chunkid: (module) => {
        module.exports = {
          SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
          SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
          required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          CategorySectionsCtn: "YuXdszLjIFoat_EbTkm8U",
          CategorySection: "_2MUQ8QBrMaSxsdhqhiN6tG",
          CategorySectionName: "_2VnsyILlZj23L2UgP3ZsMm",
          CategoriesCtn: "_3yuPyNw3DpZ_ICakOPcu4u",
          Category: "_1uwcZwdwT2vRgumGDlZbtk",
          Grid: "_3anY0OeVUh2enLVFNx50N1",
          CategoryGradient: "_27LrTrejiaFAMHuA0df3qP",
          CategoryName: "_3VNsED3Ez-vqDraw_8QWsp",
          TopLevelCategory: "_2ZYjRLgkQLHW5_cstUffIp",
        };
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        const _ =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();
