/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [638],
  {
    36064: (e, t, i) => {
      i.d(t, { Mc: () => a, aM: () => o, ap: () => r, q_: () => s });
      const n = new (i(60778).wd)("video"),
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
    47831: (e, t, i) => {
      i.d(t, { Zn: () => O, N_: () => U, lU: () => N, Br: () => I });
      var n = i(34629),
        s = i(41735),
        r = i.n(s),
        a = i(14947),
        o = i(22837),
        m = (i(62490), i(44332)),
        d = i(6144),
        l = i(61859),
        h = i(19719),
        u = i(6419),
        _ = i(14771),
        p = i(78327),
        g = i(36064),
        f = i(34374);
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
      function w(e, t) {
        let i = e.getAttribute(t);
        return i
          ? ((i = i.toLowerCase()), "true" == i || ("false" != i && null))
          : null;
      }
      function y(e, t) {
        let i = e.getAttribute(t);
        return i ? parseInt(i) : null;
      }
      function b(e, t) {
        let i = e.getAttribute(t);
        return i || "";
      }
      function B(e, t, i) {
        let n = {
          nTimeScale: y(e, "timescale"),
          nDuration: y(e, "duration"),
          nStartNumber: y(e, "startNumber"),
          strMedia: b(e, "media"),
          strInitialization: "",
        };
        return (
          t.bContainsGame
            ? (n.strInitialization = n.strMedia)
            : (n.strInitialization = b(e, "initialization")),
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
      function C(e, t, i) {
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
      function v(e, t) {
        let i = e;
        i.endsWith("/") || (i += "/");
        let n = t.startsWith("/") ? 1 : 0;
        return i + t.substring(n);
      }
      function M(e, t) {
        return G(e) || !G(t) ? e : v(t, e);
      }
      function R(e) {
        return (
          0 == e.rgRoles.length || e.rgRoles.findIndex((e) => "main" == e) >= 0
        );
      }
      function A(e) {
        if (!e) return 0;
        let t = e.segmentTemplate;
        return 1e3 == t.nTimeScale
          ? t.nDuration
          : (t.nDuration / t.nTimeScale) * 1e3;
      }
      function P(e, t, i) {
        let n = A(t),
          s = i + ((1e3 * e.GetStartTime()) % n);
        return Math.floor(s / n) + t.segmentTemplate.nStartNumber;
      }
      function V(e) {
        return C(e.segmentTemplate.strInitialization, e.strID, 0);
      }
      class k {
        constructor() {
          (this.m_strType = void 0),
            (this.m_nMinBufferTime = 0),
            (this.m_dtAvailabilityStartTime = null),
            (this.m_dtPublishTime = null),
            (this.m_nMinimumUpdatePeriod = 0),
            (this.m_nTimeShiftBufferDepth = 0),
            (this.m_nMediaPresentationDuration = 0),
            (this.m_strBaseURL = ""),
            (this.m_strStatsLink = ""),
            (this.m_strStalledLink = ""),
            (this.m_strEventLogLink = ""),
            (this.m_rgPeriods = null),
            (this.m_tsLiveContentStart = 0);
        }
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
              strID: b(e, "id"),
              strMimeType: b(e, "mimeType"),
              strCodecs: b(e, "codecs"),
              nBandwidth: y(e, "bandwidth"),
              segmentTemplate: null,
            },
            a = c(e, "SegmentTemplate");
          if (a) {
            let e = B(a, t, n);
            e && (r.segmentTemplate = e);
          } else r.segmentTemplate = { ...i };
          if (!r.segmentTemplate)
            return (
              (0, g.q_)("MPD - No segment template for representation"), null
            );
          if (s.bContainsVideo) {
            if (
              ((r.nWidth = y(e, "width")),
              (r.nHeight = y(e, "height")),
              (r.nFrameRate = y(e, "frameRate")),
              (0, g.q_)(
                `representation: ${r.nWidth}w x ${r.nHeight}h x ${r.nFrameRate} fps`,
              ),
              !(r.strID && r.strMimeType && r.strCodecs && r.nBandwidth))
            )
              return (0, g.q_)("MPD - Representation Video Data Missing"), null;
          } else if (s.bContainsAudio) {
            r.nAudioSamplingRate = y(e, "audioSamplingRate");
            let t = c(e, "AudioChannelConfiguration");
            if (
              (t && (r.nAudioChannels = y(t, "value")),
              r.nAudioChannels || (r.nAudioChannels = 2),
              !(
                r.strID &&
                r.strMimeType &&
                r.strCodecs &&
                r.nAudioSamplingRate &&
                r.nAudioChannels
              ))
            )
              return (0, g.q_)("MPD - Representation Audio Data Missing"), null;
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
            if ("static" != s) return (0, g.q_)("MPD - Unknown type"), !1;
            if (
              ((this.m_strType = "static"),
              (this.m_nMediaPresentationDuration = T(
                n,
                "mediaPresentationDuration",
              )),
              !this.m_nMinBufferTime || !this.m_nMediaPresentationDuration)
            )
              return (
                (0, g.q_)("MPD - Missing Buffer Time or Presentation Duration"),
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
                  v(t.origin, i) + "/"
                );
              })(t);
          let a = c(n, "Analytics");
          a &&
            ((this.m_strStatsLink = b(a, "statslink")),
            (this.m_strStalledLink = b(a, "stalledlink")),
            (this.m_strEventLogLink = b(a, "eventlink")));
          let o = i.getElementsByTagName("Period");
          if (0 == o.length) return !1;
          let m = o[0],
            d = {
              strID: b(m, "id"),
              nStart: T(m, "start"),
              nDuration: T(m, "duration"),
              rgAdaptationSets: [],
            };
          if (!d.strID || null === d.nStart)
            return (0, g.q_)("MPD - Missing Period Information."), !1;
          (this.m_rgPeriods = []), this.m_rgPeriods.push(d);
          let l = m.getElementsByTagName("AdaptationSet");
          for (let e = 0; e < l.length; e++) {
            let t = l[e],
              i = b(t, "description"),
              n = b(t, "lang"),
              s = {
                bSegmentAlignment: w(t, "segmentAlignment"),
                bIsTimedText: "text/vtt" == b(t, "mimeType"),
                strLanguage: b(t, "lang"),
                bContainsVideo: !1,
                bContainsAudio: !1,
                bContainsGame: !1,
                strDescription: i || n,
                strForceSub: b(t, "forceSub"),
                strID: b(t, "id"),
                rgRoles: [],
                rgRepresentations: [],
                thumbnails: null,
              };
            if ((d.rgAdaptationSets.push(s), s.bIsTimedText)) {
              s.rgRoles.push("subtitle");
              let e = t.getElementsByTagName("Role");
              for (let t = 0; t < e.length; t++) {
                let i = b(e[t], "value");
                i && "subtitle" != i && s.rgRoles.push(i);
              }
              let i = t.getElementsByTagName("Representation");
              for (let e = 0; e < i.length; e++) {
                let t = i[e],
                  n = {
                    strID: b(t, "id"),
                    nBandwidth: y(t, "bandwidth"),
                    strClosedCaptionFile: "",
                  },
                  r = c(t, "BaseURL"),
                  a = r ? r.textContent : "";
                if (!a) {
                  (0, g.q_)(
                    "Closed Caption File has no BaseURL for (id): " + n.strID,
                  );
                  continue;
                }
                (n.strClosedCaptionFile = C(a, n.strID, 0)),
                  n.strClosedCaptionFile.startsWith("http") ||
                    (n.strClosedCaptionFile =
                      this.m_strBaseURL + n.strClosedCaptionFile);
                if ("store" == (0, p.yK)() || "dev" == p.TS.WEB_UNIVERSE) {
                  const e = new URL(n.strClosedCaptionFile).pathname.split(
                    "/video/",
                  )[1];
                  n.strClosedCaptionFile = e
                    ? p.TS.STORE_BASE_URL + "vtt/video/" + e
                    : null;
                }
                n.strClosedCaptionFile && s.rgRepresentations.push(n);
              }
              continue;
            }
            if (!s.bSegmentAlignment)
              return (
                (0, g.q_)(
                  "MPD - Only segment aligned dash manifests is supported",
                ),
                !1
              );
            let r = t.getElementsByTagName("ContentComponent");
            for (let e = 0; e < r.length; e++) {
              let t = b(r[e], "contentType");
              "video" == t && (s.bContainsVideo = !0),
                "audio" == t && (s.bContainsAudio = !0),
                "game" == t && (s.bContainsGame = !0);
            }
            if (0 == r.length) {
              let e = b(t, "contentType");
              "video" == e && (s.bContainsVideo = !0),
                "audio" == e && (s.bContainsAudio = !0);
            }
            if (s.bContainsVideo) {
              let e = c(t, "Thumbnails");
              if (e) {
                let t = y(e, "sheet"),
                  i = y(e, "period");
                s.thumbnails = {
                  nPeriod: i,
                  strTemplate: b(e, "template"),
                  nSheet: t,
                  nSheetSeconds: t * i,
                };
              }
            }
            let a = t.getElementsByTagName("Role");
            for (let e = 0; e < a.length; e++) {
              let t = b(a[e], "value");
              t && s.rgRoles.push(t);
            }
            let o = null,
              m = c(t, "SegmentTemplate");
            if (m) {
              let e = B(m, s, this.m_strBaseURL);
              if (!e)
                return (
                  (0, g.q_)("MPD - Failed to parse found Adaptation template"),
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
            switch (b(i, "type")) {
              case "dynamic":
                break;
              case "static":
                (0, g.q_)("Converting MPD from dynamic to static"),
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
                i = b(t, "id"),
                s = this.GetAdaptationByTrackID(i);
              if (s) {
                let e = null,
                  i = c(t, "SegmentTemplate");
                if (i) {
                  let t = B(i, s, this.m_strBaseURL);
                  if (!t)
                    return (
                      (0, g.q_)(
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
                        (0, g.q_)("MPD - Failed to parse representation"), !1
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
              ((this.m_strStatsLink = b(n, "statslink")),
              (this.m_strStalledLink = b(n, "stalledlink")),
              (this.m_strEventLogLink = b(n, "eventlink"))),
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
        constructor(e, t, i, n) {
          (this.m_callbacks = null),
            (this.m_mpd = null),
            (this.m_adaptation = null),
            (this.m_mediaSource = null),
            (this.m_sourceBuffer = null),
            (this.m_nTrackBufferMS = 0),
            (this.m_representation = null),
            (this.m_eBufferUpdate = L.None),
            (this.m_rgBufferedSegments = []),
            (this.m_bNeedInitSegment = !0),
            (this.m_nNextSegment = 0),
            (this.m_bRemoveBufferState = !1),
            (this.m_bSeekInProgress = !1),
            (this.m_tsLastBufferRemove = 0),
            (this.m_schNextDownload = new d.LU()),
            (this.m_xhrDownload = null),
            (this.m_listeners = new d.Ji()),
            (this.m_rgDownloadLog = []),
            (this.m_nCurDownloadProgress = 0),
            (this.m_nCurDownloadBitrate = 0),
            (this.m_nNumConsecutiveDownloadGones = 0),
            (this.m_rgGameDataFrames = []),
            (this.m_statsGameData = null),
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
          return A(this.m_representation);
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
              (0, g.q_)(
                `${this.GetDebugName()} changing representation to ${e.nHeight || 0}p at ${Math.ceil(e.nBandwidth / 1e3)}KB for segment ${this.m_nNextSegment}`,
              ),
            (this.m_representation = e),
            (this.m_bNeedInitSegment = !this.ContainsGame()),
            this.m_stats.SetRepresentation(e),
            this.ContainsGame())
          )
            return e;
          if (!this.m_sourceBuffer) {
            const t = e.strMimeType + ";codecs=" + e.strCodecs;
            try {
              (this.m_sourceBuffer = this.m_mediaSource.addSourceBuffer(t)),
                (0, g.q_)(t),
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
            } catch (e) {
              if (
                !(e instanceof DOMException && "NotSupportedError" === e.name)
              )
                throw e;
              this.OnMediaUnsupportedError(t);
            }
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
          (0, g.q_)(
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
        OnMediaUnsupportedError(e) {
          console.log("OnMediaUnsupportedError", this.GetDebugName(), e),
            this.m_callbacks &&
              this.m_callbacks.OnMediaUnsupportedError(this, e);
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
            return void (0, g.q_)(
              `${this.GetDebugName()} ScheduleNextDownload - download already going`,
            );
          if (this.m_bSeekInProgress)
            return void (0, g.q_)(
              `${this.GetDebugName()} ScheduleNextDownload - seeking`,
            );
          if (this.m_nNextSegment > this.GetMaxSegment())
            return void (0, g.q_)(
              `${this.GetDebugName()} ScheduleNextDownload - reached max segment`,
            );
          let e = this.m_callbacks.GetCurrentPlayTime(),
            t = this.m_callbacks.GetPlaybackRate(),
            i = (function (e, t, i) {
              if (!e.IsLiveContent()) return 0;
              let n = A(t);
              return (
                (i - t.segmentTemplate.nStartNumber + 1) * n -
                e.GetDurationSinceStarted()
              );
            })(this.m_mpd, this.m_representation, this.m_nNextSegment);
          if (i > 0)
            return (
              (0, g.q_)(
                `${this.GetDebugName()} ScheduleNextDownload - segment in future`,
              ),
              void this.m_schNextDownload.Schedule(i, this.ScheduleNextDownload)
            );
          let n = this.GetAmountBufferedMS(e);
          if ((t > 1 && (n /= t), n < 4e4))
            return (
              (0, g.q_)(
                `${this.GetDebugName()} ScheduleNextDownload - have ${n} buffered, desire 40000 - downloading now`,
              ),
              void this.DownloadNextSegment()
            );
          let s = 1.1 * A(this.m_representation),
            r = this.GetAmountBufferedInPlayerMS(
              this.m_callbacks.GetCurrentPlayTime(),
            );
          (0, g.q_)(
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
              (e = C(n.segmentTemplate.strMedia, n.strID, s)),
              (t = A(this.m_representation)),
              this.m_nNextSegment++;
          }
          var n, s;
          this.DownloadSegment(this.m_representation.strID, i, e, t);
        }
        async DownloadSegment(e, t, i, n, s = performance.now()) {
          (0, m.w)(
            null === this.m_xhrDownload,
            "Trying to download another segment while a download is already in flight",
          ),
            this.m_schNextDownload.Cancel();
          const a = this.m_callbacks.GetCDNAuthURLParameter();
          a && (i += a), (0, g.q_)(`${this.GetDebugName()} Downloading: ` + i);
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
            return void (0, g.q_)(`Throwing away cancelled download: ${i}`);
          o &&
            (0, g.q_)(
              `${this.GetDebugName()} Failed to download segment: ${i}`,
              o,
            );
          let u = performance.now(),
            _ = Math.floor(performance.now() - l),
            p = d ? d.status : 0;
          if (((this.m_xhrDownload = null), this.m_bSeekInProgress))
            return (
              (0, g.q_)(
                `${this.GetDebugName()} Throwing away download due to seek: ${i}`,
              ),
              void this.ContinueSeek()
            );
          if (!d || 200 != d.status)
            return this.ContainsGame()
              ? void this.ScheduleNextDownload()
              : (this.m_stats.LogSegmentDownloadFailure(_, d ? d.status : 444),
                u - s > 9e3
                  ? ((0, g.q_)(
                      `${this.GetDebugName()} HTTP download failed.. stopping loader: ${u - s}ms`,
                    ),
                    void this.DownloadFailed())
                  : 410 == p
                    ? ((this.m_nNumConsecutiveDownloadGones += 1),
                      (0, g.q_)(
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
                  ? (0, g.q_)("Invalid game pts")
                  : n.gdi != i && this.m_rgGameDataFrames.push(n)
                : (0, g.q_)("Invalid game data")),
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
              (0, g.q_)(
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
          if (!this.m_sourceBuffer) return void (0, g.q_)("No source buffer?");
          if (this.m_rgBufferedSegments.length > 0) {
            try {
              this.m_eBufferUpdate = L.Append;
              let e = this.m_rgBufferedSegments[0];
              this.m_sourceBuffer.appendBuffer(e.data),
                this.m_rgBufferedSegments.splice(0, 1);
            } catch (e) {
              "QuotaExceededError" === e.name
                ? ((this.m_eBufferUpdate = L.None),
                  (0, g.q_)(
                    `${this.GetDebugName()} Buffer - QuotaExceededError`,
                  ))
                : (0, g.q_)(`${this.GetDebugName()} Buffer - Exception`, e);
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
            (0, g.q_)(
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
            (0, g.q_)(
              "Seek To Next Segment: " +
                this.m_nNextSegment +
                " at approx. " +
                (0, g.ap)(
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
      (0, n.Cg)([u.o], F.prototype, "OnSourceBufferUpdateEnd", null),
        (0, n.Cg)([u.o], F.prototype, "OnMediaUnsupportedError", null),
        (0, n.Cg)([u.o], F.prototype, "OnSourceBufferError", null),
        (0, n.Cg)([u.o], F.prototype, "OnSourceBufferAbort", null),
        (0, n.Cg)([u.o], F.prototype, "ScheduleNextDownload", null),
        (0, n.Cg)([u.o], F.prototype, "DownloadNextSegment", null),
        (0, n.Cg)([u.o], F.prototype, "DownloadFailed", null),
        (0, n.Cg)([u.o], F.prototype, "DownloadGone", null);
      const I = 5,
        E = "auto";
      var x, U, N;
      !(function (e) {
        (e[(e.HAVE_NOTHING = 0)] = "HAVE_NOTHING"),
          (e[(e.HAVE_METADATA = 1)] = "HAVE_METADATA"),
          (e[(e.HAVE_CURRENT_DATA = 2)] = "HAVE_CURRENT_DATA"),
          (e[(e.HAVE_FUTURE_DATA = 3)] = "HAVE_FUTURE_DATA"),
          (e[(e.HAVE_ENOUGH_DATA = 4)] = "HAVE_ENOUGH_DATA");
      })(x || (x = {})),
        (function (e) {
          (e[(e.Invalid = 0)] = "Invalid"),
            (e[(e.StreamGone = 1)] = "StreamGone");
        })(U || (U = {})),
        (function (e) {
          (e[(e.Absolute = 0)] = "Absolute"),
            (e[(e.FromAvailableStart = 1)] = "FromAvailableStart");
        })(N || (N = {}));
      class O {
        constructor(e, t = !1) {
          (this.m_elVideo = null),
            (this.m_strMPD = ""),
            (this.m_strHLS = ""),
            (this.m_strCDNAuthURLParameters = null),
            (this.m_schUpdateMPD = new d.LU()),
            (this.m_bUseHLSManifest = !1),
            (this.m_strVideoAdaptationID = ""),
            (this.m_strAudioAdaptationID = ""),
            (this.m_strGameAdaptationID = ""),
            (this.m_rgLoaders = []),
            (this.m_mediaSource = null),
            (this.m_nTrackBufferMS = 0),
            (this.m_nLimitFPS = 0),
            (this.m_bIsBuffering = !0),
            (this.m_seekingToTime = null),
            (this.m_listeners = new d.Ji()),
            (this.m_bFirstPlay = !0),
            (this.m_bPlaybackStarted = !1),
            (this.m_nTimedText = 0),
            (this.m_schGameDataEventTrigger = new d.LU()),
            (this.m_schReportPlayerTrigger = new d.LU()),
            (this.m_nGameDataLastFramePTS = -1),
            (this.m_bStatsViewVisible = !1),
            (this.m_schCaptureDisplayStatsTrigger = new d.LU()),
            (this.m_videoRepSelected = null),
            (this.m_timedTextRepSelected = null),
            (this.m_stats = new f._L()),
            (this.m_bClosing = !1),
            (this.m_hlsTimeOffset = 0),
            (this.m_bUserPlayChoice = !0),
            (this.m_bUserLiveEdgeChoice = !0),
            (this.m_schFirstFrameThrottler = new d.LU()),
            (this.m_bookMarkAdapter = null),
            (this.m_schBookmarkUpdater = new d.LU()),
            (0, a.Gn)(this),
            (this.m_elVideo = e),
            this.m_schReportPlayerTrigger.Schedule(3e4, this.ReportPlayerStats),
            (this.m_bUseHLSManifest = t);
        }
        CalcVideoStartRelativeToSystemClock(e) {
          let t =
            (e ? new Date(e).getTime() : Date.now()) -
            this.m_mpd.GetAvailabilityStartTime().getTime();
          this.m_mpd.StartLiveContentNow(t), (0, g.q_)("server time: " + e);
        }
        GetMPDURL() {
          return this.m_strMPD;
        }
        async PlayMPD(e, t, i, n) {
          (this.m_strMPD = e),
            (this.m_strHLS = i),
            (this.m_strCDNAuthURLParameters = t);
          let s = await this.DownloadMPD();
          if (s)
            if (((this.m_mpd = new k()), this.m_mpd.BParse(s.data, e))) {
              if (
                (this.IsLiveContent() &&
                  (this.m_mpd.GetMinimumUpdatePeriod() > 0 &&
                    this.m_schUpdateMPD.Schedule(
                      1e3 * this.m_mpd.GetMinimumUpdatePeriod(),
                      this.UpdateMPD,
                    ),
                  this.CalcVideoStartRelativeToSystemClock(s.headers.date)),
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
                ? (this.InitVideoControl(), this.InitTimedText(n))
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
        InitTimedText(e) {
          (this.m_nTimedText = 0),
            this.m_mpd.GetTimedTextAdaptionSet(0).forEach((t) => {
              let i = (0, o.sf)(p.TS.LANGUAGE);
              if (
                t.rgRepresentations.length > 0 &&
                t.rgRepresentations[0].strClosedCaptionFile &&
                t.strLanguage in l.bi
              ) {
                const n = document.createElement("track");
                (n.kind = "subtitles"),
                  (n.label = (0, l.we)(
                    "#Language_" + (0, o.Lg)(l.bi[t.strLanguage]),
                  )),
                  (n.srclang = t.strLanguage),
                  (n.src = t.rgRepresentations[0].strClosedCaptionFile),
                  (this.m_nTimedText += 1),
                  (!e && 0 == i) ||
                    l.bi[t.strLanguage] != i ||
                    ((n.default = !0),
                    (this.m_timedTextRepSelected = t.rgRepresentations[0])),
                  this.m_elVideo.appendChild(n);
              }
            });
        }
        SetSubtitles(e) {
          let t = null;
          for (let i = 0; i < this.m_elVideo.textTracks.length; i++) {
            const n = this.m_elVideo.textTracks[i];
            if (l.bi[n.language] == e) {
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
            return (0, m.w)(!1, "Multiple MPD download requests"), null;
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
            (0, g.q_)("Failed to download, will retry: " + this.m_strMPD),
              await (0, _.IP)(200);
          }
          return (0, g.q_)("Failed to download: " + this.m_strMPD), null;
        }
        async UpdateMPD() {
          (0, g.q_)("Updating MPD in player from: " + this.m_strMPD);
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
          this.Close(), (0, g.q_)(...t);
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
                R(e) &&
                ((t = e), (this.m_strVideoAdaptationID = e.strID)),
              !this.m_strAudioAdaptationID &&
                e.bContainsAudio &&
                R(e) &&
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
          (0, g.q_)("OnMediaSourceOpen");
          for (let e of this.m_rgLoaders) e.SetMediaSource(this.m_mediaSource);
          this.BeginPlayback();
        }
        HandleMediaSourceError(e) {
          this.m_bClosing ||
            e.target != this.m_mediaSource ||
            this.StopDownloads();
        }
        OnMediaSourceEnded(e) {
          (0, g.q_)("OnMediaSourceEnded", e), this.HandleMediaSourceError(e);
        }
        OnMediaSourceClose(e) {
          (0, g.q_)("OnMediaSourceClose", e), this.HandleMediaSourceError(e);
        }
        OnVideoWaiting(e) {
          if (this.IsAtEnd())
            return (
              (0, g.q_)(
                `pausing playback due to OnVideoWaiting (endTime=${this.m_mpd.GetEndTime()}, currentPlaytime=${this.GetCurrentPlayTime()} )`,
              ),
              this.Pause(),
              void this.DispatchEvent("valve-ended")
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
                  ((0, g.q_)(
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
                    (0, g.q_)(
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
                  (0, g.q_)(
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
                (0, g.q_)(
                  "OnVideoWaiting - Stalled, already at lowest resolution. No action taken. BHasLoader: " +
                    (null != t),
                );
            } else
              (0, g.q_)(
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
            (0, g.q_)("DebugMessage - Stats: " + e.type + " BufferedMS: " + t);
        }
        OnVideoError(e) {
          (0, g.q_)("OnVideoError");
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
              this.m_seekingToTime.eSeekType == N.FromAvailableStart
            )
              return 0;
            let e =
              this.m_seekingToTime.eSeekType == N.FromAvailableStart
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
          if (null == this ? void 0 : this.m_elVideo)
            if (this.m_bUserLiveEdgeChoice && this.IsLiveContent()) {
              let e = this.GetBufferedLiveEdgeTime();
              if (
                1 == this.m_elVideo.playbackRate &&
                this.m_elVideo.currentTime <= e - 4.5 &&
                this.BIsPlayerBufferedBetween(this.m_elVideo.currentTime, e)
              ) {
                let t = e - this.m_elVideo.currentTime;
                (this.m_elVideo.playbackRate = 1.1),
                  (0, g.q_)(
                    "User is behind by " +
                      t.toFixed(2) +
                      " seconds, increasing playback speed to catch-up to live edge.",
                  );
              } else
                1.1 == this.m_elVideo.playbackRate &&
                  this.m_elVideo.currentTime >= e - 1 &&
                  ((this.m_elVideo.playbackRate = 1),
                  (0, g.q_)("User is caught up, returning to normal playrate"));
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
            (e = n ? t - n + 10 : 0), (e = h.OQ(e, 0, i));
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
        IsAtEnd() {
          return (
            !this.IsLiveContent() &&
            this.m_mpd &&
            this.m_mpd.GetEndTime() > 0 &&
            this.m_mpd.GetEndTime() - this.GetCurrentPlayTime() < 1
          );
        }
        SetUserPlayChoice(e) {
          (this.m_bUserPlayChoice = e),
            this.DispatchEvent("valve-userpausechange");
        }
        Play() {
          this.SetUserPlayChoice(!0), this.Seek(this.GetCurrentPlayTime());
        }
        Pause() {
          var e, t;
          (this.m_bUserLiveEdgeChoice = !1),
            1.1 ==
              (null === (e = this.m_elVideo) || void 0 === e
                ? void 0
                : e.playbackRate) && (this.m_elVideo.playbackRate = 1),
            this.SetUserPlayChoice(!1),
            null === (t = this.m_elVideo) || void 0 === t || t.pause();
        }
        GetPlaybackRate() {
          return this.m_elVideo.paused ? 0 : this.m_elVideo.playbackRate;
        }
        GetCDNAuthURLParameter() {
          return this.m_strCDNAuthURLParameters;
        }
        OnSegmentDownloaded(e) {
          (0, g.q_)(e.GetDebugName() + " OnSegmentDownloaded"),
            this.UpdateVideoRepresentation(this.m_videoRepSelected),
            this.OnVideoBufferProgress(),
            e == this.GetVideoLoader() &&
              this.m_stats.SetCurrentVideoBandwidth(e.GetAvgDownloadRate());
        }
        async PlayOnElement() {
          const e = this.m_bFirstPlay;
          this.m_bFirstPlay = !1;
          let t = !1;
          const i = () => {
            (t = !0),
              this.m_stats
                .GetFPSMonitor()
                .StartTracking(() =>
                  this.m_stats.ExtractFrameInfo(this.m_elVideo),
                );
          };
          try {
            await this.m_elVideo.play(), i();
          } catch (e) {
            if ("NotAllowedError" === e.name && this.BHasTimedText()) {
              (this.m_elVideo.muted = !0),
                this.SetSubtitles((0, o.sf)(p.TS.LANGUAGE));
              try {
                await this.m_elVideo.play(), i();
              } catch (e) {}
            }
          }
          !t && e && this.DispatchEvent("valve-userinputneeded");
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
            : ((0, g.q_)(
                "OnSegmentDownloadGone: too many consecutive 'gone', erroring the download: " +
                  e.GetNumConsecutiveDownloadGones(),
              ),
              this.OnSegmentDownloadFailed(e, U.StreamGone));
        }
        OnMediaUnsupportedError(e, t) {
          this.DispatchEvent("valve-typeerror", t);
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
              (0, g.q_)(
                `Begin playback of live content [this.buffer=${this.m_nTrackBufferMS}][nStartTime=${e}][nLiveEdge=${s}]`,
              );
          } else
            this.SetTrackBufferMS(8e3),
              (e = this.GetPlaybackStartTime(0)),
              this.m_bookMarkAdapter &&
                ((e = this.m_bookMarkAdapter.GetBeginPlaytime()),
                this.m_mpd.GetEndTime() - e < 5 && (e = 0)),
              (0, g.q_)(
                `Begin playback of non-live content [this.buffer=${this.m_nTrackBufferMS}][nStartTime=${e}]`,
              );
          (this.m_seekingToTime = null),
            (0, g.q_)("Starting playback at " + e),
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
              (0, g.q_)(
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
              (0, g.q_)(
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
                (0, g.q_)(
                  `Video select: Skipping ${t} due to dropping frames and high FPS representation: [fps:${o}]`,
                );
                continue;
              }
            }
            if (this.m_nLimitFPS > 0 && o > this.m_nLimitFPS) {
              (0, g.q_)(`Video select: Skipping ${t} due to frame rate limit`);
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
          (0, m.w)(
            this.m_bPlaybackStarted,
            "Missing mpd info to calculate seek time",
          );
          let t =
            this.m_seekingToTime.eSeekType == N.FromAvailableStart
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
        Seek(e, t = N.Absolute) {
          if (!this.m_bPlaybackStarted)
            return (this.m_seekingToTime = { nTime: e, eSeekType: t }), e;
          t == N.FromAvailableStart && (e += this.GetAvailableVideoStartTime());
          let i = this.GetAvailableVideoStartTime(),
            n = this.GetBufferedLiveEdgeTime();
          const s = e;
          (e = h.OQ(e, i, n)) != s &&
            (0, g.q_)(`Seek time ${s} was clamped to the range ${i} to ${n}`),
            (this.m_bUserLiveEdgeChoice = e >= n - I);
          let r = this.m_elVideo.paused;
          if ((r || this.m_elVideo.pause(), this.m_bUseHLSManifest))
            (this.m_elVideo.currentTime = e - this.m_hlsTimeOffset),
              this.m_elVideo.play();
          else {
            (this.m_bIsBuffering = !0),
              (this.m_seekingToTime = { nTime: e, eSeekType: N.Absolute });
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
          (e = h.OQ(e, 0, 1)), (this.m_elVideo.volume = e);
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
              id: E,
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
          if (e && e.id != E) {
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
      (0, n.Cg)([a.sH], O.prototype, "m_nTimedText", void 0),
        (0, n.Cg)([a.XI], O.prototype, "InitTimedText", null),
        (0, n.Cg)([u.o], O.prototype, "OnVisibilityChange", null),
        (0, n.Cg)([u.o], O.prototype, "UpdateMPD", null),
        (0, n.Cg)([u.o], O.prototype, "OnMediaSourceOpen", null),
        (0, n.Cg)([u.o], O.prototype, "HandleMediaSourceError", null),
        (0, n.Cg)([u.o], O.prototype, "OnMediaSourceEnded", null),
        (0, n.Cg)([u.o], O.prototype, "OnMediaSourceClose", null),
        (0, n.Cg)([u.o], O.prototype, "OnVideoWaiting", null),
        (0, n.Cg)([u.o], O.prototype, "OnVideoPause", null),
        (0, n.Cg)([u.o], O.prototype, "OnVideoResize", null),
        (0, n.Cg)(
          [u.o],
          O.prototype,
          "OnDebugPrintEventInfoAndAvailableBuffer",
          null,
        ),
        (0, n.Cg)([u.o], O.prototype, "OnVideoError", null),
        (0, n.Cg)([u.o], O.prototype, "OnVideoCanPlay", null),
        (0, n.Cg)([u.o], O.prototype, "GetCurrentPlayTime", null),
        (0, n.Cg)([u.o], O.prototype, "OnVideoTimeUpdate", null),
        (0, n.Cg)(
          [u.o],
          O.prototype,
          "SendUpdateToBookmarkServiceIfNeeded",
          null,
        ),
        (0, n.Cg)([u.o], O.prototype, "OnPlayAction", null),
        (0, n.Cg)([u.o], O.prototype, "GetPlaybackRate", null),
        (0, n.Cg)([u.o], O.prototype, "GetCDNAuthURLParameter", null),
        (0, n.Cg)([u.o], O.prototype, "OnSegmentDownloaded", null),
        (0, n.Cg)([u.o], O.prototype, "PlayOnElement", null),
        (0, n.Cg)([u.o], O.prototype, "OnSegmentDownloadFailed", null),
        (0, n.Cg)([u.o], O.prototype, "OnSegmentDownloadGone", null),
        (0, n.Cg)([u.o], O.prototype, "OnMediaUnsupportedError", null),
        (0, n.Cg)([u.o], O.prototype, "OnMediaSourceError", null),
        (0, n.Cg)(
          [u.o],
          O.prototype,
          "VerifyFirstSegmentDownloadProgress",
          null,
        ),
        (0, n.Cg)([u.o], O.prototype, "GameDataEventTrigger", null),
        (0, n.Cg)([u.o], O.prototype, "ReportPlayerStats", null),
        (0, n.Cg)([a.XI.bound], O.prototype, "CaptureStatsForDisplay", null);
    },
    34374: (e, t, i) => {
      i.d(t, { _L: () => S });
      var n = i(34629),
        s = i(14947),
        r = i(41735),
        a = i.n(r),
        o = i(17720),
        m = i(36064),
        d = i(78327),
        l = i(6144),
        h = i(61859),
        u = i(82227);
      const _ = 1e6;
      class p {
        constructor() {
          this.playback_speed = 1;
        }
      }
      class g extends p {}
      class f extends p {}
      class S {
        constructor() {
          (this.m_steamIDBroadcast = ""),
            (this.m_steamIDViewer = ""),
            (this.m_broadcastID = ""),
            (this.m_ulViewerToken = ""),
            (this.m_strCDNAuthUrlParameters = void 0),
            (this.m_host = ""),
            (this.m_strBroadcastOrigin = ""),
            (this.m_strStatsLink = ""),
            (this.m_strStalledLink = ""),
            (this.m_strEventLogLink = ""),
            (this.m_allTimeSnapshot = new c(0)),
            (this.m_rgSnapShots = new Array(new c(0))),
            (this.m_videoResolution = 0),
            (this.m_audioRate = 0),
            (this.m_audioChannel = 0),
            (this.m_frameRate = 0),
            (this.m_strBufferingVideoResolution = "0x0@0"),
            (this.m_nPlaybackVideoResolution = 0),
            (this.m_strPlaybackVideoResolution = "0x0"),
            (this.m_htmlVideoResolution = 0),
            (this.m_strHtmlVideoDisplay = ""),
            (this.m_nAudioBandwidth = 0),
            (this.m_nVideoBandwidth = 0),
            (this.m_nBandwidthRequired = 0),
            (this.m_nCurBandwidthVideo = 0),
            (this.m_nAudioBufferedMS = 0),
            (this.m_nVideoBufferedMS = 0),
            (this.m_nActiveDownloads = 0),
            (this.m_nVideoDownloadProgress = 0),
            (this.m_videoBufferedRanges = null),
            (this.m_audioBufferedRanges = null),
            (this.m_nSegmentDurationMS = 0),
            (this.m_nPlaybackRate = 0),
            (this.m_nTimeToFirstFrameMS = -1),
            (this.m_fpsMonitor = new T()),
            (0, s.Gn)(this);
        }
        GetBytesReceivedToDisplay() {
          return (0, u.dm)(this.m_allTimeSnapshot.m_nBytesReceived, 1);
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
            ? (0, m.ap)(this.m_videoBufferedRanges.start(e)) +
                " - " +
                (0, m.ap)(this.m_videoBufferedRanges.end(e))
            : (0, h.we)("#DASHPlayerStats_VideoNoRangeInformation");
        }
        GetBufferedAudioSegmentForDisplay(e) {
          return this.m_audioBufferedRanges &&
            e < this.m_audioBufferedRanges.length
            ? (0, m.ap)(this.m_audioBufferedRanges.start(e)) +
                " - " +
                (0, m.ap)(this.m_audioBufferedRanges.end(e))
            : (0, h.we)("#DASHPlayerStats_AudioNoRangeInformation");
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
            : (0, h.we)("#DASHPlayerStats_Tracking");
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
            return void (0, m.q_)(
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
              (0, m.q_)(
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
            (0, m.q_)("CDASHStats Sending Report to Server", e),
            a()
              .post(t, n)
              .catch((e) => {
                (0, m.q_)("Failed to upload stats: ", e);
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
              ? new o.b(this.m_steamIDBroadcast).GetAccountID()
              : 0),
            (e.useragent = window.navigator.userAgent),
            (e.sessionid = d.TS.SESSIONID),
            (e.broadcast_origin = this.m_strBroadcastOrigin);
        }
      }
      (0, n.Cg)([s.sH], S.prototype, "m_allTimeSnapshot", void 0),
        (0, n.Cg)([s.sH], S.prototype, "m_strBufferingVideoResolution", void 0),
        (0, n.Cg)([s.sH], S.prototype, "m_strPlaybackVideoResolution", void 0),
        (0, n.Cg)([s.sH], S.prototype, "m_strHtmlVideoDisplay", void 0),
        (0, n.Cg)([s.sH], S.prototype, "m_nBandwidthRequired", void 0),
        (0, n.Cg)([s.sH], S.prototype, "m_nCurBandwidthVideo", void 0),
        (0, n.Cg)([s.sH], S.prototype, "m_nAudioBufferedMS", void 0),
        (0, n.Cg)([s.sH], S.prototype, "m_nVideoBufferedMS", void 0),
        (0, n.Cg)([s.sH], S.prototype, "m_nActiveDownloads", void 0),
        (0, n.Cg)([s.sH], S.prototype, "m_nVideoDownloadProgress", void 0),
        (0, n.Cg)([s.sH], S.prototype, "m_videoBufferedRanges", void 0),
        (0, n.Cg)([s.sH], S.prototype, "m_audioBufferedRanges", void 0),
        (0, n.Cg)([s.sH], S.prototype, "m_nPlaybackRate", void 0),
        (0, n.Cg)([s.XI], S.prototype, "SetVideoPlaybackResolution", null),
        (0, n.Cg)([s.XI], S.prototype, "SetRepresentation", null),
        (0, n.Cg)([s.XI], S.prototype, "SetCurrentVideoBandwidth", null),
        (0, n.Cg)(
          [s.XI],
          S.prototype,
          "CaptureFrequentlyUpdatingInformation",
          null,
        ),
        (0, n.Cg)([s.XI], S.prototype, "LogDownload", null),
        (0, n.Cg)([s.XI], S.prototype, "LogSegmentDownloadFailure", null),
        (0, n.Cg)([s.XI], S.prototype, "LogFrameInfo", null),
        (0, n.Cg)([s.XI], S.prototype, "LogBufferDuration", null);
      class c {
        constructor(e) {
          (this.m_timeMS = Date.now()),
            (this.m_nBytesReceived = 0),
            (this.m_nInitialVideoResolution = 0),
            (this.m_nFailedSegments = 0),
            (this.m_nStallEvents = 0),
            (this.m_nEntries = 0),
            (this.m_nSegmentDownloadTimeTotalMS = 0),
            (this.m_nSegmentDownloadTimeMaxMS = 0),
            (this.m_nSegmentDownloadTimeMinMS = 0),
            (this.m_nBandwidthTotal = 0),
            (this.m_nBandwidthMin = 0),
            (this.m_nBandwidthMax = 0),
            (this.m_nLastSegementDownloadStatus = 200),
            (this.m_nFramesDecoded = 0),
            (this.m_nFramesDropped = 0),
            (0, s.Gn)(this),
            (this.m_nInitialVideoResolution = e);
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
      (0, n.Cg)([s.sH], c.prototype, "m_nBytesReceived", void 0),
        (0, n.Cg)([s.sH], c.prototype, "m_nFailedSegments", void 0),
        (0, n.Cg)([s.sH], c.prototype, "m_nStallEvents", void 0),
        (0, n.Cg)([s.sH], c.prototype, "m_nSegmentDownloadTimeMaxMS", void 0),
        (0, n.Cg)([s.sH], c.prototype, "m_nSegmentDownloadTimeMinMS", void 0),
        (0, n.Cg)([s.sH], c.prototype, "m_nBandwidthMin", void 0),
        (0, n.Cg)([s.sH], c.prototype, "m_nBandwidthMax", void 0),
        (0, n.Cg)([s.sH], c.prototype, "m_nFramesDecoded", void 0),
        (0, n.Cg)([s.sH], c.prototype, "m_nFramesDropped", void 0),
        (0, n.Cg)([s.XI], c.prototype, "SegmentReceived", null);
      class D {
        reset(e, t) {
          (this.bDropReading = e), (this.nTotalDecodedFrames = t);
        }
      }
      class T {
        constructor() {
          (this.k_nTestFrequencyMS = 1e3),
            (this.k_nSlidingWindow = 6),
            (this.k_nDroppedFramesThreshold = 1),
            (this.k_nFailThreshold = 3),
            (this.k_nIgnoreReadingAroundResizeMS = 2e3),
            (this.m_schTracker = new l.LU()),
            (this.m_rgResultsWindow = []),
            (this.m_nLastResizeMS = 0),
            (this.m_bDroppingFrameDetected = !1),
            (this.m_nCurrentFPS = 0),
            (0, s.Gn)(this);
        }
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
      (0, n.Cg)([s.sH], T.prototype, "m_bDroppingFrameDetected", void 0),
        (0, n.Cg)([s.sH], T.prototype, "m_nCurrentFPS", void 0),
        (0, n.Cg)([s.XI.bound], T.prototype, "TakeReading", null);
    },
  },
]);
