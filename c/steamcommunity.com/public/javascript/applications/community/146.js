"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [146],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            CGameRecordingStore: () => _,
            default: () => _,
            k_strGRFAQ: () => _,
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
          _ = ((_) => (
            (_[(_.Invalid = 0)] = "Invalid"),
            (_[(_.Success = 1)] = "Success"),
            (_[(_.Failed = 2)] = "Failed"),
            (_[(_.InvalidParam = 3)] = "InvalidParam"),
            (_[(_.InputNotFound = 4)] = "InputNotFound"),
            (_[(_.ErrorReadingInput = 5)] = "ErrorReadingInput"),
            (_[(_.ErrorWritingOuput = 6)] = "ErrorWritingOuput"),
            (_[(_.NoHardwareEncoder = 7)] = "NoHardwareEncoder"),
            (_[(_.UnsupportedSourceCodec = 8)] = "UnsupportedSourceCodec"),
            (_[(_.UnsupportedTargetCodec = 9)] = "UnsupportedTargetCodec"),
            (_[(_.DiskFull = 10)] = "DiskFull"),
            (_[(_.ResolutionTooLarge = 11)] = "ResolutionTooLarge"),
            (_[(_.ConverterBusy = 12)] = "ConverterBusy"),
            _
          ))(_ || {}),
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
        const _ = "23B7-49AD-4A28-9590";
        function _(_, _) {
          switch (_) {
            case _._._:
              return !_;
            case _._._:
              return _;
            case _._._:
            case _._._:
            case _._._:
            case _._._:
              return !0;
            default:
              return !0;
          }
        }
        class _ {
          constructor() {
            _(this, "m_rgAppsWithBackgroundVideo", []),
              _(this, "m_mapTimelineLoaders", new Map()),
              _(this, "m_mapClipLoaders", new Map()),
              _(this, "m_mapSharedClipLoaders", new Map()),
              _(this, "m_mapActiveTimelines", new Map()),
              _(this, "m_mapManualRecordingCallbacks", new Map()),
              _(this, "m_fnGetAchievementInfo"),
              _(this, "m_strLastClipID"),
              _(this, "m_bEnableH265Recording", !1),
              _(this, "m_transport"),
              _(this, "m_bLoadingClips", !0),
              _(this, "m_bLoadingAppsWithBackgroundVideo", !0),
              _(this, "m_bClipLoadingTriggered", !1),
              _(this, "m_clips", new Map()),
              _(this, "m_clipsGroupByGame", new Map()),
              _(this, "m_clipExportProgress", new Map()),
              _(this, "m_currentlyExportingClip", null),
              _(this, "m_recordingState", null),
              _(this, "m_bEnoughDiskSpace", !1),
              (0, _._)(this);
          }
          async Init(_, _) {
            (this.m_transport = _),
              (this.m_fnGetAchievementInfo = _),
              _._.IN_STEAMUI &&
                (_._.RegisterForNotifyTimelineChanged(this.OnTimelineChanged),
                _._.RegisterForNotifyRecordingSessionChanged(
                  this.OnRecordingSessionChanged,
                ),
                _._.RegisterForNotifyTimelineEntryChanged(
                  this.OnTimelineEntryChanged,
                ),
                _._.RegisterForNotifyTimelineEntryRemoved(
                  this.OnTimelineEntryRemoved,
                ),
                _._.RegisterForNotifyClipCreated(this.OnClipCreated),
                _._.RegisterForNotifyExportProgress(this.OnExportProgress),
                _._.RegisterForNotifyLowDiskSpace(this.OnLowDiskSpace),
                _._.RegisterForNotifyStateChanged(this.OnStateChanged),
                await this.LoadAppsWithBackgroundVideo(),
                await this.CheckEnoughDiskSpace(),
                await this.UpdateState());
          }
          async UpdateState() {
            var _;
            const _ = await _._.GetState({});
            if (!_.BSuccess()) {
              console.warn("Failed to initialize game recording state");
              return;
            }
            const _ = _.Body().toObject();
            this.m_bEnableH265Recording =
              (_ = _ == null ? void 0 : _.is_h265_enabled) != null ? _ : !1;
          }
          OnStateChanged() {
            return this.UpdateState(), _._;
          }
          GetAppsWithBackgroundVideo() {
            return this.m_rgAppsWithBackgroundVideo;
          }
          IsGameRecordingH265Enabled() {
            return this.m_bEnableH265Recording;
          }
          GetTimelineLoaderForGame(_) {
            (0, _._)(_, "Invalid GameID: " + _);
            let _ = this.m_mapTimelineLoaders.get(_);
            if (!_) {
              let _ = new _._();
              _.LoadTimelinesForBackgroundVideo(_),
                (_ = {
                  loader: _,
                  nRefCount: 0,
                }),
                this.m_mapTimelineLoaders.set(_, _);
            }
            _.nRefCount++,
              (0, _._)(
                `CGameRecordingStore::GetTimelineLoaderForGame incrementing refCount ${_.nRefCount} for ${_}` +
                  (_.nRefCount == 1 ? " and it was created" : ""),
              );
            let _ = () => {
              _.nRefCount--,
                (0, _._)(
                  `CGameRecordingStore::GetTimelineLoaderForGame reducing refCount ${_.nRefCount} for ${_}` +
                    (_.nRefCount <= 0 ? " will delete" : ""),
                ),
                _.nRefCount <= 0 && this.m_mapTimelineLoaders.delete(_);
            };
            return {
              loader: _.loader,
              release: _,
            };
          }
          GetTimelineLoaderForClip(_) {
            (0, _._)(_, "Invalid ClipID: " + _);
            let _ = this.m_mapClipLoaders.get(_);
            if (!_) {
              let _ = new _._();
              _.LoadTimelinesForClip(_),
                (_ = {
                  loader: _,
                  nRefCount: 0,
                }),
                this.m_mapClipLoaders.set(_, _);
            }
            _.nRefCount++;
            let _ = () => {
              _.nRefCount--,
                _.nRefCount <= 0 && this.m_mapTimelineLoaders.delete(_);
            };
            return {
              loader: _.loader,
              release: _,
            };
          }
          GetTimelineLoaderForSharedClip(_) {
            (0, _._)(_, "Invalid clip");
            let _ = this.m_mapSharedClipLoaders.get(_.clip_id);
            if (!_) {
              let _ = new _._();
              _.LoadTimelinesForSharedClip(_),
                (_ = {
                  loader: _,
                  nRefCount: 0,
                }),
                this.m_mapClipLoaders.set(_.clip_id, _);
            }
            _.nRefCount++;
            let _ = () => {
              _.nRefCount--,
                _.nRefCount <= 0 && this.m_mapTimelineLoaders.delete(_.clip_id);
            };
            return {
              loader: _.loader,
              release: _,
            };
          }
          OnTimelineChanged(_) {
            (0, _._)() && _.DEBUG_LogToConsole(),
              this.ReloadAppsWithBackgroundVideoIfNecessary(_);
            let _ = _.Body().notification_type(),
              _ = _.Body().timeline_id(),
              _ = _.Body().game_id();
            switch (_) {
              case _._._:
              case _._._: {
                let _ = this.GetTimelineLoaderForGame(_);
                this.m_mapActiveTimelines.set(_, _),
                  _.loader.AddRunningTimeline(_, _, _.Body().start_time());
                break;
              }
              case _._._: {
                let _ = this.m_mapActiveTimelines.get(_);
                _ &&
                  (_.loader.RunningTimelineStopped(_, _.Body().duration_ms()),
                  _.release());
                break;
              }
              case _._._: {
                let _ = this.m_mapTimelineLoaders.get(_);
                _ && _.loader.TimelineDeleted(_);
                break;
              }
            }
            return _._;
          }
          OnRecordingSessionChanged(_) {
            const _ = _.Body().toObject(),
              _ = _.game_id,
              _ = _.notification_type;
            switch (
              (this.m_mapManualRecordingCallbacks.has(_) &&
                this.m_mapManualRecordingCallbacks.get(_)(_),
              _)
            ) {
              case _._._: {
                this.m_recordingState = {
                  m_gameID: _,
                };
                break;
              }
              case _._._: {
                this.m_recordingState = null;
                break;
              }
            }
            let _ = this.m_mapTimelineLoaders.get(_);
            return _ && _.loader.RecordingSessionChanged(_), _._;
          }
          OnTimelineEntryChanged(_) {
            if (!_.Body().entry(!1))
              return (
                (0, _._)(
                  !1,
                  "OnTimelineEntryChanged received an invalid protobuf",
                ),
                _._
              );
            const { entry: _ } = _.Body().toObject();
            if (!_)
              return (
                (0, _._)(
                  !1,
                  "OnTimelineEntryChanged received an invalid protobuf after conversion",
                ),
                _._
              );
            const _ = this.m_mapActiveTimelines.get(_.timeline_id);
            if (_) {
              const _ = _.loader;
              if (_.BIsTimelineRunning(_.timeline_id))
                return _.AddRunningTimelineEntry(_), _._;
            }
            if (_.Body().game_id()) {
              let _ = this.m_mapTimelineLoaders.get(_.Body().game_id());
              if (_)
                return (
                  _.loader.AddEventToTimeline(
                    _.timeline_id,
                    parseInt(_.time),
                    _.marker_icon,
                    _.entry_id,
                    _.marker_priority,
                    _.range_title,
                    _.marker_description,
                    parseInt(_.range_duration),
                  ),
                  _._
                );
            }
            return _._;
          }
          OnTimelineEntryRemoved(_) {
            const {
              entry_id: _,
              timeline_id: _,
              game_id: _,
            } = _.Body().toObject();
            if (_) {
              const _ = this.m_mapTimelineLoaders.get(_);
              _ && _.loader.RemoveTimelineEvent(_, _);
            }
            return _._;
          }
          OnClipCreated(_) {
            const _ = _.Body().summary().toObject();
            return (
              this.InternalAddClipSummary(_),
              (0, _._)("New clip saved:", _),
              _._
            );
          }
          async UploadClip(_, _, _, _) {
            const _ = await _._.UploadClipToSteam({
              clip_id: _,
              title: _,
              desc: _,
              visibility: _,
            });
            let _;
            if (_.GetEResult() == _._) {
              const _ = _.Body().summary().toObject();
              this.InternalAddClipSummary(_),
                (_ = `${_._.COMMUNITY_BASE_URL}sharedfiles/filedetails/?id=${_.published_file_id}`);
            }
            return {
              eResult: _.GetEResult(),
              strURL: _,
            };
          }
          async LoadAppsWithBackgroundVideo() {
            try {
              const _ = await _._.GetAppsWithBackgroundVideo({});
              if (!_.BSuccess()) {
                this.m_bLoadingAppsWithBackgroundVideo = !1;
                return;
              }
              (0, _._)(`Loaded ${_.Body().apps().length} apps with timelines`),
                (0, _._)(() => {
                  (this.m_bLoadingAppsWithBackgroundVideo = !1),
                    (this.m_rgAppsWithBackgroundVideo = _.Body()
                      .toObject()
                      .apps.sort(
                        (_, _) =>
                          _.most_recent_start_time - _.most_recent_start_time,
                      ));
                });
            } catch (_) {
              (0, _._)("Failed to load apps with timelines", _),
                (this.m_bLoadingAppsWithBackgroundVideo = !1);
            }
          }
          ReloadAppsWithBackgroundVideoIfNecessary(_) {
            if (!this.m_rgAppsWithBackgroundVideo) return;
            let _ = _.Body().game_id(),
              _ = _.Body().notification_type(),
              _ =
                this.m_rgAppsWithBackgroundVideo.findIndex(
                  (_) => _.game_id == _,
                ) >= 0;
            _(_, _) && this.LoadAppsWithBackgroundVideo();
          }
          InternalAddClipSummary(_) {
            if (
              this.m_clips.has(_.clip_id) &&
              this.m_clipsGroupByGame.has(_.game_id)
            ) {
              const _ = this.m_clipsGroupByGame.get(_.game_id);
              this.m_clipsGroupByGame.set(
                _.game_id,
                _.filter((_) => _.clip_id != _.clip_id),
              );
            }
            this.m_clips.set(_.clip_id, _),
              this.m_clipsGroupByGame.has(_.game_id) ||
                this.m_clipsGroupByGame.set(_.game_id, []),
              this.m_clipsGroupByGame.get(_.game_id).push(_);
          }
          async SaveClip(_, _, _, _, _, _, _) {
            const _ = await _._.SaveClip({
              game_id: _,
              start: _,
              end: _,
              name: _,
              src_clip_id: _,
              temporary: _,
              force_thumbnail: _,
            });
            if (_.GetEResult() == _._) {
              const _ = _.Body().summary().toObject();
              return (
                this.InternalAddClipSummary(_),
                (0, _._)("Saved clip", _),
                (this.m_strLastClipID = _.clip_id),
                {
                  clipSummary: _,
                  result: _._,
                }
              );
            } else
              return (
                (0, _._)("Failed to save clip"),
                {
                  result: _.GetEResult(),
                }
              );
          }
          async DeleteClip(_) {
            const _ = await _._.DeleteClip({
              clip_id: _,
            });
            if (_.GetEResult() == _._) {
              const _ = this.m_clips.get(_);
              this.m_clips.delete(_);
              let _ = this.m_clipsGroupByGame.get(_.game_id),
                _ = _.findIndex((_) => _.clip_id == _);
              _.splice(_, 1), (0, _._)("Deleted clip", _);
            } else (0, _._)("Failed to delete clip", _);
            return _.GetEResult();
          }
          async ExportClip(_, _, _, _) {
            if (this.m_currentlyExportingClip)
              return (
                (0, _._)("Export in progress, cannot start another one", _),
                _.ConverterBusy
              );
            this.m_clipExportProgress.set(_, {
              exportPath: _,
              progress: 0,
              resultStatus: _._,
            }),
              (this.m_currentlyExportingClip = _);
            const _ = await _._.ExportClip({
                clip_id: _,
                export_mp4_path: _,
                settings: _,
                use_unique_filename: _,
              }),
              _ = _.GetEResult() != _._ ? _.Failed : _.Body().result();
            return (
              _ == _.Success
                ? ((0, _._)(`Exporting clip ${_} to ${_}`),
                  (this.m_currentlyExportingClip = null),
                  this.m_clipExportProgress.set(_, {
                    exportPath: _,
                    progress: 1,
                    resultStatus: _._,
                  }))
                : ((0, _._)("Failed to export clip", _),
                  this.m_clipExportProgress.set(_, {
                    exportPath: _,
                    progress: 0,
                    resultStatus: _._,
                  }),
                  (this.m_currentlyExportingClip = null)),
              _
            );
          }
          UpdateClipExportPath(_, _) {
            let _ = this.m_clipExportProgress.get(_);
            _ &&
              this.m_clipExportProgress.set(_, {
                ..._,
                exportPath: _,
              });
          }
          OnExportProgress(_) {
            const _ = _.Body().clip_id();
            if (
              !_ ||
              !this.m_clipExportProgress.has(_) ||
              this.m_currentlyExportingClip !== _
            )
              return _._;
            const _ = this.m_clipExportProgress.get(_);
            return (
              this.m_clipExportProgress.set(_, {
                ..._,
                progress: _.Body().progress(),
              }),
              _._
            );
          }
          GetClipExportProgress(_) {
            return this.m_clipExportProgress.get(_);
          }
          GetCurrentExportingClip() {
            return this.m_currentlyExportingClip;
          }
          async TakeScreenshot(_, _, _, _) {
            const _ = await _._.TakeScreenshot({
              game_id: _,
              timeline_id: _,
              timeline_offset_ms: Math.floor(_).toString(),
              source_clip_id: _,
            });
            if (_.GetEResult() == _._) {
              const _ = _.Body().toObject();
              return {
                handle: parseInt(_.Body().screenshot_id()),
                result: _._,
              };
            } else
              return (
                (0, _._)("Failed to take screenshot"),
                {
                  result: _.GetEResult(),
                }
              );
          }
          async LazyLoadClips() {
            if (!this.m_bClipLoadingTriggered)
              try {
                this.m_bClipLoadingTriggered = !0;
                const _ = await _._.GetClips({});
                (0, _._)(() => {
                  _.Body()
                    .clip()
                    .forEach((_) => this.InternalAddClipSummary(_.toObject())),
                    (this.m_bLoadingClips = !1);
                });
              } catch (_) {
                (0, _._)("Failed to load clips", _),
                  (this.m_bLoadingClips = !1);
              }
          }
          BLoadingClips() {
            return this.m_bLoadingClips;
          }
          BLoadingAppsWithBackgroundVideo() {
            return this.m_bLoadingAppsWithBackgroundVideo;
          }
          GetClipIDs(_) {
            var _;
            if ((this.LazyLoadClips(), _)) {
              const _ = new _._(_);
              return (
                ((_ = this.m_clipsGroupByGame.get(_.ConvertTo64BitString())) ==
                null
                  ? void 0
                  : _.map((_) => _.clip_id)) || []
              );
            }
            const _ = [];
            return this.m_clips.forEach((_) => _.push(_.clip_id)), _;
          }
          GetClipSummary(_) {
            if ((this.LazyLoadClips(), this.m_clips.has(_)))
              return this.m_clips.get(_);
          }
          GetClipSummaries(_) {
            return (
              this.LazyLoadClips(),
              _.map((_) => {
                if (this.m_clips.has(_)) return this.m_clips.get(_);
              }).filter(Boolean)
            );
          }
          GetClipSummariesForGame(_) {
            return (
              this.LazyLoadClips(),
              this.m_clipsGroupByGame.has(_)
                ? [...this.m_clipsGroupByGame.get(_)]
                : null
            );
          }
          RegisterManualRecordingCallback(_, _) {
            return (
              this.m_mapManualRecordingCallbacks.delete(_),
              this.m_mapManualRecordingCallbacks.set(_, _),
              () => {
                this.m_mapManualRecordingCallbacks.delete(_);
              }
            );
          }
          async StartRecording(_) {
            return (
              (0, _._)("Start manual recording"),
              _._.StartRecording({
                game_id: _,
              })
            );
          }
          async StopRecording(_) {
            (0, _._)("Stop manual recording");
            const _ = await _._.StopRecording({
              game_id: _,
            });
            if (_.BSuccess()) {
              const _ = _.Body().summary().toObject();
              this.InternalAddClipSummary(_);
            }
          }
          async SwitchRecordedGame(_) {
            return (
              (0, _._)("Switch recorded game: " + _),
              _._.SwitchBackgroundRecordingGame({
                game_id: _,
              })
            );
          }
          async CreateUserTimelineMarkers(_, _, _) {
            const _ = await _._.UserAddTimelineEntry({
              game_id: _,
              clip_id: _,
              entry: _,
            });
            return (
              _.GetEResult() == _._
                ? (0, _._)("User Marker Created: ", _)
                : (0, _._)(
                    `Failed to create User Marker at ${_.time} for game ${_} with error code ${_.GetEResult()}`,
                  ),
              {
                eResult: _.GetEResult(),
                entry_id: _.Body().entry_id(),
              }
            );
          }
          async UpdateUserTimelineMarkers(_, _, _) {
            const _ = await _._.UserUpdateTimelineEntry({
              game_id: _,
              clip_id: _,
              entry: _,
            });
            return (
              _.GetEResult() == _._
                ? (0, _._)("User Marker Updated: ", _)
                : (0, _._)(
                    `Failed to Update existing User Marker ${_.entry_id} at ${_.time} time under timeline ${_.timeline_id} for game ${_} with error code ${_.GetEResult()}`,
                  ),
              _.GetEResult()
            );
          }
          async RemoveUserTimelineMarker(_, _, _, _) {
            const _ = await _._.UserRemoveTimelineEntry({
              game_id: _,
              clip_id: _,
              entry_id: _,
              timeline_id: _,
            });
            return (
              _.GetEResult() == _._
                ? (0, _._)("User Marker remove at " + _)
                : (0, _._)(
                    `Failed to remove User Marker id ${_} for game ${_} on timeline ${_} with error code ${_.GetEResult()}`,
                  ),
              _.GetEResult()
            );
          }
          async LoadThumbnails(_, _, _, _, _, _) {
            return (
              await _._.GetThumbnails({
                recording_id: _,
                clip_id: _,
                timeline_id: _,
                start_offset_us: _.map((_) => Math.floor(_).toString()),
                major_axis: _,
                time_precision: _ ? _._._ : _._._,
              })
            )
              .Body()
              .thumbnails();
          }
          GetAchievementInfo(_, _) {
            var _;
            return (_ = this.m_fnGetAchievementInfo) == null
              ? void 0
              : _.call(this, _, _);
          }
          GetLastClip() {
            if (this.m_strLastClipID)
              return this.m_clips.get(this.m_strLastClipID);
          }
          GetBestClipTitle(_) {
            const _ = this.GetClipSummary(_);
            return _ ? _.name || (0, _._)(_.date_recorded) : "";
          }
          ManuallyDeleteRecordingForApps(_) {
            _._.ManuallyDeleteRecordingsForApps({
              game_ids: _,
            });
          }
          async GetTotalDiskSpaceUsage(_, _) {
            const _ = _ ? _._._ : _._._,
              _ = await _._.GetTotalDiskSpaceUsage({
                folder_path: _,
                type: _,
              });
            if (_.BSuccess()) {
              const _ = _.Body().size();
              return Number(_);
            }
            return 0;
          }
          async GetAvailableDiskSpace() {
            const _ = await _._.GetAvailableDiskSpace({});
            return _.BSuccess() ? _.Body().size() : 0;
          }
          ReportClipShare(_, _, _, _, _) {
            (0, _._)(
              `ReportClipShare ${JSON.stringify(_)} ${_} ${_} ${_} ${_}`,
            ),
              _._.ReportClipShare(this.m_transport, {
                gameid: _.ConvertTo64BitString(),
                share_method: _,
                seconds: _,
                bytes: _.toString(),
                eresult: _,
              });
          }
          ReportClipRange(_, _, _, _, _) {
            (0, _._)("ReportClipRange", JSON.stringify(_), _, _, _, _);
            const _ = _._.Init(_._);
            _.Body().set_gameid(_.ConvertTo64BitString()),
              _.Body().set_original_range_method(_),
              _.Body().set_seconds(_),
              _.Body().start().set_original_range_method(_.originalRangeMethod),
              _.Body().start().set_latest_range_method(_.latestRangeMethod),
              _.Body().start().set_delta_ms(Math.ceil(_.relativeMS)),
              _.Body().end().set_original_range_method(_.originalRangeMethod),
              _.Body().end().set_latest_range_method(_.latestRangeMethod),
              _.Body().end().set_delta_ms(Math.ceil(_.relativeMS)),
              _._.ReportClipRange(this.m_transport, _);
          }
          GetRecordingState() {
            return this.m_recordingState;
          }
          BEnoughDiskSpace() {
            return this.m_bEnoughDiskSpace;
          }
          OnLowDiskSpace(_) {
            return (this.m_bEnoughDiskSpace = !1), _._;
          }
          async CheckEnoughDiskSpace() {
            const _ = await _._.GetEnoughDiskSpace({});
            _.BSuccess()
              ? (this.m_bEnoughDiskSpace = _.Body().enough_space())
              : (0, _._)(
                  `Failed to get recording drive free space ${_.GetEResult()}`,
                );
          }
          async GetRecordingHighlights(_, _) {
            return (
              (
                await _._.GetAndTrimPostGameHighlights({
                  game_id: _,
                  created_after: _,
                })
              )
                .Body()
                .events() || []
            ).map((_) => _.toObject());
          }
        }
        _([_._.shallow], _.prototype, "m_rgAppsWithBackgroundVideo", 2),
          _([_._], _.prototype, "m_bLoadingClips", 2),
          _([_._], _.prototype, "m_bLoadingAppsWithBackgroundVideo", 2),
          _([_._], _.prototype, "m_clips", 2),
          _([_._], _.prototype, "m_clipsGroupByGame", 2),
          _([_._], _.prototype, "m_clipExportProgress", 2),
          _([_._], _.prototype, "m_currentlyExportingClip", 2),
          _([_._], _.prototype, "m_recordingState", 2),
          _([_._], _.prototype, "m_bEnoughDiskSpace", 2),
          _([_._], _.prototype, "OnStateChanged", 1),
          _([_._], _.prototype, "GetTimelineLoaderForGame", 1),
          _([_._], _.prototype, "GetTimelineLoaderForClip", 1),
          _([_._], _.prototype, "GetTimelineLoaderForSharedClip", 1),
          _([_._], _.prototype, "OnTimelineChanged", 1),
          _([_._], _.prototype, "OnRecordingSessionChanged", 1),
          _([_._], _.prototype, "OnTimelineEntryChanged", 1),
          _([_._], _.prototype, "OnTimelineEntryRemoved", 1),
          _([_._], _.prototype, "OnClipCreated", 1),
          _([_._], _.prototype, "UploadClip", 1),
          _([_._], _.prototype, "SaveClip", 1),
          _([_._], _.prototype, "DeleteClip", 1),
          _([_._], _.prototype, "ExportClip", 1),
          _([_._], _.prototype, "UpdateClipExportPath", 1),
          _([_._], _.prototype, "OnExportProgress", 1),
          _([_._], _.prototype, "TakeScreenshot", 1),
          _([_._], _.prototype, "RegisterManualRecordingCallback", 1),
          _([_._], _.prototype, "StartRecording", 1),
          _([_._], _.prototype, "StopRecording", 1),
          _([_._], _.prototype, "SwitchRecordedGame", 1),
          _([_._], _.prototype, "CreateUserTimelineMarkers", 1),
          _([_._], _.prototype, "UpdateUserTimelineMarkers", 1),
          _([_._], _.prototype, "RemoveUserTimelineMarker", 1),
          _([_._], _.prototype, "LoadThumbnails", 1),
          _([_._], _.prototype, "GetAchievementInfo", 1),
          _([_._], _.prototype, "OnLowDiskSpace", 1);
        const _ = _;
      },
    },
  ]);
})();
