/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [7901],
  {
    68324: (e, t, i) => {
      i.d(t, { Pw: () => o, c8: () => a, hB: () => s, zB: () => r });
      const n = new (i(68785).sO)("video"),
        s = (n.Info, n.Debug);
      n.Error, n.Warning;
      function r(e) {
        let t = Math.floor(e / 3600),
          i = Math.floor(e / 60) % 60,
          n = Math.floor(e) % 60,
          s = n.toString();
        n < 10 && (s = "0" + s);
        let r = i.toString();
        return (
          i < 10 && t > 0 && (r = "0" + r), (t > 0 ? t + ":" : "") + r + ":" + s
        );
      }
      function a() {
        let e = !1;
        try {
          e = MediaSource.isTypeSupported(
            'video/mp4;codecs="avc1.4d4032,mp4a.40.2"',
          );
        } catch (e) {}
        return e;
      }
      function o() {
        let e = document
          .createElement("video")
          .canPlayType(
            'application/vnd.apple.mpegurl;codecs="avc1.64001f,mp4a.40.02"',
          );
        return "probably" === e || "maybe" === e;
      }
    },
    46157: (e, t, i) => {
      i.d(t, { C2: () => O, N1: () => N, tA: () => U, YW: () => I });
      var n = i(85556),
        s = i(80751),
        r = i.n(s),
        a = i(54842),
        o = i(77936),
        m = (i(87225), i(62210)),
        d = i(45492),
        l = i(31846),
        h = i(45651),
        u = i(16997),
        _ = i(46984),
        p = i(37563),
        g = i(68324),
        f = i(48695);
      function S(e, t) {
        let i = e.getElementsByTagName("MPD");
        return i && 1 == i.length ? i[0] : null;
      }
      function c(e, t) {
        for (let i = 0; i < e.children.length; i++) {
          let n = e.children[i];
          if (n.tagName == t) return n;
        }
        return null;
      }
      function D(e, t) {
        let i = e.getAttribute(t);
        if (!i) return null;
        let n = new Date(i);
        return "[object Date]" === Object.prototype.toString.call(n) ? n : null;
      }
      function T(e, t) {
        let i = e.getAttribute(t);
        if (!i) return null;
        let n = 0,
          s = i.match(/(\d*)H/);
        return (
          s && (n += 60 * parseFloat(s[1]) * 60),
          (s = i.match(/(\d*)M/)),
          s && (n += 60 * parseFloat(s[1])),
          (s = i.match(/(\d*\.?\d*)S/)),
          s && (n += parseFloat(s[1])),
          n
        );
      }
      function B(e, t) {
        let i = e.getAttribute(t);
        return i
          ? ((i = i.toLowerCase()), "true" == i || ("false" != i && null))
          : null;
      }
      function w(e, t) {
        let i = e.getAttribute(t);
        return i ? parseInt(i) : null;
      }
      function y(e, t) {
        let i = e.getAttribute(t);
        return i || "";
      }
      function b(e, t, i) {
        let n = {
          nTimeScale: w(e, "timescale"),
          nDuration: w(e, "duration"),
          nStartNumber: w(e, "startNumber"),
          strMedia: y(e, "media"),
          strInitialization: "",
        };
        return (
          t.bContainsGame
            ? (n.strInitialization = n.strMedia)
            : (n.strInitialization = y(e, "initialization")),
          n.nTimeScale &&
          n.nDuration &&
          n.nStartNumber &&
          n.strMedia &&
          n.strInitialization
            ? ((n.strMedia = M(n.strMedia, i)),
              (n.strInitialization = M(n.strInitialization, i)),
              n)
            : null
        );
      }
      function v(e, t, i) {
        return (e = (e = (e = e.replace("$RepresentationID$", t)).replace(
          "$Number$",
          i.toString(),
        )).replace(
          /\$Number%(\d+)d\$/g,
          (e, t) => (
            (t = Number.parseInt(t)),
            (Array(t).join("0") + i.toString()).slice(-t)
          ),
        ));
      }
      function G(e) {
        return e.startsWith("http://") || e.startsWith("https://");
      }
      function R(e, t) {
        let i = e;
        i.endsWith("/") || (i += "/");
        let n = t.startsWith("/") ? 1 : 0;
        return i + t.substring(n);
      }
      function M(e, t) {
        return G(e) || !G(t) ? e : R(t, e);
      }
      function A(e) {
        return (
          0 == e.rgRoles.length || e.rgRoles.findIndex((e) => "main" == e) >= 0
        );
      }
      function C(e) {
        if (!e) return 0;
        let t = e.segmentTemplate;
        return 1e3 == t.nTimeScale
          ? t.nDuration
          : (t.nDuration / t.nTimeScale) * 1e3;
      }
      function P(e, t, i) {
        let n = C(t),
          s = i + ((1e3 * e.GetStartTime()) % n);
        return Math.floor(s / n) + t.segmentTemplate.nStartNumber;
      }
      function V(e) {
        return v(e.segmentTemplate.strInitialization, e.strID, 0);
      }
      class k {
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
        GetTimedTextAdaptionSet(e) {
          return e < 0 || e > this.m_rgPeriods.length
            ? []
            : this.m_rgPeriods[e].rgAdaptationSets.filter(
                (e) => e.bIsTimedText,
              );
        }
        IsLiveContent() {
          return "dynamic" == this.GetType();
        }
        GetAdaptationByTrackID(e) {
          if (!this.m_rgPeriods || 0 == this.m_rgPeriods.length) return null;
          let t = this.m_rgPeriods[0];
          for (let i of t.rgAdaptationSets) if (e == i.strID) return i;
          return null;
        }
        GetVideoAdaption() {
          let e = this.m_rgPeriods[0];
          for (let t of e.rgAdaptationSets) if (t.bContainsVideo) return t;
          return null;
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
        GetLowestRepresentation(e) {
          let t = this.GetAdaptationByTrackID(e);
          if (!t) return null;
          let i = t.rgRepresentations[0];
          for (let e of t.rgRepresentations)
            e.nBandwidth < i.nBandwidth && (i = e);
          return i;
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
        StartLiveContentNow(e) {
          this.m_tsLiveContentStart = performance.now() - e;
        }
        GetDurationSinceStarted() {
          return performance.now() - this.m_tsLiveContentStart;
        }
        ParseRepresentation(e, t, i, n) {
          const s = t;
          let r = {
              strID: y(e, "id"),
              strMimeType: y(e, "mimeType"),
              strCodecs: y(e, "codecs"),
              nBandwidth: w(e, "bandwidth"),
              segmentTemplate: null,
            },
            a = c(e, "SegmentTemplate");
          if (a) {
            let e = b(a, t, n);
            e && (r.segmentTemplate = e);
          } else r.segmentTemplate = { ...i };
          if (!r.segmentTemplate)
            return (
              (0, g.hB)("MPD - No segment template for representation"), null
            );
          if (s.bContainsVideo) {
            if (
              ((r.nWidth = w(e, "width")),
              (r.nHeight = w(e, "height")),
              (r.nFrameRate = w(e, "frameRate")),
              (0, g.hB)(
                `representation: ${r.nWidth}w x ${r.nHeight}h x ${r.nFrameRate} fps`,
              ),
              !(r.strID && r.strMimeType && r.strCodecs && r.nBandwidth))
            )
              return (0, g.hB)("MPD - Representation Video Data Missing"), null;
          } else if (s.bContainsAudio) {
            r.nAudioSamplingRate = w(e, "audioSamplingRate");
            let t = c(e, "AudioChannelConfiguration");
            if (
              (t && (r.nAudioChannels = w(t, "value")),
              r.nAudioChannels || (r.nAudioChannels = 2),
              !(
                r.strID &&
                r.strMimeType &&
                r.strCodecs &&
                r.nAudioSamplingRate &&
                r.nAudioChannels
              ))
            )
              return (0, g.hB)("MPD - Representation Audio Data Missing"), null;
          }
          return r;
        }
        BParse(e, t) {
          let i = new DOMParser().parseFromString(e, "application/xml"),
            n = S(i);
          if (!n) return !1;
          let s = n.getAttribute("type");
          if (
            ((this.m_nMinBufferTime = T(n, "minBufferTime")), "dynamic" == s)
          ) {
            if (
              ((this.m_strType = "dynamic"),
              (this.m_dtAvailabilityStartTime = D(n, "availabilityStartTime")),
              (this.m_dtPublishTime = D(n, "publishTime")),
              (this.m_nMinimumUpdatePeriod = T(n, "minimumUpdatePeriod")),
              (this.m_nTimeShiftBufferDepth =
                T(n, "timeShiftBufferDepth") || 0),
              !this.m_dtAvailabilityStartTime ||
                !this.m_dtPublishTime ||
                !this.m_nMinimumUpdatePeriod ||
                null === this.m_nMinBufferTime)
            )
              return !1;
          } else {
            if ("static" != s) return (0, g.hB)("MPD - Unknown type"), !1;
            if (
              ((this.m_strType = "static"),
              (this.m_nMediaPresentationDuration = T(
                n,
                "mediaPresentationDuration",
              )),
              !this.m_nMinBufferTime || !this.m_nMediaPresentationDuration)
            )
              return (
                (0, g.hB)("MPD - Missing Buffer Time or Presentation Duration"),
                !1
              );
          }
          let r = c(n, "BaseURL");
          this.m_strBaseURL = r
            ? r.textContent
            : (function (e) {
                if (!G(e)) return "";
                let t = new URL(e),
                  i = t.pathname;
                return (
                  (i.indexOf(".mpd") >= 0 || i.endsWith("/")) &&
                    (i = i.substring(0, i.lastIndexOf("/"))),
                  R(t.origin, i) + "/"
                );
              })(t);
          let a = c(n, "Analytics");
          a &&
            ((this.m_strStatsLink = y(a, "statslink")),
            (this.m_strStalledLink = y(a, "stalledlink")),
            (this.m_strEventLogLink = y(a, "eventlink")));
          let o = i.getElementsByTagName("Period");
          if (0 == o.length) return !1;
          let m = o[0],
            d = {
              strID: y(m, "id"),
              nStart: T(m, "start"),
              nDuration: T(m, "duration"),
              rgAdaptationSets: [],
            };
          if (!d.strID || null === d.nStart)
            return (0, g.hB)("MPD - Missing Period Information."), !1;
          (this.m_rgPeriods = []), this.m_rgPeriods.push(d);
          let l = m.getElementsByTagName("AdaptationSet");
          for (let e = 0; e < l.length; e++) {
            let t = l[e],
              i = y(t, "description"),
              n = y(t, "lang"),
              s = {
                bSegmentAlignment: B(t, "segmentAlignment"),
                bIsTimedText: "text/vtt" == y(t, "mimeType"),
                strLanguage: y(t, "lang"),
                bContainsVideo: !1,
                bContainsAudio: !1,
                bContainsGame: !1,
                strDescription: i || n,
                strForceSub: y(t, "forceSub"),
                strID: y(t, "id"),
                rgRoles: [],
                rgRepresentations: [],
                thumbnails: null,
              };
            if ((d.rgAdaptationSets.push(s), s.bIsTimedText)) {
              s.rgRoles.push("subtitle");
              let e = t.getElementsByTagName("Role");
              for (let t = 0; t < e.length; t++) {
                let i = y(e[t], "value");
                i && "subtitle" != i && s.rgRoles.push(i);
              }
              let i = t.getElementsByTagName("Representation");
              for (let e = 0; e < i.length; e++) {
                let t = i[e],
                  n = {
                    strID: y(t, "id"),
                    nBandwidth: w(t, "bandwidth"),
                    strClosedCaptionFile: "",
                  },
                  r = c(t, "BaseURL"),
                  a = r ? r.textContent : "";
                if (!a) {
                  (0, g.hB)(
                    "Closed Caption File has no BaseURL for (id): " + n.strID,
                  );
                  continue;
                }
                (n.strClosedCaptionFile = v(a, n.strID, 0)),
                  n.strClosedCaptionFile.startsWith("http") ||
                    (n.strClosedCaptionFile =
                      this.m_strBaseURL + n.strClosedCaptionFile);
                ("store" != (0, p.Zv)() && "dev" != p.De.WEB_UNIVERSE) ||
                  (n.strClosedCaptionFile =
                    p.De.STORE_BASE_URL +
                    "vtt/video/" +
                    n.strClosedCaptionFile.substring(40)),
                  s.rgRepresentations.push(n);
              }
              continue;
            }
            if (!s.bSegmentAlignment)
              return (
                (0, g.hB)(
                  "MPD - Only segment aligned dash manifests is supported",
                ),
                !1
              );
            let r = t.getElementsByTagName("ContentComponent");
            for (let e = 0; e < r.length; e++) {
              let t = y(r[e], "contentType");
              "video" == t && (s.bContainsVideo = !0),
                "audio" == t && (s.bContainsAudio = !0),
                "game" == t && (s.bContainsGame = !0);
            }
            if (0 == r.length) {
              let e = y(t, "contentType");
              "video" == e && (s.bContainsVideo = !0),
                "audio" == e && (s.bContainsAudio = !0);
            }
            if (s.bContainsVideo) {
              let e = c(t, "Thumbnails");
              if (e) {
                let t = w(e, "sheet"),
                  i = w(e, "period");
                s.thumbnails = {
                  nPeriod: i,
                  strTemplate: y(e, "template"),
                  nSheet: t,
                  nSheetSeconds: t * i,
                };
              }
            }
            let a = t.getElementsByTagName("Role");
            for (let e = 0; e < a.length; e++) {
              let t = y(a[e], "value");
              t && s.rgRoles.push(t);
            }
            let o = null,
              m = c(t, "SegmentTemplate");
            if (m) {
              let e = b(m, s, this.m_strBaseURL);
              if (!e)
                return (
                  (0, g.hB)("MPD - Failed to parse found Adaptation template"),
                  !1
                );
              o = e;
            }
            let h = t.getElementsByTagName("Representation");
            for (let e = 0; e < h.length; e++) {
              let t = h[e],
                i = this.ParseRepresentation(t, s, o, this.m_strBaseURL);
              if (!i) return !1;
              s.rgRepresentations.push(i);
            }
          }
          return !0;
        }
        BUpdate(e) {
          let t = new DOMParser().parseFromString(e, "application/xml"),
            i = S(t);
          if (!i) return !1;
          if (this.IsLiveContent()) {
            switch (y(i, "type")) {
              case "dynamic":
                break;
              case "static":
                (0, g.hB)("Converting MPD from dynamic to static"),
                  (this.m_strType = "static"),
                  (this.m_nMediaPresentationDuration = T(
                    i,
                    "mediaPresentationDuration",
                  )),
                  (this.m_nMinBufferTime = T(i, "minBufferTime")),
                  (this.m_dtAvailabilityStartTime = null),
                  (this.m_dtPublishTime = null);
            }
            let e = t.getElementsByTagName("Period");
            if (0 == e.length) return !1;
            let n = e[0].getElementsByTagName("AdaptationSet");
            for (let e = 0; e < n.length; e++) {
              let t = n[e],
                i = y(t, "id"),
                s = this.GetAdaptationByTrackID(i);
              if (s) {
                let e = null,
                  i = c(t, "SegmentTemplate");
                if (i) {
                  let t = b(i, s, this.m_strBaseURL);
                  if (!t)
                    return (
                      (0, g.hB)(
                        "MPD - Failed to parse found Adaptation template",
                      ),
                      !1
                    );
                  e = t;
                }
                let n = t.getElementsByTagName("Representation");
                if (n.length > 1)
                  for (let t = 0; t < n.length; t++) {
                    let i = n[t],
                      r = this.ParseRepresentation(i, s, e, this.m_strBaseURL);
                    if (!r)
                      return (
                        (0, g.hB)("MPD - Failed to parse representation"), !1
                      );
                    let a = null;
                    for (let e of s.rgRepresentations)
                      if (r.strID == e.strID) {
                        a = e;
                        break;
                      }
                    a
                      ? (a.segmentTemplate.strMedia =
                          r.segmentTemplate.strMedia)
                      : s.rgRepresentations.push(r);
                  }
                break;
              }
            }
          }
          let n = c(i, "Analytics");
          return (
            n &&
              ((this.m_strStatsLink = y(n, "statslink")),
              (this.m_strStalledLink = y(n, "stalledlink")),
              (this.m_strEventLogLink = y(n, "eventlink"))),
            !0
          );
        }
      }
      var L;
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Append = 1)] = "Append"),
          (e[(e.Remove = 2)] = "Remove");
      })(L || (L = {}));
      class F {
        m_callbacks = null;
        m_mpd = null;
        m_adaptation = null;
        m_mediaSource = null;
        m_sourceBuffer = null;
        m_nTrackBufferMS = 0;
        m_representation = null;
        m_eBufferUpdate = L.None;
        m_rgBufferedSegments = [];
        m_bNeedInitSegment = !0;
        m_nNextSegment = 0;
        m_bRemoveBufferState = !1;
        m_bSeekInProgress = !1;
        m_tsLastBufferRemove = 0;
        m_schNextDownload = new d.Ar();
        m_xhrDownload = null;
        m_listeners = new d.G_();
        m_rgDownloadLog = [];
        m_nCurDownloadProgress = 0;
        m_nCurDownloadBitrate = 0;
        m_stats;
        m_nNumConsecutiveDownloadGones = 0;
        m_rgGameDataFrames = [];
        m_statsGameData = null;
        constructor(e, t, i, n) {
          (this.m_callbacks = e),
            (this.m_mpd = t),
            (this.m_adaptation = i),
            (this.m_stats = n);
        }
        SetMediaSource(e) {
          this.m_mediaSource = e;
        }
        SetBufferMS(e) {
          this.m_nTrackBufferMS = e;
        }
        GetRepresentationsCount() {
          return this.m_adaptation.rgRepresentations.length;
        }
        GetRepresentationByID(e) {
          for (let t of this.m_adaptation.rgRepresentations)
            if (t.strID == e) return t;
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
        ContainsGame() {
          return this.m_adaptation.bContainsGame;
        }
        GetAdaptation() {
          return this.m_adaptation;
        }
        GetBandwidthRequired() {
          return this.m_representation.nBandwidth;
        }
        GetCurrentSegmentDurationMS() {
          return C(this.m_representation);
        }
        GetCurrentSegmentInitializationURL() {
          return V(this.m_representation);
        }
        BIsCurrentRepresentation(e) {
          return e && e.strID == this.m_representation.strID;
        }
        GetSourceBufferTimeRanges() {
          return this.m_sourceBuffer.buffered;
        }
        GetEstimatedAudioRate() {
          return this.m_representation && this.ContainsAudio()
            ? this.m_representation.nBandwidth
            : 0;
        }
        GetDebugName() {
          let e = [];
          return (
            this.ContainsVideo()
              ? e.push("Video")
              : this.ContainsAudio()
                ? e.push("Audio")
                : this.ContainsGame() && e.push("Game"),
            e.join(" & ") +
              ":" +
              this.m_callbacks.GetCurrentPlayTime().toFixed(3).toString()
          );
        }
        GetMaxSegment() {
          if (this.m_mpd.IsLiveContent()) return Number.MAX_VALUE;
          {
            let e = this.m_mpd.GetEndTime() - this.m_mpd.GetStartTime();
            return P(this.m_mpd, this.m_representation, 1e3 * e);
          }
        }
        GetAmountBufferedInPlayerMS(e) {
          if (!this.m_sourceBuffer) return 0;
          let t = this.m_sourceBuffer.buffered;
          if (0 == t.length) return 0;
          e < t.start(0) && (e = t.start(0)), e > t.end(0) && (e = t.end(0));
          let i = t.end(0) - e;
          return Math.floor(1e3 * i);
        }
        GetAmountBufferedMS(e) {
          let t = this.GetAmountBufferedInPlayerMS(e);
          for (let e of this.m_rgBufferedSegments) t += e.nDurationMS;
          return t;
        }
        ChangeRepresentation(e) {
          if (this.m_adaptation.rgRepresentations.indexOf(e) < 0) return null;
          if (this.m_representation == e) return null;
          if (
            (this.ContainsVideo() &&
              (0, g.hB)(
                `${this.GetDebugName()} changing representation to ${e.nHeight || 0}p at ${Math.ceil(e.nBandwidth / 1e3)}KB for segment ${this.m_nNextSegment}`,
              ),
            (this.m_representation = e),
            (this.m_bNeedInitSegment = !this.ContainsGame()),
            this.m_stats.SetRepresentation(e),
            this.ContainsGame())
          )
            return e;
          if (!this.m_sourceBuffer) {
            let t = e.strMimeType + ";codecs=" + e.strCodecs;
            (this.m_sourceBuffer = this.m_mediaSource.addSourceBuffer(t)),
              (0, g.hB)(t),
              this.m_listeners.AddEventListener(
                this.m_sourceBuffer,
                "updateend",
                this.OnSourceBufferUpdateEnd,
              ),
              this.m_listeners.AddEventListener(
                this.m_sourceBuffer,
                "error",
                this.OnSourceBufferError,
              ),
              this.m_listeners.AddEventListener(
                this.m_sourceBuffer,
                "abort",
                this.OnSourceBufferAbort,
              );
          }
          return e;
        }
        Close() {
          this.m_listeners.Unregister(),
            (this.m_sourceBuffer = null),
            this.ForceStopDownloads(),
            (this.m_eBufferUpdate = L.None),
            (this.m_bRemoveBufferState = !1),
            (this.m_callbacks = null),
            (this.m_mpd = null),
            (this.m_adaptation = null),
            (this.m_mediaSource = null),
            (this.m_nTrackBufferMS = 0),
            (this.m_representation = null),
            (this.m_rgBufferedSegments = []),
            (this.m_bNeedInitSegment = !0),
            (this.m_nNextSegment = 0),
            (this.m_bSeekInProgress = !1),
            (this.m_tsLastBufferRemove = 0),
            (this.m_rgDownloadLog = []),
            (this.m_stats = null),
            (this.m_rgGameDataFrames = []),
            (this.m_statsGameData = null);
        }
        GetActiveDownloads() {
          return this.m_xhrDownload ? 1 : 0;
        }
        GetActiveDownloadProgress() {
          return this.GetActiveDownloads() ? this.m_nCurDownloadProgress : 0;
        }
        OnSourceBufferUpdateEnd(e) {
          let t = this.m_callbacks.GetCurrentPlayTime(),
            i = this.GetAmountBufferedInPlayerMS(t);
          (0, g.hB)(
            `${this.GetDebugName()} OnSourceBufferUpdateEnd: [playback=${t}][buffered=${i}][start=${this.GetBufferedStart()}][end=${this.GetBufferedEnd()}]`,
          );
          let n = this.m_eBufferUpdate;
          (this.m_eBufferUpdate = L.None),
            n == L.Append && this.m_callbacks.OnSegmentDownloaded(this),
            this.m_bSeekInProgress &&
              n == L.Remove &&
              !this.m_bRemoveBufferState &&
              this.ContinueSeek(),
            this.UpdateBuffer();
        }
        OnSourceBufferError(e) {
          console.log("OnSourceBufferError", this.GetDebugName(), e),
            this.m_callbacks && this.m_callbacks.OnMediaSourceError(this);
        }
        OnSourceBufferAbort(e) {
          console.log("OnSourceBufferAbort", this.GetDebugName(), e);
        }
        ScheduleNextDownload() {
          if (this.m_bNeedInitSegment) return void this.DownloadNextSegment();
          if ((this.m_schNextDownload.Cancel(), this.m_xhrDownload))
            return void (0, g.hB)(
              `${this.GetDebugName()} ScheduleNextDownload - download already going`,
            );
          if (this.m_bSeekInProgress)
            return void (0, g.hB)(
              `${this.GetDebugName()} ScheduleNextDownload - seeking`,
            );
          if (this.m_nNextSegment > this.GetMaxSegment())
            return void (0, g.hB)(
              `${this.GetDebugName()} ScheduleNextDownload - reached max segment`,
            );
          let e = this.m_callbacks.GetCurrentPlayTime(),
            t = this.m_callbacks.GetPlaybackRate(),
            i = (function (e, t, i) {
              if (!e.IsLiveContent()) return 0;
              let n = C(t);
              return (
                (i - t.segmentTemplate.nStartNumber + 1) * n -
                e.GetDurationSinceStarted()
              );
            })(this.m_mpd, this.m_representation, this.m_nNextSegment);
          if (i > 0)
            return (
              (0, g.hB)(
                `${this.GetDebugName()} ScheduleNextDownload - segment in future`,
              ),
              void this.m_schNextDownload.Schedule(i, this.ScheduleNextDownload)
            );
          let n = this.GetAmountBufferedMS(e);
          if ((t > 1 && (n /= t), n < 4e4))
            return (
              (0, g.hB)(
                `${this.GetDebugName()} ScheduleNextDownload - have ${n} buffered, desire 40000 - downloading now`,
              ),
              void this.DownloadNextSegment()
            );
          let s = 1.1 * C(this.m_representation),
            r = this.GetAmountBufferedInPlayerMS(
              this.m_callbacks.GetCurrentPlayTime(),
            );
          (0, g.hB)(
            `${this.GetDebugName()} ScheduleNextDownload - buffered, schedule later [sleep=${s}ms][buffer=${r}]`,
          ),
            this.m_schNextDownload.Schedule(s, this.ScheduleNextDownload);
        }
        DownloadNextSegment() {
          this.m_schNextDownload.Cancel();
          let e = "",
            t = 0,
            i = !1;
          if (this.m_bNeedInitSegment)
            (e = V(this.m_representation)), (t = 0), (i = !0);
          else {
            if (this.m_nNextSegment < 0)
              return void console.error(
                "Attempting to download negative segment:",
                this.m_nNextSegment,
              );
            (n = this.m_representation),
              (s = this.m_nNextSegment),
              (e = v(n.segmentTemplate.strMedia, n.strID, s)),
              (t = C(this.m_representation)),
              this.m_nNextSegment++;
          }
          var n, s;
          this.DownloadSegment(this.m_representation.strID, i, e, t);
        }
        async DownloadSegment(e, t, i, n, s = performance.now()) {
          (0, m.X)(
            null === this.m_xhrDownload,
            "Trying to download another segment while a download is already in flight",
          ),
            this.m_schNextDownload.Cancel();
          const a = this.m_callbacks.GetCDNAuthURLParameter();
          a && (i += a), (0, g.hB)(`${this.GetDebugName()} Downloading: ` + i);
          let o,
            d = null,
            l = performance.now(),
            h = r().CancelToken.source();
          try {
            (this.m_nCurDownloadProgress = 0), (this.m_xhrDownload = h);
            let e = {
              cancelToken: this.m_xhrDownload.token,
              timeout: 15e3,
              responseType: "arraybuffer",
              onDownloadProgress: (e) => {
                (this.m_nCurDownloadProgress = e.loaded / e.total),
                  (this.m_nCurDownloadBitrate =
                    (8 * e.loaded * 1e3) / Math.max(1, performance.now() - l));
              },
            };
            this.ContainsGame() && (e.responseType = "json"),
              (d = await r().get(i, e));
          } catch (e) {
            (o = e), (d = e.response);
          }
          if (!this.m_xhrDownload || this.m_xhrDownload != h)
            return void (0, g.hB)(`Throwing away cancelled download: ${i}`);
          o &&
            (0, g.hB)(
              `${this.GetDebugName()} Failed to download segment: ${i}`,
              o,
            );
          let u = performance.now(),
            _ = Math.floor(performance.now() - l),
            p = d ? d.status : 0;
          if (((this.m_xhrDownload = null), this.m_bSeekInProgress))
            return (
              (0, g.hB)(
                `${this.GetDebugName()} Throwing away download due to seek: ${i}`,
              ),
              void this.ContinueSeek()
            );
          if (!d || 200 != d.status)
            return this.ContainsGame()
              ? void this.ScheduleNextDownload()
              : (this.m_stats.LogSegmentDownloadFailure(_, d ? d.status : 444),
                u - s > 9e3
                  ? ((0, g.hB)(
                      `${this.GetDebugName()} HTTP download failed.. stopping loader: ${u - s}ms`,
                    ),
                    void this.DownloadFailed())
                  : 410 == p
                    ? ((this.m_nNumConsecutiveDownloadGones += 1),
                      (0, g.hB)(
                        `${this.GetDebugName()} HTTP download gone.. informing the player: ${u - s}ms`,
                      ),
                      void this.DownloadGone())
                    : void this.m_schNextDownload.Schedule(500, () =>
                        this.DownloadSegment(e, t, i, n, s),
                      ));
          if (
            ((this.m_nNumConsecutiveDownloadGones = 0),
            t && (this.m_bNeedInitSegment = !1),
            this.ContainsGame())
          ) {
            let e = d.data;
            this.m_rgGameDataFrames || (this.m_rgGameDataFrames = []);
            let t = Number.MIN_VALUE,
              i = Number.MIN_VALUE;
            this.m_rgGameDataFrames.length > 0 &&
              ((t =
                this.m_rgGameDataFrames[this.m_rgGameDataFrames.length - 1]
                  .pts),
              (i =
                this.m_rgGameDataFrames[this.m_rgGameDataFrames.length - 1]
                  .gdi));
            const n = e.frame;
            n &&
              (n.pts && n.gamedata && n.gdi
                ? n.pts <= t
                  ? (0, g.hB)("Invalid game pts")
                  : n.gdi != i && this.m_rgGameDataFrames.push(n)
                : (0, g.hB)("Invalid game data")),
              this.TrimGameDataIfNecessary(),
              (this.m_statsGameData = {
                nAppID: e.appid,
                ulBroadcastRelayID: e.broadcastrelayid,
                nSegmentID: e.segmentid,
              });
          } else {
            let t = new Uint8Array(d.data);
            this.m_rgBufferedSegments.push({
              nDurationMS: n,
              data: t,
              representationStrID: e,
            }),
              this.LogDownload(l, t.length),
              this.UpdateBuffer(),
              (0, g.hB)(
                `HTTP ${p} (${_}ms, ${Math.floor(t.length / 1e3)}k): ${i}`,
              );
          }
          this.ScheduleNextDownload();
        }
        DownloadFailed() {
          this.m_callbacks.OnSegmentDownloadFailed(this);
        }
        DownloadGone() {
          this.m_callbacks.OnSegmentDownloadGone(this);
        }
        TrimGameDataIfNecessary() {}
        UpdateBuffer() {
          if (this.m_eBufferUpdate != L.None) return;
          if (this.m_bRemoveBufferState) return void this.RemoveAllBuffers();
          if (!this.m_sourceBuffer) return void (0, g.hB)("No source buffer?");
          if (this.m_rgBufferedSegments.length > 0) {
            try {
              this.m_eBufferUpdate = L.Append;
              let e = this.m_rgBufferedSegments[0];
              this.m_sourceBuffer.appendBuffer(e.data),
                this.m_rgBufferedSegments.splice(0, 1);
            } catch (e) {
              "QuotaExceededError" === e.name
                ? ((this.m_eBufferUpdate = L.None),
                  (0, g.hB)(
                    `${this.GetDebugName()} Buffer - QuotaExceededError`,
                  ))
                : (0, g.hB)(`${this.GetDebugName()} Buffer - Exception`, e);
            }
            return;
          }
          let e = performance.now();
          if (!this.m_bSeekInProgress && e - this.m_tsLastBufferRemove > 1e4) {
            let t = this.GetBufferedStart(),
              i = this.m_callbacks.GetCurrentPlayTime() - 40;
            if (t < i) {
              let n = Math.min(this.GetBufferedEnd(), i);
              return void (
                n != t &&
                ((this.m_eBufferUpdate = L.Remove),
                this.m_sourceBuffer.remove(t, n),
                (this.m_tsLastBufferRemove = e))
              );
            }
          }
        }
        RemoveAllBuffers() {
          this.m_rgBufferedSegments = [];
          let e = 0;
          if (this.m_sourceBuffer) {
            let t = this.m_sourceBuffer.buffered;
            for (let i = 0; i < t.length; i++) e < t.end(i) && (e = t.end(i));
          }
          (this.m_bRemoveBufferState = !1),
            (this.m_eBufferUpdate = L.Remove),
            0 != e
              ? this.m_sourceBuffer.remove(0, e + 1)
              : this.OnSourceBufferUpdateEnd(null);
        }
        GetBufferedStart() {
          return this.m_sourceBuffer &&
            this.m_sourceBuffer.buffered &&
            0 != this.m_sourceBuffer.buffered.length
            ? this.m_sourceBuffer.buffered.start(0)
            : 0;
        }
        GetBufferedEnd() {
          return this.m_sourceBuffer &&
            this.m_sourceBuffer.buffered &&
            0 != this.m_sourceBuffer.buffered.length
            ? this.m_sourceBuffer.buffered.end(0)
            : 0;
        }
        ForceStopDownloads() {
          this.m_schNextDownload.Cancel(),
            this.m_xhrDownload &&
              (this.m_xhrDownload.cancel(), (this.m_xhrDownload = null));
        }
        ForceRestartDownload() {
          this.ForceStopDownloads(), this.ScheduleNextDownload();
        }
        Seek(e) {
          let t = this.GetBufferedStart(),
            i = this.GetBufferedEnd(),
            n = e < t || e > i;
          if (
            (0 == t && 0 == i && (n = !0),
            (0, g.hB)(
              `${this.GetDebugName()} making an ${n ? "unbuffered" : "buffered"} seek to ${e}`,
            ),
            !this.m_bSeekInProgress && !n && !this.m_bNeedInitSegment)
          )
            return void this.ScheduleNextDownload();
          (this.m_bSeekInProgress = !0), this.ForceStopDownloads();
          const s = e - this.m_mpd.GetStartTime();
          let r = P(this.m_mpd, this.m_representation, 1e3 * s);
          if (
            ((this.m_nNextSegment = Math.min(r, this.GetMaxSegment())),
            (0, g.hB)(
              "Seek To Next Segment: " +
                this.m_nNextSegment +
                " at approx. " +
                (0, g.zB)(
                  ((this.m_nNextSegment - 1) *
                    this.GetCurrentSegmentDurationMS()) /
                    1e3,
                ) +
                " seconds.",
            ),
            this.ContainsGame())
          )
            return (
              (this.m_bSeekInProgress = !1),
              (this.m_rgGameDataFrames = []),
              void this.ScheduleNextDownload()
            );
          (this.m_bRemoveBufferState = !0), this.UpdateBuffer();
        }
        ContinueSeek() {
          this.m_bSeekInProgress &&
            (this.m_eBufferUpdate == L.Remove ||
              this.m_bRemoveBufferState ||
              ((this.m_bSeekInProgress = !1), this.ScheduleNextDownload()));
        }
        BHasEnoughBuffered(e) {
          if (this.m_bSeekInProgress) return !1;
          if (this.ContainsGame()) return !0;
          let t =
            !this.m_xhrDownload &&
            !this.m_schNextDownload.IsScheduled() &&
            this.m_nNextSegment > this.GetMaxSegment();
          return (
            this.GetAmountBufferedInPlayerMS(e) >= this.m_nTrackBufferMS || t
          );
        }
        LogDownload(e, t) {
          this.m_rgDownloadLog.length >= 4 && this.m_rgDownloadLog.shift();
          let i = performance.now() - e;
          i <= 0 ||
            (this.m_rgDownloadLog.push({ cubData: t, nDownloadMS: i }),
            this.m_stats.LogDownload(t, i));
        }
        GetDownloadHistory() {
          return this.m_rgDownloadLog;
        }
        GetAvgDownloadRate() {
          let e = 0,
            t = 0;
          for (let i of this.m_rgDownloadLog)
            (e += i.nDownloadMS), (t += i.cubData);
          return e <= 0
            ? this.m_nCurDownloadBitrate && this.GetActiveDownloads() > 0
              ? this.m_nCurDownloadBitrate
              : 0
            : (8 * t * 1e3) / e;
        }
        GetGameDataFrames() {
          return this.m_rgGameDataFrames;
        }
        GetLatestGameDataFrameAppID() {
          return this.m_statsGameData && this.m_statsGameData.nAppID
            ? this.m_statsGameData.nAppID
            : 0;
        }
      }
      (0, n.gn)([u.a], F.prototype, "OnSourceBufferUpdateEnd", null),
        (0, n.gn)([u.a], F.prototype, "OnSourceBufferError", null),
        (0, n.gn)([u.a], F.prototype, "OnSourceBufferAbort", null),
        (0, n.gn)([u.a], F.prototype, "ScheduleNextDownload", null),
        (0, n.gn)([u.a], F.prototype, "DownloadNextSegment", null),
        (0, n.gn)([u.a], F.prototype, "DownloadFailed", null),
        (0, n.gn)([u.a], F.prototype, "DownloadGone", null);
      const I = 5,
        x = "auto";
      var E, N, U;
      !(function (e) {
        (e[(e.HAVE_NOTHING = 0)] = "HAVE_NOTHING"),
          (e[(e.HAVE_METADATA = 1)] = "HAVE_METADATA"),
          (e[(e.HAVE_CURRENT_DATA = 2)] = "HAVE_CURRENT_DATA"),
          (e[(e.HAVE_FUTURE_DATA = 3)] = "HAVE_FUTURE_DATA"),
          (e[(e.HAVE_ENOUGH_DATA = 4)] = "HAVE_ENOUGH_DATA");
      })(E || (E = {})),
        (function (e) {
          (e[(e.Invalid = 0)] = "Invalid"),
            (e[(e.StreamGone = 1)] = "StreamGone");
        })(N || (N = {})),
        (function (e) {
          (e[(e.Absolute = 0)] = "Absolute"),
            (e[(e.FromAvailableStart = 1)] = "FromAvailableStart");
        })(U || (U = {}));
      class O {
        m_elVideo = null;
        m_strMPD = "";
        m_strHLS = "";
        m_strCDNAuthURLParameters = null;
        m_schUpdateMPD = new d.Ar();
        m_xhrUpdateMPD;
        m_mpd;
        m_bUseHLSManifest = !1;
        m_strVideoAdaptationID = "";
        m_strAudioAdaptationID = "";
        m_strGameAdaptationID = "";
        m_rgLoaders = [];
        m_mediaSource = null;
        m_nTrackBufferMS = 0;
        m_nLimitFPS = 0;
        m_bIsBuffering = !0;
        m_seekingToTime = null;
        m_listeners = new d.G_();
        m_bFirstPlay = !0;
        m_bPlaybackStarted = !1;
        m_nTimedText = 0;
        m_schGameDataEventTrigger = new d.Ar();
        m_schReportPlayerTrigger = new d.Ar();
        m_nGameDataLastFramePTS = -1;
        m_bStatsViewVisible = !1;
        m_schCaptureDisplayStatsTrigger = new d.Ar();
        m_videoRepSelected = null;
        m_nAudioRepresentationIndex = 0;
        m_timedTextRepSelected = null;
        m_stats = new f.vf();
        m_bClosing = !1;
        m_hlsTimeOffset = 0;
        m_bUserPlayChoice = !0;
        m_bUserLiveEdgeChoice = !0;
        m_schFirstFrameThrottler = new d.Ar();
        m_bookMarkAdapter = null;
        m_schBookmarkUpdater = new d.Ar();
        constructor(e, t = !1) {
          (0, a.rC)(this),
            (this.m_elVideo = e),
            this.m_schReportPlayerTrigger.Schedule(3e4, this.ReportPlayerStats),
            (this.m_bUseHLSManifest = t);
        }
        CalcVideoStartRelativeToSystemClock(e) {
          let t =
            (e ? new Date(e).getTime() : Date.now()) -
            this.m_mpd.GetAvailabilityStartTime().getTime();
          this.m_mpd.StartLiveContentNow(t), (0, g.hB)("server time: " + e);
        }
        GetMPDURL() {
          return this.m_strMPD;
        }
        async PlayMPD(e, t, i) {
          (this.m_strMPD = e),
            (this.m_strHLS = i),
            (this.m_strCDNAuthURLParameters = t);
          let n = await this.DownloadMPD();
          if (n)
            if (((this.m_mpd = new k()), this.m_mpd.BParse(n.data, e))) {
              if (
                (this.IsLiveContent() &&
                  (this.m_mpd.GetMinimumUpdatePeriod() > 0 &&
                    this.m_schUpdateMPD.Schedule(
                      1e3 * this.m_mpd.GetMinimumUpdatePeriod(),
                      this.UpdateMPD,
                    ),
                  this.CalcVideoStartRelativeToSystemClock(n.headers.date)),
                this.m_bUseHLSManifest)
              )
                return (
                  (this.m_elVideo.src = this.m_strHLS),
                  this.m_elVideo.addEventListener("loadedmetadata", () => {
                    (this.m_bIsBuffering = !1), this.BeginPlayback();
                  }),
                  void document.addEventListener(
                    "visibilitychange",
                    this.OnVisibilityChange,
                  )
                );
              this.BCreateLoaders()
                ? (this.InitVideoControl(), this.InitTimedText())
                : this.CloseWithError(
                    "playbackerror",
                    "Failed to create segment loaders",
                  );
            } else
              this.CloseWithError(
                "playbackerror",
                "Failed to parse MPD file",
                this.m_strMPD,
              );
        }
        InitTimedText() {
          let e = !0;
          (this.m_nTimedText = 0),
            this.m_mpd.GetTimedTextAdaptionSet(0).forEach((t) => {
              let i = (0, o.jM)(p.De.LANGUAGE);
              if (
                t.rgRepresentations.length > 0 &&
                t.rgRepresentations[0].strClosedCaptionFile &&
                l.is[t.strLanguage]
              ) {
                const n = document.createElement("track");
                (n.kind = "subtitles"),
                  (n.label = (0, l.Xx)(
                    "#Language_" + (0, o.j_)(l.is[t.strLanguage]),
                  )),
                  (n.srclang = t.strLanguage),
                  (n.src = t.rgRepresentations[0].strClosedCaptionFile),
                  (this.m_nTimedText += 1),
                  0 != i &&
                    l.is[t.strLanguage] == i &&
                    ((n.default = !0),
                    (this.m_timedTextRepSelected = t.rgRepresentations[0]),
                    (e = !1)),
                  this.m_elVideo.appendChild(n),
                  e &&
                    (n.addEventListener("load", () => {
                      this.m_elVideo.textTracks &&
                        this.m_elVideo.textTracks.length > 0 &&
                        (this.m_elVideo.textTracks[0].mode = "disabled");
                    }),
                    (e = !1));
              }
            });
        }
        SetSubtitles(e) {
          let t = null;
          for (let i = 0; i < this.m_elVideo.textTracks.length; i++) {
            const n = this.m_elVideo.textTracks[i];
            if (l.is[n.language] == e) {
              let e = this.GetTimeTextAdaptions(0).filter(
                (e) => e.strLanguage == n.language,
              );
              e &&
                e.length > 0 &&
                e[0].rgRepresentations &&
                (t = e[0].rgRepresentations[0]),
                (n.mode = "showing");
            } else n.mode = "disabled";
          }
          this.m_timedTextRepSelected = t;
        }
        PlayWebRTC(e, t, i, n, s) {}
        OnVisibilityChange() {
          "visible" === document.visibilityState &&
            (this.m_elVideo.src = this.m_strHLS);
        }
        Close() {
          if (
            ((this.m_bClosing = !0),
            this.m_listeners.Unregister(),
            this.m_bUseHLSManifest &&
              document.removeEventListener(
                "visibilitychange",
                this.OnVisibilityChange,
              ),
            this.StopDownloads(),
            this.m_elVideo && this.m_elVideo.pause(),
            this.m_mediaSource)
          ) {
            try {
              "closed" != this.m_mediaSource.readyState &&
                this.m_mediaSource.endOfStream();
            } catch (e) {}
            this.m_mediaSource = null;
          }
          (this.m_bIsBuffering = !0),
            (this.m_elVideo = null),
            (this.m_strMPD = ""),
            (this.m_mpd = null),
            (this.m_bUseHLSManifest = !1),
            (this.m_strVideoAdaptationID = ""),
            (this.m_strAudioAdaptationID = ""),
            (this.m_strGameAdaptationID = ""),
            (this.m_nTrackBufferMS = 0),
            (this.m_nLimitFPS = 0),
            (this.m_seekingToTime = null),
            (this.m_nGameDataLastFramePTS = -1),
            (this.m_bStatsViewVisible = !1),
            (this.m_videoRepSelected = null),
            (this.m_nAudioRepresentationIndex = 0),
            this.m_stats && this.m_stats.GetFPSMonitor().Close(),
            (this.m_stats = null),
            (this.m_bFirstPlay = !0),
            (this.m_bPlaybackStarted = !1);
        }
        StopDownloads() {
          this.m_xhrUpdateMPD &&
            (this.m_xhrUpdateMPD.cancel(), (this.m_xhrUpdateMPD = null)),
            this.m_schUpdateMPD.Cancel(),
            this.m_schGameDataEventTrigger.Cancel(),
            this.m_schReportPlayerTrigger.Cancel(),
            this.m_schCaptureDisplayStatsTrigger.Cancel(),
            this.m_schFirstFrameThrottler.Cancel(),
            this.m_schBookmarkUpdater.Cancel(),
            this.m_elVideo &&
              1 != this.m_elVideo.playbackRate &&
              (this.m_elVideo.playbackRate = 1);
          for (let e of this.m_rgLoaders) e.Close();
          (this.m_rgLoaders = []), (this.m_bIsBuffering = !0);
        }
        IsBuffering() {
          return this.m_bIsBuffering;
        }
        IsLiveContent() {
          return !!this.m_mpd && this.m_mpd.IsLiveContent();
        }
        async DownloadMPD() {
          if (this.m_xhrUpdateMPD)
            return (0, m.X)(!1, "Multiple MPD download requests"), null;
          let e = performance.now();
          for (; performance.now() - e < 3e4; ) {
            let e = null;
            try {
              this.m_xhrUpdateMPD = r().CancelToken.source();
              const t =
                this.m_strMPD +
                (this.m_strCDNAuthURLParameters
                  ? this.m_strCDNAuthURLParameters
                  : "");
              e = await r().get(t, { cancelToken: this.m_xhrUpdateMPD.token });
            } catch (e) {}
            if (((this.m_xhrUpdateMPD = null), this.m_bClosing)) return null;
            if (e && 200 == e.status) return e;
            if (e && 410 == e.status)
              return (
                this.CloseWithError(
                  "playbackerror",
                  "Failed to download MPD: 410 Gone",
                ),
                null
              );
            (0, g.hB)("Failed to download, will retry: " + this.m_strMPD),
              await (0, _._R)(200);
          }
          return (0, g.hB)("Failed to download: " + this.m_strMPD), null;
        }
        async UpdateMPD() {
          (0, g.hB)("Updating MPD in player from: " + this.m_strMPD);
          let e = await this.DownloadMPD();
          e &&
            (this.m_mpd.BUpdate(e.data)
              ? (this.IsLiveContent() &&
                  this.CalcVideoStartRelativeToSystemClock(e.headers.date),
                this.m_stats.SetAnalyticLinks(
                  this.m_mpd.GetStatsLink(),
                  this.m_mpd.GetStalledLink(),
                  this.m_mpd.GetEventLink(),
                ),
                this.m_mpd.GetMinimumUpdatePeriod() > 0 &&
                  this.m_schUpdateMPD.Schedule(
                    1e3 * this.m_mpd.GetMinimumUpdatePeriod(),
                    this.UpdateMPD,
                  ))
              : this.CloseWithError(
                  "playbackerror",
                  "Failed to parse on Update the MPD file",
                ));
        }
        CloseWithError(e, ...t) {
          this.Close(), (0, g.hB)(...t);
        }
        BCreateLoaders() {
          let e = this.m_mpd.GetPeriods();
          if (0 == e.length) return !1;
          let t = e[0];
          (this.m_strVideoAdaptationID = ""),
            (this.m_strAudioAdaptationID = ""),
            (this.m_strGameAdaptationID = "");
          for (let e of t.rgAdaptationSets) {
            let t = null;
            if (
              (!this.m_strVideoAdaptationID &&
                e.bContainsVideo &&
                A(e) &&
                ((t = e), (this.m_strVideoAdaptationID = e.strID)),
              !this.m_strAudioAdaptationID &&
                e.bContainsAudio &&
                A(e) &&
                ((t = e), (this.m_strAudioAdaptationID = e.strID)),
              !this.m_strGameAdaptationID &&
                e.bContainsGame &&
                ((t = e), (this.m_strGameAdaptationID = e.strID)),
              t)
            ) {
              let e = new F(this, this.m_mpd, t, this.m_stats);
              this.m_rgLoaders.push(e);
            }
          }
          return this.m_strVideoAdaptationID.length > 0;
        }
        InitVideoControl() {
          let e = new MediaSource(),
            t = URL.createObjectURL(e);
          this.m_elVideo.pause(),
            (this.m_elVideo.srcObject = null),
            (this.m_elVideo.src = t),
            (this.m_mediaSource = e),
            this.m_listeners.AddEventListener(
              e,
              "sourceopen",
              this.OnMediaSourceOpen,
            ),
            this.m_listeners.AddEventListener(
              e,
              "sourceended",
              this.OnMediaSourceEnded,
            ),
            this.m_listeners.AddEventListener(
              e,
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
              this.OnPlayAction,
            );
        }
        OnMediaSourceOpen(e) {
          (0, g.hB)("OnMediaSourceOpen");
          for (let e of this.m_rgLoaders) e.SetMediaSource(this.m_mediaSource);
          this.BeginPlayback();
        }
        HandleMediaSourceError(e) {
          this.m_bClosing ||
            e.target != this.m_mediaSource ||
            this.StopDownloads();
        }
        OnMediaSourceEnded(e) {
          (0, g.hB)("OnMediaSourceEnded", e), this.HandleMediaSourceError(e);
        }
        OnMediaSourceClose(e) {
          (0, g.hB)("OnMediaSourceClose", e), this.HandleMediaSourceError(e);
        }
        OnVideoWaiting(e) {
          if (
            !this.IsLiveContent() &&
            this.m_mpd &&
            this.m_mpd.GetEndTime() - this.GetCurrentPlayTime() < 1
          )
            return (
              (0, g.hB)(
                `pausing playback due to OnVideoWaiting (endTime=${this.m_mpd.GetEndTime()}, currentPlaytime=${this.GetCurrentPlayTime()} )`,
              ),
              void this.Pause()
            );
          if (
            !this.BIsPlayerBufferedBetween(
              this.m_elVideo.currentTime,
              this.m_elVideo.currentTime + 0.5,
            ) &&
            !this.m_seekingToTime
          ) {
            if (this.m_elVideo && this.m_elVideo.buffered.length > 1) {
              let e = this.m_elVideo.currentTime,
                t = this.m_elVideo.buffered;
              for (let i = 0; i < t.length; ++i)
                if (
                  ((0, g.hB)(
                    "OnVideoWaiting buffer " +
                      i +
                      " start:" +
                      t.start(i) +
                      " end: " +
                      t.end(i) +
                      " playerTime: " +
                      e,
                  ),
                  t.start(i) <= e && e <= t.end(i))
                )
                  return (
                    (0, g.hB)(
                      "OnVideoWaiting - time splitting, jumping to buffer " + i,
                    ),
                    void this.Seek(t.start(i))
                  );
            }
            if (
              (this.m_stats.ReportVideoStalled(
                this.m_rgLoaders,
                this.m_elVideo,
              ),
              null === this.m_videoRepSelected)
            ) {
              let e = !0,
                t = this.GetVideoLoader();
              if (t) {
                let i = this.m_mpd.GetLowestRepresentation(
                  this.GetCurrentVideoAdaptation().strID,
                );
                i &&
                  !t.BIsCurrentRepresentation(i) &&
                  (t.ChangeRepresentation(i),
                  (0, g.hB)(
                    "OnVideoWaiting - Stalled, forced restart download at resolution: " +
                      i.nWidth +
                      "x" +
                      i.nHeight +
                      "@" +
                      i.nFrameRate +
                      " instead",
                  ),
                  (e = !1)),
                  this.Seek(this.m_elVideo.currentTime);
              }
              e &&
                (0, g.hB)(
                  "OnVideoWaiting - Stalled, already at lowest resolution. No action taken. BHasLoader: " +
                    (null != t),
                );
            } else
              (0, g.hB)(
                "OnVideoWaiting - Stalled, user explicitly chose a resolution: " +
                  this.m_videoRepSelected.nWidth +
                  "x" +
                  this.m_videoRepSelected.nHeight +
                  "@" +
                  this.m_videoRepSelected.nFrameRate,
              );
          }
        }
        OnVideoPause(e) {
          this.OnVideoBufferProgress(),
            this.m_stats.GetFPSMonitor().Close(),
            this.SendUpdateToBookmarkServiceIfNeeded();
        }
        OnVideoResize(e) {
          this.m_stats.GetFPSMonitor().SetWindowResized();
        }
        OnDebugPrintEventInfoAndAvailableBuffer(e) {
          let t = -1,
            i = this.GetVideoLoader();
          this.m_elVideo &&
            i &&
            (t = i.GetAmountBufferedInPlayerMS(this.m_elVideo.currentTime)),
            (0, g.hB)("DebugMessage - Stats: " + e.type + " BufferedMS: " + t);
        }
        OnVideoError(e) {
          (0, g.hB)("OnVideoError");
        }
        OnVideoCanPlay(e) {
          this.m_bIsBuffering ||
            (this.m_bUserPlayChoice && this.PlayOnElement(),
            this.m_stats.LogVideoOnCanPlay(e));
        }
        GetCurrentPlayTime() {
          if (this.m_seekingToTime) {
            if (
              !this.m_bPlaybackStarted &&
              this.m_seekingToTime.eSeekType == U.FromAvailableStart
            )
              return 0;
            let e =
              this.m_seekingToTime.eSeekType == U.FromAvailableStart
                ? this.GetAvailableVideoStartTime()
                : 0;
            return this.m_seekingToTime.nTime + e;
          }
          return this.m_bUseHLSManifest && this.m_mpd
            ? (this.m_elVideo.currentTime > 0 &&
                0 === this.m_hlsTimeOffset &&
                (this.m_hlsTimeOffset =
                  this.GetBufferedLiveEdgeTime() - this.m_elVideo.currentTime),
              this.m_elVideo.currentTime + this.m_hlsTimeOffset)
            : this.m_elVideo.currentTime;
        }
        OnVideoTimeUpdate() {
          if (this.m_bUserLiveEdgeChoice && this.IsLiveContent()) {
            let e = this.GetBufferedLiveEdgeTime();
            if (
              1 == this.m_elVideo.playbackRate &&
              this.m_elVideo.currentTime <= e - 4.5 &&
              this.BIsPlayerBufferedBetween(this.m_elVideo.currentTime, e)
            ) {
              let t = e - this.m_elVideo.currentTime;
              (this.m_elVideo.playbackRate = 1.1),
                (0, g.hB)(
                  "User is behind by " +
                    t.toFixed(2) +
                    " seconds, increasing playback speed to catch-up to live edge.",
                );
            } else
              1.1 == this.m_elVideo.playbackRate &&
                this.m_elVideo.currentTime >= e - 1 &&
                ((this.m_elVideo.playbackRate = 1),
                (0, g.hB)("User is caught up, returning to normal playrate"));
          } else {
            const e = this.GetAvailableVideoStartTime(),
              t = this.GetBufferedLiveEdgeTime() - e;
            this.GetCurrentPlayTime() - e >= t && this.Pause();
          }
        }
        SetBookmarkAdapter(e) {
          this.m_bookMarkAdapter = e;
        }
        SendUpdateToBookmarkServiceIfNeeded() {
          if (this.m_bookMarkAdapter) {
            let e = this.m_elVideo.currentTime,
              t = this.GetCurrentVideoAdaptation(),
              i = t && t.strID ? t.strID : null,
              n = this.GetCurrentAudioAdaptationfunction(),
              s = n && n.strID ? n.strID : null,
              r = this.GetCurrentTimedTextRepresentation(),
              a = r && r.strID ? r.strID : null;
            this.m_bookMarkAdapter.SetBookmark(e >= 0 ? e : 0, i, s, a),
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
        OnPlayAction() {
          this.SendUpdateToBookmarkServiceIfNeeded();
        }
        BIsPlayerBufferedBetween(e, t) {
          return (
            this.m_elVideo.buffered.length > 0 &&
            e >= this.m_elVideo.buffered.start(0) &&
            t <= this.m_elVideo.buffered.end(0)
          );
        }
        GetLiveContentStartTime() {
          return this.m_mpd.GetAvailabilityStartTime();
        }
        GetTimeTextAdaptions(e) {
          return this.m_mpd ? this.m_mpd.GetTimedTextAdaptionSet(e) : [];
        }
        GetAvailableVideoStartTime() {
          if (!this.m_mpd) return 0;
          let e = 0;
          if (this.IsLiveContent()) {
            let t = Math.floor(this.m_mpd.GetDurationSinceStarted() / 1e3),
              i = this.GetBufferedLiveEdgeTime(),
              n = this.m_mpd.GetTimeShiftBufferDepth();
            (e = n ? t - n + 10 : 0), (e = h.Lh(e, 0, i));
          } else e = this.m_mpd.GetStartTime();
          return e;
        }
        GetBufferedLiveEdgeTime() {
          if (!this.m_mpd) return 0;
          let e = 0;
          return (
            (e = this.IsLiveContent()
              ? Math.floor(
                  (this.m_mpd.GetDurationSinceStarted() -
                    this.m_nTrackBufferMS) /
                    1e3,
                )
              : this.m_mpd.GetEndTime()),
            e
          );
        }
        IsPaused() {
          return !this.m_bUserPlayChoice;
        }
        SetUserPlayChoice(e) {
          (this.m_bUserPlayChoice = e),
            this.DispatchEvent("valve-userpausechange");
        }
        Play() {
          this.SetUserPlayChoice(!0),
            !this.IsLiveContent() &&
            this.m_mpd &&
            this.m_mpd.GetEndTime() - this.GetCurrentPlayTime() < 1
              ? this.Seek(this.m_mpd.GetStartTime())
              : this.Seek(this.GetCurrentPlayTime());
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
        GetCDNAuthURLParameter() {
          return this.m_strCDNAuthURLParameters;
        }
        OnSegmentDownloaded(e) {
          (0, g.hB)(e.GetDebugName() + " OnSegmentDownloaded"),
            this.UpdateVideoRepresentation(this.m_videoRepSelected),
            this.OnVideoBufferProgress(),
            e == this.GetVideoLoader() &&
              this.m_stats.SetCurrentVideoBandwidth(e.GetAvgDownloadRate());
        }
        PlayOnElement() {
          let e = this.m_bFirstPlay;
          this.m_bFirstPlay = !1;
          let t = this.m_elVideo.play();
          t
            ? t
                .then(() => {
                  this.m_stats
                    .GetFPSMonitor()
                    .StartTracking(() =>
                      this.m_stats.ExtractFrameInfo(this.m_elVideo),
                    );
                })
                .catch((t) => {
                  e && this.DispatchEvent("valve-userinputneeded");
                })
            : this.m_stats
                .GetFPSMonitor()
                .StartTracking(() =>
                  this.m_stats.ExtractFrameInfo(this.m_elVideo),
                );
        }
        OnVideoBufferProgress() {
          if (!this.IsBuffering()) return;
          let e = this.m_rgLoaders.length > 0,
            t = this.GetPlaybackStartTime(0);
          for (let i of this.m_rgLoaders) {
            if (!i.BHasEnoughBuffered(t)) {
              e = !1;
              break;
            }
            t = Math.max(t, i.GetBufferedStart());
          }
          e &&
            ((this.m_bIsBuffering = !1),
            (this.m_seekingToTime = null),
            this.m_elVideo.currentTime != t
              ? (this.m_elVideo.currentTime = t)
              : this.m_elVideo.paused &&
                this.m_bUserPlayChoice &&
                this.PlayOnElement(),
            this.DispatchEvent("valve-bufferupdate"));
        }
        OnSegmentDownloadFailed(e, t) {
          this.StopDownloads(), this.DispatchEvent("valve-downloadfailed", t);
        }
        OnSegmentDownloadGone(e) {
          this.m_bIsBuffering && e.GetNumConsecutiveDownloadGones() <= 3
            ? this.Seek(
                this.GetCurrentPlayTime() +
                  e.GetCurrentSegmentDurationMS() / 1e3,
              )
            : ((0, g.hB)(
                "OnSegmentDownloadGone: too many consecutive 'gone', erroring the download: " +
                  e.GetNumConsecutiveDownloadGones(),
              ),
              this.OnSegmentDownloadFailed(e, N.StreamGone));
        }
        OnMediaSourceError(e) {
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
          for (let e of this.m_rgLoaders) if (e.ContainsVideo()) return e;
          return null;
        }
        GetAudioLoader() {
          for (let e of this.m_rgLoaders) if (e.ContainsAudio()) return e;
          return null;
        }
        GetGameLoader() {
          for (let e of this.m_rgLoaders) if (e.ContainsGame()) return e;
          return null;
        }
        SetTrackBufferMS(e) {
          this.m_nTrackBufferMS = e;
          for (let t of this.m_rgLoaders) t.SetBufferMS(e);
        }
        BeginPlayback() {
          if (!this.m_bUseHLSManifest) {
            let e = this.PickStartingVideoRepresentation();
            for (let t of this.m_rgLoaders)
              if (t.ContainsVideo()) {
                t.ChangeRepresentation(e);
                let i = t.GetCurrentSegmentDurationMS();
                this.m_schFirstFrameThrottler.Schedule(
                  i / 2,
                  this.VerifyFirstSegmentDownloadProgress,
                );
              } else if (t.ContainsAudio() || t.ContainsGame()) {
                let e =
                  t.GetAdaptation().rgRepresentations.length > 0
                    ? t.GetAdaptation().rgRepresentations[0]
                    : null;
                t.ChangeRepresentation(e);
              }
          }
          this.m_bPlaybackStarted = !0;
          let e = 0;
          if (this.IsLiveContent()) {
            let t = this.GetVideoLoader().GetCurrentSegmentDurationMS(),
              i = 1e3 * this.m_mpd.GetMinBufferTime(),
              n = Math.max(t, i);
            this.SetTrackBufferMS(n);
            let s = this.GetBufferedLiveEdgeTime();
            (e = this.GetPlaybackStartTime(s)),
              (0, g.hB)(
                `Begin playback of live content [this.buffer=${this.m_nTrackBufferMS}][nStartTime=${e}][nLiveEdge=${s}]`,
              );
          } else
            this.SetTrackBufferMS(8e3),
              (e = this.GetPlaybackStartTime(0)),
              this.m_bookMarkAdapter &&
                ((e = this.m_bookMarkAdapter.GetBeginPlaytime()),
                this.m_mpd.GetEndTime() - e < 5 && (e = 0)),
              (0, g.hB)(
                `Begin playback of non-live content [this.buffer=${this.m_nTrackBufferMS}][nStartTime=${e}]`,
              );
          (this.m_seekingToTime = null),
            (0, g.hB)("Starting playback at " + e),
            this.m_stats.SetSegmentDurationMS(
              this.GetVideoLoader().GetCurrentSegmentDurationMS(),
            ),
            this.m_stats.SetAnalyticLinks(
              this.m_mpd.GetStatsLink(),
              this.m_mpd.GetStalledLink(),
              this.m_mpd.GetEventLink(),
            ),
            this.m_stats.SetVideoInitializationURL(
              this.GetVideoLoader().GetCurrentSegmentInitializationURL(),
            ),
            this.Seek(e),
            this.GetGameLoader() &&
              this.m_schGameDataEventTrigger.Schedule(
                500,
                this.GameDataEventTrigger,
              );
        }
        VerifyFirstSegmentDownloadProgress() {
          let e = this.GetVideoLoader();
          if (
            null === this.m_videoRepSelected &&
            e &&
            e.GetDownloadHistory().length <= 1 &&
            e.GetActiveDownloads() > 0 &&
            e.GetActiveDownloadProgress() < 0.55
          ) {
            let t = this.DetermineBestVideoRepresentation();
            t &&
              !e.BIsCurrentRepresentation(t) &&
              (e.ChangeRepresentation(t),
              e.ForceRestartDownload(),
              (0, g.hB)(
                "Video download progressing too slowly, choosing " +
                  t.nWidth +
                  "x" +
                  t.nHeight +
                  "@" +
                  t.nFrameRate +
                  " instead",
              ));
          }
        }
        PickStartingVideoRepresentation() {
          let e = this.GetVideoLoader();
          if (!e) return null;
          let t = e.GetAdaptation(),
            i = null;
          for (let n = e.GetRepresentationsCount() - 1; n >= 0; n--) {
            let e = t.rgRepresentations[n],
              s = e.nFrameRate ? e.nFrameRate : 0;
            if (
              !(this.m_nLimitFPS > 0 && s > this.m_nLimitFPS) &&
              ((i = e), this.GetVideoPlayerHeight() <= e.nHeight)
            )
              break;
          }
          return i;
        }
        DetermineBestVideoRepresentation() {
          let e = this.GetVideoLoader(),
            t = this.GetAudioLoader(),
            i = t && t != e ? t.GetEstimatedAudioRate() : 0,
            n = this.GetAvgLoaderDownloadRate(),
            s = e.GetRepresentationsCount() - 1,
            r = e.GetAdaptation().rgRepresentations[s];
          for (let t = s - 1; t >= 0; t--) {
            let s = e.GetAdaptation().rgRepresentations[t],
              a = (s.nBandwidth + i) * this.m_elVideo.playbackRate * 1.15;
            if (n < a) {
              (0, g.hB)(
                `Video select: Skipping ${t} due to rate: [avg=${n}][required=${a}]`,
              );
              continue;
            }
            let o = s.nFrameRate || 0;
            if (this.IsLiveContent() && o > 30) {
              let e = this.m_stats.GetFPSMonitor();
              if (
                e.BIsDroppingFrames() ||
                (e.BHasCurrentFPS() && Math.ceil(e.GetCurrentFPS()) < 29)
              ) {
                (0, g.hB)(
                  `Video select: Skipping ${t} due to dropping frames and high FPS representation: [fps:${o}]`,
                );
                continue;
              }
            }
            if (this.m_nLimitFPS > 0 && o > this.m_nLimitFPS) {
              (0, g.hB)(`Video select: Skipping ${t} due to frame rate limit`);
              continue;
            }
            let m = r.nHeight || 0,
              d = s.nHeight || 0,
              l = this.GetVideoPlayerHeight();
            if (l > 0 && m > 0) {
              if (d > H(l)) break;
            }
            r = s;
          }
          return r;
        }
        UpdateVideoRepresentation(e) {
          if (e && this.m_videoRepSelected == e) return null;
          let t = this.GetVideoLoader();
          if (!t) return null;
          if (this.IsBuffering()) return null;
          let i = this.DetermineBestVideoRepresentation();
          return (this.m_videoRepSelected = null), t.ChangeRepresentation(i);
        }
        GetPlaybackStartTime(e) {
          if (!this.m_seekingToTime) return e;
          (0, m.X)(
            this.m_bPlaybackStarted,
            "Missing mpd info to calculate seek time",
          );
          let t =
            this.m_seekingToTime.eSeekType == U.FromAvailableStart
              ? this.GetAvailableVideoStartTime()
              : 0;
          return this.m_seekingToTime.nTime + t;
        }
        CanSeek() {
          return !0;
        }
        SeekAndPlay(e) {
          return this.SetUserPlayChoice(!0), this.Seek(e);
        }
        Seek(e, t = U.Absolute) {
          if (!this.m_bPlaybackStarted)
            return (this.m_seekingToTime = { nTime: e, eSeekType: t }), e;
          t == U.FromAvailableStart && (e += this.GetAvailableVideoStartTime());
          let i = this.GetAvailableVideoStartTime(),
            n = this.GetBufferedLiveEdgeTime();
          const s = e;
          (e = h.Lh(e, i, n)) != s &&
            (0, g.hB)(`Seek time ${s} was clamped to the range ${i} to ${n}`),
            (this.m_bUserLiveEdgeChoice = e >= n - I);
          let r = this.m_elVideo.paused;
          if ((r || this.m_elVideo.pause(), this.m_bUseHLSManifest))
            (this.m_elVideo.currentTime = e - this.m_hlsTimeOffset),
              this.m_elVideo.play();
          else {
            (this.m_bIsBuffering = !0),
              (this.m_seekingToTime = { nTime: e, eSeekType: U.Absolute });
            for (let t of this.m_rgLoaders)
              t.ContainsGame() && (e = this.GetBufferedLiveEdgeTime()),
                t.Seek(e);
            this.DispatchEvent("valve-bufferupdate"),
              r && this.OnVideoBufferProgress();
          }
          return e;
        }
        JumpTime(e) {
          return (e += this.GetCurrentPlayTime()), this.Seek(e);
        }
        GetVideoPlayerHeight() {
          return this.m_elVideo.clientHeight;
        }
        GetAvgLoaderDownloadRate() {
          let e = 0,
            t = 0,
            i = [this.GetVideoLoader()];
          for (let n of i) n && ((e += n.GetAvgDownloadRate()), t++);
          return 0 == t ? 0 : e / t;
        }
        GameDataEventTrigger() {
          let e = this.GetGameLoader();
          if (!e) return;
          let t = e.GetGameDataFrames(),
            i = -1;
          if (((i = t.length - 1), i >= 0)) {
            let n = t[i];
            n.pts != this.m_nGameDataLastFramePTS &&
              ((this.m_nGameDataLastFramePTS = n.pts),
              (n.gamedata.appid = e.GetLatestGameDataFrameAppID()),
              this.DispatchEvent("valve-gamedataupdate", n));
          }
          this.m_schGameDataEventTrigger.Schedule(
            500,
            this.GameDataEventTrigger,
          );
        }
        DispatchEvent(e, t = null) {
          let i = new CustomEvent(e, {
            cancelable: !0,
            bubbles: !0,
            detail: t,
          });
          this.m_elVideo
            ? this.m_elVideo.dispatchEvent(i)
            : console.error(
                `dashplayer: attempting to fire ${e} when elVideo not set`,
                t,
              );
        }
        IsMuted() {
          return this.m_elVideo.muted;
        }
        SetMuted(e) {
          this.m_elVideo.muted = e;
        }
        SetVolume(e) {
          (e = h.Lh(e, 0, 1)), (this.m_elVideo.volume = e);
        }
        GetVolume() {
          return this.m_elVideo.volume;
        }
        GetDASHPlayerStats() {
          return this.m_stats;
        }
        ReportPlayerStats() {
          this.m_stats.ReportPlayerStats(this.m_rgLoaders, this.m_elVideo),
            this.m_schReportPlayerTrigger.Schedule(3e5, this.ReportPlayerStats);
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
          let e = [];
          if (
            (e.push({
              id: x,
              displayName: "Auto",
              selected: null === this.m_videoRepSelected,
            }),
            this.m_bUseHLSManifest)
          )
            return e;
          let t = this.GetCurrentVideoAdaptation();
          if (t)
            for (let i of t.rgRepresentations) {
              let t =
                  this.m_videoRepSelected &&
                  this.m_videoRepSelected.strID == i.strID,
                n = i.nFrameRate;
              n > 50 && i.nFrameRate < 70
                ? (n = 60)
                : n > 25 && n < 35 && (n = 30);
              let s = `${i.nWidth}x${i.nHeight} @ ${n}fps`;
              e.push({
                id: i.strID,
                displayName: s,
                selected: t,
                width: i.nWidth,
                fps: n,
              });
            }
          return (
            e.sort((e, t) =>
              e.width === t.width ? t.fps - e.fps : t.width - e.width,
            ),
            e
          );
        }
        SetVideoRepresentation(e) {
          let t = !0,
            i = this.GetVideoLoader();
          if (e && e.id != x) {
            let n = i.GetRepresentationByID(e.id);
            n &&
              ((t = !1),
              (null !== this.m_videoRepSelected &&
                this.m_videoRepSelected.strID == n.strID) ||
                ((this.m_videoRepSelected = n),
                i.ChangeRepresentation(n),
                this.Seek(this.GetCurrentPlayTime())));
          }
          t && (this.m_videoRepSelected = null);
        }
        GetThumbnailForTimestamp(e) {
          return "";
        }
        BHasTimedText() {
          return this.m_nTimedText > 0;
        }
      }
      function H(e) {
        return e < 360 ? 480 : e < 480 ? 720 : 4320;
      }
      (0, n.gn)([a.LO], O.prototype, "m_nTimedText", void 0),
        (0, n.gn)([a.aD], O.prototype, "InitTimedText", null),
        (0, n.gn)([u.a], O.prototype, "OnVisibilityChange", null),
        (0, n.gn)([u.a], O.prototype, "UpdateMPD", null),
        (0, n.gn)([u.a], O.prototype, "OnMediaSourceOpen", null),
        (0, n.gn)([u.a], O.prototype, "HandleMediaSourceError", null),
        (0, n.gn)([u.a], O.prototype, "OnMediaSourceEnded", null),
        (0, n.gn)([u.a], O.prototype, "OnMediaSourceClose", null),
        (0, n.gn)([u.a], O.prototype, "OnVideoWaiting", null),
        (0, n.gn)([u.a], O.prototype, "OnVideoPause", null),
        (0, n.gn)([u.a], O.prototype, "OnVideoResize", null),
        (0, n.gn)(
          [u.a],
          O.prototype,
          "OnDebugPrintEventInfoAndAvailableBuffer",
          null,
        ),
        (0, n.gn)([u.a], O.prototype, "OnVideoError", null),
        (0, n.gn)([u.a], O.prototype, "OnVideoCanPlay", null),
        (0, n.gn)([u.a], O.prototype, "GetCurrentPlayTime", null),
        (0, n.gn)([u.a], O.prototype, "OnVideoTimeUpdate", null),
        (0, n.gn)(
          [u.a],
          O.prototype,
          "SendUpdateToBookmarkServiceIfNeeded",
          null,
        ),
        (0, n.gn)([u.a], O.prototype, "OnPlayAction", null),
        (0, n.gn)([u.a], O.prototype, "GetPlaybackRate", null),
        (0, n.gn)([u.a], O.prototype, "GetCDNAuthURLParameter", null),
        (0, n.gn)([u.a], O.prototype, "OnSegmentDownloaded", null),
        (0, n.gn)([u.a], O.prototype, "PlayOnElement", null),
        (0, n.gn)([u.a], O.prototype, "OnSegmentDownloadFailed", null),
        (0, n.gn)([u.a], O.prototype, "OnSegmentDownloadGone", null),
        (0, n.gn)([u.a], O.prototype, "OnMediaSourceError", null),
        (0, n.gn)(
          [u.a],
          O.prototype,
          "VerifyFirstSegmentDownloadProgress",
          null,
        ),
        (0, n.gn)([u.a], O.prototype, "GameDataEventTrigger", null),
        (0, n.gn)([u.a], O.prototype, "ReportPlayerStats", null),
        (0, n.gn)([a.aD.bound], O.prototype, "CaptureStatsForDisplay", null);
    },
    48695: (e, t, i) => {
      i.d(t, { vf: () => S });
      var n = i(85556),
        s = i(54842),
        r = i(80751),
        a = i.n(r),
        o = i(35427),
        m = i(68324),
        d = i(37563),
        l = i(45492),
        h = i(31846),
        u = i(24549);
      const _ = 1e6;
      class p {
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
      class g extends p {
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
      class f extends p {
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
      class S {
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
        m_allTimeSnapshot = new c(0);
        m_rgSnapShots = new Array(new c(0));
        m_videoResolution = 0;
        m_audioRate = 0;
        m_audioChannel = 0;
        m_frameRate = 0;
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
        m_nTimeToFirstFrameMS = -1;
        m_fpsMonitor = new T();
        constructor() {
          (0, s.rC)(this);
        }
        GetBytesReceivedToDisplay() {
          return (0, u.l)(this.m_allTimeSnapshot.m_nBytesReceived, 1);
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
        GetBufferedVideoSegmentForDisplay(e) {
          return this.m_videoBufferedRanges &&
            e < this.m_videoBufferedRanges.length
            ? (0, m.zB)(this.m_videoBufferedRanges.start(e)) +
                " - " +
                (0, m.zB)(this.m_videoBufferedRanges.end(e))
            : (0, h.Xx)("#DASHPlayerStats_VideoNoRangeInformation");
        }
        GetBufferedAudioSegmentForDisplay(e) {
          return this.m_audioBufferedRanges &&
            e < this.m_audioBufferedRanges.length
            ? (0, m.zB)(this.m_audioBufferedRanges.start(e)) +
                " - " +
                (0, m.zB)(this.m_audioBufferedRanges.end(e))
            : (0, h.Xx)("#DASHPlayerStats_AudioNoRangeInformation");
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
            let e = this.m_rgSnapShots[this.m_rgSnapShots.length - 2],
              t = this.m_rgSnapShots[this.m_rgSnapShots.length - 1];
            return (
              (
                (0 == t.m_nBandwidthMin
                  ? e.m_nBandwidthMin
                  : Math.min(e.m_nBandwidthMin, t.m_nBandwidthMin)) / _
              ).toFixed(3) +
              " / " +
              (Math.max(e.m_nBandwidthMax, t.m_nBandwidthMax) / _).toFixed(3) +
              " / " +
              (e.GetAverageBandwidthFromTwo(t) / _).toFixed(3)
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
            let e = this.m_rgSnapShots[this.m_rgSnapShots.length - 2],
              t = this.m_rgSnapShots[this.m_rgSnapShots.length - 1];
            return (
              (
                (0 == t.m_nSegmentDownloadTimeMinMS
                  ? e.m_nSegmentDownloadTimeMinMS
                  : Math.min(
                      e.m_nSegmentDownloadTimeMinMS,
                      t.m_nSegmentDownloadTimeMinMS,
                    )) / 1e3
              ).toFixed(3) +
              " / " +
              (
                Math.max(
                  e.m_nSegmentDownloadTimeMaxMS,
                  t.m_nSegmentDownloadTimeMaxMS,
                ) / 1e3
              ).toFixed(3) +
              " / " +
              (e.GetAverageDownloadTimeFromTwo(t) / 1e3).toFixed(3)
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
            : (0, h.Xx)("#DASHPlayerStats_Tracking");
        }
        GetPlaybackRateForDisplay() {
          return this.m_nPlaybackRate.toFixed(1) + "x";
        }
        GetFPSMonitor() {
          return this.m_fpsMonitor;
        }
        SetHTMLVideoPlayerDisplay(e, t, i, n) {
          this.m_htmlVideoResolution != n &&
            ((this.m_htmlVideoResolution = n),
            (this.m_strHtmlVideoDisplay = i + "x" + n)),
            this.m_nPlaybackVideoResolution != t &&
              ((this.m_nPlaybackVideoResolution = t),
              (this.m_strPlaybackVideoResolution = e + "x" + t));
        }
        SetVideoPlaybackResolution(e, t, i) {
          0 == this.m_videoResolution &&
            ((this.m_allTimeSnapshot.m_nInitialVideoResolution = t),
            (this.m_rgSnapShots[
              this.m_rgSnapShots.length - 1
            ].m_nInitialVideoResolution = t)),
            (this.m_strBufferingVideoResolution = e + "x" + t + "@" + i),
            (this.m_videoResolution = t),
            (this.m_frameRate = i);
        }
        SetRepresentation(e) {
          e &&
            (e.nAudioSamplingRate
              ? ((this.m_audioRate = Math.round(e.nBandwidth / 1e3)),
                (this.m_audioChannel = e.nAudioChannels),
                (this.m_nAudioBandwidth = e.nBandwidth))
              : e.nFrameRate &&
                (this.SetVideoPlaybackResolution(
                  e.nWidth,
                  e.nHeight,
                  e.nFrameRate,
                ),
                (this.m_nVideoBandwidth = e.nBandwidth)),
            (this.m_nBandwidthRequired =
              this.m_nAudioBandwidth + this.m_nVideoBandwidth));
        }
        SetCurrentVideoBandwidth(e) {
          this.m_nCurBandwidthVideo = e;
        }
        SetSegmentDurationMS(e) {
          this.m_nSegmentDurationMS = e;
        }
        SetBroadcasterAndViewerInfo(e, t, i, n, s) {
          (this.m_steamIDBroadcast = e),
            (this.m_steamIDViewer = t),
            (this.m_broadcastID = i),
            (this.m_ulViewerToken = n),
            (this.m_strCDNAuthUrlParameters = s);
        }
        SetAnalyticLinks(e, t, i) {
          (this.m_strStatsLink = e),
            (this.m_strStalledLink = t),
            (this.m_strEventLogLink = i);
        }
        SetVideoInitializationURL(e) {
          let t = new URL(e);
          (this.m_host = t.hostname),
            (this.m_strBroadcastOrigin =
              t.searchParams.get("broadcast_origin") || "");
          let i = this.m_strBroadcastOrigin.indexOf(":");
          -1 !== i &&
            (this.m_strBroadcastOrigin = this.m_strBroadcastOrigin.substr(
              0,
              i,
            ));
        }
        SetAudioRate(e) {
          this.m_audioRate = e;
        }
        CaptureFrequentlyUpdatingInformation(e, t) {
          let i = this.ExtractFrameInfo(e);
          this.LogFrameInfo(i), this.LogBufferDuration(t, e);
        }
        LogDownload(e, t) {
          this.m_allTimeSnapshot.SegmentReceived(e, t),
            this.m_rgSnapShots[this.m_rgSnapShots.length - 1].SegmentReceived(
              e,
              t,
            );
        }
        LogSegmentDownloadFailure(e, t) {
          (this.m_allTimeSnapshot.m_nFailedSegments += 1),
            (this.m_rgSnapShots[
              this.m_rgSnapShots.length - 1
            ].m_nFailedSegments += 1),
            (this.m_allTimeSnapshot.m_nLastSegementDownloadStatus = t),
            (this.m_rgSnapShots[
              this.m_rgSnapShots.length - 1
            ].m_nLastSegementDownloadStatus = t),
            this.LogDownload(0, e);
        }
        LogVideoError(e) {}
        LogVideoOnCanPlay(e) {
          -1 === this.m_nTimeToFirstFrameMS &&
            (this.m_nTimeToFirstFrameMS =
              Date.now() - this.m_allTimeSnapshot.m_timeMS);
        }
        LogErrorEvent(e, t) {}
        ReportVideoStalled(e, t) {
          if (0 == this.m_strStalledLink.length) return;
          let i = this.FindBehindSegmentLoader(e, t);
          if (!i)
            return void (0, m.hB)(
              "DASHStats: Did not find any audio or video loaders",
            );
          (this.m_allTimeSnapshot.m_nStallEvents += 1),
            (this.m_rgSnapShots[this.m_rgSnapShots.length - 1].m_nStallEvents +=
              1);
          let n = new f();
          this.GatherCommonStats(
            n,
            t,
            i.GetBandwidthRequired(),
            i.GetAvgDownloadRate(),
          ),
            (n.last_segment_response =
              this.m_rgSnapShots[
                this.m_rgSnapShots.length - 1
              ].m_nLastSegementDownloadStatus),
            (n.audio_stalled = i.ContainsAudio()),
            this.CaptureActiveDownloads(e),
            (n.active_downloads = this.m_nActiveDownloads),
            (n.vid_down_progress = this.m_nVideoDownloadProgress);
          let s = i.GetDownloadHistory(),
            r = 0;
          for (let e = s.length - 1; e >= 0 && r < 3; --e)
            ++r,
              (n["segment" + r + "_bytes"] = s[e].cubData),
              (n["segment" + r + "_time"] = Math.round(s[e].nDownloadMS) / 1e3);
          this.SendReportToServer(n, this.m_strStalledLink);
        }
        FindBehindSegmentLoader(e, t) {
          let i = !1,
            n = !1,
            s = t.currentTime,
            r = null,
            a = null;
          for (let t of e)
            (a = t.ContainsAudio() ? t : a),
              (r = t.ContainsVideo() ? t : a),
              t.BHasEnoughBuffered(s) &&
                ((n = n || t.ContainsAudio()), (i = i || t.ContainsVideo()));
          return (n = n || null == a), !i || (i && n) ? r : a;
        }
        ExtractFrameInfo(e) {
          let t = 0,
            i = 0;
          if (e.getVideoPlaybackQuality)
            try {
              let n = e.getVideoPlaybackQuality();
              (i = n.totalVideoFrames), (t = n.droppedVideoFrames);
            } catch (e) {
              (0, m.hB)(
                "Browser does not support HTMLVideoElement.getVideoPlaybackQuality()",
                e.message,
              );
            }
          else
            e.webkitDecodedFrames
              ? ((i = e.webkitDecodedFrames), (t = e.webkitDroppedFrames))
              : e.webkitDecodedFrameCount &&
                ((i = e.webkitDecodedFrameCount),
                (t = e.webkitDroppedFrameCount));
          return { framesDecoded: i, framesDropped: t };
        }
        LogFrameInfo(e) {
          (this.m_allTimeSnapshot.m_nFramesDecoded = e.framesDecoded),
            (this.m_allTimeSnapshot.m_nFramesDropped = e.framesDropped);
          let t = this.m_rgSnapShots[this.m_rgSnapShots.length - 1];
          if (1 == this.m_rgSnapShots.length)
            (t.m_nFramesDecoded = e.framesDecoded),
              (t.m_nFramesDropped = e.framesDropped);
          else {
            let i = this.m_rgSnapShots[this.m_rgSnapShots.length - 2];
            (t.m_nFramesDecoded = e.framesDecoded - i.m_nFramesDecoded),
              (t.m_nFramesDropped = e.framesDropped - i.m_nFramesDropped);
          }
        }
        LogBufferDuration(e, t) {
          this.m_nActiveDownloads = 0;
          for (let i of e)
            i.ContainsAudio()
              ? ((this.m_nAudioBufferedMS = i.GetAmountBufferedMS(
                  t.currentTime,
                )),
                (this.m_audioBufferedRanges = i.GetSourceBufferTimeRanges()))
              : i.ContainsVideo() &&
                ((this.m_nVideoBufferedMS = i.GetAmountBufferedMS(
                  t.currentTime,
                )),
                (this.m_videoBufferedRanges = i.GetSourceBufferTimeRanges())),
              (this.m_nActiveDownloads += i.GetActiveDownloads()),
              i.ContainsVideo() &&
                (this.m_nVideoDownloadProgress = i.GetActiveDownloadProgress());
          this.m_nPlaybackRate = t.playbackRate;
        }
        CaptureActiveDownloads(e) {
          this.m_nActiveDownloads = 0;
          for (let t of e)
            (this.m_nActiveDownloads += t.GetActiveDownloads()),
              t.ContainsVideo() &&
                (this.m_nVideoDownloadProgress = t.GetActiveDownloadProgress());
        }
        ReportPlayerStats(e, t) {
          if (0 == this.m_strStatsLink.length) return;
          let i = this.ExtractFrameInfo(t);
          if (
            i.framesDecoded == this.m_allTimeSnapshot.m_nFramesDecoded &&
            0 ==
              this.m_rgSnapShots[this.m_rgSnapShots.length - 1].m_nBytesReceived
          )
            return void this.CreateNewEmptySnapshot(t.videoHeight);
          this.LogFrameInfo(i), this.LogBufferDuration(e, t);
          let n = new g(),
            s = this.m_rgSnapShots[this.m_rgSnapShots.length - 1];
          (n.frames_decoded = s.m_nFramesDecoded),
            (n.frames_dropped = s.m_nFramesDropped),
            (n.bytes_received = s.m_nBytesReceived),
            (n.seconds_delta = Math.round((Date.now() - s.m_timeMS) / 1e3)),
            (n.failed_segments = s.m_nFailedSegments),
            (n.bw_min = s.m_nBandwidthMin),
            (n.bw_max = s.m_nBandwidthMax),
            (n.audio_buffer = Math.round(this.m_nAudioBufferedMS / 1e3)),
            (n.video_buffer = Math.round(this.m_nVideoBufferedMS / 1e3)),
            (n.seg_time_avg = Math.round(s.GetAverageDownloadTime()) / 1e3),
            (n.seg_time_min = Math.round(s.m_nSegmentDownloadTimeMinMS) / 1e3),
            (n.seg_time_max = Math.round(s.m_nSegmentDownloadTimeMaxMS) / 1e3),
            (n.initial_vid_res = s.m_nInitialVideoResolution),
            (n.ttff = this.m_nTimeToFirstFrameMS),
            (n.seg_duration = this.m_nSegmentDurationMS),
            this.GatherCommonStats(
              n,
              t,
              this.m_nBandwidthRequired,
              s.GetAverageBandwidth(),
            ),
            this.CreateNewEmptySnapshot(t.videoHeight),
            this.SendReportToServer(n, this.m_strStatsLink);
        }
        async SendReportToServer(e, t) {
          let i = new URL(t),
            n = new FormData();
          for (let t of Object.keys(e)) n.append(t, e[t]);
          n.append("l", i.searchParams.get("l")),
            n.append("e", i.searchParams.get("e")),
            n.append("h", i.searchParams.get("h")),
            (0, m.hB)("CDASHStats Sending Report to Server", e),
            a()
              .post(t, n)
              .catch((e) => {
                (0, m.hB)("Failed to upload stats: ", e);
              });
        }
        CreateNewEmptySnapshot(e) {
          this.m_rgSnapShots.length >= 5 && this.m_rgSnapShots.shift(),
            this.m_rgSnapShots.push(new c(e));
        }
        GatherCommonStats(e, t, i, n) {
          (e.steamid = this.m_steamIDViewer),
            (e.host = this.m_host),
            (e.playback_position = Math.round(t.currentTime)),
            (e.video_res = this.m_videoResolution),
            (e.audio_rate = this.m_audioRate),
            (e.audio_ch = this.m_audioChannel),
            (e.bw_required = i),
            (e.bw_avg = Math.round(n)),
            (e.broadcast_accountid = this.m_steamIDBroadcast
              ? new o.K(this.m_steamIDBroadcast).GetAccountID()
              : 0),
            (e.useragent = window.navigator.userAgent),
            (e.sessionid = d.De.SESSIONID),
            (e.broadcast_origin = this.m_strBroadcastOrigin);
        }
      }
      (0, n.gn)([s.LO], S.prototype, "m_allTimeSnapshot", void 0),
        (0, n.gn)([s.LO], S.prototype, "m_strBufferingVideoResolution", void 0),
        (0, n.gn)([s.LO], S.prototype, "m_strPlaybackVideoResolution", void 0),
        (0, n.gn)([s.LO], S.prototype, "m_strHtmlVideoDisplay", void 0),
        (0, n.gn)([s.LO], S.prototype, "m_nBandwidthRequired", void 0),
        (0, n.gn)([s.LO], S.prototype, "m_nCurBandwidthVideo", void 0),
        (0, n.gn)([s.LO], S.prototype, "m_nAudioBufferedMS", void 0),
        (0, n.gn)([s.LO], S.prototype, "m_nVideoBufferedMS", void 0),
        (0, n.gn)([s.LO], S.prototype, "m_nActiveDownloads", void 0),
        (0, n.gn)([s.LO], S.prototype, "m_nVideoDownloadProgress", void 0),
        (0, n.gn)([s.LO], S.prototype, "m_videoBufferedRanges", void 0),
        (0, n.gn)([s.LO], S.prototype, "m_audioBufferedRanges", void 0),
        (0, n.gn)([s.LO], S.prototype, "m_nPlaybackRate", void 0),
        (0, n.gn)([s.aD], S.prototype, "SetVideoPlaybackResolution", null),
        (0, n.gn)([s.aD], S.prototype, "SetRepresentation", null),
        (0, n.gn)([s.aD], S.prototype, "SetCurrentVideoBandwidth", null),
        (0, n.gn)(
          [s.aD],
          S.prototype,
          "CaptureFrequentlyUpdatingInformation",
          null,
        ),
        (0, n.gn)([s.aD], S.prototype, "LogDownload", null),
        (0, n.gn)([s.aD], S.prototype, "LogSegmentDownloadFailure", null),
        (0, n.gn)([s.aD], S.prototype, "LogFrameInfo", null),
        (0, n.gn)([s.aD], S.prototype, "LogBufferDuration", null);
      class c {
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
        constructor(e) {
          (0, s.rC)(this), (this.m_nInitialVideoResolution = e);
        }
        GetAverageBandwidth() {
          return this.m_nBandwidthTotal / Math.max(1, this.m_nEntries);
        }
        GetAverageDownloadTime() {
          return (
            this.m_nSegmentDownloadTimeTotalMS / Math.max(1, this.m_nEntries)
          );
        }
        GetAverageBandwidthFromTwo(e) {
          return (
            (e.m_nBandwidthTotal + this.m_nBandwidthTotal) /
            Math.max(1, e.m_nEntries + this.m_nEntries)
          );
        }
        GetAverageDownloadTimeFromTwo(e) {
          return (
            (e.m_nSegmentDownloadTimeTotalMS +
              this.m_nSegmentDownloadTimeTotalMS) /
            Math.max(1, e.m_nEntries + this.m_nEntries)
          );
        }
        SegmentReceived(e, t) {
          if (((this.m_nBytesReceived += e), e < 1024)) return;
          let i = Math.round((8 * e * 1e3) / Math.max(t, 1));
          0 == this.m_nEntries
            ? ((this.m_nSegmentDownloadTimeMinMS = t),
              (this.m_nBandwidthMin = i))
            : ((this.m_nSegmentDownloadTimeMinMS = Math.min(
                t,
                this.m_nSegmentDownloadTimeMinMS,
              )),
              (this.m_nBandwidthMin = Math.min(i, this.m_nBandwidthMin))),
            (this.m_nBandwidthMax = Math.max(i, this.m_nBandwidthMax)),
            (this.m_nSegmentDownloadTimeMaxMS = Math.max(
              t,
              this.m_nSegmentDownloadTimeMaxMS,
            )),
            (this.m_nBandwidthTotal += i),
            (this.m_nSegmentDownloadTimeTotalMS += t),
            (this.m_nEntries += 1);
        }
      }
      (0, n.gn)([s.LO], c.prototype, "m_nBytesReceived", void 0),
        (0, n.gn)([s.LO], c.prototype, "m_nFailedSegments", void 0),
        (0, n.gn)([s.LO], c.prototype, "m_nStallEvents", void 0),
        (0, n.gn)([s.LO], c.prototype, "m_nSegmentDownloadTimeMaxMS", void 0),
        (0, n.gn)([s.LO], c.prototype, "m_nSegmentDownloadTimeMinMS", void 0),
        (0, n.gn)([s.LO], c.prototype, "m_nBandwidthMin", void 0),
        (0, n.gn)([s.LO], c.prototype, "m_nBandwidthMax", void 0),
        (0, n.gn)([s.LO], c.prototype, "m_nFramesDecoded", void 0),
        (0, n.gn)([s.LO], c.prototype, "m_nFramesDropped", void 0),
        (0, n.gn)([s.aD], c.prototype, "SegmentReceived", null);
      class D {
        bDropReading;
        nTotalDecodedFrames;
        reset(e, t) {
          (this.bDropReading = e), (this.nTotalDecodedFrames = t);
        }
      }
      class T {
        constructor() {
          (0, s.rC)(this);
        }
        k_nTestFrequencyMS = 1e3;
        k_nSlidingWindow = 6;
        k_nDroppedFramesThreshold = 1;
        k_nFailThreshold = 3;
        k_nIgnoreReadingAroundResizeMS = 2e3;
        m_schTracker = new l.Ar();
        m_rgResultsWindow = [];
        m_nLastResizeMS = 0;
        m_lastFrameInfo;
        m_bDroppingFrameDetected = !1;
        m_nCurrentFPS = 0;
        m_fnRequestDecoded;
        StartTracking(e) {
          this.m_schTracker.Schedule(this.k_nTestFrequencyMS, this.TakeReading),
            (this.m_fnRequestDecoded = e),
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
          let e = !1,
            t = this.m_fnRequestDecoded();
          this.BIsInResizeTimeWindow() ||
            (e =
              this.m_lastFrameInfo.framesDropped > 0 &&
              t.framesDropped - this.m_lastFrameInfo.framesDropped >
                this.k_nDroppedFramesThreshold),
            this.AppendReading(e, t.framesDecoded),
            (this.m_bDroppingFrameDetected = this.ComputeDroppingFrames()),
            (this.m_nCurrentFPS =
              t.framesDecoded -
              this.m_lastFrameInfo.framesDecoded -
              (t.framesDropped - this.m_lastFrameInfo.framesDropped)),
            (this.m_lastFrameInfo = t);
        }
        ComputeDroppingFrames() {
          return (
            this.m_rgResultsWindow.length == this.k_nSlidingWindow &&
            this.m_rgResultsWindow.filter((e) => e.bDropReading).length >=
              this.k_nFailThreshold
          );
        }
        AppendReading(e, t) {
          let i;
          (i =
            this.m_rgResultsWindow.length >= this.k_nSlidingWindow
              ? this.m_rgResultsWindow.shift()
              : new D()),
            i.reset(e, t),
            this.m_rgResultsWindow.push(i);
        }
      }
      (0, n.gn)([s.LO], T.prototype, "m_bDroppingFrameDetected", void 0),
        (0, n.gn)([s.LO], T.prototype, "m_nCurrentFPS", void 0),
        (0, n.gn)([s.aD.bound], T.prototype, "TakeReading", null);
    },
    24549: (e, t, i) => {
      i.d(t, { AV: () => r, l: () => s });
      var n = i(31846);
      function s(e, t, i, s) {
        let r = t;
        r =
          "number" == typeof r
            ? {
                nDigitsAfterDecimal: t,
                bUseBinary1K: i || void 0 === i,
                bValueIsInBytes: !s,
                bValueIsRate: s,
                nMinimumDigitsAfterDecimal: 0,
              }
            : {
                nDigitsAfterDecimal: 2,
                bUseBinary1K: !0,
                bValueIsInBytes: !0,
                bValueIsRate: !1,
                nMinimumDigitsAfterDecimal: 0,
                ...r,
              };
        const a = r.bUseBinary1K ? 1024 : 1e3,
          o = a * a,
          m = o * a,
          d = m * a;
        let l,
          h = "";
        e > d
          ? ((l = e / d), (h = "Tera"))
          : e > m
            ? ((l = e / m), (h = "Giga"))
            : e > o
              ? ((l = e / o), (h = "Mega"))
              : e > a
                ? ((l = e / a), (h = "Kilo"))
                : (l = e);
        const u =
          "#" +
          h +
          (r.bValueIsInBytes ? "bytes" : "bits") +
          (r.bValueIsRate ? "_PerSecond" : "");
        return (0, n.Xx)(
          u,
          l.toLocaleString(n.Yt.GetPreferredLocales(), {
            minimumFractionDigits: r.nMinimumDigitsAfterDecimal,
            maximumFractionDigits: r.nDigitsAfterDecimal,
          }),
        );
      }
      function r(e) {
        return e ? e.toLocaleString(n.Yt.GetPreferredLocales()) : "" + e;
      }
    },
  },
]);
