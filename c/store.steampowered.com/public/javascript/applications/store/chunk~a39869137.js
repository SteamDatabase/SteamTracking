"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1703],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
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
      __webpack_require__._(module_exports, {
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
  },
]);
