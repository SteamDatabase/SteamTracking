"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [12694],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
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
        const _ = _._.CHAT_BASE_URL + "public/images/broadcast/ti9_30x30.png",
          _ = _._.CHAT_BASE_URL + "public/images/broadcast/yule_30x30.png";
        class _ {
          bValid = !1;
          stream = {
            0: "#Broadcast_EnglishMain",
          };
          name = "";
          appName = "";
          appID = 0;
          link = "";
          linkName = "";
          tabIcon = "";
          offlineImage = "";
          gidEvent = "";
          constructor(_) {
            (0, _._)(this), this.init(_);
          }
          init(_) {
            (this.bValid = _.bValid),
              (this.stream = _.stream),
              (this.name = _.name),
              (this.appName = _.appName ?? ""),
              (this.appID = _.appID),
              (this.link = _.link),
              (this.linkName = _.linkName),
              (this.tabIcon = _.tabIcon ?? ""),
              (this.offlineImage = _.offlineImage),
              (this.gidEvent = _.gidEvent ?? "");
          }
        }
        _([_._], _.prototype, "bValid", 2),
          _([_._], _.prototype, "stream", 2),
          _([_._], _.prototype, "name", 2),
          _([_._], _.prototype, "appName", 2),
          _([_._], _.prototype, "appID", 2),
          _([_._], _.prototype, "link", 2),
          _([_._], _.prototype, "linkName", 2),
          _([_._], _.prototype, "tabIcon", 2),
          _([_._], _.prototype, "offlineImage", 2),
          _([_._], _.prototype, "gidEvent", 2);
        let _ = new _({
          bValid: !1,
          stream: {
            0: "#Broadcast_EnglishMain",
          },
          name: "",
          appName: "",
          appID: 0,
          link: "",
          linkName: "",
          tabIcon: "",
          offlineImage: "",
        });
        function _(_) {
          (_ == "76561198888084799" || _ == "76561198910244427") &&
            _.init({
              bValid: !0,
              stream: {
                "76561198888084799": "#Broadcast_Stream1",
                "76561198910244427": "#Broadcast_Stream2",
              },
              name: "Cologne Major 2026",
              appID: 730,
              link: "https://store.steampowered.com/app/730/CounterStrike_2/",
              linkName: "Counter-Strike 2 on Steam",
              tabIcon:
                Config.CHAT_BASE_URL +
                "public/images/broadcast/cs2_major2026_cologne_icon.png",
              offlineImage: "public/images/broadcast/cs2_major2026_cologne.png",
            }),
            _ == "76561197960266962" &&
              _.init({
                bValid: !0,
                stream: {},
                appName: "Winter Sale 2019",
                name: "Yule Log",
                appID: 0,
                link: "https://store.steampowered.com/",
                linkName: "View Sale Info Here!",
                tabIcon: _,
                offlineImage: "public/images/broadcast/winter_sale_2019.png",
              });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = ((_) => (
            (_[(_.Hover = 0)] = "Hover"),
            (_[(_.ClickPopup = 1)] = "ClickPopup"),
            (_[(_.ClickSurroundingRegion = 2)] = "ClickSurroundingRegion"),
            _
          ))(_ || {}),
          _ = ((_) => (
            (_[(_.Chat = 0)] = "Chat"),
            (_[(_.Notification = 1)] = "Notification"),
            (_[(_.Error = 2)] = "Error"),
            _
          ))(_ || {});
        class _ {}
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
        let _ = !1;
        function _(_) {
          return !!(_ && _.thumbnail_http_address);
        }
        function _(_, _) {
          if (_ || _) {
            const _ = _ || _;
            return !!(_ && _.Get().BIsAppStreaming(_));
          }
          return !1;
        }
        const _ = class _ {
          constructor() {
            (0, _._)(this);
          }
          static s_GlobalStore;
          m_inFlightRequests = new Map();
          m_lookupKeyToEmbedStreamDef = new Map();
          m_lookupStreams = new Map();
          m_playReadyStream = new Map();
          m_bMapHasStartedVideo = new Map();
          m_mapBroadcastChecked = new Map();
          m_pageChatStatus = "hide";
          m_streamChatStatus = "hide";
          m_bUserChatExpanded = void 0;
          m_bUserPreferenceHideBroadcastByDefault = void 0;
          m_bCollapsed = void 0;
          m_setStreamChangedListeners = new Set();
          m_bUseFakeData = !1;
          m_onLoadContextCall = new Map();
          BHasStreams(_) {
            const _ = this.GetStreams(_);
            return !!(_ && _.length > 0);
          }
          AddCallbackOnNewContext(_, _, _) {
            this.m_onLoadContextCall.set(this.GetStreamsLookupKeyFromDef(_), {
              name: _,
              fnCallback: _,
            });
          }
          ClearCallbackOnNewContext(_) {
            this.m_onLoadContextCall.set(
              this.GetStreamsLookupKeyFromDef(_),
              null,
            );
          }
          GetPlayReadyStream(_) {
            let _ = this.GetStreamsLookupKeyFromDef(_);
            return this.m_playReadyStream.get(_);
          }
          BIsEmbeddedBroadcastHiddenByDefaultUserSettings() {
            return !!this.m_bUserPreferenceHideBroadcastByDefault;
          }
          BIsEmbeddedStreamCollapsed() {
            return !!this.m_bCollapsed;
          }
          SetEmbeddedStreamCollapsed(_) {
            this.m_bCollapsed != _ && (this.m_bCollapsed = _);
          }
          GetConcurrentStreams(_) {
            const _ = this.GetStreams(_);
            return _ ? _.filter((_) => _(_)).length : 0;
          }
          GetChatVisibility() {
            return this.m_pageChatStatus === "remove" ||
              this.m_streamChatStatus === "remove"
              ? "remove"
              : this.m_bUserChatExpanded !== void 0
                ? this.m_bUserChatExpanded
                  ? "show"
                  : "hide"
                : this.m_pageChatStatus === "show"
                  ? "show"
                  : this.m_pageChatStatus === "hide" ||
                      this.m_streamChatStatus === "hide"
                    ? "hide"
                    : "show";
          }
          ToggleChatVisibility() {
            const _ = this.GetChatVisibility();
            _ !== "remove" && (this.m_bUserChatExpanded = _ === "hide");
          }
          DebugDumpContextAndAvailableContext(_) {
            console.log(
              "Requested context",
              this.GetStreamsLookupKeyFromDef(_),
            ),
              console.log(
                "Available context count: ",
                this.m_lookupStreams.size,
              ),
              this.m_lookupStreams.forEach((_, _) => {
                console.log(_, _.length);
              });
          }
          GetStreams(_) {
            const _ = this.GetStreamsLookupKeyFromDef(_);
            return this.m_lookupStreams.get(_);
          }
          GetBroadcastURL(_) {
            let _;
            return (
              _.steamid
                ? (_ = new _._(_.steamid))
                : (_ = _._.InitFromAccountID(_.accountid)),
              _._.COMMUNITY_BASE_URL +
                "broadcast/watch/" +
                _.ConvertTo64BitString()
            );
          }
          BIsAppStreaming(_) {
            let _ = !1;
            return (
              this.m_lookupStreams.forEach((_) => {
                _ ||
                  (_ =
                    !!_ &&
                    _.some(
                      (_) =>
                        _._.GetOrCreateBroadcastInfo(_.steamid).m_nAppID === _,
                    ));
              }),
              _
            );
          }
          GetStreamsForAppID(_) {
            const _ = new Array();
            return (
              this.m_lookupStreams.forEach((_) => {
                _?.forEach((_) => {
                  _._.GetOrCreateBroadcastInfo(_.steamid).m_nAppID === _ &&
                    _.push(_);
                });
              }),
              _
            );
          }
          AddStreamChangedListener(_) {
            this.m_setStreamChangedListeners.add(_);
          }
          RemoveStreamChangedListener(_) {
            this.m_setStreamChangedListeners.delete(_);
          }
          async LoadBIsEmbeddedBroadcastHidden(_) {
            if (this.m_bUserPreferenceHideBroadcastByDefault === void 0) {
              let _ = (0, _._)("broadcastuser", "application_config");
              if (!_)
                try {
                  let _ =
                    _._.STORE_BASE_URL +
                    "broadcast/ajaxgetuserbroadcastpreferences";
                  _ = (
                    await _().get(_, {
                      params: {},
                      cancelToken: _.token,
                    })
                  ).data;
                } catch (_) {
                  console.log(
                    "LoadBIsEmbeddedBroadcastHidden: " +
                      (0, _._)(_).strErrorMsg,
                  ),
                    (_ = {
                      bHideStoreBroadcast: !1,
                    });
                }
              (0, _._)(() => {
                (this.m_bUserPreferenceHideBroadcastByDefault =
                  _.bHideStoreBroadcast),
                  (this.m_bCollapsed = _.bHideStoreBroadcast);
              });
            }
            return this.BIsEmbeddedBroadcastHiddenByDefaultUserSettings();
          }
          async SetupEmbeddableVOD(_, _) {
            (this.m_bUseFakeData = !1),
              (this.m_streamChatStatus = "remove"),
              (0, _._)(
                !!_.nAppIDVOD,
                "SetupEmbeddableVOD requires a VOD appid",
              ),
              await _._.Get().QueueAppRequest(_.nAppIDVOD, {
                include_assets: !0,
                include_trailers: !0,
              });
            const _ = _._.Get().GetApp(_.nAppIDVOD),
              _ = new _._();
            (_.accountid = 0),
              (_.nAppIDVOD = _.nAppIDVOD),
              (_.default_selection_priority = _._.k_ePrimary),
              (_.current_selection_priority = _._.k_ePrimary),
              (_.thumbnail_http_address = _?.GetAssets()?.GetHeaderURL() || ""),
              (_.title = _?.GetName() || "");
            const _ = this.GetStreams(_);
            if (
              ((0, _._)(
                !!_,
                "SetupEmbeddableVOD called before the streams loaded",
                _.nAppIDVOD,
              ),
              _.unshift(_),
              _)
            ) {
              const _ = this.GetStreamsLookupKeyFromDef(_);
              this.m_playReadyStream.set(_, _);
            }
          }
          async HintLoadEmbeddablePreviewStreams(_) {
            let _ = {
              eventid: _.event ? _.event.GID : void 0,
              previewAccounts:
                _.bIsPreview && _.accountIDs
                  ? _.accountIDs.slice().sort().join(",")
                  : void 0,
            };
            try {
              const _ = await _().get(
                _._.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpreview",
                {
                  params: _,
                },
              );
              return this.HandleHintLoadBroadcastResponse(_, _.data);
            } catch (_) {
              let _ = (0, _._)(_);
              console.error(
                "HintLoadEmbeddablePreviewStreams hit error loading: " +
                  _.strErrorMsg,
                _,
              );
            }
            return [];
          }
          async HintLoadEmbeddableStreams(_) {
            let _ = this.MapEmbeddableStreamToRequest(_),
              _ = this.GetStreamsLookupKeyFromParam(_),
              _ = this.m_inFlightRequests.get(_);
            return (
              _ ||
                (this.m_lookupKeyToEmbedStreamDef.set(_, _),
                (_ = this.InternalHintLoadEmbeddableStreams(_, _)),
                this.m_inFlightRequests.set(_, _)),
              _
            );
          }
          async InternalHintLoadEmbeddableStreams(_, _) {
            let _ = (0, _._)(
              "broadcast_available_for_page",
              "application_config",
            );
            if ((0, _._)(_)) return this.HandleHintLoadBroadcastResponse(_, _);
            try {
              const _ = await _().get(
                _._.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpage",
                {
                  params: _,
                },
              );
              return this.HandleHintLoadBroadcastResponse(_, _.data);
            } catch (_) {
              let _ = (0, _._)(_);
              console.error(
                "HintLoadEmbeddableStreams hit error loading: " + _.strErrorMsg,
                _,
              );
            }
            return [];
          }
          async HandleHintLoadBroadcastResponse(_, _) {
            (this.m_bUseFakeData = !1),
              _.bIsPreview &&
                (_?.filtered?.length > 0
                  ? ((0, _._)(!!_.event, "Broadcast preview requires an event"),
                    this.ExtractBroadcastPrioritiesFromPartnerEventForPreview(
                      _.event,
                      _.filtered,
                    ))
                  : ((_ = {
                      filtered: [{}],
                      success: 1,
                      total_count: 1,
                      err_msg: "",
                      broadcast_chat_visibility: "hide",
                    }),
                    (this.m_bUseFakeData = !0))),
              _.broadcast_chat_visibility &&
                (this.m_pageChatStatus = _.broadcast_chat_visibility);
            const _ = new Array();
            (0, _._)(() => {
              _.filtered.forEach((_) => {
                if (!_.steamid) {
                  const _ = _._.InitFromAccountID(_.accountid);
                  _.steamid = _.ConvertTo64BitString();
                }
                const _ = _._.GetOrCreateBroadcastInfo(_.steamid),
                  _ = _.appid ? Number(_.appid) : _._;
                (_.m_nAppID = _),
                  (_.m_strAppId = "" + _),
                  _.current_selection_priority === void 0 &&
                    (_.current_selection_priority =
                      _.default_selection_priority),
                  _ != _._ && _.push(_);
              });
            });
            const _ = this.GetStreamsLookupKeyFromDef(_);
            if (
              (this.m_lookupStreams.set(_, _.filtered),
              this.m_onLoadContextCall.has(_))
            ) {
              const _ = this.m_onLoadContextCall.get(_);
              _ && _.fnCallback();
            }
            const _ = this.GetStreams(_) ?? [];
            return await this.AutoStartVideoStream(_, _), _;
          }
          ExtractBroadcastPrioritiesFromPartnerEventForPreview(_, _) {
            const _ = Array.from(_.jsondata.broadcast_whitelist ?? []),
              _ = Array.from(_.jsondata.broadcast_priority ?? []),
              _ = new Map();
            for (let _ = 0; _ < _.length && !(_ >= _.length); _++)
              _.set(_[_], (0, _._)(_[_]));
            _.forEach((_) => {
              const _ = Number(_.accountid);
              _.has(_) && (_.current_selection_priority = _.get(_));
            });
          }
          async AutoStartVideoStream(_, _) {
            let _ = this.GetStreamsLookupKeyFromDef(_);
            if (this.m_bMapHasStartedVideo.get(_)) return null;
            if (this.m_bUseFakeData) {
              if (!this.m_playReadyStream.get(_)) {
                const _ = {
                  accountid: 0,
                  thumbnail_http_address: "",
                  default_selection_priority: _._.k_eGeneral,
                  current_selection_priority: _._.k_eGeneral,
                };
                this.m_playReadyStream.set(_, _);
              }
              return this.m_playReadyStream;
            }
            return this.PlayFromAvailableStreams(_, _);
          }
          async PlayFromAvailableStreams(_, _, _ = !1) {
            const _ = new Set();
            for (;;) {
              const _ = _.filter((_) => !_.has(_) && (!_ || !_.nAppIDVOD)),
                _ = this.GetAutoStartStream(_);
              if (!_) return null;
              if (await this.AttemptToPlayStream(_, _)) return _;
              _.add(_);
            }
          }
          async AttemptToPlayStream(_, _) {
            let _ = this.GetStreamsLookupKeyFromDef(_);
            const _ = _.accountid ?? 0;
            if (
              (this.m_bMapHasStartedVideo.set(_, !0),
              this.m_mapBroadcastChecked.has(_) ||
                this.m_mapBroadcastChecked.set(
                  _,
                  this.InternalAttemptToPlayStream(_, _),
                ),
              _.nAppIDVOD)
            )
              this.m_playReadyStream.set(_, _);
            else {
              const _ = await this.m_mapBroadcastChecked.get(_);
              if (_?.success == _._) {
                (_.steamid = _.steamid),
                  this.m_playReadyStream.set(_, _),
                  this.GetConcurrentStreams(_) > 1
                    ? (this.m_streamChatStatus = "hide")
                    : (this.m_streamChatStatus =
                        _.broadcast_chat_visibility ?? null),
                  this.m_setStreamChangedListeners.forEach((_) => _(_));
                const _ = _._.GetOrCreateBroadcastInfo(_.steamid).m_nAppID;
                _(_, _._._, _.snr);
              } else return null;
            }
            return _;
          }
          async InternalAttemptToPlayStream(_, _) {
            let _ = this.GetStreamsLookupKeyFromDef(_);
            try {
              const _ = _._.STORE_BASE_URL + "broadcast/ajaxcheckbroadcast";
              let _ = {
                broadcastaccountid: _.accountid,
                viewer_token: _._.GetViewerToken(),
                origin: self.origin,
              };
              return (
                await _().get(_, {
                  params: _,
                })
              ).data;
            } catch (_) {
              let _ = (0, _._)(_);
              console.error(
                "Broadcast.AttemptToPlayStream: " + _.strErrorMsg,
                _,
              );
            }
            return null;
          }
          GetAutoStartStream(_) {
            if (!_) return null;
            const _ = _.filter((_) => _(_)),
              _ = _.reduce((_, _) => Math.max(_, _(_)), 0),
              _ = _.filter((_) => _(_) === _);
            if (_.length === 0) return null;
            const _ = Math.floor(Math.random() * _.length);
            return _[_];
          }
          MapEmbeddableStreamToRequest(_) {
            return {
              appid: _.appid,
              promotionName: _.bIsPreview ? "preview" : _.promotionName,
              clanid: _.clanid
                ? _.clanid
                : _.event
                  ? _.event.clanSteamID.GetAccountID()
                  : void 0,
              listid: _.listid,
              subid: _.subid,
              bundleid: _.bundleid,
              eventid: _.event ? _.event.GID : void 0,
              previewAccounts:
                _.bIsPreview && _.accountIDs
                  ? _.accountIDs.slice().sort().join(",")
                  : void 0,
              test: _,
              _: _._.COUNTRY,
              _: _._.LANGUAGE,
              hubtype: _.event?.GetContentHubType(),
              hubcategory: _.event?.GetContentHubCategory(),
              hubtagid: _.event?.GetContentHubTag(),
              tabuniqueid: _.tabuniqueid,
              tabfilter: _.tabfilter,
              rt_now_override_test: _._.BHasTimeOverride()
                ? _._.GetTimeNowWithOverride()
                : void 0,
            };
          }
          GetStreamsLookupKeyFromDef(_) {
            return this.GetStreamsLookupKeyFromParam(
              this.MapEmbeddableStreamToRequest(_),
            );
          }
          GetStreamsLookupKeyFromParam(_) {
            return JSON.stringify(_);
          }
          static Get() {
            return (
              _.s_GlobalStore ||
                ((_.s_GlobalStore = new _()), _.s_GlobalStore.Init()),
              _.s_GlobalStore
            );
          }
          Init() {}
        };
        _([_._], _.prototype, "m_lookupStreams", 2),
          _([_._], _.prototype, "m_playReadyStream", 2),
          _([_._], _.prototype, "m_pageChatStatus", 2),
          _([_._], _.prototype, "m_streamChatStatus", 2),
          _([_._], _.prototype, "m_bUserChatExpanded", 2),
          _([_._], _.prototype, "m_bUserPreferenceHideBroadcastByDefault", 2),
          _([_._], _.prototype, "m_bCollapsed", 2),
          _([_._], _.prototype, "HintLoadEmbeddablePreviewStreams", 1),
          _([_._], _.prototype, "AttemptToPlayStream", 1);
        let _ = _;
        function _(_) {
          return _.current_selection_priority || _._.k_eGeneral;
        }
        function _(_) {
          _.sort((_, _) =>
            _(_) != _(_)
              ? _(_) - _(_)
              : _.viewer_count != _.viewer_count
                ? (_.viewer_count ?? 0) - (_.viewer_count ?? 0)
                : (_.accountid ?? 0) - (_.accountid ?? 0),
          );
        }
        async function _(_, _, _) {
          if (_ > 0 && _ != 7 && _) {
            let _ = new URLSearchParams();
            _.append("page_action", "" + _),
              _.append("snr", _),
              _().post(
                _._.STORE_BASE_URL + "ajaxreportproductaction/" + _ + "/",
                _,
              );
          }
        }
        const _ = new _._();
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
          m_mapBroadcasterSteamIDToEvents = new Map();
          m_mapBroadcasterSteamIDData = new Map();
          static GetBBCodeParam(_, _, _ = "") {
            const _ = new RegExp(`\\W${_}\\W*=\\W*\\"(.*?)\\"`, "gmi").exec(_);
            return _ ? _[1] : _;
          }
          static ParseCalendarEventPresentersFromText(_) {
            const _ =
                /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
              _ = new Array();
            for (;;) {
              const _ = _.exec(_);
              if (_ === null) break;
              const _ = _[1],
                _ = _[2],
                _ = _.GetBBCodeParam(_, "steamid"),
                _ = {
                  steamID: _ ? new _._(_) : void 0,
                  name: _.GetBBCodeParam(_, "name"),
                  title: _.GetBBCodeParam(_, "title"),
                  company: _.GetBBCodeParam(_, "company"),
                  photo: _.GetBBCodeParam(_, "photo"),
                  bio: _,
                };
              _.push(_);
            }
            return _;
          }
          static ParseEventModelPresenters(_, _) {
            const _ = _.GetDescriptionWithFallback(_) ?? "";
            return _.ParseCalendarEventPresentersFromText(_);
          }
          static ParseEventAppReferencesFromText(_) {
            const _ = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
              _ = new Set();
            for (;;) {
              const _ = _.exec(_);
              if (_ === null) break;
              const _ = _[1];
              _.add(Number(_));
            }
            return _;
          }
          static ParseEventModelAppReferences(_, _) {
            const _ = _.GetDescriptionWithFallback(_) ?? "",
              _ = _.ParseEventAppReferencesFromText(_);
            if (_.jsondata?.referenced_appids)
              for (const _ of _.jsondata.referenced_appids) _.add(_);
            return _;
          }
          async BuildBroadcasterSteamIDToActiveEventMap(_) {
            const _ = _._.GetTimeNowWithOverride(),
              _ = _.GetCalendarItemsInTimeRange(_ - 3600, _);
            for (const _ of _.rgCalendarItems)
              _._.QueueLoadPartnerEvent(_.clanid, _.unique_id);
            const _ = _.rgCalendarItems.map((_) =>
                _._.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  _._.InitFromClanID(_.clanid),
                  _.unique_id,
                  0,
                ),
              ),
              _ = await Promise.all(_),
              _ = new Map();
            for (const _ of _)
              if (_ && !(_.endTime && _.endTime < _))
                for (const _ of _.GetBroadcastWhitelistAsSteamIDs()) {
                  const _ = _.get(_);
                  _ ? _.push(_) : _.set(_, [_]);
                }
            return _;
          }
          IsBroadcasterAlreadyBound(_, _) {
            const _ = this.m_mapBroadcasterSteamIDToEvents.get(_) ?? [],
              _ = _.length;
            if ((_ ? _.length : 0) != _) return !1;
            for (let _ = 0; _ < _; _++) if (_[_] != _[_].GID) return !1;
            return !0;
          }
          static BuildSteamIDToPresenterMapFromEventList(_, _) {
            let _ = new Map();
            for (const _ of _) {
              if (!_) continue;
              const _ = _.ParseEventModelPresenters(_, _);
              for (const _ of _)
                _.steamID && _.set(_.steamID.ConvertTo64BitString(), _);
            }
            return _;
          }
          RemoveCachedDataIfNotInMap(_) {
            const _ = new Array();
            this.m_mapBroadcasterSteamIDToEvents.forEach((_, _) => {
              _.has(_) || _.push(_);
            }),
              _.forEach((_) => {
                this.m_mapBroadcasterSteamIDData.delete(_),
                  this.m_mapBroadcasterSteamIDToEvents.delete(_);
              });
          }
          static BuildAppIDRefsForEventList(_, _) {
            const _ = new Set();
            for (const _ of _)
              _.ParseEventModelAppReferences(_, _).forEach((_) => _.add(_));
            return Array.from(_);
          }
          UpdateCachedDataFromEvents(_, _) {
            _.forEach((_, _) => {
              if (this.IsBroadcasterAlreadyBound(_, _)) return;
              const _ = {
                m_mapPresenters: _.BuildSteamIDToPresenterMapFromEventList(
                  _,
                  _,
                ),
                m_rgAppIDs: _.BuildAppIDRefsForEventList(_, _),
              };
              this.m_mapBroadcasterSteamIDData.set(_, _),
                this.m_mapBroadcasterSteamIDToEvents.set(
                  _,
                  _.map((_) => _.GID ?? ""),
                );
            });
          }
          async SynchronizeEventsWithBroadcasts(_, _) {
            const _ = await this.BuildBroadcasterSteamIDToActiveEventMap(_);
            this.RemoveCachedDataIfNotInMap(_),
              this.UpdateCachedDataFromEvents(_, _);
          }
          GetPresenterMapForBroadcasterSteamID(_) {
            return this.m_mapBroadcasterSteamIDData.get(_)?.m_mapPresenters;
          }
          GetAppIDListForBroadcasterSteamID(_) {
            return this.m_mapBroadcasterSteamIDData.get(_)?.m_rgAppIDs;
          }
        };
        _([_._], _.prototype, "m_mapBroadcasterSteamIDData", 2);
        let _ = _;
        const _ = new _();
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _, _) {
          return [_, _, _];
        }
        class _ extends Error {}
        class _ extends _._ {
          m_appid;
          constructor(_) {
            super(), (this.m_appid = _ || 0);
          }
          GetAppID() {
            return this.m_appid;
          }
          parseColor(_) {
            if (typeof _ != "string" || !_.match(/^#[0-9a-fA-F]{6}$/))
              throw new _("expected color string");
            return [
              parseInt(_.substring(1, 3), 16),
              parseInt(_.substring(3, 5), 16),
              parseInt(_.substring(5, 7), 16),
            ];
          }
          parseString(_) {
            if (typeof _ == "string") return _;
            throw new _("expected string");
          }
          parseNumber(_) {
            if (typeof _ == "number") return _;
            throw new _("expected number");
          }
          parseDate(_) {
            if (typeof _ == "number") return new Date(_);
            throw new _("expected timestamp");
          }
          parseArray(_, _) {
            let _ = [];
            if (typeof _ != "object" || !Array.isArray(_))
              throw new _("expected array");
            let _ = _.length;
            for (let _ = 0; _ < _; ++_)
              try {
                _.push(_(_[_]));
              } catch (_) {
                throw (
                  ((_.message +=
                    `
...while parsing array element ` + _),
                  _)
                );
              }
            return _;
          }
          parseDict(_, _) {
            let _ = new Map();
            if (typeof _ != "object" || Array.isArray(_))
              throw new _("expected object");
            for (let _ in _)
              try {
                _.set(_, _(_[_]));
              } catch (_) {
                throw (
                  ((_.message +=
                    `
...while parsing dictionary element ` + _),
                  _)
                );
              }
            return _;
          }
          parseBracket(_) {
            let _ = {
              name: this.parseString(_.name),
              start: this.parseDate(_.start),
              color: [255, 0, 255],
            };
            return (
              "params" in _ &&
                (_.params = this.parseDict(
                  _.params,
                  this.parseString.bind(this),
                )),
              "end" in _ && (_.end = this.parseDate(_.end)),
              "color" in _ && (_.color = this.parseColor(_.color)),
              _
            );
          }
          parseMarker(_) {
            let _ = {
              time: this.parseDate(_.time),
              color: [0, 255, 255],
            };
            return (
              "name" in _ && (_.name = this.parseString(_.name)),
              "params" in _ &&
                (_.params = this.parseDict(
                  _.params,
                  this.parseString.bind(this),
                )),
              "color" in _ && (_.color = this.parseColor(_.color)),
              _
            );
          }
          parseSoundTrack(_) {
            let _ = {};
            return (
              "song_title" in _ &&
                (_.song_title = this.parseString(_.song_title)),
              "appid" in _ && (_.appid = this.parseNumber(_.appid)),
              "song_index" in _ &&
                (_.song_index = this.parseNumber(_.song_index)),
              _
            );
          }
          parseBroadcastGameData(_) {
            let _ = {
              appid: 0,
              brackets: [],
              markers: [],
            };
            return (
              "appid" in _ && (_.appid = this.parseNumber(_.appid)),
              "brackets" in _ &&
                (_.brackets = this.parseArray(
                  _.brackets,
                  this.parseBracket.bind(this),
                )),
              "markers" in _ &&
                (_.markers = this.parseArray(
                  _.markers,
                  this.parseMarker.bind(this),
                )),
              "soundtrack" in _ &&
                (_.soundtrack = this.parseSoundTrack(_.soundtrack)),
              _
            );
          }
          convertTime(_, _) {
            return _ - _ / 1e3;
          }
          UpdateMarkers(_, _) {
            let _ = [],
              _ = [];
            for (const _ of _)
              _.persistent
                ? (_.length > 0 &&
                    (_[_.length - 1].nTimeEnd = this.convertTime(
                      _.Timestamp,
                      _,
                    )),
                  _.name.length > 0 &&
                    _.push({
                      strTemplateName: _.name,
                      nTimeStart: this.convertTime(_.Timestamp, _),
                      nTimeEnd: -1,
                      color: _(_.color_r, _.color_g, _.color_b),
                    }))
                : _.push({
                    strTemplateName: _.name,
                    nTime: this.convertTime(_.Timestamp, _),
                    color: _(_.color_r, _.color_g, _.color_b),
                  });
            return {
              rgMarkers: _,
              rgSegments: _,
            };
          }
          UpdateRegions(_) {
            let _ = [];
            for (const _ of _)
              _.push({
                strTemplateName: _.name,
                min: {
                  _: _.min_x,
                  _: _.min_y,
                },
                max: {
                  _: _.max_x,
                  _: _.max_y,
                },
                behavior: _.behavior,
              });
            return _;
          }
          UpdateSoundtrack(_, _) {}
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
        const _ = 250,
          _ = 250;
        class _ {
          m_elVideo;
          m_peerConnection = null;
          m_strBroadcastSteamID = "";
          m_ulWebRTCSessionID = "";
          m_schCandidateTimer = new _._();
          m_nHostCandidateGeneration = 0;
          m_nCandidateUpdateIntervalMS = 0;
          m_listeners = new _._();
          m_bFirstPlay = !0;
          m_bStatsViewVisible = !1;
          m_schCaptureDisplayStatsTrigger = new _._();
          m_stats = new _._();
          constructor(_) {
            (0, _._)(this), (this.m_elVideo = _);
          }
          async PlayMPD(_, _, _) {}
          async PlayWebRTC(_, _, _, _, _) {
            (this.m_strBroadcastSteamID = _),
              (this.m_ulWebRTCSessionID = _),
              (this.m_nHostCandidateGeneration = 0),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "pause",
                this.OnVideoPause,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "resize",
                this.OnVideoResize,
              );
            let _ = {
                urls: ["stun:" + _],
              },
              _ = {
                urls: ["turn:" + _],
                username: _,
                credential: _,
              },
              _ = {
                iceServers: [_, _],
                iceTransportPolicy: "relay",
              };
            const _ = new RTCPeerConnection(_);
            (this.m_peerConnection = _),
              (_.oniceconnectionstatechange = ((_) => {
                this.m_peerConnection &&
                  (console.log(
                    "BroadcastWebRTC: ICE connection state changed to " +
                      this.m_peerConnection.iceConnectionState,
                  ),
                  this.m_peerConnection.iceConnectionState === "failed"
                    ? this.OnWebRTCConnectionFailed()
                    : this.m_peerConnection.iceConnectionState ===
                        "disconnected" && this.OnWebRTCConnectionRetry());
              }).bind(this)),
              (_.onicecandidate = ((_) => {
                if (_.candidate) {
                  const _ = new FormData();
                  _.append("broadcaststeamid", this.m_strBroadcastSteamID),
                    _.append("webrtc_session_id", this.m_ulWebRTCSessionID),
                    _.append("sdp_mid", String(_.candidate.sdpMid)),
                    _.append(
                      "sdp_mline_index",
                      String(_.candidate.sdpMLineIndex),
                    ),
                    _.append("candidate", _.candidate.candidate),
                    _()
                      .post(
                        `${_._.CHAT_BASE_URL}broadcast/addbroadcastwebrtccandidate`,
                        _,
                      )
                      .then((_) => {
                        const _ = _.data;
                        (_.success && _.success == _._) ||
                          console.log(
                            "Failed to add a WebRTC session ICE candidate: " +
                              String(_.success),
                          );
                      })
                      .catch((_) =>
                        console.log(
                          "Failed to add a WebRTC session ICE candidate" + _,
                        ),
                      );
                }
              }).bind(this)),
              (_.ontrack = ((_) => {
                _.track.kind === "video" &&
                  ((this.m_elVideo.src = ""),
                  (this.m_elVideo.srcObject = _.streams[0]),
                  this.Play());
              }).bind(this)),
              _.setRemoteDescription({
                type: "offer",
                sdp: _,
              }).then(async () => {
                await _.setLocalDescription(await _.createAnswer());
                const _ = new FormData();
                _.append("broadcaststeamid", this.m_strBroadcastSteamID),
                  _.append("webrtc_session_id", this.m_ulWebRTCSessionID),
                  _.append("answer", _.localDescription?.sdp ?? "");
                try {
                  await _()
                    .post(
                      `${_._.CHAT_BASE_URL}broadcast/setbroadcastwebrtcanswer`,
                      _,
                    )
                    .then((_) => {
                      const _ = _.data;
                      if (!(_.success && _.success == _._))
                        throw new Error(String(_.success));
                    });
                } catch (_) {
                  console.log("Failed to set the WebRTC session answer: " + _),
                    this.OnWebRTCConnectionRetry();
                  return;
                }
                (this.m_nCandidateUpdateIntervalMS = _),
                  this.m_schCandidateTimer.Schedule(
                    this.m_nCandidateUpdateIntervalMS,
                    () => this.GetHostCandidates(),
                  );
              });
          }
          async GetHostCandidates() {
            const _ = new FormData();
            _.append("broadcaststeamid", this.m_strBroadcastSteamID),
              _.append("webrtc_session_id", this.m_ulWebRTCSessionID),
              _.append(
                "candidate_generation",
                String(this.m_nHostCandidateGeneration),
              );
            try {
              await _()
                .post(
                  `${_._.CHAT_BASE_URL}broadcast/getbroadcastwebrtccandidates`,
                  _,
                )
                .then((_) => {
                  const _ = _.data,
                    _ = _.data,
                    _ = this.m_peerConnection;
                  if (_.success && _.success == _._)
                    _ &&
                    _.candidate_generation > this.m_nHostCandidateGeneration
                      ? (_.candidates.forEach((_) => {
                          const _ = new RTCIceCandidate({
                            sdpMid: _.sdp_mid,
                            sdpMLineIndex: _.sdp_mline_index,
                            candidate: _.candidate,
                          });
                          _.addIceCandidate(_).catch((_) => console.error(_));
                        }),
                        (this.m_nHostCandidateGeneration =
                          _.candidate_generation))
                      : this.m_nHostCandidateGeneration > 0 &&
                        (this.m_nCandidateUpdateIntervalMS *= 2);
                  else throw new Error(String(_.success));
                });
            } catch (_) {
              console.log("Failed to get WebRTC session ICE candidates" + _),
                this.OnWebRTCConnectionRetry();
              return;
            }
            this.m_schCandidateTimer.Schedule(
              this.m_nCandidateUpdateIntervalMS,
              () => this.GetHostCandidates(),
            );
          }
          DispatchEvent(_, _ = null) {
            let _ = new CustomEvent(_, {
              cancelable: !0,
              bubbles: !0,
              detail: _,
            });
            this.m_elVideo.dispatchEvent(_);
          }
          OnWebRTCConnectionRetry() {
            this.DispatchEvent("valve-webrtcretry");
          }
          OnWebRTCConnectionFailed() {
            this.DispatchEvent("valve-webrtcfailed");
          }
          Close() {
            this.m_listeners.Unregister(),
              this.m_schCandidateTimer.Cancel(),
              this.m_schCaptureDisplayStatsTrigger.Cancel(),
              this.m_peerConnection &&
                (this.m_peerConnection.close(), (this.m_peerConnection = null)),
              this.m_elVideo.pause(),
              (this.m_elVideo.srcObject = null),
              this.m_stats.GetFPSMonitor().Close(),
              (this.m_bFirstPlay = !0);
          }
          IsBuffering() {
            return !1;
          }
          GetCurrentPlayTime() {
            return 0;
          }
          GetLiveContentStartTime() {
            return new Date(0);
          }
          GetAvailableVideoStartTime() {
            return 0;
          }
          GetBufferedLiveEdgeTime() {
            return 0;
          }
          IsPaused() {
            return this.m_elVideo.paused;
          }
          async Play() {
            const _ = this.m_bFirstPlay;
            this.m_bFirstPlay = !1;
            let _ = !1;
            const _ = () => {
                (_ = !0),
                  this.m_stats
                    .GetFPSMonitor()
                    .StartTracking(() =>
                      this.m_stats.ExtractFrameInfo(this.m_elVideo),
                    );
              },
              _ = (_, _) => !1,
              _ = (_, _) => !1;
            try {
              await this.m_elVideo.play(), _();
            } catch (_) {
              _.name === "NotAllowedError"
                ? _("Failed to play video, probably due to auto play policy", _)
                : _("Failed to play video", _);
            }
            !_ && _ && this.DispatchEvent("valve-userinputneeded");
          }
          Pause() {
            this.m_elVideo.pause();
          }
          CanSeek() {
            return !1;
          }
          SeekAndPlay(_) {
            return this.Play(), 0;
          }
          Seek(_) {
            return 0;
          }
          JumpTime(_) {
            return 0;
          }
          IsMuted() {
            return this.m_elVideo.muted;
          }
          SetMuted(_) {
            this.m_elVideo.muted = _;
          }
          SetVolume(_) {
            (_ = _._(_, 0, 1)), (this.m_elVideo.volume = _);
          }
          GetVolume() {
            return this.m_elVideo.volume;
          }
          GetDASHPlayerStats() {
            return this.m_stats;
          }
          SetStatsViewIsVisible(_) {
            _ && !this.m_bStatsViewVisible
              ? (this.CaptureStatsForDisplay(),
                this.m_schCaptureDisplayStatsTrigger.Schedule(
                  _,
                  this.CaptureStatsForDisplay,
                ))
              : !_ &&
                this.m_bStatsViewVisible &&
                this.m_schCaptureDisplayStatsTrigger.Cancel(),
              (this.m_bStatsViewVisible = _);
          }
          CaptureStatsForDisplay() {
            this.m_stats.SetHTMLVideoPlayerDisplay(
              this.m_elVideo.videoWidth,
              this.m_elVideo.videoHeight,
              this.m_elVideo.clientWidth,
              this.m_elVideo.clientHeight,
            ),
              this.m_schCaptureDisplayStatsTrigger.Schedule(
                _,
                this.CaptureStatsForDisplay,
              );
          }
          OnVideoPause(_) {
            this.m_stats.GetFPSMonitor().Close();
          }
          OnVideoResize(_) {
            this.m_stats.GetFPSMonitor().SetWindowResized();
          }
          GetVideoRepresentations() {
            let _ = [];
            return (
              _.push({
                _: _._,
                displayName: "Auto",
                selected: !0,
              }),
              _
            );
          }
          SetVideoRepresentation(_) {}
          IsLiveContent() {
            return !0;
          }
          BHasTimedText() {
            return !1;
          }
        }
        _([_._], _.prototype, "PlayWebRTC", 1),
          _([_._.bound], _.prototype, "CaptureStatsForDisplay", 1),
          _([_._], _.prototype, "OnVideoPause", 1),
          _([_._], _.prototype, "OnVideoResize", 1);
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return "unknown ETrailerConvertState ( " + _ + " )";
        }
        function _(_) {
          return "unknown ETrailerConvertTargetType ( " + _ + " )";
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.video_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    video_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    client_cellid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_ClientGetVideoURL_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.video_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    video_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    video_url: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_ClientGetVideoURL_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.encryption_key || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    encryption_key: {
                      _: 1,
                      _: _._.readBytes,
                      _: _._.writeBytes,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_UnlockedH264_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.app_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    app_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    client_cellid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CFovasVideo_ClientGetOPFSettings_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.app_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    app_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    opf_settings: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CFovasVideo_ClientGetOPFSettings_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.app_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    app_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    playback_position_in_seconds: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    video_track_id: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    audio_track_id: {
                      _: 4,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    timedtext_track_id: {
                      _: 5,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    last_modified: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    hide_from_watch_history: {
                      _: 7,
                      _: !1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    hide_from_library: {
                      _: 8,
                      _: !1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "VideoBookmark";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.bookmarks || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    bookmarks: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_SetVideoBookmark_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appids || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appids: {
                      _: 1,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                    updated_since: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GetVideoBookmarks_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.bookmarks || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    bookmarks: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GetVideoBookmarks_Response";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "Video.ClientGetVideoURL#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.ClientGetVideoURL = _;
          function _(_, _) {
            return _.SendNotification(
              "Video.SetVideoBookmark#1",
              (0, _._)(_, _),
              {
                ePrivilege: 1,
              },
            );
          }
          _.SetVideoBookmark = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Video.GetVideoBookmarks#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.GetVideoBookmarks = _;
        })(_ || (_ = {}));
        var _;
        ((_) => {
          _.NotifyUnlockedH264Handler = {
            name: "VideoClient.NotifyUnlockedH264#1",
            request: _,
          };
        })(_ || (_ = {}));
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "FovasVideo.ClientGetOPFSettings#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.ClientGetOPFSettings = _;
        })(_ || (_ = {}));
        class _ {
          static s_VODStore;
          m_transport = null;
          m_mapBookmarks = new Map();
          SetBookmarkForApp(_, _) {
            this.ValidateBookmarkData(_)
              ? this.m_mapBookmarks.set(_, _.fromObject(_))
              : this.InitializeBookmarkForApp(_);
          }
          ValidateBookmarkData(_) {
            const _ = _;
            return typeof _ == "object"
              ? Number.isInteger(_.playback_position_in_seconds) &&
                  Number.isInteger(_.app_id)
              : !1;
          }
          InitializeBookmarkForApp(_) {
            if (!this.m_mapBookmarks.has(_)) {
              let _ = {
                app_id: _,
                playback_position_in_seconds: 0,
                video_track_id: "0",
                audio_track_id: "0",
                timedtext_track_id: "0",
                hide_from_watch_history: !1,
                hide_from_library: !1,
              };
              this.m_mapBookmarks.set(_, new _(_));
            }
          }
          GetBookmarkPlayTimeInSeconds(_) {
            let _ = this.m_mapBookmarks.get(_);
            if (_) {
              let _ = _.playback_position_in_seconds();
              if (Number.isInteger(_)) return _;
            }
            return 0;
          }
          async SendBookMarkedTimeToServer(_, _, _, _, _) {
            if (!_._.logged_in) return;
            if (!this.m_transport) {
              console.warn(
                "CVideoBookmarkStore:SetBookMark no auth token / transport",
              );
              return;
            }
            const _ = _._.Init(_);
            let _ = this.m_mapBookmarks.get(_);
            if (_) {
              let _ = !1;
              _.app_id() != _ && ((_ = !0), _.set_app_id(_)),
                _.playback_position_in_seconds() != _ &&
                  ((_ = !0), _.set_playback_position_in_seconds(_)),
                (_ = _ || "0"),
                _.video_track_id() != _ && (_.set_video_track_id(_), (_ = !0)),
                (_ = _ || "0"),
                _.audio_track_id() != _ && (_.set_audio_track_id(_), (_ = !0)),
                (_ = _ || "0"),
                _ != _.timedtext_track_id() &&
                  (_.set_timedtext_track_id(_), (_ = !0)),
                _ &&
                  (_.Body().add_bookmarks(_),
                  _.SetVideoBookmark(this.m_transport, _));
            }
          }
          static Get() {
            return (
              _.s_VODStore || ((_.s_VODStore = new _()), _.s_VODStore.Init()),
              _.s_VODStore
            );
          }
          Init() {
            _._.logged_in && this.LoadWatchVideoOAuthToken();
          }
          async LoadWatchVideoOAuthToken() {
            const _ =
                (0, _._)() == "community"
                  ? _._.COMMUNITY_BASE_URL + "actions/ajaxgetwatchvodtoken"
                  : _._.STORE_BASE_URL + "actions/ajaxgetwatchvodtoken",
              _ = {};
            try {
              let _ = await _().get(_, {
                params: _,
                withCredentials: !0,
              });
              if (
                _ &&
                _.status == 200 &&
                _.data &&
                _.data.success == _._ &&
                _.data.webapi_token
              ) {
                this.m_transport = (0, _._)(
                  new _._(_._.WEBAPI_BASE_URL, _.data.webapi_token),
                ).GetServiceTransport();
                return;
              }
            } catch (_) {
              let _ = (0, _._)(_);
              console.error(
                "CVideoBookmarkStore:LoadWatchVideoOAuthToken: Failed " +
                  _.strErrorMsg,
                _,
              );
            }
          }
        }
        class _ {
          m_appid;
          constructor(_) {
            this.m_appid = _;
          }
          async SetBookmark(_, _, _, _) {
            _._.logged_in &&
              _.Get().SendBookMarkedTimeToServer(
                this.m_appid,
                Math.floor(_),
                _,
                _,
                _,
              );
          }
          GetBeginPlaytime() {
            return _._.logged_in
              ? _.Get().GetBookmarkPlayTimeInSeconds(this.m_appid)
              : 0;
          }
        }
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
        const _ = 1800,
          _ = 1e3,
          _ = 5 * 1e3,
          _ = 7;
        var _ = ((_) => (
          (_[(_.None = 0)] = "None"),
          (_[(_.Unlocking = 1)] = "Unlocking"),
          (_[(_.Loading = 2)] = "Loading"),
          (_[(_.Ready = 3)] = "Ready"),
          (_[(_.Error = 4)] = "Error"),
          _
        ))(_ || {});
        async function _(_, _, _) {
          if (!_) return;
          let _ = new FormData();
          _.append("steamid", _),
            _.append("broadcastid", _),
            _.append("viewertoken", _);
          try {
            await _().post(_._.CHAT_BASE_URL + "broadcast/stopwatching", _);
          } catch {}
        }
        class _ {
          m_rtUnlockTime = 0;
          m_schUnlockTimeout = new _._();
          m_broadcast;
          m_video;
          UnlockH264(_, _) {
            this.BCanUnlockH264()
              ? (_.SetState(1, ""),
                console.log("Unlocking H.264 for broadcast video playback"),
                this.RequestUnlockH264(),
                (this.m_broadcast = _),
                (this.m_video = _),
                (this.m_rtUnlockTime = Date.now()),
                this.m_schUnlockTimeout.Schedule(100, () =>
                  this.CheckUnlockState(),
                ))
              : _.SetState(4, (0, _._)("#BroadcastWatch_MinBrowser"));
          }
          BCanUnlockH264() {
            return (0, _._)("RemotePlay.UnlockH264")
              ? (console.log("Client supports direct H.264 unlock"), !0)
              : (0, _._)("BrowserView.PostMessageToParent")
                ? (console.log("Client supports browserview H.264 unlock"), !0)
                : (console.log("Client does not support H.264 unlock"), !1);
          }
          RequestUnlockH264() {
            (0, _._)("RemotePlay.UnlockH264")
              ? (console.log("Requesting direct H.264 unlock"),
                SteamClient.RemotePlay.UnlockH264())
              : (0, _._)("BrowserView.PostMessageToParent")
                ? (console.log("Requesting browserview unlock"),
                  SteamClient.BrowserView.PostMessageToParent(
                    "UnlockH264Request",
                    "CUnlockH264Helper",
                  ))
                : console.log(
                    "Failed to request H.264 unlock: no method supported",
                  );
          }
          CheckUnlockState() {
            if (this.m_broadcast.m_eWatchState != 1) return;
            if ((0, _._)() || (0, _._)()) {
              console.log("Unlocking H.264 successful"),
                this.m_broadcast.SetState(0, ""),
                this.m_video.Restart();
              return;
            }
            Date.now() - this.m_rtUnlockTime > 6 * 1e3
              ? (console.log(
                  "Unlocking H.264 timed out (Steam client or servers offline?)",
                ),
                this.m_broadcast.SetState(
                  4,
                  (0, _._)("#BroadcastWatch_MinBrowser"),
                ))
              : this.m_schUnlockTimeout.Schedule(100, () =>
                  this.CheckUnlockState(),
                );
          }
        }
        class _ {
          constructor() {
            (0, _._)(this);
          }
          m_steamIDBroadcast = "";
          m_ulBroadcastID = "";
          m_ulViewerToken = "";
          m_strCDNAuthUrlParameters = void 0;
          m_bWebRTC = !1;
          m_data;
          m_eWatchState = 0;
          m_strStateDescription = "";
          m_rgVideos = [];
          m_schManifestTimeout = new _._();
          m_schHeartbeatTimeout = new _._();
          SetState(_, _ = "") {
            (this.m_eWatchState = _),
              (this.m_strStateDescription = _),
              _ == 4 && console.log(this.m_strStateDescription);
          }
        }
        _([_._], _.prototype, "m_ulBroadcastID", 2),
          _([_._], _.prototype, "m_eWatchState", 2),
          _([_._], _.prototype, "m_strStateDescription", 2),
          _([_._], _.prototype, "SetState", 1);
        class _ {
          m_steamIDBroadcast = "";
          m_bInitialized = !1;
          m_strTitle = "";
          m_strAppId = "" + _;
          m_nAppID = _;
          m_strAppTitle = "";
          m_strThumbnailUrl = "";
          m_nViewerCount = 0;
          m_bIsOnline = !1;
          m_schUpdateTimeout = new _._();
          m_nRefCount = 0;
          constructor(_) {
            (0, _._)(this), (this.m_steamIDBroadcast = _);
          }
        }
        _([_._], _.prototype, "m_bInitialized", 2),
          _([_._], _.prototype, "m_strTitle", 2),
          _([_._], _.prototype, "m_strAppId", 2),
          _([_._], _.prototype, "m_nAppID", 2),
          _([_._], _.prototype, "m_strAppTitle", 2),
          _([_._], _.prototype, "m_strThumbnailUrl", 2),
          _([_._], _.prototype, "m_nViewerCount", 2),
          _([_._], _.prototype, "m_bIsOnline", 2);
        class _ {
          constructor() {
            (0, _._)(this);
          }
          m_eWatchState = 0;
          m_strStateDescription = "";
          m_rgVideos = [];
          SetState(_, _ = "") {
            (this.m_eWatchState = _),
              (this.m_strStateDescription = _),
              _ == 4 && console.log(this.m_strStateDescription);
          }
        }
        _([_._], _.prototype, "m_eWatchState", 2),
          _([_._], _.prototype, "m_strStateDescription", 2),
          _([_._], _.prototype, "SetState", 1);
        class _ extends _ {
          m_clipID;
          m_data;
        }
        class _ extends _ {
          m_nAppIDVOD;
          m_manifestURL;
        }
        class _ {
          m_mapBroadcasts = new Map();
          m_mapClips = new Map();
          m_mapVODs = new Map();
          m_activeVideo = null;
          m_broadcastSettings = {
            nVolume: 1,
            bMuted: !1,
            ulViewerToken: "0",
          };
          m_schSaveSettings = new _._();
          m_broadcastInfos = {};
          constructor() {
            (0, _._)(this), this.LoadBroadcastSettings();
          }
          GetBroadcastState(_) {
            if (_.IsBroadcastClip()) {
              let _ = this.m_mapClips.get(_.GetBroadcastClipID());
              return _ ? _.m_eWatchState : 0;
            } else if (_.IsBroadcastVOD()) {
              const _ = this.m_mapVODs.get(_.GetBroadcastAppIDVOD());
              return _ ? _.m_eWatchState : 0;
            } else {
              let _ = this.m_mapBroadcasts.get(_.GetBroadcastSteamID());
              return _ ? _.m_eWatchState : 0;
            }
          }
          GetBroadcastStateDescription(_) {
            if (_.IsBroadcastClip()) {
              let _ = this.m_mapClips.get(_.GetBroadcastClipID());
              return _ ? _.m_strStateDescription : "";
            } else if (_.IsBroadcastVOD()) {
              const _ = this.m_mapVODs.get(_.GetBroadcastAppIDVOD());
              return _ ? _.m_strStateDescription : "";
            } else {
              let _ = this.m_mapBroadcasts.get(_.GetBroadcastSteamID());
              return _ ? _.m_strStateDescription : "";
            }
          }
          CreateBroadcastVideo(_, _, _, _) {
            let _ = this.GetOrCreateBroadcast(_),
              { nVolume: _, bMuted: _ } = this.m_broadcastSettings,
              _ = new _(_, _, _, _);
            return (
              _.SetBroadcastSteamID(_),
              _.m_rgVideos.push(_),
              (_.m_bWebRTC = _),
              !(0, _._)() && !(0, _._)() && new _().UnlockH264(_, _),
              _
            );
          }
          CreateClipVideo(_, _, _) {
            let _ = this.GetOrCreateClip(_),
              { nVolume: _, bMuted: _ } = this.m_broadcastSettings,
              _ = new _(_, _, _, _);
            return (
              _.SetBroadcastClipID(_),
              _.m_rgVideos.push(_),
              !(0, _._)() && !(0, _._)() && new _().UnlockH264(_, _),
              _
            );
          }
          CreateVODVideo(_, _, _) {
            let _ = this.GetOrCreateVOD(_),
              { nVolume: _, bMuted: _ } = this.m_broadcastSettings,
              _ = new _(_, _, _, _);
            return (
              _.SetBroadcastAppIDVOD(_),
              _.m_rgVideos.push(_),
              !(0, _._)() && !(0, _._)() && new _().UnlockH264(_, _),
              _
            );
          }
          StartVideo(_) {
            if (_.IsBroadcastClip()) {
              console.log(`Starting clip for ${_.GetBroadcastClipID()}`);
              let _ = this.m_mapClips.get(_.GetBroadcastClipID());
              if (!_) return;
              this.SetActiveVideo(_),
                _.m_eWatchState == 0
                  ? this.GetClipManifest(_, _.GetWatchLocation())
                  : _.m_eWatchState == 3 && _.StartClip(_);
            } else if (_.IsBroadcastVOD()) {
              console.log(`Starting VOD for ${_.GetBroadcastAppIDVOD()}`);
              let _ = this.m_mapVODs.get(_.GetBroadcastAppIDVOD());
              if (!_) return;
              this.SetActiveVideo(_),
                _.m_eWatchState == 0
                  ? this.GetVODManifest(_, _.GetWatchLocation())
                  : _.m_eWatchState == 3 && _.StartVOD(_);
            } else {
              let _ = this.m_mapBroadcasts.get(_.GetBroadcastSteamID());
              if (!_) return;
              this.SetActiveVideo(_),
                _.m_eWatchState == 0
                  ? this.GetBroadcastManifest(_, _.GetWatchLocation())
                  : _.m_eWatchState == 3 && _.StartBroadcast(_);
            }
          }
          SetActiveVideo(_) {
            this.m_mapBroadcasts.forEach((_) => {
              for (let _ of _.m_rgVideos)
                _ != _ && _.StopPlaybackTillUserInput();
            }),
              this.m_mapClips.forEach((_) => {
                for (let _ of _.m_rgVideos)
                  _ != _ && _.StopPlaybackTillUserInput();
              }),
              (this.m_activeVideo = _);
          }
          PauseAllVideo() {
            this.m_mapBroadcasts.forEach((_) => {
              for (let _ of _.m_rgVideos) _.StopPlaybackTillUserInput();
            });
          }
          async StopVideo(_) {
            let _ = _.GetBroadcastSteamID(),
              _ = this.m_mapBroadcasts.get(_);
            _.Stop(),
              _ &&
                (_.m_ulBroadcastID &&
                  _(
                    _,
                    _.m_ulBroadcastID,
                    this.m_broadcastSettings.ulViewerToken,
                  ),
                _._(_.m_rgVideos, (_) => _ == _),
                this.RemoveBroadcastIfUnused(_));
          }
          StartInfo(_) {
            const _ = this.GetOrCreateBroadcastInfo(_);
            return (
              _.m_nRefCount++,
              (!_.m_bInitialized || !_.m_schUpdateTimeout.IsScheduled()) &&
                this.LoadBroadcastInfo(_),
              _
            );
          }
          StopInfo(_) {
            _.m_nRefCount--;
          }
          GetOrCreateBroadcastInfo(_) {
            if (!_) return new _("");
            if (!this.m_broadcastInfos[_]) {
              const _ = (0, _._)(new _(_));
              this.m_broadcastInfos[_] = _;
            }
            return this.m_broadcastInfos[_];
          }
          GetOrCreateBroadcast(_) {
            let _ = this.m_mapBroadcasts.get(_);
            return (
              _ ||
              ((_ = new _()),
              (_.m_steamIDBroadcast = _),
              (_.m_eWatchState = 0),
              this.m_mapBroadcasts.set(_, _),
              _)
            );
          }
          GetBroadcast(_) {
            return this.m_mapBroadcasts.get(_);
          }
          GetBroadcastClip(_) {
            return this.m_mapClips.get(_);
          }
          GetBroadcastVOD(_) {
            return this.m_mapVODs.get(_);
          }
          RemoveBroadcastIfUnused(_) {
            _.m_rgVideos.length ||
              (_.m_schHeartbeatTimeout.Cancel(),
              _.m_schManifestTimeout.Cancel(),
              this.m_mapBroadcasts.delete(_.m_steamIDBroadcast));
          }
          GetOrCreateClip(_) {
            let _ = this.m_mapClips.get(_);
            return (
              _ ||
              ((_ = new _()),
              (_.m_clipID = _),
              (_.m_eWatchState = 0),
              this.m_mapClips.set(_, _),
              _)
            );
          }
          GetOrCreateVOD(_) {
            let _ = this.m_mapVODs.get(_);
            return (
              _ ||
              ((_ = new _()),
              (_.m_nAppIDVOD = _),
              (_.m_eWatchState = 0),
              this.m_mapVODs.set(_, _),
              _)
            );
          }
          async LoadBroadcastInfo(_) {
            let _ = "0",
              _ = this.m_mapBroadcasts.get(_.m_steamIDBroadcast);
            if ((_ && (_ = _.m_ulBroadcastID), _.m_nRefCount == 0)) return;
            const _ = {
              steamid: _.m_steamIDBroadcast,
              broadcastid: _,
              location:
                _ &&
                _.m_rgVideos &&
                _.m_rgVideos[0] &&
                _.m_rgVideos[0].GetWatchLocation(),
            };
            try {
              const _ = await _().get(
                `${_._.CHAT_BASE_URL}broadcast/getbroadcastinfo/`,
                {
                  params: _,
                },
              );
              if (!_ || !_.data || !_.data.success || _.data.success != _._) {
                _.m_bInitialized = !0;
                return;
              }
              const _ = _.data;
              (0, _._)(() => {
                (_.m_bInitialized = !0),
                  (_.m_strTitle = _.title),
                  (_.m_strAppId = _.appid),
                  (_.m_nAppID = Number.parseInt(_.appid)),
                  (_.m_strAppTitle = _.app_title),
                  (_.m_strThumbnailUrl = _.thumbnail_url),
                  (_.m_nViewerCount = _.viewer_count),
                  (_.m_bIsOnline = _.is_online),
                  !_.m_strTitle &&
                    _._ &&
                    ((_.m_strTitle = _._.name),
                    (_.m_strAppTitle = _._.appName || _._.name));
                const _ = _.update_interval;
                _ &&
                  typeof _ == "number" &&
                  _.m_schUpdateTimeout.Schedule(_ * 1e3, () =>
                    this.LoadBroadcastInfo(_),
                  );
              });
            } catch (_) {
              console.error(_);
            }
          }
          DelayedGetBroadcastManifest(_, _, _ = Date.now()) {
            _.m_schManifestTimeout.Schedule(_, () =>
              this.GetBroadcastManifest(_, _, _),
            );
          }
          async GetBroadcastManifest(_, _, _ = Date.now()) {
            _.SetState(2, "");
            let _ = {
                steamid: _.m_steamIDBroadcast,
                broadcastid: 0,
                viewertoken: this.m_broadcastSettings.ulViewerToken,
                watchlocation: _,
                sessionid: (0, _._)(),
                is_webrtc: _.m_bWebRTC,
              },
              _ = null;
            try {
              _ = await _().get(
                _._.CHAT_BASE_URL + "broadcast/getbroadcastmpd/",
                {
                  params: _,
                  withCredentials: !0,
                },
              );
            } catch (_) {
              let _ = (0, _._)(_);
              console.error(
                "Failed to get broadcast manifest!" + _.strErrorMsg,
                _,
              );
            }
            if (!_ || _.status != 200) {
              _.SetState(4, (0, _._)("#BroadcastWatch_RequestFailed"));
              return;
            }
            let _ = _.data;
            _.viewertoken && this.SetViewerToken(_.viewertoken);
            let _ = _.success;
            if (_ == "ready")
              _.SetState(3),
                (_.m_ulBroadcastID = _.broadcastid),
                (_.m_ulViewerToken = this.m_broadcastSettings.ulViewerToken),
                (_.m_strCDNAuthUrlParameters = _.cdn_auth_url_parameters),
                (_.m_bWebRTC = _.is_webrtc),
                (_.m_data = _),
                this.LoadBroadcast(_),
                setTimeout(() => {
                  _.m_schHeartbeatTimeout.Schedule(
                    _.m_data.heartbeat_interval * 1e3,
                    () => this.HeartbeatBroadcast(_),
                  );
                }, Math.random() * 3e4);
            else if (_ == "waiting") {
              _.SetState(2, (0, _._)("#BroadcastWatch_WaitingForResponse"));
              let _ = Date.now() - _;
              if (_ > 60 * 1e3) {
                _.SetState(4, (0, _._)("#BroadcastWatch_NotAvailable"));
                return;
              }
              let _ = _ > 30 * 1e3 ? _.retry : 5e3;
              _.m_schManifestTimeout.Schedule(_, () =>
                this.GetBroadcastManifest(_, _, _),
              );
            } else
              _ == "waiting_for_start"
                ? (_.SetState(2, (0, _._)("#BroadcastWatch_WaitingForStart")),
                  _.m_schManifestTimeout.Schedule(_.retry, () =>
                    this.GetBroadcastManifest(_, _, _),
                  ))
                : _ == "waiting_for_reconnect"
                  ? (_.SetState(
                      2,
                      (0, _._)("#BroadcastWatch_WaitingForReconnect"),
                    ),
                    _.m_schManifestTimeout.Schedule(_.retry, () =>
                      this.GetBroadcastManifest(_, _, _),
                    ))
                  : _ == "end"
                    ? _.SetState(4, (0, _._)("#BroadcastWatch_NotAvailable"))
                    : _ == "too_many_broadcasts"
                      ? _.SetState(
                          4,
                          (0, _._)("#BroadcastWatch_TooManyBroadcasts"),
                        )
                      : _ == "system_not_supported"
                        ? _.SetState(
                            4,
                            (0, _._)("#BroadcastWatch_SystemNotSupported"),
                          )
                        : _ == "user_restricted"
                          ? _.SetState(
                              4,
                              (0, _._)("#BroadcastWatch_UserRestricted"),
                            )
                          : _ == "poor_upload_quality"
                            ? _.SetState(
                                4,
                                (0, _._)("#BroadcastWatch_PoorUploadQuality"),
                              )
                            : _ == "request_failed"
                              ? _.SetState(
                                  4,
                                  (0, _._)("#BroadcastWatch_RequestFailed"),
                                )
                              : _ == "too_many_viewers"
                                ? _.SetState(
                                    4,
                                    (0, _._)("#BroadcastWatch_TooManyViewers"),
                                  )
                                : _.SetState(
                                    4,
                                    (0, _._)("#BroadcastWatch_NotAvailable"),
                                  );
          }
          async GetClipManifest(_, _) {
            _.SetState(2, "");
            let _ = {
                clipid: _.m_clipID,
                watchlocation: _,
                sessionid: (0, _._)(),
              },
              _ = null;
            try {
              _ = await _().get(
                _._.CHAT_BASE_URL + "broadcast/getclipdetails",
                {
                  params: _,
                  withCredentials: !0,
                },
              );
            } catch (_) {
              console.error(_), console.log("Failed to get clip manifest!");
            }
            if (!_ || _.status != 200) {
              _.SetState(4, (0, _._)("#BroadcastWatch_RequestFailed"));
              return;
            }
            let _ = _.data;
            _.success == _._
              ? (_.SetState(3), (_.m_data = _), this.LoadClip(_))
              : _.SetState(4, (0, _._)("#BroadcastWatch_RequestFailed"));
          }
          async GetVODManifest(_, _) {
            _.SetState(2, "");
            let _ = await _._.fetchQuery((0, _._)(_.m_nAppIDVOD)).catch((_) => {
              console.error(
                "BroadcastWatchStore:GetVODManifest: Failed to load VOD " +
                  _.m_nAppIDVOD,
                _,
              );
            });
            _
              ? (_.bookmark
                  ? _.Get().SetBookmarkForApp(_.m_nAppIDVOD, _.bookmark)
                  : _.Get().InitializeBookmarkForApp(_.m_nAppIDVOD),
                _.SetState(3),
                (_.m_manifestURL = _.video_url),
                this.LoadVOD(_))
              : _.SetState(4, (0, _._)("#BroadcastWatch_RequestFailed"));
          }
          async HeartbeatBroadcast(_) {
            let _ = new FormData();
            _.append("steamid", _.m_steamIDBroadcast),
              _.append("broadcastid", _.m_ulBroadcastID),
              _.append("viewertoken", this.m_broadcastSettings.ulViewerToken),
              _().post(_._.CHAT_BASE_URL + "broadcast/heartbeat/", _),
              _.m_schHeartbeatTimeout.Schedule(
                _.m_data.heartbeat_interval * 1e3,
                () => this.HeartbeatBroadcast(_),
              );
          }
          LoadBroadcast(_) {
            const _ = this.m_activeVideo;
            _ &&
              _.m_rgVideos.findIndex((_) => _ == _) >= 0 &&
              _.StartBroadcast(_);
          }
          LoadClip(_) {
            const _ = this.m_activeVideo;
            _ && _.m_rgVideos.findIndex((_) => _ == _) >= 0 && _.StartClip(_);
          }
          LoadVOD(_) {
            const _ = this.m_activeVideo;
            _ && _.m_rgVideos.findIndex((_) => _ == _) >= 0 && _.StartVOD(_);
          }
          BroadcastDownloadFailed(_, _ = !0, _ = _._.Invalid) {
            _.Stop();
            let _ = this.m_mapBroadcasts.get(_.GetBroadcastSteamID());
            _ &&
              _.m_eWatchState != 2 &&
              (_.m_bWebRTC && _ && (_.m_bWebRTC = !1),
              _ == _._.StreamGone
                ? this.DelayedGetBroadcastManifest(_, _.GetWatchLocation())
                : this.GetBroadcastManifest(_, _.GetWatchLocation()));
          }
          UserInputClickVideo(_) {
            if (
              this.m_activeVideo != _ &&
              (this.PauseAllVideo(),
              (this.m_activeVideo = _),
              !_.IsBroadcastClip() && !_.IsBroadcastVOD())
            ) {
              let _ = this.m_mapBroadcasts.get(_.GetBroadcastSteamID());
              _ && this.GetBroadcastManifest(_, _.GetWatchLocation());
            }
            _.UserInputClick();
          }
          LoadBroadcastSettings() {
            if (!window.localStorage) return;
            let _ = window.localStorage.getItem("broadcastSettings");
            if (!_) return;
            let _ = JSON.parse(_);
            if (!_) return;
            Object.assign(this.m_broadcastSettings, _);
            let _ = this.m_broadcastSettings;
            (_.bMuted = !!_.bMuted),
              (_.nVolume = _._(_.nVolume, 0, 1)),
              typeof _.ulViewerToken != "string" && (_.ulViewerToken = "0");
          }
          SaveBroadcastSettings() {
            window.localStorage &&
              this.m_schSaveSettings.Schedule(_, () => {
                try {
                  window.localStorage.setItem(
                    "broadcastSettings",
                    JSON.stringify(this.m_broadcastSettings),
                  );
                } catch {}
              });
          }
          SetViewerToken(_) {
            this.m_broadcastSettings.ulViewerToken != _ &&
              ((this.m_broadcastSettings.ulViewerToken = _),
              this.SaveBroadcastSettings());
          }
          GetViewerToken() {
            return this.m_broadcastSettings.ulViewerToken;
          }
          SaveVolumeChange(_, _) {
            (this.m_broadcastSettings.nVolume == _ &&
              this.m_broadcastSettings.bMuted == _) ||
              ((this.m_broadcastSettings.nVolume = _),
              (this.m_broadcastSettings.bMuted = _),
              this.SaveBroadcastSettings());
          }
        }
        _([_._], _.prototype, "m_mapBroadcasts", 2);
        var _ = ((_) => (
          (_[(_.Timeline = 1)] = "Timeline"),
          (_[(_.Minimap = 2)] = "Minimap"),
          _
        ))(_ || {});
        class _ {
          m_elVideo;
          m_player = null;
          m_listeners = new _._();
          m_gameDataParser = null;
          m_eWatchLocation = _._._;
          m_bStartWithSubtitles = !1;
          m_steamIDBroadcast = "";
          m_BroadcastInfo = null;
          m_broadcastClipID = "";
          m_nBroadcastAppIDVOD = 0;
          m_bPaused = !1;
          m_nPlaybackTime = 0;
          m_bBuffering = !1;
          m_bOnLiveEdge = !1;
          m_nVolume = 0;
          m_bMuted = !1;
          m_bUserInputNeeded = !1;
          m_bIsReplay = !1;
          m_nTimelineDuration = _;
          m_nVideoStartPos = 0;
          m_nVideoEndPos = 0;
          m_editorStartTime = 0;
          m_editorEndTime = 0;
          m_rgMarkers = _._.array();
          m_rgSegments = _._.array();
          m_rgRegions = _._.array();
          m_fnOnVideoEnd;
          m_videoEndingTimer;
          constructor(_, _, _, _) {
            (0, _._)(this),
              (this.m_elVideo = _),
              (this.m_nVolume = _),
              (this.m_bMuted = _),
              (this.m_eWatchLocation = _);
          }
          SetBroadcastSteamID(_) {
            this.m_steamIDBroadcast = _;
          }
          GetBroadcastSteamID() {
            return this.m_steamIDBroadcast;
          }
          GetWatchLocation() {
            return this.m_eWatchLocation;
          }
          IsPaused() {
            return this.m_bPaused;
          }
          GetPlaybackTime() {
            return this.m_nPlaybackTime;
          }
          SetStatsViewIsVisible(_) {
            this.m_player && this.m_player.SetStatsViewIsVisible(_);
          }
          GetDASHPlayerStats() {
            return this.m_player?.GetDASHPlayerStats();
          }
          BHasDASHStats() {
            return this.m_player != null;
          }
          IsTimelineMapActive() {
            return !1;
          }
          CanSeek() {
            return this.m_player?.CanSeek() ?? !1;
          }
          IsBuffering() {
            return this.m_bBuffering;
          }
          IsOnLiveEdge() {
            return this.m_bOnLiveEdge;
          }
          GetVideoAvailableStartTime() {
            return this.m_nVideoStartPos;
          }
          GetVolume() {
            return this.m_nVolume;
          }
          GetUserInputNeeded() {
            return this.m_bUserInputNeeded;
          }
          IsReplay() {
            return this.m_bIsReplay;
          }
          IsBroadcastClip() {
            return !!this.m_broadcastClipID;
          }
          SetBroadcastClipID(_) {
            this.m_broadcastClipID = _;
          }
          GetBroadcastClipID() {
            return this.m_broadcastClipID;
          }
          IsBroadcastVOD() {
            return !!this.m_nBroadcastAppIDVOD;
          }
          SetBroadcastAppIDVOD(_) {
            this.m_nBroadcastAppIDVOD = _;
          }
          GetBroadcastAppIDVOD() {
            return this.m_nBroadcastAppIDVOD;
          }
          GetVideoRepresentations() {
            return this.m_player ? this.m_player.GetVideoRepresentations() : [];
          }
          SetVideoRepresentation(_) {
            this.m_player?.SetVideoRepresentation(_);
          }
          GetBroadcastInfo() {
            return this.m_BroadcastInfo;
          }
          BHasTimedText() {
            return this.m_player?.BHasTimedText() ?? !1;
          }
          BHasPlayer() {
            return !!this.m_player;
          }
          ListSubtitles() {
            return this.m_elVideo.textTracks;
          }
          GetSubtitles() {
            for (let _ = 0; _ < this.m_elVideo.textTracks.length; _++) {
              const _ = this.m_elVideo.textTracks[_];
              if (_.mode === "showing") return _;
            }
            return null;
          }
          SetSubtitles(_) {
            let _ = _ ? _._[_] : _.xPp;
            this.m_player.SetSubtitles(_);
          }
          SetStartWithSubtitles(_) {
            this.m_bStartWithSubtitles = _;
          }
          GetBroadcastState() {
            return _.GetBroadcastState(this);
          }
          GetBroadcastStateDescription() {
            return _.GetBroadcastStateDescription(this);
          }
          SetOnVideoCallback(_) {
            this.m_fnOnVideoEnd = _;
          }
          InitPlayer() {
            (0, _._)(!this.m_player, "Initialized twice?"),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "playing",
                this.OnVideoPlaying,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "pause",
                this.OnVideoPause,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "timeupdate",
                this.OnVideoTimeUpdate,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "volumechange",
                this.OnVolumeUpdated,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-bufferupdate",
                this.OnVideoTimeUpdate,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-gamedataupdate",
                this.OnGameDataUpdate,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-downloadfailed",
                this.OnDownloadFailed,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-webrtcretry",
                this.OnWebRTCRetry,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-webrtcfailed",
                this.OnWebRTCFailed,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-userinputneeded",
                this.OnUserInputNeeded,
              ),
              (this.m_bPaused = !1),
              (this.m_nPlaybackTime = 0),
              (this.m_bBuffering = !1),
              (this.m_nTimelineDuration = _),
              (this.m_nVideoStartPos = 0),
              (this.m_nVideoEndPos = 0),
              this.m_rgMarkers.clear(),
              this.m_rgSegments.clear(),
              (this.m_bUserInputNeeded = !1),
              (this.m_bIsReplay = !1);
          }
          Restart() {
            this.IsMuted() ||
              this.IsPaused() ||
              this.GetUserInputNeeded() ||
              this.Play();
          }
          StartBroadcast(_) {
            if ((this.InitPlayer(), _.m_data.url)) {
              let _ = new _._(this.m_elVideo);
              _.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
                (this.m_player = _),
                _.PlayMPD(
                  _.m_data.url,
                  _.m_data.hls_url,
                  void 0,
                  _.m_strCDNAuthUrlParameters,
                );
            } else {
              let _ = new _(this.m_elVideo);
              (this.m_player = _),
                _.PlayWebRTC(
                  this.m_steamIDBroadcast,
                  _.m_ulViewerToken,
                  _.m_data.webrtc_session_id,
                  _.m_data.webrtc_turn_server,
                  _.m_data.webrtc_offer_sdp,
                );
            }
            this.SetVolume(this.m_nVolume),
              this.m_player?.SetMuted(this.m_bMuted);
            let _ = this.m_player?.GetDASHPlayerStats();
            _ &&
              _.SetBroadcasterAndViewerInfo(
                this.m_steamIDBroadcast,
                _._.steamid,
                _.m_ulBroadcastID,
                _.m_ulViewerToken,
              ),
              (this.m_BroadcastInfo = _.StartInfo(this.m_steamIDBroadcast));
          }
          StartClip(_) {
            this.InitPlayer();
            let _ = new _._(this.m_elVideo);
            _.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
              (this.m_player = _),
              _.PlayMPD(_.m_data.clip_url),
              this.SetVolume(this.m_nVolume),
              this.m_player?.SetMuted(this.m_bMuted);
          }
          StartVOD(_) {
            this.InitPlayer();
            let _ = new _._(this.m_elVideo);
            _.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
              (this.m_player = _),
              _._.logged_in &&
                _.m_nAppIDVOD &&
                _.SetBookmarkAdapter(new _(_.m_nAppIDVOD)),
              _.m_manifestURL && _.PlayMPD(_.m_manifestURL),
              this.SetVolume(this.m_nVolume),
              this.m_player?.SetMuted(this.m_bMuted);
          }
          Stop() {
            this.m_listeners.Unregister(),
              this.m_BroadcastInfo &&
                (_.StopInfo(this.m_BroadcastInfo),
                (this.m_BroadcastInfo = null)),
              (this.m_gameDataParser = null),
              this.m_player && (this.m_player.Close(), (this.m_player = null));
          }
          TogglePlayPause() {
            !this.m_player || this.m_player.IsPaused()
              ? this.Play()
              : this.Pause();
          }
          Play() {
            const _ = this.GetBroadcastState();
            if (_ == 0 || this.IsBroadcastClip()) {
              _.StartVideo(this);
              return;
            } else if (_ == 3)
              if ((_.SetActiveVideo(this), this.m_player)) this.m_player.Play();
              else if (this.IsBroadcastVOD()) {
                const _ = _.GetBroadcastVOD(this.m_nBroadcastAppIDVOD);
                _ && this.StartVOD(_);
              } else {
                const _ = _.GetBroadcast(this.m_steamIDBroadcast);
                _ && this.StartBroadcast(_);
              }
          }
          Pause() {
            console.log(
              "Pause ",
              this.m_steamIDBroadcast,
              this.m_nBroadcastAppIDVOD,
              this.m_broadcastClipID,
            ),
              this.m_player && this.m_player.Pause();
          }
          JumpTime(_) {
            this.m_player?.JumpTime(_);
          }
          Seek(_) {
            this.m_player?.Seek(_);
          }
          SeekAndPlay(_) {
            this.m_player?.SeekAndPlay(_);
          }
          JumpToLiveEdge() {
            const _ = this.m_player;
            _ &&
              (_.IsLiveContent()
                ? this.SeekAndPlay(_.GetBufferedLiveEdgeTime())
                : this.SeekAndPlay(_.GetAvailableVideoStartTime()));
          }
          SetVolume(_) {
            this.m_player &&
              (this.m_player.SetVolume(_),
              (this.m_nVolume = this.m_player.GetVolume())),
              _.SaveVolumeChange(_, this.m_bMuted);
          }
          SetMute(_) {
            this.m_player && this.m_player.SetMuted(_),
              (this.m_bMuted = _),
              _.SaveVolumeChange(this.m_nVolume, _);
          }
          IsMuted() {
            return this.m_bMuted;
          }
          OnVideoPlaying() {
            (this.m_bPaused = !1),
              this.m_editorStartTime === 0 &&
                this.m_editorEndTime === 0 &&
                ((this.m_editorStartTime = this.GetVideoAvailableStartTime()),
                (this.m_editorEndTime =
                  this.GetVideoAvailableStartTime() +
                  this.GetTimelineDuration()));
          }
          OnVideoPause() {
            this.m_bPaused = !0;
          }
          OnVideoTimeUpdate() {
            window.clearTimeout(this.m_videoEndingTimer);
            const _ = this.m_player;
            if (_)
              if (this.IsBroadcastClip())
                (this.m_nPlaybackTime = _.GetCurrentPlayTime()),
                  (this.m_nVideoStartPos = _.GetAvailableVideoStartTime()),
                  (this.m_nVideoEndPos = _.GetBufferedLiveEdgeTime()),
                  (this.m_nTimelineDuration =
                    this.m_nVideoEndPos - this.m_nVideoStartPos),
                  (this.m_bOnLiveEdge = !1),
                  (this.m_bBuffering = _.IsBuffering());
              else {
                if (
                  ((this.m_nPlaybackTime = _.GetCurrentPlayTime()),
                  (this.m_nVideoStartPos = _.GetAvailableVideoStartTime()),
                  (this.m_nVideoEndPos = Math.max(
                    _.GetBufferedLiveEdgeTime(),
                    this.m_nPlaybackTime,
                  )),
                  this.IsBroadcastVOD())
                ) {
                  this.m_nTimelineDuration = this.m_nVideoEndPos;
                  const _ = this.m_fnOnVideoEnd;
                  _ &&
                    this.m_nVideoEndPos - this.m_nPlaybackTime < _._ &&
                    (this.m_videoEndingTimer = window.setTimeout(() => {
                      _();
                    }, 400));
                }
                (this.m_bBuffering = _.IsBuffering()),
                  (this.m_bOnLiveEdge =
                    this.m_nVideoEndPos - this.m_nPlaybackTime < _._),
                  _.IsPaused() && (this.m_bOnLiveEdge = !1);
              }
          }
          OnVolumeUpdated() {
            const _ = this.m_player;
            _ &&
              ((this.m_nVolume = _.GetVolume()), (this.m_bMuted = _.IsMuted()));
          }
          OnGameDataUpdate(_) {
            let _ = _.detail;
            if (!_ || typeof _.gamedata != "object") return;
            (!this.m_gameDataParser ||
              this.m_gameDataParser.GetAppID() != _.gamedata.__appid) &&
              (this.m_gameDataParser = new _(_.gamedata.__appid));
            const _ = this.m_player?.GetLiveContentStartTime().getTime() ?? 0;
            if ("timelinemarkers" in _.gamedata) {
              const _ = this.m_gameDataParser.UpdateMarkers(
                _.gamedata.__timelinemarkers,
                _,
              );
              _ &&
                (this.m_rgMarkers.replace(_.rgMarkers || []),
                this.m_rgSegments.replace(_.rgSegments || []));
              const _ = this.m_gameDataParser.UpdateRegions(
                _.gamedata.__regions,
              );
              _ && this.m_rgRegions.replace(_);
            } else
              "soundtrack" in _.gamedata &&
                this.m_gameDataParser.UpdateSoundtrack(
                  this.m_steamIDBroadcast,
                  _.gamedata.soundtrack,
                );
          }
          OnDownloadFailed(_) {
            let _ = _.detail || _._.Invalid;
            _.BroadcastDownloadFailed(this, !0, _);
          }
          OnWebRTCRetry() {
            _.BroadcastDownloadFailed(this, !1);
          }
          OnWebRTCFailed() {
            _.BroadcastDownloadFailed(this, !0);
          }
          OnUserInputNeeded() {
            this.m_bUserInputNeeded = !0;
          }
          UserInputClick() {
            (this.m_bUserInputNeeded = !1),
              this.m_player ? this.JumpToLiveEdge() : this.Play();
          }
          StopPlaybackTillUserInput() {
            this.Stop(), this.OnUserInputNeeded();
          }
          GetTimelineStartPos() {
            return this.m_nVideoEndPos - this.m_nTimelineDuration;
          }
          GetTimelineDuration() {
            return this.m_nTimelineDuration;
          }
          GetTimeAtMousePosition(_, _, _, _) {
            let _ = _._(_, _.left, _.right, _, _);
            return Math.floor(_ + 0.5);
          }
          GetPercentOffsetFromTime(_, _) {
            let _ = 0,
              _ = 0;
            return (
              _ == 1
                ? ((_ = this.m_nVideoEndPos),
                  (_ = _ - this.m_nTimelineDuration))
                : ((_ = 0), (_ = 0)),
              _._(_, _, _, 0, 100)
            );
          }
          GetTimelineMarkers() {
            return this.m_rgMarkers;
          }
          GetTimelineSegments() {
            return this.m_rgSegments;
          }
          GetGameDataRegions() {
            return this.m_rgRegions;
          }
          BHasMarkersOrSegments() {
            return this.has_segments || this.has_markers;
          }
          get has_markers() {
            return this.m_rgMarkers.length > 0;
          }
          get has_segments() {
            return this.m_rgSegments.length > 0;
          }
        }
        _([_._], _.prototype, "m_player", 2),
          _([_._], _.prototype, "m_bPaused", 2),
          _([_._], _.prototype, "m_nPlaybackTime", 2),
          _([_._], _.prototype, "m_bBuffering", 2),
          _([_._], _.prototype, "m_bOnLiveEdge", 2),
          _([_._], _.prototype, "m_nVolume", 2),
          _([_._], _.prototype, "m_bMuted", 2),
          _([_._], _.prototype, "m_bUserInputNeeded", 2),
          _([_._], _.prototype, "m_bIsReplay", 2),
          _([_._], _.prototype, "m_nTimelineDuration", 2),
          _([_._], _.prototype, "m_nVideoStartPos", 2),
          _([_._], _.prototype, "m_nVideoEndPos", 2),
          _([_._], _.prototype, "m_editorStartTime", 2),
          _([_._], _.prototype, "m_editorEndTime", 2),
          _([_._.bound], _.prototype, "StartBroadcast", 1),
          _([_._.bound], _.prototype, "StartClip", 1),
          _([_._.bound], _.prototype, "StartVOD", 1),
          _([_._], _.prototype, "OnVideoPlaying", 1),
          _([_._], _.prototype, "OnVideoPause", 1),
          _([_._.bound], _.prototype, "OnVideoTimeUpdate", 1),
          _([_._], _.prototype, "OnVolumeUpdated", 1),
          _([_._.bound], _.prototype, "OnGameDataUpdate", 1),
          _([_._], _.prototype, "OnDownloadFailed", 1),
          _([_._], _.prototype, "OnWebRTCRetry", 1),
          _([_._], _.prototype, "OnWebRTCFailed", 1),
          _([_._], _.prototype, "OnUserInputNeeded", 1);
        const _ = new _();
        window.uiBroadcastWatchStore = _;
      },
    },
  ]);
})();
