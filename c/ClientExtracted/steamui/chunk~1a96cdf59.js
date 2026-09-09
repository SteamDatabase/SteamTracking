(() => {
  (self.webpackChunksteamui = self.webpackChunksteamui || []).push([
    [3834],
    {
      chunkid: (module) => {
        module.exports = {
          BroadcastPlayerLite: "SAxf3Rqn792kM6c4U_vx5",
          BroadcastPlayerLiteVideo: "yCd0zjymzfw3HkVm-1YwX",
          BroadcastContext: "_3TnYLKMweBMIC69qFU6OJj",
          BroadcastPlaceholderImg: "_3hxn99MT14hFUCrUp6zbsf",
        };
      },
      chunkid: (module) => {
        module.exports = {
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
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            BroadcastDetails: () => _,
            LinkOverlay: () => _,
            default: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = "10978408",
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        function _() {
          return (0, _.jsx)("div", {
            className: "STV_ReplayBanner",
            children: (0, _._)("#DASHPlayerControls_IsReplay"),
          });
        }
        const _ = (0, _._)((_) => {
          let _ = _.video;
          if (_ && (_.IsBroadcastClip() || _.IsBroadcastVOD())) return null;
          let _ = _._.Loading,
            _ = "";
          if (_) {
            (_ = _.GetBroadcastState()), (_ = _.GetBroadcastStateDescription());
            let _ = _.IsBuffering();
            _ == _._.Unlocking && ((_ = _._.Loading), (_ = "")),
              _ == _._.Ready && _ && ((_ = _._.Loading), (_ = ""));
          }
          if ((_ && _ != _._.Error && _.GetUserInputNeeded()) || _ == _._.Ready)
            return null;
          let _ = _ == _._.Loading;
          return (0, _.jsxs)("div", {
            className: "BroadcastVideoWatchState",
            style: {
              filter: "hue-rotate(40deg)",
            },
            children: [
              _ && (0, _.jsx)(_._, {}),
              !_ &&
                (0, _.jsx)("div", {
                  className: "BroadcastVideoWatchState_Text",
                  children: _,
                }),
            ],
          });
        });
        class _ extends _.Component {
          OnClick() {
            _.BroadcastWatchStore.UserInputClickVideo(this.props.video);
          }
          render() {
            return (0, _.jsxs)("div", {
              className: "BroadcastVideoUserInputNeeded",
              onClick: this.OnClick,
              children: [
                (0, _.jsx)(_.jGG, {}),
                (0, _.jsx)("span", {
                  children: (0, _._)("#DASHPlayerControls_ClickToPlay"),
                }),
              ],
            });
          }
        }
        _([_._], _.prototype, "OnClick", 1);
        var _ = "10978408",
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        let _ = class extends _.Component {
          constructor(_) {
            super(_);
          }
          HideStats() {
            this.props.closeStats && this.props.closeStats();
          }
          render() {
            let _ = this.props.stats;
            return (0, _.jsxs)("div", {
              className: "dash_video_stats",
              children: [
                (0, _.jsx)("button", {
                  className: "dash_stat_close_button",
                  onClick: this.HideStats,
                  children: (0, _.jsx)(_.sED, {}),
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_BufferingResolution"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetBufferingResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_PlaybackResolution"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetPlaybackResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_HtmlResolution"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetHTMLVideoResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_ContentServer"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetContentServerToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_StallEvents"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetStalledEventsToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_FailedDownloads"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetFailedDownloadsToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_TimeToFirstFrame"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetTimeToFirstFrameToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_PlaybackRate"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetPlaybackRateForDisplay(),
                    }),
                  ],
                }),
                (0, _.jsx)(_, {
                  stats: _,
                }),
              ],
            });
          }
        };
        _([_._], _.prototype, "HideStats", 1), (_ = _([_._], _));
        let _ = class extends _.Component {
          constructor(_) {
            super(_);
          }
          createBufferedRange(_) {
            let _ = this.props.stats,
              _ = [],
              _ = _ ? "vidbuf" : "audbuf",
              _ = _
                ? _.GetNumBufferedVideoRanges()
                : _.GetNumBufferedAudioRanges();
            if (_ > 0)
              for (let _ = 0; _ < _; ++_) {
                let _ = (0, _._)(
                    _
                      ? "#DASHPlayerStats_VideoBufferRange"
                      : "#DASHPlayerStats_AudioBufferRange",
                    _,
                  ),
                  _ = _
                    ? _.GetBufferedVideoSegmentForDisplay(_)
                    : _.GetBufferedAudioSegmentForDisplay(_);
                _.push(
                  (0, _.jsxs)(
                    "div",
                    {
                      children: [
                        _,
                        " ",
                        (0, _.jsx)("span", {
                          className: "videoStatsValue",
                          children: _,
                        }),
                      ],
                    },
                    _ + _,
                  ),
                );
              }
            else {
              let _ = (0, _._)(
                _
                  ? "#DASHPlayerStats_VideoNoRangeInformation"
                  : "#DASHPlayerStats_AudioNoRangeInformation",
              );
              _.push(
                (0, _.jsx)(
                  "div",
                  {
                    children: _,
                  },
                  _ + "none",
                ),
              );
            }
            return _;
          }
          render() {
            let _ = this.props.stats;
            return (0, _.jsxs)("div", {
              className: "dash_video_quick_stats",
              children: [
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_BytesReceived"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetBytesReceivedToDisplay(),
                    }),
                  ],
                }),
                this.props.stats.BHasFrameInformation() &&
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _._)("#DASHPlayerStats_DroppedFrames"),
                      " ",
                      (0, _.jsx)("span", {
                        className: "videoStatsValue",
                        children: _.GetDroppedFramesToDisplay(),
                      }),
                    ],
                  }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_VideoBuffered"),
                    " ",
                    (0, _.jsxs)("span", {
                      className: "videoStatsValue",
                      children: [_.GetVideoBufferedToDisplay(), " "],
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_AudioBuffered"),
                    " ",
                    (0, _.jsxs)("span", {
                      className: "videoStatsValue",
                      children: [_.GetAudioBufferedToDisplay(), " "],
                    }),
                  ],
                }),
                this.createBufferedRange(!0),
                this.createBufferedRange(!1),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_BandwidthRequired"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetBandwidthRequiredToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_BandwidthVideo"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetBandwithVideoToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_BandwidthNums"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetBandwidthStatsToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_DownloadNums"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetDownloadTimeStatsToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_ActiveDownloads"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetActiveDownloadsToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_VideoDownloadProgress"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetVideoDownloadProgressToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_DroppingFrames"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetPersistentFrameDropsForDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_CurrentFPS"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetCurrentFPSForDisplay(),
                    }),
                  ],
                }),
              ],
            });
          }
        };
        _ = _([_._], _);
        var _ = __webpack_require__("chunkid"),
          _ = "10978408",
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        class _ extends _.Component {
          m_elSettingsButton;
          m_SettingsButtonPos;
          m_elClickListener = null;
          m_elSettingsPanel = null;
          m_elSubtitlesButton = _.createRef();
          m_elSubtitlesPanel = _.createRef();
          m_SubtitlesButtonPos;
          constructor(_) {
            super(_),
              (this.state = {
                bSettingsOpen: !1,
                bSubtitlesOpen: !1,
              });
          }
          OnVideoControlClick(_) {
            this.setState({
              bSettingsOpen: !this.state.bSettingsOpen,
            }),
              (this.m_SettingsButtonPos = [
                this.m_elSettingsButton.offsetLeft,
                this.m_elSettingsButton.offsetTop,
              ]),
              (this.m_elClickListener =
                _.currentTarget.ownerDocument.defaultView),
              this.m_elClickListener?.addEventListener(
                "mouseup",
                this.OnMouseUp,
                !0,
              );
          }
          OnSubtitlesClick(_) {
            this.setState({
              bSubtitlesOpen: !this.state.bSubtitlesOpen,
            }),
              (this.m_SubtitlesButtonPos = [
                this.m_elSubtitlesButton.current?.offsetLeft,
                this.m_elSubtitlesButton.current?.offsetTop,
              ]),
              (this.m_elClickListener =
                _.currentTarget.ownerDocument.defaultView),
              this.m_elClickListener?.addEventListener(
                "mouseup",
                this.OnMouseUp,
                !0,
              );
          }
          OnMouseUp(_) {
            this.m_elClickListener?.removeEventListener(
              "mouseup",
              this.OnMouseUp,
              !0,
            ),
              (0, _._)(this.m_elSettingsPanel, _.target) ||
                this.setState({
                  bSettingsOpen: !1,
                }),
              (0, _._)(this.m_elSubtitlesPanel.current, _.target) ||
                this.setState({
                  bSubtitlesOpen: !1,
                });
          }
          bindSettingsButton(_) {
            this.m_elSettingsButton = _;
          }
          BindSettingsPanel(_) {
            this.m_elSettingsPanel = _;
          }
          OnShowStats(_) {
            this.props.onShowStats(_),
              this.setState({
                bSettingsOpen: !this.state.bSettingsOpen,
              });
          }
          render() {
            let _ = !1,
              _ = !1;
            const { video: _, actions: _ } = this.props;
            let _,
              _ = [],
              _ = 0,
              _ = (0, _.jsx)(
                "div",
                {
                  className: "settingsMenuSeparator",
                },
                "separator",
              );
            const _ = 260,
              _ = 32;
            if (
              (this.state.bSettingsOpen &&
                ((_ = !0),
                (_ = this.props.video.GetVideoRepresentations()),
                (_ = _.map((_) =>
                  (0, _.jsx)(
                    _._,
                    {
                      onClick: () => {
                        this.props.video.SetVideoRepresentation(_),
                          this.setState({
                            bSettingsOpen: !this.state.bSettingsOpen,
                          });
                      },
                      bChecked: _.selected,
                      children: _.displayName,
                    },
                    _._,
                  ),
                )),
                _.push(_),
                _.push(
                  (0, _.jsxs)(
                    _._,
                    {
                      onClick: this.OnShowStats,
                      children: [
                        (0, _._)("#Broadcast_VideoContext_ToggleStats"),
                        "	",
                      ],
                    },
                    "statsToggle",
                  ),
                ),
                (_ = 0 - (_.length * 21 + _))),
              this.state.bSubtitlesOpen)
            ) {
              (_ = !0),
                (_ = []),
                _.push(
                  (0, _.jsx)(
                    _._,
                    {
                      onClick: () => {
                        this.props.video.SetSubtitles(null),
                          this.setState({
                            bSubtitlesOpen: !this.state.bSubtitlesOpen,
                          });
                      },
                      className: "NoSubtitles",
                      bChecked: !1,
                      children: (0, _._)("#Broadcast_None"),
                    },
                    "none",
                  ),
                );
              for (
                let _ = 0;
                _ < this.props.video.ListSubtitles().length;
                _++
              ) {
                const _ = this.props.video.ListSubtitles()[_];
                _.push(
                  (0, _.jsx)(
                    _._,
                    {
                      onClick: () => {
                        this.props.video.SetSubtitles(_.language),
                          this.setState({
                            bSubtitlesOpen: !this.state.bSubtitlesOpen,
                          });
                      },
                      bChecked: _.mode === "showing",
                      children: _.label,
                    },
                    _.language,
                  ),
                );
              }
              _ = 0 - (_ + _);
            }
            const _ =
              this.props.video.BHasPlayer() && this.props.video.BHasTimedText();
            return (0, _.jsxs)("div", {
              className: "STV_BroadcastSettings",
              children: [
                _ &&
                  (0, _.jsx)("div", {
                    className:
                      "videoControlButton" + (_ ? " ClosedCaptionsActive" : ""),
                    onClick: this.OnSubtitlesClick,
                    ref: this.m_elSubtitlesButton,
                    children: (0, _.jsx)(_.N8C, {}),
                  }),
                (0, _.jsx)("div", {
                  className:
                    "videoControlButton VideoSettings " +
                    (_ ? " VideoSettingsOpen" : ""),
                  onClick: this.OnVideoControlClick,
                  ref: this.bindSettingsButton,
                  children: (0, _.jsx)(_.wB_, {}),
                }),
                (0, _.jsx)(_, {
                  video: _,
                }),
                _ &&
                  _.map((_) =>
                    (0, _.jsx)(
                      "div",
                      {
                        className: "videoControlButton videoControlFitWidth",
                        children: _,
                      },
                      _.key,
                    ),
                  ),
                _ &&
                  (0, _.jsx)("div", {
                    ref: this.BindSettingsPanel,
                    className: "STV_BroadcastSettingsPanel",
                    style: {
                      left: this.m_SettingsButtonPos[0],
                      top: this.m_SettingsButtonPos[1],
                      marginTop: _,
                    },
                    children: (0, _.jsx)("div", {
                      className: "STV_BroadcastSettingsMenuItems",
                      children: _,
                    }),
                  }),
                _ &&
                  (0, _.jsx)("div", {
                    ref: this.m_elSubtitlesPanel,
                    className: "STV_BroadcastSettingsPanel SubtitlesMenu",
                    style: {
                      maxHeight: _ + "px",
                      left: this.m_SubtitlesButtonPos[0],
                      top: this.m_SubtitlesButtonPos[1],
                      marginTop: _,
                    },
                    children: (0, _.jsx)("div", {
                      className: "STV_BroadcastSettingsMenuItems",
                      children: _,
                    }),
                  }),
              ],
            });
          }
        }
        _([_._], _.prototype, "OnVideoControlClick", 1),
          _([_._], _.prototype, "OnSubtitlesClick", 1),
          _([_._], _.prototype, "OnMouseUp", 1),
          _([_._], _.prototype, "bindSettingsButton", 1),
          _([_._], _.prototype, "BindSettingsPanel", 1),
          _([_._], _.prototype, "OnShowStats", 1);
        const _ = !0;
        let _ = class extends _.Component {
          constructor(_) {
            super(_), (0, _._)(this);
          }
          k_nHideSliderTimeout = 1.5 * 1e3;
          m_bShowSlider = _;
          m_schHideSlider = new _._();
          m_bChildDragging = !1;
          m_bMouseOver = !1;
          componentWillUnmount() {
            this.m_schHideSlider.Cancel();
          }
          ToggleMute() {
            let _ = this.props.video,
              _ = _.IsMuted();
            _.SetMute(!_), _.GetVolume() < 0.01 && _.SetVolume(0.5);
          }
          OnMouseEnter(_) {
            (this.m_bShowSlider = !0),
              (this.m_bMouseOver = !0),
              this.m_schHideSlider.Cancel();
          }
          OnMouseLeave(_) {
            (this.m_bMouseOver = !1), this.ScheduleHide();
          }
          OnChildDrag(_) {
            (this.m_bChildDragging = _), this.ScheduleHide();
          }
          ScheduleHide() {
            this.m_bMouseOver ||
              this.m_bChildDragging ||
              this.m_schHideSlider.Schedule(
                this.k_nHideSliderTimeout,
                () => (this.m_bShowSlider = _),
              );
          }
          render() {
            let _ = this.props.video,
              _ = _.IsMuted(),
              _ = _.GetVolume() * 100,
              _ = "videoControlButton";
            _ > 65
              ? (_ += " HighestVolume")
              : _ > 45
                ? (_ += " HighVolume")
                : _ < 46 && _ > 24
                  ? (_ += " MedVolume")
                  : _ < 25 && (_ += " LowVolume");
            let _ = "BroadcastVolumeControl";
            return (
              this.m_bShowSlider && (_ += " ShowVolumeSlider"),
              _ && (_ += " muted"),
              (0, _.jsx)("div", {
                className: _,
                onMouseEnter: this.OnMouseEnter,
                onMouseLeave: this.OnMouseLeave,
                children: (0, _.jsxs)("div", {
                  className: "BroadcastVolumeControl_FixedLayout",
                  children: [
                    (0, _.jsx)("div", {
                      className: _,
                      onClick: this.ToggleMute,
                      children: (0, _.jsx)(_.fSs, {}),
                    }),
                    (0, _.jsx)(_, {
                      video: _,
                      onDrag: this.OnChildDrag,
                    }),
                  ],
                }),
              })
            );
          }
        };
        _([_._], _.prototype, "m_bShowSlider", 2),
          _([_._], _.prototype, "ToggleMute", 1),
          _([_._], _.prototype, "OnMouseEnter", 1),
          _([_._], _.prototype, "OnMouseLeave", 1),
          _([_._], _.prototype, "OnChildDrag", 1),
          (_ = _([_._], _));
        let _ = class extends _.Component {
          constructor(_) {
            super(_), (0, _._)(this);
          }
          m_elSlider = null;
          m_nVolumeStartOfDrag = 0;
          OnMouseDown(_) {
            let _ = _.currentTarget;
            (this.m_elSlider = _),
              (this.m_nVolumeStartOfDrag = this.props.video.GetVolume()),
              this.SetVolumeWithCoord(_, _.clientX),
              _.ownerDocument.defaultView?.addEventListener(
                "mousemove",
                this.OnMouseMove,
              ),
              _.ownerDocument.defaultView?.addEventListener(
                "mouseup",
                this.OnMouseUp,
              ),
              this.props.onDrag(!0);
          }
          OnMouseMove(_) {
            this.m_elSlider &&
              this.SetVolumeWithCoord(this.m_elSlider, _.clientX);
          }
          OnMouseUp(_) {
            if (!this.m_elSlider) return;
            this.SetVolumeWithCoord(this.m_elSlider, _.clientX);
            let _ = this.props.video;
            _.IsMuted() && _.SetVolume(this.m_nVolumeStartOfDrag),
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
          SetVolumeWithCoord(_, _) {
            let _ = _.getBoundingClientRect(),
              _ = _._(_, _.left, _.right, 0, 1),
              _ = _._(_, 0, 1),
              _ = this.props.video;
            _.SetMute(_ < 0.01), _.SetVolume(_);
          }
          render() {
            let _ = this.props.video,
              _ = _.GetVolume() * 100;
            _.IsMuted() && (_ = 0);
            let _ = {
                left: `${_}%`,
              },
              _ = {
                width: `${_}%`,
              };
            return (0, _.jsxs)("div", {
              className: "BroadcastVolumeSlider",
              onMouseDown: this.OnMouseDown,
              children: [
                (0, _.jsx)("div", {
                  className: "BroadcastVolumeSlider_Track",
                }),
                (0, _.jsx)("div", {
                  className: "BroadcastVolumeSlider_Fill",
                  style: _,
                }),
                (0, _.jsx)("div", {
                  className: "BroadcastVolumeSlider_Thumb",
                  style: _,
                }),
              ],
            });
          }
        };
        _([_._], _.prototype, "OnMouseDown", 1),
          _([_._], _.prototype, "OnMouseMove", 1),
          _([_._], _.prototype, "OnMouseUp", 1),
          _([_._], _.prototype, "SetVolumeWithCoord", 1),
          (_ = _([_._], _));
        var _ = __webpack_require__("chunkid"),
          _ = "10978408",
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        const _ = 3200,
          _ = 15;
        let _ = class extends _.Component {
          m_schHideControls = new _._();
          m_schUnmountControls = new _._();
          m_elVideo = null;
          m_elBroadcastPlayer = null;
          m_bMouseDown = !1;
          m_elMouseDown = null;
          m_listeners = new _._();
          constructor(_) {
            super(_),
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
            let _ = this.state.video;
            _ &&
              (_.BroadcastWatchStore.StopVideo(_),
              this.setState({
                video: null,
              }),
              this.props.fnSetBroadcastVideo?.(null));
          }
          IsMuted() {
            let _ = this.state.video;
            return !_ || _.IsMuted();
          }
          StopPlaybackTillUserInput() {
            let _ = this.state.video;
            _ && _.StopPlaybackTillUserInput();
          }
          componentDidUpdate(_, _) {
            !_.bMountControls && this.state.bMountControls
              ? setTimeout(() => {
                  this.setState((_) => ({
                    bControlsVisible: _.bMountControls,
                  }));
                }, 15)
              : _.bControlsVisible &&
                !this.state.bControlsVisible &&
                this.state.video &&
                !this.state.video.IsPaused() &&
                this.m_schUnmountControls.Schedule(2e3, this.UmountControls),
              this.props.steamIDBroadcast !== _.steamIDBroadcast &&
                this.BindVideoRef(this.m_elVideo);
            const _ = this.props.nAppIDVOD;
            _ &&
              (_.strInitialCapsuleImageUrl === void 0 || _.nAppIDVOD != _) &&
              _._.Get()
                .QueueAppRequest(_, {
                  include_assets: !0,
                  include_trailers: !0,
                })
                .then(() => {
                  const _ =
                    _._.Get().GetApp(_)?.GetAssets()?.GetMainCapsuleURL() || "";
                  this.setState({
                    strInitialCapsuleImageUrl: _,
                  });
                });
          }
          componentWillUnmount() {
            this.m_listeners.Unregister(),
              this.m_schHideControls.Cancel(),
              this.m_schUnmountControls.Cancel(),
              this.StopVideo();
          }
          BindBroadcastPlayerRef(_) {
            this.m_listeners.Unregister(),
              (this.m_elBroadcastPlayer = _),
              _ &&
                (this.m_listeners.AddEventListener(
                  _,
                  "fullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  _,
                  "mozfullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  _,
                  "webkitfullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  _,
                  "msfullscreenchange",
                  this.OnFullscreenChange,
                ));
          }
          BindVideoRef(_) {
            let _ = null;
            this.StopVideo(),
              this.props.steamIDBroadcast
                ? _ &&
                  (_ = _.BroadcastWatchStore.CreateBroadcastVideo(
                    _,
                    this.props.steamIDBroadcast,
                    this.props.watchLocation,
                    !!this.props.bWebRTC,
                  ))
                : this.props.broadcastClipID
                  ? _ &&
                    (_ = _.BroadcastWatchStore.CreateClipVideo(
                      _,
                      this.props.broadcastClipID,
                      this.props.watchLocation,
                    ))
                  : this.props.nAppIDVOD &&
                    _ &&
                    ((_ = _.BroadcastWatchStore.CreateVODVideo(
                      _,
                      this.props.nAppIDVOD,
                      this.props.watchLocation,
                    )),
                    this.props.fnOnVideoEnd &&
                      _.SetOnVideoCallback(this.props.fnOnVideoEnd)),
              _ &&
                (this.props.bStartMuted && _.SetMute(!0),
                this.props.bStartWithSubtitles && _.SetStartWithSubtitles(!0),
                this.props.bStartPaused
                  ? _.StopPlaybackTillUserInput()
                  : _.Play()),
              this.setState({
                video: _,
              }),
              this.props.fnSetBroadcastVideo?.(_),
              (this.m_elVideo = _);
          }
          OnMouseDown(_) {
            (this.m_bMouseDown = !0),
              (this.m_elMouseDown = _.currentTarget),
              this.m_elMouseDown.ownerDocument.defaultView?.addEventListener(
                "mouseup",
                this.OnMouseUp,
              );
          }
          OnMouseUp(_) {
            (this.m_bMouseDown = !1),
              this.m_elMouseDown?.ownerDocument.defaultView?.removeEventListener(
                "mouseup",
                this.OnMouseUp,
              ),
              this.m_schHideControls.Schedule(_, this.HideControls);
          }
          OnMouseMove(_) {
            this.m_schHideControls.Cancel(),
              this.m_schUnmountControls.Cancel(),
              this.state.bMountControls
                ? this.state.bControlsVisible ||
                  this.setState({
                    bControlsVisible: !0,
                  })
                : this.setState({
                    bMountControls: !0,
                  }),
              this.m_schHideControls.Schedule(_, this.HideControls);
          }
          OnMouseLeave(_) {
            this.HideControls();
          }
          HideControls() {
            this.state.bControlsVisible &&
              !this.m_bMouseDown &&
              this.setState({
                bControlsVisible: !1,
              });
          }
          UmountControls() {
            this.setState((_) =>
              !_.bControlsVisible && _.bMountControls
                ? {
                    bMountControls: !1,
                  }
                : null,
            );
          }
          ShowStatsView() {
            let _ = this.state.video;
            if (!_) return;
            this.state.bShowStats ||
              (this.setState({
                bShowStats: !0,
              }),
              _.SetStatsViewIsVisible(!0));
          }
          OnContextMenu(_) {
            this.state.bFullscreen ||
              ((0, _._)(
                (0, _.jsx)(_._, {
                  children: this.GetContextMenuItems(),
                }),
                _,
              ),
              _.preventDefault());
          }
          ToggleStatsView(_) {
            let _ = !this.state.bShowStats;
            this.setState({
              bShowStats: _,
            });
            let _ = this.state.video;
            _ && _.SetStatsViewIsVisible(_);
          }
          ShowStorePage(_) {
            let _ = this.state.video;
            if (!_ || !this.props.onOpenLinkInNewWindow) return;
            let _ = _.GetBroadcastInfo();
            if (!_) return;
            let _ = (0, _._)(`${_._.STORE_BASE_URL}app/${_.m_strAppId}`);
            this.props.onOpenLinkInNewWindow(_, _), _.stopPropagation();
          }
          GetContextMenuItems() {
            let _ = [],
              _ = this.state.video;
            if (!_) return _;
            let _ = _.GetBroadcastInfo();
            return (
              _.push(
                (0, _.jsx)(
                  _._,
                  {
                    bChecked: this.state.bShowStats,
                    onSelected: (_) => {
                      this.ToggleStatsView(_);
                    },
                    children: (0, _._)("#Broadcast_VideoContext_ToggleStats"),
                  },
                  "togglestats",
                ),
              ),
              _ &&
                _.m_strAppId != "0" &&
                Number.parseInt(_.m_strAppId) != _._ &&
                _.push(
                  (0, _.jsx)(
                    _._,
                    {
                      onSelected: (_) => {
                        this.ShowStorePage(_);
                      },
                      children: (0, _._)("#Broadcast_VideoContext_OpenStore"),
                    },
                    "visitstore",
                  ),
                ),
              _
            );
          }
          CloseStats() {
            let _ = this.state.video;
            _ &&
              this.state.bShowStats &&
              (this.setState({
                bShowStats: !1,
              }),
              _.SetStatsViewIsVisible(!1));
          }
          OnToggleFullscreen() {
            this.m_elBroadcastPlayer &&
              ((0, _._)(this.m_elBroadcastPlayer)
                ? (0, _._)(this.m_elBroadcastPlayer)
                : (0, _._)(this.m_elBroadcastPlayer, this.m_elVideo ?? void 0));
          }
          OnFullscreenChange(_) {
            if (!this.m_elBroadcastPlayer) return;
            let _ = (0, _._)(this.m_elBroadcastPlayer);
            this.setState({
              bFullscreen: _,
            });
          }
          BHideVideoControls() {
            let _ = this.state.video;
            return !_ || _.GetUserInputNeeded()
              ? !0
              : _.BroadcastWatchStore.GetBroadcastState(_) == _._.Error;
          }
          render() {
            const _ = this.state.video,
              _ = _ && _.IsPaused(),
              _ = _ && _.BHasDASHStats() && this.state.bShowStats,
              _ = !!(_ && _.IsReplay()),
              _ = this.state.bMountControls,
              _ = this.state.bControlsVisible || _,
              _ = !!(_ && _.GetUserInputNeeded()),
              _ = _?.GetDASHPlayerStats(),
              _ =
                _?.IsBroadcastVOD() &&
                _ &&
                this.state.strInitialCapsuleImageUrl;
            let _ = "videoContainer";
            _ || (_ += " HidePlayerControls"),
              _ && (_ += " VideoPaused"),
              this.state.bFullscreen && (_ += " fullscreenVideo"),
              this.props.classes && (_ += " " + this.props.classes);
            let _ = [];
            !this.state.bFullscreen &&
              this.props.actions &&
              (_ = _.concat(this.props.actions)),
              !this.state.bFullscreen &&
                this.props.onTheaterMode &&
                _.push(
                  (0, _.jsx)(
                    "div",
                    {
                      onClick: this.props.onTheaterMode,
                      title: (0, _._)("#Broadcast_View_Theater"),
                      className: "BroadcastTheaterToggle",
                    },
                    "ChatPosToggle ChatTheaterToggle",
                  ),
                ),
              _.push(
                (0, _.jsx)(
                  "div",
                  {
                    title: (0, _._)("#Broadcast_View_Fullscreen"),
                    onClick: this.OnToggleFullscreen,
                    className: "BroadcastFullscreenToggle",
                  },
                  "FullscreenToggle",
                ),
              );
            const _ = _ && !this.BHideVideoControls(),
              _ = _ && !this.state.bFullscreen,
              _ =
                this.props.fnRenderBroadcastContext &&
                this.props.fnRenderBroadcastContext();
            return (0, _.jsxs)("div", {
              ref: this.BindBroadcastPlayerRef,
              className: _,
              onMouseMove: this.OnMouseMove,
              onClick: this.OnMouseMove,
              onMouseLeave: this.OnMouseLeave,
              onContextMenu: this.OnContextMenu,
              onMouseDown: this.OnMouseDown,
              children: [
                _ &&
                  (0, _.jsx)("div", {
                    className: _().BroadcastContext,
                    children: _,
                  }),
                _ && (0, _.jsx)(_, {}),
                this.props.showVideoBackgroundBlur &&
                  this.m_elVideo &&
                  (0, _.jsx)(_._, {
                    className: "videoBlur",
                    elementRef: this.m_elVideo,
                    updateRate: 33,
                    width: 320,
                    height: 180,
                    reductionFactor: 10,
                    blurAmount: 5,
                  }),
                (0, _.jsx)("video", {
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
                  ? (0, _.jsx)(_, {
                      linkRegions: this.props.linkRegions,
                      editMode: !!this.props.editMode,
                      onSaveLinkRegions: this.props.onSaveLinkRegions,
                    })
                  : null,
                this.props.linkElement,
                _ &&
                  (0, _.jsx)("img", {
                    loading: "lazy",
                    className: (0, _._)(
                      _().BroadcastPlaceholderImg,
                      "BroadcastPlaceholderImg",
                    ),
                    src: this.state.strInitialCapsuleImageUrl,
                  }),
                _ &&
                  _ &&
                  (0, _.jsx)(_, {
                    video: _,
                    actions: _,
                    onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                    onShowStats: this.ToggleStatsView,
                    bIncludeClipEditor: !!this.props.bIncludeClipEditor,
                  }),
                _ &&
                  (0, _.jsx)(_, {
                    onClick: this.props.onRequestClose,
                  }),
                _ &&
                  _ &&
                  (0, _.jsx)(_, {
                    stats: _,
                    closeStats: this.CloseStats,
                  }),
                (0, _.jsx)(_, {
                  video: _,
                }),
                _ &&
                  _ &&
                  (0, _.jsx)(_, {
                    video: _,
                  }),
              ],
            });
          }
        };
        _([_._], _.prototype, "BindBroadcastPlayerRef", 1),
          _([_._], _.prototype, "BindVideoRef", 1),
          _([_._], _.prototype, "OnMouseDown", 1),
          _([_._], _.prototype, "OnMouseUp", 1),
          _([_._], _.prototype, "OnMouseMove", 1),
          _([_._], _.prototype, "OnMouseLeave", 1),
          _([_._], _.prototype, "HideControls", 1),
          _([_._], _.prototype, "UmountControls", 1),
          _([_._], _.prototype, "ShowStatsView", 1),
          _([_._], _.prototype, "OnContextMenu", 1),
          _([_._], _.prototype, "ToggleStatsView", 1),
          _([_._], _.prototype, "ShowStorePage", 1),
          _([_._], _.prototype, "CloseStats", 1),
          _([_._], _.prototype, "OnToggleFullscreen", 1),
          _([_._], _.prototype, "OnFullscreenChange", 1),
          (_ = _([_._], _));
        let _ = class extends _.Component {
          render() {
            const { video: _ } = this.props;
            if (!_) return null;
            let _ = _.has_segments;
            return (0, _.jsxs)("div", {
              className: "videoControls",
              children: [
                (0, _.jsx)(_, {
                  steamID: this.props.video.GetBroadcastSteamID(),
                  bHideThumbnail: !0,
                  bVerticalBroadcastChat: !0,
                  onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                }),
                (0, _.jsxs)("div", {
                  className: "videoControlsBottom" + (_ ? "" : " noSegments"),
                  children: [
                    (0, _.jsx)(_, {
                      video: _,
                      bIncludeClipEditor: this.props.bIncludeClipEditor,
                    }),
                    (0, _.jsxs)("div", {
                      className: "STV_BroadcastController",
                      children: [
                        (0, _.jsx)("div", {
                          className: "videoControlsButtons LeftSpacer",
                        }),
                        (0, _.jsx)(_, {
                          video: _,
                        }),
                        (0, _.jsx)(_, {
                          video: _,
                        }),
                        (0, _.jsx)(_, {
                          video: _,
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
        _ = _([_._], _);
        class _ extends _.PureComponent {
          render() {
            return this.props.onClick
              ? (0, _.jsx)("div", {
                  className: "STV_BroadcastClose",
                  onClick: this.props.onClick,
                  children: (0, _.jsx)(_.sED, {}),
                })
              : null;
          }
        }
        class _ extends _.Component {
          OnJumpBackward() {
            this.props.video.JumpTime(-_);
          }
          OnJumpForward() {
            this.props.video.JumpTime(_);
          }
          render() {
            let _ = this.props.video,
              _ = _.CanSeek();
            return (0, _.jsxs)("div", {
              className: "videoControlsButtons PlayControls",
              children: [
                (0, _.jsx)(_, {
                  video: _,
                }),
                _ &&
                  (0, _.jsxs)("div", {
                    className:
                      "videoControlButton videoControlJump controlFlip",
                    onClick: this.OnJumpBackward,
                    children: [
                      (0, _.jsx)(_.tID, {
                        bHidePostArrow: !0,
                        bHidePreArrow: !0,
                        bShowJumpAheadBox: !0,
                        bFlipHorizontal: !0,
                      }),
                      (0, _.jsx)("div", {
                        className: "jumpAheadValue",
                        children: _,
                      }),
                    ],
                  }),
                (0, _.jsx)(_, {
                  video: _,
                }),
                _ &&
                  (0, _.jsxs)("div", {
                    className: "videoControlButton videoControlJump",
                    onClick: this.OnJumpForward,
                    children: [
                      (0, _.jsx)(_.tID, {
                        bHidePostArrow: !0,
                        bHidePreArrow: !0,
                        bShowJumpAheadBox: !0,
                        bFlipHorizontal: !1,
                      }),
                      (0, _.jsx)("div", {
                        className: "jumpAheadValue",
                        children: _,
                      }),
                    ],
                  }),
                _ &&
                  (0, _.jsx)(_, {
                    video: _,
                  }),
              ],
            });
          }
        }
        _([_._], _.prototype, "OnJumpBackward", 1),
          _([_._], _.prototype, "OnJumpForward", 1);
        const _ = (0, _._)((_) => {
          if (_.video.IsBroadcastClip() || _.video.IsBroadcastVOD())
            return null;
          const _ = (_) => {
            _.video.JumpToLiveEdge();
          };
          let _ = _.video.IsOnLiveEdge();
          return (0, _.jsx)("div", {
            className: "videoControlsButtons GoLive",
            children: (0, _.jsxs)("div", {
              className:
                "videoControlButton videoControlGoLive" +
                (_ ? " isLiveEdge" : ""),
              onClick: _ ? void 0 : _,
              children: [
                (0, _.jsx)(_.tID, {
                  bHidePreArrow: !0,
                  bHidePostArrow: !0,
                  bFlipHorizontal: !1,
                }),
                (0, _.jsx)("div", {
                  className: "jumpGoLive",
                  children: (0, _._)(
                    _
                      ? "#DASHPlayerControls_IsLive"
                      : "#DASHPlayerControls_GoLive",
                  ),
                }),
              ],
            }),
          });
        });
        let _ = class extends _.Component {
          OnTogglePlayPause() {
            this.props.video.TogglePlayPause();
          }
          render() {
            let _ = this.props.video.IsPaused();
            return (0, _.jsx)("div", {
              className: "videoControlButton buttonPlayPause",
              onClick: this.OnTogglePlayPause,
              children: _ ? (0, _.jsx)(_.jGG, {}) : (0, _.jsx)(_.vRz, {}),
            });
          }
        };
        _([_._], _.prototype, "OnTogglePlayPause", 1), (_ = _([_._], _));
        let _ = class extends _.Component {
          constructor(_) {
            super(_), (0, _._)(this), (this.video = _.video);
          }
          componentDidUpdate() {
            this.video = this.props.video;
          }
          video = void 0;
          get has_previous_marker() {
            return this.GetPreviousMarkerTime() !== void 0;
          }
          GetPreviousMarkerTime() {
            const _ = this.video;
            if (!_?.has_markers) return;
            let _ = _.GetTimelineMarkers(),
              _ = _.GetPlaybackTime();
            for (let _ = _.length - 1; _ >= 0; _--)
              if (!(_[_].nTime >= _)) return _[_].nTime;
          }
          OnJumpToPreviousMarkerClicked(_) {
            let _ = this.GetPreviousMarkerTime();
            _ !== void 0 && this.props.video.Seek(_ - 0.2);
          }
          render() {
            let _ = this.props.video.BHasMarkersOrSegments();
            return (0, _.jsx)("div", {
              className:
                "videoControlButton jumpToMarker controlFlip" +
                (_ ? "" : " noMarkersOrSegments") +
                (this.has_previous_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToPreviousMarkerClicked,
              children: (0, _.jsx)(_.tID, {
                bHidePostArrow: !0,
                bFlipHorizontal: !0,
              }),
            });
          }
        };
        _([_._], _.prototype, "video", 2),
          _([_._], _.prototype, "has_previous_marker", 1),
          _([_._], _.prototype, "OnJumpToPreviousMarkerClicked", 1),
          (_ = _([_._], _));
        let _ = class extends _.Component {
          constructor(_) {
            super(_), (0, _._)(this), (this.video = _.video);
          }
          componentDidUpdate() {
            this.video = this.props.video;
          }
          video = void 0;
          get has_next_marker() {
            return this.GetNextMarkerTime() !== void 0;
          }
          GetNextMarkerTime() {
            const _ = this.video;
            if (!_?.has_markers) return;
            let _ = _.GetTimelineMarkers(),
              _ = _.GetPlaybackTime();
            for (let _ = 0; _ < _.length; _++)
              if (!(_[_].nTime <= _)) return _[_].nTime;
          }
          OnJumpToNextMarkerClicked(_) {
            let _ = this.GetNextMarkerTime();
            _ !== void 0 && this.props.video.Seek(_);
          }
          render() {
            let _ = this.props.video.BHasMarkersOrSegments();
            return (0, _.jsx)("div", {
              className:
                "videoControlButton jumpToMarker" +
                (_ ? "" : " noMarkersOrSegments") +
                (this.has_next_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToNextMarkerClicked,
              children: (0, _.jsx)(_.tID, {
                bHidePostArrow: !0,
                bFlipHorizontal: !1,
              }),
            });
          }
        };
        _([_._], _.prototype, "video", 2),
          _([_._], _.prototype, "has_next_marker", 1),
          _([_._], _.prototype, "OnJumpToNextMarkerClicked", 1),
          (_ = _([_._], _));
        const _ = (_) => {
          let _ = () => _.onMouseEnter(_.pos);
          return (0, _.jsx)("div", {
            className: "timelineMarker",
            title: _.label,
            style: {
              left: _.pos + "%",
            },
            onMouseEnter: _,
            onMouseLeave: _.onMouseLeave,
            onMouseDown: _.onMouseDown ? _.onMouseDown : void 0,
            children: (0, _.jsx)("div", {
              className: "timelineMarkerIcon",
              children: (0, _.jsx)(_.Dp6, {}),
            }),
          });
        };
        function _(_) {
          let _ = _.startPos,
            _ = _.endPos,
            _ = "",
            _ = 1;
          return (
            _ < 0 && ((_ = (_ - _) / 10), (_ = 0), (_ = " hideFront")),
            (0, _.jsxs)("div", {
              className: "STV_timelineSegment" + _,
              style: {
                left: _ + "%",
                width: _ - _ + "%",
                opacity: _,
              },
              onClick: _.onClick,
              children: [
                (0, _.jsx)("div", {
                  className: "STV_timelineSegmentFrontFill",
                  style: {
                    borderColor: "rgb(" + _.color + ")",
                  },
                }),
                (0, _.jsx)("div", {
                  className: "STV_timelineSegmentLabel",
                  style: {
                    color: "rgb(" + _.color + ")",
                  },
                  children: _.label,
                }),
                (0, _.jsx)("div", {
                  className: "STV_timelineSegmentBackFill",
                  style: {
                    borderColor: "rgb(" + _.color + ")",
                  },
                }),
              ],
            })
          );
        }
        let _ = class extends _.Component {
          m_elSlider = _.createRef();
          m_rectSlider = void 0;
          constructor(_) {
            super(_),
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
          OnMouseDown(_, _) {
            const _ = this.m_elSlider.current;
            if (_) {
              _.persist(), (this.m_rectSlider = _.getBoundingClientRect());
              let _ = {};
              _ === "start"
                ? ((_ = {
                    bStartMouseDown: !0,
                  }),
                  _.stopPropagation())
                : _ === "end"
                  ? ((_ = {
                      bEndMouseDown: !0,
                    }),
                    _.stopPropagation())
                  : (_ = {
                      bGrabberMouseDown: !0,
                    }),
                this.setState(_, () => this.AdjustSliderForClientX(_.clientX)),
                _.ownerDocument.defaultView?.addEventListener(
                  "mousemove",
                  this.OnMouseMove,
                ),
                _.ownerDocument.defaultView?.addEventListener(
                  "mouseup",
                  this.OnMouseUp,
                );
            }
          }
          OnMouseMove(_) {
            this.AdjustSliderForClientX(_.clientX);
          }
          OnMouseUp(_) {
            this.state.bStartMouseDown
              ? this.setState({
                  bStartMouseDown: !1,
                })
              : this.state.bEndMouseDown
                ? this.setState({
                    bEndMouseDown: !1,
                  })
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
          OnKeyDown(_) {
            _.keyCode == _._
              ? (this.props.video.JumpTime(-1 * _), _.preventDefault())
              : _.keyCode == _._ &&
                (this.props.video.JumpTime(1 * _), _.preventDefault());
          }
          AdjustSliderForClientX(_) {
            const _ = this.m_rectSlider;
            if (!_) return;
            let _ = this.props.video,
              _ = _.GetTimelineStartPos(),
              _ = _.GetTimelineStartPos() + _.GetTimelineDuration(),
              _ = _.GetTimeAtMousePosition(_, _, _, _);
            const _ = 5;
            if (this.state.bStartMouseDown) {
              const _ = _._(_, _, _.m_editorEndTime - _);
              _.m_editorStartTime = _;
            } else if (this.state.bEndMouseDown) {
              const _ = _._(_, _.m_editorStartTime + _, _);
              _.m_editorEndTime = _;
            } else
              _ != this.state.nGrabberMouseDownTime &&
                this.setState({
                  nGrabberMouseDownTime: _,
                });
          }
          OnMouseHoverMove(_) {
            this.AdjustHoverForClientX(_.clientX);
          }
          OnMouseHoverLeave(_) {
            this.setState({
              hoverX: 0,
            });
          }
          AdjustHoverForClientX(_) {
            let _ = this.props.video,
              _ = _.GetTimelineStartPos(),
              _ = _.GetTimelineStartPos() + _.GetTimelineDuration();
            this.m_rectSlider =
              this.m_elSlider.current?.getBoundingClientRect();
            let _ =
              this.m_rectSlider &&
              _.GetTimeAtMousePosition(_, this.m_rectSlider, _, _);
          }
          OnSegmentClick(_) {
            this.props.video.Seek(_);
          }
          OnMarkerMouseEnter(_) {
            this.setState({
              nHoverValue: _,
            });
          }
          OnMarkerMouseLeave() {
            this.setState({
              nHoverValue: void 0,
            });
          }
          render() {
            let _ = this.props.video,
              _ = this.state.bGrabberMouseDown,
              _ = _.GetPercentOffsetFromTime(
                this.state.nGrabberMouseDownTime,
                _._.Timeline,
              ),
              _ = _.GetPercentOffsetFromTime(_.GetPlaybackTime(), _._.Timeline),
              _ = _.GetPercentOffsetFromTime(
                _.GetVideoAvailableStartTime(),
                _._.Timeline,
              );
            _ < 0.05 && (_ = 0);
            let _ = _._(_, 0, 100).toFixed(1) + "%",
              _ = _._(_, 0, 100).toFixed(1) + "%",
              _ = _._(_, 0, 100).toFixed(1) + "%",
              _ = {},
              _ = {},
              _ = {},
              _ = {};
            _
              ? ((_.left = _), (_.width = _), (_.width = _), (_.width = _))
              : ((_.left = _), (_.width = _), (_.width = _));
            let _ = (0, _._)(_.GetPlaybackTime()),
              _ = (0, _._)(this.state.nHoverValue ?? 0),
              _ = "STV_timelineContainer";
            this.state.bGrabberMouseDown && (_ += " grabberDown"),
              _.IsTimelineMapActive() && (_ += " minimapActive");
            let _ = "";
            (_ = _ ? _ : _),
              _ > 100
                ? (_ = " grabberOffScreenRight grabberOffscreen")
                : _ < 0 && (_ = " grabberOffScreenLeft grabberOffscreen");
            let _ = [];
            _.GetTimelineMarkers().forEach((_, _) => {
              let _ = _.GetPercentOffsetFromTime(_.nTime, _._.Timeline);
              _ < 0 ||
                _ > 100 ||
                _.push(
                  (0, _.jsx)(
                    _,
                    {
                      pos: _,
                      label: _.strTemplateName,
                      onMouseEnter: this.OnMarkerMouseEnter,
                      onMouseLeave: this.OnMarkerMouseLeave,
                    },
                    _,
                  ),
                );
            });
            let _ = [];
            _.GetTimelineSegments().forEach((_, _) => {
              let _ = _.GetPercentOffsetFromTime(_.nTimeStart, _._.Timeline);
              if (_ > 100) return;
              let _ = _.GetPercentOffsetFromTime(_.nTimeEnd, _._.Timeline);
              _ < 0 ||
                _.push(
                  (0, _.jsx)(
                    _,
                    {
                      startPos: _,
                      endPos: _,
                      label: _.strTemplateName,
                      color: _.color,
                      onClick: (_) => this.OnSegmentClick(_.nTimeStart),
                    },
                    _,
                  ),
                );
            });
            const _ = _.GetPercentOffsetFromTime(
                _.m_editorStartTime,
                _._.Timeline,
              ),
              _ = _.GetPercentOffsetFromTime(_.m_editorEndTime, _._.Timeline),
              _ = this.props.bIncludeClipEditor
                ? [
                    (0, _.jsx)(
                      _,
                      {
                        pos: _,
                        label: (0, _._)("#DASHPlayerControls_Start"),
                        onMouseEnter: this.OnMarkerMouseEnter,
                        onMouseLeave: this.OnMarkerMouseLeave,
                        onMouseDown: (_) => this.OnMouseDown(_, "start"),
                      },
                      "start",
                    ),
                    (0, _.jsx)(
                      _,
                      {
                        pos: _,
                        label: (0, _._)("#DASHPlayerControls_End"),
                        onMouseEnter: this.OnMarkerMouseEnter,
                        onMouseLeave: this.OnMarkerMouseLeave,
                        onMouseDown: (_) => this.OnMouseDown(_, "end"),
                      },
                      "end",
                    ),
                  ]
                : [];
            return (0, _.jsx)("div", {
              className: "videoTimelineMain",
              tabIndex: 0,
              onKeyDown: this.OnKeyDown,
              children: (0, _.jsxs)("div", {
                className: _,
                children: [
                  (0, _.jsx)("div", {
                    className: "DialogLabel",
                    children: _,
                  }),
                  (0, _.jsx)("div", {
                    className: "STV_timelineSegmentsContainer",
                    children: _,
                  }),
                  (0, _.jsx)("div", {
                    onMouseDown: this.OnMouseDown,
                    onMouseMove: this.OnMouseHoverMove,
                    onMouseLeave: this.OnMouseHoverLeave,
                    ref: this.m_elSlider,
                    children: (0, _.jsxs)("div", {
                      className: "VideoTimelineSlider",
                      children: [
                        (0, _.jsx)("div", {
                          className: "STV_timelineValue",
                          style: _,
                        }),
                        (0, _.jsx)("div", {
                          className: "STV_timelineGhostValue",
                          style: _,
                        }),
                        (0, _.jsx)("div", {
                          className: "STV_timelineNoVideo",
                          style: _,
                        }),
                        _,
                        _,
                        !!this.state.hoverX &&
                          (0, _.jsx)(
                            "div",
                            {
                              style: {
                                position: "absolute",
                                left: this.state.hoverX - 75,
                                bottom: "30px",
                              },
                              children: (0, _.jsxs)("div", {
                                style: {
                                  position: "relative",
                                  display: "flex",
                                  justifyContent: "center",
                                },
                                children: [
                                  this.state.thumbnailURL &&
                                    (0, _.jsx)("img", {
                                      style: {
                                        width: "150px",
                                      },
                                      src: this.state.thumbnailURL,
                                    }),
                                  (0, _.jsx)("span", {
                                    className: "STV_timelineGrabberValue",
                                    style: {
                                      position: "absolute",
                                      bottom: "4px",
                                    },
                                    children: _,
                                  }),
                                ],
                              }),
                            },
                            "grabbertime",
                          ),
                        (0, _.jsx)("div", {
                          className: "STV_timelineGrabber_Wrapper",
                          style: _,
                          children: (0, _.jsx)("div", {
                            className: "STV_timelineGrabber" + _,
                            children: (0, _.jsx)("div", {
                              className: "STV_timelineGrabberArrow",
                              children: (0, _.jsx)(_.apU, {}),
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
        _([_._], _.prototype, "OnMouseDown", 1),
          _([_._], _.prototype, "OnMouseMove", 1),
          _([_._], _.prototype, "OnMouseUp", 1),
          _([_._], _.prototype, "OnKeyDown", 1),
          _([_._], _.prototype, "OnMouseHoverMove", 1),
          _([_._], _.prototype, "OnMouseHoverLeave", 1),
          _([_._], _.prototype, "AdjustHoverForClientX", 1),
          _([_._], _.prototype, "OnSegmentClick", 1),
          _([_._], _.prototype, "OnMarkerMouseEnter", 1),
          _([_._], _.prototype, "OnMarkerMouseLeave", 1),
          (_ = _([_._], _));
        let _ = class extends _.Component {
          state = {
            info: null,
          };
          static getDerivedStateFromProps(_, _) {
            return (!_.info || _.info.m_steamIDBroadcast !== _.steamID) &&
              (_.info &&
                (_.BroadcastWatchStore.StopInfo(_.info), (_.info = null)),
              _.steamID)
              ? {
                  info: _.BroadcastWatchStore.StartInfo(_.steamID),
                }
              : null;
          }
          componentWillUnmount() {
            this.state.info && _.BroadcastWatchStore.StopInfo(this.state.info);
          }
          RenderStreamSwitcher() {
            const _ = this.props.steamID,
              _ = this.props.onLocalStreamChange;
            return _ && _._.stream[_]
              ? (0, _.jsx)(_, {
                  value: _,
                  options: _._.stream,
                  onChange: _,
                })
              : null;
          }
          render() {
            let { info: _ } = this.state;
            if (!_) return null;
            let _ = "";
            _.m_nViewerCount && (_ = (0, _._)(_.m_nViewerCount));
            let _ =
                _._.bValid && _._.stream && _._.stream[_.m_steamIDBroadcast],
              _ =
                !this.props.bHideThumbnail &&
                this.props.bVerticalBroadcastChat &&
                (parseInt(_.m_strAppId) > 0 || _);
            const _ =
              !this.props.bHideThumbnail &&
              this.props.bVerticalBroadcastChat &&
              _ &&
              _._.gidEvent;
            return (0, _.jsxs)("div", {
              className: "BroadcastDetails",
              children: [
                !this.props.bHideThumbnail &&
                  (0, _.jsx)(_._, {
                    className: "broadcastDetailsThumbBlur",
                    src: _.m_strThumbnailUrl,
                    draggable: !1,
                    duration: 2500,
                  }),
                (0, _.jsxs)("div", {
                  className: "BroadcastDetailsHeader",
                  children: [
                    _ &&
                      _.m_strAppTitle &&
                      (0, _.jsxs)("div", {
                        className: "displayColumn",
                        children: [
                          (0, _.jsxs)("div", {
                            className: "Info",
                            children: [
                              (0, _.jsx)("span", {
                                className: "AppTitle",
                                children: _.m_strAppTitle,
                              }),
                              _.m_strTitle &&
                                (0, _.jsxs)("span", {
                                  className: "BroadcastTitle",
                                  children: ["\xA0- ", _.m_strTitle],
                                }),
                              this.props.onLocalStreamChange &&
                                this.RenderStreamSwitcher(),
                            ],
                          }),
                          _ &&
                            (0, _.jsxs)("div", {
                              className: "BroadcastDetailsHeader_ViewerCount",
                              children: [
                                (0, _.jsx)(_.y_e, {}),
                                (0, _._)("#Broadcast_ViewerCount", _),
                              ],
                            }),
                        ],
                      }),
                    _ &&
                      this.props.onOpenLinkInNewWindow &&
                      (0, _.jsx)("div", {
                        className: "Actions",
                        children: (0, _.jsx)("div", {
                          onClick: (_) =>
                            this.props.onOpenLinkInNewWindow?.(_, _._.link),
                          className: "BroadcastLink",
                          children: _._.linkName,
                        }),
                      }),
                  ],
                }),
                _ &&
                  (0, _.jsx)(_._, {
                    gidEvent: _._.gidEvent,
                  }),
                _ &&
                  (0, _.jsx)(_._, {
                    _:
                      _._.bValid &&
                      _._.stream &&
                      _._.stream[_.m_steamIDBroadcast]
                        ? _._.appID
                        : parseInt(_.m_strAppId),
                    type: "game",
                    bPreferAssetWithoutOverride: !1,
                  }),
              ],
            });
          }
        };
        _ = _([_._], _);
        class _ extends _.Component {
          showContextMenu(_) {
            const { options: _, value: _, onChange: _ } = this.props,
              _ = Object.keys(_).map((_) =>
                (0, _.jsx)(
                  _._,
                  {
                    onSelected: () => _(_),
                    bChecked: _ === _,
                    children: (0, _._)(_[_]),
                  },
                  _,
                ),
              );
            (0, _._)(
              (0, _.jsx)(_._, {
                children: _,
              }),
              _,
            );
          }
          render() {
            const { value: _, options: _ } = this.props,
              _ = _[_];
            return (0, _.jsxs)("div", {
              className: "BroadcastLanguage",
              onClick: this.showContextMenu,
              children: [
                (0, _.jsxs)("span", {
                  children: ["\xA0- ", (0, _._)(_)],
                }),
                (0, _.jsx)("div", {
                  className: "ContextMenuButton",
                  children: (0, _.jsx)(_.GB9, {}),
                }),
              ],
            });
          }
        }
        _([_._], _.prototype, "showContextMenu", 1);
        let _ = class extends _.Component {
          constructor(_) {
            super(_),
              (this.state = {
                sizableRegion: [],
              });
          }
          async AddLinkRegion() {
            let _ = this.state.sizableRegion.length;
            this.state.sizableRegion.push({
              xPosPct: 2.5 + _,
              yPosPct: 2.5 + _,
              widthPct: 20,
              heightPct: 15,
            }),
              this.setState(
                {
                  sizableRegion: this.state.sizableRegion,
                },
                () => this.OnSaveRegions(),
              );
          }
          componentDidUpdate(_) {
            _.linkRegions.length == 0 &&
              this.props.linkRegions.forEach((_, _) => {
                this.LoadLinkRegion(_, _);
              });
          }
          async LoadLinkRegion(_, _) {
            let _ = this.state.sizableRegion.length;
            this.state.sizableRegion.push({
              xPosPct: _.left,
              yPosPct: _.top,
              widthPct: _.width,
              heightPct: _.height,
              link_url: _.url,
              link_description: _.link_description,
              link_index: _.link_index,
            }),
              await this.setState({
                sizableRegion: this.state.sizableRegion,
              });
          }
          OnSaveRegions() {
            let _;
            _ = {
              links: [],
            };
            for (let _ = 0; _ < this.state.sizableRegion.length; _++) {
              let _;
              (_ = {
                left: Math.floor(this.state.sizableRegion[_].xPosPct * 100),
                top: Math.floor(this.state.sizableRegion[_].yPosPct * 100),
                width: Math.floor(this.state.sizableRegion[_].widthPct * 100),
                height: Math.floor(this.state.sizableRegion[_].heightPct * 100),
                url: this.state.sizableRegion[_].link_url,
                link_description: this.state.sizableRegion[_].link_description,
                link_index: _,
              }),
                _.links.push(_);
            }
            this.props.onSaveLinkRegions?.(_);
          }
          async DeleteRegion(_) {
            this.state.sizableRegion.splice(_, 1),
              console.log("keys: ", this.state.sizableRegion.keys),
              this.setState(
                {
                  sizableRegion: this.state.sizableRegion,
                },
                () => this.OnSaveRegions(),
              );
          }
          async UpdatePanel(_, _) {
            const _ = [...this.state.sizableRegion];
            (_[_] = _),
              this.setState(
                {
                  sizableRegion: _,
                },
                () => this.OnSaveRegions(),
              );
          }
          render() {
            return (0, _.jsxs)("div", {
              className: "LinkOverlayContainer",
              children: [
                (0, _.jsxs)("div", {
                  className: "LinkOverlayValidRegion",
                  children: [
                    !this.props.editMode && this.props.linkRegions
                      ? this.props.linkRegions.map((_) => {
                          const _ = (0, _._)(_.url);
                          return (0, _.jsx)(
                            _._,
                            {
                              href: _.url,
                              bForceExternal: _,
                              bUseLinkFilter: _,
                              children: (0, _.jsx)("div", {
                                className: "LinkRegion",
                                style: {
                                  left: _.left + "%",
                                  top: _.top + "%",
                                  width: _.width + "%",
                                  height: _.height + "%",
                                },
                                children: (0, _.jsxs)("div", {
                                  className: "LinkRegionText",
                                  children: [_.link_description, " "],
                                }),
                              }),
                            },
                            _.link_index,
                          );
                        })
                      : null,
                    this.props.editMode &&
                      this.state.sizableRegion.map((_, _) =>
                        (0, _.jsx)(
                          _._,
                          {
                            index: _,
                            deleteFn: this.DeleteRegion,
                            updateFn: this.UpdatePanel,
                            xPosPct: _.xPosPct,
                            yPosPct: _.yPosPct,
                            widthPct: _.widthPct,
                            heightPct: _.heightPct,
                            link_url: _.link_url,
                            link_description: _.link_description,
                          },
                          _ * 100 + _.xPosPct,
                        ),
                      ),
                    this.props.editMode &&
                      (0, _.jsx)("div", {
                        className: "AddLinkRegion",
                        onClick: this.AddLinkRegion,
                        children: (0, _._)("#SteamTV_AddLinkRegion"),
                      }),
                  ],
                }),
                (0, _.jsx)("div", {
                  className: "LinkOverlayInvalidRegion",
                  children: (0, _.jsx)("div", {
                    children: (0, _._)("#SteamTV_LinkRegionReserved"),
                  }),
                }),
              ],
            });
          }
        };
        _([_._], _.prototype, "AddLinkRegion", 1),
          _([_._], _.prototype, "LoadLinkRegion", 1),
          _([_._], _.prototype, "OnSaveRegions", 1),
          _([_._], _.prototype, "DeleteRegion", 1),
          _([_._], _.prototype, "UpdatePanel", 1),
          (_ = _([_._], _));
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = "10978408",
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          },
          _ = ((_) => (
            (_.topleft = "topleft"),
            (_.top = "top"),
            (_.topright = "topright"),
            (_.left = "left"),
            (_.middle = "middle"),
            (_.right = "right"),
            (_.bottomleft = "bottomleft"),
            (_.bottom = "bottom"),
            (_.bottomright = "bottomright"),
            _
          ))(_ || {});
        let _ = class extends _.Component {
          m_rectLinkRegion;
          m_elLinkRegionBox;
          m_nLocalOffsetXPct;
          m_nLocalOffsetYPct;
          m_fnMouseUp = null;
          m_fnMouseMove = null;
          m_listeners = new _._();
          m_strDescription = "";
          m_aspectRatio = 1;
          componentWillUnmount() {
            this.m_listeners.Unregister();
          }
          constructor(_) {
            super(_),
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
          LinkRegionBoxRef(_) {
            this.m_elLinkRegionBox = _;
          }
          OnMouseDown(_, _) {
            this.m_elLinkRegionBox?.parentElement &&
              this.m_elLinkRegionBox.ownerDocument.defaultView &&
              ((this.m_fnMouseUp = (_) => {
                this.OnMouseUp(_, _);
              }),
              (this.m_fnMouseMove = (_) => {
                this.OnMouseMove(_, _);
              }),
              this.setState({
                EdgeDown: _,
              }),
              (this.m_rectLinkRegion =
                this.m_elLinkRegionBox.parentElement.getBoundingClientRect()),
              (this.m_nLocalOffsetXPct =
                ((_.clientX - this.m_rectLinkRegion.left) /
                  (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                  100 -
                this.state.curLeftPosPct),
              (this.m_nLocalOffsetYPct =
                ((_.clientY - this.m_rectLinkRegion.top) /
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
              _.preventDefault(),
              _.stopPropagation();
          }
          OnMouseMove(_, _) {
            if (this.state.EdgeDown !== void 0) {
              switch ((_.shiftKey && this.m_fnMouseUp(), _)) {
                case "left": {
                  this.UpdateState({
                    curLeftPosPct: this.CalcLeftEdge(_.clientX),
                  });
                  break;
                }
                case "right": {
                  this.UpdateState({
                    curRightPosPct: this.CalcRightEdge(_.clientX),
                  });
                  break;
                }
                case "top": {
                  this.UpdateState({
                    curTopPosPct: this.CalcTopEdge(_.clientY),
                  });
                  break;
                }
                case "bottom": {
                  this.UpdateState({
                    curBottomPosPct: this.CalcBottomEdge(_.clientY),
                  });
                  break;
                }
                case "topleft": {
                  this.UpdateState({
                    curTopPosPct: this.CalcBottomEdge(_.clientY),
                    curLeftPosPct: this.CalcLeftEdge(_.clientX),
                  });
                  break;
                }
                case "topright": {
                  this.UpdateState({
                    curTopPosPct: this.CalcTopEdge(_.clientY),
                    curRightPosPct: this.CalcRightEdge(_.clientX),
                  });
                  break;
                }
                case "bottomleft": {
                  this.UpdateState({
                    curLeftPosPct: this.CalcLeftEdge(_.clientX),
                    curBottomPosPct: this.CalcBottomEdge(_.clientY),
                  });
                  break;
                }
                case "bottomright": {
                  this.UpdateState({
                    curRightPosPct: this.CalcRightEdge(_.clientX),
                    curBottomPosPct: this.CalcBottomEdge(_.clientY),
                  });
                  break;
                }
                case "middle": {
                  const _ = (0, _._)(
                      this.CalcLeftEdge(_.clientX),
                      0,
                      100 - this.state.curWidthPct,
                    ),
                    _ = 100 - (_ + this.state.curWidthPct),
                    _ = (0, _._)(
                      this.CalcTopEdge(_.clientY),
                      0,
                      100 - this.state.curHeightPct,
                    ),
                    _ = 100 - (_ + this.state.curHeightPct),
                    _ = {
                      curLeftPosPct: _,
                      curRightPosPct: _,
                      curTopPosPct: _,
                      curBottomPosPct: _,
                    };
                  this.setState(_);
                  break;
                }
                default:
                  break;
              }
              _.preventDefault(), _.stopPropagation();
            }
          }
          IsValidPct(_) {
            return _ >= 0 && _ <= 100;
          }
          UpdateState(_) {
            let _ =
                _.curTopPosPct !== void 0
                  ? _.curTopPosPct
                  : this.state.curTopPosPct,
              _ =
                _.curBottomPosPct !== void 0
                  ? _.curBottomPosPct
                  : this.state.curBottomPosPct,
              _ =
                _.curLeftPosPct !== void 0
                  ? _.curLeftPosPct
                  : this.state.curLeftPosPct,
              _ =
                _.curRightPosPct !== void 0
                  ? _.curRightPosPct
                  : this.state.curRightPosPct,
              _ = (0, _._)(
                100 - _ - _,
                this.props.widthMinPct || 0,
                this.props.widthMaxPct || 100,
              ),
              _ = (0, _._)(
                100 - _ - _,
                this.props.heightMinPct || 0,
                this.props.heightMaxPct || 100,
              );
            this.props.bLockAspectRatio &&
              (_.curLeftPosPct !== void 0 || _.curRightPosPct !== void 0
                ? (_ = _ / this.m_aspectRatio)
                : (_ = _ * this.m_aspectRatio)),
              _.curLeftPosPct !== void 0
                ? (_ = 100 - _ - _)
                : (_ = 100 - (_ + _)),
              _.curTopPosPct !== void 0
                ? (_ = 100 - _ - _)
                : (_ = 100 - (_ + _));
            const _ = 100 - _ - _,
              _ = 100 - _ - _;
            this.IsValidPct(_) &&
              this.IsValidPct(_) &&
              this.IsValidPct(_) &&
              this.IsValidPct(_) &&
              this.IsValidPct(_) &&
              this.IsValidPct(_) &&
              this.setState({
                curLeftPosPct: _,
                curRightPosPct: _,
                curTopPosPct: _,
                curBottomPosPct: _,
              });
          }
          GetXPercent(_) {
            return this.m_rectLinkRegion
              ? ((_ - this.m_rectLinkRegion.left) /
                  (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                  100 -
                  (this.m_nLocalOffsetXPct ?? 0)
              : 0;
          }
          GetYPercent(_) {
            return this.m_rectLinkRegion
              ? ((_ - this.m_rectLinkRegion.top) /
                  (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                  100 -
                  (this.m_nLocalOffsetYPct ?? 0)
              : 0;
          }
          CalcLeftEdge(_) {
            return (0, _._)(this.GetXPercent(_), 0, 100);
          }
          CalcRightEdge(_) {
            return (0, _._)(
              100 - (this.GetXPercent(_) + this.state.curWidthPct),
              0,
              100,
            );
          }
          CalcTopEdge(_) {
            return (0, _._)(this.GetYPercent(_), 0, 100);
          }
          CalcBottomEdge(_) {
            return (0, _._)(
              100 - (this.GetYPercent(_) + this.state.curHeightPct),
              0,
              100,
            );
          }
          OnMouseUp(_, _) {
            this.setState({
              curWidthPct:
                100 - this.state.curRightPosPct - this.state.curLeftPosPct,
            }),
              this.setState({
                curHeightPct:
                  100 - this.state.curBottomPosPct - this.state.curTopPosPct,
              }),
              this.setState({
                EdgeDown: void 0,
              }),
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
          OnSetLinkURLChange(_) {
            this.setState({
              text_link_url: _.target.value,
              valid_link: this.validateUrl(_.target.value),
            });
          }
          OnSetLinkDescriptionChange(_) {
            this.setState({
              text_link_description: _.target.value,
            });
          }
          validateUrl(_) {
            return _ != null
              ? /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
                  _,
                )
              : !1;
          }
          OnSaveLink() {
            (this.m_strDescription = this.state.text_link_description ?? ""),
              this.setState({
                bEditingLink: !this.state.bEditingLink,
              }),
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
            this.setState({
              bEditingLink: !this.state.bEditingLink,
            });
          }
          render() {
            let _ = {
                left: this.state.curLeftPosPct + "%",
                top: this.state.curTopPosPct + "%",
                right: this.state.curRightPosPct + "%",
                bottom: this.state.curBottomPosPct + "%",
              },
              _ = _().LinkRegionDragBox;
            return (
              this.state.EdgeDown != null &&
                (_ += ` ${_().EdgeDown} ` + _()[this.state.EdgeDown]),
              (0, _.jsxs)("div", {
                className: _,
                style: _,
                ref: this.LinkRegionBoxRef,
                draggable: !1,
                children: [
                  (0, _.jsxs)("div", {
                    className: _().LinkRegionGridBox,
                    children: [
                      (0, _.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().TopLeft}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "topleft");
                        },
                        draggable: !1,
                      }),
                      (0, _.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().Top}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "top");
                        },
                      }),
                      (0, _.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().TopRight}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "topright");
                        },
                        draggable: !1,
                      }),
                      (0, _.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().Left}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "left");
                        },
                        draggable: !1,
                      }),
                      (0, _.jsxs)("div", {
                        className: `${_().LinkRegionEdge} ${_().Middle}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "middle");
                        },
                        draggable: !1,
                        children: [
                          this.props.deleteFn &&
                            (0, _.jsx)("div", {
                              className: _().LinkRegionDelete,
                              onClick: this.HandleDelete,
                              children: (0, _.jsx)(_.sED, {}),
                            }),
                          !this.props.bDisableLink &&
                            (0, _.jsx)("div", {
                              className: _().LinkRegionSettings,
                              onClick: this.OnEditLink,
                              children: (0, _.jsx)(_.xv8, {}),
                            }),
                          (0, _.jsxs)("div", {
                            className: _().LinkText,
                            children: [" ", this.m_strDescription, " "],
                          }),
                        ],
                      }),
                      (0, _.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().Right}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "right");
                        },
                        draggable: !1,
                      }),
                      (0, _.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().BottomLeft}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "bottomleft");
                        },
                        draggable: !1,
                      }),
                      (0, _.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().Bottom}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "bottom");
                        },
                        draggable: !1,
                      }),
                      (0, _.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().BottomRight}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "bottomright");
                        },
                        draggable: !1,
                      }),
                    ],
                  }),
                  this.state.bEditingLink &&
                    (0, _.jsxs)("div", {
                      className: _().LinkRegionInfo,
                      children: [
                        (0, _.jsx)(_._, {
                          className: _().LinkRegionInput,
                          type: "text",
                          name: "link_url",
                          value: this.state.text_link_url,
                          label: (0, _._)("#SteamTV_LinkURL"),
                          placeholder: "https://www.example.com",
                          onChange: this.OnSetLinkURLChange,
                          mustBeURL: !0,
                        }),
                        (0, _.jsx)(_._, {
                          className: _().LinkRegionInput,
                          type: "text",
                          name: "link_description",
                          value: this.state.text_link_description,
                          label: (0, _._)("#SteamTV_LinkDescription"),
                          placeholder: (0, _._)(
                            "#SteamTV_LinkDescription_Placeholder",
                          ),
                          onChange: this.OnSetLinkDescriptionChange,
                        }),
                        (0, _.jsxs)("div", {
                          className: _().LinkRegionButtonContainer,
                          children: [
                            (0, _.jsxs)(_._, {
                              disabled: !this.state.valid_link,
                              onClick: this.OnSaveLink,
                              children: [" ", (0, _._)("#Button_OK"), " "],
                            }),
                            (0, _.jsxs)(_._, {
                              onClick: this.OnEditLink,
                              children: [" ", (0, _._)("#Button_Cancel")],
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
        _([_._], _.prototype, "LinkRegionBoxRef", 1),
          _([_._], _.prototype, "OnMouseDown", 1),
          _([_._], _.prototype, "OnMouseMove", 1),
          _([_._], _.prototype, "OnMouseUp", 1),
          _([_._], _.prototype, "HandleDelete", 1),
          _([_._], _.prototype, "OnSetLinkURLChange", 1),
          _([_._], _.prototype, "OnSetLinkDescriptionChange", 1),
          _([_._], _.prototype, "OnSaveLink", 1),
          _([_._], _.prototype, "OnEditLink", 1),
          (_ = _([_._], _));
      },
    },
  ]);
})();
