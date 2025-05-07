"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [6209],
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
        _ = __webpack_require__("chunkid");
      const _ = "23B7-49AD-4A28-9590";
      class _ {
        constructor() {
          (this.m_rgAppsWithBackgroundVideo = []),
            (this.m_mapTimelineLoaders = new Map()),
            (this.m_mapClipLoaders = new Map()),
            (this.m_mapSharedClipLoaders = new Map()),
            (this.m_mapActiveTimelines = new Map()),
            (this.m_mapManualRecordingCallbacks = new Map()),
            (this.m_bLoadingClips = !0),
            (this.m_bLoadingAppsWithBackgroundVideo = !0),
            (this.m_bClipLoadingTriggered = !1),
            (this.m_clips = new Map()),
            (this.m_clipsGroupByGame = new Map()),
            (this.m_clipExportProgress = new Map()),
            (this.m_currentlyExportingClip = null),
            (this.m_recordingState = null),
            (this.m_bEnoughDiskSpace = !1),
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
              await this.LoadAppsWithBackgroundVideo(),
              await this.CheckEnoughDiskSpace());
        }
        GetAppsWithBackgroundVideo() {
          return this.m_rgAppsWithBackgroundVideo;
        }
        GetTimelineLoaderForGame(_) {
          (0, _._)(_, "Invalid GameID: " + _);
          let _ = this.m_mapTimelineLoaders.get(_);
          if (!_) {
            let _ = new _._();
            __webpack_require__.LoadTimelinesForBackgroundVideo(_),
              (_ = {
                loader: _,
                nRefCount: 0,
              }),
              this.m_mapTimelineLoaders.set(_, _);
          }
          _.nRefCount++,
            (0, _._)(
              `CGameRecordingStore::GetTimelineLoaderForGame incrementing refCount ${_.nRefCount} for ${_}` +
                (1 == _.nRefCount ? " and it was created" : ""),
            );
          return {
            loader: _.loader,
            release: () => {
              _.nRefCount--,
                (0, _._)(
                  `CGameRecordingStore::GetTimelineLoaderForGame reducing refCount ${_.nRefCount} for ${_}` +
                    (_.nRefCount <= 0 ? " will delete" : ""),
                ),
                _.nRefCount <= 0 && this.m_mapTimelineLoaders.delete(_);
            },
          };
        }
        GetTimelineLoaderForClip(_) {
          (0, _._)(_, "Invalid ClipID: " + _);
          let _ = this.m_mapClipLoaders.get(_);
          if (!_) {
            let _ = new _._();
            __webpack_require__.LoadTimelinesForClip(_),
              (_ = {
                loader: _,
                nRefCount: 0,
              }),
              this.m_mapClipLoaders.set(_, _);
          }
          _.nRefCount++;
          return {
            loader: _.loader,
            release: () => {
              _.nRefCount--,
                _.nRefCount <= 0 && this.m_mapTimelineLoaders.delete(_);
            },
          };
        }
        GetTimelineLoaderForSharedClip(_) {
          (0, _._)(_, "Invalid clip");
          let _ = this.m_mapSharedClipLoaders.get(_.clip_id);
          if (!_) {
            let _ = new _._();
            __webpack_require__.LoadTimelinesForSharedClip(_),
              (_ = {
                loader: _,
                nRefCount: 0,
              }),
              this.m_mapClipLoaders.set(_.clip_id, _);
          }
          _.nRefCount++;
          return {
            loader: _.loader,
            release: () => {
              _.nRefCount--,
                _.nRefCount <= 0 && this.m_mapTimelineLoaders.delete(_.clip_id);
            },
          };
        }
        OnTimelineChanged(_) {
          (0, _._)() && _.DEBUG_LogToConsole(),
            this.ReloadAppsWithBackgroundVideoIfNecessary(_);
          let _ = _.Body().notification_type(),
            _ = _.Body().timeline_id(),
            _ = _.Body().game_id();
          switch (_) {
            case 1:
            case 4: {
              let _ = this.GetTimelineLoaderForGame(_);
              this.m_mapActiveTimelines.set(_, _),
                _.loader.AddRunningTimeline(_, _, _.Body().start_time());
              break;
            }
            case 2: {
              let _ = this.m_mapActiveTimelines.get(_);
              _ &&
                (_.loader.RunningTimelineStopped(_, _.Body().duration_ms()),
                _.release());
              break;
            }
            case 3: {
              let _ = this.m_mapTimelineLoaders.get(_);
              _ && _.loader.TimelineDeleted(_);
              break;
            }
          }
          return 1;
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
            case 1:
              this.m_recordingState = {
                m_gameID: _,
              };
              break;
            case 2:
              this.m_recordingState = null;
          }
          let _ = this.m_mapTimelineLoaders.get(_);
          return _ ? (_.loader.RecordingSessionChanged(_), 1) : 1;
        }
        OnTimelineEntryChanged(_) {
          if (!_.Body().entry(!1))
            return (
              (0, _._)(
                !1,
                "OnTimelineEntryChanged received an invalid protobuf",
              ),
              1
            );
          const { entry: _ } = _.Body().toObject();
          if (!_)
            return (
              (0, _._)(
                !1,
                "OnTimelineEntryChanged received an invalid protobuf after conversion",
              ),
              1
            );
          const _ = this.m_mapActiveTimelines.get(_.timeline_id);
          if (_) {
            const _ = _.loader;
            if (_.BIsTimelineRunning(_.timeline_id))
              return _.AddRunningTimelineEntry(_), 1;
          }
          if (_.Body().game_id()) {
            let _ = this.m_mapTimelineLoaders.get(_.Body().game_id());
            if (_) {
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
                1
              );
            }
          }
          return 1;
        }
        OnTimelineEntryRemoved(_) {
          const {
            entry_id: _,
            timeline_id: __webpack_require__,
            game_id: _,
          } = _.Body().toObject();
          if (_) {
            const _ = this.m_mapTimelineLoaders.get(_);
            if (_) {
              _.loader.RemoveTimelineEvent(__webpack_require__, _);
            }
          }
          return 1;
        }
        OnClipCreated(_) {
          const _ = _.Body().summary().toObject();
          return (
            this.InternalAddClipSummary(_), (0, _._)("New clip saved:", _), 1
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
          if (1 == _.GetEResult()) {
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
            if (!_.BSuccess())
              return void (this.m_bLoadingAppsWithBackgroundVideo = !1);
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
          let _ = _.Body().game_id();
          (function (_, _) {
            switch (_) {
              case 1:
                return !_;
              case 3:
                return _;
              default:
                return !0;
            }
          })(
            _.Body().notification_type(),
            this.m_rgAppsWithBackgroundVideo.findIndex((_) => _.game_id == _) >=
              0,
          ) && this.LoadAppsWithBackgroundVideo();
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
          if (1 == _.GetEResult()) {
            const _ = _.Body().summary().toObject();
            return (
              this.InternalAddClipSummary(_),
              (0, _._)("Saved clip", _),
              (this.m_strLastClipID = _.clip_id),
              {
                clipSummary: _,
                result: 1,
              }
            );
          }
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
          if (1 == _.GetEResult()) {
            const _ = this.m_clips.get(_);
            this.m_clips.delete(_);
            let _ = this.m_clipsGroupByGame.get(_.game_id),
              _ = __webpack_require__.findIndex((_) => _.clip_id == _);
            __webpack_require__.splice(_, 1), (0, _._)("Deleted clip", _);
          } else (0, _._)("Failed to delete clip", _);
          return _.GetEResult();
        }
        async ExportClip(_, _, _, _) {
          if (this.m_currentlyExportingClip)
            return (
              (0, _._)("Export in progress, cannot start another one", _), 10
            );
          this.m_clipExportProgress.set(_, {
            exportPath: _,
            progress: 0,
            resultStatus: 22,
          }),
            (this.m_currentlyExportingClip = _);
          const _ = await _._.ExportClip({
            clip_id: _,
            export_mp4_path: _,
            settings: _,
            use_unique_filename: _,
          });
          return (
            1 === _.GetEResult()
              ? ((0, _._)(`Exporting clip ${_} to ${_}`),
                (this.m_currentlyExportingClip = null),
                this.m_clipExportProgress.set(_, {
                  exportPath: _,
                  progress: 1,
                  resultStatus: 1,
                }))
              : (this.m_clipExportProgress.set(_, {
                  exportPath: _,
                  progress: 0,
                  resultStatus: _.GetEResult(),
                }),
                (this.m_currentlyExportingClip = null),
                (0, _._)("Failed to export clip", _)),
            _.GetEResult()
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
            _ &&
            this.m_clipExportProgress.has(_) &&
            this.m_currentlyExportingClip === _
          ) {
            const _ = this.m_clipExportProgress.get(_),
              _ = _.Body().eresult();
            return !_ && _.Body().progress() < 1
              ? (this.m_clipExportProgress.set(_, {
                  ..._,
                  progress: _.Body().progress(),
                }),
                1)
              : 1 === _.Body().progress() && 1 === _
                ? ((this.m_currentlyExportingClip = null),
                  this.m_clipExportProgress.set(_, {
                    ..._,
                    progress: _.Body().progress(),
                    resultStatus: 1,
                  }),
                  _)
                : ((this.m_currentlyExportingClip = null),
                  this.m_clipExportProgress.set(_, {
                    ..._,
                    progress: 0,
                    resultStatus: _.GetEResult(),
                  }),
                  _);
          }
          return 8;
        }
        GetClipExportProgress(_) {
          return this.m_clipExportProgress.get(_);
        }
        GetCurrentExportingClip() {
          return this.m_currentlyExportingClip;
        }
        async TakeScreenshot(_, _, _) {
          const _ = await _._.TakeScreenshot({
            game_id: _,
            timeline_id: _,
            timeline_offset_ms: Math.floor(_).toString(),
          });
          if (1 == _.GetEResult()) {
            _.Body().toObject();
            return {
              handle: parseInt(_.Body().screenshot_id()),
              result: 1,
            };
          }
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
              (0, _._)("Failed to load clips", _), (this.m_bLoadingClips = !1);
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
              (null ===
                (_ = this.m_clipsGroupByGame.get(
                  __webpack_require__.ConvertTo64BitString(),
                )) || void 0 === _
                ? void 0
                : _.map((_) => _.clip_id)) || []
            );
          }
          const _ = [];
          return (
            this.m_clips.forEach((_) => __webpack_require__.push(_.clip_id)), _
          );
        }
        GetClipSummary(_) {
          return (
            this.LazyLoadClips(),
            this.m_clips.has(_) ? this.m_clips.get(_) : void 0
          );
        }
        GetClipSummaries(_) {
          return (
            this.LazyLoadClips(),
            _.map((_) =>
              this.m_clips.has(_) ? this.m_clips.get(_) : void 0,
            ).filter(Boolean)
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
          this.m_mapManualRecordingCallbacks.delete(_),
            this.m_mapManualRecordingCallbacks.set(_, _);
          return () => {
            this.m_mapManualRecordingCallbacks.delete(_);
          };
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
            1 == _.GetEResult()
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
            1 == _.GetEResult()
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
            1 == _.GetEResult()
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
              time_precision: _ ? 0 : 1,
            })
          )
            .Body()
            .thumbnails();
        }
        GetAchievementInfo(_, _) {
          var _;
          return null === (_ = this.m_fnGetAchievementInfo) || void 0 === _
            ? void 0
            : __webpack_require__.call(this, _, _);
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
          const _ = _ ? 0 : 1,
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
          (0, _._)(`ReportClipShare ${JSON.stringify(_)} ${_} ${_} ${_} ${_}`),
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
          return (this.m_bEnoughDiskSpace = !1), 1;
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
      (0, _._)(
        [_._.shallow],
        _.prototype,
        "m_rgAppsWithBackgroundVideo",
        void 0,
      ),
        (0, _._)([_._], _.prototype, "m_bLoadingClips", void 0),
        (0, _._)(
          [_._],
          _.prototype,
          "m_bLoadingAppsWithBackgroundVideo",
          void 0,
        ),
        (0, _._)([_._], _.prototype, "m_clips", void 0),
        (0, _._)([_._], _.prototype, "m_clipsGroupByGame", void 0),
        (0, _._)([_._], _.prototype, "m_clipExportProgress", void 0),
        (0, _._)([_._], _.prototype, "m_currentlyExportingClip", void 0),
        (0, _._)([_._], _.prototype, "m_recordingState", void 0),
        (0, _._)([_._], _.prototype, "m_bEnoughDiskSpace", void 0),
        (0, _._)([_._], _.prototype, "GetTimelineLoaderForGame", null),
        (0, _._)([_._], _.prototype, "GetTimelineLoaderForClip", null),
        (0, _._)([_._], _.prototype, "GetTimelineLoaderForSharedClip", null),
        (0, _._)([_._], _.prototype, "OnTimelineChanged", null),
        (0, _._)([_._], _.prototype, "OnRecordingSessionChanged", null),
        (0, _._)([_._], _.prototype, "OnTimelineEntryChanged", null),
        (0, _._)([_._], _.prototype, "OnTimelineEntryRemoved", null),
        (0, _._)([_._], _.prototype, "OnClipCreated", null),
        (0, _._)([_._], _.prototype, "UploadClip", null),
        (0, _._)([_._], _.prototype, "SaveClip", null),
        (0, _._)([_._], _.prototype, "DeleteClip", null),
        (0, _._)([_._], _.prototype, "ExportClip", null),
        (0, _._)([_._], _.prototype, "UpdateClipExportPath", null),
        (0, _._)([_._], _.prototype, "OnExportProgress", null),
        (0, _._)([_._], _.prototype, "TakeScreenshot", null),
        (0, _._)([_._], _.prototype, "RegisterManualRecordingCallback", null),
        (0, _._)([_._], _.prototype, "StartRecording", null),
        (0, _._)([_._], _.prototype, "StopRecording", null),
        (0, _._)([_._], _.prototype, "SwitchRecordedGame", null),
        (0, _._)([_._], _.prototype, "CreateUserTimelineMarkers", null),
        (0, _._)([_._], _.prototype, "UpdateUserTimelineMarkers", null),
        (0, _._)([_._], _.prototype, "RemoveUserTimelineMarker", null),
        (0, _._)([_._], _.prototype, "LoadThumbnails", null),
        (0, _._)([_._], _.prototype, "GetAchievementInfo", null),
        (0, _._)([_._], _.prototype, "OnLowDiskSpace", null);
      const _ = _;
    },
  },
]);
