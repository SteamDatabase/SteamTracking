/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5329],
  {
    56330: (e) => {
      e.exports = {
        ErrorStyles: "_2Sg7W8jsvFcXVuQ7fbhSLJ",
        ErrorStylesWithIcon: "Lc2PK-Vkkvr2TUS0TfCqq",
        ErrorIconLayout: "_42__6kBR5lkICeFfkFnwz",
        ErrorStylesBackground: "_3fVv6M5HyJXcQ6kNF1SvoH",
        ErrorFloatBelow: "_2aKylEXoZKcXuXfFcmcuQc",
        WarningStyles: "_3gxgE6PMPecWZDBSlGjMX_",
        WarningStylesWithIcon: "_1S_uSkD_E5ayHa48JzzE0E",
        WarningIconLayout: "_2jM80ZtA-oI5okavBZZqnF",
        WarningStylesBackground: "UYrHsewdjj7dSkpWGgikw",
        Stuck: "_2b5wWgFg1yvry3TDzRUfFt",
        WarningFloatBelow: "_3e0cNuLANduciMmeZz1dnk",
        InfoStyles: "_2lreMbIjEILzP1Eomy1QZM",
        InfoStylesWithIcon: "_1_-PibdcIVQzDZEP0_PeLV",
        InfoIconLayout: "_3kyPzolDIjhIh7zW0wA6fy",
        InfoStylesBackground: "_3gNTI5UYknHdJwDfou9Iih",
        Padding: "_36hmaGtzxNb1Pql2UhfM5Z",
        NotTooWideModal: "UfQcb76CCbHawnpQ9tbu3",
        ImageManageDialog: "Pl7AIUjh5siFakQJbPFO9",
        SuccessErrorDialog: "_1wBO1L1tT0f1wtl3CpBWbn",
      };
    },
    91929: (e) => {
      e.exports = {
        defaultColor: "#aaa",
        blueish: "#64badc",
        Dummy: "_3d7vgH8CvMxmw3Gsrcn-Wr",
        RecordingIconContainer: "_2aEWndjrPefz-3pWqIYij7",
        Outer: "_1Zy09xDt2xoxeYHQMAYtYl",
        Inner: "B70ft0fskXDtxOVqwbNFW",
      };
    },
    36064: (e, t, i) => {
      "use strict";
      i.d(t, {
        Mc: () => a,
        ZI: () => s,
        aM: () => l,
        ap: () => o,
        q_: () => r,
      });
      const n = new (i(60778).wd)("video"),
        r = (n.Info, n.Debug),
        s = n.Error;
      n.Warning;
      function o(e) {
        let t = Math.floor(e / 3600),
          i = Math.floor(e / 60) % 60,
          n = Math.floor(e) % 60,
          r = n.toString();
        n < 10 && (r = "0" + r);
        let s = i.toString();
        return (
          i < 10 && t > 0 && (s = "0" + s), (t > 0 ? t + ":" : "") + s + ":" + r
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
      function l() {
        let e = document
          .createElement("video")
          .canPlayType(
            'application/vnd.apple.mpegurl;codecs="avc1.64001f,mp4a.40.02"',
          );
        return "probably" === e || "maybe" === e;
      }
    },
    48333: (e, t, i) => {
      "use strict";
      i.d(t, {
        Zn: () => z,
        N_: () => q,
        lU: () => W,
        n_: () => Q,
        Br: () => O,
      });
      var n,
        r = i(34629),
        s = i(41735),
        o = i.n(s),
        a = i(14947),
        l = i(22837),
        m = i(81393),
        d = i(6144),
        h = i(61859),
        u = i(25489),
        f = i(6419),
        g = i(14771),
        _ = i(78327),
        c = i(36064),
        C = i(34374),
        p = i(61336);
      function S(e, t) {
        let i = e.getElementsByTagName("MPD");
        return i && 1 == i.length ? i[0] : null;
      }
      function w(e, t) {
        for (let i = 0; i < e.children.length; i++) {
          let n = e.children[i];
          if (n.tagName == t) return n;
        }
        return null;
      }
      function L(e, t) {
        let i = e.getAttribute(t);
        if (!i) return null;
        let n = new Date(i);
        return "[object Date]" === Object.prototype.toString.call(n) ? n : null;
      }
      function v(e, t) {
        let i = e.getAttribute(t);
        if (!i) return null;
        let n = 0,
          r = i.match(/(\d*)H/);
        return (
          r && (n += 60 * parseFloat(r[1]) * 60),
          (r = i.match(/(\d*)M/)),
          r && (n += 60 * parseFloat(r[1])),
          (r = i.match(/(\d*\.?\d*)S/)),
          r && (n += parseFloat(r[1])),
          n
        );
      }
      function D(e, t) {
        let i = e.getAttribute(t);
        return i
          ? ((i = i.toLowerCase()), "true" == i || ("false" != i && null))
          : null;
      }
      function T(e, t) {
        let i = e.getAttribute(t);
        return i ? parseInt(i) : null;
      }
      function M(e, t) {
        let i = e.getAttribute(t);
        return i || "";
      }
      function B(e, t, i) {
        let n = {
          nTimeScale: T(e, "timescale"),
          nDuration: T(e, "duration"),
          nStartNumber: T(e, "startNumber"),
          strMedia: M(e, "media"),
          strInitialization: M(e, "initialization"),
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
            ? ((n.strMedia = E(n.strMedia, i)),
              (n.strInitialization = E(n.strInitialization, i)),
              n)
            : null
        );
      }
      function y(e, t, i) {
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
      function b(e) {
        return (0, p.DZ)(e);
      }
      function V(e, t) {
        let i = e;
        i.endsWith("/") || (i += "/");
        let n = t.startsWith("/") ? 1 : 0;
        return i + t.substring(n);
      }
      function E(e, t) {
        return e && !b(e) && b(t) ? V(t, e) : e;
      }
      function R(e) {
        return (
          0 == e.rgRoles.length || e.rgRoles.findIndex((e) => "main" == e) >= 0
        );
      }
      function P(e) {
        if (!e) return 0;
        let t = e.segmentTemplate;
        return 1e3 == t.nTimeScale
          ? t.nDuration
          : (t.nDuration / t.nTimeScale) * 1e3;
      }
      function A(e, t, i) {
        i -= 1e3 * e.GetStartTime();
        let n = P(t),
          r = G(e, n, i);
        return Math.floor(r / n) + t.segmentTemplate.nStartNumber;
      }
      function x(e, t) {
        return (t - e.segmentTemplate.nStartNumber) * (P(e) / 1e3);
      }
      function G(e, t, i) {
        return i + ((1e3 * e.GetStartTime()) % t);
      }
      function k(e) {
        return y(e.segmentTemplate.strInitialization, e.strID, 0);
      }
      class I {
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
        GetMainVideoAdaption() {
          let e = this.m_rgPeriods[0];
          for (let t of e.rgAdaptationSets)
            if (R(t) && t.bContainsVideo) return t;
          return null;
        }
        GetMainAudioAdaption() {
          let e = this.m_rgPeriods[0];
          for (let t of e.rgAdaptationSets)
            if (R(t) && t.bContainsAudio) return t;
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
          return P(t) / (t.nTileWidthCount * t.nTileHeightCount);
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
            n = A(this, i, e),
            r = P(i),
            s = r * (n - i.segmentTemplate.nStartNumber),
            o = r / (i.nTileWidthCount * i.nTileHeightCount),
            a = Math.floor((e - s) / o),
            l = Math.floor(a / i.nTileWidthCount),
            m = a % i.nTileWidthCount;
          if (m + 1 > i.nTileHeightCount)
            return (
              (0, c.q_)(
                "Asking for a thumbnail that is off the end of the tile sheet",
              ),
              null
            );
          let d = i.nWidth / i.nTileWidthCount,
            h = i.nHeight / i.nTileHeightCount;
          return {
            strTileURL: y(i.segmentTemplate.strMedia, i.strID, n),
            x: m * d,
            y: l * h,
            nThumbnailWidth: d,
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
        ParseRepresentation(e, t, i, n, r) {
          let s = {
            strID: M(e, "id"),
            strMimeType: M(e, "mimeType"),
            strCodecs: M(e, "codecs"),
            nBandwidth: T(e, "bandwidth"),
            segmentTemplate: null,
          };
          !s.strMimeType && r && (s.strMimeType = r);
          let o = w(e, "SegmentTemplate");
          if (o) {
            let e = B(o, t, n);
            e && (s.segmentTemplate = e);
          } else s.segmentTemplate = { ...i };
          if (!s.segmentTemplate)
            return (
              (0, c.q_)("MPD - No segment template for representation"), null
            );
          if (t.bContainsVideo) {
            if (
              ((s.nWidth = T(e, "width")),
              (s.nHeight = T(e, "height")),
              (s.nFrameRate = T(e, "frameRate")),
              (0, c.q_)(
                `representation: ${s.nWidth}w x ${s.nHeight}h x ${s.nFrameRate} fps`,
              ),
              !(s.strID && s.strMimeType && s.strCodecs && s.nBandwidth))
            )
              return (0, c.q_)("MPD - Representation Video Data Missing"), null;
          } else if (t.bContainsAudio) {
            s.nAudioSamplingRate = T(e, "audioSamplingRate");
            let t = w(e, "AudioChannelConfiguration");
            if (
              (t && (s.nAudioChannels = T(t, "value")),
              s.nAudioChannels || (s.nAudioChannels = 2),
              !(
                s.strID &&
                s.strMimeType &&
                s.strCodecs &&
                s.nAudioSamplingRate &&
                s.nAudioChannels
              ))
            )
              return (0, c.q_)("MPD - Representation Audio Data Missing"), null;
          } else if (t.bContainsThumbnails) {
            if (
              ((a = s.strMimeType),
              !["image/jpeg", "image/jpg", "image/avif", "image/webp"].includes(
                a,
              ))
            )
              return (
                (0, c.q_)(
                  "MPD - Representation Thumbnail MimeType not supported",
                  s.strMimeType,
                ),
                null
              );
            (s.nWidth = T(e, "width")), (s.nHeight = T(e, "height"));
            let t = w(e, "EssentialProperty");
            if (!t)
              return (
                (0, c.q_)(
                  "MPD - Representation Thumbnail missing EssentialProperty",
                ),
                null
              );
            let i = M(t, "schemeIdUri");
            if (!i || "http://dashif.org/guidelines/thumbnail_tile" != i)
              return (
                (0, c.q_)("MPD - Representation Thumbnail has invalid schema"),
                null
              );
            let n = (M(t, "value") || "").split("x");
            if (2 != n.length || !u.TG(n[0]) || !u.TG(n[1]))
              return (
                (0, c.q_)(
                  "MPD - Representation Thumbnail has invalid tile property",
                ),
                null
              );
            (s.nTileWidthCount = parseInt(n[0])),
              (s.nTileHeightCount = parseInt(n[1]));
          }
          var a;
          return s;
        }
        ParseAdaptationSetVTT(e, t) {
          e.rgRoles.push("subtitle");
          let i = t.getElementsByTagName("Role");
          for (let t = 0; t < i.length; t++) {
            let n = M(i[t], "value");
            n && "subtitle" != n && e.rgRoles.push(n);
          }
          let n = t.getElementsByTagName("Representation");
          for (let t = 0; t < n.length; t++) {
            let i = n[t],
              r = {
                strID: M(i, "id"),
                nBandwidth: T(i, "bandwidth"),
                strClosedCaptionFile: "",
              },
              s = w(i, "BaseURL"),
              o = s ? s.textContent : "";
            if (!o) {
              (0, c.q_)(
                "Closed Caption File has no BaseURL for (id): " + r.strID,
              );
              continue;
            }
            (r.strClosedCaptionFile = y(o, r.strID, 0)),
              r.strClosedCaptionFile.startsWith("http") ||
                (r.strClosedCaptionFile =
                  this.m_strBaseURL + r.strClosedCaptionFile);
            const a = (0, _.yK)();
            if ("community" == a) {
              const e = new URL(r.strClosedCaptionFile).pathname.split(
                "/video/",
              )[1];
              r.strClosedCaptionFile = e
                ? _.TS.COMMUNITY_BASE_URL + "vtt/video/" + e
                : null;
            } else if ("store" == a || "dev" == _.TS.WEB_UNIVERSE) {
              const e = new URL(r.strClosedCaptionFile).pathname.split(
                "/video/",
              )[1];
              r.strClosedCaptionFile = e
                ? _.TS.STORE_BASE_URL + "vtt/video/" + e
                : null;
            }
            r.strClosedCaptionFile && e.rgRepresentations.push(r);
          }
        }
        BParse(e, t) {
          let i = new DOMParser().parseFromString(e, "application/xml"),
            n = S(i);
          if (!n) return !1;
          let r = n.getAttribute("type");
          if (
            ((this.m_nMinBufferTime = v(n, "minBufferTime")), "dynamic" == r)
          ) {
            if (
              ((this.m_strType = "dynamic"),
              (this.m_dtAvailabilityStartTime = L(n, "availabilityStartTime")),
              (this.m_dtPublishTime = L(n, "publishTime")),
              (this.m_nMinimumUpdatePeriod = v(n, "minimumUpdatePeriod")),
              (this.m_nTimeShiftBufferDepth =
                v(n, "timeShiftBufferDepth") || 0),
              !this.m_dtAvailabilityStartTime ||
                !this.m_dtPublishTime ||
                !this.m_nMinimumUpdatePeriod ||
                null === this.m_nMinBufferTime)
            )
              return !1;
          } else {
            if ("static" != r) return (0, c.q_)("MPD - Unknown type"), !1;
            if (
              ((this.m_strType = "static"),
              (this.m_nMediaPresentationDuration = v(
                n,
                "mediaPresentationDuration",
              )),
              !this.m_nMinBufferTime || !this.m_nMediaPresentationDuration)
            )
              return (
                (0, c.q_)("MPD - Missing Buffer Time or Presentation Duration"),
                !1
              );
          }
          let s = w(n, "BaseURL");
          this.m_strBaseURL = s
            ? s.textContent
            : (function (e) {
                if (!b(e)) return "";
                let t = new URL(e),
                  i = t.pathname;
                return (
                  (i.indexOf(".mpd") >= 0 || i.endsWith("/")) &&
                    (i = i.substring(0, i.lastIndexOf("/"))),
                  V(t.origin, i) + "/"
                );
              })(t);
          let o = w(n, "Analytics");
          o &&
            ((this.m_strStatsLink = M(o, "statslink")),
            (this.m_strStalledLink = M(o, "stalledlink")),
            (this.m_strEventLogLink = M(o, "eventlink")));
          let a = i.getElementsByTagName("Period");
          if (0 == a.length) return !1;
          let l = a[0],
            m = {
              strID: M(l, "id"),
              nStart: v(l, "start"),
              nDuration: v(l, "duration"),
              rgAdaptationSets: [],
            };
          if (!m.strID || null === m.nStart)
            return (0, c.q_)("MPD - Missing Period Information."), !1;
          (this.m_rgPeriods = []), this.m_rgPeriods.push(m);
          let d = l.getElementsByTagName("AdaptationSet");
          for (let e = 0; e < d.length; e++) {
            let t = d[e],
              i = M(t, "description"),
              n = M(t, "lang"),
              r = {
                bSegmentAlignment: D(t, "segmentAlignment"),
                bIsTimedText: "text/vtt" == M(t, "mimeType"),
                strLanguage: M(t, "lang"),
                bContainsVideo: !1,
                bContainsAudio: !1,
                bContainsThumbnails: !1,
                strDescription: i || n,
                strForceSub: M(t, "forceSub"),
                strID: M(t, "id"),
                rgRoles: [],
                rgRepresentations: [],
              };
            m.rgAdaptationSets.push(r);
            let s = t.getElementsByTagName("ContentComponent");
            for (let e = 0; e < s.length; e++) {
              let t = M(s[e], "contentType");
              "video" == t && (r.bContainsVideo = !0),
                "audio" == t && (r.bContainsAudio = !0),
                "image" == t && (r.bContainsThumbnails = !0);
            }
            if (0 == s.length) {
              let e = M(t, "contentType");
              "video" == e && (r.bContainsVideo = !0),
                "audio" == e && (r.bContainsAudio = !0),
                "image" == e && (r.bContainsThumbnails = !0);
            }
            if (r.bIsTimedText) {
              this.ParseAdaptationSetVTT(r, t);
              continue;
            }
            if (!r.bContainsThumbnails && !r.bSegmentAlignment)
              return (
                (0, c.q_)(
                  "MPD - Only segment aligned dash manifests is supported",
                ),
                !1
              );
            let o = t.getElementsByTagName("Role");
            for (let e = 0; e < o.length; e++) {
              let t = M(o[e], "value");
              t && r.rgRoles.push(t);
            }
            let a = null,
              l = w(t, "SegmentTemplate");
            if (l) {
              let e = B(l, r, this.m_strBaseURL);
              if (!e)
                return (
                  (0, c.q_)("MPD - Failed to parse found Adaptation template"),
                  !1
                );
              a = e;
            }
            let h = M(t, "mimeType"),
              u = t.getElementsByTagName("Representation");
            for (let e = 0; e < u.length; e++) {
              let t = u[e],
                i = this.ParseRepresentation(t, r, a, this.m_strBaseURL, h);
              if (!i) return !1;
              r.rgRepresentations.push(i);
            }
          }
          return !0;
        }
        BUpdate(e) {
          let t = new DOMParser().parseFromString(e, "application/xml"),
            i = S(t);
          if (!i) return !1;
          if (this.IsLiveContent()) {
            switch (M(i, "type")) {
              case "dynamic":
                break;
              case "static":
                (0, c.q_)("Converting MPD from dynamic to static"),
                  (this.m_strType = "static"),
                  (this.m_nMediaPresentationDuration = v(
                    i,
                    "mediaPresentationDuration",
                  )),
                  (this.m_nMinBufferTime = v(i, "minBufferTime")),
                  (this.m_dtAvailabilityStartTime = null),
                  (this.m_dtPublishTime = null);
            }
            let e = t.getElementsByTagName("Period");
            if (0 == e.length) return !1;
            let n = e[0].getElementsByTagName("AdaptationSet");
            for (let e = 0; e < n.length; e++) {
              let t = n[e],
                i = M(t, "id"),
                r = this.GetAdaptationByTrackID(i);
              if (r) {
                let e = null,
                  i = w(t, "SegmentTemplate");
                if (i) {
                  let t = B(i, r, this.m_strBaseURL);
                  if (!t)
                    return (
                      (0, c.q_)(
                        "MPD - Failed to parse found Adaptation template",
                      ),
                      !1
                    );
                  e = t;
                }
                let n = M(t, "mimeType"),
                  s = t.getElementsByTagName("Representation");
                if (s.length > 1)
                  for (let t = 0; t < s.length; t++) {
                    let i = s[t],
                      o = this.ParseRepresentation(
                        i,
                        r,
                        e,
                        this.m_strBaseURL,
                        n,
                      );
                    if (!o)
                      return (
                        (0, c.q_)("MPD - Failed to parse representation"), !1
                      );
                    let a = null;
                    for (let e of r.rgRepresentations)
                      if (o.strID == e.strID) {
                        a = e;
                        break;
                      }
                    a
                      ? (a.segmentTemplate.strMedia =
                          o.segmentTemplate.strMedia)
                      : r.rgRepresentations.push(o);
                  }
                break;
              }
            }
          }
          let n = w(i, "Analytics");
          return (
            n &&
              ((this.m_strStatsLink = M(n, "statslink")),
              (this.m_strStalledLink = M(n, "stalledlink")),
              (this.m_strEventLogLink = M(n, "eventlink"))),
            !0
          );
        }
      }
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Append = 1)] = "Append"),
          (e[(e.Remove = 2)] = "Remove");
      })(n || (n = {}));
      class H {
        constructor() {
          (this.m_eBufferUpdate = n.None), (this.m_sourceBuffer = null);
        }
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
      class F {
        constructor(e, t, i, n) {
          (this.m_callbacks = null),
            (this.m_mpd = null),
            (this.m_adaptation = null),
            (this.m_mediaSource = null),
            (this.m_sourceBuffer = new H()),
            (this.m_nTrackBufferMS = 0),
            (this.m_representation = null),
            (this.m_rgBufferedSegments = []),
            (this.m_mapInitSegments = new Map()),
            (this.m_strLastFedInitSegmentRep = ""),
            (this.m_nNextSegment = 0),
            (this.m_bRemoveBufferState = !1),
            (this.m_bSeekInProgress = !1),
            (this.m_bSourceBufferQuotaExceeded = !1),
            (this.m_schNextDownload = new d.LU()),
            (this.m_xhrDownload = null),
            (this.m_listeners = new d.Ji()),
            (this.m_rgDownloadLog = []),
            (this.m_nCurDownloadProgress = 0),
            (this.m_nCurDownloadBitrate = 0),
            (this.m_nNumConsecutiveDownloadGones = 0),
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
          return P(this.m_representation);
        }
        GetCurrentSegmentInitializationURL() {
          return k(this.m_representation);
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
              n = P(t),
              r = G(e, n, i);
            return Math.ceil(r / n) + t.segmentTemplate.nStartNumber - 1;
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
                (0, c.q_)(
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
              (0, c.q_)(t),
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
          (0, c.q_)(
            `${this.GetDebugName()} OnSourceBufferUpdateEnd: [playback=${t}][remaining=${i}][start=${this.m_sourceBuffer.GetBufferedStartSec()}][end=${this.m_sourceBuffer.GetBufferedEndSec()}]`,
          );
          let r = this.m_sourceBuffer.GetBufferState();
          this.m_sourceBuffer.BufferUpdateComplete(),
            r == n.Append && this.m_callbacks.OnSegmentBuffered(this),
            this.m_bSeekInProgress &&
              r == n.Remove &&
              !this.m_bRemoveBufferState &&
              this.ContinueSeek(),
            this.UpdateBuffer();
        }
        DebugSpewBufferedSegments() {
          let e = this.m_callbacks.GetCurrentPlayTime(),
            t = "[",
            i = A(this.m_mpd, this.m_representation, 1e3 * e);
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
            return void (0, c.q_)(
              `${this.GetDebugName()} ScheduleNextDownload - download already going`,
            );
          if (this.m_bSeekInProgress)
            return void (0, c.q_)(
              `${this.GetDebugName()} ScheduleNextDownload - seeking`,
            );
          if (this.m_nNextSegment > this.GetMaxSegment())
            return void (0, c.q_)(
              `${this.GetDebugName()} ScheduleNextDownload - reached max segment`,
            );
          if (!this.m_mapInitSegments.has(this.m_representation.strID))
            return (
              (0, c.q_)(
                `${this.GetDebugName()} ScheduleNextDownload - downloading init segment for ${this.m_representation.strID}`,
              ),
              void this.DownloadInitSegment(this.m_representation)
            );
          let e = (function (e, t, i) {
            if (!e.IsLiveContent()) return 0;
            let n = P(t);
            return (
              (i - t.segmentTemplate.nStartNumber + 1) * n -
              e.GetDurationSinceStarted()
            );
          })(this.m_mpd, this.m_representation, this.m_nNextSegment);
          if (e > 0)
            return (
              (0, c.q_)(
                `${this.GetDebugName()} ScheduleNextDownload - segment in future`,
              ),
              void this.m_schNextDownload.Schedule(e, this.ScheduleNextDownload)
            );
          let t = this.m_callbacks.GetCurrentPlayTime(),
            i = this.m_callbacks.GetPlaybackRate();
          if (this.IsSegmentBuffered(this.m_nNextSegment))
            return (
              (0, c.q_)(
                `${this.GetDebugName()} ScheduleNextDownload - buffered segment upgrade - downloading now`,
              ),
              void this.DownloadNextSegment()
            );
          let n = this.GetAmountBufferedMS(t);
          if ((i > 1 && (n /= i), n < 3e4))
            return (
              (0, c.q_)(
                `${this.GetDebugName()} ScheduleNextDownload - have ${n} buffered, desire 30000 - downloading now`,
              ),
              void this.DownloadNextSegment()
            );
          let r = 1.1 * P(this.m_representation),
            s = this.m_sourceBuffer.GetAmountBufferedInPlayerMS(
              this.m_callbacks.GetCurrentPlayTime(),
            );
          (0, c.q_)(
            `${this.GetDebugName()} ScheduleNextDownload - buffered, schedule later [sleep=${r}ms][buffer=${s}]`,
          ),
            this.m_schNextDownload.Schedule(r, this.ScheduleNextDownload);
        }
        DownloadInitSegment(e) {
          this.m_schNextDownload.Cancel();
          let t = k(e);
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
            y(t.segmentTemplate.strMedia, t.strID, i));
          var t, i;
          this.DownloadSegment(this.m_representation, this.m_nNextSegment, e);
        }
        async DownloadSegment(e, t, i, n = performance.now()) {
          (0, m.wT)(
            null === this.m_xhrDownload,
            "Trying to download another segment while a download is already in flight",
          ),
            this.m_schNextDownload.Cancel();
          const r = this.m_callbacks.GetCDNAuthURLParameter();
          r && (i += r), (0, c.q_)(`${this.GetDebugName()} Downloading: ` + i);
          let s,
            a = null,
            l = performance.now(),
            d = o().CancelToken.source();
          try {
            (this.m_nCurDownloadProgress = 0), (this.m_xhrDownload = d);
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
            a = await o().get(i, e);
          } catch (e) {
            (s = e), (a = e.response);
          }
          if (!this.m_xhrDownload || this.m_xhrDownload != d)
            return void (0, c.q_)(`Throwing away cancelled download: ${i}`);
          s &&
            (0, c.q_)(
              `${this.GetDebugName()} Failed to download segment: ${i}`,
              s,
            );
          let h = performance.now(),
            u = Math.floor(performance.now() - l),
            f = a ? a.status : 0;
          if (((this.m_xhrDownload = null), this.m_bSeekInProgress))
            return (
              (0, c.q_)(
                `${this.GetDebugName()} Throwing away download due to seek: ${i}`,
              ),
              void this.ContinueSeek()
            );
          if (!a || 200 != a.status) {
            this.m_stats.LogSegmentDownloadFailure(u, a ? a.status : 444);
            let r = 500;
            if (h - n > 9e3) {
              if (this.m_callbacks.GetTimeoutAfterFailedDownload())
                return (
                  (0, c.q_)(
                    `${this.GetDebugName()} HTTP download failed.. stopping loader: ${h - n}ms`,
                  ),
                  void this.DownloadFailed()
                );
              r = 3e3;
            }
            return 410 == f
              ? ((this.m_nNumConsecutiveDownloadGones += 1),
                (0, c.q_)(
                  `${this.GetDebugName()} HTTP download gone.. informing the player: ${h - n}ms`,
                ),
                void this.DownloadGone())
              : void this.m_schNextDownload.Schedule(r, () =>
                  this.DownloadSegment(e, t, i, n),
                );
          }
          this.m_nNumConsecutiveDownloadGones = 0;
          let g = new Uint8Array(a.data);
          if (-1 == t) this.m_mapInitSegments.set(e.strID, g);
          else {
            let i = this.m_rgBufferedSegments.find((e) => e.nSegmentIndex == t);
            if (!this.BAdvanceNextSegment(t, i))
              return (
                (0, c.q_)(
                  `${this.GetDebugName()} Downloaded unexpected segment compared to buffers.. stopping playback`,
                ),
                void this.DownloadFailed()
              );
            if (i) (i.representation = e), (i.data = g);
            else {
              let i = x(e, t),
                n = this.m_mpd.GetEndTime(),
                r = P(e);
              (r = Math.min(1e3 * (n - i), r)),
                this.m_rgBufferedSegments.push({
                  representation: e,
                  nSegmentIndex: t,
                  nStartPTS: i,
                  nDurationMS: r,
                  data: g,
                });
            }
            this.LogDownload(l, g.length),
              this.UpdateBuffer(),
              this.m_callbacks.OnSegmentDownloaded(this);
          }
          (0, c.q_)(`HTTP ${f} (${u}ms, ${Math.floor(g.length / 1e3)}k): ${i}`),
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
            return void (0, c.q_)("No source buffer?");
          let e = this.m_callbacks.GetCurrentPlayTime(),
            t = this.m_sourceBuffer.GetAmountBufferedInPlayerMS(e) / 1e3,
            i = A(this.m_mpd, this.m_representation, 1e3 * e),
            r = this.m_rgBufferedSegments.find(
              (e) => e.data && e.nSegmentIndex >= i,
            ),
            s = r && (t < 6 || r.nStartPTS - e < 6);
          if (!this.m_bSourceBufferQuotaExceeded && s) {
            let e = r.data,
              t = r.representation.strID;
            if (this.m_strLastFedInitSegmentRep != t) {
              let i = this.m_mapInitSegments.get(t);
              if (!i)
                return (
                  (0, c.ZI)(
                    `${this.GetDebugName()} Missing init segment for representation=${t}`,
                  ),
                  void this.m_callbacks.OnMediaSourceError(this)
                );
              (e = i), (r = null);
            }
            let i = this.m_sourceBuffer.AppendBuffer(e);
            if (
              ((this.m_bSourceBufferQuotaExceeded =
                (o = i) && "QuotaExceededError" == o.name),
              i && !this.m_bSourceBufferQuotaExceeded)
            )
              return void (0, c.q_)(
                `${this.GetDebugName()} MSE Buffer - Exception`,
                i,
              );
            if (!i)
              return void (r
                ? (r.data = null)
                : (this.m_strLastFedInitSegmentRep = t));
          }
          var o;
          let a = this.m_bSourceBufferQuotaExceeded ? 1 : 10,
            l = this.m_sourceBuffer.GetBufferedStartSec();
          if (this.m_sourceBuffer.GetBufferedEndSec() - l && e - l >= a) {
            let t = A(this.m_mpd, this.m_representation, 1e3 * (e - a)),
              i = x(this.m_representation, t) - 0.01;
            if (i > l)
              return (
                this.m_sourceBuffer.Remove(0, i),
                (this.m_rgBufferedSegments = this.m_rgBufferedSegments.filter(
                  (e) => e.nSegmentIndex >= t,
                )),
                (this.m_bSourceBufferQuotaExceeded = !1),
                void (0, c.q_)(
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
            (0, c.q_)(
              `${this.GetDebugName()} making an ${n ? "source buffer" : "out of source buffer"} seek to ${e}`,
            ),
            !this.m_bSeekInProgress && n)
          )
            return void this.ScheduleNextDownload();
          let r = A(this.m_mpd, this.m_representation, 1e3 * e),
            s = this.m_rgBufferedSegments.findIndex(
              (e) => e.data && e.nSegmentIndex == r,
            );
          if (s >= 0)
            (this.m_rgBufferedSegments = this.m_rgBufferedSegments.slice(s)),
              (0, c.q_)(
                "Partially buffered seek To Next Segment: " +
                  this.m_nNextSegment +
                  " at approx. " +
                  (0, c.ap)(
                    ((this.m_nNextSegment - 1) *
                      this.GetCurrentSegmentDurationMS()) /
                      1e3,
                  ) +
                  " seconds.",
              );
          else {
            this.ForceStopDownloads(), (this.m_rgBufferedSegments = []);
            let t = A(this.m_mpd, this.m_representation, 1e3 * e);
            (this.m_nNextSegment = Math.min(t, this.GetMaxSegment())),
              (0, c.q_)(
                "Seek To Next Segment: " +
                  this.m_nNextSegment +
                  " at approx. " +
                  (0, c.ap)(
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
          let e = P(this.m_representation),
            t = 1e3 * this.m_callbacks.GetCurrentPlayTime(),
            i = A(this.m_mpd, this.m_representation, t + e),
            n = this.m_rgBufferedSegments.find(
              (e) => e.nSegmentIndex >= i && this.BCanUpgradeBufferedSegment(e),
            );
          n &&
            this.m_nNextSegment != n.nSegmentIndex &&
            ((0, c.q_)(
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
      (0, r.Cg)([f.o], F.prototype, "OnSourceBufferUpdateEnd", null),
        (0, r.Cg)([f.o], F.prototype, "OnMediaUnsupportedError", null),
        (0, r.Cg)([f.o], F.prototype, "OnSourceBufferError", null),
        (0, r.Cg)([f.o], F.prototype, "OnSourceBufferAbort", null),
        (0, r.Cg)([f.o], F.prototype, "ScheduleNextDownload", null),
        (0, r.Cg)([f.o], F.prototype, "DownloadInitSegment", null),
        (0, r.Cg)([f.o], F.prototype, "DownloadNextSegment", null),
        (0, r.Cg)([f.o], F.prototype, "DownloadFailed", null),
        (0, r.Cg)([f.o], F.prototype, "DownloadGone", null),
        (0, r.Cg)([f.o], F.prototype, "CurrentTimeChanged", null);
      var U = i(73745);
      const O = 5,
        N = "auto";
      var Z, q, W, $;
      !(function (e) {
        (e[(e.HAVE_NOTHING = 0)] = "HAVE_NOTHING"),
          (e[(e.HAVE_METADATA = 1)] = "HAVE_METADATA"),
          (e[(e.HAVE_CURRENT_DATA = 2)] = "HAVE_CURRENT_DATA"),
          (e[(e.HAVE_FUTURE_DATA = 3)] = "HAVE_FUTURE_DATA"),
          (e[(e.HAVE_ENOUGH_DATA = 4)] = "HAVE_ENOUGH_DATA");
      })(Z || (Z = {})),
        (function (e) {
          (e[(e.Invalid = 0)] = "Invalid"),
            (e[(e.StreamGone = 1)] = "StreamGone"),
            (e[(e.PlaybackError = 2)] = "PlaybackError"),
            (e[(e.UnsupportedMediaType = 3)] = "UnsupportedMediaType");
        })(q || (q = {})),
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
        })($ || ($ = {}));
      class z {
        constructor(e) {
          (this.m_elVideo = null),
            (this.m_strMPD = ""),
            (this.m_strHLS = ""),
            (this.m_strCDNAuthURLParameters = null),
            (this.m_bTimeoutAfterFailedDownload = !0),
            (this.m_bAlwaysStartWithSubtitles = !1),
            (this.m_bMuteOnAutoplayBlocked = !1),
            (this.m_schUpdateMPD = new d.LU()),
            (this.m_bUseHLSManifest = !1),
            (this.m_strVideoAdaptationID = ""),
            (this.m_strAudioAdaptationID = ""),
            (this.m_rgLoaders = []),
            (this.m_mediaSource = null),
            (this.m_nTrackBufferMS = 0),
            (this.m_nLimitFPS = 0),
            (this.m_bIsBuffering = !0),
            (this.m_seekingToTime = null),
            (this.m_listeners = new d.Ji()),
            (this.m_resizeObserver = null),
            (this.m_schPlayerResizeDelay = new d.LU()),
            (this.m_nPlayerHeightForAuto = 0),
            (this.m_bFirstPlay = !0),
            (this.m_bPlaybackStarted = !1),
            (this.m_bPlaybackEnded = !1),
            (this.m_nLastPlaytimeLoaders = 0),
            (this.m_nTimedText = 0),
            (this.m_schReportPlayerTrigger = new d.LU()),
            (this.m_bStatsViewVisible = !1),
            (this.m_schCaptureDisplayStatsTrigger = new d.LU()),
            (this.m_videoRepSelected = null),
            (this.m_timedTextRepSelected = null),
            (this.m_stats = new C._L()),
            (this.m_bClosing = !1),
            (this.m_hlsTimeOffset = 0),
            (this.m_bUserPlayChoice = !0),
            (this.m_bUserLiveEdgeChoice = !0),
            (this.m_schFirstFrameThrottler = new d.LU()),
            (this.m_bookMarkAdapter = null),
            (this.m_schBookmarkUpdater = new d.LU()),
            (this.m_watchedIntervals = new J()),
            (0, a.Gn)(this),
            (this.m_elVideo = e),
            this.m_schReportPlayerTrigger.Schedule(3e4, this.ReportPlayerStats);
        }
        CalcVideoStartRelativeToSystemClock(e) {
          let t =
            (e ? new Date(e).getTime() : Date.now()) -
            this.m_mpd.GetAvailabilityStartTime().getTime();
          this.m_mpd.StartLiveContentNow(t), (0, c.q_)("server time: " + e);
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
            let [e, r] = await this.DownloadMPD(t, i);
            if (!r) {
              let t =
                e == $.Gone
                  ? "Failed to download MPD: 410 Gone"
                  : "Timed out downloading MPD";
              return void this.CloseWithError(q.PlaybackError, t);
            }
            let s = new I();
            if (!s.BParse(r.data, t))
              return void this.CloseWithError(
                q.PlaybackError,
                "Failed to parse MPD file",
                this.m_strMPD,
              );
            let o = X(s),
              a = j(o);
            if (
              ((n = {
                strMPD: t,
                mpd: s,
                strServerTime: r.headers.date,
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
                  q.PlaybackError,
                  "Failed to create segment loaders",
                );
          } else this.CloseWithError(q.PlaybackError, "Invalid manifest");
        }
        InitTimedText() {
          (this.m_nTimedText = 0),
            this.m_mpd.GetTimedTextAdaptionSet(0).forEach((e) => {
              let t = (0, l.sf)(_.TS.LANGUAGE);
              if (
                e.rgRepresentations.length > 0 &&
                e.rgRepresentations[0].strClosedCaptionFile &&
                e.strLanguage in h.bi
              ) {
                const i = document.createElement("track");
                (i.kind = "subtitles"),
                  (i.label = (0, h.we)(
                    "#Language_" + (0, l.Lg)(h.bi[e.strLanguage]),
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
        PlayWebRTC(e, t, i, n, r) {}
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
              (0, m.wT)(!1, "Multiple MPD download requests"), [$.Timeout, null]
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
              return [$.PlayerClosing, null];
            if (i && 200 == i.status) return [$.Success, i];
            if (i && 410 == i.status) return [$.Gone, null];
            (0, c.q_)("Failed to download, will retry: " + this.m_strMPD),
              await (0, g.IP)(200);
          }
          return (
            (0, c.q_)("Failed to download: " + this.m_strMPD), [$.Timeout, null]
          );
        }
        async UpdateMPD() {
          (0, c.q_)("Updating MPD in player from: " + this.m_strMPD);
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
                  q.PlaybackError,
                  "Failed to parse on Update the MPD file",
                )
            : e == $.Gone &&
              this.CloseWithError(
                q.PlaybackError,
                "Failed to download MPD: 410 Gone",
              );
        }
        CloseWithError(e, ...t) {
          this.DispatchEvent("valve-downloadfailed", e),
            this.Close(),
            (0, c.q_)(...t);
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
                R(e) &&
                ((t = e), (this.m_strVideoAdaptationID = e.strID)),
              !this.m_strAudioAdaptationID &&
                e.bContainsAudio &&
                R(e) &&
                ((t = e), (this.m_strAudioAdaptationID = e.strID)),
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
            (this.m_resizeObserver = (0, U.Fd)(
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
          (0, c.q_)("OnMediaSourceOpen");
          for (let e of this.m_rgLoaders) e.SetMediaSource(this.m_mediaSource);
          this.BeginPlayback();
        }
        HandleMediaSourceError(e) {
          this.m_bClosing ||
            e.target != this.m_mediaSource ||
            this.StopDownloads();
        }
        OnMediaSourceEnded(e) {
          (0, c.q_)("OnMediaSourceEnded", e), this.HandleMediaSourceError(e);
        }
        OnMediaSourceClose(e) {
          (0, c.q_)("OnMediaSourceClose", e), this.HandleMediaSourceError(e);
        }
        OnVideoWaiting(e) {
          if (this.IsAtEnd())
            return (
              (0, c.q_)(
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
                  ((0, c.q_)(
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
                    (0, c.q_)(
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
                  (0, c.q_)(
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
                (0, c.q_)(
                  "OnVideoWaiting - Stalled, already at lowest resolution. No action taken. BHasLoader: " +
                    (null != t),
                );
            } else {
              let e = this.m_videoRepSelected;
              (0, c.q_)(
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
          (0, c.q_)("OnVideoError");
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
          if (!(null == this ? void 0 : this.m_elVideo)) return;
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
                (0, c.q_)(
                  "User is behind by " +
                    t.toFixed(2) +
                    " seconds, increasing playback speed to catch-up to live edge.",
                );
            } else
              1.1 == this.m_elVideo.playbackRate &&
                this.m_elVideo.currentTime >= e - 1 &&
                ((this.m_elVideo.playbackRate = 1),
                (0, c.q_)("User is caught up, returning to normal playrate"));
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
              r = n && n.strID ? n.strID : null,
              s = this.GetCurrentTimedTextRepresentation(),
              o = s && s.strID ? s.strID : null;
            this.m_bookMarkAdapter.SetBookmark(e >= 0 ? e : 0, i, r, o),
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
        GetTimeoutAfterFailedDownload() {
          return this.m_bTimeoutAfterFailedDownload;
        }
        GetCDNAuthURLParameter() {
          return this.m_strCDNAuthURLParameters;
        }
        OnSegmentDownloaded(e) {
          (0, c.q_)(e.GetDebugName() + " OnSegmentDownloaded"),
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
            (t = e), (0, c.q_)("Failed to play video", e);
          }
          let i = this.BHasTimedText() || this.m_bMuteOnAutoplayBlocked;
          if (t && "NotAllowedError" == t.name && !this.m_elVideo.muted && i) {
            (0, c.q_)("Trying to play again, this time muted with subtitles"),
              (t = void 0),
              (this.m_elVideo.muted = !0),
              this.SetSubtitles((0, l.sf)(_.TS.LANGUAGE));
            try {
              await this.m_elVideo.play();
            } catch (e) {
              (t = e), (0, c.q_)("Failed to play video when muted", e);
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
            : ((0, c.q_)(
                "OnSegmentDownloadGone: too many consecutive 'gone', erroring the download: " +
                  e.GetNumConsecutiveDownloadGones(),
              ),
              this.OnSegmentDownloadFailed(e, q.StreamGone));
        }
        OnMediaUnsupportedError(e, t) {
          this.DispatchEvent("valve-downloadfailed", q.UnsupportedMediaType);
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
            let r = this.GetBufferedLiveEdgeTime();
            (e = this.GetPlaybackStartTime(r)),
              (0, c.q_)(
                `Begin playback of live content [this.buffer=${this.m_nTrackBufferMS}][nStartTime=${e}][nLiveEdge=${r}]`,
              );
          } else
            this.SetTrackBufferMS(8e3),
              (e = this.GetPlaybackStartTime(0)),
              this.m_bookMarkAdapter &&
                ((e = this.m_bookMarkAdapter.GetBeginPlaytime()),
                this.m_mpd.GetEndTime() - e < 5 && (e = 0)),
              (0, c.q_)(
                `Begin playback of non-live content [this.buffer=${this.m_nTrackBufferMS}][nStartTime=${e}]`,
              );
          (this.m_seekingToTime = null),
            (0, c.q_)("Starting playback at " + e),
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
              (0, c.q_)(
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
            r =
              (s = this.m_nPlayerHeightForAuto) < 410
                ? 480
                : s < 600
                  ? 720
                  : s < 910
                    ? 1080
                    : Number.MAX_SAFE_INTEGER;
          var s;
          let o = e.GetRepresentationsCount() - 1,
            a = e.GetAdaptation().rgRepresentations[o];
          for (let t = o - 1; t >= 0; t--) {
            let s = e.GetAdaptation().rgRepresentations[t],
              o = (s.nBandwidth + i) * this.m_elVideo.playbackRate * 1.15;
            if (n > 0 && n < o) {
              (0, c.q_)(
                `Video select: Skipping ${t} due to rate: [avg=${n}][required=${o}]`,
              );
              continue;
            }
            let l = s.nFrameRate || 0;
            if (this.IsLiveContent() && l > 30) {
              let e = this.m_stats.GetFPSMonitor(),
                i = e.BHasCurrentFPS() && Math.ceil(e.GetCurrentFPS()) < 29;
              if (e.BIsDroppingFrames() || i) {
                (0, c.q_)(
                  `Video select: Skipping ${t} due to dropping frames and high FPS representation: [fps:${l}]`,
                );
                continue;
              }
            }
            if (this.m_nLimitFPS > 0 && l > this.m_nLimitFPS) {
              (0, c.q_)(`Video select: Skipping ${t} due to frame rate limit`);
              continue;
            }
            let m = a.nHeight || 0,
              d = s.nHeight || 0;
            if (r > 0 && m > 0 && d > 0 && d > r) {
              (0, c.q_)(
                `Video select: Stopped at ${m} due to player dimensions`,
              );
              break;
            }
            a = s;
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
          const r = e;
          (e = u.OQ(e, i, n)) != r &&
            (0, c.q_)(`Seek time ${r} was clamped to the range ${i} to ${n}`),
            (this.m_bUserLiveEdgeChoice = e >= n - O);
          let s = this.m_elVideo.paused;
          if ((s || this.m_elVideo.pause(), this.m_bUseHLSManifest))
            (this.m_elVideo.currentTime = e - this.m_hlsTimeOffset),
              this.PlayOnElement(),
              this.DispatchEvent("valve-bufferupdate");
          else {
            (this.m_bIsBuffering = !0),
              (this.m_seekingToTime = { nTime: e, eSeekType: W.Absolute });
            for (let t of this.m_rgLoaders) t.Seek(e);
            this.DispatchEvent("valve-bufferupdate"),
              s && this.OnVideoBufferProgress();
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
              id: N,
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
              let r = `${i.nWidth}x${i.nHeight} @ ${n}fps`;
              e.push({
                id: i.strID,
                displayName: r,
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
          if (e && e.id != N) {
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
      function Q(e) {
        return e.id == N;
      }
      function X(e) {
        let t = "",
          i = "",
          n = "",
          r = e.GetMainVideoAdaption();
        return (
          r &&
            r.rgRepresentations.length > 0 &&
            ((t = r.rgRepresentations[0].strMimeType),
            (i = r.rgRepresentations[0].strCodecs)),
          (r = e.GetMainAudioAdaption()),
          r &&
            r.rgRepresentations.length > 0 &&
            (n = r.rgRepresentations[0].strCodecs),
          t && i ? (n ? `${t}; codecs="${i}, ${n}` : `${t}; codecs="${i}`) : ""
        );
      }
      function j(e) {
        let t = !1;
        try {
          t = MediaSource.isTypeSupported(e);
        } catch (e) {}
        return t;
      }
      (0, r.Cg)([a.sH], z.prototype, "m_nTimedText", void 0),
        (0, r.Cg)([a.XI], z.prototype, "InitTimedText", null),
        (0, r.Cg)([f.o], z.prototype, "OnLoadedMetadataForHLS", null),
        (0, r.Cg)([f.o], z.prototype, "OnVisibilityChangeForHLS", null),
        (0, r.Cg)([f.o], z.prototype, "OnEndedForHLS", null),
        (0, r.Cg)([f.o], z.prototype, "UpdateMPD", null),
        (0, r.Cg)([f.o], z.prototype, "OnPlayerResize", null),
        (0, r.Cg)([f.o], z.prototype, "OnMediaSourceOpen", null),
        (0, r.Cg)([f.o], z.prototype, "HandleMediaSourceError", null),
        (0, r.Cg)([f.o], z.prototype, "OnMediaSourceEnded", null),
        (0, r.Cg)([f.o], z.prototype, "OnMediaSourceClose", null),
        (0, r.Cg)([f.o], z.prototype, "OnVideoWaiting", null),
        (0, r.Cg)([f.o], z.prototype, "OnVideoPause", null),
        (0, r.Cg)([f.o], z.prototype, "OnVideoResize", null),
        (0, r.Cg)([f.o], z.prototype, "OnVideoError", null),
        (0, r.Cg)([f.o], z.prototype, "OnVideoCanPlay", null),
        (0, r.Cg)([f.o], z.prototype, "OnVideoCanPlayHLS", null),
        (0, r.Cg)([f.o], z.prototype, "GetCurrentPlayTime", null),
        (0, r.Cg)([f.o], z.prototype, "GetBufferedEndTime", null),
        (0, r.Cg)([f.o], z.prototype, "OnVideoTimeUpdate", null),
        (0, r.Cg)(
          [f.o],
          z.prototype,
          "SendUpdateToBookmarkServiceIfNeeded",
          null,
        ),
        (0, r.Cg)([f.o], z.prototype, "OnVideoPlay", null),
        (0, r.Cg)([f.o], z.prototype, "OnVideoSeeking", null),
        (0, r.Cg)([f.o], z.prototype, "OnVideoSeeked", null),
        (0, r.Cg)([f.o], z.prototype, "GetPlaybackRate", null),
        (0, r.Cg)([f.o], z.prototype, "GetTimeoutAfterFailedDownload", null),
        (0, r.Cg)([f.o], z.prototype, "GetCDNAuthURLParameter", null),
        (0, r.Cg)([f.o], z.prototype, "OnSegmentDownloaded", null),
        (0, r.Cg)([f.o], z.prototype, "OnSegmentBuffered", null),
        (0, r.Cg)([f.o], z.prototype, "PlayOnElement", null),
        (0, r.Cg)([f.o], z.prototype, "OnSegmentDownloadFailed", null),
        (0, r.Cg)([f.o], z.prototype, "OnSegmentDownloadGone", null),
        (0, r.Cg)([f.o], z.prototype, "OnMediaUnsupportedError", null),
        (0, r.Cg)([f.o], z.prototype, "OnMediaSourceError", null),
        (0, r.Cg)(
          [f.o],
          z.prototype,
          "VerifyFirstSegmentDownloadProgress",
          null,
        ),
        (0, r.Cg)([f.o], z.prototype, "ReportPlayerStats", null),
        (0, r.Cg)([a.XI.bound], z.prototype, "CaptureStatsForDisplay", null);
      class J {
        constructor() {
          (this.m_bEnabled = !1),
            (this.m_rgIntervals = []),
            (this.m_nWatchStart = void 0);
        }
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
            [n, r] = e;
          for (i = t; i < this.m_rgIntervals.length; i++) {
            let e = this.m_rgIntervals[i];
            if (e[0] > r) break;
            (n = Math.min(n, e[0])), (r = Math.max(r, e[1]));
          }
          let s = i - t;
          this.m_rgIntervals.splice(t, s, [n, r]);
        }
      }
    },
    34374: (e, t, i) => {
      "use strict";
      i.d(t, { _L: () => C });
      var n = i(34629),
        r = i(14947),
        s = i(41735),
        o = i.n(s),
        a = i(17720),
        l = i(36064),
        m = i(78327),
        d = i(6144),
        h = i(61859),
        u = i(82227);
      const f = 1e6;
      class g {
        constructor() {
          this.playback_speed = 1;
        }
      }
      class _ extends g {}
      class c extends g {}
      class C {
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
            (this.m_allTimeSnapshot = new p(0)),
            (this.m_rgSnapShots = new Array(new p(0))),
            (this.m_bAtLeastOneUserRepresentation = !1),
            (this.m_videoResolution = 0),
            (this.m_audioRate = 0),
            (this.m_audioChannel = 0),
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
            (this.m_nPerfTimeCreated = 0),
            (this.m_nTimeToFirstFrameMS = -1),
            (this.m_fpsMonitor = new w()),
            (0, r.Gn)(this);
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
            ? (0, l.ap)(this.m_videoBufferedRanges.start(e)) +
                " - " +
                (0, l.ap)(this.m_videoBufferedRanges.end(e))
            : (0, h.we)("#DASHPlayerStats_VideoNoRangeInformation");
        }
        GetBufferedAudioSegmentForDisplay(e) {
          return this.m_audioBufferedRanges &&
            e < this.m_audioBufferedRanges.length
            ? (0, l.ap)(this.m_audioBufferedRanges.start(e)) +
                " - " +
                (0, l.ap)(this.m_audioBufferedRanges.end(e))
            : (0, h.we)("#DASHPlayerStats_AudioNoRangeInformation");
        }
        GetBandwidthStatsToDisplay() {
          if (this.m_rgSnapShots.length < 2)
            return (
              (this.m_allTimeSnapshot.m_nBandwidthMin / f).toFixed(3) +
              " / " +
              (this.m_allTimeSnapshot.m_nBandwidthMax / f).toFixed(3) +
              " / " +
              (this.m_allTimeSnapshot.GetAverageBandwidth() / f).toFixed(3)
            );
          {
            let e = this.m_rgSnapShots[this.m_rgSnapShots.length - 2],
              t = this.m_rgSnapShots[this.m_rgSnapShots.length - 1];
            return (
              (
                (0 == t.m_nBandwidthMin
                  ? e.m_nBandwidthMin
                  : Math.min(e.m_nBandwidthMin, t.m_nBandwidthMin)) / f
              ).toFixed(3) +
              " / " +
              (Math.max(e.m_nBandwidthMax, t.m_nBandwidthMax) / f).toFixed(3) +
              " / " +
              (e.GetAverageBandwidthFromTwo(t) / f).toFixed(3)
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
          return (this.m_nBandwidthRequired / f).toFixed(3);
        }
        GetBandwithVideoToDisplay() {
          return (this.m_nCurBandwidthVideo / f).toFixed(3);
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
        SetBroadcasterAndViewerInfo(e, t, i, n, r) {
          (this.m_steamIDBroadcast = e),
            (this.m_steamIDViewer = t),
            (this.m_broadcastID = i),
            (this.m_ulViewerToken = n),
            (this.m_strCDNAuthUrlParameters = r);
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
            return void (0, l.q_)(
              "DASHStats: Did not find any audio or video loaders",
            );
          this.m_rgSnapShots[this.m_rgSnapShots.length - 1].m_nStallEvents += 1;
          let n = new c();
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
          let r = i.GetDownloadHistory(),
            s = 0;
          for (let e = r.length - 1; e >= 0 && s < 3; --e)
            ++s,
              (n["segment" + s + "_bytes"] = r[e].cubData),
              (n["segment" + s + "_time"] = Math.round(r[e].nDownloadMS) / 1e3);
          this.SendReportToServer(n, this.m_strStalledLink);
        }
        FindBehindSegmentLoader(e, t) {
          let i = !1,
            n = !1,
            r = t.currentTime,
            s = null,
            o = null;
          for (let t of e)
            (o = t.ContainsAudio() ? t : o),
              (s = t.ContainsVideo() ? t : o),
              t.BHasEnoughBuffered(r) &&
                ((n = n || t.ContainsAudio()), (i = i || t.ContainsVideo()));
          return (n = n || null == o), !i || (i && n) ? s : o;
        }
        ExtractFrameInfo(e) {
          let t = 0,
            i = 0;
          if (e.getVideoPlaybackQuality)
            try {
              let n = e.getVideoPlaybackQuality();
              (i = n.totalVideoFrames), (t = n.droppedVideoFrames);
            } catch (e) {
              (0, l.q_)(
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
          let n = new _(),
            r = this.m_rgSnapShots[this.m_rgSnapShots.length - 1];
          (n.frames_decoded = r.m_nFramesDecoded),
            (n.frames_dropped = r.m_nFramesDropped),
            (n.bytes_received = r.m_nBytesReceived),
            (n.seconds_delta = Math.round((Date.now() - r.m_timeMS) / 1e3)),
            (n.failed_segments = r.m_nFailedSegments),
            (n.bw_min = r.m_nBandwidthMin),
            (n.bw_max = r.m_nBandwidthMax),
            (n.audio_buffer = Math.round(this.m_nAudioBufferedMS / 1e3)),
            (n.video_buffer = Math.round(this.m_nVideoBufferedMS / 1e3)),
            (n.seg_time_avg = Math.round(r.GetAverageDownloadTime()) / 1e3),
            (n.seg_time_min = Math.round(r.m_nSegmentDownloadTimeMinMS) / 1e3),
            (n.seg_time_max = Math.round(r.m_nSegmentDownloadTimeMaxMS) / 1e3),
            (n.initial_vid_res = r.m_nInitialVideoResolution),
            (n.ttff = this.m_nTimeToFirstFrameMS),
            (n.seg_duration = this.m_nSegmentDurationMS),
            this.GatherCommonStats(
              n,
              t,
              this.m_nBandwidthRequired,
              r.GetAverageBandwidth(),
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
            (0, l.q_)("CDASHStats Sending Report to Server", e),
            o()
              .post(t, n)
              .catch((e) => {
                (0, l.q_)("Failed to upload stats: ", e);
              });
        }
        CreateNewEmptySnapshot(e) {
          this.m_rgSnapShots.length >= 5 && this.m_rgSnapShots.shift(),
            this.m_rgSnapShots.push(new p(e));
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
      (0, n.Cg)([r.sH], C.prototype, "m_allTimeSnapshot", void 0),
        (0, n.Cg)([r.sH], C.prototype, "m_strBufferingVideoResolution", void 0),
        (0, n.Cg)([r.sH], C.prototype, "m_strPlaybackVideoResolution", void 0),
        (0, n.Cg)([r.sH], C.prototype, "m_strHtmlVideoDisplay", void 0),
        (0, n.Cg)([r.sH], C.prototype, "m_nBandwidthRequired", void 0),
        (0, n.Cg)([r.sH], C.prototype, "m_nCurBandwidthVideo", void 0),
        (0, n.Cg)([r.sH], C.prototype, "m_nAudioBufferedMS", void 0),
        (0, n.Cg)([r.sH], C.prototype, "m_nVideoBufferedMS", void 0),
        (0, n.Cg)([r.sH], C.prototype, "m_nActiveDownloads", void 0),
        (0, n.Cg)([r.sH], C.prototype, "m_nVideoDownloadProgress", void 0),
        (0, n.Cg)([r.sH], C.prototype, "m_videoBufferedRanges", void 0),
        (0, n.Cg)([r.sH], C.prototype, "m_audioBufferedRanges", void 0),
        (0, n.Cg)([r.sH], C.prototype, "m_nPlaybackRate", void 0),
        (0, n.Cg)([r.XI], C.prototype, "SetVideoPlaybackResolution", null),
        (0, n.Cg)([r.XI], C.prototype, "SetRepresentation", null),
        (0, n.Cg)([r.XI], C.prototype, "SetCurrentVideoBandwidth", null),
        (0, n.Cg)(
          [r.XI],
          C.prototype,
          "CaptureFrequentlyUpdatingInformation",
          null,
        ),
        (0, n.Cg)([r.XI], C.prototype, "LogDownload", null),
        (0, n.Cg)([r.XI], C.prototype, "LogSegmentDownloadFailure", null),
        (0, n.Cg)([r.XI], C.prototype, "LogFrameInfo", null),
        (0, n.Cg)([r.XI], C.prototype, "LogBufferDuration", null);
      class p {
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
            (0, r.Gn)(this),
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
      (0, n.Cg)([r.sH], p.prototype, "m_nBytesReceived", void 0),
        (0, n.Cg)([r.sH], p.prototype, "m_nFailedSegments", void 0),
        (0, n.Cg)([r.sH], p.prototype, "m_nStallEvents", void 0),
        (0, n.Cg)([r.sH], p.prototype, "m_nSegmentDownloadTimeMaxMS", void 0),
        (0, n.Cg)([r.sH], p.prototype, "m_nSegmentDownloadTimeMinMS", void 0),
        (0, n.Cg)([r.sH], p.prototype, "m_nBandwidthMin", void 0),
        (0, n.Cg)([r.sH], p.prototype, "m_nBandwidthMax", void 0),
        (0, n.Cg)([r.sH], p.prototype, "m_nFramesDecoded", void 0),
        (0, n.Cg)([r.sH], p.prototype, "m_nFramesDropped", void 0),
        (0, n.Cg)([r.XI], p.prototype, "SegmentReceived", null);
      class S {
        reset(e, t) {
          (this.bDropReading = e), (this.nTotalDecodedFrames = t);
        }
      }
      class w {
        constructor() {
          (this.k_nTestFrequencyMS = 1e3),
            (this.k_nSlidingWindow = 6),
            (this.k_nDroppedFramesThreshold = 1),
            (this.k_nFailThreshold = 3),
            (this.k_nIgnoreReadingAroundResizeMS = 2e3),
            (this.m_schTracker = new d.LU()),
            (this.m_rgResultsWindow = []),
            (this.m_nLastResizeMS = 0),
            (this.m_bDroppingFrameDetected = !1),
            (this.m_nCurrentFPS = 0),
            (0, r.Gn)(this);
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
              : new S()),
            i.reset(e, t),
            this.m_rgResultsWindow.push(i);
        }
      }
      (0, n.Cg)([r.sH], w.prototype, "m_bDroppingFrameDetected", void 0),
        (0, n.Cg)([r.sH], w.prototype, "m_nCurrentFPS", void 0),
        (0, n.Cg)([r.XI.bound], w.prototype, "TakeReading", null);
    },
    71298: (e, t, i) => {
      "use strict";
      i.d(t, { Hh: () => d, vs: () => l, wB: () => m });
      var n = i(90626),
        r = i(9154),
        s = i(56330),
        o = i(61859),
        a = i(22797);
      function l(e) {
        const [t, i] = (0, n.useState)(() => Boolean(e)),
          [r, s] = (0, n.useState)(!1),
          [o, a] = (0, n.useState)(!1),
          [l, m] = (0, n.useState)(null),
          [d, h] = (0, n.useState)(null),
          [u, f] = (0, n.useState)(null),
          [g, _] = (0, n.useState)(null),
          [c, C] = (0, n.useState)(null);
        return {
          bLoading: t,
          bError: r,
          bSuccess: o,
          strError: l,
          strSuccess: d,
          elSuccess: g,
          elError: u,
          strThrobber: c,
          fnSetLoading: i,
          fnSetError: s,
          fnSetSuccess: a,
          fnSetStrError: m,
          fnSetStrSuccess: h,
          fnSetElSuccess: _,
          fnSetElError: f,
          fnSetThrobber: C,
        };
      }
      function m(e, t) {
        1 != t ? e.fnSetError(!0) : e.fnSetSuccess(!0);
      }
      function d(e) {
        const {
            strDialogTitle: t,
            state: i,
            closeModal: l,
            strThrobber: m,
          } = e,
          {
            bLoading: d,
            bError: h,
            bSuccess: u,
            strError: f,
            strSuccess: g,
            elSuccess: _,
            elError: c,
            strThrobber: C,
          } = i;
        return h || f || c
          ? n.createElement(
              r.o0,
              {
                strTitle: t,
                bAlertDialog: !0,
                closeModal: l,
                className: s.SucessErrorDialog,
              },
              Boolean(f) &&
                n.createElement(
                  "div",
                  { className: s.ErrorStylesWithIcon },
                  f || (0, o.we)("#Error_ErrorCommunicatingWithNetwork"),
                ),
              Boolean(c) && c,
            )
          : u || g || _
            ? n.createElement(
                r.o0,
                {
                  strTitle: t,
                  strDescription: g || (0, o.we)("#EventDisplay_Share_Success"),
                  bAlertDialog: !0,
                  closeModal: l,
                  className: s.SucessErrorDialog,
                },
                n.createElement(n.Fragment, null, Boolean(_) && _),
              )
            : n.createElement(
                r.o0,
                {
                  strTitle: t,
                  className: s.SucessErrorDialog,
                  bProgressDialog: !0,
                  closeModal: () => {},
                },
                n.createElement(a.t, {
                  string: m || C || (0, o.we)("#Loading"),
                  size: "medium",
                  position: "center",
                }),
              );
      }
    },
    52694: (e, t, i) => {
      "use strict";
      i.d(t, {
        AY: () => u,
        B1: () => A,
        E$: () => K,
        FE: () => V,
        FW: () => $,
        Hs: () => z,
        JB: () => x,
        KJ: () => I,
        LB: () => F,
        M4: () => v,
        M6: () => R,
        MG: () => f,
        Mj: () => g,
        Ml: () => T,
        Nm: () => ne,
        O5: () => oe,
        OY: () => C,
        O_: () => Q,
        Od: () => J,
        Oe: () => p,
        Oi: () => m,
        QY: () => _,
        R2: () => d,
        Rm: () => k,
        Ss: () => Z,
        WO: () => b,
        Wd: () => re,
        Wq: () => H,
        X: () => W,
        Xh: () => y,
        YJ: () => G,
        Z3: () => L,
        ai: () => s,
        bL: () => S,
        eT: () => o,
        ff: () => B,
        gD: () => a,
        i7: () => le,
        jl: () => E,
        k8: () => O,
        lM: () => P,
        lN: () => w,
        lQ: () => q,
        mc: () => ee,
        mr: () => M,
        nf: () => te,
        pH: () => l,
        po: () => U,
        pw: () => X,
        ry: () => D,
        t4: () => N,
        tS: () => ie,
        ud: () => Y,
        wN: () => ae,
        xA: () => se,
        y$: () => h,
        y4: () => c,
        zP: () => j,
      });
      var n = i(90626),
        r = i(91929);
      function s(e) {
        return n.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...e,
          },
          n.createElement("path", {
            fill: "currentColor",
            d: "M5.48744 28.293V31.3988H35V9.65272H31.8924V28.293H5.48744Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M1 4V24.7106H28.6141V4H1ZM6.17764 22.1217H3.58882V18.67H6.17764V22.1217ZM6.17764 16.0812H3.58882V12.6294H6.17764V16.0812ZM6.17764 10.0406H3.58882V6.58882H6.17764V10.0406ZM11.3553 19.3345V9.37612L19.9847 14.3553L11.3553 19.3345ZM26.0253 22.1217H23.4365V18.67H26.0253V22.1217ZM26.0253 16.0812H23.4365V12.6294H26.0253V16.0812ZM26.0253 10.0406H23.4365V6.58882H26.0253V10.0406Z",
          }),
        );
      }
      function o(e) {
        return n.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...e,
          },
          n.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18 4L3 30H33L18 4ZM21.025 12.9375L20.0167 21.0625H15.9833L14.975 12.9375H21.025ZM18 27.5625C17.5055 27.5625 17.0222 27.4195 16.6111 27.1517C16.2 26.8839 15.8795 26.5032 15.6903 26.0578C15.5011 25.6124 15.4516 25.1223 15.548 24.6495C15.6445 24.1766 15.8826 23.7423 16.2322 23.4014C16.5819 23.0605 17.0273 22.8284 17.5123 22.7343C17.9972 22.6403 18.4999 22.6886 18.9567 22.873C19.4135 23.0575 19.804 23.37 20.0787 23.7708C20.3534 24.1716 20.5 24.6429 20.5 25.125C20.5 25.7715 20.2366 26.3915 19.7678 26.8486C19.2989 27.3057 18.663 27.5625 18 27.5625Z",
          }),
        );
      }
      function a(e) {
        return n.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...e,
          },
          n.createElement("path", {
            fill: "currentColor",
            d: "M14.8423 5.23802H8.25602C8.06408 5.23802 7.8781 5.334 7.76408 5.48998L3.89928 11H10.0685L14.8423 5.23802Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M3.66016 13.5L14.8423 28.8125L9.68747 13.5H3.66016Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M12.1675 13.5L17.4301 30.33C17.4339 30.3454 17.4403 30.3559 17.4475 30.3678L17.4527 30.3763L17.4574 30.3847L17.4601 30.39C17.4661 30.4139 17.478 30.4379 17.4961 30.4619C17.5201 30.504 17.5501 30.54 17.5801 30.57L17.6341 30.624C17.6882 30.666 17.7541 30.7019 17.8201 30.726C17.8623 30.7365 17.9044 30.7424 17.9424 30.7478L17.9582 30.75H17.9941L18.0001 30.756C18.0031 30.756 18.0046 30.7545 18.0061 30.753C18.0076 30.7515 18.0091 30.75 18.0121 30.75H18.0361C18.0841 30.75 18.1321 30.744 18.1801 30.726H18.1861C18.2521 30.702 18.318 30.666 18.3721 30.624C18.3811 30.615 18.3886 30.606 18.3961 30.597C18.4036 30.588 18.4111 30.579 18.4201 30.57C18.4561 30.54 18.4861 30.5039 18.5101 30.4619L18.5461 30.39C18.5491 30.378 18.5551 30.369 18.5611 30.36C18.5671 30.351 18.5731 30.342 18.5761 30.33L19.3385 27.889L19.3262 27.8851L21.4894 21.0028L23.8329 13.5L12.1675 13.5Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M20.875 28.8125L32.346 13.5H26.3313L20.875 28.8125Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M32.1009 11L28.236 5.48993C28.1221 5.33395 27.9421 5.23798 27.7441 5.23798H21.0513L25.8251 11H32.1009Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M23.076 11L18.4622 5.45398C18.4562 5.448 18.4487 5.44199 18.4412 5.43599C18.4338 5.42998 18.4262 5.42397 18.4203 5.418C18.4157 5.41341 18.412 5.40792 18.4081 5.40222C18.4019 5.39309 18.3954 5.38341 18.3843 5.37605C18.3753 5.37007 18.3663 5.36556 18.3573 5.36105C18.3483 5.35654 18.3393 5.35202 18.3303 5.34605C18.2949 5.32248 18.2596 5.30479 18.2243 5.28709L18.2222 5.28605L18.2195 5.28515C18.1843 5.27349 18.1492 5.26187 18.1142 5.25605C18.0782 5.25007 18.0421 5.24409 18.0002 5.24409C17.9641 5.24409 17.9281 5.25007 17.8921 5.25605C17.85 5.26202 17.8141 5.27398 17.7781 5.29202C17.7421 5.3041 17.7121 5.32202 17.6761 5.34605C17.6671 5.35202 17.6566 5.35654 17.6461 5.36105C17.6356 5.36556 17.6252 5.37007 17.6161 5.37605C17.6102 5.38202 17.6056 5.38952 17.6011 5.39702C17.5966 5.40452 17.5921 5.41203 17.5861 5.418C17.5811 5.42132 17.5761 5.42418 17.5712 5.42696C17.5585 5.4342 17.5467 5.44094 17.5381 5.45398L12.9293 11H23.076Z",
          }),
        );
      }
      function l(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18 33C18 33 29 20.5586 29 14.3115C29 8.06432 24.0751 3 18 3C11.9249 3 7 8.06432 7 14.3115C7 20.5586 18 33 18 33ZM18 20C21.3137 20 24 17.3137 24 14C24 10.6863 21.3137 8 18 8C14.6863 8 12 10.6863 12 14C12 17.3137 14.6863 20 18 20Z",
            fill: "currentColor",
          }),
        );
      }
      function m(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M30 30.05H26L24 34.05L20.11 27.57L22.9 24.87L26.9 24.81L30 30.05ZM13.1 24.87L9.1 24.81L6 30.05H10L12 34.05L15.89 27.57L13.1 24.87ZM22.5 13.05C22.5 12.16 22.2361 11.2899 21.7416 10.5499C21.2471 9.8099 20.5443 9.23312 19.7221 8.89253C18.8998 8.55194 17.995 8.46282 17.1221 8.63645C16.2492 8.81009 15.4474 9.23867 14.818 9.86801C14.1887 10.4973 13.7601 11.2992 13.5865 12.1721C13.4128 13.045 13.5019 13.9498 13.8425 14.7721C14.1831 15.5943 14.7599 16.2971 15.4999 16.7916C16.24 17.2861 17.11 17.55 18 17.55C18.5913 17.5513 19.1771 17.4358 19.7236 17.2101C20.2702 16.9845 20.7668 16.653 21.1849 16.2349C21.603 15.8168 21.9345 15.3202 22.1601 14.7736C22.3858 14.2271 22.5013 13.6413 22.5 13.05ZM29 13.05L25.85 16.3L25.78 20.83L21.25 20.9L18 24.05L14.75 20.9L10.22 20.83L10.15 16.3L7 13.05L10.15 9.79999L10.22 5.26999L14.75 5.19999L18 2.04999L21.25 5.19999L25.78 5.26999L25.85 9.79999L29 13.05Z",
            fill: "currentColor",
          }),
        );
      }
      function d(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3V3ZM20.5 26H15.5V16H20.5V26ZM18 14C17.4067 14 16.8266 13.8241 16.3333 13.4944C15.8399 13.1648 15.4554 12.6962 15.2284 12.1481C15.0013 11.5999 14.9419 10.9967 15.0577 10.4147C15.1734 9.83279 15.4591 9.29824 15.8787 8.87868C16.2982 8.45912 16.8328 8.1734 17.4147 8.05764C17.9967 7.94189 18.5999 8.0013 19.1481 8.22836C19.6962 8.45542 20.1648 8.83994 20.4944 9.33329C20.8241 9.82664 21 10.4067 21 11C21 11.7956 20.6839 12.5587 20.1213 13.1213C19.5587 13.6839 18.7957 14 18 14V14Z",
            fill: "currentColor",
          }),
        );
      }
      function h(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M12.34 33.73L16 20H8L24 2L21 15H29L12.34 33.73Z",
            fill: "currentColor",
          }),
        );
      }
      function u(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33ZM7 19.9L14.9188 28L29 13.57L25.5017 10L14.9188 20.845L10.4983 16.315L7 19.9Z",
            fill: "currentColor",
          }),
        );
      }
      function f(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M27.2344 6L13.8123 20.0948L7.76561 13.77L3 18.7086L13.8123 30L32 10.9386L27.2344 6Z",
            fill: "currentColor",
          }),
        );
      }
      function g(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M14.5 7L17.2 15.37C17.5375 16.5175 18.4825 17.395 19.63 17.8L28 20.5L19.63 23.2C18.4825 23.5375 17.605 24.4825 17.2 25.63L14.5 34L11.8 25.63C11.4625 24.4825 10.5175 23.605 9.37 23.2L1 20.5L9.37 17.8C10.5175 17.4625 11.395 16.5175 11.8 15.37L14.5 7Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M24.9231 2L26.3077 6.33599C26.4923 6.94209 26.9538 7.40833 27.5538 7.59482L31.8462 8.99353L27.5538 10.3922C26.9538 10.5787 26.4923 11.045 26.3077 11.6511L24.9231 15.9871L23.5385 11.6511C23.3538 11.045 22.8923 10.5787 22.2923 10.3922L18 8.99353L22.2923 7.59482C22.8923 7.40833 23.3538 6.94209 23.5385 6.33599L24.9231 2Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M7.46154 3L8.15385 5.1913C8.24615 5.47105 8.47692 5.70416 8.75384 5.79741L10.9231 6.49676L8.75384 7.19611C8.47692 7.28936 8.24615 7.52248 8.15385 7.80222L7.46154 9.99352L6.76923 7.80222C6.67692 7.52248 6.44615 7.28936 6.16923 7.19611L4 6.49676L6.16923 5.79741C6.44615 5.70416 6.67692 5.47105 6.76923 5.1913L7.46154 3Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M31.4615 12L32.1538 14.1913C32.2462 14.471 32.4769 14.7042 32.7538 14.7974L34.9231 15.4968L32.7538 16.1961C32.4769 16.2894 32.2462 16.5225 32.1538 16.8022L31.4615 18.9935L30.7692 16.8022C30.6769 16.5225 30.4462 16.2894 30.1692 16.1961L28 15.4968L30.1692 14.7974C30.4462 14.7042 30.6769 14.471 30.7692 14.1913L31.4615 12Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M26.4615 25L27.1538 27.1913C27.2462 27.471 27.4769 27.7042 27.7538 27.7974L29.9231 28.4968L27.7538 29.1961C27.4769 29.2894 27.2462 29.5225 27.1538 29.8022L26.4615 31.9935L25.7692 29.8022C25.6769 29.5225 25.4462 29.2894 25.1692 29.1961L23 28.4968L25.1692 27.7974C25.4462 27.7042 25.6769 27.471 25.7692 27.1913L26.4615 25Z",
            fill: "currentColor",
          }),
        );
      }
      function _(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M33.78 19.22L19.22 33.78L4 18.56V4H18.56L33.78 19.22Z",
            fill: "currentColor",
          }),
        );
      }
      function c(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M26 24.5V36L18 33L10 36V24.5L12 24.56C12.4845 24.5765 12.9464 24.7684 13.3 25.1L16.59 28.2C16.9609 28.5488 17.4509 28.7429 17.96 28.7429C18.4691 28.7429 18.9591 28.5488 19.33 28.2L22.62 25.1C22.9736 24.7684 23.4355 24.5765 23.92 24.56L26 24.5ZM30 12L28.2 13.91C27.1867 14.9805 26.6029 16.3866 26.56 17.86L26.49 20.49L23.86 20.56C22.3866 20.6029 20.9805 21.1867 19.91 22.2L18 24L16.09 22.2C15.0195 21.1867 13.6134 20.6029 12.14 20.56L9.51 20.49L9.44 17.86C9.3971 16.3866 8.81331 14.9805 7.8 13.91L6 12L7.8 10.09C8.81331 9.01949 9.3971 7.61342 9.44 6.14L9.51 3.51L12.14 3.44C13.6134 3.3971 15.0195 2.81331 16.09 1.8L18 0L19.91 1.8C20.9805 2.81331 22.3866 3.3971 23.86 3.44L26.49 3.51L26.56 6.14C26.5906 7.6308 27.1753 9.05677 28.2 10.14L30 12ZM23 12C23 11.0111 22.7068 10.0444 22.1573 9.22215C21.6079 8.3999 20.827 7.75904 19.9134 7.3806C18.9998 7.00216 17.9945 6.90315 17.0245 7.09607C16.0546 7.289 15.1637 7.7652 14.4645 8.46447C13.7652 9.16373 13.289 10.0546 13.0961 11.0245C12.9031 11.9945 13.0022 12.9998 13.3806 13.9134C13.759 14.827 14.3999 15.6079 15.2221 16.1573C16.0444 16.7068 17.0111 17 18 17C18.6566 17 19.3068 16.8707 19.9134 16.6194C20.52 16.3681 21.0712 15.9998 21.5355 15.5355C21.9998 15.0712 22.3681 14.52 22.6194 13.9134C22.8707 13.3068 23 12.6566 23 12Z",
            fill: "currentColor",
          }),
        );
      }
      function C(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M8.22 33.93C9.00446 33.7747 9.71061 33.3517 10.2177 32.7334C10.7248 32.115 11.0013 31.3397 11 30.54V25H28V4H4V30.83C4.00192 31.3 4.11422 31.7629 4.32787 32.1815C4.54152 32.6002 4.85053 32.9627 5.23 33.24C5.65215 33.5582 6.13651 33.7841 6.65162 33.903C7.16674 34.0218 7.7011 34.0311 8.22 33.93Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M14 30.54C13.9892 31.7631 13.6434 32.9598 13 34H30.7C33.42 34 34 32 34 30.25V28H14V30.54Z",
            fill: "currentColor",
          }),
        );
      }
      function p(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M32 30L34 7L25.32 13.41L18 4L10.68 13.41L2 7L4 30H32Z",
            fill: "currentColor",
          }),
        );
      }
      function S(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M17.9997 6.16803L22.2873 2L23.9155 7.75347L29.7123 6.287L28.2465 12.0838L34 13.7127L29.8313 17.9997L34 22.2873L28.2465 23.9155L29.7123 29.7123L23.9155 28.2465L22.2873 34L17.9997 29.8313L13.7127 34L12.0838 28.2465L6.287 29.7123L7.75347 23.9155L2 22.2873L6.16803 17.9997L2 13.7127L7.75347 12.0838L6.287 6.287L12.0838 7.75347L13.7127 2L17.9997 6.16803Z",
            fill: "currentColor",
          }),
        );
      }
      function w(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M32 3.83C20 6.44 13.86 -1.37 6 3.83V32H10V17.8C16.19 16.66 22.11 21.6 32 19.45L28.27 11.64L32 3.83Z",
            fill: "currentColor",
          }),
        );
      }
      function L(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M33.63 8.04999L30.11 20.81C29.9416 21.453 29.5645 22.0218 29.0378 22.4273C28.5111 22.8327 27.8647 23.0517 27.2 23.05H14.75C14.1022 23.0506 13.4715 22.8415 12.9524 22.454C12.4333 22.0664 12.0536 21.5213 11.87 20.9L7.56 8.04999H2V4.04999H8.28C8.90845 4.05116 9.52067 4.24967 10.0302 4.61749C10.5398 4.98532 10.921 5.50388 11.12 6.09999L11.78 8.09999L33.63 8.04999ZM15 27.05C14.5055 27.05 14.0222 27.1966 13.6111 27.4713C13.2 27.746 12.8795 28.1365 12.6903 28.5933C12.5011 29.0501 12.4516 29.5528 12.548 30.0377C12.6445 30.5227 12.8826 30.9681 13.2322 31.3178C13.5819 31.6674 14.0273 31.9055 14.5123 32.002C14.9972 32.0984 15.4999 32.0489 15.9567 31.8597C16.4135 31.6705 16.804 31.35 17.0787 30.9389C17.3534 30.5278 17.5 30.0444 17.5 29.55C17.5 28.8869 17.2366 28.2511 16.7678 27.7822C16.2989 27.3134 15.663 27.05 15 27.05ZM27 27.05C26.5055 27.05 26.0222 27.1966 25.6111 27.4713C25.2 27.746 24.8795 28.1365 24.6903 28.5933C24.5011 29.0501 24.4516 29.5528 24.548 30.0377C24.6445 30.5227 24.8826 30.9681 25.2322 31.3178C25.5819 31.6674 26.0273 31.9055 26.5123 32.002C26.9972 32.0984 27.4999 32.0489 27.9567 31.8597C28.4135 31.6705 28.804 31.35 29.0787 30.9389C29.3534 30.5278 29.5 30.0444 29.5 29.55C29.5 28.8869 29.2366 28.2511 28.7678 27.7822C28.2989 27.3134 27.663 27.05 27 27.05Z",
            fill: "currentColor",
          }),
        );
      }
      function v(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M20 11.85V17L23.41 20.42L20.59 23.24L16 18.68V11.85H20ZM29 18.43C28.9612 19.5207 28.7589 20.5994 28.4 21.63L32.16 23C32.6583 21.5767 32.9414 20.0869 33 18.58L29 18.43ZM28.68 15.33L32.56 14.33C32.1998 12.8866 31.6268 11.5048 30.86 10.23L27.44 12.3C28.0013 13.2418 28.416 14.2635 28.67 15.33H28.68ZM28.09 6.90001C27.011 5.91173 25.7909 5.08941 24.47 4.46001L22.74 8.07C23.7087 8.53467 24.6047 9.13764 25.4 9.86L28.09 6.90001ZM26.93 24.42C25.8301 25.9503 24.3555 27.1724 22.6475 27.969C20.9396 28.7656 19.0557 29.11 17.1764 28.9693C15.297 28.8285 13.4854 28.2073 11.9152 27.1652C10.3449 26.1231 9.06879 24.6951 8.20908 23.018C7.34937 21.3409 6.93495 19.4711 7.00556 17.5879C7.07616 15.7046 7.62943 13.8711 8.61229 12.2631C9.59516 10.6552 10.9747 9.32667 12.6185 8.40506C14.2624 7.48345 16.1154 6.99963 18 7.00001C18.5659 6.99777 19.1311 7.04124 19.69 7.13001L20.3 3.18001C19.5393 3.05968 18.7702 2.99949 18 3.00001C15.527 2.99797 13.0918 3.60743 10.9112 4.77411C8.7307 5.9408 6.87245 7.62852 5.5019 9.68704C4.13134 11.7456 3.29102 14.111 3.05572 16.5728C2.82043 19.0347 3.19746 21.5165 4.15326 23.7973C5.10906 26.0782 6.61398 28.0874 8.53404 29.646C10.4541 31.2046 12.7297 32.2643 15.1584 32.7308C17.587 33.1972 20.0933 33.056 22.4542 32.3196C24.8151 31.5832 26.9572 30.2745 28.69 28.51V28.51L28.77 28.43L28.82 28.38C29.3109 27.8727 29.7654 27.3313 30.18 26.76L26.93 24.42Z",
            fill: "currentColor",
          }),
        );
      }
      function D(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2 6V27H12L18 34L24 27H34V6H2ZM9.5 19C9.00555 19 8.5222 18.8534 8.11107 18.5787C7.69995 18.304 7.37952 17.9135 7.1903 17.4567C7.00108 16.9999 6.95157 16.4972 7.04804 16.0123C7.1445 15.5273 7.3826 15.0819 7.73223 14.7322C8.08186 14.3826 8.52732 14.1445 9.01227 14.048C9.49723 13.9516 9.99989 14.0011 10.4567 14.1903C10.9135 14.3795 11.304 14.7 11.5787 15.1111C11.8534 15.5222 12 16.0055 12 16.5C12 16.8283 11.9353 17.1534 11.8097 17.4567C11.6841 17.76 11.4999 18.0356 11.2678 18.2678C11.0356 18.4999 10.76 18.6841 10.4567 18.8097C10.1534 18.9353 9.8283 19 9.5 19ZM18 19C17.5055 19 17.0222 18.8534 16.6111 18.5787C16.2 18.304 15.8795 17.9135 15.6903 17.4567C15.5011 16.9999 15.4516 16.4972 15.548 16.0123C15.6445 15.5273 15.8826 15.0819 16.2322 14.7322C16.5819 14.3826 17.0273 14.1445 17.5123 14.048C17.9972 13.9516 18.4999 14.0011 18.9567 14.1903C19.4135 14.3795 19.804 14.7 20.0787 15.1111C20.3534 15.5222 20.5 16.0055 20.5 16.5C20.5 16.8283 20.4353 17.1534 20.3097 17.4567C20.1841 17.76 19.9999 18.0356 19.7678 18.2678C19.5356 18.4999 19.26 18.6841 18.9567 18.8097C18.6534 18.9353 18.3283 19 18 19ZM26.5 19C26.0055 19 25.5222 18.8534 25.1111 18.5787C24.7 18.304 24.3795 17.9135 24.1903 17.4567C24.0011 16.9999 23.9516 16.4972 24.048 16.0123C24.1445 15.5273 24.3826 15.0819 24.7322 14.7322C25.0819 14.3826 25.5273 14.1445 26.0123 14.048C26.4972 13.9516 26.9999 14.0011 27.4567 14.1903C27.9135 14.3795 28.304 14.7 28.5787 15.1111C28.8534 15.5222 29 16.0055 29 16.5C29 17.163 28.7366 17.7989 28.2678 18.2678C27.7989 18.7366 27.163 19 26.5 19Z",
            fill: "currentColor",
          }),
        );
      }
      function T(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M3 27.6503L13.8393 16.7238C12.5466 13.3983 13.2648 9.49449 15.9937 6.74736C18.8662 3.85564 23.175 3.2773 26.6221 4.86774L19.7308 11.8003L24.0396 16.1379L31.0745 9.20532C32.798 12.6754 32.0799 17.013 29.2074 19.9047C26.4784 22.6518 22.6005 23.3747 19.2971 22.0735L8.45782 33L3 27.6503Z",
            fill: "currentColor",
          }),
        );
      }
      function M(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M9.99999 4H22V16H18.06V10.73L5.38999 23.39L2.60999 20.61L15.27 7.94H9.99999V4ZM26 28.06H20.73L33.39 15.39L30.61 12.61L17.94 25.27V20H14V32H26V28.06Z",
            fill: "currentColor",
          }),
        );
      }
      function B(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M28.1684 2.16431L23.5793 6.75343L29.2362 12.4103L33.8253 7.82116L28.1684 2.16431Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M20.76 9.58999L5.67 24.67L4 32L11.33 30.33L26.41 15.24L20.76 9.58999Z",
            fill: "currentColor",
          }),
        );
      }
      function y(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M30 35L18 28L6 35V2H30V35Z",
            fill: "currentColor",
          }),
        );
      }
      function b(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3V3ZM7.00001 18C7.00169 15.7749 7.67812 13.6027 8.94001 11.77L24.23 27.06C22.5787 28.1948 20.6488 28.857 18.6486 28.9752C16.6484 29.0933 14.654 28.6629 12.8805 27.7304C11.1071 26.7978 9.62204 25.3986 8.58569 23.6838C7.54934 21.969 7.00105 20.0037 7.00001 18V18ZM27.06 24.23L11.77 8.94C13.8875 7.49109 16.4449 6.82796 18.9996 7.06536C21.5544 7.30275 23.9457 8.42573 25.76 10.24C27.5743 12.0543 28.6973 14.4457 28.9347 17.0004C29.172 19.5551 28.5089 22.1125 27.06 24.23V24.23Z",
            fill: "currentColor",
          }),
        );
      }
      function V(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M18 0L22.888 11.2722L35.119 12.4377L25.909 20.5698L28.5801 32.5623L18 26.316L7.41987 32.5623L10.091 20.5698L0.880983 12.4377L13.112 11.2722L18 0Z",
            fill: "currentColor",
          }),
        );
      }
      function E(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3Z",
            fill: "currentColor",
          }),
        );
      }
      function R(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("rect", {
            x: "4",
            y: "4",
            width: "28",
            height: "28",
            fill: "currentColor",
          }),
        );
      }
      function P(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18 1L1 31.2222H35L18 1Z",
            fill: "currentColor",
          }),
        );
      }
      function A(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M31.4799 6.31003C30.7506 5.57832 29.884 4.99776 28.9299 4.60163C27.9758 4.2055 26.9529 4.00159 25.9199 4.00159C24.8868 4.00159 23.8639 4.2055 22.9098 4.60163C21.9557 4.99776 21.0891 5.57832 20.3599 6.31003L17.9999 8.51003L15.6399 6.31003C14.147 4.90006 12.1628 4.12852 10.1096 4.15966C8.05643 4.1908 6.0965 5.02218 4.64713 6.47677C3.19775 7.93136 2.37342 9.89425 2.34965 11.9475C2.32588 14.0008 3.10454 15.9823 4.51986 17.47L17.9999 31L31.4799 17.47C32.9552 15.9877 33.7835 13.9814 33.7835 11.89C33.7835 9.79863 32.9552 7.79235 31.4799 6.31003V6.31003Z",
            fill: "currentColor",
          }),
        );
      }
      function x(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M31.4359 18L18.2179 35L5 18L18.2179 1L31.4359 18Z",
            fill: "currentColor",
          }),
        );
      }
      function G(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M7.48 21.11C7.00858 22.3527 6.76797 23.6709 6.77 25V30H1V26.38C0.999999 25.6726 1.13949 24.9722 1.41048 24.3189C1.68148 23.6655 2.07866 23.0719 2.5793 22.5722C3.07994 22.0725 3.67421 21.6764 4.32809 21.4067C4.98198 21.1369 5.68265 20.9987 6.39 21C6.75605 21.001 7.12114 21.0378 7.48 21.11ZM6.27 11C5.57777 11 4.90108 11.2053 4.3255 11.5899C3.74993 11.9744 3.30133 12.5211 3.03642 13.1606C2.77151 13.8002 2.7022 14.5039 2.83725 15.1828C2.9723 15.8618 3.30564 16.4854 3.79513 16.9749C4.28461 17.4644 4.90825 17.7977 5.58718 17.9328C6.26612 18.0678 6.96985 17.9985 7.60939 17.7336C8.24893 17.4687 8.79556 17.0201 9.18014 16.4445C9.56473 15.8689 9.77 15.1922 9.77 14.5C9.77 13.5717 9.40125 12.6815 8.74487 12.0251C8.0885 11.3688 7.19826 11 6.27 11ZM13.27 10.5C13.27 9.60999 13.5339 8.73996 14.0284 7.99994C14.5229 7.25991 15.2257 6.68314 16.0479 6.34254C16.8702 6.00195 17.775 5.91283 18.6479 6.08647C19.5208 6.2601 20.3226 6.68868 20.952 7.31802C21.5813 7.94736 22.0099 8.74918 22.1835 9.6221C22.3572 10.495 22.2681 11.3998 21.9275 12.2221C21.5869 13.0443 21.0101 13.7471 20.2701 14.2416C19.53 14.7361 18.66 15 17.77 15C17.1787 15.0013 16.5929 14.8858 16.0464 14.6601C15.4998 14.4345 15.0032 14.103 14.5851 13.6849C14.167 13.2668 13.8355 12.7702 13.6099 12.2236C13.3842 11.6771 13.2687 11.0913 13.27 10.5ZM24.77 25V30H10.77V25C10.77 23.1435 11.5075 21.363 12.8203 20.0503C14.133 18.7375 15.9135 18 17.77 18C19.6265 18 21.407 18.7375 22.7197 20.0503C24.0325 21.363 24.77 23.1435 24.77 25ZM34.77 26.38V30H28.77V25C28.7738 23.6921 28.54 22.3944 28.08 21.17C28.5076 21.0576 28.9479 21.0004 29.39 21C30.8169 21 32.1853 21.5668 33.1942 22.5758C34.2032 23.5847 34.77 24.9531 34.77 26.38ZM29.27 18C28.5778 18 27.9011 17.7947 27.3255 17.4101C26.7499 17.0256 26.3013 16.4789 26.0364 15.8394C25.7715 15.1999 25.7022 14.4961 25.8373 13.8172C25.9723 13.1383 26.3056 12.5146 26.7951 12.0251C27.2846 11.5356 27.9083 11.2023 28.5872 11.0673C29.2661 10.9322 29.9699 11.0015 30.6094 11.2664C31.2489 11.5313 31.7956 11.9799 32.1801 12.5555C32.5647 13.1311 32.77 13.8078 32.77 14.5C32.77 15.4283 32.4013 16.3185 31.7449 16.9749C31.0885 17.6313 30.1983 18 29.27 18Z",
            fill: "currentColor",
          }),
        );
      }
      function k(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M18 26V31H2V26C2 23.8783 2.84285 21.8434 4.34315 20.3431C5.84344 18.8429 7.87827 18 10 18C12.1217 18 14.1566 18.8429 15.6569 20.3431C17.1571 21.8434 18 23.8783 18 26ZM10 15C10.89 15 11.76 14.7361 12.5001 14.2416C13.2401 13.7471 13.8169 13.0443 14.1575 12.2221C14.4981 11.3998 14.5872 10.495 14.4135 9.6221C14.2399 8.74918 13.8113 7.94736 13.182 7.31802C12.5526 6.68868 11.7508 6.2601 10.8779 6.08647C10.005 5.91283 9.10019 6.00195 8.27792 6.34254C7.45566 6.68314 6.75285 7.25991 6.25839 7.99994C5.76392 8.73996 5.5 9.60999 5.5 10.5C5.49868 11.0913 5.61418 11.6771 5.83986 12.2236C6.06554 12.7702 6.39695 13.2668 6.81508 13.6849C7.23321 14.103 7.72981 14.4345 8.27637 14.6601C8.82293 14.8858 9.40868 15.0013 10 15ZM31.66 18.34C30.8643 17.5434 29.9094 16.9238 28.8578 16.5216C27.8062 16.1194 26.6815 15.9437 25.5574 16.006C24.4332 16.0683 23.3348 16.3672 22.3341 16.8831C21.3334 17.399 20.4528 18.1204 19.75 19C21.2201 21.0373 22.0077 23.4877 22 26V29H34V24C34.0008 22.9491 33.7946 21.9084 33.3931 20.9372C32.9916 19.966 32.4027 19.0835 31.66 18.34ZM26 13C26.89 13 27.76 12.7361 28.5001 12.2416C29.2401 11.7471 29.8169 11.0443 30.1575 10.2221C30.4981 9.39981 30.5872 8.49501 30.4135 7.6221C30.2399 6.74918 29.8113 5.94736 29.182 5.31802C28.5526 4.68868 27.7508 4.2601 26.8779 4.08647C26.005 3.91283 25.1002 4.00195 24.2779 4.34254C23.4557 4.68314 22.7529 5.25991 22.2584 5.99994C21.7639 6.73996 21.5 7.60999 21.5 8.5C21.4987 9.09132 21.6142 9.67708 21.8399 10.2236C22.0655 10.7702 22.397 11.2668 22.8151 11.6849C23.2332 12.103 23.7298 12.4345 24.2764 12.6601C24.8229 12.8858 25.4087 13.0013 26 13Z",
            fill: "currentColor",
          }),
        );
      }
      function I(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M30 32H6V31C6 27.8174 7.26428 24.7652 9.51472 22.5147C11.7652 20.2643 14.8174 19 18 19C21.1826 19 24.2348 20.2643 26.4853 22.5147C28.7357 24.7652 30 27.8174 30 31V32ZM18 3C16.8133 3 15.6533 3.35189 14.6666 4.01118C13.6799 4.67047 12.9108 5.60754 12.4567 6.7039C12.0026 7.80026 11.8838 9.00666 12.1153 10.1705C12.3468 11.3344 12.9182 12.4035 13.7574 13.2426C14.5965 14.0818 15.6656 14.6532 16.8295 14.8847C17.9933 15.1162 19.1997 14.9974 20.2961 14.5433C21.3925 14.0892 22.3295 13.3201 22.9888 12.3334C23.6481 11.3467 24 10.1867 24 9C24 7.4087 23.3679 5.88258 22.2426 4.75736C21.1174 3.63214 19.5913 3 18 3Z",
            fill: "currentColor",
          }),
        );
      }
      function H(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M3.1154 27.6838L8.39576 20.3968C8.50481 20.251 8.55119 20.0677 8.52472 19.8875C8.49836 19.7073 8.40123 19.5451 8.25498 19.4367L4.25152 16.3806C4.10812 16.27 4.01405 16.1073 3.98977 15.9278C3.96548 15.7484 4.01295 15.5665 4.1219 15.4218C4.23074 15.2772 4.39241 15.1813 4.57159 15.1549L9.09981 14.4028C9.32514 14.3675 9.51799 14.2222 9.61435 14.0155C9.7106 13.8088 9.6977 13.5677 9.57978 13.3724L4.58729 5.03256C4.48403 4.85393 4.46631 4.63857 4.53905 4.4456C4.61168 4.25254 4.76711 4.10236 4.96247 4.0363C5.15783 3.97023 5.37244 3.99517 5.54735 4.10444L14.508 9.91936C14.6733 10.0263 14.8763 10.0575 15.066 10.0049C15.2557 9.95229 15.4137 9.82092 15.5001 9.64415L18.0604 4.38927C18.1473 4.22213 18.299 4.098 18.4801 4.0458C18.6611 3.99362 18.8556 4.01791 19.0182 4.11307C19.1808 4.20823 19.2973 4.36585 19.3405 4.54929L20.595 10.5241H20.5949C20.6381 10.7286 20.772 10.9025 20.9588 10.9965C21.1455 11.0905 21.365 11.0945 21.5551 11.0073L28.3075 7.86803L28.3074 7.86792C28.4907 7.78118 28.7031 7.78009 28.8873 7.86497C29.0715 7.94996 29.2086 8.11217 29.2615 8.30796C29.3146 8.50376 29.278 8.71301 29.1619 8.87926L24.9856 14.9949C24.8537 15.1863 24.8279 15.4317 24.9172 15.6464C25.0064 15.8611 25.1985 16.0159 25.4273 16.0574L32.3943 17.3375C32.6059 17.363 32.7939 17.4852 32.903 17.6684C33.0122 17.8515 33.0302 18.075 32.9519 18.2733C32.8737 18.4716 32.7079 18.6224 32.503 18.6816L25.4176 21.0338C25.237 21.0946 25.0898 21.2276 25.011 21.4011C24.9321 21.5746 24.9287 21.773 25.0017 21.9491L28.4131 30.2248C28.491 30.4095 28.4841 30.6189 28.3942 30.7981C28.3043 30.9773 28.1405 31.108 27.9459 31.156C27.7513 31.2039 27.5454 31.1642 27.3827 31.0473L19.558 25.5493C19.3872 25.4307 19.1719 25.3953 18.972 25.4531C18.7721 25.5108 18.6089 25.6554 18.5275 25.847L15.8106 32.3594C15.734 32.5434 15.5814 32.6852 15.3924 32.7481C15.2032 32.8108 14.9962 32.7886 14.8247 32.6871C14.6533 32.5855 14.5343 32.4147 14.4985 32.2187L13.3368 25.9047C13.2995 25.7027 13.1738 25.528 12.9942 25.4284C12.8147 25.3286 12.5999 25.3144 12.4088 25.3894L3.92498 28.7113C3.7422 28.7784 3.5395 28.7648 3.36723 28.674C3.19495 28.5832 3.06926 28.4237 3.02126 28.2351C2.97325 28.0464 3.00737 27.8461 3.11533 27.6841L3.1154 27.6838Z",
            fill: "currentColor",
          }),
        );
      }
      function F(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M32.1364 3.05916C32.3257 3.11958 32.4978 3.22426 32.6386 3.36452C32.7774 3.50482 32.8811 3.67603 32.941 3.86413C33.001 4.05222 33.0155 4.25184 32.9834 4.44663L31.7339 12.0377C31.6841 12.3356 31.5288 12.6056 31.2965 12.7987L19.2946 22.7251L17.1703 20.6009L27.2742 10.497L25.5074 8.7301L15.406 18.8365L13.2817 16.7123L23.2694 4.69904C23.4614 4.46893 23.7297 4.31549 24.0254 4.2667L31.5502 3.01714C31.7462 2.98434 31.9471 2.99875 32.1364 3.05916ZM9.26762 16.7603C9.59525 16.7574 9.91089 16.8834 10.1466 17.111L18.8934 25.8578C19.1211 26.0935 19.247 26.4092 19.2442 26.7368C19.2413 27.0644 19.1099 27.3778 18.8782 27.6095C18.6465 27.8412 18.3331 27.9726 18.0055 27.9754C17.6779 27.9783 17.3622 27.8523 17.1266 27.6247L14.6275 25.1256L10.1466 29.6065L11.3961 30.8561C11.5155 30.9713 11.6107 31.1092 11.6761 31.2617C11.7416 31.4141 11.7761 31.5781 11.7775 31.744C11.779 31.9099 11.7474 32.0745 11.6845 32.228C11.6217 32.3816 11.5289 32.5211 11.4116 32.6384C11.2943 32.7557 11.1548 32.8485 11.0012 32.9114C10.8476 32.9742 10.6831 33.0058 10.5172 33.0044C10.3513 33.0029 10.1873 32.9684 10.0348 32.903C9.88239 32.8375 9.74451 32.7423 9.62925 32.6229L3.38147 26.3752C3.26213 26.2599 3.16694 26.122 3.10145 25.9696C3.03596 25.8171 3.00149 25.6531 3.00005 25.4872C2.99861 25.3213 3.03022 25.1568 3.09305 25.0032C3.15588 24.8496 3.24866 24.7101 3.36599 24.5928C3.48331 24.4755 3.62283 24.3827 3.77639 24.3199C3.92996 24.257 4.0945 24.2254 4.26041 24.2269C4.42633 24.2283 4.59029 24.2628 4.74274 24.3283C4.89519 24.3938 5.03308 24.4889 5.14834 24.6083L6.3979 25.8578L10.8788 21.3769L8.37969 18.8778C8.15207 18.6422 8.02613 18.3265 8.02897 17.9989C8.03182 17.6713 8.16323 17.3579 8.39491 17.1262C8.62659 16.8945 8.93999 16.7631 9.26762 16.7603Z",
            fill: "currentColor",
          }),
        );
      }
      function U(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M17.6253 34.113C17.743 34.1717 17.8718 34.2012 18 34.2012C18.1282 34.2012 18.257 34.1717 18.3748 34.113C18.8953 33.8524 31.1275 27.6036 31.1275 16.0461L31.1274 8.2254C31.1274 7.76274 30.7522 7.38762 30.2892 7.38762C30.2258 7.38762 23.8719 7.32574 18.5922 2.04672C18.265 1.71954 17.7346 1.71954 17.4075 2.04672C12.1509 7.30272 5.77225 7.38762 5.71045 7.38762C5.24779 7.38762 4.87231 7.76274 4.87231 8.2254V16.0464C4.87278 27.6033 17.1048 33.8523 17.6253 34.113H17.6253Z",
            fill: "currentColor",
          }),
        );
      }
      function O(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.50571 11.2155C3.87965 9.34584 5.52131 8 7.42804 8H28.5578C30.4645 8 32.1061 9.34584 32.4801 11.2155L32.9759 13.6947C33.0378 14.0041 32.8011 14.2928 32.4856 14.2928H3.50017C3.18465 14.2928 2.948 14.0041 3.00988 13.6947L3.50571 11.2155ZM14.2172 16.8099H4.42812C4.27911 16.8099 4.16319 16.9394 4.17965 17.0875L5.20967 26.3577C5.32221 27.3706 6.17834 28.1368 7.19744 28.1368H28.7883C29.8074 28.1368 30.6635 27.3706 30.7761 26.3577L31.8061 17.0875C31.8226 16.9394 31.7066 16.8099 31.5576 16.8099H21.7686V19.8441C21.7686 20.9486 20.8731 21.8441 19.7686 21.8441H16.2172C15.1127 21.8441 14.2172 20.9486 14.2172 19.8441V16.8099ZM17.2343 16.8099C16.9582 16.8099 16.7343 17.0337 16.7343 17.3099V18.827C16.7343 19.1031 16.9582 19.327 17.2343 19.327H18.7514C19.0276 19.327 19.2514 19.1031 19.2514 18.827V17.3099C19.2514 17.0337 19.0276 16.8099 18.7514 16.8099H17.2343Z",
            fill: "currentColor",
          }),
        );
      }
      function N(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M31.9513 28.4678L31.6814 28.3401C31.4615 28.2254 31.2594 28.0795 31.0814 27.9068L26.6464 23.4718L27.1797 22.9385C27.3887 22.7296 27.5545 22.4816 27.6676 22.2086C27.7807 21.9356 27.8389 21.6431 27.8389 21.3476C27.8389 21.0521 27.7807 20.7595 27.6676 20.4865C27.5545 20.2136 27.3887 19.9656 27.1797 19.7567C27.1101 19.687 27.0274 19.6317 26.9364 19.594C26.8454 19.5563 26.7479 19.5369 26.6494 19.5369C26.5509 19.5369 26.4533 19.5563 26.3624 19.594C26.2714 19.6317 26.1887 19.687 26.1191 19.7567L25.1055 20.77L22.6057 18.1838L32.1273 9.16542L32.234 9.06543C32.3638 8.94364 32.4441 8.77816 32.4593 8.60079L32.9926 3.83112C32.9966 3.80307 32.9986 3.77478 32.9986 3.74646C32.9985 3.54799 32.921 3.35739 32.7826 3.21516C32.7023 3.13644 32.6054 3.07672 32.499 3.04038C32.3926 3.00404 32.2793 2.99201 32.1677 3.00518L27.398 3.53847C27.2201 3.55335 27.0539 3.63334 26.9314 3.76312L17.9986 13.1935L9.06592 3.76312C8.94377 3.63368 8.77827 3.55371 8.60095 3.53847L3.83094 3.00518C3.71926 2.99201 3.60605 3.00404 3.49963 3.04038C3.39321 3.07672 3.29629 3.13644 3.21598 3.21516C3.07757 3.35739 3.00009 3.54799 3 3.74646C3.00002 3.77478 3.00202 3.80307 3.006 3.83112L3.53929 8.60079C3.55452 8.77816 3.63477 8.94364 3.76461 9.06543L3.87128 9.16542L13.393 18.1838L10.8931 20.77L9.87953 19.7567C9.80992 19.687 9.72725 19.6317 9.63625 19.594C9.54526 19.5563 9.44773 19.5369 9.34923 19.5369C9.25073 19.5369 9.15321 19.5563 9.06221 19.594C8.97122 19.6317 8.88855 19.687 8.81894 19.7567C8.61002 19.9656 8.44429 20.2136 8.33123 20.4866C8.21816 20.7596 8.15996 21.0521 8.15996 21.3476C8.15996 21.643 8.21816 21.9356 8.33123 22.2086C8.44429 22.4815 8.61002 22.7296 8.81894 22.9385L9.35223 23.4718L4.9172 27.9068C4.7392 28.0795 4.53711 28.2254 4.31724 28.3401L4.04726 28.4678C3.77896 28.599 3.54621 28.7929 3.36868 29.0331C3.19116 29.2733 3.07407 29.5527 3.02733 29.8477C2.97954 30.1411 3.00219 30.4417 3.0934 30.7247C3.18462 31.0077 3.34179 31.2649 3.55196 31.4752L4.52723 32.4498C4.8798 32.8009 5.35723 32.9979 5.85481 32.9975C5.95521 32.9973 6.05547 32.9898 6.15479 32.9751C6.44819 32.9294 6.7262 32.8135 6.96513 32.6372C7.20407 32.4609 7.39684 32.2294 7.52702 31.9625L7.67701 31.6625C7.7898 31.4475 7.93392 31.2505 8.10465 31.0779L12.532 26.6505L13.062 27.1805C13.2709 27.3894 13.5189 27.5552 13.7919 27.6682C14.0649 27.7813 14.3574 27.8395 14.6529 27.8395C14.9483 27.8395 15.2409 27.7813 15.5139 27.6682C15.7868 27.5552 16.0348 27.3894 16.2438 27.1805C16.3844 27.0398 16.4634 26.849 16.4634 26.6501C16.4634 26.4511 16.3844 26.2603 16.2438 26.1196L15.2302 25.106L17.9933 22.4395L18.0016 22.4315L18.01 22.4395L20.7728 25.106L19.7592 26.1196C19.6186 26.2603 19.5396 26.4511 19.5396 26.6501C19.5396 26.849 19.6186 27.0398 19.7592 27.1805C19.9681 27.3894 20.2161 27.5552 20.4891 27.6682C20.7621 27.7813 21.0546 27.8395 21.3501 27.8395C21.6455 27.8395 21.9381 27.7813 22.2111 27.6682C22.484 27.5552 22.732 27.3894 22.941 27.1805L23.4709 26.6505L27.8983 31.0779C28.0692 31.2503 28.2134 31.4474 28.3259 31.6625L28.4759 31.9625C28.6061 32.2294 28.7989 32.4609 29.0378 32.6372C29.2767 32.8135 29.5548 32.9294 29.8482 32.9751C29.9475 32.9898 30.0477 32.9973 30.1481 32.9975C30.6457 32.9979 31.1231 32.8009 31.4757 32.4498L32.451 31.4752C32.6611 31.2649 32.8183 31.0077 32.9095 30.7247C33.0008 30.4417 33.0234 30.1411 32.9756 29.8477C32.9284 29.5522 32.8107 29.2726 32.6324 29.0323C32.4541 28.7921 32.2205 28.5985 31.9513 28.4678Z",
            fill: "currentColor",
          }),
        );
      }
      function Z(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.73 28.34C15.6223 29.3235 18.732 29.4785 21.7078 28.7876C24.6836 28.0967 27.4069 26.5873 29.57 24.43L36 18L29.57 11.57C28 10 26.5 9.00003 23.94 7.94003C20.9843 6.77799 17.7541 6.50247 14.6444 7.14715C11.5346 7.79183 8.68012 9.32878 6.43 11.57L0 18L6.43 24.43C8.10419 26.1042 10.2596 27.5 12.73 28.34ZM18 25C21.866 25 25 21.866 25 18C25 14.134 21.866 11 18 11C14.134 11 11 14.134 11 18C11 21.866 14.134 25 18 25Z",
            fill: "currentColor",
          }),
        );
      }
      function q(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M32.991 20.3742C31.996 19.9541 30.8307 20.4415 30.3037 21.4683L27.0772 20.1006C27.0852 19.9739 27.089 19.8507 27.089 19.724V16.0418L30.3197 14.6703C30.8511 15.6771 32.0045 16.1567 32.9913 15.7405C34.0339 15.2966 34.4896 14.0161 34.0061 12.8824C33.784 12.3555 33.4034 11.9551 32.9517 11.7171C33.0943 11.2297 33.0705 10.6745 32.8487 10.1515C32.3691 9.01382 31.1322 8.45483 30.0896 8.89511C29.0945 9.31523 28.6348 10.4924 29.0075 11.5864L26.8273 12.5099C25.8561 8.53397 22.2688 5.58887 17.9998 5.58887C13.7269 5.58887 10.1434 8.53403 9.17233 12.5099L6.98818 11.5864C7.36084 10.4924 6.90111 9.31523 5.90995 8.89511C4.86733 8.45519 3.63076 9.01393 3.14725 10.1515C2.92518 10.6746 2.90537 11.2297 3.04424 11.7171C2.59634 11.9551 2.21198 12.3554 1.9898 12.8824C1.51028 14.0161 1.96601 15.2966 3.00863 15.7405C3.99182 16.1567 5.14919 15.6771 5.68016 14.6703L8.91086 16.0418L8.91121 19.7243C8.91121 19.851 8.9152 19.9742 8.92305 20.1009L5.69235 21.4686C5.16501 20.4419 3.99957 19.9544 3.00888 20.3745C1.96626 20.8184 1.51053 22.0986 1.99005 23.2326C2.21212 23.7557 2.59662 24.1599 3.04449 24.3979C2.90586 24.8853 2.92566 25.4405 3.1475 25.9635C3.63101 27.0972 4.86794 27.6602 5.9102 27.2199C6.89339 26.7998 7.35314 25.6385 7.00028 24.5562L9.80681 23.3671C9.9854 23.716 10.1913 24.0529 10.4253 24.3702L11.9593 26.4751V26.9902C11.9593 28.8809 13.4933 30.4108 15.3841 30.4108H20.6164C22.5071 30.4108 24.037 28.8808 24.037 26.9902V26.4751L25.575 24.3702C25.809 24.0531 26.0149 23.716 26.1935 23.3671L29 24.5562C28.6433 25.6383 29.103 26.7998 30.0901 27.2199C31.1327 27.6598 32.3693 27.0971 32.8492 25.9635C33.0712 25.4404 33.095 24.8853 32.9522 24.3979C33.404 24.1599 33.7844 23.7557 34.0066 23.2326C34.49 22.0986 34.0339 20.8184 32.9917 20.3742L32.991 20.3742ZM24.6825 18.0554C24.6825 18.3885 24.5993 18.7016 24.4485 18.987C24.0324 19.8035 23.0808 20.3706 21.9671 20.3706C21.111 20.3706 20.346 19.8194 19.8503 19.1102C19.4738 18.5792 19.2516 17.9607 19.2516 17.4135C19.2516 17.1953 19.2872 17.0014 19.3585 16.8306C19.6796 16.0102 20.7262 15.7446 21.9667 15.7446C23.0924 15.7446 24.0558 16.3235 24.464 17.1517C24.6073 17.429 24.6825 17.7343 24.6825 18.0554L24.6825 18.0554ZM11.3124 18.0554C11.3124 17.7343 11.3877 17.429 11.5306 17.1518C11.9428 16.3234 12.9062 15.7446 14.0279 15.7446C15.2685 15.7446 16.3149 16.0103 16.6361 16.8307C16.7074 17.0013 16.743 17.1954 16.743 17.4136C16.743 17.9604 16.5209 18.5749 16.1443 19.1064C15.6529 19.8199 14.8879 20.3707 14.0275 20.3707C12.9176 20.3707 11.9622 19.8038 11.5461 18.9872C11.3955 18.7016 11.3124 18.3885 11.3124 18.0554L11.3124 18.0554ZM19.0341 21.8843C19.0341 22.578 18.5704 23.1407 17.9995 23.1407C17.4286 23.1407 16.9649 22.5776 16.9649 21.8843C16.9649 21.3691 17.2227 20.481 17.5912 20.0649L17.9995 19.8942L18.4078 20.0649C18.7764 20.4813 19.0341 21.3692 19.0341 21.8843Z",
            fill: "currentColor",
          }),
        );
      }
      function W(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M32.895 7.34625L28.9237 3.375L18.135 14.1525L7.34625 3.375L3.375 7.34625L14.1525 18.135L3.375 28.9237L7.34625 32.895L18.135 22.1175L28.9237 32.895L32.895 28.9237L22.1175 18.135L32.895 7.34625Z",
            fill: "currentColor",
          }),
        );
      }
      function $(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M16 34V21H3V16H16V3H21V16H34V21H21V34H16Z",
            fill: "currentColor",
          }),
        );
      }
      function z(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M33 16H3V21H33V16Z",
            fill: "currentColor",
          }),
        );
      }
      function Q(e) {
        return n.createElement(
          "svg",
          {
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16.2114 23.9054C18.1701 23.9054 19.7587 25.494 19.7587 27.4527C19.7587 29.4114 18.1701 31 16.2114 31C14.2526 31 12.6641 29.4114 12.6641 27.4527C12.6641 25.494 14.2527 23.9054 16.2114 23.9054Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7.01091 9.7964C7.11325 7.49343 8.06952 5.32707 9.69945 3.69779C11.4318 1.96544 13.7608 1 16.2108 1C18.6611 1 20.9899 1.96534 22.7222 3.69779C24.4545 5.42937 25.42 7.75911 25.42 10.2092C25.42 11.8776 24.9663 13.5012 24.109 14.9322C23.2523 16.3624 22.0178 17.5368 20.5477 18.324C20.1242 18.5512 19.761 18.8723 19.5136 19.2866C19.2654 19.7001 19.1616 20.179 19.1616 20.6579V21.3933C19.1616 21.6584 18.9457 21.8743 18.6815 21.8743H13.7404C13.4761 21.8743 13.2602 21.6584 13.2602 21.3933V20.6579C13.2602 19.1043 13.6626 17.5963 14.4611 16.2636C15.2603 14.928 16.4065 13.8673 17.7764 13.1333C18.3057 12.85 18.7488 12.4238 19.0573 11.9085C19.365 11.394 19.5178 10.8078 19.5178 10.2092C19.5178 9.32859 19.1722 8.49295 18.5496 7.87046C17.9264 7.2479 17.0914 6.90227 16.2109 6.90227C15.3303 6.90227 14.4947 7.24788 13.8722 7.87046C13.312 8.43062 12.972 9.16814 12.9131 9.9582L12.8963 10.1818C12.8774 10.4363 12.6643 10.6313 12.4091 10.6271L7.47227 10.5422C7.3377 10.5394 7.22265 10.4889 7.13086 10.3907C7.03828 10.2926 6.99482 10.1748 7.00049 10.0402L7.01104 9.79628L7.01091 9.7964Z",
            fill: "currentColor",
          }),
        );
      }
      function X(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M2 6.05005V30.05H34V6.05005H2ZM25 10.05C25.5933 10.05 26.1734 10.226 26.6667 10.5556C27.1601 10.8853 27.5446 11.3538 27.7716 11.902C27.9987 12.4502 28.0581 13.0534 27.9424 13.6353C27.8266 14.2173 27.5409 14.7518 27.1213 15.1714C26.7018 15.5909 26.1672 15.8766 25.5853 15.9924C25.0033 16.1082 24.4001 16.0488 23.8519 15.8217C23.3038 15.5946 22.8352 15.2101 22.5056 14.7168C22.1759 14.2234 22 13.6434 22 13.05C22 12.2544 22.3161 11.4913 22.8787 10.9287C23.4413 10.3661 24.2044 10.05 25 10.05V10.05ZM23 26.05H6L14.5 15.05L19.4 21.39L22 18.05L28.22 26.05H23Z",
            fill: "currentColor",
          }),
        );
      }
      function j(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M18 4.15002C16.4087 4.15002 14.8826 4.78217 13.7574 5.90738C12.6321 7.0326 12 8.55872 12 10.15H24C24 8.55872 23.3679 7.0326 22.2426 5.90738C21.1174 4.78217 19.5913 4.15002 18 4.15002Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M34 22.7V19.7H26V17.7L31 15.1V11.15L25.25 14.15H10.75L5 11.15V15.08L10 17.68V19.68H2V22.68H10V24.6L5 27.2V31.13L10.61 28.2C11.2158 29.6612 12.2412 30.91 13.5566 31.7886C14.8719 32.6671 16.4182 33.1361 18 33.1361C19.5818 33.1361 21.1281 32.6671 22.4434 31.7886C23.7588 30.91 24.7842 29.6612 25.39 28.2L31 31.15V27.22L26 24.62V22.7H34Z",
            fill: "currentColor",
          }),
        );
      }
      function J(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18.0001 2C16.4019 2.02152 14.8236 2.36052 13.3555 2.99755C11.8873 3.63458 10.558 4.55714 9.44364 5.71257C8.32928 6.868 7.45165 8.2336 6.86098 9.73129C6.27031 11.229 5.97819 12.8294 6.00127 14.441C6.00127 21.316 18.0001 35 18.0001 35C18.0001 35 29.9989 21.316 29.9989 14.441C30.0426 11.187 28.8032 8.04868 26.5532 5.71579C24.3033 3.3829 21.2268 2.04636 18.0001 2ZM25.6357 15.53C25.6328 15.8694 25.4971 16.1939 25.2581 16.4329C25.019 16.6719 24.696 16.806 24.3594 16.806H20.5416V20.656C20.5416 20.9974 20.4072 21.3247 20.1678 21.5661C19.9285 21.8074 19.6039 21.943 19.2654 21.943H16.7238C16.3853 21.943 16.0607 21.8074 15.8214 21.5661C15.5821 21.3247 15.4476 20.9974 15.4476 20.656V16.806H11.6407C11.3051 16.806 10.9833 16.6716 10.746 16.4323C10.5087 16.193 10.3754 15.8684 10.3754 15.53V12.956C10.3754 12.6176 10.5087 12.293 10.746 12.0537C10.9833 11.8145 11.3051 11.68 11.6407 11.68H15.4585V7.82999C15.4585 7.48865 15.593 7.16135 15.8323 6.91999C16.0717 6.67863 16.3962 6.54301 16.7347 6.54301H19.2763C19.6148 6.54301 19.9394 6.67863 20.1787 6.91999C20.4181 7.16135 20.5525 7.48865 20.5525 7.82999V11.68H24.3703C24.7069 11.68 25.0299 11.8141 25.2689 12.0531C25.5079 12.2921 25.6437 12.6166 25.6466 12.956L25.6357 15.53Z",
            fill: "currentColor",
          }),
        );
      }
      function Y(e) {
        return n.createElement(
          "svg",
          {
            style: r,
            className: "SVGIcon_Button",
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M31.3137 19.5299L10.0583 32.3788C9.77894 32.5477 9.45165 32.6083 9.13395 32.5496C8.81603 32.4909 8.52835 32.3169 8.32083 32.0582C8.11354 31.7995 8 31.4723 8 31.1346V5.4368C8 5.09914 8.11354 4.77196 8.32083 4.51325C8.52833 4.25455 8.81604 4.08049 9.13395 4.02181C9.45165 3.96313 9.77896 4.02377 10.0583 4.19261L31.3137 17.0415C31.593 17.2103 31.8068 17.4769 31.9172 17.7942C32.0276 18.1116 32.0276 18.4598 31.9172 18.7772C31.8068 19.0945 31.593 19.3611 31.3137 19.5299Z",
            fill: "currentColor",
          }),
        );
      }
      function K(e) {
        return n.createElement(
          "svg",
          {
            className: "SVGIcon_Button",
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M14.3333 30C14.3333 30.5523 13.8856 31 13.3333 31H8C7.44772 31 7 30.5523 7 30V6C7 5.44772 7.44772 5 8 5H13.3333C13.8856 5 14.3333 5.44772 14.3333 6V30ZM29 6C29 5.44772 28.5523 5 28 5H22.6667C22.1144 5 21.6667 5.44772 21.6667 6V30C21.6667 30.5523 22.1144 31 22.6667 31H28C28.5523 31 29 30.5523 29 30V6Z",
            fill: "currentColor",
          }),
        );
      }
      function ee(e) {
        return n.createElement(
          "svg",
          {
            className: "SVGIcon_Button",
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M4 4H14V8H8V14H4V4ZM22 4V8H28V14H32V4H22ZM28 28H22V32H32V22H28V28ZM8 22H4V32H14V28H8V22Z",
            fill: "currentColor",
          }),
        );
      }
      function te(e) {
        return n.createElement(
          "svg",
          {
            width: "128",
            height: "128",
            viewBox: "0 0 128 128",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          n.createElement("path", {
            d: "M12 88H116V40H12V88ZM128 94C128 97.3137 125.314 100 122 100H6C2.78979 100 0.168429 97.4789 0.0078125 94.3086L0 94V34C0 30.6863 2.68629 28 6 28H122C125.314 28 128 30.6863 128 34V94Z",
            fill: "currentColor",
          }),
        );
      }
      function ie(e) {
        return n.createElement(
          "svg",
          {
            width: "128",
            height: "128",
            viewBox: "0 0 128 128",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          n.createElement("path", {
            d: "M12 88H116V40H12V88ZM128 94C128 97.3137 125.314 100 122 100H6C2.78979 100 0.168429 97.4789 0.0078125 94.3086L0 94V34C0 30.6863 2.68629 28 6 28H122C125.314 28 128 30.6863 128 34V94Z",
            fill: "currentColor",
          }),
        );
      }
      function ne(e) {
        let { direction: t, ...i } = e,
          r = { transform: `scaleX( ${"right" == t ? "-1" : "1"} )` };
        return n.createElement(
          "svg",
          {
            style: r,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...e,
          },
          n.createElement("rect", {
            fill: "currentColor",
            x: "3.82617",
            y: "2",
            width: "3",
            height: "4",
          }),
          n.createElement("rect", {
            fill: "currentColor",
            x: "3.82617",
            y: "9",
            width: "3",
            height: "4",
          }),
          n.createElement("rect", {
            fill: "currentColor",
            x: "3.82617",
            y: "16",
            width: "3",
            height: "4",
          }),
          n.createElement("rect", {
            fill: "currentColor",
            x: "3.82617",
            y: "23",
            width: "3",
            height: "4",
          }),
          n.createElement("rect", {
            fill: "currentColor",
            x: "3.82617",
            y: "30",
            width: "3",
            height: "4",
          }),
          n.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10.0001 22.0989V17.8189L16.2074 15.869L16.2459 12.2486C16.2407 11.8588 16.0085 11.482 15.6333 11.3488C14.9327 11.0739 14.2894 10.6674 13.7463 10.0736C12.4484 8.65217 12.1894 6.49723 13.1336 4.75391C14.5932 1.99742 18.1636 1.18729 20.5946 2.88529C22.7995 4.4254 23.2317 7.43069 21.5622 9.61139C20.9843 10.3662 20.2727 10.8991 19.4342 11.2575C19.0506 11.4186 18.8005 11.8019 18.8058 12.1916L18.7749 15.6885L22.2544 14.6004C22.6449 14.4869 22.9514 14.1433 22.9958 13.7452C23.1147 12.6267 23.6444 11.538 24.5846 10.6499C26.1799 9.18956 28.571 8.84302 30.4666 9.82377C33.324 11.3048 33.8524 14.9779 31.6005 17.3526C30.0756 18.9478 27.5988 19.4062 25.6321 18.4616C25.0025 18.1506 24.4586 17.7277 24.0568 17.2325C23.8101 16.9314 23.3638 16.8342 22.9733 16.9477L19.373 18.0802L19.2532 29.7966C19.2494 32.0682 17.3331 33.9479 14.9505 34L15.093 20.4972L10.0001 22.0989ZM18.8394 5.17784C19.7723 5.82945 19.9292 7.09773 19.2443 7.99235C18.5379 8.91502 17.2182 9.10883 16.3136 8.47697C15.3807 7.82537 15.2238 6.55708 15.9087 5.66246C16.6151 4.73979 17.9349 4.54605 18.8394 5.17784ZM29.2418 12.4438C30.1747 13.0954 30.3316 14.3637 29.6467 15.2584C28.9403 16.181 27.6205 16.3748 26.716 15.743C25.7831 15.0914 25.6262 13.8231 26.3111 12.9285C27.0175 12.0058 28.3373 11.812 29.2418 12.4438ZM17.3194 17.5897C17.7434 17.8859 17.8326 18.5061 17.5116 18.9255C17.1691 19.3728 16.5447 19.4515 16.1207 19.1555C15.6967 18.8593 15.6074 18.2391 15.9285 17.8197C16.2496 17.4003 16.8954 17.2935 17.3194 17.5897Z",
          }),
        );
      }
      function re(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M34 9.42197C32.4337 7.40864 29.497 6.99082 27.4217 8.47232L16.6537 16.2215L13.3254 13.8283C12.973 13.5625 12.7772 13.1065 12.8947 12.6887C13.0905 11.891 13.1296 11.0553 12.9339 10.1817C12.464 8.09242 10.6627 6.42103 8.47002 6.07916C5.02425 5.50936 2.00921 8.09249 2.00921 11.3592C2.00921 14.3222 4.47613 16.7153 7.53026 16.7153C8.58742 16.7153 9.52721 16.4494 10.3887 15.9556C10.7803 15.7277 11.2894 15.7656 11.6417 16.0315L14.8525 18.3486L11.6417 20.6657C11.2892 20.9316 10.7803 20.9697 10.3887 20.7417C9.2923 20.096 7.96112 19.83 6.55142 20.0579C4.20203 20.4757 2.36168 22.337 2.04843 24.6542C1.57862 28.1489 4.5936 31.0739 8.19599 30.694C10.6236 30.4281 12.6207 28.5668 13.0122 26.2116C13.1298 25.4519 13.0905 24.6922 12.8947 24.0084C12.7772 23.5905 12.973 23.1346 13.3254 22.8688L16.6537 20.4756L27.4217 28.2248C29.4971 29.7442 32.4337 29.3264 34 27.2751L21.5874 18.3483L34 9.42197ZM7.53026 13.6005C6.27732 13.6005 5.22 12.6128 5.22 11.3592C5.22 10.1437 6.23803 9.11802 7.53026 9.11802C8.7832 9.11802 9.84052 10.1056 9.84052 11.3592C9.84052 12.5749 8.82249 13.6005 7.53026 13.6005ZM7.53026 27.5794C6.27732 27.5794 5.22 26.5918 5.22 25.3382C5.22 24.1227 6.23803 23.0969 7.53026 23.0969C8.7832 23.0969 9.84052 24.0846 9.84052 25.3382C9.84052 26.5537 8.82249 27.5794 7.53026 27.5794ZM18.6115 19.4123C18.0242 19.4123 17.5151 18.9185 17.5151 18.3487C17.5151 17.7789 18.0242 17.285 18.6115 17.285C19.1989 17.285 19.708 17.7789 19.708 18.3487C19.7078 18.9185 19.238 19.4123 18.6115 19.4123Z",
            fill: "currentColor",
          }),
        );
      }
      function se(e) {
        return n.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...e,
          },
          n.createElement("path", {
            fill: "currentColor",
            d: "M27 20.1931C26.9943 23.588 25.6228 26.8421 23.1861 29.2427C20.7495 31.6432 17.4463 32.9943 14.0003 32.9999C12.2937 33.0055 10.603 32.6766 9.02663 32.0323C7.45029 31.3879 6.01984 30.4411 4.81854 29.2469C2.3908 26.8485 1.01923 23.6049 1.0006 20.2178C0.93382 13.0373 6.47794 7.52611 13.8968 7.3896H19.6875V4L27 9.19871L19.6875 14.3991V11.1723H13.9519C8.7116 11.271 4.7935 15.1424 4.84024 20.1783C4.88532 25.1649 8.99373 29.2238 14.0003 29.2238C16.4289 29.2212 18.7572 28.2696 20.4745 26.5778C22.1918 24.8861 23.1577 22.5923 23.1604 20.1997",
          }),
          n.createElement("rect", {
            fill: "currentColor",
            width: "3",
            height: "32",
            transform: "matrix(-1 0 0 1 34.1738 2)",
          }),
        );
      }
      function oe(e) {
        return n.createElement(
          "svg",
          {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          n.createElement("path", {
            d: "M22.6666 6.28132C21.6224 4.93909 19.6646 4.66055 18.2811 5.64821L11.1024 10.8143L8.88352 9.21887C8.64856 9.04164 8.51804 8.73769 8.5964 8.45915C8.72692 7.92736 8.75301 7.37017 8.62249 6.78778C8.30928 5.39495 7.10839 4.28069 5.6466 4.05277C3.34942 3.67291 1.33939 5.39499 1.33939 7.57283C1.33939 9.54815 2.984 11.1435 5.0201 11.1435C5.72487 11.1435 6.35139 10.9663 6.92575 10.637C7.18679 10.4851 7.52619 10.5104 7.76104 10.6877L9.90155 12.2324L7.76104 13.7772C7.52608 13.9544 7.18679 13.9798 6.92575 13.8278C6.19479 13.3973 5.30733 13.22 4.36753 13.3719C2.80127 13.6504 1.57437 14.8913 1.36554 16.4361C1.05233 18.7659 3.06232 20.7159 5.46391 20.4627C7.08233 20.2854 8.4137 19.0445 8.67474 17.4744C8.75309 16.9679 8.72691 16.4614 8.59639 16.0056C8.51804 15.727 8.64856 15.4231 8.88352 15.2458L11.1024 13.6504L18.2811 18.8165C19.6646 19.8295 21.6224 19.5509 22.6666 18.1834L14.3915 12.2322L22.6666 6.28132ZM5.02009 9.06697C4.1848 9.06697 3.47992 8.40856 3.47992 7.57283C3.47992 6.7625 4.15861 6.07868 5.02009 6.07868C5.85538 6.07868 6.56027 6.73709 6.56027 7.57283C6.56027 8.38324 5.88158 9.06697 5.02009 9.06697ZM5.02009 18.3863C4.1848 18.3863 3.47992 17.7278 3.47992 16.8921C3.47992 16.0818 4.15861 15.398 5.02009 15.398C5.85538 15.398 6.56027 16.0564 6.56027 16.8921C6.56027 17.7024 5.88158 18.3863 5.02009 18.3863ZM12.4076 12.9416C12.016 12.9416 11.6766 12.6123 11.6766 12.2324C11.6766 11.8526 12.016 11.5233 12.4076 11.5233C12.7992 11.5233 13.1386 11.8526 13.1386 12.2324C13.1385 12.6123 12.8253 12.9416 12.4076 12.9416Z",
            fill: "currentColor",
          }),
        );
      }
      function ae(e) {
        return n.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          n.createElement(
            "text",
            {
              color: "currentColor",
              fontFamily: '"Motiva Sans", Arial, Helvetica, sans-serif',
              fontSize: 30,
              fontWeight: 600,
              textAnchor: "middle",
              x: 18,
              y: 30,
            },
            e.nNumber,
          ),
        );
      }
      function le(e) {
        return n.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...e,
          },
          n.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10 8H2V32H34V8H26L24.2764 4.55279C24.107 4.214 23.7607 4 23.382 4H12.618C12.2393 4 11.893 4.214 11.7236 4.55279L10 8ZM18 27C21.866 27 25 23.866 25 20C25 16.134 21.866 13 18 13C14.134 13 11 16.134 11 20C11 23.866 14.134 27 18 27Z",
          }),
        );
      }
    },
  },
]);
