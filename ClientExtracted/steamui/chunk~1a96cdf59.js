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
            default: () => C,
          });
        var t = c(62540),
          B = c(89193),
          f = c(41230),
          P = c(63696),
          Q = c(377),
          R = c(636),
          G = c(4487),
          v = c(85778),
          Z = c(98681),
          m = c(13215),
          w = c(12711),
          ie = c(28614),
          oe = c(55677),
          y = c(94676),
          ne = c(14596),
          S = c(42095),
          n = c(28644),
          g = c(6460),
          p = c(8658),
          b = c(57575),
          a = c(7727),
          L = c(11143),
          x = c(23365),
          l = c(71262),
          re = c(6739),
          _ = c(3519),
          me = c(2108),
          Me = c(86721),
          ve = c.n(Me),
          De = c(7354),
          Oe = Object.defineProperty,
          we = Object.getOwnPropertyDescriptor,
          _e = (e, s, i, o) => {
            for (
              var r = o > 1 ? void 0 : o ? we(s, i) : s, h = e.length - 1, u;
              h >= 0;
              h--
            )
              (u = e[h]) && (r = (o ? u(s, i, r) : u(r)) || r);
            return o && r && Oe(s, i, r), r;
          };
        function ke() {
          return (0, t.jsx)("div", {
            className: "STV_ReplayBanner",
            children: (0, a.we)("#DASHPlayerControls_IsReplay"),
          });
        }
        const Be = (0, f.PA)((e) => {
          let s = e.video;
          if (s && (s.IsBroadcastClip() || s.IsBroadcastVOD())) return null;
          let i = v.fK.Loading,
            o = "";
          if (s) {
            (i = s.GetBroadcastState()), (o = s.GetBroadcastStateDescription());
            let h = s.IsBuffering();
            i == v.fK.Unlocking && ((i = v.fK.Loading), (o = "")),
              i == v.fK.Ready && h && ((i = v.fK.Loading), (o = ""));
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
                  children: o,
                }),
            ],
          });
        });
        class Se extends P.Component {
          OnClick() {
            v.BroadcastWatchStore.UserInputClickVideo(this.props.video);
          }
          render() {
            return (0, t.jsxs)("div", {
              className: "BroadcastVideoUserInputNeeded",
              onClick: this.OnClick,
              children: [
                (0, t.jsx)(S.jGG, {}),
                (0, t.jsx)("span", {
                  children: (0, a.we)("#DASHPlayerControls_ClickToPlay"),
                }),
              ],
            });
          }
        }
        _e([l.oI], Se.prototype, "OnClick", 1);
        var ye = Object.defineProperty,
          Le = Object.getOwnPropertyDescriptor,
          ae = (e, s, i, o) => {
            for (
              var r = o > 1 ? void 0 : o ? Le(s, i) : s, h = e.length - 1, u;
              h >= 0;
              h--
            )
              (u = e[h]) && (r = (o ? u(s, i, r) : u(r)) || r);
            return o && r && ye(s, i, r), r;
          };
        let q = class extends P.Component {
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
                  children: (0, t.jsx)(S.sED, {}),
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, a.we)("#DASHPlayerStats_BufferingResolution"),
                    " ",
                    (0, t.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetBufferingResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, a.we)("#DASHPlayerStats_PlaybackResolution"),
                    " ",
                    (0, t.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetPlaybackResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, a.we)("#DASHPlayerStats_HtmlResolution"),
                    " ",
                    (0, t.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetHTMLVideoResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, a.we)("#DASHPlayerStats_ContentServer"),
                    " ",
                    (0, t.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetContentServerToDisplay(),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, a.we)("#DASHPlayerStats_StallEvents"),
                    " ",
                    (0, t.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetStalledEventsToDisplay(),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, a.we)("#DASHPlayerStats_FailedDownloads"),
                    " ",
                    (0, t.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetFailedDownloadsToDisplay(),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, a.we)("#DASHPlayerStats_TimeToFirstFrame"),
                    " ",
                    (0, t.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetTimeToFirstFrameToDisplay(),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, a.we)("#DASHPlayerStats_PlaybackRate"),
                    " ",
                    (0, t.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetPlaybackRateForDisplay(),
                    }),
                  ],
                }),
                (0, t.jsx)(le, { stats: e }),
              ],
            });
          }
        };
        ae([l.oI], q.prototype, "HideStats", 1), (q = ae([f.PA], q));
        let le = class extends P.Component {
          constructor(e) {
            super(e);
          }
          createBufferedRange(e) {
            let s = this.props.stats,
              i = [],
              o = e ? "vidbuf" : "audbuf",
              r = e
                ? s.GetNumBufferedVideoRanges()
                : s.GetNumBufferedAudioRanges();
            if (r > 0)
              for (let h = 0; h < r; ++h) {
                let u = (0, a.we)(
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
                        u,
                        " ",
                        (0, t.jsx)("span", {
                          className: "videoStatsValue",
                          children: D,
                        }),
                      ],
                    },
                    o + h,
                  ),
                );
              }
            else {
              let h = (0, a.we)(
                e
                  ? "#DASHPlayerStats_VideoNoRangeInformation"
                  : "#DASHPlayerStats_AudioNoRangeInformation",
              );
              i.push((0, t.jsx)("div", { children: h }, o + "none"));
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
                    (0, a.we)("#DASHPlayerStats_BytesReceived"),
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
                      (0, a.we)("#DASHPlayerStats_DroppedFrames"),
                      " ",
                      (0, t.jsx)("span", {
                        className: "videoStatsValue",
                        children: e.GetDroppedFramesToDisplay(),
                      }),
                    ],
                  }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, a.we)("#DASHPlayerStats_VideoBuffered"),
                    " ",
                    (0, t.jsxs)("span", {
                      className: "videoStatsValue",
                      children: [e.GetVideoBufferedToDisplay(), " "],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, a.we)("#DASHPlayerStats_AudioBuffered"),
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
                    (0, a.we)("#DASHPlayerStats_BandwidthRequired"),
                    " ",
                    (0, t.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetBandwidthRequiredToDisplay(),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, a.we)("#DASHPlayerStats_BandwidthVideo"),
                    " ",
                    (0, t.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetBandwithVideoToDisplay(),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, a.we)("#DASHPlayerStats_BandwidthNums"),
                    " ",
                    (0, t.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetBandwidthStatsToDisplay(),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, a.we)("#DASHPlayerStats_DownloadNums"),
                    " ",
                    (0, t.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetDownloadTimeStatsToDisplay(),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, a.we)("#DASHPlayerStats_ActiveDownloads"),
                    " ",
                    (0, t.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetActiveDownloadsToDisplay(),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, a.we)("#DASHPlayerStats_VideoDownloadProgress"),
                    " ",
                    (0, t.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetVideoDownloadProgressToDisplay(),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, a.we)("#DASHPlayerStats_DroppingFrames"),
                    " ",
                    (0, t.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetPersistentFrameDropsForDisplay(),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, a.we)("#DASHPlayerStats_CurrentFPS"),
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
        le = ae([f.PA], le);
        var ee = c(23612),
          Te = Object.defineProperty,
          je = Object.getOwnPropertyDescriptor,
          M = (e, s, i, o) => {
            for (
              var r = o > 1 ? void 0 : o ? je(s, i) : s, h = e.length - 1, u;
              h >= 0;
              h--
            )
              (u = e[h]) && (r = (o ? u(s, i, r) : u(r)) || r);
            return o && r && Te(s, i, r), r;
          };
        class A extends P.Component {
          m_elSettingsButton;
          m_SettingsButtonPos;
          m_elClickListener = null;
          m_elSettingsPanel = null;
          m_elSubtitlesButton = P.createRef();
          m_elSubtitlesPanel = P.createRef();
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
              (0, b.id)(this.m_elSettingsPanel, s.target) ||
                this.setState({ bSettingsOpen: !1 }),
              (0, b.id)(this.m_elSubtitlesPanel.current, s.target) ||
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
            const { video: o, actions: r } = this.props;
            let h,
              u = [],
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
                (u = h.map((O) =>
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
                u.push(z),
                u.push(
                  (0, t.jsxs)(
                    ee.D,
                    {
                      onClick: this.OnShowStats,
                      children: [
                        (0, a.we)("#Broadcast_VideoContext_ToggleStats"),
                        "	",
                      ],
                    },
                    "statsToggle",
                  ),
                ),
                (D = 0 - (u.length * 21 + j))),
              this.state.bSubtitlesOpen)
            ) {
              (i = !0),
                (u = []),
                u.push(
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
                      children: (0, a.we)("#Broadcast_None"),
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
                u.push(
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
                    children: (0, t.jsx)(S.N8C, {}),
                  }),
                (0, t.jsx)("div", {
                  className:
                    "videoControlButton VideoSettings " +
                    (s ? " VideoSettingsOpen" : ""),
                  onClick: this.OnVideoControlClick,
                  ref: this.bindSettingsButton,
                  children: (0, t.jsx)(S.wB_, {}),
                }),
                (0, t.jsx)(E, { video: o }),
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
                      children: u,
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
                      children: u,
                    }),
                  }),
              ],
            });
          }
        }
        M([l.oI], A.prototype, "OnVideoControlClick", 1),
          M([l.oI], A.prototype, "OnSubtitlesClick", 1),
          M([l.oI], A.prototype, "OnMouseUp", 1),
          M([l.oI], A.prototype, "bindSettingsButton", 1),
          M([l.oI], A.prototype, "BindSettingsPanel", 1),
          M([l.oI], A.prototype, "OnShowStats", 1);
        const ge = !0;
        let E = class extends P.Component {
          constructor(e) {
            super(e), (0, B.Gn)(this);
          }
          k_nHideSliderTimeout = 1.5 * 1e3;
          m_bShowSlider = ge;
          m_schHideSlider = new g.LU();
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
              o = "videoControlButton";
            i > 65
              ? (o += " HighestVolume")
              : i > 45
                ? (o += " HighVolume")
                : i < 46 && i > 24
                  ? (o += " MedVolume")
                  : i < 25 && (o += " LowVolume");
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
                      className: o,
                      onClick: this.ToggleMute,
                      children: (0, t.jsx)(S.fSs, {}),
                    }),
                    (0, t.jsx)(H, { video: e, onDrag: this.OnChildDrag }),
                  ],
                }),
              })
            );
          }
        };
        M([B.sH], E.prototype, "m_bShowSlider", 2),
          M([l.oI], E.prototype, "ToggleMute", 1),
          M([l.oI], E.prototype, "OnMouseEnter", 1),
          M([l.oI], E.prototype, "OnMouseLeave", 1),
          M([l.oI], E.prototype, "OnChildDrag", 1),
          (E = M([f.PA], E));
        let H = class extends P.Component {
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
              o = x.Fu(s, i.left, i.right, 0, 1),
              r = x.OQ(o, 0, 1),
              h = this.props.video;
            h.SetMute(o < 0.01), h.SetVolume(r);
          }
          render() {
            let e = this.props.video,
              s = e.GetVolume() * 100;
            e.IsMuted() && (s = 0);
            let o = { left: `${s}%` },
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
                  style: o,
                }),
              ],
            });
          }
        };
        M([l.oI], H.prototype, "OnMouseDown", 1),
          M([l.oI], H.prototype, "OnMouseMove", 1),
          M([l.oI], H.prototype, "OnMouseUp", 1),
          M([B.XI], H.prototype, "SetVolumeWithCoord", 1),
          (H = M([f.PA], H));
        var Ve = c(26795),
          Ie = Object.defineProperty,
          Re = Object.getOwnPropertyDescriptor,
          d = (e, s, i, o) => {
            for (
              var r = o > 1 ? void 0 : o ? Re(s, i) : s, h = e.length - 1, u;
              h >= 0;
              h--
            )
              (u = e[h]) && (r = (o ? u(s, i, r) : u(r)) || r);
            return o && r && Ie(s, i, r), r;
          };
        const fe = 3200,
          U = 15;
        let C = class extends P.Component {
          m_schHideControls = new g.LU();
          m_schUnmountControls = new g.LU();
          m_elVideo = null;
          m_elBroadcastPlayer = null;
          m_bMouseDown = !1;
          m_elMouseDown = null;
          m_listeners = new g.Ji();
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
                  this.setState((o) => ({
                    bControlsVisible: o.bMountControls,
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
                (0, t.jsx)(w.tz, { children: this.GetContextMenuItems() }),
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
            let o = (0, G.k2)(`${re.TS.STORE_BASE_URL}app/${i.m_strAppId}`);
            this.props.onOpenLinkInNewWindow(e, o), e.stopPropagation();
          }
          GetContextMenuItems() {
            let e = [],
              s = this.state.video;
            if (!s) return e;
            let i = s.GetBroadcastInfo();
            return (
              e.push(
                (0, t.jsx)(
                  w.IK,
                  {
                    bChecked: this.state.bShowStats,
                    onSelected: (o) => {
                      this.ToggleStatsView(o);
                    },
                    children: (0, a.we)("#Broadcast_VideoContext_ToggleStats"),
                  },
                  "togglestats",
                ),
              ),
              i &&
                i.m_strAppId != "0" &&
                Number.parseInt(i.m_strAppId) != v.fO &&
                e.push(
                  (0, t.jsx)(
                    w.kt,
                    {
                      onSelected: (o) => {
                        this.ShowStorePage(o);
                      },
                      children: (0, a.we)("#Broadcast_VideoContext_OpenStore"),
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
              ((0, b.ww)(this.m_elBroadcastPlayer)
                ? (0, b.MS)(this.m_elBroadcastPlayer)
                : (0, b.tl)(
                    this.m_elBroadcastPlayer,
                    this.m_elVideo ?? void 0,
                  ));
          }
          OnFullscreenChange(e) {
            if (!this.m_elBroadcastPlayer) return;
            let s = (0, b.ww)(this.m_elBroadcastPlayer);
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
              o = !!(e && e.IsReplay()),
              r = this.state.bMountControls,
              h = this.state.bControlsVisible || s,
              u = !!(e && e.GetUserInputNeeded()),
              D = e?.GetDASHPlayerStats(),
              z =
                e?.IsBroadcastVOD() &&
                u &&
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
                      title: (0, a.we)("#Broadcast_View_Theater"),
                      className: "BroadcastTheaterToggle",
                    },
                    "ChatPosToggle ChatTheaterToggle",
                  ),
                ),
              j.push(
                (0, t.jsx)(
                  "div",
                  {
                    title: (0, a.we)("#Broadcast_View_Fullscreen"),
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
                o && (0, t.jsx)(ke, {}),
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
                    className: (0, p.A)(
                      ve().BroadcastPlaceholderImg,
                      "BroadcastPlaceholderImg",
                    ),
                    src: this.state.strInitialCapsuleImageUrl,
                  }),
                X &&
                  e &&
                  (0, t.jsx)(de, {
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
                (0, t.jsx)(Be, { video: e }),
                u && e && (0, t.jsx)(Se, { video: e }),
              ],
            });
          }
        };
        d([l.oI], C.prototype, "BindBroadcastPlayerRef", 1),
          d([l.oI], C.prototype, "BindVideoRef", 1),
          d([l.oI], C.prototype, "OnMouseDown", 1),
          d([l.oI], C.prototype, "OnMouseUp", 1),
          d([l.oI], C.prototype, "OnMouseMove", 1),
          d([l.oI], C.prototype, "OnMouseLeave", 1),
          d([l.oI], C.prototype, "HideControls", 1),
          d([l.oI], C.prototype, "UmountControls", 1),
          d([l.oI], C.prototype, "ShowStatsView", 1),
          d([l.oI], C.prototype, "OnContextMenu", 1),
          d([l.oI], C.prototype, "ToggleStatsView", 1),
          d([l.oI], C.prototype, "ShowStorePage", 1),
          d([l.oI], C.prototype, "CloseStats", 1),
          d([l.oI], C.prototype, "OnToggleFullscreen", 1),
          d([l.oI], C.prototype, "OnFullscreenChange", 1),
          (C = d([f.PA], C));
        let de = class extends P.Component {
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
                    (0, t.jsx)(k, {
                      video: e,
                      bIncludeClipEditor: this.props.bIncludeClipEditor,
                    }),
                    (0, t.jsxs)("div", {
                      className: "STV_BroadcastController",
                      children: [
                        (0, t.jsx)("div", {
                          className: "videoControlsButtons LeftSpacer",
                        }),
                        (0, t.jsx)(ce, { video: e }),
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
        de = d([f.PA], de);
        class Ee extends P.PureComponent {
          render() {
            return this.props.onClick
              ? (0, t.jsx)("div", {
                  className: "STV_BroadcastClose",
                  onClick: this.props.onClick,
                  children: (0, t.jsx)(S.sED, {}),
                })
              : null;
          }
        }
        class ce extends P.Component {
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
                      (0, t.jsx)(S.tID, {
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
                      (0, t.jsx)(S.tID, {
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
        d([l.oI], ce.prototype, "OnJumpBackward", 1),
          d([l.oI], ce.prototype, "OnJumpForward", 1);
        const Ne = (0, f.PA)((e) => {
          if (e.video.IsBroadcastClip() || e.video.IsBroadcastVOD())
            return null;
          const s = (o) => {
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
                (0, t.jsx)(S.tID, {
                  bHidePreArrow: !0,
                  bHidePostArrow: !0,
                  bFlipHorizontal: !1,
                }),
                (0, t.jsx)("div", {
                  className: "jumpGoLive",
                  children: (0, a.we)(
                    i
                      ? "#DASHPlayerControls_IsLive"
                      : "#DASHPlayerControls_GoLive",
                  ),
                }),
              ],
            }),
          });
        });
        let te = class extends P.Component {
          OnTogglePlayPause() {
            this.props.video.TogglePlayPause();
          }
          render() {
            let s = this.props.video.IsPaused();
            return (0, t.jsx)("div", {
              className: "videoControlButton buttonPlayPause",
              onClick: this.OnTogglePlayPause,
              children: s ? (0, t.jsx)(S.jGG, {}) : (0, t.jsx)(S.vRz, {}),
            });
          }
        };
        d([l.oI], te.prototype, "OnTogglePlayPause", 1), (te = d([f.PA], te));
        let F = class extends P.Component {
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
            for (let o = s.length - 1; o >= 0; o--)
              if (!(s[o].nTime >= i)) return s[o].nTime;
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
              children: (0, t.jsx)(S.tID, {
                bHidePostArrow: !0,
                bFlipHorizontal: !0,
              }),
            });
          }
        };
        d([B.sH], F.prototype, "video", 2),
          d([B.EW], F.prototype, "has_previous_marker", 1),
          d([l.oI], F.prototype, "OnJumpToPreviousMarkerClicked", 1),
          (F = d([f.PA], F));
        let W = class extends P.Component {
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
            for (let o = 0; o < s.length; o++)
              if (!(s[o].nTime <= i)) return s[o].nTime;
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
              children: (0, t.jsx)(S.tID, {
                bHidePostArrow: !0,
                bFlipHorizontal: !1,
              }),
            });
          }
        };
        d([B.sH], W.prototype, "video", 2),
          d([B.EW], W.prototype, "has_next_marker", 1),
          d([l.oI], W.prototype, "OnJumpToNextMarkerClicked", 1),
          (W = d([f.PA], W));
        const he = (e) => {
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
              children: (0, t.jsx)(S.Dp6, {}),
            }),
          });
        };
        function Ae(e) {
          let s = e.startPos,
            i = e.endPos,
            o = "",
            r = 1;
          return (
            s < 0 && ((r = (i - s) / 10), (s = 0), (o = " hideFront")),
            (0, t.jsxs)("div", {
              className: "STV_timelineSegment" + o,
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
        let k = class extends P.Component {
          m_elSlider = P.createRef();
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
              let o = {};
              s === "start"
                ? ((o = { bStartMouseDown: !0 }), e.stopPropagation())
                : s === "end"
                  ? ((o = { bEndMouseDown: !0 }), e.stopPropagation())
                  : (o = { bGrabberMouseDown: !0 }),
                this.setState(o, () => this.AdjustSliderForClientX(e.clientX)),
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
              o = i.GetTimelineStartPos(),
              r = i.GetTimelineStartPos() + i.GetTimelineDuration(),
              h = i.GetTimeAtMousePosition(e, s, o, r);
            const u = 5;
            if (this.state.bStartMouseDown) {
              const D = x.OQ(h, o, i.m_editorEndTime - u);
              i.m_editorStartTime = D;
            } else if (this.state.bEndMouseDown) {
              const D = x.OQ(h, i.m_editorStartTime + u, r);
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
              o = s.GetTimelineStartPos() + s.GetTimelineDuration();
            this.m_rectSlider =
              this.m_elSlider.current?.getBoundingClientRect();
            let r =
              this.m_rectSlider &&
              s.GetTimeAtMousePosition(e, this.m_rectSlider, i, o);
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
              o = e.GetPercentOffsetFromTime(
                e.GetPlaybackTime(),
                v.a0.Timeline,
              ),
              r = e.GetPercentOffsetFromTime(
                e.GetVideoAvailableStartTime(),
                v.a0.Timeline,
              );
            r < 0.05 && (r = 0);
            let h = x.OQ(i, 0, 100).toFixed(1) + "%",
              u = x.OQ(o, 0, 100).toFixed(1) + "%",
              D = x.OQ(r, 0, 100).toFixed(1) + "%",
              z = {},
              T = {},
              j = {},
              X = {};
            s
              ? ((X.left = h), (z.width = h), (T.width = u), (j.width = D))
              : ((X.left = u), (T.width = u), (j.width = D));
            let K = (0, me.ap)(e.GetPlaybackTime()),
              O = (0, me.ap)(this.state.nHoverValue ?? 0),
              N = "STV_timelineContainer";
            this.state.bGrabberMouseDown && (N += " grabberDown"),
              e.IsTimelineMapActive() && (N += " minimapActive");
            let ue = "";
            (i = s ? i : o),
              i > 100
                ? (ue = " grabberOffScreenRight grabberOffscreen")
                : i < 0 && (ue = " grabberOffScreenLeft grabberOffscreen");
            let be = [];
            e.GetTimelineMarkers().forEach((V, pe) => {
              let J = e.GetPercentOffsetFromTime(V.nTime, v.a0.Timeline);
              J < 0 ||
                J > 100 ||
                be.push(
                  (0, t.jsx)(
                    he,
                    {
                      pos: J,
                      label: V.strTemplateName,
                      onMouseEnter: this.OnMarkerMouseEnter,
                      onMouseLeave: this.OnMarkerMouseLeave,
                    },
                    pe,
                  ),
                );
            });
            let xe = [];
            e.GetTimelineSegments().forEach((V, pe) => {
              let J = e.GetPercentOffsetFromTime(V.nTimeStart, v.a0.Timeline);
              if (J > 100) return;
              let Ce = e.GetPercentOffsetFromTime(V.nTimeEnd, v.a0.Timeline);
              Ce < 0 ||
                xe.push(
                  (0, t.jsx)(
                    Ae,
                    {
                      startPos: J,
                      endPos: Ce,
                      label: V.strTemplateName,
                      color: V.color,
                      onClick: (Fe) => this.OnSegmentClick(V.nTimeStart),
                    },
                    pe,
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
                      he,
                      {
                        pos: He,
                        label: (0, a.we)("#DASHPlayerControls_Start"),
                        onMouseEnter: this.OnMarkerMouseEnter,
                        onMouseLeave: this.OnMarkerMouseLeave,
                        onMouseDown: (V) => this.OnMouseDown(V, "start"),
                      },
                      "start",
                    ),
                    (0, t.jsx)(
                      he,
                      {
                        pos: Ge,
                        label: (0, a.we)("#DASHPlayerControls_End"),
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
                    children: xe,
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
                            className: "STV_timelineGrabber" + ue,
                            children: (0, t.jsx)("div", {
                              className: "STV_timelineGrabberArrow",
                              children: (0, t.jsx)(S.apU, {}),
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
        d([l.oI], k.prototype, "OnMouseDown", 1),
          d([l.oI], k.prototype, "OnMouseMove", 1),
          d([l.oI], k.prototype, "OnMouseUp", 1),
          d([l.oI], k.prototype, "OnKeyDown", 1),
          d([l.oI], k.prototype, "OnMouseHoverMove", 1),
          d([l.oI], k.prototype, "OnMouseHoverLeave", 1),
          d([l.oI], k.prototype, "AdjustHoverForClientX", 1),
          d([l.oI], k.prototype, "OnSegmentClick", 1),
          d([l.oI], k.prototype, "OnMarkerMouseEnter", 1),
          d([l.oI], k.prototype, "OnMarkerMouseLeave", 1),
          (k = d([f.PA], k));
        let se = class extends P.Component {
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
            return s && _.td.stream[e]
              ? (0, t.jsx)(Pe, { value: e, options: _.td.stream, onChange: s })
              : null;
          }
          render() {
            let { info: e } = this.state;
            if (!e) return null;
            let s = "";
            e.m_nViewerCount && (s = (0, L.Dq)(e.m_nViewerCount));
            let i =
                _.td.bValid && _.td.stream && _.td.stream[e.m_steamIDBroadcast],
              o =
                !this.props.bHideThumbnail &&
                this.props.bVerticalBroadcastChat &&
                (parseInt(e.m_strAppId) > 0 || i);
            const r =
              !this.props.bHideThumbnail &&
              this.props.bVerticalBroadcastChat &&
              i &&
              _.td.gidEvent;
            return (0, t.jsxs)("div", {
              className: "BroadcastDetails",
              children: [
                !this.props.bHideThumbnail &&
                  (0, t.jsx)(ie.y, {
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
                                (0, t.jsx)(S.y_e, {}),
                                (0, a.Yp)("#Broadcast_ViewerCount", s),
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
                            this.props.onOpenLinkInNewWindow?.(h, _.td.link),
                          className: "BroadcastLink",
                          children: _.td.linkName,
                        }),
                      }),
                  ],
                }),
                r && (0, t.jsx)(y.m, { gidEvent: _.td.gidEvent }),
                o &&
                  (0, t.jsx)(oe.p, {
                    id:
                      _.td.bValid &&
                      _.td.stream &&
                      _.td.stream[e.m_steamIDBroadcast]
                        ? _.td.appID
                        : parseInt(e.m_strAppId),
                    type: "game",
                    bPreferAssetWithoutOverride: !1,
                  }),
              ],
            });
          }
        };
        se = d([f.PA], se);
        class Pe extends P.Component {
          showContextMenu(s) {
            const { options: i, value: o, onChange: r } = this.props,
              h = Object.keys(i).map((u) =>
                (0, t.jsx)(
                  w.IK,
                  {
                    onSelected: () => r(u),
                    bChecked: u === o,
                    children: (0, a.we)(i[u]),
                  },
                  u,
                ),
              );
            (0, Q.lX)((0, t.jsx)(w.tz, { children: h }), s);
          }
          render() {
            const { value: s, options: i } = this.props,
              o = i[s];
            return (0, t.jsxs)("div", {
              className: "BroadcastLanguage",
              onClick: this.showContextMenu,
              children: [
                (0, t.jsxs)("span", { children: ["\xA0- ", (0, a.we)(o)] }),
                (0, t.jsx)("div", {
                  className: "ContextMenuButton",
                  children: (0, t.jsx)(S.GB9, {}),
                }),
              ],
            });
          }
        }
        d([l.oI], Pe.prototype, "showContextMenu", 1);
        let I = class extends P.Component {
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
                            n.uU,
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
                          ne.I,
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
                        children: (0, a.we)("#SteamTV_AddLinkRegion"),
                      }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "LinkOverlayInvalidRegion",
                  children: (0, t.jsx)("div", {
                    children: (0, a.we)("#SteamTV_LinkRegionReserved"),
                  }),
                }),
              ],
            });
          }
        };
        d([l.oI], I.prototype, "AddLinkRegion", 1),
          d([l.oI], I.prototype, "LoadLinkRegion", 1),
          d([l.oI], I.prototype, "OnSaveRegions", 1),
          d([l.oI], I.prototype, "DeleteRegion", 1),
          d([l.oI], I.prototype, "UpdatePanel", 1),
          (I = d([f.PA], I));
      },
      14596: ($, Y, c) => {
        "use strict";
        c.d(Y, { I: () => S });
        var t = c(62540),
          B = c(63696),
          f = c(71262),
          P = c(41230),
          Q = c(6460),
          R = c(7727),
          G = c(50777),
          v = c(42095),
          Z = c(21501),
          m = c.n(Z),
          w = c(23365),
          ie = Object.defineProperty,
          oe = Object.getOwnPropertyDescriptor,
          y = (n, g, p, b) => {
            for (
              var a = b > 1 ? void 0 : b ? oe(g, p) : g, L = n.length - 1, x;
              L >= 0;
              L--
            )
              (x = n[L]) && (a = (b ? x(g, p, a) : x(a)) || a);
            return b && a && ie(g, p, a), a;
          },
          ne = ((n) => (
            (n.topleft = "topleft"),
            (n.top = "top"),
            (n.topright = "topright"),
            (n.left = "left"),
            (n.middle = "middle"),
            (n.right = "right"),
            (n.bottomleft = "bottomleft"),
            (n.bottom = "bottom"),
            (n.bottomright = "bottomright"),
            n
          ))(ne || {});
        let S = class extends B.Component {
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
          constructor(n) {
            super(n),
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
          LinkRegionBoxRef(n) {
            this.m_elLinkRegionBox = n;
          }
          OnMouseDown(n, g) {
            this.m_elLinkRegionBox?.parentElement &&
              this.m_elLinkRegionBox.ownerDocument.defaultView &&
              ((this.m_fnMouseUp = (p) => {
                this.OnMouseUp(p, g);
              }),
              (this.m_fnMouseMove = (p) => {
                this.OnMouseMove(p, g);
              }),
              this.setState({ EdgeDown: g }),
              (this.m_rectLinkRegion =
                this.m_elLinkRegionBox.parentElement.getBoundingClientRect()),
              (this.m_nLocalOffsetXPct =
                ((n.clientX - this.m_rectLinkRegion.left) /
                  (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                  100 -
                this.state.curLeftPosPct),
              (this.m_nLocalOffsetYPct =
                ((n.clientY - this.m_rectLinkRegion.top) /
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
              n.preventDefault(),
              n.stopPropagation();
          }
          OnMouseMove(n, g) {
            if (this.state.EdgeDown !== void 0) {
              switch ((n.shiftKey && this.m_fnMouseUp(), g)) {
                case "left": {
                  this.UpdateState({
                    curLeftPosPct: this.CalcLeftEdge(n.clientX),
                  });
                  break;
                }
                case "right": {
                  this.UpdateState({
                    curRightPosPct: this.CalcRightEdge(n.clientX),
                  });
                  break;
                }
                case "top": {
                  this.UpdateState({
                    curTopPosPct: this.CalcTopEdge(n.clientY),
                  });
                  break;
                }
                case "bottom": {
                  this.UpdateState({
                    curBottomPosPct: this.CalcBottomEdge(n.clientY),
                  });
                  break;
                }
                case "topleft": {
                  this.UpdateState({
                    curTopPosPct: this.CalcBottomEdge(n.clientY),
                    curLeftPosPct: this.CalcLeftEdge(n.clientX),
                  });
                  break;
                }
                case "topright": {
                  this.UpdateState({
                    curTopPosPct: this.CalcTopEdge(n.clientY),
                    curRightPosPct: this.CalcRightEdge(n.clientX),
                  });
                  break;
                }
                case "bottomleft": {
                  this.UpdateState({
                    curLeftPosPct: this.CalcLeftEdge(n.clientX),
                    curBottomPosPct: this.CalcBottomEdge(n.clientY),
                  });
                  break;
                }
                case "bottomright": {
                  this.UpdateState({
                    curRightPosPct: this.CalcRightEdge(n.clientX),
                    curBottomPosPct: this.CalcBottomEdge(n.clientY),
                  });
                  break;
                }
                case "middle": {
                  const p = (0, w.OQ)(
                      this.CalcLeftEdge(n.clientX),
                      0,
                      100 - this.state.curWidthPct,
                    ),
                    b = 100 - (p + this.state.curWidthPct),
                    a = (0, w.OQ)(
                      this.CalcTopEdge(n.clientY),
                      0,
                      100 - this.state.curHeightPct,
                    ),
                    L = 100 - (a + this.state.curHeightPct),
                    x = {
                      curLeftPosPct: p,
                      curRightPosPct: b,
                      curTopPosPct: a,
                      curBottomPosPct: L,
                    };
                  this.setState(x);
                  break;
                }
                default:
                  break;
              }
              n.preventDefault(), n.stopPropagation();
            }
          }
          IsValidPct(n) {
            return n >= 0 && n <= 100;
          }
          UpdateState(n) {
            let g =
                n.curTopPosPct !== void 0
                  ? n.curTopPosPct
                  : this.state.curTopPosPct,
              p =
                n.curBottomPosPct !== void 0
                  ? n.curBottomPosPct
                  : this.state.curBottomPosPct,
              b =
                n.curLeftPosPct !== void 0
                  ? n.curLeftPosPct
                  : this.state.curLeftPosPct,
              a =
                n.curRightPosPct !== void 0
                  ? n.curRightPosPct
                  : this.state.curRightPosPct,
              L = (0, w.OQ)(
                100 - a - b,
                this.props.widthMinPct || 0,
                this.props.widthMaxPct || 100,
              ),
              x = (0, w.OQ)(
                100 - p - g,
                this.props.heightMinPct || 0,
                this.props.heightMaxPct || 100,
              );
            this.props.bLockAspectRatio &&
              (n.curLeftPosPct !== void 0 || n.curRightPosPct !== void 0
                ? (x = L / this.m_aspectRatio)
                : (L = x * this.m_aspectRatio)),
              n.curLeftPosPct !== void 0
                ? (b = 100 - a - L)
                : (a = 100 - (b + L)),
              n.curTopPosPct !== void 0
                ? (g = 100 - p - x)
                : (p = 100 - (g + x));
            const l = 100 - a - b,
              re = 100 - p - g;
            this.IsValidPct(b) &&
              this.IsValidPct(a) &&
              this.IsValidPct(g) &&
              this.IsValidPct(p) &&
              this.IsValidPct(l) &&
              this.IsValidPct(re) &&
              this.setState({
                curLeftPosPct: b,
                curRightPosPct: a,
                curTopPosPct: g,
                curBottomPosPct: p,
              });
          }
          GetXPercent(n) {
            return this.m_rectLinkRegion
              ? ((n - this.m_rectLinkRegion.left) /
                  (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                  100 -
                  (this.m_nLocalOffsetXPct ?? 0)
              : 0;
          }
          GetYPercent(n) {
            return this.m_rectLinkRegion
              ? ((n - this.m_rectLinkRegion.top) /
                  (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                  100 -
                  (this.m_nLocalOffsetYPct ?? 0)
              : 0;
          }
          CalcLeftEdge(n) {
            return (0, w.OQ)(this.GetXPercent(n), 0, 100);
          }
          CalcRightEdge(n) {
            return (0, w.OQ)(
              100 - (this.GetXPercent(n) + this.state.curWidthPct),
              0,
              100,
            );
          }
          CalcTopEdge(n) {
            return (0, w.OQ)(this.GetYPercent(n), 0, 100);
          }
          CalcBottomEdge(n) {
            return (0, w.OQ)(
              100 - (this.GetYPercent(n) + this.state.curHeightPct),
              0,
              100,
            );
          }
          OnMouseUp(n, g) {
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
          OnSetLinkURLChange(n) {
            this.setState({
              text_link_url: n.target.value,
              valid_link: this.validateUrl(n.target.value),
            });
          }
          OnSetLinkDescriptionChange(n) {
            this.setState({ text_link_description: n.target.value });
          }
          validateUrl(n) {
            return n != null
              ? /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
                  n,
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
            let n = {
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
                style: n,
                ref: this.LinkRegionBoxRef,
                draggable: !1,
                children: [
                  (0, t.jsxs)("div", {
                    className: m().LinkRegionGridBox,
                    children: [
                      (0, t.jsx)("div", {
                        className: `${m().LinkRegionEdge} ${m().TopLeft}`,
                        onMouseDown: (p) => {
                          this.OnMouseDown(p, "topleft");
                        },
                        draggable: !1,
                      }),
                      (0, t.jsx)("div", {
                        className: `${m().LinkRegionEdge} ${m().Top}`,
                        onMouseDown: (p) => {
                          this.OnMouseDown(p, "top");
                        },
                      }),
                      (0, t.jsx)("div", {
                        className: `${m().LinkRegionEdge} ${m().TopRight}`,
                        onMouseDown: (p) => {
                          this.OnMouseDown(p, "topright");
                        },
                        draggable: !1,
                      }),
                      (0, t.jsx)("div", {
                        className: `${m().LinkRegionEdge} ${m().Left}`,
                        onMouseDown: (p) => {
                          this.OnMouseDown(p, "left");
                        },
                        draggable: !1,
                      }),
                      (0, t.jsxs)("div", {
                        className: `${m().LinkRegionEdge} ${m().Middle}`,
                        onMouseDown: (p) => {
                          this.OnMouseDown(p, "middle");
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
                        onMouseDown: (p) => {
                          this.OnMouseDown(p, "right");
                        },
                        draggable: !1,
                      }),
                      (0, t.jsx)("div", {
                        className: `${m().LinkRegionEdge} ${m().BottomLeft}`,
                        onMouseDown: (p) => {
                          this.OnMouseDown(p, "bottomleft");
                        },
                        draggable: !1,
                      }),
                      (0, t.jsx)("div", {
                        className: `${m().LinkRegionEdge} ${m().Bottom}`,
                        onMouseDown: (p) => {
                          this.OnMouseDown(p, "bottom");
                        },
                        draggable: !1,
                      }),
                      (0, t.jsx)("div", {
                        className: `${m().LinkRegionEdge} ${m().BottomRight}`,
                        onMouseDown: (p) => {
                          this.OnMouseDown(p, "bottomright");
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
        y([f.oI], S.prototype, "LinkRegionBoxRef", 1),
          y([f.oI], S.prototype, "OnMouseDown", 1),
          y([f.oI], S.prototype, "OnMouseMove", 1),
          y([f.oI], S.prototype, "OnMouseUp", 1),
          y([f.oI], S.prototype, "HandleDelete", 1),
          y([f.oI], S.prototype, "OnSetLinkURLChange", 1),
          y([f.oI], S.prototype, "OnSetLinkDescriptionChange", 1),
          y([f.oI], S.prototype, "OnSaveLink", 1),
          y([f.oI], S.prototype, "OnEditLink", 1),
          (S = y([P.PA], S));
      },
    },
  ]);
})();
//# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-rel-steamui/build/client/steamui/sourcemaps/chunk~1a96cdf59.js.map
