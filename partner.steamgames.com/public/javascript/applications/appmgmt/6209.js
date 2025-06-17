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
          CGameRecordingStore: () => h,
          default: () => y,
          k_strGRFAQ: () => _,
        });
      var r = i(34629),
        o = i(14947),
        s = i(73745),
        n = i(56545),
        a = i(53184),
        l = i(59134),
        p = i(39393),
        d = i(86318),
        m = i(29210),
        c = i(81393),
        g = i(30470),
        u = i(61859);
      const _ = "23B7-49AD-4A28-9590";
      class h {
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
            g.TS.IN_STEAMUI &&
              (a.xM.RegisterForNotifyTimelineChanged(this.OnTimelineChanged),
              a.xM.RegisterForNotifyRecordingSessionChanged(
                this.OnRecordingSessionChanged,
              ),
              a.xM.RegisterForNotifyTimelineEntryChanged(
                this.OnTimelineEntryChanged,
              ),
              a.xM.RegisterForNotifyTimelineEntryRemoved(
                this.OnTimelineEntryRemoved,
              ),
              a.xM.RegisterForNotifyClipCreated(this.OnClipCreated),
              a.xM.RegisterForNotifyExportProgress(this.OnExportProgress),
              a.xM.RegisterForNotifyLowDiskSpace(this.OnLowDiskSpace),
              await this.LoadAppsWithBackgroundVideo(),
              await this.CheckEnoughDiskSpace());
        }
        GetAppsWithBackgroundVideo() {
          return this.m_rgAppsWithBackgroundVideo;
        }
        GetTimelineLoaderForGame(e) {
          (0, c.wT)(e, "Invalid GameID: " + e);
          let t = this.m_mapTimelineLoaders.get(e);
          if (!t) {
            let i = new p.SX();
            i.LoadTimelinesForBackgroundVideo(e),
              (t = { loader: i, nRefCount: 0 }),
              this.m_mapTimelineLoaders.set(e, t);
          }
          t.nRefCount++,
            (0, d.tG)(
              `CGameRecordingStore::GetTimelineLoaderForGame incrementing refCount ${t.nRefCount} for ${e}` +
                (1 == t.nRefCount ? " and it was created" : ""),
            );
          return {
            loader: t.loader,
            release: () => {
              t.nRefCount--,
                (0, d.tG)(
                  `CGameRecordingStore::GetTimelineLoaderForGame reducing refCount ${t.nRefCount} for ${e}` +
                    (t.nRefCount <= 0 ? " will delete" : ""),
                ),
                t.nRefCount <= 0 && this.m_mapTimelineLoaders.delete(e);
            },
          };
        }
        GetTimelineLoaderForClip(e) {
          (0, c.wT)(e, "Invalid ClipID: " + e);
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
          (0, c.wT)(e, "Invalid clip");
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
          (0, d.xv)() && e.DEBUG_LogToConsole(),
            this.ReloadAppsWithBackgroundVideoIfNecessary(e);
          let t = e.Body().notification_type(),
            i = e.Body().timeline_id(),
            r = e.Body().game_id();
          switch (t) {
            case 1:
            case 4: {
              let t = this.GetTimelineLoaderForGame(r);
              this.m_mapActiveTimelines.set(i, t),
                t.loader.AddRunningTimeline(i, r, e.Body().start_time());
              break;
            }
            case 2: {
              let t = this.m_mapActiveTimelines.get(i);
              t &&
                (t.loader.RunningTimelineStopped(i, e.Body().duration_ms()),
                t.release());
              break;
            }
            case 3: {
              let e = this.m_mapTimelineLoaders.get(r);
              e && e.loader.TimelineDeleted(i);
              break;
            }
          }
          return 1;
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
            case 1:
              this.m_recordingState = { m_gameID: i };
              break;
            case 2:
              this.m_recordingState = null;
          }
          let o = this.m_mapTimelineLoaders.get(i);
          return o ? (o.loader.RecordingSessionChanged(t), 1) : 1;
        }
        OnTimelineEntryChanged(e) {
          if (!e.Body().entry(!1))
            return (
              (0, c.wT)(
                !1,
                "OnTimelineEntryChanged received an invalid protobuf",
              ),
              1
            );
          const { entry: t } = e.Body().toObject();
          if (!t)
            return (
              (0, c.wT)(
                !1,
                "OnTimelineEntryChanged received an invalid protobuf after conversion",
              ),
              1
            );
          const i = this.m_mapActiveTimelines.get(t.timeline_id);
          if (i) {
            const e = i.loader;
            if (e.BIsTimelineRunning(t.timeline_id))
              return e.AddRunningTimelineEntry(t), 1;
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
                1
              );
            }
          }
          return 1;
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
          return 1;
        }
        OnClipCreated(e) {
          const t = e.Body().summary().toObject();
          return (
            this.InternalAddClipSummary(t), (0, d.tG)("New clip saved:", t), 1
          );
        }
        async UploadClip(e, t, i, r) {
          const o = await a.xM.UploadClipToSteam({
            clip_id: e,
            title: t,
            desc: i,
            visibility: r,
          });
          let s;
          if (1 == o.GetEResult()) {
            const e = o.Body().summary().toObject();
            this.InternalAddClipSummary(e),
              (s = `${g.TS.COMMUNITY_BASE_URL}sharedfiles/filedetails/?id=${e.published_file_id}`);
          }
          return { eResult: o.GetEResult(), strURL: s };
        }
        async LoadAppsWithBackgroundVideo() {
          try {
            const e = await a.xM.GetAppsWithBackgroundVideo({});
            if (!e.BSuccess())
              return void (this.m_bLoadingAppsWithBackgroundVideo = !1);
            (0, d.q_)(`Loaded ${e.Body().apps().length} apps with timelines`),
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
            (0, d.ZI)("Failed to load apps with timelines", e),
              (this.m_bLoadingAppsWithBackgroundVideo = !1);
          }
        }
        ReloadAppsWithBackgroundVideoIfNecessary(e) {
          if (!this.m_rgAppsWithBackgroundVideo) return;
          let t = e.Body().game_id();
          (function (e, t) {
            switch (e) {
              case 1:
                return !t;
              case 3:
                return t;
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
        async SaveClip(e, t, i, r, o, s, n) {
          const l = await a.xM.SaveClip({
            game_id: e,
            start: r,
            end: o,
            name: i,
            src_clip_id: t,
            temporary: s,
            force_thumbnail: n,
          });
          if (1 == l.GetEResult()) {
            const e = l.Body().summary().toObject();
            return (
              this.InternalAddClipSummary(e),
              (0, d.tG)("Saved clip", e),
              (this.m_strLastClipID = e.clip_id),
              { clipSummary: e, result: 1 }
            );
          }
          return (0, d.tH)("Failed to save clip"), { result: l.GetEResult() };
        }
        async DeleteClip(e) {
          const t = await a.xM.DeleteClip({ clip_id: e });
          if (1 == t.GetEResult()) {
            const t = this.m_clips.get(e);
            this.m_clips.delete(e);
            let i = this.m_clipsGroupByGame.get(t.game_id),
              r = i.findIndex((t) => t.clip_id == e);
            i.splice(r, 1), (0, d.tG)("Deleted clip", e);
          } else (0, d.tH)("Failed to delete clip", e);
          return t.GetEResult();
        }
        async ExportClip(e, t, i, r) {
          if (this.m_currentlyExportingClip)
            return (
              (0, d.tH)("Export in progress, cannot start another one", e), 10
            );
          this.m_clipExportProgress.set(e, {
            exportPath: t,
            progress: 0,
            resultStatus: 22,
          }),
            (this.m_currentlyExportingClip = e);
          const o = await a.xM.ExportClip({
            clip_id: e,
            export_mp4_path: t,
            settings: i,
            use_unique_filename: r,
          });
          return (
            1 === o.GetEResult()
              ? ((0, d.tG)(`Exporting clip ${e} to ${t}`),
                (this.m_currentlyExportingClip = null),
                this.m_clipExportProgress.set(e, {
                  exportPath: t,
                  progress: 1,
                  resultStatus: 1,
                }))
              : (this.m_clipExportProgress.set(e, {
                  exportPath: t,
                  progress: 0,
                  resultStatus: o.GetEResult(),
                }),
                (this.m_currentlyExportingClip = null),
                (0, d.tH)("Failed to export clip", e)),
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
                1)
              : 1 === e.Body().progress() && 1 === r
                ? ((this.m_currentlyExportingClip = null),
                  this.m_clipExportProgress.set(t, {
                    ...i,
                    progress: e.Body().progress(),
                    resultStatus: 1,
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
          return 8;
        }
        GetClipExportProgress(e) {
          return this.m_clipExportProgress.get(e);
        }
        GetCurrentExportingClip() {
          return this.m_currentlyExportingClip;
        }
        async TakeScreenshot(e, t, i) {
          const r = await a.xM.TakeScreenshot({
            game_id: e,
            timeline_id: t,
            timeline_offset_ms: Math.floor(i).toString(),
          });
          if (1 == r.GetEResult()) {
            r.Body().toObject();
            return { handle: parseInt(r.Body().screenshot_id()), result: 1 };
          }
          return (
            (0, d.tH)("Failed to take screenshot"), { result: r.GetEResult() }
          );
        }
        async LazyLoadClips() {
          if (!this.m_bClipLoadingTriggered)
            try {
              this.m_bClipLoadingTriggered = !0;
              const e = await a.xM.GetClips({});
              (0, o.h5)(() => {
                e
                  .Body()
                  .clip()
                  .forEach((e) => this.InternalAddClipSummary(e.toObject())),
                  (this.m_bLoadingClips = !1);
              });
            } catch (e) {
              (0, d.ZI)("Failed to load clips", e), (this.m_bLoadingClips = !1);
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
            const t = new m.VS(e);
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
            (0, d.q_)("Start manual recording"),
            a.xM.StartRecording({ game_id: e })
          );
        }
        async StopRecording(e) {
          (0, d.q_)("Stop manual recording");
          const t = await a.xM.StopRecording({ game_id: e });
          if (t.BSuccess()) {
            const e = t.Body().summary().toObject();
            this.InternalAddClipSummary(e);
          }
        }
        async SwitchRecordedGame(e) {
          return (
            (0, d.q_)("Switch recorded game: " + e),
            a.xM.SwitchBackgroundRecordingGame({ game_id: e })
          );
        }
        async CreateUserTimelineMarkers(e, t, i) {
          const r = await a.xM.UserAddTimelineEntry({
            game_id: e,
            clip_id: t,
            entry: i,
          });
          return (
            1 == r.GetEResult()
              ? (0, d.tG)("User Marker Created: ", i)
              : (0, d.tH)(
                  `Failed to create User Marker at ${i.time} for game ${e} with error code ${r.GetEResult()}`,
                ),
            { eResult: r.GetEResult(), entry_id: r.Body().entry_id() }
          );
        }
        async UpdateUserTimelineMarkers(e, t, i) {
          const r = await a.xM.UserUpdateTimelineEntry({
            game_id: e,
            clip_id: t,
            entry: i,
          });
          return (
            1 == r.GetEResult()
              ? (0, d.tG)("User Marker Updated: ", i)
              : (0, d.tH)(
                  `Failed to Update existing User Marker ${i.entry_id} at ${i.time} time under timeline ${i.timeline_id} for game ${e} with error code ${r.GetEResult()}`,
                ),
            r.GetEResult()
          );
        }
        async RemoveUserTimelineMarker(e, t, i, r) {
          const o = await a.xM.UserRemoveTimelineEntry({
            game_id: e,
            clip_id: t,
            entry_id: r,
            timeline_id: i,
          });
          return (
            1 == o.GetEResult()
              ? (0, d.tG)("User Marker remove at " + r)
              : (0, d.tH)(
                  `Failed to remove User Marker id ${r} for game ${e} on timeline ${i} with error code ${o.GetEResult()}`,
                ),
            o.GetEResult()
          );
        }
        async LoadThumbnails(e, t, i, r, o, s) {
          return (
            await a.xM.GetThumbnails({
              recording_id: e,
              clip_id: t,
              timeline_id: i,
              start_offset_us: r.map((e) => Math.floor(e).toString()),
              major_axis: o,
              time_precision: s ? 0 : 1,
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
          a.xM.ManuallyDeleteRecordingsForApps({ game_ids: e });
        }
        async GetTotalDiskSpaceUsage(e, t) {
          const i = t ? 0 : 1,
            r = await a.xM.GetTotalDiskSpaceUsage({ folder_path: e, type: i });
          if (r.BSuccess()) {
            const e = r.Body().size();
            return Number(e);
          }
          return 0;
        }
        async GetAvailableDiskSpace() {
          const e = await a.xM.GetAvailableDiskSpace({});
          return e.BSuccess() ? e.Body().size() : 0;
        }
        ReportClipShare(e, t, i, r, o) {
          (0, d.q_)(`ReportClipShare ${JSON.stringify(e)} ${t} ${i} ${r} ${o}`),
            l._5.ReportClipShare(this.m_transport, {
              gameid: e.ConvertTo64BitString(),
              share_method: t,
              seconds: i,
              bytes: r.toString(),
              eresult: o,
            });
        }
        ReportClipRange(e, t, i, r, o) {
          (0, d.q_)("ReportClipRange", JSON.stringify(e), t, i, r, o);
          const s = n.w.Init(l.IR);
          s.Body().set_gameid(e.ConvertTo64BitString()),
            s.Body().set_original_range_method(t),
            s.Body().set_seconds(i),
            s.Body().start().set_original_range_method(r.originalRangeMethod),
            s.Body().start().set_latest_range_method(r.latestRangeMethod),
            s.Body().start().set_delta_ms(Math.ceil(r.relativeMS)),
            s.Body().end().set_original_range_method(o.originalRangeMethod),
            s.Body().end().set_latest_range_method(o.latestRangeMethod),
            s.Body().end().set_delta_ms(Math.ceil(o.relativeMS)),
            l._5.ReportClipRange(this.m_transport, s);
        }
        GetRecordingState() {
          return this.m_recordingState;
        }
        BEnoughDiskSpace() {
          return this.m_bEnoughDiskSpace;
        }
        OnLowDiskSpace(e) {
          return (this.m_bEnoughDiskSpace = !1), 1;
        }
        async CheckEnoughDiskSpace() {
          const e = await a.xM.GetEnoughDiskSpace({});
          e.BSuccess()
            ? (this.m_bEnoughDiskSpace = e.Body().enough_space())
            : (0, d.tH)(
                `Failed to get recording drive free space ${e.GetEResult()}`,
              );
        }
        async GetRecordingHighlights(e, t) {
          return (
            (
              await a.xM.GetAndTrimPostGameHighlights({
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
        h.prototype,
        "m_rgAppsWithBackgroundVideo",
        void 0,
      ),
        (0, r.Cg)([o.sH], h.prototype, "m_bLoadingClips", void 0),
        (0, r.Cg)(
          [o.sH],
          h.prototype,
          "m_bLoadingAppsWithBackgroundVideo",
          void 0,
        ),
        (0, r.Cg)([o.sH], h.prototype, "m_clips", void 0),
        (0, r.Cg)([o.sH], h.prototype, "m_clipsGroupByGame", void 0),
        (0, r.Cg)([o.sH], h.prototype, "m_clipExportProgress", void 0),
        (0, r.Cg)([o.sH], h.prototype, "m_currentlyExportingClip", void 0),
        (0, r.Cg)([o.sH], h.prototype, "m_recordingState", void 0),
        (0, r.Cg)([o.sH], h.prototype, "m_bEnoughDiskSpace", void 0),
        (0, r.Cg)([s.oI], h.prototype, "GetTimelineLoaderForGame", null),
        (0, r.Cg)([s.oI], h.prototype, "GetTimelineLoaderForClip", null),
        (0, r.Cg)([s.oI], h.prototype, "GetTimelineLoaderForSharedClip", null),
        (0, r.Cg)([s.oI], h.prototype, "OnTimelineChanged", null),
        (0, r.Cg)([s.oI], h.prototype, "OnRecordingSessionChanged", null),
        (0, r.Cg)([s.oI], h.prototype, "OnTimelineEntryChanged", null),
        (0, r.Cg)([s.oI], h.prototype, "OnTimelineEntryRemoved", null),
        (0, r.Cg)([s.oI], h.prototype, "OnClipCreated", null),
        (0, r.Cg)([s.oI], h.prototype, "UploadClip", null),
        (0, r.Cg)([s.oI], h.prototype, "SaveClip", null),
        (0, r.Cg)([s.oI], h.prototype, "DeleteClip", null),
        (0, r.Cg)([s.oI], h.prototype, "ExportClip", null),
        (0, r.Cg)([s.oI], h.prototype, "UpdateClipExportPath", null),
        (0, r.Cg)([s.oI], h.prototype, "OnExportProgress", null),
        (0, r.Cg)([s.oI], h.prototype, "TakeScreenshot", null),
        (0, r.Cg)([s.oI], h.prototype, "RegisterManualRecordingCallback", null),
        (0, r.Cg)([s.oI], h.prototype, "StartRecording", null),
        (0, r.Cg)([s.oI], h.prototype, "StopRecording", null),
        (0, r.Cg)([s.oI], h.prototype, "SwitchRecordedGame", null),
        (0, r.Cg)([s.oI], h.prototype, "CreateUserTimelineMarkers", null),
        (0, r.Cg)([s.oI], h.prototype, "UpdateUserTimelineMarkers", null),
        (0, r.Cg)([s.oI], h.prototype, "RemoveUserTimelineMarker", null),
        (0, r.Cg)([s.oI], h.prototype, "LoadThumbnails", null),
        (0, r.Cg)([s.oI], h.prototype, "GetAchievementInfo", null),
        (0, r.Cg)([s.oI], h.prototype, "OnLowDiskSpace", null);
      const y = h;
    },
  },
]);
