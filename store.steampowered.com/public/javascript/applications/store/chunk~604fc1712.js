/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7034],
  {
    15527: (e) => {
      e.exports = {
        BroadcastPlayerLite: "SAxf3Rqn792kM6c4U_vx5",
        BroadcastPlayerLiteVideo: "yCd0zjymzfw3HkVm-1YwX",
        BroadcastContext: "_3TnYLKMweBMIC69qFU6OJj",
        BroadcastPlaceholderImg: "_3hxn99MT14hFUCrUp6zbsf",
      };
    },
    72224: (e, t, s) => {
      "use strict";
      s.r(t),
        s.d(t, {
          BroadcastDetails: () => ne,
          LinkOverlay: () => le,
          default: () => j,
        });
      var o = s(34629),
        n = s(14947),
        i = s(75844),
        l = s(90626),
        a = s(88997),
        r = s(55963),
        d = s(54728),
        m = s(82097),
        u = s(73745),
        c = s(6144);
      class p extends l.Component {
        m_elCanvas;
        m_Context;
        m_schUpdate = new c.LU();
        m_bSetupComplete = !1;
        componentDidMount() {
          0 == this.props.updateRate && this.updateCanvas();
        }
        componentWillUnmount() {
          this.m_schUpdate.Cancel();
        }
        componentDidUpdate() {
          this.updateCanvas();
        }
        BindCanvasRef(e) {
          this.m_elCanvas = e;
        }
        updateCanvas() {
          if (
            null == this.props.elementRef ||
            null == this.m_elCanvas ||
            this.m_bSetupComplete
          )
            return;
          let e = this.props.scaleFactor || [1, 1],
            t = this.props.elementRef,
            s = this.props.updateRate;
          this.m_Context = this.m_elCanvas.getContext("2d");
          let o = Math.floor(
              this.m_elCanvas.clientWidth / this.props.reductionFactor,
            ),
            n = Math.floor(
              this.m_elCanvas.clientHeight / this.props.reductionFactor,
            );
          (this.m_elCanvas.width = o),
            (this.m_elCanvas.height = n),
            this.props.blurAmount > 0 &&
              (this.m_Context.filter = "blur(" + this.props.blurAmount + "px)");
          let i = () => {
            this.m_Context.drawImage(t, 0, 0, o * e[0], n * e[1]),
              s > 0 && this.m_schUpdate.Schedule(s, i);
          };
          i(), (this.m_bSetupComplete = !0);
        }
        render() {
          return l.createElement("canvas", {
            id: this.props.id,
            className: this.props.className,
            ref: this.BindCanvasRef,
            width: this.props.width,
            height: this.props.height,
          });
        }
      }
      (0, o.Cg)([u.oI], p.prototype, "BindCanvasRef", null),
        (0, o.Cg)([u.oI], p.prototype, "updateCanvas", null);
      var h = s(68451),
        S = s(16569),
        v = s(90740),
        g = s(52038);
      class C extends l.Component {
        render() {
          let {
            keyExtractor: e,
            style: t,
            duration: s,
            className: o,
            children: n,
            ...i
          } = this.props;
          const a = { ...(t || {}), transitionDuration: s / 1e3 + "s" };
          return l.createElement(
            S.A,
            { ...i, className: (0, g.A)("crossfade", o) },
            l.createElement(
              v.A,
              {
                classNames: "crossfade-anim",
                timeout: s || 500,
                key: e(),
                style: a,
              },
              n,
            ),
          );
        }
      }
      class b extends l.Component {
        render() {
          const { src: e, ...t } = this.props,
            s = { backgroundImage: `url(${e})` };
          return l.createElement(
            C,
            { style: s, keyExtractor: () => e, ...t },
            l.createElement("div", { className: "crossfade-img" }),
          );
        }
      }
      var _ = s(45359),
        E = s(69409),
        w = s(81416),
        M = s(12155),
        y = s(51272),
        k = s(56011),
        f = s(61859),
        D = s(82227),
        O = s(19719),
        V = s(78327),
        P = s(3067),
        T = s(36064),
        B = s(15527),
        I = s.n(B),
        N = s(22797);
      function R() {
        return l.createElement(
          "div",
          { className: "STV_ReplayBanner" },
          (0, f.we)("#DASHPlayerControls_IsReplay"),
        );
      }
      const A = (0, i.PA)((e) => {
        let t = e.video;
        if (t && (t.IsBroadcastClip() || t.IsBroadcastVOD())) return null;
        let s = d.fK.Loading,
          o = "";
        if (t) {
          (s = t.GetBroadcastState()), (o = t.GetBroadcastStateDescription());
          let e = t.IsBuffering();
          s == d.fK.Unlocking && ((s = d.fK.Loading), (o = "")),
            s == d.fK.Ready && e && ((s = d.fK.Loading), (o = ""));
        }
        if (t && s != d.fK.Error && t.GetUserInputNeeded()) return null;
        if (s == d.fK.Ready) return null;
        let n = s == d.fK.Loading;
        return l.createElement(
          "div",
          {
            className: "BroadcastVideoWatchState",
            style: { filter: "hue-rotate(40deg)" },
          },
          n && l.createElement(N.t, null),
          !n &&
            l.createElement(
              "div",
              { className: "BroadcastVideoWatchState_Text" },
              o,
            ),
        );
      });
      class L extends l.Component {
        OnClick() {
          d.es.UserInputClickVideo(this.props.video);
        }
        render() {
          return l.createElement(
            "div",
            {
              className: "BroadcastVideoUserInputNeeded",
              onClick: this.OnClick,
            },
            l.createElement(M.jGG, null),
            l.createElement(
              "span",
              null,
              (0, f.we)("#DASHPlayerControls_ClickToPlay"),
            ),
          );
        }
      }
      (0, o.Cg)([u.oI], L.prototype, "OnClick", null);
      let G = class extends l.Component {
        constructor(e) {
          super(e);
        }
        HideStats() {
          this.props.closeStats && this.props.closeStats();
        }
        render() {
          let e = this.props.stats;
          return l.createElement(
            "div",
            { className: "dash_video_stats" },
            l.createElement(
              "button",
              { className: "dash_stat_close_button", onClick: this.HideStats },
              l.createElement(M.sED, null),
            ),
            l.createElement(
              "div",
              null,
              (0, f.we)("#DASHPlayerStats_BufferingResolution"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetBufferingResolutionToDisplay(),
              ),
            ),
            l.createElement(
              "div",
              null,
              (0, f.we)("#DASHPlayerStats_PlaybackResolution"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetPlaybackResolutionToDisplay(),
              ),
            ),
            l.createElement(
              "div",
              null,
              (0, f.we)("#DASHPlayerStats_HtmlResolution"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetHTMLVideoResolutionToDisplay(),
              ),
            ),
            l.createElement(
              "div",
              null,
              (0, f.we)("#DASHPlayerStats_ContentServer"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetContentServerToDisplay(),
              ),
            ),
            l.createElement(
              "div",
              null,
              (0, f.we)("#DASHPlayerStats_StallEvents"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetStalledEventsToDisplay(),
              ),
            ),
            l.createElement(
              "div",
              null,
              (0, f.we)("#DASHPlayerStats_FailedDownloads"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetFailedDownloadsToDisplay(),
              ),
            ),
            l.createElement(
              "div",
              null,
              (0, f.we)("#DASHPlayerStats_TimeToFirstFrame"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetTimeToFirstFrameToDisplay(),
              ),
            ),
            l.createElement(
              "div",
              null,
              (0, f.we)("#DASHPlayerStats_PlaybackRate"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetPlaybackRateForDisplay(),
              ),
            ),
            l.createElement(H, { stats: e }),
          );
        }
      };
      (0, o.Cg)([u.oI], G.prototype, "HideStats", null),
        (G = (0, o.Cg)([i.PA], G));
      let H = class extends l.Component {
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
              let n = (0, f.we)(
                  e
                    ? "#DASHPlayerStats_VideoBufferRange"
                    : "#DASHPlayerStats_AudioBufferRange",
                  i,
                ),
                a = e
                  ? t.GetBufferedVideoSegmentForDisplay(i)
                  : t.GetBufferedAudioSegmentForDisplay(i);
              s.push(
                l.createElement(
                  "div",
                  { key: o + i },
                  n,
                  " ",
                  l.createElement("span", { className: "videoStatsValue" }, a),
                ),
              );
            }
          else {
            let t = (0, f.we)(
              e
                ? "#DASHPlayerStats_VideoNoRangeInformation"
                : "#DASHPlayerStats_AudioNoRangeInformation",
            );
            s.push(l.createElement("div", { key: o + "none" }, t));
          }
          return s;
        }
        render() {
          let e = this.props.stats;
          return l.createElement(
            "div",
            { className: "dash_video_quick_stats" },
            l.createElement(
              "div",
              null,
              (0, f.we)("#DASHPlayerStats_BytesReceived"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetBytesReceivedToDisplay(),
              ),
            ),
            this.props.stats.BHasFrameInformation() &&
              l.createElement(
                "div",
                null,
                (0, f.we)("#DASHPlayerStats_DroppedFrames"),
                " ",
                l.createElement(
                  "span",
                  { className: "videoStatsValue" },
                  e.GetDroppedFramesToDisplay(),
                ),
              ),
            l.createElement(
              "div",
              null,
              (0, f.we)("#DASHPlayerStats_VideoBuffered"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetVideoBufferedToDisplay(),
                " ",
              ),
            ),
            l.createElement(
              "div",
              null,
              (0, f.we)("#DASHPlayerStats_AudioBuffered"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetAudioBufferedToDisplay(),
                " ",
              ),
            ),
            this.createBufferedRange(!0),
            this.createBufferedRange(!1),
            l.createElement(
              "div",
              null,
              (0, f.we)("#DASHPlayerStats_BandwidthRequired"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetBandwidthRequiredToDisplay(),
              ),
            ),
            l.createElement(
              "div",
              null,
              (0, f.we)("#DASHPlayerStats_BandwidthVideo"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetBandwithVideoToDisplay(),
              ),
            ),
            l.createElement(
              "div",
              null,
              (0, f.we)("#DASHPlayerStats_BandwidthNums"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetBandwidthStatsToDisplay(),
              ),
            ),
            l.createElement(
              "div",
              null,
              (0, f.we)("#DASHPlayerStats_DownloadNums"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetDownloadTimeStatsToDisplay(),
              ),
            ),
            l.createElement(
              "div",
              null,
              (0, f.we)("#DASHPlayerStats_ActiveDownloads"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetActiveDownloadsToDisplay(),
              ),
            ),
            l.createElement(
              "div",
              null,
              (0, f.we)("#DASHPlayerStats_VideoDownloadProgress"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetVideoDownloadProgressToDisplay(),
              ),
            ),
            l.createElement(
              "div",
              null,
              (0, f.we)("#DASHPlayerStats_DroppingFrames"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetPersistentFrameDropsForDisplay(),
              ),
            ),
            l.createElement(
              "div",
              null,
              (0, f.we)("#DASHPlayerStats_CurrentFPS"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetCurrentFPSForDisplay(),
              ),
            ),
          );
        }
      };
      H = (0, o.Cg)([i.PA], H);
      var x = s(74872);
      class F extends l.Component {
        m_elSettingsButton;
        m_SettingsButtonPos;
        m_elClickListener;
        m_elSettingsPanel;
        m_elSubtitlesButton = l.createRef();
        m_elSubtitlesPanel = l.createRef();
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
            (0, k.id)(this.m_elSettingsPanel, e.target) ||
              this.setState({ bSettingsOpen: !1 }),
            (0, k.id)(this.m_elSubtitlesPanel.current, e.target) ||
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
            a = 0,
            r = l.createElement("div", {
              key: "separator",
              className: "settingsMenuSeparator",
            });
          if (
            (this.state.bSettingsOpen &&
              ((e = !0),
              (n = this.props.video.GetVideoRepresentations()),
              (i = n.map((e) =>
                l.createElement(
                  x.n,
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
              i.push(r),
              i.push(
                l.createElement(
                  x.D,
                  { key: "statsToggle", onClick: this.OnShowStats },
                  (0, f.we)("#Broadcast_VideoContext_ToggleStats"),
                  "\t",
                ),
              ),
              (a = 0 - (21 * i.length + 32))),
            this.state.bSubtitlesOpen)
          ) {
            (t = !0),
              (i = []),
              i.push(
                l.createElement(
                  x.n,
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
                  (0, f.we)("#Broadcast_None"),
                ),
              );
            for (let e = 0; e < this.props.video.ListSubtitles().length; e++) {
              const t = this.props.video.ListSubtitles()[e];
              i.push(
                l.createElement(
                  x.n,
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
            a = -292;
          }
          const d =
            this.props.video.BHasPlayer() && this.props.video.BHasTimedText();
          return l.createElement(
            "div",
            { className: "STV_BroadcastSettings" },
            d &&
              l.createElement(
                "div",
                {
                  className:
                    "videoControlButton" + (d ? " ClosedCaptionsActive" : ""),
                  onClick: this.OnSubtitlesClick,
                  ref: this.m_elSubtitlesButton,
                },
                l.createElement(M.N8C, null),
              ),
            l.createElement(
              "div",
              {
                className:
                  "videoControlButton VideoSettings " +
                  (e ? " VideoSettingsOpen" : ""),
                onClick: this.OnVideoControlClick,
                ref: this.bindSettingsButton,
              },
              l.createElement(M.wB_, null),
            ),
            l.createElement(U, { video: s }),
            o &&
              o.map((e) =>
                l.createElement(
                  "div",
                  {
                    key: e.key,
                    className: "videoControlButton videoControlFitWidth",
                  },
                  e,
                ),
              ),
            e &&
              l.createElement(
                "div",
                {
                  ref: this.BindSettingsPanel,
                  className: "STV_BroadcastSettingsPanel",
                  style: {
                    left: this.m_SettingsButtonPos[0],
                    top: this.m_SettingsButtonPos[1],
                    marginTop: a,
                  },
                },
                l.createElement(
                  "div",
                  { className: "STV_BroadcastSettingsMenuItems" },
                  i,
                ),
              ),
            t &&
              l.createElement(
                "div",
                {
                  ref: this.m_elSubtitlesPanel,
                  className: "STV_BroadcastSettingsPanel SubtitlesMenu",
                  style: {
                    maxHeight: "260px",
                    left: this.m_SubtitlesButtonPos[0],
                    top: this.m_SubtitlesButtonPos[1],
                    marginTop: a,
                  },
                },
                l.createElement(
                  "div",
                  { className: "STV_BroadcastSettingsMenuItems" },
                  i,
                ),
              ),
          );
        }
      }
      (0, o.Cg)([u.oI], F.prototype, "OnVideoControlClick", null),
        (0, o.Cg)([u.oI], F.prototype, "OnSubtitlesClick", null),
        (0, o.Cg)([u.oI], F.prototype, "OnMouseUp", null),
        (0, o.Cg)([u.oI], F.prototype, "bindSettingsButton", null),
        (0, o.Cg)([u.oI], F.prototype, "BindSettingsPanel", null),
        (0, o.Cg)([u.oI], F.prototype, "OnShowStats", null);
      let U = class extends l.Component {
        constructor(e) {
          super(e), (0, n.Gn)(this);
        }
        k_nHideSliderTimeout = 1500;
        m_bShowSlider = true;
        m_schHideSlider = new c.LU();
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
            l.createElement(
              "div",
              {
                className: n,
                onMouseEnter: this.OnMouseEnter,
                onMouseLeave: this.OnMouseLeave,
              },
              l.createElement(
                "div",
                { className: "BroadcastVolumeControl_FixedLayout" },
                l.createElement(
                  "div",
                  { className: o, onClick: this.ToggleMute },
                  l.createElement(M.fSs, null),
                ),
                l.createElement(z, { video: e, onDrag: this.OnChildDrag }),
              ),
            )
          );
        }
      };
      (0, o.Cg)([n.sH], U.prototype, "m_bShowSlider", void 0),
        (0, o.Cg)([u.oI], U.prototype, "ToggleMute", null),
        (0, o.Cg)([u.oI], U.prototype, "OnMouseEnter", null),
        (0, o.Cg)([u.oI], U.prototype, "OnMouseLeave", null),
        (0, o.Cg)([u.oI], U.prototype, "OnChildDrag", null),
        (U = (0, o.Cg)([i.PA], U));
      let z = class extends l.Component {
        constructor(e) {
          super(e), (0, n.Gn)(this);
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
            o = O.Fu(t, s.left, s.right, 0, 1),
            n = O.OQ(o, 0, 1),
            i = this.props.video;
          i.SetMute(o < 0.01), i.SetVolume(n);
        }
        render() {
          let e = this.props.video,
            t = 100 * e.GetVolume();
          e.IsMuted() && (t = 0);
          let s = { left: `${t}%` },
            o = { width: `${t}%` };
          return l.createElement(
            "div",
            {
              className: "BroadcastVolumeSlider",
              onMouseDown: this.OnMouseDown,
            },
            l.createElement("div", {
              className: "BroadcastVolumeSlider_Track",
            }),
            l.createElement("div", {
              className: "BroadcastVolumeSlider_Fill",
              style: o,
            }),
            l.createElement("div", {
              className: "BroadcastVolumeSlider_Thumb",
              style: s,
            }),
          );
        }
      };
      (0, o.Cg)([u.oI], z.prototype, "OnMouseDown", null),
        (0, o.Cg)([u.oI], z.prototype, "OnMouseMove", null),
        (0, o.Cg)([u.oI], z.prototype, "OnMouseUp", null),
        (0, o.Cg)([n.XI], z.prototype, "SetVolumeWithCoord", null),
        (z = (0, o.Cg)([i.PA], z));
      var W = s(15759);
      const J = 15;
      let X = class extends l.Component {
        m_schHideControls = new c.LU();
        m_schUnmountControls = new c.LU();
        m_elVideo = null;
        m_elBroadcastPlayer = null;
        m_bMouseDown = !1;
        m_elMouseDown = null;
        m_listeners = new c.Ji();
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
            (d.es.StopVideo(e),
            this.setState({ video: null }),
            this.props.fnSetBroadcastVideo?.(null));
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
              m.A.Get()
                .QueueAppRequest(this.props.nAppIDVOD, {
                  include_assets: !0,
                  include_trailers: !0,
                })
                .then(() => {
                  const e = m.A.Get().GetApp(this.props.nAppIDVOD),
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
                (t = d.es.CreateBroadcastVideo(
                  e,
                  this.props.steamIDBroadcast,
                  this.props.watchLocation,
                  this.props.bWebRTC,
                ))
              : this.props.broadcastClipID
                ? e &&
                  (t = d.es.CreateClipVideo(
                    e,
                    this.props.broadcastClipID,
                    this.props.watchLocation,
                  ))
                : this.props.nAppIDVOD &&
                  e &&
                  ((t = d.es.CreateVODVideo(
                    e,
                    this.props.nAppIDVOD,
                    this.props.watchLocation,
                  )),
                  this.props.fnOnVideoEnd &&
                    t.SetOnVideoCallback(this.props.fnOnVideoEnd)),
            t &&
              (this.props.bStartMuted && t.SetMute(!0),
              this.props.bStartWithSubtitles && t.SetStartWithSubtitles(!0),
              this.props.bStartPaused
                ? t.StopPlaybackTillUserInput()
                : t.Play()),
            this.setState({ video: t }),
            this.props.fnSetBroadcastVideo?.(t),
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
            ((0, a.lX)(
              l.createElement(h.tz, null, this.GetContextMenuItems()),
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
          let o = (0, r.k2)(`${V.TS.STORE_BASE_URL}app/${s.m_strAppId}`);
          this.props.onOpenLinkInNewWindow(e, o), e.stopPropagation();
        }
        GetContextMenuItems() {
          let e = [],
            t = this.state.video;
          if (!t) return e;
          let s = t.GetBroadcastInfo();
          return (
            e.push(
              l.createElement(
                h.IK,
                {
                  key: "togglestats",
                  bChecked: this.state.bShowStats,
                  onSelected: (e) => {
                    this.ToggleStatsView(e);
                  },
                },
                (0, f.we)("#Broadcast_VideoContext_ToggleStats"),
              ),
            ),
            s &&
              "0" != s.m_strAppId &&
              Number.parseInt(s.m_strAppId) != d.fO &&
              e.push(
                l.createElement(
                  h.kt,
                  {
                    key: "visitstore",
                    onSelected: (e) => {
                      this.ShowStorePage(e);
                    },
                  },
                  (0, f.we)("#Broadcast_VideoContext_OpenStore"),
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
            ((0, k.ww)(this.m_elBroadcastPlayer)
              ? (0, k.MS)(this.m_elBroadcastPlayer)
              : (0, k.tl)(this.m_elBroadcastPlayer, this.m_elVideo));
        }
        OnFullscreenChange(e) {
          if (!this.m_elBroadcastPlayer) return;
          let t = (0, k.ww)(this.m_elBroadcastPlayer);
          this.setState({ bFullscreen: t });
        }
        BHideVideoControls() {
          let e = this.state.video;
          return (
            !e ||
            !!e.GetUserInputNeeded() ||
            d.es.GetBroadcastState(e) == d.fK.Error
          );
        }
        render() {
          const e = this.state.video,
            t = e && e.IsPaused(),
            s = e && e.BHasDASHStats() && this.state.bShowStats,
            o = Boolean(e && e.IsReplay()),
            n = this.state.bMountControls,
            i = this.state.bControlsVisible || t,
            a = e && e.GetUserInputNeeded(),
            r =
              e?.IsBroadcastVOD() && a && this.state.strInitialCapsuleImageUrl;
          let d = "videoContainer";
          i || (d += " HidePlayerControls"),
            t && (d += " VideoPaused"),
            this.state.bFullscreen && (d += " fullscreenVideo"),
            this.props.classes && (d += " " + this.props.classes);
          let m = [];
          !this.state.bFullscreen &&
            this.props.actions &&
            (m = m.concat(this.props.actions)),
            !this.state.bFullscreen &&
              this.props.onTheaterMode &&
              m.push(
                l.createElement("div", {
                  key: "ChatPosToggle ChatTheaterToggle",
                  onClick: this.props.onTheaterMode,
                  title: (0, f.we)("#Broadcast_View_Theater"),
                  className: "BroadcastTheaterToggle",
                }),
              ),
            m.push(
              l.createElement("div", {
                key: "FullscreenToggle",
                title: (0, f.we)("#Broadcast_View_Fullscreen"),
                onClick: this.OnToggleFullscreen,
                className: "BroadcastFullscreenToggle",
              }),
            );
          const u = n && !this.BHideVideoControls(),
            c = n && !this.state.bFullscreen,
            h =
              this.props.fnRenderBroadcastContext &&
              this.props.fnRenderBroadcastContext();
          return l.createElement(
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
            h && l.createElement("div", { className: I().BroadcastContext }, h),
            o && l.createElement(R, null),
            this.props.showVideoBackgroundBlur &&
              l.createElement(p, {
                className: "videoBlur",
                elementRef: this.m_elVideo,
                updateRate: 33,
                width: 320,
                height: 180,
                reductionFactor: 10,
                blurAmount: 5,
              }),
            l.createElement("video", {
              className: "videoSrc",
              ref: this.BindVideoRef,
              muted: this.props.bMuted ?? !0,
              autoPlay: !0,
              playsInline: !0,
              controls: !1,
              onVolumeChange: this.props.fnVolumeChanged,
              onClick: this.props.fnVideoClick,
            }),
            this.props.linkRegions
              ? l.createElement(le, {
                  linkRegions: this.props.linkRegions,
                  editMode: this.props.editMode,
                  onSaveLinkRegions: this.props.onSaveLinkRegions,
                })
              : null,
            this.props.linkElement,
            r &&
              l.createElement("img", {
                loading: "lazy",
                className: (0, g.A)(
                  I().BroadcastPlaceholderImg,
                  "BroadcastPlaceholderImg",
                ),
                src: this.state.strInitialCapsuleImageUrl,
              }),
            u &&
              l.createElement(K, {
                video: e,
                actions: m,
                onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                onShowStats: this.ToggleStatsView,
                bIncludeClipEditor: this.props.bIncludeClipEditor,
              }),
            c && l.createElement(q, { onClick: this.props.onRequestClose }),
            s &&
              l.createElement(G, {
                stats: e.GetDASHPlayerStats(),
                closeStats: this.CloseStats,
              }),
            l.createElement(A, { video: e }),
            a && l.createElement(L, { video: e }),
          );
        }
      };
      (0, o.Cg)([u.oI], X.prototype, "BindBroadcastPlayerRef", null),
        (0, o.Cg)([u.oI], X.prototype, "BindVideoRef", null),
        (0, o.Cg)([u.oI], X.prototype, "OnMouseDown", null),
        (0, o.Cg)([u.oI], X.prototype, "OnMouseUp", null),
        (0, o.Cg)([u.oI], X.prototype, "OnMouseMove", null),
        (0, o.Cg)([u.oI], X.prototype, "OnMouseLeave", null),
        (0, o.Cg)([u.oI], X.prototype, "HideControls", null),
        (0, o.Cg)([u.oI], X.prototype, "UmountControls", null),
        (0, o.Cg)([u.oI], X.prototype, "ShowStatsView", null),
        (0, o.Cg)([u.oI], X.prototype, "OnContextMenu", null),
        (0, o.Cg)([u.oI], X.prototype, "ToggleStatsView", null),
        (0, o.Cg)([u.oI], X.prototype, "ShowStorePage", null),
        (0, o.Cg)([u.oI], X.prototype, "CloseStats", null),
        (0, o.Cg)([u.oI], X.prototype, "OnToggleFullscreen", null),
        (0, o.Cg)([u.oI], X.prototype, "OnFullscreenChange", null),
        (X = (0, o.Cg)([i.PA], X));
      const j = X;
      let K = class extends l.Component {
        render() {
          const { video: e } = this.props;
          if (!e) return null;
          let t = e.has_segments;
          return l.createElement(
            "div",
            { className: "videoControls" },
            l.createElement(ne, {
              steamID: this.props.video.GetBroadcastSteamID(),
              bHideThumbnail: !0,
              bVerticalBroadcastChat: !0,
              onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
            }),
            l.createElement(
              "div",
              { className: "videoControlsBottom" + (t ? "" : " noSegments") },
              l.createElement(oe, {
                video: e,
                bIncludeClipEditor: this.props.bIncludeClipEditor,
              }),
              l.createElement(
                "div",
                { className: "STV_BroadcastController" },
                l.createElement("div", {
                  className: "videoControlsButtons LeftSpacer",
                }),
                l.createElement(Q, { video: e }),
                l.createElement($, { video: e }),
                l.createElement(F, {
                  video: e,
                  actions: this.props.actions,
                  onShowStats: this.props.onShowStats,
                }),
              ),
            ),
          );
        }
      };
      K = (0, o.Cg)([i.PA], K);
      class q extends l.PureComponent {
        render() {
          return this.props.onClick
            ? l.createElement(
                "div",
                {
                  className: "STV_BroadcastClose",
                  onClick: this.props.onClick,
                },
                l.createElement(M.sED, null),
              )
            : null;
        }
      }
      class Q extends l.Component {
        OnJumpBackward() {
          this.props.video.JumpTime(-15);
        }
        OnJumpForward() {
          this.props.video.JumpTime(J);
        }
        render() {
          let e = this.props.video,
            t = e.CanSeek();
          return l.createElement(
            "div",
            { className: "videoControlsButtons PlayControls" },
            l.createElement(Z, { video: e }),
            t &&
              l.createElement(
                "div",
                {
                  className: "videoControlButton videoControlJump controlFlip",
                  onClick: this.OnJumpBackward,
                },
                l.createElement(M.tID, {
                  bHidePostArrow: !0,
                  bHidePreArrow: !0,
                  bShowJumpAheadBox: !0,
                  bFlipHorizontal: !0,
                }),
                l.createElement("div", { className: "jumpAheadValue" }, J),
              ),
            l.createElement(Y, { video: e }),
            t &&
              l.createElement(
                "div",
                {
                  className: "videoControlButton videoControlJump",
                  onClick: this.OnJumpForward,
                },
                l.createElement(M.tID, {
                  bHidePostArrow: !0,
                  bHidePreArrow: !0,
                  bShowJumpAheadBox: !0,
                  bFlipHorizontal: !1,
                }),
                l.createElement("div", { className: "jumpAheadValue" }, J),
              ),
            t && l.createElement(ee, { video: e }),
          );
        }
      }
      (0, o.Cg)([u.oI], Q.prototype, "OnJumpBackward", null),
        (0, o.Cg)([u.oI], Q.prototype, "OnJumpForward", null);
      const $ = (0, i.PA)((e) => {
        if (e.video.IsBroadcastClip() || e.video.IsBroadcastVOD()) return null;
        let t = e.video.IsOnLiveEdge();
        return l.createElement(
          "div",
          { className: "videoControlsButtons GoLive" },
          l.createElement(
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
            l.createElement(M.tID, {
              bHidePreArrow: !0,
              bHidePostArrow: !0,
              bFlipHorizontal: !1,
            }),
            l.createElement(
              "div",
              { className: "jumpGoLive" },
              (0, f.we)(
                t ? "#DASHPlayerControls_IsLive" : "#DASHPlayerControls_GoLive",
              ),
            ),
          ),
        );
      });
      let Y = class extends l.Component {
        OnTogglePlayPause() {
          this.props.video.TogglePlayPause();
        }
        render() {
          let e = this.props.video.IsPaused();
          return l.createElement(
            "div",
            {
              className: "videoControlButton buttonPlayPause",
              onClick: this.OnTogglePlayPause,
            },
            e ? l.createElement(M.jGG, null) : l.createElement(M.vRz, null),
          );
        }
      };
      (0, o.Cg)([u.oI], Y.prototype, "OnTogglePlayPause", null),
        (Y = (0, o.Cg)([i.PA], Y));
      let Z = class extends l.Component {
        constructor(e) {
          super(e), (0, n.Gn)(this), (this.video = e.video);
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
          return l.createElement(
            "div",
            {
              className:
                "videoControlButton jumpToMarker controlFlip" +
                (e ? "" : " noMarkersOrSegments") +
                (this.has_previous_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToPreviousMarkerClicked,
            },
            l.createElement(M.tID, { bHidePostArrow: !0, bFlipHorizontal: !0 }),
          );
        }
      };
      (0, o.Cg)([n.sH], Z.prototype, "video", void 0),
        (0, o.Cg)([n.EW], Z.prototype, "has_previous_marker", null),
        (0, o.Cg)([u.oI], Z.prototype, "OnJumpToPreviousMarkerClicked", null),
        (Z = (0, o.Cg)([i.PA], Z));
      let ee = class extends l.Component {
        constructor(e) {
          super(e), (0, n.Gn)(this), (this.video = e.video);
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
          return l.createElement(
            "div",
            {
              className:
                "videoControlButton jumpToMarker" +
                (e ? "" : " noMarkersOrSegments") +
                (this.has_next_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToNextMarkerClicked,
            },
            l.createElement(M.tID, { bHidePostArrow: !0, bFlipHorizontal: !1 }),
          );
        }
      };
      (0, o.Cg)([n.sH], ee.prototype, "video", void 0),
        (0, o.Cg)([n.EW], ee.prototype, "has_next_marker", null),
        (0, o.Cg)([u.oI], ee.prototype, "OnJumpToNextMarkerClicked", null),
        (ee = (0, o.Cg)([i.PA], ee));
      const te = (e) =>
        l.createElement(
          "div",
          {
            className: "timelineMarker",
            title: e.label,
            style: { left: e.pos + "%" },
            onMouseEnter: () => e.onMouseEnter(e.pos),
            onMouseLeave: e.onMouseLeave,
            onMouseDown: e.onMouseDown ? e.onMouseDown : void 0,
          },
          l.createElement(
            "div",
            { className: "timelineMarkerIcon" },
            l.createElement(M.Dp6, null),
          ),
        );
      function se(e) {
        let t = e.startPos,
          s = e.endPos,
          o = "",
          n = 1;
        return (
          t < 0 && ((n = (s - t) / 10), (t = 0), (o = " hideFront")),
          l.createElement(
            "div",
            {
              className: "STV_timelineSegment" + o,
              style: { left: t + "%", width: s - t + "%", opacity: n },
              onClick: e.onClick,
            },
            l.createElement("div", {
              className: "STV_timelineSegmentFrontFill",
              style: { borderColor: "rgb(" + e.color + ")" },
            }),
            l.createElement(
              "div",
              {
                className: "STV_timelineSegmentLabel",
                style: { color: "rgb(" + e.color + ")" },
              },
              e.label,
            ),
            l.createElement("div", {
              className: "STV_timelineSegmentBackFill",
              style: { borderColor: "rgb(" + e.color + ")" },
            }),
          )
        );
      }
      let oe = class extends l.Component {
        m_elSlider = l.createRef();
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
            const e = O.OQ(n, s, t.m_editorEndTime - 5);
            t.m_editorStartTime = e;
          } else if (this.state.bEndMouseDown) {
            const e = O.OQ(n, t.m_editorStartTime + 5, o);
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
              d.a0.Timeline,
            ),
            o = e.GetPercentOffsetFromTime(e.GetPlaybackTime(), d.a0.Timeline),
            n = e.GetPercentOffsetFromTime(
              e.GetVideoAvailableStartTime(),
              d.a0.Timeline,
            );
          n < 0.05 && (n = 0);
          let i = O.OQ(s, 0, 100).toFixed(1) + "%",
            a = O.OQ(o, 0, 100).toFixed(1) + "%",
            r = O.OQ(n, 0, 100).toFixed(1) + "%",
            m = {},
            u = {},
            c = {},
            p = {};
          t
            ? ((p.left = i), (m.width = i), (u.width = a), (c.width = r))
            : ((p.left = a), (u.width = a), (c.width = r));
          let h = (0, T.ap)(e.GetPlaybackTime()),
            S = (0, T.ap)(this.state.nHoverValue),
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
            let o = e.GetPercentOffsetFromTime(t.nTime, d.a0.Timeline);
            o < 0 ||
              o > 100 ||
              C.push(
                l.createElement(te, {
                  key: s,
                  pos: o,
                  label: t.strTemplateName,
                  onMouseEnter: this.OnMarkerMouseEnter,
                  onMouseLeave: this.OnMarkerMouseLeave,
                }),
              );
          });
          let b = [];
          e.GetTimelineSegments().forEach((t, s) => {
            let o = e.GetPercentOffsetFromTime(t.nTimeStart, d.a0.Timeline);
            if (o > 100) return;
            let n = e.GetPercentOffsetFromTime(t.nTimeEnd, d.a0.Timeline);
            n < 0 ||
              b.push(
                l.createElement(se, {
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
              d.a0.Timeline,
            ),
            E = e.GetPercentOffsetFromTime(e.m_editorEndTime, d.a0.Timeline),
            w = this.props.bIncludeClipEditor
              ? [
                  l.createElement(te, {
                    key: "start",
                    pos: _,
                    label: (0, f.we)("#DASHPlayerControls_Start"),
                    onMouseEnter: this.OnMarkerMouseEnter,
                    onMouseLeave: this.OnMarkerMouseLeave,
                    onMouseDown: (e) => this.OnMouseDown(e, "start"),
                  }),
                  l.createElement(te, {
                    key: "end",
                    pos: E,
                    label: (0, f.we)("#DASHPlayerControls_End"),
                    onMouseEnter: this.OnMarkerMouseEnter,
                    onMouseLeave: this.OnMarkerMouseLeave,
                    onMouseDown: (e) => this.OnMouseDown(e, "end"),
                  }),
                ]
              : [];
          return l.createElement(
            "div",
            {
              className: "videoTimelineMain",
              tabIndex: 0,
              onKeyDown: this.OnKeyDown,
            },
            l.createElement(
              "div",
              { className: v },
              l.createElement("div", { className: "DialogLabel" }, h),
              l.createElement(
                "div",
                { className: "STV_timelineSegmentsContainer" },
                b,
              ),
              l.createElement(
                "div",
                {
                  onMouseDown: this.OnMouseDown,
                  onMouseMove: this.OnMouseHoverMove,
                  onMouseLeave: this.OnMouseHoverLeave,
                  ref: this.m_elSlider,
                },
                l.createElement(
                  "div",
                  { className: "VideoTimelineSlider" },
                  l.createElement("div", {
                    className: "STV_timelineValue",
                    style: m,
                  }),
                  l.createElement("div", {
                    className: "STV_timelineGhostValue",
                    style: u,
                  }),
                  l.createElement("div", {
                    className: "STV_timelineNoVideo",
                    style: c,
                  }),
                  C,
                  w,
                  Boolean(this.state.hoverX) &&
                    l.createElement(
                      "div",
                      {
                        key: "grabbertime",
                        style: {
                          position: "absolute",
                          left: this.state.hoverX - 75,
                          bottom: "30px",
                        },
                      },
                      l.createElement(
                        "div",
                        {
                          style: {
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                          },
                        },
                        this.state.thumbnailURL &&
                          l.createElement("img", {
                            style: { width: "150px" },
                            src: this.state.thumbnailURL,
                          }),
                        l.createElement(
                          "span",
                          {
                            className: "STV_timelineGrabberValue",
                            style: { position: "absolute", bottom: "4px" },
                          },
                          S,
                        ),
                      ),
                    ),
                  l.createElement(
                    "div",
                    { className: "STV_timelineGrabber_Wrapper", style: p },
                    l.createElement(
                      "div",
                      { className: "STV_timelineGrabber" + g },
                      l.createElement(
                        "div",
                        { className: "STV_timelineGrabberArrow" },
                        l.createElement(M.apU, null),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          );
        }
      };
      (0, o.Cg)([u.oI], oe.prototype, "OnMouseDown", null),
        (0, o.Cg)([u.oI], oe.prototype, "OnMouseMove", null),
        (0, o.Cg)([u.oI], oe.prototype, "OnMouseUp", null),
        (0, o.Cg)([u.oI], oe.prototype, "OnKeyDown", null),
        (0, o.Cg)([u.oI], oe.prototype, "OnMouseHoverMove", null),
        (0, o.Cg)([u.oI], oe.prototype, "OnMouseHoverLeave", null),
        (0, o.Cg)([u.oI], oe.prototype, "AdjustHoverForClientX", null),
        (0, o.Cg)([u.oI], oe.prototype, "OnSegmentClick", null),
        (0, o.Cg)([u.oI], oe.prototype, "OnMarkerMouseEnter", null),
        (0, o.Cg)([u.oI], oe.prototype, "OnMarkerMouseLeave", null),
        (oe = (0, o.Cg)([i.PA], oe));
      let ne = class extends l.Component {
        state = { info: null };
        static getDerivedStateFromProps(e, t) {
          if (
            (!t.info || t.info.m_steamIDBroadcast !== e.steamID) &&
            (t.info && (d.es.StopInfo(t.info), (t.info = null)), e.steamID)
          ) {
            return { info: d.es.StartInfo(e.steamID) };
          }
          return null;
        }
        componentWillUnmount() {
          this.state.info && d.es.StopInfo(this.state.info);
        }
        RenderStreamSwitcher() {
          const e = this.props.steamID;
          return P.td.stream[e]
            ? l.createElement(ie, {
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
          e.m_nViewerCount && (t = (0, D.Dq)(e.m_nViewerCount));
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
          return l.createElement(
            "div",
            { className: "BroadcastDetails" },
            !this.props.bHideThumbnail &&
              l.createElement(b, {
                className: "broadcastDetailsThumbBlur",
                src: e.m_strThumbnailUrl,
                draggable: !1,
                duration: 2500,
              }),
            l.createElement(
              "div",
              { className: "BroadcastDetailsHeader" },
              e &&
                e.m_strAppTitle &&
                l.createElement(
                  "div",
                  { className: "displayColumn" },
                  l.createElement(
                    "div",
                    { className: "Info" },
                    l.createElement(
                      "span",
                      { className: "AppTitle" },
                      e.m_strAppTitle,
                    ),
                    e.m_strTitle &&
                      l.createElement(
                        "span",
                        { className: "BroadcastTitle" },
                        " - ",
                        e.m_strTitle,
                      ),
                    this.props.onLocalStreamChange &&
                      this.RenderStreamSwitcher(),
                  ),
                  t &&
                    l.createElement(
                      "div",
                      { className: "BroadcastDetailsHeader_ViewerCount" },
                      l.createElement(M.y_e, null),
                      (0, f.Yp)("#Broadcast_ViewerCount", t),
                    ),
                ),
              s &&
                this.props.onOpenLinkInNewWindow &&
                l.createElement(
                  "div",
                  { className: "Actions" },
                  l.createElement(
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
            n && l.createElement(E.m, { gidEvent: P.td.gidEvent }),
            o &&
              l.createElement(_.pb, {
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
      ne = (0, o.Cg)([i.PA], ne);
      class ie extends l.Component {
        showContextMenu(e) {
          const { options: t, value: s, onChange: o } = this.props,
            n = Object.keys(t).map((e) =>
              l.createElement(
                h.IK,
                { key: e, onSelected: () => o(e), bChecked: e === s },
                (0, f.we)(t[e]),
              ),
            );
          (0, a.lX)(l.createElement(h.tz, null, n), e);
        }
        render() {
          const { value: e, options: t } = this.props,
            s = t[e];
          return l.createElement(
            "div",
            { className: "BroadcastLanguage", onClick: this.showContextMenu },
            l.createElement("span", null, " - ", (0, f.we)(s)),
            l.createElement(
              "div",
              { className: "ContextMenuButton" },
              l.createElement(M.GB9, null),
            ),
          );
        }
      }
      (0, o.Cg)([u.oI], ie.prototype, "showContextMenu", null);
      let le = class extends l.Component {
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
          return l.createElement(
            "div",
            { className: "LinkOverlayContainer" },
            l.createElement(
              "div",
              { className: "LinkOverlayValidRegion" },
              !this.props.editMode && this.props.linkRegions
                ? this.props.linkRegions.map((e) => {
                    const t = (0, W.p)(e.url);
                    return l.createElement(
                      y.uU,
                      {
                        key: e.link_index,
                        href: e.url,
                        bForceExternal: t,
                        bUseLinkFilter: t,
                      },
                      l.createElement(
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
                        l.createElement(
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
                  l.createElement(w.I, {
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
                l.createElement(
                  "div",
                  { className: "AddLinkRegion", onClick: this.AddLinkRegion },
                  (0, f.we)("#SteamTV_AddLinkRegion"),
                ),
            ),
            l.createElement(
              "div",
              { className: "LinkOverlayInvalidRegion" },
              l.createElement(
                "div",
                null,
                (0, f.we)("#SteamTV_LinkRegionReserved"),
              ),
            ),
          );
        }
      };
      (0, o.Cg)([u.oI], le.prototype, "AddLinkRegion", null),
        (0, o.Cg)([u.oI], le.prototype, "LoadLinkRegion", null),
        (0, o.Cg)([u.oI], le.prototype, "OnSaveRegions", null),
        (0, o.Cg)([u.oI], le.prototype, "DeleteRegion", null),
        (0, o.Cg)([u.oI], le.prototype, "UpdatePanel", null),
        (le = (0, o.Cg)([i.PA], le));
    },
  },
]);
