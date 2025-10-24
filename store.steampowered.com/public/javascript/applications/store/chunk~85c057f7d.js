/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4523],
  {
    15527: (e) => {
      e.exports = {
        BroadcastPlayerLite: "SAxf3Rqn792kM6c4U_vx5",
        BroadcastPlayerLiteVideo: "yCd0zjymzfw3HkVm-1YwX",
        BroadcastContext: "_3TnYLKMweBMIC69qFU6OJj",
        BroadcastPlaceholderImg: "_3hxn99MT14hFUCrUp6zbsf",
      };
    },
    61088: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        AppCarouselTrailerCtn: "_2DzJ9TSrYmyo1tY_R-1jym",
        AutoplayCheckbox: "ZZgGaqlJvV83f4CYl3O3N",
        AppVideo: "_3sG-J5T8SrzM0Hjkda7sgL",
        Microtrailer: "_24GFDabY2zeyuzhvACpldO",
        PlayFullTrailer: "_115ZF6m0XsEieocbL7zjo-",
        "microtrailer-trans-out": "HMoi7fPFNjxiHeyrfkgmO",
        PlayMicrotrailer: "_2edFDJ0B9YjtlfqugPTxw0",
        "microtrailer-trans-in": "_3D_pgT8sxFP3ieDxVt_1zp",
        NoTrailer: "WtSN6aaEz7vEnRjVrq2hS",
        Trailer: "_1_z8vE2vYRzSyf1HQIcm5O",
        "trailer-trans-in": "_3kp7PkbzSVQPFoobA3Xx7N",
        AppMainCap: "_3cc6kgsSpd-DeLRDHEM_lD",
        AppMainCapFadeIn: "_2tGHq2pbqmrGJVCXoN5f0r",
        PlayButton: "_1y11BvPq_nL5EZFF8GLuD9",
        PlayButtonCapFadeIn: "_3Nk6pNRuMCIddyuE9mWS55",
        AutoplayCheckboxCtn: "_2HvO_RKtxiyyhZsELjYyq5",
        AOWarning: "_19l-UjQZVVGNK5SKnOrmJB",
        Text: "VoAJhMdtQTylTg3G03nJo",
        "capsule-trans-out": "hckHU2LXCJNx0X37OqCsx",
      };
    },
    72224: (e, t, s) => {
      "use strict";
      s.r(t),
        s.d(t, {
          BroadcastDetails: () => ie,
          LinkOverlay: () => le,
          default: () => q,
        });
      var o = s(34629),
        n = s(14947),
        i = s(75844),
        a = s(90626),
        l = s(88997),
        r = s(55963),
        u = s(54728),
        d = s(82097),
        c = s(84933),
        m = s(6144);
      class p extends a.Component {
        m_elCanvas;
        m_Context;
        m_schUpdate = new m.LU();
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
      var h = s(68451),
        S = s(16569),
        v = s(90740),
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
            ...l
          } = this.props;
          const r = { ...(t || {}), transitionDuration: s / 1e3 + "s" };
          return a.createElement(
            S.A,
            { ...l, className: (0, g.A)("crossfade", o) },
            a.createElement(
              v.A,
              {
                nodeRef: i,
                classNames: "crossfade-anim",
                timeout: s,
                key: e(),
                style: r,
              },
              n,
            ),
          );
        }
      }
      function f(e) {
        const { src: t, ...s } = e,
          o = { backgroundImage: `url(${t})` },
          n = a.useRef(null);
        return a.createElement(
          b,
          { style: o, keyExtractor: () => t, childRef: n, ...s },
          a.createElement("div", { ref: n, className: "crossfade-img" }),
        );
      }
      var y = s(45359),
        E = s(69409),
        _ = s(81416),
        w = s(12155),
        M = s(51272),
        k = s(56011),
        P = s(61859),
        D = s(82227),
        T = s(25489),
        V = s(78327),
        O = s(3067),
        I = s(36064),
        B = s(15527),
        N = s.n(B),
        A = s(22797);
      function R() {
        return a.createElement(
          "div",
          { className: "STV_ReplayBanner" },
          (0, P.we)("#DASHPlayerControls_IsReplay"),
        );
      }
      const L = (0, i.PA)((e) => {
        let t = e.video;
        if (t && (t.IsBroadcastClip() || t.IsBroadcastVOD())) return null;
        let s = u.fK.Loading,
          o = "";
        if (t) {
          (s = t.GetBroadcastState()), (o = t.GetBroadcastStateDescription());
          let e = t.IsBuffering();
          s == u.fK.Unlocking && ((s = u.fK.Loading), (o = "")),
            s == u.fK.Ready && e && ((s = u.fK.Loading), (o = ""));
        }
        if (t && s != u.fK.Error && t.GetUserInputNeeded()) return null;
        if (s == u.fK.Ready) return null;
        let n = s == u.fK.Loading;
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
      class G extends a.Component {
        OnClick() {
          u.es.UserInputClickVideo(this.props.video);
        }
        render() {
          return a.createElement(
            "div",
            {
              className: "BroadcastVideoUserInputNeeded",
              onClick: this.OnClick,
            },
            a.createElement(w.jGG, null),
            a.createElement(
              "span",
              null,
              (0, P.we)("#DASHPlayerControls_ClickToPlay"),
            ),
          );
        }
      }
      (0, o.Cg)([c.oI], G.prototype, "OnClick", null);
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
              a.createElement(w.sED, null),
            ),
            a.createElement(
              "div",
              null,
              (0, P.we)("#DASHPlayerStats_BufferingResolution"),
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
              (0, P.we)("#DASHPlayerStats_PlaybackResolution"),
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
              (0, P.we)("#DASHPlayerStats_HtmlResolution"),
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
              (0, P.we)("#DASHPlayerStats_ContentServer"),
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
              (0, P.we)("#DASHPlayerStats_StallEvents"),
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
              (0, P.we)("#DASHPlayerStats_FailedDownloads"),
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
              (0, P.we)("#DASHPlayerStats_TimeToFirstFrame"),
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
              (0, P.we)("#DASHPlayerStats_PlaybackRate"),
              " ",
              a.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetPlaybackRateForDisplay(),
              ),
            ),
            a.createElement(x, { stats: e }),
          );
        }
      };
      (0, o.Cg)([c.oI], H.prototype, "HideStats", null),
        (H = (0, o.Cg)([i.PA], H));
      let x = class extends a.Component {
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
              let n = (0, P.we)(
                  e
                    ? "#DASHPlayerStats_VideoBufferRange"
                    : "#DASHPlayerStats_AudioBufferRange",
                  i,
                ),
                l = e
                  ? t.GetBufferedVideoSegmentForDisplay(i)
                  : t.GetBufferedAudioSegmentForDisplay(i);
              s.push(
                a.createElement(
                  "div",
                  { key: o + i },
                  n,
                  " ",
                  a.createElement("span", { className: "videoStatsValue" }, l),
                ),
              );
            }
          else {
            let t = (0, P.we)(
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
              (0, P.we)("#DASHPlayerStats_BytesReceived"),
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
                (0, P.we)("#DASHPlayerStats_DroppedFrames"),
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
              (0, P.we)("#DASHPlayerStats_VideoBuffered"),
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
              (0, P.we)("#DASHPlayerStats_AudioBuffered"),
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
              (0, P.we)("#DASHPlayerStats_BandwidthRequired"),
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
              (0, P.we)("#DASHPlayerStats_BandwidthVideo"),
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
              (0, P.we)("#DASHPlayerStats_BandwidthNums"),
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
              (0, P.we)("#DASHPlayerStats_DownloadNums"),
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
              (0, P.we)("#DASHPlayerStats_ActiveDownloads"),
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
              (0, P.we)("#DASHPlayerStats_VideoDownloadProgress"),
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
              (0, P.we)("#DASHPlayerStats_DroppingFrames"),
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
              (0, P.we)("#DASHPlayerStats_CurrentFPS"),
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
      x = (0, o.Cg)([i.PA], x);
      var F = s(74872);
      class U extends a.Component {
        m_elSettingsButton;
        m_SettingsButtonPos;
        m_elClickListener;
        m_elSettingsPanel;
        m_elSubtitlesButton = a.createRef();
        m_elSubtitlesPanel = a.createRef();
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
            l = 0,
            r = a.createElement("div", {
              key: "separator",
              className: "settingsMenuSeparator",
            });
          if (
            (this.state.bSettingsOpen &&
              ((e = !0),
              (n = this.props.video.GetVideoRepresentations()),
              (i = n.map((e) =>
                a.createElement(
                  F.n,
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
                a.createElement(
                  F.D,
                  { key: "statsToggle", onClick: this.OnShowStats },
                  (0, P.we)("#Broadcast_VideoContext_ToggleStats"),
                  "\t",
                ),
              ),
              (l = 0 - (21 * i.length + 32))),
            this.state.bSubtitlesOpen)
          ) {
            (t = !0),
              (i = []),
              i.push(
                a.createElement(
                  F.n,
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
                  (0, P.we)("#Broadcast_None"),
                ),
              );
            for (let e = 0; e < this.props.video.ListSubtitles().length; e++) {
              const t = this.props.video.ListSubtitles()[e];
              i.push(
                a.createElement(
                  F.n,
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
          const u =
            this.props.video.BHasPlayer() && this.props.video.BHasTimedText();
          return a.createElement(
            "div",
            { className: "STV_BroadcastSettings" },
            u &&
              a.createElement(
                "div",
                {
                  className:
                    "videoControlButton" + (u ? " ClosedCaptionsActive" : ""),
                  onClick: this.OnSubtitlesClick,
                  ref: this.m_elSubtitlesButton,
                },
                a.createElement(w.N8C, null),
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
              a.createElement(w.wB_, null),
            ),
            a.createElement(z, { video: s }),
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
                    marginTop: l,
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
                    marginTop: l,
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
      let z = class extends a.Component {
        constructor(e) {
          super(e), (0, n.Gn)(this);
        }
        k_nHideSliderTimeout = 1500;
        m_bShowSlider = true;
        m_schHideSlider = new m.LU();
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
                  a.createElement(w.fSs, null),
                ),
                a.createElement(W, { video: e, onDrag: this.OnChildDrag }),
              ),
            )
          );
        }
      };
      (0, o.Cg)([n.sH], z.prototype, "m_bShowSlider", void 0),
        (0, o.Cg)([c.oI], z.prototype, "ToggleMute", null),
        (0, o.Cg)([c.oI], z.prototype, "OnMouseEnter", null),
        (0, o.Cg)([c.oI], z.prototype, "OnMouseLeave", null),
        (0, o.Cg)([c.oI], z.prototype, "OnChildDrag", null),
        (z = (0, o.Cg)([i.PA], z));
      let W = class extends a.Component {
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
            o = T.Fu(t, s.left, s.right, 0, 1),
            n = T.OQ(o, 0, 1),
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
      (0, o.Cg)([c.oI], W.prototype, "OnMouseDown", null),
        (0, o.Cg)([c.oI], W.prototype, "OnMouseMove", null),
        (0, o.Cg)([c.oI], W.prototype, "OnMouseUp", null),
        (0, o.Cg)([n.XI], W.prototype, "SetVolumeWithCoord", null),
        (W = (0, o.Cg)([i.PA], W));
      var J = s(15759);
      const X = 15;
      let j = class extends a.Component {
        m_schHideControls = new m.LU();
        m_schUnmountControls = new m.LU();
        m_elVideo = null;
        m_elBroadcastPlayer = null;
        m_bMouseDown = !1;
        m_elMouseDown = null;
        m_listeners = new m.Ji();
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
            (u.es.StopVideo(e),
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
              d.A.Get()
                .QueueAppRequest(this.props.nAppIDVOD, {
                  include_assets: !0,
                  include_trailers: !0,
                })
                .then(() => {
                  const e = d.A.Get().GetApp(this.props.nAppIDVOD),
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
                (t = u.es.CreateBroadcastVideo(
                  e,
                  this.props.steamIDBroadcast,
                  this.props.watchLocation,
                  this.props.bWebRTC,
                ))
              : this.props.broadcastClipID
                ? e &&
                  (t = u.es.CreateClipVideo(
                    e,
                    this.props.broadcastClipID,
                    this.props.watchLocation,
                  ))
                : this.props.nAppIDVOD &&
                  e &&
                  ((t = u.es.CreateVODVideo(
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
            ((0, l.lX)(
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
              a.createElement(
                h.IK,
                {
                  key: "togglestats",
                  bChecked: this.state.bShowStats,
                  onSelected: (e) => {
                    this.ToggleStatsView(e);
                  },
                },
                (0, P.we)("#Broadcast_VideoContext_ToggleStats"),
              ),
            ),
            s &&
              "0" != s.m_strAppId &&
              Number.parseInt(s.m_strAppId) != u.fO &&
              e.push(
                a.createElement(
                  h.kt,
                  {
                    key: "visitstore",
                    onSelected: (e) => {
                      this.ShowStorePage(e);
                    },
                  },
                  (0, P.we)("#Broadcast_VideoContext_OpenStore"),
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
            u.es.GetBroadcastState(e) == u.fK.Error
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
            r =
              e?.IsBroadcastVOD() && l && this.state.strInitialCapsuleImageUrl;
          let u = "videoContainer";
          i || (u += " HidePlayerControls"),
            t && (u += " VideoPaused"),
            this.state.bFullscreen && (u += " fullscreenVideo"),
            this.props.classes && (u += " " + this.props.classes);
          let d = [];
          !this.state.bFullscreen &&
            this.props.actions &&
            (d = d.concat(this.props.actions)),
            !this.state.bFullscreen &&
              this.props.onTheaterMode &&
              d.push(
                a.createElement("div", {
                  key: "ChatPosToggle ChatTheaterToggle",
                  onClick: this.props.onTheaterMode,
                  title: (0, P.we)("#Broadcast_View_Theater"),
                  className: "BroadcastTheaterToggle",
                }),
              ),
            d.push(
              a.createElement("div", {
                key: "FullscreenToggle",
                title: (0, P.we)("#Broadcast_View_Fullscreen"),
                onClick: this.OnToggleFullscreen,
                className: "BroadcastFullscreenToggle",
              }),
            );
          const c = n && !this.BHideVideoControls(),
            m = n && !this.state.bFullscreen,
            h =
              this.props.fnRenderBroadcastContext &&
              this.props.fnRenderBroadcastContext();
          return a.createElement(
            "div",
            {
              ref: this.BindBroadcastPlayerRef,
              className: u,
              onMouseMove: this.OnMouseMove,
              onClick: this.OnMouseMove,
              onMouseLeave: this.OnMouseLeave,
              onContextMenu: this.OnContextMenu,
              onMouseDown: this.OnMouseDown,
            },
            h && a.createElement("div", { className: N().BroadcastContext }, h),
            o && a.createElement(R, null),
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
              muted: this.props.bMuted ?? !0,
              autoPlay: !0,
              playsInline: !0,
              controls: !1,
              onVolumeChange: this.props.fnVolumeChanged,
              onClick: this.props.fnVideoClick,
            }),
            this.props.linkRegions
              ? a.createElement(le, {
                  linkRegions: this.props.linkRegions,
                  editMode: this.props.editMode,
                  onSaveLinkRegions: this.props.onSaveLinkRegions,
                })
              : null,
            this.props.linkElement,
            r &&
              a.createElement("img", {
                loading: "lazy",
                className: (0, g.A)(
                  N().BroadcastPlaceholderImg,
                  "BroadcastPlaceholderImg",
                ),
                src: this.state.strInitialCapsuleImageUrl,
              }),
            c &&
              a.createElement(K, {
                video: e,
                actions: d,
                onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                onShowStats: this.ToggleStatsView,
                bIncludeClipEditor: this.props.bIncludeClipEditor,
              }),
            m && a.createElement(Y, { onClick: this.props.onRequestClose }),
            s &&
              a.createElement(H, {
                stats: e.GetDASHPlayerStats(),
                closeStats: this.CloseStats,
              }),
            a.createElement(L, { video: e }),
            l && a.createElement(G, { video: e }),
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
      const q = j;
      let K = class extends a.Component {
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
                a.createElement(Q, { video: e }),
                a.createElement(Z, { video: e }),
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
      K = (0, o.Cg)([i.PA], K);
      class Y extends a.PureComponent {
        render() {
          return this.props.onClick
            ? a.createElement(
                "div",
                {
                  className: "STV_BroadcastClose",
                  onClick: this.props.onClick,
                },
                a.createElement(w.sED, null),
              )
            : null;
        }
      }
      class Q extends a.Component {
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
                a.createElement(w.tID, {
                  bHidePostArrow: !0,
                  bHidePreArrow: !0,
                  bShowJumpAheadBox: !0,
                  bFlipHorizontal: !0,
                }),
                a.createElement("div", { className: "jumpAheadValue" }, X),
              ),
            a.createElement($, { video: e }),
            t &&
              a.createElement(
                "div",
                {
                  className: "videoControlButton videoControlJump",
                  onClick: this.OnJumpForward,
                },
                a.createElement(w.tID, {
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
      (0, o.Cg)([c.oI], Q.prototype, "OnJumpBackward", null),
        (0, o.Cg)([c.oI], Q.prototype, "OnJumpForward", null);
      const Z = (0, i.PA)((e) => {
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
            a.createElement(w.tID, {
              bHidePreArrow: !0,
              bHidePostArrow: !0,
              bFlipHorizontal: !1,
            }),
            a.createElement(
              "div",
              { className: "jumpGoLive" },
              (0, P.we)(
                t ? "#DASHPlayerControls_IsLive" : "#DASHPlayerControls_GoLive",
              ),
            ),
          ),
        );
      });
      let $ = class extends a.Component {
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
            e ? a.createElement(w.jGG, null) : a.createElement(w.vRz, null),
          );
        }
      };
      (0, o.Cg)([c.oI], $.prototype, "OnTogglePlayPause", null),
        ($ = (0, o.Cg)([i.PA], $));
      let ee = class extends a.Component {
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
          return a.createElement(
            "div",
            {
              className:
                "videoControlButton jumpToMarker controlFlip" +
                (e ? "" : " noMarkersOrSegments") +
                (this.has_previous_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToPreviousMarkerClicked,
            },
            a.createElement(w.tID, { bHidePostArrow: !0, bFlipHorizontal: !0 }),
          );
        }
      };
      (0, o.Cg)([n.sH], ee.prototype, "video", void 0),
        (0, o.Cg)([n.EW], ee.prototype, "has_previous_marker", null),
        (0, o.Cg)([c.oI], ee.prototype, "OnJumpToPreviousMarkerClicked", null),
        (ee = (0, o.Cg)([i.PA], ee));
      let te = class extends a.Component {
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
          return a.createElement(
            "div",
            {
              className:
                "videoControlButton jumpToMarker" +
                (e ? "" : " noMarkersOrSegments") +
                (this.has_next_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToNextMarkerClicked,
            },
            a.createElement(w.tID, { bHidePostArrow: !0, bFlipHorizontal: !1 }),
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
            a.createElement(w.Dp6, null),
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
        m_elSlider = a.createRef();
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
            const e = T.OQ(n, s, t.m_editorEndTime - 5);
            t.m_editorStartTime = e;
          } else if (this.state.bEndMouseDown) {
            const e = T.OQ(n, t.m_editorStartTime + 5, o);
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
              u.a0.Timeline,
            ),
            o = e.GetPercentOffsetFromTime(e.GetPlaybackTime(), u.a0.Timeline),
            n = e.GetPercentOffsetFromTime(
              e.GetVideoAvailableStartTime(),
              u.a0.Timeline,
            );
          n < 0.05 && (n = 0);
          let i = T.OQ(s, 0, 100).toFixed(1) + "%",
            l = T.OQ(o, 0, 100).toFixed(1) + "%",
            r = T.OQ(n, 0, 100).toFixed(1) + "%",
            d = {},
            c = {},
            m = {},
            p = {};
          t
            ? ((p.left = i), (d.width = i), (c.width = l), (m.width = r))
            : ((p.left = l), (c.width = l), (m.width = r));
          let h = (0, I.ap)(e.GetPlaybackTime()),
            S = (0, I.ap)(this.state.nHoverValue),
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
            let o = e.GetPercentOffsetFromTime(t.nTime, u.a0.Timeline);
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
            let o = e.GetPercentOffsetFromTime(t.nTimeStart, u.a0.Timeline);
            if (o > 100) return;
            let n = e.GetPercentOffsetFromTime(t.nTimeEnd, u.a0.Timeline);
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
          const f = e.GetPercentOffsetFromTime(
              e.m_editorStartTime,
              u.a0.Timeline,
            ),
            y = e.GetPercentOffsetFromTime(e.m_editorEndTime, u.a0.Timeline),
            E = this.props.bIncludeClipEditor
              ? [
                  a.createElement(se, {
                    key: "start",
                    pos: f,
                    label: (0, P.we)("#DASHPlayerControls_Start"),
                    onMouseEnter: this.OnMarkerMouseEnter,
                    onMouseLeave: this.OnMarkerMouseLeave,
                    onMouseDown: (e) => this.OnMouseDown(e, "start"),
                  }),
                  a.createElement(se, {
                    key: "end",
                    pos: y,
                    label: (0, P.we)("#DASHPlayerControls_End"),
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
                    style: d,
                  }),
                  a.createElement("div", {
                    className: "STV_timelineGhostValue",
                    style: c,
                  }),
                  a.createElement("div", {
                    className: "STV_timelineNoVideo",
                    style: m,
                  }),
                  C,
                  E,
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
                        a.createElement(w.apU, null),
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
        state = { info: null };
        static getDerivedStateFromProps(e, t) {
          if (
            (!t.info || t.info.m_steamIDBroadcast !== e.steamID) &&
            (t.info && (u.es.StopInfo(t.info), (t.info = null)), e.steamID)
          ) {
            return { info: u.es.StartInfo(e.steamID) };
          }
          return null;
        }
        componentWillUnmount() {
          this.state.info && u.es.StopInfo(this.state.info);
        }
        RenderStreamSwitcher() {
          const e = this.props.steamID;
          return O.td.stream[e]
            ? a.createElement(ae, {
                value: e,
                options: O.td.stream,
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
              O.td.bValid && O.td.stream && O.td.stream[e.m_steamIDBroadcast],
            o =
              !this.props.bHideThumbnail &&
              this.props.bVerticalBroadcastChat &&
              (parseInt(e.m_strAppId) > 0 || s);
          const n =
            !this.props.bHideThumbnail &&
            this.props.bVerticalBroadcastChat &&
            s &&
            O.td.gidEvent;
          return a.createElement(
            "div",
            { className: "BroadcastDetails" },
            !this.props.bHideThumbnail &&
              a.createElement(f, {
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
                      a.createElement(w.y_e, null),
                      (0, P.Yp)("#Broadcast_ViewerCount", t),
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
                        this.props.onOpenLinkInNewWindow(e, O.td.link),
                      className: "BroadcastLink",
                    },
                    O.td.linkName,
                  ),
                ),
            ),
            n && a.createElement(E.m, { gidEvent: O.td.gidEvent }),
            o &&
              a.createElement(y.pb, {
                id:
                  O.td.bValid &&
                  O.td.stream &&
                  O.td.stream[e.m_steamIDBroadcast]
                    ? O.td.appID
                    : parseInt(e.m_strAppId),
                type: "game",
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
                (0, P.we)(t[e]),
              ),
            );
          (0, l.lX)(a.createElement(h.tz, null, n), e);
        }
        render() {
          const { value: e, options: t } = this.props,
            s = t[e];
          return a.createElement(
            "div",
            { className: "BroadcastLanguage", onClick: this.showContextMenu },
            a.createElement("span", null, " - ", (0, P.we)(s)),
            a.createElement(
              "div",
              { className: "ContextMenuButton" },
              a.createElement(w.GB9, null),
            ),
          );
        }
      }
      (0, o.Cg)([c.oI], ae.prototype, "showContextMenu", null);
      let le = class extends a.Component {
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
                  a.createElement(_.I, {
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
                  (0, P.we)("#SteamTV_AddLinkRegion"),
                ),
            ),
            a.createElement(
              "div",
              { className: "LinkOverlayInvalidRegion" },
              a.createElement(
                "div",
                null,
                (0, P.we)("#SteamTV_LinkRegionReserved"),
              ),
            ),
          );
        }
      };
      (0, o.Cg)([c.oI], le.prototype, "AddLinkRegion", null),
        (0, o.Cg)([c.oI], le.prototype, "LoadLinkRegion", null),
        (0, o.Cg)([c.oI], le.prototype, "OnSaveRegions", null),
        (0, o.Cg)([c.oI], le.prototype, "DeleteRegion", null),
        (0, o.Cg)([c.oI], le.prototype, "UpdatePanel", null),
        (le = (0, o.Cg)([i.PA], le));
    },
    79359: (e, t, s) => {
      "use strict";
      s.d(t, { M: () => l });
      var o = s(90626),
        n = s(6144),
        i = s(84933);
      const a = (e) => null != e;
      function l(e, t) {
        const [s, n] = o.useState(() => window.localStorage.getItem(e)),
          l = o.useRef(e),
          u = o.useCallback(
            (t) => {
              const s = a(t) ? String(t) : null;
              window.localStorage.setItem(e, s),
                n(s),
                r.Get().GetLocalStoreChangeCallback(e).Dispatch(s);
            },
            [e, n],
          );
        o.useEffect(() => {
          e != l.current &&
            (n(window.localStorage.getItem(e)), (l.current = e));
        }, [e]);
        const d = e == l.current ? s : window.localStorage.getItem(e);
        let c = t;
        return (
          a(d) &&
            (c = a(t)
              ? "boolean" == typeof t
                ? t.constructor("false" !== d)
                : t.constructor(d)
              : d),
          (0, i.hL)(r.Get().GetLocalStoreChangeCallback(e), n),
          [c, u]
        );
      }
      class r {
        m_mapChangeCallback = new Map();
        GetLocalStoreChangeCallback(e) {
          return (
            this.m_mapChangeCallback.has(e) ||
              this.m_mapChangeCallback.set(e, new n.lu()),
            this.m_mapChangeCallback.get(e)
          );
        }
        static s_Singleton;
        static Get() {
          return r.s_Singleton || (r.s_Singleton = new r()), r.s_Singleton;
        }
      }
    },
    60801: (e, t, s) => {
      "use strict";
      s.d(t, { S: () => D, X: () => M });
      var o = s(90626),
        n = s(76217),
        i = s(61088),
        a = s.n(i),
        l = s(12155),
        r = s(2627),
        u = s(61859),
        d = s(53835),
        c = s(52038),
        m = s(79359),
        p = s(78327),
        h = s(60778),
        S = s(72224),
        v = s(14947),
        g = s(46253),
        C = s(38535),
        b = s(54096),
        f = s(31963);
      const y = new h.wd("TrailerAppVideo"),
        E = "bGameHighlightAutoplayDisabled",
        _ = "discovery-queue-volume",
        w = "discovery-queue-mute";
      function M(e) {
        const {
            storeItem: t,
            bCurrentlyActive: s,
            autoPlayCookieName: i,
            bPlayWithBroadcastPlayer: l,
            showScreenshotInsteadOfMainCap: d,
            autoplayCheckboxPosition: m,
            refTogglePlayPause: p,
            bShowAOAutoPlayWarning: h,
            ...S
          } = e,
          [v, b] = o.useState(!1),
          [f, y] = o.useState(!1),
          _ = (0, C.$9)(),
          w = (function (e, t) {
            const s = e?.GetAllTrailers().GetAllTrailers("blocked" == t);
            return s && s.length > 0 ? s[0] : void 0;
          })(t, _),
          M = (h ?? !0) && w && !w.BIsAllAges() && "masked" == _,
          P = (0, C.AS)(),
          [D, T] = o.useState(!1),
          [O, I] = o.useState(0),
          B = o.useRef(void 0),
          N = o.useRef(void 0),
          [A, R] = o.useState(),
          { bCookieLoaded: L } = (function (e, t, s) {
            const n = o.useCallback(() => {
              const t = (0, r.VY)(e ?? E),
                o = !(!t || "true" !== t.toLowerCase());
              s(!o);
            }, [e, s]);
            return (function (e, t) {
              const [s, n] = o.useState(!1);
              return (
                o.useEffect(() => (e && (t(), n(!0)), () => n(!1)), [e, t]),
                { bCookieLoaded: s }
              );
            })(t, n);
          })(i, s, b),
          G = L;
        o.useEffect(() => {
          s && G && (v || l) && !M && y(!0);
        }, [v, G, s, l, M]),
          o.useEffect(() => {
            M && f && v && P();
          }, [f, M, v, P]);
        const H = (function (e, t, s, n, i) {
          return o.useCallback(() => {
            0 == e
              ? t(!0)
              : 1 == e && s.current
                ? s.current.paused
                  ? s.current.play()
                  : s.current.pause()
                : 2 == e && n.current
                  ? n.current.IsPaused()
                    ? n.current.Play()
                    : n.current.Pause()
                  : 2 == e && i && i.TogglePlayPause();
          }, [i, e, n, s, t]);
        })(O, y, B, N, A);
        o.useEffect(() => {
          p && (p.current = H);
        }, [H, p]);
        const x = t.GetScreenshots("allowed" != _),
          F = d && x.length > 0 ? x[0] : t.GetAssets().GetMainCapsuleURL();
        return o.createElement(
          n.Z,
          {
            className: a().AppCarouselTrailerCtn,
            onMouseEnter: () => T(!0),
            onMouseLeave: () => T(!1),
          },
          o.createElement("img", {
            className: (0, c.A)(a().AppMainCap, 0 != O && a().Hidden),
            src: F,
            onClick: H,
          }),
          !l &&
            o.createElement(V, {
              storeItem: t,
              bAutoplayVideos: v,
              autoplayCheckboxPosition: m,
              fnSetAutoPlayVideos: (e) => {
                (0, r.lc)(i ?? E, String(!e), 3650), b(e), y(e);
              },
            }),
          o.createElement(g.h, {
            name: t.GetName(),
            trailerCategory: w?.GetTrailerCategory(),
            trailerDisplay: O,
            mouseOver: D,
          }),
          o.createElement(k, {
            eTrailerDisplay: O,
            setTrailerDisplay: I,
            featuredTrailer: w,
            refMicroTrailer: B,
            refMainTrailer: N,
            loadedAndActive: G && s,
            setVideoShouldStart: y,
            bMouseOverVideo: D,
            storeItem: t,
            broadcastVideo: A,
            fnSetBroadcastVideo: R,
            fnTogglePlayPause: H,
            bAutoplayVideos: v,
            bVideoShouldStart: f,
            bPlayWithBroadcastPlayer: l,
            ...S,
          }),
          M &&
            v &&
            o.createElement(
              "div",
              { className: a().AOWarning },
              o.createElement(
                "div",
                { className: a().Text },
                (0, u.we)("#StoreTrailer_AOWarning_1"),
              ),
              o.createElement(
                "div",
                { className: a().Text },
                (0, u.we)("#StoreTrailer_AOWarning_2"),
              ),
            ),
        );
      }
      function k(e) {
        const {
            storeItem: t,
            featuredTrailer: s,
            bPlayWithBroadcastPlayer: i,
            bSkipMicroTrailer: r,
            nFadeRatio: u,
            fnPlayPause: d,
            bRequestPause: c,
            fnComplete: m,
            eTrailerDisplay: h,
            setTrailerDisplay: g,
            refMainTrailer: b,
            refMicroTrailer: f,
            loadedAndActive: E,
            setVideoShouldStart: _,
            broadcastVideo: w,
            fnSetBroadcastVideo: M,
            fnTogglePlayPause: k,
            bAutoplayVideos: D,
            bVideoShouldStart: V,
          } = e,
          [O, I] = o.useState(!1),
          [B, N] = o.useState(!1),
          [A, R] = o.useState(!1),
          [L, G] = o.useState(!1),
          [H, x] = o.useState(!1),
          F = (0, C.$9)(),
          U = t?.GetMicroTrailer("blocked" == F),
          z = !!U || !!s;
        o.useEffect(() => {
          let e = !1;
          E && A && z && (e = 0 === h || (1 === h && !L) || (2 === h && !H)),
            I(e),
            d?.(D && e);
        }, [d, h, H, L, E, D, A, z]),
          (function (e, t) {
            o.useEffect(() => {
              const s = e.current;
              if (!s) return;
              const o = () => t(!0),
                n = () => t(!1);
              return (
                s.addEventListener("play", o),
                s.addEventListener("pause", n),
                () => {
                  s.removeEventListener("play", o),
                    s.removeEventListener("pause", n);
                }
              );
            }, [t, e]);
          })(f, G),
          o.useEffect(() => {
            V ||
              (g(0),
              I(!1),
              R(!1),
              f.current && (f.current.pause(), (f.current.currentTime = 0)),
              b.current && (b.current.Pause(), b.current.SeekToStart()));
          }, [V, b, f, g]);
        const W = o.useRef(!1);
        return (
          o.useEffect(() => {
            if (E && 0 === h)
              if ((R(!0), V))
                if (b.current) {
                  y.Debug("Starting microtrailer"), g(1);
                  const o = () =>
                    (function (e, t, s) {
                      if (e.current) return;
                      (e.current = !0),
                        y.Debug("Starting main trailer"),
                        t(2),
                        s.Play();
                    })(W, g, b.current);
                  r || !f.current
                    ? o()
                    : (G(!0),
                      (f.current.onended = o),
                      (e = f.current),
                      (t = "microtrailer"),
                      (s = () => G(!1)),
                      e.play().catch((e) => {
                        s(), y.Warning(`Failed to play ${t}: `, e);
                      }));
                } else
                  w && (y.Debug("Starting broadcast player"), g(2), w.Play());
              else y.Debug("Showing image");
            var e, t, s;
          }, [E, h, r, V, m, w, g, b, f]),
          (function (e, t) {
            o.useEffect(() => {
              if (!t.current || !t.current.onended) return;
              if (!e) return;
              let s = t.current.onended,
                o = setTimeout(() => {
                  s();
                }, 6e3);
              return () => clearTimeout(o);
            }, [e, t]);
          })(L, f),
          o.useEffect(() => {
            E || _(!1);
          }, [E, _]),
          o.useEffect(() => {
            const e = (0, v.fm)(() => {
              N(w?.GetUserInputNeeded()), x(!w?.IsPaused());
            });
            return () => e();
          }, [w]),
          (function (e, t, s, n, i, a, l) {
            const [r, u] = o.useState(!1);
            o.useEffect(() => {
              e && !r
                ? 1 == t && s && n
                  ? (s.pause(), u(!0))
                  : 2 == t && i && a
                    ? (i.Pause(), u(!0))
                    : 2 == t && l && !l.IsPaused() && (l.Pause(), u(!0))
                : !e &&
                  r &&
                  (1 == t && s
                    ? s.play()
                    : 2 == t && i
                      ? i.Play()
                      : 2 == t && l && l.IsPaused() && l.Play(),
                  u(!1));
            }, [l, t, e, r, n, a, s, i]);
          })(c, h, f.current, L, b.current, H, w),
          t && t.BIsVisible()
            ? (s || i) &&
              o.createElement(
                o.Fragment,
                null,
                O &&
                  !B &&
                  o.createElement(
                    n.Z,
                    { focusable: !0, onClick: k, className: a().PlayButton },
                    o.createElement(l.IOc, null),
                  ),
                U &&
                  o.createElement(
                    "video",
                    {
                      className: T(!0, h),
                      ref: f,
                      preload: "auto",
                      playsInline: !0,
                      muted: !0,
                      onClick: k,
                    },
                    o.createElement("source", {
                      src: U.strWebMURL,
                      type: "video/webm",
                    }),
                    Boolean(!p.TS.IN_CLIENT) &&
                      o.createElement("source", {
                        src: U.strMP4URL,
                        type: "video/mp4",
                      }),
                  ),
                s &&
                  !i &&
                  o.createElement(P, {
                    ref: b,
                    trailer: s,
                    eTrailerDisplay: h,
                    fadeRatio: u,
                    onPlayPauseChange: x,
                    onPlaybackEnd: m,
                  }),
                i &&
                  o.createElement(S.default, {
                    classes: T(!1, h),
                    nAppIDVOD: t.GetAppID(),
                    watchLocation: 15,
                    fnOnVideoEnd: m,
                    fnVideoClick: k,
                    fnSetBroadcastVideo: M,
                    bStartWithSubtitles: !0,
                    bStartMuted: !0,
                  }),
              )
            : null
        );
      }
      function P(e) {
        let {
          ref: t,
          trailer: s,
          eTrailerDisplay: n,
          fadeRatio: i,
          onPlayPauseChange: a,
          onPlaybackEnd: l,
        } = e;
        (0, o.useEffect)(() => {
          if (void 0 !== i && t.current) {
            let e = t.current.GetVolume() * i;
            const s = !0;
            t.current.SetVolume(e, s);
          }
        }, [i, t]);
        let r = 2 != n,
          u = T(!1, n);
        return o.createElement(
          D,
          null,
          o.createElement(
            "div",
            { className: u },
            o.createElement(b.P, {
              ref: t,
              dashManifests: s.GetTrailersDash(),
              hlsManifest: s.GetTrailerHls(),
              screenshot: "",
              altText: "",
              forcePause: r,
              muteWhenAutoplayBlocked: !0,
              onPlaybackEnd: l,
              onPlayPauseChange: a,
            }),
          ),
        );
      }
      function D(e) {
        let { children: t } = e;
        const [s, n] = (0, m.M)(_, 0.8),
          [i, a] = (0, m.M)(w, !0);
        return o.createElement(
          f.v,
          {
            playerVolume: s,
            setPlayerVolume: n,
            audioMuted: i,
            setAudioMuted: a,
          },
          t,
        );
      }
      function T(e, t) {
        return (0, c.A)({
          [a().AppVideo]: !0,
          [a().PlayFullTrailer]: 2 == t,
          [a().PlayMicrotrailer]: 1 == t,
          [a().NoTrailer]: 0 == t,
          [a().Microtrailer]: e,
          [a().Trailer]: !e,
        });
      }
      function V(e) {
        const {
            storeItem: t,
            bAutoplayVideos: s,
            fnSetAutoPlayVideos: n,
            autoplayCheckboxPosition: i,
          } = e,
          l = { [i || "top"]: 0 };
        return o.createElement(
          "div",
          {
            onClick: (e) => {
              e.preventDefault(), e.stopPropagation();
            },
            className: a().AutoplayCheckboxCtn,
          },
          o.createElement(d.Yh, {
            controlled: !0,
            checked: s,
            key: t.GetAppID(),
            className: a().AutoplayCheckbox,
            style: l,
            label: (0, u.we)("#StoreTrailer_AutoPlayVideos"),
            onChange: n,
          }),
        );
      }
    },
  },
]);
