/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [3102],
  {
    83102: (e, t, i) => {
      i.r(t),
        i.d(t, {
          CGameRecordingStore: () => y,
          default: () => C,
          k_strGRFAQ: () => _,
        });
      var r = i(85556),
        s = i(54842),
        n = i(20417),
        a = i(79545),
        o = i(77185),
        l = i(14351),
        p = i(93882),
        d = i(12015),
        m = i(37796),
        c = i(62210),
        g = i(77936),
        h = i(65255),
        u = i(31846);
      const _ = "23B7-49AD-4A28-9590";
      class y {
        constructor() {
          (0, s.rC)(this);
        }
        m_rgAppsWithTimelines = [];
        m_mapTimelineLoaders = new Map();
        m_mapClipLoaders = new Map();
        m_mapSharedClipLoaders = new Map();
        m_mapActiveTimelines = new Map();
        m_mapManualRecordingCallbacks = new Map();
        m_fnGetAchievementInfo;
        m_strLastClipID;
        m_transport;
        m_bLoadingClips = !0;
        m_bLoadingAppsWithTimelines = !0;
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
            h.De.IN_STEAMUI &&
              (o.Up.RegisterForNotifyTimelineChanged(this.OnTimelineChanged),
              o.Up.RegisterForNotifyRecordingSessionChanged(
                this.OnRecordingSessionChanged,
              ),
              o.Up.RegisterForNotifyTimelineEntryChanged(
                this.OnTimelineEntryChanged,
              ),
              o.Up.RegisterForNotifyClipCreated(this.OnClipCreated),
              o.Up.RegisterForNotifyExportProgress(this.OnExportProgress),
              o.Up.RegisterForNotifyLowDiskSpace(this.OnLowDiskSpace),
              await this.LoadAppsWithTimelines(),
              await this.CheckEnoughDiskSpace());
        }
        GetAppsWithTimelines() {
          return this.m_rgAppsWithTimelines;
        }
        GetAppsWithTimelinesWithVideo() {
          return this.m_rgAppsWithTimelines.filter(
            (e) => e.video_duration_seconds > 0 || e.is_active,
          );
        }
        GetTimelineLoaderForGame(e) {
          (0, c.X)(e, "Invalid GameID: " + e);
          let t = this.m_mapTimelineLoaders.get(e);
          if (!t) {
            let i = new p.Or();
            i.LoadTimelinesForGame(e),
              (t = { loader: i, nRefCount: 0 }),
              this.m_mapTimelineLoaders.set(e, t);
          }
          t.nRefCount++,
            (0, d.Zb)(
              `CGameRecordingStore::GetTimelineLoaderForGame incrementing refCount ${t.nRefCount} for ${e}` +
                (1 == t.nRefCount ? " and it was created" : ""),
            );
          return {
            loader: t.loader,
            release: () => {
              t.nRefCount--,
                (0, d.Zb)(
                  `CGameRecordingStore::GetTimelineLoaderForGame reducing refCount ${t.nRefCount} for ${e}` +
                    (t.nRefCount <= 0 ? " will delete" : ""),
                ),
                t.nRefCount <= 0 && this.m_mapTimelineLoaders.delete(e);
            },
          };
        }
        GetTimelineLoaderForClip(e) {
          (0, c.X)(e, "Invalid ClipID: " + e);
          let t = this.m_mapClipLoaders.get(e);
          if (!t) {
            let i = new p.Or();
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
          (0, c.X)(e, "Invalid clip");
          let t = this.m_mapSharedClipLoaders.get(e.clip_id);
          if (!t) {
            let i = new p.Or();
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
          (0, d.UV)() && e.DEBUG_LogToConsole(),
            this.ReloadAppsWithTimelinesIfNeeded(e);
          let t = e.Body().notification_type(),
            i = e.Body().timeline_id(),
            r = e.Body().game_id();
          if (1 == t) {
            let t = this.GetTimelineLoaderForGame(r);
            this.m_mapActiveTimelines.set(i, t),
              t.loader.AddRunningTimeline(i, r, e.Body().start_time());
          } else if (2 == t) {
            let t = this.m_mapActiveTimelines.get(i);
            t &&
              (t.loader.RunningTimelineStopped(i, e.Body().duration_ms()),
              t.release());
          } else if (3 == t) {
            let e = this.m_mapTimelineLoaders.get(r);
            e && e.loader.TimelineDeleted(i);
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
            case 1: {
              const e = this.m_rgAppsWithTimelines.find(
                (e) => e.game_id == i,
              )?.recording_type;
              this.m_recordingState = { m_gameID: i, m_eRecordingType: e };
              break;
            }
            case 2:
              this.m_recordingState = null;
          }
          let s = this.m_mapTimelineLoaders.get(i);
          return s ? (s.loader.RecordingSessionChanged(t), 1) : 1;
        }
        OnTimelineEntryChanged(e) {
          const { entry: t } = e.Body().toObject(),
            i = this.m_mapActiveTimelines.get(t.timeline_id);
          return i ? (i.loader.AddRunningTimelineEntry(t), 1) : 1;
        }
        OnClipCreated(e) {
          const t = e.Body().summary().toObject();
          return (
            this.InternalAddClipSummary(t), (0, d.Zb)("New clip saved:", t), 1
          );
        }
        async UploadClip(e, t, i, r) {
          const s = await o.Up.UploadClipToSteam({
            clip_id: e,
            title: t,
            desc: i,
            visibility: r,
          });
          let n;
          if (1 == s.GetEResult()) {
            const e = s.Body().summary().toObject();
            this.InternalAddClipSummary(e),
              (n = `${h.De.COMMUNITY_BASE_URL}sharedfiles/filedetails/?id=${e.published_file_id}`);
          }
          return { eResult: s.GetEResult(), strURL: n };
        }
        async LoadAppsWithTimelines() {
          try {
            const e = await o.Up.GetActiveTimelineApps({});
            if (!e.BSuccess())
              return void (this.m_bLoadingAppsWithTimelines = !1);
            (0, d.hB)(`Loaded ${e.Body().apps().length} apps with timelines`),
              (0, s.z)(() => {
                (this.m_bLoadingAppsWithTimelines = !1),
                  (this.m_rgAppsWithTimelines = e
                    .Body()
                    .toObject()
                    .apps.sort(
                      (e, t) =>
                        t.most_recent_start_time - e.most_recent_start_time,
                    ));
              });
          } catch (e) {
            (0, d.F0)("Failed to load apps with timelines", e),
              (this.m_bLoadingAppsWithTimelines = !1);
          }
        }
        BShouldReloadAppsWithTimelines(e, t) {
          switch (e) {
            case 1:
              return !t;
            case 3:
              return t;
            default:
              return !0;
          }
        }
        ReloadAppsWithTimelinesIfNeeded(e) {
          if (!this.m_rgAppsWithTimelines) return;
          let t = e.Body().game_id(),
            i = e.Body().notification_type(),
            r =
              this.m_rgAppsWithTimelines.findIndex((e) => e.game_id == t) >= 0;
          this.BShouldReloadAppsWithTimelines(i, r) &&
            this.LoadAppsWithTimelines();
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
        async SaveClip(e, t, i, r, s, n) {
          {
            const a = await o.Up.SaveClip({
              game_id: e,
              start: r,
              end: s,
              name: i,
              src_clip_id: t,
              temporary: n,
            });
            if (1 == a.GetEResult()) {
              const e = a.Body().summary().toObject();
              return (
                this.InternalAddClipSummary(e),
                (0, d.Zb)("Saved clip", e),
                (this.m_strLastClipID = e.clip_id),
                { clipSummary: e, result: 1 }
              );
            }
            return (0, d.aF)("Failed to save clip"), { result: a.GetEResult() };
          }
        }
        async DeleteClip(e) {
          {
            const t = await o.Up.DeleteClip({ clip_id: e });
            if (1 == t.GetEResult()) {
              const t = this.m_clips.get(e);
              this.m_clips.delete(e);
              let i = this.m_clipsGroupByGame.get(t.game_id),
                r = i.findIndex((t) => t.clip_id == e);
              i.splice(r, 1), (0, d.Zb)("Deleted clip", e);
            } else (0, d.aF)("Failed to delete clip", e);
            return t.GetEResult();
          }
        }
        async ExportClip(e, t, i) {
          {
            if (this.m_currentlyExportingClip)
              return (
                (0, d.aF)("Export in progress, cannot start another one", e), 10
              );
            this.m_clipExportProgress.set(e, {
              exportPath: t,
              progress: 0,
              resultStatus: 22,
            }),
              (this.m_currentlyExportingClip = e);
            const r = await o.Up.ExportClip({
              clip_id: e,
              export_mp4_path: t,
              settings: i,
            });
            return (
              1 === r.GetEResult()
                ? ((0, d.Zb)(`Exporting clip ${e} to ${t}`),
                  (this.m_currentlyExportingClip = null),
                  this.m_clipExportProgress.set(e, {
                    exportPath: t,
                    progress: 1,
                    resultStatus: 1,
                  }))
                : (this.m_clipExportProgress.set(e, {
                    exportPath: t,
                    progress: 0,
                    resultStatus: r.GetEResult(),
                  }),
                  (this.m_currentlyExportingClip = null),
                  (0, d.aF)("Failed to export clip", e)),
              r.GetEResult()
            );
          }
        }
        UpdateClipExportPath(e, t) {
          {
            let i = this.m_clipExportProgress.get(e);
            i && this.m_clipExportProgress.set(e, { ...i, exportPath: t });
          }
          return 2;
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
        async LazyLoadClips() {
          if (!this.m_bClipLoadingTriggered)
            try {
              this.m_bClipLoadingTriggered = !0;
              const e = await o.Up.GetClips({});
              (0, s.z)(() => {
                e
                  .Body()
                  .clip()
                  .forEach((e) => this.InternalAddClipSummary(e.toObject())),
                  (this.m_bLoadingClips = !1);
              });
            } catch (e) {
              (0, d.F0)("Failed to load clips", e), (this.m_bLoadingClips = !1);
            }
        }
        BLoadingClips() {
          return this.m_bLoadingClips;
        }
        BLoadingAppsWithTimelines() {
          return this.m_bLoadingAppsWithTimelines;
        }
        GetClipIDs(e) {
          if ((this.LazyLoadClips(), e)) {
            const t = new m.N1(g.b7.k_EGameIDTypeApp, e, 0);
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
            (0, d.hB)("Start manual recording"),
            o.Up.StartRecording({ game_id: e })
          );
        }
        async StopRecording(e) {
          {
            (0, d.hB)("Stop manual recording");
            const t = await o.Up.StopRecording({ game_id: e });
            if (t.BSuccess()) {
              const e = t.Body().summary().toObject();
              this.InternalAddClipSummary(e);
            }
          }
          return null;
        }
        async SwitchRecordedGame(e) {
          return (
            (0, d.hB)("Switch recorded game: " + e),
            o.Up.SwitchBackgroundRecordingGame({ game_id: e })
          );
        }
        async CreateUserTimelineMarkers(e, t, i) {
          {
            const r = await o.Up.UserAddTimelineEntry({
              game_id: e,
              clip_id: t,
              entry: i,
            });
            return (
              1 == r.GetEResult()
                ? (0, d.Zb)("User Marker Created: ", i)
                : (0, d.aF)(
                    `Failed to create User Marker at ${i.time} for game ${e} with error code ${r.GetEResult()}`,
                  ),
              { eResult: r.GetEResult(), entry_id: r.Body().entry_id() }
            );
          }
        }
        async UpdateUserTimelineMarkers(e, t, i) {
          {
            const r = await o.Up.UserUpdateTimelineEntry({
              game_id: e,
              clip_id: t,
              entry: i,
            });
            return (
              1 == r.GetEResult()
                ? (0, d.Zb)("User Marker Updated: ", i)
                : (0, d.aF)(
                    `Failed to Update existing User Marker ${i.entry_id} at ${i.time} time under timeline ${i.timeline_id} for game ${e} with error code ${r.GetEResult()}`,
                  ),
              r.GetEResult()
            );
          }
        }
        async RemoveUserTimelineMarker(e, t, i, r) {
          {
            const s = await o.Up.UserRemoveTimelineEntry({
              game_id: e,
              clip_id: t,
              entry_id: r,
              timeline_id: i,
            });
            return (
              1 == s.GetEResult()
                ? (0, d.Zb)("User Marker remove at " + r)
                : (0, d.aF)(
                    `Failed to remove User Marker id ${r} for game ${e} on timeline ${i} with error code ${s.GetEResult()}`,
                  ),
              s.GetEResult()
            );
          }
        }
        async LoadThumbnails(e, t, i, r, s, n) {
          return (
            await o.Up.GetThumbnails({
              recording_id: e,
              clip_id: t,
              timeline_id: i,
              start_offset_us: r.map((e) => Math.floor(e).toString()),
              major_axis: s,
              time_precision: n ? 0 : 1,
            })
          )
            .Body()
            .thumbnails();
        }
        GetAchivementInfo(e, t) {
          return this.m_fnGetAchievementInfo?.(e, t);
        }
        GetLastClip() {
          if (this.m_strLastClipID)
            return this.m_clips.get(this.m_strLastClipID);
        }
        GetBestClipTitle(e) {
          const t = this.GetClipSummary(e);
          return t ? t.name || (0, u.vX)(t.date_recorded) : "";
        }
        ManuallyDeleteRecordingForApps(e) {
          o.Up.ManuallyDeleteRecordingsForApps({ game_ids: e });
        }
        async GetTotalDiskSpaceUsage(e, t) {
          const i = t ? 0 : 1,
            r = await o.Up.GetTotalDiskSpaceUsage({ folder_path: e, type: i });
          if (r.BSuccess()) {
            const e = r.Body().size();
            return Number(e);
          }
          return 0;
        }
        async GetAvailableDiskSpace() {
          const e = await o.Up.GetAvailableDiskSpace({});
          return e.BSuccess() ? e.Body().size() : 0;
        }
        ReportClipShare(e, t, i, r, s) {
          (0, d.hB)(`ReportClipShare ${JSON.stringify(e)} ${t} ${i} ${r} ${s}`),
            l.TF.ReportClipShare(this.m_transport, {
              gameid: e.ConvertTo64BitString(),
              share_method: t,
              seconds: i,
              bytes: r.toString(),
              eresult: s,
            });
        }
        ReportClipRange(e, t, i, r, s) {
          (0, d.hB)("ReportClipRange", JSON.stringify(e), t, i, r, s);
          const n = a.gA.Init(l.Qj);
          n.Body().set_gameid(e.ConvertTo64BitString()),
            n.Body().set_original_range_method(t),
            n.Body().set_seconds(i),
            n.Body().start().set_original_range_method(r.originalRangeMethod),
            n.Body().start().set_latest_range_method(r.latestRangeMethod),
            n.Body().start().set_delta_ms(Math.ceil(r.relativeMS)),
            n.Body().end().set_original_range_method(s.originalRangeMethod),
            n.Body().end().set_latest_range_method(s.latestRangeMethod),
            n.Body().end().set_delta_ms(Math.ceil(s.relativeMS)),
            l.TF.ReportClipRange(this.m_transport, n);
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
          const e = await o.Up.GetEnoughDiskSpace({});
          e.BSuccess()
            ? (this.m_bEnoughDiskSpace = e.Body().enough_space())
            : (0, d.aF)(
                `Failed to get recording drive free space ${e.GetEResult()}`,
              );
        }
      }
      (0, r.gn)([s.LO.shallow], y.prototype, "m_rgAppsWithTimelines", void 0),
        (0, r.gn)([s.LO], y.prototype, "m_bLoadingClips", void 0),
        (0, r.gn)([s.LO], y.prototype, "m_bLoadingAppsWithTimelines", void 0),
        (0, r.gn)([s.LO], y.prototype, "m_clips", void 0),
        (0, r.gn)([s.LO], y.prototype, "m_clipsGroupByGame", void 0),
        (0, r.gn)([s.LO], y.prototype, "m_clipExportProgress", void 0),
        (0, r.gn)([s.LO], y.prototype, "m_currentlyExportingClip", void 0),
        (0, r.gn)([s.LO], y.prototype, "m_recordingState", void 0),
        (0, r.gn)([s.LO], y.prototype, "m_bEnoughDiskSpace", void 0),
        (0, r.gn)([n.ak], y.prototype, "GetTimelineLoaderForGame", null),
        (0, r.gn)([n.ak], y.prototype, "GetTimelineLoaderForClip", null),
        (0, r.gn)([n.ak], y.prototype, "GetTimelineLoaderForSharedClip", null),
        (0, r.gn)([n.ak], y.prototype, "OnTimelineChanged", null),
        (0, r.gn)([n.ak], y.prototype, "OnRecordingSessionChanged", null),
        (0, r.gn)([n.ak], y.prototype, "OnTimelineEntryChanged", null),
        (0, r.gn)([n.ak], y.prototype, "OnClipCreated", null),
        (0, r.gn)([n.ak], y.prototype, "UploadClip", null),
        (0, r.gn)([n.ak], y.prototype, "SaveClip", null),
        (0, r.gn)([n.ak], y.prototype, "DeleteClip", null),
        (0, r.gn)([n.ak], y.prototype, "ExportClip", null),
        (0, r.gn)([n.ak], y.prototype, "UpdateClipExportPath", null),
        (0, r.gn)([n.ak], y.prototype, "OnExportProgress", null),
        (0, r.gn)([n.ak], y.prototype, "RegisterManualRecordingCallback", null),
        (0, r.gn)([n.ak], y.prototype, "StartRecording", null),
        (0, r.gn)([n.ak], y.prototype, "StopRecording", null),
        (0, r.gn)([n.ak], y.prototype, "SwitchRecordedGame", null),
        (0, r.gn)([n.ak], y.prototype, "CreateUserTimelineMarkers", null),
        (0, r.gn)([n.ak], y.prototype, "UpdateUserTimelineMarkers", null),
        (0, r.gn)([n.ak], y.prototype, "RemoveUserTimelineMarker", null),
        (0, r.gn)([n.ak], y.prototype, "LoadThumbnails", null),
        (0, r.gn)([n.ak], y.prototype, "GetAchivementInfo", null),
        (0, r.gn)([n.ak], y.prototype, "OnLowDiskSpace", null);
      const C = y;
    },
  },
]);
