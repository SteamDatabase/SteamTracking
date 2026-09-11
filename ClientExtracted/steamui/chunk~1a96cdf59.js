(() => {
  (self.webpackChunksteamui = self.webpackChunksteamui || []).push([
    [3834],
    {
      86721: ($) => {
        $.exports = {
          BroadcastPlayerLite: "SAxf3Rqn792kM6c4U_vx5",
          BroadcastPlayerLiteVideo: "yCd0zjymzfw3HkVm-1YwX",
          BroadcastContext: "_3TnYLKMweBMIC69qFU6OJj",
          BroadcastPlaceholderImg: "_3hxn99MT14hFUCrUp6zbsf",
        };
      },
      21501: ($) => {
        $.exports = {
          LinkRegionDragBox: "Rtlc-BB1aJFRIM1lH4zN1",
          EdgeDown: "i9zrHPy0-LgZONeZE4fgG",
          LinkRegionGridBox: "_1Ob4AvWwUMx67yR7owjqse",
          LinkRegionEdge: "_2stP4WlwIxd0-9GjYyI7vF",
          TopLeft: "Clgi---P85XXv25yLZwB0",
          Top: "_2Z9VyBAzofV3JvK__dECbX",
          TopRight: "_2-8DbI8PAEkk6i_0CoUeKM",
          Left: "_3ZwUw4ojIRguwHHAcn2Y4y",
          Middle: "_1HecozzoSZfUZSci9dLkxN",
          LinkRegionDelete: "_3Hb3w5_ECwPKcEr5QSAsNk",
          LinkRegionSettings: "VazMl4niFnodlVJhHIGlL",
          Right: "_3h5fKwHq9Uj2VGs8qxxtLl",
          BottomLeft: "_2CQe0cOBOLqq6y6KAUXqH3",
          Bottom: "sIHlK9sN2255-irERXD_V",
          BottomRight: "_3lnwjSWK9Gh1dFkD46NTpP",
          topleft: "_3W096h6Ka6U7sOZVa9lXQo",
          top: "_1iRW1Msfh60zHqD-xe4EAk",
          topright: "_1Yrl7AkNVVGwbM2vyL8yY1",
          left: "_2iBrmAEyXuaKAeZ-g-4CPF",
          right: "_15t6A4l27DY4KRL1aAUTTS",
          bottomleft: "_3SdBcnCBApw0fQ886qgsUx",
          bottom: "_2kzZ9Ilwo92sEI9LXTtZjN",
          bottomright: "_2AKXkFPsIBpG-HeeN58Rti",
          middle: "_1CS75ZrrDXna6xatw5ZvPR",
          LinkRegionButtonContainer: "_1ZJ42NPmBFvIcOai51ZKv3",
          DialogButton: "nN2Q1qGmO2BGMhVnIVMce",
          LinkRegionInfo: "_3TiV7d40PX30wy8UghFCaJ",
          LinkText: "_2TAc2iPcWUHTtwlg7urHv8",
        };
      },
      44613: ($, Y, c) => {
        "use strict";
        c.r(Y),
          c.d(Y, {
            BroadcastDetails: () => se,
            LinkOverlay: () => I,
            default: () => x,
          });
        var t = c(62540),
          B = c(89193),
          S = c(41230),
          f = c(63696),
          Q = c(377),
          R = c(636),
          G = c(4487),
          v = c(56604),
          Z = c(98681),
          m = c(13215),
          _ = c(12711),
          pe = c(28614),
          ie = c(49090),
          oe = c(4885),
          L = c(14596),
          P = c(42095),
          k = c(28644),
          o = c(6460),
          g = c(8658),
          u = c(57575),
          l = c(7727),
          b = c(11143),
          C = c(23365),
          a = c(71262),
          ne = c(6739),
          w = c(3519),
          me = c(2108),
          Me = c(86721),
          ve = c.n(Me),
          De = c(7354),
          Fe = "10986482",
          Oe = Object.defineProperty,
          we = Object.getOwnPropertyDescriptor,
          _e = (e, s, i, n) => {
            for (
              var r = n > 1 ? void 0 : n ? we(s, i) : s, h = e.length - 1, p;
              h >= 0;
              h--
            )
              (p = e[h]) && (r = (n ? p(s, i, r) : p(r)) || r);
            return n && r && Oe(s, i, r), r;
          };
        function ke() {
          return (0, t.jsx)("div", {
            className: "STV_ReplayBanner",
            children: (0, l.we)("#DASHPlayerControls_IsReplay"),
          });
        }
        const ye = (0, S.PA)((e) => {
          let s = e.video;
          if (s && (s.IsBroadcastClip() || s.IsBroadcastVOD())) return null;
          let i = v.fK.Loading,
            n = "";
          if (s) {
            (i = s.GetBroadcastState()), (n = s.GetBroadcastStateDescription());
            let h = s.IsBuffering();
            i == v.fK.Unlocking && ((i = v.fK.Loading), (n = "")),
              i == v.fK.Ready && h && ((i = v.fK.Loading), (n = ""));
          }
          if (
            (s && i != v.fK.Error && s.GetUserInputNeeded()) ||
            i == v.fK.Ready
          )
            return null;
          let r = i == v.fK.Loading;
          return (0, t.jsxs)("div", {
            className: "BroadcastVideoWatchState",
            style: { filter: "hue-rotate(40deg)" },
            children: [
              r && (0, t.jsx)(De.t, {}),
              !r &&
                (0, t.jsx)("div", {
                  className: "BroadcastVideoWatchState_Text",
                  children: n,
                }),
            ],
          });
        });
        class Se extends f.Component {
          OnClick() {
            v.BroadcastWatchStore.UserInputClickVideo(this.props.video);
          }
          render() {
            return (0, t.jsxs)("div", {
              className: "BroadcastVideoUserInputNeeded",
              onClick: this.OnClick,
              children: [
                (0, t.jsx)(P.jGG, {}),
                (0, t.jsx)("span", {
                  children: (0, l.we)("#DASHPlayerControls_ClickToPlay"),
                }),
              ],
            });
          }
        }
        _e([a.oI], Se.prototype, "OnClick", 1);
        var We = "10986482",
          Be = Object.defineProperty,
          Le = Object.getOwnPropertyDescriptor,
          re = (e, s, i, n) => {
            for (
              var r = n > 1 ? void 0 : n ? Le(s, i) : s, h = e.length - 1, p;
              h >= 0;
              h--
            )
              (p = e[h]) && (r = (n ? p(s, i, r) : p(r)) || r);
            return n && r && Be(s, i, r), r;
          };
        let q = class extends f.Component {
          constructor(e) {
            super(e);
          }
          HideStats() {
            this.props.closeStats && this.props.closeStats();
          }
          render() {
            let e = this.props.stats;
            return (0, t.jsxs)("div", {
              className: "dash_video_stats",
              children: [
                (0, t.jsx)("button", {
                  className: "dash_stat_close_button",
                  onClick: this.HideStats,
                  children: (0, t.jsx)(P.sED, {}),
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, l.we)("#DASHPlayerStats_BufferingResolution"),
                    " ",
                    (0, t.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetBufferingResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, l.we)("#DASHPlayerStats_PlaybackResolution"),
                    " ",
                    (0, t.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetPlaybackResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, l.we)("#DASHPlayerStats_HtmlResolution"),
                    " ",
                    (0, t.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetHTMLVideoResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, l.we)("#DASHPlayerStats_ContentServer"),
                    " ",
                    (0, t.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetContentServerToDisplay(),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, l.we)("#DASHPlayerStats_StallEvents"),
                    " ",
                    (0, t.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetStalledEventsToDisplay(),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, l.we)("#DASHPlayerStats_FailedDownloads"),
                    " ",
                    (0, t.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetFailedDownloadsToDisplay(),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, l.we)("#DASHPlayerStats_TimeToFirstFrame"),
                    " ",
                    (0, t.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetTimeToFirstFrameToDisplay(),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, l.we)("#DASHPlayerStats_PlaybackRate"),
                    " ",
                    (0, t.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetPlaybackRateForDisplay(),
                    }),
                  ],
                }),
                (0, t.jsx)(ae, { stats: e }),
              ],
            });
          }
        };
        re([a.oI], q.prototype, "HideStats", 1), (q = re([S.PA], q));
        let ae = class extends f.Component {
          constructor(e) {
            super(e);
          }
          createBufferedRange(e) {
            let s = this.props.stats,
              i = [],
              n = e ? "vidbuf" : "audbuf",
              r = e
                ? s.GetNumBufferedVideoRanges()
                : s.GetNumBufferedAudioRanges();
            if (r > 0)
              for (let h = 0; h < r; ++h) {
                let p = (0, l.we)(
                    e
                      ? "#DASHPlayerStats_VideoBufferRange"
                      : "#DASHPlayerStats_AudioBufferRange",
                    h,
                  ),
                  D = e
                    ? s.GetBufferedVideoSegmentForDisplay(h)
                    : s.GetBufferedAudioSegmentForDisplay(h);
                i.push(
                  (0, t.jsxs)(
                    "div",
                    {
                      children: [
                        p,
                        " ",
                        (0, t.jsx)("span", {
                          className: "videoStatsValue",
                          children: D,
                        }),
                      ],
                    },
                    n + h,
                  ),
                );
              }
            else {
              let h = (0, l.we)(
                e
                  ? "#DASHPlayerStats_VideoNoRangeInformation"
                  : "#DASHPlayerStats_AudioNoRangeInformation",
              );
              i.push((0, t.jsx)("div", { children: h }, n + "none"));
            }
            return i;
          }
          render() {
            let e = this.props.stats;
            return (0, t.jsxs)("div", {
              className: "dash_video_quick_stats",
              children: [
                (0, t.jsxs)("div", {
                  children: [
                    (0, l.we)("#DASHPlayerStats_BytesReceived"),
                    " ",
                    (0, t.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetBytesReceivedToDisplay(),
                    }),
                  ],
                }),
                this.props.stats.BHasFrameInformation() &&
                  (0, t.jsxs)("div", {
                    children: [
                      (0, l.we)("#DASHPlayerStats_DroppedFrames"),
                      " ",
                      (0, t.jsx)("span", {
                        className: "videoStatsValue",
                        children: e.GetDroppedFramesToDisplay(),
                      }),
                    ],
                  }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, l.we)("#DASHPlayerStats_VideoBuffered"),
                    " ",
                    (0, t.jsxs)("span", {
                      className: "videoStatsValue",
                      children: [e.GetVideoBufferedToDisplay(), " "],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, l.we)("#DASHPlayerStats_AudioBuffered"),
                    " ",
                    (0, t.jsxs)("span", {
                      className: "videoStatsValue",
                      children: [e.GetAudioBufferedToDisplay(), " "],
                    }),
                  ],
                }),
                this.createBufferedRange(!0),
                this.createBufferedRange(!1),
                (0, t.jsxs)("div", {
                  children: [
                    (0, l.we)("#DASHPlayerStats_BandwidthRequired"),
                    " ",
                    (0, t.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetBandwidthRequiredToDisplay(),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, l.we)("#DASHPlayerStats_BandwidthVideo"),
                    " ",
                    (0, t.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetBandwithVideoToDisplay(),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, l.we)("#DASHPlayerStats_BandwidthNums"),
                    " ",
                    (0, t.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetBandwidthStatsToDisplay(),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, l.we)("#DASHPlayerStats_DownloadNums"),
                    " ",
                    (0, t.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetDownloadTimeStatsToDisplay(),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, l.we)("#DASHPlayerStats_ActiveDownloads"),
                    " ",
                    (0, t.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetActiveDownloadsToDisplay(),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, l.we)("#DASHPlayerStats_VideoDownloadProgress"),
                    " ",
                    (0, t.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetVideoDownloadProgressToDisplay(),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, l.we)("#DASHPlayerStats_DroppingFrames"),
                    " ",
                    (0, t.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetPersistentFrameDropsForDisplay(),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, l.we)("#DASHPlayerStats_CurrentFPS"),
                    " ",
                    (0, t.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetCurrentFPSForDisplay(),
                    }),
                  ],
                }),
              ],
            });
          }
        };
        ae = re([S.PA], ae);
        var ee = c(23612),
          ze = "10986482",
          Te = Object.defineProperty,
          je = Object.getOwnPropertyDescriptor,
          M = (e, s, i, n) => {
            for (
              var r = n > 1 ? void 0 : n ? je(s, i) : s, h = e.length - 1, p;
              h >= 0;
              h--
            )
              (p = e[h]) && (r = (n ? p(s, i, r) : p(r)) || r);
            return n && r && Te(s, i, r), r;
          };
        class A extends f.Component {
          m_elSettingsButton;
          m_SettingsButtonPos;
          m_elClickListener = null;
          m_elSettingsPanel = null;
          m_elSubtitlesButton = f.createRef();
          m_elSubtitlesPanel = f.createRef();
          m_SubtitlesButtonPos;
          constructor(s) {
            super(s), (this.state = { bSettingsOpen: !1, bSubtitlesOpen: !1 });
          }
          OnVideoControlClick(s) {
            this.setState({ bSettingsOpen: !this.state.bSettingsOpen }),
              (this.m_SettingsButtonPos = [
                this.m_elSettingsButton.offsetLeft,
                this.m_elSettingsButton.offsetTop,
              ]),
              (this.m_elClickListener =
                s.currentTarget.ownerDocument.defaultView),
              this.m_elClickListener?.addEventListener(
                "mouseup",
                this.OnMouseUp,
                !0,
              );
          }
          OnSubtitlesClick(s) {
            this.setState({ bSubtitlesOpen: !this.state.bSubtitlesOpen }),
              (this.m_SubtitlesButtonPos = [
                this.m_elSubtitlesButton.current?.offsetLeft,
                this.m_elSubtitlesButton.current?.offsetTop,
              ]),
              (this.m_elClickListener =
                s.currentTarget.ownerDocument.defaultView),
              this.m_elClickListener?.addEventListener(
                "mouseup",
                this.OnMouseUp,
                !0,
              );
          }
          OnMouseUp(s) {
            this.m_elClickListener?.removeEventListener(
              "mouseup",
              this.OnMouseUp,
              !0,
            ),
              (0, u.id)(this.m_elSettingsPanel, s.target) ||
                this.setState({ bSettingsOpen: !1 }),
              (0, u.id)(this.m_elSubtitlesPanel.current, s.target) ||
                this.setState({ bSubtitlesOpen: !1 });
          }
          bindSettingsButton(s) {
            this.m_elSettingsButton = s;
          }
          BindSettingsPanel(s) {
            this.m_elSettingsPanel = s;
          }
          OnShowStats(s) {
            this.props.onShowStats(s),
              this.setState({ bSettingsOpen: !this.state.bSettingsOpen });
          }
          render() {
            let s = !1,
              i = !1;
            const { video: n, actions: r } = this.props;
            let h,
              p = [],
              D = 0,
              z = (0, t.jsx)(
                "div",
                { className: "settingsMenuSeparator" },
                "separator",
              );
            const T = 260,
              j = 32;
            if (
              (this.state.bSettingsOpen &&
                ((s = !0),
                (h = this.props.video.GetVideoRepresentations()),
                (p = h.map((O) =>
                  (0, t.jsx)(
                    ee.n,
                    {
                      onClick: () => {
                        this.props.video.SetVideoRepresentation(O),
                          this.setState({
                            bSettingsOpen: !this.state.bSettingsOpen,
                          });
                      },
                      bChecked: O.selected,
                      children: O.displayName,
                    },
                    O.id,
                  ),
                )),
                p.push(z),
                p.push(
                  (0, t.jsxs)(
                    ee.D,
                    {
                      onClick: this.OnShowStats,
                      children: [
                        (0, l.we)("#Broadcast_VideoContext_ToggleStats"),
                        "	",
                      ],
                    },
                    "statsToggle",
                  ),
                ),
                (D = 0 - (p.length * 21 + j))),
              this.state.bSubtitlesOpen)
            ) {
              (i = !0),
                (p = []),
                p.push(
                  (0, t.jsx)(
                    ee.n,
                    {
                      onClick: () => {
                        this.props.video.SetSubtitles(null),
                          this.setState({
                            bSubtitlesOpen: !this.state.bSubtitlesOpen,
                          });
                      },
                      className: "NoSubtitles",
                      bChecked: !1,
                      children: (0, l.we)("#Broadcast_None"),
                    },
                    "none",
                  ),
                );
              for (
                let O = 0;
                O < this.props.video.ListSubtitles().length;
                O++
              ) {
                const N = this.props.video.ListSubtitles()[O];
                p.push(
                  (0, t.jsx)(
                    ee.n,
                    {
                      onClick: () => {
                        this.props.video.SetSubtitles(N.language),
                          this.setState({
                            bSubtitlesOpen: !this.state.bSubtitlesOpen,
                          });
                      },
                      bChecked: N.mode === "showing",
                      children: N.label,
                    },
                    N.language,
                  ),
                );
              }
              D = 0 - (T + j);
            }
            const K =
              this.props.video.BHasPlayer() && this.props.video.BHasTimedText();
            return (0, t.jsxs)("div", {
              className: "STV_BroadcastSettings",
              children: [
                K &&
                  (0, t.jsx)("div", {
                    className:
                      "videoControlButton" + (K ? " ClosedCaptionsActive" : ""),
                    onClick: this.OnSubtitlesClick,
                    ref: this.m_elSubtitlesButton,
                    children: (0, t.jsx)(P.N8C, {}),
                  }),
                (0, t.jsx)("div", {
                  className:
                    "videoControlButton VideoSettings " +
                    (s ? " VideoSettingsOpen" : ""),
                  onClick: this.OnVideoControlClick,
                  ref: this.bindSettingsButton,
                  children: (0, t.jsx)(P.wB_, {}),
                }),
                (0, t.jsx)(E, { video: n }),
                r &&
                  r.map((O) =>
                    (0, t.jsx)(
                      "div",
                      {
                        className: "videoControlButton videoControlFitWidth",
                        children: O,
                      },
                      O.key,
                    ),
                  ),
                s &&
                  (0, t.jsx)("div", {
                    ref: this.BindSettingsPanel,
                    className: "STV_BroadcastSettingsPanel",
                    style: {
                      left: this.m_SettingsButtonPos[0],
                      top: this.m_SettingsButtonPos[1],
                      marginTop: D,
                    },
                    children: (0, t.jsx)("div", {
                      className: "STV_BroadcastSettingsMenuItems",
                      children: p,
                    }),
                  }),
                i &&
                  (0, t.jsx)("div", {
                    ref: this.m_elSubtitlesPanel,
                    className: "STV_BroadcastSettingsPanel SubtitlesMenu",
                    style: {
                      maxHeight: T + "px",
                      left: this.m_SubtitlesButtonPos[0],
                      top: this.m_SubtitlesButtonPos[1],
                      marginTop: D,
                    },
                    children: (0, t.jsx)("div", {
                      className: "STV_BroadcastSettingsMenuItems",
                      children: p,
                    }),
                  }),
              ],
            });
          }
        }
        M([a.oI], A.prototype, "OnVideoControlClick", 1),
          M([a.oI], A.prototype, "OnSubtitlesClick", 1),
          M([a.oI], A.prototype, "OnMouseUp", 1),
          M([a.oI], A.prototype, "bindSettingsButton", 1),
          M([a.oI], A.prototype, "BindSettingsPanel", 1),
          M([a.oI], A.prototype, "OnShowStats", 1);
        const ge = !0;
        let E = class extends f.Component {
          constructor(e) {
            super(e), (0, B.Gn)(this);
          }
          k_nHideSliderTimeout = 1.5 * 1e3;
          m_bShowSlider = ge;
          m_schHideSlider = new o.LU();
          m_bChildDragging = !1;
          m_bMouseOver = !1;
          componentWillUnmount() {
            this.m_schHideSlider.Cancel();
          }
          ToggleMute() {
            let e = this.props.video,
              s = e.IsMuted();
            e.SetMute(!s), e.GetVolume() < 0.01 && e.SetVolume(0.5);
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
                () => (this.m_bShowSlider = ge),
              );
          }
          render() {
            let e = this.props.video,
              s = e.IsMuted(),
              i = e.GetVolume() * 100,
              n = "videoControlButton";
            i > 65
              ? (n += " HighestVolume")
              : i > 45
                ? (n += " HighVolume")
                : i < 46 && i > 24
                  ? (n += " MedVolume")
                  : i < 25 && (n += " LowVolume");
            let r = "BroadcastVolumeControl";
            return (
              this.m_bShowSlider && (r += " ShowVolumeSlider"),
              s && (r += " muted"),
              (0, t.jsx)("div", {
                className: r,
                onMouseEnter: this.OnMouseEnter,
                onMouseLeave: this.OnMouseLeave,
                children: (0, t.jsxs)("div", {
                  className: "BroadcastVolumeControl_FixedLayout",
                  children: [
                    (0, t.jsx)("div", {
                      className: n,
                      onClick: this.ToggleMute,
                      children: (0, t.jsx)(P.fSs, {}),
                    }),
                    (0, t.jsx)(H, { video: e, onDrag: this.OnChildDrag }),
                  ],
                }),
              })
            );
          }
        };
        M([B.sH], E.prototype, "m_bShowSlider", 2),
          M([a.oI], E.prototype, "ToggleMute", 1),
          M([a.oI], E.prototype, "OnMouseEnter", 1),
          M([a.oI], E.prototype, "OnMouseLeave", 1),
          M([a.oI], E.prototype, "OnChildDrag", 1),
          (E = M([S.PA], E));
        let H = class extends f.Component {
          constructor(e) {
            super(e), (0, B.Gn)(this);
          }
          m_elSlider = null;
          m_nVolumeStartOfDrag = 0;
          OnMouseDown(e) {
            let s = e.currentTarget;
            (this.m_elSlider = s),
              (this.m_nVolumeStartOfDrag = this.props.video.GetVolume()),
              this.SetVolumeWithCoord(s, e.clientX),
              s.ownerDocument.defaultView?.addEventListener(
                "mousemove",
                this.OnMouseMove,
              ),
              s.ownerDocument.defaultView?.addEventListener(
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
            let s = this.props.video;
            s.IsMuted() && s.SetVolume(this.m_nVolumeStartOfDrag),
              this.m_elSlider.ownerDocument.defaultView?.removeEventListener(
                "mousemove",
                this.OnMouseMove,
              ),
              this.m_elSlider.ownerDocument.defaultView?.removeEventListener(
                "mouseup",
                this.OnMouseUp,
              ),
              (this.m_nVolumeStartOfDrag = 0),
              (this.m_elSlider = null),
              this.props.onDrag(!1);
          }
          SetVolumeWithCoord(e, s) {
            let i = e.getBoundingClientRect(),
              n = C.Fu(s, i.left, i.right, 0, 1),
              r = C.OQ(n, 0, 1),
              h = this.props.video;
            h.SetMute(n < 0.01), h.SetVolume(r);
          }
          render() {
            let e = this.props.video,
              s = e.GetVolume() * 100;
            e.IsMuted() && (s = 0);
            let n = { left: `${s}%` },
              r = { width: `${s}%` };
            return (0, t.jsxs)("div", {
              className: "BroadcastVolumeSlider",
              onMouseDown: this.OnMouseDown,
              children: [
                (0, t.jsx)("div", { className: "BroadcastVolumeSlider_Track" }),
                (0, t.jsx)("div", {
                  className: "BroadcastVolumeSlider_Fill",
                  style: r,
                }),
                (0, t.jsx)("div", {
                  className: "BroadcastVolumeSlider_Thumb",
                  style: n,
                }),
              ],
            });
          }
        };
        M([a.oI], H.prototype, "OnMouseDown", 1),
          M([a.oI], H.prototype, "OnMouseMove", 1),
          M([a.oI], H.prototype, "OnMouseUp", 1),
          M([B.XI], H.prototype, "SetVolumeWithCoord", 1),
          (H = M([S.PA], H));
        var Ve = c(26795),
          Xe = "10986482",
          Ie = Object.defineProperty,
          Re = Object.getOwnPropertyDescriptor,
          d = (e, s, i, n) => {
            for (
              var r = n > 1 ? void 0 : n ? Re(s, i) : s, h = e.length - 1, p;
              h >= 0;
              h--
            )
              (p = e[h]) && (r = (n ? p(s, i, r) : p(r)) || r);
            return n && r && Ie(s, i, r), r;
          };
        const fe = 3200,
          U = 15;
        let x = class extends f.Component {
          m_schHideControls = new o.LU();
          m_schUnmountControls = new o.LU();
          m_elVideo = null;
          m_elBroadcastPlayer = null;
          m_bMouseDown = !1;
          m_elMouseDown = null;
          m_listeners = new o.Ji();
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
              (v.BroadcastWatchStore.StopVideo(e),
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
          componentDidUpdate(e, s) {
            !s.bMountControls && this.state.bMountControls
              ? setTimeout(() => {
                  this.setState((n) => ({
                    bControlsVisible: n.bMountControls,
                  }));
                }, 15)
              : s.bControlsVisible &&
                !this.state.bControlsVisible &&
                this.state.video &&
                !this.state.video.IsPaused() &&
                this.m_schUnmountControls.Schedule(2e3, this.UmountControls),
              this.props.steamIDBroadcast !== e.steamIDBroadcast &&
                this.BindVideoRef(this.m_elVideo);
            const i = this.props.nAppIDVOD;
            i &&
              (s.strInitialCapsuleImageUrl === void 0 || e.nAppIDVOD != i) &&
              Z.A.Get()
                .QueueAppRequest(i, {
                  include_assets: !0,
                  include_trailers: !0,
                })
                .then(() => {
                  const r =
                    Z.A.Get().GetApp(i)?.GetAssets()?.GetMainCapsuleURL() || "";
                  this.setState({ strInitialCapsuleImageUrl: r });
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
            let s = null;
            this.StopVideo(),
              this.props.steamIDBroadcast
                ? e &&
                  (s = v.BroadcastWatchStore.CreateBroadcastVideo(
                    e,
                    this.props.steamIDBroadcast,
                    this.props.watchLocation,
                    !!this.props.bWebRTC,
                  ))
                : this.props.broadcastClipID
                  ? e &&
                    (s = v.BroadcastWatchStore.CreateClipVideo(
                      e,
                      this.props.broadcastClipID,
                      this.props.watchLocation,
                    ))
                  : this.props.nAppIDVOD &&
                    e &&
                    ((s = v.BroadcastWatchStore.CreateVODVideo(
                      e,
                      this.props.nAppIDVOD,
                      this.props.watchLocation,
                    )),
                    this.props.fnOnVideoEnd &&
                      s.SetOnVideoCallback(this.props.fnOnVideoEnd)),
              s &&
                (this.props.bStartMuted && s.SetMute(!0),
                this.props.bStartWithSubtitles && s.SetStartWithSubtitles(!0),
                this.props.bStartPaused
                  ? s.StopPlaybackTillUserInput()
                  : s.Play()),
              this.setState({ video: s }),
              this.props.fnSetBroadcastVideo?.(s),
              (this.m_elVideo = e);
          }
          OnMouseDown(e) {
            (this.m_bMouseDown = !0),
              (this.m_elMouseDown = e.currentTarget),
              this.m_elMouseDown.ownerDocument.defaultView?.addEventListener(
                "mouseup",
                this.OnMouseUp,
              );
          }
          OnMouseUp(e) {
            (this.m_bMouseDown = !1),
              this.m_elMouseDown?.ownerDocument.defaultView?.removeEventListener(
                "mouseup",
                this.OnMouseUp,
              ),
              this.m_schHideControls.Schedule(fe, this.HideControls);
          }
          OnMouseMove(e) {
            this.m_schHideControls.Cancel(),
              this.m_schUnmountControls.Cancel(),
              this.state.bMountControls
                ? this.state.bControlsVisible ||
                  this.setState({ bControlsVisible: !0 })
                : this.setState({ bMountControls: !0 }),
              this.m_schHideControls.Schedule(fe, this.HideControls);
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
            this.setState((e) =>
              !e.bControlsVisible && e.bMountControls
                ? { bMountControls: !1 }
                : null,
            );
          }
          ShowStatsView() {
            let e = this.state.video;
            if (!e) return;
            this.state.bShowStats ||
              (this.setState({ bShowStats: !0 }), e.SetStatsViewIsVisible(!0));
          }
          OnContextMenu(e) {
            this.state.bFullscreen ||
              ((0, Q.lX)(
                (0, t.jsx)(_.tz, { children: this.GetContextMenuItems() }),
                e,
              ),
              e.preventDefault());
          }
          ToggleStatsView(e) {
            let s = !this.state.bShowStats;
            this.setState({ bShowStats: s });
            let i = this.state.video;
            i && i.SetStatsViewIsVisible(s);
          }
          ShowStorePage(e) {
            let s = this.state.video;
            if (!s || !this.props.onOpenLinkInNewWindow) return;
            let i = s.GetBroadcastInfo();
            if (!i) return;
            let n = (0, G.k2)(`${ne.TS.STORE_BASE_URL}app/${i.m_strAppId}`);
            this.props.onOpenLinkInNewWindow(e, n), e.stopPropagation();
          }
          GetContextMenuItems() {
            let e = [],
              s = this.state.video;
            if (!s) return e;
            let i = s.GetBroadcastInfo();
            return (
              e.push(
                (0, t.jsx)(
                  _.IK,
                  {
                    bChecked: this.state.bShowStats,
                    onSelected: (n) => {
                      this.ToggleStatsView(n);
                    },
                    children: (0, l.we)("#Broadcast_VideoContext_ToggleStats"),
                  },
                  "togglestats",
                ),
              ),
              i &&
                i.m_strAppId != "0" &&
                Number.parseInt(i.m_strAppId) != v.fO &&
                e.push(
                  (0, t.jsx)(
                    _.kt,
                    {
                      onSelected: (n) => {
                        this.ShowStorePage(n);
                      },
                      children: (0, l.we)("#Broadcast_VideoContext_OpenStore"),
                    },
                    "visitstore",
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
              ((0, u.ww)(this.m_elBroadcastPlayer)
                ? (0, u.MS)(this.m_elBroadcastPlayer)
                : (0, u.tl)(
                    this.m_elBroadcastPlayer,
                    this.m_elVideo ?? void 0,
                  ));
          }
          OnFullscreenChange(e) {
            if (!this.m_elBroadcastPlayer) return;
            let s = (0, u.ww)(this.m_elBroadcastPlayer);
            this.setState({ bFullscreen: s });
          }
          BHideVideoControls() {
            let e = this.state.video;
            return !e || e.GetUserInputNeeded()
              ? !0
              : v.BroadcastWatchStore.GetBroadcastState(e) == v.fK.Error;
          }
          render() {
            const e = this.state.video,
              s = e && e.IsPaused(),
              i = e && e.BHasDASHStats() && this.state.bShowStats,
              n = !!(e && e.IsReplay()),
              r = this.state.bMountControls,
              h = this.state.bControlsVisible || s,
              p = !!(e && e.GetUserInputNeeded()),
              D = e?.GetDASHPlayerStats(),
              z =
                e?.IsBroadcastVOD() &&
                p &&
                this.state.strInitialCapsuleImageUrl;
            let T = "videoContainer";
            h || (T += " HidePlayerControls"),
              s && (T += " VideoPaused"),
              this.state.bFullscreen && (T += " fullscreenVideo"),
              this.props.classes && (T += " " + this.props.classes);
            let j = [];
            !this.state.bFullscreen &&
              this.props.actions &&
              (j = j.concat(this.props.actions)),
              !this.state.bFullscreen &&
                this.props.onTheaterMode &&
                j.push(
                  (0, t.jsx)(
                    "div",
                    {
                      onClick: this.props.onTheaterMode,
                      title: (0, l.we)("#Broadcast_View_Theater"),
                      className: "BroadcastTheaterToggle",
                    },
                    "ChatPosToggle ChatTheaterToggle",
                  ),
                ),
              j.push(
                (0, t.jsx)(
                  "div",
                  {
                    title: (0, l.we)("#Broadcast_View_Fullscreen"),
                    onClick: this.OnToggleFullscreen,
                    className: "BroadcastFullscreenToggle",
                  },
                  "FullscreenToggle",
                ),
              );
            const X = r && !this.BHideVideoControls(),
              K = r && !this.state.bFullscreen,
              O =
                this.props.fnRenderBroadcastContext &&
                this.props.fnRenderBroadcastContext();
            return (0, t.jsxs)("div", {
              ref: this.BindBroadcastPlayerRef,
              className: T,
              onMouseMove: this.OnMouseMove,
              onClick: this.OnMouseMove,
              onMouseLeave: this.OnMouseLeave,
              onContextMenu: this.OnContextMenu,
              onMouseDown: this.OnMouseDown,
              children: [
                O &&
                  (0, t.jsx)("div", {
                    className: ve().BroadcastContext,
                    children: O,
                  }),
                n && (0, t.jsx)(ke, {}),
                this.props.showVideoBackgroundBlur &&
                  this.m_elVideo &&
                  (0, t.jsx)(m.m, {
                    className: "videoBlur",
                    elementRef: this.m_elVideo,
                    updateRate: 33,
                    width: 320,
                    height: 180,
                    reductionFactor: 10,
                    blurAmount: 5,
                  }),
                (0, t.jsx)("video", {
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
                  ? (0, t.jsx)(I, {
                      linkRegions: this.props.linkRegions,
                      editMode: !!this.props.editMode,
                      onSaveLinkRegions: this.props.onSaveLinkRegions,
                    })
                  : null,
                this.props.linkElement,
                z &&
                  (0, t.jsx)("img", {
                    loading: "lazy",
                    className: (0, g.A)(
                      ve().BroadcastPlaceholderImg,
                      "BroadcastPlaceholderImg",
                    ),
                    src: this.state.strInitialCapsuleImageUrl,
                  }),
                X &&
                  e &&
                  (0, t.jsx)(le, {
                    video: e,
                    actions: j,
                    onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                    onShowStats: this.ToggleStatsView,
                    bIncludeClipEditor: !!this.props.bIncludeClipEditor,
                  }),
                K && (0, t.jsx)(Ee, { onClick: this.props.onRequestClose }),
                i &&
                  D &&
                  (0, t.jsx)(q, { stats: D, closeStats: this.CloseStats }),
                (0, t.jsx)(ye, { video: e }),
                p && e && (0, t.jsx)(Se, { video: e }),
              ],
            });
          }
        };
        d([a.oI], x.prototype, "BindBroadcastPlayerRef", 1),
          d([a.oI], x.prototype, "BindVideoRef", 1),
          d([a.oI], x.prototype, "OnMouseDown", 1),
          d([a.oI], x.prototype, "OnMouseUp", 1),
          d([a.oI], x.prototype, "OnMouseMove", 1),
          d([a.oI], x.prototype, "OnMouseLeave", 1),
          d([a.oI], x.prototype, "HideControls", 1),
          d([a.oI], x.prototype, "UmountControls", 1),
          d([a.oI], x.prototype, "ShowStatsView", 1),
          d([a.oI], x.prototype, "OnContextMenu", 1),
          d([a.oI], x.prototype, "ToggleStatsView", 1),
          d([a.oI], x.prototype, "ShowStorePage", 1),
          d([a.oI], x.prototype, "CloseStats", 1),
          d([a.oI], x.prototype, "OnToggleFullscreen", 1),
          d([a.oI], x.prototype, "OnFullscreenChange", 1),
          (x = d([S.PA], x));
        let le = class extends f.Component {
          render() {
            const { video: e } = this.props;
            if (!e) return null;
            let s = e.has_segments;
            return (0, t.jsxs)("div", {
              className: "videoControls",
              children: [
                (0, t.jsx)(se, {
                  steamID: this.props.video.GetBroadcastSteamID(),
                  bHideThumbnail: !0,
                  bVerticalBroadcastChat: !0,
                  onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                }),
                (0, t.jsxs)("div", {
                  className: "videoControlsBottom" + (s ? "" : " noSegments"),
                  children: [
                    (0, t.jsx)(y, {
                      video: e,
                      bIncludeClipEditor: this.props.bIncludeClipEditor,
                    }),
                    (0, t.jsxs)("div", {
                      className: "STV_BroadcastController",
                      children: [
                        (0, t.jsx)("div", {
                          className: "videoControlsButtons LeftSpacer",
                        }),
                        (0, t.jsx)(de, { video: e }),
                        (0, t.jsx)(Ne, { video: e }),
                        (0, t.jsx)(A, {
                          video: e,
                          actions: this.props.actions,
                          onShowStats: this.props.onShowStats,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }
        };
        le = d([S.PA], le);
        class Ee extends f.PureComponent {
          render() {
            return this.props.onClick
              ? (0, t.jsx)("div", {
                  className: "STV_BroadcastClose",
                  onClick: this.props.onClick,
                  children: (0, t.jsx)(P.sED, {}),
                })
              : null;
          }
        }
        class de extends f.Component {
          OnJumpBackward() {
            this.props.video.JumpTime(-U);
          }
          OnJumpForward() {
            this.props.video.JumpTime(U);
          }
          render() {
            let s = this.props.video,
              i = s.CanSeek();
            return (0, t.jsxs)("div", {
              className: "videoControlsButtons PlayControls",
              children: [
                (0, t.jsx)(F, { video: s }),
                i &&
                  (0, t.jsxs)("div", {
                    className:
                      "videoControlButton videoControlJump controlFlip",
                    onClick: this.OnJumpBackward,
                    children: [
                      (0, t.jsx)(P.tID, {
                        bHidePostArrow: !0,
                        bHidePreArrow: !0,
                        bShowJumpAheadBox: !0,
                        bFlipHorizontal: !0,
                      }),
                      (0, t.jsx)("div", {
                        className: "jumpAheadValue",
                        children: U,
                      }),
                    ],
                  }),
                (0, t.jsx)(te, { video: s }),
                i &&
                  (0, t.jsxs)("div", {
                    className: "videoControlButton videoControlJump",
                    onClick: this.OnJumpForward,
                    children: [
                      (0, t.jsx)(P.tID, {
                        bHidePostArrow: !0,
                        bHidePreArrow: !0,
                        bShowJumpAheadBox: !0,
                        bFlipHorizontal: !1,
                      }),
                      (0, t.jsx)("div", {
                        className: "jumpAheadValue",
                        children: U,
                      }),
                    ],
                  }),
                i && (0, t.jsx)(W, { video: s }),
              ],
            });
          }
        }
        d([a.oI], de.prototype, "OnJumpBackward", 1),
          d([a.oI], de.prototype, "OnJumpForward", 1);
        const Ne = (0, S.PA)((e) => {
          if (e.video.IsBroadcastClip() || e.video.IsBroadcastVOD())
            return null;
          const s = (n) => {
            e.video.JumpToLiveEdge();
          };
          let i = e.video.IsOnLiveEdge();
          return (0, t.jsx)("div", {
            className: "videoControlsButtons GoLive",
            children: (0, t.jsxs)("div", {
              className:
                "videoControlButton videoControlGoLive" +
                (i ? " isLiveEdge" : ""),
              onClick: i ? void 0 : s,
              children: [
                (0, t.jsx)(P.tID, {
                  bHidePreArrow: !0,
                  bHidePostArrow: !0,
                  bFlipHorizontal: !1,
                }),
                (0, t.jsx)("div", {
                  className: "jumpGoLive",
                  children: (0, l.we)(
                    i
                      ? "#DASHPlayerControls_IsLive"
                      : "#DASHPlayerControls_GoLive",
                  ),
                }),
              ],
            }),
          });
        });
        let te = class extends f.Component {
          OnTogglePlayPause() {
            this.props.video.TogglePlayPause();
          }
          render() {
            let s = this.props.video.IsPaused();
            return (0, t.jsx)("div", {
              className: "videoControlButton buttonPlayPause",
              onClick: this.OnTogglePlayPause,
              children: s ? (0, t.jsx)(P.jGG, {}) : (0, t.jsx)(P.vRz, {}),
            });
          }
        };
        d([a.oI], te.prototype, "OnTogglePlayPause", 1), (te = d([S.PA], te));
        let F = class extends f.Component {
          constructor(e) {
            super(e), (0, B.Gn)(this), (this.video = e.video);
          }
          componentDidUpdate() {
            this.video = this.props.video;
          }
          video = void 0;
          get has_previous_marker() {
            return this.GetPreviousMarkerTime() !== void 0;
          }
          GetPreviousMarkerTime() {
            const e = this.video;
            if (!e?.has_markers) return;
            let s = e.GetTimelineMarkers(),
              i = e.GetPlaybackTime();
            for (let n = s.length - 1; n >= 0; n--)
              if (!(s[n].nTime >= i)) return s[n].nTime;
          }
          OnJumpToPreviousMarkerClicked(e) {
            let s = this.GetPreviousMarkerTime();
            s !== void 0 && this.props.video.Seek(s - 0.2);
          }
          render() {
            let e = this.props.video.BHasMarkersOrSegments();
            return (0, t.jsx)("div", {
              className:
                "videoControlButton jumpToMarker controlFlip" +
                (e ? "" : " noMarkersOrSegments") +
                (this.has_previous_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToPreviousMarkerClicked,
              children: (0, t.jsx)(P.tID, {
                bHidePostArrow: !0,
                bFlipHorizontal: !0,
              }),
            });
          }
        };
        d([B.sH], F.prototype, "video", 2),
          d([B.EW], F.prototype, "has_previous_marker", 1),
          d([a.oI], F.prototype, "OnJumpToPreviousMarkerClicked", 1),
          (F = d([S.PA], F));
        let W = class extends f.Component {
          constructor(e) {
            super(e), (0, B.Gn)(this), (this.video = e.video);
          }
          componentDidUpdate() {
            this.video = this.props.video;
          }
          video = void 0;
          get has_next_marker() {
            return this.GetNextMarkerTime() !== void 0;
          }
          GetNextMarkerTime() {
            const e = this.video;
            if (!e?.has_markers) return;
            let s = e.GetTimelineMarkers(),
              i = e.GetPlaybackTime();
            for (let n = 0; n < s.length; n++)
              if (!(s[n].nTime <= i)) return s[n].nTime;
          }
          OnJumpToNextMarkerClicked(e) {
            let s = this.GetNextMarkerTime();
            s !== void 0 && this.props.video.Seek(s);
          }
          render() {
            let e = this.props.video.BHasMarkersOrSegments();
            return (0, t.jsx)("div", {
              className:
                "videoControlButton jumpToMarker" +
                (e ? "" : " noMarkersOrSegments") +
                (this.has_next_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToNextMarkerClicked,
              children: (0, t.jsx)(P.tID, {
                bHidePostArrow: !0,
                bFlipHorizontal: !1,
              }),
            });
          }
        };
        d([B.sH], W.prototype, "video", 2),
          d([B.EW], W.prototype, "has_next_marker", 1),
          d([a.oI], W.prototype, "OnJumpToNextMarkerClicked", 1),
          (W = d([S.PA], W));
        const ce = (e) => {
          let s = () => e.onMouseEnter(e.pos);
          return (0, t.jsx)("div", {
            className: "timelineMarker",
            title: e.label,
            style: { left: e.pos + "%" },
            onMouseEnter: s,
            onMouseLeave: e.onMouseLeave,
            onMouseDown: e.onMouseDown ? e.onMouseDown : void 0,
            children: (0, t.jsx)("div", {
              className: "timelineMarkerIcon",
              children: (0, t.jsx)(P.Dp6, {}),
            }),
          });
        };
        function Ae(e) {
          let s = e.startPos,
            i = e.endPos,
            n = "",
            r = 1;
          return (
            s < 0 && ((r = (i - s) / 10), (s = 0), (n = " hideFront")),
            (0, t.jsxs)("div", {
              className: "STV_timelineSegment" + n,
              style: { left: s + "%", width: i - s + "%", opacity: r },
              onClick: e.onClick,
              children: [
                (0, t.jsx)("div", {
                  className: "STV_timelineSegmentFrontFill",
                  style: { borderColor: "rgb(" + e.color + ")" },
                }),
                (0, t.jsx)("div", {
                  className: "STV_timelineSegmentLabel",
                  style: { color: "rgb(" + e.color + ")" },
                  children: e.label,
                }),
                (0, t.jsx)("div", {
                  className: "STV_timelineSegmentBackFill",
                  style: { borderColor: "rgb(" + e.color + ")" },
                }),
              ],
            })
          );
        }
        let y = class extends f.Component {
          m_elSlider = f.createRef();
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
          OnMouseDown(e, s) {
            const i = this.m_elSlider.current;
            if (i) {
              e.persist(), (this.m_rectSlider = i.getBoundingClientRect());
              let n = {};
              s === "start"
                ? ((n = { bStartMouseDown: !0 }), e.stopPropagation())
                : s === "end"
                  ? ((n = { bEndMouseDown: !0 }), e.stopPropagation())
                  : (n = { bGrabberMouseDown: !0 }),
                this.setState(n, () => this.AdjustSliderForClientX(e.clientX)),
                i.ownerDocument.defaultView?.addEventListener(
                  "mousemove",
                  this.OnMouseMove,
                ),
                i.ownerDocument.defaultView?.addEventListener(
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
                (this.m_elSlider.current.ownerDocument.defaultView?.removeEventListener(
                  "mousemove",
                  this.OnMouseMove,
                ),
                this.m_elSlider.current.ownerDocument.defaultView?.removeEventListener(
                  "mouseup",
                  this.OnMouseUp,
                ));
          }
          OnKeyDown(e) {
            e.keyCode == R.ek
              ? (this.props.video.JumpTime(-1 * U), e.preventDefault())
              : e.keyCode == R.JI &&
                (this.props.video.JumpTime(1 * U), e.preventDefault());
          }
          AdjustSliderForClientX(e) {
            const s = this.m_rectSlider;
            if (!s) return;
            let i = this.props.video,
              n = i.GetTimelineStartPos(),
              r = i.GetTimelineStartPos() + i.GetTimelineDuration(),
              h = i.GetTimeAtMousePosition(e, s, n, r);
            const p = 5;
            if (this.state.bStartMouseDown) {
              const D = C.OQ(h, n, i.m_editorEndTime - p);
              i.m_editorStartTime = D;
            } else if (this.state.bEndMouseDown) {
              const D = C.OQ(h, i.m_editorStartTime + p, r);
              i.m_editorEndTime = D;
            } else
              h != this.state.nGrabberMouseDownTime &&
                this.setState({ nGrabberMouseDownTime: h });
          }
          OnMouseHoverMove(e) {
            this.AdjustHoverForClientX(e.clientX);
          }
          OnMouseHoverLeave(e) {
            this.setState({ hoverX: 0 });
          }
          AdjustHoverForClientX(e) {
            let s = this.props.video,
              i = s.GetTimelineStartPos(),
              n = s.GetTimelineStartPos() + s.GetTimelineDuration();
            this.m_rectSlider =
              this.m_elSlider.current?.getBoundingClientRect();
            let r =
              this.m_rectSlider &&
              s.GetTimeAtMousePosition(e, this.m_rectSlider, i, n);
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
              s = this.state.bGrabberMouseDown,
              i = e.GetPercentOffsetFromTime(
                this.state.nGrabberMouseDownTime,
                v.a0.Timeline,
              ),
              n = e.GetPercentOffsetFromTime(
                e.GetPlaybackTime(),
                v.a0.Timeline,
              ),
              r = e.GetPercentOffsetFromTime(
                e.GetVideoAvailableStartTime(),
                v.a0.Timeline,
              );
            r < 0.05 && (r = 0);
            let h = C.OQ(i, 0, 100).toFixed(1) + "%",
              p = C.OQ(n, 0, 100).toFixed(1) + "%",
              D = C.OQ(r, 0, 100).toFixed(1) + "%",
              z = {},
              T = {},
              j = {},
              X = {};
            s
              ? ((X.left = h), (z.width = h), (T.width = p), (j.width = D))
              : ((X.left = p), (T.width = p), (j.width = D));
            let K = (0, me.ap)(e.GetPlaybackTime()),
              O = (0, me.ap)(this.state.nHoverValue ?? 0),
              N = "STV_timelineContainer";
            this.state.bGrabberMouseDown && (N += " grabberDown"),
              e.IsTimelineMapActive() && (N += " minimapActive");
            let he = "";
            (i = s ? i : n),
              i > 100
                ? (he = " grabberOffScreenRight grabberOffscreen")
                : i < 0 && (he = " grabberOffScreenLeft grabberOffscreen");
            let be = [];
            e.GetTimelineMarkers().forEach((V, ue) => {
              let J = e.GetPercentOffsetFromTime(V.nTime, v.a0.Timeline);
              J < 0 ||
                J > 100 ||
                be.push(
                  (0, t.jsx)(
                    ce,
                    {
                      pos: J,
                      label: V.strTemplateName,
                      onMouseEnter: this.OnMarkerMouseEnter,
                      onMouseLeave: this.OnMarkerMouseLeave,
                    },
                    ue,
                  ),
                );
            });
            let Ce = [];
            e.GetTimelineSegments().forEach((V, ue) => {
              let J = e.GetPercentOffsetFromTime(V.nTimeStart, v.a0.Timeline);
              if (J > 100) return;
              let xe = e.GetPercentOffsetFromTime(V.nTimeEnd, v.a0.Timeline);
              xe < 0 ||
                Ce.push(
                  (0, t.jsx)(
                    Ae,
                    {
                      startPos: J,
                      endPos: xe,
                      label: V.strTemplateName,
                      color: V.color,
                      onClick: (Ke) => this.OnSegmentClick(V.nTimeStart),
                    },
                    ue,
                  ),
                );
            });
            const He = e.GetPercentOffsetFromTime(
                e.m_editorStartTime,
                v.a0.Timeline,
              ),
              Ge = e.GetPercentOffsetFromTime(e.m_editorEndTime, v.a0.Timeline),
              Ue = this.props.bIncludeClipEditor
                ? [
                    (0, t.jsx)(
                      ce,
                      {
                        pos: He,
                        label: (0, l.we)("#DASHPlayerControls_Start"),
                        onMouseEnter: this.OnMarkerMouseEnter,
                        onMouseLeave: this.OnMarkerMouseLeave,
                        onMouseDown: (V) => this.OnMouseDown(V, "start"),
                      },
                      "start",
                    ),
                    (0, t.jsx)(
                      ce,
                      {
                        pos: Ge,
                        label: (0, l.we)("#DASHPlayerControls_End"),
                        onMouseEnter: this.OnMarkerMouseEnter,
                        onMouseLeave: this.OnMarkerMouseLeave,
                        onMouseDown: (V) => this.OnMouseDown(V, "end"),
                      },
                      "end",
                    ),
                  ]
                : [];
            return (0, t.jsx)("div", {
              className: "videoTimelineMain",
              tabIndex: 0,
              onKeyDown: this.OnKeyDown,
              children: (0, t.jsxs)("div", {
                className: N,
                children: [
                  (0, t.jsx)("div", { className: "DialogLabel", children: K }),
                  (0, t.jsx)("div", {
                    className: "STV_timelineSegmentsContainer",
                    children: Ce,
                  }),
                  (0, t.jsx)("div", {
                    onMouseDown: this.OnMouseDown,
                    onMouseMove: this.OnMouseHoverMove,
                    onMouseLeave: this.OnMouseHoverLeave,
                    ref: this.m_elSlider,
                    children: (0, t.jsxs)("div", {
                      className: "VideoTimelineSlider",
                      children: [
                        (0, t.jsx)("div", {
                          className: "STV_timelineValue",
                          style: z,
                        }),
                        (0, t.jsx)("div", {
                          className: "STV_timelineGhostValue",
                          style: T,
                        }),
                        (0, t.jsx)("div", {
                          className: "STV_timelineNoVideo",
                          style: j,
                        }),
                        be,
                        Ue,
                        !!this.state.hoverX &&
                          (0, t.jsx)(
                            "div",
                            {
                              style: {
                                position: "absolute",
                                left: this.state.hoverX - 75,
                                bottom: "30px",
                              },
                              children: (0, t.jsxs)("div", {
                                style: {
                                  position: "relative",
                                  display: "flex",
                                  justifyContent: "center",
                                },
                                children: [
                                  this.state.thumbnailURL &&
                                    (0, t.jsx)("img", {
                                      style: { width: "150px" },
                                      src: this.state.thumbnailURL,
                                    }),
                                  (0, t.jsx)("span", {
                                    className: "STV_timelineGrabberValue",
                                    style: {
                                      position: "absolute",
                                      bottom: "4px",
                                    },
                                    children: O,
                                  }),
                                ],
                              }),
                            },
                            "grabbertime",
                          ),
                        (0, t.jsx)("div", {
                          className: "STV_timelineGrabber_Wrapper",
                          style: X,
                          children: (0, t.jsx)("div", {
                            className: "STV_timelineGrabber" + he,
                            children: (0, t.jsx)("div", {
                              className: "STV_timelineGrabberArrow",
                              children: (0, t.jsx)(P.apU, {}),
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            });
          }
        };
        d([a.oI], y.prototype, "OnMouseDown", 1),
          d([a.oI], y.prototype, "OnMouseMove", 1),
          d([a.oI], y.prototype, "OnMouseUp", 1),
          d([a.oI], y.prototype, "OnKeyDown", 1),
          d([a.oI], y.prototype, "OnMouseHoverMove", 1),
          d([a.oI], y.prototype, "OnMouseHoverLeave", 1),
          d([a.oI], y.prototype, "AdjustHoverForClientX", 1),
          d([a.oI], y.prototype, "OnSegmentClick", 1),
          d([a.oI], y.prototype, "OnMarkerMouseEnter", 1),
          d([a.oI], y.prototype, "OnMarkerMouseLeave", 1),
          (y = d([S.PA], y));
        let se = class extends f.Component {
          state = { info: null };
          static getDerivedStateFromProps(e, s) {
            return (!s.info || s.info.m_steamIDBroadcast !== e.steamID) &&
              (s.info &&
                (v.BroadcastWatchStore.StopInfo(s.info), (s.info = null)),
              e.steamID)
              ? { info: v.BroadcastWatchStore.StartInfo(e.steamID) }
              : null;
          }
          componentWillUnmount() {
            this.state.info && v.BroadcastWatchStore.StopInfo(this.state.info);
          }
          RenderStreamSwitcher() {
            const e = this.props.steamID,
              s = this.props.onLocalStreamChange;
            return s && w.td.stream[e]
              ? (0, t.jsx)(Pe, { value: e, options: w.td.stream, onChange: s })
              : null;
          }
          render() {
            let { info: e } = this.state;
            if (!e) return null;
            let s = "";
            e.m_nViewerCount && (s = (0, b.Dq)(e.m_nViewerCount));
            let i =
                w.td.bValid && w.td.stream && w.td.stream[e.m_steamIDBroadcast],
              n =
                !this.props.bHideThumbnail &&
                this.props.bVerticalBroadcastChat &&
                (parseInt(e.m_strAppId) > 0 || i);
            const r =
              !this.props.bHideThumbnail &&
              this.props.bVerticalBroadcastChat &&
              i &&
              w.td.gidEvent;
            return (0, t.jsxs)("div", {
              className: "BroadcastDetails",
              children: [
                !this.props.bHideThumbnail &&
                  (0, t.jsx)(pe.y, {
                    className: "broadcastDetailsThumbBlur",
                    src: e.m_strThumbnailUrl,
                    draggable: !1,
                    duration: 2500,
                  }),
                (0, t.jsxs)("div", {
                  className: "BroadcastDetailsHeader",
                  children: [
                    e &&
                      e.m_strAppTitle &&
                      (0, t.jsxs)("div", {
                        className: "displayColumn",
                        children: [
                          (0, t.jsxs)("div", {
                            className: "Info",
                            children: [
                              (0, t.jsx)("span", {
                                className: "AppTitle",
                                children: e.m_strAppTitle,
                              }),
                              e.m_strTitle &&
                                (0, t.jsxs)("span", {
                                  className: "BroadcastTitle",
                                  children: ["\xA0- ", e.m_strTitle],
                                }),
                              this.props.onLocalStreamChange &&
                                this.RenderStreamSwitcher(),
                            ],
                          }),
                          s &&
                            (0, t.jsxs)("div", {
                              className: "BroadcastDetailsHeader_ViewerCount",
                              children: [
                                (0, t.jsx)(P.y_e, {}),
                                (0, l.Yp)("#Broadcast_ViewerCount", s),
                              ],
                            }),
                        ],
                      }),
                    i &&
                      this.props.onOpenLinkInNewWindow &&
                      (0, t.jsx)("div", {
                        className: "Actions",
                        children: (0, t.jsx)("div", {
                          onClick: (h) =>
                            this.props.onOpenLinkInNewWindow?.(h, w.td.link),
                          className: "BroadcastLink",
                          children: w.td.linkName,
                        }),
                      }),
                  ],
                }),
                r && (0, t.jsx)(oe.m, { gidEvent: w.td.gidEvent }),
                n &&
                  (0, t.jsx)(ie.p, {
                    id:
                      w.td.bValid &&
                      w.td.stream &&
                      w.td.stream[e.m_steamIDBroadcast]
                        ? w.td.appID
                        : parseInt(e.m_strAppId),
                    type: "game",
                    bPreferAssetWithoutOverride: !1,
                  }),
              ],
            });
          }
        };
        se = d([S.PA], se);
        class Pe extends f.Component {
          showContextMenu(s) {
            const { options: i, value: n, onChange: r } = this.props,
              h = Object.keys(i).map((p) =>
                (0, t.jsx)(
                  _.IK,
                  {
                    onSelected: () => r(p),
                    bChecked: p === n,
                    children: (0, l.we)(i[p]),
                  },
                  p,
                ),
              );
            (0, Q.lX)((0, t.jsx)(_.tz, { children: h }), s);
          }
          render() {
            const { value: s, options: i } = this.props,
              n = i[s];
            return (0, t.jsxs)("div", {
              className: "BroadcastLanguage",
              onClick: this.showContextMenu,
              children: [
                (0, t.jsxs)("span", { children: ["\xA0- ", (0, l.we)(n)] }),
                (0, t.jsx)("div", {
                  className: "ContextMenuButton",
                  children: (0, t.jsx)(P.GB9, {}),
                }),
              ],
            });
          }
        }
        d([a.oI], Pe.prototype, "showContextMenu", 1);
        let I = class extends f.Component {
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
            e.linkRegions.length == 0 &&
              this.props.linkRegions.forEach((s, i) => {
                this.LoadLinkRegion(s, i);
              });
          }
          async LoadLinkRegion(e, s) {
            let i = this.state.sizableRegion.length;
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
            for (let s = 0; s < this.state.sizableRegion.length; s++) {
              let i;
              (i = {
                left: Math.floor(this.state.sizableRegion[s].xPosPct * 100),
                top: Math.floor(this.state.sizableRegion[s].yPosPct * 100),
                width: Math.floor(this.state.sizableRegion[s].widthPct * 100),
                height: Math.floor(this.state.sizableRegion[s].heightPct * 100),
                url: this.state.sizableRegion[s].link_url,
                link_description: this.state.sizableRegion[s].link_description,
                link_index: s,
              }),
                e.links.push(i);
            }
            this.props.onSaveLinkRegions?.(e);
          }
          async DeleteRegion(e) {
            this.state.sizableRegion.splice(e, 1),
              console.log("keys: ", this.state.sizableRegion.keys),
              this.setState({ sizableRegion: this.state.sizableRegion }, () =>
                this.OnSaveRegions(),
              );
          }
          async UpdatePanel(e, s) {
            const i = [...this.state.sizableRegion];
            (i[e] = s),
              this.setState({ sizableRegion: i }, () => this.OnSaveRegions());
          }
          render() {
            return (0, t.jsxs)("div", {
              className: "LinkOverlayContainer",
              children: [
                (0, t.jsxs)("div", {
                  className: "LinkOverlayValidRegion",
                  children: [
                    !this.props.editMode && this.props.linkRegions
                      ? this.props.linkRegions.map((e) => {
                          const s = (0, Ve.p)(e.url);
                          return (0, t.jsx)(
                            k.uU,
                            {
                              href: e.url,
                              bForceExternal: s,
                              bUseLinkFilter: s,
                              children: (0, t.jsx)("div", {
                                className: "LinkRegion",
                                style: {
                                  left: e.left + "%",
                                  top: e.top + "%",
                                  width: e.width + "%",
                                  height: e.height + "%",
                                },
                                children: (0, t.jsxs)("div", {
                                  className: "LinkRegionText",
                                  children: [e.link_description, " "],
                                }),
                              }),
                            },
                            e.link_index,
                          );
                        })
                      : null,
                    this.props.editMode &&
                      this.state.sizableRegion.map((e, s) =>
                        (0, t.jsx)(
                          L.I,
                          {
                            index: s,
                            deleteFn: this.DeleteRegion,
                            updateFn: this.UpdatePanel,
                            xPosPct: e.xPosPct,
                            yPosPct: e.yPosPct,
                            widthPct: e.widthPct,
                            heightPct: e.heightPct,
                            link_url: e.link_url,
                            link_description: e.link_description,
                          },
                          s * 100 + e.xPosPct,
                        ),
                      ),
                    this.props.editMode &&
                      (0, t.jsx)("div", {
                        className: "AddLinkRegion",
                        onClick: this.AddLinkRegion,
                        children: (0, l.we)("#SteamTV_AddLinkRegion"),
                      }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "LinkOverlayInvalidRegion",
                  children: (0, t.jsx)("div", {
                    children: (0, l.we)("#SteamTV_LinkRegionReserved"),
                  }),
                }),
              ],
            });
          }
        };
        d([a.oI], I.prototype, "AddLinkRegion", 1),
          d([a.oI], I.prototype, "LoadLinkRegion", 1),
          d([a.oI], I.prototype, "OnSaveRegions", 1),
          d([a.oI], I.prototype, "DeleteRegion", 1),
          d([a.oI], I.prototype, "UpdatePanel", 1),
          (I = d([S.PA], I));
      },
      14596: ($, Y, c) => {
        "use strict";
        c.d(Y, { I: () => k });
        var t = c(62540),
          B = c(63696),
          S = c(71262),
          f = c(41230),
          Q = c(6460),
          R = c(7727),
          G = c(50777),
          v = c(42095),
          Z = c(21501),
          m = c.n(Z),
          _ = c(23365),
          pe = "10986482",
          ie = Object.defineProperty,
          oe = Object.getOwnPropertyDescriptor,
          L = (o, g, u, l) => {
            for (
              var b = l > 1 ? void 0 : l ? oe(g, u) : g, C = o.length - 1, a;
              C >= 0;
              C--
            )
              (a = o[C]) && (b = (l ? a(g, u, b) : a(b)) || b);
            return l && b && ie(g, u, b), b;
          },
          P = ((o) => (
            (o.topleft = "topleft"),
            (o.top = "top"),
            (o.topright = "topright"),
            (o.left = "left"),
            (o.middle = "middle"),
            (o.right = "right"),
            (o.bottomleft = "bottomleft"),
            (o.bottom = "bottom"),
            (o.bottomright = "bottomright"),
            o
          ))(P || {});
        let k = class extends B.Component {
          m_rectLinkRegion;
          m_elLinkRegionBox;
          m_nLocalOffsetXPct;
          m_nLocalOffsetYPct;
          m_fnMouseUp = null;
          m_fnMouseMove = null;
          m_listeners = new Q.Ji();
          m_strDescription = "";
          m_aspectRatio = 1;
          componentWillUnmount() {
            this.m_listeners.Unregister();
          }
          constructor(o) {
            super(o),
              (this.state = {
                curLeftPosPct: this.props.xPosPct,
                curTopPosPct: this.props.yPosPct,
                curRightPosPct:
                  100 - (this.props.widthPct + this.props.xPosPct),
                curBottomPosPct:
                  100 - (this.props.yPosPct + this.props.heightPct),
                curWidthPct: this.props.widthPct,
                curHeightPct: this.props.heightPct,
                EdgeDown: void 0,
                text_link_url: this.props.link_url,
                text_link_description: this.props.link_description,
                bEditingLink: !1,
                valid_link: this.validateUrl(this.props.link_url),
              }),
              (this.m_strDescription = this.props.link_description ?? ""),
              (this.m_aspectRatio =
                this.props.heightPct > 0 && this.props.widthPct > 0
                  ? this.props.widthPct / this.props.heightPct
                  : 1);
          }
          LinkRegionBoxRef(o) {
            this.m_elLinkRegionBox = o;
          }
          OnMouseDown(o, g) {
            this.m_elLinkRegionBox?.parentElement &&
              this.m_elLinkRegionBox.ownerDocument.defaultView &&
              ((this.m_fnMouseUp = (u) => {
                this.OnMouseUp(u, g);
              }),
              (this.m_fnMouseMove = (u) => {
                this.OnMouseMove(u, g);
              }),
              this.setState({ EdgeDown: g }),
              (this.m_rectLinkRegion =
                this.m_elLinkRegionBox.parentElement.getBoundingClientRect()),
              (this.m_nLocalOffsetXPct =
                ((o.clientX - this.m_rectLinkRegion.left) /
                  (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                  100 -
                this.state.curLeftPosPct),
              (this.m_nLocalOffsetYPct =
                ((o.clientY - this.m_rectLinkRegion.top) /
                  (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                  100 -
                this.state.curTopPosPct),
              this.m_listeners.AddEventListener(
                this.m_elLinkRegionBox.ownerDocument.defaultView,
                "mousemove",
                this.m_fnMouseMove,
              ),
              this.m_listeners.AddEventListener(
                this.m_elLinkRegionBox.ownerDocument.defaultView,
                "mouseup",
                this.m_fnMouseUp,
              )),
              o.preventDefault(),
              o.stopPropagation();
          }
          OnMouseMove(o, g) {
            if (this.state.EdgeDown !== void 0) {
              switch ((o.shiftKey && this.m_fnMouseUp(), g)) {
                case "left": {
                  this.UpdateState({
                    curLeftPosPct: this.CalcLeftEdge(o.clientX),
                  });
                  break;
                }
                case "right": {
                  this.UpdateState({
                    curRightPosPct: this.CalcRightEdge(o.clientX),
                  });
                  break;
                }
                case "top": {
                  this.UpdateState({
                    curTopPosPct: this.CalcTopEdge(o.clientY),
                  });
                  break;
                }
                case "bottom": {
                  this.UpdateState({
                    curBottomPosPct: this.CalcBottomEdge(o.clientY),
                  });
                  break;
                }
                case "topleft": {
                  this.UpdateState({
                    curTopPosPct: this.CalcBottomEdge(o.clientY),
                    curLeftPosPct: this.CalcLeftEdge(o.clientX),
                  });
                  break;
                }
                case "topright": {
                  this.UpdateState({
                    curTopPosPct: this.CalcTopEdge(o.clientY),
                    curRightPosPct: this.CalcRightEdge(o.clientX),
                  });
                  break;
                }
                case "bottomleft": {
                  this.UpdateState({
                    curLeftPosPct: this.CalcLeftEdge(o.clientX),
                    curBottomPosPct: this.CalcBottomEdge(o.clientY),
                  });
                  break;
                }
                case "bottomright": {
                  this.UpdateState({
                    curRightPosPct: this.CalcRightEdge(o.clientX),
                    curBottomPosPct: this.CalcBottomEdge(o.clientY),
                  });
                  break;
                }
                case "middle": {
                  const u = (0, _.OQ)(
                      this.CalcLeftEdge(o.clientX),
                      0,
                      100 - this.state.curWidthPct,
                    ),
                    l = 100 - (u + this.state.curWidthPct),
                    b = (0, _.OQ)(
                      this.CalcTopEdge(o.clientY),
                      0,
                      100 - this.state.curHeightPct,
                    ),
                    C = 100 - (b + this.state.curHeightPct),
                    a = {
                      curLeftPosPct: u,
                      curRightPosPct: l,
                      curTopPosPct: b,
                      curBottomPosPct: C,
                    };
                  this.setState(a);
                  break;
                }
                default:
                  break;
              }
              o.preventDefault(), o.stopPropagation();
            }
          }
          IsValidPct(o) {
            return o >= 0 && o <= 100;
          }
          UpdateState(o) {
            let g =
                o.curTopPosPct !== void 0
                  ? o.curTopPosPct
                  : this.state.curTopPosPct,
              u =
                o.curBottomPosPct !== void 0
                  ? o.curBottomPosPct
                  : this.state.curBottomPosPct,
              l =
                o.curLeftPosPct !== void 0
                  ? o.curLeftPosPct
                  : this.state.curLeftPosPct,
              b =
                o.curRightPosPct !== void 0
                  ? o.curRightPosPct
                  : this.state.curRightPosPct,
              C = (0, _.OQ)(
                100 - b - l,
                this.props.widthMinPct || 0,
                this.props.widthMaxPct || 100,
              ),
              a = (0, _.OQ)(
                100 - u - g,
                this.props.heightMinPct || 0,
                this.props.heightMaxPct || 100,
              );
            this.props.bLockAspectRatio &&
              (o.curLeftPosPct !== void 0 || o.curRightPosPct !== void 0
                ? (a = C / this.m_aspectRatio)
                : (C = a * this.m_aspectRatio)),
              o.curLeftPosPct !== void 0
                ? (l = 100 - b - C)
                : (b = 100 - (l + C)),
              o.curTopPosPct !== void 0
                ? (g = 100 - u - a)
                : (u = 100 - (g + a));
            const ne = 100 - b - l,
              w = 100 - u - g;
            this.IsValidPct(l) &&
              this.IsValidPct(b) &&
              this.IsValidPct(g) &&
              this.IsValidPct(u) &&
              this.IsValidPct(ne) &&
              this.IsValidPct(w) &&
              this.setState({
                curLeftPosPct: l,
                curRightPosPct: b,
                curTopPosPct: g,
                curBottomPosPct: u,
              });
          }
          GetXPercent(o) {
            return this.m_rectLinkRegion
              ? ((o - this.m_rectLinkRegion.left) /
                  (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                  100 -
                  (this.m_nLocalOffsetXPct ?? 0)
              : 0;
          }
          GetYPercent(o) {
            return this.m_rectLinkRegion
              ? ((o - this.m_rectLinkRegion.top) /
                  (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                  100 -
                  (this.m_nLocalOffsetYPct ?? 0)
              : 0;
          }
          CalcLeftEdge(o) {
            return (0, _.OQ)(this.GetXPercent(o), 0, 100);
          }
          CalcRightEdge(o) {
            return (0, _.OQ)(
              100 - (this.GetXPercent(o) + this.state.curWidthPct),
              0,
              100,
            );
          }
          CalcTopEdge(o) {
            return (0, _.OQ)(this.GetYPercent(o), 0, 100);
          }
          CalcBottomEdge(o) {
            return (0, _.OQ)(
              100 - (this.GetYPercent(o) + this.state.curHeightPct),
              0,
              100,
            );
          }
          OnMouseUp(o, g) {
            this.setState({
              curWidthPct:
                100 - this.state.curRightPosPct - this.state.curLeftPosPct,
            }),
              this.setState({
                curHeightPct:
                  100 - this.state.curBottomPosPct - this.state.curTopPosPct,
              }),
              this.setState({ EdgeDown: void 0 }),
              this.props.updateFn(this.props.index, {
                xPosPct: this.state.curLeftPosPct,
                yPosPct: this.state.curTopPosPct,
                widthPct: this.state.curWidthPct,
                heightPct: this.state.curHeightPct,
                link_url: this.state.text_link_url,
                link_description: this.state.text_link_description,
              }),
              this.m_listeners.Unregister();
          }
          async HandleDelete() {
            this.props.deleteFn && this.props.deleteFn(this.props.index);
          }
          OnSetLinkURLChange(o) {
            this.setState({
              text_link_url: o.target.value,
              valid_link: this.validateUrl(o.target.value),
            });
          }
          OnSetLinkDescriptionChange(o) {
            this.setState({ text_link_description: o.target.value });
          }
          validateUrl(o) {
            return o != null
              ? /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
                  o,
                )
              : !1;
          }
          OnSaveLink() {
            (this.m_strDescription = this.state.text_link_description ?? ""),
              this.setState({ bEditingLink: !this.state.bEditingLink }),
              this.props.updateFn(this.props.index, {
                xPosPct: this.state.curLeftPosPct,
                yPosPct: this.state.curTopPosPct,
                widthPct: this.state.curWidthPct,
                heightPct: this.state.curHeightPct,
                link_url: this.state.text_link_url,
                link_description: this.state.text_link_description,
              });
          }
          OnEditLink() {
            this.setState({ bEditingLink: !this.state.bEditingLink });
          }
          render() {
            let o = {
                left: this.state.curLeftPosPct + "%",
                top: this.state.curTopPosPct + "%",
                right: this.state.curRightPosPct + "%",
                bottom: this.state.curBottomPosPct + "%",
              },
              g = m().LinkRegionDragBox;
            return (
              this.state.EdgeDown != null &&
                (g += ` ${m().EdgeDown} ` + m()[this.state.EdgeDown]),
              (0, t.jsxs)("div", {
                className: g,
                style: o,
                ref: this.LinkRegionBoxRef,
                draggable: !1,
                children: [
                  (0, t.jsxs)("div", {
                    className: m().LinkRegionGridBox,
                    children: [
                      (0, t.jsx)("div", {
                        className: `${m().LinkRegionEdge} ${m().TopLeft}`,
                        onMouseDown: (u) => {
                          this.OnMouseDown(u, "topleft");
                        },
                        draggable: !1,
                      }),
                      (0, t.jsx)("div", {
                        className: `${m().LinkRegionEdge} ${m().Top}`,
                        onMouseDown: (u) => {
                          this.OnMouseDown(u, "top");
                        },
                      }),
                      (0, t.jsx)("div", {
                        className: `${m().LinkRegionEdge} ${m().TopRight}`,
                        onMouseDown: (u) => {
                          this.OnMouseDown(u, "topright");
                        },
                        draggable: !1,
                      }),
                      (0, t.jsx)("div", {
                        className: `${m().LinkRegionEdge} ${m().Left}`,
                        onMouseDown: (u) => {
                          this.OnMouseDown(u, "left");
                        },
                        draggable: !1,
                      }),
                      (0, t.jsxs)("div", {
                        className: `${m().LinkRegionEdge} ${m().Middle}`,
                        onMouseDown: (u) => {
                          this.OnMouseDown(u, "middle");
                        },
                        draggable: !1,
                        children: [
                          this.props.deleteFn &&
                            (0, t.jsx)("div", {
                              className: m().LinkRegionDelete,
                              onClick: this.HandleDelete,
                              children: (0, t.jsx)(v.sED, {}),
                            }),
                          !this.props.bDisableLink &&
                            (0, t.jsx)("div", {
                              className: m().LinkRegionSettings,
                              onClick: this.OnEditLink,
                              children: (0, t.jsx)(v.xv8, {}),
                            }),
                          (0, t.jsxs)("div", {
                            className: m().LinkText,
                            children: [" ", this.m_strDescription, " "],
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: `${m().LinkRegionEdge} ${m().Right}`,
                        onMouseDown: (u) => {
                          this.OnMouseDown(u, "right");
                        },
                        draggable: !1,
                      }),
                      (0, t.jsx)("div", {
                        className: `${m().LinkRegionEdge} ${m().BottomLeft}`,
                        onMouseDown: (u) => {
                          this.OnMouseDown(u, "bottomleft");
                        },
                        draggable: !1,
                      }),
                      (0, t.jsx)("div", {
                        className: `${m().LinkRegionEdge} ${m().Bottom}`,
                        onMouseDown: (u) => {
                          this.OnMouseDown(u, "bottom");
                        },
                        draggable: !1,
                      }),
                      (0, t.jsx)("div", {
                        className: `${m().LinkRegionEdge} ${m().BottomRight}`,
                        onMouseDown: (u) => {
                          this.OnMouseDown(u, "bottomright");
                        },
                        draggable: !1,
                      }),
                    ],
                  }),
                  this.state.bEditingLink &&
                    (0, t.jsxs)("div", {
                      className: m().LinkRegionInfo,
                      children: [
                        (0, t.jsx)(G.pd, {
                          className: m().LinkRegionInput,
                          type: "text",
                          name: "link_url",
                          value: this.state.text_link_url,
                          label: (0, R.we)("#SteamTV_LinkURL"),
                          placeholder: "https://www.example.com",
                          onChange: this.OnSetLinkURLChange,
                          mustBeURL: !0,
                        }),
                        (0, t.jsx)(G.pd, {
                          className: m().LinkRegionInput,
                          type: "text",
                          name: "link_description",
                          value: this.state.text_link_description,
                          label: (0, R.we)("#SteamTV_LinkDescription"),
                          placeholder: (0, R.we)(
                            "#SteamTV_LinkDescription_Placeholder",
                          ),
                          onChange: this.OnSetLinkDescriptionChange,
                        }),
                        (0, t.jsxs)("div", {
                          className: m().LinkRegionButtonContainer,
                          children: [
                            (0, t.jsxs)(G.$n, {
                              disabled: !this.state.valid_link,
                              onClick: this.OnSaveLink,
                              children: [" ", (0, R.we)("#Button_OK"), " "],
                            }),
                            (0, t.jsxs)(G.$n, {
                              onClick: this.OnEditLink,
                              children: [" ", (0, R.we)("#Button_Cancel")],
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              })
            );
          }
        };
        L([S.oI], k.prototype, "LinkRegionBoxRef", 1),
          L([S.oI], k.prototype, "OnMouseDown", 1),
          L([S.oI], k.prototype, "OnMouseMove", 1),
          L([S.oI], k.prototype, "OnMouseUp", 1),
          L([S.oI], k.prototype, "HandleDelete", 1),
          L([S.oI], k.prototype, "OnSetLinkURLChange", 1),
          L([S.oI], k.prototype, "OnSetLinkDescriptionChange", 1),
          L([S.oI], k.prototype, "OnSaveLink", 1),
          L([S.oI], k.prototype, "OnEditLink", 1),
          (k = L([f.PA], k));
      },
    },
  ]);
})();
//# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-rel-steamui/build/client/steamui/sourcemaps/chunk~1a96cdf59.js.map
