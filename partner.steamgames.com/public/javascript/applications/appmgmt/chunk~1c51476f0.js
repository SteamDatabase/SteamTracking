/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [1747],
  {
    15527: (e) => {
      e.exports = {
        BroadcastPlayerLite: "SAxf3Rqn792kM6c4U_vx5",
        BroadcastPlayerLiteVideo: "yCd0zjymzfw3HkVm-1YwX",
        BroadcastContext: "_3TnYLKMweBMIC69qFU6OJj",
        BroadcastPlaceholderImg: "_3hxn99MT14hFUCrUp6zbsf",
      };
    },
    19418: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        Picker: "tid_OE5NJWCCVJQP1PfRc",
        Tabs: "_1yVkTX9Mo_7qb2sxWhM0Cr",
        Tab: "_2CJ0LpiSgVs2JuTlwbzBM",
        Focus: "_1xH5si_KorJpS4ST2Geksh",
        TabContent: "_1mROo5bpUJSg8D8ILx7qpw",
        Active: "_1ddEQAfz6GuVRSEqk-d0r",
        Content: "dUQIH8Qg80N6kjB8UQO0P",
        ItemList: "_2OWGRbhpXNcuR3oih9IGrX",
        Item: "_1SFqyFzFrpPOEAKCrq2kKZ",
        SectionedPageTitle: "ZmsElITvVzU-7a2HXKBZI",
        SectionTitle: "_3WuFl419BivPeLqeVIC939",
        FilterInputContainer: "EuFePPYFGrcf99uLXmBYN",
        FilterInput: "_2l4z-U60lABvd9XWArGjAf",
        AddonPickerMessage: "_2wUk7QR9TZiiKB4bX_9EgD",
      };
    },
    90024: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        chatEntryControls: "_3Ule3rolhZJiBN4yNNtk1s",
        chatTextarea: "_113iuw_HlE_qSgt9cGWCSv",
        chatEntryActionsGroup: "_2WfNoLBdfKwyutA6ho4aSH",
        chatEntryActionsContainer: "W0OhkJtz8zMUW8Mhu0BMO",
        minHeightZero: "_2zeehYTQ2oNY7TvjqGC_gL",
        chatSubmitButton: "RVIs84dAE6wHcjH9tkinc",
        EmbedButton: "_3zOBeq5W4cNK3lRz_7aroW",
        EmoticonPickerButton: "Aupswi7-c-w3XwNO5cp2i",
        disabled: "jaQN2IyN4P8LZXJ6P11qy",
        Inactive: "_3G-I9qj7vqOe6SOFG27ohD",
        AudioLines: "IWabakUFeIH_d5rhBZ6dG",
        Active: "_37tPtXtV-sv9XgDHjS2cnj",
      };
    },
    15392: (e) => {
      e.exports = {
        Link: "-HlDBB290kjpl61uUmRed",
        Banner: "_2bT8irkKNnA5sxFG3MUXzH",
        Big: "sGy-bB7uqEt4Hoe7U5iA1",
        Mobile: "mhii5hgMCQvO2tXOUdWPQ",
      };
    },
    13555: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          BroadcastDetails: () => ie,
          LinkOverlay: () => le,
          default: () => Z,
        });
      var s = n(34629),
        o = n(14947),
        i = n(75844),
        r = n(90626),
        l = n(88997),
        a = n(55963),
        c = n(54728),
        m = n(82097),
        d = n(81363),
        u = n(68451),
        p = n(16569),
        h = n(80724),
        S = n(52038);
      const E = 500;
      class C extends r.Component {
        render() {
          let {
            keyExtractor: e,
            style: t,
            duration: n = E,
            className: s,
            children: o,
            childRef: i,
            ...l
          } = this.props;
          const a = { ...(t || {}), transitionDuration: n / 1e3 + "s" };
          return r.createElement(
            p.A,
            { ...l, className: (0, S.A)("crossfade", s) },
            r.createElement(
              h.A,
              {
                nodeRef: i,
                classNames: "crossfade-anim",
                timeout: n,
                key: e(),
                style: a,
              },
              o,
            ),
          );
        }
      }
      function v(e) {
        const { src: t, ...n } = e,
          s = { backgroundImage: `url(${t})` },
          o = r.useRef(null);
        return r.createElement(
          C,
          { style: s, keyExtractor: () => t, childRef: o, ...n },
          r.createElement("div", { ref: o, className: "crossfade-img" }),
        );
      }
      var g = n(79849),
        _ = n(69409),
        f = n(81416),
        b = n(12155),
        k = n(51272),
        w = n(6144),
        P = n(56011),
        M = n(61859),
        y = n(82227),
        I = n(25489),
        T = n(73745),
        D = n(78327),
        A = n(3067),
        N = n(36064),
        O = n(15527),
        B = n.n(O),
        V = n(22797);
      function L() {
        return r.createElement(
          "div",
          { className: "STV_ReplayBanner" },
          (0, M.we)("#DASHPlayerControls_IsReplay"),
        );
      }
      const R = (0, i.PA)((e) => {
        let t = e.video;
        if (t && (t.IsBroadcastClip() || t.IsBroadcastVOD())) return null;
        let n = c.fK.Loading,
          s = "";
        if (t) {
          (n = t.GetBroadcastState()), (s = t.GetBroadcastStateDescription());
          let e = t.IsBuffering();
          n == c.fK.Unlocking && ((n = c.fK.Loading), (s = "")),
            n == c.fK.Ready && e && ((n = c.fK.Loading), (s = ""));
        }
        if (t && n != c.fK.Error && t.GetUserInputNeeded()) return null;
        if (n == c.fK.Ready) return null;
        let o = n == c.fK.Loading;
        return r.createElement(
          "div",
          {
            className: "BroadcastVideoWatchState",
            style: { filter: "hue-rotate(40deg)" },
          },
          o && r.createElement(V.t, null),
          !o &&
            r.createElement(
              "div",
              { className: "BroadcastVideoWatchState_Text" },
              s,
            ),
        );
      });
      class G extends r.Component {
        OnClick() {
          c.es.UserInputClickVideo(this.props.video);
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
              (0, M.we)("#DASHPlayerControls_ClickToPlay"),
            ),
          );
        }
      }
      (0, s.Cg)([T.oI], G.prototype, "OnClick", null);
      let H = class extends r.Component {
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
              (0, M.we)("#DASHPlayerStats_BufferingResolution"),
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
              (0, M.we)("#DASHPlayerStats_PlaybackResolution"),
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
              (0, M.we)("#DASHPlayerStats_HtmlResolution"),
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
              (0, M.we)("#DASHPlayerStats_ContentServer"),
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
              (0, M.we)("#DASHPlayerStats_StallEvents"),
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
              (0, M.we)("#DASHPlayerStats_FailedDownloads"),
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
              (0, M.we)("#DASHPlayerStats_TimeToFirstFrame"),
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
              (0, M.we)("#DASHPlayerStats_PlaybackRate"),
              " ",
              r.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetPlaybackRateForDisplay(),
              ),
            ),
            r.createElement(x, { stats: e }),
          );
        }
      };
      (0, s.Cg)([T.oI], H.prototype, "HideStats", null),
        (H = (0, s.Cg)([i.PA], H));
      let x = class extends r.Component {
        constructor(e) {
          super(e);
        }
        createBufferedRange(e) {
          let t = this.props.stats,
            n = [],
            s = e ? "vidbuf" : "audbuf",
            o = e
              ? t.GetNumBufferedVideoRanges()
              : t.GetNumBufferedAudioRanges();
          if (o > 0)
            for (let i = 0; i < o; ++i) {
              let o = (0, M.we)(
                  e
                    ? "#DASHPlayerStats_VideoBufferRange"
                    : "#DASHPlayerStats_AudioBufferRange",
                  i,
                ),
                l = e
                  ? t.GetBufferedVideoSegmentForDisplay(i)
                  : t.GetBufferedAudioSegmentForDisplay(i);
              n.push(
                r.createElement(
                  "div",
                  { key: s + i },
                  o,
                  " ",
                  r.createElement("span", { className: "videoStatsValue" }, l),
                ),
              );
            }
          else {
            let t = (0, M.we)(
              e
                ? "#DASHPlayerStats_VideoNoRangeInformation"
                : "#DASHPlayerStats_AudioNoRangeInformation",
            );
            n.push(r.createElement("div", { key: s + "none" }, t));
          }
          return n;
        }
        render() {
          let e = this.props.stats;
          return r.createElement(
            "div",
            { className: "dash_video_quick_stats" },
            r.createElement(
              "div",
              null,
              (0, M.we)("#DASHPlayerStats_BytesReceived"),
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
                (0, M.we)("#DASHPlayerStats_DroppedFrames"),
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
              (0, M.we)("#DASHPlayerStats_VideoBuffered"),
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
              (0, M.we)("#DASHPlayerStats_AudioBuffered"),
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
              (0, M.we)("#DASHPlayerStats_BandwidthRequired"),
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
              (0, M.we)("#DASHPlayerStats_BandwidthVideo"),
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
              (0, M.we)("#DASHPlayerStats_BandwidthNums"),
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
              (0, M.we)("#DASHPlayerStats_DownloadNums"),
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
              (0, M.we)("#DASHPlayerStats_ActiveDownloads"),
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
              (0, M.we)("#DASHPlayerStats_VideoDownloadProgress"),
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
              (0, M.we)("#DASHPlayerStats_DroppingFrames"),
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
              (0, M.we)("#DASHPlayerStats_CurrentFPS"),
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
      x = (0, s.Cg)([i.PA], x);
      var F = n(74872);
      class U extends r.Component {
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
            (0, P.id)(this.m_elSettingsPanel, e.target) ||
              this.setState({ bSettingsOpen: !1 }),
            (0, P.id)(this.m_elSubtitlesPanel.current, e.target) ||
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
          const { video: n, actions: s } = this.props;
          let o,
            i,
            l = 0,
            a = r.createElement("div", {
              key: "separator",
              className: "settingsMenuSeparator",
            });
          if (
            (this.state.bSettingsOpen &&
              ((e = !0),
              (o = this.props.video.GetVideoRepresentations()),
              (i = o.map((e) =>
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
              i.push(a),
              i.push(
                r.createElement(
                  F.D,
                  { key: "statsToggle", onClick: this.OnShowStats },
                  (0, M.we)("#Broadcast_VideoContext_ToggleStats"),
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
                  (0, M.we)("#Broadcast_None"),
                ),
              );
            for (let e = 0; e < this.props.video.ListSubtitles().length; e++) {
              const t = this.props.video.ListSubtitles()[e];
              i.push(
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
            l = -292;
          }
          const c =
            this.props.video.BHasPlayer() && this.props.video.BHasTimedText();
          return r.createElement(
            "div",
            { className: "STV_BroadcastSettings" },
            c &&
              r.createElement(
                "div",
                {
                  className:
                    "videoControlButton" + (c ? " ClosedCaptionsActive" : ""),
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
            r.createElement(z, { video: n }),
            s &&
              s.map((e) =>
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
      (0, s.Cg)([T.oI], U.prototype, "OnVideoControlClick", null),
        (0, s.Cg)([T.oI], U.prototype, "OnSubtitlesClick", null),
        (0, s.Cg)([T.oI], U.prototype, "OnMouseUp", null),
        (0, s.Cg)([T.oI], U.prototype, "bindSettingsButton", null),
        (0, s.Cg)([T.oI], U.prototype, "BindSettingsPanel", null),
        (0, s.Cg)([T.oI], U.prototype, "OnShowStats", null);
      let z = class extends r.Component {
        constructor(e) {
          super(e), (0, o.Gn)(this);
        }
        k_nHideSliderTimeout = 1500;
        m_bShowSlider = true;
        m_schHideSlider = new w.LU();
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
            n = 100 * e.GetVolume(),
            s = "videoControlButton";
          n > 65
            ? (s += " HighestVolume")
            : n > 45
              ? (s += " HighVolume")
              : n < 46 && n > 24
                ? (s += " MedVolume")
                : n < 25 && (s += " LowVolume");
          let o = "BroadcastVolumeControl";
          return (
            this.m_bShowSlider && (o += " ShowVolumeSlider"),
            t && (o += " muted"),
            r.createElement(
              "div",
              {
                className: o,
                onMouseEnter: this.OnMouseEnter,
                onMouseLeave: this.OnMouseLeave,
              },
              r.createElement(
                "div",
                { className: "BroadcastVolumeControl_FixedLayout" },
                r.createElement(
                  "div",
                  { className: s, onClick: this.ToggleMute },
                  r.createElement(b.fSs, null),
                ),
                r.createElement(W, { video: e, onDrag: this.OnChildDrag }),
              ),
            )
          );
        }
      };
      (0, s.Cg)([o.sH], z.prototype, "m_bShowSlider", void 0),
        (0, s.Cg)([T.oI], z.prototype, "ToggleMute", null),
        (0, s.Cg)([T.oI], z.prototype, "OnMouseEnter", null),
        (0, s.Cg)([T.oI], z.prototype, "OnMouseLeave", null),
        (0, s.Cg)([T.oI], z.prototype, "OnChildDrag", null),
        (z = (0, s.Cg)([i.PA], z));
      let W = class extends r.Component {
        constructor(e) {
          super(e), (0, o.Gn)(this);
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
          let n = e.getBoundingClientRect(),
            s = I.Fu(t, n.left, n.right, 0, 1),
            o = I.OQ(s, 0, 1),
            i = this.props.video;
          i.SetMute(s < 0.01), i.SetVolume(o);
        }
        render() {
          let e = this.props.video,
            t = 100 * e.GetVolume();
          e.IsMuted() && (t = 0);
          let n = { left: `${t}%` },
            s = { width: `${t}%` };
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
              style: s,
            }),
            r.createElement("div", {
              className: "BroadcastVolumeSlider_Thumb",
              style: n,
            }),
          );
        }
      };
      (0, s.Cg)([T.oI], W.prototype, "OnMouseDown", null),
        (0, s.Cg)([T.oI], W.prototype, "OnMouseMove", null),
        (0, s.Cg)([T.oI], W.prototype, "OnMouseUp", null),
        (0, s.Cg)([o.XI], W.prototype, "SetVolumeWithCoord", null),
        (W = (0, s.Cg)([i.PA], W));
      var X = n(15759);
      const J = 15;
      let j = class extends r.Component {
        m_schHideControls = new w.LU();
        m_schUnmountControls = new w.LU();
        m_elVideo = null;
        m_elBroadcastPlayer = null;
        m_bMouseDown = !1;
        m_elMouseDown = null;
        m_listeners = new w.Ji();
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
            (c.es.StopVideo(e),
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
                (t = c.es.CreateBroadcastVideo(
                  e,
                  this.props.steamIDBroadcast,
                  this.props.watchLocation,
                  this.props.bWebRTC,
                ))
              : this.props.broadcastClipID
                ? e &&
                  (t = c.es.CreateClipVideo(
                    e,
                    this.props.broadcastClipID,
                    this.props.watchLocation,
                  ))
                : this.props.nAppIDVOD &&
                  e &&
                  ((t = c.es.CreateVODVideo(
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
              r.createElement(u.tz, null, this.GetContextMenuItems()),
              e,
            ),
            e.preventDefault());
        }
        ToggleStatsView(e) {
          let t = !this.state.bShowStats;
          this.setState({ bShowStats: t });
          let n = this.state.video;
          n && n.SetStatsViewIsVisible(t);
        }
        ShowStorePage(e) {
          let t = this.state.video;
          if (!t || !this.props.onOpenLinkInNewWindow) return;
          let n = t.GetBroadcastInfo();
          if (!n) return;
          let s = (0, a.k2)(`${D.TS.STORE_BASE_URL}app/${n.m_strAppId}`);
          this.props.onOpenLinkInNewWindow(e, s), e.stopPropagation();
        }
        GetContextMenuItems() {
          let e = [],
            t = this.state.video;
          if (!t) return e;
          let n = t.GetBroadcastInfo();
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
                (0, M.we)("#Broadcast_VideoContext_ToggleStats"),
              ),
            ),
            n &&
              "0" != n.m_strAppId &&
              Number.parseInt(n.m_strAppId) != c.fO &&
              e.push(
                r.createElement(
                  u.kt,
                  {
                    key: "visitstore",
                    onSelected: (e) => {
                      this.ShowStorePage(e);
                    },
                  },
                  (0, M.we)("#Broadcast_VideoContext_OpenStore"),
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
            ((0, P.ww)(this.m_elBroadcastPlayer)
              ? (0, P.MS)(this.m_elBroadcastPlayer)
              : (0, P.tl)(this.m_elBroadcastPlayer, this.m_elVideo));
        }
        OnFullscreenChange(e) {
          if (!this.m_elBroadcastPlayer) return;
          let t = (0, P.ww)(this.m_elBroadcastPlayer);
          this.setState({ bFullscreen: t });
        }
        BHideVideoControls() {
          let e = this.state.video;
          return (
            !e ||
            !!e.GetUserInputNeeded() ||
            c.es.GetBroadcastState(e) == c.fK.Error
          );
        }
        render() {
          const e = this.state.video,
            t = e && e.IsPaused(),
            n = e && e.BHasDASHStats() && this.state.bShowStats,
            s = Boolean(e && e.IsReplay()),
            o = this.state.bMountControls,
            i = this.state.bControlsVisible || t,
            l = e && e.GetUserInputNeeded(),
            a =
              e?.IsBroadcastVOD() && l && this.state.strInitialCapsuleImageUrl;
          let c = "videoContainer";
          i || (c += " HidePlayerControls"),
            t && (c += " VideoPaused"),
            this.state.bFullscreen && (c += " fullscreenVideo"),
            this.props.classes && (c += " " + this.props.classes);
          let m = [];
          !this.state.bFullscreen &&
            this.props.actions &&
            (m = m.concat(this.props.actions)),
            !this.state.bFullscreen &&
              this.props.onTheaterMode &&
              m.push(
                r.createElement("div", {
                  key: "ChatPosToggle ChatTheaterToggle",
                  onClick: this.props.onTheaterMode,
                  title: (0, M.we)("#Broadcast_View_Theater"),
                  className: "BroadcastTheaterToggle",
                }),
              ),
            m.push(
              r.createElement("div", {
                key: "FullscreenToggle",
                title: (0, M.we)("#Broadcast_View_Fullscreen"),
                onClick: this.OnToggleFullscreen,
                className: "BroadcastFullscreenToggle",
              }),
            );
          const u = o && !this.BHideVideoControls(),
            p = o && !this.state.bFullscreen,
            h =
              this.props.fnRenderBroadcastContext &&
              this.props.fnRenderBroadcastContext();
          return r.createElement(
            "div",
            {
              ref: this.BindBroadcastPlayerRef,
              className: c,
              onMouseMove: this.OnMouseMove,
              onClick: this.OnMouseMove,
              onMouseLeave: this.OnMouseLeave,
              onContextMenu: this.OnContextMenu,
              onMouseDown: this.OnMouseDown,
            },
            h && r.createElement("div", { className: B().BroadcastContext }, h),
            s && r.createElement(L, null),
            this.props.showVideoBackgroundBlur &&
              r.createElement(d.m, {
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
              muted: this.props.bMuted ?? !0,
              autoPlay: !0,
              playsInline: !0,
              controls: !1,
              onVolumeChange: this.props.fnVolumeChanged,
              onClick: this.props.fnVideoClick,
            }),
            this.props.linkRegions
              ? r.createElement(le, {
                  linkRegions: this.props.linkRegions,
                  editMode: this.props.editMode,
                  onSaveLinkRegions: this.props.onSaveLinkRegions,
                })
              : null,
            this.props.linkElement,
            a &&
              r.createElement("img", {
                loading: "lazy",
                className: (0, S.A)(
                  B().BroadcastPlaceholderImg,
                  "BroadcastPlaceholderImg",
                ),
                src: this.state.strInitialCapsuleImageUrl,
              }),
            u &&
              r.createElement(q, {
                video: e,
                actions: m,
                onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                onShowStats: this.ToggleStatsView,
                bIncludeClipEditor: this.props.bIncludeClipEditor,
              }),
            p && r.createElement(K, { onClick: this.props.onRequestClose }),
            n &&
              r.createElement(H, {
                stats: e.GetDASHPlayerStats(),
                closeStats: this.CloseStats,
              }),
            r.createElement(R, { video: e }),
            l && r.createElement(G, { video: e }),
          );
        }
      };
      (0, s.Cg)([T.oI], j.prototype, "BindBroadcastPlayerRef", null),
        (0, s.Cg)([T.oI], j.prototype, "BindVideoRef", null),
        (0, s.Cg)([T.oI], j.prototype, "OnMouseDown", null),
        (0, s.Cg)([T.oI], j.prototype, "OnMouseUp", null),
        (0, s.Cg)([T.oI], j.prototype, "OnMouseMove", null),
        (0, s.Cg)([T.oI], j.prototype, "OnMouseLeave", null),
        (0, s.Cg)([T.oI], j.prototype, "HideControls", null),
        (0, s.Cg)([T.oI], j.prototype, "UmountControls", null),
        (0, s.Cg)([T.oI], j.prototype, "ShowStatsView", null),
        (0, s.Cg)([T.oI], j.prototype, "OnContextMenu", null),
        (0, s.Cg)([T.oI], j.prototype, "ToggleStatsView", null),
        (0, s.Cg)([T.oI], j.prototype, "ShowStorePage", null),
        (0, s.Cg)([T.oI], j.prototype, "CloseStats", null),
        (0, s.Cg)([T.oI], j.prototype, "OnToggleFullscreen", null),
        (0, s.Cg)([T.oI], j.prototype, "OnFullscreenChange", null),
        (j = (0, s.Cg)([i.PA], j));
      const Z = j;
      let q = class extends r.Component {
        render() {
          const { video: e } = this.props;
          if (!e) return null;
          let t = e.has_segments;
          return r.createElement(
            "div",
            { className: "videoControls" },
            r.createElement(ie, {
              steamID: this.props.video.GetBroadcastSteamID(),
              bHideThumbnail: !0,
              bVerticalBroadcastChat: !0,
              onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
            }),
            r.createElement(
              "div",
              { className: "videoControlsBottom" + (t ? "" : " noSegments") },
              r.createElement(oe, {
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
                r.createElement(U, {
                  video: e,
                  actions: this.props.actions,
                  onShowStats: this.props.onShowStats,
                }),
              ),
            ),
          );
        }
      };
      q = (0, s.Cg)([i.PA], q);
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
                r.createElement(b.tID, {
                  bHidePostArrow: !0,
                  bHidePreArrow: !0,
                  bShowJumpAheadBox: !0,
                  bFlipHorizontal: !0,
                }),
                r.createElement("div", { className: "jumpAheadValue" }, J),
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
                r.createElement("div", { className: "jumpAheadValue" }, J),
              ),
            t && r.createElement(te, { video: e }),
          );
        }
      }
      (0, s.Cg)([T.oI], Q.prototype, "OnJumpBackward", null),
        (0, s.Cg)([T.oI], Q.prototype, "OnJumpForward", null);
      const Y = (0, i.PA)((e) => {
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
              (0, M.we)(
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
      (0, s.Cg)([T.oI], $.prototype, "OnTogglePlayPause", null),
        ($ = (0, s.Cg)([i.PA], $));
      let ee = class extends r.Component {
        constructor(e) {
          super(e), (0, o.Gn)(this), (this.video = e.video);
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
          for (let n = e.length - 1; n >= 0; n--)
            if (!(e[n].nTime >= t)) return e[n].nTime;
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
      (0, s.Cg)([o.sH], ee.prototype, "video", void 0),
        (0, s.Cg)([o.EW], ee.prototype, "has_previous_marker", null),
        (0, s.Cg)([T.oI], ee.prototype, "OnJumpToPreviousMarkerClicked", null),
        (ee = (0, s.Cg)([i.PA], ee));
      let te = class extends r.Component {
        constructor(e) {
          super(e), (0, o.Gn)(this), (this.video = e.video);
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
          for (let n = 0; n < e.length; n++)
            if (!(e[n].nTime <= t)) return e[n].nTime;
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
      (0, s.Cg)([o.sH], te.prototype, "video", void 0),
        (0, s.Cg)([o.EW], te.prototype, "has_next_marker", null),
        (0, s.Cg)([T.oI], te.prototype, "OnJumpToNextMarkerClicked", null),
        (te = (0, s.Cg)([i.PA], te));
      const ne = (e) =>
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
      function se(e) {
        let t = e.startPos,
          n = e.endPos,
          s = "",
          o = 1;
        return (
          t < 0 && ((o = (n - t) / 10), (t = 0), (s = " hideFront")),
          r.createElement(
            "div",
            {
              className: "STV_timelineSegment" + s,
              style: { left: t + "%", width: n - t + "%", opacity: o },
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
      let oe = class extends r.Component {
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
            let n = {};
            "start" === t
              ? ((n = { bStartMouseDown: !0 }), e.stopPropagation())
              : "end" === t
                ? ((n = { bEndMouseDown: !0 }), e.stopPropagation())
                : (n = { bGrabberMouseDown: !0 }),
              this.setState(n, () => this.AdjustSliderForClientX(e.clientX)),
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
            n = t.GetTimelineStartPos(),
            s = t.GetTimelineStartPos() + t.GetTimelineDuration(),
            o = t.GetTimeAtMousePosition(e, this.m_rectSlider, n, s);
          if (this.state.bStartMouseDown) {
            const e = I.OQ(o, n, t.m_editorEndTime - 5);
            t.m_editorStartTime = e;
          } else if (this.state.bEndMouseDown) {
            const e = I.OQ(o, t.m_editorStartTime + 5, s);
            t.m_editorEndTime = e;
          } else
            o != this.state.nGrabberMouseDownTime &&
              this.setState({ nGrabberMouseDownTime: o });
        }
        OnMouseHoverMove(e) {
          this.AdjustHoverForClientX(e.clientX);
        }
        OnMouseHoverLeave(e) {
          this.setState({ hoverX: 0 });
        }
        AdjustHoverForClientX(e) {
          let t = this.props.video,
            n = t.GetTimelineStartPos(),
            s = t.GetTimelineStartPos() + t.GetTimelineDuration();
          this.m_rectSlider =
            this.m_elSlider.current &&
            this.m_elSlider.current.getBoundingClientRect();
          t.GetTimeAtMousePosition(e, this.m_rectSlider, n, s);
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
            n = e.GetPercentOffsetFromTime(
              this.state.nGrabberMouseDownTime,
              c.a0.Timeline,
            ),
            s = e.GetPercentOffsetFromTime(e.GetPlaybackTime(), c.a0.Timeline),
            o = e.GetPercentOffsetFromTime(
              e.GetVideoAvailableStartTime(),
              c.a0.Timeline,
            );
          o < 0.05 && (o = 0);
          let i = I.OQ(n, 0, 100).toFixed(1) + "%",
            l = I.OQ(s, 0, 100).toFixed(1) + "%",
            a = I.OQ(o, 0, 100).toFixed(1) + "%",
            m = {},
            d = {},
            u = {},
            p = {};
          t
            ? ((p.left = i), (m.width = i), (d.width = l), (u.width = a))
            : ((p.left = l), (d.width = l), (u.width = a));
          let h = (0, N.ap)(e.GetPlaybackTime()),
            S = (0, N.ap)(this.state.nHoverValue),
            E = "STV_timelineContainer";
          this.state.bGrabberMouseDown && (E += " grabberDown"),
            e.IsTimelineMapActive() && (E += " minimapActive");
          let C = "";
          (n = t ? n : s),
            n > 100
              ? (C = " grabberOffScreenRight grabberOffscreen")
              : n < 0 && (C = " grabberOffScreenLeft grabberOffscreen");
          let v = [];
          e.GetTimelineMarkers().forEach((t, n) => {
            let s = e.GetPercentOffsetFromTime(t.nTime, c.a0.Timeline);
            s < 0 ||
              s > 100 ||
              v.push(
                r.createElement(ne, {
                  key: n,
                  pos: s,
                  label: t.strTemplateName,
                  onMouseEnter: this.OnMarkerMouseEnter,
                  onMouseLeave: this.OnMarkerMouseLeave,
                }),
              );
          });
          let g = [];
          e.GetTimelineSegments().forEach((t, n) => {
            let s = e.GetPercentOffsetFromTime(t.nTimeStart, c.a0.Timeline);
            if (s > 100) return;
            let o = e.GetPercentOffsetFromTime(t.nTimeEnd, c.a0.Timeline);
            o < 0 ||
              g.push(
                r.createElement(se, {
                  key: n,
                  startPos: s,
                  endPos: o,
                  label: t.strTemplateName,
                  color: t.color,
                  onClick: (e) => this.OnSegmentClick(t.nTimeStart),
                }),
              );
          });
          const _ = e.GetPercentOffsetFromTime(
              e.m_editorStartTime,
              c.a0.Timeline,
            ),
            f = e.GetPercentOffsetFromTime(e.m_editorEndTime, c.a0.Timeline),
            k = this.props.bIncludeClipEditor
              ? [
                  r.createElement(ne, {
                    key: "start",
                    pos: _,
                    label: (0, M.we)("#DASHPlayerControls_Start"),
                    onMouseEnter: this.OnMarkerMouseEnter,
                    onMouseLeave: this.OnMarkerMouseLeave,
                    onMouseDown: (e) => this.OnMouseDown(e, "start"),
                  }),
                  r.createElement(ne, {
                    key: "end",
                    pos: f,
                    label: (0, M.we)("#DASHPlayerControls_End"),
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
              { className: E },
              r.createElement("div", { className: "DialogLabel" }, h),
              r.createElement(
                "div",
                { className: "STV_timelineSegmentsContainer" },
                g,
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
                    style: d,
                  }),
                  r.createElement("div", {
                    className: "STV_timelineNoVideo",
                    style: u,
                  }),
                  v,
                  k,
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
                      { className: "STV_timelineGrabber" + C },
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
      (0, s.Cg)([T.oI], oe.prototype, "OnMouseDown", null),
        (0, s.Cg)([T.oI], oe.prototype, "OnMouseMove", null),
        (0, s.Cg)([T.oI], oe.prototype, "OnMouseUp", null),
        (0, s.Cg)([T.oI], oe.prototype, "OnKeyDown", null),
        (0, s.Cg)([T.oI], oe.prototype, "OnMouseHoverMove", null),
        (0, s.Cg)([T.oI], oe.prototype, "OnMouseHoverLeave", null),
        (0, s.Cg)([T.oI], oe.prototype, "AdjustHoverForClientX", null),
        (0, s.Cg)([T.oI], oe.prototype, "OnSegmentClick", null),
        (0, s.Cg)([T.oI], oe.prototype, "OnMarkerMouseEnter", null),
        (0, s.Cg)([T.oI], oe.prototype, "OnMarkerMouseLeave", null),
        (oe = (0, s.Cg)([i.PA], oe));
      let ie = class extends r.Component {
        state = { info: null };
        static getDerivedStateFromProps(e, t) {
          if (
            (!t.info || t.info.m_steamIDBroadcast !== e.steamID) &&
            (t.info && (c.es.StopInfo(t.info), (t.info = null)), e.steamID)
          ) {
            return { info: c.es.StartInfo(e.steamID) };
          }
          return null;
        }
        componentWillUnmount() {
          this.state.info && c.es.StopInfo(this.state.info);
        }
        RenderStreamSwitcher() {
          const e = this.props.steamID;
          return A.td.stream[e]
            ? r.createElement(re, {
                value: e,
                options: A.td.stream,
                onChange: this.props.onLocalStreamChange,
              })
            : null;
        }
        render() {
          let { info: e } = this.state;
          if (!e) return null;
          let t = "";
          e.m_nViewerCount && (t = (0, y.Dq)(e.m_nViewerCount));
          let n =
              A.td.bValid && A.td.stream && A.td.stream[e.m_steamIDBroadcast],
            s =
              !this.props.bHideThumbnail &&
              this.props.bVerticalBroadcastChat &&
              (parseInt(e.m_strAppId) > 0 || n);
          const o =
            !this.props.bHideThumbnail &&
            this.props.bVerticalBroadcastChat &&
            n &&
            A.td.gidEvent;
          return r.createElement(
            "div",
            { className: "BroadcastDetails" },
            !this.props.bHideThumbnail &&
              r.createElement(v, {
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
                      (0, M.Yp)("#Broadcast_ViewerCount", t),
                    ),
                ),
              n &&
                this.props.onOpenLinkInNewWindow &&
                r.createElement(
                  "div",
                  { className: "Actions" },
                  r.createElement(
                    "div",
                    {
                      onClick: (e) =>
                        this.props.onOpenLinkInNewWindow(e, A.td.link),
                      className: "BroadcastLink",
                    },
                    A.td.linkName,
                  ),
                ),
            ),
            o && r.createElement(_.m, { gidEvent: A.td.gidEvent }),
            s &&
              r.createElement(g.pb, {
                id:
                  A.td.bValid &&
                  A.td.stream &&
                  A.td.stream[e.m_steamIDBroadcast]
                    ? A.td.appID
                    : parseInt(e.m_strAppId),
                type: "game",
              }),
          );
        }
      };
      ie = (0, s.Cg)([i.PA], ie);
      class re extends r.Component {
        showContextMenu(e) {
          const { options: t, value: n, onChange: s } = this.props,
            o = Object.keys(t).map((e) =>
              r.createElement(
                u.IK,
                { key: e, onSelected: () => s(e), bChecked: e === n },
                (0, M.we)(t[e]),
              ),
            );
          (0, l.lX)(r.createElement(u.tz, null, o), e);
        }
        render() {
          const { value: e, options: t } = this.props,
            n = t[e];
          return r.createElement(
            "div",
            { className: "BroadcastLanguage", onClick: this.showContextMenu },
            r.createElement("span", null, " - ", (0, M.we)(n)),
            r.createElement(
              "div",
              { className: "ContextMenuButton" },
              r.createElement(b.GB9, null),
            ),
          );
        }
      }
      (0, s.Cg)([T.oI], re.prototype, "showContextMenu", null);
      let le = class extends r.Component {
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
            let n;
            (n = {
              left: Math.floor(100 * this.state.sizableRegion[t].xPosPct),
              top: Math.floor(100 * this.state.sizableRegion[t].yPosPct),
              width: Math.floor(100 * this.state.sizableRegion[t].widthPct),
              height: Math.floor(100 * this.state.sizableRegion[t].heightPct),
              url: this.state.sizableRegion[t].link_url,
              link_description: this.state.sizableRegion[t].link_description,
              link_index: t,
            }),
              e.links.push(n);
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
          const n = [...this.state.sizableRegion];
          (n[e] = t),
            this.setState({ sizableRegion: n }, () => this.OnSaveRegions());
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
                    const t = (0, X.p)(e.url);
                    return r.createElement(
                      k.uU,
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
                  r.createElement(f.I, {
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
                  (0, M.we)("#SteamTV_AddLinkRegion"),
                ),
            ),
            r.createElement(
              "div",
              { className: "LinkOverlayInvalidRegion" },
              r.createElement(
                "div",
                null,
                (0, M.we)("#SteamTV_LinkRegionReserved"),
              ),
            ),
          );
        }
      };
      (0, s.Cg)([T.oI], le.prototype, "AddLinkRegion", null),
        (0, s.Cg)([T.oI], le.prototype, "LoadLinkRegion", null),
        (0, s.Cg)([T.oI], le.prototype, "OnSaveRegions", null),
        (0, s.Cg)([T.oI], le.prototype, "DeleteRegion", null),
        (0, s.Cg)([T.oI], le.prototype, "UpdatePanel", null),
        (le = (0, s.Cg)([i.PA], le));
    },
    81363: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => l });
      var s = n(34629),
        o = n(90626),
        i = n(73745),
        r = n(6144);
      class l extends o.Component {
        m_elCanvas;
        m_Context;
        m_schUpdate = new r.LU();
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
            n = this.props.updateRate;
          this.m_Context = this.m_elCanvas.getContext("2d");
          let s = Math.floor(
              this.m_elCanvas.clientWidth / this.props.reductionFactor,
            ),
            o = Math.floor(
              this.m_elCanvas.clientHeight / this.props.reductionFactor,
            );
          (this.m_elCanvas.width = s),
            (this.m_elCanvas.height = o),
            this.props.blurAmount > 0 &&
              (this.m_Context.filter = "blur(" + this.props.blurAmount + "px)");
          let i = () => {
            this.m_Context.drawImage(t, 0, 0, s * e[0], o * e[1]),
              n > 0 && this.m_schUpdate.Schedule(n, i);
          };
          i(), (this.m_bSetupComplete = !0);
        }
        render() {
          return o.createElement("canvas", {
            id: this.props.id,
            className: this.props.className,
            ref: this.BindCanvasRef,
            width: this.props.width,
            height: this.props.height,
          });
        }
      }
      (0, s.Cg)([i.oI], l.prototype, "BindCanvasRef", null),
        (0, s.Cg)([i.oI], l.prototype, "updateCanvas", null);
    },
    283: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => g });
      var s = n(34629),
        o = n(90626),
        i = n(75844),
        r = n(73745),
        l = n(45699),
        a = n(76217),
        c = n(88997),
        m = n(10820),
        d = n(61859),
        u = n(52038),
        p = n(90024),
        h = n.n(p),
        S = n(97232),
        E = n(32754);
      const C = 1576780700;
      let v = class extends o.Component {
        OnEmoticonClick(e) {
          const {
            emoticonStore: t,
            strFlairGroupID: n,
            SetUIDisplayPref: s,
            contextOptions: i,
            bShowChatAddons: r,
          } = this.props;
          let l = null;
          if (
            ((l = r
              ? o.createElement(m.Q4, {
                  emoticonStore: this.props.emoticonStore,
                  strFlairGroupID: this.props.strFlairGroupID,
                  onEmoticonSelected: (e) =>
                    this.props.OnEmoticonSelected(e, !1),
                  roomEffectSettings: this.props.roomEffectSettings,
                  onRoomEffectSelected: this.props.onRoomEffectSelected,
                  onStickerSelected: this.props.onStickerSelected,
                })
              : n && t.flair_list && t.GetFlairListByGroupID(n)?.length > 0
                ? o.createElement(m.CE, {
                    emoticonStore: this.props.emoticonStore,
                    strFlairGroupID: this.props.strFlairGroupID,
                    OnSelected: this.props.OnEmoticonSelected,
                  })
                : o.createElement(m.iY, {
                    emoticonStore: this.props.emoticonStore,
                    strFlairGroupID: this.props.strFlairGroupID,
                    OnSelected: this.props.OnEmoticonSelected,
                  })),
            (0, c.lX)(
              l,
              e,
              i || {
                bOverlapHorizontal: !0,
                bPreferPopLeft: !0,
                bPreferPopTop: !0,
              },
            ),
            this.BHaveUnseenEmoticons() && s)
          ) {
            let e = this.GetNewestIndicatorTime();
            (!e || e < C) && (e = C), s("rtLastAckedNewEmoticons", e);
          }
        }
        GetNewestIndicatorTime() {
          let e = this.props.emoticonStore,
            t = Number.MIN_SAFE_INTEGER,
            n = e.GetTimeReceivedNewestEmoticon();
          n && (t = n);
          let s = e.GetTimeReceivedForStickerOrEffect();
          return (t = Math.max(s, t)), t > Number.MIN_SAFE_INTEGER ? t : void 0;
        }
        BHaveUnseenEmoticons() {
          const { rtLastAckedNewEmoticons: e } = this.props;
          let t = this.GetNewestIndicatorTime();
          return !e || e < C || (t && (!e || e < t));
        }
        render() {
          const { disabled: e, className: t, ttip: n, useImg: s } = this.props;
          let i = [t],
            r = !1;
          return (
            e ? i.push("disabled") : this.BHaveUnseenEmoticons() && (r = !0),
            n && i.push("ttip"),
            s
              ? o.createElement(
                  a.Z,
                  {
                    onClick: this.OnEmoticonClick,
                    onOKActionDescription: (0, d.we)(
                      "#ChatEntryButton_Emoticon",
                    ),
                    focusable: !0,
                  },
                  o.createElement(
                    E.he,
                    { toolTipContent: n },
                    o.createElement("img", {
                      src: this.props.useImg,
                      className: (0, u.A)(...i),
                      title:
                        this.props.title ||
                        (0, d.we)("#ChatEntryButton_Emoticon"),
                    }),
                  ),
                )
              : (i.push(h().chatSubmitButton, h().EmoticonPickerButton),
                o.createElement(
                  l.fu,
                  {
                    className: (0, u.A)(...i),
                    onOKActionDescription: (0, d.we)(
                      "#ChatEntryButton_Emoticon",
                    ),
                    type: "button",
                    onClick: this.OnEmoticonClick,
                    title:
                      this.props.title ||
                      (0, d.we)("#ChatEntryButton_Emoticon"),
                    disabled: e,
                  },
                  o.createElement(
                    E.he,
                    { toolTipContent: n },
                    this.props.buttonIcon || o.createElement(S.nl, null),
                    r && o.createElement(m.iD, null),
                  ),
                ))
          );
        }
      };
      (0, s.Cg)([r.oI], v.prototype, "OnEmoticonClick", null),
        (v = (0, s.Cg)([i.PA], v));
      const g = v;
    },
    10820: (e, t, n) => {
      "use strict";
      n.d(t, { Q4: () => V, iY: () => R, CE: () => G, iD: () => Q });
      var s = n(34629),
        o = n(14947),
        i = n(75844),
        r = n(90626),
        l = n(30193),
        a = n(55263),
        c = n(68451),
        m = n(52038),
        d = n(61859);
      function u(e, t) {
        return e + "economy/sticker/" + encodeURIComponent(t);
      }
      var p = n(78327),
        h = n(16676),
        S = n(76217),
        E = n(88006),
        C = n(19418);
      class v extends r.Component {
        constructor(e) {
          super(e), (this.state = { activeIndex: e.initialActiveIndex || 0 });
        }
        render() {
          const { config: e } = this.props,
            { activeIndex: t } = this.state,
            n = e[t] && e[t].renderContent ? e[t].renderContent() : null,
            s = e.length > 1,
            o = s
              ? ({ detail: { button: t } }) => {
                  t === E.pR.BUMPER_LEFT
                    ? this.setState({
                        activeIndex: Math.max(0, this.state.activeIndex - 1),
                      })
                    : t === E.pR.BUMPER_RIGHT &&
                      this.setState({
                        activeIndex: Math.min(
                          e.length - 1,
                          this.state.activeIndex + 1,
                        ),
                      });
                }
              : void 0;
          return r.createElement(
            S.Z,
            { className: C.Picker, onButtonDown: o },
            s && r.createElement(g, null, this.RenderTabs()),
            n,
          );
        }
        RenderTabs() {
          return this.props.config.map(({ renderTab: e }, t) => {
            const n = this.state.activeIndex === t;
            return r.createElement(
              f,
              {
                key: t,
                active: n,
                onClick: () => this.setState({ activeIndex: t }),
              },
              e(n),
            );
          });
        }
      }
      function g(e) {
        return r.createElement(
          S.Z,
          { className: C.Tabs, "flow-children": "row" },
          e.children,
        );
      }
      function _(e) {
        return r.createElement("div", { className: C.Content }, e.children);
      }
      function f(e) {
        const { active: t, children: n, onClick: s } = e;
        return r.createElement(
          S.Z,
          {
            className: (0, m.A)(C.Tab, t && C.Active),
            focusClassName: C.Focus,
            onActivate: s,
          },
          r.createElement(
            "div",
            { className: (0, m.A)(C.TabContent, t && C.Active) },
            n,
          ),
        );
      }
      function b(e) {
        const {
          items: t,
          renderItem: n,
          onItemSelect: s,
          keyExtractor: o,
          renderEmpty: i,
        } = e;
        let l = t.map((e, i) =>
          r.createElement(
            S.Z,
            {
              key: o(e),
              className: C.Item,
              onActivate: () => s(t[i]),
              autoFocus: 0 === i,
              focusClassName: C.Focus,
            },
            n(t[i]),
          ),
        );
        return (
          0 === t.length && i && (l = i()),
          r.createElement(
            S.Z,
            { "flow-children": "grid", className: C.ItemList },
            l,
          )
        );
      }
      function k(e) {
        const { title: t, onFilterChange: n, filter: s, onSubmit: o, ...i } = e;
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            _,
            null,
            r.createElement(P, { title: t }, r.createElement(b, { ...i })),
          ),
          r.createElement(M, { value: s, onChange: n, onSubmit: o }),
        );
      }
      function w(e) {
        const { onFilterChange: t, filter: n, sections: s, title: o } = e;
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            _,
            null,
            o && r.createElement("div", { className: C.SectionedPageTitle }, o),
            s.map(({ title: e, ...t }) =>
              r.createElement(
                P,
                { title: e, key: e },
                r.createElement(b, { ...t }),
              ),
            ),
          ),
          r.createElement(M, { value: n, onChange: t }),
        );
      }
      function P(e) {
        return r.createElement(
          "div",
          { className: C.Section },
          r.createElement("div", { className: C.SectionTitle }, e.title),
          r.createElement("div", { className: C.SectionContent }, e.children),
        );
      }
      function M(e) {
        const { value: t, onChange: n, onSubmit: s } = e;
        return r.createElement(
          "div",
          { className: C.FilterInputContainer },
          r.createElement(h.pd, {
            type: "text",
            placeholder: (0, d.we)("#AddonPicker_Search"),
            className: C.FilterInput,
            value: t,
            onChange: (e) => n(e.target.value),
            onSubmit: s,
          }),
        );
      }
      function y(e) {
        const { className: t, ...n } = e;
        return r.createElement("div", {
          className: (0, m.A)(t, C.AddonPickerMessage),
          ...n,
        });
      }
      var I = n(42060),
        T = n.n(I),
        D = n(51272),
        A = n(81962);
      function N(e) {
        return e.recent_emoticons;
      }
      function O(e) {
        return e.recent_stickers;
      }
      function B(e) {
        return N(e).length + O(e).length > 0;
      }
      const V = (0, i.PA)((e) => {
        const {
          emoticonStore: t,
          roomEffectSettings: n,
          strFlairGroupID: s,
          onEmoticonSelected: i,
          onRoomEffectSelected: l,
          onStickerSelected: a,
        } = e;
        !(function (e) {
          const [t, n] = (0, r.useState)(e.is_initialized);
          (0, r.useEffect)(() => {
            if (!e.is_initialized) {
              e.UpdateEmoticonList();
              const t = (0, o.z7)(
                () => e.is_initialized,
                () => n(e.is_initialized),
              );
              return () => t();
            }
            return () => {};
          }, [e]);
        })(t);
        const u = [];
        return (
          B(t) &&
            u.push({
              renderTab: (e) =>
                r.createElement(
                  "span",
                  {
                    title: (0, d.we)("#AddonPicker_RecentlyUsed"),
                    className: (0, m.A)(
                      T().PickerTab,
                      T().Clock,
                      e && T().ActiveTab,
                    ),
                  },
                  r.createElement(te, null),
                ),
              renderContent: () =>
                r.createElement(H, {
                  store: t,
                  onEmoticonSelect: (e) => i(e.name),
                  onStickerSelect: (e) => a(e.name),
                  flairGroupID: s,
                }),
            }),
          r.createElement(
            c.tz,
            null,
            r.createElement(v, {
              config: [
                ...u,
                {
                  renderTab: (e) =>
                    r.createElement(
                      "span",
                      {
                        title: (0, d.we)("#AddonPicker_Emoticons"),
                        className: (0, m.A)(T().PickerTab, e && T().ActiveTab),
                      },
                      r.createElement($, null),
                    ),
                  renderContent: () =>
                    r.createElement(x, {
                      store: t,
                      onItemSelect: (e) => i(e.name),
                      flairGroupID: s,
                    }),
                },
                {
                  renderTab: (e) =>
                    r.createElement(
                      "span",
                      {
                        title: (0, d.we)("#AddonPicker_Stickers"),
                        className: (0, m.A)(T().PickerTab, e && T().ActiveTab),
                      },
                      r.createElement(Y, null),
                    ),
                  renderContent: () =>
                    r.createElement(U, {
                      store: t,
                      onItemSelect: (e) => a(e.name),
                    }),
                },
                {
                  renderTab: (e) =>
                    r.createElement(
                      "span",
                      {
                        title: (0, d.we)("#AddonPicker_RoomEffects"),
                        className: (0, m.A)(T().PickerTab, e && T().ActiveTab),
                      },
                      r.createElement(ee, null),
                    ),
                  renderContent: () =>
                    r.createElement(z, {
                      store: t,
                      effectSettings: n,
                      onItemSelect: (e) => l(e.name),
                    }),
                },
              ],
            }),
          )
        );
      });
      let L = class extends r.Component {
        m_disposeEmoticonStore;
        constructor(e) {
          super(e), (this.state = { strSearchText: "" });
          let t = this.props.emoticonStore;
          t.is_initialized ||
            (t.UpdateEmoticonList(),
            (this.m_disposeEmoticonStore = (0, o.z7)(
              () => t.is_initialized,
              () => this.forceUpdate(),
            )));
        }
        componentWillUnmount() {
          this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
        }
        render() {
          const {
              emoticonStore: e,
              onEmoticonSelected: t,
              onStickerSelected: n,
              strFlairGroupID: s,
            } = this.props,
            o = [];
          return (
            B(e) &&
              o.push({
                renderTab: (e) =>
                  r.createElement(
                    "span",
                    {
                      title: (0, d.we)("#AddonPicker_RecentlyUsed"),
                      className: (0, m.A)(
                        T().PickerTab,
                        T().Clock,
                        e && T().ActiveTab,
                      ),
                    },
                    r.createElement(te, null),
                  ),
                renderContent: () =>
                  r.createElement(H, {
                    store: e,
                    onEmoticonSelect: (e) => t(e.name),
                    onStickerSelect: (e) => n(e.name),
                    flairGroupID: s,
                  }),
              }),
            r.createElement(
              c.tz,
              null,
              r.createElement(v, {
                config: [
                  ...o,
                  {
                    renderTab: (e) =>
                      r.createElement(
                        "span",
                        {
                          title: (0, d.we)("#AddonPicker_Emoticons"),
                          className: (0, m.A)(
                            T().PickerTab,
                            e && T().ActiveTab,
                          ),
                        },
                        r.createElement($, null),
                      ),
                    renderContent: () =>
                      r.createElement(x, {
                        store: e,
                        onItemSelect: (e) => t(e.name),
                        flairGroupID: s,
                      }),
                  },
                  {
                    renderTab: (e) =>
                      r.createElement(
                        "span",
                        {
                          title: (0, d.we)("#AddonPicker_Stickers"),
                          className: (0, m.A)(
                            T().PickerTab,
                            e && T().ActiveTab,
                          ),
                        },
                        r.createElement(Y, null),
                      ),
                    renderContent: () =>
                      r.createElement(U, {
                        store: e,
                        onItemSelect: (e) => n(e.name),
                      }),
                  },
                ],
              }),
            )
          );
        }
      };
      L = (0, s.Cg)([i.PA], L);
      class R extends r.Component {
        m_disposeEmoticonStore;
        constructor(e) {
          super(e), (this.state = { strSearchText: "" });
          let t = this.props.emoticonStore;
          t.is_initialized ||
            (t.UpdateEmoticonList(),
            (this.m_disposeEmoticonStore = (0, o.z7)(
              () => t.is_initialized,
              () => this.forceUpdate(),
            )));
        }
        componentWillUnmount() {
          this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
        }
        render() {
          return r.createElement(
            c.tz,
            null,
            r.createElement(v, {
              config: [
                {
                  renderTab: () =>
                    r.createElement(
                      "span",
                      {
                        title: (0, d.we)("#AddonPicker_Emoticons"),
                        className: T().PickerTab,
                      },
                      r.createElement($, null),
                    ),
                  renderContent: () =>
                    r.createElement(W, {
                      store: this.props.emoticonStore,
                      onItemSelect: (e) => this.props.OnSelected(e.name, !1),
                      flairGroupID: this.props.strFlairGroupID,
                    }),
                },
              ],
            }),
          );
        }
      }
      class G extends r.Component {
        m_disposeEmoticonStore;
        constructor(e) {
          super(e), (this.state = { strSearchText: "" });
          let t = this.props.emoticonStore;
          t.is_initialized ||
            (t.UpdateEmoticonList(),
            (this.m_disposeEmoticonStore = (0, o.z7)(
              () => t.is_initialized,
              () => this.forceUpdate(),
            )));
        }
        componentWillUnmount() {
          this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
        }
        render() {
          return r.createElement(
            c.tz,
            null,
            r.createElement(v, {
              config: [
                {
                  renderTab: () =>
                    r.createElement(
                      "span",
                      {
                        title: (0, d.we)("#AddonPicker_Emoticons"),
                        className: T().PickerTab,
                      },
                      r.createElement($, null),
                    ),
                  renderContent: () =>
                    r.createElement(X, {
                      store: this.props.emoticonStore,
                      onItemSelect: (e) => this.props.OnSelected(e.name, !1),
                      flairGroupID: this.props.strFlairGroupID,
                    }),
                },
              ],
            }),
          );
        }
      }
      class H extends r.Component {
        state = { filter: "" };
        render() {
          const {
              store: e,
              onEmoticonSelect: t,
              onStickerSelect: n,
            } = this.props,
            { filter: s } = this.state,
            o = [];
          return (
            N(e) &&
              o.push({
                title: (0, d.we)("#AddonPicker_RecentEmoticons"),
                items: l.pN.FilterEmoticons(N(e), s),
                onItemSelect: t,
                renderItem: (e) => r.createElement(J, { emoticon: e }),
                keyExtractor: (e) => e.name,
                renderEmpty: () =>
                  r.createElement(
                    y,
                    null,
                    s
                      ? (0, d.we)("#AddonPicker_NoResults")
                      : (0, d.we)(
                          "#AddonPicker_NoRecent",
                          (0, d.we)("#AddonPicker_Emoticons"),
                        ),
                  ),
              }),
            O(e).length &&
              o.push({
                title: (0, d.we)("#AddonPicker_RecentStickers"),
                items: l.pN.FilterStickers(O(e), s),
                onItemSelect: n,
                renderItem: (e) => r.createElement(j, { sticker: e }),
                keyExtractor: ({ name: e }) => e,
                renderEmpty: () =>
                  r.createElement(
                    y,
                    null,
                    s
                      ? (0, d.we)("#AddonPicker_NoResults")
                      : (0, d.we)(
                          "#AddonPicker_NoRecent",
                          (0, d.we)("#AddonPicker_Stickers"),
                        ),
                  ),
              }),
            r.createElement(w, {
              onFilterChange: (e) => this.setState({ filter: e }),
              filter: s,
              sections: o,
            })
          );
        }
      }
      class x extends r.Component {
        state = { filter: "" };
        render() {
          const { store: e, onItemSelect: t, flairGroupID: n } = this.props,
            { filter: s } = this.state,
            o = !s && n ? e.GetFlairListByGroupID(n) : e.emoticon_list,
            i = l.pN.FilterEmoticons(o, s).slice(0, 1e3);
          return r.createElement(k, {
            title: (0, d.we)("#AddonPicker_Emoticons"),
            items: i,
            onItemSelect: t,
            renderItem: (e) => r.createElement(J, { emoticon: e }),
            keyExtractor: (e) => e.name,
            onFilterChange: (e) => this.setState({ filter: e }),
            filter: s,
            onSubmit: () => t(i[0]),
            renderEmpty: () =>
              s
                ? r.createElement(y, null, (0, d.we)("#AddonPicker_NoResults"))
                : r.createElement(F, null),
          });
        }
      }
      function F() {
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            y,
            null,
            (0, d.we)(
              "#AddonPicker_NoneOwned",
              (0, d.we)("#AddonPicker_Emoticons"),
            ),
          ),
          r.createElement(
            y,
            null,
            (0, d.PP)(
              "#AddonPicker_AcquireAtPointsShopOrMarket",
              r.createElement(
                D.uU,
                { href: `${p.TS.STORE_BASE_URL}points/shop/c/emoticons` },
                (0, d.we)("#AddonPicker_AcquireAtPointsShop_Link"),
              ),
              r.createElement(
                D.uU,
                { href: `${p.TS.COMMUNITY_BASE_URL}market` },
                (0, d.we)("#AddonPicker_AcquireAtPointsShopOrMarket_Link"),
              ),
            ),
          ),
        );
      }
      class U extends r.Component {
        state = { filter: "" };
        render() {
          const { store: e, onItemSelect: t } = this.props,
            { filter: n } = this.state,
            s = l.pN.FilterStickers(e.GetStickerList(), n);
          return r.createElement(k, {
            title: (0, d.we)("#EmoticonPicker_StickerHeading"),
            items: s,
            onItemSelect: t,
            renderItem: (e) => r.createElement(j, { sticker: e }),
            keyExtractor: ({ name: e }) => e,
            onFilterChange: (e) => this.setState({ filter: e }),
            filter: n,
            onSubmit: () => t(s[0]),
            renderEmpty: () =>
              n
                ? r.createElement(y, null, (0, d.we)("#AddonPicker_NoResults"))
                : r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(
                      y,
                      null,
                      (0, d.we)(
                        "#AddonPicker_NoneOwned",
                        (0, d.we)("#AddonPicker_Stickers"),
                      ),
                    ),
                    r.createElement(
                      y,
                      null,
                      (0, d.PP)(
                        "#AddonPicker_AcquireAtPointsShop",
                        r.createElement(
                          D.uU,
                          {
                            href: `${p.TS.STORE_BASE_URL}points/shop/c/stickers`,
                          },
                          (0, d.we)("#AddonPicker_AcquireAtPointsShop_Link"),
                        ),
                      ),
                    ),
                  ),
          });
        }
      }
      class z extends r.Component {
        state = { filter: "" };
        render() {
          const { store: e, effectSettings: t, onItemSelect: n } = this.props,
            { filter: s } = this.state,
            o = e.GetEffectList().filter(({ name: e }) => e.indexOf(s) > -1);
          return r.createElement(k, {
            title: (0, d.we)("#EmoticonPicker_EffectHeading"),
            items: o,
            onItemSelect: n,
            renderItem: (e) =>
              r.createElement(q, { effect: e, roomEffectSettings: t }),
            keyExtractor: ({ name: e }) => e,
            onFilterChange: (e) => this.setState({ filter: e }),
            filter: s,
            onSubmit: () => n(o[0]),
            renderEmpty: () =>
              s
                ? r.createElement(y, null, (0, d.we)("#AddonPicker_NoResults"))
                : r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(
                      y,
                      null,
                      (0, d.we)(
                        "#AddonPicker_NoneOwned",
                        (0, d.we)("#AddonPicker_RoomEffects"),
                      ),
                    ),
                    r.createElement(
                      y,
                      null,
                      (0, d.PP)(
                        "#AddonPicker_AcquireAtPointsShop",
                        r.createElement(
                          D.uU,
                          {
                            href: `${p.TS.STORE_BASE_URL}points/shop/c/chateffects`,
                          },
                          (0, d.we)("#AddonPicker_AcquireAtPointsShop_Link"),
                        ),
                      ),
                    ),
                  ),
          });
        }
      }
      let W = class extends r.Component {
        state = { filter: "" };
        render() {
          const { store: e, onItemSelect: t, flairGroupID: n } = this.props,
            { filter: s } = this.state,
            o = [];
          return (
            N(e).length &&
              o.push({
                title: (0, d.we)("#AddonPicker_RecentEmoticons"),
                items: l.pN.FilterEmoticons(N(e), s),
                onItemSelect: t,
                renderItem: (e) => r.createElement(J, { emoticon: e }),
                keyExtractor: (e) => e.name,
                renderEmpty: () =>
                  r.createElement(
                    y,
                    null,
                    s
                      ? (0, d.we)("#AddonPicker_NoResults")
                      : (0, d.we)(
                          "#AddonPicker_NoRecent",
                          (0, d.we)("#AddonPicker_Emoticons"),
                        ),
                  ),
              }),
            r.createElement(w, {
              onFilterChange: (e) => this.setState({ filter: e }),
              filter: s,
              sections: [
                ...o,
                {
                  title: (0, d.we)("#AddonPicker_AllEmoticons"),
                  items: l.pN.FilterStickers(e.emoticon_list, s).slice(0, 1e3),
                  onItemSelect: t,
                  renderItem: (e) => r.createElement(J, { emoticon: e }),
                  keyExtractor: (e) => e.name,
                  renderEmpty: () =>
                    s
                      ? r.createElement(
                          y,
                          null,
                          (0, d.we)("#AddonPicker_NoResults"),
                        )
                      : r.createElement(F, null),
                },
              ],
            })
          );
        }
      };
      W = (0, s.Cg)([i.PA], W);
      let X = class extends r.Component {
        state = { filter: "" };
        render() {
          const { store: e, onItemSelect: t, flairGroupID: n } = this.props,
            { filter: s } = this.state;
          return r.createElement(w, {
            onFilterChange: (e) => this.setState({ filter: e }),
            filter: s,
            sections: [
              {
                title: (0, d.we)("#ChatEntryButton_Flair"),
                items: l.pN.FilterStickers(e.GetFlairListByGroupID(n), s),
                onItemSelect: t,
                renderItem: (e) => r.createElement(J, { emoticon: e }),
                keyExtractor: (e) => e.name,
                renderEmpty: () =>
                  s
                    ? r.createElement(
                        y,
                        null,
                        (0, d.we)("#AddonPicker_NoResults"),
                      )
                    : r.createElement(F, null),
              },
            ],
          });
        }
      };
      X = (0, s.Cg)([i.PA], X);
      const J = (e) => {
        const { emoticon: t, large: n } = e,
          s = !t.last_used && t.time_received;
        return r.createElement(
          "div",
          { className: T().EmoticonItem },
          r.createElement(A.n, { emoticon: t.name, large: n }),
          s && r.createElement(Q, null),
        );
      };
      class j extends r.Component {
        state = { showHover: !1 };
        m_ref = r.createRef();
        render() {
          const { sticker: e, className: t, ...n } = this.props,
            s = u(p.TS.COMMUNITY_CDN_URL, e.name);
          return r.createElement(
            "div",
            {
              ref: this.m_ref,
              className: (0, m.A)(t, T().StickerButton),
              onMouseOver: () => this.setState({ showHover: !0 }),
              onFocus: () => this.setState({ showHover: !0 }),
              onMouseLeave: () => this.setState({ showHover: !1 }),
              onBlur: () => this.setState({ showHover: !1 }),
              ...n,
            },
            r.createElement("img", { style: { width: "100%" }, src: s }),
            this.state.showHover &&
              r.createElement(Z, { target: this.m_ref.current, sticker: e }),
          );
        }
      }
      const Z = (0, i.PA)((e) => {
        const {
            target: t,
            sticker: { name: n, appid: s },
          } = e,
          [o] = (0, a.t7)(s, {});
        return r.createElement(
          A.c,
          { target: t, title: n, subtitle: o?.GetName() },
          r.createElement("img", {
            src: u(p.TS.COMMUNITY_CDN_URL, n),
            className: T().StickerHoverSticker,
          }),
        );
      });
      class q extends r.Component {
        state = { showHover: !1 };
        m_ref = r.createRef();
        render() {
          const {
              effect: e,
              roomEffectSettings: t,
              className: n,
              ...s
            } = this.props,
            o = t[e.name];
          return r.createElement(
            "div",
            {
              ref: this.m_ref,
              onMouseOver: () => this.setState({ showHover: !0 }),
              onFocus: () => this.setState({ showHover: !0 }),
              onMouseLeave: () => this.setState({ showHover: !1 }),
              onBlur: () => this.setState({ showHover: !1 }),
              className: (0, m.A)(n, T().EffectButton),
              ...s,
            },
            o.renderEffectIcon(),
            this.state.showHover &&
              r.createElement(K, {
                target: this.m_ref.current,
                effect: e,
                roomEffectSettings: t,
              }),
          );
        }
      }
      const K = (0, i.PA)((e) => {
        const {
            target: t,
            effect: { name: n, appid: s },
            roomEffectSettings: o,
          } = e,
          i = o[n],
          [l] = (0, a.t7)(s, {});
        return r.createElement(
          A.c,
          { target: t, title: n, subtitle: l?.GetName() },
          r.createElement(
            "div",
            { className: T().EffectHoverEffect },
            i.renderEffectIcon(),
          ),
        );
      });
      function Q() {
        return r.createElement(
          "div",
          { className: T().NewEmoticonIndicator },
          r.createElement("div", { className: T().NewEmoticonCircle }),
        );
      }
      function Y(e) {
        return r.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...e,
          },
          r.createElement("path", {
            fill: "currentColor",
            d: "M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z",
          }),
          r.createElement("path", {
            fill: "currentColor",
            d: "M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z",
          }),
          r.createElement("path", {
            fill: "currentColor",
            d: "M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z",
          }),
          r.createElement("path", {
            fill: "currentColor",
            d: "M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z",
          }),
          r.createElement("path", {
            fill: "currentColor",
            d: "M21 29H22.1875V31H19L21 29Z",
          }),
          r.createElement("path", {
            fill: "currentColor",
            d: "M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3982 31 25 31H24.0625V29Z",
          }),
          r.createElement("path", {
            fill: "currentColor",
            d: "M29 22.1875V21L31 19V22.1875H29Z",
          }),
        );
      }
      function $(e) {
        return r.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...e,
          },
          r.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM9.00001 15C9.00001 14.4067 9.17595 13.8266 9.5056 13.3333C9.83524 12.8399 10.3038 12.4554 10.852 12.2284C11.4001 12.0013 12.0033 11.9419 12.5853 12.0576C13.1672 12.1734 13.7018 12.4591 14.1213 12.8787C14.5409 13.2982 14.8266 13.8328 14.9424 14.4147C15.0581 14.9967 14.9987 15.5999 14.7716 16.1481C14.5446 16.6962 14.1601 17.1648 13.6667 17.4944C13.1734 17.8241 12.5934 18 12 18C11.2044 18 10.4413 17.6839 9.87869 17.1213C9.31608 16.5587 9.00001 15.7956 9.00001 15ZM24 18C23.4067 18 22.8266 17.8241 22.3333 17.4944C21.8399 17.1648 21.4554 16.6962 21.2284 16.1481C21.0013 15.5999 20.9419 14.9967 21.0576 14.4147C21.1734 13.8328 21.4591 13.2982 21.8787 12.8787C22.2982 12.4591 22.8328 12.1734 23.4147 12.0576C23.9967 11.9419 24.5999 12.0013 25.1481 12.2284C25.6962 12.4554 26.1648 12.8399 26.4944 13.3333C26.8241 13.8266 27 14.4067 27 15C27 15.7956 26.6839 16.5587 26.1213 17.1213C25.5587 17.6839 24.7957 18 24 18ZM26.3149 23.6788C26.7672 22.8295 27 21.9193 27 21H18H9C9 21.9193 9.23279 22.8295 9.68508 23.6788C10.1374 24.5281 10.8003 25.2997 11.636 25.9497C12.4718 26.5998 13.4639 27.1154 14.5558 27.4672C15.6478 27.8189 16.8181 28 18 28C19.1819 28 20.3522 27.8189 21.4442 27.4672C22.5361 27.1154 23.5282 26.5998 24.364 25.9497C25.1997 25.2997 25.8626 24.5281 26.3149 23.6788Z",
          }),
        );
      }
      function ee(e) {
        return r.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...e,
          },
          r.createElement("path", {
            fill: "currentColor",
            d: "M14.7163 7.6875L17.2476 15.5344C17.564 16.6102 18.4499 17.4328 19.5257 17.8125L27.3726 20.3438L19.5257 22.875C18.4499 23.1914 17.6273 24.0773 17.2476 25.1531L14.7163 33L12.1851 25.1531C11.8687 24.0773 10.9827 23.2547 9.90696 22.875L2.06009 20.3438L9.90696 17.8125C10.9827 17.4961 11.8054 16.6102 12.1851 15.5344L14.7163 7.6875Z",
          }),
          r.createElement("path", {
            fill: "currentColor",
            d: "M24.488 3L25.7861 7.06499C25.9591 7.63321 26.3918 8.07031 26.9543 8.24514L30.9784 9.55643L26.9543 10.8677C26.3918 11.0426 25.9591 11.4796 25.7861 12.0479L24.488 16.1129L23.1899 12.0479C23.0168 11.4796 22.5841 11.0426 22.0216 10.8677L17.9976 9.55643L22.0216 8.24514C22.5841 8.07031 23.0168 7.63321 23.1899 7.06499L24.488 3Z",
          }),
          r.createElement("path", {
            fill: "currentColor",
            d: "M8.11778 3.9375L8.76682 5.99185C8.85336 6.25411 9.0697 6.47265 9.32932 6.56007L11.363 7.21571L9.32932 7.87136C9.0697 7.95878 8.85336 8.17732 8.76682 8.43958L8.11778 10.4939L7.46874 8.43958C7.3822 8.17732 7.16586 7.95878 6.90624 7.87136L4.87259 7.21571L6.90624 6.56007C7.16586 6.47265 7.3822 6.25411 7.46874 5.99185L8.11778 3.9375Z",
          }),
          r.createElement("path", {
            fill: "currentColor",
            d: "M30.6178 12.375L31.2668 14.4293C31.3534 14.6916 31.5697 14.9102 31.8293 14.9976L33.863 15.6532L31.8293 16.3089C31.5697 16.3963 31.3534 16.6148 31.2668 16.8771L30.6178 18.9314L29.9687 16.8771C29.8822 16.6148 29.6659 16.3963 29.4062 16.3089L27.3726 15.6532L29.4062 14.9976C29.6659 14.9102 29.8822 14.6916 29.9687 14.4293L30.6178 12.375Z",
          }),
          r.createElement("path", {
            fill: "currentColor",
            d: "M25.9303 24.5625L26.5793 26.6168C26.6659 26.8791 26.8822 27.0977 27.1418 27.1851L29.1755 27.8407L27.1418 28.4964C26.8822 28.5838 26.6659 28.8023 26.5793 29.0646L25.9303 31.1189L25.2812 29.0646C25.1947 28.8023 24.9784 28.5838 24.7187 28.4964L22.6851 27.8407L24.7187 27.1851C24.9784 27.0977 25.1947 26.8791 25.2812 26.6168L25.9303 24.5625Z",
          }),
        );
      }
      function te(e) {
        const { className: t, ...n } = e;
        return r.createElement(
          "svg",
          {
            className: (0, m.A)("SVGIcon_Button SVGIcon_Clock", t),
            version: "1.1",
            x: "0px",
            y: "0px",
            width: "20px",
            height: "20px",
            viewBox: "0 0 24 24",
            ...n,
          },
          r.createElement("path", {
            d: "M15.999 15c-.15 0-.303-.034-.446-.105l-4-2A1.001 1.001 0 0111 12V5a1 1 0 012 0v6.382l3.447 1.724A1 1 0 0115.999 15zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z",
          }),
        );
      }
    },
    69409: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => u });
      var s = n(90626),
        o = n(22837),
        i = n(38390),
        r = n(52038),
        l = n(61859),
        a = n(61336),
        c = n(78327),
        m = n(15392),
        d = n(27666);
      function u(e) {
        const { gidEvent: t } = e,
          n = (0, i.RR)(t),
          [u, p] = (0, s.useMemo)(() => {
            if (
              n?.jsondata?.localized_sale_product_banner?.length > 0 &&
              n?.jsondata?.localized_sale_product_mobile_banner?.length > 0
            ) {
              const e = (0, o.sf)(c.TS.LANGUAGE),
                t = l.NT.GetWithFallback(
                  n.jsondata.localized_sale_product_banner,
                  e,
                ),
                s = l.NT.GetWithFallback(
                  n.jsondata.localized_sale_product_mobile_banner,
                  e,
                );
              if (t?.length > 0 && s?.length > 0)
                return [
                  d.z.GenerateURLFromHashAndExt(n.clanSteamID, t),
                  d.z.GenerateURLFromHashAndExt(n.clanSteamID, s),
                ];
            }
            return [null, null];
          }, [n]);
        return u?.length > 0 && p?.length > 0
          ? s.createElement(
              "a",
              { href: (0, a.k2)(n.GetSaleURL()), className: m.Link },
              s.createElement("img", {
                src: u,
                className: (0, r.A)(m.Banner, m.Big),
              }),
              s.createElement("img", {
                src: p,
                className: (0, r.A)(m.Banner, m.Mobile),
              }),
            )
          : null;
      }
    },
  },
]);
