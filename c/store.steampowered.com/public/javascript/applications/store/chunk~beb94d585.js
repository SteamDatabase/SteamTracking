"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [33884],
  {
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
        _ = __webpack_require__("chunkid"),
        _ =
          (__webpack_require__("chunkid"),
          __webpack_require__("chunkid"),
          __webpack_require__("chunkid"));
      __webpack_require__("chunkid"), __webpack_require__("chunkid");
      function _(_) {
        const [_, _] = (0, _.useState)(() => _._.GetClanEventModel(_)),
          _ = (0, _._)("usePartnerEventByEventGID");
        return (
          (0, _.useEffect)(() => {
            _ &&
              _?.GID != _ &&
              (_._.Init(),
              _._.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                [_],
                [],
                _,
              ).then((_) => {
                1 != _?.length ||
                  _[0].GID != _ ||
                  _.token.reason ||
                  __webpack_require__(_[0]);
              }));
          }, [_, _, _]),
          _
        );
      }
      function _(_, _, _) {
        const [_, _] = (0, _.useState)(_ ? _._.GetClanEventModel(_) : void 0),
          [_, _] = (0, _.useState)(!!_ && !!_),
          [_, _] = (0, _.useState)(),
          [_, _] = (0, _.useState)(_._),
          _ = (0, _._)("usePartnerEventByClanAccountAndEventGID");
        return (
          (0, _.useEffect)(() => {
            (async () => {
              try {
                if (_?.GID != _ && _ && _) {
                  _._.Init();
                  const _ = _._.InitFromClanID(_);
                  let _;
                  try {
                    _ =
                      await _._.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                        _,
                        _,
                        0,
                        _,
                      );
                  } catch (_) {
                    _(_?.response?.data?.err_msg),
                      _(_?.response?.data?.success || _._);
                  }
                  _.token.reason || _(_);
                }
              } finally {
                _(!1);
              }
            })();
          }, [_, _, _, _, _]),
          {
            eventModel: _,
            bLoading: _,
            sErrorMessage: _,
            eResult: _,
          }
        );
      }
      function _(_) {
        let _ = "" + _;
        const _ = _._.GetELanguageFallback(_);
        return _ != _ && (_ += "_" + _), _;
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        return (
          (null == _.gid || null == _.gid || "0" == _.gid) &&
          !!_.announcement_body &&
          "0" != _.announcement_body.gid
        );
      }
      function _(_) {
        return _(_) ? _._ + _.announcement_body?.gid : _.gid;
      }
      var _ = __webpack_require__("chunkid");
      class _ {
        appid;
        date;
        can_play;
        playtime;
        announcementid;
        constructor(_) {
          (0, _._)(
            "number" == typeof _.appid,
            "AJAX updated app returned a non-numeric AppID! Did the PHP change?",
          ),
            (this.appid = _.appid),
            (this.date = _.date),
            (this.can_play = _.can_play),
            (this.playtime = _.playtime),
            (this.announcementid = _.announcementid);
        }
      }
      class _ {
        constructor(_ = !1) {
          (0, _._)(this), (this.m_bOnlySummary = _);
        }
        m_bOnlySummary = !1;
        m_mapExistingEvents = new Map();
        m_mapEventUpdateCallback = new Map();
        m_mapAnnouncementBodyToEvent = new Map();
        m_mapClanToGIDs = new Map();
        m_mapAppIDToGIDs = new Map();
        m_mapAdjacentAnnouncementGIDs = new Map();
        m_mapUpdatedApps = new Map();
        m_tsUpdatedAppsQueryTime = 0;
        m_rgQueuedEventsClanIDs = new Array();
        m_rgQueuedEventsUniqueIDs = new Array();
        m_rgQueuedEventsForEditFlags = new Array();
        m_QueuedEventTimeout = new _._();
        m_PendingInfoPromise;
        m_PendingInfoResolve;
        m_bLoadedFromConfig = !1;
        Init() {
          if (!this.m_bLoadedFromConfig) {
            let _ = (0, _._)("PartnerEventStore");
            this.ValidateStoreDefault(_) &&
              _.forEach((_) => {
                if (_) {
                  let _ = new _._(_.clan_steamid);
                  const _ = this.InsertEventModelFromClanEventData(_, _);
                  _.announcement_body &&
                    this.m_mapExistingEvents.set(
                      _._ + _.announcement_body.gid,
                      _,
                    );
                }
              });
            let _ = (0, _._)("partnereventstore", "application_config");
            this.ValidateStoreDefault(_) &&
              _.forEach((_) => {
                if (_) {
                  let _ = new _._(_.clan_steamid);
                  const _ = this.InsertEventModelFromClanEventData(_, _);
                  _.announcement_body &&
                    !this.m_mapExistingEvents.has(
                      _._ + _.announcement_body.gid,
                    ) &&
                    this.m_mapExistingEvents.set(
                      _._ + _.announcement_body.gid,
                      _,
                    );
                }
              });
            let _ = (0, _._)("partnereventadjacents", "application_config");
            this.ValidateAdjacentEvent(_) &&
              __webpack_require__.forEach((_) => {
                _ &&
                  this.m_mapAdjacentAnnouncementGIDs.set(
                    _.announcementGID,
                    _.adjacents,
                  );
              }),
              (this.m_bLoadedFromConfig = !0);
          }
        }
        ValidateStoreDefault(_) {
          const _ = _;
          return (
            !!(
              _ &&
              Array.isArray(_) &&
              _.length > 0 &&
              _[0] &&
              "object" == typeof _[0]
            ) &&
            ("string" == typeof _[0].gid ||
              ("object" == typeof _[0].announcement_body &&
                "string" == typeof _[0].announcement_body.gid))
          );
        }
        ValidateAdjacentEvent(_) {
          const _ = _;
          return (
            !!(
              _ &&
              Array.isArray(_) &&
              _.length > 0 &&
              "object" == typeof _[0]
            ) &&
            "string" == typeof _[0].announcementGID &&
              Array.isArray(_[0].adjacents) &&
            (0 == _[0].adjacents.length || "string" == typeof _[0].adjacents[0])
          );
        }
        GetPartnerEventChangeCallback(_) {
          let _ = this.m_mapEventUpdateCallback.get(_);
          return (
            _ ||
              (this.m_mapEventUpdateCallback.set(_, new _._()),
              (_ = this.m_mapEventUpdateCallback.get(_))),
            _
          );
        }
        GetClanEventGIDs(_) {
          let _ = this.m_mapClanToGIDs.get(_.GetAccountID());
          return _ || [];
        }
        GetClanEventGIDsForApp(_) {
          let _ = this.m_mapAppIDToGIDs.get(_);
          return _ || [];
        }
        GetClanEventModel(_) {
          return this.m_mapExistingEvents.get(_);
        }
        BHasClanEventModel(_) {
          return this.m_mapExistingEvents.has(_);
        }
        BHasClanAnnouncementGID(_) {
          if (this.m_mapAnnouncementBodyToEvent.has(_)) {
            const _ = this.m_mapAnnouncementBodyToEvent.get(_);
            return !!_ && this.BHasClanEventModel(_);
          }
          return !1;
        }
        GetClanEventGIDFromAnnouncementGID(_) {
          return this.m_mapAnnouncementBodyToEvent.get(_);
        }
        GetClanEventFromAnnouncementGID(_) {
          const _ = this.m_mapAnnouncementBodyToEvent.get(_);
          return _ ? this.m_mapExistingEvents.get(_) : void 0;
        }
        DefaultEventSortFunction(_, _) {
          return _.startTime == _.startTime
            ? (0, _._)(_.GID ?? "", _.GID ?? "")
            : (_.startTime ?? 0) - (_.startTime ?? 0);
        }
        RegisterClanEvents(_) {
          if (_)
            for (const _ of _) {
              const _ = _(_);
              if (!this.m_mapExistingEvents.has(_)) {
                const _ = new _._(_.clan_steamid);
                this.InsertEventModelFromClanEventData(_, _);
              }
            }
        }
        GetRankedClanEvents(_, _) {
          let _ = [],
            _ = _
              ? this.GetClanEventGIDs(_)
              : _
                ? this.GetClanEventGIDsForApp(_)
                : void 0;
          if (!_ || 0 == _.length) return _;
          for (let _ of _) {
            let _ = this.GetClanEventModel(_);
            _ && __webpack_require__.push(_);
          }
          return __webpack_require__.sort(this.DefaultEventSortFunction), _;
        }
        InsertEventModelFromClanEventData(_, _) {
          const _ = (function (_, _) {
            let _ = new _._();
            if (
              ((_.clanSteamID = _),
              (0, _._)(
                _.clanSteamID && _.clanSteamID.BIsValid(),
                "Invalid Clan SteamID: " +
                  _.clanSteamID.ConvertTo64BitString() +
                  " " +
                  _._.EUNIVERSE,
              ),
              (_.GID = _(_)),
              (_.bOldAnnouncement = _(_)),
              (_.appid = _.appid ?? 0),
              (_.createTime = _.rtime_created),
              (_.startTime = _.rtime32_start_time),
              (_.endTime = _.rtime32_end_time),
              (_.visibilityStartTime = _.rtime32_visibility_start),
              (_.visibilityEndTime = _.rtime32_visibility_end),
              (_.loadedAllLanguages = !1),
              (_.type = _.event_type ?? _.DRF),
              (_.nVotesUp = _.votes_up ?? 0),
              (_.nVotesDown = _.votes_down ?? 0),
              (_.comment_type = _.comment_type),
              (_.gidfeature = _.gidfeature),
              (_.gidfeature2 = _.gidfeature2),
              (_.featured_app_tagid = _.featured_app_tagid),
              (_.vecTags = new Array()),
              (_.creator_steamid = _.creator_steamid),
              (_.last_update_steamid = _.last_update_steamid),
              (_.rtime32_last_modified = _.rtime32_last_modified),
              (_.rtime32_moderator_reviewed = _.rtime_mod_reviewed),
              (_.video_preview_type = _.video_preview_type),
              (_.video_preview_id = _.video_preview_id),
              (_.has_live_stream = _.has_live_stream),
              (_.live_stream_viewer_count = _.live_stream_viewer_count),
              (_.m_nBuildID = _.build_id),
              (_.m_strBuildBranch = _.build_branch),
              _.announcement_body)
            ) {
              let _ = _.announcement_body;
              (_.AnnouncementGID = _.gid),
                _.name.set(_.language, _.headline),
                _.description.set(_.language, _.body),
                _.timestamp_loc_updated.clear(),
                (_.forumTopicGID = _.forum_topic_id),
                (_.nCommentCount = _.commentcount),
                (_.postTime = _.posttime),
                _.bOldAnnouncement && !_.hidden && (_.startTime = _.posttime),
                (_.announcementClanSteamID = new _._(_.clanid)),
                _.tags &&
                  _.tags.length > 0 &&
                  _.tags.forEach((_) => _.vecTags.push(_)),
                !_.rtime32_last_solr_search_col_updated &&
                  _.rtime32_last_modified &&
                  ((_.rtime32_last_solr_search_col_updated =
                    _.rtime32_last_modified),
                  (_.rtime32_last_modified = _.updatetime));
            } else
              (_.AnnouncementGID = "0"),
                (_.forumTopicGID = _.forum_topic_id),
                _.name.clear(),
                _.description.clear(),
                _.timestamp_loc_updated.clear(),
                (_.postTime = _.rtime32_start_time),
                (_.nCommentCount = _.comment_count ?? 0),
                _.name.set(_.Bhc, _.event_name ?? ""),
                _.description.set(_.Bhc, _.event_notes ?? "");
            _.broadcaster_accountid &&
              (_.broadcaster = new _._(_.broadcaster_accountid));
            const _ = _._;
            try {
              _.jsondata = {
                ..._,
                ...(_.jsondata ? JSON.parse(_.jsondata) : void 0),
              };
            } catch (_) {
              const _ = (0, _._)(_);
              throw (
                (console.error(
                  "PartnerEventStore::InsertEventModelFromClanEventData: failed to parse embedded json model" +
                    _.strErrorMsg,
                  _,
                ),
                _)
              );
            }
            if (
              ((_.jsondata.localized_capsule_image = (0, _._)(
                _.jsondata.localized_capsule_image || [],
                _.bP9,
                null,
              )),
              (_.jsondata.localized_title_image = (0, _._)(
                _.jsondata.localized_title_image || [],
                _.bP9,
                null,
              )),
              (_.jsondata.localized_subtitle = (0, _._)(
                _.jsondata.localized_subtitle || [],
                _.bP9,
                null,
              )),
              (_.jsondata.localized_summary = (0, _._)(
                _.jsondata.localized_summary || [],
                _.bP9,
                null,
              )),
              (_.jsondata.localized_broadcast_title = (0, _._)(
                _.jsondata.localized_broadcast_title || [],
                _.bP9,
                null,
              )),
              (_.jsondata.localized_broadcast_left_image = (0, _._)(
                _.jsondata.localized_broadcast_left_image || [],
                _.bP9,
                null,
              )),
              (_.jsondata.localized_broadcast_right_image = (0, _._)(
                _.jsondata.localized_broadcast_right_image || [],
                _.bP9,
                null,
              )),
              (_.jsondata.localized_sale_header = (0, _._)(
                _.jsondata.localized_sale_header || [],
                _.bP9,
                null,
              )),
              (_.jsondata.localized_sale_overlay = (0, _._)(
                _.jsondata.localized_sale_overlay || [],
                _.bP9,
                null,
              )),
              (_.jsondata.localized_sale_product_banner = (0, _._)(
                _.jsondata.localized_sale_product_banner || [],
                _.bP9,
                null,
              )),
              (_.jsondata.localized_sale_product_mobile_banner = (0, _._)(
                _.jsondata.localized_sale_product_mobile_banner || [],
                _.bP9,
                null,
              )),
              (_.jsondata.localized_sale_logo = (0, _._)(
                _.jsondata.localized_sale_logo || [],
                _.bP9,
                null,
              )),
              void 0 !== _.jsondata.sale_num_headers &&
                _.jsondata.localized_per_day_sales_header)
            )
              for (let _ = 0; _ < _.jsondata.sale_num_headers; ++_)
                _.jsondata.localized_per_day_sales_header[_] = (0, _._)(
                  _.jsondata.localized_per_day_sales_header[_],
                  _.bP9,
                  null,
                );
            return (
              _.jsondata.sale_sections &&
                _.jsondata.sale_sections.forEach((_, _) => {
                  _.localized_label &&
                    (_.localized_label = (0, _._)(
                      _.localized_label,
                      _.bP9,
                      null,
                    )),
                    "trailercarousel" === _.section_type &&
                      (_.show_as_carousel = !1),
                    (_.jsondata.sale_sections[_] = {
                      ..._._,
                      ..._,
                    });
                }),
              _.jsondata.email_setting &&
                _.jsondata.email_setting.sections &&
                _.jsondata.email_setting.sections.forEach((_) => {
                  void 0 !== _.localized_headline &&
                    null !== _.localized_headline &&
                    (_.localized_headline = (0, _._)(
                      _.localized_headline,
                      _.bP9,
                      null,
                    )),
                    void 0 !== _.localized_body &&
                      null !== _.localized_body &&
                      (_.localized_body = (0, _._)(
                        _.localized_body,
                        _.bP9,
                        null,
                      )),
                    void 0 !== _.localized_image &&
                      null !== _.localized_image &&
                      (_.localized_image = (0, _._)(
                        _.localized_image,
                        _.bP9,
                        null,
                      ));
                }),
              _.jsondata.localized_title_image.forEach((_, _) => {
                if (null != _ && "http" == _.substr(0, 4)) {
                  let _ = _.lastIndexOf("/"),
                    _ = _.substr(_ + 1);
                  _.jsondata.localized_title_image[_] = _;
                }
              }),
              (_.bLoaded = !0),
              _.published
                ? _.unlisted
                  ? (_.visibility_state = _._.k_EEventStateUnlisted)
                  : _.hidden
                    ? (_.visibility_state = _._.k_EEventStateStaged)
                    : (_.visibility_state = _._.k_EEventStateVisible)
                : (_.visibility_state = _._.k_EEventStateUnpublished),
              _
            );
          })(_, _);
          return (
            this.InsertUniqueEventGID(_.GetAccountID(), _.appid, _.GID),
            this.m_mapExistingEvents.set(_.GID, _),
            _.AnnouncementGID &&
              _.AnnouncementGID.length > 1 &&
              this.m_mapAnnouncementBodyToEvent.set(_.AnnouncementGID, _.GID),
            _
          );
        }
        HelperInitializeNumSalesHeaderArray(_) {
          if ((_.jsondata.sale_num_headers ?? 0) > 1) {
            _.jsondata.localized_per_day_sales_header = [];
            for (let _ = 0; _ < (_.jsondata.sale_num_headers ?? 0); ++_)
              _.jsondata.localized_per_day_sales_header.push(
                (0, _._)([], _.bP9, null),
              );
            _.m_overrideCurrentDay = 0;
          } else _.m_overrideCurrentDay = void 0;
        }
        GetAllClanEvents(_) {
          let _ = new Array();
          return (
            this.m_mapClanToGIDs.has(_.GetAccountID()) &&
              this.m_mapClanToGIDs.get(_.GetAccountID()).forEach((_) => {
                let _ = this.m_mapExistingEvents.get(_);
                _ && _.push(_);
              }),
            _
          );
        }
        async QueueLoadPartnerEvent(_, _, _) {
          if (this.m_mapExistingEvents.has(_)) return;
          this.m_rgQueuedEventsClanIDs.push(_),
            this.m_rgQueuedEventsUniqueIDs.push(_),
            this.m_rgQueuedEventsForEditFlags.push(Boolean(_)),
            this.m_PendingInfoPromise ||
              (this.m_PendingInfoPromise = new Promise(
                (_) => (this.m_PendingInfoResolve = _),
              ));
          const _ = this.m_PendingInfoPromise,
            _ = () => {
              const _ = this.m_PendingInfoResolve,
                _ = this.m_rgQueuedEventsClanIDs,
                _ = this.m_rgQueuedEventsUniqueIDs,
                _ = this.m_rgQueuedEventsForEditFlags;
              (this.m_PendingInfoPromise = void 0),
                (this.m_rgQueuedEventsClanIDs = new Array()),
                (this.m_rgQueuedEventsUniqueIDs = new Array()),
                (this.m_rgQueuedEventsForEditFlags = new Array()),
                this.InternalLoadPartnerEventList(_, _, _).then(() => _?.());
            };
          if (this.m_rgQueuedEventsClanIDs.length >= 30)
            this.m_QueuedEventTimeout.Cancel(), _();
          else if (!this.m_QueuedEventTimeout.IsScheduled()) {
            const _ = 50;
            this.m_QueuedEventTimeout.Schedule(_, _);
          }
          return _;
        }
        async InternalLoadPartnerEventList(_, _, _) {
          let _ = __webpack_require__.some((_) => _);
          const _ =
              _._.STORE_BASE_URL +
              (_
                ? "events/ajaxgeteventdetailsforedit/"
                : "events/ajaxgeteventdetails/"),
            _ = (0, _._)((0, _.sfN)(_._.LANGUAGE)),
            _ = {
              clanid_list: _.join(","),
              uniqueid_list: _.join(","),
              lang_list: _,
              origin: self.origin,
            };
          try {
            const _ = await _().get(_, {
              params: _,
              withCredentials: _,
            });
            this.RegisterClanEvents(_.data.events);
          } catch (_) {
            let _ = (0, _._)(_);
            console.error("GetEventDetails hit error " + _.strErrorMsg, _);
          }
        }
        async LoadAdjacentPartnerEvents(_, _, _, _, _, _, _) {
          return this.InternalLoadAdjacentPartnerEvents(
            _,
            void 0,
            _,
            _,
            _,
            _,
            _,
            _,
          );
        }
        async LoadAdjacentPartnerEventsByAnnouncement(_, _, _, _, _, _, _) {
          return this.InternalLoadAdjacentPartnerEvents(
            void 0,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
          );
        }
        async LoadAdjacentPartnerEventsByEvent(_, _, _, _, _, _, _) {
          const _ = _ || _.clanSteamID;
          return _.bOldAnnouncement
            ? this.InternalLoadAdjacentPartnerEvents(
                void 0,
                _.AnnouncementGID,
                _,
                _,
                _,
                _,
                _,
                _,
              )
            : this.InternalLoadAdjacentPartnerEvents(
                _.GID,
                _.AnnouncementGID,
                _,
                _,
                _,
                _,
                _,
                _,
              );
        }
        async InternalLoadAdjacentPartnerEvents(_, _, _, _, _, _, _, _) {
          let _ = new Array();
          if (_ && this.m_mapAdjacentAnnouncementGIDs.has(_)) {
            let _ = this.m_mapAdjacentAnnouncementGIDs.get(_),
              _ = new Array();
            if (
              (_?.forEach((_) => {
                if (this.m_mapAnnouncementBodyToEvent.has(_)) {
                  let _ = this.m_mapAnnouncementBodyToEvent.get(_);
                  _ &&
                    this.m_mapExistingEvents.get(_) &&
                    _.push(this.m_mapExistingEvents.get(_));
                } else __webpack_require__.push(_);
              }),
              _.length > 0)
            ) {
              (
                await this.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                  void 0,
                  _,
                  _,
                )
              ).forEach((_) => _.push(_));
            }
          } else {
            let _ = _._.STORE_BASE_URL + "events/ajaxgetadjacentpartnerevents/";
            const _ = (0, _._)((0, _.sfN)(_._.LANGUAGE));
            _?.only_summaries &&
              !this.m_bOnlySummary &&
              ((0, _._)(
                this.m_bOnlySummary,
                "Only Summary: Incorrect parameter passed in, unsetting",
              ),
              (_.only_summaries = void 0));
            let _ = {
              clan_accountid: _ ? __webpack_require__.GetAccountID() : void 0,
              appid: _,
              count_before: _,
              count_after: _,
              gidevent: _,
              gidannouncement: _,
              lang_list: _,
              rtime_oldestevent: _ ? _.rtime_oldestevent : void 0,
              require_tags:
                _ && _.require_tags ? _.require_tags.join(",") : void 0,
              exclude_tags:
                _ && _.exclude_tags ? _.exclude_tags.join(",") : void 0,
              require_no_tags: _ ? _.require_no_tags : void 0,
              event_type_filter:
                _ && _.event_type_filter
                  ? _.event_type_filter.join(",")
                  : void 0,
              exclude_event_types:
                _ && _.exclude_event_types
                  ? _.exclude_event_types.join(",")
                  : void 0,
              only_summaries: _ && !!_.only_summaries,
              origin: self.origin,
            };
            try {
              let _ = await _().get(_, {
                params: _,
                cancelToken: _?.token,
              });
              if (_?.data?.success == _._)
                (0, _._)(() => {
                  for (let _ of _.data.events) {
                    let _ = _(_);
                    if (!this.m_mapExistingEvents.has(_)) {
                      let _ = new _._(_.clan_steamid);
                      this.InsertEventModelFromClanEventData(_ || _, _);
                    }
                    _.push(this.m_mapExistingEvents.get(_));
                  }
                  if (0 == _.length)
                    if (_ && this.BHasClanEventModel(_))
                      this.m_mapExistingEvents.get(_) &&
                        _.push(this.m_mapExistingEvents.get(_));
                    else if (_ && this.BHasClanAnnouncementGID(_)) {
                      const _ = this.GetClanEventFromAnnouncementGID(_);
                      _ && _.push(_);
                    }
                });
              else {
                let _ = (0, _._)(_?.data);
                console.error(
                  "LoadAdjacentPartnerEvents Success but empty response:" +
                    _ +
                    " clanAccount:" +
                    (_ ? __webpack_require__.GetAccountID() : 0) +
                    " " +
                    _.strErrorMsg,
                  _,
                );
              }
            } catch (_) {
              let _ = (0, _._)(_);
              _.errorCode != _._ &&
                console.error(
                  "LoadAdjacentPartnerEvents hit error on appid:" +
                    _ +
                    " clanAccount:" +
                    (_ ? __webpack_require__.GetAccountID() : 0) +
                    " " +
                    _.strErrorMsg,
                  _,
                );
            }
          }
          return _;
        }
        async LoadPartnerEventsPageable(_, _, _ = 0, _ = 0, _) {
          let _ = new Array(),
            _ = _._.STORE_BASE_URL + "events/ajaxgetpartnereventspageable/",
            _ = {
              clan_accountid: _ ? _.GetAccountID() : void 0,
              appid: _,
              offset: _,
              count: _,
              _: _._.LANGUAGE,
              origin: self.origin,
              exclude_tags: _ && _.length > 0 ? _?.join(",") : void 0,
            };
          try {
            let _ = await _().get(_, {
              params: _,
            });
            (0, _._)(() => {
              for (let _ of _.data.events) {
                let _ = _(_);
                if (!this.m_mapExistingEvents.has(_)) {
                  let _ = new _._(_.clan_steamid);
                  this.InsertEventModelFromClanEventData(_, _);
                }
                _.push(this.m_mapExistingEvents.get(_));
              }
            });
          } catch (_) {
            console.error(
              "LoadClanEventInDateRange hit error " + (0, _._)(_).strErrorMsg,
            );
          }
          return _;
        }
        async GetBestEventsForCurrentUser(_, _, _) {
          let _ = new Array(),
            _ = {
              _: _._.LANGUAGE,
              include_steam_blog: !0,
              filter_to_played_within_days: _,
              include_only_game_updates: _,
            },
            _ = _._.STORE_BASE_URL + "events/ajaxgetbesteventsforuser",
            _ = await _().get(_, {
              params: _,
              withCredentials: !0,
              cancelToken: _ ? _.token : void 0,
            });
          if (!_.data?.events) {
            let _ = _.data?.err_msg || "";
            throw new Error(
              `GetBestEventsForCurrentUser request failed (${_})`,
            );
          }
          return (
            (0, _._)(() => {
              for (let _ of _.data.events) {
                let _ = _(_);
                if (!this.m_mapExistingEvents.has(_)) {
                  let _ = new _._(_.clan_steamid);
                  this.InsertEventModelFromClanEventData(_, _);
                }
                let _ = {
                  nAppPriority: _.nAppPriority,
                  bPossibleTakeOver: _.bPossibleTakeOver,
                  event: this.m_mapExistingEvents.get(_),
                };
                _.push(_);
              }
            }),
            _
          );
        }
        async LoadImportantEventsAroundToday(_, _, _, _, _, _) {
          let _ = new Array(),
            _ = new Array();
          _.push({
            priority: 0,
            appids: _,
          }),
            _ &&
              _.push({
                priority: 1,
                appids: _,
              }),
            _ &&
              _.push({
                priority: 2,
                appids: _,
              });
          let _ = {
              count: _,
              strAppIDPriority: JSON.stringify({
                prioritized_apps: _,
              }),
              filterToEventTypes: _ ? _.toString() : "",
              _: _._.LANGUAGE,
            },
            _ = _._.STORE_BASE_URL + "events/ajaxgettodayboundedevents",
            _ = await _().get(_, {
              params: _,
              withCredentials: !0,
              cancelToken: _.token,
            });
          return (
            (0, _._)(() => {
              for (let _ of _.data.events) {
                let _ = _(_);
                if (!this.m_mapExistingEvents.has(_)) {
                  let _ = new _._(_.clan_steamid);
                  this.InsertEventModelFromClanEventData(_, _);
                }
                _.push(this.m_mapExistingEvents.get(_));
              }
            }),
            _
          );
        }
        InsertUniqueEventGID(_, _, _) {
          let _ = this.m_mapClanToGIDs.get(_);
          _ ||
            (this.m_mapClanToGIDs.set(_, new Array()),
            (_ = this.m_mapClanToGIDs.get(_)));
          let _ = this.m_mapAppIDToGIDs.get(_);
          _ ||
            (this.m_mapAppIDToGIDs.set(_, new Array()),
            (_ = this.m_mapAppIDToGIDs.get(_))),
            -1 == _.indexOf(_) && (_.push(_), _.push(_));
        }
        ResetModel() {}
        async DeleteClanEvent(_, _) {
          this.m_mapExistingEvents.has(_) &&
            (this.m_mapExistingEvents.get(_).deleteInProgress = !0);
          let _ = new URLSearchParams();
          __webpack_require__.append("sessionid", (0, _._)()),
            __webpack_require__.append("bDelete", "1"),
            __webpack_require__.append("gid", _);
          const _ = await _().post(
            _._.COMMUNITY_BASE_URL +
              "/gid/" +
              _.ConvertTo64BitString() +
              "/ajaxcreateupdatedeletepartnerevents/",
            _,
          );
          return this.RemoveGIDFromList(_, _), _.data;
        }
        RemoveGIDFromList(_, _) {
          if (
            (this.m_mapExistingEvents.delete(_),
            this.m_mapClanToGIDs.has(_.GetAccountID()))
          ) {
            let _ = this.m_mapClanToGIDs.get(_.GetAccountID()),
              _ = __webpack_require__.indexOf(_);
            _ >= 0 && __webpack_require__.splice(_, 1);
          }
        }
        FlushEventFromCache(_, _) {
          if (_ && this.m_mapExistingEvents.has(_)) {
            if (!_) {
              _ = this.m_mapExistingEvents.get(_).AnnouncementGID;
            }
            this.m_mapExistingEvents.delete(_);
          }
          if (
            _ &&
            (this.m_mapExistingEvents.has(_._ + _) &&
              this.m_mapExistingEvents.delete(_._ + _),
            this.m_mapAnnouncementBodyToEvent.has(_))
          ) {
            const _ = this.m_mapAnnouncementBodyToEvent.get(_);
            _ &&
              this.m_mapExistingEvents.has(_) &&
              this.m_mapExistingEvents.delete(_),
              this.m_mapAnnouncementBodyToEvent.delete(_);
          }
        }
        async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
          _,
          _,
          _,
          _,
          _,
          _ = !1,
        ) {
          let _ = (0, _._)(_ ? _.Bhc : (0, _.sfN)(_._.LANGUAGE)),
            _ = {
              appid: _,
              clan_accountid: _ ? _.GetAccountID() : void 0,
              announcement_gid: _,
              event_gid: _,
              lang_list: _,
              last_modified_time: _ || 0,
              origin: self.origin,
              for_edit: _,
              only_summary: this.m_bOnlySummary,
            },
            _ = null,
            _ = null;
          if (_) {
            const _ = (0, _._)();
            "community" === _
              ? ((_ = _._.COMMUNITY_BASE_URL),
                (_ += _ ? "gid/" + _.ConvertTo64BitString() : "ogg/" + _),
                (_ += "/"))
              : (_ =
                  "partnerweb" === _
                    ? _._.PARTNER_BASE_URL + "sales/"
                    : _._.STORE_BASE_URL + "events/"),
              (_ += "ajaxgetpartnereventforedit"),
              (_ = {
                params: _,
                withCredentials: !0,
              });
          } else
            (_ = _._.STORE_BASE_URL + "events/ajaxgetpartnerevent"),
              (_ = {
                params: _,
                withCredentials: !1,
              });
          try {
            let _ = await _().get(_, _);
            if (_.data.success !== _._) return;
            let _ = _.data.event,
              _ = _(_);
            if (
              !this.m_mapExistingEvents.has(_) ||
              (this.m_mapExistingEvents.get(_).rtime32_last_modified ?? 0) <
                (_.rtime32_last_modified ?? 0) ||
              (this.m_mapExistingEvents.get(_).rtime32_moderator_reviewed ??
                0) < (_.rtime_mod_reviewed ?? 0)
            ) {
              (0, _._)(
                _.clan_steamid,
                "ClanSteamID is missing from data we received",
              );
              let _ = new _._(_.clan_steamid);
              this.InsertEventModelFromClanEventData(_, _);
            }
            return this.m_mapExistingEvents.get(_);
          } catch (_) {
            return;
          }
        }
        async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
          _,
          _,
          _,
          _,
          _,
          _,
        ) {
          if (_ && this.m_mapExistingEvents.has(_))
            return this.m_mapExistingEvents.get(_);
          if (_) {
            if (this.m_mapExistingEvents.has(_._ + _))
              return this.m_mapExistingEvents.get(_._ + _);
            if (this.m_mapAnnouncementBodyToEvent.has(_)) {
              const _ = this.m_mapAnnouncementBodyToEvent.get(_);
              if (_ && this.m_mapExistingEvents.has(_))
                return this.m_mapExistingEvents.get(_);
            }
          }
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
            _,
            _,
            _,
            _,
            _,
            _,
          );
        }
        async LoadPartnerEventFromAnnoucementGID(_, _, _, _) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            void 0,
            _,
            void 0,
            _,
            _,
            _,
          );
        }
        async LoadPartnerEventFromAnnoucementGIDAndClanSteamID(_, _, _, _) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            _,
            void 0,
            void 0,
            _,
            _,
            _,
          );
        }
        async LoadPartnerEventFromClanEventGID(_, _, _, _) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            void 0,
            _,
            _,
            void 0,
            _,
            _,
          );
        }
        async LoadPartnerEventFromClanEventGIDAndClanSteamID(_, _, _, _) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            _,
            void 0,
            _,
            void 0,
            _,
            _,
          );
        }
        async LoadPartnerEventGeneric(_, _, _, _, _) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            _,
            _,
            _,
            _,
            _,
          );
        }
        async LoadHiddenPartnerEvent(_, _) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
            _,
            void 0,
            _,
            void 0,
            0,
            !0,
          );
        }
        async LoadHiddenPartnerEventByAnnouncementGID(_, _) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
            _,
            void 0,
            void 0,
            _,
            0,
            !0,
          );
        }
        async HintLoadImportantUpdates() {
          const _ = (0, _._)(36e5);
          if (_ != this.m_tsUpdatedAppsQueryTime) {
            this.m_tsUpdatedAppsQueryTime = _;
            const _ = {
                page: 1,
                numPerPage: 500,
                includeAnnouncements: !1,
              },
              _ = _._.STORE_BASE_URL + "updated/ajaxgetmyappsraw",
              _ = await _().get(_, {
                params: _,
                withCredentials: !0,
              });
            _.data.apps &&
              _.data.apps.length > 0 &&
              (0, _._)(() => {
                const _ = new Map(_.data.apps?.map((_) => [_.appid, new _(_)]));
                this.m_mapUpdatedApps = _;
              });
          }
          return this.m_mapUpdatedApps;
        }
        GetAppImportantUpdate(_) {
          return (
            this.HintLoadImportantUpdates().catch((_) => {
              console.log("UpdatedApps failed to load: ", _.response?.data);
            }),
            this.m_mapUpdatedApps && this.m_mapUpdatedApps.get(_)
          );
        }
        async LoadClanEventLocalizationFromAnnouncementGID(_, _) {
          let _ =
            _._.COMMUNITY_BASE_URL +
            "gid/" +
            _.ConvertTo64BitString() +
            "/announcements/ajaxgetlocalization/" +
            _;
          return (await _().get(_)).data.localization;
        }
        async LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(_, _, _) {
          const _ = new Array(),
            _ = _._.STORE_BASE_URL + "events/ajaxgetbatchedpartnerevent/",
            _ = (0, _._)((0, _.sfN)(_._.LANGUAGE));
          let _ = null,
            _ = null;
          if (_) {
            let _ = new Array();
            _.forEach((_) => {
              this.m_mapExistingEvents.has(_)
                ? _.push(this.m_mapExistingEvents.get(_))
                : _.push(_);
            }),
              _.sort(),
              (_ = _);
          }
          if (_) {
            let _ = new Array();
            _.forEach((_) => {
              if (
                this.m_mapAnnouncementBodyToEvent.has(_) &&
                this.m_mapAnnouncementBodyToEvent.get(_) &&
                this.m_mapExistingEvents.has(
                  this.m_mapAnnouncementBodyToEvent.get(_),
                )
              ) {
                let _ = this.m_mapAnnouncementBodyToEvent.get(_);
                if (_) {
                  const _ = this.m_mapExistingEvents.get(_);
                  _ && _.push(_);
                }
              } else _.push(_);
            }),
              _.sort(),
              (_ = _);
          }
          if (!_ && !_) return _;
          const _ = new Array();
          for (; (_?.length ?? 0) > 0 || (_?.length ?? 0) > 0; ) {
            let _ = {
              event_gids:
                (_?.length ?? 0) > 0 ? _?.splice(0, 100).join(",") : void 0,
              announcement_gids:
                (_?.length ?? 0) > 0 ? _?.splice(0, 100).join(",") : void 0,
              lang_list: _,
              origin: self.origin,
            };
            _.push(
              _().get(_, {
                params: _,
                cancelToken: _ ? _.token : void 0,
              }),
            );
          }
          try {
            const _ = await Promise.all([..._]);
            let _ = 0;
            (0, _._)(() =>
              _.forEach((_) => {
                if (_ && _.data && _.data.events)
                  for (let _ of _.data.events) {
                    let _ = _(_);
                    if (!this.m_mapExistingEvents.has(_)) {
                      let _ = new _._(_.clan_steamid);
                      this.InsertEventModelFromClanEventData(_, _);
                    }
                    _.push(this.m_mapExistingEvents.get(_));
                  }
                else {
                  const _ = (0, _._)(_);
                  console.error(
                    "LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs partial processing hit error " +
                      _.strErrorMsg,
                    _,
                  );
                }
                _ += 1;
              }),
            );
          } catch (_) {
            const _ = (0, _._)(_);
            console.error(
              "LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs hit error " +
                _.strErrorMsg,
              _,
            );
          }
          return _;
        }
        async SavePartnerEventSaleAssets(_, _, _, _) {
          let _ = null;
          if (!this.m_mapExistingEvents.has(_)) return !1;
          try {
            const _ = `${_._.PARTNER_BASE_URL}promotion/sales/ajaxsaveasset/${_}`,
              _ = new FormData();
            _.append("sessionid", (0, _._)()),
              _.append("gidclanevent", _),
              _.append("json", JSON.stringify(_)),
              _.append("pageStyles", JSON.stringify(_));
            const _ = await _().post(_, _, {
              withCredentials: !0,
            });
            if (_?.data?.success == _._) {
              const _ = this.m_mapExistingEvents.get(_);
              if (_ && _.jsondata)
                for (const _ in _)
                  if (__webpack_require__.hasOwnProperty(_) && _[_]) {
                    const _ = _,
                      _ = _[_];
                    void 0 !== _ && void 0 !== _ && (_.jsondata[_] = _);
                  }
              return this.GetPartnerEventChangeCallback(_).Dispatch(_), !0;
            }
            _ = (0, _._)(_);
          } catch (_) {
            _ = (0, _._)(_);
          }
          return (
            console.error(
              "CPartnerEventStore.SavePartnerEventSaleAssets failed: " +
                _?.strErrorMsg,
              _,
            ),
            !1
          );
        }
        BIsSummaryOnlyStore() {
          return this.m_bOnlySummary;
        }
      }
      (0, _._)([_._], _.prototype, "m_mapExistingEvents", void 0),
        (0, _._)([_._], _.prototype, "m_mapAnnouncementBodyToEvent", void 0),
        (0, _._)([_._], _.prototype, "m_mapClanToGIDs", void 0),
        (0, _._)([_._], _.prototype, "m_mapAppIDToGIDs", void 0),
        (0, _._)([_._], _.prototype, "m_mapUpdatedApps", void 0),
        (0, _._)([_._], _.prototype, "Init", null),
        (0, _._)([_._], _.prototype, "GetPartnerEventChangeCallback", null),
        (0, _._)([_._], _.prototype, "RegisterClanEvents", null),
        (0, _._)([_._], _.prototype, "InsertEventModelFromClanEventData", null),
        (0, _._)([_._], _.prototype, "DeleteClanEvent", null),
        (0, _._)([_._], _.prototype, "RemoveGIDFromList", null),
        (0, _._)([_._], _.prototype, "FlushEventFromCache", null),
        (0, _._)([_._], _.prototype, "SavePartnerEventSaleAssets", null);
      const _ = new _();
      (0, _._)("g_PartnerEventStore", _);
      const _ = new _(!0);
      function _(_, _, _ = !1) {
        const [_, _] = (0, _.useState)(() => _.GetClanEventModel(_)),
          [_, _] = (0, _.useState)(!0),
          _ = (0, _.useMemo)(() => _._.InitFromClanID(_), [_]);
        return (
          (0, _.useEffect)(() => {
            !_ &&
              _ > 0 &&
              (_.Init(),
              _.LoadPartnerEventFromClanEventGIDAndClanSteamID(_, _, 0, _)
                .then(_)
                .finally(() => _(!1)));
          }, [_, _, _, _, _]),
          (0, _._)(_ ? _.GetPartnerEventChangeCallback(_) : void 0, _),
          {
            eventModel: _,
            bLoading: _,
          }
        );
      }
      (0, _._)("g_PartnerEventSummaryStore", _);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      function _(_) {
        return window.StoreDefaults ? window.StoreDefaults[_] : void 0;
      }
      __webpack_require__._(module_exports, {
        _: () => _,
      });
    },
  },
]);
