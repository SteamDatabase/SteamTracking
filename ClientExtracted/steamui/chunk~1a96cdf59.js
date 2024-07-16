(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [3834],
  {
    86721: (e) => {
      e.exports = {
        BroadcastPlayerLite: "SAxf3Rqn792kM6c4U_vx5",
        BroadcastPlayerLiteVideo: "yCd0zjymzfw3HkVm-1YwX",
        BroadcastContext: "_3TnYLKMweBMIC69qFU6OJj",
        BroadcastPlaceholderImg: "_3hxn99MT14hFUCrUp6zbsf",
      };
    },
    72993: (e, t, s) => {
      "use strict";
      s.r(t),
        s.d(t, {
          BroadcastDetails: () => oe,
          LinkOverlay: () => ie,
          default: () => X,
        });
      var o = s(34629),
        n = s(83957),
        i = s.n(n),
        l = s(89193),
        a = s(41230),
        r = s(63696),
        d = s(31084),
        u = s(45328),
        m = s(23024),
        c = s(22709),
        p = s(65016),
        h = s(88750),
        S = s(27337),
        v = s(34204),
        g = s(59848),
        C = s(29381),
        b = s(50376),
        E = s(43397),
        _ = s(79926),
        w = s(90765),
        M = s(54644),
        y = s(46108),
        k = s(34428),
        D = s(31958),
        f = s(52451),
        O = s(72476),
        P = s(21866),
        V = s(59715),
        T = s(86721),
        B = s.n(T),
        I = s(26853);
      function N() {
        return r.createElement(
          "div",
          { className: "STV_ReplayBanner" },
          (0, y.we)("#DASHPlayerControls_IsReplay"),
        );
      }
      const L = (0, a.PA)((e) => {
        let t = e.video;
        if (t && (t.IsBroadcastClip() || t.IsBroadcastVOD())) return null;
        let s = m.fK.Loading,
          o = "";
        if (t) {
          (s = t.GetBroadcastState()), (o = t.GetBroadcastStateDescription());
          let e = t.IsBuffering();
          s == m.fK.Unlocking && ((s = m.fK.Loading), (o = "")),
            s == m.fK.Ready && e && ((s = m.fK.Loading), (o = ""));
        }
        if (t && s != m.fK.Error && t.GetUserInputNeeded()) return null;
        if (s == m.fK.Ready) return null;
        let n = s == m.fK.Loading;
        return r.createElement(
          "div",
          {
            className: "BroadcastVideoWatchState",
            style: { filter: "hue-rotate(40deg)" },
          },
          n && r.createElement(I.t, null),
          !n &&
            r.createElement(
              "div",
              { className: "BroadcastVideoWatchState_Text" },
              o,
            ),
        );
      });
      class R extends r.Component {
        OnClick() {
          m.BroadcastWatchStore.UserInputClickVideo(this.props.video);
        }
        render() {
          return r.createElement(
            "div",
            {
              className: "BroadcastVideoUserInputNeeded",
              onClick: this.OnClick,
            },
            r.createElement(b.jGG, null),
            r.createElement(
              "span",
              null,
              (0, y.we)("#DASHPlayerControls_ClickToPlay"),
            ),
          );
        }
      }
      (0, o.Cg)([f.oI], R.prototype, "OnClick", null);
      let A = class extends r.Component {
        constructor(e) {
          super(e);
        }
        HideStats() {
          this.props.closeStats && this.props.closeStats();
        }
        render() {
          let e = this.props.stats;
          return r.createElement(
            "div",
            { className: "dash_video_stats" },
            r.createElement(
              "button",
              { className: "dash_stat_close_button", onClick: this.HideStats },
              r.createElement(b.sED, null),
            ),
            r.createElement(
              "div",
              null,
              (0, y.we)("#DASHPlayerStats_BufferingResolution"),
              " ",
              r.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetBufferingResolutionToDisplay(),
              ),
            ),
            r.createElement(
              "div",
              null,
              (0, y.we)("#DASHPlayerStats_PlaybackResolution"),
              " ",
              r.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetPlaybackResolutionToDisplay(),
              ),
            ),
            r.createElement(
              "div",
              null,
              (0, y.we)("#DASHPlayerStats_HtmlResolution"),
              " ",
              r.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetHTMLVideoResolutionToDisplay(),
              ),
            ),
            r.createElement(
              "div",
              null,
              (0, y.we)("#DASHPlayerStats_ContentServer"),
              " ",
              r.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetContentServerToDisplay(),
              ),
            ),
            r.createElement(
              "div",
              null,
              (0, y.we)("#DASHPlayerStats_StallEvents"),
              " ",
              r.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetStalledEventsToDisplay(),
              ),
            ),
            r.createElement(
              "div",
              null,
              (0, y.we)("#DASHPlayerStats_FailedDownloads"),
              " ",
              r.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetFailedDownloadsToDisplay(),
              ),
            ),
            r.createElement(
              "div",
              null,
              (0, y.we)("#DASHPlayerStats_TimeToFirstFrame"),
              " ",
              r.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetTimeToFirstFrameToDisplay(),
              ),
            ),
            r.createElement(
              "div",
              null,
              (0, y.we)("#DASHPlayerStats_PlaybackRate"),
              " ",
              r.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetPlaybackRateForDisplay(),
              ),
            ),
            r.createElement(G, { stats: e }),
          );
        }
      };
      (0, o.Cg)([f.oI], A.prototype, "HideStats", null),
        (A = (0, o.Cg)([a.PA], A));
      let G = class extends r.Component {
        constructor(e) {
          super(e);
        }
        createBufferedRange(e) {
          let t = this.props.stats,
            s = [],
            o = e ? "vidbuf" : "audbuf",
            n = e
              ? t.GetNumBufferedVideoRanges()
              : t.GetNumBufferedAudioRanges();
          if (n > 0)
            for (let i = 0; i < n; ++i) {
              let n = (0, y.we)(
                  e
                    ? "#DASHPlayerStats_VideoBufferRange"
                    : "#DASHPlayerStats_AudioBufferRange",
                  i,
                ),
                l = e
                  ? t.GetBufferedVideoSegmentForDisplay(i)
                  : t.GetBufferedAudioSegmentForDisplay(i);
              s.push(
                r.createElement(
                  "div",
                  { key: o + i },
                  n,
                  " ",
                  r.createElement("span", { className: "videoStatsValue" }, l),
                ),
              );
            }
          else {
            let t = (0, y.we)(
              e
                ? "#DASHPlayerStats_VideoNoRangeInformation"
                : "#DASHPlayerStats_AudioNoRangeInformation",
            );
            s.push(r.createElement("div", { key: o + "none" }, t));
          }
          return s;
        }
        render() {
          let e = this.props.stats;
          return r.createElement(
            "div",
            { className: "dash_video_quick_stats" },
            r.createElement(
              "div",
              null,
              (0, y.we)("#DASHPlayerStats_BytesReceived"),
              " ",
              r.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetBytesReceivedToDisplay(),
              ),
            ),
            this.props.stats.BHasFrameInformation() &&
              r.createElement(
                "div",
                null,
                (0, y.we)("#DASHPlayerStats_DroppedFrames"),
                " ",
                r.createElement(
                  "span",
                  { className: "videoStatsValue" },
                  e.GetDroppedFramesToDisplay(),
                ),
              ),
            r.createElement(
              "div",
              null,
              (0, y.we)("#DASHPlayerStats_VideoBuffered"),
              " ",
              r.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetVideoBufferedToDisplay(),
                " ",
              ),
            ),
            r.createElement(
              "div",
              null,
              (0, y.we)("#DASHPlayerStats_AudioBuffered"),
              " ",
              r.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetAudioBufferedToDisplay(),
                " ",
              ),
            ),
            this.createBufferedRange(!0),
            this.createBufferedRange(!1),
            r.createElement(
              "div",
              null,
              (0, y.we)("#DASHPlayerStats_BandwidthRequired"),
              " ",
              r.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetBandwidthRequiredToDisplay(),
              ),
            ),
            r.createElement(
              "div",
              null,
              (0, y.we)("#DASHPlayerStats_BandwidthVideo"),
              " ",
              r.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetBandwithVideoToDisplay(),
              ),
            ),
            r.createElement(
              "div",
              null,
              (0, y.we)("#DASHPlayerStats_BandwidthNums"),
              " ",
              r.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetBandwidthStatsToDisplay(),
              ),
            ),
            r.createElement(
              "div",
              null,
              (0, y.we)("#DASHPlayerStats_DownloadNums"),
              " ",
              r.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetDownloadTimeStatsToDisplay(),
              ),
            ),
            r.createElement(
              "div",
              null,
              (0, y.we)("#DASHPlayerStats_ActiveDownloads"),
              " ",
              r.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetActiveDownloadsToDisplay(),
              ),
            ),
            r.createElement(
              "div",
              null,
              (0, y.we)("#DASHPlayerStats_VideoDownloadProgress"),
              " ",
              r.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetVideoDownloadProgressToDisplay(),
              ),
            ),
            r.createElement(
              "div",
              null,
              (0, y.we)("#DASHPlayerStats_DroppingFrames"),
              " ",
              r.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetPersistentFrameDropsForDisplay(),
              ),
            ),
            r.createElement(
              "div",
              null,
              (0, y.we)("#DASHPlayerStats_CurrentFPS"),
              " ",
              r.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetCurrentFPSForDisplay(),
              ),
            ),
          );
        }
      };
      G = (0, o.Cg)([a.PA], G);
      var H = s(32263);
      class F extends r.Component {
        m_elSettingsButton;
        m_SettingsButtonPos;
        m_elClickListener;
        m_elSettingsPanel;
        m_elSubtitlesButton = r.createRef();
        m_elSubtitlesPanel = r.createRef();
        m_SubtitlesButtonPos;
        constructor(e) {
          super(e), (this.state = { bSettingsOpen: !1, bSubtitlesOpen: !1 });
        }
        OnVideoControlClick(e) {
          this.setState({ bSettingsOpen: !this.state.bSettingsOpen }),
            (this.m_SettingsButtonPos = [
              this.m_elSettingsButton.offsetLeft,
              this.m_elSettingsButton.offsetTop,
            ]),
            (this.m_elClickListener =
              e.currentTarget.ownerDocument.defaultView),
            this.m_elClickListener.addEventListener(
              "mouseup",
              this.OnMouseUp,
              !0,
            );
        }
        OnSubtitlesClick(e) {
          this.setState({ bSubtitlesOpen: !this.state.bSubtitlesOpen }),
            (this.m_SubtitlesButtonPos = [
              this.m_elSubtitlesButton.current.offsetLeft,
              this.m_elSubtitlesButton.current.offsetTop,
            ]),
            (this.m_elClickListener =
              e.currentTarget.ownerDocument.defaultView),
            this.m_elClickListener.addEventListener(
              "mouseup",
              this.OnMouseUp,
              !0,
            );
        }
        OnMouseUp(e) {
          this.m_elClickListener.removeEventListener(
            "mouseup",
            this.OnMouseUp,
            !0,
          ),
            (0, M.id)(this.m_elSettingsPanel, e.target) ||
              this.setState({ bSettingsOpen: !1 }),
            (0, M.id)(this.m_elSubtitlesPanel.current, e.target) ||
              this.setState({ bSubtitlesOpen: !1 });
        }
        bindSettingsButton(e) {
          this.m_elSettingsButton = e;
        }
        BindSettingsPanel(e) {
          this.m_elSettingsPanel = e;
        }
        OnShowStats(e) {
          this.props.onShowStats(e),
            this.setState({ bSettingsOpen: !this.state.bSettingsOpen });
        }
        render() {
          let e = !1,
            t = !1;
          const { video: s, actions: o } = this.props;
          let n,
            i,
            l = 0,
            a = r.createElement("div", {
              key: "separator",
              className: "settingsMenuSeparator",
            });
          if (
            (this.state.bSettingsOpen &&
              ((e = !0),
              (n = this.props.video.GetVideoRepresentations()),
              (i = n.map((e) =>
                r.createElement(
                  H.n,
                  {
                    key: e.id,
                    onClick: () => {
                      this.props.video.SetVideoRepresentation(e),
                        this.setState({
                          bSettingsOpen: !this.state.bSettingsOpen,
                        });
                    },
                    bChecked: e.selected,
                  },
                  e.displayName,
                ),
              )),
              i.push(a),
              i.push(
                r.createElement(
                  H.D,
                  { key: "statsToggle", onClick: this.OnShowStats },
                  (0, y.we)("#Broadcast_VideoContext_ToggleStats"),
                  "\t",
                ),
              ),
              (l = 0 - (21 * i.length + 32))),
            this.state.bSubtitlesOpen)
          ) {
            (t = !0),
              (i = []),
              i.push(
                r.createElement(
                  H.n,
                  {
                    key: "none",
                    onClick: () => {
                      this.props.video.SetSubtitles(null),
                        this.setState({
                          bSubtitlesOpen: !this.state.bSubtitlesOpen,
                        });
                    },
                    className: "NoSubtitles",
                    bChecked: !1,
                  },
                  (0, y.we)("#Broadcast_None"),
                ),
              );
            for (let e = 0; e < this.props.video.ListSubtitles().length; e++) {
              const t = this.props.video.ListSubtitles()[e];
              i.push(
                r.createElement(
                  H.n,
                  {
                    key: t.language,
                    onClick: () => {
                      this.props.video.SetSubtitles(t.language),
                        this.setState({
                          bSubtitlesOpen: !this.state.bSubtitlesOpen,
                        });
                    },
                    bChecked: "showing" === t.mode,
                  },
                  t.label,
                ),
              );
            }
            l = -292;
          }
          const d =
            this.props.video.BHasPlayer() && this.props.video.BHasTimedText();
          return r.createElement(
            "div",
            { className: "STV_BroadcastSettings" },
            d &&
              r.createElement(
                "div",
                {
                  className:
                    "videoControlButton" + (d ? " ClosedCaptionsActive" : ""),
                  onClick: this.OnSubtitlesClick,
                  ref: this.m_elSubtitlesButton,
                },
                r.createElement(b.N8C, null),
              ),
            r.createElement(
              "div",
              {
                className:
                  "videoControlButton VideoSettings " +
                  (e ? " VideoSettingsOpen" : ""),
                onClick: this.OnVideoControlClick,
                ref: this.bindSettingsButton,
              },
              r.createElement(b.wB_, null),
            ),
            r.createElement(x, { video: s }),
            o &&
              o.map((e) =>
                r.createElement(
                  "div",
                  {
                    key: e.key,
                    className: "videoControlButton videoControlFitWidth",
                  },
                  e,
                ),
              ),
            e &&
              r.createElement(
                "div",
                {
                  ref: this.BindSettingsPanel,
                  className: "STV_BroadcastSettingsPanel",
                  style: {
                    left: this.m_SettingsButtonPos[0],
                    top: this.m_SettingsButtonPos[1],
                    marginTop: l,
                  },
                },
                r.createElement(
                  "div",
                  { className: "STV_BroadcastSettingsMenuItems" },
                  i,
                ),
              ),
            t &&
              r.createElement(
                "div",
                {
                  ref: this.m_elSubtitlesPanel,
                  className: "STV_BroadcastSettingsPanel SubtitlesMenu",
                  style: {
                    maxHeight: "260px",
                    left: this.m_SubtitlesButtonPos[0],
                    top: this.m_SubtitlesButtonPos[1],
                    marginTop: l,
                  },
                },
                r.createElement(
                  "div",
                  { className: "STV_BroadcastSettingsMenuItems" },
                  i,
                ),
              ),
          );
        }
      }
      (0, o.Cg)([f.oI], F.prototype, "OnVideoControlClick", null),
        (0, o.Cg)([f.oI], F.prototype, "OnSubtitlesClick", null),
        (0, o.Cg)([f.oI], F.prototype, "OnMouseUp", null),
        (0, o.Cg)([f.oI], F.prototype, "bindSettingsButton", null),
        (0, o.Cg)([f.oI], F.prototype, "BindSettingsPanel", null),
        (0, o.Cg)([f.oI], F.prototype, "OnShowStats", null);
      let x = class extends r.Component {
        constructor(e) {
          super(e), (0, l.Gn)(this);
        }
        k_nHideSliderTimeout = 1500;
        m_bShowSlider = true;
        m_schHideSlider = new _.LU();
        m_bChildDragging = !1;
        m_bMouseOver = !1;
        componentWillUnmount() {
          this.m_schHideSlider.Cancel();
        }
        ToggleMute() {
          let e = this.props.video,
            t = e.IsMuted();
          e.SetMute(!t), e.GetVolume() < 0.01 && e.SetVolume(0.5);
        }
        OnMouseEnter(e) {
          (this.m_bShowSlider = !0),
            (this.m_bMouseOver = !0),
            this.m_schHideSlider.Cancel();
        }
        OnMouseLeave(e) {
          (this.m_bMouseOver = !1), this.ScheduleHide();
        }
        OnChildDrag(e) {
          (this.m_bChildDragging = e), this.ScheduleHide();
        }
        ScheduleHide() {
          this.m_bMouseOver ||
            this.m_bChildDragging ||
            this.m_schHideSlider.Schedule(
              this.k_nHideSliderTimeout,
              () => (this.m_bShowSlider = true),
            );
        }
        render() {
          let e = this.props.video,
            t = e.IsMuted(),
            s = 100 * e.GetVolume(),
            o = "videoControlButton";
          s > 65
            ? (o += " HighestVolume")
            : s > 45
              ? (o += " HighVolume")
              : s < 46 && s > 24
                ? (o += " MedVolume")
                : s < 25 && (o += " LowVolume");
          let n = "BroadcastVolumeControl";
          return (
            this.m_bShowSlider && (n += " ShowVolumeSlider"),
            t && (n += " muted"),
            r.createElement(
              "div",
              {
                className: n,
                onMouseEnter: this.OnMouseEnter,
                onMouseLeave: this.OnMouseLeave,
              },
              r.createElement(
                "div",
                { className: "BroadcastVolumeControl_FixedLayout" },
                r.createElement(
                  "div",
                  { className: o, onClick: this.ToggleMute },
                  r.createElement(b.fSs, null),
                ),
                r.createElement(U, { video: e, onDrag: this.OnChildDrag }),
              ),
            )
          );
        }
      };
      (0, o.Cg)([l.sH], x.prototype, "m_bShowSlider", void 0),
        (0, o.Cg)([f.oI], x.prototype, "ToggleMute", null),
        (0, o.Cg)([f.oI], x.prototype, "OnMouseEnter", null),
        (0, o.Cg)([f.oI], x.prototype, "OnMouseLeave", null),
        (0, o.Cg)([f.oI], x.prototype, "OnChildDrag", null),
        (x = (0, o.Cg)([a.PA], x));
      let U = class extends r.Component {
        constructor(e) {
          super(e), (0, l.Gn)(this);
        }
        m_elSlider = null;
        m_nVolumeStartOfDrag = 0;
        OnMouseDown(e) {
          let t = e.currentTarget;
          (this.m_elSlider = t),
            (this.m_nVolumeStartOfDrag = this.props.video.GetVolume()),
            this.SetVolumeWithCoord(t, e.clientX),
            t.ownerDocument.defaultView.addEventListener(
              "mousemove",
              this.OnMouseMove,
            ),
            t.ownerDocument.defaultView.addEventListener(
              "mouseup",
              this.OnMouseUp,
            ),
            this.props.onDrag(!0);
        }
        OnMouseMove(e) {
          this.m_elSlider &&
            this.SetVolumeWithCoord(this.m_elSlider, e.clientX);
        }
        OnMouseUp(e) {
          if (!this.m_elSlider) return;
          this.SetVolumeWithCoord(this.m_elSlider, e.clientX);
          let t = this.props.video;
          t.IsMuted() && t.SetVolume(this.m_nVolumeStartOfDrag),
            this.m_elSlider.ownerDocument.defaultView.removeEventListener(
              "mousemove",
              this.OnMouseMove,
            ),
            this.m_elSlider.ownerDocument.defaultView.removeEventListener(
              "mouseup",
              this.OnMouseUp,
            ),
            (this.m_nVolumeStartOfDrag = 0),
            (this.m_elSlider = null),
            this.props.onDrag(!1);
        }
        SetVolumeWithCoord(e, t) {
          let s = e.getBoundingClientRect(),
            o = D.Fu(t, s.left, s.right, 0, 1),
            n = D.OQ(o, 0, 1),
            i = this.props.video;
          i.SetMute(o < 0.01), i.SetVolume(n);
        }
        render() {
          let e = this.props.video,
            t = 100 * e.GetVolume();
          e.IsMuted() && (t = 0);
          let s = { left: `${t}%` },
            o = { width: `${t}%` };
          return r.createElement(
            "div",
            {
              className: "BroadcastVolumeSlider",
              onMouseDown: this.OnMouseDown,
            },
            r.createElement("div", {
              className: "BroadcastVolumeSlider_Track",
            }),
            r.createElement("div", {
              className: "BroadcastVolumeSlider_Fill",
              style: o,
            }),
            r.createElement("div", {
              className: "BroadcastVolumeSlider_Thumb",
              style: s,
            }),
          );
        }
      };
      (0, o.Cg)([f.oI], U.prototype, "OnMouseDown", null),
        (0, o.Cg)([f.oI], U.prototype, "OnMouseMove", null),
        (0, o.Cg)([f.oI], U.prototype, "OnMouseUp", null),
        (0, o.Cg)([l.XI], U.prototype, "SetVolumeWithCoord", null),
        (U = (0, o.Cg)([a.PA], U));
      var z = s(92008);
      const W = 15;
      let J = class extends r.Component {
        m_schHideControls = new _.LU();
        m_schUnmountControls = new _.LU();
        m_elVideo = null;
        m_elBroadcastPlayer = null;
        m_bMouseDown = !1;
        m_elMouseDown = null;
        m_listeners = new _.Ji();
        m_cancelSignal = i().CancelToken.source();
        constructor(e) {
          super(e),
            (this.state = {
              bMountControls: !1,
              bControlsVisible: !1,
              bShowStats: !1,
              video: null,
              nResizedHeight: null,
              bFullscreen: !1,
            });
        }
        StopVideo() {
          let e = this.state.video;
          e &&
            (m.BroadcastWatchStore.StopVideo(e),
            this.setState({ video: null }));
        }
        IsMuted() {
          let e = this.state.video;
          return !e || e.IsMuted();
        }
        StopPlaybackTillUserInput() {
          let e = this.state.video;
          e && e.StopPlaybackTillUserInput();
        }
        componentDidUpdate(e, t) {
          !t.bMountControls && this.state.bMountControls
            ? setTimeout(() => {
                this.setState((e) => ({ bControlsVisible: e.bMountControls }));
              }, 15)
            : t.bControlsVisible &&
              !this.state.bControlsVisible &&
              this.state.video &&
              !this.state.video.IsPaused() &&
              this.m_schUnmountControls.Schedule(2e3, this.UmountControls),
            this.props.steamIDBroadcast !== e.steamIDBroadcast &&
              this.BindVideoRef(this.m_elVideo),
            !this.props.nAppIDVOD ||
              (void 0 !== t.strInitialCapsuleImageUrl &&
                e.nAppIDVOD == this.props.nAppIDVOD) ||
              c.A.Get()
                .QueueAppRequest(this.props.nAppIDVOD, {
                  include_assets: !0,
                  include_trailers: !0,
                })
                .then(() => {
                  const e = c.A.Get().GetApp(this.props.nAppIDVOD),
                    t = e?.GetAssets().GetMainCapsuleURL() || "";
                  this.setState({ strInitialCapsuleImageUrl: t });
                });
        }
        componentWillUnmount() {
          this.m_listeners.Unregister(),
            this.m_schHideControls.Cancel(),
            this.m_schUnmountControls.Cancel(),
            this.StopVideo();
        }
        BindBroadcastPlayerRef(e) {
          this.m_listeners.Unregister(),
            (this.m_elBroadcastPlayer = e),
            e &&
              (this.m_listeners.AddEventListener(
                e,
                "fullscreenchange",
                this.OnFullscreenChange,
              ),
              this.m_listeners.AddEventListener(
                e,
                "mozfullscreenchange",
                this.OnFullscreenChange,
              ),
              this.m_listeners.AddEventListener(
                e,
                "webkitfullscreenchange",
                this.OnFullscreenChange,
              ),
              this.m_listeners.AddEventListener(
                e,
                "msfullscreenchange",
                this.OnFullscreenChange,
              ));
        }
        BindVideoRef(e) {
          let t;
          this.StopVideo(),
            this.props.steamIDBroadcast
              ? e &&
                (t = m.BroadcastWatchStore.CreateBroadcastVideo(
                  e,
                  this.props.steamIDBroadcast,
                  this.props.watchLocation,
                  this.props.bWebRTC,
                ))
              : this.props.broadcastClipID
                ? e &&
                  (t = m.BroadcastWatchStore.CreateClipVideo(
                    e,
                    this.props.broadcastClipID,
                    this.props.watchLocation,
                  ))
                : this.props.nAppIDVOD &&
                  e &&
                  ((t = m.BroadcastWatchStore.CreateVODVideo(
                    e,
                    this.props.nAppIDVOD,
                    this.props.watchLocation,
                  )),
                  this.props.fnOnVideoEnd &&
                    t.SetOnVideoCallback(this.props.fnOnVideoEnd)),
            t &&
              (this.props.bStartMuted && t.SetMute(!0),
              this.props.bStartPaused
                ? t.StopPlaybackTillUserInput()
                : t.Play()),
            this.setState({ video: t }),
            (this.m_elVideo = e);
        }
        OnMouseDown(e) {
          (this.m_bMouseDown = !0),
            (this.m_elMouseDown = e.currentTarget),
            this.m_elMouseDown.ownerDocument.defaultView.addEventListener(
              "mouseup",
              this.OnMouseUp,
            );
        }
        OnMouseUp(e) {
          (this.m_bMouseDown = !1),
            this.m_elMouseDown.ownerDocument.defaultView.removeEventListener(
              "mouseup",
              this.OnMouseUp,
            ),
            this.m_schHideControls.Schedule(3200, this.HideControls);
        }
        OnMouseMove(e) {
          this.m_schHideControls.Cancel(),
            this.m_schUnmountControls.Cancel(),
            this.state.bMountControls
              ? this.state.bControlsVisible ||
                this.setState({ bControlsVisible: !0 })
              : this.setState({ bMountControls: !0 }),
            this.m_schHideControls.Schedule(3200, this.HideControls);
        }
        OnMouseLeave(e) {
          this.HideControls();
        }
        HideControls() {
          this.state.bControlsVisible &&
            !this.m_bMouseDown &&
            this.setState({ bControlsVisible: !1 });
        }
        UmountControls() {
          this.setState((e) => {
            if (!e.bControlsVisible && e.bMountControls)
              return { bMountControls: !1 };
          });
        }
        ShowStatsView() {
          let e = this.state.video;
          e &&
            (this.state.bShowStats ||
              (this.setState({ bShowStats: !0 }), e.SetStatsViewIsVisible(!0)));
        }
        OnContextMenu(e) {
          this.state.bFullscreen ||
            ((0, d.lX)(
              r.createElement(h.tz, null, this.GetContextMenuItems()),
              e,
            ),
            e.preventDefault());
        }
        ToggleStatsView(e) {
          let t = !this.state.bShowStats;
          this.setState({ bShowStats: t });
          let s = this.state.video;
          s && s.SetStatsViewIsVisible(t);
        }
        ShowStorePage(e) {
          let t = this.state.video;
          if (!t || !this.props.onOpenLinkInNewWindow) return;
          let s = t.GetBroadcastInfo();
          if (!s) return;
          let o = (0, u.k2)(`${O.TS.STORE_BASE_URL}app/${s.m_strAppId}`);
          this.props.onOpenLinkInNewWindow(e, o), e.stopPropagation();
        }
        GetContextMenuItems() {
          let e = [],
            t = this.state.video;
          if (!t) return e;
          let s = t.GetBroadcastInfo();
          return (
            e.push(
              r.createElement(
                h.IK,
                {
                  key: "togglestats",
                  bChecked: this.state.bShowStats,
                  onSelected: (e) => {
                    this.ToggleStatsView(e);
                  },
                },
                (0, y.we)("#Broadcast_VideoContext_ToggleStats"),
              ),
            ),
            s &&
              "0" != s.m_strAppId &&
              Number.parseInt(s.m_strAppId) != m.fO &&
              e.push(
                r.createElement(
                  h.kt,
                  {
                    key: "visitstore",
                    onSelected: (e) => {
                      this.ShowStorePage(e);
                    },
                  },
                  (0, y.we)("#Broadcast_VideoContext_OpenStore"),
                ),
              ),
            e
          );
        }
        CloseStats() {
          let e = this.state.video;
          e &&
            this.state.bShowStats &&
            (this.setState({ bShowStats: !1 }), e.SetStatsViewIsVisible(!1));
        }
        OnToggleFullscreen() {
          this.m_elBroadcastPlayer &&
            ((0, M.ww)(this.m_elBroadcastPlayer)
              ? (0, M.MS)(this.m_elBroadcastPlayer)
              : (0, M.tl)(this.m_elBroadcastPlayer, this.m_elVideo));
        }
        OnFullscreenChange(e) {
          if (!this.m_elBroadcastPlayer) return;
          let t = (0, M.ww)(this.m_elBroadcastPlayer);
          this.setState({ bFullscreen: t });
        }
        BHideVideoControls() {
          let e = this.state.video;
          return (
            !e ||
            !!e.GetUserInputNeeded() ||
            m.BroadcastWatchStore.GetBroadcastState(e) == m.fK.Error
          );
        }
        render() {
          const e = this.state.video,
            t = e && e.IsPaused(),
            s = e && e.BHasDASHStats() && this.state.bShowStats,
            o = Boolean(e && e.IsReplay()),
            n = this.state.bMountControls,
            i = this.state.bControlsVisible || t,
            l = e && e.GetUserInputNeeded(),
            a =
              e?.IsBroadcastVOD() && l && this.state.strInitialCapsuleImageUrl;
          let d = "videoContainer";
          i || (d += " HidePlayerControls"),
            t && (d += " VideoPaused"),
            this.state.bFullscreen && (d += " fullscreenVideo"),
            this.props.classes && (d += " " + this.props.classes);
          let u = [];
          !this.state.bFullscreen &&
            this.props.actions &&
            (u = u.concat(this.props.actions)),
            !this.state.bFullscreen &&
              this.props.onTheaterMode &&
              u.push(
                r.createElement("div", {
                  key: "ChatPosToggle ChatTheaterToggle",
                  onClick: this.props.onTheaterMode,
                  title: (0, y.we)("#Broadcast_View_Theater"),
                  className: "BroadcastTheaterToggle",
                }),
              ),
            u.push(
              r.createElement("div", {
                key: "FullscreenToggle",
                title: (0, y.we)("#Broadcast_View_Fullscreen"),
                onClick: this.OnToggleFullscreen,
                className: "BroadcastFullscreenToggle",
              }),
            );
          const m = n && !this.BHideVideoControls(),
            c = n && !this.state.bFullscreen,
            h =
              this.props.fnRenderBroadcastContext &&
              this.props.fnRenderBroadcastContext();
          return r.createElement(
            "div",
            {
              ref: this.BindBroadcastPlayerRef,
              className: d,
              onMouseMove: this.OnMouseMove,
              onClick: this.OnMouseMove,
              onMouseLeave: this.OnMouseLeave,
              onContextMenu: this.OnContextMenu,
              onMouseDown: this.OnMouseDown,
            },
            h && r.createElement("div", { className: B().BroadcastContext }, h),
            o && r.createElement(N, null),
            this.props.showVideoBackgroundBlur &&
              r.createElement(p.m, {
                className: "videoBlur",
                elementRef: this.m_elVideo,
                updateRate: 33,
                width: 320,
                height: 180,
                reductionFactor: 10,
                blurAmount: 5,
              }),
            r.createElement("video", {
              className: "videoSrc",
              ref: this.BindVideoRef,
              muted: !0,
              autoPlay: !0,
              playsInline: !0,
              controls: !1,
            }),
            this.props.linkRegions
              ? r.createElement(ie, {
                  linkRegions: this.props.linkRegions,
                  editMode: this.props.editMode,
                  onSaveLinkRegions: this.props.onSaveLinkRegions,
                })
              : null,
            this.props.linkElement,
            a &&
              r.createElement("img", {
                loading: "lazy",
                className: (0, w.A)(
                  B().BroadcastPlaceholderImg,
                  "BroadcastPlaceholderImg",
                ),
                src: this.state.strInitialCapsuleImageUrl,
              }),
            m &&
              r.createElement(j, {
                video: e,
                actions: u,
                onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                onShowStats: this.ToggleStatsView,
                bIncludeClipEditor: this.props.bIncludeClipEditor,
              }),
            c && r.createElement(K, { onClick: this.props.onRequestClose }),
            s &&
              r.createElement(A, {
                stats: e.GetDASHPlayerStats(),
                closeStats: this.CloseStats,
              }),
            r.createElement(L, { video: e }),
            l && r.createElement(R, { video: e }),
          );
        }
      };
      (0, o.Cg)([f.oI], J.prototype, "BindBroadcastPlayerRef", null),
        (0, o.Cg)([f.oI], J.prototype, "BindVideoRef", null),
        (0, o.Cg)([f.oI], J.prototype, "OnMouseDown", null),
        (0, o.Cg)([f.oI], J.prototype, "OnMouseUp", null),
        (0, o.Cg)([f.oI], J.prototype, "OnMouseMove", null),
        (0, o.Cg)([f.oI], J.prototype, "OnMouseLeave", null),
        (0, o.Cg)([f.oI], J.prototype, "HideControls", null),
        (0, o.Cg)([f.oI], J.prototype, "UmountControls", null),
        (0, o.Cg)([f.oI], J.prototype, "ShowStatsView", null),
        (0, o.Cg)([f.oI], J.prototype, "OnContextMenu", null),
        (0, o.Cg)([f.oI], J.prototype, "ToggleStatsView", null),
        (0, o.Cg)([f.oI], J.prototype, "ShowStorePage", null),
        (0, o.Cg)([f.oI], J.prototype, "CloseStats", null),
        (0, o.Cg)([f.oI], J.prototype, "OnToggleFullscreen", null),
        (0, o.Cg)([f.oI], J.prototype, "OnFullscreenChange", null),
        (J = (0, o.Cg)([a.PA], J));
      const X = J;
      let j = class extends r.Component {
        render() {
          const { video: e } = this.props;
          if (!e) return null;
          let t = e.has_segments;
          return r.createElement(
            "div",
            { className: "videoControls" },
            r.createElement(oe, {
              steamID: this.props.video.GetBroadcastSteamID(),
              bHideThumbnail: !0,
              bVerticalBroadcastChat: !0,
              onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
            }),
            r.createElement(
              "div",
              { className: "videoControlsBottom" + (t ? "" : " noSegments") },
              r.createElement(se, {
                video: e,
                bIncludeClipEditor: this.props.bIncludeClipEditor,
              }),
              r.createElement(
                "div",
                { className: "STV_BroadcastController" },
                r.createElement("div", {
                  className: "videoControlsButtons LeftSpacer",
                }),
                r.createElement(q, { video: e }),
                r.createElement(Q, { video: e }),
                r.createElement(F, {
                  video: e,
                  actions: this.props.actions,
                  onShowStats: this.props.onShowStats,
                }),
              ),
            ),
          );
        }
      };
      j = (0, o.Cg)([a.PA], j);
      class K extends r.PureComponent {
        render() {
          return this.props.onClick
            ? r.createElement(
                "div",
                {
                  className: "STV_BroadcastClose",
                  onClick: this.props.onClick,
                },
                r.createElement(b.sED, null),
              )
            : null;
        }
      }
      class q extends r.Component {
        OnJumpBackward() {
          this.props.video.JumpTime(-15);
        }
        OnJumpForward() {
          this.props.video.JumpTime(W);
        }
        render() {
          let e = this.props.video,
            t = e.CanSeek();
          return r.createElement(
            "div",
            { className: "videoControlsButtons PlayControls" },
            r.createElement(Y, { video: e }),
            t &&
              r.createElement(
                "div",
                {
                  className: "videoControlButton videoControlJump controlFlip",
                  onClick: this.OnJumpBackward,
                },
                r.createElement(b.tID, {
                  bHidePostArrow: !0,
                  bHidePreArrow: !0,
                  bShowJumpAheadBox: !0,
                  bFlipHorizontal: !0,
                }),
                r.createElement("div", { className: "jumpAheadValue" }, W),
              ),
            r.createElement($, { video: e }),
            t &&
              r.createElement(
                "div",
                {
                  className: "videoControlButton videoControlJump",
                  onClick: this.OnJumpForward,
                },
                r.createElement(b.tID, {
                  bHidePostArrow: !0,
                  bHidePreArrow: !0,
                  bShowJumpAheadBox: !0,
                  bFlipHorizontal: !1,
                }),
                r.createElement("div", { className: "jumpAheadValue" }, W),
              ),
            t && r.createElement(Z, { video: e }),
          );
        }
      }
      (0, o.Cg)([f.oI], q.prototype, "OnJumpBackward", null),
        (0, o.Cg)([f.oI], q.prototype, "OnJumpForward", null);
      const Q = (0, a.PA)((e) => {
        if (e.video.IsBroadcastClip() || e.video.IsBroadcastVOD()) return null;
        let t = e.video.IsOnLiveEdge();
        return r.createElement(
          "div",
          { className: "videoControlsButtons GoLive" },
          r.createElement(
            "div",
            {
              className:
                "videoControlButton videoControlGoLive" +
                (t ? " isLiveEdge" : ""),
              onClick: t
                ? null
                : (t) => {
                    e.video.JumpToLiveEdge();
                  },
            },
            r.createElement(b.tID, {
              bHidePreArrow: !0,
              bHidePostArrow: !0,
              bFlipHorizontal: !1,
            }),
            r.createElement(
              "div",
              { className: "jumpGoLive" },
              (0, y.we)(
                t ? "#DASHPlayerControls_IsLive" : "#DASHPlayerControls_GoLive",
              ),
            ),
          ),
        );
      });
      let $ = class extends r.Component {
        OnTogglePlayPause() {
          this.props.video.TogglePlayPause();
        }
        render() {
          let e = this.props.video.IsPaused();
          return r.createElement(
            "div",
            {
              className: "videoControlButton buttonPlayPause",
              onClick: this.OnTogglePlayPause,
            },
            e ? r.createElement(b.jGG, null) : r.createElement(b.vRz, null),
          );
        }
      };
      (0, o.Cg)([f.oI], $.prototype, "OnTogglePlayPause", null),
        ($ = (0, o.Cg)([a.PA], $));
      let Y = class extends r.Component {
        constructor(e) {
          super(e), (0, l.Gn)(this), (this.video = e.video);
        }
        componentDidUpdate() {
          this.video = this.props.video;
        }
        video = void 0;
        get has_previous_marker() {
          return void 0 !== this.GetPreviousMarkerTime();
        }
        GetPreviousMarkerTime() {
          if (!this.video.has_markers) return;
          let e = this.video.GetTimelineMarkers(),
            t = this.video.GetPlaybackTime();
          for (let s = e.length - 1; s >= 0; s--)
            if (!(e[s].nTime >= t)) return e[s].nTime;
        }
        OnJumpToPreviousMarkerClicked(e) {
          let t = this.GetPreviousMarkerTime();
          void 0 !== t && this.props.video.Seek(t - 0.2);
        }
        render() {
          let e = this.props.video.BHasMarkersOrSegments();
          return r.createElement(
            "div",
            {
              className:
                "videoControlButton jumpToMarker controlFlip" +
                (e ? "" : " noMarkersOrSegments") +
                (this.has_previous_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToPreviousMarkerClicked,
            },
            r.createElement(b.tID, { bHidePostArrow: !0, bFlipHorizontal: !0 }),
          );
        }
      };
      (0, o.Cg)([l.sH], Y.prototype, "video", void 0),
        (0, o.Cg)([l.EW], Y.prototype, "has_previous_marker", null),
        (0, o.Cg)([f.oI], Y.prototype, "OnJumpToPreviousMarkerClicked", null),
        (Y = (0, o.Cg)([a.PA], Y));
      let Z = class extends r.Component {
        constructor(e) {
          super(e), (0, l.Gn)(this), (this.video = e.video);
        }
        componentDidUpdate() {
          this.video = this.props.video;
        }
        video = void 0;
        get has_next_marker() {
          return void 0 !== this.GetNextMarkerTime();
        }
        GetNextMarkerTime() {
          if (!this.video.has_markers) return;
          let e = this.video.GetTimelineMarkers(),
            t = this.video.GetPlaybackTime();
          for (let s = 0; s < e.length; s++)
            if (!(e[s].nTime <= t)) return e[s].nTime;
        }
        OnJumpToNextMarkerClicked(e) {
          let t = this.GetNextMarkerTime();
          void 0 !== t && this.props.video.Seek(t);
        }
        render() {
          let e = this.props.video.BHasMarkersOrSegments();
          return r.createElement(
            "div",
            {
              className:
                "videoControlButton jumpToMarker" +
                (e ? "" : " noMarkersOrSegments") +
                (this.has_next_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToNextMarkerClicked,
            },
            r.createElement(b.tID, { bHidePostArrow: !0, bFlipHorizontal: !1 }),
          );
        }
      };
      (0, o.Cg)([l.sH], Z.prototype, "video", void 0),
        (0, o.Cg)([l.EW], Z.prototype, "has_next_marker", null),
        (0, o.Cg)([f.oI], Z.prototype, "OnJumpToNextMarkerClicked", null),
        (Z = (0, o.Cg)([a.PA], Z));
      const ee = (e) =>
        r.createElement(
          "div",
          {
            className: "timelineMarker",
            title: e.label,
            style: { left: e.pos + "%" },
            onMouseEnter: () => e.onMouseEnter(e.pos),
            onMouseLeave: e.onMouseLeave,
            onMouseDown: e.onMouseDown ? e.onMouseDown : void 0,
          },
          r.createElement(
            "div",
            { className: "timelineMarkerIcon" },
            r.createElement(b.Dp6, null),
          ),
        );
      function te(e) {
        let t = e.startPos,
          s = e.endPos,
          o = "",
          n = 1;
        return (
          t < 0 && ((n = (s - t) / 10), (t = 0), (o = " hideFront")),
          r.createElement(
            "div",
            {
              className: "STV_timelineSegment" + o,
              style: { left: t + "%", width: s - t + "%", opacity: n },
              onClick: e.onClick,
            },
            r.createElement("div", {
              className: "STV_timelineSegmentFrontFill",
              style: { borderColor: "rgb(" + e.color + ")" },
            }),
            r.createElement(
              "div",
              {
                className: "STV_timelineSegmentLabel",
                style: { color: "rgb(" + e.color + ")" },
              },
              e.label,
            ),
            r.createElement("div", {
              className: "STV_timelineSegmentBackFill",
              style: { borderColor: "rgb(" + e.color + ")" },
            }),
          )
        );
      }
      let se = class extends r.Component {
        m_elSlider = r.createRef();
        m_rectSlider = void 0;
        constructor(e) {
          super(e),
            (this.state = {
              nGrabberMouseDownTime: 0,
              bGrabberMouseDown: !1,
              nHoverValue: void 0,
              hoverX: 0,
              bStartMouseDown: !1,
              bEndMouseDown: !1,
              thumbnailURL: "",
            });
        }
        OnMouseDown(e, t) {
          if (this.m_elSlider) {
            e.persist(),
              (this.m_rectSlider =
                this.m_elSlider.current &&
                this.m_elSlider.current.getBoundingClientRect());
            let s = {};
            "start" === t
              ? ((s = { bStartMouseDown: !0 }), e.stopPropagation())
              : "end" === t
                ? ((s = { bEndMouseDown: !0 }), e.stopPropagation())
                : (s = { bGrabberMouseDown: !0 }),
              this.setState(s, () => this.AdjustSliderForClientX(e.clientX)),
              this.m_elSlider.current.ownerDocument.defaultView.addEventListener(
                "mousemove",
                this.OnMouseMove,
              ),
              this.m_elSlider.current.ownerDocument.defaultView.addEventListener(
                "mouseup",
                this.OnMouseUp,
              );
          }
        }
        OnMouseMove(e) {
          this.AdjustSliderForClientX(e.clientX);
        }
        OnMouseUp(e) {
          this.state.bStartMouseDown
            ? this.setState({ bStartMouseDown: !1 })
            : this.state.bEndMouseDown
              ? this.setState({ bEndMouseDown: !1 })
              : (this.props.video.Seek(this.state.nGrabberMouseDownTime),
                this.setState({
                  bGrabberMouseDown: !1,
                  nGrabberMouseDownTime: 0,
                })),
            this.m_elSlider.current &&
              (this.m_elSlider.current.ownerDocument.defaultView.removeEventListener(
                "mousemove",
                this.OnMouseMove,
              ),
              this.m_elSlider.current.ownerDocument.defaultView.removeEventListener(
                "mouseup",
                this.OnMouseUp,
              ));
        }
        OnKeyDown(e) {
          37 == e.keyCode
            ? (this.props.video.JumpTime(-15), e.preventDefault())
            : 39 == e.keyCode &&
              (this.props.video.JumpTime(15), e.preventDefault());
        }
        AdjustSliderForClientX(e) {
          let t = this.props.video,
            s = t.GetTimelineStartPos(),
            o = t.GetTimelineStartPos() + t.GetTimelineDuration(),
            n = t.GetTimeAtMousePosition(e, this.m_rectSlider, s, o);
          if (this.state.bStartMouseDown) {
            const e = D.OQ(n, s, t.m_editorEndTime - 5);
            t.m_editorStartTime = e;
          } else if (this.state.bEndMouseDown) {
            const e = D.OQ(n, t.m_editorStartTime + 5, o);
            t.m_editorEndTime = e;
          } else
            n != this.state.nGrabberMouseDownTime &&
              this.setState({ nGrabberMouseDownTime: n });
        }
        OnMouseHoverMove(e) {
          this.AdjustHoverForClientX(e.clientX);
        }
        OnMouseHoverLeave(e) {
          this.setState({ hoverX: 0 });
        }
        AdjustHoverForClientX(e) {
          let t = this.props.video,
            s = t.GetTimelineStartPos(),
            o = t.GetTimelineStartPos() + t.GetTimelineDuration();
          this.m_rectSlider =
            this.m_elSlider.current &&
            this.m_elSlider.current.getBoundingClientRect();
          t.GetTimeAtMousePosition(e, this.m_rectSlider, s, o);
        }
        OnSegmentClick(e) {
          this.props.video.Seek(e);
        }
        OnMarkerMouseEnter(e) {
          this.setState({ nHoverValue: e });
        }
        OnMarkerMouseLeave() {
          this.setState({ nHoverValue: void 0 });
        }
        render() {
          let e = this.props.video,
            t = this.state.bGrabberMouseDown,
            s = e.GetPercentOffsetFromTime(
              this.state.nGrabberMouseDownTime,
              m.a0.Timeline,
            ),
            o = e.GetPercentOffsetFromTime(e.GetPlaybackTime(), m.a0.Timeline),
            n = e.GetPercentOffsetFromTime(
              e.GetVideoAvailableStartTime(),
              m.a0.Timeline,
            );
          n < 0.05 && (n = 0);
          let i = D.OQ(s, 0, 100).toFixed(1) + "%",
            l = D.OQ(o, 0, 100).toFixed(1) + "%",
            a = D.OQ(n, 0, 100).toFixed(1) + "%",
            d = {},
            u = {},
            c = {},
            p = {};
          t
            ? ((p.left = i), (d.width = i), (u.width = l), (c.width = a))
            : ((p.left = l), (u.width = l), (c.width = a));
          let h = (0, V.ap)(e.GetPlaybackTime()),
            S = (0, V.ap)(this.state.nHoverValue),
            v = "STV_timelineContainer";
          this.state.bGrabberMouseDown && (v += " grabberDown"),
            e.IsTimelineMapActive() && (v += " minimapActive");
          let g = "";
          (s = t ? s : o),
            s > 100
              ? (g = " grabberOffScreenRight grabberOffscreen")
              : s < 0 && (g = " grabberOffScreenLeft grabberOffscreen");
          let C = [];
          e.GetTimelineMarkers().forEach((t, s) => {
            let o = e.GetPercentOffsetFromTime(t.nTime, m.a0.Timeline);
            o < 0 ||
              o > 100 ||
              C.push(
                r.createElement(ee, {
                  key: s,
                  pos: o,
                  label: t.strTemplateName,
                  onMouseEnter: this.OnMarkerMouseEnter,
                  onMouseLeave: this.OnMarkerMouseLeave,
                }),
              );
          });
          let E = [];
          e.GetTimelineSegments().forEach((t, s) => {
            let o = e.GetPercentOffsetFromTime(t.nTimeStart, m.a0.Timeline);
            if (o > 100) return;
            let n = e.GetPercentOffsetFromTime(t.nTimeEnd, m.a0.Timeline);
            n < 0 ||
              E.push(
                r.createElement(te, {
                  key: s,
                  startPos: o,
                  endPos: n,
                  label: t.strTemplateName,
                  color: t.color,
                  onClick: (e) => this.OnSegmentClick(t.nTimeStart),
                }),
              );
          });
          const _ = e.GetPercentOffsetFromTime(
              e.m_editorStartTime,
              m.a0.Timeline,
            ),
            w = e.GetPercentOffsetFromTime(e.m_editorEndTime, m.a0.Timeline),
            M = this.props.bIncludeClipEditor
              ? [
                  r.createElement(ee, {
                    key: "start",
                    pos: _,
                    label: (0, y.we)("#DASHPlayerControls_Start"),
                    onMouseEnter: this.OnMarkerMouseEnter,
                    onMouseLeave: this.OnMarkerMouseLeave,
                    onMouseDown: (e) => this.OnMouseDown(e, "start"),
                  }),
                  r.createElement(ee, {
                    key: "end",
                    pos: w,
                    label: (0, y.we)("#DASHPlayerControls_End"),
                    onMouseEnter: this.OnMarkerMouseEnter,
                    onMouseLeave: this.OnMarkerMouseLeave,
                    onMouseDown: (e) => this.OnMouseDown(e, "end"),
                  }),
                ]
              : [];
          return r.createElement(
            "div",
            {
              className: "videoTimelineMain",
              tabIndex: 0,
              onKeyDown: this.OnKeyDown,
            },
            r.createElement(
              "div",
              { className: v },
              r.createElement("div", { className: "DialogLabel" }, h),
              r.createElement(
                "div",
                { className: "STV_timelineSegmentsContainer" },
                E,
              ),
              r.createElement(
                "div",
                {
                  onMouseDown: this.OnMouseDown,
                  onMouseMove: this.OnMouseHoverMove,
                  onMouseLeave: this.OnMouseHoverLeave,
                  ref: this.m_elSlider,
                },
                r.createElement(
                  "div",
                  { className: "VideoTimelineSlider" },
                  r.createElement("div", {
                    className: "STV_timelineValue",
                    style: d,
                  }),
                  r.createElement("div", {
                    className: "STV_timelineGhostValue",
                    style: u,
                  }),
                  r.createElement("div", {
                    className: "STV_timelineNoVideo",
                    style: c,
                  }),
                  C,
                  M,
                  Boolean(this.state.hoverX) &&
                    r.createElement(
                      "div",
                      {
                        key: "grabbertime",
                        style: {
                          position: "absolute",
                          left: this.state.hoverX - 75,
                          bottom: "30px",
                        },
                      },
                      r.createElement(
                        "div",
                        {
                          style: {
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                          },
                        },
                        this.state.thumbnailURL &&
                          r.createElement("img", {
                            style: { width: "150px" },
                            src: this.state.thumbnailURL,
                          }),
                        r.createElement(
                          "span",
                          {
                            className: "STV_timelineGrabberValue",
                            style: { position: "absolute", bottom: "4px" },
                          },
                          S,
                        ),
                      ),
                    ),
                  r.createElement(
                    "div",
                    { className: "STV_timelineGrabber_Wrapper", style: p },
                    r.createElement(
                      "div",
                      { className: "STV_timelineGrabber" + g },
                      r.createElement(
                        "div",
                        { className: "STV_timelineGrabberArrow" },
                        r.createElement(b.apU, null),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          );
        }
      };
      (0, o.Cg)([f.oI], se.prototype, "OnMouseDown", null),
        (0, o.Cg)([f.oI], se.prototype, "OnMouseMove", null),
        (0, o.Cg)([f.oI], se.prototype, "OnMouseUp", null),
        (0, o.Cg)([f.oI], se.prototype, "OnKeyDown", null),
        (0, o.Cg)([f.oI], se.prototype, "OnMouseHoverMove", null),
        (0, o.Cg)([f.oI], se.prototype, "OnMouseHoverLeave", null),
        (0, o.Cg)([f.oI], se.prototype, "AdjustHoverForClientX", null),
        (0, o.Cg)([f.oI], se.prototype, "OnSegmentClick", null),
        (0, o.Cg)([f.oI], se.prototype, "OnMarkerMouseEnter", null),
        (0, o.Cg)([f.oI], se.prototype, "OnMarkerMouseLeave", null),
        (se = (0, o.Cg)([a.PA], se));
      let oe = class extends r.Component {
        state = { info: null };
        static getDerivedStateFromProps(e, t) {
          if (
            (!t.info || t.info.m_steamIDBroadcast !== e.steamID) &&
            (t.info &&
              (m.BroadcastWatchStore.StopInfo(t.info), (t.info = null)),
            e.steamID)
          ) {
            return { info: m.BroadcastWatchStore.StartInfo(e.steamID) };
          }
          return null;
        }
        componentWillUnmount() {
          this.state.info && m.BroadcastWatchStore.StopInfo(this.state.info);
        }
        RenderStreamSwitcher() {
          const e = this.props.steamID;
          return P.td.stream[e]
            ? r.createElement(ne, {
                value: e,
                options: P.td.stream,
                onChange: this.props.onLocalStreamChange,
              })
            : null;
        }
        render() {
          let { info: e } = this.state;
          if (!e) return null;
          let t = "";
          e.m_nViewerCount && (t = (0, k.Dq)(e.m_nViewerCount));
          let s =
              P.td.bValid && P.td.stream && P.td.stream[e.m_steamIDBroadcast],
            o =
              !this.props.bHideThumbnail &&
              this.props.bVerticalBroadcastChat &&
              (parseInt(e.m_strAppId) > 0 || s);
          const n =
            !this.props.bHideThumbnail &&
            this.props.bVerticalBroadcastChat &&
            s &&
            P.td.gidEvent;
          return r.createElement(
            "div",
            { className: "BroadcastDetails" },
            !this.props.bHideThumbnail &&
              r.createElement(S.y, {
                className: "broadcastDetailsThumbBlur",
                src: e.m_strThumbnailUrl,
                draggable: !1,
                duration: 2500,
              }),
            r.createElement(
              "div",
              { className: "BroadcastDetailsHeader" },
              e &&
                e.m_strAppTitle &&
                r.createElement(
                  "div",
                  { className: "displayColumn" },
                  r.createElement(
                    "div",
                    { className: "Info" },
                    r.createElement(
                      "span",
                      { className: "AppTitle" },
                      e.m_strAppTitle,
                    ),
                    e.m_strTitle &&
                      r.createElement(
                        "span",
                        { className: "BroadcastTitle" },
                        " - ",
                        e.m_strTitle,
                      ),
                    this.props.onLocalStreamChange &&
                      this.RenderStreamSwitcher(),
                  ),
                  t &&
                    r.createElement(
                      "div",
                      { className: "BroadcastDetailsHeader_ViewerCount" },
                      r.createElement(b.y_e, null),
                      (0, y.Yp)("#Broadcast_ViewerCount", t),
                    ),
                ),
              s &&
                this.props.onOpenLinkInNewWindow &&
                r.createElement(
                  "div",
                  { className: "Actions" },
                  r.createElement(
                    "div",
                    {
                      onClick: (e) =>
                        this.props.onOpenLinkInNewWindow(e, P.td.link),
                      className: "BroadcastLink",
                    },
                    P.td.linkName,
                  ),
                ),
            ),
            n && r.createElement(g.m, { gidEvent: P.td.gidEvent }),
            o &&
              r.createElement(v.pb, {
                id:
                  P.td.bValid &&
                  P.td.stream &&
                  P.td.stream[e.m_steamIDBroadcast]
                    ? P.td.appID
                    : parseInt(e.m_strAppId),
                type: "game",
              }),
          );
        }
      };
      oe = (0, o.Cg)([a.PA], oe);
      class ne extends r.Component {
        showContextMenu(e) {
          const { options: t, value: s, onChange: o } = this.props,
            n = Object.keys(t).map((e) =>
              r.createElement(
                h.IK,
                { key: e, onSelected: () => o(e), bChecked: e === s },
                (0, y.we)(t[e]),
              ),
            );
          (0, d.lX)(r.createElement(h.tz, null, n), e);
        }
        render() {
          const { value: e, options: t } = this.props,
            s = t[e];
          return r.createElement(
            "div",
            { className: "BroadcastLanguage", onClick: this.showContextMenu },
            r.createElement("span", null, " - ", (0, y.we)(s)),
            r.createElement(
              "div",
              { className: "ContextMenuButton" },
              r.createElement(b.GB9, null),
            ),
          );
        }
      }
      (0, o.Cg)([f.oI], ne.prototype, "showContextMenu", null);
      let ie = class extends r.Component {
        constructor(e) {
          super(e), (this.state = { sizableRegion: [] });
        }
        async AddLinkRegion() {
          let e = this.state.sizableRegion.length;
          this.state.sizableRegion.push({
            xPosPct: 2.5 + e,
            yPosPct: 2.5 + e,
            widthPct: 20,
            heightPct: 15,
          }),
            this.setState({ sizableRegion: this.state.sizableRegion }, () =>
              this.OnSaveRegions(),
            );
        }
        componentDidUpdate(e) {
          0 == e.linkRegions.length &&
            this.props.linkRegions.forEach((e, t) => {
              this.LoadLinkRegion(e, t);
            });
        }
        async LoadLinkRegion(e, t) {
          this.state.sizableRegion.length;
          this.state.sizableRegion.push({
            xPosPct: e.left,
            yPosPct: e.top,
            widthPct: e.width,
            heightPct: e.height,
            link_url: e.url,
            link_description: e.link_description,
            link_index: e.link_index,
          }),
            await this.setState({ sizableRegion: this.state.sizableRegion });
        }
        OnSaveRegions() {
          let e;
          e = { links: [] };
          for (let t = 0; t < this.state.sizableRegion.length; t++) {
            let s;
            (s = {
              left: Math.floor(100 * this.state.sizableRegion[t].xPosPct),
              top: Math.floor(100 * this.state.sizableRegion[t].yPosPct),
              width: Math.floor(100 * this.state.sizableRegion[t].widthPct),
              height: Math.floor(100 * this.state.sizableRegion[t].heightPct),
              url: this.state.sizableRegion[t].link_url,
              link_description: this.state.sizableRegion[t].link_description,
              link_index: t,
            }),
              e.links.push(s);
          }
          this.props.onSaveLinkRegions(e);
        }
        async DeleteRegion(e) {
          this.state.sizableRegion.splice(e, 1),
            console.log("keys: ", this.state.sizableRegion.keys),
            this.setState({ sizableRegion: this.state.sizableRegion }, () =>
              this.OnSaveRegions(),
            );
        }
        async UpdatePanel(e, t) {
          const s = [...this.state.sizableRegion];
          (s[e] = t),
            this.setState({ sizableRegion: s }, () => this.OnSaveRegions());
        }
        render() {
          return r.createElement(
            "div",
            { className: "LinkOverlayContainer" },
            r.createElement(
              "div",
              { className: "LinkOverlayValidRegion" },
              !this.props.editMode && this.props.linkRegions
                ? this.props.linkRegions.map((e) => {
                    const t = (0, z.p)(e.url);
                    return r.createElement(
                      E.uU,
                      {
                        key: e.link_index,
                        href: e.url,
                        bForceExternal: t,
                        bUseLinkFilter: t,
                      },
                      r.createElement(
                        "div",
                        {
                          className: "LinkRegion",
                          style: {
                            left: e.left + "%",
                            top: e.top + "%",
                            width: e.width + "%",
                            height: e.height + "%",
                          },
                        },
                        r.createElement(
                          "div",
                          { className: "LinkRegionText" },
                          e.link_description,
                          " ",
                        ),
                      ),
                    );
                  })
                : null,
              this.props.editMode &&
                this.state.sizableRegion.map((e, t) =>
                  r.createElement(C.I, {
                    key: 100 * t + e.xPosPct,
                    index: t,
                    deleteFn: this.DeleteRegion,
                    updateFn: this.UpdatePanel,
                    xPosPct: e.xPosPct,
                    yPosPct: e.yPosPct,
                    widthPct: e.widthPct,
                    heightPct: e.heightPct,
                    link_url: e.link_url,
                    link_description: e.link_description,
                  }),
                ),
              this.props.editMode &&
                r.createElement(
                  "div",
                  { className: "AddLinkRegion", onClick: this.AddLinkRegion },
                  (0, y.we)("#SteamTV_AddLinkRegion"),
                ),
            ),
            r.createElement(
              "div",
              { className: "LinkOverlayInvalidRegion" },
              r.createElement(
                "div",
                null,
                (0, y.we)("#SteamTV_LinkRegionReserved"),
              ),
            ),
          );
        }
      };
      (0, o.Cg)([f.oI], ie.prototype, "AddLinkRegion", null),
        (0, o.Cg)([f.oI], ie.prototype, "LoadLinkRegion", null),
        (0, o.Cg)([f.oI], ie.prototype, "OnSaveRegions", null),
        (0, o.Cg)([f.oI], ie.prototype, "DeleteRegion", null),
        (0, o.Cg)([f.oI], ie.prototype, "UpdatePanel", null),
        (ie = (0, o.Cg)([a.PA], ie));
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-rel-steamui/build/client/steamui/sourcemaps/chunk~1a96cdf59.js.map
