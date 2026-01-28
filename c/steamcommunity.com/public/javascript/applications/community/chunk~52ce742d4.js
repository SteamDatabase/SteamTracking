(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2694],
  {
    chunkid: (module) => {
      module.exports = {
        BroadcastPlayerLite: "SAxf3Rqn792kM6c4U_vx5",
        BroadcastPlayerLiteVideo: "yCd0zjymzfw3HkVm-1YwX",
        BroadcastContext: "_3TnYLKMweBMIC69qFU6OJj",
        BroadcastPlaceholderImg: "_3hxn99MT14hFUCrUp6zbsf",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      _._.CHAT_BASE_URL, _._.CHAT_BASE_URL;
      class _ {
        constructor(_) {
          (this.bValid = !1),
            (this.stream = {
              0: "#Broadcast_EnglishMain",
            }),
            (this.name = ""),
            (this.appName = ""),
            (this.appID = 0),
            (this.link = ""),
            (this.linkName = ""),
            (this.tabIcon = ""),
            (this.offlineImage = ""),
            (this.gidEvent = ""),
            (0, _._)(this),
            this.init(_);
        }
        init(_) {
          (this.bValid = _.bValid),
            (this.stream = _.stream),
            (this.name = _.name),
            (this.appName = _.appName),
            (this.appID = _.appID),
            (this.link = _.link),
            (this.linkName = _.linkName),
            (this.tabIcon = _.tabIcon),
            (this.offlineImage = _.offlineImage),
            (this.gidEvent = _.gidEvent);
        }
      }
      (0, _._)([_._], _.prototype, "bValid", void 0),
        (0, _._)([_._], _.prototype, "stream", void 0),
        (0, _._)([_._], _.prototype, "name", void 0),
        (0, _._)([_._], _.prototype, "appName", void 0),
        (0, _._)([_._], _.prototype, "appID", void 0),
        (0, _._)([_._], _.prototype, "link", void 0),
        (0, _._)([_._], _.prototype, "linkName", void 0),
        (0, _._)([_._], _.prototype, "tabIcon", void 0),
        (0, _._)([_._], _.prototype, "offlineImage", void 0),
        (0, _._)([_._], _.prototype, "gidEvent", void 0);
      let _ = new _({
        bValid: !1,
        stream: {
          0: "#Broadcast_EnglishMain",
        },
        name: "",
        appName: "",
        appID: 0,
        link: "",
        linkName: "",
        tabIcon: "",
        offlineImage: "",
      });
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      var _, _;
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      }),
        (function (_) {
          (_[(_.Hover = 0)] = "Hover"),
            (_[(_.ClickPopup = 1)] = "ClickPopup"),
            (_[(_.ClickSurroundingRegion = 2)] = "ClickSurroundingRegion");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Chat = 0)] = "Chat"),
            (_[(_.Notification = 1)] = "Notification"),
            (_[(_.Error = 2)] = "Error");
        })(_ || (_ = {}));
      class _ {}
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
        _ = __webpack_require__("chunkid");
      class _ extends _.Component {
        constructor() {
          super(...arguments),
            (this.m_schUpdate = new _._()),
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
        BindCanvasRef(_) {
          this.m_elCanvas = _;
        }
        updateCanvas() {
          if (
            null == this.props.elementRef ||
            null == this.m_elCanvas ||
            this.m_bSetupComplete
          )
            return;
          let _ = this.props.scaleFactor || [1, 1],
            _ = this.props.elementRef,
            _ = this.props.updateRate;
          this.m_Context = this.m_elCanvas.getContext("2d");
          let _ = Math.floor(
              this.m_elCanvas.clientWidth / this.props.reductionFactor,
            ),
            _ = Math.floor(
              this.m_elCanvas.clientHeight / this.props.reductionFactor,
            );
          (this.m_elCanvas.width = _),
            (this.m_elCanvas.height = _),
            this.props.blurAmount > 0 &&
              (this.m_Context.filter = "blur(" + this.props.blurAmount + "px)");
          let _ = () => {
            this.m_Context.drawImage(_, 0, 0, _ * _[0], _ * _[1]),
              _ > 0 && this.m_schUpdate.Schedule(_, _);
          };
          _(), (this.m_bSetupComplete = !0);
        }
        render() {
          return _.createElement("canvas", {
            _: this.props._,
            className: this.props.className,
            ref: this.BindCanvasRef,
            width: this.props.width,
            height: this.props.height,
          });
        }
      }
      (0, _._)([_._], _.prototype, "BindCanvasRef", null),
        (0, _._)([_._], _.prototype, "updateCanvas", null);
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = 500;
      class _ extends _.Component {
        render() {
          let {
            keyExtractor: _,
            style: _,
            duration: __webpack_require__ = _,
            className: _,
            children: _,
            childRef: _,
            ..._
          } = this.props;
          const _ = {
            ...(_ || {}),
            transitionDuration: __webpack_require__ / 1e3 + "s",
          };
          return _.createElement(
            _._,
            {
              ..._,
              className: (0, _._)("crossfade", _),
            },
            _.createElement(
              _._,
              {
                nodeRef: _,
                classNames: "crossfade-anim",
                timeout: __webpack_require__,
                key: _(),
                style: _,
              },
              _,
            ),
          );
        }
      }
      function _(_) {
        const { src: _, ...__webpack_require__ } = _,
          _ = {
            backgroundImage: `url(${_})`,
          },
          _ = _.useRef(null);
        return _.createElement(
          _,
          {
            style: _,
            keyExtractor: () => _,
            childRef: _,
            ...__webpack_require__,
          },
          _.createElement("div", {
            ref: _,
            className: "crossfade-img",
          }),
        );
      }
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      function _() {
        return _.createElement(
          "div",
          {
            className: "STV_ReplayBanner",
          },
          (0, _._)("#DASHPlayerControls_IsReplay"),
        );
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
        if (_ && _ != _._.Error && _.GetUserInputNeeded()) return null;
        if (_ == _._.Ready) return null;
        let _ = _ == _._.Loading;
        return _.createElement(
          "div",
          {
            className: "BroadcastVideoWatchState",
            style: {
              filter: "hue-rotate(40deg)",
            },
          },
          _ && _.createElement(_._, null),
          !_ &&
            _.createElement(
              "div",
              {
                className: "BroadcastVideoWatchState_Text",
              },
              _,
            ),
        );
      });
      class _ extends _.Component {
        OnClick() {
          _._.UserInputClickVideo(this.props.video);
        }
        render() {
          return _.createElement(
            "div",
            {
              className: "BroadcastVideoUserInputNeeded",
              onClick: this.OnClick,
            },
            _.createElement(_.jGG, null),
            _.createElement(
              "span",
              null,
              (0, _._)("#DASHPlayerControls_ClickToPlay"),
            ),
          );
        }
      }
      (0, _._)([_._], _.prototype, "OnClick", null);
      let _ = class extends _.Component {
        constructor(_) {
          super(_);
        }
        HideStats() {
          this.props.closeStats && this.props.closeStats();
        }
        render() {
          let _ = this.props.stats;
          return _.createElement(
            "div",
            {
              className: "dash_video_stats",
            },
            _.createElement(
              "button",
              {
                className: "dash_stat_close_button",
                onClick: this.HideStats,
              },
              _.createElement(_.sED, null),
            ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_BufferingResolution"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetBufferingResolutionToDisplay(),
              ),
            ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_PlaybackResolution"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetPlaybackResolutionToDisplay(),
              ),
            ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_HtmlResolution"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetHTMLVideoResolutionToDisplay(),
              ),
            ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_ContentServer"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetContentServerToDisplay(),
              ),
            ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_StallEvents"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetStalledEventsToDisplay(),
              ),
            ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_FailedDownloads"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetFailedDownloadsToDisplay(),
              ),
            ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_TimeToFirstFrame"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetTimeToFirstFrameToDisplay(),
              ),
            ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_PlaybackRate"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetPlaybackRateForDisplay(),
              ),
            ),
            _.createElement(_, {
              stats: _,
            }),
          );
        }
      };
      (0, _._)([_._], _.prototype, "HideStats", null), (_ = (0, _._)([_._], _));
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
              __webpack_require__.push(
                _.createElement(
                  "div",
                  {
                    key: _ + _,
                  },
                  _,
                  " ",
                  _.createElement(
                    "span",
                    {
                      className: "videoStatsValue",
                    },
                    _,
                  ),
                ),
              );
            }
          else {
            let _ = (0, _._)(
              _
                ? "#DASHPlayerStats_VideoNoRangeInformation"
                : "#DASHPlayerStats_AudioNoRangeInformation",
            );
            __webpack_require__.push(
              _.createElement(
                "div",
                {
                  key: _ + "none",
                },
                _,
              ),
            );
          }
          return _;
        }
        render() {
          let _ = this.props.stats;
          return _.createElement(
            "div",
            {
              className: "dash_video_quick_stats",
            },
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_BytesReceived"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetBytesReceivedToDisplay(),
              ),
            ),
            this.props.stats.BHasFrameInformation() &&
              _.createElement(
                "div",
                null,
                (0, _._)("#DASHPlayerStats_DroppedFrames"),
                " ",
                _.createElement(
                  "span",
                  {
                    className: "videoStatsValue",
                  },
                  _.GetDroppedFramesToDisplay(),
                ),
              ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_VideoBuffered"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetVideoBufferedToDisplay(),
                " ",
              ),
            ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_AudioBuffered"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetAudioBufferedToDisplay(),
                " ",
              ),
            ),
            this.createBufferedRange(!0),
            this.createBufferedRange(!1),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_BandwidthRequired"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetBandwidthRequiredToDisplay(),
              ),
            ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_BandwidthVideo"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetBandwithVideoToDisplay(),
              ),
            ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_BandwidthNums"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetBandwidthStatsToDisplay(),
              ),
            ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_DownloadNums"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetDownloadTimeStatsToDisplay(),
              ),
            ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_ActiveDownloads"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetActiveDownloadsToDisplay(),
              ),
            ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_VideoDownloadProgress"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetVideoDownloadProgressToDisplay(),
              ),
            ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_DroppingFrames"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetPersistentFrameDropsForDisplay(),
              ),
            ),
            _.createElement(
              "div",
              null,
              (0, _._)("#DASHPlayerStats_CurrentFPS"),
              " ",
              _.createElement(
                "span",
                {
                  className: "videoStatsValue",
                },
                _.GetCurrentFPSForDisplay(),
              ),
            ),
          );
        }
      };
      _ = (0, _._)([_._], _);
      var _ = __webpack_require__("chunkid");
      class _ extends _.Component {
        constructor(_) {
          super(_),
            (this.m_elSubtitlesButton = _.createRef()),
            (this.m_elSubtitlesPanel = _.createRef()),
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
            this.m_elClickListener.addEventListener(
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
              this.m_elSubtitlesButton.current.offsetLeft,
              this.m_elSubtitlesButton.current.offsetTop,
            ]),
            (this.m_elClickListener =
              _.currentTarget.ownerDocument.defaultView),
            this.m_elClickListener.addEventListener(
              "mouseup",
              this.OnMouseUp,
              !0,
            );
        }
        OnMouseUp(_) {
          this.m_elClickListener.removeEventListener(
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
          const { video: __webpack_require__, actions: _ } = this.props;
          let _,
            _,
            _ = 0,
            _ = _.createElement("div", {
              key: "separator",
              className: "settingsMenuSeparator",
            });
          if (
            (this.state.bSettingsOpen &&
              ((_ = !0),
              (_ = this.props.video.GetVideoRepresentations()),
              (_ = _.map((_) =>
                _.createElement(
                  _._,
                  {
                    key: _._,
                    onClick: () => {
                      this.props.video.SetVideoRepresentation(_),
                        this.setState({
                          bSettingsOpen: !this.state.bSettingsOpen,
                        });
                    },
                    bChecked: _.selected,
                  },
                  _.displayName,
                ),
              )),
              _.push(_),
              _.push(
                _.createElement(
                  _._,
                  {
                    key: "statsToggle",
                    onClick: this.OnShowStats,
                  },
                  (0, _._)("#Broadcast_VideoContext_ToggleStats"),
                  "\t",
                ),
              ),
              (_ = 0 - (21 * _.length + 32))),
            this.state.bSubtitlesOpen)
          ) {
            (_ = !0),
              (_ = []),
              _.push(
                _.createElement(
                  _._,
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
                  (0, _._)("#Broadcast_None"),
                ),
              );
            for (let _ = 0; _ < this.props.video.ListSubtitles().length; _++) {
              const _ = this.props.video.ListSubtitles()[_];
              _.push(
                _.createElement(
                  _._,
                  {
                    key: _.language,
                    onClick: () => {
                      this.props.video.SetSubtitles(_.language),
                        this.setState({
                          bSubtitlesOpen: !this.state.bSubtitlesOpen,
                        });
                    },
                    bChecked: "showing" === _.mode,
                  },
                  _.label,
                ),
              );
            }
            _ = -292;
          }
          const _ =
            this.props.video.BHasPlayer() && this.props.video.BHasTimedText();
          return _.createElement(
            "div",
            {
              className: "STV_BroadcastSettings",
            },
            _ &&
              _.createElement(
                "div",
                {
                  className:
                    "videoControlButton" + (_ ? " ClosedCaptionsActive" : ""),
                  onClick: this.OnSubtitlesClick,
                  ref: this.m_elSubtitlesButton,
                },
                _.createElement(_.N8C, null),
              ),
            _.createElement(
              "div",
              {
                className:
                  "videoControlButton VideoSettings " +
                  (_ ? " VideoSettingsOpen" : ""),
                onClick: this.OnVideoControlClick,
                ref: this.bindSettingsButton,
              },
              _.createElement(_.wB_, null),
            ),
            _.createElement(_, {
              video: __webpack_require__,
            }),
            _ &&
              _.map((_) =>
                _.createElement(
                  "div",
                  {
                    key: _.key,
                    className: "videoControlButton videoControlFitWidth",
                  },
                  _,
                ),
              ),
            _ &&
              _.createElement(
                "div",
                {
                  ref: this.BindSettingsPanel,
                  className: "STV_BroadcastSettingsPanel",
                  style: {
                    left: this.m_SettingsButtonPos[0],
                    top: this.m_SettingsButtonPos[1],
                    marginTop: _,
                  },
                },
                _.createElement(
                  "div",
                  {
                    className: "STV_BroadcastSettingsMenuItems",
                  },
                  _,
                ),
              ),
            _ &&
              _.createElement(
                "div",
                {
                  ref: this.m_elSubtitlesPanel,
                  className: "STV_BroadcastSettingsPanel SubtitlesMenu",
                  style: {
                    maxHeight: "260px",
                    left: this.m_SubtitlesButtonPos[0],
                    top: this.m_SubtitlesButtonPos[1],
                    marginTop: _,
                  },
                },
                _.createElement(
                  "div",
                  {
                    className: "STV_BroadcastSettingsMenuItems",
                  },
                  _,
                ),
              ),
          );
        }
      }
      (0, _._)([_._], _.prototype, "OnVideoControlClick", null),
        (0, _._)([_._], _.prototype, "OnSubtitlesClick", null),
        (0, _._)([_._], _.prototype, "OnMouseUp", null),
        (0, _._)([_._], _.prototype, "bindSettingsButton", null),
        (0, _._)([_._], _.prototype, "BindSettingsPanel", null),
        (0, _._)([_._], _.prototype, "OnShowStats", null);
      let _ = class extends _.Component {
        constructor(_) {
          super(_),
            (this.k_nHideSliderTimeout = 1500),
            (this.m_bShowSlider = true),
            (this.m_schHideSlider = new _._()),
            (this.m_bChildDragging = !1),
            (this.m_bMouseOver = !1),
            (0, _._)(this);
        }
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
              () => (this.m_bShowSlider = true),
            );
        }
        render() {
          let _ = this.props.video,
            _ = _.IsMuted(),
            _ = 100 * _.GetVolume(),
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
            _.createElement(
              "div",
              {
                className: _,
                onMouseEnter: this.OnMouseEnter,
                onMouseLeave: this.OnMouseLeave,
              },
              _.createElement(
                "div",
                {
                  className: "BroadcastVolumeControl_FixedLayout",
                },
                _.createElement(
                  "div",
                  {
                    className: _,
                    onClick: this.ToggleMute,
                  },
                  _.createElement(_.fSs, null),
                ),
                _.createElement(_, {
                  video: _,
                  onDrag: this.OnChildDrag,
                }),
              ),
            )
          );
        }
      };
      (0, _._)([_._], _.prototype, "m_bShowSlider", void 0),
        (0, _._)([_._], _.prototype, "ToggleMute", null),
        (0, _._)([_._], _.prototype, "OnMouseEnter", null),
        (0, _._)([_._], _.prototype, "OnMouseLeave", null),
        (0, _._)([_._], _.prototype, "OnChildDrag", null),
        (_ = (0, _._)([_._], _));
      let _ = class extends _.Component {
        constructor(_) {
          super(_),
            (this.m_elSlider = null),
            (this.m_nVolumeStartOfDrag = 0),
            (0, _._)(this);
        }
        OnMouseDown(_) {
          let _ = _.currentTarget;
          (this.m_elSlider = _),
            (this.m_nVolumeStartOfDrag = this.props.video.GetVolume()),
            this.SetVolumeWithCoord(_, _.clientX),
            _.ownerDocument.defaultView.addEventListener(
              "mousemove",
              this.OnMouseMove,
            ),
            _.ownerDocument.defaultView.addEventListener(
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
        SetVolumeWithCoord(_, _) {
          let _ = _.getBoundingClientRect(),
            _ = _._(_, _.left, _.right, 0, 1),
            _ = _._(_, 0, 1),
            _ = this.props.video;
          _.SetMute(_ < 0.01), _.SetVolume(_);
        }
        render() {
          let _ = this.props.video,
            _ = 100 * _.GetVolume();
          _.IsMuted() && (_ = 0);
          let _ = {
              left: `${_}%`,
            },
            _ = {
              width: `${_}%`,
            };
          return _.createElement(
            "div",
            {
              className: "BroadcastVolumeSlider",
              onMouseDown: this.OnMouseDown,
            },
            _.createElement("div", {
              className: "BroadcastVolumeSlider_Track",
            }),
            _.createElement("div", {
              className: "BroadcastVolumeSlider_Fill",
              style: _,
            }),
            _.createElement("div", {
              className: "BroadcastVolumeSlider_Thumb",
              style: _,
            }),
          );
        }
      };
      (0, _._)([_._], _.prototype, "OnMouseDown", null),
        (0, _._)([_._], _.prototype, "OnMouseMove", null),
        (0, _._)([_._], _.prototype, "OnMouseUp", null),
        (0, _._)([_._], _.prototype, "SetVolumeWithCoord", null),
        (_ = (0, _._)([_._], _));
      var _ = __webpack_require__("chunkid");
      const _ = 15;
      let _ = class extends _.Component {
        constructor(_) {
          super(_),
            (this.m_schHideControls = new _._()),
            (this.m_schUnmountControls = new _._()),
            (this.m_elVideo = null),
            (this.m_elBroadcastPlayer = null),
            (this.m_bMouseDown = !1),
            (this.m_elMouseDown = null),
            (this.m_listeners = new _._()),
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
          var _, _;
          let _ = this.state.video;
          _ &&
            (_._.StopVideo(_),
            this.setState({
              video: null,
            }),
            null === (_ = (_ = this.props).fnSetBroadcastVideo) ||
              void 0 === _ ||
              _.call(_, null));
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
              this.BindVideoRef(this.m_elVideo),
            !this.props.nAppIDVOD ||
              (void 0 !== _.strInitialCapsuleImageUrl &&
                _.nAppIDVOD == this.props.nAppIDVOD) ||
              _._.Get()
                .QueueAppRequest(this.props.nAppIDVOD, {
                  include_assets: !0,
                  include_trailers: !0,
                })
                .then(() => {
                  const _ = _._.Get().GetApp(this.props.nAppIDVOD),
                    _ =
                      (null == _
                        ? void 0
                        : _.GetAssets().GetMainCapsuleURL()) || "";
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
          var _, _;
          let _;
          this.StopVideo(),
            this.props.steamIDBroadcast
              ? _ &&
                (_ = _._.CreateBroadcastVideo(
                  _,
                  this.props.steamIDBroadcast,
                  this.props.watchLocation,
                  this.props.bWebRTC,
                ))
              : this.props.broadcastClipID
                ? _ &&
                  (_ = _._.CreateClipVideo(
                    _,
                    this.props.broadcastClipID,
                    this.props.watchLocation,
                  ))
                : this.props.nAppIDVOD &&
                  _ &&
                  ((_ = _._.CreateVODVideo(
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
            null === (_ = (_ = this.props).fnSetBroadcastVideo) ||
              void 0 === _ ||
              __webpack_require__.call(_, _),
            (this.m_elVideo = _);
        }
        OnMouseDown(_) {
          (this.m_bMouseDown = !0),
            (this.m_elMouseDown = _.currentTarget),
            this.m_elMouseDown.ownerDocument.defaultView.addEventListener(
              "mouseup",
              this.OnMouseUp,
            );
        }
        OnMouseUp(_) {
          (this.m_bMouseDown = !1),
            this.m_elMouseDown.ownerDocument.defaultView.removeEventListener(
              "mouseup",
              this.OnMouseUp,
            ),
            this.m_schHideControls.Schedule(3200, this.HideControls);
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
            this.m_schHideControls.Schedule(3200, this.HideControls);
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
          this.setState((_) => {
            if (!_.bControlsVisible && _.bMountControls)
              return {
                bMountControls: !1,
              };
          });
        }
        ShowStatsView() {
          let _ = this.state.video;
          _ &&
            (this.state.bShowStats ||
              (this.setState({
                bShowStats: !0,
              }),
              _.SetStatsViewIsVisible(!0)));
        }
        OnContextMenu(_) {
          this.state.bFullscreen ||
            ((0, _._)(
              _.createElement(_._, null, this.GetContextMenuItems()),
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
          _ && __webpack_require__.SetStatsViewIsVisible(_);
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
              _.createElement(
                _._,
                {
                  key: "togglestats",
                  bChecked: this.state.bShowStats,
                  onSelected: (_) => {
                    this.ToggleStatsView(_);
                  },
                },
                (0, _._)("#Broadcast_VideoContext_ToggleStats"),
              ),
            ),
            _ &&
              "0" != _.m_strAppId &&
              Number.parseInt(_.m_strAppId) != _._ &&
              _.push(
                _.createElement(
                  _._,
                  {
                    key: "visitstore",
                    onSelected: (_) => {
                      this.ShowStorePage(_);
                    },
                  },
                  (0, _._)("#Broadcast_VideoContext_OpenStore"),
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
              : (0, _._)(this.m_elBroadcastPlayer, this.m_elVideo));
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
          return (
            !_ ||
            !!_.GetUserInputNeeded() ||
            _._.GetBroadcastState(_) == _._.Error
          );
        }
        render() {
          var _;
          const _ = this.state.video,
            _ = _ && _.IsPaused(),
            _ = _ && _.BHasDASHStats() && this.state.bShowStats,
            _ = Boolean(_ && _.IsReplay()),
            _ = this.state.bMountControls,
            _ = this.state.bControlsVisible || _,
            _ = _ && _.GetUserInputNeeded(),
            _ =
              (null == _ ? void 0 : _.IsBroadcastVOD()) &&
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
                _.createElement("div", {
                  key: "ChatPosToggle ChatTheaterToggle",
                  onClick: this.props.onTheaterMode,
                  title: (0, _._)("#Broadcast_View_Theater"),
                  className: "BroadcastTheaterToggle",
                }),
              ),
            _.push(
              _.createElement("div", {
                key: "FullscreenToggle",
                title: (0, _._)("#Broadcast_View_Fullscreen"),
                onClick: this.OnToggleFullscreen,
                className: "BroadcastFullscreenToggle",
              }),
            );
          const _ = _ && !this.BHideVideoControls(),
            _ = _ && !this.state.bFullscreen,
            _ =
              this.props.fnRenderBroadcastContext &&
              this.props.fnRenderBroadcastContext();
          return _.createElement(
            "div",
            {
              ref: this.BindBroadcastPlayerRef,
              className: _,
              onMouseMove: this.OnMouseMove,
              onClick: this.OnMouseMove,
              onMouseLeave: this.OnMouseLeave,
              onContextMenu: this.OnContextMenu,
              onMouseDown: this.OnMouseDown,
            },
            _ &&
              _.createElement(
                "div",
                {
                  className: _().BroadcastContext,
                },
                _,
              ),
            _ && _.createElement(_, null),
            this.props.showVideoBackgroundBlur &&
              _.createElement(_, {
                className: "videoBlur",
                elementRef: this.m_elVideo,
                updateRate: 33,
                width: 320,
                height: 180,
                reductionFactor: 10,
                blurAmount: 5,
              }),
            _.createElement("video", {
              className: "videoSrc",
              ref: this.BindVideoRef,
              muted: null === (_ = this.props.bMuted) || void 0 === _ || _,
              autoPlay: !0,
              playsInline: !0,
              controls: !1,
              onVolumeChange: this.props.fnVolumeChanged,
              onClick: this.props.fnVideoClick,
            }),
            this.props.linkRegions
              ? _.createElement(_, {
                  linkRegions: this.props.linkRegions,
                  editMode: this.props.editMode,
                  onSaveLinkRegions: this.props.onSaveLinkRegions,
                })
              : null,
            this.props.linkElement,
            _ &&
              _.createElement("img", {
                loading: "lazy",
                className: (0, _._)(
                  _().BroadcastPlaceholderImg,
                  "BroadcastPlaceholderImg",
                ),
                src: this.state.strInitialCapsuleImageUrl,
              }),
            _ &&
              _.createElement(_, {
                video: _,
                actions: _,
                onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                onShowStats: this.ToggleStatsView,
                bIncludeClipEditor: this.props.bIncludeClipEditor,
              }),
            _ &&
              _.createElement(_, {
                onClick: this.props.onRequestClose,
              }),
            _ &&
              _.createElement(_, {
                stats: _.GetDASHPlayerStats(),
                closeStats: this.CloseStats,
              }),
            _.createElement(_, {
              video: _,
            }),
            _ &&
              _.createElement(_, {
                video: _,
              }),
          );
        }
      };
      (0, _._)([_._], _.prototype, "BindBroadcastPlayerRef", null),
        (0, _._)([_._], _.prototype, "BindVideoRef", null),
        (0, _._)([_._], _.prototype, "OnMouseDown", null),
        (0, _._)([_._], _.prototype, "OnMouseUp", null),
        (0, _._)([_._], _.prototype, "OnMouseMove", null),
        (0, _._)([_._], _.prototype, "OnMouseLeave", null),
        (0, _._)([_._], _.prototype, "HideControls", null),
        (0, _._)([_._], _.prototype, "UmountControls", null),
        (0, _._)([_._], _.prototype, "ShowStatsView", null),
        (0, _._)([_._], _.prototype, "OnContextMenu", null),
        (0, _._)([_._], _.prototype, "ToggleStatsView", null),
        (0, _._)([_._], _.prototype, "ShowStorePage", null),
        (0, _._)([_._], _.prototype, "CloseStats", null),
        (0, _._)([_._], _.prototype, "OnToggleFullscreen", null),
        (0, _._)([_._], _.prototype, "OnFullscreenChange", null),
        (_ = (0, _._)([_._], _));
      const _ = _;
      let _ = class extends _.Component {
        render() {
          const { video: _ } = this.props;
          if (!_) return null;
          let _ = _.has_segments;
          return _.createElement(
            "div",
            {
              className: "videoControls",
            },
            _.createElement(_, {
              steamID: this.props.video.GetBroadcastSteamID(),
              bHideThumbnail: !0,
              bVerticalBroadcastChat: !0,
              onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
            }),
            _.createElement(
              "div",
              {
                className: "videoControlsBottom" + (_ ? "" : " noSegments"),
              },
              _.createElement(_, {
                video: _,
                bIncludeClipEditor: this.props.bIncludeClipEditor,
              }),
              _.createElement(
                "div",
                {
                  className: "STV_BroadcastController",
                },
                _.createElement("div", {
                  className: "videoControlsButtons LeftSpacer",
                }),
                _.createElement(_, {
                  video: _,
                }),
                _.createElement(_, {
                  video: _,
                }),
                _.createElement(_, {
                  video: _,
                  actions: this.props.actions,
                  onShowStats: this.props.onShowStats,
                }),
              ),
            ),
          );
        }
      };
      _ = (0, _._)([_._], _);
      class _ extends _.PureComponent {
        render() {
          return this.props.onClick
            ? _.createElement(
                "div",
                {
                  className: "STV_BroadcastClose",
                  onClick: this.props.onClick,
                },
                _.createElement(_.sED, null),
              )
            : null;
        }
      }
      class _ extends _.Component {
        OnJumpBackward() {
          this.props.video.JumpTime(-15);
        }
        OnJumpForward() {
          this.props.video.JumpTime(_);
        }
        render() {
          let _ = this.props.video,
            _ = _.CanSeek();
          return _.createElement(
            "div",
            {
              className: "videoControlsButtons PlayControls",
            },
            _.createElement(_, {
              video: _,
            }),
            _ &&
              _.createElement(
                "div",
                {
                  className: "videoControlButton videoControlJump controlFlip",
                  onClick: this.OnJumpBackward,
                },
                _.createElement(_.tID, {
                  bHidePostArrow: !0,
                  bHidePreArrow: !0,
                  bShowJumpAheadBox: !0,
                  bFlipHorizontal: !0,
                }),
                _.createElement(
                  "div",
                  {
                    className: "jumpAheadValue",
                  },
                  _,
                ),
              ),
            _.createElement(_, {
              video: _,
            }),
            _ &&
              _.createElement(
                "div",
                {
                  className: "videoControlButton videoControlJump",
                  onClick: this.OnJumpForward,
                },
                _.createElement(_.tID, {
                  bHidePostArrow: !0,
                  bHidePreArrow: !0,
                  bShowJumpAheadBox: !0,
                  bFlipHorizontal: !1,
                }),
                _.createElement(
                  "div",
                  {
                    className: "jumpAheadValue",
                  },
                  _,
                ),
              ),
            _ &&
              _.createElement(_, {
                video: _,
              }),
          );
        }
      }
      (0, _._)([_._], _.prototype, "OnJumpBackward", null),
        (0, _._)([_._], _.prototype, "OnJumpForward", null);
      const _ = (0, _._)((_) => {
        if (_.video.IsBroadcastClip() || _.video.IsBroadcastVOD()) return null;
        let _ = _.video.IsOnLiveEdge();
        return _.createElement(
          "div",
          {
            className: "videoControlsButtons GoLive",
          },
          _.createElement(
            "div",
            {
              className:
                "videoControlButton videoControlGoLive" +
                (_ ? " isLiveEdge" : ""),
              onClick: _
                ? null
                : (_) => {
                    _.video.JumpToLiveEdge();
                  },
            },
            _.createElement(_.tID, {
              bHidePreArrow: !0,
              bHidePostArrow: !0,
              bFlipHorizontal: !1,
            }),
            _.createElement(
              "div",
              {
                className: "jumpGoLive",
              },
              (0, _._)(
                _ ? "#DASHPlayerControls_IsLive" : "#DASHPlayerControls_GoLive",
              ),
            ),
          ),
        );
      });
      let _ = class extends _.Component {
        OnTogglePlayPause() {
          this.props.video.TogglePlayPause();
        }
        render() {
          let _ = this.props.video.IsPaused();
          return _.createElement(
            "div",
            {
              className: "videoControlButton buttonPlayPause",
              onClick: this.OnTogglePlayPause,
            },
            _ ? _.createElement(_.jGG, null) : _.createElement(_.vRz, null),
          );
        }
      };
      (0, _._)([_._], _.prototype, "OnTogglePlayPause", null),
        (_ = (0, _._)([_._], _));
      let _ = class extends _.Component {
        constructor(_) {
          super(_),
            (this.video = void 0),
            (0, _._)(this),
            (this.video = _.video);
        }
        componentDidUpdate() {
          this.video = this.props.video;
        }
        get has_previous_marker() {
          return void 0 !== this.GetPreviousMarkerTime();
        }
        GetPreviousMarkerTime() {
          if (!this.video.has_markers) return;
          let _ = this.video.GetTimelineMarkers(),
            _ = this.video.GetPlaybackTime();
          for (let _ = _.length - 1; _ >= 0; _--)
            if (!(_[_].nTime >= _)) return _[_].nTime;
        }
        OnJumpToPreviousMarkerClicked(_) {
          let _ = this.GetPreviousMarkerTime();
          void 0 !== _ && this.props.video.Seek(_ - 0.2);
        }
        render() {
          let _ = this.props.video.BHasMarkersOrSegments();
          return _.createElement(
            "div",
            {
              className:
                "videoControlButton jumpToMarker controlFlip" +
                (_ ? "" : " noMarkersOrSegments") +
                (this.has_previous_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToPreviousMarkerClicked,
            },
            _.createElement(_.tID, {
              bHidePostArrow: !0,
              bFlipHorizontal: !0,
            }),
          );
        }
      };
      (0, _._)([_._], _.prototype, "video", void 0),
        (0, _._)([_._], _.prototype, "has_previous_marker", null),
        (0, _._)([_._], _.prototype, "OnJumpToPreviousMarkerClicked", null),
        (_ = (0, _._)([_._], _));
      let _ = class extends _.Component {
        constructor(_) {
          super(_),
            (this.video = void 0),
            (0, _._)(this),
            (this.video = _.video);
        }
        componentDidUpdate() {
          this.video = this.props.video;
        }
        get has_next_marker() {
          return void 0 !== this.GetNextMarkerTime();
        }
        GetNextMarkerTime() {
          if (!this.video.has_markers) return;
          let _ = this.video.GetTimelineMarkers(),
            _ = this.video.GetPlaybackTime();
          for (let _ = 0; _ < _.length; _++)
            if (!(_[_].nTime <= _)) return _[_].nTime;
        }
        OnJumpToNextMarkerClicked(_) {
          let _ = this.GetNextMarkerTime();
          void 0 !== _ && this.props.video.Seek(_);
        }
        render() {
          let _ = this.props.video.BHasMarkersOrSegments();
          return _.createElement(
            "div",
            {
              className:
                "videoControlButton jumpToMarker" +
                (_ ? "" : " noMarkersOrSegments") +
                (this.has_next_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToNextMarkerClicked,
            },
            _.createElement(_.tID, {
              bHidePostArrow: !0,
              bFlipHorizontal: !1,
            }),
          );
        }
      };
      (0, _._)([_._], _.prototype, "video", void 0),
        (0, _._)([_._], _.prototype, "has_next_marker", null),
        (0, _._)([_._], _.prototype, "OnJumpToNextMarkerClicked", null),
        (_ = (0, _._)([_._], _));
      const _ = (_) =>
        _.createElement(
          "div",
          {
            className: "timelineMarker",
            title: _.label,
            style: {
              left: _.pos + "%",
            },
            onMouseEnter: () => _.onMouseEnter(_.pos),
            onMouseLeave: _.onMouseLeave,
            onMouseDown: _.onMouseDown ? _.onMouseDown : void 0,
          },
          _.createElement(
            "div",
            {
              className: "timelineMarkerIcon",
            },
            _.createElement(_.Dp6, null),
          ),
        );
      function _(_) {
        let _ = _.startPos,
          _ = _.endPos,
          _ = "",
          _ = 1;
        return (
          _ < 0 && ((_ = (_ - _) / 10), (_ = 0), (_ = " hideFront")),
          _.createElement(
            "div",
            {
              className: "STV_timelineSegment" + _,
              style: {
                left: _ + "%",
                width: _ - _ + "%",
                opacity: _,
              },
              onClick: _.onClick,
            },
            _.createElement("div", {
              className: "STV_timelineSegmentFrontFill",
              style: {
                borderColor: "rgb(" + _.color + ")",
              },
            }),
            _.createElement(
              "div",
              {
                className: "STV_timelineSegmentLabel",
                style: {
                  color: "rgb(" + _.color + ")",
                },
              },
              _.label,
            ),
            _.createElement("div", {
              className: "STV_timelineSegmentBackFill",
              style: {
                borderColor: "rgb(" + _.color + ")",
              },
            }),
          )
        );
      }
      let _ = class extends _.Component {
        constructor(_) {
          super(_),
            (this.m_elSlider = _.createRef()),
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
        OnMouseDown(_, _) {
          if (this.m_elSlider) {
            _.persist(),
              (this.m_rectSlider =
                this.m_elSlider.current &&
                this.m_elSlider.current.getBoundingClientRect());
            let _ = {};
            "start" === _
              ? ((_ = {
                  bStartMouseDown: !0,
                }),
                _.stopPropagation())
              : "end" === _
                ? ((_ = {
                    bEndMouseDown: !0,
                  }),
                  _.stopPropagation())
                : (_ = {
                    bGrabberMouseDown: !0,
                  }),
              this.setState(_, () => this.AdjustSliderForClientX(_.clientX)),
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
              (this.m_elSlider.current.ownerDocument.defaultView.removeEventListener(
                "mousemove",
                this.OnMouseMove,
              ),
              this.m_elSlider.current.ownerDocument.defaultView.removeEventListener(
                "mouseup",
                this.OnMouseUp,
              ));
        }
        OnKeyDown(_) {
          37 == _.keyCode
            ? (this.props.video.JumpTime(-15), _.preventDefault())
            : 39 == _.keyCode &&
              (this.props.video.JumpTime(15), _.preventDefault());
        }
        AdjustSliderForClientX(_) {
          let _ = this.props.video,
            _ = _.GetTimelineStartPos(),
            _ = _.GetTimelineStartPos() + _.GetTimelineDuration(),
            _ = _.GetTimeAtMousePosition(_, this.m_rectSlider, _, _);
          if (this.state.bStartMouseDown) {
            const _ = _._(_, _, _.m_editorEndTime - 5);
            _.m_editorStartTime = _;
          } else if (this.state.bEndMouseDown) {
            const _ = _._(_, _.m_editorStartTime + 5, _);
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
            this.m_elSlider.current &&
            this.m_elSlider.current.getBoundingClientRect();
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
            _ = (0, _._)(this.state.nHoverValue),
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
                _.createElement(_, {
                  key: _,
                  pos: _,
                  label: _.strTemplateName,
                  onMouseEnter: this.OnMarkerMouseEnter,
                  onMouseLeave: this.OnMarkerMouseLeave,
                }),
              );
          });
          let _ = [];
          _.GetTimelineSegments().forEach((_, _) => {
            let _ = _.GetPercentOffsetFromTime(_.nTimeStart, _._.Timeline);
            if (_ > 100) return;
            let _ = _.GetPercentOffsetFromTime(_.nTimeEnd, _._.Timeline);
            _ < 0 ||
              _.push(
                _.createElement(_, {
                  key: _,
                  startPos: _,
                  endPos: _,
                  label: _.strTemplateName,
                  color: _.color,
                  onClick: (_) => this.OnSegmentClick(_.nTimeStart),
                }),
              );
          });
          const _ = _.GetPercentOffsetFromTime(
              _.m_editorStartTime,
              _._.Timeline,
            ),
            _ = _.GetPercentOffsetFromTime(_.m_editorEndTime, _._.Timeline),
            _ = this.props.bIncludeClipEditor
              ? [
                  _.createElement(_, {
                    key: "start",
                    pos: _,
                    label: (0, _._)("#DASHPlayerControls_Start"),
                    onMouseEnter: this.OnMarkerMouseEnter,
                    onMouseLeave: this.OnMarkerMouseLeave,
                    onMouseDown: (_) => this.OnMouseDown(_, "start"),
                  }),
                  _.createElement(_, {
                    key: "end",
                    pos: _,
                    label: (0, _._)("#DASHPlayerControls_End"),
                    onMouseEnter: this.OnMarkerMouseEnter,
                    onMouseLeave: this.OnMarkerMouseLeave,
                    onMouseDown: (_) => this.OnMouseDown(_, "end"),
                  }),
                ]
              : [];
          return _.createElement(
            "div",
            {
              className: "videoTimelineMain",
              tabIndex: 0,
              onKeyDown: this.OnKeyDown,
            },
            _.createElement(
              "div",
              {
                className: _,
              },
              _.createElement(
                "div",
                {
                  className: "DialogLabel",
                },
                _,
              ),
              _.createElement(
                "div",
                {
                  className: "STV_timelineSegmentsContainer",
                },
                _,
              ),
              _.createElement(
                "div",
                {
                  onMouseDown: this.OnMouseDown,
                  onMouseMove: this.OnMouseHoverMove,
                  onMouseLeave: this.OnMouseHoverLeave,
                  ref: this.m_elSlider,
                },
                _.createElement(
                  "div",
                  {
                    className: "VideoTimelineSlider",
                  },
                  _.createElement("div", {
                    className: "STV_timelineValue",
                    style: _,
                  }),
                  _.createElement("div", {
                    className: "STV_timelineGhostValue",
                    style: _,
                  }),
                  _.createElement("div", {
                    className: "STV_timelineNoVideo",
                    style: _,
                  }),
                  _,
                  _,
                  Boolean(this.state.hoverX) &&
                    _.createElement(
                      "div",
                      {
                        key: "grabbertime",
                        style: {
                          position: "absolute",
                          left: this.state.hoverX - 75,
                          bottom: "30px",
                        },
                      },
                      _.createElement(
                        "div",
                        {
                          style: {
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                          },
                        },
                        this.state.thumbnailURL &&
                          _.createElement("img", {
                            style: {
                              width: "150px",
                            },
                            src: this.state.thumbnailURL,
                          }),
                        _.createElement(
                          "span",
                          {
                            className: "STV_timelineGrabberValue",
                            style: {
                              position: "absolute",
                              bottom: "4px",
                            },
                          },
                          _,
                        ),
                      ),
                    ),
                  _.createElement(
                    "div",
                    {
                      className: "STV_timelineGrabber_Wrapper",
                      style: _,
                    },
                    _.createElement(
                      "div",
                      {
                        className: "STV_timelineGrabber" + _,
                      },
                      _.createElement(
                        "div",
                        {
                          className: "STV_timelineGrabberArrow",
                        },
                        _.createElement(_.apU, null),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          );
        }
      };
      (0, _._)([_._], _.prototype, "OnMouseDown", null),
        (0, _._)([_._], _.prototype, "OnMouseMove", null),
        (0, _._)([_._], _.prototype, "OnMouseUp", null),
        (0, _._)([_._], _.prototype, "OnKeyDown", null),
        (0, _._)([_._], _.prototype, "OnMouseHoverMove", null),
        (0, _._)([_._], _.prototype, "OnMouseHoverLeave", null),
        (0, _._)([_._], _.prototype, "AdjustHoverForClientX", null),
        (0, _._)([_._], _.prototype, "OnSegmentClick", null),
        (0, _._)([_._], _.prototype, "OnMarkerMouseEnter", null),
        (0, _._)([_._], _.prototype, "OnMarkerMouseLeave", null),
        (_ = (0, _._)([_._], _));
      let _ = class extends _.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              info: null,
            });
        }
        static getDerivedStateFromProps(_, _) {
          if (
            (!_.info || _.info.m_steamIDBroadcast !== _.steamID) &&
            (_.info && (_._.StopInfo(_.info), (_.info = null)), _.steamID)
          ) {
            return {
              info: _._.StartInfo(_.steamID),
            };
          }
          return null;
        }
        componentWillUnmount() {
          this.state.info && _._.StopInfo(this.state.info);
        }
        RenderStreamSwitcher() {
          const _ = this.props.steamID;
          return _._.stream[_]
            ? _.createElement(_, {
                value: _,
                options: _._.stream,
                onChange: this.props.onLocalStreamChange,
              })
            : null;
        }
        render() {
          let { info: _ } = this.state;
          if (!_) return null;
          let _ = "";
          _.m_nViewerCount && (_ = (0, _._)(_.m_nViewerCount));
          let _ = _._.bValid && _._.stream && _._.stream[_.m_steamIDBroadcast],
            _ =
              !this.props.bHideThumbnail &&
              this.props.bVerticalBroadcastChat &&
              (parseInt(_.m_strAppId) > 0 || _);
          const _ =
            !this.props.bHideThumbnail &&
            this.props.bVerticalBroadcastChat &&
            _ &&
            _._.gidEvent;
          return _.createElement(
            "div",
            {
              className: "BroadcastDetails",
            },
            !this.props.bHideThumbnail &&
              _.createElement(_, {
                className: "broadcastDetailsThumbBlur",
                src: _.m_strThumbnailUrl,
                draggable: !1,
                duration: 2500,
              }),
            _.createElement(
              "div",
              {
                className: "BroadcastDetailsHeader",
              },
              _ &&
                _.m_strAppTitle &&
                _.createElement(
                  "div",
                  {
                    className: "displayColumn",
                  },
                  _.createElement(
                    "div",
                    {
                      className: "Info",
                    },
                    _.createElement(
                      "span",
                      {
                        className: "AppTitle",
                      },
                      _.m_strAppTitle,
                    ),
                    _.m_strTitle &&
                      _.createElement(
                        "span",
                        {
                          className: "BroadcastTitle",
                        },
                        " - ",
                        _.m_strTitle,
                      ),
                    this.props.onLocalStreamChange &&
                      this.RenderStreamSwitcher(),
                  ),
                  _ &&
                    _.createElement(
                      "div",
                      {
                        className: "BroadcastDetailsHeader_ViewerCount",
                      },
                      _.createElement(_.y_e, null),
                      (0, _._)("#Broadcast_ViewerCount", _),
                    ),
                ),
              _ &&
                this.props.onOpenLinkInNewWindow &&
                _.createElement(
                  "div",
                  {
                    className: "Actions",
                  },
                  _.createElement(
                    "div",
                    {
                      onClick: (_) =>
                        this.props.onOpenLinkInNewWindow(_, _._.link),
                      className: "BroadcastLink",
                    },
                    _._.linkName,
                  ),
                ),
            ),
            _ &&
              _.createElement(_._, {
                gidEvent: _._.gidEvent,
              }),
            _ &&
              _.createElement(_._, {
                _:
                  _._.bValid && _._.stream && _._.stream[_.m_steamIDBroadcast]
                    ? _._.appID
                    : parseInt(_.m_strAppId),
                type: "game",
                bPreferAssetWithoutOverride: !1,
              }),
          );
        }
      };
      _ = (0, _._)([_._], _);
      class _ extends _.Component {
        showContextMenu(_) {
          const {
              options: _,
              value: __webpack_require__,
              onChange: _,
            } = this.props,
            _ = Object.keys(_).map((_) =>
              _.createElement(
                _._,
                {
                  key: _,
                  onSelected: () => _(_),
                  bChecked: _ === __webpack_require__,
                },
                (0, _._)(_[_]),
              ),
            );
          (0, _._)(_.createElement(_._, null, _), _);
        }
        render() {
          const { value: _, options: _ } = this.props,
            _ = _[_];
          return _.createElement(
            "div",
            {
              className: "BroadcastLanguage",
              onClick: this.showContextMenu,
            },
            _.createElement("span", null, " - ", (0, _._)(_)),
            _.createElement(
              "div",
              {
                className: "ContextMenuButton",
              },
              _.createElement(_.GB9, null),
            ),
          );
        }
      }
      (0, _._)([_._], _.prototype, "showContextMenu", null);
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
          0 == _.linkRegions.length &&
            this.props.linkRegions.forEach((_, _) => {
              this.LoadLinkRegion(_, _);
            });
        }
        async LoadLinkRegion(_, _) {
          this.state.sizableRegion.length;
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
              left: Math.floor(100 * this.state.sizableRegion[_].xPosPct),
              top: Math.floor(100 * this.state.sizableRegion[_].yPosPct),
              width: Math.floor(100 * this.state.sizableRegion[_].widthPct),
              height: Math.floor(100 * this.state.sizableRegion[_].heightPct),
              url: this.state.sizableRegion[_].link_url,
              link_description: this.state.sizableRegion[_].link_description,
              link_index: _,
            }),
              _.links.push(_);
          }
          this.props.onSaveLinkRegions(_);
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
          return _.createElement(
            "div",
            {
              className: "LinkOverlayContainer",
            },
            _.createElement(
              "div",
              {
                className: "LinkOverlayValidRegion",
              },
              !this.props.editMode && this.props.linkRegions
                ? this.props.linkRegions.map((_) => {
                    const _ = (0, _._)(_.url);
                    return _.createElement(
                      _._,
                      {
                        key: _.link_index,
                        href: _.url,
                        bForceExternal: _,
                        bUseLinkFilter: _,
                      },
                      _.createElement(
                        "div",
                        {
                          className: "LinkRegion",
                          style: {
                            left: _.left + "%",
                            top: _.top + "%",
                            width: _.width + "%",
                            height: _.height + "%",
                          },
                        },
                        _.createElement(
                          "div",
                          {
                            className: "LinkRegionText",
                          },
                          _.link_description,
                          " ",
                        ),
                      ),
                    );
                  })
                : null,
              this.props.editMode &&
                this.state.sizableRegion.map((_, _) =>
                  _.createElement(_._, {
                    key: 100 * _ + _.xPosPct,
                    index: _,
                    deleteFn: this.DeleteRegion,
                    updateFn: this.UpdatePanel,
                    xPosPct: _.xPosPct,
                    yPosPct: _.yPosPct,
                    widthPct: _.widthPct,
                    heightPct: _.heightPct,
                    link_url: _.link_url,
                    link_description: _.link_description,
                  }),
                ),
              this.props.editMode &&
                _.createElement(
                  "div",
                  {
                    className: "AddLinkRegion",
                    onClick: this.AddLinkRegion,
                  },
                  (0, _._)("#SteamTV_AddLinkRegion"),
                ),
            ),
            _.createElement(
              "div",
              {
                className: "LinkOverlayInvalidRegion",
              },
              _.createElement(
                "div",
                null,
                (0, _._)("#SteamTV_LinkRegionReserved"),
              ),
            ),
          );
        }
      };
      (0, _._)([_._], _.prototype, "AddLinkRegion", null),
        (0, _._)([_._], _.prototype, "LoadLinkRegion", null),
        (0, _._)([_._], _.prototype, "OnSaveRegions", null),
        (0, _._)([_._], _.prototype, "DeleteRegion", null),
        (0, _._)([_._], _.prototype, "UpdatePanel", null),
        (_ = (0, _._)([_._], _));
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        return Boolean(_ && _.thumbnail_http_address);
      }
      function _(_, _) {
        if (_ || _) {
          const _ = _ || _;
          return Boolean(_ && _.Get().BIsAppStreaming(_));
        }
        return !1;
      }
      class _ {
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
            (0, _._)(this);
        }
        BHasStreams(_) {
          const _ = this.GetStreams(_);
          return Boolean(_ && _.length > 0);
        }
        AddCallbackOnNewContext(_, _, _) {
          this.m_onLoadContextCall.set(this.GetStreamsLookupKeyFromDef(_), {
            name: _,
            fnCallback: _,
          });
        }
        ClearCallbackOnNewContext(_) {
          this.m_onLoadContextCall.set(
            this.GetStreamsLookupKeyFromDef(_),
            null,
          );
        }
        GetPlayReadyStream(_) {
          let _ = this.GetStreamsLookupKeyFromDef(_);
          return this.m_playReadyStream.get(_);
        }
        BIsEmbeddedBroadcastHiddenByDefaultUserSettings() {
          return Boolean(this.m_bUserPreferenceHideBroadcastByDefault);
        }
        BIsEmbeddedStreamCollapsed() {
          return Boolean(this.m_bCollapsed);
        }
        SetEmbeddedStreamCollapsed(_) {
          this.m_bCollapsed != _ && (this.m_bCollapsed = _);
        }
        GetConcurrentStreams(_) {
          const _ = this.GetStreams(_);
          return _ ? _.filter((_) => _(_)).length : 0;
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
          const _ = this.GetChatVisibility();
          "remove" !== _ && (this.m_bUserChatExpanded = "hide" === _);
        }
        DebugDumpContextAndAvailableContext(_) {
          console.log("Requested context", this.GetStreamsLookupKeyFromDef(_)),
            console.log("Available context count: ", this.m_lookupStreams.size),
            this.m_lookupStreams.forEach((_, _) => {
              console.log(_, _.length);
            });
        }
        GetStreams(_) {
          const _ = this.GetStreamsLookupKeyFromDef(_);
          return this.m_lookupStreams.get(_);
        }
        GetBroadcastURL(_) {
          let _ = null;
          return (
            (_ = _.steamid
              ? new _._(_.steamid)
              : _._.InitFromAccountID(_.accountid)),
            _._.COMMUNITY_BASE_URL +
              "broadcast/watch/" +
              _.ConvertTo64BitString()
          );
        }
        BIsAppStreaming(_) {
          let _ = !1;
          return (
            this.m_lookupStreams.forEach((_) => {
              _ ||
                (_ =
                  Boolean(_) &&
                  __webpack_require__.some(
                    (_) =>
                      _._.GetOrCreateBroadcastInfo(_.steamid).m_nAppID === _,
                  ));
            }),
            _
          );
        }
        GetStreamsForAppID(_) {
          const _ = new Array();
          return (
            this.m_lookupStreams.forEach((_) => {
              null == _ ||
                __webpack_require__.forEach((_) => {
                  _._.GetOrCreateBroadcastInfo(_.steamid).m_nAppID === _ &&
                    _.push(_);
                });
            }),
            _
          );
        }
        AddStreamChangedListener(_) {
          this.m_setStreamChangedListeners.add(_);
        }
        RemoveStreamChangedListener(_) {
          this.m_setStreamChangedListeners.delete(_);
        }
        async LoadBIsEmbeddedBroadcastHidden(_) {
          if (void 0 === this.m_bUserPreferenceHideBroadcastByDefault) {
            let _ = (0, _._)("broadcastuser", "application_config");
            if (!_)
              try {
                let _ =
                    _._.STORE_BASE_URL +
                    "broadcast/ajaxgetuserbroadcastpreferences",
                  _ = await _().get(_, {
                    params: {},
                    cancelToken: _.token,
                  });
                _ = _.data;
              } catch (_) {
                console.log(
                  "LoadBIsEmbeddedBroadcastHidden: " + (0, _._)(_).strErrorMsg,
                ),
                  (_ = {
                    bHideStoreBroadcast: !1,
                  });
              }
            (0, _._)(() => {
              (this.m_bUserPreferenceHideBroadcastByDefault =
                _.bHideStoreBroadcast),
                (this.m_bCollapsed = _.bHideStoreBroadcast);
            });
          }
          return this.m_bUserPreferenceHideBroadcastByDefault;
        }
        async SetupEmbeddableVOD(_, _) {
          (this.m_bUseFakeData = !1),
            (this.m_streamChatStatus = "remove"),
            await _._.Get().QueueAppRequest(_.nAppIDVOD, {
              include_assets: !0,
              include_trailers: !0,
            });
          const _ = _._.Get().GetApp(_.nAppIDVOD),
            _ = new _._();
          if (
            ((_.accountid = 0),
            (_.nAppIDVOD = _.nAppIDVOD),
            (_.default_selection_priority = _._.k_ePrimary),
            (_.current_selection_priority = _._.k_ePrimary),
            (_.thumbnail_http_address =
              (null == _
                ? void 0
                : __webpack_require__.GetAssets().GetHeaderURL()) || ""),
            (_.title =
              (null == _ ? void 0 : __webpack_require__.GetName()) || ""),
            this.GetStreams(_).unshift(_),
            _)
          ) {
            const _ = this.GetStreamsLookupKeyFromDef(_);
            this.m_playReadyStream.set(_, _);
          }
        }
        async HintLoadEmbeddablePreviewStreams(_) {
          let _ = null,
            _ = {
              eventid: _.event ? _.event.GID : void 0,
              previewAccounts: Boolean(_.bIsPreview && _.accountIDs)
                ? _.accountIDs.slice().sort().join(",")
                : void 0,
            };
          try {
            return (
              (_ = await _().get(
                _._.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpreview",
                {
                  params: _,
                },
              )),
              this.HandleHintLoadBroadcastResponse(_, _.data)
            );
          } catch (_) {
            let _ = (0, _._)(_);
            console.error(
              "HintLoadEmbeddablePreviewStreams hit error loading: " +
                _.strErrorMsg,
              _,
            );
          }
          return [];
        }
        async HintLoadEmbeddableStreams(_) {
          let _ = this.MapEmbeddableStreamToRequest(_),
            _ = this.GetStreamsLookupKeyFromParam(_);
          if (!this.m_inFlightRequests.has(_)) {
            this.m_lookupKeyToEmbedStreamDef.set(_, _);
            const _ = this.InternalHintLoadEmbeddableStreams(_, _);
            this.m_inFlightRequests.set(_, _);
          }
          return this.m_inFlightRequests.get(_);
        }
        async InternalHintLoadEmbeddableStreams(_, _) {
          let _ = (0, _._)(
            "broadcast_available_for_page",
            "application_config",
          );
          if ((0, _._)(_)) return this.HandleHintLoadBroadcastResponse(_, _);
          try {
            let _ = null;
            return (
              (_ = await _().get(
                _._.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpage",
                {
                  params: _,
                },
              )),
              this.HandleHintLoadBroadcastResponse(_, _.data)
            );
          } catch (_) {
            let _ = (0, _._)(_);
            console.error(
              "HintLoadEmbeddableStreams hit error loading: " + _.strErrorMsg,
              _,
            );
          }
          return [];
        }
        async HandleHintLoadBroadcastResponse(_, _) {
          var _;
          (this.m_bUseFakeData = !1),
            _.bIsPreview &&
              ((null === (_ = null == _ ? void 0 : _.filtered) || void 0 === _
                ? void 0
                : _.length) > 0
                ? this.ExtractBroadcastPrioritiesFromPartnerEventForPreview(
                    _.event,
                    _.filtered,
                  )
                : ((_ = {
                    filtered: [{}],
                    success: 1,
                    total_count: 1,
                    err_msg: "",
                    broadcast_chat_visibility: "hide",
                  }),
                  (this.m_bUseFakeData = !0))),
            _.broadcast_chat_visibility &&
              (this.m_pageChatStatus = _.broadcast_chat_visibility);
          const _ = new Array();
          (0, _._)(() => {
            _.filtered.forEach((_) => {
              if (!_.steamid) {
                const _ = _._.InitFromAccountID(_.accountid);
                _.steamid = _.ConvertTo64BitString();
              }
              const _ = _._.GetOrCreateBroadcastInfo(_.steamid),
                _ = _.appid ? Number(_.appid) : _._;
              (_.m_nAppID = _),
                (_.m_strAppId = "" + _),
                void 0 === _.current_selection_priority &&
                  (_.current_selection_priority = _.default_selection_priority),
                _ != _._ && _.push(_);
            });
          });
          const _ = this.GetStreamsLookupKeyFromDef(_);
          if (
            (this.m_lookupStreams.set(_, _.filtered),
            this.m_onLoadContextCall.has(_))
          ) {
            const _ = this.m_onLoadContextCall.get(_);
            _
              ? ("dev" == _._.WEB_UNIVERSE &&
                  console.log(
                    "CBroadcastEmbeddableStore initialized after caller using callback to " +
                      _.name,
                  ),
                _.fnCallback())
              : "dev" == _._.WEB_UNIVERSE &&
                console.log(
                  "CBroadcastEmbeddableStore initialized after caller, however callback is since cleared",
                );
          }
          const _ = this.GetStreams(_);
          return await this.AutoStartVideoStream(_, _), _;
        }
        ExtractBroadcastPrioritiesFromPartnerEventForPreview(_, _) {
          var _, _;
          const _ = Array.from(
              null !== (_ = _.jsondata.broadcast_whitelist) && void 0 !== _
                ? _
                : [],
            ),
            _ = Array.from(
              null !== (_ = _.jsondata.broadcast_priority) && void 0 !== _
                ? _
                : [],
            ),
            _ = new Map();
          for (let _ = 0; _ < _.length && !(_ >= _.length); _++)
            _.set(_[_], (0, _._)(_[_]));
          _.forEach((_) => {
            const _ = Number(_.accountid);
            _.has(_) && (_.current_selection_priority = _.get(_));
          });
        }
        async AutoStartVideoStream(_, _) {
          let _ = this.GetStreamsLookupKeyFromDef(_);
          if (this.m_bMapHasStartedVideo.get(_)) return null;
          if (this.m_bUseFakeData) {
            if (!this.m_playReadyStream.get(_)) {
              const _ = {
                accountid: 0,
                thumbnail_http_address: "",
                default_selection_priority: _._.k_eGeneral,
                current_selection_priority: _._.k_eGeneral,
              };
              this.m_playReadyStream.set(_, _);
            }
            return this.m_playReadyStream;
          }
          return this.PlayFromAvailableStreams(_, _);
        }
        async PlayFromAvailableStreams(_, _, __webpack_require__ = !1) {
          const _ = new Set();
          for (;;) {
            const _ = _.filter(
                (_) => !(_.has(_) || (__webpack_require__ && _.nAppIDVOD)),
              ),
              _ = this.GetAutoStartStream(_);
            if (!_) return null;
            if (await this.AttemptToPlayStream(_, _)) return _;
            _.add(_);
          }
        }
        async AttemptToPlayStream(_, _) {
          let _ = this.GetStreamsLookupKeyFromDef(_);
          if (
            (this.m_bMapHasStartedVideo.set(_, !0),
            this.m_mapBroadcastChecked.has(_.accountid) ||
              this.m_mapBroadcastChecked.set(
                _.accountid,
                this.InternalAttemptToPlayStream(_, _),
              ),
            _.nAppIDVOD)
          )
            this.m_playReadyStream.set(_, _);
          else {
            const _ = await this.m_mapBroadcastChecked.get(_.accountid);
            if (1 != (null == _ ? void 0 : _.success)) return null;
            (_.steamid = _.steamid),
              this.m_playReadyStream.set(_, _),
              this.GetConcurrentStreams(_) > 1
                ? (this.m_streamChatStatus = "hide")
                : (this.m_streamChatStatus = _.broadcast_chat_visibility),
              this.m_setStreamChangedListeners.forEach((_) => _(_));
            _(_._.GetOrCreateBroadcastInfo(_.steamid).m_nAppID, 1, _.snr);
          }
          return _;
        }
        async InternalAttemptToPlayStream(_, _) {
          this.GetStreamsLookupKeyFromDef(_);
          let _ = null;
          try {
            const _ = _._.STORE_BASE_URL + "broadcast/ajaxcheckbroadcast";
            let _ = {
              broadcastaccountid: _.accountid,
              viewer_token: _._.GetViewerToken(),
              origin: self.origin,
            };
            return (
              (_ = await _().get(_, {
                params: _,
              })),
              _.data
            );
          } catch (_) {
            let _ = (0, _._)(_);
            console.error("Broadcast.AttemptToPlayStream: " + _.strErrorMsg, _);
          }
          return null;
        }
        GetAutoStartStream(_) {
          if (!_) return null;
          const _ = _.filter((_) => _(_)),
            _ = _.reduce((_, _) => Math.max(_, _(_)), 0),
            _ = _.filter((_) => _(_) === _);
          if (0 === _.length) return null;
          return _[Math.floor(Math.random() * _.length)];
        }
        MapEmbeddableStreamToRequest(_) {
          var _, _, _;
          return {
            appid: _.appid,
            promotionName: _.bIsPreview ? "preview" : _.promotionName,
            clanid: _.clanid
              ? _.clanid
              : _.event
                ? _.event.clanSteamID.GetAccountID()
                : void 0,
            listid: _.listid,
            subid: _.subid,
            bundleid: _.bundleid,
            eventid: _.event ? _.event.GID : void 0,
            previewAccounts: Boolean(_.bIsPreview && _.accountIDs)
              ? _.accountIDs.slice().sort().join(",")
              : void 0,
            test: false,
            _: _._.COUNTRY,
            _: _._.LANGUAGE,
            hubtype:
              null === (_ = _.event) || void 0 === _
                ? void 0
                : _.GetContentHubType(),
            hubcategory:
              null === (_ = _.event) || void 0 === _
                ? void 0
                : __webpack_require__.GetContentHubCategory(),
            hubtagid:
              null === (_ = _.event) || void 0 === _
                ? void 0
                : _.GetContentHubTag(),
            tabuniqueid: _.tabuniqueid,
            tabfilter: _.tabfilter,
            rt_now_override_test: _._.BHasTimeOverride()
              ? _._.GetTimeNowWithOverride()
              : void 0,
          };
        }
        GetStreamsLookupKeyFromDef(_) {
          return this.GetStreamsLookupKeyFromParam(
            this.MapEmbeddableStreamToRequest(_),
          );
        }
        GetStreamsLookupKeyFromParam(_) {
          return JSON.stringify(_);
        }
        static Get() {
          return (
            _.s_GlobalStore ||
              ((_.s_GlobalStore = new _()),
              "dev" == _._.WEB_UNIVERSE &&
                (window.g_BroadcastEmbeddableStore = _.s_GlobalStore),
              _.s_GlobalStore.Init()),
            _.s_GlobalStore
          );
        }
        Init() {}
      }
      function _(_) {
        return _.current_selection_priority || _._.k_eGeneral;
      }
      function _(_) {
        _.sort((_, _) =>
          _(_) != _(_)
            ? _(_) - _(_)
            : _.viewer_count != _.viewer_count
              ? _.viewer_count - _.viewer_count
              : _.accountid - _.accountid,
        );
      }
      async function _(_, _, _) {
        if (_ > 0 && 7 != _ && _) {
          let _ = new URLSearchParams();
          _.append("page_action", "" + _),
            _.append("snr", _),
            _().post(
              _._.STORE_BASE_URL + "ajaxreportproductaction/" + _ + "/",
              _,
            );
        }
      }
      (0, _._)([_._], _.prototype, "m_lookupStreams", void 0),
        (0, _._)([_._], _.prototype, "m_playReadyStream", void 0),
        (0, _._)([_._], _.prototype, "m_pageChatStatus", void 0),
        (0, _._)([_._], _.prototype, "m_streamChatStatus", void 0),
        (0, _._)([_._], _.prototype, "m_bUserChatExpanded", void 0),
        (0, _._)(
          [_._],
          _.prototype,
          "m_bUserPreferenceHideBroadcastByDefault",
          void 0,
        ),
        (0, _._)([_._], _.prototype, "m_bCollapsed", void 0),
        (0, _._)([_._], _.prototype, "HintLoadEmbeddablePreviewStreams", null),
        (0, _._)([_._], _.prototype, "AttemptToPlayStream", null);
      const _ = new _._();
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        constructor() {
          (this.m_mapBroadcasterSteamIDToEvents = new Map()),
            (this.m_mapBroadcasterSteamIDData = new Map()),
            (0, _._)(this);
        }
        static GetBBCodeParam(_, _, __webpack_require__ = "") {
          const _ = new RegExp(`\\W${_}\\W*=\\W*\\"(.*?)\\"`, "gmi").exec(_);
          return _ ? _[1] : __webpack_require__;
        }
        static ParseCalendarEventPresentersFromText(_) {
          const _ = /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
            _ = new Array();
          for (;;) {
            const _ = _.exec(_);
            if (null === _) break;
            const _ = _[1],
              _ = _[2],
              _ = _.GetBBCodeParam(_, "steamid"),
              _ = {
                steamID: _ ? new _._(_) : void 0,
                name: _.GetBBCodeParam(_, "name"),
                title: _.GetBBCodeParam(_, "title"),
                company: _.GetBBCodeParam(_, "company"),
                photo: _.GetBBCodeParam(_, "photo"),
                bio: _,
              };
            __webpack_require__.push(_);
          }
          return _;
        }
        static ParseEventModelPresenters(_, _) {
          const _ = _.GetDescriptionWithFallback(_);
          return _.ParseCalendarEventPresentersFromText(_);
        }
        static ParseEventAppReferencesFromText(_) {
          const _ = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
            _ = new Set();
          for (;;) {
            const _ = _.exec(_);
            if (null === _) break;
            const _ = _[1];
            __webpack_require__.add(Number(_));
          }
          return _;
        }
        static ParseEventModelAppReferences(_, _) {
          var _;
          const _ = _.GetDescriptionWithFallback(_),
            _ = _.ParseEventAppReferencesFromText(_);
          if (
            null === (_ = _.jsondata) || void 0 === _
              ? void 0
              : _.referenced_appids
          )
            for (const _ of _.jsondata.referenced_appids) _.add(_);
          return _;
        }
        async BuildBroadcasterSteamIDToActiveEventMap(_) {
          const _ = _._.GetTimeNowWithOverride(),
            _ = _.GetCalendarItemsInTimeRange(_ - 3600, _);
          for (const _ of _.rgCalendarItems)
            _._.QueueLoadPartnerEvent(_.clanid, _.unique_id);
          const _ = _.rgCalendarItems.map((_) =>
              _._.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                _._.InitFromClanID(_.clanid),
                _.unique_id,
                0,
              ),
            ),
            _ = await Promise.all(_),
            _ = new Map();
          for (const _ of _)
            if (_ && !(_.endTime && _.endTime < _))
              for (const _ of _.GetBroadcastWhitelistAsSteamIDs())
                _.has(_) ? _.get(_).push(_) : _.set(_, [_]);
          return _;
        }
        IsBroadcasterAlreadyBound(_, _) {
          const _ = this.m_mapBroadcasterSteamIDToEvents.get(_),
            _ = _ ? _.length : 0;
          if ((_ ? _.length : 0) != _) return !1;
          for (let _ = 0; _ < _; _++) if (_[_] != _[_].GID) return !1;
          return !0;
        }
        static BuildSteamIDToPresenterMapFromEventList(_, _) {
          let _ = new Map();
          for (const _ of _) {
            if (!_) continue;
            const _ = _.ParseEventModelPresenters(_, _);
            for (const _ of _)
              _.steamID &&
                __webpack_require__.set(_.steamID.ConvertTo64BitString(), _);
          }
          return _;
        }
        RemoveCachedDataIfNotInMap(_) {
          const _ = new Array();
          this.m_mapBroadcasterSteamIDToEvents.forEach((_, _) => {
            _.has(_) || _.push(_);
          }),
            _.forEach((_) => {
              this.m_mapBroadcasterSteamIDData.delete(_),
                this.m_mapBroadcasterSteamIDToEvents.delete(_);
            });
        }
        static BuildAppIDRefsForEventList(_, _) {
          const _ = new Set();
          for (const _ of _) {
            _.ParseEventModelAppReferences(_, _).forEach((_) =>
              __webpack_require__.add(_),
            );
          }
          return Array.from(_);
        }
        UpdateCachedDataFromEvents(_, _) {
          _.forEach((_, _) => {
            if (this.IsBroadcasterAlreadyBound(_, _)) return;
            const _ = {
              m_mapPresenters: _.BuildSteamIDToPresenterMapFromEventList(_, _),
              m_rgAppIDs: _.BuildAppIDRefsForEventList(_, _),
            };
            this.m_mapBroadcasterSteamIDData.set(_, _),
              this.m_mapBroadcasterSteamIDToEvents.set(
                _,
                _.map((_) => _.GID),
              );
          });
        }
        async SynchronizeEventsWithBroadcasts(_, _) {
          const _ = await this.BuildBroadcasterSteamIDToActiveEventMap(_);
          this.RemoveCachedDataIfNotInMap(_),
            this.UpdateCachedDataFromEvents(_, _);
        }
        GetPresenterMapForBroadcasterSteamID(_) {
          var _;
          return null === (_ = this.m_mapBroadcasterSteamIDData.get(_)) ||
            void 0 === _
            ? void 0
            : _.m_mapPresenters;
        }
        GetAppIDListForBroadcasterSteamID(_) {
          var _;
          return null === (_ = this.m_mapBroadcasterSteamIDData.get(_)) ||
            void 0 === _
            ? void 0
            : _.m_rgAppIDs;
        }
      }
      (0, _._)([_._], _.prototype, "m_mapBroadcasterSteamIDData", void 0);
      const _ = new _();
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _, _) {
        return [_, _, _];
      }
      class _ extends Error {}
      class _ extends _._ {
        constructor(_) {
          super(), (this.m_appid = _ || 0);
        }
        GetAppID() {
          return this.m_appid;
        }
        parseColor(_) {
          if ("string" != typeof _ || !_.match(/^#[0-9a-fA-F]{6}$/))
            throw new _("expected color string");
          return [
            parseInt(_.substring(1, 3), 16),
            parseInt(_.substring(3, 5), 16),
            parseInt(_.substring(5, 7), 16),
          ];
        }
        parseString(_) {
          if ("string" == typeof _) return _;
          throw new _("expected string");
        }
        parseNumber(_) {
          if ("number" == typeof _) return _;
          throw new _("expected number");
        }
        parseDate(_) {
          if ("number" == typeof _) return new Date(_);
          throw new _("expected timestamp");
        }
        parseArray(_, _) {
          let _ = [];
          if ("object" != typeof _ || !Array.isArray(_))
            throw new _("expected array");
          let _ = _.length;
          for (let _ = 0; _ < _; ++_)
            try {
              __webpack_require__.push(_(_[_]));
            } catch (_) {
              throw ((_.message += "\n...while parsing array element " + _), _);
            }
          return _;
        }
        parseDict(_, _) {
          let _ = new Map();
          if ("object" != typeof _ || Array.isArray(_))
            throw new _("expected object");
          for (let _ in _)
            try {
              __webpack_require__.set(_, _(_[_]));
            } catch (_) {
              throw (
                ((_.message += "\n...while parsing dictionary element " + _), _)
              );
            }
          return _;
        }
        parseBracket(_) {
          let _ = {
            name: this.parseString(_.name),
            start: this.parseDate(_.start),
            color: [255, 0, 255],
          };
          return (
            "params" in _ &&
              (_.params = this.parseDict(
                _.params,
                this.parseString.bind(this),
              )),
            "end" in _ && (_.end = this.parseDate(_.end)),
            "color" in _ && (_.color = this.parseColor(_.color)),
            _
          );
        }
        parseMarker(_) {
          let _ = {
            time: this.parseDate(_.time),
            color: [0, 255, 255],
          };
          return (
            "name" in _ && (_.name = this.parseString(_.name)),
            "params" in _ &&
              (_.params = this.parseDict(
                _.params,
                this.parseString.bind(this),
              )),
            "color" in _ && (_.color = this.parseColor(_.color)),
            _
          );
        }
        parseSoundTrack(_) {
          let _ = {};
          return (
            "song_title" in _ &&
              (_.song_title = this.parseString(_.song_title)),
            "appid" in _ && (_.appid = this.parseNumber(_.appid)),
            "song_index" in _ &&
              (_.song_index = this.parseNumber(_.song_index)),
            _
          );
        }
        parseBroadcastGameData(_) {
          let _ = {
            appid: 0,
            brackets: [],
            markers: [],
          };
          return (
            "appid" in _ && (_.appid = this.parseNumber(_.appid)),
            "brackets" in _ &&
              (_.brackets = this.parseArray(
                _.brackets,
                this.parseBracket.bind(this),
              )),
            "markers" in _ &&
              (_.markers = this.parseArray(
                _.markers,
                this.parseMarker.bind(this),
              )),
            "soundtrack" in _ &&
              (_.soundtrack = this.parseSoundTrack(_.soundtrack)),
            _
          );
        }
        convertTime(_, _) {
          return _ - _ / 1e3;
        }
        UpdateMarkers(_, _) {
          let _ = [],
            _ = [];
          for (const _ of _)
            _.persistent
              ? (_.length > 0 &&
                  (_[_.length - 1].nTimeEnd = this.convertTime(_.Timestamp, _)),
                _.name.length > 0 &&
                  _.push({
                    strTemplateName: _.name,
                    nTimeStart: this.convertTime(_.Timestamp, _),
                    nTimeEnd: -1,
                    color: _(_.color_r, _.color_g, _.color_b),
                  }))
              : __webpack_require__.push({
                  strTemplateName: _.name,
                  nTime: this.convertTime(_.Timestamp, _),
                  color: _(_.color_r, _.color_g, _.color_b),
                });
          return {
            rgMarkers: _,
            rgSegments: _,
          };
        }
        UpdateRegions(_) {
          let _ = [];
          for (const _ of _)
            _.push({
              strTemplateName: _.name,
              min: {
                _: _.min_x,
                _: _.min_y,
              },
              max: {
                _: _.max_x,
                _: _.max_y,
              },
              behavior: _.behavior,
            });
          return _;
        }
        UpdateSoundtrack(_, _) {}
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        constructor(_) {
          (this.m_elVideo = null),
            (this.m_peerConnection = null),
            (this.m_strBroadcastSteamID = void 0),
            (this.m_ulWebRTCSessionID = void 0),
            (this.m_schCandidateTimer = new _._()),
            (this.m_nHostCandidateGeneration = void 0),
            (this.m_nCandidateUpdateIntervalMS = void 0),
            (this.m_listeners = new _._()),
            (this.m_bFirstPlay = !0),
            (this.m_bStatsViewVisible = !1),
            (this.m_schCaptureDisplayStatsTrigger = new _._()),
            (this.m_stats = new _._()),
            (0, _._)(this),
            (this.m_elVideo = _);
        }
        async PlayMPD(_, _, _) {}
        async PlayWebRTC(_, _, _, _, _) {
          (this.m_strBroadcastSteamID = _),
            (this.m_ulWebRTCSessionID = _),
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
          let _ = {
            iceServers: [
              {
                urls: ["stun:" + _],
              },
              {
                urls: ["turn:" + _],
                username: _,
                credential: _,
              },
            ],
            iceTransportPolicy: "relay",
          };
          (this.m_peerConnection = new RTCPeerConnection(_)),
            (this.m_peerConnection.oniceconnectionstatechange = ((_) => {
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
            (this.m_peerConnection.onicecandidate = ((_) => {
              if (_.candidate) {
                const _ = new FormData();
                _.append("broadcaststeamid", this.m_strBroadcastSteamID),
                  _.append("webrtc_session_id", this.m_ulWebRTCSessionID),
                  _.append("sdp_mid", _.candidate.sdpMid),
                  _.append(
                    "sdp_mline_index",
                    String(_.candidate.sdpMLineIndex),
                  ),
                  _.append("candidate", _.candidate.candidate),
                  _()
                    .post(
                      `${_._.CHAT_BASE_URL}broadcast/addbroadcastwebrtccandidate`,
                      _,
                    )
                    .then((_) => {
                      const _ = _.data;
                      (_.success && 1 == _.success) ||
                        console.log(
                          "Failed to add a WebRTC session ICE candidate: " +
                            String(_.success),
                        );
                    })
                    .catch((_) =>
                      console.log(
                        "Failed to add a WebRTC session ICE candidate" + _,
                      ),
                    );
              }
            }).bind(this)),
            (this.m_peerConnection.ontrack = ((_) => {
              "video" === _.track.kind &&
                ((this.m_elVideo.src = null),
                (this.m_elVideo.srcObject = _.streams[0]),
                this.Play());
            }).bind(this)),
            this.m_peerConnection
              .setRemoteDescription({
                type: "offer",
                sdp: _,
              })
              .then(async () => {
                await this.m_peerConnection.setLocalDescription(
                  await this.m_peerConnection.createAnswer(),
                );
                const _ = new FormData();
                _.append("broadcaststeamid", this.m_strBroadcastSteamID),
                  _.append("webrtc_session_id", this.m_ulWebRTCSessionID),
                  _.append(
                    "answer",
                    this.m_peerConnection.localDescription.sdp,
                  );
                try {
                  await _()
                    .post(
                      `${_._.CHAT_BASE_URL}broadcast/setbroadcastwebrtcanswer`,
                      _,
                    )
                    .then((_) => {
                      const _ = _.data;
                      if (!_.success || 1 != _.success)
                        throw new Error(String(_.success));
                    });
                } catch (_) {
                  return (
                    console.log(
                      "Failed to set the WebRTC session answer: " + _,
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
          const _ = new FormData();
          _.append("broadcaststeamid", this.m_strBroadcastSteamID),
            _.append("webrtc_session_id", this.m_ulWebRTCSessionID),
            _.append(
              "candidate_generation",
              String(this.m_nHostCandidateGeneration),
            );
          try {
            await _()
              .post(
                `${_._.CHAT_BASE_URL}broadcast/getbroadcastwebrtccandidates`,
                _,
              )
              .then((_) => {
                const _ = _.data,
                  _ = _.data;
                if (!_.success || 1 != _.success)
                  throw new Error(String(_.success));
                _.candidate_generation > this.m_nHostCandidateGeneration
                  ? (_.candidates.forEach((_) => {
                      const _ = new RTCIceCandidate({
                        sdpMid: _.sdp_mid,
                        sdpMLineIndex: _.sdp_mline_index,
                        candidate: _.candidate,
                      });
                      this.m_peerConnection
                        .addIceCandidate(_)
                        .catch((_) => console.error(_));
                    }),
                    (this.m_nHostCandidateGeneration = _.candidate_generation))
                  : this.m_nHostCandidateGeneration > 0 &&
                    (this.m_nCandidateUpdateIntervalMS *= 2);
              });
          } catch (_) {
            return (
              console.log("Failed to get WebRTC session ICE candidates" + _),
              void this.OnWebRTCConnectionRetry()
            );
          }
          this.m_schCandidateTimer.Schedule(
            this.m_nCandidateUpdateIntervalMS,
            () => this.GetHostCandidates(),
          );
        }
        DispatchEvent(_, _ = null) {
          let _ = new CustomEvent(_, {
            cancelable: !0,
            bubbles: !0,
            detail: _,
          });
          this.m_elVideo.dispatchEvent(_);
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
          const _ = this.m_bFirstPlay;
          this.m_bFirstPlay = !1;
          let _ = !1;
          const _ = () => {
            (_ = !0),
              this.m_stats
                .GetFPSMonitor()
                .StartTracking(() =>
                  this.m_stats.ExtractFrameInfo(this.m_elVideo),
                );
          };
          try {
            await this.m_elVideo.play(), __webpack_require__();
          } catch (_) {
            _.name;
          }
          !_ && _ && this.DispatchEvent("valve-userinputneeded");
        }
        Pause() {
          this.m_elVideo.pause();
        }
        CanSeek() {
          return !1;
        }
        SeekAndPlay(_) {
          return this.Play(), 0;
        }
        Seek(_) {
          return 0;
        }
        JumpTime(_) {
          return 0;
        }
        IsMuted() {
          return this.m_elVideo.muted;
        }
        SetMuted(_) {
          this.m_elVideo.muted = _;
        }
        SetVolume(_) {
          (_ = _._(_, 0, 1)), (this.m_elVideo.volume = _);
        }
        GetVolume() {
          return this.m_elVideo.volume;
        }
        GetDASHPlayerStats() {
          return this.m_stats;
        }
        SetStatsViewIsVisible(_) {
          _ && !this.m_bStatsViewVisible
            ? (this.CaptureStatsForDisplay(),
              this.m_schCaptureDisplayStatsTrigger.Schedule(
                250,
                this.CaptureStatsForDisplay,
              ))
            : !_ &&
              this.m_bStatsViewVisible &&
              this.m_schCaptureDisplayStatsTrigger.Cancel(),
            (this.m_bStatsViewVisible = _);
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
        OnVideoPause(_) {
          this.m_stats.GetFPSMonitor().Close();
        }
        OnVideoResize(_) {
          this.m_stats.GetFPSMonitor().SetWindowResized();
        }
        GetVideoRepresentations() {
          let _ = [];
          return (
            _.push({
              _: "auto",
              displayName: "Auto",
              selected: !0,
            }),
            _
          );
        }
        SetVideoRepresentation(_) {}
        IsLiveContent() {
          return !0;
        }
        BHasTimedText() {
          return !1;
        }
      }
      (0, _._)([_._], _.prototype, "PlayWebRTC", null),
        (0, _._)([_._.bound], _.prototype, "CaptureStatsForDisplay", null),
        (0, _._)([_._], _.prototype, "OnVideoPause", null),
        (0, _._)([_._], _.prototype, "OnVideoResize", null);
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = 7;
      var _, _;
      !(function (_) {
        (_[(_.None = 0)] = "None"),
          (_[(_.Unlocking = 1)] = "Unlocking"),
          (_[(_.Loading = 2)] = "Loading"),
          (_[(_.Ready = 3)] = "Ready"),
          (_[(_.Error = 4)] = "Error");
      })(_ || (_ = {}));
      class _ {
        constructor() {
          (this.m_rtUnlockTime = 0), (this.m_schUnlockTimeout = new _._());
        }
        UnlockH264(_, _) {
          this.BCanUnlockH264()
            ? (_.SetState(_.Unlocking, ""),
              console.log("Unlocking H.264 for broadcast video playback"),
              this.RequestUnlockH264(),
              (this.m_broadcast = _),
              (this.m_video = _),
              (this.m_rtUnlockTime = Date.now()),
              this.m_schUnlockTimeout.Schedule(100, () =>
                this.CheckUnlockState(),
              ))
            : _.SetState(_.Error, (0, _._)("#BroadcastWatch_MinBrowser"));
        }
        BCanUnlockH264() {
          return (0, _._)("RemotePlay.UnlockH264")
            ? (console.log("Client supports direct H.264 unlock"), !0)
            : (0, _._)("BrowserView.PostMessageToParent")
              ? (console.log("Client supports browserview H.264 unlock"), !0)
              : (console.log("Client does not support H.264 unlock"), !1);
        }
        RequestUnlockH264() {
          (0, _._)("RemotePlay.UnlockH264")
            ? (console.log("Requesting direct H.264 unlock"),
              SteamClient.RemotePlay.UnlockH264())
            : (0, _._)("BrowserView.PostMessageToParent")
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
          if (this.m_broadcast.m_eWatchState != _.Unlocking) return;
          if ((0, _._)() || (0, _._)())
            return (
              console.log("Unlocking H.264 successful"),
              this.m_broadcast.SetState(_.None, ""),
              void this.m_video.Restart()
            );
          Date.now() - this.m_rtUnlockTime > 6e3
            ? (console.log(
                "Unlocking H.264 timed out (Steam client or servers offline?)",
              ),
              this.m_broadcast.SetState(
                _.Error,
                (0, _._)("#BroadcastWatch_MinBrowser"),
              ))
            : this.m_schUnlockTimeout.Schedule(100, () =>
                this.CheckUnlockState(),
              );
        }
      }
      class _ {
        constructor() {
          (this.m_steamIDBroadcast = ""),
            (this.m_ulBroadcastID = ""),
            (this.m_ulViewerToken = ""),
            (this.m_strCDNAuthUrlParameters = void 0),
            (this.m_bWebRTC = !1),
            (this.m_eWatchState = _.None),
            (this.m_strStateDescription = ""),
            (this.m_rgVideos = []),
            (this.m_schManifestTimeout = new _._()),
            (this.m_schHeartbeatTimeout = new _._()),
            (0, _._)(this);
        }
        SetState(_, _ = "") {
          (this.m_eWatchState = _),
            (this.m_strStateDescription = _),
            _ == _.Error && console.log(this.m_strStateDescription);
        }
      }
      (0, _._)([_._], _.prototype, "m_ulBroadcastID", void 0),
        (0, _._)([_._], _.prototype, "m_eWatchState", void 0),
        (0, _._)([_._], _.prototype, "m_strStateDescription", void 0),
        (0, _._)([_._], _.prototype, "SetState", null);
      class _ {
        constructor(_) {
          (this.m_steamIDBroadcast = ""),
            (this.m_bInitialized = !1),
            (this.m_strTitle = ""),
            (this.m_strAppId = "" + _),
            (this.m_nAppID = _),
            (this.m_strAppTitle = ""),
            (this.m_strThumbnailUrl = ""),
            (this.m_nViewerCount = 0),
            (this.m_bIsOnline = !1),
            (this.m_schUpdateTimeout = new _._()),
            (this.m_nRefCount = 0),
            (0, _._)(this),
            (this.m_steamIDBroadcast = _);
        }
      }
      (0, _._)([_._], _.prototype, "m_bInitialized", void 0),
        (0, _._)([_._], _.prototype, "m_strTitle", void 0),
        (0, _._)([_._], _.prototype, "m_strAppId", void 0),
        (0, _._)([_._], _.prototype, "m_nAppID", void 0),
        (0, _._)([_._], _.prototype, "m_strAppTitle", void 0),
        (0, _._)([_._], _.prototype, "m_strThumbnailUrl", void 0),
        (0, _._)([_._], _.prototype, "m_nViewerCount", void 0),
        (0, _._)([_._], _.prototype, "m_bIsOnline", void 0);
      class _ {
        constructor() {
          (this.m_eWatchState = _.None),
            (this.m_strStateDescription = ""),
            (this.m_rgVideos = []),
            (0, _._)(this);
        }
        SetState(_, _ = "") {
          (this.m_eWatchState = _),
            (this.m_strStateDescription = _),
            _ == _.Error && console.log(this.m_strStateDescription);
        }
      }
      (0, _._)([_._], _.prototype, "m_eWatchState", void 0),
        (0, _._)([_._], _.prototype, "m_strStateDescription", void 0),
        (0, _._)([_._], _.prototype, "SetState", null);
      class _ extends _ {}
      class _ extends _ {}
      class _ {
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
            (this.m_schSaveSettings = new _._()),
            (this.m_broadcastInfos = {}),
            (0, _._)(this),
            this.LoadBroadcastSettings();
        }
        GetBroadcastState(_) {
          if (_.IsBroadcastClip()) {
            let _ = this.m_mapClips.get(_.GetBroadcastClipID());
            return _ ? _.m_eWatchState : _.None;
          }
          if (_.IsBroadcastVOD()) {
            const _ = this.m_mapVODs.get(_.GetBroadcastAppIDVOD());
            return _ ? _.m_eWatchState : _.None;
          }
          {
            let _ = this.m_mapBroadcasts.get(_.GetBroadcastSteamID());
            return _ ? _.m_eWatchState : _.None;
          }
        }
        GetBroadcastStateDescription(_) {
          if (_.IsBroadcastClip()) {
            let _ = this.m_mapClips.get(_.GetBroadcastClipID());
            return _ ? _.m_strStateDescription : "";
          }
          if (_.IsBroadcastVOD()) {
            const _ = this.m_mapVODs.get(_.GetBroadcastAppIDVOD());
            return _ ? _.m_strStateDescription : "";
          }
          {
            let _ = this.m_mapBroadcasts.get(_.GetBroadcastSteamID());
            return _ ? _.m_strStateDescription : "";
          }
        }
        CreateBroadcastVideo(_, _, _, _) {
          let _ = this.GetOrCreateBroadcast(_),
            { nVolume: _, bMuted: _ } = this.m_broadcastSettings,
            _ = new _(_, _, _, _);
          if (
            (_.SetBroadcastSteamID(_),
            _.m_rgVideos.push(_),
            (_.m_bWebRTC = _),
            !(0, _._)() && !(0, _._)())
          ) {
            return new _().UnlockH264(_, _), _;
          }
          return _;
        }
        CreateClipVideo(_, _, _) {
          let _ = this.GetOrCreateClip(_),
            { nVolume: _, bMuted: _ } = this.m_broadcastSettings,
            _ = new _(_, _, _, _);
          if (
            (_.SetBroadcastClipID(_),
            _.m_rgVideos.push(_),
            !(0, _._)() && !(0, _._)())
          ) {
            return new _().UnlockH264(_, _), _;
          }
          return _;
        }
        CreateVODVideo(_, _, _) {
          let _ = this.GetOrCreateVOD(_),
            { nVolume: _, bMuted: _ } = this.m_broadcastSettings,
            _ = new _(_, _, _, _);
          if (
            (_.SetBroadcastAppIDVOD(_),
            _.m_rgVideos.push(_),
            !(0, _._)() && !(0, _._)())
          ) {
            return new _().UnlockH264(_, _), _;
          }
          return _;
        }
        StartVideo(_) {
          if (_.IsBroadcastClip()) {
            console.log(`Starting clip for ${_.GetBroadcastClipID()}`);
            let _ = this.m_mapClips.get(_.GetBroadcastClipID());
            if (!_) return;
            this.SetActiveVideo(_),
              _.m_eWatchState == _.None
                ? this.GetClipManifest(_, _.GetWatchLocation())
                : _.m_eWatchState == _.Ready && _.StartClip(_);
          } else if (_.IsBroadcastVOD()) {
            console.log(`Starting VOD for ${_.GetBroadcastAppIDVOD()}`);
            let _ = this.m_mapVODs.get(_.GetBroadcastAppIDVOD());
            if (!_) return;
            this.SetActiveVideo(_),
              _.m_eWatchState == _.None
                ? this.GetVODManifest(_, _.GetWatchLocation())
                : _.m_eWatchState == _.Ready && _.StartVOD(_);
          } else {
            let _ = this.m_mapBroadcasts.get(_.GetBroadcastSteamID());
            if (!_) return;
            this.SetActiveVideo(_),
              _.m_eWatchState == _.None
                ? this.GetBroadcastManifest(_, _.GetWatchLocation())
                : _.m_eWatchState == _.Ready && _.StartBroadcast(_);
          }
        }
        SetActiveVideo(_) {
          this.m_mapBroadcasts.forEach((_) => {
            for (let _ of _.m_rgVideos)
              _ != _ && __webpack_require__.StopPlaybackTillUserInput();
          }),
            this.m_mapClips.forEach((_) => {
              for (let _ of _.m_rgVideos)
                _ != _ && __webpack_require__.StopPlaybackTillUserInput();
            }),
            (this.m_activeVideo = _);
        }
        PauseAllVideo() {
          this.m_mapBroadcasts.forEach((_) => {
            for (let _ of _.m_rgVideos) _.StopPlaybackTillUserInput();
          });
        }
        async StopVideo(_) {
          let _ = _.GetBroadcastSteamID(),
            _ = this.m_mapBroadcasts.get(_);
          _.Stop(),
            _ &&
              (_.m_ulBroadcastID &&
                (async function (_, _, _) {
                  if (!_) return;
                  let _ = new FormData();
                  _.append("steamid", _),
                    _.append("broadcastid", _),
                    _.append("viewertoken", _);
                  try {
                    await _().post(
                      _._.CHAT_BASE_URL + "broadcast/stopwatching",
                      _,
                    );
                  } catch {}
                })(
                  _,
                  _.m_ulBroadcastID,
                  this.m_broadcastSettings.ulViewerToken,
                ),
              _._(_.m_rgVideos, (_) => _ == _),
              this.RemoveBroadcastIfUnused(_));
        }
        StartInfo(_) {
          const _ = this.GetOrCreateBroadcastInfo(_);
          return (
            _.m_nRefCount++,
            (_.m_bInitialized && _.m_schUpdateTimeout.IsScheduled()) ||
              this.LoadBroadcastInfo(_),
            _
          );
        }
        StopInfo(_) {
          _.m_nRefCount--;
        }
        GetOrCreateBroadcastInfo(_) {
          if (!_) {
            return new _("");
          }
          if (!this.m_broadcastInfos[_]) {
            const _ = (0, _._)(new _(_));
            this.m_broadcastInfos[_] = _;
          }
          return this.m_broadcastInfos[_];
        }
        GetOrCreateBroadcast(_) {
          let _ = this.m_mapBroadcasts.get(_);
          return (
            _ ||
            ((_ = new _()),
            (_.m_steamIDBroadcast = _),
            (_.m_eWatchState = _.None),
            this.m_mapBroadcasts.set(_, _),
            _)
          );
        }
        GetBroadcast(_) {
          return this.m_mapBroadcasts.get(_);
        }
        GetBroadcastClip(_) {
          return this.m_mapClips.get(_);
        }
        GetBroadcastVOD(_) {
          return this.m_mapVODs.get(_);
        }
        RemoveBroadcastIfUnused(_) {
          _.m_rgVideos.length ||
            (_.m_schHeartbeatTimeout.Cancel(),
            _.m_schManifestTimeout.Cancel(),
            this.m_mapBroadcasts.delete(_.m_steamIDBroadcast));
        }
        GetOrCreateClip(_) {
          let _ = this.m_mapClips.get(_);
          return (
            _ ||
            ((_ = new _()),
            (_.m_clipID = _),
            (_.m_eWatchState = _.None),
            this.m_mapClips.set(_, _),
            _)
          );
        }
        GetOrCreateVOD(_) {
          let _ = this.m_mapVODs.get(_);
          return (
            _ ||
            ((_ = new _()),
            (_.m_nAppIDVOD = _),
            (_.m_eWatchState = _.None),
            this.m_mapVODs.set(_, _),
            _)
          );
        }
        async LoadBroadcastInfo(_) {
          let _ = "0",
            _ = this.m_mapBroadcasts.get(_.m_steamIDBroadcast);
          if ((_ && (_ = _.m_ulBroadcastID), 0 == _.m_nRefCount)) return;
          const _ = {
            steamid: _.m_steamIDBroadcast,
            broadcastid: _,
            location:
              _ &&
              _.m_rgVideos &&
              _.m_rgVideos[0] &&
              _.m_rgVideos[0].GetWatchLocation(),
          };
          try {
            const _ = await _().get(
              `${_._.CHAT_BASE_URL}broadcast/getbroadcastinfo/`,
              {
                params: _,
              },
            );
            if (!_ || !_.data || !_.data.success || 1 != _.data.success)
              return void (_.m_bInitialized = !0);
            const _ = _.data;
            (0, _._)(() => {
              (_.m_bInitialized = !0),
                (_.m_strTitle = _.title),
                (_.m_strAppId = _.appid),
                (_.m_nAppID = Number.parseInt(_.appid)),
                (_.m_strAppTitle = _.app_title),
                (_.m_strThumbnailUrl = _.thumbnail_url),
                (_.m_nViewerCount = _.viewer_count),
                (_.m_bIsOnline = _.is_online),
                !_.m_strTitle &&
                  _._ &&
                  ((_.m_strTitle = _._.name),
                  (_.m_strAppTitle = _._.appName || _._.name));
              const _ = _.update_interval;
              _ &&
                "number" == typeof _ &&
                _.m_schUpdateTimeout.Schedule(1e3 * _, () =>
                  this.LoadBroadcastInfo(_),
                );
            });
          } catch (_) {
            console.error(_);
          }
        }
        DelayedGetBroadcastManifest(_, _, __webpack_require__ = Date.now()) {
          _.m_schManifestTimeout.Schedule(5e3, () =>
            this.GetBroadcastManifest(_, _, __webpack_require__),
          );
        }
        async GetBroadcastManifest(_, _, __webpack_require__ = Date.now()) {
          _.SetState(_.Loading, "");
          let _ = {
              steamid: _.m_steamIDBroadcast,
              broadcastid: 0,
              viewertoken: this.m_broadcastSettings.ulViewerToken,
              watchlocation: _,
              sessionid: _._.SESSIONID,
              is_webrtc: _.m_bWebRTC,
            },
            _ = null;
          try {
            _ = await _().get(
              _._.CHAT_BASE_URL + "broadcast/getbroadcastmpd/",
              {
                params: _,
                withCredentials: !0,
              },
            );
          } catch (_) {
            let _ = (0, _._)(_);
            console.error(
              "Failed to get broadcast manifest!" + _.strErrorMsg,
              _,
            );
          }
          if (!_ || 200 != _.status)
            return void _.SetState(
              _.Error,
              (0, _._)("#BroadcastWatch_RequestFailed"),
            );
          let _ = _.data;
          _.viewertoken && this.SetViewerToken(_.viewertoken);
          let _ = _.success;
          if ("ready" == _)
            _.SetState(_.Ready),
              (_.m_ulBroadcastID = _.broadcastid),
              (_.m_ulViewerToken = this.m_broadcastSettings.ulViewerToken),
              (_.m_strCDNAuthUrlParameters = _.cdn_auth_url_parameters),
              (_.m_bWebRTC = _.is_webrtc),
              (_.m_data = _),
              this.LoadBroadcast(_),
              setTimeout(() => {
                _.m_schHeartbeatTimeout.Schedule(
                  1e3 * _.m_data.heartbeat_interval,
                  () => this.HeartbeatBroadcast(_),
                );
              }, 3e4 * Math.random());
          else if ("waiting" == _) {
            _.SetState(
              _.Loading,
              (0, _._)("#BroadcastWatch_WaitingForResponse"),
            );
            let _ = Date.now() - __webpack_require__;
            if (_ > 6e4)
              return void _.SetState(
                _.Error,
                (0, _._)("#BroadcastWatch_NotAvailable"),
              );
            let _ = _ > 3e4 ? _.retry : 5e3;
            _.m_schManifestTimeout.Schedule(_, () =>
              this.GetBroadcastManifest(_, _, __webpack_require__),
            );
          } else
            "waiting_for_start" == _
              ? (_.SetState(
                  _.Loading,
                  (0, _._)("#BroadcastWatch_WaitingForStart"),
                ),
                _.m_schManifestTimeout.Schedule(_.retry, () =>
                  this.GetBroadcastManifest(_, _, __webpack_require__),
                ))
              : "waiting_for_reconnect" == _
                ? (_.SetState(
                    _.Loading,
                    (0, _._)("#BroadcastWatch_WaitingForReconnect"),
                  ),
                  _.m_schManifestTimeout.Schedule(_.retry, () =>
                    this.GetBroadcastManifest(_, _, __webpack_require__),
                  ))
                : "end" == _
                  ? _.SetState(
                      _.Error,
                      (0, _._)("#BroadcastWatch_NotAvailable"),
                    )
                  : "too_many_broadcasts" == _
                    ? _.SetState(
                        _.Error,
                        (0, _._)("#BroadcastWatch_TooManyBroadcasts"),
                      )
                    : "system_not_supported" == _
                      ? _.SetState(
                          _.Error,
                          (0, _._)("#BroadcastWatch_SystemNotSupported"),
                        )
                      : "user_restricted" == _
                        ? _.SetState(
                            _.Error,
                            (0, _._)("#BroadcastWatch_UserRestricted"),
                          )
                        : "poor_upload_quality" == _
                          ? _.SetState(
                              _.Error,
                              (0, _._)("#BroadcastWatch_PoorUploadQuality"),
                            )
                          : "request_failed" == _
                            ? _.SetState(
                                _.Error,
                                (0, _._)("#BroadcastWatch_RequestFailed"),
                              )
                            : "too_many_viewers" == _
                              ? _.SetState(
                                  _.Error,
                                  (0, _._)("#BroadcastWatch_TooManyViewers"),
                                )
                              : _.SetState(
                                  _.Error,
                                  (0, _._)("#BroadcastWatch_NotAvailable"),
                                );
        }
        async GetClipManifest(_, _) {
          _.SetState(_.Loading, "");
          let _ = {
              clipid: _.m_clipID,
              watchlocation: _,
              sessionid: _._.SESSIONID,
            },
            _ = null;
          try {
            _ = await _().get(_._.CHAT_BASE_URL + "broadcast/getclipdetails", {
              params: _,
              withCredentials: !0,
            });
          } catch (_) {
            console.error(_), console.log("Failed to get clip manifest!");
          }
          if (!_ || 200 != _.status)
            return void _.SetState(
              _.Error,
              (0, _._)("#BroadcastWatch_RequestFailed"),
            );
          let _ = _.data;
          1 == _.success
            ? (_.SetState(_.Ready), (_.m_data = _), this.LoadClip(_))
            : _.SetState(_.Error, (0, _._)("#BroadcastWatch_RequestFailed"));
        }
        async GetVODManifest(_, _) {
          _.SetState(_.Loading, "");
          let _ = await _._.Get().LoadVODForAppID(_.m_nAppIDVOD);
          _
            ? (_.SetState(_.Ready),
              (_.m_manifestURL = _.video_url),
              this.LoadVOD(_))
            : _.SetState(_.Error, (0, _._)("#BroadcastWatch_RequestFailed"));
        }
        async HeartbeatBroadcast(_) {
          let _ = new FormData();
          _.append("steamid", _.m_steamIDBroadcast),
            _.append("broadcastid", _.m_ulBroadcastID),
            _.append("viewertoken", this.m_broadcastSettings.ulViewerToken),
            _().post(_._.CHAT_BASE_URL + "broadcast/heartbeat/", _),
            _.m_schHeartbeatTimeout.Schedule(
              1e3 * _.m_data.heartbeat_interval,
              () => this.HeartbeatBroadcast(_),
            );
        }
        LoadBroadcast(_) {
          _.m_rgVideos.findIndex((_) => _ == this.m_activeVideo) >= 0 &&
            this.m_activeVideo.StartBroadcast(_);
        }
        LoadClip(_) {
          _.m_rgVideos.findIndex((_) => _ == this.m_activeVideo) >= 0 &&
            this.m_activeVideo.StartClip(_);
        }
        LoadVOD(_) {
          _.m_rgVideos.findIndex((_) => _ == this.m_activeVideo) >= 0 &&
            this.m_activeVideo.StartVOD(_);
        }
        BroadcastDownloadFailed(_, _ = !0, __webpack_require__ = _._.Invalid) {
          _.Stop();
          let _ = this.m_mapBroadcasts.get(_.GetBroadcastSteamID());
          _ &&
            _.m_eWatchState != _.Loading &&
            (_.m_bWebRTC && _ && (_.m_bWebRTC = !1),
            __webpack_require__ == _._.StreamGone
              ? this.DelayedGetBroadcastManifest(_, _.GetWatchLocation())
              : this.GetBroadcastManifest(_, _.GetWatchLocation()));
        }
        UserInputClickVideo(_) {
          if (
            this.m_activeVideo != _ &&
            (this.PauseAllVideo(),
            (this.m_activeVideo = _),
            !_.IsBroadcastClip() && !_.IsBroadcastVOD())
          ) {
            let _ = this.m_mapBroadcasts.get(_.GetBroadcastSteamID());
            this.GetBroadcastManifest(_, _.GetWatchLocation());
          }
          _.UserInputClick();
        }
        LoadBroadcastSettings() {
          if (!window.localStorage) return;
          let _ = window.localStorage.getItem("broadcastSettings");
          if (!_) return;
          let _ = JSON.parse(_);
          if (!_) return;
          Object.assign(this.m_broadcastSettings, _);
          let _ = this.m_broadcastSettings;
          (_.bMuted = !!_.bMuted),
            (_.nVolume = _._(_.nVolume, 0, 1)),
            "string" != typeof _.ulViewerToken && (_.ulViewerToken = "0");
        }
        SaveBroadcastSettings() {
          window.localStorage &&
            this.m_schSaveSettings.Schedule(1e3, () => {
              try {
                window.localStorage.setItem(
                  "broadcastSettings",
                  JSON.stringify(this.m_broadcastSettings),
                );
              } catch (_) {}
            });
        }
        SetViewerToken(_) {
          this.m_broadcastSettings.ulViewerToken != _ &&
            ((this.m_broadcastSettings.ulViewerToken = _),
            this.SaveBroadcastSettings());
        }
        GetViewerToken() {
          return this.m_broadcastSettings.ulViewerToken;
        }
        SaveVolumeChange(_, _) {
          (this.m_broadcastSettings.nVolume == _ &&
            this.m_broadcastSettings.bMuted == _) ||
            ((this.m_broadcastSettings.nVolume = _),
            (this.m_broadcastSettings.bMuted = _),
            this.SaveBroadcastSettings());
        }
      }
      (0, _._)([_._], _.prototype, "m_mapBroadcasts", void 0),
        (function (_) {
          (_[(_.Timeline = 1)] = "Timeline"), (_[(_.Minimap = 2)] = "Minimap");
        })(_ || (_ = {}));
      class _ {
        constructor(_, _, _, _) {
          (this.m_elVideo = null),
            (this.m_player = null),
            (this.m_listeners = new _._()),
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
            (this.m_rgMarkers = _._.array()),
            (this.m_rgSegments = _._.array()),
            (this.m_rgRegions = _._.array()),
            (0, _._)(this),
            (this.m_elVideo = _),
            (this.m_nVolume = _),
            (this.m_bMuted = _),
            (this.m_eWatchLocation = _);
        }
        SetBroadcastSteamID(_) {
          this.m_steamIDBroadcast = _;
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
        SetStatsViewIsVisible(_) {
          this.m_player && this.m_player.SetStatsViewIsVisible(_);
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
        SetBroadcastClipID(_) {
          this.m_broadcastClipID = _;
        }
        GetBroadcastClipID() {
          return this.m_broadcastClipID;
        }
        IsBroadcastVOD() {
          return null != this.m_nBroadcastAppIDVOD;
        }
        SetBroadcastAppIDVOD(_) {
          this.m_nBroadcastAppIDVOD = _;
        }
        GetBroadcastAppIDVOD() {
          return this.m_nBroadcastAppIDVOD;
        }
        GetVideoRepresentations() {
          return this.m_player ? this.m_player.GetVideoRepresentations() : [];
        }
        SetVideoRepresentation(_) {
          this.m_player.SetVideoRepresentation(_);
        }
        GetBroadcastInfo() {
          return this.m_BroadcastInfo;
        }
        BHasTimedText() {
          var _;
          return null === (_ = this.m_player) || void 0 === _
            ? void 0
            : _.BHasTimedText();
        }
        BHasPlayer() {
          return Boolean(this.m_player);
        }
        ListSubtitles() {
          return this.m_elVideo.textTracks;
        }
        GetSubtitles() {
          for (let _ = 0; _ < this.m_elVideo.textTracks.length; _++) {
            const _ = this.m_elVideo.textTracks[_];
            if ("showing" === _.mode) return _;
          }
          return null;
        }
        SetSubtitles(_) {
          let _ = _ ? _._[_] : -1;
          this.m_player.SetSubtitles(_);
        }
        SetStartWithSubtitles(_) {
          this.m_bStartWithSubtitles = _;
        }
        GetBroadcastState() {
          return _.GetBroadcastState(this);
        }
        GetBroadcastStateDescription() {
          return _.GetBroadcastStateDescription(this);
        }
        SetOnVideoCallback(_) {
          this.m_fnOnVideoEnd = _;
        }
        InitPlayer() {
          (0, _._)(!this.m_player, "Initialized twice?"),
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
        StartBroadcast(_) {
          if ((this.InitPlayer(), _.m_data.url)) {
            let _ = new _._(this.m_elVideo);
            _.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
              (this.m_player = _),
              this.m_player.PlayMPD(
                _.m_data.url,
                _.m_data.hls_url,
                _.m_strCDNAuthUrlParameters,
              );
          } else
            (this.m_player = new _(this.m_elVideo)),
              this.m_player.PlayWebRTC(
                this.m_steamIDBroadcast,
                _.m_ulViewerToken,
                _.m_data.webrtc_session_id,
                _.m_data.webrtc_turn_server,
                _.m_data.webrtc_offer_sdp,
              );
          this.SetVolume(this.m_nVolume), this.m_player.SetMuted(this.m_bMuted);
          let _ = this.m_player.GetDASHPlayerStats();
          _ &&
            _.SetBroadcasterAndViewerInfo(
              this.m_steamIDBroadcast,
              _._.steamid,
              _.m_ulBroadcastID,
              _.m_ulViewerToken,
              _.m_strCDNAuthUrlParameters,
            ),
            (this.m_BroadcastInfo = _.StartInfo(this.m_steamIDBroadcast));
        }
        StartClip(_) {
          this.InitPlayer();
          let _ = new _._(this.m_elVideo);
          _.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
            (this.m_player = _),
            this.m_player.PlayMPD(_.m_data.clip_url),
            this.SetVolume(this.m_nVolume),
            this.m_player.SetMuted(this.m_bMuted);
        }
        StartVOD(_) {
          this.InitPlayer();
          let _ = new _._(this.m_elVideo);
          _.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
            (this.m_player = _),
            _._.logged_in &&
              _.m_nAppIDVOD &&
              _.SetBookmarkAdapter(new _._(_.m_nAppIDVOD)),
            this.m_player.PlayMPD(_.m_manifestURL),
            this.SetVolume(this.m_nVolume),
            this.m_player.SetMuted(this.m_bMuted);
        }
        Stop() {
          this.m_listeners.Unregister(),
            this.m_BroadcastInfo &&
              (_.StopInfo(this.m_BroadcastInfo), (this.m_BroadcastInfo = null)),
            (this.m_gameDataParser = null),
            this.m_player && (this.m_player.Close(), (this.m_player = null));
        }
        TogglePlayPause() {
          !this.m_player || this.m_player.IsPaused()
            ? this.Play()
            : this.Pause();
        }
        Play() {
          const _ = this.GetBroadcastState();
          _ == _.None || this.IsBroadcastClip()
            ? _.StartVideo(this)
            : _ == _.Ready &&
              (_.SetActiveVideo(this),
              this.m_player
                ? this.m_player.Play()
                : this.IsBroadcastVOD()
                  ? this.StartVOD(_.GetBroadcastVOD(this.m_nBroadcastAppIDVOD))
                  : this.StartBroadcast(
                      _.GetBroadcast(this.m_steamIDBroadcast),
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
        JumpTime(_) {
          this.m_player.JumpTime(_);
        }
        Seek(_) {
          var _;
          null === (_ = this.m_player) || void 0 === _ || _.Seek(_);
        }
        SeekAndPlay(_) {
          this.m_player.SeekAndPlay(_);
        }
        JumpToLiveEdge() {
          this.m_player.IsLiveContent()
            ? this.SeekAndPlay(this.m_player.GetBufferedLiveEdgeTime())
            : this.SeekAndPlay(this.m_player.GetAvailableVideoStartTime());
        }
        SetVolume(_) {
          this.m_player && this.m_player.SetVolume(_),
            (this.m_nVolume = this.m_player.GetVolume()),
            _.SaveVolumeChange(_, this.m_bMuted);
        }
        SetMute(_) {
          this.m_player && this.m_player.SetMuted(_),
            (this.m_bMuted = _),
            _.SaveVolumeChange(this.m_nVolume, _);
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
                  this.m_nVideoEndPos - this.m_nPlaybackTime < _._))
            ) {
              const _ = 400;
              this.m_videoEndingTimer = window.setTimeout(() => {
                this.m_fnOnVideoEnd();
              }, _);
            }
            (this.m_bBuffering = this.m_player.IsBuffering()),
              (this.m_bOnLiveEdge =
                this.m_nVideoEndPos - this.m_nPlaybackTime < _._),
              this.m_player.IsPaused() && (this.m_bOnLiveEdge = !1);
          }
        }
        OnVolumeUpdated() {
          (this.m_nVolume = this.m_player.GetVolume()),
            (this.m_bMuted = this.m_player.IsMuted());
        }
        OnGameDataUpdate(_) {
          let _ = _.detail;
          if (!_ || "object" != typeof _.gamedata) return;
          (this.m_gameDataParser &&
            this.m_gameDataParser.GetAppID() == _.gamedata.__appid) ||
            (this.m_gameDataParser = new _(_.gamedata.__appid));
          const _ = this.m_player.GetLiveContentStartTime().getTime();
          if ("timelinemarkers" in _.gamedata) {
            const _ = this.m_gameDataParser.UpdateMarkers(
              _.gamedata.__timelinemarkers,
              _,
            );
            _ &&
              (this.m_rgMarkers.replace(_.rgMarkers || []),
              this.m_rgSegments.replace(_.rgSegments || []));
            const _ = this.m_gameDataParser.UpdateRegions(_.gamedata.__regions);
            _ && this.m_rgRegions.replace(_);
          } else
            "soundtrack" in _.gamedata &&
              this.m_gameDataParser.UpdateSoundtrack(
                this.m_steamIDBroadcast,
                _.gamedata.soundtrack,
              );
        }
        OnDownloadFailed(_) {
          let _ = _.detail || _._.Invalid;
          _.BroadcastDownloadFailed(this, !0, _);
        }
        OnWebRTCRetry() {
          _.BroadcastDownloadFailed(this, !1);
        }
        OnWebRTCFailed() {
          _.BroadcastDownloadFailed(this, !0);
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
        GetTimeAtMousePosition(_, _, _, _) {
          let _ = _._(_, _.left, _.right, _, _);
          return Math.floor(_ + 0.5);
        }
        GetPercentOffsetFromTime(_, _) {
          let _ = 0,
            _ = 0;
          return (
            _ == _.Timeline
              ? ((_ = this.m_nVideoEndPos), (_ = _ - this.m_nTimelineDuration))
              : ((_ = 0), (_ = 0)),
            _._(_, _, _, 0, 100)
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
      (0, _._)([_._], _.prototype, "m_player", void 0),
        (0, _._)([_._], _.prototype, "m_bPaused", void 0),
        (0, _._)([_._], _.prototype, "m_nPlaybackTime", void 0),
        (0, _._)([_._], _.prototype, "m_bBuffering", void 0),
        (0, _._)([_._], _.prototype, "m_bOnLiveEdge", void 0),
        (0, _._)([_._], _.prototype, "m_nVolume", void 0),
        (0, _._)([_._], _.prototype, "m_bMuted", void 0),
        (0, _._)([_._], _.prototype, "m_bUserInputNeeded", void 0),
        (0, _._)([_._], _.prototype, "m_bIsReplay", void 0),
        (0, _._)([_._], _.prototype, "m_nTimelineDuration", void 0),
        (0, _._)([_._], _.prototype, "m_nVideoStartPos", void 0),
        (0, _._)([_._], _.prototype, "m_nVideoEndPos", void 0),
        (0, _._)([_._], _.prototype, "m_editorStartTime", void 0),
        (0, _._)([_._], _.prototype, "m_editorEndTime", void 0),
        (0, _._)([_._.bound], _.prototype, "StartBroadcast", null),
        (0, _._)([_._.bound], _.prototype, "StartClip", null),
        (0, _._)([_._.bound], _.prototype, "StartVOD", null),
        (0, _._)([_._], _.prototype, "OnVideoPlaying", null),
        (0, _._)([_._], _.prototype, "OnVideoPause", null),
        (0, _._)([_._.bound], _.prototype, "OnVideoTimeUpdate", null),
        (0, _._)([_._], _.prototype, "OnVolumeUpdated", null),
        (0, _._)([_._.bound], _.prototype, "OnGameDataUpdate", null),
        (0, _._)([_._], _.prototype, "OnDownloadFailed", null),
        (0, _._)([_._], _.prototype, "OnWebRTCRetry", null),
        (0, _._)([_._], _.prototype, "OnWebRTCFailed", null),
        (0, _._)([_._], _.prototype, "OnUserInputNeeded", null);
      const _ = new _();
      window.uiBroadcastWatchStore = _;
    },
  },
]);
