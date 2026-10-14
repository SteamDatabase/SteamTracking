"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [9436],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
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
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _);
        const _ = 0,
          _ = "061818254b2c99ac49e6626adb128ed1282a392f",
          _ = "338200c5d6c4d9bdcf6632642a2aeb591fb8a5c2.gif",
          _ = "338200c5d6c4d9bdcf6632642a2aeb591fb8a5c2.gif",
          _ = 120;
        class _ {
          constructor(_) {
            _(this, "m_unAppID"),
              _(this, "m_bInitialized", !1),
              _(this, "m_strName"),
              _(this, "m_strIconURL"),
              _(this, "m_dtUpdatedFromServer"),
              _(this, "m_eAppType"),
              (this.m_unAppID = _);
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
          _ = Object.defineProperty,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _);
        class _ {
          constructor(_) {
            _(this, "m_nLastUpdated", 0),
              _(this, "m_mapLanguages", _._.map()),
              _(this, "m_appid"),
              _(this, "m_fetching", null),
              (this.m_appid = _);
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
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          },
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _);
        function _(_) {
          return useObserver(() => _.GetAppInfo(_));
        }
        function _(_) {
          return useObserver(() => _.map((_) => _.GetAppInfo(_)));
        }
        const _ = 3600 * 24 * 7 * 2;
        class _ {
          constructor() {
            _(this, "m_CMInterface"),
              _(this, "m_mapAppInfo", _._.map()),
              _(this, "m_mapRichPresenceLoc", _._.map()),
              _(this, "m_cAppInfoRequestsInFlight", 0),
              _(this, "m_setPendingAppInfo", new Set()),
              _(this, "m_PendingAppInfoPromise"),
              _(this, "m_PendingAppInfoResolve"),
              _(this, "m_CacheStorage", null),
              _(this, "m_fnCallbackOnAppInfoLoaded", new _._()),
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
              _ == null || _();
          }
          async LoadAppInfoBatch(_) {
            var _;
            this.m_cAppInfoRequestsInFlight++;
            let _ = await this.LoadAppInfoBatchFromLocalCache(_);
            if (_.length) {
              console.log("Loading batch of App Info from Steam: ", _),
                await ((_ = this.m_CMInterface) == null
                  ? void 0
                  : _.WaitUntilLoggedOn());
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
                var _;
                const _ = await ((_ = this.m_CacheStorage) == null
                  ? void 0
                  : _.GetObject(this.GetCacheKeyForAppID(_)));
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
                _ == null || _.set(_.name().toLowerCase(), _.value());
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
    },
  ]);
})();
