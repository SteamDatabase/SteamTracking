"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4867],
  {
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        return Boolean(_ && _.thumbnail_http_address);
      }
      function _(_, _) {
        if (_ || _) {
          const _ = _ || _;
          return Boolean(_ && _.Get().BIsAppStreaming(_));
        }
        return !1;
      }
      class _ {
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
          return Boolean(_ && _.length > 0);
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
          return Boolean(this.m_bUserPreferenceHideBroadcastByDefault);
        }
        BIsEmbeddedStreamCollapsed() {
          return Boolean(this.m_bCollapsed);
        }
        SetEmbeddedStreamCollapsed(_) {
          this.m_bCollapsed != _ && (this.m_bCollapsed = _);
        }
        GetConcurrentStreams(_) {
          const _ = this.GetStreams(_);
          return _ ? _.filter((_) => _(_)).length : 0;
        }
        GetChatVisibility() {
          return "remove" === this.m_pageChatStatus ||
            "remove" === this.m_streamChatStatus
            ? "remove"
            : void 0 !== this.m_bUserChatExpanded
              ? this.m_bUserChatExpanded
                ? "show"
                : "hide"
              : "show" === this.m_pageChatStatus
                ? "show"
                : "hide" === this.m_pageChatStatus ||
                    "hide" === this.m_streamChatStatus
                  ? "hide"
                  : "show";
        }
        ToggleChatVisibility() {
          const _ = this.GetChatVisibility();
          "remove" !== _ && (this.m_bUserChatExpanded = "hide" === _);
        }
        DebugDumpContextAndAvailableContext(_) {
          console.log("Requested context", this.GetStreamsLookupKeyFromDef(_)),
            console.log("Available context count: ", this.m_lookupStreams.size),
            this.m_lookupStreams.forEach((_, _) => {
              console.log(_, _.length);
            });
        }
        GetStreams(_) {
          const _ = this.GetStreamsLookupKeyFromDef(_);
          return this.m_lookupStreams.get(_);
        }
        GetBroadcastURL(_) {
          let _ = null;
          return (
            (_ = _.steamid
              ? new _._(_.steamid)
              : _._.InitFromAccountID(_.accountid)),
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
                  Boolean(_) &&
                  __webpack_require__.some(
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
              __webpack_require__?.forEach((_) => {
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
          if (void 0 === this.m_bUserPreferenceHideBroadcastByDefault) {
            let _ = (0, _._)("broadcastuser", "application_config");
            if (!_)
              try {
                let _ =
                    _._.STORE_BASE_URL +
                    "broadcast/ajaxgetuserbroadcastpreferences",
                  _ = await _().get(_, {
                    params: {},
                    cancelToken: _.token,
                  });
                _ = _.data;
              } catch (_) {
                console.log(
                  "LoadBIsEmbeddedBroadcastHidden: " + (0, _._)(_).strErrorMsg,
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
          return this.m_bUserPreferenceHideBroadcastByDefault;
        }
        async SetupEmbeddableVOD(_, _) {
          (this.m_bUseFakeData = !1),
            (this.m_streamChatStatus = "remove"),
            await _._.Get().QueueAppRequest(_.nAppIDVOD, {
              include_assets: !0,
              include_trailers: !0,
            });
          const _ = _._.Get().GetApp(_.nAppIDVOD),
            _ = new _._();
          if (
            ((_.accountid = 0),
            (_.nAppIDVOD = _.nAppIDVOD),
            (_.default_selection_priority = _._.k_ePrimary),
            (_.current_selection_priority = _._.k_ePrimary),
            (_.thumbnail_http_address =
              __webpack_require__?.GetAssets().GetHeaderURL() || ""),
            (_.title = __webpack_require__?.GetName() || ""),
            this.GetStreams(_).unshift(_),
            _)
          ) {
            const _ = this.GetStreamsLookupKeyFromDef(_);
            this.m_playReadyStream.set(_, _);
          }
        }
        async HintLoadEmbeddablePreviewStreams(_) {
          let _ = null,
            _ = {
              eventid: _.event ? _.event.GID : void 0,
              previewAccounts: Boolean(_.bIsPreview && _.accountIDs)
                ? _.accountIDs.slice().sort().join(",")
                : void 0,
            };
          try {
            return (
              (_ = await _().get(
                _._.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpreview",
                {
                  params: _,
                },
              )),
              this.HandleHintLoadBroadcastResponse(_, _.data)
            );
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
            _ = this.GetStreamsLookupKeyFromParam(_);
          if (!this.m_inFlightRequests.has(_)) {
            this.m_lookupKeyToEmbedStreamDef.set(_, _);
            const _ = this.InternalHintLoadEmbeddableStreams(_, _);
            this.m_inFlightRequests.set(_, _);
          }
          return this.m_inFlightRequests.get(_);
        }
        async InternalHintLoadEmbeddableStreams(_, _) {
          let _ = (0, _._)(
            "broadcast_available_for_page",
            "application_config",
          );
          if ((0, _._)(_)) return this.HandleHintLoadBroadcastResponse(_, _);
          try {
            let _ = null;
            return (
              (_ = await _().get(
                _._.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpage",
                {
                  params: _,
                },
              )),
              this.HandleHintLoadBroadcastResponse(_, _.data)
            );
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
                ? this.ExtractBroadcastPrioritiesFromPartnerEventForPreview(
                    _.event,
                    _.filtered,
                  )
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
                void 0 === _.current_selection_priority &&
                  (_.current_selection_priority = _.default_selection_priority),
                _ != _._ && __webpack_require__.push(_);
            });
          });
          const _ = this.GetStreamsLookupKeyFromDef(_);
          if (
            (this.m_lookupStreams.set(_, _.filtered),
            this.m_onLoadContextCall.has(_))
          ) {
            const _ = this.m_onLoadContextCall.get(_);
            _
              ? ("dev" == _._.WEB_UNIVERSE &&
                  console.log(
                    "CBroadcastEmbeddableStore initialized after caller using callback to " +
                      _.name,
                  ),
                _.fnCallback())
              : "dev" == _._.WEB_UNIVERSE &&
                console.log(
                  "CBroadcastEmbeddableStore initialized after caller, however callback is since cleared",
                );
          }
          const _ = this.GetStreams(_);
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
        async PlayFromAvailableStreams(_, _, __webpack_require__ = !1) {
          const _ = new Set();
          for (;;) {
            const _ = _.filter(
                (_) => !(_.has(_) || (__webpack_require__ && _.nAppIDVOD)),
              ),
              _ = this.GetAutoStartStream(_);
            if (!_) return null;
            if (await this.AttemptToPlayStream(_, _)) return _;
            _.add(_);
          }
        }
        async AttemptToPlayStream(_, _) {
          let _ = this.GetStreamsLookupKeyFromDef(_);
          if (
            (this.m_bMapHasStartedVideo.set(_, !0),
            this.m_mapBroadcastChecked.has(_.accountid) ||
              this.m_mapBroadcastChecked.set(
                _.accountid,
                this.InternalAttemptToPlayStream(_, _),
              ),
            _.nAppIDVOD)
          )
            this.m_playReadyStream.set(_, _);
          else {
            const _ = await this.m_mapBroadcastChecked.get(_.accountid);
            if (1 != _?.success) return null;
            (_.steamid = _.steamid),
              this.m_playReadyStream.set(_, _),
              this.GetConcurrentStreams(_) > 1
                ? (this.m_streamChatStatus = "hide")
                : (this.m_streamChatStatus = _.broadcast_chat_visibility),
              this.m_setStreamChangedListeners.forEach((_) => _(_));
            _(_._.GetOrCreateBroadcastInfo(_.steamid).m_nAppID, 1, _.snr);
          }
          return _;
        }
        async InternalAttemptToPlayStream(_, _) {
          this.GetStreamsLookupKeyFromDef(_);
          let _ = null;
          try {
            const _ = _._.STORE_BASE_URL + "broadcast/ajaxcheckbroadcast";
            let _ = {
              broadcastaccountid: _.accountid,
              viewer_token: _._.GetViewerToken(),
              origin: self.origin,
            };
            return (
              (_ = await _().get(_, {
                params: _,
              })),
              _.data
            );
          } catch (_) {
            let _ = (0, _._)(_);
            console.error("Broadcast.AttemptToPlayStream: " + _.strErrorMsg, _);
          }
          return null;
        }
        GetAutoStartStream(_) {
          if (!_) return null;
          const _ = _.filter((_) => _(_)),
            _ = _.reduce((_, _) => Math.max(_, _(_)), 0),
            _ = _.filter((_) => _(_) === _);
          if (0 === _.length) return null;
          return _[Math.floor(Math.random() * _.length)];
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
            previewAccounts: Boolean(_.bIsPreview && _.accountIDs)
              ? _.accountIDs.slice().sort().join(",")
              : void 0,
            test: false,
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
              ((_.s_GlobalStore = new _()),
              "dev" == _._.WEB_UNIVERSE &&
                (window.g_BroadcastEmbeddableStore = _.s_GlobalStore),
              _.s_GlobalStore.Init()),
            _.s_GlobalStore
          );
        }
        Init() {}
      }
      function _(_) {
        return _.current_selection_priority || _._.k_eGeneral;
      }
      function _(_) {
        _.sort((_, _) =>
          _(_) != _(_)
            ? _(_) - _(_)
            : _.viewer_count != _.viewer_count
              ? _.viewer_count - _.viewer_count
              : _.accountid - _.accountid,
        );
      }
      async function _(_, _, _) {
        if (_ > 0 && 7 != _ && _) {
          let _ = new URLSearchParams();
          _.append("page_action", "" + _),
            _.append("snr", _),
            _().post(
              _._.STORE_BASE_URL + "ajaxreportproductaction/" + _ + "/",
              _,
            );
        }
      }
      (0, _._)([_._], _.prototype, "m_lookupStreams", void 0),
        (0, _._)([_._], _.prototype, "m_playReadyStream", void 0),
        (0, _._)([_._], _.prototype, "m_pageChatStatus", void 0),
        (0, _._)([_._], _.prototype, "m_streamChatStatus", void 0),
        (0, _._)([_._], _.prototype, "m_bUserChatExpanded", void 0),
        (0, _._)(
          [_._],
          _.prototype,
          "m_bUserPreferenceHideBroadcastByDefault",
          void 0,
        ),
        (0, _._)([_._], _.prototype, "m_bCollapsed", void 0),
        (0, _._)([_._], _.prototype, "HintLoadEmbeddablePreviewStreams", null),
        (0, _._)([_._], _.prototype, "AttemptToPlayStream", null);
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
        _ = __webpack_require__("chunkid");
      class _ {
        constructor() {
          (0, _._)(this);
        }
        m_mapBroadcasterSteamIDToEvents = new Map();
        m_mapBroadcasterSteamIDData = new Map();
        static GetBBCodeParam(_, _, __webpack_require__ = "") {
          const _ = new RegExp(`\\W${_}\\W*=\\W*\\"(.*?)\\"`, "gmi").exec(_);
          return _ ? _[1] : __webpack_require__;
        }
        static ParseCalendarEventPresentersFromText(_) {
          const _ = /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
            _ = new Array();
          for (;;) {
            const _ = _.exec(_);
            if (null === _) break;
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
            __webpack_require__.push(_);
          }
          return _;
        }
        static ParseEventModelPresenters(_, _) {
          const _ = _.GetDescriptionWithFallback(_);
          return _.ParseCalendarEventPresentersFromText(_);
        }
        static ParseEventAppReferencesFromText(_) {
          const _ = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
            _ = new Set();
          for (;;) {
            const _ = _.exec(_);
            if (null === _) break;
            const _ = _[1];
            __webpack_require__.add(Number(_));
          }
          return _;
        }
        static ParseEventModelAppReferences(_, _) {
          const _ = _.GetDescriptionWithFallback(_),
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
              for (const _ of _.GetBroadcastWhitelistAsSteamIDs())
                _.has(_) ? _.get(_).push(_) : _.set(_, [_]);
          return _;
        }
        IsBroadcasterAlreadyBound(_, _) {
          const _ = this.m_mapBroadcasterSteamIDToEvents.get(_),
            _ = _ ? _.length : 0;
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
              _.steamID &&
                __webpack_require__.set(_.steamID.ConvertTo64BitString(), _);
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
          for (const _ of _) {
            _.ParseEventModelAppReferences(_, _).forEach((_) =>
              __webpack_require__.add(_),
            );
          }
          return Array.from(_);
        }
        UpdateCachedDataFromEvents(_, _) {
          _.forEach((_, _) => {
            if (this.IsBroadcasterAlreadyBound(_, _)) return;
            const _ = {
              m_mapPresenters: _.BuildSteamIDToPresenterMapFromEventList(_, _),
              m_rgAppIDs: _.BuildAppIDRefsForEventList(_, _),
            };
            this.m_mapBroadcasterSteamIDData.set(_, _),
              this.m_mapBroadcasterSteamIDToEvents.set(
                _,
                _.map((_) => _.GID),
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
      }
      (0, _._)([_._], _.prototype, "m_mapBroadcasterSteamIDData", void 0);
      const _ = new _();
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      class _ extends _._ {
        constructor() {
          super();
        }
        BTransportReady() {
          return !0;
        }
        GetServerTime() {
          return _._.PAGE_TIMESTAMP + Math.floor(performance.now() / 1e3);
        }
        async RequestEmoticonListInternal() {
          let _ = [];
          try {
            let _ = await _().get(_._.CHAT_BASE_URL + "actions/EmoticonData", {
              withCredentials: !0,
            });
            if (_.data.emoticons)
              for (let _ of _.data.emoticons) {
                let _ = _.name;
                if (_.startsWith("^"))
                  _.push({
                    name: _,
                  });
                else {
                  let _ = {
                      name: _.substr(1, _.length - 2),
                    },
                    _ = _.name.toLowerCase();
                  _ != _.name && (_.name_normalized = _),
                    _.time_last_used && (_.last_used = _.time_last_used),
                    _.use_count && (_.use_count = _.use_count),
                    _.time_received && (_.time_received = _.time_received),
                    _.appid && (_.appid = _.appid),
                    _.push(_);
                }
              }
          } catch (_) {
            console.error("error loading emoticon list", _);
          }
          this.OnEmoticonListReceived(_);
        }
      }
      const _ = new _();
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      const _ =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      const _ =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
    },
  },
]);
