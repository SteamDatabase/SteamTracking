(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [1853],
  {
    chunkid: (module) => {
      module.exports = {
        defaultColor: "#aaa",
        blueish: "#64badc",
        Dummy: "_3d7vgH8CvMxmw3Gsrcn-Wr",
        RecordingIconContainer: "_2aEWndjrPefz-3pWqIYij7",
        Outer: "_1Zy09xDt2xoxeYHQMAYtYl",
        Inner: "B70ft0fskXDtxOVqwbNFW",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      const _ = new (__webpack_require__("chunkid")._)("video"),
        _ = (_.Info, _.Debug),
        _ = _.Error;
      _.Warning;
      function _(_) {
        let _ = Math.floor(_ / 3600),
          _ = Math.floor(_ / 60) % 60,
          _ = Math.floor(_) % 60,
          _ = _.toString();
        _ < 10 && (_ = "0" + _);
        let _ = __webpack_require__.toString();
        return (
          _ < 10 && _ > 0 && (_ = "0" + _), (_ > 0 ? _ + ":" : "") + _ + ":" + _
        );
      }
      function _() {
        let _ = !1;
        try {
          _ = MediaSource.isTypeSupported(
            'video/mp4;codecs="avc1.4d4032,mp4a.40.2"',
          );
        } catch (_) {}
        return _;
      }
      function _() {
        let _ = document
          .createElement("video")
          .canPlayType(
            'application/vnd.apple.mpegurl;codecs="avc1.64001f,mp4a.40.02"',
          );
        return "probably" === _ || "maybe" === _;
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _,
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _) {
        let _ = _.getElementsByTagName("MPD");
        return _ && 1 == _.length ? _[0] : null;
      }
      function _(_, _) {
        for (let _ = 0; _ < _.children.length; _++) {
          let _ = _.children[_];
          if (_.tagName == _) return _;
        }
        return null;
      }
      function _(_, _) {
        let _ = _.getAttribute(_);
        if (!_) return null;
        let _ = new Date(_);
        return "[object Date]" === Object.prototype.toString.call(_) ? _ : null;
      }
      function _(_, _) {
        let _ = _.getAttribute(_);
        if (!_) return null;
        let _ = 0,
          _ = __webpack_require__.match(/(\d*)H/);
        return (
          _ && (_ += 60 * parseFloat(_[1]) * 60),
          (_ = __webpack_require__.match(/(\d*)M/)),
          _ && (_ += 60 * parseFloat(_[1])),
          (_ = __webpack_require__.match(/(\d*\.?\d*)S/)),
          _ && (_ += parseFloat(_[1])),
          _
        );
      }
      function _(_, _) {
        let _ = _.getAttribute(_);
        return _
          ? ((_ = __webpack_require__.toLowerCase()),
            "true" == _ || ("false" != _ && null))
          : null;
      }
      function _(_, _) {
        let _ = _.getAttribute(_);
        return _ ? parseInt(_) : null;
      }
      function _(_, _) {
        let _ = _.getAttribute(_);
        return _ || "";
      }
      function _(_, _, _) {
        let _ = {
          nTimeScale: _(_, "timescale"),
          nDuration: _(_, "duration"),
          nStartNumber: _(_, "startNumber"),
          strMedia: _(_, "media"),
          strInitialization: _(_, "initialization"),
        };
        return (
          _.bContainsThumbnails &&
            ((void 0 !== _.nTimeScale && null !== _.nTimeScale) ||
              (_.nTimeScale = 1)),
          _.nTimeScale &&
          _.nDuration &&
          _.nStartNumber &&
          _.strMedia &&
          (_.bContainsThumbnails || _.strInitialization)
            ? ((_.strMedia = _(_.strMedia, _)),
              (_.strInitialization = _(_.strInitialization, _)),
              _)
            : null
        );
      }
      function _(_, _, _) {
        return (_ = (_ = (_ = _.replace("$RepresentationID$", _)).replace(
          "$Number$",
          __webpack_require__.toString(),
        )).replace(
          /\$Number%(\d+)d\$/g,
          (_, _) => (
            (_ = Number.parseInt(_)),
            (Array(_).join("0") + __webpack_require__.toString()).slice(-_)
          ),
        ));
      }
      function _(_) {
        return (0, _._)(_);
      }
      function _(_, _) {
        let _ = _;
        __webpack_require__.endsWith("/") || (_ += "/");
        let _ = _.startsWith("/") ? 1 : 0;
        return _ + _.substring(_);
      }
      function _(_, _) {
        return _ && !_(_) && _(_) ? _(_, _) : _;
      }
      function _(_) {
        return (
          0 == _.rgRoles.length || _.rgRoles.findIndex((_) => "main" == _) >= 0
        );
      }
      function _(_) {
        if (!_) return 0;
        let _ = _.segmentTemplate;
        return 1e3 == _.nTimeScale
          ? _.nDuration
          : (_.nDuration / _.nTimeScale) * 1e3;
      }
      function _(_, _, _) {
        _ -= 1e3 * _.GetStartTime();
        let _ = _(_),
          _ = _(_, _, _);
        return Math.floor(_ / _) + _.segmentTemplate.nStartNumber;
      }
      function _(_, _) {
        return (_ - _.segmentTemplate.nStartNumber) * (_(_) / 1e3);
      }
      function _(_, _, _) {
        return _ + ((1e3 * _.GetStartTime()) % _);
      }
      function _(_) {
        return _(_.segmentTemplate.strInitialization, _.strID, 0);
      }
      class _ {
        m_strType = void 0;
        m_nMinBufferTime = 0;
        m_dtAvailabilityStartTime = null;
        m_dtPublishTime = null;
        m_nMinimumUpdatePeriod = 0;
        m_nTimeShiftBufferDepth = 0;
        m_nMediaPresentationDuration = 0;
        m_strBaseURL = "";
        m_strStatsLink = "";
        m_strStalledLink = "";
        m_strEventLogLink = "";
        m_rgPeriods = null;
        m_tsLiveContentStart = 0;
        GetType() {
          return this.m_strType;
        }
        GetMinimumUpdatePeriod() {
          return this.m_nMinimumUpdatePeriod;
        }
        GetAvailabilityStartTime() {
          return this.m_dtAvailabilityStartTime;
        }
        GetPeriods() {
          return this.m_rgPeriods;
        }
        GetBaseURL() {
          return this.m_strBaseURL;
        }
        GetTimeShiftBufferDepth() {
          return this.m_nTimeShiftBufferDepth;
        }
        GetMinBufferTime() {
          return this.m_nMinBufferTime;
        }
        GetTimedTextAdaptionSet(_) {
          return _ < 0 || _ > this.m_rgPeriods.length
            ? []
            : this.m_rgPeriods[_].rgAdaptationSets.filter(
                (_) => _.bIsTimedText,
              );
        }
        IsLiveContent() {
          return "dynamic" == this.GetType();
        }
        GetAdaptationByTrackID(_) {
          if (!this.m_rgPeriods || 0 == this.m_rgPeriods.length) return null;
          let _ = this.m_rgPeriods[0];
          for (let _ of _.rgAdaptationSets) if (_ == _.strID) return _;
          return null;
        }
        GetMainVideoAdaption() {
          let _ = this.m_rgPeriods[0];
          for (let _ of _.rgAdaptationSets)
            if (_(_) && _.bContainsVideo) return _;
          return null;
        }
        GetMainAudioAdaption() {
          let _ = this.m_rgPeriods[0];
          for (let _ of _.rgAdaptationSets)
            if (_(_) && _.bContainsAudio) return _;
          return null;
        }
        GetThumbnailAdaptation() {
          let _ = this.m_rgPeriods[0];
          for (let _ of _.rgAdaptationSets) if (_.bContainsThumbnails) return _;
          return null;
        }
        GetThumbnailDurationMS() {
          let _ = this.GetThumbnailAdaptation();
          if (!_ || 0 == _.rgRepresentations.length) return 0;
          let _ = _.rgRepresentations[0];
          return _(_) / (_.nTileWidthCount * _.nTileHeightCount);
        }
        GetStartTime() {
          return !this.IsLiveContent() && this.m_rgPeriods.length > 0
            ? this.m_rgPeriods[0].nStart
            : 0;
        }
        GetEndTime() {
          if (!this.IsLiveContent()) {
            if (this.m_rgPeriods.length > 0 && this.m_rgPeriods[0].nDuration)
              return this.GetStartTime() + this.m_rgPeriods[0].nDuration;
            if (this.m_nMediaPresentationDuration > 0)
              return this.GetStartTime() + this.m_nMediaPresentationDuration;
          }
          return Number.MAX_VALUE;
        }
        GetLowestRepresentation(_) {
          let _ = this.GetAdaptationByTrackID(_);
          if (!_) return null;
          let _ = _.rgRepresentations[0];
          for (let _ of _.rgRepresentations)
            _.nBandwidth < _.nBandwidth && (_ = _);
          return _;
        }
        GetStatsLink() {
          return this.m_strStatsLink;
        }
        GetStalledLink() {
          return this.m_strStalledLink;
        }
        GetEventLink() {
          return this.m_strEventLogLink;
        }
        GetThumbnail(_) {
          let _ = this.GetThumbnailAdaptation();
          if (!_ || 0 == _.rgRepresentations.length) return null;
          let _ = _.rgRepresentations[0],
            _ = _(this, _, _),
            _ = _(_),
            _ = _ * (_ - _.segmentTemplate.nStartNumber),
            _ = _ / (_.nTileWidthCount * _.nTileHeightCount),
            _ = Math.floor((_ - _) / _),
            _ = Math.floor(_ / _.nTileWidthCount),
            _ = _ % _.nTileWidthCount;
          if (_ + 1 > _.nTileHeightCount)
            return (
              (0, _._)(
                "Asking for a thumbnail that is off the end of the tile sheet",
              ),
              null
            );
          let _ = _.nWidth / _.nTileWidthCount,
            _ = _.nHeight / _.nTileHeightCount;
          return {
            strTileURL: _(_.segmentTemplate.strMedia, _.strID, _),
            _: _ * _,
            _: _ * _,
            nThumbnailWidth: _,
            nThumbnailHeight: _,
            nImageWidth: _.nWidth,
            nImageHeight: _.nHeight,
          };
        }
        StartLiveContentNow(_) {
          this.m_tsLiveContentStart = performance.now() - _;
        }
        GetDurationSinceStarted() {
          return performance.now() - this.m_tsLiveContentStart;
        }
        ParseRepresentation(_, _, _, _, _) {
          let _ = {
            strID: _(_, "id"),
            strMimeType: _(_, "mimeType"),
            strCodecs: _(_, "codecs"),
            nBandwidth: _(_, "bandwidth"),
            segmentTemplate: null,
          };
          !_.strMimeType && _ && (_.strMimeType = _);
          let _ = _(_, "SegmentTemplate");
          if (_) {
            let _ = _(_, _, _);
            _ && (_.segmentTemplate = _);
          } else
            _.segmentTemplate = {
              ..._,
            };
          if (!_.segmentTemplate)
            return (
              (0, _._)("MPD - No segment template for representation"), null
            );
          if (_.bContainsVideo) {
            if (
              ((_.nWidth = _(_, "width")),
              (_.nHeight = _(_, "height")),
              (_.nFrameRate = _(_, "frameRate")),
              (0, _._)(
                `representation: ${_.nWidth}w x ${_.nHeight}h x ${_.nFrameRate} fps`,
              ),
              !(_.strID && _.strMimeType && _.strCodecs && _.nBandwidth))
            )
              return (0, _._)("MPD - Representation Video Data Missing"), null;
          } else if (_.bContainsAudio) {
            _.nAudioSamplingRate = _(_, "audioSamplingRate");
            let _ = _(_, "AudioChannelConfiguration");
            if (
              (_ && (_.nAudioChannels = _(_, "value")),
              _.nAudioChannels || (_.nAudioChannels = 2),
              !(
                _.strID &&
                _.strMimeType &&
                _.strCodecs &&
                _.nAudioSamplingRate &&
                _.nAudioChannels
              ))
            )
              return (0, _._)("MPD - Representation Audio Data Missing"), null;
          } else if (_.bContainsThumbnails) {
            if (
              ((_ = _.strMimeType),
              !["image/jpeg", "image/jpg", "image/avif", "image/webp"].includes(
                _,
              ))
            )
              return (
                (0, _._)(
                  "MPD - Representation Thumbnail MimeType not supported",
                  _.strMimeType,
                ),
                null
              );
            (_.nWidth = _(_, "width")), (_.nHeight = _(_, "height"));
            let _ = _(_, "EssentialProperty");
            if (!_)
              return (
                (0, _._)(
                  "MPD - Representation Thumbnail missing EssentialProperty",
                ),
                null
              );
            let _ = _(_, "schemeIdUri");
            if (!_ || "http://dashif.org/guidelines/thumbnail_tile" != _)
              return (
                (0, _._)("MPD - Representation Thumbnail has invalid schema"),
                null
              );
            let _ = (_(_, "value") || "").split("x");
            if (2 != _.length || !_._(_[0]) || !_._(_[1]))
              return (
                (0, _._)(
                  "MPD - Representation Thumbnail has invalid tile property",
                ),
                null
              );
            (_.nTileWidthCount = parseInt(_[0])),
              (_.nTileHeightCount = parseInt(_[1]));
          }
          var _;
          return _;
        }
        ParseAdaptationSetVTT(_, _) {
          _.rgRoles.push("subtitle");
          let _ = _.getElementsByTagName("Role");
          for (let _ = 0; _ < _.length; _++) {
            let _ = _(_[_], "value");
            _ && "subtitle" != _ && _.rgRoles.push(_);
          }
          let _ = _.getElementsByTagName("Representation");
          for (let _ = 0; _ < _.length; _++) {
            let _ = _[_],
              _ = {
                strID: _(_, "id"),
                nBandwidth: _(_, "bandwidth"),
                strClosedCaptionFile: "",
              },
              _ = _(_, "BaseURL"),
              _ = _ ? _.textContent : "";
            if (!_) {
              (0, _._)(
                "Closed Caption File has no BaseURL for (id): " + _.strID,
              );
              continue;
            }
            (_.strClosedCaptionFile = _(_, _.strID, 0)),
              _.strClosedCaptionFile.startsWith("http") ||
                (_.strClosedCaptionFile =
                  this.m_strBaseURL + _.strClosedCaptionFile);
            const _ = (0, _._)();
            if ("community" == _) {
              const _ = new URL(_.strClosedCaptionFile).pathname.split(
                "/video/",
              )[1];
              _.strClosedCaptionFile = _
                ? _._.COMMUNITY_BASE_URL + "vtt/video/" + _
                : null;
            } else if ("store" == _ || "dev" == _._.WEB_UNIVERSE) {
              const _ = new URL(_.strClosedCaptionFile).pathname.split(
                "/video/",
              )[1];
              _.strClosedCaptionFile = _
                ? _._.STORE_BASE_URL + "vtt/video/" + _
                : null;
            }
            _.strClosedCaptionFile && _.rgRepresentations.push(_);
          }
        }
        BParse(_, _) {
          let _ = new DOMParser().parseFromString(_, "application/xml"),
            _ = _(_);
          if (!_) return !1;
          let _ = _.getAttribute("type");
          if (
            ((this.m_nMinBufferTime = _(_, "minBufferTime")), "dynamic" == _)
          ) {
            if (
              ((this.m_strType = "dynamic"),
              (this.m_dtAvailabilityStartTime = _(_, "availabilityStartTime")),
              (this.m_dtPublishTime = _(_, "publishTime")),
              (this.m_nMinimumUpdatePeriod = _(_, "minimumUpdatePeriod")),
              (this.m_nTimeShiftBufferDepth =
                _(_, "timeShiftBufferDepth") || 0),
              !this.m_dtAvailabilityStartTime ||
                !this.m_dtPublishTime ||
                !this.m_nMinimumUpdatePeriod ||
                null === this.m_nMinBufferTime)
            )
              return !1;
          } else {
            if ("static" != _) return (0, _._)("MPD - Unknown type"), !1;
            if (
              ((this.m_strType = "static"),
              (this.m_nMediaPresentationDuration = _(
                _,
                "mediaPresentationDuration",
              )),
              !this.m_nMinBufferTime || !this.m_nMediaPresentationDuration)
            )
              return (
                (0, _._)("MPD - Missing Buffer Time or Presentation Duration"),
                !1
              );
          }
          let _ = _(_, "BaseURL");
          this.m_strBaseURL = _
            ? _.textContent
            : (function (_) {
                if (!_(_)) return "";
                let _ = new URL(_),
                  _ = _.pathname;
                return (
                  (__webpack_require__.indexOf(".mpd") >= 0 ||
                    __webpack_require__.endsWith("/")) &&
                    (_ = __webpack_require__.substring(
                      0,
                      __webpack_require__.lastIndexOf("/"),
                    )),
                  _(_.origin, _) + "/"
                );
              })(_);
          let _ = _(_, "Analytics");
          _ &&
            ((this.m_strStatsLink = _(_, "statslink")),
            (this.m_strStalledLink = _(_, "stalledlink")),
            (this.m_strEventLogLink = _(_, "eventlink")));
          let _ = __webpack_require__.getElementsByTagName("Period");
          if (0 == _.length) return !1;
          let _ = _[0],
            _ = {
              strID: _(_, "id"),
              nStart: _(_, "start"),
              nDuration: _(_, "duration"),
              rgAdaptationSets: [],
            };
          if (!_.strID || null === _.nStart)
            return (0, _._)("MPD - Missing Period Information."), !1;
          (this.m_rgPeriods = []), this.m_rgPeriods.push(_);
          let _ = _.getElementsByTagName("AdaptationSet");
          for (let _ = 0; _ < _.length; _++) {
            let _ = _[_],
              _ = _(_, "description"),
              _ = _(_, "lang"),
              _ = {
                bSegmentAlignment: _(_, "segmentAlignment"),
                bIsTimedText: "text/vtt" == _(_, "mimeType"),
                strLanguage: _(_, "lang"),
                bContainsVideo: !1,
                bContainsAudio: !1,
                bContainsThumbnails: !1,
                strDescription: _ || _,
                strForceSub: _(_, "forceSub"),
                strID: _(_, "id"),
                rgRoles: [],
                rgRepresentations: [],
              };
            _.rgAdaptationSets.push(_);
            let _ = _.getElementsByTagName("ContentComponent");
            for (let _ = 0; _ < _.length; _++) {
              let _ = _(_[_], "contentType");
              "video" == _ && (_.bContainsVideo = !0),
                "audio" == _ && (_.bContainsAudio = !0),
                "image" == _ && (_.bContainsThumbnails = !0);
            }
            if (0 == _.length) {
              let _ = _(_, "contentType");
              "video" == _ && (_.bContainsVideo = !0),
                "audio" == _ && (_.bContainsAudio = !0),
                "image" == _ && (_.bContainsThumbnails = !0);
            }
            if (_.bIsTimedText) {
              this.ParseAdaptationSetVTT(_, _);
              continue;
            }
            if (!_.bContainsThumbnails && !_.bSegmentAlignment)
              return (
                (0, _._)(
                  "MPD - Only segment aligned dash manifests is supported",
                ),
                !1
              );
            let _ = _.getElementsByTagName("Role");
            for (let _ = 0; _ < _.length; _++) {
              let _ = _(_[_], "value");
              _ && _.rgRoles.push(_);
            }
            let _ = null,
              _ = _(_, "SegmentTemplate");
            if (_) {
              let _ = _(_, _, this.m_strBaseURL);
              if (!_)
                return (
                  (0, _._)("MPD - Failed to parse found Adaptation template"),
                  !1
                );
              _ = _;
            }
            let _ = _(_, "mimeType"),
              _ = _.getElementsByTagName("Representation");
            for (let _ = 0; _ < _.length; _++) {
              let _ = _[_],
                _ = this.ParseRepresentation(_, _, _, this.m_strBaseURL, _);
              if (!_) return !1;
              _.rgRepresentations.push(_);
            }
          }
          return !0;
        }
        BUpdate(_) {
          let _ = new DOMParser().parseFromString(_, "application/xml"),
            _ = _(_);
          if (!_) return !1;
          if (this.IsLiveContent()) {
            switch (_(_, "type")) {
              case "dynamic":
                break;
              case "static":
                (0, _._)("Converting MPD from dynamic to static"),
                  (this.m_strType = "static"),
                  (this.m_nMediaPresentationDuration = _(
                    _,
                    "mediaPresentationDuration",
                  )),
                  (this.m_nMinBufferTime = _(_, "minBufferTime")),
                  (this.m_dtAvailabilityStartTime = null),
                  (this.m_dtPublishTime = null);
            }
            let _ = _.getElementsByTagName("Period");
            if (0 == _.length) return !1;
            let _ = _[0].getElementsByTagName("AdaptationSet");
            for (let _ = 0; _ < _.length; _++) {
              let _ = _[_],
                _ = _(_, "id"),
                _ = this.GetAdaptationByTrackID(_);
              if (_) {
                let _ = null,
                  _ = _(_, "SegmentTemplate");
                if (_) {
                  let _ = _(_, _, this.m_strBaseURL);
                  if (!_)
                    return (
                      (0, _._)(
                        "MPD - Failed to parse found Adaptation template",
                      ),
                      !1
                    );
                  _ = _;
                }
                let _ = _(_, "mimeType"),
                  _ = _.getElementsByTagName("Representation");
                if (_.length > 1)
                  for (let _ = 0; _ < _.length; _++) {
                    let _ = _[_],
                      _ = this.ParseRepresentation(
                        _,
                        _,
                        _,
                        this.m_strBaseURL,
                        _,
                      );
                    if (!_)
                      return (
                        (0, _._)("MPD - Failed to parse representation"), !1
                      );
                    let _ = null;
                    for (let _ of _.rgRepresentations)
                      if (_.strID == _.strID) {
                        _ = _;
                        break;
                      }
                    _
                      ? (_.segmentTemplate.strMedia =
                          _.segmentTemplate.strMedia)
                      : _.rgRepresentations.push(_);
                  }
                break;
              }
            }
          }
          let _ = _(_, "Analytics");
          return (
            _ &&
              ((this.m_strStatsLink = _(_, "statslink")),
              (this.m_strStalledLink = _(_, "stalledlink")),
              (this.m_strEventLogLink = _(_, "eventlink"))),
            !0
          );
        }
      }
      !(function (_) {
        (_[(_.None = 0)] = "None"),
          (_[(_.Append = 1)] = "Append"),
          (_[(_.Remove = 2)] = "Remove");
      })(_ || (_ = {}));
      class _ {
        m_eBufferUpdate = _.None;
        m_sourceBuffer = null;
        Attach(_) {
          (this.m_sourceBuffer = _), (this.m_eBufferUpdate = _.None);
        }
        Detach() {
          (this.m_sourceBuffer = null), (this.m_eBufferUpdate = _.None);
        }
        HasAttachedBuffer() {
          return null != this.m_sourceBuffer;
        }
        GetBufferState() {
          return this.m_eBufferUpdate;
        }
        GetSourceBufferTimeRanges() {
          return this.m_sourceBuffer.buffered;
        }
        GetBufferedStartSec() {
          return this.m_sourceBuffer &&
            this.m_sourceBuffer.buffered &&
            0 != this.m_sourceBuffer.buffered.length
            ? this.m_sourceBuffer.buffered.start(0)
            : 0;
        }
        GetBufferedEndSec() {
          return this.m_sourceBuffer &&
            this.m_sourceBuffer.buffered &&
            0 != this.m_sourceBuffer.buffered.length
            ? this.m_sourceBuffer.buffered.end(0)
            : 0;
        }
        BufferUpdateComplete() {
          this.m_eBufferUpdate = _.None;
        }
        MarkAsRemoving() {
          this.m_eBufferUpdate = _.Remove;
        }
        GetAmountBufferedInPlayerMS(_) {
          if (!this.m_sourceBuffer) return 0;
          let _ = this.m_sourceBuffer.buffered;
          if (0 == _.length) return 0;
          _ < _.start(0) && (_ = _.start(0)), _ > _.end(0) && (_ = _.end(0));
          let _ = _.end(0) - _;
          return Math.floor(1e3 * _);
        }
        AppendBuffer(_) {
          (0, _._)(null != this.m_sourceBuffer, "Invalid source buffer"),
            (0, _._)(
              this.m_eBufferUpdate == _.None,
              "Appending to source buffer with operation in flight",
            );
          try {
            this.m_sourceBuffer.appendBuffer(_),
              (this.m_eBufferUpdate = _.Append);
          } catch (_) {
            return _;
          }
          return null;
        }
        Remove(_, _) {
          (0, _._)(null != this.m_sourceBuffer, "Invalid source buffer"),
            (0, _._)(
              this.m_eBufferUpdate == _.None,
              "Removing from source buffer with operation in flight",
            ),
            this.m_sourceBuffer.remove(_, _),
            (this.m_eBufferUpdate = _.Remove);
        }
        RemoveAll() {
          let _ = 0;
          if (this.m_sourceBuffer) {
            let _ = this.m_sourceBuffer.buffered;
            for (let _ = 0; _ < _.length; _++) _ < _.end(_) && (_ = _.end(_));
          }
          return (
            0 != _ &&
            (this.m_sourceBuffer.remove(0, _ + 1),
            (this.m_eBufferUpdate = _.Remove),
            !0)
          );
        }
      }
      class _ {
        m_callbacks = null;
        m_mpd = null;
        m_adaptation = null;
        m_mediaSource = null;
        m_sourceBuffer = new _();
        m_nTrackBufferMS = 0;
        m_representation = null;
        m_rgBufferedSegments = [];
        m_mapInitSegments = new Map();
        m_strLastFedInitSegmentRep = "";
        m_nNextSegment = 0;
        m_bRemoveBufferState = !1;
        m_bSeekInProgress = !1;
        m_bSourceBufferQuotaExceeded = !1;
        m_schNextDownload = new _._();
        m_xhrDownload = null;
        m_listeners = new _._();
        m_rgDownloadLog = [];
        m_nCurDownloadProgress = 0;
        m_nCurDownloadBitrate = 0;
        m_stats;
        m_nNumConsecutiveDownloadGones = 0;
        constructor(_, _, _, _) {
          (this.m_callbacks = _),
            (this.m_mpd = _),
            (this.m_adaptation = _),
            (this.m_stats = _);
        }
        SetMediaSource(_) {
          this.m_mediaSource = _;
        }
        SetBufferMS(_) {
          this.m_nTrackBufferMS = _;
        }
        GetRepresentationsCount() {
          return this.m_adaptation.rgRepresentations.length;
        }
        GetRepresentationByID(_) {
          for (let _ of this.m_adaptation.rgRepresentations)
            if (_.strID == _) return _;
          return null;
        }
        GetNumConsecutiveDownloadGones() {
          return this.m_nNumConsecutiveDownloadGones;
        }
        ContainsVideo() {
          return this.m_adaptation.bContainsVideo;
        }
        ContainsAudio() {
          return this.m_adaptation.bContainsAudio;
        }
        GetAdaptation() {
          return this.m_adaptation;
        }
        GetBandwidthRequired() {
          return this.m_representation.nBandwidth;
        }
        GetCurrentSegmentDurationMS() {
          return _(this.m_representation);
        }
        GetCurrentSegmentInitializationURL() {
          return _(this.m_representation);
        }
        BIsCurrentRepresentation(_) {
          return _ && _.strID == this.m_representation.strID;
        }
        GetSourceBufferTimeRanges() {
          return this.m_sourceBuffer.GetSourceBufferTimeRanges();
        }
        GetEstimatedAudioRate() {
          return this.m_representation && this.ContainsAudio()
            ? this.m_representation.nBandwidth
            : 0;
        }
        GetDebugName() {
          let _ = [];
          return (
            this.ContainsVideo()
              ? _.push("Video")
              : this.ContainsAudio() && _.push("Audio"),
            _.join(" & ") +
              ":" +
              this.m_callbacks.GetCurrentPlayTime().toFixed(3).toString()
          );
        }
        GetMaxSegment() {
          return (function (_, _) {
            if (_.IsLiveContent()) return Number.MAX_VALUE;
            let _ = 1e3 * (_.GetEndTime() - _.GetStartTime()),
              _ = _(_),
              _ = _(_, _, _);
            return Math.ceil(_ / _) + _.segmentTemplate.nStartNumber - 1;
          })(this.m_mpd, this.m_representation);
        }
        GetBufferedStart() {
          return this.m_sourceBuffer.GetBufferedStartSec();
        }
        GetBufferedEnd() {
          let _ = this.m_rgBufferedSegments.length;
          if (0 == _) return 0;
          let _ = this.m_rgBufferedSegments[_ - 1];
          return _.nStartPTS + _.nDurationMS / 1e3;
        }
        GetAmountBufferedMS(_) {
          let _ = this.m_sourceBuffer.GetAmountBufferedInPlayerMS(_);
          for (let _ of this.m_rgBufferedSegments)
            !_.data || _.nStartPTS < _ || (_ += _.nDurationMS);
          return _;
        }
        IsSegmentBuffered(_) {
          return (
            this.m_rgBufferedSegments.findIndex((_) => _.nSegmentIndex == _) >=
            0
          );
        }
        ChangeRepresentation(_, _) {
          if (!(this.m_adaptation.rgRepresentations.indexOf(_) < 0)) {
            if (this.m_representation != _) {
              if (this.ContainsVideo()) {
                let _ = _.nHeight || 0,
                  _ = Math.ceil(_.nBandwidth / 1e3);
                (0, _._)(
                  `${this.GetDebugName()} changing representation to ${_}p at ${_}KB for segment ${this.m_nNextSegment}`,
                );
              }
              (this.m_representation = _),
                this.m_stats.SetRepresentation(_),
                this.CreateSourceBuffferIfNeeded(_);
            }
            _ && this.UpgradeBufferedVideo();
          }
        }
        CreateSourceBuffferIfNeeded(_) {
          if (this.m_sourceBuffer.HasAttachedBuffer()) return;
          const _ = _.strMimeType + ";codecs=" + _.strCodecs;
          try {
            let _ = this.m_mediaSource.addSourceBuffer(_);
            this.m_sourceBuffer.Attach(_),
              (0, _._)(_),
              this.m_listeners.AddEventListener(
                _,
                "updateend",
                this.OnSourceBufferUpdateEnd,
              ),
              this.m_listeners.AddEventListener(
                _,
                "error",
                this.OnSourceBufferError,
              ),
              this.m_listeners.AddEventListener(
                _,
                "abort",
                this.OnSourceBufferAbort,
              );
          } catch (_) {
            if (!(_ instanceof DOMException && "NotSupportedError" === _.name))
              throw _;
            this.OnMediaUnsupportedError(_);
          }
        }
        Close() {
          this.m_listeners.Unregister(),
            this.m_sourceBuffer.Detach(),
            this.ForceStopDownloads(),
            this.m_mapInitSegments.clear(),
            (this.m_strLastFedInitSegmentRep = ""),
            (this.m_bSourceBufferQuotaExceeded = !1),
            (this.m_bRemoveBufferState = !1),
            (this.m_callbacks = null),
            (this.m_mpd = null),
            (this.m_adaptation = null),
            (this.m_mediaSource = null),
            (this.m_nTrackBufferMS = 0),
            (this.m_representation = null),
            (this.m_rgBufferedSegments = []),
            (this.m_nNextSegment = 0),
            (this.m_bSeekInProgress = !1),
            (this.m_rgDownloadLog = []),
            (this.m_stats = null);
        }
        GetActiveDownloads() {
          return this.m_xhrDownload ? 1 : 0;
        }
        GetActiveDownloadProgress() {
          return this.GetActiveDownloads() ? this.m_nCurDownloadProgress : 0;
        }
        OnSourceBufferUpdateEnd(_) {
          let _ = this.m_callbacks.GetCurrentPlayTime(),
            _ = this.m_sourceBuffer.GetAmountBufferedInPlayerMS(_);
          (0, _._)(
            `${this.GetDebugName()} OnSourceBufferUpdateEnd: [playback=${_}][remaining=${_}][start=${this.m_sourceBuffer.GetBufferedStartSec()}][end=${this.m_sourceBuffer.GetBufferedEndSec()}]`,
          );
          let _ = this.m_sourceBuffer.GetBufferState();
          this.m_sourceBuffer.BufferUpdateComplete(),
            _ == _.Append && this.m_callbacks.OnSegmentBuffered(this),
            this.m_bSeekInProgress &&
              _ == _.Remove &&
              !this.m_bRemoveBufferState &&
              this.ContinueSeek(),
            this.UpdateBuffer();
        }
        DebugSpewBufferedSegments() {
          let _ = this.m_callbacks.GetCurrentPlayTime(),
            _ = "[",
            _ = _(this.m_mpd, this.m_representation, 1e3 * _);
          for (let _ of this.m_rgBufferedSegments)
            (_ += _.representation.strID),
              _.nSegmentIndex == _ && (_ += "|"),
              (_ += ",");
          (_ += "]"), console.warn(_);
        }
        OnMediaUnsupportedError(_) {
          console.log("OnMediaUnsupportedError", this.GetDebugName(), _),
            this.m_callbacks.OnMediaUnsupportedError(this, _);
        }
        OnSourceBufferError(_) {
          console.log("OnSourceBufferError", this.GetDebugName(), _),
            this.m_callbacks.OnMediaSourceError(this);
        }
        OnSourceBufferAbort(_) {
          console.log("OnSourceBufferAbort", this.GetDebugName(), _);
        }
        ScheduleNextDownload() {
          if ((this.m_schNextDownload.Cancel(), this.m_xhrDownload))
            return void (0, _._)(
              `${this.GetDebugName()} ScheduleNextDownload - download already going`,
            );
          if (this.m_bSeekInProgress)
            return void (0, _._)(
              `${this.GetDebugName()} ScheduleNextDownload - seeking`,
            );
          if (this.m_nNextSegment > this.GetMaxSegment())
            return void (0, _._)(
              `${this.GetDebugName()} ScheduleNextDownload - reached max segment`,
            );
          if (!this.m_mapInitSegments.has(this.m_representation.strID))
            return (
              (0, _._)(
                `${this.GetDebugName()} ScheduleNextDownload - downloading init segment for ${this.m_representation.strID}`,
              ),
              void this.DownloadInitSegment(this.m_representation)
            );
          let _ = (function (_, _, _) {
            if (!_.IsLiveContent()) return 0;
            let _ = _(_);
            return (
              (_ - _.segmentTemplate.nStartNumber + 1) * _ -
              _.GetDurationSinceStarted()
            );
          })(this.m_mpd, this.m_representation, this.m_nNextSegment);
          if (_ > 0)
            return (
              (0, _._)(
                `${this.GetDebugName()} ScheduleNextDownload - segment in future`,
              ),
              void this.m_schNextDownload.Schedule(_, this.ScheduleNextDownload)
            );
          let _ = this.m_callbacks.GetCurrentPlayTime(),
            _ = this.m_callbacks.GetPlaybackRate();
          if (this.IsSegmentBuffered(this.m_nNextSegment))
            return (
              (0, _._)(
                `${this.GetDebugName()} ScheduleNextDownload - buffered segment upgrade - downloading now`,
              ),
              void this.DownloadNextSegment()
            );
          let _ = this.GetAmountBufferedMS(_);
          if ((_ > 1 && (_ /= _), _ < 3e4))
            return (
              (0, _._)(
                `${this.GetDebugName()} ScheduleNextDownload - have ${_} buffered, desire 30000 - downloading now`,
              ),
              void this.DownloadNextSegment()
            );
          let _ = 1.1 * _(this.m_representation),
            _ = this.m_sourceBuffer.GetAmountBufferedInPlayerMS(
              this.m_callbacks.GetCurrentPlayTime(),
            );
          (0, _._)(
            `${this.GetDebugName()} ScheduleNextDownload - buffered, schedule later [sleep=${_}ms][buffer=${_}]`,
          ),
            this.m_schNextDownload.Schedule(_, this.ScheduleNextDownload);
        }
        DownloadInitSegment(_) {
          this.m_schNextDownload.Cancel();
          let _ = _(_);
          this.DownloadSegment(_, -1, _);
        }
        DownloadNextSegment() {
          if ((this.m_schNextDownload.Cancel(), this.m_nNextSegment < 0))
            return void console.error(
              "Attempting to download negative segment:",
              this.m_nNextSegment,
            );
          let _ =
            ((_ = this.m_representation),
            (__webpack_require__ = this.m_nNextSegment),
            _(_.segmentTemplate.strMedia, _.strID, __webpack_require__));
          var _, _;
          this.DownloadSegment(this.m_representation, this.m_nNextSegment, _);
        }
        async DownloadSegment(_, _, _, _ = performance.now()) {
          (0, _._)(
            null === this.m_xhrDownload,
            "Trying to download another segment while a download is already in flight",
          ),
            this.m_schNextDownload.Cancel();
          const _ = this.m_callbacks.GetCDNAuthURLParameter();
          _ && (_ += _), (0, _._)(`${this.GetDebugName()} Downloading: ` + _);
          let _,
            _ = null,
            _ = performance.now(),
            _ = _().CancelToken.source();
          try {
            (this.m_nCurDownloadProgress = 0), (this.m_xhrDownload = _);
            let _ = {
              cancelToken: this.m_xhrDownload.token,
              timeout: 15e3,
              responseType: "arraybuffer",
              onDownloadProgress: (_) => {
                (this.m_nCurDownloadProgress = _.loaded / _.total),
                  (this.m_nCurDownloadBitrate =
                    (8 * _.loaded * 1e3) / Math.max(1, performance.now() - _));
              },
            };
            _ = await _().get(_, _);
          } catch (_) {
            (_ = _), (_ = _.response);
          }
          if (!this.m_xhrDownload || this.m_xhrDownload != _)
            return void (0, _._)(`Throwing away cancelled download: ${_}`);
          _ &&
            (0, _._)(
              `${this.GetDebugName()} Failed to download segment: ${_}`,
              _,
            );
          let _ = performance.now(),
            _ = Math.floor(performance.now() - _),
            _ = _ ? _.status : 0;
          if (((this.m_xhrDownload = null), this.m_bSeekInProgress))
            return (
              (0, _._)(
                `${this.GetDebugName()} Throwing away download due to seek: ${_}`,
              ),
              void this.ContinueSeek()
            );
          if (!_ || 200 != _.status) {
            this.m_stats.LogSegmentDownloadFailure(_, _ ? _.status : 444);
            let _ = 500;
            if (_ - _ > 9e3) {
              if (this.m_callbacks.GetTimeoutAfterFailedDownload())
                return (
                  (0, _._)(
                    `${this.GetDebugName()} HTTP download failed.. stopping loader: ${_ - _}ms`,
                  ),
                  void this.DownloadFailed()
                );
              _ = 3e3;
            }
            return 410 == _
              ? ((this.m_nNumConsecutiveDownloadGones += 1),
                (0, _._)(
                  `${this.GetDebugName()} HTTP download gone.. informing the player: ${_ - _}ms`,
                ),
                void this.DownloadGone())
              : void this.m_schNextDownload.Schedule(_, () =>
                  this.DownloadSegment(_, _, _, _),
                );
          }
          this.m_nNumConsecutiveDownloadGones = 0;
          let _ = new Uint8Array(_.data);
          if (-1 == _) this.m_mapInitSegments.set(_.strID, _);
          else {
            let _ = this.m_rgBufferedSegments.find((_) => _.nSegmentIndex == _);
            if (!this.BAdvanceNextSegment(_, _))
              return (
                (0, _._)(
                  `${this.GetDebugName()} Downloaded unexpected segment compared to buffers.. stopping playback`,
                ),
                void this.DownloadFailed()
              );
            if (_) (_.representation = _), (_.data = _);
            else {
              let _ = _(_, _),
                _ = this.m_mpd.GetEndTime(),
                _ = _(_);
              (_ = Math.min(1e3 * (_ - _), _)),
                this.m_rgBufferedSegments.push({
                  representation: _,
                  nSegmentIndex: _,
                  nStartPTS: _,
                  nDurationMS: _,
                  data: _,
                });
            }
            this.LogDownload(_, _.length),
              this.UpdateBuffer(),
              this.m_callbacks.OnSegmentDownloaded(this);
          }
          (0, _._)(`HTTP ${_} (${_}ms, ${Math.floor(_.length / 1e3)}k): ${_}`),
            this.ScheduleNextDownload();
        }
        BAdvanceNextSegment(_, _) {
          let _ = this.m_rgBufferedSegments.length;
          if (0 == _ && _) return !1;
          if (
            !_ &&
            _ > 0 &&
            this.m_rgBufferedSegments[_ - 1].nSegmentIndex != _ - 1
          )
            return !1;
          if (!_) return (this.m_nNextSegment = _ + 1), !0;
          let _ = this.m_rgBufferedSegments.find(
            (_) => _.nSegmentIndex > _ && this.BCanUpgradeBufferedSegment(_),
          );
          return _
            ? ((this.m_nNextSegment = _.nSegmentIndex), !0)
            : ((this.m_nNextSegment =
                this.m_rgBufferedSegments[_ - 1].nSegmentIndex + 1),
              !0);
        }
        DownloadFailed() {
          this.m_callbacks.OnSegmentDownloadFailed(this);
        }
        DownloadGone() {
          this.m_callbacks.OnSegmentDownloadGone(this);
        }
        CurrentTimeChanged() {
          this.UpdateBuffer();
        }
        UpdateBuffer() {
          if (this.m_sourceBuffer.GetBufferState() != _.None) return;
          if (this.m_bRemoveBufferState) return void this.RemoveAllBuffers();
          if (!this.m_sourceBuffer.HasAttachedBuffer())
            return void (0, _._)("No source buffer?");
          let _ = this.m_callbacks.GetCurrentPlayTime(),
            _ = this.m_sourceBuffer.GetAmountBufferedInPlayerMS(_) / 1e3,
            _ = _(this.m_mpd, this.m_representation, 1e3 * _),
            _ = this.m_rgBufferedSegments.find(
              (_) => _.data && _.nSegmentIndex >= _,
            ),
            _ = _ && (_ < 6 || _.nStartPTS - _ < 6);
          if (!this.m_bSourceBufferQuotaExceeded && _) {
            let _ = _.data,
              _ = _.representation.strID;
            if (this.m_strLastFedInitSegmentRep != _) {
              let _ = this.m_mapInitSegments.get(_);
              if (!_)
                return (
                  (0, _._)(
                    `${this.GetDebugName()} Missing init segment for representation=${_}`,
                  ),
                  void this.m_callbacks.OnMediaSourceError(this)
                );
              (_ = _), (_ = null);
            }
            let _ = this.m_sourceBuffer.AppendBuffer(_);
            if (
              ((this.m_bSourceBufferQuotaExceeded =
                (_ = _) && "QuotaExceededError" == _.name),
              _ && !this.m_bSourceBufferQuotaExceeded)
            )
              return void (0, _._)(
                `${this.GetDebugName()} MSE Buffer - Exception`,
                _,
              );
            if (!_)
              return void (_
                ? (_.data = null)
                : (this.m_strLastFedInitSegmentRep = _));
          }
          var _;
          let _ = this.m_bSourceBufferQuotaExceeded ? 1 : 10,
            _ = this.m_sourceBuffer.GetBufferedStartSec();
          if (this.m_sourceBuffer.GetBufferedEndSec() - _ && _ - _ >= _) {
            let _ = _(this.m_mpd, this.m_representation, 1e3 * (_ - _)),
              _ = _(this.m_representation, _) - 0.01;
            if (_ > _)
              return (
                this.m_sourceBuffer.Remove(0, _),
                (this.m_rgBufferedSegments = this.m_rgBufferedSegments.filter(
                  (_) => _.nSegmentIndex >= _,
                )),
                (this.m_bSourceBufferQuotaExceeded = !1),
                void (0, _._)(
                  `${this.GetDebugName()} Trim MSE buffer before ${_} (segment=${_})`,
                )
              );
          }
        }
        RemoveAllBuffers() {
          (this.m_bRemoveBufferState = !1),
            (this.m_bSourceBufferQuotaExceeded = !1);
          let _ = !1;
          this.m_sourceBuffer.HasAttachedBuffer() &&
            (_ = this.m_sourceBuffer.RemoveAll()),
            this.m_sourceBuffer.MarkAsRemoving(),
            _ || this.OnSourceBufferUpdateEnd(null);
        }
        ForceStopDownloads() {
          this.m_schNextDownload.Cancel(),
            this.m_xhrDownload &&
              (this.m_xhrDownload.cancel(), (this.m_xhrDownload = null));
        }
        ForceRestartDownload() {
          this.ForceStopDownloads(), this.ScheduleNextDownload();
        }
        Seek(_) {
          let _ = this.m_sourceBuffer.GetBufferedStartSec(),
            _ = this.m_sourceBuffer.GetBufferedEndSec(),
            _ = _ >= _ && _ < _;
          if (
            (0 == _ && 0 == _ && (_ = !1),
            (0, _._)(
              `${this.GetDebugName()} making an ${_ ? "source buffer" : "out of source buffer"} seek to ${_}`,
            ),
            !this.m_bSeekInProgress && _)
          )
            return void this.ScheduleNextDownload();
          let _ = _(this.m_mpd, this.m_representation, 1e3 * _),
            _ = this.m_rgBufferedSegments.findIndex(
              (_) => _.data && _.nSegmentIndex == _,
            );
          if (_ >= 0)
            (this.m_rgBufferedSegments = this.m_rgBufferedSegments.slice(_)),
              (0, _._)(
                "Partially buffered seek To Next Segment: " +
                  this.m_nNextSegment +
                  " at approx. " +
                  (0, _._)(
                    ((this.m_nNextSegment - 1) *
                      this.GetCurrentSegmentDurationMS()) /
                      1e3,
                  ) +
                  " seconds.",
              );
          else {
            this.ForceStopDownloads(), (this.m_rgBufferedSegments = []);
            let _ = _(this.m_mpd, this.m_representation, 1e3 * _);
            (this.m_nNextSegment = Math.min(_, this.GetMaxSegment())),
              (0, _._)(
                "Seek To Next Segment: " +
                  this.m_nNextSegment +
                  " at approx. " +
                  (0, _._)(
                    ((this.m_nNextSegment - 1) *
                      this.GetCurrentSegmentDurationMS()) /
                      1e3,
                  ) +
                  " seconds.",
              );
          }
          (this.m_bSeekInProgress = !0),
            (this.m_bRemoveBufferState = !0),
            this.UpdateBuffer();
        }
        ContinueSeek() {
          this.m_bSeekInProgress &&
            (this.m_sourceBuffer.GetBufferState() == _.Remove ||
              this.m_bRemoveBufferState ||
              ((this.m_bSeekInProgress = !1), this.ScheduleNextDownload()));
        }
        UpgradeBufferedVideo() {
          let _ = _(this.m_representation),
            _ = 1e3 * this.m_callbacks.GetCurrentPlayTime(),
            _ = _(this.m_mpd, this.m_representation, _ + _),
            _ = this.m_rgBufferedSegments.find(
              (_) => _.nSegmentIndex >= _ && this.BCanUpgradeBufferedSegment(_),
            );
          _ &&
            this.m_nNextSegment != _.nSegmentIndex &&
            ((0, _._)(
              `Upgrading buffered segment ${_.nSegmentIndex} from rep ${_.representation.strID} to ${this.m_representation.strID}`,
            ),
            this.ForceStopDownloads(),
            (this.m_nNextSegment = _.nSegmentIndex),
            this.ScheduleNextDownload());
        }
        BCanUpgradeBufferedSegment(_) {
          let _ = this.m_representation.nHeight;
          return _.representation.nHeight < _;
        }
        BHasEnoughBuffered(_) {
          if (this.m_bSeekInProgress) return !1;
          if (
            !this.m_xhrDownload &&
            !this.m_schNextDownload.IsScheduled() &&
            this.m_nNextSegment > this.GetMaxSegment()
          )
            return !0;
          let _ = this.m_sourceBuffer.GetAmountBufferedInPlayerMS(_);
          if (_ > this.m_nTrackBufferMS) return !0;
          let _ = this.GetAmountBufferedMS(_);
          return _ >= 6e3 && _ >= this.m_nTrackBufferMS;
        }
        LogDownload(_, _) {
          this.m_rgDownloadLog.length >= 4 && this.m_rgDownloadLog.shift();
          let _ = performance.now() - _;
          _ <= 0 ||
            (this.m_rgDownloadLog.push({
              cubData: _,
              nDownloadMS: _,
            }),
            this.m_stats.LogDownload(_, _));
        }
        GetDownloadHistory() {
          return this.m_rgDownloadLog;
        }
        GetAvgDownloadRate() {
          let _ = 0,
            _ = 0;
          for (let _ of this.m_rgDownloadLog)
            (_ += _.nDownloadMS), (_ += _.cubData);
          return _ <= 0
            ? this.m_nCurDownloadBitrate && this.GetActiveDownloads() > 0
              ? this.m_nCurDownloadBitrate
              : 0
            : (8 * _ * 1e3) / _;
        }
        GetAvgDownloadRateSampleCount() {
          return this.m_rgDownloadLog.length;
        }
      }
      (0, _._)([_._], _.prototype, "OnSourceBufferUpdateEnd", null),
        (0, _._)([_._], _.prototype, "OnMediaUnsupportedError", null),
        (0, _._)([_._], _.prototype, "OnSourceBufferError", null),
        (0, _._)([_._], _.prototype, "OnSourceBufferAbort", null),
        (0, _._)([_._], _.prototype, "ScheduleNextDownload", null),
        (0, _._)([_._], _.prototype, "DownloadInitSegment", null),
        (0, _._)([_._], _.prototype, "DownloadNextSegment", null),
        (0, _._)([_._], _.prototype, "DownloadFailed", null),
        (0, _._)([_._], _.prototype, "DownloadGone", null),
        (0, _._)([_._], _.prototype, "CurrentTimeChanged", null);
      var _ = __webpack_require__("chunkid");
      const _ = 5,
        _ = "auto";
      var _, _, _, _;
      !(function (_) {
        (_[(_.HAVE_NOTHING = 0)] = "HAVE_NOTHING"),
          (_[(_.HAVE_METADATA = 1)] = "HAVE_METADATA"),
          (_[(_.HAVE_CURRENT_DATA = 2)] = "HAVE_CURRENT_DATA"),
          (_[(_.HAVE_FUTURE_DATA = 3)] = "HAVE_FUTURE_DATA"),
          (_[(_.HAVE_ENOUGH_DATA = 4)] = "HAVE_ENOUGH_DATA");
      })(_ || (_ = {})),
        (function (_) {
          (_[(_.Invalid = 0)] = "Invalid"),
            (_[(_.StreamGone = 1)] = "StreamGone"),
            (_[(_.PlaybackError = 2)] = "PlaybackError"),
            (_[(_.UnsupportedMediaType = 3)] = "UnsupportedMediaType");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Absolute = 0)] = "Absolute"),
            (_[(_.FromAvailableStart = 1)] = "FromAvailableStart");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Invalid = 0)] = "Invalid"),
            (_[(_.Success = 1)] = "Success"),
            (_[(_.Timeout = 2)] = "Timeout"),
            (_[(_.Gone = 3)] = "Gone"),
            (_[(_.PlayerClosing = 4)] = "PlayerClosing");
        })(_ || (_ = {}));
      class _ {
        m_elVideo = null;
        m_strMPD = "";
        m_strHLS = "";
        m_strCDNAuthURLParameters = null;
        m_bTimeoutAfterFailedDownload = !0;
        m_bAlwaysStartWithSubtitles = !1;
        m_bMuteOnAutoplayBlocked = !1;
        m_schUpdateMPD = new _._();
        m_xhrUpdateMPD;
        m_mpd;
        m_bUseHLSManifest = !1;
        m_strVideoAdaptationID = "";
        m_strAudioAdaptationID = "";
        m_rgLoaders = [];
        m_mediaSource = null;
        m_nTrackBufferMS = 0;
        m_nLimitFPS = 0;
        m_bIsBuffering = !0;
        m_seekingToTime = null;
        m_listeners = new _._();
        m_resizeObserver = null;
        m_schPlayerResizeDelay = new _._();
        m_nPlayerHeightForAuto = 0;
        m_bFirstPlay = !0;
        m_bPlaybackStarted = !1;
        m_bPlaybackEnded = !1;
        m_nLastPlaytimeLoaders = 0;
        m_nTimedText = 0;
        m_schReportPlayerTrigger = new _._();
        m_bStatsViewVisible = !1;
        m_schCaptureDisplayStatsTrigger = new _._();
        m_videoRepSelected = null;
        m_timedTextRepSelected = null;
        m_stats = new _._();
        m_bClosing = !1;
        m_hlsTimeOffset = 0;
        m_bUserPlayChoice = !0;
        m_bUserLiveEdgeChoice = !0;
        m_schFirstFrameThrottler = new _._();
        m_bookMarkAdapter = null;
        m_schBookmarkUpdater = new _._();
        m_watchedIntervals = new _();
        constructor(_) {
          (0, _._)(this),
            (this.m_elVideo = _),
            this.m_schReportPlayerTrigger.Schedule(3e4, this.ReportPlayerStats);
        }
        CalcVideoStartRelativeToSystemClock(_) {
          let _ =
            (_ ? new Date(_).getTime() : Date.now()) -
            this.m_mpd.GetAvailabilityStartTime().getTime();
          this.m_mpd.StartLiveContentNow(_), (0, _._)("server time: " + _);
        }
        GetMPDURL() {
          return this.m_strMPD;
        }
        GetHLSURL() {
          return this.m_strHLS;
        }
        IsPlayingHLS() {
          return this.m_bUseHLSManifest;
        }
        SetTimeoutAfterFailedDownload(_) {
          this.m_bTimeoutAfterFailedDownload = _;
        }
        SetAlwaysStartWithSubtitles(_) {
          this.m_bAlwaysStartWithSubtitles = _;
        }
        SetMuteOnAutoplayBlocked(_) {
          this.m_bMuteOnAutoplayBlocked = _;
        }
        async PlayMPD(_, _, _) {
          (_ = Array.isArray(_) ? _ : [_]),
            this.m_stats.StartingPlayback(),
            (this.m_strCDNAuthURLParameters = _);
          let _ = null;
          for (let _ of _) {
            let [_, _] = await this.DownloadMPD(_, _);
            if (!_) {
              let _ =
                _ == _.Gone
                  ? "Failed to download MPD: 410 Gone"
                  : "Timed out downloading MPD";
              return void this.CloseWithError(_.PlaybackError, _);
            }
            let _ = new _();
            if (!_.BParse(_.data, _))
              return void this.CloseWithError(
                _.PlaybackError,
                "Failed to parse MPD file",
                this.m_strMPD,
              );
            let _ = _(_),
              _ = _(_);
            if (
              ((_ = {
                strMPD: _,
                mpd: _,
                strServerTime: _.headers.date,
                strCanPlay: _,
                bCanPlay: _,
              }),
              _)
            )
              break;
          }
          if (_) {
            if (
              ((this.m_strMPD = _.strMPD), (this.m_mpd = _.mpd), !_.bCanPlay)
            ) {
              if (
                !_ ||
                !(function (_) {
                  let _ = _.canPlayType(
                    'application/vnd.apple.mpegurl;codecs="avc1.64001f, mp4a.40.02"',
                  );
                  return "probably" === _ || "maybe" === _;
                })(this.m_elVideo)
              )
                return void this.OnMediaUnsupportedError(null, _.strCanPlay);
              (this.m_strHLS = _), (this.m_bUseHLSManifest = !0);
            }
            if (
              (this.DispatchEvent("valve-metadatachanged"),
              this.IsLiveContent() &&
                (this.m_mpd.GetMinimumUpdatePeriod() > 0 &&
                  this.m_schUpdateMPD.Schedule(
                    1e3 * this.m_mpd.GetMinimumUpdatePeriod(),
                    this.UpdateMPD,
                  ),
                this.CalcVideoStartRelativeToSystemClock(_.strServerTime)),
              this.IsLiveContent() || this.m_watchedIntervals.Enable(),
              this.m_bUseHLSManifest)
            )
              return (
                (this.m_elVideo.src = this.m_strHLS),
                this.m_listeners.AddEventListener(
                  this.m_elVideo,
                  "loadedmetadata",
                  this.OnLoadedMetadataForHLS,
                ),
                this.m_listeners.AddEventListener(
                  document,
                  "visibilitychange",
                  this.OnVisibilityChangeForHLS,
                ),
                this.m_listeners.AddEventListener(
                  this.m_elVideo,
                  "canplay",
                  this.OnVideoCanPlayHLS,
                ),
                this.m_listeners.AddEventListener(
                  this.m_elVideo,
                  "play",
                  this.OnVideoPlay,
                ),
                this.m_listeners.AddEventListener(
                  this.m_elVideo,
                  "seeking",
                  this.OnVideoSeeking,
                ),
                this.m_listeners.AddEventListener(
                  this.m_elVideo,
                  "seeked",
                  this.OnVideoSeeked,
                ),
                this.m_listeners.AddEventListener(
                  this.m_elVideo,
                  "pause",
                  this.OnVideoPause,
                ),
                void this.m_listeners.AddEventListener(
                  this.m_elVideo,
                  "ended",
                  this.OnEndedForHLS,
                )
              );
            this.BCreateLoaders()
              ? (this.InitVideoControl(), this.InitTimedText())
              : this.CloseWithError(
                  _.PlaybackError,
                  "Failed to create segment loaders",
                );
          } else this.CloseWithError(_.PlaybackError, "Invalid manifest");
        }
        InitTimedText() {
          (this.m_nTimedText = 0),
            this.m_mpd.GetTimedTextAdaptionSet(0).forEach((_) => {
              let _ = (0, _._)(_._.LANGUAGE);
              if (
                _.rgRepresentations.length > 0 &&
                _.rgRepresentations[0].strClosedCaptionFile &&
                _.strLanguage in _._
              ) {
                const _ = document.createElement("track");
                (_.kind = "subtitles"),
                  (_.label = (0, _._)(
                    "#Language_" + (0, _._)(_._[_.strLanguage]),
                  )),
                  (_.srclang = _.strLanguage),
                  (_.src = _.rgRepresentations[0].strClosedCaptionFile),
                  (this.m_nTimedText += 1),
                  (!this.m_bAlwaysStartWithSubtitles && 0 == _) ||
                    _._[_.strLanguage] != _ ||
                    ((_.default = !0),
                    (this.m_timedTextRepSelected = _.rgRepresentations[0])),
                  this.m_elVideo.appendChild(_);
              }
            });
        }
        SetSubtitles(_) {
          let _ = null;
          for (let _ = 0; _ < this.m_elVideo.textTracks.length; _++) {
            const _ = this.m_elVideo.textTracks[_];
            if (_._[_.language] == _) {
              let _ = this.GetTimeTextAdaptions(0).filter(
                (_) => _.strLanguage == _.language,
              );
              _ &&
                _.length > 0 &&
                _[0].rgRepresentations &&
                (_ = _[0].rgRepresentations[0]),
                (_.mode = "showing");
            } else _.mode = "disabled";
          }
          this.m_timedTextRepSelected = _;
        }
        PlayWebRTC(_, _, _, _, _) {}
        OnLoadedMetadataForHLS() {
          this.m_bUseHLSManifest &&
            ((this.m_bIsBuffering = !1),
            this.BeginPlayback(),
            this.DispatchEvent("valve-bufferupdate"));
        }
        OnVisibilityChangeForHLS() {
          this.m_bUseHLSManifest &&
            "visible" === document.visibilityState &&
            (this.m_elVideo.src = this.m_strHLS);
        }
        OnEndedForHLS() {
          this.m_bUseHLSManifest && this.EndPlayback();
        }
        EndPlayback() {
          this.Pause(),
            this.m_bPlaybackEnded ||
              ((this.m_bPlaybackEnded = !0),
              this.m_watchedIntervals.OnEnded(this.m_elVideo),
              this.DispatchEvent("valve-ended"));
        }
        Close() {
          if (
            ((this.m_bClosing = !0),
            this.m_listeners.Unregister(),
            this.m_schPlayerResizeDelay.Cancel(),
            (this.m_nPlayerHeightForAuto = 0),
            this.m_resizeObserver &&
              (this.m_resizeObserver.disconnect(),
              (this.m_resizeObserver = null)),
            this.StopDownloads(),
            this.m_elVideo && this.m_elVideo.pause(),
            this.m_mediaSource)
          ) {
            try {
              "closed" != this.m_mediaSource.readyState &&
                this.m_mediaSource.endOfStream();
            } catch (_) {}
            this.m_mediaSource = null;
          }
          (this.m_bIsBuffering = !0),
            (this.m_elVideo = null),
            (this.m_strMPD = ""),
            (this.m_mpd = null),
            (this.m_bUseHLSManifest = !1),
            (this.m_strVideoAdaptationID = ""),
            (this.m_strAudioAdaptationID = ""),
            (this.m_nTrackBufferMS = 0),
            (this.m_nLimitFPS = 0),
            (this.m_seekingToTime = null),
            (this.m_bStatsViewVisible = !1),
            (this.m_videoRepSelected = null),
            this.m_stats && this.m_stats.GetFPSMonitor().Close(),
            (this.m_stats = null),
            (this.m_bFirstPlay = !0),
            (this.m_bPlaybackStarted = !1),
            (this.m_bPlaybackEnded = !1),
            (this.m_nLastPlaytimeLoaders = 0),
            this.m_watchedIntervals.Clear();
        }
        StopDownloads() {
          this.m_xhrUpdateMPD &&
            (this.m_xhrUpdateMPD.cancel(), (this.m_xhrUpdateMPD = null)),
            this.m_schUpdateMPD.Cancel(),
            this.m_schReportPlayerTrigger.Cancel(),
            this.m_schCaptureDisplayStatsTrigger.Cancel(),
            this.m_schFirstFrameThrottler.Cancel(),
            this.m_schBookmarkUpdater.Cancel(),
            this.m_elVideo &&
              1 != this.m_elVideo.playbackRate &&
              (this.m_elVideo.playbackRate = 1);
          for (let _ of this.m_rgLoaders) _.Close();
          (this.m_rgLoaders = []), (this.m_bIsBuffering = !0);
        }
        IsBuffering() {
          return this.m_bIsBuffering;
        }
        IsLiveContent() {
          return !!this.m_mpd && this.m_mpd.IsLiveContent();
        }
        async DownloadMPD(_, _) {
          if (((_ = _ || ""), this.m_xhrUpdateMPD))
            return (
              (0, _._)(!1, "Multiple MPD download requests"), [_.Timeout, null]
            );
          let _ = performance.now();
          for (; performance.now() - _ < 3e4; ) {
            let _ = null;
            try {
              this.m_xhrUpdateMPD = _().CancelToken.source();
              const _ = _ + _;
              _ = await _().get(_, {
                cancelToken: this.m_xhrUpdateMPD.token,
              });
            } catch (_) {}
            if (((this.m_xhrUpdateMPD = null), this.m_bClosing))
              return [_.PlayerClosing, null];
            if (_ && 200 == _.status) return [_.Success, _];
            if (_ && 410 == _.status) return [_.Gone, null];
            (0, _._)("Failed to download, will retry: " + this.m_strMPD),
              await (0, _._)(200);
          }
          return (
            (0, _._)("Failed to download: " + this.m_strMPD), [_.Timeout, null]
          );
        }
        async UpdateMPD() {
          (0, _._)("Updating MPD in player from: " + this.m_strMPD);
          let [_, _] = await this.DownloadMPD(
            this.m_strMPD,
            this.m_strCDNAuthURLParameters,
          );
          _
            ? this.m_mpd.BUpdate(_.data)
              ? (this.IsLiveContent() &&
                  this.CalcVideoStartRelativeToSystemClock(_.headers.date),
                this.m_stats.SetAnalyticLinks(
                  this.m_mpd.GetStatsLink(),
                  this.m_mpd.GetStalledLink(),
                  this.m_mpd.GetEventLink(),
                ),
                this.m_mpd.GetMinimumUpdatePeriod() > 0 &&
                  this.m_schUpdateMPD.Schedule(
                    1e3 * this.m_mpd.GetMinimumUpdatePeriod(),
                    this.UpdateMPD,
                  ),
                this.DispatchEvent("valve-metadatachanged"))
              : this.CloseWithError(
                  _.PlaybackError,
                  "Failed to parse on Update the MPD file",
                )
            : _ == _.Gone &&
              this.CloseWithError(
                _.PlaybackError,
                "Failed to download MPD: 410 Gone",
              );
        }
        CloseWithError(_, ..._) {
          this.DispatchEvent("valve-downloadfailed", _),
            this.Close(),
            (0, _._)(..._);
        }
        BCreateLoaders() {
          let _ = this.m_mpd.GetPeriods();
          if (0 == _.length) return !1;
          let _ = _[0];
          (this.m_strVideoAdaptationID = ""),
            (this.m_strAudioAdaptationID = "");
          for (let _ of _.rgAdaptationSets) {
            let _ = null;
            if (
              (!this.m_strVideoAdaptationID &&
                _.bContainsVideo &&
                _(_) &&
                ((_ = _), (this.m_strVideoAdaptationID = _.strID)),
              !this.m_strAudioAdaptationID &&
                _.bContainsAudio &&
                _(_) &&
                ((_ = _), (this.m_strAudioAdaptationID = _.strID)),
              _)
            ) {
              let _ = new _(this, this.m_mpd, _, this.m_stats);
              this.m_rgLoaders.push(_);
            }
          }
          return this.m_strVideoAdaptationID.length > 0;
        }
        InitVideoControl() {
          let _ = new MediaSource(),
            _ = URL.createObjectURL(_);
          this.m_elVideo.pause(),
            (this.m_elVideo.srcObject = null),
            (this.m_elVideo.src = _),
            (this.m_mediaSource = _),
            this.m_listeners.AddEventListener(
              _,
              "sourceopen",
              this.OnMediaSourceOpen,
            ),
            this.m_listeners.AddEventListener(
              _,
              "sourceended",
              this.OnMediaSourceEnded,
            ),
            this.m_listeners.AddEventListener(
              _,
              "sourceclose",
              this.OnMediaSourceClose,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "waiting",
              this.OnVideoWaiting,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "error",
              this.OnVideoError,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "canplay",
              this.OnVideoCanPlay,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "pause",
              this.OnVideoPause,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "resize",
              this.OnVideoResize,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "valve-bufferupdate",
              this.OnVideoTimeUpdate,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "timeupdate",
              this.OnVideoTimeUpdate,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "play",
              this.OnVideoPlay,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "seeking",
              this.OnVideoSeeking,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "seeked",
              this.OnVideoSeeked,
            ),
            (this.m_nPlayerHeightForAuto = this.GetVideoPlayerHeight()),
            (this.m_resizeObserver = (0, _._)(
              this.m_elVideo,
              this.OnPlayerResize,
            ));
        }
        OnPlayerResize(_, _) {
          this.m_schPlayerResizeDelay.Cancel(),
            this.m_schPlayerResizeDelay.Schedule(250, () => {
              this.GetVideoPlayerHeight() != this.m_nPlayerHeightForAuto &&
                ((this.m_nPlayerHeightForAuto = this.GetVideoPlayerHeight()),
                this.UpdateVideoRepresentation(!0));
            });
        }
        OnMediaSourceOpen(_) {
          (0, _._)("OnMediaSourceOpen");
          for (let _ of this.m_rgLoaders) _.SetMediaSource(this.m_mediaSource);
          this.BeginPlayback();
        }
        HandleMediaSourceError(_) {
          this.m_bClosing ||
            _.target != this.m_mediaSource ||
            this.StopDownloads();
        }
        OnMediaSourceEnded(_) {
          (0, _._)("OnMediaSourceEnded", _), this.HandleMediaSourceError(_);
        }
        OnMediaSourceClose(_) {
          (0, _._)("OnMediaSourceClose", _), this.HandleMediaSourceError(_);
        }
        OnVideoWaiting(_) {
          if (this.IsAtEnd())
            return (
              (0, _._)(
                `pausing playback due to OnVideoWaiting (endTime=${this.m_mpd.GetEndTime()}, currentPlaytime=${this.GetCurrentPlayTime()} )`,
              ),
              void this.EndPlayback()
            );
          if (
            !this.BIsPlayerBufferedBetween(
              this.m_elVideo.currentTime,
              this.m_elVideo.currentTime + 0.5,
            ) &&
            !this.m_seekingToTime
          ) {
            if (this.m_elVideo && this.m_elVideo.buffered.length > 1) {
              let _ = this.m_elVideo.currentTime,
                _ = this.m_elVideo.buffered;
              for (let _ = 0; _ < _.length; ++_)
                if (
                  ((0, _._)(
                    "OnVideoWaiting buffer " +
                      _ +
                      " start:" +
                      _.start(_) +
                      " end: " +
                      _.end(_) +
                      " playerTime: " +
                      _,
                  ),
                  _.start(_) <= _ && _ <= _.end(_))
                )
                  return (
                    (0, _._)(
                      "OnVideoWaiting - time splitting, jumping to buffer " + _,
                    ),
                    void this.Seek(_.start(_))
                  );
            }
            if (
              (this.m_stats.ReportVideoStalled(
                this.m_rgLoaders,
                this.m_elVideo,
              ),
              (this.m_bIsBuffering = !0),
              this.DispatchEvent("valve-bufferupdate"),
              null === this.m_videoRepSelected)
            ) {
              let _ = !0,
                _ = this.GetVideoLoader();
              if (_) {
                let _ = this.m_mpd.GetLowestRepresentation(
                  this.GetCurrentVideoAdaptation().strID,
                );
                _ &&
                  !_.BIsCurrentRepresentation(_) &&
                  (_.ChangeRepresentation(_, !1),
                  (0, _._)(
                    "OnVideoWaiting - Stalled, forced restart download at resolution: " +
                      _.nWidth +
                      "x" +
                      _.nHeight +
                      "@" +
                      _.nFrameRate +
                      " instead",
                  ),
                  (_ = !1)),
                  this.Seek(this.m_elVideo.currentTime);
              }
              _ &&
                (0, _._)(
                  "OnVideoWaiting - Stalled, already at lowest resolution. No action taken. BHasLoader: " +
                    (null != _),
                );
            } else {
              let _ = this.m_videoRepSelected;
              (0, _._)(
                `OnVideoWaiting - Stalled, user explicitly chose a resolution: ${_.nWidth}x${_.nHeight}@${_.nFrameRate}`,
              );
            }
          }
        }
        OnVideoPause(_) {
          this.m_bUseHLSManifest ||
            (this.OnVideoBufferProgress(),
            this.m_stats.GetFPSMonitor().Close(),
            this.SendUpdateToBookmarkServiceIfNeeded()),
            this.m_watchedIntervals.OnPause(this.m_elVideo);
        }
        OnVideoResize(_) {
          this.m_stats.GetFPSMonitor().SetWindowResized();
        }
        OnVideoError(_) {
          (0, _._)("OnVideoError");
        }
        OnVideoCanPlay(_) {
          this.m_bIsBuffering ||
            (this.m_bUserPlayChoice && this.PlayOnElement()),
            this.m_stats.LogVideoOnCanPlay();
        }
        OnVideoCanPlayHLS() {
          this.m_stats.LogVideoOnCanPlay();
        }
        GetCurrentPlayTime() {
          if (!this.m_elVideo) return 0;
          if (this.m_seekingToTime) {
            if (
              !this.m_bPlaybackStarted &&
              this.m_seekingToTime.eSeekType == _.FromAvailableStart
            )
              return 0;
            let _ =
              this.m_seekingToTime.eSeekType == _.FromAvailableStart
                ? this.GetAvailableVideoStartTime()
                : 0;
            return this.m_seekingToTime.nTime + _;
          }
          return this.m_bUseHLSManifest &&
            this.m_mpd &&
            this.m_mpd.IsLiveContent()
            ? (this.m_elVideo.currentTime > 0 &&
                0 === this.m_hlsTimeOffset &&
                (this.m_hlsTimeOffset =
                  this.GetBufferedLiveEdgeTime() - this.m_elVideo.currentTime),
              this.m_elVideo.currentTime + this.m_hlsTimeOffset)
            : this.m_elVideo.currentTime;
        }
        GetBufferedEndTime() {
          if (0 == this.m_rgLoaders.length) return 0;
          let _ = Number.MAX_SAFE_INTEGER;
          for (let _ of this.m_rgLoaders) _ = Math.min(_.GetBufferedEnd(), _);
          return _;
        }
        OnVideoTimeUpdate() {
          if (!this?.m_elVideo) return;
          let _ = this.m_elVideo.currentTime;
          if (
            _ < this.m_nLastPlaytimeLoaders ||
            _ - this.m_nLastPlaytimeLoaders > 0.5
          ) {
            for (let _ of this.m_rgLoaders) _.CurrentTimeChanged();
            this.m_nLastPlaytimeLoaders = _;
          }
          if (this.m_bUserLiveEdgeChoice && this.IsLiveContent()) {
            let _ = this.GetBufferedLiveEdgeTime();
            if (
              1 == this.m_elVideo.playbackRate &&
              this.m_elVideo.currentTime <= _ - 4.5 &&
              this.BIsPlayerBufferedBetween(this.m_elVideo.currentTime, _)
            ) {
              let _ = _ - this.m_elVideo.currentTime;
              (this.m_elVideo.playbackRate = 1.1),
                (0, _._)(
                  "User is behind by " +
                    _.toFixed(2) +
                    " seconds, increasing playback speed to catch-up to live edge.",
                );
            } else
              1.1 == this.m_elVideo.playbackRate &&
                this.m_elVideo.currentTime >= _ - 1 &&
                ((this.m_elVideo.playbackRate = 1),
                (0, _._)("User is caught up, returning to normal playrate"));
          } else {
            const _ = this.GetAvailableVideoStartTime(),
              _ = this.GetBufferedLiveEdgeTime() - _;
            this.GetCurrentPlayTime() - _ >= _ && this.EndPlayback();
          }
        }
        SetBookmarkAdapter(_) {
          this.m_bookMarkAdapter = _;
        }
        SendUpdateToBookmarkServiceIfNeeded() {
          if (this.m_bookMarkAdapter) {
            let _ = this.m_elVideo.currentTime,
              _ = this.GetCurrentVideoAdaptation(),
              _ = _ && _.strID ? _.strID : null,
              _ = this.GetCurrentAudioAdaptationfunction(),
              _ = _ && _.strID ? _.strID : null,
              _ = this.GetCurrentTimedTextRepresentation(),
              _ = _ && _.strID ? _.strID : null;
            this.m_bookMarkAdapter.SetBookmark(_ >= 0 ? _ : 0, _, _, _),
              this.IsPaused()
                ? this.m_schBookmarkUpdater.Cancel()
                : this.m_schBookmarkUpdater.Schedule(
                    6e4,
                    this.SendUpdateToBookmarkServiceIfNeeded,
                  );
          }
        }
        GetCurrentTimedTextRepresentation() {
          return this.m_timedTextRepSelected;
        }
        OnVideoPlay() {
          this.m_bUseHLSManifest ||
            (this.SendUpdateToBookmarkServiceIfNeeded(),
            this.m_stats
              .GetFPSMonitor()
              .StartTracking(() =>
                this.m_stats.ExtractFrameInfo(this.m_elVideo),
              )),
            this.m_watchedIntervals.OnPlay(this.m_elVideo),
            (this.m_bPlaybackEnded = !1);
        }
        OnVideoSeeking() {
          this.m_watchedIntervals.OnSeeking(this.m_elVideo);
        }
        OnVideoSeeked() {
          this.m_watchedIntervals.OnSeeked(this.m_elVideo),
            (this.m_bPlaybackEnded = !1);
        }
        BIsPlayerBufferedBetween(_, _) {
          return (
            this.m_elVideo.buffered.length > 0 &&
            _ >= this.m_elVideo.buffered.start(0) &&
            _ <= this.m_elVideo.buffered.end(0)
          );
        }
        GetLiveContentStartTime() {
          return this.m_mpd.GetAvailabilityStartTime();
        }
        GetTimeTextAdaptions(_) {
          return this.m_mpd ? this.m_mpd.GetTimedTextAdaptionSet(_) : [];
        }
        GetAvailableVideoStartTime() {
          if (!this.m_mpd) return 0;
          let _ = 0;
          if (this.IsLiveContent()) {
            let _ = Math.floor(this.m_mpd.GetDurationSinceStarted() / 1e3),
              _ = this.GetBufferedLiveEdgeTime(),
              _ = this.m_mpd.GetTimeShiftBufferDepth();
            (_ = _ ? _ - _ + 10 : 0), (_ = _._(_, 0, _));
          } else _ = this.m_mpd.GetStartTime();
          return _;
        }
        GetBufferedLiveEdgeTime() {
          if (!this.m_mpd) return 0;
          let _ = 0;
          return (
            (_ = this.IsLiveContent()
              ? Math.floor(
                  (this.m_mpd.GetDurationSinceStarted() -
                    this.m_nTrackBufferMS) /
                    1e3,
                )
              : this.m_mpd.GetEndTime()),
            _
          );
        }
        IsPaused() {
          return !this.m_bUserPlayChoice;
        }
        IsAtEnd() {
          return (
            !this.IsLiveContent() &&
            this.m_mpd &&
            this.m_mpd.GetEndTime() > 0 &&
            this.m_mpd.GetEndTime() - this.GetCurrentPlayTime() < 1
          );
        }
        SetUserPlayChoice(_) {
          (this.m_bUserPlayChoice = _),
            this.DispatchEvent("valve-userpausechange");
        }
        Play() {
          this.m_elVideo &&
            (this.SetUserPlayChoice(!0), this.Seek(this.GetCurrentPlayTime()));
        }
        Pause() {
          (this.m_bUserLiveEdgeChoice = !1),
            1.1 == this.m_elVideo?.playbackRate &&
              (this.m_elVideo.playbackRate = 1),
            this.SetUserPlayChoice(!1),
            this.m_elVideo?.pause();
        }
        GetPlaybackRate() {
          return this.m_elVideo.paused ? 0 : this.m_elVideo.playbackRate;
        }
        GetTimeoutAfterFailedDownload() {
          return this.m_bTimeoutAfterFailedDownload;
        }
        GetCDNAuthURLParameter() {
          return this.m_strCDNAuthURLParameters;
        }
        OnSegmentDownloaded(_) {
          (0, _._)(_.GetDebugName() + " OnSegmentDownloaded"),
            this.UpdateVideoRepresentation(!1),
            this.OnVideoBufferProgress(),
            _ == this.GetVideoLoader() &&
              this.m_stats.SetCurrentVideoBandwidth(_.GetAvgDownloadRate());
        }
        OnSegmentBuffered(_) {
          this.OnVideoBufferProgress();
        }
        async PlayOnElement() {
          const _ = this.m_bFirstPlay;
          let _;
          this.m_bFirstPlay = !1;
          try {
            await this.m_elVideo.play();
          } catch (_) {
            (_ = _), (0, _._)("Failed to play video", _);
          }
          let _ = this.BHasTimedText() || this.m_bMuteOnAutoplayBlocked;
          if (_ && "NotAllowedError" == _.name && !this.m_elVideo.muted && _) {
            (0, _._)("Trying to play again, this time muted with subtitles"),
              (_ = void 0),
              (this.m_elVideo.muted = !0),
              this.SetSubtitles((0, _._)(_._.LANGUAGE));
            try {
              await this.m_elVideo.play();
            } catch (_) {
              (_ = _), (0, _._)("Failed to play video when muted", _);
            }
          }
          _ &&
            _ &&
            "NotAllowedError" == _.name &&
            this.DispatchEvent("valve-userinputneeded");
        }
        OnVideoBufferProgress() {
          if (!this.IsBuffering()) return;
          let _ = this.m_rgLoaders.length > 0,
            _ = this.GetPlaybackStartTime(0);
          for (let _ of this.m_rgLoaders) {
            if (!__webpack_require__.BHasEnoughBuffered(_)) {
              _ = !1;
              break;
            }
            _ = Math.max(_, __webpack_require__.GetBufferedStart());
          }
          _ &&
            ((this.m_bIsBuffering = !1),
            (this.m_seekingToTime = null),
            this.m_elVideo.currentTime != _
              ? (this.m_elVideo.currentTime = _)
              : this.m_elVideo.paused &&
                this.m_bUserPlayChoice &&
                this.PlayOnElement(),
            this.DispatchEvent("valve-bufferupdate"));
        }
        OnSegmentDownloadFailed(_, _) {
          this.StopDownloads(), this.DispatchEvent("valve-downloadfailed", _);
        }
        OnSegmentDownloadGone(_) {
          this.m_bIsBuffering && _.GetNumConsecutiveDownloadGones() <= 3
            ? this.Seek(
                this.GetCurrentPlayTime() +
                  _.GetCurrentSegmentDurationMS() / 1e3,
              )
            : ((0, _._)(
                "OnSegmentDownloadGone: too many consecutive 'gone', erroring the download: " +
                  _.GetNumConsecutiveDownloadGones(),
              ),
              this.OnSegmentDownloadFailed(_, _.StreamGone));
        }
        OnMediaUnsupportedError(_, _) {
          this.DispatchEvent("valve-downloadfailed", _.UnsupportedMediaType);
        }
        OnMediaSourceError(_) {
          this.DispatchEvent("valve-playbackerror");
        }
        GetCurrentAudioAdaptationfunction() {
          return this.m_mpd
            ? this.m_mpd.GetAdaptationByTrackID(this.m_strAudioAdaptationID)
            : null;
        }
        GetCurrentVideoAdaptation() {
          return this.m_mpd
            ? this.m_mpd.GetAdaptationByTrackID(this.m_strVideoAdaptationID)
            : null;
        }
        GetVideoLoader() {
          for (let _ of this.m_rgLoaders) if (_.ContainsVideo()) return _;
          return null;
        }
        GetAudioLoader() {
          for (let _ of this.m_rgLoaders) if (_.ContainsAudio()) return _;
          return null;
        }
        SetTrackBufferMS(_) {
          this.m_nTrackBufferMS = _;
          for (let _ of this.m_rgLoaders) _.SetBufferMS(_);
        }
        BeginPlayback() {
          if (!this.m_bUseHLSManifest) {
            let _ = this.DetermineBestVideoRepresentation();
            for (let _ of this.m_rgLoaders)
              if (_.ContainsVideo()) {
                _.ChangeRepresentation(_, !1);
                let _ = _.GetCurrentSegmentDurationMS();
                this.m_schFirstFrameThrottler.Schedule(
                  _ / 2,
                  this.VerifyFirstSegmentDownloadProgress,
                );
              } else if (_.ContainsAudio()) {
                let _ =
                  _.GetAdaptation().rgRepresentations.length > 0
                    ? _.GetAdaptation().rgRepresentations[0]
                    : null;
                _.ChangeRepresentation(_, !1);
              }
          }
          this.m_bPlaybackStarted = !0;
          let _ = 0;
          if (this.IsLiveContent()) {
            let _ = this.GetVideoLoader().GetCurrentSegmentDurationMS(),
              _ = 1e3 * this.m_mpd.GetMinBufferTime(),
              _ = Math.max(_, _);
            this.SetTrackBufferMS(_);
            let _ = this.GetBufferedLiveEdgeTime();
            (_ = this.GetPlaybackStartTime(_)),
              (0, _._)(
                `Begin playback of live content [this.buffer=${this.m_nTrackBufferMS}][nStartTime=${_}][nLiveEdge=${_}]`,
              );
          } else
            this.SetTrackBufferMS(8e3),
              (_ = this.GetPlaybackStartTime(0)),
              this.m_bookMarkAdapter &&
                ((_ = this.m_bookMarkAdapter.GetBeginPlaytime()),
                this.m_mpd.GetEndTime() - _ < 5 && (_ = 0)),
              (0, _._)(
                `Begin playback of non-live content [this.buffer=${this.m_nTrackBufferMS}][nStartTime=${_}]`,
              );
          (this.m_seekingToTime = null),
            (0, _._)("Starting playback at " + _),
            this.m_bUseHLSManifest ||
              (this.m_stats.SetSegmentDurationMS(
                this.GetVideoLoader().GetCurrentSegmentDurationMS(),
              ),
              this.m_stats.SetAnalyticLinks(
                this.m_mpd.GetStatsLink(),
                this.m_mpd.GetStalledLink(),
                this.m_mpd.GetEventLink(),
              ),
              this.m_stats.SetVideoInitializationURL(
                this.GetVideoLoader().GetCurrentSegmentInitializationURL(),
              )),
            this.Seek(_);
        }
        VerifyFirstSegmentDownloadProgress() {
          let _ = this.GetVideoLoader();
          if (
            null === this.m_videoRepSelected &&
            _ &&
            0 == _.GetDownloadHistory().length &&
            _.GetActiveDownloads() > 0 &&
            _.GetActiveDownloadProgress() < 0.55
          ) {
            let _ = this.DetermineBestVideoRepresentation();
            _ &&
              !_.BIsCurrentRepresentation(_) &&
              (_.ChangeRepresentation(_, !1),
              _.ForceRestartDownload(),
              (0, _._)(
                "Video download progressing too slowly, choosing " +
                  _.nWidth +
                  "x" +
                  _.nHeight +
                  "@" +
                  _.nFrameRate +
                  " instead",
              ));
          }
        }
        DetermineBestVideoRepresentation() {
          let _ = this.GetVideoLoader(),
            _ = this.GetAudioLoader(),
            _ = _ && _ != _ ? _.GetEstimatedAudioRate() : 0,
            _ =
              _.GetAvgDownloadRateSampleCount() > 0
                ? _.GetAvgDownloadRate()
                : -1,
            _ =
              (_ = this.m_nPlayerHeightForAuto) < 410
                ? 480
                : _ < 600
                  ? 720
                  : _ < 910
                    ? 1080
                    : Number.MAX_SAFE_INTEGER;
          var _;
          let _ = _.GetRepresentationsCount() - 1,
            _ = _.GetAdaptation().rgRepresentations[_];
          for (let _ = _ - 1; _ >= 0; _--) {
            let _ = _.GetAdaptation().rgRepresentations[_],
              _ = (_.nBandwidth + _) * this.m_elVideo.playbackRate * 1.15;
            if (_ > 0 && _ < _) {
              (0, _._)(
                `Video select: Skipping ${_} due to rate: [avg=${_}][required=${_}]`,
              );
              continue;
            }
            let _ = _.nFrameRate || 0;
            if (this.IsLiveContent() && _ > 30) {
              let _ = this.m_stats.GetFPSMonitor(),
                _ = _.BHasCurrentFPS() && Math.ceil(_.GetCurrentFPS()) < 29;
              if (_.BIsDroppingFrames() || _) {
                (0, _._)(
                  `Video select: Skipping ${_} due to dropping frames and high FPS representation: [fps:${_}]`,
                );
                continue;
              }
            }
            if (this.m_nLimitFPS > 0 && _ > this.m_nLimitFPS) {
              (0, _._)(`Video select: Skipping ${_} due to frame rate limit`);
              continue;
            }
            let _ = _.nHeight || 0,
              _ = _.nHeight || 0;
            if (_ > 0 && _ > 0 && _ > 0 && _ > _) {
              (0, _._)(
                `Video select: Stopped at ${_} due to player dimensions`,
              );
              break;
            }
            _ = _;
          }
          return _;
        }
        UpdateVideoRepresentation(_) {
          if (this.m_videoRepSelected) return;
          let _ = this.GetVideoLoader();
          if (!_) return;
          if (this.IsBuffering()) return;
          let _ = this.DetermineBestVideoRepresentation();
          _.ChangeRepresentation(_, _);
        }
        GetPlaybackStartTime(_) {
          if (!this.m_seekingToTime) return _;
          (0, _._)(
            this.m_bPlaybackStarted,
            "Missing mpd info to calculate seek time",
          );
          let _ =
            this.m_seekingToTime.eSeekType == _.FromAvailableStart
              ? this.GetAvailableVideoStartTime()
              : 0;
          return this.m_seekingToTime.nTime + _;
        }
        CanSeek() {
          return !0;
        }
        SeekAndPlay(_) {
          return this.SetUserPlayChoice(!0), this.Seek(_);
        }
        Seek(_, _ = _.Absolute) {
          if (!this.m_bPlaybackStarted)
            return (
              (this.m_seekingToTime = {
                nTime: _,
                eSeekType: _,
              }),
              _
            );
          _ == _.FromAvailableStart && (_ += this.GetAvailableVideoStartTime());
          let _ = this.GetAvailableVideoStartTime(),
            _ = this.GetBufferedLiveEdgeTime();
          const _ = _;
          (_ = _._(_, _, _)) != _ &&
            (0, _._)(`Seek time ${_} was clamped to the range ${_} to ${_}`),
            (this.m_bUserLiveEdgeChoice = _ >= _ - _);
          let _ = this.m_elVideo.paused;
          if ((_ || this.m_elVideo.pause(), this.m_bUseHLSManifest))
            (this.m_elVideo.currentTime = _ - this.m_hlsTimeOffset),
              this.PlayOnElement(),
              this.DispatchEvent("valve-bufferupdate");
          else {
            (this.m_bIsBuffering = !0),
              (this.m_seekingToTime = {
                nTime: _,
                eSeekType: _.Absolute,
              });
            for (let _ of this.m_rgLoaders) _.Seek(_);
            this.DispatchEvent("valve-bufferupdate"),
              _ && this.OnVideoBufferProgress();
          }
          return _;
        }
        JumpTime(_) {
          return (_ += this.GetCurrentPlayTime()), this.Seek(_);
        }
        GetVideoPlayerHeight() {
          return this.m_elVideo.clientHeight;
        }
        DispatchEvent(_, _ = null) {
          let _ = new CustomEvent(_, {
            cancelable: !0,
            bubbles: !0,
            detail: _,
          });
          this.m_elVideo
            ? this.m_elVideo.dispatchEvent(_)
            : console.error(
                `dashplayer: attempting to fire ${_} when elVideo not set`,
                _,
              );
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
        GetAndCloseWatchedIntervals() {
          return (
            this.m_elVideo &&
              this.m_watchedIntervals.CloseCurrentInterval(this.m_elVideo),
            this.m_watchedIntervals.GetIntervals()
          );
        }
        ReportPlayerStats() {
          this.m_stats.ReportPlayerStats(this.m_rgLoaders, this.m_elVideo),
            this.m_schReportPlayerTrigger.Schedule(3e5, this.ReportPlayerStats);
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
            this.m_stats.CaptureFrequentlyUpdatingInformation(
              this.m_elVideo,
              this.m_rgLoaders,
            ),
            this.m_schCaptureDisplayStatsTrigger.Schedule(
              250,
              this.CaptureStatsForDisplay,
            );
        }
        GetVideoRepresentations() {
          let _ = [];
          if (
            (_.push({
              _: _,
              displayName: "Auto",
              selected: null === this.m_videoRepSelected,
            }),
            this.m_bUseHLSManifest)
          )
            return _;
          let _ = this.GetCurrentVideoAdaptation();
          if (_)
            for (let _ of _.rgRepresentations) {
              let _ =
                  this.m_videoRepSelected &&
                  this.m_videoRepSelected.strID == _.strID,
                _ = _.nFrameRate;
              _ > 50 && _.nFrameRate < 70
                ? (_ = 60)
                : _ > 25 && _ < 35 && (_ = 30);
              let _ = `${_.nWidth}x${_.nHeight} @ ${_}fps`;
              _.push({
                _: _.strID,
                displayName: _,
                selected: _,
                width: _.nWidth,
                height: _.nHeight,
                fps: _,
              });
            }
          return (
            _.sort((_, _) =>
              _.width === _.width ? _.fps - _.fps : _.width - _.width,
            ),
            _
          );
        }
        SetVideoRepresentation(_) {
          let _ = !0,
            _ = this.GetVideoLoader();
          if (_ && _._ != _) {
            let _ = __webpack_require__.GetRepresentationByID(_._);
            _ &&
              ((_ = !1),
              (null !== this.m_videoRepSelected &&
                this.m_videoRepSelected.strID == _.strID) ||
                ((this.m_videoRepSelected = _),
                __webpack_require__.ChangeRepresentation(_, !0),
                this.Seek(this.GetCurrentPlayTime()),
                this.m_stats.MarkAtLeastOneUserRepresentation()));
          }
          _ && (this.m_videoRepSelected = null);
        }
        GetThumbnail(_) {
          (_ += this.GetAvailableVideoStartTime()),
            (_ += Math.floor(this.m_mpd.GetThumbnailDurationMS() / 1e3));
          let _ = this.GetAvailableVideoStartTime(),
            _ = this.GetBufferedLiveEdgeTime();
          return (_ = _._(_, _, _)), this.m_mpd.GetThumbnail(1e3 * _);
        }
        BHasTimedText() {
          return this.m_nTimedText > 0;
        }
        GetMaxWidthAndHeight() {
          if (!this.m_mpd) return null;
          let _ = this.m_mpd.GetMainVideoAdaption();
          if (!_) return null;
          if (0 == _.rgRepresentations.length) return null;
          let _ = _.rgRepresentations[0];
          return {
            nWidth: _.nWidth,
            nHeight: _.nHeight,
          };
        }
      }
      function _(_) {
        return _._ == _;
      }
      function _(_) {
        let _ = "",
          _ = "",
          _ = "",
          _ = _.GetMainVideoAdaption();
        return (
          _ &&
            _.rgRepresentations.length > 0 &&
            ((_ = _.rgRepresentations[0].strMimeType),
            (_ = _.rgRepresentations[0].strCodecs)),
          (_ = _.GetMainAudioAdaption()),
          _ &&
            _.rgRepresentations.length > 0 &&
            (_ = _.rgRepresentations[0].strCodecs),
          _ && _ ? (_ ? `${_}; codecs="${_}, ${_}` : `${_}; codecs="${_}`) : ""
        );
      }
      function _(_) {
        let _ = !1;
        try {
          _ = MediaSource.isTypeSupported(_);
        } catch (_) {}
        return _;
      }
      (0, _._)([_._], _.prototype, "m_nTimedText", void 0),
        (0, _._)([_._], _.prototype, "InitTimedText", null),
        (0, _._)([_._], _.prototype, "OnLoadedMetadataForHLS", null),
        (0, _._)([_._], _.prototype, "OnVisibilityChangeForHLS", null),
        (0, _._)([_._], _.prototype, "OnEndedForHLS", null),
        (0, _._)([_._], _.prototype, "UpdateMPD", null),
        (0, _._)([_._], _.prototype, "OnPlayerResize", null),
        (0, _._)([_._], _.prototype, "OnMediaSourceOpen", null),
        (0, _._)([_._], _.prototype, "HandleMediaSourceError", null),
        (0, _._)([_._], _.prototype, "OnMediaSourceEnded", null),
        (0, _._)([_._], _.prototype, "OnMediaSourceClose", null),
        (0, _._)([_._], _.prototype, "OnVideoWaiting", null),
        (0, _._)([_._], _.prototype, "OnVideoPause", null),
        (0, _._)([_._], _.prototype, "OnVideoResize", null),
        (0, _._)([_._], _.prototype, "OnVideoError", null),
        (0, _._)([_._], _.prototype, "OnVideoCanPlay", null),
        (0, _._)([_._], _.prototype, "OnVideoCanPlayHLS", null),
        (0, _._)([_._], _.prototype, "GetCurrentPlayTime", null),
        (0, _._)([_._], _.prototype, "GetBufferedEndTime", null),
        (0, _._)([_._], _.prototype, "OnVideoTimeUpdate", null),
        (0, _._)(
          [_._],
          _.prototype,
          "SendUpdateToBookmarkServiceIfNeeded",
          null,
        ),
        (0, _._)([_._], _.prototype, "OnVideoPlay", null),
        (0, _._)([_._], _.prototype, "OnVideoSeeking", null),
        (0, _._)([_._], _.prototype, "OnVideoSeeked", null),
        (0, _._)([_._], _.prototype, "GetPlaybackRate", null),
        (0, _._)([_._], _.prototype, "GetTimeoutAfterFailedDownload", null),
        (0, _._)([_._], _.prototype, "GetCDNAuthURLParameter", null),
        (0, _._)([_._], _.prototype, "OnSegmentDownloaded", null),
        (0, _._)([_._], _.prototype, "OnSegmentBuffered", null),
        (0, _._)([_._], _.prototype, "PlayOnElement", null),
        (0, _._)([_._], _.prototype, "OnSegmentDownloadFailed", null),
        (0, _._)([_._], _.prototype, "OnSegmentDownloadGone", null),
        (0, _._)([_._], _.prototype, "OnMediaUnsupportedError", null),
        (0, _._)([_._], _.prototype, "OnMediaSourceError", null),
        (0, _._)(
          [_._],
          _.prototype,
          "VerifyFirstSegmentDownloadProgress",
          null,
        ),
        (0, _._)([_._], _.prototype, "ReportPlayerStats", null),
        (0, _._)([_._.bound], _.prototype, "CaptureStatsForDisplay", null);
      class _ {
        m_bEnabled = !1;
        m_rgIntervals = [];
        m_nWatchStart = void 0;
        Enable() {
          this.m_bEnabled = !0;
        }
        GetIntervals() {
          return this.m_rgIntervals;
        }
        CloseCurrentInterval(_) {
          this.StopInterval(_);
        }
        Clear() {
          (this.m_bEnabled = !1),
            (this.m_rgIntervals = []),
            (this.m_nWatchStart = void 0);
        }
        OnPlay(_) {
          this.StartInterval(_);
        }
        OnPause(_) {
          this.StopInterval(_);
        }
        OnSeeking(_) {
          this.StopInterval(_);
        }
        OnSeeked(_) {
          _.paused || this.StartInterval(_);
        }
        OnEnded(_) {
          this.StopInterval(_);
        }
        StartInterval(_) {
          this.m_bEnabled &&
            void 0 === this.m_nWatchStart &&
            (this.m_nWatchStart = _.currentTime);
        }
        StopInterval(_) {
          if (!this.m_bEnabled || void 0 === this.m_nWatchStart) return;
          let _ = _.currentTime;
          this.MergeInterval([this.m_nWatchStart, _]),
            (this.m_nWatchStart = void 0);
        }
        MergeInterval(_) {
          let _;
          for (
            _[0] = Math.floor(_[0]), _[1] = Math.ceil(_[1]), _ = 0;
            _ < this.m_rgIntervals.length &&
            !(_[0] <= this.m_rgIntervals[_][1]);
            _++
          );
          let _,
            [_, _] = _;
          for (_ = _; _ < this.m_rgIntervals.length; _++) {
            let _ = this.m_rgIntervals[_];
            if (_[0] > _) break;
            (_ = Math.min(_, _[0])), (_ = Math.max(_, _[1]));
          }
          let _ = _ - _;
          this.m_rgIntervals.splice(_, _, [_, _]);
        }
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
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
        _ = __webpack_require__("chunkid");
      const _ = 1e6;
      class _ {
        steamid;
        host;
        playback_position;
        playback_speed = 1;
        video_res;
        audio_rate;
        audio_ch;
        bw_avg;
        bw_required;
        broadcast_accountid;
        useragent;
        sessionid;
        broadcast_origin;
      }
      class _ extends _ {
        video_buffer;
        audio_buffer;
        seconds_delta;
        bytes_received;
        frames_dropped;
        frames_decoded;
        failed_segments;
        bw_min;
        bw_max;
        seg_time_avg;
        seg_time_min;
        seg_time_max;
        initial_vid_res;
        ttff;
        seg_duration;
      }
      class _ extends _ {
        last_segment_response;
        audio_stalled;
        active_downloads;
        vid_down_progress;
        segment_stalled;
        segment1_bytes;
        segment1_time;
        segment2_bytes;
        segment2_time;
        segment3_bytes;
        segment3_time;
      }
      class _ {
        m_steamIDBroadcast = "";
        m_steamIDViewer = "";
        m_broadcastID = "";
        m_ulViewerToken = "";
        m_strCDNAuthUrlParameters = void 0;
        m_host = "";
        m_strBroadcastOrigin = "";
        m_strStatsLink = "";
        m_strStalledLink = "";
        m_strEventLogLink = "";
        m_allTimeSnapshot = new _(0);
        m_rgSnapShots = new Array(new _(0));
        m_bAtLeastOneUserRepresentation = !1;
        m_videoResolution = 0;
        m_audioRate = 0;
        m_audioChannel = 0;
        m_strBufferingVideoResolution = "0x0@0";
        m_nPlaybackVideoResolution = 0;
        m_strPlaybackVideoResolution = "0x0";
        m_htmlVideoResolution = 0;
        m_strHtmlVideoDisplay = "";
        m_nAudioBandwidth = 0;
        m_nVideoBandwidth = 0;
        m_nBandwidthRequired = 0;
        m_nCurBandwidthVideo = 0;
        m_nAudioBufferedMS = 0;
        m_nVideoBufferedMS = 0;
        m_nActiveDownloads = 0;
        m_nVideoDownloadProgress = 0;
        m_videoBufferedRanges = null;
        m_audioBufferedRanges = null;
        m_nSegmentDurationMS = 0;
        m_nPlaybackRate = 0;
        m_nPerfTimeCreated = 0;
        m_nTimeToFirstFrameMS = -1;
        m_fpsMonitor = new _();
        constructor() {
          (0, _._)(this);
        }
        StartingPlayback() {
          this.m_nPerfTimeCreated = performance.now();
        }
        GetBytesReceivedToDisplay() {
          return (0, _._)(this.m_allTimeSnapshot.m_nBytesReceived, 1);
        }
        GetBufferingResolutionToDisplay() {
          return this.m_strBufferingVideoResolution;
        }
        GetPlaybackResolutionToDisplay() {
          return this.m_strPlaybackVideoResolution;
        }
        GetHTMLVideoResolutionToDisplay() {
          return this.m_strHtmlVideoDisplay;
        }
        GetDroppedFramesToDisplay() {
          return (
            this.m_allTimeSnapshot.m_nFramesDropped +
            "/" +
            this.m_allTimeSnapshot.m_nFramesDecoded
          );
        }
        GetStalledEventsToDisplay() {
          return String(this.m_allTimeSnapshot.m_nStallEvents);
        }
        GetFailedDownloadsToDisplay() {
          return String(this.m_allTimeSnapshot.m_nFailedSegments);
        }
        GetNumBufferedVideoRanges() {
          return this.m_videoBufferedRanges
            ? this.m_videoBufferedRanges.length
            : 0;
        }
        GetNumBufferedAudioRanges() {
          return this.m_audioBufferedRanges
            ? this.m_audioBufferedRanges.length
            : 0;
        }
        GetBufferedVideoSegmentForDisplay(_) {
          return this.m_videoBufferedRanges &&
            _ < this.m_videoBufferedRanges.length
            ? (0, _._)(this.m_videoBufferedRanges.start(_)) +
                " - " +
                (0, _._)(this.m_videoBufferedRanges.end(_))
            : (0, _._)("#DASHPlayerStats_VideoNoRangeInformation");
        }
        GetBufferedAudioSegmentForDisplay(_) {
          return this.m_audioBufferedRanges &&
            _ < this.m_audioBufferedRanges.length
            ? (0, _._)(this.m_audioBufferedRanges.start(_)) +
                " - " +
                (0, _._)(this.m_audioBufferedRanges.end(_))
            : (0, _._)("#DASHPlayerStats_AudioNoRangeInformation");
        }
        GetBandwidthStatsToDisplay() {
          if (this.m_rgSnapShots.length < 2)
            return (
              (this.m_allTimeSnapshot.m_nBandwidthMin / _).toFixed(3) +
              " / " +
              (this.m_allTimeSnapshot.m_nBandwidthMax / _).toFixed(3) +
              " / " +
              (this.m_allTimeSnapshot.GetAverageBandwidth() / _).toFixed(3)
            );
          {
            let _ = this.m_rgSnapShots[this.m_rgSnapShots.length - 2],
              _ = this.m_rgSnapShots[this.m_rgSnapShots.length - 1];
            return (
              (
                (0 == _.m_nBandwidthMin
                  ? _.m_nBandwidthMin
                  : Math.min(_.m_nBandwidthMin, _.m_nBandwidthMin)) / _
              ).toFixed(3) +
              " / " +
              (Math.max(_.m_nBandwidthMax, _.m_nBandwidthMax) / _).toFixed(3) +
              " / " +
              (_.GetAverageBandwidthFromTwo(_) / _).toFixed(3)
            );
          }
        }
        GetDownloadTimeStatsToDisplay() {
          if (this.m_rgSnapShots.length < 2)
            return (
              (
                this.m_allTimeSnapshot.m_nSegmentDownloadTimeMinMS / 1e3
              ).toFixed(3) +
              " / " +
              (
                this.m_allTimeSnapshot.m_nSegmentDownloadTimeMaxMS / 1e3
              ).toFixed(3) +
              " / " +
              (this.m_allTimeSnapshot.GetAverageDownloadTime() / 1e3).toFixed(3)
            );
          {
            let _ = this.m_rgSnapShots[this.m_rgSnapShots.length - 2],
              _ = this.m_rgSnapShots[this.m_rgSnapShots.length - 1];
            return (
              (
                (0 == _.m_nSegmentDownloadTimeMinMS
                  ? _.m_nSegmentDownloadTimeMinMS
                  : Math.min(
                      _.m_nSegmentDownloadTimeMinMS,
                      _.m_nSegmentDownloadTimeMinMS,
                    )) / 1e3
              ).toFixed(3) +
              " / " +
              (
                Math.max(
                  _.m_nSegmentDownloadTimeMaxMS,
                  _.m_nSegmentDownloadTimeMaxMS,
                ) / 1e3
              ).toFixed(3) +
              " / " +
              (_.GetAverageDownloadTimeFromTwo(_) / 1e3).toFixed(3)
            );
          }
        }
        BHasFrameInformation() {
          return this.m_allTimeSnapshot.m_nFramesDecoded > 0;
        }
        GetBandwidthRequiredToDisplay() {
          return (this.m_nBandwidthRequired / _).toFixed(3);
        }
        GetBandwithVideoToDisplay() {
          return (this.m_nCurBandwidthVideo / _).toFixed(3);
        }
        GetContentServerToDisplay() {
          return this.m_host;
        }
        GetVideoBufferedToDisplay() {
          return (this.m_nVideoBufferedMS / 1e3).toFixed(3);
        }
        GetAudioBufferedToDisplay() {
          return (this.m_nAudioBufferedMS / 1e3).toFixed(3);
        }
        GetActiveDownloadsToDisplay() {
          return String(this.m_nActiveDownloads);
        }
        GetVideoDownloadProgressToDisplay() {
          return this.m_nVideoDownloadProgress
            ? String(Math.round(100 * this.m_nVideoDownloadProgress)) + "%"
            : "100%";
        }
        GetTimeToFirstFrameToDisplay() {
          return -1 == this.m_nTimeToFirstFrameMS
            ? "Unknown"
            : String(this.m_nTimeToFirstFrameMS);
        }
        GetPersistentFrameDropsForDisplay() {
          return String(this.m_fpsMonitor.BIsDroppingFrames());
        }
        GetCurrentFPSForDisplay() {
          return this.m_fpsMonitor.BHasCurrentFPS()
            ? this.m_fpsMonitor.GetCurrentFPS().toFixed(1)
            : (0, _._)("#DASHPlayerStats_Tracking");
        }
        GetPlaybackRateForDisplay() {
          return this.m_nPlaybackRate.toFixed(1) + "x";
        }
        GetFPSMonitor() {
          return this.m_fpsMonitor;
        }
        SetHTMLVideoPlayerDisplay(_, _, _, _) {
          this.m_htmlVideoResolution != _ &&
            ((this.m_htmlVideoResolution = _),
            (this.m_strHtmlVideoDisplay = _ + "x" + _)),
            this.m_nPlaybackVideoResolution != _ &&
              ((this.m_nPlaybackVideoResolution = _),
              (this.m_strPlaybackVideoResolution = _ + "x" + _));
        }
        SetVideoPlaybackResolution(_, _, _) {
          0 == this.m_videoResolution &&
            ((this.m_allTimeSnapshot.m_nInitialVideoResolution = _),
            (this.m_rgSnapShots[
              this.m_rgSnapShots.length - 1
            ].m_nInitialVideoResolution = _)),
            (this.m_strBufferingVideoResolution = _ + "x" + _ + "@" + _),
            (this.m_videoResolution = _);
        }
        SetRepresentation(_) {
          if (_) {
            if (_.nAudioSamplingRate)
              (this.m_audioRate = Math.round(_.nBandwidth / 1e3)),
                (this.m_audioChannel = _.nAudioChannels),
                (this.m_nAudioBandwidth = _.nBandwidth);
            else if (_.nWidth) {
              let _ = _.nFrameRate || 0;
              this.SetVideoPlaybackResolution(_.nWidth, _.nHeight, _),
                (this.m_nVideoBandwidth = _.nBandwidth || 0);
            }
            this.m_nBandwidthRequired =
              this.m_nAudioBandwidth + this.m_nVideoBandwidth;
          }
        }
        MarkAtLeastOneUserRepresentation() {
          this.m_bAtLeastOneUserRepresentation = !0;
        }
        SetCurrentVideoBandwidth(_) {
          this.m_nCurBandwidthVideo = _;
        }
        SetSegmentDurationMS(_) {
          this.m_nSegmentDurationMS = _;
        }
        SetBroadcasterAndViewerInfo(_, _, _, _, _) {
          (this.m_steamIDBroadcast = _),
            (this.m_steamIDViewer = _),
            (this.m_broadcastID = _),
            (this.m_ulViewerToken = _),
            (this.m_strCDNAuthUrlParameters = _);
        }
        SetAnalyticLinks(_, _, _) {
          (this.m_strStatsLink = _),
            (this.m_strStalledLink = _),
            (this.m_strEventLogLink = _);
        }
        SetVideoInitializationURL(_) {
          let _ = new URL(_);
          (this.m_host = _.hostname),
            (this.m_strBroadcastOrigin =
              _.searchParams.get("broadcast_origin") || "");
          let _ = this.m_strBroadcastOrigin.indexOf(":");
          -1 !== _ &&
            (this.m_strBroadcastOrigin = this.m_strBroadcastOrigin.substr(
              0,
              _,
            ));
        }
        SetAudioRate(_) {
          this.m_audioRate = _;
        }
        CaptureFrequentlyUpdatingInformation(_, _) {
          let _ = this.ExtractFrameInfo(_);
          this.LogFrameInfo(_), this.LogBufferDuration(_, _);
        }
        LogDownload(_, _) {
          this.m_allTimeSnapshot.SegmentReceived(_, _),
            this.m_rgSnapShots[this.m_rgSnapShots.length - 1].SegmentReceived(
              _,
              _,
            );
        }
        LogSegmentDownloadFailure(_, _) {
          (this.m_allTimeSnapshot.m_nFailedSegments += 1),
            (this.m_rgSnapShots[
              this.m_rgSnapShots.length - 1
            ].m_nFailedSegments += 1),
            (this.m_allTimeSnapshot.m_nLastSegementDownloadStatus = _),
            (this.m_rgSnapShots[
              this.m_rgSnapShots.length - 1
            ].m_nLastSegementDownloadStatus = _),
            this.LogDownload(0, _);
        }
        LogVideoError(_) {}
        LogVideoOnCanPlay() {
          -1 === this.m_nTimeToFirstFrameMS &&
            (this.m_nTimeToFirstFrameMS = Math.ceil(
              performance.now() - this.m_nPerfTimeCreated,
            ));
        }
        LogErrorEvent(_, _) {}
        ReportVideoStalled(_, _) {
          if (
            ((this.m_allTimeSnapshot.m_nStallEvents += 1),
            0 == this.m_strStalledLink.length)
          )
            return;
          let _ = this.FindBehindSegmentLoader(_, _);
          if (!_)
            return void (0, _._)(
              "DASHStats: Did not find any audio or video loaders",
            );
          this.m_rgSnapShots[this.m_rgSnapShots.length - 1].m_nStallEvents += 1;
          let _ = new _();
          this.GatherCommonStats(
            _,
            _,
            __webpack_require__.GetBandwidthRequired(),
            __webpack_require__.GetAvgDownloadRate(),
          ),
            (_.last_segment_response =
              this.m_rgSnapShots[
                this.m_rgSnapShots.length - 1
              ].m_nLastSegementDownloadStatus),
            (_.audio_stalled = __webpack_require__.ContainsAudio()),
            this.CaptureActiveDownloads(_),
            (_.active_downloads = this.m_nActiveDownloads),
            (_.vid_down_progress = this.m_nVideoDownloadProgress);
          let _ = __webpack_require__.GetDownloadHistory(),
            _ = 0;
          for (let _ = _.length - 1; _ >= 0 && _ < 3; --_)
            ++_,
              (_["segment" + _ + "_bytes"] = _[_].cubData),
              (_["segment" + _ + "_time"] = Math.round(_[_].nDownloadMS) / 1e3);
          this.SendReportToServer(_, this.m_strStalledLink);
        }
        FindBehindSegmentLoader(_, _) {
          let _ = !1,
            _ = !1,
            _ = _.currentTime,
            _ = null,
            _ = null;
          for (let _ of _)
            (_ = _.ContainsAudio() ? _ : _),
              (_ = _.ContainsVideo() ? _ : _),
              _.BHasEnoughBuffered(_) &&
                ((_ = _ || _.ContainsAudio()), (_ = _ || _.ContainsVideo()));
          return (_ = _ || null == _), !_ || (_ && _) ? _ : _;
        }
        ExtractFrameInfo(_) {
          let _ = 0,
            _ = 0;
          if (_.getVideoPlaybackQuality)
            try {
              let _ = _.getVideoPlaybackQuality();
              (_ = _.totalVideoFrames), (_ = _.droppedVideoFrames);
            } catch (_) {
              (0, _._)(
                "Browser does not support HTMLVideoElement.getVideoPlaybackQuality()",
                _.message,
              );
            }
          else
            _.webkitDecodedFrames
              ? ((_ = _.webkitDecodedFrames), (_ = _.webkitDroppedFrames))
              : _.webkitDecodedFrameCount &&
                ((_ = _.webkitDecodedFrameCount),
                (_ = _.webkitDroppedFrameCount));
          return {
            framesDecoded: _,
            framesDropped: _,
          };
        }
        LogFrameInfo(_) {
          (this.m_allTimeSnapshot.m_nFramesDecoded = _.framesDecoded),
            (this.m_allTimeSnapshot.m_nFramesDropped = _.framesDropped);
          let _ = this.m_rgSnapShots[this.m_rgSnapShots.length - 1];
          if (1 == this.m_rgSnapShots.length)
            (_.m_nFramesDecoded = _.framesDecoded),
              (_.m_nFramesDropped = _.framesDropped);
          else {
            let _ = this.m_rgSnapShots[this.m_rgSnapShots.length - 2];
            (_.m_nFramesDecoded = _.framesDecoded - _.m_nFramesDecoded),
              (_.m_nFramesDropped = _.framesDropped - _.m_nFramesDropped);
          }
        }
        LogBufferDuration(_, _) {
          this.m_nActiveDownloads = 0;
          for (let _ of _)
            __webpack_require__.ContainsAudio()
              ? ((this.m_nAudioBufferedMS =
                  __webpack_require__.GetAmountBufferedMS(_.currentTime)),
                (this.m_audioBufferedRanges =
                  __webpack_require__.GetSourceBufferTimeRanges()))
              : __webpack_require__.ContainsVideo() &&
                ((this.m_nVideoBufferedMS =
                  __webpack_require__.GetAmountBufferedMS(_.currentTime)),
                (this.m_videoBufferedRanges =
                  __webpack_require__.GetSourceBufferTimeRanges())),
              (this.m_nActiveDownloads +=
                __webpack_require__.GetActiveDownloads()),
              __webpack_require__.ContainsVideo() &&
                (this.m_nVideoDownloadProgress =
                  __webpack_require__.GetActiveDownloadProgress());
          this.m_nPlaybackRate = _.playbackRate;
        }
        CaptureActiveDownloads(_) {
          this.m_nActiveDownloads = 0;
          for (let _ of _)
            (this.m_nActiveDownloads += _.GetActiveDownloads()),
              _.ContainsVideo() &&
                (this.m_nVideoDownloadProgress = _.GetActiveDownloadProgress());
        }
        ReportPlayerStats(_, _) {
          if (0 == this.m_strStatsLink.length) return;
          let _ = this.ExtractFrameInfo(_);
          if (
            _.framesDecoded == this.m_allTimeSnapshot.m_nFramesDecoded &&
            0 ==
              this.m_rgSnapShots[this.m_rgSnapShots.length - 1].m_nBytesReceived
          )
            return void this.CreateNewEmptySnapshot(_.videoHeight);
          this.LogFrameInfo(_), this.LogBufferDuration(_, _);
          let _ = new _(),
            _ = this.m_rgSnapShots[this.m_rgSnapShots.length - 1];
          (_.frames_decoded = _.m_nFramesDecoded),
            (_.frames_dropped = _.m_nFramesDropped),
            (_.bytes_received = _.m_nBytesReceived),
            (_.seconds_delta = Math.round((Date.now() - _.m_timeMS) / 1e3)),
            (_.failed_segments = _.m_nFailedSegments),
            (_.bw_min = _.m_nBandwidthMin),
            (_.bw_max = _.m_nBandwidthMax),
            (_.audio_buffer = Math.round(this.m_nAudioBufferedMS / 1e3)),
            (_.video_buffer = Math.round(this.m_nVideoBufferedMS / 1e3)),
            (_.seg_time_avg = Math.round(_.GetAverageDownloadTime()) / 1e3),
            (_.seg_time_min = Math.round(_.m_nSegmentDownloadTimeMinMS) / 1e3),
            (_.seg_time_max = Math.round(_.m_nSegmentDownloadTimeMaxMS) / 1e3),
            (_.initial_vid_res = _.m_nInitialVideoResolution),
            (_.ttff = this.m_nTimeToFirstFrameMS),
            (_.seg_duration = this.m_nSegmentDurationMS),
            this.GatherCommonStats(
              _,
              _,
              this.m_nBandwidthRequired,
              _.GetAverageBandwidth(),
            ),
            this.CreateNewEmptySnapshot(_.videoHeight),
            this.SendReportToServer(_, this.m_strStatsLink);
        }
        GetPlayerStatsSummary() {
          return {
            nTimeToFirstFrameMS:
              this.m_nTimeToFirstFrameMS > 0 ? this.m_nTimeToFirstFrameMS : 0,
            nBytesReceived: this.m_allTimeSnapshot.m_nBytesReceived,
            nAvgBandwidthBitSec: Math.round(
              this.m_allTimeSnapshot.GetAverageBandwidth(),
            ),
            nAvgSegmentDownloadMS: Math.ceil(
              this.m_allTimeSnapshot.GetAverageDownloadTime(),
            ),
            nFailedSegmentDownloads: this.m_allTimeSnapshot.m_nFailedSegments,
            nPlaybackStalls: this.m_allTimeSnapshot.m_nStallEvents,
            nFramesDropped: this.m_allTimeSnapshot.m_nFramesDropped,
            nLastVideoHeight: this.m_videoResolution,
            bUserSelectedRepresentation: this.m_bAtLeastOneUserRepresentation,
          };
        }
        async SendReportToServer(_, _) {
          let _ = new URL(_),
            _ = new FormData();
          for (let _ of Object.keys(_)) _.append(_, _[_]);
          _.append("l", _.searchParams.get("l")),
            _.append("e", _.searchParams.get("e")),
            _.append("h", _.searchParams.get("h")),
            (0, _._)("CDASHStats Sending Report to Server", _),
            _()
              .post(_, _)
              .catch((_) => {
                (0, _._)("Failed to upload stats: ", _);
              });
        }
        CreateNewEmptySnapshot(_) {
          this.m_rgSnapShots.length >= 5 && this.m_rgSnapShots.shift(),
            this.m_rgSnapShots.push(new _(_));
        }
        GatherCommonStats(_, _, _, _) {
          (_.steamid = this.m_steamIDViewer),
            (_.host = this.m_host),
            (_.playback_position = Math.round(_.currentTime)),
            (_.video_res = this.m_videoResolution),
            (_.audio_rate = this.m_audioRate),
            (_.audio_ch = this.m_audioChannel),
            (_.bw_required = _),
            (_.bw_avg = Math.round(_)),
            (_.broadcast_accountid = this.m_steamIDBroadcast
              ? new _._(this.m_steamIDBroadcast).GetAccountID()
              : 0),
            (_.useragent = window.navigator.userAgent),
            (_.sessionid = _._.SESSIONID),
            (_.broadcast_origin = this.m_strBroadcastOrigin);
        }
      }
      (0, _._)([_._], _.prototype, "m_allTimeSnapshot", void 0),
        (0, _._)([_._], _.prototype, "m_strBufferingVideoResolution", void 0),
        (0, _._)([_._], _.prototype, "m_strPlaybackVideoResolution", void 0),
        (0, _._)([_._], _.prototype, "m_strHtmlVideoDisplay", void 0),
        (0, _._)([_._], _.prototype, "m_nBandwidthRequired", void 0),
        (0, _._)([_._], _.prototype, "m_nCurBandwidthVideo", void 0),
        (0, _._)([_._], _.prototype, "m_nAudioBufferedMS", void 0),
        (0, _._)([_._], _.prototype, "m_nVideoBufferedMS", void 0),
        (0, _._)([_._], _.prototype, "m_nActiveDownloads", void 0),
        (0, _._)([_._], _.prototype, "m_nVideoDownloadProgress", void 0),
        (0, _._)([_._], _.prototype, "m_videoBufferedRanges", void 0),
        (0, _._)([_._], _.prototype, "m_audioBufferedRanges", void 0),
        (0, _._)([_._], _.prototype, "m_nPlaybackRate", void 0),
        (0, _._)([_._], _.prototype, "SetVideoPlaybackResolution", null),
        (0, _._)([_._], _.prototype, "SetRepresentation", null),
        (0, _._)([_._], _.prototype, "SetCurrentVideoBandwidth", null),
        (0, _._)(
          [_._],
          _.prototype,
          "CaptureFrequentlyUpdatingInformation",
          null,
        ),
        (0, _._)([_._], _.prototype, "LogDownload", null),
        (0, _._)([_._], _.prototype, "LogSegmentDownloadFailure", null),
        (0, _._)([_._], _.prototype, "LogFrameInfo", null),
        (0, _._)([_._], _.prototype, "LogBufferDuration", null);
      class _ {
        m_timeMS = Date.now();
        m_nBytesReceived = 0;
        m_nInitialVideoResolution = 0;
        m_nFailedSegments = 0;
        m_nStallEvents = 0;
        m_nEntries = 0;
        m_nSegmentDownloadTimeTotalMS = 0;
        m_nSegmentDownloadTimeMaxMS = 0;
        m_nSegmentDownloadTimeMinMS = 0;
        m_nBandwidthTotal = 0;
        m_nBandwidthMin = 0;
        m_nBandwidthMax = 0;
        m_nLastSegementDownloadStatus = 200;
        m_nFramesDecoded = 0;
        m_nFramesDropped = 0;
        constructor(_) {
          (0, _._)(this), (this.m_nInitialVideoResolution = _);
        }
        GetAverageBandwidth() {
          return this.m_nBandwidthTotal / Math.max(1, this.m_nEntries);
        }
        GetAverageDownloadTime() {
          return (
            this.m_nSegmentDownloadTimeTotalMS / Math.max(1, this.m_nEntries)
          );
        }
        GetAverageBandwidthFromTwo(_) {
          return (
            (_.m_nBandwidthTotal + this.m_nBandwidthTotal) /
            Math.max(1, _.m_nEntries + this.m_nEntries)
          );
        }
        GetAverageDownloadTimeFromTwo(_) {
          return (
            (_.m_nSegmentDownloadTimeTotalMS +
              this.m_nSegmentDownloadTimeTotalMS) /
            Math.max(1, _.m_nEntries + this.m_nEntries)
          );
        }
        SegmentReceived(_, _) {
          if (((this.m_nBytesReceived += _), _ < 1024)) return;
          let _ = Math.round((8 * _ * 1e3) / Math.max(_, 1));
          0 == this.m_nEntries
            ? ((this.m_nSegmentDownloadTimeMinMS = _),
              (this.m_nBandwidthMin = _))
            : ((this.m_nSegmentDownloadTimeMinMS = Math.min(
                _,
                this.m_nSegmentDownloadTimeMinMS,
              )),
              (this.m_nBandwidthMin = Math.min(_, this.m_nBandwidthMin))),
            (this.m_nBandwidthMax = Math.max(_, this.m_nBandwidthMax)),
            (this.m_nSegmentDownloadTimeMaxMS = Math.max(
              _,
              this.m_nSegmentDownloadTimeMaxMS,
            )),
            (this.m_nBandwidthTotal += _),
            (this.m_nSegmentDownloadTimeTotalMS += _),
            (this.m_nEntries += 1);
        }
      }
      (0, _._)([_._], _.prototype, "m_nBytesReceived", void 0),
        (0, _._)([_._], _.prototype, "m_nFailedSegments", void 0),
        (0, _._)([_._], _.prototype, "m_nStallEvents", void 0),
        (0, _._)([_._], _.prototype, "m_nSegmentDownloadTimeMaxMS", void 0),
        (0, _._)([_._], _.prototype, "m_nSegmentDownloadTimeMinMS", void 0),
        (0, _._)([_._], _.prototype, "m_nBandwidthMin", void 0),
        (0, _._)([_._], _.prototype, "m_nBandwidthMax", void 0),
        (0, _._)([_._], _.prototype, "m_nFramesDecoded", void 0),
        (0, _._)([_._], _.prototype, "m_nFramesDropped", void 0),
        (0, _._)([_._], _.prototype, "SegmentReceived", null);
      class _ {
        bDropReading;
        nTotalDecodedFrames;
        reset(_, _) {
          (this.bDropReading = _), (this.nTotalDecodedFrames = _);
        }
      }
      class _ {
        constructor() {
          (0, _._)(this);
        }
        k_nTestFrequencyMS = 1e3;
        k_nSlidingWindow = 6;
        k_nDroppedFramesThreshold = 1;
        k_nFailThreshold = 3;
        k_nIgnoreReadingAroundResizeMS = 2e3;
        m_schTracker = new _._();
        m_rgResultsWindow = [];
        m_nLastResizeMS = 0;
        m_lastFrameInfo;
        m_bDroppingFrameDetected = !1;
        m_nCurrentFPS = 0;
        m_fnRequestDecoded;
        StartTracking(_) {
          this.m_schTracker.Schedule(this.k_nTestFrequencyMS, this.TakeReading),
            (this.m_fnRequestDecoded = _),
            (this.m_lastFrameInfo = this.m_fnRequestDecoded()),
            (this.m_bDroppingFrameDetected = !1);
        }
        BHasCurrentFPS() {
          return 0 != this.m_nCurrentFPS;
        }
        GetCurrentFPS() {
          return this.m_nCurrentFPS;
        }
        BIsDroppingFrames() {
          return this.m_bDroppingFrameDetected;
        }
        SetWindowResized() {
          this.m_nLastResizeMS = Date.now();
        }
        BIsInResizeTimeWindow() {
          return (
            this.m_nLastResizeMS &&
            Date.now() - this.m_nLastResizeMS <
              this.k_nIgnoreReadingAroundResizeMS
          );
        }
        Close() {
          this.m_schTracker.Cancel(),
            (this.m_rgResultsWindow = []),
            (this.m_bDroppingFrameDetected = !1);
        }
        LogResizeAction() {
          this.m_nLastResizeMS = Date.now();
        }
        TakeReading() {
          this.m_schTracker.Schedule(this.k_nTestFrequencyMS, this.TakeReading);
          let _ = !1,
            _ = this.m_fnRequestDecoded();
          this.BIsInResizeTimeWindow() ||
            (_ =
              this.m_lastFrameInfo.framesDropped > 0 &&
              _.framesDropped - this.m_lastFrameInfo.framesDropped >
                this.k_nDroppedFramesThreshold),
            this.AppendReading(_, _.framesDecoded),
            (this.m_bDroppingFrameDetected = this.ComputeDroppingFrames()),
            (this.m_nCurrentFPS =
              _.framesDecoded -
              this.m_lastFrameInfo.framesDecoded -
              (_.framesDropped - this.m_lastFrameInfo.framesDropped)),
            (this.m_lastFrameInfo = _);
        }
        ComputeDroppingFrames() {
          return (
            this.m_rgResultsWindow.length == this.k_nSlidingWindow &&
            this.m_rgResultsWindow.filter((_) => _.bDropReading).length >=
              this.k_nFailThreshold
          );
        }
        AppendReading(_, _) {
          let _;
          (_ =
            this.m_rgResultsWindow.length >= this.k_nSlidingWindow
              ? this.m_rgResultsWindow.shift()
              : new _()),
            __webpack_require__.reset(_, _),
            this.m_rgResultsWindow.push(_);
        }
      }
      (0, _._)([_._], _.prototype, "m_bDroppingFrameDetected", void 0),
        (0, _._)([_._], _.prototype, "m_nCurrentFPS", void 0),
        (0, _._)([_._.bound], _.prototype, "TakeReading", null);
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
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        return _.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ..._,
          },
          _.createElement("path", {
            fill: "currentColor",
            _: "M5.48744 28.293V31.3988H35V9.65272H31.8924V28.293H5.48744Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M1 4V24.7106H28.6141V4H1ZM6.17764 22.1217H3.58882V18.67H6.17764V22.1217ZM6.17764 16.0812H3.58882V12.6294H6.17764V16.0812ZM6.17764 10.0406H3.58882V6.58882H6.17764V10.0406ZM11.3553 19.3345V9.37612L19.9847 14.3553L11.3553 19.3345ZM26.0253 22.1217H23.4365V18.67H26.0253V22.1217ZM26.0253 16.0812H23.4365V12.6294H26.0253V16.0812ZM26.0253 10.0406H23.4365V6.58882H26.0253V10.0406Z",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ..._,
          },
          _.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            _: "M18 4L3 30H33L18 4ZM21.025 12.9375L20.0167 21.0625H15.9833L14.975 12.9375H21.025ZM18 27.5625C17.5055 27.5625 17.0222 27.4195 16.6111 27.1517C16.2 26.8839 15.8795 26.5032 15.6903 26.0578C15.5011 25.6124 15.4516 25.1223 15.548 24.6495C15.6445 24.1766 15.8826 23.7423 16.2322 23.4014C16.5819 23.0605 17.0273 22.8284 17.5123 22.7343C17.9972 22.6403 18.4999 22.6886 18.9567 22.873C19.4135 23.0575 19.804 23.37 20.0787 23.7708C20.3534 24.1716 20.5 24.6429 20.5 25.125C20.5 25.7715 20.2366 26.3915 19.7678 26.8486C19.2989 27.3057 18.663 27.5625 18 27.5625Z",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ..._,
          },
          _.createElement("path", {
            fill: "currentColor",
            _: "M14.8423 5.23802H8.25602C8.06408 5.23802 7.8781 5.334 7.76408 5.48998L3.89928 11H10.0685L14.8423 5.23802Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M3.66016 13.5L14.8423 28.8125L9.68747 13.5H3.66016Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M12.1675 13.5L17.4301 30.33C17.4339 30.3454 17.4403 30.3559 17.4475 30.3678L17.4527 30.3763L17.4574 30.3847L17.4601 30.39C17.4661 30.4139 17.478 30.4379 17.4961 30.4619C17.5201 30.504 17.5501 30.54 17.5801 30.57L17.6341 30.624C17.6882 30.666 17.7541 30.7019 17.8201 30.726C17.8623 30.7365 17.9044 30.7424 17.9424 30.7478L17.9582 30.75H17.9941L18.0001 30.756C18.0031 30.756 18.0046 30.7545 18.0061 30.753C18.0076 30.7515 18.0091 30.75 18.0121 30.75H18.0361C18.0841 30.75 18.1321 30.744 18.1801 30.726H18.1861C18.2521 30.702 18.318 30.666 18.3721 30.624C18.3811 30.615 18.3886 30.606 18.3961 30.597C18.4036 30.588 18.4111 30.579 18.4201 30.57C18.4561 30.54 18.4861 30.5039 18.5101 30.4619L18.5461 30.39C18.5491 30.378 18.5551 30.369 18.5611 30.36C18.5671 30.351 18.5731 30.342 18.5761 30.33L19.3385 27.889L19.3262 27.8851L21.4894 21.0028L23.8329 13.5L12.1675 13.5Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M20.875 28.8125L32.346 13.5H26.3313L20.875 28.8125Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M32.1009 11L28.236 5.48993C28.1221 5.33395 27.9421 5.23798 27.7441 5.23798H21.0513L25.8251 11H32.1009Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M23.076 11L18.4622 5.45398C18.4562 5.448 18.4487 5.44199 18.4412 5.43599C18.4338 5.42998 18.4262 5.42397 18.4203 5.418C18.4157 5.41341 18.412 5.40792 18.4081 5.40222C18.4019 5.39309 18.3954 5.38341 18.3843 5.37605C18.3753 5.37007 18.3663 5.36556 18.3573 5.36105C18.3483 5.35654 18.3393 5.35202 18.3303 5.34605C18.2949 5.32248 18.2596 5.30479 18.2243 5.28709L18.2222 5.28605L18.2195 5.28515C18.1843 5.27349 18.1492 5.26187 18.1142 5.25605C18.0782 5.25007 18.0421 5.24409 18.0002 5.24409C17.9641 5.24409 17.9281 5.25007 17.8921 5.25605C17.85 5.26202 17.8141 5.27398 17.7781 5.29202C17.7421 5.3041 17.7121 5.32202 17.6761 5.34605C17.6671 5.35202 17.6566 5.35654 17.6461 5.36105C17.6356 5.36556 17.6252 5.37007 17.6161 5.37605C17.6102 5.38202 17.6056 5.38952 17.6011 5.39702C17.5966 5.40452 17.5921 5.41203 17.5861 5.418C17.5811 5.42132 17.5761 5.42418 17.5712 5.42696C17.5585 5.4342 17.5467 5.44094 17.5381 5.45398L12.9293 11H23.076Z",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            _: "M18 33C18 33 29 20.5586 29 14.3115C29 8.06432 24.0751 3 18 3C11.9249 3 7 8.06432 7 14.3115C7 20.5586 18 33 18 33ZM18 20C21.3137 20 24 17.3137 24 14C24 10.6863 21.3137 8 18 8C14.6863 8 12 10.6863 12 14C12 17.3137 14.6863 20 18 20Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M30 30.05H26L24 34.05L20.11 27.57L22.9 24.87L26.9 24.81L30 30.05ZM13.1 24.87L9.1 24.81L6 30.05H10L12 34.05L15.89 27.57L13.1 24.87ZM22.5 13.05C22.5 12.16 22.2361 11.2899 21.7416 10.5499C21.2471 9.8099 20.5443 9.23312 19.7221 8.89253C18.8998 8.55194 17.995 8.46282 17.1221 8.63645C16.2492 8.81009 15.4474 9.23867 14.818 9.86801C14.1887 10.4973 13.7601 11.2992 13.5865 12.1721C13.4128 13.045 13.5019 13.9498 13.8425 14.7721C14.1831 15.5943 14.7599 16.2971 15.4999 16.7916C16.24 17.2861 17.11 17.55 18 17.55C18.5913 17.5513 19.1771 17.4358 19.7236 17.2101C20.2702 16.9845 20.7668 16.653 21.1849 16.2349C21.603 15.8168 21.9345 15.3202 22.1601 14.7736C22.3858 14.2271 22.5013 13.6413 22.5 13.05ZM29 13.05L25.85 16.3L25.78 20.83L21.25 20.9L18 24.05L14.75 20.9L10.22 20.83L10.15 16.3L7 13.05L10.15 9.79999L10.22 5.26999L14.75 5.19999L18 2.04999L21.25 5.19999L25.78 5.26999L25.85 9.79999L29 13.05Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            _: "M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3V3ZM20.5 26H15.5V16H20.5V26ZM18 14C17.4067 14 16.8266 13.8241 16.3333 13.4944C15.8399 13.1648 15.4554 12.6962 15.2284 12.1481C15.0013 11.5999 14.9419 10.9967 15.0577 10.4147C15.1734 9.83279 15.4591 9.29824 15.8787 8.87868C16.2982 8.45912 16.8328 8.1734 17.4147 8.05764C17.9967 7.94189 18.5999 8.0013 19.1481 8.22836C19.6962 8.45542 20.1648 8.83994 20.4944 9.33329C20.8241 9.82664 21 10.4067 21 11C21 11.7956 20.6839 12.5587 20.1213 13.1213C19.5587 13.6839 18.7957 14 18 14V14Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M12.34 33.73L16 20H8L24 2L21 15H29L12.34 33.73Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            _: "M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33ZM7 19.9L14.9188 28L29 13.57L25.5017 10L14.9188 20.845L10.4983 16.315L7 19.9Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M27.2344 6L13.8123 20.0948L7.76561 13.77L3 18.7086L13.8123 30L32 10.9386L27.2344 6Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M14.5 7L17.2 15.37C17.5375 16.5175 18.4825 17.395 19.63 17.8L28 20.5L19.63 23.2C18.4825 23.5375 17.605 24.4825 17.2 25.63L14.5 34L11.8 25.63C11.4625 24.4825 10.5175 23.605 9.37 23.2L1 20.5L9.37 17.8C10.5175 17.4625 11.395 16.5175 11.8 15.37L14.5 7Z",
            fill: "currentColor",
          }),
          _.createElement("path", {
            _: "M24.9231 2L26.3077 6.33599C26.4923 6.94209 26.9538 7.40833 27.5538 7.59482L31.8462 8.99353L27.5538 10.3922C26.9538 10.5787 26.4923 11.045 26.3077 11.6511L24.9231 15.9871L23.5385 11.6511C23.3538 11.045 22.8923 10.5787 22.2923 10.3922L18 8.99353L22.2923 7.59482C22.8923 7.40833 23.3538 6.94209 23.5385 6.33599L24.9231 2Z",
            fill: "currentColor",
          }),
          _.createElement("path", {
            _: "M7.46154 3L8.15385 5.1913C8.24615 5.47105 8.47692 5.70416 8.75384 5.79741L10.9231 6.49676L8.75384 7.19611C8.47692 7.28936 8.24615 7.52248 8.15385 7.80222L7.46154 9.99352L6.76923 7.80222C6.67692 7.52248 6.44615 7.28936 6.16923 7.19611L4 6.49676L6.16923 5.79741C6.44615 5.70416 6.67692 5.47105 6.76923 5.1913L7.46154 3Z",
            fill: "currentColor",
          }),
          _.createElement("path", {
            _: "M31.4615 12L32.1538 14.1913C32.2462 14.471 32.4769 14.7042 32.7538 14.7974L34.9231 15.4968L32.7538 16.1961C32.4769 16.2894 32.2462 16.5225 32.1538 16.8022L31.4615 18.9935L30.7692 16.8022C30.6769 16.5225 30.4462 16.2894 30.1692 16.1961L28 15.4968L30.1692 14.7974C30.4462 14.7042 30.6769 14.471 30.7692 14.1913L31.4615 12Z",
            fill: "currentColor",
          }),
          _.createElement("path", {
            _: "M26.4615 25L27.1538 27.1913C27.2462 27.471 27.4769 27.7042 27.7538 27.7974L29.9231 28.4968L27.7538 29.1961C27.4769 29.2894 27.2462 29.5225 27.1538 29.8022L26.4615 31.9935L25.7692 29.8022C25.6769 29.5225 25.4462 29.2894 25.1692 29.1961L23 28.4968L25.1692 27.7974C25.4462 27.7042 25.6769 27.471 25.7692 27.1913L26.4615 25Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            _: "M33.78 19.22L19.22 33.78L4 18.56V4H18.56L33.78 19.22Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M26 24.5V36L18 33L10 36V24.5L12 24.56C12.4845 24.5765 12.9464 24.7684 13.3 25.1L16.59 28.2C16.9609 28.5488 17.4509 28.7429 17.96 28.7429C18.4691 28.7429 18.9591 28.5488 19.33 28.2L22.62 25.1C22.9736 24.7684 23.4355 24.5765 23.92 24.56L26 24.5ZM30 12L28.2 13.91C27.1867 14.9805 26.6029 16.3866 26.56 17.86L26.49 20.49L23.86 20.56C22.3866 20.6029 20.9805 21.1867 19.91 22.2L18 24L16.09 22.2C15.0195 21.1867 13.6134 20.6029 12.14 20.56L9.51 20.49L9.44 17.86C9.3971 16.3866 8.81331 14.9805 7.8 13.91L6 12L7.8 10.09C8.81331 9.01949 9.3971 7.61342 9.44 6.14L9.51 3.51L12.14 3.44C13.6134 3.3971 15.0195 2.81331 16.09 1.8L18 0L19.91 1.8C20.9805 2.81331 22.3866 3.3971 23.86 3.44L26.49 3.51L26.56 6.14C26.5906 7.6308 27.1753 9.05677 28.2 10.14L30 12ZM23 12C23 11.0111 22.7068 10.0444 22.1573 9.22215C21.6079 8.3999 20.827 7.75904 19.9134 7.3806C18.9998 7.00216 17.9945 6.90315 17.0245 7.09607C16.0546 7.289 15.1637 7.7652 14.4645 8.46447C13.7652 9.16373 13.289 10.0546 13.0961 11.0245C12.9031 11.9945 13.0022 12.9998 13.3806 13.9134C13.759 14.827 14.3999 15.6079 15.2221 16.1573C16.0444 16.7068 17.0111 17 18 17C18.6566 17 19.3068 16.8707 19.9134 16.6194C20.52 16.3681 21.0712 15.9998 21.5355 15.5355C21.9998 15.0712 22.3681 14.52 22.6194 13.9134C22.8707 13.3068 23 12.6566 23 12Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M8.22 33.93C9.00446 33.7747 9.71061 33.3517 10.2177 32.7334C10.7248 32.115 11.0013 31.3397 11 30.54V25H28V4H4V30.83C4.00192 31.3 4.11422 31.7629 4.32787 32.1815C4.54152 32.6002 4.85053 32.9627 5.23 33.24C5.65215 33.5582 6.13651 33.7841 6.65162 33.903C7.16674 34.0218 7.7011 34.0311 8.22 33.93Z",
            fill: "currentColor",
          }),
          _.createElement("path", {
            _: "M14 30.54C13.9892 31.7631 13.6434 32.9598 13 34H30.7C33.42 34 34 32 34 30.25V28H14V30.54Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M32 30L34 7L25.32 13.41L18 4L10.68 13.41L2 7L4 30H32Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M17.9997 6.16803L22.2873 2L23.9155 7.75347L29.7123 6.287L28.2465 12.0838L34 13.7127L29.8313 17.9997L34 22.2873L28.2465 23.9155L29.7123 29.7123L23.9155 28.2465L22.2873 34L17.9997 29.8313L13.7127 34L12.0838 28.2465L6.287 29.7123L7.75347 23.9155L2 22.2873L6.16803 17.9997L2 13.7127L7.75347 12.0838L6.287 6.287L12.0838 7.75347L13.7127 2L17.9997 6.16803Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M32 3.83C20 6.44 13.86 -1.37 6 3.83V32H10V17.8C16.19 16.66 22.11 21.6 32 19.45L28.27 11.64L32 3.83Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M33.63 8.04999L30.11 20.81C29.9416 21.453 29.5645 22.0218 29.0378 22.4273C28.5111 22.8327 27.8647 23.0517 27.2 23.05H14.75C14.1022 23.0506 13.4715 22.8415 12.9524 22.454C12.4333 22.0664 12.0536 21.5213 11.87 20.9L7.56 8.04999H2V4.04999H8.28C8.90845 4.05116 9.52067 4.24967 10.0302 4.61749C10.5398 4.98532 10.921 5.50388 11.12 6.09999L11.78 8.09999L33.63 8.04999ZM15 27.05C14.5055 27.05 14.0222 27.1966 13.6111 27.4713C13.2 27.746 12.8795 28.1365 12.6903 28.5933C12.5011 29.0501 12.4516 29.5528 12.548 30.0377C12.6445 30.5227 12.8826 30.9681 13.2322 31.3178C13.5819 31.6674 14.0273 31.9055 14.5123 32.002C14.9972 32.0984 15.4999 32.0489 15.9567 31.8597C16.4135 31.6705 16.804 31.35 17.0787 30.9389C17.3534 30.5278 17.5 30.0444 17.5 29.55C17.5 28.8869 17.2366 28.2511 16.7678 27.7822C16.2989 27.3134 15.663 27.05 15 27.05ZM27 27.05C26.5055 27.05 26.0222 27.1966 25.6111 27.4713C25.2 27.746 24.8795 28.1365 24.6903 28.5933C24.5011 29.0501 24.4516 29.5528 24.548 30.0377C24.6445 30.5227 24.8826 30.9681 25.2322 31.3178C25.5819 31.6674 26.0273 31.9055 26.5123 32.002C26.9972 32.0984 27.4999 32.0489 27.9567 31.8597C28.4135 31.6705 28.804 31.35 29.0787 30.9389C29.3534 30.5278 29.5 30.0444 29.5 29.55C29.5 28.8869 29.2366 28.2511 28.7678 27.7822C28.2989 27.3134 27.663 27.05 27 27.05Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M20 11.85V17L23.41 20.42L20.59 23.24L16 18.68V11.85H20ZM29 18.43C28.9612 19.5207 28.7589 20.5994 28.4 21.63L32.16 23C32.6583 21.5767 32.9414 20.0869 33 18.58L29 18.43ZM28.68 15.33L32.56 14.33C32.1998 12.8866 31.6268 11.5048 30.86 10.23L27.44 12.3C28.0013 13.2418 28.416 14.2635 28.67 15.33H28.68ZM28.09 6.90001C27.011 5.91173 25.7909 5.08941 24.47 4.46001L22.74 8.07C23.7087 8.53467 24.6047 9.13764 25.4 9.86L28.09 6.90001ZM26.93 24.42C25.8301 25.9503 24.3555 27.1724 22.6475 27.969C20.9396 28.7656 19.0557 29.11 17.1764 28.9693C15.297 28.8285 13.4854 28.2073 11.9152 27.1652C10.3449 26.1231 9.06879 24.6951 8.20908 23.018C7.34937 21.3409 6.93495 19.4711 7.00556 17.5879C7.07616 15.7046 7.62943 13.8711 8.61229 12.2631C9.59516 10.6552 10.9747 9.32667 12.6185 8.40506C14.2624 7.48345 16.1154 6.99963 18 7.00001C18.5659 6.99777 19.1311 7.04124 19.69 7.13001L20.3 3.18001C19.5393 3.05968 18.7702 2.99949 18 3.00001C15.527 2.99797 13.0918 3.60743 10.9112 4.77411C8.7307 5.9408 6.87245 7.62852 5.5019 9.68704C4.13134 11.7456 3.29102 14.111 3.05572 16.5728C2.82043 19.0347 3.19746 21.5165 4.15326 23.7973C5.10906 26.0782 6.61398 28.0874 8.53404 29.646C10.4541 31.2046 12.7297 32.2643 15.1584 32.7308C17.587 33.1972 20.0933 33.056 22.4542 32.3196C24.8151 31.5832 26.9572 30.2745 28.69 28.51V28.51L28.77 28.43L28.82 28.38C29.3109 27.8727 29.7654 27.3313 30.18 26.76L26.93 24.42Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            _: "M2 6V27H12L18 34L24 27H34V6H2ZM9.5 19C9.00555 19 8.5222 18.8534 8.11107 18.5787C7.69995 18.304 7.37952 17.9135 7.1903 17.4567C7.00108 16.9999 6.95157 16.4972 7.04804 16.0123C7.1445 15.5273 7.3826 15.0819 7.73223 14.7322C8.08186 14.3826 8.52732 14.1445 9.01227 14.048C9.49723 13.9516 9.99989 14.0011 10.4567 14.1903C10.9135 14.3795 11.304 14.7 11.5787 15.1111C11.8534 15.5222 12 16.0055 12 16.5C12 16.8283 11.9353 17.1534 11.8097 17.4567C11.6841 17.76 11.4999 18.0356 11.2678 18.2678C11.0356 18.4999 10.76 18.6841 10.4567 18.8097C10.1534 18.9353 9.8283 19 9.5 19ZM18 19C17.5055 19 17.0222 18.8534 16.6111 18.5787C16.2 18.304 15.8795 17.9135 15.6903 17.4567C15.5011 16.9999 15.4516 16.4972 15.548 16.0123C15.6445 15.5273 15.8826 15.0819 16.2322 14.7322C16.5819 14.3826 17.0273 14.1445 17.5123 14.048C17.9972 13.9516 18.4999 14.0011 18.9567 14.1903C19.4135 14.3795 19.804 14.7 20.0787 15.1111C20.3534 15.5222 20.5 16.0055 20.5 16.5C20.5 16.8283 20.4353 17.1534 20.3097 17.4567C20.1841 17.76 19.9999 18.0356 19.7678 18.2678C19.5356 18.4999 19.26 18.6841 18.9567 18.8097C18.6534 18.9353 18.3283 19 18 19ZM26.5 19C26.0055 19 25.5222 18.8534 25.1111 18.5787C24.7 18.304 24.3795 17.9135 24.1903 17.4567C24.0011 16.9999 23.9516 16.4972 24.048 16.0123C24.1445 15.5273 24.3826 15.0819 24.7322 14.7322C25.0819 14.3826 25.5273 14.1445 26.0123 14.048C26.4972 13.9516 26.9999 14.0011 27.4567 14.1903C27.9135 14.3795 28.304 14.7 28.5787 15.1111C28.8534 15.5222 29 16.0055 29 16.5C29 17.163 28.7366 17.7989 28.2678 18.2678C27.7989 18.7366 27.163 19 26.5 19Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M3 27.6503L13.8393 16.7238C12.5466 13.3983 13.2648 9.49449 15.9937 6.74736C18.8662 3.85564 23.175 3.2773 26.6221 4.86774L19.7308 11.8003L24.0396 16.1379L31.0745 9.20532C32.798 12.6754 32.0799 17.013 29.2074 19.9047C26.4784 22.6518 22.6005 23.3747 19.2971 22.0735L8.45782 33L3 27.6503Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M9.99999 4H22V16H18.06V10.73L5.38999 23.39L2.60999 20.61L15.27 7.94H9.99999V4ZM26 28.06H20.73L33.39 15.39L30.61 12.61L17.94 25.27V20H14V32H26V28.06Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M28.1684 2.16431L23.5793 6.75343L29.2362 12.4103L33.8253 7.82116L28.1684 2.16431Z",
            fill: "currentColor",
          }),
          _.createElement("path", {
            _: "M20.76 9.58999L5.67 24.67L4 32L11.33 30.33L26.41 15.24L20.76 9.58999Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M30 35L18 28L6 35V2H30V35Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3V3ZM7.00001 18C7.00169 15.7749 7.67812 13.6027 8.94001 11.77L24.23 27.06C22.5787 28.1948 20.6488 28.857 18.6486 28.9752C16.6484 29.0933 14.654 28.6629 12.8805 27.7304C11.1071 26.7978 9.62204 25.3986 8.58569 23.6838C7.54934 21.969 7.00105 20.0037 7.00001 18V18ZM27.06 24.23L11.77 8.94C13.8875 7.49109 16.4449 6.82796 18.9996 7.06536C21.5544 7.30275 23.9457 8.42573 25.76 10.24C27.5743 12.0543 28.6973 14.4457 28.9347 17.0004C29.172 19.5551 28.5089 22.1125 27.06 24.23V24.23Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M18 0L22.888 11.2722L35.119 12.4377L25.909 20.5698L28.5801 32.5623L18 26.316L7.41987 32.5623L10.091 20.5698L0.880983 12.4377L13.112 11.2722L18 0Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            _: "M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("rect", {
            _: "4",
            _: "4",
            width: "28",
            height: "28",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            _: "M18 1L1 31.2222H35L18 1Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M31.4799 6.31003C30.7506 5.57832 29.884 4.99776 28.9299 4.60163C27.9758 4.2055 26.9529 4.00159 25.9199 4.00159C24.8868 4.00159 23.8639 4.2055 22.9098 4.60163C21.9557 4.99776 21.0891 5.57832 20.3599 6.31003L17.9999 8.51003L15.6399 6.31003C14.147 4.90006 12.1628 4.12852 10.1096 4.15966C8.05643 4.1908 6.0965 5.02218 4.64713 6.47677C3.19775 7.93136 2.37342 9.89425 2.34965 11.9475C2.32588 14.0008 3.10454 15.9823 4.51986 17.47L17.9999 31L31.4799 17.47C32.9552 15.9877 33.7835 13.9814 33.7835 11.89C33.7835 9.79863 32.9552 7.79235 31.4799 6.31003V6.31003Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M31.4359 18L18.2179 35L5 18L18.2179 1L31.4359 18Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M7.48 21.11C7.00858 22.3527 6.76797 23.6709 6.77 25V30H1V26.38C0.999999 25.6726 1.13949 24.9722 1.41048 24.3189C1.68148 23.6655 2.07866 23.0719 2.5793 22.5722C3.07994 22.0725 3.67421 21.6764 4.32809 21.4067C4.98198 21.1369 5.68265 20.9987 6.39 21C6.75605 21.001 7.12114 21.0378 7.48 21.11ZM6.27 11C5.57777 11 4.90108 11.2053 4.3255 11.5899C3.74993 11.9744 3.30133 12.5211 3.03642 13.1606C2.77151 13.8002 2.7022 14.5039 2.83725 15.1828C2.9723 15.8618 3.30564 16.4854 3.79513 16.9749C4.28461 17.4644 4.90825 17.7977 5.58718 17.9328C6.26612 18.0678 6.96985 17.9985 7.60939 17.7336C8.24893 17.4687 8.79556 17.0201 9.18014 16.4445C9.56473 15.8689 9.77 15.1922 9.77 14.5C9.77 13.5717 9.40125 12.6815 8.74487 12.0251C8.0885 11.3688 7.19826 11 6.27 11ZM13.27 10.5C13.27 9.60999 13.5339 8.73996 14.0284 7.99994C14.5229 7.25991 15.2257 6.68314 16.0479 6.34254C16.8702 6.00195 17.775 5.91283 18.6479 6.08647C19.5208 6.2601 20.3226 6.68868 20.952 7.31802C21.5813 7.94736 22.0099 8.74918 22.1835 9.6221C22.3572 10.495 22.2681 11.3998 21.9275 12.2221C21.5869 13.0443 21.0101 13.7471 20.2701 14.2416C19.53 14.7361 18.66 15 17.77 15C17.1787 15.0013 16.5929 14.8858 16.0464 14.6601C15.4998 14.4345 15.0032 14.103 14.5851 13.6849C14.167 13.2668 13.8355 12.7702 13.6099 12.2236C13.3842 11.6771 13.2687 11.0913 13.27 10.5ZM24.77 25V30H10.77V25C10.77 23.1435 11.5075 21.363 12.8203 20.0503C14.133 18.7375 15.9135 18 17.77 18C19.6265 18 21.407 18.7375 22.7197 20.0503C24.0325 21.363 24.77 23.1435 24.77 25ZM34.77 26.38V30H28.77V25C28.7738 23.6921 28.54 22.3944 28.08 21.17C28.5076 21.0576 28.9479 21.0004 29.39 21C30.8169 21 32.1853 21.5668 33.1942 22.5758C34.2032 23.5847 34.77 24.9531 34.77 26.38ZM29.27 18C28.5778 18 27.9011 17.7947 27.3255 17.4101C26.7499 17.0256 26.3013 16.4789 26.0364 15.8394C25.7715 15.1999 25.7022 14.4961 25.8373 13.8172C25.9723 13.1383 26.3056 12.5146 26.7951 12.0251C27.2846 11.5356 27.9083 11.2023 28.5872 11.0673C29.2661 10.9322 29.9699 11.0015 30.6094 11.2664C31.2489 11.5313 31.7956 11.9799 32.1801 12.5555C32.5647 13.1311 32.77 13.8078 32.77 14.5C32.77 15.4283 32.4013 16.3185 31.7449 16.9749C31.0885 17.6313 30.1983 18 29.27 18Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M18 26V31H2V26C2 23.8783 2.84285 21.8434 4.34315 20.3431C5.84344 18.8429 7.87827 18 10 18C12.1217 18 14.1566 18.8429 15.6569 20.3431C17.1571 21.8434 18 23.8783 18 26ZM10 15C10.89 15 11.76 14.7361 12.5001 14.2416C13.2401 13.7471 13.8169 13.0443 14.1575 12.2221C14.4981 11.3998 14.5872 10.495 14.4135 9.6221C14.2399 8.74918 13.8113 7.94736 13.182 7.31802C12.5526 6.68868 11.7508 6.2601 10.8779 6.08647C10.005 5.91283 9.10019 6.00195 8.27792 6.34254C7.45566 6.68314 6.75285 7.25991 6.25839 7.99994C5.76392 8.73996 5.5 9.60999 5.5 10.5C5.49868 11.0913 5.61418 11.6771 5.83986 12.2236C6.06554 12.7702 6.39695 13.2668 6.81508 13.6849C7.23321 14.103 7.72981 14.4345 8.27637 14.6601C8.82293 14.8858 9.40868 15.0013 10 15ZM31.66 18.34C30.8643 17.5434 29.9094 16.9238 28.8578 16.5216C27.8062 16.1194 26.6815 15.9437 25.5574 16.006C24.4332 16.0683 23.3348 16.3672 22.3341 16.8831C21.3334 17.399 20.4528 18.1204 19.75 19C21.2201 21.0373 22.0077 23.4877 22 26V29H34V24C34.0008 22.9491 33.7946 21.9084 33.3931 20.9372C32.9916 19.966 32.4027 19.0835 31.66 18.34ZM26 13C26.89 13 27.76 12.7361 28.5001 12.2416C29.2401 11.7471 29.8169 11.0443 30.1575 10.2221C30.4981 9.39981 30.5872 8.49501 30.4135 7.6221C30.2399 6.74918 29.8113 5.94736 29.182 5.31802C28.5526 4.68868 27.7508 4.2601 26.8779 4.08647C26.005 3.91283 25.1002 4.00195 24.2779 4.34254C23.4557 4.68314 22.7529 5.25991 22.2584 5.99994C21.7639 6.73996 21.5 7.60999 21.5 8.5C21.4987 9.09132 21.6142 9.67708 21.8399 10.2236C22.0655 10.7702 22.397 11.2668 22.8151 11.6849C23.2332 12.103 23.7298 12.4345 24.2764 12.6601C24.8229 12.8858 25.4087 13.0013 26 13Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M30 32H6V31C6 27.8174 7.26428 24.7652 9.51472 22.5147C11.7652 20.2643 14.8174 19 18 19C21.1826 19 24.2348 20.2643 26.4853 22.5147C28.7357 24.7652 30 27.8174 30 31V32ZM18 3C16.8133 3 15.6533 3.35189 14.6666 4.01118C13.6799 4.67047 12.9108 5.60754 12.4567 6.7039C12.0026 7.80026 11.8838 9.00666 12.1153 10.1705C12.3468 11.3344 12.9182 12.4035 13.7574 13.2426C14.5965 14.0818 15.6656 14.6532 16.8295 14.8847C17.9933 15.1162 19.1997 14.9974 20.2961 14.5433C21.3925 14.0892 22.3295 13.3201 22.9888 12.3334C23.6481 11.3467 24 10.1867 24 9C24 7.4087 23.3679 5.88258 22.2426 4.75736C21.1174 3.63214 19.5913 3 18 3Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M3.1154 27.6838L8.39576 20.3968C8.50481 20.251 8.55119 20.0677 8.52472 19.8875C8.49836 19.7073 8.40123 19.5451 8.25498 19.4367L4.25152 16.3806C4.10812 16.27 4.01405 16.1073 3.98977 15.9278C3.96548 15.7484 4.01295 15.5665 4.1219 15.4218C4.23074 15.2772 4.39241 15.1813 4.57159 15.1549L9.09981 14.4028C9.32514 14.3675 9.51799 14.2222 9.61435 14.0155C9.7106 13.8088 9.6977 13.5677 9.57978 13.3724L4.58729 5.03256C4.48403 4.85393 4.46631 4.63857 4.53905 4.4456C4.61168 4.25254 4.76711 4.10236 4.96247 4.0363C5.15783 3.97023 5.37244 3.99517 5.54735 4.10444L14.508 9.91936C14.6733 10.0263 14.8763 10.0575 15.066 10.0049C15.2557 9.95229 15.4137 9.82092 15.5001 9.64415L18.0604 4.38927C18.1473 4.22213 18.299 4.098 18.4801 4.0458C18.6611 3.99362 18.8556 4.01791 19.0182 4.11307C19.1808 4.20823 19.2973 4.36585 19.3405 4.54929L20.595 10.5241H20.5949C20.6381 10.7286 20.772 10.9025 20.9588 10.9965C21.1455 11.0905 21.365 11.0945 21.5551 11.0073L28.3075 7.86803L28.3074 7.86792C28.4907 7.78118 28.7031 7.78009 28.8873 7.86497C29.0715 7.94996 29.2086 8.11217 29.2615 8.30796C29.3146 8.50376 29.278 8.71301 29.1619 8.87926L24.9856 14.9949C24.8537 15.1863 24.8279 15.4317 24.9172 15.6464C25.0064 15.8611 25.1985 16.0159 25.4273 16.0574L32.3943 17.3375C32.6059 17.363 32.7939 17.4852 32.903 17.6684C33.0122 17.8515 33.0302 18.075 32.9519 18.2733C32.8737 18.4716 32.7079 18.6224 32.503 18.6816L25.4176 21.0338C25.237 21.0946 25.0898 21.2276 25.011 21.4011C24.9321 21.5746 24.9287 21.773 25.0017 21.9491L28.4131 30.2248C28.491 30.4095 28.4841 30.6189 28.3942 30.7981C28.3043 30.9773 28.1405 31.108 27.9459 31.156C27.7513 31.2039 27.5454 31.1642 27.3827 31.0473L19.558 25.5493C19.3872 25.4307 19.1719 25.3953 18.972 25.4531C18.7721 25.5108 18.6089 25.6554 18.5275 25.847L15.8106 32.3594C15.734 32.5434 15.5814 32.6852 15.3924 32.7481C15.2032 32.8108 14.9962 32.7886 14.8247 32.6871C14.6533 32.5855 14.5343 32.4147 14.4985 32.2187L13.3368 25.9047C13.2995 25.7027 13.1738 25.528 12.9942 25.4284C12.8147 25.3286 12.5999 25.3144 12.4088 25.3894L3.92498 28.7113C3.7422 28.7784 3.5395 28.7648 3.36723 28.674C3.19495 28.5832 3.06926 28.4237 3.02126 28.2351C2.97325 28.0464 3.00737 27.8461 3.11533 27.6841L3.1154 27.6838Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            _: "M32.1364 3.05916C32.3257 3.11958 32.4978 3.22426 32.6386 3.36452C32.7774 3.50482 32.8811 3.67603 32.941 3.86413C33.001 4.05222 33.0155 4.25184 32.9834 4.44663L31.7339 12.0377C31.6841 12.3356 31.5288 12.6056 31.2965 12.7987L19.2946 22.7251L17.1703 20.6009L27.2742 10.497L25.5074 8.7301L15.406 18.8365L13.2817 16.7123L23.2694 4.69904C23.4614 4.46893 23.7297 4.31549 24.0254 4.2667L31.5502 3.01714C31.7462 2.98434 31.9471 2.99875 32.1364 3.05916ZM9.26762 16.7603C9.59525 16.7574 9.91089 16.8834 10.1466 17.111L18.8934 25.8578C19.1211 26.0935 19.247 26.4092 19.2442 26.7368C19.2413 27.0644 19.1099 27.3778 18.8782 27.6095C18.6465 27.8412 18.3331 27.9726 18.0055 27.9754C17.6779 27.9783 17.3622 27.8523 17.1266 27.6247L14.6275 25.1256L10.1466 29.6065L11.3961 30.8561C11.5155 30.9713 11.6107 31.1092 11.6761 31.2617C11.7416 31.4141 11.7761 31.5781 11.7775 31.744C11.779 31.9099 11.7474 32.0745 11.6845 32.228C11.6217 32.3816 11.5289 32.5211 11.4116 32.6384C11.2943 32.7557 11.1548 32.8485 11.0012 32.9114C10.8476 32.9742 10.6831 33.0058 10.5172 33.0044C10.3513 33.0029 10.1873 32.9684 10.0348 32.903C9.88239 32.8375 9.74451 32.7423 9.62925 32.6229L3.38147 26.3752C3.26213 26.2599 3.16694 26.122 3.10145 25.9696C3.03596 25.8171 3.00149 25.6531 3.00005 25.4872C2.99861 25.3213 3.03022 25.1568 3.09305 25.0032C3.15588 24.8496 3.24866 24.7101 3.36599 24.5928C3.48331 24.4755 3.62283 24.3827 3.77639 24.3199C3.92996 24.257 4.0945 24.2254 4.26041 24.2269C4.42633 24.2283 4.59029 24.2628 4.74274 24.3283C4.89519 24.3938 5.03308 24.4889 5.14834 24.6083L6.3979 25.8578L10.8788 21.3769L8.37969 18.8778C8.15207 18.6422 8.02613 18.3265 8.02897 17.9989C8.03182 17.6713 8.16323 17.3579 8.39491 17.1262C8.62659 16.8945 8.93999 16.7631 9.26762 16.7603Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M17.6253 34.113C17.743 34.1717 17.8718 34.2012 18 34.2012C18.1282 34.2012 18.257 34.1717 18.3748 34.113C18.8953 33.8524 31.1275 27.6036 31.1275 16.0461L31.1274 8.2254C31.1274 7.76274 30.7522 7.38762 30.2892 7.38762C30.2258 7.38762 23.8719 7.32574 18.5922 2.04672C18.265 1.71954 17.7346 1.71954 17.4075 2.04672C12.1509 7.30272 5.77225 7.38762 5.71045 7.38762C5.24779 7.38762 4.87231 7.76274 4.87231 8.2254V16.0464C4.87278 27.6033 17.1048 33.8523 17.6253 34.113H17.6253Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            _: "M3.50571 11.2155C3.87965 9.34584 5.52131 8 7.42804 8H28.5578C30.4645 8 32.1061 9.34584 32.4801 11.2155L32.9759 13.6947C33.0378 14.0041 32.8011 14.2928 32.4856 14.2928H3.50017C3.18465 14.2928 2.948 14.0041 3.00988 13.6947L3.50571 11.2155ZM14.2172 16.8099H4.42812C4.27911 16.8099 4.16319 16.9394 4.17965 17.0875L5.20967 26.3577C5.32221 27.3706 6.17834 28.1368 7.19744 28.1368H28.7883C29.8074 28.1368 30.6635 27.3706 30.7761 26.3577L31.8061 17.0875C31.8226 16.9394 31.7066 16.8099 31.5576 16.8099H21.7686V19.8441C21.7686 20.9486 20.8731 21.8441 19.7686 21.8441H16.2172C15.1127 21.8441 14.2172 20.9486 14.2172 19.8441V16.8099ZM17.2343 16.8099C16.9582 16.8099 16.7343 17.0337 16.7343 17.3099V18.827C16.7343 19.1031 16.9582 19.327 17.2343 19.327H18.7514C19.0276 19.327 19.2514 19.1031 19.2514 18.827V17.3099C19.2514 17.0337 19.0276 16.8099 18.7514 16.8099H17.2343Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M31.9513 28.4678L31.6814 28.3401C31.4615 28.2254 31.2594 28.0795 31.0814 27.9068L26.6464 23.4718L27.1797 22.9385C27.3887 22.7296 27.5545 22.4816 27.6676 22.2086C27.7807 21.9356 27.8389 21.6431 27.8389 21.3476C27.8389 21.0521 27.7807 20.7595 27.6676 20.4865C27.5545 20.2136 27.3887 19.9656 27.1797 19.7567C27.1101 19.687 27.0274 19.6317 26.9364 19.594C26.8454 19.5563 26.7479 19.5369 26.6494 19.5369C26.5509 19.5369 26.4533 19.5563 26.3624 19.594C26.2714 19.6317 26.1887 19.687 26.1191 19.7567L25.1055 20.77L22.6057 18.1838L32.1273 9.16542L32.234 9.06543C32.3638 8.94364 32.4441 8.77816 32.4593 8.60079L32.9926 3.83112C32.9966 3.80307 32.9986 3.77478 32.9986 3.74646C32.9985 3.54799 32.921 3.35739 32.7826 3.21516C32.7023 3.13644 32.6054 3.07672 32.499 3.04038C32.3926 3.00404 32.2793 2.99201 32.1677 3.00518L27.398 3.53847C27.2201 3.55335 27.0539 3.63334 26.9314 3.76312L17.9986 13.1935L9.06592 3.76312C8.94377 3.63368 8.77827 3.55371 8.60095 3.53847L3.83094 3.00518C3.71926 2.99201 3.60605 3.00404 3.49963 3.04038C3.39321 3.07672 3.29629 3.13644 3.21598 3.21516C3.07757 3.35739 3.00009 3.54799 3 3.74646C3.00002 3.77478 3.00202 3.80307 3.006 3.83112L3.53929 8.60079C3.55452 8.77816 3.63477 8.94364 3.76461 9.06543L3.87128 9.16542L13.393 18.1838L10.8931 20.77L9.87953 19.7567C9.80992 19.687 9.72725 19.6317 9.63625 19.594C9.54526 19.5563 9.44773 19.5369 9.34923 19.5369C9.25073 19.5369 9.15321 19.5563 9.06221 19.594C8.97122 19.6317 8.88855 19.687 8.81894 19.7567C8.61002 19.9656 8.44429 20.2136 8.33123 20.4866C8.21816 20.7596 8.15996 21.0521 8.15996 21.3476C8.15996 21.643 8.21816 21.9356 8.33123 22.2086C8.44429 22.4815 8.61002 22.7296 8.81894 22.9385L9.35223 23.4718L4.9172 27.9068C4.7392 28.0795 4.53711 28.2254 4.31724 28.3401L4.04726 28.4678C3.77896 28.599 3.54621 28.7929 3.36868 29.0331C3.19116 29.2733 3.07407 29.5527 3.02733 29.8477C2.97954 30.1411 3.00219 30.4417 3.0934 30.7247C3.18462 31.0077 3.34179 31.2649 3.55196 31.4752L4.52723 32.4498C4.8798 32.8009 5.35723 32.9979 5.85481 32.9975C5.95521 32.9973 6.05547 32.9898 6.15479 32.9751C6.44819 32.9294 6.7262 32.8135 6.96513 32.6372C7.20407 32.4609 7.39684 32.2294 7.52702 31.9625L7.67701 31.6625C7.7898 31.4475 7.93392 31.2505 8.10465 31.0779L12.532 26.6505L13.062 27.1805C13.2709 27.3894 13.5189 27.5552 13.7919 27.6682C14.0649 27.7813 14.3574 27.8395 14.6529 27.8395C14.9483 27.8395 15.2409 27.7813 15.5139 27.6682C15.7868 27.5552 16.0348 27.3894 16.2438 27.1805C16.3844 27.0398 16.4634 26.849 16.4634 26.6501C16.4634 26.4511 16.3844 26.2603 16.2438 26.1196L15.2302 25.106L17.9933 22.4395L18.0016 22.4315L18.01 22.4395L20.7728 25.106L19.7592 26.1196C19.6186 26.2603 19.5396 26.4511 19.5396 26.6501C19.5396 26.849 19.6186 27.0398 19.7592 27.1805C19.9681 27.3894 20.2161 27.5552 20.4891 27.6682C20.7621 27.7813 21.0546 27.8395 21.3501 27.8395C21.6455 27.8395 21.9381 27.7813 22.2111 27.6682C22.484 27.5552 22.732 27.3894 22.941 27.1805L23.4709 26.6505L27.8983 31.0779C28.0692 31.2503 28.2134 31.4474 28.3259 31.6625L28.4759 31.9625C28.6061 32.2294 28.7989 32.4609 29.0378 32.6372C29.2767 32.8135 29.5548 32.9294 29.8482 32.9751C29.9475 32.9898 30.0477 32.9973 30.1481 32.9975C30.6457 32.9979 31.1231 32.8009 31.4757 32.4498L32.451 31.4752C32.6611 31.2649 32.8183 31.0077 32.9095 30.7247C33.0008 30.4417 33.0234 30.1411 32.9756 29.8477C32.9284 29.5522 32.8107 29.2726 32.6324 29.0323C32.4541 28.7921 32.2205 28.5985 31.9513 28.4678Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            _: "M12.73 28.34C15.6223 29.3235 18.732 29.4785 21.7078 28.7876C24.6836 28.0967 27.4069 26.5873 29.57 24.43L36 18L29.57 11.57C28 10 26.5 9.00003 23.94 7.94003C20.9843 6.77799 17.7541 6.50247 14.6444 7.14715C11.5346 7.79183 8.68012 9.32878 6.43 11.57L0 18L6.43 24.43C8.10419 26.1042 10.2596 27.5 12.73 28.34ZM18 25C21.866 25 25 21.866 25 18C25 14.134 21.866 11 18 11C14.134 11 11 14.134 11 18C11 21.866 14.134 25 18 25Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M32.991 20.3742C31.996 19.9541 30.8307 20.4415 30.3037 21.4683L27.0772 20.1006C27.0852 19.9739 27.089 19.8507 27.089 19.724V16.0418L30.3197 14.6703C30.8511 15.6771 32.0045 16.1567 32.9913 15.7405C34.0339 15.2966 34.4896 14.0161 34.0061 12.8824C33.784 12.3555 33.4034 11.9551 32.9517 11.7171C33.0943 11.2297 33.0705 10.6745 32.8487 10.1515C32.3691 9.01382 31.1322 8.45483 30.0896 8.89511C29.0945 9.31523 28.6348 10.4924 29.0075 11.5864L26.8273 12.5099C25.8561 8.53397 22.2688 5.58887 17.9998 5.58887C13.7269 5.58887 10.1434 8.53403 9.17233 12.5099L6.98818 11.5864C7.36084 10.4924 6.90111 9.31523 5.90995 8.89511C4.86733 8.45519 3.63076 9.01393 3.14725 10.1515C2.92518 10.6746 2.90537 11.2297 3.04424 11.7171C2.59634 11.9551 2.21198 12.3554 1.9898 12.8824C1.51028 14.0161 1.96601 15.2966 3.00863 15.7405C3.99182 16.1567 5.14919 15.6771 5.68016 14.6703L8.91086 16.0418L8.91121 19.7243C8.91121 19.851 8.9152 19.9742 8.92305 20.1009L5.69235 21.4686C5.16501 20.4419 3.99957 19.9544 3.00888 20.3745C1.96626 20.8184 1.51053 22.0986 1.99005 23.2326C2.21212 23.7557 2.59662 24.1599 3.04449 24.3979C2.90586 24.8853 2.92566 25.4405 3.1475 25.9635C3.63101 27.0972 4.86794 27.6602 5.9102 27.2199C6.89339 26.7998 7.35314 25.6385 7.00028 24.5562L9.80681 23.3671C9.9854 23.716 10.1913 24.0529 10.4253 24.3702L11.9593 26.4751V26.9902C11.9593 28.8809 13.4933 30.4108 15.3841 30.4108H20.6164C22.5071 30.4108 24.037 28.8808 24.037 26.9902V26.4751L25.575 24.3702C25.809 24.0531 26.0149 23.716 26.1935 23.3671L29 24.5562C28.6433 25.6383 29.103 26.7998 30.0901 27.2199C31.1327 27.6598 32.3693 27.0971 32.8492 25.9635C33.0712 25.4404 33.095 24.8853 32.9522 24.3979C33.404 24.1599 33.7844 23.7557 34.0066 23.2326C34.49 22.0986 34.0339 20.8184 32.9917 20.3742L32.991 20.3742ZM24.6825 18.0554C24.6825 18.3885 24.5993 18.7016 24.4485 18.987C24.0324 19.8035 23.0808 20.3706 21.9671 20.3706C21.111 20.3706 20.346 19.8194 19.8503 19.1102C19.4738 18.5792 19.2516 17.9607 19.2516 17.4135C19.2516 17.1953 19.2872 17.0014 19.3585 16.8306C19.6796 16.0102 20.7262 15.7446 21.9667 15.7446C23.0924 15.7446 24.0558 16.3235 24.464 17.1517C24.6073 17.429 24.6825 17.7343 24.6825 18.0554L24.6825 18.0554ZM11.3124 18.0554C11.3124 17.7343 11.3877 17.429 11.5306 17.1518C11.9428 16.3234 12.9062 15.7446 14.0279 15.7446C15.2685 15.7446 16.3149 16.0103 16.6361 16.8307C16.7074 17.0013 16.743 17.1954 16.743 17.4136C16.743 17.9604 16.5209 18.5749 16.1443 19.1064C15.6529 19.8199 14.8879 20.3707 14.0275 20.3707C12.9176 20.3707 11.9622 19.8038 11.5461 18.9872C11.3955 18.7016 11.3124 18.3885 11.3124 18.0554L11.3124 18.0554ZM19.0341 21.8843C19.0341 22.578 18.5704 23.1407 17.9995 23.1407C17.4286 23.1407 16.9649 22.5776 16.9649 21.8843C16.9649 21.3691 17.2227 20.481 17.5912 20.0649L17.9995 19.8942L18.4078 20.0649C18.7764 20.4813 19.0341 21.3692 19.0341 21.8843Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M32.895 7.34625L28.9237 3.375L18.135 14.1525L7.34625 3.375L3.375 7.34625L14.1525 18.135L3.375 28.9237L7.34625 32.895L18.135 22.1175L28.9237 32.895L32.895 28.9237L22.1175 18.135L32.895 7.34625Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M16 34V21H3V16H16V3H21V16H34V21H21V34H16Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M33 16H3V21H33V16Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            _: "M16.2114 23.9054C18.1701 23.9054 19.7587 25.494 19.7587 27.4527C19.7587 29.4114 18.1701 31 16.2114 31C14.2526 31 12.6641 29.4114 12.6641 27.4527C12.6641 25.494 14.2527 23.9054 16.2114 23.9054Z",
            fill: "currentColor",
          }),
          _.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            _: "M7.01091 9.7964C7.11325 7.49343 8.06952 5.32707 9.69945 3.69779C11.4318 1.96544 13.7608 1 16.2108 1C18.6611 1 20.9899 1.96534 22.7222 3.69779C24.4545 5.42937 25.42 7.75911 25.42 10.2092C25.42 11.8776 24.9663 13.5012 24.109 14.9322C23.2523 16.3624 22.0178 17.5368 20.5477 18.324C20.1242 18.5512 19.761 18.8723 19.5136 19.2866C19.2654 19.7001 19.1616 20.179 19.1616 20.6579V21.3933C19.1616 21.6584 18.9457 21.8743 18.6815 21.8743H13.7404C13.4761 21.8743 13.2602 21.6584 13.2602 21.3933V20.6579C13.2602 19.1043 13.6626 17.5963 14.4611 16.2636C15.2603 14.928 16.4065 13.8673 17.7764 13.1333C18.3057 12.85 18.7488 12.4238 19.0573 11.9085C19.365 11.394 19.5178 10.8078 19.5178 10.2092C19.5178 9.32859 19.1722 8.49295 18.5496 7.87046C17.9264 7.2479 17.0914 6.90227 16.2109 6.90227C15.3303 6.90227 14.4947 7.24788 13.8722 7.87046C13.312 8.43062 12.972 9.16814 12.9131 9.9582L12.8963 10.1818C12.8774 10.4363 12.6643 10.6313 12.4091 10.6271L7.47227 10.5422C7.3377 10.5394 7.22265 10.4889 7.13086 10.3907C7.03828 10.2926 6.99482 10.1748 7.00049 10.0402L7.01104 9.79628L7.01091 9.7964Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M2 6.05005V30.05H34V6.05005H2ZM25 10.05C25.5933 10.05 26.1734 10.226 26.6667 10.5556C27.1601 10.8853 27.5446 11.3538 27.7716 11.902C27.9987 12.4502 28.0581 13.0534 27.9424 13.6353C27.8266 14.2173 27.5409 14.7518 27.1213 15.1714C26.7018 15.5909 26.1672 15.8766 25.5853 15.9924C25.0033 16.1082 24.4001 16.0488 23.8519 15.8217C23.3038 15.5946 22.8352 15.2101 22.5056 14.7168C22.1759 14.2234 22 13.6434 22 13.05C22 12.2544 22.3161 11.4913 22.8787 10.9287C23.4413 10.3661 24.2044 10.05 25 10.05V10.05ZM23 26.05H6L14.5 15.05L19.4 21.39L22 18.05L28.22 26.05H23Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M18 4.15002C16.4087 4.15002 14.8826 4.78217 13.7574 5.90738C12.6321 7.0326 12 8.55872 12 10.15H24C24 8.55872 23.3679 7.0326 22.2426 5.90738C21.1174 4.78217 19.5913 4.15002 18 4.15002Z",
            fill: "currentColor",
          }),
          _.createElement("path", {
            _: "M34 22.7V19.7H26V17.7L31 15.1V11.15L25.25 14.15H10.75L5 11.15V15.08L10 17.68V19.68H2V22.68H10V24.6L5 27.2V31.13L10.61 28.2C11.2158 29.6612 12.2412 30.91 13.5566 31.7886C14.8719 32.6671 16.4182 33.1361 18 33.1361C19.5818 33.1361 21.1281 32.6671 22.4434 31.7886C23.7588 30.91 24.7842 29.6612 25.39 28.2L31 31.15V27.22L26 24.62V22.7H34Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            style: _,
            className: "SVGIcon_Button",
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M31.3137 19.5299L10.0583 32.3788C9.77894 32.5477 9.45165 32.6083 9.13395 32.5496C8.81603 32.4909 8.52835 32.3169 8.32083 32.0582C8.11354 31.7995 8 31.4723 8 31.1346V5.4368C8 5.09914 8.11354 4.77196 8.32083 4.51325C8.52833 4.25455 8.81604 4.08049 9.13395 4.02181C9.45165 3.96313 9.77896 4.02377 10.0583 4.19261L31.3137 17.0415C31.593 17.2103 31.8068 17.4769 31.9172 17.7942C32.0276 18.1116 32.0276 18.4598 31.9172 18.7772C31.8068 19.0945 31.593 19.3611 31.3137 19.5299Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            className: "SVGIcon_Button",
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M14.3333 30C14.3333 30.5523 13.8856 31 13.3333 31H8C7.44772 31 7 30.5523 7 30V6C7 5.44772 7.44772 5 8 5H13.3333C13.8856 5 14.3333 5.44772 14.3333 6V30ZM29 6C29 5.44772 28.5523 5 28 5H22.6667C22.1144 5 21.6667 5.44772 21.6667 6V30C21.6667 30.5523 22.1144 31 22.6667 31H28C28.5523 31 29 30.5523 29 30V6Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            className: "SVGIcon_Button",
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M4 4H14V8H8V14H4V4ZM22 4V8H28V14H32V4H22ZM28 28H22V32H32V22H28V28ZM8 22H4V32H14V28H8V22Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "128",
            height: "128",
            viewBox: "0 0 128 128",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          _.createElement("path", {
            _: "M12 88H116V40H12V88ZM128 94C128 97.3137 125.314 100 122 100H6C2.78979 100 0.168429 97.4789 0.0078125 94.3086L0 94V34C0 30.6863 2.68629 28 6 28H122C125.314 28 128 30.6863 128 34V94Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "128",
            height: "128",
            viewBox: "0 0 128 128",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          _.createElement("path", {
            _: "M12 88H116V40H12V88ZM128 94C128 97.3137 125.314 100 122 100H6C2.78979 100 0.168429 97.4789 0.0078125 94.3086L0 94V34C0 30.6863 2.68629 28 6 28H122C125.314 28 128 30.6863 128 34V94Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        let { direction: _, ...__webpack_require__ } = _,
          _ = {
            transform: `scaleX( ${"right" == _ ? "-1" : "1"} )`,
          };
        return _.createElement(
          "svg",
          {
            style: _,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ..._,
          },
          _.createElement("rect", {
            fill: "currentColor",
            _: "3.82617",
            _: "2",
            width: "3",
            height: "4",
          }),
          _.createElement("rect", {
            fill: "currentColor",
            _: "3.82617",
            _: "9",
            width: "3",
            height: "4",
          }),
          _.createElement("rect", {
            fill: "currentColor",
            _: "3.82617",
            _: "16",
            width: "3",
            height: "4",
          }),
          _.createElement("rect", {
            fill: "currentColor",
            _: "3.82617",
            _: "23",
            width: "3",
            height: "4",
          }),
          _.createElement("rect", {
            fill: "currentColor",
            _: "3.82617",
            _: "30",
            width: "3",
            height: "4",
          }),
          _.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            _: "M10.0001 22.0989V17.8189L16.2074 15.869L16.2459 12.2486C16.2407 11.8588 16.0085 11.482 15.6333 11.3488C14.9327 11.0739 14.2894 10.6674 13.7463 10.0736C12.4484 8.65217 12.1894 6.49723 13.1336 4.75391C14.5932 1.99742 18.1636 1.18729 20.5946 2.88529C22.7995 4.4254 23.2317 7.43069 21.5622 9.61139C20.9843 10.3662 20.2727 10.8991 19.4342 11.2575C19.0506 11.4186 18.8005 11.8019 18.8058 12.1916L18.7749 15.6885L22.2544 14.6004C22.6449 14.4869 22.9514 14.1433 22.9958 13.7452C23.1147 12.6267 23.6444 11.538 24.5846 10.6499C26.1799 9.18956 28.571 8.84302 30.4666 9.82377C33.324 11.3048 33.8524 14.9779 31.6005 17.3526C30.0756 18.9478 27.5988 19.4062 25.6321 18.4616C25.0025 18.1506 24.4586 17.7277 24.0568 17.2325C23.8101 16.9314 23.3638 16.8342 22.9733 16.9477L19.373 18.0802L19.2532 29.7966C19.2494 32.0682 17.3331 33.9479 14.9505 34L15.093 20.4972L10.0001 22.0989ZM18.8394 5.17784C19.7723 5.82945 19.9292 7.09773 19.2443 7.99235C18.5379 8.91502 17.2182 9.10883 16.3136 8.47697C15.3807 7.82537 15.2238 6.55708 15.9087 5.66246C16.6151 4.73979 17.9349 4.54605 18.8394 5.17784ZM29.2418 12.4438C30.1747 13.0954 30.3316 14.3637 29.6467 15.2584C28.9403 16.181 27.6205 16.3748 26.716 15.743C25.7831 15.0914 25.6262 13.8231 26.3111 12.9285C27.0175 12.0058 28.3373 11.812 29.2418 12.4438ZM17.3194 17.5897C17.7434 17.8859 17.8326 18.5061 17.5116 18.9255C17.1691 19.3728 16.5447 19.4515 16.1207 19.1555C15.6967 18.8593 15.6074 18.2391 15.9285 17.8197C16.2496 17.4003 16.8954 17.2935 17.3194 17.5897Z",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M34 9.42197C32.4337 7.40864 29.497 6.99082 27.4217 8.47232L16.6537 16.2215L13.3254 13.8283C12.973 13.5625 12.7772 13.1065 12.8947 12.6887C13.0905 11.891 13.1296 11.0553 12.9339 10.1817C12.464 8.09242 10.6627 6.42103 8.47002 6.07916C5.02425 5.50936 2.00921 8.09249 2.00921 11.3592C2.00921 14.3222 4.47613 16.7153 7.53026 16.7153C8.58742 16.7153 9.52721 16.4494 10.3887 15.9556C10.7803 15.7277 11.2894 15.7656 11.6417 16.0315L14.8525 18.3486L11.6417 20.6657C11.2892 20.9316 10.7803 20.9697 10.3887 20.7417C9.2923 20.096 7.96112 19.83 6.55142 20.0579C4.20203 20.4757 2.36168 22.337 2.04843 24.6542C1.57862 28.1489 4.5936 31.0739 8.19599 30.694C10.6236 30.4281 12.6207 28.5668 13.0122 26.2116C13.1298 25.4519 13.0905 24.6922 12.8947 24.0084C12.7772 23.5905 12.973 23.1346 13.3254 22.8688L16.6537 20.4756L27.4217 28.2248C29.4971 29.7442 32.4337 29.3264 34 27.2751L21.5874 18.3483L34 9.42197ZM7.53026 13.6005C6.27732 13.6005 5.22 12.6128 5.22 11.3592C5.22 10.1437 6.23803 9.11802 7.53026 9.11802C8.7832 9.11802 9.84052 10.1056 9.84052 11.3592C9.84052 12.5749 8.82249 13.6005 7.53026 13.6005ZM7.53026 27.5794C6.27732 27.5794 5.22 26.5918 5.22 25.3382C5.22 24.1227 6.23803 23.0969 7.53026 23.0969C8.7832 23.0969 9.84052 24.0846 9.84052 25.3382C9.84052 26.5537 8.82249 27.5794 7.53026 27.5794ZM18.6115 19.4123C18.0242 19.4123 17.5151 18.9185 17.5151 18.3487C17.5151 17.7789 18.0242 17.285 18.6115 17.285C19.1989 17.285 19.708 17.7789 19.708 18.3487C19.7078 18.9185 19.238 19.4123 18.6115 19.4123Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ..._,
          },
          _.createElement("path", {
            fill: "currentColor",
            _: "M27 20.1931C26.9943 23.588 25.6228 26.8421 23.1861 29.2427C20.7495 31.6432 17.4463 32.9943 14.0003 32.9999C12.2937 33.0055 10.603 32.6766 9.02663 32.0323C7.45029 31.3879 6.01984 30.4411 4.81854 29.2469C2.3908 26.8485 1.01923 23.6049 1.0006 20.2178C0.93382 13.0373 6.47794 7.52611 13.8968 7.3896H19.6875V4L27 9.19871L19.6875 14.3991V11.1723H13.9519C8.7116 11.271 4.7935 15.1424 4.84024 20.1783C4.88532 25.1649 8.99373 29.2238 14.0003 29.2238C16.4289 29.2212 18.7572 28.2696 20.4745 26.5778C22.1918 24.8861 23.1577 22.5923 23.1604 20.1997",
          }),
          _.createElement("rect", {
            fill: "currentColor",
            width: "3",
            height: "32",
            transform: "matrix(-1 0 0 1 34.1738 2)",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            _: "M22.6666 6.28132C21.6224 4.93909 19.6646 4.66055 18.2811 5.64821L11.1024 10.8143L8.88352 9.21887C8.64856 9.04164 8.51804 8.73769 8.5964 8.45915C8.72692 7.92736 8.75301 7.37017 8.62249 6.78778C8.30928 5.39495 7.10839 4.28069 5.6466 4.05277C3.34942 3.67291 1.33939 5.39499 1.33939 7.57283C1.33939 9.54815 2.984 11.1435 5.0201 11.1435C5.72487 11.1435 6.35139 10.9663 6.92575 10.637C7.18679 10.4851 7.52619 10.5104 7.76104 10.6877L9.90155 12.2324L7.76104 13.7772C7.52608 13.9544 7.18679 13.9798 6.92575 13.8278C6.19479 13.3973 5.30733 13.22 4.36753 13.3719C2.80127 13.6504 1.57437 14.8913 1.36554 16.4361C1.05233 18.7659 3.06232 20.7159 5.46391 20.4627C7.08233 20.2854 8.4137 19.0445 8.67474 17.4744C8.75309 16.9679 8.72691 16.4614 8.59639 16.0056C8.51804 15.727 8.64856 15.4231 8.88352 15.2458L11.1024 13.6504L18.2811 18.8165C19.6646 19.8295 21.6224 19.5509 22.6666 18.1834L14.3915 12.2322L22.6666 6.28132ZM5.02009 9.06697C4.1848 9.06697 3.47992 8.40856 3.47992 7.57283C3.47992 6.7625 4.15861 6.07868 5.02009 6.07868C5.85538 6.07868 6.56027 6.73709 6.56027 7.57283C6.56027 8.38324 5.88158 9.06697 5.02009 9.06697ZM5.02009 18.3863C4.1848 18.3863 3.47992 17.7278 3.47992 16.8921C3.47992 16.0818 4.15861 15.398 5.02009 15.398C5.85538 15.398 6.56027 16.0564 6.56027 16.8921C6.56027 17.7024 5.88158 18.3863 5.02009 18.3863ZM12.4076 12.9416C12.016 12.9416 11.6766 12.6123 11.6766 12.2324C11.6766 11.8526 12.016 11.5233 12.4076 11.5233C12.7992 11.5233 13.1386 11.8526 13.1386 12.2324C13.1385 12.6123 12.8253 12.9416 12.4076 12.9416Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          _.createElement(
            "text",
            {
              color: "currentColor",
              fontFamily: '"Motiva Sans", Arial, Helvetica, sans-serif',
              fontSize: 30,
              fontWeight: 600,
              textAnchor: "middle",
              _: 18,
              _: 30,
            },
            _.nNumber,
          ),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ..._,
          },
          _.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            _: "M10 8H2V32H34V8H26L24.2764 4.55279C24.107 4.214 23.7607 4 23.382 4H12.618C12.2393 4 11.893 4.214 11.7236 4.55279L10 8ZM18 27C21.866 27 25 23.866 25 20C25 16.134 21.866 13 18 13C14.134 13 11 16.134 11 20C11 23.866 14.134 27 18 27Z",
          }),
        );
      }
    },
  },
]);
