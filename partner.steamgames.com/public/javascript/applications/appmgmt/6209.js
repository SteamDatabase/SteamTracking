/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6209],
  {
    76209: (e, t, i) => {
      i.r(t),
        i.d(t, {
          CGameRecordingStore: () => y,
          default: () => C,
          k_strGRFAQ: () => h,
        });
      var r = i(34629),
        o = i(14947),
        n = i(73745),
        s = i(56545),
        a = i(37085),
        l = i(53184),
        d = i(59134),
        p = i(39393),
        m = i(86318),
        c = i(29210),
        g = i(81393),
        _ = i(30470),
        u = i(61859);
      const h = "23B7-49AD-4A28-9590";
      class y {
        constructor() {
          (0, o.Gn)(this);
        }
        m_rgAppsWithBackgroundVideo = [];
        m_mapTimelineLoaders = new Map();
        m_mapClipLoaders = new Map();
        m_mapSharedClipLoaders = new Map();
        m_mapActiveTimelines = new Map();
        m_mapManualRecordingCallbacks = new Map();
        m_fnGetAchievementInfo;
        m_strLastClipID;
        m_transport;
        m_bLoadingClips = !0;
        m_bLoadingAppsWithBackgroundVideo = !0;
        m_bClipLoadingTriggered = !1;
        m_clips = new Map();
        m_clipsGroupByGame = new Map();
        m_clipExportProgress = new Map();
        m_currentlyExportingClip = null;
        m_recordingState = null;
        m_bEnoughDiskSpace = !1;
        async Init(e, t) {
          (this.m_transport = e),
            (this.m_fnGetAchievementInfo = t),
            _.TS.IN_STEAMUI &&
              (l.xM.RegisterForNotifyTimelineChanged(this.OnTimelineChanged),
              l.xM.RegisterForNotifyRecordingSessionChanged(
                this.OnRecordingSessionChanged,
              ),
              l.xM.RegisterForNotifyTimelineEntryChanged(
                this.OnTimelineEntryChanged,
              ),
              l.xM.RegisterForNotifyTimelineEntryRemoved(
                this.OnTimelineEntryRemoved,
              ),
              l.xM.RegisterForNotifyClipCreated(this.OnClipCreated),
              l.xM.RegisterForNotifyExportProgress(this.OnExportProgress),
              l.xM.RegisterForNotifyLowDiskSpace(this.OnLowDiskSpace),
              await this.LoadAppsWithBackgroundVideo(),
              await this.CheckEnoughDiskSpace());
        }
        GetAppsWithBackgroundVideo() {
          return this.m_rgAppsWithBackgroundVideo;
        }
        GetTimelineLoaderForGame(e) {
          (0, g.wT)(e, "Invalid GameID: " + e);
          let t = this.m_mapTimelineLoaders.get(e);
          if (!t) {
            let i = new p.SX();
            i.LoadTimelinesForBackgroundVideo(e),
              (t = { loader: i, nRefCount: 0 }),
              this.m_mapTimelineLoaders.set(e, t);
          }
          t.nRefCount++,
            (0, m.tG)(
              `CGameRecordingStore::GetTimelineLoaderForGame incrementing refCount ${t.nRefCount} for ${e}` +
                (1 == t.nRefCount ? " and it was created" : ""),
            );
          return {
            loader: t.loader,
            release: () => {
              t.nRefCount--,
                (0, m.tG)(
                  `CGameRecordingStore::GetTimelineLoaderForGame reducing refCount ${t.nRefCount} for ${e}` +
                    (t.nRefCount <= 0 ? " will delete" : ""),
                ),
                t.nRefCount <= 0 && this.m_mapTimelineLoaders.delete(e);
            },
          };
        }
        GetTimelineLoaderForClip(e) {
          (0, g.wT)(e, "Invalid ClipID: " + e);
          let t = this.m_mapClipLoaders.get(e);
          if (!t) {
            let i = new p.SX();
            i.LoadTimelinesForClip(e),
              (t = { loader: i, nRefCount: 0 }),
              this.m_mapClipLoaders.set(e, t);
          }
          t.nRefCount++;
          return {
            loader: t.loader,
            release: () => {
              t.nRefCount--,
                t.nRefCount <= 0 && this.m_mapTimelineLoaders.delete(e);
            },
          };
        }
        GetTimelineLoaderForSharedClip(e) {
          (0, g.wT)(e, "Invalid clip");
          let t = this.m_mapSharedClipLoaders.get(e.clip_id);
          if (!t) {
            let i = new p.SX();
            i.LoadTimelinesForSharedClip(e),
              (t = { loader: i, nRefCount: 0 }),
              this.m_mapClipLoaders.set(e.clip_id, t);
          }
          t.nRefCount++;
          return {
            loader: t.loader,
            release: () => {
              t.nRefCount--,
                t.nRefCount <= 0 && this.m_mapTimelineLoaders.delete(e.clip_id);
            },
          };
        }
        OnTimelineChanged(e) {
          (0, m.xv)() && e.DEBUG_LogToConsole(),
            this.ReloadAppsWithBackgroundVideoIfNecessary(e);
          let t = e.Body().notification_type(),
            i = e.Body().timeline_id(),
            r = e.Body().game_id();
          switch (t) {
            case l.QX.k_ETimelineChangeNotificationType_Started:
            case l.QX.k_ETimelineChangeNotificationType_RecordingStarted: {
              let t = this.GetTimelineLoaderForGame(r);
              this.m_mapActiveTimelines.set(i, t),
                t.loader.AddRunningTimeline(i, r, e.Body().start_time());
              break;
            }
            case l.QX.k_ETimelineChangeNotificationType_Stopped: {
              let t = this.m_mapActiveTimelines.get(i);
              t &&
                (t.loader.RunningTimelineStopped(i, e.Body().duration_ms()),
                t.release());
              break;
            }
            case l.QX.k_ETimelineChangeNotificationType_Deleted: {
              let e = this.m_mapTimelineLoaders.get(r);
              e && e.loader.TimelineDeleted(i);
              break;
            }
          }
          return a.d.k_EResultOK;
        }
        OnRecordingSessionChanged(e) {
          const t = e.Body().toObject(),
            i = t.game_id,
            r = t.notification_type;
          switch (
            (this.m_mapManualRecordingCallbacks.has(i) &&
              this.m_mapManualRecordingCallbacks.get(i)(t),
            r)
          ) {
            case l.E6.k_ERecordingSessionChangeNotificationType_Started:
              this.m_recordingState = { m_gameID: i };
              break;
            case l.E6.k_ERecordingSessionChangeNotificationType_Stopped:
              this.m_recordingState = null;
          }
          let o = this.m_mapTimelineLoaders.get(i);
          return o
            ? (o.loader.RecordingSessionChanged(t), a.d.k_EResultOK)
            : a.d.k_EResultOK;
        }
        OnTimelineEntryChanged(e) {
          if (!e.Body().entry(!1))
            return (
              (0, g.wT)(
                !1,
                "OnTimelineEntryChanged received an invalid protobuf",
              ),
              a.d.k_EResultOK
            );
          const { entry: t } = e.Body().toObject();
          if (!t)
            return (
              (0, g.wT)(
                !1,
                "OnTimelineEntryChanged received an invalid protobuf after conversion",
              ),
              a.d.k_EResultOK
            );
          const i = this.m_mapActiveTimelines.get(t.timeline_id);
          if (i) {
            const e = i.loader;
            if (e.BIsTimelineRunning(t.timeline_id))
              return e.AddRunningTimelineEntry(t), a.d.k_EResultOK;
          }
          if (e.Body().game_id()) {
            let i = this.m_mapTimelineLoaders.get(e.Body().game_id());
            if (i) {
              return (
                i.loader.AddEventToTimeline(
                  t.timeline_id,
                  parseInt(t.time),
                  t.marker_icon,
                  t.entry_id,
                  t.marker_priority,
                  t.range_title,
                  t.marker_description,
                  parseInt(t.range_duration),
                ),
                a.d.k_EResultOK
              );
            }
          }
          return a.d.k_EResultOK;
        }
        OnTimelineEntryRemoved(e) {
          const {
            entry_id: t,
            timeline_id: i,
            game_id: r,
          } = e.Body().toObject();
          if (r) {
            const e = this.m_mapTimelineLoaders.get(r);
            if (e) {
              e.loader.RemoveTimelineEvent(i, t);
            }
          }
          return a.d.k_EResultOK;
        }
        OnClipCreated(e) {
          const t = e.Body().summary().toObject();
          return (
            this.InternalAddClipSummary(t),
            (0, m.tG)("New clip saved:", t),
            a.d.k_EResultOK
          );
        }
        async UploadClip(e, t, i, r) {
          const o = await l.xM.UploadClipToSteam({
            clip_id: e,
            title: t,
            desc: i,
            visibility: r,
          });
          let n;
          if (o.GetEResult() == a.d.k_EResultOK) {
            const e = o.Body().summary().toObject();
            this.InternalAddClipSummary(e),
              (n = `${_.TS.COMMUNITY_BASE_URL}sharedfiles/filedetails/?id=${e.published_file_id}`);
          }
          return { eResult: o.GetEResult(), strURL: n };
        }
        async LoadAppsWithBackgroundVideo() {
          try {
            const e = await l.xM.GetAppsWithBackgroundVideo({});
            if (!e.BSuccess())
              return void (this.m_bLoadingAppsWithBackgroundVideo = !1);
            (0, m.q_)(`Loaded ${e.Body().apps().length} apps with timelines`),
              (0, o.h5)(() => {
                (this.m_bLoadingAppsWithBackgroundVideo = !1),
                  (this.m_rgAppsWithBackgroundVideo = e
                    .Body()
                    .toObject()
                    .apps.sort(
                      (e, t) =>
                        t.most_recent_start_time - e.most_recent_start_time,
                    ));
              });
          } catch (e) {
            (0, m.ZI)("Failed to load apps with timelines", e),
              (this.m_bLoadingAppsWithBackgroundVideo = !1);
          }
        }
        ReloadAppsWithBackgroundVideoIfNecessary(e) {
          if (!this.m_rgAppsWithBackgroundVideo) return;
          let t = e.Body().game_id();
          (function (e, t) {
            switch (e) {
              case l.QX.k_ETimelineChangeNotificationType_Started:
                return !t;
              case l.QX.k_ETimelineChangeNotificationType_Deleted:
                return t;
              case l.QX.k_ETimelineChangeNotificationType_Stopped:
              case l.QX.k_ETimelineChangeNotificationType_RecordingStarted:
              case l.QX.k_ETimelineChangeNotificationType_RecordingStopped:
              case l.QX.k_ETimelineChangeNotificationType_RecordingUpdated:
              default:
                return !0;
            }
          })(
            e.Body().notification_type(),
            this.m_rgAppsWithBackgroundVideo.findIndex((e) => e.game_id == t) >=
              0,
          ) && this.LoadAppsWithBackgroundVideo();
        }
        InternalAddClipSummary(e) {
          if (
            this.m_clips.has(e.clip_id) &&
            this.m_clipsGroupByGame.has(e.game_id)
          ) {
            const t = this.m_clipsGroupByGame.get(e.game_id);
            this.m_clipsGroupByGame.set(
              e.game_id,
              t.filter((t) => t.clip_id != e.clip_id),
            );
          }
          this.m_clips.set(e.clip_id, e),
            this.m_clipsGroupByGame.has(e.game_id) ||
              this.m_clipsGroupByGame.set(e.game_id, []),
            this.m_clipsGroupByGame.get(e.game_id).push(e);
        }
        async SaveClip(e, t, i, r, o, n, s) {
          const d = await l.xM.SaveClip({
            game_id: e,
            start: r,
            end: o,
            name: i,
            src_clip_id: t,
            temporary: n,
            force_thumbnail: s,
          });
          if (d.GetEResult() == a.d.k_EResultOK) {
            const e = d.Body().summary().toObject();
            return (
              this.InternalAddClipSummary(e),
              (0, m.tG)("Saved clip", e),
              (this.m_strLastClipID = e.clip_id),
              { clipSummary: e, result: a.d.k_EResultOK }
            );
          }
          return (0, m.tH)("Failed to save clip"), { result: d.GetEResult() };
        }
        async DeleteClip(e) {
          const t = await l.xM.DeleteClip({ clip_id: e });
          if (t.GetEResult() == a.d.k_EResultOK) {
            const t = this.m_clips.get(e);
            this.m_clips.delete(e);
            let i = this.m_clipsGroupByGame.get(t.game_id),
              r = i.findIndex((t) => t.clip_id == e);
            i.splice(r, 1), (0, m.tG)("Deleted clip", e);
          } else (0, m.tH)("Failed to delete clip", e);
          return t.GetEResult();
        }
        async ExportClip(e, t, i, r) {
          if (this.m_currentlyExportingClip)
            return (
              (0, m.tH)("Export in progress, cannot start another one", e),
              a.d.k_EResultBusy
            );
          this.m_clipExportProgress.set(e, {
            exportPath: t,
            progress: 0,
            resultStatus: a.d.k_EResultPending,
          }),
            (this.m_currentlyExportingClip = e);
          const o = await l.xM.ExportClip({
            clip_id: e,
            export_mp4_path: t,
            settings: i,
            use_unique_filename: r,
          });
          return (
            o.GetEResult() === a.d.k_EResultOK
              ? ((0, m.tG)(`Exporting clip ${e} to ${t}`),
                (this.m_currentlyExportingClip = null),
                this.m_clipExportProgress.set(e, {
                  exportPath: t,
                  progress: 1,
                  resultStatus: a.d.k_EResultOK,
                }))
              : (this.m_clipExportProgress.set(e, {
                  exportPath: t,
                  progress: 0,
                  resultStatus: o.GetEResult(),
                }),
                (this.m_currentlyExportingClip = null),
                (0, m.tH)("Failed to export clip", e)),
            o.GetEResult()
          );
        }
        UpdateClipExportPath(e, t) {
          let i = this.m_clipExportProgress.get(e);
          i && this.m_clipExportProgress.set(e, { ...i, exportPath: t });
        }
        OnExportProgress(e) {
          const t = e.Body().clip_id();
          if (
            t &&
            this.m_clipExportProgress.has(t) &&
            this.m_currentlyExportingClip === t
          ) {
            const i = this.m_clipExportProgress.get(t),
              r = e.Body().eresult();
            return !r && e.Body().progress() < 1
              ? (this.m_clipExportProgress.set(t, {
                  ...i,
                  progress: e.Body().progress(),
                }),
                a.d.k_EResultOK)
              : 1 === e.Body().progress() && r === a.d.k_EResultOK
                ? ((this.m_currentlyExportingClip = null),
                  this.m_clipExportProgress.set(t, {
                    ...i,
                    progress: e.Body().progress(),
                    resultStatus: a.d.k_EResultOK,
                  }),
                  r)
                : ((this.m_currentlyExportingClip = null),
                  this.m_clipExportProgress.set(t, {
                    ...i,
                    progress: 0,
                    resultStatus: e.GetEResult(),
                  }),
                  r);
          }
          return a.d.k_EResultInvalidParam;
        }
        GetClipExportProgress(e) {
          return this.m_clipExportProgress.get(e);
        }
        GetCurrentExportingClip() {
          return this.m_currentlyExportingClip;
        }
        async TakeScreenshot(e, t, i) {
          const r = await l.xM.TakeScreenshot({
            game_id: e,
            timeline_id: t,
            timeline_offset_ms: Math.floor(i).toString(),
          });
          if (r.GetEResult() == a.d.k_EResultOK) {
            r.Body().toObject();
            return {
              handle: parseInt(r.Body().screenshot_id()),
              result: a.d.k_EResultOK,
            };
          }
          return (
            (0, m.tH)("Failed to take screenshot"), { result: r.GetEResult() }
          );
        }
        async LazyLoadClips() {
          if (!this.m_bClipLoadingTriggered)
            try {
              this.m_bClipLoadingTriggered = !0;
              const e = await l.xM.GetClips({});
              (0, o.h5)(() => {
                e
                  .Body()
                  .clip()
                  .forEach((e) => this.InternalAddClipSummary(e.toObject())),
                  (this.m_bLoadingClips = !1);
              });
            } catch (e) {
              (0, m.ZI)("Failed to load clips", e), (this.m_bLoadingClips = !1);
            }
        }
        BLoadingClips() {
          return this.m_bLoadingClips;
        }
        BLoadingAppsWithBackgroundVideo() {
          return this.m_bLoadingAppsWithBackgroundVideo;
        }
        GetClipIDs(e) {
          if ((this.LazyLoadClips(), e)) {
            const t = new c.VS(e);
            return (
              this.m_clipsGroupByGame
                .get(t.ConvertTo64BitString())
                ?.map((e) => e.clip_id) || []
            );
          }
          const t = [];
          return this.m_clips.forEach((e) => t.push(e.clip_id)), t;
        }
        GetClipSummary(e) {
          return (
            this.LazyLoadClips(),
            this.m_clips.has(e) ? this.m_clips.get(e) : void 0
          );
        }
        GetClipSummaries(e) {
          return (
            this.LazyLoadClips(),
            e
              .map((e) => (this.m_clips.has(e) ? this.m_clips.get(e) : void 0))
              .filter(Boolean)
          );
        }
        GetClipSummariesForGame(e) {
          return (
            this.LazyLoadClips(),
            this.m_clipsGroupByGame.has(e)
              ? [...this.m_clipsGroupByGame.get(e)]
              : null
          );
        }
        RegisterManualRecordingCallback(e, t) {
          this.m_mapManualRecordingCallbacks.delete(e),
            this.m_mapManualRecordingCallbacks.set(e, t);
          return () => {
            this.m_mapManualRecordingCallbacks.delete(e);
          };
        }
        async StartRecording(e) {
          return (
            (0, m.q_)("Start manual recording"),
            l.xM.StartRecording({ game_id: e })
          );
        }
        async StopRecording(e) {
          (0, m.q_)("Stop manual recording");
          const t = await l.xM.StopRecording({ game_id: e });
          if (t.BSuccess()) {
            const e = t.Body().summary().toObject();
            this.InternalAddClipSummary(e);
          }
        }
        async SwitchRecordedGame(e) {
          return (
            (0, m.q_)("Switch recorded game: " + e),
            l.xM.SwitchBackgroundRecordingGame({ game_id: e })
          );
        }
        async CreateUserTimelineMarkers(e, t, i) {
          const r = await l.xM.UserAddTimelineEntry({
            game_id: e,
            clip_id: t,
            entry: i,
          });
          return (
            r.GetEResult() == a.d.k_EResultOK
              ? (0, m.tG)("User Marker Created: ", i)
              : (0, m.tH)(
                  `Failed to create User Marker at ${i.time} for game ${e} with error code ${r.GetEResult()}`,
                ),
            { eResult: r.GetEResult(), entry_id: r.Body().entry_id() }
          );
        }
        async UpdateUserTimelineMarkers(e, t, i) {
          const r = await l.xM.UserUpdateTimelineEntry({
            game_id: e,
            clip_id: t,
            entry: i,
          });
          return (
            r.GetEResult() == a.d.k_EResultOK
              ? (0, m.tG)("User Marker Updated: ", i)
              : (0, m.tH)(
                  `Failed to Update existing User Marker ${i.entry_id} at ${i.time} time under timeline ${i.timeline_id} for game ${e} with error code ${r.GetEResult()}`,
                ),
            r.GetEResult()
          );
        }
        async RemoveUserTimelineMarker(e, t, i, r) {
          const o = await l.xM.UserRemoveTimelineEntry({
            game_id: e,
            clip_id: t,
            entry_id: r,
            timeline_id: i,
          });
          return (
            o.GetEResult() == a.d.k_EResultOK
              ? (0, m.tG)("User Marker remove at " + r)
              : (0, m.tH)(
                  `Failed to remove User Marker id ${r} for game ${e} on timeline ${i} with error code ${o.GetEResult()}`,
                ),
            o.GetEResult()
          );
        }
        async LoadThumbnails(e, t, i, r, o, n) {
          return (
            await l.xM.GetThumbnails({
              recording_id: e,
              clip_id: t,
              timeline_id: i,
              start_offset_us: r.map((e) => Math.floor(e).toString()),
              major_axis: o,
              time_precision: n ? l.$C.k_ePrecise : l.$C.k_eLoose,
            })
          )
            .Body()
            .thumbnails();
        }
        GetAchievementInfo(e, t) {
          return this.m_fnGetAchievementInfo?.(e, t);
        }
        GetLastClip() {
          if (this.m_strLastClipID)
            return this.m_clips.get(this.m_strLastClipID);
        }
        GetBestClipTitle(e) {
          const t = this.GetClipSummary(e);
          return t ? t.name || (0, u.$z)(t.date_recorded) : "";
        }
        ManuallyDeleteRecordingForApps(e) {
          l.xM.ManuallyDeleteRecordingsForApps({ game_ids: e });
        }
        async GetTotalDiskSpaceUsage(e, t) {
          const i = t
              ? l.Hv.k_eDiskSpaceType_Recording
              : l.Hv.k_eDiskSpaceType_Clip,
            r = await l.xM.GetTotalDiskSpaceUsage({ folder_path: e, type: i });
          if (r.BSuccess()) {
            const e = r.Body().size();
            return Number(e);
          }
          return 0;
        }
        async GetAvailableDiskSpace() {
          const e = await l.xM.GetAvailableDiskSpace({});
          return e.BSuccess() ? e.Body().size() : 0;
        }
        ReportClipShare(e, t, i, r, o) {
          (0, m.q_)(`ReportClipShare ${JSON.stringify(e)} ${t} ${i} ${r} ${o}`),
            d._5.ReportClipShare(this.m_transport, {
              gameid: e.ConvertTo64BitString(),
              share_method: t,
              seconds: i,
              bytes: r.toString(),
              eresult: o,
            });
        }
        ReportClipRange(e, t, i, r, o) {
          (0, m.q_)("ReportClipRange", JSON.stringify(e), t, i, r, o);
          const n = s.w.Init(d.IR);
          n.Body().set_gameid(e.ConvertTo64BitString()),
            n.Body().set_original_range_method(t),
            n.Body().set_seconds(i),
            n.Body().start().set_original_range_method(r.originalRangeMethod),
            n.Body().start().set_latest_range_method(r.latestRangeMethod),
            n.Body().start().set_delta_ms(Math.ceil(r.relativeMS)),
            n.Body().end().set_original_range_method(o.originalRangeMethod),
            n.Body().end().set_latest_range_method(o.latestRangeMethod),
            n.Body().end().set_delta_ms(Math.ceil(o.relativeMS)),
            d._5.ReportClipRange(this.m_transport, n);
        }
        GetRecordingState() {
          return this.m_recordingState;
        }
        BEnoughDiskSpace() {
          return this.m_bEnoughDiskSpace;
        }
        OnLowDiskSpace(e) {
          return (this.m_bEnoughDiskSpace = !1), a.d.k_EResultOK;
        }
        async CheckEnoughDiskSpace() {
          const e = await l.xM.GetEnoughDiskSpace({});
          e.BSuccess()
            ? (this.m_bEnoughDiskSpace = e.Body().enough_space())
            : (0, m.tH)(
                `Failed to get recording drive free space ${e.GetEResult()}`,
              );
        }
        async GetRecordingHighlights(e, t) {
          return (
            (
              await l.xM.GetAndTrimPostGameHighlights({
                game_id: e,
                created_after: t,
              })
            )
              .Body()
              .events() || []
          ).map((e) => e.toObject());
        }
      }
      (0, r.Cg)(
        [o.sH.shallow],
        y.prototype,
        "m_rgAppsWithBackgroundVideo",
        void 0,
      ),
        (0, r.Cg)([o.sH], y.prototype, "m_bLoadingClips", void 0),
        (0, r.Cg)(
          [o.sH],
          y.prototype,
          "m_bLoadingAppsWithBackgroundVideo",
          void 0,
        ),
        (0, r.Cg)([o.sH], y.prototype, "m_clips", void 0),
        (0, r.Cg)([o.sH], y.prototype, "m_clipsGroupByGame", void 0),
        (0, r.Cg)([o.sH], y.prototype, "m_clipExportProgress", void 0),
        (0, r.Cg)([o.sH], y.prototype, "m_currentlyExportingClip", void 0),
        (0, r.Cg)([o.sH], y.prototype, "m_recordingState", void 0),
        (0, r.Cg)([o.sH], y.prototype, "m_bEnoughDiskSpace", void 0),
        (0, r.Cg)([n.oI], y.prototype, "GetTimelineLoaderForGame", null),
        (0, r.Cg)([n.oI], y.prototype, "GetTimelineLoaderForClip", null),
        (0, r.Cg)([n.oI], y.prototype, "GetTimelineLoaderForSharedClip", null),
        (0, r.Cg)([n.oI], y.prototype, "OnTimelineChanged", null),
        (0, r.Cg)([n.oI], y.prototype, "OnRecordingSessionChanged", null),
        (0, r.Cg)([n.oI], y.prototype, "OnTimelineEntryChanged", null),
        (0, r.Cg)([n.oI], y.prototype, "OnTimelineEntryRemoved", null),
        (0, r.Cg)([n.oI], y.prototype, "OnClipCreated", null),
        (0, r.Cg)([n.oI], y.prototype, "UploadClip", null),
        (0, r.Cg)([n.oI], y.prototype, "SaveClip", null),
        (0, r.Cg)([n.oI], y.prototype, "DeleteClip", null),
        (0, r.Cg)([n.oI], y.prototype, "ExportClip", null),
        (0, r.Cg)([n.oI], y.prototype, "UpdateClipExportPath", null),
        (0, r.Cg)([n.oI], y.prototype, "OnExportProgress", null),
        (0, r.Cg)([n.oI], y.prototype, "TakeScreenshot", null),
        (0, r.Cg)([n.oI], y.prototype, "RegisterManualRecordingCallback", null),
        (0, r.Cg)([n.oI], y.prototype, "StartRecording", null),
        (0, r.Cg)([n.oI], y.prototype, "StopRecording", null),
        (0, r.Cg)([n.oI], y.prototype, "SwitchRecordedGame", null),
        (0, r.Cg)([n.oI], y.prototype, "CreateUserTimelineMarkers", null),
        (0, r.Cg)([n.oI], y.prototype, "UpdateUserTimelineMarkers", null),
        (0, r.Cg)([n.oI], y.prototype, "RemoveUserTimelineMarker", null),
        (0, r.Cg)([n.oI], y.prototype, "LoadThumbnails", null),
        (0, r.Cg)([n.oI], y.prototype, "GetAchievementInfo", null),
        (0, r.Cg)([n.oI], y.prototype, "OnLowDiskSpace", null);
      const C = y;
    },
  },
]);
