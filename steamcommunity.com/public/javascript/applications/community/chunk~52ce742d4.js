/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2694],
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
          BroadcastDetails: () => ie,
          LinkOverlay: () => re,
          default: () => K,
        });
      var o = s(34629),
        n = s(14947),
        i = s(75844),
        a = s(90626),
        r = s(88997),
        l = s(55963),
        d = s(54728),
        m = s(13952),
        c = s(73745),
        u = s(6144);
      class p extends a.Component {
        constructor() {
          super(...arguments),
            (this.m_schUpdate = new u.LU()),
            (this.m_bSetupComplete = !1);
        }
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
          return a.createElement("canvas", {
            id: this.props.id,
            className: this.props.className,
            ref: this.BindCanvasRef,
            width: this.props.width,
            height: this.props.height,
          });
        }
      }
      (0, o.Cg)([c.oI], p.prototype, "BindCanvasRef", null),
        (0, o.Cg)([c.oI], p.prototype, "updateCanvas", null);
      var h = s(60155),
        S = s(16569),
        v = s(63741),
        g = s(52038);
      const C = 500;
      class b extends a.Component {
        render() {
          let {
            keyExtractor: e,
            style: t,
            duration: s = C,
            className: o,
            children: n,
            childRef: i,
            ...r
          } = this.props;
          const l = { ...(t || {}), transitionDuration: s / 1e3 + "s" };
          return a.createElement(
            S.A,
            { ...r, className: (0, g.A)("crossfade", o) },
            a.createElement(
              v.A,
              {
                nodeRef: i,
                classNames: "crossfade-anim",
                timeout: s,
                key: e(),
                style: l,
              },
              n,
            ),
          );
        }
      }
      function E(e) {
        const { src: t, ...s } = e,
          o = { backgroundImage: `url(${t})` },
          n = a.useRef(null);
        return a.createElement(
          b,
          { style: o, keyExtractor: () => t, childRef: n, ...s },
          a.createElement("div", { ref: n, className: "crossfade-img" }),
        );
      }
      var _ = s(45359),
        f = s(69409),
        w = s(81416),
        D = s(12155),
        M = s(51272),
        y = s(56011),
        k = s(61859),
        P = s(82227),
        B = s(25489),
        I = s(78327),
        T = s(3067),
        O = s(36064),
        V = s(15527),
        N = s.n(V),
        A = s(22797);
      function R() {
        return a.createElement(
          "div",
          { className: "STV_ReplayBanner" },
          (0, k.we)("#DASHPlayerControls_IsReplay"),
        );
      }
      const G = (0, i.PA)((e) => {
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
        return a.createElement(
          "div",
          {
            className: "BroadcastVideoWatchState",
            style: { filter: "hue-rotate(40deg)" },
          },
          n && a.createElement(A.t, null),
          !n &&
            a.createElement(
              "div",
              { className: "BroadcastVideoWatchState_Text" },
              o,
            ),
        );
      });
      class L extends a.Component {
        OnClick() {
          d.es.UserInputClickVideo(this.props.video);
        }
        render() {
          return a.createElement(
            "div",
            {
              className: "BroadcastVideoUserInputNeeded",
              onClick: this.OnClick,
            },
            a.createElement(D.jGG, null),
            a.createElement(
              "span",
              null,
              (0, k.we)("#DASHPlayerControls_ClickToPlay"),
            ),
          );
        }
      }
      (0, o.Cg)([c.oI], L.prototype, "OnClick", null);
      let H = class extends a.Component {
        constructor(e) {
          super(e);
        }
        HideStats() {
          this.props.closeStats && this.props.closeStats();
        }
        render() {
          let e = this.props.stats;
          return a.createElement(
            "div",
            { className: "dash_video_stats" },
            a.createElement(
              "button",
              { className: "dash_stat_close_button", onClick: this.HideStats },
              a.createElement(D.sED, null),
            ),
            a.createElement(
              "div",
              null,
              (0, k.we)("#DASHPlayerStats_BufferingResolution"),
              " ",
              a.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetBufferingResolutionToDisplay(),
              ),
            ),
            a.createElement(
              "div",
              null,
              (0, k.we)("#DASHPlayerStats_PlaybackResolution"),
              " ",
              a.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetPlaybackResolutionToDisplay(),
              ),
            ),
            a.createElement(
              "div",
              null,
              (0, k.we)("#DASHPlayerStats_HtmlResolution"),
              " ",
              a.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetHTMLVideoResolutionToDisplay(),
              ),
            ),
            a.createElement(
              "div",
              null,
              (0, k.we)("#DASHPlayerStats_ContentServer"),
              " ",
              a.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetContentServerToDisplay(),
              ),
            ),
            a.createElement(
              "div",
              null,
              (0, k.we)("#DASHPlayerStats_StallEvents"),
              " ",
              a.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetStalledEventsToDisplay(),
              ),
            ),
            a.createElement(
              "div",
              null,
              (0, k.we)("#DASHPlayerStats_FailedDownloads"),
              " ",
              a.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetFailedDownloadsToDisplay(),
              ),
            ),
            a.createElement(
              "div",
              null,
              (0, k.we)("#DASHPlayerStats_TimeToFirstFrame"),
              " ",
              a.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetTimeToFirstFrameToDisplay(),
              ),
            ),
            a.createElement(
              "div",
              null,
              (0, k.we)("#DASHPlayerStats_PlaybackRate"),
              " ",
              a.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetPlaybackRateForDisplay(),
              ),
            ),
            a.createElement(F, { stats: e }),
          );
        }
      };
      (0, o.Cg)([c.oI], H.prototype, "HideStats", null),
        (H = (0, o.Cg)([i.PA], H));
      let F = class extends a.Component {
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
              let n = (0, k.we)(
                  e
                    ? "#DASHPlayerStats_VideoBufferRange"
                    : "#DASHPlayerStats_AudioBufferRange",
                  i,
                ),
                r = e
                  ? t.GetBufferedVideoSegmentForDisplay(i)
                  : t.GetBufferedAudioSegmentForDisplay(i);
              s.push(
                a.createElement(
                  "div",
                  { key: o + i },
                  n,
                  " ",
                  a.createElement("span", { className: "videoStatsValue" }, r),
                ),
              );
            }
          else {
            let t = (0, k.we)(
              e
                ? "#DASHPlayerStats_VideoNoRangeInformation"
                : "#DASHPlayerStats_AudioNoRangeInformation",
            );
            s.push(a.createElement("div", { key: o + "none" }, t));
          }
          return s;
        }
        render() {
          let e = this.props.stats;
          return a.createElement(
            "div",
            { className: "dash_video_quick_stats" },
            a.createElement(
              "div",
              null,
              (0, k.we)("#DASHPlayerStats_BytesReceived"),
              " ",
              a.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetBytesReceivedToDisplay(),
              ),
            ),
            this.props.stats.BHasFrameInformation() &&
              a.createElement(
                "div",
                null,
                (0, k.we)("#DASHPlayerStats_DroppedFrames"),
                " ",
                a.createElement(
                  "span",
                  { className: "videoStatsValue" },
                  e.GetDroppedFramesToDisplay(),
                ),
              ),
            a.createElement(
              "div",
              null,
              (0, k.we)("#DASHPlayerStats_VideoBuffered"),
              " ",
              a.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetVideoBufferedToDisplay(),
                " ",
              ),
            ),
            a.createElement(
              "div",
              null,
              (0, k.we)("#DASHPlayerStats_AudioBuffered"),
              " ",
              a.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetAudioBufferedToDisplay(),
                " ",
              ),
            ),
            this.createBufferedRange(!0),
            this.createBufferedRange(!1),
            a.createElement(
              "div",
              null,
              (0, k.we)("#DASHPlayerStats_BandwidthRequired"),
              " ",
              a.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetBandwidthRequiredToDisplay(),
              ),
            ),
            a.createElement(
              "div",
              null,
              (0, k.we)("#DASHPlayerStats_BandwidthVideo"),
              " ",
              a.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetBandwithVideoToDisplay(),
              ),
            ),
            a.createElement(
              "div",
              null,
              (0, k.we)("#DASHPlayerStats_BandwidthNums"),
              " ",
              a.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetBandwidthStatsToDisplay(),
              ),
            ),
            a.createElement(
              "div",
              null,
              (0, k.we)("#DASHPlayerStats_DownloadNums"),
              " ",
              a.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetDownloadTimeStatsToDisplay(),
              ),
            ),
            a.createElement(
              "div",
              null,
              (0, k.we)("#DASHPlayerStats_ActiveDownloads"),
              " ",
              a.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetActiveDownloadsToDisplay(),
              ),
            ),
            a.createElement(
              "div",
              null,
              (0, k.we)("#DASHPlayerStats_VideoDownloadProgress"),
              " ",
              a.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetVideoDownloadProgressToDisplay(),
              ),
            ),
            a.createElement(
              "div",
              null,
              (0, k.we)("#DASHPlayerStats_DroppingFrames"),
              " ",
              a.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetPersistentFrameDropsForDisplay(),
              ),
            ),
            a.createElement(
              "div",
              null,
              (0, k.we)("#DASHPlayerStats_CurrentFPS"),
              " ",
              a.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetCurrentFPSForDisplay(),
              ),
            ),
          );
        }
      };
      F = (0, o.Cg)([i.PA], F);
      var x = s(74872);
      class U extends a.Component {
        constructor(e) {
          super(e),
            (this.m_elSubtitlesButton = a.createRef()),
            (this.m_elSubtitlesPanel = a.createRef()),
            (this.state = { bSettingsOpen: !1, bSubtitlesOpen: !1 });
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
            (0, y.id)(this.m_elSettingsPanel, e.target) ||
              this.setState({ bSettingsOpen: !1 }),
            (0, y.id)(this.m_elSubtitlesPanel.current, e.target) ||
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
            r = 0,
            l = a.createElement("div", {
              key: "separator",
              className: "settingsMenuSeparator",
            });
          if (
            (this.state.bSettingsOpen &&
              ((e = !0),
              (n = this.props.video.GetVideoRepresentations()),
              (i = n.map((e) =>
                a.createElement(
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
              i.push(l),
              i.push(
                a.createElement(
                  x.D,
                  { key: "statsToggle", onClick: this.OnShowStats },
                  (0, k.we)("#Broadcast_VideoContext_ToggleStats"),
                  "\t",
                ),
              ),
              (r = 0 - (21 * i.length + 32))),
            this.state.bSubtitlesOpen)
          ) {
            (t = !0),
              (i = []),
              i.push(
                a.createElement(
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
                  (0, k.we)("#Broadcast_None"),
                ),
              );
            for (let e = 0; e < this.props.video.ListSubtitles().length; e++) {
              const t = this.props.video.ListSubtitles()[e];
              i.push(
                a.createElement(
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
            r = -292;
          }
          const d =
            this.props.video.BHasPlayer() && this.props.video.BHasTimedText();
          return a.createElement(
            "div",
            { className: "STV_BroadcastSettings" },
            d &&
              a.createElement(
                "div",
                {
                  className:
                    "videoControlButton" + (d ? " ClosedCaptionsActive" : ""),
                  onClick: this.OnSubtitlesClick,
                  ref: this.m_elSubtitlesButton,
                },
                a.createElement(D.N8C, null),
              ),
            a.createElement(
              "div",
              {
                className:
                  "videoControlButton VideoSettings " +
                  (e ? " VideoSettingsOpen" : ""),
                onClick: this.OnVideoControlClick,
                ref: this.bindSettingsButton,
              },
              a.createElement(D.wB_, null),
            ),
            a.createElement(W, { video: s }),
            o &&
              o.map((e) =>
                a.createElement(
                  "div",
                  {
                    key: e.key,
                    className: "videoControlButton videoControlFitWidth",
                  },
                  e,
                ),
              ),
            e &&
              a.createElement(
                "div",
                {
                  ref: this.BindSettingsPanel,
                  className: "STV_BroadcastSettingsPanel",
                  style: {
                    left: this.m_SettingsButtonPos[0],
                    top: this.m_SettingsButtonPos[1],
                    marginTop: r,
                  },
                },
                a.createElement(
                  "div",
                  { className: "STV_BroadcastSettingsMenuItems" },
                  i,
                ),
              ),
            t &&
              a.createElement(
                "div",
                {
                  ref: this.m_elSubtitlesPanel,
                  className: "STV_BroadcastSettingsPanel SubtitlesMenu",
                  style: {
                    maxHeight: "260px",
                    left: this.m_SubtitlesButtonPos[0],
                    top: this.m_SubtitlesButtonPos[1],
                    marginTop: r,
                  },
                },
                a.createElement(
                  "div",
                  { className: "STV_BroadcastSettingsMenuItems" },
                  i,
                ),
              ),
          );
        }
      }
      (0, o.Cg)([c.oI], U.prototype, "OnVideoControlClick", null),
        (0, o.Cg)([c.oI], U.prototype, "OnSubtitlesClick", null),
        (0, o.Cg)([c.oI], U.prototype, "OnMouseUp", null),
        (0, o.Cg)([c.oI], U.prototype, "bindSettingsButton", null),
        (0, o.Cg)([c.oI], U.prototype, "BindSettingsPanel", null),
        (0, o.Cg)([c.oI], U.prototype, "OnShowStats", null);
      let W = class extends a.Component {
        constructor(e) {
          super(e),
            (this.k_nHideSliderTimeout = 1500),
            (this.m_bShowSlider = true),
            (this.m_schHideSlider = new u.LU()),
            (this.m_bChildDragging = !1),
            (this.m_bMouseOver = !1),
            (0, n.Gn)(this);
        }
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
            a.createElement(
              "div",
              {
                className: n,
                onMouseEnter: this.OnMouseEnter,
                onMouseLeave: this.OnMouseLeave,
              },
              a.createElement(
                "div",
                { className: "BroadcastVolumeControl_FixedLayout" },
                a.createElement(
                  "div",
                  { className: o, onClick: this.ToggleMute },
                  a.createElement(D.fSs, null),
                ),
                a.createElement(z, { video: e, onDrag: this.OnChildDrag }),
              ),
            )
          );
        }
      };
      (0, o.Cg)([n.sH], W.prototype, "m_bShowSlider", void 0),
        (0, o.Cg)([c.oI], W.prototype, "ToggleMute", null),
        (0, o.Cg)([c.oI], W.prototype, "OnMouseEnter", null),
        (0, o.Cg)([c.oI], W.prototype, "OnMouseLeave", null),
        (0, o.Cg)([c.oI], W.prototype, "OnChildDrag", null),
        (W = (0, o.Cg)([i.PA], W));
      let z = class extends a.Component {
        constructor(e) {
          super(e),
            (this.m_elSlider = null),
            (this.m_nVolumeStartOfDrag = 0),
            (0, n.Gn)(this);
        }
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
            o = B.Fu(t, s.left, s.right, 0, 1),
            n = B.OQ(o, 0, 1),
            i = this.props.video;
          i.SetMute(o < 0.01), i.SetVolume(n);
        }
        render() {
          let e = this.props.video,
            t = 100 * e.GetVolume();
          e.IsMuted() && (t = 0);
          let s = { left: `${t}%` },
            o = { width: `${t}%` };
          return a.createElement(
            "div",
            {
              className: "BroadcastVolumeSlider",
              onMouseDown: this.OnMouseDown,
            },
            a.createElement("div", {
              className: "BroadcastVolumeSlider_Track",
            }),
            a.createElement("div", {
              className: "BroadcastVolumeSlider_Fill",
              style: o,
            }),
            a.createElement("div", {
              className: "BroadcastVolumeSlider_Thumb",
              style: s,
            }),
          );
        }
      };
      (0, o.Cg)([c.oI], z.prototype, "OnMouseDown", null),
        (0, o.Cg)([c.oI], z.prototype, "OnMouseMove", null),
        (0, o.Cg)([c.oI], z.prototype, "OnMouseUp", null),
        (0, o.Cg)([n.XI], z.prototype, "SetVolumeWithCoord", null),
        (z = (0, o.Cg)([i.PA], z));
      var J = s(15759);
      const X = 15;
      let j = class extends a.Component {
        constructor(e) {
          super(e),
            (this.m_schHideControls = new u.LU()),
            (this.m_schUnmountControls = new u.LU()),
            (this.m_elVideo = null),
            (this.m_elBroadcastPlayer = null),
            (this.m_bMouseDown = !1),
            (this.m_elMouseDown = null),
            (this.m_listeners = new u.Ji()),
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
          var e, t;
          let s = this.state.video;
          s &&
            (d.es.StopVideo(s),
            this.setState({ video: null }),
            null === (t = (e = this.props).fnSetBroadcastVideo) ||
              void 0 === t ||
              t.call(e, null));
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
                    t =
                      (null == e
                        ? void 0
                        : e.GetAssets().GetMainCapsuleURL()) || "";
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
          var t, s;
          let o;
          this.StopVideo(),
            this.props.steamIDBroadcast
              ? e &&
                (o = d.es.CreateBroadcastVideo(
                  e,
                  this.props.steamIDBroadcast,
                  this.props.watchLocation,
                  this.props.bWebRTC,
                ))
              : this.props.broadcastClipID
                ? e &&
                  (o = d.es.CreateClipVideo(
                    e,
                    this.props.broadcastClipID,
                    this.props.watchLocation,
                  ))
                : this.props.nAppIDVOD &&
                  e &&
                  ((o = d.es.CreateVODVideo(
                    e,
                    this.props.nAppIDVOD,
                    this.props.watchLocation,
                  )),
                  this.props.fnOnVideoEnd &&
                    o.SetOnVideoCallback(this.props.fnOnVideoEnd)),
            o &&
              (this.props.bStartMuted && o.SetMute(!0),
              this.props.bStartWithSubtitles && o.SetStartWithSubtitles(!0),
              this.props.bStartPaused
                ? o.StopPlaybackTillUserInput()
                : o.Play()),
            this.setState({ video: o }),
            null === (s = (t = this.props).fnSetBroadcastVideo) ||
              void 0 === s ||
              s.call(t, o),
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
            ((0, r.lX)(
              a.createElement(h.tz, null, this.GetContextMenuItems()),
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
          let o = (0, l.k2)(`${I.TS.STORE_BASE_URL}app/${s.m_strAppId}`);
          this.props.onOpenLinkInNewWindow(e, o), e.stopPropagation();
        }
        GetContextMenuItems() {
          let e = [],
            t = this.state.video;
          if (!t) return e;
          let s = t.GetBroadcastInfo();
          return (
            e.push(
              a.createElement(
                h.IK,
                {
                  key: "togglestats",
                  bChecked: this.state.bShowStats,
                  onSelected: (e) => {
                    this.ToggleStatsView(e);
                  },
                },
                (0, k.we)("#Broadcast_VideoContext_ToggleStats"),
              ),
            ),
            s &&
              "0" != s.m_strAppId &&
              Number.parseInt(s.m_strAppId) != d.fO &&
              e.push(
                a.createElement(
                  h.kt,
                  {
                    key: "visitstore",
                    onSelected: (e) => {
                      this.ShowStorePage(e);
                    },
                  },
                  (0, k.we)("#Broadcast_VideoContext_OpenStore"),
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
            ((0, y.ww)(this.m_elBroadcastPlayer)
              ? (0, y.MS)(this.m_elBroadcastPlayer)
              : (0, y.tl)(this.m_elBroadcastPlayer, this.m_elVideo));
        }
        OnFullscreenChange(e) {
          if (!this.m_elBroadcastPlayer) return;
          let t = (0, y.ww)(this.m_elBroadcastPlayer);
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
          var e;
          const t = this.state.video,
            s = t && t.IsPaused(),
            o = t && t.BHasDASHStats() && this.state.bShowStats,
            n = Boolean(t && t.IsReplay()),
            i = this.state.bMountControls,
            r = this.state.bControlsVisible || s,
            l = t && t.GetUserInputNeeded(),
            d =
              (null == t ? void 0 : t.IsBroadcastVOD()) &&
              l &&
              this.state.strInitialCapsuleImageUrl;
          let m = "videoContainer";
          r || (m += " HidePlayerControls"),
            s && (m += " VideoPaused"),
            this.state.bFullscreen && (m += " fullscreenVideo"),
            this.props.classes && (m += " " + this.props.classes);
          let c = [];
          !this.state.bFullscreen &&
            this.props.actions &&
            (c = c.concat(this.props.actions)),
            !this.state.bFullscreen &&
              this.props.onTheaterMode &&
              c.push(
                a.createElement("div", {
                  key: "ChatPosToggle ChatTheaterToggle",
                  onClick: this.props.onTheaterMode,
                  title: (0, k.we)("#Broadcast_View_Theater"),
                  className: "BroadcastTheaterToggle",
                }),
              ),
            c.push(
              a.createElement("div", {
                key: "FullscreenToggle",
                title: (0, k.we)("#Broadcast_View_Fullscreen"),
                onClick: this.OnToggleFullscreen,
                className: "BroadcastFullscreenToggle",
              }),
            );
          const u = i && !this.BHideVideoControls(),
            h = i && !this.state.bFullscreen,
            S =
              this.props.fnRenderBroadcastContext &&
              this.props.fnRenderBroadcastContext();
          return a.createElement(
            "div",
            {
              ref: this.BindBroadcastPlayerRef,
              className: m,
              onMouseMove: this.OnMouseMove,
              onClick: this.OnMouseMove,
              onMouseLeave: this.OnMouseLeave,
              onContextMenu: this.OnContextMenu,
              onMouseDown: this.OnMouseDown,
            },
            S && a.createElement("div", { className: N().BroadcastContext }, S),
            n && a.createElement(R, null),
            this.props.showVideoBackgroundBlur &&
              a.createElement(p, {
                className: "videoBlur",
                elementRef: this.m_elVideo,
                updateRate: 33,
                width: 320,
                height: 180,
                reductionFactor: 10,
                blurAmount: 5,
              }),
            a.createElement("video", {
              className: "videoSrc",
              ref: this.BindVideoRef,
              muted: null === (e = this.props.bMuted) || void 0 === e || e,
              autoPlay: !0,
              playsInline: !0,
              controls: !1,
              onVolumeChange: this.props.fnVolumeChanged,
              onClick: this.props.fnVideoClick,
            }),
            this.props.linkRegions
              ? a.createElement(re, {
                  linkRegions: this.props.linkRegions,
                  editMode: this.props.editMode,
                  onSaveLinkRegions: this.props.onSaveLinkRegions,
                })
              : null,
            this.props.linkElement,
            d &&
              a.createElement("img", {
                loading: "lazy",
                className: (0, g.A)(
                  N().BroadcastPlaceholderImg,
                  "BroadcastPlaceholderImg",
                ),
                src: this.state.strInitialCapsuleImageUrl,
              }),
            u &&
              a.createElement(q, {
                video: t,
                actions: c,
                onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                onShowStats: this.ToggleStatsView,
                bIncludeClipEditor: this.props.bIncludeClipEditor,
              }),
            h && a.createElement(Q, { onClick: this.props.onRequestClose }),
            o &&
              a.createElement(H, {
                stats: t.GetDASHPlayerStats(),
                closeStats: this.CloseStats,
              }),
            a.createElement(G, { video: t }),
            l && a.createElement(L, { video: t }),
          );
        }
      };
      (0, o.Cg)([c.oI], j.prototype, "BindBroadcastPlayerRef", null),
        (0, o.Cg)([c.oI], j.prototype, "BindVideoRef", null),
        (0, o.Cg)([c.oI], j.prototype, "OnMouseDown", null),
        (0, o.Cg)([c.oI], j.prototype, "OnMouseUp", null),
        (0, o.Cg)([c.oI], j.prototype, "OnMouseMove", null),
        (0, o.Cg)([c.oI], j.prototype, "OnMouseLeave", null),
        (0, o.Cg)([c.oI], j.prototype, "HideControls", null),
        (0, o.Cg)([c.oI], j.prototype, "UmountControls", null),
        (0, o.Cg)([c.oI], j.prototype, "ShowStatsView", null),
        (0, o.Cg)([c.oI], j.prototype, "OnContextMenu", null),
        (0, o.Cg)([c.oI], j.prototype, "ToggleStatsView", null),
        (0, o.Cg)([c.oI], j.prototype, "ShowStorePage", null),
        (0, o.Cg)([c.oI], j.prototype, "CloseStats", null),
        (0, o.Cg)([c.oI], j.prototype, "OnToggleFullscreen", null),
        (0, o.Cg)([c.oI], j.prototype, "OnFullscreenChange", null),
        (j = (0, o.Cg)([i.PA], j));
      const K = j;
      let q = class extends a.Component {
        render() {
          const { video: e } = this.props;
          if (!e) return null;
          let t = e.has_segments;
          return a.createElement(
            "div",
            { className: "videoControls" },
            a.createElement(ie, {
              steamID: this.props.video.GetBroadcastSteamID(),
              bHideThumbnail: !0,
              bVerticalBroadcastChat: !0,
              onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
            }),
            a.createElement(
              "div",
              { className: "videoControlsBottom" + (t ? "" : " noSegments") },
              a.createElement(ne, {
                video: e,
                bIncludeClipEditor: this.props.bIncludeClipEditor,
              }),
              a.createElement(
                "div",
                { className: "STV_BroadcastController" },
                a.createElement("div", {
                  className: "videoControlsButtons LeftSpacer",
                }),
                a.createElement($, { video: e }),
                a.createElement(Y, { video: e }),
                a.createElement(U, {
                  video: e,
                  actions: this.props.actions,
                  onShowStats: this.props.onShowStats,
                }),
              ),
            ),
          );
        }
      };
      q = (0, o.Cg)([i.PA], q);
      class Q extends a.PureComponent {
        render() {
          return this.props.onClick
            ? a.createElement(
                "div",
                {
                  className: "STV_BroadcastClose",
                  onClick: this.props.onClick,
                },
                a.createElement(D.sED, null),
              )
            : null;
        }
      }
      class $ extends a.Component {
        OnJumpBackward() {
          this.props.video.JumpTime(-15);
        }
        OnJumpForward() {
          this.props.video.JumpTime(X);
        }
        render() {
          let e = this.props.video,
            t = e.CanSeek();
          return a.createElement(
            "div",
            { className: "videoControlsButtons PlayControls" },
            a.createElement(ee, { video: e }),
            t &&
              a.createElement(
                "div",
                {
                  className: "videoControlButton videoControlJump controlFlip",
                  onClick: this.OnJumpBackward,
                },
                a.createElement(D.tID, {
                  bHidePostArrow: !0,
                  bHidePreArrow: !0,
                  bShowJumpAheadBox: !0,
                  bFlipHorizontal: !0,
                }),
                a.createElement("div", { className: "jumpAheadValue" }, X),
              ),
            a.createElement(Z, { video: e }),
            t &&
              a.createElement(
                "div",
                {
                  className: "videoControlButton videoControlJump",
                  onClick: this.OnJumpForward,
                },
                a.createElement(D.tID, {
                  bHidePostArrow: !0,
                  bHidePreArrow: !0,
                  bShowJumpAheadBox: !0,
                  bFlipHorizontal: !1,
                }),
                a.createElement("div", { className: "jumpAheadValue" }, X),
              ),
            t && a.createElement(te, { video: e }),
          );
        }
      }
      (0, o.Cg)([c.oI], $.prototype, "OnJumpBackward", null),
        (0, o.Cg)([c.oI], $.prototype, "OnJumpForward", null);
      const Y = (0, i.PA)((e) => {
        if (e.video.IsBroadcastClip() || e.video.IsBroadcastVOD()) return null;
        let t = e.video.IsOnLiveEdge();
        return a.createElement(
          "div",
          { className: "videoControlsButtons GoLive" },
          a.createElement(
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
            a.createElement(D.tID, {
              bHidePreArrow: !0,
              bHidePostArrow: !0,
              bFlipHorizontal: !1,
            }),
            a.createElement(
              "div",
              { className: "jumpGoLive" },
              (0, k.we)(
                t ? "#DASHPlayerControls_IsLive" : "#DASHPlayerControls_GoLive",
              ),
            ),
          ),
        );
      });
      let Z = class extends a.Component {
        OnTogglePlayPause() {
          this.props.video.TogglePlayPause();
        }
        render() {
          let e = this.props.video.IsPaused();
          return a.createElement(
            "div",
            {
              className: "videoControlButton buttonPlayPause",
              onClick: this.OnTogglePlayPause,
            },
            e ? a.createElement(D.jGG, null) : a.createElement(D.vRz, null),
          );
        }
      };
      (0, o.Cg)([c.oI], Z.prototype, "OnTogglePlayPause", null),
        (Z = (0, o.Cg)([i.PA], Z));
      let ee = class extends a.Component {
        constructor(e) {
          super(e),
            (this.video = void 0),
            (0, n.Gn)(this),
            (this.video = e.video);
        }
        componentDidUpdate() {
          this.video = this.props.video;
        }
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
          return a.createElement(
            "div",
            {
              className:
                "videoControlButton jumpToMarker controlFlip" +
                (e ? "" : " noMarkersOrSegments") +
                (this.has_previous_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToPreviousMarkerClicked,
            },
            a.createElement(D.tID, { bHidePostArrow: !0, bFlipHorizontal: !0 }),
          );
        }
      };
      (0, o.Cg)([n.sH], ee.prototype, "video", void 0),
        (0, o.Cg)([n.EW], ee.prototype, "has_previous_marker", null),
        (0, o.Cg)([c.oI], ee.prototype, "OnJumpToPreviousMarkerClicked", null),
        (ee = (0, o.Cg)([i.PA], ee));
      let te = class extends a.Component {
        constructor(e) {
          super(e),
            (this.video = void 0),
            (0, n.Gn)(this),
            (this.video = e.video);
        }
        componentDidUpdate() {
          this.video = this.props.video;
        }
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
          return a.createElement(
            "div",
            {
              className:
                "videoControlButton jumpToMarker" +
                (e ? "" : " noMarkersOrSegments") +
                (this.has_next_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToNextMarkerClicked,
            },
            a.createElement(D.tID, { bHidePostArrow: !0, bFlipHorizontal: !1 }),
          );
        }
      };
      (0, o.Cg)([n.sH], te.prototype, "video", void 0),
        (0, o.Cg)([n.EW], te.prototype, "has_next_marker", null),
        (0, o.Cg)([c.oI], te.prototype, "OnJumpToNextMarkerClicked", null),
        (te = (0, o.Cg)([i.PA], te));
      const se = (e) =>
        a.createElement(
          "div",
          {
            className: "timelineMarker",
            title: e.label,
            style: { left: e.pos + "%" },
            onMouseEnter: () => e.onMouseEnter(e.pos),
            onMouseLeave: e.onMouseLeave,
            onMouseDown: e.onMouseDown ? e.onMouseDown : void 0,
          },
          a.createElement(
            "div",
            { className: "timelineMarkerIcon" },
            a.createElement(D.Dp6, null),
          ),
        );
      function oe(e) {
        let t = e.startPos,
          s = e.endPos,
          o = "",
          n = 1;
        return (
          t < 0 && ((n = (s - t) / 10), (t = 0), (o = " hideFront")),
          a.createElement(
            "div",
            {
              className: "STV_timelineSegment" + o,
              style: { left: t + "%", width: s - t + "%", opacity: n },
              onClick: e.onClick,
            },
            a.createElement("div", {
              className: "STV_timelineSegmentFrontFill",
              style: { borderColor: "rgb(" + e.color + ")" },
            }),
            a.createElement(
              "div",
              {
                className: "STV_timelineSegmentLabel",
                style: { color: "rgb(" + e.color + ")" },
              },
              e.label,
            ),
            a.createElement("div", {
              className: "STV_timelineSegmentBackFill",
              style: { borderColor: "rgb(" + e.color + ")" },
            }),
          )
        );
      }
      let ne = class extends a.Component {
        constructor(e) {
          super(e),
            (this.m_elSlider = a.createRef()),
            (this.m_rectSlider = void 0),
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
            const e = B.OQ(n, s, t.m_editorEndTime - 5);
            t.m_editorStartTime = e;
          } else if (this.state.bEndMouseDown) {
            const e = B.OQ(n, t.m_editorStartTime + 5, o);
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
          let i = B.OQ(s, 0, 100).toFixed(1) + "%",
            r = B.OQ(o, 0, 100).toFixed(1) + "%",
            l = B.OQ(n, 0, 100).toFixed(1) + "%",
            m = {},
            c = {},
            u = {},
            p = {};
          t
            ? ((p.left = i), (m.width = i), (c.width = r), (u.width = l))
            : ((p.left = r), (c.width = r), (u.width = l));
          let h = (0, O.ap)(e.GetPlaybackTime()),
            S = (0, O.ap)(this.state.nHoverValue),
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
                a.createElement(se, {
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
                a.createElement(oe, {
                  key: s,
                  startPos: o,
                  endPos: n,
                  label: t.strTemplateName,
                  color: t.color,
                  onClick: (e) => this.OnSegmentClick(t.nTimeStart),
                }),
              );
          });
          const E = e.GetPercentOffsetFromTime(
              e.m_editorStartTime,
              d.a0.Timeline,
            ),
            _ = e.GetPercentOffsetFromTime(e.m_editorEndTime, d.a0.Timeline),
            f = this.props.bIncludeClipEditor
              ? [
                  a.createElement(se, {
                    key: "start",
                    pos: E,
                    label: (0, k.we)("#DASHPlayerControls_Start"),
                    onMouseEnter: this.OnMarkerMouseEnter,
                    onMouseLeave: this.OnMarkerMouseLeave,
                    onMouseDown: (e) => this.OnMouseDown(e, "start"),
                  }),
                  a.createElement(se, {
                    key: "end",
                    pos: _,
                    label: (0, k.we)("#DASHPlayerControls_End"),
                    onMouseEnter: this.OnMarkerMouseEnter,
                    onMouseLeave: this.OnMarkerMouseLeave,
                    onMouseDown: (e) => this.OnMouseDown(e, "end"),
                  }),
                ]
              : [];
          return a.createElement(
            "div",
            {
              className: "videoTimelineMain",
              tabIndex: 0,
              onKeyDown: this.OnKeyDown,
            },
            a.createElement(
              "div",
              { className: v },
              a.createElement("div", { className: "DialogLabel" }, h),
              a.createElement(
                "div",
                { className: "STV_timelineSegmentsContainer" },
                b,
              ),
              a.createElement(
                "div",
                {
                  onMouseDown: this.OnMouseDown,
                  onMouseMove: this.OnMouseHoverMove,
                  onMouseLeave: this.OnMouseHoverLeave,
                  ref: this.m_elSlider,
                },
                a.createElement(
                  "div",
                  { className: "VideoTimelineSlider" },
                  a.createElement("div", {
                    className: "STV_timelineValue",
                    style: m,
                  }),
                  a.createElement("div", {
                    className: "STV_timelineGhostValue",
                    style: c,
                  }),
                  a.createElement("div", {
                    className: "STV_timelineNoVideo",
                    style: u,
                  }),
                  C,
                  f,
                  Boolean(this.state.hoverX) &&
                    a.createElement(
                      "div",
                      {
                        key: "grabbertime",
                        style: {
                          position: "absolute",
                          left: this.state.hoverX - 75,
                          bottom: "30px",
                        },
                      },
                      a.createElement(
                        "div",
                        {
                          style: {
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                          },
                        },
                        this.state.thumbnailURL &&
                          a.createElement("img", {
                            style: { width: "150px" },
                            src: this.state.thumbnailURL,
                          }),
                        a.createElement(
                          "span",
                          {
                            className: "STV_timelineGrabberValue",
                            style: { position: "absolute", bottom: "4px" },
                          },
                          S,
                        ),
                      ),
                    ),
                  a.createElement(
                    "div",
                    { className: "STV_timelineGrabber_Wrapper", style: p },
                    a.createElement(
                      "div",
                      { className: "STV_timelineGrabber" + g },
                      a.createElement(
                        "div",
                        { className: "STV_timelineGrabberArrow" },
                        a.createElement(D.apU, null),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          );
        }
      };
      (0, o.Cg)([c.oI], ne.prototype, "OnMouseDown", null),
        (0, o.Cg)([c.oI], ne.prototype, "OnMouseMove", null),
        (0, o.Cg)([c.oI], ne.prototype, "OnMouseUp", null),
        (0, o.Cg)([c.oI], ne.prototype, "OnKeyDown", null),
        (0, o.Cg)([c.oI], ne.prototype, "OnMouseHoverMove", null),
        (0, o.Cg)([c.oI], ne.prototype, "OnMouseHoverLeave", null),
        (0, o.Cg)([c.oI], ne.prototype, "AdjustHoverForClientX", null),
        (0, o.Cg)([c.oI], ne.prototype, "OnSegmentClick", null),
        (0, o.Cg)([c.oI], ne.prototype, "OnMarkerMouseEnter", null),
        (0, o.Cg)([c.oI], ne.prototype, "OnMarkerMouseLeave", null),
        (ne = (0, o.Cg)([i.PA], ne));
      let ie = class extends a.Component {
        constructor() {
          super(...arguments), (this.state = { info: null });
        }
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
          return T.td.stream[e]
            ? a.createElement(ae, {
                value: e,
                options: T.td.stream,
                onChange: this.props.onLocalStreamChange,
              })
            : null;
        }
        render() {
          let { info: e } = this.state;
          if (!e) return null;
          let t = "";
          e.m_nViewerCount && (t = (0, P.Dq)(e.m_nViewerCount));
          let s =
              T.td.bValid && T.td.stream && T.td.stream[e.m_steamIDBroadcast],
            o =
              !this.props.bHideThumbnail &&
              this.props.bVerticalBroadcastChat &&
              (parseInt(e.m_strAppId) > 0 || s);
          const n =
            !this.props.bHideThumbnail &&
            this.props.bVerticalBroadcastChat &&
            s &&
            T.td.gidEvent;
          return a.createElement(
            "div",
            { className: "BroadcastDetails" },
            !this.props.bHideThumbnail &&
              a.createElement(E, {
                className: "broadcastDetailsThumbBlur",
                src: e.m_strThumbnailUrl,
                draggable: !1,
                duration: 2500,
              }),
            a.createElement(
              "div",
              { className: "BroadcastDetailsHeader" },
              e &&
                e.m_strAppTitle &&
                a.createElement(
                  "div",
                  { className: "displayColumn" },
                  a.createElement(
                    "div",
                    { className: "Info" },
                    a.createElement(
                      "span",
                      { className: "AppTitle" },
                      e.m_strAppTitle,
                    ),
                    e.m_strTitle &&
                      a.createElement(
                        "span",
                        { className: "BroadcastTitle" },
                        " - ",
                        e.m_strTitle,
                      ),
                    this.props.onLocalStreamChange &&
                      this.RenderStreamSwitcher(),
                  ),
                  t &&
                    a.createElement(
                      "div",
                      { className: "BroadcastDetailsHeader_ViewerCount" },
                      a.createElement(D.y_e, null),
                      (0, k.Yp)("#Broadcast_ViewerCount", t),
                    ),
                ),
              s &&
                this.props.onOpenLinkInNewWindow &&
                a.createElement(
                  "div",
                  { className: "Actions" },
                  a.createElement(
                    "div",
                    {
                      onClick: (e) =>
                        this.props.onOpenLinkInNewWindow(e, T.td.link),
                      className: "BroadcastLink",
                    },
                    T.td.linkName,
                  ),
                ),
            ),
            n && a.createElement(f.m, { gidEvent: T.td.gidEvent }),
            o &&
              a.createElement(_.pb, {
                id:
                  T.td.bValid &&
                  T.td.stream &&
                  T.td.stream[e.m_steamIDBroadcast]
                    ? T.td.appID
                    : parseInt(e.m_strAppId),
                type: "game",
                bPreferAssetWithoutOverride: !1,
              }),
          );
        }
      };
      ie = (0, o.Cg)([i.PA], ie);
      class ae extends a.Component {
        showContextMenu(e) {
          const { options: t, value: s, onChange: o } = this.props,
            n = Object.keys(t).map((e) =>
              a.createElement(
                h.IK,
                { key: e, onSelected: () => o(e), bChecked: e === s },
                (0, k.we)(t[e]),
              ),
            );
          (0, r.lX)(a.createElement(h.tz, null, n), e);
        }
        render() {
          const { value: e, options: t } = this.props,
            s = t[e];
          return a.createElement(
            "div",
            { className: "BroadcastLanguage", onClick: this.showContextMenu },
            a.createElement("span", null, " - ", (0, k.we)(s)),
            a.createElement(
              "div",
              { className: "ContextMenuButton" },
              a.createElement(D.GB9, null),
            ),
          );
        }
      }
      (0, o.Cg)([c.oI], ae.prototype, "showContextMenu", null);
      let re = class extends a.Component {
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
          return a.createElement(
            "div",
            { className: "LinkOverlayContainer" },
            a.createElement(
              "div",
              { className: "LinkOverlayValidRegion" },
              !this.props.editMode && this.props.linkRegions
                ? this.props.linkRegions.map((e) => {
                    const t = (0, J.p)(e.url);
                    return a.createElement(
                      M.uU,
                      {
                        key: e.link_index,
                        href: e.url,
                        bForceExternal: t,
                        bUseLinkFilter: t,
                      },
                      a.createElement(
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
                        a.createElement(
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
                  a.createElement(w.I, {
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
                a.createElement(
                  "div",
                  { className: "AddLinkRegion", onClick: this.AddLinkRegion },
                  (0, k.we)("#SteamTV_AddLinkRegion"),
                ),
            ),
            a.createElement(
              "div",
              { className: "LinkOverlayInvalidRegion" },
              a.createElement(
                "div",
                null,
                (0, k.we)("#SteamTV_LinkRegionReserved"),
              ),
            ),
          );
        }
      };
      (0, o.Cg)([c.oI], re.prototype, "AddLinkRegion", null),
        (0, o.Cg)([c.oI], re.prototype, "LoadLinkRegion", null),
        (0, o.Cg)([c.oI], re.prototype, "OnSaveRegions", null),
        (0, o.Cg)([c.oI], re.prototype, "DeleteRegion", null),
        (0, o.Cg)([c.oI], re.prototype, "UpdatePanel", null),
        (re = (0, o.Cg)([i.PA], re));
    },
    60727: (e, t, s) => {
      "use strict";
      s.d(t, { l: () => d, m: () => l });
      var o = s(34629),
        n = s(14947),
        i = s(17720),
        a = s(44165),
        r = s(91254);
      class l {
        constructor() {
          (this.m_mapBroadcasterSteamIDToEvents = new Map()),
            (this.m_mapBroadcasterSteamIDData = new Map()),
            (0, n.Gn)(this);
        }
        static GetBBCodeParam(e, t, s = "") {
          const o = new RegExp(`\\W${t}\\W*=\\W*\\"(.*?)\\"`, "gmi").exec(e);
          return o ? o[1] : s;
        }
        static ParseCalendarEventPresentersFromText(e) {
          const t = /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
            s = new Array();
          for (;;) {
            const o = t.exec(e);
            if (null === o) break;
            const n = o[1],
              a = o[2],
              r = l.GetBBCodeParam(n, "steamid"),
              d = {
                steamID: r ? new i.b(r) : void 0,
                name: l.GetBBCodeParam(n, "name"),
                title: l.GetBBCodeParam(n, "title"),
                company: l.GetBBCodeParam(n, "company"),
                photo: l.GetBBCodeParam(n, "photo"),
                bio: a,
              };
            s.push(d);
          }
          return s;
        }
        static ParseEventModelPresenters(e, t) {
          const s = e.GetDescriptionWithFallback(t);
          return l.ParseCalendarEventPresentersFromText(s);
        }
        static ParseEventAppReferencesFromText(e) {
          const t = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
            s = new Set();
          for (;;) {
            const o = t.exec(e);
            if (null === o) break;
            const n = o[1];
            s.add(Number(n));
          }
          return s;
        }
        static ParseEventModelAppReferences(e, t) {
          var s;
          const o = e.GetDescriptionWithFallback(t),
            n = l.ParseEventAppReferencesFromText(o);
          if (
            null === (s = e.jsondata) || void 0 === s
              ? void 0
              : s.referenced_appids
          )
            for (const t of e.jsondata.referenced_appids) n.add(t);
          return n;
        }
        async BuildBroadcasterSteamIDToActiveEventMap(e) {
          const t = a.HD.GetTimeNowWithOverride(),
            s = e.GetCalendarItemsInTimeRange(t - 3600, t);
          for (const e of s.rgCalendarItems)
            r.O3.QueueLoadPartnerEvent(e.clanid, e.unique_id);
          const o = s.rgCalendarItems.map((e) =>
              r.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                i.b.InitFromClanID(e.clanid),
                e.unique_id,
                0,
              ),
            ),
            n = await Promise.all(o),
            l = new Map();
          for (const e of n)
            if (e && !(e.endTime && e.endTime < t))
              for (const t of e.GetBroadcastWhitelistAsSteamIDs())
                l.has(t) ? l.get(t).push(e) : l.set(t, [e]);
          return l;
        }
        IsBroadcasterAlreadyBound(e, t) {
          const s = this.m_mapBroadcasterSteamIDToEvents.get(e),
            o = s ? s.length : 0;
          if ((t ? t.length : 0) != o) return !1;
          for (let e = 0; e < o; e++) if (s[e] != t[e].GID) return !1;
          return !0;
        }
        static BuildSteamIDToPresenterMapFromEventList(e, t) {
          let s = new Map();
          for (const o of e) {
            if (!o) continue;
            const e = l.ParseEventModelPresenters(o, t);
            for (const t of e)
              t.steamID && s.set(t.steamID.ConvertTo64BitString(), t);
          }
          return s;
        }
        RemoveCachedDataIfNotInMap(e) {
          const t = new Array();
          this.m_mapBroadcasterSteamIDToEvents.forEach((s, o) => {
            e.has(o) || t.push(o);
          }),
            t.forEach((e) => {
              this.m_mapBroadcasterSteamIDData.delete(e),
                this.m_mapBroadcasterSteamIDToEvents.delete(e);
            });
        }
        static BuildAppIDRefsForEventList(e, t) {
          const s = new Set();
          for (const o of e) {
            l.ParseEventModelAppReferences(o, t).forEach((e) => s.add(e));
          }
          return Array.from(s);
        }
        UpdateCachedDataFromEvents(e, t) {
          e.forEach((e, s) => {
            if (this.IsBroadcasterAlreadyBound(s, e)) return;
            const o = {
              m_mapPresenters: l.BuildSteamIDToPresenterMapFromEventList(e, t),
              m_rgAppIDs: l.BuildAppIDRefsForEventList(e, t),
            };
            this.m_mapBroadcasterSteamIDData.set(s, o),
              this.m_mapBroadcasterSteamIDToEvents.set(
                s,
                e.map((e) => e.GID),
              );
          });
        }
        async SynchronizeEventsWithBroadcasts(e, t) {
          const s = await this.BuildBroadcasterSteamIDToActiveEventMap(e);
          this.RemoveCachedDataIfNotInMap(s),
            this.UpdateCachedDataFromEvents(s, t);
        }
        GetPresenterMapForBroadcasterSteamID(e) {
          var t;
          return null === (t = this.m_mapBroadcasterSteamIDData.get(e)) ||
            void 0 === t
            ? void 0
            : t.m_mapPresenters;
        }
        GetAppIDListForBroadcasterSteamID(e) {
          var t;
          return null === (t = this.m_mapBroadcasterSteamIDData.get(e)) ||
            void 0 === t
            ? void 0
            : t.m_rgAppIDs;
        }
      }
      (0, o.Cg)([n.sH], l.prototype, "m_mapBroadcasterSteamIDData", void 0);
      const d = new l();
    },
  },
]);
