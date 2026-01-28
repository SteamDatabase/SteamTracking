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
    3067: (e, t, s) => {
      "use strict";
      s.d(t, { td: () => n });
      var a = s(34629),
        i = s(14947),
        o = s(78327);
      o.TS.CHAT_BASE_URL, o.TS.CHAT_BASE_URL;
      class r {
        constructor(e) {
          (this.bValid = !1),
            (this.stream = { 0: "#Broadcast_EnglishMain" }),
            (this.name = ""),
            (this.appName = ""),
            (this.appID = 0),
            (this.link = ""),
            (this.linkName = ""),
            (this.tabIcon = ""),
            (this.offlineImage = ""),
            (this.gidEvent = ""),
            (0, i.Gn)(this),
            this.init(e);
        }
        init(e) {
          (this.bValid = e.bValid),
            (this.stream = e.stream),
            (this.name = e.name),
            (this.appName = e.appName),
            (this.appID = e.appID),
            (this.link = e.link),
            (this.linkName = e.linkName),
            (this.tabIcon = e.tabIcon),
            (this.offlineImage = e.offlineImage),
            (this.gidEvent = e.gidEvent);
        }
      }
      (0, a.Cg)([i.sH], r.prototype, "bValid", void 0),
        (0, a.Cg)([i.sH], r.prototype, "stream", void 0),
        (0, a.Cg)([i.sH], r.prototype, "name", void 0),
        (0, a.Cg)([i.sH], r.prototype, "appName", void 0),
        (0, a.Cg)([i.sH], r.prototype, "appID", void 0),
        (0, a.Cg)([i.sH], r.prototype, "link", void 0),
        (0, a.Cg)([i.sH], r.prototype, "linkName", void 0),
        (0, a.Cg)([i.sH], r.prototype, "tabIcon", void 0),
        (0, a.Cg)([i.sH], r.prototype, "offlineImage", void 0),
        (0, a.Cg)([i.sH], r.prototype, "gidEvent", void 0);
      let n = new r({
        bValid: !1,
        stream: { 0: "#Broadcast_EnglishMain" },
        name: "",
        appName: "",
        appID: 0,
        link: "",
        linkName: "",
        tabIcon: "",
        offlineImage: "",
      });
    },
    4299: (e, t, s) => {
      "use strict";
      var a, i;
      s.d(t, { J8: () => o, X8: () => i }),
        (function (e) {
          (e[(e.Hover = 0)] = "Hover"),
            (e[(e.ClickPopup = 1)] = "ClickPopup"),
            (e[(e.ClickSurroundingRegion = 2)] = "ClickSurroundingRegion");
        })(a || (a = {})),
        (function (e) {
          (e[(e.Chat = 0)] = "Chat"),
            (e[(e.Notification = 1)] = "Notification"),
            (e[(e.Error = 2)] = "Error");
        })(i || (i = {}));
      class o {}
    },
    72224: (e, t, s) => {
      "use strict";
      s.r(t),
        s.d(t, {
          BroadcastDetails: () => oe,
          LinkOverlay: () => ne,
          default: () => K,
        });
      var a = s(34629),
        i = s(14947),
        o = s(75844),
        r = s(90626),
        n = s(88997),
        l = s(55963),
        d = s(54728),
        m = s(16021),
        c = s(73745),
        h = s(6144);
      class p extends r.Component {
        constructor() {
          super(...arguments),
            (this.m_schUpdate = new h.LU()),
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
          let a = Math.floor(
              this.m_elCanvas.clientWidth / this.props.reductionFactor,
            ),
            i = Math.floor(
              this.m_elCanvas.clientHeight / this.props.reductionFactor,
            );
          (this.m_elCanvas.width = a),
            (this.m_elCanvas.height = i),
            this.props.blurAmount > 0 &&
              (this.m_Context.filter = "blur(" + this.props.blurAmount + "px)");
          let o = () => {
            this.m_Context.drawImage(t, 0, 0, a * e[0], i * e[1]),
              s > 0 && this.m_schUpdate.Schedule(s, o);
          };
          o(), (this.m_bSetupComplete = !0);
        }
        render() {
          return r.createElement("canvas", {
            id: this.props.id,
            className: this.props.className,
            ref: this.BindCanvasRef,
            width: this.props.width,
            height: this.props.height,
          });
        }
      }
      (0, a.Cg)([c.oI], p.prototype, "BindCanvasRef", null),
        (0, a.Cg)([c.oI], p.prototype, "updateCanvas", null);
      var u = s(60155),
        _ = s(16569),
        S = s(63741),
        g = s(52038);
      const v = 500;
      class b extends r.Component {
        render() {
          let {
            keyExtractor: e,
            style: t,
            duration: s = v,
            className: a,
            children: i,
            childRef: o,
            ...n
          } = this.props;
          const l = { ...(t || {}), transitionDuration: s / 1e3 + "s" };
          return r.createElement(
            _.A,
            { ...n, className: (0, g.A)("crossfade", a) },
            r.createElement(
              S.A,
              {
                nodeRef: o,
                classNames: "crossfade-anim",
                timeout: s,
                key: e(),
                style: l,
              },
              i,
            ),
          );
        }
      }
      function C(e) {
        const { src: t, ...s } = e,
          a = { backgroundImage: `url(${t})` },
          i = r.useRef(null);
        return r.createElement(
          b,
          { style: a, keyExtractor: () => t, childRef: i, ...s },
          r.createElement("div", { ref: i, className: "crossfade-img" }),
        );
      }
      var y = s(41399),
        f = s(69409),
        D = s(81416),
        w = s(12155),
        I = s(51272),
        B = s(56011),
        V = s(61859),
        T = s(82227),
        E = s(25489),
        k = s(78327),
        M = s(3067),
        P = s(36064),
        O = s(15527),
        G = s.n(O),
        A = s(22797);
      function R() {
        return r.createElement(
          "div",
          { className: "STV_ReplayBanner" },
          (0, V.we)("#DASHPlayerControls_IsReplay"),
        );
      }
      const H = (0, o.PA)((e) => {
        let t = e.video;
        if (t && (t.IsBroadcastClip() || t.IsBroadcastVOD())) return null;
        let s = d.fK.Loading,
          a = "";
        if (t) {
          (s = t.GetBroadcastState()), (a = t.GetBroadcastStateDescription());
          let e = t.IsBuffering();
          s == d.fK.Unlocking && ((s = d.fK.Loading), (a = "")),
            s == d.fK.Ready && e && ((s = d.fK.Loading), (a = ""));
        }
        if (t && s != d.fK.Error && t.GetUserInputNeeded()) return null;
        if (s == d.fK.Ready) return null;
        let i = s == d.fK.Loading;
        return r.createElement(
          "div",
          {
            className: "BroadcastVideoWatchState",
            style: { filter: "hue-rotate(40deg)" },
          },
          i && r.createElement(A.t, null),
          !i &&
            r.createElement(
              "div",
              { className: "BroadcastVideoWatchState_Text" },
              a,
            ),
        );
      });
      class L extends r.Component {
        OnClick() {
          d.es.UserInputClickVideo(this.props.video);
        }
        render() {
          return r.createElement(
            "div",
            {
              className: "BroadcastVideoUserInputNeeded",
              onClick: this.OnClick,
            },
            r.createElement(w.jGG, null),
            r.createElement(
              "span",
              null,
              (0, V.we)("#DASHPlayerControls_ClickToPlay"),
            ),
          );
        }
      }
      (0, a.Cg)([c.oI], L.prototype, "OnClick", null);
      let N = class extends r.Component {
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
              r.createElement(w.sED, null),
            ),
            r.createElement(
              "div",
              null,
              (0, V.we)("#DASHPlayerStats_BufferingResolution"),
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
              (0, V.we)("#DASHPlayerStats_PlaybackResolution"),
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
              (0, V.we)("#DASHPlayerStats_HtmlResolution"),
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
              (0, V.we)("#DASHPlayerStats_ContentServer"),
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
              (0, V.we)("#DASHPlayerStats_StallEvents"),
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
              (0, V.we)("#DASHPlayerStats_FailedDownloads"),
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
              (0, V.we)("#DASHPlayerStats_TimeToFirstFrame"),
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
              (0, V.we)("#DASHPlayerStats_PlaybackRate"),
              " ",
              r.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetPlaybackRateForDisplay(),
              ),
            ),
            r.createElement(U, { stats: e }),
          );
        }
      };
      (0, a.Cg)([c.oI], N.prototype, "HideStats", null),
        (N = (0, a.Cg)([o.PA], N));
      let U = class extends r.Component {
        constructor(e) {
          super(e);
        }
        createBufferedRange(e) {
          let t = this.props.stats,
            s = [],
            a = e ? "vidbuf" : "audbuf",
            i = e
              ? t.GetNumBufferedVideoRanges()
              : t.GetNumBufferedAudioRanges();
          if (i > 0)
            for (let o = 0; o < i; ++o) {
              let i = (0, V.we)(
                  e
                    ? "#DASHPlayerStats_VideoBufferRange"
                    : "#DASHPlayerStats_AudioBufferRange",
                  o,
                ),
                n = e
                  ? t.GetBufferedVideoSegmentForDisplay(o)
                  : t.GetBufferedAudioSegmentForDisplay(o);
              s.push(
                r.createElement(
                  "div",
                  { key: a + o },
                  i,
                  " ",
                  r.createElement("span", { className: "videoStatsValue" }, n),
                ),
              );
            }
          else {
            let t = (0, V.we)(
              e
                ? "#DASHPlayerStats_VideoNoRangeInformation"
                : "#DASHPlayerStats_AudioNoRangeInformation",
            );
            s.push(r.createElement("div", { key: a + "none" }, t));
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
              (0, V.we)("#DASHPlayerStats_BytesReceived"),
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
                (0, V.we)("#DASHPlayerStats_DroppedFrames"),
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
              (0, V.we)("#DASHPlayerStats_VideoBuffered"),
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
              (0, V.we)("#DASHPlayerStats_AudioBuffered"),
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
              (0, V.we)("#DASHPlayerStats_BandwidthRequired"),
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
              (0, V.we)("#DASHPlayerStats_BandwidthVideo"),
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
              (0, V.we)("#DASHPlayerStats_BandwidthNums"),
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
              (0, V.we)("#DASHPlayerStats_DownloadNums"),
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
              (0, V.we)("#DASHPlayerStats_ActiveDownloads"),
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
              (0, V.we)("#DASHPlayerStats_VideoDownloadProgress"),
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
              (0, V.we)("#DASHPlayerStats_DroppingFrames"),
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
              (0, V.we)("#DASHPlayerStats_CurrentFPS"),
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
      U = (0, a.Cg)([o.PA], U);
      var F = s(74872);
      class x extends r.Component {
        constructor(e) {
          super(e),
            (this.m_elSubtitlesButton = r.createRef()),
            (this.m_elSubtitlesPanel = r.createRef()),
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
            (0, B.id)(this.m_elSettingsPanel, e.target) ||
              this.setState({ bSettingsOpen: !1 }),
            (0, B.id)(this.m_elSubtitlesPanel.current, e.target) ||
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
          const { video: s, actions: a } = this.props;
          let i,
            o,
            n = 0,
            l = r.createElement("div", {
              key: "separator",
              className: "settingsMenuSeparator",
            });
          if (
            (this.state.bSettingsOpen &&
              ((e = !0),
              (i = this.props.video.GetVideoRepresentations()),
              (o = i.map((e) =>
                r.createElement(
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
              o.push(l),
              o.push(
                r.createElement(
                  F.D,
                  { key: "statsToggle", onClick: this.OnShowStats },
                  (0, V.we)("#Broadcast_VideoContext_ToggleStats"),
                  "\t",
                ),
              ),
              (n = 0 - (21 * o.length + 32))),
            this.state.bSubtitlesOpen)
          ) {
            (t = !0),
              (o = []),
              o.push(
                r.createElement(
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
                  (0, V.we)("#Broadcast_None"),
                ),
              );
            for (let e = 0; e < this.props.video.ListSubtitles().length; e++) {
              const t = this.props.video.ListSubtitles()[e];
              o.push(
                r.createElement(
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
            n = -292;
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
                r.createElement(w.N8C, null),
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
              r.createElement(w.wB_, null),
            ),
            r.createElement(W, { video: s }),
            a &&
              a.map((e) =>
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
                    marginTop: n,
                  },
                },
                r.createElement(
                  "div",
                  { className: "STV_BroadcastSettingsMenuItems" },
                  o,
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
                    marginTop: n,
                  },
                },
                r.createElement(
                  "div",
                  { className: "STV_BroadcastSettingsMenuItems" },
                  o,
                ),
              ),
          );
        }
      }
      (0, a.Cg)([c.oI], x.prototype, "OnVideoControlClick", null),
        (0, a.Cg)([c.oI], x.prototype, "OnSubtitlesClick", null),
        (0, a.Cg)([c.oI], x.prototype, "OnMouseUp", null),
        (0, a.Cg)([c.oI], x.prototype, "bindSettingsButton", null),
        (0, a.Cg)([c.oI], x.prototype, "BindSettingsPanel", null),
        (0, a.Cg)([c.oI], x.prototype, "OnShowStats", null);
      let W = class extends r.Component {
        constructor(e) {
          super(e),
            (this.k_nHideSliderTimeout = 1500),
            (this.m_bShowSlider = true),
            (this.m_schHideSlider = new h.LU()),
            (this.m_bChildDragging = !1),
            (this.m_bMouseOver = !1),
            (0, i.Gn)(this);
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
            a = "videoControlButton";
          s > 65
            ? (a += " HighestVolume")
            : s > 45
              ? (a += " HighVolume")
              : s < 46 && s > 24
                ? (a += " MedVolume")
                : s < 25 && (a += " LowVolume");
          let i = "BroadcastVolumeControl";
          return (
            this.m_bShowSlider && (i += " ShowVolumeSlider"),
            t && (i += " muted"),
            r.createElement(
              "div",
              {
                className: i,
                onMouseEnter: this.OnMouseEnter,
                onMouseLeave: this.OnMouseLeave,
              },
              r.createElement(
                "div",
                { className: "BroadcastVolumeControl_FixedLayout" },
                r.createElement(
                  "div",
                  { className: a, onClick: this.ToggleMute },
                  r.createElement(w.fSs, null),
                ),
                r.createElement(z, { video: e, onDrag: this.OnChildDrag }),
              ),
            )
          );
        }
      };
      (0, a.Cg)([i.sH], W.prototype, "m_bShowSlider", void 0),
        (0, a.Cg)([c.oI], W.prototype, "ToggleMute", null),
        (0, a.Cg)([c.oI], W.prototype, "OnMouseEnter", null),
        (0, a.Cg)([c.oI], W.prototype, "OnMouseLeave", null),
        (0, a.Cg)([c.oI], W.prototype, "OnChildDrag", null),
        (W = (0, a.Cg)([o.PA], W));
      let z = class extends r.Component {
        constructor(e) {
          super(e),
            (this.m_elSlider = null),
            (this.m_nVolumeStartOfDrag = 0),
            (0, i.Gn)(this);
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
            a = E.Fu(t, s.left, s.right, 0, 1),
            i = E.OQ(a, 0, 1),
            o = this.props.video;
          o.SetMute(a < 0.01), o.SetVolume(i);
        }
        render() {
          let e = this.props.video,
            t = 100 * e.GetVolume();
          e.IsMuted() && (t = 0);
          let s = { left: `${t}%` },
            a = { width: `${t}%` };
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
              style: a,
            }),
            r.createElement("div", {
              className: "BroadcastVolumeSlider_Thumb",
              style: s,
            }),
          );
        }
      };
      (0, a.Cg)([c.oI], z.prototype, "OnMouseDown", null),
        (0, a.Cg)([c.oI], z.prototype, "OnMouseMove", null),
        (0, a.Cg)([c.oI], z.prototype, "OnMouseUp", null),
        (0, a.Cg)([i.XI], z.prototype, "SetVolumeWithCoord", null),
        (z = (0, a.Cg)([o.PA], z));
      var j = s(15759);
      const J = 15;
      let q = class extends r.Component {
        constructor(e) {
          super(e),
            (this.m_schHideControls = new h.LU()),
            (this.m_schUnmountControls = new h.LU()),
            (this.m_elVideo = null),
            (this.m_elBroadcastPlayer = null),
            (this.m_bMouseDown = !1),
            (this.m_elMouseDown = null),
            (this.m_listeners = new h.Ji()),
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
          let a;
          this.StopVideo(),
            this.props.steamIDBroadcast
              ? e &&
                (a = d.es.CreateBroadcastVideo(
                  e,
                  this.props.steamIDBroadcast,
                  this.props.watchLocation,
                  this.props.bWebRTC,
                ))
              : this.props.broadcastClipID
                ? e &&
                  (a = d.es.CreateClipVideo(
                    e,
                    this.props.broadcastClipID,
                    this.props.watchLocation,
                  ))
                : this.props.nAppIDVOD &&
                  e &&
                  ((a = d.es.CreateVODVideo(
                    e,
                    this.props.nAppIDVOD,
                    this.props.watchLocation,
                  )),
                  this.props.fnOnVideoEnd &&
                    a.SetOnVideoCallback(this.props.fnOnVideoEnd)),
            a &&
              (this.props.bStartMuted && a.SetMute(!0),
              this.props.bStartWithSubtitles && a.SetStartWithSubtitles(!0),
              this.props.bStartPaused
                ? a.StopPlaybackTillUserInput()
                : a.Play()),
            this.setState({ video: a }),
            null === (s = (t = this.props).fnSetBroadcastVideo) ||
              void 0 === s ||
              s.call(t, a),
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
            ((0, n.lX)(
              r.createElement(u.tz, null, this.GetContextMenuItems()),
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
          let a = (0, l.k2)(`${k.TS.STORE_BASE_URL}app/${s.m_strAppId}`);
          this.props.onOpenLinkInNewWindow(e, a), e.stopPropagation();
        }
        GetContextMenuItems() {
          let e = [],
            t = this.state.video;
          if (!t) return e;
          let s = t.GetBroadcastInfo();
          return (
            e.push(
              r.createElement(
                u.IK,
                {
                  key: "togglestats",
                  bChecked: this.state.bShowStats,
                  onSelected: (e) => {
                    this.ToggleStatsView(e);
                  },
                },
                (0, V.we)("#Broadcast_VideoContext_ToggleStats"),
              ),
            ),
            s &&
              "0" != s.m_strAppId &&
              Number.parseInt(s.m_strAppId) != d.fO &&
              e.push(
                r.createElement(
                  u.kt,
                  {
                    key: "visitstore",
                    onSelected: (e) => {
                      this.ShowStorePage(e);
                    },
                  },
                  (0, V.we)("#Broadcast_VideoContext_OpenStore"),
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
            ((0, B.ww)(this.m_elBroadcastPlayer)
              ? (0, B.MS)(this.m_elBroadcastPlayer)
              : (0, B.tl)(this.m_elBroadcastPlayer, this.m_elVideo));
        }
        OnFullscreenChange(e) {
          if (!this.m_elBroadcastPlayer) return;
          let t = (0, B.ww)(this.m_elBroadcastPlayer);
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
            a = t && t.BHasDASHStats() && this.state.bShowStats,
            i = Boolean(t && t.IsReplay()),
            o = this.state.bMountControls,
            n = this.state.bControlsVisible || s,
            l = t && t.GetUserInputNeeded(),
            d =
              (null == t ? void 0 : t.IsBroadcastVOD()) &&
              l &&
              this.state.strInitialCapsuleImageUrl;
          let m = "videoContainer";
          n || (m += " HidePlayerControls"),
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
                r.createElement("div", {
                  key: "ChatPosToggle ChatTheaterToggle",
                  onClick: this.props.onTheaterMode,
                  title: (0, V.we)("#Broadcast_View_Theater"),
                  className: "BroadcastTheaterToggle",
                }),
              ),
            c.push(
              r.createElement("div", {
                key: "FullscreenToggle",
                title: (0, V.we)("#Broadcast_View_Fullscreen"),
                onClick: this.OnToggleFullscreen,
                className: "BroadcastFullscreenToggle",
              }),
            );
          const h = o && !this.BHideVideoControls(),
            u = o && !this.state.bFullscreen,
            _ =
              this.props.fnRenderBroadcastContext &&
              this.props.fnRenderBroadcastContext();
          return r.createElement(
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
            _ && r.createElement("div", { className: G().BroadcastContext }, _),
            i && r.createElement(R, null),
            this.props.showVideoBackgroundBlur &&
              r.createElement(p, {
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
              muted: null === (e = this.props.bMuted) || void 0 === e || e,
              autoPlay: !0,
              playsInline: !0,
              controls: !1,
              onVolumeChange: this.props.fnVolumeChanged,
              onClick: this.props.fnVideoClick,
            }),
            this.props.linkRegions
              ? r.createElement(ne, {
                  linkRegions: this.props.linkRegions,
                  editMode: this.props.editMode,
                  onSaveLinkRegions: this.props.onSaveLinkRegions,
                })
              : null,
            this.props.linkElement,
            d &&
              r.createElement("img", {
                loading: "lazy",
                className: (0, g.A)(
                  G().BroadcastPlaceholderImg,
                  "BroadcastPlaceholderImg",
                ),
                src: this.state.strInitialCapsuleImageUrl,
              }),
            h &&
              r.createElement(X, {
                video: t,
                actions: c,
                onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                onShowStats: this.ToggleStatsView,
                bIncludeClipEditor: this.props.bIncludeClipEditor,
              }),
            u && r.createElement($, { onClick: this.props.onRequestClose }),
            a &&
              r.createElement(N, {
                stats: t.GetDASHPlayerStats(),
                closeStats: this.CloseStats,
              }),
            r.createElement(H, { video: t }),
            l && r.createElement(L, { video: t }),
          );
        }
      };
      (0, a.Cg)([c.oI], q.prototype, "BindBroadcastPlayerRef", null),
        (0, a.Cg)([c.oI], q.prototype, "BindVideoRef", null),
        (0, a.Cg)([c.oI], q.prototype, "OnMouseDown", null),
        (0, a.Cg)([c.oI], q.prototype, "OnMouseUp", null),
        (0, a.Cg)([c.oI], q.prototype, "OnMouseMove", null),
        (0, a.Cg)([c.oI], q.prototype, "OnMouseLeave", null),
        (0, a.Cg)([c.oI], q.prototype, "HideControls", null),
        (0, a.Cg)([c.oI], q.prototype, "UmountControls", null),
        (0, a.Cg)([c.oI], q.prototype, "ShowStatsView", null),
        (0, a.Cg)([c.oI], q.prototype, "OnContextMenu", null),
        (0, a.Cg)([c.oI], q.prototype, "ToggleStatsView", null),
        (0, a.Cg)([c.oI], q.prototype, "ShowStorePage", null),
        (0, a.Cg)([c.oI], q.prototype, "CloseStats", null),
        (0, a.Cg)([c.oI], q.prototype, "OnToggleFullscreen", null),
        (0, a.Cg)([c.oI], q.prototype, "OnFullscreenChange", null),
        (q = (0, a.Cg)([o.PA], q));
      const K = q;
      let X = class extends r.Component {
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
              r.createElement(ie, {
                video: e,
                bIncludeClipEditor: this.props.bIncludeClipEditor,
              }),
              r.createElement(
                "div",
                { className: "STV_BroadcastController" },
                r.createElement("div", {
                  className: "videoControlsButtons LeftSpacer",
                }),
                r.createElement(Q, { video: e }),
                r.createElement(Y, { video: e }),
                r.createElement(x, {
                  video: e,
                  actions: this.props.actions,
                  onShowStats: this.props.onShowStats,
                }),
              ),
            ),
          );
        }
      };
      X = (0, a.Cg)([o.PA], X);
      class $ extends r.PureComponent {
        render() {
          return this.props.onClick
            ? r.createElement(
                "div",
                {
                  className: "STV_BroadcastClose",
                  onClick: this.props.onClick,
                },
                r.createElement(w.sED, null),
              )
            : null;
        }
      }
      class Q extends r.Component {
        OnJumpBackward() {
          this.props.video.JumpTime(-15);
        }
        OnJumpForward() {
          this.props.video.JumpTime(J);
        }
        render() {
          let e = this.props.video,
            t = e.CanSeek();
          return r.createElement(
            "div",
            { className: "videoControlsButtons PlayControls" },
            r.createElement(ee, { video: e }),
            t &&
              r.createElement(
                "div",
                {
                  className: "videoControlButton videoControlJump controlFlip",
                  onClick: this.OnJumpBackward,
                },
                r.createElement(w.tID, {
                  bHidePostArrow: !0,
                  bHidePreArrow: !0,
                  bShowJumpAheadBox: !0,
                  bFlipHorizontal: !0,
                }),
                r.createElement("div", { className: "jumpAheadValue" }, J),
              ),
            r.createElement(Z, { video: e }),
            t &&
              r.createElement(
                "div",
                {
                  className: "videoControlButton videoControlJump",
                  onClick: this.OnJumpForward,
                },
                r.createElement(w.tID, {
                  bHidePostArrow: !0,
                  bHidePreArrow: !0,
                  bShowJumpAheadBox: !0,
                  bFlipHorizontal: !1,
                }),
                r.createElement("div", { className: "jumpAheadValue" }, J),
              ),
            t && r.createElement(te, { video: e }),
          );
        }
      }
      (0, a.Cg)([c.oI], Q.prototype, "OnJumpBackward", null),
        (0, a.Cg)([c.oI], Q.prototype, "OnJumpForward", null);
      const Y = (0, o.PA)((e) => {
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
            r.createElement(w.tID, {
              bHidePreArrow: !0,
              bHidePostArrow: !0,
              bFlipHorizontal: !1,
            }),
            r.createElement(
              "div",
              { className: "jumpGoLive" },
              (0, V.we)(
                t ? "#DASHPlayerControls_IsLive" : "#DASHPlayerControls_GoLive",
              ),
            ),
          ),
        );
      });
      let Z = class extends r.Component {
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
            e ? r.createElement(w.jGG, null) : r.createElement(w.vRz, null),
          );
        }
      };
      (0, a.Cg)([c.oI], Z.prototype, "OnTogglePlayPause", null),
        (Z = (0, a.Cg)([o.PA], Z));
      let ee = class extends r.Component {
        constructor(e) {
          super(e),
            (this.video = void 0),
            (0, i.Gn)(this),
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
          return r.createElement(
            "div",
            {
              className:
                "videoControlButton jumpToMarker controlFlip" +
                (e ? "" : " noMarkersOrSegments") +
                (this.has_previous_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToPreviousMarkerClicked,
            },
            r.createElement(w.tID, { bHidePostArrow: !0, bFlipHorizontal: !0 }),
          );
        }
      };
      (0, a.Cg)([i.sH], ee.prototype, "video", void 0),
        (0, a.Cg)([i.EW], ee.prototype, "has_previous_marker", null),
        (0, a.Cg)([c.oI], ee.prototype, "OnJumpToPreviousMarkerClicked", null),
        (ee = (0, a.Cg)([o.PA], ee));
      let te = class extends r.Component {
        constructor(e) {
          super(e),
            (this.video = void 0),
            (0, i.Gn)(this),
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
          return r.createElement(
            "div",
            {
              className:
                "videoControlButton jumpToMarker" +
                (e ? "" : " noMarkersOrSegments") +
                (this.has_next_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToNextMarkerClicked,
            },
            r.createElement(w.tID, { bHidePostArrow: !0, bFlipHorizontal: !1 }),
          );
        }
      };
      (0, a.Cg)([i.sH], te.prototype, "video", void 0),
        (0, a.Cg)([i.EW], te.prototype, "has_next_marker", null),
        (0, a.Cg)([c.oI], te.prototype, "OnJumpToNextMarkerClicked", null),
        (te = (0, a.Cg)([o.PA], te));
      const se = (e) =>
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
            r.createElement(w.Dp6, null),
          ),
        );
      function ae(e) {
        let t = e.startPos,
          s = e.endPos,
          a = "",
          i = 1;
        return (
          t < 0 && ((i = (s - t) / 10), (t = 0), (a = " hideFront")),
          r.createElement(
            "div",
            {
              className: "STV_timelineSegment" + a,
              style: { left: t + "%", width: s - t + "%", opacity: i },
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
      let ie = class extends r.Component {
        constructor(e) {
          super(e),
            (this.m_elSlider = r.createRef()),
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
            a = t.GetTimelineStartPos() + t.GetTimelineDuration(),
            i = t.GetTimeAtMousePosition(e, this.m_rectSlider, s, a);
          if (this.state.bStartMouseDown) {
            const e = E.OQ(i, s, t.m_editorEndTime - 5);
            t.m_editorStartTime = e;
          } else if (this.state.bEndMouseDown) {
            const e = E.OQ(i, t.m_editorStartTime + 5, a);
            t.m_editorEndTime = e;
          } else
            i != this.state.nGrabberMouseDownTime &&
              this.setState({ nGrabberMouseDownTime: i });
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
            a = t.GetTimelineStartPos() + t.GetTimelineDuration();
          this.m_rectSlider =
            this.m_elSlider.current &&
            this.m_elSlider.current.getBoundingClientRect();
          t.GetTimeAtMousePosition(e, this.m_rectSlider, s, a);
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
            a = e.GetPercentOffsetFromTime(e.GetPlaybackTime(), d.a0.Timeline),
            i = e.GetPercentOffsetFromTime(
              e.GetVideoAvailableStartTime(),
              d.a0.Timeline,
            );
          i < 0.05 && (i = 0);
          let o = E.OQ(s, 0, 100).toFixed(1) + "%",
            n = E.OQ(a, 0, 100).toFixed(1) + "%",
            l = E.OQ(i, 0, 100).toFixed(1) + "%",
            m = {},
            c = {},
            h = {},
            p = {};
          t
            ? ((p.left = o), (m.width = o), (c.width = n), (h.width = l))
            : ((p.left = n), (c.width = n), (h.width = l));
          let u = (0, P.ap)(e.GetPlaybackTime()),
            _ = (0, P.ap)(this.state.nHoverValue),
            S = "STV_timelineContainer";
          this.state.bGrabberMouseDown && (S += " grabberDown"),
            e.IsTimelineMapActive() && (S += " minimapActive");
          let g = "";
          (s = t ? s : a),
            s > 100
              ? (g = " grabberOffScreenRight grabberOffscreen")
              : s < 0 && (g = " grabberOffScreenLeft grabberOffscreen");
          let v = [];
          e.GetTimelineMarkers().forEach((t, s) => {
            let a = e.GetPercentOffsetFromTime(t.nTime, d.a0.Timeline);
            a < 0 ||
              a > 100 ||
              v.push(
                r.createElement(se, {
                  key: s,
                  pos: a,
                  label: t.strTemplateName,
                  onMouseEnter: this.OnMarkerMouseEnter,
                  onMouseLeave: this.OnMarkerMouseLeave,
                }),
              );
          });
          let b = [];
          e.GetTimelineSegments().forEach((t, s) => {
            let a = e.GetPercentOffsetFromTime(t.nTimeStart, d.a0.Timeline);
            if (a > 100) return;
            let i = e.GetPercentOffsetFromTime(t.nTimeEnd, d.a0.Timeline);
            i < 0 ||
              b.push(
                r.createElement(ae, {
                  key: s,
                  startPos: a,
                  endPos: i,
                  label: t.strTemplateName,
                  color: t.color,
                  onClick: (e) => this.OnSegmentClick(t.nTimeStart),
                }),
              );
          });
          const C = e.GetPercentOffsetFromTime(
              e.m_editorStartTime,
              d.a0.Timeline,
            ),
            y = e.GetPercentOffsetFromTime(e.m_editorEndTime, d.a0.Timeline),
            f = this.props.bIncludeClipEditor
              ? [
                  r.createElement(se, {
                    key: "start",
                    pos: C,
                    label: (0, V.we)("#DASHPlayerControls_Start"),
                    onMouseEnter: this.OnMarkerMouseEnter,
                    onMouseLeave: this.OnMarkerMouseLeave,
                    onMouseDown: (e) => this.OnMouseDown(e, "start"),
                  }),
                  r.createElement(se, {
                    key: "end",
                    pos: y,
                    label: (0, V.we)("#DASHPlayerControls_End"),
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
              { className: S },
              r.createElement("div", { className: "DialogLabel" }, u),
              r.createElement(
                "div",
                { className: "STV_timelineSegmentsContainer" },
                b,
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
                    style: m,
                  }),
                  r.createElement("div", {
                    className: "STV_timelineGhostValue",
                    style: c,
                  }),
                  r.createElement("div", {
                    className: "STV_timelineNoVideo",
                    style: h,
                  }),
                  v,
                  f,
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
                          _,
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
                        r.createElement(w.apU, null),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          );
        }
      };
      (0, a.Cg)([c.oI], ie.prototype, "OnMouseDown", null),
        (0, a.Cg)([c.oI], ie.prototype, "OnMouseMove", null),
        (0, a.Cg)([c.oI], ie.prototype, "OnMouseUp", null),
        (0, a.Cg)([c.oI], ie.prototype, "OnKeyDown", null),
        (0, a.Cg)([c.oI], ie.prototype, "OnMouseHoverMove", null),
        (0, a.Cg)([c.oI], ie.prototype, "OnMouseHoverLeave", null),
        (0, a.Cg)([c.oI], ie.prototype, "AdjustHoverForClientX", null),
        (0, a.Cg)([c.oI], ie.prototype, "OnSegmentClick", null),
        (0, a.Cg)([c.oI], ie.prototype, "OnMarkerMouseEnter", null),
        (0, a.Cg)([c.oI], ie.prototype, "OnMarkerMouseLeave", null),
        (ie = (0, a.Cg)([o.PA], ie));
      let oe = class extends r.Component {
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
          return M.td.stream[e]
            ? r.createElement(re, {
                value: e,
                options: M.td.stream,
                onChange: this.props.onLocalStreamChange,
              })
            : null;
        }
        render() {
          let { info: e } = this.state;
          if (!e) return null;
          let t = "";
          e.m_nViewerCount && (t = (0, T.Dq)(e.m_nViewerCount));
          let s =
              M.td.bValid && M.td.stream && M.td.stream[e.m_steamIDBroadcast],
            a =
              !this.props.bHideThumbnail &&
              this.props.bVerticalBroadcastChat &&
              (parseInt(e.m_strAppId) > 0 || s);
          const i =
            !this.props.bHideThumbnail &&
            this.props.bVerticalBroadcastChat &&
            s &&
            M.td.gidEvent;
          return r.createElement(
            "div",
            { className: "BroadcastDetails" },
            !this.props.bHideThumbnail &&
              r.createElement(C, {
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
                      r.createElement(w.y_e, null),
                      (0, V.Yp)("#Broadcast_ViewerCount", t),
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
                        this.props.onOpenLinkInNewWindow(e, M.td.link),
                      className: "BroadcastLink",
                    },
                    M.td.linkName,
                  ),
                ),
            ),
            i && r.createElement(f.m, { gidEvent: M.td.gidEvent }),
            a &&
              r.createElement(y.p, {
                id:
                  M.td.bValid &&
                  M.td.stream &&
                  M.td.stream[e.m_steamIDBroadcast]
                    ? M.td.appID
                    : parseInt(e.m_strAppId),
                type: "game",
                bPreferAssetWithoutOverride: !1,
              }),
          );
        }
      };
      oe = (0, a.Cg)([o.PA], oe);
      class re extends r.Component {
        showContextMenu(e) {
          const { options: t, value: s, onChange: a } = this.props,
            i = Object.keys(t).map((e) =>
              r.createElement(
                u.IK,
                { key: e, onSelected: () => a(e), bChecked: e === s },
                (0, V.we)(t[e]),
              ),
            );
          (0, n.lX)(r.createElement(u.tz, null, i), e);
        }
        render() {
          const { value: e, options: t } = this.props,
            s = t[e];
          return r.createElement(
            "div",
            { className: "BroadcastLanguage", onClick: this.showContextMenu },
            r.createElement("span", null, " - ", (0, V.we)(s)),
            r.createElement(
              "div",
              { className: "ContextMenuButton" },
              r.createElement(w.GB9, null),
            ),
          );
        }
      }
      (0, a.Cg)([c.oI], re.prototype, "showContextMenu", null);
      let ne = class extends r.Component {
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
                    const t = (0, j.p)(e.url);
                    return r.createElement(
                      I.uU,
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
                  r.createElement(D.I, {
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
                  (0, V.we)("#SteamTV_AddLinkRegion"),
                ),
            ),
            r.createElement(
              "div",
              { className: "LinkOverlayInvalidRegion" },
              r.createElement(
                "div",
                null,
                (0, V.we)("#SteamTV_LinkRegionReserved"),
              ),
            ),
          );
        }
      };
      (0, a.Cg)([c.oI], ne.prototype, "AddLinkRegion", null),
        (0, a.Cg)([c.oI], ne.prototype, "LoadLinkRegion", null),
        (0, a.Cg)([c.oI], ne.prototype, "OnSaveRegions", null),
        (0, a.Cg)([c.oI], ne.prototype, "DeleteRegion", null),
        (0, a.Cg)([c.oI], ne.prototype, "UpdatePanel", null),
        (ne = (0, a.Cg)([o.PA], ne));
    },
    34010: (e, t, s) => {
      "use strict";
      s.d(t, {
        M5: () => S,
        MU: () => b,
        MX: () => y,
        Rt: () => v,
        U7: () => C,
        fn: () => _,
        j: () => g,
      });
      var a = s(34629),
        i = s(16021),
        o = s(41735),
        r = s.n(o),
        n = s(14947),
        l = s(17720),
        d = s(54728),
        m = s(44165),
        c = s(68033),
        h = s(68797),
        p = s(78327),
        u = s(75515);
      function _(e) {
        return Boolean(e && e.thumbnail_http_address);
      }
      function S(e, t) {
        if (t || e) {
          const s = t || e;
          return Boolean(s && g.Get().BIsAppStreaming(s));
        }
        return !1;
      }
      class g {
        constructor() {
          (this.m_inFlightRequests = new Map()),
            (this.m_lookupKeyToEmbedStreamDef = new Map()),
            (this.m_lookupStreams = new Map()),
            (this.m_playReadyStream = new Map()),
            (this.m_bMapHasStartedVideo = new Map()),
            (this.m_mapBroadcastChecked = new Map()),
            (this.m_pageChatStatus = "hide"),
            (this.m_streamChatStatus = "hide"),
            (this.m_bUserChatExpanded = void 0),
            (this.m_bUserPreferenceHideBroadcastByDefault = void 0),
            (this.m_bCollapsed = void 0),
            (this.m_setStreamChangedListeners = new Set()),
            (this.m_bUseFakeData = !1),
            (this.m_onLoadContextCall = new Map()),
            (0, n.Gn)(this);
        }
        BHasStreams(e) {
          const t = this.GetStreams(e);
          return Boolean(t && t.length > 0);
        }
        AddCallbackOnNewContext(e, t, s) {
          this.m_onLoadContextCall.set(this.GetStreamsLookupKeyFromDef(e), {
            name: t,
            fnCallback: s,
          });
        }
        ClearCallbackOnNewContext(e) {
          this.m_onLoadContextCall.set(
            this.GetStreamsLookupKeyFromDef(e),
            null,
          );
        }
        GetPlayReadyStream(e) {
          let t = this.GetStreamsLookupKeyFromDef(e);
          return this.m_playReadyStream.get(t);
        }
        BIsEmbeddedBroadcastHiddenByDefaultUserSettings() {
          return Boolean(this.m_bUserPreferenceHideBroadcastByDefault);
        }
        BIsEmbeddedStreamCollapsed() {
          return Boolean(this.m_bCollapsed);
        }
        SetEmbeddedStreamCollapsed(e) {
          this.m_bCollapsed != e && (this.m_bCollapsed = e);
        }
        GetConcurrentStreams(e) {
          const t = this.GetStreams(e);
          return t ? t.filter((e) => _(e)).length : 0;
        }
        GetChatVisibility() {
          return "remove" === this.m_pageChatStatus ||
            "remove" === this.m_streamChatStatus
            ? "remove"
            : void 0 !== this.m_bUserChatExpanded
              ? this.m_bUserChatExpanded
                ? "show"
                : "hide"
              : "show" === this.m_pageChatStatus
                ? "show"
                : "hide" === this.m_pageChatStatus ||
                    "hide" === this.m_streamChatStatus
                  ? "hide"
                  : "show";
        }
        ToggleChatVisibility() {
          const e = this.GetChatVisibility();
          "remove" !== e && (this.m_bUserChatExpanded = "hide" === e);
        }
        DebugDumpContextAndAvailableContext(e) {
          console.log("Requested context", this.GetStreamsLookupKeyFromDef(e)),
            console.log("Available context count: ", this.m_lookupStreams.size),
            this.m_lookupStreams.forEach((e, t) => {
              console.log(t, e.length);
            });
        }
        GetStreams(e) {
          const t = this.GetStreamsLookupKeyFromDef(e);
          return this.m_lookupStreams.get(t);
        }
        GetBroadcastURL(e) {
          let t = null;
          return (
            (t = e.steamid
              ? new l.b(e.steamid)
              : l.b.InitFromAccountID(e.accountid)),
            p.TS.COMMUNITY_BASE_URL +
              "broadcast/watch/" +
              t.ConvertTo64BitString()
          );
        }
        BIsAppStreaming(e) {
          let t = !1;
          return (
            this.m_lookupStreams.forEach((s) => {
              t ||
                (t =
                  Boolean(s) &&
                  s.some(
                    (t) =>
                      d.es.GetOrCreateBroadcastInfo(t.steamid).m_nAppID === e,
                  ));
            }),
            t
          );
        }
        GetStreamsForAppID(e) {
          const t = new Array();
          return (
            this.m_lookupStreams.forEach((s) => {
              null == s ||
                s.forEach((s) => {
                  d.es.GetOrCreateBroadcastInfo(s.steamid).m_nAppID === e &&
                    t.push(s);
                });
            }),
            t
          );
        }
        AddStreamChangedListener(e) {
          this.m_setStreamChangedListeners.add(e);
        }
        RemoveStreamChangedListener(e) {
          this.m_setStreamChangedListeners.delete(e);
        }
        async LoadBIsEmbeddedBroadcastHidden(e) {
          if (void 0 === this.m_bUserPreferenceHideBroadcastByDefault) {
            let t = (0, p.Tc)("broadcastuser", "application_config");
            if (!t)
              try {
                let s =
                    p.TS.STORE_BASE_URL +
                    "broadcast/ajaxgetuserbroadcastpreferences",
                  a = await r().get(s, { params: {}, cancelToken: e.token });
                t = a.data;
              } catch (e) {
                console.log(
                  "LoadBIsEmbeddedBroadcastHidden: " + (0, h.H)(e).strErrorMsg,
                ),
                  (t = { bHideStoreBroadcast: !1 });
              }
            (0, n.h5)(() => {
              (this.m_bUserPreferenceHideBroadcastByDefault =
                t.bHideStoreBroadcast),
                (this.m_bCollapsed = t.bHideStoreBroadcast);
            });
          }
          return this.m_bUserPreferenceHideBroadcastByDefault;
        }
        async SetupEmbeddableVOD(e, t) {
          (this.m_bUseFakeData = !1),
            (this.m_streamChatStatus = "remove"),
            await i.A.Get().QueueAppRequest(e.nAppIDVOD, {
              include_assets: !0,
              include_trailers: !0,
            });
          const s = i.A.Get().GetApp(e.nAppIDVOD),
            a = new u.TT();
          if (
            ((a.accountid = 0),
            (a.nAppIDVOD = e.nAppIDVOD),
            (a.default_selection_priority = u.mY.k_ePrimary),
            (a.current_selection_priority = u.mY.k_ePrimary),
            (a.thumbnail_http_address =
              (null == s ? void 0 : s.GetAssets().GetHeaderURL()) || ""),
            (a.title = (null == s ? void 0 : s.GetName()) || ""),
            this.GetStreams(e).unshift(a),
            t)
          ) {
            const t = this.GetStreamsLookupKeyFromDef(e);
            this.m_playReadyStream.set(t, a);
          }
        }
        async HintLoadEmbeddablePreviewStreams(e) {
          let t = null,
            s = {
              eventid: e.event ? e.event.GID : void 0,
              previewAccounts: Boolean(e.bIsPreview && e.accountIDs)
                ? e.accountIDs.slice().sort().join(",")
                : void 0,
            };
          try {
            return (
              (t = await r().get(
                p.TS.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpreview",
                { params: s },
              )),
              this.HandleHintLoadBroadcastResponse(e, t.data)
            );
          } catch (e) {
            let t = (0, h.H)(e);
            console.error(
              "HintLoadEmbeddablePreviewStreams hit error loading: " +
                t.strErrorMsg,
              t,
            );
          }
          return [];
        }
        async HintLoadEmbeddableStreams(e) {
          let t = this.MapEmbeddableStreamToRequest(e),
            s = this.GetStreamsLookupKeyFromParam(t);
          if (!this.m_inFlightRequests.has(s)) {
            this.m_lookupKeyToEmbedStreamDef.set(s, e);
            const a = this.InternalHintLoadEmbeddableStreams(e, t);
            this.m_inFlightRequests.set(s, a);
          }
          return this.m_inFlightRequests.get(s);
        }
        async InternalHintLoadEmbeddableStreams(e, t) {
          let s = (0, p.Tc)(
            "broadcast_available_for_page",
            "application_config",
          );
          if ((0, u.h7)(s)) return this.HandleHintLoadBroadcastResponse(e, s);
          try {
            let s = null;
            return (
              (s = await r().get(
                p.TS.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpage",
                { params: t },
              )),
              this.HandleHintLoadBroadcastResponse(e, s.data)
            );
          } catch (e) {
            let t = (0, h.H)(e);
            console.error(
              "HintLoadEmbeddableStreams hit error loading: " + t.strErrorMsg,
              t,
            );
          }
          return [];
        }
        async HandleHintLoadBroadcastResponse(e, t) {
          var s;
          (this.m_bUseFakeData = !1),
            e.bIsPreview &&
              ((null === (s = null == t ? void 0 : t.filtered) || void 0 === s
                ? void 0
                : s.length) > 0
                ? this.ExtractBroadcastPrioritiesFromPartnerEventForPreview(
                    e.event,
                    t.filtered,
                  )
                : ((t = {
                    filtered: [{}],
                    success: 1,
                    total_count: 1,
                    err_msg: "",
                    broadcast_chat_visibility: "hide",
                  }),
                  (this.m_bUseFakeData = !0))),
            t.broadcast_chat_visibility &&
              (this.m_pageChatStatus = t.broadcast_chat_visibility);
          const a = new Array();
          (0, n.h5)(() => {
            t.filtered.forEach((e) => {
              if (!e.steamid) {
                const t = l.b.InitFromAccountID(e.accountid);
                e.steamid = t.ConvertTo64BitString();
              }
              const t = d.es.GetOrCreateBroadcastInfo(e.steamid),
                s = e.appid ? Number(e.appid) : d.fO;
              (t.m_nAppID = s),
                (t.m_strAppId = "" + s),
                void 0 === e.current_selection_priority &&
                  (e.current_selection_priority = e.default_selection_priority),
                s != d.fO && a.push(s);
            });
          });
          const i = this.GetStreamsLookupKeyFromDef(e);
          if (
            (this.m_lookupStreams.set(i, t.filtered),
            this.m_onLoadContextCall.has(i))
          ) {
            const e = this.m_onLoadContextCall.get(i);
            e
              ? ("dev" == p.TS.WEB_UNIVERSE &&
                  console.log(
                    "CBroadcastEmbeddableStore initialized after caller using callback to " +
                      e.name,
                  ),
                e.fnCallback())
              : "dev" == p.TS.WEB_UNIVERSE &&
                console.log(
                  "CBroadcastEmbeddableStore initialized after caller, however callback is since cleared",
                );
          }
          const o = this.GetStreams(e);
          return await this.AutoStartVideoStream(e, o), o;
        }
        ExtractBroadcastPrioritiesFromPartnerEventForPreview(e, t) {
          var s, a;
          const i = Array.from(
              null !== (s = e.jsondata.broadcast_whitelist) && void 0 !== s
                ? s
                : [],
            ),
            o = Array.from(
              null !== (a = e.jsondata.broadcast_priority) && void 0 !== a
                ? a
                : [],
            ),
            r = new Map();
          for (let e = 0; e < i.length && !(e >= o.length); e++)
            r.set(i[e], (0, u.PH)(o[e]));
          t.forEach((e) => {
            const t = Number(e.accountid);
            r.has(t) && (e.current_selection_priority = r.get(t));
          });
        }
        async AutoStartVideoStream(e, t) {
          let s = this.GetStreamsLookupKeyFromDef(e);
          if (this.m_bMapHasStartedVideo.get(s)) return null;
          if (this.m_bUseFakeData) {
            if (!this.m_playReadyStream.get(s)) {
              const e = {
                accountid: 0,
                thumbnail_http_address: "",
                default_selection_priority: u.mY.k_eGeneral,
                current_selection_priority: u.mY.k_eGeneral,
              };
              this.m_playReadyStream.set(s, e);
            }
            return this.m_playReadyStream;
          }
          return this.PlayFromAvailableStreams(e, t);
        }
        async PlayFromAvailableStreams(e, t, s = !1) {
          const a = new Set();
          for (;;) {
            const i = t.filter((e) => !(a.has(e) || (s && e.nAppIDVOD))),
              o = this.GetAutoStartStream(i);
            if (!o) return null;
            if (await this.AttemptToPlayStream(e, o)) return o;
            a.add(o);
          }
        }
        async AttemptToPlayStream(e, t) {
          let s = this.GetStreamsLookupKeyFromDef(e);
          if (
            (this.m_bMapHasStartedVideo.set(s, !0),
            this.m_mapBroadcastChecked.has(t.accountid) ||
              this.m_mapBroadcastChecked.set(
                t.accountid,
                this.InternalAttemptToPlayStream(e, t),
              ),
            t.nAppIDVOD)
          )
            this.m_playReadyStream.set(s, t);
          else {
            const a = await this.m_mapBroadcastChecked.get(t.accountid);
            if (1 != (null == a ? void 0 : a.success)) return null;
            (t.steamid = a.steamid),
              this.m_playReadyStream.set(s, t),
              this.GetConcurrentStreams(e) > 1
                ? (this.m_streamChatStatus = "hide")
                : (this.m_streamChatStatus = t.broadcast_chat_visibility),
              this.m_setStreamChangedListeners.forEach((e) => e(t));
            C(d.es.GetOrCreateBroadcastInfo(t.steamid).m_nAppID, 1, t.snr);
          }
          return t;
        }
        async InternalAttemptToPlayStream(e, t) {
          this.GetStreamsLookupKeyFromDef(e);
          let s = null;
          try {
            const e = p.TS.STORE_BASE_URL + "broadcast/ajaxcheckbroadcast";
            let a = {
              broadcastaccountid: t.accountid,
              viewer_token: d.es.GetViewerToken(),
              origin: self.origin,
            };
            return (s = await r().get(e, { params: a })), s.data;
          } catch (e) {
            let t = (0, h.H)(e);
            console.error("Broadcast.AttemptToPlayStream: " + t.strErrorMsg, t);
          }
          return null;
        }
        GetAutoStartStream(e) {
          if (!e) return null;
          const t = e.filter((e) => _(e)),
            s = t.reduce((e, t) => Math.max(e, v(t)), 0),
            a = t.filter((e) => v(e) === s);
          if (0 === a.length) return null;
          return a[Math.floor(Math.random() * a.length)];
        }
        MapEmbeddableStreamToRequest(e) {
          var t, s, a;
          return {
            appid: e.appid,
            promotionName: e.bIsPreview ? "preview" : e.promotionName,
            clanid: e.clanid
              ? e.clanid
              : e.event
                ? e.event.clanSteamID.GetAccountID()
                : void 0,
            listid: e.listid,
            subid: e.subid,
            bundleid: e.bundleid,
            eventid: e.event ? e.event.GID : void 0,
            previewAccounts: Boolean(e.bIsPreview && e.accountIDs)
              ? e.accountIDs.slice().sort().join(",")
              : void 0,
            test: false,
            cc: p.TS.COUNTRY,
            l: p.TS.LANGUAGE,
            hubtype:
              null === (t = e.event) || void 0 === t
                ? void 0
                : t.GetContentHubType(),
            hubcategory:
              null === (s = e.event) || void 0 === s
                ? void 0
                : s.GetContentHubCategory(),
            hubtagid:
              null === (a = e.event) || void 0 === a
                ? void 0
                : a.GetContentHubTag(),
            tabuniqueid: e.tabuniqueid,
            tabfilter: e.tabfilter,
            rt_now_override_test: m.HD.BHasTimeOverride()
              ? m.HD.GetTimeNowWithOverride()
              : void 0,
          };
        }
        GetStreamsLookupKeyFromDef(e) {
          return this.GetStreamsLookupKeyFromParam(
            this.MapEmbeddableStreamToRequest(e),
          );
        }
        GetStreamsLookupKeyFromParam(e) {
          return JSON.stringify(e);
        }
        static Get() {
          return (
            g.s_GlobalStore ||
              ((g.s_GlobalStore = new g()),
              "dev" == p.TS.WEB_UNIVERSE &&
                (window.g_BroadcastEmbeddableStore = g.s_GlobalStore),
              g.s_GlobalStore.Init()),
            g.s_GlobalStore
          );
        }
        Init() {}
      }
      function v(e) {
        return e.current_selection_priority || u.mY.k_eGeneral;
      }
      function b(e) {
        e.sort((e, t) =>
          v(e) != v(t)
            ? v(t) - v(e)
            : e.viewer_count != t.viewer_count
              ? t.viewer_count - e.viewer_count
              : t.accountid - e.accountid,
        );
      }
      async function C(e, t, s) {
        if (e > 0 && 7 != e && s) {
          let a = new URLSearchParams();
          a.append("page_action", "" + t),
            a.append("snr", s),
            r().post(
              p.TS.STORE_BASE_URL + "ajaxreportproductaction/" + e + "/",
              a,
            );
        }
      }
      (0, a.Cg)([n.sH], g.prototype, "m_lookupStreams", void 0),
        (0, a.Cg)([n.sH], g.prototype, "m_playReadyStream", void 0),
        (0, a.Cg)([n.sH], g.prototype, "m_pageChatStatus", void 0),
        (0, a.Cg)([n.sH], g.prototype, "m_streamChatStatus", void 0),
        (0, a.Cg)([n.sH], g.prototype, "m_bUserChatExpanded", void 0),
        (0, a.Cg)(
          [n.sH],
          g.prototype,
          "m_bUserPreferenceHideBroadcastByDefault",
          void 0,
        ),
        (0, a.Cg)([n.sH], g.prototype, "m_bCollapsed", void 0),
        (0, a.Cg)(
          [n.XI],
          g.prototype,
          "HintLoadEmbeddablePreviewStreams",
          null,
        ),
        (0, a.Cg)([n.XI], g.prototype, "AttemptToPlayStream", null);
      const y = new c.T();
    },
    60727: (e, t, s) => {
      "use strict";
      s.d(t, { l: () => d, m: () => l });
      var a = s(34629),
        i = s(14947),
        o = s(17720),
        r = s(44165),
        n = s(91254);
      class l {
        constructor() {
          (this.m_mapBroadcasterSteamIDToEvents = new Map()),
            (this.m_mapBroadcasterSteamIDData = new Map()),
            (0, i.Gn)(this);
        }
        static GetBBCodeParam(e, t, s = "") {
          const a = new RegExp(`\\W${t}\\W*=\\W*\\"(.*?)\\"`, "gmi").exec(e);
          return a ? a[1] : s;
        }
        static ParseCalendarEventPresentersFromText(e) {
          const t = /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
            s = new Array();
          for (;;) {
            const a = t.exec(e);
            if (null === a) break;
            const i = a[1],
              r = a[2],
              n = l.GetBBCodeParam(i, "steamid"),
              d = {
                steamID: n ? new o.b(n) : void 0,
                name: l.GetBBCodeParam(i, "name"),
                title: l.GetBBCodeParam(i, "title"),
                company: l.GetBBCodeParam(i, "company"),
                photo: l.GetBBCodeParam(i, "photo"),
                bio: r,
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
            const a = t.exec(e);
            if (null === a) break;
            const i = a[1];
            s.add(Number(i));
          }
          return s;
        }
        static ParseEventModelAppReferences(e, t) {
          var s;
          const a = e.GetDescriptionWithFallback(t),
            i = l.ParseEventAppReferencesFromText(a);
          if (
            null === (s = e.jsondata) || void 0 === s
              ? void 0
              : s.referenced_appids
          )
            for (const t of e.jsondata.referenced_appids) i.add(t);
          return i;
        }
        async BuildBroadcasterSteamIDToActiveEventMap(e) {
          const t = r.HD.GetTimeNowWithOverride(),
            s = e.GetCalendarItemsInTimeRange(t - 3600, t);
          for (const e of s.rgCalendarItems)
            n.O3.QueueLoadPartnerEvent(e.clanid, e.unique_id);
          const a = s.rgCalendarItems.map((e) =>
              n.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                o.b.InitFromClanID(e.clanid),
                e.unique_id,
                0,
              ),
            ),
            i = await Promise.all(a),
            l = new Map();
          for (const e of i)
            if (e && !(e.endTime && e.endTime < t))
              for (const t of e.GetBroadcastWhitelistAsSteamIDs())
                l.has(t) ? l.get(t).push(e) : l.set(t, [e]);
          return l;
        }
        IsBroadcasterAlreadyBound(e, t) {
          const s = this.m_mapBroadcasterSteamIDToEvents.get(e),
            a = s ? s.length : 0;
          if ((t ? t.length : 0) != a) return !1;
          for (let e = 0; e < a; e++) if (s[e] != t[e].GID) return !1;
          return !0;
        }
        static BuildSteamIDToPresenterMapFromEventList(e, t) {
          let s = new Map();
          for (const a of e) {
            if (!a) continue;
            const e = l.ParseEventModelPresenters(a, t);
            for (const t of e)
              t.steamID && s.set(t.steamID.ConvertTo64BitString(), t);
          }
          return s;
        }
        RemoveCachedDataIfNotInMap(e) {
          const t = new Array();
          this.m_mapBroadcasterSteamIDToEvents.forEach((s, a) => {
            e.has(a) || t.push(a);
          }),
            t.forEach((e) => {
              this.m_mapBroadcasterSteamIDData.delete(e),
                this.m_mapBroadcasterSteamIDToEvents.delete(e);
            });
        }
        static BuildAppIDRefsForEventList(e, t) {
          const s = new Set();
          for (const a of e) {
            l.ParseEventModelAppReferences(a, t).forEach((e) => s.add(e));
          }
          return Array.from(s);
        }
        UpdateCachedDataFromEvents(e, t) {
          e.forEach((e, s) => {
            if (this.IsBroadcasterAlreadyBound(s, e)) return;
            const a = {
              m_mapPresenters: l.BuildSteamIDToPresenterMapFromEventList(e, t),
              m_rgAppIDs: l.BuildAppIDRefsForEventList(e, t),
            };
            this.m_mapBroadcasterSteamIDData.set(s, a),
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
      (0, a.Cg)([i.sH], l.prototype, "m_mapBroadcasterSteamIDData", void 0);
      const d = new l();
    },
    54728: (e, t, s) => {
      "use strict";
      s.d(t, { es: () => L, fK: () => T, a0: () => E, fO: () => V });
      var a = s(34629),
        i = s(41735),
        o = s.n(i),
        r = s(14947),
        n = s(3067),
        l = s(4299);
      function d(e, t, s) {
        return [e, t, s];
      }
      class m extends Error {}
      class c extends l.J8 {
        constructor(e) {
          super(), (this.m_appid = e || 0);
        }
        GetAppID() {
          return this.m_appid;
        }
        parseColor(e) {
          if ("string" != typeof e || !e.match(/^#[0-9a-fA-F]{6}$/))
            throw new m("expected color string");
          return [
            parseInt(e.substring(1, 3), 16),
            parseInt(e.substring(3, 5), 16),
            parseInt(e.substring(5, 7), 16),
          ];
        }
        parseString(e) {
          if ("string" == typeof e) return e;
          throw new m("expected string");
        }
        parseNumber(e) {
          if ("number" == typeof e) return e;
          throw new m("expected number");
        }
        parseDate(e) {
          if ("number" == typeof e) return new Date(e);
          throw new m("expected timestamp");
        }
        parseArray(e, t) {
          let s = [];
          if ("object" != typeof e || !Array.isArray(e))
            throw new m("expected array");
          let a = e.length;
          for (let i = 0; i < a; ++i)
            try {
              s.push(t(e[i]));
            } catch (e) {
              throw ((e.message += "\n...while parsing array element " + i), e);
            }
          return s;
        }
        parseDict(e, t) {
          let s = new Map();
          if ("object" != typeof e || Array.isArray(e))
            throw new m("expected object");
          for (let a in e)
            try {
              s.set(a, t(e[a]));
            } catch (e) {
              throw (
                ((e.message += "\n...while parsing dictionary element " + a), e)
              );
            }
          return s;
        }
        parseBracket(e) {
          let t = {
            name: this.parseString(e.name),
            start: this.parseDate(e.start),
            color: [255, 0, 255],
          };
          return (
            "params" in e &&
              (t.params = this.parseDict(
                e.params,
                this.parseString.bind(this),
              )),
            "end" in e && (t.end = this.parseDate(e.end)),
            "color" in e && (t.color = this.parseColor(e.color)),
            t
          );
        }
        parseMarker(e) {
          let t = { time: this.parseDate(e.time), color: [0, 255, 255] };
          return (
            "name" in e && (t.name = this.parseString(e.name)),
            "params" in e &&
              (t.params = this.parseDict(
                e.params,
                this.parseString.bind(this),
              )),
            "color" in e && (t.color = this.parseColor(e.color)),
            t
          );
        }
        parseSoundTrack(e) {
          let t = {};
          return (
            "song_title" in e &&
              (t.song_title = this.parseString(e.song_title)),
            "appid" in e && (t.appid = this.parseNumber(e.appid)),
            "song_index" in e &&
              (t.song_index = this.parseNumber(e.song_index)),
            t
          );
        }
        parseBroadcastGameData(e) {
          let t = { appid: 0, brackets: [], markers: [] };
          return (
            "appid" in e && (t.appid = this.parseNumber(e.appid)),
            "brackets" in e &&
              (t.brackets = this.parseArray(
                e.brackets,
                this.parseBracket.bind(this),
              )),
            "markers" in e &&
              (t.markers = this.parseArray(
                e.markers,
                this.parseMarker.bind(this),
              )),
            "soundtrack" in e &&
              (t.soundtrack = this.parseSoundTrack(e.soundtrack)),
            t
          );
        }
        convertTime(e, t) {
          return e - t / 1e3;
        }
        UpdateMarkers(e, t) {
          let s = [],
            a = [];
          for (const i of e)
            i.persistent
              ? (a.length > 0 &&
                  (a[a.length - 1].nTimeEnd = this.convertTime(i.Timestamp, t)),
                i.name.length > 0 &&
                  a.push({
                    strTemplateName: i.name,
                    nTimeStart: this.convertTime(i.Timestamp, t),
                    nTimeEnd: -1,
                    color: d(i.color_r, i.color_g, i.color_b),
                  }))
              : s.push({
                  strTemplateName: i.name,
                  nTime: this.convertTime(i.Timestamp, t),
                  color: d(i.color_r, i.color_g, i.color_b),
                });
          return { rgMarkers: s, rgSegments: a };
        }
        UpdateRegions(e) {
          let t = [];
          for (const s of e)
            t.push({
              strTemplateName: s.name,
              min: { x: s.min_x, y: s.min_y },
              max: { x: s.max_x, y: s.max_y },
              behavior: s.behavior,
            });
          return t;
        }
        UpdateSoundtrack(e, t) {}
      }
      var h = s(36064),
        p = s(48333),
        u = s(25489),
        _ = s(78327),
        S = s(6419),
        g = s(34374),
        v = s(6144);
      class b {
        constructor(e) {
          (this.m_elVideo = null),
            (this.m_peerConnection = null),
            (this.m_strBroadcastSteamID = void 0),
            (this.m_ulWebRTCSessionID = void 0),
            (this.m_schCandidateTimer = new v.LU()),
            (this.m_nHostCandidateGeneration = void 0),
            (this.m_nCandidateUpdateIntervalMS = void 0),
            (this.m_listeners = new v.Ji()),
            (this.m_bFirstPlay = !0),
            (this.m_bStatsViewVisible = !1),
            (this.m_schCaptureDisplayStatsTrigger = new v.LU()),
            (this.m_stats = new g._L()),
            (0, r.Gn)(this),
            (this.m_elVideo = e);
        }
        async PlayMPD(e, t, s) {}
        async PlayWebRTC(e, t, s, a, i) {
          (this.m_strBroadcastSteamID = e),
            (this.m_ulWebRTCSessionID = s),
            (this.m_nHostCandidateGeneration = 0),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "pause",
              this.OnVideoPause,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "resize",
              this.OnVideoResize,
            );
          let r = {
            iceServers: [
              { urls: ["stun:" + a] },
              { urls: ["turn:" + a], username: t, credential: s },
            ],
            iceTransportPolicy: "relay",
          };
          (this.m_peerConnection = new RTCPeerConnection(r)),
            (this.m_peerConnection.oniceconnectionstatechange = ((e) => {
              this.m_peerConnection &&
                (console.log(
                  "BroadcastWebRTC: ICE connection state changed to " +
                    this.m_peerConnection.iceConnectionState,
                ),
                "failed" === this.m_peerConnection.iceConnectionState
                  ? this.OnWebRTCConnectionFailed()
                  : "disconnected" ===
                      this.m_peerConnection.iceConnectionState &&
                    this.OnWebRTCConnectionRetry());
            }).bind(this)),
            (this.m_peerConnection.onicecandidate = ((e) => {
              if (e.candidate) {
                const t = new FormData();
                t.append("broadcaststeamid", this.m_strBroadcastSteamID),
                  t.append("webrtc_session_id", this.m_ulWebRTCSessionID),
                  t.append("sdp_mid", e.candidate.sdpMid),
                  t.append(
                    "sdp_mline_index",
                    String(e.candidate.sdpMLineIndex),
                  ),
                  t.append("candidate", e.candidate.candidate),
                  o()
                    .post(
                      `${_.TS.CHAT_BASE_URL}broadcast/addbroadcastwebrtccandidate`,
                      t,
                    )
                    .then((e) => {
                      const t = e.data;
                      (t.success && 1 == t.success) ||
                        console.log(
                          "Failed to add a WebRTC session ICE candidate: " +
                            String(t.success),
                        );
                    })
                    .catch((e) =>
                      console.log(
                        "Failed to add a WebRTC session ICE candidate" + e,
                      ),
                    );
              }
            }).bind(this)),
            (this.m_peerConnection.ontrack = ((e) => {
              "video" === e.track.kind &&
                ((this.m_elVideo.src = null),
                (this.m_elVideo.srcObject = e.streams[0]),
                this.Play());
            }).bind(this)),
            this.m_peerConnection
              .setRemoteDescription({ type: "offer", sdp: i })
              .then(async () => {
                await this.m_peerConnection.setLocalDescription(
                  await this.m_peerConnection.createAnswer(),
                );
                const e = new FormData();
                e.append("broadcaststeamid", this.m_strBroadcastSteamID),
                  e.append("webrtc_session_id", this.m_ulWebRTCSessionID),
                  e.append(
                    "answer",
                    this.m_peerConnection.localDescription.sdp,
                  );
                try {
                  await o()
                    .post(
                      `${_.TS.CHAT_BASE_URL}broadcast/setbroadcastwebrtcanswer`,
                      e,
                    )
                    .then((e) => {
                      const t = e.data;
                      if (!t.success || 1 != t.success)
                        throw new Error(String(t.success));
                    });
                } catch (e) {
                  return (
                    console.log(
                      "Failed to set the WebRTC session answer: " + e,
                    ),
                    void this.OnWebRTCConnectionRetry()
                  );
                }
                (this.m_nCandidateUpdateIntervalMS = 250),
                  this.m_schCandidateTimer.Schedule(
                    this.m_nCandidateUpdateIntervalMS,
                    () => this.GetHostCandidates(),
                  );
              });
        }
        async GetHostCandidates() {
          const e = new FormData();
          e.append("broadcaststeamid", this.m_strBroadcastSteamID),
            e.append("webrtc_session_id", this.m_ulWebRTCSessionID),
            e.append(
              "candidate_generation",
              String(this.m_nHostCandidateGeneration),
            );
          try {
            await o()
              .post(
                `${_.TS.CHAT_BASE_URL}broadcast/getbroadcastwebrtccandidates`,
                e,
              )
              .then((e) => {
                const t = e.data,
                  s = t.data;
                if (!t.success || 1 != t.success)
                  throw new Error(String(t.success));
                s.candidate_generation > this.m_nHostCandidateGeneration
                  ? (s.candidates.forEach((e) => {
                      const t = new RTCIceCandidate({
                        sdpMid: e.sdp_mid,
                        sdpMLineIndex: e.sdp_mline_index,
                        candidate: e.candidate,
                      });
                      this.m_peerConnection
                        .addIceCandidate(t)
                        .catch((e) => console.error(e));
                    }),
                    (this.m_nHostCandidateGeneration = s.candidate_generation))
                  : this.m_nHostCandidateGeneration > 0 &&
                    (this.m_nCandidateUpdateIntervalMS *= 2);
              });
          } catch (e) {
            return (
              console.log("Failed to get WebRTC session ICE candidates" + e),
              void this.OnWebRTCConnectionRetry()
            );
          }
          this.m_schCandidateTimer.Schedule(
            this.m_nCandidateUpdateIntervalMS,
            () => this.GetHostCandidates(),
          );
        }
        DispatchEvent(e, t = null) {
          let s = new CustomEvent(e, {
            cancelable: !0,
            bubbles: !0,
            detail: t,
          });
          this.m_elVideo.dispatchEvent(s);
        }
        OnWebRTCConnectionRetry() {
          this.DispatchEvent("valve-webrtcretry");
        }
        OnWebRTCConnectionFailed() {
          this.DispatchEvent("valve-webrtcfailed");
        }
        Close() {
          this.m_listeners.Unregister(),
            this.m_schCandidateTimer.Cancel(),
            this.m_schCaptureDisplayStatsTrigger.Cancel(),
            this.m_peerConnection &&
              (this.m_peerConnection.close(), (this.m_peerConnection = null)),
            this.m_elVideo.pause(),
            (this.m_elVideo.srcObject = null),
            this.m_stats &&
              (this.m_stats.GetFPSMonitor().Close(), (this.m_stats = null)),
            (this.m_bFirstPlay = !0);
        }
        IsBuffering() {
          return !1;
        }
        GetCurrentPlayTime() {
          return 0;
        }
        GetLiveContentStartTime() {
          return null;
        }
        GetAvailableVideoStartTime() {
          return 0;
        }
        GetBufferedLiveEdgeTime() {
          return 0;
        }
        IsPaused() {
          return this.m_elVideo.paused;
        }
        async Play() {
          const e = this.m_bFirstPlay;
          this.m_bFirstPlay = !1;
          let t = !1;
          const s = () => {
            (t = !0),
              this.m_stats
                .GetFPSMonitor()
                .StartTracking(() =>
                  this.m_stats.ExtractFrameInfo(this.m_elVideo),
                );
          };
          try {
            await this.m_elVideo.play(), s();
          } catch (e) {
            e.name;
          }
          !t && e && this.DispatchEvent("valve-userinputneeded");
        }
        Pause() {
          this.m_elVideo.pause();
        }
        CanSeek() {
          return !1;
        }
        SeekAndPlay(e) {
          return this.Play(), 0;
        }
        Seek(e) {
          return 0;
        }
        JumpTime(e) {
          return 0;
        }
        IsMuted() {
          return this.m_elVideo.muted;
        }
        SetMuted(e) {
          this.m_elVideo.muted = e;
        }
        SetVolume(e) {
          (e = u.OQ(e, 0, 1)), (this.m_elVideo.volume = e);
        }
        GetVolume() {
          return this.m_elVideo.volume;
        }
        GetDASHPlayerStats() {
          return this.m_stats;
        }
        SetStatsViewIsVisible(e) {
          e && !this.m_bStatsViewVisible
            ? (this.CaptureStatsForDisplay(),
              this.m_schCaptureDisplayStatsTrigger.Schedule(
                250,
                this.CaptureStatsForDisplay,
              ))
            : !e &&
              this.m_bStatsViewVisible &&
              this.m_schCaptureDisplayStatsTrigger.Cancel(),
            (this.m_bStatsViewVisible = e);
        }
        CaptureStatsForDisplay() {
          this.m_stats.SetHTMLVideoPlayerDisplay(
            this.m_elVideo.videoWidth,
            this.m_elVideo.videoHeight,
            this.m_elVideo.clientWidth,
            this.m_elVideo.clientHeight,
          ),
            this.m_schCaptureDisplayStatsTrigger.Schedule(
              250,
              this.CaptureStatsForDisplay,
            );
        }
        OnVideoPause(e) {
          this.m_stats.GetFPSMonitor().Close();
        }
        OnVideoResize(e) {
          this.m_stats.GetFPSMonitor().SetWindowResized();
        }
        GetVideoRepresentations() {
          let e = [];
          return e.push({ id: "auto", displayName: "Auto", selected: !0 }), e;
        }
        SetVideoRepresentation(e) {}
        IsLiveContent() {
          return !0;
        }
        BHasTimedText() {
          return !1;
        }
      }
      (0, a.Cg)([S.o], b.prototype, "PlayWebRTC", null),
        (0, a.Cg)([r.XI.bound], b.prototype, "CaptureStatsForDisplay", null),
        (0, a.Cg)([S.o], b.prototype, "OnVideoPause", null),
        (0, a.Cg)([S.o], b.prototype, "OnVideoResize", null);
      var C = s(62490),
        y = s(81393),
        f = s(61859),
        D = s(68797),
        w = s(6469),
        I = s(43882),
        B = s(66703);
      const V = 7;
      var T, E;
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Unlocking = 1)] = "Unlocking"),
          (e[(e.Loading = 2)] = "Loading"),
          (e[(e.Ready = 3)] = "Ready"),
          (e[(e.Error = 4)] = "Error");
      })(T || (T = {}));
      class k {
        constructor() {
          (this.m_rtUnlockTime = 0), (this.m_schUnlockTimeout = new v.LU());
        }
        UnlockH264(e, t) {
          this.BCanUnlockH264()
            ? (e.SetState(T.Unlocking, ""),
              console.log("Unlocking H.264 for broadcast video playback"),
              this.RequestUnlockH264(),
              (this.m_broadcast = e),
              (this.m_video = t),
              (this.m_rtUnlockTime = Date.now()),
              this.m_schUnlockTimeout.Schedule(100, () =>
                this.CheckUnlockState(),
              ))
            : e.SetState(T.Error, (0, f.we)("#BroadcastWatch_MinBrowser"));
        }
        BCanUnlockH264() {
          return (0, B.Dp)("RemotePlay.UnlockH264")
            ? (console.log("Client supports direct H.264 unlock"), !0)
            : (0, B.Dp)("BrowserView.PostMessageToParent")
              ? (console.log("Client supports browserview H.264 unlock"), !0)
              : (console.log("Client does not support H.264 unlock"), !1);
        }
        RequestUnlockH264() {
          (0, B.Dp)("RemotePlay.UnlockH264")
            ? (console.log("Requesting direct H.264 unlock"),
              SteamClient.RemotePlay.UnlockH264())
            : (0, B.Dp)("BrowserView.PostMessageToParent")
              ? (console.log("Requesting browserview unlock"),
                SteamClient.BrowserView.PostMessageToParent(
                  "UnlockH264Request",
                  "CUnlockH264Helper",
                ))
              : console.log(
                  "Failed to request H.264 unlock: no method supported",
                );
        }
        CheckUnlockState() {
          if (this.m_broadcast.m_eWatchState != T.Unlocking) return;
          if ((0, h.Mc)() || (0, h.aM)())
            return (
              console.log("Unlocking H.264 successful"),
              this.m_broadcast.SetState(T.None, ""),
              void this.m_video.Restart()
            );
          Date.now() - this.m_rtUnlockTime > 6e3
            ? (console.log(
                "Unlocking H.264 timed out (Steam client or servers offline?)",
              ),
              this.m_broadcast.SetState(
                T.Error,
                (0, f.we)("#BroadcastWatch_MinBrowser"),
              ))
            : this.m_schUnlockTimeout.Schedule(100, () =>
                this.CheckUnlockState(),
              );
        }
      }
      class M {
        constructor() {
          (this.m_steamIDBroadcast = ""),
            (this.m_ulBroadcastID = ""),
            (this.m_ulViewerToken = ""),
            (this.m_strCDNAuthUrlParameters = void 0),
            (this.m_bWebRTC = !1),
            (this.m_eWatchState = T.None),
            (this.m_strStateDescription = ""),
            (this.m_rgVideos = []),
            (this.m_schManifestTimeout = new v.LU()),
            (this.m_schHeartbeatTimeout = new v.LU()),
            (0, r.Gn)(this);
        }
        SetState(e, t = "") {
          (this.m_eWatchState = e),
            (this.m_strStateDescription = t),
            e == T.Error && console.log(this.m_strStateDescription);
        }
      }
      (0, a.Cg)([r.sH], M.prototype, "m_ulBroadcastID", void 0),
        (0, a.Cg)([r.sH], M.prototype, "m_eWatchState", void 0),
        (0, a.Cg)([r.sH], M.prototype, "m_strStateDescription", void 0),
        (0, a.Cg)([r.XI], M.prototype, "SetState", null);
      class P {
        constructor(e) {
          (this.m_steamIDBroadcast = ""),
            (this.m_bInitialized = !1),
            (this.m_strTitle = ""),
            (this.m_strAppId = "" + V),
            (this.m_nAppID = V),
            (this.m_strAppTitle = ""),
            (this.m_strThumbnailUrl = ""),
            (this.m_nViewerCount = 0),
            (this.m_bIsOnline = !1),
            (this.m_schUpdateTimeout = new v.LU()),
            (this.m_nRefCount = 0),
            (0, r.Gn)(this),
            (this.m_steamIDBroadcast = e);
        }
      }
      (0, a.Cg)([r.sH], P.prototype, "m_bInitialized", void 0),
        (0, a.Cg)([r.sH], P.prototype, "m_strTitle", void 0),
        (0, a.Cg)([r.sH], P.prototype, "m_strAppId", void 0),
        (0, a.Cg)([r.sH], P.prototype, "m_nAppID", void 0),
        (0, a.Cg)([r.sH], P.prototype, "m_strAppTitle", void 0),
        (0, a.Cg)([r.sH], P.prototype, "m_strThumbnailUrl", void 0),
        (0, a.Cg)([r.sH], P.prototype, "m_nViewerCount", void 0),
        (0, a.Cg)([r.sH], P.prototype, "m_bIsOnline", void 0);
      class O {
        constructor() {
          (this.m_eWatchState = T.None),
            (this.m_strStateDescription = ""),
            (this.m_rgVideos = []),
            (0, r.Gn)(this);
        }
        SetState(e, t = "") {
          (this.m_eWatchState = e),
            (this.m_strStateDescription = t),
            e == T.Error && console.log(this.m_strStateDescription);
        }
      }
      (0, a.Cg)([r.sH], O.prototype, "m_eWatchState", void 0),
        (0, a.Cg)([r.sH], O.prototype, "m_strStateDescription", void 0),
        (0, a.Cg)([r.XI], O.prototype, "SetState", null);
      class G extends O {}
      class A extends O {}
      class R {
        constructor() {
          (this.m_mapBroadcasts = new Map()),
            (this.m_mapClips = new Map()),
            (this.m_mapVODs = new Map()),
            (this.m_activeVideo = null),
            (this.m_broadcastSettings = {
              nVolume: 1,
              bMuted: !1,
              ulViewerToken: "0",
            }),
            (this.m_schSaveSettings = new v.LU()),
            (this.m_broadcastInfos = {}),
            (0, r.Gn)(this),
            this.LoadBroadcastSettings();
        }
        GetBroadcastState(e) {
          if (e.IsBroadcastClip()) {
            let t = this.m_mapClips.get(e.GetBroadcastClipID());
            return t ? t.m_eWatchState : T.None;
          }
          if (e.IsBroadcastVOD()) {
            const t = this.m_mapVODs.get(e.GetBroadcastAppIDVOD());
            return t ? t.m_eWatchState : T.None;
          }
          {
            let t = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
            return t ? t.m_eWatchState : T.None;
          }
        }
        GetBroadcastStateDescription(e) {
          if (e.IsBroadcastClip()) {
            let t = this.m_mapClips.get(e.GetBroadcastClipID());
            return t ? t.m_strStateDescription : "";
          }
          if (e.IsBroadcastVOD()) {
            const t = this.m_mapVODs.get(e.GetBroadcastAppIDVOD());
            return t ? t.m_strStateDescription : "";
          }
          {
            let t = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
            return t ? t.m_strStateDescription : "";
          }
        }
        CreateBroadcastVideo(e, t, s, a) {
          let i = this.GetOrCreateBroadcast(t),
            { nVolume: o, bMuted: r } = this.m_broadcastSettings,
            n = new H(e, o, r, s);
          if (
            (n.SetBroadcastSteamID(t),
            i.m_rgVideos.push(n),
            (i.m_bWebRTC = a),
            !(0, h.Mc)() && !(0, h.aM)())
          ) {
            return new k().UnlockH264(i, n), n;
          }
          return n;
        }
        CreateClipVideo(e, t, s) {
          let a = this.GetOrCreateClip(t),
            { nVolume: i, bMuted: o } = this.m_broadcastSettings,
            r = new H(e, i, o, s);
          if (
            (r.SetBroadcastClipID(t),
            a.m_rgVideos.push(r),
            !(0, h.Mc)() && !(0, h.aM)())
          ) {
            return new k().UnlockH264(a, r), r;
          }
          return r;
        }
        CreateVODVideo(e, t, s) {
          let a = this.GetOrCreateVOD(t),
            { nVolume: i, bMuted: o } = this.m_broadcastSettings,
            r = new H(e, i, o, s);
          if (
            (r.SetBroadcastAppIDVOD(t),
            a.m_rgVideos.push(r),
            !(0, h.Mc)() && !(0, h.aM)())
          ) {
            return new k().UnlockH264(a, r), r;
          }
          return r;
        }
        StartVideo(e) {
          if (e.IsBroadcastClip()) {
            console.log(`Starting clip for ${e.GetBroadcastClipID()}`);
            let t = this.m_mapClips.get(e.GetBroadcastClipID());
            if (!t) return;
            this.SetActiveVideo(e),
              t.m_eWatchState == T.None
                ? this.GetClipManifest(t, e.GetWatchLocation())
                : t.m_eWatchState == T.Ready && e.StartClip(t);
          } else if (e.IsBroadcastVOD()) {
            console.log(`Starting VOD for ${e.GetBroadcastAppIDVOD()}`);
            let t = this.m_mapVODs.get(e.GetBroadcastAppIDVOD());
            if (!t) return;
            this.SetActiveVideo(e),
              t.m_eWatchState == T.None
                ? this.GetVODManifest(t, e.GetWatchLocation())
                : t.m_eWatchState == T.Ready && e.StartVOD(t);
          } else {
            let t = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
            if (!t) return;
            this.SetActiveVideo(e),
              t.m_eWatchState == T.None
                ? this.GetBroadcastManifest(t, e.GetWatchLocation())
                : t.m_eWatchState == T.Ready && e.StartBroadcast(t);
          }
        }
        SetActiveVideo(e) {
          this.m_mapBroadcasts.forEach((t) => {
            for (let s of t.m_rgVideos) s != e && s.StopPlaybackTillUserInput();
          }),
            this.m_mapClips.forEach((t) => {
              for (let s of t.m_rgVideos)
                s != e && s.StopPlaybackTillUserInput();
            }),
            (this.m_activeVideo = e);
        }
        PauseAllVideo() {
          this.m_mapBroadcasts.forEach((e) => {
            for (let t of e.m_rgVideos) t.StopPlaybackTillUserInput();
          });
        }
        async StopVideo(e) {
          let t = e.GetBroadcastSteamID(),
            s = this.m_mapBroadcasts.get(t);
          e.Stop(),
            s &&
              (s.m_ulBroadcastID &&
                (async function (e, t, s) {
                  if (!t) return;
                  let a = new FormData();
                  a.append("steamid", e),
                    a.append("broadcastid", t),
                    a.append("viewertoken", s);
                  try {
                    await o().post(
                      _.TS.CHAT_BASE_URL + "broadcast/stopwatching",
                      a,
                    );
                  } catch {}
                })(
                  t,
                  s.m_ulBroadcastID,
                  this.m_broadcastSettings.ulViewerToken,
                ),
              C.Wp(s.m_rgVideos, (t) => t == e),
              this.RemoveBroadcastIfUnused(s));
        }
        StartInfo(e) {
          const t = this.GetOrCreateBroadcastInfo(e);
          return (
            t.m_nRefCount++,
            (t.m_bInitialized && t.m_schUpdateTimeout.IsScheduled()) ||
              this.LoadBroadcastInfo(t),
            t
          );
        }
        StopInfo(e) {
          e.m_nRefCount--;
        }
        GetOrCreateBroadcastInfo(e) {
          if (!e) {
            return new P("");
          }
          if (!this.m_broadcastInfos[e]) {
            const t = (0, r.sH)(new P(e));
            this.m_broadcastInfos[e] = t;
          }
          return this.m_broadcastInfos[e];
        }
        GetOrCreateBroadcast(e) {
          let t = this.m_mapBroadcasts.get(e);
          return (
            t ||
            ((t = new M()),
            (t.m_steamIDBroadcast = e),
            (t.m_eWatchState = T.None),
            this.m_mapBroadcasts.set(e, t),
            t)
          );
        }
        GetBroadcast(e) {
          return this.m_mapBroadcasts.get(e);
        }
        GetBroadcastClip(e) {
          return this.m_mapClips.get(e);
        }
        GetBroadcastVOD(e) {
          return this.m_mapVODs.get(e);
        }
        RemoveBroadcastIfUnused(e) {
          e.m_rgVideos.length ||
            (e.m_schHeartbeatTimeout.Cancel(),
            e.m_schManifestTimeout.Cancel(),
            this.m_mapBroadcasts.delete(e.m_steamIDBroadcast));
        }
        GetOrCreateClip(e) {
          let t = this.m_mapClips.get(e);
          return (
            t ||
            ((t = new G()),
            (t.m_clipID = e),
            (t.m_eWatchState = T.None),
            this.m_mapClips.set(e, t),
            t)
          );
        }
        GetOrCreateVOD(e) {
          let t = this.m_mapVODs.get(e);
          return (
            t ||
            ((t = new A()),
            (t.m_nAppIDVOD = e),
            (t.m_eWatchState = T.None),
            this.m_mapVODs.set(e, t),
            t)
          );
        }
        async LoadBroadcastInfo(e) {
          let t = "0",
            s = this.m_mapBroadcasts.get(e.m_steamIDBroadcast);
          if ((s && (t = s.m_ulBroadcastID), 0 == e.m_nRefCount)) return;
          const a = {
            steamid: e.m_steamIDBroadcast,
            broadcastid: t,
            location:
              s &&
              s.m_rgVideos &&
              s.m_rgVideos[0] &&
              s.m_rgVideos[0].GetWatchLocation(),
          };
          try {
            const t = await o().get(
              `${_.TS.CHAT_BASE_URL}broadcast/getbroadcastinfo/`,
              { params: a },
            );
            if (!t || !t.data || !t.data.success || 1 != t.data.success)
              return void (e.m_bInitialized = !0);
            const s = t.data;
            (0, r.h5)(() => {
              (e.m_bInitialized = !0),
                (e.m_strTitle = s.title),
                (e.m_strAppId = s.appid),
                (e.m_nAppID = Number.parseInt(s.appid)),
                (e.m_strAppTitle = s.app_title),
                (e.m_strThumbnailUrl = s.thumbnail_url),
                (e.m_nViewerCount = s.viewer_count),
                (e.m_bIsOnline = s.is_online),
                !e.m_strTitle &&
                  n.td &&
                  ((e.m_strTitle = n.td.name),
                  (e.m_strAppTitle = n.td.appName || n.td.name));
              const t = s.update_interval;
              t &&
                "number" == typeof t &&
                e.m_schUpdateTimeout.Schedule(1e3 * t, () =>
                  this.LoadBroadcastInfo(e),
                );
            });
          } catch (e) {
            console.error(e);
          }
        }
        DelayedGetBroadcastManifest(e, t, s = Date.now()) {
          e.m_schManifestTimeout.Schedule(5e3, () =>
            this.GetBroadcastManifest(e, t, s),
          );
        }
        async GetBroadcastManifest(e, t, s = Date.now()) {
          e.SetState(T.Loading, "");
          let a = {
              steamid: e.m_steamIDBroadcast,
              broadcastid: 0,
              viewertoken: this.m_broadcastSettings.ulViewerToken,
              watchlocation: t,
              sessionid: _.TS.SESSIONID,
              is_webrtc: e.m_bWebRTC,
            },
            i = null;
          try {
            i = await o().get(
              _.TS.CHAT_BASE_URL + "broadcast/getbroadcastmpd/",
              { params: a, withCredentials: !0 },
            );
          } catch (e) {
            let t = (0, D.H)(e);
            console.error(
              "Failed to get broadcast manifest!" + t.strErrorMsg,
              t,
            );
          }
          if (!i || 200 != i.status)
            return void e.SetState(
              T.Error,
              (0, f.we)("#BroadcastWatch_RequestFailed"),
            );
          let r = i.data;
          r.viewertoken && this.SetViewerToken(r.viewertoken);
          let n = r.success;
          if ("ready" == n)
            e.SetState(T.Ready),
              (e.m_ulBroadcastID = r.broadcastid),
              (e.m_ulViewerToken = this.m_broadcastSettings.ulViewerToken),
              (e.m_strCDNAuthUrlParameters = r.cdn_auth_url_parameters),
              (e.m_bWebRTC = r.is_webrtc),
              (e.m_data = r),
              this.LoadBroadcast(e),
              setTimeout(() => {
                e.m_schHeartbeatTimeout.Schedule(
                  1e3 * e.m_data.heartbeat_interval,
                  () => this.HeartbeatBroadcast(e),
                );
              }, 3e4 * Math.random());
          else if ("waiting" == n) {
            e.SetState(
              T.Loading,
              (0, f.we)("#BroadcastWatch_WaitingForResponse"),
            );
            let a = Date.now() - s;
            if (a > 6e4)
              return void e.SetState(
                T.Error,
                (0, f.we)("#BroadcastWatch_NotAvailable"),
              );
            let i = a > 3e4 ? r.retry : 5e3;
            e.m_schManifestTimeout.Schedule(i, () =>
              this.GetBroadcastManifest(e, t, s),
            );
          } else
            "waiting_for_start" == n
              ? (e.SetState(
                  T.Loading,
                  (0, f.we)("#BroadcastWatch_WaitingForStart"),
                ),
                e.m_schManifestTimeout.Schedule(r.retry, () =>
                  this.GetBroadcastManifest(e, t, s),
                ))
              : "waiting_for_reconnect" == n
                ? (e.SetState(
                    T.Loading,
                    (0, f.we)("#BroadcastWatch_WaitingForReconnect"),
                  ),
                  e.m_schManifestTimeout.Schedule(r.retry, () =>
                    this.GetBroadcastManifest(e, t, s),
                  ))
                : "end" == n
                  ? e.SetState(
                      T.Error,
                      (0, f.we)("#BroadcastWatch_NotAvailable"),
                    )
                  : "too_many_broadcasts" == n
                    ? e.SetState(
                        T.Error,
                        (0, f.we)("#BroadcastWatch_TooManyBroadcasts"),
                      )
                    : "system_not_supported" == n
                      ? e.SetState(
                          T.Error,
                          (0, f.we)("#BroadcastWatch_SystemNotSupported"),
                        )
                      : "user_restricted" == n
                        ? e.SetState(
                            T.Error,
                            (0, f.we)("#BroadcastWatch_UserRestricted"),
                          )
                        : "poor_upload_quality" == n
                          ? e.SetState(
                              T.Error,
                              (0, f.we)("#BroadcastWatch_PoorUploadQuality"),
                            )
                          : "request_failed" == n
                            ? e.SetState(
                                T.Error,
                                (0, f.we)("#BroadcastWatch_RequestFailed"),
                              )
                            : "too_many_viewers" == n
                              ? e.SetState(
                                  T.Error,
                                  (0, f.we)("#BroadcastWatch_TooManyViewers"),
                                )
                              : e.SetState(
                                  T.Error,
                                  (0, f.we)("#BroadcastWatch_NotAvailable"),
                                );
        }
        async GetClipManifest(e, t) {
          e.SetState(T.Loading, "");
          let s = {
              clipid: e.m_clipID,
              watchlocation: t,
              sessionid: _.TS.SESSIONID,
            },
            a = null;
          try {
            a = await o().get(_.TS.CHAT_BASE_URL + "broadcast/getclipdetails", {
              params: s,
              withCredentials: !0,
            });
          } catch (e) {
            console.error(e), console.log("Failed to get clip manifest!");
          }
          if (!a || 200 != a.status)
            return void e.SetState(
              T.Error,
              (0, f.we)("#BroadcastWatch_RequestFailed"),
            );
          let i = a.data;
          1 == i.success
            ? (e.SetState(T.Ready), (e.m_data = i), this.LoadClip(e))
            : e.SetState(T.Error, (0, f.we)("#BroadcastWatch_RequestFailed"));
        }
        async GetVODManifest(e, t) {
          e.SetState(T.Loading, "");
          let s = await w.K.Get().LoadVODForAppID(e.m_nAppIDVOD);
          s
            ? (e.SetState(T.Ready),
              (e.m_manifestURL = s.video_url),
              this.LoadVOD(e))
            : e.SetState(T.Error, (0, f.we)("#BroadcastWatch_RequestFailed"));
        }
        async HeartbeatBroadcast(e) {
          let t = new FormData();
          t.append("steamid", e.m_steamIDBroadcast),
            t.append("broadcastid", e.m_ulBroadcastID),
            t.append("viewertoken", this.m_broadcastSettings.ulViewerToken),
            o().post(_.TS.CHAT_BASE_URL + "broadcast/heartbeat/", t),
            e.m_schHeartbeatTimeout.Schedule(
              1e3 * e.m_data.heartbeat_interval,
              () => this.HeartbeatBroadcast(e),
            );
        }
        LoadBroadcast(e) {
          e.m_rgVideos.findIndex((e) => e == this.m_activeVideo) >= 0 &&
            this.m_activeVideo.StartBroadcast(e);
        }
        LoadClip(e) {
          e.m_rgVideos.findIndex((e) => e == this.m_activeVideo) >= 0 &&
            this.m_activeVideo.StartClip(e);
        }
        LoadVOD(e) {
          e.m_rgVideos.findIndex((e) => e == this.m_activeVideo) >= 0 &&
            this.m_activeVideo.StartVOD(e);
        }
        BroadcastDownloadFailed(e, t = !0, s = p.N_.Invalid) {
          e.Stop();
          let a = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
          a &&
            a.m_eWatchState != T.Loading &&
            (a.m_bWebRTC && t && (a.m_bWebRTC = !1),
            s == p.N_.StreamGone
              ? this.DelayedGetBroadcastManifest(a, e.GetWatchLocation())
              : this.GetBroadcastManifest(a, e.GetWatchLocation()));
        }
        UserInputClickVideo(e) {
          if (
            this.m_activeVideo != e &&
            (this.PauseAllVideo(),
            (this.m_activeVideo = e),
            !e.IsBroadcastClip() && !e.IsBroadcastVOD())
          ) {
            let t = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
            this.GetBroadcastManifest(t, e.GetWatchLocation());
          }
          e.UserInputClick();
        }
        LoadBroadcastSettings() {
          if (!window.localStorage) return;
          let e = window.localStorage.getItem("broadcastSettings");
          if (!e) return;
          let t = JSON.parse(e);
          if (!t) return;
          Object.assign(this.m_broadcastSettings, t);
          let s = this.m_broadcastSettings;
          (s.bMuted = !!s.bMuted),
            (s.nVolume = u.OQ(s.nVolume, 0, 1)),
            "string" != typeof s.ulViewerToken && (s.ulViewerToken = "0");
        }
        SaveBroadcastSettings() {
          window.localStorage &&
            this.m_schSaveSettings.Schedule(1e3, () => {
              try {
                window.localStorage.setItem(
                  "broadcastSettings",
                  JSON.stringify(this.m_broadcastSettings),
                );
              } catch (e) {}
            });
        }
        SetViewerToken(e) {
          this.m_broadcastSettings.ulViewerToken != e &&
            ((this.m_broadcastSettings.ulViewerToken = e),
            this.SaveBroadcastSettings());
        }
        GetViewerToken() {
          return this.m_broadcastSettings.ulViewerToken;
        }
        SaveVolumeChange(e, t) {
          (this.m_broadcastSettings.nVolume == e &&
            this.m_broadcastSettings.bMuted == t) ||
            ((this.m_broadcastSettings.nVolume = e),
            (this.m_broadcastSettings.bMuted = t),
            this.SaveBroadcastSettings());
        }
      }
      (0, a.Cg)([r.sH], R.prototype, "m_mapBroadcasts", void 0),
        (function (e) {
          (e[(e.Timeline = 1)] = "Timeline"), (e[(e.Minimap = 2)] = "Minimap");
        })(E || (E = {}));
      class H {
        constructor(e, t, s, a) {
          (this.m_elVideo = null),
            (this.m_player = null),
            (this.m_listeners = new v.Ji()),
            (this.m_gameDataParser = null),
            (this.m_eWatchLocation = 0),
            (this.m_bStartWithSubtitles = !1),
            (this.m_steamIDBroadcast = null),
            (this.m_BroadcastInfo = null),
            (this.m_broadcastClipID = null),
            (this.m_nBroadcastAppIDVOD = null),
            (this.m_bPaused = !1),
            (this.m_nPlaybackTime = 0),
            (this.m_bBuffering = !1),
            (this.m_bOnLiveEdge = !1),
            (this.m_nVolume = 0),
            (this.m_bMuted = !1),
            (this.m_bUserInputNeeded = !1),
            (this.m_bIsReplay = !1),
            (this.m_nTimelineDuration = 1800),
            (this.m_nVideoStartPos = 0),
            (this.m_nVideoEndPos = 0),
            (this.m_editorStartTime = 0),
            (this.m_editorEndTime = 0),
            (this.m_rgMarkers = r.sH.array()),
            (this.m_rgSegments = r.sH.array()),
            (this.m_rgRegions = r.sH.array()),
            (0, r.Gn)(this),
            (this.m_elVideo = e),
            (this.m_nVolume = t),
            (this.m_bMuted = s),
            (this.m_eWatchLocation = a);
        }
        SetBroadcastSteamID(e) {
          this.m_steamIDBroadcast = e;
        }
        GetBroadcastSteamID() {
          return this.m_steamIDBroadcast;
        }
        GetWatchLocation() {
          return this.m_eWatchLocation;
        }
        IsPaused() {
          return this.m_bPaused;
        }
        GetPlaybackTime() {
          return this.m_nPlaybackTime;
        }
        SetStatsViewIsVisible(e) {
          this.m_player && this.m_player.SetStatsViewIsVisible(e);
        }
        GetDASHPlayerStats() {
          return this.m_player.GetDASHPlayerStats();
        }
        BHasDASHStats() {
          return null != this.m_player;
        }
        IsTimelineMapActive() {
          return !1;
        }
        CanSeek() {
          return this.m_player && this.m_player.CanSeek();
        }
        IsBuffering() {
          return this.m_bBuffering;
        }
        IsOnLiveEdge() {
          return this.m_bOnLiveEdge;
        }
        GetVideoAvailableStartTime() {
          return this.m_nVideoStartPos;
        }
        GetVolume() {
          return this.m_nVolume;
        }
        GetUserInputNeeded() {
          return this.m_bUserInputNeeded;
        }
        IsReplay() {
          return this.m_bIsReplay;
        }
        IsBroadcastClip() {
          return null != this.m_broadcastClipID;
        }
        SetBroadcastClipID(e) {
          this.m_broadcastClipID = e;
        }
        GetBroadcastClipID() {
          return this.m_broadcastClipID;
        }
        IsBroadcastVOD() {
          return null != this.m_nBroadcastAppIDVOD;
        }
        SetBroadcastAppIDVOD(e) {
          this.m_nBroadcastAppIDVOD = e;
        }
        GetBroadcastAppIDVOD() {
          return this.m_nBroadcastAppIDVOD;
        }
        GetVideoRepresentations() {
          return this.m_player ? this.m_player.GetVideoRepresentations() : [];
        }
        SetVideoRepresentation(e) {
          this.m_player.SetVideoRepresentation(e);
        }
        GetBroadcastInfo() {
          return this.m_BroadcastInfo;
        }
        BHasTimedText() {
          var e;
          return null === (e = this.m_player) || void 0 === e
            ? void 0
            : e.BHasTimedText();
        }
        BHasPlayer() {
          return Boolean(this.m_player);
        }
        ListSubtitles() {
          return this.m_elVideo.textTracks;
        }
        GetSubtitles() {
          for (let e = 0; e < this.m_elVideo.textTracks.length; e++) {
            const t = this.m_elVideo.textTracks[e];
            if ("showing" === t.mode) return t;
          }
          return null;
        }
        SetSubtitles(e) {
          let t = e ? f.bi[e] : -1;
          this.m_player.SetSubtitles(t);
        }
        SetStartWithSubtitles(e) {
          this.m_bStartWithSubtitles = e;
        }
        GetBroadcastState() {
          return L.GetBroadcastState(this);
        }
        GetBroadcastStateDescription() {
          return L.GetBroadcastStateDescription(this);
        }
        SetOnVideoCallback(e) {
          this.m_fnOnVideoEnd = e;
        }
        InitPlayer() {
          (0, y.wT)(!this.m_player, "Initialized twice?"),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "playing",
              this.OnVideoPlaying,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "pause",
              this.OnVideoPause,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "timeupdate",
              this.OnVideoTimeUpdate,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "volumechange",
              this.OnVolumeUpdated,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "valve-bufferupdate",
              this.OnVideoTimeUpdate,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "valve-gamedataupdate",
              this.OnGameDataUpdate,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "valve-downloadfailed",
              this.OnDownloadFailed,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "valve-webrtcretry",
              this.OnWebRTCRetry,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "valve-webrtcfailed",
              this.OnWebRTCFailed,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "valve-userinputneeded",
              this.OnUserInputNeeded,
            ),
            (this.m_bPaused = !1),
            (this.m_nPlaybackTime = 0),
            (this.m_bBuffering = !1),
            (this.m_nTimelineDuration = 1800),
            (this.m_nVideoStartPos = 0),
            (this.m_nVideoEndPos = 0),
            this.m_rgMarkers.clear(),
            this.m_rgSegments.clear(),
            (this.m_bUserInputNeeded = !1),
            (this.m_bIsReplay = !1);
        }
        Restart() {
          this.IsMuted() ||
            this.IsPaused() ||
            this.GetUserInputNeeded() ||
            this.Play();
        }
        StartBroadcast(e) {
          if ((this.InitPlayer(), e.m_data.url)) {
            let t = new p.Zn(this.m_elVideo);
            t.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
              (this.m_player = t),
              this.m_player.PlayMPD(
                e.m_data.url,
                e.m_data.hls_url,
                e.m_strCDNAuthUrlParameters,
              );
          } else
            (this.m_player = new b(this.m_elVideo)),
              this.m_player.PlayWebRTC(
                this.m_steamIDBroadcast,
                e.m_ulViewerToken,
                e.m_data.webrtc_session_id,
                e.m_data.webrtc_turn_server,
                e.m_data.webrtc_offer_sdp,
              );
          this.SetVolume(this.m_nVolume), this.m_player.SetMuted(this.m_bMuted);
          let t = this.m_player.GetDASHPlayerStats();
          t &&
            t.SetBroadcasterAndViewerInfo(
              this.m_steamIDBroadcast,
              _.iA.steamid,
              e.m_ulBroadcastID,
              e.m_ulViewerToken,
              e.m_strCDNAuthUrlParameters,
            ),
            (this.m_BroadcastInfo = L.StartInfo(this.m_steamIDBroadcast));
        }
        StartClip(e) {
          this.InitPlayer();
          let t = new p.Zn(this.m_elVideo);
          t.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
            (this.m_player = t),
            this.m_player.PlayMPD(e.m_data.clip_url),
            this.SetVolume(this.m_nVolume),
            this.m_player.SetMuted(this.m_bMuted);
        }
        StartVOD(e) {
          this.InitPlayer();
          let t = new p.Zn(this.m_elVideo);
          t.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
            (this.m_player = t),
            _.iA.logged_in &&
              e.m_nAppIDVOD &&
              t.SetBookmarkAdapter(new I.M(e.m_nAppIDVOD)),
            this.m_player.PlayMPD(e.m_manifestURL),
            this.SetVolume(this.m_nVolume),
            this.m_player.SetMuted(this.m_bMuted);
        }
        Stop() {
          this.m_listeners.Unregister(),
            this.m_BroadcastInfo &&
              (L.StopInfo(this.m_BroadcastInfo), (this.m_BroadcastInfo = null)),
            (this.m_gameDataParser = null),
            this.m_player && (this.m_player.Close(), (this.m_player = null));
        }
        TogglePlayPause() {
          !this.m_player || this.m_player.IsPaused()
            ? this.Play()
            : this.Pause();
        }
        Play() {
          const e = this.GetBroadcastState();
          e == T.None || this.IsBroadcastClip()
            ? L.StartVideo(this)
            : e == T.Ready &&
              (L.SetActiveVideo(this),
              this.m_player
                ? this.m_player.Play()
                : this.IsBroadcastVOD()
                  ? this.StartVOD(L.GetBroadcastVOD(this.m_nBroadcastAppIDVOD))
                  : this.StartBroadcast(
                      L.GetBroadcast(this.m_steamIDBroadcast),
                    ));
        }
        Pause() {
          console.log(
            "Pause ",
            this.m_steamIDBroadcast,
            this.m_nBroadcastAppIDVOD,
            this.m_broadcastClipID,
          ),
            this.m_player && this.m_player.Pause();
        }
        JumpTime(e) {
          this.m_player.JumpTime(e);
        }
        Seek(e) {
          var t;
          null === (t = this.m_player) || void 0 === t || t.Seek(e);
        }
        SeekAndPlay(e) {
          this.m_player.SeekAndPlay(e);
        }
        JumpToLiveEdge() {
          this.m_player.IsLiveContent()
            ? this.SeekAndPlay(this.m_player.GetBufferedLiveEdgeTime())
            : this.SeekAndPlay(this.m_player.GetAvailableVideoStartTime());
        }
        SetVolume(e) {
          this.m_player && this.m_player.SetVolume(e),
            (this.m_nVolume = this.m_player.GetVolume()),
            L.SaveVolumeChange(e, this.m_bMuted);
        }
        SetMute(e) {
          this.m_player && this.m_player.SetMuted(e),
            (this.m_bMuted = e),
            L.SaveVolumeChange(this.m_nVolume, e);
        }
        IsMuted() {
          return this.m_bMuted;
        }
        OnVideoPlaying() {
          (this.m_bPaused = !1),
            0 === this.m_editorStartTime &&
              0 === this.m_editorEndTime &&
              ((this.m_editorStartTime = this.GetVideoAvailableStartTime()),
              (this.m_editorEndTime =
                this.GetVideoAvailableStartTime() +
                this.GetTimelineDuration()));
        }
        OnVideoPause() {
          this.m_bPaused = !0;
        }
        OnVideoTimeUpdate() {
          if (
            (window.clearTimeout(this.m_videoEndingTimer),
            this.IsBroadcastClip())
          )
            (this.m_nPlaybackTime = this.m_player.GetCurrentPlayTime()),
              (this.m_nVideoStartPos =
                this.m_player.GetAvailableVideoStartTime()),
              (this.m_nVideoEndPos = this.m_player.GetBufferedLiveEdgeTime()),
              (this.m_nTimelineDuration =
                this.m_nVideoEndPos - this.m_nVideoStartPos),
              (this.m_bOnLiveEdge = !1),
              (this.m_bBuffering = this.m_player.IsBuffering());
          else {
            if (
              ((this.m_nPlaybackTime = this.m_player.GetCurrentPlayTime()),
              (this.m_nVideoStartPos =
                this.m_player.GetAvailableVideoStartTime()),
              (this.m_nVideoEndPos = Math.max(
                this.m_player.GetBufferedLiveEdgeTime(),
                this.m_nPlaybackTime,
              )),
              this.IsBroadcastVOD() &&
                ((this.m_nTimelineDuration = this.m_nVideoEndPos),
                this.m_fnOnVideoEnd &&
                  this.m_nVideoEndPos - this.m_nPlaybackTime < p.Br))
            ) {
              const e = 400;
              this.m_videoEndingTimer = window.setTimeout(() => {
                this.m_fnOnVideoEnd();
              }, e);
            }
            (this.m_bBuffering = this.m_player.IsBuffering()),
              (this.m_bOnLiveEdge =
                this.m_nVideoEndPos - this.m_nPlaybackTime < p.Br),
              this.m_player.IsPaused() && (this.m_bOnLiveEdge = !1);
          }
        }
        OnVolumeUpdated() {
          (this.m_nVolume = this.m_player.GetVolume()),
            (this.m_bMuted = this.m_player.IsMuted());
        }
        OnGameDataUpdate(e) {
          let t = e.detail;
          if (!t || "object" != typeof t.gamedata) return;
          (this.m_gameDataParser &&
            this.m_gameDataParser.GetAppID() == t.gamedata.__appid) ||
            (this.m_gameDataParser = new c(t.gamedata.__appid));
          const s = this.m_player.GetLiveContentStartTime().getTime();
          if ("timelinemarkers" in t.gamedata) {
            const e = this.m_gameDataParser.UpdateMarkers(
              t.gamedata.__timelinemarkers,
              s,
            );
            e &&
              (this.m_rgMarkers.replace(e.rgMarkers || []),
              this.m_rgSegments.replace(e.rgSegments || []));
            const a = this.m_gameDataParser.UpdateRegions(t.gamedata.__regions);
            a && this.m_rgRegions.replace(a);
          } else
            "soundtrack" in t.gamedata &&
              this.m_gameDataParser.UpdateSoundtrack(
                this.m_steamIDBroadcast,
                t.gamedata.soundtrack,
              );
        }
        OnDownloadFailed(e) {
          let t = e.detail || p.N_.Invalid;
          L.BroadcastDownloadFailed(this, !0, t);
        }
        OnWebRTCRetry() {
          L.BroadcastDownloadFailed(this, !1);
        }
        OnWebRTCFailed() {
          L.BroadcastDownloadFailed(this, !0);
        }
        OnUserInputNeeded() {
          this.m_bUserInputNeeded = !0;
        }
        UserInputClick() {
          (this.m_bUserInputNeeded = !1),
            this.m_player ? this.JumpToLiveEdge() : this.Play();
        }
        StopPlaybackTillUserInput() {
          this.Stop(), this.OnUserInputNeeded();
        }
        GetTimelineStartPos() {
          return this.m_nVideoEndPos - this.m_nTimelineDuration;
        }
        GetTimelineDuration() {
          return this.m_nTimelineDuration;
        }
        GetTimeAtMousePosition(e, t, s, a) {
          let i = u.Fu(e, t.left, t.right, s, a);
          return Math.floor(i + 0.5);
        }
        GetPercentOffsetFromTime(e, t) {
          let s = 0,
            a = 0;
          return (
            t == E.Timeline
              ? ((a = this.m_nVideoEndPos), (s = a - this.m_nTimelineDuration))
              : ((s = 0), (a = 0)),
            u.Fu(e, s, a, 0, 100)
          );
        }
        GetTimelineMarkers() {
          return this.m_rgMarkers;
        }
        GetTimelineSegments() {
          return this.m_rgSegments;
        }
        GetGameDataRegions() {
          return this.m_rgRegions;
        }
        BHasMarkersOrSegments() {
          return this.has_segments || this.has_markers;
        }
        get has_markers() {
          return this.m_rgMarkers.length > 0;
        }
        get has_segments() {
          return this.m_rgSegments.length > 0;
        }
      }
      (0, a.Cg)([r.sH], H.prototype, "m_player", void 0),
        (0, a.Cg)([r.sH], H.prototype, "m_bPaused", void 0),
        (0, a.Cg)([r.sH], H.prototype, "m_nPlaybackTime", void 0),
        (0, a.Cg)([r.sH], H.prototype, "m_bBuffering", void 0),
        (0, a.Cg)([r.sH], H.prototype, "m_bOnLiveEdge", void 0),
        (0, a.Cg)([r.sH], H.prototype, "m_nVolume", void 0),
        (0, a.Cg)([r.sH], H.prototype, "m_bMuted", void 0),
        (0, a.Cg)([r.sH], H.prototype, "m_bUserInputNeeded", void 0),
        (0, a.Cg)([r.sH], H.prototype, "m_bIsReplay", void 0),
        (0, a.Cg)([r.sH], H.prototype, "m_nTimelineDuration", void 0),
        (0, a.Cg)([r.sH], H.prototype, "m_nVideoStartPos", void 0),
        (0, a.Cg)([r.sH], H.prototype, "m_nVideoEndPos", void 0),
        (0, a.Cg)([r.sH], H.prototype, "m_editorStartTime", void 0),
        (0, a.Cg)([r.sH], H.prototype, "m_editorEndTime", void 0),
        (0, a.Cg)([r.XI.bound], H.prototype, "StartBroadcast", null),
        (0, a.Cg)([r.XI.bound], H.prototype, "StartClip", null),
        (0, a.Cg)([r.XI.bound], H.prototype, "StartVOD", null),
        (0, a.Cg)([S.o], H.prototype, "OnVideoPlaying", null),
        (0, a.Cg)([S.o], H.prototype, "OnVideoPause", null),
        (0, a.Cg)([r.XI.bound], H.prototype, "OnVideoTimeUpdate", null),
        (0, a.Cg)([S.o], H.prototype, "OnVolumeUpdated", null),
        (0, a.Cg)([r.XI.bound], H.prototype, "OnGameDataUpdate", null),
        (0, a.Cg)([S.o], H.prototype, "OnDownloadFailed", null),
        (0, a.Cg)([S.o], H.prototype, "OnWebRTCRetry", null),
        (0, a.Cg)([S.o], H.prototype, "OnWebRTCFailed", null),
        (0, a.Cg)([S.o], H.prototype, "OnUserInputNeeded", null);
      const L = new R();
      window.uiBroadcastWatchStore = L;
    },
  },
]);
