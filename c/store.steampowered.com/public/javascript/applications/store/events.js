(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [74268],
    {
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
            default: () => _,
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { events: _, clanAccountID: _, onViewAll: _, children: _ } = _,
            { data: _ } = (0, _._)(_);
          return !_.length || !_
            ? null
            : (0, _.jsx)(_._, {
                children: (0, _.jsxs)("div", {
                  className: (0, _._)(_().OtherEventsCtn, "OtherEventsCtn"),
                  children: [
                    (0, _.jsxs)("div", {
                      className: _().EventSectionTitleCtn,
                      children: [
                        (0, _.jsx)("div", {
                          className: (0, _._)(
                            _().EventSectionTitle,
                            "EventSectionTitle",
                          ),
                          children: (0, _._)(
                            "#EventBrowse_MoreEventsTitle",
                            _.group_name,
                          ),
                        }),
                        (0, _.jsx)("div", {
                          className: _().EventSectionSpacer,
                          children: "\xA0",
                        }),
                        _
                          ? (0, _.jsx)(_._, {
                              focusable: !0,
                              className: _().EventSectionMoreBtn,
                              onActivate: _,
                              children: (0, _._)("#EventBrowse_MoreEventsBtn"),
                            })
                          : (0, _.jsx)(_._, {
                              eventModel: _[0],
                              route: _._.k_eViewWebSiteHub,
                              className: _().EventSectionMoreBtn,
                              children: (0, _._)("#EventBrowse_MoreEventsBtn"),
                            }),
                      ],
                    }),
                    (0, _.jsx)(_._, {
                      className: _().OtherEvents,
                      "flow-children": "row",
                      navEntryPreferPosition: _._.PREFERRED_CHILD,
                      children: _.map((_) =>
                        (0, _.jsx)(
                          _._,
                          {
                            event: _,
                          },
                          _.AnnouncementGID,
                        ),
                      ),
                    }),
                    _,
                  ],
                }),
              });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = (0, _._)((_) => {
          const {
              clanAccountID: _,
              gidAnnouncement: _,
              partnerEventStore: _,
              trackingLocation: _,
              bViewAllShowInfiniteScroll: _,
            } = _,
            _ = _._.InitFromClanID(_),
            _ = (0, _._)(),
            _ = (0, _.useRef)(null),
            [_, _] = (0, _.useState)([]),
            [_, _] = (0, _.useState)(!0),
            [_, _] = (0, _.useState)(!1);
          return (
            (0, _.useEffect)(
              () => (
                (async () => {
                  _.current &&
                    _.current("PartnerEventRow Initializng new mount");
                  const _ = _().CancelToken.source();
                  _.current = _.cancel;
                  const _ = _._.InitFromClanID(_),
                    _ = {
                      only_summaries: !0,
                    };
                  let _ = await _.LoadAdjacentPartnerEventsByAnnouncement(
                    _,
                    _,
                    null,
                    4,
                    4,
                    _,
                    _,
                  );
                  if (!_.token.reason) {
                    _ = _ || [];
                    let _ = _.filter((_) => _.GetAnnouncementGID() != _).map(
                      (_) => _.AnnouncementGID,
                    );
                    _._(_);
                    const _ = _.slice(0, 3)
                      .map((_) => _.GetClanEventFromAnnouncementGID(_))
                      .filter((_) => !!_);
                    if ((_(_), _(!1), _)) {
                      let _ = !1;
                      if (_.BHasClanAnnouncementGID(_)) {
                        let _ = _.GetClanEventFromAnnouncementGID(_);
                        _ &&
                          _.BIsPartnerEvent() &&
                          _.BIsVisibleEvent() &&
                          (_.RecordEventRead(_, _), (_ = !0));
                      }
                      _.length > 0 &&
                        (_.filter((_) => _.BIsPartnerEvent()).forEach((_) =>
                          _.RecordEventShown(_, _),
                        ),
                        (_ = !0)),
                        _ && _.Flush();
                    }
                  }
                })().catch((_) => {
                  console.error(
                    "PartnerEventRow: loading the adjacent events failed",
                    _,
                  ),
                    _(!1);
                }),
                () => {
                  _.current && _.current("PartnerEventRow: unmounting");
                }
              ),
              [_, _, _, _, _],
            ),
            _
              ? (0, _.jsx)(_._, {
                  position: "center",
                  size: "medium",
                })
              : (0, _.jsx)(_, {
                  events: _,
                  clanAccountID: _,
                  onViewAll: _ ? () => _(!0) : void 0,
                  children:
                    !!(_ && _.length) &&
                    (0, _.jsx)(_._, {
                      appid: _[0].appid,
                      clanSteamID: _,
                      announcementGID: _[0].AnnouncementGID,
                      closeModal: () => _(!1),
                      partnerEventStore: _,
                    }),
                })
          );
        });
        var _ = __webpack_require__("chunkid"),
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
        class _ {
          constructor(_) {
            (0, _._)(this),
              (this.m_stats = {
                event_gid: "0",
                library_overview_shown: 0,
                library_overview_read: 0,
                app_details_spotlight_shown: 0,
                app_details_spotlight_read: 0,
                app_details_activity_shown: 0,
                app_details_activity_read: 0,
                store_app_page_shown: 0,
                store_app_page_read: 0,
                store_front_page_shown: 0,
                store_front_page_read: 0,
                community_hub_shown: 0,
                community_hub_read: 0,
                news_hub_shown: 0,
                news_hub_read: 0,
                event_scroller_read: 0,
                ..._,
              }),
              (this.m_stats.total_showm =
                this.m_stats.library_overview_shown +
                this.m_stats.app_details_activity_shown +
                this.m_stats.app_details_spotlight_shown +
                this.m_stats.store_app_page_shown +
                this.m_stats.store_front_page_shown +
                this.m_stats.community_hub_shown +
                this.m_stats.news_hub_shown),
              (this.m_stats.total_read =
                this.m_stats.library_overview_read +
                this.m_stats.app_details_activity_read +
                this.m_stats.app_details_spotlight_read +
                this.m_stats.store_app_page_read +
                this.m_stats.store_front_page_read +
                this.m_stats.community_hub_read +
                this.m_stats.news_hub_read +
                this.m_stats.event_scroller_read),
              (this.m_lastUpdateTime = _ ? Math.floor(Date.now() / 1e3) : 0);
          }
          reset(_) {
            (this.m_stats.library_overview_shown = _.library_overview_shown),
              (this.m_stats.library_overview_read = _.library_overview_read),
              (this.m_stats.app_details_spotlight_shown =
                _.app_details_spotlight_shown),
              (this.m_stats.app_details_spotlight_read =
                _.app_details_spotlight_read),
              (this.m_stats.app_details_activity_shown =
                _.app_details_activity_shown),
              (this.m_stats.app_details_activity_read =
                _.app_details_activity_read),
              (this.m_stats.store_app_page_shown = _.store_app_page_shown),
              (this.m_stats.store_app_page_read = _.store_app_page_read),
              (this.m_stats.store_front_page_shown = _.store_front_page_shown),
              (this.m_stats.store_front_page_read = _.store_front_page_read),
              (this.m_stats.community_hub_shown = _.community_hub_shown),
              (this.m_stats.community_hub_read = _.community_hub_read),
              (this.m_stats.news_hub_shown = _.news_hub_shown),
              (this.m_stats.news_hub_read = _.news_hub_read),
              (this.m_stats.event_scroller_read = _.event_scroller_read),
              (this.m_stats.total_showm =
                _.library_overview_shown +
                _.app_details_activity_shown +
                _.app_details_spotlight_shown +
                _.store_app_page_shown +
                _.store_front_page_shown +
                _.community_hub_shown +
                _.news_hub_shown),
              (this.m_stats.total_read =
                _.library_overview_read +
                _.app_details_activity_read +
                _.app_details_spotlight_read +
                _.store_app_page_read +
                _.store_front_page_read +
                _.community_hub_read +
                _.news_hub_read +
                _.event_scroller_read),
              (this.m_lastUpdateTime = Date.now() / 1e3);
          }
          m_stats = void 0;
          m_lastUpdateTime = void 0;
        }
        _([_._], _.prototype, "m_stats", 2),
          _([_._], _.prototype, "m_lastUpdateTime", 2);
        const _ = 3600;
        class _ {
          m_mapPerEventStats = new Map();
          m_mapSummaryStats = new Map();
          m_bLoadedFromConfig = !1;
          constructor() {
            (0, _._)(this);
          }
          LazyInit() {
            if (!this.m_bLoadedFromConfig) {
              let _ = (0, _._)("trackingdatasummary", "application_config");
              this.ValidateStoreDefault(_) &&
                this.m_mapSummaryStats.set(_.clan_account_id, new _(_));
              let _ = (0, _._)("trackingdataevents", "application_config");
              this.ValidateStoreDefaultList(_) &&
                _.forEach((_) => {
                  let _ = _._.InitFromClanID(_.clan_account_id),
                    _ = this.GetKey(_, _.event_gid);
                  this.m_mapPerEventStats.set(_, new _(_));
                }),
                (this.m_bLoadedFromConfig = !0);
            }
          }
          ValidateStoreDefault(_) {
            const _ = _;
            return _ && typeof _ == "object" && _.clan_account_id
              ? typeof _.clan_account_id == "number" && _.clan_account_id > 0
              : !1;
          }
          ValidateStoreDefaultList(_) {
            const _ = _;
            return _ &&
              Array.isArray(_) &&
              _.length > 0 &&
              typeof _[0] == "object"
              ? typeof _[0].clan_account_id == "number" &&
                  _[0].clan_account_id > 0
              : !1;
          }
          GetStatsFor(_, _) {
            this.LazyInit();
            let _ = this.GetKey(_, _);
            return (
              this.m_mapPerEventStats.has(_) ||
                this.m_mapPerEventStats.set(_, new _(null)),
              this.m_mapPerEventStats.get(_)
            );
          }
          GetTotalStats(_) {
            return (
              this.LazyInit(),
              this.m_mapSummaryStats.has(_.GetAccountID()) ||
                this.m_mapSummaryStats.set(_.GetAccountID(), new _(null)),
              this.m_mapSummaryStats.get(_.GetAccountID())
            );
          }
          GetKey(_, _) {
            return _.GetAccountID() + "_" + _;
          }
          async LoadStatsForEvents(_, _, _) {
            this.LazyInit();
            let _ = Date.now() / 1e3,
              _ = _.filter((_) => {
                let _ = this.GetKey(_, _),
                  _ = this.m_mapPerEventStats.get(_);
                return !_ || _.m_stats == null || _.m_lastUpdateTime < _ - _;
              });
            if (!_ || _.length == 0) return !0;
            let _ = (0, _._)() + "actions/ajaxgetpartnereventsreport",
              _ = {
                sessionid: (0, _._)(),
                clan_account_id: _.GetAccountID(),
                gidlist: _.join(","),
              };
            try {
              let _ = await _().get(_, {
                params: _,
                withCredentials: !0,
                cancelToken: _?.token,
              });
              return (
                (0, _._)(() => {
                  this.m_mapSummaryStats.set(
                    _.GetAccountID(),
                    new _(_.data.summary),
                  ),
                    _.data.events_detail.forEach((_) => {
                      let _ = this.GetKey(_, _.event_gid);
                      this.m_mapPerEventStats.has(_)
                        ? this.m_mapPerEventStats.get(_).reset(_)
                        : this.m_mapPerEventStats.set(_, new _(_));
                    });
                }),
                !0
              );
            } catch (_) {
              let _ = (0, _._)(_);
              console.error("CPartnerEventReportingStore " + _.strErrorMsg, _);
            }
            return !1;
          }
          BHasEventStats(_, _) {
            let _ = _._.InitFromClanID(_),
              _ = this.GetKey(_, _),
              _ = this.m_mapPerEventStats.get(_);
            return !!(_ && _.m_stats);
          }
        }
        _([_._], _.prototype, "m_mapPerEventStats", 2),
          _([_._], _.prototype, "m_mapSummaryStats", 2),
          _([_._], _.prototype, "LazyInit", 1);
        const _ = new _();
        function _(_, _) {
          const [_, _] = useState(void 0);
          return (
            useEffect(() => {
              _ &&
                _ &&
                _ == null &&
                _.LoadStatsForEvents(_, [_]).then((_) => {
                  _(_ ? _.GetStatsFor(_, _).m_stats : null);
                });
            }, [_, _, _]),
            _
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { appid: _, creatorHome: _ } = _;
          return (0, _.jsx)("div", {
            className: _().AppSummaryCtn,
            children: (0, _.jsxs)("div", {
              className: _().EventBodyPosition,
              children: [
                _
                  ? (0, _.jsx)(_, {
                      appid: _,
                    })
                  : null,
                _,
              ],
            }),
          });
        }
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            });
          if (!_) return null;
          const _ = (0, _._)(_.type ?? _._._);
          return (0, _.jsxs)("div", {
            className: _().AppSummaryWidgetTitleCtn,
            children: [
              (0, _.jsx)("span", {
                className: _().Title,
                children: (0, _._)("#CreatorHome_ThisGame"),
              }),
              (0, _.jsx)("div", {
                className: (0, _._)(
                  _().AppSummaryWidgetCtn,
                  "AppSummaryWidgetCtn",
                ),
                children: (0, _.jsx)(_._, {
                  _: _,
                  type: _,
                  bPreferAssetWithoutOverride: !1,
                }),
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              summary: _,
              bEventIsInModerationQueue: _,
              bIsAllowedInLibrary: _,
              bCompact: _,
              bExpanded: _,
              header: _,
            } = _,
            {
              total_showm: _ = 0,
              total_read: _ = 0,
              library_overview_shown: _ = 0,
              library_overview_read: _ = 0,
              app_details_spotlight_shown: _ = 0,
              app_details_spotlight_read: _ = 0,
              app_details_activity_shown: _ = 0,
              app_details_activity_read: _ = 0,
              store_app_page_shown: _ = 0,
              store_app_page_read: _ = 0,
              community_hub_shown: _ = 0,
              community_hub_read: _ = 0,
              news_hub_shown: _ = 0,
              news_hub_read: _ = 0,
            } = _;
          return _ + _ == 0
            ? null
            : (0, _.jsxs)("div", {
                className: (0, _._)(_ ? _.EventDetailView : _.DashboardView),
                children: [
                  (0, _.jsxs)("div", {
                    className: (0, _._)(_.HeaderCtn),
                    children: [
                      _,
                      (0, _.jsxs)("div", {
                        className: _.TotalsCtn,
                        children: [
                          (0, _.jsxs)("div", {
                            className: _.HeaderStat,
                            children: [
                              (0, _.jsx)("span", {
                                className: _.StatDescription,
                                children: (0, _._)(
                                  "#EventDashBoard_SummaryStats_TotalImpressions",
                                ),
                              }),
                              (0, _.jsx)("span", {
                                className: _.StatFigure,
                                children: (0, _._)(_),
                              }),
                            ],
                          }),
                          (0, _.jsxs)("div", {
                            className: _.HeaderStat,
                            children: [
                              (0, _.jsx)("span", {
                                className: _.StatDescription,
                                children: (0, _._)(
                                  "#EventDashBoard_SummaryStats_TotalViews",
                                ),
                              }),
                              (0, _.jsx)("span", {
                                className: _.StatFigure,
                                children: (0, _._)(_),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  !!(_ && _) &&
                    (0, _.jsxs)("div", {
                      className: _.ModerationWarningCtn,
                      children: [
                        (0, _.jsx)("div", {
                          className: _.ModerationWarning,
                          children: (0, _._)(
                            "#EventDashBoard_ModerationQueueWarning",
                          ),
                        }),
                        (0, _.jsx)("a", {
                          href:
                            _._.PARTNER_BASE_URL +
                            "doc/marketing/event_tools/moderation",
                          children: (0, _._)(
                            "#EventDashBoard_Location_ModerationTitle",
                          ),
                        }),
                      ],
                    }),
                  _ &&
                    (0, _.jsxs)("div", {
                      className: (0, _._)(_.StatsCtn),
                      children: [
                        _ &&
                          (0, _.jsxs)("div", {
                            className: (0, _._)(
                              _.StatsLeftSection,
                              _ && _.DisabledStats,
                            ),
                            children: [
                              (0, _.jsxs)("div", {
                                className: _.StatsTitle_ctn,
                                children: [
                                  (0, _.jsx)("span", {
                                    children: (0, _._)(
                                      "#EventDashBoard_Location_LibraryHome",
                                    ),
                                  }),
                                  (0, _.jsxs)("span", {
                                    className: _.ModerationNote,
                                    children: [
                                      "( ",
                                      (0, _._)(
                                        "#EventDashBoard_Location_WaitingModeraion",
                                      ),
                                      " )",
                                    ],
                                  }),
                                ],
                              }),
                              (0, _.jsxs)("div", {
                                className: _.StatsTitle,
                                children: [
                                  (0, _.jsx)("span", {
                                    children: (0, _._)(
                                      "#EventDashBoard_Summary_LibraryHome_Shown",
                                    ),
                                  }),
                                  (0, _.jsx)("span", {
                                    children: (0, _._)(_),
                                  }),
                                ],
                              }),
                              (0, _.jsxs)("div", {
                                className: _.StatsTitle,
                                children: [
                                  (0, _.jsx)("span", {
                                    children: (0, _._)(
                                      "#EventDashBoard_Summary_LibraryHome_Read",
                                    ),
                                  }),
                                  (0, _.jsx)("span", {
                                    children: (0, _._)(_),
                                  }),
                                ],
                              }),
                              (0, _.jsxs)("div", {
                                className: _.StatsTitle_ctn,
                                children: [
                                  (0, _.jsx)("span", {
                                    children: (0, _._)(
                                      "#EventDashBoard_Location_LibraryDetail",
                                    ),
                                  }),
                                  (0, _.jsxs)("span", {
                                    className: _.ModerationNote,
                                    children: [
                                      "( ",
                                      (0, _._)(
                                        "#EventDashBoard_Location_WaitingModeraion",
                                      ),
                                      " )",
                                    ],
                                  }),
                                ],
                              }),
                              _ > 0 &&
                                (0, _.jsxs)(_.Fragment, {
                                  children: [
                                    (0, _.jsxs)("div", {
                                      className: _.StatsTitle,
                                      children: [
                                        (0, _.jsx)("span", {
                                          children: (0, _._)(
                                            "#EventDashBoard_Summary_AppDetailSpotlight_Shown",
                                          ),
                                        }),
                                        (0, _.jsx)("span", {
                                          children: (0, _._)(_),
                                        }),
                                      ],
                                    }),
                                    (0, _.jsxs)("div", {
                                      className: _.StatsTitle,
                                      children: [
                                        (0, _.jsx)("span", {
                                          children: (0, _._)(
                                            "#EventDashBoard_Summary_AppDetailSpotlight_Read",
                                          ),
                                        }),
                                        (0, _.jsx)("span", {
                                          children: (0, _._)(_),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              (0, _.jsxs)("div", {
                                className: _.StatsTitle,
                                children: [
                                  (0, _.jsx)("span", {
                                    children: (0, _._)(
                                      "#EventDashBoard_Summary_AppDetailActivity_Shown",
                                    ),
                                  }),
                                  (0, _.jsx)("span", {
                                    children: (0, _._)(_),
                                  }),
                                ],
                              }),
                              (0, _.jsxs)("div", {
                                className: _.StatsTitle,
                                children: [
                                  (0, _.jsx)("span", {
                                    children: (0, _._)(
                                      "#EventDashBoard_Summary_AppDetailActivity_Read",
                                    ),
                                  }),
                                  (0, _.jsx)("span", {
                                    children: (0, _._)(_),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        (0, _.jsxs)("div", {
                          className: _.StatsRightSection,
                          children: [
                            (0, _.jsx)("div", {
                              className: _.StatsTitle_ctn,
                              children: (0, _.jsx)("span", {
                                children: (0, _._)(
                                  "#EventDashBoard_Location_StoreDetail",
                                ),
                              }),
                            }),
                            (0, _.jsxs)("div", {
                              className: _.StatsTitle,
                              children: [
                                (0, _.jsx)("span", {
                                  children: (0, _._)(
                                    "#EventDashBoard_Summary_StoreAppPage_Shown",
                                  ),
                                }),
                                (0, _.jsx)("span", {
                                  children: (0, _._)(_),
                                }),
                              ],
                            }),
                            (0, _.jsxs)("div", {
                              className: _.StatsTitle,
                              children: [
                                (0, _.jsx)("span", {
                                  children: (0, _._)(
                                    "#EventDashBoard_Summary_StoreAppPage_Read",
                                  ),
                                }),
                                (0, _.jsx)("span", {
                                  children: (0, _._)(_),
                                }),
                              ],
                            }),
                            (0, _.jsx)("div", {
                              className: _.StatsTitle_ctn,
                              children: (0, _.jsx)("span", {
                                children: (0, _._)(
                                  "#EventDashBoard_Location_CommunityDetail",
                                ),
                              }),
                            }),
                            (0, _.jsxs)("div", {
                              className: _.StatsTitle,
                              children: [
                                (0, _.jsx)("span", {
                                  children: (0, _._)(
                                    "#EventDashBoard_Summary_Community_Shown",
                                  ),
                                }),
                                (0, _.jsx)("span", {
                                  children: (0, _._)(_),
                                }),
                              ],
                            }),
                            (0, _.jsxs)("div", {
                              className: _.StatsTitle,
                              children: [
                                (0, _.jsx)("span", {
                                  children: (0, _._)(
                                    "#EventDashBoard_Summary_Community_Read",
                                  ),
                                }),
                                (0, _.jsx)("span", {
                                  children: (0, _._)(_),
                                }),
                              ],
                            }),
                            (0, _.jsx)("div", {
                              className: _.StatsTitle_ctn,
                              children: (0, _.jsx)("span", {
                                children: (0, _._)(
                                  "#EventDashBoard_Location_NewsHubDetail",
                                ),
                              }),
                            }),
                            (0, _.jsxs)("div", {
                              className: _.StatsTitle,
                              children: [
                                (0, _.jsx)("span", {
                                  children: (0, _._)(
                                    "#EventDashBoard_Summary_NewsHub_Shown",
                                  ),
                                }),
                                (0, _.jsx)("span", {
                                  children: (0, _._)(_),
                                }),
                              ],
                            }),
                            (0, _.jsxs)("div", {
                              className: _.StatsTitle,
                              children: [
                                (0, _.jsx)("span", {
                                  children: (0, _._)(
                                    "#EventDashBoard_Summary_NewsHub_Read",
                                  ),
                                }),
                                (0, _.jsx)("span", {
                                  children: (0, _._)(_),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              });
        }
        const _ = (0, _._)(function (_) {
          const { event: _, bIsOGG: _, summary: _ } = _,
            _ = (0, _._)();
          return (0, _.jsxs)(_._, {
            children: [
              (0, _.jsxs)("div", {
                className: _().EditorStatsCtn,
                children: [
                  (0, _.jsxs)("div", {
                    className: _().EditorStatsRow,
                    children: [
                      (0, _.jsx)("span", {
                        children: (0, _._)("#EventEditor_Comments"),
                      }),
                      (0, _.jsx)("span", {
                        children: (0, _._)(_.nCommentCount),
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: _().EditorStatsRow,
                    children: [
                      (0, _.jsx)("span", {
                        children: (0, _._)("#EventEditor_UpVotes"),
                      }),
                      (0, _.jsx)("span", {
                        children: _.nVotesUp ? (0, _._)(_.nVotesUp) : 0,
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: _().EditorStatsRow,
                    children: [
                      (0, _.jsx)("span", {
                        children: (0, _._)("#EventEditor_DownVotes"),
                      }),
                      (0, _.jsx)("span", {
                        children: _.nVotesDown ? (0, _._)(_.nVotesDown) : 0,
                      }),
                    ],
                  }),
                ],
              }),
              _ &&
                (0, _.jsxs)("div", {
                  className: _().EditorStatsCtn,
                  children: [
                    (0, _._)("#EventDashBoard_SummaryStats_Admin_Title"),
                    (0, _.jsx)(_, {
                      summary: _,
                      bIsAllowedInLibrary: _,
                      bEventIsInModerationQueue: (0, _._)(_, _),
                      bCompact: !0,
                      bExpanded: !0,
                    }),
                  ],
                }),
            ],
          });
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = (0, _._)((_) => {
          const {
              event: _,
              lang: _,
              nOverrideStartTime: _,
              nOverrideEndTime: _,
              reminder: _,
              editorInfo: _,
              meetSteamInfo: _,
            } = _,
            _ = (0, _._)(),
            _ = _.appid,
            _ = _.clanSteamID,
            _ = _ || _.GetStartTimeAndDateUnixSeconds(),
            { data: _, isPending: _ } = (0, _._)(
              _
                ? {
                    appid: _,
                  }
                : void 0,
            ),
            { data: _, isPending: _ } = (0, _._)(_.GetAccountID());
          return _ || (_ && _)
            ? null
            : (0, _.jsx)("div", {
                className: _().EventDetailTitleDesc,
                children: (0, _.jsxs)("div", {
                  className: _().EventDetailsSticky,
                  children: [
                    (_?.is_ogg ?? !!_)
                      ? (0, _.jsx)(_, {
                          appid: _?.appid || _,
                        })
                      : (0, _.jsx)(_, {
                          clanSteamID: _,
                        }),
                    (0, _.jsx)(_._, {
                      event: _,
                      className: _().EventDetailTimeInfo,
                      nOverrideEndTime: _,
                      nOverrideStartTime: _,
                    }),
                    _ &&
                      _.type !== _.uYK &&
                      _ < _ &&
                      (0, _.jsx)("div", {
                        className: _().EventDetailTimeInfo,
                        children: _,
                      }),
                    (0, _.jsxs)("div", {
                      className: _().EventDetailUserType,
                      children: [
                        (0, _.jsx)("div", {
                          className: _().RightSideTitles,
                          children: (0, _._)(
                            "#EventDisplay_RightColumnTitle_EventType",
                          ),
                        }),
                        (0, _.jsxs)("div", {
                          className: _().EventDetailsType,
                          children: [_.GetCategoryAsString(), " "],
                        }),
                      ],
                    }),
                    _,
                    !!_.jsondata.meet_steam_groups && _,
                  ],
                }),
              });
        });
        function _(_) {
          const { appid: _ } = _;
          (0, _._)(_ && _ != 0, "Expected Appid In Game Info Section");
          const { data: _, isPending: _ } = (0, _._)(
            _
              ? {
                  appid: _,
                }
              : void 0,
          );
          return (0, _.jsxs)("div", {
            className: _().EventDetailGameCallToAction,
            children: [
              (0, _.jsx)("div", {
                className: _().RightSideTitles,
                children: _._.some((_) => _ === _)
                  ? (0, _._)("#EventDisplay_RightColumnTitle_Blog")
                  : (0, _._)("#EventDisplay_RightColumnTitle_Game"),
              }),
              (0, _.jsx)(_._, {
                imageType: "header",
                capsule: {
                  _: _,
                  type: "game",
                },
                bHidePriceIfOwned: !0,
                bHideStatusBanners: !0,
                bPreferAssetWithoutOverride: !1,
              }),
              (0, _.jsxs)("div", {
                className: (0, _._)(_().GameActions),
                children: [
                  _ &&
                    (0, _.jsx)(_._, {
                      appid: _,
                      bIsFree: !!_.is_free,
                      bIsComingSoon: !!_.is_coming_soon,
                      className: _().ActionButton,
                    }),
                  _ &&
                    (0, _.jsx)(_._, {
                      size: "small",
                      position: "center",
                    }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { clanSteamID: _ } = _,
            _ = _.GetAccountID(),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_);
          if (!_) return null;
          const _ = _
            ? (0, _._)(_, "developer")
            : _._.COMMUNITY_BASE_URL +
              (_.vanity_url
                ? "groups/" + _.vanity_url
                : "gid/" + _.ConvertTo64BitString());
          return (0, _.jsxs)("div", {
            className: _().EventDetailGameCallToAction,
            children: [
              (0, _.jsx)("div", {
                className: _().RightSideTitles,
                children: _.group_name,
              }),
              (0, _.jsx)(_._, {
                href: (0, _._)(_),
                children: (0, _.jsx)("div", {
                  className: _().EventDetailsAvatar,
                  style: {
                    backgroundImage: `url(${_.avatar_full_url})`,
                  },
                }),
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { event: _, lang: _ } = _,
            _ = (0, _._)(() => _.jsondata.meet_steam_groups),
            { data: _ } = (0, _._)(_.clanSteamID.GetAccountID()),
            [_, _, _] = (0, _.useMemo)(() => {
              const _ = new Map(),
                _ = new Map();
              let _ = !1;
              return (
                _.forEach((_) => {
                  _.group_visibility_tokens?.length > 0
                    ? (_.group_visibility_tokens.forEach((_) => {
                        _.has(_)
                          ? _.get(_).push(_.group_id)
                          : _.set(_, [_.group_id]);
                      }),
                      _.set(_.group_id, _.localized_session_title[_.Bhc]))
                    : (_ = !0);
                }),
                [_, _, _]
              );
            }, [_]);
          return _.size == 0 || !_?.can_edit
            ? null
            : (0, _.jsxs)("div", {
                className: (0, _._)(
                  _().DefaultSectionCtn,
                  _().ValveOnlyBackground,
                ),
                children: [
                  (0, _.jsx)(_._, {
                    children: "(VO) Meet Steam URLs",
                  }),
                  Array.from(_.keys()).map((_) => {
                    const _ = _.get(_);
                    return (0, _.jsx)(
                      "div",
                      {
                        children: (0, _.jsxs)("a", {
                          href: `${_._.STORE_BASE_URL}meetsteam/${_.GID}/${_}`,
                          target: "_blank",
                          children: [
                            "Shows Sessions: ",
                            _.map((_) =>
                              (0, _.jsxs)(
                                "span",
                                {
                                  children: [_.get(_), ","],
                                },
                                "name" + _ + "_" + _,
                              ),
                            ),
                          ],
                        }),
                      },
                      `tokenurl_${_}`,
                    );
                  }),
                  !!_ &&
                    (0, _.jsx)("div", {
                      children: (0, _.jsx)("a", {
                        href: `${_._.STORE_BASE_URL}meetsteam/${_.GID}`,
                        target: "_blank",
                        children: "Show all public sessions",
                      }),
                    }),
                ],
              });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = {};
        _.english = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 23130, 19));
        async function _(_) {
          if (_[_]) return _[_]();
        }
        const _ = (0, _._)(_);
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = (0, _._)(
              _
                ? {
                    appid: _,
                  }
                : void 0,
            );
          return !_ || !_._.logged_in || _?.type != _._._
            ? null
            : (0, _.jsx)(_, {
                appid: _,
              });
        }
        function _(_) {
          return (0, _._)(_.appid) !== !1
            ? null
            : (0, _.jsxs)("div", {
                className: _().EventNotPublicBar,
                children: [
                  (0, _.jsx)("span", {
                    className: _().EventNotPublicBarTitle,
                    children: _.Localize("#PartnerEvents_PlaytestOnly_Header"),
                  }),
                  (0, _.jsx)("span", {
                    className: _().EventNotPublicBarDetail,
                    children: _.Localize("#PartnerEvents_PlaytestOnly_Detail"),
                  }),
                ],
              });
        }
        const _ = (0, _._)((_) => {
            const {
                event: _,
                lang: _,
                banner: _,
                titleBar: _,
                body: _,
                postbody: _,
                footer: _,
              } = _,
              _ = (0, _._)(_, "background", _),
              { data: _ } = (0, _._)(
                _.appid
                  ? {
                      appid: _.appid,
                    }
                  : void 0,
              ),
              { data: _ } = (0, _._)(_.clanSteamID.GetAccountID()),
              _ = _.BIsImageSafeForAllAges("background", _, {
                bAppHasAgeSafeScreenshots:
                  (_?.all_ages_screenshots?.length ?? 0) > 0,
                clanInfo: _ ?? void 0,
              }),
              _ = "lang_" + (0, _.wwZ)(_),
              _ = !!_ && _.BImageNeedScreenshotFallback("background", _);
            return (0, _.jsxs)(_._, {
              scrollIntoViewType: _._.NoTransformSparseContent,
              className: (0, _._)(
                _().EventDetailsPageContainer,
                _,
                _().PartnerEventFont,
                _
                  ? _().DetailArtworkAgeAppropriate
                  : _().DetailArtworkAgeNotAppropriate,
                !_ && _().NoTitleArtwork,
                _ && _().ScreenshotInsteadOfCover,
              ),
              children: [
                _,
                _,
                (0, _.jsx)(_, {
                  appid: _.appid,
                }),
                (0, _.jsx)(_, {
                  strImageURL: _,
                }),
                (0, _.jsx)(_, {
                  strImageURL: _,
                  body: _,
                  postbody: _,
                }),
                !!_ &&
                  (0, _.jsx)(_._, {
                    children: _,
                  }),
              ],
            });
          }),
          _ = (_) => {
            const { strImageURL: _ } = _;
            return (0, _.jsxs)("div", {
              className: _().EventCoverImageCtn,
              children: [
                (0, _.jsx)("div", {
                  className: _().EventCoverImageBlr,
                  children:
                    _ &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)("div", {
                          className: _().EventCoverImageFuzz,
                          style: {
                            backgroundColor: "rgb(37, 41, 46)",
                            backgroundImage: `url(${_})`,
                          },
                        }),
                        (0, _.jsx)("div", {
                          className: _().EventCoverImage,
                          style: {
                            backgroundColor: "rgb(37, 41, 46)",
                            backgroundImage: `url(${_})`,
                          },
                        }),
                      ],
                    }),
                }),
                _ &&
                  (0, _.jsx)("div", {
                    className: _().CoverImageGradient,
                  }),
              ],
            });
          },
          _ = (_) => {
            const { body: _, postbody: _, strImageURL: _ } = _;
            return (0, _.jsxs)("div", {
              className: _().EventBodyCtn,
              children: [
                (0, _.jsx)("div", {
                  className: _().EventBackgroundBlurCtn,
                }),
                (0, _.jsxs)("div", {
                  className: _().EventBodyPosition,
                  children: [
                    (0, _.jsxs)("div", {
                      className: _().EventBody,
                      children: [
                        !!_ &&
                          (0, _.jsx)("div", {
                            className: _().EventBackgroundBlur,
                            style: {
                              backgroundImage: `url(${_})`,
                            },
                          }),
                        (0, _.jsx)(_._, {
                          children: _,
                        }),
                      ],
                    }),
                    !!_ &&
                      (0, _.jsx)(_._, {
                        children: _,
                      }),
                  ],
                }),
              ],
            });
          },
          _ = _.lazy(() =>
            Promise.all([
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
            ]).then(__webpack_require__.bind(__webpack_require__, "chunkid")),
          ),
          _ = (0, _._)((_) => {
            const {
                event: _,
                lang: _,
                emoticonStore: _,
                nOverrideStartTime: _,
                nOverrideEndTime: _,
                adminPanel: _,
                otherEventRow: _,
                titleBar: _,
              } = _,
              _ = _.appid,
              _ = _.clanSteamID.GetAccountID(),
              _ = (0, _._)(),
              _ = (0, _._)(),
              { data: _, isPending: _ } = (0, _._)(
                _
                  ? {
                      appid: _,
                    }
                  : void 0,
              ),
              { data: _, isPending: _ } = (0, _._)(_);
            if (
              (_.useEffect(() => {
                window.scrollTo(0, 0);
              }, [_, _]),
              !_ && _.GetEventType() == _.ajI)
            )
              return (0, _.jsx)(_._, {
                eventModel: _,
                route: _._.k_eStoreSalePage,
                bPopup: !1,
              });
            const _ = (0, _._)(_, _._.k_eStoreNewsHub, "allowRelative"),
              _ = (0, _._)(_, _._.k_eStoreUsersNewsHub, "allowRelative");
            if (!_.bLoaded || _ || (_ && _))
              return (0, _.jsx)("div", {
                className: _().FlexCenter,
                style: {
                  height: "400px",
                },
                children: (0, _.jsx)(_._, {
                  size: "medium",
                  string: (0, _._)("#Loading"),
                }),
              });
            const _ = _?.name || _?.group_name;
            let _ = _.GetDescriptionWithFallback(_);
            return (0, _.jsx)(_, {
              event: _,
              lang: _,
              titleBar: _,
              banner: (0, _.jsx)(_._, {
                appId: _.appid,
                clanId: _,
              }),
              body: (0, _.jsxs)(_._, {
                children: [
                  (0, _.jsxs)("div", {
                    className: _().EventDetailTitleContainer,
                    children: [
                      (0, _.jsx)(_._, {
                        crumbs: [
                          {
                            name: (0, _._)("#BreadCrumbs_AllEvents"),
                            url: _,
                          },
                          ...(_
                            ? [
                                {
                                  name: (0, _._)("#BreadCrumbs_GameEvents", _),
                                  url: _,
                                },
                              ]
                            : []),
                        ],
                      }),
                      (0, _.jsx)("div", {
                        className: _().EventDetailTitle,
                        children: _.GetNameWithFallback(_),
                      }),
                      _.BHasSubTitle(_) &&
                        (0, _.jsx)("div", {
                          className: _().EventDetailsSubTitle,
                          children: _.GetSubTitle(_),
                        }),
                    ],
                  }),
                  !!_.BEventCanShowBroadcastWidget(_, _) &&
                    (0, _.jsx)("div", {
                      className: _().EventBroadcastCtn,
                      children: (0, _.jsx)(_.Suspense, {
                        fallback: null,
                        children: (0, _.jsx)(_, {
                          event: _,
                          bIsPreview: _,
                          accountIDs: _
                            ? _.jsondata.broadcast_whitelist
                            : void 0,
                        }),
                      }),
                    }),
                  (0, _.jsxs)("div", {
                    className: (0, _._)(_().EventColumns, "EventDetail"),
                    children: [
                      (0, _.jsxs)("div", {
                        className: _().EventDetailsDescription,
                        children: [
                          (0, _.jsxs)(_._, {
                            children: [
                              _.BHasTag("steam_award_nomination_request") &&
                                (0, _.jsx)(_.EventDisplaySteamAwardNomination, {
                                  event: _,
                                  lang: _,
                                  previewMode: _,
                                }),
                              _.BHasTag("steam_award_vote_request") &&
                                (0, _.jsx)(_.WinterSaleSteamAwardVoteWrapper, {
                                  appID: _.appid,
                                  bIsEventActionEnabled:
                                    _.BIsEventActionEnabled(_),
                                  voteCategories:
                                    _.GetSteamAwardNomineeCategories(),
                                }),
                            ],
                          }),
                          (0, _.jsx)(_._, {
                            children: (0, _.jsxs)("div", {
                              className: (0, _._)(
                                "EventDetailsBody",
                                _().EventDetailsBody,
                              ),
                              children: [
                                (0, _.jsx)(_._, {
                                  text: _ || "",
                                  showErrorInfo: _,
                                  event: _,
                                  languageOverride: _,
                                }),
                                !!(
                                  _.jsondata.bSaleEnabled &&
                                  _.jsondata.sale_vanity_id
                                ) &&
                                  (0, _.jsxs)("div", {
                                    className: (0, _._)(_().ReadMoreCnt),
                                    children: [
                                      (0, _.jsx)(_._, {
                                        gidEvent: _.GID,
                                      }),
                                      (0, _.jsx)(_._, {
                                        className: (0, _._)(
                                          _().Button,
                                          "LinkButton",
                                        ),
                                        href: (0, _._)((0, _._)(_)),
                                        children: (0, _._)(
                                          "#Event_Button_VisitSalePage",
                                        ),
                                      }),
                                    ],
                                  }),
                                !!_.jsondata.associated_appid &&
                                  (0, _.jsx)(_._, {
                                    _: _.jsondata.associated_appid,
                                    inputType: "game",
                                    bApplyUserContentPref: !1,
                                  }),
                              ],
                            }),
                          }),
                          (0, _.jsx)(_._, {
                            children: (0, _.jsx)(_._, {
                              event: _,
                            }),
                          }),
                          !!_.jsondata.read_more_link &&
                            (0, _.jsx)("div", {
                              className: (0, _._)(_().ReadMoreCnt),
                              children: (0, _.jsx)(_._, {
                                className: (0, _._)(_().Button),
                                href: _.jsondata.read_more_link,
                                children: (0, _._)(
                                  "#EventEmail_Button_ClickForMoreDetails",
                                ),
                              }),
                            }),
                          (0, _.jsx)("span", {
                            className: _().Clear,
                          }),
                          (0, _.jsxs)(_._, {
                            children: [
                              !!_.appid &&
                                (0, _.jsx)(_._, {
                                  appid: _.appid,
                                }),
                              !!_.jsondata.sale_social_media_items &&
                                (0, _.jsx)(_._, {
                                  gidClanEvent: _.GID,
                                  rgSocial: _.jsondata.sale_social_media_items,
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, _.jsx)(_._, {
                        children: (0, _.jsx)(_, {
                          event: _,
                          lang: _,
                          nOverrideStartTime: _,
                          nOverrideEndTime: _,
                          reminder: (0, _.jsx)(_._, {
                            eventModel: _,
                            lang: _,
                          }),
                          editorInfo: (0, _.jsx)(_, {
                            event: _,
                            bIsOGG: _?.is_ogg ?? !!_,
                          }),
                          meetSteamInfo: (0, _.jsx)(_, {
                            event: _,
                            lang: _,
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, _.jsx)(_._, {
                    eventModel: _,
                    emoticonStore: _,
                  }),
                ],
              }),
              postbody: (0, _.jsxs)(_._, {
                children: [_, _],
              }),
              footer: (0, _.jsx)(_, {
                appid: _.appid,
                creatorHome: (0, _.jsx)(_._, {
                  appid: _.appid,
                  bSmallFormat: !0,
                }),
              }),
            });
          });
        function _(_) {
          const { event: _, bIsOGG: _ } = _,
            _ = (0, _._)(),
            { data: _ } = (0, _._)(_.clanSteamID.GetAccountID()),
            _ = !!_?.can_edit,
            _ = _.clanSteamID,
            _ = _.GID,
            _ = _ && _.BIsPartnerEvent() && _.BIsVisibleEvent(_);
          _.useEffect(() => {
            if (!_) return;
            const _ = _().CancelToken.source();
            return (
              _.LoadStatsForEvents(_, [_], _),
              () => _.cancel("EventDisplayEditorInfo cancelled")
            );
          }, [_, _, _]);
          const _ = (0, _._)(() => _ && _.GetStatsFor(_, _));
          return _
            ? (0, _.jsx)(_, {
                event: _,
                bIsOGG: _,
                summary: _ ? _.m_stats : void 0,
              })
            : null;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
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
          m_objApprovalPriviledge = null;
          m_LoadingPriviledgePromise = null;
          BHasSteamChinaAppApprovalPriviledge() {
            return this.m_objApprovalPriviledge?.bHasAccess;
          }
          async HintLoadAppApprovalPriviledge() {
            return this.m_objApprovalPriviledge
              ? this.m_objApprovalPriviledge
              : (this.m_LoadingPriviledgePromise ||
                  (this.m_LoadingPriviledgePromise =
                    this.InternalLoadAppApprovalPriviledge()),
                this.m_LoadingPriviledgePromise);
          }
          async InternalLoadAppApprovalPriviledge() {
            const _ =
              _._.STORE_BASE_URL + "events_admin/ajaxgetscapprovalpriviledge";
            try {
              const _ = await _().get(_, {
                withCredentials: !0,
              });
              if (_?.data?.success == _._)
                return (
                  (this.m_objApprovalPriviledge = {
                    bHasAccess: _.data.bHasAccess,
                  }),
                  this.m_objApprovalPriviledge
                );
            } catch (_) {
              const _ = (0, _._)(_);
              console.error(
                "CCuratorListStore.InternalLoadAppApprovalPriviledge: error on load: " +
                  _.strErrorMsg,
                _,
              );
            }
            return {
              bHasAccess: !1,
            };
          }
          static s_Singleton;
          static Get() {
            return _.s_Singleton || (_.s_Singleton = new _()), _.s_Singleton;
          }
          constructor() {
            (0, _._)(this);
            let _ = (0, _._)("sc_app_privildge", "application_config");
            this.ValidateStoreDefault(_)
              ? ((this.m_objApprovalPriviledge = _),
                (this.m_LoadingPriviledgePromise = null))
              : (!_._.logged_in || _._.EREALM !== _._.k_ESteamRealmChina) &&
                (this.m_objApprovalPriviledge = {
                  bHasAccess: !1,
                });
          }
          ValidateStoreDefault(_) {
            const _ = _;
            return (
              _ && typeof _ == "object" && typeof _.bHasAccess == "boolean"
            );
          }
        };
        _([_._], _.prototype, "m_objApprovalPriviledge", 2);
        let _ = _;
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = (0, _._)((_) => {
            const [_, _] = _.useState(null),
              { eventModel: _ } = _;
            let _ = _.clanSteamID.GetAccountID();
            const { data: _ } = (0, _._)(_);
            return (
              _.useEffect(() => {
                const _ = _().CancelToken.source();
                return (
                  (async () => {
                    const _ = await _.Get().HintLoadAppApprovalPriviledge();
                    _.token.reason ||
                      _(_._.is_support || !!_?.can_edit || _.bHasAccess);
                  })(),
                  () => _.cancel("SteamChinaAdminPanel is unmounting")
                );
              }, [_, _]),
              _._.is_support || _?.can_edit
                ? (0, _.jsx)(_._, {
                    eventModel: _,
                    partnerEventStore: _.partnerEventStore,
                    addtionalAdminButtons: _
                      ? [
                          (0, _.jsx)(
                            _,
                            {
                              eventModel: _,
                            },
                            "removesteamchina",
                          ),
                        ]
                      : void 0,
                  })
                : _.Get().BHasSteamChinaAppApprovalPriviledge()
                  ? (0, _.jsxs)("div", {
                      className: _.DisplayAdminPanel,
                      children: [
                        (0, _.jsx)("span", {
                          className: _.DisplayAdminPanel_Title,
                          children: (0, _._)("#EventDisplay_Admin_Title"),
                        }),
                        (0, _.jsx)(
                          _,
                          {
                            eventModel: _,
                          },
                          "removesteamchina",
                        ),
                      ],
                    })
                  : null
            );
          }),
          _ = (_) => {
            const { eventModel: _ } = _,
              _ = async () => {
                let _ = new URLSearchParams();
                _.append("sessionid", (0, _._)()),
                  _.append("clan_accountid", "" + _.clanSteamID.GetAccountID()),
                  _.append("gid_clan_event", "" + _.GID);
                let _ = !1,
                  _ = 0;
                try {
                  const _ = `${_._.STORE_BASE_URL}/events_admin/ajaxhidefromsteamchina`,
                    _ = await _().post(_, _, {
                      withCredentials: !0,
                    });
                  (_ = _?.data?.success == _._ || _?.data?.success == _._),
                    _?.data?.success == _._ &&
                      console.warn(
                        `RemoveEventFromSteamChinaButton: we receive duplicate request ${_.clanSteamID.GetAccountID()} : ${_.GID}; event is still removed from SC`,
                      ),
                    (_ = _?.data?.success);
                } catch (_) {
                  const _ = (0, _._)(_);
                  (_ = _.errorCode),
                    console.error(
                      "RemoveEventFromSteamChinaButton: error " + _.strErrorMsg,
                      _,
                    );
                }
                _.closeModal && _.closeModal(),
                  (0, _._)(
                    _
                      ? (0, _.jsx)(_._, {
                          bAlertDialog: !0,
                          children: (0, _._)("#EventDisplay_Share_Success"),
                        })
                      : (0, _.jsx)(_._, {
                          children:
                            (0, _._)("#EventDisplay_Share_Failure") + " " + _,
                        }),
                    window,
                  );
              },
              _ = (_) => {
                let _ = !1;
                (0, _._)(
                  (0, _.jsx)(_._, {
                    strTitle: (0, _._)("#EventAdmin_Moderation_HideEventInSC"),
                    strDescription: (0, _._)(
                      "#EventAdmin_Moderation_HideEventInSC_Desc",
                    ),
                    bDestructiveWarning: !0,
                    closeModal: _.closeModal,
                    onOK: () => {
                      (_ = !0), _();
                    },
                    children:
                      _ &&
                      (0, _.jsx)(_._, {
                        size: "medium",
                        position: "center",
                      }),
                  }),
                  (0, _._)(_),
                );
              };
            return (0, _.jsx)("div", {
              className: (0, _._)(
                _.Button,
                _.AdminButton,
                _.ValveOnlyBackground,
              ),
              onClick: _,
              children: (0, _._)("#EventAdmin_Moderation_HideEventInSC"),
            });
          };
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = _._.Get(),
          _ = _._.GetSummaryStore();
        function _() {
          document.body.classList.contains("events_hub") &&
            document.body.classList.remove("events_hub");
        }
        function _(_) {
          let _;
          if (_ && _.appid) _ = _._.Get().GetApp(_.appid)?.GetName();
          else if (_ && _.clanSteamID) {
            const _ = _._.GetClanInfoByClanAccountID(
              _.clanSteamID.GetAccountID(),
            );
            _ = _ && _.group_name;
          }
          const _ = _ && _.GetNameWithFallback((0, _.sfN)(_._.LANGUAGE));
          if (_ && _ && _) {
            const _ = (0, _._)(
              "#EventCalendar_TabTitle_GroupNameAndEventDetail",
              _,
              _,
            );
            document.title != _ && (document.title = _);
          }
        }
        const _ = (0, _._)((_) => {
            const {
                bInfiniteScroll: _,
                event_gid: _,
                announcement_gid: _,
                clansteamid: _,
                appid: _,
              } = _,
              [_, _] = (0, _.useState)(_ ? _.GetClanEventModel(_) : void 0),
              [, _] = (0, _._)(_?.appid, {
                include_assets: !0,
                include_release: !0,
                include_platforms: !0,
                include_screenshots: !0,
              }),
              [_, _] = (0, _.useState)(!1),
              _ = (_, _) => {
                _.token.reason || (_(_), _(_));
              },
              _ = (_) => {
                const _ = (0, _._)(_);
                console.error(
                  "StoreEventDetailView failed " + _.strErrorMsg,
                  _,
                ),
                  _(!0);
              };
            (0, _.useEffect)(_, []),
              (0, _.useEffect)(() => {
                const _ = _().CancelToken.source();
                return (
                  _ ||
                    (_ && !_.GetClanEventModel(_)
                      ? _.LoadPartnerEventGeneric(_, _, _, void 0, 0)
                          .then((_) => _(_, _))
                          .catch(() => {
                            _.token.reason ||
                              _.LoadPartnerEventGeneric(_, _, void 0, _, 0)
                                .then((_) => _(_, _))
                                .catch(_);
                          })
                      : _ &&
                        !_.GetClanEventGIDFromAnnouncementGID(_) &&
                        _.LoadPartnerEventGeneric(_, _, void 0, _, 0)
                          .then((_) => _(_, _))
                          .catch(_)),
                  () => {
                    _.cancel("StoreEventDetailView: unmounting");
                  }
                );
              }, [_, _, _, _, _]);
            const _ = (0, _._)(_, _._.k_eStoreNewsHub, "allowRelative");
            if (_ || !_ || (_?.appid && _ == _._)) {
              const _ = "lang_" + (0, _.wwZ)((0, _.sfN)(_._.LANGUAGE)),
                _ = "";
              return (0, _.jsxs)("div", {
                className: (0, _._)(
                  _().EventDetailsPageContainer,
                  _,
                  _().PartnerEventFont,
                  _().NoTitleArtwork,
                ),
                children: [
                  (0, _.jsx)("div", {
                    style: {
                      height: "100px",
                    },
                  }),
                  (0, _.jsx)(_, {
                    strImageURL: _,
                  }),
                  (0, _.jsx)(_, {
                    strImageURL: _,
                    body: _
                      ? (0, _.jsx)("div", {
                          className: _().ErrorMsg,
                          children: (0, _._)(
                            "#Events_FailedToFind",
                            (0, _.jsx)("a", {
                              href: _._.STORE_BASE_URL + "news/",
                              children: (0, _._)(
                                "#EventDisplay_NewsHubSubtitle",
                              ),
                            }),
                          ),
                        })
                      : (0, _.jsx)(_._, {
                          string: (0, _._)("#Loading"),
                          size: "medium",
                          position: "center",
                        }),
                    postbody:
                      _ && _
                        ? (0, _.jsx)(_, {
                            clanAccountID: _.GetAccountID(),
                            partnerEventStore: _,
                          })
                        : void 0,
                  }),
                ],
              });
            }
            return _
              ? (0, _.jsx)(_._, {
                  children: (0, _.jsx)(_._, {
                    appid: _.appid,
                    trackingLocation: _._._,
                    announcementGID: _.GetAnnouncementGID(),
                    partnerEventStore: _,
                    eventModel: _,
                    showAppHeader: !0,
                    closeModal: () => _.history.push(_),
                  }),
                })
              : (0, _.jsx)(_._, {
                  children: (0, _.jsx)(_, {
                    lang: (0, _.sfN)(_._.LANGUAGE),
                    event: _,
                    adminPanel:
                      _._.EREALM === _._.k_ESteamRealmChina
                        ? (0, _.jsx)(_, {
                            eventModel: _,
                          })
                        : (0, _.jsx)(_._, {
                            eventModel: _,
                            partnerEventStore: _,
                          }),
                    otherEventRow: (0, _.jsx)(_, {
                      clanAccountID: _.clanSteamID.GetAccountID(),
                      gidAnnouncement: _.AnnouncementGID,
                      partnerEventStore: _,
                    }),
                  }),
                });
          }),
          _ = (0, _._)(_);
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
          static s_newsCuratorStore;
          m_mapNewsCurators = new Map();
          m_bIsLoadComplete = !1;
          m_mapLangToNewsCurators = new Map();
          m_LoadingPromise = null;
          static Get() {
            return (
              _.s_newsCuratorStore ||
                ((_.s_newsCuratorStore = new _()),
                (_.s_newsCuratorStore.m_LoadingPromise =
                  _.s_newsCuratorStore.Init()),
                (window.g_NewsCuratorStore = _.s_newsCuratorStore)),
              _.s_newsCuratorStore
            );
          }
          constructor() {
            (0, _._)(this);
          }
          IsLoaded() {
            return this.m_bIsLoadComplete;
          }
          WaitForInitialLoad() {
            return this.m_LoadingPromise;
          }
          get allNewsCurators() {
            return Array.from(this.m_mapNewsCurators.values());
          }
          GetCuratorsForLang(_) {
            return this.m_mapLangToNewsCurators.get(_);
          }
          GetNewsCuratorForAccount(_) {
            return this.m_mapNewsCurators.get(_);
          }
          BIsTrustedPressAccount(_) {
            return this.GetNewsCuratorForAccount(_) !== void 0;
          }
          async Init() {
            _._.GetLanguageListForRealms([_._.EREALM]).forEach((_) =>
              this.m_mapLangToNewsCurators.set(_, []),
            );
            const _ = _._.STORE_BASE_URL + "events/ajaxgetnewscurators";
            let _ = {
              origin: self.origin,
            };
            const _ = await _().get(_, {
              params: _,
            });
            (0, _._)(() => {
              _.data && _.data.success && this.HandleCuratorResponse(_.data),
                (this.m_bIsLoadComplete = !0);
            });
          }
          HandleCuratorResponse(_) {
            if (
              (_.groupvanityinfo && _._.RegisterClanData(_.groupvanityinfo),
              _.newscuratorinfo)
            )
              for (const _ of _.newscuratorinfo) {
                if (this.m_mapNewsCurators.has(_.clanAccountID)) continue;
                this.m_mapNewsCurators.set(_.clanAccountID, _);
                const _ = _._.GetClanInfoByClanAccountID(_.clanAccountID);
                _ && this.m_mapLangToNewsCurators.get(_.rss_language)?.push(_);
              }
          }
        };
        _([_._], _.prototype, "m_mapNewsCurators", 2),
          _([_._], _.prototype, "m_bIsLoadComplete", 2),
          _([_._], _.prototype, "m_mapLangToNewsCurators", 2),
          _([_._], _.prototype, "allNewsCurators", 1),
          _([_._], _.prototype, "HandleCuratorResponse", 1);
        let _ = _;
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
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
          const _ = new Set();
          return (
            (_.indexOf("games") >= 0 || _.indexOf("dlc") >= 0) && _.add("apps"),
            _.indexOf("curators") >= 0 && _.add("curators"),
            _
          );
        }
        function _(_) {
          return _ == "game" || _ == "software"
            ? "games"
            : _ == "dlc" || _ == "music"
              ? "dlc"
              : null;
        }
        const _ = 300;
        class _ extends _.Component {
          state = {
            strSearchString: "",
            rgAppSuggestions: null,
            rgCuratorSuggestions: null,
          };
          m_nHighestSentRequestID = 0;
          m_mapHighestReceivedRequestIDFromBackEnd = new Map([
            ["apps", 0],
            ["curators", 0],
          ]);
          m_timerForChange = new _._();
          componentWillUnmount() {
            this.m_timerForChange.Cancel();
          }
          CloseSuggestions() {
            this.setState({
              rgCuratorSuggestions: null,
              rgAppSuggestions: null,
              strSearchString: "",
            });
          }
          async GetSuggestionsFromServer(_) {
            const _ = _(this.props.rgCorporaToSearch);
            _.has("apps") && this.GetAppSuggestionsFromServer(_),
              _.has("curators") && this.GetCuratorSuggestions(_);
          }
          async GetCuratorSuggestions(_) {
            const _ = _.Get().allNewsCurators,
              _ = [];
            for (const _ of _) {
              const _ = _._.GetClanInfoByClanAccountID(_.clanAccountID),
                _ = {
                  corpus: "curators",
                  _: _.clanAccountID,
                  name: _?.group_name,
                  img: _?.avatar_full_url,
                };
              if ((_?.group_name?.toLocaleLowerCase() || "").indexOf(_) >= 0) {
                if (
                  (this.props.fnFilterSuggestion &&
                    !this.props.fnFilterSuggestion(_)) ||
                  _._.Get().BIsIgnoringCurator(_.clanAccountID)
                )
                  continue;
                const _ = _._.Get().BIsFollowingCurator(_.clanAccountID),
                  _ = (0, _.jsx)(
                    _,
                    {
                      suggestion: _,
                      fnOnSelected: this.props.fnOnSelected,
                      bShowFollowingLabel: _,
                    },
                    "curatorsug_" + _._,
                  );
                _.push(
                  this.props.fnDecorateSuggestion
                    ? this.props.fnDecorateSuggestion(_, _)
                    : _,
                );
              }
            }
            this.m_mapHighestReceivedRequestIDFromBackEnd.set(
              "curators",
              this.m_nHighestSentRequestID,
            ),
              this.setState({
                rgCuratorSuggestions: _,
              });
          }
          async GetAppSuggestionsFromServer(_) {
            const _ = this.m_nHighestSentRequestID,
              _ = [];
            this.props.rgCorporaToSearch.indexOf("games") >= 0 &&
              (_.push("game"), _.push("software")),
              this.props.rgCorporaToSearch.indexOf("dlc") >= 0 &&
                (_.push("dlc"), _.push("music"));
            const _ = {
                _: _._.COUNTRY,
                _: _._.LANGUAGE,
                realm: _._.k_ESteamRealmGlobal,
                origin: self.origin,
                _: "jsonfull",
                term: _.replace(" ", "+"),
                require_type: _.join(","),
                excluded_tags: _._.Get().GetExcludedTagsSortedByID(),
                excluded_content_descriptors:
                  _._.Get().ExcludedContentDescriptor,
              },
              _ = `${_._.STORE_BASE_URL}search/suggest`,
              _ = await _().get(_, {
                params: _,
                withCredentials: !0,
              });
            if (_ < this.m_mapHighestReceivedRequestIDFromBackEnd.get("apps"))
              return;
            this.m_mapHighestReceivedRequestIDFromBackEnd.set("apps", _);
            let _;
            _?.data?.length &&
              (_ = _.data.map((_) => {
                const _ = {
                  corpus: _(_.type),
                  ..._,
                  _: parseInt(_._),
                };
                if (
                  this.props.fnFilterSuggestion &&
                  !this.props.fnFilterSuggestion(_)
                )
                  return null;
                const _ = (0, _.jsx)(
                  _,
                  {
                    suggestion: _,
                    fnOnSelected: this.props.fnOnSelected,
                  },
                  _.type + _._,
                );
                return this.props.fnDecorateSuggestion
                  ? this.props.fnDecorateSuggestion(_, _)
                  : _;
              })),
              this.setState({
                rgAppSuggestions: _,
              });
          }
          async UpdateSuggestions(_) {
            const _ =
              _.target.value && _.target.value.trim().toLocaleLowerCase();
            if ((this.m_nHighestSentRequestID++, !_?.length)) {
              Array.from(_(this.props.rgCorporaToSearch)).forEach((_) =>
                this.m_mapHighestReceivedRequestIDFromBackEnd.set(
                  _,
                  this.m_nHighestSentRequestID,
                ),
              ),
                this.m_timerForChange.Cancel(),
                this.setState({
                  strSearchString: "",
                }),
                this.ResetSuggestions();
              return;
            }
            this.setState({
              strSearchString: _,
            }),
              this.m_timerForChange.Schedule(_, () =>
                this.GetSuggestionsFromServer(_),
              );
          }
          ResetSuggestions() {
            this.setState({
              rgAppSuggestions: null,
              rgCuratorSuggestions: null,
            });
          }
          GetLimitedSuggestions() {
            let { rgAppSuggestions: _, rgCuratorSuggestions: _ } = this.state;
            const _ = 10;
            let _ = _ ? _.length : _,
              _ = _ ? _.length : _;
            return (
              _ + _ > _ && (_ = _ - Math.min(_, 2)),
              (_ = _ - _),
              (_ = _?.slice(0, _)),
              (_ = _?.slice(0, _)),
              {
                rgAppSuggestions: _,
                rgCuratorSuggestions: _,
              }
            );
          }
          render() {
            const {
                strLabel: _,
                focusOnMount: _,
                rgCorporaToSearch: _,
                strResultsClass: _,
              } = this.props,
              { strSearchString: _ } = this.state,
              { rgAppSuggestions: _, rgCuratorSuggestions: _ } =
                this.GetLimitedSuggestions(),
              _ = _?.length > 0,
              _ = _?.length > 0,
              _ = _?.length > 0,
              _ = _(_).size > 1,
              _ =
                _ &&
                _ &&
                (0, _._)(
                  _.indexOf("dlc") >= 0
                    ? "#EventCalendar_SearchResultsHeader_GameAndDLCSection"
                    : "#EventCalendar_SearchResultsHeader_GameSection",
                ),
              _ = Array.from(_(_)).some(
                (_) =>
                  this.m_nHighestSentRequestID >
                  this.m_mapHighestReceivedRequestIDFromBackEnd.get(_),
              ),
              _ = !_ && !_ && !_;
            return (0, _.jsxs)("div", {
              className: _().SuggestContainer,
              children: [
                (0, _.jsx)(_._, {
                  type: "text",
                  label: _,
                  onChange: this.UpdateSuggestions,
                  bAlwaysShowClearAction: _,
                  focusOnMount: _,
                }),
                _ &&
                  (0, _.jsxs)("div", {
                    className: (0, _._)(_().Results, _),
                    children: [
                      _ &&
                        (0, _.jsxs)(
                          "div",
                          {
                            children: [
                              _ &&
                                (0, _.jsx)("div", {
                                  className: _().ResultSectionHeader,
                                  children: _,
                                }),
                              _,
                            ],
                          },
                          "game-suggestions",
                        ),
                      _ &&
                        (0, _.jsxs)(
                          "div",
                          {
                            children: [
                              _ &&
                                (0, _.jsx)("div", {
                                  className: _().ResultSectionHeader,
                                  children: (0, _._)(
                                    "#EventCalendar_SearchResultsHeader_CuratorSection",
                                  ),
                                }),
                              _,
                            ],
                          },
                          "curator-suggestions",
                        ),
                      _ &&
                        (0, _.jsx)(
                          "div",
                          {
                            className: _().EmptyResults,
                            children: (0, _._)(
                              "#EventCalendar_GameSearch_NoneFound",
                            ),
                          },
                          "empty-results",
                        ),
                      _ &&
                        (0, _.jsx)(_._, {
                          size: "small",
                        }),
                    ],
                  }),
              ],
            });
          }
        }
        _([_._], _.prototype, "UpdateSuggestions", 1);
        const _ = (_) =>
          (0, _.jsxs)(
            "div",
            {
              className: _().ResultRow,
              onClick: () => _.fnOnSelected(_.suggestion),
              children: [
                (0, _.jsx)("img", {
                  src: _.suggestion.img,
                  className: _().AvatarImage,
                }),
                (0, _.jsxs)("div", {
                  className: _().GameName,
                  children: [" ", (0, _._)(_.suggestion.name), " "],
                }),
                _.bShowFollowingLabel &&
                  (0, _.jsx)("div", {
                    className: _().Label,
                    children: (0, _._)("#EventCalendar_FollowingCurator"),
                  }),
              ],
            },
            `suggestion-${_.suggestion._}`,
          );
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { closeModal: _ } = _,
            _ = () => {
              (0, _._)().m_visibilityStore.SetGameSourceAllowed(
                _._.k_ECurator,
                !0,
              ),
                _ && _();
            },
            _ = () => {
              (0,
              _._)().m_visibilityStore.SetCuratorUnhideOnFollowDialogDismissed(
                !0,
              ),
                _ && _();
            };
          return (0, _.jsx)(_._, {
            strTitle: (0, _._)(
              "#EventCalendar_GameSource_UnhideCuratorsDialog_Title",
            ),
            strDescription: (0, _._)(
              "#EventCalendar_GameSource_UnhideCuratorsDialog_Description",
            ),
            strOKButtonText: (0, _._)(
              "#EventCalendar_GameSource_UnhideCuratorsDialog_OKButton",
            ),
            strCancelButtonText: (0, _._)(
              "#EventCalendar_GameSource_UnhideCuratorsDialog_CancelButton",
            ),
            onOK: _,
            onCancel: _,
          });
        }
        function _(_) {
          _ ||
            ((0, _._)() &&
              ((0,
              _._)().m_visibilityStore.BCuratorUnhideOnFollowDialogDismissed() ||
                (0, _._)().m_visibilityStore.BIsGameSourceAllowed(
                  _._.k_ECurator,
                ) ||
                (0, _._)((0, _.jsx)(_, {}), window)));
        }
        const _ = (_) =>
            (0, _.jsx)(_._, {
              onEscKeypress: _.closeModal,
              children: (0, _.jsx)(_._, {
                children: (0, _.jsxs)(_._, {
                  children: [
                    (0, _.jsx)(_._, {
                      children: (0, _._)("#EventCurator_BrowseDialog_Title"),
                    }),
                    (0, _.jsxs)(_._, {
                      children: [
                        (0, _.jsx)("div", {
                          children: (0, _._)("#EventCurator_BrowseDialog_Desc"),
                        }),
                        (0, _.jsx)(_, {}),
                      ],
                    }),
                    (0, _.jsx)(_._, {
                      children: (0, _.jsx)(_._, {
                        onClick: _.closeModal,
                        children: (0, _._)("#Button_Dismiss"),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          _ = (_) =>
            (0, _.jsx)(_, {
              title: (0, _._)("#EventCurator_BrowseDialog_Title"),
              description: (0, _._)("#EventCurator_BrowseDialog_Desc"),
              children: (0, _.jsx)(_, {}),
            }),
          _ = (_) => {
            const [_, _] = _.useState(_.Get().IsLoaded());
            _.useEffect(() => {
              _ || (async () => (await _.Get().WaitForInitialLoad(), _(!0)))();
            }, [_]);
            let _ = new Array();
            return (
              _ &&
                _._.GetELanguageFallbackOrder([
                  _._.k_ESteamRealmGlobal,
                ]).forEach((_) =>
                  _.push(
                    (0, _.jsx)(
                      _,
                      {
                        lang: _,
                      },
                      "curlang" + _,
                    ),
                  ),
                ),
              (0, _.jsx)(_.Fragment, {
                children: _
                  ? (0, _.jsx)(_.Fragment, {
                      children: _,
                    })
                  : (0, _.jsx)(_._, {
                      size: "medium",
                      position: "center",
                      string: (0, _._)("#Loading"),
                    }),
              })
            );
          },
          _ = (_) => {
            const _ = _.Get().GetCuratorsForLang(_.lang);
            if (!_) return null;
            const _ = _.map((_) =>
              _._.GetClanInfoByClanAccountID(_.clanAccountID),
            ).filter((_) => !!_);
            if (_.length == 0) return null;
            _.sort((_, _) => _.group_name.localeCompare(_.group_name));
            const _ = _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  clanInfo: _,
                  layout: "row",
                },
                "curatorbrowse_" + _.clanAccountID,
              ),
            );
            return (0, _.jsxs)("div", {
              children: [
                (0, _.jsx)("div", {
                  className: _().LanguageHeader,
                  children: (0, _._)(
                    "#EventCurator_BrowseDialog_LangCurator",
                    (0, _._)("#Language_" + (0, _.LgB)(_.lang)),
                  ),
                }),
                _,
              ],
            });
          },
          _ = (0, _._)((_) => {
            const _ = _._.GetClanInfoByClanAccountID(_.clanid);
            if (!_)
              return (0, _.jsx)("div", {
                children: _.children,
              });
            const _ = {
                clan_account_id: _.clanAccountID,
                name: _.group_name,
                type: "developer",
              },
              _ = (0, _.jsx)("div", {
                className: _().CuratorHoverContainer,
                children: (0, _.jsx)(_._, {
                  creatorID: _,
                  bSmallFormat: !0,
                  bHideCreatorType: !0,
                  bHideFollowButton: !0,
                }),
              });
            return (0, _.jsx)(_._, {
              toolTipContent: _,
              bTopmost: !0,
              children: _.children,
            });
          }),
          _ = (_) => {
            const [_, _] = _.useState(!1),
              _ = () => {
                (0, _._)(
                  (0, _.jsx)(_._, {
                    strDescription: (0, _._)(
                      "#EventCurator_NoEventsFound_Body",
                    ),
                    strTitle: (0, _._)("#EventCurator_NoEventsFound_Title"),
                  }),
                  window,
                ),
                  _(!1);
              },
              _ = () =>
                _
                  ? (0, _.jsx)(_._, {
                      children: (0, _.jsx)(_._, {
                        onEventNotFound: _,
                        appid: 0,
                        clanSteamID: _.clanInfo.clanSteamID,
                        trackingLocation: _._._,
                        eventModel: void 0,
                        announcementGID: void 0,
                        partnerEventStore: _._,
                        showAppHeader: !0,
                        closeModal: () => _(!1),
                      }),
                    })
                  : null,
              { clanInfo: _, layout: _ } = _,
              _ = _ === "row" ? _().CuratorInfoRow : _().CuratorInfoIcon,
              _ = (0, _.jsx)(_, {
                clanid: _.clanSteamID.GetAccountID(),
                children: (0, _.jsxs)("div", {
                  className: (0, _._)(
                    _().FlexRowContainer,
                    _().CuratorInfoTitleCtn,
                  ),
                  onClick: () => _(!0),
                  children: [
                    (0, _.jsx)("img", {
                      className: _().CuratorInfoImg,
                      src: _.avatar_full_url,
                      alt: _.group_name,
                    }),
                    (0, _.jsx)("div", {
                      className: _().CuratorInfoName,
                      children: _.group_name,
                    }),
                  ],
                }),
              });
            return (0, _.jsxs)("div", {
              className: (0, _._)(_().FlexRowWrapSpaceBetweenContainer, _),
              children: [
                _(),
                (0, _.jsx)("div", {
                  onClick: () => _(!0),
                  children: _,
                }),
                (0, _.jsx)("div", {
                  className: (0, _._)(
                    _().FlexRowContainer,
                    _().CuratorInfoActionCtn,
                  ),
                  children: (0, _.jsx)(_._, {
                    clanAccountID: _.clanAccountID,
                    className: _().CuratorInfoFollow,
                    fnSuccessCallback: _,
                  }),
                }),
              ],
            });
          };
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        class _ {
          m_dateLoadTime = _._.GetTimeNowWithOverrideAsDate();
          IsCurrentlyVisible(_) {
            return (
              (!_.startVisible || _.startVisible <= this.m_dateLoadTime) &&
              (!_.endVisible || _.endVisible >= this.m_dateLoadTime)
            );
          }
          static IsCurrentlyActive(_) {
            const _ = _._.GetTimeNowWithOverrideAsDate();
            return (
              (!_.startEvent || _.startEvent <= _) &&
              (!_.endEvent || _.endEvent >= _)
            );
          }
          static LocalizeDateString(_) {
            if (!_.startEvent) return null;
            const _ = {
                month: "long",
                day: "numeric",
              },
              _ = _.startEvent.toLocaleDateString(_._.GetPreferredLocales(), _);
            if (!_.endEvent) return _;
            const _ = {
                month:
                  _.startEvent.getMonth() != _.endEvent.getMonth()
                    ? "long"
                    : void 0,
                day: "numeric",
              },
              _ = _.endEvent.toLocaleDateString(_._.GetPreferredLocales(), _);
            return `${_} - ${_}`;
          }
          GetVisibleSpecialEvents() {
            return [
              {
                sLocToken: "#NewsHubSpecialEvent_GameFestival",
                startVisible: new Date(
                  _()("2020-06-16T14:00:00-07:00").unix() * 1e3,
                ),
                endVisible: new Date(
                  _()("2020-06-22T10:00:00-07:00").unix() * 1e3,
                ),
                startEvent: new Date(
                  _()("2020-06-16T10:00:00-07:00").unix() * 1e3,
                ),
                endEvent: new Date(
                  _()("2020-06-22T10:00:00-07:00").unix() * 1e3,
                ),
                newshubUrl: "news/collection/GameFestival2020",
              },
            ].filter((_) => this.IsCurrentlyVisible(_));
          }
        }
        const _ = new _();
        class _ extends _.Component {
          render() {
            const { specialEvent: _ } = this.props,
              _ = window.location.href === _._.STORE_BASE_URL + _.newshubUrl,
              _ = _.IsCurrentlyActive(_),
              _ = _.LocalizeDateString(_);
            return (0, _.jsx)(_._, {
              _: "/" + _.newshubUrl,
              children: (0, _.jsxs)("div", {
                className: (0, _._)(
                  _().SpecialEvent,
                  _ && _().SpecialEventOnPage,
                  _ && _().SpecialEventActive,
                ),
                children: [
                  (0, _.jsx)("div", {
                    className: _().SpecialEventTitle,
                    children: (0, _._)(_.sLocToken),
                  }),
                  _ &&
                    (0, _.jsx)("div", {
                      className: _().SpecialEventTime,
                      children: _,
                    }),
                ],
              }),
            });
          }
        }
        class _ extends _.Component {
          render() {
            const _ = _.GetVisibleSpecialEvents();
            return _.length === 0
              ? null
              : (0, _.jsxs)("div", {
                  className: _().SpecialEventListGroup,
                  children: [
                    (0, _.jsx)("div", {
                      className: _().SpecialEventListTitle,
                      children: (0, _._)("#Events_SpecialEvents"),
                    }),
                    (0, _.jsx)("div", {
                      className: _().SpecialEventList,
                      children: _.map((_) =>
                        (0, _.jsx)(
                          _,
                          {
                            specialEvent: _,
                          },
                          _.sLocToken,
                        ),
                      ),
                    }),
                  ],
                });
          }
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _() {
          return (0, _._)(new Date());
        }
        const _ = (_) => {
            const _ = _._.PUBLIC_SHARED_URL + "images/";
            return (0, _.jsxs)("div", {
              className: _().LegalFooter,
              children: [
                (0, _.jsxs)("div", {
                  className: _().mainmenu_links_china,
                  children: [
                    (0, _.jsx)("a", {
                      href: _._.STORE_BASE_URL + "about",
                      children: "\u5173\u4E8E\u84B8\u6C7D\u5E73\u53F0",
                    }),
                    "\xA0 | \xA0",
                    (0, _.jsx)("a", {
                      href: _._.STORE_BASE_URL + "steam_refunds",
                      children: "\u9000\u6B3E\u653F\u7B56",
                    }),
                    "\xA0 | \xA0",
                    (0, _.jsx)("a", {
                      href: _._.STORE_BASE_URL + "subscriber_agreement",
                      children:
                        "\u8F6F\u4EF6\u8BB8\u53EF\u670D\u52A1\u534F\u8BAE",
                    }),
                    "\xA0 | \xA0",
                    (0, _.jsx)("br", {}),
                    (0, _.jsx)("a", {
                      href: _._.STORE_BASE_URL + "privacy_agreement",
                      children:
                        "\u4E2A\u4EBA\u4FE1\u606F\u4FDD\u62A4\u653F\u7B56",
                    }),
                    "\xA0 | \xA0",
                    (0, _.jsx)("a", {
                      href: "https://about.steamchina.com/content_report.html",
                      target: "_blank",
                      rel: "noreferrer",
                      children:
                        "\u4E0D\u826F\u5185\u5BB9\u4E3E\u62A5\u6295\u8BC9",
                    }),
                    "\xA0 | \xA0",
                    (0, _.jsx)("a", {
                      href: "https://about.steamchina.com/infringement_report.html",
                      target: "_blank",
                      rel: "noreferrer",
                      children: "\u4FB5\u6743\u6295\u8BC9",
                    }),
                    "\xA0 | \xA0",
                    (0, _.jsx)("a", {
                      href: "https://about.steamchina.com/parentguardianship_agreement.html",
                      target: "_blank",
                      rel: "noreferrer",
                      children: "\u5BB6\u957F\u76D1\u62A4",
                    }),
                  ],
                }),
                (0, _.jsx)("div", {
                  className: _().mainmenu_line,
                }),
                (0, _.jsxs)("div", {
                  className: _().mainmenu_logos_china,
                  children: [
                    (0, _.jsx)("a", {
                      href: "https://www.wanmei.com/",
                      target: "_blank",
                      rel: "noreferrer",
                      children: (0, _.jsx)("img", {
                        className: _().mainmenu_china_pw_logo,
                        src: _ + "footer/pw_logo_gy.svg?v=1",
                      }),
                    }),
                    (0, _.jsx)("a", {
                      href: "https://valvesoftware.com",
                      target: "_blank",
                      rel: "noreferrer",
                      children: (0, _.jsx)("img", {
                        className: _().mainmenu_china_valve_logo,
                        src: _ + "footer/valve_logo_gy.svg?v=1",
                      }),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  className: _().mainmenu_legal_china,
                  children: [
                    (0, _.jsxs)("div", {
                      className: _().mainmenu_legal_valvelegal,
                      children: [
                        `\xA9 ${_()} Valve Corporation \u7248\u6743\u6240\u6709\uFF0C\u5B8C\u7F8E\u4E16\u754C\u5DF2\u83B7\u6388\u6743`,
                        (0, _.jsx)("br", {}),
                        "\u6240\u6709\u5546\u6807\u5747\u5C5E\u4E8E\u5176\u5728\u7F8E\u56FD\u6216\u5176\u4ED6\u56FD\u5BB6\u7684\u62E5\u6709\u8005\u3002",
                      ],
                    }),
                    (0, _.jsxs)("div", {
                      className: _().mainmenu_legal_pwlegal,
                      children: [
                        "\xA9 \u5B8C\u7F8E\u4E16\u754C\u5F81\u5947(\u4E0A\u6D77)\u591A\u5A92\u4F53\u79D1\u6280\u6709\u9650\u516C\u53F8 \u7248\u6743\u6240\u6709\u3002",
                        (0, _.jsx)("br", {}),
                        "\u589E\u503C\u7535\u4FE1\u4E1A\u52A1\u7ECF\u8425\u8BB8\u53EF\u8BC1\u6CAAB2-20180406",
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          _ = (_) =>
            (0, _.jsxs)("div", {
              className: _().LegalFooter,
              children: [
                (0, _.jsx)("img", {
                  src:
                    _._.STORE_CDN_URL +
                    "public/images/footerLogo_valve_new.png",
                }),
                (0, _.jsx)("div", {
                  className: _().FooterLegal,
                  children: (0, _._)("#Legal_Footer_WithYear", _()),
                }),
              ],
            }),
          _ = (_) => ((0, _._)() ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {}));
        var _ = __webpack_require__("chunkid"),
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
          m_curDisplay = "desktop_navigation";
          m_fnGetRouterHistory = void 0;
          static s_GlobalStore;
          static Get() {
            return (
              _.s_GlobalStore || (_.s_GlobalStore = new _()), _.s_GlobalStore
            );
          }
          constructor() {
            (0, _._)(this);
          }
          UpdateLocation(_, _) {
            this.m_fnGetRouterHistory = _;
            const _ = (0, _._)(_, "optionpane");
            if (_)
              switch (_) {
                case "event_filter":
                case "browse_curator":
                case "desktop_navigation":
                  this.m_curDisplay != _ && (this.m_curDisplay = _);
                  break;
              }
            else
              this.m_curDisplay != "desktop_navigation" &&
                (this.m_curDisplay = "desktop_navigation");
            return this.m_curDisplay;
          }
          SetDisplay(_) {
            (this.m_curDisplay = _),
              this.m_fnGetRouterHistory &&
                (0, _._)(
                  this.m_fnGetRouterHistory(),
                  "optionpane",
                  this.m_curDisplay == "desktop_navigation"
                    ? void 0
                    : this.m_curDisplay,
                );
          }
          GetDisplay() {
            return this.m_curDisplay;
          }
          ShowBrowseCurator(_) {
            _()
              ? _.Get().SetDisplay("browse_curator")
              : (0, _._)((0, _.jsx)(_, {}), (0, _._)(_));
          }
        };
        _([_._], _.prototype, "m_curDisplay", 2);
        let _ = _,
          _ = class extends _.Component {
            GetVisibilityStore() {
              return (0, _._)().m_visibilityStore;
            }
            OnEventTypeChange(_, _) {
              this.GetVisibilityStore().SetEventTypeGroupAllowed(_, _),
                this.props.fnOnFilterChange();
            }
            RenderEventTypeCheckbox(_) {
              const _ = this.GetVisibilityStore().BIsEventTypeGroupAllowed(_);
              return (0, _.jsx)(
                _._,
                {
                  toolTipContent: (0, _._)(
                    "#EventCalendar_EventTypeGroup_ttip_" + _,
                  ),
                  direction: "top",
                  children: (0, _.jsx)(_, {
                    label: (0, _._)("#EventCalendar_EventTypeGroup_" + _),
                    checked: _,
                    onChange: (_) => this.OnEventTypeChange(_, _),
                  }),
                },
                `group-${_}`,
              );
            }
            OnGameSourceChange(_, _) {
              this.GetVisibilityStore().SetGameSourceAllowed(_, _),
                this.props.fnOnFilterChange();
            }
            RenderGameSourceCheckbox(_, _) {
              const _ =
                this.GetVisibilityStore().BIsGameSourceAllowed(_) ||
                (_ == _._.k_ELibrary &&
                  this.GetVisibilityStore().BIsGameSourceAllowed(
                    _._.k_ERecent,
                  ));
              return (0, _.jsx)(
                _._,
                {
                  direction: "top",
                  toolTipContent: _
                    ? (0, _._)("#EventCalendar_DisabledFilter_LoginPrompt")
                    : (0, _._)("#EventCalendar_GameSource_ttip_" + _),
                  children: (0, _.jsx)(_, {
                    label: (0, _._)("#EventCalendar_GameSource_" + _),
                    checked: _,
                    disabled: _,
                    onChange: (_) => this.OnGameSourceChange(_, _),
                  }),
                },
                `gs-${_}`,
              );
            }
            render() {
              const { bUserIsLoggedIn: _ } = this.props,
                _ = (0, _._)();
              let _ = !0;
              if (_.BIsSingleGroupCalendar()) {
                let _ = _._.GetClanInfoByClanAccountID(_.GetSingleGroupID());
                _ && _.has_rss_feed && (_ = !1);
              } else
                _.BIsCollectionCalendar() &&
                  (_.GetKey().collectionid == _._.Press ||
                    _.GetKey().collectionid == _._.Dev_Sales ||
                    _.GetKey().collectionid == _._.Dev_AssociatedPress) &&
                  (_ = !1);
              const _ = _(_),
                _ = _._.Get().GetMutedSourceCount(),
                _ =
                  _.BIsSingleSourceMuted() ||
                  (!_.BIsSingleSourceCalendar() && _ > 0);
              return (0, _.jsxs)(_, {
                title: (0, _._)("#EventCalendar_FiltersTitle"),
                description: (0, _._)(
                  _.BIsGlobalCalendar()
                    ? "#EventCalendar_FiltersDescription"
                    : "#EventCalendar_FiltersDescription_NonPersonalized",
                ),
                children: [
                  (0, _.jsxs)("div", {
                    className: _().FilterSection,
                    children: [
                      _ &&
                        (0, _.jsxs)(_, {
                          children: [
                            (0, _.jsx)(_, {
                              children: (0, _._)(
                                "#EventCalendar_FilterSubSection_EventTypeGroups",
                              ),
                            }),
                            this.RenderEventTypeCheckbox(_._.k_EEvents),
                            this.RenderEventTypeCheckbox(_._.k_EStreaming),
                            this.RenderEventTypeCheckbox(_._.k_EUpdates),
                            this.RenderEventTypeCheckbox(_._.k_EReleases),
                            this.RenderEventTypeCheckbox(_._.k_ESales),
                            this.RenderEventTypeCheckbox(_._.k_ENews),
                          ],
                        }),
                      !!_.BIsGlobalCalendar() &&
                        (0, _.jsxs)(_, {
                          children: [
                            (0, _.jsx)(_, {
                              children: (0, _._)(
                                "#EventCalendar_FilterSubSection_GameSources",
                              ),
                            }),
                            this.RenderGameSourceCheckbox(_._.k_ELibrary, !_),
                            (0, _.jsx)("div", {
                              className: _().FilterSubOption,
                              children: this.RenderGameSourceCheckbox(
                                _._.k_ERecent,
                                !_,
                              ),
                            }),
                            this.RenderGameSourceCheckbox(_._.k_EWishlist, !_),
                            (0, _._)() &&
                              this.RenderGameSourceCheckbox(
                                _._.k_EFollowing,
                                !_,
                              ),
                            this.RenderGameSourceCheckbox(
                              _._.k_ERecommended,
                              !_,
                            ),
                            this.RenderGameSourceCheckbox(_._.k_ESteam),
                            _._.bIncludeFeaturedAsGameSource &&
                              this.RenderGameSourceCheckbox(_._.k_EFeatured),
                          ],
                        }),
                      !!(
                        (0, _._)() &&
                        (_.BIsGlobalCalendar() || _.BIsSingleAppCalendar())
                      ) &&
                        (0, _.jsxs)(_, {
                          children: [
                            (0, _.jsx)(_, {
                              children: (0, _._)(
                                "#EventCalendar_FilterSubSection_CuratorSources",
                              ),
                            }),
                            this.RenderGameSourceCheckbox(_._.k_ECurator, !_),
                            (0, _.jsx)(_, {
                              onClick: _.Get().ShowBrowseCurator,
                              children: (0, _._)(
                                "#EventCalendar_BrowseCurators",
                              ),
                            }),
                          ],
                        }),
                      _ &&
                        (0, _.jsx)(_, {
                          calendar: _,
                          onFilterChange: this.props.fnOnFilterChange,
                        }),
                      !!_.BIsSingleSourceMuted() &&
                        (0, _.jsx)("div", {
                          children: (0, _._)(
                            _.BIsSingleGroupCalendar()
                              ? "#EventCalendar_SingleGroupIsMuted"
                              : "#EventCalendar_SingleAppIsMuted",
                          ),
                        }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: _().SideBarFilterNavLinks,
                    children: [
                      _ &&
                        (0, _.jsx)(_._, {
                          className: _().MutedSourcesGroup,
                          href: _._.STORE_BASE_URL + "account/emailoptout/app",
                          bDisableContextMenu: !0,
                          children: (0, _.jsxs)(_, {
                            children: [
                              (0, _.jsx)(_.fSs, {
                                muted: !0,
                              }),
                              (0, _._)("#EventCalendar_ManageMutedSources"),
                              (0, _.jsx)("div", {
                                className: _().NumberDisplay,
                                children: _,
                              }),
                            ],
                          }),
                        }),
                      (0, _.jsx)(_._, {
                        href: _._.STORE_BASE_URL + "account/preferences",
                        bDisableContextMenu: !0,
                        children: (0, _.jsxs)(_, {
                          children: [
                            (0, _.jsx)(_.nkJ, {}),
                            (0, _._)("#EventCalendar_ManageStorePref"),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              });
            }
          };
        _ = _([_._], _);
        const _ = (0, _._)(_().FilterSubSection),
          _ = (0, _._)(_().FilterSubSectionTitle),
          _ = (0, _._)(_().FilterLink);
        function _(_) {
          const { calendar: _, onFilterChange: _ } = _,
            [_, _] = (0, _._)(() => [
              _.GetAllClans().filter(
                (_) => _._.GetClanInfoByClanAccountID(_)?.group_name,
              ),
              _.GetAllApps().filter((_) => _._.Get().GetApp(_)?.GetName()),
            ]);
          return (
            (0, _._)(
              _.BIsCollectionCalendar,
              "Attempted to render collection source filters for a non collection calendar",
            ),
            _.BIsCollectionCalendar()
              ? (0, _.jsxs)(_, {
                  children: [
                    (0, _.jsx)(_, {
                      children: (0, _._)(
                        "#EventCalendar_FilterSubSection_CollectionSources",
                      ),
                    }),
                    _.map((_) =>
                      (0, _.jsx)(
                        _,
                        {
                          calendar: _,
                          clanid: _,
                          onFilterChange: _,
                        },
                        _,
                      ),
                    ),
                    _.map((_) =>
                      (0, _.jsx)(
                        _,
                        {
                          calendar: _,
                          appid: _,
                          onFilterChange: _,
                        },
                        _,
                      ),
                    ),
                  ],
                })
              : null
          );
        }
        function _(_) {
          const { calendar: _, clanid: _, onFilterChange: _ } = _,
            _ = (0, _._)(() => _.m_visibilityStore.BIsClanVisible(_)),
            _ = (_) => {
              _.m_visibilityStore.SetClanVisibility(_, _), _();
            };
          return (0, _.jsx)(_, {
            label: _._.GetClanInfoByClanAccountID(_)?.group_name,
            checked: _,
            onChange: _,
          });
        }
        function _(_) {
          const { calendar: _, appid: _, onFilterChange: _ } = _,
            _ = _.m_visibilityStore.BIsAppVisible(_),
            _ = (_) => {
              _.m_visibilityStore.SetAppVisibility(_, _), _();
            };
          return (0, _.jsx)(_, {
            label: _._.Get().GetApp(_)?.GetName(),
            checked: _,
            onChange: _,
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _().FilterOption,
            children: (0, _.jsx)(_._, {
              ..._,
            }),
          });
        }
        const _ = (_) =>
          (0, _.jsxs)("div", {
            className: _().FilterControlPage,
            children: [
              (0, _.jsx)("div", {
                className: _().FiltersTitle,
                children: _.title,
              }),
              !!_.description &&
                (0, _.jsx)("div", {
                  className: _().FiltersDescription,
                  children: _.description,
                }),
              _.children,
            ],
          });
        function _(_) {
          _.Get().SetDisplay(_ ? "event_filter" : "desktop_navigation");
        }
        const _ = (0, _._)(function (_) {
            const {
                bUserIsLoggedIn: _,
                nDisappearingHeaderVisibleHeight: _,
                bIsCollapsed: _,
                fnToggleCollapsed: _,
                fnOnFilterChange: _,
              } = _,
              _ = _(),
              _ = (0, _.jsx)("div", {
                className: _().MobileCloseButton,
                onClick: () => {
                  _(!1), _();
                },
                children: (0, _.jsx)(_.i6V, {}),
              }),
              _ = (0, _._)(),
              _ = _ ? Math.max(0, _) : 0,
              _ =
                _ || _
                  ? null
                  : (0, _.jsx)("div", {
                      onClick: _,
                      className: _().CollapseButton,
                      children: (0, _.jsx)("div", {
                        style: {
                          marginTop: `${_}px`,
                        },
                        className: _().DesktopButton,
                        children: (0, _.jsx)(_.F2T, {
                          angle: _ ? 180 : 0,
                        }),
                      }),
                    }),
              _ = _
                ? null
                : (0, _.jsx)("div", {
                    onClick: () => _(!1),
                    className: _().CollapseButton,
                    children: (0, _.jsx)("div", {
                      style: {
                        marginTop: `${_}px`,
                      },
                      className: _().DesktopButton,
                      children: (0, _.jsx)(_.i6V, {}),
                    }),
                  }),
              _ = _.Get().GetDisplay() != "desktop_navigation" ? _ : _,
              _ = _
                ? void 0
                : {
                    top: `${_}px`,
                  },
              _ = (0, _._)();
            let _;
            switch (_.Get().GetDisplay()) {
              case "event_filter":
                _ = (0, _.jsx)(_, {
                  bUserIsLoggedIn: _,
                  fnOnFilterChange: _,
                });
                break;
              case "browse_curator":
                _ = (0, _.jsx)(_, {});
                break;
              case "desktop_navigation":
                _ = (0, _.jsx)(_, {
                  ..._,
                  fnOpenFilterSettings: _,
                });
                break;
            }
            return (0, _.jsx)(_.Fragment, {
              children: (0, _.jsx)(_._, {
                className: (0, _._)(
                  _().SidebarContainer,
                  _ && _().SidebarCollapsed,
                ),
                style: _,
                "flow-children": "column",
                children: _
                  ? _
                  : (0, _.jsxs)("div", {
                      className: _().Sidebar,
                      children: [
                        _,
                        _,
                        (0, _.jsx)("div", {
                          className: _().ControlPageContainer,
                          children: _,
                        }),
                      ],
                    }),
              }),
            });
          }),
          _ = (0, _._)((_) => {
            const { bShouldIncludeLegalFooter: _, bShowUpcoming: _ } = _,
              _ =
                "Responsive_RequestMobileView" in window &&
                window.Responsive_RequestMobileView,
              _ = (0, _._)();
            return (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)("div", {
                  className: _().SidebarBackground,
                  children: (0, _.jsx)(_.Qte, {}),
                }),
                (0, _.jsx)("div", {
                  className: _().SidebarTitle,
                  children: (0, _._)(
                    "#EventCalendar_Title",
                    (0, _.jsx)("br", {}),
                  ),
                }),
                (0, _.jsx)(_, {
                  bIsUpcoming: _,
                }),
                (0, _.jsx)(_, {}),
                (0, _.jsx)("div", {
                  className: _().SidePanelGameSearch,
                  children: (0, _.jsx)(_, {
                    label: (0, _._)("#EventCalendar_UniversalSearch"),
                  }),
                }),
                (0, _.jsx)(_, {
                  bIsUpcoming: _,
                }),
                !_ &&
                  (0, _.jsx)("div", {
                    className: _().FilterSettingsCtn,
                    children: (0, _.jsxs)("div", {
                      className: (0, _._)(
                        _().FilterLink,
                        _().OpenFilterSettings,
                      ),
                      onClick: () => _.fnOpenFilterSettings(!0),
                      children: [
                        (0, _.jsx)(_.wB_, {}),
                        (0, _._)("#EventCalendar_EditFilters"),
                      ],
                    }),
                  }),
                _ &&
                  (0, _.jsx)("div", {
                    className: (0, _._)(
                      _().SidebarLink,
                      _().ForceResponsiveLink,
                    ),
                    onClick: _,
                    children: (0, _._)("#EventCalendar_ShowResponsiveView"),
                  }),
                _ && (0, _.jsx)(_, {}),
              ],
            });
          });
        let _ = class extends _.Component {
          DecorateSearchSuggestion(_, _) {
            if (_ && _._) {
              let _ = "";
              return (
                _.corpus == "curators"
                  ? (_ = "group/" + _._)
                  : _.corpus == "games" &&
                    ((0, _._)(
                      (0, _._)(_.type),
                      "Unexpected app type " + _.type,
                    ),
                    (_ = "app/" + _._)),
                (0, _.jsx)(
                  _._,
                  {
                    href: `/${(0, _._)()}/${_}/`,
                    children: _,
                  },
                  `suggestion-${_._}`,
                )
              );
            }
            return _;
          }
          render() {
            const _ = ["games", "curators"];
            return (0, _.jsx)(_, {
              strLabel: this.props.label,
              fnOnSelected: () => {},
              fnDecorateSuggestion: this.DecorateSearchSuggestion,
              rgCorporaToSearch: _,
              focusOnMount: this.props.focusOnMount,
            });
          }
        };
        _ = _([_._], _);
        const _ = (_) => {
          const { strLabNumber: _, strForumURL: _ } = _,
            _ = Config.STORE_BASE_URL + "labs";
          return jsxs("div", {
            className: styles.SideSteamLabsBannerCtn,
            children: [
              jsxs("div", {
                className: styles.SteamLabsIdentifiers,
                children: [
                  jsx("a", {
                    className: styles.SteamLabsName,
                    href: _,
                    target: Config.IN_CLIENT ? void 0 : "_blank",
                    children: Localize("#SteamLabs"),
                  }),
                  jsx("div", {
                    className: styles.SteamLabsNumber,
                    children: Localize("#SteamLabs_ExperimentNumber", _),
                  }),
                ],
              }),
              jsx("a", {
                className: styles.SteamLabsButton,
                href: _,
                target: Config.IN_CLIENT ? void 0 : "_blank",
                children: jsx(SVG.ChatBubble, {}),
              }),
            ],
          });
        };
        function _() {
          if (!(0, _._)().BIsGlobalCalendar() || !_._.logged_in) return;
          const _ =
              (0, _._)().GetStoreInitializationTimestamp().getTime() / 1e3,
            _ = (0, _._)().GetCurrentlyLoadedEventCount(_);
          return _
            ? (0, _._)().BHitEventHorizon("forward")
              ? String(_.nCount)
              : _.nCount + "+"
            : void 0;
        }
        function _(_, _) {
          const _ = (0, _._)(_);
          if (((0, _._)(!!_, "Must define collection " + _), !_)) return null;
          let _ = (0, _._)().GetCollectionID() == _,
            _;
          switch (_) {
            case _._.Default:
              _ = (0, _._)().BIsGlobalCalendar() && !_;
              break;
            case _._.Upcoming:
              (_ = (0, _._)().BIsGlobalCalendar() && _), (_ = _());
              break;
          }
          return {
            name: _.strName,
            shortName: _.strShortName,
            key: _,
            url: _.strUrl,
            subtitle: _.strSubtitle,
            onPage: _,
            count: _,
            bValveOnly: _.bIsValveOnly,
          };
        }
        function _(_, _) {
          const _ = new Array();
          return _.push(_(_._.Default, _)), _.push(_(_._.Upcoming, _)), _;
        }
        function _(_, _) {
          const _ = new Array();
          return (
            _.push(_(_._.Featured, _)),
            _.push(_(_._.Steam, _)),
            _._.GetTimeNowWithOverride() < 1668160800 &&
              _.push(_(_._.Halloween, _)),
            _
          );
        }
        function _(_, _) {
          const _ = (0, _._)().BIsCollectionCalendar(),
            _ = (0, _._)(),
            _ = new Array();
          if (((0, _._)() && _.push(_(_._.Press, _)), _))
            for (const _ of _.GetVisibleSpecialEvents())
              _.push({
                name: (0, _._)(_.sLocToken),
                url: _.newshubUrl,
                onPage: !1,
                key: "event_" + _.sLocToken,
              });
          return (
            _.push(_(_._.Dev_Sales, _)),
            _._.is_support &&
              (_.push(_(_._.Dev_All, _)),
              _.push(_(_._.Dev_AssociatedPress, _))),
            _
          );
        }
        const _ = (_) => {
          const {
            shortName: _,
            name: _,
            url: _,
            onPage: _,
            count: _,
            bValveOnly: _,
          } = _.element;
          return !_._.is_support && _
            ? null
            : (0, _.jsx)(_._, {
                _: "/" + _,
                children: (0, _.jsxs)("div", {
                  className: (0, _._)(
                    _().MobileNavButton,
                    _ && _().MobileNavButtonActive,
                  ),
                  children: [
                    _ || _,
                    _ &&
                      (0, _.jsx)("div", {
                        className: _().MobileNavCount,
                        children: _,
                      }),
                  ],
                }),
              });
        };
        let _ = class extends _.Component {
          state = {
            bSearchExpanded: !1,
          };
          onExpandSearch(_) {
            this.setState({
              bSearchExpanded: _,
            });
          }
          render() {
            const { bSearchExpanded: _ } = this.state,
              _ = _(this.props.bIsUpcoming, !1),
              _ = _(this.props.bIsUpcoming, !1),
              _ = _(this.props.bIsUpcoming, !1),
              _ = [..._, ..._, ..._];
            return (0, _.jsxs)("div", {
              style: {
                transform: `translateY(${this.props.nTopOffset}px)`,
              },
              className: _().MobileNavBannerCtn,
              children: [
                (0, _.jsx)("div", {
                  className: _().SettingsPanel,
                  onClick: this.props.fnToggleCollapsed,
                  children: (0, _.jsx)(_.wB_, {}),
                }),
                (0, _.jsx)("div", {
                  className: (0, _._)(
                    _().SettingsPanel,
                    _ && _().SearchExpanded,
                  ),
                  onClick: () => this.onExpandSearch(!_),
                  children: (0, _.jsx)(_.eSy, {}),
                }),
                _ &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)("div", {
                        className: _().SearchDismiss,
                        onClick: () => this.onExpandSearch(!1),
                      }),
                      (0, _.jsx)("div", {
                        className: (0, _._)(
                          _().SearchBox,
                          _ && _().SearchExpanded,
                        ),
                        children: (0, _.jsx)(_, {
                          focusOnMount: !0,
                        }),
                      }),
                    ],
                  }),
                (0, _.jsx)(_._, {
                  className: _().MobileNavHScroll,
                  children: (0, _.jsx)("div", {
                    className: _().MobileNavBannerList,
                    children: _.map((_) =>
                      (0, _.jsx)(
                        _,
                        {
                          element: _,
                        },
                        _.key,
                      ),
                    ),
                  }),
                }),
              ],
            });
          }
        };
        _([_._], _.prototype, "onExpandSearch", 1), (_ = _([_._], _));
        function _(_) {
          const {
            key: _,
            name: _,
            subtitle: _,
            url: _,
            onPage: _,
            count: _,
            bValveOnly: _,
            icon: _,
          } = _.element;
          return !_._.is_support && _
            ? null
            : (0, _.jsx)(_._, {
                href: "/" + _,
                children: (0, _.jsxs)("div", {
                  className: (0, _._)({
                    [_().NewsChannel]: !0,
                    [_().NewsChannelOnPage]: _,
                    [_().ValveOnlyBackground]: _,
                  }),
                  children: [
                    !!_ &&
                      (0, _.jsx)("img", {
                        className: (0, _._)(_().NewsChannelIcon),
                        src: _,
                      }),
                    (0, _.jsxs)("div", {
                      className: _().NewsChannelText,
                      children: [
                        (0, _.jsxs)("div", {
                          className: _().NewsChannelTitle,
                          children: [_ && "(VO) ", _],
                        }),
                        _ &&
                          (0, _.jsx)("div", {
                            className: _().NewsChannelSubtitle,
                            children: _,
                          }),
                      ],
                    }),
                    _ !== void 0 &&
                      (0, _.jsx)("div", {
                        className: _().NewsChannelCount,
                        children: _,
                      }),
                  ],
                }),
              });
        }
        let _ = class extends _.Component {
          render() {
            const _ = _(this.props.bIsUpcoming, !1),
              _ = _(this.props.bIsUpcoming, !1);
            return (0, _.jsxs)("div", {
              className: _().NewsChannelGroup,
              children: [
                (0, _.jsx)("div", {
                  className: _().NewsChannelListTitle,
                  children: (0, _._)("#EventCalendar_NewsChannels"),
                }),
                (0, _.jsx)("div", {
                  className: _().NewsChannelList,
                  children: _.map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        element: _,
                      },
                      _.key,
                    ),
                  ),
                }),
                (0, _.jsx)("div", {
                  className: _().NewsChannelListTitle,
                  children: (0, _._)("#EventCalendar_NewsChannels_Global"),
                }),
                (0, _.jsx)("div", {
                  className: _().NewsChannelList,
                  children: _.map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        element: _,
                      },
                      _.key,
                    ),
                  ),
                }),
              ],
            });
          }
        };
        _ = _([_._], _);
        function _(_) {
          const { bIsUpcoming: _ } = _,
            _ = _(_, !1);
          return _ && _.length > 0
            ? (0, _.jsxs)("div", {
                className: (0, _._)(_().NewsChannelGroup, _().DiscoverGroup),
                children: [
                  (0, _.jsx)("div", {
                    className: _().NewsChannelListTitle,
                    children: (0, _._)("#EventCalendar_NewsChannels_Discover"),
                  }),
                  (0, _.jsx)("div", {
                    className: _().NewsChannelList,
                    children: _.map((_) =>
                      (0, _.jsx)(
                        _,
                        {
                          element: _,
                        },
                        _.key,
                      ),
                    ),
                  }),
                ],
              })
            : null;
        }
        function _(_) {
          return _.BIsCollectionCalendar() && _.GetCollectionID() === "steam";
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        const _ = (0, _._)((_) => {
          const { eventModel: _, calendarEvent: _, history: _ } = _,
            _ = (_) => {
              let _ = _.GetEntityName();
              (0, _._)(
                (0, _.jsx)(_._, {
                  strTitle: (0, _._)("#EventCalendar_MuteApp_Title", _),
                  strDescription: (0, _._)("#EventCalendar_MuteApp_details", _),
                  onOK: () =>
                    (0, _._)().UpdateEventBlockFromCalendarEvent(_, !1),
                  children: (0, _.jsx)("a", {
                    href: _._.STORE_BASE_URL + "account/emailoptout/app",
                    target: _._.IN_CLIENT ? void 0 : "_blank",
                    children: (0, _._)("#EventCalendar_ManageMutedSources"),
                  }),
                }),
                (0, _._)(_),
              );
            },
            _ = () => {
              (0, _._)().UpdateEventBlockFromCalendarEvent(_, !0);
            },
            _ = () => {
              const _ = _().MapClanEventTypeToGroup(_.GetEventType());
              _().SetEventTypeGroupAllowed(_, !1);
            },
            _ = () => (0, _._)().m_visibilityStore,
            _ = (_, _, _, _ = !0) => {
              _().BIsGameSourceAllowed(_) &&
                (_ &&
                  _.push(
                    (0, _.jsx)(
                      _._,
                      {
                        disabled: !0,
                        onSelected: () => {},
                        children: (0, _._)("#EventCalender_Reason_" + _),
                      },
                      `item-source-${_}-${_}`,
                    ),
                  ),
                _.push(
                  (0, _.jsx)(
                    _._,
                    {
                      onSelected: () => {
                        _().SetGameSourceAllowed(_, !1);
                      },
                      children: (0, _._)("#EventCalender_Hide_Reason_" + _),
                    },
                    `item-hidesource-${_}-${_}`,
                  ),
                ));
            },
            _ = (0, _._)(_, _._.k_eStoreNewsHub, "allowRelative"),
            _ = () => {
              _.startsWith("http") ? (window.location.href = _) : _.push(_);
            },
            _ = (_) => {
              let _ = [];
              const _ = _.GetSource(),
                _ = _.unique_id,
                _ = (0, _._)(),
                _ = (0, _._)();
              _.BIsGlobalCalendar() &&
                (_ &&
                  _ & _._.k_eLibrary &&
                  (_().BIsGameSourceAllowed(_._.k_ERecent) && _.appInfo
                    ? (_.push(
                        (0, _.jsx)(
                          _._,
                          {
                            disabled: !0,
                            onSelected: () => {},
                            children: (0, _._)(
                              "#EventCalender_LastPlayed",
                              (0, _._)(
                                _._.GetTimeNowWithOverride() -
                                  _.appInfo.last_played,
                              ),
                            ),
                          },
                          `item-source-${_}-lastplayed`,
                        ),
                      ),
                      _(_, _._.k_ERecent, _, !1))
                    : _(_, _._.k_ELibrary, _)),
                _ && _ & _._.k_eWishlist && _(_, _._.k_EWishlist, _),
                _ && _ & _._.k_eFollowing && _(_, _._.k_EFollowing, _),
                !_ && _ && _ & _._.k_eCurator && _(_, _._.k_ECurator, _),
                _ && _ & _._.k_eRecommended && _(_, _._.k_ERecommended, _),
                _ && _ & _._.k_eSteam && _(_, _._.k_ESteam, _),
                _ && _ & _._.k_eFeatured && _(_, _._.k_EFeatured, _)),
                _.push(
                  (0, _.jsx)(
                    _._,
                    {
                      onSelected: _,
                      children: (0, _._)(
                        "#EVentCalendar_Hide_EventType",
                        (0, _._)(
                          "#EventCalendar_EventTypeGroup_" +
                            _().MapClanEventTypeToGroup(_.GetEventType()),
                        ),
                      ),
                    },
                    _.GID + "hidetype",
                  ),
                ),
                _._.logged_in &&
                  (_._.Get().BIsEventBlocked(_)
                    ? _.push(
                        (0, _.jsx)(
                          _._,
                          {
                            onSelected: _,
                            children: (0, _.jsx)(_._, {
                              toolTipContent: (0, _._)(
                                "#EventCalendar_UnMuteApp_ttip",
                              ),
                              children: (0, _._)(
                                "#EventCalendar_UnMuteApp_Title",
                                _.GetEntityName(),
                              ),
                            }),
                          },
                          _.GID + "unmuteapp",
                        ),
                      )
                    : _.push(
                        (0, _.jsx)(
                          _._,
                          {
                            onSelected: _,
                            children: (0, _.jsx)(_._, {
                              toolTipContent: (0, _._)(
                                "#EventCalendar_MuteApp_ttip",
                              ),
                              children: (0, _._)(
                                "#EventCalendar_MuteApp_Title",
                                _.GetEntityName(),
                              ),
                            }),
                          },
                          _.GID + "muteapp",
                        ),
                      )),
                !_.BIsOGGEvent() &&
                  !_ &&
                  _.push(
                    (0, _.jsx)(_, {
                      eventModel: _,
                      calendarEvent: _,
                    }),
                  ),
                _.BIsSingleSourceCalendar() ||
                  _.push(
                    (0, _.jsx)(
                      _._,
                      {
                        onSelected: _,
                        children: (0, _._)(
                          "#EventCalendar_Goto_SpecificCalendar",
                          _.GetEntityName(),
                        ),
                      },
                      _.GID + "goto",
                    ),
                  ),
                _.appid &&
                  _.push(
                    (0, _.jsx)(
                      _._,
                      {
                        onSelected: () =>
                          (window.location.href = (0, _._)(
                            _._.STORE_BASE_URL + "app/" + _.appid,
                          )),
                        children: (0, _._)("#EventDisplay_ViewStorePage"),
                      },
                      _.GID + "goto",
                    ),
                  ),
                (0, _._)(
                  (0, _.jsx)(_._, {
                    children: _,
                  }),
                  _,
                );
            };
          return (0, _.jsx)("div", {
            className: (0, _._)(_().FooterStat, _().Options),
            onClick: _,
            children: (0, _.jsx)(_.faJ, {}),
          });
        });
        function _(_) {
          const { eventModel: _, calendarEvent: _ } = _,
            _ = (0, _._)(_.clanSteamID.GetAccountID()),
            { elDialogElement: _, fnShowLogonDialog: _ } = (0, _._)(),
            _ = _.useCallback(async () => {
              _._.logged_in
                ? (await _._.Get().UpdateFollowOrIgnoreCurator(
                    _.clanSteamID,
                    !0,
                    !_,
                  ),
                  _(!!_))
                : _();
            }, [_, _.clanSteamID, _]);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(
                _._,
                {
                  onSelected: _,
                  children: (0, _.jsx)(_._, {
                    toolTipContent: (0, _._)(
                      _
                        ? "#EventCalendar_UnFollowCurator_ttip"
                        : "#EventCalendar_FollowCurator_ttip",
                    ),
                    children: (0, _._)(
                      _
                        ? "#EventCalendar_UnFollowCurator"
                        : "#EventCalendar_FollowCurator",
                      _.GetEntityName(),
                    ),
                  }),
                },
                _.GID + "followcurator",
              ),
              _,
            ],
          });
        }
        const _ = (0, _._)(_);
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              eventModel: _,
              calendarEvent: _,
              bSuppressHoverEffects: _,
              mode: _,
              bHideGameTitle: _,
              fnOnClicked: _,
            } = _,
            [_, _] = _.useState(!1),
            _ = (0, _._)(),
            _ = (0, _._)(_.GetAppIDOrReferenceAppID());
          (0, _._)(_);
          const _ = (0, _._)(_);
          (0, _._)(_.clanInfo?.clanid);
          const _ = (0, _.sfN)(_._.LANGUAGE),
            _ = "capsule",
            [_, _, _, _, _, _, _, _, _, _, _] = (0, _._)(() => [
              _.has_live_stream,
              _.GetEventType(),
              _.GetAllTags(),
              _.GetCategoryAsString(),
              _.GetNameWithFallback(_),
              _.BImageNeedScreenshotFallback(_, _),
              _.appid,
              _.GID,
              _.GetStartTimeAndDateUnixSeconds(),
              _.GetSubTitleWithLanguageFallback(_),
              _.GetSummaryWithFallback(_),
            ]),
            [_, _] = _.useState(() =>
              (0, _._)() && _ == _.zeJ ? _._.full : _._.capsule_main,
            ),
            _ = (0, _._)(),
            _ = !!(_ && _ && _),
            _ = (0, _._)(_ ? void 0 : _, _, _, _, _) ?? _,
            _ = _(_, _),
            _ = (0, _._)(_),
            _ = _()[`EventType${_}`],
            _ = _.map((_) => _()[`Tag-${_}`]),
            _ = (0, _._)(
              _().TileContainer,
              _,
              _ && _().TileVideoIcon,
              _ ? _().DisableHovers : _().EnableHovers,
              _ && _().VideoPlayerReady,
              _ && _().HasVideo,
              _ && _().HasBeenRead,
              _ === "wide" && _().WideMode,
              _ === "carousel" && _().CarouselMode,
              _ === "upcoming" && _().UpcomingMode,
              ..._,
            );
          let _ = _,
            _ = _;
          _ === _ && (_ = void 0), _ === _ && (_ = void 0);
          const _ = (0, _._)(_),
            _ = (0, _.jsx)(_, {
              setVideoPlayerReady: _,
              calendarEvent: _,
              eventModel: _,
              mode: _,
              artworkType: _,
              strCapsuleImgURLForBackground: _,
              fnSetCoverSize: _,
            }),
            _ = _ && _ !== "carousel",
            _ = _ && _ != _.zeJ && !_,
            _ = _ && _,
            _ = !_ && _,
            _ = _ !== _.uYK && _ !== _.Fwr && _._.GetTimeNowWithOverride() < _,
            _ = _ !== "wide" || _,
            _ =
              _ &&
              (0, _.jsx)("div", {
                className: (0, _._)(_().ReminderContainer, _ && _().OnlyIcon),
                children: (0, _.jsx)(_._, {
                  eventModel: _,
                  lang: _,
                  bShowStartTime: !0,
                  bOnlyShowIcon: _,
                  bExpandLeft: _,
                }),
              }),
            _ = !!(_ !== _.Fwr && _),
            _ = !!(_ && (!_ || !_(_, _)));
          return (0, _.jsxs)("div", {
            className: _,
            children: [
              (0, _.jsx)(_._, {
                event: _,
                recordNewsHubStats: !0,
              }),
              (0, _.jsx)(_._, {
                eventModel: _,
                route: _._.k_eView,
                children: (0, _.jsxs)("div", {
                  className: _().Tile,
                  onClick: (_) => {
                    _.RecordInteraction(_._.k_eClickThrough),
                      !(0, _._)() &&
                        (_(_), _.stopPropagation(), _.preventDefault());
                  },
                  children: [
                    _ === _.zeJ &&
                      (0, _.jsx)("div", {
                        className: (0, _._)(
                          _().TileBackgroundImage,
                          _ && _().FallbackImage,
                        ),
                        style: {
                          backgroundImage: `url(${_})`,
                        },
                      }),
                    (0, _.jsxs)("div", {
                      className: _().MainContentContainer,
                      children: [
                        _,
                        (0, _.jsxs)("div", {
                          className: _().TileTextContainer,
                          children: [
                            _ == _.Fwr &&
                              (0, _.jsx)("div", {
                                className: _().PatchIconCtn,
                                children: (0, _.jsx)(_.vjL, {}),
                              }),
                            (0, _.jsxs)("div", {
                              className: _().EventTitleCtn,
                              children: [
                                _,
                                !_ &&
                                  (0, _.jsxs)("div", {
                                    className: _().GameSource,
                                    children: [
                                      (0, _.jsx)(_, {
                                        ..._,
                                      }),
                                      _ &&
                                        (0, _.jsx)(_, {
                                          calendarEvent: _,
                                        }),
                                    ],
                                  }),
                                (0, _.jsx)("div", {
                                  className: _().EventName,
                                  children: _,
                                }),
                                (0, _.jsxs)("div", {
                                  className: _().EventTypeAndDateCtn,
                                  children: [
                                    (0, _.jsx)("div", {
                                      className: (0, _._)(
                                        _().TileTextCategoryType,
                                        _,
                                      ),
                                      children: _,
                                    }),
                                    (0, _.jsx)(_, {
                                      eventModel: _,
                                      className: (0, _._)(
                                        _ && _().LeaveRoomForReminder,
                                      ),
                                    }),
                                    _ && _,
                                  ],
                                }),
                                _ &&
                                  (0, _.jsx)("div", {
                                    className: _().EventSubTitle,
                                    children: _,
                                  }),
                                _ &&
                                  (0, _.jsx)("div", {
                                    className: (0, _._)(
                                      _().EventSummaryDefault,
                                      _ ? _().SubTitleShown : "",
                                    ),
                                    children: _,
                                  }),
                              ],
                            }),
                            !_ && _,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, _.jsx)(_, {
                ..._,
              }),
            ],
          });
        }
        function _(_, _) {
          const _ = (_) => _.replace(/\W+/g, "").toLocaleLowerCase(),
            _ = _(_);
          return _(_).startsWith(_);
        }
        function _(_, _) {
          const { video_preview_type: _, video_preview_id: _, type: _ } = _;
          return !(_ === "upcoming" || !_ || _ === _.Fwr || _ !== "youtube");
        }
        function _(_) {
          const { eventModel: _, fnSetVideoStateReady: _, mode: _ } = _,
            { video_preview_id: _, type: _ } = _.eventModel,
            _ = (0, _._)(),
            _ = (0, _.sfN)(_._.LANGUAGE),
            _ = (0, _._)() && _ == _.zeJ ? _._.full : _._.capsule_main,
            _ = (0, _._)(_, "capsule", _, _, !0);
          if (_ === "carousel")
            return (0, _.jsx)(_._, {
              altImgWithFallback: _,
              video: _,
              className: _().YoutubePreviewImage,
            });
          const _ = () => {
            _.RecordInteraction(_._.k_ePlayedVideo), _(!0);
          };
          return (0, _.jsx)(_._, {
            video: _,
            altImgWithFallback: _,
            autoplay: !0,
            autopause: !0,
            showFullscreenBtn: !0,
            controls: !0,
            imageClassnames: _().YoutubePreviewImage,
            onPlayerActivated: _,
            preloadYoutubeScripts: !0,
            playsInline: !0,
          });
        }
        function _(_) {
          const {
              eventModel: _,
              calendarEvent: _,
              mode: _,
              artworkType: _,
              strCapsuleImgURLForBackground: _,
              setVideoPlayerReady: _,
              fnSetCoverSize: _,
            } = _,
            _ = (0, _.sfN)(_._.LANGUAGE),
            _ = _(_, _),
            _ = !_(_, _) && _ !== "upcoming",
            [_, _, _, _, _, _] = (0, _._)(() => [
              _.GetEventType(),
              _.has_live_stream,
              _.has_live_stream,
              _.clanSteamID.GetAccountID(),
              _.GetGameCapsule(),
              _.BImageNeedScreenshotFallback(_, _),
            ]);
          _.useEffect(() => {
            if (_) {
              const _ = new Image();
              (_.src = _),
                (_.onerror = () => {
                  _(_._.full);
                });
            }
          }, [_, _]);
          const [, _] = (0, _._)(_),
            _ = _ && !_.is_ogg;
          let _ = _.GetSummaryWithFallback(_);
          return (
            _.GetSubTitleWithLanguageFallback(_) === _ && (_ = void 0),
            (0, _.jsxs)("div", {
              className: _().CoverImageCtn,
              children: [
                _ &&
                  (0, _.jsx)(_, {
                    eventModel: _,
                    mode: _,
                    calendarEvent: _,
                    fnSetVideoStateReady: _,
                  }),
                _ &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      _ === _.Fwr &&
                        (0, _.jsxs)(_.Fragment, {
                          children: [
                            (0, _.jsx)("div", {
                              className: _().GameCapsuleCtn,
                              children: (0, _.jsx)("div", {
                                className: (0, _._)({
                                  [_().AppBannerLogo]: !0,
                                  [_().FallbackImage]: _,
                                  [_().ClanSource]: _,
                                }),
                                style: {
                                  backgroundImage: `url(${_})`,
                                },
                              }),
                            }),
                            (0, _.jsx)("div", {
                              className: _().GameShortDescription,
                              children: _,
                            }),
                          ],
                        }),
                      _ !== _.Fwr &&
                        (0, _.jsxs)("div", {
                          className: (0, _._)({
                            [_().EventCapsuleCtn]: !0,
                            [_().LiveBroadcastPreview]: _,
                          }),
                          children: [
                            (0, _.jsx)("div", {
                              className: (0, _._)({
                                [_().TileImage]: !0,
                                [_().FallbackImage]: _,
                                [_().ClanSource]: _,
                              }),
                              style: {
                                backgroundImage: `url(${_})`,
                              },
                            }),
                            _ &&
                              (0, _.jsx)("div", {
                                className: _().TileCoverImagePlayable,
                              }),
                            _ &&
                              (0, _.jsx)("div", {
                                className: _().TileCoverLiveIcon,
                                children: (0, _._)("#home_page_live_broadcast"),
                              }),
                            _ &&
                              (0, _.jsx)("div", {
                                className: "VideoHintText",
                                children: (0, _._)(
                                  "#EventCalendar_WatchLiveBroadcast",
                                ),
                              }),
                          ],
                        }),
                    ],
                  }),
              ],
            })
          );
        }
        const _ = (0, _._)((_) => {
            const {
                eventModel: _,
                calendarEvent: _,
                bSuppressHoverEffects: _,
                history: _,
              } = _,
              _ = (0, _._)(_, _._.k_eStoreNewsHub, "allowRelative"),
              _ = (_) => {
                _.startsWith("http") ? (window.location.href = _) : _.push(_),
                  _.stopPropagation(),
                  _.preventDefault();
              },
              _ = _.GetEntityName(),
              _ = _.GetGameIcon(),
              _ = (0, _._)(
                _().GameTitleContainer,
                _ ? _().DisableHovers : _().EnableHovers,
              );
            return (0, _.jsx)(_._, {
              children: (0, _.jsx)("div", {
                className: _().TileTextHeader,
                children: (0, _.jsxs)("div", {
                  className: _,
                  onClick: _,
                  children: [
                    (0, _.jsx)("img", {
                      className: _().AppIcon,
                      src: _,
                    }),
                    (0, _.jsxs)("div", {
                      className: _().TileTextAppName,
                      children: [_, " "],
                    }),
                  ],
                }),
              }),
            });
          }),
          _ = (0, _._)(_),
          _ = (0, _._)((_) => {
            const { eventModel: _, calendarEvent: _, className: _ } = _,
              _ = (0, _._)().GetStoreInitializationTimestamp().getTime() / 1e3,
              _ = _ ? _.GetStartTimeAndDateUnixSeconds() : _.start_time,
              _ = _ && (0, _._)(_.type) && _.GetEndTimeAndDateUnixSeconds();
            if (_ && _ < _ && _ < _) {
              const _ = _ - _,
                _ = (0, _._)(_, !0);
              return (0, _.jsxs)("div", {
                className: (0, _._)(_().LiveText, _),
                children: [
                  (0, _.jsx)(_._, {
                    rtFullDate: _,
                    stylesmodule: _(),
                    children: (0, _.jsx)("div", {
                      className: _().LiveNow,
                      children: (0, _._)("#EventCalendar_LiveNow"),
                    }),
                  }),
                  (0, _.jsx)(_._, {
                    rtFullDate: _,
                    stylesmodule: _(),
                    children: (0, _._)("#EventCalendar_TimeLeft", _),
                  }),
                ],
              });
            } else if (_ < _) {
              const _ = _ - _,
                _ = _ < 24 * 3600 ? (0, _._)(_, !1, !0) : (0, _._)(_);
              return (0, _.jsx)(_._, {
                className: _,
                rtFullDate: _,
                stylesmodule: _(),
                children: (0, _.jsx)("div", {
                  className: _().PastDateText,
                  children: _,
                }),
              });
            } else {
              const _ = new Date(_ * 1e3);
              _.setHours(0, 0, 0, 1);
              const _ = _.getTime() / 1e3,
                _ = Math.floor((_ - _) / (24 * 3600)),
                _ = _ > 1 && _ <= 5 ? (0, _._)(new Date(_ * 1e3)) : (0, _._)(_),
                _ = (0, _._)(_);
              return (0, _.jsx)(_._, {
                className: _,
                rtFullDate: _,
                stylesmodule: _(),
                children: (0, _.jsx)("div", {
                  className: _().FutureDateText,
                  children: (0, _._)(
                    "#EventCalendar_WillStartAtDateTime",
                    _,
                    _,
                  ),
                }),
              });
            }
          }),
          _ = (0, _._)((_) => {
            const _ = _.calendarEvent.GetSource(),
              _ = [],
              _ = (0, _._)().m_visibilityStore;
            _ & _._.k_eLibrary && _.BIsGameSourceAllowed(_._.k_ELibrary)
              ? _.push({
                  _: _._.k_eLibrary,
                  name: "#EventCalendar_GameSource_inLibrary",
                  ttip: "#EventCalendar_GameSource_EventExplanation_ttip_library",
                  styles: _().LibrarySource,
                })
              : _ & _._.k_eWishlist && _.BIsGameSourceAllowed(_._.k_EWishlist)
                ? _.push({
                    _: _._.k_eWishlist,
                    name: "#EventCalendar_GameSource_onWishlist",
                    ttip: "#EventCalendar_GameSource_EventExplanation_ttip_wishlist",
                    styles: _().WishlistSource,
                  })
                : _ & _._.k_eRecommended &&
                    _.BIsGameSourceAllowed(_._.k_ERecommended)
                  ? _.push({
                      _: _._.k_eRecommended,
                      name: "#EventCalendar_GameSource_recommended_Verbose",
                      ttip: "#EventCalendar_GameSource_EventExplanation_ttip_recommended",
                      styles: _().RecommendedSource,
                    })
                  : _ & _._.k_eFeatured &&
                    _.BIsGameSourceAllowed(_._.k_EFeatured) &&
                    _.push({
                      _: _._.k_eFeatured,
                      name: "#EventCalendar_GameSource_featured",
                      ttip: "#EventCalendar_GameSource_ttip_featured",
                      styles: _().FeaturedSource,
                    }),
              _ & _._.k_eFollowing &&
                _.BIsGameSourceAllowed(_._.k_EFollowing) &&
                _.push({
                  _: _._.k_eFollowing,
                  name: "#EventCalendar_GameSource_followed",
                  ttip: "#EventCalendar_GameSource_EventExplanation_ttip_following",
                  styles: _().FollowingSource,
                });
            const _ = _.map((_, _) => {
              const _ = _.calendarEvent.unique_id;
              return _(
                `item-source-${_}-${_._}`,
                _.name,
                _.ttip,
                _.styles,
                _ + 1 < _.length,
              );
            });
            return (0, _.jsx)("div", {
              className: _().SourceList,
              children: _,
            });
          }),
          _ = (_, _, _, _, _) =>
            (0, _.jsx)(
              _._,
              {
                className: (0, _._)(_().Source, _),
                toolTipContent: (0, _._)(_),
                children: (0, _._)(_) + (_ ? ", " : ""),
              },
              _,
            );
        function _(_) {
          return _._.logged_in
            ? _._.is_limited
              ? _().Vote_LimitedUser
              : _ === "up"
                ? _().Vote_Positive
                : _ === "down"
                  ? _().Vote_Negative
                  : _().Vote_Ready
            : _().Vote_NotLoggedIn;
        }
        function _(_) {
          const { eventModel: _ } = _,
            _ = (0, _._)(),
            { myVote: _, Vote: _ } = (0, _._)(_, {
              bAsk: !1,
            }),
            [, _] = (0, _._)(_.clanSteamID.GetAccountID()),
            _ = () => {
              _ !== "up" &&
                (0, _._)() &&
                (_("up"), _.RecordInteraction(_._.k_eThumbsUp));
            },
            _ = () => {
              _.RecordInteraction(_._.k_eDiscussions);
            },
            [_, _, _] = (0, _._)(() => [
              Math.max(0, _.nVotesUp - _.nVotesDown),
              _.GetDiscussionURL(_?.vanity_url),
              _.nCommentCount,
            ]),
            _ = _(_),
            _ = !(0, _._)() && _,
            _ =
              _.live_stream_viewer_count > 0
                ? _.live_stream_viewer_count
                : void 0;
          return (0, _.jsx)("div", {
            className: _().Footer,
            children: (0, _.jsxs)("div", {
              className: _().FooterRightSide,
              children: [
                !!_ &&
                  (0, _.jsx)("div", {
                    className: _().TileViewerCount,
                    children: (0, _._)(_),
                  }),
                (0, _.jsxs)("div", {
                  className: (0, _._)(_().FooterStat, _().Vote, _),
                  onClick: _,
                  children: [
                    (0, _.jsx)(_.bfp, {
                      className: _().RateIcon,
                    }),
                    (0, _.jsx)("span", {
                      children: (0, _._)(Number(_)),
                    }),
                  ],
                }),
                _ &&
                  (0, _.jsx)("div", {
                    className: _().FooterStat,
                    children: (0, _.jsxs)("a", {
                      href: _,
                      className: _().CommentIconCtn,
                      target: "_blank",
                      onClick: _,
                      children: [
                        (0, _.jsx)(_._h6, {
                          className: _().CommentIcon,
                        }),
                        (0, _.jsx)("span", {
                          children: (0, _._)(Number(_)),
                        }),
                      ],
                    }),
                  }),
                (0, _.jsx)(_, {
                  ..._,
                }),
              ],
            }),
          });
        }
        var _ = __webpack_require__("chunkid");
        function _(_, _, _) {
          const _ = Array();
          _.push(_.QueueLoadPartnerEvent(_.clanid, _.unique_id)),
            _.appid && _.push(_._.Get().QueueAppRequest(_.appid, _)),
            _.clanInfo &&
              _.push(_._.LoadClanInfoForClanAccountID(_.clanInfo.clanid)),
            Promise.all(_).then(() => {
              const _ = _.GetClanEventModel(_.unique_id);
              _ &&
              _.appid &&
              _.appid != _.appid &&
              !_._.Get().BHasApp(_.appid, _)
                ? _._.Get().QueueAppRequest(_.appid, _).then(_)
                : _();
            });
        }
        const _ = {
          include_assets: !0,
          include_release: !0,
          include_screenshots: !0,
        };
        function _(_, _) {
          const _ = _.GetClanEventModel(_.unique_id);
          return !(
            !_ ||
            (_.appid && !_._.Get().BHasApp(_.appid, _)) ||
            (_.appid && _.appid != _.appid && !_._.Get().BHasApp(_.appid, _)) ||
            (_.clanInfo && !_._.HasLoadedClanAccountID(_.clanInfo.clanid))
          );
        }
        const _ = (0, _._)((_) => {
            const {
                calendarEvent: _,
                partnerEventStore: _,
                mode: _,
                forceParentUpdate: _,
              } = _,
              _ = "500px",
              _ = _()[`EventType${_.event_type}`],
              _ = (0, _._)(_().TileContainer, _),
              _ = _ === "carousel",
              _ = () => {
                _(_, _, _);
              },
              _ = (0, _._)(
                {
                  onEnter: _,
                },
                {
                  rootMargin: `${_} 0px ${_} 0px`,
                },
              );
            return (0, _.jsxs)("div", {
              className: _,
              ref: _,
              children: [
                (0, _.jsx)("div", {
                  className: (0, _._)(_().Tile, _().LoadingTile),
                  children: _ && (0, _.jsx)(_._, {}),
                }),
                (0, _.jsx)("div", {
                  className: _().Footer,
                }),
              ],
            });
          }),
          _ = (0, _._)((_) => {
            const { partnerEventStore: _, calendarEvent: _, ..._ } = _,
              _ = _.GetClanEventModel(_.unique_id),
              _ = _(_, _),
              _ = (0, _._)();
            return _
              ? (0, _.jsx)(_, {
                  eventModel: _,
                  calendarEvent: _,
                  ..._,
                })
              : (0, _.jsx)(_, {
                  calendarEvent: _,
                  partnerEventStore: _,
                  ..._,
                  forceParentUpdate: _,
                });
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = "SteamNewsHub_SuggestCuratorsDismissed";
        function _() {
          const _ = JSON.parse(localStorage.getItem(_));
          return _ && _.bDismissed;
        }
        function _() {
          const _ = _._.GetELanguageFallbackOrder();
          _.find((_) => _ === _.Bhc) === void 0 && _.push(_.Bhc);
          const _ = new Array();
          for (const _ of _) {
            const _ = _.Get().GetCuratorsForLang(_);
            if (!_) continue;
            const _ = _.filter(
              (_) => !_._.Get().BIsIgnoringCurator(_.clanAccountID),
            );
            (0, _._)(_), _.push(..._);
          }
          return _;
        }
        function _(_) {
          const { bCanDismiss: _ } = _,
            [_, _] = (0, _.useState)(() => _()),
            [_, _] = (0, _.useState)(0),
            [_, _] = (0, _.useState)(null),
            _ = (0, _.useRef)(void 0),
            _ = (0, _._)("CuratorFeedSuggestRow"),
            _ = (0, _.useCallback)(() => {
              if (!_.token.reason)
                if (!_.current) _(0);
                else {
                  const _ = Math.floor(
                    Math.min(_.current.clientWidth, window.innerWidth) / 118,
                  );
                  _(Math.max(_ - 1, 0));
                }
            }, [_.token.reason]);
          if (
            ((0, _.useEffect)(() => _(), [_]),
            (0, _.useEffect)(
              () => (
                _ == null &&
                  (async () => (
                    await _.Get().WaitForInitialLoad(), _.token.reason || _(_)
                  ))(),
                window.addEventListener("resize", _),
                () => window.removeEventListener("resize", _)
              ),
              [_.token.reason, _, _],
            ),
            _)
          )
            return null;
          let _ = _?.slice(0, _).map((_) => {
            const _ = _._.GetClanInfoByClanAccountID(_.clanAccountID);
            return _
              ? (0, _.jsx)(
                  "div",
                  {
                    className: _().ClanInfo,
                    children: (0, _.jsx)(_, {
                      clanInfo: _,
                      layout: "icon",
                    }),
                  },
                  _.clanAccountID,
                )
              : null;
          });
          return (0, _.jsx)(_._, {
            children: (0, _.jsx)("div", {
              className: _().FeedSuggestContainerBG,
              children: (0, _.jsxs)("div", {
                className: _().FeedSuggestContainer,
                children: [
                  (0, _.jsx)("div", {
                    className: _().FeedSuggestCaption,
                    children: (0, _._)("#EventCurator_FeedCaption_Long"),
                  }),
                  _ &&
                    (0, _.jsx)("div", {
                      className: _().DismissButton,
                      onClick: (_) => {
                        (0, _._)(
                          (0, _.jsx)(_._, {
                            strTitle: (0, _._)("#EventCurator_DismissTitle"),
                            strDescription: (0, _._)(
                              "#EventCurator_DismissBody",
                            ),
                            onOK: () => {
                              localStorage.setItem(
                                _,
                                JSON.stringify({
                                  bDismissed: !0,
                                }),
                              ),
                                _.token.reason || _(!0);
                            },
                          }),
                          (0, _._)(_),
                        );
                      },
                      children: (0, _.jsx)(_.i6V, {}),
                    }),
                  (0, _.jsxs)(_._, {
                    className: _().RowContainer,
                    ref: _,
                    "flow-children": "row",
                    children: [
                      _ || (0, _.jsx)(_._, {}),
                      (0, _.jsx)("div", {
                        className: _().BrowseMore,
                        onClick: _.Get().ShowBrowseCurator,
                        children: (0, _._)("#EventCurator_BrowseMore"),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = (_) => {
          const {
              titleToken: _,
              subtitleToken: _,
              backgroundImg: _,
              headerImg: _,
              headerURL: _,
            } = _,
            _ = _
              ? {
                  backgroundImage: _,
                }
              : {};
          return (0, _.jsx)("div", {
            className: (0, _._)(
              _().CommonHeaderStyles,
              _().SimpleTitleHeaderCtn,
              _.largeHeader && _().LargeHeader,
            ),
            style: _,
            children: (0, _.jsxs)("div", {
              className: (0, _._)(
                _().CollectionBannerGroup,
                _ ? _().HeaderImg : _().NoHeaderImg,
              ),
              children: [
                !!(_ && _) &&
                  (0, _.jsx)("a", {
                    href: _,
                    className: _().AppBannerLogoCtn,
                    children: (0, _.jsx)("img", {
                      className: _().AppBannerLogo,
                      src: _,
                    }),
                  }),
                !!(_ && !_) &&
                  (0, _.jsx)("div", {
                    className: _().AppBannerLogoCtn,
                    children: (0, _.jsx)("img", {
                      className: _().AppBannerLogo,
                      src: _,
                    }),
                  }),
                (0, _.jsxs)("div", {
                  className: _().SimpleTitleCtn,
                  children: [
                    (0, _.jsx)("div", {
                      className: _().Title,
                      children: _.startsWith("#") ? (0, _._)(_) : _,
                    }),
                    _ &&
                      (0, _.jsx)("div", {
                        className: _().Subtitle,
                        children: _.startsWith("#") ? (0, _._)(_) : _,
                      }),
                  ],
                }),
              ],
            }),
          });
        };
        function _(_) {
          const _ = (0, _._)(_);
          return (
            (0, _._)(!!_, "Must define collection " + _),
            {
              collection: _,
              smallHeight: Number(_().simpleTitleSmallHeight),
              largeHeight: Number(_().simpleTitleLargeHeight),
              component: (_, _, _) =>
                (0, _.jsx)(_, {
                  largeHeader: _,
                  titleToken: _?.strHeaderTitle ?? "",
                  subtitleToken: _?.strHeaderSubtitle,
                  headerImg: _,
                  headerURL: _,
                }),
            }
          );
        }
        function _(_, _) {
          if (!_) return 0;
          const _ = _().find((_) => _.collection === _);
          return _ ? (_ ? _.largeHeight : _.smallHeight) : 0;
        }
        function _(_, _, _, _) {
          if (!_) return null;
          const _ = _().find((_) => _.collection === _);
          return _ ? _.component(_, _, _) : null;
        }
        function _(_, _) {
          return !_ || !_._.GetClanEventModel(_)
            ? 0
            : Number(
                _ ? _().simpleTitleLargeHeight : _().simpleTitleSmallHeight,
              );
        }
        function _(_, _) {
          if (!_) return null;
          let _ = _._.GetClanEventModel(_);
          return _
            ? (0, _.jsx)(_, {
                bLargeHeader: _,
                eventModel: _,
              })
            : null;
        }
        function _(_) {
          const { bLargeHeader: _, eventModel: _ } = _;
          let _ = (0, _.sfN)(_._.LANGUAGE);
          const _ = (0, _._)(_, "capsule", _, _._.capsule_main);
          return (0, _.jsx)(_, {
            largeHeader: _,
            titleToken: _.GetNameWithFallback(_) ?? "",
            subtitleToken: _.GetSubTitleWithSummaryFallback(_),
            headerImg: _,
          });
        }
        let _ = null;
        function _() {
          return (
            _ ||
              ((_ = new Array()),
              _.push(_(_._.Press)),
              _.push(_(_._.Halloween))),
            _
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
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
          render() {
            const {
              rgCalendarItems: _,
              bSuppressHoverEffects: _,
              strMultipleSourceTitle: _,
            } = this.props;
            if (!_ || _.length == 0) return null;
            const _ = _[0];
            if (!_.every((_) => _.appid === _.appid && _.clanid === _.clanid))
              return _
                ? (0, _.jsx)("div", {
                    className: _().EventTileCarouselTitleContainer,
                    children: (0, _.jsx)("div", {
                      className: _().EventTileCarouselTextTitle,
                      children: _,
                    }),
                  })
                : null;
            const _ = !!(_.appid === 0 && _._.accountid);
            return (0, _.jsxs)("div", {
              className: _().EventTileCarouselTitleContainer,
              children: [
                (0, _.jsx)("div", {
                  className: _().EventTileCarouselTitle,
                  children: (0, _.jsx)(_, {
                    calendarItem: _,
                    bSuppressHoverEffects: _,
                  }),
                }),
                _ &&
                  (0, _.jsx)("div", {
                    className: _().EventTileCarouselFollow,
                    children: (0, _.jsx)(_._, {
                      clanAccountID: _.clanid,
                    }),
                  }),
              ],
            });
          }
        };
        _ = _([_._], _);
        let _ = class extends _.Component {
          state = {
            bScreenIsWide: _.IsWideScreen(),
            nMaxCapsulesPerRow: this.GetMaxCapsulesPerRow(),
          };
          componentDidMount() {
            window.addEventListener("resize", this.OnResize);
          }
          componentWillUnmount() {
            window.removeEventListener("resize", this.OnResize);
          }
          static IsWideScreen() {
            return window.innerWidth >= 910;
          }
          GetMaxCapsulesPerRow() {
            return _.IsWideScreen() ? 3 : window.innerWidth > 700 ? 2 : 1;
          }
          OnResize() {
            this.setState({
              bScreenIsWide: _.IsWideScreen(),
              nMaxCapsulesPerRow: this.GetMaxCapsulesPerRow(),
            });
          }
          render() {
            const {
              rgCalendarItems: _,
              fnOnEventClick: _,
              bSuppressHoverEffects: _,
              bHideGameTitle: _,
              strMultipleSourceTitle: _,
            } = this.props;
            if (!_ || _.length == 0) return null;
            const _ = _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  calendarEvent: _,
                  partnerEventStore: _._,
                  fnOnClicked: _,
                  bSuppressHoverEffects: _,
                  mode: _.length > 1 ? "carousel" : "wide",
                  bHideGameTitle: _,
                },
                "ht-" + _.unique_id,
              ),
            );
            return (0, _.jsxs)("div", {
              className: _().CalendarRow,
              children: [
                (0, _.jsx)(_, {
                  rgCalendarItems: _,
                  bSuppressHoverEffects: _,
                  strMultipleSourceTitle: _,
                }),
                (0, _.jsx)("div", {
                  className: (0, _._)(
                    _().EventTileCarousel,
                    "EventTileCarouselCtn",
                  ),
                  children: (0, _.jsx)(_._, {
                    ...this.props,
                    hideArrows: !0,
                    visibleElements: Math.min(
                      this.state.nMaxCapsulesPerRow,
                      this.props.rgCalendarItems.length,
                    ),
                    className: _().HorizontalTiles,
                    useTestScrollbar: !0,
                    bLazyRenderChildren: !0,
                    disableEdgeWrap: !0,
                    screenIsWide: this.state.bScreenIsWide,
                    children: _,
                  }),
                }),
              ],
            });
          }
        };
        _([_._], _.prototype, "OnResize", 1), (_ = _([_._], _));
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = (_) => {
            let _ = new Array();
            return (
              _._.SUPPORTED_LANGUAGES?.length
                ? (_ = _._.SUPPORTED_LANGUAGES.map((_) => _.localizedName))
                : _.push((0, _._)("#Language_" + _._.LANGUAGE)),
              (0, _.jsx)("div", {
                className: _().LanguageList,
                children: _.join(", "),
              })
            );
          },
          _ = (_) => {
            const _ = "SteamNewsHub_LanguageDismissed",
              _ = () => {
                const _ = JSON.parse(localStorage.getItem(_));
                return _ && _.bDismissed;
              },
              [_, _] = _.useState(_());
            if (_ || (0, _._)()) return null;
            const _ = () => {
                _(!0),
                  localStorage.setItem(
                    _,
                    JSON.stringify({
                      bDismissed: !0,
                    }),
                  );
              },
              _ = _._.STORE_BASE_URL + "account/languagepreferences/";
            return (0, _.jsx)("div", {
              className: _().LanguageFeedNoteBucket,
              children: (0, _.jsxs)("div", {
                className: _().LanguageFeedNoteCtn,
                children: [
                  (0, _.jsx)("div", {
                    className: _().DismissButton,
                    onClick: _,
                    children: (0, _.jsx)(_.i6V, {}),
                  }),
                  (0, _.jsxs)("div", {
                    className: _().BodyFlow,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().LeftColumn,
                        children: (0, _.jsx)(_.vCk, {}),
                      }),
                      (0, _.jsxs)("div", {
                        className: _().RightColumn,
                        children: [
                          (0, _.jsx)("div", {
                            className: _().Title,
                            children: (0, _._)(
                              "#EventCalendar_NewsLanguage_Title",
                            ),
                          }),
                          (0, _.jsx)(_, {}),
                          (0, _.jsx)("div", {
                            className: _().Text,
                            children: (0, _._)(
                              "#EventCalendar_NewsLanguage_Text",
                              (0, _.jsx)("a", {
                                href: _,
                                children: (0, _._)(
                                  "#EventCalendar_NewsLanguage_TextInHyperlink",
                                ),
                              }),
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
          };
        var _ = __webpack_require__("chunkid"),
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
        const _ = "global_header";
        function _() {
          const _ = document.getElementById(_);
          if (_ && getComputedStyle(_).display != "none") return _;
          const _ = document.getElementsByClassName("responsive_header");
          return (
            (0, _._)(_.length <= 1, "Must have at most one responsive_header"),
            _.length == 1 ? _[0] : null
          );
        }
        function _() {
          const _ = _();
          return (_ && _._ != _) || _._.IN_MOBILE_WEBVIEW;
        }
        function _() {
          return (
            _() ||
            window.innerWidth <
              parseInt(_().strDesktopControlBarWidth) +
                parseInt(_().strMaxMobileWidth)
          );
        }
        let _ = class extends _.Component {
          state = {
            bUserIsLoggedIn: _._.logged_in,
            nVisibleHeight: 0,
            nScrollTop: 0,
            bControlBarIsCollapsed: _(),
            bControlBarWasOpenedByUser: !1,
            nDisappearingHeaderTop: 0,
            nSteamNavHeaderHeight: 0,
            nMobileNavBannerHeight: 0,
            nHubBannerHeight: 0,
            nGroupHeaderHeight: 0,
            nLogInBannerHeight: 0,
            nAccumScrollUp: 0,
            nAccumScrollDown: 0,
          };
          m_cancelSignal = _().CancelToken.source();
          componentDidMount() {
            this.InitEventCalendarStore(),
              this.UpdateDocumentUI(),
              window.addEventListener("resize", this.OnResize),
              window.addEventListener("scroll", this.OnScroll),
              this.setState({
                nVisibleHeight: window.innerHeight,
              }),
              window.scrollTo(0, 0),
              this.UpdateEventControlLocationAndVisibility(),
              _._.IN_MOBILE_WEBVIEW &&
                this.props.location &&
                this.props.history.length == 0 &&
                this.props.history.push(this.props.location),
              (0, _._)();
          }
          componentDidUpdate(_, _) {
            (_.bUserIsLoggedIn != this.state.bUserIsLoggedIn ||
              JSON.stringify(_.filter_to_appids) !=
                JSON.stringify(this.props.filter_to_appids) ||
              JSON.stringify(_.filter_to_clanids) !=
                JSON.stringify(this.props.filter_to_clanids) ||
              _.filter_to_collection !== this.props.filter_to_collection ||
              _.filter_to_saleid !== this.props.filter_to_saleid ||
              _.filter_to_contenthub_hubtype !==
                this.props.filter_to_contenthub_hubtype ||
              _.filter_to_contenthub_category_or_language !==
                this.props.filter_to_contenthub_category_or_language ||
              _.filter_to_contenthub_tag_name !==
                this.props.filter_to_contenthub_tag_name ||
              _.section_by_day !== this.props.section_by_day) &&
              (window.scrollTo(0, 0), this.InitEventCalendarStore()),
              this.UpdateDocumentUI(),
              this.LoadEventToShowAsModal(),
              this.UpdateEventControlLocationAndVisibility();
          }
          UpdateEventControlLocationAndVisibility() {
            if (this.props.location) {
              const _ = _.Get().UpdateLocation(
                () => this.props.history,
                this.props.location,
              );
              ((_ != "desktop_navigation" &&
                this.state.bControlBarIsCollapsed) ||
                (_ == "desktop_navigation" &&
                  !this.state.bControlBarIsCollapsed &&
                  _())) &&
                this.ToggleControlBarCollapsed();
            }
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel("component unmounted"),
              window.removeEventListener("resize", this.OnResize),
              window.removeEventListener("scroll", this.OnScroll),
              this.UpdateBodyScrollState(!0);
            const _ = _();
            _ && (_.style.transform = "");
          }
          GetCurrentHubBannerHeight(_) {
            const _ = _ && !(0, _._)();
            return (0, _._)().GetCollectionID()
              ? _((0, _._)().GetCollectionID(), _)
              : (0, _._)().BIsSaleCalendar()
                ? _((0, _._)().GetSaleID(), _)
                : (0, _._)().BIsSingleSourceCalendar()
                  ? parseInt(
                      _
                        ? _().strJumboHubBannerHeight
                        : _().strDesktopHubBannerHeight,
                    ) - 1
                  : 0;
          }
          BShowLogInBanner() {
            return !!(
              !this.state.bUserIsLoggedIn && (0, _._)().BIsGlobalCalendar()
            );
          }
          GetCurrentHeaderHeights(_) {
            const _ = _(),
              _ = (0, _._)();
            let _ = 0;
            _() &&
              ((_ = parseInt(
                _
                  ? _().strMobileGlobalHeaderHeight
                  : _().strDesktopGlobalHeaderHeight,
              )),
              (_ -= 1));
            const _ =
                parseInt(
                  _
                    ? _().strMobileGroupHeaderHeight
                    : _().strDesktopGroupHeaderHeight,
                ) - 1,
              _ = (_ ? parseInt(_().strMobileNavBannerHeight) : 0) - 1,
              _ = this.GetCurrentHubBannerHeight(_);
            let _ = 0;
            return (
              this.BShowLogInBanner() &&
                (_ = parseInt(
                  _ && !_
                    ? _().strLogInBannerLargeHeight
                    : _().strLogInBannerSmallHeight,
                )),
              {
                nSteamNavHeaderHeight: _,
                nMobileNavBannerHeight: _,
                nHubBannerHeight: _,
                nGroupHeaderHeight: _,
                nLogInBannerHeight: _,
              }
            );
          }
          async LoadEventToShowAsModal() {
            const _ = (0, _._)(this.props.location, "megaphone");
            if (!!_ && _ !== "0" && _ !== "false") {
              (0, _._)(this.props.history, "megaphone", null);
              const _ = {
                  exclude_tags: ["patchnotes", "skip_megaphone"],
                },
                _ = await _._.LoadAdjacentPartnerEvents(
                  null,
                  null,
                  _._,
                  0,
                  1,
                  _,
                );
              if (_?.length == 1) {
                const _ = _[0];
                (0, _._)(this.props.history, {
                  emclan: _.clanSteamID.ConvertTo64BitString(),
                  emgid: _.GID,
                });
              } else
                console.error(
                  "Could not find the most recent Steam Blog post.",
                );
            }
            const _ = (0, _._)(this.props.location, "clientpatchnotes");
            if (!!_ && _ !== "0" && _ !== "false") {
              (0, _._)(this.props.history, "clientpatchnotes", null);
              const [_, _] = _ === "beta" ? [null, _._] : [_._, null],
                _ = {
                  require_tags: ["patchnotes"],
                },
                _ = await _._.LoadAdjacentPartnerEvents(
                  null,
                  _._.InitFromClanID(_),
                  _,
                  0,
                  1,
                  _,
                );
              if (_?.length == 1) {
                const _ = _[0];
                (0, _._)(this.props.history, {
                  emclan: _.clanSteamID.ConvertTo64BitString(),
                  emgid: _.GID,
                });
              } else
                console.error(
                  "Could not find the most recent Steam client patch notes.",
                );
            }
            const _ = (0, _._)(this.props.location, "emclan"),
              _ = (0, _._)(this.props.location, "emgid");
            if (_ && _) {
              const _ = new _._(_);
              if (
                this.state.modalEvent &&
                this.state.modalEvent.clanSteamID.ConvertTo64BitString() ==
                  _.ConvertTo64BitString() &&
                this.state.modalEvent.GID == _
              )
                return;
              const _ =
                await _._.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  _,
                  _,
                  0,
                );
              this.setState({
                modalEvent: _,
              });
            } else
              this.state.modalEvent &&
                this.setState({
                  modalEvent: null,
                });
          }
          BShowFutureView() {
            const _ = (0, _._)(this.props.location, "upcoming");
            return _ && _ != "false";
          }
          BShowUpdatesOnly() {
            return !!(
              this.props.filter_to_appids &&
              this.props.filter_to_appids.length == 1 &&
              (0, _._)(this.props.location, "updates") == "true"
            );
          }
          UpdateDocumentUI() {
            let _, _;
            const _ = (0, _._)();
            if (_.BIsGlobalCalendar()) {
              const _ = (0, _._)(
                this.BShowFutureView() ? _._.Upcoming : _._.Default,
              );
              _ = _?.strHeaderTitle ?? _?.strName;
            } else if (_.BIsSingleAppCalendar()) {
              const _ = _.GetSingleAppID();
              _ = _._.Get().GetApp(_)?.GetName();
            } else if (_.BIsSingleGroupCalendar()) {
              const _ = _.GetSingleGroupID(),
                _ = _ && _._.GetClanInfoByClanAccountID(_);
              _ = _ && _.group_name;
            } else if (_.BIsCollectionCalendar()) {
              const _ = _.GetCollectionID(),
                _ = (0, _._)(_);
              _ = _?.strHeaderTitle ?? _?.strName;
            } else if (_.BIsSaleCalendar()) {
              const _ = _._.GetClanEventModel(_.GetSaleID());
              if (_) {
                if (_.appid) _ = _._.Get().GetApp(_.appid)?.GetName();
                else {
                  const _ = _.clanSteamID?.GetAccountID(),
                    _ = _ && _._.GetClanInfoByClanAccountID(_);
                  _ = _ && _.group_name;
                }
                _ = _ && _.GetNameWithFallback((0, _.sfN)(_._.LANGUAGE));
              }
            }
            let _ = (0, _._)("#EventCalendar_TabTitle_Global");
            _ &&
              (_
                ? (_ = (0, _._)(
                    "#EventCalendar_TabTitle_GroupNameAndEventDetail",
                    _,
                    _,
                  ))
                : (_ = (0, _._)("#EventCalendar_TabTitle_GroupHub", _))),
              document.title != _ && (document.title = _),
              document.body.classList.contains("events_hub") ||
                document.body.classList.add("events_hub");
          }
          OnResize() {
            this.setState((_) => {
              const _ = window.innerHeight,
                _ = !_.bControlBarWasOpenedByUser && _(),
                _ = this.GetCurrentHeaderHeights(this.state.nScrollTop <= 0);
              return (
                this.UpdateBodyScrollState(_),
                {
                  nVisibleHeight: _,
                  bControlBarIsCollapsed: _,
                  ..._,
                }
              );
            });
          }
          OnScroll() {
            const _ = Math.round(window.scrollY);
            this.setState((_) => {
              const _ = _.nScrollTop <= 0,
                _ = _ <= 0;
              let { nHubBannerHeight: _, nLogInBannerHeight: _ } = _;
              if (_ != _) {
                const _ = this.GetCurrentHeaderHeights(_);
                (_ = _.nHubBannerHeight), (_ = _.nLogInBannerHeight);
              }
              const _ = _ - _.nScrollTop;
              let _ = Math.max(0, _.nAccumScrollUp - _),
                _ = Math.max(0, _.nAccumScrollDown + _),
                _ = _.nDisappearingHeaderTop;
              const _ = 100,
                _ = 80;
              let _ = _.nDisappearingHeaderTop < 0;
              _ > _ && ((_ = 0), (_ = 0), (_ = !0)),
                (_ > _ || _) && ((_ = 0), (_ = 0), (_ = !1)),
                this.state.bControlBarIsCollapsed || (_ = !1),
                _.modalEvent && (_ = !0);
              const _ = _.nSteamNavHeaderHeight + _ + _.nMobileNavBannerHeight;
              if (((_ = _ ? -1 * _ : 0), _ !== _.nDisappearingHeaderTop)) {
                const _ = _();
                _ && (_.style.transform = `translateY(${_}px)`);
              }
              return {
                nScrollTop: _,
                nAccumScrollUp: _,
                nAccumScrollDown: _,
                nDisappearingHeaderTop: _,
                nHubBannerHeight: _,
                nLogInBannerHeight: _,
              };
            });
          }
          async InitEventCalendarStore() {
            const _ = {
                appids: this.props.filter_to_appids,
                clanaccountids: this.props.filter_to_clanids,
                collectionid: this.props.filter_to_collection,
                saleid: this.props.filter_to_saleid,
                hubtype: this.props.filter_to_contenthub_hubtype,
                category_or_language:
                  this.props.filter_to_contenthub_category_or_language,
                tag_name: this.props.filter_to_contenthub_tag_name,
                bSectionByDay: this.props.section_by_day,
              },
              _ = (0, _._)(_, this.props.initialFilters),
              _ = (0, _._)(),
              _ = _._.Get(),
              _ = !!(this.state.bUserIsLoggedIn && _._.accountid),
              _ = _.BIsGlobalCalendar() && _ ? "local" : "session",
              _ = _.BIsGlobalCalendar() ? "U" + _._.accountid : _;
            _.m_visibilityStore.Init(
              _,
              this.BShowUpdatesOnly(),
              _.BIsShowingFeaturedFeed(),
              _,
              _,
            );
            const _ = !_.BIsCollectionCalendar();
            if (
              (_.SetFilteredView(
                (_) => _.m_visibilityStore.BShouldDisplayEvent(_),
                _,
              ),
              _.m_bInitialLoad)
            ) {
              const _ = (0, _._)("metadatainfo", "application_config");
              _.SetCollectionMetaData(
                _.ValidateCollectionMetadata(_) ? _ : null,
              );
            }
            const _ =
              _.m_bInitialLoad &&
              (0, _._)("initialEvents", "application_config");
            _
              ? (await _.RegisterCalendarEventsAndModels(_),
                (_.m_bInitialLoad = !1))
              : await _.RegisterCalendarEventsAndModels({
                  success: _._,
                }),
              _.BIsSingleSourceCalendar() &&
                (_.BIsSingleAppCalendar()
                  ? _._.Get().QueueAppRequest(_.GetSingleAppID(), {
                      include_assets: !0,
                      include_platforms: !0,
                      include_basic_info: !0,
                      include_release: !0,
                    })
                  : _._.LoadClanInfoForClanSteamID(
                      _._.InitFromClanID(_.GetSingleGroupID()),
                    )),
              this.OnResize();
          }
          UpdateBodyScrollState(_) {
            const _ = !_ && _(),
              _ = document.body;
            _ &&
              (_
                ? _.classList.add(_().BodyNoScroll)
                : _.classList.remove(_().BodyNoScroll));
          }
          MobileNavOpenSettings() {
            this.ToggleControlBarCollapsed(), _(!0);
          }
          ToggleControlBarCollapsed() {
            this.setState((_) => {
              const _ = !_.bControlBarIsCollapsed,
                _ = _.bControlBarIsCollapsed,
                _ = _ ? _.nDisappearingHeaderTop : 0,
                _ = _();
              return (
                _ && (_.style.transform = `translateY(${_}px)`),
                this.UpdateBodyScrollState(_),
                {
                  bControlBarIsCollapsed: _,
                  bControlBarWasOpenedByUser: _,
                  nDisappearingHeaderTop: _,
                }
              );
            });
          }
          OnControlBarChange() {
            window.scrollTo(0, 0);
          }
          CloseEventModal() {
            const _ = _();
            _ &&
              (_.style.transform = `translateY(${this.state.nDisappearingHeaderTop}px)`),
              this.props.history.action === "PUSH"
                ? this.props.history.goBack()
                : (0, _._)(this.props.history, {
                    emclan: void 0,
                    emgid: void 0,
                  });
          }
          async OnEventClicked(_) {
            this.props.tracker.RecordEventRead(_, _._._);
            const _ =
                this.state.nSteamNavHeaderHeight +
                this.state.nHubBannerHeight +
                this.state.nMobileNavBannerHeight,
              _ = _();
            _ && (_.style.transform = `translateY(${-1 * _}px)`),
              (0, _._)(this.props.history, {
                emclan: _.clanSteamID.ConvertTo64BitString(),
                emgid: _.GID,
              });
          }
          ToggleFutureView() {
            (0, _._)(
              this.props.history,
              "upcoming",
              this.BShowFutureView() ? "false" : "true",
            );
          }
          ResetAllFilters() {
            (0, _._)(this.props.history, "updates", void 0),
              (0, _._)().m_visibilityStore.InitDefaultCheckboxes(
                this.state.bUserIsLoggedIn,
                !1,
              );
          }
          render() {
            const _ =
                this.state.nSteamNavHeaderHeight +
                this.state.nHubBannerHeight +
                this.state.nMobileNavBannerHeight +
                this.state.nLogInBannerHeight,
              _ =
                this.state.nDisappearingHeaderTop +
                this.state.nSteamNavHeaderHeight,
              _ = _ + this.state.nMobileNavBannerHeight,
              _ = _ + this.state.nLogInBannerHeight,
              _ = this.state.nVisibleHeight <= parseInt(_().strMinMobileHeight),
              _ = _
                ? 0
                : this.state.nDisappearingHeaderTop +
                  this.state.nSteamNavHeaderHeight,
              _ = _ ? 0 : this.state.nDisappearingHeaderTop + _,
              _ = (0, _._)().m_visibilityStore.BAreAnyEventsFiltered(
                this.state.bUserIsLoggedIn,
              )
                ? this.ResetAllFilters
                : null;
            return (0, _.jsx)(_.Fragment, {
              children: (0, _.jsxs)(_._, {
                className: (0, _._)(
                  _().EventCalendarContainer,
                  this.state.bControlBarIsCollapsed ? _().CollapsedMenu : "",
                ),
                "flow-children": "row",
                children: [
                  (0, _.jsx)(_._, {
                    children: this.state.modalEvent
                      ? (0, _.jsx)(_._, {
                          appid: this.state.modalEvent.appid,
                          trackingLocation: _._._,
                          announcementGID:
                            this.state.modalEvent.GetAnnouncementGID(),
                          partnerEventStore: _._,
                          eventModel: this.state.modalEvent,
                          showAppHeader: !0,
                          closeModal: this.CloseEventModal,
                        })
                      : null,
                  }),
                  (0, _.jsx)(_._, {
                    children: (0, _.jsx)(_, {
                      bUserIsLoggedIn: this.state.bUserIsLoggedIn,
                      nDisappearingHeaderVisibleHeight: _,
                      bIsCollapsed: this.state.bControlBarIsCollapsed,
                      bShowUpcoming: this.BShowFutureView(),
                      bShouldIncludeLegalFooter: !_(),
                      fnToggleCollapsed: this.ToggleControlBarCollapsed,
                      fnOnFilterChange: this.OnControlBarChange,
                    }),
                  }),
                  (0, _.jsx)(_._, {
                    children: (0, _.jsxs)(_._, {
                      className: (0, _._)(
                        _().ReserveControlSpace,
                        !this.state.bControlBarIsCollapsed &&
                          _().WideLeftGutter,
                      ),
                      "flow-children": "column",
                      children: [
                        (0, _.jsx)(_._, {
                          children:
                            this.state.nLogInBannerHeight > 0 &&
                            (0, _.jsx)(_, {
                              nTopOffset: _,
                              bLargeMode:
                                this.state.nScrollTop <= 0 && !(0, _._)(),
                            }),
                        }),
                        (0, _.jsxs)(_._, {
                          children: [
                            this.state.nMobileNavBannerHeight > 0 &&
                              (0, _.jsx)(_, {
                                bIsUpcoming: this.BShowFutureView(),
                                nTopOffset: _,
                                fnToggleCollapsed: this.MobileNavOpenSettings,
                              }),
                            (0, _.jsx)(_, {
                              nTopOffset: _,
                              bLargeMode:
                                this.state.nScrollTop <= 0 && !(0, _._)(),
                            }),
                          ],
                        }),
                        (0, _.jsx)(_._, {
                          children: (0, _.jsx)(_, {
                            bShowFutureViewOnly: this.BShowFutureView(),
                            bShowUpdatesOnly: this.BShowUpdatesOnly(),
                            fnOnEventClick: this.OnEventClicked,
                            fnToggleSeeFuture: this.ToggleFutureView,
                            fnResetFilters: _,
                            nVisibleHeight: this.state.nVisibleHeight,
                            nScrollTop: this.state.nScrollTop,
                            nDisappearingHeaderVisibleHeight: _,
                            bUserIsLoggedIn: !!(
                              this.state.bUserIsLoggedIn && _._.accountid
                            ),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            });
          }
        };
        _(_, "m_bInitialLoad", !0),
          _([_._], _.prototype, "OnResize", 1),
          _([_._], _.prototype, "OnScroll", 1),
          _([_._], _.prototype, "MobileNavOpenSettings", 1),
          _([_._], _.prototype, "ToggleControlBarCollapsed", 1),
          _([_._], _.prototype, "OnControlBarChange", 1),
          _([_._], _.prototype, "CloseEventModal", 1),
          _([_._], _.prototype, "OnEventClicked", 1),
          _([_._], _.prototype, "ToggleFutureView", 1),
          _([_._], _.prototype, "ResetAllFilters", 1),
          (_ = _([_._], _));
        const _ = (0, _._)(function (_) {
          return (0, _.jsx)(_, {
            ..._,
            tracker: (0, _._)(),
          });
        });
        function _(_) {
          const _ = (0, _._)(() => (0, _._)()),
            [_, _, _, _, _, _, _, _] = (0, _._)(() => [
              _.GetCollectionMetaData()?.clan_event_gid || void 0,
              _.GetCollectionID(),
              _.BHasCollectionMetaData(),
              _.BIsSaleCalendar(),
              _.GetSaleID(),
              _.BIsSingleSourceCalendar(),
              _.BIsSingleAppCalendar() ? _.GetSingleAppID() : void 0,
              _.BIsSingleGroupCalendar() ? _.GetSingleGroupID() : void 0,
            ]),
            [_, _] = _.useState(!1),
            _ = (0, _.sfN)(_._.LANGUAGE);
          if (
            (_.useEffect(() => {
              _ &&
                _ &&
                !_._.GetClanEventModel(_) &&
                (_(!0),
                (async () => {
                  const _ = _.GetCollectionMetaData(),
                    _ = _._.InitFromClanID(_.clanid);
                  await _._.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    _,
                    _.clan_event_gid,
                    0,
                  ),
                    _(!1);
                })());
            }, [_, _, _]),
            _)
          ) {
            let _;
            return (
              _ && !_ && (_ = _._.GetClanEventModel(_)),
              (0, _.jsx)(_, {
                ..._,
                collectionID: _,
                eventModel: _,
                language: _,
              })
            );
          }
          if (_) {
            const _ = _(_, _.bLargeMode);
            if (!_) return null;
            const _ = (0, _._)(_().HubBanner, _().WideBanner);
            return (0, _.jsx)("div", {
              style: {
                transform: `translateY(${_.nTopOffset}px)`,
              },
              className: _,
              children: _,
            });
          }
          if (_) {
            const _ = (0, _._)(
              _().HubBanner,
              _().WideBanner,
              _.bLargeMode && _().LargeMode,
              _.bLargeMode && _().TallBanner,
            );
            return (0, _.jsx)("div", {
              style: {
                transform: `translateY(${_.nTopOffset}px)`,
              },
              className: _,
              children: (0, _.jsx)(_._, {
                appId: _,
                clanId: _,
                bShowRSSFeed: !0,
              }),
            });
          }
          return null;
        }
        function _(_) {
          const { collectionID: _, language: _, eventModel: _ } = _;
          let _ = (0, _._)(_, "capsule", _, _._.capsule_main),
            _ = (0, _._)(_) ?? void 0;
          const _ = _(_, _.bLargeMode, _, _);
          if (!_) return null;
          const _ = (0, _._)(_().HubBanner, _().WideBanner);
          return (0, _.jsx)("div", {
            style: {
              transform: `translateY(${_.nTopOffset}px)`,
            },
            className: _,
            children: _,
          });
        }
        let _ = class extends _.Component {
          GetCurrentSectionLayout() {
            let _ = 0;
            return (0, _._)()
              .GetCalendarSections(this.props.bShowFutureViewOnly)
              .map((_) => {
                const _ = Math.max(_, _.nTopOffset);
                return (
                  (_ = _ + _.nRenderedHeight),
                  {
                    section: _,
                    nTopOfSection: _,
                  }
                );
              });
          }
          GetMergeEventsType() {
            const _ = (0, _._)(),
              _ = _.GetCollectionID();
            return _.BIsSingleSourceCalendar() || _ === _._.Steam
              ? "none"
              : _.BIsShowingFeaturedFeed()
                ? "full"
                : _
                  ? "samesource"
                  : "full";
          }
          GetCuratorSuggestionSettings(_) {
            if (_._.accountid && (0, _._)()) {
              if (_.BIsGlobalCalendar() && !this.props.bShowFutureViewOnly) {
                if (_.m_visibilityStore.BIsGameSourceAllowed(_._.k_ECurator))
                  return {
                    nInlineOffset: 1e3,
                    bInlineDismissable: !0,
                    bShowAtEnd: !0,
                  };
              } else if (_.GetCollectionID() === _._.Press)
                return {
                  nInlineOffset: 1e3,
                  bInlineDismissable: !1,
                  bShowAtEnd: !1,
                };
            }
            return {
              nInlineOffset: void 0,
              bInlineDismissable: !1,
              bShowAtEnd: !1,
            };
          }
          render() {
            const _ = (0, _._)(),
              {
                bShowFutureViewOnly: _,
                bShowUpdatesOnly: _,
                fnOnEventClick: _,
                fnToggleSeeFuture: _,
                fnResetFilters: _,
                nScrollTop: _,
                nDisappearingHeaderVisibleHeight: _,
              } = this.props,
              _ = _.GetCalendarSections(_);
            if (_.length == 0) return null;
            const _ = (0, _._)(),
              _ = _.m_visibilityStore.BAreAllEventsHidden(),
              _ = _;
            let _ = !0;
            const _ = this.GetCuratorSuggestionSettings(_);
            let _;
            const _ = _
              ? []
              : this.GetCurrentSectionLayout().map(
                  ({ section: _, nTopOfSection: _ }, _) => {
                    const {
                        strId: _,
                        strSectionLabel: _,
                        rtSectionStart: _,
                        rtSectionEnd: _,
                        bIsFutureSection: _,
                        nRenderedHeight: _,
                      } = _,
                      _ = _ < _,
                      _ = (0, _._)(_().PastSection, _ && _().DarkerBackground);
                    _ > 0 &&
                      ((_ = !_),
                      _.nInlineOffset !== void 0 &&
                        _ >= _.nInlineOffset &&
                        _ === void 0 &&
                        (_ = _));
                    const _ = !_ && _;
                    return (0, _.jsx)(
                      _._,
                      {
                        className: _().LazyCalendarSectionCtn,
                        placeholderHeight: _,
                        rootMargin: "100% 0px 100% 0px",
                        children: (0, _.jsx)(_, {
                          bRenderStickyHeader: _,
                          strSectionLabel: _,
                          rtSectionStart: _,
                          rtSectionEnd: _,
                          strSectionClassname: _,
                          bUseHorizontalLayout: _,
                          fnOnSeeFutureClick: _,
                          bShowEarliestFirst: _ || _,
                          section: _,
                          fnOnEventClick: _,
                          bSuppressHoverEffects: _,
                          strMergeEvents: this.GetMergeEventsType(),
                        }),
                      },
                      _,
                    );
                  },
                );
            _ !== void 0 &&
              _.splice(
                _,
                0,
                (0, _.jsx)(
                  _,
                  {
                    bCanDismiss: _.bInlineDismissable,
                  },
                  "CuratorSuggestions",
                ),
              ),
              _.GetCollectionID() === _._.Press &&
                _.splice(0, 0, (0, _.jsx)(_, {}, "LanguageFeedRow"));
            const _ = _[0].rtSectionStart,
              _ = (0, _._)().GetCurrentlyLoadedEventCount(0, _),
              _ = (0, _._)().GetCurrentlyLoadedEventCount(_);
            let _ =
                _ &&
                (_.nCount
                  ? "#EventCalendar_NoMorePastEvents"
                  : "#EventCalendar_NoPastEvents"),
              _ =
                _ &&
                (0, _.jsx)(
                  _._,
                  {
                    toolTipContent: (0, _._)(
                      "#EventCalendar_ResetFilters_ttip",
                    ),
                    className: (0, _._)(_().BackToThePast, _().NoCount),
                    onClick: _,
                    children: (0, _._)("#EventCalendar_ResetFiltersButton"),
                  },
                  "link-back",
                );
            _ && this.props.fnResetFilters
              ? (_ = "#EventCalendar_EmptyCalendar")
              : _
                ? ((_ =
                    _ &&
                    (_.nCount
                      ? "#EventCalendar_NoMoreFutureEvents"
                      : "#EventCalendar_NoFutureEvents")),
                  (_ =
                    _ &&
                    (0, _.jsxs)(
                      "div",
                      {
                        className: _().BackToThePast,
                        onClick: _,
                        children: [
                          (0, _._)("#EventCalendar_PastEventsLink"),
                          (0, _.jsx)("span", {
                            className: _().SeeAllCount,
                            children: _.nCount + (_.bIsComplete ? "" : "+"),
                          }),
                        ],
                      },
                      "link-back",
                    )))
                : _ &&
                  (_ =
                    _ &&
                    (_.nCount
                      ? "#EventCalendar_NoMorePastUpdates"
                      : "#EventCalendar_NoPastUpdates"));
            let _ = null;
            return (
              (_ || _.BHitEventHorizon(_ ? "forward" : "backward")) &&
                (_ = (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(
                      "div",
                      {
                        className: (0, _._)(_().EndOfRows, _().CalendarRow),
                        children: (0, _.jsxs)("div", {
                          className: _().NoMoreRows,
                          children: [" ", (0, _._)(_), " "],
                        }),
                      },
                      "no-more-events",
                    ),
                    _.bShowAtEnd &&
                      (0, _.jsx)(
                        _,
                        {
                          bCanDismiss: !1,
                        },
                        "CuratorSuggestions",
                      ),
                    _,
                  ],
                })),
              (0, _.jsx)("div", {
                className: _().RowContainer,
                style: {
                  transform: `translateY(${_ - 1}px)`,
                },
                children: (0, _.jsxs)("div", {
                  className: _().Rows,
                  children: [
                    _ &&
                      (0, _.jsx)("div", {
                        className: _().UpdatePageBanner,
                        children: (0, _._)("#EventCalendar_UpdatesViewHeader"),
                      }),
                    _,
                    _,
                  ],
                }),
              })
            );
          }
        };
        _ = _([_._], _);
        let _ = class extends _.Component {
          render() {
            const _ = this.props.rgCalendarItems[0].start_time,
              _ = (0, _._)().GetCurrentlyLoadedEventCount(_);
            return this.props.rgCalendarItems.length <= 1
              ? null
              : (0, _.jsxs)(
                  "div",
                  {
                    className: _().MobileSeeAllink,
                    onClick: this.props.fnOnSeeFutureClick,
                    children: [
                      (0, _._)("#EventCalendar_FutureEventsLink"),
                      (0, _.jsx)("span", {
                        className: _().SeeAllCount,
                        children: _.nCount + (_.bIsComplete ? "" : "+"),
                      }),
                    ],
                  },
                  "see-all-link",
                );
          }
        };
        _ = _([_._], _);
        let _ = class extends _.Component {
          render() {
            const {
              rgCalendarItems: _,
              fnOnEventClick: _,
              fnOnSeeFutureClick: _,
              bSuppressHoverEffects: _,
            } = this.props;
            return !_ || _.length == 0
              ? null
              : (0, _.jsx)("div", {
                  className: _().CalendarRow,
                  children: (0, _.jsxs)("div", {
                    className: (0, _._)(
                      _().HorizontalTileContainer,
                      "HorizontalTileCtn",
                    ),
                    children: [
                      (0, _.jsx)(_._, {
                        className: _().HorizontalTiles,
                        "flow-children": "row",
                        children: _.map((_) =>
                          (0, _.jsx)(
                            _,
                            {
                              calendarEvent: _,
                              partnerEventStore: _._,
                              fnOnClicked: _,
                              bSuppressHoverEffects: _,
                              mode: _.length > 1 ? "upcoming" : "wide",
                              bHideGameTitle:
                                (0, _._)().BIsSingleSourceCalendar() &&
                                (0, _._)().BEventMatchCalendarSingleSource(_),
                            },
                            "ht-" + _.unique_id,
                          ),
                        ),
                      }),
                      (0, _.jsx)(_, {
                        rgCalendarItems: _,
                        fnOnSeeFutureClick: _,
                      }),
                    ],
                  }),
                });
          }
        };
        _ = _([_._], _);
        const _ = (0, _._)((_) => {
          const { calendarItem: _, bSuppressHoverEffects: _ } = _,
            _ = _._.GetClanEventModel(_.unique_id);
          return _
            ? (0, _.jsx)("div", {
                className: _().EventListTitle,
                children: (0, _.jsx)(_, {
                  eventModel: _,
                  calendarEvent: _,
                  bSuppressHoverEffects: _,
                }),
              })
            : null;
        });
        var _ = ((_) => ((_[(_.eCurators = 1)] = "eCurators"), _))(_ || {});
        let _ = class extends _.Component {
          m_ref = _.createRef();
          rtSectionStart = void 0;
          rtSectionEnd = void 0;
          constructor(_) {
            super(_),
              (0, _._)(this),
              (this.rtSectionStart = _.rtSectionStart),
              (this.rtSectionEnd = _.rtSectionEnd);
          }
          componentDidMount() {
            this.UpdatePositioning();
          }
          componentDidUpdate() {
            this.UpdatePositioning(),
              (this.rtSectionStart = this.props.rtSectionStart),
              (this.rtSectionEnd = this.props.rtSectionEnd);
          }
          UpdatePositioning() {
            this.m_ref.current &&
              (0, _._)(() => {
                const { section: _ } = this.props,
                  _ = this.m_ref.current.getBoundingClientRect().height;
                _.nRenderedHeight != _ && (_.nRenderedHeight = _);
                const _ = this.m_ref.current.offsetTop;
                _.nTopOffset != _ && (_.nTopOffset = _);
              });
          }
          get cachedCalendarItems() {
            return (0, _._)().GetCalendarItemsInTimeRange(
              (0, _._)(() => this.rtSectionStart),
              (0, _._)(() => this.rtSectionEnd),
            );
          }
          GetCarouselGroupTitle(_) {
            return _.BIsShowingFeaturedFeed()
              ? (0, _._)("#EventCalendar_GroupTitle_FeaturedCurators")
              : _.BIsGlobalCalendar()
                ? (0, _._)("#EventCalendar_GroupTitle_Curators")
                : "";
          }
          GenerateKeyFromItem(_, _) {
            return _.GetSource() & _._.k_eSteam
              ? _.clanid
              : !_.appid && _ === "full"
                ? 1
                : _.clanid;
          }
          static IsTimestampInRange(_, _, _) {
            return !!_ && _ < _ && _ <= _;
          }
          GetTimestampEvents(_) {
            const _ = new Array();
            if (
              !!1 ||
              !_.BIsSingleAppCalendar() ||
              this.props.bShowEarliestFirst
            )
              return _;
            const _ = _.GetCalendarAppInfoForAppID(_.GetSingleAppID());
            return (
              _ &&
                (_.IsTimestampInRange(
                  _.last_played,
                  this.props.rtSectionStart,
                  this.props.rtSectionEnd,
                ) &&
                  _.push({
                    rtTime: _.last_played,
                    component: (0, _.jsx)(
                      _,
                      {
                        className: _().TimeEventLastPlayed,
                        locToken: "#EventCalendar_TimeEventLastPlayed",
                        time: _.last_played,
                      },
                      "TimeEventLastPlayed",
                    ),
                  }),
                _.IsTimestampInRange(
                  _.wishlist_added,
                  this.props.rtSectionStart,
                  this.props.rtSectionEnd,
                ) &&
                  _.push({
                    rtTime: _.wishlist_added,
                    component: (0, _.jsx)(
                      _,
                      {
                        className: _().TimeEventWishlisted,
                        locToken: "#EventCalendar_TimeEventWishlisted",
                        time: _.wishlist_added,
                      },
                      "TimeEventWishlisted",
                    ),
                  })),
              _.sort(
                this.props.bShowEarliestFirst
                  ? (_, _) => _.rtTime - _.rtTime
                  : (_, _) => _.rtTime - _.rtTime,
              ),
              _
            );
          }
          AddTimestampEventsInInterval(_, _, _, _) {
            for (const _ of _)
              _.IsTimestampInRange(_.rtTime, _, _) && _.push(_.component);
          }
          RenderEventList(_) {
            const {
                fnOnEventClick: _,
                bSuppressHoverEffects: _,
                strMergeEvents: _,
              } = this.props,
              _ = (0, _._)();
            let _ = null;
            if (_ !== "none") {
              _ = new Map();
              for (const _ of _) {
                const _ = this.GenerateKeyFromItem(_, _),
                  _ = _.get(_);
                if (_) _.push(_);
                else {
                  const _ = new Array();
                  _.push(_), _.set(_, _);
                }
              }
            }
            const _ = new Array(),
              _ = new Array(),
              _ = _ === "full" ? _ : _,
              _ = 3,
              _ = this.GetTimestampEvents(_);
            let _ = this.props.bShowEarliestFirst
              ? this.props.rtSectionStart
              : this.props.rtSectionEnd;
            for (const _ of _) {
              let _ = _;
              if (_) {
                const _ = this.GenerateKeyFromItem(_, _),
                  _ = _.get(_);
                if (!_) continue;
                if ((_ === 1 && (_ = _), _.length >= _)) {
                  const _ = _ === 1 ? this.GetCarouselGroupTitle(_) : "",
                    _ = !_.find((_) => _.clanid != _.clanid);
                  _.sort((_, _) =>
                    _.score != _.score
                      ? _.score - _.score
                      : _.start_time - _.start_time,
                  ),
                    _.push(
                      (0, _.jsx)(
                        "div",
                        {
                          className: _().CalendarEventListRow,
                          children: (0, _.jsx)("div", {
                            className: _().CalendarEventListContainer,
                            children: (0, _.jsx)(
                              _,
                              {
                                rgCalendarItems: _,
                                bSuppressHoverEffects: _,
                                fnOnEventClick: _,
                                bHideGameTitle: _,
                                strMultipleSourceTitle: _,
                              },
                              _.unique_id,
                            ),
                          }),
                        },
                        _.unique_id,
                      ),
                    ),
                    _.delete(_);
                  continue;
                }
              }
              _ === _ &&
                (this.AddTimestampEventsInInterval(
                  _,
                  Math.min(_, _.start_time),
                  Math.max(_, _.start_time),
                  _,
                ),
                (_ = _.start_time)),
                _.push(
                  (0, _.jsx)(
                    "div",
                    {
                      className: _().CalendarRow,
                      children: (0, _.jsx)(_, {
                        calendarEvent: _,
                        partnerEventStore: _._,
                        mode: "wide",
                        fnOnClicked: _,
                        bSuppressHoverEffects: _,
                        bHideGameTitle:
                          _.BIsSingleSourceCalendar() &&
                          _.BEventMatchCalendarSingleSource(_),
                      }),
                    },
                    _.unique_id,
                  ),
                );
            }
            return (
              this.props.bShowEarliestFirst
                ? this.AddTimestampEventsInInterval(
                    _,
                    _,
                    this.props.rtSectionEnd,
                    _,
                  )
                : this.AddTimestampEventsInInterval(
                    _,
                    this.props.rtSectionStart,
                    _,
                    _,
                  ),
              _.push(..._),
              _
            );
          }
          render() {
            const {
              bRenderStickyHeader: _,
              strSectionLabel: _,
              strSectionClassname: _,
              bUseHorizontalLayout: _,
              fnOnSeeFutureClick: _,
              bShowEarliestFirst: _,
              fnOnEventClick: _,
              bSuppressHoverEffects: _,
            } = this.props;
            let { rgCalendarItems: _, bIsComplete: _ } =
              this.cachedCalendarItems;
            if (_.length == 0 && _)
              return (0, _.jsx)("div", {
                ref: this.m_ref,
                className: _,
              });
            _.length && _ && (_ = _.slice().reverse());
            const _ = 3;
            let _ = null;
            _.length > 0 &&
              (_ = (0, _.jsx)("div", {
                className: (0, _._)(
                  _().GroupHeader,
                  _().CalendarRow,
                  _ && _().HeaderAtTop,
                ),
                children: (0, _.jsxs)("div", {
                  className: _().GroupHeaderTitle,
                  children: [
                    (0, _.jsx)("span", {
                      children: _,
                    }),
                    (0, _.jsx)("div", {
                      className: _().GroupHeaderLine,
                    }),
                    _ &&
                      _.length > _ &&
                      (0, _.jsxs)("div", {
                        className: _().SeeAllLink,
                        onClick: _,
                        children: [
                          (0, _._)("#EventCalendar_FutureEventsLink"),
                          (0, _.jsx)("span", {
                            className: _().SeeAllCount,
                            children: _.length + (_ ? "" : "+"),
                          }),
                        ],
                      }),
                  ],
                }),
              }));
            const _ =
              !_._.bRequireAllEventsLoadedInTimeBlock ||
              _ ||
              (_ && _.length >= _);
            let _ = null;
            return (
              _ &&
                (_ = _
                  ? (0, _.jsx)(_, {
                      rgCalendarItems: _.slice(0, _),
                      fnOnEventClick: _,
                      fnOnSeeFutureClick: _,
                      bSuppressHoverEffects: _,
                    })
                  : this.RenderEventList(_)),
              (0, _.jsxs)("div", {
                ref: this.m_ref,
                className: _,
                children: [
                  _,
                  _,
                  !_ &&
                    !_ &&
                    (0, _.jsx)(_, {
                      bShowEarliestFirst: this.props.bShowEarliestFirst,
                    }),
                ],
              })
            );
          }
        };
        _([_._], _.prototype, "rtSectionStart", 2),
          _([_._], _.prototype, "rtSectionEnd", 2),
          _([_._], _.prototype, "cachedCalendarItems", 1),
          (_ = _([_._], _));
        const _ = (_) => {
            const _ = (0, _._)().GetTimeEdgeForDirection(
              _.bShowEarliestFirst ? "forward" : "backward",
              void 0,
            );
            return (0, _.jsxs)("div", {
              className: _().Loading,
              children: [
                (0, _.jsx)(_._, {
                  size: "xlarge",
                  position: "center",
                }),
                _ &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)("div", {
                        className: _().LoadingProgress,
                        children: (0, _._)(
                          "#EventCalendar_LoadEventsProgress",
                          (0, _._)(Number((0, _._)().GetNumEventsLoaded())),
                          (0, _._)(_),
                        ),
                      }),
                      (0, _.jsx)("div", {
                        className: _().AdjustFiltersText,
                        children: (0, _._)("#EventCalendar_LoadEventsFilters"),
                      }),
                    ],
                  }),
              ],
            });
          },
          _ = (_) => {
            const { elDialogElement: _, fnShowLogonDialog: _ } = (0, _._)();
            return (0, _.jsxs)("div", {
              className: (0, _._)(
                _().LogInFeedRow,
                !_.bLargeMode && _().LogInSmallMode,
              ),
              style: {
                transform: `translateY(${_.nTopOffset}px)`,
              },
              children: [
                (0, _.jsxs)("div", {
                  className: _().PromptCtn,
                  children: [
                    (0, _.jsx)("div", {
                      className: _().LogInFeedTitle,
                      children: (0, _._)("#EventCalendar_SignIn_Title"),
                    }),
                    (0, _.jsx)("button", {
                      onClick: _,
                      className: _().LogInButton,
                      children: (0, _._)("#Login_SignIn"),
                    }),
                    (0, _.jsx)("div", {
                      className: _().LogInFeedText,
                      children: (0, _._)("#EventCalendar_SignIn_Text"),
                    }),
                  ],
                }),
                _,
              ],
            });
          },
          _ = (_) => {
            const { locToken: _, time: _, className: _ } = _,
              _ = _ ? (0, _._)(new Date(_ * 1e3), !0) : "",
              _ = (0, _._)(_, _);
            return (0, _.jsx)("div", {
              className: (0, _._)(_().TimeEventRow, _),
              children: _,
            });
          };
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = (_) => {
          const [_] = (0, _._)("byday", !1),
            [_] = (0, _._)("upcoming", !1);
          return (0, _._)(_._.LANGUAGE)
            ? (0, _.jsx)(_._, {
                bSalePage: !0,
                children: (0, _.jsxs)(_._, {
                  children: [
                    (0, _.jsx)(_._, {
                      exact: !0,
                      path: _._.EventViewByApp(
                        ":appid(\\d+)",
                        ":event_gid(\\d+)",
                        ":vanity?",
                      ),
                      render: (_) =>
                        (0, _.jsx)(
                          _,
                          {
                            ..._,
                            appid:
                              _.match.params.appid &&
                              Number.parseInt(_.match.params.appid),
                            event_gid: _.match.params.event_gid,
                            bInfiniteScroll:
                              _.match.params.viewtype == "inline",
                          },
                          "detailview_" + _.match.params.event_gid,
                        ),
                    }),
                    (0, _.jsx)(_._, {
                      exact: !0,
                      path: _._.EventViewByGroup(
                        ":groupid(\\d+)",
                        ":event_gid(\\d+)",
                        ":vanity?",
                      ),
                      render: (_) =>
                        (0, _.jsx)(
                          _,
                          {
                            ..._,
                            clansteamid: new _._(_.match.params.groupid),
                            event_gid: _.match.params.event_gid,
                            bInfiniteScroll:
                              _.match.params.viewtype == "inline",
                          },
                          "detailview_" + _.match.params.event_gid,
                        ),
                    }),
                    (0, _.jsx)(_._, {
                      exact: !0,
                      path: _._.OldAnnouncementViewByApp(
                        ":appid(\\d+)",
                        ":announcement_gid(\\d+)",
                        ":vanity?",
                      ),
                      render: (_) =>
                        (0, _.jsx)(
                          _,
                          {
                            ..._,
                            appid:
                              _.match.params.appid &&
                              Number.parseInt(_.match.params.appid),
                            announcement_gid: _.match.params.announcement_gid,
                            bInfiniteScroll:
                              _.match.params.viewtype == "old_inline",
                          },
                          "detailoldview_" + _.match.params.announcement_gid,
                        ),
                    }),
                    (0, _.jsx)(_._, {
                      exact: !0,
                      path: _._.OldAnnouncementViewByGroup(
                        ":groupid(\\d+)",
                        ":announcement_gid(\\d+)",
                        ":vanity?",
                      ),
                      render: (_) =>
                        (0, _.jsx)(
                          _,
                          {
                            ..._,
                            clansteamid: new _._(_.match.params.groupid),
                            announcement_gid: _.match.params.announcement_gid,
                            bInfiniteScroll:
                              _.match.params.viewtype == "old_inline",
                          },
                          "detailoldview_" + _.match.params.announcement_gid,
                        ),
                    }),
                    (0, _.jsx)(_._, {
                      exact: !0,
                      path: _._.NewsHubApp(":appid(\\d+)", ":vanity?"),
                      render: (_) =>
                        (0, _.jsx)(
                          _,
                          {
                            ..._,
                            filter_to_appids: [Number(_.match.params.appid)],
                            section_by_day: _,
                          },
                          _.match.params.appid,
                        ),
                    }),
                    (0, _.jsx)(_._, {
                      exact: !0,
                      path: _._.NewsHubGroup(":groupid(\\d+)", ":vanity?"),
                      render: (_) =>
                        (0, _.jsx)(
                          _,
                          {
                            ..._,
                            filter_to_clanids: [Number(_.match.params.groupid)],
                            section_by_day: _,
                          },
                          _.match.params.groupid,
                        ),
                    }),
                    (0, _.jsx)(_._, {
                      exact: !0,
                      path: _._.NewsHubCollection(":collectionid", ":vanity?"),
                      render: (_) =>
                        (0, _.jsx)(
                          _,
                          {
                            initialFilters: _(_.match.params.collectionid),
                            ..._,
                            filter_to_collection: _.match.params.collectionid,
                            section_by_day: _,
                          },
                          _.match.params.collectionid,
                        ),
                    }),
                    (0, _.jsx)(_._, {
                      exact: !0,
                      path: _._.NewsHubSale(":saleid", ":vanity?"),
                      render: (_) =>
                        (0, _.jsx)(
                          _,
                          {
                            ..._,
                            filter_to_saleid: _.match.params.saleid,
                            section_by_day: _ || _,
                          },
                          _.match.params.saleid,
                        ),
                    }),
                    (0, _.jsx)(_._, {
                      exact: !0,
                      path: _._.NewsHubContentHub(
                        ":hubtype",
                        ":category_or_language?",
                        ":tag_name?",
                      ),
                      render: (_) =>
                        (0, _.jsx)(
                          _,
                          {
                            ..._,
                            filter_to_contenthub_hubtype:
                              _.match.params.hubtype,
                            filter_to_contenthub_category_or_language:
                              _.match.params.category_or_language,
                            filter_to_contenthub_tag_name:
                              _.match.params.tag_name,
                            section_by_day: _,
                          },
                          _.match.params.hubtype +
                            "_" +
                            _.match.params.category_or_language +
                            "_" +
                            _.match.params.tag_name,
                        ),
                    }),
                    (0, _.jsx)(_._, {
                      exact: !0,
                      path: _._.NewsHub(),
                      render: (_) =>
                        (0, _.jsx)(
                          _,
                          {
                            ..._,
                            section_by_day: _,
                          },
                          "global",
                        ),
                    }),
                  ],
                }),
              })
            : null;
        };
        function _(_) {
          if (_ === "steam" && new URLSearchParams().get("branch") !== "beta")
            return {
              rgHiddenClans: [_._],
            };
        }
        const _ = _;
      },
      chunkid: (module) => {
        module.exports = {
          BreadContainer: "YaL4BAoqywnKnb5jbU_il",
        };
      },
      chunkid: (module) => {
        module.exports = {
          AdminPageCtn: "wC3_c2yhq3ppKA9AKQoTy",
          BaseUI: "_3ar6NZpkNtMK2pmiKMadXq",
          WidePageCtn: "uHgjQHyNygSKukDngfNQO",
          AdminHeader: "vrqqGANTuXeQs27RGumFj",
          Breadcrumbs: "_31raJsbMXVc33oW6c5hNxS",
          Required: "_1-jmJyKnLRFoN-GX0Oqor8",
          PageTitleFlexCtn: "_3uPTh_ikegl-PIq12cfjJg",
          PageTitle: "_2RxJB5bupbx0mkW8dYJQRE",
          Beta: "_1YBhTKSlOER8bOnp0BU4Wj",
          PageSubTitle: "okuL_y7hLnZUD5P4ACqUN",
          ValveOnlyTitle: "_3skaXOiv1_vtHc_pGOPNsc",
          ValveOnlyBackground: "_2FESGwA28dH3EVAa7uTsUX",
          SectionCtn: "_1eWwNe3G6T8EcVRg0R5Ftj",
          DividerHeading: "_2kKPmwgbsJ_P67Vo-HwwRf",
          ColumnCtn: "_1bjwXvgQa-kJBMijOLS8X5",
          LeftCol: "_1AqrivbzwCs57BXiugqpeA",
          ColHeader: "_3m2-TXBKQenlqzPUBuhbaD",
          Blue: "J7iYYml2Jf_PcaACW1hEr",
          ColHeaderImg: "_1VFkxNTzCFO2uCcle_nAJk",
          Bright: "_3ZqV0CAeVnd0rruF6TVKQz",
          ActionBar: "ilVbVkb6hkO_s6E_kiiSd",
          SectionIntroRequirements: "_3TKZIwYk2f5dd3MR5909Uz",
          warning: "_2HiNh3o5cgMEbzFKYBUjAy",
          IntroText: "_1WWL_09T_-Jq--HSJRhKtH",
          RightCol: "_3kaQhRnhNh_awrnNX90rui",
          NoSticky: "JQNb8bHftBTAYpCXTx52v",
          SmallText: "_3ltg5fPzb-WsRyzI41vAv_",
          Button: "_3L1DFwM1lpsRwZ-AaMx9ie",
          TitleSmall: "_3DyXNd5UgceEG9fcCKinvw",
          DefaultSectionCtn: "Pupnokb21glaosRjxBjAm",
          Indent: "_7PV326-4cpZdmTCEdgC2l",
          DashLink: "_2NH_FlbsKA0jN2jPG4Rn9A",
          FlexRow: "_3rz6jzCvvOGt8N0XaPIdzg",
          MarginBottom: "_2Bw2oyBgXlb8EZ4HHbE8Ye",
          UploadedImageDisplayCtn: "_1_JRuj6yAJovBDZE8IMSob",
          UploaderLeftCol: "_3KQhw0sa1q_h62e4yaFgbw",
          MarketingMessage: "_2pCvRF734J5gLxMMHW7LIb",
          BannerPreview: "_1x4unTauuLCbMkThgRpsXc",
          UploaderRightCol: "_3jcvvtnLhiQBvAebO2eI4Z",
          LangCountTitle: "_1tPNH9hTWnMUsbdob5i93a",
          LangSelectCtn: "_3tHzJ-eCQIlg-4XjTN0bNU",
          UploaderImgLang: "_1jJThBArHevzcJ93kx4WhR",
          LangSelected: "_1sUrnQsBw06ZqTIbMeE9tT",
          DeleteAll: "rYuknI3K1VFknv90GNUTc",
          EditCtn: "_1g5X3AT4HwD0ya2e2t2WTO",
          StatusBtn: "_1MGZHxsnyQPrLXwl-8Fium",
          HalfWidthBtnCtn: "fGJIpDJEvYkHmhWFP39BX",
          StatReportCtn: "_1J3v1KGOhdSGz77c2rLxWy",
          Stat: "_3OYQbVCq1yBuEx1XcDzG06",
          BigStat: "lYYwDDss378Sm0FKPBxPh",
          IncreaseRateInfo: "_2yY3XT7VPyYBZS3FCEGgRS",
          AdminVerticalTabs: "_38rhsxAONglYlA01yweB9r",
          RightPanel: "_1QYBs5PGw6PClZRx9WNL6z",
        };
      },
      chunkid: (module) => {
        module.exports = {
          LanguageHeader: "_3lQvIyPYpaHHXs7hQOWgDs",
          CuratorInfoRow: "_3tR2dfU_Wenr_xcshy1wUY",
          CuratorInfoImg: "_1BVHFIbcMgjId-0ciy-1ob",
          CuratorInfoName: "_2X1CS5jZKk28-_m8wP08G8",
          CuratorInfoTitleCtn: "_3odsmWB7MUrxxcucBMYcgN",
          CuratorInfoActionCtn: "_2y3rSYHLpo0MERj2EMWQQ9",
          CuratorInfoPreview: "_1EbwpNpOWS4nmsjolxyUhi",
          CuratorInfoIcon: "_3Y0jFDFWk_msMNnvpgfjwB",
          CuratorInfoFollow: "_1I_eQgAgorxHE60P5m2zqq",
          CuratorHoverContainer: "_38fVPOADgxGJbfbw7jz_uG",
          CuratorHoverToolTip: "rSTyUxh3-fZYKih45mKb1",
        };
      },
      chunkid: (module) => {
        module.exports = {
          FeedSuggestContainerBG: "_3ICp4Zk0uKS3wBOo3rcx-6",
          FeedSuggestContainer: "_1420TVzKCePW589d4gqd4d",
          FeedSuggestCaption: "_38Zh0nmnrxXlh3yhtCnIPn",
          RowContainer: "_39bJZgNeIUX9mSWi0r8tNT",
          ClanInfo: "_2gUTgIVt7XIFc01CxohM9B",
          DismissButton: "_3YtGjvmV0WmN0i3sdMqGz2",
          BrowseMore: "_2nWAPvq239PI0lGHmtFmgc",
        };
      },
      chunkid: (module) => {
        module.exports = {
          strMaxMobileWidth: "700px",
          strMinMobileHeight: "360px",
          strDesktopControlBarWidth: "300px",
          strDesktopGlobalHeaderHeight: "104px",
          strMobileGlobalHeaderHeight: "62px",
          strDesktopHubBannerHeight: "80px",
          strMobileHubBannerHeight: "80px",
          strJumboHubBannerHeight: "150px",
          strDesktopGroupHeaderHeight: "70px",
          strMobileGroupHeaderHeight: "37px",
          strMobileNavBannerHeight: "52px",
          strLogInBannerLargeHeight: "239px",
          strLogInBannerSmallHeight: "70px",
          HubBanner: "_2zTu0OPJoqo1BXb1J9pDJ2",
          LargeMode: "_3OnTrhLh97xov3GKenO-l_",
          CloseFilterPage: "_3XZe_jfTYppPFYW0hZ0LRl",
          ShowSettings: "_1qCUdL_PYKT0_bKFAFAWQa",
          ControlPageContainer: "_2LztMgS2eI0MWKHJ3v-l0H",
          FiltersTitle: "tQZ7I-5Bxpp4zpDf48imu",
          FiltersDescription: "_17nuaBuSlylN8eWUkcLsAv",
          SidebarContainer: "_15YLDKm80opUF5Tivo7UK-",
          SidebarCollapsed: "_3x2Igmho_SeKqPI3_cnWfG",
          CollapseButton: "_1RCioHSgo99b0iUemHy2OE",
          DesktopButton: "_2vMIlVM2BeWTC0m5_Ys2WN",
          SidebarBackground: "_1ZO60tnVO9UhZWFk1zLM4r",
          Sidebar: "_1nf0vlWuKk9Qn7ncHC5uhq",
          SidebarTitle: "_3uZE-tI5d1lF6NQwSrxauh",
          FilterControlPage: "_uX0hAa1v6coYNh6Al4D6",
          FilterOption: "_2LoObf7xShKZbZ1G71rR_3",
          FilterSubOption: "_2ctVaeTDGGfjh-pOjQ4ktO",
          SideBarFilterNavLinks: "fhYfjG7Ry-VB6uq75Ccbm",
          FilterLink: "_1zyVyzldzUj085oNa8Y0r1",
          NumberDisplay: "_23qmf5MYL9D2szWuV-txE2",
          FilterSettingsCtn: "_3CSX8aqaZna9ZM6WLxhZC3",
          OpenFilterSettings: "_3cMESjaODP5L2fXHzANkNT",
          SidebarBackLink: "_2NQEg_ngTN4otkyy-9VfGQ",
          MobileCloseButton: "_3Es2qlfJBkwe2Yqco9B1VL",
          FilterSection: "_34HOA5NqMETdKvOv8I0QPz",
          FilterSubSection: "_1Ko6oJ92gSqJKHJhVCi2Pc",
          FilterSubSectionTitle: "MeJhm7ZvNEcgMNrj4YyRg",
          ForceResponsiveLink: "_3dRqLQAbzE1yESy7-PmVZK",
          SidebarLink: "_2VFTM7o6Mn2fvJXYr9mSVo",
          SidebarManageMutedApps: "_2IWYfBr6LLolwVjYdZcBco",
          MutedSourcesGroup: "_2B7QL2HvQhNvxTElRnADjb",
          MutedSourcesCount: "_3nwCq_gduAro-qt7Kt3x6s",
          SidebarFooter: "_3sXsgTKq8xa1K7EYzNNOBq",
          FooterLegal: "_3YG_3Z8DhgeYtKBWrOkNAA",
          MobileButton: "_3cMvc6AfC8k2OaILY81XXB",
          BodyNoScroll: "_1d-cxT1sPNzIVcm8qsNT7o",
          EventCalendarContainer: "_1e3WbBz7-mqMKmK8HnpzFF",
          CollapsedMenu: "WXATz6O52NqxwM0VJR-rV",
          ReserveControlSpace: "_18npkDI3gKg9S7EeTFOj-2",
          WideLeftGutter: "ws9ANxmy2MKDDodGRGkqN",
          LogInFeedRow: "nydHEEVdYQNQyocchG2Kr",
          RowContainer: "_3yqpPRFLwr6ETVDgLGT37s",
          Loading: "_2XF_gSfLb9JlFYAqd0PRA8",
          LoadingProgress: "_2k5Q_MrQn9caFbIUp8eEdr",
          AdjustFiltersText: "gM9YyLCnVPfTKfy2_Hsue",
          Rows: "r3Dia2Yw2X-goqFn-_UPT",
          FutureSection: "_290nkT9By-jIKGFyKBcIn3",
          PastSection: "_3FpvGiwJqnukNOcrsKd_sN",
          DarkerBackground: "_1U2BW9tpHKOVi_TG0XvjT",
          EmptySectionText: "_3TwYr6FsLY9hGiZ2Ed5897",
          CalendarEventListRow: "_3m6GW1eCeaSg9ypsv0JVD9",
          CalendarEventListContainer: "_3QenzSfSDt0SQcUy8yeaD-",
          CalendarRow: "_398u23KF15gxmeH741ZSyL",
          EventListTitle: "_qpO2uX5bg1l7b0G2FbFI",
          GroupHeader: "_3j2deAP85R6gftsIWiHe7n",
          GroupHeaderTitle: "_2aVLRsz60HV81P8VKT3kQj",
          GroupHeaderLine: "bcTEUtZM5us_nPhh-83J9",
          SeeAllLink: "_28rp7N0KcAtfF3xtD0m2DZ",
          SeeAllCount: "IOckOLV5f75IljZ0DqXdX",
          HorizontalTileContainer: "muk0v4M7AjwCVox0Kk1Q6",
          HorizontalTiles: "_1YVOyhzWrYyfeINbwhHVqc",
          HeaderAtTop: "_2VZunYlTR5OcMdubo0AYh_",
          EndOfRows: "_1lK7p5C13fouRsvpdUxeya",
          BackToThePast: "_18uWsMJww9J9esJ56PvIGe",
          MobileSeeAllink: "_3yeVNRj7J_UtR-fgIDVAMr",
          NoCount: "_2qW89hLYPJtBAANjQ9kJR-",
          LiveText: "_14EbBf2Uz8VI7xVl0RuDue",
          UpdatePageBanner: "_1hWgY3UxRcdnjka_axlCxE",
          LoginPrompt: "_1EXXCsUBCckCnFzBip-EwP",
          LoginButton: "_1wuxXz1nGOaX_Hj3qnXchJ",
          SpecialEventListGroup: "_5UEq9U_QY0YTaXXOsSIV2",
          SpecialEventListTitle: "_2fFKiTlt1nFQb3dFvEaqWW",
          SpecialEventList: "_3AESvlyhJ0vmRThgNB6Ebb",
          SpecialEvent: "_2s-UQIMf5ZWwh4641BF6Vy",
          SpecialEventTitle: "_3xq6Fl5_4RS4LYFK0NJGY1",
          SpecialEventTime: "_3cGYpNuy_GrG8AK-OwuvIZ",
          NewsChannelGroup: "_3U5MYaJE0i8UYZ_pUzyNk7",
          NewsChannelListTitle: "_3X16Tg0OrHJJL36_8dwlHo",
          NewsChannelList: "_19CIwB_GEUli1IquP3CIHn",
          NewsChannel: "_1n4vpyqKJYF8lc1kW9fr8-",
          NewsChannelText: "_2NbubYs7clHa8InE5qSifq",
          NewsChannelCount: "_1HQl8PnDDWs3V4bob4bBNk",
          NewsChannelOnPage: "kJoC7bJXT-uU6GorEljio",
          NewsChannelTitle: "_11O61s8Pr7CrLbKxzm9VMK",
          NewsChannelSubtitle: "_3_CIMpiaZYsgSD9rEIImZh",
          DiscoverGroup: "kUY00QAjWvDLtDIbUN5A",
          NewsChannelIcon: "_2NCtvce1qaFUggZ9OFpf8N",
          SidePanelGameSearch: "_1LTVIwFRYJjiwzhWzSVOd4",
          MobileNavBannerCtn: "_20PrZ-yvcNH561NUmAH7_Y",
          SearchDismiss: "eIKAr3iSqLCgmFyiNryB2",
          SearchBox: "_2i8gkeopkt1mSdGiNXYmd-",
          SearchExpanded: "_3rn-PPTfKI7di5ILvkjVyy",
          SettingsPanel: "tifiV2QTtklqCycSc8RpW",
          MobileNavHScroll: "yps0ywc-By1zfTHujot5E",
          MobileNavBannerList: "_3xi45UCnCWYdn3vwsjNkYD",
          MobileNavButton: "_3kOf_98MdXe617YcQtkFO6",
          MobileNavCount: "_3m7pyQzrfOHXYdheEaL0oM",
          MobileNavButtonActive: "_2XXBax726YbJCKgIAAgPhM",
          CalendarEventList: "_3Pm1aWPIBv2SjplauZbDnI",
          LogInSmallMode: "_21ANYFXCED2fJk0gtzrBci",
          LogInFeedText: "_3HgPBoJHm2b4URrMDxMeAs",
          PromptCtn: "_19gywKI5KqBR4uSRoXMxmB",
          LogInFeedTitle: "cmQc676wTF0GVI4iDpw_g",
          LogInButton: "_35WTOIomH5SPesM-UbjHBB",
          LazyCalendarSectionCtn: "_1_BP6N2tGh4484bcmYnZeX",
          TimeEventRow: "_2JQL9twuHonw_iuvnsdVBi",
          TimeEventLastPlayed: "_1QplXJ_L-d0BqrYdzD7uSN",
          TimeEventWishlisted: "_3_HujJS7DVArS8dgqixpOJ",
        };
      },
      chunkid: (module) => {
        module.exports = {
          simpleTitleSmallHeight: "80",
          simpleTitleLargeHeight: "200",
          SimpleTitleHeaderCtn: "_3VhPz9bkSXYdTyrsNHyclF",
          CollectionBannerGroup: "XKrAaB35oi_F1FfPvgMIe",
          AppBannerLogoCtn: "_1Vrsgns9yWeU55IkUV47iw",
          SimpleTitleCtn: "zWLw0Q_JjKfhgFgSDvBu1",
          Title: "_1_MCH_a2eJssfIIs2ipZjw",
          Subtitle: "_2Ym_jx4AIkRhj7T0qvKwhx",
          LargeHeader: "_1Y7af9n7NgyJVP8OA1voO5",
          NoHeaderImg: "_1wnpWYTPyd-qnyinYlNKwa",
          AppBannerLogo: "QDuRwp2w0MLb6hWd0_HT8",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          GameTitleContainer: "WHJ_WMTSDKqO4yn_MLrau",
          AppIcon: "_3gwk6hFh7bUc2K174mzjyQ",
          TileTextAppName: "_71phFKOzg8aQlBU1rCA2T",
          EnableHovers: "_2BniJe0boLDKV9lwtWTCtm",
          TileContainer: "_1E3Anhs34BXsWWWqH4RNPL",
          CoverImageCtn: "_3HF9tOy_soo1B_odf1XArk",
          GameShortDescription: "_3Se1TZA5yo9V-vrUszNDAI",
          LiveText: "RNDf0d63hDSUu28sIkteH",
          LiveNow: "EVDkYKG_ikfyfH16lmQ-1",
          FutureDateText: "_2xdhMrjKEposPfgPK9UPe-",
          PastDateText: "_4-fqVd8yRSHEAjj7Hkx_V",
          GameSource: "vfv1QjSe1vEobRaHWlf3",
          SourceList: "_3BIx7glwN6Q0_mUUMyFyHu",
          Source: "_2lYFqIB0i1IONPFV4BTvfl",
          RecommendedSource: "_3ayJyXzZoAWy8wXs6YlftR",
          SourceRecommended: "_1yaRLkRkzjuw8xLjPX-zlc",
          DateAndSourceLine: "_2xxMBw-_ndXEC-SIBejGuu",
          EventTypeAndDateCtn: "sUBHF-Qdb_RUPYOBkgO1a",
          LeaveRoomForReminder: "_3djUmSsXnHX2qN5HdooYJz",
          SmallAppName: "_1-Jl_evfBGuwaMNm1CNSR5",
          TileTextCategoryType: "_1LkWXJVxWYdKiKf2Mxq3zs",
          EventType28: "_1qGfEmcWJdG1dp2gDhH7oP",
          EventType10: "_22QY5O4_i6LqHbtIXgilEV",
          EventType11: "_2Gv13-3mXe6Q4QJmTs3mNX",
          EventType23: "_590_lEtmh8atjjKVBT9t7",
          EventType35: "_2wHiBVvtv56AMUWeVWRbuz",
          EventType13: "_2D0ZNOuC3rrY9bf_BY1msw",
          EventType14: "_2mVdtaB_oY5b1fladlbBaM",
          EventType15: "_2Xke62sWB6bPMJuv72Qkw8",
          Tile: "_3xvUZtQ1j-pu-l2xy-lFAq",
          MainContentContainer: "_2pq2vP5kJ_wI2nw-igwJXF",
          YoutubePreviewImage: "_1UgZvqy4xNDdu4gJ6tlT-Q",
          TileImage: "d8bPiEt0DUII_mRqek_ht",
          TileTextContainer: "_3IQK4rcEU5IYtZuW-Ogsgu",
          EventType12: "_2X_hMZpqI8fyqbeFPi4JPj",
          EventName: "_1M8-Pa3b3WboayCgd5VBJT",
          EventSubTitle: "_1JjUp7sfpntpaOqu1_lyvO",
          GameCapsuleCtn: "_3HJFiuJiM5fUKk0czInoZg",
          AppBannerLogo: "u8z1m_ainssHj7AbLKOZs",
          FallbackImage: "_9rv9PL7ZWe4vZofYqYl3M",
          ClanSource: "_17Iog8CXlR0s8DuWS0rD0n",
          TileTextHeader: "_3-0KOhYVQX2zIP3z-jCAdu",
          PatchIconCtn: "Fm9_5yqk4wkh8BTsDC7CU",
          EventTitleCtn: "_1h5cJPC1IYFGDEMbRAWSNy",
          Footer: "_1tdf14bc7ZlvhWfiLIlpEf",
          EventCapsuleCtn: "_27kWH1D3y2WfR8D-sD8Rw2",
          LiveBroadcastPreview: "_4UYuS9QM4MsN9y4q5Livc",
          TileBackgroundImage: "gGujG17QdIx5Nn89DjTl8",
          TileCoverImagePlayable: "_2eoFkqfZovVT02IaU8nRNn",
          TileCoverLiveIcon: "_dmbjH8bEtPkaRrVTzwov",
          ReminderContainer: "_1_taBomEIggVub90iRWW1Y",
          OnlyIcon: "iO5Eug6GGz9JIqPndBJIG",
          EventSummaryDefault: "_2g3JjlrRkzgUWXF57w3leW",
          Vote_NotLoggedIn: "_17oqR-EnZiAHLri2CKnxmC",
          Vote_LimitedUser: "_2FlPoqF3vz8s8KjjoZ7sXn",
          Vote_Positive: "ysX-kDvwrjduqk2LGUkUg",
          RateIcon: "_2se4HtRbAckWOfTCGHox0X",
          Vote_Negative: "_3LqNuO0ebCJ_aJo3YJYjdE",
          Vote_Ready: "_3issE2anPtdsqPA_3_72Z0",
          FooterRightSide: "_1Hhqg7g-POjV0ysalDN4YM",
          Options: "_3nZg0h8xaxxZeW0g870Htl",
          TileViewerCount: "pg-a3zK8HAVaAKqUDx7t-",
          FooterStat: "_3_86JJo-1O_KkOZwRl2uZ6",
          CommentIcon: "Wn7qAQikmqUtnSPDCnzi3",
          CommentIconCtn: "PR8xM_Lig1kieA79gLjOB",
          LoadingTile: "_24QfL3thPI_MZMIbgL7tmb",
          CarouselMode: "_144ghSsl2jkmXzzHxgtQtX",
          UpcomingMode: "_2vzY3sqcpyNcqGqlP6cLOv",
          TileVideoIcon: "aK0jlBL0B6MxMGC4n-WzB",
          DateAndTime: "_1gEM9daUydLT65bFx2wXwE",
          HasVideo: "qbgBAwp3iK3ESknHvr2SQ",
          SubTitleShown: "_5C13zntXVrSwbAGXNrmv6",
          VideoPlayerReady: "_1onQjxTJsTnadbj-DAgoPK",
        };
      },
      chunkid: (module) => {
        module.exports = {
          EventTileCarousel: "_1mKD0MQ507t89Ii7mxDqSO",
          HorizontalTiles: "_1mUGBQxkYbGPRBk1SDhMHi",
          EventTileCarouselTitleContainer: "_3I_aGTx-KPOMeeyG7MAhPl",
          EventTileCarouselTextTitle: "_1kQ9N4FGH5M9XE7WS_Tk4o",
          EventTileCarouselTitle: "_3X3hCmDBBr2dKG-77H4TuQ",
          EventTileCarouselFollow: "_1qgVA9sM06WHigo755qFWq",
        };
      },
      chunkid: (module) => {
        module.exports = {
          LanguageFeedNoteBucket: "r8580cv-HTxYA6k0N1n-U",
          LanguageFeedNoteCtn: "_3jTgs16YR8cjlIdBj-VfXM",
          BodyFlow: "_1JI7CLvlOj0UNyivvhIaO4",
          LeftColumn: "_3l03TsLKQ1kgJ9y9srfOtu",
          RightColumn: "XKuYh_bCSCQcXf-hL_G3Y",
          Title: "TzlhguvzJY0mbc-5KxGQW",
          LanguageList: "_1VBz-c24qcoV4360Y5ZW2b",
          Text: "_1SGbC-0D-qeX8p1wEKWHcN",
          DismissButton: "_3zHKDN908qfKPXxxiQRS1A",
        };
      },
      chunkid: (module) => {
        module.exports = {
          DashboardView: "_1QwMyGKe9F8g1QnNoMz1JP",
          HeaderCtn: "_3KXER7qT57ii-dLNJO926C",
          TotalsCtn: "FQKvUJASJ1JVJ28HSbIt-",
          EventDetailView: "_2xYo3SIDAveAIlOqU6Tolu",
          HeaderStat: "_3VEmudDnkNmWv6uoQEicRy",
          StatFigure: "_30CaMtSkoYlQf82iQSskB6",
          StatsTitle_ctn: "_1QGGF04ktVe1bIIhdEtXaD",
          StatsTitle: "_3YLaBiVHp_mPV3f8YD9MrK",
          StatsCtnTitle: "_1LlRFhVuQF26o2UG7Vg5s3",
          StatTitle: "_1SPyq_BoQrA60DbjY_Eoke",
          VisibilityNote: "_1G-k1HX2M60Sx-vP4SEe5k",
          StatsActionRow: "_23Ra5sX6-aVU2ayKSkIzE5",
          StatsCtn: "hWCs41T0tFwuGLTHxvthv",
          StatsLeftSection: "_3L-uhfyc1hVkz4mrHwVm9x",
          StatsRightSection: "_1yibDM6eeZtYQXEdjO_Scg",
          ModerationWarningCtn: "_3Jwi3DKhGEzxba2BP4X8wo",
          ModerationWarning: "_1aIU0L2u2GWHUvc2oV1zyd",
          ModerationNote: "_11Z9Iz4InEbE8AVPdJ6iFY",
          DisabledStats: "_2Zp-jzTV09Qjj3uTxcFLN3",
        };
      },
      chunkid: (module) => {
        module.exports = {
          LegalFooter: "_2XzXRucgCsdN2x7oRwSJu0",
          FooterLegal: "_7TrXidlVTKkfcdujKCtM5",
          mainmenu_socials_china: "sfMZciSGx86izSy_6vXjH",
          mainmenu_social_box: "_1BGLVq8Z8sJY-fjcMuT2VP",
          mainmenu_line: "ykCRRQsIcQBjAwGpnQFG7",
          mainmenu_links_china: "_9ImS9D7NtBJGkHgcrwlUX",
          mainmenu_legal_china: "_3hCum12eFRKC9ukPg3-305",
          mainmenu_legal_pwlegal: "_3RFkMNbBZIBVARA4st-AjH",
          mainmenu_logos_china: "_3D_5cMcjUFurdWptDxoP3y",
          mainmenu_china_wechat_logo: "_2sDKMGZPUGhXYuJnr4RO2g",
          mainmenu_china_weibo_logo: "E2dhWjYyH6xGs7zJ2KHC8",
          mainmenu_china_pw_logo: "_2vnv_k5xmD37qKbr7I8pTr",
          mainmenu_china_valve_logo: "Ig7VEoh78RH53WEJS3MKv",
          mainmenu_footer_spacer: "_3w1gNL-euGEyq49PCOGvbQ",
          china_spacer: "_16fnFsYrB3xAg2va_37FfV",
        };
      },
      chunkid: (module) => {
        module.exports = {
          SuggestContainer: "_2gBFqL_6eXiRN7TI_GDjzF",
          Results: "_3eXNgAtnlHBfgWZbxO2n3h",
          EmptyResults: "_3w0K5X735sKAZhhifZGs84",
          ResultSectionHeader: "_1KK1sGDuxehec0lBB_4lpU",
          ResultRow: "_16oSf0MiTpUTJe7YQpCV2A",
          AvatarImage: "_3dr2A8wfoYU0kJtS9ACoR1",
          GameName: "_3CWrph5moGF_F746uM5tdI",
          Label: "I1zVikvORZt41zc-QTAsw",
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
          ErrorMsg: "_1ZEL9R8kTy3jJqcuU_IguM",
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
