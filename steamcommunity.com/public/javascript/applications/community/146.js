/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [146],
    {
      90146: (F, B, h) => {
        h.r(B),
          h.d(B, {
            CGameRecordingStore: () => n,
            default: () => O,
            k_strGRFAQ: () => w,
          });
        var u = h(14947),
          c = h(54963),
          x = h(35038),
          p = h(72604),
          a = h(86578),
          S = h(21196),
          G = h(85958),
          m = h(85443),
          E = h(34843),
          _ = h(71742),
          T = h(98609),
          b = h(18210),
          R = ((s) => (
            (s[(s.Invalid = 0)] = "Invalid"),
            (s[(s.Success = 1)] = "Success"),
            (s[(s.Failed = 2)] = "Failed"),
            (s[(s.InvalidParam = 3)] = "InvalidParam"),
            (s[(s.InputNotFound = 4)] = "InputNotFound"),
            (s[(s.ErrorReadingInput = 5)] = "ErrorReadingInput"),
            (s[(s.ErrorWritingOuput = 6)] = "ErrorWritingOuput"),
            (s[(s.NoHardwareEncoder = 7)] = "NoHardwareEncoder"),
            (s[(s.UnsupportedSourceCodec = 8)] = "UnsupportedSourceCodec"),
            (s[(s.UnsupportedTargetCodec = 9)] = "UnsupportedTargetCodec"),
            (s[(s.DiskFull = 10)] = "DiskFull"),
            (s[(s.ResolutionTooLarge = 11)] = "ResolutionTooLarge"),
            (s[(s.ConverterBusy = 12)] = "ConverterBusy"),
            s
          ))(R || {}),
          L = Object.defineProperty,
          v = Object.getOwnPropertyDescriptor,
          k = (s, e, t) =>
            e in s
              ? L(s, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (s[e] = t),
          l = (s, e, t, i) => {
            for (
              var r = i > 1 ? void 0 : i ? v(e, t) : e, o = s.length - 1, d;
              o >= 0;
              o--
            )
              (d = s[o]) && (r = (i ? d(e, t, r) : d(r)) || r);
            return i && r && L(e, t, r), r;
          },
          g = (s, e, t) => k(s, typeof e != "symbol" ? e + "" : e, t);
        const w = "23B7-49AD-4A28-9590";
        function A(s, e) {
          switch (s) {
            case a.QX.qK:
              return !e;
            case a.QX.sd:
              return e;
            case a.QX.yq:
            case a.QX.dh:
            case a.QX.Jr:
            case a.QX.t8:
              return !0;
            default:
              return !0;
          }
        }
        class n {
          constructor() {
            g(this, "m_rgAppsWithBackgroundVideo", []),
              g(this, "m_mapTimelineLoaders", new Map()),
              g(this, "m_mapClipLoaders", new Map()),
              g(this, "m_mapSharedClipLoaders", new Map()),
              g(this, "m_mapActiveTimelines", new Map()),
              g(this, "m_mapManualRecordingCallbacks", new Map()),
              g(this, "m_fnGetAchievementInfo"),
              g(this, "m_strLastClipID"),
              g(this, "m_bEnableH265Recording", !1),
              g(this, "m_transport"),
              g(this, "m_bLoadingClips", !0),
              g(this, "m_bLoadingAppsWithBackgroundVideo", !0),
              g(this, "m_bClipLoadingTriggered", !1),
              g(this, "m_clips", new Map()),
              g(this, "m_clipsGroupByGame", new Map()),
              g(this, "m_clipExportProgress", new Map()),
              g(this, "m_currentlyExportingClip", null),
              g(this, "m_recordingState", null),
              g(this, "m_bEnoughDiskSpace", !1),
              (0, u.Gn)(this);
          }
          async Init(e, t) {
            (this.m_transport = e),
              (this.m_fnGetAchievementInfo = t),
              T.TS.IN_STEAMUI &&
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
                a.xM.RegisterForNotifyStateChanged(this.OnStateChanged),
                await this.LoadAppsWithBackgroundVideo(),
                await this.CheckEnoughDiskSpace(),
                await this.UpdateState());
          }
          async UpdateState() {
            var e;
            const t = await a.xM.GetState({});
            if (!t.BSuccess()) {
              console.warn("Failed to initialize game recording state");
              return;
            }
            const i = t.Body().toObject();
            this.m_bEnableH265Recording =
              (e = i == null ? void 0 : i.is_h265_enabled) != null ? e : !1;
          }
          OnStateChanged() {
            return this.UpdateState(), p.R;
          }
          GetAppsWithBackgroundVideo() {
            return this.m_rgAppsWithBackgroundVideo;
          }
          IsGameRecordingH265Enabled() {
            return this.m_bEnableH265Recording;
          }
          GetTimelineLoaderForGame(e) {
            (0, _.wT)(e, "Invalid GameID: " + e);
            let t = this.m_mapTimelineLoaders.get(e);
            if (!t) {
              let r = new G.SX();
              r.LoadTimelinesForBackgroundVideo(e),
                (t = { loader: r, nRefCount: 0 }),
                this.m_mapTimelineLoaders.set(e, t);
            }
            t.nRefCount++,
              (0, m.tG)(
                `CGameRecordingStore::GetTimelineLoaderForGame incrementing refCount ${t.nRefCount} for ${e}` +
                  (t.nRefCount == 1 ? " and it was created" : ""),
              );
            let i = () => {
              t.nRefCount--,
                (0, m.tG)(
                  `CGameRecordingStore::GetTimelineLoaderForGame reducing refCount ${t.nRefCount} for ${e}` +
                    (t.nRefCount <= 0 ? " will delete" : ""),
                ),
                t.nRefCount <= 0 && this.m_mapTimelineLoaders.delete(e);
            };
            return { loader: t.loader, release: i };
          }
          GetTimelineLoaderForClip(e) {
            (0, _.wT)(e, "Invalid ClipID: " + e);
            let t = this.m_mapClipLoaders.get(e);
            if (!t) {
              let r = new G.SX();
              r.LoadTimelinesForClip(e),
                (t = { loader: r, nRefCount: 0 }),
                this.m_mapClipLoaders.set(e, t);
            }
            t.nRefCount++;
            let i = () => {
              t.nRefCount--,
                t.nRefCount <= 0 && this.m_mapTimelineLoaders.delete(e);
            };
            return { loader: t.loader, release: i };
          }
          GetTimelineLoaderForSharedClip(e) {
            (0, _.wT)(e, "Invalid clip");
            let t = this.m_mapSharedClipLoaders.get(e.clip_id);
            if (!t) {
              let r = new G.SX();
              r.LoadTimelinesForSharedClip(e),
                (t = { loader: r, nRefCount: 0 }),
                this.m_mapClipLoaders.set(e.clip_id, t);
            }
            t.nRefCount++;
            let i = () => {
              t.nRefCount--,
                t.nRefCount <= 0 && this.m_mapTimelineLoaders.delete(e.clip_id);
            };
            return { loader: t.loader, release: i };
          }
          OnTimelineChanged(e) {
            (0, m.xv)() && e.DEBUG_LogToConsole(),
              this.ReloadAppsWithBackgroundVideoIfNecessary(e);
            let t = e.Body().notification_type(),
              i = e.Body().timeline_id(),
              r = e.Body().game_id();
            switch (t) {
              case a.QX.qK:
              case a.QX.dh: {
                let o = this.GetTimelineLoaderForGame(r);
                this.m_mapActiveTimelines.set(i, o),
                  o.loader.AddRunningTimeline(i, r, e.Body().start_time());
                break;
              }
              case a.QX.yq: {
                let o = this.m_mapActiveTimelines.get(i);
                o &&
                  (o.loader.RunningTimelineStopped(i, e.Body().duration_ms()),
                  o.release());
                break;
              }
              case a.QX.sd: {
                let o = this.m_mapTimelineLoaders.get(r);
                o && o.loader.TimelineDeleted(i);
                break;
              }
            }
            return p.R;
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
              case a.E6.MC: {
                this.m_recordingState = { m_gameID: i };
                break;
              }
              case a.E6.wK: {
                this.m_recordingState = null;
                break;
              }
            }
            let o = this.m_mapTimelineLoaders.get(i);
            return o && o.loader.RecordingSessionChanged(t), p.R;
          }
          OnTimelineEntryChanged(e) {
            if (!e.Body().entry(!1))
              return (
                (0, _.wT)(
                  !1,
                  "OnTimelineEntryChanged received an invalid protobuf",
                ),
                p.R
              );
            const { entry: t } = e.Body().toObject();
            if (!t)
              return (
                (0, _.wT)(
                  !1,
                  "OnTimelineEntryChanged received an invalid protobuf after conversion",
                ),
                p.R
              );
            const i = this.m_mapActiveTimelines.get(t.timeline_id);
            if (i) {
              const r = i.loader;
              if (r.BIsTimelineRunning(t.timeline_id))
                return r.AddRunningTimelineEntry(t), p.R;
            }
            if (e.Body().game_id()) {
              let r = this.m_mapTimelineLoaders.get(e.Body().game_id());
              if (r)
                return (
                  r.loader.AddEventToTimeline(
                    t.timeline_id,
                    parseInt(t.time),
                    t.marker_icon,
                    t.entry_id,
                    t.marker_priority,
                    t.range_title,
                    t.marker_description,
                    parseInt(t.range_duration),
                  ),
                  p.R
                );
            }
            return p.R;
          }
          OnTimelineEntryRemoved(e) {
            const {
              entry_id: t,
              timeline_id: i,
              game_id: r,
            } = e.Body().toObject();
            if (r) {
              const o = this.m_mapTimelineLoaders.get(r);
              o && o.loader.RemoveTimelineEvent(i, t);
            }
            return p.R;
          }
          OnClipCreated(e) {
            const t = e.Body().summary().toObject();
            return (
              this.InternalAddClipSummary(t),
              (0, m.tG)("New clip saved:", t),
              p.R
            );
          }
          async UploadClip(e, t, i, r) {
            const o = await a.xM.UploadClipToSteam({
              clip_id: e,
              title: t,
              desc: i,
              visibility: r,
            });
            let d;
            if (o.GetEResult() == p.R) {
              const y = o.Body().summary().toObject();
              this.InternalAddClipSummary(y),
                (d = `${T.TS.COMMUNITY_BASE_URL}sharedfiles/filedetails/?id=${y.published_file_id}`);
            }
            return { eResult: o.GetEResult(), strURL: d };
          }
          async LoadAppsWithBackgroundVideo() {
            try {
              const e = await a.xM.GetAppsWithBackgroundVideo({});
              if (!e.BSuccess()) {
                this.m_bLoadingAppsWithBackgroundVideo = !1;
                return;
              }
              (0, m.q_)(`Loaded ${e.Body().apps().length} apps with timelines`),
                (0, u.h5)(() => {
                  (this.m_bLoadingAppsWithBackgroundVideo = !1),
                    (this.m_rgAppsWithBackgroundVideo = e
                      .Body()
                      .toObject()
                      .apps.sort(
                        (t, i) =>
                          i.most_recent_start_time - t.most_recent_start_time,
                      ));
                });
            } catch (e) {
              (0, m.ZI)("Failed to load apps with timelines", e),
                (this.m_bLoadingAppsWithBackgroundVideo = !1);
            }
          }
          ReloadAppsWithBackgroundVideoIfNecessary(e) {
            if (!this.m_rgAppsWithBackgroundVideo) return;
            let t = e.Body().game_id(),
              i = e.Body().notification_type(),
              r =
                this.m_rgAppsWithBackgroundVideo.findIndex(
                  (o) => o.game_id == t,
                ) >= 0;
            A(i, r) && this.LoadAppsWithBackgroundVideo();
          }
          InternalAddClipSummary(e) {
            if (
              this.m_clips.has(e.clip_id) &&
              this.m_clipsGroupByGame.has(e.game_id)
            ) {
              const t = this.m_clipsGroupByGame.get(e.game_id);
              this.m_clipsGroupByGame.set(
                e.game_id,
                t.filter((i) => i.clip_id != e.clip_id),
              );
            }
            this.m_clips.set(e.clip_id, e),
              this.m_clipsGroupByGame.has(e.game_id) ||
                this.m_clipsGroupByGame.set(e.game_id, []),
              this.m_clipsGroupByGame.get(e.game_id).push(e);
          }
          async SaveClip(e, t, i, r, o, d, y) {
            const f = await a.xM.SaveClip({
              game_id: e,
              start: r,
              end: o,
              name: i,
              src_clip_id: t,
              temporary: d,
              force_thumbnail: y,
            });
            if (f.GetEResult() == p.R) {
              const C = f.Body().summary().toObject();
              return (
                this.InternalAddClipSummary(C),
                (0, m.tG)("Saved clip", C),
                (this.m_strLastClipID = C.clip_id),
                { clipSummary: C, result: p.R }
              );
            } else
              return (
                (0, m.tH)("Failed to save clip"), { result: f.GetEResult() }
              );
          }
          async DeleteClip(e) {
            const t = await a.xM.DeleteClip({ clip_id: e });
            if (t.GetEResult() == p.R) {
              const i = this.m_clips.get(e);
              this.m_clips.delete(e);
              let r = this.m_clipsGroupByGame.get(i.game_id),
                o = r.findIndex((d) => d.clip_id == e);
              r.splice(o, 1), (0, m.tG)("Deleted clip", e);
            } else (0, m.tH)("Failed to delete clip", e);
            return t.GetEResult();
          }
          async ExportClip(e, t, i, r) {
            if (this.m_currentlyExportingClip)
              return (
                (0, m.tH)("Export in progress, cannot start another one", e),
                R.ConverterBusy
              );
            this.m_clipExportProgress.set(e, {
              exportPath: t,
              progress: 0,
              resultStatus: p._9,
            }),
              (this.m_currentlyExportingClip = e);
            const o = await a.xM.ExportClip({
                clip_id: e,
                export_mp4_path: t,
                settings: i,
                use_unique_filename: r,
              }),
              d = o.GetEResult() != p.R ? R.Failed : o.Body().result();
            return (
              d == R.Success
                ? ((0, m.tG)(`Exporting clip ${e} to ${t}`),
                  (this.m_currentlyExportingClip = null),
                  this.m_clipExportProgress.set(e, {
                    exportPath: t,
                    progress: 1,
                    resultStatus: p.R,
                  }))
                : ((0, m.tH)("Failed to export clip", e),
                  this.m_clipExportProgress.set(e, {
                    exportPath: t,
                    progress: 0,
                    resultStatus: p.zi,
                  }),
                  (this.m_currentlyExportingClip = null)),
              d
            );
          }
          UpdateClipExportPath(e, t) {
            let i = this.m_clipExportProgress.get(e);
            i && this.m_clipExportProgress.set(e, { ...i, exportPath: t });
          }
          OnExportProgress(e) {
            const t = e.Body().clip_id();
            if (
              !t ||
              !this.m_clipExportProgress.has(t) ||
              this.m_currentlyExportingClip !== t
            )
              return p.nO;
            const i = this.m_clipExportProgress.get(t);
            return (
              this.m_clipExportProgress.set(t, {
                ...i,
                progress: e.Body().progress(),
              }),
              p.R
            );
          }
          GetClipExportProgress(e) {
            return this.m_clipExportProgress.get(e);
          }
          GetCurrentExportingClip() {
            return this.m_currentlyExportingClip;
          }
          async TakeScreenshot(e, t, i, r) {
            const o = await a.xM.TakeScreenshot({
              game_id: e,
              timeline_id: t,
              timeline_offset_ms: Math.floor(i).toString(),
              source_clip_id: r,
            });
            if (o.GetEResult() == p.R) {
              const d = o.Body().toObject();
              return {
                handle: parseInt(o.Body().screenshot_id()),
                result: p.R,
              };
            } else
              return (
                (0, m.tH)("Failed to take screenshot"),
                { result: o.GetEResult() }
              );
          }
          async LazyLoadClips() {
            if (!this.m_bClipLoadingTriggered)
              try {
                this.m_bClipLoadingTriggered = !0;
                const e = await a.xM.GetClips({});
                (0, u.h5)(() => {
                  e
                    .Body()
                    .clip()
                    .forEach((i) => this.InternalAddClipSummary(i.toObject())),
                    (this.m_bLoadingClips = !1);
                });
              } catch (e) {
                (0, m.ZI)("Failed to load clips", e),
                  (this.m_bLoadingClips = !1);
              }
          }
          BLoadingClips() {
            return this.m_bLoadingClips;
          }
          BLoadingAppsWithBackgroundVideo() {
            return this.m_bLoadingAppsWithBackgroundVideo;
          }
          GetClipIDs(e) {
            var t;
            if ((this.LazyLoadClips(), e)) {
              const r = new E.VS(e);
              return (
                ((t = this.m_clipsGroupByGame.get(r.ConvertTo64BitString())) ==
                null
                  ? void 0
                  : t.map((o) => o.clip_id)) || []
              );
            }
            const i = [];
            return this.m_clips.forEach((r) => i.push(r.clip_id)), i;
          }
          GetClipSummary(e) {
            if ((this.LazyLoadClips(), this.m_clips.has(e)))
              return this.m_clips.get(e);
          }
          GetClipSummaries(e) {
            return (
              this.LazyLoadClips(),
              e
                .map((t) => {
                  if (this.m_clips.has(t)) return this.m_clips.get(t);
                })
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
            return (
              this.m_mapManualRecordingCallbacks.delete(e),
              this.m_mapManualRecordingCallbacks.set(e, t),
              () => {
                this.m_mapManualRecordingCallbacks.delete(e);
              }
            );
          }
          async StartRecording(e) {
            return (
              (0, m.q_)("Start manual recording"),
              a.xM.StartRecording({ game_id: e })
            );
          }
          async StopRecording(e) {
            (0, m.q_)("Stop manual recording");
            const t = await a.xM.StopRecording({ game_id: e });
            if (t.BSuccess()) {
              const i = t.Body().summary().toObject();
              this.InternalAddClipSummary(i);
            }
          }
          async SwitchRecordedGame(e) {
            return (
              (0, m.q_)("Switch recorded game: " + e),
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
              r.GetEResult() == p.R
                ? (0, m.tG)("User Marker Created: ", i)
                : (0, m.tH)(
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
              r.GetEResult() == p.R
                ? (0, m.tG)("User Marker Updated: ", i)
                : (0, m.tH)(
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
              o.GetEResult() == p.R
                ? (0, m.tG)("User Marker remove at " + r)
                : (0, m.tH)(
                    `Failed to remove User Marker id ${r} for game ${e} on timeline ${i} with error code ${o.GetEResult()}`,
                  ),
              o.GetEResult()
            );
          }
          async LoadThumbnails(e, t, i, r, o, d) {
            return (
              await a.xM.GetThumbnails({
                recording_id: e,
                clip_id: t,
                timeline_id: i,
                start_offset_us: r.map((f) => Math.floor(f).toString()),
                major_axis: o,
                time_precision: d ? a.$C.v : a.$C.E,
              })
            )
              .Body()
              .thumbnails();
          }
          GetAchievementInfo(e, t) {
            var i;
            return (i = this.m_fnGetAchievementInfo) == null
              ? void 0
              : i.call(this, e, t);
          }
          GetLastClip() {
            if (this.m_strLastClipID)
              return this.m_clips.get(this.m_strLastClipID);
          }
          GetBestClipTitle(e) {
            const t = this.GetClipSummary(e);
            return t ? t.name || (0, b.$z)(t.date_recorded) : "";
          }
          ManuallyDeleteRecordingForApps(e) {
            a.xM.ManuallyDeleteRecordingsForApps({ game_ids: e });
          }
          async GetTotalDiskSpaceUsage(e, t) {
            const i = t ? a.Hv.h : a.Hv.W,
              r = await a.xM.GetTotalDiskSpaceUsage({
                folder_path: e,
                type: i,
              });
            if (r.BSuccess()) {
              const o = r.Body().size();
              return Number(o);
            }
            return 0;
          }
          async GetAvailableDiskSpace() {
            const e = await a.xM.GetAvailableDiskSpace({});
            return e.BSuccess() ? e.Body().size() : 0;
          }
          ReportClipShare(e, t, i, r, o) {
            (0, m.q_)(
              `ReportClipShare ${JSON.stringify(e)} ${t} ${i} ${r} ${o}`,
            ),
              S._5.ReportClipShare(this.m_transport, {
                gameid: e.ConvertTo64BitString(),
                share_method: t,
                seconds: i,
                bytes: r.toString(),
                eresult: o,
              });
          }
          ReportClipRange(e, t, i, r, o) {
            (0, m.q_)("ReportClipRange", JSON.stringify(e), t, i, r, o);
            const d = x.w.Init(S.IR);
            d.Body().set_gameid(e.ConvertTo64BitString()),
              d.Body().set_original_range_method(t),
              d.Body().set_seconds(i),
              d.Body().start().set_original_range_method(r.originalRangeMethod),
              d.Body().start().set_latest_range_method(r.latestRangeMethod),
              d.Body().start().set_delta_ms(Math.ceil(r.relativeMS)),
              d.Body().end().set_original_range_method(o.originalRangeMethod),
              d.Body().end().set_latest_range_method(o.latestRangeMethod),
              d.Body().end().set_delta_ms(Math.ceil(o.relativeMS)),
              S._5.ReportClipRange(this.m_transport, d);
          }
          GetRecordingState() {
            return this.m_recordingState;
          }
          BEnoughDiskSpace() {
            return this.m_bEnoughDiskSpace;
          }
          OnLowDiskSpace(e) {
            return (this.m_bEnoughDiskSpace = !1), p.R;
          }
          async CheckEnoughDiskSpace() {
            const e = await a.xM.GetEnoughDiskSpace({});
            e.BSuccess()
              ? (this.m_bEnoughDiskSpace = e.Body().enough_space())
              : (0, m.tH)(
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
            ).map((o) => o.toObject());
          }
        }
        l([u.sH.shallow], n.prototype, "m_rgAppsWithBackgroundVideo", 2),
          l([u.sH], n.prototype, "m_bLoadingClips", 2),
          l([u.sH], n.prototype, "m_bLoadingAppsWithBackgroundVideo", 2),
          l([u.sH], n.prototype, "m_clips", 2),
          l([u.sH], n.prototype, "m_clipsGroupByGame", 2),
          l([u.sH], n.prototype, "m_clipExportProgress", 2),
          l([u.sH], n.prototype, "m_currentlyExportingClip", 2),
          l([u.sH], n.prototype, "m_recordingState", 2),
          l([u.sH], n.prototype, "m_bEnoughDiskSpace", 2),
          l([c.oI], n.prototype, "OnStateChanged", 1),
          l([c.oI], n.prototype, "GetTimelineLoaderForGame", 1),
          l([c.oI], n.prototype, "GetTimelineLoaderForClip", 1),
          l([c.oI], n.prototype, "GetTimelineLoaderForSharedClip", 1),
          l([c.oI], n.prototype, "OnTimelineChanged", 1),
          l([c.oI], n.prototype, "OnRecordingSessionChanged", 1),
          l([c.oI], n.prototype, "OnTimelineEntryChanged", 1),
          l([c.oI], n.prototype, "OnTimelineEntryRemoved", 1),
          l([c.oI], n.prototype, "OnClipCreated", 1),
          l([c.oI], n.prototype, "UploadClip", 1),
          l([c.oI], n.prototype, "SaveClip", 1),
          l([c.oI], n.prototype, "DeleteClip", 1),
          l([c.oI], n.prototype, "ExportClip", 1),
          l([c.oI], n.prototype, "UpdateClipExportPath", 1),
          l([c.oI], n.prototype, "OnExportProgress", 1),
          l([c.oI], n.prototype, "TakeScreenshot", 1),
          l([c.oI], n.prototype, "RegisterManualRecordingCallback", 1),
          l([c.oI], n.prototype, "StartRecording", 1),
          l([c.oI], n.prototype, "StopRecording", 1),
          l([c.oI], n.prototype, "SwitchRecordedGame", 1),
          l([c.oI], n.prototype, "CreateUserTimelineMarkers", 1),
          l([c.oI], n.prototype, "UpdateUserTimelineMarkers", 1),
          l([c.oI], n.prototype, "RemoveUserTimelineMarker", 1),
          l([c.oI], n.prototype, "LoadThumbnails", 1),
          l([c.oI], n.prototype, "GetAchievementInfo", 1),
          l([c.oI], n.prototype, "OnLowDiskSpace", 1);
        const O = n;
      },
    },
  ]);
})();
