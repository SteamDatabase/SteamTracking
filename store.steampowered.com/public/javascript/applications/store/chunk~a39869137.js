/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1703],
  {
    36064: (e, t, i) => {
      i.d(t, {
        Mc: () => a,
        ZI: () => r,
        aM: () => d,
        ap: () => o,
        q_: () => s,
      });
      const n = new (i(60778).wd)("video"),
        s = (n.Info, n.Debug),
        r = n.Error;
      n.Warning;
      function o(e) {
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
      function d() {
        let e = document
          .createElement("video")
          .canPlayType(
            'application/vnd.apple.mpegurl;codecs="avc1.64001f,mp4a.40.02"',
          );
        return "probably" === e || "maybe" === e;
      }
    },
    48333: (e, t, i) => {
      i.d(t, { Zn: () => Q, N_: () => $, n_: () => X, Br: () => N });
      var n,
        s = i(34629),
        r = i(41735),
        o = i.n(r),
        a = i(14947),
        d = i(22837),
        m = i(81393),
        l = i(6144),
        h = i(61859),
        u = i(25489),
        _ = i(6419),
        p = i(14771),
        f = i(78327),
        g = i(36064),
        S = i(34374),
        c = i(61336);
      function D(e, t) {
        let i = e.getElementsByTagName("MPD");
        return i && 1 == i.length ? i[0] : null;
      }
      function T(e, t) {
        for (let i = 0; i < e.children.length; i++) {
          let n = e.children[i];
          if (n.tagName == t) return n;
        }
        return null;
      }
      function y(e, t) {
        let i = e.getAttribute(t);
        if (!i) return null;
        let n = new Date(i);
        return "[object Date]" === Object.prototype.toString.call(n) ? n : null;
      }
      function b(e, t) {
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
      function B(e, t) {
        let i = e.getAttribute(t);
        return i ? parseInt(i) : null;
      }
      function v(e, t) {
        let i = e.getAttribute(t);
        return i || "";
      }
      function C(e, t, i) {
        let n = {
          nTimeScale: B(e, "timescale"),
          nDuration: B(e, "duration"),
          nStartNumber: B(e, "startNumber"),
          strMedia: v(e, "media"),
          strInitialization: v(e, "initialization"),
        };
        return (
          t.bContainsThumbnails &&
            ((void 0 !== n.nTimeScale && null !== n.nTimeScale) ||
              (n.nTimeScale = 1)),
          n.nTimeScale &&
          n.nDuration &&
          n.nStartNumber &&
          n.strMedia &&
          (t.bContainsThumbnails || n.strInitialization)
            ? ((n.strMedia = A(n.strMedia, i)),
              (n.strInitialization = A(n.strInitialization, i)),
              n)
            : null
        );
      }
      function M(e, t, i) {
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
      function P(e) {
        return (0, c.DZ)(e);
      }
      function R(e, t) {
        let i = e;
        i.endsWith("/") || (i += "/");
        let n = t.startsWith("/") ? 1 : 0;
        return i + t.substring(n);
      }
      function A(e, t) {
        return e && !P(e) && P(t) ? R(t, e) : e;
      }
      function G(e) {
        return (
          0 == e.rgRoles.length || e.rgRoles.findIndex((e) => "main" == e) >= 0
        );
      }
      function V(e) {
        if (!e) return 0;
        let t = e.segmentTemplate;
        return 1e3 == t.nTimeScale
          ? t.nDuration
          : (t.nDuration / t.nTimeScale) * 1e3;
      }
      function k(e, t, i) {
        i -= 1e3 * e.GetStartTime();
        let n = V(t),
          s = I(e, n, i);
        return Math.floor(s / n) + t.segmentTemplate.nStartNumber;
      }
      function L(e, t) {
        return (t - e.segmentTemplate.nStartNumber) * (V(e) / 1e3);
      }
      function I(e, t, i) {
        return i + ((1e3 * e.GetStartTime()) % t);
      }
      function F(e) {
        return M(e.segmentTemplate.strInitialization, e.strID, 0);
      }
      class E {
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
        GetMainVideoAdaption() {
          let e = this.m_rgPeriods[0];
          for (let t of e.rgAdaptationSets)
            if (G(t) && t.bContainsVideo) return t;
          return null;
        }
        GetMainAudioAdaption() {
          let e = this.m_rgPeriods[0];
          for (let t of e.rgAdaptationSets)
            if (G(t) && t.bContainsAudio) return t;
          return null;
        }
        GetThumbnailAdaptation() {
          let e = this.m_rgPeriods[0];
          for (let t of e.rgAdaptationSets) if (t.bContainsThumbnails) return t;
          return null;
        }
        GetThumbnailDurationMS() {
          let e = this.GetThumbnailAdaptation();
          if (!e || 0 == e.rgRepresentations.length) return 0;
          let t = e.rgRepresentations[0];
          return V(t) / (t.nTileWidthCount * t.nTileHeightCount);
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
        GetThumbnail(e) {
          let t = this.GetThumbnailAdaptation();
          if (!t || 0 == t.rgRepresentations.length) return null;
          let i = t.rgRepresentations[0],
            n = k(this, i, e),
            s = V(i),
            r = s * (n - i.segmentTemplate.nStartNumber),
            o = s / (i.nTileWidthCount * i.nTileHeightCount),
            a = Math.floor((e - r) / o),
            d = Math.floor(a / i.nTileWidthCount),
            m = a % i.nTileWidthCount;
          if (m + 1 > i.nTileHeightCount)
            return (
              (0, g.q_)(
                "Asking for a thumbnail that is off the end of the tile sheet",
              ),
              null
            );
          let l = i.nWidth / i.nTileWidthCount,
            h = i.nHeight / i.nTileHeightCount;
          return {
            strTileURL: M(i.segmentTemplate.strMedia, i.strID, n),
            x: m * l,
            y: d * h,
            nThumbnailWidth: l,
            nThumbnailHeight: h,
            nImageWidth: i.nWidth,
            nImageHeight: i.nHeight,
          };
        }
        StartLiveContentNow(e) {
          this.m_tsLiveContentStart = performance.now() - e;
        }
        GetDurationSinceStarted() {
          return performance.now() - this.m_tsLiveContentStart;
        }
        ParseRepresentation(e, t, i, n, s) {
          let r = {
            strID: v(e, "id"),
            strMimeType: v(e, "mimeType"),
            strCodecs: v(e, "codecs"),
            nBandwidth: B(e, "bandwidth"),
            segmentTemplate: null,
          };
          !r.strMimeType && s && (r.strMimeType = s);
          let o = T(e, "SegmentTemplate");
          if (o) {
            let e = C(o, t, n);
            e && (r.segmentTemplate = e);
          } else r.segmentTemplate = { ...i };
          if (!r.segmentTemplate)
            return (
              (0, g.q_)("MPD - No segment template for representation"), null
            );
          if (t.bContainsVideo) {
            if (
              ((r.nWidth = B(e, "width")),
              (r.nHeight = B(e, "height")),
              (r.nFrameRate = B(e, "frameRate")),
              (0, g.q_)(
                `representation: ${r.nWidth}w x ${r.nHeight}h x ${r.nFrameRate} fps`,
              ),
              !(r.strID && r.strMimeType && r.strCodecs && r.nBandwidth))
            )
              return (0, g.q_)("MPD - Representation Video Data Missing"), null;
          } else if (t.bContainsAudio) {
            r.nAudioSamplingRate = B(e, "audioSamplingRate");
            let t = T(e, "AudioChannelConfiguration");
            if (
              (t && (r.nAudioChannels = B(t, "value")),
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
          } else if (t.bContainsThumbnails) {
            if (
              ((a = r.strMimeType),
              !["image/jpeg", "image/jpg", "image/avif", "image/webp"].includes(
                a,
              ))
            )
              return (
                (0, g.q_)(
                  "MPD - Representation Thumbnail MimeType not supported",
                  r.strMimeType,
                ),
                null
              );
            (r.nWidth = B(e, "width")), (r.nHeight = B(e, "height"));
            let t = T(e, "EssentialProperty");
            if (!t)
              return (
                (0, g.q_)(
                  "MPD - Representation Thumbnail missing EssentialProperty",
                ),
                null
              );
            let i = v(t, "schemeIdUri");
            if (!i || "http://dashif.org/guidelines/thumbnail_tile" != i)
              return (
                (0, g.q_)("MPD - Representation Thumbnail has invalid schema"),
                null
              );
            let n = (v(t, "value") || "").split("x");
            if (2 != n.length || !u.TG(n[0]) || !u.TG(n[1]))
              return (
                (0, g.q_)(
                  "MPD - Representation Thumbnail has invalid tile property",
                ),
                null
              );
            (r.nTileWidthCount = parseInt(n[0])),
              (r.nTileHeightCount = parseInt(n[1]));
          }
          var a;
          return r;
        }
        ParseAdaptationSetVTT(e, t) {
          e.rgRoles.push("subtitle");
          let i = t.getElementsByTagName("Role");
          for (let t = 0; t < i.length; t++) {
            let n = v(i[t], "value");
            n && "subtitle" != n && e.rgRoles.push(n);
          }
          let n = t.getElementsByTagName("Representation");
          for (let t = 0; t < n.length; t++) {
            let i = n[t],
              s = {
                strID: v(i, "id"),
                nBandwidth: B(i, "bandwidth"),
                strClosedCaptionFile: "",
              },
              r = T(i, "BaseURL"),
              o = r ? r.textContent : "";
            if (!o) {
              (0, g.q_)(
                "Closed Caption File has no BaseURL for (id): " + s.strID,
              );
              continue;
            }
            (s.strClosedCaptionFile = M(o, s.strID, 0)),
              s.strClosedCaptionFile.startsWith("http") ||
                (s.strClosedCaptionFile =
                  this.m_strBaseURL + s.strClosedCaptionFile);
            const a = (0, f.yK)();
            if ("community" == a) {
              const e = new URL(s.strClosedCaptionFile).pathname.split(
                "/video/",
              )[1];
              s.strClosedCaptionFile = e
                ? f.TS.COMMUNITY_BASE_URL + "vtt/video/" + e
                : null;
            } else if ("store" == a || "dev" == f.TS.WEB_UNIVERSE) {
              const e = new URL(s.strClosedCaptionFile).pathname.split(
                "/video/",
              )[1];
              s.strClosedCaptionFile = e
                ? f.TS.STORE_BASE_URL + "vtt/video/" + e
                : null;
            }
            s.strClosedCaptionFile && e.rgRepresentations.push(s);
          }
        }
        BParse(e, t) {
          let i = new DOMParser().parseFromString(e, "application/xml"),
            n = D(i);
          if (!n) return !1;
          let s = n.getAttribute("type");
          if (
            ((this.m_nMinBufferTime = b(n, "minBufferTime")), "dynamic" == s)
          ) {
            if (
              ((this.m_strType = "dynamic"),
              (this.m_dtAvailabilityStartTime = y(n, "availabilityStartTime")),
              (this.m_dtPublishTime = y(n, "publishTime")),
              (this.m_nMinimumUpdatePeriod = b(n, "minimumUpdatePeriod")),
              (this.m_nTimeShiftBufferDepth =
                b(n, "timeShiftBufferDepth") || 0),
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
              (this.m_nMediaPresentationDuration = b(
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
          let r = T(n, "BaseURL");
          this.m_strBaseURL = r
            ? r.textContent
            : (function (e) {
                if (!P(e)) return "";
                let t = new URL(e),
                  i = t.pathname;
                return (
                  (i.indexOf(".mpd") >= 0 || i.endsWith("/")) &&
                    (i = i.substring(0, i.lastIndexOf("/"))),
                  R(t.origin, i) + "/"
                );
              })(t);
          let o = T(n, "Analytics");
          o &&
            ((this.m_strStatsLink = v(o, "statslink")),
            (this.m_strStalledLink = v(o, "stalledlink")),
            (this.m_strEventLogLink = v(o, "eventlink")));
          let a = i.getElementsByTagName("Period");
          if (0 == a.length) return !1;
          let d = a[0],
            m = {
              strID: v(d, "id"),
              nStart: b(d, "start"),
              nDuration: b(d, "duration"),
              rgAdaptationSets: [],
            };
          if (!m.strID || null === m.nStart)
            return (0, g.q_)("MPD - Missing Period Information."), !1;
          (this.m_rgPeriods = []), this.m_rgPeriods.push(m);
          let l = d.getElementsByTagName("AdaptationSet");
          for (let e = 0; e < l.length; e++) {
            let t = l[e],
              i = v(t, "description"),
              n = v(t, "lang"),
              s = {
                bSegmentAlignment: w(t, "segmentAlignment"),
                bIsTimedText: "text/vtt" == v(t, "mimeType"),
                strLanguage: v(t, "lang"),
                bContainsVideo: !1,
                bContainsAudio: !1,
                bContainsThumbnails: !1,
                strDescription: i || n,
                strForceSub: v(t, "forceSub"),
                strID: v(t, "id"),
                rgRoles: [],
                rgRepresentations: [],
              };
            m.rgAdaptationSets.push(s);
            let r = t.getElementsByTagName("ContentComponent");
            for (let e = 0; e < r.length; e++) {
              let t = v(r[e], "contentType");
              "video" == t && (s.bContainsVideo = !0),
                "audio" == t && (s.bContainsAudio = !0),
                "image" == t && (s.bContainsThumbnails = !0);
            }
            if (0 == r.length) {
              let e = v(t, "contentType");
              "video" == e && (s.bContainsVideo = !0),
                "audio" == e && (s.bContainsAudio = !0),
                "image" == e && (s.bContainsThumbnails = !0);
            }
            if (s.bIsTimedText) {
              this.ParseAdaptationSetVTT(s, t);
              continue;
            }
            if (!s.bContainsThumbnails && !s.bSegmentAlignment)
              return (
                (0, g.q_)(
                  "MPD - Only segment aligned dash manifests is supported",
                ),
                !1
              );
            let o = t.getElementsByTagName("Role");
            for (let e = 0; e < o.length; e++) {
              let t = v(o[e], "value");
              t && s.rgRoles.push(t);
            }
            let a = null,
              d = T(t, "SegmentTemplate");
            if (d) {
              let e = C(d, s, this.m_strBaseURL);
              if (!e)
                return (
                  (0, g.q_)("MPD - Failed to parse found Adaptation template"),
                  !1
                );
              a = e;
            }
            let h = v(t, "mimeType"),
              u = t.getElementsByTagName("Representation");
            for (let e = 0; e < u.length; e++) {
              let t = u[e],
                i = this.ParseRepresentation(t, s, a, this.m_strBaseURL, h);
              if (!i) return !1;
              s.rgRepresentations.push(i);
            }
          }
          return !0;
        }
        BUpdate(e) {
          let t = new DOMParser().parseFromString(e, "application/xml"),
            i = D(t);
          if (!i) return !1;
          if (this.IsLiveContent()) {
            switch (v(i, "type")) {
              case "dynamic":
                break;
              case "static":
                (0, g.q_)("Converting MPD from dynamic to static"),
                  (this.m_strType = "static"),
                  (this.m_nMediaPresentationDuration = b(
                    i,
                    "mediaPresentationDuration",
                  )),
                  (this.m_nMinBufferTime = b(i, "minBufferTime")),
                  (this.m_dtAvailabilityStartTime = null),
                  (this.m_dtPublishTime = null);
            }
            let e = t.getElementsByTagName("Period");
            if (0 == e.length) return !1;
            let n = e[0].getElementsByTagName("AdaptationSet");
            for (let e = 0; e < n.length; e++) {
              let t = n[e],
                i = v(t, "id"),
                s = this.GetAdaptationByTrackID(i);
              if (s) {
                let e = null,
                  i = T(t, "SegmentTemplate");
                if (i) {
                  let t = C(i, s, this.m_strBaseURL);
                  if (!t)
                    return (
                      (0, g.q_)(
                        "MPD - Failed to parse found Adaptation template",
                      ),
                      !1
                    );
                  e = t;
                }
                let n = v(t, "mimeType"),
                  r = t.getElementsByTagName("Representation");
                if (r.length > 1)
                  for (let t = 0; t < r.length; t++) {
                    let i = r[t],
                      o = this.ParseRepresentation(
                        i,
                        s,
                        e,
                        this.m_strBaseURL,
                        n,
                      );
                    if (!o)
                      return (
                        (0, g.q_)("MPD - Failed to parse representation"), !1
                      );
                    let a = null;
                    for (let e of s.rgRepresentations)
                      if (o.strID == e.strID) {
                        a = e;
                        break;
                      }
                    a
                      ? (a.segmentTemplate.strMedia =
                          o.segmentTemplate.strMedia)
                      : s.rgRepresentations.push(o);
                  }
                break;
              }
            }
          }
          let n = T(i, "Analytics");
          return (
            n &&
              ((this.m_strStatsLink = v(n, "statslink")),
              (this.m_strStalledLink = v(n, "stalledlink")),
              (this.m_strEventLogLink = v(n, "eventlink"))),
            !0
          );
        }
      }
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Append = 1)] = "Append"),
          (e[(e.Remove = 2)] = "Remove");
      })(n || (n = {}));
      class x {
        m_eBufferUpdate = n.None;
        m_sourceBuffer = null;
        Attach(e) {
          (this.m_sourceBuffer = e), (this.m_eBufferUpdate = n.None);
        }
        Detach() {
          (this.m_sourceBuffer = null), (this.m_eBufferUpdate = n.None);
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
          this.m_eBufferUpdate = n.None;
        }
        MarkAsRemoving() {
          this.m_eBufferUpdate = n.Remove;
        }
        GetAmountBufferedInPlayerMS(e) {
          if (!this.m_sourceBuffer) return 0;
          let t = this.m_sourceBuffer.buffered;
          if (0 == t.length) return 0;
          e < t.start(0) && (e = t.start(0)), e > t.end(0) && (e = t.end(0));
          let i = t.end(0) - e;
          return Math.floor(1e3 * i);
        }
        AppendBuffer(e) {
          (0, m.wT)(null != this.m_sourceBuffer, "Invalid source buffer"),
            (0, m.wT)(
              this.m_eBufferUpdate == n.None,
              "Appending to source buffer with operation in flight",
            );
          try {
            this.m_sourceBuffer.appendBuffer(e),
              (this.m_eBufferUpdate = n.Append);
          } catch (e) {
            return e;
          }
          return null;
        }
        Remove(e, t) {
          (0, m.wT)(null != this.m_sourceBuffer, "Invalid source buffer"),
            (0, m.wT)(
              this.m_eBufferUpdate == n.None,
              "Removing from source buffer with operation in flight",
            ),
            this.m_sourceBuffer.remove(e, t),
            (this.m_eBufferUpdate = n.Remove);
        }
        RemoveAll() {
          let e = 0;
          if (this.m_sourceBuffer) {
            let t = this.m_sourceBuffer.buffered;
            for (let i = 0; i < t.length; i++) e < t.end(i) && (e = t.end(i));
          }
          return (
            0 != e &&
            (this.m_sourceBuffer.remove(0, e + 1),
            (this.m_eBufferUpdate = n.Remove),
            !0)
          );
        }
      }
      class U {
        m_callbacks = null;
        m_mpd = null;
        m_adaptation = null;
        m_mediaSource = null;
        m_sourceBuffer = new x();
        m_nTrackBufferMS = 0;
        m_representation = null;
        m_rgBufferedSegments = [];
        m_mapInitSegments = new Map();
        m_strLastFedInitSegmentRep = "";
        m_nNextSegment = 0;
        m_bRemoveBufferState = !1;
        m_bSeekInProgress = !1;
        m_bSourceBufferQuotaExceeded = !1;
        m_schNextDownload = new l.LU();
        m_xhrDownload = null;
        m_listeners = new l.Ji();
        m_rgDownloadLog = [];
        m_nCurDownloadProgress = 0;
        m_nCurDownloadBitrate = 0;
        m_stats;
        m_nNumConsecutiveDownloadGones = 0;
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
        GetAdaptation() {
          return this.m_adaptation;
        }
        GetBandwidthRequired() {
          return this.m_representation.nBandwidth;
        }
        GetCurrentSegmentDurationMS() {
          return V(this.m_representation);
        }
        GetCurrentSegmentInitializationURL() {
          return F(this.m_representation);
        }
        BIsCurrentRepresentation(e) {
          return e && e.strID == this.m_representation.strID;
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
          let e = [];
          return (
            this.ContainsVideo()
              ? e.push("Video")
              : this.ContainsAudio() && e.push("Audio"),
            e.join(" & ") +
              ":" +
              this.m_callbacks.GetCurrentPlayTime().toFixed(3).toString()
          );
        }
        GetMaxSegment() {
          return (function (e, t) {
            if (e.IsLiveContent()) return Number.MAX_VALUE;
            let i = 1e3 * (e.GetEndTime() - e.GetStartTime()),
              n = V(t),
              s = I(e, n, i);
            return Math.ceil(s / n) + t.segmentTemplate.nStartNumber - 1;
          })(this.m_mpd, this.m_representation);
        }
        GetBufferedStart() {
          return this.m_sourceBuffer.GetBufferedStartSec();
        }
        GetBufferedEnd() {
          let e = this.m_rgBufferedSegments.length;
          if (0 == e) return 0;
          let t = this.m_rgBufferedSegments[e - 1];
          return t.nStartPTS + t.nDurationMS / 1e3;
        }
        GetAmountBufferedMS(e) {
          let t = this.m_sourceBuffer.GetAmountBufferedInPlayerMS(e);
          for (let i of this.m_rgBufferedSegments)
            !i.data || i.nStartPTS < e || (t += i.nDurationMS);
          return t;
        }
        IsSegmentBuffered(e) {
          return (
            this.m_rgBufferedSegments.findIndex((t) => t.nSegmentIndex == e) >=
            0
          );
        }
        ChangeRepresentation(e, t) {
          if (!(this.m_adaptation.rgRepresentations.indexOf(e) < 0)) {
            if (this.m_representation != e) {
              if (this.ContainsVideo()) {
                let t = e.nHeight || 0,
                  i = Math.ceil(e.nBandwidth / 1e3);
                (0, g.q_)(
                  `${this.GetDebugName()} changing representation to ${t}p at ${i}KB for segment ${this.m_nNextSegment}`,
                );
              }
              (this.m_representation = e),
                this.m_stats.SetRepresentation(e),
                this.CreateSourceBuffferIfNeeded(e);
            }
            t && this.UpgradeBufferedVideo();
          }
        }
        CreateSourceBuffferIfNeeded(e) {
          if (this.m_sourceBuffer.HasAttachedBuffer()) return;
          const t = e.strMimeType + ";codecs=" + e.strCodecs;
          try {
            let e = this.m_mediaSource.addSourceBuffer(t);
            this.m_sourceBuffer.Attach(e),
              (0, g.q_)(t),
              this.m_listeners.AddEventListener(
                e,
                "updateend",
                this.OnSourceBufferUpdateEnd,
              ),
              this.m_listeners.AddEventListener(
                e,
                "error",
                this.OnSourceBufferError,
              ),
              this.m_listeners.AddEventListener(
                e,
                "abort",
                this.OnSourceBufferAbort,
              );
          } catch (e) {
            if (!(e instanceof DOMException && "NotSupportedError" === e.name))
              throw e;
            this.OnMediaUnsupportedError(t);
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
        OnSourceBufferUpdateEnd(e) {
          let t = this.m_callbacks.GetCurrentPlayTime(),
            i = this.m_sourceBuffer.GetAmountBufferedInPlayerMS(t);
          (0, g.q_)(
            `${this.GetDebugName()} OnSourceBufferUpdateEnd: [playback=${t}][remaining=${i}][start=${this.m_sourceBuffer.GetBufferedStartSec()}][end=${this.m_sourceBuffer.GetBufferedEndSec()}]`,
          );
          let s = this.m_sourceBuffer.GetBufferState();
          this.m_sourceBuffer.BufferUpdateComplete(),
            s == n.Append && this.m_callbacks.OnSegmentBuffered(this),
            this.m_bSeekInProgress &&
              s == n.Remove &&
              !this.m_bRemoveBufferState &&
              this.ContinueSeek(),
            this.UpdateBuffer();
        }
        DebugSpewBufferedSegments() {
          let e = this.m_callbacks.GetCurrentPlayTime(),
            t = "[",
            i = k(this.m_mpd, this.m_representation, 1e3 * e);
          for (let e of this.m_rgBufferedSegments)
            (t += e.representation.strID),
              e.nSegmentIndex == i && (t += "|"),
              (t += ",");
          (t += "]"), console.warn(t);
        }
        OnMediaUnsupportedError(e) {
          console.log("OnMediaUnsupportedError", this.GetDebugName(), e),
            this.m_callbacks.OnMediaUnsupportedError(this, e);
        }
        OnSourceBufferError(e) {
          console.log("OnSourceBufferError", this.GetDebugName(), e),
            this.m_callbacks.OnMediaSourceError(this);
        }
        OnSourceBufferAbort(e) {
          console.log("OnSourceBufferAbort", this.GetDebugName(), e);
        }
        ScheduleNextDownload() {
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
          if (!this.m_mapInitSegments.has(this.m_representation.strID))
            return (
              (0, g.q_)(
                `${this.GetDebugName()} ScheduleNextDownload - downloading init segment for ${this.m_representation.strID}`,
              ),
              void this.DownloadInitSegment(this.m_representation)
            );
          let e = (function (e, t, i) {
            if (!e.IsLiveContent()) return 0;
            let n = V(t);
            return (
              (i - t.segmentTemplate.nStartNumber + 1) * n -
              e.GetDurationSinceStarted()
            );
          })(this.m_mpd, this.m_representation, this.m_nNextSegment);
          if (e > 0)
            return (
              (0, g.q_)(
                `${this.GetDebugName()} ScheduleNextDownload - segment in future`,
              ),
              void this.m_schNextDownload.Schedule(e, this.ScheduleNextDownload)
            );
          let t = this.m_callbacks.GetCurrentPlayTime(),
            i = this.m_callbacks.GetPlaybackRate();
          if (this.IsSegmentBuffered(this.m_nNextSegment))
            return (
              (0, g.q_)(
                `${this.GetDebugName()} ScheduleNextDownload - buffered segment upgrade - downloading now`,
              ),
              void this.DownloadNextSegment()
            );
          let n = this.GetAmountBufferedMS(t);
          if ((i > 1 && (n /= i), n < 3e4))
            return (
              (0, g.q_)(
                `${this.GetDebugName()} ScheduleNextDownload - have ${n} buffered, desire 30000 - downloading now`,
              ),
              void this.DownloadNextSegment()
            );
          let s = 1.1 * V(this.m_representation),
            r = this.m_sourceBuffer.GetAmountBufferedInPlayerMS(
              this.m_callbacks.GetCurrentPlayTime(),
            );
          (0, g.q_)(
            `${this.GetDebugName()} ScheduleNextDownload - buffered, schedule later [sleep=${s}ms][buffer=${r}]`,
          ),
            this.m_schNextDownload.Schedule(s, this.ScheduleNextDownload);
        }
        DownloadInitSegment(e) {
          this.m_schNextDownload.Cancel();
          let t = F(e);
          this.DownloadSegment(e, -1, t);
        }
        DownloadNextSegment() {
          if ((this.m_schNextDownload.Cancel(), this.m_nNextSegment < 0))
            return void console.error(
              "Attempting to download negative segment:",
              this.m_nNextSegment,
            );
          let e =
            ((t = this.m_representation),
            (i = this.m_nNextSegment),
            M(t.segmentTemplate.strMedia, t.strID, i));
          var t, i;
          this.DownloadSegment(this.m_representation, this.m_nNextSegment, e);
        }
        async DownloadSegment(e, t, i, n = performance.now()) {
          (0, m.wT)(
            null === this.m_xhrDownload,
            "Trying to download another segment while a download is already in flight",
          ),
            this.m_schNextDownload.Cancel();
          const s = this.m_callbacks.GetCDNAuthURLParameter();
          s && (i += s), (0, g.q_)(`${this.GetDebugName()} Downloading: ` + i);
          let r,
            a = null,
            d = performance.now(),
            l = o().CancelToken.source();
          try {
            (this.m_nCurDownloadProgress = 0), (this.m_xhrDownload = l);
            let e = {
              cancelToken: this.m_xhrDownload.token,
              timeout: 15e3,
              responseType: "arraybuffer",
              onDownloadProgress: (e) => {
                (this.m_nCurDownloadProgress = e.loaded / e.total),
                  (this.m_nCurDownloadBitrate =
                    (8 * e.loaded * 1e3) / Math.max(1, performance.now() - d));
              },
            };
            a = await o().get(i, e);
          } catch (e) {
            (r = e), (a = e.response);
          }
          if (!this.m_xhrDownload || this.m_xhrDownload != l)
            return void (0, g.q_)(`Throwing away cancelled download: ${i}`);
          r &&
            (0, g.q_)(
              `${this.GetDebugName()} Failed to download segment: ${i}`,
              r,
            );
          let h = performance.now(),
            u = Math.floor(performance.now() - d),
            _ = a ? a.status : 0;
          if (((this.m_xhrDownload = null), this.m_bSeekInProgress))
            return (
              (0, g.q_)(
                `${this.GetDebugName()} Throwing away download due to seek: ${i}`,
              ),
              void this.ContinueSeek()
            );
          if (!a || 200 != a.status) {
            this.m_stats.LogSegmentDownloadFailure(u, a ? a.status : 444);
            let s = 500;
            if (h - n > 9e3) {
              if (this.m_callbacks.GetTimeoutAfterFailedDownload())
                return (
                  (0, g.q_)(
                    `${this.GetDebugName()} HTTP download failed.. stopping loader: ${h - n}ms`,
                  ),
                  void this.DownloadFailed()
                );
              s = 3e3;
            }
            return 410 == _
              ? ((this.m_nNumConsecutiveDownloadGones += 1),
                (0, g.q_)(
                  `${this.GetDebugName()} HTTP download gone.. informing the player: ${h - n}ms`,
                ),
                void this.DownloadGone())
              : void this.m_schNextDownload.Schedule(s, () =>
                  this.DownloadSegment(e, t, i, n),
                );
          }
          this.m_nNumConsecutiveDownloadGones = 0;
          let p = new Uint8Array(a.data);
          if (-1 == t) this.m_mapInitSegments.set(e.strID, p);
          else {
            let i = this.m_rgBufferedSegments.find((e) => e.nSegmentIndex == t);
            if (!this.BAdvanceNextSegment(t, i))
              return (
                (0, g.q_)(
                  `${this.GetDebugName()} Downloaded unexpected segment compared to buffers.. stopping playback`,
                ),
                void this.DownloadFailed()
              );
            if (i) (i.representation = e), (i.data = p);
            else {
              let i = L(e, t),
                n = this.m_mpd.GetEndTime(),
                s = V(e);
              (s = Math.min(1e3 * (n - i), s)),
                this.m_rgBufferedSegments.push({
                  representation: e,
                  nSegmentIndex: t,
                  nStartPTS: i,
                  nDurationMS: s,
                  data: p,
                });
            }
            this.LogDownload(d, p.length),
              this.UpdateBuffer(),
              this.m_callbacks.OnSegmentDownloaded(this);
          }
          (0, g.q_)(`HTTP ${_} (${u}ms, ${Math.floor(p.length / 1e3)}k): ${i}`),
            this.ScheduleNextDownload();
        }
        BAdvanceNextSegment(e, t) {
          let i = this.m_rgBufferedSegments.length;
          if (0 == i && t) return !1;
          if (
            !t &&
            i > 0 &&
            this.m_rgBufferedSegments[i - 1].nSegmentIndex != e - 1
          )
            return !1;
          if (!t) return (this.m_nNextSegment = e + 1), !0;
          let n = this.m_rgBufferedSegments.find(
            (t) => t.nSegmentIndex > e && this.BCanUpgradeBufferedSegment(t),
          );
          return n
            ? ((this.m_nNextSegment = n.nSegmentIndex), !0)
            : ((this.m_nNextSegment =
                this.m_rgBufferedSegments[i - 1].nSegmentIndex + 1),
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
          if (this.m_sourceBuffer.GetBufferState() != n.None) return;
          if (this.m_bRemoveBufferState) return void this.RemoveAllBuffers();
          if (!this.m_sourceBuffer.HasAttachedBuffer())
            return void (0, g.q_)("No source buffer?");
          let e = this.m_callbacks.GetCurrentPlayTime(),
            t = this.m_sourceBuffer.GetAmountBufferedInPlayerMS(e) / 1e3,
            i = k(this.m_mpd, this.m_representation, 1e3 * e),
            s = this.m_rgBufferedSegments.find(
              (e) => e.data && e.nSegmentIndex >= i,
            ),
            r = s && (t < 6 || s.nStartPTS - e < 6);
          if (!this.m_bSourceBufferQuotaExceeded && r) {
            let e = s.data,
              t = s.representation.strID;
            if (this.m_strLastFedInitSegmentRep != t) {
              let i = this.m_mapInitSegments.get(t);
              if (!i)
                return (
                  (0, g.ZI)(
                    `${this.GetDebugName()} Missing init segment for representation=${t}`,
                  ),
                  void this.m_callbacks.OnMediaSourceError(this)
                );
              (e = i), (s = null);
            }
            let i = this.m_sourceBuffer.AppendBuffer(e);
            if (
              ((this.m_bSourceBufferQuotaExceeded =
                (o = i) && "QuotaExceededError" == o.name),
              i && !this.m_bSourceBufferQuotaExceeded)
            )
              return void (0, g.q_)(
                `${this.GetDebugName()} MSE Buffer - Exception`,
                i,
              );
            if (!i)
              return void (s
                ? (s.data = null)
                : (this.m_strLastFedInitSegmentRep = t));
          }
          var o;
          let a = this.m_bSourceBufferQuotaExceeded ? 1 : 10,
            d = this.m_sourceBuffer.GetBufferedStartSec();
          if (this.m_sourceBuffer.GetBufferedEndSec() - d && e - d >= a) {
            let t = k(this.m_mpd, this.m_representation, 1e3 * (e - a)),
              i = L(this.m_representation, t) - 0.01;
            if (i > d)
              return (
                this.m_sourceBuffer.Remove(0, i),
                (this.m_rgBufferedSegments = this.m_rgBufferedSegments.filter(
                  (e) => e.nSegmentIndex >= t,
                )),
                (this.m_bSourceBufferQuotaExceeded = !1),
                void (0, g.q_)(
                  `${this.GetDebugName()} Trim MSE buffer before ${i} (segment=${t})`,
                )
              );
          }
        }
        RemoveAllBuffers() {
          (this.m_bRemoveBufferState = !1),
            (this.m_bSourceBufferQuotaExceeded = !1);
          let e = !1;
          this.m_sourceBuffer.HasAttachedBuffer() &&
            (e = this.m_sourceBuffer.RemoveAll()),
            this.m_sourceBuffer.MarkAsRemoving(),
            e || this.OnSourceBufferUpdateEnd(null);
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
          let t = this.m_sourceBuffer.GetBufferedStartSec(),
            i = this.m_sourceBuffer.GetBufferedEndSec(),
            n = e >= t && e < i;
          if (
            (0 == t && 0 == i && (n = !1),
            (0, g.q_)(
              `${this.GetDebugName()} making an ${n ? "source buffer" : "out of source buffer"} seek to ${e}`,
            ),
            !this.m_bSeekInProgress && n)
          )
            return void this.ScheduleNextDownload();
          let s = k(this.m_mpd, this.m_representation, 1e3 * e),
            r = this.m_rgBufferedSegments.findIndex(
              (e) => e.data && e.nSegmentIndex == s,
            );
          if (r >= 0)
            (this.m_rgBufferedSegments = this.m_rgBufferedSegments.slice(r)),
              (0, g.q_)(
                "Partially buffered seek To Next Segment: " +
                  this.m_nNextSegment +
                  " at approx. " +
                  (0, g.ap)(
                    ((this.m_nNextSegment - 1) *
                      this.GetCurrentSegmentDurationMS()) /
                      1e3,
                  ) +
                  " seconds.",
              );
          else {
            this.ForceStopDownloads(), (this.m_rgBufferedSegments = []);
            let t = k(this.m_mpd, this.m_representation, 1e3 * e);
            (this.m_nNextSegment = Math.min(t, this.GetMaxSegment())),
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
              );
          }
          (this.m_bSeekInProgress = !0),
            (this.m_bRemoveBufferState = !0),
            this.UpdateBuffer();
        }
        ContinueSeek() {
          this.m_bSeekInProgress &&
            (this.m_sourceBuffer.GetBufferState() == n.Remove ||
              this.m_bRemoveBufferState ||
              ((this.m_bSeekInProgress = !1), this.ScheduleNextDownload()));
        }
        UpgradeBufferedVideo() {
          let e = V(this.m_representation),
            t = 1e3 * this.m_callbacks.GetCurrentPlayTime(),
            i = k(this.m_mpd, this.m_representation, t + e),
            n = this.m_rgBufferedSegments.find(
              (e) => e.nSegmentIndex >= i && this.BCanUpgradeBufferedSegment(e),
            );
          n &&
            this.m_nNextSegment != n.nSegmentIndex &&
            ((0, g.q_)(
              `Upgrading buffered segment ${n.nSegmentIndex} from rep ${n.representation.strID} to ${this.m_representation.strID}`,
            ),
            this.ForceStopDownloads(),
            (this.m_nNextSegment = n.nSegmentIndex),
            this.ScheduleNextDownload());
        }
        BCanUpgradeBufferedSegment(e) {
          let t = this.m_representation.nHeight;
          return e.representation.nHeight < t;
        }
        BHasEnoughBuffered(e) {
          if (this.m_bSeekInProgress) return !1;
          if (
            !this.m_xhrDownload &&
            !this.m_schNextDownload.IsScheduled() &&
            this.m_nNextSegment > this.GetMaxSegment()
          )
            return !0;
          let t = this.m_sourceBuffer.GetAmountBufferedInPlayerMS(e);
          if (t > this.m_nTrackBufferMS) return !0;
          let i = this.GetAmountBufferedMS(e);
          return t >= 6e3 && i >= this.m_nTrackBufferMS;
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
        GetAvgDownloadRateSampleCount() {
          return this.m_rgDownloadLog.length;
        }
      }
      (0, s.Cg)([_.o], U.prototype, "OnSourceBufferUpdateEnd", null),
        (0, s.Cg)([_.o], U.prototype, "OnMediaUnsupportedError", null),
        (0, s.Cg)([_.o], U.prototype, "OnSourceBufferError", null),
        (0, s.Cg)([_.o], U.prototype, "OnSourceBufferAbort", null),
        (0, s.Cg)([_.o], U.prototype, "ScheduleNextDownload", null),
        (0, s.Cg)([_.o], U.prototype, "DownloadInitSegment", null),
        (0, s.Cg)([_.o], U.prototype, "DownloadNextSegment", null),
        (0, s.Cg)([_.o], U.prototype, "DownloadFailed", null),
        (0, s.Cg)([_.o], U.prototype, "DownloadGone", null),
        (0, s.Cg)([_.o], U.prototype, "CurrentTimeChanged", null);
      var O = i(84933);
      const N = 5,
        H = "auto";
      var q, $, W, z;
      !(function (e) {
        (e[(e.HAVE_NOTHING = 0)] = "HAVE_NOTHING"),
          (e[(e.HAVE_METADATA = 1)] = "HAVE_METADATA"),
          (e[(e.HAVE_CURRENT_DATA = 2)] = "HAVE_CURRENT_DATA"),
          (e[(e.HAVE_FUTURE_DATA = 3)] = "HAVE_FUTURE_DATA"),
          (e[(e.HAVE_ENOUGH_DATA = 4)] = "HAVE_ENOUGH_DATA");
      })(q || (q = {})),
        (function (e) {
          (e[(e.Invalid = 0)] = "Invalid"),
            (e[(e.StreamGone = 1)] = "StreamGone"),
            (e[(e.PlaybackError = 2)] = "PlaybackError"),
            (e[(e.UnsupportedMediaType = 3)] = "UnsupportedMediaType");
        })($ || ($ = {})),
        (function (e) {
          (e[(e.Absolute = 0)] = "Absolute"),
            (e[(e.FromAvailableStart = 1)] = "FromAvailableStart");
        })(W || (W = {})),
        (function (e) {
          (e[(e.Invalid = 0)] = "Invalid"),
            (e[(e.Success = 1)] = "Success"),
            (e[(e.Timeout = 2)] = "Timeout"),
            (e[(e.Gone = 3)] = "Gone"),
            (e[(e.PlayerClosing = 4)] = "PlayerClosing");
        })(z || (z = {}));
      class Q {
        m_elVideo = null;
        m_strMPD = "";
        m_strHLS = "";
        m_strCDNAuthURLParameters = null;
        m_bTimeoutAfterFailedDownload = !0;
        m_bAlwaysStartWithSubtitles = !1;
        m_bMuteOnAutoplayBlocked = !1;
        m_schUpdateMPD = new l.LU();
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
        m_listeners = new l.Ji();
        m_resizeObserver = null;
        m_schPlayerResizeDelay = new l.LU();
        m_nPlayerHeightForAuto = 0;
        m_bFirstPlay = !0;
        m_bPlaybackStarted = !1;
        m_bPlaybackEnded = !1;
        m_nLastPlaytimeLoaders = 0;
        m_nTimedText = 0;
        m_schReportPlayerTrigger = new l.LU();
        m_bStatsViewVisible = !1;
        m_schCaptureDisplayStatsTrigger = new l.LU();
        m_videoRepSelected = null;
        m_timedTextRepSelected = null;
        m_stats = new S._L();
        m_bClosing = !1;
        m_hlsTimeOffset = 0;
        m_bUserPlayChoice = !0;
        m_bUserLiveEdgeChoice = !0;
        m_schFirstFrameThrottler = new l.LU();
        m_bookMarkAdapter = null;
        m_schBookmarkUpdater = new l.LU();
        m_watchedIntervals = new J();
        constructor(e) {
          (0, a.Gn)(this),
            (this.m_elVideo = e),
            this.m_schReportPlayerTrigger.Schedule(3e4, this.ReportPlayerStats);
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
        GetHLSURL() {
          return this.m_strHLS;
        }
        IsPlayingHLS() {
          return this.m_bUseHLSManifest;
        }
        SetTimeoutAfterFailedDownload(e) {
          this.m_bTimeoutAfterFailedDownload = e;
        }
        SetAlwaysStartWithSubtitles(e) {
          this.m_bAlwaysStartWithSubtitles = e;
        }
        SetMuteOnAutoplayBlocked(e) {
          this.m_bMuteOnAutoplayBlocked = e;
        }
        async PlayMPD(e, t, i) {
          (e = Array.isArray(e) ? e : [e]),
            this.m_stats.StartingPlayback(),
            (this.m_strCDNAuthURLParameters = i);
          let n = null;
          for (let t of e) {
            let [e, s] = await this.DownloadMPD(t, i);
            if (!s) {
              let t =
                e == z.Gone
                  ? "Failed to download MPD: 410 Gone"
                  : "Timed out downloading MPD";
              return void this.CloseWithError($.PlaybackError, t);
            }
            let r = new E();
            if (!r.BParse(s.data, t))
              return void this.CloseWithError(
                $.PlaybackError,
                "Failed to parse MPD file",
                this.m_strMPD,
              );
            let o = j(r),
              a = Z(o);
            if (
              ((n = {
                strMPD: t,
                mpd: r,
                strServerTime: s.headers.date,
                strCanPlay: o,
                bCanPlay: a,
              }),
              a)
            )
              break;
          }
          if (n) {
            if (
              ((this.m_strMPD = n.strMPD), (this.m_mpd = n.mpd), !n.bCanPlay)
            ) {
              if (
                !t ||
                !(function (e) {
                  let t = e.canPlayType(
                    'application/vnd.apple.mpegurl;codecs="avc1.64001f, mp4a.40.02"',
                  );
                  return "probably" === t || "maybe" === t;
                })(this.m_elVideo)
              )
                return void this.OnMediaUnsupportedError(null, n.strCanPlay);
              (this.m_strHLS = t), (this.m_bUseHLSManifest = !0);
            }
            if (
              (this.DispatchEvent("valve-metadatachanged"),
              this.IsLiveContent() &&
                (this.m_mpd.GetMinimumUpdatePeriod() > 0 &&
                  this.m_schUpdateMPD.Schedule(
                    1e3 * this.m_mpd.GetMinimumUpdatePeriod(),
                    this.UpdateMPD,
                  ),
                this.CalcVideoStartRelativeToSystemClock(n.strServerTime)),
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
                  $.PlaybackError,
                  "Failed to create segment loaders",
                );
          } else this.CloseWithError($.PlaybackError, "Invalid manifest");
        }
        InitTimedText() {
          (this.m_nTimedText = 0),
            this.m_mpd.GetTimedTextAdaptionSet(0).forEach((e) => {
              let t = (0, d.sf)(f.TS.LANGUAGE);
              if (
                e.rgRepresentations.length > 0 &&
                e.rgRepresentations[0].strClosedCaptionFile &&
                e.strLanguage in h.bi
              ) {
                const i = document.createElement("track");
                (i.kind = "subtitles"),
                  (i.label = (0, h.we)(
                    "#Language_" + (0, d.Lg)(h.bi[e.strLanguage]),
                  )),
                  (i.srclang = e.strLanguage),
                  (i.src = e.rgRepresentations[0].strClosedCaptionFile),
                  (this.m_nTimedText += 1),
                  (!this.m_bAlwaysStartWithSubtitles && 0 == t) ||
                    h.bi[e.strLanguage] != t ||
                    ((i.default = !0),
                    (this.m_timedTextRepSelected = e.rgRepresentations[0])),
                  this.m_elVideo.appendChild(i);
              }
            });
        }
        SetSubtitles(e) {
          let t = null;
          for (let i = 0; i < this.m_elVideo.textTracks.length; i++) {
            const n = this.m_elVideo.textTracks[i];
            if (h.bi[n.language] == e) {
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
          for (let e of this.m_rgLoaders) e.Close();
          (this.m_rgLoaders = []), (this.m_bIsBuffering = !0);
        }
        IsBuffering() {
          return this.m_bIsBuffering;
        }
        IsLiveContent() {
          return !!this.m_mpd && this.m_mpd.IsLiveContent();
        }
        async DownloadMPD(e, t) {
          if (((t = t || ""), this.m_xhrUpdateMPD))
            return (
              (0, m.wT)(!1, "Multiple MPD download requests"), [z.Timeout, null]
            );
          let i = performance.now();
          for (; performance.now() - i < 3e4; ) {
            let i = null;
            try {
              this.m_xhrUpdateMPD = o().CancelToken.source();
              const n = e + t;
              i = await o().get(n, { cancelToken: this.m_xhrUpdateMPD.token });
            } catch (e) {}
            if (((this.m_xhrUpdateMPD = null), this.m_bClosing))
              return [z.PlayerClosing, null];
            if (i && 200 == i.status) return [z.Success, i];
            if (i && 410 == i.status) return [z.Gone, null];
            (0, g.q_)("Failed to download, will retry: " + this.m_strMPD),
              await (0, p.IP)(200);
          }
          return (
            (0, g.q_)("Failed to download: " + this.m_strMPD), [z.Timeout, null]
          );
        }
        async UpdateMPD() {
          (0, g.q_)("Updating MPD in player from: " + this.m_strMPD);
          let [e, t] = await this.DownloadMPD(
            this.m_strMPD,
            this.m_strCDNAuthURLParameters,
          );
          t
            ? this.m_mpd.BUpdate(t.data)
              ? (this.IsLiveContent() &&
                  this.CalcVideoStartRelativeToSystemClock(t.headers.date),
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
                  $.PlaybackError,
                  "Failed to parse on Update the MPD file",
                )
            : e == z.Gone &&
              this.CloseWithError(
                $.PlaybackError,
                "Failed to download MPD: 410 Gone",
              );
        }
        CloseWithError(e, ...t) {
          this.DispatchEvent("valve-downloadfailed", e),
            this.Close(),
            (0, g.q_)(...t);
        }
        BCreateLoaders() {
          let e = this.m_mpd.GetPeriods();
          if (0 == e.length) return !1;
          let t = e[0];
          (this.m_strVideoAdaptationID = ""),
            (this.m_strAudioAdaptationID = "");
          for (let e of t.rgAdaptationSets) {
            let t = null;
            if (
              (!this.m_strVideoAdaptationID &&
                e.bContainsVideo &&
                G(e) &&
                ((t = e), (this.m_strVideoAdaptationID = e.strID)),
              !this.m_strAudioAdaptationID &&
                e.bContainsAudio &&
                G(e) &&
                ((t = e), (this.m_strAudioAdaptationID = e.strID)),
              t)
            ) {
              let e = new U(this, this.m_mpd, t, this.m_stats);
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
            (this.m_resizeObserver = (0, O.Fd)(
              this.m_elVideo,
              this.OnPlayerResize,
            ));
        }
        OnPlayerResize(e, t) {
          this.m_schPlayerResizeDelay.Cancel(),
            this.m_schPlayerResizeDelay.Schedule(250, () => {
              this.GetVideoPlayerHeight() != this.m_nPlayerHeightForAuto &&
                ((this.m_nPlayerHeightForAuto = this.GetVideoPlayerHeight()),
                this.UpdateVideoRepresentation(!0));
            });
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
              (this.m_bIsBuffering = !0),
              this.DispatchEvent("valve-bufferupdate"),
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
                  (t.ChangeRepresentation(i, !1),
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
            } else {
              let e = this.m_videoRepSelected;
              (0, g.q_)(
                `OnVideoWaiting - Stalled, user explicitly chose a resolution: ${e.nWidth}x${e.nHeight}@${e.nFrameRate}`,
              );
            }
          }
        }
        OnVideoPause(e) {
          this.m_bUseHLSManifest ||
            (this.OnVideoBufferProgress(),
            this.m_stats.GetFPSMonitor().Close(),
            this.SendUpdateToBookmarkServiceIfNeeded()),
            this.m_watchedIntervals.OnPause(this.m_elVideo);
        }
        OnVideoResize(e) {
          this.m_stats.GetFPSMonitor().SetWindowResized();
        }
        OnVideoError(e) {
          (0, g.q_)("OnVideoError");
        }
        OnVideoCanPlay(e) {
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
              this.m_seekingToTime.eSeekType == W.FromAvailableStart
            )
              return 0;
            let e =
              this.m_seekingToTime.eSeekType == W.FromAvailableStart
                ? this.GetAvailableVideoStartTime()
                : 0;
            return this.m_seekingToTime.nTime + e;
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
          let e = Number.MAX_SAFE_INTEGER;
          for (let t of this.m_rgLoaders) e = Math.min(t.GetBufferedEnd(), e);
          return e;
        }
        OnVideoTimeUpdate() {
          if (!this?.m_elVideo) return;
          let e = this.m_elVideo.currentTime;
          if (
            e < this.m_nLastPlaytimeLoaders ||
            e - this.m_nLastPlaytimeLoaders > 0.5
          ) {
            for (let e of this.m_rgLoaders) e.CurrentTimeChanged();
            this.m_nLastPlaytimeLoaders = e;
          }
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
            this.GetCurrentPlayTime() - e >= t && this.EndPlayback();
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
              o = r && r.strID ? r.strID : null;
            this.m_bookMarkAdapter.SetBookmark(e >= 0 ? e : 0, i, s, o),
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
            (e = n ? t - n + 10 : 0), (e = u.OQ(e, 0, i));
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
        OnSegmentDownloaded(e) {
          (0, g.q_)(e.GetDebugName() + " OnSegmentDownloaded"),
            this.UpdateVideoRepresentation(!1),
            this.OnVideoBufferProgress(),
            e == this.GetVideoLoader() &&
              this.m_stats.SetCurrentVideoBandwidth(e.GetAvgDownloadRate());
        }
        OnSegmentBuffered(e) {
          this.OnVideoBufferProgress();
        }
        async PlayOnElement() {
          const e = this.m_bFirstPlay;
          let t;
          this.m_bFirstPlay = !1;
          try {
            await this.m_elVideo.play();
          } catch (e) {
            (t = e), (0, g.q_)("Failed to play video", e);
          }
          let i = this.BHasTimedText() || this.m_bMuteOnAutoplayBlocked;
          if (t && "NotAllowedError" == t.name && !this.m_elVideo.muted && i) {
            (0, g.q_)("Trying to play again, this time muted with subtitles"),
              (t = void 0),
              (this.m_elVideo.muted = !0),
              this.SetSubtitles((0, d.sf)(f.TS.LANGUAGE));
            try {
              await this.m_elVideo.play();
            } catch (e) {
              (t = e), (0, g.q_)("Failed to play video when muted", e);
            }
          }
          e &&
            t &&
            "NotAllowedError" == t.name &&
            this.DispatchEvent("valve-userinputneeded");
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
              this.OnSegmentDownloadFailed(e, $.StreamGone));
        }
        OnMediaUnsupportedError(e, t) {
          this.DispatchEvent("valve-downloadfailed", $.UnsupportedMediaType);
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
        SetTrackBufferMS(e) {
          this.m_nTrackBufferMS = e;
          for (let t of this.m_rgLoaders) t.SetBufferMS(e);
        }
        BeginPlayback() {
          if (!this.m_bUseHLSManifest) {
            let e = this.DetermineBestVideoRepresentation();
            for (let t of this.m_rgLoaders)
              if (t.ContainsVideo()) {
                t.ChangeRepresentation(e, !1);
                let i = t.GetCurrentSegmentDurationMS();
                this.m_schFirstFrameThrottler.Schedule(
                  i / 2,
                  this.VerifyFirstSegmentDownloadProgress,
                );
              } else if (t.ContainsAudio()) {
                let e =
                  t.GetAdaptation().rgRepresentations.length > 0
                    ? t.GetAdaptation().rgRepresentations[0]
                    : null;
                t.ChangeRepresentation(e, !1);
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
            this.Seek(e);
        }
        VerifyFirstSegmentDownloadProgress() {
          let e = this.GetVideoLoader();
          if (
            null === this.m_videoRepSelected &&
            e &&
            0 == e.GetDownloadHistory().length &&
            e.GetActiveDownloads() > 0 &&
            e.GetActiveDownloadProgress() < 0.55
          ) {
            let t = this.DetermineBestVideoRepresentation();
            t &&
              !e.BIsCurrentRepresentation(t) &&
              (e.ChangeRepresentation(t, !1),
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
        DetermineBestVideoRepresentation() {
          let e = this.GetVideoLoader(),
            t = this.GetAudioLoader(),
            i = t && t != e ? t.GetEstimatedAudioRate() : 0,
            n =
              e.GetAvgDownloadRateSampleCount() > 0
                ? e.GetAvgDownloadRate()
                : -1,
            s =
              (r = this.m_nPlayerHeightForAuto) < 410
                ? 480
                : r < 600
                  ? 720
                  : r < 910
                    ? 1080
                    : Number.MAX_SAFE_INTEGER;
          var r;
          let o = e.GetRepresentationsCount() - 1,
            a = e.GetAdaptation().rgRepresentations[o];
          for (let t = o - 1; t >= 0; t--) {
            let r = e.GetAdaptation().rgRepresentations[t],
              o = (r.nBandwidth + i) * this.m_elVideo.playbackRate * 1.15;
            if (n > 0 && n < o) {
              (0, g.q_)(
                `Video select: Skipping ${t} due to rate: [avg=${n}][required=${o}]`,
              );
              continue;
            }
            let d = r.nFrameRate || 0;
            if (this.IsLiveContent() && d > 30) {
              let e = this.m_stats.GetFPSMonitor(),
                i = e.BHasCurrentFPS() && Math.ceil(e.GetCurrentFPS()) < 29;
              if (e.BIsDroppingFrames() || i) {
                (0, g.q_)(
                  `Video select: Skipping ${t} due to dropping frames and high FPS representation: [fps:${d}]`,
                );
                continue;
              }
            }
            if (this.m_nLimitFPS > 0 && d > this.m_nLimitFPS) {
              (0, g.q_)(`Video select: Skipping ${t} due to frame rate limit`);
              continue;
            }
            let m = a.nHeight || 0,
              l = r.nHeight || 0;
            if (s > 0 && m > 0 && l > 0 && l > s) {
              (0, g.q_)(
                `Video select: Stopped at ${m} due to player dimensions`,
              );
              break;
            }
            a = r;
          }
          return a;
        }
        UpdateVideoRepresentation(e) {
          if (this.m_videoRepSelected) return;
          let t = this.GetVideoLoader();
          if (!t) return;
          if (this.IsBuffering()) return;
          let i = this.DetermineBestVideoRepresentation();
          t.ChangeRepresentation(i, e);
        }
        GetPlaybackStartTime(e) {
          if (!this.m_seekingToTime) return e;
          (0, m.wT)(
            this.m_bPlaybackStarted,
            "Missing mpd info to calculate seek time",
          );
          let t =
            this.m_seekingToTime.eSeekType == W.FromAvailableStart
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
        Seek(e, t = W.Absolute) {
          if (!this.m_bPlaybackStarted)
            return (this.m_seekingToTime = { nTime: e, eSeekType: t }), e;
          t == W.FromAvailableStart && (e += this.GetAvailableVideoStartTime());
          let i = this.GetAvailableVideoStartTime(),
            n = this.GetBufferedLiveEdgeTime();
          const s = e;
          (e = u.OQ(e, i, n)) != s &&
            (0, g.q_)(`Seek time ${s} was clamped to the range ${i} to ${n}`),
            (this.m_bUserLiveEdgeChoice = e >= n - N);
          let r = this.m_elVideo.paused;
          if ((r || this.m_elVideo.pause(), this.m_bUseHLSManifest))
            (this.m_elVideo.currentTime = e - this.m_hlsTimeOffset),
              this.PlayOnElement(),
              this.DispatchEvent("valve-bufferupdate");
          else {
            (this.m_bIsBuffering = !0),
              (this.m_seekingToTime = { nTime: e, eSeekType: W.Absolute });
            for (let t of this.m_rgLoaders) t.Seek(e);
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
          (e = u.OQ(e, 0, 1)), (this.m_elVideo.volume = e);
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
              id: H,
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
                height: i.nHeight,
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
          if (e && e.id != H) {
            let n = i.GetRepresentationByID(e.id);
            n &&
              ((t = !1),
              (null !== this.m_videoRepSelected &&
                this.m_videoRepSelected.strID == n.strID) ||
                ((this.m_videoRepSelected = n),
                i.ChangeRepresentation(n, !0),
                this.Seek(this.GetCurrentPlayTime()),
                this.m_stats.MarkAtLeastOneUserRepresentation()));
          }
          t && (this.m_videoRepSelected = null);
        }
        GetThumbnail(e) {
          (e += this.GetAvailableVideoStartTime()),
            (e += Math.floor(this.m_mpd.GetThumbnailDurationMS() / 1e3));
          let t = this.GetAvailableVideoStartTime(),
            i = this.GetBufferedLiveEdgeTime();
          return (e = u.OQ(e, t, i)), this.m_mpd.GetThumbnail(1e3 * e);
        }
        BHasTimedText() {
          return this.m_nTimedText > 0;
        }
        GetMaxWidthAndHeight() {
          if (!this.m_mpd) return null;
          let e = this.m_mpd.GetMainVideoAdaption();
          if (!e) return null;
          if (0 == e.rgRepresentations.length) return null;
          let t = e.rgRepresentations[0];
          return { nWidth: t.nWidth, nHeight: t.nHeight };
        }
      }
      function X(e) {
        return e.id == H;
      }
      function j(e) {
        let t = "",
          i = "",
          n = "",
          s = e.GetMainVideoAdaption();
        return (
          s &&
            s.rgRepresentations.length > 0 &&
            ((t = s.rgRepresentations[0].strMimeType),
            (i = s.rgRepresentations[0].strCodecs)),
          (s = e.GetMainAudioAdaption()),
          s &&
            s.rgRepresentations.length > 0 &&
            (n = s.rgRepresentations[0].strCodecs),
          t && i ? (n ? `${t}; codecs="${i}, ${n}` : `${t}; codecs="${i}`) : ""
        );
      }
      function Z(e) {
        let t = !1;
        try {
          t = MediaSource.isTypeSupported(e);
        } catch (e) {}
        return t;
      }
      (0, s.Cg)([a.sH], Q.prototype, "m_nTimedText", void 0),
        (0, s.Cg)([a.XI], Q.prototype, "InitTimedText", null),
        (0, s.Cg)([_.o], Q.prototype, "OnLoadedMetadataForHLS", null),
        (0, s.Cg)([_.o], Q.prototype, "OnVisibilityChangeForHLS", null),
        (0, s.Cg)([_.o], Q.prototype, "OnEndedForHLS", null),
        (0, s.Cg)([_.o], Q.prototype, "UpdateMPD", null),
        (0, s.Cg)([_.o], Q.prototype, "OnPlayerResize", null),
        (0, s.Cg)([_.o], Q.prototype, "OnMediaSourceOpen", null),
        (0, s.Cg)([_.o], Q.prototype, "HandleMediaSourceError", null),
        (0, s.Cg)([_.o], Q.prototype, "OnMediaSourceEnded", null),
        (0, s.Cg)([_.o], Q.prototype, "OnMediaSourceClose", null),
        (0, s.Cg)([_.o], Q.prototype, "OnVideoWaiting", null),
        (0, s.Cg)([_.o], Q.prototype, "OnVideoPause", null),
        (0, s.Cg)([_.o], Q.prototype, "OnVideoResize", null),
        (0, s.Cg)([_.o], Q.prototype, "OnVideoError", null),
        (0, s.Cg)([_.o], Q.prototype, "OnVideoCanPlay", null),
        (0, s.Cg)([_.o], Q.prototype, "OnVideoCanPlayHLS", null),
        (0, s.Cg)([_.o], Q.prototype, "GetCurrentPlayTime", null),
        (0, s.Cg)([_.o], Q.prototype, "GetBufferedEndTime", null),
        (0, s.Cg)([_.o], Q.prototype, "OnVideoTimeUpdate", null),
        (0, s.Cg)(
          [_.o],
          Q.prototype,
          "SendUpdateToBookmarkServiceIfNeeded",
          null,
        ),
        (0, s.Cg)([_.o], Q.prototype, "OnVideoPlay", null),
        (0, s.Cg)([_.o], Q.prototype, "OnVideoSeeking", null),
        (0, s.Cg)([_.o], Q.prototype, "OnVideoSeeked", null),
        (0, s.Cg)([_.o], Q.prototype, "GetPlaybackRate", null),
        (0, s.Cg)([_.o], Q.prototype, "GetTimeoutAfterFailedDownload", null),
        (0, s.Cg)([_.o], Q.prototype, "GetCDNAuthURLParameter", null),
        (0, s.Cg)([_.o], Q.prototype, "OnSegmentDownloaded", null),
        (0, s.Cg)([_.o], Q.prototype, "OnSegmentBuffered", null),
        (0, s.Cg)([_.o], Q.prototype, "PlayOnElement", null),
        (0, s.Cg)([_.o], Q.prototype, "OnSegmentDownloadFailed", null),
        (0, s.Cg)([_.o], Q.prototype, "OnSegmentDownloadGone", null),
        (0, s.Cg)([_.o], Q.prototype, "OnMediaUnsupportedError", null),
        (0, s.Cg)([_.o], Q.prototype, "OnMediaSourceError", null),
        (0, s.Cg)(
          [_.o],
          Q.prototype,
          "VerifyFirstSegmentDownloadProgress",
          null,
        ),
        (0, s.Cg)([_.o], Q.prototype, "ReportPlayerStats", null),
        (0, s.Cg)([a.XI.bound], Q.prototype, "CaptureStatsForDisplay", null);
      class J {
        m_bEnabled = !1;
        m_rgIntervals = [];
        m_nWatchStart = void 0;
        Enable() {
          this.m_bEnabled = !0;
        }
        GetIntervals() {
          return this.m_rgIntervals;
        }
        CloseCurrentInterval(e) {
          this.StopInterval(e);
        }
        Clear() {
          (this.m_bEnabled = !1),
            (this.m_rgIntervals = []),
            (this.m_nWatchStart = void 0);
        }
        OnPlay(e) {
          this.StartInterval(e);
        }
        OnPause(e) {
          this.StopInterval(e);
        }
        OnSeeking(e) {
          this.StopInterval(e);
        }
        OnSeeked(e) {
          e.paused || this.StartInterval(e);
        }
        OnEnded(e) {
          this.StopInterval(e);
        }
        StartInterval(e) {
          this.m_bEnabled &&
            void 0 === this.m_nWatchStart &&
            (this.m_nWatchStart = e.currentTime);
        }
        StopInterval(e) {
          if (!this.m_bEnabled || void 0 === this.m_nWatchStart) return;
          let t = e.currentTime;
          this.MergeInterval([this.m_nWatchStart, t]),
            (this.m_nWatchStart = void 0);
        }
        MergeInterval(e) {
          let t;
          for (
            e[0] = Math.floor(e[0]), e[1] = Math.ceil(e[1]), t = 0;
            t < this.m_rgIntervals.length &&
            !(e[0] <= this.m_rgIntervals[t][1]);
            t++
          );
          let i,
            [n, s] = e;
          for (i = t; i < this.m_rgIntervals.length; i++) {
            let e = this.m_rgIntervals[i];
            if (e[0] > s) break;
            (n = Math.min(n, e[0])), (s = Math.max(s, e[1]));
          }
          let r = i - t;
          this.m_rgIntervals.splice(t, r, [n, s]);
        }
      }
    },
    34374: (e, t, i) => {
      i.d(t, { _L: () => S });
      var n = i(34629),
        s = i(14947),
        r = i(41735),
        o = i.n(r),
        a = i(17720),
        d = i(36064),
        m = i(78327),
        l = i(6144),
        h = i(61859),
        u = i(82227);
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
      class f extends p {
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
      class g extends p {
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
        m_fpsMonitor = new T();
        constructor() {
          (0, s.Gn)(this);
        }
        StartingPlayback() {
          this.m_nPerfTimeCreated = performance.now();
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
            ? (0, d.ap)(this.m_videoBufferedRanges.start(e)) +
                " - " +
                (0, d.ap)(this.m_videoBufferedRanges.end(e))
            : (0, h.we)("#DASHPlayerStats_VideoNoRangeInformation");
        }
        GetBufferedAudioSegmentForDisplay(e) {
          return this.m_audioBufferedRanges &&
            e < this.m_audioBufferedRanges.length
            ? (0, d.ap)(this.m_audioBufferedRanges.start(e)) +
                " - " +
                (0, d.ap)(this.m_audioBufferedRanges.end(e))
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
            (this.m_videoResolution = t);
        }
        SetRepresentation(e) {
          if (e) {
            if (e.nAudioSamplingRate)
              (this.m_audioRate = Math.round(e.nBandwidth / 1e3)),
                (this.m_audioChannel = e.nAudioChannels),
                (this.m_nAudioBandwidth = e.nBandwidth);
            else if (e.nWidth) {
              let t = e.nFrameRate || 0;
              this.SetVideoPlaybackResolution(e.nWidth, e.nHeight, t),
                (this.m_nVideoBandwidth = e.nBandwidth || 0);
            }
            this.m_nBandwidthRequired =
              this.m_nAudioBandwidth + this.m_nVideoBandwidth;
          }
        }
        MarkAtLeastOneUserRepresentation() {
          this.m_bAtLeastOneUserRepresentation = !0;
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
        LogVideoOnCanPlay() {
          -1 === this.m_nTimeToFirstFrameMS &&
            (this.m_nTimeToFirstFrameMS = Math.ceil(
              performance.now() - this.m_nPerfTimeCreated,
            ));
        }
        LogErrorEvent(e, t) {}
        ReportVideoStalled(e, t) {
          if (
            ((this.m_allTimeSnapshot.m_nStallEvents += 1),
            0 == this.m_strStalledLink.length)
          )
            return;
          let i = this.FindBehindSegmentLoader(e, t);
          if (!i)
            return void (0, d.q_)(
              "DASHStats: Did not find any audio or video loaders",
            );
          this.m_rgSnapShots[this.m_rgSnapShots.length - 1].m_nStallEvents += 1;
          let n = new g();
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
            o = null;
          for (let t of e)
            (o = t.ContainsAudio() ? t : o),
              (r = t.ContainsVideo() ? t : o),
              t.BHasEnoughBuffered(s) &&
                ((n = n || t.ContainsAudio()), (i = i || t.ContainsVideo()));
          return (n = n || null == o), !i || (i && n) ? r : o;
        }
        ExtractFrameInfo(e) {
          let t = 0,
            i = 0;
          if (e.getVideoPlaybackQuality)
            try {
              let n = e.getVideoPlaybackQuality();
              (i = n.totalVideoFrames), (t = n.droppedVideoFrames);
            } catch (e) {
              (0, d.q_)(
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
          let n = new f(),
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
        async SendReportToServer(e, t) {
          let i = new URL(t),
            n = new FormData();
          for (let t of Object.keys(e)) n.append(t, e[t]);
          n.append("l", i.searchParams.get("l")),
            n.append("e", i.searchParams.get("e")),
            n.append("h", i.searchParams.get("h")),
            (0, d.q_)("CDASHStats Sending Report to Server", e),
            o()
              .post(t, n)
              .catch((e) => {
                (0, d.q_)("Failed to upload stats: ", e);
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
              ? new a.b(this.m_steamIDBroadcast).GetAccountID()
              : 0),
            (e.useragent = window.navigator.userAgent),
            (e.sessionid = m.TS.SESSIONID),
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
          (0, s.Gn)(this), (this.m_nInitialVideoResolution = e);
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
        bDropReading;
        nTotalDecodedFrames;
        reset(e, t) {
          (this.bDropReading = e), (this.nTotalDecodedFrames = t);
        }
      }
      class T {
        constructor() {
          (0, s.Gn)(this);
        }
        k_nTestFrequencyMS = 1e3;
        k_nSlidingWindow = 6;
        k_nDroppedFramesThreshold = 1;
        k_nFailThreshold = 3;
        k_nIgnoreReadingAroundResizeMS = 2e3;
        m_schTracker = new l.LU();
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
      (0, n.Cg)([s.sH], T.prototype, "m_bDroppingFrameDetected", void 0),
        (0, n.Cg)([s.sH], T.prototype, "m_nCurrentFPS", void 0),
        (0, n.Cg)([s.XI.bound], T.prototype, "TakeReading", null);
    },
  },
]);
